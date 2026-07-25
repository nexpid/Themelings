// app/design/components/Icon/native/ClipView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var1 = function SolidCutout(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.backgroundColor;
            var5 = var1.cutout;
            var1 = _closure1_slot8;
            var3 = var1.solidCutout;
            var1 = new Array(1);
            var1[0] = var3;
            var4 = var5.shape;
            var3 = _closure1_slot6;
            var3 = var3.Circle;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.push;
            var3 = {};
            var3['backgroundColor'] = var6;
            var7 = var5.cornerRadius;
            var3['borderRadius'] = var7;
            var7 = var5.height;
            var3['height'] = var7;
            var7 = var5.width;
            var3['width'] = var7;
            var7 = var5.x;
            var3['left'] = var7;
            var7 = var5.y;
            var3['top'] = var7;
            var3 = var4.bind(var1)(var3);
            var4 = var5.rotationDegrees;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var1.push;
            var3 = {};
            var8 = {};
            var11 = var5.rotationDegrees;
            var7 = global;
            var7 = var7.HermesInternal;
            var10 = var7.concat;
            var9 = '';
            var7 = 'deg';
            var7 = var10.bind(var9)(var11, var7);
            var8['rotate'] = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var3['transform'] = var7;
            var3 = var4.bind(var1)(var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var1.push;
            var3 = {};
            var3['backgroundColor'] = var6;
            var7 = var5.size;
            var6 = 2;
            var6 = var7 / var6;
            var3['borderRadius'] = var6;
            var6 = var5.size;
            var3['height'] = var6;
            var6 = var5.size;
            var3['width'] = var6;
            var6 = var5.x;
            var3['left'] = var6;
            var5 = var5.y;
            var3['top'] = var5;
            var3 = var4.bind(var1)(var3);
case 4:
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var2['style'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function SolidCutoutOverlay(arg1) {
        var2 = arg1;
        var3 = var2.backgroundColor;
        var _closure2_slot0 = var3;
        var6 = var2.cutouts;
        var4 = _closure1_slot4;
        var3 = _closure1_slot3;
        var2 = {};
        var7 = 'none';
        var2['pointerEvents'] = var7;
        var5 = _closure1_slot8;
        var5 = var5.solidCutoutContainer;
        var2['style'] = var5;
        var5 = var6.map;
        var1 = function(arg1, arg2) {
            var5 = _closure1_slot4;
            var4 = _closure1_slot9;
            var3 = {};
            var1 = _closure2_slot0;
            var3['backgroundColor'] = var1;
            var1 = arg1;
            var3['cutout'] = var1;
            var2 = undefined;
            var1 = arg2;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var1 = var5.bind(var6)(var1);
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var4 = var8[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var9 = var2.StyleSheet;
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot4 = var4;
    var2 = var2.jsxs;
    var _closure1_slot5 = var2;
    var2 = {};
    var4 = 'circle';
    var2['Circle'] = var4;
    var4 = 'rounded-rect';
    var2['RoundedRect'] = var4;
    var _closure1_slot6 = var2;
    var4 = new Array(0);
    var _closure1_slot7 = var4;
    var6 = var9.create;
    var4 = {};
    var11 = {};
    var14 = var9.absoluteFillObject;
    var15 = var11;
    var12 = copyDataProperties(var15, var14);
    var4['solidCutoutContainer'] = var11;
    var11 = {};
    var12 = 'absolute';
    var11['position'] = var12;
    var4['solidCutout'] = var11;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var8[var4];
    var9 = var10.bind(var1)(var4);
    var6 = var9.createAnimatedComponent;
    var4 = 4;
    var4 = var8[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var6.bind(var9)(var4);
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/Icon/native/ClipView.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ClipView(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var7 = var4.children;
            var13 = var4.cutouts;
            var8 = var4.style;
            var3 = {'children': 0, 'cutouts': 0, 'style': 0};
            var2 = null;
            var17 = var3;
            var16 = null;
            var1 = silentSetPrototypeOf(var17, var16);
            var12 = 0;
            var17 = {};
            var16 = var4;
            var15 = var3;
            var6 = copyDataProperties(var17, var16, var15);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 3;
            var3 = var4[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.useCutoutBackgroundColor;
            var14 = var3.bind(var5)();
            var3 = var2 != var14;
            var9 = var13;
            var5 = null;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot7;
            var10 = var2 != var13;
            if(!var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var11 = var13.length;
            var10 = var11 > var12;
case 8:
            var2 = null;
            if(!var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var12 = _closure1_slot4;
            var11 = _closure1_slot10;
            var10 = {};
            var10['backgroundColor'] = var14;
            var10['cutouts'] = var13;
            var2 = var12.bind(var4)(var11, var10);
case 10:
            var5 = var2;
            var9 = var3;
case 6:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 4;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var17 = var1;
            var16 = var6;
            var6 = copyDataProperties(var17, var16);
            var6 = 'cutouts';
            var1[5] = var9;
            var6 = 'style';
            var1[5] = var8;
            var6 = new Array(2);
            var6[0] = var7;
            var6[1] = var5;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['ClipViewAnimated'] = var4;
    var3['CutoutShape'] = var2;
    return var1;
})();