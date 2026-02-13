// app/modules/intl/overrides/getDeviceSpecificString.tsx
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
    var4 = 'modules/intl/overrides/getDeviceSpecificString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getDeviceSpecificString(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var5.bind(var4)(var2);
            var2 = var5.isMetaQuest;
            var2 = var2.bind(var5)();
            var5 = null;
            var7 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'quest';
case 2:
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = arg1;
            var2 = var6[var7];
case 4:
            if(!(var5 != var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2;
case 6:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getDeviceSpecificString'] = var2;
    return var1;
})();