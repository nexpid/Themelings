// app/modules/icymi/native/ICYMIForumThreadRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var15 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var8;
    var2 = function ICYMIForumThreadRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.channel;
            var _closure2_slot0 = var15;
            var14 = var2.message;
            var _closure2_slot1 = var14;
            var26 = var2.visible;
            var2 = _closure1_slot9;
            var5 = undefined;
            var19 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var6 = var4[var2];
            var9 = var3.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
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
            var22 = var8.bind(var9)(var7, var6);
            var _closure2_slot2 = var22;
            var6 = var14.author;
            var _closure2_slot3 = var6;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var4 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var2);
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var2 = var6.id;
            var4 = new Array(2);
            var4[0] = var2;
            var3 = null;
            var10 = var3 == var22;
            var2 = undefined;
            if(var10) { _fun0001_ip = 183; continue _fun0001 }
 178:
            var2 = var22.id;
 183:
            var4[1] = var2;
            var2 = function() {
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
                    var3 = 9;
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
            var2 = var8.bind(var9)(var2, var4);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var4 = new Array(3);
            var4[0] = var15;
            var4[1] = var22;
            var2 = var14.id;
            var4[2] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
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
                    var3 = 11;
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
            var10 = var8.bind(var9)(var2, var4);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var2 = var15.parent_id;
            var4 = new Array(2);
            var4[0] = var2;
            var2 = var14.id;
            var4[1] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.parent_id;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 117; continue _fun0005 }
 19:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 10;
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
                    var2 = 12;
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
            var9 = var8.bind(var9)(var2, var4);
            var8 = _closure1_slot3;
            var4 = var8.useCallback;
            var2 = new Array(3);
            var2[0] = var14;
            var12 = var15.id;
            var2[1] = var12;
            var13 = var3 == var22;
            var12 = undefined;
            if(var13) { _fun0001_ip = 328; continue _fun0001 }
 323:
            var12 = var22.id;
 328:
            var2[2] = var12;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
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
                    var2 = 11;
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
            var21 = var4.bind(var8)(var1, var2);
            var2 = var3 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 984; continue _fun0001 }
 357:
            var2 = var15.guild_id;
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 984; continue _fun0001 }
 374:
            var2 = var3 == var22;
            var1 = null;
            if(var2) { _fun0001_ip = 984; continue _fun0001 }
 386:
            var2 = var3 == var6;
            var1 = null;
            if(var2) { _fun0001_ip = 984; continue _fun0001 }
 398:
            var2 = var3 == var7;
            var1 = null;
            if(var2) { _fun0001_ip = 984; continue _fun0001 }
 410:
            var4 = _closure1_slot8;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = 11;
            var2 = var16[var18];
            var2 = var12.bind(var5)(var2);
            var3 = var2.MessageContentPost;
            var2 = {};
            var2['channel'] = var7;
            var2['guild'] = var22;
            var2['author'] = var6;
            var6 = var14.id;
            var2['id'] = var6;
            var24 = _closure1_slot1;
            var6 = 13;
            var6 = var16[var6];
            var8 = var24.bind(var5)(var6);
            var7 = var8.extractTimestamp;
            var6 = var14.id;
            var6 = var7.bind(var8)(var6);
            var2['timestamp'] = var6;
            var6 = 'forum_thread';
            var2['type'] = var6;
            var2['onHeaderPress'] = var10;
            var2['onHeaderLongPress'] = var9;
            var2['message'] = var14;
            var8 = _closure1_slot7;
            var6 = 14;
            var6 = var16[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.PressableHighlight;
            var6 = {};
            var6['onPress'] = var10;
            var6['onLongPress'] = var9;
            var9 = 'button';
            var6['accessibilityRole'] = var9;
            var9 = 130;
            var6['unstable_pressDelay'] = var9;
            var9 = var19.pressable;
            var6['style'] = var9;
            var13 = _closure1_slot8;
            var10 = _closure1_slot4;
            var9 = {};
            var17 = var19.container;
            var9['style'] = var17;
            var25 = _closure1_slot7;
            var20 = 15;
            var17 = var16[var20];
            var17 = var12.bind(var5)(var17);
            var23 = var17.Text;
            var17 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var27 = var15.name;
            var17['children'] = var27;
            var23 = var25.bind(var5)(var23, var17);
            var17 = new Array(3);
            var17[0] = var23;
            var27 = _closure1_slot7;
            var20 = var16[var20];
            var20 = var12.bind(var5)(var20);
            var25 = var20.Text;
            var20 = {'variant': 'text-md/normal', 'color': 'text-secondary', 'style': null, 'lineClamp': 5};
            var23 = var19.subtitle;
            var20['style'] = var23;
            var23 = 16;
            var23 = var16[var23];
            var30 = var24.bind(var5)(var23);
            var29 = var30.parseInlineReply;
            var28 = var14.content;
            var23 = true;
            var28 = var29.bind(var30)(var28, var23);
            var20['children'] = var28;
            var20 = var27.bind(var5)(var25, var20);
            var17[1] = var20;
            var25 = _closure1_slot7;
            var20 = 17;
            var20 = var16[var20];
            var24 = var24.bind(var5)(var20);
            var20 = {};
            var20['message'] = var14;
            var20['visible'] = var26;
            var20 = var25.bind(var5)(var24, var20);
            var17[2] = var20;
            var9['children'] = var17;
            var9 = var13.bind(var5)(var10, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var19.footer;
            var7['style'] = var10;
            var17 = _closure1_slot7;
            var13 = _closure1_slot4;
            var10 = {};
            var19 = var19.threadAsComments;
            var10['style'] = var19;
            var20 = _closure1_slot7;
            var18 = var16[var18];
            var18 = var12.bind(var5)(var18);
            var19 = var18.ThreadAsComments;
            var18 = {};
            var18['inForum'] = var23;
            var18['guild'] = var22;
            var18['parentMessage'] = var14;
            var18['onPress'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var10['children'] = var18;
            var13 = var17.bind(var5)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot7;
            var11 = 18;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.MessageReplyRow;
            var11 = {};
            var11['channel'] = var15;
            var11['message'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 984:
            return var1;
        }
    };
    var _closure1_slot10 = var2;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var6 = var8[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var14 = 1;
    var4 = var8[var14];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var6 = var8[var4];
    var6 = var15.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var12 = var6.ICYMI_MARGIN;
    var13 = var6.MESSAGE_CONTENT_INSET;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot7 = var9;
    var6 = var6.jsxs;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var11['flex'] = var14;
    var11['paddingLeft'] = var13;
    var6['pressable'] = var11;
    var11 = {};
    var11['marginHorizontal'] = var12;
    var6['container'] = var11;
    var11 = {};
    var14 = 7;
    var14 = var8[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11['marginTop'] = var14;
    var11['marginBottom'] = var12;
    var6['subtitle'] = var11;
    var11 = {};
    var14 = 'flex-end';
    var11['justifyContent'] = var14;
    var11['paddingLeft'] = var13;
    var11['marginTop'] = var12;
    var11['gap'] = var12;
    var6['footer'] = var11;
    var11 = {};
    var11['marginHorizontal'] = var12;
    var6['threadAsComments'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot9 = var6;
    var6 = 19;
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
        var3 = _closure1_slot10;
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