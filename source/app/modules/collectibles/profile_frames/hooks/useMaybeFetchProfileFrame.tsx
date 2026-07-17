// app/modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeFetchProfileFrame(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 1;
            var1 = var8[var1];
            var2 = undefined;
            var1 = var5.bind(var2)(var1);
            var1 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var3 = 2;
            var3 = var8[var3];
            var9 = var4.bind(var2)(var3);
            var4 = var9.useIsProfileFramesEnabled;
            var3 = arg2;
            var4 = var4.bind(var9)(var3);
            var3 = 3;
            var3 = var8[var3];
            var3 = var5.bind(var2)(var3);
            var3 = var3.bind(var2)(var10);
            var5 = null;
            var11 = var5 == var1;
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var4;
case 2:
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var5 != var10;
case 4:
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var5 == var3;
case 6:
            var _closure2_slot1 = var11;
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var10;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.maybeFetchCollectiblesProduct;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            if(!(var5 == var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = undefined;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var3;
case 12:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();