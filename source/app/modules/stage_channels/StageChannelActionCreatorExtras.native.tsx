// app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function openStageChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.isGuildStageVoice;
            var2 = var2.bind(var1)();
            if(!var2) { _fun0001_ip = 122; continue _fun0001 }
 16:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.pushLazy;
            var7 = _closure1_slot0;
            var2 = 4;
            var2 = var9[var2];
            var6 = var7.bind(var8)(var2);
            var2 = 10;
            var3 = var9[var2];
            var2 = var9.paths;
            var3 = var6.bind(var8)(var3, var2);
            var2 = {};
            var2['channel'] = var1;
            var6 = 11;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.getVoiceChannelKey;
            var1 = var1.id;
            var1 = var6.bind(var7)(var1);
            var1 = var4.bind(var5)(var3, var2, var1);
 122:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.setIsOnStartStageScreen;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.STAGE_AUDIENCE_NOTICE_SHEET_KEY;
    var _closure1_slot4 = var8;
    var8 = var5.START_STAGE_CHANNEL_EVENT_SHEET_KEY;
    var _closure1_slot5 = var8;
    var8 = var5.STAGE_BLOCKED_USERS_SHEET_KEY;
    var _closure1_slot6 = var8;
    var8 = var5.STAGE_SETTINGS_SHEET_KEY;
    var _closure1_slot7 = var8;
    var5 = var5.EXPLICIT_END_STAGE_SHEET_KEY;
    var _closure1_slot8 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/StageChannelActionCreatorExtras.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function openStageChannelSettings(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 4;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 3;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot5;
        var2 = {};
        var7 = arg1;
        var2['channel'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openStageChannelSettings'] = var5;
    var5 = function openEndGuildEventConfirmationModal() {
        var1 = undefined;
        return var1;
    };
    var3['openEndGuildEventConfirmationModal'] = var5;
    var5 = function openStageChannelAudienceNoticeModal(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 4;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 5;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot4;
        var2 = {};
        var7 = arg1;
        var2['channelId'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openStageChannelAudienceNoticeModal'] = var5;
    var5 = function openStageBlockedUsersSheet(arg1, arg2) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 4;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 6;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot6;
        var2 = {};
        var7 = arg1;
        var2['channel'] = var7;
        var7 = arg2;
        var2['onAccept'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openStageBlockedUsersSheet'] = var5;
    var5 = function openStageSettingsSheet(arg1, arg2) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 4;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 7;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot7;
        var2 = {};
        var7 = arg1;
        var2['channelId'] = var7;
        var7 = arg2;
        var2['onOpenRTCDebugOverlay'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openStageSettingsSheet'] = var5;
    var5 = function openEndStageModal(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 4;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 8;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot8;
        var2 = {};
        var7 = arg1;
        var2['channel'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openEndStageModal'] = var5;
    var3['openStageChannel'] = var4;
    var4 = function showPlatformUserProfile(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var6 = arg1;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var5 = true;
        var4 = 'isVoiceContext';
        var2[var4] = var5;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['showPlatformUserProfile'] = var4;
    var4 = function shouldShowBlockedUsers(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var1 = var6[var2];
            var3 = undefined;
            var7 = var5.bind(var3)(var1);
            var1 = var7.getStageBlockedUsersCount;
            var1 = var1.bind(var7)(var4);
            var2 = var6[var2];
            var3 = var5.bind(var3)(var2);
            var2 = var3.getStageIgnoredUsersCount;
            var3 = var2.bind(var3)(var4);
            var2 = 0;
            var1 = var1 > var2;
            if(var1) { _fun0002_ip = 72; continue _fun0002 }
 68:
            var1 = var3 > var2;
 72:
            return var1;
        }
    };
    var3['shouldShowBlockedUsers'] = var4;
    var4 = function navigateToStage(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = var3.id;
            var1 = arg2;
            if(!(var1 !== var2)) { _fun0003_ip = 31; continue _fun0003 }
 15:
            var4 = _closure1_slot3;
            var2 = undefined;
            var1 = true;
            var1 = var4.bind(var2)(var1);
 31:
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var3['navigateToStage'] = var4;
    var2 = function showChannelChangeConfirmationAlert() {
        var1 = false;
        return var1;
    };
    var3['showChannelChangeConfirmationAlert'] = var2;
    return var1;
})();