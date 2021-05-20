navigator.geolocation.getCurrentPosition(function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
});

//Чтобы Google Maps API стал доступен на нашей странице, мы включаем его в HTML документ
//<script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA"></script>


//Нахождение точки входа в DOM или экземпляр элемента HTML
var em = document.createElement('em'); //создаёт новый элемент em
var para = document.querySelector('p'); //ссылка на существующий элемент p
em.textContent = 'Hello there!'; //присвоение текстового содержимого
para.appendChild(em); //встроить em внутрь para

//Точка входа для Canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

//взаимодействуем с Canvas
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};