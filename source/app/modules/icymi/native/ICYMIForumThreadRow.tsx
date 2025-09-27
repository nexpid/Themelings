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
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var11 = var1.message;
            var _closure2_slot1 = var11;
            var18 = var1.visible;
            var _closure2_slot2 = var18;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var3 = var7.useDestinationICYMIExperiment;
            var1 = {};
            var8 = 'ICYMIForumThreadRow';
            var1['location'] = var8;
            var1 = var3.bind(var7)(var1);
            var7 = var1.isNewCardDesign;
            var3 = var1.isNewHeaderAndInteractions;
            var _closure2_slot3 = var3;
            var1 = _closure1_slot10;
            var20 = var1.bind(var5)(var7);
            var _closure2_slot4 = var20;
            var1 = 8;
            var8 = var6[var1];
            var13 = var4.bind(var5)(var8);
            var10 = var13.useStateFromStores;
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
            var17 = var10.bind(var13)(var9, var8);
            var _closure2_slot5 = var17;
            var13 = var11.author;
            var _closure2_slot6 = var13;
            var1 = var6[var1];
            var8 = var4.bind(var5)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var6.bind(var8)(var4, var1);
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var1 = var13.id;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = null;
            var10 = var1 == var17;
            var4 = undefined;
            if(var10) { _fun0001_ip = 261; continue _fun0001 }
 256:
            var4 = var17.id;
 261:
            var6[1] = var4;
            var4 = function() {
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
                    var3 = 9;
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
            var4 = var8.bind(var9)(var4, var6);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var17;
            var4 = var11.id;
            var6[2] = var4;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.itemInteracted;
                    var4 = _closure2_slot1;
                    var6 = var4.id;
                    var5 = 'forum_thread';
                    var4 = 'press_forum_thread';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var4 = _closure2_slot0;
                    var6 = null;
                    var4 = var6 != var4;
                    if(!var4) { _fun0004_ip = 83; continue _fun0004 }
 75:
                    var5 = _closure2_slot5;
                    var4 = var6 != var5;
 83:
                    if(!var4) { _fun0004_ip = 146; continue _fun0004 }
 86:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
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
 146:
                    return var1;
                }
            };
            var10 = var8.bind(var9)(var4, var6);
            _closure2_slot7 = var10;
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var4 = var12.parent_id;
            var6 = new Array(2);
            var6[0] = var4;
            var4 = var11.id;
            var6[1] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.parent_id;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 115; continue _fun0005 }
 19:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var4 = undefined;
                    var9 = var6.bind(var4)(var3);
                    var8 = var9.itemInteracted;
                    var3 = _closure2_slot1;
                    var7 = var3.id;
                    var6 = 'forum_thread';
                    var3 = 'long_press_forum_thread';
                    var3 = var8.bind(var9)(var7, var6, var3);
                    var3 = _closure1_slot0;
                    var2 = 12;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var1 = var2.bind(var3)(var1);
 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var4, var6);
            _closure2_slot8 = var9;
            var14 = _closure1_slot3;
            var8 = var14.useCallback;
            var6 = new Array(3);
            var6[0] = var11;
            var4 = var12.id;
            var6[1] = var4;
            var16 = var1 == var17;
            var4 = undefined;
            if(var16) { _fun0001_ip = 414; continue _fun0001 }
 409:
            var4 = var17.id;
 414:
            var6[2] = var4;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var3);
                    var8 = var9.itemInteracted;
                    var3 = _closure2_slot1;
                    var7 = var3.id;
                    var5 = 'forum_thread';
                    var4 = 'press_comments';
                    var4 = var8.bind(var9)(var7, var5, var4);
                    var7 = null;
                    if(!(var7 != var3)) { _fun0006_ip = 132; continue _fun0006 }
 68:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.navigateToPost;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = _closure2_slot5;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 125; continue _fun0006 }
 116:
                    var6 = _closure2_slot5;
                    var2 = var6.id;
 125:
                    var2 = var4.bind(var5)(var3, var2, var1);
 132:
                    return var1;
                }
            };
            var21 = var8.bind(var14)(var4, var6);
            _closure2_slot9 = var21;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 13;
            var4 = var14[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useGravityMessage;
            var4 = var4.bind(var6)(var11);
            _closure2_slot10 = var4;
            var16 = _closure1_slot3;
            var8 = var16.useMemo;
            var6 = new Array(3);
            var6[0] = var4;
            var4 = var12.name;
            var6[1] = var4;
            var4 = var12.guild_id;
            var6[2] = var4;
            var4 = function() {
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
            var8 = var8.bind(var16)(var4, var6);
            var6 = _closure1_slot1;
            var4 = 14;
            var4 = var14[var4];
            var4 = var6.bind(var5)(var4);
            var16 = var4.bind(var5)(var12);
            _closure2_slot11 = var16;
            var14 = _closure1_slot3;
            var6 = var14.useMemo;
            var4 = new Array(10);
            var4[0] = var12;
            var4[1] = var17;
            var4[2] = var9;
            var4[3] = var10;
            var4[4] = var21;
            var4[5] = var11;
            var4[6] = var20;
            var4[7] = var18;
            var4[8] = var3;
            var4[9] = var16;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0007_ip = 686; continue _fun0007 }
 19:
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot9;
                    var3 = {};
                    var8 = _closure1_slot7;
                    var16 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var2 = 15;
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
                    var12 = _closure1_slot8;
                    var11 = _closure1_slot4;
                    var9 = {};
                    var13 = var10.container;
                    var9['style'] = var13;
                    var19 = _closure1_slot7;
                    var15 = 16;
                    var13 = var21[var15];
                    var13 = var16.bind(var2)(var13);
                    var18 = var13.Text;
                    var13 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
                    var20 = _closure2_slot11;
                    var13['children'] = var20;
                    var18 = var19.bind(var2)(var18, var13);
                    var13 = new Array(3);
                    var13[0] = var18;
                    var22 = _closure1_slot7;
                    var15 = var21[var15];
                    var15 = var16.bind(var2)(var15);
                    var18 = var15.Text;
                    var15 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'style': null, 'lineClamp': 5};
                    var16 = var10.subtitle;
                    var15['style'] = var16;
                    var16 = _closure1_slot1;
                    var19 = 17;
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
                    var18 = _closure1_slot7;
                    var15 = 18;
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
                    var9 = _closure1_slot7;
                    var8 = _closure1_slot4;
                    var7 = {};
                    var10 = var10.footer;
                    var7['style'] = var10;
                    var10 = _closure2_slot3;
                    if(var10) { _fun0007_ip = 563; continue _fun0007 }
 385:
                    var12 = _closure1_slot8;
                    var11 = _closure1_slot9;
                    var10 = {};
                    var18 = _closure1_slot7;
                    var15 = _closure1_slot4;
                    var13 = {};
                    var16 = _closure2_slot4;
                    var16 = var16.threadAsComments;
                    var13['style'] = var16;
                    var23 = _closure1_slot7;
                    var16 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var21 = 11;
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
                    var18 = _closure1_slot7;
                    var15 = 20;
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
                    _fun0007_ip = 662; continue _fun0007;
 563:
                    var13 = _closure1_slot7;
                    var12 = _closure1_slot4;
                    var11 = {};
                    var15 = _closure2_slot4;
                    var15 = var15.conversationReactionRow;
                    var11['style'] = var15;
                    var16 = _closure1_slot7;
                    var15 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var14 = 19;
                    var14 = var18[var14];
                    var15 = var15.bind(var2)(var14);
                    var14 = {};
                    var18 = _closure2_slot1;
                    var14['message'] = var18;
                    var18 = _closure2_slot0;
                    var14['channel'] = var18;
                    var17 = _closure2_slot5;
                    var14['guild'] = var17;
                    var17 = 'base';
                    var14['backgroundVariant'] = var17;
                    var14 = var16.bind(var2)(var15, var14);
                    var11['children'] = var14;
                    var10 = var13.bind(var2)(var12, var11);
 662:
                    var7['children'] = var10;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 686:
                    return var1;
                }
            };
            var2 = var6.bind(var14)(var2, var4);
            if(!(var1 != var12)) { _fun0001_ip = 1010; continue _fun0001 }
 616:
            var4 = var12.guild_id;
            if(!(var1 != var4)) { _fun0001_ip = 1010; continue _fun0001 }
 628:
            if(!(var1 != var17)) { _fun0001_ip = 1010; continue _fun0001 }
 635:
            if(!(var1 != var13)) { _fun0001_ip = 1010; continue _fun0001 }
 642:
            if(!(var1 != var19)) { _fun0001_ip = 1010; continue _fun0001 }
 649:
            if(var3) { _fun0001_ip = 821; continue _fun0001 }
 655:
            var6 = _closure1_slot8;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 11;
            var3 = var18[var14];
            var3 = var16.bind(var5)(var3);
            var4 = var3.MessageContentPost;
            var3 = {};
            var3['channel'] = var19;
            var3['guild'] = var17;
            var3['author'] = var13;
            var13 = var11.id;
            var3['id'] = var13;
            var17 = _closure1_slot1;
            var13 = 23;
            var13 = var18[var13];
            var19 = var17.bind(var5)(var13);
            var17 = var19.extractTimestamp;
            var13 = var11.id;
            var13 = var17.bind(var19)(var13);
            var3['timestamp'] = var13;
            var13 = 'forum_thread';
            var3['type'] = var13;
            var3['onHeaderPress'] = var10;
            var3['onHeaderLongPress'] = var9;
            var3['message'] = var11;
            var13 = new Array(2);
            var13[0] = var2;
            var17 = _closure1_slot7;
            var14 = var18[var14];
            var14 = var16.bind(var5)(var14);
            var16 = var14.Separator;
            var14 = {};
            var14 = var17.bind(var5)(var16, var14);
            var13[1] = var14;
            var3['children'] = var13;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
 821:
            var6 = undefined;
            if(var7) { _fun0001_ip = 829; continue _fun0001 }
 826:
            var6 = var2;
 829:
            var4 = _closure1_slot7;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 21;
            var2 = var14[var2];
            var3 = var13.bind(var5)(var2);
            var2 = {};
            var18 = _closure1_slot0;
            var15 = 22;
            var16 = var14[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var14[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.bYNuV1;
            var15 = var16.bind(var17)(var15);
            var2['actionLabel'] = var15;
            var15 = var11.id;
            var2['id'] = var15;
            var15 = 'forum_thread';
            var2['type'] = var15;
            var12 = var12.parent_id;
            var2['channelId'] = var12;
            var12 = 23;
            var12 = var14[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.extractTimestamp;
            var11 = var11.id;
            var11 = var12.bind(var13)(var11);
            var2['timestamp'] = var11;
            var2['onHeaderPress'] = var10;
            var2['onHeaderLongPress'] = var9;
            var2['conversationProps'] = var8;
            var7 = !var7;
            var2['shouldFeatureUser'] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1010:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
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
    var9 = var6.jsx;
    var _closure1_slot7 = var9;
    var9 = var6.jsxs;
    var _closure1_slot8 = var9;
    var6 = var6.Fragment;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createICYMIStyles;
    var6 = function(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var1 = {};
            var2 = {};
            var5 = 1;
            var2['flex'] = var5;
            var5 = 0;
            if(var4) { _fun0008_ip = 28; continue _fun0008 }
 22:
            var5 = var3.inset;
 28:
            var2['paddingLeft'] = var5;
            var1['pressable'] = var2;
            var2 = {};
            var5 = var3.margin;
            var2['marginHorizontal'] = var5;
            var1['container'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 6;
            var6 = var6[var8];
            var7 = undefined;
            var6 = var9.bind(var7)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_8;
            var2['marginTop'] = var6;
            var6 = var3.margin;
            var2['marginBottom'] = var6;
            var1['subtitle'] = var2;
            var2 = {};
            var6 = undefined;
            if(!var4) { _fun0008_ip = 147; continue _fun0008 }
 119:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var6 = var9.CARD_SECONDARY_BG;
 147:
            var2['backgroundColor'] = var6;
            var6 = 'flex-end';
            var2['justifyContent'] = var6;
            if(var4) { _fun0008_ip = 172; continue _fun0008 }
 164:
            var4 = var3.inset;
            _fun0008_ip = 200; continue _fun0008;
 172:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.spacing;
            var4 = var5.PX_32;
 200:
            var2['paddingLeft'] = var4;
            var4 = var3.margin;
            var2['marginTop'] = var4;
            var4 = var3.margin;
            var2['gap'] = var4;
            var1['footer'] = var2;
            var2 = {};
            var4 = var3.margin;
            var2['marginHorizontal'] = var4;
            var1['threadAsComments'] = var2;
            var2 = {};
            var4 = var3.margin;
            var2['marginHorizontal'] = var4;
            var3 = var3.margin;
            var2['marginBottom'] = var3;
            var1['conversationReactionRow'] = var2;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot10 = var6;
    var6 = 24;
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
        var4 = _closure1_slot7;
        var3 = _closure1_slot11;
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