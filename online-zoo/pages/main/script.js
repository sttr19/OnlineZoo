//Burger menu   ------------------------------------------------------------
const body = document.querySelector("body");
const burgerIcon = document.querySelector(".burger-icon");
const menu = document.querySelector(".header__nav");
const menuItem = document.querySelectorAll(".nav__");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".nav__close");

function openBurgerMenu() {
	menu.classList.add("_show");
	//body.classList.add("overflow");
	overlay.classList.add("_show");
}

function closeBurgerMenu() {
	menu.classList.remove("_show");
	//body.classList.remove("_overflow");
	overlay.classList.remove("_show");
}

burgerIcon.addEventListener("click", openBurgerMenu);
closeIcon.addEventListener("click", closeBurgerMenu);
overlay.addEventListener("click", closeBurgerMenu);

/////SLIDER PETS//////
import petsData from "../main/petsData.js";

const SLIDER_PETS = document.querySelector(".slider-pets");
const BTN_LEFT = document.querySelector(".btn-round-slider_left");
const BTN_RIGHT = document.querySelector(".btn-round-slider_right");
const ITEM_LEFT = document.querySelector(".section-three__cards_left");
const ITEM_RIGHT = document.querySelector(".section-three__cards_right");
let changedItem;

const moveLeft = () => {
	SLIDER_PETS.classList.add("_transition-left");
	BTN_LEFT.removeEventListener("click", moveLeft);
	BTN_RIGHT.removeEventListener("click", moveRight);
}

const moveRight = () => {
	SLIDER_PETS.classList.add("_transition-right");
	BTN_RIGHT.removeEventListener("click", moveRight);
	BTN_LEFT.removeEventListener("click", moveLeft);
}

const createCardTemplate = () => {
	const card = document.createElement("div");
	card.classList.add("section-three__card");
	return card;
}

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
	return array;
}

function createSlide() {
	let indexArray = [0, 1, 2, 3, 4, 5];
	shuffle(indexArray);
	for (let i = 0; i < 6; i++) {
		const card = createCardTemplate();
		card.innerHTML =
			`<img class="pets-img" src="${petsData[indexArray[i]].src}" alt="${petsData[indexArray[i]].name}">
		<div class="card__info">
			<p class="info__text"><span>${petsData[indexArray[i]].name}</span><br> ${petsData[indexArray[i]].location}
			</p>
			<img src="${petsData[indexArray[i]].foodType}">
		</div>`;
		changedItem.appendChild(card);
	}
	return changedItem;
}


BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);


SLIDER_PETS.addEventListener("animationend", (animationEvent) => {
	
	if (animationEvent.animationName === "move-left") {
		SLIDER_PETS.classList.remove("_transition-left");
		changedItem = ITEM_LEFT;
		document.querySelector("#zoos > div > div.slider-pets > div > div.section-three__content > div").innerHTML = ITEM_LEFT.innerHTML;
	} else {
		SLIDER_PETS.classList.remove("_transition-right");
		changedItem = ITEM_RIGHT;
		document.querySelector("#zoos > div > div.slider-pets > div > div.section-three__content > div").innerHTML = ITEM_RIGHT.innerHTML;
	}

	changedItem.innerHTML = "";
	createSlide();

	BTN_LEFT.addEventListener("click", moveLeft);
	BTN_RIGHT.addEventListener("click", moveRight);
});