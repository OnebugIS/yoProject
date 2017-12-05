import { createHashHistory } from '$router';

const yoHistory = createHashHistory({
    uniqueKey: 'create-unique-hybridId'
    // spa: true // 默认是多页的，如果需要强制开启spa，可以设置这个属性为 true
});

export default yoHistory;
