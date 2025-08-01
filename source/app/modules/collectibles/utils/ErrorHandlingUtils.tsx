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
 0:
            var3 = arg1;
            var10 = null;
            var1 = var10 == var3;
            if(var1) { _fun0001_ip = 377; continue _fun0001 }
 15:
            var4 = var10 == var3;
            var2 = false;
            if(var4) { _fun0001_ip = 374; continue _fun0001 }
 27:
            var5 = var10 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 42; continue _fun0001 }
 36:
            var4 = var3.cause;
 42:
            var6 = var10 == var4;
            var5 = undefined;
            if(var6) { _fun0001_ip = 57; continue _fun0001 }
 51:
            var5 = var4.crossDomain;
 57:
            var4 = true;
            var4 = var4 === var5;
            if(var4) { _fun0001_ip = 371; continue _fun0001 }
 69:
            var5 = 'status';
            var5 = var5 in var3;
            var6 = !var5;
            if(!var5) { _fun0001_ip = 99; continue _fun0001 }
 83:
            var5 = var3.status;
            var7 = 'number';
            var5 = typeof var5;
            var6 = var7 !== var5;
 99:
            if(var6) { _fun0001_ip = 172; continue _fun0001 }
 102:
            var7 = var3.status;
            var5 = 0;
            var5 = var5 !== var7;
            if(!var5) { _fun0001_ip = 141; continue _fun0001 }
 116:
            var11 = _closure1_slot3;
            var9 = var11.has;
            var7 = var3.status;
            var7 = var9.bind(var11)(var7);
            var5 = !var7;
 141:
            if(!var5) { _fun0001_ip = 169; continue _fun0001 }
 144:
            var11 = _closure1_slot4;
            var9 = var11.has;
            var7 = var3.status;
            var7 = var9.bind(var11)(var7);
            var5 = !var7;
 169:
            var6 = var5;
 172:
            var5 = !var6;
            if(!var6) { _fun0001_ip = 368; continue _fun0001 }
 181:
            var11 = 'code';
            var6 = var11 in var3;
            var7 = !var6;
            if(!var6) { _fun0001_ip = 211; continue _fun0001 }
 195:
            var6 = var3.code;
            var9 = 'number';
            var6 = typeof var6;
            var7 = var9 !== var6;
 211:
            if(var7) { _fun0001_ip = 239; continue _fun0001 }
 214:
            var12 = _closure1_slot2;
            var9 = var12.includes;
            var6 = var3.code;
            var6 = var9.bind(var12)(var6);
            var7 = !var6;
 239:
            var6 = !var7;
            if(!var7) { _fun0001_ip = 365; continue _fun0001 }
 245:
            var7 = 'body';
            var7 = var7 in var3;
            if(!var7) { _fun0001_ip = 265; continue _fun0001 }
 256:
            var9 = var3.body;
            var7 = var10 != var9;
 265:
            if(!var7) { _fun0001_ip = 284; continue _fun0001 }
 268:
            var9 = var3.body;
            var12 = 'object';
            var9 = typeof var9;
            var7 = var12 === var9;
 284:
            if(!var7) { _fun0001_ip = 296; continue _fun0001 }
 287:
            var9 = var3.body;
            var7 = var11 in var9;
 296:
            if(!var7) { _fun0001_ip = 329; continue _fun0001 }
 299:
            var9 = var3.body;
            var10 = var10 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 318; continue _fun0001 }
 313:
            var8 = var9.code;
 318:
            var9 = 'number';
            var8 = typeof var8;
            var7 = var9 === var8;
 329:
            if(!var7) { _fun0001_ip = 359; continue _fun0001 }
 332:
            var10 = _closure1_slot2;
            var9 = var10.includes;
            var8 = var3.body;
            var8 = var8.code;
            var7 = var9.bind(var10)(var8);
 359:
            var7 = !var7;
            var6 = !var7;
 365:
            var5 = var6;
 368:
            var4 = var5;
 371:
            var2 = var4;
 374:
            var1 = var2;
 377:
            if(var1) { _fun0001_ip = 416; continue _fun0001 }
 380:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.captureException;
            var1 = var1.bind(var2)(var3);
 416:
            var1 = undefined;
            return var1;
        }
    };
    var3['captureOrIgnoreApiError'] = var2;
    return var1;
})();