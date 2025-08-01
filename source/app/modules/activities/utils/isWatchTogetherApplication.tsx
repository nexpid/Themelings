// app/modules/activities/utils/isWatchTogetherApplication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.WATCH_YOUTUBE_DEV_APP_ID;
    var _closure1_slot0 = var7;
    var7 = var4.WATCH_YOUTUBE_PROD_APP_ID;
    var _closure1_slot1 = var7;
    var4 = var4.WATCH_YOUTUBE_QA_APP_ID;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isWatchTogetherApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isWatchTogetherApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 53; continue _fun0001 }
 12:
            var5 = _closure1_slot0;
            var3 = new Array(3);
            var3[0] = var5;
            var5 = _closure1_slot2;
            var3[1] = var5;
            var2 = _closure1_slot1;
            var3[2] = var2;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
 53:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();