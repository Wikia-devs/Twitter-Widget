/**
 * Twitter Widget - A small utility for assing Twitter widgets
 *
 * @Author(s): [[User:Shining-Armor]]
 */

$(function () {
    var twitterName = $('.twitter-name').text();
    var embedCode = $('.twitter-code').text();
    var embedUI = '<a class="twitter-timeline" href="https://twitter.com/' + mw.html.escape(twitterName) + '" data-widget-id="' + mw.html.escape(embedCode) + '">Tweets by @' + mw.html.escape(twitterName) + '</a>';
    
    $('#twitter-container').html(embedUI);
    
    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
});
