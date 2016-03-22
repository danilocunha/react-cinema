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

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {
  	console.log(this.state.cinemas);
  	var options = [
    	{ value: 'one', label: 'One' },
    	{ value: 'two', label: 'Two' }
	];

    return (
      <div className="section">
				<Select
    				name="form-field-name"
    				value="one"
    				options={options}
    				onChange={this.logChange}
				/>
	  </div>
    );
  }
}

export default Cinemas;