var after = ''

function fetchMemes() {

    if (document.getElementById('memes')) {
        document.getElementById('memes').remove()
    }


    let parentdiv = document.createElement('div')
    parentdiv.id = 'memes'
    fetch(` https://www.reddit.com/r/memes.json?after=${after}`)
        .then(response => response.json())
        .then(body => {
            after = body.data.after
            for (let index = 0; index < body.data.children.length; index++) {
                if (body.data.children[index].data.post_hint === "image") {
                    let div = document.createElement('div')
                    let h4 = document.createElement('h4')
                    let image = document.createElement('img')
                    image.src = body.data.children[index].data.url_overridden_by_dest
                    h4.textContent = body.data.children[index].data.title;
                    div.appendChild(h4)
                    div.appendChild(image)
                    parentdiv.appendChild(div)
                }

            }
            document.body.appendChild(parentdiv)
        });
}


// Array of favicon filenames
var favicons = ['meme_cat_being_yelled_at.png', 'meme_crying_cat.png', 'meme_crying_kim_kardashian.png','meme_crying_michael_jordan.png','meme_facepalm.png','meme_hide_the_pain_harold.png','meme_leonardo_dicaprio_laughing.png','meme_polite_cat.png','meme_roll_safe.png','meme_salt_bae.png','meme_woman_yelling.png'];

// Get a random favicon filename
var randomFavicon = favicons[Math.floor(Math.random() * favicons.length)];

// Create a link element for the favicon
var link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = 'favicons/' + randomFavicon;

// Add the link element to the head section of the page
document.getElementsByTagName('head')[0].appendChild(link);
