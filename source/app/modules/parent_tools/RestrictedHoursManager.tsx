// app/modules/parent_tools/RestrictedHoursManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var2 = function getCurrentRestrictedHoursState() {
        var2 = _closure1_slot8;
        var1 = var2.isCurrentUserInRestrictedHours;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot12 = var2;
    var1 = function checkAndUpdateModal() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot12;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var4 = _closure1_slot9;
            if(!(var2 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            _closure1_slot9 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.closeRestrictedHoursModal;
            var2 = var2.bind(var3)();
            _fun0002_ip = 6; continue _fun0002;
case 8:
            var2 = var3.openRestrictedHoursModal;
            var2 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function handleLogout() {
        var2 = false;
        _closure1_slot9 = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.closeRestrictedHoursModal;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = false;
    var _closure1_slot9 = var5;
    var5 = null;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function RestrictedHoursManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot2;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 12:
                var1 = var2.bind(var4)(var5, var1);
                var2 = global;
                var2 = var2.Map;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var14 = var4;
                var2 = new var14[var2](var13);
                var6 = var2 instanceof Object ? var2 : var4;
                var5 = var6.set;
                var2 = _closure1_slot7;
                var4 = _closure1_slot13;
                var6 = var5.bind(var6)(var2, var4);
                var5 = var6.set;
                var2 = _closure1_slot8;
                var2 = var5.bind(var6)(var2, var4);
                var1['stores'] = var2;
                var2 = {};
                var2['POST_CONNECTION_OPEN'] = var4;
                var2['CURRENT_USER_UPDATE'] = var4;
                var3 = _closure1_slot14;
                var2['LOGOUT'] = var3;
                var1['actions'] = var2;
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
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot12;
                var1 = undefined;
                var2 = var2.bind(var1)();
                _closure1_slot9 = var2;
                if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 7;
                var2 = var5[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.openRestrictedHoursModal;
                var2 = var2.bind(var4)();
case 13:
                var2 = global;
                var5 = var2.setInterval;
                var4 = _closure1_slot13;
                var2 = 60000;
                var2 = var5.bind(var1)(var4, var2);
                _closure1_slot10 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot10;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var2 = global;
                var5 = var2.clearInterval;
                var4 = _closure1_slot10;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                _closure1_slot10 = var1;
case 15:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.closeRestrictedHoursModal;
                var2 = var2.bind(var4)();
                var2 = false;
                _closure1_slot9 = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/RestrictedHoursManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getCurrentRestrictedHoursState'] = var2;
    return var1;
})();