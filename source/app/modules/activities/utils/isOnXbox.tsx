// app/modules/activities/utils/isOnXbox.tsx
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
    var4 = var4.XBOX_ACTIVITY_APPLICATION_ID;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityGamePlatforms;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isOnXbox.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isOnXbox(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var4.application_id;
case 2:
            var1 = _closure1_slot0;
            var1 = var6 === var1;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.platform;
case 6:
            var2 = _closure1_slot1;
            var2 = var2.XBOX;
            var1 = var3 === var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();