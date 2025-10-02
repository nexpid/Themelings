// app/modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUnreadSettingNotice(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var4 = 3;
        var4 = var11[var4];
        var10 = undefined;
        var6 = var7.bind(var10)(var4);
        var5 = var6.useShouldUseNewNotificationSystem;
        var4 = 'useShouldRenderBanner';
        var8 = var5.bind(var6)(var4);
        var _closure2_slot1 = var8;
        var6 = _closure1_slot4;
        var5 = var6.useState;
        var4 = '';
        var9 = var5.bind(var6)(var4);
        var5 = _closure1_slot3;
        var4 = 2;
        var9 = var5.bind(var10)(var9, var4);
        var4 = 0;
        var4 = var9[var4];
        var _closure2_slot2 = var4;
        var5 = 1;
        var5 = var9[var5];
        var _closure2_slot3 = var5;
        var12 = var6.useEffect;
        var5 = var3.id;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = function() {
            var3 = _closure2_slot3;
            var1 = undefined;
            var2 = '';
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var12.bind(var6)(var5, var9);
        var5 = 4;
        var5 = var11[var5];
        var9 = var7.bind(var10)(var5);
        var7 = var9.useStateFromStores;
        var5 = _closure1_slot1;
        var2 = 5;
        var2 = var11[var2];
        var2 = var5.bind(var10)(var2);
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getLastActionTime;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var7.bind(var9)(var5, var2);
        var7 = var6.useEffect;
        var5 = new Array(4);
        var5[0] = var4;
        var5[1] = var8;
        var5[2] = var2;
        var5[3] = var3;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot5;
                var4 = var5.has;
                var2 = _closure2_slot0;
                var2 = var2.type;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure2_slot2;
                var4 = _closure2_slot0;
                var4 = var4.id;
                var2 = var5 !== var4;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot1;
case 4:
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.maybeAutoUpgradeChannel;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var2 = var4.bind(var5)(var3);
case 6:
                if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = _closure2_slot3;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var7.bind(var6)(var2, var5);
        var5 = var6.useCallback;
        var2 = function() {
            var3 = _closure2_slot3;
            var2 = undefined;
            var1 = '';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = new Array(0);
        var2 = var5.bind(var6)(var2, var1);
        var1 = {};
        var3 = var3.id;
        var3 = var4 === var3;
        var1['showUnreadsNotice'] = var3;
        var1['clearUnreadsNotice'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();