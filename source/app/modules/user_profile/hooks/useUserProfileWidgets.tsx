// app/modules/user_profile/hooks/useUserProfileWidgets.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useUserProfileWidgets.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileWidgets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 3;
            var2 = var9[var5];
            var6 = undefined;
            var12 = var7.bind(var6)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot2;
            var10 = new Array(1);
            var10[0] = var2;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getId;
                    var3 = var1.bind(var2)();
                    var4 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 2:
                    return var1;
                }
            };
            var3 = var11.bind(var12)(var10, var2, var3);
            var2 = var9[var5];
            var12 = var7.bind(var6)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getPendingWidgets;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var11.bind(var12)(var10, var2);
            var5 = var9[var5];
            var7 = var7.bind(var6)(var5);
            var6 = var7.useStateFromStoresArray;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure1_slot3;
                    var3 = var4.getUserProfile;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = var3.widgets;
case 6:
                    if(!(var2 == var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = new Array(0);
case 8:
                    return var1;
case 4:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var5, var1, var4);
            var1 = var4;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = null;
            var1 = var4;
            if(!(var3 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();