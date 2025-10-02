// app/modules/notifications/HabitualDNDStore.tsx
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function hasBeenUsingDND() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot10;
            var3 = var1.length;
            var1 = 4;
            var1 = var3 >= var1;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot10;
            var3 = var4.some;
            var2 = function(arg1) {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.Millis;
                var3 = var1.DAY;
                var1 = 3;
                var1 = var1 * var3;
                var2 = var2 - var1;
                var1 = arg1;
                var1 = var1 < var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.StatusTypes;
    var _closure1_slot9 = var2;
    var2 = new Array(0);
    var _closure1_slot10 = var2;
    var2 = false;
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function HabitualDNDStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                var2 = var2 != var1;
                if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = global;
                var5 = var3.Array;
                var4 = var5.isArray;
                var3 = var1.sessionStartsWithDND;
                var2 = var4.bind(var5)(var3);
case 11:
                if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = var1.sessionStartsWithDND;
                _closure1_slot10 = var2;
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'showNagBar';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot10;
            var1['sessionStartsWithDND'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getTemp';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.StatusExpiresAtSetting;
            var2 = var3.getSetting;
            var2 = var2.bind(var3)();
            var1['x'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'HabitualDNDStore';
    var8['displayName'] = var2;
    var2 = 'habitualDND';
    var8['persistKey'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnect() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = var4.getStatus;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot9;
            var3 = var3.DND;
            if(!(var4 === var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 8;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var5 = var3.StatusExpiresAtSetting;
            var3 = var5.getSetting;
            var5 = var3.bind(var5)();
            var3 = '0';
            if(!(var3 !== var5)) { _fun0005_ip = 17; continue _fun0005 }
case 15:
            var3 = new Array(0);
            _closure1_slot10 = var3;
            _fun0005_ip = 18; continue _fun0005;
case 17:
            var7 = _closure1_slot10;
            var6 = var7.push;
            var3 = global;
            var8 = var3.Date;
            var5 = var8.now;
            var5 = var5.bind(var8)();
            var5 = var6.bind(var7)(var5);
            var7 = _closure1_slot10;
            var6 = var7.filter;
            var5 = function(arg1) {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.Millis;
                var3 = var1.DAY;
                var1 = 5;
                var1 = var1 * var3;
                var2 = var2 - var1;
                var1 = arg1;
                var1 = var1 > var2;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            _closure1_slot10 = var5;
            var5 = _closure1_slot13;
            var5 = var5.bind(var4)();
            if(!var5) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var3 = var3.setTimeout;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.Millis;
            var5 = var2.SECOND;
            var2 = 15;
            var2 = var2 * var5;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'HABITUAL_DND_CLEAR';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var2['POST_CONNECTION_OPEN'] = var9;
    var4 = function handleDNDClear() {
        var2 = _closure1_slot13;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = !var2;
        var2 = !var2;
        _closure1_slot11 = var2;
        var2 = new Array(0);
        _closure1_slot10 = var2;
        return var1;
    };
    var2['HABITUAL_DND_CLEAR'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/HabitualDNDStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();