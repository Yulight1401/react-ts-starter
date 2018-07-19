import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todos';
import Link from '../components/Link';
import { Dispatch } from '../../node_modules/redux';

interface Linkprops {
  filter: string;
}

const mapStateToProps = (state: any, ownProps: Linkprops) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Linkprops) => {
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
