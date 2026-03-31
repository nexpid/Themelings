// app/modules/collectibles/profile_frames/useMaybeFetchProfileFrame.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isProfileFrameRecord;
    var _closure1_slot5 = var4;
    var4 = 7;
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
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 4;
            var2 = var7[var1];
            var1 = undefined;
            var9 = var6.bind(var1)(var2);
            var3 = var9.useIsProfileFramesEnabled;
            var2 = arg2;
            var3 = var3.bind(var9)(var2);
            var2 = 5;
            var2 = var7[var2];
            var9 = var6.bind(var1)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot3;
            var6 = new Array(2);
            var6[0] = var2;
            var2 = _closure1_slot4;
            var6[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = undefined;
                    return var1;
case 2:
                    var6 = _closure1_slot3;
                    var2 = var6.getProduct;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var6)(var1);
                    var7 = _closure1_slot5;
                    var8 = var4 == var1;
                    var2 = undefined;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var9 = var1.items;
                    var8 = 0;
                    var6 = var9[var8];
case 4:
                    var6 = var7.bind(var2)(var6);
                    if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot4;
                    var6 = var7.getPurchase;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var3);
                    var5 = _closure1_slot5;
                    var6 = var4 == var3;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = var3.items;
                    var6 = 0;
                    var4 = var7[var6];
case 8:
                    var4 = var5.bind(var2)(var4);
                    var2 = undefined;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
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
            var2 = var7.bind(var9)(var6, var2);
            var9 = var3;
            if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = null;
            var9 = var6 != var8;
case 12:
            if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = null;
            var9 = var6 == var2;
case 14:
            var _closure2_slot1 = var9;
            var7 = _closure1_slot2;
            var6 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var8;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.maybeFetchCollectiblesProduct;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1 = undefined;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();