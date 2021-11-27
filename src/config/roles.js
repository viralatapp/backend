const allRoles = {
  user: ['getPets', 'managePets'],
  refuge: ['getPets', 'managePets'],
  admin: ['getUsers', 'manageUsers', 'getPets', 'managePets'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
