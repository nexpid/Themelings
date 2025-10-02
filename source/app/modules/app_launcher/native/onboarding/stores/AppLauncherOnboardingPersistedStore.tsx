// app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var7 = {'canShowBotsBanner': false, 'canShowAppsOrActivitiesBanner': false, 'willShowGlobalSearchOnboarding': false, 'timeMs': 0, 'channelId': '0'};
    var _closure1_slot5 = var7;
    var2 = {};
    var8 = null;
    var2['lastSeenTimeMs'] = var8;
    var2['triggeredOnboardingContentMetadata'] = var7;
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function AppLauncherOnboardingPersistedStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot6;
                var3 = var1.lastSeenTimeMs;
                var2['lastSeenTimeMs'] = var3;
                var1 = var1.triggeredOnboardingContentMetadata;
                var2['triggeredOnboardingContentMetadata'] = var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getLastSeenTimeMs';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            var1 = var1.lastSeenTimeMs;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getTriggeredOnboardingContentMetadata';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot6;
            var1 = var1.triggeredOnboardingContentMetadata;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'AppLauncherOnboardingPersistedStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = new Array(1);
    var8 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var4 = null;
            var2 = var4 == var5;
            var3 = undefined;
            if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var3 = var5.lastSeenTimeMs;
case 11:
            var6 = var4 != var3;
            var2 = null;
            if(!var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var2 = var3;
case 13:
            var1['lastSeenTimeMs'] = var2;
            var2 = {};
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var6 = var5.triggeredOnboardingContentMetadata;
            var8 = var4 == var6;
            var3 = undefined;
            if(var8) { _fun0004_ip = 15; continue _fun0004 }
case 17:
            var3 = var6.canShowBotsBanner;
case 15:
            if(!(var4 == var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var6 = _closure1_slot5;
            var3 = var6.canShowBotsBanner;
case 18:
            var2['canShowBotsBanner'] = var3;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var6 = var5.triggeredOnboardingContentMetadata;
            var8 = var4 == var6;
            var3 = undefined;
            if(var8) { _fun0004_ip = 20; continue _fun0004 }
case 22:
            var3 = var6.canShowAppsOrActivitiesBanner;
case 20:
            if(!(var4 == var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var6 = _closure1_slot5;
            var3 = var6.canShowAppsOrActivitiesBanner;
case 23:
            var2['canShowAppsOrActivitiesBanner'] = var3;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var6 = var5.triggeredOnboardingContentMetadata;
            var8 = var4 == var6;
            var3 = undefined;
            if(var8) { _fun0004_ip = 25; continue _fun0004 }
case 27:
            var3 = var6.willShowGlobalSearchOnboarding;
case 25:
            if(!(var4 == var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var6 = _closure1_slot5;
            var3 = var6.willShowGlobalSearchOnboarding;
case 28:
            var2['willShowGlobalSearchOnboarding'] = var3;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var6 = var5.triggeredOnboardingContentMetadata;
            var8 = var4 == var6;
            var3 = undefined;
            if(var8) { _fun0004_ip = 30; continue _fun0004 }
case 32:
            var3 = var6.timeMs;
case 30:
            if(!(var4 == var3)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var6 = _closure1_slot5;
            var3 = var6.timeMs;
case 33:
            var2['timeMs'] = var3;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var5 = var5.triggeredOnboardingContentMetadata;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 35; continue _fun0004 }
case 37:
            var3 = var5.channelId;
case 35:
            if(!(var4 == var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = _closure1_slot5;
            var3 = var4.channelId;
case 38:
            var2['channelId'] = var3;
            var1['triggeredOnboardingContentMetadata'] = var2;
            return var1;
        }
    };
    var2[0] = var8;
    var7['migrations'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleSetLastSeenTimeMs() {
        var2 = _closure1_slot6;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var2['lastSeenTimeMs'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS'] = var8;
    var4 = function handleSetTriggeredOnboardingContentMetadata(arg1) {
        var1 = arg1;
        var2 = var1.triggeredOnboardingContentMetadata;
        var1 = _closure1_slot6;
        var1['triggeredOnboardingContentMetadata'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();