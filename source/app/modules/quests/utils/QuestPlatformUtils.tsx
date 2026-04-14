// app/modules/quests/utils/QuestPlatformUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function supportedConsoles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = arg1;
            var2 = var2.config;
            var2 = var2.taskConfigV2;
            var2 = var2.tasks;
            var7 = var3.bind(var4)(var2);
            var2 = var7.length;
            var6 = 0;
            var2 = var6 < var2;
            var4 = 3;
            var3 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var7[var6];
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var9.bind(var3)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ON_XBOX;
            if(!(var2 !== var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var9.bind(var3)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ON_PLAYSTATION;
            if(!(var2 === var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var1.push;
            var2 = _closure1_slot6;
            var2 = var2.PLAYSTATION;
            var2 = var8.bind(var1)(var2);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = var1.push;
            var2 = _closure1_slot6;
            var2 = var2.XBOX;
            var2 = var8.bind(var1)(var2);
case 6:
            var6 = var6 + 1;
            var2 = var7.length;
            if(var6 < var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function getPlatformTypeForHintMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.connected_account_type;
            var1 = 'xbox';
            if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot6;
            var1 = var1.PLAYSTATION;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var2 = _closure1_slot6;
            var1 = var2.XBOX;
case 10:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.QuestTaskPlatform;
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot4 = var9;
    var9 = var6.ComponentActions;
    var _closure1_slot5 = var9;
    var9 = var6.PlatformTypes;
    var _closure1_slot6 = var9;
    var6 = var6.UserSettingsSections;
    var _closure1_slot7 = var6;
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/QuestPlatformUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function supportedTaskPlatforms(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 2;
            var1 = var1[var7];
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = var4.hasPlayOnDesktopTask;
            var1 = {};
            var1['quest'] = var5;
            var4 = var3.bind(var4)(var1);
            if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var8 = var3.bind(var6)(var1);
            var3 = var8.hasStreamOnDesktopTask;
            var1 = {};
            var1['quest'] = var5;
            var4 = var3.bind(var8)(var1);
case 11:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var3 = var3.bind(var6)(var1);
            var1 = var3.hasSomeConsoleTasks;
            var3 = var1.bind(var3)(var5);
            var1 = new Array(0);
            if(!var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = var1.push;
            var4 = _closure1_slot3;
            var4 = var4.DESKTOP;
            var4 = var5.bind(var1)(var4);
case 13:
            if(!var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = var1.push;
            var2 = _closure1_slot3;
            var2 = var2.CONSOLE;
            var2 = var3.bind(var1)(var2);
case 15:
            return var1;
        }
    };
    var3['supportedTaskPlatforms'] = var6;
    var3['supportedConsoles'] = var5;
    var5 = function isQuestSupportedOnWeb(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var1 = var6[var2];
            var3 = undefined;
            var7 = var5.bind(var3)(var1);
            var1 = var7.hasWatchVideoTasks;
            var1 = var1.bind(var7)(var4);
            var2 = var6[var2];
            var3 = var5.bind(var3)(var2);
            var2 = var3.hasPlayActivityTask;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['isQuestSupportedOnWeb'] = var5;
    var3['getPlatformTypeForHintMessage'] = var4;
    var4 = function openAuthorizationConnectionModal(arg1, arg2) {
        var1 = arg1;
        var4 = arg2;
        var5 = var1.platformType;
        var9 = var1.quest;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var3 = var6[var1];
        var1 = undefined;
        var8 = var7.bind(var1)(var3);
        var7 = var8.trackQuestContentClicked;
        var3 = {};
        var9 = var9.id;
        var3['questId'] = var9;
        var9 = var4.content;
        var3['questContent'] = var9;
        var9 = var4.sourceQuestContent;
        var3['sourceQuestContent'] = var9;
        var9 = var4.ctaContent;
        var3['questContentCTA'] = var9;
        var9 = var4.impressionId;
        var3['impressionId'] = var9;
        var3 = var7.bind(var8)(var3);
        var3 = _closure1_slot1;
        var2 = 5;
        var2 = var6[var2];
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['platformType'] = var5;
        var4 = var4.ctaContent;
        var2['location'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['openAuthorizationConnectionModal'] = var4;
    var4 = function getExpiredCredentialsHintMessage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot9;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot6;
            var1 = var1.XBOX;
            if(!(var3 !== var1)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.iDiwby;
            _fun0005_ip = 21; continue _fun0005;
case 19:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var1 = var2.mytEv+;
case 21:
            return var1;
        }
    };
    var3['getExpiredCredentialsHintMessage'] = var4;
    var4 = function openGameLinkDirectly(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var14 = arg2;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var14;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var6 = undefined;
            var7 = var5.bind(var6)(var2);
            var5 = var7.getCtaLink;
            var2 = var3.config;
            var5 = var5.bind(var7)(var2);
            var2 = var3.config;
            var10 = var2.ctaConfig;
            var2 = null;
            var7 = var2 == var10;
            var8 = null;
            if(var7) { _fun0006_ip = 22; continue _fun0006 }
case 11:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = 7;
            var7 = var7[var12];
            var9 = var9.bind(var6)(var7);
            var7 = var9.isIOS;
            var7 = var7.bind(var9)();
            if(var7) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var9 = var9.bind(var6)(var7);
            var7 = var9.getOS;
            var9 = var7.bind(var9)();
            var7 = 'ios';
            if(!(var7 === var9)) { _fun0006_ip = 25; continue _fun0006 }
case 23:
            var9 = var10.ios;
            var11 = var2 == var9;
            var7 = undefined;
            if(var11) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var7 = var9.iosAppId;
case 26:
            if(!(var2 != var7)) { _fun0006_ip = 25; continue _fun0006 }
case 28:
            var7 = var10.ios;
            var9 = var7.iosAppId;
            var7 = var9.startsWith;
            var11 = 'id';
            var9 = var7.bind(var9)(var11);
            var7 = var10.ios;
            var7 = var7.iosAppId;
            if(var9) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var9 = global;
            var9 = var9.HermesInternal;
            var9 = var9.concat;
            var11 = var9.bind(var11)(var7);
            _fun0006_ip = 31; continue _fun0006;
case 29:
            var11 = var7;
case 31:
            var7 = global;
            var7 = var7.HermesInternal;
            var9 = var7.concat;
            var7 = 'https://apps.apple.com/app/';
            var7 = var9.bind(var7)(var11);
            _fun0006_ip = 32; continue _fun0006;
case 25:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var11 = var11.bind(var6)(var9);
            var9 = var11.isAndroid;
            var9 = var9.bind(var11)();
            if(var9) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var11 = var11.bind(var6)(var9);
            var9 = var11.getOS;
            var12 = var9.bind(var11)();
            var11 = 'android';
            var9 = null;
            if(!(var11 === var12)) { _fun0006_ip = 35; continue _fun0006 }
case 33:
            var12 = var10.android;
            var13 = var2 == var12;
            var11 = undefined;
            if(var13) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var11 = var12.androidAppId;
case 36:
            var11 = var2 == var11;
            var9 = null;
            if(var11) { _fun0006_ip = 35; continue _fun0006 }
case 38:
            var10 = var10.android;
            var12 = var10.androidAppId;
            var10 = global;
            var10 = var10.HermesInternal;
            var11 = var10.concat;
            var10 = 'https://play.google.com/store/apps/details?id=';
            var9 = var11.bind(var10)(var12);
case 35:
            var7 = var9;
case 32:
            var8 = var7;
case 22:
            var11 = var5;
            if(!(var2 != var8)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var11 = var8;
case 39:
            var5 = var11;
case 41: // try_start_0
            var7 = global;
            var9 = var7.URL;
            var19 = var5;
            var7 = var9.prototype;
            var7 = Object.create(var7, {constructor: {value: var9}});
            var20 = var7;
            var5 = new var20[var9](var19, var18);
            var5 = var5 instanceof Object ? var5 : var7;
            var9 = var5.searchParams;
            var7 = var9.has;
            var5 = 'dclid';
            var5 = var7.bind(var9)(var5);
case 42: // try_end0
            _fun0006_ip = 43; continue _fun0006;
case 44: // catch_target0
            CatchBlockStart(arg_register=6);
            var5 = false;
case 43:
            var13 = undefined;
            var7 = var11;
            if(!var5) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 9;
            var5 = var10[var5];
            var9 = var9.bind(var6)(var5);
            var5 = var9.v4;
            var9 = var5.bind(var9)();
            var10 = var11;
            var5 = var9;
case 47: // try_start_1
            var11 = global;
            var15 = var11.URL;
            var19 = var10;
            var12 = var15.prototype;
            var12 = Object.create(var12, {constructor: {value: var15}});
            var20 = var12;
            var11 = new var20[var15](var19, var18);
            var11 = var11 instanceof Object ? var11 : var12;
            var16 = var11.searchParams;
            var15 = var16.set;
            var12 = var5;
            var5 = 'dclid';
            var5 = var15.bind(var16)(var5, var12);
            var5 = var11.toString;
            var5 = var5.bind(var11)();
case 48: // try_end1
            _fun0006_ip = 49; continue _fun0006;
case 50: // catch_target1
            CatchBlockStart(arg_register=10);
            var5 = var10;
case 49:
            var7 = var5;
            var13 = var9;
case 45:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var12 = var9.bind(var6)(var5);
            var11 = var12.trackQuestContentClicked;
            var5 = {};
            var15 = var3.id;
            var5['questId'] = var15;
            var15 = var14.content;
            var5['questContent'] = var15;
            var15 = var14.ctaContent;
            var5['questContentCTA'] = var15;
            var15 = var14.position;
            var5['questContentPosition'] = var15;
            var15 = var14.impressionId;
            var5['impressionId'] = var15;
            var14 = var14.sourceQuestContent;
            var5['sourceQuestContent'] = var14;
            var5['clickId'] = var13;
            var5 = var11.bind(var12)(var5);
            var12 = 10;
            var5 = var10[var12];
            var5 = var9.bind(var6)(var5);
            var13 = var5.ComponentDispatch;
            var11 = var13.dispatch;
            var5 = _closure1_slot5;
            var5 = var5.QUEST_GAME_LINK_OPENED;
            var5 = var11.bind(var13)(var5);
            var5 = 11;
            var5 = var10[var5];
            var5 = var9.bind(var6)(var5);
            var10 = var5.AppStoreBottomSheetOverlayExperiment;
            var9 = var10.getConfig;
            var5 = {};
            var11 = 'quest_open_game_link';
            var5['location'] = var11;
            var5 = var9.bind(var10)(var5);
            var5 = var5.enabled;
            if(!(var2 != var8)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            if(!var5) { _fun0006_ip = 51; continue _fun0006 }
case 53:
            var3 = var3.config;
            var9 = var3.ctaConfig;
            var5 = var2 == var9;
            var3 = null;
            if(var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 7;
            var5 = var5[var10];
            var8 = var8.bind(var6)(var5);
            var5 = var8.isAndroid;
            var5 = var5.bind(var8)();
            if(!var5) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var8 = var9.android;
            var11 = var2 == var8;
            var5 = undefined;
            if(var11) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var5 = var8.androidAppId;
case 58:
            if(!(var2 == var5)) { _fun0006_ip = 60; continue _fun0006 }
case 56:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var8 = var8.bind(var6)(var5);
            var5 = var8.isIOS;
            var8 = var5.bind(var8)();
            var5 = null;
            if(!var8) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var10 = var9.ios;
            var11 = var2 == var10;
            var8 = undefined;
            if(var11) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var8 = var10.iosAppId;
case 63:
            var8 = var2 != var8;
            var5 = null;
            if(!var8) { _fun0006_ip = 61; continue _fun0006 }
case 65:
            var8 = {};
            var10 = var9.ios;
            var14 = var10.iosAppId;
            var10 = global;
            var11 = var10.HermesInternal;
            var13 = var11.concat;
            var11 = 'https://apps.apple.com/app/id';
            var11 = var13.bind(var11)(var14);
            var8['url'] = var11;
            var11 = var10.parseInt;
            var10 = var9.ios;
            var10 = var10.iosAppId;
            var10 = var11.bind(var6)(var10, var12);
            var8['appId'] = var10;
            var5 = var8;
case 61:
            _fun0006_ip = 66; continue _fun0006;
case 60:
            var8 = {};
            var9 = var9.android;
            var11 = var9.androidAppId;
            var9 = global;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = 'https://play.google.com/d?id=';
            var9 = var10.bind(var9)(var11);
            var8['url'] = var9;
            var8['appId'] = var2;
            var5 = var8;
case 66:
            var3 = var5;
case 54:
            if(!(var2 == var3)) { _fun0006_ip = 67; continue _fun0006 }
case 51:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 14;
            var5 = var9[var5];
            var5 = var8.bind(var6)(var5);
            var5 = var5.bind(var6)(var7);
            return var6;
case 67:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var4 = var8[var4];
            var4 = var7.bind(var6)(var4);
            var5 = var4.openPlayStoreInlineInstall;
            var4 = 13;
            var4 = var8[var4];
            var4 = var7.bind(var6)(var4);
            var7 = var4.clearAppStoreOverlayOpen;
            var _closure2_slot2 = var7;
            var4 = var4.setAppStoreOverlayOpen;
            var _closure2_slot3 = var4;
            var4 = var3.url;
            var3 = var3.appId;
            var7 = var2 == var3;
            var2 = undefined;
            if(var7) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var7 = var3.toString;
            var2 = var7.bind(var3)();
case 68:
            var _closure2_slot4 = var2;
            var2 = function(arg1) {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 4;
                var6 = var5[var6];
                var11 = var4.bind(var1)(var6);
                var10 = var11.trackAppStoreOverlayEvent;
                var16 = _closure2_slot0;
                var15 = _closure2_slot1;
                var14 = _closure2_slot4;
                var3 = _closure1_slot4;
                var13 = var3.QUEST_APP_STORE_OVERLAY_CLOSED;
                var12 = arg1;
                var17 = var11;
                var3 = var17[var10](var16, var15, var14, var13, var12, var11);
                var3 = 10;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot5;
                var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var5.bind(var6)(var4, var3, var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    if(var1) { _fun0007_ip = 24; continue _fun0007 }
case 70:
                    var1 = _closure2_slot2;
                    var5 = undefined;
                    var1 = var1.bind(var5)();
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var11 = var4.bind(var5)(var3);
                    var10 = var11.trackAppStoreOverlayEvent;
                    var15 = _closure2_slot0;
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot4;
                    var3 = _closure1_slot4;
                    var12 = var3.QUEST_APP_STORE_OVERLAY_OPEN_FAILED;
                    var16 = var11;
                    var3 = var16[var10](var15, var14, var13, var12, var11);
                    var3 = 10;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.ComponentDispatch;
                    var3 = var4.dispatch;
                    var1 = _closure1_slot5;
                    var1 = var1.QUEST_APP_STORE_OVERLAY_FINISHED;
                    var1 = var3.bind(var4)(var1);
                    _fun0007_ip = 71; continue _fun0007;
case 24:
                    var3 = _closure2_slot3;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['quest'] = var6;
                    var5 = _closure2_slot1;
                    var1['trackingCtx'] = var5;
                    var4 = _closure2_slot4;
                    var1['inlineStoreAppId'] = var4;
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 4;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.trackAppStoreOverlayEvent;
                    var13 = _closure2_slot4;
                    var1 = _closure1_slot4;
                    var12 = var1.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    var16 = var4;
                    var15 = var6;
                    var14 = var5;
                    var1 = var16[var3](var15, var14, var13, var12, var11);
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 4;
                var6 = var5[var6];
                var10 = var4.bind(var1)(var6);
                var9 = var10.trackAppStoreOverlayEvent;
                var14 = _closure2_slot0;
                var13 = _closure2_slot1;
                var12 = _closure2_slot4;
                var3 = _closure1_slot4;
                var11 = var3.QUEST_APP_STORE_OVERLAY_OPEN_FAILED;
                var15 = var10;
                var3 = var15[var9](var14, var13, var12, var11, var10);
                var3 = 10;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot5;
                var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['openGameLinkDirectly'] = var4;
    var4 = function openConsoleConnectionSettings(arg1, arg2) {
        var8 = arg2;
        var1 = arg1;
        var9 = var1.quest;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 4;
        var2 = var5[var1];
        var1 = undefined;
        var7 = var3.bind(var1)(var2);
        var6 = var7.trackQuestContentClicked;
        var2 = {};
        var9 = var9.id;
        var2['questId'] = var9;
        var9 = var8.content;
        var2['questContent'] = var9;
        var9 = var8.position;
        var2['questContentPosition'] = var9;
        var9 = var8.ctaContent;
        var2['questContentCTA'] = var9;
        var9 = var8.impressionId;
        var2['impressionId'] = var9;
        var8 = var8.sourceQuestContent;
        var2['sourceQuestContent'] = var8;
        var2 = var6.bind(var7)(var2);
        var2 = 15;
        var2 = var5[var2];
        var2 = var3.bind(var1)(var2);
        var3 = var2.openUserSettings;
        var2 = {};
        var4 = _closure1_slot7;
        var4 = var4.CONNECTIONS;
        var2['screen'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['openConsoleConnectionSettings'] = var4;
    var2 = function openAddConsoleConnectionModal(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg2;
            var1 = arg1;
            var4 = var1.quest;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var2 = var3[var2];
            var3 = undefined;
            var6 = var5.bind(var3)(var2);
            var5 = var6.trackQuestContentClicked;
            var2 = {};
            var8 = var4.id;
            var2['questId'] = var8;
            var8 = var7.content;
            var2['questContent'] = var8;
            var8 = var7.position;
            var2['questContentPosition'] = var8;
            var8 = var7.rowIndex;
            var2['questContentRowIndex'] = var8;
            var8 = var7.ctaContent;
            var2['questContentCTA'] = var8;
            var8 = var7.impressionId;
            var2['impressionId'] = var8;
            var7 = var7.sourceQuestContent;
            var2['sourceQuestContent'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = _closure1_slot8;
            var6 = var2.bind(var3)(var4);
            var4 = var6.length;
            var2 = 1;
            if(!(var2 !== var4)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.dispatch;
            var2 = {};
            var7 = 'CONNECTIONS_GRID_MODAL_SHOW';
            var2['type'] = var7;
            var7 = function onComplete(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = arg1;
                var1['platformType'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onComplete'] = var7;
            var7 = global;
            var7 = var7.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var10 = var8;
            var9 = var6;
            var7 = new var10[var7](var9, var8);
            var7 = var7 instanceof Object ? var7 : var8;
            var2['includedPlatformTypes'] = var7;
            var7 = false;
            var2['includeApplicationConnections'] = var7;
            var2 = var4.bind(var5)(var2);
            return var3;
case 72:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = var6.at;
            var4 = 0;
            var4 = var5.bind(var6)(var4);
            var1['platformType'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['openAddConsoleConnectionModal'] = var2;
    return var1;
})();