// app/modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSoundboardEmojiUrl(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.emojiId;
            var1 = null;
            var2 = var1 == var5;
            var4 = undefined;
            var1 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 0;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getEmojiURL;
            var2 = {};
            var2['id'] = var5;
            var5 = false;
            var2['animated'] = var5;
            var5 = arg2;
            var2['size'] = var5;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();