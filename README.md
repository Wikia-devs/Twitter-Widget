# Twitter-Widget
A small utility to streamline the use of Twitter widgets on Wikia

This script removes the need for `<verbatim>` tags on pages as it uses JavaScript to embed widgets in a dynamic way.

# Useage
To use Twitter Widget simply add the contents of `template.html` to `Template:Twitter` and publish it.

Next you must import the _Twitter Widget_ script by adding `importScriptPage('TwittWidget/code.js', 'dev');` to your `MediaWiki:Wikia.js` page and publish it as well.

After that you then need to clear your browser's chace. Once this is complete all you need to do is add the following code to your page and you are all set!

`{{Twitter|<twitter username without @>|<twitter widget id>}}`
