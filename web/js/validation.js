jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#llenar-campos" ).validate({
	rules: {
		firstname: {
			required: true,
			firstname: true
		},
		lastname:{
			required:true,
			lastname:true
		},
		email:{
			required:true,
			email:true
		},
		city:{
			required:true,
			city:true
		}

	},
	messages:{
	    firstname:{
	    	required:'Porfavor ingrese su nombre'
	    },
	    lastname:{
	    	required:'Porfavor ingrese su apellido'
	    },
	    email:{
	    	required: 'Ingrese un correo',
	    	email:'Ingrese un correo valido'
	    },
	    city:{
	    	required: 'Ingrese una ciudad'
	    }
	}
  
});