// app/modules/collectibles/utils/ErrorHandlingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var8 = var7.AbortCodes;
    var9 = var8.UNAUTHORIZED;
    var7 = new Array(3);
    var7[0] = var9;
    var9 = var8.EMAIL_VERIFICATION_REQUIRED;
    var7[1] = var9;
    var8 = var8.USER_BANNED;
    var7[2] = var8;
    var _closure1_slot2 = var7;
    var9 = var4.Set;
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var12 = [500, 502, 503, 504];
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot3 = var7;
    var8 = var4.Set;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = [401, 403, 405, 409, 429];
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/utils/ErrorHandlingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var10 = null;
            var1 = var10 == var3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var10 == var3;
            var2 = false;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var10 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var3.cause;
case 6:
            var6 = var10 == var4;
            var5 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var4.crossDomain;
case 8:
            var4 = true;
            var4 = var4 === var5;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = 'status';
            var5 = var5 in var3;
            var6 = !var5;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var3.status;
            var7 = 'number';
            var5 = typeof var5;
            var6 = var7 !== var5;
case 12:
            if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.status;
            var5 = 0;
            var5 = var5 !== var7;
            if(!var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = _closure1_slot3;
            var9 = var11.has;
            var7 = var3.status;
            var7 = var9.bind(var11)(var7);
            var5 = !var7;
case 16:
            if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = _closure1_slot4;
            var9 = var11.has;
            var7 = var3.status;
            var7 = var9.bind(var11)(var7);
            var5 = !var7;
case 18:
            var6 = var5;
case 14:
            var5 = !var6;
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = 'code';
            var6 = var11 in var3;
            var7 = !var6;
            if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var3.code;
            var9 = 'number';
            var6 = typeof var6;
            var7 = var9 !== var6;
case 22:
            if(var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = _closure1_slot2;
            var9 = var12.includes;
            var6 = var3.code;
            var6 = var9.bind(var12)(var6);
            var7 = !var6;
case 24:
            var6 = !var7;
            if(!var7) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var7 = 'body';
            var7 = var7 in var3;
            if(!var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = var3.body;
            var7 = var10 != var9;
case 28:
            if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var9 = var3.body;
            var12 = 'object';
            var9 = typeof var9;
            var7 = var12 === var9;
case 30:
            if(!var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = var3.body;
            var7 = var11 in var9;
case 32:
            if(!var7) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var9 = var3.body;
            var10 = var10 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var8 = var9.code;
case 36:
            var9 = 'number';
            var8 = typeof var8;
            var7 = var9 === var8;
case 34:
            if(!var7) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var10 = _closure1_slot2;
            var9 = var10.includes;
            var8 = var3.body;
            var8 = var8.code;
            var7 = var9.bind(var10)(var8);
case 38:
            var7 = !var7;
            var6 = !var7;
case 26:
            var5 = var6;
case 20:
            var4 = var5;
case 10:
            var2 = var4;
case 4:
            var1 = var2;
case 2:
            if(var1) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.captureException;
            var1 = var1.bind(var2)(var3);
case 40:
            var1 = undefined;
            return var1;
        }
    };
    var3['captureOrIgnoreApiError'] = var2;
    return var1;
})();