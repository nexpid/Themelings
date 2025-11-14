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
            var2 = 14;
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
    var _closure1_slot21 = var1;
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
            var8 = _closure1_slot11;
            var5 = var8.findActivity;
            var2 = var1.author;
            var3 = var2.id;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot18;
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
            var3 = _closure1_slot16;
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
            var3 = _closure1_slot16;
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
            var3 = _closure1_slot11;
            var2 = var3.getApplicationActivity;
            var1 = var1.application;
            var1 = var1.id;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionStates;
    var _closure1_slot15 = var7;
    var7 = var4.ActivityActionTypes;
    var _closure1_slot16 = var7;
    var7 = var4.ActivityGamePlatforms;
    var _closure1_slot17 = var7;
    var4 = var4.ActivityTypes;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isSpotifyParty;
    var _closure1_slot19 = var7;
    var4 = var4.SPOTIFY_PLATFORM_NAME;
    var _closure1_slot20 = var4;
    var4 = 38;
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
            var2 = 18;
            var2 = var7[var2];
            var12 = undefined;
            var3 = var3.bind(var12)(var2);
            var2 = var3.getApplicationFromMessage;
            var2 = var2.bind(var3)(var5);
            var7 = _closure1_slot21;
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
                        var1 = 15;
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
                    var2 = _closure1_slot21;
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
            var37 = var3.bind(var7)();
            var3 = _closure1_slot22;
            var28 = var3.bind(var12)(var5, var14, var37);
            if(!(var4 == var2)) { _fun0003_ip = 37; continue _fun0003 }
case 23:
            var3 = undefined;
            return var3;
case 37:
            var3 = var5.activity;
            var8 = var4 == var3;
            var7 = undefined;
            if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 38:
            var7 = var3.type;
case 18:
            var3 = _closure1_slot16;
            var3 = var3.STREAM_REQUEST;
            if(!(var7 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 19;
            var7 = var3[var7];
            var8 = var8.bind(var12)(var7);
            var7 = var2.id;
            var7 = var8.bind(var12)(var28, var5, var7);
            var19 = !var7;
            var7 = _closure1_slot0;
            var8 = 20;
            var8 = var3[var8];
            var9 = var7.bind(var12)(var8);
            var8 = var9.getIsAskToJoin;
            var10 = var8.bind(var9)(var5);
            var33 = 21;
            var3 = var3[var33];
            var9 = var7.bind(var12)(var3);
            var8 = var9.getHeaderText;
            var7 = var2.name;
            var11 = var5.activity;
            var13 = var4 == var11;
            var3 = undefined;
            if(var13) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var3 = var11.type;
case 41:
            var21 = var8.bind(var9)(var7, var3, var19);
            if(!(var4 != var28)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var3 = var28.party;
            if(!(var4 != var3)) { _fun0003_ip = 43; continue _fun0003 }
case 45:
            var3 = global;
            var8 = var3.Array;
            var7 = var8.from;
            var11 = _closure1_slot8;
            var9 = var11.getParty;
            var3 = var28.party;
            var3 = var3.id;
            var3 = var9.bind(var11)(var3);
            if(!(var4 == var3)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var3 = new Array(0);
case 46:
            var16 = var7.bind(var8)(var3);
            _fun0003_ip = 48; continue _fun0003;
case 43:
            var16 = new Array(0);
case 48:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 22;
            var8 = var3[var8];
            var9 = var7.bind(var12)(var8);
            var8 = var9.getPartySize;
            var8 = var8.bind(var9)(var28);
            var15 = var8.maxPartySize;
            var8 = 23;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isAndroid;
            var3 = var3.bind(var7)();
            var29 = undefined;
            if(!var3) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var3 = _closure1_slot17;
            var29 = var3.ANDROID;
            _fun0003_ip = 51; continue _fun0003;
case 49:
            var3 = _closure1_slot17;
            var29 = var3.IOS;
case 51:
            var8 = _closure1_slot9;
            var7 = var8.getApplicationActivity;
            var3 = var2.id;
            var7 = var7.bind(var8)(var3);
            if(!(var4 == var7)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var11 = _closure1_slot12;
            var9 = var11.getApplicationActivity;
            var8 = var2.id;
            var3 = true;
            var7 = var9.bind(var11)(var8, var3);
case 53:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 24;
            var3 = var9[var3];
            var11 = var8.bind(var12)(var3);
            var3 = var11.getIsInParty;
            var11 = var3.bind(var11)(var7, var28);
            var3 = 25;
            var3 = var9[var3];
            var8 = var8.bind(var12)(var3);
            var3 = var8.getCanSendInvite;
            var47 = var8;
            var46 = var28;
            var45 = var5;
            var44 = var2;
            var43 = var37;
            var13 = var47[var3](var46, var45, var44, var43, var42);
            var3 = global;
            var9 = var3.Set;
            var8 = var4 == var28;
            var22 = var7;
            var7 = undefined;
            if(var8) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var7 = var28.supported_platforms;
case 55:
            if(!(var4 == var7)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var7 = new Array(0);
case 57:
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var47 = var8;
            var46 = var7;
            var7 = new var47[var9](var46, var45);
            var8 = var7 instanceof Object ? var7 : var8;
            var18 = var4 != var29;
            if(!var18) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var7 = var8.has;
            var18 = var7.bind(var8)(var29);
case 59:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 26;
            var7 = var9[var7];
            var17 = var8.bind(var12)(var7);
            var7 = var17.canLaunchFrame;
            var17 = var7.bind(var17)(var2);
            var7 = 27;
            var7 = var9[var7];
            var20 = var8.bind(var12)(var7);
            var7 = var20.isEmbeddedApp;
            var20 = var7.bind(var20)(var2);
            var7 = 28;
            var7 = var9[var7];
            var9 = var8.bind(var12)(var7);
            var8 = var9.getCanJoin;
            var7 = {};
            var7['presenceActivity'] = var28;
            var7['currentUserPresenceActivity'] = var22;
            var7['currentUserId'] = var37;
            var7['message'] = var5;
            var7['application'] = var2;
            var7['isEmbeddedApplication'] = var20;
            var7['isFrameApplication'] = var17;
            var7['isGameLaunchable'] = var18;
            var7 = var8.bind(var9)(var7);
            var20 = var7.canJoin;
            var22 = var7.remoteJoinPlatform;
            var8 = _closure1_slot19;
            var9 = var4 == var28;
            var7 = undefined;
            if(var9) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var9 = var28.party;
            var17 = var4 == var9;
            var7 = undefined;
            if(var17) { _fun0003_ip = 61; continue _fun0003 }
case 63:
            var7 = var9.id;
case 61:
            var17 = var8.bind(var12)(var7);
            if(var17) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var8 = var2.id;
            var7 = _closure1_slot5;
            var7 = var7.id;
            var17 = var8 === var7;
case 64:
            var7 = var4 == var28;
            var24 = undefined;
            if(var7) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var7 = var28.timestamps;
            var8 = var4 == var7;
            var24 = undefined;
            if(var8) { _fun0003_ip = 66; continue _fun0003 }
case 68:
            var24 = var7.start;
case 66:
            if(!(var4 == var24)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var8 = var4 == var28;
            var7 = undefined;
            if(var8) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var7 = var28.created_at;
case 71:
            var24 = var7;
case 69:
            var7 = var4 == var28;
            var23 = undefined;
            if(var7) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var7 = var28.timestamps;
            var8 = var4 == var7;
            var23 = undefined;
            if(var8) { _fun0003_ip = 73; continue _fun0003 }
case 75:
            var23 = var7.end;
case 73:
            var7 = var4 != var24;
            var27 = '';
            var30 = var27;
            if(!var7) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 29;
            var7 = var9[var7];
            var9 = var8.bind(var12)(var7);
            var8 = var9.formatActiveTimestamp;
            var7 = {};
            var7['start'] = var24;
            var7['end'] = var23;
            var23 = var3.Date;
            var3 = var23.now;
            var3 = var3.bind(var23)();
            var30 = var8.bind(var9)(var7, var3);
case 76:
            var3 = var2.icon;
            var3 = var4 != var3;
            var9 = null;
            if(!var3) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 30;
            var3 = var8[var3];
            var24 = var7.bind(var12)(var3);
            var23 = var24.getAppIconSrc;
            var8 = var2.id;
            var7 = var2.icon;
            var3 = var2.bot;
            var9 = var23.bind(var24)(var8, var7, var3);
case 78:
            var3 = var2.name;
            if(var17) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            if(var19) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var7 = var16.map;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot13;
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
            var7 = var7.bind(var16)(var6);
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var33];
            var23 = var8.bind(var12)(var6);
            var8 = var23.getPartyText;
            var6 = {};
            var6['maxPartySize'] = var15;
            var24 = var16.length;
            var6['partySize'] = var24;
            var25 = var5.activity;
            var26 = var4 == var25;
            var24 = undefined;
            if(var26) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var24 = var25.type;
case 86:
            var6['activityActionType'] = var24;
            var6 = var8.bind(var23)(var6);
            var8 = {};
            var8['canJoin'] = var20;
            var8['remoteJoinPlatform'] = var22;
            var8['canSendInvite'] = var13;
            var8['isInParty'] = var11;
            var8['message'] = var5;
            var8['currentUserId'] = var37;
            var8['application'] = var2;
            var8['isAskToJoin'] = var10;
            var10 = var8.canJoin;
            var20 = var8.remoteJoinPlatform;
            var24 = var8.canSendInvite;
            var23 = var8.isInParty;
            var13 = var8.currentUserId;
            var11 = var8.message;
            var31 = var8.application;
            var8 = var8.isAskToJoin;
            if(var10) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var10 = {};
            if(var24) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            if(var23) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var10['label'] = var12;
            var23 = false;
            var10['disabled'] = var23;
            var24 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 17;
            var25 = var32[var23];
            var25 = var24.bind(var12)(var25);
            var26 = var25.intl;
            if(var8) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var25 = var26.string;
            var8 = var32[var23];
            var8 = var24.bind(var12)(var8);
            var8 = var8.t;
            var8 = var8.OAB5TK;
            var8 = var25.bind(var26)(var8);
            var10['footerLabel'] = var8;
            var8 = var10;
            _fun0003_ip = 96; continue _fun0003;
case 94:
            var25 = var26.formatToPlainString;
            var23 = var32[var23];
            var23 = var24.bind(var12)(var23);
            var23 = var23.t;
            var24 = var23.gYVkSW;
            var23 = {};
            var32 = var11.author;
            var32 = var32.globalName;
            var23['username'] = var32;
            var31 = var31.name;
            var23['appName'] = var31;
            var23 = var25.bind(var26)(var24, var23);
            var10['footerLabel'] = var23;
            var8 = var10;
case 96:
            _fun0003_ip = 97; continue _fun0003;
case 92:
            var26 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 17;
            var24 = var31[var23];
            var24 = var26.bind(var12)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var31[var23];
            var23 = var26.bind(var12)(var23);
            var23 = var23.t;
            var23 = var23.KC26NR;
            var23 = var24.bind(var25)(var23);
            var10['label'] = var23;
            var23 = true;
            var10['disabled'] = var23;
            var10['footerLabel'] = var12;
            var8 = var10;
case 97:
            _fun0003_ip = 98; continue _fun0003;
case 90:
            var26 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 17;
            var24 = var31[var23];
            var24 = var26.bind(var12)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var31[var23];
            var23 = var26.bind(var12)(var23);
            var23 = var23.t;
            var23 = var23.hC/Zey;
            var23 = var24.bind(var25)(var23);
            var10['label'] = var23;
            var11 = var11.author;
            var11 = var11.id;
            var11 = var11 === var13;
            var10['disabled'] = var11;
            var10['footerLabel'] = var12;
            var8 = var10;
case 98:
            _fun0003_ip = 99; continue _fun0003;
case 88:
            var10 = var4 != var20;
            var11 = undefined;
            if(!var10) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            var13 = _closure1_slot0;
            var23 = _closure1_slot2;
            var10 = 16;
            var10 = var23[var10];
            var13 = var13.bind(var12)(var10);
            var10 = var13.getRemoteJoinFooterLabel;
            var11 = var10.bind(var13)(var20);
case 100:
            var10 = {};
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 17;
            var20 = var25[var13];
            var20 = var24.bind(var12)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var13 = var25[var13];
            var13 = var24.bind(var12)(var13);
            var13 = var13.t;
            var13 = var13.VJlc0S;
            var13 = var20.bind(var23)(var13);
            var10['label'] = var13;
            var13 = false;
            var10['disabled'] = var13;
            var10['footerLabel'] = var11;
            var8 = var10;
case 99:
            var25 = var8.label;
            var10 = var8.disabled;
            var26 = !var10;
            var23 = var8.footerLabel;
            var24 = var4 != var28;
            if(!var24) { _fun0003_ip = 102; continue _fun0003 }
case 103:
            var8 = var28.application_id;
            var24 = var4 != var8;
case 102:
            if(!var24) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var13 = _closure1_slot14;
            var11 = var13.getState;
            var10 = var28.application_id;
            var8 = _closure1_slot16;
            var8 = var8.JOIN;
            var10 = var11.bind(var13)(var10, var8);
            var8 = _closure1_slot15;
            var8 = var8.LOADING;
            var24 = var10 === var8;
case 104:
            var13 = var7;
            var11 = var6;
            var8 = var30;
            var6 = undefined;
            var20 = var9;
            var7 = var3;
            _fun0003_ip = 106; continue _fun0003;
case 82:
            var10 = var2.deepLinkUri;
            var31 = var4 != var10;
            var32 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var33];
            var33 = var32.bind(var12)(var10);
            var32 = var33.getDeadGameInviteText;
            var45 = var2.name;
            var47 = var33;
            var46 = var5;
            var44 = var14;
            var43 = var37;
            var42 = var31;
            var10 = var47[var32](var46, var45, var44, var43, var42, var41);
            if(var31) { _fun0003_ip = 107; continue _fun0003 }
case 108:
            var31 = var5.activity;
            var32 = var4 == var31;
            var33 = undefined;
            if(var32) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var33 = var31.type;
case 109:
            var31 = _closure1_slot16;
            var31 = var31.JOIN_REQUEST;
            var32 = undefined;
            if(!(var33 !== var31)) { _fun0003_ip = 111; continue _fun0003 }
case 112:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var31 = 17;
            var33 = var36[var31];
            var33 = var35.bind(var12)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var31 = var36[var31];
            var31 = var35.bind(var12)(var31);
            var31 = var31.t;
            var31 = var31.pwEQoi;
            var32 = var33.bind(var34)(var31);
case 111:
            var26 = false;
            var23 = var32;
            var25 = undefined;
            var24 = false;
            var13 = null;
            var11 = var27;
            var8 = var10;
            var6 = undefined;
            var20 = var9;
            var7 = var3;
            _fun0003_ip = 106; continue _fun0003;
case 107:
            var33 = _closure1_slot10;
            var32 = var33.getMessages;
            var31 = var14.id;
            var45 = var32.bind(var33)(var31);
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var31 = 32;
            var31 = var33[var31];
            var34 = var32.bind(var12)(var31);
            var33 = var34.isMostRecentDeadEndInvite;
            var46 = var5.id;
            var44 = var2.id;
            var47 = var34;
            var43 = var28;
            var31 = var47[var33](var46, var45, var44, var43, var42);
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            if(var31) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var31 = 33;
            var31 = var35[var31];
            var32 = var34.bind(var12)(var31);
            var31 = var32.getMessageAuthorWithProcessedColor;
            var32 = var31.bind(var32)(var5);
            var31 = var32.nick;
            var32 = var32.colorString;
            var36 = {};
            var36['username'] = var31;
            var31 = {};
            var33 = 'bindUserMenu';
            var31['action'] = var33;
            var33 = var5.author;
            var33 = var33.id;
            var31['userId'] = var33;
            var31['linkColor'] = var32;
            var32 = var5.channel_id;
            var31['messageChannelId'] = var32;
            var32 = true;
            var31['medium'] = var32;
            var36['usernameOnClick'] = var31;
            var31 = var2.name;
            var36['applicationName'] = var31;
            var39 = 17;
            var31 = var35[var39];
            var31 = var34.bind(var12)(var31);
            var33 = var31.intl;
            var32 = var33.formatToParts;
            var31 = var5.author;
            var31 = var31.id;
            if(!(var31 !== var37)) { _fun0003_ip = 115; continue _fun0003 }
case 116:
            var37 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var39];
            var31 = var37.bind(var12)(var31);
            var31 = var31.t;
            var31 = var31.hL+n2b;
            _fun0003_ip = 117; continue _fun0003;
case 115:
            var38 = _closure1_slot0;
            var37 = _closure1_slot2;
            var37 = var37[var39];
            var37 = var38.bind(var12)(var37);
            var37 = var37.t;
            var31 = var37.Nq4yCj;
case 117:
            var6 = var32.bind(var33)(var31, var36);
            var26 = false;
            var25 = undefined;
            var23 = undefined;
            var24 = false;
            var13 = null;
            var11 = var27;
            var8 = var10;
            var20 = var9;
            var7 = var3;
            _fun0003_ip = 106; continue _fun0003;
case 113:
            var31 = 17;
            var32 = var35[var31];
            var32 = var34.bind(var12)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var35[var31];
            var31 = var34.bind(var12)(var31);
            var31 = var31.t;
            var31 = var31.s+J8Dl;
            var25 = var32.bind(var33)(var31);
            var26 = true;
            var24 = false;
            var23 = undefined;
            var13 = null;
            var11 = var27;
            var8 = var10;
            var6 = undefined;
            var20 = var9;
            var7 = var3;
            _fun0003_ip = 106; continue _fun0003;
case 80:
            if(!(var4 != var28)) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var3 = var28.details;
            if(!(var4 != var3)) { _fun0003_ip = 118; continue _fun0003 }
case 120:
            var3 = var28.state;
            if(!(var4 == var3)) { _fun0003_ip = 121; continue _fun0003 }
case 118:
            var3 = var2.name;
            _fun0003_ip = 122; continue _fun0003;
case 121:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var10 = 17;
            var32 = var34[var10];
            var32 = var31.bind(var12)(var32);
            var33 = var32.intl;
            var32 = var33.formatToPlainString;
            var10 = var34[var10];
            var10 = var31.bind(var12)(var10);
            var10 = var10.t;
            var31 = var10.JCvHtx;
            var10 = {};
            var34 = var28.details;
            var10['track'] = var34;
            var34 = var28.state;
            var10['artist'] = var34;
            var33 = var32.bind(var33)(var31, var10);
            var32 = var33.replace;
            var31 = '\n';
            var10 = ' ';
            var3 = var32.bind(var33)(var31, var10);
case 122:
            var34 = _closure1_slot0;
            var10 = _closure1_slot2;
            var33 = 17;
            var31 = var10[var33];
            var31 = var34.bind(var12)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var10 = var10[var33];
            var10 = var34.bind(var12)(var10);
            var10 = var10.t;
            var10 = var10.sTo7s3;
            var31 = var31.bind(var32)(var10);
            if(var19) { _fun0003_ip = 123; continue _fun0003 }
case 124:
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var10 = 31;
            var10 = var34[var10];
            var32 = var32.bind(var12)(var10);
            var10 = var2.id;
            var32 = var32.bind(var12)(var28, var10);
            var34 = var4 != var32;
            var10 = undefined;
            if(!var34) { _fun0003_ip = 125; continue _fun0003 }
case 126:
            var10 = var32;
case 125:
            var37 = var5.author;
            var35 = _closure1_slot4;
            var32 = var35.hasConnectedAccount;
            var32 = var32.bind(var35)();
            var34 = var35.getSyncingWith;
            var39 = var34.bind(var35)();
            var34 = var35.getActivity;
            var36 = var34.bind(var35)();
            var35 = var37.id;
            var38 = _closure1_slot7;
            var34 = var38.getId;
            var34 = var34.bind(var38)();
            var34 = var35 === var34;
            var38 = var4 == var36;
            var35 = undefined;
            if(var38) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var35 = var36.party;
case 127:
            var35 = var4 != var35;
            if(!var35) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var40 = var4 == var28;
            var38 = undefined;
            if(var40) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var40 = var28.party;
            var41 = var4 == var40;
            var38 = undefined;
            if(var41) { _fun0003_ip = 131; continue _fun0003 }
case 133:
            var38 = var40.id;
case 131:
            var36 = var36.party;
            var36 = var36.id;
            var35 = var38 === var36;
case 129:
            var38 = var4 == var39;
            var36 = undefined;
            if(var38) { _fun0003_ip = 134; continue _fun0003 }
case 135:
            var36 = var39.userId;
case 134:
            var36 = var4 != var36;
            if(!var36) { _fun0003_ip = 136; continue _fun0003 }
case 137:
            var40 = var4 == var39;
            var38 = undefined;
            if(var40) { _fun0003_ip = 138; continue _fun0003 }
case 139:
            var38 = var39.userId;
case 138:
            var37 = var37.id;
            var36 = var38 === var37;
case 136:
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var38 = var37[var33];
            var38 = var40.bind(var12)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var37[var33];
            var37 = var40.bind(var12)(var37);
            var37 = var37.t;
            var37 = var37.VJlc0S;
            var38 = var38.bind(var39)(var37);
            if(var32) { _fun0003_ip = 140; continue _fun0003 }
case 141:
            var37 = _closure1_slot0;
            var32 = _closure1_slot2;
            var39 = var32[var33];
            var39 = var37.bind(var12)(var39);
            var40 = var39.intl;
            var39 = var40.formatToPlainString;
            var32 = var32[var33];
            var32 = var37.bind(var12)(var32);
            var32 = var32.t;
            var37 = var32.XWSHTb;
            var32 = {};
            var41 = _closure1_slot20;
            var32['platform'] = var41;
            var37 = var39.bind(var40)(var37, var32);
            _fun0003_ip = 142; continue _fun0003;
case 140:
            var32 = var36;
            if(var36) { _fun0003_ip = 143; continue _fun0003 }
case 144:
            var32 = var35;
case 143:
            var37 = var38;
            if(!var32) { _fun0003_ip = 142; continue _fun0003 }
case 145:
            var40 = _closure1_slot0;
            var32 = _closure1_slot2;
            var38 = var32[var33];
            var38 = var40.bind(var12)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var32 = var32[var33];
            var32 = var40.bind(var12)(var32);
            var32 = var32.t;
            var32 = var32.KC26NR;
            var37 = var38.bind(var39)(var32);
case 142:
            var32 = {};
            var32['label'] = var37;
            if(var34) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var34 = var36;
case 146:
            if(var34) { _fun0003_ip = 148; continue _fun0003 }
case 149:
            var34 = var35;
case 148:
            var32['disabled'] = var34;
            var25 = var32.label;
            var32 = var32.disabled;
            var26 = !var32;
            var24 = false;
            var23 = var31;
            var13 = null;
            var11 = var27;
            var8 = var30;
            var6 = undefined;
            var20 = var10;
            var7 = var3;
            _fun0003_ip = 106; continue _fun0003;
case 123:
            var32 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = var3[var33];
            var10 = var32.bind(var12)(var10);
            var30 = var10.intl;
            var10 = var30.string;
            var3 = var3[var33];
            var3 = var32.bind(var12)(var3);
            var3 = var3.t;
            var3 = var3.84qx9r;
            var8 = var10.bind(var30)(var3);
            var7 = var2.name;
            var26 = false;
            var25 = undefined;
            var23 = var31;
            var24 = false;
            var13 = null;
            var11 = var27;
            var6 = undefined;
            var20 = var9;
case 106:
            var3 = new Array(0);
            if(!(var4 == var22)) { _fun0003_ip = 150; continue _fun0003 }
case 151:
            var10 = _closure1_slot0;
            var27 = _closure1_slot2;
            var9 = 34;
            var9 = var27[var9];
            var27 = var10.bind(var12)(var9);
            var10 = var27.getJoinFromSupportedPlatformsIconKeys;
            var9 = {};
            var31 = var4 == var28;
            var30 = undefined;
            if(var31) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var30 = var28.supported_platforms;
case 152:
            var9['platforms'] = var30;
            var9['currentPlatform'] = var29;
            var10 = var10.bind(var27)(var9);
            _fun0003_ip = 154; continue _fun0003;
case 150:
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var9 = 34;
            var9 = var29[var9];
            var9 = var27.bind(var12)(var9);
            var9 = var9.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var22 = var9[var22];
            var10 = var3;
            if(!(var4 != var22)) { _fun0003_ip = 154; continue _fun0003 }
case 155:
            var9 = var3.push;
            var9 = var9.bind(var3)(var22);
            var10 = var3;
case 154:
            var3 = var4 != var20;
            var29 = undefined;
            if(!var3) { _fun0003_ip = 156; continue _fun0003 }
case 157:
            var29 = var20;
case 156:
            var9 = _closure1_slot0;
            var27 = _closure1_slot2;
            var3 = 30;
            var3 = var27[var3];
            var22 = var9.bind(var12)(var3);
            var3 = var22.getAppGradientColors;
            var22 = var3.bind(var22)(var29);
            var3 = 35;
            var3 = var27[var3];
            var27 = var9.bind(var12)(var3);
            var9 = var27.getPresenceActivityInviteCoverImageURL;
            var3 = {};
            var29 = var5.id;
            var3['messageId'] = var29;
            var3['presenceActivity'] = var28;
            var3['application'] = var2;
            var9 = var9.bind(var27)(var3);
            var3 = {};
            var3['ctaButtonEnabled'] = var26;
            var3['ctaButtonText'] = var25;
            var3['ctaButtonIsLoading'] = var24;
            var3['footerLabel'] = var23;
            var3['gradientColors'] = var22;
            var3['headerText'] = var21;
            var3['iconSrc'] = var20;
            var19 = !var19;
            var3['isActive'] = var19;
            var3['isPlatformSupported'] = var18;
            var3['isSpotifyParty'] = var17;
            var17 = 0;
            if(!(!(var15 > var17))) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var15 = var16.length;
case 158:
            var3['maxPartySize'] = var15;
            var3['partyMemberAvatarURIs'] = var13;
            var3['partySizeText'] = var11;
            var3['platformIconKeys'] = var10;
            var3['coverImageUrl'] = var9;
            var3['subtitle'] = var8;
            var3['title'] = var7;
            var3['hiddenEmbedMessageContent'] = var6;
            return var3;
case 39:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0003_ip = 160; continue _fun0003 }
case 161:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 30;
            var3 = var8[var3];
            var10 = var6.bind(var12)(var3);
            var9 = var10.getAppIconSrc;
            var8 = var2.id;
            var6 = var2.icon;
            var3 = var2.bot;
            var7 = var9.bind(var10)(var8, var6, var3);
case 160:
            var3 = var4 != var7;
            var8 = undefined;
            if(!var3) { _fun0003_ip = 162; continue _fun0003 }
case 163:
            var8 = var7;
case 162:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 30;
            var3 = var13[var3];
            var6 = var9.bind(var12)(var3);
            var3 = var6.getAppGradientColors;
            var8 = var3.bind(var6)(var8);
            var6 = _closure1_slot22;
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
            var1 = 21;
            var1 = var13[var1];
            var10 = var9.bind(var12)(var1);
            var3 = var10.getRequestToStreamText;
            var1 = var15.getId;
            var1 = var1.bind(var15)();
            var3 = var3.bind(var10)(var5, var14, var1);
            var1 = 36;
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
            var8 = 17;
            var8 = var13[var8];
            var8 = var9.bind(var12)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = 37;
            var8 = var13[var8];
            var8 = var11.bind(var12)(var8);
            var8 = var8.nAyuPp;
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