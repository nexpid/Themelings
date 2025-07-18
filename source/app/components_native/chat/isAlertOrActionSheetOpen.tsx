// app/components_native/chat/isAlertOrActionSheetOpen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/isAlertOrActionSheetOpen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isAlertOrActionSheetOpen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[1];
            var4 = arguments[2];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 19; continue _fun0001 }
 12:
            var2 = _closure1_slot0;
 19:
            if(!(var4 === var1)) { _fun0001_ip = 30; continue _fun0001 }
 23:
            var4 = _closure1_slot1;
 30:
            var1 = var2.getContent;
            var1 = var1.bind(var2)();
            var3 = null;
            var1 = var3 != var1;
            var2 = var4.getAlert;
            var2 = var2.bind(var4)();
            var2 = var3 != var2;
            if(var1) { _fun0001_ip = 66; continue _fun0001 }
 63:
            var1 = var2;
 66:
            return var1;
        }
    };
    var3['isAlertOrActionSheetOpen'] = var2;
    return var1;
})();