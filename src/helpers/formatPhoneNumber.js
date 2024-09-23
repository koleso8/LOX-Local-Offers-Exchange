export const formatPhoneNumber = phoneNumber => {
  return phoneNumber.replace(/[()\-\s]/g, '');
};
