// app/modules/potions/components/native/MessageConfettiCanvas.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.StyleSheet;
    var _closure1_slot6 = var8;
    var4 = var4.TurboModuleRegistry;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = function MessageConfettiCanvas() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var9 = {};
            var2 = var1.width;
            var9['w'] = var2;
            var1 = var1.height;
            var9['h'] = var1;
            var1 = 6;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var10 = var1.bind(var5)(var9);
            var _closure2_slot0 = var10;
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var1 = false;
            var11 = var2.bind(var7)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var11 = var2.bind(var5)(var11, var1);
            var1 = 0;
            var2 = var11[var1];
            var _closure2_slot1 = var2;
            var1 = 1;
            var1 = var11[var1];
            var _closure2_slot2 = var1;
            var1 = 7;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var4 = var7.useEffect;
            var1 = var10.playing;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var2;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var2 = var2.playing;
                    if(!var2) { _fun0002_ip = 23; continue _fun0002 }
 16:
                    var3 = _closure2_slot1;
                    var2 = !var3;
 23:
                    if(!var2) { _fun0002_ip = 39; continue _fun0002 }
 26:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var4 = var7.useMemo;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isAndroid;
                    var2 = var1.bind(var2)();
                    var1 = 16.666666666666668;
                    if(!var2) { _fun0003_ip = 57; continue _fun0003 }
 47:
                    var1 = 33.333333333333336;
 57:
                    return var1;
                }
            };
            var1 = new Array(0);
            var11 = var4.bind(var7)(var3, var1);
            var1 = null;
            if(!var2) { _fun0001_ip = 374; continue _fun0001 }
 204:
            var4 = _closure1_slot9;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = {};
            var12 = _closure1_slot6;
            var14 = var12.absoluteFillObject;
            var15 = var7;
            var12 = copyDataProperties(var15, var14);
            var13 = 'none';
            var12 = 'pointerEvents';
            var7[var12] = var13;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 9;
            var6 = var12[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.AnimatedDiscordCanvasComponent;
            var6 = {};
            var12 = var10.playing;
            var6['playing'] = var12;
            var6['size'] = var9;
            var9 = {};
            var12 = var10.tickRate;
            var9['minInterval'] = var12;
            var9['allowableMinInterval'] = var11;
            var11 = 10;
            var9['droppedFramesCallbackThreshold'] = var11;
            var11 = 2000;
            var9['droppedFramesResetTime'] = var11;
            var10 = var10.improvePerformance;
            var9['droppedFramesCallback'] = var10;
            var6['useClockOptions'] = var9;
            var8 = function drawCallback(arg1, arg2) {
                var3 = _closure2_slot0;
                var2 = var3.update;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var2 = var3.draw;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var6['drawCallback'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 374:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/potions/components/native/MessageConfettiCanvas.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var6 = undefined;
            var7 = var2.bind(var6)(var1);
            var4 = var7.useShouldMountConfettiCanvas;
            var1 = 'ConfettiCanvasComponent';
            var4 = var4.bind(var7)(var1);
            var1 = 11;
            var1 = var5[var1];
            var7 = var2.bind(var6)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var2 = var1.lastConfetti;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var5 = var5.bind(var7)(var2, var1);
            var2 = null;
            var1 = null;
            if(!var5) { _fun0004_ip = 146; continue _fun0004 }
 93:
            var1 = null;
            if(!var4) { _fun0004_ip = 146; continue _fun0004 }
 98:
            var7 = _closure1_slot7;
            var5 = var7.get;
            var4 = 'RNSkiaModule';
            var4 = var5.bind(var7)(var4);
            var4 = var2 == var4;
            var2 = null;
            if(var4) { _fun0004_ip = 143; continue _fun0004 }
 127:
            var5 = _closure1_slot9;
            var4 = _closure1_slot10;
            var3 = {};
            var2 = var5.bind(var6)(var4, var3);
 143:
            var1 = var2;
 146:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();