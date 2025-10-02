// app/modules/connections/ConnectionsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
case 0:
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
            if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
case 2:
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
case 0:
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
            if(!(var3 !== var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot7;
            var3 = var3.NOT_EQUAL;
            if(!(var3 !== var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot7;
            var3 = var3.LESS_THAN;
            if(!(var3 !== var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot7;
            var3 = var3.GREATER_THAN;
            if(!(var3 !== var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(!(var4 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = null;
            if(!(var5 === var7)) { _fun0002_ip = 14; continue _fun0002 }
case 12:
            var3 = null;
            return var3;
case 10:
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
            _fun0002_ip = 14; continue _fun0002;
case 8:
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
            _fun0002_ip = 14; continue _fun0002;
case 6:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.D9B/q6;
            _fun0002_ip = 14; continue _fun0002;
case 4:
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
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var12 = _closure1_slot6;
            var12 = var12.PAYPAL_VERIFIED;
            var3 = var8 === var12;
case 15:
            var5 = var10;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 17:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.N95b+f;
case 14:
            var3 = null;
            if(!(var3 != var1)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var5 = var1;
case 18:
            var1 = var5;
            if(!(var3 != var1)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var1 = var5;
            if(!(var3 != var7)) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var7 = _closure1_slot9;
            var7 = var7.REDDIT;
            if(!(var7 !== var9)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var7 = _closure1_slot9;
            var7 = var7.STEAM;
            if(!(var7 !== var9)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var7 = _closure1_slot9;
            var7 = var7.BLUESKY;
            if(!(var7 !== var9)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var7 = _closure1_slot9;
            var7 = var7.TWITTER;
            if(!(var7 !== var9)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var7 = _closure1_slot9;
            var7 = var7.PAYPAL;
            if(!(var7 !== var9)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var7 = _closure1_slot9;
            var7 = var7.EBAY;
            if(!(var7 !== var9)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var7 = _closure1_slot9;
            var7 = var7.TIKTOK;
            if(!(var7 !== var9)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            return var3;
case 35:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_VERIFIED;
            if(!(var7 !== var8)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_FOLLOWER_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_FOLLOWING_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var7 = _closure1_slot6;
            var7 = var7.TIKTOK_LIKES_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            return var3;
case 43:
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
            _fun0002_ip = 20; continue _fun0002;
case 41:
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
            _fun0002_ip = 20; continue _fun0002;
case 39:
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
            _fun0002_ip = 20; continue _fun0002;
case 37:
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
            _fun0002_ip = 20; continue _fun0002;
case 33:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_TOP_RATED_SELLER;
            if(!(var7 !== var8)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
            if(!(var7 !== var8)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var7 = _closure1_slot6;
            var7 = var7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            return var3;
case 53:
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
            _fun0002_ip = 20; continue _fun0002;
case 51:
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
            _fun0002_ip = 20; continue _fun0002;
case 49:
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
            _fun0002_ip = 20; continue _fun0002;
case 47:
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
            _fun0002_ip = 20; continue _fun0002;
case 45:
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
            _fun0002_ip = 20; continue _fun0002;
case 31:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var7 = _closure1_slot6;
            var7 = var7.PAYPAL_VERIFIED;
            if(!(var7 !== var8)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            return var3;
case 57:
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
            _fun0002_ip = 20; continue _fun0002;
case 55:
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
            _fun0002_ip = 20; continue _fun0002;
case 29:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var7 = _closure1_slot6;
            var7 = var7.TWITTER_VERIFIED;
            if(!(var7 !== var8)) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var7 = _closure1_slot6;
            var7 = var7.TWITTER_FOLLOWERS_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var7 = _closure1_slot6;
            var7 = var7.TWITTER_STATUSES_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            return var3;
case 65:
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
            _fun0002_ip = 20; continue _fun0002;
case 63:
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
            _fun0002_ip = 20; continue _fun0002;
case 61:
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
            _fun0002_ip = 20; continue _fun0002;
case 59:
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
            _fun0002_ip = 20; continue _fun0002;
case 27:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var7 = _closure1_slot6;
            var7 = var7.BLUESKY_FOLLOWERS_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var7 = _closure1_slot6;
            var7 = var7.BLUESKY_STATUSES_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            return var3;
case 71:
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
                var2 = var1.dy3+NT;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 20; continue _fun0002;
case 69:
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
                var2 = var1.xIdKU1;
                var1 = {};
                var5 = _closure2_slot0;
                var1['count'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7['platformQuantityHook'] = var11;
            var1 = var9.bind(var10)(var5, var7);
            _fun0002_ip = 20; continue _fun0002;
case 67:
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
            _fun0002_ip = 20; continue _fun0002;
case 25:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var7 = _closure1_slot6;
            var7 = var7.STEAM_GAME_COUNT;
            if(!(var7 !== var8)) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var7 = _closure1_slot6;
            var7 = var7.STEAM_ITEM_COUNT_TF2;
            if(!(var7 !== var8)) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var7 = _closure1_slot6;
            var7 = var7.STEAM_ITEM_COUNT_DOTA2;
            if(!(var7 !== var8)) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            return var3;
case 79:
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
            _fun0002_ip = 20; continue _fun0002;
case 77:
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
            _fun0002_ip = 20; continue _fun0002;
case 75:
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
            _fun0002_ip = 20; continue _fun0002;
case 73:
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
            _fun0002_ip = 20; continue _fun0002;
case 23:
            var7 = _closure1_slot6;
            var7 = var7.CREATED_AT;
            if(!(var7 !== var8)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var7 = _closure1_slot6;
            var7 = var7.REDDIT_TOTAL_KARMA;
            if(!(var7 !== var8)) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var7 = _closure1_slot6;
            var7 = var7.REDDIT_GOLD;
            if(!(var7 !== var8)) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var7 = _closure1_slot6;
            var7 = var7.REDDIT_MOD;
            if(!(var7 !== var8)) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            return var3;
case 87:
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
            _fun0002_ip = 20; continue _fun0002;
case 85:
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
            _fun0002_ip = 20; continue _fun0002;
case 83:
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
            _fun0002_ip = 20; continue _fun0002;
case 81:
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
case 20:
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
case 0:
            var1 = arg1;
            var5 = var1.guildMember;
            var _closure2_slot0 = var5;
            var3 = var1.guild;
            var4 = var1.sortedGuildRoles;
            var8 = var1.channel;
            var6 = var1.onlyChannelConnectionRoles;
            var7 = undefined;
            if(!(var6 === var7)) { _fun0003_ip = 3; continue _fun0003 }
case 89:
            var6 = false;
case 3:
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var5 = var1 == var3;
            if(!var5) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var5 = var1 != var8;
case 92:
            if(!var5) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var10 = _closure1_slot4;
            var9 = var10.getGuild;
            var5 = var8.getGuildId;
            var5 = var5.bind(var8)();
            var3 = var9.bind(var10)(var5);
case 94:
            if(!(var1 != var3)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var9 = var3.id;
            if(!(var1 == var4)) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var5 = _closure1_slot3;
            var3 = var5.getSortedRoles;
            var4 = var3.bind(var5)(var9);
case 98:
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.tags;
                    var3 = var1.guild_connections;
                    var1 = null;
                    var1 = var1 === var3;
                    if(!var1) { _fun0004_ip = 100; continue _fun0004 }
case 101:
                    var3 = _closure2_slot0;
                    var4 = var3.roles;
                    var3 = var4.includes;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 100:
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
            if(!(!(var2 > var3))) { _fun0003_ip = 102; continue _fun0003 }
case 103:
            var2 = null;
            if(var6) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var6 = var5[var3];
            var7 = var1 != var6;
            var5 = null;
            if(!var7) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var5 = var6;
case 106:
            var2 = var5;
case 104:
            _fun0003_ip = 108; continue _fun0003;
case 102:
            var4 = var4[var3];
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var3 = var4;
case 109:
            var2 = var3;
case 108:
            return var2;
case 96:
            return var1;
case 90:
            return var1;
        }
    };
    var3['getVisibleConnectionsRole'] = var4;
    var4 = function getCreatedAtDate(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 111; continue _fun0005 }
case 112:
            var2 = '';
            if(!(var2 !== var5)) { _fun0005_ip = 111; continue _fun0005 }
case 113:
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
            if(!var4) { _fun0005_ip = 114; continue _fun0005 }
case 115:
            var5 = var3.isNaN;
            var3 = var6.getTime;
            var4 = var3.bind(var6)();
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var2 = null;
            if(var3) { _fun0005_ip = 114; continue _fun0005 }
case 116:
            var5 = var6.toLocaleDateString;
            var4 = arg2;
            var3 = {'month': 'short', 'day': 'numeric', 'year': 'numeric'};
            var2 = var5.bind(var6)(var4, var3);
case 114:
            return var2;
case 111:
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
case 0:
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
                if(!var1) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                var1 = var3;
case 117:
                if(!var1) { _fun0006_ip = 119; continue _fun0006 }
case 120:
                var1 = var2;
case 119:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useShowLinkedRolesAdminNux'] = var2;
    return var1;
})();