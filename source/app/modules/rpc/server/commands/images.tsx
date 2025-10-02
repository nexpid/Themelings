// app/modules/rpc/server/commands/images.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RPC_LOCAL_SCOPE;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = var4.GET_IMAGE;
    var4 = {};
    var4['scope'] = var9;
    var9 = function validation(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var2 = var1.bind(var2)(var5);
        var1 = var2.required;
        var3 = var1.bind(var2)();
        var2 = var3.keys;
        var1 = {};
        var4 = var5.string;
        var6 = var4.bind(var5)();
        var4 = var6.required;
        var7 = var4.bind(var6)();
        var6 = var7.valid;
        var4 = ['user'];
        var4 = var6.bind(var7)(var4);
        var1['type'] = var4;
        var4 = var5.string;
        var6 = var4.bind(var5)();
        var4 = var6.required;
        var4 = var4.bind(var6)();
        var1['id'] = var4;
        var4 = var5.string;
        var6 = var4.bind(var5)();
        var4 = var6.required;
        var7 = var4.bind(var6)();
        var6 = var7.valid;
        var4 = ['png', 'webp', 'jpg'];
        var4 = var6.bind(var7)(var4);
        var1['format'] = var4;
        var4 = var5.number;
        var5 = var4.bind(var5)();
        var4 = var5.required;
        var6 = var4.bind(var5)();
        var5 = var6.valid;
        var4 = [16, 32, 64, 128, 256, 512, 1024];
        var4 = var5.bind(var6)(var4);
        var1['size'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['validation'] = var9;
    var8 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.args;
            var3 = var1.type;
            var5 = var1.id;
            var12 = var1.format;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = 'png';
case 2:
            var11 = var1.size;
            if(!(var11 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = 128;
case 4:
            var1 = 'user';
            var6 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot3;
            var3 = var7.getUser;
            var10 = var3.bind(var7)(var5);
            var3 = null;
            if(!(var3 != var10)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 4;
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.getUserAvatarURL;
            var15 = false;
            var17 = var9;
            var16 = var10;
            var14 = var11;
            var13 = var12;
            var7 = var17[var8](var16, var15, var14, var13, var12);
            var8 = global;
            var8 = var8.window;
            var8 = var8.GLOBAL_ENV;
            var9 = var8.CDN_HOST;
            var3 = var3 != var9;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var7.indexOf;
            var9 = var8.bind(var7)(var9);
            var8 = -1;
            var3 = var8 !== var9;
case 10:
            var6 = var7;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var3 = '&_=';
            var6 = var7 + var3;
case 6:
            var3 = null;
            if(!(var3 != var6)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = global;
            var3 = var3.fetch;
            var7 = var3.bind(var4)(var6);
            var6 = var7.then;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.blob;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var6.bind(var7)(var3);
            var6 = var7.then;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.readFileAsBase64;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var3);
            var3 = var6.then;
            var2 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var1['data_url'] = var2;
                return var1;
            };
            var2 = var3.bind(var6)(var2);
            return var2;
case 13:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = {};
            var2 = _closure1_slot4;
            var2 = var2.INVALID_COMMAND;
            var6['errorCode'] = var2;
            var2 = var7.prototype;
            var3 = Object.create(var2, {constructor: {value: var7}});
            var15 = 'No valid type.';
            var17 = var3;
            var16 = var6;
            var2 = new var17[var7](var16, var15, var14);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 8:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot4;
            var1 = var1.INVALID_USER;
            var3['errorCode'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Invalid user id: ';
            var15 = var2.bind(var1)(var5);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var17 = var2;
            var16 = var3;
            var1 = new var17[var4](var16, var15, var14);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/images.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();