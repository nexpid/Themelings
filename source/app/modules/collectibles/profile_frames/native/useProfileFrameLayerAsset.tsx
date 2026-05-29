// app/modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Image;
    var _closure1_slot4 = var8;
    var7 = var7.PixelRatio;
    var _closure1_slot5 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProfileFrameLayerAsset(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.skuId;
            var7 = var2.layer;
            var8 = var2.width;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 3;
            var2 = var11[var9];
            var3 = undefined;
            var6 = var10.bind(var3)(var2);
            var4 = var6.getCollectiblesItemAssetUrl;
            var2 = {};
            var2['skuId'] = var12;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.CollectiblesItemAssetFormat;
            var9 = var9.STATIC;
            var2['assetFormat'] = var9;
            var7 = var7.id;
            var2['assetId'] = var7;
            var9 = var4.bind(var6)(var2);
            var _closure2_slot0 = var9;
            var7 = _closure1_slot3;
            var6 = var7.useReducer;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            };
            var2 = 0;
            var10 = var6.bind(var7)(var4, var2);
            var6 = _closure1_slot2;
            var4 = 2;
            var6 = var6.bind(var3)(var10, var4);
            var4 = 1;
            var4 = var6[var4];
            var _closure2_slot1 = var4;
            var6 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = null;
                    var3 = var3 == var4;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var4 = '';
                    var3 = var4 === var5;
case 2:
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot6;
                    var5 = var6.has;
                    var4 = _closure2_slot0;
                    var3 = var5.bind(var6)(var4);
case 4:
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot4;
                    var4 = var5.getSize;
                    var3 = _closure2_slot0;
                    var2 = function(arg1, arg2) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var6 = arg1;
                            var1 = 0;
                            if(!(var6 > var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var5 = _closure1_slot6;
                            var4 = var5.set;
                            var3 = _closure2_slot0;
                            var2 = arg2;
                            var2 = var2 / var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 8:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var4);
            var6 = null;
            var1 = var6 != var9;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot6;
            var1 = var3.get;
            var4 = var1.bind(var3)(var9);
case 10:
            var1 = var6 != var4;
            var2 = 0;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var4 * var8;
case 12:
            var1 = var6 != var9;
            var3 = null;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var6 != var4;
            var3 = null;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var1 = global;
            var7 = var1.Math;
            var6 = var7.round;
            var10 = _closure1_slot5;
            var5 = var10.get;
            var5 = var5.bind(var10)();
            var5 = var8 * var5;
            var8 = var6.bind(var7)(var5);
            var6 = var1.Math;
            var5 = var6.round;
            var4 = var8 * var4;
            var13 = var5.bind(var6)(var4);
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var18 = '';
            var16 = '?width=';
            var14 = '&height=';
            var17 = var9;
            var15 = var8;
            var3 = var18[var6](var17, var16, var15, var14, var13, var12);
case 14:
            var1 = {};
            var1['assetUrl'] = var3;
            var1['imageHeight'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();