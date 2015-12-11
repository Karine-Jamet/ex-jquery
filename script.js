$(document).ready(function() {

  // création des divs de la couleur choisi

  $('#color-choose').on('submit', function(event) {
    event.preventDefault();

    var color = $("#color-choose option:selected").text();

    switch (color) { // Gestion des couleurs
      case "bleu":
        $(".panel").append('<div class="bleu toRed"></div>');
        break;
      case "noir":
        $(".panel").append('<div class="noir toRed"></div>');
        break;
      default:
        $(".panel").append('<div class="vert toRed"></div>');
    }
  });

  // Click sur une div coloré

  $(document).on("click", ".toRed", function(event) {
    var divClass = $(this).attr('class'); // Recupération des class

    if (divClass.match(/^red.*/)) { // Si l'element est rouge
      console.log('RED');
      $(this).remove();
    } else {
      $(this).replaceWith('<div class="red toRed"></div>');
    }
  });
});
