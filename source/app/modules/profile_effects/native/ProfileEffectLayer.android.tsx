// app/modules/profile_effects/native/ProfileEffectLayer.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.layerConfig;
            var10 = var1.animate;
            var _closure2_slot0 = var10;
            var12 = var1.width;
            var6 = var1.accessibilityLabel;
            var5 = var1.onLoad;
            var15 = _closure1_slot2;
            var3 = var15.useRef;
            var1 = null;
            var8 = var3.bind(var15)(var1);
            var11 = _closure1_slot0;
            var14 = _closure1_slot1;
            var1 = 3;
            var3 = var14[var1];
            var4 = undefined;
            var9 = var11.bind(var4)(var3);
            var3 = var9.useAPNGPlayerControls;
            var16 = var3.bind(var9)(var8);
            var _closure2_slot1 = var16;
            var9 = var15.useEffect;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var16;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var3 = var2.seek;
                    var1 = 0;
                    var1 = var3.bind(var2)(var1);
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var15)(var2, var3);
            var3 = _closure1_slot4;
            var1 = var14[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.APNGPlayer;
            var1 = {};
            var1['ref'] = var8;
            var8 = var13.src;
            var1['url'] = var8;
            var8 = false;
            var1['autoplay'] = var8;
            var7 = _closure1_slot3;
            var8 = var7.absoluteFill;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var9 = 'absolute';
            var8['position'] = var9;
            var8['width'] = var12;
            var9 = 4;
            var9 = var14[var9];
            var11 = var11.bind(var4)(var9);
            var9 = var11.calculateProfileEffectHeight;
            var9 = var9.bind(var11)(var13, var12);
            var8['height'] = var9;
            var9 = 0;
            if(!var10) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var9 = 1;
case 5:
            var8['opacity'] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            var1['ariaLabel'] = var6;
            var1['onLoad'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/native/ProfileEffectLayer.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();