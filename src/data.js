
window.computeUsersStats = (users, progress, courses) => {
  //console.log(users, progress, courses);
    let lista = users.map(userWhitStats => {
    try {
      userWhitStats.stats = {
        percent: promedioCursos(progress[userWhitStats.id], courses),
        exercises: {
          total: totalExcercises(progress[userWhitStats.id], courses),
          completed: completeExcercise(progress[userWhitStats.id], courses),
          percent: (completeExcercise(progress[userWhitStats.id], courses) / totalExcercises(progress[userWhitStats.id], courses)) * 100,
        },
        reads: {
          total: totalReads(progress[userWhitStats.id], courses),
          completed: completedReads(progress[userWhitStats.id], courses),
          percent: (completedReads(progress[userWhitStats.id], courses) / totalReads(progress[userWhitStats.id], courses)) * 100,
        },
        quizzes: {
          total: totalQuizzes(progress[userWhitStats.id], courses),
          completed: completeQuizzes(progress[userWhitStats.id], courses),
          percent: (completeQuizzes(progress[userWhitStats.id], courses) / totalQuizzes(progress[userWhitStats.id], courses)) * 100,
          scoreSum: scoreSum(progress[userWhitStats.id], courses),
          scoreAvg: (scoreSum(progress[userWhitStats.id], courses) / completeQuizzes(progress[userWhitStats.id], courses)),
        }
      }
      return userWhitStats;
    } catch (error) {
     return {}; 
    }
      
    })
  console.log(lista);
  return lista
}

function promedioCursos(progress, courses) {
  let contador = 0;
  courses.forEach(curso => {
    contador += progress[curso].percent;
  });
  return contador / courses.length;
}
//funciones ejercicios, total por curso, completados por alumna y FALTA porcentaje de completados por alumna
function totalExcercises(progress, courses) {
  let total = 0;
  courses.forEach(curso => {
    Object.values(progress[curso].units).forEach(unit => {
      let exercises = Object.values(unit.parts).filter(ejercicio => ejercicio.hasOwnProperty("exercises"));
      exercises.forEach((parte) => {
        total += Object.values(parte.exercises).length;
      })
    })
  })
  return total;
}

function completeExcercise(progress, courses) {
  let total = 0;
  courses.forEach(curso => {
    Object.values(progress[curso].units).forEach(unit => {
      let partes = Object.values(unit.parts).filter(ejercicio => ejercicio.hasOwnProperty("exercises"));
      partes.forEach((parte) => {
        let completeExercices = Object.values(parte.exercises).filter(
          (exercise) => {
            return exercise.completado === 1;
          })
        total += completeExercices.length;
      })
    })
  })
  return total;
}

function totalReads(progress, courses) {
  let total = 0;
  courses.forEach(curso => {
    Object.values(progress[curso].units).forEach(unit => {
      let reads = Object.values(unit.parts).filter(lectura => lectura.hasOwnProperty("type") && lectura.type === "read"); //al no poner llaves se retorna automaticamente la primera linea
      total += reads.length
    })
  })
  return total;
}

function completedReads(progress, courses) {
  let total = 0;
  courses.forEach(curso => {
    Object.values(progress[curso].units).forEach(unit => {
      let lecturas = Object.values(unit.parts).filter(lectura => lectura.type === "read");
      let onlyReads = lecturas.filter((lectura) => lectura.completed === 1)
      total += onlyReads.length;
    })
  })
  return total;
}

function totalQuizzes(progress, courses) {
  let total = 0;
  Object.entries(progress).forEach(([nombre, curso]) => {
    if (courses.indexOf(nombre) >= 0) {
      Object.values(curso.units).forEach((unit) => {
        let quiz = Object.values(unit.parts).filter((part) => part.type === "quiz")
        total += quiz.length;
      })
    }
  })
  return total;
}

function completeQuizzes(progress, courses) {
  let total = 0;
  courses.forEach(curso => {
    Object.values(progress[curso].units).forEach(unit => {
      let quizzes = Object.values(unit.parts).filter(quiz => quiz.type === "quiz");
      let onlyQuizzes = quizzes.filter((quiz) => quiz.completed === 1)
      total += onlyQuizzes.length;
    })
  })
  return total;
}
//Suma de todas las puntuaciones (score) de los quizzes completados.
function scoreSum(progress, courses) {
  let total = 0;
  courses.forEach(curso => {
    Object.values(progress[curso].units).forEach(unit => {
      let quizzes = Object.values(unit.parts).filter((part) => part.type === "quiz" && part.completed === 1)
      quizzes.forEach(quiz => {
        total += quiz.score
      })
    })
  })
  return total
}



const courses = ["intro"];
const getInfoData = () => {
  fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json", { method: 'GET' })
    .then((response) => {
      if (response.status !== 200) {
        alert('Error')
      }
      return response.json();
    })
    .then((users) => {
      fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json", { method: 'GET' })
        .then((response) => {
          if (response.status !== 200) {
            alert('Error')
          }
          return response.json();
        })
        .then((progress) => {
          computeUsersStats(users, progress, courses);
        })
    })
};

/////////////////////////////////////////////////////////////////////////////////////

//Creando la lista de cohorts 
const getListOfCohorts = () => {
    fetch('../data/cohorts.json', { method: 'GET' })
        .then((response) => {
            if (response.status !== 200) {
                alert('Error')
            }
            return response.json();
        })
        .then((responseCohorts) => {
            responseCohorts.forEach(cohort => {
                let nameOfCohort = document.createElement('option');
                nameOfCohort.value = cohort.id;
                nameOfCohort.innerText = cohort.id;
                document.getElementById('selectCohorts').appendChild(nameOfCohort);
            })
        })
}
// Filtrando estudiantes por cohort
const getUsersOfCohort = (nameOfCohort) => {
    let arrayOfUsersOfOneCohort = [];
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json', { method: 'GET' })
        .then((response) => {
            if (response.status !== 200) {
                alert('Error')
            }
            return response.json();
        })
        .then((responseUsersOfCohort) => {
            responseUsersOfCohort.forEach(user => {
                if (user.signupCohort === nameOfCohort) {
                    arrayOfUsersOfOneCohort.push(user);
                }
            });
            paintUsersCohort(arrayOfUsersOfOneCohort);
        })
};
// Pinta la ista de usuarias del cohort y le da un "enlace" hacia progress
const paintUsersCohort = (arrayOfUsersOfOneCohort) => {
  document.getElementById('listUsers').innerHTML = '';
    arrayOfUsersOfOneCohort.forEach(user => {
        let createElementLi = document.createElement('li');
        let createElement_A = document.createElement('a');
        createElement_A.innerHTML = user.name,
            createElement_A.setAttribute('href', 'javascript;');
        createElement_A.addEventListener('click', (e) => {
            e.preventDefault();
            getUsersProgress(user.id);
        });
        createElementLi.appendChild(createElement_A);
        document.getElementById('listUsers').appendChild(createElementLi);
    });
}
//Traer progreso
const getUsersProgress = (idStudent) => {
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json', { method: 'GET' })
        .then((response) => {
            if (response.status !== 200) {
                alert('Error')
            }
            return response.json();
        })
        .then((progressStudents) => {
            let progressUser = progressStudents[idStudent];
            generateData(progressUser);
        })
};

const generateData = (progressUser) => {
//Aquí debe ir la información de cada usuaria
};

const createContainerForScore = (scoreForStudent) => {
  document.getElementById('listProgress').innerHTML = "";
    let createElement_Li = document.createElement('li');
    createElement_Li.innerText = scoreForStudent;
    let createElementP = document.createElement('p');
    createElementP.innerText = "Porcentaje de completidud de todos los cursos";
    document.getElementById('listProgress').appendChild(createElementP);
    document.getElementById('listProgress').appendChild(createElement_Li);

}

