// Fetch data from the external JSON file and store it in a variable
let posts = [];

// Load the JSON data when the page is fully loaded
window.onload = function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      posts = data; // Assign fetched data to the posts variable
    })
    .catch(error => console.error('Error loading JSON:', error));
};

// Function to search post
function searchPost() {
  // Check if posts data is loaded
  if (posts.length === 0) {
    alert('Data is still loading. Please try again.');
    return;
  }

  const searchValue = document.getElementById("searchInput").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ''; // Clear previous result

  // Find the post with the searched postNumber
  const post = posts.find(p => p.postNumber === searchValue);

  if (post) {
    // If found, show the post data in a card
    resultDiv.innerHTML = `
            <div class="card">
                <div class="img-box">
                  <img src="${post.Img}" alt="Post Image">
                </div>
                <button class="close-btn" onclick="closeCard()">X</button>
                <div class="detail-box">
                  <p><strong>Post Number :</strong> ${post.postNumber}</p>
                  <P><strong>Title :</strong>  ${post.videoTitle}</P>
                  <P><strong>Actress :</strong>  ${post.actressName}</P>
                  <p><a href="https://www.profitableratecpm.com/xtkgi4tee?key=e662302f7773c5111ff7687606154820">Direct Link</a></p>
                  <p><a href="${post.downloadOne}" target="_blank">Download Link 1</a></p>
                  <p><a href="${post.downloadTwo}" target="_blank">Download Link 2</a></p>
                </div>
            </div>
        `;
  } else {
    // If not found, show "Not Found" message
    resultDiv.innerHTML = `<p class="not-found">Post Not Found</p>`;
  }
}

// Function to close the card and clear input value
function closeCard() {
  const resultDiv = document.getElementById("result");
  const searchInput = document.getElementById("searchInput");

  resultDiv.innerHTML = ''; // Hide the card (clear result div)
  searchInput.value = ''; // Clear the input value
}


// Add "Enter" key functionality for search
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === 'Enter') {
    searchPost();
  }
});


// Function to display 3 random posts in the random-box div
function showRandomPosts() {
  const randomBox = document.querySelector('.random-box');
  randomBox.innerHTML = ''; // Clear any existing content

  // Shuffle and select 3 random posts
  const shuffledPosts = [...posts].sort(() => 0.5 - Math.random()).slice(0, 4);

  // Loop through selected posts and create card structure
  shuffledPosts.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('random-card');

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${post.Img}" alt="Post Image" width="100%" height="100%">
        </div>
        <div class="card-back">
          <p><strong>Post Number:</strong> ${post.postNumber}</p>
          <p><strong>Title:</strong> ${post.videoTitle}</p>
          <p><strong>Actress:</strong> ${post.actressName}</p>
          
        </div>
      </div>
    `;

    // Add event listener to flip the card when clicked
    card.addEventListener('click', function () {
      const cardInner = card.querySelector('.card-inner');
      cardInner.classList.toggle('is-flipped');
    });

    randomBox.appendChild(card);
  });
}

// Function to show 3 random posts in the random-box
function showRandomPosts() {
  const randomBox = document.querySelector('#random-posts');
  randomBox.innerHTML = ''; // Clear any existing content

  // Shuffle and select 3 random posts
  const shuffledPosts = [...posts].sort(() => 0.5 - Math.random()).slice(0, 4);

  shuffledPosts.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('random-card');

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${post.Img}" alt="Post Image" width="100%" height="100%">
        </div>
        <div class="card-back">
          <p><strong>Post Number:</strong> ${post.postNumber}</p>
          <p><strong>Title:</strong> ${post.videoTitle}</p>
          <p><strong>Actress:</strong> ${post.actressName}</p>
          <p><a href="https://www.profitableratecpm.com/xtkgi4tee?key=e662302f7773c5111ff7687606154820">Direct Link</a></p>
        </div>
      </div>
    `;

    const imgElement = card.querySelector('img');
    addImageLoader(imgElement); // Add loader to the image

    card.addEventListener('click', function () {
      const cardInner = card.querySelector('.card-inner');
      cardInner.classList.toggle('is-flipped');
    });

    randomBox.appendChild(card);
  });
}

// Function to handle refresh button click
document.getElementById('refreshButton').addEventListener('click', showRandomPosts);


// Function to display loader until images are fully loaded
function addImageLoader(imageElement) {
  const loader = document.createElement('div');
  loader.className = 'loader';

  imageElement.style.display = 'none'; // Hide image initially
  imageElement.parentNode.insertBefore(loader, imageElement);

  imageElement.onload = () => {
    loader.remove(); // Remove loader once image loads
    imageElement.style.display = 'block'; // Show the image
  };

  imageElement.onerror = () => {
    loader.remove(); // Remove loader if image fails to load
    imageElement.style.display = 'block'; // Display the image or a placeholder if needed
  };
}




// Call display function when data is loaded
window.onload = function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      posts = data;
      showRandomPosts();
      
    })
    .catch(error => console.error('Error loading JSON:', error));
};

