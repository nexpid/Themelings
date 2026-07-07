// app/modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'borderRadius': null, 'borderWidth': 2, 'borderStyle': 'solid', 'marginBottom': 8};
    var11 = 8;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var4['borderRadius'] = var10;
    var7['container'] = var4;
    var4 = {'paddingVertical': 12, 'paddingHorizontal': 16, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var7['optionButton'] = var4;
    var4 = 24;
    var10 = {'fontSize': 24, 'lineHeight': 24, 'marginRight': 12, 'paddingTop': 5};
    var7['optionTextEmoji'] = var10;
    var10 = {'height': 24, 'width': 24, 'marginRight': 12};
    var7['optionImageEmoji'] = var10;
    var10 = {};
    var10['flexShrink'] = var13;
    var7['optionText'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967290, 'width': 20, 'height': 20, 'backgroundColor': null, 'borderRadius': 10, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10['backgroundColor'] = var13;
    var7['checkIcon'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967290};
    var7['newBadgeWrapper'] = var10;
    var10 = {};
    var13 = 'bold';
    var10['fontWeight'] = var13;
    var7['newBadge'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967290, 'right': 24, 'paddingVertical': 2, 'paddingHorizontal': 6, 'backgroundColor': null, 'borderRadius': 10, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var10['backgroundColor'] = var11;
    var7['roleCount'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var7 = {};
    var8 = 'function GuildOnboardingPromptOptionButtonTsx1(){const{selected,withTiming,Easing,useReducedMotion,withSequence,withSpring}=this.__closure;const rawOpacity=selected?1:0;const opacity=withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)});const rawScale=selected?1:0.7;const scale=useReducedMotion?rawScale:withSequence(withSpring(rawScale*1.2,{stiffness:80,damping:6,mass:0.3}),withSpring(rawScale,{stiffness:80,damping:6,mass:0.3}));return{opacity:opacity,transform:[{scale:scale}]};}';
    var7['code'] = var8;
    var _closure1_slot12 = var7;
    var7 = {};
    var8 = 'function GuildOnboardingPromptOptionButtonTsx2(){const{showMemberCount,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showMemberCount?1:0;const opacity=withDelay(showMemberCount?400:0,withTiming(rawOpacity,{duration:150,easing:Easing.out(Easing.ease)}));const rawTranslate=showMemberCount?0:16;const translateX=useReducedMotion?rawTranslate:withDelay(showMemberCount?400:0,withTiming(rawTranslate,{duration:200,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateX:translateX}]};}';
    var7['code'] = var8;
    var _closure1_slot13 = var7;
    var7 = {};
    var8 = "function GuildOnboardingPromptOptionButtonTsx3(){const{useReducedMotion,Easing,withTiming,selected,selectedBorderColor,isNew,unselectedBrandBorderColor,unselectedBorderColor,selectedBackgroundColor}=this.__closure;const timing=useReducedMotion?{duration:0}:{duration:200,easing:Easing.out(Easing.ease)};return{borderColor:withTiming(selected?selectedBorderColor:isNew?unselectedBrandBorderColor:unselectedBorderColor,timing),backgroundColor:withTiming(selected?selectedBackgroundColor:'transparent',timing)};}";
    var7['code'] = var8;
    var _closure1_slot14 = var7;
    var7 = {};
    var8 = 'function GuildOnboardingPromptOptionButtonTsx4(){const{useReducedMotion,scale}=this.__closure;return useReducedMotion?{}:{transform:[{scale:scale.get()}]};}';
    var7['code'] = var8;
    var _closure1_slot15 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingPromptOptionButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PromptOptionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var1 = _closure1_slot11;
            var10 = var1.bind(var4)();
            var15 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var3 = var5[var1];
            var13 = var15.bind(var4)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var2 = var6 == var1;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var2 = var2.emoji;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var1 = var2.id;
case 2:
                    var2 = var6 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure1_slot7;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot0;
                    var8 = var6 == var2;
                    var2 = undefined;
                    if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var5 = _closure2_slot0;
                    var5 = var5.emoji;
                    var6 = var6 == var5;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                    var2 = var5.id;
case 7:
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var29 = var12.bind(var13)(var11, var3);
            var1 = var5[var1];
            var12 = var15.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var25 = var11.bind(var12)(var3, var1);
            var _closure2_slot4 = var25;
            var11 = 10;
            var1 = var5[var11];
            var12 = var15.bind(var4)(var1);
            var3 = var12.useAnimatedStyle;
            var1 = function D() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = 0;
                    if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var7 = 1;
case 10:
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 11;
                    var1 = var8[var1];
                    var9 = undefined;
                    var6 = var12.bind(var9)(var1);
                    var3 = var6.withTiming;
                    var1 = {};
                    var4 = 150;
                    var1['duration'] = var4;
                    var4 = 10;
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
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var10 = 1;
case 12:
                    var1 = {};
                    var1['opacity'] = var3;
                    var3 = {};
                    var6 = _closure2_slot4;
                    var2 = var10;
                    if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = var11[var4];
                    var7 = var8.bind(var9)(var4);
                    var6 = var7.withSequence;
                    var4 = 12;
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
case 14:
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['selected'] = var9;
            var31 = 11;
            var14 = var5[var31];
            var14 = var15.bind(var4)(var14);
            var14 = var14.withTiming;
            var13['withTiming'] = var14;
            var14 = var5[var11];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Easing;
            var13['Easing'] = var14;
            var13['useReducedMotion'] = var25;
            var14 = var5[var11];
            var14 = var15.bind(var4)(var14);
            var14 = var14.withSequence;
            var13['withSequence'] = var14;
            var14 = 12;
            var14 = var5[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.withSpring;
            var13['withSpring'] = var14;
            var1['__closure'] = var13;
            var13 = 8281627194581.0;
            var1['__workletHash'] = var13;
            var13 = _closure1_slot12;
            var1['__initData'] = var13;
            var15 = var3.bind(var12)(var1);
            var3 = _closure1_slot1;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var _closure2_slot5 = var1;
            var12 = null;
            var1 = var12 == var1;
            var13 = 0;
            var24 = 0;
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var8.roleIds;
            var1 = var12 == var1;
            var24 = 0;
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var14 = var8.roleIds;
            var5 = var14.map;
            var1 = function(arg1) {
                var2 = _closure2_slot5;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var34 = var5.bind(var14)(var1);
            var1 = new Array(0);
            var35 = var1;
            var33 = 0;
            var5 = arraySpread(var35, var34, var33);
            var35 = var2;
            var34 = var1;
            var33 = var3;
            var24 = apply(var35, var34, var33);
case 16:
            _closure2_slot6 = var24;
            var14 = _closure1_slot4;
            var1 = var14.useState;
            var2 = false;
            var5 = var1.bind(var14)(var2);
            var3 = _closure1_slot3;
            var1 = 2;
            var1 = var3.bind(var4)(var5, var1);
            var18 = var1[var13];
            _closure2_slot7 = var18;
            var3 = 1;
            var1 = var1[var3];
            _closure2_slot8 = var1;
            var1 = var14.useRef;
            var1 = var1.bind(var14)(var12);
            _closure2_slot9 = var1;
            var16 = var14.useEffect;
            var5 = new Array(1);
            var5[0] = var18;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot7;
                    if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 11:
                    var3 = undefined;
                    return var3;
case 19:
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
case 0:
                            var2 = _closure2_slot9;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var1 = _closure2_slot9;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 2:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var16.bind(var14)(var1, var5);
            var1 = var14.useRef;
            var1 = var1.bind(var14)(var2);
            _closure2_slot10 = var1;
            var5 = var14.useEffect;
            var2 = new Array(2);
            var2[0] = var18;
            var2[1] = var24;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    if(var2) { _fun0006_ip = 20; continue _fun0006 }
case 22:
                    var3 = _closure2_slot6;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0006_ip = 20; continue _fun0006 }
case 23:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 14;
                    var2 = var9[var2];
                    var3 = undefined;
                    var2 = var8.bind(var3)(var2);
                    var5 = var2.AccessibilityAnnouncer;
                    var4 = var5.announce;
                    var2 = 15;
                    var6 = var9[var2];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.iyXfAn;
                    var2 = {};
                    var8 = _closure2_slot6;
                    var2['memberCount'] = var8;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = 'polite';
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = _closure2_slot10;
                    var2 = true;
                    var3['current'] = var2;
                    _fun0006_ip = 24; continue _fun0006;
case 20:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var2 = _closure2_slot10;
                    var1 = false;
                    var2['current'] = var1;
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var14)(var1, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = var1[var11];
            var16 = var2.bind(var4)(var5);
            var14 = var16.useAnimatedStyle;
            var5 = function L() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var11 = 0;
                    if(!var1) { _fun0007_ip = 10; continue _fun0007 }
case 11:
                    var11 = 1;
case 10:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var16 = 10;
                    var1 = var1[var16];
                    var15 = undefined;
                    var5 = var2.bind(var15)(var1);
                    var3 = var5.withDelay;
                    var1 = _closure2_slot7;
                    var2 = 0;
                    if(!var1) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var2 = 400;
case 26:
                    var17 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 11;
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
                    if(!var1) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var10 = 0;
case 28:
                    var1 = {};
                    var1['opacity'] = var2;
                    var3 = {};
                    var5 = _closure2_slot4;
                    var2 = var10;
                    if(var5) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var16];
                    var6 = var6.bind(var15)(var5);
                    var5 = var6.withDelay;
                    var9 = _closure2_slot7;
                    var7 = 0;
                    if(!var9) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var7 = 400;
case 32:
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
case 30:
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var17['showMemberCount'] = var18;
            var18 = var1[var11];
            var18 = var2.bind(var4)(var18);
            var18 = var18.withDelay;
            var17['withDelay'] = var18;
            var18 = var1[var31];
            var18 = var2.bind(var4)(var18);
            var18 = var18.withTiming;
            var17['withTiming'] = var18;
            var18 = var1[var11];
            var18 = var2.bind(var4)(var18);
            var18 = var18.Easing;
            var17['Easing'] = var18;
            var17['useReducedMotion'] = var25;
            var5['__closure'] = var17;
            var17 = 9518487706997.0;
            var5['__workletHash'] = var17;
            var17 = _closure1_slot13;
            var5['__initData'] = var17;
            var20 = var14.bind(var16)(var5);
            var1 = var1[var11];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var19 = var1.bind(var2)(var3);
            _closure2_slot11 = var19;
            var28 = var6;
            if(!var6) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var28 = var8.isUnseen;
case 34:
            _closure2_slot12 = var28;
            var2 = var12 == var8;
            var1 = undefined;
            if(var2) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var2 = var8.emoji;
            var3 = var12 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var1 = var2.id;
case 36:
            var1 = var12 != var1;
            if(var1) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = var12 == var8;
            var2 = undefined;
            if(var3) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = var8.emoji;
            var5 = var12 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 41; continue _fun0001 }
case 43:
            var2 = var3.name;
case 41:
            var1 = var12 != var2;
case 39:
            _closure2_slot13 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(4);
            var2[0] = var1;
            var14 = var8.emoji;
            var16 = var12 == var14;
            var1 = undefined;
            if(var16) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var1 = var14.name;
case 44:
            var2[1] = var1;
            var1 = var8.title;
            var2[2] = var1;
            var1 = var8.description;
            var2[3] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot13;
                    var1 = _closure2_slot0;
                    if(var2) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var3 = var1.description;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 48; continue _fun0008 }
case 22:
                    var2 = _closure2_slot0;
                    var2 = var2.description;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0008_ip = 49; continue _fun0008 }
case 48:
                    var2 = _closure2_slot0;
                    var2 = var2.title;
                    _fun0008_ip = 50; continue _fun0008;
case 49:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 15;
                    var5 = var9[var3];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var7 = var5.intl;
                    var5 = var7.formatToPlainString;
                    var3 = var9[var3];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.U4lDOC;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.title;
                    var3['title'] = var9;
                    var8 = var8.description;
                    var3['description'] = var8;
                    var2 = var5.bind(var7)(var4, var3);
case 50:
                    return var2;
case 46:
                    var3 = var1.emoji;
                    var2 = null;
                    var4 = var2 == var3;
                    var8 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 25; continue _fun0008 }
case 51:
                    var1 = var3.name;
case 25:
                    var3 = var2 != var1;
                    var5 = '';
                    var4 = var5;
                    if(!var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var4 = var1;
case 52:
                    var3 = var4.replace;
                    var1 = /^:|:$/g;
                    var7 = var3.bind(var4)(var1, var5);
                    var1 = _closure2_slot0;
                    var1 = var1.description;
                    if(!(var2 != var1)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var1 = _closure2_slot0;
                    var1 = var1.description;
                    var2 = var1.length;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0008_ip = 56; continue _fun0008 }
case 54:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 15;
                    var3 = var5[var1];
                    var3 = var2.bind(var8)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var5[var1];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.t;
                    var2 = var1.rBPpAN;
                    var1 = {};
                    var1['emojiName'] = var7;
                    var5 = _closure2_slot0;
                    var5 = var5.title;
                    var1['title'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0008_ip = 57; continue _fun0008;
case 56:
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var4 = var9[var2];
                    var4 = var3.bind(var8)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var3.bind(var8)(var2);
                    var2 = var2.t;
                    var3 = var2.nSzqkg;
                    var2 = {};
                    var2['emojiName'] = var7;
                    var6 = _closure2_slot0;
                    var7 = var6.title;
                    var2['title'] = var7;
                    var6 = var6.description;
                    var2['description'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 57:
                    return var1;
                }
            };
            var16 = var3.bind(var5)(var1, var2);
            var14 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 16;
            var2 = var22[var1];
            var17 = var14.bind(var4)(var2);
            var5 = var17.useToken;
            var2 = _closure1_slot1;
            var18 = 8;
            var3 = var22[var18];
            var3 = var2.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BRAND;
            var27 = var5.bind(var17)(var3);
            _closure2_slot14 = var27;
            var3 = var22[var1];
            var17 = var14.bind(var4)(var3);
            var5 = var17.useToken;
            var3 = var22[var18];
            var3 = var2.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BORDER_SUBTLE;
            var26 = var5.bind(var17)(var3);
            _closure2_slot15 = var26;
            var3 = var22[var1];
            var17 = var14.bind(var4)(var3);
            var5 = var17.useToken;
            var3 = var22[var18];
            var3 = var2.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BORDER_STRONG;
            var30 = var5.bind(var17)(var3);
            _closure2_slot16 = var30;
            var1 = var22[var1];
            var5 = var14.bind(var4)(var1);
            var3 = var5.useToken;
            var1 = var22[var18];
            var1 = var2.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOWEST;
            var23 = var3.bind(var5)(var1);
            _closure2_slot17 = var23;
            var1 = var22[var11];
            var5 = var14.bind(var4)(var1);
            var3 = var5.useAnimatedStyle;
            var1 = function X() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var5 = {};
                    var1 = 200;
                    var5['duration'] = var1;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 10;
                    var2 = var8[var1];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.Easing;
                    var2 = var3.out;
                    var1 = var8[var1];
                    var1 = var7.bind(var4)(var1);
                    var1 = var1.Easing;
                    var1 = var1.ease;
                    var1 = var2.bind(var3)(var1);
                    var5['easing'] = var1;
                    _fun0009_ip = 60; continue _fun0009;
case 58:
                    var1 = {};
                    var2 = 0;
                    var1['duration'] = var2;
                    var5 = var1;
case 60:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 11;
                    var3 = var3[var7];
                    var4 = undefined;
                    var9 = var8.bind(var4)(var3);
                    var8 = var9.withTiming;
                    var3 = _closure2_slot1;
                    if(var3) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var3 = _closure2_slot12;
                    if(var3) { _fun0009_ip = 63; continue _fun0009 }
case 50:
                    var3 = _closure2_slot15;
                    _fun0009_ip = 64; continue _fun0009;
case 63:
                    var3 = _closure2_slot14;
case 64:
                    _fun0009_ip = 65; continue _fun0009;
case 61:
                    var3 = _closure2_slot16;
case 65:
                    var3 = var8.bind(var9)(var3, var5);
                    var1['borderColor'] = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.withTiming;
                    var7 = _closure2_slot1;
                    var2 = 'transparent';
                    if(!var7) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var2 = _closure2_slot17;
case 66:
                    var2 = var3.bind(var4)(var2, var5);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var17['useReducedMotion'] = var25;
            var32 = var22[var11];
            var32 = var14.bind(var4)(var32);
            var32 = var32.Easing;
            var17['Easing'] = var32;
            var31 = var22[var31];
            var31 = var14.bind(var4)(var31);
            var31 = var31.withTiming;
            var17['withTiming'] = var31;
            var17['selected'] = var9;
            var17['selectedBorderColor'] = var30;
            var17['isNew'] = var28;
            var17['unselectedBrandBorderColor'] = var27;
            var17['unselectedBorderColor'] = var26;
            var17['selectedBackgroundColor'] = var23;
            var1['__closure'] = var17;
            var17 = 17180171486485.0;
            var1['__workletHash'] = var17;
            var17 = _closure1_slot14;
            var1['__initData'] = var17;
            var23 = var3.bind(var5)(var1);
            var1 = var22[var11];
            var5 = var14.bind(var4)(var1);
            var3 = var5.useAnimatedStyle;
            var1 = function F() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0010_ip = 68; continue _fun0010 }
case 59:
                    var1 = {};
                    var3 = {};
                    var4 = _closure2_slot11;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    _fun0010_ip = 48; continue _fun0010;
case 68:
                    var1 = {};
case 48:
                    return var1;
                }
            };
            var17 = {};
            var17['useReducedMotion'] = var25;
            var17['scale'] = var19;
            var1['__closure'] = var17;
            var17 = 319662489785.0;
            var1['__workletHash'] = var17;
            var17 = _closure1_slot15;
            var1['__initData'] = var17;
            var25 = var3.bind(var5)(var1);
            var1 = 17;
            var1 = var22[var1];
            var5 = var14.bind(var4)(var1);
            var3 = var5.useCheckboxA11yNative;
            var1 = {};
            var1['checked'] = var9;
            var1 = var3.bind(var5)(var1);
            var19 = var1.accessibilityRole;
            var17 = var1.accessibilityState;
            var3 = _closure1_slot10;
            var1 = var22[var11];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = new Array(3);
            var5[0] = var25;
            var5[1] = var23;
            var23 = var10.container;
            var5[2] = var23;
            var1['style'] = var5;
            var5 = 18;
            var5 = var22[var5];
            var5 = var14.bind(var4)(var5);
            var14 = var5.PressableOpacity;
            var5 = {};
            var22 = 0.6;
            var5['activeOpacity'] = var22;
            var23 = var10.optionButton;
            var22 = new Array(1);
            var22[0] = var23;
            var5['style'] = var22;
            var22 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var3 = !var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot3;
                    if(var3) { _fun0011_ip = 69; continue _fun0011 }
case 22:
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot1;
                    var2 = !var2;
                    var2 = var3.bind(var1)(var2);
case 69:
                    return var1;
                }
            };
            var5['onPress'] = var22;
            var22 = function onPressIn() {
                var4 = _closure2_slot11;
                var3 = var4.set;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 10;
                var5 = var14[var2];
                var1 = undefined;
                var7 = var13.bind(var1)(var5);
                var6 = var7.withSequence;
                var8 = 11;
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
            var5['onPressIn'] = var22;
            var21 = function onPressOut() {
                var4 = _closure2_slot11;
                var3 = var4.set;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 11;
                var2 = var11[var1];
                var1 = undefined;
                var7 = var10.bind(var1)(var2);
                var6 = var7.withTiming;
                var5 = {};
                var2 = 100;
                var5['duration'] = var2;
                var2 = 10;
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
            var5['onPressOut'] = var21;
            var5['accessibilityRole'] = var19;
            var5['accessibilityState'] = var17;
            var5['accessibilityLabel'] = var16;
            var17 = var12 == var8;
            var16 = undefined;
            if(var17) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var17 = var8.emoji;
            var19 = var12 == var17;
            var16 = undefined;
            if(var19) { _fun0001_ip = 70; continue _fun0001 }
case 72:
            var16 = var17.id;
case 70:
            var17 = var12 != var16;
            if(var17) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            var19 = var12 == var8;
            var16 = undefined;
            if(var19) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var19 = var8.emoji;
            var21 = var12 == var19;
            var16 = undefined;
            if(var21) { _fun0001_ip = 75; continue _fun0001 }
case 77:
            var16 = var19.name;
case 75:
            var17 = var12 != var16;
case 73:
            if(!var17) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var21 = _closure1_slot9;
            var19 = _closure1_slot5;
            var16 = {};
            var22 = {'display': 'flex', 'alignItems': 'center'};
            var16['style'] = var22;
            var23 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 19;
            var22 = var25[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var25 = var10.optionTextEmoji;
            var22['textEmojiStyle'] = var25;
            var25 = var10.optionImageEmoji;
            var22['fastImageStyle'] = var25;
            var26 = var12 != var29;
            var25 = undefined;
            if(!var26) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 20;
            var26 = var28[var26];
            var28 = var27.bind(var4)(var26);
            var27 = var28.getEmojiURL;
            var26 = {};
            var30 = var29.id;
            var26['id'] = var30;
            var29 = var29.animated;
            var26['animated'] = var29;
            var29 = _closure1_slot8;
            var26['size'] = var29;
            var25 = var27.bind(var28)(var26);
case 80:
            var22['src'] = var25;
            var25 = var12 == var8;
            var26 = undefined;
            if(var25) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var25 = var8.emoji;
            var27 = var12 == var25;
            var26 = undefined;
            if(var27) { _fun0001_ip = 82; continue _fun0001 }
case 84:
            var26 = var25.name;
case 82:
            var27 = var12 != var26;
            var25 = '';
            if(!var27) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var25 = var26;
case 85:
            var22['name'] = var25;
            var22 = var21.bind(var4)(var23, var22);
            var16['children'] = var22;
            var17 = var21.bind(var4)(var19, var16);
case 78:
            var16 = new Array(2);
            var16[0] = var17;
            var22 = _closure1_slot10;
            var21 = _closure1_slot5;
            var19 = {};
            var17 = var10.optionText;
            var19['style'] = var17;
            var26 = _closure1_slot9;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 21;
            var23 = var23[var17];
            var23 = var25.bind(var4)(var23);
            var25 = var23.Text;
            var23 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var27 = var8.title;
            var23['children'] = var27;
            var25 = var26.bind(var4)(var25, var23);
            var23 = new Array(2);
            var23[0] = var25;
            var25 = var8.description;
            var25 = var12 != var25;
            if(!var25) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var26 = var8.description;
            var26 = var26.length;
            var25 = var26 > var13;
case 87:
            if(!var25) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var28 = _closure1_slot9;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var17];
            var26 = var27.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'text-xs/medium', 'color': 'text-default'};
            var29 = var8.description;
            var26['children'] = var29;
            var25 = var28.bind(var4)(var27, var26);
case 89:
            var23[1] = var25;
            var19['children'] = var23;
            var19 = var22.bind(var4)(var21, var19);
            var16[1] = var19;
            var5['children'] = var16;
            var14 = var3.bind(var4)(var14, var5);
            var5 = new Array(4);
            var5[0] = var14;
            var13 = var24 > var13;
            var12 = null;
            if(!var13) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var16 = _closure1_slot9;
            var14 = _closure1_slot1;
            var25 = _closure1_slot2;
            var13 = var25[var11];
            var13 = var14.bind(var4)(var13);
            var14 = var13.View;
            var13 = {'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var21 = var10.roleCount;
            var19 = new Array(2);
            var19[0] = var21;
            var19[1] = var20;
            var13['style'] = var19;
            var21 = _closure1_slot0;
            var17 = var25[var17];
            var17 = var21.bind(var4)(var17);
            var19 = var17.Text;
            var17 = {'variant': 'text-xs/semibold', 'color': 'text-overlay-light'};
            var20 = 15;
            var22 = var25[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.format;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.EgKsZA;
            var20 = {};
            var20['memberCount'] = var24;
            var20 = var22.bind(var23)(var21, var20);
            var17['children'] = var20;
            var17 = var16.bind(var4)(var19, var17);
            var13['children'] = var17;
            var12 = var16.bind(var4)(var14, var13);
case 91:
            var5[1] = var12;
            var13 = _closure1_slot9;
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
            var14 = 22;
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
            if(!var6) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var6 = !var9;
case 93:
            if(!var6) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var6 = var8.isUnseen;
case 95:
            if(!var6) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var9 = _closure1_slot9;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 23;
            var7 = var15[var11];
            var7 = var14.bind(var4)(var7);
            var8 = var7.TextBadge;
            var7 = {};
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.BadgeColors;
            var11 = var11.BRAND;
            var7['color'] = var11;
            var11 = 15;
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
case 97:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();