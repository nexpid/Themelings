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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMOJI_POINTING_DOWN_CODE_POINT;
    var _closure1_slot12 = var7;
    var4 = var4.OAuth2Steps;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var7 = var4.Fragment;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'center', 'justifyContent': 'center'};
    var4['loading'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = 50;
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
            var44 = var2.responseType;
            var _closure2_slot1 = var44;
            var40 = var2.redirectUri;
            var _closure2_slot2 = var40;
            var39 = var2.codeChallenge;
            var _closure2_slot3 = var39;
            var38 = var2.codeChallengeMethod;
            var _closure2_slot4 = var38;
            var23 = var2.state;
            var _closure2_slot5 = var23;
            var49 = var2.nonce;
            var _closure2_slot6 = var49;
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
            var56 = var2.disableGuildSelect;
            var5 = undefined;
            if(!(var56 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var56 = false;
case 2:
            var45 = var2.isTrustedName;
            if(!(var45 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var45 = false;
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
            var48 = var2.callback;
            var _closure2_slot11 = var48;
            var52 = var2.callbackWithoutPost;
            var _closure2_slot12 = var52;
            var1 = var2.dismissOAuthModal;
            var _closure2_slot13 = var1;
            var57 = var2.disclosures;
            var _closure2_slot14 = var57;
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
            var7 = _closure1_slot19;
            var7 = var7.bind(var5)();
            _closure2_slot16 = var7;
            var11 = _closure1_slot6;
            var7 = var11.useState;
            var24 = null;
            var7 = var7.bind(var11)(var24);
            var10 = _closure1_slot5;
            var14 = 2;
            var7 = var10.bind(var5)(var7, var14);
            var53 = 0;
            var19 = var7[var53];
            _closure2_slot17 = var19;
            var8 = 1;
            var7 = var7[var8];
            _closure2_slot18 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var20 = var7[var53];
            _closure2_slot19 = var20;
            var7 = var7[var8];
            _closure2_slot20 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var9 = var7[var53];
            _closure2_slot21 = var9;
            var7 = var7[var8];
            _closure2_slot22 = var7;
            var7 = var11.useState;
            var13 = false;
            var7 = var7.bind(var11)(var13);
            var7 = var10.bind(var5)(var7, var14);
            var21 = var7[var53];
            var7 = var7[var8];
            _closure2_slot23 = var7;
            var7 = var24 == var19;
            var31 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var31 = var19.guilds;
case 12:
            _closure2_slot24 = var31;
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
            var51 = var7[var53];
            _closure2_slot25 = var51;
            var55 = var7[var8];
            _closure2_slot26 = var55;
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
            var36 = var7[var53];
            _closure2_slot27 = var36;
            var50 = var7[var8];
            _closure2_slot28 = var50;
            var30 = _closure1_slot6;
            var11 = var30.useState;
            var12 = _closure1_slot2;
            var32 = _closure1_slot3;
            var43 = 12;
            var7 = var32[var43];
            var7 = var12.bind(var5)(var7);
            var7 = var7.NONE;
            var7 = var11.bind(var30)(var7);
            var7 = var10.bind(var5)(var7, var14);
            var42 = var7[var53];
            _closure2_slot29 = var42;
            var7 = var7[var8];
            _closure2_slot30 = var7;
            var34 = _closure1_slot0;
            var11 = 13;
            var7 = var32[var11];
            var25 = var34.bind(var5)(var7);
            var22 = var25.useStateFromStores;
            var7 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var22.bind(var25)(var12, var7);
            var22 = var30.useMemo;
            var12 = new Array(2);
            var12[0] = var31;
            var12[1] = var51;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot24;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var4 = _closure2_slot24;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot25;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 18:
                    return var1;
                }
            };
            var37 = var22.bind(var30)(var7, var12);
            _closure2_slot31 = var37;
            var7 = var30.useState;
            var7 = var7.bind(var30)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var47 = var7[var53];
            _closure2_slot32 = var47;
            var7 = var7[var8];
            _closure2_slot33 = var7;
            var7 = var30.useState;
            var7 = var7.bind(var30)(var13);
            var7 = var10.bind(var5)(var7, var14);
            var10 = var7[var53];
            _closure2_slot34 = var10;
            var7 = var7[var8];
            _closure2_slot35 = var7;
            var11 = var32[var11];
            var25 = var34.bind(var5)(var11);
            var22 = var25.useStateFromStores;
            var11 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var1 = _closure1_slot9;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var35 = var22.bind(var25)(var12, var11);
            _closure2_slot36 = var35;
            var11 = 14;
            var11 = var32[var11];
            var12 = var34.bind(var5)(var11);
            var11 = var12.useIsScreenReaderEnabled;
            var12 = var11.bind(var12)();
            _closure2_slot37 = var12;
            var25 = 15;
            var11 = var32[var25];
            var26 = var34.bind(var5)(var11);
            var22 = var26.useAnimatedStyle;
            var11 = function Y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot36;
                    if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var1 = {};
                    var3 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var2 = 15;
                    var4 = var16[var2];
                    var14 = undefined;
                    var6 = var15.bind(var14)(var4);
                    var5 = var6.withSequence;
                    var7 = 16;
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
                    _fun0003_ip = 22; continue _fun0003;
case 20:
                    var1 = {};
case 22:
                    return var1;
                }
            };
            var29 = {};
            var29['shouldReduceMotion'] = var35;
            var35 = var32[var25];
            var35 = var34.bind(var5)(var35);
            var35 = var35.withSequence;
            var29['withSequence'] = var35;
            var35 = 16;
            var35 = var32[var35];
            var35 = var34.bind(var5)(var35);
            var35 = var35.withTiming;
            var29['withTiming'] = var35;
            var35 = var32[var25];
            var35 = var34.bind(var5)(var35);
            var35 = var35.Easing;
            var29['Easing'] = var35;
            var32 = var32[var25];
            var32 = var34.bind(var5)(var32);
            var32 = var32.withRepeat;
            var29['withRepeat'] = var32;
            var11['__closure'] = var29;
            var29 = 1476082137097.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot20;
            var11['__initData'] = var29;
            var29 = var22.bind(var26)(var11);
            var26 = var30.useMemo;
            var22 = var24 == var16;
            var11 = undefined;
            if(var22) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = var16.length;
case 23:
            var22 = new Array(3);
            var22[0] = var11;
            var22[1] = var40;
            var22[2] = var15;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var1 = var3 == var1;
                    if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var4 = _closure2_slot8;
                    var4 = var3 == var4;
                    var6 = undefined;
                    if(var4) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var4 = _closure2_slot8;
                    var6 = var4.length;
case 27:
                    var7 = var3 != var6;
                    var5 = 0;
                    var4 = 0;
                    if(!var7) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var4 = var6;
case 29:
                    var1 = var5 === var4;
case 25:
                    if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var2 = _closure2_slot2;
                    var1 = var3 == var2;
case 31:
                    return var1;
                }
            };
            var22 = var26.bind(var30)(var11, var22);
            _closure2_slot38 = var22;
            var32 = _closure1_slot6;
            var11 = var32.useState;
            var26 = var11.bind(var32)(var24);
            var11 = _closure1_slot5;
            var11 = var11.bind(var5)(var26, var14);
            var34 = var11[var53];
            _closure2_slot39 = var34;
            var11 = var11[var8];
            _closure2_slot40 = var11;
            var30 = var32.useEffect;
            var26 = new Array(2);
            var26[0] = var17;
            var26[1] = var22;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot38;
                    if(!var2) { _fun0005_ip = 31; continue _fun0005 }
case 33:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchApplication;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var3 = _closure2_slot40;
                        var4 = _closure1_slot10;
                        var2 = var4.createFromServer;
                        var1 = arg1;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var30.bind(var32)(var11, var26);
            var30 = var32.useMemo;
            var26 = var24 == var34;
            var11 = undefined;
            if(var26) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var11 = var34.integrationTypesConfig;
case 34:
            var26 = new Array(2);
            var26[0] = var11;
            var26[1] = var47;
            var11 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot32;
                    var4 = null;
                    var2 = var4 == var1;
                    var1 = null;
                    if(var2) { _fun0006_ip = 36; continue _fun0006 }
case 19:
                    var2 = _closure2_slot39;
                    var6 = var4 == var2;
                    var2 = undefined;
                    if(var6) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var6 = _closure2_slot39;
                    var6 = var6.integrationTypesConfig;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 37; continue _fun0006 }
case 39:
                    var3 = _closure2_slot32;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 37; continue _fun0006 }
case 31:
                    var2 = var3.oauth2InstallParams;
case 37:
                    var1 = var2;
case 36:
                    return var1;
                }
            };
            var11 = var30.bind(var32)(var11, var26);
            _closure2_slot41 = var11;
            var32 = _closure1_slot6;
            var30 = var32.useMemo;
            var26 = var24 == var11;
            var35 = undefined;
            if(var26) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var35 = var11.scopes;
case 40:
            var26 = new Array(3);
            var26[0] = var35;
            var26[1] = var16;
            var26[2] = var22;
            var16 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot38;
                    if(var2) { _fun0007_ip = 19; continue _fun0007 }
case 42:
                    var6 = _closure2_slot8;
                    _fun0007_ip = 43; continue _fun0007;
case 19:
                    var4 = _closure2_slot41;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var3 = _closure2_slot41;
                    var2 = var3.scopes;
case 44:
                    var6 = var2;
case 43:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filterScopes;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var6 = new Array(0);
case 46:
                    var3 = var3.bind(var4)(var6);
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 19;
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
            _closure2_slot42 = var32;
            var26 = var16.accountScopes;
            var30 = _closure1_slot6;
            var16 = var30.useMemo;
            var41 = var24 == var11;
            var35 = undefined;
            if(var41) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var35 = var11.permissions;
case 48:
            var11 = new Array(3);
            var11[0] = var35;
            var11[1] = var3;
            var11[2] = var22;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot38;
                    if(var1) { _fun0008_ip = 26; continue _fun0008 }
case 33:
                    var1 = _closure2_slot9;
                    _fun0008_ip = 46; continue _fun0008;
case 26:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 20;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.deserialize;
                    var7 = _closure2_slot41;
                    var2 = null;
                    var7 = var2 == var7;
                    if(var7) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var6 = _closure2_slot41;
                    var5 = var6.permissions;
case 50:
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var2 = var5;
case 52:
                    var1 = var3.bind(var4)(var2);
case 46:
                    var2 = null;
                    if(!(var2 == var1)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.NONE;
case 54:
                    return var1;
                }
            };
            var41 = var16.bind(var30)(var3, var11);
            _closure2_slot43 = var41;
            var16 = _closure1_slot6;
            var3 = var16.useState;
            var3 = var3.bind(var16)(var13);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var14);
            var46 = var3[var53];
            _closure2_slot44 = var46;
            var3 = var3[var8];
            _closure2_slot45 = var3;
            var35 = var16.useEffect;
            var30 = new Array(1);
            var30[0] = var17;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.checkIfOAuthRequest;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = var4.then;
                var2 = _closure2_slot45;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var35.bind(var16)(var3, var30);
            var3 = var16.useState;
            var3 = var3.bind(var16)(var24);
            var3 = var11.bind(var5)(var3, var14);
            var30 = var3[var53];
            var16 = var3[var8];
            var35 = var23;
            if(!var46) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var11 = _closure1_slot0;
            var54 = _closure1_slot3;
            var3 = 22;
            var3 = var54[var3];
            var11 = var11.bind(var5)(var3);
            var3 = var11.getAPIBaseURL;
            var11 = var3.bind(var11)(var13);
            var3 = '/v6';
            var11 = var11 + var3;
            var3 = _closure1_slot15;
            var3 = var3.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK;
            var11 = var11 + var3;
            _closure2_slot2 = var11;
            var3 = var24 == var23;
            if(!var3) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var3 = var24 == var30;
case 58:
            if(!var3) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var54 = _closure1_slot0;
            var58 = _closure1_slot3;
            var3 = 23;
            var3 = var58[var3];
            var54 = var54.bind(var5)(var3);
            var3 = var54.v4;
            var3 = var3.bind(var54)();
            var3 = var16.bind(var5)(var3);
case 60:
            var3 = var23;
            if(!(var24 != var30)) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var16 = var23;
            if(!(var24 == var23)) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var23 = 'SA';
            var16 = var23 + var30;
case 64:
            _closure2_slot5 = var16;
            var3 = var16;
case 62:
            var35 = var3;
            var40 = var11;
case 56:
            var16 = _closure1_slot6;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot46 = var3;
            var11 = var16.useState;
            var3 = var57;
            if(!(var24 == var3)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var3 = new Array(0);
case 66:
            var3 = var11.bind(var16)(var3);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var14);
            var30 = var3[var53];
            _closure2_slot47 = var30;
            var54 = var3[var8];
            _closure2_slot48 = var54;
            var16 = _closure1_slot6;
            var23 = var16.useState;
            var3 = var24 != var57;
            var3 = var23.bind(var16)(var3);
            var3 = var11.bind(var5)(var3, var14);
            var23 = var3[var53];
            _closure2_slot49 = var23;
            var3 = var3[var8];
            _closure2_slot50 = var3;
            var14 = var16.useEffect;
            var11 = new Array(4);
            var11[0] = var17;
            var11[1] = var57;
            var11[2] = var54;
            var11[3] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot46;
                    var1 = var1.current;
                    if(var1) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var1 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0010_ip = 70; continue _fun0010 }
case 33:
                                    var2 = undefined;
                                    var6 = undefined;
                                    var5 = _closure2_slot46;
                                    var4 = true;
                                    var5['current'] = var4;
case 28: // try_start_0 // try_start_1
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var4 = 24;
                                    var4 = var7[var4];
                                    var7 = var5.bind(var2)(var4);
                                    var5 = var7.getDisclosures;
                                    var4 = _closure2_slot0;
                                    var4 = var5.bind(var7)(var4);
                                    SaveGenerator(address=71);
case 71:
                                    return var4;
case 72:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(var5) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                                    var7 = var4.disclosures;
                                    var5 = var4.allAcked;
                                    var8 = _closure2_slot50;
                                    var5 = !var5;
                                    var5 = var8.bind(var2)(var5);
                                    var5 = _closure2_slot48;
                                    var5 = var5.bind(var2)(var7);
case 75: // try_end0
                                    _fun0010_ip = 76; continue _fun0010;
case 73: // try_end1
                                    var7 = _closure2_slot46;
                                    var5 = false;
                                    var7['current'] = var5;
                                    return var4;
case 77: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    var8 = var4.body;
                                    var6 = var8;
                                    var5 = _closure2_slot22;
                                    var4 = global;
                                    var7 = var4.Error;
                                    var9 = var8.message;
                                    var8 = null;
                                    if(!(var8 == var9)) { _fun0010_ip = 78; continue _fun0010 }
case 79:
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
                                    _fun0010_ip = 80; continue _fun0010;
case 78:
                                    var4 = var6.message;
case 80:
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {constructor: {value: var7}});
                                    var16 = var6;
                                    var15 = var4;
                                    var4 = new var16[var7](var15, var14);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    var4 = var5.bind(var2)(var4);
case 76: // try_end2
                                    var5 = _closure2_slot46;
                                    var4 = false;
                                    var5['current'] = var4;
                                    return var2;
case 81: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register=1);
                                    var4 = _closure2_slot46;
                                    var3 = false;
                                    var4['current'] = var3;
                                    throw var2;
case 70:
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
                    if(!(var3 == var4)) { _fun0009_ip = 68; continue _fun0009 }
case 27:
                    var1 = var1.bind(var2)();
case 68:
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
                            if(var4) { _fun0011_ip = 82; continue _fun0011 }
case 21:
                            var3 = var2.isAuthorized;
                            var11 = var2.overrideSuccessCallback;
                            var15 = var2.canceled;
                            var5 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=41);
case 83:
                            return var5;
case 84:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0011_ip = 85; continue _fun0011 }
case 39:
                            var8 = _closure2_slot12;
                            var6 = null;
                            if(!(var6 == var8)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                            var8 = _closure2_slot32;
                            if(!(var6 == var8)) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                            var9 = _closure2_slot22;
                            var8 = global;
                            var13 = var8.Error;
                            var8 = var13.prototype;
                            var12 = Object.create(var8, {constructor: {value: var13}});
                            var22 = 'No integration type was selected.';
                            var23 = var12;
                            var8 = new var23[var13](var22, var21);
                            var8 = var8 instanceof Object ? var8 : var12;
                            var8 = var9.bind(var5)(var8);
                            _fun0011_ip = 90; continue _fun0011;
case 88: // try_start_0 // try_start_2
                            var9 = _closure2_slot23;
                            var8 = true;
                            var8 = var9.bind(var5)(var8);
                            var16 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var8 = 25;
                            var8 = var14[var8];
                            var13 = var16.bind(var5)(var8);
                            var12 = var13.authorize;
                            var8 = {};
                            var17 = var3;
                            var8['authorize'] = var17;
                            var17 = _closure2_slot0;
                            var8['clientId'] = var17;
                            var17 = _closure2_slot42;
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
                            var17 = 20;
                            var17 = var14[var17];
                            var20 = var18.bind(var5)(var17);
                            var19 = var20.remove;
                            var18 = _closure2_slot43;
                            var17 = _closure2_slot29;
                            var17 = var19.bind(var20)(var18, var17);
                            var8['permissions'] = var17;
                            var17 = _closure2_slot32;
                            var18 = 26;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0011_ip = 91; continue _fun0011 }
case 92:
                            var16 = _closure2_slot25;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0011_ip = 91; continue _fun0011 }
case 93:
                            var14 = _closure2_slot25;
case 91:
                            var8['guildId'] = var14;
                            var17 = _closure2_slot32;
                            var16 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0011_ip = 94; continue _fun0011 }
case 95:
                            var16 = _closure2_slot27;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0011_ip = 94; continue _fun0011 }
case 96:
                            var14 = _closure2_slot27;
case 94:
                            var8['channelId'] = var14;
                            var14 = _closure2_slot32;
                            var8['integrationType'] = var14;
                            var8 = var12.bind(var13)(var8);
                            SaveGenerator(address=417);
case 97:
                            return var8;
case 98:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                            if(var12) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                            var10 = var8;
                            var12 = var3;
                            if(!var12) { _fun0011_ip = 101; continue _fun0011 }
case 102:
                            var14 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var12 = 27;
                            var12 = var13[var12];
                            var14 = var14.bind(var5)(var12);
                            var12 = var14.fetch;
                            var12 = var12.bind(var14)();
                            var12 = _closure1_slot0;
                            var9 = 24;
                            var9 = var13[var9];
                            var14 = var12.bind(var5)(var9);
                            var13 = var14.ackDisclosures;
                            var12 = _closure2_slot0;
                            var9 = _closure2_slot47;
                            var9 = var13.bind(var14)(var12, var9);
                            SaveGenerator(address=505);
case 103:
                            return var9;
case 104:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0011_ip = 105; continue _fun0011 }
case 101:
                            var12 = var11;
                            if(!(var6 == var12)) { _fun0011_ip = 106; continue _fun0011 }
case 107:
                            var12 = _closure2_slot13;
                            if(!(var6 != var12)) { _fun0011_ip = 108; continue _fun0011 }
case 109:
                            var12 = _closure2_slot13;
                            var12 = var12.bind(var5)();
case 108:
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
                            SaveGenerator(address=579);
case 110:
                            return var12;
case 111:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                            if(var13) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                            var13 = _closure2_slot11;
                            if(!(var6 != var13)) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                            var14 = _closure2_slot11;
                            var13 = {};
                            var21 = var10;
                            var22 = var13;
                            var16 = copyDataProperties(var22, var21);
                            var16 = var15;
                            var15 = 'canceled';
                            var13[14] = var16;
                            var15 = _closure2_slot17;
                            var15 = var6 == var15;
                            var16 = undefined;
                            if(var15) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                            var15 = _closure2_slot17;
                            var16 = var15.application;
case 116:
                            var15 = 'application';
                            var13[14] = var16;
                            var16 = _closure2_slot31;
                            var15 = 'guild';
                            var13[14] = var16;
                            var16 = _closure2_slot15;
                            var15 = 'wasDeepLink';
                            var13[14] = var16;
                            var13 = var14.bind(var5)(var13);
                            _fun0011_ip = 114; continue _fun0011;
case 112: // try_end0 // try_end2
                            var14 = _closure2_slot23;
                            var13 = false;
                            var13 = var14.bind(var5)(var13);
                            return var12;
case 106: // try_start_1 // try_start_3
                            var10 = var10.location;
                            var10 = var11.bind(var5)(var10);
case 114: // try_end1
                            _fun0011_ip = 118; continue _fun0011;
case 105: // try_end3
                            var11 = _closure2_slot23;
                            var10 = false;
                            var10 = var11.bind(var5)(var10);
                            return var9;
case 99:
                            var10 = _closure2_slot23;
                            var9 = false;
                            var9 = var10.bind(var5)(var9);
                            return var8;
case 119: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=7);
                            var8 = var8.body;
                            var7 = var8;
                            var9 = var6 == var8;
                            var8 = undefined;
                            if(var9) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                            var9 = var7;
                            var8 = var9.message;
case 120:
                            if(!(var6 != var8)) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                            var8 = var7;
                            var9 = var8.message;
                            var8 = '';
                            if(!(var8 === var9)) { _fun0011_ip = 124; continue _fun0011 }
case 122:
                            var9 = _closure2_slot22;
                            var8 = var7;
                            var8 = var9.bind(var5)(var8);
                            var9 = _closure2_slot20;
                            var8 = _closure1_slot13;
                            var8 = var8.AUTHORIZE_SCOPES;
                            var8 = var9.bind(var5)(var8);
                            _fun0011_ip = 118; continue _fun0011;
case 124:
                            var8 = _closure2_slot22;
                            var9 = global;
                            var10 = var9.Error;
                            var22 = var7.message;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {constructor: {value: var10}});
                            var23 = var9;
                            var7 = new var23[var10](var22, var21);
                            var7 = var7 instanceof Object ? var7 : var9;
                            var7 = var8.bind(var5)(var7);
                            var8 = _closure2_slot20;
                            var7 = _closure1_slot13;
                            var7 = var7.AUTHORIZE_SCOPES;
                            var7 = var8.bind(var5)(var7);
case 118: // try_end4
                            var8 = _closure2_slot23;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
case 90:
                            return var5;
case 125: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=6);
                            var9 = _closure2_slot23;
                            var8 = false;
                            var8 = var9.bind(var5)(var8);
                            throw var7;
case 86:
                            var8 = _closure2_slot23;
                            var7 = true;
                            var7 = var8.bind(var5)(var7);
                            var7 = _closure2_slot12;
                            var3 = var7.bind(var5)(var3);
                            var3 = _closure2_slot13;
                            var3 = var6 == var3;
                            if(var3) { _fun0011_ip = 126; continue _fun0011 }
case 127:
                            var4 = _closure2_slot13;
                            var3 = var4.bind(var5)();
case 126:
                            var3 = undefined;
                            return var3;
case 85:
                            return var2;
case 82:
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
            var3 = new Array(20);
            var3[0] = var47;
            var3[1] = var52;
            var3[2] = var17;
            var3[3] = var32;
            var3[4] = var44;
            var3[5] = var40;
            var3[6] = var39;
            var3[7] = var38;
            var3[8] = var35;
            var3[9] = var49;
            var3[10] = var41;
            var3[11] = var42;
            var3[12] = var51;
            var3[13] = var36;
            var3[14] = var30;
            var3[15] = var1;
            var3[16] = var48;
            var3[17] = var18;
            var48 = var24 == var19;
            var18 = undefined;
            if(var48) { _fun0001_ip = 128; continue _fun0001 }
case 129:
            var18 = var19.application;
case 128:
            var3[18] = var18;
            var3[19] = var37;
            var11 = var14.bind(var16)(var11, var3);
            _closure2_slot51 = var11;
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
                    var3 = _closure2_slot51;
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
            _closure2_slot52 = var3;
            var18 = var16.useCallback;
            var14 = new Array(8);
            var14[0] = var17;
            var14[1] = var46;
            var14[2] = var44;
            var14[3] = var11;
            var14[4] = var3;
            var14[5] = var35;
            var14[6] = var1;
            var14[7] = var32;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot44;
                    if(var4) { _fun0012_ip = 68; continue _fun0012 }
case 130:
                    var4 = _closure2_slot51;
                    var3 = {};
                    var3['isAuthorized'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0012_ip = 131; continue _fun0012;
case 68:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.showConnectionDisclaimer;
                    var4 = var2.bind(var3)();
                    var3 = var4.then;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 21;
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
                            if(var2) { _fun0013_ip = 132; continue _fun0013 }
case 133:
                            var10 = var4;
case 132:
                            var4 = undefined;
                            if(var2) { _fun0013_ip = 134; continue _fun0013 }
case 135:
                            var5 = var3().value;
                            var3 = var1;
                            var3 = var3 === var6;
                            var4 = undefined;
                            var2 = var3;
                            if(var3) { _fun0013_ip = 134; continue _fun0013 }
case 136:
                            var4 = var5;
                            var2 = var3;
case 134:
                            if(var2) { _fun0013_ip = 137; continue _fun0013 }
case 51:
                            var1.return();
case 137:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.all;
                            var1 = new Array(2);
                            var1[0] = var4;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var4 = 25;
                            var4 = var7[var4];
                            var9 = var5.bind(var6)(var4);
                            var8 = var9.startSamsungAuthorization;
                            var15 = _closure2_slot0;
                            var14 = _closure2_slot42;
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
                            if(var2) { _fun0014_ip = 132; continue _fun0014 }
case 133:
                            var4 = var5;
case 132:
                            if(var2) { _fun0014_ip = 84; continue _fun0014 }
case 138:
                            var3 = var3().value;
                            var3 = var1;
                            var2 = var3 === var6;
case 84:
                            if(var2) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                            var1.return();
case 139:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.all;
                            var1 = new Array(2);
                            var1[0] = var4;
                            var5 = _closure2_slot52;
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
                            if(var2) { _fun0015_ip = 132; continue _fun0015 }
case 133:
                            var5 = var4;
case 132:
                            var4 = undefined;
                            if(var2) { _fun0015_ip = 134; continue _fun0015 }
case 135:
                            var7 = var6().value;
                            var6 = var1;
                            var6 = var6 === var3;
                            var4 = undefined;
                            var2 = var6;
                            if(var6) { _fun0015_ip = 134; continue _fun0015 }
case 136:
                            var4 = var7;
                            var2 = var6;
case 134:
                            if(var2) { _fun0015_ip = 137; continue _fun0015 }
case 51:
                            var1.return();
case 137:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var1 = 21;
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
                            if(var4) { _fun0016_ip = 141; continue _fun0016 }
case 142:
                            var2 = _closure2_slot13;
                            var1 = var2.bind(var3)();
case 141:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 28;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var18.bind(var16)(var3, var14);
            _closure2_slot53 = var3;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot54 = var3;
            var18 = var16.useCallback;
            var14 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 143; continue _fun0017 }
case 33:
                        var2 = undefined;
                        var10 = undefined;
                        var6 = undefined;
                        var3 = _closure2_slot54;
                        var3 = var3.current;
                        if(var3) { _fun0017_ip = 144; continue _fun0017 }
case 145:
                        var3 = _closure2_slot54;
                        var9 = true;
                        var3['current'] = var9;
case 43: // try_start_0 // try_start_1
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 25;
                        var3 = var8[var3];
                        var8 = var7.bind(var2)(var3);
                        var7 = var8.fetchAuthorization;
                        var3 = {};
                        var11 = _closure2_slot0;
                        var3['clientId'] = var11;
                        var11 = _closure2_slot42;
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
                        var12 = _closure2_slot32;
                        var11 = null;
                        var12 = var11 != var12;
                        var11 = undefined;
                        if(!var12) { _fun0017_ip = 146; continue _fun0017 }
case 147:
                        var11 = _closure2_slot32;
case 146:
                        var3['integrationType'] = var11;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address=172);
case 148:
                        return var3;
case 9:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0017_ip = 149; continue _fun0017 }
case 150:
                        var10 = var3;
                        var8 = _closure2_slot18;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var7 = 29;
                        var7 = var14[var7];
                        var11 = var13.bind(var2)(var7);
                        var7 = var11.convertOAuth2Authorization;
                        var7 = var7.bind(var11)(var3);
                        var7 = var8.bind(var2)(var7);
                        var12 = _closure2_slot7;
                        var11 = 30;
                        var11 = var14[var11];
                        var11 = var13.bind(var2)(var11);
                        var11 = var11.OAuth2Prompts;
                        var11 = var11.NONE;
                        var11 = var12 === var11;
                        var8 = var11;
                        if(!var11) { _fun0017_ip = 76; continue _fun0017 }
case 151:
                        var11 = var10;
                        var8 = var11.authorized;
case 76:
                        var7 = var8;
                        if(!var8) { _fun0017_ip = 152; continue _fun0017 }
case 153:
                        var8 = _closure2_slot49;
                        var7 = !var8;
case 152:
                        if(!var7) { _fun0017_ip = 154; continue _fun0017 }
case 155:
                        var8 = _closure2_slot51;
                        var7 = {};
                        var7['isAuthorized'] = var9;
                        var7 = var8.bind(var2)(var7);
case 154:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 31;
                        var7 = var9[var7];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.trackWithMetadata;
                        var5 = _closure1_slot14;
                        var7 = var5.OAUTH2_AUTHORIZE_VIEWED;
                        var5 = {};
                        var10 = var10.application;
                        var10 = var10.id;
                        var5['application_id'] = var10;
                        var5 = var8.bind(var9)(var7, var5);
case 156: // try_end0
                        _fun0017_ip = 157; continue _fun0017;
case 149: // try_end1
                        var7 = _closure2_slot54;
                        var5 = false;
                        var7['current'] = var5;
                        return var3;
case 158: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=2);
                        var8 = var3.body;
                        var6 = var8;
                        var5 = _closure2_slot22;
                        var3 = global;
                        var7 = var3.Error;
                        var9 = var8.message;
                        var8 = null;
                        if(!(var8 == var9)) { _fun0017_ip = 159; continue _fun0017 }
case 97:
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
                        _fun0017_ip = 160; continue _fun0017;
case 159:
                        var3 = var6.message;
case 160:
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var18 = var6;
                        var17 = var3;
                        var3 = new var18[var7](var17, var16);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var3 = var5.bind(var2)(var3);
case 157: // try_end2
                        var5 = _closure2_slot54;
                        var3 = false;
                        var5['current'] = var3;
                        _fun0017_ip = 144; continue _fun0017;
case 161: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot54;
                        var4 = false;
                        var5['current'] = var4;
                        throw var3;
case 144:
                        return var2;
case 143:
                        return var1;
                    }
                };
                return var1;
            };
            var14 = var14.bind(var5)(var3);
            var3 = new Array(11);
            var3[0] = var17;
            var3[1] = var32;
            var3[2] = var44;
            var3[3] = var40;
            var3[4] = var39;
            var3[5] = var38;
            var3[6] = var35;
            var3[7] = var47;
            var3[8] = var33;
            var3[9] = var11;
            var3[10] = var23;
            var14 = var18.bind(var16)(var14, var3);
            _closure2_slot55 = var14;
            var23 = var16.useMemo;
            var18 = new Array(2);
            var18[0] = var34;
            var18[1] = var22;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot39;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0018_ip = 162; continue _fun0018 }
case 69:
                    var1 = _closure2_slot38;
                    if(var1) { _fun0018_ip = 141; continue _fun0018 }
case 162:
                    var1 = new Array(0);
                    _fun0018_ip = 55; continue _fun0018;
case 141:
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var3 = _closure2_slot39;
                    var3 = var3.integrationTypesConfig;
                    if(!(var6 == var3)) { _fun0018_ip = 163; continue _fun0018 }
case 25:
                    var3 = {};
case 163:
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
                            if(var3) { _fun0019_ip = 30; continue _fun0019 }
case 133:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var6;
                            var1 = undefined;
                            var3 = var4;
                            if(var4) { _fun0019_ip = 30; continue _fun0019 }
case 44:
                            var1 = var5;
                            var3 = var4;
case 30:
                            if(var3) { _fun0019_ip = 164; continue _fun0019 }
case 29:
                            var2.return();
case 164:
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
                            if(var4) { _fun0020_ip = 132; continue _fun0020 }
case 133:
                            var2 = var6;
case 132:
                            if(var4) { _fun0020_ip = 84; continue _fun0020 }
case 138:
                            var5 = var5().value;
                            var5 = var1;
                            var4 = var5 === var3;
case 84:
                            if(var4) { _fun0020_ip = 139; continue _fun0020 }
case 140:
                            var1.return();
case 139:
                            var1 = global;
                            var1 = var1.Number;
                            var1 = var1.bind(var3)(var2);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 55:
                    return var1;
                }
            };
            var3 = var23.bind(var16)(var3, var18);
            _closure2_slot56 = var3;
            var18 = var16.useRef;
            var18 = var18.bind(var16)(var24);
            _closure2_slot57 = var18;
            var23 = var16.useEffect;
            var18 = new Array(5);
            var18[0] = var17;
            var18[1] = var47;
            var18[2] = var41;
            var18[3] = var32;
            var18[4] = var20;
            var17 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot19;
                    var1 = _closure2_slot57;
                    var1 = var1.current;
                    if(!(var2 !== var1)) { _fun0021_ip = 165; continue _fun0021 }
case 142:
                    var2 = _closure2_slot57;
                    var1 = _closure2_slot19;
                    var2['current'] = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 31;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot14;
                    var2 = var1.OAUTH2_AUTHORIZE_STEP_VIEWED;
                    var1 = {};
                    var6 = _closure2_slot19;
                    var1['step'] = var6;
                    var6 = _closure2_slot0;
                    var1['application_id'] = var6;
                    var6 = _closure2_slot32;
                    var1['integration_type'] = var6;
                    var6 = _closure2_slot42;
                    var1['scopes'] = var6;
                    var6 = _closure2_slot43;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var1['permissions'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 165:
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
                    var2 = _closure2_slot19;
                    var3 = null;
                    var2 = var3 != var2;
                    if(var2) { _fun0022_ip = 145; continue _fun0022 }
case 26:
                    var4 = _closure2_slot38;
                    if(!var4) { _fun0022_ip = 38; continue _fun0022 }
case 166:
                    var5 = _closure2_slot39;
                    var4 = var3 == var5;
case 38:
                    var2 = var4;
case 145:
                    if(var2) { _fun0022_ip = 167; continue _fun0022 }
case 18:
                    var2 = _closure2_slot56;
                    var2 = var2.length;
                    var4 = 1;
                    if(!(!(var2 > var4))) { _fun0022_ip = 168; continue _fun0022 }
case 32:
                    var2 = _closure2_slot56;
                    var2 = var2.length;
                    if(!(var4 !== var2)) { _fun0022_ip = 169; continue _fun0022 }
case 170:
                    var2 = _closure2_slot10;
                    if(!(var3 == var2)) { _fun0022_ip = 171; continue _fun0022 }
case 172:
                    var5 = _closure2_slot33;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 26;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.ApplicationIntegrationType;
                    var3 = var3.GUILD_INSTALL;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure2_slot20;
                    var2 = _closure1_slot13;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 167; continue _fun0022;
case 171:
                    var3 = _closure2_slot33;
                    var2 = _closure2_slot10;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot20;
                    var2 = _closure1_slot13;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 167; continue _fun0022;
case 169:
                    var3 = _closure2_slot33;
                    var4 = _closure2_slot56;
                    var2 = 0;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot20;
                    var2 = _closure1_slot13;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 167; continue _fun0022;
case 168:
                    var3 = _closure2_slot20;
                    var1 = _closure1_slot13;
                    var2 = var1.SELECT_INSTALL_TYPE;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 167:
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
            var15[3] = var47;
            var15[4] = var19;
            var15[5] = var9;
            var14 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = _closure2_slot32;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0023_ip = 173; continue _fun0023 }
case 26:
                    var2 = _closure2_slot17;
                    if(!(var5 == var2)) { _fun0023_ip = 173; continue _fun0023 }
case 132:
                    var2 = _closure2_slot21;
                    if(!(var5 == var2)) { _fun0023_ip = 173; continue _fun0023 }
case 27:
                    var6 = _closure2_slot32;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.ApplicationIntegrationType;
                    var4 = var4.USER_INSTALL;
                    if(!(var6 === var4)) { _fun0023_ip = 174; continue _fun0023 }
case 47:
                    var4 = _closure2_slot26;
                    var4 = var4.bind(var3)(var5);
                    var4 = _closure2_slot28;
                    var4 = var4.bind(var3)(var5);
case 174:
                    var6 = _closure2_slot42;
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 19;
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
                    var4 = _closure2_slot42;
                    var4 = var4.length;
                    var5 = 0;
                    if(!(var5 !== var4)) { _fun0023_ip = 175; continue _fun0023 }
case 176:
                    var4 = var7.length;
                    if(!(!(var4 > var5))) { _fun0023_ip = 177; continue _fun0023 }
case 178:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 32;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.containsDisallowedPermission;
                    var2 = _closure2_slot43;
                    var2 = var4.bind(var6)(var2);
                    if(var2) { _fun0023_ip = 179; continue _fun0023 }
case 180:
                    var2 = _closure2_slot55;
                    var2 = var2.bind(var3)();
                    _fun0023_ip = 173; continue _fun0023;
case 179:
                    var4 = _closure2_slot22;
                    var2 = global;
                    var8 = var2.Error;
                    var2 = var8.prototype;
                    var6 = Object.create(var2, {constructor: {value: var8}});
                    var9 = 'Invalid permission(s) provided.';
                    var10 = var6;
                    var2 = new var10[var8](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var2 = var4.bind(var3)(var2);
                    _fun0023_ip = 173; continue _fun0023;
case 177:
                    var4 = _closure2_slot22;
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
                    _fun0023_ip = 173; continue _fun0023;
case 175:
                    var2 = _closure2_slot22;
                    var1 = global;
                    var5 = var1.Error;
                    var1 = var5.prototype;
                    var4 = Object.create(var1, {constructor: {value: var5}});
                    var9 = 'No scopes were provided.';
                    var10 = var4;
                    var1 = new var10[var5](var9, var8);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var1 = var2.bind(var3)(var1);
case 173:
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
                    var2 = _closure2_slot37;
                    if(!var2) { _fun0024_ip = 181; continue _fun0024 }
case 33:
                    var3 = _closure2_slot34;
                    var2 = !var3;
case 181:
                    if(!var2) { _fun0024_ip = 45; continue _fun0024 }
case 142:
                    var3 = _closure2_slot35;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var15.bind(var16)(var12, var14);
            var12 = _closure1_slot13;
            var12 = var12.AUTHORIZE_SCOPES;
            if(!(var20 === var12)) { _fun0001_ip = 182; continue _fun0001 }
case 183:
            var3 = var3.length;
            if(!(!(var3 > var8))) { _fun0001_ip = 184; continue _fun0001 }
case 182:
            var3 = _closure1_slot13;
            var3 = var3.AUTHORIZE_BOT_PERMISSIONS;
            var12 = undefined;
            if(!(var20 === var3)) { _fun0001_ip = 185; continue _fun0001 }
case 186:
            var3 = _closure1_slot13;
            var3 = var3.AUTHORIZE_SCOPES;
            _closure2_slot58 = var3;
            var12 = var3;
            _fun0001_ip = 185; continue _fun0001;
case 184:
            var3 = _closure1_slot13;
            var3 = var3.SELECT_INSTALL_TYPE;
            _closure2_slot58 = var3;
            var12 = var3;
case 185:
            var14 = _closure1_slot6;
            var8 = var14.useCallback;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var1;
            var3[2] = var11;
            var1 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = _closure2_slot58;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0025_ip = 25; continue _fun0025 }
case 21:
                    var5 = _closure2_slot51;
                    var3 = undefined;
                    var2 = {'isAuthorized': false, 'canceled': true};
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure2_slot13;
                    if(!(var4 != var2)) { _fun0025_ip = 72; continue _fun0025 }
case 43:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var3)();
                    _fun0025_ip = 72; continue _fun0025;
case 25:
                    var3 = _closure2_slot20;
                    var2 = _closure2_slot58;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 72:
                    var1 = true;
                    return var1;
                }
            };
            var3 = var8.bind(var14)(var1, var3);
            _closure2_slot59 = var3;
            var8 = _closure1_slot1;
            var15 = _closure1_slot3;
            var1 = 33;
            var1 = var15[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.bind(var5)(var3, var4);
            var8 = var14.useCallback;
            var4 = function(arg1) {
                var4 = _closure2_slot33;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot18;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot20;
                var2 = _closure1_slot13;
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
                var3 = _closure2_slot30;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var5 = arg1;
                        var1 = _closure3_slot0;
                        var6 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var3 = 20;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        if(var1) { _fun0026_ip = 164; continue _fun0026 }
case 27:
                        var3 = var4.add;
                        var1 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var1);
                        _fun0026_ip = 72; continue _fun0026;
case 164:
                        var3 = var4.remove;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var2);
case 72:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var40 = var8.bind(var14)(var4, var1);
            var16 = global;
            var1 = var16.Error;
            var1 = var9 instanceof var1;
            if(var1) { _fun0001_ip = 187; continue _fun0001 }
case 188:
            var8 = function Spinner() {
                var4 = _closure1_slot16;
                var3 = _closure1_slot7;
                var2 = {};
                var5 = _closure2_slot16;
                var5 = var5.loading;
                var2['style'] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 37;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var5.ActivityIndicator;
                var5 = {};
                var5 = var4.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            if(!(var24 !== var20)) { _fun0001_ip = 189; continue _fun0001 }
case 190:
            var1 = _closure1_slot13;
            var1 = var1.SELECT_INSTALL_TYPE;
            if(!(var1 !== var20)) { _fun0001_ip = 191; continue _fun0001 }
case 192:
            var1 = _closure1_slot13;
            var1 = var1.AUTHORIZE_SCOPES;
            if(!(var1 !== var20)) { _fun0001_ip = 193; continue _fun0001 }
case 194:
            var1 = _closure1_slot13;
            var35 = var1.AUTHORIZE_BOT_PERMISSIONS;
            var14 = undefined;
            var18 = undefined;
            var4 = false;
            var23 = false;
            var15 = true;
            var1 = true;
            if(!(var35 === var20)) { _fun0001_ip = 195; continue _fun0001 }
case 196:
            if(!(var24 != var19)) { _fun0001_ip = 197; continue _fun0001 }
case 198:
            var39 = _closure1_slot16;
            var38 = _closure1_slot1;
            var44 = _closure1_slot3;
            var35 = 46;
            var35 = var44[var35];
            var38 = var38.bind(var5)(var35);
            var35 = {};
            var44 = var19.application;
            var35['application'] = var44;
            var35['permissions'] = var41;
            var35['deniedPermissions'] = var42;
            var35['onPermissionsChange'] = var40;
            var35['guild'] = var37;
            var14 = var39.bind(var5)(var38, var35);
            var18 = undefined;
            var4 = true;
            var23 = false;
            var15 = true;
            var1 = true;
            _fun0001_ip = 195; continue _fun0001;
case 197:
            var17 = {};
            var38 = _closure1_slot16;
            var35 = {};
            var35 = var38.bind(var5)(var8, var35);
            var17['body'] = var35;
            return var17;
case 193:
            if(!(var24 != var19)) { _fun0001_ip = 199; continue _fun0001 }
case 200:
            if(!(var24 != var27)) { _fun0001_ip = 199; continue _fun0001 }
case 201:
            if(!(var24 != var47)) { _fun0001_ip = 199; continue _fun0001 }
case 202:
            if(!(var24 != var9)) { _fun0001_ip = 203; continue _fun0001 }
case 204:
            var16 = var16.Error;
            var16 = var9 instanceof var16;
            var54 = var9;
            if(!var16) { _fun0001_ip = 205; continue _fun0001 }
case 203:
            var54 = {};
case 205:
            var16 = var24 == var31;
            var52 = undefined;
            if(var16) { _fun0001_ip = 206; continue _fun0001 }
case 207:
            var17 = var31.sort;
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
            var52 = var17.bind(var31)(var16);
case 206:
            var17 = _closure1_slot0;
            var16 = _closure1_slot3;
            var38 = 26;
            var16 = var16[var38];
            var16 = var17.bind(var5)(var16);
            var16 = var16.ApplicationIntegrationType;
            var16 = var16.GUILD_INSTALL;
            var16 = var47 === var16;
            if(!var16) { _fun0001_ip = 208; continue _fun0001 }
case 209:
            var31 = var32.includes;
            var35 = _closure1_slot0;
            var39 = _closure1_slot3;
            var17 = 39;
            var17 = var39[var17];
            var17 = var35.bind(var5)(var17);
            var17 = var17.OAuth2Scopes;
            var17 = var17.WEBHOOK_INCOMING;
            var16 = var31.bind(var32)(var17);
case 208:
            var17 = var16;
            if(var16) { _fun0001_ip = 210; continue _fun0001 }
case 211:
            var35 = _closure1_slot0;
            var31 = _closure1_slot3;
            var31 = var31[var38];
            var31 = var35.bind(var5)(var31);
            var31 = var31.ApplicationIntegrationType;
            var31 = var31.GUILD_INSTALL;
            var31 = var47 === var31;
            if(!var31) { _fun0001_ip = 212; continue _fun0001 }
case 213:
            var38 = var32.includes;
            var39 = _closure1_slot0;
            var35 = _closure1_slot3;
            var42 = 39;
            var35 = var35[var42];
            var35 = var39.bind(var5)(var35);
            var35 = var35.OAuth2Scopes;
            var35 = var35.BOT;
            var35 = var38.bind(var32)(var35);
            if(var35) { _fun0001_ip = 214; continue _fun0001 }
case 215:
            var39 = var32.includes;
            var40 = _closure1_slot0;
            var38 = _closure1_slot3;
            var38 = var38[var42];
            var38 = var40.bind(var5)(var38);
            var38 = var38.OAuth2Scopes;
            var38 = var38.APPLICATIONS_COMMANDS;
            var35 = var39.bind(var32)(var38);
case 214:
            var31 = var35;
case 212:
            var17 = var31;
case 210:
            var35 = _closure1_slot0;
            var48 = _closure1_slot3;
            var31 = 40;
            var31 = var48[var31];
            var38 = var35.bind(var5)(var31);
            var35 = var38.getIsSocialLayerParentApplication;
            var31 = var19.application;
            var46 = var35.bind(var38)(var31);
            var38 = _closure1_slot18;
            var35 = _closure1_slot17;
            var31 = {};
            var44 = _closure1_slot16;
            var42 = _closure1_slot1;
            var39 = 41;
            var39 = var48[var39];
            var40 = var42.bind(var5)(var39);
            var39 = {};
            var49 = var19.application;
            var39['application'] = var49;
            var39['accountScopes'] = var26;
            var40 = var44.bind(var5)(var40, var39);
            var39 = new Array(4);
            var39[0] = var40;
            var40 = 42;
            var40 = var48[var40];
            var42 = var42.bind(var5)(var40);
            var40 = {};
            var48 = var19.application;
            var40['application'] = var48;
            var40['accountScopes'] = var26;
            var40['requestedScopes'] = var32;
            var40['integrationType'] = var47;
            var40['errors'] = var54;
            if(var45) { _fun0001_ip = 216; continue _fun0001 }
case 217:
            var45 = var46;
case 216:
            var40['isTrustedName'] = var45;
            var40 = var44.bind(var5)(var42, var40);
            var39[1] = var40;
            var40 = null;
            if(!var17) { _fun0001_ip = 218; continue _fun0001 }
case 219:
            var45 = _closure1_slot18;
            var44 = _closure1_slot17;
            var42 = {};
            var49 = _closure1_slot16;
            var58 = _closure1_slot0;
            var57 = _closure1_slot3;
            var46 = 43;
            var46 = var57[var46];
            var46 = var58.bind(var5)(var46);
            var47 = var46.AuthorizeFormSeparator;
            var46 = {};
            var47 = var49.bind(var5)(var47, var46);
            var46 = new Array(2);
            var46[0] = var47;
            var48 = _closure1_slot1;
            var47 = 44;
            var47 = var57[var47];
            var48 = var48.bind(var5)(var47);
            var47 = {};
            var60 = 39;
            var57 = var57[var60];
            var57 = var58.bind(var5)(var57);
            var57 = var57.OAuth2Scopes;
            var57 = var57.BOT;
            var57 = var54[var57];
            if(!(var24 == var57)) { _fun0001_ip = 220; continue _fun0001 }
case 221:
            var59 = _closure1_slot0;
            var58 = _closure1_slot3;
            var58 = var58[var60];
            var58 = var59.bind(var5)(var58);
            var58 = var58.OAuth2Scopes;
            var58 = var58.APPLICATIONS_COMMANDS;
            var57 = var54[var58];
case 220:
            if(!(var24 == var57)) { _fun0001_ip = 222; continue _fun0001 }
case 223:
            var57 = new Array(0);
case 222:
            var57 = var57[var53];
            var47['error'] = var57;
            var47['selectedGuildId'] = var51;
            var47['onGuildChange'] = var55;
            if(!(var24 == var52)) { _fun0001_ip = 224; continue _fun0001 }
case 225:
            var52 = new Array(0);
case 224:
            var47['guilds'] = var52;
            var52 = '';
            var52 = var52 !== var51;
            if(!var52) { _fun0001_ip = 226; continue _fun0001 }
case 227:
            var55 = true;
            var52 = var55 === var56;
case 226:
            var47['disabled'] = var52;
            var47 = var49.bind(var5)(var48, var47);
            var46[1] = var47;
            var42['children'] = var46;
            var40 = var45.bind(var5)(var44, var42);
case 218:
            var39[2] = var40;
            var40 = null;
            if(!var16) { _fun0001_ip = 228; continue _fun0001 }
case 229:
            var45 = _closure1_slot18;
            var44 = _closure1_slot17;
            var42 = {};
            var49 = _closure1_slot16;
            var55 = _closure1_slot0;
            var56 = _closure1_slot3;
            var46 = 43;
            var46 = var56[var46];
            var46 = var55.bind(var5)(var46);
            var47 = var46.AuthorizeFormSeparator;
            var46 = {};
            var47 = var49.bind(var5)(var47, var46);
            var46 = new Array(2);
            var46[0] = var47;
            var48 = _closure1_slot1;
            var47 = 45;
            var47 = var56[var47];
            var48 = var48.bind(var5)(var47);
            var47 = {};
            var52 = 39;
            var52 = var56[var52];
            var52 = var55.bind(var5)(var52);
            var52 = var52.OAuth2Scopes;
            var52 = var52.WEBHOOK_INCOMING;
            var52 = var54[var52];
            if(!(var24 == var52)) { _fun0001_ip = 230; continue _fun0001 }
case 231:
            var52 = new Array(0);
case 230:
            var52 = var52[var53];
            var47['error'] = var52;
            var47['selectedChannelId'] = var36;
            var47['selectedGuildId'] = var51;
            var47['onChannelChange'] = var50;
            var47 = var49.bind(var5)(var48, var47);
            var46[1] = var47;
            var42['children'] = var46;
            var40 = var45.bind(var5)(var44, var42);
case 228:
            var39[3] = var40;
            var31['children'] = var39;
            var35 = var38.bind(var5)(var35, var31);
            var38 = var32.includes;
            var39 = _closure1_slot0;
            var40 = _closure1_slot3;
            var31 = 39;
            var31 = var40[var31];
            var31 = var39.bind(var5)(var31);
            var31 = var31.OAuth2Scopes;
            var31 = var31.BOT;
            var38 = var38.bind(var32)(var31);
            if(!var38) { _fun0001_ip = 232; continue _fun0001 }
case 233:
            var42 = _closure1_slot2;
            var31 = _closure1_slot3;
            var39 = 20;
            var39 = var31[var39];
            var40 = var42.bind(var5)(var39);
            var39 = var40.equals;
            var31 = var31[var43];
            var31 = var42.bind(var5)(var31);
            var31 = var31.NONE;
            var31 = var39.bind(var40)(var41, var31);
            var38 = !var31;
case 232:
            var31 = undefined;
            if(!var38) { _fun0001_ip = 234; continue _fun0001 }
case 235:
            var38 = _closure1_slot13;
            var38 = var38.AUTHORIZE_BOT_PERMISSIONS;
            _closure2_slot60 = var38;
            var31 = var38;
case 234:
            if(!var17) { _fun0001_ip = 236; continue _fun0001 }
case 237:
            var17 = var24 == var37;
case 236:
            if(var17) { _fun0001_ip = 238; continue _fun0001 }
case 239:
            if(!var16) { _fun0001_ip = 240; continue _fun0001 }
case 241:
            var16 = var24 == var36;
case 240:
            var17 = var16;
case 238:
            if(var17) { _fun0001_ip = 242; continue _fun0001 }
case 243:
            var17 = !var10;
case 242:
            var4 = true;
            var23 = var17;
            var14 = var35;
            var18 = var31;
            var15 = true;
            var1 = true;
            _fun0001_ip = 195; continue _fun0001;
case 199:
            var16 = {};
            var31 = _closure1_slot16;
            var17 = {};
            var17 = var31.bind(var5)(var8, var17);
            var16['body'] = var17;
            return var16;
case 191:
            if(!(var24 != var34)) { _fun0001_ip = 244; continue _fun0001 }
case 245:
            var31 = _closure1_slot16;
            var17 = _closure1_slot1;
            var35 = _closure1_slot3;
            var16 = 38;
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
case 195:
            var13 = undefined;
            if(!var15) { _fun0001_ip = 246; continue _fun0001 }
case 247:
            var15 = _closure1_slot13;
            var15 = var15.AUTHORIZE_BOT_PERMISSIONS;
            var13 = undefined;
            if(!(var18 !== var15)) { _fun0001_ip = 246; continue _fun0001 }
case 248:
            var15 = var24 != var19;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 246; continue _fun0001 }
case 249:
            var15 = var24 == var19;
            var31 = undefined;
            if(var15) { _fun0001_ip = 250; continue _fun0001 }
case 251:
            var15 = var19.application;
            var31 = var15.approximate_guild_count;
case 250:
            if(!(var24 == var31)) { _fun0001_ip = 252; continue _fun0001 }
case 253:
            var16 = var24 == var19;
            var15 = undefined;
            if(var16) { _fun0001_ip = 254; continue _fun0001 }
case 255:
            var16 = var19.bot;
            var17 = var24 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 254; continue _fun0001 }
case 256:
            var15 = var16.approximate_guild_count;
case 254:
            var31 = var15;
case 252:
            var17 = _closure1_slot16;
            var16 = _closure1_slot1;
            var33 = _closure1_slot3;
            var15 = 47;
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
            if(!var33) { _fun0001_ip = 257; continue _fun0001 }
case 258:
            var30 = var32;
case 257:
            var15['redirectUri'] = var30;
            var30 = null;
            if(!(var5 !== var31)) { _fun0001_ip = 259; continue _fun0001 }
case 260:
            var30 = var31;
case 259:
            var15['approximateGuildCount'] = var30;
            var15['isEmbeddedFlow'] = var28;
            var13 = var17.bind(var5)(var16, var15);
case 246:
            if(!var1) { _fun0001_ip = 261; continue _fun0001 }
case 262:
            var1 = var24 != var19;
case 261:
            if(!var1) { _fun0001_ip = 263; continue _fun0001 }
case 264:
            var1 = var24 != var27;
case 263:
            var15 = undefined;
            if(!var1) { _fun0001_ip = 265; continue _fun0001 }
case 266:
            var17 = _closure1_slot16;
            var16 = _closure1_slot1;
            var28 = _closure1_slot3;
            var1 = 48;
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
case 265:
            var1 = {};
            var1['header'] = var15;
            var1['body'] = var14;
            var16 = _closure1_slot16;
            var15 = _closure1_slot17;
            var14 = {};
            var17 = _closure1_slot13;
            var19 = var17.SELECT_INSTALL_TYPE;
            var17 = null;
            if(!(var20 !== var19)) { _fun0001_ip = 267; continue _fun0001 }
case 268:
            var20 = _closure1_slot16;
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var19 = 35;
            var19 = var27[var19];
            var19 = var26.bind(var5)(var19);
            var19 = var19.Button;
            if(!(var24 == var18)) { _fun0001_ip = 269; continue _fun0001 }
case 270:
            var18 = {};
            var24 = 'lg';
            var18['size'] = var24;
            var26 = _closure1_slot0;
            var24 = _closure1_slot3;
            var30 = 36;
            var27 = var24[var30];
            var27 = var26.bind(var5)(var27);
            var31 = var27.intl;
            var28 = var31.string;
            var24 = var24[var30];
            var24 = var26.bind(var5)(var24);
            var27 = var24.t;
            if(var23) { _fun0001_ip = 271; continue _fun0001 }
case 272:
            var24 = var27.y+/PE9;
            var24 = var28.bind(var31)(var24);
            _fun0001_ip = 273; continue _fun0001;
case 271:
            if(var10) { _fun0001_ip = 274; continue _fun0001 }
case 275:
            var26 = var27.N22i9F;
            var26 = var28.bind(var31)(var26);
            _fun0001_ip = 276; continue _fun0001;
case 274:
            var27 = var27.BwwiSM;
            var26 = var28.bind(var31)(var27);
case 276:
            var24 = var26;
case 273:
            var18['text'] = var24;
            var24 = function onPress() {
                var3 = _closure2_slot53;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18['onPress'] = var24;
            var24 = undefined;
            if(var10) { _fun0001_ip = 277; continue _fun0001 }
case 278:
            var28 = _closure1_slot16;
            var32 = _closure1_slot1;
            var33 = _closure1_slot3;
            var26 = var33[var25];
            var26 = var32.bind(var5)(var26);
            var27 = var26.View;
            var26 = {};
            var26['style'] = var29;
            var31 = 49;
            var31 = var33[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var33 = _closure1_slot8;
            var35 = var33.convert;
            var34 = var35.fromCodePoint;
            var33 = _closure1_slot12;
            var33 = var34.bind(var35)(var33);
            var31['name'] = var33;
            var31 = var28.bind(var5)(var32, var31);
            var26['children'] = var31;
            var24 = var28.bind(var5)(var27, var26);
case 277:
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
            _fun0001_ip = 279; continue _fun0001;
case 269:
            var21 = {};
            var24 = 'lg';
            var21['size'] = var24;
            var26 = _closure1_slot0;
            var24 = _closure1_slot3;
            var28 = 36;
            var27 = var24[var28];
            var27 = var26.bind(var5)(var27);
            var31 = var27.intl;
            var30 = var31.string;
            var24 = var24[var28];
            var24 = var26.bind(var5)(var24);
            var27 = var24.t;
            if(var23) { _fun0001_ip = 280; continue _fun0001 }
case 281:
            var24 = var27["3PatSz"];
            var24 = var30.bind(var31)(var24);
            _fun0001_ip = 282; continue _fun0001;
case 280:
            if(var10) { _fun0001_ip = 283; continue _fun0001 }
case 284:
            var26 = var27.N22i9F;
            var26 = var30.bind(var31)(var26);
            _fun0001_ip = 285; continue _fun0001;
case 283:
            var27 = var27.BwwiSM;
            var26 = var30.bind(var31)(var27);
case 285:
            var24 = var26;
case 282:
            var21['text'] = var24;
            var24 = undefined;
            if(var10) { _fun0001_ip = 286; continue _fun0001 }
case 287:
            var24 = undefined;
            if(!var23) { _fun0001_ip = 286; continue _fun0001 }
case 288:
            var27 = _closure1_slot16;
            var30 = _closure1_slot1;
            var31 = _closure1_slot3;
            var25 = var31[var25];
            var25 = var30.bind(var5)(var25);
            var26 = var25.View;
            var25 = {};
            var25['style'] = var29;
            var29 = 49;
            var29 = var31[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var31 = _closure1_slot8;
            var33 = var31.convert;
            var32 = var33.fromCodePoint;
            var31 = _closure1_slot12;
            var31 = var32.bind(var33)(var31);
            var29['name'] = var31;
            var29 = var27.bind(var5)(var30, var29);
            var25['children'] = var29;
            var24 = var27.bind(var5)(var26, var25);
case 286:
            var21['icon'] = var24;
            var24 = 'end';
            var21['iconPosition'] = var24;
            var24 = function onPress() {
                var3 = _closure2_slot20;
                var2 = _closure2_slot60;
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
case 279:
            var17 = var20.bind(var5)(var19, var18);
case 267:
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
case 244:
            var1 = {};
            var7 = _closure1_slot16;
            var4 = {};
            var4 = var7.bind(var5)(var8, var4);
            var1['body'] = var4;
            return var1;
case 189:
            var1 = {};
            var7 = _closure1_slot16;
            var4 = {};
            var4 = var7.bind(var5)(var8, var4);
            var1['body'] = var4;
            return var1;
case 187:
            var1 = {};
            var4 = _closure1_slot16;
            var8 = _closure1_slot1;
            var11 = _closure1_slot3;
            var7 = 34;
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
            var2 = 35;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var7 = 'lg';
            var2['size'] = var7;
            var7 = 36;
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
                var2 = _closure2_slot59;
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