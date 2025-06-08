document.addEventListener('DOMContentLoaded', function() {    
    // PARA CERRAR EL MODAL/AVISO DE TARJETA DE CLIENTE DISTINGUIDO
    const closeIconModal = document.querySelector('#close-modal') 
    const modal = document.querySelector('#modal')

    closeIconModal.addEventListener('click', () => {
        modal.style.transition = '300ms linear'
        modal.style.opacity = '0'
        setTimeout(() => {
            modal.style.display = 'none' 
        }, 1000)
    })
    // PARA MOSTRAR Y OCULTAR EL 'FORMULARIO' ↓↓
    const sessionBtn = document.querySelector('#btn-session')
    const formLogin = document.querySelector('#form-login')
    const closeForm = document.querySelector('#close-form')

    sessionBtn.addEventListener('click', () => {
        formLogin.style.display = 'flex'
        setTimeout(() => {
            formLogin.style.opacity = '1'
        }, 300)
    })
    closeForm.addEventListener('click', () => {
        formLogin.style.opacity = '0'
        setTimeout(() => {
            formLogin.style.display = 'none'
        }, 300)
    })
    // MENÚ HAMBURGUESA PARA ABRIR LA 'BARRA LATERAL'  PARA MÓVILES↓↓
    const navbarBurgerMenu = document.querySelector('#nav-burger-menu')
    const navbarElements = document.querySelector('#navbar-elements')
    const closeNavElements = document.querySelector('#close-nav-elements')

    navbarBurgerMenu.addEventListener('click', (event) => {
        navbarElements.style.transform = 'translateX(0%)'
        navbarElements.style.opacity = '1' 
        navbarElements.style.boxShadow = '0 2px 14px #222' 
        
    })
    // CERRAR LA 'BARRA DE ELEMENTOS' LATERAL ↓↓
    closeNavElements.addEventListener('click', () => {
        navbarElements.style.transform = 'translateX(-100%)'
        navbarElements.style.opacity = '0' 
        navbarElements.style.boxShadow = '0 0 0' 
    })
    // DESPLEGAR SUBELEMENTOS DE LA 'BARRA LATERAL' PARA MÓVILES ↓↓
    const liDeployer = document.querySelectorAll('.list-mobile__element-parent')

    liDeployer.forEach(ul => {
        ul.addEventListener('click', () => {
            const ulDeployed = ul.querySelector('.element-parent__ul-deploy-mobile')
            ulDeployed.classList.toggle('active') 
        })
    })
    // ESUCHAR EL DOCUMENTO PARA CERRAR LA 'BARRA DE ELEMENTOS' AL HACER CLIC FUERA DE ELLA ↓↓
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navbarElements.contains(event.target)
        const isClickOnBurgerButton = navbarBurgerMenu.contains(event.target)
        
        if (navbarElements.style.transform === 'translateX(0%)' &&
        !isClickInsideMenu && !isClickOnBurgerButton) {
            navbarElements.style.transform = 'translateX(-100%)'
            navbarElements.style.opacity = '0'
            navbarElements.style.boxShadow = 'none'
        }
    })
    // PEGAR EL 'FORMULARIO' DE 'LOGIN' EN EL 'NAVBAR' EN PANTALLAS PEQUEÑAS ↓↓
    const loginForm = document.querySelector('#login-form')
    const logosLoginBlock = document.querySelector('#logos-n-login')
    const navBar = document.querySelector('#navbar')

    function moveElementsIfNecesary() {
    if (window.innerWidth < 780) {
            if (!navBar.contains(loginForm)) {
            navBar.appendChild(loginForm);
            navBar.style.justifyContent = 'space-between'
            }
        } else {
            if (!logosLoginBlock.contains(loginForm)) {
            logosLoginBlock.appendChild(loginForm)
            navBar.style.justifyContent = 'flex-start'
            }
        }
    }
    // LLAMADO DE LA FUNCIÓN AL CARGAR LA PÁGINA ↓↓
    moveElementsIfNecesary()
    // ESCUCHAR CAMBIOS EN DIMENSIONES DEL SITIO ↓↓
    window.addEventListener('resize', moveElementsIfNecesary)
})