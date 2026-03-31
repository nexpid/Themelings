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
            var1 = arg1;
            var3 = var1.skuId;
            var11 = var1.layer;
            var2 = var1.containerWidth;
            var1 = _closure1_slot9;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var4 = _closure1_slot5;
            var1 = 2;
            var1 = var1 * var4;
            var10 = var2 + var1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['skuId'] = var3;
            var1['layer'] = var11;
            var1['layerWidth'] = var10;
            var1 = var2.bind(var5)(var1);
            var12 = var1.assetUrl;
            var9 = var1.imageHeight;
            var3 = null;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3 == var12;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot8;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = var7.layer;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var8['width'] = var10;
            var15 = var11.anchor;
            var14 = 'top';
            var13 = undefined;
            if(!(var14 === var15)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = _closure1_slot4;
            var15 = var10 / var14;
            var14 = _closure1_slot6;
            var14 = -var14;
            var13 = var15 * var14;
case 5:
            var8['top'] = var13;
            var13 = _closure1_slot5;
            var13 = -var13;
            var8['left'] = var13;
            var13 = _closure1_slot7;
            var11 = var11.order;
            var11 = var13[var11];
            var8['zIndex'] = var11;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 6;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var11 = {};
            var11['uri'] = var12;
            var6['source'] = var11;
            var11 = 'cover';
            var6['resizeMode'] = var11;
            var11 = {};
            var11['width'] = var10;
            var11['height'] = var9;
            var6['style'] = var11;
            var6['width'] = var10;
            var6['height'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_FRAME_LAYER_WIDTH;
    var _closure1_slot4 = var7;
    var7 = var4.PROFILE_FRAME_OVERFLOW_LEFT;
    var _closure1_slot5 = var7;
    var7 = var4.PROFILE_FRAME_OVERFLOW_TOP;
    var _closure1_slot6 = var7;
    var4 = var4.PROFILE_FRAME_Z_INDEX;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'width': '100%', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'pointerEvents': 'none'};
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'pointerEvents': 'none'};
    var4['layer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/ProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProfileFrame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.frame;
            var _closure2_slot0 = var1;
            var4 = var2.containerWidth;
            var _closure2_slot1 = var4;
            var9 = var2.style;
            var3 = _closure1_slot9;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var10 = _closure1_slot2;
            var8 = var10.useMemo;
            var1 = var1.layers;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure2_slot0;
                var3 = var1.layers;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.anchor;
                        var4 = var1.order;
                        var3 = var1.type;
                        var1 = 'top';
                        var1 = var1 === var2;
                        if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var2 = 'front';
                        var1 = var2 === var4;
case 7:
                        if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = 'staple';
                        var1 = var2 === var3;
case 9:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var10)(var1, var3);
            var11 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var11)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = null;
            if(!(var3 !== var4)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
            var4 = _closure1_slot8;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = var7.container;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var9;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot8;
                var4 = _closure1_slot10;
                var3 = {};
                var6 = _closure2_slot0;
                var6 = var6.skuId;
                var3['skuId'] = var6;
                var3['layer'] = var1;
                var2 = _closure2_slot1;
                var3['containerWidth'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();