// app/stores/NotificationSettingsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var7 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 76; continue _fun0002;
 74: // catch_target0
                CatchBlockStart(arg_register=1);
 76:
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
        var9 = function handleSetDesktopType(arg1) {
            var1 = arg1;
            var2 = var1.desktopType;
            var1 = _closure1_slot11;
            var1['desktopType'] = var2;
            var1 = undefined;
            return var1;
        };
        var _closure1_slot13 = var9;
        var1 = global;
        var10 = var1.Object;
        var8 = var10.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var10)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot2 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 5;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var11 = var2.DesktopNotificationTypes;
        var _closure1_slot7 = var11;
        var8 = var2.NotificationPermissionTypes;
        var _closure1_slot8 = var8;
        var8 = var2.TTSNotificationTypes;
        var _closure1_slot9 = var8;
        var2 = {'desktopType': null, 'disableAllSounds': false, 'disabledSounds': null, 'ttsType': null, 'disableUnreadBadge': false, 'taskbarFlash': true, 'notifyMessagesInSelectedChannel': false};
        var10 = 6;
        var10 = var6[var10];
        var10 = var5.bind(var1)(var10);
        var10 = var10.isPlatformEmbedded;
        if(var10) { _fun0001_ip = 242; continue _fun0001 }
 234:
        var10 = var11.NEVER;
        _fun0001_ip = 248; continue _fun0001;
 242:
        var10 = var11.ALL;
 248:
        var2['desktopType'] = var10;
        var10 = new Array(0);
        var2['disabledSounds'] = var10;
        var8 = var8.NEVER;
        var2['ttsType'] = var8;
        var _closure1_slot10 = var2;
        var _closure1_slot11 = var2;
        var2 = 7;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.DeviceSettingsStore;
        var2 = function(arg1) {
            var4 = function NotificationSettingsStore() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0003_ip = 105; continue _fun0003;
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
                var2 = {};
                var4 = _closure1_slot10;
                var5 = var2;
                var3 = copyDataProperties(var5, var4);
                var4 = arg1;
                var5 = var2;
                var3 = copyDataProperties(var5, var4);
                _closure1_slot11 = var2;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(10);
            var1[0] = var5;
            var5 = {};
            var7 = 'getUserAgnosticState';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot11;
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'getDesktopType';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot11;
                var1 = var1.desktopType;
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getTTSType';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot11;
                var1 = var1.ttsType;
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'getDisabledSounds';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot11;
                var1 = var1.disabledSounds;
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'getDisableAllSounds';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot11;
                var1 = var1.disableAllSounds;
                return var1;
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'getDisableUnreadBadge';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot11;
                var1 = var1.disableUnreadBadge;
                return var1;
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'getNotifyMessagesInSelectedChannel';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot11;
                var1 = var1.notifyMessagesInSelectedChannel;
                return var1;
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'taskbarFlash';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot11;
                var1 = var1.taskbarFlash;
                return var1;
            };
            var5['get'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'isSoundDisabled';
            var5['key'] = var7;
            var6 = function value(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure1_slot11;
                    var1 = var1.disableAllSounds;
                    if(var1) { _fun0004_ip = 50; continue _fun0004 }
 16:
                    var2 = _closure1_slot11;
                    var4 = var2.disabledSounds;
                    var3 = var4.indexOf;
                    var2 = arg1;
                    var3 = var3.bind(var4)(var2);
                    var2 = -1;
                    var1 = var2 !== var3;
 50:
                    return var1;
                }
            };
            var5['value'] = var6;
            var1[9] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var2.bind(var1)(var8);
        var2 = 'NotificationSettingsStore';
        var8['displayName'] = var2;
        var2 = 'notifications';
        var8['persistKey'] = var2;
        var2 = new Array(1);
        var10 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                var2 = var1.disabledSounds;
                if(var2) { _fun0005_ip = 25; continue _fun0005 }
 21:
                var2 = new Array(0);
 25:
                var1['disabledSounds'] = var2;
                var2 = var1.disableUnreadBadge;
                if(var2) { _fun0005_ip = 42; continue _fun0005 }
 40:
                var2 = false;
 42:
                var1['disableUnreadBadge'] = var2;
                var2 = var1.taskbarFlash;
                var3 = null;
                var2 = var3 == var2;
                if(var2) { _fun0005_ip = 69; continue _fun0005 }
 63:
                var2 = var1.taskbarFlash;
 69:
                var1['taskbarFlash'] = var2;
                var2 = var1.ttsType;
                if(var2) { _fun0005_ip = 97; continue _fun0005 }
 84:
                var4 = _closure1_slot9;
                var2 = var4.NEVER;
 97:
                var1['ttsType'] = var2;
                var2 = var1.desktopType;
                if(!(var3 == var2)) { _fun0005_ip = 171; continue _fun0005 }
 113:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.isPlatformEmbedded;
                var3 = _closure1_slot7;
                if(var2) { _fun0005_ip = 159; continue _fun0005 }
 151:
                var2 = var3.NEVER;
                _fun0005_ip = 165; continue _fun0005;
 159:
                var2 = var3.ALL;
 165:
                var1['desktopType'] = var2;
 171:
                return var1;
            }
        };
        var2[0] = var10;
        var8['migrations'] = var2;
        var2 = 8;
        var2 = var6[var2];
        var15 = var7.bind(var1)(var2);
        var2 = {};
        var2['NOTIFICATIONS_SET_DESKTOP_TYPE'] = var9;
        var9 = function handleSetTTSType(arg1) {
            var1 = arg1;
            var2 = var1.ttsType;
            var1 = _closure1_slot11;
            var1['ttsType'] = var2;
            var1 = undefined;
            return var1;
        };
        var2['NOTIFICATIONS_SET_TTS_TYPE'] = var9;
        var9 = function handleSetDisabledSounds(arg1) {
            var1 = arg1;
            var2 = var1.sounds;
            var1 = _closure1_slot11;
            var1['disabledSounds'] = var2;
            var1 = undefined;
            return var1;
        };
        var2['NOTIFICATIONS_SET_DISABLED_SOUNDS'] = var9;
        var9 = function handleToggleAllDisabled() {
            var2 = _closure1_slot11;
            var1 = var2.disableAllSounds;
            var1 = !var1;
            var2['disableAllSounds'] = var1;
            var1 = undefined;
            return var1;
        };
        var2['NOTIFICATIONS_TOGGLE_ALL_DISABLED'] = var9;
        var9 = function handleSetHavePermission(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var3 = var1.enabled;
                var2 = _closure1_slot8;
                var2 = var2.BLOCKED;
                if(!(var3 !== var2)) { _fun0006_ip = 69; continue _fun0006 }
 25:
                var2 = _closure1_slot8;
                var2 = var2.ENABLED;
                if(!(var3 === var2)) { _fun0006_ip = 97; continue _fun0006 }
 39:
                var4 = _closure1_slot13;
                var3 = {};
                var2 = _closure1_slot7;
                var2 = var2.ALL;
                var3['desktopType'] = var2;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _fun0006_ip = 97; continue _fun0006;
 69:
                var3 = _closure1_slot13;
                var2 = {};
                var1 = _closure1_slot7;
                var1 = var1.NEVER;
                var2['desktopType'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 97:
                var1 = undefined;
                return var1;
            }
        };
        var2['NOTIFICATIONS_SET_PERMISSION_STATE'] = var9;
        var9 = function handleSetDisableUnreadBadge(arg1) {
            var1 = arg1;
            var2 = var1.disableUnreadBadge;
            var1 = _closure1_slot11;
            var1['disableUnreadBadge'] = var2;
            var1 = undefined;
            return var1;
        };
        var2['NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE'] = var9;
        var9 = function handleSetTaskbarFlash(arg1) {
            var1 = arg1;
            var2 = var1.taskbarFlash;
            var1 = _closure1_slot11;
            var1['taskbarFlash'] = var2;
            var1 = undefined;
            return var1;
        };
        var2['NOTIFICATIONS_SET_TASKBAR_FLASH'] = var9;
        var4 = function handleSetNotifyMessagesInSelectedChannel(arg1) {
            var1 = arg1;
            var2 = var1.notify;
            var1 = _closure1_slot11;
            var1['notifyMessagesInSelectedChannel'] = var2;
            var1 = undefined;
            return var1;
        };
        var2['NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL'] = var4;
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var16 = var4;
        var14 = var2;
        var2 = new var16[var8](var15, var14, var13);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 9;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/NotificationSettingsStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();