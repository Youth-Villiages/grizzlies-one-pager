var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('service_efxho28', 'template_n54josd', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });