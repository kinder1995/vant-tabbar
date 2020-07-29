/**
 * obj的相关操作
 * @author mzy
 * @date 2018/5/25
 */
import { isArray } from './array'

/**
 * 对象的深拷贝
 * @param obj
 * @returns {*}
 */
export function deepCopy (obj) {
  var sourceCopy = isArray(obj) ? [] : {}
  for (var item in obj) {
    sourceCopy[item] = isObject(obj[item]) ? deepCopy(obj[item]) : obj[item]
  }
  return sourceCopy
}

/**
 * 是否为对象
 * @param obj
 * @return {boolean}
 */
export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
