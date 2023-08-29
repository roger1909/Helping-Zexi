// Modify the Card component to accept an article object
const Card = (article) => {
  // Create the card elements
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');

  const divImgContainer = document.createElement('div');
  divImgContainer.classList.add('img-container');

  // Create the image element
  const img = document.createElement('img');
  img.src = article.authorPhoto; // Set the image source

  const span = document.createElement('span');
  span.textContent = `By ${article.authorName}`;

  // Append the elements to the card
  authorDiv.appendChild(divImgContainer);
  divImgContainer.appendChild(img);
  authorDiv.appendChild(span);

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  return cardDiv;
};



  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


  const cardAppender = (selector) => {
    fetch(`http://localhost:5001/api/articles`)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          const targetElement = document.querySelector(selector);
          if (targetElement) {
            // Iterate through topics and articles to create cards
            Object.values(data.articles).forEach((articlesArray) => {
              articlesArray.forEach((article) => {
                const card = Card(article);
                targetElement.appendChild(card);
              });
            });
          } else {
            console.error('element not found');
          }
        } else {
          console.error('invalid response');
        }
      })
      .catch((error) => {
        console.error('fetch error', error);
      });
  };
  

  

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
