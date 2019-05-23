import { connect } from 'react-redux';
import ImageList from '../components/ImageList';

const mapStateToProps = (state) => {
  return {
    images: state
  };
};

export default connect(mapStateToProps)(ImageList);
