const gql = require("graphql-tag");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    keywords: [Keyword]
  }

  type Auth {
    token: ID!
    user: User
  }

    type Section {
        _id: ID!
        section_number: String!
        section_title: String
        section_clarifier: String
        law_sections: [LawSections]
    }

    type LawSections {
        _id: ID!
        law: String
        law_section_a: String
        law_section_b: String
        law_section_c: String
        law_section_d: String
        law_section_e: String
        law_section_f: String
        law_section_g: String
        law_section_h: String
        law_section_i: String
        law_section_j: String
        law_section_k: String
        law_section_l: String
        law_section_m: String
        law_section_n: String
        law_section_o: String
        law_section_p: String
        law_section_q: String
        law_section_r: String
        law_section_s: String
        law_section_t: String
        law_section_u: String
        law_section_v: String
        law_section_w: String
        law_section_x: String
        law_section_y: String
        law_section_z: String
    }

  type Keyword {
    _id: ID!
    keyword: String!
    statute: [String]
    statuteURL: String!
    citations: [Citations]
  }

    type Citations {
        section: String!
        laws: String
        sublaws: String
    }
    

    type Query {
        users: [User]
        keyword: [Keyword]
        section: [Section]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addKeyword(keyword: String!, statute: String!, statuteURL: String!, citations: [String]!): Keyword
        removeKeyword(keywordId: ID!): Keyword
    }
`;

module.exports = typeDefs;
