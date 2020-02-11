export const state = () => ({
  documents: [],
  disciplines: [],
});

console.log ('documents: ' + state.documents);

export const mutations = {
  SET_DOCUMENTS (state, documents) {
    state.documents = documents;
    console.log ('State-doc: ' + state.documents);
  },
  // SET_DISCIPLINES (state, disciplines) {
  //   state.disciplines = disciplines;
  //   console.log ('State-disc: ' + state.disciplines);
  // },
};

export const actions = {
  async loadDocuments({commit}) {
    let {data: documents} = await getData ('/search', this.$axios);
    // deserializeDocuments (documents);
    commit ('SET_DOCUMENTS', documents);
    console.log ('documents: ' + state.documents);
  },
  // async loadAllDisciplines({commit}) {
  //   let {data: disciplines} = await getData ('/search', this.$axios);
  //   deserializeDisciplines (disciplines);
  //   commit ('SET_DISCIPLINES', disciplines);
  // },
};
// const deserializeDocuments = function (documents) {
//   documents.forEach (d => {
//     d.NODE_ID = d.id;
//   });
// };

// const deserializeDisciplines = function (disciplines) {
//   disciplines.forEach (di => {
//     di.attributes.id = di.id;
//     di.attributes.DISCIPLINES = di.data.DISCIPLINES.map (d => d.id);
//   });
// };

const getData = async function (url, axios) {
  let response = await axios.get (url);
  return {
    data: response.data,
  };
};
