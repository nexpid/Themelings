// app/modules/quests/native/BountiesModal/bountiesSoftCapPreload.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/quests/native/BountiesModal/bountiesSoftCapPreload.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = 500000;
    var3['SOFT_CAP_PRELOAD_MAX_BITRATE'] = var2;
    var2 = {'minBufferMs': 1000, 'maxBufferMs': 3000, 'bufferForPlaybackMs': 500, 'bufferForPlaybackAfterRebufferMs': 1000};
    var3['SOFT_CAP_PRELOAD_BUFFER_CONFIG'] = var2;
    var2 = 2;
    var3['SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC'] = var2;
    return var1;
})();