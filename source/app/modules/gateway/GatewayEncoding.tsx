// app/modules/gateway/GatewayEncoding.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var4);
        var1 = 0;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var _closure1_slot0 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot1 = var4;
        var4 = 2;
        var4 = var6[var4];
        var7 = var5.bind(var1)(var4);
        var4 = var7.getErlpackEncoding;
        var7 = var4.bind(var7)();
        var2 = function() {
            var4 = _closure1_slot1;
            var3 = function JSONEncoding() {
                var4 = _closure1_slot0;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = this;
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var _closure2_slot0 = var3;
            var1 = {};
            var2 = 'pack';
            var1['key'] = var2;
            var2 = function value(arg1) {
                var1 = global;
                var3 = var1.JSON;
                var2 = var3.stringify;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['value'] = var2;
            var2 = new Array(4);
            var2[0] = var1;
            var1 = {};
            var6 = 'unpack';
            var1['key'] = var6;
            var6 = function value(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var2 = typeof var5;
                    var1 = 'string';
                    if(!(var1 === var2)) { _fun0002_ip = 35; continue _fun0002 }
 14:
                    var1 = global;
                    var3 = var1.JSON;
                    var1 = var3.parse;
                    var1 = var1.bind(var3)(var5);
                    return var1;
 35:
                    var1 = global;
                    var3 = var1.Error;
                    var4 = null;
                    var5 = var4 == var5;
                    if(var5) { _fun0002_ip = 55; continue _fun0002 }
 52:
                    var4 = var2;
 55:
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'Expected a string to be passed to JSONEncoding.unpack, got ';
                    var6 = var2.bind(var1)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var7 = var2;
                    var1 = new var7[var3](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var1['value'] = var6;
            var2[1] = var1;
            var1 = {};
            var6 = 'getName';
            var1['key'] = var6;
            var6 = function value() {
                var1 = 'json';
                return var1;
            };
            var1['value'] = var6;
            var2[2] = var1;
            var1 = {};
            var6 = 'wantsString';
            var1['key'] = var6;
            var5 = function value() {
                var1 = true;
                return var1;
            };
            var1['value'] = var5;
            var2[3] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var4 = var2.bind(var1)();
        var2 = var4;
        if(!(var1 !== var7)) { _fun0001_ip = 122; continue _fun0001 }
 119:
        var2 = var7;
 122:
        var7 = 3;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var8 = var7.ProcessArgs;
        var7 = var8.isDiscordGatewayPlaintextSet;
        var7 = var7.bind(var8)();
        if(!var7) { _fun0001_ip = 156; continue _fun0001 }
 153:
        var2 = var4;
 156:
        var4 = 4;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/gateway/GatewayEncoding.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();