// app/modules/markup/MarkupReactLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
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
case 0:
            var6 = arg1;
            var1 = var6.target;
            var9 = null;
            var1 = var9 != var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var3 = var5[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.isLinkTrusted;
            var3 = var6.target;
            var7 = var6.title;
            if(!(var9 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var6.title;
            var7 = '';
            if(!(var7 === var9)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 1;
            var2 = var9[var2];
            var8 = var7.bind(var8)(var2);
            var7 = var8.astToString;
            var2 = var6.content;
            var2 = var7.bind(var8)(var2);
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var2 = var6.title;
case 7:
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['isLinkTrusted'] = var2;
    return var1;
})();