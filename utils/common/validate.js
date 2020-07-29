
import { isArray } from './array'
import { isObject } from './object'

/**
 * 是否为空数据
 * @param value
 * @returns {boolean} true为空，false不为空
 */
function isEmpty (value) {
  if (value === undefined || value === '' || value === null || (isArray(value) && value.length === 0) || (isObject(value) && Object.keys(value).length === 0)) {
    return true
  } else {
    return false
  }
}

//将方法暴露
module.exports = {
  isEmpty: isEmpty,
}
