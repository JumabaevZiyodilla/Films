const list = document.querySelector(".list");
const template = document.querySelector(".template-js").content;
const filmsFragment = document.createDocumentFragment();

for (const films of kinolar){
    const filmsTempClone = template.cloneNode(true);

    filmsTempClone.querySelector(".title").textContent = films.title;
    filmsTempClone.querySelector(".year_span").textContent = films.year;
    filmsTempClone.querySelector(".actor_span").textContent = films.cast.join(", ")
    filmsTempClone.querySelector(".genres_span").textContent = films.genres;
    // title.textContent = films.title;
    // textContent = i.title;
    // console.log(i.title);
    filmsFragment.appendChild(filmsTempClone);
}
list.appendChild(filmsFragment);
// list.appendChild(filmsFragment);