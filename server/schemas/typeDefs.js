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

    type Keyword {
        _id: ID!
        keyword: String!
        section: [LawSection]
    }

    type LawSections {
        law_section: String
        law_section_a: String
        law_section_b: String 
        law_section_c: String
        law_section_d: String
        law_section_e: String
        law_section_f: String
        law_section_g: String
    }

    type LawSection {
        _id: ID!
        section_number: String!
        section_title: String!
        section_clarifier: String!
        law_sections: [LawSections]
    }

    

    type Query {
        users: [User]
        keyword: [Keyword]
        lawSection(_id: ID!): LawSection
        lawSections: [LawSection]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addKeyword(keyword: String!): Keyword
        removeKeyword(keywordId: ID!): Keyword
    }
`;

module.exports = typeDefs;