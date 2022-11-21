(function ($, Drupal) {

  "use strict";
  Drupal.behaviors.zirconCommas = {
    attach: function (context, settings) {
      jQuery.fn.liQuotes = function(options){
        return this.each(function(){
          htmlreplace($(this));
          function htmlreplace(element){
            if (!element) element = document.body;
            var nodes = $(element).contents().each(function () {
              if (this.nodeType == Node.TEXT_NODE) {
                var result = $(this).text().replace(/\x27/g, '\x22').replace(/(\w)\x22(\w)/g, '$1\x27$2').replace(/(^)\x22(\s)/g, '$1&raquo;$2').replace(/(^|\s|\()"/g, "$1&laquo;").replace(/"(\;|\!|\?|\:|\.|\,|$|\)|\s)/g, "&raquo;$1")
                $(this).after(result).remove();
              } else {
                htmlreplace(this);
              };
            });
          };
        });
      };
      $(function(){
        $('.content').liQuotes();
      });
    }
  };
  
})(jQuery, Drupal);