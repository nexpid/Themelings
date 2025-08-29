// app/modules/icymi/native/ICYMIForumThreadRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var2 = function ICYMIForumThreadRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.channel;
            var _closure2_slot0 = var11;
            var10 = var2.message;
            var _closure2_slot1 = var10;
            var29 = var2.visible;
            var6 = undefined;
            var _closure2_slot4 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var5 = var4.bind(var6)(var2);
            var3 = var5.useICYMIUXRefreshExperiment;
            var2 = 'ICYMIForumThreadRow';
            var2 = var3.bind(var5)(var2);
            var3 = _closure1_slot11;
            var22 = var3.bind(var6)(var2);
            var3 = 9;
            var5 = var7[var3];
            var12 = var4.bind(var6)(var5);
            var9 = var12.useStateFromStores;
            var5 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 44; continue _fun0002 }
 30:
                    var5 = _closure2_slot0;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
 44:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var25 = var9.bind(var12)(var8, var5);
            var _closure2_slot2 = var25;
            var5 = var10.author;
            var _closure2_slot3 = var5;
            var3 = var7[var3];
            var8 = var4.bind(var6)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var7.bind(var8)(var4, var3);
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var3 = var5.id;
            var7 = new Array(2);
            var7[0] = var3;
            var4 = null;
            var13 = var4 == var25;
            var3 = undefined;
            if(var13) { _fun0001_ip = 215; continue _fun0001 }
 210:
            var3 = var25.id;
 215:
            var7[1] = var3;
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
                    if(!(var6 != var3)) { _fun0003_ip = 107; continue _fun0003 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
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
                    var2 = _closure2_slot3;
                    var6 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 107:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var7);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var25;
            var3 = var10.id;
            var7[2] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var8 = var2.ICYMIAnalytics;
                    var7 = var8.trackItemInteraction;
                    var4 = _closure2_slot1;
                    var6 = var4.id;
                    var5 = 'forum_thread';
                    var4 = 'press_forum_thread';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var4 = _closure2_slot0;
                    var6 = null;
                    var4 = var6 != var4;
                    if(!var4) { _fun0004_ip = 89; continue _fun0004 }
 81:
                    var5 = _closure2_slot2;
                    var4 = var6 != var5;
 89:
                    if(!var4) { _fun0004_ip = 152; continue _fun0004 }
 92:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.navigateToPost;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 152:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var3, var7);
            var13 = _closure1_slot3;
            var8 = var13.useCallback;
            var3 = var11.parent_id;
            var7 = new Array(2);
            var7[0] = var3;
            var3 = var10.id;
            var7[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.parent_id;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 117; continue _fun0005 }
 19:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var9 = var2.ICYMIAnalytics;
                    var8 = var9.trackItemInteraction;
                    var2 = _closure2_slot1;
                    var7 = var2.id;
                    var6 = 'forum_thread';
                    var2 = 'long_press_forum_thread';
                    var2 = var8.bind(var9)(var7, var6, var2);
                    var2 = 13;
                    var2 = var5[var2];
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var1 = var2.bind(var3)(var1);
 117:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var8.bind(var13)(var3, var7);
            var15 = _closure1_slot3;
            var13 = var15.useCallback;
            var7 = new Array(3);
            var7[0] = var10;
            var3 = var11.id;
            var7[1] = var3;
            var16 = var4 == var25;
            var3 = undefined;
            if(var16) { _fun0001_ip = 360; continue _fun0001 }
 355:
            var3 = var25.id;
 360:
            var7[2] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var9 = var3.ICYMIAnalytics;
                    var8 = var9.trackItemInteraction;
                    var3 = _closure2_slot1;
                    var7 = var3.id;
                    var5 = 'forum_thread';
                    var4 = 'press_comments';
                    var4 = var8.bind(var9)(var7, var5, var4);
                    var7 = null;
                    if(!(var7 != var3)) { _fun0006_ip = 138; continue _fun0006 }
 74:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.navigateToPost;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = _closure2_slot2;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 131; continue _fun0006 }
 122:
                    var6 = _closure2_slot2;
                    var2 = var6.id;
 131:
                    var2 = var4.bind(var5)(var3, var2, var1);
 138:
                    return var1;
                }
            };
            var24 = var13.bind(var15)(var3, var7);
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 14;
            var3 = var13[var3];
            var7 = var7.bind(var6)(var3);
            var3 = var7.useGravityMessage;
            var15 = var3.bind(var7)(var10);
            _closure2_slot4 = var15;
            var13 = _closure1_slot3;
            var7 = var13.useMemo;
            var3 = new Array(3);
            var3[0] = var15;
            var15 = var11.name;
            var3[1] = var15;
            var15 = var11.guild_id;
            var3[2] = var15;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot4;
                var3 = var3.id;
                var1['id'] = var3;
                var3 = 'forum_thread';
                var1['type'] = var3;
                var4 = _closure2_slot4;
                var3 = new Array(1);
                var3[0] = var4;
                var1['messages'] = var3;
                var2 = _closure2_slot0;
                var3 = var2.name;
                var1['title'] = var3;
                var3 = 'icymi-card';
                var1['renderLocation'] = var3;
                var2 = var2.guild_id;
                var1['guildId'] = var2;
                return var1;
            };
            var7 = var7.bind(var13)(var1, var3);
            var3 = var4 == var11;
            var1 = null;
            if(var3) { _fun0001_ip = 1280; continue _fun0001 }
 472:
            var3 = var11.guild_id;
            var3 = var4 == var3;
            var1 = null;
            if(var3) { _fun0001_ip = 1280; continue _fun0001 }
 489:
            var3 = var4 == var25;
            var1 = null;
            if(var3) { _fun0001_ip = 1280; continue _fun0001 }
 501:
            var3 = var4 == var5;
            var1 = null;
            if(var3) { _fun0001_ip = 1280; continue _fun0001 }
 513:
            var3 = var4 == var12;
            var1 = null;
            if(var3) { _fun0001_ip = 1280; continue _fun0001 }
 525:
            if(var2) { _fun0001_ip = 1110; continue _fun0001 }
 531:
            var4 = _closure1_slot10;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = 12;
            var2 = var20[var21];
            var2 = var18.bind(var6)(var2);
            var3 = var2.MessageContentPost;
            var2 = {};
            var2['channel'] = var12;
            var2['guild'] = var25;
            var2['author'] = var5;
            var5 = var10.id;
            var2['id'] = var5;
            var27 = _closure1_slot1;
            var5 = 17;
            var5 = var20[var5];
            var13 = var27.bind(var6)(var5);
            var12 = var13.extractTimestamp;
            var5 = var10.id;
            var5 = var12.bind(var13)(var5);
            var2['timestamp'] = var5;
            var5 = 'forum_thread';
            var2['type'] = var5;
            var2['onHeaderPress'] = var9;
            var2['onHeaderLongPress'] = var8;
            var2['message'] = var10;
            var13 = _closure1_slot9;
            var5 = 18;
            var5 = var20[var5];
            var5 = var18.bind(var6)(var5);
            var12 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var9;
            var5['onLongPress'] = var8;
            var15 = 'button';
            var5['accessibilityRole'] = var15;
            var15 = 130;
            var5['unstable_pressDelay'] = var15;
            var15 = var22.pressable;
            var5['style'] = var15;
            var17 = _closure1_slot10;
            var16 = _closure1_slot4;
            var15 = {};
            var19 = var22.container;
            var15['style'] = var19;
            var28 = _closure1_slot9;
            var23 = 19;
            var19 = var20[var23];
            var19 = var18.bind(var6)(var19);
            var26 = var19.Text;
            var19 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var30 = var11.name;
            var19['children'] = var30;
            var26 = var28.bind(var6)(var26, var19);
            var19 = new Array(3);
            var19[0] = var26;
            var30 = _closure1_slot9;
            var23 = var20[var23];
            var23 = var18.bind(var6)(var23);
            var28 = var23.Text;
            var23 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'style': null, 'lineClamp': 5};
            var26 = var22.subtitle;
            var23['style'] = var26;
            var26 = 20;
            var26 = var20[var26];
            var33 = var27.bind(var6)(var26);
            var32 = var33.parseInlineReply;
            var31 = var10.content;
            var26 = true;
            var31 = var32.bind(var33)(var31, var26);
            var23['children'] = var31;
            var23 = var30.bind(var6)(var28, var23);
            var19[1] = var23;
            var28 = _closure1_slot9;
            var23 = 21;
            var23 = var20[var23];
            var27 = var27.bind(var6)(var23);
            var23 = {};
            var23['message'] = var10;
            var23['visible'] = var29;
            var23 = var28.bind(var6)(var27, var23);
            var19[2] = var23;
            var15['children'] = var19;
            var15 = var17.bind(var6)(var16, var15);
            var5['children'] = var15;
            var12 = var13.bind(var6)(var12, var5);
            var5 = new Array(2);
            var5[0] = var12;
            var15 = _closure1_slot10;
            var13 = _closure1_slot4;
            var12 = {};
            var16 = var22.footer;
            var12['style'] = var16;
            var19 = _closure1_slot9;
            var17 = _closure1_slot4;
            var16 = {};
            var22 = var22.threadAsComments;
            var16['style'] = var22;
            var23 = _closure1_slot9;
            var21 = var20[var21];
            var21 = var18.bind(var6)(var21);
            var22 = var21.ThreadAsComments;
            var21 = {};
            var21['inForum'] = var26;
            var21['guild'] = var25;
            var21['parentMessage'] = var10;
            var21['onPress'] = var24;
            var21 = var23.bind(var6)(var22, var21);
            var16['children'] = var21;
            var17 = var19.bind(var6)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot9;
            var17 = 22;
            var17 = var20[var17];
            var17 = var18.bind(var6)(var17);
            var18 = var17.MessageReplyRow;
            var17 = {};
            var17['channel'] = var11;
            var17['message'] = var10;
            var17 = var19.bind(var6)(var18, var17);
            var16[1] = var17;
            var12['children'] = var16;
            var12 = var15.bind(var6)(var13, var12);
            var5[1] = var12;
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 1277; continue _fun0001;
 1110:
            var5 = _closure1_slot9;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 15;
            var3 = var13[var3];
            var4 = var12.bind(var6)(var3);
            var3 = {};
            var17 = _closure1_slot0;
            var14 = 16;
            var15 = var13[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.bYNuV1;
            var14 = var15.bind(var16)(var14);
            var3['actionLabel'] = var14;
            var14 = var10.id;
            var3['id'] = var14;
            var14 = 'forum_thread';
            var3['type'] = var14;
            var11 = var11.parent_id;
            var3['channelId'] = var11;
            var11 = 17;
            var11 = var13[var11];
            var12 = var12.bind(var6)(var11);
            var11 = var12.extractTimestamp;
            var10 = var10.id;
            var10 = var11.bind(var12)(var10);
            var3['timestamp'] = var10;
            var3['onHeaderPress'] = var9;
            var3['onHeaderLongPress'] = var8;
            var3['conversationProps'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1277:
            var1 = var2;
 1280:
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var4);
    var1 = 0;
    var6 = var8[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var6 = var8[var4];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ICYMI_MARGIN;
    var _closure1_slot7 = var9;
    var6 = var6.MESSAGE_CONTENT_INSET;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot9 = var9;
    var6 = var6.jsxs;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var2 = {};
            var3 = 1;
            var2['flex'] = var3;
            var3 = 0;
            if(var4) { _fun0007_ip = 26; continue _fun0007 }
 19:
            var3 = _closure1_slot8;
 26:
            var2['paddingLeft'] = var3;
            var1['pressable'] = var2;
            var2 = {};
            var5 = _closure1_slot7;
            var2['marginHorizontal'] = var5;
            var1['container'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 7;
            var6 = var6[var8];
            var7 = undefined;
            var6 = var9.bind(var7)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_8;
            var2['marginTop'] = var6;
            var2['marginBottom'] = var5;
            var1['subtitle'] = var2;
            var2 = {};
            var5 = undefined;
            if(!var4) { _fun0007_ip = 137; continue _fun0007 }
 109:
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.colors;
            var5 = var6.CARD_SECONDARY_BG;
 137:
            var2['backgroundColor'] = var5;
            var5 = 'flex-end';
            var2['justifyContent'] = var5;
            if(var4) { _fun0007_ip = 160; continue _fun0007 }
 154:
            var4 = _closure1_slot8;
            _fun0007_ip = 188; continue _fun0007;
 160:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.spacing;
            var4 = var5.PX_32;
 188:
            var2['paddingLeft'] = var4;
            var3 = _closure1_slot7;
            var2['marginTop'] = var3;
            var2['gap'] = var3;
            var1['footer'] = var2;
            var2 = {};
            var2['marginHorizontal'] = var3;
            var1['threadAsComments'] = var2;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot11 = var6;
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/icymi/native/ICYMIForumThreadRow.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ForumThreadRowWrapper(arg1) {
        var1 = arg1;
        var6 = var1.message;
        var5 = var1.threadChannel;
        var1 = var1.visible;
        var4 = _closure1_slot9;
        var3 = _closure1_slot12;
        var2 = {};
        var2['message'] = var6;
        var2['channel'] = var5;
        var2['visible'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['MAX_AVATARS_IN_PILE'] = var4;
    var3['ICYMIForumThreadRow'] = var2;
    return var1;
})();