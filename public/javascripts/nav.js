// indicador de menú

const secciones = document.querySelectorAll('.seccion')
const menuitem = document.querySelectorAll('.menu_item')

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
    rootMargin:"30%"
    ,
    threshold: 0.8
})

secciones.forEach(seccion=> observer.observe(seccion))