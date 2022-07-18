import React from 'react';
import './styles/Cimetiere.css'
import imgBaniere from '../images/cimetiere01.jpg';
import DefuntCard from '../components/defunt/DefuntCard';

function Cimetiere() {
    return (
        <>
            <section style={{ backgroundImage: `url(${imgBaniere})` }} className="couverture">
                <div id="title" className="info-cover">
                    Trouver facilement les gens qui vous ont été cher dans cette rubrique.
                </div>
            </section>
            <section className="cim-content">
                {/* <div className="search-box">
                  <label>Rechercher defunt</label>
                  <input type="text"/> 
                </div> */}
                <div className="cards">
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
                </div>
            </section>
        </>
    )
}

export default Cimetiere