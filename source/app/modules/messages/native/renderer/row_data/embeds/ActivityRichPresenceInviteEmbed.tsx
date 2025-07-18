// app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SpotifyApplication;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot10 = var7;
    var4 = var4.ActivityTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isSpotifyParty;
    var _closure1_slot12 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var20 = arg1;
            var19 = arg2;
            var _closure2_slot0 = var19;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.getIsRichPresenceActivityInviteRedesignEnabled;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0001_ip = 276; continue _fun0001 }
 53:
            var1 = var20.author;
            var9 = null;
            if(!(var9 != var1)) { _fun0001_ip = 276; continue _fun0001 }
 68:
            var1 = var20.activity;
            if(!(var9 != var1)) { _fun0001_ip = 276; continue _fun0001 }
 81:
            if(!(var9 != var19)) { _fun0001_ip = 276; continue _fun0001 }
 88:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var8)(var1);
            var1 = var2.getApplicationFromMessage;
            var2 = var1.bind(var2)(var20);
            var1 = var20.application;
            var3 = var9 == var1;
            var10 = undefined;
            if(var3) { _fun0001_ip = 138; continue _fun0001 }
 133:
            var10 = var1.id;
 138:
            var3 = var9 != var10;
            var1 = null;
            if(!var3) { _fun0001_ip = 162; continue _fun0001 }
 147:
            var5 = _closure1_slot3;
            var3 = var5.getApplication;
            var1 = var3.bind(var5)(var10);
 162:
            var3 = var9 == var1;
            if(!var3) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var3 = var9 != var10;
 173:
            if(!var3) { _fun0001_ip = 197; continue _fun0001 }
 176:
            var6 = _closure1_slot3;
            var5 = var6.isFetchingApplication;
            var6 = var5.bind(var6)(var10);
            var5 = false;
            var3 = var5 === var6;
 197:
            if(!var3) { _fun0001_ip = 234; continue _fun0001 }
 200:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var6 = var5.bind(var8)(var3);
            var5 = var6.fetchApplication;
            var3 = false;
            var3 = var5.bind(var6)(var10, var3);
 234:
            var17 = var2;
            if(!(var9 != var1)) { _fun0001_ip = 244; continue _fun0001 }
 241:
            var17 = var1;
 244:
            var2 = _closure1_slot6;
            var1 = var2.getId;
            var15 = var1.bind(var2)();
            var1 = function getPresenceActivity(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var6 = arg2;
                    var7 = arg3;
                    var2 = var1.application;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 61; continue _fun0002 }
 20:
                    var8 = _closure1_slot8;
                    var5 = var8.findActivity;
                    var2 = var1.author;
                    var4 = var2.id;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot11;
                        var1 = var1.LISTENING;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var5.bind(var8)(var4, var2);
                    return var2;
 61:
                    var2 = var1.author;
                    var5 = var2.id;
                    var2 = var1.activity;
                    var3 = var3 == var2;
                    var8 = undefined;
                    if(var3) { _fun0002_ip = 92; continue _fun0002 }
 87:
                    var8 = var2.type;
 92:
                    var3 = _closure1_slot10;
                    var3 = var3.JOIN_REQUEST;
                    var4 = var5;
                    if(!(var8 === var3)) { _fun0002_ip = 148; continue _fun0002 }
 112:
                    var3 = var7;
                    if(!(var5 === var7)) { _fun0002_ip = 145; continue _fun0002 }
 119:
                    var5 = var6.isPrivate;
                    var5 = var5.bind(var6)();
                    var3 = var7;
                    if(!var5) { _fun0002_ip = 145; continue _fun0002 }
 135:
                    var5 = var6.getRecipientId;
                    var3 = var5.bind(var6)();
 145:
                    var4 = var3;
 148:
                    var3 = _closure1_slot8;
                    var2 = var3.getApplicationActivity;
                    var1 = var1.application;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var10 = var1.bind(var8)(var20, var19, var15);
            if(!(var9 == var17)) { _fun0001_ip = 278; continue _fun0001 }
 276:
            return var8;
 278:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 12;
            var1 = var1[var2];
            var6 = var3.bind(var8)(var1);
            var5 = var6.getHeaderText;
            var3 = var17.name;
            var11 = var20.activity;
            var12 = var9 == var11;
            var1 = undefined;
            if(var12) { _fun0001_ip = 329; continue _fun0001 }
 324:
            var1 = var11.type;
 329:
            var16 = var5.bind(var6)(var3, var1);
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 13;
            var3 = var1[var3];
            var5 = var5.bind(var8)(var3);
            var3 = var17.id;
            var3 = var5.bind(var8)(var10, var20, var3);
            var14 = !var3;
            if(!(var9 != var10)) { _fun0001_ip = 438; continue _fun0001 }
 374:
            var3 = var10.party;
            if(!(var9 != var3)) { _fun0001_ip = 438; continue _fun0001 }
 384:
            var3 = global;
            var6 = var3.Array;
            var5 = var6.from;
            var12 = _closure1_slot7;
            var11 = var12.getParty;
            var3 = var10.party;
            var3 = var3.id;
            var3 = var11.bind(var12)(var3);
            if(!(var9 == var3)) { _fun0001_ip = 431; continue _fun0001 }
 427:
            var3 = new Array(0);
 431:
            var18 = var5.bind(var6)(var3);
            _fun0001_ip = 442; continue _fun0001;
 438:
            var18 = new Array(0);
 442:
            var6 = _closure1_slot0;
            var3 = 14;
            var3 = var1[var3];
            var5 = var6.bind(var8)(var3);
            var3 = var5.getPartySize;
            var3 = var3.bind(var5)(var10);
            var12 = var3.maxPartySize;
            var22 = 15;
            var3 = var1[var22];
            var3 = var6.bind(var8)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var1[var22];
            var1 = var6.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.OAB5TE;
            var1 = var3.bind(var5)(var1);
            if(var14) { _fun0001_ip = 775; continue _fun0001 }
 530:
            var5 = var18.map;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getUser;
                    var1 = arg1;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var7)) { _fun0003_ip = 67; continue _fun0003 }
 27:
                    var4 = _closure1_slot5;
                    var2 = {};
                    var3 = '0005';
                    var2['discriminator'] = var3;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var10 = var3;
                    var9 = var2;
                    var2 = new var10[var4](var9, var8);
                    var7 = var2 instanceof Object ? var2 : var3;
 67:
                    var2 = global;
                    var3 = var2.String;
                    var4 = var1 == var7;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 113; continue _fun0003 }
 86:
                    var6 = var7.getAvatarURL;
                    var4 = _closure2_slot0;
                    var5 = var4.guild_id;
                    var4 = 64;
                    var1 = var6.bind(var7)(var5, var4);
 113:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var6 = var5.bind(var18)(var3);
            var3 = var9 == var10;
            var23 = undefined;
            if(var3) { _fun0001_ip = 576; continue _fun0001 }
 556:
            var3 = var10.timestamps;
            var5 = var9 == var3;
            var23 = undefined;
            if(var5) { _fun0001_ip = 576; continue _fun0001 }
 571:
            var23 = var3.start;
 576:
            if(!(var9 == var23)) { _fun0001_ip = 598; continue _fun0001 }
 580:
            var5 = var9 == var10;
            var3 = undefined;
            if(var5) { _fun0001_ip = 595; continue _fun0001 }
 589:
            var3 = var10.created_at;
 595:
            var23 = var3;
 598:
            var3 = var9 == var10;
            var5 = undefined;
            if(var3) { _fun0001_ip = 627; continue _fun0001 }
 607:
            var3 = var10.timestamps;
            var11 = var9 == var3;
            var5 = undefined;
            if(var11) { _fun0001_ip = 627; continue _fun0001 }
 622:
            var5 = var3.end;
 627:
            var11 = var9 != var23;
            var3 = '';
            if(!var11) { _fun0001_ip = 697; continue _fun0001 }
 638:
            var13 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = 16;
            var11 = var21[var11];
            var21 = var13.bind(var8)(var11);
            var13 = var21.formatActiveTimestamp;
            var11 = {};
            var11['start'] = var23;
            var11['end'] = var5;
            var5 = global;
            var23 = var5.Date;
            var5 = var23.now;
            var5 = var5.bind(var23)();
            var3 = var13.bind(var21)(var11, var5);
 697:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var2];
            var13 = var11.bind(var8)(var5);
            var11 = var13.getPartyText;
            var5 = {};
            var5['maxPartySize'] = var12;
            var18 = var18.length;
            var5['partySize'] = var18;
            var21 = var20.activity;
            var23 = var9 == var21;
            var18 = undefined;
            if(var23) { _fun0001_ip = 757; continue _fun0001 }
 752:
            var18 = var21.type;
 757:
            var5['activityActionType'] = var18;
            var5 = var11.bind(var13)(var5);
            var11 = var6;
            var6 = var1;
            _fun0001_ip = 869; continue _fun0001;
 775:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var2];
            var13 = var18.bind(var8)(var2);
            var2 = var13.getDeadGameInviteText;
            var28 = var13;
            var27 = var20;
            var26 = var17;
            var25 = var19;
            var24 = var15;
            var3 = var28[var2](var27, var26, var25, var24, var23);
            var13 = var1[var22];
            var13 = var18.bind(var8)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var1 = var1[var22];
            var1 = var18.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.pwEQoq;
            var6 = var13.bind(var15)(var1);
            var5 = '';
            var11 = null;
 869:
            var2 = _closure1_slot12;
            var13 = var9 == var10;
            var1 = undefined;
            if(var13) { _fun0001_ip = 902; continue _fun0001 }
 882:
            var13 = var10.party;
            var15 = var9 == var13;
            var1 = undefined;
            if(var15) { _fun0001_ip = 902; continue _fun0001 }
 897:
            var1 = var13.id;
 902:
            var13 = var2.bind(var8)(var1);
            if(var13) { _fun0001_ip = 928; continue _fun0001 }
 910:
            var2 = var17.id;
            var1 = _closure1_slot4;
            var1 = var1.id;
            var13 = var2 === var1;
 928:
            var1 = var17.icon;
            var1 = var9 != var1;
            var15 = null;
            if(!var1) { _fun0001_ip = 991; continue _fun0001 }
 942:
            var2 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 17;
            var1 = var18[var1];
            var20 = var2.bind(var8)(var1);
            var19 = var20.getAppIconSrc;
            var18 = var17.id;
            var2 = var17.icon;
            var1 = var17.bot;
            var15 = var19.bind(var20)(var18, var2, var1);
 991:
            var2 = var17.name;
            if(!var13) { _fun0001_ip = 1231; continue _fun0001 }
 1002:
            if(!(var9 != var10)) { _fun0001_ip = 1025; continue _fun0001 }
 1006:
            var1 = var10.details;
            if(!(var9 != var1)) { _fun0001_ip = 1025; continue _fun0001 }
 1016:
            var1 = var10.state;
            if(!(var9 == var1)) { _fun0001_ip = 1032; continue _fun0001 }
 1025:
            var1 = var17.name;
            _fun0001_ip = 1128; continue _fun0001;
 1032:
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var20 = var18[var22];
            var20 = var19.bind(var8)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var18 = var18[var22];
            var18 = var19.bind(var8)(var18);
            var18 = var18.t;
            var19 = var18.JCvHt7;
            var18 = {};
            var23 = var10.details;
            var18['track'] = var23;
            var23 = var10.state;
            var18['artist'] = var23;
            var21 = var20.bind(var21)(var19, var18);
            var20 = var21.replace;
            var19 = '\n';
            var18 = ' ';
            var1 = var20.bind(var21)(var19, var18);
 1128:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 18;
            var18 = var20[var18];
            var18 = var19.bind(var8)(var18);
            var17 = var17.id;
            var18 = var18.bind(var8)(var10, var17);
            var19 = var9 != var18;
            var17 = undefined;
            if(!var19) { _fun0001_ip = 1171; continue _fun0001 }
 1168:
            var17 = var18;
 1171:
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var8)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var8)(var18);
            var18 = var18.t;
            var18 = var18.sTo7s7;
            var6 = var19.bind(var20)(var18);
            var15 = var17;
            var2 = var1;
 1231:
            var1 = var9 != var15;
            var19 = undefined;
            if(!var1) { _fun0001_ip = 1243; continue _fun0001 }
 1240:
            var19 = var15;
 1243:
            var1 = {};
            var1['footerLabel'] = var6;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var17 = 17;
            var17 = var7[var17];
            var18 = var6.bind(var8)(var17);
            var17 = var18.getAppGradientColors;
            var17 = var17.bind(var18)(var19);
            var1['gradientColors'] = var17;
            var1['headerText'] = var16;
            var1['iconSrc'] = var15;
            var14 = !var14;
            var1['isActive'] = var14;
            var1['isSpotifyParty'] = var13;
            var1['maxPartySize'] = var12;
            var1['partyMemberAvatarURIs'] = var11;
            var1['partySizeText'] = var5;
            var5 = 19;
            var5 = var7[var5];
            var7 = var6.bind(var8)(var5);
            var6 = var7.getJoinFromSupportedPlatformsIconKeys;
            var5 = {};
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 1365; continue _fun0001 }
 1359:
            var9 = var10.supported_platforms;
 1365:
            var5['platforms'] = var9;
            var5['currentPlatform'] = var8;
            var6 = var6.bind(var7)(var5);
            var5 = var6.filter;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 19;
                    var1 = var1[var6];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.IconKey;
                    var1 = var1.IOS;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0004_ip = 80; continue _fun0004 }
 47:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.IconKey;
                    var2 = var2.ANDROID;
                    var1 = var3 !== var2;
 80:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var1['platformIconKeys'] = var4;
            var1['subtitle'] = var3;
            var1['title'] = var2;
            return var1;
        }
    };
    var3['createActivityRichPresenceInviteEmbed'] = var2;
    return var1;
})();