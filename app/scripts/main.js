$("form").submit(function(event) {
    var dataArray = $(this).serializeArray();
    event.preventDefault();

    $.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers", {
        type: "POST",
        dataType: "json",
        data: dataArray
    });
});

function reusableTemplate(templateId, container, model) {
    var templateFunction = _.template($('#' + templateId).text());
        console.log(model);
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
	  reusableTemplate('tableInfo', '.tablevolunteer', tableData);
	  })
	});
});

$(".delete").on('click', function(event) {
    event.preventDefault();
    var idname = $(this).attr("id").slice(2);
    $.ajax("http://tiny-pizza-server.herokuapp.com/collections/volunteers"+idname, {
        type: "DELETE",
    });
});
