# Description

The dropSearch jQuery plugin easily allows you to search inside a drop-down list.

# Usage
<p>You have to include jQuery.js, dropSearch.js and assign the search input's name and the select's name that you'll be searching in.<br />
Use up/down arrows to navigate. If the autocomplete option is turned on you can use the right arrow to autocomplete the searched string according to the selected option from the drop-down list.<br />
If you get confused look at the example in demo.html</p>

<h2>Example #1</h2>
<pre>$('#search_input').dropSearch('#drop_down_list');</pre>

<h2>Example #2: Autocomplete off</h2>
<pre>$('#search_input').dropSearch('#drop_down_list', { 'autocomplete' : false } );</pre>

# Available options and parameters
<pre>
'autocomplete' : 'true', //by default the autocomplete is turned on
</pre>

# Copyright
jQuery dropSearch plugin is written by Anton Georgiev (c) 2012<br/>
Feel free to re-use, distribute, butcher, edit and whatever else you want.
