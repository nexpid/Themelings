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
case 0:
            var2 = arg1;
            var19 = var2.channel;
            var _closure2_slot0 = var19;
            var28 = var2.selected;
            var16 = var2.threadId;
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
            var17 = var3.bind(var4)();
            var _closure2_slot3 = var17;
            var3 = var19.id;
            var _closure2_slot4 = var3;
            var13 = null;
            var5 = var13 == var19;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var19.ownerId;
case 2:
            _closure2_slot5 = var3;
            var5 = var13 == var19;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var19.parent_id;
case 4:
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
case 0:
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
                    if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot8;
                    var6 = var7.hasUnread;
                    var4 = _closure2_slot4;
                    var3 = var6.bind(var7)(var4);
case 6:
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
            var18 = var3.voiceStates;
            var25 = var3.hasVideo;
            var5 = var3.isLocked;
            var23 = var3.muted;
            var21 = var3.unread;
            var27 = var3.mentionCount;
            var24 = var3.isMentionLowImportance;
            var14 = var3.selectedVoiceChannelId;
            var10 = _closure1_slot3;
            var6 = var10.useMemo;
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var2;
            var3[2] = var9;
            var2 = var17.threadLineSegment;
            var3[3] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                    if(!var10) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var9 = 2;
case 8:
                    var5['top'] = var9;
                    var9 = '100%';
                    if(!var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
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
case 10:
                    var5['height'] = var9;
                    var9 = 0;
                    if(!var10) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var11 = 16;
                    var12 = var12[var11];
                    var11 = undefined;
                    var11 = var13.bind(var11)(var12);
                    var11 = var11.radii;
                    var9 = var11.round;
case 12:
                    var5['borderTopRightRadius'] = var9;
                    var9 = 0;
                    if(!var10) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var10 = 16;
                    var11 = var11[var10];
                    var10 = undefined;
                    var10 = var12.bind(var10)(var11);
                    var10 = var10.radii;
                    var9 = var10.round;
case 14:
                    var5['borderTopLeftRadius'] = var9;
                    var9 = 0;
                    if(!var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var10 = 16;
                    var11 = var11[var10];
                    var10 = undefined;
                    var10 = var12.bind(var10)(var11);
                    var10 = var10.radii;
                    var9 = var10.round;
case 16:
                    var5['borderBottomRightRadius'] = var9;
                    var6 = 0;
                    if(!var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 16;
                    var8 = var8[var7];
                    var7 = undefined;
                    var7 = var9.bind(var7)(var8);
                    var7 = var7.radii;
                    var6 = var7.round;
case 18:
                    var5['borderBottomLeftRadius'] = var6;
                    var1[1] = var5;
                    var2['style'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var6 = var6.bind(var10)(var2, var3);
            var2 = var13 == var18;
            var20 = 0;
            var26 = 0;
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var26 = var18.length;
case 20:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 20;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var19;
            var2['locked'] = var5;
            var2['video'] = var25;
            var2['selected'] = var28;
            var22 = var3.bind(var4)(var2);
            var10 = _closure1_slot3;
            var5 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var19;
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
            var32 = var5.bind(var10)(var2, var3);
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var19;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.isForumPost;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var2 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                    var2 = _closure2_slot9;
                    if(!(var3 != var2)) { _fun0004_ip = 22; continue _fun0004 }
case 25:
                    var3 = _closure2_slot9;
                    var2 = var3.isForumLikeChannel;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 22:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 27; continue _fun0004;
case 26:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 22;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2, var1);
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot19;
            var1 = {};
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot21;
            var6 = {};
            var10 = var17.threadLineSegment;
            var10 = var10.backgroundColor;
            var6['color'] = var10;
            var6['fontScale'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot18;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var17.threadRow;
            var6['style'] = var9;
            var11 = _closure1_slot17;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var17.unreadContainer;
            var9['style'] = var12;
            var12 = var21;
            if(!var12) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var33 = _closure1_slot17;
            var31 = _closure1_slot4;
            var30 = {};
            var34 = var17.unreadIcon;
            var30['style'] = var34;
            var12 = var33.bind(var4)(var31, var30);
case 28:
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot17;
            var11 = _closure1_slot4;
            var10 = {};
            var30 = var17.spineSpacer;
            var10['style'] = var30;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot17;
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var10 = 24;
            var10 = var31[var10];
            var11 = var30.bind(var4)(var10);
            var10 = {};
            var10['onPress'] = var32;
            var10['onLongPress'] = var29;
            var17 = var17.container;
            var10['style'] = var17;
            var17 = true;
            var10['accessible'] = var17;
            var29 = 'button';
            var10['accessibilityRole'] = var29;
            var29 = 25;
            var29 = var31[var29];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var29['channel'] = var19;
            var29['unread'] = var21;
            var29['mentionCount'] = var27;
            var29 = var30.bind(var4)(var29);
            var10['accessibilityLabel'] = var29;
            var29 = {};
            var29['selected'] = var28;
            var10['accessibilityState'] = var29;
            var10['channel'] = var19;
            var10['selected'] = var28;
            var10['muted'] = var23;
            var10['unread'] = var21;
            var21 = _closure1_slot15;
            var21 = var21.ALL_MESSAGES;
            var10['resolvedUnreadSetting'] = var21;
            var10['hideIcon'] = var17;
            if(!(var20 !== var27)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var23 = _closure1_slot17;
            var21 = _closure1_slot1;
            var28 = _closure1_slot2;
            var17 = 27;
            var17 = var28[var17];
            var21 = var21.bind(var4)(var17);
            var17 = {};
            var17['value'] = var27;
            var17['isMentionLowImportance'] = var24;
            var17 = var23.bind(var4)(var21, var17);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var21 = null;
            if(!var22) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var24 = _closure1_slot17;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 26;
            var22 = var27[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.ConnectedUserLimit;
            var22 = {};
            var22['userCount'] = var26;
            var22['video'] = var25;
            var22['channel'] = var19;
            var21 = var24.bind(var4)(var23, var22);
case 33:
            var17 = var21;
case 32:
            var10['channelInfo'] = var17;
            var17 = var18.length;
            var13 = null;
            if(!(var20 !== var17)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            if(!(var14 !== var16)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var16 = var18.length;
            var14 = 1;
            if(!(var14 !== var16)) { _fun0001_ip = 37; continue _fun0001 }
case 39:
            var17 = _closure1_slot17;
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var14 = 29;
            var14 = var22[var14];
            var16 = var16.bind(var4)(var14);
            var14 = {'users': null, 'max': 8, 'guildId': null, 'renderIcon': false, 'noPadding': true};
            var21 = _closure1_slot0;
            var20 = 30;
            var20 = var22[var20];
            var22 = var21.bind(var4)(var20);
            var21 = var22.computeSummarizedVoiceUsers;
            var20 = {'channels': null, 'selectedChannelId': null, 'selectedVoiceChannelId': null};
            var23 = new Array(1);
            var23[0] = var19;
            var20['channels'] = var23;
            var23 = {};
            var24 = var19.id;
            var23[var24] = var18;
            var20['voiceStates'] = var23;
            var20 = var21.bind(var22)(var20);
            var14['users'] = var20;
            var20 = var19.guild_id;
            var14['guildId'] = var20;
            var14 = var17.bind(var4)(var16, var14);
            _fun0001_ip = 40; continue _fun0001;
case 37:
            var17 = _closure1_slot17;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 28;
            var15 = var20[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['channel'] = var19;
            var19 = false;
            var15['collapsed'] = var19;
            var15['voiceStates'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 40:
            var13 = var14;
case 35:
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
    var4 = 8;
    var4 = var6[var4];
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
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10['borderRadius'] = var13;
    var4['container'] = var10;
    var10 = {'flex': 0, 'flexDirection': 'row', 'alignSelf': 'stretch'};
    var4['threadRow'] = var10;
    var10 = {'width': 8, 'alignItems': 'flex-start', 'justifyContent': 'flex-start'};
    var4['unreadContainer'] = var10;
    var10 = {};
    var13 = 28;
    var10['width'] = var13;
    var4['spineSpacer'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'backgroundColor': null, 'marginLeft': 4294967292, 'marginTop': 12};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_ACTIVE;
    var10['backgroundColor'] = var13;
    var4['unreadIcon'] = var10;
    var10 = {'backgroundColor': null, 'width': 2, 'position': 'absolute', 'left': 23};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.SPINE_DEFAULT;
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
case 0:
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
            if(var3) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var4 = _closure1_slot17;
            var3 = _closure1_slot22;
            var2 = {};
            var2['channel'] = var10;
            var2['threadId'] = var9;
            var2['threadIndex'] = var8;
            var2['threadCount'] = var7;
            var2['selected'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 41:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();