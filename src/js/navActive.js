const navActive = () => {
    const navLinks = document.getElementById('nav__links')
    const hamburger = document.getElementById('nav__hamburger')

    hamburger.addEventListener('click', ()=> {
        navLinks.classList.toggle('active')

        if(navLinks.className === "nav__links active"){
            hamburger.classList.add('white')
            hamburger.innerHTML = `
                <i class='bx bx-x'></i>
            `
        }else{
            hamburger.classList.remove('white')
            hamburger.innerHTML = `
                <i class='bx bx-menu'></i>
            `
        }
    })
}

navActive()