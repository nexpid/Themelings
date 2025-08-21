// app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SpotifyApplication;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot13 = var7;
    var7 = var4.ActivityGamePlatforms;
    var _closure1_slot14 = var7;
    var4 = var4.ActivityTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isSpotifyParty;
    var _closure1_slot16 = var7;
    var4 = var4.SPOTIFY_PLATFORM_NAME;
    var _closure1_slot17 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var27 = arg1;
            var32 = arg2;
            var _closure2_slot0 = var32;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var17 = undefined;
            var3 = var3.bind(var17)(var1);
            var1 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 273; continue _fun0001 }
 53:
            var3 = var27.author;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 273; continue _fun0001 }
 68:
            var3 = var27.activity;
            if(!(var1 != var3)) { _fun0001_ip = 273; continue _fun0001 }
 81:
            if(!(var1 != var32)) { _fun0001_ip = 273; continue _fun0001 }
 88:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var4 = var4.bind(var17)(var3);
            var3 = var4.getApplicationFromMessage;
            var4 = var3.bind(var4)(var27);
            var3 = var27.application;
            var5 = var1 == var3;
            var8 = undefined;
            if(var5) { _fun0001_ip = 138; continue _fun0001 }
 133:
            var8 = var3.id;
 138:
            var5 = var1 != var8;
            var3 = null;
            if(!var5) { _fun0001_ip = 162; continue _fun0001 }
 147:
            var6 = _closure1_slot3;
            var5 = var6.getApplication;
            var3 = var5.bind(var6)(var8);
 162:
            var5 = var1 == var3;
            if(!var5) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var5 = var1 != var8;
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
            var5 = 12;
            var5 = var7[var5];
            var7 = var6.bind(var17)(var5);
            var6 = var7.fetchApplication;
            var5 = false;
            var5 = var6.bind(var7)(var8, var5);
 234:
            if(!(var1 != var3)) { _fun0001_ip = 241; continue _fun0001 }
 238:
            var4 = var3;
 241:
            var5 = _closure1_slot7;
            var3 = var5.getId;
            var30 = var3.bind(var5)();
            var3 = function getPresenceActivity(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var6 = arg2;
                    var7 = arg3;
                    var2 = var1.application;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 61; continue _fun0002 }
 20:
                    var8 = _closure1_slot10;
                    var5 = var8.findActivity;
                    var2 = var1.author;
                    var4 = var2.id;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot15;
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
                    var3 = _closure1_slot13;
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
                    var3 = _closure1_slot10;
                    var2 = var3.getApplicationActivity;
                    var1 = var1.application;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var23 = var3.bind(var17)(var27, var32, var30);
            if(!(var1 == var4)) { _fun0001_ip = 275; continue _fun0001 }
 273:
            return var17;
 275:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var24 = 16;
            var3 = var3[var24];
            var7 = var5.bind(var17)(var3);
            var6 = var7.getHeaderText;
            var5 = var4.name;
            var8 = var27.activity;
            var9 = var1 == var8;
            var3 = undefined;
            if(var9) { _fun0001_ip = 326; continue _fun0001 }
 321:
            var3 = var8.type;
 326:
            var13 = var6.bind(var7)(var5, var3);
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 17;
            var5 = var3[var5];
            var6 = var6.bind(var17)(var5);
            var5 = var4.id;
            var5 = var6.bind(var17)(var23, var27, var5);
            var11 = !var5;
            if(!(var1 != var23)) { _fun0001_ip = 435; continue _fun0001 }
 371:
            var5 = var23.party;
            if(!(var1 != var5)) { _fun0001_ip = 435; continue _fun0001 }
 381:
            var5 = global;
            var7 = var5.Array;
            var6 = var7.from;
            var9 = _closure1_slot8;
            var8 = var9.getParty;
            var5 = var23.party;
            var5 = var5.id;
            var5 = var8.bind(var9)(var5);
            if(!(var1 == var5)) { _fun0001_ip = 428; continue _fun0001 }
 424:
            var5 = new Array(0);
 428:
            var8 = var6.bind(var7)(var5);
            _fun0001_ip = 439; continue _fun0001;
 435:
            var8 = new Array(0);
 439:
            var5 = _closure1_slot0;
            var6 = 18;
            var6 = var3[var6];
            var7 = var5.bind(var17)(var6);
            var6 = var7.getPartySize;
            var6 = var6.bind(var7)(var23);
            var7 = var6.maxPartySize;
            var6 = 19;
            var3 = var3[var6];
            var5 = var5.bind(var17)(var3);
            var3 = var5.isIOS;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 540; continue _fun0001 }
 497:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var5 = var5.bind(var17)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            var21 = undefined;
            if(!var3) { _fun0001_ip = 550; continue _fun0001 }
 528:
            var3 = _closure1_slot14;
            var21 = var3.ANDROID;
            _fun0001_ip = 550; continue _fun0001;
 540:
            var3 = _closure1_slot14;
            var21 = var3.IOS;
 550:
            var6 = _closure1_slot9;
            var5 = var6.getApplicationActivity;
            var3 = var4.id;
            var5 = var5.bind(var6)(var3);
            if(!(var1 == var5)) { _fun0001_ip = 597; continue _fun0001 }
 574:
            var10 = _closure1_slot11;
            var9 = var10.getApplicationActivity;
            var6 = var4.id;
            var3 = true;
            var5 = var9.bind(var10)(var6, var3);
 597:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 20;
            var3 = var10[var3];
            var6 = var9.bind(var17)(var3);
            var3 = var6.getIsInParty;
            var6 = var3.bind(var6)(var5, var23);
            var3 = 21;
            var3 = var10[var3];
            var9 = var9.bind(var17)(var3);
            var3 = var9.getCanSendInvite;
            var41 = var9;
            var40 = var23;
            var39 = var27;
            var38 = var4;
            var37 = var30;
            var15 = var41[var3](var40, var39, var38, var37, var36);
            var3 = global;
            var10 = var3.Set;
            var9 = var1 == var23;
            var19 = var5;
            var5 = undefined;
            if(var9) { _fun0001_ip = 692; continue _fun0001 }
 686:
            var5 = var23.supported_platforms;
 692:
            if(!(var1 == var5)) { _fun0001_ip = 700; continue _fun0001 }
 696:
            var5 = new Array(0);
 700:
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var41 = var9;
            var40 = var5;
            var5 = new var41[var10](var40, var39);
            var9 = var5 instanceof Object ? var5 : var9;
            var10 = var1 != var21;
            if(!var10) { _fun0001_ip = 740; continue _fun0001 }
 730:
            var5 = var9.has;
            var10 = var5.bind(var9)(var21);
 740:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 22;
            var5 = var12[var5];
            var16 = var9.bind(var17)(var5);
            var5 = var16.canLaunchFrame;
            var16 = var5.bind(var16)(var4);
            var5 = 23;
            var5 = var12[var5];
            var18 = var9.bind(var17)(var5);
            var5 = var18.isEmbeddedApp;
            var18 = var5.bind(var18)(var4);
            var5 = 24;
            var5 = var12[var5];
            var12 = var9.bind(var17)(var5);
            var9 = var12.getCanJoin;
            var5 = {};
            var5['presenceActivity'] = var23;
            var5['currentUserPresenceActivity'] = var19;
            var5['currentUserId'] = var30;
            var5['message'] = var27;
            var5['application'] = var4;
            var5['isEmbeddedApplication'] = var18;
            var5['isFrameApplication'] = var16;
            var5['isGameLaunchable'] = var10;
            var5 = var9.bind(var12)(var5);
            var18 = var5.canJoin;
            var9 = _closure1_slot16;
            var12 = var1 == var23;
            var5 = undefined;
            if(var12) { _fun0001_ip = 896; continue _fun0001 }
 876:
            var12 = var23.party;
            var16 = var1 == var12;
            var5 = undefined;
            if(var16) { _fun0001_ip = 896; continue _fun0001 }
 891:
            var5 = var12.id;
 896:
            var9 = var9.bind(var17)(var5);
            if(var9) { _fun0001_ip = 922; continue _fun0001 }
 904:
            var12 = var4.id;
            var5 = _closure1_slot5;
            var5 = var5.id;
            var9 = var12 === var5;
 922:
            var19 = _closure1_slot0;
            var5 = _closure1_slot2;
            var28 = 13;
            var12 = var5[var28];
            var12 = var19.bind(var17)(var12);
            var16 = var12.intl;
            var12 = var16.string;
            var5 = var5[var28];
            var5 = var19.bind(var17)(var5);
            var5 = var5.t;
            var5 = var5.OAB5TE;
            var5 = var12.bind(var16)(var5);
            var12 = var1 == var23;
            var25 = undefined;
            if(var12) { _fun0001_ip = 1008; continue _fun0001 }
 988:
            var12 = var23.timestamps;
            var16 = var1 == var12;
            var25 = undefined;
            if(var16) { _fun0001_ip = 1008; continue _fun0001 }
 1003:
            var25 = var12.start;
 1008:
            if(!(var1 == var25)) { _fun0001_ip = 1030; continue _fun0001 }
 1012:
            var16 = var1 == var23;
            var12 = undefined;
            if(var16) { _fun0001_ip = 1027; continue _fun0001 }
 1021:
            var12 = var23.created_at;
 1027:
            var25 = var12;
 1030:
            var12 = var1 == var23;
            var20 = undefined;
            if(var12) { _fun0001_ip = 1059; continue _fun0001 }
 1039:
            var12 = var23.timestamps;
            var16 = var1 == var12;
            var20 = undefined;
            if(var16) { _fun0001_ip = 1059; continue _fun0001 }
 1054:
            var20 = var12.end;
 1059:
            var12 = var1 != var25;
            var22 = '';
            var26 = var22;
            if(!var12) { _fun0001_ip = 1130; continue _fun0001 }
 1073:
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 25;
            var12 = var19[var12];
            var19 = var16.bind(var17)(var12);
            var16 = var19.formatActiveTimestamp;
            var12 = {};
            var12['start'] = var25;
            var12['end'] = var20;
            var20 = var3.Date;
            var3 = var20.now;
            var3 = var3.bind(var20)();
            var26 = var16.bind(var19)(var12, var3);
 1130:
            var3 = var4.icon;
            var3 = var1 != var3;
            var16 = null;
            if(!var3) { _fun0001_ip = 1193; continue _fun0001 }
 1144:
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 26;
            var3 = var19[var3];
            var25 = var12.bind(var17)(var3);
            var20 = var25.getAppIconSrc;
            var19 = var4.id;
            var12 = var4.icon;
            var3 = var4.bot;
            var16 = var20.bind(var25)(var19, var12, var3);
 1193:
            var20 = var4.name;
            if(var9) { _fun0001_ip = 1739; continue _fun0001 }
 1204:
            if(var11) { _fun0001_ip = 1631; continue _fun0001 }
 1210:
            var3 = var8.map;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getUser;
                    var1 = arg1;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var7)) { _fun0003_ip = 67; continue _fun0003 }
 27:
                    var4 = _closure1_slot6;
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
            var3 = var3.bind(var8)(var2);
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var24];
            var19 = var12.bind(var17)(var2);
            var12 = var19.getPartyText;
            var2 = {};
            var2['maxPartySize'] = var7;
            var25 = var8.length;
            var2['partySize'] = var25;
            var29 = var27.activity;
            var31 = var1 == var29;
            var25 = undefined;
            if(var31) { _fun0001_ip = 1287; continue _fun0001 }
 1282:
            var25 = var29.type;
 1287:
            var2['activityActionType'] = var25;
            var2 = var12.bind(var19)(var2);
            var12 = {};
            var12['canJoin'] = var18;
            var12['canSendInvite'] = var15;
            var12['isInParty'] = var6;
            var6 = var27.author;
            var6 = var6.id;
            var12['messageAuthorId'] = var6;
            var12['currentUserId'] = var30;
            var25 = var12.canJoin;
            var19 = var12.canSendInvite;
            var6 = var12.isInParty;
            var18 = var12.currentUserId;
            var15 = var12.messageAuthorId;
            var12 = {};
            if(var25) { _fun0001_ip = 1530; continue _fun0001 }
 1373:
            if(var19) { _fun0001_ip = 1461; continue _fun0001 }
 1376:
            if(var6) { _fun0001_ip = 1394; continue _fun0001 }
 1379:
            var12['label'] = var17;
            var6 = false;
            var12['disabled'] = var6;
            var6 = var12;
            _fun0001_ip = 1459; continue _fun0001;
 1394:
            var31 = _closure1_slot0;
            var19 = _closure1_slot2;
            var25 = var19[var28];
            var25 = var31.bind(var17)(var25);
            var29 = var25.intl;
            var25 = var29.string;
            var19 = var19[var28];
            var19 = var31.bind(var17)(var19);
            var19 = var19.t;
            var19 = var19.KC26NT;
            var19 = var25.bind(var29)(var19);
            var12['label'] = var19;
            var19 = true;
            var12['disabled'] = var19;
            var6 = var12;
 1459:
            _fun0001_ip = 1528; continue _fun0001;
 1461:
            var31 = _closure1_slot0;
            var19 = _closure1_slot2;
            var25 = var19[var28];
            var25 = var31.bind(var17)(var25);
            var29 = var25.intl;
            var25 = var29.string;
            var19 = var19[var28];
            var19 = var31.bind(var17)(var19);
            var19 = var19.t;
            var19 = var19.hC/Ze3;
            var19 = var25.bind(var29)(var19);
            var12['label'] = var19;
            var15 = var15 === var18;
            var12['disabled'] = var15;
            var6 = var12;
 1528:
            _fun0001_ip = 1595; continue _fun0001;
 1530:
            var25 = _closure1_slot0;
            var15 = _closure1_slot2;
            var18 = var15[var28];
            var18 = var25.bind(var17)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var15 = var15[var28];
            var15 = var25.bind(var17)(var15);
            var15 = var15.t;
            var15 = var15.VJlc0d;
            var15 = var18.bind(var19)(var15);
            var12['label'] = var15;
            var15 = false;
            var12['disabled'] = var15;
            var6 = var12;
 1595:
            var18 = var6.label;
            var6 = var6.disabled;
            var19 = !var6;
            var15 = var5;
            var6 = var3;
            var5 = var2;
            var3 = var26;
            var12 = var16;
            var2 = var20;
            _fun0001_ip = 2457; continue _fun0001;
 1631:
            var31 = _closure1_slot0;
            var25 = _closure1_slot2;
            var24 = var25[var24];
            var29 = var31.bind(var17)(var24);
            var24 = var29.getDeadGameInviteText;
            var41 = var29;
            var40 = var27;
            var39 = var4;
            var38 = var32;
            var37 = var30;
            var3 = var41[var24](var40, var39, var38, var37, var36);
            var29 = var25[var28];
            var29 = var31.bind(var17)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var25 = var25[var28];
            var25 = var31.bind(var17)(var25);
            var25 = var25.t;
            var25 = var25.pwEQoq;
            var15 = var29.bind(var30)(var25);
            var19 = false;
            var18 = undefined;
            var6 = null;
            var5 = var22;
            var12 = var16;
            var2 = var20;
            _fun0001_ip = 2457; continue _fun0001;
 1739:
            if(!(var1 != var23)) { _fun0001_ip = 1762; continue _fun0001 }
 1743:
            var20 = var23.details;
            if(!(var1 != var20)) { _fun0001_ip = 1762; continue _fun0001 }
 1753:
            var20 = var23.state;
            if(!(var1 == var20)) { _fun0001_ip = 1769; continue _fun0001 }
 1762:
            var20 = var4.name;
            _fun0001_ip = 1865; continue _fun0001;
 1769:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var29 = var24[var28];
            var29 = var25.bind(var17)(var29);
            var30 = var29.intl;
            var29 = var30.formatToPlainString;
            var24 = var24[var28];
            var24 = var25.bind(var17)(var24);
            var24 = var24.t;
            var25 = var24.JCvHt7;
            var24 = {};
            var31 = var23.details;
            var24['track'] = var31;
            var31 = var23.state;
            var24['artist'] = var31;
            var30 = var29.bind(var30)(var25, var24);
            var29 = var30.replace;
            var25 = '\n';
            var24 = ' ';
            var20 = var29.bind(var30)(var25, var24);
 1865:
            var30 = _closure1_slot0;
            var24 = _closure1_slot2;
            var25 = var24[var28];
            var25 = var30.bind(var17)(var25);
            var29 = var25.intl;
            var25 = var29.string;
            var24 = var24[var28];
            var24 = var30.bind(var17)(var24);
            var24 = var24.t;
            var24 = var24.sTo7s7;
            var24 = var25.bind(var29)(var24);
            if(var11) { _fun0001_ip = 2385; continue _fun0001 }
 1925:
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var25 = 27;
            var25 = var30[var25];
            var29 = var29.bind(var17)(var25);
            var25 = var4.id;
            var29 = var29.bind(var17)(var23, var25);
            var30 = var1 != var29;
            var25 = undefined;
            if(!var30) { _fun0001_ip = 1968; continue _fun0001 }
 1965:
            var25 = var29;
 1968:
            var32 = var27.author;
            var30 = _closure1_slot4;
            var27 = var30.hasConnectedAccount;
            var27 = var27.bind(var30)();
            var29 = var30.getSyncingWith;
            var34 = var29.bind(var30)();
            var29 = var30.getActivity;
            var31 = var29.bind(var30)();
            var30 = var32.id;
            var33 = _closure1_slot7;
            var29 = var33.getId;
            var29 = var29.bind(var33)();
            var29 = var30 === var29;
            var33 = var1 == var31;
            var30 = undefined;
            if(var33) { _fun0001_ip = 2048; continue _fun0001 }
 2042:
            var30 = var31.party;
 2048:
            var30 = var1 != var30;
            if(!var30) { _fun0001_ip = 2099; continue _fun0001 }
 2055:
            var35 = var1 == var23;
            var33 = undefined;
            if(var35) { _fun0001_ip = 2084; continue _fun0001 }
 2064:
            var35 = var23.party;
            var36 = var1 == var35;
            var33 = undefined;
            if(var36) { _fun0001_ip = 2084; continue _fun0001 }
 2079:
            var33 = var35.id;
 2084:
            var31 = var31.party;
            var31 = var31.id;
            var30 = var33 === var31;
 2099:
            var33 = var1 == var34;
            var31 = undefined;
            if(var33) { _fun0001_ip = 2113; continue _fun0001 }
 2108:
            var31 = var34.userId;
 2113:
            var31 = var1 != var31;
            if(!var31) { _fun0001_ip = 2143; continue _fun0001 }
 2120:
            var35 = var1 == var34;
            var33 = undefined;
            if(var35) { _fun0001_ip = 2134; continue _fun0001 }
 2129:
            var33 = var34.userId;
 2134:
            var32 = var32.id;
            var31 = var33 === var32;
 2143:
            var35 = _closure1_slot0;
            var32 = _closure1_slot2;
            var33 = var32[var28];
            var33 = var35.bind(var17)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var32[var28];
            var32 = var35.bind(var17)(var32);
            var32 = var32.t;
            var32 = var32.VJlc0d;
            var33 = var33.bind(var34)(var32);
            if(var27) { _fun0001_ip = 2264; continue _fun0001 }
 2198:
            var32 = _closure1_slot0;
            var27 = _closure1_slot2;
            var34 = var27[var28];
            var34 = var32.bind(var17)(var34);
            var35 = var34.intl;
            var34 = var35.formatToPlainString;
            var27 = var27[var28];
            var27 = var32.bind(var17)(var27);
            var27 = var27.t;
            var32 = var27.XWSHTU;
            var27 = {};
            var36 = _closure1_slot17;
            var27['platform'] = var36;
            var32 = var34.bind(var35)(var32, var27);
            _fun0001_ip = 2331; continue _fun0001;
 2264:
            var27 = var31;
            if(var31) { _fun0001_ip = 2273; continue _fun0001 }
 2270:
            var27 = var30;
 2273:
            var32 = var33;
            if(!var27) { _fun0001_ip = 2331; continue _fun0001 }
 2279:
            var35 = _closure1_slot0;
            var27 = _closure1_slot2;
            var33 = var27[var28];
            var33 = var35.bind(var17)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var27 = var27[var28];
            var27 = var35.bind(var17)(var27);
            var27 = var27.t;
            var27 = var27.KC26NT;
            var32 = var33.bind(var34)(var27);
 2331:
            var27 = {};
            var27['label'] = var32;
            if(var29) { _fun0001_ip = 2343; continue _fun0001 }
 2340:
            var29 = var31;
 2343:
            if(var29) { _fun0001_ip = 2349; continue _fun0001 }
 2346:
            var29 = var30;
 2349:
            var27['disabled'] = var29;
            var18 = var27.label;
            var27 = var27.disabled;
            var19 = !var27;
            var15 = var24;
            var6 = null;
            var5 = var22;
            var3 = var26;
            var12 = var25;
            var2 = var20;
            _fun0001_ip = 2457; continue _fun0001;
 2385:
            var27 = _closure1_slot0;
            var20 = _closure1_slot2;
            var25 = var20[var28];
            var25 = var27.bind(var17)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var20 = var20[var28];
            var20 = var27.bind(var17)(var20);
            var20 = var20.t;
            var20 = var20.84qx9v;
            var3 = var25.bind(var26)(var20);
            var2 = var4.name;
            var19 = false;
            var18 = undefined;
            var15 = var24;
            var6 = null;
            var5 = var22;
            var12 = var16;
 2457:
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 28;
            var4 = var20[var4];
            var20 = var16.bind(var17)(var4);
            var16 = var20.getJoinFromSupportedPlatformsIconKeys;
            var4 = {};
            var24 = var1 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 2500; continue _fun0001 }
 2494:
            var22 = var23.supported_platforms;
 2500:
            var4['platforms'] = var22;
            var4['currentPlatform'] = var21;
            var4 = var16.bind(var20)(var4);
            var1 = var1 != var12;
            var16 = undefined;
            if(!var1) { _fun0001_ip = 2527; continue _fun0001 }
 2524:
            var16 = var12;
 2527:
            var1 = {};
            var1['ctaButtonEnabled'] = var19;
            var1['ctaButtonText'] = var18;
            var1['footerLabel'] = var15;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 26;
            var14 = var18[var14];
            var15 = var15.bind(var17)(var14);
            var14 = var15.getAppGradientColors;
            var14 = var14.bind(var15)(var16);
            var1['gradientColors'] = var14;
            var1['headerText'] = var13;
            var1['iconSrc'] = var12;
            var11 = !var11;
            var1['isActive'] = var11;
            var1['isPlatformSupported'] = var10;
            var1['isSpotifyParty'] = var9;
            var9 = 0;
            if(!(!(var7 > var9))) { _fun0001_ip = 2627; continue _fun0001 }
 2622:
            var7 = var8.length;
 2627:
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