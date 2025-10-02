// app/modules/activities/getURLForApplication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var4 = function getNonTestModeUrlForApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = global;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var6 = var1.ACTIVITY_APPLICATION_HOST;
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = 'https://';
            var3 = arg1;
            var2 = '.';
            var1 = var5.bind(var4)(var3, var2, var6);
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var2 = function isUsingDevShelfActivityUrlOverride() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot1;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = var2.useActivityUrlOverride;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var2.activityUrlOverride;
            var3 = null;
            var1 = var3 != var4;
case 4:
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var2.activityUrlOverride;
            var2 = '';
            var1 = var2 !== var3;
case 6:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var7[var1];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var7[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/getURLForApplication.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function getURLForApplication(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot3;
            var3 = undefined;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var5 = _closure1_slot0;
            var1 = var5.inTestModeForEmbeddedApplication;
            var1 = var1.bind(var5)(var4);
            if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = _closure1_slot2;
            var1 = var1.bind(var3)(var4);
            _fun0003_ip = 12; continue _fun0003;
case 10:
            var3 = _closure1_slot0;
            var1 = var3.testModeOriginURL;
case 12:
            _fun0003_ip = 13; continue _fun0003;
case 8:
            var3 = _closure1_slot1;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var1 = var2.activityUrlOverride;
case 13:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['getNonTestModeUrlForApplication'] = var4;
    var3['isUsingDevShelfActivityUrlOverride'] = var2;
    return var1;
})();