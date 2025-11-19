// app/modules/activities/utils/isOnMetaHorizon.tsx
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
    var4 = var4.META_PRESENCE_APPLICATION_ID;
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
    var4 = 'modules/activities/utils/isOnMetaHorizon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isOnMetaHorizon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = null;
            var1 = var6 == var5;
            var2 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.application_id;
case 2:
            var1 = _closure1_slot0;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6 == var5;
            var7 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var5.platform;
case 6:
            var2 = _closure1_slot1;
            var2 = var2.ANDROID;
            var2 = var7 === var2;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var5.platform;
case 10:
            var3 = _closure1_slot1;
            var3 = var3.IOS;
            var2 = var4 === var3;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();