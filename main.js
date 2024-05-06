let team = [{ Nome: "Wayne Barnett", Ruolo: "Founder & CEO", Immagine: "wayne-barnett-founder-ceo.jpg" },
{ Nome: "Angela Caroll", Ruolo: "Chief Editor", Immagine: "angela-caroll-chief-editor.jpg" },
{ Nome: "Walter Gordon", Ruolo: "Office Manager", Immagine: "walter-gordon-office-manager.jpg" },
{ Nome: "Angela Lopez", Ruolo: "Social Media Manager", Immagine: "angela-lopez-social-media-manager.jpg" },
{ Nome: "Scott Estrada", Ruolo: "Developer", Immagine: "scott-estrada-developer.jpg" },
{ Nome: "Barbara Ramos", Ruolo: "Graphic Designer", Immagine: "barbara-ramos-graphic-designer.jpg" }
];

StampaInfo(team);

function StampaInfo(array) {
    for (let i = 0; i < array.length; i++) {
        document.querySelector("#areaLavoro").innerHTML +=
           `<div class="card" style="width: 18rem;">
                <img src="./img/${array[i].Immagine}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${array[i].Nome}</h5>
                        <p class="card-text">${array[i].Ruolo}</p>
                    </div>
            </div>`;
    }
}