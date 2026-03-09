// app/modules/quests/ConsoleQuestUIStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = new Array(0);
    var _closure1_slot0 = var1;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var4);
    var4 = var7.create;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = global;
        var3 = var3.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['errorHintsByQuestId'] = var3;
        var3 = function setErrorHints(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure3_slot1;
                    var3 = var3.length;
                    var7 = 0;
                    if(!(var7 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = var2.errorHintsByQuestId;
                    var4 = var5.has;
                    var3 = _closure3_slot0;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                    return var2;
case 2:
                    var3 = global;
                    var4 = var3.Map;
                    var10 = var2.errorHintsByQuestId;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var11 = var3;
                    var2 = new var11[var4](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var3 = _closure3_slot1;
                    var3 = var3.length;
                    if(!(var7 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var5 = var2.set;
                    var4 = _closure3_slot0;
                    var9 = _closure3_slot1;
                    var3 = new Array(0);
                    var10 = var3;
                    var8 = 0;
                    var6 = arraySpread(var10, var9, var8);
                    var3 = var5.bind(var2)(var4, var3);
                    _fun0001_ip = 7; continue _fun0001;
case 5:
                    var3 = var2.delete;
                    var1 = _closure3_slot0;
                    var1 = var3.bind(var2)(var1);
case 7:
                    var1 = {};
                    var1['errorHintsByQuestId'] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setErrorHints'] = var3;
        var3 = function getErrorHints(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var3 = var1.errorHintsByQuestId;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = _closure1_slot0;
case 8:
                return var1;
            }
        };
        var1['getErrorHints'] = var3;
        var3 = function clearErrorHints(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var5 = var2.errorHintsByQuestId;
                    var4 = var5.has;
                    var3 = _closure3_slot0;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    return var2;
case 10:
                    var3 = global;
                    var4 = var3.Map;
                    var6 = var2.errorHintsByQuestId;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var7 = var3;
                    var2 = new var7[var4](var6, var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var3 = var2.delete;
                    var1 = _closure3_slot0;
                    var1 = var3.bind(var2)(var1);
                    var1 = {};
                    var1['errorHintsByQuestId'] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['clearErrorHints'] = var3;
        var3 = function clearErrorHintsByType(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.errorHintsByQuestId;
                    var4 = var5.get;
                    var3 = _closure3_slot0;
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var5 = var3.filter;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure3_slot1;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var6 = var5.bind(var3)(var4);
                    var4 = var6.length;
                    var3 = var3.length;
                    if(!(var4 !== var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = global;
                    var5 = var3.Map;
                    var8 = var1.errorHintsByQuestId;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var9 = var4;
                    var3 = new var9[var5](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var5 = var6.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var5 = var3.set;
                    var4 = _closure3_slot0;
                    var4 = var5.bind(var3)(var4, var6);
                    _fun0004_ip = 18; continue _fun0004;
case 16:
                    var4 = var3.delete;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var3)(var2);
case 18:
                    var2 = {};
                    var2['errorHintsByQuestId'] = var3;
                    return var2;
case 14:
                    return var1;
case 12:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['clearErrorHintsByType'] = var3;
        var2 = function reset() {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = global;
            var1 = var1.Map;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var6 = var4;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var2['errorHintsByQuestId'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['reset'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/ConsoleQuestUIStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['useConsoleQuestUIStore'] = var2;
    return var1;
})();