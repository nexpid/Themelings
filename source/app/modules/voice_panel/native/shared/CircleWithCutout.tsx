// app/modules/voice_panel/native/shared/CircleWithCutout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 0;
    var7 = var5[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var1)(var6);
    var8 = var6.PixelRatio;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot3 = var9;
    var6 = var6.jsxs;
    var _closure1_slot4 = var6;
    var6 = var8.get;
    var6 = var6.bind(var8)();
    var _closure1_slot5 = var6;
    var6 = var7.memo;
    var2 = function CircleWithCutout(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var9 = var5.fill;
            var1 = var5.circleRadius;
            var20 = var5.cutoutRadius;
            var10 = var5.enableCutout;
            var14 = var5.cutoutPositionInDegrees;
            var3 = var5.alignBadgeEdgeWithCircleEdge;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var2 = var5.badgeRadius;
            var5 = var5.scaleToPixelDensity;
            if(!(var5 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = true;
case 4:
            var8 = 1;
            var19 = var8;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var19 = _closure1_slot5;
case 6:
            var11 = var1 * var19;
            var12 = null;
            var5 = var12 != var2;
            var1 = undefined;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2 * var19;
case 8:
            var2 = 2;
            var18 = var2 * var11;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 3;
            var7 = var15[var6];
            var16 = var13.bind(var4)(var7);
            var7 = var16.getCutoutCenterX;
            var7 = var7.bind(var16)(var11, var14);
            var6 = var15[var6];
            var13 = var13.bind(var4)(var6);
            var6 = var13.getCutoutCenterY;
            var6 = var6.bind(var13)(var11, var14);
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var12 != var1;
case 10:
            var22 = var7;
            var21 = var6;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var2 * var11;
            var22 = var2 - var1;
            var21 = var1;
case 12:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 4;
            var1 = var12[var6];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['height'] = var18;
            var1['width'] = var18;
            var7 = {};
            var13 = {};
            var8 = var8 / var19;
            var13['scale'] = var8;
            var8 = new Array(1);
            var8[0] = var13;
            var7['transform'] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot3;
            var7 = _closure1_slot0;
            var5 = var12[var6];
            var5 = var7.bind(var4)(var5);
            var13 = var5.Defs;
            var5 = {};
            var14 = var12[var6];
            var14 = var7.bind(var4)(var14);
            var15 = var14.Mask;
            var14 = {};
            var16 = 'mask';
            var14['id'] = var16;
            var16 = var12[var6];
            var16 = var7.bind(var4)(var16);
            var17 = var16.Rect;
            var16 = {};
            var16['width'] = var18;
            var16['height'] = var18;
            var18 = 'white';
            var16['fill'] = var18;
            var17 = var8.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var12[var6];
            var17 = var7.bind(var4)(var17);
            var18 = var17.Circle;
            var17 = {};
            var17['cx'] = var22;
            var17['cy'] = var21;
            var19 = var20 * var19;
            var17['r'] = var19;
            var19 = 'black';
            var17['fill'] = var19;
            var17 = var8.bind(var4)(var18, var17);
            var16[1] = var17;
            var14['children'] = var16;
            var14 = var3.bind(var4)(var15, var14);
            var5['children'] = var14;
            var13 = var8.bind(var4)(var13, var5);
            var5 = new Array(2);
            var5[0] = var13;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Circle;
            var6 = {};
            var6['cx'] = var11;
            var6['cy'] = var11;
            var6['r'] = var11;
            var6['fill'] = var9;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = 'url(#mask)';
case 14:
            var6['mask'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var6.bind(var7)(var2);
    var6 = 5;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_panel/native/shared/CircleWithCutout.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var2;
    var2 = 3;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.getBadgeLeft;
    var3['getBadgeLeft'] = var6;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.getBadgeTop;
    var3['getBadgeTop'] = var2;
    return var1;
})();