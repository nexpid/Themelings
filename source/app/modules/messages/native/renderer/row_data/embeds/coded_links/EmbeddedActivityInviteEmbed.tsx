// app/modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx
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
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTargetTypes;
    var _closure1_slot15 = var4;
    var4 = ['embedded_cover'];
    var _closure1_slot16 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createEmbeddedActivityInviteEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.inviteCode;
            var7 = var1.theme;
            var8 = undefined;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot11;
            var1 = var3.getInvite;
            var3 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var3.target_type;
            var6 = var3.target_application;
            var5 = _closure1_slot15;
            var5 = var5.EMBEDDED_APPLICATION;
            if(!(var9 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 != var6)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var10 = _closure1_slot8;
            var9 = var10.getApplication;
            var5 = var6.id;
            var5 = var9.bind(var10)(var5);
            if(!(var1 == var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var10 = var9.bind(var8)(var5);
            var9 = var10.dispatch;
            var5 = {};
            var11 = 'APPLICATION_UPDATE';
            var5['type'] = var11;
            var5['application'] = var6;
            var5 = var9.bind(var10)(var5);
case 7:
            var19 = var6.id;
            _closure2_slot0 = var19;
            var9 = _closure1_slot6;
            var5 = var9.getApplicationAssetFetchState;
            var9 = var5.bind(var9)(var19);
            var5 = _closure1_slot7;
            var5 = var5.NOT_FETCHED;
            if(!(var9 === var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 13;
            var5 = var10[var5];
            var10 = var9.bind(var8)(var5);
            var9 = var10.fetchAssetIds;
            var5 = _closure1_slot16;
            var5 = var9.bind(var10)(var19, var5);
case 9:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 14;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var7 = var5.bind(var8)(var7);
            var5 = var7.baseColors;
            var7 = var7.colors;
            var13 = var7.acceptLabelGreenBackgroundColor;
            var7 = var3.guild;
            var9 = var1 == var7;
            var18 = undefined;
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var18 = var7.name;
case 11:
            var7 = var3.channel;
            var9 = var1 == var7;
            var17 = undefined;
            if(var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var17 = var7.id;
case 13:
            var3 = var3.guild;
            var7 = var1 == var3;
            var16 = undefined;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var16 = var3.id;
case 15:
            var3 = var1 != var17;
            var24 = null;
            if(!var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = _closure1_slot10;
            var3 = var7.getChannel;
            var24 = var3.bind(var7)(var17);
case 17:
            var3 = var1 != var24;
            var9 = null;
            if(!var3) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var3 = var10[var3];
            var7 = var7.bind(var8)(var3);
            var3 = var7.getSimpleChannelIcon;
            var9 = var3.bind(var7)(var24);
case 19:
            var3 = var1 != var9;
            var15 = undefined;
            if(!var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = _closure1_slot4;
            var3 = var7.resolveAssetSource;
            var7 = var3.bind(var7)(var9);
            var9 = var1 == var7;
            var3 = undefined;
            if(var9) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var3 = var7.uri;
case 23:
            var15 = var3;
case 21:
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var3 = var6.name;
case 25:
            var6 = var1 != var3;
            var14 = null;
            if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var14 = var3;
case 27:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 16;
            var6 = var3[var9];
            var6 = var10.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var3[var9];
            var3 = var10.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3["1qHIZ4"];
            var12 = var6.bind(var7)(var3);
            if(!(var1 != var24)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            if(!(var1 == var18)) { _fun0001_ip = 31; continue _fun0001 }
case 29:
            var3 = var1 != var18;
            var11 = null;
            if(!var3) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var9];
            var7 = var6.bind(var8)(var7);
            var10 = var7.intl;
            var7 = var10.formatToParts;
            var3 = var3[var9];
            var3 = var6.bind(var8)(var3);
            var3 = var3.t;
            var6 = var3.u0vaDE;
            var3 = {};
            var3['guildName'] = var18;
            var11 = var7.bind(var10)(var6, var3);
            _fun0001_ip = 32; continue _fun0001;
case 31:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = var22[var9];
            var3 = var21.bind(var8)(var3);
            var10 = var3.intl;
            var7 = var10.formatToParts;
            var3 = var22[var9];
            var3 = var21.bind(var8)(var3);
            var3 = var3.t;
            var6 = var3.omZR7L;
            var3 = {};
            var20 = 17;
            var20 = var22[var20];
            var23 = var21.bind(var8)(var20);
            var22 = var23.computeChannelName;
            var21 = _closure1_slot13;
            var20 = _closure1_slot12;
            var20 = var22.bind(var23)(var24, var21, var20);
            var3['channelName'] = var20;
            var3['guildName'] = var18;
            var11 = var7.bind(var10)(var6, var3);
case 32:
            var3 = var1 != var17;
            if(!var3) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = _closure1_slot5;
            var6 = var7.getEmbeddedActivitiesForChannel;
            var7 = var6.bind(var7)(var17);
            var6 = var7.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var6.bind(var7)(var2);
            var7 = var1 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var10 = var6.userIds;
            var6 = var1 == var10;
            var2 = undefined;
            if(var6) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var7 = var10.has;
            var18 = _closure1_slot9;
            var6 = var18.getId;
            var6 = var6.bind(var18)();
            var2 = var7.bind(var10)(var6);
case 36:
            var3 = var2;
case 34:
            if(!(var1 != var17)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            if(!(var1 == var16)) { _fun0001_ip = 41; continue _fun0001 }
case 39:
            var10 = new Array(0);
            _fun0001_ip = 42; continue _fun0001;
case 41:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var7 = var6.bind(var8)(var2);
            var6 = var7.getEmbeddedActivityParticipantAvatarUris;
            var2 = {};
            var2['channelId'] = var17;
            var2['guildId'] = var16;
            var2['applicationId'] = var19;
            var10 = var6.bind(var7)(var2);
case 42:
            var16 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = var2[var9];
            var6 = var16.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var2[var9];
            var2 = var16.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.VJlc0S;
            var2 = var6.bind(var7)(var2);
            var7 = var10.length;
            var6 = 0;
            if(!(var6 !== var7)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var7 = var2;
            if(!var3) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var18 = _closure1_slot0;
            var2 = _closure1_slot2;
            var16 = var2[var9];
            var16 = var18.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var2 = var2[var9];
            var2 = var18.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.KC26NR;
            var7 = var16.bind(var17)(var2);
            _fun0001_ip = 45; continue _fun0001;
case 43:
            var18 = _closure1_slot0;
            var2 = _closure1_slot2;
            var16 = var2[var9];
            var16 = var18.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var2 = var2[var9];
            var2 = var18.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.I0v0Qv;
            var7 = var16.bind(var17)(var2);
case 45:
            var16 = _closure1_slot0;
            var2 = _closure1_slot2;
            var17 = 13;
            var2 = var2[var17];
            var18 = var16.bind(var8)(var2);
            var16 = var18.getAssetIds;
            var2 = _closure1_slot16;
            var18 = var16.bind(var18)(var19, var2);
            if(!(var1 == var18)) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var18 = new Array(0);
case 47:
            var16 = _closure1_slot3;
            var2 = 1;
            var2 = var16.bind(var8)(var18, var2);
            var18 = var2[var6];
            var2 = var1 != var18;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var16 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var17 = var16.bind(var8)(var2);
            var16 = var17.getAssetImage;
            var2 = 1024;
            var6 = var16.bind(var17)(var19, var18, var2);
case 49:
            var2 = {};
            var27 = var2;
            var26 = var5;
            var5 = copyDataProperties(var27, var26);
            var5 = 'channelIcon';
            var2[4] = var15;
            var5 = 'headerText';
            var2[4] = var14;
            var5 = 'acceptLabelBackgroundColor';
            var2[4] = var13;
            var5 = 'titleText';
            var2[4] = var12;
            var5 = 'structurableSubtitleText';
            var2[4] = var11;
            var5 = 'type';
            var2[4] = var1;
            var5 = _closure1_slot14;
            var11 = var5.EMBEDDED_ACTIVITY_INVITE;
            var5 = 'extendedType';
            var2[4] = var11;
            var5 = 'participantAvatarUris';
            var2[4] = var10;
            var5 = 'acceptLabelText';
            var2[4] = var7;
            var5 = 'splashUrl';
            var2[4] = var6;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = var4[var9];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var9];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.PZLnuD;
            var5 = var5.bind(var6)(var4);
            var4 = 'noParticipantsText';
            var2[3] = var5;
            var4 = !var3;
            var3 = 'ctaEnabled';
            var2[2] = var4;
            return var2;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['createEmbeddedActivityInviteEmbed'] = var2;
    return var1;
})();