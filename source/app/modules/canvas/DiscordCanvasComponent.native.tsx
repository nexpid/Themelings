// app/modules/canvas/DiscordCanvasComponent.native.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 16.666666666666668;
    var4['minInterval'] = var7;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/canvas/DiscordCanvasComponent.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function _default(arg1) {
        var1 = arg1;
        var1 = var1.drawCallback;
        var1 = null;
        return var1;
    };
    var3['default'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.drawCallback;
            var _closure2_slot0 = var9;
            var7 = var1.size;
            var _closure2_slot1 = var7;
            var10 = var1.fps;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 39; continue _fun0001 }
 36:
            var10 = 60;
 39:
            var _closure2_slot2 = var10;
            var15 = var1.playing;
            if(!(var15 === var4)) { _fun0001_ip = 55; continue _fun0001 }
 53:
            var15 = true;
 55:
            var _closure2_slot3 = var15;
            var3 = var1.useClockOptions;
            if(!(var3 === var4)) { _fun0001_ip = 71; continue _fun0001 }
 69:
            var3 = {};
 71:
            var _closure2_slot4 = var3;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var6 = _closure1_slot4;
            var8 = var6.useMemo;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var3;
            var3 = function() {
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = {};
                var6 = _closure2_slot2;
                var2 = 1000;
                var2 = var2 / var6;
                var3['minInterval'] = var2;
                var2 = _closure1_slot6;
                var1 = _closure2_slot4;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var12 = var8.bind(var6)(var3, var5);
            var5 = var6.useRef;
            var3 = null;
            var3 = var5.bind(var6)(var3);
            _closure2_slot5 = var3;
            var3 = var6.useState;
            var5 = 0;
            var10 = var3.bind(var6)(var5);
            var8 = _closure1_slot3;
            var3 = 2;
            var3 = var8.bind(var4)(var10, var3);
            var11 = var3[var5];
            _closure2_slot6 = var11;
            var10 = 1;
            var3 = var3[var10];
            _closure2_slot7 = var3;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var3 = _closure2_slot5;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 113; continue _fun0002 }
 32:
                    var3 = _closure2_slot5;
                    var6 = var3.current;
                    var4 = var6.clearRect;
                    var3 = {'x': 0, 'y': 0};
                    var7 = _closure2_slot1;
                    var8 = var7.w;
                    var3['w'] = var8;
                    var7 = var7.h;
                    var3['h'] = var7;
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = 1000;
                    var2 = var5 / var2;
                    var2 = var4.bind(var1)(var3, var2);
 113:
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var3, var12);
            var3 = var5.ticking;
            _closure2_slot8 = var3;
            var13 = var5.stop;
            _closure2_slot9 = var13;
            var14 = var5.reset;
            _closure2_slot10 = var14;
            var12 = var6.useEffect;
            var5 = new Array(4);
            var5[0] = var15;
            var5[1] = var14;
            var5[2] = var13;
            var5[3] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 22; continue _fun0003 }
 10:
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    var2 = !var3;
 22:
                    if(!var2) { _fun0003_ip = 35; continue _fun0003 }
 25:
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 35:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0003_ip = 52; continue _fun0003 }
 42:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var6)(var3, var5);
            var5 = var6.useMemo;
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var9;
            var9 = var7.w;
            var3[2] = var9;
            var7 = var7.h;
            var3[3] = var7;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.createPicture;
                var2 = {'x': 0, 'y': 0};
                var1 = _closure2_slot1;
                var5 = var1.w;
                var2['width'] = var5;
                var1 = var1.h;
                var2['height'] = var1;
                var1 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var7 = arg1;
                    var8 = var3;
                    var2 = new var8[var4](var7, var6);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = _closure2_slot0;
                    var5 = _closure2_slot6;
                    var2 = 1000;
                    var2 = var5 / var2;
                    var2 = var3.bind(var1)(var4, var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot5;
            var6 = _closure1_slot0;
            var5 = 4;
            var1 = var8[var5];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Canvas;
            var1 = {};
            var9 = {};
            var9['flex'] = var10;
            var1['style'] = var9;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Picture;
            var5 = {};
            var5['picture'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AnimatedDiscordCanvasComponent'] = var2;
    return var1;
})();