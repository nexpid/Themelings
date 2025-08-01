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
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function CustomStatusManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function USER_SETTINGS_PROTO_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUpdateProto;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['USER_SETTINGS_PROTO_UPDATE'] = var4;
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleUpdateProto;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var1['actions'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 8;
                        var4 = var1[var7];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var5 = var4.CustomStatusSetting;
                        var4 = var5.getSetting;
                        var6 = var4.bind(var5)();
                        var5 = null;
                        if(!(var5 != var6)) { _fun0003_ip = 286; continue _fun0003 }
 52:
                        var4 = var6.expiresAtMs;
                        if(!(var5 != var4)) { _fun0003_ip = 78; continue _fun0003 }
 62:
                        var8 = var6.expiresAtMs;
                        var4 = '0';
                        if(!(var4 === var8)) { _fun0003_ip = 108; continue _fun0003 }
 78:
                        var4 = _closure1_slot13;
                        if(!(var5 != var4)) { _fun0003_ip = 300; continue _fun0003 }
 89:
                        var8 = _closure1_slot13;
                        var4 = var8.stop;
                        var4 = var4.bind(var8)();
                        _fun0003_ip = 300; continue _fun0003;
 108:
                        var4 = global;
                        var9 = var4.Date;
                        var8 = var4.Number;
                        var6 = var6.expiresAtMs;
                        var14 = var8.bind(var1)(var6);
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {constructor: {value: var9}});
                        var15 = var8;
                        var6 = new var15[var9](var14, var13);
                        var8 = var6 instanceof Object ? var6 : var8;
                        var6 = var8.getTime;
                        var6 = var6.bind(var8)();
                        var4 = var4.Date;
                        var8 = var4.prototype;
                        var8 = Object.create(var8, {constructor: {value: var4}});
                        var15 = var8;
                        var4 = new var15[var4](var14);
                        var8 = var4 instanceof Object ? var4 : var8;
                        var4 = var8.getTime;
                        var4 = var4.bind(var8)();
                        var10 = var6 - var4;
                        var4 = 0;
                        if(!(!(var10 > var4))) { _fun0003_ip = 259; continue _fun0003 }
 209:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var6 = var4.CustomStatusSetting;
                        var4 = var6.updateSetting;
                        var4 = var4.bind(var6)(var1);
                        var6 = _closure1_slot13;
                        var4 = var6.stop;
                        var4 = var4.bind(var6)();
                        _fun0003_ip = 300; continue _fun0003;
 259:
                        var9 = _closure1_slot13;
                        var8 = var9.start;
                        var6 = function() {
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
                        var4 = true;
                        var4 = var8.bind(var9)(var10, var6, var4);
                        _fun0003_ip = 300; continue _fun0003;
 286:
                        var6 = _closure1_slot13;
                        var4 = var6.stop;
                        var4 = var4.bind(var6)();
 300:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var6 = var4.StatusExpiresAtSetting;
                        var4 = var6.getSetting;
                        var8 = var4.bind(var6)();
                        if(!(var5 != var8)) { _fun0003_ip = 375; continue _fun0003 }
 337:
                        var4 = '0';
                        if(!(var4 !== var8)) { _fun0003_ip = 375; continue _fun0003 }
 347:
                        var6 = _closure1_slot8;
                        var4 = var6.getStatus;
                        var6 = var4.bind(var6)();
                        var4 = _closure1_slot10;
                        var4 = var4.ONLINE;
                        if(!(var6 === var4)) { _fun0003_ip = 405; continue _fun0003 }
 375:
                        var4 = _closure1_slot11;
                        if(!(var5 != var4)) { _fun0003_ip = 630; continue _fun0003 }
 386:
                        var6 = _closure1_slot11;
                        var4 = var6.stop;
                        var4 = var4.bind(var6)();
                        _fun0003_ip = 630; continue _fun0003;
 405:
                        var4 = global;
                        var9 = var4.Date;
                        var6 = var4.Number;
                        var14 = var6.bind(var1)(var8);
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {constructor: {value: var9}});
                        var15 = var8;
                        var6 = new var15[var9](var14, var13);
                        var8 = var6 instanceof Object ? var6 : var8;
                        var6 = var8.getTime;
                        var6 = var6.bind(var8)();
                        var4 = var4.Date;
                        var8 = var4.prototype;
                        var8 = Object.create(var8, {constructor: {value: var4}});
                        var15 = var8;
                        var4 = new var15[var4](var14);
                        var8 = var4 instanceof Object ? var4 : var8;
                        var4 = var8.getTime;
                        var4 = var4.bind(var8)();
                        var10 = var6 - var4;
                        var4 = 0;
                        if(!(!(var10 > var4))) { _fun0003_ip = 605; continue _fun0003 }
 500:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 9;
                        var4 = var8[var4];
                        var6 = var6.bind(var1)(var4);
                        var4 = {};
                        var8 = _closure1_slot10;
                        var8 = var8.ONLINE;
                        var4['nextStatus'] = var8;
                        var9 = _closure1_slot8;
                        var8 = var9.getStatus;
                        var8 = var8.bind(var9)();
                        var4['prevStatus'] = var8;
                        var8 = {};
                        var9 = {};
                        var11 = _closure1_slot9;
                        var11 = var11.CUSTOM_STATUS_MANAGER;
                        var9['object'] = var11;
                        var8['location'] = var9;
                        var4['analyticsContext'] = var8;
                        var4 = var6.bind(var1)(var4);
                        var6 = _closure1_slot11;
                        var4 = var6.stop;
                        var4 = var4.bind(var6)();
                        _fun0003_ip = 630; continue _fun0003;
 605:
                        var9 = _closure1_slot11;
                        var8 = var9.start;
                        var6 = function() {
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
                            var5 = _closure1_slot8;
                            var4 = var5.getStatus;
                            var4 = var4.bind(var5)();
                            var2['prevStatus'] = var4;
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
                        var4 = true;
                        var4 = var8.bind(var9)(var10, var6, var4);
 630:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var6 = var4.FocusModeExpiresAtSetting;
                        var4 = var6.getSetting;
                        var6 = var4.bind(var6)();
                        if(!(var5 != var6)) { _fun0003_ip = 677; continue _fun0003 }
 667:
                        var4 = '0';
                        if(!(var4 === var6)) { _fun0003_ip = 707; continue _fun0003 }
 677:
                        var4 = _closure1_slot12;
                        if(!(var5 != var4)) { _fun0003_ip = 876; continue _fun0003 }
 688:
                        var5 = _closure1_slot12;
                        var4 = var5.stop;
                        var4 = var4.bind(var5)();
                        _fun0003_ip = 876; continue _fun0003;
 707:
                        var4 = global;
                        var7 = var4.Date;
                        var5 = var4.Number;
                        var14 = var5.bind(var1)(var6);
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var15 = var6;
                        var5 = new var15[var7](var14, var13);
                        var6 = var5 instanceof Object ? var5 : var6;
                        var5 = var6.getTime;
                        var5 = var5.bind(var6)();
                        var4 = var4.Date;
                        var6 = var4.prototype;
                        var6 = Object.create(var6, {constructor: {value: var4}});
                        var15 = var6;
                        var4 = new var15[var4](var14);
                        var6 = var4 instanceof Object ? var4 : var6;
                        var4 = var6.getTime;
                        var4 = var4.bind(var6)();
                        var6 = var5 - var4;
                        var4 = 0;
                        if(!(!(var6 > var4))) { _fun0003_ip = 851; continue _fun0003 }
 802:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 10;
                        var4 = var7[var4];
                        var7 = var5.bind(var1)(var4);
                        var5 = var7.setFocusMode;
                        var4 = false;
                        var4 = var5.bind(var7)(var4);
                        var5 = _closure1_slot12;
                        var4 = var5.stop;
                        var4 = var4.bind(var5)();
                        _fun0003_ip = 876; continue _fun0003;
 851:
                        var5 = _closure1_slot12;
                        var4 = var5.start;
                        var3 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
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
 876:
                        return var1;
                    }
                };
                var1['handleUpdateProto'] = var2;
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/CustomStatusManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();