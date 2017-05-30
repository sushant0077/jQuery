/*
* The below code for To pause the Iframe youtube video
* @Issue: Refresh iframe loads the page on every click for slider
* @ 30-12-2016
*/
jQuery(".item iframe").each(function() {
	jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
});


/*cross domain filter for ajax*/
jQuery.ajaxPrefilter( function (options) {
	console.log(options);
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

/* check weather your site in HTTP or HTTPS */
var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');


/* Ajax Example for cross domain site.*/
jQuery.ajax({
 	type: "POST",
	url: http + '//cors-anywhere.herokuapp.com/http://example.com',
	data: Yourdata,
	success: function (data) {
		/* your logic goes here */
	}
});
