import alt from '../alt';
import CinemasActions from '../actions/CinemasActions';

class CinemasStore {
  constructor() {
    this.bindActions(CinemasActions);
    this.cinemas = [];
  }

  onGetCinemasSuccess(data) {
    this.cinemas = data;
  }

}

export default alt.createStore(CinemasStore);