const allRoles = {
  user: ['getPets', 'managePets'],
  refuge: ['getPets', 'managePets'],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
