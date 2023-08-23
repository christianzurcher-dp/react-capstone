export default function About() {
  return (
    <div className="about">
      <div className="process">
        <h3>Process:</h3>
        For my capstone the general process of making it went something like
        this. I created the react app and I created the Navlink with links to
        the different pages I needed and then I built out the functionality for
        all the pages in order from what I thought would be most work to least
        work. Then after building out all the functionality I styled the app to
        my liking and then went through and made sure all the logic worked well
      </div>
      <div className="struggles">
        <h3>Struggles:</h3>
        the biggest struggle for me was definitely connecting all the components
        and making them work together. getting all the products to the products
        page and then each product having their own individual page and then
        making it so when you add to cart on those pages it connects back to the
        app which then passes the data into the cart so that the items show up
        there. But I will say getting everything to work feels really satisfying
        and I enjoyed doing this project a ton and I hope I can continue to
        build off of it more in the future and even use it to build out more
        personal projects.
      </div>
      <div className="favorite-language">
        <h3>Favorite language:</h3>
        My favorite coding language has to be JS the sheer amount of built in
        methods that u can use is just awesome. One example is I was working on
        building out a function so that all the prices round up to the nearest
        cent and finding it to be a kinda tedious tricky thing to do but then
        found out that I could use .toFixed(2) on any number and it does all the
        work for me. And it's the amount of little moments like that I've had
        over and over again in my time learning and using JS which is why I must
        say it is my favorite.
      </div>
    </div>
  );
}
