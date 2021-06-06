function saveBlog() {
    sessionStorage.setItem("blogTitle", document.getElementById("title").value);
    console.log(sessionStorage.getItem("blogTitle"));
    sessionStorage.setItem("blogArticle", document.getElementById("article").value);
    console.log(sessionStorage.getItem("blogArticle"));

    const container = document.getElementById("rowData");
    // Construct card content


    const content = `<div class="col-4">
  <div class="card" style="width: 18rem;">
      <img src="${sessionStorage.getItem("blogImg")}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${sessionStorage.getItem("blogTitle")}</h5>
        <p class="card-text">${sessionStorage.getItem("blogArticle")}</p>
        <p><i class="fa fa-heart"></i> <i class="fa fa-thumbs-up"></i></p>
      </div>
    </div>
</div>`;

    // Append newyly created card element to the container
    container.innerHTML += content;

}

function setImage(btnOption) {
    if (btnOption == 'btn1') {
        sessionStorage.setItem("blogImg", "./images/blogImg1.jpg");
        console.log(sessionStorage.getItem("blogImg"));
    }
    else if (btnOption == 'btn2') {
        sessionStorage.setItem("blogImg", "./images/blogImg2.jpg");
        console.log(sessionStorage.getItem("blogImg"));
    }
    else if (btnOption == 'btn3') {
        sessionStorage.setItem("blogImg", "./images/blogImg3.jpg");
        console.log(sessionStorage.getItem("blogImg"));
    }

}