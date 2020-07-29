/**
 * 页面的一些常用方法封装
 * @author mzy
 * @date 2018/5/21
 */

/**
 * 添加滚动监听
 * @param listener
 */
export function addScrollListener (listener) {
  window.addEventListener('scroll', listener)
}

/**
 * 移除滚动监听
 * @param listener
 */
export function removeScrollListener (listener) {
  window.removeEventListener('scroll', listener)
}

/**
 * 到达页面底部
 * @return {boolean} true is on page bottom, false reverse.
 */
export function reachPageBottom () {
  return window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight
}

/**
 * 滚动到页面顶部
 */
export function scrollToTop () {
  wx.pageScrollTo({
    scrollTop: 0,
    duration: 300
  })
}
