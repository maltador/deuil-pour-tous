import React from 'react';
import DefuntSuggestion from './DefuntSuggestion';
import './styles/Suggestion.css'

function Suggestion() {
    return (
        <div className="suggestion">
            <div className="suggestion_titre">
                <h3>Suggestions</h3>
                <button>Voir tout</button>
            </div>            
            <div className="suggestion_body">
                <DefuntSuggestion
                    profilPic={'https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max' +
                        '&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                    pseudo={'Martin Matin'}
                    timestamp={'4j'}
                />
            </div>
        </div>
    )
}

export default Suggestion