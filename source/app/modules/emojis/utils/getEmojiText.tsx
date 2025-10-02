// app/modules/emojis/utils/getEmojiText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/emojis/utils/getEmojiText.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getEmojiText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.id;
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.surrogates;
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = var2.uniqueName;
            if(!(var3 != var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var2.uniqueName;
            var1 = '';
            if(!(var1 === var3)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var4 = var2.name;
            _fun0001_ip = 8; continue _fun0001;
case 7:
            var4 = var2.uniqueName;
case 8:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = ':';
            var1 = var3.bind(var1)(var4, var1);
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var1 = var2.surrogates;
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();