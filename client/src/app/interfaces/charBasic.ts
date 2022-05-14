export interface CharBasics {
  charID: string;
  results: {
    charID: number;
    charName: string;
    charHP: number;
    charXP: number;
    init: number;
    userID: number;
    Alignment: {
      alignID: number;
      alignName: string;
    },
    Race: {
      raceID: number;
      raceDesc: string;
    },
    CharLevels: {
      classLevel: number;
      CharClass: {
        className: string;
        classID: number;
      }
    }[]
  };
}
