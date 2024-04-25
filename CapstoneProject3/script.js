document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); 
    const button = document.querySelector('input[type="submit"]');
    const recipeContainer = document.getElementById('recipeContainer'); 
    
    button.addEventListener('click', function(event) {
        // event.preventDefault(); 
        
        const selectedIceCreams = Array.from(document.querySelectorAll('input[name="ice"]:checked')).map(input => input.id);
        const selectedRootBeer = document.querySelector('input[name="root"]:checked');
        
        if (selectedIceCreams.length === 0 || !selectedRootBeer) {
            alert("You must select at least one ice cream flavor, and you must select one root beer brand.");
            return; 
        }

        const recipe = `Recipe:<br>In a glass mug, add one scoop each of these ice creams - ${selectedIceCreams.join(', ')}. Fill up the mug with ${selectedRootBeer.id} root beer. Enjoy!`;
        
        recipeContainer.innerHTML = '';
        
        recipeContainer.innerHTML = recipe;
        
        recipeContainer.style.backgroundColor = '#814d30';
        recipeContainer.style.border = '2px solid #814d30'; 
        recipeContainer.style.boxShadow = '0 0 0 2px white inset'; 
        
        document.querySelectorAll('input[name="ice"]:checked').forEach(input => input.checked = false);
        document.querySelectorAll('input[name="root"]:checked').forEach(input => input.checked = false);
    });
});

