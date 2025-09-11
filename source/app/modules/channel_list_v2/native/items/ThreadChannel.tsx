// app/modules/channel_list_v2/native/items/ThreadChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ThreadChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var22 = var2.channel;
            var _closure2_slot0 = var22;
            var29 = var2.selected;
            var17 = var2.threadId;
            var11 = var2.threadIndex;
            var _closure2_slot1 = var11;
            var2 = var2.threadCount;
            var _closure2_slot2 = var2;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var3 = _closure1_slot20;
            var19 = var3.bind(var4)();
            var _closure2_slot3 = var19;
            var3 = var22.id;
            var _closure2_slot4 = var3;
            var13 = null;
            var5 = var13 == var22;
            var3 = undefined;
            if(var5) { _fun0001_ip = 109; continue _fun0001 }
 103:
            var3 = var22.ownerId;
 109:
            _closure2_slot5 = var3;
            var5 = var13 == var22;
            var3 = undefined;
            if(var5) { _fun0001_ip = 128; continue _fun0001 }
 122:
            var3 = var22.parent_id;
 128:
            _closure2_slot6 = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 18;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var3 = var7.useFontScale;
            var9 = var3.bind(var7)();
            _closure2_slot7 = var9;
            var3 = 19;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var5 = new Array(8);
            var5[0] = var3;
            var3 = _closure1_slot5;
            var5[1] = var3;
            var3 = _closure1_slot10;
            var5[2] = var3;
            var3 = _closure1_slot12;
            var5[3] = var3;
            var3 = _closure1_slot11;
            var5[4] = var3;
            var3 = _closure1_slot8;
            var5[5] = var3;
            var3 = _closure1_slot9;
            var5[6] = var3;
            var3 = _closure1_slot7;
            var5[7] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.isMuted;
                    var1 = _closure2_slot4;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var7 = _closure1_slot10;
                    var6 = var7.getUser;
                    var4 = _closure2_slot5;
                    var4 = var6.bind(var7)(var4);
                    var1['user'] = var4;
                    var7 = _closure1_slot6;
                    var6 = var7.getChannel;
                    var4 = _closure2_slot6;
                    var4 = var6.bind(var7)(var4);
                    var1['parentChannel'] = var4;
                    var6 = _closure1_slot12;
                    var4 = var6.getVoiceStatesForChannel;
                    var8 = _closure2_slot0;
                    var4 = var4.bind(var6)(var8);
                    var1['voiceStates'] = var4;
                    var7 = _closure1_slot11;
                    var6 = var7.hasVideo;
                    var4 = var8.id;
                    var4 = var6.bind(var7)(var4);
                    var1['hasVideo'] = var4;
                    var7 = _closure1_slot7;
                    var6 = var7.can;
                    var4 = _closure1_slot14;
                    var4 = var4.CONNECT;
                    var4 = var6.bind(var7)(var4, var8);
                    var4 = !var4;
                    var1['isLocked'] = var4;
                    var1['muted'] = var3;
                    var3 = !var3;
                    if(!var3) { _fun0002_ip = 186; continue _fun0002 }
 167:
                    var7 = _closure1_slot8;
                    var6 = var7.hasUnread;
                    var4 = _closure2_slot4;
                    var3 = var6.bind(var7)(var4);
 186:
                    var1['unread'] = var3;
                    var4 = _closure1_slot8;
                    var3 = var4.getMentionCount;
                    var5 = _closure2_slot4;
                    var3 = var3.bind(var4)(var5);
                    var1['mentionCount'] = var3;
                    var4 = _closure1_slot8;
                    var3 = var4.getIsMentionLowImportance;
                    var3 = var3.bind(var4)(var5);
                    var1['isMentionLowImportance'] = var3;
                    var3 = _closure1_slot9;
                    var2 = var3.getVoiceChannelId;
                    var2 = var2.bind(var3)();
                    var1['selectedVoiceChannelId'] = var2;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var5, var3);
            var8 = var3.user;
            _closure2_slot8 = var8;
            var7 = var3.parentChannel;
            _closure2_slot9 = var7;
            var21 = var3.voiceStates;
            var26 = var3.hasVideo;
            var5 = var3.isLocked;
            var24 = var3.muted;
            var20 = var3.unread;
            var28 = var3.mentionCount;
            var25 = var3.isMentionLowImportance;
            var14 = var3.selectedVoiceChannelId;
            var10 = _closure1_slot3;
            var6 = var10.useMemo;
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var2;
            var3[2] = var9;
            var2 = var19.threadLineSegment;
            var3[3] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var6 = 0;
                    var10 = var6 === var2;
                    var3 = _closure2_slot2;
                    var1 = 1;
                    var1 = var3 - var1;
                    var8 = var2 === var1;
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var5 = var1.threadLineSegment;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var5 = {};
                    var9 = 0;
                    if(!var10) { _fun0003_ip = 69; continue _fun0003 }
 66:
                    var9 = 2;
 69:
                    var5['top'] = var9;
                    var9 = '100%';
                    if(!var8) { _fun0003_ip = 143; continue _fun0003 }
 82:
                    var14 = global;
                    var13 = var14.Math;
                    var12 = var13.ceil;
                    var16 = var14.Math;
                    var15 = var16.max;
                    var14 = _closure2_slot7;
                    var11 = 1.2;
                    var11 = var11 * var14;
                    var14 = 8;
                    var11 = var11 * var14;
                    var11 = var15.bind(var16)(var14, var11);
                    var9 = var12.bind(var13)(var11);
 143:
                    var5['height'] = var9;
                    var9 = 0;
                    if(!var10) { _fun0003_ip = 184; continue _fun0003 }
 152:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var11 = 16;
                    var12 = var12[var11];
                    var11 = undefined;
                    var11 = var13.bind(var11)(var12);
                    var11 = var11.radii;
                    var9 = var11.round;
 184:
                    var5['borderTopRightRadius'] = var9;
                    var9 = 0;
                    if(!var10) { _fun0003_ip = 226; continue _fun0003 }
 194:
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var10 = 16;
                    var11 = var11[var10];
                    var10 = undefined;
                    var10 = var12.bind(var10)(var11);
                    var10 = var10.radii;
                    var9 = var10.round;
 226:
                    var5['borderTopLeftRadius'] = var9;
                    var9 = 0;
                    if(!var8) { _fun0003_ip = 268; continue _fun0003 }
 236:
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var10 = 16;
                    var11 = var11[var10];
                    var10 = undefined;
                    var10 = var12.bind(var10)(var11);
                    var10 = var10.radii;
                    var9 = var10.round;
 268:
                    var5['borderBottomRightRadius'] = var9;
                    var6 = 0;
                    if(!var8) { _fun0003_ip = 310; continue _fun0003 }
 278:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 16;
                    var8 = var8[var7];
                    var7 = undefined;
                    var7 = var9.bind(var7)(var8);
                    var7 = var7.radii;
                    var6 = var7.round;
 310:
                    var5['borderBottomLeftRadius'] = var6;
                    var1[1] = var5;
                    var2['style'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var6 = var6.bind(var10)(var2, var3);
            var2 = var13 == var21;
            var16 = 0;
            var27 = 0;
            if(var2) { _fun0001_ip = 396; continue _fun0001 }
 391:
            var27 = var21.length;
 396:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 20;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var22;
            var2['locked'] = var5;
            var2['video'] = var26;
            var2['selected'] = var29;
            var23 = var3.bind(var4)(var2);
            var10 = _closure1_slot3;
            var5 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var22;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.transitionToThread;
                var3 = _closure2_slot0;
                var2 = {};
                var6 = _closure1_slot16;
                var6 = var6.CHANNEL_LIST;
                var2['source'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var30 = var5.bind(var10)(var2, var3);
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var22;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.isForumPost;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0004_ip = 55; continue _fun0004 }
 20:
                    var2 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0004_ip = 55; continue _fun0004 }
 30:
                    var2 = _closure2_slot9;
                    if(!(var3 != var2)) { _fun0004_ip = 55; continue _fun0004 }
 38:
                    var3 = _closure2_slot9;
                    var2 = var3.isForumLikeChannel;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0004_ip = 96; continue _fun0004 }
 55:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 135; continue _fun0004;
 96:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 22;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2, var1);
 135:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot19;
            var1 = {};
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot21;
            var6 = {};
            var10 = var19.threadLineSegment;
            var10 = var10.backgroundColor;
            var6['color'] = var10;
            var6['fontScale'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot18;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var19.threadRow;
            var6['style'] = var9;
            var11 = _closure1_slot17;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var19.unreadContainer;
            var9['style'] = var12;
            var12 = var20;
            if(!var12) { _fun0001_ip = 640; continue _fun0001 }
 614:
            var33 = _closure1_slot17;
            var32 = _closure1_slot4;
            var31 = {};
            var34 = var19.unreadIcon;
            var31['style'] = var34;
            var12 = var33.bind(var4)(var32, var31);
 640:
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot17;
            var11 = _closure1_slot4;
            var10 = {};
            var31 = var19.spineSpacer;
            var10['style'] = var31;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot17;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var10 = 24;
            var10 = var32[var10];
            var11 = var31.bind(var4)(var10);
            var10 = {};
            var10['onPress'] = var30;
            var10['onLongPress'] = var15;
            var15 = var19.container;
            var10['style'] = var15;
            var15 = true;
            var10['accessible'] = var15;
            var30 = 'button';
            var10['accessibilityRole'] = var30;
            var30 = 25;
            var30 = var32[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var30['channel'] = var22;
            var30['unread'] = var20;
            var30['mentionCount'] = var28;
            var30 = var31.bind(var4)(var30);
            var10['accessibilityLabel'] = var30;
            var30 = {};
            var30['selected'] = var29;
            var10['accessibilityState'] = var30;
            var10['channel'] = var22;
            var10['selected'] = var29;
            var10['muted'] = var24;
            var10['unread'] = var20;
            var20 = _closure1_slot15;
            var20 = var20.ALL_MESSAGES;
            var10['resolvedUnreadSetting'] = var20;
            var10['hideIcon'] = var15;
            if(!(var16 !== var28)) { _fun0001_ip = 882; continue _fun0001 }
 839:
            var24 = _closure1_slot17;
            var20 = _closure1_slot1;
            var29 = _closure1_slot2;
            var15 = 27;
            var15 = var29[var15];
            var20 = var20.bind(var4)(var15);
            var15 = {};
            var15['value'] = var28;
            var15['isMentionLowImportance'] = var25;
            var15 = var24.bind(var4)(var20, var15);
            _fun0001_ip = 942; continue _fun0001;
 882:
            var20 = null;
            if(!var23) { _fun0001_ip = 939; continue _fun0001 }
 887:
            var25 = _closure1_slot17;
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 26;
            var23 = var28[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.ConnectedUserLimit;
            var23 = {};
            var23['userCount'] = var27;
            var23['video'] = var26;
            var23['channel'] = var22;
            var20 = var25.bind(var4)(var24, var23);
 939:
            var15 = var20;
 942:
            var10['channelInfo'] = var15;
            var15 = var21.length;
            var13 = null;
            if(!(var16 !== var15)) { _fun0001_ip = 1196; continue _fun0001 }
 961:
            var16 = _closure1_slot17;
            var15 = _closure1_slot4;
            if(!(var14 !== var17)) { _fun0001_ip = 1123; continue _fun0001 }
 976:
            var14 = {};
            var17 = var19.voiceStatesCollapsed;
            var14['style'] = var17;
            var23 = _closure1_slot17;
            var20 = _closure1_slot1;
            var26 = _closure1_slot2;
            var17 = 29;
            var17 = var26[var17];
            var20 = var20.bind(var4)(var17);
            var17 = {'users': null, 'max': 8, 'guildId': null, 'renderIcon': false, 'noPadding': true};
            var25 = _closure1_slot0;
            var24 = 30;
            var24 = var26[var24];
            var26 = var25.bind(var4)(var24);
            var25 = var26.computeSummarizedVoiceUsers;
            var24 = {'channels': null, 'selectedChannelId': null, 'selectedVoiceChannelId': null};
            var27 = new Array(1);
            var27[0] = var22;
            var24['channels'] = var27;
            var27 = {};
            var28 = var22.id;
            var27[var28] = var21;
            var24['voiceStates'] = var27;
            var24 = var25.bind(var26)(var24);
            var17['users'] = var24;
            var24 = var22.guild_id;
            var17['guildId'] = var24;
            var17 = var23.bind(var4)(var20, var17);
            var14['children'] = var17;
            _fun0001_ip = 1190; continue _fun0001;
 1123:
            var17 = {};
            var19 = var19.voiceStates;
            var17['style'] = var19;
            var20 = _closure1_slot17;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 28;
            var18 = var23[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18['channel'] = var22;
            var22 = false;
            var18['collapsed'] = var22;
            var18['voiceStates'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17['children'] = var18;
            var14 = var17;
 1190:
            var13 = var16.bind(var4)(var15, var14);
 1196:
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var13 = 8;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getScaledChannelRowHeight;
    var _closure1_slot13 = var7;
    var11 = var4.CHANNEL_MARGIN_VERTICAL;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var7 = var4.jsxs;
    var _closure1_slot18 = var7;
    var4 = var4.Fragment;
    var _closure1_slot19 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'marginVertical': null, 'marginStart': 2, 'marginEnd': 8, 'borderRadius': null, 'flex': 1};
    var10['marginVertical'] = var11;
    var11 = 16;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10['borderRadius'] = var14;
    var4['container'] = var10;
    var10 = {'flex': 0, 'flexDirection': 'row', 'alignSelf': 'stretch'};
    var4['threadRow'] = var10;
    var10 = {'width': 8, 'alignItems': 'flex-start', 'justifyContent': 'flex-start'};
    var4['unreadContainer'] = var10;
    var10 = {};
    var14 = 28;
    var10['width'] = var14;
    var4['spineSpacer'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'backgroundColor': null, 'marginLeft': 4294967292, 'marginTop': 12};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_ACTIVE;
    var10['backgroundColor'] = var14;
    var4['unreadIcon'] = var10;
    var10 = {};
    var10['marginBottom'] = var13;
    var4['voiceStates'] = var10;
    var10 = {};
    var10['marginBottom'] = var13;
    var4['voiceStatesCollapsed'] = var10;
    var10 = {'backgroundColor': null, 'width': 2, 'position': 'absolute', 'left': 23};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.THREAD_CHANNEL_SPINE;
    var10['backgroundColor'] = var11;
    var4['threadLineSegment'] = var10;
    var10 = {'position': 'absolute', 'left': 23};
    var4['threadSpineCurve'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot20 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var8 = var1.color;
        var11 = var1.fontScale;
        var4 = _closure1_slot17;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 17;
        var1 = var9[var5];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {'width': 12, 'height': 16};
        var12 = 16;
        var7 = {'position': 'absolute', 'left': 23};
        var10 = _closure1_slot13;
        var10 = var10.bind(var3)(var11);
        var11 = 2;
        var10 = var10 / var11;
        var10 = var10 - var12;
        var10 = var10 + var11;
        var7['top'] = var10;
        var1['style'] = var7;
        var7 = _closure1_slot17;
        var6 = _closure1_slot0;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Path;
        var5 = {};
        var5['fill'] = var8;
        var8 = 'M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z';
        var5['d'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/items/ThreadChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedThreadChannel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var9 = var2.threadId;
            var _closure2_slot0 = var9;
            var8 = var2.threadIndex;
            var7 = var2.threadCount;
            var6 = var2.selected;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 19;
            var3 = var5[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var3);
            var4 = var10.useStateFromStores;
            var11 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var4.bind(var10)(var3, var1);
            var1 = null;
            var3 = var1 == var10;
            if(var3) { _fun0005_ip = 137; continue _fun0005 }
 97:
            var4 = _closure1_slot17;
            var3 = _closure1_slot22;
            var2 = {};
            var2['channel'] = var10;
            var2['threadId'] = var9;
            var2['threadIndex'] = var8;
            var2['threadCount'] = var7;
            var2['selected'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 137:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();