// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function resolveVoiceChannelListInviteEmbedData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = var6.guild;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot9;
            var4 = var5.getGuild;
            var2 = var6.guild;
            var2 = var2.id;
            var5 = var4.bind(var5)(var2);
            if(!(var1 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)(var6);
            var2 = var2.channel;
            if(!(var1 != var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var2.isGuildVocal;
            var4 = var4.bind(var2)();
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var7 = _closure1_slot7;
            var6 = var7.getChannel;
            var4 = var2.id;
            var4 = var6.bind(var7)(var4);
            if(!(var1 != var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var4;
case 9:
            var6 = _closure1_slot10;
            var4 = var6.canBasicChannel;
            var3 = _closure1_slot15;
            var3 = var3.VIEW_CHANNEL;
            var3 = var4.bind(var6)(var3, var2);
            var4 = var2;
            var2 = null;
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = {};
            var3['guild'] = var5;
            var3['channel'] = var4;
            var2 = var3;
case 11:
            return var2;
case 6:
            return var1;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = function canShowVoiceChannelListInviteEmbed(arg1) {
        var3 = _closure1_slot17;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['canShowVoiceChannelListInviteEmbed'] = var4;
    var2 = function createVoiceChannelListInviteEmbed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var14 = arg1;
            var1 = _closure1_slot17;
            var9 = undefined;
            var4 = var1.bind(var9)(var14);
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = var4.guild;
            var _closure2_slot0 = var8;
            var15 = var4.channel;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 15;
            var4 = var6[var4];
            var5 = var5.bind(var9)(var4);
            var4 = arg2;
            var5 = var5.bind(var9)(var4);
            var4 = var5.colors;
            var12 = var5.baseColors;
            var5 = var8.icon;
            var5 = var1 != var5;
            var10 = undefined;
            if(!var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 16;
            var5 = var7[var5];
            var7 = var6.bind(var9)(var5);
            var6 = var7.getAssetUriForEmbed;
            var13 = _closure1_slot6;
            var11 = 128;
            var5 = false;
            var5 = var13.bind(var9)(var8, var11, var5);
            var10 = var6.bind(var7)(var5);
case 15:
            var11 = _closure1_slot13;
            var7 = var11.getVoiceStatesForChannelAlt;
            var6 = var15.id;
            var5 = var8.id;
            var5 = var7.bind(var11)(var6, var5);
            var7 = var5.filter;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                return var1;
            };
            var20 = var7.bind(var5)(var6);
            var13 = new Array(0);
            var6 = 0;
            var21 = var13;
            var19 = 0;
            var19 = arraySpread(var21, var20, var19);
            var16 = var5.filter;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                var1 = !var1;
                return var1;
            };
            var20 = var16.bind(var5)(var7);
            var21 = var13;
            var7 = arraySpread(var21, var20, var19);
            var11 = var13.slice;
            var7 = 10;
            var11 = var11.bind(var13)(var6, var7);
            var7 = _closure1_slot4;
            var7 = var7.displayNameStylesEnabled;
            var _closure2_slot1 = var7;
            var7 = var11.map;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var6 = var4.member;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var7 = _closure1_slot8;
                    var5 = var7.getMember;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = var4.user;
                    var1 = var1.id;
                    var6 = var5.bind(var7)(var2, var1);
case 17:
                    var2 = var3 == var6;
                    var9 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var1 = var6.avatar;
case 19:
                    if(!(var3 == var1)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
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
                    _fun0003_ip = 23; continue _fun0003;
case 21:
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
case 23:
                    var1 = _closure2_slot1;
                    var2 = undefined;
                    if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var7 = var3 == var6;
                    var1 = undefined;
                    if(var7) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var6 = var6.displayNameStyles;
                    var7 = var3 == var6;
                    var1 = undefined;
                    if(var7) { _fun0003_ip = 26; continue _fun0003 }
case 28:
                    var1 = var6.fontId;
case 26:
                    if(!(var3 == var1)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var6 = var4.user;
                    var7 = var6.displayNameStyles;
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var6 = var7.fontId;
case 31:
                    var1 = var6;
case 29:
                    var2 = var1;
case 24:
                    var1 = {};
                    var6 = var4.user;
                    var6 = var6.id;
                    var1['userId'] = var6;
                    var6 = var4.nick;
                    if(!(var3 == var6)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 18;
                    var7 = var10[var7];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.getName;
                    var7 = var4.user;
                    var6 = var8.bind(var9)(var7);
case 33:
                    var1['displayName'] = var6;
                    var1['avatarUrl'] = var5;
                    var4 = var4.voiceState;
                    var4 = var4.selfStream;
                    var3 = var3 != var4;
                    if(!var3) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var3 = var4;
case 35:
                    var1['isStreaming'] = var3;
                    var1['fontId'] = var2;
                    return var1;
                }
            };
            var11 = var7.bind(var11)(var2);
            var7 = _closure1_slot5;
            var2 = var7.getStartTime;
            var2 = var2.bind(var7)(var15);
            var13 = var1 != var2;
            var7 = undefined;
            if(!var13) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var7 = var2;
case 37:
            var2 = {};
            var21 = var2;
            var20 = var12;
            var13 = copyDataProperties(var21, var20);
            var16 = _closure1_slot3;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 19;
            var13 = var18[var13];
            var17 = var17.bind(var9)(var13);
            var13 = var17.getEmbedScrollGradientBackground;
            var17 = var13.bind(var17)();
            var18 = var1 != var17;
            var13 = undefined;
            if(!var18) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var13 = var17;
case 39:
            var13 = var16.bind(var9)(var13);
            if(!(var1 == var13)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var13 = var12.backgroundColor;
case 41:
            var12 = 'backgroundColor';
            var2[11] = var13;
            var12 = _closure1_slot14;
            var13 = var12.VOICE_CHANNEL_LIST_INVITE;
            var12 = 'extendedType';
            var2[11] = var13;
            var13 = var4.headerColor;
            var12 = 'headerColor';
            var2[11] = var13;
            var12 = var8.name;
            var8 = 'guildName';
            var2[7] = var12;
            var8 = 'guildIcon';
            var2[7] = var10;
            var10 = '';
            var8 = 'headerText';
            var2[7] = var10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 20;
            var8 = var12[var8];
            var13 = var10.bind(var9)(var8);
            var12 = var13.computeChannelName;
            var10 = _closure1_slot12;
            var8 = _closure1_slot11;
            var10 = var12.bind(var13)(var15, var10, var8);
            var8 = 'titleText';
            var2[7] = var10;
            var5 = var5.length;
            if(!(!(var5 > var6))) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = var4.voiceMutedColor;
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var6 = var4.voiceActiveColor;
case 45:
            var5 = 'titleColor';
            var2[4] = var6;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 21;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var13 = var6.intl;
            var12 = var13.string;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.gpqgah;
            var12 = var12.bind(var13)(var6);
            var6 = 'acceptLabelText';
            var2[5] = var12;
            var12 = var4.acceptLabelGreenColor;
            var6 = 'acceptLabelColor';
            var2[5] = var12;
            var12 = var4.acceptLabelGreenBackgroundColor;
            var6 = 'acceptLabelBackgroundColor';
            var2[5] = var12;
            var12 = _closure1_slot1;
            var6 = 22;
            var6 = var10[var6];
            var13 = var12.bind(var9)(var6);
            var12 = var13.canAcceptInvite;
            var15 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var15;
            var12 = var12.bind(var13)(var6, var14);
            var6 = 'canBeAccepted';
            var2[5] = var12;
            var12 = true;
            var6 = 'embedCanBeTapped';
            var2[5] = var12;
            var6 = _closure1_slot16;
            var12 = var6.GUILD;
            var6 = 'type';
            var2[5] = var12;
            var6 = 'voiceUsers';
            var2[5] = var11;
            var6 = 'voiceStartTimestamp';
            var2[5] = var7;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var11 = var6.intl;
            var7 = var11.string;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.zSqdrS;
            var7 = var7.bind(var11)(var6);
            var6 = 'emptyStateText';
            var2[5] = var7;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.dI3q4h;
            var6 = var6.bind(var7)(var5);
            var5 = var6.toUpperCase;
            var6 = var5.bind(var6)();
            var5 = 'streamingLabel';
            var2[4] = var6;
            var5 = var4.voiceHeaderBackgroundColor;
            var4 = 'voiceHeaderBackgroundColor';
            var2[3] = var5;
            var3 = _closure1_slot4;
            var4 = var3.useReducedMotion;
            var3 = 'reducedMotion';
            var2[2] = var4;
            return var2;
case 13:
            return var1;
        }
    };
    var3['createVoiceChannelListInviteEmbed'] = var2;
    return var1;
})();