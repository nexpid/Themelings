// app/modules/emoji_picker/native/components/openEmojiActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/openEmojiActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openEmojiActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.uniqueName;
            var4 = null;
            if(!(var4 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.uniqueName;
            var1 = '';
            if(!(var1 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var5 = var3.name;
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var5 = var3.uniqueName;
case 5:
            var1 = var3.id;
            if(!(var4 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3.surrogates;
            if(!(var4 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var2 = {};
            var1 = var3.id;
            var2['id'] = var1;
            var2['alt'] = var5;
            var1 = var3.id;
            if(!(var4 == var1)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var3.url;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 1;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.getEmojiURL;
            var4 = {};
            var9 = var3.id;
            var4['id'] = var9;
            var9 = var3.animated;
            var4['animated'] = var9;
            var8 = _closure1_slot3;
            var4['size'] = var8;
            var1 = var6.bind(var7)(var4);
case 11:
            var2['src'] = var1;
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var1 = {};
            var3 = var3.surrogates;
            var1['surrogate'] = var3;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = ':';
            var3 = var4.bind(var3)(var5, var3);
            var1['content'] = var3;
            var2 = var1;
case 12:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var6 = var3[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var6);
            var6 = var7.dismissGlobalKeyboard;
            var6 = var6.bind(var7)();
            var6 = _closure1_slot1;
            var4 = 3;
            var4 = var3[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.openLazy;
            var4 = 5;
            var4 = var3[var4];
            var5 = var5.bind(var1)(var4);
            var4 = 4;
            var4 = var3[var4];
            var3 = var3.paths;
            var13 = var5.bind(var1)(var4, var3);
            var4 = {};
            var4['emojiNode'] = var2;
            var12 = 'MessageEmojiActionSheet';
            var10 = 'stack';
            var14 = var7;
            var11 = var4;
            var2 = var14[var6](var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var3['openEmojiActionSheet'] = var2;
    return var1;
})();