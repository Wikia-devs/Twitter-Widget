/**
 * Twitter Widget - A small utility for assing Twitter widgets
 *
 * @Author(s): [[User:Shining-Armor]] [[User:Deadcoder]]
 */

/**
 * <span>
 * <span class="twitter-feed" href="https://twitter.com/Natewatson999/lists/france-t-l-visions" data-widget-id="599633699425124352" source="https://twitter.com/Natewatson999/lists/france-t-l-visions"></span>
 * <span class="twitter-feed" href="https://twitter.com/QuentinMerabet" data-widget-id="362615676986335235" source="@QuentinMerabet"></span>
 * </span>
 */

$(".twitter-feed").each(function(index){
	$(this).append('<scr' + 'ipt>!function(d,s,id){var js, fjs=d.getElementsByTagName(s)[0]; if(!d.getElementById(id)){ js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</scr' + 'ipt>');
	var $input = $( this );
	$(this).prepend('<a class="twitter-timeline" href="' + $input.attr('href') + '" data-widget-id="' + $input.attr('data-widget-id') + '" width="700" height="1250">Tweets from ' + $input.attr('source') + '</a>');
});
