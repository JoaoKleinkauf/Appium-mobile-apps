import { $ } from '@wdio/globals'

class HomePage {
    
    async openMenu(menu){
        await $('android=new UiSelector().text("Profile")').click()
    }

    async openForm(form){ 
        await $('android=new UiSelector().text("Sign up")').click()
    }
}

export default new HomePage();