// app/modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function triggerPostStageJoinActions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot3;
            var2 = var4.getId;
            var6 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var4 = var5.isModerator;
            var2 = var3.id;
            var2 = var4.bind(var5)(var6, var2);
            var6 = _closure1_slot5;
            var5 = var6.isLive;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4);
            if(!var2) { _fun0001_ip = 80; continue _fun0001 }
 64:
            if(var4) { _fun0001_ip = 80; continue _fun0001 }
 67:
            var6 = _closure1_slot14;
            var5 = undefined;
            var5 = var6.bind(var5)(var3);
            _fun0001_ip = 100; continue _fun0001;
 80:
            if(!var2) { _fun0001_ip = 86; continue _fun0001 }
 83:
            var2 = var4;
 86:
            if(!var2) { _fun0001_ip = 100; continue _fun0001 }
 89:
            var2 = _closure1_slot15;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 100:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot13 = var7;
    var6 = function openStageChannelSettings(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 5;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 7;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 6;
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
    var _closure1_slot14 = var6;
    var5 = function openStageChannelModeratorJoinSheet(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 5;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 7;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 8;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot9;
        var2 = {};
        var7 = arg1;
        var2['channel'] = var7;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot15 = var5;
    var4 = function openStageChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.isGuildStageVoice;
            var2 = var2.bind(var1)();
            if(!var2) { _fun0002_ip = 122; continue _fun0002 }
 16:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.pushLazy;
            var7 = _closure1_slot0;
            var2 = 7;
            var2 = var9[var2];
            var6 = var7.bind(var8)(var2);
            var2 = 14;
            var3 = var9[var2];
            var2 = var9.paths;
            var3 = var6.bind(var8)(var3, var2);
            var2 = {};
            var2['channel'] = var1;
            var6 = 15;
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
    var _closure1_slot16 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.setIsOnStartStageScreen;
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.STAGE_AUDIENCE_NOTICE_SHEET_KEY;
    var _closure1_slot7 = var11;
    var11 = var8.START_STAGE_CHANNEL_EVENT_SHEET_KEY;
    var _closure1_slot8 = var11;
    var11 = var8.STAGE_MODERATOR_JOIN_SHEET_KEY;
    var _closure1_slot9 = var11;
    var11 = var8.STAGE_BLOCKED_USERS_SHEET_KEY;
    var _closure1_slot10 = var11;
    var11 = var8.STAGE_SETTINGS_SHEET_KEY;
    var _closure1_slot11 = var11;
    var8 = var8.EXPLICIT_END_STAGE_SHEET_KEY;
    var _closure1_slot12 = var8;
    var8 = 18;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/stage_channels/StageChannelActionCreatorExtras.native.tsx';
    var8 = var9.bind(var10)(var8);
    var3['triggerPostStageJoinActions'] = var7;
    var3['openStageChannelSettings'] = var6;
    var3['openStageChannelModeratorJoinSheet'] = var5;
    var5 = function openEndGuildEventConfirmationModal() {
        var1 = undefined;
        return var1;
    };
    var3['openEndGuildEventConfirmationModal'] = var5;
    var5 = function openStageChannelAudienceNoticeModal(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 5;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 7;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 9;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot7;
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
        var1 = 5;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 7;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 10;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot10;
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
        var1 = 5;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 7;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 11;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot11;
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
        var1 = 5;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 7;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 12;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot12;
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
        var1 = 16;
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 17;
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
            if(var1) { _fun0003_ip = 72; continue _fun0003 }
 68:
            var1 = var3 > var2;
 72:
            return var1;
        }
    };
    var3['shouldShowBlockedUsers'] = var4;
    var4 = function navigateToStage(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 17; continue _fun0004 }
 15:
            var5 = true;
 17:
            var2 = var3.id;
            if(!(var6 !== var2)) { _fun0004_ip = 40; continue _fun0004 }
 26:
            var4 = _closure1_slot6;
            var2 = true;
            var2 = var4.bind(var1)(var2);
 40:
            var4 = _closure1_slot16;
            var4 = var4.bind(var1)(var3);
            var4 = var3.id;
            var4 = var6 !== var4;
            if(!var4) { _fun0004_ip = 67; continue _fun0004 }
 64:
            var4 = var5;
 67:
            if(!var4) { _fun0004_ip = 79; continue _fun0004 }
 70:
            var2 = _closure1_slot13;
            var2 = var2.bind(var1)(var3);
 79:
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