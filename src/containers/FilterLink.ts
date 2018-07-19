import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todos';
import Link from '../components/Link';
import { Dispatch } from '../../node_modules/redux';

interface Todoprops {
  filter: string;
}

const mapStateToProps = (state: any, ownProps: Todoprops) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Todoprops) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

const filterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default filterLink;
