// app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
                var1 = _closure1_slot17;
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
    var1 = function createRichPresenceDisplayActivityInviteEmbed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var14 = arg2;
            var _closure2_slot0 = var14;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 18;
            var1 = var4[var1];
            var11 = undefined;
            var2 = var2.bind(var11)(var1);
            var1 = var2.getApplicationFromMessage;
            var2 = var1.bind(var2)(var5);
            var1 = var5.application;
            var4 = null;
            var6 = var4 == var1;
            var10 = undefined;
            if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var10 = var1.id;
case 15:
            var6 = var4 != var10;
            var1 = null;
            if(!var6) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = _closure1_slot3;
            var6 = var8.getApplication;
            var1 = var6.bind(var8)(var10);
case 17:
            var6 = var4 == var1;
            if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = var4 != var10;
case 19:
            if(!var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var9 = _closure1_slot3;
            var8 = var9.isFetchingApplication;
            var9 = var8.bind(var9)(var10);
            var8 = false;
            var6 = var8 === var9;
case 21:
            if(!var6) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 14;
            var6 = var9[var6];
            var9 = var8.bind(var11)(var6);
            var8 = var9.fetchApplication;
            var6 = false;
            var6 = var8.bind(var9)(var10, var6);
case 23:
            if(!(var4 != var1)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var2 = var1;
case 25:
            var6 = _closure1_slot7;
            var1 = var6.getId;
            var35 = var1.bind(var6)();
            var1 = _closure1_slot21;
            var29 = var1.bind(var11)(var5, var14, var35);
            if(!(var4 == var2)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            return var11;
case 27:
            var1 = var5.activity;
            var8 = var4 == var1;
            var6 = undefined;
            if(var8) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var6 = var1.type;
case 29:
            var1 = _closure1_slot16;
            var1 = var1.STREAM_REQUEST;
            if(!(var6 !== var1)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 19;
            var1 = var8[var1];
            var6 = var6.bind(var11)(var1);
            var1 = var2.id;
            var1 = var6.bind(var11)(var29, var5, var1);
            var26 = !var1;
            var6 = _closure1_slot0;
            var1 = 20;
            var1 = var8[var1];
            var6 = var6.bind(var11)(var1);
            var1 = var6.getIsAskToJoin;
            var13 = var1.bind(var6)(var5);
            var6 = var5.activity;
            var8 = var4 == var6;
            var1 = undefined;
            if(var8) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var1 = var6.name_override;
case 33:
            if(!(var4 == var1)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var1 = var2.name;
case 35:
            var8 = var5.activity;
            var9 = var4 == var8;
            var6 = undefined;
            if(var9) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var6 = var8.icon_override;
case 37:
            var6 = var4 != var6;
            var9 = null;
            if(!var6) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 21;
            var6 = var10[var6];
            var12 = var8.bind(var11)(var6);
            var10 = var12.getAssetImage;
            var8 = var2.id;
            var6 = var5.activity;
            var6 = var6.icon_override;
            var9 = var10.bind(var12)(var8, var6);
case 39:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var10 = 22;
            var6 = var6[var10];
            var12 = var8.bind(var11)(var6);
            var8 = var12.getHeaderText;
            var15 = var5.activity;
            var16 = var4 == var15;
            var6 = undefined;
            if(var16) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var6 = var15.type;
case 41:
            var32 = var8.bind(var12)(var1, var6, var26);
            if(!(var4 != var29)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = var29.party;
            if(!(var4 != var6)) { _fun0002_ip = 43; continue _fun0002 }
case 45:
            var6 = global;
            var12 = var6.Array;
            var8 = var12.from;
            var16 = _closure1_slot8;
            var15 = var16.getParty;
            var6 = var29.party;
            var6 = var6.id;
            var6 = var15.bind(var16)(var6);
            if(!(var4 == var6)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var6 = new Array(0);
case 46:
            var16 = var8.bind(var12)(var6);
            _fun0002_ip = 48; continue _fun0002;
case 43:
            var16 = new Array(0);
case 48:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 23;
            var6 = var12[var6];
            var15 = var8.bind(var11)(var6);
            var6 = var15.getPartySize;
            var6 = var6.bind(var15)(var29);
            var15 = var6.maxPartySize;
            var6 = 24;
            var6 = var12[var6];
            var17 = var8.bind(var11)(var6);
            var6 = var17.getCurrentActivityGamePlatform;
            var30 = var6.bind(var17)();
            var17 = _closure1_slot1;
            var6 = 25;
            var6 = var12[var6];
            var19 = var17.bind(var11)(var6);
            var18 = _closure1_slot9;
            var17 = _closure1_slot12;
            var6 = var2.id;
            var23 = var19.bind(var11)(var18, var17, var6);
            var6 = 26;
            var6 = var12[var6];
            var17 = var8.bind(var11)(var6);
            var6 = var17.getIsInParty;
            var19 = var6.bind(var17)(var23, var29);
            var6 = 27;
            var6 = var12[var6];
            var8 = var8.bind(var11)(var6);
            var6 = var8.getCanSendInvite;
            var49 = var8;
            var48 = var29;
            var47 = var5;
            var46 = var2;
            var45 = var35;
            var20 = var49[var6](var48, var47, var46, var45, var44);
            var6 = global;
            var17 = var6.Set;
            var12 = var4 == var29;
            var8 = undefined;
            if(var12) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var8 = var29.supported_platforms;
case 49:
            if(!(var4 == var8)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var8 = new Array(0);
case 51:
            var12 = var17.prototype;
            var12 = Object.create(var12, {constructor: {value: var17}});
            var49 = var12;
            var48 = var8;
            var8 = new var49[var17](var48, var47);
            var12 = var8 instanceof Object ? var8 : var12;
            var8 = var12.has;
            var18 = var8.bind(var12)(var30);
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 28;
            var8 = var17[var8];
            var21 = var12.bind(var11)(var8);
            var8 = var21.canLaunchFrame;
            var21 = var8.bind(var21)(var2);
            var8 = 29;
            var8 = var17[var8];
            var22 = var12.bind(var11)(var8);
            var8 = var22.isEmbeddedApp;
            var22 = var8.bind(var22)(var2);
            var8 = 30;
            var8 = var17[var8];
            var17 = var12.bind(var11)(var8);
            var12 = var17.getCanJoin;
            var8 = {};
            var8['presenceActivity'] = var29;
            var8['currentUserPresenceActivity'] = var23;
            var8['currentUserId'] = var35;
            var8['message'] = var5;
            var8['application'] = var2;
            var8['isEmbeddedApplication'] = var22;
            var8['isFrameApplication'] = var21;
            var8['isGameLaunchable'] = var18;
            var8 = var12.bind(var17)(var8);
            var22 = var8.canJoin;
            var21 = var8.remoteJoinPlatform;
            var12 = _closure1_slot18;
            var17 = var4 == var29;
            var8 = undefined;
            if(var17) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var17 = var29.party;
            var23 = var4 == var17;
            var8 = undefined;
            if(var23) { _fun0002_ip = 53; continue _fun0002 }
case 55:
            var8 = var17.id;
case 53:
            var17 = var12.bind(var11)(var8);
            if(var17) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var12 = var2.id;
            var8 = _closure1_slot5;
            var8 = var8.id;
            var17 = var12 === var8;
case 56:
            var8 = var4 == var29;
            var25 = undefined;
            if(var8) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var8 = var29.timestamps;
            var12 = var4 == var8;
            var25 = undefined;
            if(var12) { _fun0002_ip = 58; continue _fun0002 }
case 60:
            var25 = var8.start;
case 58:
            if(!(var4 == var25)) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var12 = var4 == var29;
            var8 = undefined;
            if(var12) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var8 = var29.created_at;
case 63:
            var25 = var8;
case 61:
            var8 = var4 == var29;
            var24 = undefined;
            if(var8) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var8 = var29.timestamps;
            var12 = var4 == var8;
            var24 = undefined;
            if(var12) { _fun0002_ip = 65; continue _fun0002 }
case 67:
            var24 = var8.end;
case 65:
            var8 = var4 != var25;
            var31 = '';
            var34 = var31;
            if(!var8) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var12 = _closure1_slot0;
            var23 = _closure1_slot2;
            var8 = 31;
            var8 = var23[var8];
            var23 = var12.bind(var11)(var8);
            var12 = var23.formatActiveTimestamp;
            var8 = {};
            var8['start'] = var25;
            var8['end'] = var24;
            var24 = var6.Date;
            var6 = var24.now;
            var6 = var6.bind(var24)();
            var34 = var12.bind(var23)(var8, var6);
case 68:
            if(!(var4 == var9)) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var6 = var2.icon;
            var8 = var4 != var6;
            var6 = null;
            if(!var8) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var12 = _closure1_slot0;
            var23 = _closure1_slot2;
            var8 = 32;
            var8 = var23[var8];
            var25 = var12.bind(var11)(var8);
            var24 = var25.getAppIconSrc;
            var23 = var2.id;
            var12 = var2.icon;
            var8 = var2.bot;
            var6 = var24.bind(var25)(var23, var12, var8);
case 72:
            var9 = var6;
case 70:
            if(var17) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            if(var26) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var6 = var16.map;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = var4.getUser;
                    var1 = arg1;
                    var7 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var7)) { _fun0003_ip = 78; continue _fun0003 }
case 79:
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
case 78:
                    var2 = global;
                    var3 = var2.String;
                    var4 = var1 == var7;
                    var2 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                    var6 = var7.getAvatarURL;
                    var4 = _closure2_slot0;
                    var5 = var4.guild_id;
                    var4 = 64;
                    var1 = var6.bind(var7)(var5, var4);
case 80:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var6 = var6.bind(var16)(var3);
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var12 = var8.bind(var11)(var3);
            var8 = var12.getPartyText;
            var3 = {};
            var3['maxPartySize'] = var15;
            var23 = var16.length;
            var3['partySize'] = var23;
            var24 = var5.activity;
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var23 = var24.type;
case 82:
            var3['activityActionType'] = var23;
            var3 = var8.bind(var12)(var3);
            var8 = var4 == var29;
            var12 = undefined;
            if(var8) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var12 = var29.details;
case 84:
            var23 = var4 != var12;
            if(!var23) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var23 = var31 !== var12;
case 86:
            var8 = null;
            if(!var23) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var8 = var12;
case 88:
            var12 = {};
            var12['canJoin'] = var22;
            var12['remoteJoinPlatform'] = var21;
            var12['canSendInvite'] = var20;
            var12['isInParty'] = var19;
            var12['message'] = var5;
            var12['currentUserId'] = var35;
            var12['applicationName'] = var1;
            var12['isAskToJoin'] = var13;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 35;
            var13 = var20[var13];
            var22 = var19.bind(var11)(var13);
            var13 = var22.getSupportsRemoteJoin;
            var13 = var13.bind(var22)(var29);
            var12['supportsRemoteJoin'] = var13;
            var13 = 36;
            var13 = var20[var13];
            var19 = var19.bind(var11)(var13);
            var13 = var19.getShouldShowAppAuthPrompt;
            var13 = var13.bind(var19)(var2);
            var12['canPromptAuth'] = var13;
            var27 = var12.canJoin;
            var22 = var12.remoteJoinPlatform;
            var25 = var12.canSendInvite;
            var24 = var12.isInParty;
            var20 = var12.currentUserId;
            var19 = var12.message;
            var28 = var12.applicationName;
            var23 = var12.isAskToJoin;
            var13 = var12.supportsRemoteJoin;
            var12 = var12.canPromptAuth;
            if(var27) { _fun0002_ip = 90; continue _fun0002 }
case 91:
            if(var25) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            if(var24) { _fun0002_ip = 94; continue _fun0002 }
case 95:
            if(var23) { _fun0002_ip = 96; continue _fun0002 }
case 97:
            if(!var13) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            if(var12) { _fun0002_ip = 100; continue _fun0002 }
case 98:
            var12 = {};
            var12['label'] = var11;
            var13 = false;
            var12['disabled'] = var13;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var13 = 16;
            var23 = var27[var13];
            var23 = var25.bind(var11)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var13 = var27[var13];
            var13 = var25.bind(var11)(var13);
            var13 = var13.t;
            var13 = var13.OAB5TK;
            var13 = var23.bind(var24)(var13);
            var12['footerLabel'] = var13;
            _fun0002_ip = 101; continue _fun0002;
case 100:
            var13 = {};
            var27 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 16;
            var24 = var33[var23];
            var24 = var27.bind(var11)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var33[var23];
            var23 = var27.bind(var11)(var23);
            var23 = var23.t;
            var23 = var23.lw71Nf;
            var23 = var24.bind(var25)(var23);
            var13['label'] = var23;
            var23 = false;
            var13['disabled'] = var23;
            var13['footerLabel'] = var11;
            var12 = var13;
case 101:
            _fun0002_ip = 102; continue _fun0002;
case 96:
            var13 = {};
            var13['label'] = var11;
            var23 = false;
            var13['disabled'] = var23;
            var24 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 16;
            var25 = var33[var23];
            var25 = var24.bind(var11)(var25);
            var27 = var25.intl;
            var25 = var27.formatToPlainString;
            var23 = var33[var23];
            var23 = var24.bind(var11)(var23);
            var23 = var23.t;
            var24 = var23.gYVkSW;
            var23 = {};
            var33 = var19.author;
            var33 = var33.globalName;
            var23['username'] = var33;
            var23['appName'] = var28;
            var23 = var25.bind(var27)(var24, var23);
            var13['footerLabel'] = var23;
            var12 = var13;
case 102:
            _fun0002_ip = 103; continue _fun0002;
case 94:
            var13 = {};
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 16;
            var24 = var28[var23];
            var24 = var27.bind(var11)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var28[var23];
            var23 = var27.bind(var11)(var23);
            var23 = var23.t;
            var23 = var23.KC26NR;
            var23 = var24.bind(var25)(var23);
            var13['label'] = var23;
            var23 = true;
            var13['disabled'] = var23;
            var13['footerLabel'] = var11;
            var12 = var13;
case 103:
            _fun0002_ip = 104; continue _fun0002;
case 92:
            var13 = {};
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 16;
            var24 = var28[var23];
            var24 = var27.bind(var11)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var28[var23];
            var23 = var27.bind(var11)(var23);
            var23 = var23.t;
            var23 = var23.hC/Zey;
            var23 = var24.bind(var25)(var23);
            var13['label'] = var23;
            var19 = var19.author;
            var19 = var19.id;
            var19 = var19 === var20;
            var13['disabled'] = var19;
            var13['footerLabel'] = var11;
            var12 = var13;
case 104:
            _fun0002_ip = 105; continue _fun0002;
case 90:
            var13 = var4 != var22;
            var19 = undefined;
            if(!var13) { _fun0002_ip = 106; continue _fun0002 }
case 107:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 15;
            var13 = var23[var13];
            var20 = var20.bind(var11)(var13);
            var13 = var20.getRemoteJoinFooterLabel;
            var19 = var13.bind(var20)(var22);
case 106:
            var13 = {};
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 16;
            var22 = var25[var20];
            var22 = var24.bind(var11)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var25[var20];
            var20 = var24.bind(var11)(var20);
            var20 = var20.t;
            var20 = var20.VJlc0S;
            var20 = var22.bind(var23)(var20);
            var13['label'] = var20;
            var20 = false;
            var13['disabled'] = var20;
            var13['footerLabel'] = var19;
            var12 = var13;
case 105:
            var24 = var12.label;
            var13 = var12.disabled;
            var25 = !var13;
            var22 = var12.footerLabel;
            var23 = var4 != var29;
            if(!var23) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            var12 = var29.application_id;
            var23 = var4 != var12;
case 108:
            if(!var23) { _fun0002_ip = 110; continue _fun0002 }
case 111:
            var20 = _closure1_slot14;
            var19 = var20.getState;
            var13 = var29.application_id;
            var12 = _closure1_slot16;
            var12 = var12.JOIN;
            var13 = var19.bind(var20)(var13, var12);
            var12 = _closure1_slot15;
            var12 = var12.LOADING;
            var23 = var13 === var12;
case 110:
            var20 = var32;
            var13 = var6;
            var12 = var3;
            var6 = var34;
            var28 = false;
            var19 = var9;
            var3 = var1;
            _fun0002_ip = 112; continue _fun0002;
case 76:
            var27 = var2.deepLinkUri;
            var27 = var4 != var27;
            var38 = undefined;
            if(!var27) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var37 = _closure1_slot10;
            var36 = var37.getMessages;
            var33 = var14.id;
            var38 = var36.bind(var37)(var33);
case 113:
            if(!var27) { _fun0002_ip = 115; continue _fun0002 }
case 116:
            if(!(var4 != var38)) { _fun0002_ip = 115; continue _fun0002 }
case 117:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var27 = 34;
            var27 = var36[var27];
            var37 = var33.bind(var11)(var27);
            var36 = var37.isMostRecentDeadEndInvite;
            var48 = var5.id;
            var46 = var2.id;
            var49 = var37;
            var47 = var38;
            var45 = var29;
            var27 = var49[var36](var48, var47, var46, var45, var44);
            if(var27) { _fun0002_ip = 118; continue _fun0002 }
case 115:
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var27 = 16;
            var33 = var39[var27];
            var33 = var38.bind(var11)(var33);
            var37 = var33.intl;
            var36 = var37.string;
            var33 = var39[var27];
            var33 = var38.bind(var11)(var33);
            var33 = var33.t;
            var33 = var33.pkq6Vq;
            var20 = var36.bind(var37)(var33);
            var33 = var39[var27];
            var33 = var38.bind(var11)(var33);
            var36 = var33.intl;
            var33 = var36.string;
            var27 = var39[var27];
            var27 = var38.bind(var11)(var27);
            var27 = var27.t;
            var27 = var27.Sq/E1I;
            var6 = var33.bind(var36)(var27);
            var25 = false;
            var28 = true;
            var24 = undefined;
            var22 = undefined;
            var23 = false;
            var13 = null;
            var12 = var31;
            var8 = null;
            var19 = var9;
            var3 = var1;
            _fun0002_ip = 112; continue _fun0002;
case 118:
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var10 = var38[var10];
            var27 = var37.bind(var11)(var10);
            var10 = var27.getDeadGameInviteText;
            var49 = var27;
            var48 = var5;
            var47 = var1;
            var46 = var14;
            var45 = var35;
            var44 = true;
            var6 = var49[var10](var48, var47, var46, var45, var44, var43);
            var10 = 16;
            var35 = var38[var10];
            var35 = var37.bind(var11)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var10 = var38[var10];
            var10 = var37.bind(var11)(var10);
            var10 = var10.t;
            var10 = var10.s+J8Dl;
            var24 = var35.bind(var36)(var10);
            var23 = false;
            var22 = undefined;
            var20 = var32;
            var25 = true;
            var13 = null;
            var12 = var31;
            var8 = null;
            var28 = false;
            var19 = var9;
            var3 = var1;
            _fun0002_ip = 112; continue _fun0002;
case 74:
            if(!(var4 != var29)) { _fun0002_ip = 119; continue _fun0002 }
case 120:
            var1 = var29.details;
            if(!(var4 != var1)) { _fun0002_ip = 119; continue _fun0002 }
case 121:
            var1 = var29.state;
            if(!(var4 == var1)) { _fun0002_ip = 122; continue _fun0002 }
case 119:
            var1 = var2.name;
            _fun0002_ip = 123; continue _fun0002;
case 122:
            var27 = _closure1_slot0;
            var36 = _closure1_slot2;
            var10 = 16;
            var33 = var36[var10];
            var33 = var27.bind(var11)(var33);
            var35 = var33.intl;
            var33 = var35.formatToPlainString;
            var10 = var36[var10];
            var10 = var27.bind(var11)(var10);
            var10 = var10.t;
            var27 = var10.JCvHtx;
            var10 = {};
            var36 = var29.details;
            var10['track'] = var36;
            var36 = var29.state;
            var10['artist'] = var36;
            var35 = var33.bind(var35)(var27, var10);
            var33 = var35.replace;
            var27 = '\n';
            var10 = ' ';
            var1 = var33.bind(var35)(var27, var10);
case 123:
            var36 = _closure1_slot0;
            var10 = _closure1_slot2;
            var35 = 16;
            var27 = var10[var35];
            var27 = var36.bind(var11)(var27);
            var33 = var27.intl;
            var27 = var33.string;
            var10 = var10[var35];
            var10 = var36.bind(var11)(var10);
            var10 = var10.t;
            var10 = var10.sTo7s3;
            var33 = var27.bind(var33)(var10);
            if(var26) { _fun0002_ip = 124; continue _fun0002 }
case 125:
            var27 = _closure1_slot1;
            var36 = _closure1_slot2;
            var10 = 33;
            var10 = var36[var10];
            var27 = var27.bind(var11)(var10);
            var10 = var2.id;
            var27 = var27.bind(var11)(var29, var10);
            var36 = var4 != var27;
            var10 = undefined;
            if(!var36) { _fun0002_ip = 126; continue _fun0002 }
case 127:
            var10 = var27;
case 126:
            var39 = var5.author;
            var36 = _closure1_slot4;
            var27 = var36.hasConnectedAccount;
            var27 = var27.bind(var36)();
            var37 = _closure1_slot4;
            var36 = var37.getSyncingWith;
            var41 = var36.bind(var37)();
            var37 = _closure1_slot4;
            var36 = var37.getActivity;
            var38 = var36.bind(var37)();
            var37 = var39.id;
            var40 = _closure1_slot7;
            var36 = var40.getId;
            var36 = var36.bind(var40)();
            var36 = var37 === var36;
            var40 = var4 == var38;
            var37 = undefined;
            if(var40) { _fun0002_ip = 128; continue _fun0002 }
case 129:
            var37 = var38.party;
case 128:
            var37 = var4 != var37;
            if(!var37) { _fun0002_ip = 130; continue _fun0002 }
case 131:
            var42 = var4 == var29;
            var40 = undefined;
            if(var42) { _fun0002_ip = 132; continue _fun0002 }
case 133:
            var42 = var29.party;
            var43 = var4 == var42;
            var40 = undefined;
            if(var43) { _fun0002_ip = 132; continue _fun0002 }
case 134:
            var40 = var42.id;
case 132:
            var38 = var38.party;
            var38 = var38.id;
            var37 = var40 === var38;
case 130:
            var40 = var4 == var41;
            var38 = undefined;
            if(var40) { _fun0002_ip = 135; continue _fun0002 }
case 136:
            var38 = var41.userId;
case 135:
            var38 = var4 != var38;
            if(!var38) { _fun0002_ip = 137; continue _fun0002 }
case 138:
            var42 = var4 == var41;
            var40 = undefined;
            if(var42) { _fun0002_ip = 139; continue _fun0002 }
case 140:
            var40 = var41.userId;
case 139:
            var39 = var39.id;
            var38 = var40 === var39;
case 137:
            var42 = _closure1_slot0;
            var39 = _closure1_slot2;
            var40 = var39[var35];
            var40 = var42.bind(var11)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var39 = var39[var35];
            var39 = var42.bind(var11)(var39);
            var39 = var39.t;
            var39 = var39.VJlc0S;
            var40 = var40.bind(var41)(var39);
            if(var27) { _fun0002_ip = 141; continue _fun0002 }
case 142:
            var39 = _closure1_slot0;
            var27 = _closure1_slot2;
            var41 = var27[var35];
            var41 = var39.bind(var11)(var41);
            var42 = var41.intl;
            var41 = var42.formatToPlainString;
            var27 = var27[var35];
            var27 = var39.bind(var11)(var27);
            var27 = var27.t;
            var39 = var27.XWSHTb;
            var27 = {};
            var43 = _closure1_slot19;
            var27['platform'] = var43;
            var39 = var41.bind(var42)(var39, var27);
            _fun0002_ip = 143; continue _fun0002;
case 141:
            var27 = var38;
            if(var38) { _fun0002_ip = 144; continue _fun0002 }
case 145:
            var27 = var37;
case 144:
            var39 = var40;
            if(!var27) { _fun0002_ip = 143; continue _fun0002 }
case 146:
            var42 = _closure1_slot0;
            var27 = _closure1_slot2;
            var40 = var27[var35];
            var40 = var42.bind(var11)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var27 = var27[var35];
            var27 = var42.bind(var11)(var27);
            var27 = var27.t;
            var27 = var27.KC26NR;
            var39 = var40.bind(var41)(var27);
case 143:
            var27 = {};
            var27['label'] = var39;
            if(var36) { _fun0002_ip = 147; continue _fun0002 }
case 148:
            var36 = var38;
case 147:
            if(var36) { _fun0002_ip = 149; continue _fun0002 }
case 150:
            var36 = var37;
case 149:
            var27['disabled'] = var36;
            var24 = var27.label;
            var27 = var27.disabled;
            var25 = !var27;
            var23 = false;
            var22 = var33;
            var20 = var32;
            var13 = null;
            var12 = var31;
            var8 = null;
            var6 = var34;
            var28 = false;
            var19 = var10;
            var3 = var1;
            _fun0002_ip = 112; continue _fun0002;
case 124:
            var34 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = var1[var35];
            var10 = var34.bind(var11)(var10);
            var27 = var10.intl;
            var10 = var27.string;
            var1 = var1[var35];
            var1 = var34.bind(var11)(var1);
            var1 = var1.t;
            var1 = var1["84qx9r"];
            var6 = var10.bind(var27)(var1);
            var3 = var2.name;
            var25 = false;
            var24 = undefined;
            var22 = var33;
            var20 = var32;
            var23 = false;
            var13 = null;
            var12 = var31;
            var8 = null;
            var28 = false;
            var19 = var9;
case 112:
            var1 = new Array(0);
            if(!(var4 == var21)) { _fun0002_ip = 151; continue _fun0002 }
case 152:
            var10 = _closure1_slot0;
            var27 = _closure1_slot2;
            var9 = 37;
            var9 = var27[var9];
            var27 = var10.bind(var11)(var9);
            var10 = var27.getJoinFromSupportedPlatformsIconKeys;
            var9 = {};
            var32 = var4 == var29;
            var31 = undefined;
            if(var32) { _fun0002_ip = 153; continue _fun0002 }
case 154:
            var31 = var29.supported_platforms;
case 153:
            var9['platforms'] = var31;
            var9['currentPlatform'] = var30;
            var9['isGameLaunchable'] = var18;
            var10 = var10.bind(var27)(var9);
            _fun0002_ip = 155; continue _fun0002;
case 151:
            var27 = _closure1_slot0;
            var30 = _closure1_slot2;
            var9 = 37;
            var9 = var30[var9];
            var9 = var27.bind(var11)(var9);
            var9 = var9.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
            var21 = var9[var21];
            var10 = var1;
            if(!(var4 != var21)) { _fun0002_ip = 155; continue _fun0002 }
case 156:
            var9 = var1.push;
            var9 = var9.bind(var1)(var21);
            var10 = var1;
case 155:
            var1 = var4 != var19;
            var30 = undefined;
            if(!var1) { _fun0002_ip = 157; continue _fun0002 }
case 158:
            var30 = var19;
case 157:
            var9 = _closure1_slot0;
            var27 = _closure1_slot2;
            var1 = 32;
            var1 = var27[var1];
            var21 = var9.bind(var11)(var1);
            var1 = var21.getAppGradientColors;
            var21 = var1.bind(var21)(var30);
            var1 = 38;
            var1 = var27[var1];
            var27 = var9.bind(var11)(var1);
            var9 = var27.getPresenceActivityInviteCoverImageURL;
            var1 = {};
            var30 = var5.id;
            var1['messageId'] = var30;
            var1['presenceActivity'] = var29;
            var1['application'] = var2;
            var9 = var9.bind(var27)(var1);
            var1 = {};
            var27 = _closure1_slot20;
            if(var28) { _fun0002_ip = 159; continue _fun0002 }
case 160:
            if(var26) { _fun0002_ip = 161; continue _fun0002 }
case 162:
            var26 = var27.ACTIVE;
            _fun0002_ip = 163; continue _fun0002;
case 161:
            var26 = var27.DEAD;
case 163:
            _fun0002_ip = 164; continue _fun0002;
case 159:
            var26 = var27.DEAD_COMPACT;
case 164:
            var1['displayType'] = var26;
            var1['ctaButtonEnabled'] = var25;
            var1['ctaButtonText'] = var24;
            var1['ctaButtonIsLoading'] = var23;
            var1['footerLabel'] = var22;
            var1['gradientColors'] = var21;
            var1['headerText'] = var20;
            var1['iconSrc'] = var19;
            var1['isPlatformSupported'] = var18;
            var1['isSpotifyParty'] = var17;
            var17 = 0;
            if(!(!(var15 > var17))) { _fun0002_ip = 165; continue _fun0002 }
case 166:
            var15 = var16.length;
case 165:
            var1['maxPartySize'] = var15;
            var1['partyMemberAvatarURIs'] = var13;
            var1['partySizeText'] = var12;
            var1['platformIconKeys'] = var10;
            var1['coverImageUrl'] = var9;
            var1['detailsText'] = var8;
            var1['subtitle'] = var6;
            var1['title'] = var3;
            return var1;
case 31:
            var1 = var2.icon;
            var1 = var4 != var1;
            var6 = null;
            if(!var1) { _fun0002_ip = 167; continue _fun0002 }
case 168:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 32;
            var1 = var8[var1];
            var10 = var3.bind(var11)(var1);
            var9 = var10.getAppIconSrc;
            var8 = var2.id;
            var3 = var2.icon;
            var1 = var2.bot;
            var6 = var9.bind(var10)(var8, var3, var1);
case 167:
            var1 = var4 != var6;
            var9 = undefined;
            if(!var1) { _fun0002_ip = 169; continue _fun0002 }
case 170:
            var9 = var6;
case 169:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 32;
            var1 = var12[var1];
            var8 = var3.bind(var11)(var1);
            var1 = var8.getAppGradientColors;
            var8 = var1.bind(var8)(var9);
            var9 = _closure1_slot21;
            var10 = _closure1_slot7;
            var1 = var10.getId;
            var1 = var1.bind(var10)();
            var13 = var9.bind(var11)(var5, var14, var1);
            var9 = _closure1_slot1;
            var1 = 19;
            var1 = var12[var1];
            var10 = var9.bind(var11)(var1);
            var1 = var2.id;
            var10 = var10.bind(var11)(var13, var5, var1);
            var1 = 22;
            var1 = var12[var1];
            var13 = var3.bind(var11)(var1);
            var3 = var13.getRequestToStreamText;
            var15 = _closure1_slot7;
            var1 = var15.getId;
            var1 = var1.bind(var15)();
            var3 = var3.bind(var13)(var5, var14, var1);
            var1 = 39;
            var1 = var12[var1];
            var1 = var9.bind(var11)(var1);
            var1 = var1.bind(var11)(var5);
            var5 = var1.text;
            var9 = var1.isDisabled;
            var1 = {};
            var12 = _closure1_slot20;
            if(var10) { _fun0002_ip = 171; continue _fun0002 }
case 172:
            var10 = var12.DEAD;
            _fun0002_ip = 173; continue _fun0002;
case 171:
            var10 = var12.ACTIVE;
case 173:
            var1['displayType'] = var10;
            var9 = !var9;
            var1['ctaButtonEnabled'] = var9;
            var1['ctaButtonText'] = var5;
            var5 = false;
            var1['ctaButtonIsLoading'] = var5;
            var1['footerLabel'] = var4;
            var1['gradientColors'] = var8;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 16;
            var8 = var12[var8];
            var8 = var9.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var10 = _closure1_slot1;
            var7 = 40;
            var7 = var12[var7];
            var7 = var10.bind(var11)(var7);
            var7 = var7.nAyuPp;
            var7 = var8.bind(var9)(var7);
            var1['headerText'] = var7;
            var1['iconSrc'] = var6;
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
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.SpotifyApplication;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ActivityActionStates;
    var _closure1_slot15 = var5;
    var5 = var4.ActivityActionTypes;
    var _closure1_slot16 = var5;
    var4 = var4.ActivityTypes;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.isSpotifyParty;
    var _closure1_slot18 = var5;
    var4 = var4.SPOTIFY_PLATFORM_NAME;
    var _closure1_slot19 = var4;
    var4 = {};
    var5 = 'active';
    var4['ACTIVE'] = var5;
    var5 = 'dead';
    var4['DEAD'] = var5;
    var5 = 'dead_compact';
    var4['DEAD_COMPACT'] = var5;
    var5 = 'blocked';
    var4['BLOCKED'] = var5;
    var _closure1_slot20 = var4;
    var5 = 41;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EmbedDisplayType'] = var4;
    var2 = function createActivityRichPresenceInviteEmbed(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var4.author;
            var6 = null;
            if(!(var6 != var1)) { _fun0004_ip = 174; continue _fun0004 }
case 175:
            var1 = var4.activity;
            if(!(var6 != var1)) { _fun0004_ip = 174; continue _fun0004 }
case 176:
            if(!(var6 == var3)) { _fun0004_ip = 177; continue _fun0004 }
case 174:
            var1 = undefined;
            return var1;
case 177:
            var5 = _closure1_slot13;
            var2 = var5.getCurrentUser;
            var11 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 17;
            var5 = var2[var10];
            var2 = undefined;
            var9 = var7.bind(var2)(var5);
            var8 = var9.getGameInviteVisibility;
            var5 = var4.application;
            var12 = var6 == var5;
            var7 = undefined;
            if(var12) { _fun0004_ip = 20; continue _fun0004 }
case 178:
            var7 = var5.content_classification;
case 20:
            var12 = var6 == var11;
            var5 = undefined;
            if(var12) { _fun0004_ip = 179; continue _fun0004 }
case 7:
            var5 = var11.nsfwAllowed;
case 179:
            var8 = var8.bind(var9)(var7, var5, var3);
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var7.bind(var2)(var5);
            var5 = var5.GameInviteVisibility;
            var5 = var5.DISPLAY;
            if(!(var5 !== var8)) { _fun0004_ip = 180; continue _fun0004 }
case 13:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var7.bind(var2)(var5);
            var5 = var5.GameInviteVisibility;
            var5 = var5.BLOCK_UNDERAGE;
            if(!(var5 !== var8)) { _fun0004_ip = 181; continue _fun0004 }
case 182:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var7.bind(var2)(var5);
            var5 = var5.GameInviteVisibility;
            var5 = var5.BLOCK_CHANNEL_RESTRICTION;
            if(!(var5 !== var8)) { _fun0004_ip = 181; continue _fun0004 }
case 183:
            return var6;
case 181:
            var5 = {};
            var7 = _closure1_slot20;
            var7 = var7.BLOCKED;
            var5['displayType'] = var7;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = 16;
            var11 = var7[var12];
            var11 = var9.bind(var2)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var7[var12];
            var11 = var9.bind(var2)(var11);
            var11 = var11.t;
            var11 = var11.pkq6Vq;
            var11 = var13.bind(var14)(var11);
            var5['headerText'] = var11;
            var7 = var7[var10];
            var7 = var9.bind(var2)(var7);
            var7 = var7.GameInviteVisibility;
            var7 = var7.BLOCK_UNDERAGE;
            if(!(var8 !== var7)) { _fun0004_ip = 184; continue _fun0004 }
case 185:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var12];
            var8 = var10.bind(var2)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var12];
            var7 = var10.bind(var2)(var7);
            var7 = var7.t;
            var7 = var7.B99UMJ;
            var7 = var8.bind(var9)(var7);
            _fun0004_ip = 186; continue _fun0004;
case 184:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var12];
            var9 = var11.bind(var2)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var2)(var8);
            var8 = var8.t;
            var8 = var8.GhU4yl;
            var7 = var9.bind(var10)(var8);
case 186:
            var5['subtitle'] = var7;
            var7 = false;
            var5['ctaButtonEnabled'] = var7;
            var5['ctaButtonText'] = var2;
            var5['ctaButtonIsLoading'] = var7;
            var5['footerLabel'] = var2;
            var8 = new Array(0);
            var5['gradientColors'] = var8;
            var5['iconSrc'] = var2;
            var5['isPlatformSupported'] = var7;
            var5['isSpotifyParty'] = var7;
            var7 = 0;
            var5['maxPartySize'] = var7;
            var5['partyMemberAvatarURIs'] = var6;
            var5['partySizeText'] = var2;
            var6 = new Array(0);
            var5['platformIconKeys'] = var6;
            var5['coverImageUrl'] = var2;
            var5['detailsText'] = var2;
            var5['title'] = var2;
            return var5;
case 180:
            var1 = _closure1_slot22;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
        }
    };
    var3['createActivityRichPresenceInviteEmbed'] = var2;
    return var1;
})();