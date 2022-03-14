export const query = `query {
    characters(page: 1, filter: { name: "morty" }) {
      results {
        name
        species
        status
        id
      }
    }
  }`;
