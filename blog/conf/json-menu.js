// List Transactions
const getInfo9 = async function () {
  try {
    let res = await window.fetch('../posts/blog.json')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog
      let posts = data.blog.length;
      // Afficher toutes la valeur max
    for (let i = data.blog.length - data.blog.length; i < 3; i++) {
      // Définir les valeurs
      let img = data.blog[i].img
      let title = data.blog[i].title
      let date = data.blog[i].date
      let category = data.blog[i].category
      let url = data.blog[i].url
      let id = data.blog[i].id
      let author = data.blog[i].author

      //Afficher les articles
      $('div#blog-posts').append('<div class="block-21 mb-4 d-flex"> <a class="blog-img mr-4" style="background-image: url(../'+ img +');"></a> <div class="text"> <h3><a href="../'+ url +'#'+ id +'">'+ title.substr(0, 30) +'...</a></h3> <div class="meta"> <div><a href="'+ url +'#'+ id +'"><span class="icon-calendar"></span> '+ date +'</a></div> <div><a href="'+ url +'#'+ id +'"><span class="icon-person"></span> '+ author +'</a></div> <div></div> </div> </div> </div>');

    }
  }
    else { // Sinon afficher une erreur et son status
      console.error('Error : ', res.status);
    }
  }  catch (e) { // Si érreur
     console.log(e) // Afficher dans la console pourquoi
     // Afficher un message d'érreur pour l'utilisateur
}
}
  getInfo9();
