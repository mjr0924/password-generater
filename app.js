let pass = document.querySelector('#password');

let genpassword = () => {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordlength = 16;
    let password = '';
    for (let i=0;i<passwordlength;i++){
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random,random+1);
    }
    pass.value = password;
}

let copyselect = () => {
    let copy = pass;
    copy.select();
    copy.setSelectionRange(0,999);
    document.execCommand('copy');
}