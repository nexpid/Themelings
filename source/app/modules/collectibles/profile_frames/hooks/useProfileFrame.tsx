// app/modules/collectibles/profile_frames/hooks/useProfileFrame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isProfileFrameRecord;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/hooks/useProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProfileFrame(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                if(!(var4 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = undefined;
                return var1;
case 2:
                var6 = _closure1_slot2;
                var2 = var6.getProduct;
                var1 = _closure2_slot0;
                var1 = var2.bind(var6)(var1);
                var7 = _closure1_slot4;
                var8 = var4 == var1;
                var2 = undefined;
                var6 = undefined;
                if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var9 = var1.items;
                var8 = 0;
                var6 = var9[var8];
case 4:
                var6 = var7.bind(var2)(var6);
                if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var7 = _closure1_slot3;
                var6 = var7.getPurchase;
                var3 = _closure2_slot0;
                var3 = var6.bind(var7)(var3);
                var5 = _closure1_slot4;
                var6 = var4 == var3;
                var4 = undefined;
                if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var7 = var3.items;
                var6 = 0;
                var4 = var7[var6];
case 8:
                var4 = var5.bind(var2)(var4);
                var2 = undefined;
                if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var4 = var3.items;
                var3 = 0;
                var2 = var4[var3];
case 10:
                return var2;
case 6:
                var2 = var1.items;
                var1 = 0;
                var1 = var2[var1];
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();