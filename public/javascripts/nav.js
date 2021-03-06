// indicador de menú

const secciones = document.querySelectorAll('section')
const menuitem = document.querySelectorAll('nav ul li')

const functionObserver = entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            const itemactual = Array.from(menuitem).find(item=> item.dataset.url === entry.target.id)
            itemactual.classList.add('active')
            for (const item of menuitem) {
                if (item != itemactual){
                    item.classList.remove('active')
                }
            }
        }
    })
} 
const observer = new IntersectionObserver(functionObserver,{
    root: null,
    rootMargin:"30% 0px 70% 0px",
    threshold: 1
})

secciones.forEach(seccion=> observer.observe(seccion))