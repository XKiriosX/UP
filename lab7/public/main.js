let posts = [
    {
        id: '1',
        description: 'Grate Me!',
        createdAt: new Date(),
        author: 'AlexanderUsatov',
        photoLink: 'src/pic1.jpg'
    },
    {
        id: '2',
        description: 'Grate NotAFlamethrower!',
        createdAt: new Date(),
        author: 'ElonMusk',
        photoLink: 'src/pic2.png'
    },
    {
        id: '3',
        description: 'Grate Me!',
        createdAt: new Date(),
        author: 'AlexanderUsatov',
        photoLink: 'src/pic3.jpg'
    },
    {
        id: '4',
        description: 'Not very grate Ben Laden!',
        createdAt: new Date(),
        author: 'BenLaden',
        photoLink: 'src/pic4.jpg'
    },
    {
        id: '5',
        description: 'Grate Galaxy!',
        createdAt: new Date(),
        author: 'AlexanderUsatov',
        photoLink: 'src/pic5.jpg'
    },
    {
        id: '6',
        description: 'Make America great again!',
        createdAt: new Date(),
        author: 'Trump',
        photoLink: 'src/pic6.jpg'
    }
];

let closure = (function () {
    posts.forEach((item) => {
        let toPost = createPost(item);
        document.querySelector('main').appendChild(toPost);
    });
}());

function getPhotoPost(id) {
    return posts[id];
}

function createPost(item) {
    let article = document.createElement('article');
    article.innerHTML = `           
           <article class="post">
                <div class="nickname">${item.author}</div>
                <div class="photo">
                    <img src="${item.photoLink}" alt="">
                </div>
                <div class="description">
                    ${item.description}
                </div>
                <div class="like">
                    <i class="far fa-heart"></i>
                </div>
                <div class="delete">
                    <i class="fas fa-times"></i>
                </div>       
           </article>     
            `;
    return article.firstElementChild;
}