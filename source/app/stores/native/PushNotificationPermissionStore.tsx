// app/stores/native/PushNotificationPermissionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var9 = global;
    var5 = var9.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var14 = 0;
    var2 = var7[var14];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var13 = 1;
    var2 = var7[var13];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var12 = 2;
    var2 = var7[var12];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var11 = 3;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var10 = 4;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var4 = {};
    var4['INIT'] = var14;
    var2 = 'INIT';
    var4[var14] = var2;
    var4['REQUESTED'] = var13;
    var2 = 'REQUESTED';
    var4[var13] = var2;
    var4['PROMPT_SEEN'] = var12;
    var2 = 'PROMPT_SEEN';
    var4[var12] = var2;
    var4['PROMPT_SKIPPED'] = var11;
    var2 = 'PROMPT_SKIPPED';
    var4[var11] = var2;
    var _closure1_slot7 = var4;
    var2 = {};
    var2['MESSAGE_SENT'] = var14;
    var5 = 'MESSAGE_SENT';
    var2[var14] = var5;
    var2['INVITE_ACCEPTED'] = var13;
    var5 = 'INVITE_ACCEPTED';
    var2[var13] = var5;
    var2['FRIEND_REQUEST_SENT'] = var12;
    var5 = 'FRIEND_REQUEST_SENT';
    var2[var12] = var5;
    var2['DM_SPACE'] = var11;
    var5 = 'DM_SPACE';
    var2[var11] = var5;
    var2['APP_LOAD_PROMPT'] = var10;
    var5 = 'APP_LOAD_PROMPT';
    var2[var10] = var5;
    var10 = 5;
    var2['CHANNEL_BANNER'] = var10;
    var5 = 'CHANNEL_BANNER';
    var2[var10] = var5;
    var5 = {};
    var10 = var4.INIT;
    var5['permissionState'] = var10;
    var10 = {};
    var11 = var2.MESSAGE_SENT;
    var12 = null;
    var10[var11] = var12;
    var11 = var2.INVITE_ACCEPTED;
    var10[var11] = var12;
    var11 = var2.FRIEND_REQUEST_SENT;
    var10[var11] = var12;
    var11 = var2.DM_SPACE;
    var10[var11] = var12;
    var11 = var2.APP_LOAD_PROMPT;
    var10[var11] = var12;
    var11 = var2.CHANNEL_BANNER;
    var10[var11] = var12;
    var5['promptLastSeen'] = var10;
    var11 = var9.Set;
    var9 = var11.prototype;
    var10 = Object.create(var9, {constructor: {value: var11}});
    var17 = new Array(0);
    var18 = var10;
    var9 = new var18[var11](var17, var16);
    var9 = var9 instanceof Object ? var9 : var10;
    var5['eligiblePromptTypes'] = var9;
    var _closure1_slot8 = var5;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var9 = var5.DeviceSettingsStore;
    var5 = function(arg1) {
        var4 = function PushNotificationPermissionStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0003_ip = 16; continue _fun0003 }
 9:
                var2 = _closure1_slot8;
 16:
                _closure1_slot9 = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.checkPermissions;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.alert;
                        var3 = var2.sound;
                        var2 = var2.badge;
                        if(var1) { _fun0004_ip = 27; continue _fun0004 }
 24:
                        var1 = var3;
 27:
                        if(var1) { _fun0004_ip = 33; continue _fun0004 }
 30:
                        var1 = var2;
 33:
                        if(!var1) { _fun0004_ip = 59; continue _fun0004 }
 36:
                        var2 = _closure1_slot9;
                        var1 = _closure1_slot7;
                        var1 = var1.REQUESTED;
                        var2['permissionState'] = var1;
 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'permissionState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.permissionState;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'promptSeen';
        var5['key'] = var7;
        var6 = function get() {
            var2 = _closure1_slot7;
            var4 = var2.PROMPT_SEEN;
            var3 = new Array(2);
            var3[0] = var4;
            var2 = var2.PROMPT_SKIPPED;
            var3[1] = var2;
            var2 = var3.includes;
            var1 = _closure1_slot9;
            var1 = var1.permissionState;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var5.bind(var1)(var9);
    var5 = 'PushNotificationPermissionStore';
    var9['displayName'] = var5;
    var5 = 'PushNotificationPermissionStoreKey_1';
    var9['persistKey'] = var5;
    var5 = new Array(1);
    var10 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var2 = _closure1_slot8;
            var8 = var1;
            var7 = var2;
            var4 = copyDataProperties(var8, var7);
            var8 = var1;
            var7 = var3;
            var4 = copyDataProperties(var8, var7);
            var4 = {};
            var7 = var2.promptLastSeen;
            var8 = var4;
            var2 = copyDataProperties(var8, var7);
            var7 = var3.promptLastSeen;
            var8 = var4;
            var2 = copyDataProperties(var8, var7);
            var2 = 'promptLastSeen';
            var1[var2] = var4;
            var2 = global;
            var4 = var2.Set;
            var6 = var2.Array;
            var5 = var6.isArray;
            var2 = var3.eligiblePromptTypes;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0005_ip = 108; continue _fun0005 }
 102:
            var2 = new Array(0);
            _fun0005_ip = 114; continue _fun0005;
 108:
            var2 = var3.eligiblePromptTypes;
 114:
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var8 = var2;
            var2 = new var9[var4](var8, var7);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = 'eligiblePromptTypes';
            var1[var2] = var3;
            return var1;
        }
    };
    var5[0] = var10;
    var9['migrations'] = var5;
    var5 = 7;
    var5 = var7[var5];
    var17 = var8.bind(var1)(var5);
    var5 = {};
    var10 = function setPushNotificationPermissionState(arg1) {
        var1 = arg1;
        var2 = var1.permissionState;
        var1 = _closure1_slot9;
        var1['permissionState'] = var2;
        var1 = undefined;
        return var1;
    };
    var5['PUSH_NOTIFICATION_PERMISSION_SET_STATE'] = var10;
    var10 = function setPushPermissionReactivationSeen(arg1) {
        var1 = arg1;
        var3 = var1.promptType;
        var1 = _closure1_slot9;
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
    var5['PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN'] = var10;
    var6 = function setPromptTypeAsEligible(arg1) {
        var1 = arg1;
        var3 = var1.promptType;
        var1 = _closure1_slot9;
        var2 = var1.eligiblePromptTypes;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = true;
        return var1;
    };
    var5['PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE'] = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {constructor: {value: var9}});
    var18 = var6;
    var16 = var5;
    var5 = new var18[var9](var17, var16, var15);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 8;
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