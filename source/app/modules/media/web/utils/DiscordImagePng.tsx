// app/modules/media/web/utils/DiscordImagePng.tsx
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
        var5 = function DiscordImagePng(arg1, arg2) {
            var3 = this;
            var4 = _closure1_slot4;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['img'] = var2;
            var2 = arg2;
            var3['originalBuffer'] = var2;
            return var1;
        };
        var _closure2_slot1 = var5;
        var4 = _closure1_slot5;
        var6 = {};
        var3 = 'hasTransparency';
        var6['key'] = var3;
        var3 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var2 = var1.img;
                var2 = var2.ctype;
                var5 = 4;
                if(!(var5 !== var2)) { _fun0001_ip = 41; continue _fun0001 }
 22:
                var2 = var1.img;
                var3 = var2.ctype;
                var2 = 6;
                if(!(var2 === var3)) { _fun0001_ip = 155; continue _fun0001 }
 41:
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 3;
                var3 = var2[var4];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var2 = var3.toRGBA8;
                var1 = var1.img;
                var7 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.Uint8Array;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var8 = var2;
                var1 = new var8[var1](var7, var6);
                var3 = var1 instanceof Object ? var1 : var2;
                var1 = var3.length;
                var1 = var4 < var1;
                var2 = 255;
                if(!var1) { _fun0001_ip = 147; continue _fun0001 }
 126:
                var1 = var3[var4];
                if(!(!(var1 < var2))) { _fun0001_ip = 151; continue _fun0001 }
 134:
                var4 = var4 + var5;
                var1 = var3.length;
                if(var4 < var1) { _fun0001_ip = 126; continue _fun0001 }
 147:
                var1 = false;
                return var1;
 151:
                var1 = true;
                return var1;
 155:
                var1 = false;
                return var1;
            }
        };
        var6['value'] = var3;
        var3 = new Array(4);
        var3[0] = var6;
        var6 = {};
        var7 = 'isAnimated';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.img;
            var1 = var1.tabs;
            var2 = var1.acTL;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var6['value'] = var7;
        var3[1] = var6;
        var6 = {};
        var7 = 'hasSrgbIccProfile';
        var6['key'] = var7;
        var8 = _closure1_slot3;
        var2 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 266; continue _fun0002 }
 10:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var13 = undefined;
                    var6 = var3.bind(var13)(var2);
                    var5 = var6.load;
                    var2 = this;
                    var4 = var2.originalBuffer;
                    var3 = true;
                    var2 = {'async': true, 'expanded': true, 'includeUnknown': true};
                    var2 = var5.bind(var6)(var4, var2);
                    SaveGenerator(address=76);
 74:
                    return var2;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 263; continue _fun0002 }
 85:
                    var4 = var2.icc;
                    var12 = null;
                    if(!(var12 != var4)) { _fun0002_ip = 260; continue _fun0002 }
 100:
                    var5 = var2.icc;
                    var4 = global;
                    var6 = var4.Object;
                    var4 = var6.keys;
                    var11 = var4.bind(var6)(var5);
                    var4 = var11.length;
                    var10 = 0;
                    var4 = var10 < var4;
                    var9 = '';
                    var8 = 'ICC Description';
                    var7 = undefined;
                    if(!var4) { _fun0002_ip = 211; continue _fun0002 }
 150:
                    var4 = var11[var10];
                    if(!(var8 === var4)) { _fun0002_ip = 199; continue _fun0002 }
 158:
                    var14 = var5[var4];
                    var15 = var12 == var14;
                    var6 = undefined;
                    if(var15) { _fun0002_ip = 176; continue _fun0002 }
 171:
                    var6 = var14.description;
 176:
                    var7 = var14;
                    if(!(var12 != var6)) { _fun0002_ip = 199; continue _fun0002 }
 183:
                    var6 = var5[var4];
                    var6 = var6.description;
                    var7 = var14;
                    if(!(var9 === var6)) { _fun0002_ip = 216; continue _fun0002 }
 199:
                    var10 = var10 + 1;
                    var6 = var11.length;
                    if(var10 < var6) { _fun0002_ip = 150; continue _fun0002 }
 211:
                    var6 = false;
                    return var6;
 216:
                    var4 = var5[var4];
                    var5 = var4.description;
                    var4 = var5.toLowerCase;
                    var6 = var4.bind(var5)();
                    var5 = var6.includes;
                    var4 = 'srgb';
                    var4 = var5.bind(var6)(var4);
                    var4 = !var4;
                    var4 = !var4;
                    return var4;
 260:
                    return var3;
 263:
                    return var2;
 266:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var7 = function hasSrgbIccProfile() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var3[2] = var6;
        var6 = {};
        var7 = 'getBuffer';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.originalBuffer;
            return var1;
        };
        var6['value'] = var7;
        var3[3] = var6;
        var6 = {};
        var7 = 'create';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var1 = null;
 5: // try_start_0
                var5 = _closure2_slot1;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var2 = var3.decode;
                var8 = var2.bind(var3)(var4);
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var9 = var3;
                var7 = var4;
                var2 = new var9[var5](var8, var7, var6);
                var1 = var2 instanceof Object ? var2 : var3;
 71: // try_end0
                _fun0003_ip = 75; continue _fun0003;
 73: // catch_target0
                CatchBlockStart(arg_register=1);
 75:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var4.bind(var2)(var5, var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media/web/utils/DiscordImagePng.tsx';
    var4 = var5.bind(var6)(var4);
    var3['DiscordImagePng'] = var2;
    return var1;
})();