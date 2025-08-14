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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTargetTypes;
    var _closure1_slot11 = var4;
    var4 = ['embedded_cover'];
    var _closure1_slot12 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createEmbeddedActivityInviteEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.inviteCode;
            var7 = var1.theme;
            var8 = undefined;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot9;
            var1 = var3.getInvite;
            var3 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 1140; continue _fun0001 }
 50:
            var9 = var3.target_type;
            var6 = var3.target_application;
            var5 = _closure1_slot11;
            var5 = var5.EMBEDDED_APPLICATION;
            if(!(var9 === var5)) { _fun0001_ip = 1138; continue _fun0001 }
 79:
            if(!(var1 != var6)) { _fun0001_ip = 1138; continue _fun0001 }
 86:
            var10 = _closure1_slot7;
            var9 = var10.getApplication;
            var5 = var6.id;
            var5 = var9.bind(var10)(var5);
            if(!(var1 == var5)) { _fun0001_ip = 156; continue _fun0001 }
 110:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var10 = var9.bind(var8)(var5);
            var9 = var10.dispatch;
            var5 = {};
            var11 = 'APPLICATION_UPDATE';
            var5['type'] = var11;
            var5['application'] = var6;
            var5 = var9.bind(var10)(var5);
 156:
            var18 = var6.id;
            _closure2_slot0 = var18;
            var9 = _closure1_slot5;
            var5 = var9.getApplicationAssetFetchState;
            var9 = var5.bind(var9)(var18);
            var5 = _closure1_slot6;
            var5 = var5.NOT_FETCHED;
            if(!(var9 === var5)) { _fun0001_ip = 230; continue _fun0001 }
 194:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 9;
            var5 = var10[var5];
            var10 = var9.bind(var8)(var5);
            var9 = var10.fetchAssetIds;
            var5 = _closure1_slot12;
            var5 = var9.bind(var10)(var18, var5);
 230:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 10;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var7 = var5.bind(var8)(var7);
            var5 = var7.baseColors;
            var7 = var7.colors;
            var13 = var7.acceptLabelGreenBackgroundColor;
            var7 = var3.channel;
            var9 = var1 == var7;
            var19 = undefined;
            if(var9) { _fun0001_ip = 291; continue _fun0001 }
 286:
            var19 = var7.name;
 291:
            var7 = var3.guild;
            var9 = var1 == var7;
            var17 = undefined;
            if(var9) { _fun0001_ip = 310; continue _fun0001 }
 305:
            var17 = var7.name;
 310:
            var7 = var3.channel;
            var9 = var1 == var7;
            var16 = undefined;
            if(var9) { _fun0001_ip = 329; continue _fun0001 }
 324:
            var16 = var7.id;
 329:
            var3 = var3.guild;
            var7 = var1 == var3;
            var15 = undefined;
            if(var7) { _fun0001_ip = 348; continue _fun0001 }
 343:
            var15 = var3.id;
 348:
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 362; continue _fun0001 }
 357:
            var3 = var6.name;
 362:
            var6 = var1 != var3;
            var14 = null;
            if(!var6) { _fun0001_ip = 374; continue _fun0001 }
 371:
            var14 = var3;
 374:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 11;
            var6 = var3[var9];
            var6 = var10.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var3[var9];
            var3 = var10.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.1qHIZ2;
            var12 = var6.bind(var7)(var3);
            var3 = var1 != var19;
            var11 = null;
            if(!var3) { _fun0001_ip = 517; continue _fun0001 }
 440:
            var3 = var1 != var17;
            var11 = null;
            if(!var3) { _fun0001_ip = 517; continue _fun0001 }
 449:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var9];
            var7 = var6.bind(var8)(var7);
            var10 = var7.intl;
            var7 = var10.formatToParts;
            var3 = var3[var9];
            var3 = var6.bind(var8)(var3);
            var3 = var3.t;
            var6 = var3.omZR7O;
            var3 = {};
            var3['channelName'] = var19;
            var3['guildName'] = var17;
            var11 = var7.bind(var10)(var6, var3);
 517:
            var3 = var1 != var16;
            if(!var3) { _fun0001_ip = 606; continue _fun0001 }
 524:
            var7 = _closure1_slot4;
            var6 = var7.getEmbeddedActivitiesForChannel;
            var7 = var6.bind(var7)(var16);
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
            if(var7) { _fun0001_ip = 603; continue _fun0001 }
 564:
            var10 = var6.userIds;
            var6 = var1 == var10;
            var2 = undefined;
            if(var6) { _fun0001_ip = 603; continue _fun0001 }
 579:
            var7 = var10.has;
            var17 = _closure1_slot8;
            var6 = var17.getId;
            var6 = var6.bind(var17)();
            var2 = var7.bind(var10)(var6);
 603:
            var3 = var2;
 606:
            if(!(var1 != var16)) { _fun0001_ip = 614; continue _fun0001 }
 610:
            if(!(var1 == var15)) { _fun0001_ip = 620; continue _fun0001 }
 614:
            var10 = new Array(0);
            _fun0001_ip = 665; continue _fun0001;
 620:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var7 = var6.bind(var8)(var2);
            var6 = var7.getEmbeddedActivityParticipantAvatarUris;
            var2 = {};
            var2['channelId'] = var16;
            var2['guildId'] = var15;
            var2['applicationId'] = var18;
            var10 = var6.bind(var7)(var2);
 665:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = var2[var9];
            var6 = var15.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var2[var9];
            var2 = var15.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.VJlc0d;
            var2 = var6.bind(var7)(var2);
            var7 = var10.length;
            var6 = 0;
            if(!(var6 !== var7)) { _fun0001_ip = 788; continue _fun0001 }
 728:
            var7 = var2;
            if(!var3) { _fun0001_ip = 840; continue _fun0001 }
 734:
            var17 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = var2[var9];
            var15 = var17.bind(var8)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var2 = var2[var9];
            var2 = var17.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.KC26NT;
            var7 = var15.bind(var16)(var2);
            _fun0001_ip = 840; continue _fun0001;
 788:
            var17 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = var2[var9];
            var15 = var17.bind(var8)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var2 = var2[var9];
            var2 = var17.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.I0v0Qk;
            var7 = var15.bind(var16)(var2);
 840:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var16 = 9;
            var2 = var2[var16];
            var17 = var15.bind(var8)(var2);
            var15 = var17.getAssetIds;
            var2 = _closure1_slot12;
            var17 = var15.bind(var17)(var18, var2);
            if(!(var1 == var17)) { _fun0001_ip = 884; continue _fun0001 }
 880:
            var17 = new Array(0);
 884:
            var15 = _closure1_slot3;
            var2 = 1;
            var2 = var15.bind(var8)(var17, var2);
            var17 = var2[var6];
            var2 = var1 != var17;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 946; continue _fun0001 }
 910:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var16];
            var16 = var15.bind(var8)(var2);
            var15 = var16.getAssetImage;
            var2 = 1024;
            var6 = var15.bind(var16)(var18, var17, var2);
 946:
            var2 = {};
            var22 = var2;
            var21 = var5;
            var5 = copyDataProperties(var22, var21);
            var5 = 'headerText';
            var2[var5] = var14;
            var5 = 'acceptLabelBackgroundColor';
            var2[var5] = var13;
            var5 = 'titleText';
            var2[var5] = var12;
            var5 = 'structurableSubtitleText';
            var2[var5] = var11;
            var5 = 'type';
            var2[var5] = var1;
            var5 = _closure1_slot10;
            var11 = var5.EMBEDDED_ACTIVITY_INVITE;
            var5 = 'extendedType';
            var2[var5] = var11;
            var5 = 'participantAvatarUris';
            var2[var5] = var10;
            var5 = 'acceptLabelText';
            var2[var5] = var7;
            var5 = 'splashUrl';
            var2[var5] = var6;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = var4[var9];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var9];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.PZLnuL;
            var5 = var5.bind(var6)(var4);
            var4 = 'noParticipantsText';
            var2[var4] = var5;
            var4 = !var3;
            var3 = 'ctaEnabled';
            var2[var3] = var4;
            return var2;
 1138:
            return var1;
 1140:
            return var1;
        }
    };
    var3['createEmbeddedActivityInviteEmbed'] = var2;
    return var1;
})();