import { initGlobalState } from 'qiankun';
import base from '../store/state';
// 初始化全局state
const actions = initGlobalState(base);

// 注册观察者函数
actions.onGlobalStateChange(() => {
  // store.commit(`global/${GLOBAL_TYPES.SET_SIDEBAR_STATUS}`, state.slider);
});

export default actions;
