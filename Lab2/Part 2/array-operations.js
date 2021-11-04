/**
 * Using the api http://jsonplaceholder.typicode.com the following two parts are done:
 * 1.	List all of the post titles having more than six words
 * 2.	Show a word frequency map for all of the body contents of the posts
 * HTML file included to make use of fetch API in browser
 */

// Part 1
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => postTitles(json));

/**
 * Function that prints all the post titles with more than 6 words
 * @param {string} json a JSON string containing an array of objects which contain the titles
 */
function postTitles(json) {
  const titles = json.map((a) => a.title);
  const filteredTitles = titles.filter(wordCount);

  function wordCount(title) {
    if (title.split(/\s+/).length > 6) {
      return title;
    }
  }

  console.log(filteredTitles);
}

// Part 2
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => wordMap(json));

/**
 * A function that extracts all the bodys from posts amd displays a word frequency map
 * @param {string} json a JSON string containing an array of objects which contain the titles
 */
function wordMap(json) {
  const bodies = json.map((a) => a.body);
  console.log(bodies);

  const wordsArray = bodies.flatMap((body) => body.split(" "));
  const arrayMap = {};

  console.log(wordsArray);
  wordsArray.forEach((element) => {
    let count = arrayMap[element] || 0;
    arrayMap[element] = count + 1;
  });
  console.log(arrayMap);
}
