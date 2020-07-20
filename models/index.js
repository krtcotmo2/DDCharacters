const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

console.log("process.env.NODE_ENV", process.env.NODE_ENV)

const Sequelize = require("sequelize");
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(config.database, process.env.dbUserName, process.env.dbPassword, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// pass your sequelize config here
const Race = require("./race");
const Character = require("./character");
const User = require("./user");
const CharClass = require('./charClass');
const CharLevels = require('./charLevels');
const Stats = require('./stats');
const Feat = require('./feat');
const CharFeat = require('./charFeats');
const Skill = require('./skills');
const CharSkill = require('./charSkills');
const Save = require('./saves');
const CharSave = require('./charSaves');
const ToHits = require('./toHits');
const CharToHits = require('./charToHits');
const CharEquip = require('./charEquip');
const Alignments = require('./alignments');
const CharACs = require('./charAC');
const CharNotes = require('./notes');
const NoteItems = require('./noteItem');

const models = {
  Race: Race.init(sequelize, Sequelize),
  Character: Character.init(sequelize, Sequelize),
  User: User.init(sequelize, Sequelize),
  CharClass: CharClass.init(sequelize, Sequelize),
  CharLevels: CharLevels.init(sequelize, Sequelize),
  Stats: Stats.init(sequelize, Sequelize),
  Feat: Feat.init(sequelize, Sequelize),
  CharFeat: CharFeat.init(sequelize, Sequelize),
  Skill: Skill.init(sequelize, Sequelize),
  CharSkill: CharSkill.init(sequelize, Sequelize),
  CharEquip: CharEquip.init(sequelize, Sequelize),
  Save: Save.init(sequelize, Sequelize),
  CharSave: CharSave.init(sequelize, Sequelize),
  ToHits: ToHits.init(sequelize, Sequelize),
  CharToHits: CharToHits.init(sequelize, Sequelize),
  Alignments: Alignments.init(sequelize, Sequelize),
  CharACs: CharACs.init(sequelize, Sequelize),
  CharNotes: CharNotes.init(sequelize, Sequelize),
  NoteItems: NoteItems.init(sequelize, Sequelize),
};
models.Character.hasOne(Race, {foreignKey: 'raceID', sourceKey: 'raceID'})
models.Character.hasOne(User, {foreignKey: 'userID', sourceKey: 'userID'})
models.Character.hasOne(Alignments, {foreignKey: 'alignID', sourceKey: 'alignID'})
models.Character.hasMany(CharLevels, {foreignKey: 'charID', sourceKey: 'charID'})
models.Character.hasMany(CharACs, {foreignKey: 'charID', sourceKey: 'charID'})
models.Character.hasMany(CharFeat, {foreignKey: 'charID', sourceKey: 'charID'})
models.Character.hasMany(CharSkill, {foreignKey: 'charID', sourceKey: 'charID'})
models.Character.hasMany(CharSave, {foreignKey: 'charID', sourceKey: 'charID'})
models.Character.hasMany(CharEquip, {foreignKey: 'charID', sourceKey: 'charID'})
models.Character.hasMany(CharToHits, {foreignKey: 'charID', sourceKey: 'charID'})
models.CharLevels.hasOne(CharClass, {foreignKey: 'classID', sourceKey: 'classID'})
models.CharFeat.hasOne(Feat, {foreignKey: 'id', sourceKey: 'featID'})
models.CharSkill.hasOne(Skill, {foreignKey: 'skillID', sourceKey: 'skillID'})
models.CharSave.hasOne(Save, {foreignKey: 'saveID', sourceKey: 'saveID'})
models.CharToHits.hasOne(ToHits, {foreignKey: 'toHitID', sourceKey: 'toHitID'})

Object.values(models)
.filter(model => typeof model.associate === "function")
.forEach(model => model.associate(models));

const db = {
...models,
sequelize
};

module.exports = db;