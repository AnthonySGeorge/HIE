export const state = () => ({
  disciplines: [
    {
      id: 1,
      title: 'General principles and scheme governance',
    },
    {
      id: 2,
      title: 'Sustainability and Environment',
    },
    {
      id: 3,
      title: 'Road layout',
    },
    {
      id: 4,
      title: 'Pavement',
    },
    {
      id: 5,
      title: 'Structures and Bridges',
    },
    {
      id: 6,
      title: 'Drainage',
    },
    {
      id: 7,
      title: 'Geotechnics',
    },
    {
      id: 8,
      title: 'Control & Communications Technology',
    },
    {
      id: 9,
      title: 'Road Lighting',
    },
  ],
  lifecycles: [
    {
      id: 1,
      title: 'General Information',
    },
    {
      id: 2,
      title: 'Appraisal',
    },
    {
      id: 3,
      title: 'Design',
    },
    {
      id: 4,
      title: 'Construction',
    },
    {
      id: 5,
      title: 'Maintenance and Operation',
    },
    {
      id: 6,
      title: 'Inspection and Assessment',
    },
    {
      id: 7,
      title: 'Disposal',
    },
  ],
  bcItems: [
    {
      text: 'Standards for highways',
      href: 'http://www.standardsforhighways.co.uk',
    },
    {
      text: 'DMRB',
      href: '#',
    },
  ],
  documents: [],
  // disciplines: [],
});

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
