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
            if(var3) { _fun0001_ip = 92; continue _fun0001 }
 87:
            var9 = var2.type;
 92:
            var3 = _closure1_slot15;
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
            var3 = _closure1_slot15;
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
    var _closure1_slot20 = var1;
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
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var14 = arg2;
            var _closure2_slot0 = var14;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var12 = undefined;
            var3 = var3.bind(var12)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0002_ip = 270; continue _fun0002 }
 53:
            var2 = var5.author;
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 270; continue _fun0002 }
 68:
            var2 = var5.activity;
            if(!(var4 != var2)) { _fun0002_ip = 270; continue _fun0002 }
 81:
            if(!(var4 != var14)) { _fun0002_ip = 270; continue _fun0002 }
 88:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var3 = var3.bind(var12)(var2);
            var2 = var3.getApplicationFromMessage;
            var2 = var2.bind(var3)(var5);
            var3 = var5.application;
            var7 = var4 == var3;
            var10 = undefined;
            if(var7) { _fun0002_ip = 138; continue _fun0002 }
 133:
            var10 = var3.id;
 138:
            var7 = var4 != var10;
            var3 = null;
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 147:
            var8 = _closure1_slot3;
            var7 = var8.getApplication;
            var3 = var7.bind(var8)(var10);
 162:
            var7 = var4 == var3;
            if(!var7) { _fun0002_ip = 173; continue _fun0002 }
 169:
            var7 = var4 != var10;
 173:
            if(!var7) { _fun0002_ip = 197; continue _fun0002 }
 176:
            var9 = _closure1_slot3;
            var8 = var9.isFetchingApplication;
            var9 = var8.bind(var9)(var10);
            var8 = false;
            var7 = var8 === var9;
 197:
            if(!var7) { _fun0002_ip = 234; continue _fun0002 }
 200:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 13;
            var7 = var9[var7];
            var9 = var8.bind(var12)(var7);
            var8 = var9.fetchApplication;
            var7 = false;
            var7 = var8.bind(var9)(var10, var7);
 234:
            if(!(var4 != var3)) { _fun0002_ip = 241; continue _fun0002 }
 238:
            var2 = var3;
 241:
            var7 = _closure1_slot7;
            var3 = var7.getId;
            var31 = var3.bind(var7)();
            var3 = _closure1_slot20;
            var29 = var3.bind(var12)(var5, var14, var31);
            if(!(var4 == var2)) { _fun0002_ip = 272; continue _fun0002 }
 270:
            return var12;
 272:
            var3 = var5.activity;
            var8 = var4 == var3;
            var7 = undefined;
            if(var8) { _fun0002_ip = 292; continue _fun0002 }
 287:
            var7 = var3.type;
 292:
            var3 = _closure1_slot15;
            var3 = var3.STREAM_REQUEST;
            if(!(var7 !== var3)) { _fun0002_ip = 2924; continue _fun0002 }
 309:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = 18;
            var3 = var3[var22];
            var9 = var7.bind(var12)(var3);
            var8 = var9.getHeaderText;
            var7 = var2.name;
            var10 = var5.activity;
            var11 = var4 == var10;
            var3 = undefined;
            if(var11) { _fun0002_ip = 360; continue _fun0002 }
 355:
            var3 = var10.type;
 360:
            var19 = var8.bind(var9)(var7, var3);
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 19;
            var7 = var3[var7];
            var8 = var8.bind(var12)(var7);
            var7 = var2.id;
            var7 = var8.bind(var12)(var29, var5, var7);
            var17 = !var7;
            if(!(var4 != var29)) { _fun0002_ip = 469; continue _fun0002 }
 405:
            var7 = var29.party;
            if(!(var4 != var7)) { _fun0002_ip = 469; continue _fun0002 }
 415:
            var7 = global;
            var9 = var7.Array;
            var8 = var9.from;
            var11 = _closure1_slot8;
            var10 = var11.getParty;
            var7 = var29.party;
            var7 = var7.id;
            var7 = var10.bind(var11)(var7);
            if(!(var4 == var7)) { _fun0002_ip = 462; continue _fun0002 }
 458:
            var7 = new Array(0);
 462:
            var13 = var8.bind(var9)(var7);
            _fun0002_ip = 473; continue _fun0002;
 469:
            var13 = new Array(0);
 473:
            var7 = _closure1_slot0;
            var8 = 20;
            var8 = var3[var8];
            var9 = var7.bind(var12)(var8);
            var8 = var9.getPartySize;
            var8 = var8.bind(var9)(var29);
            var11 = var8.maxPartySize;
            var8 = 21;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0002_ip = 574; continue _fun0002 }
 531:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isAndroid;
            var3 = var3.bind(var7)();
            var27 = undefined;
            if(!var3) { _fun0002_ip = 584; continue _fun0002 }
 562:
            var3 = _closure1_slot16;
            var27 = var3.ANDROID;
            _fun0002_ip = 584; continue _fun0002;
 574:
            var3 = _closure1_slot16;
            var27 = var3.IOS;
 584:
            var8 = _closure1_slot9;
            var7 = var8.getApplicationActivity;
            var3 = var2.id;
            var7 = var7.bind(var8)(var3);
            if(!(var4 == var7)) { _fun0002_ip = 631; continue _fun0002 }
 608:
            var10 = _closure1_slot11;
            var9 = var10.getApplicationActivity;
            var8 = var2.id;
            var3 = true;
            var7 = var9.bind(var10)(var8, var3);
 631:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 22;
            var3 = var10[var3];
            var9 = var8.bind(var12)(var3);
            var3 = var9.getIsInParty;
            var9 = var3.bind(var9)(var7, var29);
            var3 = 23;
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
            if(var8) { _fun0002_ip = 726; continue _fun0002 }
 720:
            var7 = var29.supported_platforms;
 726:
            if(!(var4 == var7)) { _fun0002_ip = 734; continue _fun0002 }
 730:
            var7 = new Array(0);
 734:
            var8 = var15.prototype;
            var8 = Object.create(var8, {constructor: {value: var15}});
            var45 = var8;
            var44 = var7;
            var7 = new var45[var15](var44, var43);
            var8 = var7 instanceof Object ? var7 : var8;
            var16 = var4 != var27;
            if(!var16) { _fun0002_ip = 774; continue _fun0002 }
 764:
            var7 = var8.has;
            var16 = var7.bind(var8)(var27);
 774:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 24;
            var7 = var15[var7];
            var18 = var8.bind(var12)(var7);
            var7 = var18.canLaunchFrame;
            var18 = var7.bind(var18)(var2);
            var7 = 25;
            var7 = var15[var7];
            var20 = var8.bind(var12)(var7);
            var7 = var20.isEmbeddedApp;
            var20 = var7.bind(var20)(var2);
            var7 = 26;
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
            if(var15) { _fun0002_ip = 936; continue _fun0002 }
 916:
            var15 = var29.party;
            var18 = var4 == var15;
            var7 = undefined;
            if(var18) { _fun0002_ip = 936; continue _fun0002 }
 931:
            var7 = var15.id;
 936:
            var15 = var8.bind(var12)(var7);
            if(var15) { _fun0002_ip = 962; continue _fun0002 }
 944:
            var8 = var2.id;
            var7 = _closure1_slot5;
            var7 = var7.id;
            var15 = var8 === var7;
 962:
            var7 = var4 == var29;
            var23 = undefined;
            if(var7) { _fun0002_ip = 991; continue _fun0002 }
 971:
            var7 = var29.timestamps;
            var8 = var4 == var7;
            var23 = undefined;
            if(var8) { _fun0002_ip = 991; continue _fun0002 }
 986:
            var23 = var7.start;
 991:
            if(!(var4 == var23)) { _fun0002_ip = 1013; continue _fun0002 }
 995:
            var8 = var4 == var29;
            var7 = undefined;
            if(var8) { _fun0002_ip = 1010; continue _fun0002 }
 1004:
            var7 = var29.created_at;
 1010:
            var23 = var7;
 1013:
            var7 = var4 == var29;
            var21 = undefined;
            if(var7) { _fun0002_ip = 1042; continue _fun0002 }
 1022:
            var7 = var29.timestamps;
            var8 = var4 == var7;
            var21 = undefined;
            if(var8) { _fun0002_ip = 1042; continue _fun0002 }
 1037:
            var21 = var7.end;
 1042:
            var7 = var4 != var23;
            var26 = '';
            var28 = var26;
            if(!var7) { _fun0002_ip = 1113; continue _fun0002 }
 1056:
            var8 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 27;
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
 1113:
            var3 = var2.icon;
            var3 = var4 != var3;
            var8 = null;
            if(!var3) { _fun0002_ip = 1176; continue _fun0002 }
 1127:
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 28;
            var3 = var18[var3];
            var23 = var7.bind(var12)(var3);
            var21 = var23.getAppIconSrc;
            var18 = var2.id;
            var7 = var2.icon;
            var3 = var2.bot;
            var8 = var21.bind(var23)(var18, var7, var3);
 1176:
            var3 = var2.name;
            if(var15) { _fun0002_ip = 1938; continue _fun0002 }
 1187:
            if(var17) { _fun0002_ip = 1825; continue _fun0002 }
 1193:
            var7 = var13.map;
            var6 = function(arg1) {
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
            if(var30) { _fun0002_ip = 1270; continue _fun0002 }
 1265:
            var23 = var24.type;
 1270:
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
            if(var10) { _fun0002_ip = 1605; continue _fun0002 }
 1365:
            var10 = {};
            if(var23) { _fun0002_ip = 1528; continue _fun0002 }
 1373:
            if(var9) { _fun0002_ip = 1453; continue _fun0002 }
 1376:
            var10['label'] = var12;
            var9 = false;
            var10['disabled'] = var9;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var9 = 15;
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
            _fun0002_ip = 1526; continue _fun0002;
 1453:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 15;
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
 1526:
            _fun0002_ip = 1603; continue _fun0002;
 1528:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 15;
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
 1603:
            _fun0002_ip = 1720; continue _fun0002;
 1605:
            var10 = var4 != var21;
            var18 = undefined;
            if(!var10) { _fun0002_ip = 1645; continue _fun0002 }
 1614:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var10 = 14;
            var10 = var23[var10];
            var20 = var20.bind(var12)(var10);
            var10 = var20.getRemoteJoinFooterLabel;
            var18 = var10.bind(var20)(var21);
 1645:
            var10 = {};
            var24 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 15;
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
 1720:
            var23 = var9.label;
            var10 = var9.disabled;
            var24 = !var10;
            var20 = var9.footerLabel;
            var21 = var4 != var29;
            if(!var21) { _fun0002_ip = 1756; continue _fun0002 }
 1746:
            var9 = var29.application_id;
            var21 = var4 != var9;
 1756:
            if(!var21) { _fun0002_ip = 1805; continue _fun0002 }
 1759:
            var30 = _closure1_slot13;
            var18 = var30.getState;
            var10 = var29.application_id;
            var9 = _closure1_slot15;
            var9 = var9.JOIN;
            var10 = var18.bind(var30)(var10, var9);
            var9 = _closure1_slot14;
            var9 = var9.LOADING;
            var21 = var10 === var9;
 1805:
            var10 = var7;
            var9 = var6;
            var7 = var28;
            var18 = var8;
            var6 = var3;
            _fun0002_ip = 2666; continue _fun0002;
 1825:
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
            var30 = 15;
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
            _fun0002_ip = 2666; continue _fun0002;
 1938:
            if(!(var4 != var29)) { _fun0002_ip = 1961; continue _fun0002 }
 1942:
            var3 = var29.details;
            if(!(var4 != var3)) { _fun0002_ip = 1961; continue _fun0002 }
 1952:
            var3 = var29.state;
            if(!(var4 == var3)) { _fun0002_ip = 1968; continue _fun0002 }
 1961:
            var3 = var2.name;
            _fun0002_ip = 2067; continue _fun0002;
 1968:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var22 = 15;
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
 2067:
            var33 = _closure1_slot0;
            var22 = _closure1_slot2;
            var32 = 15;
            var30 = var22[var32];
            var30 = var33.bind(var12)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var22 = var22[var32];
            var22 = var33.bind(var12)(var22);
            var22 = var22.t;
            var22 = var22.sTo7s7;
            var30 = var30.bind(var31)(var22);
            if(var17) { _fun0002_ip = 2592; continue _fun0002 }
 2130:
            var31 = _closure1_slot1;
            var33 = _closure1_slot2;
            var22 = 29;
            var22 = var33[var22];
            var31 = var31.bind(var12)(var22);
            var22 = var2.id;
            var31 = var31.bind(var12)(var29, var22);
            var33 = var4 != var31;
            var22 = undefined;
            if(!var33) { _fun0002_ip = 2173; continue _fun0002 }
 2170:
            var22 = var31;
 2173:
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
            if(var37) { _fun0002_ip = 2253; continue _fun0002 }
 2247:
            var34 = var35.party;
 2253:
            var34 = var4 != var34;
            if(!var34) { _fun0002_ip = 2304; continue _fun0002 }
 2260:
            var39 = var4 == var29;
            var37 = undefined;
            if(var39) { _fun0002_ip = 2289; continue _fun0002 }
 2269:
            var39 = var29.party;
            var40 = var4 == var39;
            var37 = undefined;
            if(var40) { _fun0002_ip = 2289; continue _fun0002 }
 2284:
            var37 = var39.id;
 2289:
            var35 = var35.party;
            var35 = var35.id;
            var34 = var37 === var35;
 2304:
            var37 = var4 == var38;
            var35 = undefined;
            if(var37) { _fun0002_ip = 2318; continue _fun0002 }
 2313:
            var35 = var38.userId;
 2318:
            var35 = var4 != var35;
            if(!var35) { _fun0002_ip = 2348; continue _fun0002 }
 2325:
            var39 = var4 == var38;
            var37 = undefined;
            if(var39) { _fun0002_ip = 2339; continue _fun0002 }
 2334:
            var37 = var38.userId;
 2339:
            var36 = var36.id;
            var35 = var37 === var36;
 2348:
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
            if(var31) { _fun0002_ip = 2469; continue _fun0002 }
 2403:
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
            _fun0002_ip = 2536; continue _fun0002;
 2469:
            var31 = var35;
            if(var35) { _fun0002_ip = 2478; continue _fun0002 }
 2475:
            var31 = var34;
 2478:
            var36 = var37;
            if(!var31) { _fun0002_ip = 2536; continue _fun0002 }
 2484:
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
 2536:
            var31 = {};
            var31['label'] = var36;
            if(var33) { _fun0002_ip = 2548; continue _fun0002 }
 2545:
            var33 = var35;
 2548:
            if(var33) { _fun0002_ip = 2554; continue _fun0002 }
 2551:
            var33 = var34;
 2554:
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
            _fun0002_ip = 2666; continue _fun0002;
 2592:
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
 2666:
            var3 = new Array(0);
            if(!(var4 == var25)) { _fun0002_ip = 2734; continue _fun0002 }
 2674:
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var8 = 30;
            var8 = var26[var8];
            var26 = var22.bind(var12)(var8);
            var22 = var26.getJoinFromSupportedPlatformsIconKeys;
            var8 = {};
            var30 = var4 == var29;
            var28 = undefined;
            if(var30) { _fun0002_ip = 2717; continue _fun0002 }
 2711:
            var28 = var29.supported_platforms;
 2717:
            var8['platforms'] = var28;
            var8['currentPlatform'] = var27;
            var8 = var22.bind(var26)(var8);
            _fun0002_ip = 2784; continue _fun0002;
 2734:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 30;
            var22 = var27[var22];
            var22 = var26.bind(var12)(var22);
            var22 = var22.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var25 = var22[var25];
            var8 = var3;
            if(!(var4 != var25)) { _fun0002_ip = 2784; continue _fun0002 }
 2771:
            var22 = var3.push;
            var22 = var22.bind(var3)(var25);
            var8 = var3;
 2784:
            var3 = var4 != var18;
            var22 = undefined;
            if(!var3) { _fun0002_ip = 2796; continue _fun0002 }
 2793:
            var22 = var18;
 2796:
            var3 = {};
            var3['ctaButtonEnabled'] = var24;
            var3['ctaButtonText'] = var23;
            var3['ctaButtonIsLoading'] = var21;
            var3['footerLabel'] = var20;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 28;
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
            if(!(!(var11 > var15))) { _fun0002_ip = 2893; continue _fun0002 }
 2888:
            var11 = var13.length;
 2893:
            var3['maxPartySize'] = var11;
            var3['partyMemberAvatarURIs'] = var10;
            var3['partySizeText'] = var9;
            var3['platformIconKeys'] = var8;
            var3['subtitle'] = var7;
            var3['title'] = var6;
            return var3;
 2924:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0002_ip = 2987; continue _fun0002 }
 2938:
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
 2987:
            var3 = var4 != var7;
            var8 = undefined;
            if(!var3) { _fun0002_ip = 2999; continue _fun0002 }
 2996:
            var8 = var7;
 2999:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 28;
            var3 = var13[var3];
            var6 = var9.bind(var12)(var3);
            var3 = var6.getAppGradientColors;
            var8 = var3.bind(var6)(var8);
            var6 = _closure1_slot20;
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
            var1 = 31;
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
            var8 = 15;
            var8 = var13[var8];
            var8 = var9.bind(var12)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = 32;
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