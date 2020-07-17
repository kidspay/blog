// List Transactions
const getInfo5 = async function () {
  try {
    let res = await window.fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=JJrvADuDdy01DGAPUs9j9IpjGa5Dj5C3')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog

      // Afficher toutes les valeurs depuis 4
    for (let i = data.results.length - data.results.length; i < 2; i++) {
      //Définir les valeurs
      let title = data.results[i + 1].title
      let abstract = data.results[i + 1].abstract
      let url = data.results[i + 1].url
      let number = i + 1

      $('div#actu-popular-posts.row').append('<div class="col-md-6 col-lg-6 ftco-animate fadeInUp ftco-animated"> <div class="blog-entry"> <div class="img img-big img-big-2 d-flex align-items-end" style="background-image: url(https://source.unsplash.com/random/800x600/?background'+ number +');"> <div class="overlay"></div> <div class="text"> <span class="subheading">'+ abstract.substr(0,30) +'...</span> <h3><a href="'+ url +'" target="_blank">'+ title.substr(0, 25) +'...</a></h3> <p class="mb-0"><a href="'+ url +'" target="_blank" class="btn-custom">Read More <span class="icon-arrow_forward ml-4"></span></a></p> </div> </div> </div> </div>');
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
  getInfo5();
