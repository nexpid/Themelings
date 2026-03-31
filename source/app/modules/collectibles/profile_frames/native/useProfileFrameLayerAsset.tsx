// app/modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PROFILE_FRAME_CONTAINER_WIDTH;
    var _closure1_slot5 = var7;
    var4 = var4.PROFILE_FRAME_CONTAINER_HEIGHT;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProfileFrameLayerAsset(arg1) {
        var2 = arg1;
        var12 = var2.skuId;
        var6 = var2.layer;
        var7 = var2.layerWidth;
        var _closure2_slot0 = var7;
        var10 = _closure1_slot0;
        var11 = _closure1_slot1;
        var9 = 4;
        var3 = var11[var9];
        var8 = undefined;
        var5 = var10.bind(var8)(var3);
        var4 = var5.getCollectiblesItemAssetUrl;
        var3 = {};
        var3['skuId'] = var12;
        var9 = var11[var9];
        var9 = var10.bind(var8)(var9);
        var9 = var9.CollectiblesItemAssetFormat;
        var9 = var9.STATIC;
        var3['assetFormat'] = var9;
        var6 = var6.id;
        var3['assetId'] = var6;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot1 = var3;
        var6 = _closure1_slot3;
        var5 = var6.useState;
        var4 = global;
        var10 = var4.Math;
        var9 = var10.floor;
        var11 = _closure1_slot5;
        var4 = _closure1_slot6;
        var4 = var11 / var4;
        var4 = var7 / var4;
        var4 = var9.bind(var10)(var4);
        var5 = var5.bind(var6)(var4);
        var4 = _closure1_slot2;
        var2 = 2;
        var5 = var4.bind(var8)(var5, var2);
        var2 = 0;
        var2 = var5[var2];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot2 = var4;
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var3;
        var4[1] = var7;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot1;
                var3 = '';
                var2 = var3 !== var4;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot4;
                var3 = var4.getSize;
                var2 = _closure2_slot1;
                var1 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var6 = arg1;
                        var1 = 0;
                        if(!(var6 > var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = _closure2_slot2;
                        var2 = global;
                        var4 = var2.Math;
                        var2 = var4.floor;
                        var5 = arg2;
                        var5 = var5 / var6;
                        var1 = _closure2_slot0;
                        var1 = var5 * var1;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['assetUrl'] = var3;
        var1['imageHeight'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();