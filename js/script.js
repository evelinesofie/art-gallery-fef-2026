let favoriteIcons =
	document.getElementsByClassName(
		"heart-outline",
	); /* We first get a reference to all the icon elements */

/* Creating the array where we store the favorites */

let favoriteArr;

/* If the array exists in localStorage, we fetch it and store it in favoriteArr.
   If it doesn't exist, we create an empty one.  */

if (localStorage.favorites) {
	favoriteArr = JSON.parse(localStorage.favorites);
} else {
	favoriteArr = [];
}

/* Here, we loop through the icon elements to set the img to a solid icon if the favorite is saved in our array.
   Logic: If the icon "exists" in the favoriteArr array, it means that it is a favorite,
   and then we set the src to 'img/heart-solid.png'. */

for (let i = 0; i < favoriteIcons.length; i++) {
	for (let j = 0; j < favoriteArr.length; j++) {
		if (favoriteIcons[i].dataset.id === favoriteArr[j].id) {
			favoriteIcons[i].src = "img/heart-solid.png";
		}
	}
}

/* We loop through all the icon elements and add an eventlistener on click.
  So, when we click an icon, the saveFavorite function is called */

for (let i = 0; i < favoriteIcons.length; i++) {
	favoriteIcons[i].addEventListener("click", saveFavorite);
}

function saveFavorite() {
	/* First, we create a favorite object for the artwork that has been clicked.
     We access the id and img (src) from the HTML (e.g., data-id="1") */

	let favorite = {
		id: this.dataset.id,
		img: this.dataset.img,
	};

	/* We don't want to add a favorite many times (only once), so if the favorite 
     already exists in the array, we remove it from the array using splice */

	for (let i = 0; i < favoriteArr.length; i++) {
		if (this.dataset.id === favoriteArr[i].id) {
			/* i = the current index, 1 = remove one */
			favoriteArr.splice(i, 1);
		}
	}

	/* We change the icon from outline to solid when it's clicked.
     Logic: if the src (img path) includes the word 'outline', 
     we change the icon to solid and vice versa. */

	if (this.src.includes("outline")) {
		this.src = "img/heart-solid.png";
		/* We only add the favorite to our array if the icon is outline
       (meaning that it is not a favorite yet) */
		favoriteArr.push(favorite);
	} else {
		this.src = "img/heart-outline.png";
	}

	/* We store the favoriteArr (containing all our favorites in the localStorage).
     Before storing it, it needs to be converted to a string (using JSON.stringify). */

	localStorage.favorites = JSON.stringify(favoriteArr);
}
