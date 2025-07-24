// app/modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTargetTypes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = ['embedded_cover'];
    var _closure1_slot14 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function EmbeddedActivityInviteEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.inviteCode;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 15;
            var1 = var10[var6];
            var8 = var3.bind(var4)(var1);
            var5 = var8.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getInvite;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var8)(var3, var1);
            var9 = _closure1_slot1;
            var5 = 16;
            var3 = var10[var5];
            var11 = var9.bind(var4)(var3);
            var13 = null;
            var8 = var13 != var1;
            var3 = 'invalid embedded application invite';
            var3 = var11.bind(var4)(var8, var3);
            var8 = var1.target_type;
            var3 = var1.target_application;
            var5 = var10[var5];
            var9 = var9.bind(var4)(var5);
            var5 = _closure1_slot12;
            var5 = var5.EMBEDDED_APPLICATION;
            var8 = var8 === var5;
            if(!var8) { _fun0001_ip = 152; continue _fun0001 }
 148:
            var8 = var13 != var3;
 152:
            var5 = 'invalid embedded application for invite';
            var5 = var9.bind(var4)(var8, var5);
            var18 = var3.id;
            _closure2_slot1 = var18;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = var8[var6];
            var11 = var5.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getApplication;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var6 = var8[var6];
            var11 = var5.bind(var4)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getApplicationAssetFetchState;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9, var6);
            var6 = _closure1_slot7;
            var6 = var6.NOT_FETCHED;
            var11 = var9 === var6;
            _closure2_slot2 = var11;
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var6 = new Array(2);
            var6[0] = var18;
            var6[1] = var11;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.fetchAssetIds;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot14;
                    var1 = var3.bind(var4)(var2, var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2, var6);
            var2 = 17;
            var2 = var8[var2];
            var6 = var5.bind(var4)(var2);
            var2 = var6.useMessageRendererTheme;
            var6 = var2.bind(var6)();
            var2 = 12;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useEmbedThemeColors;
            var2 = var2.bind(var5)(var6);
            var8 = var2.baseColors;
            var2 = var2.colors;
            var16 = var2.acceptLabelGreenBackgroundColor;
            var2 = var1.channel;
            var5 = var13 == var2;
            var12 = undefined;
            if(var5) { _fun0001_ip = 386; continue _fun0001 }
 381:
            var12 = var2.name;
 386:
            var2 = var1.guild;
            var5 = var13 == var2;
            var11 = undefined;
            if(var5) { _fun0001_ip = 405; continue _fun0001 }
 400:
            var11 = var2.name;
 405:
            var5 = var1.channel;
            var6 = var13 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 424; continue _fun0001 }
 419:
            var2 = var5.id;
 424:
            var1 = var1.guild;
            var5 = var13 == var1;
            var6 = undefined;
            if(var5) { _fun0001_ip = 443; continue _fun0001 }
 438:
            var6 = var1.id;
 443:
            var5 = var13 == var3;
            var1 = undefined;
            if(var5) { _fun0001_ip = 457; continue _fun0001 }
 452:
            var1 = var3.name;
 457:
            var3 = var13 != var1;
            var17 = null;
            if(!var3) { _fun0001_ip = 469; continue _fun0001 }
 466:
            var17 = var1;
 469:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 13;
            var3 = var1[var10];
            var3 = var9.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var1[var10];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.1qHIZ2;
            var15 = var3.bind(var5)(var1);
            var1 = var13 != var12;
            var14 = null;
            if(!var1) { _fun0001_ip = 608; continue _fun0001 }
 533:
            var1 = var13 != var11;
            var14 = null;
            if(!var1) { _fun0001_ip = 608; continue _fun0001 }
 542:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = var1[var10];
            var5 = var3.bind(var4)(var5);
            var9 = var5.intl;
            var5 = var9.formatToParts;
            var1 = var1[var10];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var3 = var1.omZR7O;
            var1 = {};
            var1['channelName'] = var12;
            var1['guildName'] = var11;
            var14 = var5.bind(var9)(var3, var1);
 608:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var9 = var1.bind(var4)(var2, var18);
            var1 = var13 == var9;
            var5 = undefined;
            if(var1) { _fun0001_ip = 682; continue _fun0001 }
 643:
            var3 = var9.userIds;
            var1 = var13 == var3;
            var5 = undefined;
            if(var1) { _fun0001_ip = 682; continue _fun0001 }
 658:
            var2 = var3.has;
            var11 = _closure1_slot9;
            var1 = var11.getId;
            var1 = var1.bind(var11)();
            var5 = var2.bind(var3)(var1);
 682:
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 14;
            var2 = var1[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['activity'] = var9;
            var2['guildId'] = var6;
            var12 = var3.bind(var4)(var2);
            var6 = _closure1_slot0;
            var2 = var1[var10];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var10];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.VJlc0d;
            var1 = var2.bind(var3)(var1);
            var3 = var12.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 837; continue _fun0001 }
 777:
            var11 = var1;
            if(!var5) { _fun0001_ip = 889; continue _fun0001 }
 783:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var10];
            var3 = var9.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var1 = var1[var10];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.KC26NT;
            var11 = var3.bind(var6)(var1);
            _fun0001_ip = 889; continue _fun0001;
 837:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var10];
            var3 = var9.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var1 = var1[var10];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.I0v0Qk;
            var11 = var3.bind(var6)(var1);
 889:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 11;
            var1 = var1[var3];
            var9 = var6.bind(var4)(var1);
            var6 = var9.getAssetIds;
            var1 = _closure1_slot14;
            var9 = var6.bind(var9)(var18, var1);
            if(!(var13 == var9)) { _fun0001_ip = 933; continue _fun0001 }
 929:
            var9 = new Array(0);
 933:
            var6 = _closure1_slot3;
            var1 = 1;
            var1 = var6.bind(var4)(var9, var1);
            var6 = var1[var2];
            var1 = var13 != var6;
            var9 = undefined;
            if(!var1) { _fun0001_ip = 995; continue _fun0001 }
 959:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getAssetImage;
            var1 = 1024;
            var9 = var2.bind(var3)(var18, var6, var1);
 995:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 19;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var21 = var1;
            var20 = var8;
            var8 = copyDataProperties(var21, var20);
            var8 = 'headerText';
            var1[var8] = var17;
            var8 = 'acceptLabelBackgroundColor';
            var1[var8] = var16;
            var8 = 'titleText';
            var1[var8] = var15;
            var8 = 'structurableSubtitleText';
            var1[var8] = var14;
            var8 = 'type';
            var1[var8] = var13;
            var8 = _closure1_slot11;
            var13 = var8.EMBEDDED_ACTIVITY_INVITE;
            var8 = 'extendedType';
            var1[var8] = var13;
            var8 = 'participantAvatarUris';
            var1[var8] = var12;
            var8 = 'acceptLabelText';
            var1[var8] = var11;
            var8 = 'splashUrl';
            var1[var8] = var9;
            var9 = _closure1_slot0;
            var7 = var6[var10];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var10];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.PZLnuL;
            var7 = var7.bind(var8)(var6);
            var6 = 'noParticipantsText';
            var1[var6] = var7;
            var6 = !var5;
            var5 = 'ctaEnabled';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createEmbeddedActivityInviteEmbed(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.inviteCode;
            var7 = var1.theme;
            var8 = undefined;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot10;
            var1 = var3.getInvite;
            var3 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 1129; continue _fun0003 }
 50:
            var9 = var3.target_type;
            var6 = var3.target_application;
            var5 = _closure1_slot12;
            var5 = var5.EMBEDDED_APPLICATION;
            if(!(var9 === var5)) { _fun0003_ip = 1127; continue _fun0003 }
 79:
            if(!(var1 != var6)) { _fun0003_ip = 1127; continue _fun0003 }
 86:
            var10 = _closure1_slot8;
            var9 = var10.getApplication;
            var5 = var6.id;
            var5 = var9.bind(var10)(var5);
            if(!(var1 == var5)) { _fun0003_ip = 156; continue _fun0003 }
 110:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 10;
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
            var9 = _closure1_slot6;
            var5 = var9.getApplicationAssetFetchState;
            var9 = var5.bind(var9)(var18);
            var5 = _closure1_slot7;
            var5 = var5.NOT_FETCHED;
            if(!(var9 === var5)) { _fun0003_ip = 230; continue _fun0003 }
 194:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 11;
            var5 = var10[var5];
            var10 = var9.bind(var8)(var5);
            var9 = var10.fetchAssetIds;
            var5 = _closure1_slot14;
            var5 = var9.bind(var10)(var18, var5);
 230:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var7 = var5.bind(var8)(var7);
            var5 = var7.baseColors;
            var7 = var7.colors;
            var13 = var7.acceptLabelGreenBackgroundColor;
            var7 = var3.channel;
            var9 = var1 == var7;
            var19 = undefined;
            if(var9) { _fun0003_ip = 291; continue _fun0003 }
 286:
            var19 = var7.name;
 291:
            var7 = var3.guild;
            var9 = var1 == var7;
            var17 = undefined;
            if(var9) { _fun0003_ip = 310; continue _fun0003 }
 305:
            var17 = var7.name;
 310:
            var7 = var3.channel;
            var9 = var1 == var7;
            var16 = undefined;
            if(var9) { _fun0003_ip = 329; continue _fun0003 }
 324:
            var16 = var7.id;
 329:
            var3 = var3.guild;
            var7 = var1 == var3;
            var15 = undefined;
            if(var7) { _fun0003_ip = 348; continue _fun0003 }
 343:
            var15 = var3.id;
 348:
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0003_ip = 362; continue _fun0003 }
 357:
            var3 = var6.name;
 362:
            var6 = var1 != var3;
            var14 = null;
            if(!var6) { _fun0003_ip = 374; continue _fun0003 }
 371:
            var14 = var3;
 374:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 13;
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
            if(!var3) { _fun0003_ip = 513; continue _fun0003 }
 438:
            var3 = var1 != var17;
            var11 = null;
            if(!var3) { _fun0003_ip = 513; continue _fun0003 }
 447:
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
 513:
            var3 = var1 != var16;
            if(!var3) { _fun0003_ip = 601; continue _fun0003 }
 520:
            var7 = _closure1_slot5;
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
            if(var7) { _fun0003_ip = 598; continue _fun0003 }
 559:
            var10 = var6.userIds;
            var6 = var1 == var10;
            var2 = undefined;
            if(var6) { _fun0003_ip = 598; continue _fun0003 }
 574:
            var7 = var10.has;
            var17 = _closure1_slot9;
            var6 = var17.getId;
            var6 = var6.bind(var17)();
            var2 = var7.bind(var10)(var6);
 598:
            var3 = var2;
 601:
            if(!(var1 != var16)) { _fun0003_ip = 609; continue _fun0003 }
 605:
            if(!(var1 == var15)) { _fun0003_ip = 615; continue _fun0003 }
 609:
            var10 = new Array(0);
            _fun0003_ip = 660; continue _fun0003;
 615:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var7 = var6.bind(var8)(var2);
            var6 = var7.getEmbeddedActivityParticipantAvatarUris;
            var2 = {};
            var2['channelId'] = var16;
            var2['guildId'] = var15;
            var2['applicationId'] = var18;
            var10 = var6.bind(var7)(var2);
 660:
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
            if(!(var6 !== var7)) { _fun0003_ip = 783; continue _fun0003 }
 723:
            var7 = var2;
            if(!var3) { _fun0003_ip = 835; continue _fun0003 }
 729:
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
            _fun0003_ip = 835; continue _fun0003;
 783:
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
 835:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var16 = 11;
            var2 = var2[var16];
            var17 = var15.bind(var8)(var2);
            var15 = var17.getAssetIds;
            var2 = _closure1_slot14;
            var17 = var15.bind(var17)(var18, var2);
            if(!(var1 == var17)) { _fun0003_ip = 879; continue _fun0003 }
 875:
            var17 = new Array(0);
 879:
            var15 = _closure1_slot3;
            var2 = 1;
            var2 = var15.bind(var8)(var17, var2);
            var17 = var2[var6];
            var2 = var1 != var17;
            var6 = undefined;
            if(!var2) { _fun0003_ip = 941; continue _fun0003 }
 905:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var16];
            var16 = var15.bind(var8)(var2);
            var15 = var16.getAssetImage;
            var2 = 1024;
            var6 = var15.bind(var16)(var18, var17, var2);
 941:
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
            var5 = _closure1_slot11;
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
 1127:
            return var1;
 1129:
            return var1;
        }
    };
    var3['createEmbeddedActivityInviteEmbed'] = var2;
    return var1;
})();