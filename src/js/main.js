let article_display_as_grid = true;

const categoryButton = document.querySelector('#category-name-button');
const categories = ['Тест-драйвы','Новости','Новинки', 'Обзоры']
const categoriesList = document.querySelector('.usefull-info-left__list');

function handlerProperty(e){
  let input = document.getElementById('category-name-text').value;
  categoriesList.innerHTML = '';
  const filterCategoriesList = categories.filter( (category) => category.includes(input));
  
  const contentString = filterCategoriesList.map((item,index) => 
  `<li class="usefull-info-left__item">${item}</li>`).join(''); 
  
  categoriesList.innerHTML = contentString;
}
if(categoryButton){
  categoryButton.addEventListener("click", handlerProperty);  
}
handlerProperty();


const icon__list_button = document.getElementById('icon__list-button');
const icon__grid_button = document.getElementById('icon__grid-button');

const article_ = document.querySelector('.article');


if(icon__list_button){
  icon__list_button.addEventListener('click', (e) => {
    article_display_as_grid = false;

    let article_contents = document.querySelectorAll('.article-content');
    let article__contents = document.querySelectorAll('.article__content');
    article_.classList.add('article--list');
    icon__list_button.classList.add('icon__button--active');
    icon__grid_button.classList.remove('icon__button--active');
  
    article_contents.forEach((article_contents) => {
      article_contents.classList.add('article-content--list');
    });
    
    article__contents.forEach((article__contents) => {
      article__contents.classList.add('article__content--list');
    });
  });
}
if(icon__grid_button){

  icon__grid_button.addEventListener('click',(e) => {
    article_display_as_grid = true;
    let article_contents = document.querySelectorAll('.article-content');
    let article__contents = document.querySelectorAll('.article__content');
    
    icon__list_button.classList.remove('icon__button--active');
    icon__grid_button.classList.add('icon__button--active');

    article_.classList.remove('article--list');
  
    article_contents.forEach((article_contents) => {
      article_contents.classList.remove('article-content--list');
    });
    
    article__contents.forEach((article__contents) => {
      article__contents.classList.remove('article__content--list');
    });
  });
}

const article_add__button = document.getElementById('article-add__button'); 
const article_add__button_cancel = document.getElementById('article-add__button-cancel');
const article_add__button_create = document.getElementById('article-add__button-create');
const form = document.querySelector('.form');
const faq_ = document.querySelector('.faq');

if(article_add__button){
  article_add__button.addEventListener('click', (e) => {
    if(form){
      article_add__button.style.display = 'none';
      form.style.display = 'flex';
    }
  });
}
if(article_add__button_create){
  form.addEventListener('submit',(e)=>{
    let input_name = document.getElementById('article-text-name').value ;
    let input_url = document.getElementById('article-text-url').value ;
    let input_text = document.getElementById('article-text-description').value ;
    
    let now = new Date();
    const articles = document.querySelector('.article');
    let contentString = "";
    let get_day = now.toLocaleString('en', {month:'long'}) + " " + now.getDate() + ", "+now.getFullYear();
    if(article_display_as_grid){
      contentString = 
    `<article class="article-content">
    <img class="article__img" src="${input_url}" alt="">
    <div class="article__content">
        <div class="article__wrapper">
            <h3 class="article__title">${input_name}</h3>
            <p class="article__text">${input_text}</p>    
        </div>
        <footer>
            <p class="article__date">${get_day} · 4 min read</p> 
        </footer>
    </div>
    </article>`
    }
    else{
      contentString = 
      `<article class="article-content article-content--list">
      <img class="article__img" src="${input_url}" alt="">
      <div class="article__content article__content--list">
          <div class="article__wrapper">
              <h3 class="article__title">${input_name}</h3>
              <p class="article__text">${input_text}</p>    
          </div>
          <footer>
              <p class="article__date">${get_day} · 4 min read</p> 
          </footer>
      </div>
      </article>`
    }

    console.log(contentString);
    articles.insertAdjacentHTML('beforeend', contentString);
    
    if(form){
      faq_.style.display='block';
      article_add__button.style.display = 'block';
      form.style.display = 'none';
      e.target.reset();
      };
  });
}
if(article_add__button_cancel){
  article_add__button_cancel.addEventListener('click',(e)=>{
    if(form){
      article_add__button.style.display = 'block';
      form.style.display = 'none';
    };
  });
}

const faq = document.querySelectorAll(".faq-page__question"); //блин, или querySelector сюда бабахнуть
let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {

        this.classList.toggle("active");

        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
