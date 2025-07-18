// app/modules/markup/MarkupReactLinkUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupReactLinkUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isLinkTrusted(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = var6.target;
            var9 = null;
            var1 = var9 != var1;
            if(!var1) { _fun0001_ip = 125; continue _fun0001 }
 18:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var3 = var5[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.isLinkTrusted;
            var3 = var6.target;
            var7 = var6.title;
            if(!(var9 != var7)) { _fun0001_ip = 76; continue _fun0001 }
 63:
            var9 = var6.title;
            var7 = '';
            if(!(var7 === var9)) { _fun0001_ip = 114; continue _fun0001 }
 76:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 1;
            var2 = var9[var2];
            var8 = var7.bind(var8)(var2);
            var7 = var8.astToString;
            var2 = var6.content;
            var2 = var7.bind(var8)(var2);
            _fun0001_ip = 119; continue _fun0001;
 114:
            var2 = var6.title;
 119:
            var1 = var4.bind(var5)(var3, var2);
 125:
            return var1;
        }
    };
    var3['isLinkTrusted'] = var2;
    return var1;
})();