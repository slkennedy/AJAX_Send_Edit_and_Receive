$("form").submit(function(event) {
    var dataArray = $(this).serializeArray();
    event.preventDefault();

    $.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers", {
        type: "POST",
        dataType: "json",
        data: dataArray
    }).done (function(refresh){
		location.reload();
	});
});

function reusableTemplate(templateId, container, model) {
    var templateFunction = _.template($('#' + templateId).text());
    var renderedTemplate = templateFunction(model);
    $(container).append(renderedTemplate);
}

$('.viewbutton').on('click', function() {
	$.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers", {
	    type: "GET",
	    datatype: "json"
	}).done(function(data) {

		_.each(data, function(vol){
	    var tableData = {
	        firstName: vol.firstname,
	        lastName: vol.lastname,
	        phone: vol.phone,
	        email: vol.email,
	        job: vol.job,
	        vol_ID: vol._id
	    };
	    console.log(tableData);
	  reusableTemplate('tableInfo', '.tablevolunteer', tableData);
	  })
	});
});

$(document).on('click', '.delete', function(another) {
    event.preventDefault();
    var idname = $(this).attr("id").slice(2);
    $.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers/"+idname, {
        type: "DELETE"
    }).done(function(success){
     $('tr').remove('.rows');
 	 alert("Deletion Completed");
	}); 
});

// $(document).on('click', '.update', function(updating){
// 	event.preventDefault();
// 	var update = $(this).attr("id").slice(2);
// $.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers/"+update, {
//       type='GET',
//       dataType='json'
//     }).done(function(update){

//     	var tableData = {
// 	        firstName: vol.firstname,
// 	        lastName: vol.lastname,
// 	        phone: vol.phone,
// 	        email: vol.email,
// 	        job: vol.job,
// 	        vol_ID: vol._id
// 	    };
	    
//       $('#updatefirst').val('vol.firstname')
// 	  $('#updatelast').val('vol.lastname')
// 	  $('#updatephone').val('vol.phone')
// 	  $('#updateemail').val('vol.email')
// 	  $('#updatejob').val('vol.job')
//     })

//  $("form").submit(function(update){
// 	var updateData = $(this).serializeArray();
//     event.preventDefault();
//    $.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers/"+update, {
//         type: "PUT",
//         dataType: "json",
//         data: updateData
//     }).done (function(refresh){
// 		alert("Update Complete");
// 	});
// });
//  })

//   });

// });
