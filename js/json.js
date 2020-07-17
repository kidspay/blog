// List Transactions
const getInfo = async function () {
  try {
    let res = await window.fetch('posts/blog.json')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog
      let posts = data.blog.length;
      document.getElementById('posts').innerHTML = '<strong class="number" data-number="'+posts+'">'+posts+'</strong>';

      // Afficher toutes les valeurs depuis 100
    for (let i = data.blog.length - data.blog.length; i < 3; i++) {
      // Définir les valeurs
      let id = data.blog[i].id
      let img = data.blog[i].img
      let title = data.blog[i].title
      let date = data.blog[i].date
      let category = data.blog[i].category
      let url = data.blog[i].url

      //Afficher les articles
      $('div#blog-posts.row').append('<div class="col-md-4 ftco-animate fadeInUp ftco-animated"> <div class="blog-entry"> <a href="'+ url +'#'+ id +'" class="img-2"><img src="'+ img +'" class="img-fluid"></a> <div class="text pt-3"> <p class="meta d-flex"><span class="pr-3">'+category+'</span><span class="ml-auto pl-3">'+date+'</span></p> <h3><a href="'+ url +'#'+ id +'">'+title.substr(0,30)+'...</a></h3> <p class="mb-0"><a href="'+ url +'#'+ id +'" class="btn btn-black py-2">Lire plus <span class="icon-arrow_forward ml-4"></span></a></p> </div> </div> </div>');
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
  getInfo();
