$(document).ready(function(){
  var body = $('body');
  var table = $('<table id="main"><thead id="head"></thead><tbody id="tbody"></tbody><tfoot></tfoot>');
  body.append(table);

  for (var i = 0; i < 40; i++) {
    $('tbody').append(`<tr id="row${i}"></tr>`);
    for (var j = 0; j < 27; j++) {
      $(`#row${i}`).append(`<td id="col${j}"><input type="text"></td>`);
    }
  }
  $('td').addClass("box");
  $('#col0').addClass("table-title");
});
