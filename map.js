var map = L.map('map').setView([50.552332991147445, 9.673600198008078], 17);
var marker = L.marker([50.552332991147445, 9.673600198008078]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

