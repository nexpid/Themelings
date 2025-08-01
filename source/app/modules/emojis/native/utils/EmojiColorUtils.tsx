// app/modules/emojis/native/utils/EmojiColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _getFromCacheOrFallback2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 129; continue _fun0001 }
 10:
                    var8 = var2.cache;
                    var7 = var2.cacheKey;
                    var5 = var2.fallbackParam;
                    var9 = var2.fallbackFunc;
                    var10 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=42);
 40:
                    return var10;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 126; continue _fun0001 }
 48:
                    var11 = var8;
                    var4 = var11.get;
                    var3 = var7;
                    var3 = var4.bind(var11)(var3);
                    var4 = null;
                    if(!(var4 == var3)) { _fun0001_ip = 123; continue _fun0001 }
 70: // try_start_0
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=79);
 77:
                    return var5;
 79:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 115; continue _fun0001 }
 85:
                    var6 = var5;
                    if(!(var4 != var5)) { _fun0001_ip = 112; continue _fun0001 }
 92:
                    var10 = var8;
                    var9 = var10.set;
                    var8 = var7;
                    var7 = var6;
                    var7 = var9.bind(var10)(var8, var7);
 112: // try_end0
                    return var6;
 115:
                    return var5;
 118: // catch_target0
                    CatchBlockStart(arg_register=4);
                    return var4;
 123:
                    return var3;
 126:
                    return var2;
 129:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 100;
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = function _getEmojiCacheKey(arg1) {
        var1 = arg1;
        var5 = var1.name;
        var4 = var1.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '-';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot0;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 137; continue _fun0002 }
 13:
                    var8 = var2.emoji;
                    var6 = var2.emojiSource;
                    var5 = undefined;
                    SaveGenerator(address=31);
 29:
                    return var5;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 134; continue _fun0002 }
 37:
                    var4 = {};
                    var7 = _closure1_slot2;
                    var4['cache'] = var7;
                    var7 = _closure1_slot3;
                    var7 = var7.bind(var5)(var8);
                    var4['cacheKey'] = var7;
                    var4['fallbackParam'] = var6;
                    var3 = _closure1_slot1;
                    var3 = var3.ImageManager;
                    var3 = var3.getDominantColors;
                    var4['fallbackFunc'] = var3;
                    var3 = function _getFromCacheOrFallback() {
                        var1 = undefined;
                        var4 = _closure1_slot4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var5)(var4);
                    SaveGenerator(address=109);
 107:
                    return var3;
 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 131; continue _fun0002 }
 115:
                    var5 = null;
                    var4 = var3;
                    if(!(var5 == var4)) { _fun0002_ip = 128; continue _fun0002 }
 124:
                    var4 = new Array(0);
 128:
                    return var4;
 131:
                    return var3;
 134:
                    return var2;
 137:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/native/utils/EmojiColorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['getEmojiDominantColors'] = var2;
    return var1;
})();