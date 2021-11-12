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
  //adding all the titles to an array
  const titles = json.map((a) => a.title);

  //filtering the array
  const filteredTitles = titles.filter(wordCount);

  //returns only titles greater than 6
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
  //converting to string to remove the escaped new lines
  var jsonString = JSON.stringify(json);
  var cleanString = jsonString.replace(/\\n/g, " ");

  //back to object array so we can use the array operations
  var obj = JSON.parse(cleanString);
  delete obj.title;

  //mapping the bodies to a new array
  const bodies = obj.map((a) => a.body);

  //splitting it into an array of individual words
  const wordsArray = bodies.flatMap((body) => body.split(" "));
  const arrayMap = {};

  //counting the occurance of each word and incrementing its value
  wordsArray.forEach((element) => {
    let count = arrayMap[element] || 0;
    arrayMap[element] = count + 1;
  });

  console.log(arrayMap);
}
