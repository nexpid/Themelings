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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function BackgroundImageGradient(arg1) {
        var1 = arg1;
        var14 = var1.splashUrl;
        var10 = var1.color;
        var1 = _closure1_slot22;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot21;
        var2 = _closure1_slot20;
        var1 = {};
        var8 = _closure1_slot19;
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
        var8 = _closure1_slot19;
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
    var _closure1_slot29 = var1;
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
    var7 = var4.MarketingURLs;
    var _closure1_slot17 = var7;
    var4 = var4.Routes;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot19 = var7;
    var7 = var4.Fragment;
    var _closure1_slot20 = var7;
    var4 = var4.jsxs;
    var _closure1_slot21 = var4;
    var4 = 15;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {'display': 'flex', 'flex': 1, 'flexGrow': 1};
    var10 = 16;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['marginTop'] = var10;
    var10 = 17;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var12 = 0.8;
    var9['opacity'] = var12;
    var4['subtitle'] = var9;
    var9 = {};
    var12 = 'center';
    var9['textAlign'] = var12;
    var4['onboardingTitle'] = var9;
    var9 = {'position': 'absolute', 'paddingHorizontal': null, 'display': 'flex', 'justifyContent': 'center', 'width': '100%'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['marginBottom'] = var13;
    var4['onboardingPolicy'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var4['onboardingPolicyText'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center'};
    var4['landingOverlay'] = var9;
    var9 = {'height': 350, 'position': 'relative', 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['artWrapper'] = var9;
    var9 = {'alignItems': 'center', 'marginTop': 4294967272};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var4['landingBody'] = var9;
    var9 = {'position': 'absolute', 'height': '50%', 'width': '100%', 'top': 0};
    var4['backgroundImage'] = var9;
    var9 = {'position': 'absolute', 'height': '100%', 'width': '100%', 'top': 0};
    var4['backgroundColorGradient'] = var9;
    var9 = {'position': 'absolute', 'height': '100%', 'width': '100%', 'top': 0};
    var4['darkColorGradient'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withDelay(200,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withDelay(200,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity};}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?1:0;const opacity=withDelay(600,withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY=!useReducedMotion&&!showPrompts.get()?80:0;const translateY=withDelay(600,withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity,transform:[{translateY:translateY}]};}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingPrompts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildOnboardingPrompt(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var38 = var3.guildId;
            var _closure2_slot0 = var38;
            var35 = var3.currentPromptIdx;
            var _closure2_slot1 = var35;
            var34 = var3.prompts;
            var _closure2_slot2 = var34;
            var32 = var3.selectOption;
            var10 = var3.onClose;
            var _closure2_slot3 = var10;
            var28 = var3.landingAnimation;
            var2 = var3.isFirstOpen;
            var8 = var3.backShouldLeaveGuild;
            var _closure2_slot4 = var8;
            var4 = undefined;
            var _closure2_slot5 = var4;
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
            var _closure2_slot20 = var4;
            var30 = function handleOnPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot16;
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot17;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 31;
                    var4 = var6[var3];
                    var5 = undefined;
                    var9 = var7.bind(var5)(var4);
                    var8 = var9.track;
                    var4 = _closure1_slot16;
                    var7 = var4.GUILD_ONBOARDING_STEP_COMPLETED;
                    var4 = {};
                    var10 = _closure1_slot0;
                    var12 = 32;
                    var6 = var6[var12];
                    var11 = var10.bind(var5)(var6);
                    var10 = var11.collectGuildAnalyticsMetadata;
                    var6 = _closure2_slot0;
                    var15 = var10.bind(var11)(var6);
                    var16 = var4;
                    var6 = copyDataProperties(var16, var15);
                    var6 = _closure2_slot1;
                    var11 = 'step';
                    var4[10] = var6;
                    var10 = _closure2_slot15;
                    var13 = var10.length;
                    var10 = 'options_selected';
                    var4[9] = var13;
                    var10 = _closure2_slot15;
                    var13 = var10.length;
                    var10 = 0;
                    var13 = var10 === var13;
                    var10 = 'skipped';
                    var4[9] = var13;
                    var13 = false;
                    var10 = 'back';
                    var4[9] = var13;
                    var14 = true;
                    var10 = 'in_onboarding';
                    var4[9] = var14;
                    var10 = 'is_final_step';
                    var4[9] = var13;
                    var4 = var8.bind(var9)(var7, var4);
                    var4 = _closure2_slot2;
                    var4 = var4.length;
                    var8 = 1;
                    var4 = var4 - var8;
                    if(!(var6 < var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var3];
                    var7 = var4.bind(var5)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot16;
                    var4 = var3.GUILD_ONBOARDING_STEP_VIEWED;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var9 = var9[var12];
                    var12 = var10.bind(var5)(var9);
                    var10 = var12.collectGuildAnalyticsMetadata;
                    var9 = _closure2_slot0;
                    var15 = var10.bind(var12)(var9);
                    var16 = var3;
                    var9 = copyDataProperties(var16, var15);
                    var9 = _closure2_slot1;
                    var10 = var9 + var8;
                    var3[10] = var10;
                    var10 = _closure2_slot2;
                    var9 = var9 + var8;
                    var9 = var10[var9];
                    var10 = var9.required;
                    var9 = 'required';
                    var3[8] = var10;
                    var3 = var6.bind(var7)(var4, var3);
case 12:
                    var3 = _closure2_slot1;
                    var4 = var3 + var8;
                    var3 = _closure2_slot2;
                    var3 = var3.length;
                    if(!(!(var4 < var3))) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 28;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.showRulesInOnboarding;
                    var4 = _closure2_slot14;
                    var3 = _closure2_slot5;
                    var3 = var5.bind(var6)(var4, var3);
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 16:
                    var5 = _closure2_slot9;
                    var4 = var5.push;
                    var3 = _closure1_slot15;
                    var3 = var3.RULES;
                    var3 = var4.bind(var5)(var3);
                    _fun0003_ip = 8; continue _fun0003;
case 14:
                    var6 = _closure2_slot9;
                    var5 = var6.push;
                    var3 = _closure1_slot15;
                    var4 = var3.PROMPT;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var7 = var7 + var8;
                    var3['currentPrompt'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    _fun0003_ip = 8; continue _fun0003;
case 10:
                    var3 = _closure2_slot9;
                    var2 = var3.push;
                    var1 = _closure1_slot15;
                    var1 = var1.COMPLETED;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = _closure1_slot22;
            var17 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 23;
            var6 = var3[var14];
            var11 = var5.bind(var4)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getRulesPrompt;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var11)(var7, var6);
            _closure2_slot5 = var6;
            var7 = var3[var14];
            var12 = var5.bind(var4)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var27 = var11.bind(var12)(var9, var7);
            var _closure2_slot6 = var27;
            var9 = _closure1_slot1;
            var7 = 24;
            var7 = var3[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var18 = var7.bottom;
            var3 = var3[var14];
            var9 = var5.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot13;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getOnboardingConnections;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var9)(var5, var3);
            var5 = var3.length;
            var3 = 0;
            var7 = var5 > var3;
            var _closure2_slot7 = var7;
            if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var3 === var35;
case 17:
            if(!var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = !var7;
case 19:
            _closure2_slot8 = var2;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 25;
            var5 = var11[var5];
            var9 = var12.bind(var4)(var5);
            var5 = var9.useNavigation;
            var13 = var5.bind(var9)();
            _closure2_slot9 = var13;
            var5 = var34.length;
            var20 = var5 > var3;
            _closure2_slot10 = var20;
            var37 = var34[var35];
            _closure2_slot11 = var37;
            var9 = 26;
            var5 = var11[var9];
            var16 = var12.bind(var4)(var5);
            var15 = var16.useSharedValue;
            var5 = !var2;
            var39 = var15.bind(var16)(var5);
            _closure2_slot12 = var39;
            var21 = _closure1_slot5;
            var16 = var21.useCallback;
            var15 = new Array(2);
            var15[0] = var38;
            var15[1] = var34;
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
            var5 = var16.bind(var21)(var5, var15);
            _closure2_slot13 = var5;
            var15 = var11[var14];
            var22 = var12.bind(var4)(var15);
            var21 = var22.useStateFromStores;
            var15 = _closure1_slot11;
            var16 = new Array(1);
            var16[0] = var15;
            var15 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31 = var21.bind(var22)(var16, var15);
            _closure2_slot14 = var31;
            var11 = var11[var14];
            var16 = var12.bind(var4)(var11);
            var15 = var16.useStateFromStoresArray;
            var11 = _closure1_slot13;
            var14 = new Array(1);
            var14[0] = var11;
            var12 = new Array(2);
            var12[0] = var38;
            var12[1] = var37;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0004_ip = 21; continue _fun0004 }
case 9:
                    var1 = new Array(0);
                    _fun0004_ip = 4; continue _fun0004;
case 21:
                    var5 = _closure1_slot13;
                    var4 = var5.getOnboardingResponsesForPrompt;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot11;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var11 = var15.bind(var16)(var14, var11, var12);
            _closure2_slot15 = var11;
            var12 = var11.length;
            var12 = var3 === var12;
            if(!var12) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var14 = null;
            var15 = var14 == var37;
            var14 = undefined;
            if(var15) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var14 = var37.required;
case 24:
            var12 = var14;
case 22:
            _closure2_slot16 = var12;
            var14 = 1;
            var15 = var35 + var14;
            var12 = var34.length;
            var36 = var15 >= var12;
            if(!var36) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 28;
            var12 = var16[var12];
            var15 = var15.bind(var4)(var12);
            var12 = var15.showRulesInOnboarding;
            var12 = var12.bind(var15)(var31, var6);
            var36 = !var12;
case 26:
            _closure2_slot17 = var36;
            var16 = _closure1_slot5;
            var15 = var16.useState;
            var21 = _closure1_slot1;
            var12 = _closure1_slot2;
            var33 = 17;
            var12 = var12[var33];
            var12 = var21.bind(var4)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.PRIMARY_800;
            var16 = var15.bind(var16)(var12);
            var15 = _closure1_slot3;
            var12 = 2;
            var12 = var15.bind(var4)(var16, var12);
            var25 = var12[var3];
            var12 = var12[var14];
            _closure2_slot18 = var12;
            var29 = null;
            var12 = var29 != var31;
            var26 = null;
            if(!var12) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var12 = 29;
            var12 = var22[var12];
            var15 = var21.bind(var4)(var12);
            var14 = var15.getGuildSplashURL;
            var12 = {};
            var16 = var31.id;
            var12['id'] = var16;
            var16 = var31.splash;
            var12['splash'] = var16;
            var16 = 30;
            var16 = var22[var16];
            var16 = var21.bind(var4)(var16);
            var21 = var16.bind(var4)();
            var16 = 400;
            var16 = var16 * var21;
            var12['size'] = var16;
            var26 = var14.bind(var15)(var12);
case 28:
            _closure2_slot19 = var26;
            var12 = _closure1_slot5;
            var16 = var12.useEffect;
            var15 = new Array(1);
            var15[0] = var26;
            var14 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot19;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var4 = _closure2_slot19;
                    var3 = function getBackgroundGradientColor() {
                        var1 = undefined;
                        var4 = _closure1_slot28;
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
                        var3 = _closure2_slot18;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var16.bind(var12)(var14, var15);
            var15 = var12.useEffect;
            var14 = new Array(4);
            var14[0] = var38;
            var14[1] = var20;
            var14[2] = var6;
            var14[3] = var2;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0006_ip = 32; continue _fun0006 }
case 9:
                    var3 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 31;
                    var1 = var13[var2];
                    var12 = undefined;
                    var16 = var3.bind(var12)(var1);
                    var15 = var16.track;
                    var1 = _closure1_slot16;
                    var14 = var1.GUILD_ONBOARDING_STEP_VIEWED;
                    var4 = {};
                    var10 = _closure1_slot0;
                    var9 = 32;
                    var6 = var13[var9];
                    var7 = var10.bind(var12)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var11 = _closure2_slot0;
                    var18 = var6.bind(var7)(var11);
                    var19 = var4;
                    var6 = copyDataProperties(var19, var18);
                    var8 = -1;
                    var7 = 'step';
                    var4[6] = var8;
                    var6 = true;
                    var17 = 'required';
                    var4[16] = var6;
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
                    var1[6] = var8;
                    var7 = _closure2_slot10;
                    var5 = 'skipped';
                    var1[4] = var7;
                    var7 = false;
                    var5 = 'is_final_step';
                    var1[4] = var7;
                    var5 = 'in_onboarding';
                    var1[4] = var6;
                    var1 = var3.bind(var4)(var2, var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var15.bind(var12)(var6, var14);
            var14 = var12.useEffect;
            var6 = new Array(7);
            var6[0] = var39;
            var6[1] = var2;
            var6[2] = var20;
            var6[3] = var7;
            var6[4] = var10;
            var6[5] = var5;
            var6[6] = var38;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0007_ip = 33; continue _fun0007 }
case 3:
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot10;
                            if(var2) { _fun0008_ip = 34; continue _fun0008 }
case 3:
                            var2 = _closure2_slot3;
                            var3 = undefined;
                            var2 = var2.bind(var3)();
                            var2 = _closure2_slot13;
                            var2 = var2.bind(var3)();
                            var2 = undefined;
                            return var2;
case 34:
                            var3 = _closure2_slot12;
                            var2 = var3.set;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = 2000;
                    var1 = var4.bind(var3)(var2, var1);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var14.bind(var12)(var5, var6);
            var6 = var12.useEffect;
            var5 = new Array(3);
            var5[0] = var2;
            var5[1] = var20;
            var5[2] = var10;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0009_ip = 35; continue _fun0009 }
case 3:
                    var2 = _closure2_slot10;
case 35:
                    if(var2) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var12)(var2, var5);
            var2 = var20;
            if(!var2) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var3 = var34[var3];
            var2 = var3.required;
case 38:
            _closure2_slot20 = var2;
            var5 = _closure1_slot5;
            var6 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var38;
            var3[1] = var2;
            var3[2] = var35;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = 0;
                    if(!(var7 === var1)) { _fun0010_ip = 40; continue _fun0010 }
case 9:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 31;
                    var1 = var10[var1];
                    var9 = undefined;
                    var4 = var2.bind(var9)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot16;
                    var2 = var1.GUILD_ONBOARDING_STEP_VIEWED;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var6 = 32;
                    var6 = var10[var6];
                    var9 = var8.bind(var9)(var6);
                    var8 = var9.collectGuildAnalyticsMetadata;
                    var6 = _closure2_slot0;
                    var11 = var8.bind(var9)(var6);
                    var12 = var1;
                    var6 = copyDataProperties(var12, var11);
                    var6 = 'step';
                    var1[5] = var7;
                    var6 = _closure2_slot20;
                    var5 = 'required';
                    var1[4] = var6;
                    var1 = var3.bind(var4)(var2, var1);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var5)(var2, var3);
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var9];
            var14 = var6.bind(var4)(var2);
            var3 = var14.useAnimatedStyle;
            var2 = function st() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var7 = 1;
                    if(!var2) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                    var7 = 0;
case 41:
                    var14 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 33;
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
                    if(var7) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                    var7 = _closure2_slot12;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var6 = 0;
                    if(!var1) { _fun0011_ip = 43; continue _fun0011 }
case 45:
                    var6 = -80;
case 43:
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
            var15 = {};
            var15['showPrompts'] = var39;
            var24 = 33;
            var16 = var12[var24];
            var16 = var6.bind(var4)(var16);
            var16 = var16.withTiming;
            var15['withTiming'] = var16;
            var16 = var12[var9];
            var16 = var6.bind(var4)(var16);
            var16 = var16.Easing;
            var15['Easing'] = var16;
            var15['useReducedMotion'] = var27;
            var2['__closure'] = var15;
            var15 = 6820086589932.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot23;
            var2['__initData'] = var15;
            var23 = var3.bind(var14)(var2);
            var2 = var12[var9];
            var14 = var6.bind(var4)(var2);
            var3 = var14.useAnimatedStyle;
            var2 = function rt() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var9 = 1;
                    if(!var2) { _fun0012_ip = 41; continue _fun0012 }
case 42:
                    var9 = 0;
case 41:
                    var16 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var15 = 26;
                    var2 = var10[var15];
                    var14 = undefined;
                    var7 = var16.bind(var14)(var2);
                    var5 = var7.withDelay;
                    var2 = 33;
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
                    if(var7) { _fun0012_ip = 46; continue _fun0012 }
case 43:
                    var7 = _closure2_slot12;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var9 = 0;
                    if(!var1) { _fun0012_ip = 46; continue _fun0012 }
case 47:
                    var9 = -80;
case 46:
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
            var15 = {};
            var15['showPrompts'] = var39;
            var16 = var12[var9];
            var16 = var6.bind(var4)(var16);
            var16 = var16.withDelay;
            var15['withDelay'] = var16;
            var16 = var12[var24];
            var16 = var6.bind(var4)(var16);
            var16 = var16.withTiming;
            var15['withTiming'] = var16;
            var16 = var12[var9];
            var16 = var6.bind(var4)(var16);
            var16 = var16.Easing;
            var15['Easing'] = var16;
            var15['useReducedMotion'] = var27;
            var2['__closure'] = var15;
            var15 = 3034833873876.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot24;
            var2['__initData'] = var15;
            var15 = var3.bind(var14)(var2);
            var2 = var12[var9];
            var14 = var6.bind(var4)(var2);
            var3 = var14.useAnimatedStyle;
            var2 = function lt() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 1;
                    if(!var1) { _fun0013_ip = 41; continue _fun0013 }
case 42:
                    var7 = 0;
case 41:
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 26;
                    var2 = var13[var8];
                    var11 = undefined;
                    var5 = var12.bind(var11)(var2);
                    var4 = var5.withDelay;
                    var2 = 33;
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
            var16 = {};
            var16['showPrompts'] = var39;
            var21 = var12[var9];
            var21 = var6.bind(var4)(var21);
            var21 = var21.withDelay;
            var16['withDelay'] = var21;
            var21 = var12[var24];
            var21 = var6.bind(var4)(var21);
            var21 = var21.withTiming;
            var16['withTiming'] = var21;
            var21 = var12[var9];
            var21 = var6.bind(var4)(var21);
            var21 = var21.Easing;
            var16['Easing'] = var21;
            var2['__closure'] = var16;
            var16 = 2795589385440.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot25;
            var2['__initData'] = var16;
            var14 = var3.bind(var14)(var2);
            var2 = var12[var9];
            var16 = var6.bind(var4)(var2);
            var3 = var16.useAnimatedStyle;
            var2 = function ct() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = 1;
                    if(!var1) { _fun0014_ip = 41; continue _fun0014 }
case 42:
                    var7 = 0;
case 41:
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 26;
                    var2 = var13[var8];
                    var11 = undefined;
                    var5 = var12.bind(var11)(var2);
                    var4 = var5.withDelay;
                    var2 = 33;
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
            var21 = {};
            var21['showPrompts'] = var39;
            var22 = var12[var9];
            var22 = var6.bind(var4)(var22);
            var22 = var22.withDelay;
            var21['withDelay'] = var22;
            var22 = var12[var24];
            var22 = var6.bind(var4)(var22);
            var22 = var22.withTiming;
            var21['withTiming'] = var22;
            var22 = var12[var9];
            var22 = var6.bind(var4)(var22);
            var22 = var22.Easing;
            var21['Easing'] = var22;
            var2['__closure'] = var21;
            var21 = 13481450530727.0;
            var2['__workletHash'] = var21;
            var21 = _closure1_slot26;
            var2['__initData'] = var21;
            var21 = var3.bind(var16)(var2);
            var2 = var12[var9];
            var16 = var6.bind(var4)(var2);
            var3 = var16.useAnimatedStyle;
            var2 = function dt() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var10 = 0;
                    if(!var2) { _fun0015_ip = 41; continue _fun0015 }
case 48:
                    var10 = 1;
case 41:
                    var17 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var15 = 26;
                    var2 = var12[var15];
                    var14 = undefined;
                    var8 = var17.bind(var14)(var2);
                    var7 = var8.withDelay;
                    var2 = 33;
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
                    if(var7) { _fun0015_ip = 49; continue _fun0015 }
case 50:
                    var7 = _closure2_slot12;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    var9 = 80;
                    if(!var5) { _fun0015_ip = 51; continue _fun0015 }
case 49:
                    var9 = 0;
case 51:
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
            var22 = {};
            var22['showPrompts'] = var39;
            var39 = var12[var9];
            var39 = var6.bind(var4)(var39);
            var39 = var39.withDelay;
            var22['withDelay'] = var39;
            var24 = var12[var24];
            var24 = var6.bind(var4)(var24);
            var24 = var24.withTiming;
            var22['withTiming'] = var24;
            var24 = var12[var9];
            var24 = var6.bind(var4)(var24);
            var24 = var24.Easing;
            var22['Easing'] = var24;
            var22['useReducedMotion'] = var27;
            var2['__closure'] = var22;
            var22 = 14018549800735.0;
            var2['__workletHash'] = var22;
            var22 = _closure1_slot27;
            var2['__initData'] = var22;
            var22 = var3.bind(var16)(var2);
            var3 = var5.useLayoutEffect;
            var2 = new Array(8);
            var2[0] = var13;
            var2[1] = var35;
            var2[2] = var11;
            var2[3] = var38;
            var2[4] = var34;
            var2[5] = var10;
            var2[6] = var8;
            var2[7] = var7;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var5 = 0;
                    if(!(var5 === var2)) { _fun0016_ip = 52; continue _fun0016 }
case 31:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0016_ip = 52; continue _fun0016 }
case 42:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 34;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.getHeaderCloseButton;
                    var2 = function() {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 31;
                            var2 = var9[var1];
                            var1 = undefined;
                            var7 = var3.bind(var1)(var2);
                            var5 = var7.track;
                            var2 = _closure1_slot16;
                            var4 = var2.GUILD_ONBOARDING_STEP_COMPLETED;
                            var3 = {};
                            var8 = _closure1_slot0;
                            var2 = 32;
                            var2 = var9[var2];
                            var10 = var8.bind(var1)(var2);
                            var9 = var10.collectGuildAnalyticsMetadata;
                            var8 = _closure2_slot0;
                            var12 = var9.bind(var10)(var8);
                            var13 = var3;
                            var8 = copyDataProperties(var13, var12);
                            var11 = 0;
                            var8 = 'step';
                            var3[7] = var11;
                            var9 = true;
                            var8 = 'skipped';
                            var3[7] = var9;
                            var10 = false;
                            var8 = 'back';
                            var3[7] = var10;
                            var8 = 'options_selected';
                            var3[7] = var11;
                            var8 = 'in_onboarding';
                            var3[7] = var9;
                            var8 = 'is_final_step';
                            var3[7] = var10;
                            var3 = var5.bind(var7)(var4, var3);
                            var3 = _closure2_slot4;
                            if(var3) { _fun0017_ip = 53; continue _fun0017 }
case 43:
                            var3 = _closure2_slot3;
                            var3 = var3.bind(var1)();
                            _fun0017_ip = 54; continue _fun0017;
case 53:
                            var5 = _closure2_slot0;
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot12;
                            var3 = var4.getLastSelectedChannelId;
                            var7 = var3.bind(var4)();
                            var4 = _closure1_slot10;
                            var3 = var4.getChannel;
                            var3 = var3.bind(var4)(var7);
                            var4 = null;
                            if(!(var4 != var3)) { _fun0017_ip = 55; continue _fun0017 }
case 56:
                            var4 = var3.guild_id;
                            if(!(var4 === var5)) { _fun0017_ip = 57; continue _fun0017 }
case 55:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var8 = var5.bind(var1)(var4);
                            var7 = var8.transitionTo;
                            var4 = _closure1_slot18;
                            var5 = var4.ME;
                            var4 = {};
                            var4['navigationReplace'] = var9;
                            var4 = var7.bind(var8)(var5, var4);
                            _fun0017_ip = 58; continue _fun0017;
case 57:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.transitionTo;
                            var8 = _closure1_slot18;
                            var7 = var8.CHANNEL;
                            var6 = var3.guild_id;
                            var3 = var3.id;
                            var3 = var7.bind(var8)(var6, var3);
                            var3 = var4.bind(var5)(var3);
case 58:
                            var2 = var2.bind(var1)();
case 54:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var6)(var2);
                    _fun0016_ip = 53; continue _fun0016;
case 52:
                    var2 = _closure2_slot1;
                    if(!(var5 === var2)) { _fun0016_ip = 59; continue _fun0016 }
case 60:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0016_ip = 61; continue _fun0016 }
case 59:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 34;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.getHeaderBackButton;
                    var5 = function() {
                        var5 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = 31;
                        var3 = var12[var4];
                        var1 = undefined;
                        var15 = var5.bind(var1)(var3);
                        var14 = var15.track;
                        var3 = _closure1_slot16;
                        var13 = var3.GUILD_ONBOARDING_STEP_COMPLETED;
                        var6 = {};
                        var8 = _closure1_slot0;
                        var7 = 32;
                        var2 = var12[var7];
                        var10 = var8.bind(var1)(var2);
                        var9 = var10.collectGuildAnalyticsMetadata;
                        var11 = _closure2_slot0;
                        var20 = var9.bind(var10)(var11);
                        var21 = var6;
                        var9 = copyDataProperties(var21, var20);
                        var9 = _closure2_slot1;
                        var10 = 'step';
                        var6[9] = var9;
                        var17 = false;
                        var16 = 'skipped';
                        var6[15] = var17;
                        var18 = true;
                        var16 = 'back';
                        var6[15] = var18;
                        var16 = _closure2_slot15;
                        var19 = var16.length;
                        var16 = 'options_selected';
                        var6[15] = var19;
                        var16 = 'in_onboarding';
                        var6[15] = var18;
                        var16 = 'is_final_step';
                        var6[15] = var17;
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
                        var3[9] = var8;
                        var8 = _closure2_slot2;
                        var7 = var9 - var7;
                        var7 = var8[var7];
                        var8 = var7.required;
                        var7 = 'required';
                        var3[6] = var8;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = _closure2_slot9;
                        var2 = var3.pop;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2 = true;
                    var2 = var6.bind(var7)(var5, var2);
                    _fun0016_ip = 62; continue _fun0016;
case 61:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 34;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.getHeaderBackButton;
                    var5 = function() {
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 31;
                        var3 = var8[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot16;
                        var4 = var3.GUILD_ONBOARDING_STEP_COMPLETED;
                        var3 = {};
                        var7 = _closure1_slot0;
                        var2 = 32;
                        var2 = var8[var2];
                        var9 = var7.bind(var1)(var2);
                        var8 = var9.collectGuildAnalyticsMetadata;
                        var7 = _closure2_slot0;
                        var11 = var8.bind(var9)(var7);
                        var12 = var3;
                        var7 = copyDataProperties(var12, var11);
                        var8 = 0;
                        var7 = 'step';
                        var3[6] = var8;
                        var8 = false;
                        var7 = 'skipped';
                        var3[6] = var8;
                        var9 = true;
                        var7 = 'back';
                        var3[6] = var9;
                        var7 = _closure2_slot15;
                        var10 = var7.length;
                        var7 = 'options_selected';
                        var3[6] = var10;
                        var7 = 'in_onboarding';
                        var3[6] = var9;
                        var7 = 'is_final_step';
                        var3[6] = var8;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = _closure2_slot9;
                        var2 = var3.pop;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3 = true;
                    var2 = var6.bind(var7)(var5, var3);
case 62:
                    var4 = var2;
case 53:
                    var3 = _closure2_slot9;
                    var2 = var3.setOptions;
                    var1 = {};
                    var1['headerLeft'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var17.flex;
            var1['style'] = var5;
            var7 = _closure1_slot19;
            var5 = 35;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {'top': true, 'bottom': true};
            var10 = var17.flex;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = var17.container;
            var8[1] = var10;
            var5['style'] = var8;
            var11 = _closure1_slot19;
            var13 = _closure1_slot1;
            var8 = var12[var9];
            var8 = var13.bind(var4)(var8);
            var10 = var8.View;
            var8 = {};
            var24 = var17.flex;
            var16 = new Array(2);
            var16[0] = var24;
            var16[1] = var22;
            var8['style'] = var16;
            var16 = null;
            if(!var20) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var20 = var29 == var37;
            var16 = null;
            if(var20) { _fun0002_ip = 63; continue _fun0002 }
case 65:
            var22 = var37.type;
            var20 = _closure1_slot14;
            var20 = var20.MULTIPLE_CHOICE;
            if(!(var20 !== var22)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var20 = _closure1_slot14;
            var20 = var20.DROPDOWN;
            if(!(var20 !== var22)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 37;
            var20 = var24[var20];
            var24 = var22.bind(var4)(var20);
            var22 = var24.assertNever;
            var20 = var37.type;
            var20 = var22.bind(var24)(var20);
            var16 = undefined;
            _fun0002_ip = 63; continue _fun0002;
case 68:
            var24 = _closure1_slot19;
            var22 = _closure1_slot0;
            var39 = _closure1_slot2;
            var20 = 36;
            var20 = var39[var20];
            var20 = var22.bind(var4)(var20);
            var22 = var20.DropdownPrompt;
            var20 = {};
            var20['guildId'] = var38;
            var20['currentPrompt'] = var37;
            var20['lastPrompt'] = var36;
            var20['currentPromptIndex'] = var35;
            var39 = var34.length;
            var20['numberOfPrompts'] = var39;
            var20['selectOption'] = var32;
            var20['handleOnPress'] = var30;
            var16 = var24.bind(var4)(var22, var20);
            _fun0002_ip = 63; continue _fun0002;
case 66:
            var24 = _closure1_slot19;
            var22 = _closure1_slot0;
            var39 = _closure1_slot2;
            var20 = 36;
            var20 = var39[var20];
            var20 = var22.bind(var4)(var20);
            var22 = var20.MultipleChoicePrompt;
            var20 = {};
            var20['guildId'] = var38;
            var20['currentPrompt'] = var37;
            var20['lastPrompt'] = var36;
            var20['currentPromptIndex'] = var35;
            var34 = var34.length;
            var20['numberOfPrompts'] = var34;
            var20['selectOption'] = var32;
            var20['handleOnPress'] = var30;
            var16 = var24.bind(var4)(var22, var20);
case 63:
            var8['children'] = var16;
            var8 = var11.bind(var4)(var10, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot21;
            var6 = {};
            var8 = _closure1_slot6;
            var8 = var8.absoluteFill;
            var6['style'] = var8;
            var16 = 'none';
            var6['pointerEvents'] = var16;
            var11 = _closure1_slot21;
            var8 = var12[var9];
            var8 = var13.bind(var4)(var8);
            var10 = var8.View;
            var8 = {};
            var22 = var17.flex;
            var20 = new Array(2);
            var20[0] = var22;
            var22 = var17.landingOverlay;
            var20[1] = var22;
            var8['style'] = var20;
            var8['pointerEvents'] = var16;
            var20 = _closure1_slot21;
            var12 = var12[var9];
            var12 = var13.bind(var4)(var12);
            var13 = var12.View;
            var12 = {};
            var22 = var17.landingOverlay;
            var16 = new Array(2);
            var16[0] = var22;
            var16[1] = var21;
            var12['style'] = var16;
            var21 = var29 != var26;
            var16 = null;
            if(!var21) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var24 = _closure1_slot19;
            var22 = _closure1_slot29;
            var21 = {};
            var21['splashUrl'] = var26;
            var21['color'] = var25;
            var16 = var24.bind(var4)(var22, var21);
case 70:
            var21 = new Array(2);
            var21[0] = var16;
            var30 = _closure1_slot19;
            var16 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 21;
            var22 = var25[var22];
            var24 = var16.bind(var4)(var22);
            var22 = {};
            var26 = var17.darkColorGradient;
            var22['style'] = var26;
            var26 = _closure1_slot0;
            var32 = 22;
            var34 = var25[var32];
            var34 = var26.bind(var4)(var34);
            var34 = var34.VerticalGradient;
            var34 = var34.START;
            var22['start'] = var34;
            var32 = var25[var32];
            var32 = var26.bind(var4)(var32);
            var32 = var32.VerticalGradient;
            var32 = var32.END;
            var22['end'] = var32;
            var32 = 19;
            var32 = var25[var32];
            var36 = var26.bind(var4)(var32);
            var35 = var36.hexWithOpacity;
            var32 = var25[var33];
            var32 = var16.bind(var4)(var32);
            var32 = var32.unsafe_rawColors;
            var34 = var32.PRIMARY_800;
            var32 = 0.5;
            var34 = var35.bind(var36)(var34, var32);
            var32 = new Array(2);
            var32[0] = var34;
            var33 = var25[var33];
            var33 = var16.bind(var4)(var33);
            var33 = var33.unsafe_rawColors;
            var33 = var33.PRIMARY_800;
            var32[1] = var33;
            var22['colors'] = var32;
            var22 = var30.bind(var4)(var24, var22);
            var21[1] = var22;
            var12['children'] = var21;
            var12 = var20.bind(var4)(var13, var12);
            var13 = new Array(3);
            var13[0] = var12;
            var21 = _closure1_slot19;
            var12 = var25[var9];
            var12 = var16.bind(var4)(var12);
            var20 = var12.View;
            var12 = {};
            var24 = var17.artWrapper;
            var22 = new Array(2);
            var22[0] = var24;
            var22[1] = var23;
            var12['style'] = var22;
            var24 = _closure1_slot19;
            var22 = 38;
            var22 = var25[var22];
            var23 = var16.bind(var4)(var22);
            var22 = {};
            var22['source'] = var28;
            var27 = !var27;
            var22['autoPlay'] = var27;
            var27 = {};
            var28 = '100%';
            var27['width'] = var28;
            var22['style'] = var27;
            var22 = var24.bind(var4)(var23, var22);
            var12['children'] = var22;
            var12 = var21.bind(var4)(var20, var12);
            var13[1] = var12;
            var23 = _closure1_slot21;
            var12 = var25[var9];
            var12 = var16.bind(var4)(var12);
            var22 = var12.View;
            var21 = {};
            var16 = var17.landingBody;
            var12 = new Array(2);
            var12[0] = var16;
            var12[1] = var15;
            var21['style'] = var12;
            var24 = _closure1_slot19;
            var12 = 39;
            var15 = var25[var12];
            var15 = var26.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-overlay-light'};
            var20 = var17.subtitle;
            var15['style'] = var20;
            var20 = 40;
            var27 = var25[var20];
            var27 = var26.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.format;
            var25 = var25[var20];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var26 = var25.O2bQlD;
            var25 = {};
            var32 = var29 == var31;
            var30 = undefined;
            if(var32) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var30 = var31.name;
case 72:
            var31 = var29 != var30;
            var29 = '';
            if(!var31) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var29 = var30;
case 74:
            var25['guildName'] = var29;
            var25 = var27.bind(var28)(var26, var25);
            var15['children'] = var25;
            var15 = var24.bind(var4)(var16, var15);
            var24 = new Array(2);
            var24[0] = var15;
            var27 = _closure1_slot19;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var25 = var15[var12];
            var25 = var16.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/semibold', 'color': 'text-overlay-light'};
            var28 = var17.onboardingTitle;
            var25['style'] = var28;
            var28 = var15[var20];
            var28 = var16.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var15[var20];
            var28 = var16.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.Alcl/e;
            var28 = var29.bind(var30)(var28);
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var24[1] = var25;
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var13[2] = var21;
            var8['children'] = var13;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot19;
            var10 = _closure1_slot1;
            var9 = var15[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.View;
            var9 = {};
            var21 = var17.onboardingPolicy;
            var13 = new Array(3);
            var13[0] = var21;
            var13[1] = var14;
            var14 = {};
            var14['bottom'] = var18;
            var13[2] = var14;
            var9['style'] = var13;
            var13 = 'auto';
            var9['pointerEvents'] = var13;
            var14 = _closure1_slot19;
            var12 = var15[var12];
            var12 = var16.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'heading-sm/normal', 'color': 'text-default'};
            var17 = var17.onboardingPolicyText;
            var12['style'] = var17;
            var17 = var15[var20];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var15[var20];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.kI6UoD;
            var15 = {};
            var19 = _closure1_slot17;
            var19 = var19.PRIVACY;
            var15['privacyLink'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var7.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();