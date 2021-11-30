const allRoles = {
  user: [
    'getPets',
    'managePets',
    'getApplications',
    'manageApplications',
    'getAdoptions',
    'manageAdoptions',
    'getSponsorships',
    'manageSponsorships',
  ],
  refuge: [
    'getPets',
    'managePets',
    'getApplications',
    'manageApplications',
    'getAdoptions',
    'manageAdoptions',
    'getSponsorships',
    'manageSponsorships',
  ],
  admin: [
    'getUsers',
    'manageUsers',
    'getPets',
    'managePets',
    'getApplications',
    'manageApplications',
    'getAdoptions',
    'manageAdoptions',
    'getSponsorships',
    'manageSponsorships',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
