// discord_common/js/shared/utils/MutexUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/utils/MutexUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createLock() {
        var2 = global;
        var4 = var2.Promise;
        var3 = var4.resolve;
        var2 = null;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                var4 = _closure2_slot0;
                var3 = var4.then;
                var1 = _closure3_slot0;
                var5 = var3.bind(var4)(var1);
                var4 = var5.then;
                var3 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var1);
                _closure2_slot0 = var1;
                var1 = undefined;
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        return var1;
    };
    var3['createLock'] = var4;
    var2 = function createObservableLock(arg1) {
        var1 = arg1;
        var3 = global;
        var5 = var3.Promise;
        var4 = var5.resolve;
        var3 = null;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var3 = new Array(0);
        var _closure2_slot1 = var3;
        var3 = false;
        var _closure2_slot2 = var3;
        var3 = var1.onContention;
        var _closure2_slot3 = var3;
        var3 = var1.onContentionResolved;
        var _closure2_slot4 = var3;
        var3 = var1.onTimeout;
        var _closure2_slot5 = var3;
        var1 = var1.timeoutMs;
        var _closure2_slot6 = var1;
        var1 = function mutex(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg2;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var5;
                var2 = _closure2_slot1;
                var4 = var2.length;
                var2 = 0;
                if(!(!(var4 > var2))) { _fun0001_ip = 59; continue _fun0001 }
 34:
                var2 = _closure2_slot2;
                if(!var2) { _fun0001_ip = 81; continue _fun0001 }
 41:
                var4 = _closure2_slot4;
                var2 = undefined;
                var2 = var4.bind(var2)();
                var2 = false;
                _closure2_slot2 = var2;
                _fun0001_ip = 81; continue _fun0001;
 59:
                var6 = _closure2_slot3;
                var4 = _closure2_slot1;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var4);
                var2 = true;
                _closure2_slot2 = var2;
 81:
                var4 = _closure2_slot1;
                var2 = var4.push;
                var2 = var2.bind(var4)(var5);
                var2 = _closure2_slot6;
                var5 = null;
                var4 = var5 == var2;
                var2 = null;
                if(var4) { _fun0001_ip = 150; continue _fun0001 }
 110:
                var4 = _closure2_slot5;
                var4 = var5 == var4;
                var2 = null;
                if(var4) { _fun0001_ip = 150; continue _fun0001 }
 123:
                var4 = global;
                var6 = var4.setTimeout;
                var5 = _closure2_slot6;
                var4 = undefined;
                var3 = function() {
                    var4 = _closure2_slot5;
                    var3 = _closure3_slot1;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2 = var6.bind(var4)(var3, var5);
 150:
                var _closure3_slot2 = var2;
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var8 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var6 = _closure2_slot0;
                        var5 = var6.then;
                        var4 = _closure3_slot0;
                        var7 = var5.bind(var6)(var4);
                        var6 = var7.then;
                        var5 = arg1;
                        var4 = arg2;
                        var6 = var6.bind(var7)(var5, var4);
                        var5 = var6.then;
                        var4 = function() {
                            var4 = _closure2_slot1;
                            var3 = var4.splice;
                            var2 = 0;
                            var1 = 1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        _closure2_slot0 = var4;
                        var4 = _closure3_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0002_ip = 99; continue _fun0002 }
 74:
                        var4 = _closure2_slot0;
                        var3 = var4.then;
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure3_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var1);
                        _closure2_slot0 = var1;
 99:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var3 = function() {
            var1 = _closure2_slot1;
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['isMutexHeld'] = var3;
        var2 = function() {
            var1 = _closure2_slot1;
            return var1;
        };
        var1['getLockHolders'] = var2;
        return var1;
    };
    var3['createObservableLock'] = var2;
    return var1;
})();