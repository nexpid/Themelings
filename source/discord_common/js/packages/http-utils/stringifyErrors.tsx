// discord_common/js/packages/http-utils/stringifyErrors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var3, var2, var4);
    var2 = function stringifyErrors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = null;
            var2 = var6 == var4;
            var3 = '';
            var1 = var3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = typeof var4;
            var7 = 'string';
            var2 = var4;
            if(!(var7 !== var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var6 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var4.message;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var6 = global;
            var9 = var6.Array;
            var7 = var9.isArray;
            var7 = var7.bind(var9)(var4);
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = 'object';
            if(!(var7 === var8)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var6.Object;
            var6 = var7.keys;
            var9 = var6.bind(var7)(var4);
            var8 = var9.reduce;
            var7 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var9 = arg2;
                    var3 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var2 = var1[var9];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var1 = var4;
                    if(!var8) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = var4.concat;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var14 = '';
                    var12 = ' (';
                    var10 = ')';
                    var13 = var8;
                    var11 = var9;
                    var2 = var14[var7](var13, var12, var11, var10, var9);
                    var1 = var3.bind(var4)(var2);
case 13:
                    return var1;
                }
            };
            var6 = new Array(0);
            var8 = var8.bind(var9)(var7, var6);
            var7 = var8.join;
            var6 = ', ';
            var3 = var7.bind(var8)(var6);
case 11:
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var7 = var4.reduce;
            var6 = function(arg1, arg2) {
                var3 = arg1;
                var2 = var3.concat;
                var5 = _closure1_slot0;
                var4 = undefined;
                var1 = arg2;
                var1 = var5.bind(var4)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = new Array(0);
            var7 = var7.bind(var4)(var6, var5);
            var6 = var7.join;
            var5 = ', ';
            var3 = var6.bind(var7)(var5);
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 8:
            var3 = var4.message;
case 16:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot0 = var2;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/http-utils/stringifyErrors.tsx';
    var4 = var5.bind(var6)(var4);
    var3['stringifyErrors'] = var2;
    return var1;
})();