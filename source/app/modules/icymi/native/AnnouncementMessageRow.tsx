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
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createICYMIStyles;
    var4 = function(arg1) {
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
        var2['marginVertical'] = var4;
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var5 = 10;
        var6 = var6[var5];
        var5 = undefined;
        var5 = var7.bind(var5)(var6);
        var5 = var5.space;
        var5 = var5.PX_8;
        var2['gap'] = var5;
        var4 = _closure1_slot10;
        var2['paddingHorizontal'] = var4;
        var3 = var3.inset;
        var2['marginLeft'] = var3;
        var1['footer'] = var2;
        return var1;
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var22 = var2.unread;
            var12 = var2.message;
            var _closure2_slot0 = var12;
            var13 = var2.guild;
            var _closure2_slot1 = var13;
            var14 = var2.channel;
            var _closure2_slot2 = var14;
            var18 = var2.visible;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
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
            var21 = var5.bind(var7)(var3, var2);
            var2 = _closure1_slot13;
            var9 = var2.bind(var4)();
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var2 = null;
            var3 = var2 == var13;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var13.id;
case 2:
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var12.author;
            var2 = var2.id;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
case 4:
                    if(!(var6 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot1;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = _closure2_slot1;
                    var3 = var6.id;
case 8:
                    var2 = _closure2_slot0;
                    var2 = var2.author;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
case 6:
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot3;
            var7 = var5.useCallback;
            var2 = var14.id;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var12.id;
            var3[1] = var2;
            var2 = function() {
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 13;
                var2 = var5[var4];
                var1 = undefined;
                var12 = var6.bind(var1)(var2);
                var11 = var12.itemInteracted;
                var9 = _closure2_slot0;
                var10 = var9.id;
                var8 = 'announcement';
                var7 = 'long_press_channel';
                var7 = var11.bind(var12)(var10, var8, var7);
                var4 = var5[var4];
                var7 = var6.bind(var1)(var4);
                var6 = var7.feedItemActioned;
                var4 = {};
                var9 = var9.id;
                var4['itemId'] = var9;
                var4['itemType'] = var8;
                var8 = {'actionGestureType': 'long_press', 'actionTargetElement': 'item_header', 'actionIntentType': 'open', 'actionDestinationType': 'channel'};
                var4['actionParameters'] = var8;
                var4 = var6.bind(var7)(var4);
                var4 = _closure1_slot0;
                var3 = 14;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openChannelLongPressActionSheet;
                var2 = _closure2_slot2;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var7.bind(var5)(var2, var3);
            var8 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var12;
            var2 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 13;
                var6 = var4[var3];
                var1 = undefined;
                var12 = var5.bind(var1)(var6);
                var11 = var12.itemInteracted;
                var6 = _closure2_slot0;
                var10 = var6.id;
                var9 = 'announcement';
                var8 = 'long_press_message';
                var8 = var11.bind(var12)(var10, var9, var8);
                var3 = var4[var3];
                var8 = var5.bind(var1)(var3);
                var5 = var8.feedItemActioned;
                var3 = {};
                var10 = var6.id;
                var3['itemId'] = var10;
                var3['itemType'] = var9;
                var9 = {'actionGestureType': 'long_press', 'actionTargetElement': 'item_container', 'actionIntentType': 'open', 'actionDestinationType': 'channel'};
                var3['actionParameters'] = var9;
                var3 = var5.bind(var8)(var3);
                var8 = _closure1_slot9;
                var5 = var8.getUser;
                var3 = var6.author;
                var3 = var3.id;
                var5 = var5.bind(var8)(var3);
                var3 = _closure1_slot0;
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
            var16 = var8.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var12;
            var8 = var14.id;
            var2[1] = var8;
            var8 = var13.id;
            var2[2] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var3 = var5[var2];
                    var1 = undefined;
                    var12 = var7.bind(var1)(var3);
                    var11 = var12.itemInteracted;
                    var6 = _closure2_slot0;
                    var10 = var6.id;
                    var9 = 'announcement';
                    var8 = 'press_message';
                    var8 = var11.bind(var12)(var10, var9, var8);
                    var5 = var5[var2];
                    var8 = var7.bind(var1)(var5);
                    var7 = var8.feedItemActioned;
                    var5 = {};
                    var10 = var6.id;
                    var5['itemId'] = var10;
                    var5['itemType'] = var9;
                    var9 = {'actionGestureType': 'press', 'actionTargetElement': 'item_container', 'actionIntentType': 'navigate', 'actionDestinationType': 'channel'};
                    var5['actionParameters'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = null;
                    if(!(var5 != var6)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
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
                    var4 = 16;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.navigateToPost;
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 10:
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 17;
            var1 = var15[var1];
            var2 = var17.bind(var4)(var1);
            var1 = var2.useGravityMessage;
            var5 = var1.bind(var2)(var12);
            var3 = _closure1_slot12;
            var10 = _closure1_slot1;
            var1 = 18;
            var1 = var15[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var8 = 19;
            var11 = var15[var8];
            var11 = var17.bind(var4)(var11);
            var20 = var11.intl;
            var11 = var20.string;
            var8 = var15[var8];
            var8 = var17.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["8P08G9"];
            var8 = var11.bind(var20)(var8);
            var1['actionLabel'] = var8;
            var8 = var12.id;
            var1['id'] = var8;
            var11 = 'announcement';
            var1['interactionType'] = var11;
            var8 = var14.id;
            var1['channelId'] = var8;
            var8 = 20;
            var8 = var15[var8];
            var23 = var10.bind(var4)(var8);
            var20 = var23.extractTimestamp;
            var8 = var12.id;
            var8 = var20.bind(var23)(var8);
            var1['timestamp'] = var8;
            var1['onHeaderPress'] = var19;
            var1['onHeaderLongPress'] = var7;
            var1['message'] = var5;
            var5 = true;
            var1['shouldFeatureUser'] = var5;
            var8 = _closure1_slot11;
            var5 = 21;
            var5 = var15[var5];
            var5 = var17.bind(var4)(var5);
            var7 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var19;
            var5['onLongPress'] = var16;
            var16 = 'button';
            var5['accessibilityRole'] = var16;
            var16 = 22;
            var19 = var15[var16];
            var20 = var10.bind(var4)(var19);
            var19 = {};
            var19['channel'] = var14;
            var19['unread'] = var22;
            var19 = var20.bind(var4)(var19);
            var5['accessibilityLabel'] = var19;
            var16 = var15[var16];
            var20 = var17.bind(var4)(var16);
            var19 = var20.getChannelA11yHint;
            var16 = {};
            var16['channel'] = var14;
            var16['muted'] = var21;
            var16 = var19.bind(var20)(var16);
            var5['accessibilityHint'] = var16;
            var16 = 130;
            var5['unstable_pressDelay'] = var16;
            var16 = var9.pressable;
            var5['style'] = var16;
            var16 = 23;
            var16 = var15[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.MessageRowContent;
            var16 = {};
            var16['message'] = var12;
            var16['channel'] = var14;
            var16['guild'] = var13;
            var19 = 5;
            var16['lineClamp'] = var19;
            var16['visible'] = var18;
            var16 = var8.bind(var4)(var17, var16);
            var5['children'] = var16;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.footer;
            var6['style'] = var9;
            var9 = 24;
            var9 = var15[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['message'] = var12;
            var9['channel'] = var14;
            var9['guild'] = var13;
            var13 = 'base';
            var9['backgroundVariant'] = var13;
            var12 = var12.id;
            var9['id'] = var12;
            var9['itemType'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/AnnouncementMessageRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AnnouncementMessageRowWrapper(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var10 = var2.unread;
            var9 = var2.message;
            var _closure2_slot0 = var9;
            var6 = var2.visible;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = 11;
            var3 = var11[var13];
            var12 = var4.bind(var5)(var3);
            var8 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var12)(var7, var3);
            var _closure2_slot1 = var8;
            var3 = var11[var13];
            var14 = var4.bind(var5)(var3);
            var12 = var14.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
case 12:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var12.bind(var14)(var7, var3);
            var3 = 17;
            var3 = var11[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useGravityMessage;
            var9 = var3.bind(var4)(var9);
            var4 = null;
            var3 = var4 == var9;
            var11 = undefined;
            if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var11 = var9.author;
case 14:
            _closure2_slot2 = var11;
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var13 = var12.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var14 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.isBlockedOrIgnored;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                    var4 = _closure2_slot2;
                    var1 = var4.id;
case 12:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var3, var1);
            var12 = var4 == var8;
            var1 = null;
            if(var12) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var12 = var4 == var7;
            var1 = null;
            if(var12) { _fun0004_ip = 16; continue _fun0004 }
case 18:
            var12 = var4 == var9;
            var1 = null;
            if(var12) { _fun0004_ip = 16; continue _fun0004 }
case 19:
            var11 = var4 == var11;
            var1 = null;
            if(var11) { _fun0004_ip = 16; continue _fun0004 }
case 20:
            var1 = null;
            if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 21:
            var4 = _closure1_slot11;
            var3 = _closure1_slot14;
            var2 = {};
            var2['unread'] = var10;
            var2['message'] = var9;
            var2['channel'] = var8;
            var2['guild'] = var7;
            var2['visible'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();