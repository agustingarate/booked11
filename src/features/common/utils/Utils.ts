export const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toLocaleUpperCase();
};

export const firstLetterToUpperCase = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
