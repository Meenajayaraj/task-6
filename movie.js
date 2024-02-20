class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
    get ratingMovie() {
        return this.rating;
  }
}
let movieArr = [
  new movie("captain marvel", "Marvel Studios", "U"),
  new movie("Moana", "Disney","PG"),
  new movie("UP", "pixar", "PG-13"),
];
console.log(movieArr);
let casinoRoyale = new movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);