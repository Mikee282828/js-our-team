let team = [{ nome: "Wayne Barnett", ruolo: "Founder & CEO", immagine: "wayne-barnett-founder-ceo.jpg" },
{ nome: "Angela Caroll", ruolo: "Chief Editor", immagine: "angela-caroll-chief-editor.jpg" },
{ nome: "Walter Gordon", ruolo: "Office Manager", immagine: "walter-gordon-office-manager.jpg" },
{ nome: "Angela Lopez", ruolo: "Social Media Manager", immagine: "angela-lopez-social-media-manager.jpg" },
{ nome: "Scott Estrada", ruolo: "Developer", immagine: "scott-estrada-developer.jpg" },
{ nome: "Barbara Ramos", ruolo: "Graphic Designer", immagine: "barbara-ramos-graphic-designer.jpg" }
];

StampaInfo(team);

function StampaInfo(array) {
    for (let i = 0; i < array.length; i++) {
        document.querySelector("#areaLavoro").innerHTML +=
           `<div class="card" style="width: 18rem;">
                <img src="./img/${array[i].immagine}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${array[i].nome}</h5>
                        <p class="card-text">${array[i].ruolo}</p>
                    </div>
            </div>`;
    }
}