// app/modules/quests/native/QuestHomeBounties.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function EmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.reason;
            var1 = _closure1_slot14;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useBountyCarouselEmptyStateAnalytics;
            var1 = var1.bind(var3)(var2);
            var1 = _closure1_slot7;
            var1 = var1.COMPLETED;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var3 = var7[var1];
            var3 = var6.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.TKuW8z;
            var13 = var3.bind(var5)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var3 = var7[var1];
            var3 = var6.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.O2hRaZ;
            var13 = var3.bind(var5)(var1);
case 4:
            var1 = _closure1_slot7;
            var1 = var1.COMPLETED;
            if(!(var2 !== var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var16 = var1.ReqPds;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var16 = var1.D/790X;
case 7:
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var9.emptyState;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 12;
            var5 = var15[var5];
            var5 = var14.bind(var4)(var5);
            var6 = var5.BountiesPosterIllocon;
            var5 = {};
            var8 = 32;
            var5['size'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var9.emptyStateText;
            var6['style'] = var9;
            var12 = _closure1_slot9;
            var9 = 13;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-sm/semibold', 'color': 'text-default'};
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot9;
            var10 = 14;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.TextWithIOSLinkWorkaround;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var13 = 11;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var15 = var13.intl;
            var14 = var15.format;
            var13 = {};
            var17 = function onClickLearnMore() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var13['onClickLearnMore'] = var17;
            var13 = var14.bind(var15)(var16, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getSnapIndex(arg1) {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.round;
        var1 = arg1;
        var1 = var1.nativeEvent;
        var1 = var1.contentOffset;
        var4 = var1.x;
        var1 = _closure1_slot13;
        var1 = var4 / var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function ItemSeparator() {
        var4 = _closure1_slot9;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var5 = _closure1_slot12;
        var1['width'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function QuestHomeBountiesCarousel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var27 = var2.bounties;
            var _closure2_slot0 = var27;
            var12 = var2.orbShopProducts;
            var11 = var2.obtainableOrbRewards;
            var10 = var2.showOrbShopPlaceholderCarousel;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var10 = false;
case 8:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var2 = _closure1_slot14;
            var25 = var2.bind(var4)();
            var16 = 0;
            var8 = var11 > var16;
            if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var12.length;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL;
            var2 = var3 >= var2;
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var10;
case 12:
            var8 = var2;
case 10:
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var6 = null;
            var28 = var2.bind(var3)(var6);
            _closure2_slot1 = var28;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var16);
            var2 = _closure1_slot3;
            var14 = 2;
            var2 = var2.bind(var4)(var3, var14);
            var3 = var2[var16];
            _closure2_slot2 = var3;
            var5 = 1;
            var2 = var2[var5];
            _closure2_slot3 = var2;
            var9 = _closure1_slot4;
            var2 = var9.useState;
            var9 = var2.bind(var9)(var16);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var9, var14);
            var13 = var2[var16];
            _closure2_slot4 = var13;
            var2 = var2[var5];
            _closure2_slot5 = var2;
            var9 = _closure1_slot4;
            var2 = var9.useState;
            var23 = false;
            var9 = var2.bind(var9)(var23);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var9, var14);
            var9 = var2[var16];
            _closure2_slot6 = var9;
            var2 = var2[var5];
            _closure2_slot7 = var2;
            var5 = _closure1_slot4;
            var2 = var5.useRef;
            var2 = var2.bind(var5)(var6);
            _closure2_slot8 = var2;
            var5 = _closure1_slot4;
            var2 = var5.useRef;
            var2 = var2.bind(var5)(var23);
            _closure2_slot9 = var2;
            var14 = _closure1_slot4;
            var5 = var14.useRef;
            var2 = {};
            var15 = {};
            var15['scrollX'] = var16;
            var2['parent'] = var15;
            var15 = {};
            var2['children'] = var15;
            var15 = 'horizontal';
            var2['axis'] = var15;
            var2 = var5.bind(var14)(var2);
            _closure2_slot10 = var2;
            var15 = _closure1_slot4;
            var14 = var15.useCallback;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.values;
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    var1 = var1.children;
                    var5 = var3.bind(var5)(var1);
                    var1 = var5.length;
                    var3 = 0;
                    var1 = var3 < var1;
                    if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var6 = var5[var3];
                    var1 = var4 == var6;
                    if(var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var7 = var6.calculateVisibility;
                    var1 = var4 == var7;
case 18:
                    if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var1 = var6.calculateVisibility;
                    var1 = var1.bind(var6)();
case 20:
                    var3 = var3 + 1;
                    var1 = var5.length;
                    if(var3 < var1) { _fun0003_ip = 17; continue _fun0003 }
case 22:
                    _fun0003_ip = 16; continue _fun0003;
case 14:
                    var1 = global;
                    var6 = var1.Object;
                    var5 = var6.hasOwn;
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var3 = var3.children;
                    var3 = var5.bind(var6)(var3, var2);
                    if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = undefined;
                    return var3;
case 23:
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    var1 = var1.children;
                    var2 = var1[var2];
                    var1 = var4 == var2;
                    if(var1) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var3 = var2.calculateVisibility;
                    var1 = var4 == var3;
case 25:
                    if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 27:
                    var1 = var2.calculateVisibility;
                    var1 = var1.bind(var2)();
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var14.bind(var15)(var5, var2);
            _closure2_slot11 = var2;
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var14 = new Array(1);
            var14[0] = var2;
            var5 = function(arg1) {
                var3 = arg1;
                var5 = _closure2_slot3;
                var1 = var3.nativeEvent;
                var1 = var1.layout;
                var4 = var1.width;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = _closure2_slot10;
                var4 = var4.current;
                var4 = var4.parent;
                var3 = var3.nativeEvent;
                var3 = var3.layout;
                var4['layout'] = var3;
                var2 = _closure2_slot11;
                var2 = var2.bind(var1)();
                return var1;
            };
            var14 = var15.bind(var16)(var5, var14);
            var17 = _closure1_slot4;
            var16 = var17.useMemo;
            var5 = var27.length;
            var15 = new Array(1);
            var15[0] = var5;
            var5 = function() {
                var1 = global;
                var3 = var1.Array;
                var1 = _closure2_slot0;
                var4 = var1.length;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.fill;
                var1 = 0;
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    var2 = _closure1_slot13;
                    var1 = arg2;
                    var1 = var1 * var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var16.bind(var17)(var5, var15);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var4 = _closure1_slot9;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var1 = global;
                var9 = var1.Math;
                var8 = var9.max;
                var10 = _closure2_slot2;
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var7 = var7[var1];
                var1 = undefined;
                var7 = var11.bind(var1)(var7);
                var7 = var7.CARD_WIDTH;
                var7 = var10 - var7;
                var6 = _closure1_slot11;
                var7 = var7 - var6;
                var6 = 0;
                var6 = var8.bind(var9)(var6, var7);
                var5['width'] = var6;
                var2['style'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var22 = var15.bind(var16)(var3, var5);
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var13);
            _closure2_slot12 = var3;
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var6);
            _closure2_slot13 = var3;
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure1_slot16;
                    var1 = undefined;
                    var6 = var2.bind(var1)(var3);
                    var5 = _closure2_slot12;
                    var5 = var5.current;
                    if(!(var6 !== var5)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var5 = _closure2_slot12;
                    var5['current'] = var6;
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var6 = var5.bind(var6)();
                    var5 = _closure2_slot13;
                    var7 = var5.current;
                    var5 = null;
                    var5 = var5 == var7;
                    if(var5) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var7 = _closure2_slot13;
                    var7 = var7.current;
                    var8 = var6 - var7;
                    var7 = 50;
                    var5 = var8 >= var7;
case 30:
                    if(!var5) { _fun0004_ip = 28; continue _fun0004 }
case 32:
                    var5 = _closure2_slot13;
                    var5['current'] = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 20;
                    var5 = var8[var4];
                    var6 = var7.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.HapticFeedbackTypes;
                    var4 = var4.IMPACT_LIGHT;
                    var4 = var5.bind(var6)(var4);
case 28:
                    var4 = _closure2_slot10;
                    var4 = var4.current;
                    var4 = var4.parent;
                    var3 = var3.nativeEvent;
                    var3 = var3.contentOffset;
                    var3 = var3.x;
                    var4['scrollX'] = var3;
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var21 = var15.bind(var16)(var3, var5);
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var23);
            _closure2_slot14 = var3;
            var5 = _closure1_slot4;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var6);
            _closure2_slot15 = var3;
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = false;
                    var3['current'] = var2;
                    var2 = _closure2_slot15;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var3 = _closure2_slot15;
                    var4 = var3.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1 = _closure2_slot15;
                    var1['current'] = var2;
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var20 = var15.bind(var16)(var5, var3);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var5 = new Array(1);
            var5[0] = var13;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot16;
                    var1 = undefined;
                    var2 = arg1;
                    var3 = var3.bind(var1)(var2);
                    var4 = _closure2_slot14;
                    var8 = var4.current;
                    var5 = _closure2_slot14;
                    var4 = false;
                    var5['current'] = var4;
                    var4 = _closure2_slot4;
                    if(!(var3 !== var4)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 21;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.trackBountyCarouselScroll;
                    var4 = {};
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var11 = 22;
                    var9 = var9[var11];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.BountyScrollingType;
                    if(var8) { _fun0006_ip = 37; continue _fun0006 }
case 14:
                    var8 = var9.MANUAL;
                    _fun0006_ip = 38; continue _fun0006;
case 37:
                    var8 = var9.AUTO;
case 38:
                    var4['scrollingType'] = var8;
                    var8 = _closure2_slot4;
                    if(!(!(var3 > var8))) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.HorizontalScrollingDirection;
                    var8 = var8.LEFT;
                    _fun0006_ip = 41; continue _fun0006;
case 39:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.HorizontalScrollingDirection;
                    var8 = var9.RIGHT;
case 41:
                    var4['scrollingDirection'] = var8;
                    var4['carouselPosition'] = var3;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 23;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_HOME_MOBILE_CAROUSEL;
                    var4['questContent'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)(var3);
case 35:
                    return var1;
                }
            };
            var19 = var15.bind(var16)(var3, var5);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var5 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot15;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0007_ip = 17; continue _fun0007 }
case 42:
                    var3 = global;
                    var6 = var3.clearTimeout;
                    var3 = _closure2_slot15;
                    var5 = var3.current;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = _closure2_slot15;
                    var3['current'] = var4;
case 17:
                    var3 = _closure2_slot15;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var1 = undefined;
                    var4 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot14;
                            var6 = true;
                            var2['current'] = var6;
                            var2 = _closure2_slot1;
                            var5 = var2.current;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0008_ip = 43; continue _fun0008 }
case 34:
                            var4 = var5.scrollToOffset;
                            var3 = {};
                            var8 = _closure3_slot0;
                            var7 = _closure1_slot13;
                            var7 = var8 * var7;
                            var3['offset'] = var7;
                            var3['animated'] = var6;
                            var3 = var4.bind(var5)(var3);
case 43:
                            var1 = _closure2_slot15;
                            var1['current'] = var2;
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 350;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['current'] = var2;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var15.bind(var16)(var5, var3);
            _closure2_slot16 = var3;
            var17 = _closure1_slot4;
            var16 = var17.useEffect;
            var15 = function() {
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot15;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0009_ip = 36; continue _fun0009 }
case 44:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var3 = _closure2_slot15;
                        var4 = var3.current;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1 = _closure2_slot15;
                        var1['current'] = var2;
case 36:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var5 = new Array(0);
            var5 = var16.bind(var17)(var15, var5);
            var16 = _closure1_slot4;
            var15 = var16.useEffect;
            var5 = new Array(3);
            var5[0] = var27;
            var5[1] = var13;
            var5[2] = var3;
            var3 = function() {
                var5 = function handleModalClose(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.key;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 24;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.BOUNTIES_MODAL_KEY;
                        if(!(var5 === var4)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                        var4 = _closure2_slot7;
                        var7 = false;
                        var4 = var4.bind(var1)(var7);
                        var4 = _closure2_slot8;
                        var8 = var4.current;
                        var _closure4_slot0 = var8;
                        var6 = _closure2_slot8;
                        var4 = null;
                        var6['current'] = var4;
                        if(!(var4 != var8)) { _fun0010_ip = 45; continue _fun0010 }
case 47:
                        var6 = _closure1_slot6;
                        var4 = var6.isBountyCompleted;
                        var4 = var4.bind(var6)(var8);
                        if(!var4) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                        var6 = _closure2_slot9;
                        var6 = var6.current;
                        var4 = !var6;
case 48:
                        var6 = _closure2_slot9;
                        var6['current'] = var7;
                        var8 = _closure2_slot0;
                        var7 = var8.findIndex;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
                        var _closure4_slot1 = var6;
                        var7 = -1;
                        if(!(var7 !== var6)) { _fun0010_ip = 45; continue _fun0010 }
case 50:
                        var9 = _closure2_slot0;
                        var8 = var9.findIndex;
                        var6 = function(arg1, arg2) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var3 = arg2;
                                var1 = _closure2_slot4;
                                var1 = var3 > var1;
                                if(!var1) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                                var2 = _closure4_slot1;
                                var1 = var3 > var2;
case 51:
                                if(!var1) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                                var4 = _closure1_slot6;
                                var3 = var4.isBountyCompleted;
                                var2 = arg1;
                                var2 = var2.id;
                                var2 = var3.bind(var4)(var2);
                                var1 = !var2;
case 53:
                                return var1;
                            }
                        };
                        var6 = var8.bind(var9)(var6);
                        var _closure4_slot2 = var6;
                        if(!var4) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                        var4 = var7 !== var6;
case 55:
                        if(!var4) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                        var7 = _closure2_slot4;
                        var5 = 3;
                        var5 = var7 + var5;
                        var4 = var6 <= var5;
case 57:
                        if(!var4) { _fun0010_ip = 45; continue _fun0010 }
case 59:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 25;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runAfterInteractions;
                        var2 = function() {
                            var3 = _closure2_slot16;
                            var2 = _closure4_slot2;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
case 45:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.subscribe;
                var2 = 'MODAL_POP';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.unsubscribe;
                    var3 = _closure3_slot0;
                    var2 = 'MODAL_POP';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var3 = var15.bind(var16)(var3, var5);
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var5 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var6 = arg1;
                    var7 = arg2;
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 26;
                    var4 = var9[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var4);
                    var4 = var8.shouldMigrateToAdAnalyticsInterface;
                    var2 = var9[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.AdAnalyticsInterfaceExperimentStep;
                    var3 = var2.STEP_2_CLICKED_INTERNAL;
                    var2 = 'quest_home_bounties';
                    var2 = var4.bind(var8)(var3, var2);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    if(var2) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                    var2 = 21;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var3 = var4.trackAdContentClicked;
                    var2 = {};
                    var8 = var6.id;
                    var2['adContentId'] = var8;
                    var8 = 29;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.AdCreativeType;
                    var8 = var8.BOUNTY;
                    var2['adCreativeType'] = var8;
                    var8 = 23;
                    var11 = var10[var8];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.QuestContent;
                    var11 = var11.QUEST_HOME_MOBILE_CAROUSEL;
                    var2['questContent'] = var11;
                    var11 = 22;
                    var11 = var10[var11];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.QuestContentCTA;
                    var11 = var11.START_BOUNTY;
                    var2['questContentCTA'] = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.QuestContent;
                    var8 = var8.QUEST_HOME_MOBILE_CAROUSEL;
                    var2['sourceQuestContent'] = var8;
                    var2['questContentPosition'] = var7;
                    var2 = var3.bind(var4)(var2);
                    _fun0012_ip = 62; continue _fun0012;
case 60:
                    var2 = 27;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var3 = var4.captureAdUserAction;
                    var2 = {};
                    var8 = 28;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.AdUserActionType;
                    var8 = var8.CLICK_INTERNAL;
                    var2['type'] = var8;
                    var8 = 29;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.AdCreativeType;
                    var8 = var8.BOUNTY;
                    var2['adCreativeType'] = var8;
                    var8 = var6.id;
                    var2['adCreativeId'] = var8;
                    var8 = 22;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.QuestContentCTA;
                    var8 = var8.START_BOUNTY;
                    var2['questContentCTA'] = var8;
                    var8 = 23;
                    var11 = var10[var8];
                    var11 = var9.bind(var1)(var11);
                    var11 = var11.QuestContent;
                    var11 = var11.QUEST_HOME_MOBILE_CAROUSEL;
                    var2['surfaceId'] = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.QuestContent;
                    var8 = var8.QUEST_HOME_MOBILE_CAROUSEL;
                    var2['sourceQuestContent'] = var8;
                    var2['questContentPosition'] = var7;
                    var2 = var3.bind(var4)(var2);
case 62:
                    var4 = _closure2_slot8;
                    var3 = var6.id;
                    var4['current'] = var3;
                    var4 = _closure2_slot9;
                    var8 = _closure1_slot6;
                    var7 = var8.isBountyCompleted;
                    var3 = var6.id;
                    var3 = var7.bind(var8)(var3);
                    var4['current'] = var3;
                    var3 = _closure2_slot7;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 24;
                    var2 = var7[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showModal;
                    var2 = {};
                    var6 = var6.id;
                    var2['bountyId'] = var6;
                    var6 = _closure1_slot0;
                    var5 = 23;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.QUEST_HOME_MOBILE_CAROUSEL;
                    var2['sourceQuestContent'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var15.bind(var16)(var5, var3);
            _closure2_slot17 = var3;
            var15 = _closure1_slot1;
            var29 = _closure1_slot2;
            var5 = 30;
            var5 = var29[var5];
            var5 = var15.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var15 = var5.containerRef;
            var16 = var5.isInView;
            _closure2_slot18 = var16;
            var18 = _closure1_slot4;
            var17 = var18.useCallback;
            var5 = new Array(4);
            var5[0] = var13;
            var5[1] = var3;
            var5[2] = var16;
            var5[3] = var9;
            var3 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var _closure3_slot0 = var1;
                    var7 = var2.index;
                    var _closure3_slot1 = var7;
                    var5 = _closure1_slot9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 31;
                    var2 = var10[var2];
                    var4 = undefined;
                    var2 = var9.bind(var4)(var2);
                    var3 = var2.QuestContentImpressionTrackerNative;
                    var2 = {};
                    var8 = var1.id;
                    var2['adContentId'] = var8;
                    var8 = 29;
                    var8 = var10[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.AdCreativeType;
                    var8 = var8.BOUNTY;
                    var2['adCreativeType'] = var8;
                    var8 = 23;
                    var11 = var10[var8];
                    var11 = var9.bind(var4)(var11);
                    var11 = var11.QuestContent;
                    var11 = var11.QUEST_HOME_MOBILE_CAROUSEL;
                    var2['questContent'] = var11;
                    var2['questContentPosition'] = var7;
                    var7 = false;
                    var2['trackGuildAndChannelMetadata'] = var7;
                    var11 = _closure2_slot10;
                    var2['visibilityRef'] = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.QuestContent;
                    var8 = var8.QUEST_HOME_MOBILE_CAROUSEL;
                    var2['sourceQuestContent'] = var8;
                    var7 = _closure2_slot18;
                    var8 = !var7;
                    var7 = !var8;
                    if(var8) { _fun0013_ip = 63; continue _fun0013 }
case 64:
                    var7 = undefined;
case 63:
                    var2['overrideVisibility'] = var7;
                    var6 = function children() {
                        var4 = _closure1_slot9;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure3_slot0;
                        var1['bounty'] = var6;
                        var7 = _closure3_slot1;
                        var1['index'] = var7;
                        var6 = _closure2_slot4;
                        var6 = var7 === var6;
                        var1['isActive'] = var6;
                        var6 = _closure2_slot6;
                        var1['isModalVisible'] = var6;
                        var5 = _closure2_slot17;
                        var1['onPress'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['children'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var26 = var17.bind(var18)(var3, var5);
            var17 = _closure1_slot4;
            var5 = var17.useCallback;
            var3 = new Array(2);
            var3[0] = var27;
            var3[1] = var2;
            var2 = function(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot9;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = var2;
                var6 = var5;
                var5 = copyDataProperties(var7, var6);
                var5 = function onLayout(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot0;
                        var2 = _closure3_slot0;
                        var2 = var2.index;
                        var2 = var5[var2];
                        var5 = null;
                        if(!(var5 != var2)) { _fun0014_ip = 48; continue _fun0014 }
case 65:
                        var5 = _closure2_slot10;
                        var5 = var5.current;
                        var7 = var5.children;
                        var6 = var2.id;
                        var5 = {};
                        var8 = _closure2_slot10;
                        var8 = var8.current;
                        var9 = var8.children;
                        var8 = var2.id;
                        var10 = var9[var8];
                        var11 = var5;
                        var8 = copyDataProperties(var11, var10);
                        var8 = var3.nativeEvent;
                        var9 = var8.layout;
                        var8 = 'layout';
                        var5[7] = var9;
                        var7[var6] = var5;
                        var5 = _closure2_slot11;
                        var4 = var2.id;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
case 48:
                        var2 = _closure3_slot0;
                        var1 = var2.onLayout;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = 'onLayout';
                var2[0] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var17 = var5.bind(var17)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var16;
            var2[1] = var13;
            var2[2] = var9;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot18;
                var1['isInView'] = var3;
                var3 = _closure2_slot4;
                var1['activeIndex'] = var3;
                var2 = _closure2_slot6;
                var1['isModalVisible'] = var2;
                return var1;
            };
            var18 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var25.container;
            var1['style'] = var5;
            var13 = _closure1_slot9;
            var9 = _closure1_slot5;
            var5 = {};
            var5['ref'] = var15;
            var5['onLayout'] = var14;
            var16 = _closure1_slot9;
            var15 = _closure1_slot0;
            var14 = 32;
            var14 = var29[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.FlashList;
            var14 = {};
            var14['ref'] = var28;
            var28 = true;
            var14['horizontal'] = var28;
            var14['data'] = var27;
            var14['renderItem'] = var26;
            var26 = _closure1_slot18;
            var14['keyExtractor'] = var26;
            var25 = var25.listContentContainer;
            var14['contentContainerStyle'] = var25;
            var14['snapToOffsets'] = var24;
            var14['snapToEnd'] = var23;
            var24 = 'fast';
            var14['decelerationRate'] = var24;
            var14['showsHorizontalScrollIndicator'] = var23;
            var23 = _closure1_slot17;
            var14['ItemSeparatorComponent'] = var23;
            var14['ListFooterComponent'] = var22;
            var14['onScroll'] = var21;
            var14['onScrollBeginDrag'] = var20;
            var14['onMomentumScrollEnd'] = var19;
            var19 = 16;
            var14['scrollEventThrottle'] = var19;
            var14['extraData'] = var18;
            var14['CellRendererComponent'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var5['children'] = var14;
            var9 = var13.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            if(!var8) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 33;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['orbShopProducts'] = var12;
            var7['obtainableOrbRewards'] = var11;
            var7['showOrbShopPlaceholderCarousel'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 66:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BountyCarouselEmptyStateReason;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot9 = var9;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.space;
    var9 = var9.PX_16;
    var _closure1_slot11 = var9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.space;
    var8 = var4.PX_16;
    var _closure1_slot12 = var8;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CARD_WIDTH;
    var4 = var4 + var8;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 7;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.space;
        var8 = var8.PX_48;
        var2['marginBottom'] = var8;
        var1['container'] = var2;
        var2 = {};
        var7 = _closure1_slot11;
        var2['paddingLeft'] = var7;
        var1['listContentContainer'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'borderWidth': 1};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_12;
        var2['gap'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BORDER_MUTED;
        var2['borderColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_SURFACE_HIGH;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var7 = 'hidden';
        var2['overflow'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = 14;
        var2['paddingVertical'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.space;
        var3 = var3.PX_16;
        var2['marginHorizontal'] = var3;
        var1['emptyState'] = var2;
        var2 = {'flex': 1, 'gap': 2};
        var1['emptyStateText'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function QuestHomeBounties(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var6 = var1.verticalScrollEnabled;
            var19 = var1.orbShopProducts;
            var18 = var1.obtainableOrbRewards;
            var17 = var1.showOrbShopPlaceholderCarousel;
            var5 = undefined;
            if(!(var17 === var5)) { _fun0015_ip = 68; continue _fun0015 }
case 69:
            var17 = false;
case 68:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 34;
            var1 = var9[var1];
            var3 = var4.bind(var5)(var1);
            var1 = var3.useQuestHomeBounties;
            var1 = var1.bind(var3)();
            var12 = var1.questHomeBounties;
            var1 = _closure1_slot14;
            var8 = var1.bind(var5)();
            var3 = var12.length;
            var1 = 0;
            var10 = var3 > var1;
            var3 = function useBountiesNux(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0016_ip = 70; continue _fun0016 }
case 71:
                    var6 = new Array(0);
                    _fun0016_ip = 72; continue _fun0016;
case 70:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.DismissibleContent;
                    var3 = var1.BOUNTIES_NUX_PROMO_SHEET;
                    var1 = new Array(1);
                    var1[0] = var3;
                    var6 = var1;
case 72:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.useSelectedDismissibleContent;
                    var6 = var4.bind(var5)(var6);
                    var5 = _closure1_slot3;
                    var4 = 2;
                    var5 = var5.bind(var1)(var6, var4);
                    var4 = 0;
                    var7 = var5[var4];
                    var _closure3_slot0 = var7;
                    var4 = 1;
                    var6 = var5[var4];
                    var _closure3_slot1 = var6;
                    var8 = _closure1_slot4;
                    var5 = var8.useRef;
                    var4 = false;
                    var4 = var5.bind(var8)(var4);
                    var _closure3_slot2 = var4;
                    var9 = _closure1_slot4;
                    var8 = var9.useEffect;
                    var5 = new Array(1);
                    var5[0] = var7;
                    var4 = function() {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var5 = _closure3_slot0;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 16;
                            var4 = var4[var1];
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var4 = var4.DismissibleContent;
                            var4 = var4.BOUNTIES_NUX_PROMO_SHEET;
                            var4 = var5 !== var4;
                            if(var4) { _fun0017_ip = 53; continue _fun0017 }
case 73:
                            var5 = _closure3_slot2;
                            var4 = var5.current;
case 53:
                            if(var4) { _fun0017_ip = 74; continue _fun0017 }
case 75:
                            var4 = _closure3_slot2;
                            var3 = true;
                            var4['current'] = var3;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.bind(var1)();
case 74:
                            return var1;
                        }
                    };
                    var4 = var8.bind(var9)(var4, var5);
                    var5 = _closure1_slot4;
                    var4 = var5.useEffect;
                    var3 = new Array(2);
                    var3[0] = var7;
                    var3[1] = var6;
                    var2 = function() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var5 = function handleHide(arg1) {
                                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                    var1 = arg1;
                                    var4 = var1.key;
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 15;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var3 = var5.bind(var1)(var3);
                                    var3 = var3.PROMO_SHEET_KEY;
                                    if(!(var4 === var3)) { _fun0019_ip = 76; continue _fun0019 }
case 77:
                                    var3 = _closure3_slot1;
                                    var2 = _closure1_slot8;
                                    var2 = var2.USER_DISMISS;
                                    var2 = var3.bind(var1)(var2);
case 76:
                                    return var1;
                                }
                            };
                            var _closure4_slot0 = var5;
                            var6 = _closure3_slot0;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 16;
                            var3 = var4[var3];
                            var4 = undefined;
                            var3 = var7.bind(var4)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.BOUNTIES_NUX_PROMO_SHEET;
                            if(!(var6 !== var3)) { _fun0018_ip = 75; continue _fun0018 }
case 17:
                            return var4;
case 75:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 18;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.subscribe;
                            var2 = 'HIDE_ACTION_SHEET';
                            var2 = var3.bind(var4)(var2, var5);
                            var1 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 18;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.unsubscribe;
                                var3 = _closure4_slot0;
                                var2 = 'HIDE_ACTION_SHEET';
                                var2 = var4.bind(var5)(var2, var3);
                                return var1;
                            };
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var3 = var3.bind(var5)(var10);
            var3 = var12.length;
            var10 = var1 === var3;
            var3 = 35;
            var3 = var9[var3];
            var9 = var4.bind(var5)(var3);
            var4 = var9.useStateFromStores;
            var11 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.areAllBountiesCompleted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var4.bind(var9)(var3, var2);
            var14 = !var10;
            if(var10) { _fun0015_ip = 39; continue _fun0015 }
case 78:
            var14 = !var11;
case 39:
            if(!var14) { _fun0015_ip = 12; continue _fun0015 }
case 50:
            var14 = var18 > var1;
case 12:
            if(!var14) { _fun0015_ip = 57; continue _fun0015 }
case 10:
            var2 = var19.length;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 19;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL;
            var1 = var2 >= var1;
            if(var1) { _fun0015_ip = 79; continue _fun0015 }
case 80:
            var1 = var17;
case 79:
            var14 = var1;
case 57:
            if(var10) { _fun0015_ip = 81; continue _fun0015 }
case 82:
            if(var11) { _fun0015_ip = 81; continue _fun0015 }
case 83:
            if(var6) { _fun0015_ip = 84; continue _fun0015 }
case 85:
            var3 = _closure1_slot9;
            var2 = _closure1_slot19;
            var1 = {};
            var1['bounties'] = var12;
            var1['orbShopProducts'] = var19;
            var1['obtainableOrbRewards'] = var18;
            var1['showOrbShopPlaceholderCarousel'] = var17;
            var1 = var3.bind(var5)(var2, var1);
            _fun0015_ip = 86; continue _fun0015;
case 84:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var9 = var8.container;
            var2['style'] = var9;
            var15 = _closure1_slot9;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 36;
            var9 = var16[var9];
            var13 = var13.bind(var5)(var9);
            var9 = {};
            var9['bounties'] = var12;
            var13 = var15.bind(var5)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var13 = null;
            if(!var14) { _fun0015_ip = 87; continue _fun0015 }
case 88:
            var16 = _closure1_slot9;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 33;
            var14 = var20[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['orbShopProducts'] = var19;
            var14['obtainableOrbRewards'] = var18;
            var14['showOrbShopPlaceholderCarousel'] = var17;
            var13 = var16.bind(var5)(var15, var14);
case 87:
            var9[1] = var13;
            var2['children'] = var9;
            var1 = var4.bind(var5)(var3, var2);
case 86:
            _fun0015_ip = 89; continue _fun0015;
case 81:
            var4 = _closure1_slot9;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var8.container;
            var2['style'] = var8;
            var9 = _closure1_slot9;
            if(var6) { _fun0015_ip = 90; continue _fun0015 }
case 91:
            var8 = _closure1_slot15;
            var6 = {};
            var14 = _closure1_slot7;
            if(var10) { _fun0015_ip = 92; continue _fun0015 }
case 93:
            var13 = var14.COMPLETED;
            _fun0015_ip = 94; continue _fun0015;
case 92:
            var13 = var14.EMPTY;
case 94:
            var6['reason'] = var13;
            var6 = var9.bind(var5)(var8, var6);
            _fun0015_ip = 95; continue _fun0015;
case 90:
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 36;
            var7 = var13[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['bounties'] = var12;
            if(var10) { _fun0015_ip = 96; continue _fun0015 }
case 97:
            var10 = var11;
case 96:
            var7['isEmptyOrCompleted'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 95:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 89:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHomeBounties.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();