// app/modules/notification_center/NotificationCenterUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/NotificationCenterUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var4 = true;
 11:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 0;
            var1 = var1[var7];
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = arg1;
            var1['since'] = var6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var3)(var5);
            if(var4) { _fun0001_ip = 71; continue _fun0001 }
 63:
            var4 = var5.getFullFormatter;
            _fun0001_ip = 77; continue _fun0001;
 71:
            var4 = var5.getAbbreviatedFormatter;
 77:
            var1['getFormatter'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getRelativeTimestamp'] = var4;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var1 = var3.acked;
            if(var1) { _fun0002_ip = 99; continue _fun0002 }
 15:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var7 = undefined;
            var2 = var5.bind(var7)(var2);
            var2 = var2.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
            var2 = var6 !== var2;
            if(!var2) { _fun0002_ip = 96; continue _fun0002 }
 53:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 2;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.compare;
            var3 = var3.id;
            var4 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var2 = var4 >= var3;
 96:
            var1 = var2;
 99:
            return var1;
        }
    };
    var3['isRemoteAcked'] = var4;
    var4 = function incomingFriendRequestLocalItem(arg1, arg2, arg3) {
        var7 = arg1;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 2;
        var1 = var6[var1];
        var5 = undefined;
        var8 = var2.bind(var5)(var1);
        var2 = var8.fromTimestamp;
        var4 = global;
        var10 = var4.Date;
        var1 = var10.prototype;
        var9 = Object.create(var1, {constructor: {value: var10}});
        var14 = arg2;
        var15 = var9;
        var1 = new var15[var10](var14, var13);
        var9 = var1 instanceof Object ? var1 : var9;
        var1 = var9.getTime;
        var1 = var1.bind(var9)();
        var2 = var2.bind(var8)(var1);
        var1 = {'acked': false, 'forceUnacked': true, 'other_user': null, 'kind': 'notification-center-item'};
        var1['other_user'] = var7;
        var11 = var7.id;
        var8 = var4.HermesInternal;
        var10 = var8.concat;
        var9 = 'incoming_friend_requests_';
        var8 = '_';
        var8 = var10.bind(var9)(var11, var8, var2);
        var1['local_id'] = var8;
        var8 = var7.id;
        var4 = var4.HermesInternal;
        var7 = var4.concat;
        var4 = 'https://discord.com/users/';
        var4 = var7.bind(var4)(var8);
        var1['deeplink'] = var4;
        var4 = _closure1_slot0;
        var3 = 3;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.NotificationCenterLocalItems;
        var3 = var3.INCOMING_FRIEND_REQUESTS;
        var1['type'] = var3;
        var1['id'] = var2;
        var2 = arg3;
        var1['applicationId'] = var2;
        return var1;
    };
    var3['incomingFriendRequestLocalItem'] = var4;
    var4 = function incomingGameFriendRequestLocalItem(arg1, arg2, arg3) {
        var7 = arg1;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 2;
        var1 = var6[var1];
        var5 = undefined;
        var8 = var2.bind(var5)(var1);
        var2 = var8.fromTimestamp;
        var4 = global;
        var10 = var4.Date;
        var1 = var10.prototype;
        var9 = Object.create(var1, {constructor: {value: var10}});
        var14 = arg2;
        var15 = var9;
        var1 = new var15[var10](var14, var13);
        var9 = var1 instanceof Object ? var1 : var9;
        var1 = var9.getTime;
        var1 = var1.bind(var9)();
        var2 = var2.bind(var8)(var1);
        var1 = {'acked': false, 'forceUnacked': true, 'other_user': null, 'kind': 'notification-center-item'};
        var1['other_user'] = var7;
        var11 = var7.id;
        var8 = var4.HermesInternal;
        var10 = var8.concat;
        var9 = 'incoming_game_friend_requests_';
        var8 = '_';
        var8 = var10.bind(var9)(var11, var8, var2);
        var1['local_id'] = var8;
        var8 = var7.id;
        var4 = var4.HermesInternal;
        var7 = var4.concat;
        var4 = 'https://discord.com/users/';
        var4 = var7.bind(var4)(var8);
        var1['deeplink'] = var4;
        var4 = _closure1_slot0;
        var3 = 3;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.NotificationCenterLocalItems;
        var3 = var3.INCOMING_GAME_FRIEND_REQUESTS;
        var1['type'] = var3;
        var1['id'] = var2;
        var2 = arg3;
        var1['applicationId'] = var2;
        return var1;
    };
    var3['incomingGameFriendRequestLocalItem'] = var4;
    var4 = function mobileNativeUpdateAvailableLocalItem(arg1) {
        var2 = arg1;
        var1 = {'acked': false, 'enableBadge': true, 'id': null, 'kind': 'notification-center-item'};
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 2;
        var4 = var6[var4];
        var5 = undefined;
        var9 = var7.bind(var5)(var4);
        var8 = var9.fromTimestamp;
        var4 = global;
        var7 = var4.Date;
        var10 = var7.prototype;
        var10 = Object.create(var10, {constructor: {value: var7}});
        var12 = var10;
        var7 = new var12[var7](var11);
        var10 = var7 instanceof Object ? var7 : var10;
        var7 = var10.getTime;
        var7 = var7.bind(var10)();
        var7 = var8.bind(var9)(var7);
        var1['id'] = var7;
        var8 = var2.build;
        var4 = var4.HermesInternal;
        var7 = var4.concat;
        var4 = 'mobile_update_available_';
        var4 = var7.bind(var4)(var8);
        var1['local_id'] = var4;
        var4 = _closure1_slot0;
        var3 = 3;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.NotificationCenterLocalItems;
        var3 = var3.MOBILE_NATIVE_UPDATE_AVAILABLE;
        var1['type'] = var3;
        var2 = var2.urls;
        var3 = var2.install;
        var2 = var3.toString;
        var2 = var2.bind(var3)();
        var1['deeplink'] = var2;
        return var1;
    };
    var3['mobileNativeUpdateAvailableLocalItem'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = var3.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.NotificationCenterItems;
            var1 = var1.RECENT_MENTION;
            var1 = var4 === var1;
            if(var1) { _fun0003_ip = 90; continue _fun0003 }
 52:
            var3 = var3.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.NotificationCenterItems;
            var2 = var2.REPLY_MENTION;
            var1 = var3 === var2;
 90:
            return var1;
        }
    };
    var3['isMentionItem'] = var2;
    return var1;
})();