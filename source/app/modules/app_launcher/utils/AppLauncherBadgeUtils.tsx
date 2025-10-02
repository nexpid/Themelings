// app/modules/app_launcher/utils/AppLauncherBadgeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/app_launcher/utils/AppLauncherBadgeUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.storeState;
            var4 = var2.surface;
            var5 = global;
            var3 = var5.Date;
            var2 = var3.now;
            var6 = var2.bind(var3)();
            var3 = var1.dateRangesForSurfaces;
            var1 = null;
            var7 = var1 == var3;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3[var4];
case 2:
            var3 = var1 != var2;
            var1 = 0;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var5.Date;
            var9 = var2.fromDate;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var3 = new var10[var8](var9, var8);
            var7 = var3 instanceof Object ? var3 : var7;
            var3 = var7.getTime;
            var3 = var3.bind(var7)();
            var3 = var3 < var6;
            var1 = 0;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var8 = var5.Date;
            var9 = var2.untilDate;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var3 = new var10[var8](var9, var8);
            var7 = var3 instanceof Object ? var3 : var7;
            var3 = var7.getTime;
            var3 = var3.bind(var7)();
            var3 = var3 > var6;
            var1 = 0;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var4 = var5.Math;
            var3 = var4.floor;
            var6 = var5.Date;
            var9 = var2.fromDate;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var2 = new var10[var6](var9, var8);
            var5 = var2 instanceof Object ? var2 : var5;
            var2 = var5.getTime;
            var5 = var2.bind(var5)();
            var2 = 1000;
            var2 = var5 / var2;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['getNewestBadgeableVersion'] = var2;
    return var1;
})();