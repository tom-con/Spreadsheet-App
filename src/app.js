$(() => {
  $('body').append($('<table id="main"><thead id="head"></thead><tbody id="tbody"></tbody><tfoot></tfoot>'));
  $('tbody').append(`<tr id="row0"></tr>`);
  for (let k = 0; k < 27; k++) {
    $(`#row0`).append(`<td id="col${k}" class="table-title box"></td>`);
    if (k > 0) {
      $(`#col${k}`).text(String.fromCharCode(64 + k));
    }
  }
  for (let i = 1; i < 40; i++) {
    $('tbody').append(`<tr id="row${i}"></tr>`);
    $(`#row${i}`).append(`<td id="col0" class="table-title box"></td>`);
    for (let j = 1; j <= 27; j++) {
      $(`#row${i}`).append(`<td id="col${j}"><input type="text"></td>`);
    }
  }
  $('td').addClass("box");
  $('#col0').addClass("table-title");
  $('#row0').addClass("table-title");
});
