$(function() {
  
  var scrollMagicController = new ScrollMagic();
 

 // Jumbotron - btn for try betatest
 	var jumbotron__btn_animation = TweenMax.staggerFromTo('.js-animation-on .jumbotron__btn', 0.5, {
		position: "relative",
		left: "-4000px"
	},
	{
		position: "relative",
		left: 0
	},
	0.3);

	var features = new ScrollScene({
		triggerElement: '.jumbotron',
		triggerHook: "onEnter"
	})
	.setTween(jumbotron__btn_animation)
	.addTo(scrollMagicController)
	.addIndicators();
//----------------------------------------------------------------------------



// Gallery

// 1 - Gallery - first part of images that slightly higher

 	var galleryItemsTopRow_anumation = TweenMax.staggerFromTo('.js-animation-on .gallery__item:nth-child(2n+1)', 0.5, {
		opacity: 0,
		transform: "translateY(-40px)",
	},
	{
		opacity: 1,
		transform: "translateY(0)"
	},
	0.1);

	var features = new ScrollScene({
		triggerElement: '.gallery',
		triggerHook: "onEnter"
	})
	.setTween( galleryItemsTopRow_anumation)
	.addTo(scrollMagicController)
	.addIndicators();

// 2 - Gallery - first part of images that slightly higher

	 var galleryItemsBottomRow_anumation = TweenMax.staggerFromTo('.js-animation-on .gallery__item:nth-child(2n)', 0.5, {
		opacity: 0,
		transform: "translateY(40px)",
	},
	{
		opacity: 1,
		transform: "translateY(0)"
	},
	0.2);

	var features = new ScrollScene({
		triggerElement: '.gallery',
		triggerHook: "onEnter"

	})
	.setTween(galleryItemsBottomRow_anumation)
	.addTo(scrollMagicController)
	.addIndicators();
//----------------------------------------------------------------------------




// Features - animations features list items

	var features__item_animation = TweenMax.staggerFromTo('.js-animation-on .features__item', 0.5, {
		opacity: 0,
		scale: 0.1
	},
	{
		opacity: 1,
		scale: 1
	},
	0.2);

	var features = new ScrollScene({
		triggerElement: '.features',
		offset: "-200"
	})
	.setTween(features__item_animation)
	.addTo(scrollMagicController)
	.addIndicators();
//----------------------------------------------------------------------------



// Promo-sharpened block

// 1 - Promo Sharpened - white circle.

	var promoSharpened__circle_animation = TweenMax.staggerFromTo('.js-animation-on .promo-sharpened__circle', 0.5, {
		opacity: 0
	},
	{
		opacity: 1
	},
	0.5);

	var footer = new ScrollScene({
		triggerElement: '.promo-sharpened',
		offset: "-350"
	})
	.setTween( promoSharpened__circle_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 2 - Promo Sharpened - gray part fo circle.

	var promoSharpened__circlePart_animation = TweenMax.staggerFromTo('.js-animation-on .promo-sharpened__part-of-circle', 0.5, {
		opacity: 0
	},
	{
		opacity: 1
	},
	0.5);

	var footer = new ScrollScene({
		triggerElement: '.promo-sharpened',
		offset: "-350"
	})
	.setTween(promoSharpened__circlePart_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 3 - Promo Sharpened - iphone.

	var promoSharpened__iphone_animation = TweenMax.staggerFromTo('.js-animation-on .promo-sharpened__iphone', 0.5, {
		opacity: 0,
		transform: "translateX(-4000px)",
	},
	{
		opacity: 1,
		transform: "translateX(0)"
	},
	0.2);

	var features = new ScrollScene({
		triggerElement: '.promo-sharpened',
	})
	.setTween(promoSharpened__iphone_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 4 - Promo Sharpened - title of text block.

	var promoSharpened__title_animation = TweenMax.staggerFromTo('.js-animation-on .promo-sharpened__title', 0.5, {
		opacity: 0,
		position: "relative",
		right: "-4000"
	},
	{
		position: "relative",
		opacity: 1,
		right: "0"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.promo-sharpened',
		offset: "-150"
	})
	.setTween(promoSharpened__title_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 5 - Promo Sharpened - main text in text-block.

	var promoSharpened__text_animation = TweenMax.staggerFromTo('.js-animation-on .promo-sharpened__text', 0.5, {
		position: "relative",
		opacity: 0,
		bottom: "-30px"
	},
	{
		position: "relative",
		opacity: 1,
		bottom: "0"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.promo-sharpened',
		offset: "-100"

	})
	.setTween(promoSharpened__text_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 6 - Promo Sharpened - btn in text block.

	var promoSharpened__btn_animation = TweenMax.staggerFromTo('.js-animation-on .promo-sharpened__btn', 0.5, {
		opacity: 0,
		bottom: "-30px"
	},
	{
		opacity: 1,
		bottom: "0"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.promo-sharpened',
	})
	.setTween(promoSharpened__btn_animation)
	.addTo(scrollMagicController)
	.addIndicators();
//----------------------------------------------------------------------------




// Promo Location

// 1 - Promo Location - colored images under iphone.

	var promoLlocation__imagesUnder_animation = TweenMax.staggerFromTo('.js-animation-on .promo-location__images-under', 0.5, {
		opacity: 0
	},
	{
		opacity: 1
	},
	0.5);

	var footer = new ScrollScene({
		triggerElement: '.promo-location',
		offset: "-200"
	})
	.setTween(promoLlocation__imagesUnder_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 2 - Promo Location - iphone.

	var promoLocation__iphone_animation = TweenMax.staggerFromTo('.js-animation-on .promo-location__iphone', 0.5, {
		opacity: 0
	},
	{
		opacity: 1
	},
	0.7);


	var footer = new ScrollScene({
		triggerElement: '.promo-location',
	})
	.setTween(promoLocation__iphone_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 3 - Promo Location - colored images above iphone.

	var promoLlocation__imagesAbove_animation = TweenMax.staggerFromTo('.js-animation-on .promo-location__images-above', 0.5, {
		opacity: 0
	},
	{
		opacity: 1
	},
	0.6);

	var footer = new ScrollScene({
		triggerElement: '.promo-location',
		offset: "100"
	})
	.setTween(promoLlocation__imagesAbove_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 4 - Promo Location - title of text block.

	var promoLocation__title_animation = TweenMax.staggerFromTo('.js-animation-on .promo-location__title', 0.5, {
		opacity: 0,
		position: "relative",
		left: "-4000"
	},
	{
		position: "relative",
		opacity: 1,
		left: "0"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.promo-location',
		offset: "-70"
	})
	.setTween(promoLocation__title_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 5 - Promo Location - main text in text-block.

	var promoLocation__text_animation = TweenMax.staggerFromTo('.js-animation-on .promo-location__text', 0.5, {
		position: "relative",
		opacity: 0,
		bottom: "-60px"
	},
	{
		position: "relative",
		opacity: 1,
		bottom: "0"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.promo-location',
	})
	.setTween(promoLocation__text_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 6 - Promo Location - btn in text block.

	var promoLocation__btn_animation = TweenMax.staggerFromTo('.js-animation-on .promo-location__btn', 0.5, {
		opacity: 0,
		bottom: "-40px"
	},
	{
		opacity: 1,
		bottom: "0"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.promo-location',
	})
	.setTween(promoLocation__btn_animation)
	.addTo(scrollMagicController)
	.addIndicators();
//----------------------------------------------------------------------------

  


// Subscribe

	var subscribe__form_animation = TweenMax.staggerFromTo('.js-animation-on .subscribe .subscribe__form', 0.5, {
		position: "relative",
		left: "-4000px"
	},
	{
		position: "relative",
		left: 0
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.subscribe__form',
		triggerHook: "onEnter",
		offset: "100"
	})
	.setTween(subscribe__form_animation)
	.addTo(scrollMagicController)
	.addIndicators();
//----------------------------------------------------------------------------




// Footer

// 1- Footer - navigarion items

	var footer__navItem_animation = TweenMax.staggerFromTo('.js-animation-on .footer__nav-item', 0.5, {
		position: "relative",
		opacity: 0,
		bottom: "-30px"
	},
	{
		position: "relative",
		opacity: 1,
		bottom: "0"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.footer',
		triggerHook: "onEnter"

	})
	.setTween(footer__navItem_animation)
	.addTo(scrollMagicController)
	.addIndicators();


// 1- Footer - logo

	var footer__logo_animation = TweenMax.staggerFromTo('.js-animation-on .footer__logo', 0.5, {
		opacity: 0,
		top: "-30px"
	},
	{
		opacity: 1,
		top: "17px"
	},
	0.3);

	var footer = new ScrollScene({
		triggerElement: '.footer',
		triggerHook: "onEnter"
	})
	.setTween(footer__logo_animation)
	.addTo(scrollMagicController)
	.addIndicators();
  
});
//----------------------------------------------------------------------------