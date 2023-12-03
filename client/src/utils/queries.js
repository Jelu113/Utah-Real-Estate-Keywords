import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      keywords {
        keyword
        section {
          _id
          section_number
          section_title
          section_clarifier
          law_section
        }
      }
    }
  }
`;

export const GET_LAW_SECTION_TITLES = gql`
  query Query {
    section {
      _id
      section_number
      section_title
    }
  }
`;

export const GET_KEYWORDS = gql`
  query keyword {
    keyword {
      _id
      keyword
    }
  }
`;

export const GET_ALL_KEYWORDS = gql`
  query Keyword {
    keyword {
      keyword
      statute
      statuteURL
      citations {
        section
        laws
        sublaws
      }
    }
  }
`;
