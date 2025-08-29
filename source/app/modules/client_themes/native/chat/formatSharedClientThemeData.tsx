// app/modules/client_themes/native/chat/formatSharedClientThemeData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/chat/formatSharedClientThemeData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var1 = arg1;
            var2 = var1.sharedClientTheme;
            var7 = undefined;
            if(!(var7 === var2)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            return var7;
 20:
            var1 = {};
            var4 = var2.colors;
            var1['colors'] = var4;
            var2 = var2.gradient_angle;
            var1['gradientAngle'] = var2;
            var2 = arg3;
            var1['createdBy'] = var2;
            var5 = var3.uri;
            var4 = '';
            var2 = var4;
            if(!(var7 !== var5)) { _fun0001_ip = 73; continue _fun0001 }
 68:
            var2 = var3.uri;
 73:
            var1['createdByAvatarUrl'] = var2;
            var9 = _closure1_slot3;
            var6 = var9.resolveAssetSource;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 1;
            var5 = var8[var5];
            var5 = var3.bind(var7)(var5);
            var5 = var6.bind(var9)(var5);
            var5 = var5.uri;
            var1['nitroWheelIconUrl'] = var5;
            var6 = _closure1_slot0;
            var5 = 2;
            var2 = var8[var5];
            var2 = var6.bind(var7)(var2);
            var10 = var2.intl;
            var9 = var10.string;
            var2 = var8[var5];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.SKNnqq;
            var2 = var9.bind(var10)(var2);
            var1['previewLabel'] = var2;
            var2 = var8[var5];
            var2 = var6.bind(var7)(var2);
            var11 = var2.intl;
            var10 = var11.string;
            var2 = 3;
            var9 = var8[var2];
            var9 = var3.bind(var7)(var9);
            var9 = var9.yl1iMj;
            var9 = var10.bind(var11)(var9);
            var1['previewHeading'] = var9;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.format;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var3 = var2.fQPSER;
            var2 = {};
            var7 = '__USERNAME__';
            var2['username'] = var7;
            var3 = var5.bind(var6)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var4)(var3);
            var1['createdByLabel'] = var2;
            return var1;
        }
    };
    var3['formatSharedClientThemeData'] = var2;
    return var1;
})();