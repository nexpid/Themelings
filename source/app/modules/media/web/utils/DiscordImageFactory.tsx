// app/modules/media/web/utils/DiscordImageFactory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var5 = _closure1_slot3;
        var4 = function DiscordImageFactory() {
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var3 = 'create';
        var1['key'] = var3;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var1 = global;
                var5 = var1.Uint8Array;
                var6 = var1.Math;
                var3 = var6.min;
                var2 = var4.byteLength;
                var1 = 64;
                var8 = var3.bind(var6)(var1, var2);
                var1 = var5.prototype;
                var2 = Object.create(var1, {constructor: {value: var5}});
                var9 = 0;
                var11 = var2;
                var10 = var4;
                var1 = new var11[var5](var10, var9, var8, var7);
                var6 = var1 instanceof Object ? var1 : var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.detectFile;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                var7 = var1 == var3;
                var6 = undefined;
                if(var7) { _fun0001_ip = 115; continue _fun0001 }
 109:
                var6 = var3.mimeType;
 115:
                var3 = 'image/png';
                var1 = null;
                if(!(var3 === var6)) { _fun0001_ip = 163; continue _fun0001 }
 127:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.DiscordImagePng;
                var2 = var3.create;
                var1 = var2.bind(var3)(var4);
 163:
                return var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media/web/utils/DiscordImageFactory.tsx';
    var4 = var5.bind(var6)(var4);
    var3['DiscordImageFactory'] = var2;
    return var1;
})();