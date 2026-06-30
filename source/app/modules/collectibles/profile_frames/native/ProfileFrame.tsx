// app/modules/collectibles/profile_frames/native/ProfileFrame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = function ProfileFrameLayer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.skuId;
            var7 = var2.layer;
            var _closure2_slot0 = var7;
            var14 = var2.overflowTop;
            var _closure2_slot1 = var14;
            var13 = var2.overflowBottom;
            var _closure2_slot2 = var13;
            var4 = var2.overflowHorizontal;
            var _closure2_slot3 = var4;
            var1 = var2.containerWidth;
            var11 = var2.containerHeight;
            var3 = _closure1_slot8;
            var5 = undefined;
            var8 = var3.bind(var5)();
            var3 = 2;
            var3 = var3 * var4;
            var16 = var1 + var3;
            var _closure2_slot4 = var16;
            var9 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 6;
            var3 = var12[var3];
            var9 = var9.bind(var5)(var3);
            var3 = {};
            var3['skuId'] = var10;
            var3['layer'] = var7;
            var3['width'] = var16;
            var3 = var9.bind(var5)(var3);
            var18 = var3.assetUrl;
            var _closure2_slot5 = var18;
            var3 = var3.imageHeight;
            var _closure2_slot6 = var3;
            var12 = _closure1_slot2;
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
            var9[5] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = {};
                    var1 = _closure2_slot3;
                    var3 = -var1;
                    var2['left'] = var3;
                    var1 = -var1;
                    var2['right'] = var1;
                    var5 = _closure1_slot5;
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
                    var3 = _closure2_slot3;
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
                    var6 = _closure2_slot1;
                    var2 = -var6;
case 10:
                    var1[4] = var2;
                    var2 = _closure2_slot0;
                    var5 = var2.anchor;
                    var2 = 'bottom';
                    var3 = undefined;
                    if(!(var2 === var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure2_slot2;
                    var3 = -var4;
case 12:
                    var1[1] = var3;
                    return var1;
                }
            };
            var9 = var10.bind(var12)(var4, var9);
            var10 = var7.responsive;
            var4 = true;
            var10 = var4 === var10;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var7.type;
            var4 = 'rail';
            var10 = var4 === var12;
case 14:
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = null;
            var10 = var4 != var11;
case 16:
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var1 / var11;
            var1 = _closure1_slot4;
            var10 = var4 >= var1;
case 18:
            var4 = 0;
            if(!(var4 !== var3)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = null;
            if(!(var1 != var18)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            if(var10) { _fun0001_ip = 20; continue _fun0001 }
case 23:
            var10 = var7.type;
            var7 = 'border';
            if(!(var7 !== var10)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = _closure1_slot7;
            var10 = _closure1_slot3;
            var7 = {};
            var14 = var8.layer;
            var13 = new Array(2);
            var13[0] = var14;
            var13[1] = var9;
            var7['style'] = var13;
            var15 = _closure1_slot7;
            var14 = _closure1_slot0;
            var17 = _closure1_slot1;
            var13 = 7;
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
case 24:
            if(!(var1 != var11)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(!(var4 !== var11)) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var7 = global;
            var10 = var7.Math;
            var4 = var10.ceil;
            var3 = var11 / var3;
            var10 = var4.bind(var10)(var3);
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
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
                var5 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
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
                var6 = _closure2_slot4;
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
case 26:
            return var1;
case 20:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var10 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO;
    var _closure1_slot4 = var7;
    var4 = var4.PROFILE_FRAME_Z_INDEX;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
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
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/ProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProfileFrame(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.frame;
            var _closure2_slot0 = var8;
            var3 = var1.containerWidth;
            var _closure2_slot1 = var3;
            var2 = var1.containerHeight;
            var _closure2_slot2 = var2;
            var11 = var1.profileThemeType;
            var _closure2_slot3 = var11;
            var12 = var1.frameOrder;
            var _closure2_slot4 = var12;
            var2 = var1.filterLayer;
            var _closure2_slot5 = var2;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var6 = _closure1_slot8;
            var6 = var6.bind(var4)();
            var10 = _closure1_slot2;
            var9 = var10.useMemo;
            var13 = var8.layers;
            var7 = new Array(4);
            var7[0] = var13;
            var7[1] = var12;
            var7[2] = var11;
            var7[3] = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var3 = var1.layers;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = arg1;
                        var1 = _closure2_slot4;
                        var4 = null;
                        var1 = var4 == var1;
                        if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var6 = _closure2_slot4;
                        var2 = var5.order;
                        var1 = var6 === var2;
case 29:
                        if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var2 = _closure2_slot5;
                        var4 = var4 != var2;
                        if(!var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var6 = _closure2_slot5;
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var4 = !var2;
case 33:
                        var2 = !var4;
                        if(var4) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                        var4 = _closure2_slot3;
                        var3 = _closure1_slot6;
                        var3 = var3.PREVIEW;
                        var3 = var4 === var3;
                        if(var3) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                        var6 = var5.anchor;
                        var4 = 'top';
                        var4 = var4 === var6;
                        if(!var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                        var6 = var5.type;
                        var5 = 'staple';
                        var4 = var5 === var6;
case 39:
                        var3 = var4;
case 37:
                        var2 = var3;
case 35:
                        var1 = var2;
case 31:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var10)(var2, var7);
            var9 = var7.length;
            var2 = 0;
            if(!(var2 !== var9)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            if(!(var2 !== var3)) { _fun0003_ip = 41; continue _fun0003 }
case 43:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 8;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.bind(var4)(var8, var3);
            var3 = var2.overflowTop;
            _closure2_slot6 = var3;
            var3 = var2.overflowBottom;
            _closure2_slot7 = var3;
            var2 = var2.overflowHorizontal;
            _closure2_slot8 = var2;
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot7;
                var4 = _closure1_slot9;
                var3 = {};
                var6 = _closure2_slot0;
                var6 = var6.skuId;
                var3['skuId'] = var6;
                var3['layer'] = var1;
                var6 = _closure2_slot6;
                var3['overflowTop'] = var6;
                var6 = _closure2_slot7;
                var3['overflowBottom'] = var6;
                var6 = _closure2_slot8;
                var3['overflowHorizontal'] = var6;
                var6 = _closure2_slot1;
                var3['containerWidth'] = var6;
                var2 = _closure2_slot2;
                var3['containerHeight'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 41:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();