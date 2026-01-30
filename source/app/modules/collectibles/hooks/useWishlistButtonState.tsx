// app/modules/collectibles/hooks/useWishlistButtonState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useWishlistButtonState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWishlistButtonState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.currentUser;
            var _closure2_slot0 = var13;
            var11 = var2.skuId;
            var _closure2_slot1 = var11;
            var9 = var2.onAddSuccess;
            var _closure2_slot2 = var9;
            var8 = var2.onRemoveSuccess;
            var _closure2_slot3 = var8;
            var7 = var2.onError;
            var _closure2_slot4 = var7;
            var14 = undefined;
            var _closure2_slot10 = var14;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var14)(var3);
            var3 = var3.bind(var14)();
            var10 = var3.analyticsLocations;
            var _closure2_slot5 = var10;
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var5[var3];
            var15 = var4.bind(var14)(var3);
            var12 = var15.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot6;
                    var3 = var4.getFirstWishlistId;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var12 = var12.bind(var15)(var6, var3);
            var _closure2_slot6 = var12;
            var3 = 6;
            var3 = var5[var3];
            var4 = var4.bind(var14)(var3);
            var3 = var4.useIsSkuInWishlist;
            var4 = var3.bind(var4)(var12, var11);
            var20 = _closure1_slot5;
            var3 = var20.useState;
            var6 = null;
            var3 = var3.bind(var20)(var6);
            var18 = _closure1_slot4;
            var17 = 2;
            var15 = var18.bind(var14)(var3, var17);
            var3 = 0;
            var5 = var15[var3];
            var16 = 1;
            var15 = var15[var16];
            var _closure2_slot7 = var15;
            var19 = var20.useState;
            var15 = false;
            var15 = var19.bind(var20)(var15);
            var15 = var18.bind(var14)(var15, var17);
            var3 = var15[var3];
            var _closure2_slot8 = var3;
            var15 = var15[var16];
            var _closure2_slot9 = var15;
            if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5;
case 4:
            _closure2_slot10 = var4;
            var6 = _closure1_slot5;
            var16 = var6.useEffect;
            var15 = new Array(1);
            var15[0] = var11;
            var5 = function() {
                var4 = _closure2_slot7;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot9;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var16.bind(var6)(var5, var15);
            var5 = var6.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var5 = _closure2_slot0;
                        var7 = null;
                        if(!(var7 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var5 = _closure2_slot8;
                        if(var5) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                        var6 = _closure2_slot9;
                        var5 = undefined;
                        var8 = true;
                        var6 = var6.bind(var5)(var8);
                        var6 = _closure2_slot10;
                        if(!var6) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var6 = _closure2_slot6;
                        if(!(var7 == var6)) { _fun0003_ip = 13; continue _fun0003 }
case 11:
                        var6 = _closure2_slot7;
                        var6 = var6.bind(var5)(var8);
case 14: // try_start_0 // try_start_2
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 7;
                        var6 = var9[var6];
                        var10 = var8.bind(var5)(var6);
                        var9 = var10.addSkuToWishlist;
                        var8 = _closure2_slot1;
                        var6 = _closure2_slot5;
                        var6 = var9.bind(var10)(var8, var6);
                        SaveGenerator(address=123);
case 15:
                        return var6;
case 16:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                        if(var8) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var8 = _closure2_slot2;
                        if(!(var7 != var8)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var8 = _closure2_slot2;
                        var8 = var8.bind(var5)();
case 19: // try_end0
                        _fun0003_ip = 21; continue _fun0003;
case 17: // try_end2
                        var8 = _closure2_slot7;
                        var8 = var8.bind(var5)(var7);
                        var9 = _closure2_slot9;
                        var8 = false;
                        var8 = var9.bind(var5)(var8);
                        return var6;
case 22: // try_start_3 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var6 = _closure2_slot4;
                        if(!(var7 != var6)) { _fun0003_ip = 21; continue _fun0003 }
case 23:
                        var6 = _closure2_slot4;
                        var4 = var6.bind(var5)(var4);
case 21: // try_end3
                        var4 = _closure2_slot7;
                        var4 = var4.bind(var5)(var7);
                        var6 = _closure2_slot9;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        _fun0003_ip = 8; continue _fun0003;
case 24: // catch_target2 // catch_target3
                        CatchBlockStart(arg_register=3);
                        var6 = _closure2_slot7;
                        var6 = var6.bind(var5)(var7);
                        var8 = _closure2_slot9;
                        var6 = false;
                        var6 = var8.bind(var5)(var6);
                        throw var4;
case 13:
                        var6 = _closure2_slot7;
                        var4 = false;
                        var6 = var6.bind(var5)(var4);
case 25: // try_start_1 // try_start_4
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 7;
                        var6 = var9[var6];
                        var11 = var8.bind(var5)(var6);
                        var10 = var11.removeSkuFromWishlist;
                        var9 = _closure2_slot6;
                        var8 = _closure2_slot1;
                        var6 = _closure2_slot5;
                        var6 = var10.bind(var11)(var9, var8, var6);
                        SaveGenerator(address=301);
case 26:
                        return var6;
case 27:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                        if(var8) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var8 = _closure2_slot3;
                        if(!(var7 != var8)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                        var8 = _closure2_slot3;
                        var8 = var8.bind(var5)();
case 30: // try_end1
                        _fun0003_ip = 32; continue _fun0003;
case 28: // try_end4
                        var8 = _closure2_slot7;
                        var8 = var8.bind(var5)(var7);
                        var8 = _closure2_slot9;
                        var8 = var8.bind(var5)(var4);
                        return var6;
case 33: // try_start_5 // catch_target1
                        CatchBlockStart(arg_register=1);
                        var6 = _closure2_slot4;
                        if(!(var7 != var6)) { _fun0003_ip = 32; continue _fun0003 }
case 34:
                        var6 = _closure2_slot4;
                        var2 = var6.bind(var5)(var2);
case 32: // try_end5
                        var2 = _closure2_slot7;
                        var2 = var2.bind(var5)(var7);
                        var2 = _closure2_slot9;
                        var2 = var2.bind(var5)(var4);
                        _fun0003_ip = 8; continue _fun0003;
case 35: // catch_target4 // catch_target5
                        CatchBlockStart(arg_register=1);
                        var6 = _closure2_slot7;
                        var6 = var6.bind(var5)(var7);
                        var3 = _closure2_slot9;
                        var3 = var3.bind(var5)(var4);
                        throw var2;
case 8:
                        var2 = undefined;
                        return var2;
case 6:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var14)(var1);
            var1 = new Array(9);
            var1[0] = var13;
            var1[1] = var3;
            var1[2] = var4;
            var1[3] = var12;
            var1[4] = var11;
            var1[5] = var10;
            var1[6] = var9;
            var1[7] = var8;
            var1[8] = var7;
            var2 = var5.bind(var6)(var2, var1);
            var1 = {};
            var1['isWishlisted'] = var4;
            var1['isBusy'] = var3;
            var1['handleToggle'] = var2;
            return var1;
        }
    };
    var3['useWishlistButtonState'] = var2;
    return var1;
})();