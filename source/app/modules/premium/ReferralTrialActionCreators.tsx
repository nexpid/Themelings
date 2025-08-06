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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
 0:
                    StartGenerator();
                    var9 = arg1;
                    var8 = arg2;
                    var10 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 271; continue _fun0004 }
 19:
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
                    if(var3) { _fun0004_ip = 254; continue _fun0004 }
 72:
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
                    if(!var11) { _fun0004_ip = 142; continue _fun0004 }
 139:
                    var9 = var10;
 142:
                    var7['limit'] = var9;
                    var7['search_query'] = var8;
                    var3['body'] = var7;
                    var7 = true;
                    var3['oldFormErrors'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=179);
 177:
                    return var3;
 179:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 251; continue _fun0004 }
 185:
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
 251:
                    return var3;
 254:
                    var3 = _closure1_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var4);
                    return var2;
 271:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 388; continue _fun0005 }
 10:
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
                    if(var4) { _fun0005_ip = 338; continue _fun0005 }
 100:
                    var4 = var10;
                    var12 = var4.value;
 108: // try_start_0
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
 177:
                    return var4;
 179:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=14);
                    if(var15) { _fun0005_ip = 257; continue _fun0005 }
 185:
                    var15 = var4.body;
                    var13 = var15;
                    var16 = var8 != var15;
                    var15 = null;
                    if(!var16) { _fun0005_ip = 205; continue _fun0005 }
 202:
                    var15 = var13;
 205:
                    var14 = var15;
                    if(!(var8 != var15)) { _fun0005_ip = 228; continue _fun0005 }
 212:
                    var17 = var6;
                    var16 = var17.push;
                    var15 = var14;
                    var15 = var16.bind(var17)(var15);
 228:
                    var18 = var2;
                    var17 = var18.set;
                    var16 = var12;
                    var15 = _closure1_slot10;
                    var15 = var15.SUCCESS;
                    var15 = var17.bind(var18)(var16, var15);
 255: // try_end0
                    _fun0005_ip = 317; continue _fun0005;
 257:
                    return var4;
 260: // catch_target0
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
 317:
                    var4 = var11;
                    var4 = var4.bind(var5)();
                    var10 = var4;
                    var4 = var4.done;
                    if(!var4) { _fun0005_ip = 100; continue _fun0005 }
 338:
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
 388:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 321; continue _fun0006 }
 10:
                    var10 = arg1;
                    var2 = undefined;
                    var8 = undefined;
                    var4 = undefined;
 19: // try_start_0
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
 91:
                    return var5;
 93:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 176; continue _fun0006 }
 99:
                    var9 = var5.body;
                    var8 = var9;
                    var7 = null;
                    var9 = var7 != var9;
                    if(!var9) { _fun0006_ip = 119; continue _fun0006 }
 116:
                    var7 = var8;
 119:
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
 173: // try_end0
                    return var6;
 176:
                    return var5;
 179: // catch_target0
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
                    if(!(var7 === var6)) { _fun0006_ip = 318; continue _fun0006 }
 253:
                    var7 = _closure1_slot7;
                    var6 = var7.getCurrentlySelectedChannelId;
                    var7 = var6.bind(var7)();
                    var4 = var7;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0006_ip = 318; continue _fun0006 }
 276:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.sendClydeError;
                    var3 = var3.body;
                    var3 = var3.code;
                    var3 = var5.bind(var6)(var4, var3);
 318:
                    return var2;
 321:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 234; continue _fun0007 }
 10:
                    var6 = arg1;
                    var2 = undefined;
                    var7 = undefined;
 17: // try_start_0
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
 91:
                    return var3;
 93:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 176; continue _fun0007 }
 99:
                    var8 = var3.body;
                    var7 = var8;
                    var5 = null;
                    var8 = var5 != var8;
                    if(!var8) { _fun0007_ip = 119; continue _fun0007 }
 116:
                    var5 = var7;
 119:
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
 173: // try_end0
                    return var4;
 176:
                    return var3;
 179: // catch_target0
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
 234:
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
 0:
                var1 = this;
                var3 = var1.expiration;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                if(!(var3 < var2)) { _fun0008_ip = 46; continue _fun0008 }
 30:
                var2 = var1.cache;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
 46:
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
 0:
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
                if(!(var7 != var1)) { _fun0009_ip = 116; continue _fun0009 }
 42:
                var1 = var5.body;
                var1 = var1.recipient_status;
                if(!(var7 != var1)) { _fun0009_ip = 116; continue _fun0009 }
 57:
                var1 = var5.body;
                var4 = var1.recipient_status;
                for(var1 in var4)
 76:
                {
 85:
                    var11 = var1;
                    var9 = var5.body;
                    var9 = var9.recipient_status;
                    var10 = var9[var11];
                    var9 = var6.set;
                    var9 = var9.bind(var6)(var11, var10);
                    _fun0009_ip = 76; continue _fun0009;
                }
 116:
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
                if(!var9) { _fun0009_ip = 203; continue _fun0009 }
 172:
                var9 = var5.body;
                var9 = var9.referrals_remaining;
                var9 = var7 != var9;
                var8 = 0;
                if(!var9) { _fun0009_ip = 203; continue _fun0009 }
 192:
                var9 = var5.body;
                var8 = var9.referrals_remaining;
 203:
                var2['referrals_remaining'] = var8;
                var8 = var5.body;
                if(!(var7 != var8)) { _fun0009_ip = 232; continue _fun0009 }
 217:
                var8 = var5.body;
                var8 = var8.sent_user_ids;
                if(!(var7 == var8)) { _fun0009_ip = 238; continue _fun0009 }
 232:
                var8 = new Array(0);
                _fun0009_ip = 249; continue _fun0009;
 238:
                var9 = var5.body;
                var8 = var9.sent_user_ids;
 249:
                var2['sent_user_ids'] = var8;
                var9 = var5.body;
                var10 = var7 == var9;
                var8 = undefined;
                if(var10) { _fun0009_ip = 274; continue _fun0009 }
 268:
                var8 = var9.refresh_at;
 274:
                var9 = var7 != var8;
                var7 = null;
                if(!var9) { _fun0009_ip = 286; continue _fun0009 }
 283:
                var7 = var8;
 286:
                var2['refresh_at'] = var7;
                var2['recipient_status'] = var6;
                var5 = var5.body;
                var5 = var5.has_eligible_friends;
                var2['has_eligible_friends'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'BILLING_REFERRALS_REMAINING_FETCH_FAIL';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
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