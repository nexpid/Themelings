// app/modules/channel_list_v2/native/items/VoiceChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = function _handleVoiceChannelPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = var9.getGuildId;
                    var5 = var2.bind(var9)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.shouldShowMembershipVerificationGate;
                    var3 = var3.bind(var6)(var5);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 14;
                    var7 = var3[var6];
                    var6 = undefined;
                    var8 = var8.bind(var6)(var7);
                    var7 = 15;
                    var7 = var3[var7];
                    var3 = var3.paths;
                    var3 = var8.bind(var6)(var7, var3);
                    SaveGenerator(address=115);
case 7:
                    return var3;
case 8:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var8 = var3.openGuildVoiceModal;
                    var7 = 'Channel List';
                    var7 = var8.bind(var6)(var9, var7);
                    return var6;
case 9:
                    return var3;
case 6:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 14;
                    var3 = var2[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = 13;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var6.bind(var4)(var3, var2);
                    SaveGenerator(address=187);
case 11:
                    return var2;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var3 = var2.openMemberVerificationModal;
                    var3 = var3.bind(var4)(var5);
                    return var3;
case 13:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var4 = var8[var2];
    var2 = metroImportAll;
    var9 = var2.bind(var1)(var4);
    var _closure1_slot4 = var9;
    var2 = 2;
    var4 = var8[var2];
    var4 = var7.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.NO_VOICE_STATES;
    var _closure1_slot10 = var4;
    var13 = 8;
    var4 = var8[var13];
    var4 = var7.bind(var1)(var4);
    var14 = var4.CHANNEL_MARGIN_VERTICAL;
    var4 = 9;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.AnalyticEvents;
    var _closure1_slot11 = var6;
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var6 = {};
    var4 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'maxHeight': 1};
    var11 = 11;
    var10 = var8[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var4['gap'] = var10;
    var6['channelInfo'] = var4;
    var4 = -4;
    var10 = {'marginLeft': 36, 'marginTop': 4294967292, 'marginBottom': 2};
    var6['voiceStates'] = var10;
    var10 = {};
    var15 = 16;
    var10['marginLeft'] = var15;
    var6['voiceStatesCollapsed'] = var10;
    var10 = {};
    var10['marginVertical'] = var14;
    var10['marginHorizontal'] = var13;
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var10['borderRadius'] = var11;
    var6['container'] = var10;
    var _closure1_slot14 = var6;
    var10 = var9.memo;
    var6 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var19 = var1.selected;
            var18 = var1.locked;
            var13 = var1.collapsed;
            var14 = var1.voiceStates;
            var3 = var1.subtitle;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useActiveEvent;
            var1 = var11.id;
            var7 = var6.bind(var7)(var1);
            var1 = 17;
            var1 = var5[var1];
            var10 = var2.bind(var4)(var1);
            var8 = var10.useVoiceChannelDurationMobileEnabled;
            var6 = var11.guild_id;
            var1 = 'voice_channel';
            var8 = var8.bind(var10)(var6, var1);
            var1 = 18;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useStartTime;
            var10 = var1.bind(var6)(var11);
            var1 = 19;
            var1 = var5[var1];
            var12 = var2.bind(var4)(var1);
            var6 = var12.useEnsureSyncedChannelVoiceStates;
            var1 = var11.id;
            var14 = var6.bind(var12)(var1, var14);
            var1 = 20;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useIsConnectedToVoiceChannel;
            var17 = var1.bind(var6)(var11);
            var1 = 21;
            var1 = var5[var1];
            var16 = var2.bind(var4)(var1);
            var15 = var16.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var12 = new Array(2);
            var12[0] = var1;
            var1 = _closure1_slot9;
            var12[1] = var1;
            var6 = new Array(1);
            var6[0] = var11;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot8;
                var5 = var6.hasUnread;
                var4 = _closure2_slot0;
                var3 = var4.id;
                var3 = var5.bind(var6)(var3);
                var1['hasUnread'] = var3;
                var5 = var6.getMentionCount;
                var3 = var4.id;
                var3 = var5.bind(var6)(var3);
                var1['mentionCount'] = var3;
                var3 = _closure1_slot9;
                var2 = var3.resolveUnreadSetting;
                var2 = var2.bind(var3)(var4);
                var1['resolvedUnreadSetting'] = var2;
                return var1;
            };
            var1 = var15.bind(var16)(var12, var1, var6);
            var16 = var1.hasUnread;
            var20 = var1.mentionCount;
            var15 = var1.resolvedUnreadSetting;
            var1 = 22;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelSubtitleData;
            var2 = var1.bind(var2)(var3);
            var5 = null;
            var1 = var5 == var3;
            var12 = undefined;
            if(var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var12 = var3.type;
case 15:
            var6 = 'voice';
            var1 = null;
            if(!(var6 === var12)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = var3.text;
            var12 = var6.length;
            var6 = 0;
            var6 = var12 > var6;
            var1 = null;
            if(!var6) { _fun0002_ip = 17; continue _fun0002 }
case 19:
            var1 = var3.text;
case 17:
            _closure2_slot1 = var1;
            var3 = var5 != var1;
            var12 = null;
            if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var6 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 23;
            var3 = var21[var3];
            var23 = var6.bind(var4)(var3);
            var21 = var23.parseVoiceChannelStatus;
            var6 = {};
            var3 = var11.id;
            var6['channelId'] = var3;
            var3 = 'text-xs/medium';
            var6['linkVariant'] = var3;
            var3 = true;
            var12 = var21.bind(var23)(var1, var3, var6);
case 20:
            var6 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 24;
            var3 = var21[var3];
            var6 = var6.bind(var4)(var3);
            var3 = {};
            var3['channel'] = var11;
            var3['unread'] = var16;
            var3['mentionCount'] = var20;
            var3['voiceStates'] = var14;
            var20 = var6.bind(var4)(var3);
            var21 = _closure1_slot4;
            var6 = var21.useEffect;
            var23 = var11.id;
            var3 = new Array(3);
            var3[0] = var23;
            var23 = var11.guild_id;
            var3[1] = var23;
            var3[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 !== var2)) { _fun0003_ip = 22; continue _fun0003 }
case 3:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot11;
                    var2 = var1.VOICE_CHANNEL_TOPIC_VIEWED;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.guild_id;
                    var1['guild_id'] = var6;
                    var5 = var5.id;
                    var1['channel_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var21)(var1, var3);
            if(!(var5 == var12)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = var5 == var2;
            var1 = undefined;
            if(var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = var2.subtitle;
case 25:
            var12 = var1;
case 23:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 26;
            var1 = var23[var1];
            var6 = var2.bind(var4)(var1);
            var1 = {};
            var1['channel'] = var11;
            var1['isChannelSelected'] = var19;
            var1['isChannelCollapsed'] = var13;
            var1['voiceStates'] = var14;
            var21 = true;
            var1['enableConnectedUserLimit'] = var21;
            var1['enableActivities'] = var21;
            var6 = var3.bind(var4)(var6, var1);
            var1 = 27;
            var1 = var23[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var23 = function onPress() {
                var3 = _closure2_slot0;
                var2 = function handleVoiceChannelPress() {
                    var1 = undefined;
                    var4 = _closure1_slot16;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var1['onPress'] = var23;
            var22 = function onLongPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openChannelLongPressActionSheet;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onLongPress'] = var22;
            var22 = _closure1_slot14;
            var22 = var22.container;
            var1['style'] = var22;
            var1['accessible'] = var21;
            var21 = 'button';
            var1['accessibilityRole'] = var21;
            var1['accessibilityLabel'] = var20;
            var1['channel'] = var11;
            var1['selected'] = var19;
            var1['locked'] = var18;
            if(!var16) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var16 = var17;
case 27:
            var1['unread'] = var16;
            var1['resolvedUnreadSetting'] = var15;
            var1['subtitle'] = var12;
            var7 = var5 != var7;
            if(var7) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            if(!var8) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var8 = var5 != var10;
case 31:
            var7 = var8;
case 29:
            var1['isChannelLive'] = var7;
            var1['channelInfo'] = var6;
            var7 = var14.length;
            var6 = 0;
            var5 = null;
            if(!(var6 !== var7)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            if(var13) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = _closure1_slot14;
            var10 = var10.voiceStates;
            var6['style'] = var10;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 31;
            var10 = var15[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var11;
            var10['collapsed'] = var13;
            var10['voiceStates'] = var14;
            var10 = var8.bind(var4)(var12, var10);
            var6['children'] = var10;
            var5 = var8.bind(var4)(var7, var6);
            _fun0002_ip = 33; continue _fun0002;
case 35:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 29;
            var6 = var13[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.computeSummarizedVoiceUsers;
            var6 = {'channels': null, 'selectedChannelId': null, 'selectedVoiceChannelId': null};
            var10 = new Array(1);
            var10[0] = var11;
            var6['channels'] = var10;
            var10 = {};
            var12 = var11.id;
            var10[var12] = var14;
            var6['voiceStates'] = var10;
            var12 = var7.bind(var8)(var6);
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = _closure1_slot14;
            var10 = var10.voiceStatesCollapsed;
            var6['style'] = var10;
            var10 = _closure1_slot1;
            var9 = 30;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['users'] = var12;
            var12 = 8;
            var9['max'] = var12;
            var11 = var11.guild_id;
            var9['guildId'] = var11;
            var11 = false;
            var9['renderIcon'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 33:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var6 = var10.bind(var9)(var6);
    var _closure1_slot15 = var6;
    var6 = var9.memo;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var9 = var2.channel;
            var _closure2_slot0 = var9;
            var8 = var2.selected;
            var5 = var2.subtitle;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 32;
            var2 = var6[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var9.guild_id;
            var11 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = 21;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useStateFromStoresObject;
            var7 = _closure1_slot7;
            var2 = new Array(2);
            var2[0] = var7;
            var7 = _closure1_slot6;
            var2[1] = var7;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot7;
                var7 = var6.can;
                var4 = _closure1_slot12;
                var5 = var4.CONNECT;
                var2 = _closure2_slot0;
                var5 = var7.bind(var6)(var5, var2);
                var5 = !var5;
                var1['locked'] = var5;
                var5 = var6.can;
                var4 = var4.MOVE_MEMBERS;
                var4 = var5.bind(var6)(var4, var2);
                var1['bypassLimit'] = var4;
                var4 = _closure1_slot6;
                var3 = var4.isCollapsed;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['collapsed'] = var2;
                return var1;
            };
            var1 = var3.bind(var6)(var2, var1);
            var7 = var1.locked;
            var6 = var1.bypassLimit;
            var12 = var1.collapsed;
            var3 = _closure1_slot13;
            var2 = _closure1_slot15;
            var1 = {};
            var1['channel'] = var9;
            var1['collapsed'] = var12;
            var9 = var9.id;
            var9 = var11[var9];
            var11 = null;
            if(!(var11 == var9)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var9 = _closure1_slot10;
case 37:
            var1['voiceStates'] = var9;
            var1['selected'] = var8;
            var1['locked'] = var7;
            var1['bypassLimit'] = var6;
            var1['subtitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var6.bind(var9)(var5);
    var6 = 33;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/channel_list_v2/native/items/VoiceChannel.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['VOICE_USERS_MARGIN_TOP'] = var4;
    var3['VOICE_USERS_MARGIN_BOTTOM'] = var2;
    return var1;
})();