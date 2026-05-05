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
    var1 = function getDirectAppStoreLinkFromCta(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 7;
            var1 = var1[var6];
            var4 = undefined;
            var5 = var5.bind(var4)(var1);
            var1 = var5.isIOS;
            var1 = var1.bind(var5)();
            if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var5 = var5.bind(var4)(var1);
            var1 = var5.getOS;
            var5 = var1.bind(var5)();
            var1 = 'ios';
            if(!(var1 === var5)) { _fun0003_ip = 13; continue _fun0003 }
case 11:
            var7 = var3.ios;
            var5 = null;
            var8 = var5 == var7;
            var1 = undefined;
            if(var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = var7.iosAppId;
case 14:
            if(!(var5 != var1)) { _fun0003_ip = 13; continue _fun0003 }
case 16:
            var1 = var3.ios;
            var5 = var1.iosAppId;
            var1 = var5.startsWith;
            var7 = 'id';
            var5 = var1.bind(var5)(var7);
            var1 = var3.ios;
            var1 = var1.iosAppId;
            if(var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var5 = global;
            var5 = var5.HermesInternal;
            var5 = var5.concat;
            var7 = var5.bind(var7)(var1);
            _fun0003_ip = 19; continue _fun0003;
case 17:
            var7 = var1;
case 19:
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'https://apps.apple.com/app/';
            var1 = var5.bind(var1)(var7);
            _fun0003_ip = 20; continue _fun0003;
case 13:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var6];
            var7 = var7.bind(var4)(var5);
            var5 = var7.isAndroid;
            var5 = var5.bind(var7)();
            if(var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getOS;
            var6 = var2.bind(var5)();
            var5 = 'android';
            var2 = null;
            if(!(var5 === var6)) { _fun0003_ip = 23; continue _fun0003 }
case 21:
            var6 = var3.android;
            var5 = null;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = var6.androidAppId;
case 24:
            var4 = var5 == var4;
            var2 = null;
            if(var4) { _fun0003_ip = 23; continue _fun0003 }
case 26:
            var3 = var3.android;
            var5 = var3.androidAppId;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'https://play.google.com/store/apps/details?id=';
            var2 = var4.bind(var3)(var5);
case 23:
            var1 = var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getInlineStoreParamsFromCta(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 7;
            var2 = var2[var5];
            var8 = undefined;
            var3 = var3.bind(var8)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0004_ip = 27; continue _fun0004 }
case 12:
            var6 = var4.android;
            var3 = null;
            var7 = var3 == var6;
            var2 = undefined;
            if(var7) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var2 = var6.androidAppId;
case 28:
            if(!(var3 == var2)) { _fun0004_ip = 30; continue _fun0004 }
case 27:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var2 = var2.bind(var8)(var1);
            var1 = var2.isIOS;
            var2 = var1.bind(var2)();
            var5 = null;
            var1 = null;
            if(!var2) { _fun0004_ip = 31; continue _fun0004 }
case 5:
            var6 = var4.ios;
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var2 = var6.iosAppId;
case 32:
            var2 = var5 != var2;
            var1 = null;
            if(!var2) { _fun0004_ip = 31; continue _fun0004 }
case 34:
            var2 = {};
            var5 = var4.ios;
            var9 = var5.iosAppId;
            var5 = global;
            var6 = var5.HermesInternal;
            var7 = var6.concat;
            var6 = 'https://apps.apple.com/app/id';
            var6 = var7.bind(var6)(var9);
            var2['url'] = var6;
            var7 = var5.parseInt;
            var5 = var4.ios;
            var6 = var5.iosAppId;
            var5 = 10;
            var5 = var7.bind(var8)(var6, var5);
            var2['appId'] = var5;
            var1 = var2;
case 31:
            _fun0004_ip = 35; continue _fun0004;
case 30:
            var2 = {};
            var4 = var4.android;
            var6 = var4.androidAppId;
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = 'https://play.google.com/d?id=';
            var4 = var5.bind(var4)(var6);
            var2['url'] = var4;
            var2['appId'] = var3;
            var1 = var2;
case 35:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function openAppStoreOverlay(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var4 = var7[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var6 = var4.openPlayStoreInlineInstall;
            var4 = 10;
            var4 = var7[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.clearAppStoreOverlayOpen;
            var _closure2_slot1 = var5;
            var4 = var4.setAppStoreOverlayOpen;
            var _closure2_slot2 = var4;
            var5 = var3.url;
            var4 = var3.appId;
            var3 = null;
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0005_ip = 16; continue _fun0005 }
case 36:
            var7 = var4.toString;
            var3 = var7.bind(var4)();
case 16:
            var _closure2_slot3 = var3;
            var3 = function(arg1) {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var6 = _closure2_slot0;
                var4 = _closure1_slot4;
                var5 = var4.QUEST_APP_STORE_OVERLAY_CLOSED;
                var4 = _closure2_slot3;
                var3 = arg1;
                var3 = var6.bind(var1)(var5, var4, var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot5;
                var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var6.bind(var1)(var5, var4, var3);
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    if(var2) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var2 = _closure2_slot1;
                    var5 = undefined;
                    var2 = var2.bind(var5)();
                    var6 = _closure2_slot0;
                    var3 = _closure1_slot4;
                    var4 = var3.QUEST_APP_STORE_OVERLAY_OPEN_FAILED;
                    var3 = _closure2_slot3;
                    var3 = var6.bind(var5)(var4, var3);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.ComponentDispatch;
                    var3 = var4.dispatch;
                    var2 = _closure1_slot5;
                    var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                    var2 = var3.bind(var4)(var2);
                    _fun0006_ip = 18; continue _fun0006;
case 37:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var4 = function trackOverlayEvent(arg1, arg2) {
                        var5 = _closure2_slot0;
                        var4 = _closure2_slot3;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var5.bind(var3)(var2, var4, var1);
                        return var1;
                    };
                    var2['trackOverlayEvent'] = var4;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot4;
                    var2 = var2.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    var1 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2, var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure2_slot0;
                var4 = _closure1_slot4;
                var4 = var4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED;
                var3 = _closure2_slot3;
                var3 = var5.bind(var1)(var4, var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot5;
                var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/QuestPlatformUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function supportedTaskPlatforms(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            if(var4) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var8 = var3.bind(var6)(var1);
            var3 = var8.hasStreamOnDesktopTask;
            var1 = {};
            var1['quest'] = var5;
            var4 = var3.bind(var8)(var1);
case 39:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var3 = var3.bind(var6)(var1);
            var1 = var3.hasSomeConsoleTasks;
            var3 = var1.bind(var3)(var5);
            var1 = new Array(0);
            if(!var4) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var5 = var1.push;
            var4 = _closure1_slot3;
            var4 = var4.DESKTOP;
            var4 = var5.bind(var1)(var4);
case 41:
            if(!var3) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var3 = var1.push;
            var2 = _closure1_slot3;
            var2 = var2.CONSOLE;
            var2 = var3.bind(var1)(var2);
case 43:
            return var1;
        }
    };
    var3['supportedTaskPlatforms'] = var6;
    var3['supportedConsoles'] = var5;
    var5 = function isQuestSupportedOnWeb(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(var1) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var1 = var2;
case 45:
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot9;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot6;
            var1 = var1.XBOX;
            if(!(var3 !== var1)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.iDiwby;
            _fun0009_ip = 49; continue _fun0009;
case 47:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var1 = var2.mytEv+;
case 49:
            return var1;
        }
    };
    var3['getExpiredCredentialsHintMessage'] = var4;
    var4 = function openGameLinkDirectly(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var10 = arg1;
            var15 = arg2;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var15;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var13 = 8;
            var4 = var1[var13];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.getCtaLink;
            var4 = var10.config;
            var6 = var5.bind(var6)(var4);
            var4 = var10.config;
            var9 = var4.ctaConfig;
            var5 = null;
            var7 = var5 == var9;
            var4 = null;
            if(var7) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var8 = _closure1_slot10;
            var7 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var13];
            var14 = var12.bind(var1)(var11);
            var12 = var14.getCtaLink;
            var11 = var10.config;
            var11 = var12.bind(var14)(var11);
            var7['url'] = var11;
            var11 = var9.android;
            var7['android'] = var11;
            var9 = var9.ios;
            var7['ios'] = var9;
            var4 = var8.bind(var1)(var7);
case 50:
            var11 = var6;
            if(!(var5 != var4)) { _fun0010_ip = 43; continue _fun0010 }
case 52:
            var11 = var4;
case 43:
            var6 = var11;
case 53: // try_start_0
            var7 = global;
            var8 = var7.URL;
            var19 = var6;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var20 = var7;
            var6 = new var20[var8](var19, var18);
            var6 = var6 instanceof Object ? var6 : var7;
            var8 = var6.searchParams;
            var7 = var8.has;
            var6 = 'dclid';
            var6 = var7.bind(var8)(var6);
case 54: // try_end0
            var7 = var6;
            _fun0010_ip = 55; continue _fun0010;
case 56: // catch_target0
            CatchBlockStart(arg_register=5);
            var7 = false;
case 55:
            var14 = undefined;
            var6 = var11;
            if(!var7) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 12;
            var7 = var9[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.v4;
            var8 = var7.bind(var8)();
            var9 = var11;
            var7 = var8;
case 59: // try_start_1
            var11 = global;
            var16 = var11.URL;
            var19 = var9;
            var12 = var16.prototype;
            var12 = Object.create(var12, {constructor: {value: var16}});
            var20 = var12;
            var11 = new var20[var16](var19, var18);
            var11 = var11 instanceof Object ? var11 : var12;
            var17 = var11.searchParams;
            var16 = var17.set;
            var12 = var7;
            var7 = 'dclid';
            var7 = var16.bind(var17)(var7, var12);
            var7 = var11.toString;
            var7 = var7.bind(var11)();
case 60: // try_end1
            _fun0010_ip = 61; continue _fun0010;
case 62: // catch_target1
            CatchBlockStart(arg_register=10);
            var7 = var9;
case 61:
            var6 = var7;
            var14 = var8;
case 57:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 4;
            var7 = var9[var7];
            var12 = var8.bind(var1)(var7);
            var11 = var12.trackQuestContentClicked;
            var7 = {};
            var16 = var10.id;
            var7['questId'] = var16;
            var16 = var15.content;
            var7['questContent'] = var16;
            var16 = var15.ctaContent;
            var7['questContentCTA'] = var16;
            var16 = var15.position;
            var7['questContentPosition'] = var16;
            var16 = var15.impressionId;
            var7['impressionId'] = var16;
            var15 = var15.sourceQuestContent;
            var7['sourceQuestContent'] = var15;
            var7['clickId'] = var14;
            var7 = var11.bind(var12)(var7);
            var7 = 11;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var9 = var7.ComponentDispatch;
            var8 = var9.dispatch;
            var7 = _closure1_slot5;
            var7 = var7.QUEST_GAME_LINK_OPENED;
            var7 = var8.bind(var9)(var7);
            if(!(var5 != var4)) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var4 = var10.config;
            var9 = var4.ctaConfig;
            var7 = var5 == var9;
            var4 = null;
            if(var7) { _fun0010_ip = 65; continue _fun0010 }
case 66:
            var8 = _closure1_slot11;
            var7 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var13];
            var12 = var12.bind(var1)(var11);
            var11 = var12.getCtaLink;
            var10 = var10.config;
            var10 = var11.bind(var12)(var10);
            var7['url'] = var10;
            var10 = var9.android;
            var7['android'] = var10;
            var9 = var9.ios;
            var7['ios'] = var9;
            var4 = var8.bind(var1)(var7);
case 65:
            if(!(var5 == var4)) { _fun0010_ip = 67; continue _fun0010 }
case 63:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 13;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var5 = var5.bind(var1)(var6);
            return var1;
case 67:
            var3 = _closure1_slot12;
            var2 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.trackAppStoreOverlayEvent;
                var12 = _closure2_slot0;
                var11 = _closure2_slot1;
                var10 = arg2;
                var9 = arg1;
                var8 = arg3;
                var13 = var7;
                var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['openGameLinkDirectly'] = var4;
    var4 = function openAdGameLinkDirectly(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var13 = arg2;
            var15 = var1.adContentId;
            var _closure2_slot0 = var15;
            var14 = var1.adCreativeType;
            var _closure2_slot1 = var14;
            var7 = var1.cta;
            var _closure2_slot2 = var13;
            var6 = var7.url;
            var4 = _closure1_slot10;
            var1 = undefined;
            var4 = var4.bind(var1)(var7);
            var5 = null;
            if(!(var5 != var4)) { _fun0011_ip = 47; continue _fun0011 }
case 68:
            var6 = var4;
case 47:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 4;
            var8 = var10[var8];
            var12 = var9.bind(var1)(var8);
            var11 = var12.trackAdContentClicked;
            var8 = {};
            var8['adContentId'] = var15;
            var8['adCreativeType'] = var14;
            var14 = var13.content;
            var8['questContent'] = var14;
            var14 = var13.ctaContent;
            var8['questContentCTA'] = var14;
            var14 = var13.position;
            var8['questContentPosition'] = var14;
            var14 = var13.impressionId;
            var8['impressionId'] = var14;
            var13 = var13.sourceQuestContent;
            var8['sourceQuestContent'] = var13;
            var8 = var11.bind(var12)(var8);
            var8 = 11;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var10 = var8.ComponentDispatch;
            var9 = var10.dispatch;
            var8 = _closure1_slot5;
            var8 = var8.QUEST_GAME_LINK_OPENED;
            var8 = var9.bind(var10)(var8);
            if(!(var5 != var4)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
            var4 = _closure1_slot11;
            var4 = var4.bind(var1)(var7);
            if(!(var5 == var4)) { _fun0011_ip = 71; continue _fun0011 }
case 69:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 13;
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var5 = var5.bind(var1)(var6);
            return var1;
case 71:
            var3 = _closure1_slot12;
            var2 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.trackAdContentAppStoreOverlayEvent;
                var5 = {};
                var2 = _closure2_slot0;
                var5['adContentId'] = var2;
                var2 = _closure2_slot1;
                var5['adCreativeType'] = var2;
                var11 = _closure2_slot2;
                var10 = arg2;
                var9 = arg1;
                var8 = arg3;
                var13 = var7;
                var12 = var5;
                var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['openAdGameLinkDirectly'] = var4;
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
        var2 = 14;
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            if(!(var2 !== var4)) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 15;
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