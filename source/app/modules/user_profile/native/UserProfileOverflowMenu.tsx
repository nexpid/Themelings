// app/modules/user_profile/native/UserProfileOverflowMenu.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
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
            if(!var13) { _fun0001_ip = 344; continue _fun0001 }
 326:
            var6 = var6.length;
            var2 = var2.length;
            var2 = var6 + var2;
            var13 = var2 > var7;
 344:
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
            if(var18) { _fun0001_ip = 512; continue _fun0001 }
 507:
            var11 = var4.guild_id;
 512:
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
            if(var29) { _fun0001_ip = 599; continue _fun0001 }
 594:
            var28 = var27.guild_id;
 599:
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
 0:
                    var4 = _closure2_slot9;
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
 10:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 != var3;
 20:
                    var2 = null;
                    var3 = null;
                    if(!var4) { _fun0002_ip = 59; continue _fun0002 }
 27:
                    var6 = _closure1_slot5;
                    var5 = var6.getParticipant;
                    var4 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var5.bind(var6)(var4, var1);
 59:
                    var1 = {};
                    var4 = var2 != var3;
                    var1['userIsInCall'] = var4;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 99; continue _fun0002 }
 77:
                    var5 = var3.type;
                    var4 = _closure1_slot12;
                    var4 = var4.USER;
                    var2 = var5 === var4;
 99:
                    if(!var2) { _fun0002_ip = 108; continue _fun0002 }
 102:
                    var2 = var3.ringing;
 108:
                    var1['isUserRinging'] = var2;
                    return var1;
                }
            };
            var18 = var22.bind(var23)(var18, var14);
            var14 = var18.userIsInCall;
            _closure2_slot11 = var14;
            var22 = var18.isUserRinging;
            if(!var12) { _fun0001_ip = 692; continue _fun0001 }
 688:
            var12 = var1 != var26;
 692:
            if(!var12) { _fun0001_ip = 707; continue _fun0001 }
 695:
            var18 = !var14;
            if(var18) { _fun0001_ip = 704; continue _fun0001 }
 701:
            var18 = var22;
 704:
            var12 = var18;
 707:
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
            if(var28) { _fun0001_ip = 807; continue _fun0001 }
 802:
            var26 = var27.guild_id;
 807:
            var18['voice_guild_id'] = var26;
            var22['properties'] = var18;
            var18 = {};
            if(!var11) { _fun0001_ip = 825; continue _fun0001 }
 822:
            var11 = var12;
 825:
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
            if(var26) { _fun0001_ip = 889; continue _fun0001 }
 884:
            var23 = var4.id;
 889:
            var11[1] = var23;
            var11[2] = var10;
            var11[3] = var6;
            var10 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(var5) { _fun0003_ip = 95; continue _fun0003 }
 86:
                    var5 = _closure2_slot1;
                    var6 = var5.id;
 95:
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
            if(var22) { _fun0001_ip = 959; continue _fun0001 }
 949:
            var22 = var4.getGuildId;
            var17 = var22.bind(var4)();
 959:
            _closure2_slot14 = var17;
            var17 = _closure1_slot11;
            var17 = var17.BLOCKED;
            var17 = var19 === var17;
            var26 = var1 == var25;
            var22 = undefined;
            if(var26) { _fun0001_ip = 991; continue _fun0001 }
 986:
            var22 = var25.guildId;
 991:
            if(!(var1 != var22)) { _fun0001_ip = 1079; continue _fun0001 }
 995:
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
 1079:
            var26 = var1 == var24;
            var22 = undefined;
            if(var26) { _fun0001_ip = 1093; continue _fun0001 }
 1088:
            var22 = var24.guildId;
 1093:
            var22 = var1 != var22;
            if(!var22) { _fun0001_ip = 1118; continue _fun0001 }
 1100:
            var26 = var1 == var25;
            var24 = undefined;
            if(var26) { _fun0001_ip = 1114; continue _fun0001 }
 1109:
            var24 = var25.guildId;
 1114:
            var22 = var1 == var24;
 1118:
            if(!var22) { _fun0001_ip = 1205; continue _fun0001 }
 1121:
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
 1205:
            if(!(var18 !== var23)) { _fun0001_ip = 2136; continue _fun0001 }
 1212:
            var18 = var1 != var4;
            if(!var18) { _fun0001_ip = 1232; continue _fun0001 }
 1219:
            var22 = var4.isThread;
            var22 = var22.bind(var4)();
            var18 = !var22;
 1232:
            if(!var18) { _fun0001_ip = 1251; continue _fun0001 }
 1235:
            var22 = var4.isOwner;
            var21 = var21.id;
            var18 = var22.bind(var4)(var21);
 1251:
            var22 = undefined;
            if(!var18) { _fun0001_ip = 1269; continue _fun0001 }
 1256:
            var21 = var4.recipients;
            var18 = var1 != var21;
            var22 = var21;
 1269:
            if(!var18) { _fun0001_ip = 1282; continue _fun0001 }
 1272:
            var21 = var22.includes;
            var18 = var21.bind(var22)(var23);
 1282:
            if(!var18) { _fun0001_ip = 1379; continue _fun0001 }
 1285:
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
 1379:
            var18 = _closure1_slot11;
            var18 = var18.FRIEND;
            if(!(var19 === var18)) { _fun0001_ip = 1491; continue _fun0001 }
 1393:
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
            if(var20) { _fun0001_ip = 1460; continue _fun0001 }
 1447:
            var20 = var21.BGYkaG;
            var20 = var22.bind(var23)(var20);
            _fun0001_ip = 1471; continue _fun0001;
 1460:
            var21 = var21.8pOYUF;
            var20 = var22.bind(var23)(var21);
 1471:
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
 1491:
            if(!var15) { _fun0001_ip = 1581; continue _fun0001 }
 1494:
            if(var17) { _fun0001_ip = 1581; continue _fun0001 }
 1497:
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
 0:
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
                    if(var8) { _fun0004_ip = 96; continue _fun0004 }
 87:
                    var8 = _closure2_slot1;
                    var3 = var8.id;
 96:
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var2 = _closure2_slot12;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var15['action'] = var19;
            var15 = var18.bind(var10)(var15);
            _fun0001_ip = 1666; continue _fun0001;
 1581:
            if(var17) { _fun0001_ip = 1666; continue _fun0001 }
 1584:
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
 0:
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
                    if(var10) { _fun0005_ip = 134; continue _fun0005 }
 125:
                    var9 = _closure2_slot1;
                    var8 = var9.id;
 134:
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
 1666:
            var15 = var10.push;
            if(var17) { _fun0001_ip = 2059; continue _fun0001 }
 1677:
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
 0:
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
                    if(var10) { _fun0006_ip = 106; continue _fun0006 }
 97:
                    var9 = _closure2_slot1;
                    var8 = var9.id;
 106:
                    var3['channelId'] = var8;
                    var8 = function onSuccess() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                            if(var7) { _fun0007_ip = 62; continue _fun0007 }
 53:
                            var6 = _closure2_slot1;
                            var2 = var6.id;
 62:
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
            if(var16) { _fun0001_ip = 1887; continue _fun0001 }
 1767:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 34;
            var16 = var19[var16];
            var17 = var17.bind(var5)(var16);
            var16 = var17.isAndroid;
            var16 = var16.bind(var17)();
            if(!var16) { _fun0001_ip = 1970; continue _fun0001 }
 1802:
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
            _fun0001_ip = 1970; continue _fun0001;
 1887:
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
 0:
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
                    if(!(var2 !== var4)) { _fun0008_ip = 65; continue _fun0008 }
 49:
                    var4 = _closure2_slot14;
                    var2 = null;
                    var7 = undefined;
                    if(!(var2 !== var4)) { _fun0008_ip = 65; continue _fun0008 }
 61:
                    var7 = _closure2_slot14;
 65:
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
 1970:
            if(!var13) { _fun0001_ip = 2136; continue _fun0001 }
 1976:
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
            _fun0001_ip = 2136; continue _fun0001;
 2059:
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
 0:
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
                    if(var7) { _fun0009_ip = 136; continue _fun0009 }
 127:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
 136:
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var13['action'] = var16;
            var13 = var15.bind(var10)(var13);
 2136:
            if(!var12) { _fun0001_ip = 2237; continue _fun0001 }
 2139:
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
            if(var14) { _fun0001_ip = 2206; continue _fun0001 }
 2193:
            var14 = var15.bHa9kJ;
            var14 = var16.bind(var17)(var14);
            _fun0001_ip = 2217; continue _fun0001;
 2206:
            var15 = var15.ygslb2;
            var14 = var16.bind(var17)(var15);
 2217:
            var12['label'] = var14;
            var14 = function action() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var5 = _closure2_slot11;
                    var1 = 'RING';
                    if(!var5) { _fun0010_ip = 28; continue _fun0010 }
 22:
                    var1 = 'STOP_RINGING';
 28:
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
                    if(var4) { _fun0010_ip = 204; continue _fun0010 }
 81:
                    var8 = var5.ring;
                    var7 = _closure2_slot3;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var6 = new Array(1);
                    var6[0] = var4;
                    var4 = 'user_profile_overflow_menu';
                    var4 = var8.bind(var5)(var7, var6, var4);
                    var4 = _closure2_slot10;
                    if(!var4) { _fun0010_ip = 138; continue _fun0010 }
 128:
                    var7 = _closure2_slot4;
                    var6 = null;
                    var4 = var6 != var7;
 138:
                    if(!var4) { _fun0010_ip = 237; continue _fun0010 }
 141:
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
                    _fun0010_ip = 237; continue _fun0010;
 204:
                    var4 = var5.stopRinging;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 237:
                    return var1;
                }
            };
            var12['action'] = var14;
            var12 = var13.bind(var11)(var12);
 2237:
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
            if(!var12) { _fun0001_ip = 2429; continue _fun0001 }
 2350:
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
 2429:
            var4 = var1 != var4;
            if(!var4) { _fun0001_ip = 2440; continue _fun0001 }
 2436:
            var4 = var1 != var9;
 2440:
            if(!var4) { _fun0001_ip = 2522; continue _fun0001 }
 2443:
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
 2522:
            var4 = var11.length;
            if(!(var7 === var4)) { _fun0001_ip = 2542; continue _fun0001 }
 2531:
            var4 = var10.length;
            var1 = null;
            if(!(var7 !== var4)) { _fun0001_ip = 2639; continue _fun0001 }
 2542:
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
 2639:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();