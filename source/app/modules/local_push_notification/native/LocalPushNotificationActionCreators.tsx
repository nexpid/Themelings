// app/modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.LocalNotificationTypes;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function receiveLocalNotification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = function dispatch() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 3;
                    var2 = var7[var1];
                    var1 = undefined;
                    var8 = var6.bind(var1)(var2);
                    var5 = var8.dispatch;
                    var2 = {};
                    var9 = 'PUSH_NOTIFICATION_CLICK';
                    var2['type'] = var9;
                    var2 = var5.bind(var8)(var2);
                    var2 = 4;
                    var2 = var7[var2];
                    var9 = var6.bind(var1)(var2);
                    var8 = var9.addBreadcrumb;
                    var5 = {};
                    var2 = 'Notification Clicked';
                    var5['message'] = var2;
                    var10 = {};
                    var11 = _closure2_slot0;
                    var11 = var11.type;
                    var10['type'] = var11;
                    var5['data'] = var10;
                    var5 = var8.bind(var9)(var5);
                    var5 = 5;
                    var5 = var7[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.track;
                    var5 = _closure1_slot4;
                    var6 = var5.NOTIFICATION_CLICKED;
                    var5 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.type;
                    var5['notif_type'] = var9;
                    var10 = _closure2_slot0;
                    var9 = 'guildId';
                    var10 = var9 in var10;
                    var9 = null;
                    if(!var10) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var10 = _closure2_slot0;
                    var9 = var10.guildId;
case 2:
                    var5['guild_id'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var5 = _closure2_slot0;
                    var6 = var5.type;
                    var5 = _closure1_slot3;
                    var5 = var5.GUILD_VERIFICATION;
                    if(!(var5 !== var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot3;
                    var5 = var5.CALL_RING;
                    if(!(var5 !== var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot3;
                    var5 = var5.MESSAGE_SEND_FAILED;
                    if(!(var5 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 8;
                    var6 = var5[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = 9;
                    var6 = var5[var6];
                    var5 = var5.paths;
                    var7 = var7.bind(var1)(var6, var5);
                    var6 = var7.then;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var5 = var1.transitionToMessage;
                        var2 = _closure2_slot0;
                        var4 = var2.channelId;
                        var1 = _closure2_slot0;
                        var3 = var1.messageId;
                        var2 = {};
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var6 = var6[var1];
                        var1 = undefined;
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.JumpTypes;
                        var6 = var6.INSTANT;
                        var2['jumpType'] = var6;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 8;
                    var6 = var5[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = 7;
                    var6 = var5[var6];
                    var5 = var5.paths;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.default;
                        var1 = _closure2_slot0;
                        var2 = var1.channelId;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 8; continue _fun0002;
case 4:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.transitionToGuildSync;
                    var2 = _closure2_slot0;
                    var2 = var2.guildId;
                    var2 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var2 = var6.getData;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var8 = var7.bind(var2)(var4);
            var7 = var8.trackAppOpened;
            var4 = 'notification';
            var4 = var7.bind(var8)(var4);
            var4 = var6.getData;
            var4 = var4.bind(var6)();
            var _closure2_slot0 = var4;
            var5 = var4.type;
            var4 = _closure1_slot3;
            var4 = var4.GUILD_VERIFICATION;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot3;
            var4 = var4.CALL_RING;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var4 = _closure1_slot3;
            var4 = var4.MESSAGE_SEND_FAILED;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            return var2;
case 12:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var4 = var4.bind(var2)(var1);
            var1 = var4.isDispatching;
            var1 = var1.bind(var4)();
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var3.bind(var2)();
            _fun0001_ip = 10; continue _fun0001;
case 16:
            var1 = global;
            var1 = var1.setImmediate;
            var1 = var1.bind(var2)(var3);
case 10:
            var1 = undefined;
            return var1;
        }
    };
    var3['receiveLocalNotification'] = var2;
    return var1;
})();