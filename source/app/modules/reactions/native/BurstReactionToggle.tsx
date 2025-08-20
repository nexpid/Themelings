// app/modules/reactions/native/BurstReactionToggle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Pressable;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 100;
    var4['duration'] = var7;
    var7 = 5;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var9 = var8.Easing;
    var8 = var9.out;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Easing;
    var7 = var7.quad;
    var7 = var8.bind(var9)(var7);
    var4['easing'] = var7;
    var _closure1_slot8 = var4;
    var4 = {'stiffness': 750, 'mass': 2.5, 'damping': 70};
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+"deg"}]};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderRadius': null, 'padding': 8, 'marginLeft': 8, 'width': 40, 'height': 40};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/native/BurstReactionToggle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BurstReactionToggle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.onPress;
            var _closure2_slot0 = var2;
            var6 = var1.isActive;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var1 = _closure1_slot11;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.colors;
            if(var6) { _fun0001_ip = 73; continue _fun0001 }
 65:
            var10 = var1.INTERACTIVE_NORMAL;
            _fun0001_ip = 79; continue _fun0001;
 73:
            var10 = var1.WHITE;
 79:
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var1 = null;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var9);
            _closure2_slot1 = var1;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var5 = undefined;
                    var10 = var6.bind(var5)(var4);
                    var9 = var10.useStateFromStores;
                    var4 = _closure1_slot5;
                    var8 = new Array(1);
                    var8[0] = var4;
                    var4 = function() {
                        var1 = _closure1_slot5;
                        var1 = var1.useReducedMotion;
                        return var1;
                    };
                    var11 = var9.bind(var10)(var8, var4);
                    var _closure3_slot0 = var11;
                    var4 = 7;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.useToken;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 8;
                    var4 = var9[var4];
                    var4 = var8.bind(var5)(var4);
                    var8 = var4.colors;
                    if(var2) { _fun0002_ip = 118; continue _fun0002 }
 110:
                    var4 = var8.INPUT_BACKGROUND;
                    _fun0002_ip = 124; continue _fun0002;
 118:
                    var4 = var8.BG_BRAND;
 124:
                    var4 = var6.bind(var7)(var4);
                    var6 = null;
                    var6 = var6 != var4;
                    var8 = '';
                    if(!var6) { _fun0002_ip = 145; continue _fun0002 }
 142:
                    var8 = var4;
 145:
                    var _closure3_slot1 = var8;
                    var6 = 0;
                    if(!var2) { _fun0002_ip = 160; continue _fun0002 }
 154:
                    var6 = 360;
 160:
                    var _closure3_slot2 = var6;
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 5;
                    var7 = var10[var2];
                    var9 = var4.bind(var5)(var7);
                    var7 = var9.useSharedValue;
                    var9 = var7.bind(var9)(var8);
                    var _closure3_slot3 = var9;
                    var7 = var10[var2];
                    var12 = var4.bind(var5)(var7);
                    var7 = var12.useSharedValue;
                    var7 = var7.bind(var12)(var6);
                    var _closure3_slot4 = var7;
                    var2 = var10[var2];
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.useAnimatedStyle;
                    var2 = function c() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = {};
                            var3 = _closure3_slot0;
                            if(var3) { _fun0003_ip = 27; continue _fun0003 }
 12:
                            var4 = _closure3_slot3;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            _fun0003_ip = 31; continue _fun0003;
 27:
                            var3 = _closure3_slot1;
 31:
                            var1['backgroundColor'] = var3;
                            var3 = {};
                            var4 = _closure3_slot0;
                            var6 = 0;
                            if(var4) { _fun0003_ip = 59; continue _fun0003 }
 46:
                            var4 = _closure3_slot4;
                            var2 = var4.get;
                            var6 = var2.bind(var4)();
 59:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var5 = var2.concat;
                            var4 = '';
                            var2 = 'deg';
                            var2 = var5.bind(var4)(var6, var2);
                            var3['rotate'] = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1['transform'] = var2;
                            return var1;
                        }
                    };
                    var10 = {};
                    var10['reducedMotion'] = var11;
                    var10['targetBackgroundColor'] = var8;
                    var10['backgroundColor'] = var9;
                    var10['rotation'] = var7;
                    var2['__closure'] = var10;
                    var10 = 1525758595013.0;
                    var2['__workletHash'] = var10;
                    var10 = _closure1_slot10;
                    var2['__initData'] = var10;
                    var2 = var4.bind(var5)(var2);
                    var5 = _closure1_slot3;
                    var4 = var5.useEffect;
                    var3 = new Array(4);
                    var3[0] = var9;
                    var3[1] = var8;
                    var3[2] = var7;
                    var3[3] = var6;
                    var1 = function() {
                        var6 = _closure3_slot3;
                        var4 = var6.set;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 9;
                        var3 = var8[var1];
                        var1 = undefined;
                        var11 = var7.bind(var1)(var3);
                        var10 = var11.withTiming;
                        var9 = _closure3_slot1;
                        var3 = _closure1_slot8;
                        var3 = var10.bind(var11)(var9, var3);
                        var3 = var4.bind(var6)(var3);
                        var4 = _closure3_slot4;
                        var3 = var4.set;
                        var6 = 10;
                        var6 = var8[var6];
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.withSpring;
                        var5 = _closure3_slot2;
                        var2 = _closure1_slot9;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var1, var3);
                    var1 = {};
                    var1['containerStyle'] = var2;
                    return var1;
                }
            };
            var1 = var1.bind(var4)(var6);
            var13 = var1.containerStyle;
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = function onPress() {
                var4 = _closure2_slot1;
                var1 = _closure1_slot6;
                var3 = var1.AUTO;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var5;
            var5 = true;
            var1['accessible'] = var5;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 13;
            var11 = var15[var5];
            var11 = var7.bind(var4)(var11);
            var14 = var11.intl;
            var11 = var14.string;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.t;
            if(var6) { _fun0001_ip = 232; continue _fun0001 }
 217:
            var5 = var7.buV4am;
            var5 = var11.bind(var14)(var5);
            _fun0001_ip = 245; continue _fun0001;
 232:
            var7 = var7.5cRA/f;
            var5 = var11.bind(var14)(var7);
 245:
            var1['accessibilityLabel'] = var5;
            var5 = 'switch';
            var1['accessibilityRole'] = var5;
            var5 = {};
            var5['checked'] = var6;
            var1['accessibilityState'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 5;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var14 = var12.container;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var5['style'] = var12;
            var5['ref'] = var9;
            var9 = _closure1_slot0;
            var8 = 14;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.SuperReactionIcon;
            var8 = {};
            var8['color'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();