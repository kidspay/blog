// List Transactions
const getInfo3 = async function () {
  try {
    let res = await window.fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=JJrvADuDdy01DGAPUs9j9IpjGa5Dj5C3')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog
      let popular_number = data.results.length
      document.getElementById('popular-number').innerHTML = '<strong class="number" data-number="'+popular_number+'">'+popular_number+'</strong>';

      // Afficher toutes les valeurs depuis 4
    for (let i = data.results.length - data.results.length; i < 1; i++) {
      //Définir les valeurs
      let title = data.results[i].title
      let abstract = data.results[i].abstract
      let url = data.results[i].url

      $('div#popular-posts.col-md-6.order-md-last.col-lg-6.ftco-animate').append('<div class="blog-entry"> <div class="img img-big d-flex align-items-end" style="background-image: url(https://source.unsplash.com/random/800x1000/?background);"> <div class="overlay"></div> <div class="text"> <span class="subheading">'+abstract+'</span> <h3><a href="'+url+'" target="_blank">'+title.substr(0, 50)+'</a></h3> <p class="mb-0"><a href="'+url+'" target="_blank" class="btn-custom">Read More <span class="icon-arrow_forward ml-4"></span></a></p> </div> </div> </div>');
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
  getInfo3();
