// app/modules/remote_auth/RemoteAuthUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _decodeEncodedUserRecord() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var4 = 3;
                    var2 = var2[var4];
                    var9 = undefined;
                    var7 = var5.bind(var9)(var2);
                    var6 = var7.decryptEncodedCiphertext;
                    var5 = arg1;
                    var2 = arg2;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=57);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = var2.match;
                    var5 = /^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/;
                    var8 = var6.bind(var2)(var5);
                    var6 = null;
                    if(!(var6 != var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7.bind(var9)(var8, var5);
                    var7 = 1;
                    var9 = var5[var7];
                    var7 = 2;
                    var8 = var5[var7];
                    var7 = var5[var4];
                    var4 = 4;
                    var4 = var5[var4];
                    var5 = _closure1_slot4;
                    var3 = {};
                    var3['id'] = var9;
                    var3['discriminator'] = var8;
                    var8 = '0';
                    var6 = null;
                    if(!(var8 !== var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = var7;
case 10:
                    var3['avatar'] = var6;
                    var3['username'] = var4;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var12 = var4;
                    var11 = var3;
                    var3 = new var12[var5](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
case 8:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var11 = 'Invalid encoded user record.';
                    var12 = var4;
                    var3 = new var12[var5](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remote_auth/RemoteAuthUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function decodeEncodedUserRecord() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['decodeEncodedUserRecord'] = var4;
    var4 = function base64Encode(arg1) {
        var1 = global;
        var3 = var1.btoa;
        var4 = var1.String;
        var2 = var4.fromCharCode;
        var6 = var1.Uint8Array;
        var1 = var6.prototype;
        var5 = Object.create(var1, {constructor: {value: var6}});
        var9 = arg1;
        var10 = var5;
        var1 = new var10[var6](var9, var8);
        var8 = var1 instanceof Object ? var1 : var5;
        var1 = new Array(0);
        var7 = 0;
        var9 = var1;
        var5 = arraySpread(var9, var8, var7);
        var9 = var2;
        var8 = var1;
        var7 = var4;
        var2 = apply(var9, var8, var7);
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.replace;
        var2 = /\//g;
        var1 = '_';
        var4 = var3.bind(var4)(var2, var1);
        var3 = var4.replace;
        var2 = /\+/g;
        var1 = '-';
        var4 = var3.bind(var4)(var2, var1);
        var3 = var4.replace;
        var2 = /={1,2}$/;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['base64Encode'] = var4;
    var2 = function base64Decode(arg1) {
        var1 = global;
        var4 = var1.Uint8Array;
        var3 = var4.from;
        var5 = var1.atob;
        var2 = undefined;
        var1 = arg1;
        var2 = var5.bind(var2)(var1);
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.charCodeAt;
            var1 = 0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['base64Decode'] = var2;
    return var1;
})();