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
            var3 = var1.skuId;
            var8 = var1.layer;
            var7 = var1.containerWidth;
            var1 = _closure1_slot8;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var7);
            var13 = var1.layerWidth;
            var12 = var1.overflowTop;
            var10 = var1.overflowHorizontal;
            var11 = var1.overflowBottom;
            var1 = 7;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['skuId'] = var3;
            var1['layer'] = var8;
            var1['layerWidth'] = var13;
            var1 = var2.bind(var5)(var1);
            var16 = var1.assetUrl;
            var14 = var1.imageHeight;
            var2 = var8.type;
            var1 = 'rail';
            var15 = var1 === var2;
            var3 = null;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var14)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3 == var16;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = {};
            var7['uri'] = var16;
            var2['source'] = var7;
            var7 = 'cover';
            if(!var15) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = 'stretch';
case 5:
            var2['resizeMode'] = var7;
            var7 = var6.layer;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['width'] = var13;
            var13 = '100%';
            if(var15) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var13 = var14;
case 7:
            var7['height'] = var13;
            var10 = -var10;
            var7['left'] = var10;
            var14 = var8.anchor;
            var13 = 'top';
            var10 = undefined;
            if(!(var13 === var14)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = -var12;
case 9:
            var7['top'] = var10;
            var13 = var8.anchor;
            var12 = 'bottom';
            var10 = undefined;
            if(!(var12 === var13)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = -var11;
case 11:
            var7['bottom'] = var10;
            var9 = _closure1_slot5;
            var8 = var8.order;
            var8 = var9[var8];
            var7['zIndex'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
        var1 = _closure1_slot8;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 9;
        var3 = var9[var1];
        var7 = var7.bind(var4)(var3);
        var3 = var7.useAnimatedStyle;
        var2 = function n() {
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
        var10 = _closure1_slot9;
        var2['__initData'] = var10;
        var7 = var3.bind(var7)(var2);
        var3 = _closure1_slot7;
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
        var7 = _closure1_slot7;
        var6 = _closure1_slot10;
        var5 = {};
        var14 = var5;
        var8 = copyDataProperties(var14, var13);
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = 'none';
    var10 = 'pointerEvents';
    var9[9] = var11;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'pointerEvents': 'none'};
    var4['layer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function ProfileFrameTsx1(){const{animatedPosition}=this.__closure;const sheetTop=animatedPosition.get();return{top:sheetTop};}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/ProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProfileFrame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.frame;
            var _closure2_slot0 = var3;
            var4 = var2.containerWidth;
            var _closure2_slot1 = var4;
            var1 = var2.profileThemeType;
            var _closure2_slot2 = var1;
            var10 = var2.frameOrder;
            var _closure2_slot3 = var10;
            var2 = var2.animatedPosition;
            var _closure2_slot4 = var2;
            var7 = _closure1_slot8;
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
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.anchor;
                        var6 = var1.order;
                        var5 = var1.type;
                        var3 = _closure2_slot3;
                        var1 = null;
                        var1 = var1 == var3;
                        if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var3 = _closure2_slot3;
                        var1 = var3 === var6;
case 13:
                        if(!var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var3 = _closure2_slot2;
                        var2 = _closure1_slot6;
                        var2 = var2.PREVIEW;
                        var2 = var3 === var2;
                        if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var3 = 'top';
                        var3 = var3 === var4;
                        if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var4 = 'staple';
                        var3 = var4 === var5;
case 19:
                        var2 = var3;
case 17:
                        var1 = var2;
case 15:
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
            if(!(var3 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = null;
            if(!(var3 !== var4)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var7 = _closure1_slot7;
                    var6 = _closure1_slot10;
                    var5 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.skuId;
                    var5['skuId'] = var1;
                    var5['layer'] = var2;
                    var1 = _closure2_slot1;
                    var5['containerWidth'] = var1;
                    var4 = var2.id;
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6, var5, var4);
                    _fun0004_ip = 26; continue _fun0004;
case 24:
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot11;
                    var4 = {};
                    var7 = _closure2_slot4;
                    var4['animatedPosition'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.skuId;
                    var4['skuId'] = var7;
                    var4['layer'] = var2;
                    var3 = _closure2_slot1;
                    var4['containerWidth'] = var3;
                    var3 = var2.id;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
case 26:
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();