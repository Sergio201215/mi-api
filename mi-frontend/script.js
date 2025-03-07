const productosList = document.getElementById('productos-list');

fetch('http://localhost:3000/api/productos')
    .then(response => response.json())
    .then(productos => {
        productos.forEach(producto => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            productosList.appendChild(li);
        });
    });