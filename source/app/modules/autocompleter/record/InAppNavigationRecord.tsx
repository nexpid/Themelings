// app/modules/autocompleter/record/InAppNavigationRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var5 = var5.bind(var1)(var2);
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Routes;
    var _closure1_slot7 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.QuestsExperimentLocations;
    var _closure1_slot8 = var2;
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
    var _closure1_slot9 = var2;
    var4 = function(arg1) {
        var5 = function InAppNavigationRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot5;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
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
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var1 = {};
        var6 = 'fromType';
        var1['key'] = var6;
        var2 = function value(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var1 = _closure1_slot9;
                var1 = var1.SHOP;
                if(!(var1 !== var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = _closure1_slot9;
                var1 = var1.NITRO_HOME;
                if(!(var1 !== var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = _closure1_slot9;
                var1 = var1.QUEST_HOME;
                if(!(var1 !== var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var1 = _closure1_slot9;
                var1 = var1.APPS_HOME;
                if(!(var1 !== var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var1 = _closure1_slot9;
                var1 = var1.SETTINGS;
                if(!(var1 !== var4)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var1 = global;
                var5 = var1.Error;
                var1 = var5.prototype;
                var4 = Object.create(var1, {constructor: {value: var5}});
                var8 = 'Unhandled InAppNavigationType';
                var9 = var4;
                var1 = new var9[var5](var8, var7);
                var1 = var1 instanceof Object ? var1 : var4;
                throw var1;
case 17:
                var4 = _closure2_slot0;
                var1 = {};
                var5 = null;
                if(!(var5 == var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var7 = _closure1_slot7;
                var6 = var7.SETTINGS;
                var5 = 'account';
                var3 = var6.bind(var7)(var5);
case 19:
                var1['path'] = var3;
                var3 = arg3;
                var1['label'] = var3;
                var3 = _closure1_slot9;
                var3 = var3.SETTINGS;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
case 15:
                var4 = _closure2_slot0;
                var1 = {};
                var3 = _closure1_slot7;
                var3 = var3.GLOBAL_DISCOVERY_APPS;
                var1['path'] = var3;
                var3 = _closure1_slot9;
                var3 = var3.APPS_HOME;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
case 13:
                var4 = _closure2_slot0;
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 8;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var6 = var3.QuestHomeEntrypointRelocation;
                var5 = var6.getConfig;
                var3 = {};
                var7 = _closure1_slot8;
                var7 = var7.IN_APP_NAVIGATION;
                var3['location'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = var3.enabled;
                var5 = _closure1_slot7;
                if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var3 = var5.QUEST_HOME;
                _fun0003_ip = 23; continue _fun0003;
case 21:
                var3 = var5.QUEST_HOME_V2;
case 23:
                var1['path'] = var3;
                var3 = _closure1_slot9;
                var3 = var3.QUEST_HOME;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
case 11:
                var4 = _closure2_slot0;
                var1 = {};
                var3 = _closure1_slot7;
                var3 = var3.NITRO_HOME;
                var1['path'] = var3;
                var3 = _closure1_slot9;
                var3 = var3.NITRO_HOME;
                var1['type'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var1;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
case 9:
                var3 = _closure2_slot0;
                var1 = {};
                var4 = _closure1_slot7;
                var4 = var4.COLLECTIBLES_SHOP;
                var1['path'] = var4;
                var2 = _closure1_slot9;
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
    var5 = 9;
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