import React from 'react';
import {
  BackgroundOn,
  BackgroundOff,
  ButtonOn,
  ButtonOff,
  Main,
} from '../Style';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestApiData } from '../../actions';

class Home extends React.Component {
  item = (x, i) => (
    <div key={i}>
      <h1>{x.title}</h1>
    </div>
  );

  render() {
    const { items = [] } = this.props.data;
    return (
      <Main>
        {items.length > 0 ? (
          <BackgroundOn>
            <ButtonOn>Search</ButtonOn>
            <h1>{items.map(this.item)}</h1>
          </BackgroundOn>
        ) : (
          <BackgroundOff>
            <ButtonOff onClick={() => this.props.requestApiData()}>
              Search
            </ButtonOff>
          </BackgroundOff>
        )}
      </Main>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
