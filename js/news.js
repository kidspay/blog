// List Transactions
const getInfo2 = async function () {
  try {
    let res = await window.fetch('https://api.nytimes.com/svc/news/v3/content/all/technology.json?api-key=JJrvADuDdy01DGAPUs9j9IpjGa5Dj5C3')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog
      let actu = data.results.length
      document.getElementById('actu-number').innerHTML = '<strong class="number" data-number="'+actu+'">'+actu+'</strong>';
      // Afficher toutes les valeurs depuis 4
    for (let i = data.results.length - data.results.length; i < 4; i++) {
      // Définir les valeurs
      let title = data.results[i].title
      let date = data.results[i].published_date
      let img = "https://source.unsplash.com/random/800x1200"
      let category = data.results[i].slug_name
      let url = data.results[i].url
      let number = i

      //Afficher les articles
      $('div#news-posts.row').append('<div class="col-md-6 ftco-animate fadeInUp ftco-animated"> <div class="blog-entry"> <a href="'+ url +'" class="img d-flex align-items-end" style="background-image: url('+ img +'/?'+ category.substr(2) +');"> <div class="overlay"></div> </a> <div class="text pt-3"> <p class="meta d-flex"><span class="pr-3">'+ category.substr(2) +'</span><span class="ml-auto pl-3">'+ date.substr(0, 10) +'</span></p> <h3><a href="'+ url +'">'+ title.substr(0, 50) +'...</a></h3> <p class="mb-0"><a href="'+ url +'" target="_blank" class="btn-custom">Read More <span class="icon-arrow_forward ml-4"></span></a></p> </div> </div> </div>');
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
  getInfo2();
