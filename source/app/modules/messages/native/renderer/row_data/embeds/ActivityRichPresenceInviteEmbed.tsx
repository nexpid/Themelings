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
            var21 = arg1;
            var20 = arg2;
            var _closure2_slot0 = var20;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var17 = undefined;
            var3 = var3.bind(var17)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0001_ip = 276; continue _fun0001 }
 53:
            var2 = var21.author;
            var18 = null;
            if(!(var18 != var2)) { _fun0001_ip = 276; continue _fun0001 }
 68:
            var2 = var21.activity;
            if(!(var18 != var2)) { _fun0001_ip = 276; continue _fun0001 }
 81:
            if(!(var18 != var20)) { _fun0001_ip = 276; continue _fun0001 }
 88:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var3 = var3.bind(var17)(var2);
            var2 = var3.getApplicationFromMessage;
            var3 = var2.bind(var3)(var21);
            var2 = var21.application;
            var5 = var18 == var2;
            var8 = undefined;
            if(var5) { _fun0001_ip = 138; continue _fun0001 }
 133:
            var8 = var2.id;
 138:
            var5 = var18 != var8;
            var2 = null;
            if(!var5) { _fun0001_ip = 162; continue _fun0001 }
 147:
            var6 = _closure1_slot3;
            var5 = var6.getApplication;
            var2 = var5.bind(var6)(var8);
 162:
            var5 = var18 == var2;
            if(!var5) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var5 = var18 != var8;
 173:
            if(!var5) { _fun0001_ip = 197; continue _fun0001 }
 176:
            var7 = _closure1_slot3;
            var6 = var7.isFetchingApplication;
            var7 = var6.bind(var7)(var8);
            var6 = false;
            var5 = var6 === var7;
 197:
            if(!var5) { _fun0001_ip = 234; continue _fun0001 }
 200:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var7 = var6.bind(var17)(var5);
            var6 = var7.fetchApplication;
            var5 = false;
            var5 = var6.bind(var7)(var8, var5);
 234:
            var15 = var3;
            if(!(var18 != var2)) { _fun0001_ip = 244; continue _fun0001 }
 241:
            var15 = var2;
 244:
            var3 = _closure1_slot6;
            var2 = var3.getId;
            var13 = var2.bind(var3)();
            var2 = function getPresenceActivity(arg1, arg2, arg3) {
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
            var19 = var2.bind(var17)(var21, var20, var13);
            if(!(var18 == var15)) { _fun0001_ip = 278; continue _fun0001 }
 276:
            return var17;
 278:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 12;
            var2 = var2[var9];
            var6 = var3.bind(var17)(var2);
            var5 = var6.getHeaderText;
            var3 = var15.name;
            var7 = var21.activity;
            var8 = var18 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 329; continue _fun0001 }
 324:
            var2 = var7.type;
 329:
            var12 = var5.bind(var6)(var3, var2);
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 13;
            var3 = var2[var3];
            var5 = var5.bind(var17)(var3);
            var3 = var15.id;
            var3 = var5.bind(var17)(var19, var21, var3);
            var10 = !var3;
            if(!(var18 != var19)) { _fun0001_ip = 438; continue _fun0001 }
 374:
            var3 = var19.party;
            if(!(var18 != var3)) { _fun0001_ip = 438; continue _fun0001 }
 384:
            var3 = global;
            var6 = var3.Array;
            var5 = var6.from;
            var8 = _closure1_slot7;
            var7 = var8.getParty;
            var3 = var19.party;
            var3 = var3.id;
            var3 = var7.bind(var8)(var3);
            if(!(var18 == var3)) { _fun0001_ip = 431; continue _fun0001 }
 427:
            var3 = new Array(0);
 431:
            var8 = var5.bind(var6)(var3);
            _fun0001_ip = 442; continue _fun0001;
 438:
            var8 = new Array(0);
 442:
            var6 = _closure1_slot0;
            var3 = 14;
            var3 = var2[var3];
            var5 = var6.bind(var17)(var3);
            var3 = var5.getPartySize;
            var3 = var3.bind(var5)(var19);
            var7 = var3.maxPartySize;
            var23 = 15;
            var3 = var2[var23];
            var3 = var6.bind(var17)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var23];
            var2 = var6.bind(var17)(var2);
            var2 = var2.t;
            var2 = var2.OAB5TE;
            var2 = var3.bind(var5)(var2);
            if(var10) { _fun0001_ip = 772; continue _fun0001 }
 530:
            var5 = var8.map;
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
            var6 = var5.bind(var8)(var3);
            var3 = var18 == var19;
            var22 = undefined;
            if(var3) { _fun0001_ip = 576; continue _fun0001 }
 556:
            var3 = var19.timestamps;
            var5 = var18 == var3;
            var22 = undefined;
            if(var5) { _fun0001_ip = 576; continue _fun0001 }
 571:
            var22 = var3.start;
 576:
            if(!(var18 == var22)) { _fun0001_ip = 598; continue _fun0001 }
 580:
            var5 = var18 == var19;
            var3 = undefined;
            if(var5) { _fun0001_ip = 595; continue _fun0001 }
 589:
            var3 = var19.created_at;
 595:
            var22 = var3;
 598:
            var3 = var18 == var19;
            var5 = undefined;
            if(var3) { _fun0001_ip = 627; continue _fun0001 }
 607:
            var3 = var19.timestamps;
            var11 = var18 == var3;
            var5 = undefined;
            if(var11) { _fun0001_ip = 627; continue _fun0001 }
 622:
            var5 = var3.end;
 627:
            var11 = var18 != var22;
            var3 = '';
            if(!var11) { _fun0001_ip = 697; continue _fun0001 }
 638:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 16;
            var11 = var16[var11];
            var16 = var14.bind(var17)(var11);
            var14 = var16.formatActiveTimestamp;
            var11 = {};
            var11['start'] = var22;
            var11['end'] = var5;
            var5 = global;
            var22 = var5.Date;
            var5 = var22.now;
            var5 = var5.bind(var22)();
            var3 = var14.bind(var16)(var11, var5);
 697:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var14 = var11.bind(var17)(var5);
            var11 = var14.getPartyText;
            var5 = {};
            var5['maxPartySize'] = var7;
            var16 = var8.length;
            var5['partySize'] = var16;
            var22 = var21.activity;
            var24 = var18 == var22;
            var16 = undefined;
            if(var24) { _fun0001_ip = 757; continue _fun0001 }
 752:
            var16 = var22.type;
 757:
            var5['activityActionType'] = var16;
            var5 = var11.bind(var14)(var5);
            var14 = var2;
            _fun0001_ip = 866; continue _fun0001;
 772:
            var16 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var9];
            var11 = var16.bind(var17)(var9);
            var9 = var11.getDeadGameInviteText;
            var29 = var11;
            var28 = var21;
            var27 = var15;
            var26 = var20;
            var25 = var13;
            var3 = var29[var9](var28, var27, var26, var25, var24);
            var11 = var2[var23];
            var11 = var16.bind(var17)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var2 = var2[var23];
            var2 = var16.bind(var17)(var2);
            var2 = var2.t;
            var2 = var2.pwEQoq;
            var14 = var11.bind(var13)(var2);
            var5 = '';
            var6 = null;
 866:
            var9 = _closure1_slot12;
            var11 = var18 == var19;
            var2 = undefined;
            if(var11) { _fun0001_ip = 899; continue _fun0001 }
 879:
            var11 = var19.party;
            var13 = var18 == var11;
            var2 = undefined;
            if(var13) { _fun0001_ip = 899; continue _fun0001 }
 894:
            var2 = var11.id;
 899:
            var9 = var9.bind(var17)(var2);
            if(var9) { _fun0001_ip = 925; continue _fun0001 }
 907:
            var11 = var15.id;
            var2 = _closure1_slot4;
            var2 = var2.id;
            var9 = var11 === var2;
 925:
            var2 = var15.icon;
            var2 = var18 != var2;
            var11 = null;
            if(!var2) { _fun0001_ip = 988; continue _fun0001 }
 939:
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 17;
            var2 = var16[var2];
            var21 = var13.bind(var17)(var2);
            var20 = var21.getAppIconSrc;
            var16 = var15.id;
            var13 = var15.icon;
            var2 = var15.bot;
            var11 = var20.bind(var21)(var16, var13, var2);
 988:
            var2 = var15.name;
            if(!var9) { _fun0001_ip = 1228; continue _fun0001 }
 999:
            if(!(var18 != var19)) { _fun0001_ip = 1022; continue _fun0001 }
 1003:
            var13 = var19.details;
            if(!(var18 != var13)) { _fun0001_ip = 1022; continue _fun0001 }
 1013:
            var13 = var19.state;
            if(!(var18 == var13)) { _fun0001_ip = 1029; continue _fun0001 }
 1022:
            var13 = var15.name;
            _fun0001_ip = 1125; continue _fun0001;
 1029:
            var20 = _closure1_slot0;
            var16 = _closure1_slot2;
            var21 = var16[var23];
            var21 = var20.bind(var17)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var16 = var16[var23];
            var16 = var20.bind(var17)(var16);
            var16 = var16.t;
            var20 = var16.JCvHt7;
            var16 = {};
            var24 = var19.details;
            var16['track'] = var24;
            var24 = var19.state;
            var16['artist'] = var24;
            var22 = var21.bind(var22)(var20, var16);
            var21 = var22.replace;
            var20 = '\n';
            var16 = ' ';
            var13 = var21.bind(var22)(var20, var16);
 1125:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var16 = 18;
            var16 = var21[var16];
            var16 = var20.bind(var17)(var16);
            var15 = var15.id;
            var16 = var16.bind(var17)(var19, var15);
            var20 = var18 != var16;
            var15 = undefined;
            if(!var20) { _fun0001_ip = 1168; continue _fun0001 }
 1165:
            var15 = var16;
 1168:
            var22 = _closure1_slot0;
            var16 = _closure1_slot2;
            var20 = var16[var23];
            var20 = var22.bind(var17)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var16 = var16[var23];
            var16 = var22.bind(var17)(var16);
            var16 = var16.t;
            var16 = var16.sTo7s7;
            var14 = var20.bind(var21)(var16);
            var11 = var15;
            var2 = var13;
 1228:
            var13 = var18 != var11;
            var20 = undefined;
            if(!var13) { _fun0001_ip = 1240; continue _fun0001 }
 1237:
            var20 = var11;
 1240:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var4 = 17;
            var4 = var16[var4];
            var13 = var15.bind(var17)(var4);
            var4 = var13.getAppGradientColors;
            var13 = var4.bind(var13)(var20);
            var4 = 19;
            var4 = var16[var4];
            var16 = var15.bind(var17)(var4);
            var15 = var16.getJoinFromSupportedPlatformsIconKeys;
            var4 = {};
            var20 = var18 == var19;
            var18 = undefined;
            if(var20) { _fun0001_ip = 1306; continue _fun0001 }
 1300:
            var18 = var19.supported_platforms;
 1306:
            var4['platforms'] = var18;
            var4['currentPlatform'] = var17;
            var15 = var15.bind(var16)(var4);
            var4 = var15.filter;
            var1 = function(arg1) {
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
            var4 = var4.bind(var15)(var1);
            var1 = {};
            var1['footerLabel'] = var14;
            var1['gradientColors'] = var13;
            var1['headerText'] = var12;
            var1['iconSrc'] = var11;
            var10 = !var10;
            var1['isActive'] = var10;
            var1['isSpotifyParty'] = var9;
            var9 = 0;
            if(!(!(var7 > var9))) { _fun0001_ip = 1386; continue _fun0001 }
 1381:
            var7 = var8.length;
 1386:
            var1['maxPartySize'] = var7;
            var1['partyMemberAvatarURIs'] = var6;
            var1['partySizeText'] = var5;
            var1['platformIconKeys'] = var4;
            var1['subtitle'] = var3;
            var1['title'] = var2;
            return var1;
        }
    };
    var3['createActivityRichPresenceInviteEmbed'] = var2;
    return var1;
})();