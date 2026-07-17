// app/modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useFramePreviewOverrideStore;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFramePreviewOverrideFrame() {
        var5 = _closure1_slot4;
        var4 = undefined;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.override;
            return var1;
        };
        var5 = var5.bind(var4)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot3;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 3;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.CollectiblesItemType;
                var5 = var5.PROFILE_FRAME;
                var2['type'] = var5;
                var5 = 'frame-preview-override';
                var2['skuId'] = var5;
                var3 = _closure2_slot0;
                var5 = var3.frameKey;
                var2['label'] = var5;
                var5 = var3.layers;
                var2['layers'] = var5;
                var5 = var3.innerWidth;
                var2['innerWidth'] = var5;
                var5 = var3.overflowTop;
                var2['overflowTop'] = var5;
                var5 = var3.overflowBottom;
                var2['overflowBottom'] = var5;
                var3 = var3.overflowHorizontal;
                var2['overflowHorizontal'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var2;
                var2 = new var9[var4](var8, var7);
                var1 = var2 instanceof Object ? var2 : var3;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();