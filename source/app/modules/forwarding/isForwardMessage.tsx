// app/modules/forwarding/isForwardMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
            var1 = arg1;
            var1 = var1.messageReference;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 25; continue _fun0001 }
 20:
            var2 = var1.type;
 25:
            var1 = _closure1_slot0;
            var1 = var1.FORWARD;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function isForwardServerMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.message_reference;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0002_ip = 25; continue _fun0002 }
 20:
            var2 = var1.type;
 25:
            var1 = _closure1_slot0;
            var1 = var1.FORWARD;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isForwardServerMessage'] = var2;
    return var1;
})();