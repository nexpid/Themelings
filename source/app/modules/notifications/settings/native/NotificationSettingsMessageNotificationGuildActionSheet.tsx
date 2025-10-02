// app/modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserNotificationSettings;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildNotificationSettingsFlags;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NotificationSettingsMessageNotificationGuildActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useGuildPresetSettings;
            var1 = var1.guildId;
            var1 = var2.bind(var3)(var1);
            var9 = var1.unread;
            var _closure2_slot1 = var9;
            var10 = var1.notification;
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = 'guild';
            var1['context'] = var6;
            var1['value'] = var10;
            var6 = _closure1_slot4;
            var8 = var6.ALL_MESSAGES;
            var6 = undefined;
            if(!(var10 !== var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot5;
            var8 = var8.ALL_MESSAGES;
            var6 = undefined;
            if(!(var9 !== var8)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 8;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.eP8yWV;
            var6 = var8.bind(var9)(var7);
case 2:
            var1['allMessagesSubLabel'] = var6;
            var5 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var8 = arg1;
                    var6 = {};
                    var6['message_notifications'] = var8;
                    var1 = _closure1_slot4;
                    var1 = var1.ALL_MESSAGES;
                    var1 = var8 === var1;
                    if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot5;
                    var3 = var3.ALL_MESSAGES;
                    var1 = var4 !== var3;
case 5:
                    if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.withGuildUnreadFlags;
                    var7 = _closure1_slot3;
                    var3 = var7.getGuildFlags;
                    var1 = _closure2_slot0;
                    var1 = var1.guildId;
                    var3 = var3.bind(var7)(var1);
                    var1 = _closure1_slot6;
                    var1 = var1.UNREADS_ALL_MESSAGES;
                    var1 = var4.bind(var5)(var3, var1);
                    var6['flags'] = var1;
case 7:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var3 = var9[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.updateGuildNotificationSettings;
                    var3 = _closure2_slot0;
                    var3 = var3.guildId;
                    var7 = _closure1_slot0;
                    var2 = 11;
                    var2 = var9[var2];
                    var2 = var7.bind(var1)(var2);
                    var7 = var2.NotificationLabel;
                    var2 = var7.notifications;
                    var2 = var2.bind(var7)(var8);
                    var2 = var4.bind(var5)(var3, var6, var2);
                    return var1;
                }
            };
            var1['onChange'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();