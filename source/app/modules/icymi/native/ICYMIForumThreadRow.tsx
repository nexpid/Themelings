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
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var10 = var1.message;
            var _closure2_slot1 = var10;
            var18 = var1.visible;
            var _closure2_slot2 = var18;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var4 = var6.bind(var5)(var1);
            var3 = var4.useDestinationICYMIExperiment;
            var1 = {};
            var8 = 'ICYMIForumThreadRow';
            var1['location'] = var8;
            var1 = var3.bind(var4)(var1);
            var3 = var1.isNewCardDesign;
            var4 = var1.isNewHeaderAndInteractions;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot12;
            var20 = var1.bind(var5)(var3);
            var _closure2_slot4 = var20;
            var1 = 9;
            var8 = var7[var1];
            var13 = var6.bind(var5)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
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
            var17 = var12.bind(var13)(var9, var8);
            var _closure2_slot5 = var17;
            var13 = var10.author;
            var _closure2_slot6 = var13;
            var1 = var7[var1];
            var8 = var6.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var7.bind(var8)(var6, var1);
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var1 = var13.id;
            var7 = new Array(2);
            var7[0] = var1;
            var1 = null;
            var12 = var1 == var17;
            var6 = undefined;
            if(var12) { _fun0001_ip = 261; continue _fun0001 }
 256:
            var6 = var17.id;
 261:
            var7[1] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot5;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var4 = _closure2_slot5;
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
                    var3 = _closure2_slot5;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 84; continue _fun0003 }
 75:
                    var6 = _closure2_slot5;
                    var3 = var6.id;
 84:
                    var2 = _closure2_slot6;
                    var6 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 107:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var17;
            var6 = var10.id;
            var7[2] = var6;
            var6 = function() {
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
                    var5 = _closure2_slot5;
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
                    var3 = _closure2_slot5;
                    var3 = var3.id;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 152:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var6, var7);
            _closure2_slot7 = var9;
            var12 = _closure1_slot3;
            var8 = var12.useCallback;
            var6 = var11.parent_id;
            var7 = new Array(2);
            var7[0] = var6;
            var6 = var10.id;
            var7[1] = var6;
            var6 = function() {
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
            var8 = var8.bind(var12)(var6, var7);
            _closure2_slot8 = var8;
            var15 = _closure1_slot3;
            var12 = var15.useCallback;
            var7 = new Array(3);
            var7[0] = var10;
            var6 = var11.id;
            var7[1] = var6;
            var16 = var1 == var17;
            var6 = undefined;
            if(var16) { _fun0001_ip = 414; continue _fun0001 }
 409:
            var6 = var17.id;
 414:
            var7[2] = var6;
            var6 = function() {
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
                    var2 = _closure2_slot5;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 131; continue _fun0006 }
 122:
                    var6 = _closure2_slot5;
                    var2 = var6.id;
 131:
                    var2 = var4.bind(var5)(var3, var2, var1);
 138:
                    return var1;
                }
            };
            var21 = var12.bind(var15)(var6, var7);
            _closure2_slot9 = var21;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 14;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useGravityMessage;
            var6 = var6.bind(var7)(var10);
            _closure2_slot10 = var6;
            var16 = _closure1_slot3;
            var12 = var16.useMemo;
            var7 = new Array(3);
            var7[0] = var6;
            var6 = var11.name;
            var7[1] = var6;
            var6 = var11.guild_id;
            var7[2] = var6;
            var6 = function() {
                var1 = {};
                var3 = _closure2_slot10;
                var3 = var3.id;
                var1['id'] = var3;
                var3 = 'forum_thread';
                var1['type'] = var3;
                var4 = _closure2_slot10;
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
            var7 = var12.bind(var16)(var6, var7);
            var12 = _closure1_slot1;
            var6 = 15;
            var6 = var15[var6];
            var6 = var12.bind(var5)(var6);
            var16 = var6.bind(var5)(var11);
            _closure2_slot11 = var16;
            var15 = _closure1_slot3;
            var12 = var15.useMemo;
            var6 = new Array(10);
            var6[0] = var11;
            var6[1] = var17;
            var6[2] = var8;
            var6[3] = var9;
            var6[4] = var21;
            var6[5] = var10;
            var6[6] = var20;
            var6[7] = var18;
            var6[8] = var4;
            var6[9] = var16;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0007_ip = 677; continue _fun0007 }
 19:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot11;
                    var3 = {};
                    var8 = _closure1_slot9;
                    var16 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var2 = 16;
                    var6 = var21[var2];
                    var2 = undefined;
                    var6 = var16.bind(var2)(var6);
                    var7 = var6.PressableHighlight;
                    var6 = {};
                    var9 = _closure2_slot7;
                    var6['onPress'] = var9;
                    var9 = _closure2_slot8;
                    var6['onLongPress'] = var9;
                    var9 = 'button';
                    var6['accessibilityRole'] = var9;
                    var9 = 130;
                    var6['unstable_pressDelay'] = var9;
                    var10 = _closure2_slot4;
                    var9 = var10.pressable;
                    var6['style'] = var9;
                    var12 = _closure1_slot10;
                    var11 = _closure1_slot4;
                    var9 = {};
                    var13 = var10.container;
                    var9['style'] = var13;
                    var19 = _closure1_slot9;
                    var15 = 17;
                    var13 = var21[var15];
                    var13 = var16.bind(var2)(var13);
                    var18 = var13.Text;
                    var13 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
                    var20 = _closure2_slot11;
                    var13['children'] = var20;
                    var18 = var19.bind(var2)(var18, var13);
                    var13 = new Array(3);
                    var13[0] = var18;
                    var22 = _closure1_slot9;
                    var15 = var21[var15];
                    var15 = var16.bind(var2)(var15);
                    var18 = var15.Text;
                    var15 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'style': null, 'lineClamp': 5};
                    var16 = var10.subtitle;
                    var15['style'] = var16;
                    var16 = _closure1_slot1;
                    var19 = 18;
                    var19 = var21[var19];
                    var25 = var16.bind(var2)(var19);
                    var24 = var25.parseInlineReply;
                    var20 = _closure2_slot1;
                    var23 = var20.content;
                    var19 = true;
                    var23 = var24.bind(var25)(var23, var19);
                    var15['children'] = var23;
                    var15 = var22.bind(var2)(var18, var15);
                    var13[1] = var15;
                    var18 = _closure1_slot9;
                    var15 = 19;
                    var15 = var21[var15];
                    var16 = var16.bind(var2)(var15);
                    var15 = {};
                    var15['message'] = var20;
                    var20 = _closure2_slot2;
                    var15['visible'] = var20;
                    var15 = var18.bind(var2)(var16, var15);
                    var13[2] = var15;
                    var9['children'] = var13;
                    var9 = var12.bind(var2)(var11, var9);
                    var6['children'] = var9;
                    var7 = var8.bind(var2)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot9;
                    var8 = _closure1_slot4;
                    var7 = {};
                    var10 = var10.footer;
                    var7['style'] = var10;
                    var10 = _closure2_slot3;
                    if(var10) { _fun0007_ip = 563; continue _fun0007 }
 385:
                    var12 = _closure1_slot10;
                    var11 = _closure1_slot11;
                    var10 = {};
                    var18 = _closure1_slot9;
                    var15 = _closure1_slot4;
                    var13 = {};
                    var16 = _closure2_slot4;
                    var16 = var16.threadAsComments;
                    var13['style'] = var16;
                    var23 = _closure1_slot9;
                    var16 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var21 = 12;
                    var21 = var20[var21];
                    var21 = var16.bind(var2)(var21);
                    var22 = var21.ThreadAsComments;
                    var21 = {};
                    var21['inForum'] = var19;
                    var19 = _closure2_slot5;
                    var21['guild'] = var19;
                    var19 = _closure2_slot1;
                    var21['parentMessage'] = var19;
                    var24 = _closure2_slot9;
                    var21['onPress'] = var24;
                    var21 = var23.bind(var2)(var22, var21);
                    var13['children'] = var21;
                    var15 = var18.bind(var2)(var15, var13);
                    var13 = new Array(2);
                    var13[0] = var15;
                    var18 = _closure1_slot9;
                    var15 = 21;
                    var15 = var20[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.MessageReplyRow;
                    var15 = {};
                    var20 = _closure2_slot0;
                    var15['channel'] = var20;
                    var15['message'] = var19;
                    var15 = var18.bind(var2)(var16, var15);
                    var13[1] = var15;
                    var10['children'] = var13;
                    var10 = var12.bind(var2)(var11, var10);
                    _fun0007_ip = 653; continue _fun0007;
 563:
                    var13 = _closure1_slot9;
                    var12 = _closure1_slot4;
                    var11 = {};
                    var15 = _closure2_slot4;
                    var15 = var15.conversationReactionRow;
                    var11['style'] = var15;
                    var16 = _closure1_slot9;
                    var15 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var14 = 20;
                    var14 = var18[var14];
                    var15 = var15.bind(var2)(var14);
                    var14 = {};
                    var18 = _closure2_slot1;
                    var14['message'] = var18;
                    var18 = _closure2_slot0;
                    var14['channel'] = var18;
                    var17 = _closure2_slot5;
                    var14['guild'] = var17;
                    var14 = var16.bind(var2)(var15, var14);
                    var11['children'] = var14;
                    var10 = var13.bind(var2)(var12, var11);
 653:
                    var7['children'] = var10;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 677:
                    return var1;
                }
            };
            var2 = var12.bind(var15)(var2, var6);
            if(!(var1 != var11)) { _fun0001_ip = 1002; continue _fun0001 }
 616:
            var6 = var11.guild_id;
            if(!(var1 != var6)) { _fun0001_ip = 1002; continue _fun0001 }
 628:
            if(!(var1 != var17)) { _fun0001_ip = 1002; continue _fun0001 }
 635:
            if(!(var1 != var13)) { _fun0001_ip = 1002; continue _fun0001 }
 642:
            if(!(var1 != var19)) { _fun0001_ip = 1002; continue _fun0001 }
 649:
            if(var4) { _fun0001_ip = 821; continue _fun0001 }
 655:
            var12 = _closure1_slot10;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 12;
            var4 = var18[var15];
            var4 = var16.bind(var5)(var4);
            var6 = var4.MessageContentPost;
            var4 = {};
            var4['channel'] = var19;
            var4['guild'] = var17;
            var4['author'] = var13;
            var13 = var10.id;
            var4['id'] = var13;
            var17 = _closure1_slot1;
            var13 = 24;
            var13 = var18[var13];
            var19 = var17.bind(var5)(var13);
            var17 = var19.extractTimestamp;
            var13 = var10.id;
            var13 = var17.bind(var19)(var13);
            var4['timestamp'] = var13;
            var13 = 'forum_thread';
            var4['type'] = var13;
            var4['onHeaderPress'] = var9;
            var4['onHeaderLongPress'] = var8;
            var4['message'] = var10;
            var13 = new Array(2);
            var13[0] = var2;
            var17 = _closure1_slot9;
            var15 = var18[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Separator;
            var15 = {};
            var15 = var17.bind(var5)(var16, var15);
            var13[1] = var15;
            var4['children'] = var13;
            var4 = var12.bind(var5)(var6, var4);
            return var4;
 821:
            var6 = undefined;
            if(var3) { _fun0001_ip = 829; continue _fun0001 }
 826:
            var6 = var2;
 829:
            var4 = _closure1_slot9;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 22;
            var2 = var13[var2];
            var3 = var12.bind(var5)(var2);
            var2 = {};
            var17 = _closure1_slot0;
            var14 = 23;
            var15 = var13[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.bYNuV1;
            var14 = var15.bind(var16)(var14);
            var2['actionLabel'] = var14;
            var14 = var10.id;
            var2['id'] = var14;
            var14 = 'forum_thread';
            var2['type'] = var14;
            var11 = var11.parent_id;
            var2['channelId'] = var11;
            var11 = 24;
            var11 = var13[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.extractTimestamp;
            var10 = var10.id;
            var10 = var11.bind(var12)(var10);
            var2['timestamp'] = var10;
            var2['onHeaderPress'] = var9;
            var2['onHeaderLongPress'] = var8;
            var2['conversationProps'] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1002:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
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
    var9 = var6.jsxs;
    var _closure1_slot10 = var9;
    var6 = var6.Fragment;
    var _closure1_slot11 = var6;
    var6 = 6;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var2 = {};
            var3 = 1;
            var2['flex'] = var3;
            var3 = 0;
            if(var4) { _fun0008_ip = 26; continue _fun0008 }
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
            if(!var4) { _fun0008_ip = 137; continue _fun0008 }
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
            if(var4) { _fun0008_ip = 160; continue _fun0008 }
 154:
            var4 = _closure1_slot8;
            _fun0008_ip = 188; continue _fun0008;
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
            var2 = {};
            var2['marginHorizontal'] = var3;
            var2['marginBottom'] = var3;
            var1['conversationReactionRow'] = var2;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot12 = var6;
    var6 = 25;
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
        var3 = _closure1_slot13;
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