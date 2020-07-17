// List Transactions
const getInfo = async function () {
  try {
    let res = await window.fetch('../posts/blog.json')
    if (res.ok) { // Si ok, exécuter la fonction
      let data = await res.json(); // Attendre puis mettre la valeure en JSON
      // Afficher dans la console les données JSON
      // Afficher le d'articles blog
      let posts = data.blog.length;
      let nullx = 0
      var x = location.hash.substr(1, 1000);
      // Afficher toutes la valeur max
    for (let i = x; i < x + 1; i++) {
      // Définir les valeurs
      let img = data.blog[x].img
      let title = data.blog[x].title
      let date = data.blog[x].date
      let category = data.blog[x].category
      let url = data.blog[x].url
      let resume = data.blog[x].body[nullx].resume
      let subtitle = data.blog[x].body[nullx].title
      let text_1 = data.blog[x].body[nullx].text_1
      let img_1 = data.blog[x].body[nullx].img_1
      let text_2 = data.blog[x].body[nullx].text_2
      let title_2 = data.blog[x].body[nullx].subtitle
      let text_3 = data.blog[x].body[nullx].text_3
      let img_2 = data.blog[x].body[nullx].img_2
      let text_4 = data.blog[x].body[nullx].text_4
      let text_5 = data.blog[x].body[nullx].text_5
      let text_6 = data.blog[x].body[nullx].text_6
      let text_7 = data.blog[x].body[nullx].text_7
      let author = data.blog[x].author
      let about_athor = data.blog[x].about_athor
      let img_author = data.blog[x].img_author
      let tag = data.blog[x].tag

      //Afficher les articles
      document.getElementById('resume-blog').innerHTML = '<p>'+ resume+'</p>';
      document.getElementById('posts-title-blog').innerHTML = '<h1 class="mb-3 bread">'+ title +'...</h1>';
      document.getElementById('subtitle-posts-blog').innerHTML = '<h2 class="mb-3">'+ subtitle +'</h2>';
      document.getElementById('text_1').innerHTML = '<p>'+ text_1 +'</p>';
      document.getElementById('img_1').innerHTML = '<img src="'+ img_1 +'" alt="" class="img-fluid">';
      document.getElementById('text_2').innerHTML = '<p>'+ text_2 +'</p>';
      document.getElementById('title_2').innerHTML = '<h2 class="mb-3 mt-5">#2. '+ title_2 +'</h2>';
      document.getElementById('text_3').innerHTML = '<p>'+ text_3 +'</p>';
      document.getElementById('img_2').innerHTML = '<img src="'+ img_2 +'" alt="" class="img-fluid">';
      document.getElementById('text_4').innerHTML = '<p>'+ text_4 +'</p>';
      document.getElementById('text_5').innerHTML = '<p>'+ text_5 +'</p>';
      document.getElementById('text_6').innerHTML = '<p>'+ text_6 +'</p>';
      document.getElementById('text_7').innerHTML = '<p>'+ text_7 +'</p>';
      document.getElementById('name_author').innerHTML = '<h3>'+ author +'</h3>';
      document.getElementById('about_athor').innerHTML = '<p>'+ about_athor +'</p>';
      document.getElementById('img_author').innerHTML = '<img src="'+ img_author +'" style="width: 200px; height: auto; border-radius: 50px;" alt="Image placeholder" class="img-fluid">';
      document.getElementById('tag-bottom-blog').innerHTML = '<a href="#" class="tag-cloud-link">'+ tag +'</a>';

      if(data.blog[x].status == "0") {
          location.replace("en-cours")
      }
      if(data.blog[x].status == "2") {
          location.replace("maintenance")
      }
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
