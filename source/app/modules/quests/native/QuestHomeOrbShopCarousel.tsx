// app/modules/quests/native/QuestHomeOrbShopCarousel.tsx
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var1 = function ListEdgeSpacer() {
        var4 = _closure1_slot8;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var5 = _closure1_slot10;
        var1['width'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function ItemSeparator() {
        var4 = _closure1_slot8;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var5 = _closure1_slot11;
        var1['width'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function QuestHomeOrbShopCarouselHeading(arg1) {
        var1 = arg1;
        var12 = var1.orbRewardAmount;
        var4 = _closure1_slot8;
        var3 = _closure1_slot5;
        var2 = {};
        var6 = {};
        var8 = _closure1_slot1;
        var13 = _closure1_slot2;
        var7 = 6;
        var9 = var13[var7];
        var1 = undefined;
        var9 = var8.bind(var1)(var9);
        var9 = var9.space;
        var9 = var9.PX_16;
        var6['paddingHorizontal'] = var9;
        var7 = var13[var7];
        var7 = var8.bind(var1)(var7);
        var7 = var7.space;
        var7 = var7.PX_16;
        var6['marginBottom'] = var7;
        var2['style'] = var6;
        var7 = _closure1_slot8;
        var9 = _closure1_slot0;
        var5 = 11;
        var5 = var13[var5];
        var5 = var9.bind(var1)(var5);
        var6 = var5.Heading;
        var5 = {};
        var8 = 'text-md/semibold';
        var5['variant'] = var8;
        var8 = 12;
        var10 = var13[var8];
        var10 = var9.bind(var1)(var10);
        var11 = var10.intl;
        var10 = var11.format;
        var8 = var13[var8];
        var8 = var9.bind(var1)(var8);
        var8 = var8.t;
        var9 = var8.CXlsRP;
        var8 = {};
        var8['orbAmount'] = var12;
        var8 = var10.bind(var11)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var1)(var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function QuestHomeOrbShopCarouselPlaceholder() {
        var6 = _closure1_slot4;
        var4 = var6.useCallback;
        var3 = function() {
            var4 = _closure1_slot8;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var5 = 14;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT;
            var1['height'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2 = new Array(0);
        var6 = var4.bind(var6)(var3, var2);
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = function(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = 'placeholder-';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = new Array(0);
        var7 = var3.bind(var4)(var2, var1);
        var4 = _closure1_slot8;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 15;
        var1 = var13[var1];
        var3 = undefined;
        var1 = var12.bind(var3)(var1);
        var2 = var1.FlashList;
        var1 = {'horizontal': true, 'accessibilityRole': 'list'};
        var9 = true;
        var8 = 12;
        var10 = var13[var8];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var8 = var13[var8];
        var8 = var12.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.hVV8Wi;
        var8 = var10.bind(var11)(var8);
        var1['accessibilityLabel'] = var8;
        var8 = {};
        var8['busy'] = var9;
        var1['accessibilityState'] = var8;
        var8 = _closure1_slot13;
        var1['data'] = var8;
        var1['keyExtractor'] = var7;
        var1['renderItem'] = var6;
        var6 = 'fast';
        var1['decelerationRate'] = var6;
        var6 = _closure1_slot12;
        var1['snapToInterval'] = var6;
        var6 = false;
        var1['showsHorizontalScrollIndicator'] = var6;
        var6 = _closure1_slot16;
        var1['ListHeaderComponent'] = var6;
        var1['ListFooterComponent'] = var6;
        var5 = _closure1_slot17;
        var1['ItemSeparatorComponent'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var9 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var9);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.QuestsExperimentLocations;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot8 = var9;
    var7 = var7.jsxs;
    var _closure1_slot9 = var7;
    var7 = 6;
    var9 = var6[var7];
    var9 = var8.bind(var1)(var9);
    var9 = var9.space;
    var9 = var9.PX_16;
    var _closure1_slot10 = var9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.space;
    var8 = var7.PX_12;
    var _closure1_slot11 = var8;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.COLLECTIBLES_SHOP_CARD_WIDTH;
    var7 = var7 + var8;
    var _closure1_slot12 = var7;
    var9 = var4.Array;
    var8 = var9.from;
    var7 = {};
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL;
    var7['length'] = var4;
    var4 = function(arg1, arg2) {
        var1 = arg2;
        return var1;
    };
    var4 = var8.bind(var9)(var7, var4);
    var _closure1_slot13 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHomeOrbShopCarousel.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function QuestHomeOrbShopCarousel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var21 = var2.orbShopProducts;
            var _closure2_slot0 = var21;
            var10 = var2.obtainableOrbRewards;
            var _closure2_slot1 = var10;
            var13 = var2.showOrbShopPlaceholderCarousel;
            var6 = undefined;
            if(!(var13 === var6)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var13 = false;
case 36:
            var _closure2_slot2 = var13;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var4 = 0;
            var5 = var2.bind(var3)(var4);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var6)(var5, var2);
            var8 = var3[var4];
            _closure2_slot3 = var8;
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot4 = var2;
            var2 = var21.length;
            _closure2_slot5 = var2;
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var18 = false;
            var3 = var3.bind(var5)(var18);
            _closure2_slot6 = var3;
            var9 = _closure1_slot4;
            var7 = var9.useEffect;
            var5 = new Array(3);
            var5[0] = var10;
            var3 = var21.length;
            var5[1] = var3;
            var5[2] = var13;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = _closure2_slot2;
case 38:
                    if(var1) { _fun0005_ip = 37; continue _fun0005 }
case 40:
                    var2 = _closure2_slot0;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var2 === var3;
case 37:
                    if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var2 = _closure2_slot6;
                    var1 = true;
                    var2['current'] = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.trackQuestHomeOrbShopCarouselViewed;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['obtainableOrbRewards'] = var5;
                    var4 = _closure2_slot0;
                    var4 = var4.length;
                    var1['carouselSize'] = var4;
                    var4 = false;
                    var1['isPlaceholderCarousel'] = var4;
                    var1 = var2.bind(var3)(var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var9)(var3, var5);
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.round;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.contentOffset;
                    var4 = var1.x;
                    var1 = _closure1_slot12;
                    var1 = var4 / var1;
                    var3 = var2.bind(var3)(var1);
                    var2 = _closure2_slot3;
                    if(!(var3 !== var2)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.trackQuestHomeOrbShopCarouselScroll;
                    var4 = {};
                    var7 = _closure2_slot3;
                    if(!(!(var3 > var7))) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 17;
                    var7 = var10[var7];
                    var7 = var9.bind(var2)(var7);
                    var7 = var7.HorizontalScrollingDirection;
                    var7 = var7.LEFT;
                    _fun0006_ip = 47; continue _fun0006;
case 45:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 17;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.HorizontalScrollingDirection;
                    var7 = var8.RIGHT;
case 47:
                    var4['scrollingDirection'] = var7;
                    var4['carouselPosition'] = var3;
                    var7 = _closure2_slot5;
                    var4['carouselSize'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var2)(var3);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var5.bind(var7)(var2, var3);
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var8 = var1.item;
                var7 = var1.index;
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 18;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.CollectiblesAnalyticsProvider;
                var1 = {};
                var6 = {};
                var6['tilePosition'] = var7;
                var7 = 'quest_home_orb_shop';
                var6['pageSection'] = var7;
                var1['newValue'] = var6;
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var5 = 14;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5['product'] = var8;
                var5 = var7.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2 = new Array(0);
            var19 = var5.bind(var7)(var3, var2);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.skuId;
                return var1;
            };
            var1 = new Array(0);
            var20 = var3.bind(var5)(var2, var1);
            var3 = var10 <= var4;
            var1 = null;
            if(var3) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            if(var13) { _fun0004_ip = 50; continue _fun0004 }
case 10:
            var3 = var21.length;
            var2 = null;
            if(!(var4 !== var3)) { _fun0004_ip = 51; continue _fun0004 }
case 50:
            var5 = _closure1_slot9;
            var4 = _closure1_slot5;
            var3 = {};
            var7 = {};
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 6;
            var8 = var15[var8];
            var8 = var9.bind(var6)(var8);
            var8 = var8.space;
            var8 = var8.PX_48;
            var7['marginTop'] = var8;
            var3['style'] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot18;
            var7 = {};
            var7['orbRewardAmount'] = var10;
            var8 = var9.bind(var6)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = _closure1_slot0;
            var11 = 19;
            var11 = var15[var11];
            var11 = var12.bind(var6)(var11);
            var12 = var11.LayerScope;
            var11 = {};
            var16 = _closure1_slot8;
            if(var13) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var13 = 15;
            var13 = var26[var13];
            var13 = var25.bind(var6)(var13);
            var15 = var13.FlashList;
            var13 = {'horizontal': true, 'accessibilityRole': 'list'};
            var22 = 12;
            var23 = var26[var22];
            var23 = var25.bind(var6)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var6)(var22);
            var22 = var22.t;
            var22 = var22.hVV8Wi;
            var22 = var23.bind(var24)(var22);
            var13['accessibilityLabel'] = var22;
            var13['data'] = var21;
            var13['keyExtractor'] = var20;
            var13['renderItem'] = var19;
            var19 = 'fast';
            var13['decelerationRate'] = var19;
            var19 = _closure1_slot12;
            var13['snapToInterval'] = var19;
            var13['showsHorizontalScrollIndicator'] = var18;
            var18 = _closure1_slot16;
            var13['ListHeaderComponent'] = var18;
            var13['ListFooterComponent'] = var18;
            var18 = _closure1_slot17;
            var13['ItemSeparatorComponent'] = var18;
            var13['onMomentumScrollEnd'] = var17;
            var13 = var16.bind(var6)(var15, var13);
            _fun0004_ip = 54; continue _fun0004;
case 52:
            var15 = _closure1_slot19;
            var14 = {};
            var13 = var16.bind(var6)(var15, var14);
case 54:
            var11['children'] = var13;
            var11 = var10.bind(var6)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 51:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useQuestHomeOrbShopCarouselData(arg1) {
        var1 = arg1;
        var6 = var1.enabled;
        var5 = var1.variation;
        var1 = function useObtainableBountyOrbRewards() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var8 = var3.BountiesStage1Experiment;
            var7 = var8.useConfig;
            var3 = {};
            var9 = _closure1_slot7;
            var9 = var9.QUEST_HOME_MOBILE;
            var3['location'] = var9;
            var3 = var7.bind(var8)(var3);
            var3 = var3.orbAmount;
            var _closure3_slot0 = var3;
            var3 = 10;
            var3 = var6[var3];
            var4 = var5.bind(var4)(var3);
            var3 = var4.useStateFromStores;
            var5 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot6;
                    var1 = var1.questHomeBounties;
                    var7 = undefined;
                    var6 = var2.bind(var7)(var1);
                    var3 = var6.bind(var7)();
                    var2 = var3.done;
                    var4 = var3;
                    var3 = 0;
                    var1 = 0;
                    if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 2:
                    var2 = var4.value;
                    var10 = _closure1_slot6;
                    var9 = var10.isBountyCompleted;
                    var2 = var2.id;
                    var2 = var9.bind(var10)(var2);
                    var9 = var3;
                    if(var2) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var2 = _closure3_slot0;
                    var9 = var3 + var2;
case 56:
                    var10 = var6.bind(var7)();
                    var2 = var10.done;
                    var3 = var9;
                    var4 = var10;
                    var1 = var3;
                    if(!var2) { _fun0007_ip = 2; continue _fun0007 }
case 55:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = undefined;
        var3 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 8;
        var1 = var7[var1];
        var4 = var2.bind(var4)(var1);
        var2 = var4.usePopularOrbShopProducts;
        var1 = {};
        var1['enabled'] = var6;
        var1['variation'] = var5;
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var4 = var2.products;
        var1['products'] = var4;
        var1['obtainableOrbRewards'] = var3;
        var2 = var2.showPlaceholderCarousel;
        var1['showPlaceholderCarousel'] = var2;
        return var1;
    };
    var3['useQuestHomeOrbShopCarouselData'] = var2;
    return var1;
})();