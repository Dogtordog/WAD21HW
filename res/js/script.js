/*$.ajax({
    url: 'https://api.jsonbin.io/b/61846433dfffdf47a4906333',
    type: 'GET',
    dataType: 'json',
    success: function(posts) {
      console.log("great success!!")
      
        //should do something with json here assuming it works
    
    }
  });
  
  */
/*
  $(function() {
    $.get('https://api.jsonbin.io/b/6188175d820eda3cc81947aa/1', function(json_obj) {
      console.log(json_obj)
    for (obj of json_obj) {

      //console.log(obj)
        
      let post =  document.createElement("div");
      post.classList.add("singlebox");

      let posttop =  document.createElement("div");
      posttop.classList.add("posttop");
      console.log(posttop.classList)
            
      let aeg = document.createElement("label");
      aeg.innerText = obj.time;
      let author = document.createElement("label");
      author.innerText = obj.author;

      posttop.appendChild(aeg);
      posttop.appendChild(author);
      post.appendChild(posttop);
      
      let picture = obj.image;
      let postituseSisu =  document.createElement("div");
      postituseSisu.classList.add("postituseSisu");
      /*
      <div class = "postituseSisu">
            <img src="res/images/pilt2.JPG"  class = "postitusePilt"/>
            <label>man's not hot</label>
            <img src="res/images/like.JPG"  class = "like"/>
          </div>*/

/*


      if (picture!=null){
        let pilt = document.createElement("img");
        pilt.src = picture;
        pilt.classList.add("postitusePilt");
        pilt.src
        postituseSisu.appendChild(pilt);
      }

      let sisu = document.createElement("label");
      sisu.innerText = obj.caption;
      postituseSisu.appendChild(sisu);

      let like = document.createElement("img");
      like.src = "res/images/like.JPG";
      like.classList.add("like");
      postituseSisu.appendChild(like);

      post.appendChild(postituseSisu)

      $("#posts_field").append(post)
    }
  })
});
<<<<<<< HEAD
*/
$(function() {
  $.get("res/js/posts.json",  function(json_obj) {
      $.each(json_obj, function(key, value) {

        let posts =document.getElementById("posts_field");
          
        let post =  document.createElement("div");
        post.classList.add("singlebox");

        let posttop =  document.createElement("div");
        posttop.classList.add("posttop");
        console.log(posttop.classList)
              
        let aeg = document.createElement("label");
        aeg.innerText = this.time;
        let author = document.createElement("label");
        author.innerText = this.author;

        posttop.appendChild(aeg);
        posttop.appendChild(author);
        post.appendChild(posttop);
        
        let picture = this.image;
        let postituseSisu =  document.createElement("div");
        postituseSisu.classList.add("postituseSisu");
        /*
        <div class = "postituseSisu">
              <img src="res/images/pilt2.JPG"  class = "postitusePilt"/>
              <label>man's not hot</label>
              <img src="res/images/like.JPG"  class = "like"/>
            </div>
        */



        if (picture!=null){
          let pilt = document.createElement("img");
          pilt.src = picture;
          pilt.classList.add("postitusePilt");
          pilt.src
          postituseSisu.appendChild(pilt);
        }

        let sisu = document.createElement("label");
        sisu.innerText = this.caption;
        postituseSisu.appendChild(sisu);

        let like = document.createElement("img");
        like.src = "res/images/like.JPG";
        like.classList.add("like");
        postituseSisu.appendChild(like);

        post.appendChild(postituseSisu)

        posts.appendChild(post)
    });
  })
});

//dropdown code from here https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

