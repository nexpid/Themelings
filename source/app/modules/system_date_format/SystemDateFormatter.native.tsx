// app/modules/system_date_format/SystemDateFormatter.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var4 = native1;
        var5 = native2;
        var3 = native6;
        var6 = native7;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var2 = {};
        var9 = true;
        var2['value'] = var9;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var2 = var2.NativeModules;
        var7 = var4.__DiscordCreateDateFormatter;
        var8 = null;
        if(!(var8 == var7)) { _fun0001_ip = 187; continue _fun0001 }
 75:
        var7 = 1;
        var7 = var6[var7];
        var10 = var5.bind(var1)(var7);
        var7 = var10.isAndroid;
        var7 = var7.bind(var10)();
        if(var7) { _fun0001_ip = 109; continue _fun0001 }
 99:
        var10 = var2.DateFormatUtils;
        _fun0001_ip = 124; continue _fun0001;
 109:
        var2 = 2;
        var7 = var6[var2];
        var2 = native3;
        var10 = var2.bind(var1)(var7);
 124:
        var2 = var8 == var10;
        var7 = undefined;
        if(var2) { _fun0001_ip = 158; continue _fun0001 }
 133:
        var2 = var10.activate;
        var2 = var8 == var2;
        var7 = undefined;
        if(var2) { _fun0001_ip = 158; continue _fun0001 }
 148:
        var2 = var10.activate;
        var7 = var2.bind(var10)();
 158:
        var2 = undefined;
        if(!(var9 === var7)) { _fun0001_ip = 185; continue _fun0001 }
 164:
        var7 = var4.__DiscordCreateDateFormatter;
        var7 = var8 != var7;
        var2 = undefined;
        if(!var7) { _fun0001_ip = 185; continue _fun0001 }
 179:
        var2 = var4.__DiscordCreateDateFormatter;
 185:
        _fun0001_ip = 193; continue _fun0001;
 187:
        var2 = var4.__DiscordCreateDateFormatter;
 193:
        var4 = 3;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/system_date_format/SystemDateFormatter.native.tsx';
        var4 = var5.bind(var6)(var4);
        var3['makeFormatter'] = var2;
        return var1;
    }
})();