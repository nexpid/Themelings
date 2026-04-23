// app/modules/collectibles/profile_frames/native/ProfileFrame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function ProfileFrameLayer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.skuId;
            var7 = var1.layer;
            var _closure2_slot0 = var7;
            var3 = var1.containerWidth;
            var11 = var1.containerHeight;
            var1 = _closure1_slot9;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 6;
            var1 = var12[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.bind(var5)(var3);
            var4 = var1.scale;
            var16 = var1.layerWidth;
            var _closure2_slot1 = var16;
            var14 = var1.overflowTop;
            var _closure2_slot2 = var14;
            var13 = var1.overflowBottom;
            var _closure2_slot3 = var13;
            var1 = var1.overflowHorizontal;
            var _closure2_slot4 = var1;
            var3 = 7;
            var3 = var12[var3];
            var9 = var9.bind(var5)(var3);
            var3 = {};
            var3['skuId'] = var10;
            var3['layer'] = var7;
            var3['layerWidth'] = var16;
            var3 = var9.bind(var5)(var3);
            var18 = var3.assetUrl;
            var _closure2_slot5 = var18;
            var3 = var3.imageHeight;
            var _closure2_slot6 = var3;
            var12 = _closure1_slot3;
            var10 = var12.useMemo;
            var15 = var7.anchor;
            var9 = new Array(6);
            var9[0] = var15;
            var15 = var7.type;
            var9[1] = var15;
            var15 = var7.order;
            var9[2] = var15;
            var9[3] = var14;
            var9[4] = var13;
            var9[5] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = {};
                    var1 = _closure2_slot4;
                    var3 = -var1;
                    var2['left'] = var3;
                    var1 = -var1;
                    var2['right'] = var1;
                    var5 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var3 = var1.order;
                    var3 = var5[var3];
                    var2['zIndex'] = var3;
                    var3 = var1.type;
                    var1 = 'staple';
                    if(!(var1 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = 'rail';
                    if(!(var1 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = {};
                    var9 = var1;
                    var8 = var2;
                    var3 = copyDataProperties(var9, var8);
                    var3 = _closure2_slot4;
                    var5 = -var3;
                    var3 = 'left';
                    var1[2] = var5;
                    return var1;
case 4:
                    var1 = {};
                    var9 = var1;
                    var8 = var2;
                    var3 = copyDataProperties(var9, var8);
                    var3 = _closure2_slot0;
                    var3 = var3.anchor;
                    var5 = 'center';
                    if(!(var5 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot0;
                    var7 = var3.anchor;
                    var3 = 'flex-end';
                    var6 = 'top';
                    if(!(var6 === var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = 'flex-start';
case 8:
                    var5 = var3;
case 6:
                    var3 = 'justifyContent';
                    var1[2] = var5;
                    return var1;
case 2:
                    var1 = {};
                    var9 = var1;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var2 = _closure2_slot0;
                    var6 = var2.anchor;
                    var5 = 'top';
                    var2 = undefined;
                    if(!(var5 === var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure2_slot2;
                    var2 = -var6;
case 10:
                    var1[4] = var2;
                    var2 = _closure2_slot0;
                    var5 = var2.anchor;
                    var2 = 'bottom';
                    var3 = undefined;
                    if(!(var2 === var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure2_slot3;
                    var3 = -var4;
case 12:
                    var1[1] = var3;
                    return var1;
                }
            };
            var9 = var10.bind(var12)(var1, var9);
            var10 = var7.responsive;
            var1 = true;
            var10 = var1 === var10;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            var12 = var7.type;
            var1 = 'rail';
            var10 = var1 === var12;
case 14:
            if(!var10) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = null;
            var10 = var1 != var11;
case 15:
            if(!var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = _closure1_slot5;
            var1 = var1 * var4;
            var10 = var11 < var1;
case 17:
            var4 = 0;
            if(!(var4 !== var3)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = null;
            if(!(var1 != var18)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            if(var10) { _fun0001_ip = 19; continue _fun0001 }
case 22:
            var10 = var7.type;
            var7 = 'border';
            if(!(var7 !== var10)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = _closure1_slot8;
            var10 = _closure1_slot4;
            var7 = {};
            var14 = var8.layer;
            var13 = new Array(2);
            var13[0] = var14;
            var13[1] = var9;
            var7['style'] = var13;
            var15 = _closure1_slot8;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 8;
            var13 = var17[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var17 = {};
            var17['uri'] = var18;
            var13['source'] = var17;
            var17 = 'cover';
            var13['resizeMode'] = var17;
            var13['width'] = var16;
            var13['height'] = var3;
            var13 = var15.bind(var5)(var14, var13);
            var7['children'] = var13;
            var7 = var12.bind(var5)(var10, var7);
            return var7;
case 23:
            if(!(var1 != var11)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(!(var4 !== var11)) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var7 = global;
            var10 = var7.Math;
            var4 = var10.ceil;
            var3 = var11 / var3;
            var10 = var4.bind(var10)(var3);
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var11 = var8.layer;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var9;
            var2['style'] = var8;
            var9 = var7.Array;
            var8 = var9.from;
            var7 = {};
            var7['length'] = var10;
            var6 = function(arg1, arg2) {
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var6 = {};
                var7 = _closure2_slot5;
                var6['uri'] = var7;
                var2['source'] = var6;
                var6 = 'cover';
                var2['resizeMode'] = var6;
                var6 = _closure2_slot1;
                var2['width'] = var6;
                var1 = _closure2_slot6;
                var2['height'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 25:
            return var1;
case 19:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function AnimatedProfileFrameLayer(arg1) {
        var4 = arg1;
        var11 = var4.animatedPosition;
        var _closure2_slot0 = var11;
        var1 = null;
        var3 = Object.create(var1);
        var1 = 0;
        var3['animatedPosition'] = var1;
        var14 = {};
        var13 = var4;
        var12 = var3;
        var13 = copyDataProperties(var14, var13, var12);
        var1 = _closure1_slot9;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 9;
        var3 = var9[var1];
        var7 = var7.bind(var4)(var3);
        var3 = var7.useAnimatedStyle;
        var2 = function o() {
            var1 = {};
            var3 = _closure2_slot0;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['top'] = var2;
            return var1;
        };
        var10 = {};
        var10['animatedPosition'] = var11;
        var2['__closure'] = var10;
        var10 = 10492926191866.0;
        var2['__workletHash'] = var10;
        var10 = _closure1_slot10;
        var2['__initData'] = var10;
        var7 = var3.bind(var7)(var2);
        var3 = _closure1_slot8;
        var2 = _closure1_slot1;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var9 = var6.container;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot11;
        var5 = {};
        var14 = var5;
        var8 = copyDataProperties(var14, var13);
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var10 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_FRAME_RESPONSIVE_RAIL_MIN_PROFILE_HEIGHT;
    var _closure1_slot5 = var7;
    var4 = var4.PROFILE_FRAME_Z_INDEX;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var11 = copyDataProperties(var15, var14);
    var12 = 'none';
    var11 = 'pointerEvents';
    var9[10] = var12;
    var4['container'] = var9;
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var11 = 'center';
    var10 = 'alignItems';
    var9[9] = var11;
    var11 = 'hidden';
    var10 = 'overflow';
    var9[9] = var11;
    var4['layer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function ProfileFrameTsx1(){const{animatedPosition}=this.__closure;const sheetTop=animatedPosition.get();return{top:sheetTop};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/ProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProfileFrame(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.frame;
            var _closure2_slot0 = var3;
            var4 = var2.containerWidth;
            var _closure2_slot1 = var4;
            var1 = var2.containerHeight;
            var _closure2_slot2 = var1;
            var1 = var2.profileThemeType;
            var _closure2_slot3 = var1;
            var10 = var2.frameOrder;
            var _closure2_slot4 = var10;
            var2 = var2.animatedPosition;
            var _closure2_slot5 = var2;
            var7 = _closure1_slot9;
            var5 = undefined;
            var7 = var7.bind(var5)();
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var11 = var3.layers;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var1;
            var1 = function() {
                var1 = _closure2_slot0;
                var3 = var1.layers;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.anchor;
                        var6 = var1.order;
                        var5 = var1.type;
                        var3 = _closure2_slot4;
                        var1 = null;
                        var1 = var1 == var3;
                        if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var3 = _closure2_slot4;
                        var1 = var3 === var6;
case 28:
                        if(!var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                        var3 = _closure2_slot3;
                        var2 = _closure1_slot7;
                        var2 = var2.PREVIEW;
                        var2 = var3 === var2;
                        if(var2) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var3 = 'top';
                        var3 = var3 === var4;
                        if(!var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var4 = 'staple';
                        var3 = var4 === var5;
case 34:
                        var2 = var3;
case 32:
                        var1 = var2;
case 30:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var1, var3);
            var10 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var10)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var1 = null;
            if(!(var3 !== var4)) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var7 = _closure1_slot8;
                    var6 = _closure1_slot11;
                    var5 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.skuId;
                    var5['skuId'] = var1;
                    var5['layer'] = var2;
                    var1 = _closure2_slot1;
                    var5['containerWidth'] = var1;
                    var1 = _closure2_slot2;
                    var5['containerHeight'] = var1;
                    var4 = var2.id;
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6, var5, var4);
                    _fun0005_ip = 41; continue _fun0005;
case 39:
                    var6 = _closure1_slot8;
                    var5 = _closure1_slot12;
                    var4 = {};
                    var7 = _closure2_slot5;
                    var4['animatedPosition'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.skuId;
                    var4['skuId'] = var7;
                    var4['layer'] = var2;
                    var7 = _closure2_slot1;
                    var4['containerWidth'] = var7;
                    var3 = _closure2_slot2;
                    var4['containerHeight'] = var3;
                    var3 = var2.id;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
case 41:
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();