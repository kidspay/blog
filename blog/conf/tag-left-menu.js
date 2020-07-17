// List Transactions
const getInfo11 = async function () {
  try {
    let res = await window.fetch('../posts/tag.json')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog

      // Afficher toutes les valeurs depuis 100
    for (let i = data.tag.length - data.tag.length; i < 8; i++) {
      // Définir les valeurs
      let title = data.tag[i].title

      $('div#tag-posts-blog').append('<a href="#" class="tag-cloud-link">'+ title +'</a>');
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
  getInfo11();
