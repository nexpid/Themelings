// app/modules/quests/native/AppStoreOverlayTelemetryManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = null;
    var _closure1_slot8 = var4;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var7[var4];
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var4 = function AppStoreOverlayTelemetryManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot2;
                var2 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var3 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['APP_STATE_UPDATE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = 'handleAppStateUpdate';
        var5['key'] = var6;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var7 = var1.state;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var8 = undefined;
                var2 = var2.bind(var8)(var1);
                var1 = var2.isAndroid;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot8;
                var3 = null;
                var2 = var3 != var2;
                if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var9 = 7;
                var5 = var5[var9];
                var5 = var6.bind(var8)(var5);
                var5 = var5.AppStates;
                var5 = var5.ACTIVE;
                if(!(var7 === var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var5 = _closure1_slot9;
                if(!(var3 == var5)) { _fun0003_ip = 15; continue _fun0003 }
case 13:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var9];
                var5 = var6.bind(var8)(var5);
                var5 = var5.AppStates;
                var6 = var5.BACKGROUND;
                var2 = false;
                if(!(var7 === var6)) { _fun0003_ip = 11; continue _fun0003 }
case 16:
                var8 = _closure1_slot8;
                var7 = var8.trackOverlayEvent;
                var6 = _closure1_slot7;
                var6 = var6.QUEST_APP_STORE_OVERLAY_BACKGROUNDED;
                var6 = var7.bind(var8)(var6);
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                _closure1_slot9 = var6;
                var2 = false;
                _fun0003_ip = 11; continue _fun0003;
case 15:
                var8 = _closure1_slot8;
                var7 = var8.trackOverlayEvent;
                var5 = _closure1_slot7;
                var6 = var5.QUEST_APP_STORE_OVERLAY_RETURNED;
                var5 = global;
                var9 = var5.Date;
                var5 = var9.now;
                var9 = var5.bind(var9)();
                var5 = _closure1_slot9;
                var5 = var9 - var5;
                var5 = var7.bind(var8)(var6, var5);
                _closure1_slot9 = var3;
                var2 = false;
case 11:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/AppStoreOverlayTelemetryManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function setAppStoreOverlayOpen(arg1) {
        var1 = arg1;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setAppStoreOverlayOpen'] = var4;
    var2 = function clearAppStoreOverlayOpen() {
        var1 = null;
        _closure1_slot8 = var1;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var3['clearAppStoreOverlayOpen'] = var2;
    return var1;
})();