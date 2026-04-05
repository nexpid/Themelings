// app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getPresenceActivity(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = arg2;
            var7 = arg3;
            var2 = var1.application;
            var4 = null;
            if(!(var4 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
case 2:
            var2 = var1.author;
            var5 = var2.id;
            var2 = var1.activity;
            var3 = var4 == var2;
            var9 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var2.type;
case 4:
            var3 = _closure1_slot16;
            var3 = var3.JOIN_REQUEST;
            if(!(var9 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1.activity;
            var4 = var4 == var3;
            var8 = undefined;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var3.type;
case 8:
            var3 = _closure1_slot16;
            var3 = var3.STREAM_REQUEST;
            var4 = var5;
            if(!(var8 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 6:
            var3 = var7;
            if(!(var5 === var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var6.isPrivate;
            var5 = var5.bind(var6)();
            var3 = var7;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var5 = var6.getRecipientId;
            var3 = var5.bind(var6)();
case 12:
            var4 = var3;
case 10:
            var3 = _closure1_slot11;
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
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var14 = arg2;
            var _closure2_slot0 = var14;
            var1 = var5.author;
            var4 = null;
            if(!(var4 != var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = var5.activity;
            if(!(var4 != var1)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            if(!(var4 != var14)) { _fun0002_ip = 15; continue _fun0002 }
case 18:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var12 = undefined;
            var3 = var3.bind(var12)(var2);
            var2 = var3.getApplicationFromMessage;
            var2 = var2.bind(var3)(var5);
            var3 = var5.application;
            var7 = var4 == var3;
            var10 = undefined;
            if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var10 = var3.id;
case 19:
            var7 = var4 != var10;
            var3 = null;
            if(!var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = _closure1_slot3;
            var7 = var8.getApplication;
            var3 = var7.bind(var8)(var10);
case 21:
            var7 = var4 == var3;
            if(!var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var7 = var4 != var10;
case 23:
            if(!var7) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = _closure1_slot3;
            var8 = var9.isFetchingApplication;
            var9 = var8.bind(var9)(var10);
            var8 = false;
            var7 = var8 === var9;
case 25:
            if(!var7) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 14;
            var7 = var9[var7];
            var9 = var8.bind(var12)(var7);
            var8 = var9.fetchApplication;
            var7 = false;
            var7 = var8.bind(var9)(var10, var7);
case 27:
            if(!(var4 != var3)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = var3;
case 29:
            var7 = _closure1_slot7;
            var3 = var7.getId;
            var38 = var3.bind(var7)();
            var3 = _closure1_slot21;
            var29 = var3.bind(var12)(var5, var14, var38);
            if(!(var4 == var2)) { _fun0002_ip = 31; continue _fun0002 }
case 15:
            var3 = undefined;
            return var3;
case 31:
            var3 = var5.activity;
            var8 = var4 == var3;
            var7 = undefined;
            if(var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var7 = var3.type;
case 32:
            var3 = _closure1_slot16;
            var3 = var3.STREAM_REQUEST;
            if(!(var7 !== var3)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 18;
            var3 = var8[var3];
            var7 = var7.bind(var12)(var3);
            var3 = var2.id;
            var3 = var7.bind(var12)(var29, var5, var3);
            var20 = !var3;
            var7 = _closure1_slot0;
            var3 = 19;
            var3 = var8[var3];
            var7 = var7.bind(var12)(var3);
            var3 = var7.getIsAskToJoin;
            var11 = var3.bind(var7)(var5);
            var7 = var5.activity;
            var8 = var4 == var7;
            var3 = undefined;
            if(var8) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var3 = var7.name_override;
case 36:
            if(!(var4 == var3)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var3 = var2.name;
case 38:
            var8 = var5.activity;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var7 = var8.icon_override;
case 40:
            var7 = var4 != var7;
            var10 = null;
            if(!var7) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 20;
            var7 = var9[var7];
            var13 = var8.bind(var12)(var7);
            var9 = var13.getAssetImage;
            var8 = var2.id;
            var7 = var5.activity;
            var7 = var7.icon_override;
            var10 = var9.bind(var13)(var8, var7);
case 42:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var34 = 21;
            var7 = var7[var34];
            var9 = var8.bind(var12)(var7);
            var8 = var9.getHeaderText;
            var13 = var5.activity;
            var15 = var4 == var13;
            var7 = undefined;
            if(var15) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var7 = var13.type;
case 44:
            var22 = var8.bind(var9)(var3, var7, var20);
            if(!(var4 != var29)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var7 = var29.party;
            if(!(var4 != var7)) { _fun0002_ip = 46; continue _fun0002 }
case 48:
            var7 = global;
            var9 = var7.Array;
            var8 = var9.from;
            var15 = _closure1_slot8;
            var13 = var15.getParty;
            var7 = var29.party;
            var7 = var7.id;
            var7 = var13.bind(var15)(var7);
            if(!(var4 == var7)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var7 = new Array(0);
case 49:
            var17 = var8.bind(var9)(var7);
            _fun0002_ip = 51; continue _fun0002;
case 46:
            var17 = new Array(0);
case 51:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 22;
            var9 = var7[var9];
            var13 = var8.bind(var12)(var9);
            var9 = var13.getPartySize;
            var9 = var9.bind(var13)(var29);
            var16 = var9.maxPartySize;
            var9 = 23;
            var7 = var7[var9];
            var8 = var8.bind(var12)(var7);
            var7 = var8.isIOS;
            var7 = var7.bind(var8)();
            if(var7) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var8 = var8.bind(var12)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            var30 = undefined;
            if(!var7) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var7 = _closure1_slot17;
            var30 = var7.ANDROID;
            _fun0002_ip = 54; continue _fun0002;
case 52:
            var7 = _closure1_slot17;
            var30 = var7.IOS;
case 54:
            var9 = _closure1_slot9;
            var8 = var9.getApplicationActivity;
            var7 = var2.id;
            var8 = var8.bind(var9)(var7);
            if(!(var4 == var8)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var15 = _closure1_slot12;
            var13 = var15.getApplicationActivity;
            var9 = var2.id;
            var7 = true;
            var8 = var13.bind(var15)(var9, var7);
case 56:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 24;
            var7 = var15[var7];
            var13 = var9.bind(var12)(var7);
            var7 = var13.getIsInParty;
            var13 = var7.bind(var13)(var8, var29);
            var7 = 25;
            var7 = var15[var7];
            var9 = var9.bind(var12)(var7);
            var7 = var9.getCanSendInvite;
            var48 = var9;
            var47 = var29;
            var46 = var5;
            var45 = var2;
            var44 = var38;
            var15 = var48[var7](var47, var46, var45, var44, var43);
            var7 = global;
            var18 = var7.Set;
            var9 = var4 == var29;
            var24 = var8;
            var8 = undefined;
            if(var9) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var8 = var29.supported_platforms;
case 58:
            if(!(var4 == var8)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var8 = new Array(0);
case 60:
            var9 = var18.prototype;
            var9 = Object.create(var9, {constructor: {value: var18}});
            var48 = var9;
            var47 = var8;
            var8 = new var48[var18](var47, var46);
            var9 = var8 instanceof Object ? var8 : var9;
            var19 = var4 != var30;
            if(!var19) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var8 = var9.has;
            var19 = var8.bind(var9)(var30);
case 62:
            var9 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 26;
            var8 = var18[var8];
            var21 = var9.bind(var12)(var8);
            var8 = var21.canLaunchFrame;
            var21 = var8.bind(var21)(var2);
            var8 = 27;
            var8 = var18[var8];
            var23 = var9.bind(var12)(var8);
            var8 = var23.isEmbeddedApp;
            var23 = var8.bind(var23)(var2);
            var8 = 28;
            var8 = var18[var8];
            var18 = var9.bind(var12)(var8);
            var9 = var18.getCanJoin;
            var8 = {};
            var8['presenceActivity'] = var29;
            var8['currentUserPresenceActivity'] = var24;
            var8['currentUserId'] = var38;
            var8['message'] = var5;
            var8['application'] = var2;
            var8['isEmbeddedApplication'] = var23;
            var8['isFrameApplication'] = var21;
            var8['isGameLaunchable'] = var19;
            var8 = var9.bind(var18)(var8);
            var21 = var8.canJoin;
            var23 = var8.remoteJoinPlatform;
            var9 = _closure1_slot19;
            var18 = var4 == var29;
            var8 = undefined;
            if(var18) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var18 = var29.party;
            var24 = var4 == var18;
            var8 = undefined;
            if(var24) { _fun0002_ip = 64; continue _fun0002 }
case 66:
            var8 = var18.id;
case 64:
            var18 = var9.bind(var12)(var8);
            if(var18) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var9 = var2.id;
            var8 = _closure1_slot5;
            var8 = var8.id;
            var18 = var9 === var8;
case 67:
            var8 = var4 == var29;
            var26 = undefined;
            if(var8) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var8 = var29.timestamps;
            var9 = var4 == var8;
            var26 = undefined;
            if(var9) { _fun0002_ip = 69; continue _fun0002 }
case 71:
            var26 = var8.start;
case 69:
            if(!(var4 == var26)) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var9 = var4 == var29;
            var8 = undefined;
            if(var9) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var8 = var29.created_at;
case 74:
            var26 = var8;
case 72:
            var8 = var4 == var29;
            var25 = undefined;
            if(var8) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var8 = var29.timestamps;
            var9 = var4 == var8;
            var25 = undefined;
            if(var9) { _fun0002_ip = 76; continue _fun0002 }
case 78:
            var25 = var8.end;
case 76:
            var8 = var4 != var26;
            var28 = '';
            var31 = var28;
            if(!var8) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var9 = _closure1_slot0;
            var24 = _closure1_slot2;
            var8 = 29;
            var8 = var24[var8];
            var24 = var9.bind(var12)(var8);
            var9 = var24.formatActiveTimestamp;
            var8 = {};
            var8['start'] = var26;
            var8['end'] = var25;
            var25 = var7.Date;
            var7 = var25.now;
            var7 = var7.bind(var25)();
            var31 = var9.bind(var24)(var8, var7);
case 79:
            if(!(var4 == var10)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var7 = var2.icon;
            var8 = var4 != var7;
            var7 = null;
            if(!var8) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var9 = _closure1_slot0;
            var24 = _closure1_slot2;
            var8 = 30;
            var8 = var24[var8];
            var26 = var9.bind(var12)(var8);
            var25 = var26.getAppIconSrc;
            var24 = var2.id;
            var9 = var2.icon;
            var8 = var2.bot;
            var7 = var25.bind(var26)(var24, var9, var8);
case 83:
            var10 = var7;
case 81:
            if(var18) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            if(var20) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var7 = var17.map;
            var6 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = var4.getUser;
                    var1 = arg1;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var7)) { _fun0003_ip = 89; continue _fun0003 }
case 16:
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
case 89:
                    var2 = global;
                    var3 = var2.String;
                    var4 = var1 == var7;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 90; continue _fun0003 }
case 91:
                    var6 = var7.getAvatarURL;
                    var4 = _closure2_slot0;
                    var5 = var4.guild_id;
                    var4 = 64;
                    var1 = var6.bind(var7)(var5, var4);
case 90:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var17)(var6);
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var34];
            var9 = var8.bind(var12)(var6);
            var8 = var9.getPartyText;
            var6 = {};
            var6['maxPartySize'] = var16;
            var24 = var17.length;
            var6['partySize'] = var24;
            var25 = var5.activity;
            var26 = var4 == var25;
            var24 = undefined;
            if(var26) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            var24 = var25.type;
case 92:
            var6['activityActionType'] = var24;
            var6 = var8.bind(var9)(var6);
            var9 = var4 == var29;
            var8 = undefined;
            if(var9) { _fun0002_ip = 94; continue _fun0002 }
case 95:
            var8 = var29.details;
case 94:
            var24 = var4 != var8;
            if(!var24) { _fun0002_ip = 96; continue _fun0002 }
case 97:
            var24 = var28 !== var8;
case 96:
            var9 = null;
            if(!var24) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var9 = var8;
case 98:
            var8 = {};
            var8['canJoin'] = var21;
            var8['remoteJoinPlatform'] = var23;
            var8['canSendInvite'] = var15;
            var8['isInParty'] = var13;
            var8['message'] = var5;
            var8['currentUserId'] = var38;
            var8['applicationName'] = var3;
            var8['isAskToJoin'] = var11;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 34;
            var11 = var15[var11];
            var21 = var13.bind(var12)(var11);
            var11 = var21.getSupportsRemoteJoin;
            var11 = var11.bind(var21)(var29);
            var8['supportsRemoteJoin'] = var11;
            var11 = 35;
            var11 = var15[var11];
            var13 = var13.bind(var12)(var11);
            var11 = var13.getShouldShowAppAuthPrompt;
            var11 = var11.bind(var13)(var2);
            var8['canPromptAuth'] = var11;
            var27 = var8.canJoin;
            var21 = var8.remoteJoinPlatform;
            var26 = var8.canSendInvite;
            var25 = var8.isInParty;
            var15 = var8.currentUserId;
            var13 = var8.message;
            var32 = var8.applicationName;
            var24 = var8.isAskToJoin;
            var11 = var8.supportsRemoteJoin;
            var8 = var8.canPromptAuth;
            if(var27) { _fun0002_ip = 100; continue _fun0002 }
case 101:
            if(var26) { _fun0002_ip = 102; continue _fun0002 }
case 103:
            if(var25) { _fun0002_ip = 104; continue _fun0002 }
case 105:
            if(var24) { _fun0002_ip = 106; continue _fun0002 }
case 107:
            if(!var11) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            if(var8) { _fun0002_ip = 110; continue _fun0002 }
case 108:
            var8 = {};
            var8['label'] = var12;
            var11 = false;
            var8['disabled'] = var11;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var11 = 16;
            var24 = var27[var11];
            var24 = var26.bind(var12)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var11 = var27[var11];
            var11 = var26.bind(var12)(var11);
            var11 = var11.t;
            var11 = var11.OAB5TK;
            var11 = var24.bind(var25)(var11);
            var8['footerLabel'] = var11;
            _fun0002_ip = 111; continue _fun0002;
case 110:
            var11 = {};
            var27 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 16;
            var25 = var33[var24];
            var25 = var27.bind(var12)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var33[var24];
            var24 = var27.bind(var12)(var24);
            var24 = var24.t;
            var24 = var24.lw71Nf;
            var24 = var25.bind(var26)(var24);
            var11['label'] = var24;
            var24 = false;
            var11['disabled'] = var24;
            var11['footerLabel'] = var12;
            var8 = var11;
case 111:
            _fun0002_ip = 112; continue _fun0002;
case 106:
            var11 = {};
            var11['label'] = var12;
            var24 = false;
            var11['disabled'] = var24;
            var25 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 16;
            var26 = var33[var24];
            var26 = var25.bind(var12)(var26);
            var27 = var26.intl;
            var26 = var27.formatToPlainString;
            var24 = var33[var24];
            var24 = var25.bind(var12)(var24);
            var24 = var24.t;
            var25 = var24.gYVkSW;
            var24 = {};
            var33 = var13.author;
            var33 = var33.globalName;
            var24['username'] = var33;
            var24['appName'] = var32;
            var24 = var26.bind(var27)(var25, var24);
            var11['footerLabel'] = var24;
            var8 = var11;
case 112:
            _fun0002_ip = 113; continue _fun0002;
case 104:
            var11 = {};
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = 16;
            var25 = var32[var24];
            var25 = var27.bind(var12)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var32[var24];
            var24 = var27.bind(var12)(var24);
            var24 = var24.t;
            var24 = var24.KC26NR;
            var24 = var25.bind(var26)(var24);
            var11['label'] = var24;
            var24 = true;
            var11['disabled'] = var24;
            var11['footerLabel'] = var12;
            var8 = var11;
case 113:
            _fun0002_ip = 114; continue _fun0002;
case 102:
            var11 = {};
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = 16;
            var25 = var32[var24];
            var25 = var27.bind(var12)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var32[var24];
            var24 = var27.bind(var12)(var24);
            var24 = var24.t;
            var24 = var24.hC/Zey;
            var24 = var25.bind(var26)(var24);
            var11['label'] = var24;
            var13 = var13.author;
            var13 = var13.id;
            var13 = var13 === var15;
            var11['disabled'] = var13;
            var11['footerLabel'] = var12;
            var8 = var11;
case 114:
            _fun0002_ip = 115; continue _fun0002;
case 100:
            var11 = var4 != var21;
            var13 = undefined;
            if(!var11) { _fun0002_ip = 116; continue _fun0002 }
case 117:
            var15 = _closure1_slot0;
            var24 = _closure1_slot2;
            var11 = 15;
            var11 = var24[var11];
            var15 = var15.bind(var12)(var11);
            var11 = var15.getRemoteJoinFooterLabel;
            var13 = var11.bind(var15)(var21);
case 116:
            var11 = {};
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 16;
            var21 = var26[var15];
            var21 = var25.bind(var12)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var15 = var26[var15];
            var15 = var25.bind(var12)(var15);
            var15 = var15.t;
            var15 = var15.VJlc0S;
            var15 = var21.bind(var24)(var15);
            var11['label'] = var15;
            var15 = false;
            var11['disabled'] = var15;
            var11['footerLabel'] = var13;
            var8 = var11;
case 115:
            var26 = var8.label;
            var11 = var8.disabled;
            var27 = !var11;
            var24 = var8.footerLabel;
            var25 = var4 != var29;
            if(!var25) { _fun0002_ip = 118; continue _fun0002 }
case 119:
            var8 = var29.application_id;
            var25 = var4 != var8;
case 118:
            if(!var25) { _fun0002_ip = 120; continue _fun0002 }
case 121:
            var15 = _closure1_slot14;
            var13 = var15.getState;
            var11 = var29.application_id;
            var8 = _closure1_slot16;
            var8 = var8.JOIN;
            var11 = var13.bind(var15)(var11, var8);
            var8 = _closure1_slot15;
            var8 = var8.LOADING;
            var25 = var11 === var8;
case 120:
            var15 = var7;
            var13 = var6;
            var8 = var31;
            var6 = undefined;
            var21 = var10;
            var7 = var3;
            _fun0002_ip = 122; continue _fun0002;
case 87:
            var11 = var2.deepLinkUri;
            var32 = var4 != var11;
            var33 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var34];
            var33 = var33.bind(var12)(var11);
            var11 = var33.getDeadGameInviteText;
            var48 = var33;
            var47 = var5;
            var46 = var3;
            var45 = var14;
            var44 = var38;
            var43 = var32;
            var11 = var48[var11](var47, var46, var45, var44, var43, var42);
            if(var32) { _fun0002_ip = 123; continue _fun0002 }
case 124:
            var32 = var5.activity;
            var33 = var4 == var32;
            var34 = undefined;
            if(var33) { _fun0002_ip = 125; continue _fun0002 }
case 126:
            var34 = var32.type;
case 125:
            var32 = _closure1_slot16;
            var32 = var32.JOIN_REQUEST;
            var33 = undefined;
            if(!(var34 !== var32)) { _fun0002_ip = 127; continue _fun0002 }
case 128:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var32 = 16;
            var34 = var37[var32];
            var34 = var36.bind(var12)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var32 = var37[var32];
            var32 = var36.bind(var12)(var32);
            var32 = var32.t;
            var32 = var32.pwEQoi;
            var33 = var34.bind(var35)(var32);
case 127:
            var27 = false;
            var24 = var33;
            var26 = undefined;
            var25 = false;
            var15 = null;
            var13 = var28;
            var9 = null;
            var8 = var11;
            var6 = undefined;
            var21 = var10;
            var7 = var3;
            _fun0002_ip = 122; continue _fun0002;
case 123:
            var34 = _closure1_slot10;
            var33 = var34.getMessages;
            var32 = var14.id;
            var46 = var33.bind(var34)(var32);
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var32 = 32;
            var32 = var34[var32];
            var35 = var33.bind(var12)(var32);
            var34 = var35.isMostRecentDeadEndInvite;
            var47 = var5.id;
            var45 = var2.id;
            var48 = var35;
            var44 = var29;
            var32 = var48[var34](var47, var46, var45, var44, var43);
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            if(var32) { _fun0002_ip = 129; continue _fun0002 }
case 130:
            var32 = 33;
            var32 = var36[var32];
            var33 = var35.bind(var12)(var32);
            var32 = var33.getMessageAuthorWithProcessedColor;
            var33 = var32.bind(var33)(var5);
            var32 = var33.nick;
            var33 = var33.colorString;
            var37 = {};
            var37['username'] = var32;
            var32 = {};
            var34 = 'bindUserMenu';
            var32['action'] = var34;
            var34 = var5.author;
            var34 = var34.id;
            var32['userId'] = var34;
            var32['linkColor'] = var33;
            var33 = var5.channel_id;
            var32['messageChannelId'] = var33;
            var33 = true;
            var32['medium'] = var33;
            var37['usernameOnClick'] = var32;
            var37['applicationName'] = var3;
            var40 = 16;
            var32 = var36[var40];
            var32 = var35.bind(var12)(var32);
            var34 = var32.intl;
            var33 = var34.formatToParts;
            var32 = var5.author;
            var32 = var32.id;
            if(!(var32 !== var38)) { _fun0002_ip = 131; continue _fun0002 }
case 132:
            var38 = _closure1_slot0;
            var32 = _closure1_slot2;
            var32 = var32[var40];
            var32 = var38.bind(var12)(var32);
            var32 = var32.t;
            var32 = var32.hL+n2b;
            _fun0002_ip = 133; continue _fun0002;
case 131:
            var39 = _closure1_slot0;
            var38 = _closure1_slot2;
            var38 = var38[var40];
            var38 = var39.bind(var12)(var38);
            var38 = var38.t;
            var32 = var38.Nq4yCj;
case 133:
            var6 = var33.bind(var34)(var32, var37);
            var27 = false;
            var26 = undefined;
            var24 = undefined;
            var25 = false;
            var15 = null;
            var13 = var28;
            var9 = null;
            var8 = var11;
            var21 = var10;
            var7 = var3;
            _fun0002_ip = 122; continue _fun0002;
case 129:
            var32 = 16;
            var33 = var36[var32];
            var33 = var35.bind(var12)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var36[var32];
            var32 = var35.bind(var12)(var32);
            var32 = var32.t;
            var32 = var32.s+J8Dl;
            var26 = var33.bind(var34)(var32);
            var27 = true;
            var25 = false;
            var24 = undefined;
            var15 = null;
            var13 = var28;
            var9 = null;
            var8 = var11;
            var6 = undefined;
            var21 = var10;
            var7 = var3;
            _fun0002_ip = 122; continue _fun0002;
case 85:
            if(!(var4 != var29)) { _fun0002_ip = 134; continue _fun0002 }
case 135:
            var3 = var29.details;
            if(!(var4 != var3)) { _fun0002_ip = 134; continue _fun0002 }
case 136:
            var3 = var29.state;
            if(!(var4 == var3)) { _fun0002_ip = 137; continue _fun0002 }
case 134:
            var3 = var2.name;
            _fun0002_ip = 138; continue _fun0002;
case 137:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var11 = 16;
            var33 = var35[var11];
            var33 = var32.bind(var12)(var33);
            var34 = var33.intl;
            var33 = var34.formatToPlainString;
            var11 = var35[var11];
            var11 = var32.bind(var12)(var11);
            var11 = var11.t;
            var32 = var11.JCvHtx;
            var11 = {};
            var35 = var29.details;
            var11['track'] = var35;
            var35 = var29.state;
            var11['artist'] = var35;
            var34 = var33.bind(var34)(var32, var11);
            var33 = var34.replace;
            var32 = '\n';
            var11 = ' ';
            var3 = var33.bind(var34)(var32, var11);
case 138:
            var35 = _closure1_slot0;
            var11 = _closure1_slot2;
            var34 = 16;
            var32 = var11[var34];
            var32 = var35.bind(var12)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var11 = var11[var34];
            var11 = var35.bind(var12)(var11);
            var11 = var11.t;
            var11 = var11.sTo7s3;
            var32 = var32.bind(var33)(var11);
            if(var20) { _fun0002_ip = 139; continue _fun0002 }
case 140:
            var33 = _closure1_slot1;
            var35 = _closure1_slot2;
            var11 = 31;
            var11 = var35[var11];
            var33 = var33.bind(var12)(var11);
            var11 = var2.id;
            var33 = var33.bind(var12)(var29, var11);
            var35 = var4 != var33;
            var11 = undefined;
            if(!var35) { _fun0002_ip = 141; continue _fun0002 }
case 142:
            var11 = var33;
case 141:
            var38 = var5.author;
            var36 = _closure1_slot4;
            var33 = var36.hasConnectedAccount;
            var33 = var33.bind(var36)();
            var35 = var36.getSyncingWith;
            var40 = var35.bind(var36)();
            var35 = var36.getActivity;
            var37 = var35.bind(var36)();
            var36 = var38.id;
            var39 = _closure1_slot7;
            var35 = var39.getId;
            var35 = var35.bind(var39)();
            var35 = var36 === var35;
            var39 = var4 == var37;
            var36 = undefined;
            if(var39) { _fun0002_ip = 143; continue _fun0002 }
case 144:
            var36 = var37.party;
case 143:
            var36 = var4 != var36;
            if(!var36) { _fun0002_ip = 145; continue _fun0002 }
case 146:
            var41 = var4 == var29;
            var39 = undefined;
            if(var41) { _fun0002_ip = 147; continue _fun0002 }
case 148:
            var41 = var29.party;
            var42 = var4 == var41;
            var39 = undefined;
            if(var42) { _fun0002_ip = 147; continue _fun0002 }
case 149:
            var39 = var41.id;
case 147:
            var37 = var37.party;
            var37 = var37.id;
            var36 = var39 === var37;
case 145:
            var39 = var4 == var40;
            var37 = undefined;
            if(var39) { _fun0002_ip = 150; continue _fun0002 }
case 151:
            var37 = var40.userId;
case 150:
            var37 = var4 != var37;
            if(!var37) { _fun0002_ip = 152; continue _fun0002 }
case 153:
            var41 = var4 == var40;
            var39 = undefined;
            if(var41) { _fun0002_ip = 154; continue _fun0002 }
case 155:
            var39 = var40.userId;
case 154:
            var38 = var38.id;
            var37 = var39 === var38;
case 152:
            var41 = _closure1_slot0;
            var38 = _closure1_slot2;
            var39 = var38[var34];
            var39 = var41.bind(var12)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var38 = var38[var34];
            var38 = var41.bind(var12)(var38);
            var38 = var38.t;
            var38 = var38.VJlc0S;
            var39 = var39.bind(var40)(var38);
            if(var33) { _fun0002_ip = 156; continue _fun0002 }
case 157:
            var38 = _closure1_slot0;
            var33 = _closure1_slot2;
            var40 = var33[var34];
            var40 = var38.bind(var12)(var40);
            var41 = var40.intl;
            var40 = var41.formatToPlainString;
            var33 = var33[var34];
            var33 = var38.bind(var12)(var33);
            var33 = var33.t;
            var38 = var33.XWSHTb;
            var33 = {};
            var42 = _closure1_slot20;
            var33['platform'] = var42;
            var38 = var40.bind(var41)(var38, var33);
            _fun0002_ip = 158; continue _fun0002;
case 156:
            var33 = var37;
            if(var37) { _fun0002_ip = 159; continue _fun0002 }
case 160:
            var33 = var36;
case 159:
            var38 = var39;
            if(!var33) { _fun0002_ip = 158; continue _fun0002 }
case 161:
            var41 = _closure1_slot0;
            var33 = _closure1_slot2;
            var39 = var33[var34];
            var39 = var41.bind(var12)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var33 = var33[var34];
            var33 = var41.bind(var12)(var33);
            var33 = var33.t;
            var33 = var33.KC26NR;
            var38 = var39.bind(var40)(var33);
case 158:
            var33 = {};
            var33['label'] = var38;
            if(var35) { _fun0002_ip = 162; continue _fun0002 }
case 163:
            var35 = var37;
case 162:
            if(var35) { _fun0002_ip = 164; continue _fun0002 }
case 165:
            var35 = var36;
case 164:
            var33['disabled'] = var35;
            var26 = var33.label;
            var33 = var33.disabled;
            var27 = !var33;
            var25 = false;
            var24 = var32;
            var15 = null;
            var13 = var28;
            var9 = null;
            var8 = var31;
            var6 = undefined;
            var21 = var11;
            var7 = var3;
            _fun0002_ip = 122; continue _fun0002;
case 139:
            var33 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = var3[var34];
            var11 = var33.bind(var12)(var11);
            var31 = var11.intl;
            var11 = var31.string;
            var3 = var3[var34];
            var3 = var33.bind(var12)(var3);
            var3 = var3.t;
            var3 = var3["84qx9r"];
            var8 = var11.bind(var31)(var3);
            var7 = var2.name;
            var27 = false;
            var26 = undefined;
            var24 = var32;
            var25 = false;
            var15 = null;
            var13 = var28;
            var9 = null;
            var6 = undefined;
            var21 = var10;
case 122:
            var3 = new Array(0);
            if(!(var4 == var23)) { _fun0002_ip = 166; continue _fun0002 }
case 167:
            var11 = _closure1_slot0;
            var28 = _closure1_slot2;
            var10 = 36;
            var10 = var28[var10];
            var28 = var11.bind(var12)(var10);
            var11 = var28.getJoinFromSupportedPlatformsIconKeys;
            var10 = {};
            var32 = var4 == var29;
            var31 = undefined;
            if(var32) { _fun0002_ip = 168; continue _fun0002 }
case 169:
            var31 = var29.supported_platforms;
case 168:
            var10['platforms'] = var31;
            var10['currentPlatform'] = var30;
            var10['isGameLaunchable'] = var19;
            var11 = var11.bind(var28)(var10);
            _fun0002_ip = 170; continue _fun0002;
case 166:
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var10 = 36;
            var10 = var30[var10];
            var10 = var28.bind(var12)(var10);
            var10 = var10.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var23 = var10[var23];
            var11 = var3;
            if(!(var4 != var23)) { _fun0002_ip = 170; continue _fun0002 }
case 171:
            var10 = var3.push;
            var10 = var10.bind(var3)(var23);
            var11 = var3;
case 170:
            var3 = var4 != var21;
            var30 = undefined;
            if(!var3) { _fun0002_ip = 172; continue _fun0002 }
case 173:
            var30 = var21;
case 172:
            var10 = _closure1_slot0;
            var28 = _closure1_slot2;
            var3 = 30;
            var3 = var28[var3];
            var23 = var10.bind(var12)(var3);
            var3 = var23.getAppGradientColors;
            var23 = var3.bind(var23)(var30);
            var3 = 37;
            var3 = var28[var3];
            var28 = var10.bind(var12)(var3);
            var10 = var28.getPresenceActivityInviteCoverImageURL;
            var3 = {};
            var30 = var5.id;
            var3['messageId'] = var30;
            var3['presenceActivity'] = var29;
            var3['application'] = var2;
            var10 = var10.bind(var28)(var3);
            var3 = {};
            var3['ctaButtonEnabled'] = var27;
            var3['ctaButtonText'] = var26;
            var3['ctaButtonIsLoading'] = var25;
            var3['footerLabel'] = var24;
            var3['gradientColors'] = var23;
            var3['headerText'] = var22;
            var3['iconSrc'] = var21;
            var20 = !var20;
            var3['isActive'] = var20;
            var3['isPlatformSupported'] = var19;
            var3['isSpotifyParty'] = var18;
            var18 = 0;
            if(!(!(var16 > var18))) { _fun0002_ip = 174; continue _fun0002 }
case 175:
            var16 = var17.length;
case 174:
            var3['maxPartySize'] = var16;
            var3['partyMemberAvatarURIs'] = var15;
            var3['partySizeText'] = var13;
            var3['platformIconKeys'] = var11;
            var3['coverImageUrl'] = var10;
            var3['detailsText'] = var9;
            var3['subtitle'] = var8;
            var3['title'] = var7;
            var3['hiddenEmbedMessageContent'] = var6;
            return var3;
case 34:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0002_ip = 176; continue _fun0002 }
case 177:
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
case 176:
            var3 = var4 != var7;
            var8 = undefined;
            if(!var3) { _fun0002_ip = 178; continue _fun0002 }
case 179:
            var8 = var7;
case 178:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 30;
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
            var1 = 18;
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
            var1 = 38;
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
            var8 = 39;
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
            var1['detailsText'] = var4;
            var1['subtitle'] = var3;
            var2 = var2.name;
            var1['title'] = var2;
            return var1;
        }
    };
    var3['createActivityRichPresenceInviteEmbed'] = var2;
    return var1;
})();