//les array qui contient les evenements et les archives
let events = [];
let archive = [];
// variables: selection of screens, bottons, page title and subtitle.
const navigation_btns = document.querySelectorAll(".sidebar__btn");
const screens = document.querySelectorAll(".screen");
let page_title = document.getElementById("page-title");
let page_subtitle = document.getElementById("page-subtitle");
// objet pour faciliter le switch des screen en utulusons lindex.
const screensKeyObj = {
  add: 1,
  stats: 0,
  list: 2,
  archive: 3
}
// la fonction switch_screens qui nous permet de naviger entre les screens
function switch_creens(index) {
  navigation_btns.forEach(btn => btn.classList.remove("is-active"));
  screens.forEach(screen => {
    screen.classList.remove("is-visible");
    screen.classList.add("screen");
  });
  navigation_btns[index].classList.add("is-active");
  screens[index].classList.add("is-visible");
}
//fonction appli qui change le titre selon le key qui est la valeur de data-screen
function appli(key) {
  const index = screensKeyObj[key];
  if(index == 1){
    page_title.innerText="Ajout des evenements";
    page_subtitle.innerText="Formulaire d'ajout des events";
  }
  if(index == 0){
    page_title.innerText="Statistics";
    page_subtitle.innerText="Overview of your events";
    
  }
  if(index == 2){
    page_title.innerText="Liste des evenements";
    page_subtitle.innerText="Overview of your events";

  }
  if(index == 3){
    page_title.innerText="Corbaille";
    page_subtitle.innerText="Archive des evenement suprimmee";
  }
  switch_creens(index);
  };
//event listner to send la valeur de data screen to the  function appli to be the key
navigation_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    appli(btn.dataset.screen);
  });
});
//une autre methode pour ajouter un variant have to be fixed

// add variant
// const inputs = document.querySelectorAll(".input");
// let cont = 0;
// const variants_element = document.createElement("div");
// function add_variant() {
//   const clone_variants_element = variants_element.cloneNode();
//   const add_variant = document.getElementById("btn-add-variant");
//   const variants_list = document.getElementById("variants-list");


//   add_variant.addEventListener("click", (e) => {

//     clone_variants_element.setAttribute("class", "variant-row");
//     clone_variants_element.innerHTML += `
//                                         <input type="text" class="input variant-row__name" placeholder="Variant name (e.g., 'Early Bird')" />
//                                         <input type="number" class="input variant-row__qty" placeholder="Qty" min="1" />
//                                         <input type="number" class="input variant-row__value" placeholder="Value" step="0.01" />
//                                         <select class="select variant-row__type">
//                                             <option value="fixed">Fixed Price</option>
//                                             <option value="percentage">Percentage Off</option>
//                                         </select>
//                                         <button type="button" class="btn btn--danger btn--small variant-row__remove">Remove</button>
//                                         `;
//     variants_list.appendChild(clone_variants_element);
//     const variant_row__remove = document.querySelector(".variant-row__remove");
 
//     variant_row__remove.addEventListener("click", (e)=>{
//     const btne = e.currentTarget.parentElement;
//     btne.remove();
//     });
//     cont++;
//   });
//   ;
// }

const inputs = document.querySelectorAll(".input");
const variants_list = document.getElementById("variants-list");
//conteur pour le nombre des variantes.
let cont = 0;
// la fonction add variant pour ajouter les variantes
function add_variant() {
  const add_variant = document.getElementById("btn-add-variant");
  add_variant.addEventListener("click", (e) => {
  
    variants_list.innerHTML += `     <div class="variant-row">
                                        <input type="text" class="input variant-row__name" placeholder="Variant name (e.g., 'Early Bird')" />
                                        <input type="number" class="input variant-row__qty" placeholder="Qty" min="1" />
                                        <input type="number" class="input variant-row__value" placeholder="Value" step="0.01" />
                                        <select class="select variant-row__type">
                                            <option value="fixed">Fixed Price</option>
                                            <option value="percentage">Percentage Off</option>
                                        </select>
                                        <button type="button" class="btn btn--danger btn--small variant-row__remove" onclick="remove_var(this)">Remove</button>
                                        </div>
                                        `;

    // const variant_row__remove = document.querySelector(".variant-row__remove");
    // variant_row__remove.addEventListener("click", (e)=>{
    // variants_element.remove();
    // });
    cont++;
  });
};
add_variant();
//function remove des variantes
function remove_var(btn){
const btne = btn.currentTarget;
//  console.log(btn.closest(".variant-row"));
btn.parentElement.remove();
};

// input validation variables selection
const formulaire = document.querySelector(".form");
const inputs_4 = document.querySelectorAll("[data-valide]");
//input variables selection
let event_title = document.querySelector("#event-title");
let event_image = document.querySelector("#event-image");
let event_description = document.querySelector("#event-description");
let event_seats = document.querySelector("#event-seats");
let event_price = document.querySelector("#event-price");
//conteur por les id des evenements
let conteur = 0;

// la fonction validation du formulaire
  formulaire.addEventListener("submit", (e) => {
    form_validation();
function form_validation (){
    e.preventDefault();
    // variable poure la sortie du fonction si l'input est inconvenable.
    let valide = true;
    // we can do it outside is ze add else--> valide = true   !!!!!!just to reset the value!!!!!!
    // regex of validation form
    const event_image_regex = /^(https?:\/\/(?:www\.)?[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+?\.(?:png|jpe?g|gif|webp|svg))(?:\?.*)?$/;
    const event_title_regex = /^[A-Za-z0-9À-ÿ ,.'!?-]{3,50}$/
    const event_description_regex = /^[A-Za-z0-9À-ÿ ,.'!?()\n\r-]{10,500}$/
  //selection des eroor divs
    const form_errors = document.getElementById("form-errors");
    const form_success = document.getElementById("form-success");
    const form_infos = document.getElementById("form-infos");
    //ensure that the input isn't empty
    for (const input of inputs_4){
      if (input.value.trim() == "") {
        valide = false;
        input.value = "";
        form_infos.classList.remove("is-hidden");
      };
    };
    // valide =
    //   event_image_regex.test(event_image.value) && event_title_regex.test(event_title.value) && event_description_regex.test(event_description.value);
    // if (!valide) {
    //   form_errors.classList.remove("is-hidden");
    // }
    //condition of regex
    if (!event_image_regex.test(event_image.value) || !event_title_regex.test(event_title.value) || !event_description_regex.test(event_description.value)) {
      valide = false;
    }
    //info validate=false if won't work
    if(!valide){
          form_errors.classList.remove("is-hidden")
    }
    //info validate=false if will work and calll affichage function.
    if (valide) {
      alert("jhgfdsdfghjkjhgfdsdfghjkhgfd")
      conteur++;
      form_errors.classList.add("is-hidden");
      form_infos.classList.add("is-hidden");
      form_success.classList.remove("is-hidden");
      total_event.innerText = conteur;
    
    const event_infos = {
    id: conteur,
    name: event_title.value,
    seats: parseInt(event_seats.value),
    price: parseInt(event_price.value),
    img: event_image.value,
    description: event_description.value
  }
  events.push(event_infos);
      event_rows[0].innerHTML="";                                                                      // 0
      variants_list.innerHTML = "";
      setTimeout(()=>{
        form_success.classList.add("is-hidden");
      },2000);
      render_events();
    }
    }
  });


//selection de tableau d'affichage
const event_rows = document.querySelectorAll(".table__body");
//fonction render events
function render_events(){
  events.forEach(ev=>{
  const event_info = document.createElement("tr");
  event_info.classList.add("table__row");
  event_info.setAttribute("data-event-id", ev.id);
  event_info.innerHTML = `
    <td>${ev.id}</td>
    <td>${ev.name}</td>
    <td>${ev.seats}</td>
    <td>${ev.price}$</td>
    <td><span class="badge">8</span></td>
    <td>
        <button class="btn btn--small" data-action="details" data-event-id="${ev.id}">Details</button>
        <button class="btn btn--small" data-action="edit" data-event-id="${ev.id}">Edit</button>
        <button class="btn btn--danger btn--small" data-action="archive" data-event-id="${ev.archiveEventid}">Delete</button>
    </td>
`;
  event_rows[0].appendChild(event_info);
    formulaire.reset();
   renderStats();
  })
}
//variable pour stocker l'id
let test = null;
const total_event = document.getElementById("stat-total-events");
// detail[1].addEventListener("click", (e)=>{
// event_modal.classList.remove("is-hidden");
// })
//fonction calcule du total de seats et prix total
function renderStats(seats, price) {
    const totalEvents = events.length;
    const totalSeats = events.reduce((sum, e) => sum + e.seats, 0);
    const totalPrice = events.reduce((sum, e) => sum + e.price * e.seats, 0);
    document.getElementById('stat-total-events').textContent = totalEvents;
    document.getElementById('stat-total-seats').textContent = totalSeats;
    document.getElementById('stat-total-price').textContent = '$' + totalPrice.toFixed(2);
}
// document.querySelectorAll(".action-btn").forEach(btn => {
//     btn.addEventListener("click", finctions)
// });
//selection des tableau archive et events
document.getElementById("events-table").addEventListener("click", handleTableActionClick);
document.getElementById("archive-table").addEventListener("click", handleTableActionClick);
function find_event (eventid){
let eventID= null;
events.forEach(event_inf=>{
  if(event_inf.id===eventid){
   eventID = event_inf;
  }
  if (!eventID) {
    alert("event not found");
  return;
  }
})
  return eventID;
}
//fonction de la determination des fonction a faire
function handleTableActionClick(e) {
    const button = e.target.closest("[data-action]");
  if(!button){
    return;
  }
  const action = button.dataset.action;
  const eventid = Number(button.dataset.eventId);
  test = eventid;
switch(action){
  case "details" :    
    showDetails();
    renderStats();
  break;
  case "edit" :
    editEvent(test);
    renderStats();
  break;
  case "archive" :
    archiveEvent(test);
    renderStats();
  break;
  case "restore":
    restoreEvent(test);
    renderStats();
  break;
};
}

function showDetails() {
    let event_find = find_event(test);
    const modal_body = document.getElementById("modal-body");
    modal_body.innerHTML = `
        <h2>${event_find.name}</h2>
        <img src="${event_find.img}" alt="${event_find.name}" style = border-radius:10px">
        <p><span class="modal__title">description:</span> ${event_find.description}</p>
        <p><span class="modal__title">seats:</span> ${event_find.seats}</p>
        <p><span class="modal__title">price:</span> ${event_find.price}</p>

    `;
     document.getElementById("event-modal").classList.remove("is-hidden");
    const close = document.querySelector(".modal__close");
    close.addEventListener("click", ()=>{
       document.getElementById("event-modal").classList.add("is-hidden");
    })
};
let edit_id = 0;
function editEvent(eventId) {
let event_find = find_event(test);
    event_title.value = event_find.name;
    event_image.value = event_find.img;
    event_description.value = event_find.description;
    event_seats.value = event_find.seats;
    event_price.value = event_find.price;
    switch_creens(1);
    document.getElementById("submit_btn").innerText = "Update Event";
    edit_id = eventId;
 let valid = true;
    formulaire.addEventListener("submit", (e) => {
        e.preventDefault();
        let tesst=edit_id;
        const event_image_regex = /https?:\/\/(?:www\.)?[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+?\.(?:png|jpe?g|gif|webp|svg|)(?:\?.*)?/;
        const event_title_regex = /^[A-Za-z0-9À-ÿ ,.'!?-]{3,50}$/;
        const event_description_regex = /^[A-Za-z0-9À-ÿ ,.'!?()\n\r-]{10,500}$/;

        // const form_errors = document.getElementById("form-errors");
        // const form_success = document.getElementById("form-success");
        // const form_infos = document.getElementById("form-infos");

        for ( const input of inputs_4) {
            if (input.value.trim() === "") {
              console.log("step 1")
                valid = false;
                input.value = "";
                //  form_infos.classList.remove("is-hidden");
            }
        }
        if (!event_image_regex.test(event_image.value) || !event_title_regex.test(event_title.value) || !event_description_regex.test(event_description.value)) {
            valid = false;
                          console.log("step 3")

        }
        if (!valid) {
                        console.log("step FALSE")

            // form_errors.classList.remove("is-hidden");
            return;
        }
        // form_errors.classList.add("is-hidden");
        // form_infos.classList.add("is-hidden");
        // form_success.classList.remove("is-hidden");
if(valid){
  alert("lkjhgfdfghjk")
    event_find.id= tesst,
    event_find.name= event_title.value,
    event_find.seats= parseInt(event_seats.value),
    event_find.price= parseInt(event_price.value),
    event_find.img= event_image.value,
    event_find.description= event_description.value
            edit_id = 0;
            document.getElementById("submit_btn").innerText = "Create Event";
            switch_creens(0);
            variants_list.innerHTML = "";
            formulaire.reset();
}     
    });

}



  




// let archive_id = 0;
// function archiveEvent(eventId){
// let event_find = find_event(test);  
//   archive.push(event_find);
//   const row = document.querySelector(`[data-event-id="${eventId}"]`);
//   row.remove();
//   events.splice(test-1, 1);
//   conteur=0;
//   renderArchiveTable();
// }


// function renderArchiveTable() {
//   let event_find = find_event(test);
//   archive.forEach(ev => {
//     archive_id++;
//     const event_info = document.createElement("tr");
//     event_info.classList.add("table__row");
//     event_info.setAttribute("data-event-id", ev.id);
//     event_info.innerHTML = `
//       <td>${ev.id}</td>
//       <td>${ev.name}</td>
//       <td>${ev.seats}</td>
//       <td>${ev.price}$</td>
//       <td><span class="badge">archived</span></td>
//       <td>
//           <button class="btn btn--small" data-action="details" data-event-id="${ev.id}">Details</button>
//           <button class="btn btn--primary btn--small" data-action="restore" data-event-id="${ev.id}">Restore</button>
//       </td>
//     `;
//     event_rows[1].appendChild(event_info);
//   });
// }





// function restoreEvent(eventId) {
//   const event = archive.find(ev => ev.id === eventId);
//   if (!event) {
//     return;
//   }
//   events.push(event);
//   const row = document.querySelector(`[data-event-id="${eventId}"]`);
//   row.remove();
//   archive.splice(eventId-1, 1);
//   affichage(event.id, event.name, event.seats, event.price, 0);
//   renderStats();
// }

//fonction recherche 
const search_input = document.getElementById("search-events");
search_input.addEventListener("input", (e)=>{
  const search_text = search_input.value.toLowerCase().trim();
  const search_result = events.filter(event=> event.name.toLowerCase().includes(search_text))
  affichage_event_searched(search_result);
})
function affichage_event_searched(event_searched){
event_rows[0].innerHTML="";
  event_searched.forEach(e => {
    const row = document.createElement("tr");
    row.classList.add("table__row");
    row.setAttribute("data-event-id", e.id);
    row.innerHTML = `
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.seats}</td>
      <td>${e.price}$</td>
      <td><span class="badge">8</span></td>
      <td>
        <button class="btn btn--small" data-action="details" data-event-id="${e.id}">Details</button>
        <button class="btn btn--small" data-action="edit" data-event-id="${e.id}">Edit</button>
        <button class="btn btn--danger btn--small" data-action="archive" data-event-id="${e.id}">Delete</button>
      </td>
    `;
    event_rows[0].appendChild(row);
});
}
