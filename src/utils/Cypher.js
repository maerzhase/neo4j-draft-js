
export const objectKeysToCypher = (attributes) => { // eslint-disable-line
  return Object.keys(attributes).map(key => `${key}: $${key} `).toString();
};
