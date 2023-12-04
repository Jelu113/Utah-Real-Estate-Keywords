const { Keyword, Section, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    //returns all users
    users: async () => {
      return User.find();
    },
    //returns all keywords
    keyword: async () => {
      return Keyword.find();
    },
    // //lawssection
    // lawSection: async (parent, { _id }) => {
    //     return Section.findOne({ _id: _id });
    // },
    section: async () => {
      return Section.find();
    },
    singleSection: async (parent, { section_number }) => {
      return Section.findOne({ section_number: section_number });
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addKeyword: async (_, { input }) => {
      try {
        const newKeyword = await Keyword.create({
          keyword: input.keyword,
          statute: input.statute,
          statuteURL: input.statuteURL,
          citations: input.citations
        });
        return newKeyword;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to add keyword");
      }
    },
    removeKeyword: async (parent, { keywordId }) => {
      return Keyword.findOneAndDelete({ _id: keywordId })
    },
  },
};

module.exports = resolvers;
