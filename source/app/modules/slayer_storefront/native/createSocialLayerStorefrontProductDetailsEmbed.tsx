// app/modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.InviteTypes;
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createSocialLayerStorefrontProductDetailsEmbed(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var8 = undefined;
            var3 = var3.bind(var8)(var1);
            var1 = arg2;
            var1 = var3.bind(var8)(var1);
            var3 = var1.colors;
            var4 = var1.baseColors;
            var5 = var6.split;
            var1 = '-';
            var6 = var5.bind(var6)(var1);
            var5 = _closure1_slot3;
            var1 = 2;
            var5 = var5.bind(var8)(var6, var1);
            var1 = 0;
            var12 = var5[var1];
            var1 = 1;
            var6 = var5[var1];
            var5 = _closure1_slot6;
            var1 = var5.get;
            var7 = var1.bind(var5)(var12);
            var1 = null;
            var9 = var1 == var7;
            var5 = undefined;
            if(var9) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = var7.applicationId;
case 36:
            var10 = _closure1_slot5;
            var9 = var10.getApplication;
            var10 = var9.bind(var10)(var5);
            var11 = _closure1_slot6;
            var9 = var11.isFetching;
            var13 = var9.bind(var11)(var12);
            var9 = var11.didFetchingSkuFail;
            var12 = var9.bind(var11)(var12);
            var9 = var1 != var5;
            var11 = var5;
            if(!var9) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var14 = _closure1_slot5;
            var5 = var14.isFetchingApplication;
            var9 = var5.bind(var14)(var11);
case 38:
            var5 = var1 != var11;
            if(!var5) { _fun0004_ip = 22; continue _fun0004 }
case 40:
            var15 = _closure1_slot5;
            var14 = var15.didFetchingApplicationFail;
            var5 = var14.bind(var15)(var11);
case 22:
            if(var13) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            if(!(var1 == var7)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            if(var13) { _fun0004_ip = 43; continue _fun0004 }
case 45:
            if(!var12) { _fun0004_ip = 41; continue _fun0004 }
case 43:
            if(var9) { _fun0004_ip = 41; continue _fun0004 }
case 46:
            if(!(var1 != var11)) { _fun0004_ip = 18; continue _fun0004 }
case 47:
            if(!(var1 == var10)) { _fun0004_ip = 18; continue _fun0004 }
case 48:
            if(var9) { _fun0004_ip = 18; continue _fun0004 }
case 49:
            if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 41:
            if(!(var1 != var7)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            if(!(var1 != var10)) { _fun0004_ip = 50; continue _fun0004 }
case 18:
            if(!(var1 != var7)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            if(!(var1 != var10)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.bind(var8)(var10);
            if(!var5) { _fun0004_ip = 54; continue _fun0004 }
case 56:
            var5 = var10.guildId;
            if(!(var5 === var6)) { _fun0004_ip = 54; continue _fun0004 }
case 57:
            var16 = var10.name;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 8;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.getCardImageURL;
            var9 = var5.bind(var6)(var7);
            var6 = var1 == var9;
            var5 = undefined;
            if(var6) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var6 = var9.toString;
            var5 = var6.bind(var9)();
case 58:
            if(!(var1 == var5)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var9 = var10.getIconURL;
            var6 = 64;
            var5 = var9.bind(var10)(var6);
case 60:
            var6 = var1 != var5;
            var9 = undefined;
            if(!var6) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var9 = var5;
case 62:
            var5 = {};
            var18 = var5;
            var17 = var4;
            var6 = copyDataProperties(var18, var17);
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 6;
            var12 = var11[var6];
            var12 = var10.bind(var8)(var12);
            var14 = var12.intl;
            var13 = var14.string;
            var12 = var11[var6];
            var12 = var10.bind(var8)(var12);
            var12 = var12.t;
            var12 = var12.vyaWs7;
            var13 = var13.bind(var14)(var12);
            var12 = var13.toUpperCase;
            var13 = var12.bind(var13)();
            var12 = 'headerText';
            var5[11] = var13;
            var13 = var3.headerColor;
            var12 = 'headerColor';
            var5[11] = var13;
            var12 = var11[var6];
            var12 = var10.bind(var8)(var12);
            var15 = var12.intl;
            var14 = var15.formatToPlainString;
            var12 = var11[var6];
            var12 = var10.bind(var8)(var12);
            var12 = var12.t;
            var13 = var12.HDT/rg;
            var12 = {};
            var12['applicationName'] = var16;
            var13 = var14.bind(var15)(var13, var12);
            var12 = 'titleText';
            var5[11] = var13;
            var13 = var3.titleColor;
            var12 = 'titleColor';
            var5[11] = var13;
            var12 = var7.name;
            var7 = 'subtitle';
            var5[6] = var12;
            var12 = var3.subtitleColor;
            var7 = 'subtitleColor';
            var5[6] = var12;
            var7 = 'thumbnailUrl';
            var5[6] = var9;
            var9 = var3.thumbnailBackgroundColor;
            var7 = 'thumbnailBackgroundColor';
            var5[6] = var9;
            var7 = var11[var6];
            var7 = var10.bind(var8)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.boqtTA;
            var7 = var7.bind(var9)(var6);
            var6 = 'acceptLabelText';
            var5[5] = var7;
            var7 = var3.acceptLabelGreenColor;
            var6 = 'acceptLabelColor';
            var5[5] = var7;
            var7 = var3.acceptLabelGreenBackgroundColor;
            var6 = 'acceptLabelBackgroundColor';
            var5[5] = var7;
            var7 = true;
            var6 = 'embedCanBeTapped';
            var5[5] = var7;
            var6 = 'canBeAccepted';
            var5[5] = var7;
            var6 = _closure1_slot7;
            var7 = var6.GUILD;
            var6 = 'type';
            var5[5] = var7;
            return var5;
case 54:
            return var1;
case 52:
            return var1;
case 50:
            var1 = {};
            var18 = var1;
            var17 = var4;
            var4 = copyDataProperties(var18, var17);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 6;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.vyaWs7;
            var5 = var5.bind(var6)(var4);
            var4 = var5.toUpperCase;
            var5 = var4.bind(var5)();
            var4 = 'headerText';
            var1[3] = var5;
            var5 = var3.resolvingGradientEnd;
            var4 = 'resolvingGradientEnd';
            var1[3] = var5;
            var4 = var3.resolvingGradientStart;
            var3 = 'resolvingGradientStart';
            var1[2] = var4;
            var2 = _closure1_slot7;
            var3 = var2.GUILD;
            var2 = 'type';
            var1[1] = var3;
            return var1;
        }
    };
    var3['createSocialLayerStorefrontProductDetailsEmbed'] = var4;
    var2 = function useFetchSocialLayerStorefrontProductDetailsEmbedData(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 9;
        var7 = var5[var1];
        var1 = undefined;
        var9 = var6.bind(var1)(var7);
        var8 = var9.useIsEligibleForSocialLayerStorefrontMobilePurchasing;
        var7 = {};
        var10 = 'use_fetch_social_layer_storefront_product_details_embed_data';
        var7['location'] = var10;
        var9 = var8.bind(var9)(var7);
        var _closure2_slot1 = var9;
        var10 = _closure1_slot4;
        var8 = var10.useMemo;
        var7 = new Array(2);
        var7[0] = var9;
        var7[1] = var4;
        var4 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot1;
                var5 = new Array(0);
                if(var1) { _fun0005_ip = 64; continue _fun0005 }
case 32:
                var1 = var5;
                _fun0005_ip = 65; continue _fun0005;
case 64:
                var4 = _closure2_slot0;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure1_slot8;
                        var2 = arg2;
                        var2 = var2.codedLinks;
                        var7 = undefined;
                        var6 = var3.bind(var7)(var2);
                        var3 = var6.bind(var7)();
                        var2 = var3.done;
                        var5 = '-';
                        var4 = 10;
                        if(var2) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                        var2 = var3.value;
                        var9 = var2.type;
                        var10 = var2.code;
                        var11 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var2 = var11.bind(var7)(var2);
                        var2 = var2.CodedLinkType;
                        var2 = var2.SOCIAL_LAYER_STOREFRONT;
                        if(!(var9 === var2)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                        var9 = var1.push;
                        var2 = var10.split;
                        var2 = var2.bind(var10)(var5);
                        var2 = var9.bind(var1)(var2);
case 68:
                        var9 = var6.bind(var7)();
                        var2 = var9.done;
                        var3 = var9;
                        if(!var2) { _fun0006_ip = 67; continue _fun0006 }
case 66:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var5);
case 65:
                return var1;
            }
        };
        var9 = var8.bind(var10)(var4, var7);
        var _closure2_slot2 = var9;
        var8 = var10.useEffect;
        var7 = new Array(1);
        var7[0] = var9;
        var4 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot8;
                var2 = _closure2_slot2;
                var1 = undefined;
                var9 = var3.bind(var1)(var2);
                var3 = var9.bind(var1)();
                var2 = var3.done;
                var8 = 11;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = null;
                if(var2) { _fun0007_ip = 70; continue _fun0007 }
case 5:
                var11 = var3.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var1)(var11, var7);
                var13 = var2[var6];
                var12 = var2[var5];
                var11 = _closure1_slot6;
                var2 = var11.get;
                var2 = var2.bind(var11)(var13);
                var2 = var4 != var2;
                if(var2) { _fun0007_ip = 71; continue _fun0007 }
case 69:
                var14 = _closure1_slot6;
                var11 = var14.isFetching;
                var2 = var11.bind(var14)(var13);
case 71:
                if(var2) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                var14 = _closure1_slot6;
                var11 = var14.didFetchingSkuFail;
                var2 = var11.bind(var14)(var13);
case 72:
                if(var2) { _fun0007_ip = 15; continue _fun0007 }
case 74:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var11 = var11.bind(var1)(var2);
                var2 = var11.fetchSocialLayerStorefrontSku;
                var2 = var2.bind(var11)(var12, var13);
case 15:
                var11 = var9.bind(var1)();
                var2 = var11.done;
                var3 = var11;
                if(!var2) { _fun0007_ip = 5; continue _fun0007 }
case 70:
                return var1;
            }
        };
        var4 = var8.bind(var10)(var4, var7);
        var4 = 12;
        var4 = var5[var4];
        var8 = var6.bind(var1)(var4);
        var7 = var8.useStateFromStoresArray;
        var4 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = new Array(1);
        var4[0] = var9;
        var3 = function() {
            var4 = _closure2_slot2;
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2[Symbol.iterator];
                    var2 = var1().next;
                    var4 = var2().value;
                    var2 = var1;
                    var3 = undefined;
                    var2 = var2 === var3;
                    if(var2) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                    var3 = var4;
case 75:
                    if(var2) { _fun0008_ip = 77; continue _fun0008 }
case 34:
                    var1.return();
case 77:
                    var2 = _closure1_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var4 = var3.bind(var4)(var2);
            var2 = global;
            var3 = var2.Set;
            var2 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.applicationId;
                return var1;
            };
            var9 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var10 = var2;
            var1 = new var10[var3](var9, var8);
            var8 = var1 instanceof Object ? var1 : var2;
            var1 = new Array(0);
            var7 = 0;
            var9 = var1;
            var2 = arraySpread(var9, var8, var7);
            return var1;
        };
        var3 = var7.bind(var8)(var6, var3, var4);
        var4 = _closure1_slot1;
        var2 = 14;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['useFetchSocialLayerStorefrontProductDetailsEmbedData'] = var2;
    return var1;
})();