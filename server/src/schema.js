const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get cats array for homepage grid"
    spaceCats: [SpaceCat]
  }

  "The SpaceCat Type"
  type SpaceCat {
    "The Cats ID"
    id: ID!
    "The Cats Name"
    name: String!
    "The Cats Age"
    age: Int
    "The Cats Missions"
    missions: [Mission]
  }

  "The Mission Type"
  type Mission {
    "The Mission ID"
    id: ID!
    "The Mission Name"
    name: String!
    "The Mission Description"
    description: String!
  }
`;
module.exports = typeDefs;
