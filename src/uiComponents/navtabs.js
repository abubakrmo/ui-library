export default class Navtab{
    constructor(container){
        this.container = container;
        this.navtabs = container.querySelectorAll('.trigger')
    }
    toggle(){
        this.navtabs.forEach(navtab =>{
            navtab.addEventListener('click', e =>{
                this.toggleNavTabs(e);
                this.toggleNavContent(e);
            })
        })
    }
    toggleNavTabs(e){
        this.navtabs.forEach(navtab => navtab.classList.remove('active'))
        e.target.classList.add('active')
    }
    toggleNavContent(e){
        this.container.querySelectorAll('.content').forEach(content => content.classList.remove('active'))
        const clickedNavTab = e.target.getAttribute('data-target');
        const content = this.container.querySelector(clickedNavTab)
        content.classList.add('active')
    }
}