// app/uikit-native/CutoutableAvatarImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var11;
    var1 = function NativeCutoutAvatarImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.animate;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = false;
case 2:
            var _closure2_slot0 = var12;
            var7 = var2.cutout;
            var _closure2_slot1 = var7;
            var9 = var2.source;
            var6 = var2.style;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useAnimatedProps;
            var1 = function h() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var8 = 'animate-never';
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var8 = undefined;
case 4:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var3 = var2.shape;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 8;
                    var2 = var2[var6];
                    var9 = undefined;
                    var2 = var7.bind(var9)(var2);
                    var2 = var2.CutoutShape;
                    var2 = var2.RoundedRect;
                    if(!(var3 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = var11[var6];
                    var2 = var10.bind(var9)(var2);
                    var2 = var2.CutoutShape;
                    var2 = var2.Circle;
                    var3['shape'] = var2;
                    var7 = 9;
                    var2 = var11[var7];
                    var15 = var10.bind(var9)(var2);
                    var14 = var15.withSpring;
                    var2 = _closure2_slot1;
                    var13 = var2.x;
                    var12 = _closure1_slot5;
                    var12 = var14.bind(var15)(var13, var12, var8);
                    var3['x'] = var12;
                    var12 = var11[var7];
                    var15 = var10.bind(var9)(var12);
                    var14 = var15.withSpring;
                    var13 = var2.y;
                    var12 = _closure1_slot5;
                    var12 = var14.bind(var15)(var13, var12, var8);
                    var3['y'] = var12;
                    var7 = var11[var7];
                    var11 = var10.bind(var9)(var7);
                    var10 = var11.withSpring;
                    var7 = var2.size;
                    var2 = _closure1_slot5;
                    var2 = var10.bind(var11)(var7, var2, var8);
                    var3['size'] = var2;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = var10[var6];
                    var6 = var7.bind(var9)(var6);
                    var6 = var6.CutoutShape;
                    var6 = var6.RoundedRect;
                    var2['shape'] = var6;
                    var6 = 9;
                    var11 = var10[var6];
                    var14 = var7.bind(var9)(var11);
                    var13 = var14.withSpring;
                    var5 = _closure2_slot1;
                    var12 = var5.x;
                    var11 = _closure1_slot5;
                    var11 = var13.bind(var14)(var12, var11, var8);
                    var2['x'] = var11;
                    var11 = var10[var6];
                    var14 = var7.bind(var9)(var11);
                    var13 = var14.withSpring;
                    var12 = var5.y;
                    var11 = _closure1_slot5;
                    var11 = var13.bind(var14)(var12, var11, var8);
                    var2['y'] = var11;
                    var11 = var10[var6];
                    var14 = var7.bind(var9)(var11);
                    var13 = var14.withSpring;
                    var12 = var5.width;
                    var11 = _closure1_slot5;
                    var11 = var13.bind(var14)(var12, var11, var8);
                    var2['width'] = var11;
                    var11 = var10[var6];
                    var14 = var7.bind(var9)(var11);
                    var13 = var14.withSpring;
                    var12 = var5.height;
                    var11 = _closure1_slot5;
                    var11 = var13.bind(var14)(var12, var11, var8);
                    var2['height'] = var11;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.withSpring;
                    var5 = var5.cornerRadius;
                    var4 = _closure1_slot5;
                    var4 = var6.bind(var7)(var5, var4, var8);
                    var2['cornerRadius'] = var4;
                    var3 = var2;
case 8:
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['cutouts'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['animate'] = var12;
            var5['cutout'] = var7;
            var7 = 8;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.CutoutShape;
            var5['CutoutShape'] = var7;
            var7 = 9;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.withSpring;
            var5['withSpring'] = var7;
            var7 = _closure1_slot5;
            var5['CHANNEL_SPRING_CONFIG'] = var7;
            var1['__closure'] = var5;
            var5 = 11368409055559.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot14;
            var1['__initData'] = var5;
            var5 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot13;
            var1 = {};
            var1['style'] = var6;
            var1['animatedProps'] = var5;
            var7 = _closure1_slot6;
            var10 = _closure1_slot1;
            var5 = 10;
            var5 = var11[var5];
            var6 = var10.bind(var4)(var5);
            var5 = {};
            var8 = _closure1_slot10;
            var8 = var8.image;
            var5['style'] = var8;
            var8 = 11;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.bind(var4)(var9);
            var5['source'] = var8;
            var8 = true;
            var5['usesSmallCache'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function CutoutAvatarImage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var14 = var1.cutout;
            var17 = var1.size;
            var16 = var1.source;
            var5 = var1.style;
            var1 = 2;
            var15 = var17 / var1;
            var1 = var14.radius;
            var9 = null;
            var27 = var15;
            if(!(var9 != var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var27 = var1;
case 9:
            var1 = var14.inset;
            var2 = var9 != var1;
            var3 = 0;
            if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var1;
case 11:
            var12 = var14.imageType;
            if(!(var9 == var12)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = _closure1_slot12;
            var12 = var1.CIRCULAR;
case 13:
            var29 = var17 - var3;
            var1 = _closure1_slot12;
            var1 = var1.CIRCULAR;
            var28 = var17;
            if(!(var12 === var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var28 = var15;
case 15:
            var2 = var14.direction;
            var1 = _closure1_slot11;
            var1 = var1.BOTTOM_RIGHT;
            if(!(var1 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = _closure1_slot11;
            var1 = var1.BOTTOM_LEFT;
            if(!(var1 === var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var29 = var27 + var3;
            var1 = var17 - var27;
            var28 = var1 - var3;
            _fun0003_ip = 19; continue _fun0003;
case 17:
            var1 = var17 - var27;
            var29 = var1 - var3;
            var1 = var17 - var27;
            var28 = var1 - var3;
case 19:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.v4;
            var18 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = var2.flatten;
            var1 = var1.bind(var2)(var5);
            var21 = var1.tintColor;
            if(!(var9 != var16)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            if(!(var9 == var21)) { _fun0003_ip = 23; continue _fun0003 }
case 21:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Image;
            var1 = {'x': '0', 'y': '0', 'height': '100%', 'width': '100%'};
            var7 = _closure1_slot1;
            var6 = 11;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.bind(var4)(var16);
            var1['href'] = var6;
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = 'url(#';
            var6 = ')';
            var6 = var8.bind(var7)(var18, var6);
            var1['mask'] = var6;
            var10 = var3.bind(var4)(var2, var1);
            _fun0003_ip = 24; continue _fun0003;
case 23:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 13;
            var1 = var20[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ForeignObject;
            var1 = {'x': '0', 'y': '0', 'height': '100%', 'width': '100%'};
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = 'url(#';
            var6 = ')';
            var6 = var8.bind(var7)(var18, var6);
            var1['mask'] = var6;
            var8 = _closure1_slot6;
            var19 = _closure1_slot1;
            var6 = 10;
            var6 = var20[var6];
            var7 = var19.bind(var4)(var6);
            var6 = {};
            var13 = {};
            var13['tintColor'] = var21;
            var6['style'] = var13;
            var13 = 11;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.bind(var4)(var16);
            var6['source'] = var13;
            var13 = true;
            var6['usesSmallCache'] = var13;
            var6 = var8.bind(var4)(var7, var6);
            var1['children'] = var6;
            var10 = var3.bind(var4)(var2, var1);
case 24:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 13;
            var5 = var20[var16];
            var6 = var6.bind(var4)(var5);
            var5 = {'height': '100%', 'width': '100%'};
            var19 = _closure1_slot6;
            var21 = _closure1_slot0;
            var8 = var20[var16];
            var8 = var21.bind(var4)(var8);
            var13 = var8.Defs;
            var8 = {};
            var22 = _closure1_slot7;
            var20 = var20[var16];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Mask;
            var20 = {};
            var20['width'] = var17;
            var20['height'] = var17;
            var20['id'] = var18;
            var23 = _closure1_slot12;
            var23 = var23.CIRCULAR;
            if(!(var12 !== var23)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var25 = _closure1_slot6;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var16];
            var23 = var24.bind(var4)(var23);
            var24 = var23.Rect;
            var23 = {'x': 0, 'y': 0, 'height': null, 'width': null, 'fill': 'white'};
            var23['height'] = var17;
            var23['width'] = var17;
            var24 = var25.bind(var4)(var24, var23);
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var26 = _closure1_slot6;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var16];
            var23 = var25.bind(var4)(var23);
            var25 = var23.Circle;
            var23 = {};
            var23['cx'] = var15;
            var23['cy'] = var15;
            var23['r'] = var15;
            var30 = 'white';
            var23['fill'] = var30;
            var24 = var26.bind(var4)(var25, var23);
case 27:
            var23 = new Array(2);
            var23[0] = var24;
            var26 = _closure1_slot6;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var16];
            var24 = var25.bind(var4)(var24);
            var25 = var24.Circle;
            var24 = {};
            var24['cx'] = var29;
            var24['cy'] = var28;
            var24['r'] = var27;
            var27 = 'black';
            var24['fill'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var23[1] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var8['children'] = var20;
            var13 = var19.bind(var4)(var13, var8);
            var8 = new Array(3);
            var8[0] = var13;
            var8[1] = var10;
            var10 = var14.border;
            var10 = var9 != var10;
            var9 = null;
            if(!var10) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var10 = _closure1_slot12;
            var10 = var10.CIRCULAR;
            if(!(var12 !== var10)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var13 = _closure1_slot6;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var16];
            var10 = var12.bind(var4)(var10);
            var12 = var10.Rect;
            var10 = {'x': 0, 'y': 0, 'height': null, 'width': null, 'fill': 'none'};
            var10['height'] = var17;
            var10['width'] = var17;
            var17 = global;
            var17 = var17.HermesInternal;
            var20 = var17.concat;
            var19 = 'url(#';
            var17 = ')';
            var17 = var20.bind(var19)(var18, var17);
            var10['mask'] = var17;
            var17 = var14.border;
            var17 = var17.color;
            var10['stroke'] = var17;
            var17 = var14.border;
            var17 = var17.width;
            var10['strokeWidth'] = var17;
            var10 = var13.bind(var4)(var12, var10);
            _fun0003_ip = 32; continue _fun0003;
case 30:
            var13 = _closure1_slot6;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var16];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Circle;
            var11 = {};
            var11['cx'] = var15;
            var11['cy'] = var15;
            var11['r'] = var15;
            var15 = 'none';
            var11['fill'] = var15;
            var15 = global;
            var15 = var15.HermesInternal;
            var17 = var15.concat;
            var16 = 'url(#';
            var15 = ')';
            var15 = var17.bind(var16)(var18, var15);
            var11['mask'] = var15;
            var15 = var14.border;
            var15 = var15.color;
            var11['stroke'] = var15;
            var14 = var14.border;
            var14 = var14.width;
            var11['strokeWidth'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 32:
            var9 = var10;
case 28:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var14 = 0;
    var5 = var11[var14];
    var4 = metroImportAll;
    var1 = undefined;
    var13 = var4.bind(var1)(var5);
    var12 = 1;
    var4 = var11[var12];
    var4 = var10.bind(var1)(var4);
    var5 = var4.StyleSheet;
    var _closure1_slot3 = var5;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var9 = 2;
    var4 = var11[var9];
    var4 = var10.bind(var1)(var4);
    var4 = var4.CHANNEL_SPRING_CONFIG;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot6 = var6;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var11[var4];
    var7 = var15.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var20 = 'UIKit - AvatarImage';
    var21 = var6;
    var4 = new var21[var7](var20, var19);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot8 = var4;
    var7 = {};
    var4 = 'xxsmall';
    var7['XXSMALL'] = var4;
    var4 = 'xsmall';
    var7['XSMALL'] = var4;
    var4 = 'small';
    var7['SMALL'] = var4;
    var4 = 'normal';
    var7['NORMAL'] = var4;
    var4 = 'large';
    var7['LARGE'] = var4;
    var4 = 'xlarge';
    var7['XLARGE'] = var4;
    var4 = 'xxlarge';
    var7['XXLARGE'] = var4;
    var4 = 'profile';
    var7['PROFILE'] = var4;
    var4 = 'refreshMedium32';
    var7['REFRESH_MEDIUM_32'] = var4;
    var4 = 'xsmall10';
    var7['XXSMALL_10'] = var4;
    var4 = 'xsmall20';
    var7['XSMALL_20'] = var4;
    var4 = 'size16';
    var7['SIZE_16'] = var4;
    var4 = 'large48';
    var7['LARGE_48'] = var4;
    var4 = 'editAvatarDecoration';
    var7['EDIT_AVATAR_DECORATION'] = var4;
    var4 = 'giftStart';
    var7['GIFT_START'] = var4;
    var4 = 'giftSuccess';
    var7['GIFT_SUCCESS'] = var4;
    var4 = 'tabs22';
    var7['TABS_22'] = var4;
    var6 = var2.Object;
    var4 = var6.freeze;
    var2 = {};
    var17 = var7.XXSMALL_10;
    var16 = 10;
    var2[var17] = var16;
    var17 = var7.SIZE_16;
    var16 = 16;
    var2[var17] = var16;
    var17 = var7.XXSMALL;
    var16 = 18;
    var2[var17] = var16;
    var17 = var7.XSMALL_20;
    var16 = 20;
    var2[var17] = var16;
    var17 = var7.XSMALL;
    var16 = 24;
    var2[var17] = var16;
    var17 = var7.SMALL;
    var16 = 30;
    var2[var17] = var16;
    var17 = var7.NORMAL;
    var16 = 40;
    var2[var17] = var16;
    var17 = var7.LARGE_48;
    var16 = 48;
    var2[var17] = var16;
    var17 = var7.LARGE;
    var16 = 50;
    var2[var17] = var16;
    var17 = var7.XLARGE;
    var16 = 64;
    var2[var17] = var16;
    var17 = var7.XXLARGE;
    var16 = 80;
    var2[var17] = var16;
    var17 = var7.PROFILE;
    var16 = 128;
    var2[var17] = var16;
    var17 = var7.EDIT_AVATAR_DECORATION;
    var16 = 144;
    var2[var17] = var16;
    var17 = var7.GIFT_START;
    var16 = 184;
    var2[var17] = var16;
    var17 = var7.GIFT_SUCCESS;
    var16 = 236;
    var2[var17] = var16;
    var17 = var7.REFRESH_MEDIUM_32;
    var16 = 32;
    var2[var17] = var16;
    var17 = var7.TABS_22;
    var16 = 22;
    var2[var17] = var16;
    var6 = var4.bind(var6)(var2);
    var _closure1_slot9 = var6;
    var4 = var5.create;
    var2 = {};
    var16 = {'width': '100%', 'height': '100%'};
    var2['image'] = var16;
    var16 = {};
    var17 = var7.XXSMALL;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.XXSMALL;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.XXSMALL;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['xxsmall'] = var16;
    var16 = {};
    var17 = var7.XXSMALL_10;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.XXSMALL_10;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.XXSMALL_10;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['xsmall10'] = var16;
    var16 = {};
    var17 = var7.XSMALL_20;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.XSMALL_20;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.XSMALL_20;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['xsmall20'] = var16;
    var16 = {};
    var17 = var7.XSMALL;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.XSMALL;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.XSMALL;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['xsmall'] = var16;
    var16 = {};
    var17 = var7.SMALL;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.SMALL;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.SMALL;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['small'] = var16;
    var16 = {};
    var17 = var7.NORMAL;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.NORMAL;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.NORMAL;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['normal'] = var16;
    var16 = {};
    var17 = var7.LARGE;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.LARGE;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.LARGE;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['large'] = var16;
    var16 = {};
    var17 = var7.XLARGE;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.XLARGE;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.XLARGE;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['xlarge'] = var16;
    var16 = {};
    var17 = var7.XXLARGE;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.XXLARGE;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.XXLARGE;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['xxlarge'] = var16;
    var16 = {};
    var17 = var7.REFRESH_MEDIUM_32;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.REFRESH_MEDIUM_32;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.REFRESH_MEDIUM_32;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['refreshMedium32'] = var16;
    var16 = {};
    var17 = var7.PROFILE;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.PROFILE;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.PROFILE;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['profile'] = var16;
    var16 = {};
    var17 = var7.SIZE_16;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.SIZE_16;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.SIZE_16;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['size16'] = var16;
    var16 = {};
    var17 = var7.LARGE_48;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.LARGE_48;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.LARGE_48;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['large48'] = var16;
    var16 = {};
    var17 = var7.EDIT_AVATAR_DECORATION;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.EDIT_AVATAR_DECORATION;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.EDIT_AVATAR_DECORATION;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['editAvatarDecoration'] = var16;
    var16 = {};
    var17 = var7.GIFT_START;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.GIFT_START;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.GIFT_START;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['giftStart'] = var16;
    var16 = {};
    var17 = var7.GIFT_SUCCESS;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.GIFT_SUCCESS;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.GIFT_SUCCESS;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['giftSuccess'] = var16;
    var16 = {};
    var17 = var7.TABS_22;
    var17 = var6[var17];
    var16['width'] = var17;
    var17 = var7.TABS_22;
    var17 = var6[var17];
    var16['height'] = var17;
    var17 = var7.TABS_22;
    var17 = var6[var17];
    var17 = var17 / var9;
    var16['borderRadius'] = var17;
    var2['tabs22'] = var16;
    var5 = var4.bind(var5)(var2);
    var _closure1_slot10 = var5;
    var4 = {};
    var4['RIGHT'] = var14;
    var2 = 'RIGHT';
    var4[var14] = var2;
    var4['BOTTOM_RIGHT'] = var12;
    var2 = 'BOTTOM_RIGHT';
    var4[var12] = var2;
    var4['BOTTOM_LEFT'] = var9;
    var2 = 'BOTTOM_LEFT';
    var4[var9] = var2;
    var _closure1_slot11 = var4;
    var2 = {};
    var2['RECTANGULAR'] = var14;
    var9 = 'RECTANGULAR';
    var2[var14] = var9;
    var2['CIRCULAR'] = var12;
    var9 = 'CIRCULAR';
    var2[var12] = var9;
    var _closure1_slot12 = var2;
    var9 = 7;
    var9 = var11[var9];
    var14 = var15.bind(var1)(var9);
    var12 = var14.createAnimatedComponent;
    var9 = 8;
    var9 = var11[var9];
    var9 = var15.bind(var1)(var9);
    var9 = var12.bind(var14)(var9);
    var _closure1_slot13 = var9;
    var9 = {};
    var12 = "function CutoutableAvatarImageTsx1(){const{animate,cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animated=!animate?'animate-never':undefined;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG,animated),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG,animated),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG,animated),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG,animated),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG,animated)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG,animated),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG,animated),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG,animated)};return{cutouts:[animatedCutout]};}";
    var9['code'] = var12;
    var _closure1_slot14 = var9;
    var12 = var13.memo;
    var9 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.animate;
            var10 = var1.cutout;
            var2 = var1.size;
            var3 = var1.style;
            var15 = 'number';
            var4 = typeof var2;
            var4 = var15 === var4;
            var6 = var2;
            if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var5 = _closure1_slot9;
            var6 = var5[var2];
case 33:
            if(var4) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var4 = _closure1_slot10;
            var4 = var4[var2];
            var8 = new Array(2);
            var8[0] = var4;
            var8[1] = var3;
            _fun0004_ip = 37; continue _fun0004;
case 35:
            var4 = {};
            var4['width'] = var2;
            var4['height'] = var2;
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var3;
            var8 = var2;
case 37:
            var4 = {};
            var21 = var4;
            var20 = var1;
            var1 = copyDataProperties(var21, var20);
            var2 = true;
            var3 = var2 === var11;
            if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = null;
            var3 = var1 == var10;
case 38:
            var1 = 'animate';
            var4[var1] = var3;
            var1 = 'size';
            var4[var1] = var6;
            var12 = var4.source;
            var14 = var4.user;
            var17 = var4.channel;
            var13 = var4.guildId;
            var7 = var4.animate;
            var5 = var4.size;
            var1 = null;
            if(!(var1 == var12)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            if(!(var1 == var14)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            if(!(var1 == var17)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var16 = _closure1_slot8;
            var9 = var16.warn;
            var3 = 'No image found from provided data';
            var3 = var9.bind(var16)(var3);
            var9 = undefined;
            _fun0004_ip = 46; continue _fun0004;
case 44:
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 6;
            var16 = var16[var3];
            var3 = undefined;
            var16 = var18.bind(var3)(var16);
            var3 = var16.getChannelIconURL;
            var17 = var3.bind(var16)(var17, var5);
            var16 = typeof var17;
            var3 = var17;
            if(!(var15 !== var16)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var3 = var17;
            if(!(var1 != var3)) { _fun0004_ip = 47; continue _fun0004 }
case 49:
            var16 = {};
            var16['uri'] = var17;
            var3 = var16;
case 47:
            var9 = var3;
            _fun0004_ip = 46; continue _fun0004;
case 42:
            var3 = var14.getAvatarSource;
            var9 = var3.bind(var14)(var13, var7, var5);
            _fun0004_ip = 46; continue _fun0004;
case 40:
            var13 = 'function';
            var5 = typeof var12;
            var3 = var12;
            if(!(var13 === var5)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var5 = undefined;
            var3 = var12.bind(var5)(var7);
case 50:
            var9 = var3;
case 46:
            if(!(var1 != var9)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var3 = var4.user;
            var4 = var4.disablePlaceholder;
            var5 = var1 == var3;
            var7 = undefined;
            var13 = undefined;
            if(var5) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var13 = undefined;
            if(var4) { _fun0004_ip = 54; continue _fun0004 }
case 56:
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 5;
            var4 = var16[var12];
            var5 = var14.bind(var7)(var4);
            var4 = var5.makeSource;
            var12 = var16[var12];
            var16 = var14.bind(var7)(var12);
            var14 = var16.getDefaultAvatarURL;
            var12 = var3.id;
            var3 = var3.discriminator;
            var3 = var14.bind(var16)(var12, var3);
            var13 = var4.bind(var5)(var3);
case 54:
            if(!(var1 == var10)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var5 = _closure1_slot6;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 10;
            var3 = var12[var3];
            var4 = var4.bind(var7)(var3);
            var3 = {};
            var3['style'] = var8;
            var3['source'] = var9;
            var14 = typeof var13;
            var12 = undefined;
            if(!(var15 === var14)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var12 = var13;
case 59:
            var3['placeholder'] = var12;
            var3['usesSmallCache'] = var2;
            var2 = 'image';
            var2 = var5.bind(var7)(var4, var3, var2);
            _fun0004_ip = 61; continue _fun0004;
case 57:
            var3 = var10.nativeCutouts;
            var5 = var1 == var3;
            var4 = undefined;
            if(var5) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var4 = var3.length;
case 62:
            var3 = 1;
            if(!(var3 !== var4)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var5 = _closure1_slot6;
            var4 = _closure1_slot16;
            var3 = {};
            var3['style'] = var8;
            var3['size'] = var6;
            var3['animate'] = var11;
            var3['cutout'] = var10;
            var3['source'] = var9;
            var3 = var5.bind(var7)(var4, var3);
            _fun0004_ip = 66; continue _fun0004;
case 64:
            var6 = _closure1_slot6;
            var5 = _closure1_slot15;
            var4 = {};
            var4['animate'] = var11;
            var11 = var10.nativeCutouts;
            var10 = 0;
            var10 = var11[var10];
            var4['cutout'] = var10;
            var4['source'] = var9;
            var4['style'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 66:
            var2 = var3;
case 61:
            return var2;
case 52:
            return var1;
        }
    };
    var8 = function customShallowEqual(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 14;
            var3 = var3[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = ['source'];
            var3 = var4.bind(var5)(var2, var1, var3);
            if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 9:
            var3 = false;
            return var3;
case 33:
            var4 = var2.source;
            var3 = var1.source;
            if(!(var4 !== var3)) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var1 = typeof var3;
            var8 = 'number';
            if(!(var8 === var1)) { _fun0005_ip = 69; continue _fun0005 }
case 35:
            var2 = typeof var4;
            if(!(var8 !== var2)) { _fun0005_ip = 48; continue _fun0005 }
case 69:
            var8 = typeof var4;
            if(!(var1 === var8)) { _fun0005_ip = 48; continue _fun0005 }
case 70:
            var2 = global;
            var10 = var2.Array;
            var9 = var10.isArray;
            var9 = var9.bind(var10)(var3);
            if(!var9) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var9 = var2.Array;
            var2 = var9.isArray;
            var2 = var2.bind(var9)(var4);
            if(var2) { _fun0005_ip = 73; continue _fun0005 }
case 71:
            var2 = 'object';
            var1 = var2 !== var1;
            if(var1) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var1 = var2 !== var8;
case 74:
            if(var1) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var8.bind(var5)(var2);
            var1 = var2.bind(var5)(var3, var4);
case 76:
            return var1;
case 73:
            var2 = var4.length;
            var1 = var3.length;
            if(!(var2 === var1)) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var1 = var4.length;
            var2 = 0;
            var1 = var2 < var1;
            if(!var1) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var8 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var9 = var8.bind(var5)(var1);
            var8 = var4[var2];
            var1 = var3[var2];
            var1 = var9.bind(var5)(var8, var1);
            if(var1) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var1 = false;
            return var1;
case 82:
            var2 = var2 + 1;
            var1 = var4.length;
            if(var2 < var1) { _fun0005_ip = 81; continue _fun0005 }
case 80:
            var1 = true;
            return var1;
case 78:
            var1 = false;
            return var1;
case 48:
            var1 = false;
            return var1;
case 67:
            var1 = true;
            return var1;
        }
    };
    var8 = var12.bind(var13)(var9, var8);
    var9 = 15;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'uikit-native/CutoutableAvatarImage.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['AvatarSizes'] = var7;
    var3['AVATAR_SIZE_MAP'] = var6;
    var3['styles'] = var5;
    var3['CutoutDirection'] = var4;
    var3['CutoutType'] = var2;
    return var1;
})();