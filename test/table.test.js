let table = createTable();
describe("createTable", function() {
  it("creates a table with a thead", function() {

    expect(table.querySelectorAll('thead').length).to.eq(1);
  });

  it("th at [1] has letter A", function() {
    expect(table.querySelectorAll('th')[1].innerText).to.eq('A');
  })

  it("last th has letter Z", function() {
    expect(table.querySelectorAll('th')[table.querySelectorAll('th').length-1].innerText).to.eq('Z');
  })
  it("there are 27 th items (26 letters, 1 blank)", function() {
    expect(table.querySelectorAll('th').length).to.eq(27);
  })
});
