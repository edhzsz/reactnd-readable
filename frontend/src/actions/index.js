export const VIEW_CATEGORY;

export function viewCategory({name, url}) {
  return {
    type: VIEW_CATEGORY,
    name,
    url
  };
}