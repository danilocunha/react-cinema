import React from 'react';
import Select from 'react-select';
import CinemasStore from '../stores/CinemasStore';
import CinemasActions from '../actions/CinemasActions';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = CinemasStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CinemasStore.listen(this.onChange);
    this.cinemas = CinemasActions.getCinemas();
    console.log("Kd a porra");
  }

  componentWillUnmount() {
    CinemasStore.unlisten(this.onChange);
    $(document.body).removeClass();
  }

  componentDidUpdate(prevProps) {
    
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="section">
				<h3 className="section-heading">Teste</h3>
				<Select ref="stateSelect" autofocus options={this.cinemas} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />
	  </div>
    );
  }
}

export default Cinemas;