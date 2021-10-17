let ElToggle = document.querySelector('.toggle-bar');
let ElSidebar = document.querySelector('.shortcut-link');
const btnDark = document.querySelector('.btn-dark');
let Elaccount = document.querySelector('.account');
let myAccount = document.querySelector('.my__account');
let youtube = document.querySelector('.youtube-body');

ElToggle.onclick = function() {
  ElSidebar.classList.toggle('small-sidebar');
  ElSidebar.classList.toggle('col-xs-1');
  youtube.classList.toggle('col-xs-11');
}

btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if(document.body.className === 'dark-theme'){
      btnDark.innerHTML = `
          <i class="fa fa-sun"></i>
      `
      document.querySelector('.fa-sun').style.color = "#fff";
  }else{
      btnDark.innerHTML = `
          <i class="fa fa-moon"></i>
      `
  }
})

Elaccount.onclick = function() {
  myAccount.classList.toggle('myAccount');
}