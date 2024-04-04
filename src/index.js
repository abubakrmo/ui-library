import Tooltip from './uiComponents/tooltip'
import './uiComponents/styles/tootltip.css'
import Dropdown from './uiComponents/dropdown'
import './uiComponents/styles/dropdown.css'






const tooltip = new Tooltip(document.querySelector('.toolTip'))
tooltip.toolTip();

dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown)
    instance.dropDown();
})