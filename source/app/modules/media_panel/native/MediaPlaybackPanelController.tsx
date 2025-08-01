// app/modules/media_panel/native/MediaPlaybackPanelController.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaPlaybackPanelModes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MorphablePanelModes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_panel/native/MediaPlaybackPanelController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaPlaybackPanelController(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var1 = function useCoreState() {
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var4 = var13[var1];
            var2 = undefined;
            var7 = var12.bind(var2)(var4);
            var5 = var7.useSharedValue;
            var16 = _closure1_slot8;
            var4 = var16.PIP;
            var11 = var5.bind(var7)(var4);
            var _closure3_slot0 = var11;
            var4 = var13[var1];
            var7 = var12.bind(var2)(var4);
            var5 = var7.useSharedValue;
            var14 = 0;
            var4 = {'height': 0, 'width': 0};
            var9 = var5.bind(var7)(var4);
            var4 = var13[var1];
            var7 = var12.bind(var2)(var4);
            var5 = var7.useSharedValue;
            var4 = {'x': 4294967295, 'y': 4294967295};
            var7 = var5.bind(var7)(var4);
            var4 = var13[var1];
            var8 = var12.bind(var2)(var4);
            var5 = var8.useSharedValue;
            var4 = _closure1_slot5;
            var4 = var4.useReducedMotion;
            var8 = var5.bind(var8)(var4);
            var _closure3_slot1 = var8;
            var15 = _closure1_slot4;
            var10 = var15.useEffect;
            var5 = new Array(1);
            var5[0] = var8;
            var4 = function() {
                var4 = function onChange() {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        var1 = _closure1_slot5;
                        var3 = var1.useReducedMotion;
                        var4 = _closure3_slot1;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        if(!(var3 !== var2)) { _fun0001_ip = 47; continue _fun0001 }
 33:
                        var2 = _closure3_slot1;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var3);
 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure4_slot0 = var4;
                var3 = _closure1_slot5;
                var2 = var3.addReactChangeListener;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var3 = _closure1_slot5;
                    var2 = var3.removeReactChangeListener;
                    var1 = _closure4_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var4 = var10.bind(var15)(var4, var5);
            var4 = var13[var1];
            var10 = var12.bind(var2)(var4);
            var5 = var10.useSharedValue;
            var4 = true;
            var4 = var5.bind(var10)(var4);
            var5 = var13[var1];
            var10 = var12.bind(var2)(var5);
            var5 = var10.useSharedValue;
            var5 = var5.bind(var10)(var14);
            var10 = var13[var1];
            var14 = var12.bind(var2)(var10);
            var10 = var14.useDerivedValue;
            var6 = function p() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var1 = _closure1_slot8;
                    var1 = var1.PIP;
                    if(!(var3 !== var1)) { _fun0002_ip = 45; continue _fun0002 }
 33:
                    var1 = _closure1_slot10;
                    var1 = var1.UNDEFINED;
                    _fun0002_ip = 55; continue _fun0002;
 45:
                    var2 = _closure1_slot10;
                    var1 = var2.PIP;
 55:
                    return var1;
                }
            };
            var15 = {};
            var15['mode'] = var11;
            var15['MediaPlaybackPanelModes'] = var16;
            var16 = _closure1_slot10;
            var15['MorphablePanelModes'] = var16;
            var6['__closure'] = var15;
            var15 = 10375114450450.0;
            var6['__workletHash'] = var15;
            var15 = _closure1_slot12;
            var6['__initData'] = var15;
            var10 = var10.bind(var14)(var6);
            var14 = _closure1_slot1;
            var3 = 10;
            var3 = var13[var3];
            var3 = var14.bind(var2)(var3);
            var6 = var3.bind(var2)();
            var3 = 11;
            var3 = var13[var3];
            var3 = var14.bind(var2)(var3);
            var6 = var3.bind(var2)(var6);
            var3 = var13[var1];
            var15 = var12.bind(var2)(var3);
            var14 = var15.useSharedValue;
            var3 = false;
            var3 = var14.bind(var15)(var3);
            var1 = var13[var1];
            var12 = var12.bind(var2)(var1);
            var2 = var12.useSharedValue;
            var1 = {'x': 0, 'y': 0, 'gestureActive': false};
            var2 = var2.bind(var12)(var1);
            var1 = {};
            var1['mode'] = var11;
            var1['morphablePanelMode'] = var10;
            var1['wrapperDimensions'] = var9;
            var1['useReducedMotion'] = var8;
            var1['pipState'] = var7;
            var1['pipAvoidanceSpecs'] = var6;
            var1['scrollPosition'] = var5;
            var1['canShowPIP'] = var4;
            var1['lockScrolling'] = var3;
            var1['wrapperOffset'] = var2;
            return var1;
        };
        var4 = undefined;
        var1 = var1.bind(var4)();
        var7 = var1.mode;
        var _closure2_slot0 = var7;
        var3 = var1.morphablePanelMode;
        var _closure2_slot1 = var3;
        var3 = var1.wrapperDimensions;
        var _closure2_slot2 = var3;
        var3 = var1.useReducedMotion;
        var _closure2_slot3 = var3;
        var3 = var1.pipState;
        var _closure2_slot4 = var3;
        var3 = var1.pipAvoidanceSpecs;
        var _closure2_slot5 = var3;
        var3 = var1.scrollPosition;
        var _closure2_slot6 = var3;
        var14 = var1.canShowPIP;
        var _closure2_slot7 = var14;
        var3 = var1.lockScrolling;
        var _closure2_slot8 = var3;
        var1 = var1.wrapperOffset;
        var _closure2_slot9 = var1;
        var10 = _closure1_slot4;
        var3 = var10.useRef;
        var3 = var3.bind(var10)(var4);
        var _closure2_slot10 = var3;
        var6 = var10.useState;
        var3 = var7.get;
        var3 = var3.bind(var7)();
        var6 = var6.bind(var10)(var3);
        var8 = _closure1_slot3;
        var3 = 2;
        var7 = var8.bind(var4)(var6, var3);
        var3 = 0;
        var12 = var7[var3];
        var _closure2_slot11 = var12;
        var6 = 1;
        var7 = var7[var6];
        var _closure2_slot12 = var7;
        var11 = var10.useCallback;
        var9 = new Array(2);
        var9[0] = var12;
        var9[1] = var7;
        var7 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure2_slot11;
                var1 = _closure1_slot8;
                var1 = var1.PIP;
                var1 = var4 === var1;
                if(!var1) { _fun0003_ip = 82; continue _fun0003 }
 27:
                var5 = _closure2_slot12;
                var3 = _closure1_slot8;
                var3 = var3.DISMISSED;
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.userDidClosePip;
                var2 = var2.bind(var3)();
                var1 = true;
 82:
                return var1;
            }
        };
        var7 = var11.bind(var10)(var7, var9);
        var _closure2_slot13 = var7;
        var9 = _closure1_slot7;
        var7 = function(arg1) {
            var1 = arg1;
            var1 = var1.voicePanelsPIP;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var13 = var9.bind(var4)(var7);
        var _closure2_slot14 = var13;
        var11 = _closure1_slot0;
        var7 = _closure1_slot2;
        var9 = 13;
        var9 = var7[var9];
        var15 = var11.bind(var4)(var9);
        var12 = var15.useStateFromStores;
        var9 = _closure1_slot6;
        var11 = new Array(1);
        var11[0] = var9;
        var9 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getActivityPanelMode;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot9;
            var1 = var1.PIP;
            var1 = var2 === var1;
            return var1;
        };
        var9 = var12.bind(var15)(var11, var9);
        var _closure2_slot15 = var9;
        var12 = var10.useLayoutEffect;
        var11 = new Array(3);
        var11[0] = var14;
        var11[1] = var13;
        var11[2] = var9;
        var9 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot7;
                var2 = var3.set;
                var1 = _closure2_slot14;
                var1 = !var1;
                if(!var1) { _fun0004_ip = 29; continue _fun0004 }
 22:
                var4 = _closure2_slot15;
                var1 = !var4;
 29:
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var9 = var12.bind(var10)(var9, var11);
        var9 = var10.useState;
        var2 = function() {
            var1 = {};
            var3 = _closure2_slot0;
            var1['mode'] = var3;
            var3 = _closure2_slot12;
            var1['setMode'] = var3;
            var3 = _closure2_slot1;
            var1['morphablePanelMode'] = var3;
            var3 = _closure2_slot2;
            var1['wrapperDimensions'] = var3;
            var3 = _closure2_slot3;
            var1['useReducedMotion'] = var3;
            var3 = _closure2_slot4;
            var1['pipState'] = var3;
            var3 = _closure2_slot5;
            var1['pipAvoidanceSpecs'] = var3;
            var3 = _closure2_slot10;
            var1['dismissToPipGestureRef'] = var3;
            var3 = _closure2_slot13;
            var1['dismissPanel'] = var3;
            var3 = _closure2_slot6;
            var1['scrollPosition'] = var3;
            var3 = _closure2_slot7;
            var1['canShowPIP'] = var3;
            var3 = _closure2_slot8;
            var1['lockScrolling'] = var3;
            var2 = _closure2_slot9;
            var1['wrapperOffset'] = var2;
            return var1;
        };
        var2 = var9.bind(var10)(var2);
        var2 = var8.bind(var4)(var2, var6);
        var6 = var2[var3];
        var3 = _closure1_slot11;
        var2 = _closure1_slot1;
        var1 = 14;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();