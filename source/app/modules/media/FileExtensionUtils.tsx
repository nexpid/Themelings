// app/modules/media/FileExtensionUtils.tsx
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
    var1 = {'image/avif': 'avif', 'image/gif': 'gif', 'image/heic': 'heic', 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'video/mp4': 'mp4', 'video/quicktime': 'mov', 'video/webm': 'webm'};
    var _closure1_slot2 = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media/FileExtensionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function decideFileExtension(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var2 = arguments[2];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var1 = undefined;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.toURLSafe;
            var3 = var2.bind(var3)(var5);
            var2 = null;
            var7 = var2 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var3.searchParams;
            var7 = var9.get;
            var3 = 'format';
            var7 = var7.bind(var9)(var3);
            var3 = var2 == var7;
            var4 = undefined;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = var7.toLowerCase;
            var4 = var3.bind(var7)();
case 6:
            var3 = var2 != var4;
            var2 = undefined;
            if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = '';
            var2 = undefined;
            if(!(var3 !== var4)) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var3 = 'jpg';
            var7 = 'jpeg';
            if(!(var7 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var4;
case 12:
            var2 = var3;
case 9:
            var1 = var2;
case 4:
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var3 != var8;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = _closure1_slot2;
            var4 = var8.toLowerCase;
            var4 = var4.bind(var8)();
            var2 = var7[var4];
            if(!(var3 == var2)) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var7 = var8.split;
            var4 = '/';
            var7 = var7.bind(var8)(var4);
            var4 = 1;
            var7 = var7[var4];
            var4 = var3 == var7;
            var8 = undefined;
            if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var4 = var7.toLowerCase;
            var8 = var4.bind(var7)();
case 19:
            var4 = 'jpg';
            var7 = 'jpeg';
            if(!(var7 !== var8)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = var3 != var8;
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var7 = var8;
case 23:
            var4 = var7;
case 21:
            var2 = var4;
case 16:
            var1 = var2;
case 14:
            if(!(var3 == var1)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.toURLSafe;
            var4 = var2.bind(var4)(var5);
            var5 = var3 != var4;
            var2 = undefined;
            if(!var5) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var8 = var4.pathname;
            var5 = var3 == var8;
            var4 = undefined;
            if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var7 = var8.split;
            var5 = '.';
            var7 = var7.bind(var8)(var5);
            var5 = var3 == var7;
            var4 = undefined;
            if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var5 = var7.pop;
            var7 = var5.bind(var7)();
            var5 = var3 == var7;
            var4 = undefined;
            if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 32:
            var5 = var7.toLowerCase;
            var4 = var5.bind(var7)();
case 29:
            var5 = var3 != var4;
            var3 = undefined;
            if(!var5) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var7 = var4.length;
            var5 = 5;
            var5 = var7 <= var5;
            var3 = undefined;
            if(!var5) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var3 = var4;
case 33:
            var2 = var3;
case 27:
            var1 = var2;
case 25:
            return var1;
        }
    };
    var3['decideFileExtension'] = var2;
    return var1;
})();