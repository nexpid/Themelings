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
    var4 = 38;
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
            var37 = var3.bind(var7)();
            var3 = _closure1_slot21;
            var28 = var3.bind(var12)(var5, var14, var37);
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
            var3 = var7.bind(var12)(var28, var5, var3);
            var19 = !var3;
            var7 = _closure1_slot0;
            var3 = 19;
            var3 = var8[var3];
            var7 = var7.bind(var12)(var3);
            var3 = var7.getIsAskToJoin;
            var10 = var3.bind(var7)(var5);
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
            var9 = null;
            if(!var7) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 20;
            var7 = var11[var7];
            var13 = var8.bind(var12)(var7);
            var11 = var13.getAssetImage;
            var8 = var2.id;
            var7 = var5.activity;
            var7 = var7.icon_override;
            var9 = var11.bind(var13)(var8, var7);
case 42:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var33 = 21;
            var7 = var7[var33];
            var11 = var8.bind(var12)(var7);
            var8 = var11.getHeaderText;
            var13 = var5.activity;
            var15 = var4 == var13;
            var7 = undefined;
            if(var15) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var7 = var13.type;
case 44:
            var21 = var8.bind(var11)(var3, var7, var19);
            if(!(var4 != var28)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var7 = var28.party;
            if(!(var4 != var7)) { _fun0002_ip = 46; continue _fun0002 }
case 48:
            var7 = global;
            var11 = var7.Array;
            var8 = var11.from;
            var15 = _closure1_slot8;
            var13 = var15.getParty;
            var7 = var28.party;
            var7 = var7.id;
            var7 = var13.bind(var15)(var7);
            if(!(var4 == var7)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var7 = new Array(0);
case 49:
            var16 = var8.bind(var11)(var7);
            _fun0002_ip = 51; continue _fun0002;
case 46:
            var16 = new Array(0);
case 51:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var11 = 22;
            var11 = var7[var11];
            var13 = var8.bind(var12)(var11);
            var11 = var13.getPartySize;
            var11 = var11.bind(var13)(var28);
            var15 = var11.maxPartySize;
            var11 = 23;
            var7 = var7[var11];
            var8 = var8.bind(var12)(var7);
            var7 = var8.isIOS;
            var7 = var7.bind(var8)();
            if(var7) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var8 = var8.bind(var12)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            var29 = undefined;
            if(!var7) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var7 = _closure1_slot17;
            var29 = var7.ANDROID;
            _fun0002_ip = 54; continue _fun0002;
case 52:
            var7 = _closure1_slot17;
            var29 = var7.IOS;
case 54:
            var11 = _closure1_slot9;
            var8 = var11.getApplicationActivity;
            var7 = var2.id;
            var8 = var8.bind(var11)(var7);
            if(!(var4 == var8)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var17 = _closure1_slot12;
            var13 = var17.getApplicationActivity;
            var11 = var2.id;
            var7 = true;
            var8 = var13.bind(var17)(var11, var7);
case 56:
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 24;
            var7 = var17[var7];
            var11 = var13.bind(var12)(var7);
            var7 = var11.getIsInParty;
            var11 = var7.bind(var11)(var8, var28);
            var7 = 25;
            var7 = var17[var7];
            var13 = var13.bind(var12)(var7);
            var7 = var13.getCanSendInvite;
            var47 = var13;
            var46 = var28;
            var45 = var5;
            var44 = var2;
            var43 = var37;
            var13 = var47[var7](var46, var45, var44, var43, var42);
            var7 = global;
            var18 = var7.Set;
            var17 = var4 == var28;
            var24 = var8;
            var8 = undefined;
            if(var17) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var8 = var28.supported_platforms;
case 58:
            if(!(var4 == var8)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var8 = new Array(0);
case 60:
            var17 = var18.prototype;
            var17 = Object.create(var17, {constructor: {value: var18}});
            var47 = var17;
            var46 = var8;
            var8 = new var47[var18](var46, var45);
            var17 = var8 instanceof Object ? var8 : var17;
            var18 = var4 != var29;
            if(!var18) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var8 = var17.has;
            var18 = var8.bind(var17)(var29);
case 62:
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = 26;
            var8 = var20[var8];
            var22 = var17.bind(var12)(var8);
            var8 = var22.canLaunchFrame;
            var22 = var8.bind(var22)(var2);
            var8 = 27;
            var8 = var20[var8];
            var23 = var17.bind(var12)(var8);
            var8 = var23.isEmbeddedApp;
            var23 = var8.bind(var23)(var2);
            var8 = 28;
            var8 = var20[var8];
            var20 = var17.bind(var12)(var8);
            var17 = var20.getCanJoin;
            var8 = {};
            var8['presenceActivity'] = var28;
            var8['currentUserPresenceActivity'] = var24;
            var8['currentUserId'] = var37;
            var8['message'] = var5;
            var8['application'] = var2;
            var8['isEmbeddedApplication'] = var23;
            var8['isFrameApplication'] = var22;
            var8['isGameLaunchable'] = var18;
            var8 = var17.bind(var20)(var8);
            var20 = var8.canJoin;
            var22 = var8.remoteJoinPlatform;
            var17 = _closure1_slot19;
            var23 = var4 == var28;
            var8 = undefined;
            if(var23) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var23 = var28.party;
            var24 = var4 == var23;
            var8 = undefined;
            if(var24) { _fun0002_ip = 64; continue _fun0002 }
case 66:
            var8 = var23.id;
case 64:
            var17 = var17.bind(var12)(var8);
            if(var17) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var23 = var2.id;
            var8 = _closure1_slot5;
            var8 = var8.id;
            var17 = var23 === var8;
case 67:
            var8 = var4 == var28;
            var26 = undefined;
            if(var8) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var8 = var28.timestamps;
            var23 = var4 == var8;
            var26 = undefined;
            if(var23) { _fun0002_ip = 69; continue _fun0002 }
case 71:
            var26 = var8.start;
case 69:
            if(!(var4 == var26)) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var23 = var4 == var28;
            var8 = undefined;
            if(var23) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var8 = var28.created_at;
case 74:
            var26 = var8;
case 72:
            var8 = var4 == var28;
            var25 = undefined;
            if(var8) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var8 = var28.timestamps;
            var23 = var4 == var8;
            var25 = undefined;
            if(var23) { _fun0002_ip = 76; continue _fun0002 }
case 78:
            var25 = var8.end;
case 76:
            var8 = var4 != var26;
            var27 = '';
            var30 = var27;
            if(!var8) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var8 = 29;
            var8 = var24[var8];
            var24 = var23.bind(var12)(var8);
            var23 = var24.formatActiveTimestamp;
            var8 = {};
            var8['start'] = var26;
            var8['end'] = var25;
            var25 = var7.Date;
            var7 = var25.now;
            var7 = var7.bind(var25)();
            var30 = var23.bind(var24)(var8, var7);
case 79:
            if(!(var4 == var9)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var7 = var2.icon;
            var8 = var4 != var7;
            var7 = null;
            if(!var8) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var8 = 30;
            var8 = var24[var8];
            var26 = var23.bind(var12)(var8);
            var25 = var26.getAppIconSrc;
            var24 = var2.id;
            var23 = var2.icon;
            var8 = var2.bot;
            var7 = var25.bind(var26)(var24, var23, var8);
case 83:
            var9 = var7;
case 81:
            if(var17) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            if(var19) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var7 = var16.map;
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
            if(var26) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            var24 = var25.type;
case 92:
            var6['activityActionType'] = var24;
            var6 = var8.bind(var23)(var6);
            var8 = {};
            var8['canJoin'] = var20;
            var8['remoteJoinPlatform'] = var22;
            var8['canSendInvite'] = var13;
            var8['isInParty'] = var11;
            var8['message'] = var5;
            var8['currentUserId'] = var37;
            var8['applicationName'] = var3;
            var8['isAskToJoin'] = var10;
            var10 = var8.canJoin;
            var20 = var8.remoteJoinPlatform;
            var24 = var8.canSendInvite;
            var23 = var8.isInParty;
            var13 = var8.currentUserId;
            var11 = var8.message;
            var31 = var8.applicationName;
            var8 = var8.isAskToJoin;
            if(var10) { _fun0002_ip = 94; continue _fun0002 }
case 95:
            var10 = {};
            if(var24) { _fun0002_ip = 96; continue _fun0002 }
case 97:
            if(var23) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var10['label'] = var12;
            var23 = false;
            var10['disabled'] = var23;
            var24 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 16;
            var25 = var32[var23];
            var25 = var24.bind(var12)(var25);
            var26 = var25.intl;
            if(var8) { _fun0002_ip = 100; continue _fun0002 }
case 101:
            var25 = var26.string;
            var8 = var32[var23];
            var8 = var24.bind(var12)(var8);
            var8 = var8.t;
            var8 = var8.OAB5TK;
            var8 = var25.bind(var26)(var8);
            var10['footerLabel'] = var8;
            var8 = var10;
            _fun0002_ip = 102; continue _fun0002;
case 100:
            var25 = var26.formatToPlainString;
            var23 = var32[var23];
            var23 = var24.bind(var12)(var23);
            var23 = var23.t;
            var24 = var23.gYVkSW;
            var23 = {};
            var32 = var11.author;
            var32 = var32.globalName;
            var23['username'] = var32;
            var23['appName'] = var31;
            var23 = var25.bind(var26)(var24, var23);
            var10['footerLabel'] = var23;
            var8 = var10;
case 102:
            _fun0002_ip = 103; continue _fun0002;
case 98:
            var26 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 16;
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
case 103:
            _fun0002_ip = 104; continue _fun0002;
case 96:
            var26 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 16;
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
case 104:
            _fun0002_ip = 105; continue _fun0002;
case 94:
            var10 = var4 != var20;
            var11 = undefined;
            if(!var10) { _fun0002_ip = 106; continue _fun0002 }
case 107:
            var13 = _closure1_slot0;
            var23 = _closure1_slot2;
            var10 = 15;
            var10 = var23[var10];
            var13 = var13.bind(var12)(var10);
            var10 = var13.getRemoteJoinFooterLabel;
            var11 = var10.bind(var13)(var20);
case 106:
            var10 = {};
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 16;
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
case 105:
            var25 = var8.label;
            var10 = var8.disabled;
            var26 = !var10;
            var23 = var8.footerLabel;
            var24 = var4 != var28;
            if(!var24) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            var8 = var28.application_id;
            var24 = var4 != var8;
case 108:
            if(!var24) { _fun0002_ip = 110; continue _fun0002 }
case 111:
            var13 = _closure1_slot14;
            var11 = var13.getState;
            var10 = var28.application_id;
            var8 = _closure1_slot16;
            var8 = var8.JOIN;
            var10 = var11.bind(var13)(var10, var8);
            var8 = _closure1_slot15;
            var8 = var8.LOADING;
            var24 = var10 === var8;
case 110:
            var13 = var7;
            var11 = var6;
            var8 = var30;
            var6 = undefined;
            var20 = var9;
            var7 = var3;
            _fun0002_ip = 112; continue _fun0002;
case 87:
            var10 = var2.deepLinkUri;
            var31 = var4 != var10;
            var32 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var33];
            var32 = var32.bind(var12)(var10);
            var10 = var32.getDeadGameInviteText;
            var47 = var32;
            var46 = var5;
            var45 = var3;
            var44 = var14;
            var43 = var37;
            var42 = var31;
            var10 = var47[var10](var46, var45, var44, var43, var42, var41);
            if(var31) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var31 = var5.activity;
            var32 = var4 == var31;
            var33 = undefined;
            if(var32) { _fun0002_ip = 115; continue _fun0002 }
case 116:
            var33 = var31.type;
case 115:
            var31 = _closure1_slot16;
            var31 = var31.JOIN_REQUEST;
            var32 = undefined;
            if(!(var33 !== var31)) { _fun0002_ip = 117; continue _fun0002 }
case 118:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var31 = 16;
            var33 = var36[var31];
            var33 = var35.bind(var12)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var31 = var36[var31];
            var31 = var35.bind(var12)(var31);
            var31 = var31.t;
            var31 = var31.pwEQoi;
            var32 = var33.bind(var34)(var31);
case 117:
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
            _fun0002_ip = 112; continue _fun0002;
case 113:
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
            if(var31) { _fun0002_ip = 119; continue _fun0002 }
case 120:
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
            var36['applicationName'] = var3;
            var39 = 16;
            var31 = var35[var39];
            var31 = var34.bind(var12)(var31);
            var33 = var31.intl;
            var32 = var33.formatToParts;
            var31 = var5.author;
            var31 = var31.id;
            if(!(var31 !== var37)) { _fun0002_ip = 121; continue _fun0002 }
case 122:
            var37 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var39];
            var31 = var37.bind(var12)(var31);
            var31 = var31.t;
            var31 = var31.hL+n2b;
            _fun0002_ip = 123; continue _fun0002;
case 121:
            var38 = _closure1_slot0;
            var37 = _closure1_slot2;
            var37 = var37[var39];
            var37 = var38.bind(var12)(var37);
            var37 = var37.t;
            var31 = var37.Nq4yCj;
case 123:
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
            _fun0002_ip = 112; continue _fun0002;
case 119:
            var31 = 16;
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
            _fun0002_ip = 112; continue _fun0002;
case 85:
            if(!(var4 != var28)) { _fun0002_ip = 124; continue _fun0002 }
case 125:
            var3 = var28.details;
            if(!(var4 != var3)) { _fun0002_ip = 124; continue _fun0002 }
case 126:
            var3 = var28.state;
            if(!(var4 == var3)) { _fun0002_ip = 127; continue _fun0002 }
case 124:
            var3 = var2.name;
            _fun0002_ip = 128; continue _fun0002;
case 127:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var10 = 16;
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
case 128:
            var34 = _closure1_slot0;
            var10 = _closure1_slot2;
            var33 = 16;
            var31 = var10[var33];
            var31 = var34.bind(var12)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var10 = var10[var33];
            var10 = var34.bind(var12)(var10);
            var10 = var10.t;
            var10 = var10.sTo7s3;
            var31 = var31.bind(var32)(var10);
            if(var19) { _fun0002_ip = 129; continue _fun0002 }
case 130:
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var10 = 31;
            var10 = var34[var10];
            var32 = var32.bind(var12)(var10);
            var10 = var2.id;
            var32 = var32.bind(var12)(var28, var10);
            var34 = var4 != var32;
            var10 = undefined;
            if(!var34) { _fun0002_ip = 131; continue _fun0002 }
case 132:
            var10 = var32;
case 131:
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
            if(var38) { _fun0002_ip = 133; continue _fun0002 }
case 134:
            var35 = var36.party;
case 133:
            var35 = var4 != var35;
            if(!var35) { _fun0002_ip = 135; continue _fun0002 }
case 136:
            var40 = var4 == var28;
            var38 = undefined;
            if(var40) { _fun0002_ip = 137; continue _fun0002 }
case 138:
            var40 = var28.party;
            var41 = var4 == var40;
            var38 = undefined;
            if(var41) { _fun0002_ip = 137; continue _fun0002 }
case 139:
            var38 = var40.id;
case 137:
            var36 = var36.party;
            var36 = var36.id;
            var35 = var38 === var36;
case 135:
            var38 = var4 == var39;
            var36 = undefined;
            if(var38) { _fun0002_ip = 140; continue _fun0002 }
case 141:
            var36 = var39.userId;
case 140:
            var36 = var4 != var36;
            if(!var36) { _fun0002_ip = 142; continue _fun0002 }
case 143:
            var40 = var4 == var39;
            var38 = undefined;
            if(var40) { _fun0002_ip = 144; continue _fun0002 }
case 145:
            var38 = var39.userId;
case 144:
            var37 = var37.id;
            var36 = var38 === var37;
case 142:
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
            if(var32) { _fun0002_ip = 146; continue _fun0002 }
case 147:
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
            _fun0002_ip = 148; continue _fun0002;
case 146:
            var32 = var36;
            if(var36) { _fun0002_ip = 149; continue _fun0002 }
case 150:
            var32 = var35;
case 149:
            var37 = var38;
            if(!var32) { _fun0002_ip = 148; continue _fun0002 }
case 151:
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
case 148:
            var32 = {};
            var32['label'] = var37;
            if(var34) { _fun0002_ip = 152; continue _fun0002 }
case 153:
            var34 = var36;
case 152:
            if(var34) { _fun0002_ip = 154; continue _fun0002 }
case 155:
            var34 = var35;
case 154:
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
            _fun0002_ip = 112; continue _fun0002;
case 129:
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
case 112:
            var3 = new Array(0);
            if(!(var4 == var22)) { _fun0002_ip = 156; continue _fun0002 }
case 157:
            var10 = _closure1_slot0;
            var27 = _closure1_slot2;
            var9 = 34;
            var9 = var27[var9];
            var27 = var10.bind(var12)(var9);
            var10 = var27.getJoinFromSupportedPlatformsIconKeys;
            var9 = {};
            var31 = var4 == var28;
            var30 = undefined;
            if(var31) { _fun0002_ip = 158; continue _fun0002 }
case 159:
            var30 = var28.supported_platforms;
case 158:
            var9['platforms'] = var30;
            var9['currentPlatform'] = var29;
            var10 = var10.bind(var27)(var9);
            _fun0002_ip = 160; continue _fun0002;
case 156:
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var9 = 34;
            var9 = var29[var9];
            var9 = var27.bind(var12)(var9);
            var9 = var9.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var22 = var9[var22];
            var10 = var3;
            if(!(var4 != var22)) { _fun0002_ip = 160; continue _fun0002 }
case 161:
            var9 = var3.push;
            var9 = var9.bind(var3)(var22);
            var10 = var3;
case 160:
            var3 = var4 != var20;
            var29 = undefined;
            if(!var3) { _fun0002_ip = 162; continue _fun0002 }
case 163:
            var29 = var20;
case 162:
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
            if(!(!(var15 > var17))) { _fun0002_ip = 164; continue _fun0002 }
case 165:
            var15 = var16.length;
case 164:
            var3['maxPartySize'] = var15;
            var3['partyMemberAvatarURIs'] = var13;
            var3['partySizeText'] = var11;
            var3['platformIconKeys'] = var10;
            var3['coverImageUrl'] = var9;
            var3['subtitle'] = var8;
            var3['title'] = var7;
            var3['hiddenEmbedMessageContent'] = var6;
            return var3;
case 34:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0002_ip = 166; continue _fun0002 }
case 167:
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
case 166:
            var3 = var4 != var7;
            var8 = undefined;
            if(!var3) { _fun0002_ip = 168; continue _fun0002 }
case 169:
            var8 = var7;
case 168:
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
            var8 = 16;
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