// app/modules/games/getGameMediaRefURL.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/getGameMediaRefURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGameMediaRefURL(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg2;
            var6 = arg3;
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var7.type;
            var2 = 'hash';
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 'url';
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var1;
case 6:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var8 = undefined;
            var5 = var3.bind(var8)(var2);
            var4 = var5.getSizedImageProxyURL;
            var3 = var7.value;
            var2 = {};
            var10 = var1 == var6;
            var9 = undefined;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var6.size;
case 8:
            var2['size'] = var9;
            var9 = var1 == var6;
            var8 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var6.keepAspectRatio;
case 10:
            var2['keepAspectRatio'] = var8;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 0;
            var2 = var5[var2];
            var5 = undefined;
            var8 = var4.bind(var5)(var2);
            var4 = var8.isNullOrEmpty;
            var2 = var7.value;
            var4 = var4.bind(var8)(var2);
            var2 = null;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 1;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.getGameAssetURL;
            var3 = {};
            var8 = arg1;
            var3['id'] = var8;
            var7 = var7.value;
            var3['hash'] = var7;
            var12 = var3;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var4 = var4.bind(var5)(var3);
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var4;
case 14:
            var2 = var3;
case 12:
            return var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();