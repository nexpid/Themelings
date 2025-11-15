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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = var2.cache;
                    var7 = var2.cacheKey;
                    var5 = var2.fallbackParam;
                    var9 = var2.fallbackFunc;
                    var10 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=42);
case 4:
                    return var10;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var11 = var8;
                    var4 = var11.get;
                    var3 = var7;
                    var3 = var4.bind(var11)(var3);
                    var4 = null;
                    if(!(var4 == var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9: // try_start_0
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=79);
case 10:
                    return var5;
case 11:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var6 = var5;
                    if(!(var4 != var5)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var10 = var8;
                    var9 = var10.set;
                    var8 = var7;
                    var7 = var6;
                    var7 = var9.bind(var10)(var8, var7);
case 14: // try_end0
                    return var6;
case 12:
                    return var5;
case 16: // catch_target0
                    CatchBlockStart(arg_register=4);
                    return var4;
case 8:
                    return var3;
case 6:
                    return var2;
case 2:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var8 = var2.emoji;
                    var6 = var2.emojiSource;
                    var5 = undefined;
                    SaveGenerator(address=30);
case 19:
                    return var5;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
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
                    SaveGenerator(address=108);
case 23:
                    return var3;
case 24:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var5 = null;
                    var4 = var3;
                    if(!(var5 == var4)) { _fun0002_ip = 27; continue _fun0002 }
case 8:
                    var4 = new Array(0);
case 27:
                    return var4;
case 25:
                    return var3;
case 21:
                    return var2;
case 17:
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