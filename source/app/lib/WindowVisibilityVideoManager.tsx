// app/lib/WindowVisibilityVideoManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = 'window-visibility-changed';
    var4['WindowVisibilityChanged'] = var5;
    var5 = 'incoming-video-enabled-changed';
    var4['IncomingVideoEnabledChanged'] = var5;
    var _closure1_slot8 = var4;
    var5 = 11;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var2 = function(arg1) {
        var4 = function WindowVisibilityVideoManager() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot3;
                var5 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var6, var5);
                var1 = _closure1_slot6;
                var11 = var1.bind(var4)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var4)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 8:
                var1 = var5.bind(var4)(var6, var1);
                var _closure3_slot0 = var1;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 5;
                var6 = var5[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.Timeout;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var15 = var7;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['disableVideoTimer'] = var6;
                var6 = true;
                var1['discordVisible'] = var6;
                var1['incomingVideoEnabled'] = var6;
                var6 = global;
                var7 = var6.performance;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var1['lastEnabledChange'] = var6;
                var3 = _closure1_slot1;
                var6 = 6;
                var6 = var5[var6];
                var8 = var3.bind(var4)(var6);
                var6 = var8.prototype;
                var7 = Object.create(var6, {constructor: {value: var8}});
                var14 = 'WindowVisibilityVideoManager';
                var15 = var7;
                var6 = new var15[var8](var14, var13);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['logger'] = var6;
                var6 = 7;
                var6 = var5[var6];
                var6 = var3.bind(var4)(var6);
                var6 = var6.Millis;
                var7 = var6.SECOND;
                var6 = 30;
                var6 = var6 * var7;
                var1['HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS'] = var6;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var5 = var1.discordVisible;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var7 = 8;
                        var2 = var1[var7];
                        var1 = undefined;
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.bind(var1)();
                        if(!(var5 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = _closure3_slot0;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.bind(var1)();
                        var2['discordVisible'] = var5;
                        var6 = var2.emit;
                        var4 = _closure1_slot8;
                        var5 = var4.WindowVisibilityChanged;
                        var4 = var2.discordVisible;
                        var4 = var6.bind(var2)(var5, var4);
                        var2 = var2.discordVisible;
                        var4 = _closure3_slot0;
                        var3 = var4.disableVideoTimer;
                        if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var6 = var3.start;
                        var5 = var4.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS;
                        var2 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.setIncomingVideoEnabled;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var6.bind(var3)(var5, var2);
                        _fun0003_ip = 9; continue _fun0003;
case 11:
                        var2 = var3.stop;
                        var2 = var2.bind(var3)();
                        var3 = var4.setIncomingVideoEnabled;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
case 9:
                        return var1;
                    }
                };
                var1['update'] = var2;
                var2 = 9;
                var6 = var5[var2];
                var9 = var3.bind(var4)(var6);
                var8 = var9.subscribe;
                var7 = var1.update;
                var6 = 'WINDOW_VISIBILITY_CHANGE';
                var6 = var8.bind(var9)(var6, var7);
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.subscribe;
                var6 = var1.update;
                var2 = 'APP_STATE_UPDATE';
                var2 = var7.bind(var8)(var2, var6);
                var2 = 10;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.addOnPipModeChangedListener;
                var2 = var1.update;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isIncomingVideoEnabled';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var1 = var1.incomingVideoEnabled;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'lastIncomingVideoEnabledChangeTime';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.lastEnabledChange;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'setIncomingVideoEnabled';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = var4.incomingVideoEnabled;
                var4['incomingVideoEnabled'] = var2;
                if(!(var1 !== var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var5 = var4.logger;
                var3 = var5.info;
                var7 = var4.incomingVideoEnabled;
                var1 = global;
                var2 = var1.HermesInternal;
                var6 = var2.concat;
                var2 = 'Incoming video enabled changed, incomingVideoEnabled = ';
                var2 = var6.bind(var2)(var7);
                var2 = var3.bind(var5)(var2);
                var2 = var1.performance;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                var4['lastEnabledChange'] = var1;
                var3 = var4.emit;
                var1 = _closure1_slot8;
                var2 = var1.IncomingVideoEnabledChanged;
                var1 = var4.incomingVideoEnabled;
                var1 = var3.bind(var4)(var2, var1);
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var5 = var2.prototype;
    var5 = Object.create(var5, {constructor: {value: var2}});
    var13 = var5;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/WindowVisibilityVideoManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['WindowVisibilityEvent'] = var4;
    var3['WindowVisibilityVideoManager'] = var2;
    return var1;
})();