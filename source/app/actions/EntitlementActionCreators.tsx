// app/actions/EntitlementActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchUserEntitlements() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = var2.withSku;
                    var3 = undefined;
                    if(!(var5 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = false;
case 4:
                    var13 = var5;
                    var5 = var2.withApplication;
                    if(!(var5 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = false;
case 6:
                    var12 = var5;
                    var5 = var2.excludeEnded;
                    if(!(var5 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = true;
case 8:
                    var10 = var5;
                    var11 = var2.entitlementType;
                    SaveGenerator(address=72);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 2;
                    var5 = var5[var6];
                    var8 = var7.bind(var3)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var9 = 'ENTITLEMENTS_FETCH_FOR_USER_START';
                    var5['type'] = var9;
                    var5 = var7.bind(var8)(var5);
case 14: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 3;
                    var5 = var8[var5];
                    var5 = var7.bind(var3)(var5);
                    var8 = var5.HTTP;
                    var7 = var8.get;
                    var5 = {};
                    var9 = _closure1_slot4;
                    var9 = var9.ENTITLEMENTS_FOR_USER;
                    var5['url'] = var9;
                    var9 = {};
                    var9['with_sku'] = var13;
                    var9['with_application'] = var12;
                    var9['entitlement_type'] = var11;
                    var11 = var10;
                    var9['exclude_ended'] = var11;
                    var5['query'] = var9;
                    var9 = true;
                    var5['rejectWithError'] = var9;
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=221);
case 15:
                    return var5;
case 16:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS';
                    var7['type'] = var11;
                    var11 = var5.body;
                    var7['entitlements'] = var11;
                    var7['excludeEnded'] = var10;
                    var7 = var8.bind(var9)(var7);
case 19: // try_end0
                    _fun0001_ip = 20; continue _fun0001;
case 17:
                    return var5;
case 21: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'ENTITLEMENTS_FETCH_FOR_USER_FAIL';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
case 20:
                    return var3;
case 12:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _fetchGiftableEntitlements() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 2;
                    var4 = var2[var5];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'ENTITLEMENTS_GIFTABLE_FETCH';
                    var4['type'] = var8;
                    var4 = var6.bind(var7)(var4);
case 9: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.httpGetWithCountryCodeQuery;
                    var4 = {};
                    var8 = _closure1_slot4;
                    var8 = var8.ENTITLEMENTS_GIFTABLE;
                    var4['url'] = var8;
                    var8 = true;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=114);
case 24:
                    return var4;
case 25:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS';
                    var6['type'] = var9;
                    var9 = var4.body;
                    var6['entitlements'] = var9;
                    var6 = var7.bind(var8)(var6);
case 28: // try_end0
                    _fun0002_ip = 29; continue _fun0002;
case 26:
                    return var4;
case 30: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 29:
                    return var2;
case 22:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/EntitlementActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchUserEntitlementsForApplication(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var7 = arguments[1];
            var _closure2_slot0 = var8;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var7 = true;
case 31:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var3 = var9.wait;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'ENTITLEMENT_FETCH_APPLICATION_START';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var9)(var2);
            var3 = _closure1_slot0;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {};
            var6 = _closure1_slot4;
            var5 = var6.ENTITLEMENTS_FOR_APPLICATION;
            var5 = var5.bind(var6)(var8);
            var2['url'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var6 = {};
            var6['exclude_consumed'] = var7;
            var2['query'] = var6;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['applicationId'] = var5;
                var5 = var1.body;
                var2['entitlements'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = var1.body;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'ENTITLEMENT_FETCH_APPLICATION_FAIL';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['fetchUserEntitlementsForApplication'] = var4;
    var4 = function fetchUserEntitlements() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchUserEntitlements'] = var4;
    var2 = function fetchGiftableEntitlements() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGiftableEntitlements'] = var2;
    return var1;
})();