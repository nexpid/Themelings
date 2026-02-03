// app/modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNotificationsTabBadge() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot3;
            var1 = var1.localItems;
            return var1;
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 3;
                    var1 = var1[var6];
                    var5 = undefined;
                    var1 = var7.bind(var5)(var1);
                    var1 = var1.NotificationCenterLocalItems;
                    var1 = var1.INCOMING_FRIEND_REQUESTS;
                    var1 = var4 === var1;
                    if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = var3.type;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var8.bind(var5)(var4);
                    var4 = var4.NotificationCenterLocalItems;
                    var4 = var4.INCOMING_GAME_FRIEND_REQUESTS;
                    var1 = var7 === var4;
case 2:
                    if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = var3.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.NotificationCenterLocalItems;
                    var2 = var2.MOBILE_NATIVE_UPDATE_AVAILABLE;
                    var1 = var3 === var2;
case 4:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = var1.length;
            return var1;
        };
        var3 = var3.bind(var4)(var1, var2);
        var1 = {};
        var1['value'] = var3;
        var2 = 0;
        var2 = var3 > var2;
        var1['showDot'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();