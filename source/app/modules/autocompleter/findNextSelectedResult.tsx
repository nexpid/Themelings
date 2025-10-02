// app/modules/autocompleter/findNextSelectedResult.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.FindResultDirections;
    var _closure1_slot0 = var7;
    var2 = var2.AutocompleterResultTypes;
    var _closure1_slot1 = var2;
    var2 = 1;
    var2 = var6[var2];
    var6 = var5.bind(var1)(var2);
    var5 = var6.fileFinishedImporting;
    var2 = 'modules/autocompleter/findNextSelectedResult.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function findNextSelectedResult(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var7 = arg3;
            var2 = arg4;
            var3 = var7.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = null;
            var6 = var5;
            if(!(var4 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var2;
            if(!(var6 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            return var5;
case 4:
            var2 = _closure1_slot0;
            var9 = var2.UP;
            var2 = 1;
            if(!(var8 === var9)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = -1;
case 7:
            var11 = var5 + var2;
            var9 = var11 < var1;
            if(var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!(!(var11 >= var3))) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var2 = var7[var11];
            var10 = var2.type;
            var2 = _closure1_slot1;
            var5 = var2.HEADER;
            var2 = var11;
            if(!(var10 === var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = _closure1_slot2;
            var16 = undefined;
            var15 = var8;
            var14 = var11;
            var13 = var7;
            var12 = var6;
            var2 = var16[var10](var15, var14, var13, var12, var11);
case 12:
            _fun0001_ip = 14; continue _fun0001;
case 9:
            var5 = _closure1_slot2;
            var4 = -1;
            if(!var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var3;
case 15:
            var16 = undefined;
            var15 = var8;
            var14 = var4;
            var13 = var7;
            var12 = var6;
            var2 = var16[var5](var15, var14, var13, var12, var11);
case 14:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var2;
    var3['default'] = var2;
    return var1;
})();