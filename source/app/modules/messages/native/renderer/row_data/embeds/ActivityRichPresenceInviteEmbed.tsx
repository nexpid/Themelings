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
    var1 = function getGameButtonState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = var3.canJoin;
            var5 = var3.remoteJoinPlatform;
            var7 = var3.canSendInvite;
            var1 = var3.isInParty;
            var6 = var3.currentUserId;
            var4 = var3.messageAuthorId;
            if(var2) { _fun0002_ip = 294; continue _fun0002 }
 45:
            var2 = {};
            if(var7) { _fun0002_ip = 215; continue _fun0002 }
 56:
            if(var1) { _fun0002_ip = 138; continue _fun0002 }
 59:
            var10 = undefined;
            var2['label'] = var10;
            var1 = false;
            var2['disabled'] = var1;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 14;
            var7 = var11[var1];
            var7 = var9.bind(var10)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var11[var1];
            var1 = var9.bind(var10)(var1);
            var1 = var1.t;
            var1 = var1.OAB5TE;
            var1 = var7.bind(var8)(var1);
            var2['footerLabel'] = var1;
            var1 = var2;
            _fun0002_ip = 213; continue _fun0002;
 138:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 14;
            var9 = var12[var8];
            var7 = undefined;
            var9 = var11.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.KC26NT;
            var8 = var9.bind(var10)(var8);
            var2['label'] = var8;
            var8 = true;
            var2['disabled'] = var8;
            var2['footerLabel'] = var7;
            var1 = var2;
 213:
            _fun0002_ip = 292; continue _fun0002;
 215:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 14;
            var8 = var11[var7];
            var3 = undefined;
            var8 = var10.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.hC/Ze3;
            var7 = var8.bind(var9)(var7);
            var2['label'] = var7;
            var4 = var4 === var6;
            var2['disabled'] = var4;
            var2['footerLabel'] = var3;
            var1 = var2;
 292:
            return var1;
 294:
            var1 = null;
            var1 = var1 != var5;
            var7 = undefined;
            var2 = undefined;
            if(!var1) { _fun0002_ip = 713; continue _fun0002 }
 310:
            var1 = _closure1_slot16;
            var1 = var1.DESKTOP;
            if(!(var1 !== var5)) { _fun0002_ip = 653; continue _fun0002 }
 330:
            var1 = _closure1_slot16;
            var1 = var1.IOS;
            if(!(var1 !== var5)) { _fun0002_ip = 594; continue _fun0002 }
 347:
            var1 = _closure1_slot16;
            var1 = var1.ANDROID;
            if(!(var1 !== var5)) { _fun0002_ip = 535; continue _fun0002 }
 364:
            var1 = _closure1_slot16;
            var1 = var1.XBOX;
            if(!(var1 !== var5)) { _fun0002_ip = 473; continue _fun0002 }
 378:
            var1 = _closure1_slot16;
            var1 = var1.PS4;
            if(!(var1 !== var5)) { _fun0002_ip = 411; continue _fun0002 }
 392:
            var1 = _closure1_slot16;
            var4 = var1.PS5;
            var1 = undefined;
            if(!(var4 === var5)) { _fun0002_ip = 710; continue _fun0002 }
 411:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 14;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.R/1GpK;
            var1 = var5.bind(var6)(var4);
            _fun0002_ip = 710; continue _fun0002;
 473:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 14;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.o0hjdn;
            var1 = var5.bind(var6)(var4);
            _fun0002_ip = 710; continue _fun0002;
 535:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 14;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.fMs6ub;
            var1 = var5.bind(var6)(var4);
            _fun0002_ip = 710; continue _fun0002;
 594:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 14;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.CyQ5iY;
            var1 = var5.bind(var6)(var4);
            _fun0002_ip = 710; continue _fun0002;
 653:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.aqN8U1;
            var1 = var4.bind(var5)(var3);
 710:
            var2 = var1;
 713:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.VJlc0d;
            var3 = var4.bind(var5)(var3);
            var1['label'] = var3;
            var3 = false;
            var1['disabled'] = var3;
            var1['footerLabel'] = var2;
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
    var4 = 32;
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
            var2 = 15;
            var2 = var4[var2];
            var12 = undefined;
            var3 = var3.bind(var12)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0003_ip = 270; continue _fun0003 }
 53:
            var2 = var5.author;
            var4 = null;
            if(!(var4 != var2)) { _fun0003_ip = 270; continue _fun0003 }
 68:
            var2 = var5.activity;
            if(!(var4 != var2)) { _fun0003_ip = 270; continue _fun0003 }
 81:
            if(!(var4 != var14)) { _fun0003_ip = 270; continue _fun0003 }
 88:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var3 = var3.bind(var12)(var2);
            var2 = var3.getApplicationFromMessage;
            var2 = var2.bind(var3)(var5);
            var3 = var5.application;
            var7 = var4 == var3;
            var10 = undefined;
            if(var7) { _fun0003_ip = 138; continue _fun0003 }
 133:
            var10 = var3.id;
 138:
            var7 = var4 != var10;
            var3 = null;
            if(!var7) { _fun0003_ip = 162; continue _fun0003 }
 147:
            var8 = _closure1_slot3;
            var7 = var8.getApplication;
            var3 = var7.bind(var8)(var10);
 162:
            var7 = var4 == var3;
            if(!var7) { _fun0003_ip = 173; continue _fun0003 }
 169:
            var7 = var4 != var10;
 173:
            if(!var7) { _fun0003_ip = 197; continue _fun0003 }
 176:
            var9 = _closure1_slot3;
            var8 = var9.isFetchingApplication;
            var9 = var8.bind(var9)(var10);
            var8 = false;
            var7 = var8 === var9;
 197:
            if(!var7) { _fun0003_ip = 234; continue _fun0003 }
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
            if(!(var4 != var3)) { _fun0003_ip = 241; continue _fun0003 }
 238:
            var2 = var3;
 241:
            var7 = _closure1_slot7;
            var3 = var7.getId;
            var31 = var3.bind(var7)();
            var3 = _closure1_slot20;
            var29 = var3.bind(var12)(var5, var14, var31);
            if(!(var4 == var2)) { _fun0003_ip = 272; continue _fun0003 }
 270:
            return var12;
 272:
            var3 = var5.activity;
            var8 = var4 == var3;
            var7 = undefined;
            if(var8) { _fun0003_ip = 292; continue _fun0003 }
 287:
            var7 = var3.type;
 292:
            var3 = _closure1_slot15;
            var3 = var3.STREAM_REQUEST;
            if(!(var7 !== var3)) { _fun0003_ip = 2536; continue _fun0003 }
 309:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = 17;
            var3 = var3[var22];
            var9 = var7.bind(var12)(var3);
            var8 = var9.getHeaderText;
            var7 = var2.name;
            var10 = var5.activity;
            var11 = var4 == var10;
            var3 = undefined;
            if(var11) { _fun0003_ip = 360; continue _fun0003 }
 355:
            var3 = var10.type;
 360:
            var19 = var8.bind(var9)(var7, var3);
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 18;
            var7 = var3[var7];
            var8 = var8.bind(var12)(var7);
            var7 = var2.id;
            var7 = var8.bind(var12)(var29, var5, var7);
            var17 = !var7;
            if(!(var4 != var29)) { _fun0003_ip = 469; continue _fun0003 }
 405:
            var7 = var29.party;
            if(!(var4 != var7)) { _fun0003_ip = 469; continue _fun0003 }
 415:
            var7 = global;
            var9 = var7.Array;
            var8 = var9.from;
            var11 = _closure1_slot8;
            var10 = var11.getParty;
            var7 = var29.party;
            var7 = var7.id;
            var7 = var10.bind(var11)(var7);
            if(!(var4 == var7)) { _fun0003_ip = 462; continue _fun0003 }
 458:
            var7 = new Array(0);
 462:
            var13 = var8.bind(var9)(var7);
            _fun0003_ip = 473; continue _fun0003;
 469:
            var13 = new Array(0);
 473:
            var7 = _closure1_slot0;
            var8 = 19;
            var8 = var3[var8];
            var9 = var7.bind(var12)(var8);
            var8 = var9.getPartySize;
            var8 = var8.bind(var9)(var29);
            var11 = var8.maxPartySize;
            var8 = 20;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0003_ip = 574; continue _fun0003 }
 531:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var7 = var7.bind(var12)(var3);
            var3 = var7.isAndroid;
            var3 = var3.bind(var7)();
            var27 = undefined;
            if(!var3) { _fun0003_ip = 584; continue _fun0003 }
 562:
            var3 = _closure1_slot16;
            var27 = var3.ANDROID;
            _fun0003_ip = 584; continue _fun0003;
 574:
            var3 = _closure1_slot16;
            var27 = var3.IOS;
 584:
            var8 = _closure1_slot9;
            var7 = var8.getApplicationActivity;
            var3 = var2.id;
            var7 = var7.bind(var8)(var3);
            if(!(var4 == var7)) { _fun0003_ip = 631; continue _fun0003 }
 608:
            var10 = _closure1_slot11;
            var9 = var10.getApplicationActivity;
            var8 = var2.id;
            var3 = true;
            var7 = var9.bind(var10)(var8, var3);
 631:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 21;
            var3 = var9[var3];
            var10 = var8.bind(var12)(var3);
            var3 = var10.getIsInParty;
            var18 = var3.bind(var10)(var7, var29);
            var3 = 22;
            var3 = var9[var3];
            var8 = var8.bind(var12)(var3);
            var3 = var8.getCanSendInvite;
            var45 = var8;
            var44 = var29;
            var43 = var5;
            var42 = var2;
            var41 = var31;
            var20 = var45[var3](var44, var43, var42, var41, var40);
            var3 = global;
            var9 = var3.Set;
            var8 = var4 == var29;
            var21 = var7;
            var7 = undefined;
            if(var8) { _fun0003_ip = 726; continue _fun0003 }
 720:
            var7 = var29.supported_platforms;
 726:
            if(!(var4 == var7)) { _fun0003_ip = 734; continue _fun0003 }
 730:
            var7 = new Array(0);
 734:
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var45 = var8;
            var44 = var7;
            var7 = new var45[var9](var44, var43);
            var8 = var7 instanceof Object ? var7 : var8;
            var16 = var4 != var27;
            if(!var16) { _fun0003_ip = 774; continue _fun0003 }
 764:
            var7 = var8.has;
            var16 = var7.bind(var8)(var27);
 774:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 23;
            var7 = var9[var7];
            var10 = var8.bind(var12)(var7);
            var7 = var10.canLaunchFrame;
            var10 = var7.bind(var10)(var2);
            var7 = 24;
            var7 = var9[var7];
            var15 = var8.bind(var12)(var7);
            var7 = var15.isEmbeddedApp;
            var15 = var7.bind(var15)(var2);
            var7 = 25;
            var7 = var9[var7];
            var9 = var8.bind(var12)(var7);
            var8 = var9.getCanJoin;
            var7 = {};
            var7['presenceActivity'] = var29;
            var7['currentUserPresenceActivity'] = var21;
            var7['currentUserId'] = var31;
            var7['message'] = var5;
            var7['application'] = var2;
            var7['isEmbeddedApplication'] = var15;
            var7['isFrameApplication'] = var10;
            var7['isGameLaunchable'] = var16;
            var7 = var8.bind(var9)(var7);
            var21 = var7.canJoin;
            var25 = var7.remoteJoinPlatform;
            var8 = _closure1_slot18;
            var9 = var4 == var29;
            var7 = undefined;
            if(var9) { _fun0003_ip = 936; continue _fun0003 }
 916:
            var9 = var29.party;
            var10 = var4 == var9;
            var7 = undefined;
            if(var10) { _fun0003_ip = 936; continue _fun0003 }
 931:
            var7 = var9.id;
 936:
            var15 = var8.bind(var12)(var7);
            if(var15) { _fun0003_ip = 962; continue _fun0003 }
 944:
            var8 = var2.id;
            var7 = _closure1_slot5;
            var7 = var7.id;
            var15 = var8 === var7;
 962:
            var7 = var4 == var29;
            var23 = undefined;
            if(var7) { _fun0003_ip = 991; continue _fun0003 }
 971:
            var7 = var29.timestamps;
            var8 = var4 == var7;
            var23 = undefined;
            if(var8) { _fun0003_ip = 991; continue _fun0003 }
 986:
            var23 = var7.start;
 991:
            if(!(var4 == var23)) { _fun0003_ip = 1013; continue _fun0003 }
 995:
            var8 = var4 == var29;
            var7 = undefined;
            if(var8) { _fun0003_ip = 1010; continue _fun0003 }
 1004:
            var7 = var29.created_at;
 1010:
            var23 = var7;
 1013:
            var7 = var4 == var29;
            var10 = undefined;
            if(var7) { _fun0003_ip = 1042; continue _fun0003 }
 1022:
            var7 = var29.timestamps;
            var8 = var4 == var7;
            var10 = undefined;
            if(var8) { _fun0003_ip = 1042; continue _fun0003 }
 1037:
            var10 = var7.end;
 1042:
            var7 = var4 != var23;
            var26 = '';
            var28 = var26;
            if(!var7) { _fun0003_ip = 1113; continue _fun0003 }
 1056:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 26;
            var7 = var9[var7];
            var9 = var8.bind(var12)(var7);
            var8 = var9.formatActiveTimestamp;
            var7 = {};
            var7['start'] = var23;
            var7['end'] = var10;
            var10 = var3.Date;
            var3 = var10.now;
            var3 = var3.bind(var10)();
            var28 = var8.bind(var9)(var7, var3);
 1113:
            var3 = var2.icon;
            var3 = var4 != var3;
            var8 = null;
            if(!var3) { _fun0003_ip = 1176; continue _fun0003 }
 1127:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 27;
            var3 = var9[var3];
            var23 = var7.bind(var12)(var3);
            var10 = var23.getAppIconSrc;
            var9 = var2.id;
            var7 = var2.icon;
            var3 = var2.bot;
            var8 = var10.bind(var23)(var9, var7, var3);
 1176:
            var3 = var2.name;
            if(var15) { _fun0003_ip = 1550; continue _fun0003 }
 1187:
            if(var17) { _fun0003_ip = 1437; continue _fun0003 }
 1193:
            var7 = var13.map;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getUser;
                    var1 = arg1;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var7)) { _fun0004_ip = 67; continue _fun0004 }
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
                    if(var4) { _fun0004_ip = 113; continue _fun0004 }
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
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var22];
            var10 = var9.bind(var12)(var6);
            var9 = var10.getPartyText;
            var6 = {};
            var6['maxPartySize'] = var11;
            var23 = var13.length;
            var6['partySize'] = var23;
            var24 = var5.activity;
            var30 = var4 == var24;
            var23 = undefined;
            if(var30) { _fun0003_ip = 1270; continue _fun0003 }
 1265:
            var23 = var24.type;
 1270:
            var6['activityActionType'] = var23;
            var6 = var9.bind(var10)(var6);
            var10 = _closure1_slot21;
            var9 = {};
            var9['canJoin'] = var21;
            var9['remoteJoinPlatform'] = var25;
            var9['canSendInvite'] = var20;
            var9['isInParty'] = var18;
            var18 = var5.author;
            var18 = var18.id;
            var9['messageAuthorId'] = var18;
            var9['currentUserId'] = var31;
            var9 = var10.bind(var12)(var9);
            var23 = var9.label;
            var10 = var9.disabled;
            var24 = !var10;
            var20 = var9.footerLabel;
            var21 = var4 != var29;
            if(!var21) { _fun0003_ip = 1368; continue _fun0003 }
 1358:
            var9 = var29.application_id;
            var21 = var4 != var9;
 1368:
            if(!var21) { _fun0003_ip = 1417; continue _fun0003 }
 1371:
            var30 = _closure1_slot13;
            var18 = var30.getState;
            var10 = var29.application_id;
            var9 = _closure1_slot15;
            var9 = var9.JOIN;
            var10 = var18.bind(var30)(var10, var9);
            var9 = _closure1_slot14;
            var9 = var9.LOADING;
            var21 = var10 === var9;
 1417:
            var10 = var7;
            var9 = var6;
            var7 = var28;
            var18 = var8;
            var6 = var3;
            _fun0003_ip = 2278; continue _fun0003;
 1437:
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
            var30 = 14;
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
            _fun0003_ip = 2278; continue _fun0003;
 1550:
            if(!(var4 != var29)) { _fun0003_ip = 1573; continue _fun0003 }
 1554:
            var3 = var29.details;
            if(!(var4 != var3)) { _fun0003_ip = 1573; continue _fun0003 }
 1564:
            var3 = var29.state;
            if(!(var4 == var3)) { _fun0003_ip = 1580; continue _fun0003 }
 1573:
            var3 = var2.name;
            _fun0003_ip = 1679; continue _fun0003;
 1580:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var22 = 14;
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
 1679:
            var33 = _closure1_slot0;
            var22 = _closure1_slot2;
            var32 = 14;
            var30 = var22[var32];
            var30 = var33.bind(var12)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var22 = var22[var32];
            var22 = var33.bind(var12)(var22);
            var22 = var22.t;
            var22 = var22.sTo7s7;
            var30 = var30.bind(var31)(var22);
            if(var17) { _fun0003_ip = 2204; continue _fun0003 }
 1742:
            var31 = _closure1_slot1;
            var33 = _closure1_slot2;
            var22 = 28;
            var22 = var33[var22];
            var31 = var31.bind(var12)(var22);
            var22 = var2.id;
            var31 = var31.bind(var12)(var29, var22);
            var33 = var4 != var31;
            var22 = undefined;
            if(!var33) { _fun0003_ip = 1785; continue _fun0003 }
 1782:
            var22 = var31;
 1785:
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
            if(var37) { _fun0003_ip = 1865; continue _fun0003 }
 1859:
            var34 = var35.party;
 1865:
            var34 = var4 != var34;
            if(!var34) { _fun0003_ip = 1916; continue _fun0003 }
 1872:
            var39 = var4 == var29;
            var37 = undefined;
            if(var39) { _fun0003_ip = 1901; continue _fun0003 }
 1881:
            var39 = var29.party;
            var40 = var4 == var39;
            var37 = undefined;
            if(var40) { _fun0003_ip = 1901; continue _fun0003 }
 1896:
            var37 = var39.id;
 1901:
            var35 = var35.party;
            var35 = var35.id;
            var34 = var37 === var35;
 1916:
            var37 = var4 == var38;
            var35 = undefined;
            if(var37) { _fun0003_ip = 1930; continue _fun0003 }
 1925:
            var35 = var38.userId;
 1930:
            var35 = var4 != var35;
            if(!var35) { _fun0003_ip = 1960; continue _fun0003 }
 1937:
            var39 = var4 == var38;
            var37 = undefined;
            if(var39) { _fun0003_ip = 1951; continue _fun0003 }
 1946:
            var37 = var38.userId;
 1951:
            var36 = var36.id;
            var35 = var37 === var36;
 1960:
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
            if(var31) { _fun0003_ip = 2081; continue _fun0003 }
 2015:
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
            _fun0003_ip = 2148; continue _fun0003;
 2081:
            var31 = var35;
            if(var35) { _fun0003_ip = 2090; continue _fun0003 }
 2087:
            var31 = var34;
 2090:
            var36 = var37;
            if(!var31) { _fun0003_ip = 2148; continue _fun0003 }
 2096:
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
 2148:
            var31 = {};
            var31['label'] = var36;
            if(var33) { _fun0003_ip = 2160; continue _fun0003 }
 2157:
            var33 = var35;
 2160:
            if(var33) { _fun0003_ip = 2166; continue _fun0003 }
 2163:
            var33 = var34;
 2166:
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
            _fun0003_ip = 2278; continue _fun0003;
 2204:
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
 2278:
            var3 = new Array(0);
            if(!(var4 == var25)) { _fun0003_ip = 2346; continue _fun0003 }
 2286:
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var8 = 29;
            var8 = var26[var8];
            var26 = var22.bind(var12)(var8);
            var22 = var26.getJoinFromSupportedPlatformsIconKeys;
            var8 = {};
            var30 = var4 == var29;
            var28 = undefined;
            if(var30) { _fun0003_ip = 2329; continue _fun0003 }
 2323:
            var28 = var29.supported_platforms;
 2329:
            var8['platforms'] = var28;
            var8['currentPlatform'] = var27;
            var8 = var22.bind(var26)(var8);
            _fun0003_ip = 2396; continue _fun0003;
 2346:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 29;
            var22 = var27[var22];
            var22 = var26.bind(var12)(var22);
            var22 = var22.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var25 = var22[var25];
            var8 = var3;
            if(!(var4 != var25)) { _fun0003_ip = 2396; continue _fun0003 }
 2383:
            var22 = var3.push;
            var22 = var22.bind(var3)(var25);
            var8 = var3;
 2396:
            var3 = var4 != var18;
            var22 = undefined;
            if(!var3) { _fun0003_ip = 2408; continue _fun0003 }
 2405:
            var22 = var18;
 2408:
            var3 = {};
            var3['ctaButtonEnabled'] = var24;
            var3['ctaButtonText'] = var23;
            var3['ctaButtonIsLoading'] = var21;
            var3['footerLabel'] = var20;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 27;
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
            if(!(!(var11 > var15))) { _fun0003_ip = 2505; continue _fun0003 }
 2500:
            var11 = var13.length;
 2505:
            var3['maxPartySize'] = var11;
            var3['partyMemberAvatarURIs'] = var10;
            var3['partySizeText'] = var9;
            var3['platformIconKeys'] = var8;
            var3['subtitle'] = var7;
            var3['title'] = var6;
            return var3;
 2536:
            var3 = var2.icon;
            var3 = var4 != var3;
            var7 = null;
            if(!var3) { _fun0003_ip = 2599; continue _fun0003 }
 2550:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 27;
            var3 = var8[var3];
            var10 = var6.bind(var12)(var3);
            var9 = var10.getAppIconSrc;
            var8 = var2.id;
            var6 = var2.icon;
            var3 = var2.bot;
            var7 = var9.bind(var10)(var8, var6, var3);
 2599:
            var3 = var4 != var7;
            var8 = undefined;
            if(!var3) { _fun0003_ip = 2611; continue _fun0003 }
 2608:
            var8 = var7;
 2611:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 27;
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
            var1 = 18;
            var1 = var13[var1];
            var3 = var11.bind(var12)(var1);
            var1 = var2.id;
            var6 = var3.bind(var12)(var6, var5, var1);
            var1 = 17;
            var1 = var13[var1];
            var10 = var9.bind(var12)(var1);
            var3 = var10.getRequestToStreamText;
            var1 = var15.getId;
            var1 = var1.bind(var15)();
            var3 = var3.bind(var10)(var5, var14, var1);
            var1 = 30;
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
            var8 = 14;
            var8 = var13[var8];
            var8 = var9.bind(var12)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = 31;
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