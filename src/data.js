//1) computeUsersStats(users, progress, courses)
window.computeUsersStats = (users, progress, courses) => {
  let lista = users.map(
    (user) => {
      if (Object.keys(progress[user.id]).length === 0) {
        user.stats = {
          percent: 0,
          exercises: {
            total: 0,
            completed: 0,
            percent: 0,
          },
          reads: {
            total: 0,
            completed: 0,
            percent: 0,
          },
          quizzes: {
            total: 0,
            completed: 0,
            percent: 0,
            scoreSum: 0,
            scoreAvg: 0,
          }
        };
        return user
      }
      user.stats = {

        percent: promedioCursos(progress[user.id], courses),
        exercises: {
          total: totalExcercises(progress[user.id], courses),
          completed: completeExcercise(progress[user.id], courses),
          percent: (completeExcercise(progress[user.id], courses) / totalExcercises(progress[user.id], courses)) * 100 || 0, //puedo parsear una funcion?????
        },
        reads: {
          total: totalReads(progress[user.id], courses),
          completed: completedReads(progress[user.id], courses),
          percent: Math.ceil((completedReads(progress[user.id], courses) / totalReads(progress[user.id], courses)) * 100) || 0,
        },
        quizzes: {
          total: totalQuizzes(progress[user.id], courses),
          completed: completeQuizzes(progress[user.id], courses),
          percent: Math.ceil((completeQuizzes(progress[user.id], courses) / totalQuizzes(progress[user.id], courses)) * 100) || 0,
          scoreSum: scoreSum(progress[user.id], courses),
          scoreAvg: Math.ceil((scoreSum(progress[user.id], courses) / completeQuizzes(progress[user.id], courses))) || 0,
        }
      };
      return user;
    })
  console.log(lista);
  return lista.filter((user) => user.hasOwnProperty("stats"));
}

function promedioCursos(progress, courses) {
  let contador = 0;
  courses.forEach(curso => {
    contador += progress[curso].percent;
  });
  return contador / courses.length;
}

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
            return exercise.completed === 1;
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
  return Math.round(total);
}

function completeQuizzes (progress, courses) {
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

function scoreSum(progress, courses) {
  let total = 0;
  courses.forEach(curso => {
    Object.values(progress[curso].units).forEach(unit => {
      let quizzes = Object.values(unit.parts).filter((part) => part.type === "quiz" && part.completed === 1)
      quizzes.forEach(quiz => {
        total += quiz.score;
      });
    });
  });
  return total;
};
//2) sortUsers(users, orderBy, orderDirection)
window.sortUsers = (users, orderBy, orderDirection) => {
  let compareNames = (user1, user2) => {
    if (user1.name < user2.name) {
      return -1;
    }
    if (user1.name > user2.name) {
      return 1;
    } else return 0;
  }
  let compareNamesDesc = (user1, user2) => -compareNames(user1, user2);

  let comparePercent = (user1, user2) => {
    if (user1.stats.percent < user2.stats.percent) {
      return -1;
    } else if (user1.stats.percent > user2.stats.percent) {
      return 1;
    } else return 0;
  }
  let comparePercentDesc = (user1, user2) => -comparePercent(user1, user2);

  let compareExercisesPercent = (user1, user2) => {
    if (user1.stats.exercises.percent < user2.stats.exercises.percent) {
      return -1;
    } else if (user1.stats.exercises.percent > user2.stats.exercises.percent) {
      return 1;
    } else return 0;
  }
  let compareExercisesPercentDesc = (user1, user2) => -compareExercisesPercent(user1, user2);

  let compareQuizzesPercent = (user1, user2) => {
    if (user1.stats.quizzes.percent < user2.stats.quizzes.percent) {
      return -1;
    } else if (user1.stats.quizzes.percent > user2.stats.quizzes.percent) {
      return 1;
    } else return 0;
  }
  let compareQuizzesPercentDesc = (user1, user2) => -compareQuizzesPercent(user1, user2);

  let compareQuizzesScoreAvg = (user1, user2) => {
    if (user1.stats.quizzes.scoreAvg < user2.stats.quizzes.scoreAvg) {
      return -1;
    } else if (user1.stats.quizzes.scoreAvg > user2.stats.quizzes.scoreAvg) {
      return 1;
    } else return 0;
  }
  let compareQuizzesScoreAvgDesc = (user1, user2) => -compareQuizzesScoreAvg(user1, user2);

  let compareReadsPercent = (user1, user2) => {
    if (user1.stats.reads.percent < user2.stats.reads.percent) {
      return -1;
    } else if (user1.stats.reads.percent > user2.stats.reads.percent) {
      return 1;
    } else return 0;
  }
  let compareReadsPercentDesc = (user1, user2) => -compareReadsPercent(user1, user2);


  if (orderBy === "name") {
    if (orderDirection === "ASC") {
      users.sort(compareNames)
    } else users.sort(compareNamesDesc)
  }
  if (orderBy === "percent") {
    if (orderDirection === "ASC") {
      users.sort(comparePercent)
    } else users.sort(comparePercentDesc)
  }
  if (orderBy === "exercises percent") {
    if (orderDirection === "ASC") {
      users.sort(compareExercisesPercent)
    } else users.sort(compareExercisesPercentDesc)
  }
  if (orderBy === "quizzes percent") {
    if (orderDirection === "ASC") {
      users.sort(compareQuizzesPercent)
    } else users.sort(compareQuizzesPercentDesc)
  }
  if (orderBy === "quizzes scoreAvg") {
    if (orderDirection === "ASC") {
      users.sort(compareQuizzesScoreAvg)
    } else users.sort(compareQuizzesScoreAvgDesc)
  }
  if (orderBy === "reads percent") {
    if (orderDirection === "ASC") {
      users.sort(compareReadsPercent);
    } else users.sort(compareReadsPercentDesc)
  }

  return users;
}
//3) filterUsers(users, search)
window.filterUsers = (users, search) => {
  let filterName = users.filter((user) => user.name.toUpperCase().includes(search.toUpperCase()));
  return filterName;
};

//4) processCohortData(options)
window.processCohortData = (options) => {
  let courses = Object.keys(options.cohort.coursesIndex);
  let students = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
  students = sortUsers(students, options.orderBy, options.orderDirection);
  if (options.search !== '') {
    students = filterUsers(students, options.search);
  }
  return students;
}

/////////////////////////////////////////////////////////////
