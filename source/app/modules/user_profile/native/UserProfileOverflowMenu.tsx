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
    var7 = var4.AVATAR_MAX_SIZE;
    var _closure1_slot10 = var7;
    var7 = var4.NOOP;
    var _closure1_slot11 = var7;
    var4 = var4.RelationshipTypes;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot14 = var7;
    var4 = var4.IGNORE_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot16 = var4;
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileOverflowMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileOverflowMenu(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.user;
            var _closure2_slot0 = var18;
            var22 = var1.currentUser;
            var26 = var1.displayProfile;
            var _closure2_slot1 = var26;
            var4 = var1.channel;
            var _closure2_slot2 = var4;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var23 = 10;
            var1 = var12[var23];
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
            var20 = var1.relationshipType;
            var15 = var1.isIgnored;
            var1 = var12[var23];
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
            var _closure2_slot3 = var9;
            var27 = var1.selectedVoiceChannelId;
            var _closure2_slot4 = var27;
            var28 = var1.selectedVoiceChannel;
            var _closure2_slot5 = var28;
            var1 = 11;
            var1 = var12[var1];
            var6 = var2.bind(var5)(var1);
            var2 = var6.useServerInviteRows;
            var1 = var18.id;
            var6 = var2.bind(var6)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var5)(var6, var1);
            var7 = 0;
            var6 = var2[var7];
            var1 = 1;
            var2 = var2[var1];
            var10 = var11.getNickname;
            var1 = var18.id;
            var10 = var10.bind(var11)(var1);
            var1 = null;
            var21 = var1 != var10;
            var11 = _closure1_slot1;
            var10 = 12;
            var10 = var12[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var18.id;
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
            _closure2_slot6 = var10;
            var2 = var2.trackUserProfileAction;
            _closure2_slot7 = var2;
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
            _closure2_slot8 = var6;
            var11 = var11.newestAnalyticsLocation;
            _closure2_slot9 = var11;
            var11 = 17;
            var11 = var14[var11];
            var14 = var12.bind(var5)(var11);
            var12 = var18.id;
            var17 = var1 == var4;
            var11 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var4.guild_id;
case 4:
            var25 = var14.bind(var5)(var12, var11);
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 18;
            var11 = var19[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.useCanRing;
            var17 = 'UserProfileOverflowMenu';
            var12 = var11.bind(var12)(var18, var17, var27);
            _closure2_slot10 = var12;
            var14 = _closure1_slot1;
            var11 = 19;
            var11 = var19[var11];
            var19 = var14.bind(var5)(var11);
            var14 = var19.useExperiment;
            var11 = {};
            var29 = var1 == var28;
            var24 = undefined;
            if(var29) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var24 = var28.guild_id;
case 6:
            var11['guildId'] = var24;
            var11['location'] = var17;
            var11 = var14.bind(var19)(var11);
            var11 = var11.enabled;
            _closure2_slot11 = var11;
            var24 = _closure1_slot1;
            var14 = _closure1_slot2;
            var19 = 20;
            var19 = var14[var19];
            var29 = var24.bind(var5)(var19);
            var24 = var29.useExperiment;
            var19 = {};
            var19['location'] = var17;
            var17 = {};
            var30 = false;
            var17['autoTrackExposure'] = var30;
            var17 = var24.bind(var29)(var19, var17);
            var17 = var17.tidaWebformEnabled;
            var19 = _closure1_slot0;
            var14 = var14[var23];
            var24 = var19.bind(var5)(var14);
            var23 = var24.useStateFromStoresObject;
            var14 = _closure1_slot5;
            var19 = new Array(1);
            var19[0] = var14;
            var14 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot10;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 != var3;
case 8:
                    var2 = null;
                    var3 = null;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot5;
                    var5 = var6.getParticipant;
                    var4 = _closure2_slot4;
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
                    var4 = _closure1_slot13;
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
            var19 = var23.bind(var24)(var19, var14);
            var14 = var19.userIsInCall;
            _closure2_slot12 = var14;
            var23 = var19.isUserRinging;
            if(!var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var1 != var27;
case 16:
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = !var14;
            if(var19) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var19 = var23;
case 20:
            var12 = var19;
case 18:
            var23 = _closure1_slot1;
            var30 = _closure1_slot2;
            var19 = 21;
            var19 = var30[var19];
            var24 = var23.bind(var5)(var19);
            var23 = {};
            var29 = _closure1_slot0;
            var19 = 22;
            var31 = var30[var19];
            var31 = var29.bind(var5)(var31);
            var31 = var31.ImpressionTypes;
            var31 = var31.MENU;
            var23['type'] = var31;
            var19 = var30[var19];
            var19 = var29.bind(var5)(var19);
            var19 = var19.ImpressionNames;
            var19 = var19.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
            var23['name'] = var19;
            var19 = {};
            var19['voice_channel_id'] = var27;
            var29 = var1 == var28;
            var27 = undefined;
            if(var29) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var27 = var28.guild_id;
case 22:
            var19['voice_guild_id'] = var27;
            var23['properties'] = var19;
            var19 = {};
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = var12;
case 24:
            var11 = !var11;
            var19['disableTrack'] = var11;
            var27 = var18.id;
            var11 = new Array(1);
            var11[0] = var27;
            var11 = var24.bind(var5)(var23, var19, var11);
            var23 = _closure1_slot4;
            var19 = var23.useCallback;
            var24 = var18.id;
            var11 = new Array(4);
            var11[0] = var24;
            var27 = var1 == var4;
            var24 = undefined;
            if(var27) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var24 = var4.id;
case 26:
            var11[1] = var24;
            var11[2] = var10;
            var11[3] = var6;
            var10 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = _closure2_slot6;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var6 = arg1;
                    var5 = 'showGuildProfile';
                    var2[4] = var6;
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var5 = 'userId';
                    var2[4] = var6;
                    var6 = _closure2_slot2;
                    var5 = null;
                    var5 = var5 == var6;
                    var6 = undefined;
                    if(var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = _closure2_slot2;
                    var6 = var5.id;
case 28:
                    var5 = 'channelId';
                    var2[4] = var6;
                    var5 = _closure2_slot8;
                    var4 = 'sourceAnalyticsLocations';
                    var2[3] = var5;
                    var5 = true;
                    var4 = 'ignoreBlockedSpeedBump';
                    var2[3] = var5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var19.bind(var23)(var10, var11);
            _closure2_slot13 = var10;
            var11 = new Array(0);
            var10 = new Array(0);
            var24 = var18.id;
            _closure2_slot14 = var24;
            var19 = var22.id;
            var23 = var1 == var4;
            var18 = undefined;
            if(var23) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var23 = var4.getGuildId;
            var18 = var23.bind(var4)();
case 30:
            _closure2_slot15 = var18;
            var18 = _closure1_slot12;
            var18 = var18.BLOCKED;
            var18 = var20 === var18;
            var27 = var1 == var26;
            var23 = undefined;
            if(var27) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var23 = var26.guildId;
case 32:
            var23 = var1 == var23;
            if(var23) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var27 = var1 != var26;
            if(!var27) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var27 = var26.private;
case 36:
            var23 = var27;
case 34:
            if(var23) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var27 = var11.push;
            var23 = {};
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 24;
            var29 = var32[var28];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.GISTta;
            var28 = var29.bind(var30)(var28);
            var23['label'] = var28;
            var28 = function action() {
                var4 = _closure2_slot7;
                var3 = {};
                var1 = 'PRESS_VIEW_MAIN_PROFILE';
                var3['action'] = var1;
                var1 = _closure2_slot8;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot13;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23['action'] = var28;
            var23 = var27.bind(var11)(var23);
case 38:
            var27 = var1 == var25;
            var23 = undefined;
            if(var27) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var23 = var25.guildId;
case 40:
            var23 = var1 != var23;
            if(!var23) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var27 = var1 == var26;
            var25 = undefined;
            if(var27) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var25 = var26.guildId;
case 44:
            var23 = var1 == var25;
case 42:
            if(!var23) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var25 = var11.push;
            var23 = {};
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var26 = 24;
            var27 = var30[var26];
            var27 = var29.bind(var5)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.DisZzB;
            var26 = var27.bind(var28)(var26);
            var23['label'] = var26;
            var26 = function action() {
                var4 = _closure2_slot7;
                var3 = {};
                var1 = 'PRESS_VIEW_SERVER_PROFILE';
                var3['action'] = var1;
                var1 = _closure2_slot8;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot13;
                var2 = var2.bind(var1)();
                return var1;
            };
            var23['action'] = var26;
            var23 = var25.bind(var11)(var23);
case 46:
            if(!(var19 !== var24)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var19 = var1 != var4;
            if(!var19) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var23 = var4.isThread;
            var23 = var23.bind(var4)();
            var19 = !var23;
case 50:
            if(!var19) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var23 = var4.isOwner;
            var22 = var22.id;
            var19 = var23.bind(var4)(var22);
case 52:
            var23 = undefined;
            if(!var19) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var22 = var4.recipients;
            var19 = var1 != var22;
            var23 = var22;
case 54:
            if(!var19) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var22 = var23.includes;
            var19 = var22.bind(var23)(var24);
case 56:
            if(!var19) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var22 = var10.push;
            var19 = {};
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 24;
            var24 = var27[var23];
            var24 = var26.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var27[var23];
            var23 = var26.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.n5zMI+;
            var23 = var24.bind(var25)(var23);
            var19['label'] = var23;
            var23 = 'destructive';
            var19['variant'] = var23;
            var23 = function action() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 25;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.removeRecipient;
                var5 = _closure2_slot2;
                var5 = var5.id;
                var2 = _closure2_slot14;
                var2 = var6.bind(var7)(var5, var2);
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var19['action'] = var23;
            var19 = var22.bind(var10)(var19);
case 58:
            var19 = _closure1_slot12;
            var19 = var19.FRIEND;
            if(!(var20 === var19)) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var20 = var11.push;
            var19 = {};
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 24;
            var23 = var26[var22];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            if(var21) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var21 = var22.BGYkaH;
            var21 = var23.bind(var24)(var21);
            _fun0001_ip = 64; continue _fun0001;
case 62:
            var22 = var22["8pOYUE"];
            var21 = var23.bind(var24)(var22);
case 64:
            var19['label'] = var21;
            var21 = function action() {
                var3 = _closure2_slot7;
                var2 = {};
                var1 = 'PRESS_SET_FRIEND_NICKNAME';
                var2['action'] = var1;
                var1 = _closure2_slot8;
                var2['analyticsLocations'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = 27;
                var5 = var4[var5];
                var7 = var3.bind(var1)(var5);
                var6 = var7.pushLazy;
                var5 = _closure1_slot0;
                var2 = 29;
                var2 = var4[var2];
                var9 = var5.bind(var1)(var2);
                var2 = 28;
                var5 = var4[var2];
                var2 = var4.paths;
                var5 = var9.bind(var1)(var5, var2);
                var2 = {};
                var9 = _closure2_slot14;
                var2['userId'] = var9;
                var8 = _closure2_slot13;
                var2['showUserProfile'] = var8;
                var2 = var6.bind(var7)(var5, var2);
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var19['action'] = var21;
            var19 = var20.bind(var11)(var19);
case 60:
            if(!var15) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            if(var18) { _fun0001_ip = 65; continue _fun0001 }
case 67:
            var19 = var10.push;
            var15 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 24;
            var21 = var24[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20["8wXU9B"];
            var20 = var21.bind(var22)(var20);
            var15['label'] = var20;
            var20 = function action() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot7;
                    var3 = {};
                    var1 = 'UNIGNORE';
                    var3['action'] = var1;
                    var1 = _closure2_slot8;
                    var3['analyticsLocations'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 30;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.unignoreUser;
                    var5 = _closure2_slot14;
                    var4 = _closure2_slot9;
                    var8 = _closure2_slot2;
                    var3 = null;
                    var8 = var3 == var8;
                    var3 = undefined;
                    if(var8) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var8 = _closure2_slot2;
                    var3 = var8.id;
case 68:
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var15['action'] = var20;
            var15 = var19.bind(var10)(var15);
            _fun0001_ip = 70; continue _fun0001;
case 65:
            if(var18) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var19 = var10.push;
            var15 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 24;
            var21 = var24[var20];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.ytCpKs;
            var20 = var21.bind(var22)(var20);
            var15['label'] = var20;
            var20 = function action() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = {};
                    var1 = 'IGNORE';
                    var2['action'] = var1;
                    var1 = _closure2_slot8;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 26;
                    var4 = var3[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 29;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 31;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var5 = var5.bind(var1)(var4, var3);
                    var4 = _closure1_slot15;
                    var3 = {};
                    var8 = _closure2_slot14;
                    var3['userId'] = var8;
                    var10 = _closure2_slot2;
                    var8 = null;
                    var10 = var8 == var10;
                    var8 = undefined;
                    if(var10) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                    var9 = _closure2_slot2;
                    var8 = var9.id;
case 72:
                    var3['channelId'] = var8;
                    var8 = _closure1_slot11;
                    var3['onSuccess'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
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
            var15['action'] = var20;
            var15 = var19.bind(var10)(var15);
case 70:
            var15 = var10.push;
            if(var18) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var18 = {};
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var22 = 24;
            var20 = var19[var22];
            var20 = var23.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var22];
            var19 = var23.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.l4Emac;
            var19 = var20.bind(var21)(var19);
            var18['label'] = var19;
            var19 = 'destructive';
            var18['variant'] = var19;
            var20 = function action() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var4 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 29;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 33;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var5 = var5.bind(var1)(var4, var3);
                    var4 = _closure1_slot14;
                    var3 = {};
                    var8 = _closure2_slot14;
                    var3['userId'] = var8;
                    var10 = _closure2_slot2;
                    var8 = null;
                    var10 = var8 == var10;
                    var8 = undefined;
                    if(var10) { _fun0006_ip = 76; continue _fun0006 }
case 77:
                    var9 = _closure2_slot2;
                    var8 = var9.id;
case 76:
                    var3['channelId'] = var8;
                    var8 = function onSuccess() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 32;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.showBlockSuccessToast;
                            var3 = _closure2_slot14;
                            var7 = _closure2_slot2;
                            var2 = null;
                            var7 = var2 == var7;
                            var2 = undefined;
                            if(var7) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                            var6 = _closure2_slot2;
                            var2 = var6.id;
case 78:
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var3['onSuccess'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 22;
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
            var18['action'] = var20;
            var18 = var15.bind(var10)(var18);
            if(var16) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 35;
            var16 = var20[var16];
            var18 = var18.bind(var5)(var16);
            var16 = var18.isAndroid;
            var16 = var16.bind(var18)();
            if(!var16) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var18 = var10.push;
            var16 = {};
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var22];
            var21 = var24.bind(var5)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var20 = var20[var22];
            var20 = var24.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.TbHyMG;
            var20 = var21.bind(var23)(var20);
            var16['label'] = var20;
            var16['variant'] = var19;
            var20 = function action() {
                var3 = _closure2_slot7;
                var2 = {};
                var1 = 'REPORT';
                var2['action'] = var1;
                var1 = _closure2_slot8;
                var2['analyticsLocations'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 36;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.alertUserReported;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 37;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.TNS_USER_REPORT_SUBMITTED;
                var2 = {};
                var6 = _closure2_slot14;
                var2['reported_user_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var16['action'] = var20;
            var16 = var18.bind(var10)(var16);
            _fun0001_ip = 82; continue _fun0001;
case 80:
            var18 = var10.push;
            var16 = {};
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var22];
            var21 = var24.bind(var5)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var20 = var20[var22];
            var20 = var24.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.wqHXNt;
            var20 = var21.bind(var23)(var20);
            var16['label'] = var20;
            var16['variant'] = var19;
            var19 = function action() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot7;
                    var2 = {};
                    var1 = 'REPORT';
                    var2['action'] = var1;
                    var1 = _closure2_slot8;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var4 = _closure2_slot15;
                    var2 = '@me';
                    var7 = undefined;
                    if(!(var2 !== var4)) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                    var4 = _closure2_slot15;
                    var2 = null;
                    var7 = undefined;
                    if(!(var2 !== var4)) { _fun0008_ip = 84; continue _fun0008 }
case 86:
                    var7 = _closure2_slot15;
case 84:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 34;
                    var5 = var4[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.showReportModalForUser;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var6)(var3, var7);
                    var3 = _closure1_slot1;
                    var2 = 26;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var16['action'] = var19;
            var16 = var18.bind(var10)(var16);
case 82:
            if(!var13) { _fun0001_ip = 48; continue _fun0001 }
case 87:
            var16 = var11.push;
            var13 = {};
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.Sd8Ixw;
            var18 = var19.bind(var20)(var18);
            var13['label'] = var18;
            var18 = function action() {
                var4 = _closure2_slot7;
                var3 = {};
                var1 = 'PRESS_INVITE_TO_SERVER';
                var3['action'] = var1;
                var1 = _closure2_slot8;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.showGuildInviteActionSheet;
                var3 = _closure2_slot14;
                var2 = _closure2_slot9;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13['action'] = var18;
            var13 = var16.bind(var11)(var13);
            _fun0001_ip = 48; continue _fun0001;
case 74:
            var13 = {};
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 24;
            var18 = var21[var16];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var21[var16];
            var16 = var20.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.XyHpKH;
            var16 = var18.bind(var19)(var16);
            var13['label'] = var16;
            var16 = function action() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = {};
                    var1 = 'UNBLOCK';
                    var2['action'] = var1;
                    var1 = _closure2_slot8;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 30;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.unblockUser;
                    var5 = _closure2_slot14;
                    var2 = {};
                    var9 = _closure2_slot9;
                    var2['location'] = var9;
                    var2 = var7.bind(var8)(var5, var2);
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var1)();
                    var2 = 32;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.showUnblockSuccessToast;
                    var3 = _closure2_slot14;
                    var7 = _closure2_slot2;
                    var2 = null;
                    var7 = var2 == var7;
                    var2 = undefined;
                    if(var7) { _fun0009_ip = 88; continue _fun0009 }
case 89:
                    var6 = _closure2_slot2;
                    var2 = var6.id;
case 88:
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var13['action'] = var16;
            var13 = var15.bind(var10)(var13);
case 48:
            if(!var12) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var13 = var11.push;
            var12 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 24;
            var16 = var20[var15];
            var16 = var19.bind(var5)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var20[var15];
            var15 = var19.bind(var5)(var15);
            var15 = var15.t;
            if(var14) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var14 = var15.bHa9kN;
            var14 = var16.bind(var18)(var14);
            _fun0001_ip = 94; continue _fun0001;
case 92:
            var15 = var15.ygslb0;
            var14 = var16.bind(var18)(var15);
case 94:
            var12['label'] = var14;
            var14 = function action() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure2_slot7;
                    var3 = {};
                    var5 = _closure2_slot12;
                    var1 = 'RING';
                    if(!var5) { _fun0010_ip = 95; continue _fun0010 }
case 96:
                    var1 = 'STOP_RINGING';
case 95:
                    var3['action'] = var1;
                    var1 = _closure2_slot8;
                    var3['analyticsLocations'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot12;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 38;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    if(var4) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                    var8 = var5.ring;
                    var7 = _closure2_slot4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var6 = new Array(1);
                    var6[0] = var4;
                    var4 = 'user_profile_overflow_menu';
                    var4 = var8.bind(var5)(var7, var6, var4);
                    var4 = _closure2_slot11;
                    if(!var4) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                    var7 = _closure2_slot5;
                    var6 = null;
                    var4 = var6 != var7;
case 99:
                    if(!var4) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 26;
                    var4 = var6[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.hideActionSheet;
                    var4 = var4.bind(var7)();
                    var4 = _closure1_slot0;
                    var3 = 39;
                    var3 = var6[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.openChannelCallModal;
                    var3 = _closure2_slot5;
                    var3 = var4.bind(var6)(var3);
                    _fun0010_ip = 101; continue _fun0010;
case 97:
                    var4 = var5.stopRinging;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 101:
                    return var1;
                }
            };
            var12['action'] = var14;
            var12 = var13.bind(var11)(var12);
case 90:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 40;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.DeveloperMode;
            var12 = var13.getSetting;
            var12 = var12.bind(var13)();
            var13 = var12;
            if(!var13) { _fun0001_ip = 103; continue _fun0001 }
case 104:
            var13 = var17;
case 103:
            if(var13) { _fun0001_ip = 105; continue _fun0001 }
case 106:
            var14 = var11.push;
            var13 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 24;
            var16 = var20[var15];
            var16 = var19.bind(var5)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var20[var15];
            var15 = var19.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.y5MwJy;
            var15 = var16.bind(var18)(var15);
            var13['label'] = var15;
            var15 = function action() {
                var4 = _closure2_slot7;
                var3 = {};
                var1 = 'COPY_USERNAME';
                var3['action'] = var1;
                var1 = _closure2_slot8;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 41;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var8 = _closure1_slot1;
                var7 = 42;
                var7 = var4[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.getUserTag;
                var7 = _closure2_slot0;
                var2 = {'decoration': 'never', 'identifiable': 'always'};
                var2 = var8.bind(var9)(var7, var2);
                var2 = var5.bind(var6)(var2);
                var2 = 43;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var13['action'] = var15;
            var13 = var14.bind(var11)(var13);
case 105:
            if(!var12) { _fun0001_ip = 107; continue _fun0001 }
case 108:
            var13 = var11.push;
            var12 = {};
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 24;
            var15 = var19[var14];
            var15 = var18.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var19[var14];
            var14 = var18.bind(var5)(var14);
            var14 = var14.t;
            if(var17) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var17 = var14["/AXYnE"];
            var17 = var15.bind(var16)(var17);
            var12['label'] = var17;
            var17 = function action() {
                var4 = _closure2_slot7;
                var3 = {};
                var1 = 'COPY_USER_ID';
                var3['action'] = var1;
                var1 = _closure2_slot8;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 41;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot14;
                var2 = var5.bind(var6)(var2);
                var2 = 43;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentIdCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var12['action'] = var17;
            var17 = var13.bind(var11)(var12);
            _fun0001_ip = 107; continue _fun0001;
case 109:
            var14 = var14.QvQeLv;
            var14 = var15.bind(var16)(var14);
            var12['label'] = var14;
            var14 = function action() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = new Array(0);
                    var4 = var5.push;
                    var3 = {};
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var10 = 24;
                    var8 = var7[var10];
                    var1 = undefined;
                    var8 = var11.bind(var1)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var7[var10];
                    var8 = var11.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.y5MwJy;
                    var8 = var9.bind(var12)(var8);
                    var3['label'] = var8;
                    var8 = function onPress() {
                        var4 = _closure2_slot7;
                        var3 = {};
                        var1 = 'COPY_USERNAME';
                        var3['action'] = var1;
                        var1 = _closure2_slot8;
                        var3['analyticsLocations'] = var1;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var5 = 41;
                        var5 = var4[var5];
                        var6 = var3.bind(var1)(var5);
                        var5 = var6.copy;
                        var8 = _closure1_slot1;
                        var7 = 42;
                        var7 = var4[var7];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.getUserTag;
                        var7 = _closure2_slot0;
                        var2 = {'decoration': 'never', 'identifiable': 'always'};
                        var2 = var8.bind(var9)(var7, var2);
                        var2 = var5.bind(var6)(var2);
                        var2 = 43;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentUsernameCopied;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onPress'] = var8;
                    var3 = var4.bind(var5)(var3);
                    var4 = var5.push;
                    var3 = {};
                    var8 = var7[var10];
                    var8 = var11.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var7[var10];
                    var7 = var11.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7["/AXYnE"];
                    var7 = var8.bind(var9)(var7);
                    var3['label'] = var7;
                    var7 = function onPress() {
                        var4 = _closure2_slot7;
                        var3 = {};
                        var1 = 'COPY_USER_ID';
                        var3['action'] = var1;
                        var1 = _closure2_slot8;
                        var3['analyticsLocations'] = var1;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var5 = 41;
                        var5 = var4[var5];
                        var6 = var3.bind(var1)(var5);
                        var5 = var6.copy;
                        var2 = _closure2_slot14;
                        var2 = var5.bind(var6)(var2);
                        var2 = 43;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentIdCopied;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onPress'] = var7;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot0;
                    var7 = var4.avatar;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0011_ip = 111; continue _fun0011 }
case 112:
                    var8 = var5.push;
                    var7 = {};
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var11 = var9[var10];
                    var11 = var13.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var9 = var9[var10];
                    var9 = var13.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.gERDvM;
                    var9 = var11.bind(var12)(var9);
                    var7['label'] = var9;
                    var9 = function onPress() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var4 = _closure2_slot7;
                            var2 = {};
                            var1 = 'COPY_AVATAR_IMAGE_LINK';
                            var2['action'] = var1;
                            var1 = _closure2_slot8;
                            var2['analyticsLocations'] = var1;
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 44;
                            var4 = var6[var4];
                            var7 = var5.bind(var1)(var4);
                            var6 = var7.getUserAvatarURL;
                            var5 = _closure2_slot0;
                            var4 = _closure1_slot10;
                            var3 = true;
                            var6 = var6.bind(var7)(var5, var3, var4);
                            var3 = null;
                            if(!(var3 != var6)) { _fun0012_ip = 113; continue _fun0012 }
case 69:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 41;
                            var2 = var4[var2];
                            var5 = var3.bind(var1)(var2);
                            var2 = var5.copy;
                            var2 = var2.bind(var5)(var6);
                            var2 = 43;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.presentLinkCopied;
                            var2 = var2.bind(var3)();
case 113:
                            return var1;
                        }
                    };
                    var7['onPress'] = var9;
                    var7 = var8.bind(var5)(var7);
case 111:
                    var7 = _closure2_slot1;
                    if(!(var4 != var7)) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                    var8 = _closure2_slot1;
                    var7 = var8.getBannerURL;
                    var3 = {};
                    var9 = true;
                    var3['canAnimate'] = var9;
                    var9 = _closure1_slot10;
                    var3['size'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var _closure3_slot0 = var3;
                    if(!(var4 != var3)) { _fun0011_ip = 114; continue _fun0011 }
case 116:
                    var4 = var5.push;
                    var3 = {};
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var8 = var7[var10];
                    var8 = var11.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var7[var10];
                    var7 = var11.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.hsNv0R;
                    var7 = var8.bind(var9)(var7);
                    var3['label'] = var7;
                    var6 = function onPress() {
                        var3 = _closure2_slot7;
                        var2 = {};
                        var4 = 'COPY_BANNER_IMAGE_LINK';
                        var2['action'] = var4;
                        var1 = _closure2_slot8;
                        var2['analyticsLocations'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 41;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.copy;
                        var2 = _closure3_slot0;
                        var2 = var5.bind(var6)(var2);
                        var2 = 43;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentLinkCopied;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onPress'] = var6;
                    var3 = var4.bind(var5)(var3);
case 114:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 45;
                    var2 = var6[var2];
                    var4 = var9.bind(var1)(var2);
                    var3 = var4.showSimpleActionSheet;
                    var2 = {};
                    var2['options'] = var5;
                    var5 = 'copy-info';
                    var2['key'] = var5;
                    var5 = {};
                    var7 = var6[var10];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var6[var10];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.QvQeLv;
                    var6 = var7.bind(var8)(var6);
                    var5['title'] = var6;
                    var2['header'] = var5;
                    var5 = 'stack';
                    var2['stackingBehavior'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var12['action'] = var14;
            var12 = var13.bind(var11)(var12);
case 107:
            var4 = var1 != var4;
            if(!var4) { _fun0001_ip = 117; continue _fun0001 }
case 118:
            var4 = var1 != var9;
case 117:
            if(!var4) { _fun0001_ip = 119; continue _fun0001 }
case 120:
            var9 = var11.push;
            var4 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 24;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.PHjkRE;
            var12 = var13.bind(var14)(var12);
            var4['label'] = var12;
            var12 = function action() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 46;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot14;
                var1['userId'] = var5;
                var5 = _closure2_slot3;
                var1['selectedChannel'] = var5;
                var5 = _closure2_slot13;
                var1['showUserProfile'] = var5;
                var4 = _closure2_slot8;
                var1['analyticsLocations'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4['action'] = var12;
            var4 = var9.bind(var11)(var4);
case 119:
            var4 = var11.length;
            if(!(var7 === var4)) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            var4 = var10.length;
            var1 = null;
            if(!(var7 !== var4)) { _fun0001_ip = 123; continue _fun0001 }
case 121:
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 47;
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
                var4 = _closure1_slot16;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 48;
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
                var1[4] = var8;
                var10 = 'secondary-overlay';
                var5 = 'variant';
                var1[4] = var10;
                var5 = 24;
                var10 = var9[var5];
                var10 = var6.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["+zofAD"];
                var10 = var10.bind(var11)(var5);
                var5 = 'accessibilityLabel';
                var1[4] = var10;
                var5 = 49;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.MoreHorizontalIcon;
                var5 = {};
                var5['size'] = var8;
                var8 = _closure1_slot1;
                var7 = 50;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.colors;
                var7 = var7.WHITE;
                var5['color'] = var7;
                var6 = var4.bind(var3)(var6, var5);
                var5 = 'icon';
                var1[4] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 123:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();