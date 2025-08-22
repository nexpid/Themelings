// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function GuildChannelDetailsTopic(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var32 = var3.textAlign;
            var3 = _closure1_slot14;
            var4 = undefined;
            var18 = var3.bind(var4)();
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 8;
            var3 = var19[var3];
            var6 = var13.bind(var4)(var3);
            var5 = var6.useToken;
            var7 = _closure1_slot1;
            var3 = 9;
            var3 = var19[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BG_BASE_SECONDARY;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot1 = var3;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = _closure2_slot1;
                var4 = var1.bind(var3)(var2);
                var3 = var4.alpha;
                var1 = 0;
                var3 = var3.bind(var4)(var1);
                var1 = var3.hex;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var16 = var6.bind(var7)(var3, var5);
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var3 = true;
            var5 = var5.bind(var6)(var3);
            var3 = _closure1_slot3;
            var8 = 2;
            var3 = var3.bind(var4)(var5, var8);
            var6 = 0;
            var30 = var3[var6];
            var _closure2_slot2 = var30;
            var5 = 1;
            var3 = var3[var5];
            var _closure2_slot3 = var3;
            var9 = _closure1_slot4;
            var7 = var9.useState;
            var3 = false;
            var7 = var7.bind(var9)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var7, var8);
            var29 = var3[var6];
            var _closure2_slot4 = var29;
            var3 = var3[var5];
            var _closure2_slot5 = var3;
            var10 = 11;
            var3 = var19[var10];
            var5 = var13.bind(var4)(var3);
            var3 = var5.useSharedValue;
            var7 = var3.bind(var5)(var4);
            var _closure2_slot6 = var7;
            var3 = var19[var10];
            var5 = var13.bind(var4)(var3);
            var3 = var5.useSharedValue;
            var6 = var3.bind(var5)(var4);
            var _closure2_slot7 = var6;
            var3 = var19[var10];
            var8 = var13.bind(var4)(var3);
            var5 = var8.useSharedValue;
            var3 = _closure1_slot16;
            var3 = var3.HIDDEN;
            var3 = var5.bind(var8)(var3);
            var _closure2_slot8 = var3;
            var5 = var19[var10];
            var9 = var13.bind(var4)(var5);
            var8 = var9.useAnimatedStyle;
            var5 = function c() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var6 = var1.bind(var2)();
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 97; continue _fun0002 }
 35:
                    if(!(var1 != var6)) { _fun0002_ip = 97; continue _fun0002 }
 39:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var4 = var5.withSpring;
                    var7 = _closure2_slot4;
                    if(!var7) { _fun0002_ip = 81; continue _fun0002 }
 78:
                    var3 = var6;
 81:
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['height'] = var2;
                    _fun0002_ip = 104; continue _fun0002;
 97:
                    var1 = _closure1_slot15;
 104:
                    return var1;
                }
            };
            var11 = {};
            var11['expandedHeight'] = var6;
            var11['truncatedHeight'] = var7;
            var12 = _closure1_slot15;
            var11['EMPTY_STYLE'] = var12;
            var12 = 12;
            var14 = var19[var12];
            var14 = var13.bind(var4)(var14);
            var14 = var14.withSpring;
            var11['withSpring'] = var14;
            var11['expanded'] = var29;
            var14 = _closure1_slot9;
            var11['SPRING_CHANNEL_DETAILS'] = var14;
            var5['__closure'] = var11;
            var11 = 11932535786068.0;
            var5['__workletHash'] = var11;
            var11 = _closure1_slot17;
            var5['__initData'] = var11;
            var15 = var8.bind(var9)(var5);
            var5 = var19[var10];
            var9 = var13.bind(var4)(var5);
            var8 = var9.useAnimatedStyle;
            var5 = function _() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 43; continue _fun0003 }
 22:
                    var1 = {};
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['height'] = var2;
                    _fun0003_ip = 50; continue _fun0003;
 43:
                    var1 = _closure1_slot15;
 50:
                    return var1;
                }
            };
            var11 = {};
            var11['expandedHeight'] = var6;
            var14 = _closure1_slot15;
            var11['EMPTY_STYLE'] = var14;
            var5['__closure'] = var11;
            var11 = 13643982891313.0;
            var5['__workletHash'] = var11;
            var11 = _closure1_slot18;
            var5['__initData'] = var11;
            var14 = var8.bind(var9)(var5);
            var5 = var19[var10];
            var9 = var13.bind(var4)(var5);
            var8 = var9.useAnimatedStyle;
            var5 = function N() {
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 12;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.withSpring;
                var6 = _closure2_slot8;
                var3 = var6.get;
                var3 = var3.bind(var6)();
                var2 = _closure1_slot9;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            };
            var11 = {};
            var12 = var19[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.withSpring;
            var11['withSpring'] = var12;
            var11['gradient'] = var3;
            var12 = _closure1_slot9;
            var11['SPRING_CHANNEL_DETAILS'] = var12;
            var5['__closure'] = var11;
            var11 = 12423301233362.0;
            var5['__workletHash'] = var11;
            var11 = _closure1_slot19;
            var5['__initData'] = var11;
            var20 = var8.bind(var9)(var5);
            var11 = _closure1_slot4;
            var9 = var11.useCallback;
            var8 = new Array(1);
            var8[0] = var3;
            var5 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.lines;
                    var2 = var1.length;
                    var1 = _closure1_slot8;
                    var2 = var2 > var1;
                    var4 = _closure2_slot3;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var4 = _closure2_slot8;
                    var3 = var4.set;
                    var5 = _closure1_slot16;
                    if(var2) { _fun0004_ip = 68; continue _fun0004 }
 60:
                    var2 = var5.HIDDEN;
                    _fun0004_ip = 74; continue _fun0004;
 68:
                    var2 = var5.VISIBLE;
 74:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var23 = var9.bind(var11)(var5, var8);
            var11 = _closure1_slot4;
            var9 = var11.useCallback;
            var8 = new Array(1);
            var8[0] = var6;
            var5 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var9.bind(var11)(var5, var8);
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var5 = new Array(3);
            var5[0] = var30;
            var5[1] = var29;
            var5[2] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0005_ip = 14; continue _fun0005 }
 10:
                    var1 = undefined;
                    return var1;
 14:
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = _closure2_slot4;
                            var2 = !var1;
                            var4 = _closure2_slot5;
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var4 = _closure2_slot8;
                            var3 = var4.set;
                            var5 = _closure1_slot16;
                            if(var2) { _fun0006_ip = 48; continue _fun0006 }
 40:
                            var2 = var5.VISIBLE;
                            _fun0006_ip = 54; continue _fun0006;
 48:
                            var2 = var5.HIDDEN;
 54:
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var21 = var8.bind(var9)(var3, var5);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var5 = new Array(1);
            var5[0] = var7;
            var3 = function(arg1) {
                var3 = _closure2_slot6;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var31 = var8.bind(var9)(var3, var5);
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var3 = var2.id;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var2.topic;
            var5[1] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.parseTopic;
                var1 = _closure2_slot0;
                var6 = var1.topic;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var7 = var3.bind(var2)(var6);
                var6 = var7.replace;
                var3 = /(\r\n|\n|\r)/gm;
                var2 = ' ';
                var3 = var6.bind(var7)(var3, var2);
                var2 = {};
                var1 = var1.id;
                var2['channelId'] = var1;
                var1 = true;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var27 = var8.bind(var9)(var3, var5);
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var3 = var2.id;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var2.topic;
            var5[1] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
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
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var28 = var8.bind(var9)(var3, var5);
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var8 = var2.id;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                var4 = _closure2_slot6;
                var3 = var4.set;
                var1 = undefined;
                var3 = var3.bind(var4)(var1);
                var4 = _closure2_slot7;
                var3 = var4.set;
                var3 = var3.bind(var4)(var1);
                var3 = _closure2_slot5;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var1 = null;
            if(!(var1 != var21)) { _fun0001_ip = 881; continue _fun0001 }
 853:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var19 = var1.PressableOpacity;
            _fun0001_ip = 885; continue _fun0001;
 881:
            var19 = _closure1_slot5;
 885:
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
            var33 = 15;
            var8 = var9[var33];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {};
            var24 = 'heading-sm/normal';
            var8['variant'] = var24;
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
            if(var29) { _fun0001_ip = 1126; continue _fun0001 }
 1120:
            var24 = var13;
            if(var30) { _fun0001_ip = 1128; continue _fun0001 }
 1126:
            var24 = undefined;
 1128:
            var21['pointerEvents'] = var24;
            var26 = _closure1_slot11;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var33];
            var24 = var25.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {'color': 'interactive-normal', 'variant': 'heading-sm/normal'};
            var24['onLayout'] = var31;
            var31 = undefined;
            if(var29) { _fun0001_ip = 1187; continue _fun0001 }
 1183:
            var31 = _closure1_slot8;
 1187:
            var24['lineClamp'] = var31;
            if(var29) { _fun0001_ip = 1204; continue _fun0001 }
 1195:
            if(!var30) { _fun0001_ip = 1204; continue _fun0001 }
 1198:
            var31 = _closure1_slot15;
            _fun0001_ip = 1210; continue _fun0001;
 1204:
            var31 = var18.expanded;
 1210:
            var30 = new Array(2);
            var30[0] = var31;
            var31 = {};
            var31['textAlign'] = var32;
            var30[1] = var31;
            var24['style'] = var30;
            if(!var29) { _fun0001_ip = 1238; continue _fun0001 }
 1235:
            var27 = var28;
 1238:
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
            var13 = 16;
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
    var _closure1_slot20 = var1;
    var1 = function PrivateChannelDetailsTopic(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var3 = var2.channel;
            var _closure2_slot0 = var3;
            var8 = var2.textAlign;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getUser;
                    var5 = _closure2_slot0;
                    var1 = var5.getRecipientId;
                    var1 = var1.bind(var5)();
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 != var4)) { _fun0008_ip = 52; continue _fun0008 }
 41:
                    var3 = var4.isProvisional;
                    var1 = null;
                    if(var3) { _fun0008_ip = 85; continue _fun0008 }
 52:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getUserTag;
                    var1 = var2.bind(var3)(var4);
 85:
                    return var1;
                }
            };
            var6 = var4.bind(var6)(var3, var1);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0007_ip = 146; continue _fun0007 }
 83:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'heading-sm/normal', 'color': 'interactive-normal'};
            var7 = {};
            var7['textAlign'] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 146:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function GroupDMChannelDetailsTopic(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var3 = var2.channel;
            var _closure2_slot0 = var3;
            var8 = var2.textAlign;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
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
                var2 = 19;
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
            if(var3) { _fun0009_ip = 146; continue _fun0009 }
 83:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'heading-sm/normal', 'color': 'interactive-normal'};
            var7 = {};
            var7['textAlign'] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 146:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var7 = var6[var9];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.View;
    var _closure1_slot5 = var11;
    var4 = var4.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CHANNEL_TOPIC_LINE_CLAMP;
    var _closure1_slot8 = var8;
    var4 = var4.SPRING_CHANNEL_DETAILS;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var8 = var11.createStyles;
    var4 = {};
    var12 = {'flex': 1, 'flexGrow': 1, 'position': 'absolute', 'opacity': 0};
    var4['hidden'] = var12;
    var12 = {};
    var13 = 'hidden';
    var12['overflow'] = var13;
    var4['topic'] = var12;
    var12 = {'flex': 1, 'flexGrow': 1};
    var4['gradient'] = var12;
    var12 = {};
    var13 = 'center';
    var12['textAlign'] = var13;
    var4['expanded'] = var12;
    var4 = var8.bind(var11)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var _closure1_slot15 = var4;
    var4 = {};
    var4['HIDDEN'] = var10;
    var8 = 'HIDDEN';
    var4[var10] = var8;
    var4['VISIBLE'] = var9;
    var8 = 'VISIBLE';
    var4[var9] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function ChannelDetailsTopic(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var8 = var1.channel;
            var7 = var1.containerStyle;
            var4 = var1.textAlign;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0010_ip = 29; continue _fun0010 }
 25:
            var4 = 'center';
 29:
            var1 = var8.isDM;
            var1 = var1.bind(var8)();
            if(var1) { _fun0010_ip = 157; continue _fun0010 }
 42:
            var1 = var8.isGroupDM;
            var1 = var1.bind(var8)();
            if(var1) { _fun0010_ip = 128; continue _fun0010 }
 55:
            var2 = var8.topic;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0010_ip = 94; continue _fun0010 }
 70:
            var3 = var8.topic;
            var2 = var3.trim;
            var3 = var2.bind(var3)();
            var2 = '';
            var1 = var2 !== var3;
 94:
            var6 = undefined;
            if(!var1) { _fun0010_ip = 184; continue _fun0010 }
 99:
            var3 = _closure1_slot11;
            var2 = _closure1_slot20;
            var1 = {};
            var1['channel'] = var8;
            var1['textAlign'] = var4;
            var6 = var3.bind(var5)(var2, var1);
            _fun0010_ip = 184; continue _fun0010;
 128:
            var3 = _closure1_slot11;
            var2 = _closure1_slot22;
            var1 = {};
            var1['channel'] = var8;
            var1['textAlign'] = var4;
            var6 = var3.bind(var5)(var2, var1);
            _fun0010_ip = 184; continue _fun0010;
 157:
            var3 = _closure1_slot11;
            var2 = _closure1_slot21;
            var1 = {};
            var1['channel'] = var8;
            var1['textAlign'] = var4;
            var6 = var3.bind(var5)(var2, var1);
 184:
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0010_ip = 220; continue _fun0010 }
 193:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 220:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();