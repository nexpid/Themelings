// app/modules/premium/ReferralTrialActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchReferralEligibleUsers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var8 = arg2;
                    var10 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var2 = global;
                    var4 = var2.JSON;
                    var3 = var4.stringify;
                    var2 = {};
                    var2['index'] = var9;
                    var2['searchQuery'] = var8;
                    var4 = var3.bind(var4)(var2);
                    var5 = _closure1_slot11;
                    var3 = var5.has;
                    var3 = var3.bind(var5)(var4);
                    if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var6 = var3.HTTP;
                    var5 = var6.post;
                    var3 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.GET_REFERRAL_ELIGIBLE_USERS;
                    var3['url'] = var7;
                    var7 = {};
                    var7['index'] = var9;
                    var9 = null;
                    var11 = var9 != var10;
                    var9 = 10;
                    if(!var11) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var9 = var10;
case 40:
                    var7['limit'] = var9;
                    var7['search_query'] = var8;
                    var3['body'] = var7;
                    var7 = true;
                    var3['oldFormErrors'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=179);
case 42:
                    return var3;
case 16:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var5 = var3.body;
                    var9 = var5.users;
                    var6 = var5.next_index;
                    var5 = {};
                    var8 = var9.map;
                    var7 = function(arg1) {
                        var3 = _closure1_slot6;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {constructor: {value: var3}});
                        var4 = arg1;
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    var5['users'] = var7;
                    var5['nextIndex'] = var6;
                    var7 = _closure1_slot11;
                    var6 = var7.set;
                    var6 = var6.bind(var7)(var4, var5);
                    return var5;
case 43:
                    return var3;
case 38:
                    var3 = _closure1_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var4);
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _createReferralTrials() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var5 = undefined;
                    var10 = undefined;
                    var2 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var6 = new Array(0);
                    var3 = global;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var22 = var4;
                    var3 = new var22[var3](var21);
                    var2 = var3 instanceof Object ? var3 : var4;
                    var7 = _closure1_slot12;
                    var4 = arg1;
                    var4 = var7.bind(var5)(var4);
                    var11 = var4;
                    var4 = var4.bind(var5)();
                    var10 = var4;
                    var4 = var4.done;
                    var9 = 8;
                    var8 = null;
                    var7 = 6;
                    if(var4) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var4 = var10;
                    var12 = var4.value;
case 49: // try_start_0
                    var15 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var15.bind(var5)(var4);
                    var16 = var4.HTTP;
                    var15 = var16.post;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var19 = _closure1_slot9;
                    var18 = var19.CREATE_REFERRAL;
                    var17 = var12;
                    var17 = var18.bind(var19)(var17);
                    var4['url'] = var17;
                    var4 = var15.bind(var16)(var4);
                    SaveGenerator(address=179);
case 42:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(var15) { _fun0005_ip = 50; continue _fun0005 }
case 44:
                    var15 = var4.body;
                    var13 = var15;
                    var16 = var8 != var15;
                    var15 = null;
                    if(!var16) { _fun0005_ip = 22; continue _fun0005 }
case 51:
                    var15 = var13;
case 22:
                    var14 = var15;
                    if(!(var8 != var15)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var17 = var6;
                    var16 = var17.push;
                    var15 = var14;
                    var15 = var16.bind(var17)(var15);
case 52:
                    var18 = var2;
                    var17 = var18.set;
                    var16 = var12;
                    var15 = _closure1_slot10;
                    var15 = var15.SUCCESS;
                    var15 = var17.bind(var18)(var16, var15);
case 54: // try_end0
                    _fun0005_ip = 55; continue _fun0005;
case 50:
                    return var4;
case 56: // catch_target0
                    CatchBlockStart(arg_register=15);
                    var15 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var15 = var15.bind(var5)(var4);
                    var4 = var15.captureException;
                    var4 = var4.bind(var15)(var16);
                    var17 = var2;
                    var16 = var17.set;
                    var15 = var12;
                    var4 = _closure1_slot10;
                    var4 = var4.FAIL;
                    var4 = var16.bind(var17)(var15, var4);
case 55:
                    var4 = var11;
                    var4 = var4.bind(var5)();
                    var10 = var4;
                    var4 = var4.done;
                    if(!var4) { _fun0005_ip = 48; continue _fun0005 }
case 47:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'CREATE_REFERRALS_SUCCESS';
                    var3['type'] = var7;
                    var3['userTrialOffers'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 45:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _createReferralTrial() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 57; continue _fun0006 }
case 46:
                    var10 = arg1;
                    var2 = undefined;
                    var8 = undefined;
                    var4 = undefined;
case 37: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 6;
                    var5 = var9[var5];
                    var5 = var7.bind(var2)(var5);
                    var9 = var5.HTTP;
                    var7 = var9.post;
                    var5 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var12 = _closure1_slot9;
                    var11 = var12.CREATE_REFERRAL;
                    var10 = var11.bind(var12)(var10);
                    var5['url'] = var10;
                    var5 = var7.bind(var9)(var5);
                    SaveGenerator(address=93);
case 58:
                    return var5;
case 59:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var9 = var5.body;
                    var8 = var9;
                    var7 = null;
                    var9 = var7 != var9;
                    if(!var9) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var7 = var8;
case 62:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 7;
                    var6 = var9[var6];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var10 = 'BILLING_CREATE_REFERRAL_SUCCESS';
                    var6['type'] = var10;
                    var6['userTrialOffer'] = var7;
                    var6 = var8.bind(var9)(var6);
                    var6 = {};
                    var6['userTrialOffer'] = var7;
case 64: // try_end0
                    return var6;
case 60:
                    return var5;
case 16: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var3 = var6;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 7;
                    var7 = var9[var7];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'BILLING_CREATE_REFERRAL_FAIL';
                    var7['type'] = var10;
                    var7 = var8.bind(var9)(var7);
                    var6 = var6.body;
                    var7 = var6.code;
                    var6 = _closure1_slot8;
                    var6 = var6.INVALID_MESSAGE_SEND_USER;
                    if(!(var7 === var6)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var7 = _closure1_slot7;
                    var6 = var7.getCurrentlySelectedChannelId;
                    var7 = var6.bind(var7)();
                    var4 = var7;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0006_ip = 65; continue _fun0006 }
case 67:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.sendClydeError;
                    var3 = var3.body;
                    var3 = var3.code;
                    var3 = var5.bind(var6)(var4, var3);
case 65:
                    return var2;
case 57:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _resolveReferralTrialOffer() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 46:
                    var6 = arg1;
                    var2 = undefined;
                    var7 = undefined;
case 68: // try_start_0
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 6;
                    var3 = var8[var3];
                    var3 = var5.bind(var2)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.get;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var11 = _closure1_slot9;
                    var10 = var11.REFERRAL_OFFER_ID_RESOLVE;
                    var9 = var6;
                    var9 = var10.bind(var11)(var9);
                    var3['url'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=93);
case 58:
                    return var3;
case 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    var8 = var3.body;
                    var7 = var8;
                    var5 = null;
                    var8 = var5 != var8;
                    if(!var8) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var5 = var7;
case 62:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'BILLING_REFERRAL_RESOLVE_SUCCESS';
                    var4['type'] = var9;
                    var4['userTrialOffer'] = var5;
                    var4 = var7.bind(var8)(var4);
                    var4 = {};
                    var4['userTrialOffer'] = var5;
case 64: // try_end0
                    return var4;
case 60:
                    return var3;
case 16: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'BILLING_REFERRAL_RESOLVE_FAIL';
                    var3['type'] = var7;
                    var3['userTrialOfferId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 21:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var8[var10];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var9 = 2;
    var4 = var8[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var6 = 3;
    var4 = var8[var6];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.AbortCodes;
    var _closure1_slot8 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var5 = {};
    var5['REDEEMED'] = var10;
    var4 = 'REDEEMED';
    var5[var10] = var4;
    var5['PENDING'] = var9;
    var4 = 'PENDING';
    var5[var9] = var4;
    var5['CONVERTED'] = var6;
    var4 = 'CONVERTED';
    var5[var6] = var4;
    var4 = {};
    var4['SUCCESS'] = var10;
    var6 = 'SUCCESS';
    var4[var10] = var6;
    var4['FAIL'] = var9;
    var6 = 'FAIL';
    var4[var9] = var6;
    var _closure1_slot10 = var4;
    var6 = function() {
        var4 = _closure1_slot5;
        var3 = function EligibleUserCache() {
            var3 = this;
            var4 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var4 = var2.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['cache'] = var4;
            var4 = var2.Date;
            var2 = var4.now;
            var4 = var2.bind(var4)();
            var2 = 600000;
            var2 = var4 + var2;
            var3['expiration'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'set';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1.cache;
            var3 = var4.set;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1._checkExpiration;
            var2 = var2.bind(var1)();
            var3 = var1.cache;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'has';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1._checkExpiration;
            var2 = var2.bind(var1)();
            var3 = var1.cache;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_checkExpiration';
        var1['key'] = var6;
        var5 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var3 = var1.expiration;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                if(!(var3 < var2)) { _fun0008_ip = 2; continue _fun0008 }
case 3:
                var2 = var1.cache;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var6.bind(var1)();
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot11 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/ReferralTrialActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ReferralOfferStatus'] = var5;
    var3['CreateReferralStatus'] = var4;
    var4 = function fetchReferralEligibleUsers() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchReferralEligibleUsers'] = var4;
    var4 = function() {
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var3 = var7.dispatch;
        var2 = {};
        var8 = 'BILLING_REFERRALS_REMAINING_FETCH_START';
        var2['type'] = var8;
        var2 = var3.bind(var7)(var2);
        var3 = _closure1_slot0;
        var2 = 6;
        var2 = var6[var2];
        var2 = var3.bind(var4)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var5 = _closure1_slot9;
        var5 = var5.GET_REFERRALS_REMAINING;
        var2['url'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var1 = global;
                var1 = var1.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var14 = var2;
                var1 = new var14[var1](var13);
                var6 = var1 instanceof Object ? var1 : var2;
                var1 = var5.body;
                var7 = null;
                if(!(var7 != var1)) { _fun0009_ip = 63; continue _fun0009 }
case 69:
                var1 = var5.body;
                var1 = var1.recipient_status;
                if(!(var7 != var1)) { _fun0009_ip = 63; continue _fun0009 }
case 70:
                var1 = var5.body;
                var4 = var1.recipient_status;
                for(var1 in var4)
case 71:
                {
case 72:
                    var11 = var1;
                    var9 = var5.body;
                    var9 = var9.recipient_status;
                    var10 = var9[var11];
                    var9 = var6.set;
                    var9 = var9.bind(var6)(var11, var10);
                    _fun0009_ip = 71; continue _fun0009;
                }
case 63:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var8 = 'BILLING_REFERRALS_REMAINING_FETCH_SUCCESS';
                var2['type'] = var8;
                var8 = var5.body;
                var9 = var7 != var8;
                var8 = 0;
                if(!var9) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                var9 = var5.body;
                var9 = var9.referrals_remaining;
                var9 = var7 != var9;
                var8 = 0;
                if(!var9) { _fun0009_ip = 73; continue _fun0009 }
case 75:
                var9 = var5.body;
                var8 = var9.referrals_remaining;
case 73:
                var2['referrals_remaining'] = var8;
                var8 = var5.body;
                if(!(var7 != var8)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                var8 = var5.body;
                var8 = var8.sent_user_ids;
                if(!(var7 == var8)) { _fun0009_ip = 78; continue _fun0009 }
case 76:
                var8 = new Array(0);
                _fun0009_ip = 18; continue _fun0009;
case 78:
                var9 = var5.body;
                var8 = var9.sent_user_ids;
case 18:
                var2['sent_user_ids'] = var8;
                var9 = var5.body;
                var10 = var7 == var9;
                var8 = undefined;
                if(var10) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                var8 = var9.refresh_at;
case 79:
                var9 = var7 != var8;
                var7 = null;
                if(!var9) { _fun0009_ip = 81; continue _fun0009 }
case 10:
                var7 = var8;
case 81:
                var2['refresh_at'] = var7;
                var2['recipient_status'] = var6;
                var5 = var5.body;
                var5 = var5.has_eligible_friends;
                var2['has_eligible_friends'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                var3 = var2.status;
case 82:
                var2 = 404;
                if(!(var2 !== var3)) { _fun0010_ip = 71; continue _fun0010 }
case 84:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'BILLING_REFERRALS_REMAINING_FETCH_FAIL';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
case 71:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['fetchReferralsRemaining'] = var4;
    var4 = function createReferralTrials() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createReferralTrials'] = var4;
    var4 = function createReferralTrial() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createReferralTrial'] = var4;
    var2 = function resolveReferralTrialOffer() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['resolveReferralTrialOffer'] = var2;
    return var1;
})();