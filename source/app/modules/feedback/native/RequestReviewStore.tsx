// app/modules/feedback/native/RequestReviewStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function delayShowReviewRequestModal() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var5 = var2.RequestReviewNoTTIExperiment;
            var4 = var5.getConfig;
            var2 = {};
            var6 = 'RequestReviewStore';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var4 = var2.skipTTICheck;
            var2 = _closure1_slot15;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot12;
            var5 = var1 !== var5;
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var7 = _closure1_slot12;
            var6 = 2300;
            var5 = var7 < var6;
case 10:
            var4 = var5;
case 8:
            var2 = var4;
case 6:
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = global;
            var5 = var2.setTimeout;
            var4 = _closure1_slot19;
            var2 = 60000;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot16 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function showReviewRequestModal() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var9 = var3.bind(var4)();
            var7 = {};
            var4 = null;
            var3 = var4 != var9;
            if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = var9.isReady;
            var3 = var5.bind(var9)();
case 14:
            if(!var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 12;
            var5 = var8[var5];
            var8 = var6.bind(var1)(var5);
            var6 = var8.coerceGuildsRoute;
            var5 = var9.getCurrentRoute;
            var5 = var5.bind(var9)();
            var5 = var6.bind(var8)(var5);
            var3 = var4 != var5;
case 16:
            var7['isViewingChat'] = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.getKeyboardIsOpen;
            var3 = var3.bind(var5)();
            var7['isKeyboardOpen'] = var3;
            var5 = _closure1_slot10;
            var3 = var5.getVoiceChannelId;
            var3 = var3.bind(var5)();
            var3 = var4 != var3;
            var7['isInVoice'] = var3;
            var3 = var7.isViewingChat;
            if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = var7.isKeyboardOpen;
            if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 20:
            var3 = var7.isInVoice;
            if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 21:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var8 = var4.bind(var1)(var3);
            var6 = var8.track;
            var3 = _closure1_slot11;
            var3 = var3.REVIEW_REQUEST_SHOW_ATTEMPTED;
            var3 = var6.bind(var8)(var3);
            var6 = _closure1_slot14;
            var3 = 1;
            var6['revision'] = var3;
            var3 = _closure1_slot21;
            var3 = var3.bind(var1)();
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.bind(var1)();
            var3 = false;
            _closure1_slot15 = var3;
            _fun0003_ip = 22; continue _fun0003;
case 18:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.track;
            var3 = _closure1_slot11;
            var4 = var3.REVIEW_REQUEST_DEFERRED;
            var3 = {};
            var8 = var7.isKeyboardOpen;
            var3['is_keyboard_open'] = var8;
            var8 = var7.isInVoice;
            var3['is_in_voice'] = var8;
            var7 = var7.isViewingChat;
            var3['is_viewing_chat'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2 = _closure1_slot18;
            var2 = var2.bind(var1)();
case 22:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var9 = function handleConnectionClosedOrInterrupted() {
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var1 = function cancelExistingTimeout() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot16;
            var1 = -1;
            if(!(var1 !== var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = global;
            var5 = var3.clearTimeout;
            var4 = _closure1_slot16;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            _closure1_slot16 = var1;
case 23:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function writePersistedState() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.set;
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot11 = var2;
    var2 = 'RequestReviewStore';
    var _closure1_slot13 = var2;
    var8 = {'revision': 0, 'firstUse': 0};
    var _closure1_slot14 = var8;
    var8 = false;
    var _closure1_slot15 = var8;
    var8 = -1;
    var _closure1_slot16 = var8;
    var8 = 17;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var10 = var8.Store;
    var8 = function(arg1) {
        var4 = function RequestReviewStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 27; continue _fun0005;
case 25:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 27:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'initialize';
        var5['key'] = var6;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var3 = _closure1_slot13;
                var3 = var4.bind(var5)(var3);
                var4 = null;
                if(!(var4 == var3)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var3 = {'firstUse': 0, 'revision': 0};
case 28:
                _closure1_slot14 = var3;
                var5 = var6.waitFor;
                var4 = _closure1_slot9;
                var3 = _closure1_slot8;
                var2 = _closure1_slot10;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var10);
    var8['displayName'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var6 = var1.guilds;
            var3 = _closure1_slot14;
            var4 = var3.firstUse;
            var3 = 0;
            if(!(var3 === var4)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var4 = _closure1_slot14;
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var4['firstUse'] = var3;
            var4 = _closure1_slot21;
            var3 = undefined;
            var3 = var4.bind(var3)();
case 30:
            var3 = {};
            var4 = _closure1_slot14;
            var5 = var4.firstUse;
            var4 = global;
            var7 = var4.Date;
            var4 = var7.now;
            var7 = var4.bind(var7)();
            var4 = 864000000;
            var4 = var7 - var4;
            var4 = var5 < var4;
            var3['isInstallOldEnough'] = var4;
            var5 = var6.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.member_count;
                var1 = 5;
                var1 = var2 >= var1;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var3['isInLargeEnoughGuild'] = var4;
            var2 = var2.verified;
            var7 = true;
            var2 = var7 === var2;
            var3['isAccountVerified'] = var2;
            var2 = _closure1_slot14;
            var4 = var2.revision;
            var2 = 1;
            var2 = var4 < var2;
            var3['isNewRevision'] = var2;
            var2 = var3.isNewRevision;
            if(!var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 16;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.track;
            var2 = _closure1_slot11;
            var4 = var2.REVIEW_REQUEST_ELIGIBILITY_CHECKED;
            var2 = {};
            var2['is_hfu'] = var7;
            var7 = var3.isInstallOldEnough;
            var2['is_install_old_enough'] = var7;
            var7 = var3.isInLargeEnoughGuild;
            var2['is_in_large_enough_guild'] = var7;
            var7 = var3.isAccountVerified;
            var2['is_account_verified'] = var7;
            var2 = var5.bind(var6)(var4, var2);
case 32:
            var2 = var3.isInstallOldEnough;
            if(!var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var2 = var3.isAccountVerified;
case 34:
            if(!var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var2 = var3.isInLargeEnoughGuild;
case 36:
            if(!var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var2 = var3.isNewRevision;
case 38:
            _closure1_slot15 = var2;
            var2 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleConnectionResumed() {
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_RESUMED'] = var10;
    var2['CONNECTION_CLOSED'] = var9;
    var2['CONNECTION_INTERRUPTED'] = var9;
    var9 = function handleTTIRecorded(arg1) {
        var1 = arg1;
        var2 = var1.tti;
        var _closure1_slot12 = var2;
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['TTI_RECORDED'] = var9;
    var4 = function handleAppStateUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.state;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.AppStates;
            var3 = var3.ACTIVE;
            if(!(var4 !== var3)) { _fun0008_ip = 17; continue _fun0008 }
case 40:
            var3 = _closure1_slot20;
            var3 = var3.bind(var1)();
            _fun0008_ip = 41; continue _fun0008;
case 17:
            var2 = _closure1_slot18;
            var2 = var2.bind(var1)();
case 41:
            return var1;
        }
    };
    var2['APP_STATE_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/native/RequestReviewStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();