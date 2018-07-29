import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistListAll, artistList } from '../action/index';
import { bindActionCreators } from 'redux';
import Artistlist from '../components/artistlist';
import Search from '../components/search';

class HomeContainer extends Component {
  // state = {
  //   artists: []
  // };

  componentDidMount() {
    this.props.artistListAll();
    // if we didn't use bindActionCreators, we can simply use dispatch
    // this.props.dispatch(artistListAll());
  }

  getKeywords = event => {
    let key = event.target.value;

    this.props.artistList(key);
  };

  render() {
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <Artistlist artists={this.props.artists.artistList} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { artists: state.artists };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ artistListAll, artistList }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
