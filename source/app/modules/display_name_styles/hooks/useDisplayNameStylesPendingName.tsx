// app/modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDisplayNameStylesPendingName(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var8;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 2;
            var2 = var9[var2];
            var6 = undefined;
            var4 = var4.bind(var6)(var2);
            var2 = var4.useName;
            var2 = var2.bind(var4)(var7);
            var5 = _closure1_slot0;
            var4 = 3;
            var4 = var9[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var9 = _closure1_slot3;
            var4 = new Array(2);
            var4[0] = var9;
            var3 = _closure1_slot4;
            var4[1] = var3;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot3;
                    var2 = var4.getPendingChanges;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var4)(var1);
                    var8 = null;
                    if(!(var8 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.pendingGlobalName;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var2 = var2.pendingNickname;
                    if(!(var8 == var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var6 = _closure1_slot4;
                    var5 = var6.getNick;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var8 = var8 == var3;
                    var3 = undefined;
                    if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var7 = _closure2_slot0;
                    var3 = var7.id;
case 7:
                    var2 = var5.bind(var6)(var4, var3);
case 5:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var4, var1, var3);
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var3;
case 9:
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var3['useDisplayNameStylesPendingName'] = var2;
    return var1;
})();