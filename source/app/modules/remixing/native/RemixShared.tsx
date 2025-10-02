// app/modules/remixing/native/RemixShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var12;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var9 = 0;
    var5 = var12[var9];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var12[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var12[var4];
    var5 = var11.bind(var1)(var4);
    var4 = var5.rect;
    var19 = var5;
    var18 = 0;
    var17 = 0;
    var16 = 0;
    var15 = 0;
    var8 = var19[var4](var18, var17, var16, var15, var14);
    var _closure1_slot4 = var8;
    var7 = function calculateContainRectFromAspectRatio(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = arg2;
            var1 = 0;
            if(!(var1 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot4;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var3.width;
            var2 = var3.height;
            var2 = var4 / var2;
            if(!(!(var9 > var2))) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 2;
            var4 = var2[var5];
            var2 = undefined;
            var8 = var6.bind(var2)(var4);
            var7 = var8.rect;
            var4 = var3.x;
            var6 = var3.width;
            var2 = var3.height;
            var2 = var2 * var9;
            var2 = var6 - var2;
            var2 = var2 / var5;
            var15 = var4 + var2;
            var14 = var3.y;
            var2 = var3.height;
            var13 = var2 * var9;
            var12 = var3.height;
            var16 = var8;
            var2 = var16[var7](var15, var14, var13, var12, var11);
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var10 = 2;
            var5 = var4[var10];
            var4 = undefined;
            var8 = var6.bind(var4)(var5);
            var7 = var8.rect;
            var15 = var3.x;
            var5 = var3.y;
            var11 = var3.height;
            var4 = var3.width;
            var4 = var4 / var9;
            var4 = var11 - var4;
            var4 = var4 / var10;
            var14 = var5 + var4;
            var13 = var3.width;
            var3 = var3.width;
            var12 = var3 / var9;
            var16 = var8;
            var2 = var16[var7](var15, var14, var13, var12, var11);
case 7:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var7;
    var4 = {};
    var5 = 'function RemixSharedTsx1(rect){const{UNKNOWN_RECT}=this.__closure;return rect==null?UNKNOWN_RECT:{x:rect.x+rect.width/2,y:rect.y+rect.height/2};}';
    var4['code'] = var5;
    var6 = function t(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = {};
            var5 = var2.x;
            var3 = var2.width;
            var4 = 2;
            var3 = var3 / var4;
            var3 = var5 + var3;
            var1['x'] = var3;
            var3 = var2.y;
            var2 = var2.height;
            var2 = var2 / var4;
            var2 = var3 + var2;
            var1['y'] = var2;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var1 = _closure1_slot4;
case 10:
            return var1;
        }
    };
    var5 = {};
    var5['UNKNOWN_RECT'] = var8;
    var6['__closure'] = var5;
    var5 = 5738558820334.0;
    var6['__workletHash'] = var5;
    var6['__initData'] = var4;
    var _closure1_slot6 = var6;
    var4 = {};
    var5 = 'function RemixSharedTsx2(rect){const{TOUCHABLE_MINIMAL_RECT_SIZE,centerOfRect}=this.__closure;if(rect.width<TOUCHABLE_MINIMAL_RECT_SIZE||rect.height<TOUCHABLE_MINIMAL_RECT_SIZE){const center=centerOfRect(rect);const newWidth=Math.max(TOUCHABLE_MINIMAL_RECT_SIZE,rect.width);const newHeight=Math.max(TOUCHABLE_MINIMAL_RECT_SIZE,rect.height);return{x:center.x-newWidth/2,y:center.y-newHeight/2,width:newWidth,height:newHeight};}return rect;}';
    var4['code'] = var5;
    var5 = function i(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.width;
            var6 = 55;
            if(!(!(var2 < var6))) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var2 = var1.height;
            if(!(!(var2 < var6))) { _fun0003_ip = 11; continue _fun0003 }
case 2:
            return var1;
case 11:
            var3 = _closure1_slot6;
            var2 = undefined;
            var5 = var3.bind(var2)(var1);
            var2 = global;
            var7 = var2.Math;
            var4 = var7.max;
            var3 = var1.width;
            var3 = var4.bind(var7)(var6, var3);
            var4 = var2.Math;
            var2 = var4.max;
            var1 = var1.height;
            var2 = var2.bind(var4)(var6, var1);
            var1 = {};
            var7 = var5.x;
            var4 = 2;
            var6 = var3 / var4;
            var6 = var7 - var6;
            var1['x'] = var6;
            var5 = var5.y;
            var4 = var2 / var4;
            var4 = var5 - var4;
            var1['y'] = var4;
            var1['width'] = var3;
            var1['height'] = var2;
            return var1;
        }
    };
    var10 = {};
    var13 = 55;
    var10['TOUCHABLE_MINIMAL_RECT_SIZE'] = var13;
    var10['centerOfRect'] = var6;
    var5['__closure'] = var10;
    var10 = 10860849877792.0;
    var5['__workletHash'] = var10;
    var5['__initData'] = var4;
    var10 = {};
    var4 = 'function RemixSharedTsx3(color){const{RemixShader,RAINBOW_COLOR_PLACEHOLDER}=this.__closure;return color===RemixShader.RAINBOW?RAINBOW_COLOR_PLACEHOLDER:color;}';
    var10['code'] = var4;
    var4 = function h(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.RemixShader;
            var2 = var2.RAINBOW;
            if(!(var1 === var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var1 = 'yellow';
case 13:
            return var1;
        }
    };
    var13 = {};
    var14 = 4;
    var14 = var12[var14];
    var14 = var11.bind(var1)(var14);
    var14 = var14.RemixShader;
    var13['RemixShader'] = var14;
    var14 = 'yellow';
    var13['RAINBOW_COLOR_PLACEHOLDER'] = var14;
    var4['__closure'] = var13;
    var13 = 13046869732392.0;
    var4['__workletHash'] = var13;
    var4['__initData'] = var10;
    var10 = 5;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/remixing/native/RemixShared.tsx';
    var10 = var11.bind(var12)(var10);
    var3['UNKNOWN'] = var9;
    var3['UNKNOWN_RECT'] = var8;
    var8 = 'rgba(0,0,0,0.7)';
    var3['MASK_COLOR'] = var8;
    var8 = 'rgba(0,0,0,0.6)';
    var3['TEXT_MASK_COLOR'] = var8;
    var8 = 'transparent';
    var3['REMIX_EDITOR_BACKGROUND_COLOR'] = var8;
    var8 = 'black';
    var3['REMIX_BACKDROP_EDITOR_BACKGROUND_COLOR'] = var8;
    var8 = 70;
    var3['TRASH_TAP_TARGET_SIZE'] = var8;
    var8 = 80;
    var3['TRASH_CAN_ICON_CONTAINER_SIZE'] = var8;
    var8 = 1.2;
    var3['TRASH_CAN_ICON_ACTIVE_SCALE'] = var8;
    var8 = 300;
    var3['COLOR_CAROUSEL_WIDTH'] = var8;
    var8 = 18;
    var3['MIN_MENTION_FONT_SIZE'] = var8;
    var8 = 16;
    var3['MAX_DEFAULT_FONT_SIZE_TEXT_LENGTH'] = var8;
    var8 = 30;
    var3['DEFAULT_FONT_SIZE'] = var8;
    var8 = function() {
        var5 = _closure1_slot3;
        var6 = var5.useState;
        var1 = 0;
        var4 = {'width': 0, 'height': 0};
        var7 = var6.bind(var5)(var4);
        var6 = _closure1_slot2;
        var4 = undefined;
        var3 = 2;
        var4 = var6.bind(var4)(var7, var3);
        var3 = var4[var1];
        var1 = 1;
        var6 = var4[var1];
        var _closure2_slot0 = var6;
        var1 = new Array(2);
        var1[0] = var3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var4 = var1.width;
            var1 = var1.height;
            var3 = _closure2_slot0;
            var2 = {};
            var2['width'] = var4;
            var2['height'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1[1] = var2;
        return var1;
    };
    var3['useSizeState'] = var8;
    var8 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.width;
            var3 = 0;
            var1 = var3 !== var1;
            if(!var1) { _fun0005_ip = 11; continue _fun0005 }
case 15:
            var2 = var2.height;
            var1 = var3 !== var2;
case 11:
            return var1;
        }
    };
    var3['isSizeReady'] = var8;
    var8 = function(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 16; continue _fun0006 }
case 3:
            var1 = var4.height;
            var3 = 0;
            if(!(var3 !== var1)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var1 = var5.width;
            var2 = var1.bind(var5)();
            var1 = var5.height;
            var1 = var1.bind(var5)();
            if(!(var1 > var3)) { _fun0006_ip = 16; continue _fun0006 }
case 18:
            if(!(!(var2 > var3))) { _fun0006_ip = 19; continue _fun0006 }
case 16:
            var3 = _closure1_slot4;
            return var3;
case 19:
            var3 = _closure1_slot5;
            var2 = var2 / var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['calculateContainMediaRect'] = var8;
    var3['calculateContainRectFromAspectRatio'] = var7;
    var7 = function(arg1, arg2) {
        var1 = arg1;
        var3 = arg2;
        var2 = 2;
        var2 = var3 / var2;
        var3 = var1.x;
        var35 = var3 - var2;
        var3 = var1.y;
        var33 = var3 - var2;
        var4 = var1.x;
        var3 = var1.width;
        var3 = var4 + var3;
        var31 = var3 + var2;
        var3 = var1.y;
        var29 = var3 - var2;
        var4 = var1.x;
        var3 = var1.width;
        var3 = var4 + var3;
        var27 = var3 + var2;
        var4 = var1.y;
        var3 = var1.height;
        var3 = var4 + var3;
        var25 = var3 + var2;
        var3 = var1.x;
        var23 = var3 - var2;
        var4 = var1.y;
        var3 = var1.height;
        var3 = var4 + var3;
        var21 = var3 + var2;
        var3 = var1.x;
        var19 = var3 - var2;
        var1 = var1.y;
        var17 = var1 - var2;
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var36 = 'M ';
        var3 = ' ';
        var2 = ' L ';
        var16 = ' Z';
        var34 = var3;
        var32 = var2;
        var30 = var3;
        var28 = var2;
        var26 = var3;
        var24 = var2;
        var22 = var3;
        var20 = var2;
        var18 = var3;
        var1 = var36[var5](var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
        return var1;
    };
    var3['createRectPathString'] = var7;
    var7 = function(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg2;
            var1 = {};
            var3 = 'absolute';
            var1['position'] = var3;
            var3 = 'rgba(120, 0, 0, 0.8)';
            var4 = arg3;
            if(var4) { _fun0007_ip = 20; continue _fun0007 }
case 21:
            var3 = 'transparent';
case 20:
            var1['backgroundColor'] = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.isAndroid;
            var5 = var3.bind(var4)();
            var3 = 0;
            var4 = 0;
            if(!var5) { _fun0007_ip = 22; continue _fun0007 }
case 23:
            var5 = arg1;
            var4 = var5.top;
case 22:
            var1['top'] = var4;
            var1['left'] = var3;
            var3 = var2.width;
            var1['width'] = var3;
            var2 = var2.height;
            var1['height'] = var2;
            return var1;
        }
    };
    var3['getRootViewStyles'] = var7;
    var3['centerOfRect'] = var6;
    var6 = function(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg2;
            var6 = null;
            var2 = arg1;
            if(!(var6 != var2)) { _fun0008_ip = 24; continue _fun0008 }
case 12:
            if(!(var6 == var1)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var1 = {'scaleX': 0, 'rotate': 0};
case 25:
            var2 = var1.scaleX;
            var4 = var1.rotate;
            var1 = new Array(0);
            var5 = 0;
            if(!(var5 !== var2)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
            var3 = var1.push;
            var2 = {};
            var7 = -1;
            var2['scaleX'] = var7;
            var2 = var3.bind(var1)(var2);
case 27:
            if(!(var5 !== var4)) { _fun0008_ip = 29; continue _fun0008 }
case 22:
            var3 = var1.push;
            var2 = {};
            var6 = var6 != var4;
            var5 = 0;
            if(!var6) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            var5 = var4;
case 30:
            var4 = global;
            var4 = var4.Math;
            var6 = var4.PI;
            var4 = 180;
            var4 = var6 / var4;
            var4 = var5 * var4;
            var2['rotate'] = var4;
            var2 = var3.bind(var1)(var2);
case 29:
            return var1;
case 24:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['calculateBackdropTransform'] = var6;
    var6 = function(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.x;
            var1 = var2.x;
            var1 = var4 === var1;
            if(!var1) { _fun0009_ip = 32; continue _fun0009 }
case 17:
            var5 = var3.y;
            var4 = var2.y;
            var1 = var5 === var4;
case 32:
            if(!var1) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            var5 = var3.width;
            var4 = var2.width;
            var1 = var5 === var4;
case 33:
            if(!var1) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var3 = var3.height;
            var2 = var2.height;
            var1 = var3 === var2;
case 35:
            return var1;
        }
    };
    var3['areRectEqual'] = var6;
    var6 = function(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var4 = global;
            var5 = var4.Math;
            var3 = var5.abs;
            var7 = var6.x;
            var1 = var2.x;
            var1 = var7 - var1;
            var1 = var3.bind(var5)(var1);
            var3 = 0.01;
            var1 = var1 < var3;
            if(!var1) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var5 = var4.Math;
            var4 = var5.abs;
            var6 = var6.y;
            var2 = var2.y;
            var2 = var6 - var2;
            var2 = var4.bind(var5)(var2);
            var1 = var2 < var3;
case 37:
            return var1;
        }
    };
    var3['arePointsEqual'] = var6;
    var6 = function(arg1) {
        var1 = arg1;
        var2 = _closure1_slot6;
        var5 = undefined;
        var2 = var2.bind(var5)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var7 = 2;
        var3 = var3[var7];
        var6 = var4.bind(var5)(var3);
        var5 = var6.rect;
        var4 = var2.x;
        var3 = var1.height;
        var3 = var3 / var7;
        var11 = var4 - var3;
        var3 = var2.y;
        var2 = var1.width;
        var2 = var2 / var7;
        var10 = var3 - var2;
        var9 = var1.height;
        var8 = var1.width;
        var12 = var6;
        var1 = var12[var5](var11, var10, var9, var8, var7);
        return var1;
    };
    var3['rotateRectClockwise'] = var6;
    var6 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            var1 = undefined;
            if(var2) { _fun0011_ip = 28; continue _fun0011 }
case 39:
            var2 = {};
            var4 = var3.x;
            var2['x'] = var4;
            var4 = var3.y;
            var2['y'] = var4;
            var4 = var3.width;
            var2['width'] = var4;
            var3 = var3.height;
            var2['height'] = var3;
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['unboxRect'] = var6;
    var6 = function(arg1, arg2) {
        var2 = arg1;
        var3 = arg2;
        var1 = {};
        var4 = var2.x;
        var4 = var4 * var3;
        var1['x'] = var4;
        var2 = var2.y;
        var2 = var2 * var3;
        var1['y'] = var2;
        return var1;
    };
    var3['scalePoint'] = var6;
    var6 = function(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var9 = arg1;
            var4 = arg2;
            var8 = arg3;
            var3 = var4.replace;
            var2 = /^\n+|\n+$/g;
            var1 = '';
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.split;
            var1 = /\n/;
            var7 = var2.bind(var3)(var1);
            var1 = new Array(0);
            var2 = var7.length;
            var6 = 0;
            var2 = var6 < var2;
            var4 = 1;
            var3 = 0;
            var5 = undefined;
            if(!var2) { _fun0012_ip = 40; continue _fun0012 }
case 41:
            var11 = var7[var3];
            var10 = var11.split;
            var2 = /(\s+)/;
            var13 = var10.bind(var11)(var2);
            var12 = var13[var6];
            var2 = var13.length;
            var2 = var4 < var2;
            var10 = var4;
            var11 = var12;
            if(!var2) { _fun0012_ip = 42; continue _fun0012 }
case 43:
            var14 = var13[var10];
            var15 = var9.getTextWidth;
            var2 = var12 + var14;
            var2 = var15.bind(var9)(var2);
            if(!(!(var2 <= var8))) { _fun0012_ip = 44; continue _fun0012 }
case 45:
            var15 = var1.push;
            var2 = var12.trim;
            var2 = var2.bind(var12)();
            var2 = var15.bind(var1)(var2);
            var15 = var14;
            _fun0012_ip = 46; continue _fun0012;
case 44:
            var15 = var12 + var14;
case 46:
            var10 = var10 + 1;
            var2 = var13.length;
            var12 = var15;
            var11 = var12;
            var5 = var14;
            if(var10 < var2) { _fun0012_ip = 43; continue _fun0012 }
case 42:
            var10 = var1.push;
            var2 = var11.trim;
            var2 = var2.bind(var11)();
            var2 = var10.bind(var1)(var2);
            var3 = var3 + 1;
            var2 = var7.length;
            if(var3 < var2) { _fun0012_ip = 41; continue _fun0012 }
case 40:
            return var1;
        }
    };
    var3['wrapText'] = var6;
    var6 = function(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg2;
            var1 = arguments[3];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = arg3;
            var _closure2_slot1 = var3;
            var3 = undefined;
            if(!(var1 === var3)) { _fun0013_ip = 47; continue _fun0013 }
case 48:
            var1 = 32;
case 47:
            var _closure2_slot2 = var1;
            var1 = new Array(0);
            var _closure2_slot3 = var1;
            var4 = '';
            var _closure2_slot4 = var4;
            var5 = var6.split;
            var3 = ' ';
            var6 = var5.bind(var6)(var3);
            var5 = var6.forEach;
            var3 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = arg1;
                    var4 = _closure2_slot0;
                    var3 = var4.getTextWidth;
                    var1 = _closure2_slot4;
                    var1 = var1 + var6;
                    var3 = var3.bind(var4)(var1);
                    var4 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var4 - var1;
                    if(!(!(var3 < var1))) { _fun0014_ip = 49; continue _fun0014 }
case 18:
                    var4 = _closure2_slot3;
                    var3 = var4.push;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var1 = ' ';
                    var1 = var4.bind(var3)(var6, var1);
                    _closure2_slot4 = var1;
                    _fun0014_ip = 50; continue _fun0014;
case 49:
                    var3 = _closure2_slot4;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = '';
                    var1 = ' ';
                    var1 = var5.bind(var4)(var6, var1);
                    var1 = var3 + var1;
                    _closure2_slot4 = var1;
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var3 = _closure2_slot4;
            if(!(var4 !== var3)) { _fun0013_ip = 51; continue _fun0013 }
case 52:
            var3 = var1.push;
            var2 = _closure2_slot4;
            var2 = var3.bind(var1)(var2);
case 51:
            return var1;
        }
    };
    var3['wrapSimpleText'] = var6;
    var6 = function(arg1, arg2, arg3) {
        var3 = arg1;
        var2 = var3.getTextWidth;
        var1 = arg2;
        var2 = var2.bind(var3)(var1);
        var1 = arg3;
        var2 = var1 - var2;
        var1 = 2;
        var1 = var2 / var1;
        return var1;
    };
    var3['getCenteringXPos'] = var6;
    var6 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var2 = var3.find;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.hasOwnProperty;
                var1 = 'scale';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = 1;
            if(var3) { _fun0015_ip = 53; continue _fun0015 }
case 25:
            var1 = var2.scale;
case 53:
            return var1;
        }
    };
    var3['getScaleFromTransforms2d'] = var6;
    var6 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var2 = var3.find;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.hasOwnProperty;
                var1 = 'rotate';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = 0;
            if(var3) { _fun0016_ip = 54; continue _fun0016 }
case 55:
            var1 = var2.rotate;
case 54:
            return var1;
        }
    };
    var3['getRotateFromTransforms2d'] = var6;
    var3['getTouchableMinimalRect'] = var5;
    var3['getColorValue'] = var4;
    var4 = function(arg1, arg2) {
        var3 = arg1;
        var2 = var3.getGlyphIDs;
        var1 = arg2;
        var2 = var2.bind(var3)(var1);
        var1 = var3.getGlyphWidths;
        var4 = var1.bind(var3)(var2);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            var2 = arg1;
            var1 = arg2;
            var1 = var2 + var1;
            return var1;
        };
        var1 = 0;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getTextLineWidth'] = var4;
    var4 = function(arg1, arg2) {
        var3 = arg1;
        var4 = arg2;
        var2 = var3.getGlyphIDs;
        var2 = var2.bind(var3)(var4);
        var _closure2_slot0 = var2;
        var3 = new Array(0);
        var5 = 0;
        var7 = var3;
        var6 = var4;
        var2 = arraySpread(var7, var6, var5);
        var2 = var3.filter;
        var1 = function(arg1, arg2) {
            var2 = _closure2_slot0;
            var1 = arg2;
            var2 = var2[var1];
            var1 = 0;
            var1 = var1 !== var2;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = '';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['removeUnsupportedGlyphsFromString'] = var4;
    var4 = function(arg1, arg2, arg3, arg4) {
        var2 = arg2;
        var1 = {};
        var4 = var2.x;
        var5 = arg3;
        var3 = arg1;
        var5 = var5 - var3;
        var3 = 0.5;
        var3 = var3 * var5;
        var3 = var4 + var3;
        var1['x'] = var3;
        var3 = var2.y;
        var2 = arg4;
        var2 = var3 + var2;
        var1['y'] = var2;
        return var1;
    };
    var3['centerAlignText'] = var4;
    var2 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var1 = var2.length;
            var6 = 16;
            var4 = var1 > var6;
            var3 = 30;
            var1 = var3;
            if(!var4) { _fun0017_ip = 56; continue _fun0017 }
case 2:
            var4 = global;
            var5 = var4.Math;
            var4 = var5.max;
            var2 = var2.length;
            var6 = var2 - var6;
            var2 = 2;
            var2 = var2 * var6;
            var3 = var3 - var2;
            var2 = 18;
            var1 = var4.bind(var5)(var3, var2);
case 56:
            return var1;
        }
    };
    var3['getFontSizeApproximation'] = var2;
    return var1;
})();