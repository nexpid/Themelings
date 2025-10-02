// app/modules/system_date_format/SystemDateFormatter.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var4 = global;
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
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
        if(!(var8 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var7 = 1;
        var7 = var6[var7];
        var10 = var5.bind(var1)(var7);
        var7 = var10.isAndroid;
        var7 = var7.bind(var10)();
        if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var10 = var2.DateFormatUtils;
        _fun0001_ip = 6; continue _fun0001;
case 4:
        var2 = 2;
        var7 = var6[var2];
        var2 = metroImportDefault;
        var10 = var2.bind(var1)(var7);
case 6:
        var2 = var8 == var10;
        var7 = undefined;
        if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var2 = var10.activate;
        var2 = var8 == var2;
        var7 = undefined;
        if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 9:
        var2 = var10.activate;
        var7 = var2.bind(var10)();
case 7:
        var2 = undefined;
        if(!(var9 === var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var7 = var4.__DiscordCreateDateFormatter;
        var7 = var8 != var7;
        var2 = undefined;
        if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 12:
        var2 = var4.__DiscordCreateDateFormatter;
case 10:
        _fun0001_ip = 13; continue _fun0001;
case 2:
        var2 = var4.__DiscordCreateDateFormatter;
case 13:
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