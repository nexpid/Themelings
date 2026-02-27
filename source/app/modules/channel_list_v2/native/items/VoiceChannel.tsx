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
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var6 = var4.jsx;
    var _closure1_slot13 = var6;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
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
    var _closure1_slot15 = var6;
    var10 = var9.memo;
    var6 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var23 = var1.selected;
            var22 = var1.locked;
            var14 = var1.collapsed;
            var6 = var1.voiceStates;
            var3 = var1.subtitle;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var8 = var2.bind(var4)(var1);
            var7 = var8.useActiveEvent;
            var1 = var12.id;
            var13 = var7.bind(var8)(var1);
            var1 = 17;
            var1 = var5[var1];
            var9 = var2.bind(var4)(var1);
            var8 = var9.useVoiceChannelDurationMobileEnabled;
            var7 = var12.guild_id;
            var1 = 'voice_channel';
            var16 = var8.bind(var9)(var7, var1);
            var1 = 18;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var1 = var7.useStartTime;
            var17 = var1.bind(var7)(var12);
            var1 = 19;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useEnsureSyncedChannelVoiceStates;
            var1 = var12.id;
            var15 = var2.bind(var5)(var1, var6);
            var1 = var15.length;
            var6 = null;
            var2 = var6 != var1;
            var8 = 0;
            var7 = 0;
            if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var1;
case 15:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var9 = var2.bind(var4)(var1);
            var1 = var9.useIsConnectedToVoiceChannel;
            var21 = var1.bind(var9)(var12);
            var1 = 21;
            var1 = var5[var1];
            var19 = var2.bind(var4)(var1);
            var18 = var19.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var11 = new Array(2);
            var11[0] = var1;
            var1 = _closure1_slot9;
            var11[1] = var1;
            var9 = new Array(1);
            var9[0] = var12;
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
            var1 = var18.bind(var19)(var11, var1, var9);
            var20 = var1.hasUnread;
            var9 = var1.mentionCount;
            var19 = var1.resolvedUnreadSetting;
            var1 = 22;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelSubtitleData;
            var2 = var1.bind(var2)(var3);
            var1 = var6 == var3;
            var11 = undefined;
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var11 = var3.type;
case 17:
            var5 = 'voice';
            var1 = null;
            if(!(var5 === var11)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var5 = var3.text;
            var5 = var5.length;
            var5 = var5 > var8;
            var1 = null;
            if(!var5) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var1 = var3.text;
case 19:
            _closure2_slot1 = var1;
            var3 = var6 != var1;
            var18 = null;
            if(!var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 23;
            var3 = var11[var3];
            var24 = var5.bind(var4)(var3);
            var11 = var24.parseVoiceChannelStatus;
            var5 = {};
            var3 = var12.id;
            var5['channelId'] = var3;
            var3 = 'text-xs/medium';
            var5['linkVariant'] = var3;
            var3 = true;
            var18 = var11.bind(var24)(var1, var3, var5);
case 22:
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 24;
            var3 = var11[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var3['channel'] = var12;
            var3['unread'] = var20;
            var3['mentionCount'] = var9;
            var3['userCount'] = var7;
            var24 = var5.bind(var4)(var3);
            var7 = _closure1_slot4;
            var5 = var7.useEffect;
            var9 = var12.id;
            var3 = new Array(3);
            var3[0] = var9;
            var9 = var12.guild_id;
            var3[1] = var9;
            var3[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 !== var2)) { _fun0003_ip = 24; continue _fun0003 }
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
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var1, var3);
            if(!(var6 == var18)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var1 = var2.subtitle;
case 27:
            var18 = var1;
case 25:
            var9 = _closure1_slot13;
            var7 = _closure1_slot1;
            var27 = _closure1_slot2;
            var1 = 26;
            var1 = var27[var1];
            var2 = var7.bind(var4)(var1);
            var1 = {};
            var1['channel'] = var12;
            var1['isChannelSelected'] = var23;
            var1['isChannelCollapsed'] = var14;
            var1['voiceStates'] = var15;
            var25 = true;
            var1['enableConnectedUserLimit'] = var25;
            var1['enableActivities'] = var25;
            var11 = var9.bind(var4)(var2, var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = 27;
            var5 = var27[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var27 = function onPress() {
                var3 = _closure2_slot0;
                var2 = function handleVoiceChannelPress() {
                    var1 = undefined;
                    var4 = _closure1_slot17;
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
            var5['onPress'] = var27;
            var26 = function onLongPress() {
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
            var5['onLongPress'] = var26;
            var26 = _closure1_slot15;
            var26 = var26.container;
            var5['style'] = var26;
            var5['accessible'] = var25;
            var25 = 'button';
            var5['accessibilityRole'] = var25;
            var5['accessibilityLabel'] = var24;
            var5['channel'] = var12;
            var5['selected'] = var23;
            var5['locked'] = var22;
            if(!var20) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var20 = var21;
case 29:
            var5['unread'] = var20;
            var5['resolvedUnreadSetting'] = var19;
            var5['subtitle'] = var18;
            var13 = var6 != var13;
            if(var13) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            if(!var16) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var16 = var6 != var17;
case 33:
            var13 = var16;
case 31:
            var5['isChannelLive'] = var13;
            var5['channelInfo'] = var11;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var15.length;
            var6 = null;
            if(!(var8 !== var7)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            if(var14) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var9 = _closure1_slot13;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = _closure1_slot15;
            var11 = var11.voiceStates;
            var7['style'] = var11;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 31;
            var11 = var16[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var11['channel'] = var12;
            var11['collapsed'] = var14;
            var11['voiceStates'] = var15;
            var11 = var9.bind(var4)(var13, var11);
            var7['children'] = var11;
            var6 = var9.bind(var4)(var8, var7);
            _fun0002_ip = 35; continue _fun0002;
case 37:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 29;
            var7 = var14[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.computeSummarizedVoiceUsers;
            var7 = {'channels': null, 'selectedChannelId': null, 'selectedVoiceChannelId': null};
            var11 = new Array(1);
            var11[0] = var12;
            var7['channels'] = var11;
            var11 = {};
            var13 = var12.id;
            var11[var13] = var15;
            var7['voiceStates'] = var11;
            var13 = var8.bind(var9)(var7);
            var9 = _closure1_slot13;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = _closure1_slot15;
            var11 = var11.voiceStatesCollapsed;
            var7['style'] = var11;
            var11 = _closure1_slot1;
            var10 = 30;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['users'] = var13;
            var13 = 8;
            var10['max'] = var13;
            var12 = var12.guild_id;
            var10['guildId'] = var12;
            var12 = false;
            var10['renderIcon'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 35:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var6 = var10.bind(var9)(var6);
    var _closure1_slot16 = var6;
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
            var2 = _closure1_slot16;
            var1 = {};
            var1['channel'] = var9;
            var1['collapsed'] = var12;
            var9 = var9.id;
            var9 = var11[var9];
            var11 = null;
            if(!(var11 == var9)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var9 = _closure1_slot10;
case 39:
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