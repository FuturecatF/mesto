import { profileName, profileJob } from './index.js'
export class UserInfo {
  constructor({ name, job }) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    profileName.value = this._name.textContent;
    profileJob.value = this._job.textContent;
  }

  setUserInfo() {
    this._name.textContent = profileName.value;
    this._job.textContent = profileJob.value;
  }
}
