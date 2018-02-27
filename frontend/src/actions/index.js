import * as types from '../constants/ActionTypes'

export function viewCategory({name, url}) {
  return {
    type: types.VIEW_CATEGORY,
    name,
    url
  };
}