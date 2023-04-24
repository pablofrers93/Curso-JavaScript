async function showGitHubInfo(){
    let response = await fetch('http://api.github.com/users/pablofrers93/repos');
    let repos = await response.json();
    console.log(repos);
  }
  
  
  showGitHubInfo();