import navcol from "./App.css";
import img from "./Mikey.png";
import a from "./a.jpg";
import b from "./b.jpg";
import c from "./c.jpg";
import d from "./d.jpg";
import e from "./e.jpg";
import f from "./f.jpg";
import g from "./g.jpg";
import h from "./h.jpg";
import i from "./i.jpg";

const App = () => {
  return (
    <div>
      <div id="home">
        <nav class="navbar navbar-expand-lg navbar-light navcol shadow-sm fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              Chester Wicipto
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#project">
                    Project
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section class="jumbotron text-center">
        <img src={img} alt="..." width="200" className="rounded-circle img-thumbnail" />
        <h1 class="display-4">Mikey</h1>
        <p class="lead">Leader</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,160L34.3,186.7C68.6,213,137,267,206,261.3C274.3,256,343,192,411,176C480,160,549,192,617,213.3C685.7,235,754,245,823,229.3C891.4,213,960,171,1029,133.3C1097.1,96,1166,64,1234,69.3C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="about">
        <div className="container p-5">
          <div className="row">
            <div className="col text-center mb-4">
              <h2>About me</h2>
            </div>
          </div>
          <div className="row justify-content-center fs-4 text-center">
            <div className="col-md-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            </div>
            <div className="col-md-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#87ceeb"
            fill-opacity="1"
            d="M0,128L34.3,128C68.6,128,137,128,206,133.3C274.3,139,343,149,411,165.3C480,181,549,203,617,224C685.7,245,754,267,823,256C891.4,245,960,203,1029,208C1097.1,213,1166,267,1234,282.7C1302.9,299,1371,277,1406,266.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="project" className="navcol">
        <div className="container p-5">
          <div className="row">
            <div className="col text-center mb-4">
              <h2>Project</h2>
            </div>
          </div>
          <div className="row justify-content-center fs-5 text-center">
            <div className="col-md-4 mb-4">
              <div class="card">
                <img src={a} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card">
                <img src={b} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card">
                <img src={e} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card">
                <img src={f} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card">
                <img src={h} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card">
                <img src={i} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,256L80,245.3C160,235,320,213,480,224C640,235,800,277,960,266.7C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="contact">
        <div className="container p-5">
          <div className="row">
            <div className="col text-center">
              <h2>Contact me</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nama Lengkap
                  </label>
                  <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label type="email" for="exampleInputPassword1" class="form-label">
                    Email
                  </label>
                  <input class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Pesan
                  </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  kirim
                </button>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#87ceeb"
            fill-opacity="1"
            d="M0,32L30,58.7C60,85,120,139,180,149.3C240,160,300,128,360,128C420,128,480,160,540,165.3C600,171,660,149,720,160C780,171,840,213,900,208C960,203,1020,149,1080,117.3C1140,85,1200,75,1260,58.7C1320,43,1380,21,1410,10.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
      <footer className="navcol text-center pb-4">
        <p>
          Created by <i class="bi bi-suit-heart-fill text-danger"></i> Lee H W{" "}
          <a href="https://www.instagram.com/lee_hongw/" className="fw-bold">
            @lee_hongw
          </a>{" "}
        </p>
      </footer>
    </div>
  );
};

export default App;
