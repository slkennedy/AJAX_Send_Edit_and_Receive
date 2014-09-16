
$( "form" ).submit(function( event ) {
	alert("suckit");
   console.log( $( this ).serializeArray() );
   event.preventDefault();
});

// 	$.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers", 
// 	{
// 		type: POST, 
// 		dataType:'json',
// 		data: [{data}]
// });

// };