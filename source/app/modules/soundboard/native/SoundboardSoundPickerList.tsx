// app/modules/soundboard/native/SoundboardSoundPickerList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var1 = function getSectionLabel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.category;
            var2 = var2.categoryInfo;
            var4 = var2.type;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 7;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var3 = var3.SoundboardSoundGridSectionType;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.SoundboardSoundGridSectionType;
            var3 = var3.DEFAULTS;
            if(!(var3 !== var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.SoundboardSoundGridSectionType;
            var3 = var3.FAVORITES;
            if(!(var3 !== var4)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.SoundboardSoundGridSectionType;
            var3 = var3.SEARCH;
            if(!(var3 !== var4)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.SoundboardSoundGridSectionType;
            var3 = var3.RECENTLY_HEARD;
            if(!(var3 !== var4)) { _fun0004_ip = 44; continue _fun0004 }
case 22:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.SoundboardSoundGridSectionType;
            var3 = var3.FREQUENTLY_USED;
            if(!(var3 !== var4)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            return var6;
case 45:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.+cGVV1;
            var3 = var4.bind(var5)(var3);
            return var3;
case 44:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.8i/+SE;
            var3 = var4.bind(var5)(var3);
            return var3;
case 42:
            var3 = null;
            return var3;
case 40:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.y3LQCA;
            var3 = var4.bind(var5)(var3);
            return var3;
case 38:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.Rtvk9f;
            var2 = var3.bind(var4)(var2);
            return var2;
case 36:
            var1 = var1.category;
            var1 = var1.categoryInfo;
            var1 = var1.guild;
            var1 = var1.name;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.SOUND_BUTTON_HEIGHT;
    var12 = var4.SOUND_ROW_HORIZONTAL_PADDING;
    var11 = var4.SOUND_ROW_SPACING;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.ACTION_SHEET_BACKGROUND_COLOR;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot6 = var9;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 8;
    var14 = var8 + var4;
    var _closure1_slot8 = var14;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'height': null, 'display': 'flex', 'flexDirection': 'row'};
    var10['height'] = var14;
    var10['paddingHorizontal'] = var12;
    var4['row'] = var10;
    var10 = {'flex': 1, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingTop': 16, 'paddingBottom': 8};
    var10['backgroundColor'] = var13;
    var10['paddingHorizontal'] = var12;
    var4['sectionHeader'] = var10;
    var10 = {'height': 16, 'width': 16, 'borderRadius': 8, 'marginRight': 4};
    var4['sectionIcon'] = var10;
    var10 = {};
    var10['marginLeft'] = var11;
    var4['soundButtonNotFirst'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = function SoundPickerButtonRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var9 = var1.row;
            var8 = var1.section;
            var _closure2_slot0 = var8;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot9;
            var11 = var1.bind(var5)();
            var _closure2_slot2 = var11;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var10 = var3.bind(var5)(var1);
            var4 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.canUseSoundboardEverywhere;
                var4 = _closure1_slot5;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var10)(var3, var1);
            var1 = null;
            if(!(var1 != var8)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var10 = !var3;
            if(!var10) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 12;
            var3 = var12[var3];
            var12 = var4.bind(var5)(var3);
            var4 = var12.isSoundboardSectionNitroLocked;
            var3 = var2.guild_id;
            var2 = var8.category;
            var2 = var2.categoryInfo;
            var10 = var4.bind(var12)(var3, var2);
case 49:
            _closure2_slot3 = var10;
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var12 = var11.row;
            var11 = new Array(1);
            var11[0] = var12;
            var2['style'] = var11;
            if(!var10) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var12 = _closure1_slot6;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var6 = var11.bind(var5)(var6);
            var11 = var6.PremiumUpsellGradientBackground;
            var6 = {};
            var10 = var12.bind(var5)(var11, var6);
case 51:
            var6 = new Array(2);
            var6[0] = var10;
            var8 = var8.soundsByRow;
            var9 = var8[var9];
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 7;
                    var3 = var3[var7];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.SoundboardSoundItemType;
                    var3 = var3.SOUND;
                    if(!(var3 !== var4)) { _fun0006_ip = 53; continue _fun0006 }
case 5:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.SoundboardSoundItemType;
                    var3 = var3.ADD_SOUND;
                    if(!(var3 !== var4)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    return var5;
case 54:
                    var3 = global;
                    var6 = var3.Error;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var12 = 'ADD_SOUND Not implemented';
                    var13 = var4;
                    var3 = new var13[var6](var12, var11);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 53:
                    var1 = var1.sound;
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.SoundButton;
                    var2 = {};
                    var2['sound'] = var1;
                    var7 = _closure2_slot1;
                    var2['channel'] = var7;
                    var8 = arg2;
                    var7 = 0;
                    var8 = var8 > var7;
                    var7 = null;
                    if(!var8) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var8 = _closure2_slot2;
                    var7 = var8.soundButtonNotFirst;
case 56:
                    var2['style'] = var7;
                    var7 = _closure2_slot3;
                    var2['isSectionLocked'] = var7;
                    var6 = _closure2_slot0;
                    var6 = var6.category;
                    var9 = var6.key;
                    var8 = var1.soundId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '';
                    var1 = '-';
                    var1 = var7.bind(var6)(var9, var1, var8);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 47:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var6 = var1.insetBottom;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0007_ip = 34; continue _fun0007 }
case 58:
            var6 = 0;
case 34:
            var8 = var1.listRef;
            var3 = var1.scrollPosition;
            var _closure2_slot1 = var3;
            var3 = var1.onScroll;
            var _closure2_slot2 = var3;
            var3 = var1.setCategoryIndex;
            var _closure2_slot3 = var3;
            var3 = var1.shouldShowPremiumUpsell;
            var _closure2_slot4 = var3;
            var11 = var1.categories;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var1 = function calculateCategory(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.round;
                    var1 = arg1;
                    var6 = var2.bind(var3)(var1);
                    var1 = _closure2_slot7;
                    var1 = var1.length;
                    var8 = 0;
                    var2 = var8 < var1;
                    var1 = 0;
                    if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var2 = _closure2_slot7;
                    var3 = var2[var8];
                    var2 = arg2;
                    var4 = var2 + var3;
                    var7 = var6 >= var4;
                    var3 = 0;
                    var2 = 0;
                    var1 = 0;
                    if(!var7) { _fun0008_ip = 59; continue _fun0008 }
case 61:
                    var7 = var3 + 1;
                    var2 = var2 + 1;
                    var8 = _closure2_slot7;
                    var8 = var8.length;
                    var1 = var7;
                    if(!(var2 < var8)) { _fun0008_ip = 59; continue _fun0008 }
case 62:
                    var8 = _closure2_slot7;
                    var8 = var8[var2];
                    var4 = var4 + var8;
                    var3 = var7;
                    var1 = var3;
                    if(var6 >= var4) { _fun0008_ip = 61; continue _fun0008 }
case 59:
                    return var1;
                }
            };
            var _closure2_slot11 = var1;
            var1 = function getSectionIcon(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.category;
                    var1 = var1.categoryInfo;
                    var2 = var1.type;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 7;
                    var1 = var1[var6];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.SoundboardSoundGridSectionType;
                    var1 = var1.GUILD;
                    if(!(var1 !== var2)) { _fun0009_ip = 63; continue _fun0009 }
case 37:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.SoundboardSoundGridSectionType;
                    var1 = var1.DEFAULTS;
                    if(!(var1 !== var2)) { _fun0009_ip = 64; continue _fun0009 }
case 39:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.SoundboardSoundGridSectionType;
                    var1 = var1.FAVORITES;
                    if(!(var1 !== var2)) { _fun0009_ip = 65; continue _fun0009 }
case 41:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.SoundboardSoundGridSectionType;
                    var1 = var1.RECENTLY_HEARD;
                    if(!(var1 !== var2)) { _fun0009_ip = 66; continue _fun0009 }
case 43:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.SoundboardSoundGridSectionType;
                    var1 = var1.FREQUENTLY_USED;
                    if(!(var1 !== var2)) { _fun0009_ip = 67; continue _fun0009 }
case 22:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.SoundboardSoundGridSectionType;
                    var1 = var1.SEARCH;
                    if(!(var1 !== var2)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    return var4;
case 45:
                    var1 = null;
                    return var1;
case 67:
                    var3 = _closure1_slot6;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var1 = var9[var1];
                    var2 = var8.bind(var4)(var1);
                    var1 = {};
                    var6 = 23;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var1['source'] = var6;
                    var6 = _closure2_slot5;
                    var6 = var6.sectionIcon;
                    var1['style'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 66:
                    var3 = _closure1_slot6;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var1 = var9[var1];
                    var2 = var8.bind(var4)(var1);
                    var1 = {};
                    var6 = 22;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var1['source'] = var6;
                    var6 = _closure2_slot5;
                    var6 = var6.sectionIcon;
                    var1['style'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 65:
                    var3 = _closure1_slot6;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var1 = var9[var1];
                    var2 = var8.bind(var4)(var1);
                    var1 = {};
                    var6 = 21;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var1['source'] = var6;
                    var6 = _closure2_slot5;
                    var6 = var6.sectionIcon;
                    var1['style'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 64:
                    var3 = _closure1_slot6;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var1 = var9[var1];
                    var2 = var8.bind(var4)(var1);
                    var1 = {};
                    var6 = 20;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var1['source'] = var6;
                    var6 = _closure2_slot5;
                    var6 = var6.sectionIcon;
                    var1['style'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 63:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 18;
                    var1 = var8[var6];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = _closure1_slot0;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.GuildIconSizes;
                    var6 = var6.XXSMALL_12;
                    var1['size'] = var6;
                    var5 = var5.category;
                    var5 = var5.categoryInfo;
                    var5 = var5.guild;
                    var1['guild'] = var5;
                    var5 = _closure2_slot5;
                    var5 = var5.sectionIcon;
                    var1['style'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var _closure2_slot12 = var1;
            var1 = function isSectionLocked(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var6 = arg1;
                    var1 = _closure2_slot10;
                    var1 = !var1;
                    if(!var1) { _fun0010_ip = 3; continue _fun0010 }
case 68:
                    var3 = _closure2_slot6;
                    var4 = var3[var6];
                    var3 = null;
                    var1 = var3 != var4;
case 3:
                    if(!var1) { _fun0010_ip = 69; continue _fun0010 }
case 33:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isSoundboardSectionNitroLocked;
                    var3 = _closure2_slot0;
                    var3 = var3.guild_id;
                    var2 = _closure2_slot6;
                    var2 = var2[var6];
                    var2 = var2.category;
                    var2 = var2.categoryInfo;
                    var1 = var4.bind(var5)(var3, var2);
case 69:
                    return var1;
                }
            };
            var _closure2_slot13 = var1;
            var1 = function getSectionPosition(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot13;
                    var2 = 1;
                    var1 = var4 - var2;
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var6 = var3.bind(var5)(var4);
                    var2 = var4 + var2;
                    var3 = var3.bind(var5)(var2);
                    if(var6) { _fun0011_ip = 54; continue _fun0011 }
case 70:
                    if(!var3) { _fun0011_ip = 54; continue _fun0011 }
case 60:
                    if(var1) { _fun0011_ip = 54; continue _fun0011 }
case 71:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 24;
                    var1 = var4[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.PremiumUpsellSectionDividerPosition;
                    var1 = var1.START;
                    _fun0011_ip = 72; continue _fun0011;
case 54:
                    var2 = null;
                    if(!var6) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                    var2 = null;
                    if(var3) { _fun0011_ip = 73; continue _fun0011 }
case 62:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.PremiumUpsellSectionDividerPosition;
                    var2 = var3.END;
case 73:
                    var1 = var2;
case 72:
                    return var1;
                }
            };
            var _closure2_slot14 = var1;
            var3 = _closure1_slot9;
            var3 = var3.bind(var4)();
            _closure2_slot5 = var3;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 15;
            var7 = var10[var7];
            var9 = var3.bind(var4)(var7);
            var7 = var9.useFontScale;
            var18 = var7.bind(var9)();
            var7 = 16;
            var7 = var10[var7];
            var9 = var3.bind(var4)(var7);
            var7 = var9.useSoundPickerListStyleConfig;
            var7 = var7.bind(var9)();
            var17 = var7.soundsPerRow;
            var9 = new Array(0);
            var7 = _closure1_slot11;
            var14 = var7.bind(var4)(var11);
            var12 = var14.bind(var4)();
            var7 = var12.done;
            var13 = global;
            if(var7) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var7 = var12.value;
            var7 = var7.items;
            var16 = var13.Math;
            var15 = var16.ceil;
            var7 = var7.length;
            var7 = var7 / var17;
            var15 = var15.bind(var16)(var7);
            var7 = var9.push;
            var7 = var7.bind(var9)(var15);
            var15 = var14.bind(var4)();
            var7 = var15.done;
            var12 = var15;
            if(!var7) { _fun0007_ip = 76; continue _fun0007 }
case 75:
            var13 = new Array(0);
            var7 = _closure1_slot11;
            var16 = var7.bind(var4)(var11);
            var11 = var16.bind(var4)();
            var7 = var11.done;
            var15 = 9;
            var14 = 18;
            var12 = 8;
            if(var7) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var23 = var11.value;
            var19 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var15];
            var19 = var19.bind(var4)(var7);
            var7 = var23.items;
            var20 = var19.bind(var4)(var7, var17);
            var19 = var20.length;
            var7 = _closure1_slot8;
            var22 = var19 * var7;
            var21 = var14 * var18;
            var19 = var13.push;
            var7 = {};
            var7['category'] = var23;
            var21 = var21 + var12;
            var21 = var22 + var21;
            var7['height'] = var21;
            var7['soundsByRow'] = var20;
            var7 = var19.bind(var13)(var7);
            var19 = var16.bind(var4)();
            var7 = var19.done;
            var11 = var19;
            if(!var7) { _fun0007_ip = 78; continue _fun0007 }
case 77:
            _closure2_slot6 = var13;
            var12 = _closure1_slot3;
            var14 = var12.useMemo;
            var11 = new Array(1);
            var11[0] = var13;
            var7 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.height;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var14.bind(var12)(var7, var11);
            _closure2_slot7 = var7;
            var11 = var12.useCallback;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var2;
            var2 = function(arg1, arg2) {
                var4 = _closure1_slot6;
                var3 = _closure1_slot10;
                var2 = {};
                var1 = arg2;
                var2['row'] = var1;
                var6 = _closure2_slot6;
                var5 = arg1;
                var5 = var6[var5];
                var2['section'] = var5;
                var1 = _closure2_slot0;
                var2['channel'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7 = var11.bind(var12)(var2, var7);
            var2 = 17;
            var11 = var10[var2];
            var13 = var3.bind(var4)(var11);
            var12 = var13.debounce;
            var11 = function(arg1) {
                var5 = _closure2_slot11;
                var1 = undefined;
                var4 = arg1;
                var3 = 0;
                var3 = var5.bind(var1)(var4, var3);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var11 = var12.bind(var13)(var11);
            _closure2_slot8 = var11;
            var2 = var10[var2];
            var12 = var3.bind(var4)(var2);
            var11 = var12.debounce;
            var2 = function(arg1, arg2) {
                var5 = _closure2_slot11;
                var1 = arg2;
                var3 = -var1;
                var1 = 2;
                var4 = var3 / var1;
                var1 = undefined;
                var3 = arg1;
                var8 = var5.bind(var1)(var3, var4);
                var4 = _closure2_slot4;
                var3 = var4.set;
                var5 = _closure2_slot13;
                var6 = global;
                var7 = var6.Math;
                var6 = var7.min;
                var2 = _closure2_slot7;
                var9 = var2.length;
                var2 = 1;
                var2 = var9 - var2;
                var2 = var6.bind(var7)(var8, var2);
                var2 = var5.bind(var1)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var11.bind(var12)(var2);
            _closure2_slot9 = var2;
            var2 = 10;
            var2 = var10[var2];
            var12 = var3.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.canUseSoundboardEverywhere;
                var4 = _closure1_slot5;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var11.bind(var12)(var3, var2);
            _closure2_slot10 = var2;
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 25;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = function onLayout(arg1) {
                var4 = _closure2_slot9;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var2 = undefined;
                var1 = 0;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1['onLayout'] = var10;
            var1['sections'] = var9;
            var9 = function sectionSize(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = arg1;
                    var4 = var2[var1];
                    var2 = null;
                    if(!(var2 != var4)) { _fun0012_ip = 60; continue _fun0012 }
case 29:
                    var3 = _closure1_slot13;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4);
                    var2 = var2 == var1;
                    var1 = 42;
                    if(!var2) { _fun0012_ip = 2; continue _fun0012 }
case 60:
                    var1 = 0;
case 2:
                    return var1;
                }
            };
            var1['sectionSize'] = var9;
            var9 = function itemSize(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    var2 = var1 == var2;
                    var1 = 0;
                    if(var2) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                    var1 = _closure1_slot8;
case 79:
                    return var1;
                }
            };
            var1['itemSize'] = var9;
            var9 = function sectionFooterSize(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var5 = undefined;
                    var1 = arg1;
                    var2 = var2.bind(var5)(var1);
                    var1 = null;
                    var2 = var1 == var2;
                    var1 = 0;
                    if(var2) { _fun0014_ip = 81; continue _fun0014 }
case 34:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 24;
                    var3 = var6[var2];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
                    var1 = var3 + var2;
case 81:
                    return var1;
                }
            };
            var1['sectionFooterSize'] = var9;
            var1['ref'] = var8;
            var1['renderItem'] = var7;
            var7 = function renderSection(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot6;
                    var1 = var1[var3];
                    var2 = _closure2_slot13;
                    var5 = undefined;
                    var8 = var2.bind(var5)(var3);
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var6 = {};
                    var10 = _closure2_slot5;
                    var10 = var10.sectionHeader;
                    var6['style'] = var10;
                    var10 = var8;
                    if(!var10) { _fun0015_ip = 82; continue _fun0015 }
case 37:
                    var13 = _closure1_slot6;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 13;
                    var8 = var14[var8];
                    var8 = var11.bind(var5)(var8);
                    var11 = var8.PremiumUpsellGradientBackground;
                    var8 = {};
                    var10 = var13.bind(var5)(var11, var8);
case 82:
                    var8 = new Array(3);
                    var8[0] = var10;
                    var9 = _closure2_slot12;
                    var9 = var9.bind(var5)(var1);
                    var8[1] = var9;
                    var11 = _closure1_slot6;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 26;
                    var9 = var13[var9];
                    var9 = var10.bind(var5)(var9);
                    var10 = var9.Text;
                    var9 = {'accessibilityRole': 'header', 'lineClamp': 1, 'variant': 'heading-sm/semibold'};
                    var12 = _closure1_slot13;
                    var12 = var12.bind(var5)(var1);
                    var9['children'] = var12;
                    var9 = var11.bind(var5)(var10, var9);
                    var8[2] = var9;
                    var6['children'] = var8;
                    var6 = var7.bind(var5)(var3, var6);
                    var2['children'] = var6;
                    var1 = var1.category;
                    var1 = var1.key;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var1['renderSection'] = var7;
            var7 = function renderSectionFooter(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var5 = undefined;
                    var1 = arg1;
                    var6 = var2.bind(var5)(var1);
                    var1 = null;
                    var2 = var1 != var6;
                    if(!var2) { _fun0016_ip = 83; continue _fun0016 }
case 58:
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 24;
                    var2 = var7[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var2['position'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 83:
                    return var1;
                }
            };
            var1['renderSectionFooter'] = var7;
            var1['insetEnd'] = var6;
            var5 = function onScroll(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.nativeEvent;
                    var1 = var4.contentOffset;
                    var7 = var1.y;
                    var5 = _closure2_slot8;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var7);
                    var6 = _closure2_slot9;
                    var5 = var4.layoutMeasurement;
                    var5 = var5.height;
                    var5 = var6.bind(var1)(var7, var5);
                    var6 = var4.layoutMeasurement;
                    var5 = var4.contentOffset;
                    var4 = var4.contentSize;
                    var6 = var6.height;
                    var5 = var5.y;
                    var5 = var6 + var5;
                    var6 = var4.height;
                    var4 = 20;
                    var4 = var6 - var4;
                    if(!(!(var5 >= var4))) { _fun0017_ip = 84; continue _fun0017 }
case 85:
                    var4 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0017_ip = 86; continue _fun0017 }
case 87:
                    var6 = _closure2_slot1;
                    var4 = var6.set;
                    var4 = var4.bind(var6)(var7);
case 86:
                    var4 = _closure2_slot2;
                    if(!(var5 != var4)) { _fun0017_ip = 84; continue _fun0017 }
case 88:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
case 84:
                    return var1;
                }
            };
            var1['onScroll'] = var5;
            var5 = 'handled';
            var1['keyboardShouldPersistTaps'] = var5;
            var5 = true;
            var1['optimizeListItemRender'] = var5;
            var1['inActionSheet'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/native/SoundboardSoundPickerList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['SoundboardSoundPickerList'] = var2;
    return var1;
})();