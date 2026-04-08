// app/modules/a11y/native/AccessibilityCallManager.tsx
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
    var1 = function announceIncomingCall(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot12;
            var2 = var3.has;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var8 = undefined;
            var3 = var3.bind(var8)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var2 = var3.bind(var8)(var2);
            var3 = var2.NativePhoneIntegrationEnabled;
            var2 = var3.getSetting;
            var2 = var2.bind(var3)();
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var3 = _closure1_slot9;
            var2 = var3.getChannel;
            var9 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var9)) { _fun0002_ip = 6; continue _fun0002 }
case 10:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var7 = var5.bind(var8)(var3);
            var6 = var7.computeChannelName;
            var5 = _closure1_slot11;
            var3 = _closure1_slot10;
            var7 = var6.bind(var7)(var9, var5, var3);
            if(!(var2 != var7)) { _fun0002_ip = 6; continue _fun0002 }
case 11:
            var3 = _closure1_slot12;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var2.bind(var8)(var1);
            var4 = var1.AccessibilityAnnouncer;
            var3 = var4.announce;
            var1 = 13;
            var5 = var9[var1];
            var5 = var2.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var1 = var9[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.Bm0A/p;
            var1 = {};
            var1['callLocation'] = var7;
            var2 = var5.bind(var6)(var2, var1);
            var1 = 'assertive';
            var1 = var3.bind(var4)(var2, var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = var4.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot12 = var8;
    var4 = var4.Map;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AccessibilityCallManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
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
                if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 14; continue _fun0003;
case 12:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 14:
                var1 = var3.bind(var4)(var5, var1);
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.channelId;
                        var5 = var1.ongoingRings;
                        var4 = _closure1_slot8;
                        var2 = var4.getId;
                        var4 = var2.bind(var4)();
                        var2 = null;
                        var2 = var2 != var4;
                        if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var2 = var4 in var5;
case 15:
                        var5 = _closure1_slot13;
                        var4 = var5.set;
                        var4 = var4.bind(var5)(var3, var2);
                        if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 17:
                        var2 = _closure1_slot15;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallCreate'] = var3;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.channelId;
                        var6 = var1.ongoingRings;
                        var4 = _closure1_slot8;
                        var2 = var4.getId;
                        var5 = var2.bind(var4)();
                        var4 = _closure1_slot13;
                        var2 = var4.get;
                        var7 = var2.bind(var4)(var3);
                        var4 = null;
                        var2 = var4 != var7;
                        if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                        var2 = var7;
case 18:
                        var4 = var4 != var5;
                        if(!var4) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var4 = var5 in var6;
case 20:
                        var6 = _closure1_slot13;
                        var5 = var6.set;
                        var5 = var5.bind(var6)(var3, var4);
                        if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 12:
                        if(!var4) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                        var6 = _closure1_slot15;
                        var5 = undefined;
                        var5 = var6.bind(var5)(var3);
                        _fun0005_ip = 24; continue _fun0005;
case 22:
                        if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var2 = !var4;
case 25:
                        if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 27:
                        var2 = _closure1_slot12;
                        var1 = var2.delete;
                        var1 = var1.bind(var2)(var3);
case 24:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallUpdate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.channelId;
                    var4 = _closure1_slot13;
                    var2 = var4.delete;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure1_slot12;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                };
                var1['handleCallDelete'] = var3;
                var2 = function() {
                    var3 = _closure1_slot13;
                    var2 = var3.clear;
                    var2 = var2.bind(var3)();
                    var2 = _closure1_slot12;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleConnectionOpen'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 14;
            var6 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleCallCreate;
            var6 = 'CALL_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleCallUpdate;
            var6 = 'CALL_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleCallDelete;
            var6 = 'CALL_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = var2.handleConnectionOpen;
            var2 = 'CONNECTION_OPEN';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var3 = this;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 14;
            var7 = var6[var4];
            var1 = undefined;
            var10 = var5.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = var3.handleCallCreate;
            var7 = 'CALL_CREATE';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = var3.handleCallUpdate;
            var7 = 'CALL_UPDATE';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var6[var4];
            var10 = var5.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = var3.handleCallDelete;
            var7 = 'CALL_DELETE';
            var7 = var9.bind(var10)(var7, var8);
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.unsubscribe;
            var4 = var3.handleConnectionOpen;
            var3 = 'CONNECTION_OPEN';
            var3 = var5.bind(var6)(var3, var4);
            var4 = _closure1_slot13;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot12;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/AccessibilityCallManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();