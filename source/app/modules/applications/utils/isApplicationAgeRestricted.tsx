// app/modules/applications/utils/isApplicationAgeRestricted.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/utils/isApplicationAgeRestricted.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isApplicationAgeRestricted(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getConfig;
            var3 = {};
            var6 = 'isApplicationAgeRestricted';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
            return var3;
case 2:
            var5 = _closure1_slot3;
            var4 = var5.getApplication;
            var3 = arg1;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isAgeRestrictedContentClassification;
            var5 = null;
            var5 = var5 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4.contentClassification;
case 4:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();