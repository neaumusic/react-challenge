const api = {
  getBallotData() {
    return fetch("/api/getBallotData").then((res) => {
      return res.json().then((ballotData) => ({
        categories: parseCategories(ballotData.items),
      }));
    });
  },
};

function parseCategories(categories) {
  return categories.map((category) => ({
    categoryId: category.id,
    categoryNominees: parseNominees(category.items),
    categoryTitle: category.title,
  }));
}

function parseNominees(nominees) {
  return nominees.map((nominee) => ({
    nomineeId: nominee.id,
    nomineeTitle: nominee.title,
    nomineePhotoUrl: nominee.photoUrL,
  }));
}

export default api;
