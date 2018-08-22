function loadRepo(url, callback) {
  const githubRequest = new XMLHttpRequest();

  githubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
    
  };
  githubRequest.open("GET", url, true);
  githubRequest.send();
}

function loadRepoCallback(githubRequest) {
  var htmlUpdate = "";
  let githubRepo = JSON.parse(githubRequest.responseText);
  githubRepo.forEach(function(inRepo) {
    htmlUpdate =
      htmlUpdate +
      "<li> " +
      '<a href="' +
      inRepo.html_url +
      '" target="_blank">' +
      inRepo.name +
      "</a></li> ";
  });
  document.getElementById("repoList").innerHTML = htmlUpdate;
}

$(document).ready(function(){
  $(".socialicon").hover(function(){
      $(this).css("width", "50px");
      }, function(){
      $(this).css("width", "40px");
  });
});
