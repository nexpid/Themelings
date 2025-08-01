// app/modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreateCreatorMonetizationAcceptTermsRequest(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var13 = _closure1_slot0;
        var14 = _closure1_slot3;
        var12 = 6;
        var1 = var14[var12];
        var9 = undefined;
        var6 = var13.bind(var9)(var1);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot8;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var11 = var5.bind(var6)(var4, var1);
        var _closure2_slot2 = var11;
        var5 = _closure1_slot6;
        var1 = var5.useState;
        var1 = var1.bind(var5)();
        var16 = _closure1_slot5;
        var15 = 2;
        var1 = var16.bind(var9)(var1, var15);
        var4 = 0;
        var10 = var1[var4];
        var6 = 1;
        var1 = var1[var6];
        var _closure2_slot3 = var1;
        var17 = var5.useState;
        var1 = false;
        var1 = var17.bind(var5)(var1);
        var1 = var16.bind(var9)(var1, var15);
        var4 = var1[var4];
        var1 = var1[var6];
        var _closure2_slot4 = var1;
        var1 = 7;
        var1 = var14[var1];
        var6 = var13.bind(var9)(var1);
        var1 = var6.useIsExpeditedOnboardingGuild;
        var6 = var1.bind(var6)(var11);
        var _closure2_slot5 = var6;
        var1 = {};
        var12 = var14[var12];
        var15 = var13.bind(var9)(var12);
        var14 = var15.useStateFromStores;
        var12 = _closure1_slot9;
        var13 = new Array(1);
        var13[0] = var12;
        var12 = new Array(1);
        var12[0] = var11;
        var11 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var5 = var1.bind(var2)();
                var4 = _closure2_slot2;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0001_ip = 48; continue _fun0001 }
 32:
                var4 = _closure1_slot7;
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = var4.bind(var2)(var3, var5);
 48:
                return var1;
            }
        };
        var11 = var14.bind(var15)(var13, var11, var12);
        var1['canSubmitAcceptance'] = var11;
        var1['error'] = var10;
        var1['loading'] = var4;
        var4 = var5.useCallback;
        var3 = _closure1_slot4;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 293; continue _fun0002 }
 10:
                    var2 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0002_ip = 273; continue _fun0002 }
 26:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0002_ip = 44; continue _fun0002 }
 33:
                    var2 = _closure2_slot1;
                    if(!(var4 != var2)) { _fun0002_ip = 273; continue _fun0002 }
 44:
                    var6 = _closure2_slot4;
                    var5 = undefined;
                    var2 = true;
                    var2 = var6.bind(var5)(var2);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var5)(var5);
 66: // try_start_0 // try_start_2
                    var2 = _closure2_slot1;
                    if(!(var4 == var2)) { _fun0002_ip = 136; continue _fun0002 }
 74:
                    var4 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 8;
                    var2 = var6[var2];
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.acceptCreatorMonetizationTermsV2;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=116);
 114:
                    return var2;
 116:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(!var4) { _fun0002_ip = 189; continue _fun0002 }
 122: // try_end0 // try_end2
                    var6 = _closure2_slot4;
                    var4 = false;
                    var4 = var6.bind(var5)(var4);
                    return var2;
 136: // try_start_1 // try_start_3
                    var4 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 8;
                    var2 = var6[var2];
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.acceptCreatorMonetizationTerms;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var6.bind(var7)(var4, var2);
                    SaveGenerator(address=183);
 181:
                    return var2;
 183:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 191; continue _fun0002 }
 189: // try_end1
                    _fun0002_ip = 262; continue _fun0002;
 191: // try_end3
                    var6 = _closure2_slot4;
                    var4 = false;
                    var4 = var6.bind(var5)(var4);
                    return var2;
 205: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=6);
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var5)(var2);
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {constructor: {value: var2}});
                    var11 = var6;
                    var10 = var7;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var2 = var4.bind(var5)(var2);
 262: // try_end4
                    var4 = _closure2_slot4;
                    var2 = false;
                    var2 = var4.bind(var5)(var2);
 273:
                    var2 = undefined;
                    return var2;
 278: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=1);
                    var4 = _closure2_slot4;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 293:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var9)(var2);
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var1['submitAcceptTermsRequest'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();