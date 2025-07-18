// app/modules/channel_list_v2/native/items/ThreadChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
        var7 = var1.color;
        var11 = var1.fontScale;
        var4 = _closure1_slot17;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 17;
        var1 = var8[var5];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {'width': 12, 'height': 16};
        var12 = 16;
        var9 = {'position': 'absolute', 'left': 23};
        var10 = _closure1_slot13;
        var10 = var10.bind(var3)(var11);
        var11 = 2;
        var10 = var10 / var11;
        var10 = var10 - var12;
        var10 = var10 + var11;
        var9['top'] = var10;
        var1['style'] = var9;
        var6 = _closure1_slot0;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Path;
        var5 = {};
        var5['fill'] = var7;
        var7 = 'M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z';
        var5['d'] = var7;
        var5 = var4.bind(var3)(var6, var5);
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
    var2 = function ThreadChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var21 = var2.channel;
            var _closure2_slot0 = var21;
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
            var18 = var3.bind(var4)();
            var _closure2_slot3 = var18;
            var3 = var21.id;
            var _closure2_slot4 = var3;
            var12 = null;
            var5 = var12 == var21;
            var3 = undefined;
            if(var5) { _fun0001_ip = 109; continue _fun0001 }
 103:
            var3 = var21.ownerId;
 109:
            _closure2_slot5 = var3;
            var5 = var12 == var21;
            var3 = undefined;
            if(var5) { _fun0001_ip = 128; continue _fun0001 }
 122:
            var3 = var21.parent_id;
 128:
            _closure2_slot6 = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 18;
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var3 = var7.useFontScale;
            var8 = var3.bind(var7)();
            _closure2_slot7 = var8;
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
                    var5 = _closure1_slot5;
                    var3 = var5.isMuted;
                    var1 = _closure2_slot4;
                    var3 = var3.bind(var5)(var1);
                    var1 = {};
                    var7 = _closure1_slot10;
                    var6 = var7.getUser;
                    var5 = _closure2_slot5;
                    var5 = var6.bind(var7)(var5);
                    var1['user'] = var5;
                    var7 = _closure1_slot6;
                    var6 = var7.getChannel;
                    var5 = _closure2_slot6;
                    var5 = var6.bind(var7)(var5);
                    var1['parentChannel'] = var5;
                    var6 = _closure1_slot12;
                    var5 = var6.getVoiceStatesForChannel;
                    var8 = _closure2_slot0;
                    var5 = var5.bind(var6)(var8);
                    var1['voiceStates'] = var5;
                    var7 = _closure1_slot11;
                    var6 = var7.hasVideo;
                    var5 = var8.id;
                    var5 = var6.bind(var7)(var5);
                    var1['hasVideo'] = var5;
                    var7 = _closure1_slot7;
                    var6 = var7.can;
                    var5 = _closure1_slot14;
                    var5 = var5.CONNECT;
                    var5 = var6.bind(var7)(var5, var8);
                    var5 = !var5;
                    var1['isLocked'] = var5;
                    var1['muted'] = var3;
                    var3 = !var3;
                    if(!var3) { _fun0002_ip = 186; continue _fun0002 }
 167:
                    var7 = _closure1_slot8;
                    var6 = var7.hasUnread;
                    var5 = _closure2_slot4;
                    var3 = var6.bind(var7)(var5);
 186:
                    var1['unread'] = var3;
                    var5 = _closure1_slot8;
                    var3 = var5.getMentionCount;
                    var4 = _closure2_slot4;
                    var3 = var3.bind(var5)(var4);
                    var1['mentionCount'] = var3;
                    var3 = var5.getIsMentionLowImportance;
                    var3 = var3.bind(var5)(var4);
                    var1['isMentionLowImportance'] = var3;
                    var3 = _closure1_slot9;
                    var2 = var3.getVoiceChannelId;
                    var2 = var2.bind(var3)();
                    var1['selectedVoiceChannelId'] = var2;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var5, var3);
            var9 = var3.user;
            _closure2_slot8 = var9;
            var7 = var3.parentChannel;
            _closure2_slot9 = var7;
            var20 = var3.voiceStates;
            var25 = var3.hasVideo;
            var5 = var3.isLocked;
            var23 = var3.muted;
            var19 = var3.unread;
            var27 = var3.mentionCount;
            var24 = var3.isMentionLowImportance;
            var13 = var3.selectedVoiceChannelId;
            var10 = _closure1_slot3;
            var6 = var10.useMemo;
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var2;
            var3[2] = var8;
            var2 = var18.threadLineSegment;
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
            var2 = var12 == var20;
            var15 = 0;
            var26 = 0;
            if(var2) { _fun0001_ip = 396; continue _fun0001 }
 391:
            var26 = var20.length;
 396:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 20;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var21;
            var2['locked'] = var5;
            var2['video'] = var25;
            var2['selected'] = var28;
            var22 = var3.bind(var4)(var2);
            var5 = _closure1_slot3;
            var10 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var21;
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
            var29 = var10.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var21;
            var2[1] = var9;
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
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot19;
            var1 = {};
            var5 = new Array(3);
            var5[0] = var6;
            var9 = _closure1_slot17;
            var7 = _closure1_slot21;
            var6 = {};
            var10 = var18.threadLineSegment;
            var10 = var10.backgroundColor;
            var6['color'] = var10;
            var6['fontScale'] = var8;
            var6 = var9.bind(var4)(var7, var6);
            var5[1] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var8 = var18.threadRow;
            var6['style'] = var8;
            var8 = {};
            var10 = var18.unreadContainer;
            var8['style'] = var10;
            var10 = var19;
            if(!var10) { _fun0001_ip = 624; continue _fun0001 }
 598:
            var31 = _closure1_slot17;
            var30 = _closure1_slot4;
            var11 = {};
            var32 = var18.unreadIcon;
            var11['style'] = var32;
            var10 = var31.bind(var4)(var30, var11);
 624:
            var8['children'] = var10;
            var9 = var9.bind(var4)(var7, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var11 = _closure1_slot17;
            var10 = _closure1_slot4;
            var9 = {};
            var30 = var18.spineSpacer;
            var9['style'] = var30;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var9 = 24;
            var9 = var31[var9];
            var10 = var30.bind(var4)(var9);
            var9 = {};
            var9['onPress'] = var29;
            var9['onLongPress'] = var14;
            var14 = var18.container;
            var9['style'] = var14;
            var14 = true;
            var9['accessible'] = var14;
            var29 = 'button';
            var9['accessibilityRole'] = var29;
            var29 = 25;
            var29 = var31[var29];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var29['channel'] = var21;
            var29['unread'] = var19;
            var29['mentionCount'] = var27;
            var29 = var30.bind(var4)(var29);
            var9['accessibilityLabel'] = var29;
            var29 = {};
            var29['selected'] = var28;
            var9['accessibilityState'] = var29;
            var9['channel'] = var21;
            var9['selected'] = var28;
            var9['muted'] = var23;
            var9['unread'] = var19;
            var19 = _closure1_slot15;
            var19 = var19.ALL_MESSAGES;
            var9['resolvedUnreadSetting'] = var19;
            var9['hideIcon'] = var14;
            if(!(var15 !== var27)) { _fun0001_ip = 862; continue _fun0001 }
 819:
            var23 = _closure1_slot17;
            var19 = _closure1_slot1;
            var28 = _closure1_slot2;
            var14 = 27;
            var14 = var28[var14];
            var19 = var19.bind(var4)(var14);
            var14 = {};
            var14['value'] = var27;
            var14['isMentionLowImportance'] = var24;
            var14 = var23.bind(var4)(var19, var14);
            _fun0001_ip = 922; continue _fun0001;
 862:
            var19 = null;
            if(!var22) { _fun0001_ip = 919; continue _fun0001 }
 867:
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
            var22['channel'] = var21;
            var19 = var24.bind(var4)(var23, var22);
 919:
            var14 = var19;
 922:
            var9['channelInfo'] = var14;
            var14 = var20.length;
            var12 = null;
            if(!(var15 !== var14)) { _fun0001_ip = 1180; continue _fun0001 }
 941:
            var15 = _closure1_slot17;
            var14 = _closure1_slot4;
            if(!(var13 !== var16)) { _fun0001_ip = 1107; continue _fun0001 }
 956:
            var13 = {};
            var16 = var18.voiceStatesCollapsed;
            var13['style'] = var16;
            var22 = _closure1_slot17;
            var19 = _closure1_slot1;
            var25 = _closure1_slot2;
            var16 = 29;
            var16 = var25[var16];
            var19 = var19.bind(var4)(var16);
            var16 = {'users': null, 'max': 8, 'guildId': null, 'renderIcon': false, 'noPadding': true};
            var24 = _closure1_slot0;
            var23 = 30;
            var23 = var25[var23];
            var25 = var24.bind(var4)(var23);
            var24 = var25.computeSummarizedVoiceUsers;
            var23 = {'channels': null, 'selectedChannelId': null, 'selectedVoiceChannelId': null};
            var26 = new Array(1);
            var26[0] = var21;
            var23['channels'] = var26;
            var26 = {};
            var27 = var21.id;
            var26[var27] = var20;
            var23['voiceStates'] = var26;
            var23 = var24.bind(var25)(var23);
            var16['users'] = var23;
            var23 = var21.guild_id;
            var16['guildId'] = var23;
            var16 = var22.bind(var4)(var19, var16);
            var13['children'] = var16;
            _fun0001_ip = 1174; continue _fun0001;
 1107:
            var16 = {};
            var18 = var18.voiceStates;
            var16['style'] = var18;
            var19 = _closure1_slot17;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var17 = 28;
            var17 = var22[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['channel'] = var21;
            var21 = false;
            var17['collapsed'] = var21;
            var17['voiceStates'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16['children'] = var17;
            var13 = var16;
 1174:
            var12 = var15.bind(var4)(var14, var13);
 1180:
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();