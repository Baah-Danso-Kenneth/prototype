import { User, UserProps } from './model';

export const saveToLocalStorage = (key: string, data: UserProps) => {
  const serializedData = JSON.stringify(data);
  localStorage.setItem(key, serializedData);
};

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
