// app/modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function waitSafelyForPostTTI() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 4000;
case 2:
            var _closure2_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = global;
                var5 = var1.setTimeout;
                var4 = _closure2_slot0;
                var1 = undefined;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3 = var5.bind(var1)(var3, var4);
                var _closure3_slot1 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 0;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.schedulePostTTIEvent;
                var2 = function() {
                    var1 = global;
                    var4 = var1.clearTimeout;
                    var3 = _closure3_slot1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['waitSafelyForPostTTI'] = var2;
    return var1;
})();