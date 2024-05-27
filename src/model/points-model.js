import {getRandomPoint} from '../mock/point.js';
import {POINT_COUNT} from '../const.js';

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}