const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const flechePrecedent = document.querySelector('.arrow_left');
const flecheSuivant = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');
const  divimg = document.querySelector('.banner-img');
const dotactive =document.querySelector('.dot_selected');
const tagtext= document.querySelector('.tagtext');
const baseUrl = "./assets/images/slideshow/";
let premierslide =0;

//afficher dans le console le contenu des constantes declarés
console.log(divimg);
console.log(dots);
console.log(flechePrecedent);
console.log(flecheSuivant);
console.log(dotactive);
console.log(tagtext);
console.log(divimg);

//écouter le clique sur l'element flecheprecedent 
flechePrecedent.addEventListener("click", mafonctionP)

function mafonctionP(){
	dots[premierslide].classList.remove('dot_selected');
	if(premierslide==0){
		premierslide=slides.length-1;
	}
	else{
		premierslide--;
	}
	dots[premierslide].classList.add('dot_selected');
	divimg.src= baseUrl + slides[premierslide].image;
	tagtext.innerHTML = slides[premierslide].tagLine;	


}
//ecouter le clique sur l'element flechesuivant
flecheSuivant.addEventListener("click",mafonction)

function mafonction(){

	dots[premierslide].classList.remove('dot_selected');
	if(premierslide==slides.length - 1){
		premierslide=0;
	}
	else{
		premierslide++;
	}
	dots[premierslide].classList.add('dot_selected');
	divimg.src= baseUrl + slides[premierslide].image;
	tagtext.innerHTML = slides[premierslide].tagLine;	

}

