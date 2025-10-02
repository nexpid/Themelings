// app/modules/custom_status/CustomStatusManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsObjects;
    var _closure1_slot9 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Timeout;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot11 = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Timeout;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot12 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Timeout;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var13 = var8;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot13 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function CustomStatusManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = null;
                var1['previousStatus'] = var3;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function USER_SETTINGS_PROTO_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUserSettingsProtoUpdate;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['USER_SETTINGS_PROTO_UPDATE'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var3 = _closure1_slot8;
                    var1 = var3.getStatus;
                    var1 = var1.bind(var3)();
                    var2['previousStatus'] = var1;
                    var1 = var2.handleCommonUpdates;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handlePostConnectionOpen'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleCommonUpdates;
                    var1 = var1.bind(var2)();
                    var1 = var2.manageDoNotDisturbReminderPopover;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleUserSettingsProtoUpdate'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.manageExpiringCustomStatus;
                    var1 = var1.bind(var2)();
                    var1 = var2.manageExpiringStatus;
                    var1 = var1.bind(var2)();
                    var1 = var2.lazilyMigrateStatusCreatedAt;
                    var1 = var1.bind(var2)();
                    var1 = var2.manageExpiringFocusMode;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleCommonUpdates'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 8;
                        var3 = var1[var5];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.CustomStatusSetting;
                        var3 = var4.getSetting;
                        var4 = var3.bind(var4)();
                        var6 = null;
                        if(!(var6 != var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = var4.expiresAtMs;
                        if(!(var6 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 11:
                        var7 = var4.expiresAtMs;
                        var3 = '0';
                        if(!(var3 === var7)) { _fun0003_ip = 12; continue _fun0003 }
case 4:
                        var3 = _closure1_slot13;
                        if(!(var6 != var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var6 = _closure1_slot13;
                        var3 = var6.stop;
                        var3 = var3.bind(var6)();
                        _fun0003_ip = 13; continue _fun0003;
case 12:
                        var3 = global;
                        var7 = var3.Date;
                        var6 = var3.Number;
                        var4 = var4.expiresAtMs;
                        var10 = var6.bind(var1)(var4);
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var11 = var6;
                        var4 = new var11[var7](var10, var9);
                        var6 = var4 instanceof Object ? var4 : var6;
                        var4 = var6.getTime;
                        var4 = var4.bind(var6)();
                        var3 = var3.Date;
                        var6 = var3.prototype;
                        var6 = Object.create(var6, {constructor: {value: var3}});
                        var11 = var6;
                        var3 = new var11[var3](var10);
                        var6 = var3 instanceof Object ? var3 : var6;
                        var3 = var6.getTime;
                        var3 = var3.bind(var6)();
                        var7 = var4 - var3;
                        var3 = 0;
                        if(!(!(var7 > var3))) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.CustomStatusSetting;
                        var3 = var4.updateSetting;
                        var3 = var3.bind(var4)(var1);
                        var4 = _closure1_slot13;
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
                        _fun0003_ip = 13; continue _fun0003;
case 15:
                        var6 = _closure1_slot13;
                        var5 = var6.start;
                        var4 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var3 = var2.CustomStatusSetting;
                            var2 = var3.updateSetting;
                            var2 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = true;
                        var3 = var5.bind(var6)(var7, var4, var3);
                        _fun0003_ip = 13; continue _fun0003;
case 9:
                        var3 = _closure1_slot13;
                        var2 = var3.stop;
                        var2 = var2.bind(var3)();
case 13:
                        return var1;
                    }
                };
                var1['manageExpiringCustomStatus'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.StatusExpiresAtSetting;
                        var3 = var4.getSetting;
                        var5 = var3.bind(var4)();
                        var4 = null;
                        if(!(var4 != var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var3 = '0';
                        if(!(var3 !== var5)) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                        var6 = _closure1_slot8;
                        var3 = var6.getStatus;
                        var6 = var3.bind(var6)();
                        var3 = _closure1_slot10;
                        var3 = var3.ONLINE;
                        if(!(var6 === var3)) { _fun0004_ip = 20; continue _fun0004 }
case 17:
                        var3 = _closure1_slot11;
                        if(!(var4 != var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var4 = _closure1_slot11;
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
                        _fun0004_ip = 21; continue _fun0004;
case 20:
                        var3 = global;
                        var6 = var3.Date;
                        var4 = var3.Number;
                        var11 = var4.bind(var1)(var5);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var12 = var5;
                        var4 = new var12[var6](var11, var10);
                        var5 = var4 instanceof Object ? var4 : var5;
                        var4 = var5.getTime;
                        var4 = var4.bind(var5)();
                        var3 = var3.Date;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {constructor: {value: var3}});
                        var12 = var5;
                        var3 = new var12[var3](var11);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var3 = var5.getTime;
                        var3 = var3.bind(var5)();
                        var6 = var4 - var3;
                        var3 = 0;
                        if(!(!(var6 > var3))) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = {};
                        var5 = _closure1_slot10;
                        var5 = var5.ONLINE;
                        var3['nextStatus'] = var5;
                        var5 = {};
                        var7 = {};
                        var8 = _closure1_slot9;
                        var8 = var8.CUSTOM_STATUS_MANAGER;
                        var7['object'] = var8;
                        var5['location'] = var7;
                        var3['analyticsContext'] = var5;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure1_slot11;
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
                        _fun0004_ip = 21; continue _fun0004;
case 23:
                        var5 = _closure1_slot11;
                        var4 = var5.start;
                        var3 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var4 = _closure1_slot10;
                            var4 = var4.ONLINE;
                            var2['nextStatus'] = var4;
                            var4 = {};
                            var5 = {};
                            var6 = _closure1_slot9;
                            var6 = var6.CUSTOM_STATUS_MANAGER;
                            var5['object'] = var6;
                            var4['location'] = var5;
                            var2['analyticsContext'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = true;
                        var2 = var4.bind(var5)(var6, var3, var2);
case 21:
                        return var1;
                    }
                };
                var1['manageExpiringStatus'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot8;
                        var2 = var3.getStatus;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot10;
                        var2 = var2.ONLINE;
                        var2 = var3 !== var2;
                        if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 8;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var4 = var3.StatusCreatedAtSetting;
                        var3 = var4.getSetting;
                        var4 = var3.bind(var4)();
                        var3 = null;
                        var2 = var3 == var4;
case 25:
                        if(!var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var4 = var6[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var4);
                        var5 = var4.PreloadedUserSettingsActionCreators;
                        var4 = var5.updateAsync;
                        var1 = var6[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.UserSettingsDelay;
                        var3 = var1.INFREQUENT_USER_ACTION;
                        var2 = 'status';
                        var1 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var4 = var2.UInt64Value;
                            var3 = var4.create;
                            var2 = {};
                            var5 = global;
                            var7 = var5.Date;
                            var6 = var7.now;
                            var7 = var6.bind(var7)();
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = '';
                            var5 = var6.bind(var5)(var7);
                            var2['value'] = var5;
                            var3 = var3.bind(var4)(var2);
                            var2 = arg1;
                            var2['statusCreatedAtMs'] = var3;
                            return var1;
                        };
                        var1 = var4.bind(var5)(var2, var1, var3);
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['lazilyMigrateStatusCreatedAt'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = var3.FocusModeExpiresAtSetting;
                        var3 = var4.getSetting;
                        var5 = var3.bind(var4)();
                        var4 = null;
                        if(!(var4 != var5)) { _fun0006_ip = 19; continue _fun0006 }
case 18:
                        var3 = '0';
                        if(!(var3 === var5)) { _fun0006_ip = 14; continue _fun0006 }
case 19:
                        var3 = _closure1_slot12;
                        if(!(var4 != var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var4 = _closure1_slot12;
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
                        _fun0006_ip = 29; continue _fun0006;
case 14:
                        var3 = global;
                        var6 = var3.Date;
                        var4 = var3.Number;
                        var9 = var4.bind(var1)(var5);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var10 = var5;
                        var4 = new var10[var6](var9, var8);
                        var5 = var4 instanceof Object ? var4 : var5;
                        var4 = var5.getTime;
                        var4 = var4.bind(var5)();
                        var3 = var3.Date;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {constructor: {value: var3}});
                        var10 = var5;
                        var3 = new var10[var3](var9);
                        var5 = var3 instanceof Object ? var3 : var5;
                        var3 = var5.getTime;
                        var3 = var3.bind(var5)();
                        var6 = var4 - var3;
                        var3 = 0;
                        if(!(!(var6 > var3))) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 12;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.setFocusMode;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot12;
                        var3 = var4.stop;
                        var3 = var3.bind(var4)();
                        _fun0006_ip = 29; continue _fun0006;
case 31:
                        var5 = _closure1_slot12;
                        var4 = var5.start;
                        var3 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.setFocusMode;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = true;
                        var2 = var4.bind(var5)(var6, var3, var2);
case 29:
                        return var1;
                    }
                };
                var1['manageExpiringFocusMode'] = var3;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = var2.previousStatus;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                        var3 = _closure3_slot0;
                        var4 = _closure1_slot8;
                        var2 = var4.getStatus;
                        var2 = var2.bind(var4)();
                        var3['previousStatus'] = var2;
                        _fun0007_ip = 35; continue _fun0007;
case 33:
                        var4 = _closure1_slot8;
                        var2 = var4.getStatus;
                        var2 = var2.bind(var4)();
                        var4 = _closure3_slot0;
                        var5 = var4.previousStatus;
                        var4 = _closure1_slot10;
                        var4 = var4.DND;
                        var4 = var5 !== var4;
                        if(!var4) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                        var5 = _closure1_slot10;
                        var5 = var5.DND;
                        var4 = var2 === var5;
case 36:
                        if(!var4) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 10;
                        var3 = var8[var3];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var3);
                        var4 = var5.removeDismissedRecurringContent;
                        var3 = 13;
                        var3 = var8[var3];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.DismissibleContent;
                        var3 = var3.DO_NOT_DISTURB_REMINDER_POPOVER;
                        var3 = var4.bind(var5)(var3);
case 38:
                        var1 = _closure3_slot0;
                        var1['previousStatus'] = var2;
case 35:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['manageDoNotDisturbReminderPopover'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/CustomStatusManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();