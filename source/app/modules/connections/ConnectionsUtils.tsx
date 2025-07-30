// app/modules/connections/ConnectionsUtils.tsx
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
    var9 = 0;
    var4 = var7[var9];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 1;
    var4 = var7[var8];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.MetadataFields;
    var _closure1_slot6 = var5;
    var4 = var4.OperatorTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Permissions;
    var _closure1_slot8 = var5;
    var4 = var4.PlatformTypes;
    var _closure1_slot9 = var4;
    var4 = {};
    var4['AND'] = var9;
    var5 = 'AND';
    var4[var9] = var5;
    var4['OR'] = var8;
    var5 = 'OR';
    var4[var8] = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/connections/ConnectionsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
    var3['officialApplicationIds'] = var5;
    var3['ConnectionConfigurationRuleOperator'] = var4;
    var4 = function getCallbackParamsFromURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var8 = undefined;
            var3 = var2.bind(var8)(var1);
            var2 = var3.toURLSafe;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 83; continue _fun0001 }
 45:
            var2 = {};
            var3 = global;
            var3 = var3.URLSearchParams;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var15 = var4;
            var3 = new var15[var3](var14);
            var3 = var3 instanceof Object ? var3 : var4;
            var2['searchParams'] = var3;
            var1 = var2;
 83:
            var4 = var1.searchParams;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.fromEntries;
            var2 = var2.bind(var3)(var4);
            var5 = var2.code;
            var4 = var2.state;
            var3 = var2.error;
            var2 = var2.error_description;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var10 = var9[var6];
            var12 = var7.bind(var8)(var10);
            var11 = var1.Array;
            var10 = var11.isArray;
            var10 = var10.bind(var11)(var5);
            var11 = !var10;
            var10 = 'Received multiple query param values for code';
            var10 = var12.bind(var8)(var11, var10);
            var10 = var9[var6];
            var12 = var7.bind(var8)(var10);
            var11 = var1.Array;
            var10 = var11.isArray;
            var10 = var10.bind(var11)(var4);
            var11 = !var10;
            var10 = 'Received multiple query param values for state';
            var10 = var12.bind(var8)(var11, var10);
            var10 = var9[var6];
            var12 = var7.bind(var8)(var10);
            var11 = var1.Array;
            var10 = var11.isArray;
            var10 = var10.bind(var11)(var3);
            var11 = !var10;
            var10 = 'Received multiple query param values for error';
            var10 = var12.bind(var8)(var11, var10);
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var1.Array;
            var1 = var6.isArray;
            var1 = var1.bind(var6)(var2);
            var6 = !var1;
            var1 = 'Received multiple query param values for error_description';
            var1 = var7.bind(var8)(var6, var1);
            var1 = {};
            var1['code'] = var5;
            var1['state'] = var4;
            var1['error'] = var3;
            var1['errorDescription'] = var2;
            return var1;
        }
    };
    var3['getCallbackParamsFromURL'] = var4;
    var4 = function getConnectionsCheckText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var9 = var2.connectionType;
            var8 = var2.connectionMetadataField;
            var7 = var2.operator;
            var1 = var2.operatorText;
            var11 = var2.value;
            var10 = global;
            var5 = var10.Math;
            var3 = var5.round;
            var2 = var10.Number;
            var4 = undefined;
            var2 = var2.bind(var4)(var11);
            var11 = var3.bind(var5)(var2);
            var _closure2_slot0 = var11;
            var3 = _closure1_slot7;
            var3 = var3.EQUAL;
            if(!(var3 !== var7)) { _fun0002_ip = 322; continue _fun0002 }
 89:
            var3 = _closure1_slot7;
            var3 = var3.NOT_EQUAL;
            if(!(var3 !== var7)) { _fun0002_ip = 287; continue _fun0002 }
 106:
            var3 = _closure1_slot7;
            var3 = var3.LESS_THAN;
            if(!(var3 !== var7)) { _fun0002_ip = 219; continue _fun0002 }
 120:
            var3 = _closure1_slot7;
            var3 = var3.GREATER_THAN;
            if(!(var3 !== var7)) { _fun0002_ip = 151; continue _fun0002 }
 134:
            if(!(var4 !== var7)) { _fun0002_ip = 147; continue _fun0002 }
 138:
            var5 = null;
            if(!(var5 === var7)) { _fun0002_ip = 422; continue _fun0002 }
 147:
            var3 = null;
            return var3;
 151:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 7;
            var3 = var13[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.wCVDHh;
            var15 = var10.Math;
            var14 = var15.max;
            var12 = 1;
            var13 = var11 + var12;
            var12 = 0;
            var12 = var14.bind(var15)(var12, var13);
            _closure2_slot0 = var12;
            _fun0002_ip = 422; continue _fun0002;
 219:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 7;
            var3 = var13[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.3ru8/P;
            var13 = var10.Math;
            var12 = var13.max;
            var10 = 1;
            var11 = var11 - var10;
            var10 = 0;
            var10 = var12.bind(var13)(var10, var11);
            _closure2_slot0 = var10;
            _fun0002_ip = 422; continue _fun0002;
 287:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.D9B/q6;
            _fun0002_ip = 422; continue _fun0002;
 322:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 7;
            var3 = var3[var11];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var10 = var3.H97H4e;
            var3 = _closure1_slot9;
            var3 = var3.PAYPAL;
            var3 = var9 === var3;
            if(!var3) { _fun0002_ip = 386; continue _fun0002 }
 372:
            var12 = _closure1_slot6;
            var12 = var12.PAYPAL_VERIFIED;
            var3 = var8 === var12;
 386:
            var5 = var10;
            if(!var3) { _fun0002_ip = 422; continue _fun0002 }
 392:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.N95b+f;
 422:
            var3 = null;
            if(!(var3 != var1)) { _fun0002_ip = 431; continue _fun0002 }
 428:
            var5 = var1;
 431:
            var1 = var5;
            if(!(var3 != var1)) { _fun0002_ip = 2127; continue _fun0002 }
 441:
            var1 = var5;
            if(!(var3 != var7)) { _fun0002_ip = 2127; continue _fun0002 }
 451:
            var7 = _closure1_slot9;
            var7 = var7.REDDIT;
            if(!(var7 !== var9)) { _fun0002_ip = 1862; continue _fun0002 }
 468:
            var7 = _closure1_slot9;
            var7 = var7.STEAM;
            if(!(var7 !== var9)) { _fun0002_ip = 1586; continue _fun0002 }
 485:
            var7 = _closure1_slot9;
            var7 = var7.TWITTER;
            if(!(var7 !== var9)) { _fun0002_ip = 1310; continue _fun0002 }
 502:
            var7 = _closure1_slot9;
            var7 = var7.PAYPAL;
            if(!(var7 !== var9)) { _fun0002_ip = 1174; continue _fun0002 }
 519:
            var7 = _closure1_slot9;
            var7 = var7.EBAY;
            if(!(var7 !== var9)) { _fun0002_ip = 828; continue _fun0002 }
 536:
            var7 = _closure1_slot9;
            var7 = var7.TIKTOK;
            if(!(var7 !== var9)) { _fun0002_ip = 552; continue _fun0002 }
 550:
            return var3;
 552:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_VERIFIED;
            if(!(var7 !== var8)) { _fun0002_ip = 775; continue _fun0002 }
 569:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_FOLLOWER_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 722; continue _fun0002 }
 586:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_FOLLOWING_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 669; continue _fun0002 }
 600:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_LIKES_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 616; continue _fun0002 }
 614:
            return var3;
 616:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.ar0WW1;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 669:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.zRta4e;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 722:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.qIPDR0;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 775:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.uv7et7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 828:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 1121; continue _fun0002 }
 845:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_TOP_RATED_SELLER;
            if(!(var7 !== var8)) { _fun0002_ip = 1068; continue _fun0002 }
 862:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
            if(!(var7 !== var8)) { _fun0002_ip = 1015; continue _fun0002 }
 879:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 962; continue _fun0002 }
 893:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 909; continue _fun0002 }
 907:
            return var3;
 909:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.6ZFYdH;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 962:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.QP5W1d;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1015:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.rl9Vg4;
                var1 = {};
                var5 = _closure2_slot0;
                var1['value'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1068:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.TEEYwc;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1121:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.TPbtEh;
                var1 = {};
                var5 = _closure2_slot0;
                var1['days'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1174:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 1257; continue _fun0002 }
 1188:
            var7 = _closure1_slot6;
            var7 = var7.PAYPAL_VERIFIED;
            if(!(var7 !== var8)) { _fun0002_ip = 1204; continue _fun0002 }
 1202:
            return var3;
 1204:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.slSQuL;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1257:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.TPbtEh;
                var1 = {};
                var5 = _closure2_slot0;
                var1['days'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1310:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 1533; continue _fun0002 }
 1327:
            var7 = _closure1_slot6;
            var7 = var7.TWITTER_VERIFIED;
            if(!(var7 !== var8)) { _fun0002_ip = 1480; continue _fun0002 }
 1344:
            var7 = _closure1_slot6;
            var7 = var7.TWITTER_FOLLOWERS_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 1427; continue _fun0002 }
 1358:
            var7 = _closure1_slot6;
            var7 = var7.TWITTER_STATUSES_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 1374; continue _fun0002 }
 1372:
            return var3;
 1374:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.MI7NKi;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1427:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.bkajam;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1480:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.xRygZG;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1533:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.TPbtEh;
                var1 = {};
                var5 = _closure2_slot0;
                var1['days'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1586:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 1809; continue _fun0002 }
 1603:
            var7 = _closure1_slot6;
            var7 = var7.STEAM_GAME_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 1756; continue _fun0002 }
 1620:
            var7 = _closure1_slot6;
            var7 = var7.STEAM_ITEM_COUNT_TF2;
            if(!(var7 !== var8)) { _fun0002_ip = 1703; continue _fun0002 }
 1634:
            var7 = _closure1_slot6;
            var7 = var7.STEAM_ITEM_COUNT_DOTA2;
            if(!(var7 !== var8)) { _fun0002_ip = 1650; continue _fun0002 }
 1648:
            return var3;
 1650:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.dMnRam;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1703:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.MceZJy;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1756:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.H9eLoa;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1809:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var7 = {};
            var11 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.TPbtEh;
                var1 = {};
                var5 = _closure2_slot0;
                var1['days'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 2127; continue _fun0002;
 1862:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 2079; continue _fun0002 }
 1879:
            var7 = _closure1_slot6;
            var7 = var7.REDDIT_TOTAL_KARMA;
            if(!(var7 !== var8)) { _fun0002_ip = 2029; continue _fun0002 }
 1896:
            var7 = _closure1_slot6;
            var7 = var7.REDDIT_GOLD;
            if(!(var7 !== var8)) { _fun0002_ip = 1979; continue _fun0002 }
 1910:
            var7 = _closure1_slot6;
            var7 = var7.REDDIT_MOD;
            if(!(var7 !== var8)) { _fun0002_ip = 1926; continue _fun0002 }
 1924:
            return var3;
 1926:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var8 = var3.intl;
            var7 = var8.format;
            var3 = {};
            var9 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.9rPbEh;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['platformQuantityHook'] = var9;
            var1 = var7.bind(var8)(var5, var3);
            _fun0002_ip = 2127; continue _fun0002;
 1979:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var8 = var3.intl;
            var7 = var8.format;
            var3 = {};
            var9 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.+/5TCw;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['platformQuantityHook'] = var9;
            var1 = var7.bind(var8)(var5, var3);
            _fun0002_ip = 2127; continue _fun0002;
 2029:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var8 = var3.intl;
            var7 = var8.format;
            var3 = {};
            var9 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.P2JAER;
                var1 = {};
                var5 = _closure2_slot0;
                var1['karma'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3['platformQuantityHook'] = var9;
            var1 = var7.bind(var8)(var5, var3);
            _fun0002_ip = 2127; continue _fun0002;
 2079:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.intl;
            var3 = var4.format;
            var2 = {};
            var6 = function platformQuantityHook() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.TPbtEh;
                var1 = {};
                var5 = _closure2_slot0;
                var1['days'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['platformQuantityHook'] = var6;
            var1 = var3.bind(var4)(var5, var2);
 2127:
            return var1;
        }
    };
    var3['getConnectionsCheckText'] = var4;
    var4 = function isVerifiedRolesChannelVisible(arg1) {
        var3 = arg1;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.tags;
            var2 = var1.guild_connections;
            var1 = null;
            var1 = var1 === var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isVerifiedRolesChannelVisible'] = var4;
    var4 = function getVisibleConnectionsRole(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildMember;
            var _closure2_slot0 = var5;
            var3 = var1.guild;
            var4 = var1.sortedGuildRoles;
            var8 = var1.channel;
            var6 = var1.onlyChannelConnectionRoles;
            var7 = undefined;
            if(!(var6 === var7)) { _fun0003_ip = 45; continue _fun0003 }
 43:
            var6 = false;
 45:
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 256; continue _fun0003 }
 54:
            var5 = var1 == var3;
            if(!var5) { _fun0003_ip = 65; continue _fun0003 }
 61:
            var5 = var1 != var8;
 65:
            if(!var5) { _fun0003_ip = 95; continue _fun0003 }
 68:
            var10 = _closure1_slot4;
            var9 = var10.getGuild;
            var5 = var8.getGuildId;
            var5 = var5.bind(var8)();
            var3 = var9.bind(var10)(var5);
 95:
            if(!(var1 != var3)) { _fun0003_ip = 254; continue _fun0003 }
 102:
            var9 = var3.id;
            if(!(var1 == var4)) { _fun0003_ip = 129; continue _fun0003 }
 111:
            var5 = _closure1_slot3;
            var3 = var5.getSortedRoles;
            var4 = var3.bind(var5)(var9);
 129:
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.tags;
                    var3 = var1.guild_connections;
                    var1 = null;
                    var1 = var1 === var3;
                    if(!var1) { _fun0004_ip = 52; continue _fun0004 }
 24:
                    var3 = _closure2_slot0;
                    var4 = var3.roles;
                    var3 = var4.includes;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 52:
                    return var1;
                }
            };
            var5 = var3.bind(var4)(var2);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var4 = var9.bind(var7)(var2);
            var3 = var4.intersection;
            var2 = 9;
            var2 = var10[var2];
            var2 = var9.bind(var7)(var2);
            var2 = var2.bind(var7)(var8);
            var4 = var3.bind(var4)(var5, var2);
            var2 = var4.length;
            var3 = 0;
            if(!(!(var2 > var3))) { _fun0003_ip = 233; continue _fun0003 }
 207:
            var2 = null;
            if(var6) { _fun0003_ip = 231; continue _fun0003 }
 212:
            var6 = var5[var3];
            var7 = var1 != var6;
            var5 = null;
            if(!var7) { _fun0003_ip = 228; continue _fun0003 }
 225:
            var5 = var6;
 228:
            var2 = var5;
 231:
            _fun0003_ip = 252; continue _fun0003;
 233:
            var4 = var4[var3];
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0003_ip = 249; continue _fun0003 }
 246:
            var3 = var4;
 249:
            var2 = var3;
 252:
            return var2;
 254:
            return var1;
 256:
            return var1;
        }
    };
    var3['getVisibleConnectionsRole'] = var4;
    var4 = function getCreatedAtDate(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 118; continue _fun0005 }
 9:
            var2 = '';
            if(!(var2 !== var5)) { _fun0005_ip = 118; continue _fun0005 }
 17:
            var3 = global;
            var2 = var3.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var8 = var5;
            var2 = new var9[var2](var8, var7);
            var6 = var2 instanceof Object ? var2 : var4;
            var2 = var3.Date;
            var4 = var6 instanceof var2;
            var2 = null;
            if(!var4) { _fun0005_ip = 116; continue _fun0005 }
 63:
            var5 = var3.isNaN;
            var3 = var6.getTime;
            var4 = var3.bind(var6)();
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var2 = null;
            if(var3) { _fun0005_ip = 116; continue _fun0005 }
 91:
            var5 = var6.toLocaleDateString;
            var4 = arg2;
            var3 = {'month': 'short', 'day': 'numeric', 'year': 'numeric'};
            var2 = var5.bind(var6)(var4, var3);
 116:
            return var2;
 118:
            return var1;
        }
    };
    var3['getCreatedAtDate'] = var4;
    var2 = function useShowLinkedRolesAdminNux(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot5;
        var2[1] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure1_slot3;
                var3 = var4.getSortedRoles;
                var6 = _closure2_slot0;
                var1 = var6.id;
                var4 = var3.bind(var4)(var1);
                var3 = var4.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.tags;
                    var2 = var1.guild_connections;
                    var1 = null;
                    var1 = var1 === var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 11;
                var3 = var9[var3];
                var7 = undefined;
                var5 = var8.bind(var7)(var3);
                var4 = var5.UNSAFE_isDismissibleContentDismissed;
                var3 = 12;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.DismissibleContent;
                var3 = var3.CONNECTIONS_NUX;
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot5;
                var4 = var5.can;
                var2 = _closure1_slot8;
                var2 = var2.MANAGE_ROLES;
                var2 = var4.bind(var5)(var2, var6);
                var1 = !var1;
                if(!var1) { _fun0006_ip = 140; continue _fun0006 }
 137:
                var1 = var3;
 140:
                if(!var1) { _fun0006_ip = 146; continue _fun0006 }
 143:
                var1 = var2;
 146:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useShowLinkedRolesAdminNux'] = var2;
    return var1;
})();