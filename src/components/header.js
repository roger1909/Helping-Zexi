// const Header = (title, date, temp) => {




//   // TASK 1
//   // ---------------------
//   // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
//   // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
//   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
//   //
//   //  <div class="header">
//   //    <span class="date">{ date }</span>
//   //    <h1>{ title }</h1>
//   //    <span class="temp">{ temp }</span>
//   //  </div>
//   //
// }

const Header = (title, date, temp) => {
  // Create the main div element
  const div = document.createElement('div');
  div.classList.add('header'); // Add the 'header' class

  // Create the date span element and set its text content
  const dateSpan = document.createElement('span');
  dateSpan.classList.add('date'); // Add the 'date' class
  dateSpan.textContent = date;

  // Create the title h1 element and set its text content
  const titleH1 = document.createElement('h1');
  titleH1.textContent = title;

  // Create the temp span element and set its text content
  const tempSpan = document.createElement('span');
  tempSpan.classList.add('temp'); // Add the 'temp' class
  tempSpan.textContent = temp;

  // Append the child elements in the correct hierarchy
  div.appendChild(dateSpan);
  div.appendChild(titleH1);
  div.appendChild(tempSpan);

return div; // Return the constructed DOM element
};





const headerAppender = (selector) => {

const header = Header('Beast', 'August 29 2023', '90deg');

const targetElement = document.querySelector(selector)

if(targetElement) {
  targetElement.appendChild(header)
  
} else {
  console.error('not found')
}}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!


export { Header, headerAppender }
