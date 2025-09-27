// app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getOrFetchApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = null;
            var2 = var3 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 32; continue _fun0001 }
 14:
            var4 = _closure1_slot3;
            var2 = var4.getApplication;
            var1 = var2.bind(var4)(var5);
 32:
            var2 = var3 == var1;
            if(!var2) { _fun0001_ip = 43; continue _fun0001 }
 39:
            var2 = var3 != var5;
 43:
            if(!var2) { _fun0001_ip = 70; continue _fun0001 }
 46:
            var4 = _closure1_slot3;
            var3 = var4.isFetchingApplication;
            var4 = var3.bind(var4)(var5);
            var3 = false;
            var2 = var3 === var4;
 70:
            if(!var2) { _fun0001_ip = 112; continue _fun0001 }
 73:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.fetchApplication;
            var2 = false;
            var2 = var3.bind(var4)(var5, var2);
 112:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getPresenceActivity(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = arg2;
            var7 = arg3;
            var2 = var1.application;
            var4 = null;
            if(!(var4 == var2)) { _fun0002_ip = 61; continue _fun0002 }
 20:
            var8 = _closure1_slot10;
            var5 = var8.findActivity;
            var2 = var1.author;
            var3 = var2.id;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot17;
                var1 = var1.LISTENING;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var8)(var3, var2);
            return var2;
 61:
            var2 = var1.author;
            var5 = var2.id;
            var2 = var1.activity;
            var3 = var4 == var2;
            var9 = undefined;
            if(var3) { _fun0002_ip = 92; continue _fun0002 }
 87:
            var9 = var2.type;
 92:
            var3 = _closure1_slot15;
            var3 = var3.JOIN_REQUEST;
            if(!(var9 !== var3)) { _fun0002_ip = 151; continue _fun0002 }
 109:
            var3 = var1.activity;
            var4 = var4 == var3;
            var8 = undefined;
            if(var4) { _fun0002_ip = 129; continue _fun0002 }
 124:
            var8 = var3.type;
 129:
            var3 = _closure1_slot15;
            var3 = var3.STREAM_REQUEST;
            var4 = var5;
            if(!(var8 === var3)) { _fun0002_ip = 187; continue _fun0002 }
 146:
            var4 = var7;
            _fun0002_ip = 187; continue _fun0002;
 151:
            var3 = var7;
            if(!(var5 === var7)) { _fun0002_ip = 184; continue _fun0002 }
 158:
            var5 = var6.isPrivate;
            var5 = var5.bind(var6)();
            var3 = var7;
            if(!var5) { _fun0002_ip = 184; continue _fun0002 }
 174:
            var5 = var6.getRecipientId;
            var3 = var5.bind(var6)();
 184:
            var4 = var3;
 187:
            var3 = _closure1_slot10;
            var2 = var3.getApplicationActivity;
            var1 = var1.application;
            var1 = var1.id;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionStates;
    var _closure1_slot14 = var7;
    var7 = var4.ActivityActionTypes;
    var _closure1_slot15 = var7;
    var7 = var4.ActivityGamePlatforms;
    var _closure1_slot16 = var7;
    var4 = var4.ActivityTypes;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isSpotifyParty;
    var _closure1_slot18 = var7;
    var4 = var4.SPOTIFY_PLATFORM_NAME;
    var _closure1_slot19 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var14 = arg2;
            var _closure2_slot0 = var14;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var12 = undefined;
            var3 = var3.bind(var12)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0003_ip = 196; continue _fun0003 }
 53:
            var2 = var5.author;
            var4 = null;
            if(!(var4 != var2)) { _fun0003_ip = 196; continue _fun0003 }
 68:
            var2 = var5.activity;
            if(!(var4 != var2)) { _fun0003_ip = 196; continue _fun0003 }
 78:
            if(!(var4 != var14)) { _fun0003_ip = 196; continue _fun0003 }
 82:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var3 = var3.bind(var12)(var2);
            var2 = var3.getApplicationFromMessage;
            var2 = var2.bind(var3)(var5);
            var7 = _closure1_slot20;
            var8 = var5.application;
            var9 = var4 == var8;
            var3 = undefined;
            if(var9) { _fun0003_ip = 136; continue _fun0003 }
 131:
            var3 = var8.id;
 136:
            var3 = var7.bind(var12)(var3);
            if(!(var4 != var3)) { _fun0003_ip = 148; continue _fun0003 }
 145:
            var2 = var3;
 148:
            var3 = function getOrFetchLinkedApplication(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    var5 = var1 == var2;
                    var3 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0004_ip = 51; continue _fun0004 }
 16:
                    var6 = var2.linkedGames;
                    var2 = var1 == var6;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 51; continue _fun0004 }
 31:
                    var5 = var6.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 14;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.GameLinkTypes;
                        var1 = var1.OFFICIAL;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var2);
 51:
                    var2 = _closure1_slot20;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 72; continue _fun0004 }
 67:
                    var1 = var4.id;
 72:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var3.bind(var12)(var2);
            if(!(var4 != var3)) { _fun0003_ip = 167; continue _fun0003 }
 164:
            var2 = var3;
 167:
            var7 = _closure1_slot7;
            var3 = var7.getId;
            var31 = var3.bind(var7)();
            var3 = _closure1_slot21;
            var29 = var3.bind(var12)(var5, var14, var31);
            if(!(var4 == var2)) { _fun0003_ip = 198; continue _fun0003 }
 196:
            return var12;
 198:
            var3 = var5.activity;
            var8 = var4 == var3;
            var7 = undefined;
            if(var8) { _fun0003_ip = 218; continue _fun0003 }
 213:
            var7 = var3.type;
 218:
            var3 = _closure1_slot15;
            var3 = var3.STREAM_REQUEST;
            if(!(var7 !== var3)) { _fun0003_ip = 2850; continue _fun0003 }
 235:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = 19;
            var3 = var3[var22];
            var9 = var7.bind(var12)(var3);
            var8 = var9.getHeaderText;
            var7 = var2.name;
            var10 = var5.activity;
            var11 = var4 == var10;
            var3 = undefined;
            if(var11) { _fun0003_ip = 286; continue _fun0003 }
 281:
            var3 = var10.type;
 286:
            var19 = var8.bind(var9)(var7, var3);
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 20;
            var7 = var3[var7];
            var8 = var8.bind(var12)(var7);
            var7 = var2.id;
            var7 = var8.bind(var12)(var29, var5, var7);
            var17 = !var7;
            if(!(var4 != var29)) { _fun0003_ip = 395; continue _fun0003 }
 331:
            var7 = var29.party;
            if(!(var4 != var7)) { _fun0003_ip = 395; continue _fun0003 }
 341:
            var7 = global;
            var9 = var7.Array;
            var8 = var9.from;
            var11 = _closure1_slot8;
            var10 = var11.getParty;
            var7 = var29.party;
            var7 = var7.id;
            var7 = var10.bind(var11)(var7);
            if(!(var4 == var7)) { _fun0003_ip = 388; continue _fun0003 }
 384:
            var7 = new Array(0);
 388:
            var13 = var8.bind(var9)(var7);
            _fun0003_ip = 399; continue _fun0003;
 395:
            var13 = new Array(0);
 399:
            var7 = _closure1_slot0;
            var8 = 21;
            var8 = var3[var8];
            var9 = var7.bind(var12)(var8);
            var8 = var9.getPartySize;
            var8 = var8.bind(var9)(var29);
            var11 = var8.maxPartySize;
            var8 = 22;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0003_ip = 500; continue _fun0003 }
 457:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isAndroid;
            var3 = var3.bind(var7)();
            var27 = undefined;
            if(!var3) { _fun0003_ip = 510; continue _fun0003 }
 488:
            var3 = _closure1_slot16;
            var27 = var3.ANDROID;
            _fun0003_ip = 510; continue _fun0003;
 500:
            var3 = _closure1_slot16;
            var27 = var3.IOS;
 510:
            var8 = _closure1_slot9;
            var7 = var8.getApplicationActivity;
            var3 = var2.id;
            var7 = var7.bind(var8)(var3);
            if(!(var4 == var7)) { _fun0003_ip = 557; continue _fun0003 }
 534:
            var10 = _closure1_slot11;
            var9 = var10.getApplicationActivity;
            var8 = var2.id;
            var3 = true;
            var7 = var9.bind(var10)(var8, var3);
 557:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 23;
            var3 = var10[var3];
            var9 = var8.bind(var12)(var3);
            var3 = var9.getIsInParty;
            var9 = var3.bind(var9)(var7, var29);
            var3 = 24;
            var3 = var10[var3];
            var8 = var8.bind(var12)(var3);
            var3 = var8.getCanSendInvite;
            var45 = var8;
            var44 = var29;
            var43 = var5;
            var42 = var2;
            var41 = var31;
            var10 = var45[var3](var44, var43, var42, var41, var40);
            var3 = global;
            var15 = var3.Set;
            var8 = var4 == var29;
            var21 = var7;
            var7 = undefined;
            if(var8) { _fun0003_ip = 652; continue _fun0003 }
 646:
            var7 = var29.supported_platforms;
 652:
            if(!(var4 == var7)) { _fun0003_ip = 660; continue _fun0003 }
 656:
            var7 = new Array(0);
 660:
            var8 = var15.prototype;
            var8 = Object.create(var8, {constructor: {value: var15}});
            var45 = var8;
            var44 = var7;
            var7 = new var45[var15](var44, var43);
            var8 = var7 instanceof Object ? var7 : var8;
            var16 = var4 != var27;
            if(!var16) { _fun0003_ip = 700; continue _fun0003 }
 690:
            var7 = var8.has;
            var16 = var7.bind(var8)(var27);
 700:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 25;
            var7 = var15[var7];
            var18 = var8.bind(var12)(var7);
            var7 = var18.canLaunchFrame;
            var18 = var7.bind(var18)(var2);
            var7 = 26;
            var7 = var15[var7];
            var20 = var8.bind(var12)(var7);
            var7 = var20.isEmbeddedApp;
            var20 = var7.bind(var20)(var2);
            var7 = 27;
            var7 = var15[var7];
            var15 = var8.bind(var12)(var7);
            var8 = var15.getCanJoin;
            var7 = {};
            var7['presenceActivity'] = var29;
            var7['currentUserPresenceActivity'] = var21;
            var7['currentUserId'] = var31;
            var7['message'] = var5;
            var7['application'] = var2;
            var7['isEmbeddedApplication'] = var20;
            var7['isFrameApplication'] = var18;
            var7['isGameLaunchable'] = var16;
            var7 = var8.bind(var15)(var7);
            var20 = var7.canJoin;
            var25 = var7.remoteJoinPlatform;
            var8 = _closure1_slot18;
            var15 = var4 == var29;
            var7 = undefined;
            if(var15) { _fun0003_ip = 862; continue _fun0003 }
 842:
            var15 = var29.party;
            var18 = var4 == var15;
            var7 = undefined;
            if(var18) { _fun0003_ip = 862; continue _fun0003 }
 857:
            var7 = var15.id;
 862:
            var15 = var8.bind(var12)(var7);
            if(var15) { _fun0003_ip = 888; continue _fun0003 }
 870:
            var8 = var2.id;
            var7 = _closure1_slot5;
            var7 = var7.id;
            var15 = var8 === var7;
 888:
            var7 = var4 == var29;
            var23 = undefined;
            if(var7) { _fun0003_ip = 917; continue _fun0003 }
 897:
            var7 = var29.timestamps;
            var8 = var4 == var7;
            var23 = undefined;
            if(var8) { _fun0003_ip = 917; continue _fun0003 }
 912:
            var23 = var7.start;
 917:
            if(!(var4 == var23)) { _fun0003_ip = 939; continue _fun0003 }
 921:
            var8 = var4 == var29;
            var7 = undefined;
            if(var8) { _fun0003_ip = 936; continue _fun0003 }
 930:
            var7 = var29.created_at;
 936:
            var23 = var7;
 939:
            var7 = var4 == var29;
            var21 = undefined;
            if(var7) { _fun0003_ip = 968; continue _fun0003 }
 948:
            var7 = var29.timestamps;
            var8 = var4 == var7;
            var21 = undefined;
            if(var8) { _fun0003_ip = 968; continue _fun0003 }
 963:
            var21 = var7.end;
 968:
            var7 = var4 != var23;
            var26 = '';
            var28 = var26;
            if(!var7) { _fun0003_ip = 1039; continue _fun0003 }
 982:
            var8 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 28;
            var7 = var18[var7];
            var18 = var8.bind(var12)(var7);
            var8 = var18.formatActiveTimestamp;
            var7 = {};
            var7['start'] = var23;
            var7['end'] = var21;
            var21 = var3.Date;
            var3 = var21.now;
            var3 = var3.bind(var21)();
            var28 = var8.bind(var18)(var7, var3);
 1039:
            var3 = var2.icon;
            var3 = var4 != var3;
            var8 = null;
            if(!var3) { _fun0003_ip = 1102; continue _fun0003 }
 1053:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 29;
            var3 = var18[var3];
            var23 = var7.bind(var12)(var3);
            var21 = var23.getAppIconSrc;
            var18 = var2.id;
            var7 = var2.icon;
            var3 = var2.bot;
            var8 = var21.bind(var23)(var18, var7, var3);
 1102:
            var3 = var2.name;
            if(var15) { _fun0003_ip = 1864; continue _fun0003 }
 1113:
            if(var17) { _fun0003_ip = 1751; continue _fun0003 }
 1119:
            var7 = var13.map;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getUser;
                    var1 = arg1;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var7)) { _fun0005_ip = 67; continue _fun0005 }
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
                    if(var4) { _fun0005_ip = 113; continue _fun0005 }
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
            var7 = var7.bind(var13)(var6);
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var22];
            var21 = var18.bind(var12)(var6);
            var18 = var21.getPartyText;
            var6 = {};
            var6['maxPartySize'] = var11;
            var23 = var13.length;
            var6['partySize'] = var23;
            var24 = var5.activity;
            var30 = var4 == var24;
            var23 = undefined;
            if(var30) { _fun0003_ip = 1196; continue _fun0003 }
 1191:
            var23 = var24.type;
 1196:
            var6['activityActionType'] = var23;
            var6 = var18.bind(var21)(var6);
            var18 = {};
            var18['canJoin'] = var20;
            var18['remoteJoinPlatform'] = var25;
            var18['canSendInvite'] = var10;
            var18['isInParty'] = var9;
            var9 = var5.author;
            var9 = var9.id;
            var18['messageAuthorId'] = var9;
            var18['currentUserId'] = var31;
            var10 = var18.canJoin;
            var21 = var18.remoteJoinPlatform;
            var23 = var18.canSendInvite;
            var9 = var18.isInParty;
            var20 = var18.currentUserId;
            var18 = var18.messageAuthorId;
            if(var10) { _fun0003_ip = 1531; continue _fun0003 }
 1291:
            var10 = {};
            if(var23) { _fun0003_ip = 1454; continue _fun0003 }
 1299:
            if(var9) { _fun0003_ip = 1379; continue _fun0003 }
 1302:
            var10['label'] = var12;
            var9 = false;
            var10['disabled'] = var9;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var9 = 16;
            var23 = var32[var9];
            var23 = var30.bind(var12)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var9 = var32[var9];
            var9 = var30.bind(var12)(var9);
            var9 = var9.t;
            var9 = var9.OAB5TE;
            var9 = var23.bind(var24)(var9);
            var10['footerLabel'] = var9;
            var9 = var10;
            _fun0003_ip = 1452; continue _fun0003;
 1379:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 16;
            var24 = var33[var23];
            var24 = var32.bind(var12)(var24);
            var30 = var24.intl;
            var24 = var30.string;
            var23 = var33[var23];
            var23 = var32.bind(var12)(var23);
            var23 = var23.t;
            var23 = var23.KC26NT;
            var23 = var24.bind(var30)(var23);
            var10['label'] = var23;
            var23 = true;
            var10['disabled'] = var23;
            var10['footerLabel'] = var12;
            var9 = var10;
 1452:
            _fun0003_ip = 1529; continue _fun0003;
 1454:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 16;
            var24 = var33[var23];
            var24 = var32.bind(var12)(var24);
            var30 = var24.intl;
            var24 = var30.string;
            var23 = var33[var23];
            var23 = var32.bind(var12)(var23);
            var23 = var23.t;
            var23 = var23.hC/Ze3;
            var23 = var24.bind(var30)(var23);
            var10['label'] = var23;
            var18 = var18 === var20;
            var10['disabled'] = var18;
            var10['footerLabel'] = var12;
            var9 = var10;
 1529:
            _fun0003_ip = 1646; continue _fun0003;
 1531:
            var10 = var4 != var21;
            var18 = undefined;
            if(!var10) { _fun0003_ip = 1571; continue _fun0003 }
 1540:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var10 = 15;
            var10 = var23[var10];
            var20 = var20.bind(var12)(var10);
            var10 = var20.getRemoteJoinFooterLabel;
            var18 = var10.bind(var20)(var21);
 1571:
            var10 = {};
            var24 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 16;
            var21 = var30[var20];
            var21 = var24.bind(var12)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var20 = var30[var20];
            var20 = var24.bind(var12)(var20);
            var20 = var20.t;
            var20 = var20.VJlc0d;
            var20 = var21.bind(var23)(var20);
            var10['label'] = var20;
            var20 = false;
            var10['disabled'] = var20;
            var10['footerLabel'] = var18;
            var9 = var10;
 1646:
            var23 = var9.label;
            var10 = var9.disabled;
            var24 = !var10;
            var20 = var9.footerLabel;
            var21 = var4 != var29;
            if(!var21) { _fun0003_ip = 1682; continue _fun0003 }
 1672:
            var9 = var29.application_id;
            var21 = var4 != var9;
 1682:
            if(!var21) { _fun0003_ip = 1731; continue _fun0003 }
 1685:
            var30 = _closure1_slot13;
            var18 = var30.getState;
            var10 = var29.application_id;
            var9 = _closure1_slot15;
            var9 = var9.JOIN;
            var10 = var18.bind(var30)(var10, var9);
            var9 = _closure1_slot14;
            var9 = var9.LOADING;
            var21 = var10 === var9;
 1731:
            var10 = var7;
            var9 = var6;
            var7 = var28;
            var18 = var8;
            var6 = var3;
            _fun0003_ip = 2592; continue _fun0003;
 1751:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var22 = var34[var22];
            var30 = var33.bind(var12)(var22);
            var22 = var30.getDeadGameInviteText;
            var45 = var30;
            var44 = var5;
            var43 = var2;
            var42 = var14;
            var41 = var31;
            var7 = var45[var22](var44, var43, var42, var41, var40);
            var30 = 16;
            var31 = var34[var30];
            var31 = var33.bind(var12)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var34[var30];
            var30 = var33.bind(var12)(var30);
            var30 = var30.t;
            var30 = var30.pwEQoq;
            var20 = var31.bind(var32)(var30);
            var24 = false;
            var23 = undefined;
            var21 = false;
            var10 = null;
            var9 = var26;
            var18 = var8;
            var6 = var3;
            _fun0003_ip = 2592; continue _fun0003;
 1864:
            if(!(var4 != var29)) { _fun0003_ip = 1887; continue _fun0003 }
 1868:
            var3 = var29.details;
            if(!(var4 != var3)) { _fun0003_ip = 1887; continue _fun0003 }
 1878:
            var3 = var29.state;
            if(!(var4 == var3)) { _fun0003_ip = 1894; continue _fun0003 }
 1887:
            var3 = var2.name;
            _fun0003_ip = 1993; continue _fun0003;
 1894:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var22 = 16;
            var31 = var33[var22];
            var31 = var30.bind(var12)(var31);
            var32 = var31.intl;
            var31 = var32.formatToPlainString;
            var22 = var33[var22];
            var22 = var30.bind(var12)(var22);
            var22 = var22.t;
            var30 = var22.JCvHt7;
            var22 = {};
            var33 = var29.details;
            var22['track'] = var33;
            var33 = var29.state;
            var22['artist'] = var33;
            var32 = var31.bind(var32)(var30, var22);
            var31 = var32.replace;
            var30 = '\n';
            var22 = ' ';
            var3 = var31.bind(var32)(var30, var22);
 1993:
            var33 = _closure1_slot0;
            var22 = _closure1_slot2;
            var32 = 16;
            var30 = var22[var32];
            var30 = var33.bind(var12)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var22 = var22[var32];
            var22 = var33.bind(var12)(var22);
            var22 = var22.t;
            var22 = var22.sTo7s7;
            var30 = var30.bind(var31)(var22);
            if(var17) { _fun0003_ip = 2518; continue _fun0003 }
 2056:
            var31 = _closure1_slot1;
            var33 = _closure1_slot2;
            var22 = 30;
            var22 = var33[var22];
            var31 = var31.bind(var12)(var22);
            var22 = var2.id;
            var31 = var31.bind(var12)(var29, var22);
            var33 = var4 != var31;
            var22 = undefined;
            if(!var33) { _fun0003_ip = 2099; continue _fun0003 }
 2096:
            var22 = var31;
 2099:
            var36 = var5.author;
            var34 = _closure1_slot4;
            var31 = var34.hasConnectedAccount;
            var31 = var31.bind(var34)();
            var33 = var34.getSyncingWith;
            var38 = var33.bind(var34)();
            var33 = var34.getActivity;
            var35 = var33.bind(var34)();
            var34 = var36.id;
            var37 = _closure1_slot7;
            var33 = var37.getId;
            var33 = var33.bind(var37)();
            var33 = var34 === var33;
            var37 = var4 == var35;
            var34 = undefined;
            if(var37) { _fun0003_ip = 2179; continue _fun0003 }
 2173:
            var34 = var35.party;
 2179:
            var34 = var4 != var34;
            if(!var34) { _fun0003_ip = 2230; continue _fun0003 }
 2186:
            var39 = var4 == var29;
            var37 = undefined;
            if(var39) { _fun0003_ip = 2215; continue _fun0003 }
 2195:
            var39 = var29.party;
            var40 = var4 == var39;
            var37 = undefined;
            if(var40) { _fun0003_ip = 2215; continue _fun0003 }
 2210:
            var37 = var39.id;
 2215:
            var35 = var35.party;
            var35 = var35.id;
            var34 = var37 === var35;
 2230:
            var37 = var4 == var38;
            var35 = undefined;
            if(var37) { _fun0003_ip = 2244; continue _fun0003 }
 2239:
            var35 = var38.userId;
 2244:
            var35 = var4 != var35;
            if(!var35) { _fun0003_ip = 2274; continue _fun0003 }
 2251:
            var39 = var4 == var38;
            var37 = undefined;
            if(var39) { _fun0003_ip = 2265; continue _fun0003 }
 2260:
            var37 = var38.userId;
 2265:
            var36 = var36.id;
            var35 = var37 === var36;
 2274:
            var39 = _closure1_slot0;
            var36 = _closure1_slot2;
            var37 = var36[var32];
            var37 = var39.bind(var12)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var36[var32];
            var36 = var39.bind(var12)(var36);
            var36 = var36.t;
            var36 = var36.VJlc0d;
            var37 = var37.bind(var38)(var36);
            if(var31) { _fun0003_ip = 2395; continue _fun0003 }
 2329:
            var36 = _closure1_slot0;
            var31 = _closure1_slot2;
            var38 = var31[var32];
            var38 = var36.bind(var12)(var38);
            var39 = var38.intl;
            var38 = var39.formatToPlainString;
            var31 = var31[var32];
            var31 = var36.bind(var12)(var31);
            var31 = var31.t;
            var36 = var31.XWSHTU;
            var31 = {};
            var40 = _closure1_slot19;
            var31['platform'] = var40;
            var36 = var38.bind(var39)(var36, var31);
            _fun0003_ip = 2462; continue _fun0003;
 2395:
            var31 = var35;
            if(var35) { _fun0003_ip = 2404; continue _fun0003 }
 2401:
            var31 = var34;
 2404:
            var36 = var37;
            if(!var31) { _fun0003_ip = 2462; continue _fun0003 }
 2410:
            var39 = _closure1_slot0;
            var31 = _closure1_slot2;
            var37 = var31[var32];
            var37 = var39.bind(var12)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var31 = var31[var32];
            var31 = var39.bind(var12)(var31);
            var31 = var31.t;
            var31 = var31.KC26NT;
            var36 = var37.bind(var38)(var31);
 2462:
            var31 = {};
            var31['label'] = var36;
            if(var33) { _fun0003_ip = 2474; continue _fun0003 }
 2471:
            var33 = var35;
 2474:
            if(var33) { _fun0003_ip = 2480; continue _fun0003 }
 2477:
            var33 = var34;
 2480:
            var31['disabled'] = var33;
            var23 = var31.label;
            var31 = var31.disabled;
            var24 = !var31;
            var21 = false;
            var20 = var30;
            var10 = null;
            var9 = var26;
            var7 = var28;
            var18 = var22;
            var6 = var3;
            _fun0003_ip = 2592; continue _fun0003;
 2518:
            var31 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = var3[var32];
            var22 = var31.bind(var12)(var22);
            var28 = var22.intl;
            var22 = var28.string;
            var3 = var3[var32];
            var3 = var31.bind(var12)(var3);
            var3 = var3.t;
            var3 = var3.84qx9v;
            var7 = var22.bind(var28)(var3);
            var6 = var2.name;
            var24 = false;
            var23 = undefined;
            var20 = var30;
            var21 = false;
            var10 = null;
            var9 = var26;
            var18 = var8;
 2592:
            var3 = new Array(0);
            if(!(var4 == var25)) { _fun0003_ip = 2660; continue _fun0003 }
 2600:
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var8 = 31;
            var8 = var26[var8];
            var26 = var22.bind(var12)(var8);
            var22 = var26.getJoinFromSupportedPlatformsIconKeys;
            var8 = {};
            var30 = var4 == var29;
            var28 = undefined;
            if(var30) { _fun0003_ip = 2643; continue _fun0003 }
 2637:
            var28 = var29.supported_platforms;
 2643:
            var8['platforms'] = var28;
            var8['currentPlatform'] = var27;
            var8 = var22.bind(var26)(var8);
            _fun0003_ip = 2710; continue _fun0003;
 2660:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 31;
            var22 = var27[var22];
            var22 = var26.bind(var12)(var22);
            var22 = var22.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var25 = var22[var25];
            var8 = var3;
            if(!(var4 != var25)) { _fun0003_ip = 2710; continue _fun0003 }
 2697:
            var22 = var3.push;
            var22 = var22.bind(var3)(var25);
            var8 = var3;
 2710:
            var3 = var4 != var18;
            var22 = undefined;
            if(!var3) { _fun0003_ip = 2722; continue _fun0003 }
 2719:
            var22 = var18;
 2722:
            var3 = {};
            var3['ctaButtonEnabled'] = var24;
            var3['ctaButtonText'] = var23;
            var3['ctaButtonIsLoading'] = var21;
            var3['footerLabel'] = var20;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 29;
            var20 = var23[var20];
            var21 = var21.bind(var12)(var20);
            var20 = var21.getAppGradientColors;
            var20 = var20.bind(var21)(var22);
            var3['gradientColors'] = var20;
            var3['headerText'] = var19;
            var3['iconSrc'] = var18;
            var17 = !var17;
            var3['isActive'] = var17;
            var3['isPlatformSupported'] = var16;
            var3['isSpotifyParty'] = var15;
            var15 = 0;
            if(!(!(var11 > var15))) { _fun0003_ip = 2819; continue _fun0003 }
 2814:
            var11 = var13.length;
 2819:
            var3['maxPartySize'] = var11;
            var3['partyMemberAvatarURIs'] = var10;
            var3['partySizeText'] = var9;
            var3['platformIconKeys'] = var8;
            var3['subtitle'] = var7;
            var3['title'] = var6;
            return var3;
 2850:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0003_ip = 2913; continue _fun0003 }
 2864:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 29;
            var3 = var8[var3];
            var10 = var6.bind(var12)(var3);
            var9 = var10.getAppIconSrc;
            var8 = var2.id;
            var6 = var2.icon;
            var3 = var2.bot;
            var7 = var9.bind(var10)(var8, var6, var3);
 2913:
            var3 = var4 != var7;
            var8 = undefined;
            if(!var3) { _fun0003_ip = 2925; continue _fun0003 }
 2922:
            var8 = var7;
 2925:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 29;
            var3 = var13[var3];
            var6 = var9.bind(var12)(var3);
            var3 = var6.getAppGradientColors;
            var8 = var3.bind(var6)(var8);
            var6 = _closure1_slot21;
            var15 = _closure1_slot7;
            var3 = var15.getId;
            var3 = var3.bind(var15)();
            var6 = var6.bind(var12)(var5, var14, var3);
            var11 = _closure1_slot1;
            var1 = 20;
            var1 = var13[var1];
            var3 = var11.bind(var12)(var1);
            var1 = var2.id;
            var6 = var3.bind(var12)(var6, var5, var1);
            var1 = 19;
            var1 = var13[var1];
            var10 = var9.bind(var12)(var1);
            var3 = var10.getRequestToStreamText;
            var1 = var15.getId;
            var1 = var1.bind(var15)();
            var3 = var3.bind(var10)(var5, var14, var1);
            var1 = 32;
            var1 = var13[var1];
            var1 = var11.bind(var12)(var1);
            var10 = var1.bind(var12)(var5);
            var5 = var10.text;
            var1 = {};
            var10 = var10.isDisabled;
            var10 = !var10;
            var1['ctaButtonEnabled'] = var10;
            var1['ctaButtonText'] = var5;
            var5 = false;
            var1['ctaButtonIsLoading'] = var5;
            var1['footerLabel'] = var4;
            var1['gradientColors'] = var8;
            var8 = 16;
            var8 = var13[var8];
            var8 = var9.bind(var12)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = 33;
            var8 = var13[var8];
            var8 = var11.bind(var12)(var8);
            var8 = var8.nAyuPj;
            var8 = var9.bind(var10)(var8);
            var1['headerText'] = var8;
            var1['iconSrc'] = var7;
            var1['isActive'] = var6;
            var1['isSpotifyParty'] = var5;
            var5 = true;
            var1['isPlatformSupported'] = var5;
            var5 = 0;
            var1['maxPartySize'] = var5;
            var1['partyMemberAvatarURIs'] = var4;
            var1['partySizeText'] = var4;
            var4 = new Array(0);
            var1['platformIconKeys'] = var4;
            var1['subtitle'] = var3;
            var2 = var2.name;
            var1['title'] = var2;
            return var1;
        }
    };
    var3['createActivityRichPresenceInviteEmbed'] = var2;
    return var1;
})();