async function fetchQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
}

function postQuote(args) {
  args.author
    ? $("#author").text("- " + args.author)
    : $("#author").text("- Anonymous");
  $("#text").text(args.content);
  return;
}

function makeTweetURL(args) {
  let url = "https://twitter.com/intent/tweet?text=";
  let tweet = `${args.content}` + "- " + `${args.author}`;
  result = $("#tweet-quote").attr("href", url + tweet);
  return result;
}

let animations = [
  "animate__fadeInDown",
  "animate__fadeInUp",
  "animate__fadeIn",
  "animate__zoomIn",
  "animate__slideInDown",
  "animate__slideInUp",
  "animate__zoomInDown",
  "animate__zoomInLeft",
  "animate__zoomInRight",
];

let randomAnimation = () => {
  let num = Math.floor(Math.random() * 10);
  return animations[num];
};

function setParaClass(element) {
  $(element).attr("class", "animate__animated " + randomAnimation());
}

let runMachine = () => {
  let quoteData = fetchQuote();
  quoteData.then((data) => {
    postQuote(data);
    makeTweetURL(data);
    setParaClass("#text");
  });
};

runMachine();
$("button").click(runMachine);
console.log($("#text"));
