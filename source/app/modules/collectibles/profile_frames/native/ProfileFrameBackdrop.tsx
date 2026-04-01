// app/modules/collectibles/profile_frames/native/ProfileFrameBackdrop.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function ProfileFrameBackdropLayer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.skuId;
            var14 = var2.layer;
            var13 = var2.animatedPosition;
            var _closure2_slot0 = var13;
            var3 = var2.containerWidth;
            var2 = _closure1_slot10;
            var5 = undefined;
            var8 = var2.bind(var5)();
            var4 = _closure1_slot6;
            var2 = 2;
            var2 = var2 * var4;
            var10 = var3 + var2;
            var2 = _closure1_slot5;
            var3 = var10 / var2;
            var2 = _closure1_slot7;
            var2 = -var2;
            var11 = var3 * var2;
            var _closure2_slot1 = var11;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var2 = var3[var2];
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var2['skuId'] = var7;
            var2['layer'] = var14;
            var2['layerWidth'] = var10;
            var2 = var4.bind(var5)(var2);
            var12 = var2.assetUrl;
            var9 = var2.imageHeight;
            var _closure2_slot2 = var9;
            var4 = _closure1_slot0;
            var2 = 6;
            var3 = var3[var2];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function s() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot0;
                    var3 = null;
                    var5 = var3 == var4;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot0;
                    var5 = var6.get;
                    var4 = var5.bind(var6)();
case 2:
                    var6 = var3 != var4;
                    var3 = 0;
                    var5 = 0;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var4;
case 4:
                    var4 = _closure2_slot1;
                    var4 = var5 + var4;
                    var1['top'] = var4;
                    var4 = _closure2_slot2;
                    var2 = 1;
                    if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = 0;
case 6:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['animatedPosition'] = var13;
            var7['overflowTop'] = var11;
            var7['imageHeight'] = var9;
            var1['__closure'] = var7;
            var7 = 2478496781523.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot11;
            var1['__initData'] = var7;
            var13 = var3.bind(var4)(var1);
            var4 = null;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4 == var12;
            var1 = null;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var4 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var15 = var8.container;
            var8 = new Array(3);
            var8[0] = var15;
            var8[1] = var13;
            var13 = {};
            var15 = _closure1_slot6;
            var15 = -var15;
            var13['left'] = var15;
            var15 = _closure1_slot8;
            var14 = var14.order;
            var14 = var15[var14];
            var13['zIndex'] = var14;
            var8[2] = var13;
            var2['style'] = var8;
            var8 = _closure1_slot9;
            var6 = 7;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var11 = {};
            var11['uri'] = var12;
            var6['source'] = var11;
            var11 = {};
            var11['width'] = var10;
            var11['height'] = var9;
            var6['style'] = var11;
            var11 = 'cover';
            var6['resizeMode'] = var11;
            var6['width'] = var10;
            var6['height'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
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
    var7 = var4.PROFILE_FRAME_LAYER_WIDTH;
    var _closure1_slot5 = var7;
    var7 = var4.PROFILE_FRAME_OVERFLOW_LEFT;
    var _closure1_slot6 = var7;
    var7 = var4.PROFILE_FRAME_OVERFLOW_TOP;
    var _closure1_slot7 = var7;
    var4 = var4.PROFILE_FRAME_Z_INDEX;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var11 = 'none';
    var9 = {'position': 'absolute', 'pointerEvents': 'none'};
    var4['container'] = var9;
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var10 = 'pointerEvents';
    var9[9] = var11;
    var4['backdrop'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function ProfileFrameBackdropTsx1(){const{animatedPosition,overflowTop,imageHeight}=this.__closure;var _animatedPosition$get,_animatedPosition;const sheetTop=(_animatedPosition$get=(_animatedPosition=animatedPosition)===null||_animatedPosition===void 0?void 0:_animatedPosition.get())!==null&&_animatedPosition$get!==void 0?_animatedPosition$get:0;return{top:sheetTop+overflowTop,opacity:imageHeight===0?0:1};}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/ProfileFrameBackdrop.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProfileFrameBackdrop(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.frame;
            var _closure2_slot0 = var1;
            var4 = var2.containerWidth;
            var _closure2_slot1 = var4;
            var2 = var2.animatedPosition;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot10;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var1 = var1.layers;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure2_slot0;
                var3 = var1.layers;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.anchor;
                        var3 = var1.type;
                        var1 = 'top';
                        var1 = var1 === var2;
                        if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var2 = 'staple';
                        var1 = var2 === var3;
case 11:
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
            if(!(var3 !== var10)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = null;
            if(!(var3 !== var4)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.backdrop;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var4 = _closure1_slot12;
                var3 = {};
                var6 = _closure2_slot0;
                var6 = var6.skuId;
                var3['skuId'] = var6;
                var3['layer'] = var1;
                var6 = _closure2_slot1;
                var3['containerWidth'] = var6;
                var2 = _closure2_slot2;
                var3['animatedPosition'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();