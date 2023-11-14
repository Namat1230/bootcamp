import './CardViewer.css';

import React from 'react';

class CardViewer extends React.Component {
    state = { currentCardIndex: 0, isFlipped: false };
  
    toggleCard = () => {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    };
  
    goToNextCard = () => {
      this.setState(prevState => ({ currentCardIndex: prevState.currentCardIndex + 1, isFlipped: false }));
    };
  
    goToPreviousCard = () => {
      this.setState(prevState => ({ currentCardIndex: prevState.currentCardIndex - 1, isFlipped: false }));
    };
  
    render() {
      const { currentCardIndex, isFlipped } = this.state;
      const { cards } = this.props;
  
      // Check if cards are defined and not empty
      if (!cards || cards.length === 0) {
        return <div>No cards available</div>;
      }
  
      const card = cards[currentCardIndex];
      const cardContent = isFlipped ? card.back : card.front;
  
      return (
 
        <div className="card-container">
          <div className="card" onClick={this.toggleCard}>
            {cardContent}
          </div>
          
          <div className="button-container">
            <button onClick={this.goToPreviousCard} disabled={currentCardIndex === 0}>Previous</button>
            <button onClick={this.goToNextCard} disabled={currentCardIndex === cards.length - 1}>Next</button>
          </div>
          <div className="progress-bar">
            Card {currentCardIndex + 1}/{cards.length}
          </div>
          <button onClick={this.props.switchMode}>Back to Editor</button>

        </div>
      );
      
    }
  }
  
  export default CardViewer;
  