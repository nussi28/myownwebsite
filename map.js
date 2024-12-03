var map = L.map('map').setView([50.552332991147445, 9.673600198008078], 17);
var marker = L.marker([50.552332991147445, 9.673600198008078]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

/* Remove original images before inserting new images */
thumbBar.innerHTML = '';

/* Declaring the array of image filenames */
const imagesArray = [
	{
		src: 'pic1.jpg',
		alt: 'Closeup of a human eye'
	},
	{
		src: 'pic2.jpg',
		alt: 'Rock that looks like a wave'
	},
	{
		src: 'pic3.jpg',
		alt: 'Purple and white pansies'
	},
	{
		src: 'pic4.jpg',
		alt: "Section of wall from a pharoah's tomb"
	},
	{
		src: 'pic5.jpg',
		alt: 'Large moth on a leaf'
	},
];

/* Looping through images */
for (const img of imagesArray) {
	const newListItem = document.createElement("li");
	const newImage = document.createElement("img");
	
	newImage.setAttribute("src", `https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images/${img.src}`);	
	newImage.setAttribute("alt", img.alt);
	
	thumbBar.appendChild(newListItem);
	newListItem.appendChild(newImage);
	
	newImage.addEventListener("click", (e) => {
		displayedImage.src = e.target.src;
		displayedImage.alt = e.target.alt;
	});
}
