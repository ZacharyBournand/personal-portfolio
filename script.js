/* skills section */
// Front-end skills
let frontEndSkills = document.querySelector('.skills-list-front');
let frontEndTitle = document.querySelector('.front-end');
let frontEndList = document.querySelectorAll('.front-end-language');

// Back-end skills
let backEndSkills = document.querySelector('.skills-list-back');
let backEndTitle = document.querySelector('.back-end');
let backEndList = document.querySelectorAll('.back-end-language');

// DBMS skills
let dbmsSkills = document.querySelector('.skills-list-dbms');
let dbmsTitle = document.querySelector('.dbms');
let dbmsList = document.querySelectorAll('.dbms-list');

/* Icons in the home section 
let linkedinIcon = document.querySelector('#linkedin');
let githubIcon = document.querySelector('#github');*/

/* projects sections */
// Project 1 
let project1 = document.querySelector('.project-1');
let project2 = document.querySelector('.project-2');

let image1 = document.getElementById('project-omedocs');
let image2 = document.getElementById('project-movie-search-engine');

let text1 = document.querySelector('.project-text-container-1');
let text2 = document.querySelector('.project-text-container-2');

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


if (window.matchMedia("(orientation: landscape)").matches) {
    project1.addEventListener('mouseover', (event) => {
        project1.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image1.style.cssText = 'filter: blur(1vh) brightness(25%)';
        text1.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    project1.addEventListener('mouseout', (event) => {
        project1.style.cssText = 'border: 0.3rem solid rgb(56, 80, 80);';
        image1.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text1.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });
    
    project2.addEventListener('mouseover', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image2.style.cssText = 'filter: blur(1vh) brightness(90%)';
        text2.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    project2.addEventListener('mouseout', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(74, 87, 87);';
        image2.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text2.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });    
}


if (window.matchMedia("(orientation: portrait)").matches) {
    project1.addEventListener('click', (event) => {
        project1.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image1.style.cssText = 'filter: blur(1vh) brightness(25%)';
        text1.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    project1.addEventListener('mouseout', (event) => {
        project1.style.cssText = 'border: 0.3rem solid rgb(56, 80, 80);';
        image1.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text1.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });

    project2.addEventListener('click', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image2.style.cssText = 'filter: blur(1vh) brightness(90%)';
        text2.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    project2.addEventListener('mouseout', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(74, 87, 87);';
        image2.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text2.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });
}