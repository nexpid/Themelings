// app/modules/activities/utils/isStreaming.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = function _isStreaming(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = _closure1_slot1;
            var1 = var1.STREAMING;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 64; continue _fun0001 }
 28:
            var5 = var3.url;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0001_ip = 61; continue _fun0001 }
 42:
            var5 = _closure1_slot0;
            var4 = var5.test;
            var3 = var3.url;
            var2 = var4.bind(var5)(var3);
 61:
            var1 = var2;
 64:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
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
    var4 = var4.validStreamURL;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isStreaming.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isStreaming(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0002_ip = 67; continue _fun0002 }
 12:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0002_ip = 49; continue _fun0002 }
 36:
            var4 = _closure1_slot2;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            _fun0002_ip = 64; continue _fun0002;
 49:
            var4 = var5.some;
            var3 = _closure1_slot2;
            var2 = var4.bind(var5)(var3);
 64:
            var1 = var2;
 67:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();