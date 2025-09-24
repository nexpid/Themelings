// app/modules/profile_effects/ProfileEffectActionCreators.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = function parseProfileEffectConfigResponse(arg1) {
        var4 = arg1;
        var3 = var4.sku_id;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['sku_id'] = var1;
        var7 = {};
        var6 = var4;
        var5 = var2;
        var6 = copyDataProperties(var7, var6, var5);
        var1 = {};
        var1['skuId'] = var3;
        var7 = var1;
        var2 = copyDataProperties(var7, var6);
        return var1;
    };
    var _closure1_slot8 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var4 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 512; continue _fun0001 }
 13:
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 21; continue _fun0001 }
 19:
                    var4 = false;
 21:
                    var5 = undefined;
                    var11 = undefined;
                    var13 = undefined;
                    var9 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=35);
 33:
                    return var3;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 509; continue _fun0001 }
 44:
                    var6 = _closure1_slot6;
                    var6 = var6.isFetchingAll;
                    if(var6) { _fun0001_ip = 506; continue _fun0001 }
 63:
                    if(var4) { _fun0001_ip = 88; continue _fun0001 }
 66:
                    var6 = _closure1_slot6;
                    var4 = var6.canFetchAll;
                    var4 = var4.bind(var6)();
                    if(!var4) { _fun0001_ip = 506; continue _fun0001 }
 88:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 5;
                    var4 = var4[var6];
                    var10 = var7.bind(var3)(var4);
                    var7 = var10.dispatch;
                    var4 = {};
                    var12 = 'PROFILE_EFFECTS_FETCH_ALL';
                    var4['type'] = var12;
                    var4 = var7.bind(var10)(var4);
 130: // try_start_0
                    var4 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.locale;
                    var4['locale'] = var7;
                    var9 = var4;
                    var10 = _closure1_slot5;
                    var7 = var10.getCurrentUser;
                    var7 = var7.bind(var10)();
                    var5 = var7;
                    var12 = null;
                    var7 = var12 != var7;
                    var4 = var7;
                    if(!var7) { _fun0001_ip = 191; continue _fun0001 }
 178:
                    var7 = var5;
                    var5 = var7.isStaff;
                    var4 = var5.bind(var7)();
 191:
                    if(!var4) { _fun0001_ip = 207; continue _fun0001 }
 194:
                    var5 = var9;
                    var4 = true;
                    var5['with_unpublished'] = var4;
 207:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var5.bind(var3)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.get;
                    var4 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.USER_PROFILE_EFFECTS;
                    var4['url'] = var10;
                    var10 = true;
                    var4['rejectWithError'] = var10;
                    var4['query'] = var9;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=273);
 271:
                    return var4;
 273:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 395; continue _fun0001 }
 279:
                    var10 = var4.body;
                    var14 = var10;
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var6];
                    var9 = var7.bind(var3)(var5);
                    var7 = var9.dispatch;
                    var5 = {};
                    var15 = 'PROFILE_EFFECTS_FETCH_ALL_SUCCESS';
                    var5['type'] = var15;
                    var15 = var12 == var10;
                    var10 = undefined;
                    if(var15) { _fun0001_ip = 367; continue _fun0001 }
 330:
                    var14 = var14.profile_effect_configs;
                    var13 = var14;
                    var14 = var12 == var14;
                    var10 = undefined;
                    if(var14) { _fun0001_ip = 367; continue _fun0001 }
 350:
                    var15 = var13;
                    var14 = var15.map;
                    var13 = _closure1_slot8;
                    var10 = var14.bind(var15)(var13);
 367:
                    var11 = var10;
                    if(!(var12 == var10)) { _fun0001_ip = 380; continue _fun0001 }
 374:
                    var10 = new Array(0);
                    _fun0001_ip = 383; continue _fun0001;
 380:
                    var10 = var11;
 383:
                    var5['configs'] = var10;
                    var5 = var7.bind(var9)(var5);
 393: // try_end0
                    _fun0001_ip = 506; continue _fun0001;
 395:
                    return var4;
 398: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var7 = 7;
                    var7 = var4[var7];
                    var7 = var5.bind(var3)(var7);
                    var9 = var7.prototype;
                    var9 = Object.create(var9, {constructor: {value: var7}});
                    var17 = var9;
                    var16 = var10;
                    var7 = new var17[var7](var16, var15);
                    var7 = var7 instanceof Object ? var7 : var9;
                    var9 = _closure1_slot0;
                    var8 = 8;
                    var8 = var4[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.captureOrIgnoreApiError;
                    var8 = var8.bind(var9)(var7);
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'PROFILE_EFFECTS_FETCH_ALL_FAILURE';
                    var4['type'] = var8;
                    var4['apiError'] = var7;
                    var4 = var5.bind(var6)(var4);
 506:
                    return var3;
 509:
                    return var2;
 512:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/ProfileEffectActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['maybeFetchAllProfileEffects'] = var2;
    return var1;
})();