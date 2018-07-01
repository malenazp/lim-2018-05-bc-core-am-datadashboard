/* ================================================ */
/* =============== BOTONES DEL NAV ================ */
/* ================================================ */

let prin = document.getElementById('div-principal');
let prin2 = document.getElementById('view-principal2');
let stud = document.getElementById('div-students');
let cour = document.getElementById('div-courses');
let grap = document.getElementById('div-graphs');
let menu = document.getElementById('div-menu');

let btnPrincipal = document.getElementById('view-principal');
let btnCourses = document.getElementById('view-courses');
let btnStudents = document.getElementById('view-students');
let btnGraphs = document.getElementById('view-graphs');


//Evento click del boton ESTUDIANTES, CURSOS, GRAFICOS Y PRINCIPAL
btnStudents.addEventListener('click', () => {
    prin.classList.replace('show', 'hide');
    stud.classList.replace('hide', 'show');
    prin2.classList.replace('hide', 'show');
    document.form.btnStudents.disabled = false;
    document.form.btnCourses.disabled = false;
    document.form.btnGraphs.disabled = false;
});

btnCourses.addEventListener('click', () => {
    prin.classList.replace('show', 'hide');
    cour.classList.replace('hide', 'show');
    prin2.classList.replace('hide', 'show');
    document.form.btnStudents.disabled = false;
    document.form.btnCourses.disabled = false;
    document.form.btnGraphs.disabled = false;
});

btnGraphs.addEventListener('click', () => {
    prin.classList.replace('show', 'hide');
    grap.classList.replace('hide', 'show');
    prin2.classList.replace('hide', 'show');
    document.form.btnStudents.disabled = false;
    document.form.btnCourses.disabled = false;
    document.form.btnGraphs.disabled = false;
});

btnPrincipal.addEventListener('click', () => {
    prin.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    prin2.classList.replace('show', 'hide');
    document.form.btnStudents.disabled = true;
    document.form.btnCourses.disabled = true;
    document.form.btnGraphs.disabled = true;
});

/* ================================================ */
/* ============== BOTONES DEL MENUUU ============== */
/* ================================================ */
// faltaaaaa
// let menuAbout = document.getElementById('div-about');
// let menuMision = document.getElementById('div-mision');
// let menuVision = document.getElementById('div-vision');
// let menuObjetivos = document.getElementById('div-objetivos');
// let menuEmpresas = document.getElementById('div-empresas');
// let menuContactanos = document.getElementById('div-contactanos');

// menuAbout.addEventListener('click', () => {
//   menuAbout.classList.replace('hide', 'show');
//   menuMision.classList.replace('show', 'hide');
//   menuVision.classList.replace('show', 'hide');
//   menuObjetivos.classList.replace('show', 'hide');
//   menuEmpresas.classList.replace('show', 'hide');
//   menuContactanos.classList.replace('show', 'hide');
//   prin.classList.replace('show', 'hide');
//     stud.classList.replace('show', 'hide');
//     cour.classList.replace('show', 'hide');
//     grap.classList.replace('show', 'hide');
//     prin2.classList.replace('show', 'hide');
//   document.form.btnStudents.disabled = false;
//   document.form.btnCourses.disabled = false;
//   document.form.btnGraphs.disabled = false;
// });

// menuVision.addEventListener('click', () => {
//   menuVision.className.replace('hide', 'show');
//   prin.classList.replace('show', 'hide');
//   grap.classList.replace('show', 'hide');
//   prin2.classList.replace('show', 'hide');
//   document.form.btnStudents.disabled = false;
//   document.form.btnCourses.disabled = false;
//   document.form.btnGraphs.disabled = false;
// });





/* ================================================== */
/* ====Creando variables y conectando con JSON  ===== */
/* ================================================ */

// Raw Data
let usersData = [];
let progressData = {};
let cohortData = {};

let cohortUsers = [];
let userStats = [];
let cohorts = {};
let courses = [];
let userByCohort = [];

let loadUserJson = fetch("../../data/cohorts/lim-2018-03-pre-core-pw/users.json")
    .then(response => response.json())
    .then(data => {
        usersData = data;
        userByCohort = usersData.filter(user => user.signupCohort = user.signupCohort); //revisar!!
        cohortUsers = usersData.filter(user => user.signupCohort === "lim-2018-03-pre-core-pw");
    })
    .catch((err) => {
        console.error(err);
    })

let loadProgressJson = fetch("../../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    .then(response => response.json())
    .then(data => {
        progressData = data;
    })
    .catch((err) => {
        console.error(err);
    })

let loadCohortsJson = fetch("../../data/cohorts.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(
            function (cohort) {
                if (!cohort.coursesIndex) {
                    cohortData[cohort.id] = [];
                } else cohortData[cohort.id] = Object.keys(cohort.coursesIndex);
                // 
              let nameOfCohort = document.createElement('option');
              nameOfCohort.value = cohort.id;
              nameOfCohort.innerText = cohort.id;
              document.getElementById('selectCohorts').appendChild(nameOfCohort);
            })
        data.forEach(
            function (cohort) {
                courses = cohort.coursesIndex;
            })
        for (cohort of data) {
            cohorts[cohort.id] = {};
        }
        // .then((responseCohorts) => {   ///////////////////////////////////////////////////
          // data.forEach(cohort => {
          //     let nameOfCohort = document.createElement('option');
          //     nameOfCohort.value = cohort.id;
          //     nameOfCohort.innerText = cohort.id;
          //     document.getElementById('selectCohorts').appendChild(nameOfCohort);
          // })
          //////////////////////////////////////////////////////////////////////

    })
    .catch((err) => {
        console.error(err);
    })



Promise.all([loadUserJson, loadProgressJson, loadCohortsJson]).then((values) => {
    userStats = window.computeUsersStats(usersData, progressData, cohortData["lim-2018-03-pre-core-pw"])
});


//Busqueda
let inputText = document.getElementById("InputSearch");
inputText.addEventListener("keypress", (event) => {
    let key = event.which || event.keyCode;
    if (key === 13) {
        let name = inputText.value;
        let perfil = window.filterUsers(userStats, name);
        imprimirLista(perfil)
        inputText.value = "";
    }
})

function imprimirLista(usersList) {
    let lista = document.querySelector("#display")
    lista.innerHTML = "";
    usersList.forEach((userStats) => {
        let listaConStats = `<tr>
        <td class="name">${userStats.name}</td>
        <td class="percent">${userStats.stats.percent}</td>
        <td class="exercisesCompleted">${userStats.stats.exercises.completed} de ${userStats.stats.exercises.total}</td>
        <td class="quizzesCompleted">${userStats.stats.quizzes.completed}</td>
        <td class="quizzesScoreAvg">${userStats.stats.quizzes.scoreAvg}</td>
        <td class="readsCompleted">${userStats.stats.reads.completed}</td>
        </tr>`
        lista.innerHTML += listaConStats
    })
}

//MENU
let botonCohort = document.getElementById("btn")
botonCohort.addEventListener("click", (event) => {
    imprimirLista(userStats);
})


//selección ASC y DEC
function seleccion() {
    if (document.getElementById("nameord").selected == true) {
        let nombreOrdenado = window.sortUsers(userStats, "name", "ASC")
        imprimirLista(nombreOrdenado);
    }
    if (document.getElementById("aveord").selected == true) {
        let avanceGral = window.sortUsers(userStats, "percent", "ASC")
        imprimirLista(avanceGral);
    } else if (document.getElementById("btnejerCom").selected == true) {
        let ejerciciosOrdenados = window.sortUsers(userStats, "exercises percent", "ASC")
        imprimirLista(ejerciciosOrdenados);
    } else if (document.getElementById("btnquizzes").selected == true) {
        let promPtosQuizzes = window.sortUsers(userStats, "quizzes scoreAvg", "ASC")
        imprimirLista(promPtosQuizzes);
    }
    else if (document.getElementById("nameordDesc").selected == true) {

        let nombreOrdenadoDesc = window.sortUsers(userStats, "name", "DESC")
        imprimirLista(nombreOrdenadoDesc);
    }
}


/* ================================================ */
// IMPRIMIENTO COHORTS  ==========================
/* ================================================ */

// document.addEventListener('DOMContentLoaded', (e) => {
//   e.preventDefault();
//   getListOfCohorts();
// })
// document.getElementById('selectCohorts').addEventListener('change', (e) => {
//   e.preventDefault();
//   getUsersOfCohort(document.getElementById('selectCohorts').value);
//   });
// document.getElementById('butonData').addEventListener("click", getInfoData);

/*  ========================================================================*/


