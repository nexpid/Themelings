// app/modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function OrbCheckoutModalContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.orbBalance;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useOrbCheckoutModalContext;
            var1 = var1.bind(var3)();
            var14 = var1.orbProductContext;
            var11 = var1.orbRedemptionError;
            var3 = _closure1_slot12;
            var1 = 5;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var12 = null;
            var7 = var12 != var11;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot11;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 6;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.OrbCheckoutErrorCard;
            var5 = {};
            var11 = var11.message;
            var5['error'] = var11;
            var7 = var10.bind(var4)(var8, var5);
case 2:
            var5 = new Array(3);
            var5[0] = var7;
            var11 = _closure1_slot11;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 6;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.OrbCheckoutOrderSummary;
            var7 = {};
            var15 = var12 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var14.product;
case 4:
            var14 = var12 != var13;
            var12 = null;
            if(!var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var13;
case 6:
            var7['product'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.OrbCheckoutPaymentSourceDetails;
            var6 = {};
            var6['orbBalance'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useRef;
    var _closure1_slot4 = var7;
    var7 = var4.useEffect;
    var _closure1_slot5 = var7;
    var7 = var4.useCallback;
    var _closure1_slot6 = var7;
    var4 = var4.useMemo;
    var _closure1_slot7 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var4 = var4.CurrencyCodes;
    var _closure1_slot9 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InternalPaymentGateways;
    var _closure1_slot10 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'MAIN';
    var4['MAIN'] = var7;
    var _closure1_slot13 = var4;
    var4 = function OrbCheckoutModalFooter(arg1) {
        var1 = arg1;
        var9 = var1.onPress;
        var4 = _closure1_slot12;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 5;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.Stack;
        var1 = {};
        var12 = _closure1_slot11;
        var6 = 6;
        var5 = var10[var6];
        var5 = var7.bind(var3)(var5);
        var11 = var5.OrbCheckoutLegalFinePrint;
        var5 = {};
        var11 = var12.bind(var3)(var11, var5);
        var5 = new Array(2);
        var5[0] = var11;
        var8 = _closure1_slot11;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.OrbCheckoutPurchaseButton;
        var6 = {};
        var6['onPress'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var4 = function OrbCheckoutModalScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var7 = var2.startTime;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var4 = undefined;
            var3 = var6.bind(var4)(var2);
            var2 = var3.useOrbCheckoutModalContext;
            var2 = var2.bind(var3)();
            var5 = var2.onRedeemVirtualCurrency;
            var _closure2_slot0 = var5;
            var3 = var2.orbRedemptionError;
            var _closure2_slot1 = var3;
            var2 = function(arg1) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = var4.useOrbCheckoutModalContext;
                var1 = var1.bind(var4)();
                var9 = var1.skuId;
                var _closure3_slot1 = var9;
                var10 = var1.loadId;
                var _closure3_slot2 = var10;
                var8 = var1.analyticsLocations;
                var _closure3_slot3 = var8;
                var1 = var1.orbProductContext;
                var _closure3_slot4 = var1;
                var6 = _closure1_slot7;
                var4 = new Array(4);
                var4[0] = var10;
                var4[1] = var9;
                var4[2] = var8;
                var4[3] = var1;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = {};
                        var2 = _closure3_slot2;
                        var1['load_id'] = var2;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 7;
                        var3 = var4[var3];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.getApplicationIdForOrbSKU;
                        var3 = _closure3_slot1;
                        var6 = var6.bind(var7)(var3);
                        var1['application_id'] = var6;
                        var6 = _closure3_slot3;
                        var1['location_stack'] = var6;
                        var1['sku_id'] = var3;
                        var3 = _closure1_slot9;
                        var3 = var3.DISCORD_ORB;
                        var1['currency'] = var3;
                        var2 = _closure1_slot10;
                        var2 = var2.VIRTUAL_CURRENCY;
                        var1['payment_gateway'] = var2;
                        var2 = _closure3_slot4;
                        var6 = null;
                        var2 = var6 != var2;
                        if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var3 = {};
                        var7 = _closure3_slot4;
                        var8 = var7.orbPriceAmount;
                        var9 = var6 != var8;
                        var7 = undefined;
                        if(!var9) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var7 = var8;
case 10:
                        var3['price'] = var7;
                        var5 = _closure3_slot4;
                        var5 = var5.orbPriceAmount;
                        var6 = var6 != var5;
                        var4 = undefined;
                        if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var4 = var5;
case 12:
                        var3['regular_price'] = var4;
                        var2 = var3;
case 8:
                        var11 = var1;
                        var10 = var2;
                        var2 = copyDataProperties(var11, var10);
                        return var1;
                    }
                };
                var6 = var6.bind(var5)(var1, var4);
                var _closure3_slot5 = var6;
                var1 = {};
                var4 = _closure1_slot6;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var10 = arg2;
                        var1 = global;
                        var2 = var1.Date;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var1 = _closure3_slot0;
                        var8 = var2 - var1;
                        var2 = _closure1_slot8;
                        var2 = var2.PAYMENT_FLOW_STARTED;
                        if(!(var3 !== var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var2 = _closure1_slot8;
                        var2 = var2.PAYMENT_FLOW_COMPLETED;
                        if(!(var3 !== var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var2 = _closure1_slot8;
                        var2 = var2.PAYMENT_FLOW_SUCCEEDED;
                        if(!(var3 !== var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var2 = _closure1_slot8;
                        var2 = var2.PAYMENT_FLOW_CANCELED;
                        if(!(var3 !== var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var2 = _closure1_slot8;
                        var2 = var2.PAYMENT_FLOW_FAILED;
                        if(!(var3 === var2)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot8;
                        var3 = var2.PAYMENT_FLOW_FAILED;
                        var2 = {};
                        var12 = _closure3_slot5;
                        var13 = var2;
                        var7 = copyDataProperties(var13, var12);
                        var7 = 'duration_ms';
                        var2[var7] = var8;
                        var7 = null;
                        if(!(var7 == var10)) { _fun0004_ip = 4; continue _fun0004 }
case 24:
                        var7 = {};
                        _fun0004_ip = 25; continue _fun0004;
case 4:
                        var9 = {};
                        var11 = var10.code;
                        var9['payment_error_code'] = var11;
                        var10 = var10.message;
                        var9['error_message'] = var10;
                        var7 = var9;
case 25:
                        var13 = var2;
                        var12 = var7;
                        var7 = copyDataProperties(var13, var12);
                        var2 = var5.bind(var6)(var3, var2);
                        _fun0004_ip = 22; continue _fun0004;
case 20:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot8;
                        var3 = var2.PAYMENT_FLOW_CANCELED;
                        var2 = {};
                        var12 = _closure3_slot5;
                        var13 = var2;
                        var7 = copyDataProperties(var13, var12);
                        var7 = 'duration_ms';
                        var2[var7] = var8;
                        var2 = var5.bind(var6)(var3, var2);
                        _fun0004_ip = 22; continue _fun0004;
case 18:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot8;
                        var3 = var2.PAYMENT_FLOW_SUCCEEDED;
                        var2 = {};
                        var12 = _closure3_slot5;
                        var13 = var2;
                        var7 = copyDataProperties(var13, var12);
                        var7 = 'duration_ms';
                        var2[var7] = var8;
                        var2 = var5.bind(var6)(var3, var2);
                        _fun0004_ip = 22; continue _fun0004;
case 16:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.track;
                        var2 = _closure1_slot8;
                        var3 = var2.PAYMENT_FLOW_COMPLETED;
                        var2 = {};
                        var12 = _closure3_slot5;
                        var13 = var2;
                        var7 = copyDataProperties(var13, var12);
                        var7 = 'duration_ms';
                        var2[var7] = var8;
                        var2 = var5.bind(var6)(var3, var2);
                        _fun0004_ip = 22; continue _fun0004;
case 14:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.trackPaymentFlowStartedAnalyticsAndCTP;
                        var1 = {};
                        var12 = _closure3_slot5;
                        var13 = var1;
                        var4 = copyDataProperties(var13, var12);
                        var5 = false;
                        var4 = 'has_saved_payment_source';
                        var1[var4] = var5;
                        var5 = null;
                        var4 = 'continue_session_initial_step';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
case 22:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                var1['emitOrbCheckoutPaymentFlowEvent'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var7);
            var7 = var2.emitOrbCheckoutPaymentFlowEvent;
            var _closure2_slot2 = var7;
            var2 = 10;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useVirtualCurrencyBalance;
            var6 = var2.bind(var6)();
            var _closure2_slot3 = var6;
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var6);
            var _closure2_slot4 = var2;
            var10 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var7;
            var8 = function() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot8;
                var2 = var1.PAYMENT_FLOW_STARTED;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var10.bind(var4)(var8, var11);
            var8 = new Array(2);
            var8[0] = var3;
            var8[1] = var7;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var3 = var2 != var3;
                    if(!var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var4 = _closure2_slot4;
                    var4 = var4.current;
                    var3 = var2 !== var4;
case 26:
                    if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 28:
                    var6 = _closure2_slot2;
                    var3 = _closure1_slot8;
                    var5 = var3.PAYMENT_FLOW_FAILED;
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5, var4);
                    var1 = _closure2_slot4;
                    var1['current'] = var2;
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var4)(var3, var8);
            var2 = var2.current;
            var3 = null;
            var15 = var6;
            if(!(var3 != var2)) { _fun0002_ip = 29; continue _fun0002 }
case 4:
            var15 = var2;
case 29:
            var3 = _closure1_slot6;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                var4 = _closure2_slot2;
                var1 = _closure1_slot8;
                var3 = var1.PAYMENT_FLOW_COMPLETED;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot4;
                var3 = _closure2_slot3;
                var4['current'] = var3;
                var3 = _closure2_slot0;
                var2 = function() {
                    var4 = _closure2_slot2;
                    var1 = _closure1_slot8;
                    var3 = var1.PAYMENT_FLOW_SUCCEEDED;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var3.bind(var4)(var1, var2);
            var3 = _closure1_slot12;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 12;
            var1 = var10[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ModalScreen;
            var1 = {};
            var8 = _closure1_slot11;
            var5 = 13;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.ModalContent;
            var5 = {};
            var14 = _closure1_slot11;
            var13 = _closure1_slot16;
            var11 = {};
            var11['orbBalance'] = var15;
            var11 = var14.bind(var4)(var13, var11);
            var5['children'] = var11;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var6 = 14;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ModalFooter;
            var6 = {};
            var11 = _closure1_slot11;
            var10 = _closure1_slot14;
            var9 = {};
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var12 = var1.skuId;
        var _closure2_slot0 = var12;
        var2 = var1.onCheckoutSuccess;
        var _closure2_slot1 = var2;
        var10 = var1.analyticsLocations;
        var _closure2_slot2 = var10;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 15;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 'SKU ID is required';
        var2 = var3.bind(var4)(var12, var2);
        var8 = _closure1_slot3;
        var5 = var8.useRef;
        var2 = _closure1_slot0;
        var3 = 16;
        var3 = var7[var3];
        var6 = var2.bind(var4)(var3);
        var3 = var6.v4;
        var3 = var3.bind(var6)();
        var3 = var5.bind(var8)(var3);
        var11 = var3.current;
        var _closure2_slot3 = var11;
        var5 = var8.useRef;
        var3 = global;
        var6 = var3.Date;
        var3 = var6.now;
        var3 = var3.bind(var6)();
        var3 = var5.bind(var8)(var3);
        var3 = var3.current;
        var _closure2_slot4 = var3;
        var13 = var8.useEffect;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var12;
        var5 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot8;
            var3 = var2.OPEN_MODAL;
            var2 = {};
            var6 = 'Orb Checkout Modal';
            var2['type'] = var6;
            var7 = _closure2_slot2;
            var2['location_stack'] = var7;
            var6 = _closure2_slot0;
            var2['sku_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5 = var13.bind(var8)(var5, var6);
        var6 = var8.useCallback;
        var5 = new Array(4);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var5[3] = var3;
        var3 = function() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var9 = var1.bind(var2)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var2 = var4[var1];
            var1 = undefined;
            var7 = var3.bind(var1)(var2);
            var6 = var7.track;
            var2 = _closure1_slot8;
            var5 = var2.PAYMENT_FLOW_CANCELED;
            var2 = {};
            var11 = _closure2_slot3;
            var2['load_id'] = var11;
            var12 = _closure1_slot0;
            var11 = 7;
            var11 = var4[var11];
            var13 = var12.bind(var1)(var11);
            var12 = var13.getApplicationIdForOrbSKU;
            var11 = _closure2_slot0;
            var12 = var12.bind(var13)(var11);
            var2['application_id'] = var12;
            var12 = _closure2_slot2;
            var2['location_stack'] = var12;
            var12 = _closure1_slot10;
            var12 = var12.VIRTUAL_CURRENCY;
            var2['payment_gateway'] = var12;
            var2['sku_id'] = var11;
            var10 = _closure1_slot9;
            var10 = var10.DISCORD_ORB;
            var2['currency'] = var10;
            var8 = _closure2_slot4;
            var8 = var9 - var8;
            var2['duration_ms'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = 11;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.pop;
            var2 = var2.bind(var3)();
            return var1;
        };
        var13 = var6.bind(var8)(var3, var5);
        var6 = {};
        var5 = _closure1_slot13;
        var8 = var5.MAIN;
        var3 = {};
        var10 = 17;
        var11 = var7[var10];
        var11 = var2.bind(var4)(var11);
        var14 = var11.intl;
        var12 = var14.string;
        var11 = var7[var10];
        var11 = var2.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.q9EGpq;
        var11 = var12.bind(var14)(var11);
        var3['title'] = var11;
        var11 = true;
        var3['headerShown'] = var11;
        var11 = 18;
        var11 = var7[var11];
        var12 = var2.bind(var4)(var11);
        var11 = var12.getHeaderTextButton;
        var14 = var7[var10];
        var14 = var2.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var10 = var7[var10];
        var10 = var2.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.ETE/oK;
        var10 = var14.bind(var15)(var10);
        var10 = var11.bind(var12)(var10, var13);
        var3['headerLeft'] = var10;
        var9 = function render() {
            var4 = _closure1_slot11;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.OrbCheckoutModalContextProvider;
            var1 = {};
            var6 = _closure2_slot0;
            var1['skuId'] = var6;
            var6 = _closure2_slot3;
            var1['loadId'] = var6;
            var6 = _closure2_slot1;
            var1['onCheckoutSuccess'] = var6;
            var6 = _closure2_slot2;
            var1['analyticsLocations'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot15;
            var5 = {};
            var8 = _closure2_slot4;
            var5['startTime'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var9;
        var6[var8] = var3;
        var3 = _closure1_slot11;
        var1 = 19;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Modal;
        var1 = {};
        var1['screens'] = var6;
        var5 = var5.MAIN;
        var1['initialRouteName'] = var5;
        var5 = 'center';
        var1['headerTitleAlign'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();