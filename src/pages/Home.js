import React from "react";
import DefuntCard from "../components/defunt/DefuntCard";
import DefuntCardSkeleton from "../components/skeletons/DefuntCardSkeleton";
import "./styles/home.css";
import { Link } from "react-router-dom";
import imgBackground from "../images/cimetiere05.jpg";
import Thread from "../components/cimetiere/Thread";

function Home() {
  //const userData= useSelector((state)=> state.userReducer);
  // const creerDefunt= ()=>{
  //     console.log(userData);
  //     alert("Utilisateur: "+userData.displayName+" est connecté.");
  //     console.log(Object.keys(userData).length);
  // }
  
  return (
    <>
      <section
        className="banniere section"
        id="banniere"
        style={{ backgroundImage: `url(${imgBackground})` }}
      >
        <div className="contenuHome">
          <h2>DEUIL POUR TOUS</h2>
          <p>Je ne saurais perdre ton amour</p>
          <p>Merci de donner le messages aux générations futures</p>
          <Link to="/new-defunt" className="btn1">
            Créer un défunt
          </Link>
          <Link to="/login" className="btn2">
            Se connecter
          </Link>
        </div>
      </section>
      <section className="trending section" id="trending">
        <div className="titre">
          <h2 className="titre-texte">Les plus recents défunt</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Thread page="home"/>        
        <div className="titre">
          <div>
            <Link to="/cimetiere" className="btn1">
              Voir plus
            </Link>
          </div>
        </div>
      </section>
      <section className="contact section" id="contact">
        <div className="titre noir">
          <h2 className="titre-texte">Contact</h2>
          <p>Pour tous contact: (+243 816 695 462, +243 856 695 462 )</p>
        </div>
        <div className="contactform">
          <h3>Envoyer un message</h3>
          <div className="inputboite">
            <input type="text" placeholder="Nom" />
          </div>
          <div className="inputboite">
            <input type="text" placeholder="email" />
          </div>
          <div className="inputboite">
            <textarea placeholder="message"></textarea>
          </div>
          <div className="inputboite">
            <input type="submit" value="envoyer" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
