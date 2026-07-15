// app/modules/collectibles/native/WishlistButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function WishlistButtonBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.isWishlisted;
            var _closure2_slot0 = var17;
            var18 = var1.onPress;
            var _closure2_slot1 = var18;
            var14 = var1.busy;
            var _closure2_slot2 = var14;
            var10 = var1.disabled;
            var _closure2_slot3 = var10;
            var7 = var1.accessibilityLabel;
            var6 = var1.accessibilityHidden;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var2 = var1.style;
            var _closure2_slot4 = var2;
            var3 = var1.size;
            if(!(var3 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 'sm';
case 4:
            var2 = var1.onTrackPress;
            var _closure2_slot5 = var2;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var1 = _closure1_slot17;
            var8 = var1.bind(var4)(var3);
            _closure2_slot6 = var8;
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 14;
            var1 = var12[var1];
            var1 = var5.bind(var4)(var1);
            var9 = var1.ICON_SIZE;
            var1 = _closure1_slot16;
            var1 = var1[var3];
            var11 = var9[var1];
            var1 = 13;
            var1 = var12[var1];
            var9 = var5.bind(var4)(var1);
            var1 = var9.useThemeContext;
            var1 = var1.bind(var9)();
            var9 = var1.theme;
            var1 = 15;
            var1 = var12[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.isThemeLight;
            var1 = var1.bind(var5)(var9);
            var5 = _closure1_slot11;
            var5 = var5.MIDNIGHT;
            var5 = var9 === var5;
            _closure2_slot7 = var5;
            var16 = var3;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var8.dark;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = var8.light;
case 8:
            _closure2_slot8 = var3;
            if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var8.darkPressed;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var1 = var8.lightPressed;
case 11:
            _closure2_slot9 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useContext;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 16;
            var1 = var12[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var3.bind(var5)(var1);
            var1 = var1.reducedMotion;
            var13 = var1.enabled;
            _closure2_slot10 = var13;
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var1 = false;
            var5 = var3.bind(var5)(var1);
            var3 = _closure1_slot4;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var12 = 0;
            var1 = var3[var12];
            _closure2_slot11 = var1;
            var20 = 1;
            var3 = var3[var20];
            _closure2_slot12 = var3;
            var22 = var17;
            if(var22) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var22 = var1;
case 12:
            _closure2_slot13 = var22;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 9;
            var3 = var3[var9];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSharedValue;
            var12 = 0;
            if(!var17) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var20;
case 14:
            var23 = var3.bind(var5)(var12);
            _closure2_slot14 = var23;
            var12 = _closure1_slot5;
            var5 = var12.useCallback;
            var3 = new Array(7);
            var3[0] = var10;
            var3[1] = var14;
            var3[2] = var18;
            var3[3] = var17;
            var3[4] = var13;
            var3[5] = var1;
            var3[6] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var2 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = _closure2_slot5;
                    var4 = _closure2_slot0;
                    var2 = _closure1_slot10;
                    if(var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var4 = var2.ADD_TO_WISHLIST;
                    _fun0002_ip = 24; continue _fun0002;
case 22:
                    var4 = var2.REMOVE_FROM_WISHLIST;
case 24:
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
case 20:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0002_ip = 25; continue _fun0002 }
case 27:
                    var5 = _closure2_slot12;
                    var4 = undefined;
                    var2 = true;
                    var2 = var5.bind(var4)(var2);
                    _fun0002_ip = 28; continue _fun0002;
case 25:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var2 = _closure2_slot11;
case 29:
                    if(!var2) { _fun0002_ip = 28; continue _fun0002 }
case 31:
                    var5 = _closure2_slot12;
                    var4 = undefined;
                    var2 = false;
                    var2 = var5.bind(var4)(var2);
case 28:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 32:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0002_ip = 18; continue _fun0002;
case 16:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 17;
                    var1 = var9[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'WISHLIST_DISABLED';
                    var1['key'] = var5;
                    var7 = _closure1_slot0;
                    var4 = 18;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4["50TX9k"];
                    var4 = var5.bind(var6)(var4);
                    var1['content'] = var4;
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var12)(var2, var3);
            var13 = _closure1_slot5;
            var12 = var13.useEffect;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var1;
            var3[2] = var23;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var3 = _closure2_slot14;
                    var2 = var3.set;
                    var4 = _closure2_slot0;
                    var1 = 0;
                    if(!var4) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var1 = 1;
case 35:
                    var1 = var2.bind(var3)(var1);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var13)(var2, var3);
            var12 = _closure1_slot5;
            var3 = var12.useEffect;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var23;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot11;
                    if(var3) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var3 = undefined;
                    return var3;
case 37:
                    var4 = _closure2_slot14;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var2 = global;
                    var4 = var2.requestAnimationFrame;
                    var3 = undefined;
                    var2 = function() {
                        var4 = _closure2_slot14;
                        var3 = var4.set;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var1 = 19;
                        var5 = var13[var1];
                        var1 = undefined;
                        var9 = var12.bind(var1)(var5);
                        var8 = var9.withTiming;
                        var16 = _closure1_slot14;
                        var6 = function t(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 9;
                                var1 = var3[var1];
                                var3 = undefined;
                                var4 = var2.bind(var3)(var1);
                                var2 = var4.runOnJS;
                                var1 = _closure2_slot12;
                                var2 = var2.bind(var4)(var1);
                                var1 = false;
                                var1 = var2.bind(var3)(var1);
case 39:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = {};
                        var11 = 9;
                        var11 = var13[var11];
                        var11 = var12.bind(var1)(var11);
                        var11 = var11.runOnJS;
                        var5['runOnJS'] = var11;
                        var10 = _closure2_slot12;
                        var5['setIsClickAnimating'] = var10;
                        var6['__closure'] = var5;
                        var5 = 13061953734403.0;
                        var6['__workletHash'] = var5;
                        var2 = _closure1_slot18;
                        var6['__initData'] = var2;
                        var17 = 1;
                        var15 = 'animate-always';
                        var18 = var9;
                        var14 = var6;
                        var2 = var18[var8](var17, var16, var15, var14, var13);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.cancelAnimationFrame;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var3.bind(var12)(var1, var2);
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = var20[var9];
            var3 = var21.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function J() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot6;
                    var16 = var2.animationFill;
                    var17 = var1;
                    var2 = copyDataProperties(var17, var16);
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var11 = 20;
                    var2 = var2[var11];
                    var9 = undefined;
                    var14 = var4.bind(var9)(var2);
                    var13 = var14.withSpring;
                    var2 = _closure2_slot13;
                    var7 = 1;
                    var12 = var7;
                    if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 24:
                    var12 = 0;
case 41:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var10 = 21;
                    var2 = var4[var10];
                    var2 = var5.bind(var9)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var6 = 'animate-always';
                    var12 = var13.bind(var14)(var12, var2, var6);
                    var2 = 'opacity';
                    var1[1] = var12;
                    var2 = {};
                    var4 = var4[var11];
                    var5 = var5.bind(var9)(var4);
                    var4 = var5.withSpring;
                    var8 = _closure2_slot13;
                    if(!var8) { _fun0006_ip = 16; continue _fun0006 }
case 42:
                    var7 = 0.9;
case 16:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var10];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.SUBTLE_SPRING;
                    var3 = var4.bind(var5)(var7, var3, var6);
                    var2['scale'] = var3;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'transform';
                    var1[1] = var3;
                    return var1;
                }
            };
            var12 = {};
            var12['styles'] = var8;
            var24 = 20;
            var13 = var20[var24];
            var13 = var21.bind(var4)(var13);
            var13 = var13.withSpring;
            var12['withSpring'] = var13;
            var12['showFilled'] = var22;
            var18 = 21;
            var13 = var20[var18];
            var13 = var21.bind(var4)(var13);
            var13 = var13.SUBTLE_SPRING;
            var12['SUBTLE_SPRING'] = var13;
            var1['__closure'] = var12;
            var12 = 1357254413161.0;
            var1['__workletHash'] = var12;
            var12 = _closure1_slot19;
            var1['__initData'] = var12;
            var13 = var2.bind(var3)(var1);
            var1 = var20[var9];
            var3 = var21.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function Y() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var1 = var2.get;
                    var8 = var1.bind(var2)();
                    var1 = {};
                    var2 = _closure2_slot6;
                    var13 = var2.animationFill;
                    var14 = var1;
                    var2 = copyDataProperties(var14, var13);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 20;
                    var4 = var5[var4];
                    var5 = undefined;
                    var10 = var6.bind(var5)(var4);
                    var7 = var10.withSpring;
                    var3 = _closure2_slot13;
                    var6 = 0;
                    if(!var3) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var6 = 1;
case 43:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 21;
                    var2 = var9[var2];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.SUBTLE_SPRING;
                    var2 = 'animate-always';
                    var3 = var7.bind(var10)(var6, var3, var2);
                    var2 = 'opacity';
                    var1[1] = var3;
                    var2 = {};
                    var3 = 9;
                    var6 = var9[var3];
                    var7 = var4.bind(var5)(var6);
                    var6 = var7.interpolate;
                    var3 = var9[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.Extrapolation;
                    var11 = var3.CLAMP;
                    var13 = [0, 0.625, 1];
                    var12 = [0, 1.35, 1];
                    var15 = var7;
                    var14 = var8;
                    var3 = var15[var6](var14, var13, var12, var11, var10);
                    var2['scale'] = var3;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'transform';
                    var1[1] = var3;
                    return var1;
                }
            };
            var12 = {};
            var12['animationFillProgress'] = var23;
            var12['styles'] = var8;
            var24 = var20[var24];
            var24 = var21.bind(var4)(var24);
            var24 = var24.withSpring;
            var12['withSpring'] = var24;
            var12['showFilled'] = var22;
            var18 = var20[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.SUBTLE_SPRING;
            var12['SUBTLE_SPRING'] = var18;
            var18 = var20[var9];
            var18 = var21.bind(var4)(var18);
            var18 = var18.interpolate;
            var12['interpolate'] = var18;
            var18 = var20[var9];
            var18 = var21.bind(var4)(var18);
            var18 = var18.Extrapolation;
            var12['Extrapolation'] = var18;
            var1['__closure'] = var12;
            var12 = 15039903885060.0;
            var1['__workletHash'] = var12;
            var12 = _closure1_slot20;
            var1['__initData'] = var12;
            var12 = var2.bind(var3)(var1);
            var1 = var20[var9];
            var3 = var21.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function K() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var1 = var3.get;
                    var8 = var1.bind(var3)();
                    var1 = {};
                    var3 = _closure2_slot6;
                    var12 = var3.animationFill;
                    var13 = var1;
                    var3 = copyDataProperties(var13, var12);
                    var2 = _closure2_slot13;
                    var3 = 0;
                    if(!var2) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 9;
                    var6 = var9[var2];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var6);
                    var6 = var7.interpolate;
                    var2 = var9[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.Extrapolation;
                    var10 = var2.CLAMP;
                    var12 = [0, 0.7];
                    var11 = [1, 0];
                    var14 = var7;
                    var13 = var8;
                    var3 = var14[var6](var13, var12, var11, var10, var9);
case 45:
                    var2 = 'opacity';
                    var1[1] = var3;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 9;
                    var6 = var9[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var6);
                    var6 = var7.interpolate;
                    var3 = var9[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.Extrapolation;
                    var10 = var3.CLAMP;
                    var12 = [0, 0.625, 1];
                    var11 = [0, 1.35, 1];
                    var14 = var7;
                    var13 = var8;
                    var3 = var14[var6](var13, var12, var11, var10, var9);
                    var2['scale'] = var3;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = 'transform';
                    var1[1] = var3;
                    return var1;
                }
            };
            var18 = {};
            var18['animationFillProgress'] = var23;
            var18['styles'] = var8;
            var18['showFilled'] = var22;
            var22 = var20[var9];
            var22 = var21.bind(var4)(var22);
            var22 = var22.interpolate;
            var18['interpolate'] = var22;
            var20 = var20[var9];
            var20 = var21.bind(var4)(var20);
            var20 = var20.Extrapolation;
            var18['Extrapolation'] = var20;
            var1['__closure'] = var18;
            var18 = 12429379889426.0;
            var1['__workletHash'] = var18;
            var18 = _closure1_slot21;
            var1['__initData'] = var18;
            var18 = var2.bind(var3)(var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var19 = function style(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.pressed;
                    var1 = _closure2_slot6;
                    var4 = var1.button;
                    var1 = new Array(6);
                    var1[0] = var4;
                    var4 = _closure2_slot8;
                    var1[1] = var4;
                    var4 = _closure2_slot7;
                    if(!var4) { _fun0009_ip = 39; continue _fun0009 }
case 47:
                    var5 = _closure2_slot6;
                    var4 = var5.midnight;
case 39:
                    var1[2] = var4;
                    if(!var3) { _fun0009_ip = 48; continue _fun0009 }
case 2:
                    var4 = _closure2_slot3;
                    var3 = !var4;
case 48:
                    if(!var3) { _fun0009_ip = 49; continue _fun0009 }
case 20:
                    var3 = _closure2_slot9;
case 49:
                    var1[3] = var3;
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var4 = _closure2_slot6;
                    var3 = var4.disabled;
case 50:
                    var1[4] = var3;
                    var2 = _closure2_slot4;
                    var1[5] = var2;
                    return var1;
                }
            };
            var1['style'] = var19;
            var1['onPress'] = var5;
            var5 = 'togglebutton';
            if(!var6) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var5 = 'none';
case 52:
            var1['accessibilityRole'] = var5;
            var5 = undefined;
            if(var6) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var5 = var7;
case 54:
            var1['accessibilityLabel'] = var5;
            var5 = undefined;
            if(var6) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var7 = {};
            var7['checked'] = var17;
            var7['busy'] = var14;
            var7['disabled'] = var10;
            var5 = var7;
case 56:
            var1['accessibilityState'] = var5;
            var1['accessibilityElementsHidden'] = var6;
            var5 = 'auto';
            if(!var6) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var5 = 'no-hide-descendants';
case 58:
            var1['importantForAccessibility'] = var5;
            var7 = _closure1_slot13;
            var6 = _closure1_slot7;
            var5 = {};
            var10 = var8.iconContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = {};
            var10['width'] = var11;
            var10['height'] = var11;
            var8[1] = var10;
            var5['style'] = var8;
            var19 = _closure1_slot12;
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = var17[var9];
            var8 = var10.bind(var4)(var8);
            var11 = var8.View;
            var8 = {};
            var8['style'] = var13;
            var14 = 'none';
            var8['pointerEvents'] = var14;
            var22 = _closure1_slot12;
            var13 = _closure1_slot0;
            var20 = 22;
            var20 = var17[var20];
            var20 = var13.bind(var4)(var20);
            var21 = var20.HeartOutlineIcon;
            var20 = {};
            var23 = _closure1_slot16;
            var23 = var23[var16];
            var20['size'] = var23;
            var24 = 12;
            var23 = var17[var24];
            var23 = var10.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.INTERACTIVE_ICON_DEFAULT;
            var20['color'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var8['children'] = var20;
            var11 = var19.bind(var4)(var11, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var20 = _closure1_slot12;
            var11 = var17[var9];
            var11 = var10.bind(var4)(var11);
            var19 = var11.View;
            var11 = {};
            var11['style'] = var12;
            var11['pointerEvents'] = var14;
            var23 = _closure1_slot12;
            var12 = 23;
            var21 = var17[var12];
            var21 = var13.bind(var4)(var21);
            var22 = var21.HeartIcon;
            var21 = {};
            var25 = _closure1_slot16;
            var25 = var25[var16];
            var21['size'] = var25;
            var24 = var17[var24];
            var24 = var10.bind(var4)(var24);
            var24 = var24.unsafe_rawColors;
            var24 = var24.RED_NEW_50;
            var21['color'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var11['children'] = var21;
            var11 = var20.bind(var4)(var19, var11);
            var8[1] = var11;
            var11 = _closure1_slot12;
            var9 = var17[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.View;
            var9 = {};
            var9['style'] = var18;
            var9['pointerEvents'] = var14;
            var14 = _closure1_slot12;
            var12 = var17[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.HeartIcon;
            var12 = {};
            var15 = _closure1_slot16;
            var15 = var15[var16];
            var12['size'] = var15;
            var15 = 'white';
            var12['color'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var2 = function WishlistButton(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var16 = var5.skuId;
            var12 = var5.product;
            var _closure2_slot0 = var12;
            var15 = var5.onPress;
            var _closure2_slot1 = var15;
            var14 = var5.onTrackPress;
            var _closure2_slot2 = var14;
            var3 = {'skuId': 0, 'product': 0, 'onPress': 0, 'onTrackPress': 0};
            var1 = null;
            var24 = var3;
            var23 = null;
            var2 = silentSetPrototypeOf(var24, var23);
            var24 = {};
            var23 = var5;
            var22 = var3;
            var6 = copyDataProperties(var24, var23, var22);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 24;
            var7 = var10[var3];
            var5 = undefined;
            var13 = var9.bind(var5)(var7);
            var11 = var13.useStateFromStores;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var11.bind(var13)(var8, var7);
            var3 = var10[var3];
            var11 = var9.bind(var5)(var3);
            var8 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var11)(var7, var3);
            var8 = _closure1_slot1;
            var7 = 25;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.bind(var5)();
            var11 = var7.shouldShowWishlistNUXActionSheet;
            var _closure2_slot3 = var11;
            var20 = var7.showWishlistNUXActionSheet;
            var _closure2_slot4 = var20;
            var8 = 18;
            var7 = var10[var8];
            var7 = var9.bind(var5)(var7);
            var19 = var7.intl;
            var18 = var19.formatToPlainString;
            var7 = var10[var8];
            var7 = var9.bind(var5)(var7);
            var7 = var7.t;
            var13 = var7["7kFjeK"];
            var7 = {};
            var21 = var12.name;
            var7['productName'] = var21;
            var7 = var18.bind(var19)(var13, var7);
            var19 = _closure1_slot5;
            var18 = var19.useCallback;
            var13 = new Array(3);
            var13[0] = var11;
            var13[1] = var20;
            var13[2] = var12;
            var12 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0011_ip = 60; continue _fun0011 }
case 34:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var18.bind(var19)(var12, var13);
            var12 = var10[var8];
            var12 = var9.bind(var5)(var12);
            var18 = var12.intl;
            var12 = var18.string;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.F8FvUy;
            var8 = var12.bind(var18)(var8);
            var _closure2_slot5 = var8;
            var19 = _closure1_slot5;
            var18 = var19.useCallback;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var5 = 'WISHLIST_ERROR';
                var2['key'] = var5;
                var5 = _closure2_slot5;
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12 = var18.bind(var19)(var8, var12);
            var8 = 26;
            var8 = var10[var8];
            var10 = var9.bind(var5)(var8);
            var9 = var10.useWishlistButtonState;
            var8 = {};
            var8['userId'] = var17;
            var8['skuId'] = var16;
            var8['onAddSuccess'] = var13;
            var8['onError'] = var12;
            var8['skipAddAnnouncement'] = var11;
            var9 = var9.bind(var10)(var8);
            var10 = var9.isWishlisted;
            var _closure2_slot6 = var10;
            var8 = var9.isBusy;
            var13 = var9.handleToggle;
            var _closure2_slot7 = var13;
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var9 = _closure1_slot3;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                        var3 = _closure2_slot2;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0012_ip = 22; continue _fun0012 }
case 63:
                        var6 = _closure2_slot2;
                        var5 = _closure2_slot6;
                        var3 = _closure1_slot10;
                        if(var5) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                        var5 = var3.ADD_TO_WISHLIST;
                        _fun0012_ip = 66; continue _fun0012;
case 64:
                        var5 = var3.REMOVE_FROM_WISHLIST;
case 66:
                        var3 = undefined;
                        var3 = var6.bind(var3)(var5);
case 22:
                        var3 = _closure2_slot1;
                        if(!(var4 != var3)) { _fun0012_ip = 43; continue _fun0012 }
case 41:
                        var4 = _closure2_slot1;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
case 43:
                        var2 = _closure2_slot7;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=91);
case 67:
                        return var2;
case 68:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                        return var3;
case 69:
                        return var2;
case 61:
                        return var1;
                    }
                };
                return var1;
            };
            var9 = var9.bind(var5)(var4);
            var4 = new Array(4);
            var4[0] = var15;
            var4[1] = var14;
            var4[2] = var10;
            var4[3] = var13;
            var9 = var11.bind(var12)(var9, var4);
            var3 = var1 == var3;
            if(var3) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var4 = _closure1_slot12;
            var3 = _closure1_slot22;
            var2 = {};
            var2['isWishlisted'] = var10;
            var2['onPress'] = var9;
            var2['busy'] = var8;
            var2['accessibilityLabel'] = var7;
            var24 = var2;
            var23 = var6;
            var6 = copyDataProperties(var24, var23);
            var1 = var4.bind(var5)(var3, var2);
case 71:
            return var1;
        }
    };
    var _closure1_slot23 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var14 = 0;
    var6 = var8[var14];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var6 = var8[var13];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.Pressable;
    var _closure1_slot6 = var10;
    var6 = var6.View;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ShopCtaEnum;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot12 = var9;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var6 = {};
    var9 = 400;
    var6['duration'] = var9;
    var9 = 9;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var12 = var9.Easing;
    var11 = var12.bezier;
    var18 = 0.67;
    var16 = 0.26;
    var19 = var12;
    var17 = 0;
    var15 = var13;
    var9 = var19[var11](var18, var17, var16, var15, var14);
    var6['easing'] = var9;
    var _closure1_slot14 = var6;
    var6 = {};
    var9 = 10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.SMALL_BUTTON_HEIGHT;
    var6['sm'] = var10;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.MEDIUM_BUTTON_HEIGHT;
    var6['md'] = var9;
    var _closure1_slot15 = var6;
    var6 = {'sm': 'sm', 'md': 'md'};
    var _closure1_slot16 = var6;
    var6 = 11;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = function(arg1) {
        var4 = arg1;
        var1 = {};
        var2 = {'width': null, 'height': null, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'borderWidth': 1};
        var3 = _closure1_slot15;
        var5 = var3[var4];
        var2['width'] = var5;
        var3 = var3[var4];
        var2['height'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 12;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.CONTROL_SECONDARY_BORDER_DEFAULT;
        var2['borderColor'] = var8;
        var1['button'] = var2;
        var2 = {};
        var8 = _closure1_slot0;
        var7 = 13;
        var9 = var6[var7];
        var12 = var8.bind(var4)(var9);
        var11 = var12.setColorOpacity;
        var10 = 'white';
        var9 = 0.72;
        var9 = var11.bind(var12)(var10, var9);
        var2['backgroundColor'] = var9;
        var1['light'] = var2;
        var2 = {};
        var7 = var6[var7];
        var9 = var8.bind(var4)(var7);
        var8 = var9.setColorOpacity;
        var7 = 0.62;
        var7 = var8.bind(var9)(var10, var7);
        var2['backgroundColor'] = var7;
        var1['lightPressed'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var2['backgroundColor'] = var7;
        var1['dark'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
        var2['backgroundColor'] = var7;
        var1['darkPressed'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.BORDER_STRONG;
        var2['borderColor'] = var3;
        var1['midnight'] = var2;
        var2 = {};
        var3 = 0.5;
        var2['opacity'] = var3;
        var1['disabled'] = var2;
        var2 = {'position': 'relative', 'alignItems': 'center', 'justifyContent': 'center'};
        var1['iconContainer'] = var2;
        var2 = {'position': 'absolute', 'inset': 0, 'alignItems': 'center', 'justifyContent': 'center'};
        var1['animationFill'] = var2;
        return var1;
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot17 = var6;
    var6 = {};
    var9 = 'function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}';
    var6['code'] = var9;
    var _closure1_slot18 = var6;
    var6 = {};
    var9 = "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}";
    var6['code'] = var9;
    var _closure1_slot19 = var6;
    var6 = {};
    var9 = "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}";
    var6['code'] = var9;
    var _closure1_slot20 = var6;
    var6 = {};
    var9 = 'function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}';
    var6['code'] = var9;
    var _closure1_slot21 = var6;
    var6 = 29;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/collectibles/native/WishlistButton.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function CollectiblesWishlistButton(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var9 = var4.selectedProduct;
            var7 = var4.onTrackPress;
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['selectedProduct'] = var2;
            var3['onTrackPress'] = var2;
            var14 = {};
            var13 = var4;
            var12 = var3;
            var6 = copyDataProperties(var14, var13, var12);
            var10 = var9.skuId;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 27;
            var3 = var11[var3];
            var5 = undefined;
            var4 = var8.bind(var5)(var3);
            var3 = var4.useProductPurchaseState;
            var3 = var3.bind(var4)(var9);
            var3 = var3.isPurchased;
            var4 = 28;
            var4 = var11[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.isWishlistableCollectiblesProduct;
            var8 = var4.bind(var8)(var9);
            if(var3) { _fun0013_ip = 73; continue _fun0013 }
case 74:
            var4 = _closure1_slot12;
            var3 = _closure1_slot23;
            var2 = {};
            var2['skuId'] = var10;
            var2['product'] = var9;
            var8 = !var8;
            var2['disabled'] = var8;
            var2['onTrackPress'] = var7;
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var1 = var4.bind(var5)(var3, var2);
case 73:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['WishlistButtonBase'] = var4;
    var3['WishlistButton'] = var2;
    return var1;
})();