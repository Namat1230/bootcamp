import React from 'react';
import './CardEditor.css';

class CardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { front: '', back: '' };
  }

  addCard = () => {
    const { front, back } = this.state;
    if (front.trim() && back.trim()) {
      this.props.addCard({ front, back });
      this.setState({ front: '', back: '' });
    } else {
      alert("Both front and back of the card must be filled out.");
    }
  };

  deleteCard = index => this.props.deleteCard(index);

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <tr key={index}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td>
            <button onClick={() => this.deleteCard(index)}>Delete card</button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <h2>Card Editor</h2>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{cards}</tbody>
        </table>
        <br />
        <input
          name="front"
          onChange={this.handleChange}
          placeholder="Front of card"
          value={this.state.front}
        />
        <input
          name="back"
          onChange={this.handleChange}
          placeholder="Back of card"
          value={this.state.back}
        />
        <button onClick={this.addCard}>Add card</button>
        <hr />
        <button onClick={this.props.switchMode}>Go to card viewer</button>
      </div>
    );

}
}
export default CardEditor;