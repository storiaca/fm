import { MenuItems } from '../components/MenuItems';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    items: state.item
  };
};

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);
