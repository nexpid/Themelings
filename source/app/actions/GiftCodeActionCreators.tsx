// app/actions/GiftCodeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function resolveGiftCode() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _resolveGiftCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var8 = arguments[1];
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = arg1;
                    var6 = undefined;
                    if(!(var8 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = false;
case 4:
                    var5 = var8;
                    if(!(var2 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var2 = false;
case 6:
                    var3 = var2;
                    var10 = undefined;
                    SaveGenerator(address=45);
case 8:
                    return var6;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var8 = 4;
                    var9 = var9[var8];
                    var12 = var11.bind(var6)(var9);
                    var11 = var12.dispatch;
                    var9 = {};
                    var13 = 'GIFT_CODE_RESOLVE';
                    var9['type'] = var13;
                    var13 = var7;
                    var9['code'] = var13;
                    var9 = var11.bind(var12)(var9);
case 12: // try_start_1
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 5;
                    var9 = var12[var9];
                    var12 = var11.bind(var6)(var9);
                    var11 = var12.resolveGiftCode;
                    var9 = var7;
                    var3 = var11.bind(var12)(var9, var5, var3);
                    SaveGenerator(address=144);
case 13:
                    return var3;
case 14:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var10 = var3;
                    var5 = var3.application_id;
                    var9 = null;
                    if(!(var9 != var5)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var5 = var10;
                    var11 = var5.application_id;
                    var5 = _closure1_slot8;
                    if(!(var11 !== var5)) { _fun0001_ip = 17; continue _fun0001 }
case 19:
                    var12 = _closure1_slot4;
                    var11 = var12.getApplication;
                    var5 = var10;
                    var5 = var5.application_id;
                    var5 = var11.bind(var12)(var5);
                    if(!(var9 == var5)) { _fun0001_ip = 17; continue _fun0001 }
case 20: // try_start_0
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 6;
                    var5 = var11[var5];
                    var11 = var9.bind(var6)(var5);
                    var9 = var11.fetchApplication;
                    var5 = var10;
                    var5 = var5.application_id;
                    var5 = var9.bind(var11)(var5);
                    SaveGenerator(address=257);
case 21:
                    return var5;
case 22:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 23; continue _fun0001 }
case 24: // try_end0
                    _fun0001_ip = 17; continue _fun0001;
case 23: // try_end1
                    return var5;
case 25: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=4);
case 17:
                    var5 = var10;
                    var9 = var5.application_id;
                    var5 = _closure1_slot5;
                    if(!(var9 === var5)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 7;
                    var5 = var11[var5];
                    var11 = var9.bind(var6)(var5);
                    var9 = var11.fetchCollectiblesProduct;
                    var5 = var10;
                    var5 = var5.sku_id;
                    var5 = var9.bind(var11)(var5);
                    SaveGenerator(address=331);
case 28:
                    return var5;
case 29:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 30; continue _fun0001 }
case 26:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var8];
                    var12 = var11.bind(var6)(var9);
                    var11 = var12.dispatch;
                    var9 = {};
                    var13 = 'GIFT_CODE_RESOLVE_SUCCESS';
                    var9['type'] = var13;
                    var9['giftCode'] = var10;
                    var9 = var11.bind(var12)(var9);
                    var9 = {};
                    var9['giftCode'] = var10;
case 31: // try_end2
                    return var9;
case 30:
                    return var5;
case 15:
                    return var3;
case 32: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GIFT_CODE_RESOLVE_FAILURE';
                    var4['type'] = var8;
                    var4['code'] = var7;
                    var4['error'] = var3;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 10:
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
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot5 = var8;
    var8 = var4.Endpoints;
    var _closure1_slot6 = var8;
    var4 = var4.RPCCommands;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot8 = var4;
    var4 = {};
    var4['resolveGiftCode'] = var2;
    var8 = function fetchUserGiftCodesForSKU(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var3 = null;
case 33:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 4;
                        var4 = var2[var5];
                        var2 = undefined;
                        var8 = var6.bind(var2)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var6 = 'GIFT_CODES_FETCH';
                        var4['type'] = var6;
                        var9 = _closure2_slot0;
                        var4['skuId'] = var9;
                        var9 = _closure2_slot1;
                        var4['subscriptionPlanId'] = var9;
                        var4 = var7.bind(var8)(var4);
case 37: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 8;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var8 = var4.HTTP;
                        var7 = var8.get;
                        var4 = {};
                        var9 = _closure1_slot6;
                        var9 = var9.USER_GIFT_CODES;
                        var4['url'] = var9;
                        var9 = {};
                        var10 = _closure2_slot0;
                        var9['sku_id'] = var10;
                        var10 = _closure2_slot1;
                        var9['subscription_plan_id'] = var10;
                        var4['query'] = var9;
                        var9 = true;
                        var4['oldFormErrors'] = var9;
                        var4['rejectWithError'] = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=169);
case 38:
                        return var4;
case 39:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'GIFT_CODES_FETCH_SUCCESS';
                        var7['type'] = var10;
                        var10 = var4.body;
                        var7['giftCodes'] = var10;
                        var10 = _closure2_slot0;
                        var7['skuId'] = var10;
                        var10 = _closure2_slot1;
                        var7['subscriptionPlanId'] = var10;
                        var7 = var8.bind(var9)(var7);
case 42: // try_end0
                        _fun0003_ip = 43; continue _fun0003;
case 40:
                        return var4;
case 44: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GIFT_CODES_FETCH_FAILURE';
                        var3['type'] = var7;
                        var7 = _closure2_slot0;
                        var3['skuId'] = var7;
                        var6 = _closure2_slot1;
                        var3['subscriptionPlanId'] = var6;
                        var3 = var4.bind(var5)(var3);
case 43:
                        return var2;
case 35:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var4['fetchUserGiftCodesForSKU'] = var8;
    var8 = function createGiftCode(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arguments[1];
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var4 = null;
case 45:
            var _closure2_slot1 = var4;
            if(!(var3 === var2)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var3 = null;
case 47:
            var _closure2_slot2 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 36:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 4;
                        var4 = var2[var5];
                        var2 = undefined;
                        var8 = var6.bind(var2)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var6 = 'GIFT_CODE_CREATE_START';
                        var4['type'] = var6;
                        var9 = _closure2_slot0;
                        var4['skuId'] = var9;
                        var9 = _closure2_slot1;
                        var4['subscriptionPlanId'] = var9;
                        var4 = var7.bind(var8)(var4);
case 37: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 8;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var8 = var4.HTTP;
                        var7 = var8.post;
                        var4 = {};
                        var9 = _closure1_slot6;
                        var9 = var9.USER_GIFT_CODE_CREATE;
                        var4['url'] = var9;
                        var9 = {};
                        var10 = _closure2_slot0;
                        var9['sku_id'] = var10;
                        var10 = _closure2_slot1;
                        var9['subscription_plan_id'] = var10;
                        var10 = _closure2_slot2;
                        var9['gift_style'] = var10;
                        var4['body'] = var9;
                        var9 = true;
                        var4['oldFormErrors'] = var9;
                        var4['rejectWithError'] = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=178);
case 49:
                        return var4;
case 50:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'GIFT_CODE_CREATE_SUCCESS';
                        var7['type'] = var10;
                        var10 = var4.body;
                        var7['giftCode'] = var10;
                        var7 = var8.bind(var9)(var7);
                        var7 = var4.body;
case 53: // try_end0
                        return var7;
case 51:
                        return var4;
case 40: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GIFT_CODE_CREATE_FAILURE';
                        var3['type'] = var7;
                        var7 = _closure2_slot0;
                        var3['skuId'] = var7;
                        var6 = _closure2_slot1;
                        var3['subscriptionPlanId'] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
case 43:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var4['createGiftCode'] = var8;
    var8 = function revokeGiftCode(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 36:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 4;
                    var4 = var2[var5];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var6 = 'GIFT_CODE_REVOKE';
                    var4['type'] = var6;
                    var9 = _closure2_slot0;
                    var4['code'] = var9;
                    var4 = var7.bind(var8)(var4);
case 55: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 8;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.del;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var11 = _closure1_slot6;
                    var10 = var11.USER_GIFT_CODE_REVOKE;
                    var9 = _closure2_slot0;
                    var9 = var10.bind(var11)(var9);
                    var4['url'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=143);
case 56:
                    return var4;
case 57:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'GIFT_CODE_REVOKE_SUCCESS';
                    var7['type'] = var10;
                    var10 = _closure2_slot0;
                    var7['code'] = var10;
                    var7 = var8.bind(var9)(var7);
case 60: // try_end0
                    _fun0006_ip = 61; continue _fun0006;
case 58:
                    return var4;
case 62: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GIFT_CODE_REVOKE_FAILURE';
                    var3['type'] = var7;
                    var6 = _closure2_slot0;
                    var3['code'] = var6;
                    var3 = var4.bind(var5)(var3);
case 61:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['revokeGiftCode'] = var8;
    var5 = function openNativeGiftCodeModal(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openNativeAppModal;
        var2 = _closure1_slot7;
        var3 = var2.GIFT_CODE_BROWSER;
        var2 = arg1;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var4['openNativeGiftCodeModal'] = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var12 = var5.default;
    var13 = var4;
    var5 = copyDataProperties(var13, var12);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/GiftCodeActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['resolveGiftCode'] = var2;
    return var1;
})();