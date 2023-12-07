document.addEventListener('DOMContentLoaded', function() {
    checkUserIdCookie(); // Вызов функции при загрузке страницы
});
function checkUserIdCookie() {
    var userId = getCookieValue('userId'); // Функция для получения значения куки по имени
    if (userId !== '') {
        aaa = document.getElementById("login");
        aaa.textContent = "Профиль";
        aaa.href = "profile.html"
    } 
}

function getCookieValue(cookieName) {
    var name = cookieName + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return '';
}