// eslint-disable-next-line
import React from "react";

function Home() {
  return (
    <main>
      <section id="carousel-slider-hero">
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to={3}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to={4}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to={5}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img
                className="d-block w-100 c-img"
                src="/Slider/Romania2.jpg"
                alt="Ghid mancare Romania"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="/pages/main page slider/romaniaguide.html">
                  <h1 className="title-slider">My Country of Origin Guide</h1>
                </a>
                <a href="/pages/main page slider/romaniaguide.html">
                  <p className="subtitle-slider">
                    Guide to traditional Romanian food
                  </p>
                </a>
              </div>
            </div>

            <div className="carousel-item c-item">
              <img
                className="d-block w-100 c-img"
                src="/Slider/Oua in sos de rosii.jpg"
                alt="Oua in sos de rosii"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="/pages/main page slider/breakfastinnovative.html">
                  <h1 className="title-slider">
                    An innovative way to make breakfast
                  </h1>
                </a>
                <a href="/pages/main page slider/breakfastinnovative.html">
                  <p className="subtitle-slider">Eggs cooked in tomato juice</p>
                </a>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                className="d-block w-100 c-img"
                src="/Slider/Legume.jpg"
                alt="Legume"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="/pages/main page slider/vegetablesprop.html">
                  <h1 className="title-slider">
                    The importance of consuming vegetables
                  </h1>
                </a>
                <a href="/pages/main page slider/vegetablesprop.html">
                  <p className="subtitle-slider">
                    Find out the benefits of regular consumption of vegetables!
                  </p>
                </a>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                className="d-block w-100 c-img"
                src="/Slider/Avocado.jpg"
                alt="Avocado"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="/pages/main page slider/avocadoprop.html">
                  <h1 className="title-slider">Avocado</h1>
                </a>
                <a href="/pages/main page slider/avocadoprop.html">
                  <p className="subtitle-slider">
                    The miracle fruit with fantastic nutritional properties.
                  </p>
                </a>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                className="d-block w-100 c-img"
                src="/Slider/Clatite.jpg"
                alt="Clatite"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="/pages/main page slider/pancakesfluffy.html">
                  <h1 className="title-slider">Pancakes</h1>
                </a>
                <a href="/pages/main page slider/pancakesfluffy.html">
                  <p className="subtitle-slider">
                    Find out the secret to the fluffiest pancakes.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section id="sectiunea2">
        <div className="d-flex justify-content-around">
          <div className="card1">
            <img
              src="/images/Sectiunea 1, pagina princip/aperitiv pag pag.jpeg"
              className="card-img-top"
              alt="Aperitiv"
              width={230}
              height={290}
            />
            <div className="card-body1">
              <h2 className="card-text1">Appetizer</h2>
              <p className="card-info1">
                "While you're eating your appetizer, don't worry about dessert."
              </p>
              <a href="/pages/main page cards/cappertiv.html">
                <button className="card-btn">Discover</button>
              </a>
            </div>
          </div>
          <div className="card1">
            <img
              src="/images/Sectiunea 1, pagina princip/mic dejun pag princ.jpg"
              className="card-img-top"
              alt="Mic dejun"
              width={220}
              height={290}
            />
            <div className="card-body1">
              <h2 className="card-text1">Breakfast</h2>
              <p className="card-info1">
                "Expect trouble and eat them all for breakfast."
              </p>
              <a href="/pages/main page cards/cbreakfast.html">
                <button className="card-btn">Discover</button>
              </a>
            </div>
          </div>
          <div className="card1">
            <img
              src="/images/Sectiunea 1, pagina princip/cina pag prin.JPG"
              className="card-img-top"
              alt="Cina"
              width={260}
              height={290}
            />
            <div className="card-body1">
              <h2 className="card-text1">Dinner</h2>
              <p className="card-info1">
                "Dinner is the moment when the magic happens in the kitchen."
              </p>
              <a href="/pages/main page cards/cdinner.html">
                <button className="card-btn">Discover</button>
              </a>
            </div>
          </div>
          <div className="card1">
            <img
              src="/images/Sectiunea 1, pagina princip/salata pag princ.JPG"
              className="card-img-top"
              alt="Salata"
              width={230}
              height={290}
            />
            <div className="card-body1">
              <h2 className="card-text1">Salad</h2>
              <p className="card-info1">
                "The salad refreshes without weakening and fortifies without
                irritating”.
              </p>
              <a href="/pages/main page cards/csalad.html">
                <button className="card-btn">Discover</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="food-cards">
        <div className="food-cards-title">
          <h6>The most popular recipes</h6>
        </div>
        <div className="food-cards-container">
          <div className="row g-3">
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/sarmale.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/F43D6CFF-99DE-45C7-BF41-47C86C481664_1_105_c.jpeg"
                    className="card-img-top"
                    alt="Sarmale"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Sarmale beef-pork</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep: 30 min</li>
                  <li className="list-group-item">Cook: 3h 30 min</li>
                  <li className="list-group-item">Total: 4h</li>
                </ul>
              </div>
            </div>
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/carbonara.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/Spaghete_carbonara.jpg"
                    className="card-img-top"
                    alt="Sarmale"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Spaghetti Carbonara</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep: 10 min</li>
                  <li className="list-group-item">Cook: 30 min</li>
                  <li className="list-group-item">Total: 45 min</li>
                </ul>
              </div>
            </div>
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/potato-stew.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/elena-leya-_jyB1ndDFQE-unsplash.jpg"
                    className="card-img-top"
                    alt="Sarmale"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Potato stew</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep: 20 min</li>
                  <li className="list-group-item">Cook: 1h</li>
                  <li className="list-group-item">Total: 1h 20 min</li>
                </ul>
              </div>
            </div>
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/sweet-sour-chicken.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/Pui dulce-acrisor cu legume.jpeg"
                    className="card-img-top"
                    alt="Sarmale"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Sweet and sour chicken</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep: 20 min</li>
                  <li className="list-group-item">Cook: 1h</li>
                  <li className="list-group-item">Total: 1h 20 min</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row g-3">
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/tart-cherries.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/alexander-mils-aiIANaSK9DQ-unsplash.jpg"
                    className="card-img-top"
                    alt="Sarmale"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Tart with cherries</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep: 30 min</li>
                  <li className="list-group-item">Cook: 1h 30 min</li>
                  <li className="list-group-item">Total: 2h</li>
                </ul>
              </div>
            </div>
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/stuffed croissants.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/C08AC6E5-ECEF-4B92-88B5-0BB01AB4F810_1_105_c.jpeg"
                    className="card-img-top"
                    alt="Cornulete umplute"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Cornulețe filled</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep: 30 min</li>
                  <li className="list-group-item">Cook: 1h 30 min</li>
                  <li className="list-group-item">Total: 2 ore</li>
                </ul>
              </div>
            </div>
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/pancakes.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/Clatite.jpg"
                    className="card-img-top"
                    alt="Clatite"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Fluffy pancakes</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep : 10 min</li>
                  <li className="list-group-item">Cook: 45 min</li>
                  <li className="list-group-item">Total: 55 min</li>
                </ul>
              </div>
            </div>
            <div className="col m-0 p-0">
              <div className="card">
                <a href="/pages/main page recipes/oreo cake.html">
                  <img
                    src="/images/Sectiunea 4, pagina princip/venti-views-lY89x1mpdaE-unsplash.jpg"
                    className="card-img-top"
                    alt="Sarmale"
                    width={145}
                    height={240}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Oreo Cake</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Prep: 15 min</li>
                  <li className="list-group-item">Cook:45 min</li>
                  <li className="list-group-item">Total: 1h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="carousel-slider">
        <div className="food-cards-title">
          <h6>The most popular recipes by category</h6>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide d-flex">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              Specifically Chinese <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            >
              Slow Cooking <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            >
              Fish <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={3}
              aria-label="Slide 3"
            >
              Pasta <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={4}
              aria-label="Slide 4"
            >
              Nutritious <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={5}
              aria-label="Slide 5"
            >
              Pita <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={6}
              aria-label="Slide 6"
            >
              Oven <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={7}
              aria-label="Slide 7"
            >
              Side dishes <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={8}
              aria-label="Slide 8"
            >
              Seasoning <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={9}
              aria-label="Slide 9"
            >
              30 minutes <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={10}
              aria-label="Slide 10"
            >
              With Oreo <i className="bi bi-arrow-right" />
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={11}
              aria-label="Slide 11"
            >
              30 minutes dessert
              <i className="bi bi-arrow-right" />
            </button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="/pages/main page recipes/specifically-Chinese.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/general-tso-chicken.jpg"
                  className="d-block"
                  alt="Specific chinezesc"
                  width={400}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/slow-cooking.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/Slow cooking/ardei.jpg"
                  className="d-block"
                  alt="Slow cooking"
                  width={350}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/peste.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/fish/grillsamon.jpg"
                  className="d-block"
                  alt="Peste"
                  width={500}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/paste.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/pasta/primavera.jpg"
                  className="d-block"
                  alt="Paste"
                  width={400}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/nutritive.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/nutrious/mediteranean.jpg"
                  className="d-block"
                  alt="Nutritive"
                  width={400}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/lipie.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/pita/TANDOORI CHICKEN PITA.jpg"
                  className="d-block"
                  alt="Lipie"
                  width={350}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/cuptor.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/oven/Lasagna.jpg"
                  className="d-block"
                  alt="Cuptor"
                  width={500}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/garnituri.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/side dishes/BRUSSELS SPROUTS.jpg"
                  className="d-block"
                  alt="Garnituri"
                  width={350}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/condimentare.html">
                <img
                  src="/images/Sectiunea 2, pagina princip/Condimentare.jpeg"
                  className="d-block"
                  alt="Condimentare"
                  width={450}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/30min.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/30 min/mediteraneanchicken.jpg"
                  className="d-block"
                  alt="30 min"
                  width={350}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/oreo.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/Oreo/oreocheesecake.jpg"
                  className="d-block"
                  alt="Cu Oreo"
                  width={350}
                  height={450}
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/pages/main page recipes/30mindesert.html">
                <img
                  src="/images/Sectiunea 4, pagina princip/dosar fără titlu/30 min dessert/lavacake.jpg"
                  className="d-block"
                  alt="30 min desert"
                  width={550}
                  height={450}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="about-me">
        <br />
        <h1>Welcome to my website!</h1>
        <h2>Home-made recipes and videos created especially for you.</h2>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src="/images/Sectiunea 3, pagina princip/IMG_1932.jpg"
                alt="Poza cu Cristina"
                width={240}
                height={240}
              />
            </div>
            <div className="col-6">
              <p>
                Welcome to my kitchen! My name is Aftode Cristina and I am a
                blogger and vlogger in the culinary industry. My page of TikTok
                was launched in 2022 and is the place where I share a passion
                for cooking. I like to try new things and test them with my
                family and friends. Each recipe is tried and tested by those
                close to me. I hope you enjoy my new site!
              </p>
              <div className="col-6">
                <img
                  src="/images/Sectiunea 3, pagina princip/signature.png"
                  width={150}
                  height={100}
                  alt="semnatura"
                />
                <a href="/pages/about me/aboutme.html">
                  <button className="btn btn--primary">Read more</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
      <br />
      <br />
      <br />
      <section id="favorite-recipe">
        <h1>My favorite meal</h1>
        <div className="image-container">
          <img src="/images/S5/sushi4.jpg" alt="sushi" />
          <div className="text-overlay">
            <h2>Sushi Recipe</h2>
            <p>Delicious sushi rolls with fresh ingredients</p>
            <ul>
              <li>Prep Time: 30 minutes</li>
              <li>Cook Time: 20 minutes</li>
              <li>Total Time: 50 minutes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="newsletter-section">
        <div className="newsletter-container">
          <div className="d-flex justify-content-center">
            <h1>Join the fun in the kitchen!</h1>
          </div>
          <div className="d-flex justify-content-center">
            <p>Stay tuned for my latest recipes and videos posted.</p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn-newsletter">Subscribe</button>
          </div>
        </div>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Thank you for subscribing to our newsletter!</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
