let rowData = [];

function generateTable() {
  const rowCountInput = document.getElementById("rowCount");
  const rowCount = parseInt(rowCountInput.value, 10) || 1;

  const tableBody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  rowData = [];

  for (let i = 0; i < rowCount; i++) {
    const row = tableBody.insertRow();
    const rowValues = [];

    // Time Column
    const timeCell = row.insertCell(0);
    const timeInput = document.createElement("input");
    timeInput.type = "text";
    timeInput.placeholder = "Set Time";
    timeCell.appendChild(timeInput);

    timeInput.addEventListener("input", function () {
      rowValues[0] = timeInput.value;
    });

    // Days Columns
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (let j = 1; j <= 7; j++) {
      const cell = row.insertCell(j);
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Set Work";
      cell.appendChild(input);

      input.addEventListener("input", function () {
        rowValues[j] = input.value;
      });
    }

    rowData.push(rowValues);
  }
}

function downloadTableImage() {
  const table = document.getElementById("dataTable");

  html2canvas(table).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "table_image.jpg";
    link.click();
  });
}
