const loadPhone = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data)
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-containe')
    for (const phone of phones) {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card m-2 shadow-lg">
        <img src="${phone.image}" class="card-img-top img-fluid w-50 mx-auto mt-3" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <h5 class="card-title">${phone.phone_name}</h5>

            <p class="card-text">${phone.slug}</p>
        </div>
    </div>
        `
        phoneContainer.appendChild(phoneDiv);
    }
}

loadPhone();