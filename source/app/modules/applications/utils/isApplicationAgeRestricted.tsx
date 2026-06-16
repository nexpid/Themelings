// app/modules/applications/utils/isApplicationAgeRestricted.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function isAgeRestrictedContentClassification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var1 = null;
            var1 = var1 != var8;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = 2;
            var2 = var6[var9];
            var4 = undefined;
            var7 = var5.bind(var4)(var2);
            var3 = var7.contentClassificationToAgeRestriction;
            var2 = {};
            var9 = var6[var9];
            var9 = var5.bind(var4)(var9);
            var9 = var9.ContentClassificationVariant;
            var9 = var9.MINIMAL;
            var2['type'] = var9;
            var2['data'] = var8;
            var3 = var3.bind(var7)(var2);
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.AgeRestrictionStatus;
            var2 = var2.ADULT;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/utils/isApplicationAgeRestricted.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function isApplicationAgeRestricted(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var5 = var4.bind(var3)(var2);
            var4 = var5.getConfig;
            var2 = {};
            var6 = 'isApplicationAgeRestricted';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = false;
            return var2;
case 4:
            var5 = _closure1_slot3;
            var4 = var5.getApplication;
            var2 = arg1;
            var4 = var4.bind(var5)(var2);
            var2 = _closure1_slot4;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var4.contentClassification;
case 6:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['isAgeRestrictedContentClassification'] = var2;
    return var1;
})();