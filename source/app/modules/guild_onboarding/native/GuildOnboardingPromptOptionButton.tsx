// app/modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Color;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderRadius': null, 'borderWidth': 2, 'borderStyle': 'solid', 'borderColor': null, 'marginBottom': 8};
    var10 = 9;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var9['borderColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var13;
    var13 = 'transparent';
    var9['borderColor'] = var13;
    var4['selected'] = var9;
    var9 = {'paddingVertical': 12, 'paddingHorizontal': 16, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['optionButton'] = var9;
    var9 = {'fontSize': 24, 'lineHeight': 24, 'marginRight': 12, 'paddingTop': 5};
    var4['optionTextEmoji'] = var9;
    var9 = {'height': 24, 'width': 24, 'marginRight': 12};
    var4['optionImageEmoji'] = var9;
    var9 = {};
    var9['flexShrink'] = var12;
    var4['optionText'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967290, 'width': 20, 'height': 20, 'backgroundColor': null, 'borderRadius': 10, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BRAND;
    var9['backgroundColor'] = var12;
    var4['checkIcon'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967290};
    var4['newBadgeWrapper'] = var9;
    var9 = {};
    var12 = 'bold';
    var9['fontWeight'] = var12;
    var4['newBadge'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967290, 'right': 24, 'paddingVertical': 2, 'paddingHorizontal': 6, 'backgroundColor': null, 'borderRadius': 10, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BRAND;
    var9['backgroundColor'] = var10;
    var4['roleCount'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx3(){const{isNew,brandColor,defaultColor,isDarkTheme,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor.hex+"FF":""+defaultColor+(isDarkTheme?\'87\':\'3D\');const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(""+defaultColor+(isDarkTheme?\'87\':\'3D\'),{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptOptionButtonTsx4(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PromptOptionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var8 = var1.option;
            var _closure2_slot0 = var8;
            var9 = var1.selected;
            var _closure2_slot1 = var9;
            var3 = var1.onSelect;
            var _closure2_slot2 = var3;
            var3 = var1.suppressMemberCount;
            var _closure2_slot3 = var3;
            var6 = var1.canBeNew;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var1 = _closure1_slot12;
            var10 = var1.bind(var4)();
            var16 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var3 = var5[var1];
            var13 = var16.bind(var4)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var2 = var6 == var1;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 42; continue _fun0002 }
 18:
                    var2 = _closure2_slot0;
                    var2 = var2.emoji;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 42; continue _fun0002 }
 37:
                    var1 = var2.id;
 42:
                    var2 = var6 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 106; continue _fun0002 }
 51:
                    var4 = _closure1_slot7;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot0;
                    var8 = var6 == var2;
                    var2 = undefined;
                    if(var8) { _fun0002_ip = 101; continue _fun0002 }
 77:
                    var5 = _closure2_slot0;
                    var5 = var5.emoji;
                    var6 = var6 == var5;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 101; continue _fun0002 }
 96:
                    var2 = var5.id;
 101:
                    var1 = var3.bind(var4)(var2);
 106:
                    return var1;
                }
            };
            var30 = var12.bind(var13)(var11, var3);
            var1 = var5[var1];
            var12 = var16.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var22 = var11.bind(var12)(var3, var1);
            var _closure2_slot4 = var22;
            var1 = 11;
            var1 = var5[var1];
            var12 = var16.bind(var4)(var1);
            var11 = var12.isThemeDark;
            var3 = _closure1_slot1;
            var1 = 12;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var25 = var11.bind(var12)(var1);
            var _closure2_slot5 = var25;
            var11 = 13;
            var1 = var5[var11];
            var13 = var16.bind(var4)(var1);
            var12 = var13.useAnimatedStyle;
            var1 = function M() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var7 = 0;
                    if(!var1) { _fun0003_ip = 15; continue _fun0003 }
 12:
                    var7 = 1;
 15:
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 14;
                    var1 = var8[var1];
                    var9 = undefined;
                    var6 = var12.bind(var9)(var1);
                    var3 = var6.withTiming;
                    var1 = {};
                    var4 = 150;
                    var1['duration'] = var4;
                    var4 = 13;
                    var10 = var8[var4];
                    var10 = var12.bind(var9)(var10);
                    var11 = var10.Easing;
                    var10 = var11.out;
                    var8 = var8[var4];
                    var8 = var12.bind(var9)(var8);
                    var8 = var8.Easing;
                    var8 = var8.ease;
                    var8 = var10.bind(var11)(var8);
                    var1['easing'] = var8;
                    var3 = var3.bind(var6)(var7, var1);
                    var1 = _closure2_slot1;
                    var10 = 0.7;
                    if(!var1) { _fun0003_ip = 135; continue _fun0003 }
 132:
                    var10 = 1;
 135:
                    var1 = {};
                    var1['opacity'] = var3;
                    var3 = {};
                    var6 = _closure2_slot4;
                    var2 = var10;
                    if(var6) { _fun0003_ip = 267; continue _fun0003 }
 153:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = var11[var4];
                    var7 = var8.bind(var9)(var4);
                    var6 = var7.withSequence;
                    var4 = 15;
                    var5 = var11[var4];
                    var14 = var8.bind(var9)(var5);
                    var13 = var14.withSpring;
                    var5 = 1.2;
                    var12 = var5 * var10;
                    var5 = {'stiffness': 80, 'damping': 6, 'mass': 0.3};
                    var5 = var13.bind(var14)(var12, var5);
                    var4 = var11[var4];
                    var9 = var8.bind(var9)(var4);
                    var8 = var9.withSpring;
                    var4 = {'stiffness': 80, 'damping': 6, 'mass': 0.3};
                    var4 = var8.bind(var9)(var10, var4);
                    var2 = var6.bind(var7)(var5, var4);
 267:
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['selected'] = var9;
            var23 = 14;
            var15 = var5[var23];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withTiming;
            var14['withTiming'] = var15;
            var15 = var5[var11];
            var15 = var16.bind(var4)(var15);
            var15 = var15.Easing;
            var14['Easing'] = var15;
            var14['useReducedMotion'] = var22;
            var15 = var5[var11];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withSequence;
            var14['withSequence'] = var15;
            var15 = 15;
            var15 = var5[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withSpring;
            var14['withSpring'] = var15;
            var1['__closure'] = var14;
            var14 = 8281627194581.0;
            var1['__workletHash'] = var14;
            var14 = _closure1_slot13;
            var1['__initData'] = var14;
            var15 = var12.bind(var13)(var1);
            var1 = 16;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var _closure2_slot6 = var1;
            var12 = null;
            var1 = var12 == var1;
            var13 = 0;
            var24 = 0;
            if(var1) { _fun0001_ip = 504; continue _fun0001 }
 427:
            var1 = var8.roleIds;
            var1 = var12 == var1;
            var24 = 0;
            if(var1) { _fun0001_ip = 504; continue _fun0001 }
 442:
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var14 = var8.roleIds;
            var5 = var14.map;
            var1 = function(arg1) {
                var2 = _closure2_slot6;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var33 = var5.bind(var14)(var1);
            var1 = new Array(0);
            var34 = var1;
            var32 = 0;
            var5 = arraySpread(var34, var33, var32);
            var34 = var2;
            var33 = var1;
            var32 = var3;
            var24 = apply(var34, var33, var32);
 504:
            var14 = _closure1_slot4;
            var2 = var14.useState;
            var1 = false;
            var3 = var2.bind(var14)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var1 = var2.bind(var4)(var3, var1);
            var19 = var1[var13];
            _closure2_slot7 = var19;
            var3 = 1;
            var1 = var1[var3];
            _closure2_slot8 = var1;
            var1 = var14.useRef;
            var1 = var1.bind(var14)(var12);
            _closure2_slot9 = var1;
            var5 = var14.useEffect;
            var2 = new Array(1);
            var2[0] = var19;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot7;
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
 12:
                    var3 = undefined;
                    return var3;
 16:
                    var3 = _closure2_slot9;
                    var2 = global;
                    var6 = var2.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        var4 = _closure2_slot8;
                        var1 = undefined;
                        var3 = false;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot9;
                        var2 = null;
                        var3['current'] = var2;
                        return var1;
                    };
                    var2 = 3000;
                    var2 = var6.bind(var5)(var4, var2);
                    var3['current'] = var2;
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var2 = _closure2_slot9;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 42; continue _fun0005 }
 18:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var1 = _closure2_slot9;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 42:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var5.bind(var14)(var1, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = var1[var11];
            var16 = var2.bind(var4)(var5);
            var14 = var16.useAnimatedStyle;
            var5 = function z() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot7;
                    var11 = 0;
                    if(!var1) { _fun0006_ip = 15; continue _fun0006 }
 12:
                    var11 = 1;
 15:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var16 = 13;
                    var1 = var1[var16];
                    var15 = undefined;
                    var5 = var2.bind(var15)(var1);
                    var3 = var5.withDelay;
                    var1 = _closure2_slot7;
                    var2 = 0;
                    if(!var1) { _fun0006_ip = 61; continue _fun0006 }
 55:
                    var2 = 400;
 61:
                    var17 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 14;
                    var1 = var12[var4];
                    var10 = var17.bind(var15)(var1);
                    var6 = var10.withTiming;
                    var1 = {};
                    var13 = 150;
                    var1['duration'] = var13;
                    var13 = var12[var16];
                    var13 = var17.bind(var15)(var13);
                    var14 = var13.Easing;
                    var13 = var14.out;
                    var12 = var12[var16];
                    var12 = var17.bind(var15)(var12);
                    var12 = var12.Easing;
                    var12 = var12.ease;
                    var12 = var13.bind(var14)(var12);
                    var1['easing'] = var12;
                    var1 = var6.bind(var10)(var11, var1);
                    var2 = var3.bind(var5)(var2, var1);
                    var1 = _closure2_slot7;
                    var10 = 16;
                    if(!var1) { _fun0006_ip = 171; continue _fun0006 }
 169:
                    var10 = 0;
 171:
                    var1 = {};
                    var1['opacity'] = var2;
                    var3 = {};
                    var5 = _closure2_slot4;
                    var2 = var10;
                    if(var5) { _fun0006_ip = 325; continue _fun0006 }
 192:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var16];
                    var6 = var6.bind(var15)(var5);
                    var5 = var6.withDelay;
                    var9 = _closure2_slot7;
                    var7 = 0;
                    if(!var9) { _fun0006_ip = 230; continue _fun0006 }
 224:
                    var7 = 400;
 230:
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = var11[var4];
                    var9 = var14.bind(var15)(var4);
                    var8 = var9.withTiming;
                    var4 = {};
                    var12 = 200;
                    var4['duration'] = var12;
                    var12 = var11[var16];
                    var12 = var14.bind(var15)(var12);
                    var13 = var12.Easing;
                    var12 = var13.out;
                    var11 = var11[var16];
                    var11 = var14.bind(var15)(var11);
                    var11 = var11.Easing;
                    var11 = var11.ease;
                    var11 = var12.bind(var13)(var11);
                    var4['easing'] = var11;
                    var4 = var8.bind(var9)(var10, var4);
                    var2 = var5.bind(var6)(var7, var4);
 325:
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var18 = {};
            var18['showMemberCount'] = var19;
            var19 = var1[var11];
            var19 = var2.bind(var4)(var19);
            var19 = var19.withDelay;
            var18['withDelay'] = var19;
            var19 = var1[var23];
            var19 = var2.bind(var4)(var19);
            var19 = var19.withTiming;
            var18['withTiming'] = var19;
            var19 = var1[var11];
            var19 = var2.bind(var4)(var19);
            var19 = var19.Easing;
            var18['Easing'] = var19;
            var18['useReducedMotion'] = var22;
            var5['__closure'] = var18;
            var18 = 9518487706997.0;
            var5['__workletHash'] = var18;
            var18 = _closure1_slot14;
            var5['__initData'] = var18;
            var20 = var14.bind(var16)(var5);
            var1 = var1[var11];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var21 = var1.bind(var2)(var3);
            _closure2_slot10 = var21;
            var28 = var6;
            if(!var6) { _fun0001_ip = 766; continue _fun0001 }
 760:
            var28 = var8.isUnseen;
 766:
            _closure2_slot11 = var28;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 17;
            var2 = var1[var2];
            var16 = var5.bind(var4)(var2);
            var14 = var16.useToken;
            var2 = _closure1_slot1;
            var18 = 9;
            var3 = var1[var18];
            var3 = var2.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_MODIFIER_ACCENT;
            var26 = var14.bind(var16)(var3);
            _closure2_slot12 = var26;
            var3 = 18;
            var3 = var1[var3];
            var16 = var5.bind(var4)(var3);
            var14 = var16.useColorValue;
            var3 = _closure1_slot9;
            var3 = var3.BRAND_500;
            var27 = var14.bind(var16)(var3);
            _closure2_slot13 = var27;
            var3 = var1[var11];
            var16 = var5.bind(var4)(var3);
            var14 = var16.useAnimatedStyle;
            var3 = function W() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0007_ip = 58; continue _fun0007 }
 10:
                    var5 = _closure2_slot12;
                    var1 = _closure2_slot5;
                    var4 = '3D';
                    if(!var1) { _fun0007_ip = 33; continue _fun0007 }
 27:
                    var4 = '87';
 33:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var1 = '';
                    var12 = var3.bind(var1)(var5, var4);
                    _fun0007_ip = 96; continue _fun0007;
 58:
                    var1 = _closure2_slot13;
                    var5 = var1.hex;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var1 = 'FF';
                    var12 = var4.bind(var3)(var5, var1);
 96:
                    var1 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var16 = 13;
                    var3 = var10[var16];
                    var15 = undefined;
                    var5 = var9.bind(var15)(var3);
                    var4 = var5.withSequence;
                    var6 = 14;
                    var3 = var10[var6];
                    var8 = var9.bind(var15)(var3);
                    var7 = var8.withTiming;
                    var3 = {};
                    var13 = 1;
                    var3['duration'] = var13;
                    var13 = var10[var16];
                    var13 = var9.bind(var15)(var13);
                    var17 = var13.Easing;
                    var14 = var17.in;
                    var13 = var10[var16];
                    var13 = var9.bind(var15)(var13);
                    var13 = var13.Easing;
                    var13 = var13.ease;
                    var13 = var14.bind(var17)(var13);
                    var3['easing'] = var13;
                    var3 = var7.bind(var8)(var12, var3);
                    var7 = var10[var16];
                    var8 = var9.bind(var15)(var7);
                    var7 = var8.withDelay;
                    var6 = var10[var6];
                    var10 = var9.bind(var15)(var6);
                    var9 = var10.withTiming;
                    var13 = _closure2_slot12;
                    var2 = _closure2_slot5;
                    var12 = '3D';
                    if(!var2) { _fun0007_ip = 265; continue _fun0007 }
 259:
                    var12 = '87';
 265:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = '';
                    var6 = var6.bind(var2)(var13, var12);
                    var2 = {};
                    var12 = 300;
                    var2['duration'] = var12;
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var12 = var11[var16];
                    var12 = var14.bind(var15)(var12);
                    var13 = var12.Easing;
                    var12 = var13.out;
                    var11 = var11[var16];
                    var11 = var14.bind(var15)(var11);
                    var11 = var11.Easing;
                    var11 = var11.ease;
                    var11 = var12.bind(var13)(var11);
                    var2['easing'] = var11;
                    var6 = var9.bind(var10)(var6, var2);
                    var2 = 500;
                    var2 = var7.bind(var8)(var2, var6);
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderColor'] = var2;
                    return var1;
                }
            };
            var19 = {};
            var19['isNew'] = var28;
            var19['brandColor'] = var27;
            var19['defaultColor'] = var26;
            var19['isDarkTheme'] = var25;
            var25 = var1[var11];
            var25 = var5.bind(var4)(var25);
            var25 = var25.withSequence;
            var19['withSequence'] = var25;
            var23 = var1[var23];
            var23 = var5.bind(var4)(var23);
            var23 = var23.withTiming;
            var19['withTiming'] = var23;
            var23 = var1[var11];
            var23 = var5.bind(var4)(var23);
            var23 = var23.Easing;
            var19['Easing'] = var23;
            var23 = var1[var11];
            var23 = var5.bind(var4)(var23);
            var23 = var23.withDelay;
            var19['withDelay'] = var23;
            var3['__closure'] = var19;
            var19 = 4261140982708.0;
            var3['__workletHash'] = var19;
            var19 = _closure1_slot15;
            var3['__initData'] = var19;
            var14 = var14.bind(var16)(var3);
            var3 = var1[var11];
            var16 = var5.bind(var4)(var3);
            var5 = var16.useAnimatedStyle;
            var3 = function $() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0008_ip = 46; continue _fun0008 }
 10:
                    var1 = {};
                    var3 = {};
                    var4 = _closure2_slot10;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    _fun0008_ip = 48; continue _fun0008;
 46:
                    var1 = {};
 48:
                    return var1;
                }
            };
            var19 = {};
            var19['useReducedMotion'] = var22;
            var19['scale'] = var21;
            var3['__closure'] = var19;
            var19 = 319662489785.0;
            var3['__workletHash'] = var19;
            var19 = _closure1_slot16;
            var3['__initData'] = var19;
            var16 = var5.bind(var16)(var3);
            var3 = _closure1_slot11;
            var1 = var1[var11];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = new Array(4);
            var5[0] = var16;
            var5[1] = var14;
            var14 = var10.container;
            var5[2] = var14;
            var14 = var9;
            if(!var14) { _fun0001_ip = 1154; continue _fun0001 }
 1148:
            var14 = var10.selected;
 1154:
            var5[3] = var14;
            var1['style'] = var5;
            var16 = _closure1_slot11;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 19;
            var5 = var19[var5];
            var5 = var14.bind(var4)(var5);
            var14 = var5.PressableOpacity;
            var5 = {};
            var19 = 0.6;
            var5['activeOpacity'] = var19;
            var21 = var10.optionButton;
            var19 = new Array(1);
            var19[0] = var21;
            var5['style'] = var19;
            var19 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var3 = !var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot3;
                    if(var3) { _fun0009_ip = 44; continue _fun0009 }
 28:
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot1;
                    var2 = !var2;
                    var2 = var3.bind(var1)(var2);
 44:
                    return var1;
                }
            };
            var5['onPress'] = var19;
            var19 = function onPressIn() {
                var4 = _closure2_slot10;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 13;
                var5 = var14[var2];
                var1 = undefined;
                var7 = var13.bind(var1)(var5);
                var6 = var7.withSequence;
                var8 = 14;
                var5 = var14[var8];
                var11 = var13.bind(var1)(var5);
                var10 = var11.withTiming;
                var9 = {};
                var5 = 0;
                var9['duration'] = var5;
                var5 = 1;
                var5 = var10.bind(var11)(var5, var9);
                var8 = var14[var8];
                var10 = var13.bind(var1)(var8);
                var9 = var10.withTiming;
                var8 = {};
                var11 = 200;
                var8['duration'] = var11;
                var11 = var14[var2];
                var11 = var13.bind(var1)(var11);
                var12 = var11.Easing;
                var11 = var12.out;
                var2 = var14[var2];
                var2 = var13.bind(var1)(var2);
                var2 = var2.Easing;
                var2 = var2.ease;
                var2 = var11.bind(var12)(var2);
                var8['easing'] = var2;
                var2 = 1.02;
                var2 = var9.bind(var10)(var2, var8);
                var2 = var6.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['onPressIn'] = var19;
            var17 = function onPressOut() {
                var4 = _closure2_slot10;
                var3 = var4.set;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 14;
                var2 = var11[var1];
                var1 = undefined;
                var7 = var10.bind(var1)(var2);
                var6 = var7.withTiming;
                var5 = {};
                var2 = 100;
                var5['duration'] = var2;
                var2 = 13;
                var8 = var11[var2];
                var8 = var10.bind(var1)(var8);
                var9 = var8.Easing;
                var8 = var9.out;
                var2 = var11[var2];
                var2 = var10.bind(var1)(var2);
                var2 = var2.Easing;
                var2 = var2.ease;
                var2 = var8.bind(var9)(var2);
                var5['easing'] = var2;
                var2 = 1;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['onPressOut'] = var17;
            var19 = var12 == var8;
            var17 = undefined;
            if(var19) { _fun0001_ip = 1291; continue _fun0001 }
 1271:
            var19 = var8.emoji;
            var21 = var12 == var19;
            var17 = undefined;
            if(var21) { _fun0001_ip = 1291; continue _fun0001 }
 1286:
            var17 = var19.id;
 1291:
            var17 = var12 != var17;
            if(var17) { _fun0001_ip = 1331; continue _fun0001 }
 1298:
            var21 = var12 == var8;
            var19 = undefined;
            if(var21) { _fun0001_ip = 1327; continue _fun0001 }
 1307:
            var21 = var8.emoji;
            var22 = var12 == var21;
            var19 = undefined;
            if(var22) { _fun0001_ip = 1327; continue _fun0001 }
 1322:
            var19 = var21.name;
 1327:
            var17 = var12 != var19;
 1331:
            if(!var17) { _fun0001_ip = 1547; continue _fun0001 }
 1337:
            var22 = _closure1_slot10;
            var21 = _closure1_slot5;
            var19 = {};
            var23 = {'display': 'flex', 'alignItems': 'center'};
            var19['style'] = var23;
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var23 = 20;
            var23 = var26[var23];
            var25 = var25.bind(var4)(var23);
            var23 = {};
            var26 = var10.optionTextEmoji;
            var23['textEmojiStyle'] = var26;
            var26 = var10.optionImageEmoji;
            var23['fastImageStyle'] = var26;
            var27 = var12 != var30;
            var26 = undefined;
            if(!var27) { _fun0001_ip = 1479; continue _fun0001 }
 1418:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var27 = 21;
            var27 = var29[var27];
            var29 = var28.bind(var4)(var27);
            var28 = var29.getEmojiURL;
            var27 = {};
            var31 = var30.id;
            var27['id'] = var31;
            var30 = var30.animated;
            var27['animated'] = var30;
            var30 = _closure1_slot8;
            var27['size'] = var30;
            var26 = var28.bind(var29)(var27);
 1479:
            var23['src'] = var26;
            var26 = var12 == var8;
            var27 = undefined;
            if(var26) { _fun0001_ip = 1513; continue _fun0001 }
 1493:
            var26 = var8.emoji;
            var28 = var12 == var26;
            var27 = undefined;
            if(var28) { _fun0001_ip = 1513; continue _fun0001 }
 1508:
            var27 = var26.name;
 1513:
            var28 = var12 != var27;
            var26 = '';
            if(!var28) { _fun0001_ip = 1527; continue _fun0001 }
 1524:
            var26 = var27;
 1527:
            var23['name'] = var26;
            var23 = var22.bind(var4)(var25, var23);
            var19['children'] = var23;
            var17 = var22.bind(var4)(var21, var19);
 1547:
            var19 = new Array(2);
            var19[0] = var17;
            var23 = _closure1_slot11;
            var22 = _closure1_slot5;
            var21 = {};
            var17 = var10.optionText;
            var21['style'] = var17;
            var27 = _closure1_slot10;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 22;
            var25 = var25[var17];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var28 = var8.title;
            var25['children'] = var28;
            var26 = var27.bind(var4)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var26 = var8.description;
            var26 = var12 != var26;
            if(!var26) { _fun0001_ip = 1663; continue _fun0001 }
 1649:
            var27 = var8.description;
            var27 = var27.length;
            var26 = var27 > var13;
 1663:
            if(!var26) { _fun0001_ip = 1717; continue _fun0001 }
 1666:
            var29 = _closure1_slot10;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var17];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Text;
            var27 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var30 = var8.description;
            var27['children'] = var30;
            var26 = var29.bind(var4)(var28, var27);
 1717:
            var25[1] = var26;
            var21['children'] = var25;
            var21 = var23.bind(var4)(var22, var21);
            var19[1] = var21;
            var5['children'] = var19;
            var14 = var16.bind(var4)(var14, var5);
            var5 = new Array(4);
            var5[0] = var14;
            var13 = var24 > var13;
            var12 = null;
            if(!var13) { _fun0001_ip = 1924; continue _fun0001 }
 1765:
            var16 = _closure1_slot10;
            var14 = _closure1_slot1;
            var25 = _closure1_slot2;
            var13 = var25[var11];
            var13 = var14.bind(var4)(var13);
            var14 = var13.View;
            var13 = {};
            var21 = var10.roleCount;
            var19 = new Array(2);
            var19[0] = var21;
            var19[1] = var20;
            var13['style'] = var19;
            var21 = _closure1_slot0;
            var17 = var25[var17];
            var17 = var21.bind(var4)(var17);
            var19 = var17.Text;
            var17 = {'variant': 'text-xs/semibold', 'color': 'always-white'};
            var20 = 23;
            var22 = var25[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.format;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.EgKsZG;
            var20 = {};
            var20['memberCount'] = var24;
            var20 = var22.bind(var23)(var21, var20);
            var17['children'] = var20;
            var17 = var16.bind(var4)(var19, var17);
            var13['children'] = var17;
            var12 = var16.bind(var4)(var14, var13);
 1924:
            var5[1] = var12;
            var13 = _closure1_slot10;
            var17 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = var16[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.View;
            var11 = {};
            var19 = var10.checkIcon;
            var14 = new Array(2);
            var14[0] = var19;
            var14[1] = var15;
            var11['style'] = var14;
            var15 = _closure1_slot0;
            var14 = 24;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.CheckmarkSmallIcon;
            var14 = {};
            var19 = 'xs';
            var14['size'] = var19;
            var16 = var16[var18];
            var16 = var17.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.WHITE;
            var14['color'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var5[2] = var11;
            if(!var6) { _fun0001_ip = 2060; continue _fun0001 }
 2057:
            var6 = !var9;
 2060:
            if(!var6) { _fun0001_ip = 2069; continue _fun0001 }
 2063:
            var6 = var8.isUnseen;
 2069:
            if(!var6) { _fun0001_ip = 2210; continue _fun0001 }
 2075:
            var9 = _closure1_slot10;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 25;
            var7 = var15[var11];
            var7 = var14.bind(var4)(var7);
            var8 = var7.TextBadge;
            var7 = {};
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.BadgeColors;
            var11 = var11.BRAND;
            var7['color'] = var11;
            var11 = 23;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.y2b7CA;
            var11 = var12.bind(var13)(var11);
            var7['text'] = var11;
            var11 = var10.newBadgeWrapper;
            var7['style'] = var11;
            var10 = var10.newBadge;
            var7['textStyle'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 2210:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();