// app/modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx
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
    var4 = 'modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NotificationSettingsMessageUnreadGuildActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useGuildPresetSettings;
            var1 = var1.guildId;
            var1 = var2.bind(var3)(var1);
            var6 = var1.unread;
            var10 = var1.notification;
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot4;
            var9 = var7.ALL_MESSAGES;
            var7 = undefined;
            if(!(var10 === var9)) { _fun0001_ip = 155; continue _fun0001 }
 100:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 8;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.eP8yWV;
            var7 = var9.bind(var10)(var8);
 155:
            var1['disabledMentionOnlyWithReason'] = var7;
            var1['value'] = var6;
            var5 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var8 = arg1;
                    var5 = _closure1_slot3;
                    var4 = var5.getGuildFlags;
                    var3 = _closure2_slot0;
                    var1 = var3.guildId;
                    var11 = var4.bind(var5)(var1);
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 9;
                    var4 = var10[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.updateGuildNotificationSettings;
                    var4 = var3.guildId;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var7 = 10;
                    var7 = var10[var7];
                    var10 = var9.bind(var1)(var7);
                    var9 = var10.withGuildUnreadFlags;
                    var7 = _closure1_slot5;
                    var7 = var7.ALL_MESSAGES;
                    if(!(var8 !== var7)) { _fun0002_ip = 116; continue _fun0002 }
 104:
                    var7 = _closure1_slot6;
                    var7 = var7.UNREADS_ONLY_MENTIONS;
                    _fun0002_ip = 126; continue _fun0002;
 116:
                    var12 = _closure1_slot6;
                    var7 = var12.UNREADS_ALL_MESSAGES;
 126:
                    var7 = var9.bind(var10)(var11, var7);
                    var3['flags'] = var7;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
                    var2 = var9[var2];
                    var2 = var7.bind(var1)(var2);
                    var7 = var2.NotificationLabel;
                    var2 = var7.unreads;
                    var2 = var2.bind(var7)(var8);
                    var2 = var5.bind(var6)(var4, var3, var2);
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