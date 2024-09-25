function searchTable() {
  // Get the search input and convert to uppercase for case-insensitive comparison
  var input = document.getElementById("mySearch");
  var filter = input.value.toUpperCase();

  // Get all table containers (you may want to apply search only to the currently visible one)
  var activeTable = document.querySelector(".table-container.active table");
  var tr = activeTable.getElementsByTagName("tr");

  // Loop through all table rows (except the first row which is the header)
  for (var i = 1; i < tr.length; i++) {
    tr[i].style.display = "none"; // Initially hide the row
    var td = tr[i].getElementsByTagName("td");
    var found = false; // Reset found flag for each row

    // Loop through all table cells in the row
    for (var j = 0; j < td.length; j++) {
      if (td[j]) {
        var txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found = true; // If a match is found, set found to true
          break; // Stop checking the other cells if one match is found
        }
      }
    }

    // If found, display the row, otherwise hide it
    if (found) {
      tr[i].style.display = "";
    }
  }
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
