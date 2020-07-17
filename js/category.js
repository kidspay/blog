// List Transactions
const getInfo4 = async function () {
  try {
    let res = await window.fetch('posts/category.json')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog
      let category_number = data.category.length
      document.getElementById('category-number').innerHTML = '<strong class="number" data-number="'+ category_number +'">'+ category_number +'</strong>';

      // Afficher toutes les valeurs depuis 100
    for (let i = data.category.length - data.category.length; i < 5; i++) {
      // Définir les valeurs
      let title = data.category[i].title

      $('ul#category.list-unstyled').append('<li><a href="#" class="py-2 d-block">'+title+'</a></li>');
    }
  }
    else { // Sinon afficher une erreur et son status
      console.error('Error : ', res.status);
    }
  }  catch (e) { // Si érreur
      // Afficher dans la console pourquoi
     // Afficher un message d'érreur pour l'utilisateur
}
}
  getInfo4();
