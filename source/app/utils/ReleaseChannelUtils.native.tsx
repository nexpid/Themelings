// app/utils/ReleaseChannelUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var1 = global;
        var5 = var1.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var1 = 0;
        var4 = var7[var1];
        var2 = metroImportAll;
        var1 = undefined;
        var4 = var2.bind(var1)(var4);
        var2 = var4.getConstants;
        var2 = var2.bind(var4)();
        var2 = var2.ReleaseChannel;
        var4 = 1;
        var4 = var7[var4];
        var5 = var6.bind(var1)(var4);
        var4 = var5.isAndroid;
        var8 = var4.bind(var5)();
        if(!var8) { _fun0001_ip = 122; continue _fun0001 }
 97:
        var5 = var2.indexOf;
        var4 = 'canary';
        var5 = var5.bind(var2)(var4);
        var4 = -1;
        var8 = var4 === var5;
 122:
        if(!var8) { _fun0001_ip = 150; continue _fun0001 }
 125:
        var5 = var2.indexOf;
        var4 = 'beta';
        var5 = var5.bind(var2)(var4);
        var4 = -1;
        var8 = var4 === var5;
 150:
        var4 = 'stable';
        var5 = var4 === var2;
        var9 = var2.indexOf;
        var4 = 'debug';
        var4 = var9.bind(var2)(var4);
        var10 = -1;
        var9 = var10 !== var4;
        if(var9) { _fun0001_ip = 207; continue _fun0001 }
 186:
        var11 = var2.indexOf;
        var4 = 'developer';
        var4 = var11.bind(var2)(var4);
        var9 = var10 !== var4;
 207:
        var4 = !var9;
        if(var9) { _fun0001_ip = 222; continue _fun0001 }
 213:
        if(var5) { _fun0001_ip = 219; continue _fun0001 }
 216:
        var5 = var8;
 219:
        var4 = var5;
 222:
        var5 = 2;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'utils/ReleaseChannelUtils.native.tsx';
        var5 = var6.bind(var7)(var5);
        var3['isStable'] = var4;
        var3['CurrentReleaseChannel'] = var2;
        return var1;
    }
})();