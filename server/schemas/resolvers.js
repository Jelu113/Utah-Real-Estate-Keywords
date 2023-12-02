const { Keyword, Section, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    //returns all users
    users: async () => {
      return User.find();
    },
<<<<<<< HEAD
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
        addKeyword: async (parent, args) => {
            return Keyword.create({ ...args });
        },
        removeKeyword: async (parent, { keywordId }) => {
            return Keyword.findOneAndDelete({ _id: keywordId })
        },

=======
    //returns all keywords
    keyword: async () => {
      return Keyword.find();
>>>>>>> 79d127d7b79fe31ece9ec2b228e04ef4e41a109c
    },
    // //lawssection
    // lawSection: async (parent, { _id }) => {
    //     return Section.findOne({ _id: _id });
    // },
    section: async () => {
      return Section.find();
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
    addKeyword: async (parent, { keyword }) => {
      return Keyword.create({ keyword });
    },
    removeKeyword: async (parent, { keywordId }) => {
      return Keyword.findOneAndDelete({ _id: keywordId });
    },
  },
};

module.exports = resolvers;
