	$('#deckOne').click(changeCardDeck);
	function changeCardDeck() {
		//if this button is selected, rider-waite deck will be
			alert('yo');
	}



	var images = [
			{img: "tarotChariot.jpg", desc: "hello world"},
			{img: "tarotDeath.jpg", desc: "hello world"},
			{img: "tarotDevil.jpg", desc: "hello world"},
			{img: "tarotEmporer.jpg", desc: "hello world"},
			{img: "tarotEmpress.jpg", desc: "hello world"}, 
			{img: "tarotHanged.jpg", desc: "hello world"},
			{img: "tarotHermit.jpg", desc: "hello world"},
			{img: "tarotHierophant.jpg", desc: "hello world"},
			{img: "tarotHighpriestess.jpg", desc: "hello world"},
			{img: "tarotJudgement.jpg", desc: "hello world"},
			{img: "tarotJustice.jpg", desc: "hello world"},
			{img: "tarotLovers.jpg", desc: "hellow world"}, 
			{img: "tarotMagician.jpg", desc: "hello world"},
			{img: "tarotMoon.jpg", desc: "hello world"},
			{img: "tarotStar.jpg", desc: "hello world"}, 
			{img: "tarotStrength.jpg", desc: "hello world"},
			{img: "tarotSun.jpg", desc: "hello world"},
			{img: "tarotTemperance.jpg", desc: "hello world"},
			{img: "tarotTower.jpg", desc: "hello world"},
			{img: "tarotWheel.jpg", desc: "tarotWorld.jpg"},

			{img: "cupsAce.jpg", desc: "hello world"},
			{img: "cups2.jpg", desc: "hello world"},
			{img: "cups3.jpg", desc: "hello world"},
			{img: "cups4.jpg", desc: "hello world"},
			{img: "cups5.jpg", desc: "hello world"},
			{img: "cups6.jpg", desc: "hello world"},
			{img: "cups7.jpg", desc: "hello world"},
			{img: "cups8.jpg", desc: "hello world"},
			{img: "cups9.jpg", desc:"hello world"},
			{img: "cups10.jpg", desc: "hello world"},
			{img: "cupsPage.jpg", desc: "hello world"},
			{img: "cupsKnight.jpg", desc: "hello world"},
			{img: "cupsQueen.jpg", desc: "hello world"},
			{img: "cupsKing.jpg", desc: "hello world"},

			{img: "wandsAce.jpg", desc: "hello world"}, 
			{img: "wands2.jpg", desc: "hello world"},
			{img: "wands3.jpg", desc: "hello world"},
			{img: "wands4.jpg", desc: "hello world"}, 
			{img: "wands5.jpg", desc: "hello world"},
			{img: "wands6.jpg", desc: "hello world"}, 
			{img: "wands7.jpg", desc: "hello world"},
			{img: "wands8.jpg", desc: "hello world"}, 
			{img: "wands9.jpg", desc: "hello world"},
			{img: "wands10.jpg", desc: "hello world"},
			{img: "wandsPage.jpg", desc: "hello world"},
			{img: "wandsKnight.jpg", desc: "hello world"},
			{img: "wandsQueen.jpg", desc: "hello world"},
			{img: "wandsKing.jpg", desc: "hello world"},

			{img: "swordsAce.jpg", desc: "hello world"},
			{img: "swords2.jpg", desc: "hello world"},
			{img: "swords3.jpg", desc: "hello world"},
			{img: "swords4.jpg", desc: "hello world"},
			{img: "swords5.jpg", desc: "hello world"},
			{img: "swords6.jpg", desc: "hello world"},
			{img: "swords7.jpg", desc: "hello world"}, 
			{img: "swords8.jpg", desc: "hello world"},
			{img: "swords9.jpg", desc: "hello world"},
			{img: "swords10.jpg", desc: "hello world"},
			{img: "swordsPage.jpg", desc: "hello world"},
			{img: "swordsKnight.jpg", desc: "hello world"},
			{img: "swordsQueen.jpg", desc: "hello world"},
			{img: "swordsKing.jpg", desc: "hello world"},

			{img: "pentsAce.jpg", desc: "hello world"},
			{img: "pents2.jpg", desc: "hello world"},
			{img: "pents3.jpg", desc: "hello world"},
			{img: "pents5.jpg", desc: "hello world"},
			{img: "pents6.jpg", desc: "hello world"},
			{img: "pents7.jpg", desc: "hello world"},
			{img: "pents8.jpg", desc: "hello world"},
			{img: "pents9.jpg", desc: "hello world"},
			{img: "pents10.jpg", desc: "hello world"},
			{img: "pentsPage.jpg", desc: "hello world"},
			{img: "pentsKnight.jpg", desc: "hello world"},
			{img: "pentsQueen.jpg", desc: "hello world"},
			{img: "pentsKing.jpg", desc: "hello world"}
			// 	 // "pents4.jpg",
				 //  "tarotFool.jpg",
				];


	var placeholder = [
		"AllSeeingEye.jpg", "Green.jpg", "Madame.jpg", "Scaly.jpg",
		"Swirlie.jpg", "Blue.jpg"
				];

//pick random index from placeholder array and plop the image associated with it into one empty cardslot
	function randPlaceholder() {
		return placeholder[Math.floor(Math.random() * placeholder.length)];
	} 

	var randomPlaceholder = randPlaceholder();
	var newPlaceholder = randomPlaceholder;


	function randImage() {
		return images[Math.floor(Math.random() * images.length)];
		// return images.splice[Math.floor(Math.random() * images.length, 1)[0];
	}

	function nextCardHolder() {
		
		var posAry = $(".card-holder.unfilled").map(function(){
			return $(this).data('pos');
		})

		return Math.min.apply( Math, posAry );
	}

	function placeImage(pos){
		//placeholder image fades out slow, new image fades in slow
		var imgTag = $($(".card-holder")[pos]);
		var randomImage = randImage();
		var newImage = 'rider-waite/' + randomImage.img;
		var randomImageIndex = images.indexOf(randomImage.img);
		images.splice(randomImageIndex, 1);

		imgTag.attr('src', newImage);
		imgTag.removeClass('unfilled');
	}

///card titles for cross layout
			$('#cardUno').text("The Situation");
			$('#cardDos').text("The Challenge");
			$('#cardTres').text("The Distant Past");
			$('#cardQuatro').text("The Recent Past");
			$('#cardCinco').text("The Present");
			$('#cardSeis').text("The Near Future");
			$('#cardSiete').text("Your Power");	
			$('#cardOcho').text("People Around You");
			$('#cardNueve').text("Your Hopes and Fears");
			$('#cardDiez').text("The Outcome");


			$('.cardSlot').addClass('cross');

	$(document).ready(function(){

		$("#cardBoxOne").click(showDescription);

		function showDescription() {
			var description = randomImage.desc;
			
			alert('hi');
		}


		$('#zingle').click(function(){
			$('.card-holder').attr('src', 'rider-waite/' + 'back' + newPlaceholder);
			$('.card-holder').addClass('unfilled');
			$('.cardSlot').removeClass('cross');
			$('#cardUno').text("");
			$('#cardBoxTwo, #cardBoxThree, #cardBoxFour, #cardBoxFive, #cardBoxSix, #cardBoxSeven, #cardBoxEight, #cardBoxNine, #cardBoxTen').fadeOut('');
			//hide the last 3 cards when single card is chosen and change label to "singlecard"
		});



		$('#threeCard').click(function(){
			$('.card-holder').attr('src', 'rider-waite/' + 'back' + newPlaceholder);
			$('.card-holder').addClass('unfilled');
			$('.cardSlot').removeClass('cross');
			$('#cardUno').text("Past");
			$('#cardDos').text("Present");
			$('#cardTres').text("Future");
			if ($('#cardBoxTwo, #cardBoxThree, #cardBoxFour, #cardBoxFive, #cardBoxSix, #cardBoxSeven, #cardBoxEight, #cardBoxNine, #cardBoxTen').css('display') === 'block') {
				console.log('first if');
				$('#cardBoxFour, #cardBoxFive, #cardBoxSix, #cardBoxSeven, #cardBoxEight, #cardBoxNine, #cardBoxTen').fadeOut('slow');
			} else if ($('#cardBoxOne').css('display') === 'block' || $('#cardBoxTwo, #cardBoxThree, #cardBoxFour, #cardBoxFive, #cardBoxSix, #cardBoxSeven, #cardBoxEight, #cardBoxNine, #cardBoxTen').css('display') == "none"){
				$('#cardBoxTwo, #cardBoxThree').fadeIn('slow');
				console.log('second if');
			}  
		});

		$('#cross').click(function(){
			// $('#cardBoxOne').addClass(':visible');
			$('.card-holder').attr('src', 'rider-waite/' + 'back' + newPlaceholder);
			$('.card-holder').addClass('unfilled');
			$('.cardSlot').addClass('cross');
			$('#cardUno').text("The Situation");
			$('#cardDos').text("The Challenge");
			$('#cardTres').text("The Distant Past");
			$('#cardBoxTwo, #cardBoxThree, #cardBoxFour, #cardBoxFive, #cardBoxSix, #cardBoxSeven, #cardBoxEight, #cardBoxNine, #cardBoxTen').fadeIn('slow');
		});

		$('#pickCard').click(function(){
			pos = nextCardHolder();
			placeImage(pos);
		});

//have a card meaning display in transparent grey over the card if it is hovered over. 
//call cardBox One. If it is hovered over, 
//find out if it is the placeholer image or a new image
//if it is a new image, find that image's index
//based on that index, display a unique meaning paragraph
//when you hover off, it resets. 
		$('.card-holder').hover(cardMeaning);
		function cardMeaning() {
			if ($('#cardBoxOne').hasClass('unfilled')){
				console.log('hovering over the cards');
			}
		}

		$('#reset').click(function(){
			// $('#cardBoxOne img').show();
			$('.card-holder').attr('src', 'rider-waite/' + 'back' + newPlaceholder);
			$('.card-holder').addClass('unfilled');
			newPlaceholder = randPlaceholder();
	images = [
			{img: "tarotChariot.jpg", desc: "hello world"},
			{img: "tarotDeath.jpg", desc: "hello world"},
			{img: "tarotDevil.jpg", desc: "hello world"},
			{img: "tarotEmporer.jpg", desc: "hello world"},
			{img: "tarotEmpress.jpg", desc: "hello world"}, 
			{img: "tarotHanged.jpg", desc: "hello world"},
			{img: "tarotHermit.jpg", desc: "hello world"},
			{img: "tarotHierophant.jpg", desc: "hello world"},
			{img: "tarotHighpriestess.jpg", desc: "hello world"},
			{img: "tarotJudgement.jpg", desc: "hello world"},
			{img: "tarotJustice.jpg", desc: "hello world"},
			{img: "tarotLovers.jpg", desc: "hellow world"}, 
			{img: "tarotMagician.jpg", desc: "hello world"},
			{img: "tarotMoon.jpg", desc: "hello world"},
			{img: "tarotStar.jpg", desc: "hello world"}, 
			{img: "tarotStrength.jpg", desc: "hello world"},
			{img: "tarotSun.jpg", desc: "hello world"},
			{img: "tarotTemperance.jpg", desc: "hello world"},
			{img: "tarotTower.jpg", desc: "hello world"},
			{img: "tarotWheel.jpg", desc: "hello world"},
			{img: "tarotWorld.jpg", desc: "hello world"},

			{img: "cupsAce.jpg", desc: "hello world"},
			{img: "cups2.jpg", desc: "hello world"},
			{img: "cups3.jpg", desc: "hello world"},
			{img: "cups4.jpg", desc: "hello world"},
			{img: "cups5.jpg", desc: "hello world"},
			{img: "cups6.jpg", desc: "hello world"},
			{img: "cups7.jpg", desc: "hello world"},
			{img: "cups8.jpg", desc: "hello world"},
			{img: "cups9.jpg", desc:"hello world"},
			{img: "cups10.jpg", desc: "hello world"},
			{img: "cupsPage.jpg", desc: "hello world"},
			{img: "cupsKnight.jpg", desc: "hello world"},
			{img: "cupsQueen.jpg", desc: "hello world"},
			{img: "cupsKing.jpg", desc: "hello world"},

			{img: "wandsAce.jpg", desc: "hello world"}, 
			{img: "wands2.jpg", desc: "hello world"},
			{img: "wands3.jpg", desc: "hello world"},
			{img: "wands4.jpg", desc: "hello world"}, 
			{img: "wands5.jpg", desc: "hello world"},
			{img: "wands6.jpg", desc: "hello world"}, 
			{img: "wands7.jpg", desc: "hello world"},
			{img: "wands8.jpg", desc: "hello world"}, 
			{img: "wands9.jpg", desc: "hello world"},
			{img: "wands10.jpg", desc: "hello world"},
			{img: "wandsPage.jpg", desc: "hello world"},
			{img: "wandsKnight.jpg", desc: "hello world"},
			{img: "wandsQueen.jpg", desc: "hello world"},
			{img: "wandsKing.jpg", desc: "hello world"},

			{img: "swordsAce.jpg", desc: "hello world"},
			{img: "swords2.jpg", desc: "hello world"},
			{img: "swords3.jpg", desc: "hello world"},
			{img: "swords4.jpg", desc: "hello world"},
			{img: "swords5.jpg", desc: "hello world"},
			{img: "swords6.jpg", desc: "hello world"},
			{img: "swords7.jpg", desc: "hello world"}, 
			{img: "swords8.jpg", desc: "hello world"},
			{img: "swords9.jpg", desc: "hello world"},
			{img: "swords10.jpg", desc: "hello world"},
			{img: "swordsPage.jpg", desc: "hello world"},
			{img: "swordsKnight.jpg", desc: "hello world"},
			{img: "swordsQueen.jpg", desc: "hello world"},
			{img: "swordsKing.jpg", desc: "hello world"},

			{img: "pentsAce.jpg", desc: "hello world"},
			{img: "pents2.jpg", desc: "hello world"},
			{img: "pents3.jpg", desc: "hello world"},
			{img: "pents5.jpg", desc: "hello world"},
			{img: "pents6.jpg", desc: "hello world"},
			{img: "pents7.jpg", desc: "hello world"},
			{img: "pents8.jpg", desc: "hello world"},
			{img: "pents9.jpg", desc: "hello world"},
			{img: "pents10.jpg", desc: "hello world"},
			{img: "pentsPage.jpg", desc: "hello world"},
			{img: "pentsKnight.jpg", desc: "hello world"},
			{img: "pentsQueen.jpg", desc: "hello world"},
			{img: "pentsKing.jpg", desc: "hello world"}
			// 	 // "pents4.jpg",
				 //  "tarotFool.jpg",
				];
		});

	});











