
async function fetching (){
    let rawData = await fetch('https://randomuser.me/api/?results=5');
    let data = await rawData.json();
    document.querySelector(".container").innerHTML = "";
    data.results.forEach(function(user){

       // Create main container
    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Avatar section
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    const img = document.createElement('img');
    img.src = user.picture.large;
    img.alt = 'user image';
    avatar.appendChild(img);

    // Info section
    const info = document.createElement('div');
    info.className = 'info';

    const name = document.createElement('h2');
    name.className = 'name';
    name.textContent = user.name.first + " " + user.name.last;

    const email = document.createElement('p');
    email.className = 'email';
    email.textContent = user.email;

    const details = document.createElement('div');
    details.className = 'details';

    const gender = document.createElement('div');
    gender.className = 'detail-item';
    gender.textContent = user.gender;

    const phone = document.createElement('div');
    phone.className = 'detail-item';
    phone.textContent = user.cell;

    // Combine detail items
    details.append(gender, phone);

    // Combine info section
    info.append(name, email, details);

    // Combine card content
    cardContent.append(avatar, info);
    card.append(cardContent);

    // Add card to container
    document.querySelector(".container").appendChild(card);
        
    })
}
fetching();
 document.querySelector("#refreshBtn").addEventListener("click", fetching)

