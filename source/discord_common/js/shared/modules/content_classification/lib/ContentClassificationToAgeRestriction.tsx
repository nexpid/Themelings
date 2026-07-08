// discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var2 = function contentClassificationToAgeRestrictionConclusion(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = new Array(0);
            var6 = var1.type;
            var1 = var1.data;
            var5 = _closure1_slot3;
            var5 = var5.MINIMAL;
            if(!(var6 !== var5)) { _fun0004_ip = 38; continue _fun0004 }
case 2:
            var5 = var1.manual_classifications;
            if(!(var3 == var5)) { _fun0004_ip = 39; continue _fun0004 }
case 28:
            var5 = var1.automated_classifications;
            if(!(var3 != var5)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var6 = var4.push;
            var9 = _closure1_slot8;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 0;
            var5 = var8[var5];
            var8 = undefined;
            var5 = var7.bind(var8)(var5);
            var5 = var5.AgeRestrictionSource;
            var7 = var5.AUTOMATED_CLASSIFICATION;
            var5 = var1.automated_classifications;
            var5 = var9.bind(var8)(var7, var5);
            var5 = var6.bind(var4)(var5);
            _fun0004_ip = 40; continue _fun0004;
case 39:
            var6 = var4.push;
            var9 = _closure1_slot8;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 0;
            var5 = var8[var5];
            var8 = undefined;
            var5 = var7.bind(var8)(var5);
            var5 = var5.AgeRestrictionSource;
            var7 = var5.MANUAL_CLASSIFICATION;
            var5 = var1.manual_classifications;
            var5 = var9.bind(var8)(var7, var5);
            var5 = var6.bind(var4)(var5);
            _fun0004_ip = 40; continue _fun0004;
case 38:
            var5 = var1.discord_classifications;
            if(!(var3 != var5)) { _fun0004_ip = 40; continue _fun0004 }
case 42:
            var6 = var4.push;
            var9 = _closure1_slot8;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 0;
            var5 = var8[var5];
            var8 = undefined;
            var5 = var7.bind(var8)(var5);
            var5 = var5.AgeRestrictionSource;
            var7 = var5.DISCORD_CLASSIFICATION;
            var5 = var1.discord_classifications;
            var5 = var9.bind(var8)(var7, var5);
            var5 = var6.bind(var4)(var5);
case 40:
            var5 = var1.agency_ratings;
            if(!(var3 != var5)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var5 = var1.agency_ratings;
            var5 = var5.esrb;
            if(!(var3 != var5)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var6 = var4.push;
            var5 = var1.agency_ratings;
            var5 = var5.esrb;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 4;
            var7 = var9[var7];
            var10 = undefined;
            var7 = var8.bind(var10)(var7);
            var7 = var7.ContentRatingESRBRatingSets;
            var8 = var7.IS_ADULT_ONLY;
            var7 = var8.has;
            var5 = var5.rating;
            var7 = var7.bind(var8)(var5);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 1;
            var5 = var9[var5];
            var5 = var8.bind(var10)(var5);
            var5 = var5.AgeRestrictionStatus;
            if(var7) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var7 = var5.EVERYONE;
            _fun0004_ip = 49; continue _fun0004;
case 47:
            var7 = var5.ADULT;
case 49:
            var5 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 0;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.AgeRestrictionSource;
            var8 = var8.AGENCY_CLASSIFICATION_ESRB;
            var5['source'] = var8;
            var5['status'] = var7;
            var5 = var6.bind(var4)(var5);
case 45:
            var5 = var1.agency_ratings;
            var5 = var5.pegi;
            if(!(var3 != var5)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var6 = var4.push;
            var5 = var1.agency_ratings;
            var5 = var5.pegi;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var10 = undefined;
            var7 = var8.bind(var10)(var7);
            var7 = var7.ContentRatingPEGIRatingSets;
            var8 = var7.IS_ADULT_ONLY;
            var7 = var8.has;
            var5 = var5.rating;
            var7 = var7.bind(var8)(var5);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 1;
            var5 = var9[var5];
            var5 = var8.bind(var10)(var5);
            var5 = var5.AgeRestrictionStatus;
            if(var7) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var7 = var5.EVERYONE;
            _fun0004_ip = 54; continue _fun0004;
case 52:
            var7 = var5.ADULT;
case 54:
            var5 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 0;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.AgeRestrictionSource;
            var8 = var8.AGENCY_CLASSIFICATION_PEGI;
            var5['source'] = var8;
            var5['status'] = var7;
            var5 = var6.bind(var4)(var5);
case 50:
            var5 = var1.agency_ratings;
            var5 = var5.gop;
            if(!(var3 != var5)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var6 = var4.push;
            var5 = var1.agency_ratings;
            var5 = var5.gop;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var10 = undefined;
            var7 = var8.bind(var10)(var7);
            var7 = var7.ContentRatingGOPClassificationSets;
            var8 = var7.IS_ADULT;
            var7 = var8.has;
            var5 = var5.classification;
            var7 = var7.bind(var8)(var5);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 1;
            var5 = var9[var5];
            var5 = var8.bind(var10)(var5);
            var5 = var5.AgeRestrictionStatus;
            if(var7) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var7 = var5.EVERYONE;
            _fun0004_ip = 59; continue _fun0004;
case 57:
            var7 = var5.ADULT;
case 59:
            var5 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 0;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.AgeRestrictionSource;
            var8 = var8.AGENCY_CLASSIFICATION_GOP;
            var5['source'] = var8;
            var5['status'] = var7;
            var5 = var6.bind(var4)(var5);
case 55:
            var5 = var1.agency_ratings;
            var5 = var5.igdb;
            if(!(var3 != var5)) { _fun0004_ip = 43; continue _fun0004 }
case 60:
            var5 = var4.push;
            var1 = var1.agency_ratings;
            var7 = var1.igdb;
            var6 = function _conclusionFromIGDB(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.themes;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var3 = new Array(0);
case 61:
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.ContentRatingIGDBThemeSets;
                        var3 = var1.ADULT_THEMES;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 1;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.AgeRestrictionStatus;
                    if(var2) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var2 = var1.EVERYONE;
                    _fun0005_ip = 65; continue _fun0005;
case 63:
                    var2 = var1.ADULT;
case 65:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 0;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.AgeRestrictionSource;
                    var3 = var3.AGENCY_CLASSIFICATION_IGDB;
                    var1['source'] = var3;
                    var1['status'] = var2;
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var6.bind(var1)(var7);
            var1 = var5.bind(var4)(var1);
case 43:
            var1 = _closure1_slot5;
            var10 = undefined;
            var9 = var1.bind(var10)(var4);
            var1 = var9.bind(var10)();
            var4 = var1.done;
            var8 = 8;
            var7 = 0;
            var6 = var1;
            var5 = null;
            var1 = null;
            if(var4) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var4 = var6.value;
            var11 = var4;
            if(!(var3 != var5)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var15 = var13.bind(var10)(var12);
            var14 = var15.compare;
            var13 = var4.status;
            var12 = var5.status;
            var12 = var14.bind(var15)(var13, var12);
            var11 = var5;
            if(!(var12 > var7)) { _fun0004_ip = 68; continue _fun0004 }
case 70:
            var11 = var4;
case 68:
            var12 = var9.bind(var10)();
            var4 = var12.done;
            var5 = var11;
            var6 = var12;
            var1 = var5;
            if(!var4) { _fun0004_ip = 67; continue _fun0004 }
case 66:
            if(!(var3 == var1)) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var1 = _closure1_slot4;
case 71:
            return var1;
case 36:
            var1 = _closure1_slot4;
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = function _conclusionFromDiscordContentClassificationFlags(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = 2;
            var2 = var1[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var2);
            var7 = var8.deserialize;
            var2 = arg2;
            var7 = var7.bind(var8)(var2);
            var2 = var1[var4];
            var6 = var6.bind(var5)(var2);
            var2 = var6.has;
            var8 = _closure1_slot0;
            var9 = 3;
            var1 = var1[var9];
            var1 = var8.bind(var5)(var1);
            var1 = var1.DiscordContentClassificationFlags;
            var1 = var1.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED;
            var1 = var2.bind(var6)(var7, var1);
            var2 = {};
            var6 = arg1;
            var2['source'] = var6;
            if(var1) { _fun0006_ip = 22; continue _fun0006 }
case 73:
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = var1[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.hasAny;
            var8 = _closure1_slot0;
            var1 = var1[var9];
            var1 = var8.bind(var5)(var1);
            var1 = var1.DiscordContentClassificationFlagMasks;
            var1 = var1.RESTRICTED_TO_ADULT;
            var1 = var4.bind(var6)(var7, var1);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 1;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.AgeRestrictionStatus;
            if(var1) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var1 = var4.EVERYONE;
            _fun0006_ip = 76; continue _fun0006;
case 74:
            var1 = var4.ADULT;
case 76:
            var2['status'] = var1;
            var1 = var2;
            _fun0006_ip = 77; continue _fun0006;
case 22:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.AgeRestrictionStatus;
            var3 = var3.ADULT;
            var2['status'] = var3;
            var1 = var2;
case 77:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var5 = {};
    var1 = 'full';
    var5['FULL'] = var1;
    var1 = 'minimal';
    var5['MINIMAL'] = var1;
    var _closure1_slot3 = var5;
    var6 = {};
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var9 = var9.AgeRestrictionSource;
    var9 = var9.NO_CLASSIFICATION;
    var6['source'] = var9;
    var9 = 1;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.AgeRestrictionStatus;
    var9 = var9.EVERYONE;
    var6['status'] = var9;
    var _closure1_slot4 = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ContentClassificationVariant'] = var5;
    var4 = function contentClassificationToAgeRestriction(arg1) {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.status;
        return var1;
    };
    var3['contentClassificationToAgeRestriction'] = var4;
    var3['contentClassificationToAgeRestrictionConclusion'] = var2;
    return var1;
})();