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
            _closure1_slot44 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot44 = var1;
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
    var _closure1_slot45 = var1;
    var1 = function fetchFingerprint() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arguments[0];
            var2 = undefined;
            if(!(var4 === var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = true;
case 6:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 11;
            var7 = var6[var3];
            var7 = var5.bind(var2)(var7);
            var9 = var7.Storage;
            var8 = var9.get;
            var7 = _closure1_slot20;
            var7 = var8.bind(var9)(var7);
            _closure1_slot27 = var7;
            var3 = var6[var3];
            var3 = var5.bind(var2)(var3);
            var6 = var3.Storage;
            var5 = var6.get;
            var3 = _closure1_slot21;
            var5 = var5.bind(var6)(var3);
            var6 = null;
            var7 = var6 != var5;
            var3 = null;
            if(!var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var5;
case 8:
            _closure1_slot29 = var3;
            var3 = _closure1_slot39;
            if(!(var6 == var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot27;
            if(!(var6 == var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = _closure1_slot2;
            var7 = _closure1_slot3;
            var3 = 10;
            var3 = var7[var3];
            var5 = var5.bind(var2)(var3);
            var3 = var5.getToken;
            var5 = var3.bind(var5)();
            _fun0002_ip = 14; continue _fun0002;
case 12:
            var5 = _closure1_slot27;
case 14:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 12;
            var3 = var8[var3];
            var7 = var7.bind(var2)(var3);
            var3 = var7.isValidFingerprintRoute;
            var3 = var3.bind(var7)();
            var3 = !var3;
            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = !var4;
            if(!var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = var6 != var5;
case 17:
            var3 = var4;
case 15:
            if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var5 = _closure1_slot9;
            var4 = var5.isHandoffAvailable;
            var3 = var4.bind(var5)();
case 19:
            if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var4 = _closure1_slot47;
            var3 = {};
            var5 = true;
            var3['withGuildExperiments'] = var5;
            var3 = var4.bind(var2)(var3);
case 21:
            return var2;
case 10:
            var1 = _closure1_slot39;
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var11 = function fetchExperiments(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
            if(!(var5 != var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var7['X-Super-Properties'] = var4;
case 23:
            var4 = _closure1_slot27;
            if(!(var5 != var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var4 = _closure1_slot27;
            var7['X-Fingerprint'] = var4;
case 25:
            var4 = _closure1_slot29;
            if(!(var5 != var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var4 = _closure1_slot29;
            var7['X-Installation-ID'] = var4;
case 27:
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
case 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var9 = var1.fingerprint;
                    var8 = var1.assignments;
                    var7 = var1.guild_experiments;
                    if(!var9) { _fun0004_ip = 29; continue _fun0004 }
case 30:
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
case 29:
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
                    _closure1_slot39 = var3;
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
                _closure1_slot39 = var2;
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
            _closure1_slot39 = var2;
            return var1;
        }
    };
    var _closure1_slot47 = var11;
    var1 = function clearFingerprint() {
        var1 = _closure1_slot27;
        _closure1_slot28 = var1;
        var1 = null;
        _closure1_slot27 = var1;
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
    var _closure1_slot48 = var1;
    var1 = function setAuthToken(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg2;
            var4 = _closure1_slot45;
            var1 = undefined;
            var3 = 'setAuthToken called.';
            var3 = var4.bind(var1)(var3);
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var4 = _closure1_slot23;
            var3 = var5 === var4;
case 31:
            if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var4 = _closure1_slot2;
            var6 = _closure1_slot3;
            var3 = 10;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.removeAnalyticsToken;
            var3 = var3.bind(var4)();
case 33:
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
    var _closure1_slot49 = var1;
    var1 = function setAnalyticsToken(arg1) {
        var4 = arg1;
        _closure1_slot30 = var4;
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
    var _closure1_slot50 = var1;
    var1 = function removeAuthToken() {
        var4 = _closure1_slot45;
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
    var _closure1_slot51 = var1;
    var1 = function updateMFAMethods() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = new Array(0);
            var4 = _closure1_slot36;
            var3 = null;
            if(!(var3 != var4)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var4 = var2.push;
            var3 = {};
            var5 = 'webauthn';
            var3['type'] = var5;
            var5 = _closure1_slot36;
            var3['challenge'] = var5;
            var3 = var4.bind(var2)(var3);
case 35:
            var3 = _closure1_slot37;
            if(!var3) { _fun0006_ip = 33; continue _fun0006 }
case 37:
            var4 = var2.push;
            var3 = {};
            var5 = 'totp';
            var3['type'] = var5;
            var3 = var4.bind(var2)(var3);
case 33:
            var3 = _closure1_slot38;
            if(!var3) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var4 = var2.push;
            var3 = {};
            var5 = 'backup';
            var3['type'] = var5;
            var3 = var4.bind(var2)(var3);
case 38:
            var3 = _closure1_slot35;
            if(!var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var4 = var2.push;
            var3 = {};
            var5 = 'sms';
            var3['type'] = var5;
            var3 = var4.bind(var2)(var3);
case 40:
            _closure1_slot43 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var12 = function handleInstallationId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.installation;
            var3 = _closure1_slot29;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var1 = _closure1_slot29;
            var3 = var1.length;
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0007_ip = 44; continue _fun0007 }
case 42:
            _closure1_slot29 = var5;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 20;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.canUseInstallationId;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var1)(var3);
            var4 = var3.Storage;
            var3 = var4.set;
            var2 = _closure1_slot21;
            var2 = var3.bind(var4)(var2, var5);
case 45:
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot53 = var12;
    var10 = function handleAgeGateUnderage() {
        var1 = true;
        _closure1_slot32 = var1;
        var3 = _closure1_slot55;
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
    var _closure1_slot54 = var10;
    var13 = function handleLogout(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot45;
            var1 = undefined;
            var3 = 'handleLogout called.';
            var3 = var5.bind(var1)(var3);
            var3 = _closure1_slot51;
            var5 = var3.bind(var1)();
            var3 = null;
            var6 = var3 == var4;
            var7 = undefined;
            if(var6) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var7 = var4.isSwitchingAccount;
case 47:
            var6 = var3 != var7;
            if(!var6) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var6 = var7;
case 49:
            if(var6) { _fun0008_ip = 39; continue _fun0008 }
case 51:
            if(!var5) { _fun0008_ip = 5; continue _fun0008 }
case 52:
            var5 = _closure1_slot48;
            var5 = var5.bind(var1)();
case 5:
            var5 = _closure1_slot46;
            var5 = var5.bind(var1)();
case 39:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var5 = 23;
            var6 = var6[var5];
            var6 = var7.bind(var1)(var6);
            var8 = var6.PersistedStore;
            var7 = var8.clearAll;
            var6 = {};
            var9 = ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore', 'LayoutStore', 'OverlaySettingsStore', 'ApexExperimentStore'];
            var6['omit'] = var9;
            var10 = var3 != var4;
            var11 = 'all';
            var9 = var11;
            if(!var10) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var10 = var4.isSwitchingAccount;
            var9 = var11;
            if(!var10) { _fun0008_ip = 53; continue _fun0008 }
case 55:
            var9 = 'user-data-only';
case 53:
            var6['type'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var8 = var5.Store;
            var5 = var8.removeAllConditionalListeners;
            var5 = var5.bind(var8)();
            var8 = _closure1_slot10;
            var5 = var8.clearAll;
            var5 = var5.bind(var8)();
            var5 = 21;
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
            var5 = _closure1_slot22;
            var5 = var6.bind(var7)(var5);
            _closure1_slot23 = var3;
            _closure1_slot24 = var3;
            if(!(var3 != var4)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var4 = var4.isSwitchingAccount;
            if(var4) { _fun0008_ip = 58; continue _fun0008 }
case 56:
            var4 = _closure1_slot13;
            var4 = var4.NONE;
            _fun0008_ip = 59; continue _fun0008;
case 58:
            var5 = _closure1_slot13;
            var4 = var5.LOGGING_IN;
case 59:
            _closure1_slot31 = var4;
            var4 = '';
            _closure1_slot34 = var4;
            _closure1_slot36 = var3;
            var3 = false;
            _closure1_slot35 = var3;
            _closure1_slot41 = var3;
            _closure1_slot42 = var3;
            var2 = _closure1_slot52;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot55 = var13;
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
    var14 = Object.create(var2, {constructor: {value: var9}});
    var2 = 'AuthenticationStore';
    var18 = var14;
    var17 = var2;
    var9 = new var18[var9](var17, var16);
    var9 = var9 instanceof Object ? var9 : var14;
    var _closure1_slot19 = var9;
    var9 = 'fingerprint';
    var _closure1_slot20 = var9;
    var9 = 'analytics_installation';
    var _closure1_slot21 = var9;
    var9 = 'user_id_cache';
    var _closure1_slot22 = var9;
    var9 = null;
    var _closure1_slot23 = var9;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var9;
    var _closure1_slot26 = var9;
    var _closure1_slot27 = var9;
    var _closure1_slot28 = var9;
    var _closure1_slot29 = var9;
    var _closure1_slot30 = var9;
    var7 = var7.NONE;
    var _closure1_slot31 = var7;
    var7 = false;
    var _closure1_slot32 = var7;
    var14 = new Array(0);
    var _closure1_slot33 = var14;
    var14 = '';
    var _closure1_slot34 = var14;
    var _closure1_slot35 = var7;
    var _closure1_slot36 = var9;
    var _closure1_slot37 = var7;
    var _closure1_slot38 = var7;
    var _closure1_slot39 = var9;
    var _closure1_slot40 = var9;
    var _closure1_slot41 = var7;
    var _closure1_slot42 = var7;
    var7 = new Array(0);
    var _closure1_slot43 = var7;
    var7 = 23;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var9 = var7.Store;
    var7 = function(arg1) {
        var4 = function AuthenticationStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot44;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 62; continue _fun0009;
case 60:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 62:
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 11;
                var7 = var6[var3];
                var1 = undefined;
                var7 = var5.bind(var1)(var7);
                var9 = var7.Storage;
                var8 = var9.get;
                var7 = _closure1_slot22;
                var7 = var8.bind(var9)(var7);
                _closure1_slot23 = var7;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var6 = var3.Storage;
                var5 = var6.get;
                var3 = _closure1_slot21;
                var6 = var5.bind(var6)(var3);
                var5 = null;
                var7 = var5 != var6;
                var3 = null;
                if(!var7) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                var3 = var6;
case 63:
                _closure1_slot29 = var3;
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var3 = 10;
                var3 = var7[var3];
                var6 = var6.bind(var1)(var3);
                var3 = var6.getToken;
                var3 = var3.bind(var6)();
                if(!(var5 == var3)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                var3 = _closure1_slot46;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot29;
                var3 = var5 != var3;
                if(!var3) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                var6 = _closure1_slot29;
                var7 = var6.length;
                var6 = 0;
                var3 = var6 !== var7;
case 67:
                if(var3) { _fun0010_ip = 65; continue _fun0010 }
case 69:
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 24;
                var2 = var6[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchInstallationExperiments;
                var2 = var2.bind(var3)(var5);
case 65:
                var3 = var4.addChangeListener;
                var2 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.setClientState;
                    var1 = _closure1_slot23;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(20);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLoginStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSessionId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAuthSessionIdHash';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getStaticAuthSessionId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
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
            var1 = 26;
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
            var1 = 26;
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
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getInstallationForTracking';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.canUseInstallationId;
                var3 = var1.bind(var3)();
                var1 = null;
                if(!var3) { _fun0011_ip = 70; continue _fun0011 }
case 31:
                var1 = _closure1_slot29;
case 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getAnalyticsToken';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = _closure1_slot30;
                var1 = null;
                if(!(var1 == var3)) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.getAnalyticsToken;
                var1 = var1.bind(var3)();
                _fun0012_ip = 61; continue _fun0012;
case 71:
                var1 = _closure1_slot30;
case 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getMFATicket';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot34;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getMFAMethods';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot43;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getLoginInstanceId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hasTOTPEnabled';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot33;
            var2 = var3.includes;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 27;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.AuthenticatorType;
            var1 = var1.TOTP;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getCredentials';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot17;
                var2 = null;
                if(!(var2 != var3)) { _fun0013_ip = 73; continue _fun0013 }
case 72:
                var1 = _closure1_slot17;
                return var1;
case 73:
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
        var1[15] = var5;
        var5 = {};
        var7 = 'allowLogoutRedirect';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot32;
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getSuspendedUserToken';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot40;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getIsPasswordlessActive';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot41;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'attemptedPasswordLogin';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot42;
            return var1;
        };
        var5['value'] = var6;
        var1[19] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var7.bind(var1)(var9);
    var9['displayName'] = var2;
    var2 = 15;
    var7 = var6[var2];
    var8 = var8.bind(var1)(var7);
    var7 = {};
    var14 = function handleConnectionOpen(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var10 = var1.sessionId;
            var9 = var1.authSessionIdHash;
            var8 = var1.analyticsToken;
            var5 = var1.auth;
            var7 = var1.staticAuthSessionId;
            var6 = var1.apexExperiments;
            var11 = _closure1_slot45;
            var1 = undefined;
            var3 = 'handleConnectionOpen called';
            var3 = var11.bind(var1)(var3);
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var3 = 21;
            var3 = var12[var3];
            var16 = var11.bind(var1)(var3);
            var15 = var16.setUser;
            var14 = var2.id;
            var13 = var2.username;
            var11 = var2.email;
            var3 = null;
            var17 = var3 != var11;
            var12 = undefined;
            if(!var17) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            var12 = var11;
case 74:
            var17 = _closure1_slot1;
            var18 = _closure1_slot3;
            var11 = 22;
            var11 = var18[var11];
            var11 = var17.bind(var1)(var11);
            var19 = var11.bind(var1)(var2);
            var23 = var16;
            var22 = var14;
            var21 = var13;
            var20 = var12;
            var11 = var23[var15](var22, var21, var20, var19, var18);
            _closure1_slot24 = var10;
            _closure1_slot25 = var9;
            _closure1_slot26 = var7;
            var7 = _closure1_slot50;
            var7 = var7.bind(var1)(var8);
            var7 = var2.id;
            _closure1_slot23 = var7;
            if(!(var1 !== var5)) { _fun0014_ip = 17; continue _fun0014 }
case 16:
            var5 = var5.authenticator_types;
            _closure1_slot33 = var5;
case 17:
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var5 = 11;
            var7 = var7[var5];
            var7 = var8.bind(var1)(var7);
            var9 = var7.Storage;
            var8 = var9.set;
            var7 = _closure1_slot22;
            var2 = var2.id;
            var2 = var8.bind(var9)(var7, var2);
            var7 = var3 == var6;
            var2 = undefined;
            if(var7) { _fun0014_ip = 76; continue _fun0014 }
case 77:
            var2 = var6.installation;
case 76:
            if(!(var3 != var2)) { _fun0014_ip = 78; continue _fun0014 }
case 79:
            var3 = _closure1_slot53;
            var2 = {};
            var7 = 'INSTALLATION_ID';
            var2['type'] = var7;
            var6 = var6.installation;
            var2['installation'] = var6;
            var2 = var3.bind(var1)(var2);
case 78:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var2 = var3.bind(var1)(var2);
            var7 = var2.Storage;
            var6 = var7.get;
            var2 = _closure1_slot11;
            var3 = var2.APP_FIRST_LOGIN;
            var2 = true;
            var2 = var6.bind(var7)(var3, var2);
            if(!var2) { _fun0014_ip = 80; continue _fun0014 }
case 81:
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
case 80:
            return var1;
        }
    };
    var7['CONNECTION_OPEN'] = var14;
    var14 = function handleOverlayInitialize(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var6 = var1.sessionId;
            var5 = var1.analyticsToken;
            var8 = var1.token;
            var7 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 21;
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
            if(!var14) { _fun0015_ip = 82; continue _fun0015 }
case 83:
            var9 = var7;
case 82:
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var7 = 22;
            var7 = var15[var7];
            var7 = var14.bind(var1)(var7);
            var16 = var7.bind(var1)(var2);
            var20 = var13;
            var19 = var11;
            var18 = var10;
            var17 = var9;
            var7 = var20[var12](var19, var18, var17, var16, var15);
            _closure1_slot24 = var6;
            _closure1_slot30 = var5;
            var7 = _closure1_slot49;
            var6 = var2.id;
            var6 = var7.bind(var1)(var8, var6);
            if(!(var4 != var5)) { _fun0015_ip = 84; continue _fun0015 }
case 12:
            var4 = _closure1_slot50;
            var4 = var4.bind(var1)(var5);
case 84:
            var4 = _closure1_slot48;
            var4 = var4.bind(var1)();
            var4 = var2.id;
            _closure1_slot23 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.Storage;
            var4 = var5.set;
            var3 = _closure1_slot22;
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var7['OVERLAY_INITIALIZE'] = var14;
    var14 = function handleConnectionClosed(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var5 = var1.code;
            var6 = _closure1_slot45;
            var3 = global;
            var1 = var3.HermesInternal;
            var7 = var1.concat;
            var4 = 'handleConnectionClosed called with code ';
            var1 = '.';
            var4 = var7.bind(var4)(var5, var1);
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = 4004;
            if(!(var4 === var5)) { _fun0016_ip = 85; continue _fun0016 }
case 51:
            var4 = _closure1_slot32;
            if(var4) { _fun0016_ip = 86; continue _fun0016 }
case 26:
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
            var8 = _closure1_slot22;
            var8 = var9.bind(var10)(var8);
            var4['user_id'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var4 = _closure1_slot55;
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
case 85:
            return var1;
case 86:
            var2 = _closure1_slot54;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var7['CONNECTION_CLOSED'] = var14;
    var14 = function handleAuthSessionChange(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var2 = var1.authSessionIdHash;
            var1 = null;
            if(!(var1 != var2)) { _fun0017_ip = 43; continue _fun0017 }
case 87:
            _closure1_slot25 = var2;
case 43:
            var1 = undefined;
            return var1;
        }
    };
    var7['AUTH_SESSION_CHANGE'] = var14;
    var14 = function handleLogin(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var4 = var1.isPasswordAttempt;
            var1 = _closure1_slot13;
            var1 = var1.LOGGING_IN;
            _closure1_slot31 = var1;
            var1 = _closure1_slot42;
            if(var1) { _fun0018_ip = 88; continue _fun0018 }
case 89:
            var3 = true;
            var1 = var3 === var4;
case 88:
            _closure1_slot42 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var7['LOGIN'] = var14;
    var14 = function handleLoginSuccess(arg1) {
        var1 = arg1;
        var4 = var1.token;
        var1 = _closure1_slot13;
        var1 = var1.NONE;
        _closure1_slot31 = var1;
        var2 = _closure1_slot49;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = _closure1_slot48;
        var2 = var2.bind(var1)();
        var2 = '';
        _closure1_slot34 = var2;
        var2 = false;
        _closure1_slot35 = var2;
        var4 = null;
        _closure1_slot36 = var4;
        var _closure1_slot18 = var4;
        var4 = _closure1_slot52;
        var4 = var4.bind(var1)();
        _closure1_slot41 = var2;
        return var1;
    };
    var7['LOGIN_SUCCESS'] = var14;
    var14 = function handleLoginFailure(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var6 = var1.error;
            var1 = '';
            _closure1_slot34 = var1;
            var1 = false;
            _closure1_slot35 = var1;
            var4 = null;
            _closure1_slot36 = var4;
            _closure1_slot18 = var4;
            var2 = _closure1_slot52;
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
            if(!(var4 == var2)) { _fun0019_ip = 9; continue _fun0019 }
case 28:
            var2 = _closure1_slot13;
            var2 = var2.NONE;
            _fun0019_ip = 90; continue _fun0019;
case 9:
            var4 = _closure1_slot13;
            var2 = var4.LOGIN_AGE_GATE;
case 90:
            _closure1_slot31 = var2;
            return var1;
        }
    };
    var7['LOGIN_FAILURE'] = var14;
    var14 = function handleLoginMFAStep(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var8 = var1.ticket;
            var7 = var1.sms;
            var6 = var1.webauthn;
            var4 = var1.backup;
            var3 = var1.totp;
            var2 = var1.loginInstanceId;
            var5 = null;
            if(!(var5 != var8)) { _fun0020_ip = 91; continue _fun0020 }
case 92:
            _closure1_slot34 = var8;
            _closure1_slot35 = var7;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0020_ip = 26; continue _fun0020 }
case 93:
            var5 = var6;
case 26:
            _closure1_slot36 = var5;
            _closure1_slot38 = var4;
            _closure1_slot37 = var3;
            _closure1_slot18 = var2;
            var2 = _closure1_slot52;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 91:
            var1 = _closure1_slot13;
            var1 = var1.MFA_STEP;
            _closure1_slot31 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var7['LOGIN_MFA_STEP'] = var14;
    var14 = function handleLoginMFA() {
        var1 = _closure1_slot13;
        var1 = var1.LOGGING_IN_MFA;
        _closure1_slot31 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_MFA'] = var14;
    var14 = function handleLoginAccountPendingDeletion(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.ACCOUNT_SCHEDULED_FOR_DELETION;
        _closure1_slot31 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        var _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION'] = var14;
    var14 = function handleLoginAccountDisabled(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.ACCOUNT_DISABLED;
        _closure1_slot31 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_ACCOUNT_DISABLED'] = var14;
    var14 = function handleLoginPasswordRecoveryPhoneVerification(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.PASSWORD_RECOVERY_PHONE_VERIFICATION;
        _closure1_slot31 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION'] = var14;
    var14 = function handleLoginPhoneIPAuthorizationRequired(arg1) {
        var1 = _closure1_slot13;
        var1 = var1.PHONE_IP_AUTHORIZATION;
        _closure1_slot31 = var1;
        var1 = arg1;
        var1 = var1.credentials;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED'] = var14;
    var14 = function handleLoginReset(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.isMultiAccount;
            var3 = _closure1_slot13;
            var3 = var3.NONE;
            _closure1_slot31 = var3;
            var3 = '';
            _closure1_slot34 = var3;
            var3 = false;
            _closure1_slot35 = var3;
            var4 = null;
            _closure1_slot36 = var4;
            _closure1_slot18 = var4;
            _closure1_slot17 = var4;
            if(var2) { _fun0021_ip = 94; continue _fun0021 }
case 95:
            var4 = _closure1_slot52;
            var2 = undefined;
            var4 = var4.bind(var2)();
            var4 = _closure1_slot51;
            var4 = var4.bind(var2)();
            var1 = _closure1_slot46;
            var1 = var1.bind(var2)(var3);
case 94:
            var1 = undefined;
            return var1;
        }
    };
    var7['LOGIN_RESET'] = var14;
    var14 = function handleLoginStatusReset() {
        var1 = _closure1_slot13;
        var1 = var1.NONE;
        _closure1_slot31 = var1;
        var1 = undefined;
        return var1;
    };
    var7['LOGIN_STATUS_RESET'] = var14;
    var14 = function handleSuspendedUserLogin(arg1) {
        var1 = arg1;
        var2 = var1.suspendedUserToken;
        var3 = false;
        _closure1_slot41 = var3;
        _closure1_slot40 = var2;
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
    var7['LOGIN_SUSPENDED_USER'] = var14;
    var7['LOGOUT'] = var13;
    var13 = function handleFingerprint(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var2 = var1.fingerprint;
            var4 = _closure1_slot27;
            var3 = null;
            if(!(var3 != var4)) { _fun0022_ip = 96; continue _fun0022 }
case 97:
            var4 = var3 != var2;
            if(!var4) { _fun0022_ip = 31; continue _fun0022 }
case 32:
            var5 = _closure1_slot27;
            var4 = var5 !== var2;
case 31:
            if(!var4) { _fun0022_ip = 98; continue _fun0022 }
case 35:
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
            var8 = 19;
            var12 = var11[var8];
            var14 = var9.bind(var10)(var12);
            var13 = var14.extractId;
            var12 = _closure1_slot27;
            var12 = var13.bind(var14)(var12);
            var4['fingerprint'] = var12;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.extractId;
            var8 = var8.bind(var9)(var2);
            var4['dropped_fingerprint'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            _fun0022_ip = 98; continue _fun0022;
case 96:
            if(!(var3 == var2)) { _fun0022_ip = 85; continue _fun0022 }
case 99:
            var5 = _closure1_slot46;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0022_ip = 98; continue _fun0022;
case 85:
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
            var5 = _closure1_slot28;
            var5 = var3 != var5;
            var3 = null;
            if(!var5) { _fun0022_ip = 100; continue _fun0022 }
case 101:
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var5 = 19;
            var5 = var11[var5];
            var11 = var10.bind(var4)(var5);
            var10 = var11.extractId;
            var5 = _closure1_slot28;
            var3 = var10.bind(var11)(var5);
case 100:
            var6['old_fingerprint'] = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var10 = 19;
            var10 = var5[var10];
            var11 = var3.bind(var4)(var10);
            var10 = var11.extractId;
            var10 = var10.bind(var11)(var2);
            var6['new_fingerprint'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            _closure1_slot27 = var2;
            _closure1_slot28 = var2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = _closure1_slot20;
            var1 = _closure1_slot27;
            var1 = var3.bind(var4)(var2, var1);
case 98:
            var1 = undefined;
            return var1;
        }
    };
    var7['FINGERPRINT'] = var13;
    var7['INSTALLATION_ID'] = var12;
    var12 = function handleRegisterSuccess(arg1) {
        var1 = arg1;
        var4 = var1.token;
        var3 = _closure1_slot49;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var2 = _closure1_slot48;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['REGISTER_SUCCESS'] = var12;
    var12 = function handleForgotPasswordRequest() {
        var1 = _closure1_slot13;
        var1 = var1.FORGOT_PASSWORD;
        _closure1_slot31 = var1;
        var1 = undefined;
        return var1;
    };
    var7['FORGOT_PASSWORD_REQUEST'] = var12;
    var12 = function handleForgotPasswordSent() {
        var1 = _closure1_slot13;
        var1 = var1.NONE;
        _closure1_slot31 = var1;
        var1 = undefined;
        return var1;
    };
    var7['FORGOT_PASSWORD_SENT'] = var12;
    var12 = function handleUpdateToken(arg1) {
        var1 = arg1;
        var5 = var1.token;
        var4 = var1.userId;
        var6 = _closure1_slot45;
        var1 = undefined;
        var3 = 'handleUpdateToken called';
        var3 = var6.bind(var1)(var3);
        var3 = _closure1_slot49;
        var3 = var3.bind(var1)(var5, var4);
        var2 = _closure1_slot48;
        var2 = var2.bind(var1)();
        return var1;
    };
    var7['UPDATE_TOKEN'] = var12;
    var7['EXPERIMENTS_FETCH'] = var11;
    var11 = function handleUserUpdate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var1 = var2.id;
            _closure1_slot23 = var1;
            var4 = var2.authenticator_types;
            var1 = undefined;
            if(!(var1 !== var4)) { _fun0023_ip = 48; continue _fun0023 }
case 32:
            var4 = var2.authenticator_types;
            _closure1_slot33 = var4;
case 48:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.Storage;
            var4 = var5.set;
            var3 = _closure1_slot22;
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var7['CURRENT_USER_UPDATE'] = var11;
    var7['AGE_GATE_LOGOUT_UNDERAGE_NEW_USER'] = var10;
    var10 = function handleSuspendedUserClosed() {
        var2 = null;
        _closure1_slot40 = var2;
        var2 = _closure1_slot13;
        var2 = var2.NONE;
        _closure1_slot31 = var2;
        var2 = _closure1_slot55;
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
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var6 = var1.error;
            var1 = '';
            _closure1_slot34 = var1;
            var1 = false;
            _closure1_slot35 = var1;
            var4 = null;
            _closure1_slot36 = var4;
            _closure1_slot41 = var1;
            _closure1_slot18 = var4;
            var5 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var6 instanceof var2;
            if(var2) { _fun0024_ip = 94; continue _fun0024 }
case 26:
            var2 = _closure1_slot13;
            var2 = var2.NONE;
            _closure1_slot31 = var2;
            _fun0024_ip = 102; continue _fun0024;
case 94:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 17;
            var2 = var7[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.getAuthenticationErrorsFromAPIError;
            var2 = var2.bind(var5)(var6);
            var2 = var2.date_of_birth;
            if(!(var4 == var2)) { _fun0024_ip = 103; continue _fun0024 }
case 104:
            var2 = _closure1_slot13;
            var2 = var2.NONE;
            _fun0024_ip = 105; continue _fun0024;
case 103:
            var4 = _closure1_slot13;
            var2 = var4.LOGIN_AGE_GATE;
case 105:
            _closure1_slot31 = var2;
case 102:
            return var1;
        }
    };
    var7['PASSWORDLESS_FAILURE'] = var10;
    var4 = function handlePasswordlessStart() {
        var1 = true;
        _closure1_slot41 = var1;
        var1 = undefined;
        return var1;
    };
    var7['PASSWORDLESS_START'] = var4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DispatchBand;
    var15 = var2.Early;
    var4 = var9.prototype;
    var4 = Object.create(var4, {constructor: {value: var9}});
    var18 = var4;
    var17 = var8;
    var16 = var7;
    var2 = new var18[var9](var17, var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/AuthenticationStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();