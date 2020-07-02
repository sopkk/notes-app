export const generateUniqueId = () =>
  "_" + Math.random().toString(36).substr(2, 9);

export const deleteById = (array, id) =>
  array.filter((element) => element.id !== id);

export const filterByTitle = (array, query) =>
  array.filter((element) =>
    element.title.toLowerCase().includes(query.toLowerCase())
  );

export const getElemById = (array, id) => {
  return array.find((element) => element.id === id);
};

export const sortByNewestDate = (array) =>
  array
    .slice()
    .sort(
      (el1, el2) =>
        new Date(el2.createdAt).getTime() - new Date(el1.createdAt).getTime()
    );

export const addOrReplaceItem = (array, item) => {
  if (array && array.length === 0) {
    return [{ ...item, id: generateUniqueId() }];
  }

  if (containsItem(array, item)) {
    return array.map((el) =>
      el.id === item.id ? { ...item, createdAt: getTimestamp() } : el
    );
  }

  return [
    ...array,
    {
      ...item,
      id: generateUniqueId(),
      createdAt: getTimestamp(),
    },
  ];
};

const containsItem = (array, item) => !!array.find((el) => el.id === item.id);

export const getTimestamp = () => new Date().toString().slice(0, 24);
