// app/modules/user_profile/native/UserProfileOverflowMenu.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = var4.NOOP;
    var _closure1_slot10 = var7;
    var4 = var4.RelationshipTypes;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot13 = var7;
    var4 = var4.IGNORE_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileOverflowMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileOverflowMenu(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.user;
            var _closure2_slot0 = var17;
            var21 = var1.currentUser;
            var25 = var1.displayProfile;
            var4 = var1.channel;
            var _closure2_slot1 = var4;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var22 = 10;
            var1 = var12[var22];
            var9 = var2.bind(var5)(var1);
            var7 = var9.useStateFromStoresObject;
            var11 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var11;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot7;
                var5 = var4.getRelationshipType;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['relationshipType'] = var3;
                var3 = var4.isIgnored;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isIgnored'] = var2;
                return var1;
            };
            var1 = var7.bind(var9)(var6, var1);
            var19 = var1.relationshipType;
            var15 = var1.isIgnored;
            var1 = var12[var22];
            var9 = var2.bind(var5)(var1);
            var7 = var9.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = _closure1_slot6;
            var6[1] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot6;
                var3 = var4.getChannel;
                var5 = _closure1_slot8;
                var2 = var5.getChannelId;
                var2 = var2.bind(var5)();
                var2 = var3.bind(var4)(var2);
                var1['selectedChannel'] = var2;
                var2 = var5.getVoiceChannelId;
                var2 = var2.bind(var5)();
                var1['selectedVoiceChannelId'] = var2;
                var3 = var4.getChannel;
                var2 = var5.getVoiceChannelId;
                var2 = var2.bind(var5)();
                var2 = var3.bind(var4)(var2);
                var1['selectedVoiceChannel'] = var2;
                return var1;
            };
            var1 = var7.bind(var9)(var6, var1);
            var9 = var1.selectedChannel;
            var _closure2_slot2 = var9;
            var26 = var1.selectedVoiceChannelId;
            var _closure2_slot3 = var26;
            var27 = var1.selectedVoiceChannel;
            var _closure2_slot4 = var27;
            var1 = 11;
            var1 = var12[var1];
            var6 = var2.bind(var5)(var1);
            var2 = var6.useServerInviteRows;
            var1 = var17.id;
            var6 = var2.bind(var6)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var5)(var6, var1);
            var7 = 0;
            var6 = var2[var7];
            var1 = 1;
            var2 = var2[var1];
            var10 = var11.getNickname;
            var1 = var17.id;
            var10 = var10.bind(var11)(var1);
            var1 = null;
            var20 = var1 != var10;
            var11 = _closure1_slot1;
            var10 = 12;
            var10 = var12[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var17.id;
            var13 = var11.bind(var5)(var10);
            if(!var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var6.length;
            var2 = var2.length;
            var2 = var6 + var2;
            var13 = var2 > var7;
case 2:
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 13;
            var2 = var14[var2];
            var11 = var6.bind(var5)(var2);
            var10 = var11.isIarUserReportingEnabled;
            var2 = 'User Profile Options - Mobile';
            var16 = var10.bind(var11)(var2);
            var2 = 14;
            var2 = var14[var2];
            var6 = var6.bind(var5)(var2);
            var2 = var6.useUserProfileAnalyticsContext;
            var2 = var2.bind(var6)();
            var10 = var2.context;
            _closure2_slot5 = var10;
            var2 = var2.trackUserProfileAction;
            _closure2_slot6 = var2;
            var12 = _closure1_slot1;
            var2 = 15;
            var6 = var14[var2];
            var11 = var12.bind(var5)(var6);
            var6 = 16;
            var6 = var14[var6];
            var6 = var12.bind(var5)(var6);
            var6 = var6.USER_PROFILE_OVERFLOW_MENU;
            var11 = var11.bind(var5)(var6);
            var6 = var11.analyticsLocations;
            _closure2_slot7 = var6;
            var11 = var11.newestAnalyticsLocation;
            _closure2_slot8 = var11;
            var11 = 17;
            var11 = var14[var11];
            var14 = var12.bind(var5)(var11);
            var12 = var17.id;
            var18 = var1 == var4;
            var11 = undefined;
            if(var18) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var4.guild_id;
case 4:
            var24 = var14.bind(var5)(var12, var11);
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 18;
            var11 = var18[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.useCanRing;
            var23 = 'UserProfileOverflowMenu';
            var12 = var11.bind(var12)(var17, var23, var26);
            _closure2_slot9 = var12;
            var14 = _closure1_slot1;
            var11 = 19;
            var11 = var18[var11];
            var18 = var14.bind(var5)(var11);
            var14 = var18.useExperiment;
            var11 = {};
            var29 = var1 == var27;
            var28 = undefined;
            if(var29) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var28 = var27.guild_id;
case 6:
            var11['guildId'] = var28;
            var11['location'] = var23;
            var11 = var14.bind(var18)(var11);
            var11 = var11.enabled;
            _closure2_slot10 = var11;
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var22];
            var23 = var18.bind(var5)(var14);
            var22 = var23.useStateFromStoresObject;
            var14 = _closure1_slot5;
            var18 = new Array(1);
            var18[0] = var14;
            var14 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot9;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 != var3;
case 8:
                    var2 = null;
                    var3 = null;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot5;
                    var5 = var6.getParticipant;
                    var4 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var5.bind(var6)(var4, var1);
case 10:
                    var1 = {};
                    var4 = var2 != var3;
                    var1['userIsInCall'] = var4;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = var3.type;
                    var4 = _closure1_slot12;
                    var4 = var4.USER;
                    var2 = var5 === var4;
case 12:
                    if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var2 = var3.ringing;
case 14:
                    var1['isUserRinging'] = var2;
                    return var1;
                }
            };
            var18 = var22.bind(var23)(var18, var14);
            var14 = var18.userIsInCall;
            _closure2_slot11 = var14;
            var22 = var18.isUserRinging;
            if(!var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var1 != var26;
case 16:
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = !var14;
            if(var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var18 = var22;
case 20:
            var12 = var18;
case 18:
            var22 = _closure1_slot1;
            var29 = _closure1_slot2;
            var18 = 20;
            var18 = var29[var18];
            var23 = var22.bind(var5)(var18);
            var22 = {};
            var28 = _closure1_slot0;
            var18 = 21;
            var30 = var29[var18];
            var30 = var28.bind(var5)(var30);
            var30 = var30.ImpressionTypes;
            var30 = var30.MENU;
            var22['type'] = var30;
            var18 = var29[var18];
            var18 = var28.bind(var5)(var18);
            var18 = var18.ImpressionNames;
            var18 = var18.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
            var22['name'] = var18;
            var18 = {};
            var18['voice_channel_id'] = var26;
            var28 = var1 == var27;
            var26 = undefined;
            if(var28) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var26 = var27.guild_id;
case 22:
            var18['voice_guild_id'] = var26;
            var22['properties'] = var18;
            var18 = {};
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = var12;
case 24:
            var11 = !var11;
            var18['disableTrack'] = var11;
            var26 = var17.id;
            var11 = new Array(1);
            var11[0] = var26;
            var11 = var23.bind(var5)(var22, var18, var11);
            var22 = _closure1_slot4;
            var18 = var22.useCallback;
            var23 = var17.id;
            var11 = new Array(4);
            var11[0] = var23;
            var26 = var1 == var4;
            var23 = undefined;
            if(var26) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var23 = var4.id;
case 26:
            var11[1] = var23;
            var11[2] = var10;
            var11[3] = var6;
            var10 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = _closure2_slot5;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var6 = arg1;
                    var5 = 'showGuildProfile';
                    var2[var5] = var6;
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var5 = 'userId';
                    var2[var5] = var6;
                    var6 = _closure2_slot1;
                    var5 = null;
                    var5 = var5 == var6;
                    var6 = undefined;
                    if(var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = _closure2_slot1;
                    var6 = var5.id;
case 28:
                    var5 = 'channelId';
                    var2[var5] = var6;
                    var5 = _closure2_slot7;
                    var4 = 'sourceAnalyticsLocations';
                    var2[var4] = var5;
                    var5 = true;
                    var4 = 'ignoreBlockedSpeedBump';
                    var2[var4] = var5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var18.bind(var22)(var10, var11);
            _closure2_slot12 = var10;
            var11 = new Array(0);
            var10 = new Array(0);
            var23 = var17.id;
            _closure2_slot13 = var23;
            var18 = var21.id;
            var22 = var1 == var4;
            var17 = undefined;
            if(var22) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var22 = var4.getGuildId;
            var17 = var22.bind(var4)();
case 30:
            _closure2_slot14 = var17;
            var17 = _closure1_slot11;
            var17 = var17.BLOCKED;
            var17 = var19 === var17;
            var26 = var1 == var25;
            var22 = undefined;
            if(var26) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var22 = var25.guildId;
case 32:
            if(!(var1 != var22)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var26 = var11.push;
            var22 = {};
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var27 = 23;
            var28 = var31[var27];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.GISTtb;
            var27 = var28.bind(var29)(var27);
            var22['label'] = var27;
            var27 = function action() {
                var4 = _closure2_slot6;
                var3 = {};
                var1 = 'PRESS_VIEW_MAIN_PROFILE';
                var3['action'] = var1;
                var1 = _closure2_slot7;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot12;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22['action'] = var27;
            var22 = var26.bind(var11)(var22);
case 34:
            var26 = var1 == var24;
            var22 = undefined;
            if(var26) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var22 = var24.guildId;
case 36:
            var22 = var1 != var22;
            if(!var22) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var26 = var1 == var25;
            var24 = undefined;
            if(var26) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var24 = var25.guildId;
case 40:
            var22 = var1 == var24;
case 38:
            if(!var22) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var24 = var11.push;
            var22 = {};
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 23;
            var26 = var29[var25];
            var26 = var28.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.DisZzM;
            var25 = var26.bind(var27)(var25);
            var22['label'] = var25;
            var25 = function action() {
                var4 = _closure2_slot6;
                var3 = {};
                var1 = 'PRESS_VIEW_SERVER_PROFILE';
                var3['action'] = var1;
                var1 = _closure2_slot7;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot12;
                var2 = var2.bind(var1)();
                return var1;
            };
            var22['action'] = var25;
            var22 = var24.bind(var11)(var22);
case 42:
            if(!(var18 !== var23)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var18 = var1 != var4;
            if(!var18) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var22 = var4.isThread;
            var22 = var22.bind(var4)();
            var18 = !var22;
case 46:
            if(!var18) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var22 = var4.isOwner;
            var21 = var21.id;
            var18 = var22.bind(var4)(var21);
case 48:
            var22 = undefined;
            if(!var18) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var21 = var4.recipients;
            var18 = var1 != var21;
            var22 = var21;
case 50:
            if(!var18) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var21 = var22.includes;
            var18 = var21.bind(var22)(var23);
case 52:
            if(!var18) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var21 = var10.push;
            var18 = {};
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 23;
            var23 = var26[var22];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.n5zMIy;
            var22 = var23.bind(var24)(var22);
            var18['label'] = var22;
            var22 = 'destructive';
            var18['variant'] = var22;
            var22 = function action() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.removeRecipient;
                var5 = _closure2_slot1;
                var5 = var5.id;
                var2 = _closure2_slot13;
                var2 = var6.bind(var7)(var5, var2);
                var2 = 25;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var18['action'] = var22;
            var18 = var21.bind(var10)(var18);
case 54:
            var18 = _closure1_slot11;
            var18 = var18.FRIEND;
            if(!(var19 === var18)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var19 = var11.push;
            var18 = {};
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 23;
            var22 = var25[var21];
            var22 = var24.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var5)(var21);
            var21 = var21.t;
            if(var20) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var20 = var21.BGYkaG;
            var20 = var22.bind(var23)(var20);
            _fun0001_ip = 60; continue _fun0001;
case 58:
            var21 = var21.8pOYUF;
            var20 = var22.bind(var23)(var21);
case 60:
            var18['label'] = var20;
            var20 = function action() {
                var3 = _closure2_slot6;
                var2 = {};
                var1 = 'PRESS_SET_FRIEND_NICKNAME';
                var2['action'] = var1;
                var1 = _closure2_slot7;
                var2['analyticsLocations'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = 26;
                var5 = var4[var5];
                var7 = var3.bind(var1)(var5);
                var6 = var7.pushLazy;
                var5 = _closure1_slot0;
                var2 = 28;
                var2 = var4[var2];
                var9 = var5.bind(var1)(var2);
                var2 = 27;
                var5 = var4[var2];
                var2 = var4.paths;
                var5 = var9.bind(var1)(var5, var2);
                var2 = {};
                var9 = _closure2_slot13;
                var2['userId'] = var9;
                var8 = _closure2_slot12;
                var2['showUserProfile'] = var8;
                var2 = var6.bind(var7)(var5, var2);
                var2 = 25;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var18['action'] = var20;
            var18 = var19.bind(var11)(var18);
case 56:
            if(!var15) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            if(var17) { _fun0001_ip = 61; continue _fun0001 }
case 63:
            var18 = var10.push;
            var15 = {};
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 23;
            var20 = var23[var19];
            var20 = var22.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.8wXU9P;
            var19 = var20.bind(var21)(var19);
            var15['label'] = var19;
            var19 = function action() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var1 = 'UNIGNORE';
                    var3['action'] = var1;
                    var1 = _closure2_slot7;
                    var3['analyticsLocations'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.unignoreUser;
                    var5 = _closure2_slot13;
                    var4 = _closure2_slot8;
                    var8 = _closure2_slot1;
                    var3 = null;
                    var8 = var3 == var8;
                    var3 = undefined;
                    if(var8) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var8 = _closure2_slot1;
                    var3 = var8.id;
case 64:
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var2 = _closure2_slot12;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var15['action'] = var19;
            var15 = var18.bind(var10)(var15);
            _fun0001_ip = 66; continue _fun0001;
case 61:
            if(var17) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var18 = var10.push;
            var15 = {};
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 23;
            var20 = var23[var19];
            var20 = var22.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.ytCpKi;
            var19 = var20.bind(var21)(var19);
            var15['label'] = var19;
            var19 = function action() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var1 = 'IGNORE';
                    var2['action'] = var1;
                    var1 = _closure2_slot7;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 25;
                    var4 = var3[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 28;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 30;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var5 = var5.bind(var1)(var4, var3);
                    var4 = _closure1_slot14;
                    var3 = {};
                    var8 = _closure2_slot13;
                    var3['userId'] = var8;
                    var10 = _closure2_slot1;
                    var8 = null;
                    var10 = var8 == var10;
                    var8 = undefined;
                    if(var10) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                    var9 = _closure2_slot1;
                    var8 = var9.id;
case 68:
                    var3['channelId'] = var8;
                    var8 = _closure1_slot10;
                    var3['onSuccess'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 21;
                    var2 = var9[var2];
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.ImpressionNames;
                    var2 = var2.IGNORE_USER_CONFIRMATION;
                    var3['impressionName'] = var2;
                    var11 = 'stack';
                    var15 = var7;
                    var14 = var5;
                    var13 = var4;
                    var12 = var3;
                    var2 = var15[var6](var14, var13, var12, var11, var10);
                    return var1;
                }
            };
            var15['action'] = var19;
            var15 = var18.bind(var10)(var15);
case 66:
            var15 = var10.push;
            if(var17) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var17 = {};
            var22 = _closure1_slot0;
            var18 = _closure1_slot2;
            var21 = 23;
            var19 = var18[var21];
            var19 = var22.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var21];
            var18 = var22.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.l4EmaW;
            var18 = var19.bind(var20)(var18);
            var17['label'] = var18;
            var18 = 'destructive';
            var17['variant'] = var18;
            var19 = function action() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var4 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 28;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 32;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var5 = var5.bind(var1)(var4, var3);
                    var4 = _closure1_slot13;
                    var3 = {};
                    var8 = _closure2_slot13;
                    var3['userId'] = var8;
                    var10 = _closure2_slot1;
                    var8 = null;
                    var10 = var8 == var10;
                    var8 = undefined;
                    if(var10) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                    var9 = _closure2_slot1;
                    var8 = var9.id;
case 72:
                    var3['channelId'] = var8;
                    var8 = function onSuccess() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 31;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.showBlockSuccessToast;
                            var3 = _closure2_slot13;
                            var7 = _closure2_slot1;
                            var2 = null;
                            var7 = var2 == var7;
                            var2 = undefined;
                            if(var7) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                            var6 = _closure2_slot1;
                            var2 = var6.id;
case 74:
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var3['onSuccess'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 21;
                    var2 = var9[var2];
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.ImpressionNames;
                    var2 = var2.BLOCK_USER_CONFIRMATION;
                    var3['impressionName'] = var2;
                    var11 = 'stack';
                    var15 = var7;
                    var14 = var5;
                    var13 = var4;
                    var12 = var3;
                    var2 = var15[var6](var14, var13, var12, var11, var10);
                    return var1;
                }
            };
            var17['action'] = var19;
            var17 = var15.bind(var10)(var17);
            if(var16) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 34;
            var16 = var19[var16];
            var17 = var17.bind(var5)(var16);
            var16 = var17.isAndroid;
            var16 = var16.bind(var17)();
            if(!var16) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var17 = var10.push;
            var16 = {};
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = var19[var21];
            var20 = var23.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var19 = var19[var21];
            var19 = var23.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.TbHyMD;
            var19 = var20.bind(var22)(var19);
            var16['label'] = var19;
            var16['variant'] = var18;
            var19 = function action() {
                var3 = _closure2_slot6;
                var2 = {};
                var1 = 'REPORT';
                var2['action'] = var1;
                var1 = _closure2_slot7;
                var2['analyticsLocations'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 35;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.alertUserReported;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 36;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.TNS_USER_REPORT_SUBMITTED;
                var2 = {};
                var6 = _closure2_slot13;
                var2['reported_user_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var16['action'] = var19;
            var16 = var17.bind(var10)(var16);
            _fun0001_ip = 78; continue _fun0001;
case 76:
            var17 = var10.push;
            var16 = {};
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = var19[var21];
            var20 = var23.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var19 = var19[var21];
            var19 = var23.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.wqHXNj;
            var19 = var20.bind(var22)(var19);
            var16['label'] = var19;
            var16['variant'] = var18;
            var18 = function action() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var2 = {};
                    var1 = 'REPORT';
                    var2['action'] = var1;
                    var1 = _closure2_slot7;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var4 = _closure2_slot14;
                    var2 = '@me';
                    var7 = undefined;
                    if(!(var2 !== var4)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var4 = _closure2_slot14;
                    var2 = null;
                    var7 = undefined;
                    if(!(var2 !== var4)) { _fun0008_ip = 80; continue _fun0008 }
case 82:
                    var7 = _closure2_slot14;
case 80:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 33;
                    var5 = var4[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.showReportModalForUser;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var6)(var3, var7);
                    var3 = _closure1_slot1;
                    var2 = 25;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var16['action'] = var18;
            var16 = var17.bind(var10)(var16);
case 78:
            if(!var13) { _fun0001_ip = 44; continue _fun0001 }
case 83:
            var16 = var11.push;
            var13 = {};
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var21];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.Sd8Ix8;
            var17 = var18.bind(var19)(var17);
            var13['label'] = var17;
            var17 = function action() {
                var4 = _closure2_slot6;
                var3 = {};
                var1 = 'PRESS_INVITE_TO_SERVER';
                var3['action'] = var1;
                var1 = _closure2_slot7;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.showGuildInviteActionSheet;
                var3 = _closure2_slot13;
                var2 = _closure2_slot8;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13['action'] = var17;
            var13 = var16.bind(var11)(var13);
            _fun0001_ip = 44; continue _fun0001;
case 70:
            var13 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 23;
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.XyHpKC;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var16 = function action() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var1 = 'UNBLOCK';
                    var2['action'] = var1;
                    var1 = _closure2_slot7;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 29;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.unblockUser;
                    var5 = _closure2_slot13;
                    var2 = {};
                    var9 = _closure2_slot8;
                    var2['location'] = var9;
                    var2 = var7.bind(var8)(var5, var2);
                    var2 = _closure2_slot12;
                    var2 = var2.bind(var1)();
                    var2 = 31;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.showUnblockSuccessToast;
                    var3 = _closure2_slot13;
                    var7 = _closure2_slot1;
                    var2 = null;
                    var7 = var2 == var7;
                    var2 = undefined;
                    if(var7) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
case 84:
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var13['action'] = var16;
            var13 = var15.bind(var10)(var13);
case 44:
            if(!var12) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var13 = var11.push;
            var12 = {};
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 23;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            if(var14) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var14 = var15.bHa9kJ;
            var14 = var16.bind(var17)(var14);
            _fun0001_ip = 90; continue _fun0001;
case 88:
            var15 = var15.ygslb2;
            var14 = var16.bind(var17)(var15);
case 90:
            var12['label'] = var14;
            var14 = function action() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var5 = _closure2_slot11;
                    var1 = 'RING';
                    if(!var5) { _fun0010_ip = 91; continue _fun0010 }
case 92:
                    var1 = 'STOP_RINGING';
case 91:
                    var3['action'] = var1;
                    var1 = _closure2_slot7;
                    var3['analyticsLocations'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot11;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 37;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    if(var4) { _fun0010_ip = 93; continue _fun0010 }
case 94:
                    var8 = var5.ring;
                    var7 = _closure2_slot3;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var6 = new Array(1);
                    var6[0] = var4;
                    var4 = 'user_profile_overflow_menu';
                    var4 = var8.bind(var5)(var7, var6, var4);
                    var4 = _closure2_slot10;
                    if(!var4) { _fun0010_ip = 95; continue _fun0010 }
case 96:
                    var7 = _closure2_slot4;
                    var6 = null;
                    var4 = var6 != var7;
case 95:
                    if(!var4) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 25;
                    var4 = var6[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.hideActionSheet;
                    var4 = var4.bind(var7)();
                    var4 = _closure1_slot0;
                    var3 = 38;
                    var3 = var6[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.openChannelCallModal;
                    var3 = _closure2_slot4;
                    var3 = var4.bind(var6)(var3);
                    _fun0010_ip = 97; continue _fun0010;
case 93:
                    var4 = var5.stopRinging;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 97:
                    return var1;
                }
            };
            var12['action'] = var14;
            var12 = var13.bind(var11)(var12);
case 86:
            var15 = var11.push;
            var12 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = 23;
            var17 = var14[var16];
            var17 = var13.bind(var5)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var17 = var14[var16];
            var17 = var13.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.y5MwJy;
            var17 = var18.bind(var19)(var17);
            var12['label'] = var17;
            var17 = function action() {
                var4 = _closure2_slot6;
                var3 = {};
                var1 = 'COPY_USERNAME';
                var3['action'] = var1;
                var1 = _closure2_slot7;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 39;
                var6 = var5[var6];
                var7 = var4.bind(var1)(var6);
                var6 = var7.copy;
                var8 = _closure1_slot1;
                var3 = 40;
                var3 = var5[var3];
                var10 = var8.bind(var1)(var3);
                var9 = var10.getUserTag;
                var8 = _closure2_slot0;
                var3 = {'decoration': 'never', 'identifiable': 'always'};
                var3 = var9.bind(var10)(var8, var3);
                var3 = var6.bind(var7)(var3);
                var3 = 41;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.presentUsernameCopied;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot12;
                var2 = var2.bind(var1)();
                return var1;
            };
            var12['action'] = var17;
            var12 = var15.bind(var11)(var12);
            var12 = 42;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.DeveloperMode;
            var12 = var13.getSetting;
            var12 = var12.bind(var13)();
            if(!var12) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var13 = var11.push;
            var12 = {};
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var16];
            var15 = var18.bind(var5)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var14 = var14[var16];
            var14 = var18.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14./AXYnJ;
            var14 = var15.bind(var17)(var14);
            var12['label'] = var14;
            var14 = function action() {
                var4 = _closure2_slot6;
                var3 = {};
                var1 = 'COPY_USER_ID';
                var3['action'] = var1;
                var1 = _closure2_slot7;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 39;
                var3 = var5[var3];
                var7 = var4.bind(var1)(var3);
                var6 = var7.copy;
                var3 = _closure2_slot13;
                var3 = var6.bind(var7)(var3);
                var3 = 41;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.presentIdCopied;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot12;
                var2 = var2.bind(var1)();
                return var1;
            };
            var12['action'] = var14;
            var12 = var13.bind(var11)(var12);
case 99:
            var4 = var1 != var4;
            if(!var4) { _fun0001_ip = 101; continue _fun0001 }
case 102:
            var4 = var1 != var9;
case 101:
            if(!var4) { _fun0001_ip = 103; continue _fun0001 }
case 104:
            var9 = var11.push;
            var4 = {};
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var16];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.PHjkRE;
            var12 = var13.bind(var14)(var12);
            var4['label'] = var12;
            var12 = function action() {
                var4 = _closure2_slot6;
                var3 = {};
                var1 = 'PRESS_VIEW_APP_COMMANDS';
                var3['action'] = var1;
                var1 = _closure2_slot7;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 25;
                var4 = var9[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var8 = _closure1_slot0;
                var3 = 28;
                var3 = var9[var3];
                var5 = var8.bind(var1)(var3);
                var3 = 43;
                var4 = var9[var3];
                var3 = var9.paths;
                var5 = var5.bind(var1)(var4, var3);
                var4 = {};
                var3 = _closure2_slot2;
                var4['channel'] = var3;
                var3 = 44;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.ApplicationCommandType;
                var3 = var3.USER;
                var4['commandType'] = var3;
                var2 = _closure2_slot13;
                var4['commandTargetId'] = var2;
                var2 = function onPressAppCommand() {
                    var3 = _closure2_slot6;
                    var2 = {};
                    var4 = 'PRESS_APP_COMMAND';
                    var2['action'] = var4;
                    var1 = _closure2_slot7;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var4['onPressAppCommand'] = var2;
                var12 = 'CommandContextMenuActionSheet';
                var10 = 'stack';
                var14 = var7;
                var13 = var5;
                var11 = var4;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                return var1;
            };
            var4['action'] = var12;
            var4 = var9.bind(var11)(var4);
case 103:
            var4 = var11.length;
            if(!(var7 === var4)) { _fun0001_ip = 105; continue _fun0001 }
case 106:
            var4 = var10.length;
            var1 = null;
            if(!(var7 !== var4)) { _fun0001_ip = 107; continue _fun0001 }
case 105:
            var4 = _closure1_slot15;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 45;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.ContextMenu;
            var6 = {};
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['items'] = var9;
            var8 = function children(arg1) {
                var3 = arg1;
                var8 = var3.ref;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2['ref'] = var1;
                var14 = {};
                var13 = var3;
                var12 = var2;
                var13 = copyDataProperties(var14, var13, var12);
                var4 = _closure1_slot15;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 46;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.IconButton;
                var1 = {};
                var1['ref'] = var8;
                var14 = var1;
                var5 = copyDataProperties(var14, var13);
                var8 = 'sm';
                var5 = 'size';
                var1[var5] = var8;
                var10 = 'secondary-overlay';
                var5 = 'variant';
                var1[var5] = var10;
                var5 = 23;
                var10 = var9[var5];
                var10 = var6.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.+zofAA;
                var10 = var10.bind(var11)(var5);
                var5 = 'accessibilityLabel';
                var1[var5] = var10;
                var5 = 47;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.MoreHorizontalIcon;
                var5 = {};
                var5['size'] = var8;
                var8 = _closure1_slot1;
                var7 = 48;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.colors;
                var7 = var7.WHITE;
                var5['color'] = var7;
                var6 = var4.bind(var3)(var6, var5);
                var5 = 'icon';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 107:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();