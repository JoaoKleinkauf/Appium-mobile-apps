import { $ } from '@wdio/globals'

class LoginPage {

    get name (){
        return $('android=new UiSelector().text("First Name")')
    }
    get lastName (){
        return $('android=new UiSelector().text("Last Name")')
    }
    get phoneNumber (){
        return $('android=new UiSelector().text("Phone Number")')
    }
    get email (){
        return $('android=new UiSelector().text("Email Address")')
    }
    get password (){
        return $('android=new UiSelector().text("Password")')
    }
    get confirmPassword (){
        return $('android=new UiSelector().text("Re-enter Password")')
    }
    get btnCreate (){
        return $('android=new UiSelector().text("Create")')
    }
    
    async login(name, lastName, phoneNumber, email, password, confirmPassword){
        await this.name.setValue(name)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.confirmPassword.setValue(confirmPassword)
        await this.btnCreate.click()

    }
}

export default new LoginPage();