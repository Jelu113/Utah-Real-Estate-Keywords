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
        section: [Section]
        laws: [Laws]
        sublaws: [Sublaws]
    }

    type Section {
        section_number: String!
        section_title: String!
        section_clarifier: String!
        laws: [Laws]
    }

    type Laws {
        name: String!
        sublaws: [Sublaws]
    }

    type Sublaws {
        sublaws: [String]
    }

    type Query {
        users: [User]
        keyword: [Keyword]
        keywordSection(section: String!): Keyword
        section: [Section]
        singleSection(_id: ID!): Section
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addKeyword(keyword: String!, section: ID!, laws: ID!, sublaws: ID! ): Keyword
        removeKeyword(keywordId: ID!): Keyword
    }
`;

module.exports = typeDefs;