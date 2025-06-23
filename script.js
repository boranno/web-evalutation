function addStudent() {
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const marks = document.getElementById("marks").value;

    if (name && id && marks) {
        const table = document.getElementById("studentTable");
        const row = table.insertRow();
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = id;
        row.insertCell(2).innerText = marks;

        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("marks").value = "";
    } else {
        alert("Please fill all fields");
    }
}

function searchAndModify() {
    const modId = document.getElementById("modId").value;
    const table = document.getElementById("studentTable");
    let found = false;

    for (let i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[1].innerText === modId) {
            const newMarks = prompt("Enter new marks for ID " + modId + ":");
            if (newMarks !== null && newMarks.trim() !== "") {
                table.rows[i].cells[2].innerText = newMarks;
            } else {
                alert("No marks entered.");
            }
            found = true;
            break;
        }
    }

    if (!found) {
        alert("ID not found.");
    }

    document.getElementById("modId").value = "";
}