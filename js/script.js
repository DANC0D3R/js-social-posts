const posts = [
    {
        "id": 1,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur reprehenderit modi quibusdam numquam suscipit vel, repellendus laborum molestias eos.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Alessio Vietri",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro temporibus laudantium tenetur amet aut, est incidunt ab ducimus sapiente.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Daniele Minieri",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident doloribus voluptatem unde quo itaque vitae eveniet beatae fugiat eius placeat!",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Flavio Cordari",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam itaque repellat odio nostrum delectus corporis, blanditiis a eveniet sequi laudantium!",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vel corporis rerum! Delectus quaerat blanditiis a veniam accusamus vitae quo.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Mauro Formisano",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Stampa i dati degli elementi di "posts"
console.log("Posts", posts);

// Array ID dei post a cui è stato messo mi piace
let likedPosts = [];

const postList = document.querySelector(".posts-list");

// Stampa posts nel feed
posts.forEach((postData, index) => {

    // Separazione della struttura di proprieta' "created" degli elementi di "posts"
    const date =  postData.created.split("-");

    const [year, month, day] = date;

    postData.date = {
        year: year,
        month: month,
        day: day
    };

    // Crea un nuovo post
    const newPost = document.createElement ("div");
    newPost.classList.add("post");
    
    newPost.innerHTML = 
    `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${postData.author.image}" alt="${postData.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${postData.author.name}</div>
                <div class="post-meta__time">${postData.date.month}/${postData.date.day}/${postData.date.year}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${postData.content}</div>
    <div class="post__image">
        <img src="${postData.media}">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="##" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${postData.likes}</b> persone
            </div>
        </div> 
    </div>       
    `;
    
    // Aggiunge nuovo post alla pagina
    postList.append(newPost);

    console.log("Post aggiunto");

    // Al click sul bottone mi piace
    const likeButton = document.querySelector(`.post:nth-child(${index + 1}) .js-like-button`);
    const likesCounter = document.querySelector(`.post:nth-child(${index + 1}) .js-likes-counter`);

    likeButton.addEventListener("click", function() {

        // Se il post non e' gia' stato aggiunto ai post piaciuti
        if (likedPosts.includes(postData.id)) {
            likeButton.classList.remove("like-button--liked");

            // Aggiorna il contatore
            postData.likes--;
            likesCounter.innerHTML = postData.likes;

            // Rimuove l'ID del post dall'array dei post piaciuti
            const postIndex = likedPosts.indexOf(postData.id);
            likedPosts.splice(postIndex, 1);
        }
        else {
            likeButton.classList.add("like-button--liked");

            // Aggiorna il contatore
            postData.likes++;
            likesCounter.innerHTML = postData.likes;

            // Aggiunge l'ID del post all'array dei post piaciuti
            likedPosts.push(postData.id)
        }
        console.log("Posts con mipiace:", likedPosts);
    })
});