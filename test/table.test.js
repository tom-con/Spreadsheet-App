describe("createTable", function () {

  it("creates a table with a thead", function () {
    let table = createTable()
    console.log(table);
    expect(table.querySelectorAll('thead').length).to.eq(1)
  })

})
