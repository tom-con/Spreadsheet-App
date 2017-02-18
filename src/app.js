$(() => {

  // Makes the table skeleton and gives IDs to the thead and tbody.
  $('body').append($('<table id="main"><thead id="head"></thead><tbody id="tbody"></tbody><tfoot></tfoot>'));

  // Adds the first row which will have alternative formatting than the others.
  $('tbody').append(`<tr id="row0" class="table-title"></tr>`);

  // Adds letters to first row idscluding column 0.
  for (let k = 0; k < 27; k++) {
    $(`#row0`).append(`<td id="col${k}" class="table-title box"></td>`);
    if (k > 0) {
      $(`#col${k}`).text(String.fromCharCode(64 + k));
    }
  }

  // Adds 39 more table rows and fills those rows with 27 columns, including a
  // table title column, which will hold row numbers,
  for (let i = 1; i < 40; i++) {
    $('tbody').append(`<tr id="row${i}"></tr>`);
    $(`#row${i}`).append(`<td id="col0" class="table-title box">${i}</td>`);
    for (let j = 1; j < 27; j++) {
      $(`#row${i}`).append(`<td id="col${j}" class="box"></td>`);
    }
  }

  // Selects the tile at position A1 [1,1] with a blue border.
  $('#col1:nth-child(2)').not('.table-title').first().addClass("selected");

  // Creates a function to dynamically select a new tile, but does not
  // allow selection of tiles with the class of 'table-title' on row0 or col0.
  $('.box').not('.table-title').click(() => {
    if ($(event.target).hasClass("box")) {
      $('.box').not('.table-title').removeClass('selected');
      $(event.target).toggleClass('selected');
    }
  });

  //
  $(document).keydown(() => {
    if (event.which >= 37 || event.which <= 40) {
      let prevBox = $('.selected');
      let thisRow = $(prevBox).parent();
      let thisCol = $(prevBox).index();
      console.log(thisCol);

      switch (event.which) {
        case 37: {
          let nextBox = $(prevBox).prev();

          if ($(nextBox)[0] !== $(thisRow).children().first()[0]) {
            $(prevBox).toggleClass('selected');
            $(nextBox).toggleClass('selected');
          }
          break;
        }
        case 38: {
          let nextRow = $(thisRow).prev();
          let nextBox = $(nextRow).children().eq(thisCol);

          if ($(nextBox)[0] !== $('#row0').children().eq(thisCol)[0]) {
            $(prevBox).toggleClass('selected');
            $(nextBox).toggleClass('selected');
          }
          break;
        }
        case 39: {
          let nextBox = $(prevBox).next();

          if ($(prevBox)[0] !== $(thisRow).children().last()[0]) {
            $(prevBox).toggleClass('selected');
            $(nextBox).toggleClass('selected');
          }
          break;
        }
        case 40: {
          let nextRow = $(thisRow).next();
          let nextBox = $(nextRow).children().eq(thisCol);
          console.log($('tbody').children().last().children().eq(thisCol)[0]);
          console.log($(nextBox)[0]);

          if ($(prevBox)[0] !== $('tbody').children().last().children().eq(thisCol)[0]){
            $(prevBox).toggleClass('selected');
            $(nextBox).toggleClass('selected');
          }
          break;
        }
      }
    }
  });
});
