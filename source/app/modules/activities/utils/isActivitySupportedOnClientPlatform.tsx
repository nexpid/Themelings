// app/modules/activities/utils/isActivitySupportedOnClientPlatform.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isActivitySupportedOnClientPlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isActivitySupportedOnClientPlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = 0;
            var3 = var2[var4];
            var2 = undefined;
            var6 = var6.bind(var2)(var3);
            var3 = var6.isIOS;
            var7 = var3.bind(var6)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6[var4];
            var7 = var3.bind(var2)(var4);
            var4 = var7.isAndroid;
            var4 = var4.bind(var7)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 1;
            var1 = var8[var1];
            var1 = var7.bind(var2)(var1);
            var1 = var1.EmbeddedActivitySupportedPlatforms;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var1.WEB;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = var1.ANDROID;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var1 = 1;
            var1 = var6[var1];
            var1 = var3.bind(var2)(var1);
            var1 = var1.EmbeddedActivitySupportedPlatforms;
            var4 = var1.IOS;
case 7:
            var1 = null;
            var3 = var1 == var5;
            var2 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5.includes;
            var2 = var3.bind(var5)(var4);
case 8:
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();