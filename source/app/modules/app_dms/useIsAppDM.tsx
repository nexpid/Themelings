// app/modules/app_dms/useIsAppDM.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/useIsAppDM.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsAppDM(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot0;
                var4 = var5.isDM;
                var1 = var4.bind(var5)();
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure2_slot0;
                var4 = var4.recipients;
                var5 = var4.length;
                var4 = 1;
                var1 = var4 === var5;
case 4:
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = _closure1_slot2;
                var4 = var5.getUser;
                var2 = _closure2_slot0;
                var6 = var2.recipients;
                var2 = 0;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = var2.bot;
case 8:
                var2 = true;
                var1 = var2 === var3;
case 6:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();