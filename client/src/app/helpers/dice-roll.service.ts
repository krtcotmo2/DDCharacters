import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollService {

  constructor() { }

  sumRoll = (sided: number, rolled: number, sumOf = 0): number   => {
    if (sumOf === 0) {
      sumOf = rolled;
    }
    const arr = [];
    for (let d = 0; d < rolled; d++ ) {
      const aNum = Math.ceil(Math.random() * sided);
      arr.push(aNum);
    }
    return arr.sort((a, b) => a - b).reverse().reduce( (a, b, i) => i < sumOf ? a + b : a, 0);
  }

  highestValues = (sided: number, rolled: number, numRet = 1): number[] => {
    const arr = [];
    for (let d = 0; d < rolled; d++ ) {
      const aNum = Math.ceil(Math.random() * sided);
      arr.push(aNum);
    }
    return arr.sort((a, b) => a - b).reverse().slice(0, numRet);
  }

  lowestValues = (sided: number, rolled: number, numRet = 1): number[] => {
    const arr = [];
    for (let d = 0; d < rolled; d++ ) {
      const aNum = Math.ceil(Math.random() * sided);
      arr.push(aNum);
    }
    return arr.sort((a, b) => a - b).slice(0, numRet);
  }
}
