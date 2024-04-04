export default class Snackbar{
    constructor(){
        this.snackbar = document.createElement('div')
    }
    createSnackbar(){
        this.snackbar.classList.add('snackBar')
        document.querySelector('body').appendChild(this.snackbar)
    }
    displaySnackbar(message){
        this.snackbar.textContent = message;
        this.snackbar.classList.add('active')
        setTimeout(()=>{
            this.snackbar.classList.remove('active')
        }, 4000)
    }
}