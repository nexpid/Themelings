// app/modules/user_profile/native/BotUserProfileOverflowMenu.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var4.ApplicationFlags;
    var _closure1_slot9 = var7;
    var4 = var4.RelationshipTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot11 = var7;
    var4 = var4.IGNORE_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/BotUserProfileOverflowMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BotUserProfileOverflowMenu(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.application;
            var _closure2_slot0 = var14;
            var12 = var1.user;
            var _closure2_slot1 = var12;
            var4 = var1.channel;
            var _closure2_slot2 = var4;
            var5 = undefined;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 8;
            var6 = var16[var1];
            var10 = var2.bind(var5)(var6);
            var9 = var10.useStateFromStoresObject;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var5 = var4.getRelationshipType;
                var2 = _closure2_slot1;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['relationshipType'] = var3;
                var3 = var4.isIgnored;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isIgnored'] = var2;
                return var1;
            };
            var6 = var9.bind(var10)(var7, var6);
            var15 = var6.relationshipType;
            var13 = var6.isIgnored;
            var1 = var16[var1];
            var9 = var2.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = _closure1_slot4;
            var6[1] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var4 = _closure1_slot6;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var9)(var6, var1);
            var _closure2_slot3 = var7;
            var1 = 9;
            var1 = var16[var1];
            var9 = var2.bind(var5)(var1);
            var6 = var9.isIarUserReportingEnabled;
            var1 = 'User Profile Options - Mobile';
            var9 = var6.bind(var9)(var1);
            var1 = 10;
            var1 = var16[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useUserProfileAnalyticsContext;
            var1 = var1.bind(var2)();
            var10 = var1.context;
            var _closure2_slot4 = var10;
            var1 = var1.trackUserProfileAction;
            var _closure2_slot5 = var1;
            var11 = _closure1_slot1;
            var2 = 11;
            var1 = var16[var2];
            var6 = var11.bind(var5)(var1);
            var1 = 12;
            var1 = var16[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.USER_PROFILE_OVERFLOW_MENU;
            var1 = var6.bind(var5)(var1);
            var6 = var1.analyticsLocations;
            var _closure2_slot6 = var6;
            var1 = var1.newestAnalyticsLocation;
            var _closure2_slot7 = var1;
            var11 = _closure1_slot7;
            var1 = var11.getCurrentUser;
            var1 = var1.bind(var11)();
            var _closure2_slot8 = var1;
            var17 = _closure1_slot3;
            var16 = var17.useCallback;
            var1 = var12.id;
            var11 = new Array(4);
            var11[0] = var1;
            var1 = null;
            var19 = var1 == var4;
            var18 = undefined;
            if(var19) { _fun0001_ip = 351; continue _fun0001 }
 346:
            var18 = var4.id;
 351:
            var11[1] = var18;
            var11[2] = var10;
            var11[3] = var6;
            var10 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = _closure2_slot4;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var6 = arg1;
                    var5 = 'showGuildProfile';
                    var2[var5] = var6;
                    var5 = _closure2_slot1;
                    var6 = var5.id;
                    var5 = 'userId';
                    var2[var5] = var6;
                    var6 = _closure2_slot2;
                    var5 = null;
                    var5 = var5 == var6;
                    var6 = undefined;
                    if(var5) { _fun0002_ip = 95; continue _fun0002 }
 86:
                    var5 = _closure2_slot2;
                    var6 = var5.id;
 95:
                    var5 = 'channelId';
                    var2[var5] = var6;
                    var5 = _closure2_slot6;
                    var4 = 'sourceAnalyticsLocations';
                    var2[var4] = var5;
                    var5 = true;
                    var4 = 'ignoreBlockedSpeedBump';
                    var2[var4] = var5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var16.bind(var17)(var10, var11);
            _closure2_slot9 = var10;
            var11 = new Array(0);
            var10 = new Array(0);
            var12 = var12.id;
            _closure2_slot10 = var12;
            var16 = var1 == var4;
            var12 = undefined;
            if(var16) { _fun0001_ip = 414; continue _fun0001 }
 404:
            var16 = var4.getGuildId;
            var12 = var16.bind(var4)();
 414:
            _closure2_slot11 = var12;
            var12 = _closure1_slot10;
            var12 = var12.BLOCKED;
            var12 = var15 === var12;
            if(!var13) { _fun0001_ip = 520; continue _fun0001 }
 435:
            if(var12) { _fun0001_ip = 520; continue _fun0001 }
 438:
            var15 = var10.push;
            var13 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 14;
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.8wXU9P;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var16 = function action() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot5;
                    var3 = {};
                    var1 = 'UNIGNORE';
                    var3['action'] = var1;
                    var1 = _closure2_slot6;
                    var3['analyticsLocations'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.unignoreUser;
                    var5 = _closure2_slot10;
                    var4 = _closure2_slot7;
                    var8 = _closure2_slot2;
                    var3 = null;
                    var8 = var3 == var8;
                    var3 = undefined;
                    if(var8) { _fun0003_ip = 96; continue _fun0003 }
 87:
                    var8 = _closure2_slot2;
                    var3 = var8.id;
 96:
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var13['action'] = var16;
            var13 = var15.bind(var10)(var13);
            _fun0001_ip = 603; continue _fun0001;
 520:
            if(var12) { _fun0001_ip = 603; continue _fun0001 }
 523:
            var15 = var10.push;
            var13 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 14;
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.ytCpKi;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var16 = function action() {
                var4 = _closure2_slot5;
                var3 = {};
                var1 = 'IGNORE';
                var3['action'] = var1;
                var1 = _closure2_slot6;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 16;
                var4 = var9[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var8 = _closure1_slot0;
                var4 = 18;
                var4 = var9[var4];
                var10 = var8.bind(var1)(var4);
                var4 = 17;
                var5 = var9[var4];
                var4 = var9.paths;
                var5 = var10.bind(var1)(var5, var4);
                var13 = _closure1_slot12;
                var3 = {};
                var2 = _closure2_slot10;
                var3['userId'] = var2;
                var2 = function onSuccess() {
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3['onSuccess'] = var2;
                var2 = 19;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.ImpressionNames;
                var2 = var2.IGNORE_USER_CONFIRMATION;
                var3['impressionName'] = var2;
                var11 = 'stack';
                var15 = var7;
                var14 = var5;
                var12 = var3;
                var2 = var15[var6](var14, var13, var12, var11, var10);
                return var1;
            };
            var13['action'] = var16;
            var13 = var15.bind(var10)(var13);
 603:
            if(!var12) { _fun0001_ip = 686; continue _fun0001 }
 606:
            var15 = var10.push;
            var13 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 14;
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot5;
                    var3 = {};
                    var1 = 'UNBLOCK';
                    var3['action'] = var1;
                    var1 = _closure2_slot6;
                    var3['analyticsLocations'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.unblockUser;
                    var6 = _closure2_slot10;
                    var3 = {};
                    var9 = _closure2_slot7;
                    var3['location'] = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 20;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.showUnblockSuccessToast;
                    var4 = _closure2_slot10;
                    var7 = _closure2_slot2;
                    var3 = null;
                    var7 = var3 == var7;
                    var3 = undefined;
                    if(var7) { _fun0004_ip = 128; continue _fun0004 }
 119:
                    var7 = _closure2_slot2;
                    var3 = var7.id;
 128:
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var13['action'] = var16;
            var13 = var15.bind(var10)(var13);
 686:
            if(var12) { _fun0001_ip = 984; continue _fun0001 }
 692:
            var15 = var10.push;
            var12 = {};
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var19 = 14;
            var16 = var13[var19];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var13 = var13[var19];
            var13 = var18.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.l4EmaW;
            var13 = var16.bind(var17)(var13);
            var12['label'] = var13;
            var13 = 'destructive';
            var12['variant'] = var13;
            var16 = function action() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = {};
                    var1 = 'BLOCK';
                    var2['action'] = var1;
                    var1 = _closure2_slot6;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 16;
                    var4 = var3[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 21;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var5 = var5.bind(var1)(var4, var3);
                    var4 = _closure1_slot11;
                    var3 = {};
                    var8 = _closure2_slot10;
                    var3['userId'] = var8;
                    var10 = _closure2_slot2;
                    var8 = null;
                    var10 = var8 == var10;
                    var8 = undefined;
                    if(var10) { _fun0005_ip = 134; continue _fun0005 }
 125:
                    var9 = _closure2_slot2;
                    var8 = var9.id;
 134:
                    var3['channelId'] = var8;
                    var8 = function onSuccess() {
                        var2 = _closure2_slot9;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var3['onSuccess'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 19;
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
            var12['action'] = var16;
            var12 = var15.bind(var10)(var12);
            if(var9) { _fun0001_ip = 903; continue _fun0001 }
 785:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 23;
            var9 = var15[var9];
            var12 = var12.bind(var5)(var9);
            var9 = var12.isAndroid;
            var9 = var9.bind(var12)();
            if(!var9) { _fun0001_ip = 984; continue _fun0001 }
 820:
            var12 = var10.push;
            var9 = {};
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var19];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.TbHyMD;
            var15 = var16.bind(var17)(var15);
            var9['label'] = var15;
            var9['variant'] = var13;
            var15 = function action() {
                var3 = _closure2_slot5;
                var2 = {};
                var1 = 'REPORT';
                var2['action'] = var1;
                var1 = _closure2_slot6;
                var2['analyticsLocations'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 24;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.alertUserReported;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 25;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot8;
                var3 = var2.TNS_USER_REPORT_SUBMITTED;
                var2 = {};
                var6 = _closure2_slot10;
                var2['reported_user_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var9['action'] = var15;
            var9 = var12.bind(var10)(var9);
            _fun0001_ip = 984; continue _fun0001;
 903:
            var12 = var10.push;
            var9 = {};
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var19];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.wqHXNj;
            var15 = var16.bind(var17)(var15);
            var9['label'] = var15;
            var9['variant'] = var13;
            var13 = function action() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure2_slot5;
                    var2 = {};
                    var1 = 'REPORT';
                    var2['action'] = var1;
                    var1 = _closure2_slot6;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var4 = _closure2_slot11;
                    var2 = '@me';
                    var7 = undefined;
                    if(!(var2 !== var4)) { _fun0006_ip = 65; continue _fun0006 }
 49:
                    var4 = _closure2_slot11;
                    var2 = null;
                    var7 = undefined;
                    if(!(var2 !== var4)) { _fun0006_ip = 65; continue _fun0006 }
 61:
                    var7 = _closure2_slot11;
 65:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 22;
                    var5 = var4[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.showReportModalForUser;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var3, var7);
                    var3 = _closure1_slot1;
                    var2 = 16;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var9['action'] = var13;
            var9 = var12.bind(var10)(var9);
 984:
            var12 = var11.push;
            var9 = {};
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var15 = 14;
            var16 = var13[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var13 = var13[var15];
            var13 = var18.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.y5MwJy;
            var13 = var16.bind(var17)(var13);
            var9['label'] = var13;
            var13 = function action() {
                var4 = _closure2_slot5;
                var3 = {};
                var1 = 'COPY_USERNAME';
                var3['action'] = var1;
                var1 = _closure2_slot6;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 26;
                var6 = var5[var6];
                var7 = var4.bind(var1)(var6);
                var6 = var7.copy;
                var8 = _closure1_slot1;
                var3 = 27;
                var3 = var5[var3];
                var10 = var8.bind(var1)(var3);
                var9 = var10.getUserTag;
                var8 = _closure2_slot1;
                var3 = {'decoration': 'never', 'identifiable': 'always'};
                var3 = var9.bind(var10)(var8, var3);
                var3 = var6.bind(var7)(var3);
                var3 = 28;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.presentUsernameCopied;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot9;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['action'] = var13;
            var9 = var12.bind(var11)(var9);
            if(!(var1 != var14)) { _fun0001_ip = 1238; continue _fun0001 }
 1071:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 29;
            var9 = var13[var9];
            var16 = var12.bind(var5)(var9);
            var13 = var16.hasFlag;
            var9 = var14.flags;
            var17 = var1 != var9;
            var12 = 0;
            if(!var17) { _fun0001_ip = 1114; continue _fun0001 }
 1111:
            var12 = var9;
 1114:
            var9 = _closure1_slot9;
            var9 = var9.EMBEDDED;
            var9 = var13.bind(var16)(var12, var9);
            _closure2_slot12 = var9;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 30;
            var9 = var13[var9];
            var12 = var17.bind(var5)(var9);
            var9 = var12.getInstallAppPropsFromProfileApplication;
            var9 = var9.bind(var12)(var14);
            _closure2_slot13 = var9;
            var12 = var11.push;
            var9 = {};
            var14 = var13[var15];
            var14 = var17.bind(var5)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var13 = var13[var15];
            var13 = var17.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.WqhZsr;
            var13 = var14.bind(var16)(var13);
            var9['label'] = var13;
            var13 = function action() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = {};
                    var1 = 'COPY_APP_LINK';
                    var2['action'] = var1;
                    var1 = _closure2_slot6;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot12;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 31;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    if(var3) { _fun0007_ip = 104; continue _fun0007 }
 65:
                    var4 = var5.getApplicationInstallURL;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var3['id'] = var6;
                    var10 = _closure2_slot13;
                    var11 = var3;
                    var6 = copyDataProperties(var11, var10);
                    var6 = var4.bind(var5)(var3);
                    _fun0007_ip = 159; continue _fun0007;
 104:
                    var4 = var5.getActivityLaunchURL;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var3['applicationId'] = var7;
                    var9 = _closure2_slot8;
                    var7 = null;
                    var9 = var7 == var9;
                    var7 = undefined;
                    if(var9) { _fun0007_ip = 149; continue _fun0007 }
 140:
                    var8 = _closure2_slot8;
                    var7 = var8.id;
 149:
                    var3['referrerId'] = var7;
                    var6 = var4.bind(var5)(var3);
 159:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.copy;
                    var2 = var2.bind(var5)(var6);
                    var2 = 28;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentLinkCopied;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var9['action'] = var13;
            var9 = var12.bind(var11)(var9);
 1238:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 32;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var12 = var9.DeveloperMode;
            var9 = var12.getSetting;
            var9 = var9.bind(var12)();
            if(!var9) { _fun0001_ip = 1354; continue _fun0001 }
 1277:
            var12 = var11.push;
            var9 = {};
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = var13[var15];
            var14 = var17.bind(var5)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var13 = var13[var15];
            var13 = var17.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13./AXYnJ;
            var13 = var14.bind(var16)(var13);
            var9['label'] = var13;
            var13 = function action() {
                var4 = _closure2_slot5;
                var3 = {};
                var1 = 'COPY_USER_ID';
                var3['action'] = var1;
                var1 = _closure2_slot6;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 26;
                var3 = var5[var3];
                var7 = var4.bind(var1)(var3);
                var6 = var7.copy;
                var3 = _closure2_slot10;
                var3 = var6.bind(var7)(var3);
                var3 = 28;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.presentIdCopied;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot9;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['action'] = var13;
            var9 = var12.bind(var11)(var9);
 1354:
            var4 = var1 != var4;
            if(!var4) { _fun0001_ip = 1365; continue _fun0001 }
 1361:
            var4 = var1 != var7;
 1365:
            if(!var4) { _fun0001_ip = 1445; continue _fun0001 }
 1368:
            var7 = var11.push;
            var4 = {};
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = var9[var15];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var9[var15];
            var9 = var14.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.PHjkRE;
            var9 = var12.bind(var13)(var9);
            var4['label'] = var9;
            var9 = function action() {
                var4 = _closure2_slot5;
                var3 = {};
                var1 = 'PRESS_VIEW_APP_COMMANDS';
                var3['action'] = var1;
                var1 = _closure2_slot6;
                var3['analyticsLocations'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 16;
                var4 = var9[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var8 = _closure1_slot0;
                var3 = 18;
                var3 = var9[var3];
                var7 = var8.bind(var1)(var3);
                var3 = 33;
                var4 = var9[var3];
                var3 = var9.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = _closure2_slot3;
                var3['channel'] = var7;
                var7 = 34;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.ApplicationCommandType;
                var7 = var7.USER;
                var3['commandType'] = var7;
                var7 = _closure2_slot10;
                var3['commandTargetId'] = var7;
                var2 = _closure2_slot9;
                var3['onBack'] = var2;
                var2 = function onPressAppCommand() {
                    var3 = _closure2_slot5;
                    var2 = {};
                    var4 = 'PRESS_APP_COMMAND';
                    var2['action'] = var4;
                    var1 = _closure2_slot6;
                    var2['analyticsLocations'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onPressAppCommand'] = var2;
                var2 = 'CommandContextMenuActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var4['action'] = var9;
            var4 = var7.bind(var11)(var4);
 1445:
            var4 = var11.length;
            var7 = 0;
            if(!(var7 === var4)) { _fun0001_ip = 1467; continue _fun0001 }
 1456:
            var4 = var10.length;
            var1 = null;
            if(!(var7 !== var4)) { _fun0001_ip = 1562; continue _fun0001 }
 1467:
            var4 = _closure1_slot13;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 35;
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
                var4 = _closure1_slot13;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 36;
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
                var5 = 14;
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
                var5 = 37;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.MoreHorizontalIcon;
                var5 = {};
                var5['size'] = var8;
                var8 = _closure1_slot1;
                var7 = 38;
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
 1562:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();