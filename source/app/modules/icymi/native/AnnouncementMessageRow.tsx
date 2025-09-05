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
    var7 = var4.ICYMI_MARGIN;
    var _closure1_slot10 = var7;
    var7 = var4.ITEM_PADDING;
    var _closure1_slot11 = var7;
    var4 = var4.MESSAGE_CONTENT_INSET;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var2 = {};
            var4 = 1;
            var2['flex'] = var4;
            var4 = 0;
            if(var3) { _fun0001_ip = 26; continue _fun0001 }
 19:
            var4 = _closure1_slot12;
 26:
            var2['paddingLeft'] = var4;
            var1['pressable'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8, 'paddingVertical': 12, 'paddingHorizontal': null, 'borderBottomWidth': 1};
            var5 = _closure1_slot11;
            var2['paddingHorizontal'] = var5;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 10;
            var10 = var8[var7];
            var6 = undefined;
            var10 = var9.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.BORDER_SUBTLE;
            var2['borderBottomColor'] = var10;
            var1['mentionHeader'] = var2;
            var2 = {};
            var10 = _closure1_slot10;
            var2['marginVertical'] = var10;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['gap'] = var8;
            var2['paddingHorizontal'] = var5;
            if(var3) { _fun0001_ip = 157; continue _fun0001 }
 151:
            var3 = _closure1_slot12;
            _fun0001_ip = 185; continue _fun0001;
 157:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_32;
 185:
            var2['marginLeft'] = var3;
            var1['footer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var28 = var1.unread;
            var9 = var1.message;
            var _closure2_slot0 = var9;
            var23 = var1.guild;
            var _closure2_slot1 = var23;
            var10 = var1.channel;
            var _closure2_slot2 = var10;
            var18 = var1.author;
            var25 = var1.visible;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var3 = var7.useICYMIUXRefreshExperiment;
            var1 = 'ICYMIMessageRow';
            var1 = var3.bind(var7)(var1);
            var3 = 12;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot8;
                var3 = var4.isChannelMuted;
                var1 = _closure2_slot2;
                var2 = var1.getGuildId;
                var2 = var2.bind(var1)();
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var27 = var6.bind(var7)(var4, var3);
            var3 = _closure1_slot15;
            var19 = var3.bind(var5)(var1);
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var3 = null;
            var4 = var3 == var23;
            var3 = undefined;
            if(var4) { _fun0002_ip = 172; continue _fun0002 }
 167:
            var3 = var23.id;
 172:
            var4 = new Array(2);
            var4[0] = var3;
            var3 = var9.author;
            var3 = var3.id;
            var4[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var4 = _closure2_slot1;
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
                    var3 = _closure2_slot1;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 84; continue _fun0003 }
 75:
                    var6 = _closure2_slot1;
                    var3 = var6.id;
 84:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
 105:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            var14 = var9.mentioned;
            if(!var14) { _fun0002_ip = 220; continue _fun0002 }
 217:
            var14 = var28;
 220:
            var6 = _closure1_slot3;
            var7 = var6.useCallback;
            var3 = var10.id;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = var9.id;
            var4[1] = var3;
            var3 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var2 = var5[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var9 = var2.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var3 = _closure2_slot0;
                var7 = var3.id;
                var6 = 'announcement';
                var3 = 'long_press_channel';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = 15;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openChannelLongPressActionSheet;
                var2 = _closure2_slot2;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var7.bind(var6)(var3, var4);
            var8 = var6.useCallback;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var9;
            var3 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 14;
                var5 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var5);
                var11 = var5.ICYMIAnalytics;
                var10 = var11.trackItemInteraction;
                var6 = _closure2_slot0;
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
                var7 = _closure2_slot2;
                var2['channel'] = var7;
                var2['message'] = var6;
                var2['user'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var21 = var8.bind(var6)(var3, var4);
            var8 = var6.useCallback;
            var4 = new Array(3);
            var4[0] = var9;
            var3 = var10.id;
            var4[1] = var3;
            var3 = var23.id;
            var4[2] = var3;
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
                    var5 = _closure2_slot0;
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
                    var2 = _closure2_slot0;
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
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 203:
                    return var1;
                }
            };
            var8 = var8.bind(var6)(var3, var4);
            var11 = var6.useCallback;
            var4 = new Array(2);
            var4[0] = var9;
            var3 = var23.id;
            var4[1] = var3;
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
                    var5 = _closure2_slot0;
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
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 128:
                    return var1;
                }
            };
            var22 = var11.bind(var6)(var3, var4);
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 19;
            var3 = var11[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useGravityMessage;
            var11 = var3.bind(var4)(var9);
            _closure2_slot3 = var11;
            var4 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var3 = var3.id;
                var1['id'] = var3;
                var3 = 'message';
                var1['type'] = var3;
                var3 = _closure2_slot3;
                var2 = new Array(1);
                var2[0] = var3;
                var1['messages'] = var2;
                var2 = 'icymi-card';
                var1['renderLocation'] = var2;
                return var1;
            };
            var6 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot13;
            if(var1) { _fun0002_ip = 906; continue _fun0002 }
 444:
            var2 = _closure1_slot4;
            var1 = {};
            var12 = _closure1_slot14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 18;
            var3 = var17[var15];
            var3 = var16.bind(var5)(var3);
            var11 = var3.AnnouncementContentPost;
            var3 = {};
            var3['channel'] = var10;
            var3['guild'] = var23;
            var3['message'] = var9;
            var3['author'] = var18;
            var20 = _closure1_slot1;
            var18 = 22;
            var18 = var17[var18];
            var26 = var20.bind(var5)(var18);
            var24 = var26.extractTimestamp;
            var18 = var9.id;
            var18 = var24.bind(var26)(var18);
            var3['timestamp'] = var18;
            var3['mentioned'] = var14;
            var14 = var9.id;
            var3['id'] = var14;
            var3['onHeaderPress'] = var8;
            var3['onHeaderLongPress'] = var7;
            var14 = 23;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var18 = var14.PressableHighlight;
            var14 = {};
            var14['onPress'] = var8;
            var14['onLongPress'] = var21;
            var21 = 'button';
            var14['accessibilityRole'] = var21;
            var21 = 24;
            var24 = var17[var21];
            var26 = var20.bind(var5)(var24);
            var24 = {};
            var24['channel'] = var10;
            var24['unread'] = var28;
            var24 = var26.bind(var5)(var24);
            var14['accessibilityLabel'] = var24;
            var21 = var17[var21];
            var26 = var16.bind(var5)(var21);
            var24 = var26.getChannelA11yHint;
            var21 = {};
            var21['channel'] = var10;
            var21['muted'] = var27;
            var21 = var24.bind(var26)(var21);
            var14['accessibilityHint'] = var21;
            var21 = 130;
            var14['unstable_pressDelay'] = var21;
            var21 = var19.pressable;
            var14['style'] = var21;
            var21 = 25;
            var21 = var17[var21];
            var21 = var16.bind(var5)(var21);
            var24 = var21.MessageRowContent;
            var21 = {};
            var21['message'] = var9;
            var21['channel'] = var10;
            var21['guild'] = var23;
            var26 = 5;
            var21['lineClamp'] = var26;
            var21['visible'] = var25;
            var21 = var4.bind(var5)(var24, var21);
            var14['children'] = var21;
            var18 = var4.bind(var5)(var18, var14);
            var14 = new Array(3);
            var14[0] = var18;
            var18 = {};
            var19 = var19.footer;
            var18['style'] = var19;
            var19 = 26;
            var19 = var17[var19];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var19['message'] = var9;
            var19['channel'] = var10;
            var20 = var4.bind(var5)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var17[var15];
            var20 = var16.bind(var5)(var20);
            var21 = var20.ThreadAsComments;
            var20 = {};
            var20['guild'] = var23;
            var20['parentMessage'] = var9;
            var20['onPress'] = var22;
            var20 = var4.bind(var5)(var21, var20);
            var19[1] = var20;
            var18['children'] = var19;
            var18 = var12.bind(var5)(var2, var18);
            var14[1] = var18;
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Separator;
            var15 = {};
            var15 = var4.bind(var5)(var16, var15);
            var14[2] = var15;
            var3['children'] = var14;
            var3 = var12.bind(var5)(var11, var3);
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0002_ip = 1066; continue _fun0002;
 906:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 20;
            var2 = var12[var2];
            var3 = var11.bind(var5)(var2);
            var2 = {};
            var16 = _closure1_slot0;
            var13 = 21;
            var14 = var12[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var12[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.8P08Gx;
            var13 = var14.bind(var15)(var13);
            var2['actionLabel'] = var13;
            var13 = var9.id;
            var2['id'] = var13;
            var13 = 'announcement';
            var2['type'] = var13;
            var10 = var10.id;
            var2['channelId'] = var10;
            var10 = 22;
            var10 = var12[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.extractTimestamp;
            var9 = var9.id;
            var9 = var10.bind(var11)(var9);
            var2['timestamp'] = var9;
            var2['onHeaderPress'] = var8;
            var2['onHeaderLongPress'] = var7;
            var2['conversationProps'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1066:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/AnnouncementMessageRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AnnouncementMessageRowWrapper(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 39; continue _fun0007 }
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
            if(var3) { _fun0006_ip = 168; continue _fun0006 }
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.isBlockedOrIgnored;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0008_ip = 40; continue _fun0008 }
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
            if(var12) { _fun0006_ip = 303; continue _fun0006 }
 228:
            var12 = var4 == var8;
            var1 = null;
            if(var12) { _fun0006_ip = 303; continue _fun0006 }
 237:
            var12 = var4 == var10;
            var1 = null;
            if(var12) { _fun0006_ip = 303; continue _fun0006 }
 246:
            var12 = var4 == var7;
            var1 = null;
            if(var12) { _fun0006_ip = 303; continue _fun0006 }
 255:
            var1 = null;
            if(var3) { _fun0006_ip = 303; continue _fun0006 }
 260:
            var4 = _closure1_slot13;
            var3 = _closure1_slot16;
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