let frontEndSkills = document.querySelector('.skills-list-front');
let frontEndTitle = document.querySelector('.front-end');
let frontEndList = document.querySelectorAll('.front-end-language');

let backEndSkills = document.querySelector('.skills-list-back');
let backEndTitle = document.querySelector('.back-end');
let backEndList = document.querySelectorAll('.back-end-language');

let dbmsSkills = document.querySelector('.skills-list-dbms');
let dbmsTitle = document.querySelector('.dbms');
let dbmsList = document.querySelectorAll('.dbms-list');


frontEndSkills.addEventListener('mouseover', (event) => {
    for (i = 0; i < frontEndList.length; i++) {
        frontEndList[i].style.color = 'white';
    }
    frontEndTitle.style.cssText = 'color: rgb(197, 197, 197); text-decoration-color: #cc0000';
    frontEndSkills.style.cssText = 'border: 0.2rem solid darkslategrey';
});

frontEndSkills.addEventListener('mouseout', (event) => {
    for (i = 0; i < frontEndList.length; i++) {
        frontEndList[i].style.color = 'rgb(197, 197, 197)';
    }
    frontEndTitle.style.cssText = 'color: white; text-decoration-color: red';
    frontEndSkills.style.cssText = 'border: none';
});


backEndSkills.addEventListener('mouseover', (event) => {
    for (i = 0; i < backEndList.length; i++) {
        backEndList[i].style.color = 'white';
    }
    backEndTitle.style.cssText = 'color: rgb(197, 197, 197); text-decoration-color: #cc0000';
    backEndSkills.style.cssText = 'border: 0.2rem solid darkslategrey';
});

backEndSkills.addEventListener('mouseout', (event) => {
    for (i = 0; i < backEndList.length; i++) {
        backEndList[i].style.color = 'rgb(197, 197, 197)';
    }
    backEndTitle.style.cssText = 'color: white; text-decoration-color: red';
    backEndSkills.style.cssText = 'border: none';
});


dbmsSkills.addEventListener('mouseover', (event) => {
    for (i = 0; i < dbmsList.length; i++) {
        dbmsList[i].style.color = 'white';
    }
    dbmsTitle.style.cssText = 'color: rgb(197, 197, 197); text-decoration-color: #cc0000';
    dbmsSkills.style.cssText = 'border: 0.2rem solid darkslategrey';
});

dbmsSkills.addEventListener('mouseout', (event) => {
    for (i = 0; i < dbmsList.length; i++) {
        dbmsList[i].style.color = 'rgb(197, 197, 197)';
    }
    dbmsTitle.style.cssText = 'color: white; text-decoration-color: red';
    dbmsSkills.style.cssText = 'border: none';
});