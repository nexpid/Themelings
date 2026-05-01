// app/modules/discord_md5/DiscordMd5.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var2 = function() {
        var5 = function DiscordMd5() {
            var4 = _closure1_slot3;
            var3 = _closure2_slot1;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var1 = {};
        var3 = 'fromBlob';
        var1['key'] = var3;
        var7 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure2_slot1;
                    var3 = var4.fromArrayBuffer;
                    var2 = var5.arrayBuffer;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=39);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var3.bind(var4)(var2);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var7.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var2 = function fromBlob() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var7 = 'fromArrayBuffer';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.ArrayBuffer;
            var2 = var3.hash;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'fromDataURI';
        var1['key'] = var7;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = /^data:[^;]*;base64,(.*)$/;
                var2 = var3.exec;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0002_ip = 8; continue _fun0002 }
case 4:
                var2 = global;
                var4 = var2.atob;
                var3 = 1;
                var3 = var5[var3];
                var5 = undefined;
                var7 = var4.bind(var5)(var3);
                var6 = var2.ArrayBuffer;
                var8 = var7.length;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var9 = var4;
                var3 = new var9[var6](var8, var7);
                var4 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Uint8Array;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var9 = var3;
                var8 = var4;
                var2 = new var9[var2](var8, var7);
                var6 = var2 instanceof Object ? var2 : var3;
                var2 = var7.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var2 = var7.charCodeAt;
                var2 = var2.bind(var7)(var3);
                var6[var3] = var2;
                var3 = var3 + 1;
                var2 = var7.length;
                if(var3 < var2) { _fun0002_ip = 10; continue _fun0002 }
case 9:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.ArrayBuffer;
                var2 = var3.hash;
                var2 = var2.bind(var3)(var4);
                return var2;
case 8:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = null;
        var1 = var4.bind(var3)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/discord_md5/DiscordMd5.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();