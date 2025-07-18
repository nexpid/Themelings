// app/modules/autocompleter/record/InAppNavigationRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var7[var2];
    var5 = var5.bind(var1)(var2);
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Routes;
    var _closure1_slot5 = var2;
    var2 = {};
    var8 = 'SHOP';
    var2['SHOP'] = var8;
    var8 = 'NITRO_HOME';
    var2['NITRO_HOME'] = var8;
    var8 = 'QUEST_HOME';
    var2['QUEST_HOME'] = var8;
    var8 = 'APPS_HOME';
    var2['APPS_HOME'] = var8;
    var8 = 'SETTINGS';
    var2['SETTINGS'] = var8;
    var _closure1_slot6 = var2;
    var4 = function(arg1) {
        var5 = function InAppNavigationRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.type;
                var1['id'] = var3;
                var3 = var2.path;
                var1['path'] = var3;
                var3 = var2.type;
                var1['type'] = var3;
                var2 = var2.label;
                var1['label'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var1 = {};
        var6 = 'fromType';
        var1['key'] = var6;
        var2 = function value(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var1 = _closure1_slot6;
                var1 = var1.SHOP;
                if(!(var1 !== var4)) { _fun0003_ip = 401; continue _fun0003 }
 26:
                var1 = _closure1_slot6;
                var1 = var1.NITRO_HOME;
                if(!(var1 !== var4)) { _fun0003_ip = 338; continue _fun0003 }
 43:
                var1 = _closure1_slot6;
                var1 = var1.QUEST_HOME;
                if(!(var1 !== var4)) { _fun0003_ip = 275; continue _fun0003 }
 60:
                var1 = _closure1_slot6;
                var1 = var1.APPS_HOME;
                if(!(var1 !== var4)) { _fun0003_ip = 212; continue _fun0003 }
 77:
                var1 = _closure1_slot6;
                var1 = var1.SETTINGS;
                if(!(var1 !== var4)) { _fun0003_ip = 127; continue _fun0003 }
 91:
                var1 = global;
                var5 = var1.Error;
                var1 = var5.prototype;
                var4 = Object.create(var1, {constructor: {value: var5}});
                var8 = 'Unhandled InAppNavigationType';
                var9 = var4;
                var1 = new var9[var5](var8, var7);
                var1 = var1 instanceof Object ? var1 : var4;
                throw var1;
 127:
                var4 = _closure2_slot0;
                var1 = {};
                var5 = null;
                if(!(var5 == var3)) { _fun0003_ip = 161; continue _fun0003 }
 142:
                var7 = _closure1_slot5;
                var6 = var7.SETTINGS;
                var5 = 'account';
                var3 = var6.bind(var7)(var5);
 161:
                var1['path'] = var3;
                var3 = arg3;
                var1['label'] = var3;
                var3 = _closure1_slot6;
                var3 = var3.SETTINGS;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
 212:
                var4 = _closure2_slot0;
                var1 = {};
                var3 = _closure1_slot5;
                var3 = var3.GLOBAL_DISCOVERY_APPS;
                var1['path'] = var3;
                var3 = _closure1_slot6;
                var3 = var3.APPS_HOME;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
 275:
                var4 = _closure2_slot0;
                var1 = {};
                var3 = _closure1_slot5;
                var3 = var3.QUEST_HOME;
                var1['path'] = var3;
                var3 = _closure1_slot6;
                var3 = var3.QUEST_HOME;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
 338:
                var4 = _closure2_slot0;
                var1 = {};
                var3 = _closure1_slot5;
                var3 = var3.NITRO_HOME;
                var1['path'] = var3;
                var3 = _closure1_slot6;
                var3 = var3.NITRO_HOME;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
 401:
                var3 = _closure2_slot0;
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.COLLECTIBLES_SHOP;
                var1['path'] = var4;
                var2 = _closure1_slot6;
                var2 = var2.SHOP;
                var1['type'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var8 = var1;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/autocompleter/record/InAppNavigationRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['InAppNavigationRecord'] = var4;
    var3['InAppNavigationType'] = var2;
    return var1;
})();