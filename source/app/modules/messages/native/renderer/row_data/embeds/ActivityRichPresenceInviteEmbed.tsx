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
case 0:
            var5 = arg1;
            var3 = null;
            var2 = var3 != var5;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var2 = var4.getApplication;
            var1 = var2.bind(var4)(var5);
case 2:
            var2 = var3 == var1;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3 != var5;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot3;
            var3 = var4.isFetchingApplication;
            var4 = var3.bind(var4)(var5);
            var3 = false;
            var2 = var3 === var4;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.fetchApplication;
            var2 = false;
            var2 = var3.bind(var4)(var5, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getPresenceActivity(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = arg2;
            var7 = arg3;
            var2 = var1.application;
            var4 = null;
            if(!(var4 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
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
case 10:
            var2 = var1.author;
            var5 = var2.id;
            var2 = var1.activity;
            var3 = var4 == var2;
            var9 = undefined;
            if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var9 = var2.type;
case 12:
            var3 = _closure1_slot15;
            var3 = var3.JOIN_REQUEST;
            if(!(var9 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = var1.activity;
            var4 = var4 == var3;
            var8 = undefined;
            if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var8 = var3.type;
case 16:
            var3 = _closure1_slot15;
            var3 = var3.STREAM_REQUEST;
            var4 = var5;
            if(!(var8 === var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = var7;
            _fun0002_ip = 18; continue _fun0002;
case 14:
            var3 = var7;
            if(!(var5 === var7)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = var6.isPrivate;
            var5 = var5.bind(var6)();
            var3 = var7;
            if(!var5) { _fun0002_ip = 20; continue _fun0002 }
case 22:
            var5 = var6.getRecipientId;
            var3 = var5.bind(var6)();
case 20:
            var4 = var3;
case 18:
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
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var14 = arg2;
            var _closure2_slot0 = var14;
            var1 = var5.author;
            var4 = null;
            if(!(var4 != var1)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = var5.activity;
            if(!(var4 != var1)) { _fun0003_ip = 23; continue _fun0003 }
case 25:
            if(!(var4 != var14)) { _fun0003_ip = 23; continue _fun0003 }
case 26:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var12 = undefined;
            var3 = var3.bind(var12)(var2);
            var2 = var3.getApplicationFromMessage;
            var2 = var2.bind(var3)(var5);
            var7 = _closure1_slot20;
            var8 = var5.application;
            var9 = var4 == var8;
            var3 = undefined;
            if(var9) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var3 = var8.id;
case 27:
            var3 = var7.bind(var12)(var3);
            if(!(var4 != var3)) { _fun0003_ip = 29; continue _fun0003 }
case 8:
            var2 = var3;
case 29:
            var3 = function getOrFetchLinkedApplication(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var5 = var1 == var2;
                    var3 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var6 = var2.linkedGames;
                    var2 = var1 == var6;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 32:
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
case 30:
                    var2 = _closure1_slot20;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var1 = var4.id;
case 33:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var3.bind(var12)(var2);
            if(!(var4 != var3)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var2 = var3;
case 35:
            var7 = _closure1_slot7;
            var3 = var7.getId;
            var31 = var3.bind(var7)();
            var3 = _closure1_slot21;
            var3 = var3.bind(var12)(var5, var14, var31);
            if(!(var4 == var2)) { _fun0003_ip = 37; continue _fun0003 }
case 23:
            var7 = undefined;
            return var7;
case 37:
            var7 = var5.activity;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0003_ip = 18; continue _fun0003 }
case 38:
            var8 = var7.type;
case 18:
            var7 = _closure1_slot15;
            var7 = var7.STREAM_REQUEST;
            if(!(var8 !== var7)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var21 = 18;
            var7 = var7[var21];
            var10 = var8.bind(var12)(var7);
            var9 = var10.getHeaderText;
            var8 = var2.name;
            var11 = var5.activity;
            var13 = var4 == var11;
            var7 = undefined;
            if(var13) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var7 = var11.type;
case 41:
            var20 = var9.bind(var10)(var8, var7);
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var8 = 19;
            var8 = var7[var8];
            var9 = var9.bind(var12)(var8);
            var8 = var2.id;
            var8 = var9.bind(var12)(var3, var5, var8);
            var18 = !var8;
            if(!(var4 != var3)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var8 = var3.party;
            if(!(var4 != var8)) { _fun0003_ip = 43; continue _fun0003 }
case 45:
            var8 = global;
            var10 = var8.Array;
            var9 = var10.from;
            var13 = _closure1_slot8;
            var11 = var13.getParty;
            var8 = var3.party;
            var8 = var8.id;
            var8 = var11.bind(var13)(var8);
            if(!(var4 == var8)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var8 = new Array(0);
case 46:
            var15 = var9.bind(var10)(var8);
            _fun0003_ip = 48; continue _fun0003;
case 43:
            var15 = new Array(0);
case 48:
            var8 = _closure1_slot0;
            var9 = 20;
            var9 = var7[var9];
            var10 = var8.bind(var12)(var9);
            var9 = var10.getPartySize;
            var9 = var9.bind(var10)(var3);
            var13 = var9.maxPartySize;
            var9 = 21;
            var7 = var7[var9];
            var8 = var8.bind(var12)(var7);
            var7 = var8.isIOS;
            var7 = var7.bind(var8)();
            if(var7) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var8 = var8.bind(var12)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            var28 = undefined;
            if(!var7) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var7 = _closure1_slot16;
            var28 = var7.ANDROID;
            _fun0003_ip = 51; continue _fun0003;
case 49:
            var7 = _closure1_slot16;
            var28 = var7.IOS;
case 51:
            var9 = _closure1_slot9;
            var8 = var9.getApplicationActivity;
            var7 = var2.id;
            var8 = var8.bind(var9)(var7);
            if(!(var4 == var8)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var11 = _closure1_slot11;
            var10 = var11.getApplicationActivity;
            var9 = var2.id;
            var7 = true;
            var8 = var10.bind(var11)(var9, var7);
case 53:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 22;
            var7 = var11[var7];
            var10 = var9.bind(var12)(var7);
            var7 = var10.getIsInParty;
            var10 = var7.bind(var10)(var8, var3);
            var7 = 23;
            var7 = var11[var7];
            var9 = var9.bind(var12)(var7);
            var7 = var9.getCanSendInvite;
            var45 = var9;
            var44 = var3;
            var43 = var5;
            var42 = var2;
            var41 = var31;
            var11 = var45[var7](var44, var43, var42, var41, var40);
            var7 = global;
            var16 = var7.Set;
            var9 = var4 == var3;
            var23 = var8;
            var8 = undefined;
            if(var9) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var8 = var3.supported_platforms;
case 55:
            if(!(var4 == var8)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var8 = new Array(0);
case 57:
            var9 = var16.prototype;
            var9 = Object.create(var9, {constructor: {value: var16}});
            var45 = var9;
            var44 = var8;
            var8 = new var45[var16](var44, var43);
            var9 = var8 instanceof Object ? var8 : var9;
            var17 = var4 != var28;
            if(!var17) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var8 = var9.has;
            var17 = var8.bind(var9)(var28);
case 59:
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 24;
            var8 = var16[var8];
            var19 = var9.bind(var12)(var8);
            var8 = var19.canLaunchFrame;
            var19 = var8.bind(var19)(var2);
            var8 = 25;
            var8 = var16[var8];
            var22 = var9.bind(var12)(var8);
            var8 = var22.isEmbeddedApp;
            var22 = var8.bind(var22)(var2);
            var8 = 26;
            var8 = var16[var8];
            var16 = var9.bind(var12)(var8);
            var9 = var16.getCanJoin;
            var8 = {};
            var8['presenceActivity'] = var3;
            var8['currentUserPresenceActivity'] = var23;
            var8['currentUserId'] = var31;
            var8['message'] = var5;
            var8['application'] = var2;
            var8['isEmbeddedApplication'] = var22;
            var8['isFrameApplication'] = var19;
            var8['isGameLaunchable'] = var17;
            var8 = var9.bind(var16)(var8);
            var22 = var8.canJoin;
            var26 = var8.remoteJoinPlatform;
            var9 = _closure1_slot18;
            var16 = var4 == var3;
            var8 = undefined;
            if(var16) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var16 = var3.party;
            var19 = var4 == var16;
            var8 = undefined;
            if(var19) { _fun0003_ip = 61; continue _fun0003 }
case 63:
            var8 = var16.id;
case 61:
            var16 = var9.bind(var12)(var8);
            if(var16) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var9 = var2.id;
            var8 = _closure1_slot5;
            var8 = var8.id;
            var16 = var9 === var8;
case 64:
            var8 = var4 == var3;
            var24 = undefined;
            if(var8) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var8 = var3.timestamps;
            var9 = var4 == var8;
            var24 = undefined;
            if(var9) { _fun0003_ip = 66; continue _fun0003 }
case 68:
            var24 = var8.start;
case 66:
            if(!(var4 == var24)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var9 = var4 == var3;
            var8 = undefined;
            if(var9) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var8 = var3.created_at;
case 71:
            var24 = var8;
case 69:
            var8 = var4 == var3;
            var23 = undefined;
            if(var8) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var8 = var3.timestamps;
            var9 = var4 == var8;
            var23 = undefined;
            if(var9) { _fun0003_ip = 73; continue _fun0003 }
case 75:
            var23 = var8.end;
case 73:
            var8 = var4 != var24;
            var27 = '';
            var29 = var27;
            if(!var8) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var9 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 27;
            var8 = var19[var8];
            var19 = var9.bind(var12)(var8);
            var9 = var19.formatActiveTimestamp;
            var8 = {};
            var8['start'] = var24;
            var8['end'] = var23;
            var23 = var7.Date;
            var7 = var23.now;
            var7 = var7.bind(var23)();
            var29 = var9.bind(var19)(var8, var7);
case 76:
            var7 = var2.icon;
            var7 = var4 != var7;
            var9 = null;
            if(!var7) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var8 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 28;
            var7 = var19[var7];
            var24 = var8.bind(var12)(var7);
            var23 = var24.getAppIconSrc;
            var19 = var2.id;
            var8 = var2.icon;
            var7 = var2.bot;
            var9 = var23.bind(var24)(var19, var8, var7);
case 78:
            var8 = var2.name;
            if(var16) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            if(var18) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var7 = var15.map;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getUser;
                    var1 = arg1;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var7)) { _fun0005_ip = 34; continue _fun0005 }
case 24:
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
case 34:
                    var2 = global;
                    var3 = var2.String;
                    var4 = var1 == var7;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 84; continue _fun0005 }
case 85:
                    var6 = var7.getAvatarURL;
                    var4 = _closure2_slot0;
                    var5 = var4.guild_id;
                    var4 = 64;
                    var1 = var6.bind(var7)(var5, var4);
case 84:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var15)(var6);
            var19 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var21];
            var23 = var19.bind(var12)(var6);
            var19 = var23.getPartyText;
            var6 = {};
            var6['maxPartySize'] = var13;
            var24 = var15.length;
            var6['partySize'] = var24;
            var25 = var5.activity;
            var30 = var4 == var25;
            var24 = undefined;
            if(var30) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var24 = var25.type;
case 86:
            var6['activityActionType'] = var24;
            var6 = var19.bind(var23)(var6);
            var19 = {};
            var19['canJoin'] = var22;
            var19['remoteJoinPlatform'] = var26;
            var19['canSendInvite'] = var11;
            var19['isInParty'] = var10;
            var10 = var5.author;
            var10 = var10.id;
            var19['messageAuthorId'] = var10;
            var19['currentUserId'] = var31;
            var11 = var19.canJoin;
            var23 = var19.remoteJoinPlatform;
            var24 = var19.canSendInvite;
            var10 = var19.isInParty;
            var22 = var19.currentUserId;
            var19 = var19.messageAuthorId;
            if(var11) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var11 = {};
            if(var24) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            if(var10) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var11['label'] = var12;
            var10 = false;
            var11['disabled'] = var10;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var10 = 16;
            var24 = var32[var10];
            var24 = var30.bind(var12)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var10 = var32[var10];
            var10 = var30.bind(var12)(var10);
            var10 = var10.t;
            var10 = var10.OAB5TE;
            var10 = var24.bind(var25)(var10);
            var11['footerLabel'] = var10;
            var10 = var11;
            _fun0003_ip = 94; continue _fun0003;
case 92:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 16;
            var25 = var33[var24];
            var25 = var32.bind(var12)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var33[var24];
            var24 = var32.bind(var12)(var24);
            var24 = var24.t;
            var24 = var24.KC26NT;
            var24 = var25.bind(var30)(var24);
            var11['label'] = var24;
            var24 = true;
            var11['disabled'] = var24;
            var11['footerLabel'] = var12;
            var10 = var11;
case 94:
            _fun0003_ip = 95; continue _fun0003;
case 90:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 16;
            var25 = var33[var24];
            var25 = var32.bind(var12)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var33[var24];
            var24 = var32.bind(var12)(var24);
            var24 = var24.t;
            var24 = var24.hC/Ze3;
            var24 = var25.bind(var30)(var24);
            var11['label'] = var24;
            var19 = var19 === var22;
            var11['disabled'] = var19;
            var11['footerLabel'] = var12;
            var10 = var11;
case 95:
            _fun0003_ip = 96; continue _fun0003;
case 88:
            var11 = var4 != var23;
            var19 = undefined;
            if(!var11) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var11 = 15;
            var11 = var24[var11];
            var22 = var22.bind(var12)(var11);
            var11 = var22.getRemoteJoinFooterLabel;
            var19 = var11.bind(var22)(var23);
case 97:
            var11 = {};
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 16;
            var23 = var30[var22];
            var23 = var25.bind(var12)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var30[var22];
            var22 = var25.bind(var12)(var22);
            var22 = var22.t;
            var22 = var22.VJlc0d;
            var22 = var23.bind(var24)(var22);
            var11['label'] = var22;
            var22 = false;
            var11['disabled'] = var22;
            var11['footerLabel'] = var19;
            var10 = var11;
case 96:
            var24 = var10.label;
            var11 = var10.disabled;
            var25 = !var11;
            var22 = var10.footerLabel;
            var23 = var4 != var3;
            if(!var23) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            var10 = var3.application_id;
            var23 = var4 != var10;
case 99:
            if(!var23) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var30 = _closure1_slot13;
            var19 = var30.getState;
            var11 = var3.application_id;
            var10 = _closure1_slot15;
            var10 = var10.JOIN;
            var11 = var19.bind(var30)(var11, var10);
            var10 = _closure1_slot14;
            var10 = var10.LOADING;
            var23 = var11 === var10;
case 101:
            var11 = var7;
            var10 = var6;
            var7 = var29;
            var19 = var9;
            var6 = var8;
            _fun0003_ip = 103; continue _fun0003;
case 82:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var21 = var34[var21];
            var30 = var33.bind(var12)(var21);
            var21 = var30.getDeadGameInviteText;
            var45 = var30;
            var44 = var5;
            var43 = var2;
            var42 = var14;
            var41 = var31;
            var7 = var45[var21](var44, var43, var42, var41, var40);
            var30 = 16;
            var31 = var34[var30];
            var31 = var33.bind(var12)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var34[var30];
            var30 = var33.bind(var12)(var30);
            var30 = var30.t;
            var30 = var30.pwEQoq;
            var22 = var31.bind(var32)(var30);
            var25 = false;
            var24 = undefined;
            var23 = false;
            var11 = null;
            var10 = var27;
            var19 = var9;
            var6 = var8;
            _fun0003_ip = 103; continue _fun0003;
case 80:
            if(!(var4 != var3)) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var8 = var3.details;
            if(!(var4 != var8)) { _fun0003_ip = 104; continue _fun0003 }
case 106:
            var8 = var3.state;
            if(!(var4 == var8)) { _fun0003_ip = 107; continue _fun0003 }
case 104:
            var8 = var2.name;
            _fun0003_ip = 108; continue _fun0003;
case 107:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var21 = 16;
            var31 = var33[var21];
            var31 = var30.bind(var12)(var31);
            var32 = var31.intl;
            var31 = var32.formatToPlainString;
            var21 = var33[var21];
            var21 = var30.bind(var12)(var21);
            var21 = var21.t;
            var30 = var21.JCvHt7;
            var21 = {};
            var33 = var3.details;
            var21['track'] = var33;
            var33 = var3.state;
            var21['artist'] = var33;
            var32 = var31.bind(var32)(var30, var21);
            var31 = var32.replace;
            var30 = '\n';
            var21 = ' ';
            var8 = var31.bind(var32)(var30, var21);
case 108:
            var33 = _closure1_slot0;
            var21 = _closure1_slot2;
            var32 = 16;
            var30 = var21[var32];
            var30 = var33.bind(var12)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var21 = var21[var32];
            var21 = var33.bind(var12)(var21);
            var21 = var21.t;
            var21 = var21.sTo7s7;
            var30 = var30.bind(var31)(var21);
            if(var18) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var31 = _closure1_slot1;
            var33 = _closure1_slot2;
            var21 = 29;
            var21 = var33[var21];
            var31 = var31.bind(var12)(var21);
            var21 = var2.id;
            var31 = var31.bind(var12)(var3, var21);
            var33 = var4 != var31;
            var21 = undefined;
            if(!var33) { _fun0003_ip = 111; continue _fun0003 }
case 112:
            var21 = var31;
case 111:
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
            if(var37) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var34 = var35.party;
case 113:
            var34 = var4 != var34;
            if(!var34) { _fun0003_ip = 115; continue _fun0003 }
case 116:
            var39 = var4 == var3;
            var37 = undefined;
            if(var39) { _fun0003_ip = 117; continue _fun0003 }
case 118:
            var39 = var3.party;
            var40 = var4 == var39;
            var37 = undefined;
            if(var40) { _fun0003_ip = 117; continue _fun0003 }
case 119:
            var37 = var39.id;
case 117:
            var35 = var35.party;
            var35 = var35.id;
            var34 = var37 === var35;
case 115:
            var37 = var4 == var38;
            var35 = undefined;
            if(var37) { _fun0003_ip = 120; continue _fun0003 }
case 121:
            var35 = var38.userId;
case 120:
            var35 = var4 != var35;
            if(!var35) { _fun0003_ip = 122; continue _fun0003 }
case 123:
            var39 = var4 == var38;
            var37 = undefined;
            if(var39) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var37 = var38.userId;
case 124:
            var36 = var36.id;
            var35 = var37 === var36;
case 122:
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
            if(var31) { _fun0003_ip = 126; continue _fun0003 }
case 127:
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
            _fun0003_ip = 128; continue _fun0003;
case 126:
            var31 = var35;
            if(var35) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var31 = var34;
case 129:
            var36 = var37;
            if(!var31) { _fun0003_ip = 128; continue _fun0003 }
case 131:
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
case 128:
            var31 = {};
            var31['label'] = var36;
            if(var33) { _fun0003_ip = 132; continue _fun0003 }
case 133:
            var33 = var35;
case 132:
            if(var33) { _fun0003_ip = 134; continue _fun0003 }
case 135:
            var33 = var34;
case 134:
            var31['disabled'] = var33;
            var24 = var31.label;
            var31 = var31.disabled;
            var25 = !var31;
            var23 = false;
            var22 = var30;
            var11 = null;
            var10 = var27;
            var7 = var29;
            var19 = var21;
            var6 = var8;
            _fun0003_ip = 103; continue _fun0003;
case 109:
            var31 = _closure1_slot0;
            var8 = _closure1_slot2;
            var21 = var8[var32];
            var21 = var31.bind(var12)(var21);
            var29 = var21.intl;
            var21 = var29.string;
            var8 = var8[var32];
            var8 = var31.bind(var12)(var8);
            var8 = var8.t;
            var8 = var8.84qx9v;
            var7 = var21.bind(var29)(var8);
            var6 = var2.name;
            var25 = false;
            var24 = undefined;
            var22 = var30;
            var23 = false;
            var11 = null;
            var10 = var27;
            var19 = var9;
case 103:
            var8 = new Array(0);
            if(!(var4 == var26)) { _fun0003_ip = 136; continue _fun0003 }
case 137:
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var9 = 30;
            var9 = var27[var9];
            var27 = var21.bind(var12)(var9);
            var21 = var27.getJoinFromSupportedPlatformsIconKeys;
            var9 = {};
            var30 = var4 == var3;
            var29 = undefined;
            if(var30) { _fun0003_ip = 138; continue _fun0003 }
case 139:
            var29 = var3.supported_platforms;
case 138:
            var9['platforms'] = var29;
            var9['currentPlatform'] = var28;
            var9 = var21.bind(var27)(var9);
            _fun0003_ip = 140; continue _fun0003;
case 136:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 30;
            var21 = var28[var21];
            var21 = var27.bind(var12)(var21);
            var21 = var21.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var26 = var21[var26];
            var9 = var8;
            if(!(var4 != var26)) { _fun0003_ip = 140; continue _fun0003 }
case 141:
            var21 = var8.push;
            var21 = var21.bind(var8)(var26);
            var9 = var8;
case 140:
            var8 = var4 != var19;
            var26 = undefined;
            if(!var8) { _fun0003_ip = 142; continue _fun0003 }
case 143:
            var26 = var19;
case 142:
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var8 = 28;
            var8 = var27[var8];
            var21 = var21.bind(var12)(var8);
            var8 = var21.getAppGradientColors;
            var21 = var8.bind(var21)(var26);
            var26 = var4 == var3;
            var8 = undefined;
            if(var26) { _fun0003_ip = 144; continue _fun0003 }
case 145:
            var26 = var3.assets;
            var27 = var4 == var26;
            var8 = undefined;
            if(var27) { _fun0003_ip = 144; continue _fun0003 }
case 146:
            var8 = var26.invite_cover_image;
case 144:
            var26 = var4 != var8;
            var8 = null;
            if(!var26) { _fun0003_ip = 147; continue _fun0003 }
case 148:
            var27 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 31;
            var26 = var31[var26];
            var29 = var27.bind(var12)(var26);
            var28 = var29.getAssetImage;
            var27 = var3.application_id;
            var3 = var3.assets;
            var26 = var3.invite_cover_image;
            var30 = _closure1_slot1;
            var3 = 32;
            var3 = var31[var3];
            var3 = var30.bind(var12)(var3);
            var30 = var3.bind(var12)();
            var3 = 600;
            var3 = var3 * var30;
            var8 = var28.bind(var29)(var27, var26, var3);
case 147:
            var3 = {};
            var3['ctaButtonEnabled'] = var25;
            var3['ctaButtonText'] = var24;
            var3['ctaButtonIsLoading'] = var23;
            var3['footerLabel'] = var22;
            var3['gradientColors'] = var21;
            var3['headerText'] = var20;
            var3['iconSrc'] = var19;
            var18 = !var18;
            var3['isActive'] = var18;
            var3['isPlatformSupported'] = var17;
            var3['isSpotifyParty'] = var16;
            var16 = 0;
            if(!(!(var13 > var16))) { _fun0003_ip = 149; continue _fun0003 }
case 150:
            var13 = var15.length;
case 149:
            var3['maxPartySize'] = var13;
            var3['partyMemberAvatarURIs'] = var11;
            var3['partySizeText'] = var10;
            var3['platformIconKeys'] = var9;
            var3['coverImageUrl'] = var8;
            var3['subtitle'] = var7;
            var3['title'] = var6;
            return var3;
case 39:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0003_ip = 151; continue _fun0003 }
case 152:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 28;
            var3 = var8[var3];
            var10 = var6.bind(var12)(var3);
            var9 = var10.getAppIconSrc;
            var8 = var2.id;
            var6 = var2.icon;
            var3 = var2.bot;
            var7 = var9.bind(var10)(var8, var6, var3);
case 151:
            var3 = var4 != var7;
            var8 = undefined;
            if(!var3) { _fun0003_ip = 153; continue _fun0003 }
case 154:
            var8 = var7;
case 153:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 28;
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
            var1 = 19;
            var1 = var13[var1];
            var3 = var11.bind(var12)(var1);
            var1 = var2.id;
            var6 = var3.bind(var12)(var6, var5, var1);
            var1 = 18;
            var1 = var13[var1];
            var10 = var9.bind(var12)(var1);
            var3 = var10.getRequestToStreamText;
            var1 = var15.getId;
            var1 = var1.bind(var15)();
            var3 = var3.bind(var10)(var5, var14, var1);
            var1 = 33;
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
            var8 = 34;
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
            var5 = new Array(0);
            var1['platformIconKeys'] = var5;
            var1['coverImageUrl'] = var4;
            var1['subtitle'] = var3;
            var2 = var2.name;
            var1['title'] = var2;
            return var1;
        }
    };
    var3['createActivityRichPresenceInviteEmbed'] = var2;
    return var1;
})();