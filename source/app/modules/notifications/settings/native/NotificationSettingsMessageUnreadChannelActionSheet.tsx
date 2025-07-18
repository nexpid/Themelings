// app/modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx
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
    var4 = var4.ChannelNotificationSettingsFlags;
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
    var4 = 'modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NotificationSettingsMessageUnreadChannelActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useChannelPresetSettings;
            var1 = var1.channel;
            var1 = var2.bind(var3)(var1);
            var6 = var1.unread;
            var9 = var1.notification;
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['value'] = var6;
            var6 = _closure1_slot4;
            var8 = var6.ALL_MESSAGES;
            var6 = undefined;
            if(!(var9 === var8)) { _fun0001_ip = 159; continue _fun0001 }
 104:
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
 159:
            var1['disabledMentionOnlyWithReason'] = var6;
            var5 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var9 = arg1;
                    var6 = _closure1_slot3;
                    var5 = var6.getChannelIdFlags;
                    var3 = _closure2_slot0;
                    var1 = var3.channel;
                    var4 = var1.guild_id;
                    var1 = var3.channel;
                    var1 = var1.id;
                    var12 = var5.bind(var6)(var4, var1);
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var1 = 9;
                    var4 = var11[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.updateChannelOverrideSettings;
                    var4 = var3.channel;
                    var5 = var4.guild_id;
                    var3 = var3.channel;
                    var4 = var3.id;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var8 = 10;
                    var8 = var11[var8];
                    var11 = var10.bind(var1)(var8);
                    var10 = var11.withChannelUnreadFlags;
                    var8 = _closure1_slot5;
                    var8 = var8.ALL_MESSAGES;
                    if(!(var9 !== var8)) { _fun0002_ip = 147; continue _fun0002 }
 135:
                    var8 = _closure1_slot6;
                    var8 = var8.UNREADS_ONLY_MENTIONS;
                    _fun0002_ip = 157; continue _fun0002;
 147:
                    var13 = _closure1_slot6;
                    var8 = var13.UNREADS_ALL_MESSAGES;
 157:
                    var8 = var10.bind(var11)(var12, var8);
                    var3['flags'] = var8;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 11;
                    var2 = var10[var2];
                    var2 = var8.bind(var1)(var2);
                    var8 = var2.NotificationLabel;
                    var2 = var8.unreads;
                    var14 = var2.bind(var8)(var9);
                    var18 = var7;
                    var17 = var5;
                    var16 = var4;
                    var15 = var3;
                    var2 = var18[var6](var17, var16, var15, var14, var13);
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