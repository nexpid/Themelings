// app/modules/quests/native/QuestHomeBounties.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function EmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.reason;
            var1 = _closure1_slot11;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var1 = _closure1_slot12;
            var1 = var1.COMPLETED;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
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
            var1 = 8;
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
            var1 = _closure1_slot12;
            var1 = var1.COMPLETED;
            if(!(var2 !== var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var16 = var1.ReqPds;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var16 = var1.D/790X;
case 7:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var9.emptyState;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 9;
            var5 = var15[var5];
            var5 = var14.bind(var4)(var5);
            var6 = var5.BountiesPosterIllocon;
            var5 = {};
            var8 = 32;
            var5['size'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var9.emptyStateText;
            var6['style'] = var9;
            var12 = _closure1_slot7;
            var9 = 10;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-sm/semibold', 'color': 'text-default'};
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot7;
            var10 = 11;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.TextWithIOSLinkWorkaround;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var13 = 8;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var15 = var13.intl;
            var14 = var15.format;
            var13 = {};
            var17 = function onClickLearnMore() {
                var1 = undefined;
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
        var1 = _closure1_slot10;
        var1 = var4 / var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var8 = var7[var2];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.jsx;
    var _closure1_slot7 = var9;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.spacing;
    var5 = var2.PX_16;
    var _closure1_slot9 = var5;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CARD_WIDTH;
    var2 = var2 + var5;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 5;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_48;
        var2['marginBottom'] = var7;
        var1['container'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingLeft'] = var7;
        var1['listContentContainer'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'borderWidth': 1};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
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
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = 14;
        var2['paddingVertical'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['marginHorizontal'] = var3;
        var1['emptyState'] = var2;
        var2 = {'flex': 1, 'gap': 2};
        var1['emptyStateText'] = var2;
        return var1;
    };
    var2 = var5.bind(var9)(var2);
    var _closure1_slot11 = var2;
    var2 = {};
    var5 = 'completed';
    var2['COMPLETED'] = var5;
    var5 = 'empty';
    var2['EMPTY'] = var5;
    var _closure1_slot12 = var2;
    var5 = function ItemSeparator() {
        var4 = _closure1_slot7;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var5 = _closure1_slot9;
        var1['width'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot13 = var5;
    var5 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot14 = var5;
    var5 = var8.memo;
    var4 = function QuestHomeBounties() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var2 = var5.useQuestHomeBounties;
            var2 = var2.bind(var5)();
            var18 = var2.questHomeBounties;
            var _closure2_slot0 = var18;
            var2 = _closure1_slot11;
            var6 = var2.bind(var4)();
            var20 = _closure1_slot4;
            var2 = var20.useRef;
            var9 = null;
            var19 = var2.bind(var20)(var9);
            var _closure2_slot1 = var19;
            var2 = var20.useState;
            var8 = 0;
            var2 = var2.bind(var20)(var8);
            var13 = _closure1_slot3;
            var11 = 2;
            var5 = var13.bind(var4)(var2, var11);
            var2 = var5[var8];
            var _closure2_slot2 = var2;
            var12 = 1;
            var5 = var5[var12];
            var _closure2_slot3 = var5;
            var5 = var20.useState;
            var5 = var5.bind(var20)(var8);
            var5 = var13.bind(var4)(var5, var11);
            var11 = var5[var8];
            var _closure2_slot4 = var11;
            var5 = var5[var12];
            var _closure2_slot5 = var5;
            var5 = var20.useRef;
            var5 = var5.bind(var20)(var9);
            var _closure2_slot6 = var5;
            var5 = var20.useRef;
            var15 = false;
            var5 = var5.bind(var20)(var15);
            var _closure2_slot7 = var5;
            var13 = var20.useCallback;
            var12 = function(arg1) {
                var3 = _closure2_slot3;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = new Array(0);
            var5 = var13.bind(var20)(var12, var5);
            var14 = var20.useMemo;
            var12 = var18.length;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
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
                    var2 = _closure1_slot10;
                    var1 = arg2;
                    var1 = var1 * var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var14.bind(var20)(var12, var13);
            var13 = var20.useCallback;
            var12 = new Array(1);
            var12[0] = var2;
            var2 = function() {
                var4 = _closure1_slot7;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var6 = global;
                var9 = var6.Math;
                var8 = var9.max;
                var7 = _closure2_slot2;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var10.bind(var1)(var6);
                var6 = var6.CARD_WIDTH;
                var7 = var7 - var6;
                var6 = 0;
                var6 = var8.bind(var9)(var6, var7);
                var5['width'] = var6;
                var2['style'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var14 = var13.bind(var20)(var2, var12);
            var2 = var20.useRef;
            var2 = var2.bind(var20)(var11);
            var _closure2_slot8 = var2;
            var2 = var20.useRef;
            var2 = var2.bind(var20)(var9);
            var _closure2_slot9 = var2;
            var13 = var20.useCallback;
            var12 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot16;
                    var1 = undefined;
                    var3 = arg1;
                    var5 = var4.bind(var1)(var3);
                    var4 = _closure2_slot8;
                    var4 = var4.current;
                    if(!(var5 !== var4)) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                    var4 = _closure2_slot8;
                    var4['current'] = var5;
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var5 = _closure2_slot9;
                    var6 = var5.current;
                    var5 = null;
                    var5 = var5 == var6;
                    if(var5) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = _closure2_slot9;
                    var6 = var6.current;
                    var7 = var4 - var6;
                    var6 = 50;
                    var5 = var7 >= var6;
case 8:
                    if(!var5) { _fun0003_ip = 6; continue _fun0003 }
case 10:
                    var3 = _closure2_slot9;
                    var3['current'] = var4;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 13;
                    var3 = var6[var2];
                    var4 = var5.bind(var1)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var2 = new Array(0);
            var13 = var13.bind(var20)(var12, var2);
            var17 = var20.useCallback;
            var12 = function(arg1) {
                var3 = _closure2_slot5;
                var4 = _closure1_slot16;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var12 = var17.bind(var20)(var12, var2);
            var2 = var20.useRef;
            var2 = var2.bind(var20)(var9);
            var _closure2_slot10 = var2;
            var17 = var20.useCallback;
            var9 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = global;
                    var7 = var3.clearTimeout;
                    var3 = _closure2_slot10;
                    var6 = var3.current;
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var3['current'] = var4;
case 11:
                    var3 = _closure2_slot10;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var1 = undefined;
                    var4 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = _closure2_slot1;
                            var5 = var2.current;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                            var4 = var5.scrollToOffset;
                            var3 = {};
                            var7 = _closure3_slot0;
                            var6 = _closure1_slot10;
                            var6 = var7 * var6;
                            var3['offset'] = var6;
                            var6 = true;
                            var3['animated'] = var6;
                            var3 = var4.bind(var5)(var3);
case 13:
                            var1 = _closure2_slot10;
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
            var2 = new Array(0);
            var2 = var17.bind(var20)(var9, var2);
            var _closure2_slot11 = var2;
            var21 = var20.useEffect;
            var17 = function() {
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot10;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 15; continue _fun0006 }
case 14:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var1 = _closure2_slot10;
                        var4 = var1.current;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1['current'] = var2;
case 15:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var9 = new Array(0);
            var9 = var21.bind(var20)(var17, var9);
            var17 = var20.useEffect;
            var9 = new Array(3);
            var9[0] = var18;
            var9[1] = var11;
            var9[2] = var2;
            var2 = function() {
                var5 = function handleModalClose(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.key;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 14;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.BOUNTIES_MODAL_KEY;
                        if(!(var5 === var4)) { _fun0007_ip = 16; continue _fun0007 }
case 15:
                        var6 = _closure2_slot6;
                        var7 = var6.current;
                        var _closure4_slot0 = var7;
                        var4 = null;
                        var6['current'] = var4;
                        if(!(var4 != var7)) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                        var6 = _closure1_slot6;
                        var4 = var6.isBountyCompleted;
                        var4 = var4.bind(var6)(var7);
                        if(!var4) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                        var6 = _closure2_slot7;
                        var6 = var6.current;
                        var4 = !var6;
case 18:
                        var7 = _closure2_slot7;
                        var6 = false;
                        var7['current'] = var6;
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
                        if(!(var7 !== var6)) { _fun0007_ip = 16; continue _fun0007 }
case 20:
                        var9 = _closure2_slot0;
                        var8 = var9.findIndex;
                        var6 = function(arg1, arg2) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var3 = arg2;
                                var1 = _closure2_slot4;
                                var1 = var3 > var1;
                                if(!var1) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                                var2 = _closure4_slot1;
                                var1 = var3 > var2;
case 21:
                                if(!var1) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                                var4 = _closure1_slot6;
                                var3 = var4.isBountyCompleted;
                                var2 = arg1;
                                var2 = var2.id;
                                var2 = var3.bind(var4)(var2);
                                var1 = !var2;
case 23:
                                return var1;
                            }
                        };
                        var6 = var8.bind(var9)(var6);
                        var _closure4_slot2 = var6;
                        if(!var4) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                        var4 = var7 !== var6;
case 25:
                        if(!var4) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                        var7 = _closure2_slot4;
                        var5 = 3;
                        var5 = var7 + var5;
                        var4 = var6 <= var5;
case 27:
                        if(!var4) { _fun0007_ip = 16; continue _fun0007 }
case 29:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 15;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runAfterInteractions;
                        var2 = function() {
                            var3 = _closure2_slot11;
                            var2 = _closure4_slot2;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
case 16:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.subscribe;
                var2 = 'MODAL_POP';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
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
            var2 = var17.bind(var20)(var2, var9);
            var17 = var20.useCallback;
            var9 = function(arg1) {
                var5 = arg1;
                var3 = _closure2_slot6;
                var2 = var5.id;
                var3['current'] = var2;
                var3 = _closure2_slot7;
                var6 = _closure1_slot6;
                var4 = var6.isBountyCompleted;
                var2 = var5.id;
                var2 = var4.bind(var6)(var2);
                var3['current'] = var2;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showModal;
                var2 = {};
                var5 = var5.id;
                var2['bountyId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var17.bind(var20)(var9, var2);
            var _closure2_slot12 = var2;
            var17 = var20.useCallback;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var2;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = var1.item;
                var7 = var1.index;
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['bounty'] = var5;
                var6 = _closure2_slot4;
                var6 = var7 === var6;
                var1['isActive'] = var6;
                var5 = _closure2_slot12;
                var1['onPress'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var17 = var17.bind(var20)(var2, var9);
            var2 = var18.length;
            var9 = var8 === var2;
            var2 = 17;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.useStateFromStores;
            var8 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.areAllBountiesCompleted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            if(var9) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            if(var1) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var1 = {};
            var7 = var6.container;
            var1['style'] = var7;
            var1['onLayout'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 18;
            var5 = var20[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.FlashList;
            var5 = {};
            var5['ref'] = var19;
            var19 = true;
            var5['horizontal'] = var19;
            var5['data'] = var18;
            var5['renderItem'] = var17;
            var17 = _closure1_slot14;
            var5['keyExtractor'] = var17;
            var17 = var6.listContentContainer;
            var5['contentContainerStyle'] = var17;
            var17 = _closure1_slot10;
            var5['estimatedItemSize'] = var17;
            var5['snapToOffsets'] = var16;
            var5['snapToEnd'] = var15;
            var16 = 'fast';
            var5['decelerationRate'] = var16;
            var5['showsHorizontalScrollIndicator'] = var15;
            var15 = _closure1_slot13;
            var5['ItemSeparatorComponent'] = var15;
            var5['ListFooterComponent'] = var14;
            var5['onScroll'] = var13;
            var5['onMomentumScrollEnd'] = var12;
            var12 = 16;
            var5['scrollEventThrottle'] = var12;
            var5['extraData'] = var11;
            var5 = var8.bind(var4)(var7, var5);
            var1['children'] = var5;
            _fun0002_ip = 33; continue _fun0002;
case 30:
            var5 = {};
            var6 = var6.container;
            var5['style'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot15;
            var6 = {};
            var10 = _closure1_slot12;
            if(var9) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var9 = var10.COMPLETED;
            _fun0002_ip = 36; continue _fun0002;
case 34:
            var9 = var10.EMPTY;
case 36:
            var6['reason'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
case 33:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestHomeBounties.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['EmptyStateReason'] = var2;
    return var1;
})();