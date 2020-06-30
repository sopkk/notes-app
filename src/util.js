export const generateUniqueId = () =>
  "_" + Math.random().toString(36).substr(2, 9);

export const deleteById = (array, id) =>
  array.filter((element) => element.id !== id);

export const filterByTitle = (array, query) =>
  array.filter((element) =>
    element.title.toLowerCase().includes(query.toLowerCase())
  );

export const sortByNewestDate = (array) =>
  array
    .slice()
    .sort(
      (el1, el2) =>
        new Date(el2.createdAt).getTime() - new Date(el1.createdAt).getTime()
    );
