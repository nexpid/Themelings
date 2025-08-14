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
            var28 = arg1;
            var33 = arg2;
            var _closure2_slot0 = var33;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var20 = undefined;
            var4 = var4.bind(var20)(var3);
            var3 = var4.getIsRichPresenceActivityInviteRedesignEnabled;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 273; continue _fun0001 }
 53:
            var3 = var28.author;
            var22 = null;
            if(!(var22 != var3)) { _fun0001_ip = 273; continue _fun0001 }
 68:
            var3 = var28.activity;
            if(!(var22 != var3)) { _fun0001_ip = 273; continue _fun0001 }
 81:
            if(!(var22 != var33)) { _fun0001_ip = 273; continue _fun0001 }
 88:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var4 = var4.bind(var20)(var3);
            var3 = var4.getApplicationFromMessage;
            var4 = var3.bind(var4)(var28);
            var3 = var28.application;
            var5 = var22 == var3;
            var8 = undefined;
            if(var5) { _fun0001_ip = 138; continue _fun0001 }
 133:
            var8 = var3.id;
 138:
            var5 = var22 != var8;
            var3 = null;
            if(!var5) { _fun0001_ip = 162; continue _fun0001 }
 147:
            var6 = _closure1_slot3;
            var5 = var6.getApplication;
            var3 = var5.bind(var6)(var8);
 162:
            var5 = var22 == var3;
            if(!var5) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var5 = var22 != var8;
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
            var7 = var6.bind(var20)(var5);
            var6 = var7.fetchApplication;
            var5 = false;
            var5 = var6.bind(var7)(var8, var5);
 234:
            if(!(var22 != var3)) { _fun0001_ip = 241; continue _fun0001 }
 238:
            var4 = var3;
 241:
            var5 = _closure1_slot7;
            var3 = var5.getId;
            var31 = var3.bind(var5)();
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
            var21 = var3.bind(var20)(var28, var33, var31);
            if(!(var22 == var4)) { _fun0001_ip = 275; continue _fun0001 }
 273:
            return var20;
 275:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var25 = 16;
            var3 = var3[var25];
            var7 = var5.bind(var20)(var3);
            var6 = var7.getHeaderText;
            var5 = var4.name;
            var8 = var28.activity;
            var9 = var22 == var8;
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
            var6 = var6.bind(var20)(var5);
            var5 = var4.id;
            var5 = var6.bind(var20)(var21, var28, var5);
            var11 = !var5;
            if(!(var22 != var21)) { _fun0001_ip = 435; continue _fun0001 }
 371:
            var5 = var21.party;
            if(!(var22 != var5)) { _fun0001_ip = 435; continue _fun0001 }
 381:
            var5 = global;
            var7 = var5.Array;
            var6 = var7.from;
            var9 = _closure1_slot8;
            var8 = var9.getParty;
            var5 = var21.party;
            var5 = var5.id;
            var5 = var8.bind(var9)(var5);
            if(!(var22 == var5)) { _fun0001_ip = 428; continue _fun0001 }
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
            var7 = var5.bind(var20)(var6);
            var6 = var7.getPartySize;
            var6 = var6.bind(var7)(var21);
            var7 = var6.maxPartySize;
            var6 = 19;
            var3 = var3[var6];
            var5 = var5.bind(var20)(var3);
            var3 = var5.isIOS;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 540; continue _fun0001 }
 497:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var5 = var5.bind(var20)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            var19 = undefined;
            if(!var3) { _fun0001_ip = 550; continue _fun0001 }
 528:
            var3 = _closure1_slot14;
            var19 = var3.ANDROID;
            _fun0001_ip = 550; continue _fun0001;
 540:
            var3 = _closure1_slot14;
            var19 = var3.IOS;
 550:
            var6 = _closure1_slot9;
            var5 = var6.getApplicationActivity;
            var3 = var4.id;
            var5 = var5.bind(var6)(var3);
            if(!(var22 == var5)) { _fun0001_ip = 597; continue _fun0001 }
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
            var6 = var9.bind(var20)(var3);
            var3 = var6.getIsInParty;
            var6 = var3.bind(var6)(var5, var21);
            var3 = 21;
            var3 = var10[var3];
            var9 = var9.bind(var20)(var3);
            var3 = var9.getCanSendInvite;
            var42 = var9;
            var41 = var21;
            var40 = var28;
            var39 = var4;
            var38 = var31;
            var15 = var42[var3](var41, var40, var39, var38, var37);
            var3 = global;
            var10 = var3.Set;
            var9 = var22 == var21;
            var17 = var5;
            var5 = undefined;
            if(var9) { _fun0001_ip = 692; continue _fun0001 }
 686:
            var5 = var21.supported_platforms;
 692:
            if(!(var22 == var5)) { _fun0001_ip = 700; continue _fun0001 }
 696:
            var5 = new Array(0);
 700:
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var42 = var9;
            var41 = var5;
            var5 = new var42[var10](var41, var40);
            var9 = var5 instanceof Object ? var5 : var9;
            var10 = var22 != var19;
            if(!var10) { _fun0001_ip = 740; continue _fun0001 }
 730:
            var5 = var9.has;
            var10 = var5.bind(var9)(var19);
 740:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 22;
            var5 = var12[var5];
            var14 = var9.bind(var20)(var5);
            var5 = var14.canLaunchFrame;
            var14 = var5.bind(var14)(var4);
            var5 = 23;
            var5 = var12[var5];
            var16 = var9.bind(var20)(var5);
            var5 = var16.isEmbeddedApp;
            var16 = var5.bind(var16)(var4);
            var5 = 24;
            var5 = var12[var5];
            var12 = var9.bind(var20)(var5);
            var9 = var12.getCanJoin;
            var5 = {};
            var5['presenceActivity'] = var21;
            var5['currentUserPresenceActivity'] = var17;
            var5['currentUserId'] = var31;
            var5['message'] = var28;
            var5['application'] = var4;
            var5['isEmbeddedApplication'] = var16;
            var5['isFrameApplication'] = var14;
            var5['isGameLaunchable'] = var10;
            var16 = var9.bind(var12)(var5);
            var9 = _closure1_slot16;
            var12 = var22 == var21;
            var5 = undefined;
            if(var12) { _fun0001_ip = 890; continue _fun0001 }
 870:
            var12 = var21.party;
            var14 = var22 == var12;
            var5 = undefined;
            if(var14) { _fun0001_ip = 890; continue _fun0001 }
 885:
            var5 = var12.id;
 890:
            var9 = var9.bind(var20)(var5);
            if(var9) { _fun0001_ip = 916; continue _fun0001 }
 898:
            var12 = var4.id;
            var5 = _closure1_slot5;
            var5 = var5.id;
            var9 = var12 === var5;
 916:
            var17 = _closure1_slot0;
            var5 = _closure1_slot2;
            var29 = 13;
            var12 = var5[var29];
            var12 = var17.bind(var20)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var5 = var5[var29];
            var5 = var17.bind(var20)(var5);
            var5 = var5.t;
            var5 = var5.OAB5TE;
            var5 = var12.bind(var14)(var5);
            var12 = var22 == var21;
            var23 = undefined;
            if(var12) { _fun0001_ip = 1002; continue _fun0001 }
 982:
            var12 = var21.timestamps;
            var14 = var22 == var12;
            var23 = undefined;
            if(var14) { _fun0001_ip = 1002; continue _fun0001 }
 997:
            var23 = var12.start;
 1002:
            if(!(var22 == var23)) { _fun0001_ip = 1024; continue _fun0001 }
 1006:
            var14 = var22 == var21;
            var12 = undefined;
            if(var14) { _fun0001_ip = 1021; continue _fun0001 }
 1015:
            var12 = var21.created_at;
 1021:
            var23 = var12;
 1024:
            var12 = var22 == var21;
            var18 = undefined;
            if(var12) { _fun0001_ip = 1053; continue _fun0001 }
 1033:
            var12 = var21.timestamps;
            var14 = var22 == var12;
            var18 = undefined;
            if(var14) { _fun0001_ip = 1053; continue _fun0001 }
 1048:
            var18 = var12.end;
 1053:
            var12 = var22 != var23;
            var24 = '';
            var27 = var24;
            if(!var12) { _fun0001_ip = 1124; continue _fun0001 }
 1067:
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 25;
            var12 = var17[var12];
            var17 = var14.bind(var20)(var12);
            var14 = var17.formatActiveTimestamp;
            var12 = {};
            var12['start'] = var23;
            var12['end'] = var18;
            var18 = var3.Date;
            var3 = var18.now;
            var3 = var3.bind(var18)();
            var27 = var14.bind(var17)(var12, var3);
 1124:
            var3 = var4.icon;
            var3 = var22 != var3;
            var18 = null;
            if(!var3) { _fun0001_ip = 1187; continue _fun0001 }
 1138:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 26;
            var3 = var14[var3];
            var23 = var12.bind(var20)(var3);
            var17 = var23.getAppIconSrc;
            var14 = var4.id;
            var12 = var4.icon;
            var3 = var4.bot;
            var18 = var17.bind(var23)(var14, var12, var3);
 1187:
            var23 = var4.name;
            var3 = var22 != var18;
            var14 = undefined;
            if(!var3) { _fun0001_ip = 1204; continue _fun0001 }
 1201:
            var14 = var18;
 1204:
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 26;
            var3 = var17[var3];
            var12 = var12.bind(var20)(var3);
            var3 = var12.getAppGradientColors;
            var14 = var3.bind(var12)(var14);
            if(var9) { _fun0001_ip = 1776; continue _fun0001 }
 1241:
            if(var11) { _fun0001_ip = 1668; continue _fun0001 }
 1247:
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
            var2 = var2[var25];
            var17 = var12.bind(var20)(var2);
            var12 = var17.getPartyText;
            var2 = {};
            var2['maxPartySize'] = var7;
            var26 = var8.length;
            var2['partySize'] = var26;
            var30 = var28.activity;
            var32 = var22 == var30;
            var26 = undefined;
            if(var32) { _fun0001_ip = 1324; continue _fun0001 }
 1319:
            var26 = var30.type;
 1324:
            var2['activityActionType'] = var26;
            var2 = var12.bind(var17)(var2);
            var12 = {};
            var12['canJoin'] = var16;
            var12['canSendInvite'] = var15;
            var12['isInParty'] = var6;
            var6 = var28.author;
            var6 = var6.id;
            var12['messageAuthorId'] = var6;
            var12['currentUserId'] = var31;
            var26 = var12.canJoin;
            var17 = var12.canSendInvite;
            var6 = var12.isInParty;
            var16 = var12.currentUserId;
            var15 = var12.messageAuthorId;
            var12 = {};
            if(var26) { _fun0001_ip = 1567; continue _fun0001 }
 1410:
            if(var17) { _fun0001_ip = 1498; continue _fun0001 }
 1413:
            if(var6) { _fun0001_ip = 1431; continue _fun0001 }
 1416:
            var12['label'] = var20;
            var6 = false;
            var12['disabled'] = var6;
            var6 = var12;
            _fun0001_ip = 1496; continue _fun0001;
 1431:
            var32 = _closure1_slot0;
            var17 = _closure1_slot2;
            var26 = var17[var29];
            var26 = var32.bind(var20)(var26);
            var30 = var26.intl;
            var26 = var30.string;
            var17 = var17[var29];
            var17 = var32.bind(var20)(var17);
            var17 = var17.t;
            var17 = var17.KC26NT;
            var17 = var26.bind(var30)(var17);
            var12['label'] = var17;
            var17 = true;
            var12['disabled'] = var17;
            var6 = var12;
 1496:
            _fun0001_ip = 1565; continue _fun0001;
 1498:
            var32 = _closure1_slot0;
            var17 = _closure1_slot2;
            var26 = var17[var29];
            var26 = var32.bind(var20)(var26);
            var30 = var26.intl;
            var26 = var30.string;
            var17 = var17[var29];
            var17 = var32.bind(var20)(var17);
            var17 = var17.t;
            var17 = var17.hC/Ze3;
            var17 = var26.bind(var30)(var17);
            var12['label'] = var17;
            var15 = var15 === var16;
            var12['disabled'] = var15;
            var6 = var12;
 1565:
            _fun0001_ip = 1632; continue _fun0001;
 1567:
            var26 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var29];
            var16 = var26.bind(var20)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var29];
            var15 = var26.bind(var20)(var15);
            var15 = var15.t;
            var15 = var15.VJlc0d;
            var15 = var16.bind(var17)(var15);
            var12['label'] = var15;
            var15 = false;
            var12['disabled'] = var15;
            var6 = var12;
 1632:
            var16 = var6.label;
            var6 = var6.disabled;
            var17 = !var6;
            var15 = var5;
            var6 = var3;
            var5 = var2;
            var3 = var27;
            var12 = var18;
            var2 = var23;
            _fun0001_ip = 2494; continue _fun0001;
 1668:
            var32 = _closure1_slot0;
            var26 = _closure1_slot2;
            var25 = var26[var25];
            var30 = var32.bind(var20)(var25);
            var25 = var30.getDeadGameInviteText;
            var42 = var30;
            var41 = var28;
            var40 = var4;
            var39 = var33;
            var38 = var31;
            var3 = var42[var25](var41, var40, var39, var38, var37);
            var30 = var26[var29];
            var30 = var32.bind(var20)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var26 = var26[var29];
            var26 = var32.bind(var20)(var26);
            var26 = var26.t;
            var26 = var26.pwEQoq;
            var15 = var30.bind(var31)(var26);
            var17 = false;
            var16 = undefined;
            var6 = null;
            var5 = var24;
            var12 = var18;
            var2 = var23;
            _fun0001_ip = 2494; continue _fun0001;
 1776:
            if(!(var22 != var21)) { _fun0001_ip = 1799; continue _fun0001 }
 1780:
            var23 = var21.details;
            if(!(var22 != var23)) { _fun0001_ip = 1799; continue _fun0001 }
 1790:
            var23 = var21.state;
            if(!(var22 == var23)) { _fun0001_ip = 1806; continue _fun0001 }
 1799:
            var23 = var4.name;
            _fun0001_ip = 1902; continue _fun0001;
 1806:
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var30 = var25[var29];
            var30 = var26.bind(var20)(var30);
            var31 = var30.intl;
            var30 = var31.formatToPlainString;
            var25 = var25[var29];
            var25 = var26.bind(var20)(var25);
            var25 = var25.t;
            var26 = var25.JCvHt7;
            var25 = {};
            var32 = var21.details;
            var25['track'] = var32;
            var32 = var21.state;
            var25['artist'] = var32;
            var31 = var30.bind(var31)(var26, var25);
            var30 = var31.replace;
            var26 = '\n';
            var25 = ' ';
            var23 = var30.bind(var31)(var26, var25);
 1902:
            var31 = _closure1_slot0;
            var25 = _closure1_slot2;
            var26 = var25[var29];
            var26 = var31.bind(var20)(var26);
            var30 = var26.intl;
            var26 = var30.string;
            var25 = var25[var29];
            var25 = var31.bind(var20)(var25);
            var25 = var25.t;
            var25 = var25.sTo7s7;
            var25 = var26.bind(var30)(var25);
            if(var11) { _fun0001_ip = 2422; continue _fun0001 }
 1962:
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var26 = 27;
            var26 = var31[var26];
            var30 = var30.bind(var20)(var26);
            var26 = var4.id;
            var30 = var30.bind(var20)(var21, var26);
            var31 = var22 != var30;
            var26 = undefined;
            if(!var31) { _fun0001_ip = 2005; continue _fun0001 }
 2002:
            var26 = var30;
 2005:
            var33 = var28.author;
            var31 = _closure1_slot4;
            var28 = var31.hasConnectedAccount;
            var28 = var28.bind(var31)();
            var30 = var31.getSyncingWith;
            var35 = var30.bind(var31)();
            var30 = var31.getActivity;
            var32 = var30.bind(var31)();
            var31 = var33.id;
            var34 = _closure1_slot7;
            var30 = var34.getId;
            var30 = var30.bind(var34)();
            var30 = var31 === var30;
            var34 = var22 == var32;
            var31 = undefined;
            if(var34) { _fun0001_ip = 2085; continue _fun0001 }
 2079:
            var31 = var32.party;
 2085:
            var31 = var22 != var31;
            if(!var31) { _fun0001_ip = 2136; continue _fun0001 }
 2092:
            var36 = var22 == var21;
            var34 = undefined;
            if(var36) { _fun0001_ip = 2121; continue _fun0001 }
 2101:
            var36 = var21.party;
            var37 = var22 == var36;
            var34 = undefined;
            if(var37) { _fun0001_ip = 2121; continue _fun0001 }
 2116:
            var34 = var36.id;
 2121:
            var32 = var32.party;
            var32 = var32.id;
            var31 = var34 === var32;
 2136:
            var34 = var22 == var35;
            var32 = undefined;
            if(var34) { _fun0001_ip = 2150; continue _fun0001 }
 2145:
            var32 = var35.userId;
 2150:
            var32 = var22 != var32;
            if(!var32) { _fun0001_ip = 2180; continue _fun0001 }
 2157:
            var36 = var22 == var35;
            var34 = undefined;
            if(var36) { _fun0001_ip = 2171; continue _fun0001 }
 2166:
            var34 = var35.userId;
 2171:
            var33 = var33.id;
            var32 = var34 === var33;
 2180:
            var36 = _closure1_slot0;
            var33 = _closure1_slot2;
            var34 = var33[var29];
            var34 = var36.bind(var20)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var33 = var33[var29];
            var33 = var36.bind(var20)(var33);
            var33 = var33.t;
            var33 = var33.VJlc0d;
            var34 = var34.bind(var35)(var33);
            if(var28) { _fun0001_ip = 2301; continue _fun0001 }
 2235:
            var33 = _closure1_slot0;
            var28 = _closure1_slot2;
            var35 = var28[var29];
            var35 = var33.bind(var20)(var35);
            var36 = var35.intl;
            var35 = var36.formatToPlainString;
            var28 = var28[var29];
            var28 = var33.bind(var20)(var28);
            var28 = var28.t;
            var33 = var28.XWSHTU;
            var28 = {};
            var37 = _closure1_slot17;
            var28['platform'] = var37;
            var33 = var35.bind(var36)(var33, var28);
            _fun0001_ip = 2368; continue _fun0001;
 2301:
            var28 = var32;
            if(var32) { _fun0001_ip = 2310; continue _fun0001 }
 2307:
            var28 = var31;
 2310:
            var33 = var34;
            if(!var28) { _fun0001_ip = 2368; continue _fun0001 }
 2316:
            var36 = _closure1_slot0;
            var28 = _closure1_slot2;
            var34 = var28[var29];
            var34 = var36.bind(var20)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var28 = var28[var29];
            var28 = var36.bind(var20)(var28);
            var28 = var28.t;
            var28 = var28.KC26NT;
            var33 = var34.bind(var35)(var28);
 2368:
            var28 = {};
            var28['label'] = var33;
            if(var30) { _fun0001_ip = 2380; continue _fun0001 }
 2377:
            var30 = var32;
 2380:
            if(var30) { _fun0001_ip = 2386; continue _fun0001 }
 2383:
            var30 = var31;
 2386:
            var28['disabled'] = var30;
            var16 = var28.label;
            var28 = var28.disabled;
            var17 = !var28;
            var15 = var25;
            var6 = null;
            var5 = var24;
            var3 = var27;
            var12 = var26;
            var2 = var23;
            _fun0001_ip = 2494; continue _fun0001;
 2422:
            var28 = _closure1_slot0;
            var23 = _closure1_slot2;
            var26 = var23[var29];
            var26 = var28.bind(var20)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var23 = var23[var29];
            var23 = var28.bind(var20)(var23);
            var23 = var23.t;
            var23 = var23.84qx9v;
            var3 = var26.bind(var27)(var23);
            var2 = var4.name;
            var17 = false;
            var16 = undefined;
            var15 = var25;
            var6 = null;
            var5 = var24;
            var12 = var18;
 2494:
            var4 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 28;
            var1 = var18[var1];
            var18 = var4.bind(var20)(var1);
            var4 = var18.getJoinFromSupportedPlatformsIconKeys;
            var1 = {};
            var22 = var22 == var21;
            var20 = undefined;
            if(var22) { _fun0001_ip = 2537; continue _fun0001 }
 2531:
            var20 = var21.supported_platforms;
 2537:
            var1['platforms'] = var20;
            var1['currentPlatform'] = var19;
            var4 = var4.bind(var18)(var1);
            var1 = {};
            var1['ctaButtonEnabled'] = var17;
            var1['ctaButtonText'] = var16;
            var1['footerLabel'] = var15;
            var1['gradientColors'] = var14;
            var1['headerText'] = var13;
            var1['iconSrc'] = var12;
            var11 = !var11;
            var1['isActive'] = var11;
            var1['isPlatformSupported'] = var10;
            var1['isSpotifyParty'] = var9;
            var9 = 0;
            if(!(!(var7 > var9))) { _fun0001_ip = 2621; continue _fun0001 }
 2616:
            var7 = var8.length;
 2621:
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