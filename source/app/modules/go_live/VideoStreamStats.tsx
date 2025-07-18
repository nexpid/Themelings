// app/modules/go_live/VideoStreamStats.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function round(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = arguments[1];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var1 = 0;
 14:
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 38; continue _fun0001 }
 20:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.round;
            var1 = var2.bind(var3)(var4);
 38:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamLayouts;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function VideoStreamStats(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot2;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = 0;
            var3['_targetResolution'] = var5;
            var3['_targetFPS'] = var5;
            var6 = false;
            var3['_streamSettingsChanged'] = var6;
            var3['_lastLayoutChanged'] = var5;
            var3['_layoutChanges'] = var5;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var2 = var2._layoutBuckets;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 == var4)) { _fun0002_ip = 42; continue _fun0002 }
 26:
                    var2 = _closure3_slot0;
                    var4 = var2._layoutBuckets;
                    var2 = 0;
                    var4[var3] = var2;
 42:
                    var1 = _closure3_slot0;
                    var2 = var1._layoutBuckets;
                    var4 = var2[var3];
                    var1 = arg2;
                    var1 = var4 + var1;
                    var2[var3] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var3['_incrementLayout'] = var5;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var5 = var1.resolution;
                    var4 = var1.fps;
                    var2 = _closure3_slot0;
                    var1 = var2._targetResolution;
                    var1 = var5 !== var1;
                    if(var1) { _fun0003_ip = 63; continue _fun0003 }
 49:
                    var3 = _closure3_slot0;
                    var3 = var3._targetFPS;
                    var1 = var4 !== var3;
 63:
                    var2['_streamSettingsChanged'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var3['_sampleStats'] = var4;
            var4 = arg2;
            var3['_isSender'] = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.Interval;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_statInterval'] = var2;
            var2 = arg1;
            var3['_lastLayout'] = var2;
            var2 = {};
            var3['_layoutBuckets'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var4 = _closure1_slot4;
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var4 = var2.resolution;
            var2 = var2.fps;
            var3['_targetResolution'] = var4;
            var3['_targetFPS'] = var2;
            var6 = var3._statInterval;
            var5 = var6.start;
            var4 = var3._sampleStats;
            var2 = 1000;
            var2 = var5.bind(var6)(var2, var4);
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['_lastLayoutChanged'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            var5 = this;
            var2 = var5._statInterval;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.now;
            var2 = var2.bind(var3)();
            var5['_streamEnd'] = var2;
            var4 = var5._incrementLayout;
            var3 = var5._lastLayout;
            var6 = var5._streamEnd;
            var2 = var5._lastLayoutChanged;
            var6 = var6 - var2;
            var2 = 1000;
            var2 = var6 / var2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'layoutChange';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var1 = var2._lastLayout;
                if(!(var3 !== var1)) { _fun0004_ip = 127; continue _fun0004 }
 16:
                var4 = var2._streamEnd;
                var1 = null;
                if(!(var1 == var4)) { _fun0004_ip = 127; continue _fun0004 }
 28:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var6 = var2._incrementLayout;
                var5 = var2._lastLayout;
                var4 = var2._lastLayoutChanged;
                var7 = var1 - var4;
                var4 = 1000;
                var4 = var7 / var4;
                var4 = var6.bind(var2)(var5, var4);
                var4 = var2._layoutChanges;
                var4 = var4 + 1;
                var2['_layoutChanges'] = var4;
                var2['_lastLayout'] = var3;
                var2['_lastLayoutChanged'] = var1;
 127:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getLayout';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1._lastLayout;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getStats';
        var1['key'] = var6;
        var5 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = this;
                var4 = {};
                var1 = var3._layoutChanges;
                var4['num_layout_changes'] = var1;
                var5 = _closure1_slot6;
                var6 = var3._layoutBuckets;
                var1 = _closure1_slot5;
                var2 = var1.FULL_SCREEN;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var6);
                var4['duration_layout_fullscreen'] = var6;
                var7 = var3._layoutBuckets;
                var6 = var1.THEATRE;
                var6 = var7[var6];
                var6 = var5.bind(var2)(var6);
                var4['duration_layout_theatre'] = var6;
                var7 = var3._layoutBuckets;
                var6 = var1.PIP;
                var6 = var7[var6];
                var6 = var5.bind(var2)(var6);
                var4['duration_layout_pip'] = var6;
                var7 = var3._layoutBuckets;
                var6 = var1.POPOUT;
                var6 = var7[var6];
                var6 = var5.bind(var2)(var6);
                var4['duration_layout_popout'] = var6;
                var7 = var3._layoutBuckets;
                var6 = var1.PORTRAIT;
                var6 = var7[var6];
                var6 = var5.bind(var2)(var6);
                var4['duration_layout_portrait'] = var6;
                var7 = var3._layoutBuckets;
                var6 = var1.LANDSCAPE;
                var6 = var7[var6];
                var6 = var5.bind(var2)(var6);
                var4['duration_layout_landscape'] = var6;
                var6 = var3._layoutBuckets;
                var1 = var1.MINIMIZED;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var4['duration_layout_minimized'] = var1;
                var2 = var3._isSender;
                var1 = var4;
                if(!var2) { _fun0005_ip = 305; continue _fun0005 }
 239:
                var2 = {};
                var9 = var2;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                var5 = var3._targetFPS;
                var4 = 'target_fps';
                var2[var4] = var5;
                var5 = var3._targetResolution;
                var4 = 'target_resolution_height';
                var2[var4] = var5;
                var4 = var3._streamSettingsChanged;
                var3 = 'stream_settings_changed';
                var2[var3] = var4;
                var1 = var2;
 305:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/VideoStreamStats.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();