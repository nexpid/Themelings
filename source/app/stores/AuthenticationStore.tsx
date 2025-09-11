// app/stores/AuthenticationStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot42 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function logInfo(arg1) {
        var4 = _closure1_slot2;
        var7 = _closure1_slot3;
        var1 = 10;
        var2 = var7[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var2);
        var2 = var4.getToken;
        var2 = var2.bind(var4)();
        var4 = null;
        var6 = var4 != var2;
        var5 = _closure1_slot0;
        var2 = 11;
        var2 = var7[var2];
        var2 = var5.bind(var1)(var2);
        var7 = var2.Storage;
        var5 = var7.get;
        var2 = _closure1_slot16;
        var2 = var5.bind(var7)(var2);
        var2 = var4 != var2;
        var5 = _closure1_slot19;
        var4 = var5.verbose;
        var3 = {};
        var3['tokenManagerHasToken'] = var6;
        var3['storageHasToken'] = var2;
        var2 = arg1;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function fetchFingerprint() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arguments[0];
            var2 = undefined;
            if(!(var4 === var2)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var4 = true;
 11:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 11;
            var3 = var6[var3];
            var3 = var5.bind(var2)(var3);
            var6 = var3.Storage;
            var5 = var6.get;
            var3 = _closure1_slot20;
            var3 = var5.bind(var6)(var3);
            _closure1_slot26 = var3;
            var3 = _closure1_slot37;
            var6 = null;
            if(!(var6 == var3)) { _fun0002_ip = 204; continue _fun0002 }
 71:
            var3 = _closure1_slot26;
            if(!(var6 == var3)) { _fun0002_ip = 111; continue _fun0002 }
 79:
            var5 = _closure1_slot2;
            var7 = _closure1_slot3;
            var3 = 10;
            var3 = var7[var3];
            var5 = var5.bind(var2)(var3);
            var3 = var5.getToken;
            var5 = var3.bind(var5)();
            _fun0002_ip = 115; continue _fun0002;
 111:
            var5 = _closure1_slot26;
 115:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 12;
            var3 = var8[var3];
            var7 = var7.bind(var2)(var3);
            var3 = var7.isValidFingerprintRoute;
            var3 = var3.bind(var7)();
            var3 = !var3;
            if(var3) { _fun0002_ip = 164; continue _fun0002 }
 151:
            var4 = !var4;
            if(!var4) { _fun0002_ip = 161; continue _fun0002 }
 157:
            var4 = var6 != var5;
 161:
            var3 = var4;
 164:
            if(var3) { _fun0002_ip = 181; continue _fun0002 }
 167:
            var5 = _closure1_slot9;
            var4 = var5.isHandoffAvailable;
            var3 = var4.bind(var5)();
 181:
            if(var3) { _fun0002_ip = 202; continue _fun0002 }
 184:
            var4 = _closure1_slot45;
            var3 = {};
            var5 = true;
            var3['withGuildExperiments'] = var5;
            var3 = var4.bind(var2)(var3);
 202:
            return var2;
 204:
            var1 = _closure1_slot37;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var11 = function fetchExperiments(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var11 = var1.withGuildExperiments;
            var7 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 13;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getSuperPropertiesBase64;
            var4 = var4.bind(var5)();
            var5 = null;
            if(!(var5 != var4)) { _fun0003_ip = 60; continue _fun0003 }
 54:
            var7['X-Super-Properties'] = var4;
 60:
            var4 = _closure1_slot26;
            if(!(var5 != var4)) { _fun0003_ip = 78; continue _fun0003 }
 68:
            var4 = _closure1_slot26;
            var7['X-Fingerprint'] = var4;
 78:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var4 = 14;
            var4 = var10[var4];
            var4 = var9.bind(var1)(var4);
            var6 = var4.HTTP;
            var5 = var6.get;
            var4 = {};
            var8 = _closure1_slot12;
            var8 = var8.EXPERIMENTS;
            var4['url'] = var8;
            var8 = {};
            var8['with_guild_experiments'] = var11;
            var4['query'] = var8;
            var4['headers'] = var7;
            var7 = {};
            var8 = 12;
            var8 = var10[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.getFingerprintLocation;
            var8 = var8.bind(var9)();
            var7['location'] = var8;
            var4['context'] = var7;
            var7 = 3;
            var4['retries'] = var7;
            var7 = true;
            var4['oldFormErrors'] = var7;
            var7 = false;
            var4['rejectWithError'] = var7;
            var6 = var5.bind(var6)(var4);
            var5 = var6.then;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var9 = var1.fingerprint;
                    var8 = var1.assignments;
                    var7 = var1.guild_experiments;
                    if(!var9) { _fun0004_ip = 79; continue _fun0004 }
 29:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'FINGERPRINT';
                    var1['type'] = var4;
                    var1['fingerprint'] = var9;
                    var1 = var2.bind(var3)(var1);
 79:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var3 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.dispatch;
                    var3 = {};
                    var10 = 'EXPERIMENTS_FETCH_SUCCESS';
                    var3['type'] = var10;
                    var3['fingerprint'] = var9;
                    var3['experiments'] = var8;
                    var3['guildExperiments'] = var7;
                    var3 = var5.bind(var6)(var3);
                    var3 = null;
                    _closure1_slot37 = var3;
                    var3 = _closure1_slot0;
                    var2 = 16;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.onExperimentsLoaded;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var2 = function() {
                var2 = null;
                _closure1_slot37 = var2;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'EXPERIMENTS_FETCH_FAILURE';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot37 = var2;
            return var1;
        }
    };
    var _closure1_slot45 = var11;
    var1 = function clearFingerprint() {
        var1 = _closure1_slot26;
        _closure1_slot27 = var1;
        var1 = null;
        _closure1_slot26 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Storage;
        var3 = var4.remove;
        var2 = _closure1_slot20;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function setAuthToken(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg2;
            var4 = _closure1_slot43;
            var1 = undefined;
            var3 = 'setAuthToken called.';
            var3 = var4.bind(var1)(var3);
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0005_ip = 40; continue _fun0005 }
 32:
            var4 = _closure1_slot22;
            var3 = var5 === var4;
 40:
            if(var3) { _fun0005_ip = 73; continue _fun0005 }
 43:
            var4 = _closure1_slot2;
            var6 = _closure1_slot3;
            var3 = 10;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.removeAnalyticsToken;
            var3 = var3.bind(var4)();
 73:
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 10;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setToken;
            var2 = arg1;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function setAnalyticsToken(arg1) {
        var4 = arg1;
        _closure1_slot28 = var4;
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.setAnalyticsToken;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = function removeAuthToken() {
        var4 = _closure1_slot43;
        var3 = undefined;
        var2 = 'removeAuthToken called.';
        var2 = var4.bind(var3)(var2);
        var2 = _closure1_slot2;
        var4 = _closure1_slot3;
        var1 = 10;
        var5 = var4[var1];
        var6 = var2.bind(var3)(var5);
        var5 = var6.removeAnalyticsToken;
        var5 = var5.bind(var6)();
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.removeToken;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = function updateMFAMethods() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = new Array(0);
            var4 = _closure1_slot34;
            var3 = null;
            if(!(var3 != var4)) { _fun0006_ip = 46; continue _fun0006 }
 17:
            var4 = var2.push;
            var3 = {};
            var5 = 'webauthn';
            var3['type'] = var5;
            var5 = _closure1_slot34;
            var3['challenge'] = var5;
            var3 = var4.bind(var2)(var3);
 46:
            var3 = _closure1_slot35;
            if(!var3) { _fun0006_ip = 82; continue _fun0006 }
 53:
            var4 = var2.push;
            var3 = {};
            var5 = 'totp';
            var3['type'] = var5;
            var5 = _closure1_slot36;
            var3['backup_codes_allowed'] = var5;
            var3 = var4.bind(var2)(var3);
 82:
            var3 = _closure1_slot36;
            if(!var3) { _fun0006_ip = 109; continue _fun0006 }
 89:
            var4 = var2.push;
            var3 = {};
            var5 = 'backup';
            var3['type'] = var5;
            var3 = var4.bind(var2)(var3);
 109:
            var3 = _closure1_slot33;
            if(!var3) { _fun0006_ip = 136; continue _fun0006 }
 116:
            var4 = var2.push;
            var3 = {};
            var5 = 'sms';
            var3['type'] = var5;
            var3 = var4.bind(var2)(var3);
 136:
            _closure1_slot41 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var10 = function handleAgeGateUnderage() {
        var1 = true;
        _closure1_slot30 = var1;
        var3 = _closure1_slot52;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var3 = _closure1_slot1;
        var4 = _closure1_slot3;
        var2 = 15;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.wait;
        var2 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.transitionTo;
            var2 = _closure1_slot15;
            var2 = var2.REGISTER;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot51 = var10;
    var12 = function handleLogout(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot43;
            var1 = undefined;
            var3 = 'handleLogout called.';
            var3 = var5.bind(var1)(var3);
            var3 = _closure1_slot49;
            var5 = var3.bind(var1)();
            var3 = null;
            var6 = var3 == var4;
            var7 = undefined;
            if(var6) { _fun0007_ip = 48; continue _fun0007 }
 42:
            var7 = var4.isSwitchingAccount;
 48:
            var6 = var3 != var7;
            if(!var6) { _fun0007_ip = 58; continue _fun0007 }
 55:
            var6 = var7;
 58:
            if(var6) { _fun0007_ip = 80; continue _fun0007 }
 61:
            if(!var5) { _fun0007_ip = 72; continue _fun0007 }
 64:
            var5 = _closure1_slot46;
            var5 = var5.bind(var1)();
 72:
            var5 = _closure1_slot44;
            var5 = var5.bind(var1)();
 80:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 21;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var7 = var5.PersistedStore;
            var6 = var7.clearAll;
            var5 = {};
            var8 = ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore', 'LayoutStore', 'OverlaySettingsStore', 'ApexExperimentStore'];
            var5['omit'] = var8;
            var9 = var3 != var4;
            var10 = 'all';
            var8 = var10;
            if(!var9) { _fun0007_ip = 161; continue _fun0007 }
 143:
            var9 = var4.isSwitchingAccount;
            var8 = var10;
            if(!var9) { _fun0007_ip = 161; continue _fun0007 }
 155:
            var8 = 'user-data-only';
 161:
            var5['type'] = var8;
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot10;
            var5 = var6.clearAll;
            var5 = var5.bind(var6)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 19;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.clearUser;
            var5 = var5.bind(var6)();
            var6 = _closure1_slot0;
            var5 = 11;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var7 = var5.Storage;
            var6 = var7.remove;
            var5 = _closure1_slot21;
            var5 = var6.bind(var7)(var5);
            _closure1_slot22 = var3;
            _closure1_slot23 = var3;
            if(!(var3 != var4)) { _fun0007_ip = 272; continue _fun0007 }
 263:
            var4 = var4.isSwitchingAccount;
            if(var4) { _fun0007_ip = 284; continue _fun0007 }
 272:
            var4 = _closure1_slot13;
            var4 = var4.NONE;
            _fun0007_ip = 294; continue _fun0007;
 284:
            var5 = _closure1_slot13;
            var4 = var5.LOGGING_IN;
 294:
            _closure1_slot29 = var4;
            var4 = '';
            _closure1_slot32 = var4;
            _closure1_slot34 = var3;
            var3 = false;
            _closure1_slot33 = var3;
            _closure1_slot39 = var3;
            _closure1_slot40 = var3;
            var2 = _closure1_slot50;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot52 = var12;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var2.Endpoints;
    var _closure1_slot12 = var7;
    var7 = var2.LoginStates;
    var _closure1_slot13 = var7;
    var9 = var2.Platforms;
    var _closure1_slot14 = var9;
    var9 = var2.Routes;
    var _closure1_slot15 = var9;
    var2 = var2.TOKEN_KEY;
    var _closure1_slot16 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.EXISTING_USER_AGE_GATE_MODAL_KEY;
    var2 = var2.NEW_USER_AGE_GATE_MODAL_KEY;
    var2 = 9;
    var2 = var6[var2];
    var9 = var8.bind(var1)(var2);
    var2 = var9.prototype;
    var13 = Object.create(var2, {constructor: {value: var9}});
    var2 = 'AuthenticationStore';
    var17 = var13;
    var16 = var2;
    var9 = new var17[var9](var16, var15);
    var9 = var9 instanceof Object ? var9 : var13;
    var _closure1_slot19 = var9;
    var9 = 'fingerprint';
    var _closure1_slot20 = var9;
    var9 = 'user_id_cache';
    var _closure1_slot21 = var9;
    var9 = null;
    var _closure1_slot22 = var9;
    var _closure1_slot23 = var9;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var9;
    var _closure1_slot26 = var9;
    var _closure1_slot27 = var9;
    var _closure1_slot28 = var9;
    var7 = var7.NONE;
    var _closure1_slot29 = var7;
    var7 = false;
    var _closure1_slot30 = var7;
    var13 = new Array(0);
    var _closure1_slot31 = var13;
    var13 = '';
    var _closure1_slot32 = var13;
    var _closure1_slot33 = var7;
    var _closure1_slot34 = var9;
    var _closure1_slot35 = var7;
    var _closure1_slot36 = var7;
    var _closure1_slot37 = var9;
    var _closure1_slot38 = var9;
    var _closure1_slot39 = var7;
    var _closure1_slot40 = var7;
    var7 = new Array(0);
    var _closure1_slot41 = var7;
    var7 = 21;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var9 = var7.Store;
    var7 = function(arg1) {
        var4 = function AuthenticationStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot42;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
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
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 11;
                var3 = var6[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var7 = var3.Storage;
                var5 = var7.get;
                var3 = _closure1_slot21;
                var3 = var5.bind(var7)(var3);
                _closure1_slot22 = var3;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.getToken;
                var5 = var3.bind(var5)();
                var3 = null;
                if(!(var3 == var5)) { _fun0009_ip = 92; continue _fun0009 }
 84:
                var2 = _closure1_slot44;
                var2 = var2.bind(var1)();
 92:
                var3 = var4.addChangeListener;
                var2 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.setClientState;
                    var1 = _closure1_slot22;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLoginStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSessionId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAuthSessionIdHash';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getStaticAuthSessionId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getToken';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getToken;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isAuthenticated';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isAuthenticated;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getFingerprint';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getAnalyticsToken';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot28;
                var1 = null;
                if(!(var1 == var3)) { _fun0010_ip = 47; continue _fun0010 }
 13:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.getAnalyticsToken;
                var1 = var1.bind(var3)();
                _fun0010_ip = 51; continue _fun0010;
 47:
                var1 = _closure1_slot28;
 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getMFATicket';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getMFAMethods';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot41;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getLoginInstanceId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasTOTPEnabled';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot31;
            var2 = var3.includes;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 24;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AuthenticatorType;
            var1 = var1.TOTP;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getCredentials';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot17;
                var2 = null;
                if(!(var2 != var3)) { _fun0011_ip = 19; continue _fun0011 }
 13:
                var1 = _closure1_slot17;
                return var1;
 19:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'no credentials';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'allowLogoutRedirect';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getSuspendedUserToken';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot38;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getIsPasswordlessActive';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot39;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'attemptedPasswordLogin';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot40;
            return var1;
        };
        var5['value'] = var6;
        var1[18] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var7.bind(var1)(var9);
    var9['displayName'] = var2;
    var2 = 15;
    var7 = var6[var2];
    var8 = var8.bind(var1)(var7);
    var7 = {};
    var13 = function handleConnectionOpen(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var6 = var1.user;
            var8 = var1.sessionId;
            var7 = var1.authSessionIdHash;
            var5 = var1.analyticsToken;
            var2 = var1.auth;
            var3 = var1.staticAuthSessionId;
            var10 = _closure1_slot43;
            var1 = undefined;
            var9 = 'handleConnectionOpen called';
            var9 = var10.bind(var1)(var9);
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var9 = 19;
            var9 = var11[var9];
            var14 = var10.bind(var1)(var9);
            var13 = var14.setUser;
            var12 = var6.id;
            var11 = var6.username;
            var9 = var6.email;
            var10 = null;
            var15 = var10 != var9;
            var10 = undefined;
            if(!var15) { _fun0012_ip = 114; continue _fun0012 }
 111:
            var10 = var9;
 114:
            var15 = _closure1_slot1;
            var16 = _closure1_slot3;
            var9 = 20;
            var9 = var16[var9];
            var9 = var15.bind(var1)(var9);
            var17 = var9.bind(var1)(var6);
            var21 = var14;
            var20 = var12;
            var19 = var11;
            var18 = var10;
            var9 = var21[var13](var20, var19, var18, var17, var16);
            _closure1_slot23 = var8;
            _closure1_slot24 = var7;
            _closure1_slot25 = var3;
            var3 = _closure1_slot48;
            var3 = var3.bind(var1)(var5);
            var3 = var6.id;
            _closure1_slot22 = var3;
            if(!(var1 !== var2)) { _fun0012_ip = 199; continue _fun0012 }
 189:
            var2 = var2.authenticator_types;
            _closure1_slot31 = var2;
 199:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var5 = 11;
            var7 = var2[var5];
            var7 = var3.bind(var1)(var7);
            var9 = var7.Storage;
            var8 = var9.set;
            var7 = _closure1_slot21;
            var6 = var6.id;
            var6 = var8.bind(var9)(var7, var6);
            var2 = var2[var5];
            var2 = var3.bind(var1)(var2);
            var7 = var2.Storage;
            var6 = var7.get;
            var2 = _closure1_slot11;
            var3 = var2.APP_FIRST_LOGIN;
            var2 = true;
            var2 = var6.bind(var7)(var3, var2);
            if(!var2) { _fun0012_ip = 382; continue _fun0012 }
 286:
            var6 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 13;
            var2 = var3[var2];
            var9 = var6.bind(var1)(var2);
            var8 = var9.track;
            var2 = _closure1_slot11;
            var7 = var2.APP_FIRST_LOGIN;
            var6 = {};
            var10 = _closure1_slot14;
            var10 = var10.IOS;
            var6['platform'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var4 = _closure1_slot0;
            var3 = var3[var5];
            var3 = var4.bind(var1)(var3);
            var5 = var3.Storage;
            var4 = var5.set;
            var3 = var2.APP_FIRST_LOGIN;
            var2 = false;
            var2 = var4.bind(var5)(var3, var2);
 382:
            return var1;
        }
    };
    var7['CONNECTION_OPEN'] = var13;
    var13 = function handleOverlayInitialize(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var6 = var1.sessionId;
            var5 = var1.analyticsToken;
            var8 = var1.token;
            var7 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 19;
            var4 = var4[var1];
            var1 = undefined;
            var13 = var7.bind(var1)(var4);
            var12 = var13.setUser;
            var11 = var2.id;
            var10 = var2.username;
            var7 = var2.email;
            var4 = null;
            var14 = var4 != var7;
            var9 = undefined;
            if(!var14) { _fun0013_ip = 87; continue _fun0013 }
 84:
            var9 = var7;
 87:
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var7 = 20;
            var7 = var15[var7];
            var7 = var14.bind(var1)(var7);
            var16 = var7.bind(var1)(var2);
            var20 = var13;
            var19 = var11;
            var18 = var10;
            var17 = var9;
            var7 = var20[var12](var19, var18, var17, var16, var15);
            _closure1_slot23 = var6;
            _closure1_slot28 = var5;
            var7 = _closure1_slot47;
            var6 = var2.id;
            var6 = var7.bind(var1)(var8, var6);
            if(!(var4 != var5)) { _fun0013_ip = 164; continue _fun0013 }
 155:
            var4 = _closure1_slot48;
            var4 = var4.bind(var1)(var5);
 164:
            var4 = _closure1_slot46;
            var4 = var4.bind(var1)();
            var4 = var2.id;
            _closure1_slot22 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.Storage;
            var4 = var5.set;
            var3 = _closure1_slot21;
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var7['OVERLAY_INITIALIZE'] = var13;
    var13 = function handleConnectionClosed(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var5 = var1.code;
            var6 = _closure1_slot43;
            var3 = global;
            var1 = var3.HermesInternal;
            var7 = var1.concat;
            var4 = 'handleConnectionClosed called with code ';
            var1 = '.';
            var4 = var7.bind(var4)(var5, var1);
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = 4004;
            if(!(var4 === var5)) { _fun0014_ip = 178; continue _fun0014 }
 61:
            var4 = _closure1_slot30;
            if(var4) { _fun0014_ip = 180; continue _fun0014 }
 68:
            var5 = _closure1_slot1;
            var10 = _closure1_slot3;
            var4 = 13;
            var4 = var10[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.track;
            var4 = _closure1_slot11;
            var5 = var4.APP_USER_DEAUTHENTICATED;
            var4 = {};
            var9 = _closure1_slot0;
            var8 = 11;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var10 = var8.Storage;
            var9 = var10.get;
            var8 = _closure1_slot21;
            var8 = var9.bind(var10)(var8);
            var4['user_id'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var4 = _closure1_slot52;
            var4 = var4.bind(var1)();
            var4 = var3.setImmediate;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.transitionTo;
                var1 = _closure1_slot15;
                var1 = var1.DEFAULT_LOGGED_OUT;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var1)(var3);
 178:
            return var1;
 180:
            var2 = _closure1_slot51;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var7['CONNECTION_CLOSED'] = var13;
    var13 = function handleAuthSessionChange(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var2 = var1.authSessionIdHash;
            var1 = null;
            if(!(var1 != var2)) { _fun0015_ip = 22; continue _fun0015 }
 15:
            _closure1_slot24 = var2;
 22:
            var1 = undefined;
            return var1;
        }
    };
    var7['AUTH_SESSION_CHANGE'] = var13;
    var13 = function handleLogin(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var4 = var1.isPasswordAttempt;
            var1 = _closure1_slot13;
            var1 = var1.LOGGING_IN;
            _closure1_slot29 = var1;
            var1 = _closure1_slot40;
            if(var1) { _fun0016_ip = 39; continue _fun0016 }
 33:
            var3 = true;
            var1 = var3 === var4;
 39:
            _closure1_slot40 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var7['LOGIN'] = var13;
    var13 = function handleLoginSuccess(arg1) {
        var1 = arg1;
        var4 = var1.token;
        var1 = _closure1_slot13;
        var1 = var1.NONE;
        _closure1_slot29 = var1;
        var2 = _closure1_slot47;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = _closure1_slot46;
        var2 = var2.bind(var1)();
        var2 = '';
        _closure1_slot32 = var2;
        var2 = false;
        _closure1_slot33 = var2;
        var4 = null;
        _closure1_slot34 = var4;
        var _closure1_slot18 = var4;
        var4 = _closure1_slot50;
        var4 = var4.bind(var1)();
        _closure1_slot39 = var2;
        return var1;
    };
    var7['LOGIN_SUCCESS'] = var13;
    var13 = function handleLoginFailure(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var6 = var1.error;
            var1 = '';
            _closure1_slot32 = var1;
            var1 = false;
            _closure1_slot33 = var1;
            var4 = null;
            _closure1_slot34 = var4;
            _closure1_slot18 = var4;
            var2 = _closure1_slot50;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.getAuthenticationErrorsFromV6OrEarlierAPIError;
            var2 = var2.bind(var5)(var6);
            var2 = var2.date_of_birth;
            if(!(var4 == var2)) { _fun0017_ip = 98; continue _fun0017 }
 86:
            var2 = _closure1_slot13;
            var2 = var2.NONE;
            _fun0017_ip = 108; continue _fun0017;
 98:
            var4 = _closure1_slot13;
            var2 = var4.LOGIN_AGE_GATE;
 108:
            _closure1_slot29 = var2;
            return var1;
        }
    };
    var7['LOGIN_FAILURE'] = var13;
    var13 = function handleLoginMFAStep(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var8 = var1.ticket;
            var7 = var1.sms;
            var6 = var1.webauthn;
            var4 = var1.backup;
            var3 = var1.totp;
            var2 = var1.loginInstanceId;
            var5 = null;
            if(!(var5 != var8)) { _fun0018_ip = 94; continue _fun0018 }
 45:
            _closure1_slot32 = var8;
            _closure1_slot33 = var7;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0018_ip = 68; continue _fun0018 }
 65:
            var5 = var6;
 68:
            _closure1_slot34 = var5;
            _closure1_slot36 = var4;
            _closure1_slot35 = var3;
            _closure1_slot18 = var2;
            var2 = _closure1_slot50;
            var1 = undefined;
            var1 = var2.bind(var1)();
 94:
            var1 = _closure1_slot13;
            var1 = var1.MFA_STEP;
            _closure1_slot29 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var7['LOGIN_MFA_STEP'] = var13;
    var13 = function handleLoginMFA() {
        var1 = _closure1_slot13;
        var1 = var1.LOGGING_IN_MFA;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_MFA'] = var13;
    var13 = function handleLoginAccountPendingDeletion(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.ACCOUNT_SCHEDULED_FOR_DELETION;
        _closure1_slot29 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        var _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION'] = var13;
    var13 = function handleLoginAccountDisabled(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.ACCOUNT_DISABLED;
        _closure1_slot29 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_ACCOUNT_DISABLED'] = var13;
    var13 = function handleLoginPasswordRecoveryPhoneVerification(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.PASSWORD_RECOVERY_PHONE_VERIFICATION;
        _closure1_slot29 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION'] = var13;
    var13 = function handleLoginPhoneIPAuthorizationRequired(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.PHONE_IP_AUTHORIZATION;
        _closure1_slot29 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED'] = var13;
    var13 = function handleLoginReset(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var2 = var1.isMultiAccount;
            var3 = _closure1_slot13;
            var3 = var3.NONE;
            _closure1_slot29 = var3;
            var3 = '';
            _closure1_slot32 = var3;
            var3 = false;
            _closure1_slot33 = var3;
            var4 = null;
            _closure1_slot34 = var4;
            _closure1_slot18 = var4;
            _closure1_slot17 = var4;
            if(var2) { _fun0019_ip = 84; continue _fun0019 }
 57:
            var4 = _closure1_slot50;
            var2 = undefined;
            var4 = var4.bind(var2)();
            var4 = _closure1_slot49;
            var4 = var4.bind(var2)();
            var1 = _closure1_slot44;
            var1 = var1.bind(var2)(var3);
 84:
            var1 = undefined;
            return var1;
        }
    };
    var7['LOGIN_RESET'] = var13;
    var13 = function handleLoginStatusReset() {
        var1 = _closure1_slot13;
        var1 = var1.NONE;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_STATUS_RESET'] = var13;
    var13 = function handleSuspendedUserLogin(arg1) {
        var1 = arg1;
        var2 = var1.suspendedUserToken;
        var3 = false;
        _closure1_slot39 = var3;
        _closure1_slot38 = var2;
        var1 = global;
        var3 = var1.setImmediate;
        var1 = undefined;
        var2 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.transitionTo;
            var1 = _closure1_slot15;
            var1 = var1.ACCOUNT_STANDING;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['LOGIN_SUSPENDED_USER'] = var13;
    var7['LOGOUT'] = var12;
    var12 = function handleFingerprint(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var2 = var1.fingerprint;
            var4 = _closure1_slot26;
            var3 = null;
            if(!(var3 != var4)) { _fun0020_ip = 157; continue _fun0020 }
 25:
            var4 = var3 != var2;
            if(!var4) { _fun0020_ip = 40; continue _fun0020 }
 32:
            var5 = _closure1_slot26;
            var4 = var5 !== var2;
 40:
            if(!var4) { _fun0020_ip = 355; continue _fun0020 }
 46:
            var5 = _closure1_slot1;
            var11 = _closure1_slot3;
            var4 = 13;
            var4 = var11[var4];
            var10 = undefined;
            var7 = var5.bind(var10)(var4);
            var6 = var7.track;
            var4 = _closure1_slot11;
            var5 = var4.EXTERNAL_FINGERPRINT_DROPPED;
            var4 = {};
            var9 = _closure1_slot0;
            var8 = 18;
            var12 = var11[var8];
            var14 = var9.bind(var10)(var12);
            var13 = var14.extractId;
            var12 = _closure1_slot26;
            var12 = var13.bind(var14)(var12);
            var4['fingerprint'] = var12;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.extractId;
            var8 = var8.bind(var9)(var2);
            var4['dropped_fingerprint'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            _fun0020_ip = 355; continue _fun0020;
 157:
            if(!(var3 == var2)) { _fun0020_ip = 176; continue _fun0020 }
 161:
            var5 = _closure1_slot44;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0020_ip = 355; continue _fun0020;
 176:
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var4 = 13;
            var5 = var5[var4];
            var4 = undefined;
            var9 = var6.bind(var4)(var5);
            var8 = var9.track;
            var5 = _closure1_slot11;
            var7 = var5.USER_FINGERPRINT_CHANGED;
            var6 = {};
            var5 = _closure1_slot27;
            var5 = var3 != var5;
            var3 = null;
            if(!var5) { _fun0020_ip = 263; continue _fun0020 }
 228:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var5 = 18;
            var5 = var11[var5];
            var11 = var10.bind(var4)(var5);
            var10 = var11.extractId;
            var5 = _closure1_slot27;
            var3 = var10.bind(var11)(var5);
 263:
            var6['old_fingerprint'] = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var10 = 18;
            var10 = var5[var10];
            var11 = var3.bind(var4)(var10);
            var10 = var11.extractId;
            var10 = var10.bind(var11)(var2);
            var6['new_fingerprint'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            _closure1_slot26 = var2;
            _closure1_slot27 = var2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = _closure1_slot20;
            var1 = _closure1_slot26;
            var1 = var3.bind(var4)(var2, var1);
 355:
            var1 = undefined;
            return var1;
        }
    };
    var7['FINGERPRINT'] = var12;
    var12 = function handleRegisterSuccess(arg1) {
        var1 = arg1;
        var4 = var1.token;
        var3 = _closure1_slot47;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var2 = _closure1_slot46;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['REGISTER_SUCCESS'] = var12;
    var12 = function handleForgotPasswordRequest() {
        var1 = _closure1_slot13;
        var1 = var1.FORGOT_PASSWORD;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var7['FORGOT_PASSWORD_REQUEST'] = var12;
    var12 = function handleForgotPasswordSent() {
        var1 = _closure1_slot13;
        var1 = var1.NONE;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var7['FORGOT_PASSWORD_SENT'] = var12;
    var12 = function handleUpdateToken(arg1) {
        var1 = arg1;
        var5 = var1.token;
        var4 = var1.userId;
        var6 = _closure1_slot43;
        var1 = undefined;
        var3 = 'handleUpdateToken called';
        var3 = var6.bind(var1)(var3);
        var3 = _closure1_slot47;
        var3 = var3.bind(var1)(var5, var4);
        var2 = _closure1_slot46;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['UPDATE_TOKEN'] = var12;
    var7['EXPERIMENTS_FETCH'] = var11;
    var11 = function handleUserUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var1 = var2.id;
            _closure1_slot22 = var1;
            var4 = var2.authenticator_types;
            var1 = undefined;
            if(!(var1 !== var4)) { _fun0021_ip = 42; continue _fun0021 }
 32:
            var4 = var2.authenticator_types;
            _closure1_slot31 = var4;
 42:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.Storage;
            var4 = var5.set;
            var3 = _closure1_slot21;
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var7['CURRENT_USER_UPDATE'] = var11;
    var7['AGE_GATE_LOGOUT_UNDERAGE_NEW_USER'] = var10;
    var10 = function handleSuspendedUserClosed() {
        var2 = null;
        _closure1_slot38 = var2;
        var2 = _closure1_slot13;
        var2 = var2.NONE;
        _closure1_slot29 = var2;
        var2 = _closure1_slot52;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = global;
        var3 = var2.setImmediate;
        var2 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.transitionTo;
            var1 = _closure1_slot15;
            var1 = var1.DEFAULT_LOGGED_OUT;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var7['CLOSE_SUSPENDED_USER'] = var10;
    var10 = function handlePasswordlessFailure(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var6 = var1.error;
            var1 = '';
            _closure1_slot32 = var1;
            var1 = false;
            _closure1_slot33 = var1;
            var4 = null;
            _closure1_slot34 = var4;
            _closure1_slot39 = var1;
            _closure1_slot18 = var4;
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.getAuthenticationErrorsFromAPIError;
            var2 = var2.bind(var5)(var6);
            var2 = var2.date_of_birth;
            if(!(var4 == var2)) { _fun0022_ip = 94; continue _fun0022 }
 82:
            var2 = _closure1_slot13;
            var2 = var2.NONE;
            _fun0022_ip = 104; continue _fun0022;
 94:
            var4 = _closure1_slot13;
            var2 = var4.LOGIN_AGE_GATE;
 104:
            _closure1_slot29 = var2;
            return var1;
        }
    };
    var7['PASSWORDLESS_FAILURE'] = var10;
    var4 = function handlePasswordlessStart() {
        var1 = true;
        _closure1_slot39 = var1;
        var1 = undefined;
        return var1;
    };
    var7['PASSWORDLESS_START'] = var4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DispatchBand;
    var14 = var2.Early;
    var4 = var9.prototype;
    var4 = Object.create(var4, {constructor: {value: var9}});
    var17 = var4;
    var16 = var8;
    var15 = var7;
    var2 = new var17[var9](var16, var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/AuthenticationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();