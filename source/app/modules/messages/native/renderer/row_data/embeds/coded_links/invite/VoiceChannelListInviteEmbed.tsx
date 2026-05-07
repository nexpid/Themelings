// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildIconSource;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BasicPermissions;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot14 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createVoiceChannelListInviteEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var3 = var13.guild;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot7;
            var5 = var6.getGuild;
            var3 = var13.guild;
            var3 = var3.id;
            var8 = var5.bind(var6)(var3);
            var _closure2_slot0 = var8;
            if(!(var1 != var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var7 = undefined;
            var3 = var5.bind(var7)(var3);
            var3 = var3.bind(var7)(var13);
            var5 = var3.channel;
            if(!(var1 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var5.isGuildVocal;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var9 = _closure1_slot5;
            var6 = var9.getChannel;
            var3 = var5.id;
            var3 = var6.bind(var9)(var3);
            if(!(var1 != var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var3;
case 9:
            var9 = _closure1_slot8;
            var6 = var9.canBasicChannel;
            var3 = _closure1_slot13;
            var3 = var3.VIEW_CHANNEL;
            var3 = var6.bind(var9)(var3, var5);
            var15 = var5;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            return var1;
case 11:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var5 = var5.bind(var7)(var3);
            var3 = arg2;
            var3 = var5.bind(var7)(var3);
            var10 = var3.colors;
            var12 = var3.baseColors;
            var3 = var8.icon;
            var3 = var1 != var3;
            var11 = undefined;
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var6 = var5.bind(var7)(var3);
            var5 = var6.getAssetUriForEmbed;
            var14 = _closure1_slot4;
            var9 = 128;
            var3 = false;
            var3 = var14.bind(var7)(var8, var9, var3);
            var11 = var5.bind(var6)(var3);
case 13:
            var9 = _closure1_slot11;
            var6 = var9.getVoiceStatesForChannelAlt;
            var5 = var15.id;
            var3 = var8.id;
            var3 = var6.bind(var9)(var5, var3);
            var6 = var3.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                return var1;
            };
            var18 = var6.bind(var3)(var5);
            var14 = new Array(0);
            var6 = 0;
            var19 = var14;
            var17 = 0;
            var17 = arraySpread(var19, var18, var17);
            var16 = var3.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                var1 = !var1;
                return var1;
            };
            var18 = var16.bind(var3)(var5);
            var19 = var14;
            var5 = arraySpread(var19, var18, var17);
            var9 = var14.slice;
            var5 = 10;
            var9 = var9.bind(var14)(var6, var5);
            var5 = var9.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var7 = var3.member;
                    var2 = null;
                    if(!(var2 == var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var6 = _closure1_slot6;
                    var5 = var6.getMember;
                    var1 = _closure2_slot0;
                    var4 = var1.id;
                    var1 = var3.user;
                    var1 = var1.id;
                    var7 = var5.bind(var6)(var4, var1);
case 15:
                    var4 = var2 == var7;
                    var8 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var1 = var7.avatar;
case 17:
                    if(!(var2 == var1)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 15;
                    var1 = var5[var1];
                    var9 = var4.bind(var8)(var1);
                    var6 = var9.getUserAvatarURL;
                    var5 = var3.user;
                    var4 = false;
                    var1 = 24;
                    var4 = var6.bind(var9)(var5, var4, var1);
                    _fun0002_ip = 21; continue _fun0002;
case 19:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var1 = var6[var1];
                    var6 = var5.bind(var8)(var1);
                    var5 = var6.getGuildMemberAvatarURLSimple;
                    var1 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.id;
                    var1['guildId'] = var9;
                    var9 = var3.user;
                    var9 = var9.id;
                    var1['userId'] = var9;
                    var7 = var7.avatar;
                    var1['avatar'] = var7;
                    var7 = 24;
                    var1['size'] = var7;
                    var4 = var5.bind(var6)(var1);
case 21:
                    var1 = {};
                    var5 = var3.nick;
                    if(!(var2 == var5)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 16;
                    var6 = var9[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.getFormattedName;
                    var6 = var3.user;
                    var5 = var7.bind(var8)(var6);
case 22:
                    var1['displayName'] = var5;
                    var1['avatarUrl'] = var4;
                    var3 = var3.voiceState;
                    var3 = var3.selfStream;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var2 = var3;
case 24:
                    var1['isStreaming'] = var2;
                    return var1;
                }
            };
            var9 = var5.bind(var9)(var2);
            var5 = _closure1_slot3;
            var2 = var5.getStartTime;
            var2 = var2.bind(var5)(var15);
            var14 = var1 != var2;
            var5 = undefined;
            if(!var14) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = var2;
case 26:
            var2 = {};
            var19 = var2;
            var18 = var12;
            var12 = copyDataProperties(var19, var18);
            var12 = _closure1_slot12;
            var14 = var12.VOICE_CHANNEL_LIST_INVITE;
            var12 = 'extendedType';
            var2[11] = var14;
            var14 = var10.headerColor;
            var12 = 'headerColor';
            var2[11] = var14;
            var12 = var8.name;
            var8 = 'guildName';
            var2[7] = var12;
            var8 = 'guildIcon';
            var2[7] = var11;
            var11 = '';
            var8 = 'headerText';
            var2[7] = var11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 17;
            var8 = var12[var8];
            var14 = var11.bind(var7)(var8);
            var12 = var14.computeChannelName;
            var11 = _closure1_slot10;
            var8 = _closure1_slot9;
            var11 = var12.bind(var14)(var15, var11, var8);
            var8 = 'titleText';
            var2[7] = var11;
            var3 = var3.length;
            if(!(!(var3 > var6))) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = var10.voiceMutedColor;
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var6 = var10.voiceActiveColor;
case 30:
            var3 = 'titleColor';
            var2[2] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 18;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var14 = var11.intl;
            var12 = var14.string;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.gpqgah;
            var12 = var12.bind(var14)(var11);
            var11 = 'acceptLabelText';
            var2[10] = var12;
            var12 = var10.acceptLabelGreenColor;
            var11 = 'acceptLabelColor';
            var2[10] = var12;
            var11 = var10.acceptLabelGreenBackgroundColor;
            var10 = 'acceptLabelBackgroundColor';
            var2[9] = var11;
            var11 = _closure1_slot1;
            var10 = 19;
            var10 = var8[var10];
            var12 = var11.bind(var7)(var10);
            var11 = var12.canAcceptInvite;
            var14 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var14;
            var11 = var11.bind(var12)(var10, var13);
            var10 = 'canBeAccepted';
            var2[9] = var11;
            var11 = true;
            var10 = 'embedCanBeTapped';
            var2[9] = var11;
            var4 = _closure1_slot14;
            var10 = var4.GUILD;
            var4 = 'type';
            var2[3] = var10;
            var4 = 'voiceUsers';
            var2[3] = var9;
            var4 = 'voiceStartTimestamp';
            var2[3] = var5;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.zSqdrS;
            var4 = var4.bind(var5)(var3);
            var3 = 'emptyStateText';
            var2[2] = var4;
            return var2;
case 6:
            return var1;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['createVoiceChannelListInviteEmbed'] = var2;
    return var1;
})();