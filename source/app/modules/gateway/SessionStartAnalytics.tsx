// app/modules/gateway/SessionStartAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function SessionStartAnalytics() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['headlessTasks'] = var2;
            var2 = null;
            var3['latestHeadlessTaskRunOn'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'recordStartHeadlessTask';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var1 = var2.headlessTasks;
                var3 = var1.length;
                var1 = 5;
                if(!(var3 >= var1)) { _fun0001_ip = 37; continue _fun0001 }
 21:
                var3 = var2.headlessTasks;
                var1 = var3.shift;
                var1 = var1.bind(var3)();
 37:
                var4 = var2.headlessTasks;
                var3 = var4.push;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['latestHeadlessTaskRunOn'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'getLatestTaskRunOn';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.latestHeadlessTaskRunOn;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getHeadlessTasks';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.headlessTasks;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = new Array(0);
            var2['headlessTasks'] = var1;
            var1 = null;
            var2['latestHeadlessTaskRunOn'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/SessionStartAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();