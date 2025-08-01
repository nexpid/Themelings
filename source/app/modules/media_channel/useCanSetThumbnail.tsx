// app/modules/media_channel/useCanSetThumbnail.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/useCanSetThumbnail.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanSetThumbnail(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var3 = arg1;
            var _closure2_slot0 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var5.bind(var6)(var4, var1);
            var4 = null;
            var5 = var4 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 86; continue _fun0001 }
 76:
            var5 = var6.isMediaChannel;
            var1 = var5.bind(var6)();
 86:
            if(!var1) { _fun0001_ip = 110; continue _fun0001 }
 89:
            var4 = var4 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 104; continue _fun0001 }
 98:
            var3 = var2.isImage;
 104:
            var2 = true;
            var1 = var2 === var3;
 110:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();