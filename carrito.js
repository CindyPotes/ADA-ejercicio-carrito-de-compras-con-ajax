let precio = 0
$(document).on('click','.agregar',function(){
	let precioArticulo = parseInt(($(this).siblings('p').html()))
	let nombre = ($(this).siblings('h1').html())
	let enElCarrito = '<li>' + nombre + ' ' + precioArticulo + '</li>'
	let lista = $('.lista')
	lista.append(enElCarrito)
	precio = precio + precioArticulo
	$('.total').html(precio)
})


$.ajax({
	method: 'GET',
	url: 'https://ada-api-ktigavyflf.now.sh/api/products',
}).done(function(data){
	console.log(data)
	for (var i = 0; i < data.length; i++) {
		let producto = data[i].title
		let price = data[i].price
		console.log(price)
		let img = data[i].img
		let todoElProducto = '<div class="pdto"> <img src="'+ img +'"><h1>' + producto + '</h1><p>' + price + '</p><button class="agregar">'+ 'agregar' +'</button></div>'
		$('#productos').append(todoElProducto)	
	}
})