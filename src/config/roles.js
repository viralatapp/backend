const allRoles = {
  user: [
    'getPets',
    'managePets',
    'getApplications',
    'manageApplications',
    'manageAdoptions',
    'manageAdoptions',
    'getSponsorships',
    'manageSponsorships',
  ],
  refuge: [
    'getPets',
    'managePets',
    'getApplications',
    'manageApplications',
    'manageAdoptions',
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
    'manageAdoptions',
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
