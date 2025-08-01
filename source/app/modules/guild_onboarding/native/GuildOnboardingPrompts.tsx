// app/modules/guild_onboarding/native/GuildOnboardingPrompts.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _getBackgroundGradientColor() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 135; continue _fun0001 }
 10:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var2 = var5[var2];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var2);
                    var4 = var5.getPaletteForAvatar;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=53);
 51:
                    return var2;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 132; continue _fun0001 }
 59:
                    var7 = _closure1_slot3;
                    var4 = 0;
                    var6 = var2[var4];
                    var5 = 3;
                    var5 = var7.bind(var8)(var6, var5);
                    var7 = var5[var4];
                    var4 = 1;
                    var6 = var5[var4];
                    var4 = 2;
                    var5 = var5[var4];
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 19;
                    var3 = var9[var3];
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.rgbToHex;
                    var3 = var3.bind(var4)(var7, var6, var5);
                    return var3;
 132:
                    return var2;
 135:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function showRulesInOnboarding(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0002_ip = 41; continue _fun0002 }
 12:
            var6 = var2.features;
            var5 = var6.has;
            var4 = _closure1_slot17;
            var4 = var4.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var1 = var5.bind(var6)(var4);
 41:
            if(!var1) { _fun0002_ip = 73; continue _fun0002 }
 44:
            var5 = var2.features;
            var4 = var5.has;
            var2 = _closure1_slot17;
            var2 = var2.MEMBER_VERIFICATION_GATE_ENABLED;
            var1 = var4.bind(var5)(var2);
 73:
            var1 = !var1;
            if(!var1) { _fun0002_ip = 86; continue _fun0002 }
 79:
            var2 = arg2;
            var1 = var3 != var2;
 86:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.StyleSheet;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OnboardingPromptType;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingModalStates;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot16 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot17 = var7;
    var7 = var4.MarketingURLs;
    var _closure1_slot18 = var7;
    var4 = var4.Routes;
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var7 = var4.Fragment;
    var _closure1_slot21 = var7;
    var4 = var4.jsxs;
    var _closure1_slot22 = var4;
    var4 = 15;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {'display': 'flex', 'flex': 1, 'flexGrow': 1, 'marginTop': null, 'marginBottom': 16};
    var10 = 16;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['marginTop'] = var10;
    var10 = 17;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOBILE_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'height': 48, 'width': '100%', 'left': 0};
    var4['scrollContainerGradient'] = var9;
    var9 = {'marginBottom': 16, 'opacity': 0.8};
    var4['subtitle'] = var9;
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var4['onboardingTitle'] = var9;
    var9 = {'position': 'absolute', 'paddingHorizontal': 16, 'display': 'flex', 'justifyContent': 'center', 'width': '100%', 'marginBottom': 16};
    var4['onboardingPolicy'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['onboardingPolicyText'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center'};
    var4['landingOverlay'] = var9;
    var9 = {'height': 350, 'position': 'relative', 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['artWrapper'] = var9;
    var9 = {'alignItems': 'center', 'marginTop': 4294967272, 'paddingHorizontal': 16};
    var4['landingBody'] = var9;
    var9 = {'position': 'absolute', 'height': '50%', 'width': '100%', 'top': 0};
    var4['backgroundImage'] = var9;
    var9 = {'position': 'absolute', 'height': '100%', 'width': '100%', 'top': 0};
    var4['backgroundColorGradient'] = var9;
    var9 = {'position': 'absolute', 'height': '100%', 'width': '100%', 'top': 0};
    var4['darkColorGradient'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = function BackgroundImageGradient(arg1) {
        var1 = arg1;
        var14 = var1.splashUrl;
        var10 = var1.color;
        var1 = _closure1_slot23;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot22;
        var2 = _closure1_slot21;
        var1 = {};
        var8 = _closure1_slot20;
        var7 = _closure1_slot1;
        var12 = _closure1_slot2;
        var5 = 20;
        var5 = var12[var5];
        var6 = var7.bind(var4)(var5);
        var5 = {};
        var13 = {};
        var13['uri'] = var14;
        var5['source'] = var13;
        var14 = var11.backgroundImage;
        var13 = new Array(1);
        var13[0] = var14;
        var5['style'] = var13;
        var13 = 'cover';
        var5['resizeMode'] = var13;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 21;
        var6 = var12[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var11 = var11.backgroundColorGradient;
        var6['style'] = var11;
        var11 = _closure1_slot0;
        var9 = 22;
        var13 = var12[var9];
        var13 = var11.bind(var4)(var13);
        var13 = var13.VerticalGradient;
        var13 = var13.START;
        var6['start'] = var13;
        var9 = var12[var9];
        var9 = var11.bind(var4)(var9);
        var9 = var9.VerticalGradient;
        var9 = var9.END;
        var6['end'] = var9;
        var9 = 19;
        var9 = var12[var9];
        var12 = var11.bind(var4)(var9);
        var11 = var12.hexWithOpacity;
        var9 = 0.16;
        var11 = var11.bind(var12)(var10, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var6['colors'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingPrompts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildOnboardingPrompt(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var37 = var3.guildId;
            var _closure2_slot0 = var37;
            var34 = var3.currentPromptIdx;
            var _closure2_slot1 = var34;
            var33 = var3.prompts;
            var _closure2_slot2 = var33;
            var32 = var3.selectOption;
            var9 = var3.onClose;
            var _closure2_slot3 = var9;
            var25 = var3.landingAnimation;
            var2 = var3.isFirstOpen;
            var7 = var3.backShouldLeaveGuild;
            var _closure2_slot4 = var7;
            var4 = undefined;
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
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var3 = _closure1_slot23;
            var15 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 23;
            var3 = var8[var12];
            var11 = var5.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getRulesPrompt;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var11)(var6, var3);
            var _closure2_slot5 = var6;
            var3 = var8[var12];
            var11 = var5.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var23 = var10.bind(var11)(var5, var3);
            var _closure2_slot6 = var23;
            var5 = _closure1_slot1;
            var3 = 24;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var16 = var3.bottom;
            if(!var2) { _fun0003_ip = 268; continue _fun0003 }
 262:
            var3 = 0;
            var2 = var3 === var34;
 268:
            _closure2_slot7 = var2;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 25;
            var3 = var10[var3];
            var5 = var11.bind(var4)(var3);
            var3 = var5.useNavigation;
            var14 = var3.bind(var5)();
            _closure2_slot8 = var14;
            var5 = var33.length;
            var3 = 0;
            var20 = var5 > var3;
            _closure2_slot9 = var20;
            var36 = var33[var34];
            _closure2_slot10 = var36;
            var8 = 26;
            var5 = var10[var8];
            var18 = var11.bind(var4)(var5);
            var13 = var18.useSharedValue;
            var5 = !var2;
            var31 = var13.bind(var18)(var5);
            _closure2_slot11 = var31;
            var19 = _closure1_slot5;
            var18 = var19.useCallback;
            var13 = new Array(2);
            var13[0] = var37;
            var13[1] = var33;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.completeOnboarding;
                var3 = _closure2_slot0;
                var2 = _closure2_slot2;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5 = var18.bind(var19)(var5, var13);
            _closure2_slot12 = var5;
            var13 = var10[var12];
            var21 = var11.bind(var4)(var13);
            var19 = var21.useStateFromStores;
            var13 = _closure1_slot11;
            var18 = new Array(1);
            var18[0] = var13;
            var13 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var29 = var19.bind(var21)(var18, var13);
            _closure2_slot13 = var29;
            var10 = var10[var12];
            var18 = var11.bind(var4)(var10);
            var13 = var18.useStateFromStoresArray;
            var10 = _closure1_slot13;
            var12 = new Array(1);
            var12[0] = var10;
            var11 = new Array(2);
            var11[0] = var37;
            var11[1] = var36;
            var10 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0004_ip = 19; continue _fun0004 }
 13:
                    var1 = new Array(0);
                    _fun0004_ip = 51; continue _fun0004;
 19:
                    var5 = _closure1_slot13;
                    var4 = var5.getOnboardingResponsesForPrompt;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot10;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 51:
                    return var1;
                }
            };
            var11 = var13.bind(var18)(var12, var10, var11);
            _closure2_slot14 = var11;
            var10 = var11.length;
            var10 = var3 === var10;
            if(!var10) { _fun0003_ip = 528; continue _fun0003 }
 508:
            var12 = null;
            var13 = var12 == var36;
            var12 = undefined;
            if(var13) { _fun0003_ip = 525; continue _fun0003 }
 519:
            var12 = var36.required;
 525:
            var10 = var12;
 528:
            _closure2_slot15 = var10;
            var12 = 1;
            var13 = var34 + var12;
            var10 = var33.length;
            var35 = var13 >= var10;
            if(!var35) { _fun0003_ip = 564; continue _fun0003 }
 551:
            var10 = _closure1_slot31;
            var10 = var10.bind(var4)(var29, var6);
            var35 = !var10;
 564:
            _closure2_slot16 = var35;
            var18 = _closure1_slot5;
            var13 = var18.useState;
            var19 = _closure1_slot1;
            var10 = _closure1_slot2;
            var30 = 17;
            var10 = var10[var30];
            var10 = var19.bind(var4)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.PRIMARY_800;
            var18 = var13.bind(var18)(var10);
            var13 = _closure1_slot3;
            var10 = 2;
            var10 = var13.bind(var4)(var18, var10);
            var22 = var10[var3];
            var10 = var10[var12];
            _closure2_slot17 = var10;
            var27 = null;
            var10 = var27 != var29;
            var24 = null;
            if(!var10) { _fun0003_ip = 732; continue _fun0003 }
 649:
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var10 = 28;
            var10 = var21[var10];
            var13 = var19.bind(var4)(var10);
            var12 = var13.getGuildSplashURL;
            var10 = {};
            var18 = var29.id;
            var10['id'] = var18;
            var18 = var29.splash;
            var10['splash'] = var18;
            var18 = 29;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.bind(var4)();
            var18 = 400;
            var18 = var18 * var19;
            var10['size'] = var18;
            var24 = var12.bind(var13)(var10);
 732:
            _closure2_slot18 = var24;
            var10 = _closure1_slot5;
            var18 = var10.useEffect;
            var13 = new Array(1);
            var13[0] = var24;
            var12 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot18;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 50; continue _fun0005 }
 15:
                    var4 = _closure2_slot18;
                    var3 = function getBackgroundGradientColor() {
                        var1 = undefined;
                        var4 = _closure1_slot30;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = undefined;
                    var3 = var3.bind(var2)(var4);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var3 = _closure2_slot17;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var18.bind(var10)(var12, var13);
            var13 = var10.useEffect;
            var12 = new Array(4);
            var12[0] = var37;
            var12[1] = var20;
            var12[2] = var6;
            var12[3] = var2;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0006_ip = 220; continue _fun0006 }
 13:
                    var3 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 30;
                    var1 = var13[var2];
                    var12 = undefined;
                    var16 = var3.bind(var12)(var1);
                    var15 = var16.track;
                    var1 = _closure1_slot16;
                    var14 = var1.GUILD_ONBOARDING_STEP_VIEWED;
                    var4 = {};
                    var10 = _closure1_slot0;
                    var9 = 31;
                    var6 = var13[var9];
                    var7 = var10.bind(var12)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var11 = _closure2_slot0;
                    var18 = var6.bind(var7)(var11);
                    var19 = var4;
                    var6 = copyDataProperties(var19, var18);
                    var8 = -1;
                    var7 = 'step';
                    var4[var7] = var8;
                    var6 = true;
                    var17 = 'required';
                    var4[var17] = var6;
                    var4 = var15.bind(var16)(var14, var4);
                    var2 = var13[var2];
                    var4 = var3.bind(var12)(var2);
                    var3 = var4.track;
                    var2 = var1.GUILD_ONBOARDING_STEP_COMPLETED;
                    var1 = {};
                    var9 = var13[var9];
                    var10 = var10.bind(var12)(var9);
                    var9 = var10.collectGuildAnalyticsMetadata;
                    var18 = var9.bind(var10)(var11);
                    var19 = var1;
                    var9 = copyDataProperties(var19, var18);
                    var1[var7] = var8;
                    var7 = _closure2_slot9;
                    var5 = 'skipped';
                    var1[var5] = var7;
                    var7 = false;
                    var5 = 'is_final_step';
                    var1[var5] = var7;
                    var5 = 'in_onboarding';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
 220:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var13.bind(var10)(var6, var12);
            var12 = var10.useEffect;
            var6 = new Array(6);
            var6[0] = var31;
            var6[1] = var2;
            var6[2] = var20;
            var6[3] = var9;
            var6[4] = var5;
            var6[5] = var37;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0007_ip = 41; continue _fun0007 }
 10:
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var2 = _closure2_slot9;
                            if(var2) { _fun0008_ip = 32; continue _fun0008 }
 10:
                            var2 = _closure2_slot3;
                            var3 = undefined;
                            var2 = var2.bind(var3)();
                            var2 = _closure2_slot12;
                            var2 = var2.bind(var3)();
                            var2 = undefined;
                            return var2;
 32:
                            var3 = _closure2_slot11;
                            var2 = var3.set;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = 2000;
                    var1 = var4.bind(var3)(var2, var1);
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var12.bind(var10)(var5, var6);
            var6 = var10.useEffect;
            var5 = new Array(3);
            var5[0] = var2;
            var5[1] = var20;
            var5[2] = var9;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0009_ip = 14; continue _fun0009 }
 10:
                    var2 = _closure2_slot9;
 14:
                    if(var2) { _fun0009_ip = 27; continue _fun0009 }
 17:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var10)(var2, var5);
            var2 = var20;
            if(!var2) { _fun0003_ip = 900; continue _fun0003 }
 890:
            var3 = var33[var3];
            var2 = var3.required;
 900:
            _closure2_slot19 = var2;
            var5 = _closure1_slot5;
            var6 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var37;
            var3[1] = var2;
            var3[2] = var34;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = _closure2_slot1;
                    var7 = 0;
                    if(!(var7 === var1)) { _fun0010_ip = 121; continue _fun0010 }
 13:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 30;
                    var1 = var10[var1];
                    var9 = undefined;
                    var4 = var2.bind(var9)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot16;
                    var2 = var1.GUILD_ONBOARDING_STEP_VIEWED;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var6 = 31;
                    var6 = var10[var6];
                    var9 = var8.bind(var9)(var6);
                    var8 = var9.collectGuildAnalyticsMetadata;
                    var6 = _closure2_slot0;
                    var11 = var8.bind(var9)(var6);
                    var12 = var1;
                    var6 = copyDataProperties(var12, var11);
                    var6 = 'step';
                    var1[var6] = var7;
                    var6 = _closure2_slot19;
                    var5 = 'required';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var5)(var2, var3);
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var8];
            var12 = var6.bind(var4)(var2);
            var3 = var12.useAnimatedStyle;
            var2 = function ot() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var7 = 1;
                    if(!var2) { _fun0011_ip = 24; continue _fun0011 }
 22:
                    var7 = 0;
 24:
                    var14 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 32;
                    var3 = var9[var2];
                    var11 = undefined;
                    var6 = var14.bind(var11)(var3);
                    var5 = var6.withTiming;
                    var3 = {};
                    var8 = 300;
                    var3['duration'] = var8;
                    var12 = 26;
                    var10 = var9[var12];
                    var10 = var14.bind(var11)(var10);
                    var13 = var10.Easing;
                    var10 = var13.out;
                    var9 = var9[var12];
                    var9 = var14.bind(var11)(var9);
                    var9 = var9.Easing;
                    var9 = var9.ease;
                    var9 = var10.bind(var13)(var9);
                    var3['easing'] = var9;
                    var3 = var5.bind(var6)(var7, var3);
                    var7 = _closure2_slot6;
                    var6 = 0;
                    if(var7) { _fun0011_ip = 160; continue _fun0011 }
 136:
                    var7 = _closure2_slot11;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var6 = 0;
                    if(!var1) { _fun0011_ip = 160; continue _fun0011 }
 154:
                    var6 = -80;
 160:
                    var1 = {};
                    var1['opacity'] = var3;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = var7[var2];
                    var5 = var10.bind(var11)(var2);
                    var4 = var5.withTiming;
                    var2 = {};
                    var2['duration'] = var8;
                    var8 = var7[var12];
                    var8 = var10.bind(var11)(var8);
                    var9 = var8.Easing;
                    var8 = var9.out;
                    var7 = var7[var12];
                    var7 = var10.bind(var11)(var7);
                    var7 = var7.Easing;
                    var7 = var7.ease;
                    var7 = var8.bind(var9)(var7);
                    var2['easing'] = var7;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['showPrompts'] = var31;
            var28 = 32;
            var18 = var10[var28];
            var18 = var6.bind(var4)(var18);
            var18 = var18.withTiming;
            var13['withTiming'] = var18;
            var18 = var10[var8];
            var18 = var6.bind(var4)(var18);
            var18 = var18.Easing;
            var13['Easing'] = var18;
            var13['useReducedMotion'] = var23;
            var2['__closure'] = var13;
            var13 = 6820086589932.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot25;
            var2['__initData'] = var13;
            var21 = var3.bind(var12)(var2);
            var2 = var10[var8];
            var12 = var6.bind(var4)(var2);
            var3 = var12.useAnimatedStyle;
            var2 = function st() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot11;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var9 = 1;
                    if(!var2) { _fun0012_ip = 24; continue _fun0012 }
 22:
                    var9 = 0;
 24:
                    var16 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var15 = 26;
                    var2 = var10[var15];
                    var14 = undefined;
                    var7 = var16.bind(var14)(var2);
                    var5 = var7.withDelay;
                    var2 = 32;
                    var3 = var10[var2];
                    var8 = var16.bind(var14)(var3);
                    var6 = var8.withTiming;
                    var3 = {};
                    var11 = 300;
                    var3['duration'] = var11;
                    var12 = var10[var15];
                    var12 = var16.bind(var14)(var12);
                    var13 = var12.Easing;
                    var12 = var13.out;
                    var10 = var10[var15];
                    var10 = var16.bind(var14)(var10);
                    var10 = var10.Easing;
                    var10 = var10.ease;
                    var10 = var12.bind(var13)(var10);
                    var3['easing'] = var10;
                    var3 = var6.bind(var8)(var9, var3);
                    var6 = 200;
                    var3 = var5.bind(var7)(var6, var3);
                    var7 = _closure2_slot6;
                    var9 = 0;
                    if(var7) { _fun0012_ip = 184; continue _fun0012 }
 160:
                    var7 = _closure2_slot11;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var9 = 0;
                    if(!var1) { _fun0012_ip = 184; continue _fun0012 }
 178:
                    var9 = -80;
 184:
                    var1 = {};
                    var1['opacity'] = var3;
                    var3 = {};
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = var10[var15];
                    var5 = var13.bind(var14)(var4);
                    var4 = var5.withDelay;
                    var2 = var10[var2];
                    var8 = var13.bind(var14)(var2);
                    var7 = var8.withTiming;
                    var2 = {};
                    var2['duration'] = var11;
                    var11 = var10[var15];
                    var11 = var13.bind(var14)(var11);
                    var12 = var11.Easing;
                    var11 = var12.out;
                    var10 = var10[var15];
                    var10 = var13.bind(var14)(var10);
                    var10 = var10.Easing;
                    var10 = var10.ease;
                    var10 = var11.bind(var12)(var10);
                    var2['easing'] = var10;
                    var2 = var7.bind(var8)(var9, var2);
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['showPrompts'] = var31;
            var18 = var10[var8];
            var18 = var6.bind(var4)(var18);
            var18 = var18.withDelay;
            var13['withDelay'] = var18;
            var18 = var10[var28];
            var18 = var6.bind(var4)(var18);
            var18 = var18.withTiming;
            var13['withTiming'] = var18;
            var18 = var10[var8];
            var18 = var6.bind(var4)(var18);
            var18 = var18.Easing;
            var13['Easing'] = var18;
            var13['useReducedMotion'] = var23;
            var2['__closure'] = var13;
            var13 = 3034833873876.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot26;
            var2['__initData'] = var13;
            var13 = var3.bind(var12)(var2);
            var2 = var10[var8];
            var12 = var6.bind(var4)(var2);
            var3 = var12.useAnimatedStyle;
            var2 = function rt() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot11;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 1;
                    if(!var1) { _fun0013_ip = 24; continue _fun0013 }
 22:
                    var7 = 0;
 24:
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 26;
                    var2 = var13[var8];
                    var11 = undefined;
                    var5 = var12.bind(var11)(var2);
                    var4 = var5.withDelay;
                    var2 = 32;
                    var2 = var13[var2];
                    var6 = var12.bind(var11)(var2);
                    var3 = var6.withTiming;
                    var2 = {};
                    var9 = 300;
                    var2['duration'] = var9;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.Easing;
                    var9 = var10.out;
                    var8 = var13[var8];
                    var8 = var12.bind(var11)(var8);
                    var8 = var8.Easing;
                    var8 = var8.ease;
                    var8 = var9.bind(var10)(var8);
                    var2['easing'] = var8;
                    var3 = var3.bind(var6)(var7, var2);
                    var2 = 200;
                    var2 = var4.bind(var5)(var2, var3);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var18 = {};
            var18['showPrompts'] = var31;
            var19 = var10[var8];
            var19 = var6.bind(var4)(var19);
            var19 = var19.withDelay;
            var18['withDelay'] = var19;
            var19 = var10[var28];
            var19 = var6.bind(var4)(var19);
            var19 = var19.withTiming;
            var18['withTiming'] = var19;
            var19 = var10[var8];
            var19 = var6.bind(var4)(var19);
            var19 = var19.Easing;
            var18['Easing'] = var19;
            var2['__closure'] = var18;
            var18 = 2795589385440.0;
            var2['__workletHash'] = var18;
            var18 = _closure1_slot27;
            var2['__initData'] = var18;
            var12 = var3.bind(var12)(var2);
            var2 = var10[var8];
            var18 = var6.bind(var4)(var2);
            var3 = var18.useAnimatedStyle;
            var2 = function lt() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot11;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 1;
                    if(!var1) { _fun0014_ip = 24; continue _fun0014 }
 22:
                    var7 = 0;
 24:
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 26;
                    var2 = var13[var8];
                    var11 = undefined;
                    var5 = var12.bind(var11)(var2);
                    var4 = var5.withDelay;
                    var2 = 32;
                    var2 = var13[var2];
                    var6 = var12.bind(var11)(var2);
                    var3 = var6.withTiming;
                    var2 = {};
                    var9 = 300;
                    var2['duration'] = var9;
                    var9 = var13[var8];
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.Easing;
                    var9 = var10.out;
                    var8 = var13[var8];
                    var8 = var12.bind(var11)(var8);
                    var8 = var8.Easing;
                    var8 = var8.ease;
                    var8 = var9.bind(var10)(var8);
                    var2['easing'] = var8;
                    var3 = var3.bind(var6)(var7, var2);
                    var2 = 200;
                    var2 = var4.bind(var5)(var2, var3);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var19 = {};
            var19['showPrompts'] = var31;
            var26 = var10[var8];
            var26 = var6.bind(var4)(var26);
            var26 = var26.withDelay;
            var19['withDelay'] = var26;
            var26 = var10[var28];
            var26 = var6.bind(var4)(var26);
            var26 = var26.withTiming;
            var19['withTiming'] = var26;
            var26 = var10[var8];
            var26 = var6.bind(var4)(var26);
            var26 = var26.Easing;
            var19['Easing'] = var26;
            var2['__closure'] = var19;
            var19 = 13481450530727.0;
            var2['__workletHash'] = var19;
            var19 = _closure1_slot28;
            var2['__initData'] = var19;
            var18 = var3.bind(var18)(var2);
            var2 = var10[var8];
            var19 = var6.bind(var4)(var2);
            var3 = var19.useAnimatedStyle;
            var2 = function dt() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure2_slot11;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var10 = 0;
                    if(!var2) { _fun0015_ip = 24; continue _fun0015 }
 21:
                    var10 = 1;
 24:
                    var17 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var15 = 26;
                    var2 = var12[var15];
                    var14 = undefined;
                    var8 = var17.bind(var14)(var2);
                    var7 = var8.withDelay;
                    var2 = 32;
                    var3 = var12[var2];
                    var9 = var17.bind(var14)(var3);
                    var6 = var9.withTiming;
                    var3 = {};
                    var11 = 300;
                    var3['duration'] = var11;
                    var13 = var12[var15];
                    var13 = var17.bind(var14)(var13);
                    var16 = var13.Easing;
                    var13 = var16.out;
                    var12 = var12[var15];
                    var12 = var17.bind(var14)(var12);
                    var12 = var12.Easing;
                    var12 = var12.ease;
                    var12 = var13.bind(var16)(var12);
                    var3['easing'] = var12;
                    var3 = var6.bind(var9)(var10, var3);
                    var6 = 600;
                    var3 = var7.bind(var8)(var6, var3);
                    var7 = _closure2_slot6;
                    if(var7) { _fun0015_ip = 180; continue _fun0015 }
 161:
                    var7 = _closure2_slot11;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var9 = 80;
                    if(!var5) { _fun0015_ip = 182; continue _fun0015 }
 180:
                    var9 = 0;
 182:
                    var1 = {};
                    var1['opacity'] = var3;
                    var3 = {};
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = var10[var15];
                    var5 = var13.bind(var14)(var4);
                    var4 = var5.withDelay;
                    var2 = var10[var2];
                    var8 = var13.bind(var14)(var2);
                    var7 = var8.withTiming;
                    var2 = {};
                    var2['duration'] = var11;
                    var11 = var10[var15];
                    var11 = var13.bind(var14)(var11);
                    var12 = var11.Easing;
                    var11 = var12.out;
                    var10 = var10[var15];
                    var10 = var13.bind(var14)(var10);
                    var10 = var10.Easing;
                    var10 = var10.ease;
                    var10 = var11.bind(var12)(var10);
                    var2['easing'] = var10;
                    var2 = var7.bind(var8)(var9, var2);
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var26 = {};
            var26['showPrompts'] = var31;
            var31 = var10[var8];
            var31 = var6.bind(var4)(var31);
            var31 = var31.withDelay;
            var26['withDelay'] = var31;
            var28 = var10[var28];
            var28 = var6.bind(var4)(var28);
            var28 = var28.withTiming;
            var26['withTiming'] = var28;
            var28 = var10[var8];
            var28 = var6.bind(var4)(var28);
            var28 = var28.Easing;
            var26['Easing'] = var28;
            var26['useReducedMotion'] = var23;
            var2['__closure'] = var26;
            var26 = 14018549800735.0;
            var2['__workletHash'] = var26;
            var26 = _closure1_slot29;
            var2['__initData'] = var26;
            var26 = var3.bind(var19)(var2);
            var31 = function handleOnPress() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0016_ip = 479; continue _fun0016 }
 16:
                    var2 = _closure2_slot16;
                    if(var2) { _fun0016_ip = 453; continue _fun0016 }
 26:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 30;
                    var3 = var5[var2];
                    var6 = undefined;
                    var9 = var7.bind(var6)(var3);
                    var8 = var9.track;
                    var3 = _closure1_slot16;
                    var7 = var3.GUILD_ONBOARDING_STEP_COMPLETED;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var12 = 31;
                    var5 = var5[var12];
                    var11 = var10.bind(var6)(var5);
                    var10 = var11.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var15 = var10.bind(var11)(var5);
                    var16 = var3;
                    var5 = copyDataProperties(var16, var15);
                    var5 = _closure2_slot1;
                    var11 = 'step';
                    var3[var11] = var5;
                    var10 = _closure2_slot14;
                    var13 = var10.length;
                    var10 = 'options_selected';
                    var3[var10] = var13;
                    var10 = _closure2_slot14;
                    var13 = var10.length;
                    var10 = 0;
                    var13 = var10 === var13;
                    var10 = 'skipped';
                    var3[var10] = var13;
                    var13 = false;
                    var10 = 'back';
                    var3[var10] = var13;
                    var14 = true;
                    var10 = 'in_onboarding';
                    var3[var10] = var14;
                    var10 = 'is_final_step';
                    var3[var10] = var13;
                    var3 = var8.bind(var9)(var7, var3);
                    var3 = _closure2_slot2;
                    var3 = var3.length;
                    var8 = 1;
                    var3 = var3 - var8;
                    if(!(var5 < var3)) { _fun0016_ip = 334; continue _fun0016 }
 219:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = var9[var2];
                    var7 = var3.bind(var6)(var2);
                    var5 = var7.track;
                    var2 = _closure1_slot16;
                    var3 = var2.GUILD_ONBOARDING_STEP_VIEWED;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var9 = var9[var12];
                    var12 = var10.bind(var6)(var9);
                    var10 = var12.collectGuildAnalyticsMetadata;
                    var9 = _closure2_slot0;
                    var15 = var10.bind(var12)(var9);
                    var16 = var2;
                    var9 = copyDataProperties(var16, var15);
                    var9 = _closure2_slot1;
                    var10 = var9 + var8;
                    var2[var11] = var10;
                    var10 = _closure2_slot2;
                    var9 = var9 + var8;
                    var9 = var10[var9];
                    var10 = var9.required;
                    var9 = 'required';
                    var2[var9] = var10;
                    var2 = var5.bind(var7)(var3, var2);
 334:
                    var2 = _closure2_slot1;
                    var3 = var2 + var8;
                    var2 = _closure2_slot2;
                    var2 = var2.length;
                    if(!(!(var3 < var2))) { _fun0016_ip = 408; continue _fun0016 }
 355:
                    var5 = _closure1_slot31;
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot5;
                    var2 = var5.bind(var6)(var3, var2);
                    if(!var2) { _fun0016_ip = 581; continue _fun0016 }
 379:
                    var5 = _closure2_slot8;
                    var3 = var5.push;
                    var2 = _closure1_slot15;
                    var2 = var2.RULES;
                    var2 = var3.bind(var5)(var2);
                    _fun0016_ip = 581; continue _fun0016;
 408:
                    var6 = _closure2_slot8;
                    var5 = var6.push;
                    var2 = _closure1_slot15;
                    var3 = var2.PROMPT;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var7 = var7 + var8;
                    var2['currentPrompt'] = var7;
                    var2 = var5.bind(var6)(var3, var2);
                    _fun0016_ip = 581; continue _fun0016;
 453:
                    var3 = _closure2_slot8;
                    var2 = var3.push;
                    var1 = _closure1_slot15;
                    var1 = var1.COMPLETED;
                    var1 = var2.bind(var3)(var1);
                    _fun0016_ip = 581; continue _fun0016;
 479:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 33;
                    var1 = var9[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'ONBOARDING_REQUIRED_QUESTION';
                    var1['key'] = var5;
                    var7 = _closure1_slot0;
                    var4 = 34;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.dA1dSU;
                    var4 = var5.bind(var6)(var4);
                    var1['content'] = var4;
                    var1 = var2.bind(var3)(var1);
 581:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.useLayoutEffect;
            var2 = new Array(7);
            var2[0] = var14;
            var2[1] = var34;
            var2[2] = var11;
            var2[3] = var37;
            var2[4] = var33;
            var2[5] = var9;
            var2[6] = var7;
            var1 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure2_slot8;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var4 = 0;
                    if(!(var4 !== var6)) { _fun0017_ip = 75; continue _fun0017 }
 27:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 35;
                    var6 = var6[var4];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.getHeaderBackButton;
                    var6 = function() {
                        var5 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = 30;
                        var3 = var12[var4];
                        var1 = undefined;
                        var15 = var5.bind(var1)(var3);
                        var14 = var15.track;
                        var3 = _closure1_slot16;
                        var13 = var3.GUILD_ONBOARDING_STEP_COMPLETED;
                        var6 = {};
                        var8 = _closure1_slot0;
                        var7 = 31;
                        var2 = var12[var7];
                        var10 = var8.bind(var1)(var2);
                        var9 = var10.collectGuildAnalyticsMetadata;
                        var11 = _closure2_slot0;
                        var20 = var9.bind(var10)(var11);
                        var21 = var6;
                        var9 = copyDataProperties(var21, var20);
                        var9 = _closure2_slot1;
                        var10 = 'step';
                        var6[var10] = var9;
                        var17 = false;
                        var16 = 'skipped';
                        var6[var16] = var17;
                        var18 = true;
                        var16 = 'back';
                        var6[var16] = var18;
                        var16 = _closure2_slot14;
                        var19 = var16.length;
                        var16 = 'options_selected';
                        var6[var16] = var19;
                        var16 = 'in_onboarding';
                        var6[var16] = var18;
                        var16 = 'is_final_step';
                        var6[var16] = var17;
                        var6 = var14.bind(var15)(var13, var6);
                        var4 = var12[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.track;
                        var4 = var3.GUILD_ONBOARDING_STEP_VIEWED;
                        var3 = {};
                        var7 = var12[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.collectGuildAnalyticsMetadata;
                        var20 = var7.bind(var8)(var11);
                        var21 = var3;
                        var7 = copyDataProperties(var21, var20);
                        var7 = 1;
                        var8 = var9 - var7;
                        var3[var10] = var8;
                        var8 = _closure2_slot2;
                        var7 = var9 - var7;
                        var7 = var8[var7];
                        var8 = var7.required;
                        var7 = 'required';
                        var3[var7] = var8;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = _closure2_slot8;
                        var2 = var3.pop;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var4 = true;
                    var4 = var7.bind(var8)(var6, var4);
                    _fun0017_ip = 118; continue _fun0017;
 75:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 35;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.getHeaderCloseButton;
                    var5 = function() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 30;
                            var2 = var9[var1];
                            var1 = undefined;
                            var7 = var3.bind(var1)(var2);
                            var5 = var7.track;
                            var2 = _closure1_slot16;
                            var4 = var2.GUILD_ONBOARDING_STEP_COMPLETED;
                            var3 = {};
                            var8 = _closure1_slot0;
                            var2 = 31;
                            var2 = var9[var2];
                            var10 = var8.bind(var1)(var2);
                            var9 = var10.collectGuildAnalyticsMetadata;
                            var8 = _closure2_slot0;
                            var12 = var9.bind(var10)(var8);
                            var13 = var3;
                            var8 = copyDataProperties(var13, var12);
                            var11 = 0;
                            var8 = 'step';
                            var3[var8] = var11;
                            var9 = true;
                            var8 = 'skipped';
                            var3[var8] = var9;
                            var10 = false;
                            var8 = 'back';
                            var3[var8] = var10;
                            var8 = 'options_selected';
                            var3[var8] = var11;
                            var8 = 'in_onboarding';
                            var3[var8] = var9;
                            var8 = 'is_final_step';
                            var3[var8] = var10;
                            var3 = var5.bind(var7)(var4, var3);
                            var3 = _closure2_slot4;
                            if(var3) { _fun0018_ip = 173; continue _fun0018 }
 160:
                            var3 = _closure2_slot3;
                            var3 = var3.bind(var1)();
                            _fun0018_ip = 336; continue _fun0018;
 173:
                            var5 = _closure2_slot0;
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot12;
                            var3 = var4.getLastSelectedChannelId;
                            var7 = var3.bind(var4)();
                            var4 = _closure1_slot10;
                            var3 = var4.getChannel;
                            var3 = var3.bind(var4)(var7);
                            var4 = null;
                            if(!(var4 != var3)) { _fun0018_ip = 224; continue _fun0018 }
 215:
                            var4 = var3.guild_id;
                            if(!(var4 === var5)) { _fun0018_ip = 275; continue _fun0018 }
 224:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var8 = var5.bind(var1)(var4);
                            var7 = var8.transitionTo;
                            var4 = _closure1_slot19;
                            var5 = var4.ME;
                            var4 = {};
                            var4['navigationReplace'] = var9;
                            var4 = var7.bind(var8)(var5, var4);
                            _fun0018_ip = 332; continue _fun0018;
 275:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.transitionTo;
                            var8 = _closure1_slot19;
                            var7 = var8.CHANNEL;
                            var6 = var3.guild_id;
                            var3 = var3.id;
                            var3 = var7.bind(var8)(var6, var3);
                            var3 = var4.bind(var5)(var3);
 332:
                            var2 = var2.bind(var1)();
 336:
                            return var1;
                        }
                    };
                    var4 = var6.bind(var7)(var5);
 118:
                    var1['headerLeft'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot22;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var15.flex;
            var1['style'] = var5;
            var7 = _closure1_slot20;
            var5 = 36;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {'top': true, 'bottom': true};
            var11 = var15.flex;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = var15.container;
            var9[1] = var11;
            var5['style'] = var9;
            var11 = _closure1_slot1;
            var9 = var10[var8];
            var9 = var11.bind(var4)(var9);
            var14 = var9.View;
            var9 = {};
            var28 = var15.flex;
            var19 = new Array(2);
            var19[0] = var28;
            var19[1] = var26;
            var9['style'] = var19;
            var19 = null;
            if(!var20) { _fun0003_ip = 1999; continue _fun0003 }
 1752:
            var20 = var27 == var36;
            var19 = null;
            if(var20) { _fun0003_ip = 1999; continue _fun0003 }
 1764:
            var26 = var36.type;
            var20 = _closure1_slot14;
            var20 = var20.MULTIPLE_CHOICE;
            if(!(var20 !== var26)) { _fun0003_ip = 1922; continue _fun0003 }
 1786:
            var20 = _closure1_slot14;
            var20 = var20.DROPDOWN;
            if(!(var20 !== var26)) { _fun0003_ip = 1843; continue _fun0003 }
 1800:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 38;
            var20 = var28[var20];
            var28 = var26.bind(var4)(var20);
            var26 = var28.assertNever;
            var20 = var36.type;
            var20 = var26.bind(var28)(var20);
            var19 = undefined;
            _fun0003_ip = 1999; continue _fun0003;
 1843:
            var28 = _closure1_slot20;
            var26 = _closure1_slot0;
            var38 = _closure1_slot2;
            var20 = 37;
            var20 = var38[var20];
            var20 = var26.bind(var4)(var20);
            var26 = var20.DropdownPrompt;
            var20 = {};
            var20['guildId'] = var37;
            var20['currentPrompt'] = var36;
            var20['lastPrompt'] = var35;
            var20['currentPromptIndex'] = var34;
            var38 = var33.length;
            var20['numberOfPrompts'] = var38;
            var20['selectOption'] = var32;
            var20['handleOnPress'] = var31;
            var19 = var28.bind(var4)(var26, var20);
            _fun0003_ip = 1999; continue _fun0003;
 1922:
            var28 = _closure1_slot20;
            var26 = _closure1_slot0;
            var38 = _closure1_slot2;
            var20 = 37;
            var20 = var38[var20];
            var20 = var26.bind(var4)(var20);
            var26 = var20.MultipleChoicePrompt;
            var20 = {};
            var20['guildId'] = var37;
            var20['currentPrompt'] = var36;
            var20['lastPrompt'] = var35;
            var20['currentPromptIndex'] = var34;
            var33 = var33.length;
            var20['numberOfPrompts'] = var33;
            var20['selectOption'] = var32;
            var20['handleOnPress'] = var31;
            var19 = var28.bind(var4)(var26, var20);
 1999:
            var9['children'] = var19;
            var9 = var7.bind(var4)(var14, var9);
            var5['children'] = var9;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = _closure1_slot6;
            var7 = var7.absoluteFill;
            var6['style'] = var7;
            var14 = 'none';
            var6['pointerEvents'] = var14;
            var7 = var10[var8];
            var7 = var11.bind(var4)(var7);
            var9 = var7.View;
            var7 = {};
            var20 = var15.flex;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var15.landingOverlay;
            var19[1] = var20;
            var7['style'] = var19;
            var7['pointerEvents'] = var14;
            var10 = var10[var8];
            var10 = var11.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var19 = var15.landingOverlay;
            var14 = new Array(2);
            var14[0] = var19;
            var14[1] = var18;
            var10['style'] = var14;
            var18 = var27 != var24;
            var14 = null;
            if(!var18) { _fun0003_ip = 2172; continue _fun0003 }
 2147:
            var20 = _closure1_slot20;
            var19 = _closure1_slot24;
            var18 = {};
            var18['splashUrl'] = var24;
            var18['color'] = var22;
            var14 = var20.bind(var4)(var19, var18);
 2172:
            var19 = new Array(2);
            var19[0] = var14;
            var14 = _closure1_slot20;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 21;
            var20 = var22[var20];
            var26 = var18.bind(var4)(var20);
            var20 = {};
            var24 = var15.darkColorGradient;
            var20['style'] = var24;
            var24 = _closure1_slot0;
            var28 = 22;
            var31 = var22[var28];
            var31 = var24.bind(var4)(var31);
            var31 = var31.VerticalGradient;
            var31 = var31.START;
            var20['start'] = var31;
            var28 = var22[var28];
            var28 = var24.bind(var4)(var28);
            var28 = var28.VerticalGradient;
            var28 = var28.END;
            var20['end'] = var28;
            var28 = 19;
            var28 = var22[var28];
            var33 = var24.bind(var4)(var28);
            var32 = var33.hexWithOpacity;
            var28 = var22[var30];
            var28 = var18.bind(var4)(var28);
            var28 = var28.unsafe_rawColors;
            var31 = var28.PRIMARY_800;
            var28 = 0.5;
            var31 = var32.bind(var33)(var31, var28);
            var28 = new Array(2);
            var28[0] = var31;
            var30 = var22[var30];
            var30 = var18.bind(var4)(var30);
            var30 = var30.unsafe_rawColors;
            var30 = var30.PRIMARY_800;
            var28[1] = var30;
            var20['colors'] = var28;
            var20 = var14.bind(var4)(var26, var20);
            var19[1] = var20;
            var10['children'] = var19;
            var10 = var3.bind(var4)(var11, var10);
            var11 = new Array(3);
            var11[0] = var10;
            var10 = var22[var8];
            var10 = var18.bind(var4)(var10);
            var19 = var10.View;
            var10 = {};
            var26 = var15.artWrapper;
            var20 = new Array(2);
            var20[0] = var26;
            var20[1] = var21;
            var10['style'] = var20;
            var20 = 39;
            var20 = var22[var20];
            var21 = var18.bind(var4)(var20);
            var20 = {};
            var20['source'] = var25;
            var23 = !var23;
            var20['autoPlay'] = var23;
            var23 = {};
            var25 = '100%';
            var23['width'] = var25;
            var20['style'] = var23;
            var20 = var14.bind(var4)(var21, var20);
            var10['children'] = var20;
            var10 = var14.bind(var4)(var19, var10);
            var11[1] = var10;
            var21 = _closure1_slot22;
            var10 = var22[var8];
            var10 = var18.bind(var4)(var10);
            var20 = var10.View;
            var19 = {};
            var18 = var15.landingBody;
            var10 = new Array(2);
            var10[0] = var18;
            var10[1] = var13;
            var19['style'] = var10;
            var23 = 40;
            var10 = var22[var23];
            var10 = var24.bind(var4)(var10);
            var13 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/semibold', 'color': 'always-white'};
            var18 = var15.subtitle;
            var10['style'] = var18;
            var18 = 34;
            var25 = var22[var18];
            var25 = var24.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var22 = var22[var18];
            var22 = var24.bind(var4)(var22);
            var22 = var22.t;
            var24 = var22.O2bQlJ;
            var22 = {};
            var30 = var27 == var29;
            var28 = undefined;
            if(var30) { _fun0003_ip = 2636; continue _fun0003 }
 2631:
            var28 = var29.name;
 2636:
            var29 = var27 != var28;
            var27 = '';
            if(!var29) { _fun0003_ip = 2650; continue _fun0003 }
 2647:
            var27 = var28;
 2650:
            var22['guildName'] = var27;
            var22 = var25.bind(var26)(var24, var22);
            var10['children'] = var22;
            var10 = var14.bind(var4)(var13, var10);
            var22 = new Array(2);
            var22[0] = var10;
            var10 = _closure1_slot20;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var23 = var13[var23];
            var23 = var14.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/semibold', 'color': 'always-white'};
            var25 = var15.onboardingTitle;
            var23['style'] = var25;
            var25 = var13[var18];
            var25 = var14.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var13[var18];
            var25 = var14.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.Alcl/f;
            var25 = var26.bind(var27)(var25);
            var23['children'] = var25;
            var23 = var10.bind(var4)(var24, var23);
            var22[1] = var23;
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var11[2] = var19;
            var7['children'] = var11;
            var9 = var3.bind(var4)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var9 = _closure1_slot1;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.View;
            var8 = {};
            var19 = var15.onboardingPolicy;
            var11 = new Array(3);
            var11[0] = var19;
            var11[1] = var12;
            var12 = {};
            var12['bottom'] = var16;
            var11[2] = var12;
            var8['style'] = var11;
            var11 = 'auto';
            var8['pointerEvents'] = var11;
            var11 = 41;
            var11 = var13[var11];
            var11 = var14.bind(var4)(var11);
            var12 = var11.TextWithIOSLinkWorkaround;
            var11 = {'style': null, 'variant': 'heading-sm/normal', 'color': 'header-secondary'};
            var15 = var15.onboardingPolicyText;
            var11['style'] = var15;
            var15 = var13[var18];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var13[var18];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.kI6UoK;
            var13 = {};
            var17 = _closure1_slot18;
            var17 = var17.PRIVACY;
            var13['privacyLink'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var11['children'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[1] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();