// discord_common/js/shared/lib/PlatformUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var10 = native3;
        var3 = native6;
        var8 = native7;
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
        if(var6) { _fun0001_ip = 151; continue _fun0001 }
 130:
        var2 = var2.navigator;
        var6 = var9 == var2;
        var5 = undefined;
        if(var6) { _fun0001_ip = 151; continue _fun0001 }
 145:
        var5 = var2.platform;
 151:
        var2 = 'MacIntel';
        var2 = var2 === var5;
        if(!var2) { _fun0001_ip = 204; continue _fun0001 }
 164:
        var6 = var4.window;
        var7 = var9 == var6;
        var5 = undefined;
        if(var7) { _fun0001_ip = 200; continue _fun0001 }
 179:
        var6 = var6.navigator;
        var7 = var9 == var6;
        var5 = undefined;
        if(var7) { _fun0001_ip = 200; continue _fun0001 }
 194:
        var5 = var6.standalone;
 200:
        var2 = var1 !== var5;
 204:
        if(!var2) { _fun0001_ip = 252; continue _fun0001 }
 207:
        var4 = var4.window;
        var6 = var9 == var4;
        var5 = undefined;
        if(var6) { _fun0001_ip = 245; continue _fun0001 }
 222:
        var4 = var4.navigator;
        var6 = var9 == var4;
        var5 = undefined;
        if(var6) { _fun0001_ip = 245; continue _fun0001 }
 237:
        var5 = var4.maxTouchPoints;
 245:
        var4 = 1;
        var2 = var5 > var4;
 252:
        var6 = var12.has;
        var7 = 0;
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var13 = var4.product;
        var14 = var9 != var13;
        var5 = '';
        var4 = var5;
        if(!var14) { _fun0001_ip = 291; continue _fun0001 }
 288:
        var4 = var13;
 291:
        var6 = var6.bind(var12)(var4);
        if(var6) { _fun0001_ip = 302; continue _fun0001 }
 299:
        var6 = var2;
 302:
        var2 = !var6;
        if(!var2) { _fun0001_ip = 376; continue _fun0001 }
 308:
        var4 = var11.has;
        var12 = var8[var7];
        var12 = var10.bind(var1)(var12);
        var13 = var9 == var12;
        var12 = undefined;
        if(var13) { _fun0001_ip = 361; continue _fun0001 }
 331:
        var13 = var8[var7];
        var13 = var10.bind(var1)(var13);
        var13 = var13.os;
        var14 = var9 == var13;
        var12 = undefined;
        if(var14) { _fun0001_ip = 361; continue _fun0001 }
 355:
        var12 = var13.family;
 361:
        var13 = var9 != var12;
        if(!var13) { _fun0001_ip = 371; continue _fun0001 }
 368:
        var5 = var12;
 371:
        var2 = var4.bind(var11)(var5);
 376:
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var4 = var9 == var4;
        var5 = undefined;
        if(var4) { _fun0001_ip = 424; continue _fun0001 }
 394:
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var4 = var4.os;
        var11 = var9 == var4;
        var5 = undefined;
        if(var11) { _fun0001_ip = 424; continue _fun0001 }
 418:
        var5 = var4.family;
 424:
        var4 = var8[var7];
        var4 = var10.bind(var1)(var4);
        var11 = var9 == var4;
        var4 = undefined;
        if(var11) { _fun0001_ip = 472; continue _fun0001 }
 442:
        var7 = var8[var7];
        var7 = var10.bind(var1)(var7);
        var7 = var7.os;
        var9 = var9 == var7;
        var4 = undefined;
        if(var9) { _fun0001_ip = 472; continue _fun0001 }
 466:
        var4 = var7.family;
 472:
        var7 = 1;
        var8 = var8[var7];
        var7 = native2;
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