$(() => {
  $('body').append($('<table id="main"><thead id="head"></thead><tbody id="tbody"></tbody><tfoot></tfoot>'));
  $('tbody').append(`<tr id="row0"></tr>`);
  for (let k = 0; k < 27; k++) {
    $(`#row0`).append(`<td id="col${k}" class="table-title box"></td>`);
    if (k > 0) {
      $(`#col${k}`).text(String.fromCharCode(64 + k));
    }
  }
  for (let i = 1; i < 60; i++) {
    $('tbody').append(`<tr id="row${i}"></tr>`);
    $(`#row${i}`).append(`<td id="col0" class="table-title box">${i}</td>`);
    for (let j = 1; j < 27; j++) {
      $(`#row${i}`).append(`<td id="col${j}"></td>`);
    }
  }
  $('td').addClass("box");
  $('#col0').addClass("table-title");
  $('#row0').addClass("table-title");
  console.log($('#col1:nth-child(2)').not('.table-title').first().children());
  $('#col1:nth-child(2)').not('.table-title').first().addClass("selected");
  $('.box').not('.table-title').click(() => {
    $('.box').not('.table-title').removeClass('selected');
    console.log(event.target);
    $(event.target).addClass('selected');
  });
});
