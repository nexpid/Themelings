// discord_common/js/packages/performance-utils/index.js
module.exports = (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var1 = native1;
        var12 = native2;
        var17 = native6;
        var13 = native7;
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
 78: // try_start_0
        var10 = var9.Date;
        var12 = var10.now;
        var10 = null;
        if(!(var10 == var12)) { _fun0001_ip = 114; continue _fun0001 }
 95:
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
 114: // try_end0
        _fun0001_ip = 118; continue _fun0001;
 116: // catch_target0
        CatchBlockStart(arg_register=9);
 118:
        var12 = undefined;
 120: // try_start_1
        var10 = var11;
        var10 = var10.performance;
        var10 = var10.timing;
        var13 = var10.navigationStart;
        var12 = var13;
        var10 = null;
        if(!(var10 == var13)) { _fun0001_ip = 170; continue _fun0001 }
 150:
        var10 = var11;
        var13 = var10.performance;
        var10 = var13.now;
        var10 = var10.bind(var13)();
        _fun0001_ip = 173; continue _fun0001;
 170:
        var10 = var12;
 173: // try_end1
        _fun0001_ip = 192; continue _fun0001;
 175: // catch_target1
        CatchBlockStart(arg_register=11);
        var13 = var9.Date;
        var12 = var13.now;
        var10 = var12.bind(var13)();
 192:
        var5 = var10;
        var8 = var10;
        var10 = undefined;
 200: // try_start_2
        var11 = var11.performance;
        var12 = var11.timeOrigin;
        var10 = var12;
        var11 = null;
        if(!(var11 == var12)) { _fun0001_ip = 223; continue _fun0001 }
 221:
        _fun0001_ip = 226; continue _fun0001;
 223:
        var8 = var10;
 226: // try_end2
        _fun0001_ip = 245; continue _fun0001;
 228: // catch_target2
        CatchBlockStart(arg_register=9);
        var10 = var9.Date;
        var9 = var10.now;
        var8 = var9.bind(var10)();
 245:
        var4 = var8;
        var8 = var3;
        var8 = var8.performance;
        var8 = var8.timing;
        var9 = null;
        if(!(var9 == var8)) { _fun0001_ip = 298; continue _fun0001 }
 269: // try_start_3
        var8 = var3;
        var10 = var8.performance;
        var8 = {};
        var11 = var5;
        var8['navigationStart'] = var11;
        var10['timing'] = var8;
 294: // try_end3
        _fun0001_ip = 298; continue _fun0001;
 296: // catch_target3
        CatchBlockStart(arg_register=7);
 298:
        var8 = var3;
        var8 = var8.performance;
        var8 = var8.timeOrigin;
        if(!(var9 == var8)) { _fun0001_ip = 339; continue _fun0001 }
 317: // try_start_4
        var8 = var3;
        var9 = var8.performance;
        var8 = var4;
        var9['timeOrigin'] = var8;
 335: // try_end4
        _fun0001_ip = 339; continue _fun0001;
 337: // catch_target4
        CatchBlockStart(arg_register=7);
 339:
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