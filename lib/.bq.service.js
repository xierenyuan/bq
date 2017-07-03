import {get, post} from 'http'
export default class XXService {
  getAll(params) {
    return get('url', params)
  }
}
