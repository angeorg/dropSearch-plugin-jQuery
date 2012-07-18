/*
* jQuery dropSearch Plugin
*
* Copyright (c) 2012 Anton Georgiev
*
*/
(function ($) {
  $.fn.dropSearch = function(select_name, options)
  {
    var settings = $.extend({
      'autocomplete' : true,
    }, options);

    return this.each(function(){ 

      $(this).keyup(function(e){

        ignore_keys = [9, 13, 38, 39, 40];
        select_form = $(select_name);
        search_string = $(this).val().toLowerCase();
        selected_element = select_form.find(':selected');

        if (search_string.length > 0)
        {
          if (e.keyCode == 38)
          {
            selected_element.prev().attr('selected', 'selected');
            if (settings.autocomplete) $(this).val(select_form.find(":selected").text());
          }
          else if (e.keyCode == 39)
          {
            if (settings.autocomplete) $(this).val(select_form.find(":selected").text());
          }
          else if (e.keyCode == 40)
          {
            selected_element.next().attr('selected', 'selected');
            if (settings.autocomplete) $(this).val(select_form.find(":selected").text());
          }
          else if (ignore_keys.indexOf(e.keyCode))
          {
            for (var i = 0; i < select_form.children().length; i++)
            {
              selected_child = select_form.children(':eq(' + i + ')');
              var search_text = selected_child.text().toLowerCase();
              if (search_text.match(search_string))
              {
                selected_child.attr('selected', true);
                break;
              }
            }
          }
          else
          {
            select_form.prop('selectedIndex', -1);
          }
        }
        else
        {
          select_form.prop('selectedIndex', -1);
        }
      });
    });
  };
})(jQuery);