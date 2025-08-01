// app/modules/nuf/native/useNotificationPermissionPrompt.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/useNotificationPermissionPrompt.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNotificationPermissionPrompt() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 5;
        var7 = var6[var4];
        var1 = undefined;
        var10 = var5.bind(var1)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var2 = _closure1_slot5;
            var1 = var2.isConnected;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var9.bind(var10)(var8, var7);
        var _closure2_slot0 = var7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var6 = var8.useStateFromStores;
        var4 = _closure1_slot6;
        var5 = new Array(2);
        var5[0] = var4;
        var4 = _closure1_slot4;
        var5[1] = var4;
        var4 = function() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot4;
            var1 = _closure1_slot6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var6.bind(var8)(var5, var4);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                if(!var2) { _fun0001_ip = 113; continue _fun0001 }
 10:
                var1 = _closure2_slot1;
                if(var1) { _fun0001_ip = 113; continue _fun0001 }
 17:
                var2 = _closure1_slot7;
                var5 = var2.promptSeen;
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 7;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var2 = var2.shouldRequestNotification;
                if(!var2) { _fun0001_ip = 66; continue _fun0001 }
 63:
                var2 = !var5;
 66:
                if(!var2) { _fun0001_ip = 113; continue _fun0001 }
 69:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = var1[var4];
                var6 = var2.bind(var3)(var5);
                var5 = var6.requestPermission;
                var5 = var5.bind(var6)();
                var1 = var1[var4];
                var2 = var2.bind(var3)(var1);
                var1 = false;
                var2['shouldRequestNotification'] = var1;
 113:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();