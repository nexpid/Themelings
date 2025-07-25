// app/modules/feedback/native/RequestReviewStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function delayShowReviewRequestModal() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot19;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = _closure1_slot14;
            if(!var2) { _fun0002_ip = 48; continue _fun0002 }
 20:
            var4 = _closure1_slot11;
            var4 = var1 !== var4;
            if(!var4) { _fun0002_ip = 45; continue _fun0002 }
 31:
            var6 = _closure1_slot11;
            var5 = 2300;
            var4 = var6 < var5;
 45:
            var2 = var4;
 48:
            if(!var2) { _fun0002_ip = 79; continue _fun0002 }
 51:
            var2 = global;
            var5 = var2.setTimeout;
            var4 = _closure1_slot18;
            var2 = 60000;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot15 = var2;
 79:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function showReviewRequestModal() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var9 = var3.bind(var4)();
            var7 = {};
            var4 = null;
            var3 = var4 != var9;
            if(!var3) { _fun0003_ip = 56; continue _fun0003 }
 46:
            var5 = var9.isReady;
            var3 = var5.bind(var9)();
 56:
            if(!var3) { _fun0003_ip = 104; continue _fun0003 }
 59:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 10;
            var5 = var8[var5];
            var8 = var6.bind(var1)(var5);
            var6 = var8.coerceGuildsRoute;
            var5 = var9.getCurrentRoute;
            var5 = var5.bind(var9)();
            var5 = var6.bind(var8)(var5);
            var3 = var4 != var5;
 104:
            var7['isViewingChat'] = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.getKeyboardIsOpen;
            var3 = var3.bind(var5)();
            var7['isKeyboardOpen'] = var3;
            var5 = _closure1_slot9;
            var3 = var5.getVoiceChannelId;
            var3 = var3.bind(var5)();
            var3 = var4 != var3;
            var7['isInVoice'] = var3;
            var3 = var7.isViewingChat;
            if(!var3) { _fun0003_ip = 279; continue _fun0003 }
 176:
            var3 = var7.isKeyboardOpen;
            if(var3) { _fun0003_ip = 279; continue _fun0003 }
 185:
            var3 = var7.isInVoice;
            if(var3) { _fun0003_ip = 279; continue _fun0003 }
 194:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var8 = var4.bind(var1)(var3);
            var6 = var8.track;
            var3 = _closure1_slot10;
            var3 = var3.REVIEW_REQUEST_SHOW_ATTEMPTED;
            var3 = var6.bind(var8)(var3);
            var6 = _closure1_slot13;
            var3 = 1;
            var6['revision'] = var3;
            var3 = _closure1_slot20;
            var3 = var3.bind(var1)();
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.bind(var1)();
            var3 = false;
            _closure1_slot14 = var3;
            _fun0003_ip = 369; continue _fun0003;
 279:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.track;
            var3 = _closure1_slot10;
            var4 = var3.REVIEW_REQUEST_DEFERRED;
            var3 = {};
            var8 = var7.isKeyboardOpen;
            var3['is_keyboard_open'] = var8;
            var8 = var7.isInVoice;
            var3['is_in_voice'] = var8;
            var7 = var7.isViewingChat;
            var3['is_viewing_chat'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)();
 369:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var9 = function handleConnectionClosedOrInterrupted() {
        var2 = _closure1_slot19;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var1 = function cancelExistingTimeout() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot15;
            var1 = -1;
            if(!(var1 !== var3)) { _fun0004_ip = 40; continue _fun0004 }
 17:
            var3 = global;
            var5 = var3.clearTimeout;
            var4 = _closure1_slot15;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            _closure1_slot15 = var1;
 40:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function writePersistedState() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.set;
        var3 = _closure1_slot12;
        var2 = _closure1_slot13;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot10 = var2;
    var2 = 'RequestReviewStore';
    var _closure1_slot12 = var2;
    var8 = {'revision': 0, 'firstUse': 0};
    var _closure1_slot13 = var8;
    var8 = false;
    var _closure1_slot14 = var8;
    var8 = -1;
    var _closure1_slot15 = var8;
    var8 = 15;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var10 = var8.Store;
    var8 = function(arg1) {
        var4 = function RequestReviewStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var4 = this;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var6 = var3.Storage;
                var5 = var6.get;
                var3 = _closure1_slot12;
                var3 = var5.bind(var6)(var3);
                var5 = null;
                if(!(var5 == var3)) { _fun0006_ip = 68; continue _fun0006 }
 54:
                var3 = {'firstUse': 0, 'revision': 0};
 68:
                _closure1_slot13 = var3;
                var3 = var4.waitFor;
                var2 = _closure1_slot8;
                var2 = var3.bind(var4)(var2);
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
    var2 = 16;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var6 = var1.guilds;
            var3 = _closure1_slot13;
            var4 = var3.firstUse;
            var3 = 0;
            if(!(var3 === var4)) { _fun0007_ip = 70; continue _fun0007 }
 33:
            var4 = _closure1_slot13;
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var4['firstUse'] = var3;
            var4 = _closure1_slot20;
            var3 = undefined;
            var3 = var4.bind(var3)();
 70:
            var3 = {};
            var4 = _closure1_slot13;
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
            var2 = _closure1_slot13;
            var4 = var2.revision;
            var2 = 1;
            var2 = var4 < var2;
            var3['isNewRevision'] = var2;
            var2 = var3.isNewRevision;
            if(!var2) { _fun0007_ip = 282; continue _fun0007 }
 191:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.track;
            var2 = _closure1_slot10;
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
 282:
            var2 = var3.isInstallOldEnough;
            if(!var2) { _fun0007_ip = 297; continue _fun0007 }
 291:
            var2 = var3.isAccountVerified;
 297:
            if(!var2) { _fun0007_ip = 306; continue _fun0007 }
 300:
            var2 = var3.isInLargeEnoughGuild;
 306:
            if(!var2) { _fun0007_ip = 315; continue _fun0007 }
 309:
            var2 = var3.isNewRevision;
 315:
            _closure1_slot14 = var2;
            var2 = _closure1_slot17;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleConnectionResumed() {
        var2 = _closure1_slot17;
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
        var _closure1_slot11 = var2;
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['TTI_RECORDED'] = var9;
    var4 = function handleAppStateUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.state;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.AppStates;
            var3 = var3.ACTIVE;
            if(!(var4 !== var3)) { _fun0008_ip = 59; continue _fun0008 }
 49:
            var3 = _closure1_slot19;
            var3 = var3.bind(var1)();
            _fun0008_ip = 67; continue _fun0008;
 59:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)();
 67:
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
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/native/RequestReviewStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();