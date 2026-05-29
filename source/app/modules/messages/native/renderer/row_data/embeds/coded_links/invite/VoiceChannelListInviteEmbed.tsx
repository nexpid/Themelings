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
            var2 = 15;
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
            var3 = _closure1_slot16;
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
    var _closure1_slot18 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BasicPermissions;
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot17 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canShowVoiceChannelListInviteEmbed(arg1) {
        var3 = _closure1_slot18;
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
            var16 = arg1;
            var1 = _closure1_slot18;
            var7 = undefined;
            var3 = var1.bind(var7)(var16);
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = var3.guild;
            var _closure2_slot0 = var8;
            var17 = var3.channel;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var4 = var4.bind(var7)(var3);
            var3 = arg2;
            var3 = var4.bind(var7)(var3);
            var10 = var3.colors;
            var14 = var3.baseColors;
            var3 = var8.icon;
            var3 = var1 != var3;
            var11 = undefined;
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var5 = var4.bind(var7)(var3);
            var4 = var5.getAssetUriForEmbed;
            var12 = _closure1_slot6;
            var6 = 128;
            var3 = false;
            var3 = var12.bind(var7)(var8, var6, var3);
            var11 = var4.bind(var5)(var3);
case 15:
            var6 = _closure1_slot14;
            var5 = var6.getVoiceStatesForChannelAlt;
            var4 = var17.id;
            var3 = var8.id;
            var3 = var5.bind(var6)(var4, var3);
            var5 = var3.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                return var1;
            };
            var22 = var5.bind(var3)(var4);
            var12 = new Array(0);
            var6 = 0;
            var23 = var12;
            var21 = 0;
            var21 = arraySpread(var23, var22, var21);
            var13 = var3.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.selfStream;
                var1 = !var1;
                return var1;
            };
            var22 = var13.bind(var3)(var4);
            var23 = var12;
            var4 = arraySpread(var23, var22, var21);
            var5 = var12.slice;
            var4 = 10;
            var5 = var5.bind(var12)(var6, var4);
            var4 = _closure1_slot4;
            var4 = var4.displayNameStylesEnabled;
            var _closure2_slot1 = var4;
            var4 = var5.map;
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
                    var1 = 18;
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
                    var1 = 18;
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
                    var7 = 19;
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
            var13 = var4.bind(var5)(var2);
            var4 = _closure1_slot5;
            var2 = var4.getStartTime;
            var2 = var2.bind(var4)(var17);
            var4 = var1 != var2;
            var12 = undefined;
            if(!var4) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var12 = var2;
case 37:
            var5 = _closure1_slot13;
            var4 = var5.getCurrentClientVoiceChannelId;
            var2 = var8.id;
            var5 = var4.bind(var5)(var2);
            var4 = var17.id;
            var2 = {};
            var23 = var2;
            var22 = var14;
            var15 = copyDataProperties(var23, var22);
            var18 = _closure1_slot3;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 20;
            var15 = var20[var15];
            var19 = var19.bind(var7)(var15);
            var15 = var19.getEmbedScrollGradientBackground;
            var19 = var15.bind(var19)();
            var20 = var1 != var19;
            var15 = undefined;
            if(!var20) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var15 = var19;
case 39:
            var15 = var18.bind(var7)(var15);
            if(!(var1 == var15)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var15 = var14.backgroundColor;
case 41:
            var14 = 'backgroundColor';
            var2[13] = var15;
            var14 = _closure1_slot15;
            var15 = var14.VOICE_CHANNEL_LIST_INVITE;
            var14 = 'extendedType';
            var2[13] = var15;
            var15 = var10.headerColor;
            var14 = 'headerColor';
            var2[13] = var15;
            var14 = var8.name;
            var8 = 'guildName';
            var2[7] = var14;
            var8 = 'guildIcon';
            var2[7] = var11;
            var11 = '';
            var8 = 'headerText';
            var2[7] = var11;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 21;
            var8 = var14[var8];
            var15 = var11.bind(var7)(var8);
            var14 = var15.computeChannelName;
            var11 = _closure1_slot12;
            var8 = _closure1_slot11;
            var11 = var14.bind(var15)(var17, var11, var8);
            var8 = 'titleText';
            var2[7] = var11;
            var3 = var3.length;
            if(!(!(var3 > var6))) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = var10.voiceMutedColor;
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var6 = var10.voiceActiveColor;
case 45:
            var3 = 'titleColor';
            var2[2] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 22;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var15 = var11.intl;
            var14 = var15.string;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.gpqgah;
            var14 = var14.bind(var15)(var11);
            var11 = 'acceptLabelText';
            var2[10] = var14;
            var14 = var10.acceptLabelGreenColor;
            var11 = 'acceptLabelColor';
            var2[10] = var14;
            var14 = var10.acceptLabelGreenBackgroundColor;
            var11 = 'acceptLabelBackgroundColor';
            var2[10] = var14;
            var14 = _closure1_slot1;
            var11 = 23;
            var11 = var8[var11];
            var15 = var14.bind(var7)(var11);
            var14 = var15.canAcceptInvite;
            var17 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var17;
            var14 = var14.bind(var15)(var11, var16);
            var11 = 'canBeAccepted';
            var2[10] = var14;
            var14 = true;
            var11 = 'embedCanBeTapped';
            var2[10] = var14;
            var11 = _closure1_slot17;
            var14 = var11.GUILD;
            var11 = 'type';
            var2[10] = var14;
            var11 = 'voiceUsers';
            var2[10] = var13;
            var11 = 'voiceStartTimestamp';
            var2[10] = var12;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.zSqdrS;
            var12 = var12.bind(var13)(var11);
            var11 = 'emptyStateText';
            var2[10] = var12;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var13 = var11.intl;
            var12 = var13.string;
            var11 = var8[var3];
            var11 = var6.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.dI3q4h;
            var12 = var12.bind(var13)(var11);
            var11 = var12.toUpperCase;
            var12 = var11.bind(var12)();
            var11 = 'streamingLabel';
            var2[10] = var12;
            var11 = var10.voiceHeaderBackgroundColor;
            var10 = 'voiceHeaderBackgroundColor';
            var2[9] = var11;
            var9 = _closure1_slot4;
            var10 = var9.useReducedMotion;
            var9 = 'reducedMotion';
            var2[8] = var10;
            var5 = var5 === var4;
            var4 = 'isConnected';
            var2[3] = var5;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.fkg9mQ;
            var4 = var4.bind(var5)(var3);
            var3 = 'privacyHintText';
            var2[2] = var4;
            return var2;
case 13:
            return var1;
        }
    };
    var3['createVoiceChannelListInviteEmbed'] = var2;
    return var1;
})();