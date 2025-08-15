// app/modules/game_detection/RunningGameStore.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function RunningGameStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(25);
        var1[0] = var5;
        var5 = {};
        var7 = 'getVisibleGame';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentGameForAnalytics';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getVisibleRunningGames';
        var5['key'] = var7;
        var7 = function value() {
            var1 = new Array(0);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getRunningGames';
        var5['key'] = var7;
        var7 = function value() {
            var1 = new Array(0);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRunningDiscordApplicationIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = new Array(0);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getRunningVerifiedApplicationIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = new Array(0);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getGameForPID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getGameOrTransformedSubgameForPID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getLauncherForPID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getOverlayOptionsForPID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'shouldElevateProcessForPID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'shouldContinueWithoutElevatedProcessForPID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getCandidateGames';
        var5['key'] = var7;
        var7 = function value() {
            var1 = new Array(0);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getGamesSeen';
        var5['key'] = var7;
        var7 = function value() {
            var1 = new Array(0);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getSeenGameByName';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'isObservedAppRunning';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getOverlayEnabledForGame';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getOverrides';
        var5['key'] = var7;
        var7 = function value() {
            var1 = new Array(0);
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getOverrideForGame';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getGameOverlayStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getObservedAppNameForWindow';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'canShowAdminWarning';
        var5['key'] = var7;
        var7 = function get() {
            var1 = false;
            return var1;
        };
        var5['get'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'isDetectionEnabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'addExecutableTrackedByAnalytics';
        var5['key'] = var7;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[24] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var8);
    var4 = 'RunningGameStore';
    var9['displayName'] = var4;
    var4 = 9;
    var4 = var7[var4];
    var12 = var5.bind(var1)(var4);
    var4 = var9.prototype;
    var5 = Object.create(var4, {constructor: {value: var9}});
    var11 = {};
    var13 = var5;
    var4 = new var13[var9](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_detection/RunningGameStore.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function gameKey() {
        var1 = '';
        return var1;
    };
    var3['gameKey'] = var4;
    var4 = function getRawOverlayGameStatus() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0003_ip = 32; continue _fun0003 }
 9:
            var3 = _closure1_slot7;
            var2 = new Array(2);
            var2[0] = var3;
            var1 = _closure1_slot8;
            var2[1] = var1;
 32:
            var1 = {'source': null, 'enabledOOP': false, 'enabledLegacy': false};
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 7;
            var6 = var5[var2];
            var6 = var3.bind(var4)(var6);
            var6 = var6.OverlayGameStatusSource;
            var6 = var6.UNKNOWN;
            var1['source'] = var6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.OverlayMethod;
            var2 = var2.Disabled;
            var1['overlayMethod'] = var2;
            return var1;
        }
    };
    var3['getRawOverlayGameStatus'] = var4;
    var4 = function isDetectionEnabled() {
        var1 = false;
        return var1;
    };
    var3['isDetectionEnabled'] = var4;
    var4 = function maybeTransformSubgame(arg1) {
        var1 = arg1;
        return var1;
    };
    var3['maybeTransformSubgame'] = var4;
    var2 = function transformForGameSettings(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = '';
        var2 = 'played';
        var1[var2] = var3;
        var3 = false;
        var2 = 'overlay';
        var1[var2] = var3;
        var2 = 'verified';
        var1[var2] = var3;
        var2 = 'detectable';
        var1[var2] = var3;
        return var1;
    };
    var3['transformForGameSettings'] = var2;
    return var1;
})();