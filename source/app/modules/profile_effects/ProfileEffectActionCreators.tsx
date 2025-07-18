// app/modules/profile_effects/ProfileEffectActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = function parseProfileEffectConfigResponse(arg1) {
        var3 = arg1;
        var4 = var3.sku_id;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['sku_id'] = var1;
        var7 = {};
        var6 = var3;
        var5 = var2;
        var3 = copyDataProperties(var7, var6, var5);
        var1 = {};
        var2 = var3.id;
        var1['id'] = var2;
        var1['skuId'] = var4;
        var2 = {};
        var7 = var2;
        var6 = var3;
        var3 = copyDataProperties(var7, var6);
        var3 = 'skuId';
        var2[var3] = var4;
        var1['config'] = var2;
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var4 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 415; continue _fun0001 }
 13:
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 21; continue _fun0001 }
 19:
                    var4 = false;
 21:
                    var5 = undefined;
                    SaveGenerator(address=27);
 25:
                    return var3;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 412; continue _fun0001 }
 36:
                    if(var4) { _fun0001_ip = 62; continue _fun0001 }
 39:
                    var6 = _closure1_slot4;
                    var4 = var6.hasFetched;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0001_ip = 409; continue _fun0001 }
 62:
                    var4 = _closure1_slot4;
                    var4 = var4.isFetching;
                    if(var4) { _fun0001_ip = 409; continue _fun0001 }
 81:
                    var6 = _closure1_slot4;
                    var4 = var6.canFetch;
                    var4 = var4.bind(var6)();
                    if(!var4) { _fun0001_ip = 409; continue _fun0001 }
 103:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 3;
                    var4 = var4[var6];
                    var9 = var7.bind(var3)(var4);
                    var7 = var9.dispatch;
                    var4 = {};
                    var10 = 'USER_PROFILE_EFFECTS_FETCH';
                    var4['type'] = var10;
                    var4 = var7.bind(var9)(var4);
 145: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var4 = var9[var4];
                    var4 = var7.bind(var3)(var4);
                    var9 = var4.HTTP;
                    var7 = var9.get;
                    var4 = {};
                    var10 = _closure1_slot5;
                    var10 = var10.USER_PROFILE_EFFECTS;
                    var4['url'] = var10;
                    var10 = false;
                    var4['rejectWithError'] = var10;
                    var4 = var7.bind(var9)(var4);
                    SaveGenerator(address=206);
 204:
                    return var4;
 206:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 299; continue _fun0001 }
 212:
                    var9 = var4.body;
                    var5 = var9;
                    var7 = null;
                    var7 = var7 == var9;
                    var9 = undefined;
                    if(var7) { _fun0001_ip = 239; continue _fun0001 }
 231:
                    var9 = var5.profile_effect_configs;
 239:
                    var7 = var9.map;
                    var5 = _closure1_slot6;
                    var10 = var7.bind(var9)(var5);
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var6];
                    var9 = var7.bind(var3)(var5);
                    var7 = var9.dispatch;
                    var5 = {};
                    var11 = 'USER_PROFILE_EFFECTS_FETCH_SUCCESS';
                    var5['type'] = var11;
                    var5['profileEffects'] = var10;
                    var5 = var7.bind(var9)(var5);
 297: // try_end0
                    _fun0001_ip = 409; continue _fun0001;
 299:
                    return var4;
 302: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var7 = 5;
                    var7 = var4[var7];
                    var7 = var5.bind(var3)(var7);
                    var9 = var7.prototype;
                    var9 = Object.create(var9, {constructor: {value: var7}});
                    var13 = var9;
                    var12 = var10;
                    var7 = new var13[var7](var12, var11);
                    var7 = var7 instanceof Object ? var7 : var9;
                    var9 = _closure1_slot0;
                    var8 = 6;
                    var8 = var4[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.captureOrIgnoreApiError;
                    var8 = var8.bind(var9)(var7);
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'USER_PROFILE_EFFECTS_FETCH_FAILURE';
                    var4['type'] = var8;
                    var4['error'] = var7;
                    var4 = var5.bind(var6)(var4);
 409:
                    return var3;
 412:
                    return var2;
 415:
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
    var4 = var4.bind(var1)();
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/profile_effects/ProfileEffectActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['fetchUserProfileEffects'] = var4;
    var2 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PROFILE_EFFECTS_SET_TRY_IT_OUT';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setProfileEffectsTryItOut'] = var2;
    return var1;
})();