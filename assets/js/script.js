const input = document.querySelector("#input");
const cardsContainer = document.querySelector(".cards__container");
const number = document.querySelector(".number");
const card = document.getElementsByClassName("card");
const description = document.querySelector(".description");
let buttons = document.querySelectorAll(".menu__list .menu__item");
const buttonActive = document.querySelector("#active");
const buttonNavAll = document.querySelector("#all");
const buttonCompleted = document.querySelector("#completed");
const buttonClear = document.querySelector("#clear");
const buttonActiveMobile = document.querySelector(".menu-mobile #active");
const buttonAllMobile = document.querySelector(".menu-mobile #all");
const buttonCompletedMobile = document.querySelector(".menu-mobile #completed");




function doRemoveCard(){
	const buttonCross = document.querySelectorAll(".button__close").forEach(item=>{
    	item.addEventListener("click" , (event)=>{
    		const cardSelected = event.currentTarget
    		cardSelected.parentNode.remove();
    		getNumberOfActiveCards();
    		
    	})
    });
		
}

function doMarkChecked(){
	const buttonCircles = document.querySelectorAll(".circle").forEach(item=>{
    	item.addEventListener("click" , (event)=>{
    		const cardSelected = event.currentTarget;
    		const elementFather = cardSelected.parentNode;
    		cardSelected.classList.toggle("circle--checked");
    		elementFather.classList.toggle("card--done");
    		getNumberOfActiveCards();
    		
    		
    	})
    })
}


function doRemoveActive(){
	for(buttonAll of buttons){
		buttonAll.classList.remove("active");
	}
}

function doSelectItem(event){
	doRemoveActive();
	const buttonClicked = event.currentTarget;
	buttonClicked.classList.add("active");
	
}

function getNumberOfActiveCards(){
	let totalCard = document.querySelectorAll(".card").length;
	let totalCardDone = document.querySelectorAll(".card--done").length;
	const somaTotal = totalCard - totalCardDone;
	number.innerHTML = somaTotal;
	if(number.innerText == 0){
		number.innerHTML = "";
	}


} 

function doCreateCard(input){
	const card = `<div class="card">
            <div id="checkbox" class="circle"></div>
            <p class="description">${input}</p>
            <button class="button__close">
            <img src="./assets/images/icon-cross.svg" alt="icon cross">
            </button>
          </div>`;

    cardsContainer.innerHTML += card;
    doMarkChecked();
    doRemoveCard();
    
}
function getInputValue(event){
	const key = event.code;
	if(key == "Enter"){
		if(input.value == ""){
			alert("field cannot be empty!!!");
		}
		else{
			doCreateCard(input.value);
			input.value = "";
			getNumberOfActiveCards();
		}
	}
}

input.addEventListener("keydown", getInputValue);




function doRemoveAllCompletedCards(){
	let cardAtual = document.querySelectorAll(".card");
	const filterOnlyCompleted = [...cardAtual].filter(element =>{
		if(element.classList.contains('card--done')){
			return element.remove();
			getNumberOfActiveCards();
		}
	
})}

function doFilterOnlyCompleted(){
	let cardAtual = document.querySelectorAll(".card");
	const filterCompleted = [...cardAtual].filter(element =>{
		if(!element.classList.contains('card--done')){
			return element.style.display = "none";
		}
		else{
			return element.style.display = "grid";

	}
	} );

}

function doFilterOnlyActived(){
	let cardAtual = document.querySelectorAll(".card");
	const filterActived = [...cardAtual].filter(element =>{
		if(element.classList.contains('card--done')){
			return element.style.display = "none";
		}
		else{
			return element.style.display = "grid";

	} 
});
		}


function doShowAllCards(){
	let cardAtual = document.querySelectorAll(".card");
	const filterAll = [...cardAtual].filter(element =>{
		if(element.classList.contains('card')){
			return element.style.display = "grid";
		}
	} );

}


buttonCompleted.addEventListener("click" , doFilterOnlyCompleted)

buttonNavAll.addEventListener("click" , doShowAllCards)

buttonActive.addEventListener("click" , doFilterOnlyActived)

buttonClear.addEventListener("click" , doRemoveAllCompletedCards)

buttonCompletedMobile.addEventListener("click" , doFilterOnlyCompleted)

buttonAllMobile.addEventListener("click" , doShowAllCards)

buttonActiveMobile.addEventListener("click" , doFilterOnlyActived)
buttons.forEach(button=>{
	button.addEventListener("click", doSelectItem)
});
