const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            // hide the other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            // make current section active
            const currentSection = document.getElementById(id);
            currentSection.classList.add('active');
        }
    })

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

    // Email form
    const emailBtn = document.getElementById('send-email');
    emailBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        const subject = document.getElementById('email-subject').value;
        const body = document.getElementById('email-body').value;
        
        const recipientEmail = 'julia.fang2012@gmail.com';
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + "\n\n" + `Best Regards,\n${name}`)}`;
    
        window.location.href = mailtoLink;
    });
}

PageTransitions();