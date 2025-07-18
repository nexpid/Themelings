// app/modules/custom_status/utils/isActivityPermanentCustomStatus.tsx
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
    var4 = var4.ActivityTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/utils/isActivityPermanentCustomStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isActivityPermanentCustomStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.type;
            var1 = _closure1_slot0;
            var1 = var1.CUSTOM_STATUS;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 54; continue _fun0001 }
 28:
            var4 = var2.timestamps;
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 50; continue _fun0001 }
 45:
            var2 = var4.end;
 50:
            var1 = var3 == var2;
 54:
            return var1;
        }
    };
    var3['isActivityPermanentCustomStatus'] = var2;
    return var1;
})();