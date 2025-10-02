// app/modules/push_notifications/PushNotificationConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var9 = require;
        var3 = exports;
        var10 = dependencyMap;
        var _closure1_slot0 = var9;
        var _closure1_slot1 = var10;
        var1 = global;
        var6 = var1.Object;
        var5 = var6.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var2);
        var1 = 0;
        var2 = var10[var1];
        var1 = undefined;
        var5 = var9.bind(var1)(var2);
        var2 = var5.getConstants;
        var2 = var2.bind(var5)();
        var5 = var2.Identifier;
        if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var5 = '';
case 2:
        var6 = var5.startsWith;
        var2 = 'com.discord.kodiak';
        var2 = var6.bind(var5)(var2);
        var7 = var5.startsWith;
        var6 = 'com.hammerandchisel.discord.local';
        var8 = var7.bind(var5)(var6);
        var6 = 'apns_internal';
        var7 = var5;
        if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var5 = 'apns';
        if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var5 = 'apns_local';
case 6:
        var6 = var5;
case 4:
        var _closure1_slot2 = var6;
        var5 = 'apns_internal_voip';
        if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var2 = 'apns_voip';
        if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var2 = 'apns_local_voip';
case 10:
        var5 = var2;
case 8:
        var2 = {};
        var8 = 'reminder';
        var2['REMINDER'] = var8;
        var8 = 'top_messages_push';
        var2['TOP_MESSAGE_PUSH'] = var8;
        var8 = 'trending_content_push';
        var2['TRENDING_CONTENT_PUSH'] = var8;
        var8 = 2;
        var8 = var10[var8];
        var10 = var9.bind(var1)(var8);
        var9 = var10.fileFinishedImporting;
        var8 = 'modules/push_notifications/PushNotificationConstants.tsx';
        var8 = var9.bind(var10)(var8);
        var3['BUNDLE_ID'] = var7;
        var7 = 'gcm';
        var3['DEVICE_PUSH_PROVIDER_ANDROID'] = var7;
        var3['DEVICE_PUSH_PROVIDER_IOS'] = var6;
        var3['DEVICE_PUSH_VOIP_PROVIDER'] = var5;
        var4 = function getDevicePushProvider() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.isAndroid;
                var3 = var1.bind(var3)();
                var1 = 'gcm';
                if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var1 = _closure1_slot2;
case 12:
                return var1;
            }
        };
        var3['getDevicePushProvider'] = var4;
        var3['NotificationTypes'] = var2;
        return var1;
    }
})();