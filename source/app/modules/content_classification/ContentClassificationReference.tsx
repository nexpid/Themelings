// app/modules/content_classification/ContentClassificationReference.tsx
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
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_classification/ContentClassificationReference.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isAgeRestrictedClassificationReference(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 == var2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.loaded;
            var1 = !var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.isAgeRestrictedContentClassification;
            var2 = var2.data;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['isAgeRestrictedClassificationReference'] = var2;
    return var1;
})();