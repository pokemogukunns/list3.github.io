function checkPassword() {
    const correctPassword = '85175';
    const enteredPassword = document.getElementById('password').value;

    if (enteredPassword === correctPassword) {
        window.location.href = 'https://pokemogukunn.github.io/list.github.io/gamelist';
    } else {
        window.location.href = 'https://www.google.co.jp';
    }
    return false; // フォームの送信を防ぐ
}
