// app/stores/native/PushNotificationPermissionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var13 = global;
    var5 = var13.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var12 = 0;
    var2 = var7[var12];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var11 = 1;
    var2 = var7[var11];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 2;
    var2 = var7[var10];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var6 = 3;
    var2 = var7[var6];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var4 = {};
    var4['INIT'] = var12;
    var2 = 'INIT';
    var4[var12] = var2;
    var4['REQUESTED'] = var11;
    var2 = 'REQUESTED';
    var4[var11] = var2;
    var4['PROMPT_SEEN'] = var10;
    var2 = 'PROMPT_SEEN';
    var4[var10] = var2;
    var4['PROMPT_SKIPPED'] = var6;
    var2 = 'PROMPT_SKIPPED';
    var4[var6] = var2;
    var _closure1_slot7 = var4;
    var2 = {};
    var2['MESSAGE_SENT'] = var12;
    var5 = 'MESSAGE_SENT';
    var2[var12] = var5;
    var2['INVITE_ACCEPTED'] = var11;
    var5 = 'INVITE_ACCEPTED';
    var2[var11] = var5;
    var2['FRIEND_REQUEST_SENT'] = var10;
    var5 = 'FRIEND_REQUEST_SENT';
    var2[var10] = var5;
    var2['DM_SPACE'] = var6;
    var5 = 'DM_SPACE';
    var2[var6] = var5;
    var6 = 5;
    var2['CHANNEL_BANNER'] = var6;
    var5 = 'CHANNEL_BANNER';
    var2[var6] = var5;
    var10 = 6;
    var2['POST_REACTION_BANNER'] = var10;
    var5 = 'POST_REACTION_BANNER';
    var2[var10] = var5;
    var5 = 7;
    var2['GUILD_OPEN_BOTTOM_SHEET'] = var5;
    var6 = 'GUILD_OPEN_BOTTOM_SHEET';
    var2[var5] = var6;
    var6 = 8;
    var2['CALL_DISCONNECT_BOTTOM_SHEET'] = var6;
    var11 = 'CALL_DISCONNECT_BOTTOM_SHEET';
    var2[var6] = var11;
    var _closure1_slot8 = var2;
    var12 = {};
    var11 = var4.INIT;
    var12['permissionState'] = var11;
    var14 = {};
    var15 = var2.MESSAGE_SENT;
    var11 = null;
    var14[14] = var11;
    var15 = var2.INVITE_ACCEPTED;
    var14[14] = var11;
    var15 = var2.FRIEND_REQUEST_SENT;
    var14[14] = var11;
    var15 = var2.DM_SPACE;
    var14[14] = var11;
    var15 = var2.CHANNEL_BANNER;
    var14[14] = var11;
    var15 = var2.POST_REACTION_BANNER;
    var14[14] = var11;
    var15 = var2.GUILD_OPEN_BOTTOM_SHEET;
    var14[14] = var11;
    var15 = var2.CALL_DISCONNECT_BOTTOM_SHEET;
    var14[14] = var11;
    var12['promptLastSeen'] = var14;
    var15 = var13.Set;
    var13 = var15.prototype;
    var14 = Object.create(var13, {constructor: {value: var15}});
    var18 = new Array(0);
    var19 = var14;
    var13 = new var19[var15](var18, var17);
    var13 = var13 instanceof Object ? var13 : var14;
    var12['eligiblePromptTypes'] = var13;
    var _closure1_slot9 = var12;
    var _closure1_slot10 = var12;
    var _closure1_slot11 = var11;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var11 = var10.DeviceSettingsStore;
    var10 = function(arg1) {
        var4 = function PushNotificationPermissionStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var10 = arg1;
                var4 = {};
                var13 = _closure1_slot9;
                var14 = var4;
                var1 = copyDataProperties(var14, var13);
                var9 = null;
                var5 = var9 != var10;
                var1 = null;
                if(!var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var10;
case 9:
                var14 = var4;
                var13 = var1;
                var1 = copyDataProperties(var14, var13);
                var6 = {};
                var1 = _closure1_slot9;
                var13 = var1.promptLastSeen;
                var14 = var6;
                var1 = copyDataProperties(var14, var13);
                var7 = var9 == var10;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var5 = var10.promptLastSeen;
case 11:
                var14 = var6;
                var13 = var5;
                var5 = copyDataProperties(var14, var13);
                var5 = 'promptLastSeen';
                var4[4] = var6;
                var5 = global;
                var7 = var5.Set;
                var5 = _closure1_slot9;
                var13 = var5.eligiblePromptTypes;
                var8 = new Array(0);
                var12 = 0;
                var14 = var8;
                var6 = arraySpread(var14, var13, var12);
                var11 = var9 == var10;
                var5 = undefined;
                if(var11) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var5 = var10.eligiblePromptTypes;
case 13:
                if(!(var9 == var5)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var5 = new Array(0);
case 15:
                var14 = var8;
                var13 = var5;
                var12 = var6;
                var5 = arraySpread(var14, var13, var12);
                var6 = var8.filter;
                var5 = function(arg1) {
                    var1 = _closure1_slot8;
                    var2 = var1.POST_REACTION_BANNER;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var14 = var6.bind(var8)(var5);
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var15 = var6;
                var5 = new var15[var7](var14, var13);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = 'eligiblePromptTypes';
                var4[4] = var6;
                _closure1_slot10 = var4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 5;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.checkPermissions;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.alert;
                        var3 = var2.sound;
                        var2 = var2.badge;
                        if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var1 = var3;
case 17:
                        if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var1 = var2;
case 19:
                        if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var2 = _closure1_slot10;
                        var1 = _closure1_slot7;
                        var1 = var1.REQUESTED;
                        var2['permissionState'] = var1;
case 21:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'permissionState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.permissionState;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'promptSeen';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot7;
            var4 = var2.PROMPT_SEEN;
            var3 = new Array(2);
            var3[0] = var4;
            var2 = var2.PROMPT_SKIPPED;
            var3[1] = var2;
            var2 = var3.includes;
            var1 = _closure1_slot10;
            var1 = var1.permissionState;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'authorizationStatus';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var10.bind(var1)(var11);
    var11 = 'PushNotificationPermissionStore';
    var10['displayName'] = var11;
    var11 = 'PushNotificationPermissionStoreKey_1';
    var10['persistKey'] = var11;
    var11 = new Array(1);
    var12 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = _closure1_slot9;
            var8 = var1;
            var7 = var3;
            var4 = copyDataProperties(var8, var7);
            var8 = var1;
            var7 = var2;
            var4 = copyDataProperties(var8, var7);
            var4 = {};
            var7 = var3.promptLastSeen;
            var8 = var4;
            var3 = copyDataProperties(var8, var7);
            var7 = var2.promptLastSeen;
            var8 = var4;
            var3 = copyDataProperties(var8, var7);
            var3 = 'promptLastSeen';
            var1[2] = var4;
            var4 = var2.eligiblePromptTypes;
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 23; continue _fun0005 }
case 11:
            var4 = global;
            var6 = var4.Array;
            var5 = var6.isArray;
            var3 = var2.eligiblePromptTypes;
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var5 = var2.eligiblePromptTypes;
            var3 = var4.Set;
            var3 = var5 instanceof var3;
            if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var6 = var4.Set;
            var3 = var6.prototype;
            var5 = Object.create(var3, {constructor: {value: var6}});
            var8 = new Array(0);
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            _fun0005_ip = 28; continue _fun0005;
case 26:
            var3 = var2.eligiblePromptTypes;
case 28:
            _fun0005_ip = 29; continue _fun0005;
case 24:
            var5 = var4.Set;
            var8 = var2.eligiblePromptTypes;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var2 = new var9[var5](var8, var7);
            var3 = var2 instanceof Object ? var2 : var4;
case 29:
            _fun0005_ip = 30; continue _fun0005;
case 23:
            var2 = global;
            var5 = var2.Set;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var8 = new Array(0);
            var9 = var4;
            var2 = new var9[var5](var8, var7);
            var3 = var2 instanceof Object ? var2 : var4;
case 30:
            var2 = 'eligiblePromptTypes';
            var1[1] = var3;
            return var1;
        }
    };
    var11[0] = var12;
    var10['migrations'] = var11;
    var5 = var7[var5];
    var18 = var9.bind(var1)(var5);
    var5 = {};
    var11 = function setPushNotificationPermissionState(arg1) {
        var1 = arg1;
        var2 = var1.permissionState;
        var1 = _closure1_slot10;
        var1['permissionState'] = var2;
        var1 = undefined;
        return var1;
    };
    var5['PUSH_NOTIFICATION_PERMISSION_SET_STATE'] = var11;
    var11 = function setPushPermissionReactivationSeen(arg1) {
        var1 = arg1;
        var3 = var1.promptType;
        var1 = _closure1_slot10;
        var2 = var1.promptLastSeen;
        var1 = global;
        var1 = var1.Date;
        var4 = var1.prototype;
        var4 = Object.create(var4, {constructor: {value: var1}});
        var5 = var4;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var4;
        var2[var3] = var1;
        var1 = true;
        return var1;
    };
    var5['PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN'] = var11;
    var11 = function setPromptTypeAsEligible(arg1) {
        var1 = arg1;
        var4 = var1.promptType;
        var2 = _closure1_slot10;
        var3 = global;
        var5 = var3.Set;
        var1 = _closure1_slot10;
        var6 = var1.eligiblePromptTypes;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var3 = var1 instanceof Object ? var1 : var3;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        var2['eligiblePromptTypes'] = var1;
        var1 = true;
        return var1;
    };
    var5['PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE'] = var11;
    var8 = function setNotificationAuthorizationStatus(arg1) {
        var1 = arg1;
        var2 = var1.authorizationStatus;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var5['PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var19 = var8;
    var17 = var5;
    var5 = new var19[var10](var18, var17, var16);
    var5 = var5 instanceof Object ? var5 : var8;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'stores/native/PushNotificationPermissionStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['PermissionStateType'] = var4;
    var3['PermissionPromptType'] = var2;
    return var1;
})();