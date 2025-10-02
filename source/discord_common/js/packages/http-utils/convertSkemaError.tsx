// discord_common/js/packages/http-utils/convertSkemaError.tsx
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
    var2 = '../discord_common/js/packages/http-utils/convertSkemaError.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function convertSkemaError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var12 = arg1;
            var1 = {};
            var10 = var12;
            var5 = global;
            var4 = 0;
            var3 = null;
            var2 = '_errors';
            var6 = undefined;
            for(var7 in var10)
case 2:
            {
case 3:
                var16 = var7;
                var18 = var12[var16];
                if(var3 == var18) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                if(!(var16 === var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var17 = var12[var16];
                var15 = var17.map;
                var14 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.message;
                    return var1;
                };
                var14 = var15.bind(var17)(var14);
                var1['_misc'] = var14;
case 5:
                var15 = var5.Array;
                var14 = var15.isArray;
                var14 = var14.bind(var15)(var18);
                if(var14) { _fun0001_ip = 2; continue _fun0001 }
case 7:
                var14 = var18._errors;
                if(!(var3 == var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var17 = var5.Object;
                var15 = var17.keys;
                var15 = var15.bind(var17)(var18);
                var17 = var15[var4];
                var15 = new Array(1);
                var15[0] = var17;
                _fun0001_ip = 10; continue _fun0001;
case 8:
                var18 = var14.map;
                var17 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.message;
                    return var1;
                };
                var15 = var18.bind(var14)(var17);
case 10:
                var1[var16] = var15;
                var6 = var14;
                _fun0001_ip = 2; continue _fun0001;
            }
case 11:
            return var1;
        }
    };
    var3['convertSkemaError'] = var2;
    return var1;
})();