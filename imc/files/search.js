(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.zirconSearch = {
    attach: function (context, settings) {
      $('#block-search').once().click(function(e){
        $('#block-formapoiska').addClass('search-block-form--active');
        if($('a.search-block-form__close').length === 0){
          $('.search-block-form').append('<a href="#" class="search-block-form__close">Х</a>');
        }

        closeSearch();
      });

      function closeSearch(){
        $('.search-block-form__close').once().click(function(e){
          $('.search-block-form__close').parent('#block-formapoiska').removeClass('search-block-form--active');
          $('.search-block-form__close').remove('.search-block-form__close');
        });
      }

      $(document).once().on('click', function(e){
        if(!$(e.target).closest($('.search-block-form--active')).length &&
          !$(e.target).closest($('#block-search')).length){
            $('.search-block-form__close').click();
        }
      });

      $(document).scroll(function(){
        $('.search-block-form__close').click();
      });
    }
  };

})(jQuery, Drupal);
