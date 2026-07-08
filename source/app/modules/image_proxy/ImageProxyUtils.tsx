// app/modules/image_proxy/ImageProxyUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var7;
        var4 = function isImageProxyURL(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot3;
                var3 = var4.has;
                var1 = var2.hostname;
                var1 = var3.bind(var4)(var1);
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var2.pathname;
                var3 = var4.startsWith;
                var2 = '/external/';
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var _closure1_slot4 = var4;
        var5 = global;
        var10 = var5.Object;
        var9 = var10.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var8);
        var9 = var5.Set;
        var1 = var5.window;
        var1 = var1.GLOBAL_ENV;
        var13 = var1.IMAGE_PROXY_ENDPOINTS;
        var8 = null;
        var10 = var8 == var13;
        var1 = undefined;
        var11 = undefined;
        if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var12 = var13.split;
        var10 = ',';
        var11 = var12.bind(var13)(var10);
case 4:
        if(!(var8 == var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var11 = new Array(0);
case 6:
        var10 = var11.map;
        var8 = function(arg1) {
            var3 = arg1;
            var2 = var3.substring;
            var1 = 2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var11 = var10.bind(var11)(var8);
        var10 = var11.map;
        var8 = function getHostWithoutPort(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = var4.split;
                var2 = ':';
                var3 = var3.bind(var4)(var2);
                var2 = 0;
                var1 = var3[var2];
case 8:
                return var1;
            }
        };
        var10 = var10.bind(var11)(var8);
        var8 = var10.filter;
        var5 = var5.Boolean;
        var16 = var8.bind(var10)(var5);
        var8 = var9.prototype;
        var8 = Object.create(var8, {constructor: {value: var9}});
        var17 = var8;
        var5 = new var17[var9](var16, var15);
        var5 = var5 instanceof Object ? var5 : var8;
        var _closure1_slot3 = var5;
        var5 = 2;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/image_proxy/ImageProxyUtils.tsx';
        var5 = var6.bind(var7)(var5);
        var3['isImageProxyURL'] = var4;
        var2 = function getSizedImageProxyURL(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var2 = arg2;
                var10 = var2.size;
                var7 = var2.keepAspectRatio;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 0;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.toURLSafe;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var6 = _closure1_slot4;
                var6 = var6.bind(var4)(var3);
                if(!var6) { _fun0004_ip = 10; continue _fun0004 }
case 12:
                if(!(var2 != var10)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var6 = global;
                var6 = var6.String;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 1;
                var8 = var12[var5];
                var9 = var11.bind(var4)(var8);
                var8 = var9.getBestMediaProxySize;
                var5 = var12[var5];
                var11 = var11.bind(var4)(var5);
                var5 = var11.getDevicePixelRatio;
                var5 = var5.bind(var11)();
                var5 = var10 * var5;
                var5 = var8.bind(var9)(var5);
                var9 = var6.bind(var4)(var5);
                var8 = var3.searchParams;
                var6 = var8.set;
                var5 = 'width';
                var5 = var6.bind(var8)(var5, var9);
                var8 = var3.searchParams;
                var6 = var8.set;
                var5 = 'height';
                var5 = var6.bind(var8)(var5, var9);
case 13:
                if(!(var2 != var7)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var6 = var3.searchParams;
                var5 = var6.set;
                var2 = global;
                var2 = var2.String;
                var4 = var2.bind(var4)(var7);
                var2 = 'keep_aspect_ratio';
                var2 = var5.bind(var6)(var2, var4);
case 15:
                var2 = var3.toString;
                var2 = var2.bind(var3)();
                return var2;
case 10:
                return var1;
            }
        };
        var3['getSizedImageProxyURL'] = var2;
        return var1;
    }
})();