// app/modules/notifications/NotificationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserNotificationSettings;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MuteUntilSeconds;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelNotificationSettingsFlags;
    var _closure1_slot7 = var4;
    var4 = {'ignoreMute': false, 'ignoreUnreadSetting': true, 'ignoreNotificationSetting': false};
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/NotificationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getMuteTimeOptions() {
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 4;
        var3 = var9[var4];
        var7 = undefined;
        var3 = var8.bind(var7)(var3);
        var6 = var3.intl;
        var5 = var6.string;
        var3 = var9[var4];
        var3 = var8.bind(var7)(var3);
        var3 = var3.t;
        var3 = var3.8ot6go;
        var3 = var5.bind(var6)(var3);
        var2['label'] = var3;
        var3 = _closure1_slot6;
        var1 = var3.MINUTES_15;
        var2['value'] = var1;
        var1 = new Array(6);
        var1[0] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.UMWBZm;
        var5 = var6.bind(var10)(var5);
        var2['label'] = var5;
        var5 = var3.HOURS_1;
        var2['value'] = var5;
        var1[1] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.QmYWtr;
        var5 = var6.bind(var10)(var5);
        var2['label'] = var5;
        var5 = var3.HOURS_3;
        var2['value'] = var5;
        var1[2] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.EpAXPD;
        var5 = var6.bind(var10)(var5);
        var2['label'] = var5;
        var5 = var3.HOURS_8;
        var2['value'] = var5;
        var1[3] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var10 = var5.intl;
        var6 = var10.string;
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var5 = var5.t;
        var5 = var5.755t4u;
        var5 = var6.bind(var10)(var5);
        var2['label'] = var5;
        var5 = var3.HOURS_24;
        var2['value'] = var5;
        var1[4] = var2;
        var2 = {};
        var5 = var9[var4];
        var5 = var8.bind(var7)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var9[var4];
        var4 = var8.bind(var7)(var4);
        var4 = var4.t;
        var4 = var4.r3LawM;
        var4 = var5.bind(var6)(var4);
        var2['label'] = var4;
        var3 = var3.ALWAYS;
        var2['value'] = var3;
        var1[5] = var2;
        return var1;
    };
    var3['getMuteTimeOptions'] = var4;
    var4 = function filterOverrides(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var4;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 25; continue _fun0001 }
 18:
            var2 = _closure1_slot8;
 25:
            var _closure2_slot1 = var2;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.keys;
            var3 = var2.bind(var3)(var4);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var1 = _closure2_slot0;
                    var2 = var1[var6];
                    var5 = var2.message_notifications;
                    var2 = _closure1_slot5;
                    var2 = var2.NULL;
                    var5 = var5 !== var2;
                    var8 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var9 = 6;
                    var2 = var2[var9];
                    var7 = undefined;
                    var12 = var8.bind(var7)(var2);
                    var8 = var12.hasFlag;
                    var1 = var1[var6];
                    var1 = var1.flags;
                    var11 = null;
                    var13 = var11 != var1;
                    var2 = 0;
                    if(!var13) { _fun0002_ip = 88; continue _fun0002 }
 85:
                    var2 = var1;
 88:
                    var1 = _closure1_slot7;
                    var1 = var1.UNREADS_ALL_MESSAGES;
                    var2 = var8.bind(var12)(var2, var1);
                    if(var2) { _fun0002_ip = 171; continue _fun0002 }
 107:
                    var8 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var1 = var1[var9];
                    var9 = var8.bind(var7)(var1);
                    var8 = var9.hasFlag;
                    var1 = _closure2_slot0;
                    var1 = var1[var6];
                    var1 = var1.flags;
                    var11 = var11 != var1;
                    var10 = 0;
                    if(!var11) { _fun0002_ip = 155; continue _fun0002 }
 152:
                    var10 = var1;
 155:
                    var1 = _closure1_slot7;
                    var1 = var1.UNREADS_ONLY_MENTIONS;
                    var2 = var8.bind(var9)(var10, var1);
 171:
                    var1 = _closure2_slot1;
                    var1 = var1.ignoreUnreadSetting;
                    var1 = !var1;
                    if(!var1) { _fun0002_ip = 190; continue _fun0002 }
 187:
                    var1 = var2;
 190:
                    if(var1) { _fun0002_ip = 215; continue _fun0002 }
 193:
                    var2 = _closure2_slot1;
                    var2 = var2.ignoreNotificationSetting;
                    var2 = !var2;
                    if(!var2) { _fun0002_ip = 212; continue _fun0002 }
 209:
                    var2 = var5;
 212:
                    var1 = var2;
 215:
                    if(var1) { _fun0002_ip = 276; continue _fun0002 }
 218:
                    var2 = _closure2_slot1;
                    var2 = var2.ignoreMute;
                    var2 = !var2;
                    if(!var2) { _fun0002_ip = 273; continue _fun0002 }
 234:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var4 = 7;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.computeIsMuted;
                    var3 = _closure2_slot0;
                    var3 = var3[var6];
                    var2 = var4.bind(var5)(var3);
 273:
                    var1 = var2;
 276:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['filterOverrides'] = var4;
    var4 = function useShouldUseNewNotificationSystem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 8;
            var2 = var5[var2];
            var3 = undefined;
            var7 = var4.bind(var3)(var2);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useNewNotifications;
                return var1;
            };
            var2 = var6.bind(var7)(var2, var1);
            var1 = 9;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var5 = var1.NotificationsExperiment;
            var4 = var5.useExperiment;
            var3 = {};
            var1 = arg1;
            var3['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            if(!var1) { _fun0003_ip = 116; continue _fun0003 }
 113:
            var1 = var2;
 116:
            return var1;
        }
    };
    var3['useShouldUseNewNotificationSystem'] = var4;
    var2 = function shouldShowUseNewNotificationSystem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = _closure1_slot4;
            var1 = var1.useNewNotifications;
            if(!var1) { _fun0004_ip = 79; continue _fun0004 }
 16:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.NotificationsExperiment;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var2 = arg1;
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
 79:
            return var1;
        }
    };
    var3['shouldShowUseNewNotificationSystem'] = var2;
    return var1;
})();