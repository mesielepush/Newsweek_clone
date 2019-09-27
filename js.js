$(function () {
    $(document).scroll(function () {
      var $nav = $(".redbar1");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });