// app/modules/launchpad/native/LaunchPadUnreadServers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function HistorySeparator() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var8.guildHistorySeparatorWrapper;
        var1['style'] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var8.guildHistorySeparator;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function renderHistorySection() {
        var4 = _closure1_slot10;
        var3 = _closure1_slot15;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {};
    var12 = 8;
    var4['marginTop'] = var12;
    var7['listWrapper'] = var4;
    var4 = {'marginBottom': 4, 'flexShrink': 0};
    var7['list'] = var4;
    var4 = {};
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var4['backgroundColor'] = var11;
    var7['maskStrokeStyle'] = var4;
    var4 = {'position': 'relative', 'paddingVertical': 2, 'justifyContent': 'center', 'alignItems': 'center'};
    var7['privateChannelWrapper'] = var4;
    var4 = 24;
    var11 = {'width': 48, 'height': 48, 'borderRadius': 24, 'overflow': 'hidden'};
    var7['privateChannelIcon'] = var11;
    var11 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginLeft': 6, 'marginTop': 6};
    var7['badgeWrapper'] = var11;
    var11 = {'paddingVertical': 2, 'justifyContent': 'center', 'alignItems': 'center'};
    var7['guildWrapper'] = var11;
    var11 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var7['guildHistorySeparatorWrapper'] = var11;
    var11 = {'width': 2, 'height': 32};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var11['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_MOD_STRONG;
    var11['backgroundColor'] = var12;
    var7['guildHistorySeparator'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot12 = var7;
    var9 = var8.memo;
    var7 = function GuildItemInner(arg1) {
        var2 = arg1;
        var12 = var2.guildId;
        var _closure2_slot0 = var12;
        var11 = var2.selected;
        var2 = var2.onGuildSelect;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot12;
        var4 = undefined;
        var8 = var3.bind(var4)();
        var6 = _closure1_slot3;
        var7 = var6.useCallback;
        var3 = new Array(2);
        var3[0] = var12;
        var3[1] = var2;
        var2 = function() {
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var10 = var7.bind(var6)(var2, var3);
        var3 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var12;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.transitionToGuild;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var9 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var8.guildWrapper;
        var1['style'] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot1;
        var13 = _closure1_slot2;
        var5 = 10;
        var5 = var13[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {'size': 48, 'borderRadius': 16};
        var5['guildId'] = var12;
        var5['selected'] = var11;
        var5['onPress'] = var10;
        var5['onLongPress'] = var9;
        var8 = var8.maskStrokeStyle;
        var8 = var8.backgroundColor;
        var5['backgroundColor'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = var9.bind(var8)(var7);
    var _closure1_slot13 = var7;
    var9 = var8.memo;
    var7 = function PrivateChannelItemInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.channelId;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot12;
            var5 = undefined;
            var14 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var2 = var6[var1];
            var9 = var4.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var9)(var7, var2);
            var _closure2_slot1 = var2;
            var7 = var6[var1];
            var10 = var4.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 69; continue _fun0002 }
 18:
                    var5 = _closure2_slot1;
                    var3 = var5.isPrivate;
                    var3 = var3.bind(var5)();
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 69; continue _fun0002 }
 37:
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var5 = _closure2_slot1;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
 69:
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var8, var7);
            var _closure2_slot2 = var9;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = 0;
                    if(!var3) { _fun0003_ip = 45; continue _fun0003 }
 18:
                    var4 = _closure1_slot7;
                    var3 = var4.getMentionCount;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var16 = var6.bind(var7)(var4, var1);
            var1 = null;
            var4 = var1 == var2;
            var6 = undefined;
            if(var4) { _fun0001_ip = 179; continue _fun0001 }
 174:
            var6 = var2.type;
 179:
            var4 = _closure1_slot9;
            var4 = var4.DM;
            if(!(var6 === var4)) { _fun0001_ip = 200; continue _fun0001 }
 193:
            if(!(var1 == var9)) { _fun0001_ip = 385; continue _fun0001 }
 200:
            if(!(var1 != var2)) { _fun0001_ip = 217; continue _fun0001 }
 204:
            var4 = var2.isGroupDM;
            var4 = var4.bind(var2)();
            if(var4) { _fun0001_ip = 315; continue _fun0001 }
 217:
            var4 = var1 != var2;
            var7 = undefined;
            if(!var4) { _fun0001_ip = 464; continue _fun0001 }
 229:
            var8 = _closure1_slot10;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 14;
            var4 = var13[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var12 = var14.privateChannelIcon;
            var10 = new Array(1);
            var10[0] = var12;
            var4['style'] = var10;
            var12 = _closure1_slot0;
            var10 = 15;
            var10 = var13[var10];
            var12 = var12.bind(var5)(var10);
            var10 = var12.getChannelIconSource;
            var10 = var10.bind(var12)(var2);
            var4['source'] = var10;
            var7 = var8.bind(var5)(var6, var4);
            _fun0001_ip = 464; continue _fun0001;
 315:
            var8 = _closure1_slot10;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 13;
            var4 = var13[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var2;
            var12 = _closure1_slot0;
            var10 = 12;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.LARGE_48;
            var4['size'] = var10;
            var7 = var8.bind(var5)(var6, var4);
            _fun0001_ip = 464; continue _fun0001;
 385:
            var8 = _closure1_slot10;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 12;
            var4 = var13[var10];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var12 = var14.privateChannelIcon;
            var4['style'] = var12;
            var4['user'] = var9;
            var4['guildId'] = var5;
            var12 = _closure1_slot0;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.LARGE_48;
            var4['size'] = var10;
            var7 = var8.bind(var5)(var6, var4);
 464:
            var8 = _closure1_slot3;
            var6 = var8.useCallback;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var2;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0004_ip = 161; continue _fun0004 }
 16:
                    var1 = _closure2_slot1;
                    var5 = var1.type;
                    var2 = _closure1_slot9;
                    var2 = var2.DM;
                    if(!(var5 === var2)) { _fun0004_ip = 50; continue _fun0004 }
 42:
                    var2 = _closure2_slot2;
                    if(!(var3 == var2)) { _fun0004_ip = 104; continue _fun0004 }
 50:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.transitionToChannel;
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var2 = {};
                    var7 = true;
                    var2['navigationReplace'] = var7;
                    var2 = var5.bind(var6)(var3, var2);
                    _fun0004_ip = 161; continue _fun0004;
 104:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openPrivateChannel;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var5 = var4.id;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['recipientIds'] = var4;
                    var1 = var2.bind(var3)(var1);
 161:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var3, var4);
            var2 = var1 != var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 666; continue _fun0001 }
 510:
            var4 = _closure1_slot11;
            var3 = _closure1_slot4;
            var2 = {};
            var2['onPress'] = var6;
            var6 = var14.privateChannelWrapper;
            var2['style'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var15 = true;
            var2['accessible'] = var15;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 0;
            var7 = var16 > var7;
            if(!var7) { _fun0001_ip = 652; continue _fun0001 }
 566:
            var10 = _closure1_slot10;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var14.badgeWrapper;
            var8['style'] = var12;
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 18;
            var11 = var17[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['value'] = var16;
            var11['unread'] = var15;
            var14 = var14.maskStrokeStyle;
            var14 = var14.backgroundColor;
            var11['backgroundColor'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 652:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 666:
            return var1;
        }
    };
    var7 = var9.bind(var8)(var7);
    var _closure1_slot14 = var7;
    var7 = var8.memo;
    var2 = function LaunchPadUnreadServers(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var8 = var3.selectedGuildId;
            var _closure2_slot0 = var8;
            var1 = var3.setSelectedGuild;
            var _closure2_slot1 = var1;
            var12 = var3.unreadPrivateChannelIds;
            var _closure2_slot2 = var12;
            var14 = var3.unreadGuilds;
            var _closure2_slot3 = var14;
            var13 = var3.guildHistory;
            var _closure2_slot4 = var13;
            var4 = var3.visible;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot12;
            var5 = undefined;
            var18 = var3.bind(var5)();
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var11 = 19;
            var3 = var3[var11];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var10 = var3.width;
            var6 = _closure1_slot3;
            var7 = var6.useRef;
            var3 = -1;
            var3 = var7.bind(var6)(var3);
            var _closure2_slot6 = var3;
            var7 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var8;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = 0;
                    if(!(!(var4 >= var2))) { _fun0006_ip = 117; continue _fun0006 }
 21:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.bind(var2)(var3);
                    if(!var4) { _fun0006_ip = 117; continue _fun0006 }
 54:
                    var5 = _closure2_slot1;
                    var6 = _closure2_slot0;
                    var4 = undefined;
                    if(!(var3 !== var6)) { _fun0006_ip = 71; continue _fun0006 }
 68:
                    var4 = var3;
 71:
                    var4 = var5.bind(var2)(var4);
                    var5 = _closure2_slot6;
                    var4 = global;
                    var7 = var4.setTimeout;
                    var6 = function() {
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var3 = _closure2_slot6;
                        var2 = var3.current;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var2 = -1;
                        var3['current'] = var2;
                        return var1;
                    };
                    var4 = 400;
                    var4 = var7.bind(var2)(var6, var4);
                    var5['current'] = var4;
                    return var2;
 117:
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var2 = _closure2_slot6;
                    var1 = var2.current;
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var1 = -1;
                    var2['current'] = var1;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.transitionToGuild;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var6)(var1, var3);
            var _closure2_slot7 = var3;
            var9 = var6.useEffect;
            var7 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot6;
                    var2 = var1.current;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var9.bind(var6)(var7, var1);
            var7 = var6.useRef;
            var1 = null;
            var19 = var7.bind(var6)(var1);
            var _closure2_slot8 = var19;
            var9 = var6.useEffect;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0007_ip = 38; continue _fun0007 }
 10:
                    var1 = _closure2_slot8;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0007_ip = 38; continue _fun0007 }
 25:
                    var2 = var3.scrollToTop;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var9.bind(var6)(var4, var7);
            var7 = var6.useCallback;
            var4 = new Array(5);
            var4[0] = var14;
            var4[1] = var12;
            var4[2] = var8;
            var4[3] = var3;
            var4[4] = var13;
            var3 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var2 = arg2;
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0008_ip = 112; continue _fun0008 }
 12:
                    var1 = 1;
                    if(!(!(var3 >= var1))) { _fun0008_ip = 23; continue _fun0008 }
 19:
                    var4 = null;
                    return var4;
 23:
                    if(!(var1 !== var3)) { _fun0008_ip = 40; continue _fun0008 }
 27:
                    var1 = _closure2_slot4;
                    var8 = var1[var2];
                    _fun0008_ip = 51; continue _fun0008;
 40:
                    var1 = _closure2_slot3;
                    var8 = var1[var2];
 51:
                    var1 = null;
                    var1 = var1 != var8;
                    if(!var1) { _fun0008_ip = 110; continue _fun0008 }
 60:
                    var6 = _closure1_slot10;
                    var5 = _closure1_slot13;
                    var4 = {};
                    var4['guildId'] = var8;
                    var7 = _closure2_slot0;
                    var7 = var7 === var8;
                    var4['selected'] = var7;
                    var3 = _closure2_slot7;
                    var4['onGuildSelect'] = var3;
                    var3 = undefined;
                    var1 = var6.bind(var3)(var5, var4);
 110:
                    return var1;
 112:
                    var1 = _closure2_slot2;
                    var2 = var1[var2];
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0008_ip = 157; continue _fun0008 }
 132:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot14;
                    var3 = {};
                    var3['channelId'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 157:
                    return var1;
                }
            };
            var17 = var7.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var7 = var14.length;
            var3 = new Array(3);
            var3[0] = var7;
            var7 = var12.length;
            var3[1] = var7;
            var7 = var13.length;
            var3[2] = var7;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = 0;
                    var4 = 2;
                    var2 = arg1;
                    var1 = 0;
                    if(!(var4 === var2)) { _fun0009_ip = 69; continue _fun0009 }
 14:
                    var4 = _closure2_slot4;
                    var4 = var4.length;
                    var4 = var4 > var3;
                    var1 = 0;
                    if(!var4) { _fun0009_ip = 69; continue _fun0009 }
 35:
                    var4 = _closure2_slot2;
                    var4 = var4.length;
                    if(!(!(var4 > var3))) { _fun0009_ip = 66; continue _fun0009 }
 48:
                    var2 = _closure2_slot3;
                    var2 = var2.length;
                    var2 = var2 > var3;
                    var1 = 0;
                    if(!var2) { _fun0009_ip = 69; continue _fun0009 }
 66:
                    var1 = 10;
 69:
                    return var1;
                }
            };
            var15 = var4.bind(var6)(var2, var3);
            var2 = var14.length;
            var3 = 0;
            var9 = var2 > var3;
            if(var9) { _fun0005_ip = 343; continue _fun0005 }
 334:
            var2 = var12.length;
            var9 = var2 > var3;
 343:
            if(var9) { _fun0005_ip = 363; continue _fun0005 }
 346:
            var2 = var13.length;
            var2 = var2 > var3;
            var1 = null;
            if(!var2) { _fun0005_ip = 684; continue _fun0005 }
 363:
            var4 = _closure1_slot11;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var18.listWrapper;
            var2['style'] = var6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.renderCategoryItem;
            var6 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 22;
            var21 = var24[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            if(var9) { _fun0005_ip = 473; continue _fun0005 }
 458:
            var9 = var20.kCt2zM;
            var9 = var21.bind(var22)(var9);
            _fun0005_ip = 486; continue _fun0005;
 473:
            var20 = var20.xSY9BA;
            var9 = var21.bind(var22)(var20);
 486:
            var6['name'] = var9;
            var7 = var7.bind(var8)(var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot0;
            var20 = _closure1_slot2;
            var7 = 23;
            var7 = var20[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.AnimatedFastList;
            var7 = {};
            var7['ref'] = var19;
            var18 = var18.list;
            var7['style'] = var18;
            var18 = true;
            var7['horizontal'] = var18;
            var7['renderItem'] = var17;
            var16 = _closure1_slot16;
            var7['renderSection'] = var16;
            var7['sectionSize'] = var15;
            var15 = var12.length;
            var12 = new Array(3);
            var12[0] = var15;
            var14 = var14.length;
            var12[1] = var14;
            var13 = var13.length;
            var12[2] = var13;
            var7['sections'] = var12;
            var12 = 58;
            var7['itemSize'] = var12;
            var7['headerSize'] = var11;
            var7['footerSize'] = var11;
            var7['chunkBase'] = var10;
            var10 = false;
            var7['showsHorizontalScrollIndicator'] = var10;
            var7['showsVerticalScrollIndicator'] = var10;
            var10 = 'disabled';
            var7['stickySectionsVariant'] = var10;
            var10 = 'always';
            var7['keyboardShouldPersistTaps'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 684:
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/LaunchPadUnreadServers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();