// app/lib/uploader_inline/InlineUploader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var2 = function() {
        var5 = function InlineUploader(arg1, arg2) {
            var3 = this;
            var4 = _closure1_slot4;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['surface'] = var2;
            var2 = arg2;
            var3['originalMd5Promise'] = var2;
            return var1;
        };
        var _closure2_slot1 = var5;
        var4 = _closure1_slot5;
        var1 = {};
        var3 = 'getOriginalMd5';
        var1['key'] = var3;
        var3 = function value() {
            var1 = this;
            var1 = var1.originalMd5Promise;
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'buildHeaders';
        var1['key'] = var6;
        var8 = _closure1_slot3;
        var2 = undefined;
        var6 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure2_slot1;
                    var4 = var5.buildHeadersForMd5;
                    var2 = this;
                    var2 = var2.originalMd5Promise;
                    SaveGenerator(address=33);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = arg1;
                    var3 = var4.bind(var5)(var2, var3);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var8.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function buildHeaders() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var6 = {};
        var1 = 'fromBlob';
        var6['key'] = var1;
        var1 = function value(arg1, arg2) {
            var4 = _closure2_slot1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fromBlob;
            var1 = arg2;
            var3 = var2.bind(var3)(var1);
            var2 = var3.catch;
            var1 = function() {
                var1 = null;
                return var1;
            };
            var5 = var2.bind(var3)(var1);
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var6 = arg1;
            var7 = var2;
            var1 = new var7[var4](var6, var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'buildHeadersForMd5';
        var6['key'] = var8;
        var7 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var2 = null;
                var1 = var3;
                if(!(var2 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = {};
                var8 = var2;
                var7 = var3;
                var3 = copyDataProperties(var8, var7);
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.ORIGINAL_MD5_HEADER;
                var2[2] = var4;
                var1 = var2;
case 8:
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var4.bind(var2)(var5, var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploader_inline/InlineUploader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();