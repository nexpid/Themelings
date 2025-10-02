// discord_common/js/packages/performance-utils/index.js
module.exports = (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var1 = global;
        var12 = require;
        var17 = exports;
        var13 = dependencyMap;
        var3 = var1;
        var11 = var1;
        var7 = var12;
        var2 = var17;
        var6 = var13;
        var1 = undefined;
        var5 = undefined;
        var8 = undefined;
        var4 = undefined;
        var9 = global;
        var16 = var9.Object;
        var15 = var16.defineProperty;
        var14 = {};
        var10 = true;
        var14['value'] = var10;
        var10 = '__esModule';
        var10 = var15.bind(var16)(var17, var10, var14);
        var10 = 0;
        var10 = var13[var10];
        var10 = var12.bind(var1)(var10);
case 2: // try_start_0
        var10 = var9.Date;
        var12 = var10.now;
        var10 = null;
        if(!(var10 == var12)) { _fun0001_ip = 3; continue _fun0001 }
case 4:
        var12 = var9.Date;
        var10 = function() {
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = var2.valueOf;
            var1 = var1.bind(var2)();
            return var1;
        };
        var12['now'] = var10;
case 3: // try_end0
        _fun0001_ip = 5; continue _fun0001;
case 6: // catch_target0
        CatchBlockStart(arg_register=9);
case 5:
        var12 = undefined;
case 7: // try_start_1
        var10 = var11;
        var10 = var10.performance;
        var10 = var10.timing;
        var13 = var10.navigationStart;
        var12 = var13;
        var10 = null;
        if(!(var10 == var13)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var10 = var11;
        var13 = var10.performance;
        var10 = var13.now;
        var10 = var10.bind(var13)();
        _fun0001_ip = 10; continue _fun0001;
case 8:
        var10 = var12;
case 10: // try_end1
        _fun0001_ip = 11; continue _fun0001;
case 12: // catch_target1
        CatchBlockStart(arg_register=11);
        var13 = var9.Date;
        var12 = var13.now;
        var10 = var12.bind(var13)();
case 11:
        var5 = var10;
        var8 = var10;
        var10 = undefined;
case 13: // try_start_2
        var11 = var11.performance;
        var12 = var11.timeOrigin;
        var10 = var12;
        var11 = null;
        if(!(var11 == var12)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        _fun0001_ip = 16; continue _fun0001;
case 14:
        var8 = var10;
case 16: // try_end2
        _fun0001_ip = 17; continue _fun0001;
case 18: // catch_target2
        CatchBlockStart(arg_register=9);
        var10 = var9.Date;
        var9 = var10.now;
        var8 = var9.bind(var10)();
case 17:
        var4 = var8;
        var8 = var3;
        var8 = var8.performance;
        var8 = var8.timing;
        var9 = null;
        if(!(var9 == var8)) { _fun0001_ip = 19; continue _fun0001 }
case 20: // try_start_3
        var8 = var3;
        var10 = var8.performance;
        var8 = {};
        var11 = var5;
        var8['navigationStart'] = var11;
        var10['timing'] = var8;
case 21: // try_end3
        _fun0001_ip = 19; continue _fun0001;
case 22: // catch_target3
        CatchBlockStart(arg_register=7);
case 19:
        var8 = var3;
        var8 = var8.performance;
        var8 = var8.timeOrigin;
        if(!(var9 == var8)) { _fun0001_ip = 23; continue _fun0001 }
case 24: // try_start_4
        var8 = var3;
        var9 = var8.performance;
        var8 = var4;
        var9['timeOrigin'] = var8;
case 25: // try_end4
        _fun0001_ip = 23; continue _fun0001;
case 26: // catch_target4
        CatchBlockStart(arg_register=7);
case 23:
        var3 = var3.performance;
        var8 = var6;
        var6 = 1;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = '../discord_common/js/packages/performance-utils/index.js';
        var6 = var7.bind(var8)(var6);
        var2['navigationStart'] = var5;
        var2['timeOrigin'] = var4;
        var2['performance'] = var3;
        return var1;
    }
})();