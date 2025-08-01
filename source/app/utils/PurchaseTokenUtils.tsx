// app/utils/PurchaseTokenUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getPurchaseToken() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 2;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var3 = var1.Storage;
            var2 = var3.get;
            var1 = _closure1_slot3;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 78; continue _fun0001 }
 51:
            var3 = var1.expires;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            if(!(!(var3 >= var2))) { _fun0001_ip = 177; continue _fun0001 }
 78:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var3[var2];
            var8 = var4.bind(var5)(var2);
            var2 = var8.v4;
            var2 = var2.bind(var8)();
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var6 = var3.Storage;
            var5 = var6.set;
            var4 = _closure1_slot3;
            var3 = {};
            var3['purchaseToken'] = var2;
            var8 = global;
            var9 = var8.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var7 = _closure1_slot4;
            var7 = var8 + var7;
            var3['expires'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            return var2;
 177:
            var1 = var1.purchaseToken;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = function _getPurchaseTokenHash() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 220; continue _fun0002 }
 10:
                    var3 = global;
                    var6 = var3.Uint8Array;
                    var2 = _closure1_slot5;
                    var5 = undefined;
                    var7 = var2.bind(var5)();
                    var4 = var7.split;
                    var2 = '';
                    var7 = var4.bind(var7)(var2);
                    var4 = var7.map;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.charCodeAt;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var12 = var4.bind(var7)(var2);
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var13 = var4;
                    var2 = new var13[var6](var12, var11);
                    var7 = var2 instanceof Object ? var2 : var4;
                    var2 = var3.window;
                    var2 = var2.crypto;
                    var6 = var2.subtle;
                    var4 = var6.digest;
                    var2 = {};
                    var8 = 'SHA-256';
                    var2['name'] = var8;
                    var2 = var4.bind(var6)(var2, var7);
                    SaveGenerator(address=130);
 128:
                    return var2;
 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 217; continue _fun0002 }
 136:
                    var4 = var3.btoa;
                    var7 = var3.String;
                    var6 = var7.fromCharCode;
                    var3 = var3.Uint8Array;
                    var8 = var3.prototype;
                    var8 = Object.create(var8, {constructor: {value: var3}});
                    var13 = var8;
                    var12 = var2;
                    var3 = new var13[var3](var12, var11);
                    var11 = var3 instanceof Object ? var3 : var8;
                    var3 = new Array(0);
                    var10 = 0;
                    var12 = var3;
                    var8 = arraySpread(var12, var11, var10);
                    var12 = var6;
                    var11 = var3;
                    var10 = var7;
                    var3 = apply(var12, var11, var10);
                    var3 = var4.bind(var5)(var3);
                    return var3;
 217:
                    return var2;
 220:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 'purchase_token';
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.DAY;
    var5 = 60;
    var5 = var5 * var8;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/PurchaseTokenUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getPurchaseToken'] = var4;
    var2 = function getPurchaseTokenHash() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getPurchaseTokenHash'] = var2;
    return var1;
})();