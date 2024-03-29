function addToCart (product) {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

$(document).ready(function () {
  $('form').submit(function () {
      var productName = $('#product').val();
      var productPrice = $('#price').val();
      var url = $('#url').val();
      addToCart({
        name: productName,
        price: productPrice,
        url: url
      });
  });

  var cart = sessionStorage.getItem("cart");
  if (cart !== null) {
    cart = JSON.parse(cart);
    var total = 0;
    for (var i = 0; i < 999; i++) {
    	$("#teste").html("Itens: " + i)
    	// console.info("Item "+ i + " produto", cart[i].name, cart[i].price);
    	$("#result").append('<img src="'+ cart[i].url +'" height="100px" width="100px"><li id="'+ i +'">Produto: '+ cart[i].name + '</br>Preço :' + cart[i].price + '</li>'  + '<input class="btn btn-primary" onClick="onReset(' + i + ')" "id="reset' + i + '" type="reset" value="Excluir"></br></br>')
      total += parseFloat(cart[i].price)
      $("#total").html("R$ "+total.toLocaleString())
      console.info(cart)
    }
  }
})

// $('#reset').click(function () {
// 	var checkDiv = $(this).next()
// 	if (checkDiv.attr("id") === )
// 	cart.splice($.inArray(itemtoRemove, arr),1);
// });

function onReset(value) {
  var cart = sessionStorage.getItem("cart");
  cart = JSON.parse(cart);
  var removeItem = cart[value];
  var newcart = [];
  newcart = cart.splice($.inArray(removeItem, cart), 1);
  location.reload();
  return sessionStorage.setItem("cart", JSON.stringify(cart));
}


// function addProduct(target) {
//   // this is just a product placeholder
//   var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="assets/img/product-preview.png" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Product Name</a></h3><span class="cd-cart__price">$25.99</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
//   cartList.insertAdjacentHTML('beforeend', productAdded);
// };