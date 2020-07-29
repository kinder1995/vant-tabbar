/**
 * @author mzy
 * @date 2018/5/25
 */

/**
 * 是否为数组对象
 * @param array
 * @return {boolean}
 */
export function isArray (array) {
  return Object.prototype.toString.call(array) === '[object Array]'
}
