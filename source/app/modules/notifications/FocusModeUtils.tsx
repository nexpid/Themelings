// app/modules/notifications/FocusModeUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationSettingsUpdateType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.StatusTypes;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/FocusModeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useFocusModeEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var1 = var4[var2];
            var7 = undefined;
            var1 = var3.bind(var7)(var1);
            var5 = var1.FocusMode;
            var1 = var5.useSetting;
            var1 = var1.bind(var5)();
            var2 = var4[var2];
            var2 = var3.bind(var7)(var2);
            var3 = var2.FocusModeExpiresAtSetting;
            var2 = var3.useSetting;
            var5 = var2.bind(var3)();
            if(!var1) { _fun0001_ip = 180; continue _fun0001 }
 69:
            var2 = '0';
            var2 = var2 === var5;
            if(var2) { _fun0001_ip = 177; continue _fun0001 }
 82:
            var3 = global;
            var6 = var3.Date;
            var4 = var3.Number;
            var8 = var4.bind(var7)(var5);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var4 = new var9[var6](var8, var7);
            var5 = var4 instanceof Object ? var4 : var5;
            var4 = var5.getTime;
            var4 = var4.bind(var5)();
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var9 = var5;
            var3 = new var9[var3](var8);
            var5 = var3 instanceof Object ? var3 : var5;
            var3 = var5.getTime;
            var3 = var3.bind(var5)();
            var4 = var4 - var3;
            var3 = 0;
            var2 = var4 > var3;
 177:
            var1 = var2;
 180:
            return var1;
        }
    };
    var3['useFocusModeEnabled'] = var4;
    var4 = function getFocusModeEnabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var1 = var4[var2];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var5 = var1.FocusMode;
            var1 = var5.getSetting;
            var1 = var1.bind(var5)();
            var2 = var4[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.FocusModeExpiresAtSetting;
            var2 = var3.getSetting;
            var4 = var2.bind(var3)();
            if(!var1) { _fun0002_ip = 75; continue _fun0002 }
 69:
            var2 = null;
            var1 = var2 != var4;
 75:
            if(!var1) { _fun0002_ip = 173; continue _fun0002 }
 78:
            var2 = global;
            var5 = var2.Date;
            var3 = var2.Number;
            var7 = var3.bind(var6)(var4);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var3 = new var8[var5](var7, var6);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var4.getTime;
            var3 = var3.bind(var4)();
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.getTime;
            var2 = var2.bind(var4)();
            var3 = var3 - var2;
            var2 = 0;
            var1 = var3 > var2;
 173:
            return var1;
        }
    };
    var3['getFocusModeEnabled'] = var4;
    var2 = function setFocusMode(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 3;
            var2 = var8[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var9 = var2.FocusMode;
            var2 = var9.getSetting;
            var10 = var2.bind(var9)();
            var2 = 4;
            var9 = var8[var2];
            var9 = var7.bind(var1)(var9);
            var12 = var9.PreloadedUserSettingsActionCreators;
            var11 = var12.updateAsync;
            var2 = var8[var2];
            var2 = var7.bind(var1)(var2);
            var2 = var2.UserSettingsDelay;
            var9 = var2.INFREQUENT_USER_ACTION;
            var7 = 'notifications';
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var7 = var2.BoolValue;
                    var6 = var7.create;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['value'] = var4;
                    var2 = var6.bind(var7)(var2);
                    var3['quietMode'] = var2;
                    var6 = '0';
                    var2 = var6;
                    if(!var4) { _fun0004_ip = 136; continue _fun0004 }
 75:
                    var7 = _closure2_slot1;
                    var4 = null;
                    var4 = var4 != var7;
                    var2 = var6;
                    if(!var4) { _fun0004_ip = 136; continue _fun0004 }
 91:
                    var4 = global;
                    var7 = var4.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var5 = _closure2_slot1;
                    var6 = var6 + var5;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = '';
                    var2 = var5.bind(var4)(var6);
 136:
                    var3['focusModeExpiresAtMs'] = var2;
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var7, var2, var9);
            var7 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var9 = var7.bind(var1)(var2);
            var8 = var9.track;
            var2 = _closure1_slot5;
            var7 = var2.NOTIFICATION_SETTINGS_UPDATED;
            var2 = {};
            var11 = _closure1_slot4;
            var11 = var11.ACCOUNT;
            var2['update_type'] = var11;
            var2['quiet_mode_enabled'] = var3;
            var2['quiet_mode_enabled_old'] = var10;
            var2 = var8.bind(var9)(var7, var2);
            var7 = _closure1_slot3;
            var2 = var7.getStatus;
            var7 = var2.bind(var7)();
            var2 = _closure1_slot6;
            var2 = var2.DND;
            var2 = var7 === var2;
            if(!var2) { _fun0003_ip = 218; continue _fun0003 }
 215:
            var2 = var3;
 218:
            if(!var2) { _fun0003_ip = 227; continue _fun0003 }
 221:
            var3 = null;
            var2 = var3 == var4;
 227:
            if(!var2) { _fun0003_ip = 483; continue _fun0003 }
 233:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 8;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.B+cbLS;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.CYVgLC;
            var7 = var8.bind(var11)(var7);
            var2['body'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.f3Pet7;
            var7 = var8.bind(var11)(var7);
            var2['cancelText'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.BddRzc;
            var6 = var7.bind(var8)(var6);
            var2['confirmText'] = var6;
            var5 = function onConfirm() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure1_slot6;
                var4 = var4.ONLINE;
                var2['nextStatus'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onConfirm'] = var5;
            var2 = var3.bind(var4)(var2);
 483:
            return var1;
        }
    };
    var3['setFocusMode'] = var2;
    return var1;
})();