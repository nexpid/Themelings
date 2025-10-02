// app/modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function isContentDismissed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.getDismissedGuildContent;
            var1 = arg2;
            var5 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.hasBit;
            var2 = arg1;
            var1 = var3.bind(var4)(var5, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = function toggleContentSeen(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var10 = arg2;
            var8 = arg3;
            var6 = arg5;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var8;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.updateUserGuildSettings;
            var9 = _closure1_slot6;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var9.FREQUENT_USER_ACTION;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var3 = var9.INFREQUENT_USER_ACTION;
case 6:
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var7 = _closure1_slot7;
                    var6 = _closure2_slot1;
                    var5 = _closure2_slot2;
                    var1 = undefined;
                    var5 = var7.bind(var1)(var6, var5);
                    var6 = _closure2_slot0;
                    if(!var6) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 7:
                    var6 = _closure2_slot0;
                    if(var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    if(!var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var5 = var4.removeBit;
                    _fun0003_ip = 14; continue _fun0003;
case 12:
                    var5 = var4.addBit;
case 14:
                    var4 = var3.dismissedGuildContent;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['dismissedGuildContent'] = var2;
                    return var1;
case 9:
                    var1 = false;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var8, var2, var3);
            var2 = arg4;
            if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 7;
            var2 = var12[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot4;
            var3 = var2.DISMISSIBLE_CONTENT_DISMISSED;
            var2 = {};
            var11 = _closure1_slot0;
            var9 = 8;
            var9 = var12[var9];
            var9 = var11.bind(var1)(var9);
            var9 = var9.DismissibleGuildContent;
            var9 = var9[var10];
            var2['type'] = var9;
            var2['guild_id'] = var8;
            var8 = null;
            if(!(var8 == var6)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var7 = _closure1_slot5;
            var6 = var7.UNKNOWN;
case 17:
            var2['action'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserSettingsDelay;
    var _closure1_slot6 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isContentDismissed'] = var4;
    var4 = function useIsContentDismissed(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot7;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsContentDismissed'] = var4;
    var4 = function markContentAsDismissed(arg1, arg2, arg3, arg4) {
        var7 = _closure1_slot8;
        var1 = undefined;
        var12 = true;
        var11 = arg1;
        var10 = arg2;
        var9 = arg3;
        var8 = arg4;
        var13 = undefined;
        var2 = var13[var7](var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var3['markContentAsDismissed'] = var4;
    var2 = function unmarkContentAsDismissed(arg1, arg2) {
        var5 = _closure1_slot8;
        var1 = undefined;
        var4 = false;
        var3 = arg1;
        var2 = arg2;
        var2 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var3['unmarkContentAsDismissed'] = var2;
    return var1;
})();