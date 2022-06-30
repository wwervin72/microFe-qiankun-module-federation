/* eslint-disable */
import _ from 'lodash';
import { subAppRouter } from './config';

export const dealApps = (vm) => {
  const appArr = _.cloneDeep(subAppRouter);
  appArr.map((app) => {
    app.props.parentVm = vm;
    app.props.parentInstance = vm;
    app.props.parentWindow = window;
  });
  return appArr;
};
