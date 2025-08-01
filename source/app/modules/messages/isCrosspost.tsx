// app/modules/messages/isCrosspost.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var4.MessageReferenceTypes;
    var _closure1_slot0 = var7;
    var4 = var4.MessageTypes;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/isCrosspost.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isCrosspost(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot1;
            var1 = var1.DEFAULT;
            var1 = var4 === var1;
            if(!var1) { _fun0001_ip = 40; continue _fun0001 }
 28:
            var5 = var3.messageReference;
            var4 = null;
            var1 = var4 != var5;
 40:
            if(!var1) { _fun0001_ip = 68; continue _fun0001 }
 43:
            var3 = var3.messageReference;
            var3 = var3.type;
            var2 = _closure1_slot0;
            var2 = var2.FORWARD;
            var1 = var3 !== var2;
 68:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();