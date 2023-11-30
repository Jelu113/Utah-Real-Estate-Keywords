const db = require("../config/connection");
const { Keyword, Section, Laws, Sublaws, User } = require("../models");
const keywordSeeds = require("./keyword.json");
const lawSectionSeeds = require("./lawSection2.json");
const userSeeds = require("./user.json");
const cleanDb = require("./cleanDB");

db.once("open", async () => {
    await cleanDb("Keyword", "keyword");
    await cleanDb("Section", "section");
    await cleanDb("Laws", "laws");
    await cleanDb("Sublaws", "sublaws");
    await cleanDb("User", "users");

    await Keyword.create(keywordSeeds);
    await Section.create(lawSectionSeeds);
    await Laws.create(lawSectionSeeds);
    await Sublaws.create(lawSectionSeeds);
    await User.create(userSeeds);

    console.log("Data has been seeded!");
    process.exit(0);
});
