// placeholder script to avoid 404s and provide a small enhancement
console.log('SCP-RP site assets loaded');
// simple interaction for buttons
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click', function(){
      alert('Merci — votre demande a été envoyée au Département Scientifique (factice).');
    });
  });
});