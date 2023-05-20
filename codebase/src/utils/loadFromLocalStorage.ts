export const loadFromLocalStorage = (key:string) => {
  
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  
};
