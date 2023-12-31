const db = require("../config/connection");
const { Keyword, Section, User } = require("../models");
const keywordSeeds = require("./keyword.json");
const lawSectionSeeds = require("./lawSection.json");
const userSeeds = require("./user.json");
const cleanDb = require("./cleanDB");

db.once("open", async () => {
    await cleanDb("Keyword", "keywords");
    await cleanDb("Section", "sections");
    await cleanDb("User", "users");

    await Keyword.create(keywordSeeds);
    await Section.create(lawSectionSeeds);
    await User.create(userSeeds);

    console.log("Data has been seeded!");
    process.exit(0);
});
