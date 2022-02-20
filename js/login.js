document.getElementById('login-btn').addEventListener('click', function () {
    // get email input
    const emailBox = document.getElementById('user-email');
    const userEmail = emailBox.value;
    emailBox.value = '';
    // get password input
    const passwordBox = document.getElementById('user-password');
    const userPasseord = passwordBox.value;
    passwordBox.value = '';
    // login condition
    if (userEmail == 'bappi@mail.com' && userPasseord == '1234') {
        window.location.href = 'banking.html';
    }
    else if (userEmail != 'bappi@mail.com') {
        alert('ইমেইল ভুল হইছে!!');

    }
    else if (userPasseord != '1234') {
        alert('পাসওয়ার্ড ভুল দিছোস!!');
    }
});
