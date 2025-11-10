const navigation_btns = document.querySelectorAll(".sidebar__btn");
const screens = document.querySelectorAll(".screen");
let page_title = document.getElementById("page-title");
let page_subtitle = document.getElementById("page-subtitle");
const screensKeyObj = {
  add: 1,
  stats: 0,
  list: 2,
  archive: 3
}

function switch_creens(index) {
  navigation_btns.forEach(btn => btn.classList.remove("is-active"));
  screens.forEach(screen => {
    screen.classList.remove("is-visible");
    screen.classList.add("screen");
  });

  navigation_btns[index].classList.add("is-active");
  screens[index].classList.add("is-visible");
}



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

navigation_btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    appli(btn.dataset.screen);
  });
});
//
const total_event = document.getElementById("stat-total-events");










// // add variant
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
// add_variant();

let events = [];
let archive = [];

// add variant
const inputs = document.querySelectorAll(".input");
let cont = 0;
const variants_list = document.getElementById("variants-list");
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
  ;
}
add_variant();
function remove_var(btn){
const btne = btn.currentTargett;
 console.log(btn.closest(".variant-row"));
   btn.parentElement.remove();
} 













// input validation
const formulaire = document.querySelector(".form");
const inputs_4 = document.querySelectorAll("[data-valide]");
let conteur = 0;
let event_title = document.querySelector("#event-title");
let event_image = document.querySelector("#event-image");
let event_description = document.querySelector("#event-description");
let event_seats = document.querySelector("#event-seats");
let event_price = document.querySelector("#event-price");


function validation_of_form(){
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  // variables
  let valide = true;
  // we can do it outside is ze add else--> valide = true   just to reset the value!!!!!!
  const event_image_regex = /https?:\/\/(?:www\.)?[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+?\.(?:png|jpe?g|gif|webp|svg|)(?:\?.*)?/
  const event_title_regex = /^[A-Za-z0-9À-ÿ ,.'!?-]{3,50}$/
  const event_description_regex = /^[A-Za-z0-9À-ÿ ,.'!?()\n\r-]{10,500}$/


  const form_errors = document.getElementById("form-errors");
  const form_success = document.getElementById("form-success");
  const form_infos = document.getElementById("form-infos");


  for (input of inputs_4) {
    if (input.value.trim() == "") {
      valide = false;
      input.value = "";
      form_infos.classList.remove("is-hidden");

    }
  }
  // valide =
  //   event_image_regex.test(event_image.value) && event_title_regex.test(event_title.value) && event_description_regex.test(event_description.value);
  // if (!valide) {
  //   form_errors.classList.remove("is-hidden");
  // }

  if (!event_image_regex.test(event_image.value) || !event_title_regex.test(event_title.value) || !event_description_regex.test(event_description.value)) {
    valide = false;
  }
  if(!valide){
        form_errors.classList.remove("is-hidden");

  }

  if (valide) {
    form_errors.classList.add("is-hidden");
    form_infos.classList.add("is-hidden");

    form_success.classList.remove("is-hidden");
    conteur++;
    total_event.innerText = conteur;
    affichage(conteur, event_title.value, event_seats.value, event_price.value, cont);
                                                                                   // 0
    variants_list.innerHTML = "";
    form_success.classList.add("is-hidden");
  }
});

}
validation_of_form();




 const event_rows = document.querySelectorAll(".table__body");

function affichage(id, title, seats, price, badge) {
                                                 //table_id
  const event_info = document.createElement("tr");
 

  event_info.classList.add("table__row");
  event_info.setAttribute("data-event-id", id);
  // event_info.dataset.eventId = id;
  //instead of - ze turn it to uppercase!!!!!!!!!!!!!!

      const event_infos = {
    id,
    name: event_title.value,
    seats: parseInt(event_seats.value),
    price: parseInt(event_price.value),
    img: event_image.value,
    description: event_description.value
  }
   console.log(event_infos);
   events.push(event_infos);
  event_info.innerHTML = `
    <td>${id}</td>
    <td>${title}</td>
    <td>${seats}</td>
    <td>${price}$</td>
    <td><span class="badge">${badge}</span></td>
    <td>
        <button class="btn btn--small" data-action="details" data-event-id="${id}">Details</button>
        <button class="btn btn--small" data-action="edit" data-event-id="${id}">Edit</button>
        <button class="btn btn--danger btn--small" data-action="archive" data-event-id="${id}">Delete</button>
    </td>
`;
  event_rows[0].appendChild(event_info);
  formulaire.reset();
   renderStats(seats, price);

}

 
// detail[1].addEventListener("click", (e)=>{
// event_modal.classList.remove("is-hidden");
// })







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

document.getElementById("events-table").addEventListener("click", handleTableActionClick);
document.getElementById("archive-table").addEventListener("click", handleTableActionClick);

function handleTableActionClick(e) {
    const button = e.target.closest("[data-action]");
  if(!button){
    return;
  }
  const action = button.dataset.action;
  const eventid = Number(button.dataset.eventId);
  
switch(action){
  case "details" :
    showDetails(eventid);
  break;
  case "edit" :
    editEvent(eventid);
  break;
  case "archive" :
    archiveEvent(eventid);
  break;
  case "restore":
  restoreEvent(eventid);
  break;
};
}

function showDetails(eventId) {
        const event = events.find(ev => ev.id === eventId);
        if (!event) {
        alert("event not found");
        return;
    }
    const modal_body = document.getElementById("modal-body");
    modal_body.innerHTML = `
        <h2>${event.name}</h2>
        <img src="${event.img}" alt="${event.name}" style = border-radius:10px">
        <p><span class="modal__title">description:</span> ${event.description}</p>
        <p><span class="modal__title">seats:</span> ${event.seats}</p>
        <p><span class="modal__title">price:</span> ${event.price}</p>

    `;
    document.getElementById("event-modal").classList.remove("is-hidden");
};













let editingEventId = 0;

function editEvent(eventId) {
    const event = events.find(ev => ev.id === eventId);
    if (!event) {
        alert("Event not found");
        return;
    }

    
    event_title.value = event.name;
    event_image.value = event.img;
    event_description.value = event.description;
    event_seats.value = event.seats;
    event_price.value = event.price;

    
    switch_creens(1);
    document.getElementById("submit_btn").innerText = "Update Event";

  
    editingEventId = eventId;
}


function validation_of_form() {
    formulaire.addEventListener("submit", (e) => {
        e.preventDefault();

        let valide = true;
        const event_image_regex = /https?:\/\/(?:www\.)?[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+?\.(?:png|jpe?g|gif|webp|svg|)(?:\?.*)?/;
        const event_title_regex = /^[A-Za-z0-9À-ÿ ,.'!?-]{3,50}$/;
        const event_description_regex = /^[A-Za-z0-9À-ÿ ,.'!?()\n\r-]{10,500}$/;

        const form_errors = document.getElementById("form-errors");
        const form_success = document.getElementById("form-success");
        const form_infos = document.getElementById("form-infos");

        for (const input of inputs_4) {
            if (input.value.trim() === "") {
                valide = false;
                input.value = "";
                form_infos.classList.remove("is-hidden");
            }
        }

        if (!event_image_regex.test(event_image.value) ||
            !event_title_regex.test(event_title.value) ||
            !event_description_regex.test(event_description.value)) {
            valide = false;
        }

        if (!valide) {
            form_errors.classList.remove("is-hidden");
            return;
        }

        
        form_errors.classList.add("is-hidden");
        form_infos.classList.add("is-hidden");
        form_success.classList.remove("is-hidden");

        if (editingEventId !== 0) {
            
            const event = events.find(ev => ev.id === editingEventId);
            event.name = event_title.value;
            event.img = event_image.value;
            event.description = event_description.value;
            event.seats = parseInt(event_seats.value);
            event.price = parseInt(event_price.value);

            
            const row = document.querySelector(`[data-event-id="${editingEventId}"]`);
            row.innerHTML = `
                <td>${editingEventId}</td>
                <td>${event.name}</td>
                <td>${event.seats}</td>
                <td>${event.price}$</td>
                <td><span class="badge">${cont}</span></td>
                <td>
                    <button class="btn btn--small" data-action="details" data-event-id="${editingEventId}">Details</button>
                    <button class="btn btn--small" data-action="edit" data-event-id="${editingEventId}">Edit</button>
                    <button class="btn btn--danger btn--small" data-action="archive" data-event-id="${editingEventId}">Delete</button>
                </td>
            `;

            editingEventId = 0;
            document.getElementById("submit_btn").innerText = "Create Event";
        } 
        else {
          
            conteur++;
            total_event.innerText = conteur;
            affichage(conteur, event_title.value, event_seats.value, event_price.value, cont);
        }

        variants_list.innerHTML = "";
        form_success.classList.add("is-hidden");
        formulaire.reset();
        renderStats();
    });
}



let archive_id = 0;
function   archiveEvent(eventId){
  const event = events.find(ev => ev.id===eventId);
  if(!event){
    alert("this is not correct");
    return;
  }          
  archive.push(event);
  const row = document.querySelector(`[data-event-id="${eventId}"]`);
  row.remove();
  renderArchiveTable();
}


function renderArchiveTable() {
event_rows[1].innerHTML = "";
  archive.forEach(ev => {
    const event_info = document.createElement("tr");
    event_info.classList.add("table__row");
    event_info.setAttribute("data-event-id", ev.id);

    event_info.innerHTML = `
      <td>${ev.id}</td>
      <td>${ev.name}</td>
      <td>${ev.seats}</td>
      <td>${ev.price}$</td>
      <td><span class="badge">archived</span></td>
      <td>
          <button class="btn btn--small" data-action="details" data-event-id="${ev.id}">Details</button>
          <button class="btn btn--primary btn--small" data-action="restore" data-event-id="${ev.id}">Restore</button>
      </td>
    `;
    event_rows[1].appendChild(event_info);
  });
}





function restoreEvent(eventId) {
  const event = archive.find(ev => ev.id === eventId);
  if (!event) {
    alert("Event not found");
    return;
  }
  events.push(event);
  const row = document.querySelector(`[data-event-id="${eventId}"]`);
  row.remove();

  affichage(event.id, event.name, event.seats, event.price, 0);
  

  renderStats();
}




