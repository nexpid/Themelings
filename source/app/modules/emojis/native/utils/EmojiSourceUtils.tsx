// app/modules/emojis/native/utils/EmojiSourceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var9 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = undefined;
                    if(!(var9 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var9 = 32;
case 4:
                    SaveGenerator(address=29);
case 6:
                    return var6;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 2;
                    var5 = var8[var5];
                    var11 = var7.bind(var6)(var5);
                    var10 = var11.getEmojiUrl;
                    var8 = {};
                    var13 = var4.name;
                    var5 = null;
                    var14 = var5 != var13;
                    var7 = '';
                    var12 = var7;
                    if(!var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var12 = var13;
case 10:
                    var8['name'] = var12;
                    var12 = var4.id;
                    var8['id'] = var12;
                    var12 = false;
                    var8['animated'] = var12;
                    var8 = var10.bind(var11)(var8, var9);
                    var10 = var5 != var8;
                    var5 = var7;
                    if(!var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var8;
case 12:
                    if(!(var7 === var5)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = _closure1_slot3;
                    var8 = var7.ImageManager;
                    var7 = var8.getEmojiBase64;
                    var4 = var4.name;
                    var4 = var7.bind(var8)(var4, var9);
                    SaveGenerator(address=167);
case 16:
                    return var4;
case 17:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 3;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.makeSource;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var10 = var7.concat;
                    var7 = 'data:image/png;base64,';
                    var7 = var10.bind(var7)(var4);
                    var7 = var8.bind(var9)(var7);
                    return var7;
case 18:
                    return var4;
case 14:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 3;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.makeSource;
                    var3 = var3.bind(var4)(var5);
                    return var3;
case 8:
                    return var2;
case 2:
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/native/utils/EmojiSourceUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['getEmojiSource'] = var2;
    return var1;
})();