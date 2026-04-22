// app/lib/KeybindModKeys.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var3 = exports;
        var8 = dependencyMap;
        var1 = global;
        var5 = var1.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var2 = 0;
        var4 = var8[var2];
        var1 = undefined;
        var5 = var7.bind(var1)(var4);
        var4 = var5.isMac;
        var4 = var4.bind(var5)();
        if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var8[var2];
        var5 = var7.bind(var1)(var4);
        var4 = var5.isMacWeb;
        var4 = var4.bind(var5)();
        var5 = 'ctrl';
        if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 2:
        var5 = 'cmd';
case 4:
        var4 = var8[var2];
        var6 = var7.bind(var1)(var4);
        var4 = var6.isMac;
        var4 = var4.bind(var6)();
        if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
        var4 = var8[var2];
        var6 = var7.bind(var1)(var4);
        var4 = var6.isMacWeb;
        var6 = var4.bind(var6)();
        var4 = 'alt';
        if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 5:
        var4 = 'opt';
case 7:
        var6 = var8[var2];
        var9 = var7.bind(var1)(var6);
        var6 = var9.isMac;
        var6 = var6.bind(var9)();
        if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var2 = var8[var2];
        var6 = var7.bind(var1)(var2);
        var2 = var6.isMacWeb;
        var6 = var2.bind(var6)();
        var2 = 'enter';
        if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 8:
        var2 = 'return';
case 10:
        var6 = 1;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'lib/KeybindModKeys.tsx';
        var6 = var7.bind(var8)(var6);
        var3['modKey'] = var5;
        var3['altKey'] = var4;
        var3['returnKey'] = var2;
        return var1;
    }
})();