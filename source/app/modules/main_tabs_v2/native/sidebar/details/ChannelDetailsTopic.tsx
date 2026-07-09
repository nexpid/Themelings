// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function GuildChannelDetailsTopic(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var2 = var3.channel;
                var _closure2_slot0 = var2;
                var32 = var3.textAlign;
                var6 = var3.initialExpanded;
                var4 = undefined;
                if(!(var6 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var6 = false;
case 2:
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var3 = _closure1_slot15;
                var18 = var3.bind(var4)();
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var3 = 9;
                var3 = var20[var3];
                var7 = var19.bind(var4)(var3);
                var5 = var7.useToken;
                var8 = _closure1_slot1;
                var3 = 10;
                var3 = var20[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.colors;
                var3 = var3.BACKGROUND_BASE_LOWER;
                var3 = var5.bind(var7)(var3);
                _closure2_slot2 = var3;
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var1 = _closure2_slot2;
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.alpha;
                    var1 = 0;
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.hex;
                    var3 = var1.bind(var3)();
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = _closure2_slot2;
                    var1[1] = var2;
                    return var1;
                };
                var16 = var7.bind(var8)(var3, var5);
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var3 = true;
                var5 = var5.bind(var7)(var3);
                var3 = _closure1_slot3;
                var9 = 2;
                var3 = var3.bind(var4)(var5, var9);
                var7 = 0;
                var31 = var3[var7];
                _closure2_slot3 = var31;
                var5 = 1;
                var3 = var3[var5];
                _closure2_slot4 = var3;
                var8 = _closure1_slot4;
                var3 = var8.useState;
                var8 = var3.bind(var8)(var6);
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var8, var9);
                var29 = var3[var7];
                _closure2_slot5 = var29;
                var3 = var3[var5];
                _closure2_slot6 = var3;
                var10 = 12;
                var3 = var20[var10];
                var5 = var19.bind(var4)(var3);
                var3 = var5.useSharedValue;
                var8 = var3.bind(var5)(var4);
                _closure2_slot7 = var8;
                var3 = var20[var10];
                var5 = var19.bind(var4)(var3);
                var3 = var5.useSharedValue;
                var7 = var3.bind(var5)(var4);
                _closure2_slot8 = var7;
                var3 = var20[var10];
                var9 = var19.bind(var4)(var3);
                var5 = var9.useSharedValue;
                var3 = _closure1_slot17;
                var3 = var3.HIDDEN;
                var3 = var5.bind(var9)(var3);
                _closure2_slot9 = var3;
                var5 = var20[var10];
                var11 = var19.bind(var4)(var5);
                var9 = var11.useAnimatedStyle;
                var5 = function _() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot8;
                        var1 = var2.get;
                        var6 = var1.bind(var2)();
                        var2 = _closure2_slot7;
                        var1 = var2.get;
                        var3 = var1.bind(var2)();
                        var1 = null;
                        if(!(var1 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        if(!(var1 != var6)) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                        var1 = {};
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 13;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var8.bind(var4)(var5);
                        var4 = var5.withSpring;
                        var7 = _closure2_slot5;
                        if(!var7) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var3 = var6;
case 7:
                        var2 = _closure1_slot9;
                        var2 = var4.bind(var5)(var3, var2);
                        var1['height'] = var2;
                        _fun0003_ip = 9; continue _fun0003;
case 4:
                        var1 = _closure1_slot16;
case 9:
                        return var1;
                    }
                };
                var12 = {};
                var12['expandedHeight'] = var7;
                var12['truncatedHeight'] = var8;
                var13 = _closure1_slot16;
                var12['EMPTY_STYLE'] = var13;
                var13 = 13;
                var14 = var20[var13];
                var14 = var19.bind(var4)(var14);
                var14 = var14.withSpring;
                var12['withSpring'] = var14;
                var12['expanded'] = var29;
                var14 = _closure1_slot9;
                var12['SPRING_CHANNEL_DETAILS'] = var14;
                var5['__closure'] = var12;
                var12 = 11932535786068.0;
                var5['__workletHash'] = var12;
                var12 = _closure1_slot18;
                var5['__initData'] = var12;
                var15 = var9.bind(var11)(var5);
                var5 = var20[var10];
                var11 = var19.bind(var4)(var5);
                var9 = var11.useAnimatedStyle;
                var5 = function f() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = null;
                        if(!(var1 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var1 = {};
                        var3 = _closure2_slot8;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var1['height'] = var2;
                        _fun0004_ip = 12; continue _fun0004;
case 10:
                        var1 = _closure1_slot16;
case 12:
                        return var1;
                    }
                };
                var12 = {};
                var12['expandedHeight'] = var7;
                var14 = _closure1_slot16;
                var12['EMPTY_STYLE'] = var14;
                var5['__closure'] = var12;
                var12 = 13643982891313.0;
                var5['__workletHash'] = var12;
                var12 = _closure1_slot19;
                var5['__initData'] = var12;
                var14 = var9.bind(var11)(var5);
                var5 = var20[var10];
                var11 = var19.bind(var4)(var5);
                var9 = var11.useAnimatedStyle;
                var5 = function L() {
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot9;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                };
                var12 = {};
                var13 = var20[var13];
                var13 = var19.bind(var4)(var13);
                var13 = var13.withSpring;
                var12['withSpring'] = var13;
                var12['gradient'] = var3;
                var13 = _closure1_slot9;
                var12['SPRING_CHANNEL_DETAILS'] = var13;
                var5['__closure'] = var12;
                var12 = 12423301233362.0;
                var5['__workletHash'] = var12;
                var12 = _closure1_slot20;
                var5['__initData'] = var12;
                var20 = var9.bind(var11)(var5);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var9 = new Array(2);
                var9[0] = var3;
                var9[1] = var29;
                var5 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.lines;
                        var2 = var1.length;
                        var1 = _closure1_slot8;
                        var6 = var2 > var1;
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var6);
                        var4 = _closure2_slot9;
                        var3 = var4.set;
                        if(!var6) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                        var2 = _closure2_slot5;
                        if(var2) { _fun0005_ip = 13; continue _fun0005 }
case 15:
                        var2 = _closure1_slot17;
                        var2 = var2.VISIBLE;
                        _fun0005_ip = 16; continue _fun0005;
case 13:
                        var5 = _closure1_slot17;
                        var2 = var5.HIDDEN;
case 16:
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var23 = var11.bind(var12)(var5, var9);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var9 = new Array(1);
                var9[0] = var7;
                var5 = function(arg1) {
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var1 = var1.height;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var22 = var11.bind(var12)(var5, var9);
                var11 = _closure1_slot4;
                var9 = var11.useMemo;
                var5 = new Array(3);
                var5[0] = var31;
                var5[1] = var29;
                var5[2] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure2_slot3;
                        if(var1) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                        var1 = undefined;
                        return var1;
case 17:
                        var1 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var1 = _closure2_slot5;
                                var2 = !var1;
                                var4 = _closure2_slot6;
                                var1 = undefined;
                                var4 = var4.bind(var1)(var2);
                                var4 = _closure2_slot9;
                                var3 = var4.set;
                                var5 = _closure1_slot17;
                                if(var2) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                                var2 = var5.VISIBLE;
                                _fun0007_ip = 21; continue _fun0007;
case 19:
                                var2 = var5.HIDDEN;
case 21:
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            }
                        };
                        return var1;
                    }
                };
                var21 = var9.bind(var11)(var3, var5);
                var11 = _closure1_slot4;
                var9 = var11.useCallback;
                var5 = new Array(1);
                var5[0] = var8;
                var3 = function(arg1) {
                    var3 = _closure2_slot7;
                    var2 = var3.set;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var1 = var1.height;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var30 = var9.bind(var11)(var3, var5);
                var11 = _closure1_slot4;
                var9 = var11.useMemo;
                var3 = var2.id;
                var5 = new Array(2);
                var5[0] = var3;
                var3 = var2.topic;
                var5[1] = var3;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.parseTopic;
                    var1 = _closure2_slot0;
                    var7 = var1.topic;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var8 = var3.bind(var2)(var7);
                    var7 = var8.replace;
                    var3 = /(\r\n|\n|\r)/gm;
                    var2 = ' ';
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var1 = var1.id;
                    var2['channelId'] = var1;
                    var1 = true;
                    var2['shouldNavigateBack'] = var1;
                    var6 = _closure1_slot14;
                    var2['mentionPillOffsetY'] = var6;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                };
                var27 = var9.bind(var11)(var3, var5);
                var11 = _closure1_slot4;
                var9 = var11.useMemo;
                var3 = var2.id;
                var5 = new Array(2);
                var5[0] = var3;
                var3 = var2.topic;
                var5[1] = var3;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.parseTopic;
                    var1 = _closure2_slot0;
                    var3 = var1.topic;
                    var2 = {};
                    var1 = var1.id;
                    var2['channelId'] = var1;
                    var1 = true;
                    var2['shouldNavigateBack'] = var1;
                    var6 = _closure1_slot14;
                    var2['mentionPillOffsetY'] = var6;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                };
                var28 = var9.bind(var11)(var3, var5);
                var5 = _closure1_slot4;
                var3 = var5.useEffect;
                var9 = var2.id;
                var2 = new Array(4);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var1 = function() {
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var1 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var4 = _closure2_slot8;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var1);
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var5)(var1, var2);
                var1 = null;
                if(!(var1 != var21)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var19 = var1.PressableOpacity;
                _fun0002_ip = 24; continue _fun0002;
case 22:
                var19 = _closure1_slot5;
case 24:
                var3 = _closure1_slot12;
                var2 = _closure1_slot13;
                var1 = {};
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {'style': null, 'pointerEvents': 'none', 'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
                var8 = var18.hidden;
                var5['style'] = var8;
                var13 = 'none';
                var12 = _closure1_slot11;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var33 = 16;
                var8 = var9[var33];
                var8 = var11.bind(var4)(var8);
                var11 = var8.Text;
                var8 = {};
                var24 = 'heading-sm/normal';
                var8['variant'] = var24;
                var24 = var18.topicText;
                var8['style'] = var24;
                var8['onTextLayout'] = var23;
                var8['onLayout'] = var22;
                var8['children'] = var28;
                var8 = var12.bind(var4)(var11, var8);
                var5['children'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot12;
                var11 = _closure1_slot1;
                var6 = var9[var10];
                var6 = var11.bind(var4)(var6);
                var7 = var6.View;
                var6 = {};
                var22 = var18.topic;
                var12 = new Array(2);
                var12[0] = var22;
                var12[1] = var15;
                var6['style'] = var12;
                var12 = _closure1_slot11;
                var9 = var9[var10];
                var9 = var11.bind(var4)(var9);
                var11 = var9.View;
                var9 = {};
                var9['style'] = var14;
                var15 = _closure1_slot11;
                var14 = {};
                var14['onPress'] = var21;
                var21 = 0.7;
                var14['activeOpacity'] = var21;
                var23 = _closure1_slot11;
                var22 = _closure1_slot5;
                var21 = {};
                if(var29) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var24 = var13;
                if(var31) { _fun0002_ip = 27; continue _fun0002 }
case 25:
                var24 = undefined;
case 27:
                var21['pointerEvents'] = var24;
                var26 = _closure1_slot11;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var33];
                var24 = var25.bind(var4)(var24);
                var25 = var24.Text;
                var24 = {'color': 'interactive-text-default', 'variant': 'heading-sm/normal'};
                var24['onLayout'] = var30;
                var30 = undefined;
                if(var29) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var30 = _closure1_slot8;
case 28:
                var24['lineClamp'] = var30;
                var33 = var18.topicText;
                var30 = new Array(3);
                var30[0] = var33;
                if(var29) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                if(!var31) { _fun0002_ip = 30; continue _fun0002 }
case 32:
                var31 = _closure1_slot16;
                _fun0002_ip = 33; continue _fun0002;
case 30:
                var31 = var18.expanded;
case 33:
                var30[1] = var31;
                var31 = {};
                var31['textAlign'] = var32;
                var30[2] = var31;
                var24['style'] = var30;
                if(!var29) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var27 = var28;
case 34:
                var24['children'] = var27;
                var24 = var26.bind(var4)(var25, var24);
                var21['children'] = var24;
                var21 = var23.bind(var4)(var22, var21);
                var14['children'] = var21;
                var14 = var15.bind(var4)(var19, var14);
                var9['children'] = var14;
                var11 = var12.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot11;
                var14 = _closure1_slot1;
                var19 = _closure1_slot2;
                var10 = var19[var10];
                var10 = var14.bind(var4)(var10);
                var11 = var10.View;
                var10 = {};
                var15 = _closure1_slot6;
                var21 = var15.absoluteFill;
                var15 = new Array(2);
                var15[0] = var21;
                var15[1] = var20;
                var10['style'] = var15;
                var10['pointerEvents'] = var13;
                var15 = _closure1_slot11;
                var13 = 17;
                var13 = var19[var13];
                var14 = var14.bind(var4)(var13);
                var13 = {};
                var18 = var18.gradient;
                var13['style'] = var18;
                var18 = _closure1_slot10;
                var18 = var18.START;
                var13['start'] = var18;
                var17 = _closure1_slot10;
                var17 = var17.END;
                var13['end'] = var17;
                var13['colors'] = var16;
                var13 = var15.bind(var4)(var14, var13);
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
        var _closure1_slot21 = var1;
        var1 = function PrivateChannelDetailsTopic(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var3 = var2.channel;
                var _closure2_slot0 = var3;
                var8 = var2.textAlign;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 18;
                var3 = var5[var3];
                var5 = undefined;
                var6 = var4.bind(var5)(var3);
                var4 = var6.useStateFromStores;
                var7 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var7;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = _closure1_slot7;
                        var3 = var4.getUser;
                        var5 = _closure2_slot0;
                        var1 = var5.getRecipientId;
                        var1 = var1.bind(var5)();
                        var4 = var3.bind(var4)(var1);
                        var1 = null;
                        if(!(var1 != var4)) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var3 = var4.isProvisional;
                        var1 = null;
                        if(var3) { _fun0009_ip = 38; continue _fun0009 }
case 36:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.getUserTag;
                        var1 = var2.bind(var3)(var4);
case 38:
                        return var1;
                    }
                };
                var6 = var4.bind(var6)(var3, var1);
                var1 = null;
                var3 = var1 == var6;
                if(var3) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                var4 = _closure1_slot11;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Text;
                var2 = {'variant': 'heading-sm/normal', 'color': 'interactive-text-default'};
                var7 = {};
                var7['textAlign'] = var8;
                var2['style'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 39:
                return var1;
            }
        };
        var _closure1_slot22 = var1;
        var1 = function GroupDMChannelDetailsTopic(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var3 = var2.channel;
                var _closure2_slot0 = var3;
                var8 = var2.textAlign;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 18;
                var3 = var5[var3];
                var5 = undefined;
                var6 = var4.bind(var5)(var3);
                var4 = var6.useStateFromStores;
                var7 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var7;
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getPrivateChannelUserTagsString;
                    var2 = _closure2_slot0;
                    var2 = var2.recipients;
                    var1 = _closure1_slot7;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6 = var4.bind(var6)(var3, var1);
                var1 = null;
                var3 = var1 == var6;
                if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                var4 = _closure1_slot11;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.Text;
                var2 = {'variant': 'heading-sm/normal', 'color': 'interactive-text-default'};
                var7 = {};
                var7['textAlign'] = var8;
                var2['style'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 39:
                return var1;
            }
        };
        var _closure1_slot23 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var10 = 0;
        var4 = var6[var10];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var9 = 1;
        var7 = var6[var9];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var8 = var6[var4];
        var8 = var5.bind(var1)(var8);
        var12 = var8.View;
        var _closure1_slot5 = var12;
        var8 = var8.StyleSheet;
        var _closure1_slot6 = var8;
        var8 = 3;
        var8 = var6[var8];
        var8 = var11.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var8 = 4;
        var11 = var6[var8];
        var11 = var5.bind(var1)(var11);
        var12 = var11.CHANNEL_TOPIC_LINE_CLAMP;
        var _closure1_slot8 = var12;
        var11 = var11.SPRING_CHANNEL_DETAILS;
        var _closure1_slot9 = var11;
        var13 = 5;
        var11 = var6[var13];
        var11 = var5.bind(var1)(var11);
        var11 = var11.VerticalGradient;
        var _closure1_slot10 = var11;
        var11 = 6;
        var11 = var6[var11];
        var11 = var5.bind(var1)(var11);
        var12 = var11.jsx;
        var _closure1_slot11 = var12;
        var12 = var11.jsxs;
        var _closure1_slot12 = var12;
        var11 = var11.Fragment;
        var _closure1_slot13 = var11;
        var11 = 7;
        var11 = var6[var11];
        var12 = var5.bind(var1)(var11);
        var11 = var12.isAndroid;
        var11 = var11.bind(var12)();
        if(!var11) { _fun0001_ip = 41; continue _fun0001 }
case 42:
        var4 = var8;
case 41:
        var _closure1_slot14 = var4;
        var4 = 8;
        var4 = var6[var4];
        var11 = var5.bind(var1)(var4);
        var8 = var11.createStyles;
        var4 = {};
        var12 = {'flex': 1, 'flexGrow': 1, 'position': 'absolute', 'opacity': 0};
        var4['hidden'] = var12;
        var12 = {};
        var14 = 'hidden';
        var12['overflow'] = var14;
        var4['topic'] = var12;
        var12 = {'flex': 1, 'flexGrow': 1};
        var4['gradient'] = var12;
        var12 = {};
        var14 = 'center';
        var12['textAlign'] = var14;
        var4['expanded'] = var12;
        var12 = {};
        var12['paddingVertical'] = var13;
        var4['topicText'] = var12;
        var4 = var8.bind(var11)(var4);
        var _closure1_slot15 = var4;
        var4 = {};
        var _closure1_slot16 = var4;
        var4 = {};
        var4['HIDDEN'] = var10;
        var8 = 'HIDDEN';
        var4[var10] = var8;
        var4['VISIBLE'] = var9;
        var8 = 'VISIBLE';
        var4[var9] = var8;
        var _closure1_slot17 = var4;
        var4 = {};
        var8 = 'function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}';
        var4['code'] = var8;
        var _closure1_slot18 = var4;
        var4 = {};
        var8 = 'function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}';
        var4['code'] = var8;
        var _closure1_slot19 = var4;
        var4 = {};
        var8 = 'function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}';
        var4['code'] = var8;
        var _closure1_slot20 = var4;
        var4 = var7.memo;
        var2 = function ChannelDetailsTopic(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var8 = var1.channel;
                var7 = var1.containerStyle;
                var4 = var1.textAlign;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                var4 = 'center';
case 43:
                var9 = var1.initialExpanded;
                if(!(var9 === var5)) { _fun0011_ip = 37; continue _fun0011 }
case 6:
                var9 = false;
case 37:
                var1 = var8.isDM;
                var1 = var1.bind(var8)();
                if(var1) { _fun0011_ip = 45; continue _fun0011 }
case 21:
                var1 = var8.isGroupDM;
                var1 = var1.bind(var8)();
                if(var1) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                var2 = var8.topic;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 48; continue _fun0011 }
case 49:
                var3 = var8.topic;
                var2 = var3.trim;
                var3 = var2.bind(var3)();
                var2 = '';
                var1 = var2 !== var3;
case 48:
                var6 = undefined;
                if(!var1) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                var3 = _closure1_slot11;
                var2 = _closure1_slot21;
                var1 = {};
                var1['channel'] = var8;
                var1['textAlign'] = var4;
                var1['initialExpanded'] = var9;
                var6 = var3.bind(var5)(var2, var1);
                _fun0011_ip = 50; continue _fun0011;
case 46:
                var3 = _closure1_slot11;
                var2 = _closure1_slot23;
                var1 = {};
                var1['channel'] = var8;
                var1['textAlign'] = var4;
                var6 = var3.bind(var5)(var2, var1);
                _fun0011_ip = 50; continue _fun0011;
case 45:
                var3 = _closure1_slot11;
                var2 = _closure1_slot22;
                var1 = {};
                var1['channel'] = var8;
                var1['textAlign'] = var4;
                var6 = var3.bind(var5)(var2, var1);
case 50:
                var1 = null;
                var2 = var1 == var6;
                if(var2) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                var4 = _closure1_slot11;
                var3 = _closure1_slot5;
                var2 = {};
                var2['style'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 52:
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 21;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();