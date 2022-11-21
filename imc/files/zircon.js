(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.zircon = {
    attach: function (context, settings) {
      $('.btn-btt').smoothScroll({speed: 1000});
      if($("#search-block-form [name='keys']").val() === "") {
        $("#search-block-form input[name='keys']").val(Drupal.t("Keywords"));
      }
      $("#search-block-form input[name='keys']").focus(function() {
        if($(this).val() === Drupal.t("Keywords")) {
          $(this).val("");
        }
      }).blur(function() {
        if($(this).val() === "") {
          $(this).val(Drupal.t("Keywords"));
        }
      });
      $(window).scroll(function(){
        if ($(window).scrollTop()>=60) {
          if ($('#block-banner').hasClass()==false) $('#block-banner').addClass('dop_top');
        }
        else $('#block-banner').removeClass('dop_top');
      });
      $(window).scroll(function(){
        if ($(window).scrollTop()>=60) {
          if ($('#main-menu').hasClass()==false) $('#main-menu').addClass('to_top');
        }
        else $('#main-menu').removeClass('to_top');
      });

      $(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $('.btn-btt').show();
          }
          else {
            $('.btn-btt').hide();
          }
      }).resize(function(){
        if($(window).scrollTop() > 200) {
          $('.btn-btt').show();
        }
        else {
          $('.btn-btt').hide();
        }
      });

      $("img, a").on("dragstart", function(event) { event.preventDefault(); });

      // $('.slides li').wrapInner('<a class="colorbox cboxElement" href="http://edu/sites/default/files/2019-12/1%20-%200003.jpg" ></a>');
    }

  };

})(jQuery, Drupal);


