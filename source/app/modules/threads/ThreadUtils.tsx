// app/modules/threads/ThreadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var1 = ['can_send_message', 'parent_channel_type'];
    var _closure1_slot3 = var1;
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
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.ThreadMemberFlags;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot9 = var8;
    var4 = var4.UserNotificationSettings;
    var _closure1_slot10 = var4;
    var4 = function getAccessibilityLabelFormatter() {
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 6;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.1Rcf/v;
        var1['minutes'] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.vgnx5+;
        var1['hours'] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.fNvE5+;
        var1['days'] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.P7Gyg4;
        var2 = var3.bind(var4)(var2);
        var1['month'] = var2;
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = 16;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'modules/threads/ThreadUtils.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['getTimestampString'] = var4;
    var4 = function(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot11;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getTimestampAccessibilityLabel'] = var4;
    var4 = function trackThreadBrowserTab() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.trackWithMetadata;
        var2 = _closure1_slot9;
        var2 = var2.THREAD_BROWSER_TAB_CHANGED;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['trackThreadBrowserTab'] = var4;
    var4 = function trackThreadBrowserOpened() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[0];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 'Modal';
case 2:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot9;
            var3 = var2.OPEN_MODAL;
            var2 = {};
            var7 = 'Thread Browser';
            var2['type'] = var7;
            var2['location_section'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackThreadBrowserOpened'] = var4;
    var4 = function trackActiveThreadsPopoutOpened() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot9;
        var3 = var2.OPEN_POPOUT;
        var2 = {};
        var6 = 'Active Threads Popout';
        var2['type'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackActiveThreadsPopoutOpened'] = var4;
    var4 = function trackThreadNotificationSettingsUpdated(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg1;
            var3 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.collectThreadMetadata;
            var18 = var4.bind(var5)(var10);
            var7 = null;
            if(!(var7 != var18)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var10.getGuildId;
            var15 = var4.bind(var10)();
            var14 = var10.parent_id;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 11;
            var4 = var4[var8];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getCurrentChannelSettings;
            var6 = var4.bind(var5)(var15, var14);
            var12 = function getNotificationAnalyticsString(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var10 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.hasFlag;
                    var3 = _closure1_slot8;
                    var3 = var3.ALL_MESSAGES;
                    var3 = var4.bind(var6)(var10, var3);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = var6[var1];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.hasFlag;
                    var3 = _closure1_slot8;
                    var3 = var3.ONLY_MENTIONS;
                    var3 = var7.bind(var8)(var10, var3);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = var8[var1];
                    var9 = var7.bind(var5)(var1);
                    var3 = var9.hasFlag;
                    var1 = _closure1_slot8;
                    var1 = var1.NO_MESSAGES;
                    var1 = var3.bind(var9)(var10, var1);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 11;
                    var3 = var10[var3];
                    var3 = var9.bind(var5)(var3);
                    var9 = var3.MessageNotificationSettings;
                    var3 = _closure1_slot10;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = var3.NULL;
                    var1 = var9[var1];
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var3 = var3.NO_MESSAGES;
                    var1 = var9[var3];
case 12:
                    _fun0003_ip = 13; continue _fun0003;
case 8:
                    var3 = 11;
                    var3 = var8[var3];
                    var3 = var7.bind(var5)(var3);
                    var7 = var3.MessageNotificationSettings;
                    var3 = _closure1_slot10;
                    var3 = var3.ONLY_MENTIONS;
                    var1 = var7[var3];
case 13:
                    _fun0003_ip = 14; continue _fun0003;
case 6:
                    var3 = 11;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.MessageNotificationSettings;
                    var2 = _closure1_slot10;
                    var2 = var2.ALL_MESSAGES;
                    var1 = var3[var2];
case 14:
                    return var1;
                }
            };
            var9 = _closure1_slot7;
            var5 = var9.flags;
            var4 = var10.id;
            var4 = var5.bind(var9)(var4);
            var5 = var7 != var4;
            var13 = 0;
            if(!var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var13 = var4;
case 15:
            var11 = var12.bind(var1)(var13);
            var19 = _closure1_slot7;
            var5 = var19.isMuted;
            var4 = var10.id;
            var9 = var5.bind(var19)(var4);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var16 = var5.bind(var1)(var4);
            var5 = var16.muteConfigToTimestamp;
            var17 = var19.getMuteConfig;
            var4 = var10.id;
            var4 = var17.bind(var19)(var4);
            var4 = var5.bind(var16)(var4);
            var5 = var18.can_send_message;
            var5 = var18.parent_channel_type;
            var5 = {};
            var17 = _closure1_slot4;
            var16 = _closure1_slot3;
            var20 = var17.bind(var1)(var18, var16);
            var21 = var5;
            var16 = copyDataProperties(var21, var20);
            var17 = var10.id;
            var16 = 'channel_id';
            var5[var16] = var17;
            var16 = 'guild_id';
            var5[var16] = var15;
            var16 = 'parent_id';
            var5[var16] = var14;
            var16 = var10.type;
            var10 = 'channel_type';
            var5[var10] = var16;
            var10 = _closure1_slot8;
            var10 = var10.HAS_INTERACTED;
            var10 = var13 & var10;
            var10 = !var10;
            var13 = !var10;
            var10 = 'has_interacted_with_thread';
            var5[var10] = var13;
            var13 = _closure1_slot6;
            var10 = var13.isGuildOrCategoryOrChannelMuted;
            var13 = var10.bind(var13)(var15, var14);
            var10 = 'parent_is_muted';
            var5[var10] = var13;
            var10 = 'old_thread_notification_setting';
            var5[var10] = var11;
            var10 = var3.flags;
            if(!(var7 != var10)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var10 = var3.flags;
            var11 = var12.bind(var1)(var10);
case 17:
            var10 = 'new_thread_notification_setting';
            var5[var10] = var11;
            var10 = var6.channel_message_notification_settings;
            var6 = 'parent_notification_setting';
            var5[var6] = var10;
            var6 = 'old_thread_is_muted';
            var5[var6] = var9;
            var6 = var3.muted;
            if(!(var7 != var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = var6;
case 19:
            var6 = 'new_thread_is_muted';
            var5[var6] = var9;
            var6 = 'old_thread_muted_until';
            var5[var6] = var4;
            var6 = var3.mute_config;
            if(!(var7 != var6)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var7 = var7.bind(var1)(var6);
            var6 = var7.muteConfigToTimestamp;
            var3 = var3.mute_config;
            var4 = var6.bind(var7)(var3);
case 21:
            var3 = 'new_thread_muted_until';
            var5[var3] = var4;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.track;
            var2 = _closure1_slot9;
            var2 = var2.THREAD_NOTIFICATION_SETTINGS_UPDATED;
            var2 = var3.bind(var4)(var2, var5);
case 4:
            return var1;
        }
    };
    var3['trackThreadNotificationSettingsUpdated'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 13;
            var4 = var5[var4];
            var5 = undefined;
            var7 = var6.bind(var5)(var4);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var8;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.lastMessageId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var6.bind(var7)(var4, var1);
            var4 = null;
            var1 = var4 != var8;
            var6 = null;
            if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 14;
            var1 = var9[var1];
            var7 = var7.bind(var5)(var1);
            var1 = var7.extractTimestamp;
            var6 = var1.bind(var7)(var8);
case 23:
            var1 = var2.threadMetadata;
            var7 = var4 == var1;
            var8 = undefined;
            if(var7) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var8 = var1.createTimestamp;
case 25:
            var7 = var4 != var8;
            var1 = null;
            if(!var7) { _fun0004_ip = 27; continue _fun0004 }
case 16:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 15;
            var7 = var10[var7];
            var7 = var9.bind(var5)(var7);
            var8 = var7.bind(var5)(var8);
            var7 = var8.valueOf;
            var1 = var7.bind(var8)();
case 27:
            if(!(var4 != var6)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var1 = var6;
case 28:
            if(!(var4 == var1)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.extractTimestamp;
            var2 = var2.id;
            var1 = var3.bind(var4)(var2);
case 30:
            return var1;
        }
    };
    var3['useLastMessageTimestamp'] = var2;
    return var1;
})();