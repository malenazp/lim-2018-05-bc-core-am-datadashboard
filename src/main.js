document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    getListOfCohorts();
})
document.getElementById('selectCohorts').addEventListener('change', (e) => {
    e.preventDefault();
    getUsersOfCohort(document.getElementById('selectCohorts').value);
    });
document.getElementById('butonData').addEventListener("click", getInfoData);
