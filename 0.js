function checkPassword() {
    const correctPassword = '85175';
    const enteredPassword = document.getElementById('password').value;

    if (enteredPassword === correctPassword) {
        window.location.href = '0.index.html';
    } else {
        window.location.href = 'https://www.google.co.jp';
    }
    return false; // フォームの送信を防ぐ
}
