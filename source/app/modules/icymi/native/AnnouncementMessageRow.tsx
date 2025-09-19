// app/modules/icymi/native/AnnouncementMessageRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ITEM_PADDING;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.Fragment;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createICYMIStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = arg2;
            var1 = {};
            var2 = {};
            var4 = 1;
            var2['flex'] = var4;
            var4 = 0;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
 22:
            var4 = var3.inset;
 28:
            var2['paddingLeft'] = var4;
            var1['pressable'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8, 'paddingVertical': 12, 'paddingHorizontal': null, 'borderBottomWidth': 1};
            var8 = _closure1_slot10;
            var2['paddingHorizontal'] = var8;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 10;
            var11 = var9[var7];
            var6 = undefined;
            var11 = var10.bind(var6)(var11);
            var11 = var11.colors;
            var11 = var11.BORDER_SUBTLE;
            var2['borderBottomColor'] = var11;
            var1['mentionHeader'] = var2;
            var2 = {};
            var11 = var3.margin;
            var2['marginVertical'] = var11;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_8;
            var2['gap'] = var9;
            var2['paddingHorizontal'] = var8;
            if(var5) { _fun0001_ip = 163; continue _fun0001 }
 155:
            var3 = var3.inset;
            _fun0001_ip = 191; continue _fun0001;
 163:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_32;
 191:
            var2['marginLeft'] = var3;
            var1['footer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var15 = var2.unread;
            var _closure2_slot0 = var15;
            var10 = var2.message;
            var _closure2_slot1 = var10;
            var21 = var2.guild;
            var _closure2_slot2 = var21;
            var11 = var2.channel;
            var _closure2_slot3 = var11;
            var20 = var2.author;
            var13 = var2.visible;
            var _closure2_slot4 = var13;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var6 = var5.bind(var4)(var2);
            var3 = var6.useDestinationICYMIExperiment;
            var2 = {};
            var8 = 'AnnouncementMessageRow';
            var2['location'] = var8;
            var2 = var3.bind(var6)(var2);
            var6 = var2.isNewCardDesign;
            var2 = var2.isNewHeaderAndInteractions;
            var _closure2_slot5 = var2;
            var3 = 12;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var4 = _closure1_slot8;
                var3 = var4.isChannelMuted;
                var1 = _closure2_slot3;
                var2 = var1.getGuildId;
                var2 = var2.bind(var1)();
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var7.bind(var8)(var5, var3);
            var _closure2_slot6 = var18;
            var3 = _closure1_slot14;
            var17 = var3.bind(var4)(var6);
            var _closure2_slot7 = var17;
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var3 = null;
            var5 = var3 == var21;
            var3 = undefined;
            if(var5) { _fun0002_ip = 222; continue _fun0002 }
 217:
            var3 = var21.id;
 222:
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var10.author;
            var3 = var3.id;
            var5[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
 29:
                    if(!(var6 != var3)) { _fun0003_ip = 105; continue _fun0003 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 13;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 84; continue _fun0003 }
 75:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
 84:
                    var2 = _closure2_slot1;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
 105:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var5);
            var16 = var10.mentioned;
            if(!var16) { _fun0002_ip = 270; continue _fun0002 }
 267:
            var16 = var15;
 270:
            var12 = _closure1_slot3;
            var7 = var12.useCallback;
            var3 = var11.id;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = var10.id;
            var5[1] = var3;
            var3 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var2 = var5[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var9 = var2.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var3 = _closure2_slot1;
                var7 = var3.id;
                var6 = 'announcement';
                var3 = 'long_press_channel';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = 15;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openChannelLongPressActionSheet;
                var2 = _closure2_slot3;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var7.bind(var12)(var3, var5);
            var7 = var12.useCallback;
            var5 = new Array(2);
            var5[0] = var11;
            var5[1] = var10;
            var3 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 14;
                var5 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var5);
                var11 = var5.ICYMIAnalytics;
                var10 = var11.trackItemInteraction;
                var6 = _closure2_slot1;
                var9 = var6.id;
                var8 = 'announcement';
                var5 = 'long_press_message';
                var5 = var10.bind(var11)(var9, var8, var5);
                var8 = _closure1_slot9;
                var5 = var8.getUser;
                var2 = var6.author;
                var2 = var2.id;
                var5 = var5.bind(var8)(var2);
                var2 = 16;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showLongPressMessageActionSheet;
                var2 = {};
                var7 = _closure2_slot3;
                var2['channel'] = var7;
                var2['message'] = var6;
                var2['user'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var22 = var7.bind(var12)(var3, var5);
            _closure2_slot8 = var22;
            var7 = var12.useCallback;
            var5 = new Array(3);
            var5[0] = var10;
            var3 = var11.id;
            var5[1] = var3;
            var3 = var21.id;
            var5[2] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var9 = var2.ICYMIAnalytics;
                    var8 = var9.trackItemInteraction;
                    var5 = _closure2_slot1;
                    var7 = var5.id;
                    var6 = 'announcement';
                    var2 = 'press_message';
                    var2 = var8.bind(var9)(var7, var6, var2);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0004_ip = 203; continue _fun0004 }
 75:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var8 = var5.bind(var1)(var2);
                    var7 = var8.ackGravityItems;
                    var9 = {};
                    var2 = _closure2_slot1;
                    var5 = var2.id;
                    var9['id'] = var5;
                    var5 = global;
                    var10 = var5.Date;
                    var5 = var10.now;
                    var5 = var5.bind(var10)();
                    var9['timestamp'] = var5;
                    var5 = new Array(1);
                    var5[0] = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.navigateToPost;
                    var4 = _closure2_slot3;
                    var4 = var4.id;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 203:
                    return var1;
                }
            };
            var9 = var7.bind(var12)(var3, var5);
            _closure2_slot9 = var9;
            var7 = var12.useCallback;
            var5 = new Array(2);
            var5[0] = var10;
            var3 = var21.id;
            var5[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var9 = var3.ICYMIAnalytics;
                    var8 = var9.trackItemInteraction;
                    var5 = _closure2_slot1;
                    var7 = var5.id;
                    var6 = 'announcement';
                    var4 = 'press_comments';
                    var4 = var8.bind(var9)(var7, var6, var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0005_ip = 128; continue _fun0005 }
 72:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var2 = var5[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.navigateToPost;
                    var2 = _closure2_slot1;
                    var4 = var2.id;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 128:
                    return var1;
                }
            };
            var19 = var7.bind(var12)(var3, var5);
            _closure2_slot10 = var19;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useGravityMessage;
            var3 = var3.bind(var5)(var10);
            _closure2_slot11 = var3;
            var7 = var12.useMemo;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot11;
                var3 = var3.id;
                var1['id'] = var3;
                var3 = 'message';
                var1['type'] = var3;
                var3 = _closure2_slot11;
                var2 = new Array(1);
                var2[0] = var3;
                var1['messages'] = var2;
                var2 = 'icymi-card';
                var1['renderLocation'] = var2;
                return var1;
            };
            var7 = var7.bind(var12)(var3, var5);
            var5 = var12.useMemo;
            var3 = new Array(12);
            var3[0] = var11;
            var3[1] = var21;
            var3[2] = var22;
            var3[3] = var9;
            var3[4] = var19;
            var3[5] = var10;
            var3[6] = var18;
            var18 = var17.footer;
            var3[7] = var18;
            var17 = var17.pressable;
            var3[8] = var17;
            var3[9] = var15;
            var3[10] = var13;
            var3[11] = var2;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot12;
                    var2 = {};
                    var8 = _closure1_slot11;
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 20;
                    var5 = var14[var1];
                    var1 = undefined;
                    var5 = var11.bind(var1)(var5);
                    var6 = var5.PressableHighlight;
                    var5 = {};
                    var7 = _closure2_slot9;
                    var5['onPress'] = var7;
                    var7 = _closure2_slot8;
                    var5['onLongPress'] = var7;
                    var7 = 'button';
                    var5['accessibilityRole'] = var7;
                    var12 = _closure1_slot1;
                    var7 = 21;
                    var9 = var14[var7];
                    var15 = var12.bind(var1)(var9);
                    var9 = {};
                    var12 = _closure2_slot3;
                    var9['channel'] = var12;
                    var16 = _closure2_slot0;
                    var9['unread'] = var16;
                    var9 = var15.bind(var1)(var9);
                    var5['accessibilityLabel'] = var9;
                    var7 = var14[var7];
                    var15 = var11.bind(var1)(var7);
                    var9 = var15.getChannelA11yHint;
                    var7 = {};
                    var7['channel'] = var12;
                    var16 = _closure2_slot6;
                    var7['muted'] = var16;
                    var7 = var9.bind(var15)(var7);
                    var5['accessibilityHint'] = var7;
                    var7 = 130;
                    var5['unstable_pressDelay'] = var7;
                    var9 = _closure2_slot7;
                    var7 = var9.pressable;
                    var5['style'] = var7;
                    var7 = 22;
                    var7 = var14[var7];
                    var7 = var11.bind(var1)(var7);
                    var11 = var7.MessageRowContent;
                    var7 = {};
                    var14 = _closure2_slot1;
                    var7['message'] = var14;
                    var7['channel'] = var12;
                    var12 = _closure2_slot2;
                    var7['guild'] = var12;
                    var12 = 5;
                    var7['lineClamp'] = var12;
                    var12 = _closure2_slot4;
                    var7['visible'] = var12;
                    var7 = var8.bind(var1)(var11, var7);
                    var5['children'] = var7;
                    var6 = var8.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var7 = _closure1_slot4;
                    var6 = {};
                    var9 = var9.footer;
                    var6['style'] = var9;
                    var9 = _closure2_slot5;
                    if(var9) { _fun0006_ip = 421; continue _fun0006 }
 288:
                    var12 = _closure1_slot13;
                    var11 = _closure1_slot12;
                    var9 = {};
                    var17 = _closure1_slot11;
                    var15 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var14 = 24;
                    var14 = var19[var14];
                    var15 = var15.bind(var1)(var14);
                    var14 = {};
                    var18 = _closure2_slot1;
                    var14['message'] = var18;
                    var16 = _closure2_slot3;
                    var14['channel'] = var16;
                    var15 = var17.bind(var1)(var15, var14);
                    var14 = new Array(2);
                    var14[0] = var15;
                    var16 = _closure1_slot0;
                    var15 = 18;
                    var15 = var19[var15];
                    var15 = var16.bind(var1)(var15);
                    var16 = var15.ThreadAsComments;
                    var15 = {};
                    var19 = _closure2_slot2;
                    var15['guild'] = var19;
                    var15['parentMessage'] = var18;
                    var18 = _closure2_slot10;
                    var15['onPress'] = var18;
                    var15 = var17.bind(var1)(var16, var15);
                    var14[1] = var15;
                    var9['children'] = var14;
                    var9 = var12.bind(var1)(var11, var9);
                    _fun0006_ip = 486; continue _fun0006;
 421:
                    var12 = _closure1_slot11;
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 23;
                    var10 = var14[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = {};
                    var14 = _closure2_slot1;
                    var10['message'] = var14;
                    var14 = _closure2_slot3;
                    var10['channel'] = var14;
                    var13 = _closure2_slot2;
                    var10['guild'] = var13;
                    var13 = 'base';
                    var10['backgroundVariant'] = var13;
                    var9 = var12.bind(var1)(var11, var10);
 486:
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1 = var5.bind(var12)(var1, var3);
            if(var6) { _fun0002_ip = 767; continue _fun0002 }
 584:
            if(var2) { _fun0002_ip = 767; continue _fun0002 }
 590:
            var5 = _closure1_slot11;
            var3 = _closure1_slot4;
            var2 = {};
            var15 = _closure1_slot13;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 18;
            var12 = var19[var17];
            var12 = var18.bind(var4)(var12);
            var13 = var12.AnnouncementContentPost;
            var12 = {};
            var12['channel'] = var11;
            var12['guild'] = var21;
            var12['message'] = var10;
            var12['author'] = var20;
            var21 = _closure1_slot1;
            var20 = 27;
            var20 = var19[var20];
            var22 = var21.bind(var4)(var20);
            var21 = var22.extractTimestamp;
            var20 = var10.id;
            var20 = var21.bind(var22)(var20);
            var12['timestamp'] = var20;
            var12['mentioned'] = var16;
            var16 = var10.id;
            var12['id'] = var16;
            var12['onHeaderPress'] = var9;
            var12['onHeaderLongPress'] = var8;
            var16 = new Array(2);
            var16[0] = var1;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Separator;
            var17 = {};
            var17 = var5.bind(var4)(var18, var17);
            var16[1] = var17;
            var12['children'] = var16;
            var12 = var15.bind(var4)(var13, var12);
            var2['children'] = var12;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 767:
            var5 = undefined;
            if(var6) { _fun0002_ip = 775; continue _fun0002 }
 772:
            var5 = var1;
 775:
            var3 = _closure1_slot11;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 25;
            var1 = var13[var1];
            var2 = var12.bind(var4)(var1);
            var1 = {};
            var17 = _closure1_slot0;
            var14 = 26;
            var15 = var13[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.8P08Gx;
            var14 = var15.bind(var16)(var14);
            var1['actionLabel'] = var14;
            var14 = var10.id;
            var1['id'] = var14;
            var14 = 'announcement';
            var1['type'] = var14;
            var11 = var11.id;
            var1['channelId'] = var11;
            var11 = 27;
            var11 = var13[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.extractTimestamp;
            var10 = var10.id;
            var10 = var11.bind(var12)(var10);
            var1['timestamp'] = var10;
            var1['onHeaderPress'] = var9;
            var1['onHeaderLongPress'] = var8;
            var1['conversationProps'] = var7;
            var6 = !var6;
            var1['shouldFeatureUser'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/AnnouncementMessageRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AnnouncementMessageRowWrapper(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var11 = var2.unread;
            var7 = var2.message;
            var _closure2_slot0 = var7;
            var6 = var2.visible;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = 12;
            var3 = var10[var13];
            var12 = var4.bind(var5)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var12)(var8, var3);
            var _closure2_slot1 = var9;
            var3 = var10[var13];
            var14 = var4.bind(var5)(var3);
            var12 = var14.useStateFromStores;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0008_ip = 39; continue _fun0008 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var12.bind(var14)(var8, var3);
            var3 = 19;
            var3 = var10[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useGravityMessage;
            var10 = var3.bind(var4)(var7);
            var4 = null;
            var3 = var4 == var10;
            var7 = undefined;
            if(var3) { _fun0007_ip = 168; continue _fun0007 }
 162:
            var7 = var10.author;
 168:
            _closure2_slot2 = var7;
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var13 = var12.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var14 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.isBlockedOrIgnored;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0009_ip = 40; continue _fun0009 }
 31:
                    var4 = _closure2_slot2;
                    var1 = var4.id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var3, var1);
            var12 = var4 == var9;
            var1 = null;
            if(var12) { _fun0007_ip = 303; continue _fun0007 }
 228:
            var12 = var4 == var8;
            var1 = null;
            if(var12) { _fun0007_ip = 303; continue _fun0007 }
 237:
            var12 = var4 == var10;
            var1 = null;
            if(var12) { _fun0007_ip = 303; continue _fun0007 }
 246:
            var12 = var4 == var7;
            var1 = null;
            if(var12) { _fun0007_ip = 303; continue _fun0007 }
 255:
            var1 = null;
            if(var3) { _fun0007_ip = 303; continue _fun0007 }
 260:
            var4 = _closure1_slot11;
            var3 = _closure1_slot15;
            var2 = {};
            var2['unread'] = var11;
            var2['message'] = var10;
            var2['channel'] = var9;
            var2['guild'] = var8;
            var2['author'] = var7;
            var2['visible'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 303:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();