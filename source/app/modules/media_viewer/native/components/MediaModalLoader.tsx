// app/modules/media_viewer/native/components/MediaModalLoader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var17.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var13 = var4.StyleSheet;
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var9 = 3;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var8 = var13.create;
    var4 = {};
    var14 = {};
    var20 = var13.absoluteFillObject;
    var21 = var14;
    var15 = copyDataProperties(var21, var20);
    var15 = 'flex';
    var14[var15] = var11;
    var15 = 'center';
    var16 = 'alignItems';
    var14[var16] = var15;
    var16 = 'justifyContent';
    var14[var16] = var15;
    var18 = 'rgba(0, 0, 0, 0.7)';
    var16 = 'backgroundColor';
    var14[var16] = var18;
    var4['loader'] = var14;
    var14 = {};
    var16 = 4;
    var16 = var6[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var14['marginTop'] = var16;
    var4['loaderIndicator'] = var14;
    var14 = {};
    var14['textAlign'] = var15;
    var4['loaderText'] = var14;
    var4 = var8.bind(var13)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var4['None'] = var12;
    var8 = 'None';
    var4[var12] = var8;
    var4['Loading'] = var11;
    var8 = 'Loading';
    var4[var11] = var8;
    var4['Loaded'] = var10;
    var8 = 'Loaded';
    var4[var10] = var8;
    var4['Error'] = var9;
    var8 = 'Error';
    var4[var9] = var8;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function MediaModalLoader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var8 = var6.Component;
            var9 = var6.style;
            var22 = var6.onLoadStart;
            var _closure2_slot0 = var22;
            var3 = var6.onLoad;
            var _closure2_slot1 = var3;
            var21 = var6.onError;
            var _closure2_slot2 = var21;
            var12 = var6.index;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0001_ip = 59; continue _fun0001 }
 57:
            var12 = 0;
 59:
            var11 = var6.source;
            var4 = {'Component': 0, 'style': 0, 'onLoadStart': 0, 'onLoad': 0, 'onError': 0, 'index': 0, 'source': 0};
            var15 = null;
            var26 = var4;
            var25 = null;
            var1 = silentSetPrototypeOf(var26, var25);
            var16 = 0;
            var26 = {};
            var25 = var6;
            var24 = var4;
            var13 = copyDataProperties(var26, var25, var24);
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var4 = _closure1_slot4;
            var10 = var4.useState;
            var1 = _closure1_slot10;
            var7 = var1.None;
            var7 = var10.bind(var4)(var7);
            var18 = _closure1_slot3;
            var17 = 2;
            var7 = var18.bind(var5)(var7, var17);
            var10 = var7[var16];
            _closure2_slot3 = var10;
            var14 = 1;
            var7 = var7[var14];
            _closure2_slot4 = var7;
            var7 = var4.useState;
            var7 = var7.bind(var4)(var16);
            var7 = var18.bind(var5)(var7, var17);
            var20 = var7[var16];
            var7 = var7[var14];
            _closure2_slot5 = var7;
            var7 = var4.useRef;
            var7 = var7.bind(var4)(var15);
            _closure2_slot6 = var7;
            var16 = var4.useCallback;
            var14 = function() {
                var2 = _closure2_slot6;
                var1 = global;
                var5 = var1.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var1 = _closure1_slot10;
                            var3 = var1.None;
                            var1 = arg1;
                            if(!(var1 !== var3)) { _fun0002_ip = 32; continue _fun0002 }
 20:
                            var1 = _closure1_slot10;
                            var1 = var1.None;
                            _fun0002_ip = 42; continue _fun0002;
 32:
                            var2 = _closure1_slot10;
                            var1 = var2.Loading;
 42:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = 1000;
                var1 = var5.bind(var4)(var3, var1);
                var2['current'] = var1;
                return var1;
            };
            var7 = new Array(0);
            var18 = var16.bind(var4)(var14, var7);
            var16 = var4.useCallback;
            var14 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var4 = var1.loaded;
                var2 = var1.total;
                var3 = _closure2_slot5;
                var1 = 100;
                var1 = var1 * var4;
                var2 = var1 / var2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = new Array(0);
            var17 = var16.bind(var4)(var14, var7);
            var16 = var4.useCallback;
            var14 = function() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot10;
                var2 = var1.Loaded;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = new Array(0);
            var16 = var16.bind(var4)(var14, var7);
            var19 = var4.useCallback;
            var14 = function() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot10;
                var2 = var1.Error;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = new Array(0);
            var14 = var19.bind(var4)(var14, var7);
            var19 = var4.useEffect;
            var7 = new Array(4);
            var7[0] = var10;
            var7[1] = var22;
            var7[2] = var21;
            var7[3] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var4 = _closure1_slot10;
                    var4 = var4.Loading;
                    if(!(var4 !== var3)) { _fun0003_ip = 95; continue _fun0003 }
 24:
                    var4 = _closure1_slot10;
                    var4 = var4.Error;
                    if(!(var4 !== var3)) { _fun0003_ip = 73; continue _fun0003 }
 37:
                    var2 = _closure1_slot10;
                    var2 = var2.Loaded;
                    if(!(var2 === var3)) { _fun0003_ip = 115; continue _fun0003 }
 51:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 115; continue _fun0003 }
 61:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0003_ip = 115; continue _fun0003;
 73:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 115; continue _fun0003 }
 83:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0003_ip = 115; continue _fun0003;
 95:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 115; continue _fun0003 }
 105:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var19.bind(var4)(var3, var7);
            var3 = var4.useEffect;
            var2 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot6;
                    var2 = var1.current;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = var1.Error;
            if(!(var10 !== var1)) { _fun0001_ip = 831; continue _fun0001 }
 375:
            var3 = _closure1_slot8;
            var1 = _closure1_slot4;
            var2 = var1.Fragment;
            var1 = {};
            var7 = _closure1_slot7;
            var4 = {};
            var26 = var4;
            var25 = var13;
            var13 = copyDataProperties(var26, var25);
            var13 = 'style';
            var4[var13] = var9;
            var13 = 'source';
            var4[var13] = var11;
            var13 = 'onLoadStart';
            var4[var13] = var18;
            var13 = 'onProgress';
            var4[var13] = var17;
            var13 = 'onLoad';
            var4[var13] = var16;
            var13 = 'onError';
            var4[var13] = var14;
            var14 = 'image';
            var13 = 'accessibilityRole';
            var4[var13] = var14;
            var13 = var11.description;
            var16 = var15 != var13;
            var14 = undefined;
            if(!var16) { _fun0001_ip = 491; continue _fun0001 }
 488:
            var14 = var13;
 491:
            var13 = 'accessibilityLabel';
            var4[var13] = var14;
            var14 = true;
            var13 = 'loop';
            var4[var13] = var14;
            var7 = var7.bind(var5)(var8, var4);
            var4 = new Array(3);
            var4[0] = var7;
            var7 = _closure1_slot10;
            var8 = var7.Loading;
            var7 = null;
            if(!(var10 === var8)) { _fun0001_ip = 764; continue _fun0001 }
 544:
            var13 = _closure1_slot8;
            var10 = _closure1_slot5;
            var8 = {};
            var14 = _closure1_slot9;
            var16 = var14.loader;
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var9;
            var8['style'] = var14;
            var14 = var11.videoURI;
            var14 = var15 == var14;
            var15 = null;
            if(!var14) { _fun0001_ip = 698; continue _fun0001 }
 595:
            var17 = _closure1_slot8;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 5;
            var14 = var18[var14];
            var14 = var16.bind(var5)(var14);
            var16 = var14.Text;
            var14 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'always-white'};
            var18 = _closure1_slot9;
            var18 = var18.loaderText;
            var14['style'] = var18;
            var18 = global;
            var19 = var18.Math;
            var18 = var19.round;
            var19 = var18.bind(var19)(var20);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = '%';
            var18[1] = var19;
            var14['children'] = var18;
            var15 = var17.bind(var5)(var16, var14);
 698:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot7;
            var16 = _closure1_slot6;
            var15 = {'color': 'white', 'style': null, 'size': 'large'};
            var18 = _closure1_slot9;
            var18 = var18.loaderIndicator;
            var15['style'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var8['children'] = var14;
            var7 = var13.bind(var5)(var10, var8);
 764:
            var4[1] = var7;
            var10 = _closure1_slot7;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 7;
            var7 = var13[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['style'] = var9;
            var7['index'] = var12;
            var7['source'] = var11;
            var7 = var10.bind(var5)(var8, var7);
            var4[2] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 987; continue _fun0001;
 831:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = _closure1_slot9;
            var10 = var8.loader;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var9;
            var2['style'] = var7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 5;
            var6 = var12[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'always-white'};
            var8 = var8.loaderText;
            var6['style'] = var8;
            var8 = 6;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.+ITMYW;
            var8 = var9.bind(var10)(var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 987:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModalLoader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();