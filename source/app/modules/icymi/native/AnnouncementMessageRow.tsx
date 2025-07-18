// app/modules/icymi/native/AnnouncementMessageRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var3 = _closure1_slot12;
        var2['paddingLeft'] = var3;
        var1['pressable'] = var2;
        var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8, 'paddingVertical': 12, 'paddingHorizontal': null, 'borderBottomWidth': 1};
        var4 = _closure1_slot11;
        var2['paddingHorizontal'] = var4;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 10;
        var10 = var8[var5];
        var6 = undefined;
        var10 = var7.bind(var6)(var10);
        var10 = var10.colors;
        var10 = var10.BORDER_SUBTLE;
        var2['borderBottomColor'] = var10;
        var1['mentionHeader'] = var2;
        var2 = {};
        var9 = _closure1_slot10;
        var2['marginVertical'] = var9;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.spacing;
        var5 = var5.PX_8;
        var2['gap'] = var5;
        var2['paddingHorizontal'] = var4;
        var2['marginLeft'] = var3;
        var1['footer'] = var2;
        return var1;
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var24 = var2.unread;
            var14 = var2.message;
            var _closure2_slot0 = var14;
            var15 = var2.guild;
            var _closure2_slot1 = var15;
            var18 = var2.channel;
            var _closure2_slot2 = var18;
            var22 = var2.author;
            var21 = var2.visible;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot8;
                var3 = var4.isChannelMuted;
                var1 = _closure2_slot2;
                var2 = var1.getGuildId;
                var2 = var2.bind(var1)();
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var23 = var5.bind(var6)(var3, var2);
            var2 = _closure1_slot15;
            var10 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var2 = null;
            var3 = var2 == var15;
            var2 = undefined;
            if(var3) { _fun0001_ip = 138; continue _fun0001 }
 133:
            var2 = var15.id;
 138:
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var14.author;
            var2 = var2.id;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 29; continue _fun0002 }
 20:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
 29:
                    if(!(var6 != var3)) { _fun0002_ip = 105; continue _fun0002 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot1;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 84; continue _fun0002 }
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
            var2 = var5.bind(var6)(var2, var3);
            var9 = var14.mentioned;
            if(!var9) { _fun0001_ip = 186; continue _fun0001 }
 183:
            var9 = var24;
 186:
            var5 = _closure1_slot3;
            var6 = var5.useCallback;
            var2 = var18.id;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var14.id;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var2 = var5[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var2);
                var8 = var9.trackItemInteraction;
                var3 = _closure2_slot0;
                var7 = var3.id;
                var6 = 'announcement';
                var3 = 'long_press_channel';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = 14;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openChannelLongPressActionSheet;
                var2 = _closure2_slot2;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var6.bind(var5)(var2, var3);
            var6 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var18;
            var3[1] = var14;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var5 = var4[var1];
                var1 = undefined;
                var11 = var3.bind(var1)(var5);
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
                var2 = 15;
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
            var19 = var6.bind(var5)(var2, var3);
            var6 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var14;
            var2 = var18.id;
            var3[1] = var2;
            var2 = var15.id;
            var3[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 13;
                    var2 = var1[var6];
                    var1 = undefined;
                    var10 = var3.bind(var1)(var2);
                    var9 = var10.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var8 = var4.id;
                    var7 = 'announcement';
                    var2 = 'press_message';
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 194; continue _fun0003 }
 69:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var2 = var4[var2];
                    var9 = var7.bind(var1)(var2);
                    var8 = var9.ackGravityItems;
                    var10 = {};
                    var2 = _closure2_slot0;
                    var7 = var2.id;
                    var10['id'] = var7;
                    var7 = global;
                    var11 = var7.Date;
                    var7 = var11.now;
                    var7 = var7.bind(var11)();
                    var10['timestamp'] = var7;
                    var7 = new Array(1);
                    var7[0] = var10;
                    var7 = var8.bind(var9)(var7);
                    var5 = _closure1_slot0;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.navigateToPost;
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 194:
                    return var1;
                }
            };
            var20 = var6.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var14;
            var6 = var15.id;
            var2[1] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 13;
                    var3 = var1[var5];
                    var1 = undefined;
                    var10 = var4.bind(var1)(var3);
                    var9 = var10.trackItemInteraction;
                    var6 = _closure2_slot0;
                    var8 = var6.id;
                    var7 = 'announcement';
                    var4 = 'press_comments';
                    var4 = var9.bind(var10)(var8, var7, var4);
                    var4 = null;
                    if(!(var4 != var6)) { _fun0004_ip = 119; continue _fun0004 }
 66:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.navigateToPost;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
 119:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = _closure1_slot14;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 13;
            var5 = var16[var11];
            var5 = var12.bind(var4)(var5);
            var6 = var5.AnnouncementContentPost;
            var5 = {};
            var5['channel'] = var18;
            var5['guild'] = var15;
            var5['message'] = var14;
            var5['author'] = var22;
            var17 = _closure1_slot1;
            var22 = 17;
            var22 = var16[var22];
            var26 = var17.bind(var4)(var22);
            var25 = var26.extractTimestamp;
            var22 = var14.id;
            var22 = var25.bind(var26)(var22);
            var5['timestamp'] = var22;
            var5['mentioned'] = var9;
            var9 = var14.id;
            var5['id'] = var9;
            var5['onHeaderPress'] = var20;
            var5['onHeaderLongPress'] = var8;
            var8 = 18;
            var8 = var16[var8];
            var8 = var12.bind(var4)(var8);
            var9 = var8.PressableHighlight;
            var8 = {};
            var8['onPress'] = var20;
            var8['onLongPress'] = var19;
            var19 = 'button';
            var8['accessibilityRole'] = var19;
            var19 = 19;
            var20 = var16[var19];
            var22 = var17.bind(var4)(var20);
            var20 = {};
            var20['channel'] = var18;
            var20['unread'] = var24;
            var20 = var22.bind(var4)(var20);
            var8['accessibilityLabel'] = var20;
            var19 = var16[var19];
            var22 = var12.bind(var4)(var19);
            var20 = var22.getChannelA11yHint;
            var19 = {};
            var19['channel'] = var18;
            var19['muted'] = var23;
            var19 = var20.bind(var22)(var19);
            var8['accessibilityHint'] = var19;
            var19 = 130;
            var8['unstable_pressDelay'] = var19;
            var19 = var10.pressable;
            var8['style'] = var19;
            var19 = 20;
            var19 = var16[var19];
            var19 = var12.bind(var4)(var19);
            var20 = var19.MessageRowContent;
            var19 = {};
            var19['message'] = var14;
            var19['channel'] = var18;
            var19['guild'] = var15;
            var22 = 5;
            var19['lineClamp'] = var22;
            var19['visible'] = var21;
            var19 = var3.bind(var4)(var20, var19);
            var8['children'] = var19;
            var9 = var3.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var10 = var10.footer;
            var9['style'] = var10;
            var10 = 21;
            var10 = var16[var10];
            var17 = var17.bind(var4)(var10);
            var10 = {};
            var10['message'] = var14;
            var10['channel'] = var18;
            var17 = var3.bind(var4)(var17, var10);
            var10 = new Array(2);
            var10[0] = var17;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ThreadAsComments;
            var11 = {};
            var11['guild'] = var15;
            var11['parentMessage'] = var14;
            var11['onPress'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var10[1] = var11;
            var9['children'] = var10;
            var9 = var7.bind(var4)(var2, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/AnnouncementMessageRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AnnouncementMessageRowWrapper(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            var13 = 11;
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 39; continue _fun0006 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var12.bind(var14)(var8, var3);
            var3 = 22;
            var3 = var10[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useGravityMessage;
            var10 = var3.bind(var4)(var7);
            var4 = null;
            var3 = var4 == var10;
            var7 = undefined;
            if(var3) { _fun0005_ip = 168; continue _fun0005 }
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.isBlockedOrIgnored;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 40; continue _fun0007 }
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
            if(var12) { _fun0005_ip = 303; continue _fun0005 }
 228:
            var12 = var4 == var8;
            var1 = null;
            if(var12) { _fun0005_ip = 303; continue _fun0005 }
 237:
            var12 = var4 == var10;
            var1 = null;
            if(var12) { _fun0005_ip = 303; continue _fun0005 }
 246:
            var12 = var4 == var7;
            var1 = null;
            if(var12) { _fun0005_ip = 303; continue _fun0005 }
 255:
            var1 = null;
            if(var3) { _fun0005_ip = 303; continue _fun0005 }
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