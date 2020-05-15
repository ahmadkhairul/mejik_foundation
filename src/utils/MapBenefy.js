export const MapBenefy = data => {
  let users = [];
  data.categories.map(item => {
    const cat = item.name;
    item.beneficiaries.map(beneficary => {
      if (beneficary.firstName !== undefined) {
        users.push({
          id: beneficary.id,
          fullName: beneficary.firstName + " " + beneficary.lastName,
          category: cat
        });
      }
    });
  });
  return users;
};
