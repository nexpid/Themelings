// discord_common/js/packages/video-player/utils/timeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function percentToPos(arg1, arg2) {
        var2 = arg1;
        var1 = 100;
        var2 = var2 / var1;
        var1 = arg2;
        var1 = var1.width;
        var1 = var2 * var1;
        return var1;
    };
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/video-player/utils/timeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function posToTime(arg1, arg2, arg3) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.max;
        var2 = arg1;
        var1 = 0;
        var2 = var3.bind(var4)(var2, var1);
        var1 = arg2;
        var1 = var1.width;
        var2 = var2 / var1;
        var1 = arg3;
        var1 = var1 * var2;
        return var1;
    };
    var3['posToTime'] = var5;
    var5 = function timeToPos(arg1, arg2, arg3) {
        var4 = _closure1_slot0;
        var2 = arg1;
        var1 = arg2;
        var2 = var2 / var1;
        var1 = 100;
        var3 = var2 * var1;
        var2 = undefined;
        var1 = arg3;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['timeToPos'] = var5;
    var3['percentToPos'] = var4;
    var2 = function convertSecondsToClockFormat(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1 | 0;
            var2 = global;
            var6 = var2.Math;
            var5 = var6.floor;
            var1 = 3600;
            var4 = var3 / var1;
            var7 = var5.bind(var6)(var4);
            var6 = var2.Math;
            var5 = var6.floor;
            var4 = var3 % var1;
            var1 = 60;
            var4 = var4 / var1;
            var5 = var5.bind(var6)(var4);
            var9 = var3 % var1;
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.String;
            var1 = undefined;
            var6 = var3.bind(var1)(var9);
            var4 = var6.padStart;
            var3 = 2;
            var1 = '0';
            var6 = var4.bind(var6)(var3, var1);
            var1 = var2.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = ':';
            var1 = var4.bind(var3)(var5, var1, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = var2.String;
            var4 = undefined;
            var6 = var3.bind(var4)(var5);
            var3 = var6.padStart;
            var8 = 2;
            var5 = '0';
            var12 = var3.bind(var6)(var8, var5);
            var3 = var2.String;
            var4 = var3.bind(var4)(var9);
            var3 = var4.padStart;
            var10 = var3.bind(var4)(var8, var5);
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var15 = '';
            var2 = ':';
            var14 = var7;
            var13 = var2;
            var11 = var2;
            var1 = var15[var4](var14, var13, var12, var11, var10, var9);
case 4:
            return var1;
        }
    };
    var3['convertSecondsToClockFormat'] = var2;
    return var1;
})();