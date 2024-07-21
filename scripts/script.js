// Script File

// Home Section Starts
var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
var navList = document.querySelector('.main-navbar .nav-list');
var navListItems = document.querySelectorAll('.nav-list li a');

hamburgerBtn.addEventListener('click', activeClass);

function activeClass(){
	hamburgerBtn.classList.toggle('active');
	navList.classList.toggle('active');
}

for(var i = 0; i < navListItems.length; i++){
	navListItems[i].addEventListener('click', listItemClicked);
}

function listItemClicked(){
	hamburgerBtn.classList.remove('active');
	navList.classList.remove('active');
}

// Code For Navbar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 150){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

// Home Section Ends


// About Section Starts

//English
$(function() {
    $(".us").click(function() {
        //header
        // $(".nav-list").children().eq(0).text("home");
		$("#accueil").text("home");
        $("#about1").text("about");
        $("#classes1").text("classes");
        $("#prices1").text("prices");
		$("#boutique1").text("boutique");
        $("#contact1").text("contact");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-fr");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#intro").text("Here we practice real Capoeira Angola and here we learn to be loyal and fair.");
        //About
		$(".origins h2").text("Origins");
        $(".origins~p").text("The history of Capoeira Angola is punctuated by notable moments and it is difficult to give a summary that does justice to the survival of this art which has gone through many pitfalls and overcome a long period of prohibition...");
		
		$(".pastinha h2").text("Mestre Pastinha");
        $(".pastinha~p").text("Vincente Ferreira Pastinha was born on April 5, 1889 and died on November 13, 1981. As a child, he was small and frail, his neighbor, an old Angolan, Benedito, taught him the basics of Capoeira. This is how he begins to practice and how he will later want to share his knowledge... ");
        
		$(".pequeno h2").text("Mestre João Pequeno");
		$(".pequeno~p").text("After attending capoeira rodas, wanting to become more combative, Mestre João Pequeno began practicing Capoeira with Mestre Gilvenson, he later became one of the main disciples of Mestre Pastinha...");
       
		$(".jogo h2").text("Mestre Jogo de Dentro");
		$(".jogo~p").text("Mestre Jogo de Dentro trained to become a master of Capoeira Angola at the Centre Esportiva de Capoeira Angola of the legendary Mestre João Pequeno...");
        
		$(".montreal h2").text("Grupo Capoeira Angola Montreal");
		$(".montreal~p").text("The Grupo has been established since 1994, thanks to the efforts of a handful of enthusiasts.It was born from the meeting of Mestre Jogo de Dentro and Colette in December 1994. We celebrate 30 years of existence next December...");
        
		$(".colette h2").text("Mestre Colette");
		$(".colette~p").text("A pioneer of Capoeira Angola in Canada, she has been practicing since 1990, at which time contemporary Capoeira was booming. In 1993, Colette undertook her first trip to Brazil and in 1994 during her second stay...");
		
		$(".nico h2").text("Contremestre Nicolas");
		$(".nico~p").text("Nicolas began practicing Capoeira Angola with Colette in January 2000. He quickly became her right-hand man. Talented both in combat dance and Afro-Brazilian music and rhythms, he as the gift of sowing around him an atmosphere of conviviality and trust...");
    });
});


//French
$(function() {
    $(".qb").click(function() {
        //header
        $("#accueil").text("accueil");
        $("#about1").text("à propos");
        $("#classes1").text("entraînement");
        $("#prices1").text("prix");
		$("#boutique1").text("boutique");
        $("#contact1").text("location");
        $(".language-selected").text("fr-QB");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-fr");
        //section
        $("#intro").text("Ici on pratique la véritable Capoeira Angola et ici on apprend à être loyal et juste.");
		$("#more").text("En savoir plus");
		$(".banner-contents h3").text("Depuis 1994");
        //About
        $("about-right-col a h4").text("à propos de nous");

        $(".origins h2").text("L’origine de la Capoeira Angola");
        $(".origins~p").text("L’histoire de la Capoeira est ponctuée de moments historiques et il est difficile d’en faire un résumé qui rende justice à la survie de cet art qui a traversé beaucoup d’embûches et surmonté une longue période de prohibition...");
		
		$(".pastinha h2").text("Mestre Pastinha");
        $(".pastinha~p").text("Vincente Ferreira Pastinha est né le 5 avril 1889 et est décédé le 13 novembre 1981. Enfant, il était petit et frêle, son voisin, un vieil Angolais, Benedito, lui enseigne les rudiments de la Capoeira... ");
        
		$(".pequeno h2").text("Mestre João Pequeno");
		$(".pequeno~p").text("Après avoir assisté à des rodas de capoeira, voulant devenir plus combatif, Mestre João Pequeno commence à pratiquer la Capoeira avec Mestre Gilvenson, il devient plus tard un des principaux disciples de Mestre Pastinha, c’est lui qui influence le célèbre Mestre João Grande à la pratique de la Capoeira...");
       
		$(".jogo h2").text("Mestre Jogo de Dentro");
		$(".jogo~p").text("Mestre Jogo de Dentro est formé maître de Capoeira Angola au Centre Esportivo de Capoeira Angola du légendaire Mestre João Pequeno, lui-même, disciple d’une autre figure légendaire de cet art, Mestre Pastinha...");
        
		$(".montreal h2").text("Grupo Capoeira Angola Montreal");
		$(".montreal~p").text("Le Grupo est établi depuis 1994, grâce aux efforts d’une poignée de passionnés. Il est né de la rencontre de Mestre Jogo de Dentro et Colette, en décembre 1994. On fête les 30 ans d’existence en décembre...");
        
		$(".colette h2").text("Mestre Colette");
		$(".colette~p").text("Pionnière de la Capoeira Angola au Canada, elle pratique depuis 1990, à cette époque, la Capoeira contemporaine est en plein essor. En 1993, Colette entreprend son premier voyage au Brésil et en 1994 à son deuxième séjour, elle rencontre ...");
		
		$(".nico h2").text("Contremestre Nicolas");
		$(".nico~p").text("Nicolas commence à pratiquer la Capoeira Angola avec Colette en janvier 2000. Il devient vite son bras droit...");

        // Facilities Section Starts
        $(".martial-art h2").text("art martial");
        $(".martial-art p").text("La Capoeira Angola est célèbre pour ses mouvements lents et élégants. Elle met l'accent sur l'importance du rituel et de la théâtralité.");

        $(".music h2").text("Musique et chanson");
        $(".music p").text("Vous apprendrez à jouer des instruments de musique traditionnels tels que le berimbau, l'atabaque, le pandeiro et à chanter des chansons de capoeira.");

        $(".atmosphere h2").text("Ambiance amicale");
        $(".atmosphere p").text("La pratique de la Capoeira Angola aide à développer les compétences de combat et vous connecte à une communauté de personnes formidables partageant les mêmes idées.");
    });
});


//Potrugeuse
$(function() {
    $(".br").click(function() {
        //header
        $("#accueil").text("BEM-VINDO");
        $("#about1").text("sobre");
        $("#classes1").text("treinamento");
        $("#prices1").text("preço");
		$("#boutique1").text("comprar");
        $("#contact1").text("aluguel");
        $(".language-selected").text("pr-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-qb");
        $(".language-selected").addClass("change-br");
        //section
        $("#intro").text("Aqui pratico a verdadeira Capoeira Angola e aqui os homens aprendem a ser leais e justos.");
		$("#more").text("Saber mais");
		$(".banner-contents h3").text("Desde 1994");
        //About
        $(".about-us").text("sobre nós");

        $(".origins h2").text("A origem da Capoeira Angola");
        $(".origins~p").text("A história da Capoeira é pontuada por momentos históricos e é difícil fazer um resumo que faça justiça à sobrevivência desta arte que passou por muitas armadilhas e superou um longo período de proibição....");
		
		$(".pastinha h2").text("Mestre Pastinha");
        $(".pastinha~p").text("Vincente Ferreira Pastinha nasceu em 5 de abril de 1889 e faleceu em 13 de novembro de 1981. Quando criança, era pequeno e frágil, seu vizinho, um velho Angolano, Benedito, ensinou-lhe o básico da Capoeira. É assim que ele começa a praticar e mais tarde desejará compartilhar seus conhecimentos... ");
        
		$(".pequeno h2").text("Mestre João Pequeno");
		$(".pequeno~p").text("Após frequentar rodas de Capoeira querendo se tornar mais combativo, Mestre João Pequeno começou a praticar Capoeira com Mestre Gilvenson, mais tarde tornou-se um dos principais discípulos de Mestre Pastinha, foi ele quem influenciou o famoso Mestre João Grande para a prática da Capoeira...");
       
		$(".jogo h2").text("Mestre Jogo de Dentro");
		$(".jogo~p").text("Mestre Jogo de Dentro formou-se como mestre de Capoeira Angola no Centro Esportivo do Capoeira Angola do lendário Mestre João Pequeno, ele próprio discípulo de outra figura lendária desta arte, Mestre Pastinha...");
        
		$(".montreal h2").text("Grupo de Capoeira  Semente do Jogo de Angola em Montreal");
		$(".montreal~p").text("O Grupo foi criado desde 1994, graças ao esforço de um punhado de entusiastas. Nasceu do encontro de Mestre Jogo de Dentro e Colette em dezembro de 1994. Comemoramos 30 anos de existência em dezembro. ...");
        
		$(".colette h2").text("Mestre Colette");
		$(".colette~p").text("Pioneira da Capoeira Angola no Canada, pratica desde 1990, época em que a Capoeira contemporânea estava em franca expansão. Em 1993, Colette realizou sua primeira viagem ao Brasil e em 1994, durante sua segunda estadia, conheceu em Salvador da Bahia o homem que se tornou se mentor, Mestre Jogo de Dentro ...");
		
		$(".nico h2").text("Contremestre Nicolas");
		$(".nico~p").text("Nicolas começou a praticar Capoeira Angola com Colette em janeiro 2000. Rapidamente se tornou seu braço direito. Talentoso tanto na dança de combate quanto na música e ritmos afro-brasileiros, tem o dom de semear ao ser redor um clima de convívio e confiança...");

// Facilities Section Starts
$(".martial-art h2").text("Artes marciais");
$(".martial-art p").text("A Capoeira Angola é famosa por seus movimentos lentos e elegantes. Ela enfatiza a importância do ritual e da teatralidade.");

$(".music h2").text("Música e canção");
$(".music p").text("Você aprenderá a tocar instrumentos musicais tradicionais, como berimbau, atabaque, pandeiro, e cantar músicas de capoeira.");

$(".atmosphere h2").text("Ambiente amigável");
$(".atmosphere p").text("A prática da Capoeira Angola ajuda a desenvolver habilidades de combate e conecta você a uma comunidade de pessoas excelentes com ideias semelhantes.");
    });
});