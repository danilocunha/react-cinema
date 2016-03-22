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


  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    CinemasStore.listen(this.onChange);
    this.cinemas = CinemasActions.getCinemas();
    console.log("Kd a porra");
    
  }

  componentWillUnmount() {
    CinemasStore.unlisten(this.onChange);
    //$(document.body).removeClass();
  }

  componentDidUpdate(prevProps) {
    
  }

  onChange(state) {
    this.setState(state);
  }

  updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.state.selectedCinema = newValue;
 	}

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {
  	//console.log(this.state.cinemas);

  	

  	let cinemasList = this.state.cinemas.map((cinema, index) => {
  		return  ( { value: cinema._id, label: cinema.nome } );
  	}
  	);
  	
  	console.log(cinemasList);
    return (
    	
      <div className="section">
      	<Select ref="stateSelect" autofocus options={cinemasList} simpleValue name="selected-cinema" value={this.state.selectedCinema} onChange={this.updateValue} searchable="true" />
				
	  </div>
    );
  }
}

export default Cinemas;