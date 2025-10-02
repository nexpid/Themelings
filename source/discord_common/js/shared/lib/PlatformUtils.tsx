// discord_common/js/shared/lib/PlatformUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var4 = global;
        var6 = var4.Object;
        var5 = var6.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var2);
        var5 = var4.Set;
        var1 = var5.prototype;
        var2 = Object.create(var1, {constructor: {value: var5}});
        var17 = ['iPad', 'Kindle', 'Kindle Fire', 'Nook', 'PlayBook'];
        var18 = var2;
        var1 = new var18[var5](var17, var16);
        var12 = var1 instanceof Object ? var1 : var2;
        var5 = var4.Set;
        var1 = var5.prototype;
        var2 = Object.create(var1, {constructor: {value: var5}});
        var17 = ['Android', 'iOS', 'Windows Phone'];
        var18 = var2;
        var1 = new var18[var5](var17, var16);
        var11 = var1 instanceof Object ? var1 : var2;
        var2 = var4.window;
        var9 = null;
        var6 = var9 == var2;
        var1 = undefined;
        var5 = undefined;
        if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2 = var2.navigator;
        var6 = var9 == var2;
        var5 = undefined;
        if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 4:
        var5 = var2.platform;
case 2:
        var2 = 'MacIntel';
        var2 = var2 === var5;
        if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
        var6 = var4.window;
        var7 = var9 == var6;
        var5 = undefined;
        if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var6 = var6.navigator;
        var7 = var9 == var6;
        var5 = undefined;
        if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 9:
        var5 = var6.standalone;
case 7:
        var2 = var1 !== var5;
case 5:
        if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var4 = var4.window;
        var6 = var9 == var4;
        var5 = undefined;
        if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var4 = var4.navigator;
        var6 = var9 == var4;
        var5 = undefined;
        if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 14:
        var5 = var4.maxTouchPoints;
case 12:
        var4 = 1;
        var2 = var5 > var4;
case 10:
        var6 = var12.has;
        var7 = 0;
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var13 = var4.product;
        var14 = var9 != var13;
        var5 = '';
        var4 = var5;
        if(!var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
        var4 = var13;
case 15:
        var6 = var6.bind(var12)(var4);
        if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
        var6 = var2;
case 17:
        var2 = !var6;
        if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
        var4 = var11.has;
        var12 = var8[var7];
        var12 = var10.bind(var1)(var12);
        var13 = var9 == var12;
        var12 = undefined;
        if(var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
        var13 = var8[var7];
        var13 = var10.bind(var1)(var13);
        var13 = var13.os;
        var14 = var9 == var13;
        var12 = undefined;
        if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 23:
        var12 = var13.family;
case 21:
        var13 = var9 != var12;
        if(!var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
        var5 = var12;
case 24:
        var2 = var4.bind(var11)(var5);
case 19:
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var4 = var9 == var4;
        var5 = undefined;
        if(var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var4 = var4.os;
        var11 = var9 == var4;
        var5 = undefined;
        if(var11) { _fun0001_ip = 26; continue _fun0001 }
case 28:
        var5 = var4.family;
case 26:
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var11 = var9 == var4;
        var4 = undefined;
        if(var11) { _fun0001_ip = 29; continue _fun0001 }
case 30:
        var7 = var8[var7];
        var7 = var10.bind(var1)(var7);
        var7 = var7.os;
        var9 = var9 == var7;
        var4 = undefined;
        if(var9) { _fun0001_ip = 29; continue _fun0001 }
case 31:
        var4 = var7.family;
case 29:
        var7 = 1;
        var8 = var8[var7];
        var7 = require;
        var9 = var7.bind(var1)(var8);
        var8 = var9.fileFinishedImporting;
        var7 = '../discord_common/js/shared/lib/PlatformUtils.tsx';
        var7 = var8.bind(var9)(var7);
        var3['isTablet'] = var6;
        var3['isMobile'] = var2;
        var2 = 'iOS';
        var2 = var2 === var5;
        var3['isIOSWeb'] = var2;
        var2 = 'Android';
        var2 = var2 === var4;
        var3['isAndroidWeb'] = var2;
        return var1;
    }
})();