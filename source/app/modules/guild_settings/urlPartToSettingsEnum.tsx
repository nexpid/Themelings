// app/modules/guild_settings/urlPartToSettingsEnum.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/guild_settings/urlPartToSettingsEnum.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function urlPartToSettingsEnum(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = arg2;
            var4 = null;
            var5 = var4 == var8;
            var3 = undefined;
            var1 = undefined;
            if(var5) { _fun0001_ip = 67; continue _fun0001 }
 19:
            var7 = var8.replace;
            var6 = /-/g;
            var5 = '_';
            var6 = var7.bind(var8)(var6, var5);
            var5 = var4 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 67; continue _fun0001 }
 57:
            var5 = var6.toUpperCase;
            var1 = var5.bind(var6)();
 67:
            if(!(var4 != var1)) { _fun0001_ip = 78; continue _fun0001 }
 71:
            var4 = var1 in var2;
            if(var4) { _fun0001_ip = 80; continue _fun0001 }
 78:
            return var3;
 80:
            var1 = var2[var1];
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();