// app/modules/connections/native/ConnectionMetadataVanityItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var1 = function PaypalVanityTag(arg1) {
        var1 = arg1;
        var8 = var1.style;
        var2 = _closure1_slot8;
        var5 = undefined;
        var6 = var2.bind(var5)();
        var4 = _closure1_slot6;
        var3 = _closure1_slot14;
        var2 = {};
        var9 = var6.paypalVerifiedTag;
        var7 = new Array(2);
        var7[0] = var9;
        var7[1] = var8;
        var2['style'] = var7;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var7 = 6;
        var8 = var11[var7];
        var8 = var10.bind(var5)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.IhXLy8;
        var7 = var8.bind(var9)(var7);
        var2['label'] = var7;
        var6 = var6.paypalVerifiedTagText;
        var2['textStyle'] = var6;
        var1 = _closure1_slot4;
        var1 = var1.PAYPAL_VERIFIED;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function VanityMetric(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.count;
            var11 = var1.label;
            var7 = var1.style;
            var5 = var1.percent;
            var2 = _closure1_slot8;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.shortenAndLocalizeNumber;
            var3 = var2.bind(var3)(var8);
            var2 = '';
            if(!var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = '%';
case 36:
            var10 = var3 + var2;
            var3 = 'string';
            var2 = typeof var11;
            if(!(var3 !== var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var5 = var2.intl;
            var3 = var5.format;
            var2 = {};
            var2['value'] = var10;
            var5 = var3.bind(var5)(var11, var2);
            _fun0004_ip = 22; continue _fun0004;
case 38:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 6;
            var8 = var12[var2];
            var8 = var3.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.HLoinJ;
            var2 = {};
            var2['name'] = var11;
            var2['value'] = var10;
            var5 = var8.bind(var9)(var3, var2);
case 22:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var8 = var6.connectedAccountVanityMetadata;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function VanityItem(arg1) {
        var1 = arg1;
        var9 = var1.label;
        var14 = var1.imageSrc;
        var13 = var1.imageAlt;
        var10 = var1.style;
        var1 = _closure1_slot8;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot3;
        var1 = {};
        var7 = var12.connectedAccountVanityMetadata;
        var5 = new Array(3);
        var5[0] = var7;
        var7 = var12.connectedAccountVanityMetadataItem;
        var5[1] = var7;
        var5[2] = var10;
        var1['style'] = var5;
        var8 = _closure1_slot6;
        var7 = _closure1_slot1;
        var11 = _closure1_slot2;
        var5 = 12;
        var5 = var11[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {};
        var5['source'] = var14;
        var5['accessibilityLabel'] = var13;
        var12 = var12.connectedAccountVanityMetadataItemIcon;
        var5['style'] = var12;
        var12 = true;
        var5['disableColor'] = var12;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot6;
        var7 = _closure1_slot0;
        var6 = 11;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function VanityTag(arg1) {
        var1 = arg1;
        var8 = var1.label;
        var7 = var1.style;
        var9 = var1.textStyle;
        var1 = _closure1_slot8;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot3;
        var1 = {};
        var11 = var10.connectedAccountVanityMetadata;
        var6 = new Array(3);
        var6[0] = var11;
        var10 = var10.connectedAccountVanityMetadataTag;
        var6[1] = var10;
        var6[2] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 11;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
        var5['style'] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function VanityDate(arg1) {
        var1 = arg1;
        var13 = var1.date;
        var9 = var1.label;
        var12 = var1.locale;
        var6 = var1.style;
        var2 = _closure1_slot8;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var11 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 11;
        var1 = var14[var1];
        var1 = var11.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
        var7 = var5.connectedAccountVanityMetadata;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var5 = 6;
        var6 = var14[var5];
        var6 = var11.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.format;
        var5 = var14[var5];
        var5 = var11.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.HLoinJ;
        var5 = {};
        var10 = 13;
        var10 = var14[var10];
        var11 = var11.bind(var4)(var10);
        var10 = var11.getCreatedAtDate;
        var10 = var10.bind(var11)(var13, var12);
        var5['value'] = var10;
        var5['name'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MetadataFields;
    var _closure1_slot4 = var7;
    var4 = var4.MetadataItemTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginTop': 4, 'paddingRight': 8};
    var4['connectedAccountVanityMetadata'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['connectedAccountVanityMetadataItem'] = var9;
    var9 = {'height': 18, 'width': 18, 'marginRight': 8};
    var4['connectedAccountVanityMetadataItemIcon'] = var9;
    var9 = {'backgroundColor': null, 'borderRadius': null, 'paddingHorizontal': 8, 'paddingVertical': 1, 'marginRight': 8};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var4['connectedAccountVanityMetadataTag'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_POSITIVE_BACKGROUND;
    var9['backgroundColor'] = var12;
    var4['paypalVerifiedTag'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['color'] = var10;
    var4['paypalVerifiedTagText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/native/ConnectionMetadataVanityItems.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function generateRedditMetadataItems(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0005_ip = 32; continue _fun0005 }
case 40:
            var8 = undefined;
case 32:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Number;
            var3 = _closure1_slot4;
            var3 = var3.REDDIT_TOTAL_KARMA;
            var5 = var9[var3];
            var3 = null;
            var10 = var3 != var5;
            var6 = -1;
            var3 = var6;
            if(!var10) { _fun0005_ip = 41; continue _fun0005 }
case 7:
            var3 = var5;
case 41:
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot4;
            var4 = var4.REDDIT_GOLD;
            var5 = var9[var4];
            var4 = _closure1_slot4;
            var4 = var4.REDDIT_MOD;
            var4 = var9[var4];
            if(!(var3 > var6)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var6 = var1.push;
            var11 = _closure1_slot6;
            var10 = _closure1_slot12;
            var9 = {};
            var9['style'] = var8;
            var9['count'] = var3;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 6;
            var3 = var13[var3];
            var3 = var12.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.SbCNo6;
            var9['label'] = var3;
            var3 = _closure1_slot4;
            var3 = var3.REDDIT_TOTAL_KARMA;
            var3 = var11.bind(var7)(var10, var9, var3);
            var3 = var6.bind(var1)(var3);
case 42:
            var3 = '1';
            if(!(var3 === var5)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var6 = var1.push;
            var11 = _closure1_slot6;
            var10 = _closure1_slot14;
            var9 = {};
            var9['style'] = var8;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 6;
            var12 = var15[var5];
            var12 = var14.bind(var7)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var5 = var15[var5];
            var5 = var14.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.06rDHR;
            var5 = var12.bind(var13)(var5);
            var9['label'] = var5;
            var5 = _closure1_slot4;
            var5 = var5.REDDIT_GOLD;
            var5 = var11.bind(var7)(var10, var9, var5);
            var5 = var6.bind(var1)(var5);
case 44:
            if(!(var3 === var4)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var3 = var1.push;
            var6 = _closure1_slot6;
            var5 = _closure1_slot14;
            var4 = {};
            var4['style'] = var8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var9 = var12[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.oWM95O;
            var8 = var9.bind(var10)(var8);
            var4['label'] = var8;
            var2 = _closure1_slot4;
            var2 = var2.REDDIT_MOD;
            var2 = var6.bind(var7)(var5, var4, var2);
            var2 = var3.bind(var1)(var2);
case 46:
            return var1;
        }
    };
    var3['generateRedditMetadataItems'] = var4;
    var4 = function generateTwitterMetadataItems(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var10 = arg1;
            var9 = arguments[1];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0006_ip = 32; continue _fun0006 }
case 40:
            var9 = undefined;
case 32:
            var1 = new Array(0);
            var6 = global;
            var8 = var6.Number;
            var3 = _closure1_slot4;
            var3 = var3.TWITTER_STATUSES_COUNT;
            var11 = var10[var3];
            var5 = null;
            var12 = var5 != var11;
            var3 = -1;
            var4 = var3;
            if(!var12) { _fun0006_ip = 41; continue _fun0006 }
case 7:
            var4 = var11;
case 41:
            var4 = var8.bind(var7)(var4);
            var6 = var6.Number;
            var8 = _closure1_slot4;
            var8 = var8.TWITTER_FOLLOWERS_COUNT;
            var8 = var10[var8];
            var10 = var5 != var8;
            var5 = var3;
            if(!var10) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var5 = var8;
case 48:
            var8 = var6.bind(var7)(var5);
            if(!(var4 > var3)) { _fun0006_ip = 45; continue _fun0006 }
case 50:
            var5 = var1.push;
            var11 = _closure1_slot6;
            var10 = _closure1_slot12;
            var6 = {};
            var6['style'] = var9;
            var6['count'] = var4;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 6;
            var4 = var13[var4];
            var4 = var12.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.llwqqa;
            var6['label'] = var4;
            var4 = _closure1_slot4;
            var4 = var4.TWITTER_STATUSES_COUNT;
            var4 = var11.bind(var7)(var10, var6, var4);
            var4 = var5.bind(var1)(var4);
case 45:
            if(!(var8 > var3)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var3 = var1.push;
            var6 = _closure1_slot6;
            var5 = _closure1_slot12;
            var4 = {};
            var4['style'] = var9;
            var4['count'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.LMNOUV;
            var4['label'] = var8;
            var2 = _closure1_slot4;
            var2 = var2.TWITTER_FOLLOWERS_COUNT;
            var2 = var6.bind(var7)(var5, var4, var2);
            var2 = var3.bind(var1)(var2);
case 51:
            return var1;
        }
    };
    var3['generateTwitterMetadataItems'] = var4;
    var4 = function generateBlueskyMetadataItems(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var10 = arg1;
            var9 = arguments[1];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0007_ip = 32; continue _fun0007 }
case 40:
            var9 = undefined;
case 32:
            var1 = new Array(0);
            var6 = global;
            var8 = var6.Number;
            var3 = _closure1_slot4;
            var3 = var3.BLUESKY_STATUSES_COUNT;
            var11 = var10[var3];
            var5 = null;
            var12 = var5 != var11;
            var3 = -1;
            var4 = var3;
            if(!var12) { _fun0007_ip = 41; continue _fun0007 }
case 7:
            var4 = var11;
case 41:
            var4 = var8.bind(var7)(var4);
            var6 = var6.Number;
            var8 = _closure1_slot4;
            var8 = var8.BLUESKY_FOLLOWERS_COUNT;
            var8 = var10[var8];
            var10 = var5 != var8;
            var5 = var3;
            if(!var10) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var5 = var8;
case 48:
            var8 = var6.bind(var7)(var5);
            if(!(var4 > var3)) { _fun0007_ip = 45; continue _fun0007 }
case 50:
            var5 = var1.push;
            var11 = _closure1_slot6;
            var10 = _closure1_slot12;
            var6 = {};
            var6['style'] = var9;
            var6['count'] = var4;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 6;
            var4 = var13[var4];
            var4 = var12.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.thA2io;
            var6['label'] = var4;
            var4 = _closure1_slot4;
            var4 = var4.BLUESKY_STATUSES_COUNT;
            var4 = var11.bind(var7)(var10, var6, var4);
            var4 = var5.bind(var1)(var4);
case 45:
            if(!(var8 > var3)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var3 = var1.push;
            var6 = _closure1_slot6;
            var5 = _closure1_slot12;
            var4 = {};
            var4['style'] = var9;
            var4['count'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.RQath4;
            var4['label'] = var8;
            var2 = _closure1_slot4;
            var2 = var2.BLUESKY_FOLLOWERS_COUNT;
            var2 = var6.bind(var7)(var5, var4, var2);
            var2 = var3.bind(var1)(var2);
case 51:
            return var1;
        }
    };
    var3['generateBlueskyMetadataItems'] = var4;
    var4 = function generateSteamMetadataItems(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var10 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0008_ip = 32; continue _fun0008 }
case 40:
            var8 = undefined;
case 32:
            var1 = new Array(0);
            var6 = global;
            var9 = var6.Number;
            var3 = _closure1_slot4;
            var3 = var3.STEAM_GAME_COUNT;
            var11 = var10[var3];
            var5 = null;
            var12 = var5 != var11;
            var3 = -1;
            var4 = var3;
            if(!var12) { _fun0008_ip = 41; continue _fun0008 }
case 7:
            var4 = var11;
case 41:
            var4 = var9.bind(var7)(var4);
            var11 = var6.Number;
            var9 = _closure1_slot4;
            var9 = var9.STEAM_ITEM_COUNT_DOTA2;
            var12 = var10[var9];
            var13 = var5 != var12;
            var9 = var3;
            if(!var13) { _fun0008_ip = 48; continue _fun0008 }
case 49:
            var9 = var12;
case 48:
            var18 = var11.bind(var7)(var9);
            var6 = var6.Number;
            var9 = _closure1_slot4;
            var9 = var9.STEAM_ITEM_COUNT_TF2;
            var9 = var10[var9];
            var10 = var5 != var9;
            var5 = var3;
            if(!var10) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var5 = var9;
case 53:
            var15 = var6.bind(var7)(var5);
            if(!(var4 > var3)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var5 = var1.push;
            var10 = _closure1_slot6;
            var9 = _closure1_slot12;
            var6 = {};
            var6['style'] = var8;
            var6['count'] = var4;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 6;
            var4 = var12[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.ppXMu7;
            var6['label'] = var4;
            var4 = _closure1_slot4;
            var4 = var4.STEAM_GAME_COUNT;
            var4 = var10.bind(var7)(var9, var6, var4);
            var4 = var5.bind(var1)(var4);
case 55:
            if(!(var18 > var3)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var5 = var1.push;
            var10 = _closure1_slot6;
            var9 = _closure1_slot13;
            var6 = {};
            var6['style'] = var8;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 6;
            var11 = var14[var4];
            var11 = var13.bind(var7)(var11);
            var17 = var11.intl;
            var16 = var17.format;
            var11 = var14[var4];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11.Y88M5+;
            var11 = {};
            var11['count'] = var18;
            var11 = var16.bind(var17)(var12, var11);
            var6['label'] = var11;
            var12 = _closure1_slot1;
            var11 = 7;
            var11 = var14[var11];
            var11 = var12.bind(var7)(var11);
            var6['imageSrc'] = var11;
            var11 = var14[var4];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var4 = var14[var4];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.HKUEZm;
            var4 = var11.bind(var12)(var4);
            var6['imageAlt'] = var4;
            var4 = _closure1_slot4;
            var4 = var4.STEAM_ITEM_COUNT_DOTA2;
            var4 = var10.bind(var7)(var9, var6, var4);
            var4 = var5.bind(var1)(var4);
case 57:
            if(!(var15 > var3)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var3 = var1.push;
            var6 = _closure1_slot6;
            var5 = _closure1_slot13;
            var4 = {};
            var4['style'] = var8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var9 = var12[var8];
            var9 = var11.bind(var7)(var9);
            var14 = var9.intl;
            var13 = var14.format;
            var9 = var12[var8];
            var9 = var11.bind(var7)(var9);
            var9 = var9.t;
            var10 = var9.Y88M5+;
            var9 = {};
            var9['count'] = var15;
            var9 = var13.bind(var14)(var10, var9);
            var4['label'] = var9;
            var10 = _closure1_slot1;
            var9 = 8;
            var9 = var12[var9];
            var9 = var10.bind(var7)(var9);
            var4['imageSrc'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.C8p1Sk;
            var8 = var9.bind(var10)(var8);
            var4['imageAlt'] = var8;
            var2 = _closure1_slot4;
            var2 = var2.STEAM_ITEM_COUNT_TF2;
            var2 = var6.bind(var7)(var5, var4, var2);
            var2 = var3.bind(var1)(var2);
case 59:
            return var1;
        }
    };
    var3['generateSteamMetadataItems'] = var4;
    var4 = function generatePaypalMetadataItems(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var7 = undefined;
case 61:
            var1 = new Array(0);
            var3 = _closure1_slot4;
            var4 = var3.PAYPAL_VERIFIED;
            var3 = arg1;
            var4 = var3[var4];
            var3 = '1';
            if(!(var3 === var4)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var3 = var1.push;
            var5 = _closure1_slot6;
            var4 = _closure1_slot11;
            var2 = {};
            var2['style'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.bind(var1)(var2);
case 63:
            return var1;
        }
    };
    var3['generatePaypalMetadataItems'] = var4;
    var4 = function generateEbayMetadataItems(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0010_ip = 32; continue _fun0010 }
case 40:
            var8 = undefined;
case 32:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Number;
            var3 = _closure1_slot4;
            var3 = var3.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
            var6 = var5[var3];
            var3 = null;
            var9 = var3 != var6;
            var3 = -1;
            if(!var9) { _fun0010_ip = 7; continue _fun0010 }
case 65:
            var3 = var6;
case 7:
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot4;
            var4 = var4.EBAY_TOP_RATED_SELLER;
            var4 = var5[var4];
            var5 = 0;
            if(!(var3 > var5)) { _fun0010_ip = 66; continue _fun0010 }
case 9:
            var5 = var1.push;
            var10 = _closure1_slot6;
            var9 = _closure1_slot12;
            var6 = {};
            var6['style'] = var8;
            var6['count'] = var3;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var3 = var11.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.YmL22d;
            var6['label'] = var3;
            var3 = true;
            var6['percent'] = var3;
            var3 = _closure1_slot4;
            var3 = var3.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
            var3 = var10.bind(var7)(var9, var6, var3);
            var3 = var5.bind(var1)(var3);
case 66:
            var3 = '1';
            if(!(var3 === var4)) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var3 = var1.push;
            var6 = _closure1_slot6;
            var5 = _closure1_slot14;
            var4 = {};
            var4['style'] = var8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var9 = var12[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.TEEYwc;
            var8 = var9.bind(var10)(var8);
            var4['label'] = var8;
            var2 = _closure1_slot4;
            var2 = var2.EBAY_TOP_RATED_SELLER;
            var2 = var6.bind(var7)(var5, var4, var2);
            var2 = var3.bind(var1)(var2);
case 67:
            return var1;
        }
    };
    var3['generateEbayMetadataItems'] = var4;
    var4 = function generateTikTokMetadataItems(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var12 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0011_ip = 32; continue _fun0011 }
case 40:
            var8 = undefined;
case 32:
            var1 = new Array(0);
            var3 = _closure1_slot4;
            var3 = var3.TIKTOK_VERIFIED;
            var4 = var12[var3];
            var10 = global;
            var9 = var10.Number;
            var3 = _closure1_slot4;
            var3 = var3.TIKTOK_FOLLOWER_COUNT;
            var11 = var12[var3];
            var3 = null;
            var13 = var3 != var11;
            var5 = -1;
            var6 = var5;
            if(!var13) { _fun0011_ip = 69; continue _fun0011 }
case 63:
            var6 = var11;
case 69:
            var9 = var9.bind(var7)(var6);
            var11 = var10.Number;
            var6 = _closure1_slot4;
            var6 = var6.TIKTOK_FOLLOWING_COUNT;
            var13 = var12[var6];
            var14 = var3 != var13;
            var6 = var5;
            if(!var14) { _fun0011_ip = 70; continue _fun0011 }
case 71:
            var6 = var13;
case 70:
            var6 = var11.bind(var7)(var6);
            var10 = var10.Number;
            var11 = _closure1_slot4;
            var11 = var11.TIKTOK_LIKES_COUNT;
            var11 = var12[var11];
            var12 = var3 != var11;
            var3 = var5;
            if(!var12) { _fun0011_ip = 72; continue _fun0011 }
case 73:
            var3 = var11;
case 72:
            var3 = var10.bind(var7)(var3);
            if(!(var9 > var5)) { _fun0011_ip = 74; continue _fun0011 }
case 14:
            var10 = var1.push;
            var13 = _closure1_slot6;
            var12 = _closure1_slot12;
            var11 = {};
            var11['style'] = var8;
            var11['count'] = var9;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 6;
            var9 = var15[var9];
            var9 = var14.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.Mpm/BQ;
            var11['label'] = var9;
            var9 = _closure1_slot4;
            var9 = var9.TIKTOK_FOLLOWER_COUNT;
            var9 = var13.bind(var7)(var12, var11, var9);
            var9 = var10.bind(var1)(var9);
case 74:
            if(!(var6 > var5)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var9 = var1.push;
            var12 = _closure1_slot6;
            var11 = _closure1_slot12;
            var10 = {};
            var10['style'] = var8;
            var10['count'] = var6;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 6;
            var6 = var14[var6];
            var6 = var13.bind(var7)(var6);
            var6 = var6.t;
            var6 = var6.ftf12t;
            var10['label'] = var6;
            var6 = _closure1_slot4;
            var6 = var6.TIKTOK_FOLLOWING_COUNT;
            var6 = var12.bind(var7)(var11, var10, var6);
            var6 = var9.bind(var1)(var6);
case 75:
            if(!(var3 > var5)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
            var5 = var1.push;
            var10 = _closure1_slot6;
            var9 = _closure1_slot12;
            var6 = {};
            var6['style'] = var8;
            var6['count'] = var3;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var3 = var11.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.Qwhe5u;
            var6['label'] = var3;
            var3 = _closure1_slot4;
            var3 = var3.TIKTOK_LIKES_COUNT;
            var3 = var10.bind(var7)(var9, var6, var3);
            var3 = var5.bind(var1)(var3);
case 77:
            var3 = '1';
            if(!(var3 === var4)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
            var3 = var1.push;
            var6 = _closure1_slot6;
            var5 = _closure1_slot14;
            var4 = {};
            var4['style'] = var8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var9 = var12[var8];
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.QHHwRU;
            var8 = var9.bind(var10)(var8);
            var4['label'] = var8;
            var2 = _closure1_slot4;
            var2 = var2.TIKTOK_VERIFIED;
            var2 = var6.bind(var7)(var5, var4, var2);
            var2 = var3.bind(var1)(var2);
case 79:
            return var1;
        }
    };
    var3['generateTikTokMetadataItems'] = var4;
    var2 = function generateRoleConnectionMetadataItems(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var4 = arguments[1];
            var3 = arguments[2];
            var10 = var5;
            var _closure2_slot0 = var5;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
            var4 = undefined;
case 81:
            var11 = var4;
            if(!(var3 === var9)) { _fun0012_ip = 83; continue _fun0012 }
case 33:
            var3 = undefined;
case 83:
            var12 = var3;
            var13 = undefined;
            var14 = undefined;
            var15 = undefined;
            var1 = new Array(0);
            var8 = global;
            var6 = var8.Object;
            var5 = var6.keys;
            var3 = var10;
            var4 = var3.metadata;
            var16 = var5.bind(var6)(var4);
            var3 = var3.application_metadata;
            var7 = null;
            if(!(var7 != var3)) { _fun0012_ip = 84; continue _fun0012 }
case 85:
            var5 = var8.Object;
            var4 = var5.keys;
            var3 = var10;
            var3 = var3.application_metadata;
            var3 = var4.bind(var5)(var3);
            var3 = var3.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0012_ip = 84; continue _fun0012 }
case 86:
            var3 = var16.length;
            if(!(var4 !== var3)) { _fun0012_ip = 84; continue _fun0012 }
case 87:
            var3 = _closure1_slot9;
            var5 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 9;
            var4 = var17[var4];
            var5 = var5.bind(var9)(var4);
            var4 = var5.sortBy;
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var5 = var1.application_metadata;
                    var3 = null;
                    var2 = var3 == var5;
                    var1 = undefined;
                    if(var2) { _fun0013_ip = 64; continue _fun0013 }
case 82:
                    var2 = arg1;
                    var2 = var5[var2];
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0013_ip = 64; continue _fun0013 }
case 88:
                    var1 = var2.name;
case 64:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var16, var2);
            var5 = var3.bind(var9)(var2);
            var3 = var5.bind(var9)();
            var2 = var3.done;
            var4 = '1';
            if(var2) { _fun0012_ip = 89; continue _fun0012 }
case 90:
            var16 = var3.value;
            var13 = var16;
            var2 = var10;
            var2 = var2.application_metadata;
            var2 = var2[var16];
            var14 = var2;
            if(!(var7 != var2)) { _fun0012_ip = 91; continue _fun0012 }
case 92:
            var2 = var10;
            var16 = var2.metadata;
            var2 = var13;
            var15 = var16[var2];
case 93: // try_start_0
            var2 = var14;
            var16 = var2.type;
            var2 = _closure1_slot5;
            var2 = var2.BOOLEAN_EQUAL;
            if(!(var2 !== var16)) { _fun0012_ip = 94; continue _fun0012 }
case 95:
            var2 = _closure1_slot5;
            var2 = var2.BOOLEAN_NOT_EQUAL;
            if(!(var2 !== var16)) { _fun0012_ip = 94; continue _fun0012 }
case 96:
            var2 = _closure1_slot5;
            var2 = var2.DATETIME_GREATER_THAN_EQUAL;
            if(!(var2 !== var16)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
            var2 = _closure1_slot5;
            var2 = var2.DATETIME_LESS_THAN_EQUAL;
            if(!(var2 !== var16)) { _fun0012_ip = 97; continue _fun0012 }
case 99:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_EQUAL;
            if(!(var2 !== var16)) { _fun0012_ip = 100; continue _fun0012 }
case 101:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_NOT_EQUAL;
            if(!(var2 !== var16)) { _fun0012_ip = 100; continue _fun0012 }
case 102:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_GREATER_THAN_EQUAL;
            if(!(var2 !== var16)) { _fun0012_ip = 100; continue _fun0012 }
case 103:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_LESS_THAN_EQUAL;
            if(!(var2 === var16)) { _fun0012_ip = 104; continue _fun0012 }
case 100:
            var17 = var1;
            var16 = var17.push;
            var20 = _closure1_slot6;
            var19 = _closure1_slot12;
            var18 = {};
            var2 = var11;
            var18['style'] = var2;
            var21 = var8.Number;
            var2 = var15;
            var2 = var21.bind(var9)(var2);
            var18['count'] = var2;
            var2 = var14;
            var21 = var2.name;
            var18['label'] = var21;
            var2 = var2.key;
            var2 = var20.bind(var9)(var19, var18, var2);
            var2 = var16.bind(var17)(var2);
            _fun0012_ip = 104; continue _fun0012;
case 97:
            var17 = var1;
            var16 = var17.push;
            var20 = _closure1_slot6;
            var19 = _closure1_slot15;
            var18 = {};
            var2 = var11;
            var18['style'] = var2;
            var2 = var15;
            var18['date'] = var2;
            var2 = var12;
            var18['locale'] = var2;
            var2 = var14;
            var21 = var2.name;
            var18['label'] = var21;
            var2 = var2.key;
            var2 = var20.bind(var9)(var19, var18, var2);
            var2 = var16.bind(var17)(var2);
            _fun0012_ip = 104; continue _fun0012;
case 94:
            var17 = var14;
            var18 = var17.type;
            var17 = _closure1_slot5;
            var17 = var17.BOOLEAN_EQUAL;
            var17 = var18 === var17;
            var16 = var17;
            if(!var17) { _fun0012_ip = 105; continue _fun0012 }
case 106:
            var17 = var15;
            var16 = var4 === var17;
case 105:
            var2 = var16;
            if(var16) { _fun0012_ip = 107; continue _fun0012 }
case 108:
            var17 = var14;
            var18 = var17.type;
            var17 = _closure1_slot5;
            var17 = var17.BOOLEAN_NOT_EQUAL;
            var17 = var18 === var17;
            var16 = var17;
            if(!var17) { _fun0012_ip = 109; continue _fun0012 }
case 110:
            var17 = var15;
            var16 = var4 !== var17;
case 109:
            var2 = var16;
case 107:
            if(!var2) { _fun0012_ip = 104; continue _fun0012 }
case 111:
            var17 = var1;
            var16 = var17.push;
            var20 = _closure1_slot6;
            var19 = _closure1_slot14;
            var18 = {};
            var2 = var11;
            var18['style'] = var2;
            var2 = var14;
            var21 = var2.name;
            var18['label'] = var21;
            var2 = var2.key;
            var2 = var20.bind(var9)(var19, var18, var2);
            var2 = var16.bind(var17)(var2);
case 104: // try_end0
            _fun0012_ip = 91; continue _fun0012;
case 112: // catch_target0
            CatchBlockStart(arg_register=1);
case 91:
            var16 = var5.bind(var9)();
            var2 = var16.done;
            var3 = var16;
            if(!var2) { _fun0012_ip = 90; continue _fun0012 }
case 89:
            var2 = var1;
            return var2;
case 84:
            return var1;
        }
    };
    var3['generateRoleConnectionMetadataItems'] = var2;
    return var1;
})();