// app/modules/media_viewer/native/useVideoControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = undefined;
        var1['controls'] = var2;
        var2 = false;
        var1['paused'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var8 = var9.create;
    var5 = {};
    var10 = {};
    var11 = 8;
    var10['marginBottom'] = var11;
    var5['slider'] = var10;
    var10 = {'width': 24, 'height': 24};
    var5['playToggleIcon'] = var10;
    var10 = {'width': 64, 'height': 64, 'backgroundColor': 'rgba(0, 0, 0, 0.8)', 'borderRadius': 32, 'alignItems': 'center', 'justifyContent': 'center'};
    var5['playToggleButton'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_viewer/native/useVideoControls.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useVideoControls(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var6 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var9;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 8;
            var2 = var1[var2];
            var5 = undefined;
            var11 = var4.bind(var5)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var16 = var8.bind(var11)(var7, var2);
            var _closure2_slot2 = var16;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var2 = false;
            var8 = var7.bind(var8)(var2);
            var7 = _closure1_slot3;
            var2 = 2;
            var7 = var7.bind(var5)(var8, var2);
            var2 = 0;
            var8 = var7[var2];
            var2 = 1;
            var7 = var7[var2];
            var _closure2_slot3 = var7;
            var2 = 9;
            var2 = var1[var2];
            var2 = var4.bind(var5)(var2);
            var11 = var2.MediaViewerSourcesStore;
            var4 = var11.useState;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.spoilerIndexes;
                var2 = var3.has;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var4.bind(var11)(var2);
            var _closure2_slot4 = var14;
            var2 = _closure1_slot1;
            var13 = 10;
            var1 = var1[var13];
            var1 = var2.bind(var5)(var1);
            var4 = var1.bind(var5)(var12);
            var _closure2_slot5 = var4;
            var11 = null;
            var1 = var11 != var9;
            if(!var1) { _fun0001_ip = 224; continue _fun0001 }
 193:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 11;
            var2 = var17[var2];
            var15 = var15.bind(var5)(var2);
            var2 = var15.supportOverlayVideoControls;
            var1 = var2.bind(var15)(var6);
 224:
            var2 = var6.portal;
            if(!(var11 == var2)) { _fun0001_ip = 240; continue _fun0001 }
 234:
            var2 = var6.videoURI;
 240:
            var _closure2_slot6 = var2;
            var11 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var13];
            var6 = var11.bind(var5)(var6);
            var15 = var6.bind(var5)(var2);
            var _closure2_slot7 = var15;
            var11 = _closure1_slot4;
            var13 = var11.useEffect;
            var6 = new Array(7);
            var6[0] = var9;
            var6[1] = var2;
            var6[2] = var16;
            var6[3] = var15;
            var6[4] = var14;
            var6[5] = var4;
            var6[6] = var12;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot0;
                    if(!(var3 !== var2)) { _fun0002_ip = 99; continue _fun0002 }
 15:
                    var2 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 99; continue _fun0002 }
 25:
                    var2 = _closure2_slot6;
                    if(!(var3 != var2)) { _fun0002_ip = 99; continue _fun0002 }
 33:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot6;
                    if(!(var3 !== var2)) { _fun0002_ip = 99; continue _fun0002 }
 45:
                    var4 = _closure2_slot1;
                    var3 = var4.seek;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot4;
                    if(var3) { _fun0002_ip = 73; continue _fun0002 }
 69:
                    var3 = _closure2_slot2;
 73:
                    var4 = _closure2_slot1;
                    var2 = var4.pause;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var13.bind(var11)(var4, var6);
            var6 = var11.useCallback;
            var4 = new Array(1);
            var4[0] = var12;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.removeSpoiler;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var6.bind(var11)(var3, var4);
            var4 = var2;
            if(var1) { _fun0001_ip = 354; continue _fun0001 }
 352:
            return var5;
 354:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 12;
            var1 = var11[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var10 = _closure1_slot8;
            var10 = var10.slider;
            var1['style'] = var10;
            var1['controls'] = var9;
            var1['paused'] = var8;
            var1['setPaused'] = var7;
            var1['onPlayPress'] = var6;
            var1 = var3.bind(var5)(var2, var1, var4);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['useVideoStateStore'] = var4;
    var4 = function initVideoStateStore() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var4 = _closure1_slot7;
            var3 = var4.setState;
            var2 = {};
            var1 = undefined;
            var2['controls'] = var1;
            var5 = false;
            var2['paused'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['initVideoStateStore'] = var4;
    var4 = function setMuted(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.useMediaPlayerMutedStore;
            var3 = var4.setState;
            var2 = {};
            var5 = _closure2_slot0;
            var2['isMuted'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setMuted'] = var4;
    var4 = function toggleMuted() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.useMediaPlayerMutedStore;
            var3 = var4.setState;
            var2 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var2 = var2.isMuted;
                var2 = !var2;
                var1['isMuted'] = var2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['toggleMuted'] = var4;
    var4 = function setVideoStateControls(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['controls'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setVideoStateControls'] = var4;
    var4 = function setPausedState(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['paused'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPausedState'] = var4;
    var4 = function tryPauseCurrentVideo() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot7;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var3 = var1.controls;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 42; continue _fun0003 }
 29:
            var2 = var3.pause;
            var1 = true;
            var1 = var2.bind(var3)(var1);
 42:
            var1 = undefined;
            return var1;
        }
    };
    var3['tryPauseCurrentVideo'] = var4;
    var2 = function unpauseCurrentVideoIfNeeded() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot7;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.paused;
            var1 = undefined;
            var4 = undefined;
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
 30:
            var5 = _closure1_slot7;
            var3 = var5.getState;
            var3 = var3.bind(var5)();
            var3 = var3.controls;
            var5 = null;
            var2 = var5 == var3;
            var4 = var3;
 59:
            if(var2) { _fun0004_ip = 75; continue _fun0004 }
 62:
            var3 = var4.pause;
            var2 = false;
            var2 = var3.bind(var4)(var2);
 75:
            return var1;
        }
    };
    var3['unpauseCurrentVideoIfNeeded'] = var2;
    return var1;
})();