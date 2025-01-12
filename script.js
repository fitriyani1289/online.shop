document.getElementById('sales-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);

    if (product && quantity > 0 && price > 0) {
        // Menghitung total penjualan
        const total = quantity * price;

        // Membuat elemen tabel baru
        const table = document.getElementById('sales-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);

        const cellProduct = newRow.insertCell(0);
        const cellQuantity = newRow.insertCell(1);
        const cellPrice = newRow.insertCell(2);
        const cellTotal = newRow.insertCell(3);

        cellProduct.textContent = product;
        cellQuantity.textContent = quantity;
        cellPrice.textContent = price.toFixed(2);
        cellTotal.textContent = total.toFixed(2);

        // Mengosongkan form setelah penambahan data
        document.getElementById('product').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';
    } else {
        alert("Harap masukkan data yang valid!");
    }
});
