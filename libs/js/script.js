	// Script for 1st API
	$('#btn1').click(function() {

		$.ajax({
			url: "libs/php/getPostalCode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				postalCode: $('#inpPostalCode').val(),
				country: "us",
				maxRows: "1"
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#rsp1').html('Name: '+result['data'][0]['placeName']);
					$('#rsp2').html('City: '+result['data'][0]['adminName2']);
					$('#rsp3').html('State: '+result['data'][0]['adminName1']);
					$('#rsp4').html('Country: '+result['data'][0]['countryCode']);
					$('#rsp5').html('Postal Code: '+result['data'][0]['postalCode']);
					$('#rsp6').html('Langtitude: '+result['data'][0]['lng']);
					$('#rsp7').html('Latitude: '+result['data'][0]['lat']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				let errorMessage = 'status code: ' + jqXHR.status + '<br>errorThrown: ' + errorThrown + '<br>responseText: ' + jqXHR.responseText ;
				console.log(errorMessage);
			}
		}); 
	

	});

	// Script for 2nd API
	$('#btn2').click(function() {

		$.ajax({
			url: "libs/php/getCountryNeighbours.php",
			type: 'POST',
			dataType: 'json',
			data: {
				countryCode: $('#inpCountry').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#rsp1').html('Neighbouring Country Name: '+result['data'][0]['countryName']);
					$('#rsp2').html('Neighbouring Country Name: '+result['data'][1]['countryName']);
					$('#rsp3').html('Neighbouring Country Name: '+result['data'][2]['countryName']);
					$('#rsp4').html('Neighbouring Country Name: '+result['data'][3]['countryName']);
					$('#rsp5').html('Neighbouring Country Name: '+result['data'][4]['countryName']);
					$('#rsp6').html('');
					$('#rsp7').html('');
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				let errorMessage = 'status code: ' + jqXHR.status + '<br>errorThrown: ' + errorThrown + '<br>responseText: ' + jqXHR.responseText ;
				console.log(errorMessage);
			}
		}); 
	
	});

	// Script for 3rd API
	$('#btn3').click(function() {

		$.ajax({
			url: "libs/php/getHierarchy.php",
			type: 'POST',
			dataType: 'json',
			data: {
				areaCode: $('#inpAreaCode').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#rsp1').html('Planet: '+result['data'][0]['name']);
					$('#rsp2').html('Continent: '+result['data'][1]['name']);
					$('#rsp3').html('Country: '+result['data'][2]['name']);
					$('#rsp4').html('State/Region: '+result['data'][3]['name']);
					$('#rsp5').html('District: '+result['data'][4]['name']);
					$('#rsp6').html('');
					$('#rsp7').html('');
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				let errorMessage = 'status code: ' + jqXHR.status + '<br>errorThrown: ' + errorThrown + '<br>responseText: ' + jqXHR.responseText ;
				console.log(errorMessage);
			}
		}); 
	
	});