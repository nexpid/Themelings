// app/modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsObjects;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function updateChannelUnreadSettings(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var11 = arg3;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 4;
            var2 = var10[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.updateChannelOverrideSettings;
            var4 = {};
            var3 = _closure1_slot0;
            var2 = 5;
            var2 = var10[var2];
            var13 = var3.bind(var1)(var2);
            var12 = var13.withChannelUnreadFlags;
            var14 = _closure1_slot3;
            var2 = var14.getChannelIdFlags;
            var2 = var2.bind(var14)(var8, var7);
            var2 = var12.bind(var13)(var2, var11);
            var4['flags'] = var2;
            var2 = 6;
            var2 = var10[var2];
            var2 = var3.bind(var1)(var2);
            var10 = var2.NotificationLabel;
            var3 = var10.unreads;
            var2 = _closure1_slot6;
            var2 = var2.UNREADS_ALL_MESSAGES;
            if(!(var11 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot5;
            var2 = var2.ONLY_MENTIONS;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var11 = _closure1_slot5;
            var2 = var11.ALL_MESSAGES;
case 4:
            var16 = var3.bind(var10)(var2);
            var2 = {};
            var9 = _closure1_slot4;
            var9 = var9.NOTIFICATION_SETTING_UNREAD_NOTICE;
            var2['object'] = var9;
            var20 = var6;
            var19 = var8;
            var18 = var7;
            var17 = var4;
            var15 = var2;
            var2 = var20[var5](var19, var18, var17, var16, var15, var14);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();