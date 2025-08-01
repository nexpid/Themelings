// app/uikit-native/SpoilerIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot2 = var7;
    var4 = var4.jsxs;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/SpoilerIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Spoiler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var12 = var3.width;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 14:
            var12 = 24;
 17:
            var11 = var3.height;
            if(!(var11 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 26:
            var11 = 24;
 29:
            var9 = var3.color;
            if(!(var9 === var4)) { _fun0001_ip = 44; continue _fun0001 }
 38:
            var9 = 'currentColor';
 44:
            var2 = {'width': 0, 'height': 0, 'color': 0};
            var15 = null;
            var16 = var2;
            var1 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var3;
            var14 = var2;
            var15 = copyDataProperties(var16, var15, var14);
            var3 = _closure1_slot3;
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 2;
            var1 = var10[var5];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Svg;
            var1 = {};
            var13 = '0 0 24 24';
            var1['viewBox'] = var13;
            var16 = var1;
            var8 = copyDataProperties(var16, var15);
            var8 = 'width';
            var1[var8] = var12;
            var8 = 'height';
            var1[var8] = var11;
            var8 = _closure1_slot2;
            var6 = var10[var5];
            var6 = var7.bind(var4)(var6);
            var11 = var6.Path;
            var6 = {};
            var6['fill'] = var9;
            var12 = 'M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z';
            var6['d'] = var12;
            var11 = var8.bind(var4)(var11, var6);
            var6 = new Array(2);
            var6[0] = var11;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Path;
            var5 = {};
            var5['fill'] = var9;
            var9 = 'M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z';
            var5['d'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            var6[1] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();