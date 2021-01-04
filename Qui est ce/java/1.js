/**variable**/
var woody=0,fourchette=0;
var woodyimg,fourchetteimg;
var boutonq
var persomystere
var bouton
/**tableau**/
var base_de_donnees=[{nom:"woody",yeux:"vert",sexe:"garçon",peau:"blanc",robe:"non",yeuxnoir:"non",chapeau:"oui"},
					{nom:"fourchette",yeux:"bleu",sexe:"garçon",peau:"blanc",robe:"non",yeuxnoir:"oui",chapeau:"non"},
					{nom:"bergere",yeux:"brun",sexe:"fille",peau:"blanc",robe:"robe",yeuxnoir:"non",chapeau:"oui"},
					{nom:"bob",yeux:"vert",sexe:"fille",peau:"vert",robe:"non",yeuxnoir:"non",chapeau:"non"},
					{nom:"rex",yeux:"rose",sexe:"garçon",peau:"vert",robe:"non",yeuxnoir:"oui",chapeau:"non"},
					{nom:"lotso",yeux:"brun",sexe:"garçon",peau:"blanc",robe:"non",yeuxnoir:"non",chapeau:"non"},
					{nom:"jessy",yeux:"rouge",sexe:"fille",peau:"blanc",robe:"non",yeuxnoir:"non",chapeau:"oui"},
					{nom:"buzz",yeux:"brun",sexe:"fille",peau:"blanc",robe:"non",yeuxnoir:"non",chapeau:"oui"}]
var nommystere
var yeuxmystere
var sexemystere
var peaumystere
var robemystere
var chapeaumystere
var yeuxnoir
var personnage
var question
var reponse

function relie() {
	personnage=document.getElementById("personnage").value;

}

function debut () {
	
	aleatoire();
	
	/**permet d'assimiler un bouton à un id**/
	boutonq=document.getElementById("boutonq");
	boutonq.addEventListener("click",question);
	/** cela nous envoye vers une autre fonction lorsque nous cliquons sur le bouton **/
	

	bouton=document.getElementById("bouton");
	bouton.addEventListener("click",personnagemystere);
	
	
	
	woody=document.getElementById("woody");
	woody.addEventListener("click",disparaitre);
	
	fourchette=document.getElementById("fourchette");
	fourchette.addEventListener("click",disparaitre2);
	
	bergere=document.getElementById("bergere");
	bergere.addEventListener("click",disparaitre3);
	
	bob=document.getElementById("bob");
	bob.addEventListener("click",disparaitre4);
	
	rex=document.getElementById("rex");
	rex.addEventListener("click",disparaitre5);
	
	lotso=document.getElementById("lotso");
	lotso.addEventListener("click",disparaitre6);
	
	jessy=document.getElementById("jessy");
	jessy.addEventListener("click",disparaitre7);
	
	buzz=document.getElementById("buzz");
	buzz.addEventListener("click",disparaitre8);
	
}
window.addEventListener("load",debut)


function a(){
	question=document.getElementById("question").value;
	
}
/**permet d'écrire la réponse dans une zone de texte (marche pas)**/
/**reponse=document.getElementById("reponse");
				reponse.innerHTML=("oui")**/
function question(){
	a()
	/**permet de repondre à la question posé**/
	switch (question){
		case 'est-ce une fille':
			if(sexemystere=="fille"){
				window.alert("oui")}
			else{
				window.alert("non");
			}
		break;
		case 'a-t-il les yeux bruns':
			if(yeuxmystere=="brun"){
				window.alert("oui")}
			else{
				window.alert("non")
			}
			
		break;
		case 'a-t-il du vert sur ça peau':
			if(peaumystere=="vert"){
				window.alert("oui")}
			else{
				window.alert("non")
				}
			
		break;
		case 'a-t-il une robe':
			if(robemystere=="robe"){
				window.alert("oui")}
			else{
				window.alert("non")
				}
		break;
		case 'a-t-il les yeux noir':
			if(yeuxnoirmystere=="bergere"){
				window.alert("oui")}
			else{
				window.alert("non")
				}
		break;
		case 'a-t-il quelque chose sur ou au dessus de la tete':
			if(chapeaumystere=="oui"){
				window.alert("oui")}
			else{
				window.alert("non")
				}
		break;
	}
}

function aleatoire() {
  persomystere= Math.floor(Math.random()*7);
	/**permet de donner un nombre aléatoir entre 0 et 7 **/
	nommystere=base_de_donnees[persomystere].nom;
	yeuxmystere=base_de_donnees[persomystere].yeux;
	sexemystere=base_de_donnees[persomystere].sexe;
	peaumystere=base_de_donnees[persomystere].peau;
	robemystere=base_de_donnees[persomystere].robe;
	yeuxnoirmystere=base_de_donnees[persomystere].yeuxnoir;
	chapeaumystere=base_de_donnees[persomystere].chapeau;

	/**permet d'assimiler un nombre à un nom **/
	
}

function personnagemystere() {
	relie();
	
		/**nommystere prend toute la base de donnees et le compare au "personnage" **/
		if(nommystere==personnage){
			window.alert("gagné");
		}
		else{
			window.alert("perdu")
		}
		
		
}





/**permet de baisser l'opacité lorsque l'on clique sur ce bouton**/
function disparaitre(){
	if(woody==0){
		woody=1;
		suite();
	}
	else{
		woody=0;
		suite();
	}
}

function suite(){
	if(woody==1){
		woodyimg=document.getElementById("woodyimg");
		woodyimg.style.opacity="1";
	
	}
	else{
		woodyimg=document.getElementById("woodyimg");
		woodyimg.style.opacity="0.5";
	
	}
}


function disparaitre2(){
	if(fourchette==0){
		fourchette=1;
		suite2();
	}
	else{
		fourchette=0;
		suite2();
	}
}

function suite2(){
	if(fourchette==1){
		fourchetteimg=document.getElementById("fourchetteimg");
		fourchetteimg.style.opacity="1";
	}
	else{
		fourchetteimg=document.getElementById("fourchetteimg");
		fourchetteimg.style.opacity="0.5";
	}
}


function disparaitre3(){
	if(bergere==0){
		bergere=1;
		suite3();
	}
	else{
		bergere=0;
		suite3();
	}
}

function suite3(){
	if(bergere==1){
		bergereimg=document.getElementById("bergereimg");
		bergereimg.style.opacity="1";
	
	}
	else{
		bergereimg=document.getElementById("bergereimg");
		bergereimg.style.opacity="0.5";
	
	}
}


function disparaitre4(){
	if(bob==0){
		bob=1;
		suite4();
	}
	else{
		bob=0;
		suite4();
	}
}

function suite4(){
	if(bob==1){
		bobimg=document.getElementById("bobimg");
		bobimg.style.opacity="1";
	
	}
	else{
		bobimg=document.getElementById("bobimg");
		bobimg.style.opacity="0.5";
	
	}
}


function disparaitre5(){
	if(rex==0){
		rex=1;
		suite5();
	}
	else{
		rex=0;
		suite5();
	}
}

function suite5(){
	if(rex==1){
		reximg=document.getElementById("reximg");
		reximg.style.opacity="1";
	
	}
	else{
		reximg=document.getElementById("reximg");
		reximg.style.opacity="0.5";
	
	}
}


function disparaitre6(){
	if(lotso==0){
		lotso=1;
		suite6();
	}
	else{
		lotso=0;
		suite6();
	}
}

function suite6(){
	if(lotso==1){
		lotsoimg=document.getElementById("lotsoimg");
		lotsoimg.style.opacity="1";
	
	}
	else{
		lotsoimg=document.getElementById("lotsoimg");
		lotsoimg.style.opacity="0.5";
	
	}
}


function disparaitre7(){
	if(jessy==0){
		jessy=1;
		suite7();
	}
	else{
		jessy=0;
		suite7();
	}
}

function suite7(){
	if(jessy==1){
		jessyimg=document.getElementById("jessyimg");
		jessyimg.style.opacity="1";
	
	}
	else{
		jessyimg=document.getElementById("jessyimg");
		jessyimg.style.opacity="0.5";
	
	}
}

function disparaitre8(){
	if(buzz==0){
		buzz=1;
		suite8();
	}
	else{
		buzz=0;
		suite8();
	}
}

function suite8(){
	if(buzz==1){
		buzzimg=document.getElementById("buzzimg");
		buzzimg.style.opacity="1";
	
	}
	else{
		buzzimg=document.getElementById("buzzimg");
		buzzimg.style.opacity="0.5";
	
	}
}

