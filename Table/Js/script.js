const dataTable = document.getElementById('dataTable');
const tableBody = document.getElementById('tableBody');
const rowsPerPage = document.getElementById('rowsPerPage');

const data = Array.from({length: 100}, (_, i) => ({
    id: i +1,
    name: 'Name ${i +1}' ,
    age: Math.floor(Math.random()* 50) + 20,
    city: 'City ${i +1}' ,
}));

function renderTable(rows) {
    tableBody.innerHTML = '';
    const displayedData = data.slice(0, rows);
    displayedData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.city}</td>
    `;
        tableBody.appendChild(row);
    });
}


rowsPerPage.addEventListener('change', () =>{
    renderTable(Number(rowsPerPage.value));
});

renderTable(Number(rowsPerPage.value));