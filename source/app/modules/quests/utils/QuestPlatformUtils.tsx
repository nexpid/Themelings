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
            var2 = _closure1_slot5;
            var2 = var2.PLAYSTATION;
            var2 = var8.bind(var1)(var2);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = var1.push;
            var2 = _closure1_slot5;
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
    var _closure1_slot7 = var5;
    var4 = function getPlatformTypeForHintMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.connected_account_type;
            var1 = 'xbox';
            if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot5;
            var1 = var1.PLAYSTATION;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var2 = _closure1_slot5;
            var1 = var2.XBOX;
case 10:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
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
    var9 = var6.ComponentActions;
    var _closure1_slot4 = var9;
    var9 = var6.PlatformTypes;
    var _closure1_slot5 = var9;
    var6 = var6.UserSettingsSections;
    var _closure1_slot6 = var6;
    var6 = 13;
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
            var3 = _closure1_slot8;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot5;
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
            var10 = arg1;
            var9 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getCtaLink;
            var3 = var10.config;
            var3 = var4.bind(var5)(var3);
            var4 = var10.config;
            var8 = var4.ctaConfig;
            var5 = null;
            var6 = var5 == var8;
            var4 = null;
            if(var6) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var12 = 7;
            var6 = var6[var12];
            var7 = var7.bind(var1)(var6);
            var6 = var7.isIOS;
            var6 = var6.bind(var7)();
            if(var6) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getOS;
            var7 = var6.bind(var7)();
            var6 = 'ios';
            if(!(var6 === var7)) { _fun0006_ip = 26; continue _fun0006 }
case 24:
            var7 = var8.ios;
            var11 = var5 == var7;
            var6 = undefined;
            if(var11) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var6 = var7.iosAppId;
case 27:
            if(!(var5 != var6)) { _fun0006_ip = 26; continue _fun0006 }
case 29:
            var6 = var8.ios;
            var11 = var6.iosAppId;
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'https://apps.apple.com/app/id';
            var6 = var7.bind(var6)(var11);
            _fun0006_ip = 30; continue _fun0006;
case 26:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var11 = var11.bind(var1)(var7);
            var7 = var11.isAndroid;
            var7 = var7.bind(var11)();
            if(var7) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var11 = var11.bind(var1)(var7);
            var7 = var11.getOS;
            var12 = var7.bind(var11)();
            var11 = 'android';
            var7 = null;
            if(!(var11 === var12)) { _fun0006_ip = 33; continue _fun0006 }
case 31:
            var12 = var8.android;
            var13 = var5 == var12;
            var11 = undefined;
            if(var13) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var11 = var12.androidAppId;
case 34:
            var11 = var5 == var11;
            var7 = null;
            if(var11) { _fun0006_ip = 33; continue _fun0006 }
case 36:
            var8 = var8.android;
            var12 = var8.androidAppId;
            var8 = global;
            var8 = var8.HermesInternal;
            var11 = var8.concat;
            var8 = 'https://play.google.com/store/apps/details?id=';
            var7 = var11.bind(var8)(var12);
case 33:
            var6 = var7;
case 30:
            var4 = var6;
case 22:
            if(!(var5 != var4)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var3 = var4;
case 37:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 4;
            var4 = var5[var4];
            var8 = var6.bind(var1)(var4);
            var7 = var8.trackQuestContentClicked;
            var4 = {};
            var10 = var10.id;
            var4['questId'] = var10;
            var10 = var9.content;
            var4['questContent'] = var10;
            var10 = var9.ctaContent;
            var4['questContentCTA'] = var10;
            var10 = var9.position;
            var4['questContentPosition'] = var10;
            var10 = var9.impressionId;
            var4['impressionId'] = var10;
            var9 = var9.sourceQuestContent;
            var4['sourceQuestContent'] = var9;
            var4 = var7.bind(var8)(var4);
            var4 = 9;
            var4 = var5[var4];
            var4 = var6.bind(var1)(var4);
            var7 = var4.ComponentDispatch;
            var6 = var7.dispatch;
            var4 = _closure1_slot4;
            var4 = var4.QUEST_GAME_LINK_OPENED;
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot1;
            var2 = 10;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.bind(var1)(var3);
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
        var2 = 11;
        var2 = var5[var2];
        var2 = var3.bind(var1)(var2);
        var3 = var2.openUserSettings;
        var2 = {};
        var4 = _closure1_slot6;
        var4 = var4.CONNECTIONS;
        var2['screen'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['openConsoleConnectionSettings'] = var4;
    var2 = function openAddConsoleConnectionModal(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            var2 = _closure1_slot7;
            var6 = var2.bind(var3)(var4);
            var4 = var6.length;
            var2 = 1;
            if(!(var2 !== var4)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
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
            var2 = var4.bind(var5)(var2);
            return var3;
case 39:
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