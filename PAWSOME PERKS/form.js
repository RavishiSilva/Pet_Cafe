function message(){
    var Name = document.getElementById('name');
    var Hometown = document.getElementById('hometown');
    var Whatsappnumber = document.getElementById('whatsappnumber');
    var Email = document.getElementById('email');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || Hometown.value === '' || Whatsappnumber.value === '' || Email.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            Hometown.value = '';
            Whatsappnumber.value = '';
            Email.value = '';
        }, 2500);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 2500);

}