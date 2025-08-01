// app/utils/MFAUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var8 = require;
        var3 = exports;
        var9 = dependencyMap;
        var1 = metroImportDefault;
        var _closure1_slot0 = var1;
        var _closure1_slot1 = var9;
        var4 = function encodeTotpSecret(arg1) {
            var4 = arg1;
            var3 = var4.replace;
            var2 = /[\s._-]+/g;
            var1 = '';
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.toUpperCase;
            var1 = var1.bind(var2)();
            return var1;
        };
        var _closure1_slot3 = var4;
        var5 = global;
        var10 = var5.Object;
        var7 = var10.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var10)(var3, var1, var6);
        var6 = var5.window;
        var7 = null;
        var10 = var7 == var6;
        var1 = undefined;
        var11 = undefined;
        if(var10) { _fun0001_ip = 90; continue _fun0001 }
 84:
        var11 = var6.crypto;
 90:
        if(!(var7 == var11)) { _fun0001_ip = 118; continue _fun0001 }
 94:
        var10 = var5.window;
        var12 = var7 == var10;
        var6 = undefined;
        if(var12) { _fun0001_ip = 115; continue _fun0001 }
 109:
        var6 = var10.msCrypto;
 115:
        var11 = var6;
 118:
        var _closure1_slot2 = var11;
        var6 = var5.window;
        var5 = 'Uint8Array';
        var5 = var5 in var6;
        var6 = var7 != var11;
        if(!var6) { _fun0001_ip = 151; continue _fun0001 }
 143:
        var10 = 'getRandomValues';
        var6 = var10 in var11;
 151:
        if(!var6) { _fun0001_ip = 157; continue _fun0001 }
 154:
        var6 = var5;
 157:
        var5 = 0;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.NativeModules;
        var5 = var5.DCDSecurityKeyManager;
        var5 = var7 != var5;
        var7 = 2;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'utils/MFAUtils.tsx';
        var7 = var8.bind(var9)(var7);
        var3['hasCrypto'] = var6;
        var3['hasWebAuthn'] = var5;
        var5 = function generateTotpSecret() {
            var4 = _closure1_slot2;
            var3 = var4.getRandomValues;
            var2 = global;
            var6 = var2.Uint8Array;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var8 = 20;
            var9 = var5;
            var2 = new var9[var6](var8, var7);
            var2 = var2 instanceof Object ? var2 : var5;
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.encode;
            var3 = var1.bind(var2)(var3);
            var2 = var3.toString;
            var1 = 'utf8';
            var4 = var2.bind(var3)(var1);
            var3 = var4.replace;
            var2 = /=/g;
            var1 = '';
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.toLowerCase;
            var4 = var1.bind(var2)();
            var3 = var4.replace;
            var2 = /(\w{4})/g;
            var1 = '$1 ';
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['generateTotpSecret'] = var5;
        var3['encodeTotpSecret'] = var4;
        var2 = function encodeTotpSecretAsUrl(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arguments[2];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0002_ip = 15; continue _fun0002 }
 9:
                var4 = 'Discord';
 15:
                var1 = global;
                var2 = var1.encodeURI;
                var9 = var2.bind(var3)(var4);
                var5 = var1.encodeURI;
                var2 = arg1;
                var14 = var5.bind(var3)(var2);
                var5 = _closure1_slot3;
                var2 = arg2;
                var12 = var5.bind(var3)(var2);
                var2 = var1.encodeURIComponent;
                var10 = var2.bind(var3)(var4);
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var17 = 'otpauth://totp/';
                var15 = ':';
                var13 = '?secret=';
                var11 = '&issuer=';
                var16 = var9;
                var1 = var17[var5](var16, var15, var14, var13, var12, var11, var10, var9);
                return var1;
            }
        };
        var3['encodeTotpSecretAsUrl'] = var2;
        return var1;
    }
})();