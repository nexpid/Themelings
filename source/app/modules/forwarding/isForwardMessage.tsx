// app/modules/forwarding/isForwardMessage.tsx
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
    var4 = var4.MessageReferenceTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/isForwardMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isForwardMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.messageReference;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.type;
case 2:
            var1 = _closure1_slot0;
            var1 = var1.FORWARD;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function isForwardServerMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.message_reference;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var1.type;
case 2:
            var1 = _closure1_slot0;
            var1 = var1.FORWARD;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isForwardServerMessage'] = var2;
    return var1;
})();