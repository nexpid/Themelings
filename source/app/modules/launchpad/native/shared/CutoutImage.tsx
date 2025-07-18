// app/modules/launchpad/native/shared/CutoutImage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function CutoutImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.style;
            var42 = var2.cutoutTopLeftSize;
            var4 = undefined;
            if(!(var42 === var4)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var42 = 0;
 26:
            var44 = var2.cutoutTopLeftInsetX;
            if(!(var44 === var4)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var44 = 0;
 40:
            var43 = var2.cutoutTopLeftInsetY;
            if(!(var43 === var4)) { _fun0001_ip = 54; continue _fun0001 }
 52:
            var43 = 0;
 54:
            var39 = var2.cutoutTopRightSize;
            if(!(var39 === var4)) { _fun0001_ip = 66; continue _fun0001 }
 64:
            var39 = 0;
 66:
            var41 = var2.cutoutTopRightInsetX;
            if(!(var41 === var4)) { _fun0001_ip = 78; continue _fun0001 }
 76:
            var41 = 0;
 78:
            var40 = var2.cutoutTopRightInsetY;
            if(!(var40 === var4)) { _fun0001_ip = 90; continue _fun0001 }
 88:
            var40 = 0;
 90:
            var36 = var2.cutoutBottomLeftSize;
            if(!(var36 === var4)) { _fun0001_ip = 104; continue _fun0001 }
 102:
            var36 = 0;
 104:
            var38 = var2.cutoutBottomLeftInsetX;
            if(!(var38 === var4)) { _fun0001_ip = 118; continue _fun0001 }
 116:
            var38 = 0;
 118:
            var37 = var2.cutoutBottomLeftInsetY;
            if(!(var37 === var4)) { _fun0001_ip = 132; continue _fun0001 }
 130:
            var37 = 0;
 132:
            var33 = var2.cutoutBottomRightSize;
            if(!(var33 === var4)) { _fun0001_ip = 144; continue _fun0001 }
 142:
            var33 = 0;
 144:
            var35 = var2.cutoutBottomRightInsetX;
            if(!(var35 === var4)) { _fun0001_ip = 156; continue _fun0001 }
 154:
            var35 = 0;
 156:
            var34 = var2.cutoutBottomRightInsetY;
            if(!(var34 === var4)) { _fun0001_ip = 168; continue _fun0001 }
 166:
            var34 = 0;
 168:
            var16 = var2.imageSize;
            var24 = var2.imageSource;
            var10 = var2.imageBorderRadius;
            if(!(var10 === var4)) { _fun0001_ip = 197; continue _fun0001 }
 190:
            var3 = 2;
            var10 = var16 / var3;
 197:
            var20 = var2.imageBackgroundColor;
            var26 = var2.imageTintColor;
            var _closure2_slot0 = var26;
            var32 = var2.clipInnerAmount;
            if(!(var32 === var4)) { _fun0001_ip = 227; continue _fun0001 }
 225:
            var32 = 0;
 227:
            var29 = var2.clipOuterAmount;
            if(!(var29 === var4)) { _fun0001_ip = 239; continue _fun0001 }
 237:
            var29 = 0;
 239:
            var14 = var2.borderStroke;
            var15 = var2.borderStrokeColor;
            var _closure2_slot1 = var4;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var30 = 4;
            var2 = var2[var30];
            var8 = var8.bind(var4)(var2);
            var2 = var8.v4;
            var2 = var2.bind(var8)();
            var3 = var3.bind(var6)(var2);
            var2 = _closure1_slot3;
            var13 = 2;
            var3 = var2.bind(var4)(var3, var13);
            var21 = 0;
            var19 = var3[var21];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot1 = var2;
            var6 = null;
            var2 = var6 != var19;
            var12 = undefined;
            if(!var2) { _fun0001_ip = 372; continue _fun0001 }
 343:
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var3 = 'url(#';
            var2 = ')';
            var12 = var8.bind(var3)(var19, var2);
 372:
            var2 = var29 > var21;
            var25 = undefined;
            if(!var2) { _fun0001_ip = 408; continue _fun0001 }
 381:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var30];
            var3 = var3.bind(var4)(var2);
            var2 = var3.v4;
            var25 = var2.bind(var3)();
 408:
            var2 = var6 != var25;
            var11 = undefined;
            if(!var2) { _fun0001_ip = 446; continue _fun0001 }
 417:
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var3 = 'url(#';
            var2 = ')';
            var11 = var8.bind(var3)(var25, var2);
 446:
            var8 = _closure1_slot4;
            var9 = var8.useCallback;
            var3 = function() {
                var3 = _closure2_slot1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.v4;
                var2 = var2.bind(var4)();
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var23 = var9.bind(var8)(var3, var2);
            var3 = var8.useLayoutEffect;
            var2 = new Array(1);
            var2[0] = var26;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 57; continue _fun0002 }
 13:
                    var3 = _closure2_slot1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.v4;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var17 = 5;
            var1 = var9[var17];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var5;
            var1['height'] = var16;
            var1['width'] = var16;
            var18 = _closure1_slot0;
            var5 = var9[var17];
            var5 = var18.bind(var4)(var5);
            var8 = var5.Defs;
            var5 = {};
            var9 = var9[var17];
            var9 = var18.bind(var4)(var9);
            var18 = var9.Mask;
            var9 = {};
            var9['width'] = var16;
            var9['height'] = var16;
            var9['id'] = var19;
            var19 = var16 / var13;
            if(!(var10 !== var19)) { _fun0001_ip = 667; continue _fun0001 }
 595:
            var27 = _closure1_slot6;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var17];
            var19 = var22.bind(var4)(var19);
            var22 = var19.Rect;
            var19 = {'x': 0, 'y': 0};
            var19['width'] = var16;
            var19['height'] = var16;
            var19['rx'] = var10;
            var19['ry'] = var10;
            var28 = 'white';
            var19['fill'] = var28;
            var22 = var27.bind(var4)(var22, var19);
            _fun0001_ip = 737; continue _fun0001;
 667:
            var28 = _closure1_slot6;
            var27 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var17];
            var19 = var27.bind(var4)(var19);
            var27 = var19.Circle;
            var19 = {};
            var31 = var16 / var13;
            var19['cx'] = var31;
            var31 = var16 / var13;
            var19['cy'] = var31;
            var31 = var16 / var13;
            var19['r'] = var31;
            var31 = 'white';
            var19['fill'] = var31;
            var22 = var28.bind(var4)(var27, var19);
 737:
            var19 = new Array(6);
            var19[0] = var22;
            var27 = var42 > var21;
            var22 = null;
            if(!var27) { _fun0001_ip = 812; continue _fun0001 }
 754:
            var31 = _closure1_slot6;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var17];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Circle;
            var27 = {};
            var27['cx'] = var44;
            var27['cy'] = var43;
            var27['r'] = var42;
            var42 = 'black';
            var27['fill'] = var42;
            var22 = var31.bind(var4)(var28, var27);
 812:
            var19[1] = var22;
            var27 = var39 > var21;
            var22 = null;
            if(!var27) { _fun0001_ip = 887; continue _fun0001 }
 825:
            var31 = _closure1_slot6;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var17];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Circle;
            var27 = {};
            var41 = var16 - var41;
            var27['cx'] = var41;
            var27['cy'] = var40;
            var27['r'] = var39;
            var39 = 'black';
            var27['fill'] = var39;
            var22 = var31.bind(var4)(var28, var27);
 887:
            var19[2] = var22;
            var27 = var36 > var21;
            var22 = null;
            if(!var27) { _fun0001_ip = 962; continue _fun0001 }
 900:
            var31 = _closure1_slot6;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var17];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Circle;
            var27 = {};
            var27['cx'] = var38;
            var37 = var16 - var37;
            var27['cy'] = var37;
            var27['r'] = var36;
            var36 = 'black';
            var27['fill'] = var36;
            var22 = var31.bind(var4)(var28, var27);
 962:
            var19[3] = var22;
            var27 = var33 > var21;
            var22 = null;
            if(!var27) { _fun0001_ip = 1041; continue _fun0001 }
 975:
            var31 = _closure1_slot6;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var17];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Circle;
            var27 = {};
            var35 = var16 - var35;
            var27['cx'] = var35;
            var34 = var16 - var34;
            var27['cy'] = var34;
            var27['r'] = var33;
            var33 = 'black';
            var27['fill'] = var33;
            var22 = var31.bind(var4)(var28, var27);
 1041:
            var19[4] = var22;
            var22 = var32 > var21;
            var21 = null;
            if(!var22) { _fun0001_ip = 1242; continue _fun0001 }
 1057:
            var22 = var16 / var13;
            if(!(var10 !== var22)) { _fun0001_ip = 1169; continue _fun0001 }
 1065:
            var28 = _closure1_slot6;
            var27 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var17];
            var22 = var27.bind(var4)(var22);
            var27 = var22.Rect;
            var22 = {};
            var31 = var16 - var32;
            var31 = var31 / var13;
            var22['x'] = var31;
            var31 = var16 - var32;
            var31 = var31 / var13;
            var22['y'] = var31;
            var22['width'] = var32;
            var22['height'] = var32;
            var31 = var32 / var16;
            var31 = var10 * var31;
            var22['rx'] = var31;
            var31 = var32 / var16;
            var31 = var10 * var31;
            var22['ry'] = var31;
            var31 = 'black';
            var22['fill'] = var31;
            var22 = var28.bind(var4)(var27, var22);
            _fun0001_ip = 1239; continue _fun0001;
 1169:
            var31 = _closure1_slot6;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var17];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Circle;
            var27 = {};
            var33 = var16 / var13;
            var27['cx'] = var33;
            var33 = var16 / var13;
            var27['cy'] = var33;
            var32 = var32 / var13;
            var27['r'] = var32;
            var32 = 'black';
            var27['fill'] = var32;
            var22 = var31.bind(var4)(var28, var27);
 1239:
            var21 = var22;
 1242:
            var19[5] = var21;
            var9['children'] = var19;
            var18 = var3.bind(var4)(var18, var9);
            var9 = new Array(2);
            var9[0] = var18;
            var19 = var6 != var25;
            var18 = null;
            if(!var19) { _fun0001_ip = 1517; continue _fun0001 }
 1276:
            var22 = _closure1_slot6;
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var17];
            var19 = var21.bind(var4)(var19);
            var21 = var19.ClipPath;
            var19 = {};
            var19['id'] = var25;
            var25 = var16 / var13;
            if(!(var10 !== var25)) { _fun0001_ip = 1437; continue _fun0001 }
 1317:
            var28 = _closure1_slot6;
            var27 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var17];
            var25 = var27.bind(var4)(var25);
            var27 = var25.Rect;
            var25 = {};
            var25['x'] = var29;
            var25['y'] = var29;
            var31 = var13 * var29;
            var31 = var16 - var31;
            var25['width'] = var31;
            var31 = var13 * var29;
            var31 = var16 - var31;
            var25['height'] = var31;
            var31 = var13 * var29;
            var31 = var16 - var31;
            var31 = var31 / var16;
            var31 = var10 * var31;
            var25['rx'] = var31;
            var29 = var13 * var29;
            var29 = var16 - var29;
            var29 = var29 / var16;
            var29 = var10 * var29;
            var25['ry'] = var29;
            var29 = 'white';
            var25['fill'] = var29;
            var25 = var28.bind(var4)(var27, var25);
            _fun0001_ip = 1507; continue _fun0001;
 1437:
            var29 = _closure1_slot6;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var17];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Circle;
            var27 = {};
            var31 = var16 / var13;
            var27['cx'] = var31;
            var31 = var16 / var13;
            var27['cy'] = var31;
            var30 = var16 / var30;
            var27['r'] = var30;
            var30 = 'white';
            var27['fill'] = var30;
            var25 = var29.bind(var4)(var28, var27);
 1507:
            var19['children'] = var25;
            var18 = var22.bind(var4)(var21, var19);
 1517:
            var9[1] = var18;
            var5['children'] = var9;
            var8 = var3.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var9 = var6 != var20;
            var8 = null;
            if(!var9) { _fun0001_ip = 1606; continue _fun0001 }
 1548:
            var19 = _closure1_slot6;
            var18 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var17];
            var9 = var18.bind(var4)(var9);
            var18 = var9.Rect;
            var9 = {};
            var9['height'] = var16;
            var9['width'] = var16;
            var9['fill'] = var20;
            var9['mask'] = var12;
            var9['clipPath'] = var11;
            var8 = var19.bind(var4)(var18, var9);
 1606:
            var5[1] = var8;
            var9 = var6 != var24;
            var8 = null;
            if(!var9) { _fun0001_ip = 1818; continue _fun0001 }
 1622:
            var18 = 'number';
            var9 = typeof var24;
            if(!(var18 === var9)) { _fun0001_ip = 1637; continue _fun0001 }
 1633:
            if(!(var6 == var26)) { _fun0001_ip = 1718; continue _fun0001 }
 1637:
            var19 = _closure1_slot6;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = var22[var17];
            var9 = var18.bind(var4)(var9);
            var18 = var9.Image;
            var9 = {};
            var9['height'] = var16;
            var9['width'] = var16;
            var21 = _closure1_slot1;
            var20 = 6;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.bind(var4)(var24);
            var9['href'] = var20;
            var9['mask'] = var12;
            var9['clipPath'] = var11;
            var9 = var19.bind(var4)(var18, var9);
            _fun0001_ip = 1815; continue _fun0001;
 1718:
            var20 = _closure1_slot6;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var17];
            var18 = var19.bind(var4)(var18);
            var19 = var18.ForeignObject;
            var18 = {};
            var18['height'] = var16;
            var18['width'] = var16;
            var18['mask'] = var12;
            var18['clipPath'] = var11;
            var22 = _closure1_slot5;
            var21 = {};
            var25 = {};
            var25['width'] = var16;
            var25['height'] = var16;
            var25['tintColor'] = var26;
            var21['style'] = var25;
            var21['source'] = var24;
            var21['onLoad'] = var23;
            var21 = var20.bind(var4)(var22, var21);
            var18['children'] = var21;
            var9 = var20.bind(var4)(var19, var18);
 1815:
            var8 = var9;
 1818:
            var5[2] = var8;
            var8 = var6 != var14;
            var6 = null;
            if(!var8) { _fun0001_ip = 1917; continue _fun0001 }
 1831:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Rect;
            var7 = {};
            var7['height'] = var16;
            var7['width'] = var16;
            var16 = 'transparent';
            var7['fill'] = var16;
            var7['stroke'] = var15;
            var13 = var13 * var14;
            var7['strokeWidth'] = var13;
            var7['mask'] = var12;
            var7['clipPath'] = var11;
            var7['rx'] = var10;
            var7['ry'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1917:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/CutoutImage.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();