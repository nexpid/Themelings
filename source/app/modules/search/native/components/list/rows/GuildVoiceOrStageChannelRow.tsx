// app/modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GuildVoiceChannelSubtitle(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var _closure2_slot0 = var3;
        var10 = var1.voiceStates;
        var _closure2_slot1 = var10;
        var9 = var3.id;
        var _closure2_slot2 = var9;
        var8 = var3.guild_id;
        var _closure2_slot3 = var8;
        var5 = _closure1_slot8;
        var4 = undefined;
        var6 = var5.bind(var4)();
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 9;
        var5 = var11[var5];
        var12 = var7.bind(var4)(var5);
        var11 = var12.useStateFromStores;
        var5 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var5;
        var3 = var3.id;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2.topic;
case 2:
                return var1;
            }
        };
        var11 = var11.bind(var12)(var7, var3, var5);
        var _closure2_slot4 = var11;
        var7 = _closure1_slot3;
        var5 = var7.useMemo;
        var3 = new Array(4);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot4;
                var1 = null;
                if(!(var1 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = _closure2_slot1;
                var3 = _closure1_slot6;
                var2 = function getVoiceChannelSubtitle(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var10 = arg1;
                        var _closure4_slot0 = var10;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var7 = undefined;
                        var5 = var4.bind(var7)(var3);
                        var4 = var5.isLayoutCompact;
                        var3 = arg2;
                        var3 = var4.bind(var5)(var3);
                        if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var6 = function getName(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var7 = arg1;
                                var1 = _closure4_slot0;
                                var3 = var1[var7];
                                var6 = null;
                                var4 = var6 == var3;
                                var2 = undefined;
                                var1 = undefined;
                                if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                                var3 = var3.member;
                                var4 = var6 == var3;
                                var1 = undefined;
                                if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 10:
                                var1 = var3.nick;
case 8:
                                if(!(var6 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var3 = 6;
                                var3 = var8[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.getName;
                                var5 = _closure4_slot0;
                                var5 = var5[var7];
                                var6 = var6 == var5;
                                var2 = undefined;
                                if(var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                                var2 = var5.user;
case 13:
                                var1 = var3.bind(var4)(var2);
case 11:
                                return var1;
                            }
                        };
                        var2 = var10.length;
                        var5 = 0;
                        if(!(var5 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var9 = 1;
                        if(!(var9 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var11 = 2;
                        if(!(var11 !== var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var3 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 7;
                        var4 = var12[var2];
                        var4 = var3.bind(var7)(var4);
                        var8 = var4.intl;
                        var4 = var8.formatToPlainString;
                        var2 = var12[var2];
                        var2 = var3.bind(var7)(var2);
                        var2 = var2.t;
                        var3 = var2.o2nmbm;
                        var2 = {};
                        var12 = var6.bind(var7)(var5);
                        var2['a'] = var12;
                        var12 = var6.bind(var7)(var9);
                        var2['b'] = var12;
                        var10 = var10.length;
                        var10 = var10 - var11;
                        var2['n'] = var10;
                        var2 = var4.bind(var8)(var3, var2);
                        return var2;
case 19:
                        var3 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 7;
                        var4 = var10[var2];
                        var4 = var3.bind(var7)(var4);
                        var8 = var4.intl;
                        var4 = var8.formatToPlainString;
                        var2 = var10[var2];
                        var2 = var3.bind(var7)(var2);
                        var2 = var2.t;
                        var3 = var2.2efxiY;
                        var2 = {};
                        var10 = var6.bind(var7)(var5);
                        var2['a'] = var10;
                        var9 = var6.bind(var7)(var9);
                        var2['b'] = var9;
                        var2 = var4.bind(var8)(var3, var2);
                        return var2;
case 17:
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 7;
                        var3 = var8[var1];
                        var3 = var2.bind(var7)(var3);
                        var4 = var3.intl;
                        var3 = var4.formatToPlainString;
                        var1 = var8[var1];
                        var1 = var2.bind(var7)(var1);
                        var1 = var1.t;
                        var2 = var1./GCyIC;
                        var1 = {};
                        var5 = var6.bind(var7)(var5);
                        var1['a'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
case 15:
                        var1 = null;
                        return var1;
case 6:
                        var1 = null;
                        return var1;
                    }
                };
                var1 = undefined;
                var6 = var2.bind(var1)(var5, var3);
                _fun0002_ip = 2; continue _fun0002;
case 4:
                var6 = _closure2_slot4;
case 2:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.renderChannelSubtitle;
                var1 = {};
                var1['subtitle'] = var6;
                var6 = false;
                var1['muted'] = var6;
                var5 = _closure1_slot6;
                var1['layout'] = var5;
                var5 = _closure2_slot2;
                var1['channelId'] = var5;
                var4 = _closure2_slot3;
                var1['guildId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5 = var5.bind(var7)(var2, var3);
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.subtitle;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function GuildVoiceChannelExtras(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var14 = var1.channel;
            var15 = var1.users;
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var5 = var6.bind(var4)(var1);
            var3 = var5.useStageParticipantsCount;
            var2 = var14.id;
            var1 = 12;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.AUDIENCE;
            var12 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var9.subtitle;
            var1['style'] = var5;
            var6 = var15.length;
            var5 = 0;
            var5 = var5 !== var6;
            if(!var5) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.users;
            var6['style'] = var9;
            var11 = _closure1_slot7;
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 13;
            var9 = var16[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['users'] = var15;
            var15 = 5;
            var9['max'] = var15;
            var14 = var14.guild_id;
            var9['guildId'] = var14;
            var13 = _closure1_slot6;
            var9['layout'] = var13;
            var9['audienceCount'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 21:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {};
    var4['marginTop'] = var11;
    var7['users'] = var4;
    var11 = {};
    var4 = 16;
    var11['marginEnd'] = var4;
    var7['subtitle'] = var11;
    var11 = {'paddingVertical': 4, 'alignItems': 'center', 'alignSelf': 'center'};
    var7['trailing'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot8 = var7;
    var7 = var8.memo;
    var2 = function GuildVoiceChannelRow(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var10 = var3.channel;
            var _closure2_slot0 = var10;
            var9 = var3.voiceStates;
            var2 = var3.speakerVoiceStates;
            var6 = var3.trailing;
            var11 = var3.onPress;
            var _closure2_slot1 = var11;
            var3 = _closure1_slot8;
            var4 = undefined;
            var13 = var3.bind(var4)();
            var3 = var10.isGuildStageVoice;
            var3 = var3.bind(var10)();
            var7 = var9;
            if(!var3) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var7 = var2;
case 23:
            var3 = var7.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                return var1;
            };
            var8 = var3.bind(var7)(var2);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var12 = var10.id;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var11;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 14;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var7;
            var1['channel'] = var10;
            var12 = _closure1_slot7;
            var11 = _closure1_slot9;
            var7 = {};
            var7['channel'] = var10;
            var7['voiceStates'] = var9;
            var7['users'] = var8;
            var7 = var12.bind(var4)(var11, var7);
            var1['subtitle'] = var7;
            var7 = null;
            if(!(var7 == var6)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var12 = _closure1_slot7;
            var11 = _closure1_slot4;
            var7 = {};
            var13 = var13.trailing;
            var7['style'] = var13;
            var15 = _closure1_slot7;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 15;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.VocalChannelJoinButton;
            var13 = {};
            var13['channel'] = var10;
            var13['voiceStates'] = var9;
            var13 = var15.bind(var4)(var14, var13);
            var7['children'] = var13;
            var6 = var12.bind(var4)(var11, var7);
case 25:
            var1['trailing'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot10;
            var5 = {};
            var5['channel'] = var10;
            var5['voiceStates'] = var9;
            var5['users'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['extras'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();