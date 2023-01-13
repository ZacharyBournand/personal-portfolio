let frontEndSkills = document.querySelector('.skills-list-front');
let frontEndTitle = document.querySelector('.front-end');
let frontEndList = document.querySelectorAll('.front-end-language');

let backEndSkills = document.querySelector('.skills-list-back');
let backEndTitle = document.querySelector('.back-end');
let backEndList = document.querySelectorAll('.back-end-language');

let dbmsSkills = document.querySelector('.skills-list-dbms');
let dbmsTitle = document.querySelector('.dbms');
let dbmsList = document.querySelectorAll('.dbms-list');

let linkedinIcon = document.querySelector('#linkedin');
let githubIcon = document.querySelector('#github');


// Prevent "Confirm Resubmission Form" notification every time the user reloads the page
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}


function SendMail() {
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value, 
    };
    
    const serviceID = "service_77m7tca";
    const templateID = "template_m4o1c6k";

    emailjs.send(serviceID, templateID, params)
    .then(
        function(res) {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
            
            console.log(res);
            alert("Your message was sent successfully");
        }
    ).catch((err) => console.log(err));
}


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


linkedinIcon.addEventListener('mouseover', (event) => {
    linkedinIcon.style.cssText = 'width: 2.5rem; height: 2.5rem';
});

linkedinIcon.addEventListener('mouseout', (event) => {
    linkedinIcon.style.cssText = 'width: 1.6rem; height: 1.6rem';
});


githubIcon.addEventListener('mouseover', (event) => {
    githubIcon.style.cssText = 'width: 2.5rem; height: 2.5rem';
});
githubIcon.addEventListener('mouseout', (event) => {
    githubIcon.style.cssText = 'width: 1.6rem; height: 1.6rem';
});
