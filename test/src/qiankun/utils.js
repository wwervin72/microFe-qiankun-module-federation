export function getUrlParam(name) {
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  // 匹配目标参数
  const r = window.location.search.substr(1).match(reg);
  // 返回参数
  /* eslint-disable */
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

export function addProps(apps = [], obj = {}) {
  const newMap = [];
  apps.forEach((one) => {
    newMap.push({
      ...one,
      props: obj,
    });
  });
  return newMap;
}
