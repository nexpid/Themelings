// app/modules/remixing/native/components/RemixingBackground.tsx
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
    var4 = 'modules/remixing/native/components/RemixingBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.dominantColors;
            var24 = var2.height;
            var20 = var2.width;
            var19 = 0;
            var15 = var1[var19];
            var2 = 1;
            var18 = var1[var2];
            var21 = 2;
            var16 = var1[var21];
            var4 = _closure1_slot2;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Rect;
            var1 = {'x': 0, 'y': 0};
            var1['width'] = var20;
            var1['height'] = var24;
            var5 = {};
            var6 = var20 / var21;
            var5['x'] = var6;
            var6 = var24 / var21;
            var5['y'] = var6;
            var1['origin'] = var5;
            var5 = 'white';
            var1['color'] = var5;
            var17 = null;
            var5 = var17 != var15;
            if(!var5) { _fun0001_ip = 409; continue _fun0001 }
 132:
            var8 = _closure1_slot3;
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var6 = var13[var21];
            var6 = var14.bind(var3)(var6);
            var7 = var6.Blend;
            var6 = {};
            var9 = 'multiply';
            var6['mode'] = var9;
            var12 = _closure1_slot2;
            var9 = var13[var21];
            var9 = var14.bind(var3)(var9);
            var10 = var9.LinearGradient;
            var9 = {};
            var22 = var13[var21];
            var23 = var14.bind(var3)(var22);
            var22 = var23.vec;
            var22 = var22.bind(var23)(var19, var19);
            var9['start'] = var22;
            var13 = var13[var21];
            var14 = var14.bind(var3)(var13);
            var13 = var14.vec;
            var13 = var13.bind(var14)(var20, var24);
            var9['end'] = var13;
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var15;
            if(!(var17 != var18)) { _fun0001_ip = 258; continue _fun0001 }
 255:
            var14 = var18;
 258:
            var13[1] = var14;
            var9['colors'] = var13;
            var10 = var12.bind(var3)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var17 != var16;
            if(!var10) { _fun0001_ip = 395; continue _fun0001 }
 287:
            var13 = _closure1_slot2;
            var18 = _closure1_slot0;
            var14 = _closure1_slot1;
            var11 = var14[var21];
            var11 = var18.bind(var3)(var11);
            var12 = var11.LinearGradient;
            var11 = {};
            var22 = var14[var21];
            var23 = var18.bind(var3)(var22);
            var22 = var23.vec;
            var22 = var22.bind(var23)(var19, var24);
            var11['start'] = var22;
            var14 = var14[var21];
            var18 = var18.bind(var3)(var14);
            var14 = var18.vec;
            var14 = var14.bind(var18)(var20, var19);
            var11['end'] = var14;
            var14 = new Array(2);
            var14[0] = var15;
            if(!(var17 != var16)) { _fun0001_ip = 381; continue _fun0001 }
 378:
            var15 = var16;
 381:
            var14[1] = var15;
            var11['colors'] = var14;
            var10 = var13.bind(var3)(var12, var11);
 395:
            var9[1] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var3)(var7, var6);
 409:
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();