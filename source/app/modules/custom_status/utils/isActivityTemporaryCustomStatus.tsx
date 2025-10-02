// app/modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx
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
    var4 = var4.ActivityTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isActivityTemporaryCustomStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var1 = _closure1_slot0;
            var1 = var1.CUSTOM_STATUS;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.timestamps;
            var4 = null;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.end;
case 4:
            var1 = var4 != var3;
case 2:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var2.timestamps;
            var3 = null;
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var2.end;
case 8:
            var2 = 0;
            var1 = var3 > var2;
case 6:
            return var1;
        }
    };
    var3['isActivityTemporaryCustomStatus'] = var2;
    return var1;
})();