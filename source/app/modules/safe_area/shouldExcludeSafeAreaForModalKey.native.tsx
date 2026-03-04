// app/modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var11 = var7.MEDIA_MODAL_KEY;
    var7 = 1;
    var7 = var6[var7];
    var8 = var5.bind(var1)(var7);
    var10 = var8.OAUTH2_AUTHORIZE_MODAL_KEY;
    var7 = var8.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var9 = var8.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var8 = var4.Set;
    var4 = new Array(4);
    var4[0] = var11;
    var4[1] = var10;
    var4[2] = var9;
    var4[3] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var15 = var7;
    var14 = var4;
    var4 = new var15[var8](var14, var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/shouldExcludeSafeAreaForModalKey.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shouldExcludeSafeAreaForModalKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.isVoiceChannelModalKey;
            var2 = var2.bind(var4)(var5);
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot2;
            var3 = var4.has;
            var2 = var3.bind(var4)(var5);
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['shouldExcludeSafeAreaForModalKey'] = var2;
    return var1;
})();