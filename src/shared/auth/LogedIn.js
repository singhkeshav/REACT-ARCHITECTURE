class LoggedIn{
    constructor(){
        this.isAuthenticate = false;
    }

    login(userData){
        console.log(userData)
         this.isAuthenticate = true;
         localStorage.setItem('userData',JSON.stringify(userData));
    }

    logout(){
        this.isAuthenticate = false;
        localStorage.removeItem('userData');
    }

    isLoggedIn(){
        return this.isAuthenticate;
    }

    getUser(){
        return JSON.parse( localStorage.getItem('userData'));
    }
}

export default new LoggedIn();