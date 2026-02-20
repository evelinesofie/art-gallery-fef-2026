const favGrid = document.querySelector(".fav-grid");

/* Retrieving the favorites from localStorage */
let favoriteArr = JSON.parse(localStorage.favorites);

/* Creating an image element for each of the favorites in favoriteArr */
for (let i = 0; i < favoriteArr.length; i++) {
	let favoriteElement = document.createElement("img");
	favoriteElement.src = favoriteArr[i].img;
	favoriteElement.style.width = "100%";
	favGrid.appendChild(favoriteElement);
}
