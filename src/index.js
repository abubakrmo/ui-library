import Tooltip from './uiComponents/tooltip'
import './uiComponents/styles/tootltip.css'
import Dropdown from './uiComponents/dropdown'
import './uiComponents/styles/dropdown.css'
import Navtab from './uiComponents/navtabs'
import './uiComponents/styles/navtabs.css'
import Snackbar from './uiComponents/snackbar'
import './uiComponents/styles/snackbar.css'

const tooltip = new Tooltip(document.querySelector('.toolTip'))
tooltip.toolTip();

const dropdowns = document.querySelectorAll('.dropDown');
dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown)
    instance.dropDown();
})

const navtab = new Navtab(document.querySelector('.navtabs'))
navtab.toggle();

const snackbar = new Snackbar();
snackbar.createSnackbar();
const button = document.querySelector('.snackbar-trigger')
button.addEventListener('click', ()=>{
    snackbar.displaySnackbar("Hooray!")
})