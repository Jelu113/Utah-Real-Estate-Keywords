const { gql } = require("graphql-tag");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        keywords: [Keyword]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Keyword {
        _id: ID
        keyword: String!
        section: [LawSection]
    }

    type LawSection {
        _id: ID
        section-number: String!
        section-title: String!
        section-clarifier: String!
        law-section: String!
    }

    type Query {
        users: [User]
        keyword: [Keyword]
        lawSection(_id: ID): LawSection
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addKeyword(keyword: String!): Keyword
        removeKeyword(keywordId: ID!): Keyword
    }

    
`