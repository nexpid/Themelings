// app/modules/emojis/utils/getEmojiText.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/emojis/utils/getEmojiText.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getEmojiText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.id;
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 23; continue _fun0001 }
 14:
            var1 = var2.surrogates;
            if(!(var3 == var1)) { _fun0001_ip = 85; continue _fun0001 }
 23:
            var1 = var2.uniqueName;
            if(!(var3 != var1)) { _fun0001_ip = 47; continue _fun0001 }
 33:
            var3 = var2.uniqueName;
            var1 = '';
            if(!(var1 === var3)) { _fun0001_ip = 54; continue _fun0001 }
 47:
            var4 = var2.name;
            _fun0001_ip = 60; continue _fun0001;
 54:
            var4 = var2.uniqueName;
 60:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = ':';
            var1 = var3.bind(var1)(var4, var1);
            _fun0001_ip = 90; continue _fun0001;
 85:
            var1 = var2.surrogates;
 90:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();