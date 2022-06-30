import { getUrlParam } from './utils';

const genActiveRule = routerPrefix => location => location.pathname.startsWith(routerPrefix);
/**
 * 获取入口地址配置
 * @param {*} url
 * @param {*} name
 * @returns
 */
const getEntryUrl = (url, name = null) => {
  const entryUrl = getUrlParam('entryUrl') || null;
  const subName = getUrlParam('name') || null;
  return name === subName && entryUrl ? entryUrl : url;
};

const props = {
  header: false,
  sidebar: false,
  isParentSlider: true,
  userInfo: {},
};
export const subAppRouter = [
  {
    name: 'test1',
    entry: `http://localhost:8082/`,
    container: '#qianKunBox',
    activeRule: genActiveRule(`/test1`),
    props: {
      baseRouter: `/test1`,
      ...props,
    },
  },
  {
    name: 'test2',
    entry: `http://localhost:8083/`,
    container: '#qianKunBox',
    activeRule: genActiveRule(`/test2`),
    props: {
      baseRouter: `/test2`,
      ...props,
    },
  },
].map((i) => {
  i.entry = getEntryUrl(i.entry, i.name);
  return i;
});
