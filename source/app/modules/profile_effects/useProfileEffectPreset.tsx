// app/modules/profile_effects/useProfileEffectPreset.tsx
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
    var4 = var4.isProfileEffectRecord;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/useProfileEffectPreset.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 5;
            var1 = var8[var4];
            var6 = undefined;
            var11 = var5.bind(var6)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getProfileEffect;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var10.bind(var11)(var9, var1);
            var _closure2_slot1 = var1;
            var4 = var8[var4];
            var9 = var5.bind(var6)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(2);
            var5[0] = var4;
            var4 = _closure1_slot4;
            var5[1] = var4;
            var4 = function() {
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
            var9 = var8.bind(var9)(var5, var4);
            var _closure2_slot2 = var9;
            var8 = _closure1_slot2;
            var5 = var8.useMemo;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 12; continue _fun0003 }
case 3:
                    var1 = _closure2_slot1;
                    _fun0003_ip = 13; continue _fun0003;
case 12:
                    var2 = {};
                    var3 = _closure2_slot2;
                    var4 = var3.skuId;
                    var2['skuId'] = var4;
                    var2['config'] = var3;
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var1 = var5.bind(var8)(var1, var4);
            var4 = null;
            var8 = var4 != var7;
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = var4 == var1;
case 14:
            var _closure2_slot3 = var8;
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 6;
            var4 = var9[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useIsListProfileEffectsSunsetEnabled;
            var4 = 'useProfileEffectPreset';
            var6 = var5.bind(var6)(var4);
            var _closure2_slot4 = var6;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var2 = _closure2_slot4;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2 = 8;
                    var5 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var5);
                    var5 = var6.maybeFetchAllProfileEffects;
                    var2 = true;
                    var2 = var5.bind(var6)(var2);
                    _fun0004_ip = 16; continue _fun0004;
case 18:
                    var2 = 7;
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
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useProfileEffectPreset'] = var2;
    return var1;
})();