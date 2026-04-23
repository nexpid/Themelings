// app/modules/collectibles/profile_frames/useMaybeFetchProfileFrame.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/useMaybeFetchProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeFetchProfileFrame(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 1;
            var2 = var7[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var3 = var6.useIsProfileFramesEnabled;
            var2 = arg2;
            var3 = var3.bind(var6)(var2);
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.bind(var1)(var8);
            var9 = var3;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = null;
            var9 = var6 != var8;
case 2:
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = null;
            var9 = var6 == var2;
case 4:
            var _closure2_slot1 = var9;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var8;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.maybeFetchCollectiblesProduct;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1 = undefined;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();