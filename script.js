/* navbar section */
// Navigation links
let homeNavLink = document.getElementById('menu-1-home');
let aboutNavLink = document.getElementById('menu-1-about');
let skillsNavLink = document.getElementById('menu-1-skills');
let projectsNavLink = document.getElementById('menu-1-projects');
let contactNavLink = document.getElementById('menu-1-contact');


/* home section */
// Icons in the home section 
let linkedinHomeIcon = document.querySelector('.home #linkedin');
let githubHomeIcon = document.querySelector('.home #github');


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


/* projects section */
// Project blocks
let project1 = document.querySelector('.project-1');
let project2 = document.querySelector('.project-2');

// Project images
let image1 = document.getElementById('project-1-image');
let image2 = document.getElementById('project-2-image');

// Project descriptions
let text1 = document.querySelector('.project-text-container-1');
let text2 = document.querySelector('.project-text-container-2');

// GitHub icons that link to the projects' GitHub repository
let githubProject1 = document.querySelector('.project-1 #github');
let githubProject2 = document.querySelector('.project-2 #github');

// Links to project 1's website
let linkProject1 = document.querySelector('.project-link-text-1');


/* contact section */
// "Send message" button
let contactButton = document.querySelector('.contact .button');


// Prevent "Confirm Resubmission Form" notification every time the user reloads the page
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

// Handles contact submission
function SendMail() {
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value, 
    };
    
    const serviceID = "service_77m7tca";
    const templateID = "template_m4o1c6k";

    // Uses EmailJS
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


/* navbar section */
// Only for lanscape orientation (width > height)
// Only allows the navigation links to change style when the mouse hovers over them, not clicked on
if (window.matchMedia("(orientation: landscape)").matches) {
    // home navigation link
    homeNavLink.addEventListener('click', (event) => {
        homeNavLink.style.cssText = 'color: white';
    });
    homeNavLink.addEventListener('mouseover', (event) => {
        homeNavLink.style.cssText = 'color: red';
    });
    homeNavLink.addEventListener('mouseout', (event) => {
        homeNavLink.style.cssText = 'color: white';
    });

    // about navigation link
    aboutNavLink.addEventListener('click', (event) => {
        aboutNavLink.style.cssText = 'color: white';
    });
    aboutNavLink.addEventListener('mouseover', (event) => {
        aboutNavLink.style.cssText = 'color: red';
    });
    aboutNavLink.addEventListener('mouseout', (event) => {
        aboutNavLink.style.cssText = 'color: white';
    });

    // skills navigation link 
    skillsNavLink.addEventListener('click', (event) => {
        skillsNavLink.style.cssText = 'color: white';
    });
    skillsNavLink.addEventListener('mouseover', (event) => {
        skillsNavLink.style.cssText = 'color: red';
    });
    skillsNavLink.addEventListener('mouseout', (event) => {
        skillsNavLink.style.cssText = 'color: white';
    });

    // projects navigation link
    projectsNavLink.addEventListener('click', (event) => {
        projectsNavLink.style.cssText = 'color: white';
    });
    projectsNavLink.addEventListener('mouseover', (event) => {
        projectsNavLink.style.cssText = 'color: red';
    });
    projectsNavLink.addEventListener('mouseout', (event) => {
        projectsNavLink.style.cssText = 'color: white';
    });

    // contact navigation link
    contactNavLink.addEventListener('click', (event) => {
        contactNavLink.style.cssText = 'color: white';
    });
    contactNavLink.addEventListener('mouseover', (event) => {
        contactNavLink.style.cssText = 'color: red';
    });
    contactNavLink.addEventListener('mouseout', (event) => {
        contactNavLink.style.cssText = 'color: white';
    });
}


/* home section */
// Only allows icons in the home section to change style when the mouse hovers over them, not clicked on
if (window.matchMedia("(orientation: landscape)").matches) {
    /* Sizes specified are for screens in landscape orientation with a width of up to 700px */
    if (window.matchMedia("(max-width: 700px)").matches) {
        linkedinHomeIcon.addEventListener('click', (event) => {
            linkedinHomeIcon.style.cssText = 'width: 7vw; height: 7vw; transition: .5s';
        });
        githubHomeIcon.addEventListener('click', (event) => {
            githubHomeIcon.style.cssText = 'width: 7vw; height: 7vw; transition: .5s';
        });
        
        linkedinHomeIcon.addEventListener('mouseover', (event) => {
            linkedinHomeIcon.style.cssText = 'width: 7.5vw; height: 7.5vw; transition: .5s';
        });
        githubHomeIcon.addEventListener('mouseover', (event) => {
            githubHomeIcon.style.cssText = 'width: 7.5vw; height: 7.5vw; transition: .5s';
        });
        
        linkedinHomeIcon.addEventListener('mouseout', (event) => {
            linkedinHomeIcon.style.cssText = 'width: 7vw; height: 7vw; transition: .5s';
        });
        githubHomeIcon.addEventListener('mouseout', (event) => {
            githubHomeIcon.style.cssText = 'width: 7vw; height: 7vw; transition: .5s';
        });
    /* Sizes specified are for screens in landscape orientation with a width greater than 700px */
    } else {
        linkedinHomeIcon.addEventListener('click', (event) => {
            linkedinHomeIcon.style.cssText = 'width: 3vw; height: 3vw; transition: .5s';
        });
        githubHomeIcon.addEventListener('click', (event) => {
            githubHomeIcon.style.cssText = 'width: 3vw; height: 3vw; transition: .5s';
        });
        
        linkedinHomeIcon.addEventListener('mouseover', (event) => {
            linkedinHomeIcon.style.cssText = 'width: 3.5vw; height: 3.5vw; transition: .5s';
        });
        githubHomeIcon.addEventListener('mouseover', (event) => {
            githubHomeIcon.style.cssText = 'width: 3.5vw; height: 3.5vw; transition: .5s';
        });
        
        linkedinHomeIcon.addEventListener('mouseout', (event) => {
            linkedinHomeIcon.style.cssText = 'width: 3vw; height: 3vw; transition: .5s';
        });
        githubHomeIcon.addEventListener('mouseout', (event) => {
            githubHomeIcon.style.cssText = 'width: 3vw; height: 3vw; transition: .5s';
        });
    }
}


/* skills sections */
// Changes the style of the list of my front-end skills
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

// Changes the style of the list of my back-end skills
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

// Changes the style of the list of my database management system skills
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


/* projects section */
// Only allows icons & the text link in the projects section to change style when the mouse hovers over them, not clicked on
if (window.matchMedia("(orientation: landscape)").matches) {
    /* Sizes specified are for screens in landscape orientation with a width of up to 700px */
    if (window.matchMedia("(max-width: 700px)").matches) {
        // When the user clicks on an icon or text link, do not change its size
        // GitHub icons, 1 each for project 1 & project 2
        githubProject1.addEventListener('click', (event) => {
            githubProject1.style.cssText = 'width: 5vw; height: 5vw; transition: .5s';
        });
        githubProject2.addEventListener('click', (event) => {
            githubProject2.style.cssText = 'width: 5vw; height: 5vw; transition: .5s';
        });
        // Text link to project 1's website
        linkProject1.addEventListener('click', (event) => {
            linkProject1.style.cssText = 'font-size: 4.3vw; font-weight: bold; color: rgba(135, 206, 250, 0.733); text-shadow: none; transition: .5s';
        });
        
        // When the user hovers the mouse over an icon or text link, increase its size
        githubProject1.addEventListener('mouseover', (event) => {
            githubProject1.style.cssText = 'width: 5.5vw; height: 5.5vw; transition: .5s';
        });
        githubProject2.addEventListener('mouseover', (event) => {
            githubProject2.style.cssText = 'width: 5.5vw; height: 5.5vw; transition: .5s';
        });
        linkProject1.addEventListener('mouseover', (event) => {
            linkProject1.style.cssText = 'font-size: 4.8vw; color: rgba(135, 206, 250, 0.733); text-shadow: black 0.2rem 0.2rem 0.2rem; transition: .5s';
        });
        
        // When the user's mouse does not hover over an icon or text link anymore, set it back to its original size
        githubProject1.addEventListener('mouseout', (event) => {
            githubProject1.style.cssText = 'width: 5vw; height: 5vw; transition: .5s';
        });
        githubProject2.addEventListener('mouseout', (event) => {
            githubProject2.style.cssText = 'width: 5vw; height: 5vw; transition: .5s';
        });
        linkProject1.addEventListener('mouseout', (event) => {
            linkProject1.style.cssText = 'font-size: 4.3vw; font-weight: bold; color: rgba(135, 206, 250, 0.733); text-shadow: none; transition: .5s';
        });
    /* Sizes specified are for screens in landscape orientation with a width greater than 700px */
    } else {
        // When the user clicks on an icon or text link, do not change its size
        githubProject1.addEventListener('click', (event) => {
            githubProject1.style.cssText = 'width: 2.5vw; height: 2.5vw; transition: .5s';
        });
        githubProject2.addEventListener('click', (event) => {
            githubProject2.style.cssText = 'width: 2.5vw; height: 2.5vw; transition: .5s';
        });
        linkProject1.addEventListener('click', (event) => {
            linkProject1.style.cssText = 'font-size: 2vw; font-weight: bold; color: rgba(135, 206, 250, 0.733); text-shadow: none; transition: .5s';
        });
        
        // When the user hovers the mouse over an icon or text link, increase its size
        githubProject1.addEventListener('mouseover', (event) => {
            githubProject1.style.cssText = 'width: 3vw; height: 3vw; transition: .5s';
        });
        githubProject2.addEventListener('mouseover', (event) => {
            githubProject2.style.cssText = 'width: 3vw; height: 3vw; transition: .5s';
        });
        linkProject1.addEventListener('mouseover', (event) => {
            linkProject1.style.cssText = 'font-size: 2.5vw; color: rgba(135, 206, 250, 0.733); text-shadow: black 0.2rem 0.2rem 0.2rem; transition: .5s';
        });
        
        // When the user's mouse does not hover over an icon or text link anymore, set it back to its original size
        githubProject1.addEventListener('mouseout', (event) => {
            githubProject1.style.cssText = 'width: 2.5vw; height: 2.5vw; transition: .5s';
        });
        githubProject2.addEventListener('mouseout', (event) => {
            githubProject2.style.cssText = 'width: 2.5vw; height: 2.5vw; transition: .5s';
        });
        linkProject1.addEventListener('mouseout', (event) => {
            linkProject1.style.cssText = 'font-size: 2vw; font-weight: bold; color: rgba(135, 206, 250, 0.733); text-shadow: none; transition: .5s';
        });
    }
}


// Project images change style when the mouse hovers over them or they are clicked on,
// which then displays information about each project (depending on the one hovered over/clicked on)
if (window.matchMedia("(orientation: landscape)").matches) {
    // When the mouse hovers over the project 1 image, change its style & display information about it
    project1.addEventListener('mouseover', (event) => {
        project1.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image1.style.cssText = 'filter: blur(1vh) brightness(25%)';
        text1.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    // When the mouse does not hover over the project 1 image anymore, set it back to its original look
    project1.addEventListener('mouseout', (event) => {
        project1.style.cssText = 'border: 0.3rem solid rgb(56, 80, 80);';
        image1.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text1.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });
    
    // When the mouse hovers over the project 2 image, change its style & display information about it
    project2.addEventListener('mouseover', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image2.style.cssText = 'filter: blur(1vh) brightness(25%)';
        text2.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    // When the mouse does not hover over the project 2 image anymore, set it back to its original look
    project2.addEventListener('mouseout', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(74, 87, 87);';
        image2.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text2.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });
}


/* Only for portrait orientation (width < height) */
// Project images change style when they are clicked on, which then displays information about 
// each project (depending on the one hovered over/clicked on)
if (window.matchMedia("(orientation: portrait)").matches) {
    // When the user clicks on the project 1 image, change its style & display information about it
    project1.addEventListener('click', (event) => {
        project1.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image1.style.cssText = 'filter: blur(1vh) brightness(25%)';
        text1.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    // When the user clicks out of the project 1 image, set it back to its original look
    project1.addEventListener('mouseout', (event) => {
        project1.style.cssText = 'border: 0.3rem solid rgb(56, 80, 80);';
        image1.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text1.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });

    // When the user clicks on the project 2 image, change its style & display information about it
    project2.addEventListener('click', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(61, 102, 102); border-radius: 0.5rem;';
        image2.style.cssText = 'filter: blur(1vh) brightness(25%)';
        text2.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 1.5s linear;';
    });
    // When the user clicks out of the project 2 image, set it back to its original look
    project2.addEventListener('mouseout', (event) => {
        project2.style.cssText = 'border: 0.19rem solid rgb(74, 87, 87);';
        image2.style.cssText = 'filter: blur(0) brightness(100%); transition: 1s';
        text2.style.cssText = 'visibility: hidden; opacity: 0; transition: opacity 0.5s linear;';
    });
}


/* contact section */
// Only allows the contact button to change style when the mouse hovers over it, not clicked on
contactButton.addEventListener('click', (event) => {
    contactButton.style.cssText = 'color: #fff; background-color: none';
});
contactButton.addEventListener('mouseover', (event) => {
    contactButton.style.cssText = 'background-color: #131325; color: red';
});
contactButton.addEventListener('mouseout', (event) => {
    contactButton.style.cssText = 'color: #fff; background-color: none';
});