(function ($, Drupal) {

  Drupal.behaviors.zirconfile_modal = {
    attach: function (context, settings) {
      const srcViewer = 'src=https://docs.google.com/viewer?url=';

      $('a#file-showmodal').once().on('click', function(e){
        e.preventDefault();
        let titleViewer = $(this).parent().siblings('td:first').text();
        let urlHostName = window.location.origin;
        let urlViewer = srcViewer + urlHostName + $(this).attr('href') + '&embedded=true';

        $('body').css({'overflow' : 'hidden'});

        createModal(urlViewer, titleViewer);
      });

      function createModal(urlViewer, titleViewer){
        var fileModal = Drupal.dialog('<iframe class="content__overlay"' + urlViewer + ' frameborder="0"></iframe>', {
          title: titleViewer,
          dialogClass: 'overlay',
          width: '80%',
          height: '80%',
          top: 0,
          left: 0,
          autoResize: true,
        });
        fileModal.showModal();

        $('.ui-dialog-titlebar-close').click(function(){
          $('body').css({'overflow' : ''});
        });

        $('.ui-widget-overlay').once().on('click', function(){
          $('.ui-dialog-titlebar-close').click();
        });
      }
    }

  };
} (jQuery, Drupal, drupalSettings));
