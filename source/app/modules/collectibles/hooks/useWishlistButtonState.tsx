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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useWishlistButtonState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWishlistButtonState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var11 = var2.skuId;
            var _closure2_slot1 = var11;
            var5 = var2.location;
            var9 = var2.onAddSuccess;
            var _closure2_slot2 = var9;
            var8 = var2.onRemoveSuccess;
            var _closure2_slot3 = var8;
            var7 = var2.onError;
            var _closure2_slot4 = var7;
            var13 = undefined;
            var _closure2_slot5 = var13;
            var _closure2_slot6 = var13;
            var _closure2_slot7 = var13;
            var _closure2_slot8 = var13;
            var _closure2_slot9 = var13;
            var _closure2_slot10 = var13;
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var4 = var4.bind(var13)(var3);
            var6 = _closure1_slot0;
            var3 = 5;
            var3 = var10[var3];
            var6 = var6.bind(var13)(var3);
            var3 = var6.isNullOrEmpty;
            var3 = var3.bind(var6)(var5);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = new Array(1);
            var3[0] = var5;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = new Array(0);
case 4:
            var3 = var4.bind(var13)(var3);
            var10 = var3.analyticsLocations;
            _closure2_slot5 = var10;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var14 = var4.bind(var13)(var3);
            var12 = var14.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getFirstWishlistId;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var14)(var6, var3);
            _closure2_slot6 = var12;
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var13)(var3);
            var3 = var4.useIsSkuInWishlist;
            var4 = var3.bind(var4)(var12, var11);
            var19 = _closure1_slot5;
            var3 = var19.useState;
            var6 = null;
            var3 = var3.bind(var19)(var6);
            var17 = _closure1_slot4;
            var16 = 2;
            var14 = var17.bind(var13)(var3, var16);
            var3 = 0;
            var5 = var14[var3];
            var15 = 1;
            var14 = var14[var15];
            _closure2_slot7 = var14;
            var18 = var19.useState;
            var14 = false;
            var14 = var18.bind(var19)(var14);
            var14 = var17.bind(var13)(var14, var16);
            var3 = var14[var3];
            _closure2_slot8 = var3;
            var14 = var14[var15];
            _closure2_slot9 = var14;
            if(!(var6 !== var5)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var5;
case 5:
            _closure2_slot10 = var4;
            var6 = _closure1_slot5;
            var15 = var6.useEffect;
            var14 = new Array(1);
            var14[0] = var11;
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
            var5 = var15.bind(var6)(var5, var14);
            var5 = var6.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var5 = _closure2_slot8;
                        if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var6 = _closure2_slot9;
                        var5 = undefined;
                        var8 = true;
                        var6 = var6.bind(var5)(var8);
                        var6 = _closure2_slot10;
                        if(!var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var6 = _closure2_slot6;
                        var7 = null;
                        if(!(var7 == var6)) { _fun0002_ip = 13; continue _fun0002 }
case 11:
                        var6 = _closure2_slot7;
                        var6 = var6.bind(var5)(var8);
case 14: // try_start_0 // try_start_2
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 8;
                        var6 = var9[var6];
                        var10 = var8.bind(var5)(var6);
                        var9 = var10.addSkuToWishlist;
                        var8 = _closure2_slot1;
                        var6 = _closure2_slot5;
                        var6 = var9.bind(var10)(var8, var6);
                        SaveGenerator(address=112);
case 15:
                        return var6;
case 16:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                        var9 = _closure2_slot2;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                        var8 = _closure2_slot2;
                        var8 = var8.bind(var5)();
case 19: // try_end0
                        _fun0002_ip = 21; continue _fun0002;
case 17: // try_end2
                        var9 = _closure2_slot7;
                        var8 = null;
                        var8 = var9.bind(var5)(var8);
                        var9 = _closure2_slot9;
                        var8 = false;
                        var8 = var9.bind(var5)(var8);
                        return var6;
case 22: // try_start_3 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var8 = _closure2_slot4;
                        var6 = null;
                        if(!(var6 != var8)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                        var6 = _closure2_slot4;
                        var4 = var6.bind(var5)(var4);
case 21: // try_end3
                        var6 = _closure2_slot7;
                        var4 = null;
                        var4 = var6.bind(var5)(var4);
                        var6 = _closure2_slot9;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        _fun0002_ip = 9; continue _fun0002;
case 24: // catch_target2 // catch_target3
                        CatchBlockStart(arg_register=3);
                        var8 = _closure2_slot7;
                        var6 = null;
                        var6 = var8.bind(var5)(var6);
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
                        var6 = 8;
                        var6 = var9[var6];
                        var11 = var8.bind(var5)(var6);
                        var10 = var11.removeSkuFromWishlist;
                        var9 = _closure2_slot6;
                        var8 = _closure2_slot1;
                        var6 = _closure2_slot5;
                        var6 = var10.bind(var11)(var9, var8, var6);
                        SaveGenerator(address=300);
case 26:
                        return var6;
case 27:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                        var8 = _closure2_slot3;
                        if(!(var7 != var8)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                        var8 = _closure2_slot3;
                        var8 = var8.bind(var5)();
case 30: // try_end1
                        _fun0002_ip = 32; continue _fun0002;
case 28: // try_end4
                        var8 = _closure2_slot7;
                        var8 = var8.bind(var5)(var7);
                        var8 = _closure2_slot9;
                        var8 = var8.bind(var5)(var4);
                        return var6;
case 33: // try_start_5 // catch_target1
                        CatchBlockStart(arg_register=1);
                        var6 = _closure2_slot4;
                        if(!(var7 != var6)) { _fun0002_ip = 32; continue _fun0002 }
case 34:
                        var6 = _closure2_slot4;
                        var2 = var6.bind(var5)(var2);
case 32: // try_end5
                        var2 = _closure2_slot7;
                        var2 = var2.bind(var5)(var7);
                        var2 = _closure2_slot9;
                        var2 = var2.bind(var5)(var4);
                        _fun0002_ip = 9; continue _fun0002;
case 35: // catch_target4 // catch_target5
                        CatchBlockStart(arg_register=1);
                        var6 = _closure2_slot7;
                        var6 = var6.bind(var5)(var7);
                        var3 = _closure2_slot9;
                        var3 = var3.bind(var5)(var4);
                        throw var2;
case 9:
                        var2 = undefined;
                        return var2;
case 7:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var13)(var1);
            var1 = new Array(8);
            var1[0] = var3;
            var1[1] = var4;
            var1[2] = var12;
            var1[3] = var11;
            var1[4] = var10;
            var1[5] = var9;
            var1[6] = var8;
            var1[7] = var7;
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