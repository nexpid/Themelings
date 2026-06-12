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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var1 = function QuestHomeBountiesCarousel(arg1) {
        var2 = arg1;
        var19 = var2.bounties;
        var _closure2_slot0 = var19;
        var2 = _closure1_slot14;
        var4 = undefined;
        var17 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = var3.useRef;
        var7 = null;
        var20 = var2.bind(var3)(var7);
        var _closure2_slot1 = var20;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var10 = 0;
        var3 = var2.bind(var3)(var10);
        var2 = _closure1_slot3;
        var8 = 2;
        var2 = var2.bind(var4)(var3, var8);
        var3 = var2[var10];
        var _closure2_slot2 = var3;
        var5 = 1;
        var2 = var2[var5];
        var _closure2_slot3 = var2;
        var6 = _closure1_slot4;
        var2 = var6.useState;
        var6 = var2.bind(var6)(var10);
        var2 = _closure1_slot3;
        var2 = var2.bind(var4)(var6, var8);
        var22 = var2[var10];
        var _closure2_slot4 = var22;
        var2 = var2[var5];
        var _closure2_slot5 = var2;
        var6 = _closure1_slot4;
        var2 = var6.useState;
        var15 = false;
        var6 = var2.bind(var6)(var15);
        var2 = _closure1_slot3;
        var2 = var2.bind(var4)(var6, var8);
        var9 = var2[var10];
        var _closure2_slot6 = var9;
        var2 = var2[var5];
        var _closure2_slot7 = var2;
        var5 = _closure1_slot4;
        var2 = var5.useRef;
        var2 = var2.bind(var5)(var7);
        var _closure2_slot8 = var2;
        var5 = _closure1_slot4;
        var2 = var5.useRef;
        var2 = var2.bind(var5)(var15);
        var _closure2_slot9 = var2;
        var6 = _closure1_slot4;
        var5 = var6.useRef;
        var2 = {};
        var8 = {};
        var8['scrollX'] = var10;
        var2['parent'] = var8;
        var8 = {};
        var2['children'] = var8;
        var8 = 'horizontal';
        var2['axis'] = var8;
        var2 = var5.bind(var6)(var2);
        var _closure2_slot10 = var2;
        var8 = _closure1_slot4;
        var6 = var8.useCallback;
        var5 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var4 = null;
                if(!(var4 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
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
                if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var6 = var5[var3];
                var1 = var4 == var6;
                if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = var6.calculateVisibility;
                var1 = var4 == var7;
case 12:
                if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = var6.calculateVisibility;
                var1 = var1.bind(var6)();
case 14:
                var3 = var3 + 1;
                var1 = var5.length;
                if(var3 < var1) { _fun0002_ip = 11; continue _fun0002 }
case 16:
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var1 = global;
                var6 = var1.Object;
                var5 = var6.hasOwn;
                var3 = _closure2_slot10;
                var3 = var3.current;
                var3 = var3.children;
                var3 = var5.bind(var6)(var3, var2);
                if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var3 = undefined;
                return var3;
case 17:
                var1 = _closure2_slot10;
                var1 = var1.current;
                var1 = var1.children;
                var2 = var1[var2];
                var1 = var4 == var2;
                if(var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var3 = var2.calculateVisibility;
                var1 = var4 == var3;
case 19:
                if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 21:
                var1 = var2.calculateVisibility;
                var1 = var1.bind(var2)();
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var6.bind(var8)(var5, var2);
        var _closure2_slot11 = var2;
        var10 = _closure1_slot4;
        var8 = var10.useCallback;
        var6 = new Array(1);
        var6[0] = var2;
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
        var5 = var8.bind(var10)(var5, var6);
        var11 = _closure1_slot4;
        var10 = var11.useMemo;
        var6 = var19.length;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
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
        var16 = var10.bind(var11)(var6, var8);
        var10 = _closure1_slot4;
        var8 = var10.useCallback;
        var6 = new Array(1);
        var6[0] = var3;
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
        var13 = var8.bind(var10)(var3, var6);
        var6 = _closure1_slot4;
        var3 = var6.useRef;
        var3 = var3.bind(var6)(var22);
        var _closure2_slot12 = var3;
        var6 = _closure1_slot4;
        var3 = var6.useRef;
        var3 = var3.bind(var6)(var7);
        var _closure2_slot13 = var3;
        var10 = _closure1_slot4;
        var8 = var10.useCallback;
        var6 = new Array(1);
        var6[0] = var2;
        var3 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot18;
                var1 = undefined;
                var6 = var2.bind(var1)(var3);
                var5 = _closure2_slot12;
                var5 = var5.current;
                if(!(var6 !== var5)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
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
                if(var5) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var7 = _closure2_slot13;
                var7 = var7.current;
                var8 = var6 - var7;
                var7 = 50;
                var5 = var8 >= var7;
case 24:
                if(!var5) { _fun0003_ip = 22; continue _fun0003 }
case 26:
                var5 = _closure2_slot13;
                var5['current'] = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 19;
                var5 = var8[var4];
                var6 = var7.bind(var1)(var5);
                var5 = var6.triggerHapticFeedback;
                var4 = var8[var4];
                var4 = var7.bind(var1)(var4);
                var4 = var4.HapticFeedbackTypes;
                var4 = var4.IMPACT_LIGHT;
                var4 = var5.bind(var6)(var4);
case 22:
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
        var12 = var8.bind(var10)(var3, var6);
        var6 = _closure1_slot4;
        var3 = var6.useRef;
        var3 = var3.bind(var6)(var15);
        var _closure2_slot14 = var3;
        var6 = _closure1_slot4;
        var3 = var6.useRef;
        var3 = var3.bind(var6)(var7);
        var _closure2_slot15 = var3;
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var6 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot14;
                var2 = false;
                var3['current'] = var2;
                var2 = _closure2_slot15;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var3 = global;
                var5 = var3.clearTimeout;
                var1 = _closure2_slot15;
                var4 = var1.current;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var1['current'] = var2;
case 27:
                var1 = undefined;
                return var1;
            }
        };
        var3 = new Array(0);
        var11 = var7.bind(var8)(var6, var3);
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var6 = new Array(1);
        var6[0] = var22;
        var3 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot18;
                var1 = undefined;
                var2 = arg1;
                var3 = var3.bind(var1)(var2);
                var5 = _closure2_slot14;
                var8 = var5.current;
                var4 = false;
                var5['current'] = var4;
                var4 = _closure2_slot4;
                if(!(var3 !== var4)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 20;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.trackBountyCarouselScroll;
                var4 = {};
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 21;
                var9 = var9[var11];
                var9 = var10.bind(var1)(var9);
                var9 = var9.BountyScrollingType;
                if(var8) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var8 = var9.MANUAL;
                _fun0005_ip = 33; continue _fun0005;
case 31:
                var8 = var9.AUTO;
case 33:
                var4['scrollingType'] = var8;
                var8 = _closure2_slot4;
                if(!(!(var3 > var8))) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var11];
                var8 = var9.bind(var1)(var8);
                var8 = var8.HorizontalScrollingDirection;
                var8 = var8.LEFT;
                _fun0005_ip = 36; continue _fun0005;
case 34:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var9 = var10.bind(var1)(var9);
                var9 = var9.HorizontalScrollingDirection;
                var8 = var9.RIGHT;
case 36:
                var4['scrollingDirection'] = var8;
                var4['carouselPosition'] = var3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 22;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE_CAROUSEL;
                var4['questContent'] = var7;
                var4 = var5.bind(var6)(var4);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)(var3);
case 29:
                return var1;
            }
        };
        var10 = var7.bind(var8)(var3, var6);
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var6 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot15;
                var3 = var3.current;
                var4 = null;
                if(!(var4 != var3)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                var3 = global;
                var7 = var3.clearTimeout;
                var3 = _closure2_slot15;
                var6 = var3.current;
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var3['current'] = var4;
case 37:
                var3 = _closure2_slot15;
                var1 = global;
                var5 = var1.setTimeout;
                var1 = undefined;
                var4 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure2_slot14;
                        var6 = true;
                        var2['current'] = var6;
                        var2 = _closure2_slot1;
                        var5 = var2.current;
                        var2 = null;
                        if(!(var2 != var5)) { _fun0007_ip = 39; continue _fun0007 }
case 28:
                        var4 = var5.scrollToOffset;
                        var3 = {};
                        var8 = _closure3_slot0;
                        var7 = _closure1_slot13;
                        var7 = var8 * var7;
                        var3['offset'] = var7;
                        var3['animated'] = var6;
                        var3 = var4.bind(var5)(var3);
case 39:
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
        var3 = var7.bind(var8)(var6, var3);
        var _closure2_slot16 = var3;
        var18 = _closure1_slot4;
        var8 = var18.useEffect;
        var7 = function() {
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 30; continue _fun0008 }
case 40:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var1 = _closure2_slot15;
                    var4 = var1.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1['current'] = var2;
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var6 = new Array(0);
        var6 = var8.bind(var18)(var7, var6);
        var8 = _closure1_slot4;
        var7 = var8.useEffect;
        var6 = new Array(3);
        var6[0] = var19;
        var6[1] = var22;
        var6[2] = var3;
        var3 = function() {
            var5 = function handleModalClose(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.key;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 23;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.BOUNTIES_MODAL_KEY;
                    if(!(var5 === var4)) { _fun0009_ip = 41; continue _fun0009 }
case 30:
                    var4 = _closure2_slot7;
                    var7 = false;
                    var4 = var4.bind(var1)(var7);
                    var6 = _closure2_slot8;
                    var8 = var6.current;
                    var _closure4_slot0 = var8;
                    var4 = null;
                    var6['current'] = var4;
                    if(!(var4 != var8)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var6 = _closure1_slot6;
                    var4 = var6.isBountyCompleted;
                    var4 = var4.bind(var6)(var8);
                    if(!var4) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var6 = _closure2_slot9;
                    var6 = var6.current;
                    var4 = !var6;
case 43:
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
                    if(!(var7 !== var6)) { _fun0009_ip = 41; continue _fun0009 }
case 22:
                    var9 = _closure2_slot0;
                    var8 = var9.findIndex;
                    var6 = function(arg1, arg2) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var3 = arg2;
                            var1 = _closure2_slot4;
                            var1 = var3 > var1;
                            if(!var1) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                            var2 = _closure4_slot1;
                            var1 = var3 > var2;
case 45:
                            if(!var1) { _fun0010_ip = 27; continue _fun0010 }
case 47:
                            var4 = _closure1_slot6;
                            var3 = var4.isBountyCompleted;
                            var2 = arg1;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            var1 = !var2;
case 27:
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var6);
                    var _closure4_slot2 = var6;
                    if(!var4) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var4 = var7 !== var6;
case 48:
                    if(!var4) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var7 = _closure2_slot4;
                    var5 = 3;
                    var5 = var7 + var5;
                    var4 = var6 <= var5;
case 50:
                    if(!var4) { _fun0009_ip = 41; continue _fun0009 }
case 52:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 24;
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
case 41:
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
        var3 = var7.bind(var8)(var3, var6);
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var6 = function(arg1, arg2) {
            var8 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 20;
            var3 = var7[var1];
            var1 = undefined;
            var9 = var6.bind(var1)(var3);
            var4 = var9.trackAdContentClicked;
            var3 = {};
            var5 = var8.id;
            var3['adContentId'] = var5;
            var5 = 25;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.AdCreativeType;
            var5 = var5.BOUNTY;
            var3['adCreativeType'] = var5;
            var5 = 22;
            var10 = var7[var5];
            var10 = var6.bind(var1)(var10);
            var10 = var10.QuestContent;
            var10 = var10.QUEST_HOME_MOBILE_CAROUSEL;
            var3['questContent'] = var10;
            var10 = 21;
            var10 = var7[var10];
            var10 = var6.bind(var1)(var10);
            var10 = var10.QuestContentCTA;
            var10 = var10.START_BOUNTY;
            var3['questContentCTA'] = var10;
            var10 = var7[var5];
            var10 = var6.bind(var1)(var10);
            var10 = var10.QuestContent;
            var10 = var10.QUEST_HOME_MOBILE_CAROUSEL;
            var3['sourceQuestContent'] = var10;
            var10 = arg2;
            var3['questContentPosition'] = var10;
            var3 = var4.bind(var9)(var3);
            var9 = _closure2_slot8;
            var4 = var8.id;
            var9['current'] = var4;
            var9 = _closure2_slot9;
            var11 = _closure1_slot6;
            var10 = var11.isBountyCompleted;
            var4 = var8.id;
            var4 = var10.bind(var11)(var4);
            var9['current'] = var4;
            var4 = _closure2_slot7;
            var3 = true;
            var3 = var4.bind(var1)(var3);
            var3 = _closure1_slot1;
            var2 = 23;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.showModal;
            var2 = {};
            var8 = var8.id;
            var2['bountyId'] = var8;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.QuestContent;
            var5 = var5.QUEST_HOME_MOBILE_CAROUSEL;
            var2['sourceQuestContent'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = new Array(0);
        var3 = var7.bind(var8)(var6, var3);
        var _closure2_slot17 = var3;
        var7 = _closure1_slot1;
        var21 = _closure1_slot2;
        var6 = 26;
        var6 = var21[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.bind(var4)();
        var6 = var7.containerRef;
        var23 = var7.isInView;
        var _closure2_slot18 = var23;
        var18 = _closure1_slot4;
        var8 = var18.useCallback;
        var7 = new Array(4);
        var7[0] = var22;
        var7[1] = var3;
        var7[2] = var23;
        var7[3] = var9;
        var3 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var1 = var2.item;
                var _closure3_slot0 = var1;
                var7 = var2.index;
                var _closure3_slot1 = var7;
                var5 = _closure1_slot9;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 27;
                var2 = var10[var2];
                var4 = undefined;
                var2 = var9.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var8 = var1.id;
                var2['adContentId'] = var8;
                var8 = 25;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.AdCreativeType;
                var8 = var8.BOUNTY;
                var2['adCreativeType'] = var8;
                var8 = 22;
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
                if(var8) { _fun0011_ip = 53; continue _fun0011 }
case 21:
                var7 = undefined;
case 53:
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
        var18 = var8.bind(var18)(var3, var7);
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var3 = new Array(2);
        var3[0] = var19;
        var3[1] = var2;
        var2 = function(arg1) {
            var6 = arg1;
            var _closure3_slot0 = var6;
            var4 = _closure1_slot9;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 28;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CellContainer;
            var1 = {};
            var8 = var1;
            var7 = var6;
            var6 = copyDataProperties(var8, var7);
            var6 = function onLayout(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot0;
                    var2 = _closure3_slot0;
                    var2 = var2.index;
                    var2 = var5[var2];
                    var5 = null;
                    if(!(var5 != var2)) { _fun0012_ip = 43; continue _fun0012 }
case 54:
                    var8 = _closure2_slot10;
                    var5 = var8.current;
                    var7 = var5.children;
                    var6 = var2.id;
                    var5 = {};
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
case 43:
                    var2 = _closure3_slot0;
                    var1 = var2.onLayout;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = 'onLayout';
            var1[4] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var8 = var7.bind(var8)(var2, var3);
        var7 = _closure1_slot4;
        var3 = var7.useMemo;
        var2 = new Array(3);
        var2[0] = var23;
        var2[1] = var22;
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
        var9 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {};
        var1['ref'] = var6;
        var6 = var17.container;
        var1['style'] = var6;
        var1['onLayout'] = var5;
        var7 = _closure1_slot9;
        var6 = _closure1_slot0;
        var5 = 28;
        var5 = var21[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.FlashList;
        var5 = {};
        var5['ref'] = var20;
        var20 = true;
        var5['horizontal'] = var20;
        var5['data'] = var19;
        var5['renderItem'] = var18;
        var18 = _closure1_slot16;
        var5['keyExtractor'] = var18;
        var17 = var17.listContentContainer;
        var5['contentContainerStyle'] = var17;
        var17 = _closure1_slot13;
        var5['estimatedItemSize'] = var17;
        var5['snapToOffsets'] = var16;
        var5['snapToEnd'] = var15;
        var16 = 'fast';
        var5['decelerationRate'] = var16;
        var5['showsHorizontalScrollIndicator'] = var15;
        var14 = _closure1_slot15;
        var5['ItemSeparatorComponent'] = var14;
        var5['ListFooterComponent'] = var13;
        var5['onScroll'] = var12;
        var5['onScrollBeginDrag'] = var11;
        var5['onMomentumScrollEnd'] = var10;
        var10 = 16;
        var5['scrollEventThrottle'] = var10;
        var5['extraData'] = var9;
        var5['CellRendererComponent'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var4 = function ItemSeparator() {
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
    var _closure1_slot15 = var4;
    var4 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function QuestHomeBounties(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var6 = var2.verticalScrollEnabled;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 29;
            var2 = var4[var2];
            var5 = undefined;
            var8 = var3.bind(var5)(var2);
            var2 = var8.useQuestHomeBounties;
            var2 = var2.bind(var8)();
            var12 = var2.questHomeBounties;
            var2 = _closure1_slot14;
            var8 = var2.bind(var5)();
            var2 = var12.length;
            var9 = 0;
            var10 = var2 > var9;
            var2 = function useBountiesNux(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0014_ip = 55; continue _fun0014 }
case 56:
                    var6 = new Array(0);
                    _fun0014_ip = 57; continue _fun0014;
case 55:
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
case 57:
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
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
                            if(var4) { _fun0015_ip = 27; continue _fun0015 }
case 58:
                            var5 = _closure3_slot2;
                            var4 = var5.current;
case 27:
                            if(var4) { _fun0015_ip = 59; continue _fun0015 }
case 60:
                            var4 = _closure3_slot2;
                            var3 = true;
                            var4['current'] = var3;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.bind(var1)();
case 59:
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
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var5 = _closure3_slot0;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 16;
                            var3 = var4[var3];
                            var4 = undefined;
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.BOUNTIES_NUX_PROMO_SHEET;
                            if(!(var5 !== var3)) { _fun0016_ip = 61; continue _fun0016 }
case 62:
                            return var4;
case 61:
                            var5 = function handleHide(arg1) {
                                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                                    if(!(var4 === var3)) { _fun0017_ip = 63; continue _fun0017 }
case 64:
                                    var3 = _closure3_slot1;
                                    var2 = _closure1_slot8;
                                    var2 = var2.USER_DISMISS;
                                    var2 = var3.bind(var1)(var2);
case 63:
                                    return var1;
                                }
                            };
                            var _closure4_slot0 = var5;
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
            var2 = var2.bind(var5)(var10);
            var2 = var12.length;
            var10 = var9 === var2;
            var2 = 30;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var9 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.areAllBountiesCompleted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var3.bind(var4)(var2, var1);
            if(var10) { _fun0013_ip = 65; continue _fun0013 }
case 66:
            if(var11) { _fun0013_ip = 65; continue _fun0013 }
case 67:
            var4 = _closure1_slot9;
            if(var6) { _fun0013_ip = 22; continue _fun0013 }
case 68:
            var2 = _closure1_slot19;
            var1 = {};
            var1['bounties'] = var12;
            var1 = var4.bind(var5)(var2, var1);
            _fun0013_ip = 69; continue _fun0013;
case 22:
            var3 = _closure1_slot5;
            var2 = {};
            var9 = var8.container;
            var2['style'] = var9;
            var14 = _closure1_slot9;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 31;
            var9 = var15[var9];
            var13 = var13.bind(var5)(var9);
            var9 = {};
            var9['bounties'] = var12;
            var9 = var14.bind(var5)(var13, var9);
            var2['children'] = var9;
            var1 = var4.bind(var5)(var3, var2);
case 69:
            _fun0013_ip = 70; continue _fun0013;
case 65:
            var4 = _closure1_slot9;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var8.container;
            var2['style'] = var8;
            var9 = _closure1_slot9;
            if(var6) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            var8 = _closure1_slot17;
            var6 = {};
            var14 = _closure1_slot7;
            if(var10) { _fun0013_ip = 73; continue _fun0013 }
case 74:
            var13 = var14.COMPLETED;
            _fun0013_ip = 75; continue _fun0013;
case 73:
            var13 = var14.EMPTY;
case 75:
            var6['reason'] = var13;
            var6 = var9.bind(var5)(var8, var6);
            _fun0013_ip = 76; continue _fun0013;
case 71:
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 31;
            var7 = var13[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['bounties'] = var12;
            if(var10) { _fun0013_ip = 77; continue _fun0013 }
case 78:
            var10 = var11;
case 77:
            var7['isEmptyOrCompleted'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 76:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 70:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHomeBounties.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();