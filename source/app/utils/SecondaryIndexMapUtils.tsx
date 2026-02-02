// app/utils/SecondaryIndexMapUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/SecondaryIndexMapUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isVersionEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var2 = var6().value;
            var3 = var1;
            var5 = undefined;
            var3 = var3 === var5;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2;
case 2:
            var2 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6().value;
            var6 = var1;
            var6 = var6 === var5;
            var2 = undefined;
            var3 = var6;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var7;
            var3 = var6;
case 4:
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1.return();
case 7:
            var8 = arg2;
            var6 = var8[Symbol.iterator];
            var8 = var6().next;
            var1 = var8().value;
            var3 = var6;
            var7 = var3 === var5;
            var3 = undefined;
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var1;
case 9:
            var1 = undefined;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var8().value;
            var8 = var6;
            var8 = var8 === var5;
            var1 = undefined;
            var7 = var8;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var1 = var9;
            var7 = var8;
case 11:
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6.return();
case 14:
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var1 = var2.bind(var5)(var4, var3);
case 16:
            return var1;
        }
    };
    var3['isVersionEqual'] = var2;
    return var1;
})();