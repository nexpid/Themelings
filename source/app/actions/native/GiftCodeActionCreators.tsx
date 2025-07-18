// app/actions/native/GiftCodeActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var2 = function redeemGiftCode() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _redeemGiftCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 654; continue _fun0001 }
 13:
                    var14 = var2.code;
                    var7 = var2.options;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0001_ip = 36; continue _fun0001 }
 29:
                    var7 = _closure1_slot6;
 36:
                    var10 = var2.onRedeemed;
                    var6 = var2.onError;
                    var17 = undefined;
                    var18 = undefined;
                    var11 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=60);
 58:
                    return var3;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 651; continue _fun0001 }
 69:
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 2;
                    var8 = var12[var8];
                    var13 = var9.bind(var3)(var8);
                    var12 = var13.getCurrentConfig;
                    var9 = {};
                    var8 = 'redeemGiftCode';
                    var9['location'] = var8;
                    var8 = {};
                    var15 = false;
                    var8['autoTrackExposure'] = var15;
                    var8 = var12.bind(var13)(var9, var8);
                    var8 = var8.paymentsBlocked;
                    if(var8) { _fun0001_ip = 624; continue _fun0001 }
 135:
                    var12 = var7.channelId;
                    var8 = null;
                    var9 = null;
                    if(!(var3 !== var12)) { _fun0001_ip = 151; continue _fun0001 }
 148:
                    var9 = var12;
 151:
                    var17 = var9;
                    var9 = var7.paymentSource;
                    var7 = null;
                    if(!(var3 !== var9)) { _fun0001_ip = 169; continue _fun0001 }
 166:
                    var7 = var9;
 169:
                    var18 = var7;
                    var12 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var9 = var9[var7];
                    var13 = var12.bind(var3)(var9);
                    var12 = var13.dispatch;
                    var9 = {};
                    var16 = 'GIFT_CODE_REDEEM';
                    var9['type'] = var16;
                    var16 = var14;
                    var9['code'] = var16;
                    var9 = var12.bind(var13)(var9);
 219: // try_start_0
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 5;
                    var9 = var13[var9];
                    var9 = var12.bind(var3)(var9);
                    var13 = var9.HTTP;
                    var12 = var13.post;
                    var9 = {};
                    var20 = _closure1_slot4;
                    var19 = var20.GIFT_CODE_REDEEM;
                    var16 = var14;
                    var16 = var19.bind(var20)(var16);
                    var9['url'] = var16;
                    var16 = {};
                    var16['channel_id'] = var17;
                    var17 = var18;
                    var19 = var8 == var17;
                    var17 = undefined;
                    if(var19) { _fun0001_ip = 297; continue _fun0001 }
 292:
                    var17 = var18.id;
 297:
                    var16['payment_source_id'] = var17;
                    var9['body'] = var16;
                    var16 = true;
                    var9['oldFormErrors'] = var16;
                    var9['rejectWithError'] = var15;
                    var9 = var12.bind(var13)(var9);
                    SaveGenerator(address=326);
 324:
                    return var9;
 326:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 457; continue _fun0001 }
 335:
                    var11 = var9;
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = var15[var7];
                    var17 = var13.bind(var3)(var12);
                    var16 = var17.dispatch;
                    var12 = {};
                    var18 = 'GIFT_CODE_REDEEM_SUCCESS';
                    var12['type'] = var18;
                    var18 = var14;
                    var12['code'] = var18;
                    var12 = var16.bind(var17)(var12);
                    var12 = 6;
                    var12 = var15[var12];
                    var16 = var13.bind(var3)(var12);
                    var15 = var16.track;
                    var12 = _closure1_slot5;
                    var13 = var12.OPEN_MODAL;
                    var12 = {};
                    var17 = 'gift_accept';
                    var12['type'] = var17;
                    var12 = var15.bind(var16)(var13, var12);
                    var12 = var10;
                    if(!(var8 != var12)) { _fun0001_ip = 440; continue _fun0001 }
 436:
                    var10 = var10.bind(var3)();
 440:
                    var10 = {};
                    var12 = var14;
                    var10['code'] = var12;
                    var10['entitlement'] = var11;
 454: // try_end0
                    return var10;
 457:
                    return var9;
 460: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var9 = 7;
                    var9 = var10[var9];
                    var9 = var11.bind(var3)(var9);
                    var9 = var9.BillingError;
                    var11 = var9.prototype;
                    var11 = Object.create(var11, {constructor: {value: var9}});
                    var23 = var11;
                    var22 = var12;
                    var9 = new var23[var9](var22, var21);
                    var13 = var9 instanceof Object ? var9 : var11;
                    var5 = var13;
                    var9 = _closure1_slot1;
                    var7 = var10[var7];
                    var12 = var9.bind(var3)(var7);
                    var11 = var12.dispatch;
                    var7 = {};
                    var15 = 'GIFT_CODE_REDEEM_FAILURE';
                    var7['type'] = var15;
                    var7['code'] = var14;
                    var7['error'] = var13;
                    var7 = var11.bind(var12)(var7);
                    var7 = 6;
                    var7 = var10[var7];
                    var11 = var9.bind(var3)(var7);
                    var10 = var11.track;
                    var7 = _closure1_slot5;
                    var9 = var7.OPEN_MODAL;
                    var7 = {'type': 'gift_accept', 'location': null};
                    var7 = var10.bind(var11)(var9, var7);
                    var7 = var6;
                    if(!(var8 != var7)) { _fun0001_ip = 622; continue _fun0001 }
 611:
                    var7 = var6;
                    var6 = var5;
                    var6 = var7.bind(var3)(var6);
 622:
                    throw var5;
 624:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.bind(var3)();
                    return var3;
 651:
                    return var2;
 654:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.Endpoints;
    var _closure1_slot4 = var9;
    var8 = var8.AnalyticEvents;
    var _closure1_slot5 = var8;
    var9 = var4.Object;
    var8 = var9.freeze;
    var4 = {};
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var4['redeemGiftCode'] = var2;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/native/GiftCodeActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['redeemGiftCode'] = var2;
    return var1;
})();