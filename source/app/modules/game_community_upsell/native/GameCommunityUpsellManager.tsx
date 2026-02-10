// app/modules/game_community_upsell/native/GameCommunityUpsellManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Consents;
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function GameCommunityUpsellManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var4 = _closure2_slot1;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = false;
                var1['hasChecked'] = var4;
                var4 = null;
                var1['timeout'] = var4;
                var4 = {};
                var5 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.scheduleGameDetection;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['POST_CONNECTION_OPEN'] = var5;
                var5 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['LOGOUT'] = var5;
                var1['actions'] = var4;
                var4 = global;
                var4 = var4.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var15 = var5;
                var4 = new var15[var4](var14);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = var5.set;
                var3 = _closure1_slot8;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.scheduleGameDetection;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var1['stores'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'handleLogout';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = false;
                var2['hasChecked'] = var1;
                var3 = var2.timeout;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.timeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['timeout'] = var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var8 = 'scheduleGameDetection';
        var5['key'] = var8;
        var8 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 10;
                var5 = var1[var7];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var8 = var5.debugLogger;
                var6 = var8.log;
                var5 = 'scheduleGameDetection called';
                var5 = var6.bind(var8)(var5);
                var6 = _closure1_slot10;
                var5 = var6.isDebugMode;
                var5 = var5.bind(var6)();
                if(var5) { _fun0004_ip = 11; continue _fun0004 }
case 5:
                var5 = var3.hasChecked;
                if(!var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var8 = var5.debugLogger;
                var6 = var8.log;
                var5 = 'Already checked, skipping (debugMode: false)';
                var5 = var6.bind(var8)(var5);
                _fun0004_ip = 13; continue _fun0004;
case 11:
                var5 = _closure1_slot8;
                var5 = var5.hasLoadedExperiments;
                if(var5) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var8 = var5.debugLogger;
                var6 = var8.log;
                var5 = 'Experiments not loaded yet, skipping';
                var5 = var6.bind(var8)(var5);
                _fun0004_ip = 13; continue _fun0004;
case 14:
                var8 = _closure1_slot9;
                var6 = var8.hasConsented;
                var5 = _closure1_slot11;
                var5 = var5.PERSONALIZATION;
                var5 = var6.bind(var8)(var5);
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                if(var5) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var5 = var6[var7];
                var5 = var8.bind(var1)(var5);
                var10 = var5.debugLogger;
                var9 = var10.log;
                var5 = 'No personalization consent, skipping';
                var5 = var9.bind(var10)(var5);
                _fun0004_ip = 13; continue _fun0004;
case 16:
                var5 = 11;
                var5 = var6[var5];
                var5 = var8.bind(var1)(var5);
                var10 = var5.GameCommunityUpsellExperiment;
                var9 = var10.getConfig;
                var5 = {};
                var11 = 'GameCommunityUpsellManager';
                var5['location'] = var11;
                var5 = var9.bind(var10)(var5);
                var6 = var6[var7];
                var6 = var8.bind(var1)(var6);
                var9 = var6.debugLogger;
                var8 = var9.log;
                var6 = 'Experiment config:';
                var6 = var8.bind(var9)(var6, var5);
                var8 = _closure1_slot10;
                var6 = var8.isDebugMode;
                var6 = var6.bind(var8)();
                if(var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var5 = var5.enabled;
                if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 20:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var8 = var5.debugLogger;
                var6 = var8.log;
                var5 = 'Not in experiment, skipping';
                var5 = var6.bind(var8)(var5);
                _fun0004_ip = 13; continue _fun0004;
case 18:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var7 = var5[var7];
                var7 = var6.bind(var1)(var7);
                var9 = var7.debugLogger;
                var8 = var9.log;
                var7 = 12;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var12 = var5.DETECTION_DELAY_MS;
                var5 = global;
                var6 = var5.HermesInternal;
                var11 = var6.concat;
                var10 = 'Scheduling detection in ';
                var6 = 'ms';
                var6 = var11.bind(var10)(var12, var6);
                var6 = var8.bind(var9)(var6);
                var8 = var3.timeout;
                var6 = null;
                if(!(var6 != var8)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var9 = var5.clearTimeout;
                var8 = var3.timeout;
                var8 = var9.bind(var1)(var8);
                var3['timeout'] = var6;
case 21:
                var5 = var5.setTimeout;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var1)(var4);
                var4 = var4.DETECTION_DELAY_MS;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.detectAndShowUpsell;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['timeout'] = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'forceShowUpsell';
        var5['key'] = var8;
        var8 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var3 = var2.timeout;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.timeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['timeout'] = var1;
case 23:
                var1 = false;
                var2['hasChecked'] = var1;
                var1 = var2.detectAndShowUpsell;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'detectAndShowUpsell';
        var5['key'] = var8;
        var8 = _closure1_slot2;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var2 = undefined;
                    var7 = undefined;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var5 = 10;
                    var4 = var4[var5];
                    var4 = var6.bind(var2)(var4);
                    var8 = var4.debugLogger;
                    var6 = var8.log;
                    var4 = 'detectAndShowUpsell called';
                    var4 = var6.bind(var8)(var4);
case 27: // try_start_0
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 13;
                    var4 = var8[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.getTopPriorityGame;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=94);
case 28:
                    return var4;
case 29:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var7 = var4;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var5];
                    var6 = var8.bind(var2)(var6);
                    var9 = var6.debugLogger;
                    var8 = var9.log;
                    var6 = 'Top priority game:';
                    var6 = var8.bind(var9)(var6, var4);
                    var6 = null;
                    if(!(var6 == var4)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var5];
                    var6 = var8.bind(var2)(var6);
                    var9 = var6.debugLogger;
                    var8 = var9.log;
                    var6 = 'No game detected';
                    var6 = var8.bind(var9)(var6);
                    _fun0006_ip = 34; continue _fun0006;
case 32:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = var10[var5];
                    var6 = var9.bind(var2)(var6);
                    var13 = var6.debugLogger;
                    var12 = var13.log;
                    var6 = var7;
                    var11 = var6.guildId;
                    var8 = 'Fetching guild data for:';
                    var8 = var12.bind(var13)(var8, var11);
                    var8 = 14;
                    var8 = var10[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.fetchGuildForPopout;
                    var6 = var6.guildId;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=279);
case 35:
                    return var6;
case 36:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var5];
                    var8 = var9.bind(var2)(var8);
                    var10 = var8.debugLogger;
                    var9 = var10.log;
                    var8 = 'Setting current game in store';
                    var8 = var9.bind(var10)(var8);
                    var9 = _closure1_slot10;
                    var8 = var9.setCurrentGame;
                    var7 = var8.bind(var9)(var7);
                    var8 = true;
                    var7 = this;
                    var7['hasChecked'] = var8;
case 34: // try_end0
                    _fun0006_ip = 39; continue _fun0006;
case 37:
                    return var6;
case 30:
                    return var4;
case 40: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var5];
                    var3 = var4.bind(var2)(var3);
                    var5 = var3.debugLogger;
                    var4 = var5.error;
                    var3 = 'Error in detectAndShowUpsell:';
                    var3 = var4.bind(var5)(var3, var6);
case 39:
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function detectAndShowUpsell() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/GameCommunityUpsellManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();