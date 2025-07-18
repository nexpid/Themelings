// app/modules/user_profile/utils/shouldShowActivityTimeBar.tsx
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
    var4 = 'modules/user_profile/utils/shouldShowActivityTimeBar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shouldShowActivityTimeBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.type;
            var1 = _closure1_slot0;
            var1 = var1.LISTENING;
            var1 = var4 === var1;
            if(var1) { _fun0001_ip = 47; continue _fun0001 }
 28:
            var4 = var2.type;
            var3 = _closure1_slot0;
            var3 = var3.WATCHING;
            var1 = var4 === var3;
 47:
            if(!var1) { _fun0001_ip = 76; continue _fun0001 }
 50:
            var5 = var2.timestamps;
            var4 = null;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 72; continue _fun0001 }
 67:
            var3 = var5.start;
 72:
            var1 = var4 != var3;
 76:
            if(!var1) { _fun0001_ip = 96; continue _fun0001 }
 79:
            var2 = var2.timestamps;
            var3 = var2.end;
            var2 = null;
            var1 = var2 != var3;
 96:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();