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
 0:
            var1 = arg1;
            var6 = arg2;
            var7 = arg3;
            var2 = var1.application;
            var4 = null;
            if(!(var4 == var2)) { _fun0001_ip = 61; continue _fun0001 }
 20:
            var8 = _closure1_slot10;
            var5 = var8.findActivity;
            var2 = var1.author;
            var3 = var2.id;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot15;
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
            if(var3) { _fun0001_ip = 92; continue _fun0001 }
 87:
            var9 = var2.type;
 92:
            var3 = _closure1_slot13;
            var3 = var3.JOIN_REQUEST;
            if(!(var9 !== var3)) { _fun0001_ip = 151; continue _fun0001 }
 109:
            var3 = var1.activity;
            var4 = var4 == var3;
            var8 = undefined;
            if(var4) { _fun0001_ip = 129; continue _fun0001 }
 124:
            var8 = var3.type;
 129:
            var3 = _closure1_slot13;
            var3 = var3.STREAM_REQUEST;
            var4 = var5;
            if(!(var8 === var3)) { _fun0001_ip = 187; continue _fun0001 }
 146:
            var4 = var7;
            _fun0001_ip = 187; continue _fun0001;
 151:
            var3 = var7;
            if(!(var5 === var7)) { _fun0001_ip = 184; continue _fun0001 }
 158:
            var5 = var6.isPrivate;
            var5 = var5.bind(var6)();
            var3 = var7;
            if(!var5) { _fun0001_ip = 184; continue _fun0001 }
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
    var _closure1_slot18 = var1;
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
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var9 = arg1;
            var14 = arg2;
            var _closure2_slot0 = var14;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var11 = undefined;
            var3 = var3.bind(var11)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0002_ip = 270; continue _fun0002 }
 53:
            var2 = var9.author;
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 270; continue _fun0002 }
 68:
            var2 = var9.activity;
            if(!(var4 != var2)) { _fun0002_ip = 270; continue _fun0002 }
 81:
            if(!(var4 != var14)) { _fun0002_ip = 270; continue _fun0002 }
 88:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 15;
            var2 = var6[var2];
            var3 = var3.bind(var11)(var2);
            var2 = var3.getApplicationFromMessage;
            var2 = var2.bind(var3)(var9);
            var3 = var9.application;
            var6 = var4 == var3;
            var10 = undefined;
            if(var6) { _fun0002_ip = 138; continue _fun0002 }
 133:
            var10 = var3.id;
 138:
            var6 = var4 != var10;
            var3 = null;
            if(!var6) { _fun0002_ip = 162; continue _fun0002 }
 147:
            var7 = _closure1_slot3;
            var6 = var7.getApplication;
            var3 = var6.bind(var7)(var10);
 162:
            var6 = var4 == var3;
            if(!var6) { _fun0002_ip = 173; continue _fun0002 }
 169:
            var6 = var4 != var10;
 173:
            if(!var6) { _fun0002_ip = 197; continue _fun0002 }
 176:
            var8 = _closure1_slot3;
            var7 = var8.isFetchingApplication;
            var8 = var7.bind(var8)(var10);
            var7 = false;
            var6 = var7 === var8;
 197:
            if(!var6) { _fun0002_ip = 234; continue _fun0002 }
 200:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 12;
            var6 = var8[var6];
            var8 = var7.bind(var11)(var6);
            var7 = var8.fetchApplication;
            var6 = false;
            var6 = var7.bind(var8)(var10, var6);
 234:
            if(!(var4 != var3)) { _fun0002_ip = 241; continue _fun0002 }
 238:
            var2 = var3;
 241:
            var6 = _closure1_slot7;
            var3 = var6.getId;
            var31 = var3.bind(var6)();
            var3 = _closure1_slot18;
            var26 = var3.bind(var11)(var9, var14, var31);
            if(!(var4 == var2)) { _fun0002_ip = 272; continue _fun0002 }
 270:
            return var11;
 272:
            var3 = var9.activity;
            var7 = var4 == var3;
            var6 = undefined;
            if(var7) { _fun0002_ip = 292; continue _fun0002 }
 287:
            var6 = var3.type;
 292:
            var3 = _closure1_slot13;
            var3 = var3.STREAM_REQUEST;
            if(!(var6 !== var3)) { _fun0002_ip = 2684; continue _fun0002 }
 309:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = 16;
            var3 = var3[var22];
            var8 = var6.bind(var11)(var3);
            var7 = var8.getHeaderText;
            var6 = var2.name;
            var10 = var9.activity;
            var12 = var4 == var10;
            var3 = undefined;
            if(var12) { _fun0002_ip = 360; continue _fun0002 }
 355:
            var3 = var10.type;
 360:
            var19 = var7.bind(var8)(var6, var3);
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 17;
            var6 = var3[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var2.id;
            var6 = var7.bind(var11)(var26, var9, var6);
            var17 = !var6;
            if(!(var4 != var26)) { _fun0002_ip = 469; continue _fun0002 }
 405:
            var6 = var26.party;
            if(!(var4 != var6)) { _fun0002_ip = 469; continue _fun0002 }
 415:
            var6 = global;
            var8 = var6.Array;
            var7 = var8.from;
            var12 = _closure1_slot8;
            var10 = var12.getParty;
            var6 = var26.party;
            var6 = var6.id;
            var6 = var10.bind(var12)(var6);
            if(!(var4 == var6)) { _fun0002_ip = 462; continue _fun0002 }
 458:
            var6 = new Array(0);
 462:
            var13 = var7.bind(var8)(var6);
            _fun0002_ip = 473; continue _fun0002;
 469:
            var13 = new Array(0);
 473:
            var6 = _closure1_slot0;
            var7 = 18;
            var7 = var3[var7];
            var8 = var6.bind(var11)(var7);
            var7 = var8.getPartySize;
            var7 = var7.bind(var8)(var26);
            var12 = var7.maxPartySize;
            var7 = 19;
            var3 = var3[var7];
            var6 = var6.bind(var11)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(var3) { _fun0002_ip = 574; continue _fun0002 }
 531:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var6 = var6.bind(var11)(var3);
            var3 = var6.isAndroid;
            var3 = var3.bind(var6)();
            var24 = undefined;
            if(!var3) { _fun0002_ip = 584; continue _fun0002 }
 562:
            var3 = _closure1_slot14;
            var24 = var3.ANDROID;
            _fun0002_ip = 584; continue _fun0002;
 574:
            var3 = _closure1_slot14;
            var24 = var3.IOS;
 584:
            var7 = _closure1_slot9;
            var6 = var7.getApplicationActivity;
            var3 = var2.id;
            var6 = var6.bind(var7)(var3);
            if(!(var4 == var6)) { _fun0002_ip = 631; continue _fun0002 }
 608:
            var10 = _closure1_slot11;
            var8 = var10.getApplicationActivity;
            var7 = var2.id;
            var3 = true;
            var6 = var8.bind(var10)(var7, var3);
 631:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 20;
            var3 = var8[var3];
            var10 = var7.bind(var11)(var3);
            var3 = var10.getIsInParty;
            var10 = var3.bind(var10)(var6, var26);
            var3 = 21;
            var3 = var8[var3];
            var7 = var7.bind(var11)(var3);
            var3 = var7.getCanSendInvite;
            var43 = var7;
            var42 = var26;
            var41 = var9;
            var40 = var2;
            var39 = var31;
            var20 = var43[var3](var42, var41, var40, var39, var38);
            var3 = global;
            var8 = var3.Set;
            var7 = var4 == var26;
            var21 = var6;
            var6 = undefined;
            if(var7) { _fun0002_ip = 726; continue _fun0002 }
 720:
            var6 = var26.supported_platforms;
 726:
            if(!(var4 == var6)) { _fun0002_ip = 734; continue _fun0002 }
 730:
            var6 = new Array(0);
 734:
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var43 = var7;
            var42 = var6;
            var6 = new var43[var8](var42, var41);
            var7 = var6 instanceof Object ? var6 : var7;
            var16 = var4 != var24;
            if(!var16) { _fun0002_ip = 774; continue _fun0002 }
 764:
            var6 = var7.has;
            var16 = var6.bind(var7)(var24);
 774:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 22;
            var6 = var8[var6];
            var15 = var7.bind(var11)(var6);
            var6 = var15.canLaunchFrame;
            var15 = var6.bind(var15)(var2);
            var6 = 23;
            var6 = var8[var6];
            var18 = var7.bind(var11)(var6);
            var6 = var18.isEmbeddedApp;
            var18 = var6.bind(var18)(var2);
            var6 = 24;
            var6 = var8[var6];
            var8 = var7.bind(var11)(var6);
            var7 = var8.getCanJoin;
            var6 = {};
            var6['presenceActivity'] = var26;
            var6['currentUserPresenceActivity'] = var21;
            var6['currentUserId'] = var31;
            var6['message'] = var9;
            var6['application'] = var2;
            var6['isEmbeddedApplication'] = var18;
            var6['isFrameApplication'] = var15;
            var6['isGameLaunchable'] = var16;
            var6 = var7.bind(var8)(var6);
            var21 = var6.canJoin;
            var7 = _closure1_slot16;
            var8 = var4 == var26;
            var6 = undefined;
            if(var8) { _fun0002_ip = 930; continue _fun0002 }
 910:
            var8 = var26.party;
            var15 = var4 == var8;
            var6 = undefined;
            if(var15) { _fun0002_ip = 930; continue _fun0002 }
 925:
            var6 = var8.id;
 930:
            var15 = var7.bind(var11)(var6);
            if(var15) { _fun0002_ip = 956; continue _fun0002 }
 938:
            var7 = var2.id;
            var6 = _closure1_slot5;
            var6 = var6.id;
            var15 = var7 === var6;
 956:
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var30 = 13;
            var7 = var6[var30];
            var7 = var18.bind(var11)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var30];
            var6 = var18.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.OAB5TE;
            var8 = var7.bind(var8)(var6);
            var6 = var4 == var26;
            var27 = undefined;
            if(var6) { _fun0002_ip = 1042; continue _fun0002 }
 1022:
            var6 = var26.timestamps;
            var7 = var4 == var6;
            var27 = undefined;
            if(var7) { _fun0002_ip = 1042; continue _fun0002 }
 1037:
            var27 = var6.start;
 1042:
            if(!(var4 == var27)) { _fun0002_ip = 1064; continue _fun0002 }
 1046:
            var7 = var4 == var26;
            var6 = undefined;
            if(var7) { _fun0002_ip = 1061; continue _fun0002 }
 1055:
            var6 = var26.created_at;
 1061:
            var27 = var6;
 1064:
            var6 = var4 == var26;
            var23 = undefined;
            if(var6) { _fun0002_ip = 1093; continue _fun0002 }
 1073:
            var6 = var26.timestamps;
            var7 = var4 == var6;
            var23 = undefined;
            if(var7) { _fun0002_ip = 1093; continue _fun0002 }
 1088:
            var23 = var6.end;
 1093:
            var6 = var4 != var27;
            var25 = '';
            var28 = var25;
            if(!var6) { _fun0002_ip = 1164; continue _fun0002 }
 1107:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 25;
            var6 = var18[var6];
            var18 = var7.bind(var11)(var6);
            var7 = var18.formatActiveTimestamp;
            var6 = {};
            var6['start'] = var27;
            var6['end'] = var23;
            var23 = var3.Date;
            var3 = var23.now;
            var3 = var3.bind(var23)();
            var28 = var7.bind(var18)(var6, var3);
 1164:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0002_ip = 1227; continue _fun0002 }
 1178:
            var6 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 26;
            var3 = var18[var3];
            var27 = var6.bind(var11)(var3);
            var23 = var27.getAppIconSrc;
            var18 = var2.id;
            var6 = var2.icon;
            var3 = var2.bot;
            var7 = var23.bind(var27)(var18, var6, var3);
 1227:
            var3 = var2.name;
            if(var15) { _fun0002_ip = 1773; continue _fun0002 }
 1238:
            if(var17) { _fun0002_ip = 1665; continue _fun0002 }
 1244:
            var6 = var13.map;
            var5 = function(arg1) {
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
            var6 = var6.bind(var13)(var5);
            var18 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var22];
            var23 = var18.bind(var11)(var5);
            var18 = var23.getPartyText;
            var5 = {};
            var5['maxPartySize'] = var12;
            var27 = var13.length;
            var5['partySize'] = var27;
            var29 = var9.activity;
            var32 = var4 == var29;
            var27 = undefined;
            if(var32) { _fun0002_ip = 1321; continue _fun0002 }
 1316:
            var27 = var29.type;
 1321:
            var5['activityActionType'] = var27;
            var5 = var18.bind(var23)(var5);
            var18 = {};
            var18['canJoin'] = var21;
            var18['canSendInvite'] = var20;
            var18['isInParty'] = var10;
            var10 = var9.author;
            var10 = var10.id;
            var18['messageAuthorId'] = var10;
            var18['currentUserId'] = var31;
            var27 = var18.canJoin;
            var23 = var18.canSendInvite;
            var10 = var18.isInParty;
            var21 = var18.currentUserId;
            var20 = var18.messageAuthorId;
            var18 = {};
            if(var27) { _fun0002_ip = 1564; continue _fun0002 }
 1407:
            if(var23) { _fun0002_ip = 1495; continue _fun0002 }
 1410:
            if(var10) { _fun0002_ip = 1428; continue _fun0002 }
 1413:
            var18['label'] = var11;
            var10 = false;
            var18['disabled'] = var10;
            var10 = var18;
            _fun0002_ip = 1493; continue _fun0002;
 1428:
            var32 = _closure1_slot0;
            var23 = _closure1_slot2;
            var27 = var23[var30];
            var27 = var32.bind(var11)(var27);
            var29 = var27.intl;
            var27 = var29.string;
            var23 = var23[var30];
            var23 = var32.bind(var11)(var23);
            var23 = var23.t;
            var23 = var23.KC26NT;
            var23 = var27.bind(var29)(var23);
            var18['label'] = var23;
            var23 = true;
            var18['disabled'] = var23;
            var10 = var18;
 1493:
            _fun0002_ip = 1562; continue _fun0002;
 1495:
            var32 = _closure1_slot0;
            var23 = _closure1_slot2;
            var27 = var23[var30];
            var27 = var32.bind(var11)(var27);
            var29 = var27.intl;
            var27 = var29.string;
            var23 = var23[var30];
            var23 = var32.bind(var11)(var23);
            var23 = var23.t;
            var23 = var23.hC/Ze3;
            var23 = var27.bind(var29)(var23);
            var18['label'] = var23;
            var20 = var20 === var21;
            var18['disabled'] = var20;
            var10 = var18;
 1562:
            _fun0002_ip = 1629; continue _fun0002;
 1564:
            var27 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var30];
            var21 = var27.bind(var11)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var20 = var20[var30];
            var20 = var27.bind(var11)(var20);
            var20 = var20.t;
            var20 = var20.VJlc0d;
            var20 = var21.bind(var23)(var20);
            var18['label'] = var20;
            var20 = false;
            var18['disabled'] = var20;
            var10 = var18;
 1629:
            var21 = var10.label;
            var10 = var10.disabled;
            var23 = !var10;
            var20 = var8;
            var10 = var6;
            var8 = var5;
            var6 = var28;
            var18 = var7;
            var5 = var3;
            _fun0002_ip = 2491; continue _fun0002;
 1665:
            var32 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = var27[var22];
            var29 = var32.bind(var11)(var22);
            var22 = var29.getDeadGameInviteText;
            var43 = var29;
            var42 = var9;
            var41 = var2;
            var40 = var14;
            var39 = var31;
            var6 = var43[var22](var42, var41, var40, var39, var38);
            var29 = var27[var30];
            var29 = var32.bind(var11)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var27 = var27[var30];
            var27 = var32.bind(var11)(var27);
            var27 = var27.t;
            var27 = var27.pwEQoq;
            var20 = var29.bind(var31)(var27);
            var23 = false;
            var21 = undefined;
            var10 = null;
            var8 = var25;
            var18 = var7;
            var5 = var3;
            _fun0002_ip = 2491; continue _fun0002;
 1773:
            if(!(var4 != var26)) { _fun0002_ip = 1796; continue _fun0002 }
 1777:
            var3 = var26.details;
            if(!(var4 != var3)) { _fun0002_ip = 1796; continue _fun0002 }
 1787:
            var3 = var26.state;
            if(!(var4 == var3)) { _fun0002_ip = 1803; continue _fun0002 }
 1796:
            var3 = var2.name;
            _fun0002_ip = 1899; continue _fun0002;
 1803:
            var27 = _closure1_slot0;
            var22 = _closure1_slot2;
            var29 = var22[var30];
            var29 = var27.bind(var11)(var29);
            var31 = var29.intl;
            var29 = var31.formatToPlainString;
            var22 = var22[var30];
            var22 = var27.bind(var11)(var22);
            var22 = var22.t;
            var27 = var22.JCvHt7;
            var22 = {};
            var32 = var26.details;
            var22['track'] = var32;
            var32 = var26.state;
            var22['artist'] = var32;
            var31 = var29.bind(var31)(var27, var22);
            var29 = var31.replace;
            var27 = '\n';
            var22 = ' ';
            var3 = var29.bind(var31)(var27, var22);
 1899:
            var31 = _closure1_slot0;
            var22 = _closure1_slot2;
            var27 = var22[var30];
            var27 = var31.bind(var11)(var27);
            var29 = var27.intl;
            var27 = var29.string;
            var22 = var22[var30];
            var22 = var31.bind(var11)(var22);
            var22 = var22.t;
            var22 = var22.sTo7s7;
            var27 = var27.bind(var29)(var22);
            if(var17) { _fun0002_ip = 2419; continue _fun0002 }
 1959:
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var22 = 27;
            var22 = var31[var22];
            var29 = var29.bind(var11)(var22);
            var22 = var2.id;
            var29 = var29.bind(var11)(var26, var22);
            var31 = var4 != var29;
            var22 = undefined;
            if(!var31) { _fun0002_ip = 2002; continue _fun0002 }
 1999:
            var22 = var29;
 2002:
            var34 = var9.author;
            var32 = _closure1_slot4;
            var29 = var32.hasConnectedAccount;
            var29 = var29.bind(var32)();
            var31 = var32.getSyncingWith;
            var36 = var31.bind(var32)();
            var31 = var32.getActivity;
            var33 = var31.bind(var32)();
            var32 = var34.id;
            var35 = _closure1_slot7;
            var31 = var35.getId;
            var31 = var31.bind(var35)();
            var31 = var32 === var31;
            var35 = var4 == var33;
            var32 = undefined;
            if(var35) { _fun0002_ip = 2082; continue _fun0002 }
 2076:
            var32 = var33.party;
 2082:
            var32 = var4 != var32;
            if(!var32) { _fun0002_ip = 2133; continue _fun0002 }
 2089:
            var37 = var4 == var26;
            var35 = undefined;
            if(var37) { _fun0002_ip = 2118; continue _fun0002 }
 2098:
            var37 = var26.party;
            var38 = var4 == var37;
            var35 = undefined;
            if(var38) { _fun0002_ip = 2118; continue _fun0002 }
 2113:
            var35 = var37.id;
 2118:
            var33 = var33.party;
            var33 = var33.id;
            var32 = var35 === var33;
 2133:
            var35 = var4 == var36;
            var33 = undefined;
            if(var35) { _fun0002_ip = 2147; continue _fun0002 }
 2142:
            var33 = var36.userId;
 2147:
            var33 = var4 != var33;
            if(!var33) { _fun0002_ip = 2177; continue _fun0002 }
 2154:
            var37 = var4 == var36;
            var35 = undefined;
            if(var37) { _fun0002_ip = 2168; continue _fun0002 }
 2163:
            var35 = var36.userId;
 2168:
            var34 = var34.id;
            var33 = var35 === var34;
 2177:
            var37 = _closure1_slot0;
            var34 = _closure1_slot2;
            var35 = var34[var30];
            var35 = var37.bind(var11)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var34 = var34[var30];
            var34 = var37.bind(var11)(var34);
            var34 = var34.t;
            var34 = var34.VJlc0d;
            var35 = var35.bind(var36)(var34);
            if(var29) { _fun0002_ip = 2298; continue _fun0002 }
 2232:
            var34 = _closure1_slot0;
            var29 = _closure1_slot2;
            var36 = var29[var30];
            var36 = var34.bind(var11)(var36);
            var37 = var36.intl;
            var36 = var37.formatToPlainString;
            var29 = var29[var30];
            var29 = var34.bind(var11)(var29);
            var29 = var29.t;
            var34 = var29.XWSHTU;
            var29 = {};
            var38 = _closure1_slot17;
            var29['platform'] = var38;
            var34 = var36.bind(var37)(var34, var29);
            _fun0002_ip = 2365; continue _fun0002;
 2298:
            var29 = var33;
            if(var33) { _fun0002_ip = 2307; continue _fun0002 }
 2304:
            var29 = var32;
 2307:
            var34 = var35;
            if(!var29) { _fun0002_ip = 2365; continue _fun0002 }
 2313:
            var37 = _closure1_slot0;
            var29 = _closure1_slot2;
            var35 = var29[var30];
            var35 = var37.bind(var11)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var29 = var29[var30];
            var29 = var37.bind(var11)(var29);
            var29 = var29.t;
            var29 = var29.KC26NT;
            var34 = var35.bind(var36)(var29);
 2365:
            var29 = {};
            var29['label'] = var34;
            if(var31) { _fun0002_ip = 2377; continue _fun0002 }
 2374:
            var31 = var33;
 2377:
            if(var31) { _fun0002_ip = 2383; continue _fun0002 }
 2380:
            var31 = var32;
 2383:
            var29['disabled'] = var31;
            var21 = var29.label;
            var29 = var29.disabled;
            var23 = !var29;
            var20 = var27;
            var10 = null;
            var8 = var25;
            var6 = var28;
            var18 = var22;
            var5 = var3;
            _fun0002_ip = 2491; continue _fun0002;
 2419:
            var29 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = var3[var30];
            var22 = var29.bind(var11)(var22);
            var28 = var22.intl;
            var22 = var28.string;
            var3 = var3[var30];
            var3 = var29.bind(var11)(var3);
            var3 = var3.t;
            var3 = var3.84qx9v;
            var6 = var22.bind(var28)(var3);
            var5 = var2.name;
            var23 = false;
            var21 = undefined;
            var20 = var27;
            var10 = null;
            var8 = var25;
            var18 = var7;
 2491:
            var7 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 28;
            var3 = var22[var3];
            var22 = var7.bind(var11)(var3);
            var7 = var22.getJoinFromSupportedPlatformsIconKeys;
            var3 = {};
            var27 = var4 == var26;
            var25 = undefined;
            if(var27) { _fun0002_ip = 2534; continue _fun0002 }
 2528:
            var25 = var26.supported_platforms;
 2534:
            var3['platforms'] = var25;
            var3['currentPlatform'] = var24;
            var7 = var7.bind(var22)(var3);
            var3 = var4 != var18;
            var22 = undefined;
            if(!var3) { _fun0002_ip = 2561; continue _fun0002 }
 2558:
            var22 = var18;
 2561:
            var3 = {};
            var3['ctaButtonEnabled'] = var23;
            var3['ctaButtonText'] = var21;
            var3['footerLabel'] = var20;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 26;
            var20 = var23[var20];
            var21 = var21.bind(var11)(var20);
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
            if(!(!(var12 > var15))) { _fun0002_ip = 2653; continue _fun0002 }
 2648:
            var12 = var13.length;
 2653:
            var3['maxPartySize'] = var12;
            var3['partyMemberAvatarURIs'] = var10;
            var3['partySizeText'] = var8;
            var3['platformIconKeys'] = var7;
            var3['subtitle'] = var6;
            var3['title'] = var5;
            return var3;
 2684:
            var3 = var2.icon;
            var3 = var4 != var3;
            var6 = null;
            if(!var3) { _fun0002_ip = 2747; continue _fun0002 }
 2698:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 26;
            var3 = var7[var3];
            var10 = var5.bind(var11)(var3);
            var8 = var10.getAppIconSrc;
            var7 = var2.id;
            var5 = var2.icon;
            var3 = var2.bot;
            var6 = var8.bind(var10)(var7, var5, var3);
 2747:
            var3 = var4 != var6;
            var7 = undefined;
            if(!var3) { _fun0002_ip = 2759; continue _fun0002 }
 2756:
            var7 = var6;
 2759:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 26;
            var3 = var12[var3];
            var5 = var8.bind(var11)(var3);
            var3 = var5.getAppGradientColors;
            var7 = var3.bind(var5)(var7);
            var5 = _closure1_slot18;
            var15 = _closure1_slot7;
            var3 = var15.getId;
            var3 = var3.bind(var15)();
            var5 = var5.bind(var11)(var9, var14, var3);
            var10 = _closure1_slot1;
            var1 = 17;
            var1 = var12[var1];
            var3 = var10.bind(var11)(var1);
            var1 = var2.id;
            var5 = var3.bind(var11)(var5, var9, var1);
            var1 = 16;
            var1 = var12[var1];
            var13 = var8.bind(var11)(var1);
            var3 = var13.getRequestToStreamText;
            var1 = var15.getId;
            var1 = var1.bind(var15)();
            var3 = var3.bind(var13)(var9, var14, var1);
            var1 = 29;
            var1 = var12[var1];
            var1 = var10.bind(var11)(var1);
            var13 = var1.bind(var11)(var9);
            var9 = var13.text;
            var1 = {};
            var13 = var13.isDisabled;
            var13 = !var13;
            var1['ctaButtonEnabled'] = var13;
            var1['ctaButtonText'] = var9;
            var1['footerLabel'] = var4;
            var1['gradientColors'] = var7;
            var7 = 13;
            var7 = var12[var7];
            var7 = var8.bind(var11)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = 30;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.nAyuPj;
            var7 = var8.bind(var9)(var7);
            var1['headerText'] = var7;
            var1['iconSrc'] = var6;
            var1['isActive'] = var5;
            var5 = false;
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