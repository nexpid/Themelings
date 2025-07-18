// app/modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNotificationsTabBadge() {
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 2;
        var3 = var7[var3];
        var5 = undefined;
        var8 = var4.bind(var5)(var3);
        var6 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.localItems;
            return var1;
        };
        var6 = var6.bind(var8)(var4, var3);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot1;
        var3 = 3;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useExperiment;
        var3 = {};
        var7 = 'Notifications Tab Badge';
        var3['location'] = var7;
        var3 = var4.bind(var5)(var3);
        var5 = var3.showInDMs;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = arg1;
                    var1 = _closure2_slot1;
                    var1 = !var1;
                    if(!var1) { _fun0001_ip = 62; continue _fun0001 }
 16:
                    var5 = var2.type;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var6 = var6[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var6);
                    var4 = var4.NotificationCenterLocalItems;
                    var4 = var4.INCOMING_FRIEND_REQUESTS;
                    var1 = var5 === var4;
 62:
                    if(var1) { _fun0001_ip = 124; continue _fun0001 }
 65:
                    var3 = _closure2_slot1;
                    var3 = !var3;
                    if(!var3) { _fun0001_ip = 121; continue _fun0001 }
 75:
                    var5 = var2.type;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var6 = var6[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var6);
                    var4 = var4.NotificationCenterLocalItems;
                    var4 = var4.INCOMING_GAME_FRIEND_REQUESTS;
                    var3 = var5 === var4;
 121:
                    var1 = var3;
 124:
                    if(var1) { _fun0001_ip = 173; continue _fun0001 }
 127:
                    var3 = var2.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.NotificationCenterLocalItems;
                    var2 = var2.MOBILE_NATIVE_UPDATE_AVAILABLE;
                    var1 = var3 === var2;
 173:
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