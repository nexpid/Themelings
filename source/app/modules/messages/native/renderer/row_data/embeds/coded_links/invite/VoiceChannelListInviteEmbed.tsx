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
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildIconSource;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BasicPermissions;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot16 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createVoiceChannelListInviteEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = arg1;
            var3 = var14.guild;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot9;
            var4 = var6.getGuild;
            var3 = var14.guild;
            var3 = var3.id;
            var9 = var4.bind(var6)(var3);
            var _closure2_slot0 = var9;
            if(!(var1 != var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var8 = undefined;
            var3 = var4.bind(var8)(var3);
            var3 = var3.bind(var8)(var14);
            var4 = var3.channel;
            if(!(var1 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.isGuildVocal;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var7 = _closure1_slot7;
            var6 = var7.getChannel;
            var3 = var4.id;
            var3 = var6.bind(var7)(var3);
            if(!(var1 != var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var3;
case 9:
            var7 = _closure1_slot10;
            var6 = var7.canBasicChannel;
            var3 = _closure1_slot15;
            var3 = var3.VIEW_CHANNEL;
            var3 = var6.bind(var7)(var3, var4);
            var15 = var4;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            return var1;
case 11:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var4 = var4.bind(var8)(var3);
            var3 = arg2;
            var4 = var4.bind(var8)(var3);
            var3 = var4.colors;
            var12 = var4.baseColors;
            var4 = var9.icon;
            var4 = var1 != var4;
            var11 = undefined;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 16;
            var4 = var7[var4];
            var7 = var6.bind(var8)(var4);
            var6 = var7.getAssetUriForEmbed;
            var13 = _closure1_slot6;
            var10 = 128;
            var4 = false;
            var4 = var13.bind(var8)(var9, var10, var4);
            var11 = var6.bind(var7)(var4);
case 13:
            var10 = _closure1_slot13;
            var7 = var10.getVoiceStatesForChannelAlt;
            var6 = var15.id;
            var4 = var9.id;
            var4 = var7.bind(var10)(var6, var4);
            var7 = var4.filter;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                return var1;
            };
            var20 = var7.bind(var4)(var6);
            var13 = new Array(0);
            var7 = 0;
            var21 = var13;
            var19 = 0;
            var19 = arraySpread(var21, var20, var19);
            var16 = var4.filter;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                var1 = !var1;
                return var1;
            };
            var20 = var16.bind(var4)(var6);
            var21 = var13;
            var6 = arraySpread(var21, var20, var19);
            var10 = var13.slice;
            var6 = 10;
            var10 = var10.bind(var13)(var7, var6);
            var6 = _closure1_slot4;
            var6 = var6.displayNameStylesEnabled;
            var _closure2_slot1 = var6;
            var6 = var10.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var6 = var4.member;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var7 = _closure1_slot8;
                    var5 = var7.getMember;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = var4.user;
                    var1 = var1.id;
                    var6 = var5.bind(var7)(var2, var1);
case 15:
                    var2 = var3 == var6;
                    var9 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var1 = var6.avatar;
case 17:
                    if(!(var3 == var1)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 17;
                    var1 = var5[var1];
                    var8 = var2.bind(var9)(var1);
                    var7 = var8.getUserAvatarURL;
                    var5 = var4.user;
                    var2 = false;
                    var1 = 24;
                    var5 = var7.bind(var8)(var5, var2, var1);
                    _fun0002_ip = 21; continue _fun0002;
case 19:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var7 = var2.bind(var9)(var1);
                    var2 = var7.getGuildMemberAvatarURLSimple;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.id;
                    var1['guildId'] = var8;
                    var8 = var4.user;
                    var8 = var8.id;
                    var1['userId'] = var8;
                    var8 = var6.avatar;
                    var1['avatar'] = var8;
                    var8 = 24;
                    var1['size'] = var8;
                    var5 = var2.bind(var7)(var1);
case 21:
                    var1 = _closure2_slot1;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var7 = var3 == var6;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var6 = var6.displayNameStyles;
                    var7 = var3 == var6;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 24; continue _fun0002 }
case 26:
                    var1 = var6.fontId;
case 24:
                    if(!(var3 == var1)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var6 = var4.user;
                    var7 = var6.displayNameStyles;
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var6 = var7.fontId;
case 29:
                    var1 = var6;
case 27:
                    var2 = var1;
case 22:
                    var1 = {};
                    var6 = var4.user;
                    var6 = var6.id;
                    var1['userId'] = var6;
                    var6 = var4.nick;
                    if(!(var3 == var6)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 18;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.getName;
                    var7 = var4.user;
                    var6 = var8.bind(var9)(var7);
case 31:
                    var1['displayName'] = var6;
                    var1['avatarUrl'] = var5;
                    var4 = var4.voiceState;
                    var4 = var4.selfStream;
                    var3 = var3 != var4;
                    if(!var3) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var3 = var4;
case 33:
                    var1['isStreaming'] = var3;
                    var1['fontId'] = var2;
                    return var1;
                }
            };
            var10 = var6.bind(var10)(var2);
            var6 = _closure1_slot5;
            var2 = var6.getStartTime;
            var2 = var2.bind(var6)(var15);
            var13 = var1 != var2;
            var6 = undefined;
            if(!var13) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = var2;
case 35:
            var2 = {};
            var21 = var2;
            var20 = var12;
            var13 = copyDataProperties(var21, var20);
            var16 = _closure1_slot3;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 19;
            var13 = var18[var13];
            var17 = var17.bind(var8)(var13);
            var13 = var17.getEmbedScrollGradientBackground;
            var17 = var13.bind(var17)();
            var18 = var1 != var17;
            var13 = undefined;
            if(!var18) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var13 = var17;
case 37:
            var13 = var16.bind(var8)(var13);
            if(!(var1 == var13)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var13 = var12.backgroundColor;
case 39:
            var12 = 'backgroundColor';
            var2[11] = var13;
            var12 = _closure1_slot14;
            var13 = var12.VOICE_CHANNEL_LIST_INVITE;
            var12 = 'extendedType';
            var2[11] = var13;
            var13 = var3.headerColor;
            var12 = 'headerColor';
            var2[11] = var13;
            var12 = var9.name;
            var9 = 'guildName';
            var2[8] = var12;
            var9 = 'guildIcon';
            var2[8] = var11;
            var11 = '';
            var9 = 'headerText';
            var2[8] = var11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 20;
            var9 = var12[var9];
            var13 = var11.bind(var8)(var9);
            var12 = var13.computeChannelName;
            var11 = _closure1_slot12;
            var9 = _closure1_slot11;
            var11 = var12.bind(var13)(var15, var11, var9);
            var9 = 'titleText';
            var2[8] = var11;
            var4 = var4.length;
            if(!(!(var4 > var7))) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var7 = var3.voiceMutedColor;
            _fun0001_ip = 43; continue _fun0001;
case 41:
            var7 = var3.voiceActiveColor;
case 43:
            var4 = 'titleColor';
            var2[3] = var7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 21;
            var11 = var9[var4];
            var11 = var7.bind(var8)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var9[var4];
            var11 = var7.bind(var8)(var11);
            var11 = var11.t;
            var11 = var11.gpqgah;
            var12 = var12.bind(var13)(var11);
            var11 = 'acceptLabelText';
            var2[10] = var12;
            var12 = var3.acceptLabelGreenColor;
            var11 = 'acceptLabelColor';
            var2[10] = var12;
            var12 = var3.acceptLabelGreenBackgroundColor;
            var11 = 'acceptLabelBackgroundColor';
            var2[10] = var12;
            var12 = _closure1_slot1;
            var11 = 22;
            var11 = var9[var11];
            var13 = var12.bind(var8)(var11);
            var12 = var13.canAcceptInvite;
            var15 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var15;
            var12 = var12.bind(var13)(var11, var14);
            var11 = 'canBeAccepted';
            var2[10] = var12;
            var12 = true;
            var11 = 'embedCanBeTapped';
            var2[10] = var12;
            var5 = _closure1_slot16;
            var11 = var5.GUILD;
            var5 = 'type';
            var2[4] = var11;
            var5 = 'voiceUsers';
            var2[4] = var10;
            var5 = 'voiceStartTimestamp';
            var2[4] = var6;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var10 = var5.intl;
            var6 = var10.string;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.zSqdrS;
            var6 = var6.bind(var10)(var5);
            var5 = 'emptyStateText';
            var2[4] = var6;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.dI3q4h;
            var5 = var5.bind(var6)(var4);
            var4 = var5.toUpperCase;
            var5 = var4.bind(var5)();
            var4 = 'streamingLabel';
            var2[3] = var5;
            var4 = var3.voiceHeaderBackgroundColor;
            var3 = 'voiceHeaderBackgroundColor';
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