// discord_common/js/shared/utils/InteractionObserverUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function __handleIntersections(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var7 = var2.bind(var3)(var1);
                var4 = null;
                var2 = var4 == var7;
                var1 = undefined;
                var3 = undefined;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = var7.get;
                var2 = var5.target;
                var3 = var6.bind(var7)(var2);
case 2:
                if(!(var4 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var3.call;
                var2 = var2.bind(var3)(var4, var5);
case 4:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var4 = var1.WeakMap;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var11 = var5;
    var4 = new var11[var4](var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot0 = var4;
    var1 = var1.WeakMap;
    var4 = var1.prototype;
    var4 = Object.create(var4, {constructor: {value: var1}});
    var11 = var4;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot1 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/utils/InteractionObserverUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getIntersectionObserver(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)(var7);
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = global;
            var6 = var3.IntersectionObserver;
            var9 = _closure1_slot2;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var8 = var7;
            var2 = new var10[var6](var9, var8, var7);
            var2 = var2 instanceof Object ? var2 : var5;
            var6 = _closure1_slot0;
            var5 = var6.set;
            var5 = var5.bind(var6)(var7, var2);
            var5 = _closure1_slot1;
            var4 = var5.set;
            var3 = var3.WeakMap;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var10 = var6;
            var3 = new var10[var3](var9);
            var3 = var3 instanceof Object ? var3 : var6;
            var3 = var4.bind(var5)(var2, var3);
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['getIntersectionObserver'] = var4;
    var4 = function watch(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var3 = _closure1_slot1;
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 == var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = global;
            var2 = var2.WeakMap;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var9 = var5;
            var2 = new var9[var2](var8);
            var3 = var2 instanceof Object ? var2 : var5;
case 8:
            var2 = var3.has;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = var4.observe;
            var2 = var2.bind(var4)(var6);
case 10:
            var5 = var3.set;
            var2 = arg3;
            var2 = var5.bind(var3)(var6, var2);
            var2 = _closure1_slot1;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = undefined;
            return var1;
        }
    };
    var3['watch'] = var4;
    var2 = function unwatch(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var3 = _closure1_slot1;
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 == var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var2 = global;
            var2 = var2.WeakMap;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var9 = var6;
            var2 = new var9[var2](var8);
            var3 = var2 instanceof Object ? var2 : var6;
case 8:
            var2 = var3.has;
            var2 = var2.bind(var3)(var5);
            if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 11:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var5);
            var2 = var4.unobserve;
            var2 = var2.bind(var4)(var5);
            var2 = _closure1_slot1;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
case 12:
            var1 = undefined;
            return var1;
        }
    };
    var3['unwatch'] = var2;
    return var1;
})();