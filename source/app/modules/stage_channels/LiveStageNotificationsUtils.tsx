// app/modules/stage_channels/LiveStageNotificationsUtils.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/LiveStageNotificationsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanSendStageStartNotification(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 49; continue _fun0001 }
 16:
                var5 = _closure1_slot3;
                var4 = var5.can;
                var3 = _closure1_slot4;
                var3 = var3.MENTION_EVERYONE;
                var2 = _closure2_slot0;
                var1 = var4.bind(var5)(var3, var2);
 49:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanSendStageStartNotification'] = var4;
    var2 = function useDefaultSendStartStageNotificationToggle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = null;
            var4 = var2 == var1;
            var7 = undefined;
            var8 = undefined;
            if(var4) { _fun0002_ip = 23; continue _fun0002 }
 18:
            var8 = var1.guild_id;
 23:
            var _closure2_slot0 = var8;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 3;
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.useStateFromStores;
            var4 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getMemberCount;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var6.bind(var7)(var5, var3, var4);
            var1 = var2 == var1;
            if(var1) { _fun0002_ip = 116; continue _fun0002 }
 96:
            var2 = var2 == var4;
            if(var2) { _fun0002_ip = 113; continue _fun0002 }
 103:
            var3 = 50000;
            var2 = var4 > var3;
 113:
            var1 = !var2;
 116:
            return var1;
        }
    };
    var3['useDefaultSendStartStageNotificationToggle'] = var2;
    return var1;
})();