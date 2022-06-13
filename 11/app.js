const url = `https://dapi.kakao.com/v2/search/web?query=#query&size=10&page=#pageNum`;
const $docs = document.querySelector('#docs');
// const $query = document.querySelector('#query');
// const $searchButton = document.querySelector('#searchButton');
const $searchForm = document.querySelector('#searchForm');
const $query = document.querySelector('[name="query"]');
const $moreBtn = document.querySelector('.moreBtn');

let pageNum = 1;
let isSubmit = false;

function getFetch(url, callback) {
  console.log(url);
  const headers = {
    Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  };

  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}

function search() {
  const query = $query.value;
  const searchUrl = url.replace('#query', query).replace('#pageNum', pageNum);
  // url = url.replace('#query', query);
  getFetch(searchUrl, (data) => {
    const { documents } = data;
    // const documents = data.documents;
    // console.log(documents);

    const docs = documents.map((document) => {
      return document.contents;
    });
    $docs.innerHTML += docs.join('<hr>');
  });
}

$searchForm.addEventListener('submit', (event) => {
  if (!isSubmit) {
    search();
    isSubmit = true;
  }
  $docs.innerHTML = '';
  isSubmit = false;
  pageNum = 1;
  
  event.preventDefault();
});

// 더보기 기능
$moreBtn.addEventListener('click', () => {
  $docs.innerHTML += '<hr>';
  pageNum++;
  search();
});