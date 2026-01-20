// app/modules/telemetry_ring/channels/BaseTelemetryChannel.tsx
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
        var3 = function BaseTelemetryChannel(arg1, arg2) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['native'] = var2;
            var2 = arg2;
            var3['channels'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'append';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3, arg4) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg2;
                var3 = arg3;
                var7 = arg4;
                var1 = this;
                var6 = null;
                if(!(var6 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var7 = var4.bind(var5)();
case 2:
                var4 = var6 != var3;
                var5 = null;
                if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var3;
case 4:
                var3 = var6 != var2;
                var6 = null;
                if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = var2;
case 6:
                var4 = var1.native;
                var3 = var4.append;
                var8 = var1.channels;
                var12 = arg1;
                var13 = var4;
                var11 = var7;
                var10 = var5;
                var9 = var6;
                var1 = var13[var3](var12, var11, var10, var9, var8, var7);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'snapshot';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var1 = this;
            var6 = var1.native;
            var5 = var6.snapshot;
            var10 = var1.channels;
            var9 = arg1;
            var8 = arg2;
            var7 = arg3;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'clearAll';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.native;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/telemetry_ring/channels/BaseTelemetryChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();