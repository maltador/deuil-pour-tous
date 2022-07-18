import React from 'react';
import DefuntCard from '../components/defunt/DefuntCard';
import DefuntCardSkeleton from '../components/skeletons/DefuntCardSkeleton';
import './styles/home.css';
import { Link } from 'react-router-dom';
import imgBackground from '../images/cimetiere05.jpg';

function Home() {
    //const userData= useSelector((state)=> state.userReducer);
    // const creerDefunt= ()=>{
    //     console.log(userData);
    //     alert("Utilisateur: "+userData.displayName+" est connecté.");
    //     console.log(Object.keys(userData).length);
    // }
    return (
        <>
            <section className="banniere section" id="banniere" style={{ backgroundImage: `url(${imgBackground})` }}>
                <div className="contenuHome">
                    <h2>DEUIL POUR TOUS</h2>
                    <p>Je ne saurais perdre ton amour</p>
                    <p>Merci de donner le messages aux générations futures</p>
                    <Link to="/new-defunt" className='btn1'>Créer un défunt</Link>
                    <Link to="/login" className="btn2">Se connecter</Link>
                </div>
            </section>
            <section className="trending section" id="trending">
                <div className="titre">
                    <h2 className="titre-texte">Les plus recents défunt</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </div>
                <div className="contenuHome">
                    <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'KINKELA LWANGO PATRICK'} userName={'teddy'} />
                    <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'BISAKA NGUNDA SERGE'} userName={'teddy'} />
                    <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'BOPETO NZANGI MARTIN'} userName={'teddy'} />
                    <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'ALAKINI MINA CLAUDINE'} userName={'teddy'} />
                    <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'SANAMANGO YULA ERIC'} userName={'teddy'} />
                    <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'KITAMBALA MUTAMBAYI JEREMY'} userName={'teddy'} />
                    <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'ZIKO TUNA PIERRE'} userName={'teddy'} />
                    {/* <DefuntCard imgDefunt={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                        'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        imgUser={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                            '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                        title={'TSHILANDA WA TSHILANDA JOSETTE'} userName={'teddy'} /> */}
                    <DefuntCardSkeleton />

                </div>
                <div className="titre">
                    <div>
                        <Link to="/cimetiere" className="btn1">Voir plus</Link>
                    </div>
                </div>
            </section>
            <section className="contact section" id="contact">
                <div className="titre noir">
                    <h2 className="titre-texte">Contact</h2>
                    <p>
                        Pour tous contact: (+243 816 695 462, +243 856 695 462 )
                    </p>
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
    )
}

export default Home