/*
* The below code for To pause the Iframe youtube video
* @Issue: Refresh iframe loads the page on every click for slider
* @ 30-12-2016
*/
jQuery(".item iframe").each(function() {
	jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
});