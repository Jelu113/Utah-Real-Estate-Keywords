const db = require("../config/connection");
const { Keywords, Section, User } = require("../models");
const keywordSeeds = require("./keyword.json");
const lawSectionSeeds = require("./lawSection.json");
const userSeeds = require("./user.json");
const cleanDb = require("./cleanDB");

db.once("open", async () => {
    await cleanDb("Keywords", "keywords");
    await cleanDb("Section", "lawSection");
    await cleanDb("User", "users");

    await Keywords.create(keywordSeeds);
    await Section.create(lawSectionSeeds);
    await User.create(userSeeds);

    console.log("Data has been seeded!");
    process.exit(0);
});
