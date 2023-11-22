const db = require("../config/connection");
const { Keyword, LawSection, User } = require("../models");
const keywordSeeds = require("./keyword.json");
const lawSectionSeeds = require("./lawSection.json");
const userSeeds = require("./user.json");
const cleanDb = require("./cleanDB");

db.once("open", async () => {
    await cleanDb("Keyword", "keyword");
    await cleanDb("LawSection", "lawsections");
    await cleanDb("User", "users");

    await Keyword.create(keywordSeeds);
    await LawSection.create(lawSectionSeeds);
    await User.create(userSeeds);

    console.log("Data has been seeded!");
    process.exit(0);
});
