// app/modules/oauth2/native/useOAuth2AuthorizeForm.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot7 = var8;
    var4 = var4.ActivityIndicator;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMOJI_POINTING_DOWN_CODE_POINT;
    var _closure1_slot13 = var7;
    var4 = var4.OAuth2Steps;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot15 = var7;
    var7 = var4.ApplicationFlags;
    var _closure1_slot16 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot18 = var7;
    var7 = var4.Fragment;
    var _closure1_slot19 = var7;
    var4 = var4.jsxs;
    var _closure1_slot20 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'center', 'justifyContent': 'center'};
    var4['loading'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'justifyContent': 'space-between'};
    var4['switchContainer'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['switchLabelContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/useOAuth2AuthorizeForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOAuth2AuthorizeForm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var17 = var2.clientId;
            var _closure2_slot0 = var17;
            var45 = var2.responseType;
            var _closure2_slot1 = var45;
            var42 = var2.redirectUri;
            var _closure2_slot2 = var42;
            var40 = var2.codeChallenge;
            var _closure2_slot3 = var40;
            var39 = var2.codeChallengeMethod;
            var _closure2_slot4 = var39;
            var23 = var2.state;
            var _closure2_slot5 = var23;
            var50 = var2.nonce;
            var _closure2_slot6 = var50;
            var33 = var2.prompt;
            var _closure2_slot7 = var33;
            var16 = var2.scopes;
            var _closure2_slot8 = var16;
            var3 = var2.permissions;
            var _closure2_slot9 = var3;
            var22 = var2.guildId;
            var12 = var2.channelId;
            var15 = var2.integrationType;
            var _closure2_slot10 = var15;
            var60 = var2.disableGuildSelect;
            var5 = undefined;
            if(!(var60 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var60 = false;
case 2:
            var46 = var2.isTrustedName;
            if(!(var46 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var46 = false;
case 4:
            var28 = var2.isEmbeddedFlow;
            if(!(var28 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var28 = false;
case 6:
            var4 = var2.withBackPressHandler;
            if(!(var4 === var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = true;
case 8:
            var49 = var2.callback;
            var _closure2_slot11 = var49;
            var55 = var2.callbackWithoutPost;
            var _closure2_slot12 = var55;
            var1 = var2.dismissOAuthModal;
            var _closure2_slot13 = var1;
            var61 = var2.disclosures;
            var _closure2_slot14 = var61;
            var18 = var2.wasDeepLink;
            if(!(var18 === var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = false;
case 10:
            var _closure2_slot15 = var18;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var _closure2_slot26 = var5;
            var _closure2_slot27 = var5;
            var _closure2_slot28 = var5;
            var _closure2_slot29 = var5;
            var _closure2_slot30 = var5;
            var _closure2_slot31 = var5;
            var _closure2_slot32 = var5;
            var _closure2_slot33 = var5;
            var _closure2_slot34 = var5;
            var _closure2_slot35 = var5;
            var _closure2_slot36 = var5;
            var _closure2_slot37 = var5;
            var _closure2_slot38 = var5;
            var _closure2_slot39 = var5;
            var _closure2_slot40 = var5;
            var _closure2_slot41 = var5;
            var _closure2_slot42 = var5;
            var _closure2_slot43 = var5;
            var _closure2_slot44 = var5;
            var _closure2_slot45 = var5;
            var _closure2_slot46 = var5;
            var _closure2_slot47 = var5;
            var _closure2_slot48 = var5;
            var _closure2_slot49 = var5;
            var _closure2_slot50 = var5;
            var _closure2_slot51 = var5;
            var _closure2_slot52 = var5;
            var _closure2_slot53 = var5;
            var _closure2_slot54 = var5;
            var _closure2_slot55 = var5;
            var _closure2_slot56 = var5;
            var _closure2_slot57 = var5;
            var _closure2_slot58 = var5;
            var _closure2_slot59 = var5;
            var _closure2_slot60 = var5;
            var _closure2_slot61 = var5;
            var _closure2_slot62 = var5;
            var _closure2_slot63 = var5;
            var7 = _closure1_slot21;
            var56 = var7.bind(var5)();
            _closure2_slot16 = var56;
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var7 = 12;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var9 = var7.ActivityDMNoPushExperiment;
            var8 = var9.useExperiment;
            var7 = {};
            var10 = 'oauth2_authorize';
            var7['location'] = var10;
            var31 = var8.bind(var9)(var7);
            _closure2_slot17 = var31;
            var11 = _closure1_slot6;
            var7 = var11.useState;
            var24 = null;
            var7 = var7.bind(var11)(var24);
            var10 = _closure1_slot5;
            var14 = 2;
            var7 = var10.bind(var5)(var7, var14);
            var57 = 0;
            var19 = var7[var57];
            _closure2_slot18 = var19;
            var8 = 1;
            var7 = var7[var8];
            _closure2_slot19 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var20 = var7[var57];
            _closure2_slot20 = var20;
            var7 = var7[var8];
            _closure2_slot21 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var9 = var7[var57];
            _closure2_slot22 = var9;
            var7 = var7[var8];
            _closure2_slot23 = var7;
            var7 = var11.useState;
            var13 = false;
            var7 = var7.bind(var11)(var13);
            var7 = var10.bind(var5)(var7, var14);
            var21 = var7[var57];
            var7 = var7[var8];
            _closure2_slot24 = var7;
            var7 = var24 == var19;
            var35 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var35 = var19.guilds;
case 12:
            _closure2_slot25 = var35;
            var11 = _closure1_slot6;
            var10 = var11.useState;
            var25 = var24 != var22;
            var7 = null;
            if(!var25) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var22;
case 14:
            var10 = var10.bind(var11)(var7);
            var7 = _closure1_slot5;
            var7 = var7.bind(var5)(var10, var14);
            var52 = var7[var57];
            _closure2_slot26 = var52;
            var59 = var7[var8];
            _closure2_slot27 = var59;
            var11 = _closure1_slot6;
            var10 = var11.useState;
            var22 = var24 != var12;
            var7 = null;
            if(!var22) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var12;
case 16:
            var7 = var10.bind(var11)(var7);
            var10 = _closure1_slot5;
            var7 = var10.bind(var5)(var7, var14);
            var36 = var7[var57];
            _closure2_slot28 = var36;
            var51 = var7[var8];
            _closure2_slot29 = var51;
            var11 = _closure1_slot6;
            var12 = var11.useState;
            var22 = _closure1_slot2;
            var7 = _closure1_slot3;
            var43 = 13;
            var7 = var7[var43];
            var7 = var22.bind(var5)(var7);
            var7 = var7.NONE;
            var7 = var12.bind(var11)(var7);
            var7 = var10.bind(var5)(var7, var14);
            var44 = var7[var57];
            _closure2_slot30 = var44;
            var7 = var7[var8];
            _closure2_slot31 = var7;
            var10 = var11.useState;
            var12 = var31.defaultOnMobile;
            var7 = var24 != var12;
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var12;
case 18:
            var7 = var10.bind(var11)(var7);
            var10 = _closure1_slot5;
            var7 = var10.bind(var5)(var7, var14);
            var54 = var7[var57];
            _closure2_slot32 = var54;
            var53 = var7[var8];
            _closure2_slot33 = var53;
            var34 = _closure1_slot0;
            var32 = _closure1_slot3;
            var11 = 14;
            var7 = var32[var11];
            var25 = var34.bind(var5)(var7);
            var22 = var25.useStateFromStores;
            var7 = _closure1_slot12;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var22.bind(var25)(var12, var7);
            var30 = _closure1_slot6;
            var22 = var30.useMemo;
            var12 = new Array(2);
            var12[0] = var35;
            var12[1] = var52;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot25;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var4 = _closure2_slot25;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot26;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 20:
                    return var1;
                }
            };
            var37 = var22.bind(var30)(var7, var12);
            _closure2_slot34 = var37;
            var7 = var30.useState;
            var7 = var7.bind(var30)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var48 = var7[var57];
            _closure2_slot35 = var48;
            var7 = var7[var8];
            _closure2_slot36 = var7;
            var7 = var30.useState;
            var7 = var7.bind(var30)(var13);
            var7 = var10.bind(var5)(var7, var14);
            var10 = var7[var57];
            _closure2_slot37 = var10;
            var7 = var7[var8];
            _closure2_slot38 = var7;
            var11 = var32[var11];
            var25 = var34.bind(var5)(var11);
            var22 = var25.useStateFromStores;
            var11 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var1 = _closure1_slot10;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var38 = var22.bind(var25)(var12, var11);
            _closure2_slot39 = var38;
            var11 = 15;
            var11 = var32[var11];
            var12 = var34.bind(var5)(var11);
            var11 = var12.useIsScreenReaderEnabled;
            var12 = var11.bind(var12)();
            _closure2_slot40 = var12;
            var25 = 16;
            var11 = var32[var25];
            var26 = var34.bind(var5)(var11);
            var22 = var26.useAnimatedStyle;
            var11 = function J() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot39;
                    if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var1 = {};
                    var3 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var2 = 16;
                    var4 = var16[var2];
                    var14 = undefined;
                    var6 = var15.bind(var14)(var4);
                    var5 = var6.withSequence;
                    var7 = 17;
                    var4 = var16[var7];
                    var10 = var15.bind(var14)(var4);
                    var9 = var10.withTiming;
                    var8 = {};
                    var4 = 250;
                    var8['duration'] = var4;
                    var4 = var16[var2];
                    var4 = var15.bind(var14)(var4);
                    var12 = var4.Easing;
                    var11 = var12.inOut;
                    var4 = var16[var2];
                    var4 = var15.bind(var14)(var4);
                    var4 = var4.Easing;
                    var4 = var4.quad;
                    var4 = var11.bind(var12)(var4);
                    var8['easing'] = var4;
                    var4 = -5;
                    var4 = var9.bind(var10)(var4, var8);
                    var8 = var16[var2];
                    var10 = var15.bind(var14)(var8);
                    var9 = var10.withRepeat;
                    var7 = var16[var7];
                    var11 = var15.bind(var14)(var7);
                    var8 = var11.withTiming;
                    var7 = {};
                    var12 = 500;
                    var7['duration'] = var12;
                    var12 = var16[var2];
                    var12 = var15.bind(var14)(var12);
                    var13 = var12.Easing;
                    var12 = var13.inOut;
                    var2 = var16[var2];
                    var2 = var15.bind(var14)(var2);
                    var2 = var2.Easing;
                    var2 = var2.quad;
                    var2 = var12.bind(var13)(var2);
                    var7['easing'] = var2;
                    var2 = 5;
                    var8 = var8.bind(var11)(var2, var7);
                    var7 = -1;
                    var2 = true;
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = var5.bind(var6)(var4, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    _fun0003_ip = 24; continue _fun0003;
case 22:
                    var1 = {};
case 24:
                    return var1;
                }
            };
            var29 = {};
            var29['shouldReduceMotion'] = var38;
            var38 = var32[var25];
            var38 = var34.bind(var5)(var38);
            var38 = var38.withSequence;
            var29['withSequence'] = var38;
            var38 = 17;
            var38 = var32[var38];
            var38 = var34.bind(var5)(var38);
            var38 = var38.withTiming;
            var29['withTiming'] = var38;
            var38 = var32[var25];
            var38 = var34.bind(var5)(var38);
            var38 = var38.Easing;
            var29['Easing'] = var38;
            var32 = var32[var25];
            var32 = var34.bind(var5)(var32);
            var32 = var32.withRepeat;
            var29['withRepeat'] = var32;
            var11['__closure'] = var29;
            var29 = 1476082137097.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot22;
            var11['__initData'] = var29;
            var29 = var22.bind(var26)(var11);
            var26 = var30.useMemo;
            var22 = var24 == var16;
            var11 = undefined;
            if(var22) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var11 = var16.length;
case 25:
            var22 = new Array(3);
            var22[0] = var11;
            var22[1] = var42;
            var22[2] = var15;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var1 = var3 == var1;
                    if(!var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var4 = _closure2_slot8;
                    var4 = var3 == var4;
                    var6 = undefined;
                    if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var4 = _closure2_slot8;
                    var6 = var4.length;
case 29:
                    var7 = var3 != var6;
                    var5 = 0;
                    var4 = 0;
                    if(!var7) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var4 = var6;
case 31:
                    var1 = var5 === var4;
case 27:
                    if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var2 = _closure2_slot2;
                    var1 = var3 == var2;
case 33:
                    return var1;
                }
            };
            var22 = var26.bind(var30)(var11, var22);
            _closure2_slot41 = var22;
            var32 = _closure1_slot6;
            var11 = var32.useState;
            var26 = var11.bind(var32)(var24);
            var11 = _closure1_slot5;
            var11 = var11.bind(var5)(var26, var14);
            var34 = var11[var57];
            _closure2_slot42 = var34;
            var11 = var11[var8];
            _closure2_slot43 = var11;
            var30 = var32.useEffect;
            var26 = new Array(2);
            var26[0] = var17;
            var26[1] = var22;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot41;
                    if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 35:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchApplication;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var3 = _closure2_slot43;
                        var4 = _closure1_slot11;
                        var2 = var4.createFromServer;
                        var1 = arg1;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var30.bind(var32)(var11, var26);
            var30 = var32.useMemo;
            var26 = var24 == var34;
            var11 = undefined;
            if(var26) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var11 = var34.integrationTypesConfig;
case 36:
            var26 = new Array(2);
            var26[0] = var11;
            var26[1] = var48;
            var11 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot35;
                    var4 = null;
                    var2 = var4 == var1;
                    var1 = null;
                    if(var2) { _fun0006_ip = 38; continue _fun0006 }
case 21:
                    var2 = _closure2_slot42;
                    var6 = var4 == var2;
                    var2 = undefined;
                    if(var6) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var6 = _closure2_slot42;
                    var6 = var6.integrationTypesConfig;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 39; continue _fun0006 }
case 41:
                    var3 = _closure2_slot35;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 39; continue _fun0006 }
case 33:
                    var2 = var3.oauth2InstallParams;
case 39:
                    var1 = var2;
case 38:
                    return var1;
                }
            };
            var11 = var30.bind(var32)(var11, var26);
            _closure2_slot44 = var11;
            var32 = _closure1_slot6;
            var30 = var32.useMemo;
            var26 = var24 == var11;
            var38 = undefined;
            if(var26) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var38 = var11.scopes;
case 42:
            var26 = new Array(3);
            var26[0] = var38;
            var26[1] = var16;
            var26[2] = var22;
            var16 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot41;
                    if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 44:
                    var6 = _closure2_slot8;
                    _fun0007_ip = 45; continue _fun0007;
case 21:
                    var4 = _closure2_slot44;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var3 = _closure2_slot44;
                    var2 = var3.scopes;
case 46:
                    var6 = var2;
case 45:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 19;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filterScopes;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var6 = new Array(0);
case 48:
                    var3 = var3.bind(var4)(var6);
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 20;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var4 = var2.OrderedAccountScopes;
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var1['requestedScopes'] = var3;
                    var1['accountScopes'] = var2;
                    return var1;
                }
            };
            var16 = var30.bind(var32)(var16, var26);
            var32 = var16.requestedScopes;
            _closure2_slot45 = var32;
            var26 = var16.accountScopes;
            var30 = _closure1_slot6;
            var16 = var30.useMemo;
            var41 = var24 == var11;
            var38 = undefined;
            if(var41) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var38 = var11.permissions;
case 50:
            var11 = new Array(3);
            var11[0] = var38;
            var11[1] = var3;
            var11[2] = var22;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot41;
                    if(var1) { _fun0008_ip = 28; continue _fun0008 }
case 35:
                    var1 = _closure2_slot9;
                    _fun0008_ip = 48; continue _fun0008;
case 28:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 21;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.deserialize;
                    var7 = _closure2_slot44;
                    var2 = null;
                    var7 = var2 == var7;
                    if(var7) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var6 = _closure2_slot44;
                    var5 = var6.permissions;
case 52:
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var2 = var5;
case 54:
                    var1 = var3.bind(var4)(var2);
case 48:
                    var2 = null;
                    if(!(var2 == var1)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.NONE;
case 56:
                    return var1;
                }
            };
            var41 = var16.bind(var30)(var3, var11);
            _closure2_slot46 = var41;
            var16 = _closure1_slot6;
            var3 = var16.useState;
            var3 = var3.bind(var16)(var13);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var14);
            var47 = var3[var57];
            _closure2_slot47 = var47;
            var3 = var3[var8];
            _closure2_slot48 = var3;
            var38 = var16.useEffect;
            var30 = new Array(1);
            var30[0] = var17;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.checkIfOAuthRequest;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = var4.then;
                var2 = _closure2_slot48;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var38.bind(var16)(var3, var30);
            var3 = var16.useState;
            var3 = var3.bind(var16)(var24);
            var3 = var11.bind(var5)(var3, var14);
            var30 = var3[var57];
            var16 = var3[var8];
            var38 = var23;
            if(!var47) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var11 = _closure1_slot0;
            var58 = _closure1_slot3;
            var3 = 23;
            var3 = var58[var3];
            var11 = var11.bind(var5)(var3);
            var3 = var11.getAPIBaseURL;
            var11 = var3.bind(var11)(var13);
            var3 = '/v6';
            var11 = var11 + var3;
            var3 = _closure1_slot17;
            var3 = var3.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK;
            var11 = var11 + var3;
            _closure2_slot2 = var11;
            var3 = var24 == var23;
            if(!var3) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var3 = var24 == var30;
case 60:
            if(!var3) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var58 = _closure1_slot0;
            var62 = _closure1_slot3;
            var3 = 24;
            var3 = var62[var3];
            var58 = var58.bind(var5)(var3);
            var3 = var58.v4;
            var3 = var3.bind(var58)();
            var3 = var16.bind(var5)(var3);
case 62:
            var3 = var23;
            if(!(var24 != var30)) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var16 = var23;
            if(!(var24 == var23)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var23 = 'SA';
            var16 = var23 + var30;
case 66:
            _closure2_slot5 = var16;
            var3 = var16;
case 64:
            var38 = var3;
            var42 = var11;
case 58:
            var16 = _closure1_slot6;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot49 = var3;
            var11 = var16.useState;
            var3 = var61;
            if(!(var24 == var3)) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var3 = new Array(0);
case 68:
            var3 = var11.bind(var16)(var3);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var14);
            var30 = var3[var57];
            _closure2_slot50 = var30;
            var58 = var3[var8];
            _closure2_slot51 = var58;
            var16 = _closure1_slot6;
            var23 = var16.useState;
            var3 = var24 != var61;
            var3 = var23.bind(var16)(var3);
            var3 = var11.bind(var5)(var3, var14);
            var23 = var3[var57];
            _closure2_slot52 = var23;
            var3 = var3[var8];
            _closure2_slot53 = var3;
            var14 = var16.useEffect;
            var11 = new Array(4);
            var11[0] = var17;
            var11[1] = var61;
            var11[2] = var58;
            var11[3] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot49;
                    var1 = var1.current;
                    if(var1) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var1 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0010_ip = 72; continue _fun0010 }
case 35:
                                    var2 = undefined;
                                    var6 = undefined;
                                    var5 = _closure2_slot49;
                                    var4 = true;
                                    var5['current'] = var4;
case 30: // try_start_0 // try_start_1
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var4 = 25;
                                    var4 = var7[var4];
                                    var7 = var5.bind(var2)(var4);
                                    var5 = var7.getDisclosures;
                                    var4 = _closure2_slot0;
                                    var4 = var5.bind(var7)(var4);
                                    SaveGenerator(address=71);
case 73:
                                    return var4;
case 74:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(var5) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                                    var7 = var4.disclosures;
                                    var5 = var4.allAcked;
                                    var8 = _closure2_slot53;
                                    var5 = !var5;
                                    var5 = var8.bind(var2)(var5);
                                    var5 = _closure2_slot51;
                                    var5 = var5.bind(var2)(var7);
case 77: // try_end0
                                    _fun0010_ip = 78; continue _fun0010;
case 75: // try_end1
                                    var7 = _closure2_slot49;
                                    var5 = false;
                                    var7['current'] = var5;
                                    return var4;
case 79: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    var8 = var4.body;
                                    var6 = var8;
                                    var5 = _closure2_slot23;
                                    var4 = global;
                                    var7 = var4.Error;
                                    var9 = var8.message;
                                    var8 = null;
                                    if(!(var8 == var9)) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                                    var9 = var4.Object;
                                    var8 = var9.keys;
                                    var12 = var6;
                                    var8 = var8.bind(var9)(var12);
                                    var9 = 0;
                                    var11 = var8[var9];
                                    var10 = var4.Object;
                                    var8 = var10.values;
                                    var8 = var8.bind(var10)(var12);
                                    var10 = var8[var9];
                                    var4 = var4.HermesInternal;
                                    var9 = var4.concat;
                                    var8 = '';
                                    var4 = ': ';
                                    var4 = var9.bind(var8)(var11, var4, var10);
                                    _fun0010_ip = 82; continue _fun0010;
case 80:
                                    var4 = var6.message;
case 82:
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {constructor: {value: var7}});
                                    var16 = var6;
                                    var15 = var4;
                                    var4 = new var16[var7](var15, var14);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    var4 = var5.bind(var2)(var4);
case 78: // try_end2
                                    var5 = _closure2_slot49;
                                    var4 = false;
                                    var5['current'] = var4;
                                    return var2;
case 83: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register=1);
                                    var4 = _closure2_slot49;
                                    var3 = false;
                                    var4['current'] = var3;
                                    throw var2;
case 72:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var4 = _closure2_slot14;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0009_ip = 70; continue _fun0009 }
case 29:
                    var1 = var1.bind(var2)();
case 70:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var14.bind(var16)(var3, var11);
            var14 = var16.useCallback;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0011_ip = 84; continue _fun0011 }
case 23:
                            var3 = var2.isAuthorized;
                            var11 = var2.overrideSuccessCallback;
                            var15 = var2.canceled;
                            var5 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=41);
case 20:
                            return var5;
case 85:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0011_ip = 86; continue _fun0011 }
case 41:
                            var8 = _closure2_slot12;
                            var6 = null;
                            if(!(var6 == var8)) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                            var8 = _closure2_slot35;
                            if(!(var6 == var8)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                            var9 = _closure2_slot23;
                            var8 = global;
                            var13 = var8.Error;
                            var8 = var13.prototype;
                            var12 = Object.create(var8, {constructor: {value: var13}});
                            var22 = 'No integration type was selected.';
                            var23 = var12;
                            var8 = new var23[var13](var22, var21);
                            var8 = var8 instanceof Object ? var8 : var12;
                            var8 = var9.bind(var5)(var8);
                            _fun0011_ip = 91; continue _fun0011;
case 89: // try_start_0 // try_start_2
                            var9 = _closure2_slot24;
                            var8 = true;
                            var8 = var9.bind(var5)(var8);
                            var16 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var8 = 26;
                            var8 = var14[var8];
                            var13 = var16.bind(var5)(var8);
                            var12 = var13.authorize;
                            var8 = {};
                            var17 = var3;
                            var8['authorize'] = var17;
                            var17 = _closure2_slot0;
                            var8['clientId'] = var17;
                            var17 = _closure2_slot45;
                            var8['scopes'] = var17;
                            var17 = _closure2_slot1;
                            var8['responseType'] = var17;
                            var17 = _closure2_slot2;
                            var8['redirectUri'] = var17;
                            var17 = _closure2_slot3;
                            var8['codeChallenge'] = var17;
                            var17 = _closure2_slot4;
                            var8['codeChallengeMethod'] = var17;
                            var17 = _closure2_slot5;
                            var8['state'] = var17;
                            var17 = _closure2_slot6;
                            var8['nonce'] = var17;
                            var18 = _closure1_slot2;
                            var17 = 21;
                            var17 = var14[var17];
                            var20 = var18.bind(var5)(var17);
                            var19 = var20.remove;
                            var18 = _closure2_slot46;
                            var17 = _closure2_slot30;
                            var17 = var19.bind(var20)(var18, var17);
                            var8['permissions'] = var17;
                            var17 = _closure2_slot35;
                            var18 = 27;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0011_ip = 92; continue _fun0011 }
case 93:
                            var16 = _closure2_slot26;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0011_ip = 92; continue _fun0011 }
case 94:
                            var14 = _closure2_slot26;
case 92:
                            var8['guildId'] = var14;
                            var17 = _closure2_slot35;
                            var16 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                            var16 = _closure2_slot28;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0011_ip = 95; continue _fun0011 }
case 97:
                            var14 = _closure2_slot28;
case 95:
                            var8['channelId'] = var14;
                            var14 = _closure2_slot35;
                            var8['integrationType'] = var14;
                            var14 = {};
                            var16 = _closure2_slot32;
                            var14['allowMobilePush'] = var16;
                            var8['dmSettings'] = var14;
                            var8 = var12.bind(var13)(var8);
                            SaveGenerator(address=433);
case 98:
                            return var8;
case 99:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                            if(var12) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                            var10 = var8;
                            var12 = var3;
                            if(!var12) { _fun0011_ip = 102; continue _fun0011 }
case 103:
                            var14 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var12 = 28;
                            var12 = var13[var12];
                            var14 = var14.bind(var5)(var12);
                            var12 = var14.fetch;
                            var12 = var12.bind(var14)();
                            var12 = _closure1_slot0;
                            var9 = 25;
                            var9 = var13[var9];
                            var14 = var12.bind(var5)(var9);
                            var13 = var14.ackDisclosures;
                            var12 = _closure2_slot0;
                            var9 = _closure2_slot50;
                            var9 = var13.bind(var14)(var12, var9);
                            SaveGenerator(address=521);
case 104:
                            return var9;
case 105:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0011_ip = 106; continue _fun0011 }
case 102:
                            var12 = var11;
                            if(!(var6 == var12)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                            var12 = _closure2_slot13;
                            if(!(var6 != var12)) { _fun0011_ip = 109; continue _fun0011 }
case 110:
                            var12 = _closure2_slot13;
                            var12 = var12.bind(var5)();
case 109:
                            var12 = global;
                            var14 = var12.Promise;
                            var12 = var14.prototype;
                            var13 = Object.create(var12, {constructor: {value: var14}});
                            var22 = function(arg1) {
                                var1 = global;
                                var4 = var1.setTimeout;
                                var3 = undefined;
                                var2 = arg1;
                                var1 = 100;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            };
                            var23 = var13;
                            var12 = new var23[var14](var22, var21);
                            var12 = var12 instanceof Object ? var12 : var13;
                            SaveGenerator(address=595);
case 111:
                            return var12;
case 112:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                            if(var13) { _fun0011_ip = 113; continue _fun0011 }
case 114:
                            var13 = _closure2_slot11;
                            if(!(var6 != var13)) { _fun0011_ip = 115; continue _fun0011 }
case 116:
                            var14 = _closure2_slot11;
                            var13 = {};
                            var21 = var10;
                            var22 = var13;
                            var16 = copyDataProperties(var22, var21);
                            var16 = var15;
                            var15 = 'canceled';
                            var13[var15] = var16;
                            var15 = _closure2_slot18;
                            var15 = var6 == var15;
                            var16 = undefined;
                            if(var15) { _fun0011_ip = 117; continue _fun0011 }
case 118:
                            var15 = _closure2_slot18;
                            var16 = var15.application;
case 117:
                            var15 = 'application';
                            var13[var15] = var16;
                            var16 = _closure2_slot34;
                            var15 = 'guild';
                            var13[var15] = var16;
                            var16 = _closure2_slot15;
                            var15 = 'wasDeepLink';
                            var13[var15] = var16;
                            var13 = var14.bind(var5)(var13);
                            _fun0011_ip = 115; continue _fun0011;
case 113: // try_end0 // try_end2
                            var14 = _closure2_slot24;
                            var13 = false;
                            var13 = var14.bind(var5)(var13);
                            return var12;
case 107: // try_start_1 // try_start_3
                            var10 = var10.location;
                            var10 = var11.bind(var5)(var10);
case 115: // try_end1
                            _fun0011_ip = 119; continue _fun0011;
case 106: // try_end3
                            var11 = _closure2_slot24;
                            var10 = false;
                            var10 = var11.bind(var5)(var10);
                            return var9;
case 100:
                            var10 = _closure2_slot24;
                            var9 = false;
                            var9 = var10.bind(var5)(var9);
                            return var8;
case 120: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=7);
                            var8 = var8.body;
                            var7 = var8;
                            var9 = var6 == var8;
                            var8 = undefined;
                            if(var9) { _fun0011_ip = 121; continue _fun0011 }
case 122:
                            var9 = var7;
                            var8 = var9.message;
case 121:
                            if(!(var6 != var8)) { _fun0011_ip = 123; continue _fun0011 }
case 124:
                            var8 = var7;
                            var9 = var8.message;
                            var8 = '';
                            if(!(var8 === var9)) { _fun0011_ip = 125; continue _fun0011 }
case 123:
                            var9 = _closure2_slot23;
                            var8 = var7;
                            var8 = var9.bind(var5)(var8);
                            var9 = _closure2_slot21;
                            var8 = _closure1_slot14;
                            var8 = var8.AUTHORIZE_SCOPES;
                            var8 = var9.bind(var5)(var8);
                            _fun0011_ip = 119; continue _fun0011;
case 125:
                            var8 = _closure2_slot23;
                            var9 = global;
                            var10 = var9.Error;
                            var22 = var7.message;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {constructor: {value: var10}});
                            var23 = var9;
                            var7 = new var23[var10](var22, var21);
                            var7 = var7 instanceof Object ? var7 : var9;
                            var7 = var8.bind(var5)(var7);
                            var8 = _closure2_slot21;
                            var7 = _closure1_slot14;
                            var7 = var7.AUTHORIZE_SCOPES;
                            var7 = var8.bind(var5)(var7);
case 119: // try_end4
                            var8 = _closure2_slot24;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
case 91:
                            return var5;
case 126: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=6);
                            var9 = _closure2_slot24;
                            var8 = false;
                            var8 = var9.bind(var5)(var8);
                            throw var7;
case 87:
                            var8 = _closure2_slot24;
                            var7 = true;
                            var7 = var8.bind(var5)(var7);
                            var7 = _closure2_slot12;
                            var3 = var7.bind(var5)(var3);
                            var3 = _closure2_slot13;
                            var3 = var6 == var3;
                            if(var3) { _fun0011_ip = 127; continue _fun0011 }
case 128:
                            var4 = _closure2_slot13;
                            var3 = var4.bind(var5)();
case 127:
                            var3 = undefined;
                            return var3;
case 86:
                            return var2;
case 84:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var11 = var3.bind(var5)();
            var3 = new Array(21);
            var3[0] = var48;
            var3[1] = var55;
            var3[2] = var17;
            var3[3] = var32;
            var3[4] = var45;
            var3[5] = var42;
            var3[6] = var40;
            var3[7] = var39;
            var3[8] = var38;
            var3[9] = var50;
            var3[10] = var41;
            var3[11] = var44;
            var3[12] = var52;
            var3[13] = var36;
            var3[14] = var30;
            var3[15] = var1;
            var3[16] = var49;
            var3[17] = var18;
            var49 = var24 == var19;
            var18 = undefined;
            if(var49) { _fun0001_ip = 129; continue _fun0001 }
case 130:
            var18 = var19.application;
case 129:
            var3[18] = var18;
            var3[19] = var37;
            var3[20] = var54;
            var11 = var14.bind(var16)(var11, var3);
            _closure2_slot54 = var11;
            var16 = _closure1_slot6;
            var18 = var16.useCallback;
            var14 = new Array(1);
            var14[0] = var11;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot54;
                    var2 = {};
                    var4 = _closure3_slot0;
                    var2['isAuthorized'] = var4;
                    var1 = function overrideSuccessCallback(arg1) {
                        var3 = _closure4_slot0;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['overrideSuccessCallback'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var3 = var18.bind(var16)(var3, var14);
            _closure2_slot55 = var3;
            var18 = var16.useCallback;
            var14 = new Array(8);
            var14[0] = var17;
            var14[1] = var47;
            var14[2] = var45;
            var14[3] = var11;
            var14[4] = var3;
            var14[5] = var38;
            var14[6] = var1;
            var14[7] = var32;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot47;
                    if(var4) { _fun0012_ip = 70; continue _fun0012 }
case 131:
                    var4 = _closure2_slot54;
                    var3 = {};
                    var3['isAuthorized'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0012_ip = 132; continue _fun0012;
case 70:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.showConnectionDisclaimer;
                    var4 = var2.bind(var3)();
                    var3 = var4.then;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 22;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.getAccountUrlAndAuthCode;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var6 = undefined;
                            var2 = var2 === var6;
                            var10 = undefined;
                            if(var2) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                            var10 = var4;
case 133:
                            var4 = undefined;
                            if(var2) { _fun0013_ip = 135; continue _fun0013 }
case 136:
                            var5 = var3().value;
                            var3 = var1;
                            var3 = var3 === var6;
                            var4 = undefined;
                            var2 = var3;
                            if(var3) { _fun0013_ip = 135; continue _fun0013 }
case 137:
                            var4 = var5;
                            var2 = var3;
case 135:
                            if(var2) { _fun0013_ip = 138; continue _fun0013 }
case 53:
                            var1.return();
case 138:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.all;
                            var1 = new Array(2);
                            var1[0] = var4;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var4 = 26;
                            var4 = var7[var4];
                            var9 = var5.bind(var6)(var4);
                            var8 = var9.startSamsungAuthorization;
                            var15 = _closure2_slot0;
                            var14 = _closure2_slot45;
                            var13 = _closure2_slot1;
                            var11 = _closure2_slot5;
                            var16 = var9;
                            var12 = var10;
                            var4 = var16[var8](var15, var14, var13, var12, var11, var10);
                            var1[1] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var5 = var3().value;
                            var2 = var1;
                            var6 = undefined;
                            var2 = var2 === var6;
                            var4 = undefined;
                            if(var2) { _fun0014_ip = 133; continue _fun0014 }
case 134:
                            var4 = var5;
case 133:
                            if(var2) { _fun0014_ip = 85; continue _fun0014 }
case 139:
                            var3 = var3().value;
                            var3 = var1;
                            var2 = var3 === var6;
case 85:
                            if(var2) { _fun0014_ip = 140; continue _fun0014 }
case 141:
                            var1.return();
case 140:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.all;
                            var1 = new Array(2);
                            var1[0] = var4;
                            var5 = _closure2_slot55;
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var6)(var4);
                            var1[1] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var6 = arg1;
                            var1 = var6[Symbol.iterator];
                            var6 = var1().next;
                            var4 = var6().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var5 = undefined;
                            if(var2) { _fun0015_ip = 133; continue _fun0015 }
case 134:
                            var5 = var4;
case 133:
                            var4 = undefined;
                            if(var2) { _fun0015_ip = 135; continue _fun0015 }
case 136:
                            var7 = var6().value;
                            var6 = var1;
                            var6 = var6 === var3;
                            var4 = undefined;
                            var2 = var6;
                            if(var6) { _fun0015_ip = 135; continue _fun0015 }
case 137:
                            var4 = var7;
                            var2 = var6;
case 135:
                            if(var2) { _fun0015_ip = 138; continue _fun0015 }
case 53:
                            var1.return();
case 138:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var1 = 22;
                            var1 = var6[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.finishSamsungAuthorization;
                            var1 = _closure2_slot5;
                            var1 = var2.bind(var3)(var5, var4, var1);
                            return var1;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var3 = _closure2_slot13;
                            var1 = null;
                            var4 = var1 == var3;
                            var3 = undefined;
                            var1 = undefined;
                            if(var4) { _fun0016_ip = 142; continue _fun0016 }
case 143:
                            var2 = _closure2_slot13;
                            var1 = var2.bind(var3)();
case 142:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 132:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var18.bind(var16)(var3, var14);
            _closure2_slot56 = var3;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot57 = var3;
            var18 = var16.useCallback;
            var14 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 144; continue _fun0017 }
case 35:
                        var2 = undefined;
                        var10 = undefined;
                        var6 = undefined;
                        var3 = _closure2_slot57;
                        var3 = var3.current;
                        if(var3) { _fun0017_ip = 145; continue _fun0017 }
case 146:
                        var3 = _closure2_slot57;
                        var9 = true;
                        var3['current'] = var9;
case 45: // try_start_0 // try_start_1
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 26;
                        var3 = var8[var3];
                        var8 = var7.bind(var2)(var3);
                        var7 = var8.fetchAuthorization;
                        var3 = {};
                        var11 = _closure2_slot0;
                        var3['clientId'] = var11;
                        var11 = _closure2_slot45;
                        var3['scopes'] = var11;
                        var11 = _closure2_slot1;
                        var3['responseType'] = var11;
                        var11 = _closure2_slot2;
                        var3['redirectUri'] = var11;
                        var11 = _closure2_slot3;
                        var3['codeChallenge'] = var11;
                        var11 = _closure2_slot4;
                        var3['codeChallengeMethod'] = var11;
                        var11 = _closure2_slot5;
                        var3['state'] = var11;
                        var12 = _closure2_slot35;
                        var11 = null;
                        var12 = var11 != var12;
                        var11 = undefined;
                        if(!var12) { _fun0017_ip = 147; continue _fun0017 }
case 148:
                        var11 = _closure2_slot35;
case 147:
                        var3['integrationType'] = var11;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address=172);
case 149:
                        return var3;
case 9:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0017_ip = 150; continue _fun0017 }
case 151:
                        var10 = var3;
                        var8 = _closure2_slot19;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var7 = 30;
                        var7 = var14[var7];
                        var11 = var13.bind(var2)(var7);
                        var7 = var11.convertOAuth2Authorization;
                        var7 = var7.bind(var11)(var3);
                        var7 = var8.bind(var2)(var7);
                        var12 = _closure2_slot7;
                        var11 = 31;
                        var11 = var14[var11];
                        var11 = var13.bind(var2)(var11);
                        var11 = var11.OAuth2Prompts;
                        var11 = var11.NONE;
                        var11 = var12 === var11;
                        var8 = var11;
                        if(!var11) { _fun0017_ip = 78; continue _fun0017 }
case 152:
                        var11 = var10;
                        var8 = var11.authorized;
case 78:
                        var7 = var8;
                        if(!var8) { _fun0017_ip = 153; continue _fun0017 }
case 154:
                        var8 = _closure2_slot52;
                        var7 = !var8;
case 153:
                        if(!var7) { _fun0017_ip = 155; continue _fun0017 }
case 156:
                        var8 = _closure2_slot54;
                        var7 = {};
                        var7['isAuthorized'] = var9;
                        var7 = var8.bind(var2)(var7);
case 155:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 32;
                        var7 = var9[var7];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.trackWithMetadata;
                        var5 = _closure1_slot15;
                        var7 = var5.OAUTH2_AUTHORIZE_VIEWED;
                        var5 = {};
                        var10 = var10.application;
                        var10 = var10.id;
                        var5['application_id'] = var10;
                        var10 = _closure2_slot17;
                        var10 = var10.defaultOnMobile;
                        var5['mobile_push_notification_default_setting'] = var10;
                        var5 = var8.bind(var9)(var7, var5);
case 157: // try_end0
                        _fun0017_ip = 158; continue _fun0017;
case 150: // try_end1
                        var7 = _closure2_slot57;
                        var5 = false;
                        var7['current'] = var5;
                        return var3;
case 159: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=2);
                        var8 = var3.body;
                        var6 = var8;
                        var5 = _closure2_slot23;
                        var3 = global;
                        var7 = var3.Error;
                        var9 = var8.message;
                        var8 = null;
                        if(!(var8 == var9)) { _fun0017_ip = 160; continue _fun0017 }
case 161:
                        var9 = var3.Object;
                        var8 = var9.keys;
                        var12 = var6;
                        var8 = var8.bind(var9)(var12);
                        var9 = 0;
                        var11 = var8[var9];
                        var10 = var3.Object;
                        var8 = var10.values;
                        var8 = var8.bind(var10)(var12);
                        var10 = var8[var9];
                        var3 = var3.HermesInternal;
                        var9 = var3.concat;
                        var8 = '';
                        var3 = ': ';
                        var3 = var9.bind(var8)(var11, var3, var10);
                        _fun0017_ip = 162; continue _fun0017;
case 160:
                        var3 = var6.message;
case 162:
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var18 = var6;
                        var17 = var3;
                        var3 = new var18[var7](var17, var16);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var3 = var5.bind(var2)(var3);
case 158: // try_end2
                        var5 = _closure2_slot57;
                        var3 = false;
                        var5['current'] = var3;
                        _fun0017_ip = 145; continue _fun0017;
case 163: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot57;
                        var4 = false;
                        var5['current'] = var4;
                        throw var3;
case 145:
                        return var2;
case 144:
                        return var1;
                    }
                };
                return var1;
            };
            var14 = var14.bind(var5)(var3);
            var3 = new Array(12);
            var3[0] = var17;
            var3[1] = var32;
            var3[2] = var45;
            var3[3] = var42;
            var3[4] = var40;
            var3[5] = var39;
            var3[6] = var38;
            var3[7] = var48;
            var3[8] = var33;
            var3[9] = var11;
            var3[10] = var23;
            var23 = var31.defaultOnMobile;
            var3[11] = var23;
            var14 = var18.bind(var16)(var14, var3);
            _closure2_slot58 = var14;
            var23 = var16.useMemo;
            var18 = new Array(2);
            var18[0] = var34;
            var18[1] = var22;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot42;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0018_ip = 164; continue _fun0018 }
case 71:
                    var1 = _closure2_slot41;
                    if(var1) { _fun0018_ip = 142; continue _fun0018 }
case 164:
                    var1 = new Array(0);
                    _fun0018_ip = 57; continue _fun0018;
case 142:
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var3 = _closure2_slot42;
                    var3 = var3.integrationTypesConfig;
                    if(!(var6 == var3)) { _fun0018_ip = 165; continue _fun0018 }
case 27:
                    var3 = {};
case 165:
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var1 = var4().value;
                            var1 = var2;
                            var6 = undefined;
                            var3 = var1 === var6;
                            var1 = undefined;
                            if(var3) { _fun0019_ip = 32; continue _fun0019 }
case 134:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var6;
                            var1 = undefined;
                            var3 = var4;
                            if(var4) { _fun0019_ip = 32; continue _fun0019 }
case 46:
                            var1 = var5;
                            var3 = var4;
case 32:
                            if(var3) { _fun0019_ip = 166; continue _fun0019 }
case 31:
                            var2.return();
case 166:
                            var2 = var1.oauth2InstallParams;
                            var1 = null;
                            var1 = var1 != var2;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var6 = var5().value;
                            var2 = var1;
                            var3 = undefined;
                            var4 = var2 === var3;
                            var2 = undefined;
                            if(var4) { _fun0020_ip = 133; continue _fun0020 }
case 134:
                            var2 = var6;
case 133:
                            if(var4) { _fun0020_ip = 85; continue _fun0020 }
case 139:
                            var5 = var5().value;
                            var5 = var1;
                            var4 = var5 === var3;
case 85:
                            if(var4) { _fun0020_ip = 140; continue _fun0020 }
case 141:
                            var1.return();
case 140:
                            var1 = global;
                            var1 = var1.Number;
                            var1 = var1.bind(var3)(var2);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 57:
                    return var1;
                }
            };
            var3 = var23.bind(var16)(var3, var18);
            _closure2_slot59 = var3;
            var18 = var16.useRef;
            var18 = var18.bind(var16)(var24);
            _closure2_slot60 = var18;
            var23 = var16.useEffect;
            var18 = new Array(6);
            var18[0] = var17;
            var18[1] = var48;
            var18[2] = var41;
            var18[3] = var32;
            var18[4] = var20;
            var17 = var31.defaultOnMobile;
            var18[5] = var17;
            var17 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var1 = _closure2_slot60;
                    var1 = var1.current;
                    if(!(var2 !== var1)) { _fun0021_ip = 167; continue _fun0021 }
case 168:
                    var2 = _closure2_slot60;
                    var1 = _closure2_slot20;
                    var2['current'] = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 32;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot15;
                    var2 = var1.OAUTH2_AUTHORIZE_STEP_VIEWED;
                    var1 = {};
                    var6 = _closure2_slot20;
                    var1['step'] = var6;
                    var6 = _closure2_slot0;
                    var1['application_id'] = var6;
                    var6 = _closure2_slot35;
                    var1['integration_type'] = var6;
                    var6 = _closure2_slot45;
                    var1['scopes'] = var6;
                    var7 = _closure2_slot46;
                    var6 = var7.toString;
                    var6 = var6.bind(var7)();
                    var1['permissions'] = var6;
                    var5 = _closure2_slot17;
                    var5 = var5.defaultOnMobile;
                    var1['mobile_push_notification_default_setting'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 167:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var23.bind(var16)(var17, var18);
            var18 = var16.useEffect;
            var17 = new Array(5);
            var17[0] = var3;
            var17[1] = var34;
            var17[2] = var22;
            var17[3] = var15;
            var17[4] = var20;
            var15 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var3 = null;
                    var2 = var3 != var2;
                    if(var2) { _fun0022_ip = 146; continue _fun0022 }
case 28:
                    var4 = _closure2_slot41;
                    if(!var4) { _fun0022_ip = 40; continue _fun0022 }
case 168:
                    var5 = _closure2_slot42;
                    var4 = var3 == var5;
case 40:
                    var2 = var4;
case 146:
                    if(var2) { _fun0022_ip = 169; continue _fun0022 }
case 170:
                    var2 = _closure2_slot59;
                    var2 = var2.length;
                    var4 = 1;
                    if(!(!(var2 > var4))) { _fun0022_ip = 171; continue _fun0022 }
case 34:
                    var2 = _closure2_slot59;
                    var2 = var2.length;
                    if(!(var4 !== var2)) { _fun0022_ip = 172; continue _fun0022 }
case 173:
                    var2 = _closure2_slot10;
                    if(!(var3 == var2)) { _fun0022_ip = 174; continue _fun0022 }
case 175:
                    var5 = _closure2_slot36;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 27;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.ApplicationIntegrationType;
                    var3 = var3.GUILD_INSTALL;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 169; continue _fun0022;
case 174:
                    var3 = _closure2_slot36;
                    var2 = _closure2_slot10;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 169; continue _fun0022;
case 172:
                    var3 = _closure2_slot36;
                    var4 = _closure2_slot59;
                    var2 = 0;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 169; continue _fun0022;
case 171:
                    var3 = _closure2_slot21;
                    var1 = _closure1_slot14;
                    var2 = var1.SELECT_INSTALL_TYPE;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 169:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var18.bind(var16)(var15, var17);
            var17 = var16.useEffect;
            var15 = new Array(6);
            var15[0] = var14;
            var15[1] = var32;
            var15[2] = var41;
            var15[3] = var48;
            var15[4] = var19;
            var15[5] = var9;
            var14 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = _closure2_slot35;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0023_ip = 176; continue _fun0023 }
case 28:
                    var2 = _closure2_slot18;
                    if(!(var5 == var2)) { _fun0023_ip = 176; continue _fun0023 }
case 133:
                    var2 = _closure2_slot22;
                    if(!(var5 == var2)) { _fun0023_ip = 176; continue _fun0023 }
case 29:
                    var6 = _closure2_slot35;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.ApplicationIntegrationType;
                    var4 = var4.USER_INSTALL;
                    if(!(var6 === var4)) { _fun0023_ip = 177; continue _fun0023 }
case 49:
                    var4 = _closure2_slot27;
                    var4 = var4.bind(var3)(var5);
                    var4 = _closure2_slot29;
                    var4 = var4.bind(var3)(var5);
case 177:
                    var6 = _closure2_slot45;
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.ValidScopes;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var7 = var5.bind(var6)(var4);
                    var4 = _closure2_slot45;
                    var4 = var4.length;
                    var5 = 0;
                    if(!(var5 !== var4)) { _fun0023_ip = 178; continue _fun0023 }
case 179:
                    var4 = var7.length;
                    if(!(!(var4 > var5))) { _fun0023_ip = 180; continue _fun0023 }
case 181:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 33;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.containsDisallowedPermission;
                    var2 = _closure2_slot46;
                    var2 = var4.bind(var6)(var2);
                    if(var2) { _fun0023_ip = 182; continue _fun0023 }
case 183:
                    var2 = _closure2_slot58;
                    var2 = var2.bind(var3)();
                    _fun0023_ip = 176; continue _fun0023;
case 182:
                    var4 = _closure2_slot23;
                    var2 = global;
                    var8 = var2.Error;
                    var2 = var8.prototype;
                    var6 = Object.create(var2, {constructor: {value: var8}});
                    var9 = 'Invalid permission(s) provided.';
                    var10 = var6;
                    var2 = new var10[var8](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var2 = var4.bind(var3)(var2);
                    _fun0023_ip = 176; continue _fun0023;
case 180:
                    var4 = _closure2_slot23;
                    var2 = global;
                    var6 = var2.Error;
                    var7 = var7[var5];
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'Invalid scope: ';
                    var9 = var5.bind(var2)(var7);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var10 = var5;
                    var2 = new var10[var6](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var2 = var4.bind(var3)(var2);
                    _fun0023_ip = 176; continue _fun0023;
case 178:
                    var2 = _closure2_slot23;
                    var1 = global;
                    var5 = var1.Error;
                    var1 = var5.prototype;
                    var4 = Object.create(var1, {constructor: {value: var5}});
                    var9 = 'No scopes were provided.';
                    var10 = var4;
                    var1 = new var10[var5](var9, var8);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var1 = var2.bind(var3)(var1);
case 176:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var17.bind(var16)(var14, var15);
            var15 = var16.useCallback;
            var14 = new Array(2);
            var14[0] = var12;
            var14[1] = var10;
            var12 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var2 = _closure2_slot40;
                    if(!var2) { _fun0024_ip = 184; continue _fun0024 }
case 35:
                    var3 = _closure2_slot37;
                    var2 = !var3;
case 184:
                    if(!var2) { _fun0024_ip = 47; continue _fun0024 }
case 143:
                    var3 = _closure2_slot38;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var15.bind(var16)(var12, var14);
            var12 = _closure1_slot14;
            var12 = var12.AUTHORIZE_SCOPES;
            if(!(var20 === var12)) { _fun0001_ip = 185; continue _fun0001 }
case 186:
            var3 = var3.length;
            if(!(!(var3 > var8))) { _fun0001_ip = 187; continue _fun0001 }
case 185:
            var3 = _closure1_slot14;
            var3 = var3.AUTHORIZE_BOT_PERMISSIONS;
            var12 = undefined;
            if(!(var20 === var3)) { _fun0001_ip = 188; continue _fun0001 }
case 189:
            var3 = _closure1_slot14;
            var3 = var3.AUTHORIZE_SCOPES;
            _closure2_slot61 = var3;
            var12 = var3;
            _fun0001_ip = 188; continue _fun0001;
case 187:
            var3 = _closure1_slot14;
            var3 = var3.SELECT_INSTALL_TYPE;
            _closure2_slot61 = var3;
            var12 = var3;
case 188:
            var14 = _closure1_slot6;
            var8 = var14.useCallback;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var1;
            var3[2] = var11;
            var1 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = _closure2_slot61;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0025_ip = 27; continue _fun0025 }
case 23:
                    var5 = _closure2_slot54;
                    var3 = undefined;
                    var2 = {'isAuthorized': false, 'canceled': true};
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure2_slot13;
                    if(!(var4 != var2)) { _fun0025_ip = 74; continue _fun0025 }
case 45:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var3)();
                    _fun0025_ip = 74; continue _fun0025;
case 27:
                    var3 = _closure2_slot21;
                    var2 = _closure2_slot61;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 74:
                    var1 = true;
                    return var1;
                }
            };
            var3 = var8.bind(var14)(var1, var3);
            _closure2_slot62 = var3;
            var8 = _closure1_slot1;
            var15 = _closure1_slot3;
            var1 = 34;
            var1 = var15[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.bind(var5)(var3, var4);
            var8 = var14.useCallback;
            var4 = function(arg1) {
                var4 = _closure2_slot36;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot19;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot21;
                var2 = _closure1_slot14;
                var2 = var2.AUTHORIZE_SCOPES;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var33 = var8.bind(var14)(var4, var1);
            var8 = var14.useCallback;
            var4 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot31;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var5 = arg1;
                        var1 = _closure3_slot0;
                        var6 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var3 = 21;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        if(var1) { _fun0026_ip = 166; continue _fun0026 }
case 29:
                        var3 = var4.add;
                        var1 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var1);
                        _fun0026_ip = 74; continue _fun0026;
case 166:
                        var3 = var4.remove;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var2);
case 74:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var42 = var8.bind(var14)(var4, var1);
            var16 = global;
            var1 = var16.Error;
            var1 = var9 instanceof var1;
            if(var1) { _fun0001_ip = 190; continue _fun0001 }
case 191:
            var8 = function Spinner() {
                var4 = _closure1_slot18;
                var3 = _closure1_slot7;
                var2 = {};
                var5 = _closure2_slot16;
                var5 = var5.loading;
                var2['style'] = var5;
                var6 = _closure1_slot8;
                var5 = {'animating': true, 'color': null, 'size': 'large'};
                var8 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 38;
                var7 = var7[var1];
                var1 = undefined;
                var7 = var8.bind(var1)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.BRAND_500;
                var5['color'] = var7;
                var5 = var4.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            if(!(var24 !== var20)) { _fun0001_ip = 192; continue _fun0001 }
case 193:
            var1 = _closure1_slot14;
            var1 = var1.SELECT_INSTALL_TYPE;
            if(!(var1 !== var20)) { _fun0001_ip = 194; continue _fun0001 }
case 195:
            var1 = _closure1_slot14;
            var1 = var1.AUTHORIZE_SCOPES;
            if(!(var1 !== var20)) { _fun0001_ip = 196; continue _fun0001 }
case 197:
            var1 = _closure1_slot14;
            var38 = var1.AUTHORIZE_BOT_PERMISSIONS;
            var14 = undefined;
            var18 = undefined;
            var4 = false;
            var23 = false;
            var15 = true;
            var1 = true;
            if(!(var38 === var20)) { _fun0001_ip = 198; continue _fun0001 }
case 199:
            if(!(var24 != var19)) { _fun0001_ip = 200; continue _fun0001 }
case 201:
            var40 = _closure1_slot18;
            var39 = _closure1_slot1;
            var45 = _closure1_slot3;
            var38 = 51;
            var38 = var45[var38];
            var39 = var39.bind(var5)(var38);
            var38 = {};
            var45 = var19.application;
            var38['application'] = var45;
            var38['permissions'] = var41;
            var38['deniedPermissions'] = var44;
            var38['onPermissionsChange'] = var42;
            var38['guild'] = var37;
            var14 = var40.bind(var5)(var39, var38);
            var18 = undefined;
            var4 = true;
            var23 = false;
            var15 = true;
            var1 = true;
            _fun0001_ip = 198; continue _fun0001;
case 200:
            var17 = {};
            var39 = _closure1_slot18;
            var38 = {};
            var38 = var39.bind(var5)(var8, var38);
            var17['body'] = var38;
            return var17;
case 196:
            if(!(var24 != var19)) { _fun0001_ip = 202; continue _fun0001 }
case 203:
            if(!(var24 != var27)) { _fun0001_ip = 202; continue _fun0001 }
case 204:
            if(!(var24 != var48)) { _fun0001_ip = 202; continue _fun0001 }
case 205:
            if(!(var24 != var9)) { _fun0001_ip = 206; continue _fun0001 }
case 207:
            var16 = var16.Error;
            var16 = var9 instanceof var16;
            var58 = var9;
            if(!var16) { _fun0001_ip = 208; continue _fun0001 }
case 206:
            var58 = {};
case 208:
            var16 = var24 == var35;
            var55 = undefined;
            if(var16) { _fun0001_ip = 209; continue _fun0001 }
case 210:
            var17 = var35.sort;
            var16 = function(arg1, arg2) {
                var1 = arg1;
                var2 = var1.name;
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var2 = var3.localeCompare;
                var1 = arg2;
                var4 = var1.name;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var55 = var17.bind(var35)(var16);
case 209:
            var17 = _closure1_slot0;
            var16 = _closure1_slot3;
            var39 = 27;
            var16 = var16[var39];
            var16 = var17.bind(var5)(var16);
            var16 = var16.ApplicationIntegrationType;
            var16 = var16.GUILD_INSTALL;
            var16 = var48 === var16;
            if(!var16) { _fun0001_ip = 211; continue _fun0001 }
case 212:
            var35 = var32.includes;
            var38 = _closure1_slot0;
            var40 = _closure1_slot3;
            var17 = 40;
            var17 = var40[var17];
            var17 = var38.bind(var5)(var17);
            var17 = var17.OAuth2Scopes;
            var17 = var17.WEBHOOK_INCOMING;
            var16 = var35.bind(var32)(var17);
case 211:
            var17 = var16;
            if(var16) { _fun0001_ip = 213; continue _fun0001 }
case 214:
            var38 = _closure1_slot0;
            var35 = _closure1_slot3;
            var35 = var35[var39];
            var35 = var38.bind(var5)(var35);
            var35 = var35.ApplicationIntegrationType;
            var35 = var35.GUILD_INSTALL;
            var35 = var48 === var35;
            if(!var35) { _fun0001_ip = 215; continue _fun0001 }
case 216:
            var40 = var32.includes;
            var42 = _closure1_slot0;
            var38 = _closure1_slot3;
            var45 = 40;
            var38 = var38[var45];
            var38 = var42.bind(var5)(var38);
            var38 = var38.OAuth2Scopes;
            var38 = var38.BOT;
            var38 = var40.bind(var32)(var38);
            if(var38) { _fun0001_ip = 217; continue _fun0001 }
case 218:
            var42 = var32.includes;
            var44 = _closure1_slot0;
            var40 = _closure1_slot3;
            var40 = var40[var45];
            var40 = var44.bind(var5)(var40);
            var40 = var40.OAuth2Scopes;
            var40 = var40.APPLICATIONS_COMMANDS;
            var38 = var42.bind(var32)(var40);
case 217:
            var35 = var38;
case 215:
            var17 = var35;
case 213:
            var38 = _closure1_slot0;
            var40 = _closure1_slot3;
            var35 = 41;
            var35 = var40[var35];
            var42 = var38.bind(var5)(var35);
            var40 = var42.hasApplicationFlag;
            var38 = var19.application;
            var35 = _closure1_slot16;
            var35 = var35.EMBEDDED;
            var42 = var40.bind(var42)(var38, var35);
            if(!var42) { _fun0001_ip = 219; continue _fun0001 }
case 220:
            var38 = _closure1_slot0;
            var35 = _closure1_slot3;
            var35 = var35[var39];
            var35 = var38.bind(var5)(var35);
            var35 = var35.ApplicationIntegrationType;
            var35 = var35.USER_INSTALL;
            var42 = var48 === var35;
case 219:
            if(!var42) { _fun0001_ip = 221; continue _fun0001 }
case 222:
            var42 = var31.enabled;
case 221:
            var35 = _closure1_slot0;
            var49 = _closure1_slot3;
            var31 = 42;
            var31 = var49[var31];
            var38 = var35.bind(var5)(var31);
            var35 = var38.getIsSocialLayerParentApplication;
            var31 = var19.application;
            var47 = var35.bind(var38)(var31);
            var38 = _closure1_slot20;
            var35 = _closure1_slot19;
            var31 = {};
            var45 = _closure1_slot18;
            var44 = _closure1_slot1;
            var39 = 43;
            var39 = var49[var39];
            var40 = var44.bind(var5)(var39);
            var39 = {};
            var50 = var19.application;
            var39['application'] = var50;
            var39['accountScopes'] = var26;
            var40 = var45.bind(var5)(var40, var39);
            var39 = new Array(5);
            var39[0] = var40;
            var40 = 44;
            var40 = var49[var40];
            var44 = var44.bind(var5)(var40);
            var40 = {};
            var49 = var19.application;
            var40['application'] = var49;
            var40['accountScopes'] = var26;
            var40['requestedScopes'] = var32;
            var40['integrationType'] = var48;
            var40['errors'] = var58;
            if(var46) { _fun0001_ip = 223; continue _fun0001 }
case 224:
            var46 = var47;
case 223:
            var40['isTrustedName'] = var46;
            var40 = var45.bind(var5)(var44, var40);
            var39[1] = var40;
            var40 = null;
            if(!var17) { _fun0001_ip = 225; continue _fun0001 }
case 226:
            var46 = _closure1_slot20;
            var45 = _closure1_slot19;
            var44 = {};
            var50 = _closure1_slot18;
            var62 = _closure1_slot0;
            var61 = _closure1_slot3;
            var47 = 45;
            var47 = var61[var47];
            var47 = var62.bind(var5)(var47);
            var48 = var47.AuthorizeFormSeparator;
            var47 = {};
            var48 = var50.bind(var5)(var48, var47);
            var47 = new Array(2);
            var47[0] = var48;
            var49 = _closure1_slot1;
            var48 = 46;
            var48 = var61[var48];
            var49 = var49.bind(var5)(var48);
            var48 = {};
            var64 = 40;
            var61 = var61[var64];
            var61 = var62.bind(var5)(var61);
            var61 = var61.OAuth2Scopes;
            var61 = var61.BOT;
            var61 = var58[var61];
            if(!(var24 == var61)) { _fun0001_ip = 227; continue _fun0001 }
case 228:
            var63 = _closure1_slot0;
            var62 = _closure1_slot3;
            var62 = var62[var64];
            var62 = var63.bind(var5)(var62);
            var62 = var62.OAuth2Scopes;
            var62 = var62.APPLICATIONS_COMMANDS;
            var61 = var58[var62];
case 227:
            if(!(var24 == var61)) { _fun0001_ip = 229; continue _fun0001 }
case 230:
            var61 = new Array(0);
case 229:
            var61 = var61[var57];
            var48['error'] = var61;
            var48['selectedGuildId'] = var52;
            var48['onGuildChange'] = var59;
            if(!(var24 == var55)) { _fun0001_ip = 231; continue _fun0001 }
case 232:
            var55 = new Array(0);
case 231:
            var48['guilds'] = var55;
            var55 = '';
            var55 = var55 !== var52;
            if(!var55) { _fun0001_ip = 233; continue _fun0001 }
case 234:
            var59 = true;
            var55 = var59 === var60;
case 233:
            var48['disabled'] = var55;
            var48 = var50.bind(var5)(var49, var48);
            var47[1] = var48;
            var44['children'] = var47;
            var40 = var46.bind(var5)(var45, var44);
case 225:
            var39[2] = var40;
            var40 = null;
            if(!var16) { _fun0001_ip = 235; continue _fun0001 }
case 236:
            var46 = _closure1_slot20;
            var45 = _closure1_slot19;
            var44 = {};
            var50 = _closure1_slot18;
            var59 = _closure1_slot0;
            var60 = _closure1_slot3;
            var47 = 45;
            var47 = var60[var47];
            var47 = var59.bind(var5)(var47);
            var48 = var47.AuthorizeFormSeparator;
            var47 = {};
            var48 = var50.bind(var5)(var48, var47);
            var47 = new Array(2);
            var47[0] = var48;
            var49 = _closure1_slot1;
            var48 = 47;
            var48 = var60[var48];
            var49 = var49.bind(var5)(var48);
            var48 = {};
            var55 = 40;
            var55 = var60[var55];
            var55 = var59.bind(var5)(var55);
            var55 = var55.OAuth2Scopes;
            var55 = var55.WEBHOOK_INCOMING;
            var55 = var58[var55];
            if(!(var24 == var55)) { _fun0001_ip = 237; continue _fun0001 }
case 238:
            var55 = new Array(0);
case 237:
            var55 = var55[var57];
            var48['error'] = var55;
            var48['selectedChannelId'] = var36;
            var48['selectedGuildId'] = var52;
            var48['onChannelChange'] = var51;
            var48 = var50.bind(var5)(var49, var48);
            var47[1] = var48;
            var44['children'] = var47;
            var40 = var46.bind(var5)(var45, var44);
case 235:
            var39[3] = var40;
            var40 = null;
            if(!var42) { _fun0001_ip = 239; continue _fun0001 }
case 240:
            var45 = _closure1_slot20;
            var44 = _closure1_slot19;
            var42 = {};
            var52 = _closure1_slot18;
            var51 = _closure1_slot0;
            var55 = _closure1_slot3;
            var46 = 45;
            var46 = var55[var46];
            var46 = var51.bind(var5)(var46);
            var47 = var46.AuthorizeFormSeparator;
            var46 = {};
            var47 = var52.bind(var5)(var47, var46);
            var46 = new Array(2);
            var46[0] = var47;
            var47 = 48;
            var47 = var55[var47];
            var47 = var51.bind(var5)(var47);
            var48 = var47.PressableOpacity;
            var47 = {};
            var49 = var56.switchContainer;
            var47['style'] = var49;
            var49 = function onPress() {
                var3 = _closure2_slot33;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var47['onPress'] = var49;
            var50 = _closure1_slot7;
            var49 = {};
            var56 = var56.switchLabelContainer;
            var49['style'] = var56;
            var57 = 49;
            var56 = var55[var57];
            var56 = var51.bind(var5)(var56);
            var58 = var56.Text;
            var56 = {};
            var59 = 'text-md/semibold';
            var56['variant'] = var59;
            var59 = 37;
            var60 = var55[var59];
            var60 = var51.bind(var5)(var60);
            var62 = var60.intl;
            var61 = var62.string;
            var60 = var55[var59];
            var60 = var51.bind(var5)(var60);
            var60 = var60.t;
            var60 = var60.Pkw//o;
            var60 = var61.bind(var62)(var60);
            var56['children'] = var60;
            var58 = var52.bind(var5)(var58, var56);
            var56 = new Array(2);
            var56[0] = var58;
            var57 = var55[var57];
            var57 = var51.bind(var5)(var57);
            var58 = var57.Text;
            var57 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var60 = var55[var59];
            var60 = var51.bind(var5)(var60);
            var61 = var60.intl;
            var60 = var61.string;
            var59 = var55[var59];
            var59 = var51.bind(var5)(var59);
            var59 = var59.t;
            var59 = var59.c1uXox;
            var59 = var60.bind(var61)(var59);
            var57['children'] = var59;
            var57 = var52.bind(var5)(var58, var57);
            var56[1] = var57;
            var49['children'] = var56;
            var50 = var45.bind(var5)(var50, var49);
            var49 = new Array(2);
            var49[0] = var50;
            var50 = 50;
            var50 = var55[var50];
            var50 = var51.bind(var5)(var50);
            var51 = var50.FormSwitch;
            var50 = {};
            var50['value'] = var54;
            var50['onValueChange'] = var53;
            var50 = var52.bind(var5)(var51, var50);
            var49[1] = var50;
            var47['children'] = var49;
            var47 = var45.bind(var5)(var48, var47);
            var46[1] = var47;
            var42['children'] = var46;
            var40 = var45.bind(var5)(var44, var42);
case 239:
            var39[4] = var40;
            var31['children'] = var39;
            var35 = var38.bind(var5)(var35, var31);
            var38 = var32.includes;
            var39 = _closure1_slot0;
            var40 = _closure1_slot3;
            var31 = 40;
            var31 = var40[var31];
            var31 = var39.bind(var5)(var31);
            var31 = var31.OAuth2Scopes;
            var31 = var31.BOT;
            var38 = var38.bind(var32)(var31);
            if(!var38) { _fun0001_ip = 241; continue _fun0001 }
case 242:
            var42 = _closure1_slot2;
            var31 = _closure1_slot3;
            var39 = 21;
            var39 = var31[var39];
            var40 = var42.bind(var5)(var39);
            var39 = var40.equals;
            var31 = var31[var43];
            var31 = var42.bind(var5)(var31);
            var31 = var31.NONE;
            var31 = var39.bind(var40)(var41, var31);
            var38 = !var31;
case 241:
            var31 = undefined;
            if(!var38) { _fun0001_ip = 243; continue _fun0001 }
case 244:
            var38 = _closure1_slot14;
            var38 = var38.AUTHORIZE_BOT_PERMISSIONS;
            _closure2_slot63 = var38;
            var31 = var38;
case 243:
            if(!var17) { _fun0001_ip = 245; continue _fun0001 }
case 246:
            var17 = var24 == var37;
case 245:
            if(var17) { _fun0001_ip = 247; continue _fun0001 }
case 248:
            if(!var16) { _fun0001_ip = 249; continue _fun0001 }
case 250:
            var16 = var24 == var36;
case 249:
            var17 = var16;
case 247:
            if(var17) { _fun0001_ip = 251; continue _fun0001 }
case 252:
            var17 = !var10;
case 251:
            var4 = true;
            var23 = var17;
            var14 = var35;
            var18 = var31;
            var15 = true;
            var1 = true;
            _fun0001_ip = 198; continue _fun0001;
case 202:
            var16 = {};
            var31 = _closure1_slot18;
            var17 = {};
            var17 = var31.bind(var5)(var8, var17);
            var16['body'] = var17;
            return var16;
case 194:
            if(!(var24 != var34)) { _fun0001_ip = 253; continue _fun0001 }
case 254:
            var31 = _closure1_slot18;
            var17 = _closure1_slot1;
            var35 = _closure1_slot3;
            var16 = 39;
            var16 = var35[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['application'] = var34;
            var16['onSelect'] = var33;
            var14 = var31.bind(var5)(var17, var16);
            var18 = undefined;
            var4 = false;
            var23 = false;
            var15 = false;
            var1 = false;
case 198:
            var13 = undefined;
            if(!var15) { _fun0001_ip = 255; continue _fun0001 }
case 256:
            var15 = _closure1_slot14;
            var15 = var15.AUTHORIZE_BOT_PERMISSIONS;
            var13 = undefined;
            if(!(var18 !== var15)) { _fun0001_ip = 255; continue _fun0001 }
case 257:
            var15 = var24 != var19;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 255; continue _fun0001 }
case 258:
            var15 = var24 == var19;
            var31 = undefined;
            if(var15) { _fun0001_ip = 259; continue _fun0001 }
case 260:
            var15 = var19.application;
            var31 = var15.approximate_guild_count;
case 259:
            if(!(var24 == var31)) { _fun0001_ip = 261; continue _fun0001 }
case 262:
            var16 = var24 == var19;
            var15 = undefined;
            if(var16) { _fun0001_ip = 263; continue _fun0001 }
case 264:
            var16 = var19.bot;
            var17 = var24 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 263; continue _fun0001 }
case 265:
            var15 = var16.approximate_guild_count;
case 263:
            var31 = var15;
case 261:
            var17 = _closure1_slot18;
            var16 = _closure1_slot1;
            var33 = _closure1_slot3;
            var15 = 52;
            var15 = var33[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var33 = var19.application;
            var15['application'] = var33;
            var15['scopes'] = var32;
            var15['disclosures'] = var30;
            var32 = var19.redirect_uri;
            var33 = var24 != var32;
            var30 = null;
            if(!var33) { _fun0001_ip = 266; continue _fun0001 }
case 267:
            var30 = var32;
case 266:
            var15['redirectUri'] = var30;
            var30 = null;
            if(!(var5 !== var31)) { _fun0001_ip = 268; continue _fun0001 }
case 269:
            var30 = var31;
case 268:
            var15['approximateGuildCount'] = var30;
            var15['isEmbeddedFlow'] = var28;
            var13 = var17.bind(var5)(var16, var15);
case 255:
            if(!var1) { _fun0001_ip = 270; continue _fun0001 }
case 271:
            var1 = var24 != var19;
case 270:
            if(!var1) { _fun0001_ip = 272; continue _fun0001 }
case 273:
            var1 = var24 != var27;
case 272:
            var15 = undefined;
            if(!var1) { _fun0001_ip = 274; continue _fun0001 }
case 275:
            var17 = _closure1_slot18;
            var16 = _closure1_slot1;
            var28 = _closure1_slot3;
            var1 = 53;
            var1 = var28[var1];
            var16 = var16.bind(var5)(var1);
            var1 = {};
            var1['user'] = var27;
            var27 = var19.application;
            var1['application'] = var27;
            var1['accountScopes'] = var26;
            var19 = var19.bot;
            var1['bot'] = var19;
            var15 = var17.bind(var5)(var16, var1);
case 274:
            var1 = {};
            var1['header'] = var15;
            var1['body'] = var14;
            var16 = _closure1_slot18;
            var15 = _closure1_slot19;
            var14 = {};
            var17 = _closure1_slot14;
            var19 = var17.SELECT_INSTALL_TYPE;
            var17 = null;
            if(!(var20 !== var19)) { _fun0001_ip = 276; continue _fun0001 }
case 277:
            var20 = _closure1_slot18;
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var19 = 36;
            var19 = var27[var19];
            var19 = var26.bind(var5)(var19);
            var19 = var19.Button;
            if(!(var24 == var18)) { _fun0001_ip = 278; continue _fun0001 }
case 279:
            var18 = {};
            var24 = 'lg';
            var18['size'] = var24;
            var26 = _closure1_slot0;
            var24 = _closure1_slot3;
            var30 = 37;
            var27 = var24[var30];
            var27 = var26.bind(var5)(var27);
            var31 = var27.intl;
            var28 = var31.string;
            var24 = var24[var30];
            var24 = var26.bind(var5)(var24);
            var27 = var24.t;
            if(var23) { _fun0001_ip = 280; continue _fun0001 }
case 281:
            var24 = var27.y+/PE9;
            var24 = var28.bind(var31)(var24);
            _fun0001_ip = 282; continue _fun0001;
case 280:
            if(var10) { _fun0001_ip = 283; continue _fun0001 }
case 284:
            var26 = var27.N22i9F;
            var26 = var28.bind(var31)(var26);
            _fun0001_ip = 285; continue _fun0001;
case 283:
            var27 = var27.BwwiSM;
            var26 = var28.bind(var31)(var27);
case 285:
            var24 = var26;
case 282:
            var18['text'] = var24;
            var24 = function onPress() {
                var3 = _closure2_slot56;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18['onPress'] = var24;
            var24 = undefined;
            if(var10) { _fun0001_ip = 286; continue _fun0001 }
case 287:
            var28 = _closure1_slot18;
            var32 = _closure1_slot1;
            var33 = _closure1_slot3;
            var26 = var33[var25];
            var26 = var32.bind(var5)(var26);
            var27 = var26.View;
            var26 = {};
            var26['style'] = var29;
            var31 = 54;
            var31 = var33[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var33 = _closure1_slot9;
            var35 = var33.convert;
            var34 = var35.fromCodePoint;
            var33 = _closure1_slot13;
            var33 = var34.bind(var35)(var33);
            var31['name'] = var33;
            var31 = var28.bind(var5)(var32, var31);
            var26['children'] = var31;
            var24 = var28.bind(var5)(var27, var26);
case 286:
            var18['icon'] = var24;
            var24 = 'end';
            var18['iconPosition'] = var24;
            var18['disabled'] = var23;
            var18['loading'] = var21;
            var24 = {};
            var21 = 'enable';
            var24['name'] = var21;
            var28 = _closure1_slot0;
            var21 = _closure1_slot3;
            var26 = var21[var30];
            var26 = var28.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var21 = var21[var30];
            var21 = var28.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.eIL75W;
            var21 = var26.bind(var27)(var21);
            var24['label'] = var21;
            var21 = new Array(1);
            var21[0] = var24;
            var18['accessibilityActions'] = var21;
            var18['onAccessibilityAction'] = var22;
            _fun0001_ip = 288; continue _fun0001;
case 278:
            var21 = {};
            var24 = 'lg';
            var21['size'] = var24;
            var26 = _closure1_slot0;
            var24 = _closure1_slot3;
            var28 = 37;
            var27 = var24[var28];
            var27 = var26.bind(var5)(var27);
            var31 = var27.intl;
            var30 = var31.string;
            var24 = var24[var28];
            var24 = var26.bind(var5)(var24);
            var27 = var24.t;
            if(var23) { _fun0001_ip = 289; continue _fun0001 }
case 290:
            var24 = var27.3PatSz;
            var24 = var30.bind(var31)(var24);
            _fun0001_ip = 291; continue _fun0001;
case 289:
            if(var10) { _fun0001_ip = 292; continue _fun0001 }
case 293:
            var26 = var27.N22i9F;
            var26 = var30.bind(var31)(var26);
            _fun0001_ip = 294; continue _fun0001;
case 292:
            var27 = var27.BwwiSM;
            var26 = var30.bind(var31)(var27);
case 294:
            var24 = var26;
case 291:
            var21['text'] = var24;
            var24 = undefined;
            if(var10) { _fun0001_ip = 295; continue _fun0001 }
case 296:
            var24 = undefined;
            if(!var23) { _fun0001_ip = 295; continue _fun0001 }
case 297:
            var27 = _closure1_slot18;
            var30 = _closure1_slot1;
            var31 = _closure1_slot3;
            var25 = var31[var25];
            var25 = var30.bind(var5)(var25);
            var26 = var25.View;
            var25 = {};
            var25['style'] = var29;
            var29 = 54;
            var29 = var31[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var31 = _closure1_slot9;
            var33 = var31.convert;
            var32 = var33.fromCodePoint;
            var31 = _closure1_slot13;
            var31 = var32.bind(var33)(var31);
            var29['name'] = var31;
            var29 = var27.bind(var5)(var30, var29);
            var25['children'] = var29;
            var24 = var27.bind(var5)(var26, var25);
case 295:
            var21['icon'] = var24;
            var24 = 'end';
            var21['iconPosition'] = var24;
            var24 = function onPress() {
                var3 = _closure2_slot21;
                var2 = _closure2_slot63;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var21['onPress'] = var24;
            var21['disabled'] = var23;
            var24 = {};
            var23 = 'enable';
            var24['name'] = var23;
            var27 = _closure1_slot0;
            var23 = _closure1_slot3;
            var25 = var23[var28];
            var25 = var27.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var23 = var23[var28];
            var23 = var27.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.eIL75W;
            var23 = var25.bind(var26)(var23);
            var24['label'] = var23;
            var23 = new Array(1);
            var23[0] = var24;
            var21['accessibilityActions'] = var23;
            var21['onAccessibilityAction'] = var22;
            var18 = var21;
case 288:
            var17 = var20.bind(var5)(var19, var18);
case 276:
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var1['footer'] = var14;
            var1['appDetails'] = var13;
            var1['backStep'] = var12;
            var1['sendAuthorize'] = var11;
            var1['goBackOrCancel'] = var3;
            var1['allContentSeen'] = var10;
            var1['setAllContentSeen'] = var7;
            var1['hasContentBackground'] = var4;
            return var1;
case 253:
            var1 = {};
            var7 = _closure1_slot18;
            var4 = {};
            var4 = var7.bind(var5)(var8, var4);
            var1['body'] = var4;
            return var1;
case 192:
            var1 = {};
            var7 = _closure1_slot18;
            var4 = {};
            var4 = var7.bind(var5)(var8, var4);
            var1['body'] = var4;
            return var1;
case 190:
            var1 = {};
            var4 = _closure1_slot18;
            var8 = _closure1_slot1;
            var11 = _closure1_slot3;
            var7 = 35;
            var7 = var11[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var9 = var9.message;
            var7['error'] = var9;
            var9 = true;
            var7['hideFooter'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var1['body'] = var7;
            var1['goBackOrCancel'] = var3;
            var10 = _closure1_slot0;
            var2 = 36;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var7 = 'lg';
            var2['size'] = var7;
            var7 = 37;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.cpT0Cq;
            var7 = var8.bind(var9)(var7);
            var2['text'] = var7;
            var6 = function onPress() {
                var2 = _closure2_slot62;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2['onPress'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['footer'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();