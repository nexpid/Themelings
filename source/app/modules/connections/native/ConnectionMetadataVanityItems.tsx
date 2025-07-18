// app/modules/connections/native/ConnectionMetadataVanityItems.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
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
 0:
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
            if(!var5) { _fun0004_ip = 79; continue _fun0004 }
 75:
            var2 = '%';
 79:
            var10 = var3 + var2;
            var3 = 'string';
            var2 = typeof var11;
            if(!(var3 !== var2)) { _fun0004_ip = 138; continue _fun0004 }
 94:
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
            _fun0004_ip = 204; continue _fun0004;
 138:
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
 204:
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
    var4 = native4;
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
 0:
            var9 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0005_ip = 14; continue _fun0005 }
 12:
            var8 = undefined;
 14:
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
            if(!var10) { _fun0005_ip = 64; continue _fun0005 }
 61:
            var3 = var5;
 64:
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot4;
            var4 = var4.REDDIT_GOLD;
            var5 = var9[var4];
            var4 = _closure1_slot4;
            var4 = var4.REDDIT_MOD;
            var4 = var9[var4];
            if(!(var3 > var6)) { _fun0005_ip = 183; continue _fun0005 }
 101:
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
 183:
            var3 = '1';
            if(!(var3 === var5)) { _fun0005_ip = 295; continue _fun0005 }
 193:
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
 295:
            if(!(var3 === var4)) { _fun0005_ip = 401; continue _fun0005 }
 299:
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
 401:
            return var1;
        }
    };
    var3['generateRedditMetadataItems'] = var4;
    var4 = function generateTwitterMetadataItems(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var10 = arg1;
            var9 = arguments[1];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0006_ip = 14; continue _fun0006 }
 12:
            var9 = undefined;
 14:
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
            if(!var12) { _fun0006_ip = 64; continue _fun0006 }
 61:
            var4 = var11;
 64:
            var4 = var8.bind(var7)(var4);
            var6 = var6.Number;
            var8 = _closure1_slot4;
            var8 = var8.TWITTER_FOLLOWERS_COUNT;
            var8 = var10[var8];
            var10 = var5 != var8;
            var5 = var3;
            if(!var10) { _fun0006_ip = 102; continue _fun0006 }
 99:
            var5 = var8;
 102:
            var8 = var6.bind(var7)(var5);
            if(!(var4 > var3)) { _fun0006_ip = 193; continue _fun0006 }
 111:
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
 193:
            if(!(var8 > var3)) { _fun0006_ip = 279; continue _fun0006 }
 197:
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
 279:
            return var1;
        }
    };
    var3['generateTwitterMetadataItems'] = var4;
    var4 = function generateSteamMetadataItems(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var10 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0007_ip = 14; continue _fun0007 }
 12:
            var8 = undefined;
 14:
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
            if(!var12) { _fun0007_ip = 64; continue _fun0007 }
 61:
            var4 = var11;
 64:
            var4 = var9.bind(var7)(var4);
            var11 = var6.Number;
            var9 = _closure1_slot4;
            var9 = var9.STEAM_ITEM_COUNT_DOTA2;
            var12 = var10[var9];
            var13 = var5 != var12;
            var9 = var3;
            if(!var13) { _fun0007_ip = 102; continue _fun0007 }
 99:
            var9 = var12;
 102:
            var18 = var11.bind(var7)(var9);
            var6 = var6.Number;
            var9 = _closure1_slot4;
            var9 = var9.STEAM_ITEM_COUNT_TF2;
            var9 = var10[var9];
            var10 = var5 != var9;
            var5 = var3;
            if(!var10) { _fun0007_ip = 140; continue _fun0007 }
 137:
            var5 = var9;
 140:
            var15 = var6.bind(var7)(var5);
            if(!(var4 > var3)) { _fun0007_ip = 231; continue _fun0007 }
 149:
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
 231:
            if(!(var18 > var3)) { _fun0007_ip = 417; continue _fun0007 }
 238:
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
 417:
            if(!(var15 > var3)) { _fun0007_ip = 603; continue _fun0007 }
 424:
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
 603:
            return var1;
        }
    };
    var3['generateSteamMetadataItems'] = var4;
    var4 = function generatePaypalMetadataItems(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0008_ip = 11; continue _fun0008 }
 9:
            var7 = undefined;
 11:
            var1 = new Array(0);
            var3 = _closure1_slot4;
            var4 = var3.PAYPAL_VERIFIED;
            var3 = arg1;
            var4 = var3[var4];
            var3 = '1';
            if(!(var3 === var4)) { _fun0008_ip = 75; continue _fun0008 }
 45:
            var3 = var1.push;
            var5 = _closure1_slot6;
            var4 = _closure1_slot11;
            var2 = {};
            var2['style'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.bind(var1)(var2);
 75:
            return var1;
        }
    };
    var3['generatePaypalMetadataItems'] = var4;
    var4 = function generateEbayMetadataItems(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0009_ip = 14; continue _fun0009 }
 12:
            var8 = undefined;
 14:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Number;
            var3 = _closure1_slot4;
            var3 = var3.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
            var6 = var5[var3];
            var3 = null;
            var9 = var3 != var6;
            var3 = -1;
            if(!var9) { _fun0009_ip = 61; continue _fun0009 }
 58:
            var3 = var6;
 61:
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot4;
            var4 = var4.EBAY_TOP_RATED_SELLER;
            var4 = var5[var4];
            var5 = 0;
            if(!(var3 > var5)) { _fun0009_ip = 175; continue _fun0009 }
 86:
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
 175:
            var3 = '1';
            if(!(var3 === var4)) { _fun0009_ip = 285; continue _fun0009 }
 185:
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
 285:
            return var1;
        }
    };
    var3['generateEbayMetadataItems'] = var4;
    var4 = function generateTikTokMetadataItems(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var12 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0010_ip = 14; continue _fun0010 }
 12:
            var8 = undefined;
 14:
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
            if(!var13) { _fun0010_ip = 78; continue _fun0010 }
 75:
            var6 = var11;
 78:
            var9 = var9.bind(var7)(var6);
            var11 = var10.Number;
            var6 = _closure1_slot4;
            var6 = var6.TIKTOK_FOLLOWING_COUNT;
            var13 = var12[var6];
            var14 = var3 != var13;
            var6 = var5;
            if(!var14) { _fun0010_ip = 116; continue _fun0010 }
 113:
            var6 = var13;
 116:
            var6 = var11.bind(var7)(var6);
            var10 = var10.Number;
            var11 = _closure1_slot4;
            var11 = var11.TIKTOK_LIKES_COUNT;
            var11 = var12[var11];
            var12 = var3 != var11;
            var3 = var5;
            if(!var12) { _fun0010_ip = 154; continue _fun0010 }
 151:
            var3 = var11;
 154:
            var3 = var10.bind(var7)(var3);
            if(!(var9 > var5)) { _fun0010_ip = 245; continue _fun0010 }
 163:
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
 245:
            if(!(var6 > var5)) { _fun0010_ip = 331; continue _fun0010 }
 249:
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
 331:
            if(!(var3 > var5)) { _fun0010_ip = 417; continue _fun0010 }
 335:
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
 417:
            var3 = '1';
            if(!(var3 === var4)) { _fun0010_ip = 529; continue _fun0010 }
 427:
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
 529:
            return var1;
        }
    };
    var3['generateTikTokMetadataItems'] = var4;
    var2 = function generateRoleConnectionMetadataItems(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var5 = arg1;
            var4 = arguments[1];
            var3 = arguments[2];
            var10 = var5;
            var _closure2_slot0 = var5;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0011_ip = 26; continue _fun0011 }
 24:
            var4 = undefined;
 26:
            var11 = var4;
            if(!(var3 === var9)) { _fun0011_ip = 35; continue _fun0011 }
 33:
            var3 = undefined;
 35:
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
            if(!(var7 != var3)) { _fun0011_ip = 710; continue _fun0011 }
 90:
            var5 = var8.Object;
            var4 = var5.keys;
            var3 = var10;
            var3 = var3.application_metadata;
            var3 = var4.bind(var5)(var3);
            var3 = var3.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0011_ip = 710; continue _fun0011 }
 129:
            var3 = var16.length;
            if(!(var4 !== var3)) { _fun0011_ip = 710; continue _fun0011 }
 141:
            var3 = _closure1_slot9;
            var5 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 9;
            var4 = var17[var4];
            var5 = var5.bind(var9)(var4);
            var4 = var5.sortBy;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot0;
                    var5 = var1.application_metadata;
                    var3 = null;
                    var2 = var3 == var5;
                    var1 = undefined;
                    if(var2) { _fun0012_ip = 45; continue _fun0012 }
 24:
                    var2 = arg1;
                    var2 = var5[var2];
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0012_ip = 45; continue _fun0012 }
 40:
                    var1 = var2.name;
 45:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var16, var2);
            var5 = var3.bind(var9)(var2);
            var3 = var5.bind(var9)();
            var2 = var3.done;
            var4 = '1';
            if(var2) { _fun0011_ip = 705; continue _fun0011 }
 213:
            var16 = var3.value;
            var13 = var16;
            var2 = var10;
            var2 = var2.application_metadata;
            var2 = var2[var16];
            var14 = var2;
            if(!(var7 != var2)) { _fun0011_ip = 687; continue _fun0011 }
 244:
            var2 = var10;
            var16 = var2.metadata;
            var2 = var13;
            var15 = var16[var2];
 260: // try_start_0
            var2 = var14;
            var16 = var2.type;
            var2 = _closure1_slot5;
            var2 = var2.BOOLEAN_EQUAL;
            if(!(var2 !== var16)) { _fun0011_ip = 547; continue _fun0011 }
 285:
            var2 = _closure1_slot5;
            var2 = var2.BOOLEAN_NOT_EQUAL;
            if(!(var2 !== var16)) { _fun0011_ip = 547; continue _fun0011 }
 302:
            var2 = _closure1_slot5;
            var2 = var2.DATETIME_GREATER_THAN_EQUAL;
            if(!(var2 !== var16)) { _fun0011_ip = 472; continue _fun0011 }
 319:
            var2 = _closure1_slot5;
            var2 = var2.DATETIME_LESS_THAN_EQUAL;
            if(!(var2 !== var16)) { _fun0011_ip = 472; continue _fun0011 }
 336:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_EQUAL;
            if(!(var2 !== var16)) { _fun0011_ip = 395; continue _fun0011 }
 350:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_NOT_EQUAL;
            if(!(var2 !== var16)) { _fun0011_ip = 395; continue _fun0011 }
 364:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_GREATER_THAN_EQUAL;
            if(!(var2 !== var16)) { _fun0011_ip = 395; continue _fun0011 }
 378:
            var2 = _closure1_slot5;
            var2 = var2.INTEGER_LESS_THAN_EQUAL;
            if(!(var2 === var16)) { _fun0011_ip = 683; continue _fun0011 }
 395:
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
            _fun0011_ip = 683; continue _fun0011;
 472:
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
            _fun0011_ip = 683; continue _fun0011;
 547:
            var17 = var14;
            var18 = var17.type;
            var17 = _closure1_slot5;
            var17 = var17.BOOLEAN_EQUAL;
            var17 = var18 === var17;
            var16 = var17;
            if(!var17) { _fun0011_ip = 582; continue _fun0011 }
 575:
            var17 = var15;
            var16 = var4 === var17;
 582:
            var2 = var16;
            if(var16) { _fun0011_ip = 626; continue _fun0011 }
 588:
            var17 = var14;
            var18 = var17.type;
            var17 = _closure1_slot5;
            var17 = var17.BOOLEAN_NOT_EQUAL;
            var17 = var18 === var17;
            var16 = var17;
            if(!var17) { _fun0011_ip = 623; continue _fun0011 }
 616:
            var17 = var15;
            var16 = var4 !== var17;
 623:
            var2 = var16;
 626:
            if(!var2) { _fun0011_ip = 683; continue _fun0011 }
 629:
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
 683: // try_end0
            _fun0011_ip = 687; continue _fun0011;
 685: // catch_target0
            CatchBlockStart(arg_register=1);
 687:
            var16 = var5.bind(var9)();
            var2 = var16.done;
            var3 = var16;
            if(!var2) { _fun0011_ip = 213; continue _fun0011 }
 705:
            var2 = var1;
            return var2;
 710:
            return var1;
        }
    };
    var3['generateRoleConnectionMetadataItems'] = var2;
    return var1;
})();