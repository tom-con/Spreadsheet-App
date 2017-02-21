describe("createTable", function() {

  it("creates a table with a thead", function() {
    let table = createTable();
    expect(table.querySelectorAll('thead').length).to.eq(1);
  });
  it("th at [1] has letter A", function() {
    let table = createTable();
    expect(table.querySelectorAll('th')[1].innerText).to.eq('A');
  })
  it("last th has letter Z", function() {
    let table = createTable();
    expect(table.querySelectorAll('th')[table.querySelectorAll('th').length - 1].innerText).to.eq('Z');
  })
  it("there are 27 th items (26 letters, 1 blank)", function() {
    let table = createTable();
    expect(table.querySelectorAll('th').length).to.eq(27);
  })
  it("the cell A1 is selected first", function() {
    let table = createTable();
    let row = table.getElementsByClassName('row1')[0];
    let col = table.getElementsByClassName('col1')[1];
    expect(table.querySelectorAll('.selected')[0].parentNode).to.eq(row);
    expect(table.querySelectorAll('.selected')[0]).to.eq(col);
  })

  // Tests functionality of selecting cells
  describe("selecting cells", function() {

    // In each test you need a clean version of the table
    // so you need to add a new container DIV before each test,
    // and then add the table to that container
    //
    // This line just declares those variables in a way that tests can access them
    let container, table
    beforeEach(function() {
      document.body.insertAdjacentHTML('afterbegin', `<div id="container">`);
      container = document.getElementById('container');
      table = createTable();
      container.appendChild(table);
    })

    afterEach(function() {
      document.body.removeChild(container);
    })

    it("allows users to select a cell by clicking on it(A3)", function() {

      // For the setup in this test, find any cell other than A1
      let tbody = table.querySelector('tbody')
      let rows = tbody.querySelectorAll('tr')
      let A3 = rows[2].children[1]

      // Simulate clicking on the cell
      A3.dispatchEvent(new Event('click', {
        bubbles: true
      }))

      // Check to make sure that the A3 cell has been selected
      expect(A3.classList.contains('selected')).to.eq(true)

      // Check to make sure that the A1 cell is no longer selected
      expect(rows[0].children[1].classList.contains('selected')).to.eq(false)
    })
    it("allows users to select a cell by clicking on it(T20)", function() {

      // For the setup in this test, find any cell other than A1
      let tbody = table.querySelector('tbody');
      let rows = tbody.querySelectorAll('tr');
      let T20 = rows[19].children[20];

      // Simulate clicking on the cell
      T20.dispatchEvent(new Event('click', {
        bubbles: true
      }));

      // Check to make sure that the T20 cell has been selected
      expect(T20.classList.contains('selected')).to.eq(true);

      // Check to make sure that the A1 cell is no longer selected
      expect(rows[0].children[1].classList.contains('selected')).to.eq(false);
    })
    it("does not allow users to select a column title cell by clicking on it(G)", function() {

      // For the setup in this test, find any cell other than A1
      let thead = table.querySelector('thead');
      let G0 = thead.children[0].children[7];

      // Simulate clicking on the cell
      G0.dispatchEvent(new Event('click', {
        bubbles: true
      }));

      // Check to make sure that the T20 cell has been selected
      expect(G0.classList.contains('selected')).to.eq(false);
    })
    it("does not allow users to select a row title cell by clicking on it(28)", function() {

      // For the setup in this test, find any cell other than A1
      let tbody = table.querySelector('tbody');
      let rows = tbody.children;
      let twentyEight = rows[27].children[0];

      // Simulate clicking on the cell
      twentyEight.dispatchEvent(new Event('click', {
        bubbles: true
      }));

      // Check to make sure that the T20 cell has been selected
      expect(twentyEight.classList.contains('selected')).to.eq(false);
    })
    it("does not allow users to select a cell outside of the grid (down-arrow-key on V40)", function() {
      let tbody = table.querySelector('tbody');
      let rows = tbody.querySelectorAll('tr');
      let V40 = rows[39].children[22];

      V40.dispatchEvent(new Event('click', {
        bubbles: true
      }));

      let event = new KeyboardEvent('keydown', {
        bubbles: true,
        key: 'ArrowDown'
      });
      document.dispatchEvent(event);

      expect(V40.classList.contains('selected')).to.eq(true);
    });
    it("does not allow users to select a cell outside of the grid (right-arrow-key on Z16)", function() {
      let tbody = table.querySelector('tbody');
      let rows = tbody.querySelectorAll('tr');
      let Z16 = rows[15].children[26];

      Z16.dispatchEvent(new Event('click', {
        bubbles: true
      }));

      let event = new KeyboardEvent('keydown', {
        bubbles: true,
        key: 'ArrowRight'
      });
      document.dispatchEvent(event);

      expect(Z16.classList.contains('selected')).to.eq(true);
    })
  })

});
