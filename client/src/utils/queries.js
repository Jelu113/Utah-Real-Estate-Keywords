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
  query Section {
  section {
    _id
    section_number
    section_title
    section_clarifier
    law_sections {
      _id
      law
      law_section_a
      law_section_b
      law_section_c
      law_section_d
      law_section_e
      law_section_f
      law_section_g
      law_section_h
      law_section_i
      law_section_j
      law_section_k
      law_section_l
      law_section_m
      law_section_n
      law_section_o
      law_section_p
      law_section_q
      law_section_r
      law_section_s
      law_section_t
      law_section_u
      law_section_v
      law_section_w
      law_section_x
      law_section_y
      law_section_z
    }
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
