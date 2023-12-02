const db = require("../config/connection");
const { Keyword, Section, Law, SubLaw, User } = require("../models");
const keywordSeeds = require("./keyword.json");
const lawSectionSeeds = require("./lawSection2.json");
const userSeeds = require("./user.json");
const cleanDb = require("./cleanDB");

db.once("open", async () => {
    await cleanDb("Keyword", "keywords-test");
    await cleanDb("Sublaw", "sublaw-test");
    await cleanDb("Law", "laws-test");
    await cleanDb("Section", "sections-test");
    await cleanDb("User", "users");

    await Keyword.create(keywordSeeds);
    await Law.create(lawSectionSeeds);
    await SubLaw.create(lawSectionSeeds);
    await Section.create(lawSectionSeeds);
    await User.create(userSeeds);

    console.log("Data has been seeded!");
    process.exit(0);
});
