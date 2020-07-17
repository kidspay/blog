// List Transactions
const getInfo7 = async function () {
  try {
    let res = await window.fetch('posts/category.json')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog
      let category_number = data.category.length

      // Afficher toutes les valeurs depuis 100
    for (let i = data.category.length - data.category.length; i < 3; i++) {
      // Définir les valeurs
      let title = data.category[i].title

      $('ul#menu-category.category-image').append('<li> <a href="foods.html" class="img d-flex align-items-center justify-content-center text-center" style="background-image: url(https://source.unsplash.com/random/800x663/?nature,background);"> <div class="text"> <h3>'+title+'</h3> </div> </a> </li> <li>');
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
  getInfo7();
