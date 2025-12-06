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
case 0:
            var2 = arg1;
            var19 = var2.channel;
            var _closure2_slot0 = var19;
            var25 = var2.message;
            var _closure2_slot1 = var25;
            var24 = var2.visible;
            var2 = _closure1_slot9;
            var5 = undefined;
            var15 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var4 = var6[var2];
            var9 = var3.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
case 2:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var18 = var8.bind(var9)(var7, var4);
            var _closure2_slot2 = var18;
            var4 = var25.author;
            var _closure2_slot3 = var4;
            var2 = var6[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useStateFromStores;
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
            var2 = var6.bind(var7)(var3, var2);
            var9 = _closure1_slot3;
            var8 = var9.useEffect;
            var3 = var4.id;
            var7 = new Array(2);
            var7[0] = var3;
            var3 = null;
            var10 = var3 == var18;
            var6 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var18.id;
case 4:
            var7[1] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
case 6:
                    if(!(var6 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
case 10:
                    var2 = _closure2_slot3;
                    var6 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var19;
            var7[1] = var18;
            var6 = var25.id;
            var7[2] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var2 = var6[var4];
                    var1 = undefined;
                    var12 = var5.bind(var1)(var2);
                    var11 = var12.itemInteracted;
                    var8 = _closure2_slot1;
                    var10 = var8.id;
                    var7 = 'forum_thread';
                    var9 = 'press_forum_thread';
                    var9 = var11.bind(var12)(var10, var7, var9);
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.feedItemActioned;
                    var4 = {};
                    var8 = var8.id;
                    var4['itemId'] = var8;
                    var4['itemType'] = var7;
                    var7 = {'actionGestureType': 'press', 'actionTargetElement': 'item_container', 'actionIntentType': 'navigate', 'actionDestinationType': 'channel'};
                    var4['actionParameters'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot0;
                    var6 = null;
                    var4 = var6 != var4;
                    if(!var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var5 = _closure2_slot2;
                    var4 = var6 != var5;
case 12:
                    if(!var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
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
case 14:
                    return var1;
                }
            };
            var10 = var8.bind(var9)(var6, var7);
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var9 = var19.parent_id;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var25.id;
            var6[1] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.parent_id;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var7 = var5[var3];
                    var4 = undefined;
                    var12 = var6.bind(var4)(var7);
                    var11 = var12.itemInteracted;
                    var9 = _closure2_slot1;
                    var10 = var9.id;
                    var8 = 'forum_thread';
                    var7 = 'long_press_forum_thread';
                    var7 = var11.bind(var12)(var10, var8, var7);
                    var3 = var5[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.feedItemActioned;
                    var3 = {};
                    var9 = var9.id;
                    var3['itemId'] = var9;
                    var3['itemType'] = var8;
                    var8 = {'actionGestureType': 'long_press', 'actionTargetElement': 'item_container', 'actionIntentType': 'open', 'actionDestinationType': null};
                    var3['actionParameters'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = _closure1_slot0;
                    var2 = 11;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var7.bind(var8)(var1, var6);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var6 = var6.bind(var5)(var1);
            var1 = var6.useGravityMessage;
            var17 = var1.bind(var6)(var25);
            var6 = _closure1_slot1;
            var1 = 13;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var27 = var1.bind(var5)(var19);
            var6 = var3 == var19;
            var1 = null;
            if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var19.guild_id;
            var6 = var3 == var6;
            var1 = null;
            if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var6 = var3 == var18;
            var1 = null;
            if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 21:
            var4 = var3 == var4;
            var1 = null;
            if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 22:
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 23:
            var4 = _closure1_slot8;
            var14 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 14;
            var2 = var20[var2];
            var3 = var14.bind(var5)(var2);
            var2 = {};
            var22 = _closure1_slot0;
            var6 = 15;
            var7 = var20[var6];
            var7 = var22.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var20[var6];
            var6 = var22.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.bYNuVx;
            var6 = var7.bind(var8)(var6);
            var2['actionLabel'] = var6;
            var6 = var17.id;
            var2['id'] = var6;
            var16 = 'forum_thread';
            var2['interactionType'] = var16;
            var6 = var19.parent_id;
            var2['channelId'] = var6;
            var6 = 16;
            var6 = var20[var6];
            var8 = var14.bind(var5)(var6);
            var7 = var8.extractTimestamp;
            var6 = var17.id;
            var6 = var7.bind(var8)(var6);
            var2['timestamp'] = var6;
            var2['onHeaderPress'] = var10;
            var2['onHeaderLongPress'] = var9;
            var2['message'] = var17;
            var29 = true;
            var2['shouldFeatureUser'] = var29;
            var8 = _closure1_slot7;
            var6 = 17;
            var6 = var20[var6];
            var6 = var22.bind(var5)(var6);
            var7 = var6.PressableHighlight;
            var6 = {};
            var6['onPress'] = var10;
            var6['onLongPress'] = var9;
            var9 = 'button';
            var6['accessibilityRole'] = var9;
            var9 = 130;
            var6['unstable_pressDelay'] = var9;
            var9 = var15.pressable;
            var6['style'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var15.container;
            var9['style'] = var12;
            var26 = _closure1_slot7;
            var21 = 18;
            var12 = var20[var21];
            var12 = var22.bind(var5)(var12);
            var23 = var12.Text;
            var12 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var12['children'] = var27;
            var23 = var26.bind(var5)(var23, var12);
            var12 = new Array(3);
            var12[0] = var23;
            var23 = _closure1_slot7;
            var21 = var20[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-md/normal', 'color': 'text-subtle', 'style': null, 'lineClamp': 5};
            var26 = var15.subtitle;
            var21['style'] = var26;
            var26 = 19;
            var26 = var20[var26];
            var28 = var14.bind(var5)(var26);
            var27 = var28.parseInlineReply;
            var26 = var25.content;
            var26 = var27.bind(var28)(var26, var29);
            var21['children'] = var26;
            var21 = var23.bind(var5)(var22, var21);
            var12[1] = var21;
            var23 = _closure1_slot7;
            var21 = 20;
            var21 = var20[var21];
            var22 = var14.bind(var5)(var21);
            var21 = {};
            var21['message'] = var25;
            var21['visible'] = var24;
            var21['itemType'] = var16;
            var21 = var23.bind(var5)(var22, var21);
            var12[2] = var21;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var15.footer;
            var7['style'] = var10;
            var12 = _closure1_slot7;
            var11 = _closure1_slot4;
            var10 = {};
            var15 = var15.ICYMICardInteractionRow;
            var10['style'] = var15;
            var15 = _closure1_slot7;
            var13 = 21;
            var13 = var20[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['message'] = var17;
            var13['channel'] = var19;
            var13['guild'] = var18;
            var18 = 'base';
            var13['backgroundVariant'] = var18;
            var17 = var17.id;
            var13['id'] = var17;
            var13['itemType'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var _closure1_slot10 = var2;
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
    var6 = var6.jsxs;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createICYMIStyles;
    var6 = function(arg1) {
        var3 = arg1;
        var1 = {};
        var2 = {};
        var4 = 1;
        var2['flex'] = var4;
        var4 = var3.inset;
        var2['paddingLeft'] = var4;
        var1['pressable'] = var2;
        var2 = {};
        var4 = var3.margin;
        var2['marginHorizontal'] = var4;
        var1['container'] = var2;
        var2 = {};
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var4 = 6;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.spacing;
        var4 = var4.PX_8;
        var2['marginTop'] = var4;
        var4 = var3.margin;
        var2['marginBottom'] = var4;
        var1['subtitle'] = var2;
        var2 = {};
        var4 = 'flex-end';
        var2['justifyContent'] = var4;
        var4 = var3.inset;
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
        var1['ICYMICardInteractionRow'] = var2;
        return var1;
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot9 = var6;
    var6 = 22;
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