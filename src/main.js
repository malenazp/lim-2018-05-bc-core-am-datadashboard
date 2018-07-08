/* ================================================ */
/* =============== BOTONES DEL NAV ================ */
/* ================================================ */

let prin = document.getElementById('div-principal');
let volver = document.getElementById('view-volver');
let stud = document.getElementById('div-students');
let cour = document.getElementById('div-courses');
let grap = document.getElementById('div-graphs');

let btnPrincipal = document.getElementById('view-principal');
let btnCourses = document.getElementById('view-courses');
let btnStudents = document.getElementById('view-students');
let btnGraphs = document.getElementById('view-graphs');


//Evento click del boton ESTUDIANTES, CURSOS, GRAFICOS Y PRINCIPAL
btnStudents.addEventListener('click', () => {   
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('hide', 'show');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divAbout.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});

btnCourses.addEventListener('click', () => {
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('hide', 'show');
    grap.classList.replace('show', 'hide');
    divAbout.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});

btnGraphs.addEventListener('click', () => {
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('hide', 'show');
    divAbout.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});

btnPrincipal.addEventListener('click', () => {
    prin.classList.replace('hide', 'show');
    volver.classList.replace('show', 'hide');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divAbout.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});

/* ================================================ */
/* ============== BOTONES DEL MENUUU ============== */
/* ================================================ */
// faltaaaaa

let btnAbout = document.getElementById('newTab');
let btnMision = document.getElementById('li-mision');
let btnVision = document.getElementById('li-vision');
let btnObjetivos = document.getElementById('li-objetivos');
let btnEmpresas = document.getElementById('li-empresas');
let btnContactanos = document.getElementById('li-contactanos');

let divAbout = document.getElementById('div-about');
let divMision = document.getElementById('div-mision');
let divVision = document.getElementById('div-vision');
let divObjetivos = document.getElementById('div-objetivos');
let divEmpresas = document.getElementById('div-empresas');
let divContactanos = document.getElementById('div-contactanos');

//Evento click del boton About-Mision-Vision-Objetivos-Empresas-Contactanos
btnAbout.addEventListener('click', () => {
    divAbout.classList.replace('hide', 'show');
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});
btnMision.addEventListener('click', () => {
    divAbout.classList.replace('show', 'hide');
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('hide', 'show');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});
btnVision.addEventListener('click', () => {
    divAbout.classList.replace('show', 'hide');
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divVision.classList.replace('hide', 'show');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});

btnObjetivos.addEventListener('click', () => {
    divAbout.classList.replace('show', 'hide');
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('hide', 'show');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('show', 'hide');
});
btnEmpresas.addEventListener('click', () => {
    divAbout.classList.replace('show', 'hide');
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('hide', 'show');
    divContactanos.classList.replace('show', 'hide');
});
btnContactanos.addEventListener('click', () => {
    divAbout.classList.replace('show', 'hide');
    prin.classList.replace('show', 'hide');
    volver.classList.replace('hide', 'show');
    stud.classList.replace('show', 'hide');
    cour.classList.replace('show', 'hide');
    grap.classList.replace('show', 'hide');
    divVision.classList.replace('show', 'hide');
    divMision.classList.replace('show', 'hide');
    divObjetivos.classList.replace('show', 'hide');
    divEmpresas.classList.replace('show', 'hide');
    divContactanos.classList.replace('hide', 'show');
});

/* ==========Declarando parámetro options=============== */

let options = {
    cohort: null,
    cohortData: {
      users: null,
      progress: null,
  
    },
    orderBy: 'name',
    orderDirection: 'ASC',
    search: ''
  }

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

let loadUserJson = fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
    .then(response => response.json())
    .then(data => {
        usersData = data;
        userByCohort = usersData.filter(user => user.signupCohort = user.signupCohort); //revisar!!
        cohortUsers = usersData.filter(user => user.signupCohort === "lim-2018-03-pre-core-pw");
    })
    .catch((err) => {
        // console.error(err);
    })

let loadProgressJson = fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    .then(response => response.json())
    .then(data => {
        progressData = data;
    })
    .catch((err) => {
        // console.error(err);
    })

let loadCohortsJson = fetch("../data/cohorts.json")
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
        // console.error(err);
    })



Promise.all([loadUserJson, loadProgressJson, loadCohortsJson]).then((values) => {
    userStats = window.computeUsersStats(usersData, progressData, cohortData["lim-2018-03-pre-core-pw"])
});

//Busqueda
let inputText = document.getElementById("InputSearch");
inputText.addEventListener("keyup", (event) => {
    event.preventDefault()
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
    if (document.getElementById("nameOrdA").selected == true) {
        let nombreOrdenado = window.sortUsers(userStats, "name", "ASC")
        imprimirLista(nombreOrdenado);
    }
    if (document.getElementById("nameOrdD").selected == true) {
        let nombreOrdenado = window.sortUsers(userStats, "name", "DES")
        imprimirLista(nombreOrdenado);
    }
    if (document.getElementById("aveOrdA").selected == true) {
        let avanceGral = window.sortUsers(userStats, "percent", "ASC")
        imprimirLista(avanceGral);
    }
    if (document.getElementById("aveOrdD").selected == true) {
        let avanceGral = window.sortUsers(userStats, "percent", "DES")
        imprimirLista(avanceGral);
    }
    if (document.getElementById("exeComA").selected == true) {
        let ejerciciosOrdenados = window.sortUsers(userStats, "exercises percent", "ASC")
        imprimirLista(ejerciciosOrdenados);
    }
    if (document.getElementById("exeComD").selected == true) {
        let ejerciciosOrdenados = window.sortUsers(userStats, "exercises percent", "DES")
        imprimirLista(ejerciciosOrdenados);
    }
    if (document.getElementById("quizAveA").selected == true) {
        let promPtosQuizzes = window.sortUsers(userStats, "quizzes scoreAvg", "ASC")
        imprimirLista(promPtosQuizzes);
    }
    if (document.getElementById("quizAveD").selected == true) {
        let promPtosQuizzes = window.sortUsers(userStats, "quizzes scoreAvg", "DES")
        imprimirLista(promPtosQuizzes);
    }
}

