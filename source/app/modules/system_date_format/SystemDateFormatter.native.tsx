// app/modules/system_date_format/SystemDateFormatter.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = global;
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var7;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var4 = {};
        var10 = true;
        var4['value'] = var10;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var4);
        var1 = 0;
        var4 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var4);
        var4 = var4.NativeModules;
        var8 = var5.__DiscordCreateDateFormatter;
        var9 = null;
        if(!(var9 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var8 = 1;
        var8 = var7[var8];
        var11 = var6.bind(var1)(var8);
        var8 = var11.isAndroid;
        var8 = var8.bind(var11)();
        if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var11 = var4.DateFormatUtils;
        _fun0001_ip = 6; continue _fun0001;
case 4:
        var4 = 2;
        var8 = var7[var4];
        var4 = metroImportDefault;
        var11 = var4.bind(var1)(var8);
case 6:
        var4 = var9 == var11;
        var8 = undefined;
        if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var4 = var11.activate;
        var4 = var9 == var4;
        var8 = undefined;
        if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 9:
        var4 = var11.activate;
        var8 = var4.bind(var11)();
case 7:
        var4 = undefined;
        if(!(var10 === var8)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var8 = var5.__DiscordCreateDateFormatter;
        var8 = var9 != var8;
        var4 = undefined;
        if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 12:
        var4 = var5.__DiscordCreateDateFormatter;
case 10:
        _fun0001_ip = 13; continue _fun0001;
case 2:
        var4 = var5.__DiscordCreateDateFormatter;
case 13:
        var5 = 3;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/system_date_format/SystemDateFormatter.native.tsx';
        var5 = var6.bind(var7)(var5);
        var3['makeFormatter'] = var4;
        var2 = function supportsSystemDateFormatter() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['supportsSystemDateFormatter'] = var2;
        return var1;
    }
})();