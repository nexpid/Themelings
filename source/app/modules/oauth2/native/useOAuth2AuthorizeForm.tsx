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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMOJI_POINTING_DOWN_CODE_POINT;
    var _closure1_slot13 = var7;
    var4 = var4.OAuth2Steps;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot15 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var7 = var4.Fragment;
    var _closure1_slot18 = var7;
    var4 = var4.jsxs;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'center', 'justifyContent': 'center'};
    var4['loading'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/useOAuth2AuthorizeForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOAuth2AuthorizeForm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var35 = var2.clientId;
            var _closure2_slot0 = var35;
            var43 = var2.responseType;
            var _closure2_slot1 = var43;
            var41 = var2.redirectUri;
            var _closure2_slot2 = var41;
            var38 = var2.codeChallenge;
            var _closure2_slot3 = var38;
            var36 = var2.codeChallengeMethod;
            var _closure2_slot4 = var36;
            var22 = var2.state;
            var _closure2_slot5 = var22;
            var52 = var2.nonce;
            var _closure2_slot6 = var52;
            var23 = var2.prompt;
            var _closure2_slot7 = var23;
            var16 = var2.scopes;
            var _closure2_slot8 = var16;
            var3 = var2.permissions;
            var _closure2_slot9 = var3;
            var17 = var2.guildId;
            var12 = var2.channelId;
            var15 = var2.integrationType;
            var _closure2_slot10 = var15;
            var59 = var2.disableGuildSelect;
            var5 = undefined;
            if(!(var59 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var59 = false;
case 2:
            var48 = var2.isTrustedName;
            if(!(var48 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var48 = false;
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
            var58 = var2.disclosures;
            var _closure2_slot14 = var58;
            var34 = var2.connectedAccountProvider;
            var _closure2_slot15 = var34;
            var18 = var2.wasDeepLink;
            if(!(var18 === var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = false;
case 10:
            var _closure2_slot16 = var18;
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
            var7 = _closure1_slot20;
            var7 = var7.bind(var5)();
            _closure2_slot17 = var7;
            var11 = _closure1_slot6;
            var7 = var11.useState;
            var24 = null;
            var7 = var7.bind(var11)(var24);
            var10 = _closure1_slot5;
            var14 = 2;
            var7 = var10.bind(var5)(var7, var14);
            var56 = 0;
            var19 = var7[var56];
            _closure2_slot18 = var19;
            var8 = 1;
            var7 = var7[var8];
            _closure2_slot19 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var20 = var7[var56];
            _closure2_slot20 = var20;
            var7 = var7[var8];
            _closure2_slot21 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var24);
            var7 = var10.bind(var5)(var7, var14);
            var9 = var7[var56];
            _closure2_slot22 = var9;
            var7 = var7[var8];
            _closure2_slot23 = var7;
            var7 = var11.useState;
            var13 = false;
            var7 = var7.bind(var11)(var13);
            var7 = var10.bind(var5)(var7, var14);
            var21 = var7[var56];
            var7 = var7[var8];
            _closure2_slot24 = var7;
            var7 = var24 == var19;
            var31 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var31 = var19.guilds;
case 12:
            _closure2_slot25 = var31;
            var11 = _closure1_slot6;
            var10 = var11.useState;
            var25 = var24 != var17;
            var7 = null;
            if(!var25) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var17;
case 14:
            var10 = var10.bind(var11)(var7);
            var7 = _closure1_slot5;
            var7 = var7.bind(var5)(var10, var14);
            var54 = var7[var56];
            _closure2_slot26 = var54;
            var60 = var7[var8];
            _closure2_slot27 = var60;
            var11 = _closure1_slot6;
            var10 = var11.useState;
            var17 = var24 != var12;
            var7 = null;
            if(!var17) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var12;
case 16:
            var7 = var10.bind(var11)(var7);
            var11 = _closure1_slot5;
            var7 = var11.bind(var5)(var7, var14);
            var39 = var7[var56];
            _closure2_slot28 = var39;
            var53 = var7[var8];
            _closure2_slot29 = var53;
            var26 = _closure1_slot6;
            var12 = var26.useState;
            var17 = _closure1_slot2;
            var7 = _closure1_slot3;
            var46 = 13;
            var10 = var7[var46];
            var10 = var17.bind(var5)(var10);
            var10 = var10.NONE;
            var10 = var12.bind(var26)(var10);
            var10 = var11.bind(var5)(var10, var14);
            var47 = var10[var56];
            _closure2_slot30 = var47;
            var10 = var10[var8];
            _closure2_slot31 = var10;
            var10 = _closure1_slot0;
            var11 = 14;
            var12 = var7[var11];
            var27 = var10.bind(var5)(var12);
            var25 = var27.useStateFromStores;
            var12 = _closure1_slot12;
            var17 = new Array(1);
            var17[0] = var12;
            var12 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var25.bind(var27)(var17, var12);
            var25 = var26.useMemo;
            var17 = new Array(2);
            var17[0] = var31;
            var17[1] = var54;
            var12 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot25;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
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
case 18:
                    return var1;
                }
            };
            var40 = var25.bind(var26)(var12, var17);
            _closure2_slot32 = var40;
            var7 = var7[var11];
            var25 = var10.bind(var5)(var7);
            var17 = var25.useStateFromStores;
            var7 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var7;
            var10 = new Array(1);
            var10[0] = var34;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot15;
                    var2 = null;
                    var3 = var2 == var1;
                    var1 = null;
                    if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 19:
                    var4 = _closure1_slot11;
                    var3 = var4.getAccounts;
                    var5 = var3.bind(var4)();
                    var4 = var5.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure2_slot15;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = var2 != var3;
                    var2 = null;
                    if(!var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var2 = var3;
case 21:
                    var1 = var2;
case 20:
                    return var1;
                }
            };
            var51 = var17.bind(var25)(var12, var7, var10);
            var42 = var24 == var34;
            if(var42) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var42 = var24 != var51;
case 23:
            _closure2_slot33 = var42;
            var30 = _closure1_slot6;
            var7 = var30.useState;
            var7 = var7.bind(var30)(var24);
            var10 = _closure1_slot5;
            var7 = var10.bind(var5)(var7, var14);
            var50 = var7[var56];
            _closure2_slot34 = var50;
            var7 = var7[var8];
            _closure2_slot35 = var7;
            var7 = var30.useState;
            var7 = var7.bind(var30)(var13);
            var7 = var10.bind(var5)(var7, var14);
            var10 = var7[var56];
            _closure2_slot36 = var10;
            var7 = var7[var8];
            _closure2_slot37 = var7;
            var33 = _closure1_slot0;
            var32 = _closure1_slot3;
            var11 = var32[var11];
            var25 = var33.bind(var5)(var11);
            var17 = var25.useStateFromStores;
            var11 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var1 = _closure1_slot9;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var37 = var17.bind(var25)(var12, var11);
            _closure2_slot38 = var37;
            var11 = 15;
            var11 = var32[var11];
            var12 = var33.bind(var5)(var11);
            var11 = var12.useIsScreenReaderEnabled;
            var12 = var11.bind(var12)();
            _closure2_slot39 = var12;
            var25 = 16;
            var11 = var32[var25];
            var26 = var33.bind(var5)(var11);
            var17 = var26.useAnimatedStyle;
            var11 = function Q() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot38;
                    if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
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
                    _fun0004_ip = 27; continue _fun0004;
case 25:
                    var1 = {};
case 27:
                    return var1;
                }
            };
            var29 = {};
            var29['shouldReduceMotion'] = var37;
            var37 = var32[var25];
            var37 = var33.bind(var5)(var37);
            var37 = var37.withSequence;
            var29['withSequence'] = var37;
            var37 = 17;
            var37 = var32[var37];
            var37 = var33.bind(var5)(var37);
            var37 = var37.withTiming;
            var29['withTiming'] = var37;
            var37 = var32[var25];
            var37 = var33.bind(var5)(var37);
            var37 = var37.Easing;
            var29['Easing'] = var37;
            var32 = var32[var25];
            var32 = var33.bind(var5)(var32);
            var32 = var32.withRepeat;
            var29['withRepeat'] = var32;
            var11['__closure'] = var29;
            var29 = 1476082137097.0;
            var11['__workletHash'] = var29;
            var29 = _closure1_slot21;
            var11['__initData'] = var29;
            var29 = var17.bind(var26)(var11);
            var26 = var30.useMemo;
            var17 = var24 == var16;
            var11 = undefined;
            if(var17) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var11 = var16.length;
case 28:
            var17 = new Array(3);
            var17[0] = var11;
            var17[1] = var41;
            var17[2] = var15;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var1 = var3 == var1;
                    if(!var1) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var4 = _closure2_slot8;
                    var4 = var3 == var4;
                    var6 = undefined;
                    if(var4) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var4 = _closure2_slot8;
                    var6 = var4.length;
case 32:
                    var7 = var3 != var6;
                    var5 = 0;
                    var4 = 0;
                    if(!var7) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var4 = var6;
case 34:
                    var1 = var5 === var4;
case 30:
                    if(!var1) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var2 = _closure2_slot2;
                    var1 = var3 == var2;
case 36:
                    return var1;
                }
            };
            var17 = var26.bind(var30)(var11, var17);
            _closure2_slot40 = var17;
            var32 = _closure1_slot6;
            var11 = var32.useState;
            var26 = var11.bind(var32)(var24);
            var11 = _closure1_slot5;
            var11 = var11.bind(var5)(var26, var14);
            var37 = var11[var56];
            _closure2_slot41 = var37;
            var11 = var11[var8];
            _closure2_slot42 = var11;
            var30 = var32.useEffect;
            var26 = new Array(2);
            var26[0] = var35;
            var26[1] = var17;
            var11 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot40;
                    if(!var2) { _fun0006_ip = 20; continue _fun0006 }
case 38:
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
                        var3 = _closure2_slot42;
                        var4 = _closure1_slot10;
                        var2 = var4.createFromServer;
                        var1 = arg1;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var30.bind(var32)(var11, var26);
            var30 = var32.useMemo;
            var26 = var24 == var37;
            var11 = undefined;
            if(var26) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var11 = var37.integrationTypesConfig;
case 39:
            var26 = new Array(2);
            var26[0] = var11;
            var26[1] = var50;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot34;
                    var4 = null;
                    var2 = var4 == var1;
                    var1 = null;
                    if(var2) { _fun0007_ip = 41; continue _fun0007 }
case 19:
                    var2 = _closure2_slot41;
                    var6 = var4 == var2;
                    var2 = undefined;
                    if(var6) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var6 = _closure2_slot41;
                    var6 = var6.integrationTypesConfig;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0007_ip = 42; continue _fun0007 }
case 44:
                    var3 = _closure2_slot34;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 42; continue _fun0007 }
case 36:
                    var2 = var3.oauth2InstallParams;
case 42:
                    var1 = var2;
case 41:
                    return var1;
                }
            };
            var11 = var30.bind(var32)(var11, var26);
            _closure2_slot43 = var11;
            var32 = _closure1_slot6;
            var30 = var32.useMemo;
            var26 = var24 == var11;
            var33 = undefined;
            if(var26) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var33 = var11.scopes;
case 45:
            var26 = new Array(3);
            var26[0] = var33;
            var26[1] = var16;
            var26[2] = var17;
            var16 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot40;
                    if(var2) { _fun0008_ip = 19; continue _fun0008 }
case 47:
                    var6 = _closure2_slot8;
                    _fun0008_ip = 48; continue _fun0008;
case 19:
                    var4 = _closure2_slot43;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(var4) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var3 = _closure2_slot43;
                    var2 = var3.scopes;
case 49:
                    var6 = var2;
case 48:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 19;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filterScopes;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var6 = new Array(0);
case 51:
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
            _closure2_slot44 = var32;
            var26 = var16.accountScopes;
            var30 = _closure1_slot6;
            var16 = var30.useMemo;
            var44 = var24 == var11;
            var33 = undefined;
            if(var44) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var33 = var11.permissions;
case 53:
            var11 = new Array(3);
            var11[0] = var33;
            var11[1] = var3;
            var11[2] = var17;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot40;
                    if(var1) { _fun0009_ip = 31; continue _fun0009 }
case 38:
                    var1 = _closure2_slot9;
                    _fun0009_ip = 51; continue _fun0009;
case 31:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 21;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.deserialize;
                    var7 = _closure2_slot43;
                    var2 = null;
                    var7 = var2 == var7;
                    if(var7) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var6 = _closure2_slot43;
                    var5 = var6.permissions;
case 55:
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var2 = var5;
case 57:
                    var1 = var3.bind(var4)(var2);
case 51:
                    var2 = null;
                    if(!(var2 == var1)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.NONE;
case 59:
                    return var1;
                }
            };
            var44 = var16.bind(var30)(var3, var11);
            _closure2_slot45 = var44;
            var16 = _closure1_slot6;
            var3 = var16.useState;
            var3 = var3.bind(var16)(var13);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var14);
            var45 = var3[var56];
            _closure2_slot46 = var45;
            var3 = var3[var8];
            _closure2_slot47 = var3;
            var33 = var16.useEffect;
            var30 = new Array(1);
            var30[0] = var35;
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
                var2 = _closure2_slot47;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var33.bind(var16)(var3, var30);
            var3 = var16.useState;
            var3 = var3.bind(var16)(var24);
            var3 = var11.bind(var5)(var3, var14);
            var30 = var3[var56];
            var16 = var3[var8];
            var33 = var22;
            if(!var45) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var11 = _closure1_slot0;
            var57 = _closure1_slot3;
            var3 = 23;
            var3 = var57[var3];
            var11 = var11.bind(var5)(var3);
            var3 = var11.getAPIBaseURL;
            var11 = var3.bind(var11)(var13);
            var3 = '/v6';
            var11 = var11 + var3;
            var3 = _closure1_slot16;
            var3 = var3.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK;
            var11 = var11 + var3;
            _closure2_slot2 = var11;
            var3 = var24 == var22;
            if(!var3) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var3 = var24 == var30;
case 63:
            if(!var3) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var57 = _closure1_slot0;
            var61 = _closure1_slot3;
            var3 = 24;
            var3 = var61[var3];
            var57 = var57.bind(var5)(var3);
            var3 = var57.v4;
            var3 = var3.bind(var57)();
            var3 = var16.bind(var5)(var3);
case 65:
            var3 = var22;
            if(!(var24 != var30)) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var16 = var22;
            if(!(var24 == var22)) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var22 = 'SA';
            var16 = var22 + var30;
case 69:
            _closure2_slot5 = var16;
            var3 = var16;
case 67:
            var33 = var3;
            var41 = var11;
case 61:
            var16 = _closure1_slot6;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot48 = var3;
            var11 = var16.useState;
            var3 = var58;
            if(!(var24 == var3)) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var3 = new Array(0);
case 71:
            var3 = var11.bind(var16)(var3);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var14);
            var30 = var3[var56];
            _closure2_slot49 = var30;
            var57 = var3[var8];
            _closure2_slot50 = var57;
            var16 = _closure1_slot6;
            var22 = var16.useState;
            var3 = var24 != var58;
            var3 = var22.bind(var16)(var3);
            var3 = var11.bind(var5)(var3, var14);
            var22 = var3[var56];
            _closure2_slot51 = var22;
            var3 = var3[var8];
            _closure2_slot52 = var3;
            var14 = var16.useEffect;
            var11 = new Array(4);
            var11[0] = var35;
            var11[1] = var58;
            var11[2] = var57;
            var11[3] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot48;
                    var1 = var1.current;
                    if(var1) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var1 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0011_ip = 75; continue _fun0011 }
case 38:
                                    var2 = undefined;
                                    var6 = undefined;
                                    var5 = _closure2_slot48;
                                    var4 = true;
                                    var5['current'] = var4;
case 33: // try_start_0 // try_start_1
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var4 = 25;
                                    var4 = var7[var4];
                                    var7 = var5.bind(var2)(var4);
                                    var5 = var7.getDisclosures;
                                    var4 = _closure2_slot0;
                                    var4 = var5.bind(var7)(var4);
                                    SaveGenerator(address=71);
case 20:
                                    return var4;
case 76:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(var5) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                                    var7 = var4.disclosures;
                                    var5 = var4.allAcked;
                                    var8 = _closure2_slot52;
                                    var5 = !var5;
                                    var5 = var8.bind(var2)(var5);
                                    var5 = _closure2_slot50;
                                    var5 = var5.bind(var2)(var7);
case 79: // try_end0
                                    _fun0011_ip = 80; continue _fun0011;
case 77: // try_end1
                                    var7 = _closure2_slot48;
                                    var5 = false;
                                    var7['current'] = var5;
                                    return var4;
case 81: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    var8 = var4.body;
                                    var6 = var8;
                                    var5 = _closure2_slot23;
                                    var4 = global;
                                    var7 = var4.Error;
                                    var9 = var8.message;
                                    var8 = null;
                                    if(!(var8 == var9)) { _fun0011_ip = 82; continue _fun0011 }
case 83:
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
                                    _fun0011_ip = 84; continue _fun0011;
case 82:
                                    var4 = var6.message;
case 84:
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {constructor: {value: var7}});
                                    var16 = var6;
                                    var15 = var4;
                                    var4 = new var16[var7](var15, var14);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    var4 = var5.bind(var2)(var4);
case 80: // try_end2
                                    var5 = _closure2_slot48;
                                    var4 = false;
                                    var5['current'] = var4;
                                    return var2;
case 85: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register=1);
                                    var4 = _closure2_slot48;
                                    var3 = false;
                                    var4['current'] = var3;
                                    throw var2;
case 75:
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
                    if(!(var3 == var4)) { _fun0010_ip = 73; continue _fun0010 }
case 86:
                    var1 = var1.bind(var2)();
case 73:
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
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0012_ip = 87; continue _fun0012 }
case 26:
                            var3 = var2.isAuthorized;
                            var11 = var2.overrideSuccessCallback;
                            var15 = var2.canceled;
                            var5 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=41);
case 88:
                            return var5;
case 18:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0012_ip = 89; continue _fun0012 }
case 44:
                            var8 = _closure2_slot12;
                            var6 = null;
                            if(!(var6 == var8)) { _fun0012_ip = 90; continue _fun0012 }
case 21:
                            var8 = _closure2_slot34;
                            if(!(var6 == var8)) { _fun0012_ip = 91; continue _fun0012 }
case 92:
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
                            _fun0012_ip = 93; continue _fun0012;
case 91: // try_start_0 // try_start_2
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
                            var17 = _closure2_slot44;
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
                            var18 = _closure2_slot45;
                            var17 = _closure2_slot30;
                            var17 = var19.bind(var20)(var18, var17);
                            var8['permissions'] = var17;
                            var17 = _closure2_slot34;
                            var18 = 27;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0012_ip = 94; continue _fun0012 }
case 95:
                            var16 = _closure2_slot26;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0012_ip = 94; continue _fun0012 }
case 96:
                            var14 = _closure2_slot26;
case 94:
                            var8['guildId'] = var14;
                            var17 = _closure2_slot34;
                            var16 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                            var16 = _closure2_slot28;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0012_ip = 97; continue _fun0012 }
case 99:
                            var14 = _closure2_slot28;
case 97:
                            var8['channelId'] = var14;
                            var14 = _closure2_slot34;
                            var8['integrationType'] = var14;
                            var14 = _closure2_slot15;
                            var8['connectedAccountProvider'] = var14;
                            var8 = var12.bind(var13)(var8);
                            SaveGenerator(address=426);
case 100:
                            return var8;
case 101:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                            if(var12) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                            var10 = var8;
                            var12 = var3;
                            if(!var12) { _fun0012_ip = 104; continue _fun0012 }
case 105:
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
                            var9 = _closure2_slot49;
                            var9 = var13.bind(var14)(var12, var9);
                            SaveGenerator(address=514);
case 106:
                            return var9;
case 107:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0012_ip = 108; continue _fun0012 }
case 104:
                            var12 = var11;
                            if(!(var6 == var12)) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                            var12 = _closure2_slot13;
                            if(!(var6 != var12)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                            var12 = _closure2_slot13;
                            var12 = var12.bind(var5)();
case 111:
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
                            SaveGenerator(address=590);
case 113:
                            return var12;
case 114:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                            if(var13) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                            var13 = _closure2_slot11;
                            if(!(var6 != var13)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                            var14 = _closure2_slot11;
                            var13 = {};
                            var21 = var10;
                            var22 = var13;
                            var16 = copyDataProperties(var22, var21);
                            var16 = var15;
                            var15 = 'canceled';
                            var13[14] = var16;
                            var15 = _closure2_slot18;
                            var15 = var6 == var15;
                            var16 = undefined;
                            if(var15) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                            var15 = _closure2_slot18;
                            var16 = var15.application;
case 119:
                            var15 = 'application';
                            var13[14] = var16;
                            var16 = _closure2_slot32;
                            var15 = 'guild';
                            var13[14] = var16;
                            var16 = _closure2_slot16;
                            var15 = 'wasDeepLink';
                            var13[14] = var16;
                            var13 = var14.bind(var5)(var13);
                            _fun0012_ip = 117; continue _fun0012;
case 115: // try_end0 // try_end2
                            var14 = _closure2_slot24;
                            var13 = false;
                            var13 = var14.bind(var5)(var13);
                            return var12;
case 109: // try_start_1 // try_start_3
                            var10 = var10.location;
                            var10 = var11.bind(var5)(var10);
case 117: // try_end1
                            _fun0012_ip = 121; continue _fun0012;
case 108: // try_end3
                            var11 = _closure2_slot24;
                            var10 = false;
                            var10 = var11.bind(var5)(var10);
                            return var9;
case 102:
                            var10 = _closure2_slot24;
                            var9 = false;
                            var9 = var10.bind(var5)(var9);
                            return var8;
case 122: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=7);
                            var8 = var8.body;
                            var7 = var8;
                            var9 = var6 == var8;
                            var8 = undefined;
                            if(var9) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                            var9 = var7;
                            var8 = var9.message;
case 123:
                            if(!(var6 != var8)) { _fun0012_ip = 125; continue _fun0012 }
case 126:
                            var8 = var7;
                            var9 = var8.message;
                            var8 = '';
                            if(!(var8 === var9)) { _fun0012_ip = 127; continue _fun0012 }
case 125:
                            var9 = _closure2_slot23;
                            var8 = var7;
                            var8 = var9.bind(var5)(var8);
                            var9 = _closure2_slot21;
                            var8 = _closure1_slot14;
                            var8 = var8.AUTHORIZE_SCOPES;
                            var8 = var9.bind(var5)(var8);
                            _fun0012_ip = 121; continue _fun0012;
case 127:
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
case 121: // try_end4
                            var8 = _closure2_slot24;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
case 93:
                            return var5;
case 128: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=6);
                            var9 = _closure2_slot24;
                            var8 = false;
                            var8 = var9.bind(var5)(var8);
                            throw var7;
case 90:
                            var8 = _closure2_slot24;
                            var7 = true;
                            var7 = var8.bind(var5)(var7);
                            var7 = _closure2_slot12;
                            var3 = var7.bind(var5)(var3);
                            var3 = _closure2_slot13;
                            var3 = var6 == var3;
                            if(var3) { _fun0012_ip = 129; continue _fun0012 }
case 130:
                            var4 = _closure2_slot13;
                            var3 = var4.bind(var5)();
case 129:
                            var3 = undefined;
                            return var3;
case 89:
                            return var2;
case 87:
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
            var3[0] = var50;
            var3[1] = var55;
            var3[2] = var35;
            var3[3] = var32;
            var3[4] = var43;
            var3[5] = var41;
            var3[6] = var38;
            var3[7] = var36;
            var3[8] = var33;
            var3[9] = var52;
            var3[10] = var44;
            var3[11] = var47;
            var3[12] = var54;
            var3[13] = var39;
            var3[14] = var30;
            var3[15] = var1;
            var3[16] = var49;
            var3[17] = var18;
            var49 = var24 == var19;
            var18 = undefined;
            if(var49) { _fun0001_ip = 131; continue _fun0001 }
case 132:
            var18 = var19.application;
case 131:
            var3[18] = var18;
            var3[19] = var40;
            var3[20] = var34;
            var11 = var14.bind(var16)(var11, var3);
            _closure2_slot53 = var11;
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
                    var3 = _closure2_slot53;
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
            _closure2_slot54 = var3;
            var18 = var16.useCallback;
            var14 = new Array(8);
            var14[0] = var35;
            var14[1] = var45;
            var14[2] = var43;
            var14[3] = var11;
            var14[4] = var3;
            var14[5] = var33;
            var14[6] = var1;
            var14[7] = var32;
            var3 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot46;
                    if(var4) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                    var4 = _closure2_slot53;
                    var3 = {};
                    var3['isAuthorized'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0013_ip = 135; continue _fun0013;
case 133:
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
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var6 = undefined;
                            var2 = var2 === var6;
                            var10 = undefined;
                            if(var2) { _fun0014_ip = 136; continue _fun0014 }
case 137:
                            var10 = var4;
case 136:
                            var4 = undefined;
                            if(var2) { _fun0014_ip = 138; continue _fun0014 }
case 139:
                            var5 = var3().value;
                            var3 = var1;
                            var3 = var3 === var6;
                            var4 = undefined;
                            var2 = var3;
                            if(var3) { _fun0014_ip = 138; continue _fun0014 }
case 140:
                            var4 = var5;
                            var2 = var3;
case 138:
                            if(var2) { _fun0014_ip = 22; continue _fun0014 }
case 56:
                            var1.return();
case 22:
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
                            var14 = _closure2_slot44;
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
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var5 = var3().value;
                            var2 = var1;
                            var6 = undefined;
                            var2 = var2 === var6;
                            var4 = undefined;
                            if(var2) { _fun0015_ip = 136; continue _fun0015 }
case 137:
                            var4 = var5;
case 136:
                            if(var2) { _fun0015_ip = 18; continue _fun0015 }
case 141:
                            var3 = var3().value;
                            var3 = var1;
                            var2 = var3 === var6;
case 18:
                            if(var2) { _fun0015_ip = 142; continue _fun0015 }
case 73:
                            var1.return();
case 142:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.all;
                            var1 = new Array(2);
                            var1[0] = var4;
                            var5 = _closure2_slot54;
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
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var6 = arg1;
                            var1 = var6[Symbol.iterator];
                            var6 = var1().next;
                            var4 = var6().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var5 = undefined;
                            if(var2) { _fun0016_ip = 136; continue _fun0016 }
case 137:
                            var5 = var4;
case 136:
                            var4 = undefined;
                            if(var2) { _fun0016_ip = 138; continue _fun0016 }
case 139:
                            var7 = var6().value;
                            var6 = var1;
                            var6 = var6 === var3;
                            var4 = undefined;
                            var2 = var6;
                            if(var6) { _fun0016_ip = 138; continue _fun0016 }
case 140:
                            var4 = var7;
                            var2 = var6;
case 138:
                            if(var2) { _fun0016_ip = 22; continue _fun0016 }
case 56:
                            var1.return();
case 22:
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
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var3 = _closure2_slot13;
                            var1 = null;
                            var4 = var1 == var3;
                            var3 = undefined;
                            var1 = undefined;
                            if(var4) { _fun0017_ip = 143; continue _fun0017 }
case 144:
                            var2 = _closure2_slot13;
                            var1 = var2.bind(var3)();
case 143:
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
case 135:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var18.bind(var16)(var3, var14);
            _closure2_slot55 = var3;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot56 = var3;
            var18 = var16.useCallback;
            var14 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 145; continue _fun0018 }
case 38:
                        var2 = undefined;
                        var10 = undefined;
                        var6 = undefined;
                        var3 = _closure2_slot56;
                        var3 = var3.current;
                        if(var3) { _fun0018_ip = 146; continue _fun0018 }
case 147:
                        var3 = _closure2_slot56;
                        var9 = true;
                        var3['current'] = var9;
case 48: // try_start_0 // try_start_1
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 26;
                        var3 = var8[var3];
                        var8 = var7.bind(var2)(var3);
                        var7 = var8.fetchAuthorization;
                        var3 = {};
                        var11 = _closure2_slot0;
                        var3['clientId'] = var11;
                        var11 = _closure2_slot44;
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
                        var12 = _closure2_slot34;
                        var11 = null;
                        var12 = var11 != var12;
                        var11 = undefined;
                        if(!var12) { _fun0018_ip = 148; continue _fun0018 }
case 149:
                        var11 = _closure2_slot34;
case 148:
                        var3['integrationType'] = var11;
                        var11 = _closure2_slot15;
                        var3['connectedAccountProvider'] = var11;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address=181);
case 150:
                        return var3;
case 151:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0018_ip = 152; continue _fun0018 }
case 153:
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
                        if(!var11) { _fun0018_ip = 25; continue _fun0018 }
case 80:
                        var11 = var10;
                        var8 = var11.authorized;
case 25:
                        var7 = var8;
                        if(!var8) { _fun0018_ip = 154; continue _fun0018 }
case 85:
                        var8 = _closure2_slot51;
                        var7 = !var8;
case 154:
                        if(!var7) { _fun0018_ip = 155; continue _fun0018 }
case 156:
                        var8 = _closure2_slot53;
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
                        var5 = var8.bind(var9)(var7, var5);
case 157: // try_end0
                        _fun0018_ip = 158; continue _fun0018;
case 152: // try_end1
                        var7 = _closure2_slot56;
                        var5 = false;
                        var7['current'] = var5;
                        return var3;
case 99: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=2);
                        var8 = var3.body;
                        var6 = var8;
                        var5 = _closure2_slot23;
                        var3 = global;
                        var7 = var3.Error;
                        var9 = var8.message;
                        var8 = null;
                        if(!(var8 == var9)) { _fun0018_ip = 159; continue _fun0018 }
case 100:
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
                        _fun0018_ip = 160; continue _fun0018;
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
case 158: // try_end2
                        var5 = _closure2_slot56;
                        var3 = false;
                        var5['current'] = var3;
                        _fun0018_ip = 146; continue _fun0018;
case 161: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot56;
                        var4 = false;
                        var5['current'] = var4;
                        throw var3;
case 146:
                        return var2;
case 145:
                        return var1;
                    }
                };
                return var1;
            };
            var14 = var14.bind(var5)(var3);
            var3 = new Array(12);
            var3[0] = var35;
            var3[1] = var32;
            var3[2] = var43;
            var3[3] = var41;
            var3[4] = var38;
            var3[5] = var36;
            var3[6] = var33;
            var3[7] = var50;
            var3[8] = var34;
            var3[9] = var23;
            var3[10] = var11;
            var3[11] = var22;
            var14 = var18.bind(var16)(var14, var3);
            _closure2_slot57 = var14;
            var22 = var16.useMemo;
            var18 = new Array(2);
            var18[0] = var37;
            var18[1] = var17;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot41;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0019_ip = 162; continue _fun0019 }
case 74:
                    var1 = _closure2_slot40;
                    if(var1) { _fun0019_ip = 143; continue _fun0019 }
case 162:
                    var1 = new Array(0);
                    _fun0019_ip = 163; continue _fun0019;
case 143:
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var3 = _closure2_slot41;
                    var3 = var3.integrationTypesConfig;
                    if(!(var6 == var3)) { _fun0019_ip = 164; continue _fun0019 }
case 30:
                    var3 = {};
case 164:
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var1 = var4().value;
                            var1 = var2;
                            var6 = undefined;
                            var3 = var1 === var6;
                            var1 = undefined;
                            if(var3) { _fun0020_ip = 35; continue _fun0020 }
case 137:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var6;
                            var1 = undefined;
                            var3 = var4;
                            if(var4) { _fun0020_ip = 35; continue _fun0020 }
case 49:
                            var1 = var5;
                            var3 = var4;
case 35:
                            if(var3) { _fun0020_ip = 165; continue _fun0020 }
case 34:
                            var2.return();
case 165:
                            var2 = var1.oauth2InstallParams;
                            var1 = null;
                            var1 = var1 != var2;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var6 = var5().value;
                            var2 = var1;
                            var3 = undefined;
                            var4 = var2 === var3;
                            var2 = undefined;
                            if(var4) { _fun0021_ip = 136; continue _fun0021 }
case 137:
                            var2 = var6;
case 136:
                            if(var4) { _fun0021_ip = 18; continue _fun0021 }
case 141:
                            var5 = var5().value;
                            var5 = var1;
                            var4 = var5 === var3;
case 18:
                            if(var4) { _fun0021_ip = 142; continue _fun0021 }
case 73:
                            var1.return();
case 142:
                            var1 = global;
                            var1 = var1.Number;
                            var1 = var1.bind(var3)(var2);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 163:
                    return var1;
                }
            };
            var3 = var22.bind(var16)(var3, var18);
            _closure2_slot58 = var3;
            var18 = var16.useRef;
            var18 = var18.bind(var16)(var24);
            _closure2_slot59 = var18;
            var23 = var16.useEffect;
            var22 = new Array(5);
            var22[0] = var35;
            var22[1] = var50;
            var22[2] = var44;
            var22[3] = var32;
            var22[4] = var20;
            var18 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var1 = _closure2_slot59;
                    var1 = var1.current;
                    if(!(var2 !== var1)) { _fun0022_ip = 166; continue _fun0022 }
case 144:
                    var2 = _closure2_slot59;
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
                    var6 = _closure2_slot34;
                    var1['integration_type'] = var6;
                    var6 = _closure2_slot44;
                    var1['scopes'] = var6;
                    var6 = _closure2_slot45;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var1['permissions'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 166:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var23.bind(var16)(var18, var22);
            var22 = var16.useEffect;
            var18 = new Array(7);
            var18[0] = var3;
            var18[1] = var37;
            var18[2] = var17;
            var18[3] = var15;
            var18[4] = var20;
            var18[5] = var34;
            var18[6] = var42;
            var17 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var3 = null;
                    var2 = var3 != var2;
                    if(var2) { _fun0023_ip = 147; continue _fun0023 }
case 31:
                    var4 = _closure2_slot40;
                    if(!var4) { _fun0023_ip = 43; continue _fun0023 }
case 167:
                    var5 = _closure2_slot41;
                    var4 = var3 == var5;
case 43:
                    var2 = var4;
case 147:
                    if(var2) { _fun0023_ip = 168; continue _fun0023 }
case 86:
                    var2 = _closure2_slot15;
                    if(!(var3 != var2)) { _fun0023_ip = 169; continue _fun0023 }
case 170:
                    var2 = _closure2_slot33;
                    if(var2) { _fun0023_ip = 169; continue _fun0023 }
case 165:
                    var5 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var4 = var2.CONNECT_ACCOUNT;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    _fun0023_ip = 168; continue _fun0023;
case 169:
                    var2 = _closure2_slot58;
                    var2 = var2.length;
                    var4 = 1;
                    if(!(!(var2 > var4))) { _fun0023_ip = 171; continue _fun0023 }
case 172:
                    var2 = _closure2_slot58;
                    var2 = var2.length;
                    if(!(var4 !== var2)) { _fun0023_ip = 173; continue _fun0023 }
case 174:
                    var2 = _closure2_slot10;
                    if(!(var3 == var2)) { _fun0023_ip = 175; continue _fun0023 }
case 59:
                    var5 = _closure2_slot35;
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
                    _fun0023_ip = 168; continue _fun0023;
case 175:
                    var3 = _closure2_slot35;
                    var2 = _closure2_slot10;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0023_ip = 168; continue _fun0023;
case 173:
                    var3 = _closure2_slot35;
                    var4 = _closure2_slot58;
                    var2 = 0;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0023_ip = 168; continue _fun0023;
case 171:
                    var3 = _closure2_slot21;
                    var1 = _closure1_slot14;
                    var2 = var1.SELECT_INSTALL_TYPE;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 168:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var22.bind(var16)(var17, var18);
            var18 = var16.useEffect;
            var17 = new Array(3);
            var17[0] = var20;
            var17[1] = var42;
            var17[2] = var15;
            var15 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = _closure2_slot20;
                    var3 = _closure1_slot14;
                    var3 = var3.CONNECT_ACCOUNT;
                    var3 = var4 === var3;
                    if(!var3) { _fun0024_ip = 43; continue _fun0024 }
case 136:
                    var3 = _closure2_slot33;
case 43:
                    if(!var3) { _fun0024_ip = 176; continue _fun0024 }
case 147:
                    var5 = _closure2_slot35;
                    var4 = _closure2_slot10;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0024_ip = 169; continue _fun0024 }
case 170:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var3 = var3.ApplicationIntegrationType;
                    var4 = var3.USER_INSTALL;
                    _fun0024_ip = 177; continue _fun0024;
case 169:
                    var4 = _closure2_slot10;
case 177:
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure2_slot21;
                    var1 = _closure1_slot14;
                    var1 = var1.AUTHORIZE_SCOPES;
                    var1 = var2.bind(var3)(var1);
case 176:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var18.bind(var16)(var15, var17);
            var17 = var16.useEffect;
            var15 = new Array(6);
            var15[0] = var14;
            var15[1] = var32;
            var15[2] = var44;
            var15[3] = var50;
            var15[4] = var19;
            var15[5] = var9;
            var14 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = _closure2_slot34;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0025_ip = 178; continue _fun0025 }
case 31:
                    var2 = _closure2_slot18;
                    if(!(var5 == var2)) { _fun0025_ip = 178; continue _fun0025 }
case 136:
                    var2 = _closure2_slot22;
                    if(!(var5 == var2)) { _fun0025_ip = 178; continue _fun0025 }
case 32:
                    var6 = _closure2_slot34;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.ApplicationIntegrationType;
                    var4 = var4.USER_INSTALL;
                    if(!(var6 === var4)) { _fun0025_ip = 179; continue _fun0025 }
case 52:
                    var4 = _closure2_slot27;
                    var4 = var4.bind(var3)(var5);
                    var4 = _closure2_slot29;
                    var4 = var4.bind(var3)(var5);
case 179:
                    var6 = _closure2_slot44;
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
                    var4 = _closure2_slot44;
                    var4 = var4.length;
                    var5 = 0;
                    if(!(var5 !== var4)) { _fun0025_ip = 155; continue _fun0025 }
case 180:
                    var4 = var7.length;
                    if(!(!(var4 > var5))) { _fun0025_ip = 181; continue _fun0025 }
case 182:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 33;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.containsDisallowedPermission;
                    var2 = _closure2_slot45;
                    var2 = var4.bind(var6)(var2);
                    if(var2) { _fun0025_ip = 183; continue _fun0025 }
case 184:
                    var2 = _closure2_slot57;
                    var2 = var2.bind(var3)();
                    _fun0025_ip = 178; continue _fun0025;
case 183:
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
                    _fun0025_ip = 178; continue _fun0025;
case 181:
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
                    _fun0025_ip = 178; continue _fun0025;
case 155:
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
case 178:
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
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = _closure2_slot39;
                    if(!var2) { _fun0026_ip = 185; continue _fun0026 }
case 38:
                    var3 = _closure2_slot36;
                    var2 = !var3;
case 185:
                    if(!var2) { _fun0026_ip = 50; continue _fun0026 }
case 144:
                    var3 = _closure2_slot37;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var15.bind(var16)(var12, var14);
            var12 = _closure1_slot14;
            var12 = var12.AUTHORIZE_SCOPES;
            if(!(var20 === var12)) { _fun0001_ip = 186; continue _fun0001 }
case 187:
            var3 = var3.length;
            if(!(!(var3 > var8))) { _fun0001_ip = 188; continue _fun0001 }
case 186:
            var3 = _closure1_slot14;
            var3 = var3.AUTHORIZE_BOT_PERMISSIONS;
            var12 = undefined;
            if(!(var20 === var3)) { _fun0001_ip = 189; continue _fun0001 }
case 190:
            var3 = _closure1_slot14;
            var3 = var3.AUTHORIZE_SCOPES;
            _closure2_slot60 = var3;
            var12 = var3;
            _fun0001_ip = 189; continue _fun0001;
case 188:
            var3 = _closure1_slot14;
            var3 = var3.SELECT_INSTALL_TYPE;
            _closure2_slot60 = var3;
            var12 = var3;
case 189:
            var14 = _closure1_slot6;
            var8 = var14.useCallback;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var1;
            var3[2] = var11;
            var1 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot60;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0027_ip = 34; continue _fun0027 }
case 26:
                    var5 = _closure2_slot53;
                    var3 = undefined;
                    var2 = {'isAuthorized': false, 'canceled': true};
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure2_slot13;
                    if(!(var4 != var2)) { _fun0027_ip = 36; continue _fun0027 }
case 133:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var3)();
                    _fun0027_ip = 36; continue _fun0027;
case 34:
                    var3 = _closure2_slot21;
                    var2 = _closure2_slot60;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 36:
                    var1 = true;
                    return var1;
                }
            };
            var3 = var8.bind(var14)(var1, var3);
            _closure2_slot61 = var3;
            var8 = _closure1_slot1;
            var15 = _closure1_slot3;
            var1 = 34;
            var1 = var15[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.bind(var5)(var3, var4);
            var8 = var14.useCallback;
            var4 = function(arg1) {
                var4 = _closure2_slot35;
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
            var36 = var8.bind(var14)(var4, var1);
            var8 = var14.useCallback;
            var4 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot31;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var5 = arg1;
                        var1 = _closure3_slot0;
                        var6 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var3 = 21;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        if(var1) { _fun0028_ip = 165; continue _fun0028 }
case 32:
                        var3 = var4.add;
                        var1 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var1);
                        _fun0028_ip = 76; continue _fun0028;
case 165:
                        var3 = var4.remove;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var2);
case 76:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var45 = var8.bind(var14)(var4, var1);
            var16 = global;
            var1 = var16.Error;
            var1 = var9 instanceof var1;
            if(var1) { _fun0001_ip = 191; continue _fun0001 }
case 192:
            var8 = function Spinner() {
                var4 = _closure1_slot17;
                var3 = _closure1_slot7;
                var2 = {};
                var5 = _closure2_slot17;
                var5 = var5.loading;
                var2['style'] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 38;
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
            var1 = var24 != var34;
            var55 = '';
            var33 = var55;
            if(!var1) { _fun0001_ip = 193; continue _fun0001 }
case 194:
            var4 = _closure1_slot1;
            var14 = _closure1_slot3;
            var1 = 39;
            var1 = var14[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.get;
            var4 = var1.bind(var4)(var34);
            var14 = var24 == var4;
            var1 = undefined;
            if(var14) { _fun0001_ip = 195; continue _fun0001 }
case 196:
            var1 = var4.name;
case 195:
            var4 = var24 != var1;
            var33 = var55;
            if(!var4) { _fun0001_ip = 193; continue _fun0001 }
case 197:
            var33 = var1;
case 193:
            if(!(var24 !== var20)) { _fun0001_ip = 198; continue _fun0001 }
case 199:
            var1 = _closure1_slot14;
            var1 = var1.CONNECT_ACCOUNT;
            if(!(var1 !== var20)) { _fun0001_ip = 200; continue _fun0001 }
case 201:
            var1 = _closure1_slot14;
            var1 = var1.SELECT_INSTALL_TYPE;
            if(!(var1 !== var20)) { _fun0001_ip = 202; continue _fun0001 }
case 203:
            var1 = _closure1_slot14;
            var1 = var1.AUTHORIZE_SCOPES;
            if(!(var1 !== var20)) { _fun0001_ip = 204; continue _fun0001 }
case 205:
            var1 = _closure1_slot14;
            var38 = var1.AUTHORIZE_BOT_PERMISSIONS;
            var14 = undefined;
            var18 = undefined;
            var4 = false;
            var23 = false;
            var15 = true;
            var1 = true;
            if(!(var38 === var20)) { _fun0001_ip = 206; continue _fun0001 }
case 207:
            if(!(var24 != var19)) { _fun0001_ip = 208; continue _fun0001 }
case 209:
            var43 = _closure1_slot17;
            var41 = _closure1_slot1;
            var49 = _closure1_slot3;
            var38 = 49;
            var38 = var49[var38];
            var41 = var41.bind(var5)(var38);
            var38 = {};
            var49 = var19.application;
            var38['application'] = var49;
            var38['permissions'] = var44;
            var38['deniedPermissions'] = var47;
            var38['onPermissionsChange'] = var45;
            var38['guild'] = var40;
            var14 = var43.bind(var5)(var41, var38);
            var18 = undefined;
            var4 = true;
            var23 = false;
            var15 = true;
            var1 = true;
            _fun0001_ip = 206; continue _fun0001;
case 208:
            var17 = {};
            var41 = _closure1_slot17;
            var38 = {};
            var38 = var41.bind(var5)(var8, var38);
            var17['body'] = var38;
            return var17;
case 204:
            if(!(var24 != var19)) { _fun0001_ip = 210; continue _fun0001 }
case 211:
            if(!(var24 != var27)) { _fun0001_ip = 210; continue _fun0001 }
case 212:
            if(!(var24 != var50)) { _fun0001_ip = 210; continue _fun0001 }
case 213:
            if(!(var24 != var9)) { _fun0001_ip = 214; continue _fun0001 }
case 215:
            var16 = var16.Error;
            var16 = var9 instanceof var16;
            var57 = var9;
            if(!var16) { _fun0001_ip = 216; continue _fun0001 }
case 214:
            var57 = {};
case 216:
            var16 = var24 == var31;
            var58 = undefined;
            if(var16) { _fun0001_ip = 217; continue _fun0001 }
case 218:
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
            var58 = var17.bind(var31)(var16);
case 217:
            var17 = _closure1_slot0;
            var16 = _closure1_slot3;
            var41 = 27;
            var16 = var16[var41];
            var16 = var17.bind(var5)(var16);
            var16 = var16.ApplicationIntegrationType;
            var16 = var16.GUILD_INSTALL;
            var16 = var50 === var16;
            if(!var16) { _fun0001_ip = 219; continue _fun0001 }
case 220:
            var31 = var32.includes;
            var38 = _closure1_slot0;
            var43 = _closure1_slot3;
            var17 = 42;
            var17 = var43[var17];
            var17 = var38.bind(var5)(var17);
            var17 = var17.OAuth2Scopes;
            var17 = var17.WEBHOOK_INCOMING;
            var16 = var31.bind(var32)(var17);
case 219:
            var17 = var16;
            if(var16) { _fun0001_ip = 221; continue _fun0001 }
case 222:
            var38 = _closure1_slot0;
            var31 = _closure1_slot3;
            var31 = var31[var41];
            var31 = var38.bind(var5)(var31);
            var31 = var31.ApplicationIntegrationType;
            var31 = var31.GUILD_INSTALL;
            var31 = var50 === var31;
            if(!var31) { _fun0001_ip = 223; continue _fun0001 }
case 224:
            var41 = var32.includes;
            var43 = _closure1_slot0;
            var38 = _closure1_slot3;
            var47 = 42;
            var38 = var38[var47];
            var38 = var43.bind(var5)(var38);
            var38 = var38.OAuth2Scopes;
            var38 = var38.BOT;
            var38 = var41.bind(var32)(var38);
            if(var38) { _fun0001_ip = 225; continue _fun0001 }
case 226:
            var43 = var32.includes;
            var45 = _closure1_slot0;
            var41 = _closure1_slot3;
            var41 = var41[var47];
            var41 = var45.bind(var5)(var41);
            var41 = var41.OAuth2Scopes;
            var41 = var41.APPLICATIONS_COMMANDS;
            var38 = var43.bind(var32)(var41);
case 225:
            var31 = var38;
case 223:
            var17 = var31;
case 221:
            var38 = _closure1_slot0;
            var41 = _closure1_slot3;
            var31 = 43;
            var31 = var41[var31];
            var41 = var38.bind(var5)(var31);
            var38 = var41.getIsSocialLayerParentApplication;
            var31 = var19.application;
            var49 = var38.bind(var41)(var31);
            var41 = _closure1_slot19;
            var38 = _closure1_slot18;
            var31 = {};
            var45 = var24 != var51;
            var43 = null;
            if(!var45) { _fun0001_ip = 227; continue _fun0001 }
case 228:
            var43 = null;
            if(!var42) { _fun0001_ip = 227; continue _fun0001 }
case 229:
            var47 = _closure1_slot17;
            var45 = _closure1_slot0;
            var52 = _closure1_slot3;
            var42 = 40;
            var42 = var52[var42];
            var42 = var45.bind(var5)(var42);
            var45 = var42.ConnectedAccountCard;
            var42 = {};
            var52 = var51.type;
            var42['platformType'] = var52;
            var42['platformName'] = var33;
            var42['connectedAccount'] = var51;
            var43 = var47.bind(var5)(var45, var42);
case 227:
            var42 = new Array(5);
            var42[0] = var43;
            var47 = _closure1_slot17;
            var45 = _closure1_slot1;
            var51 = _closure1_slot3;
            var43 = 44;
            var43 = var51[var43];
            var52 = var45.bind(var5)(var43);
            var43 = {};
            var61 = var19.application;
            var43['application'] = var61;
            var43['accountScopes'] = var26;
            var43 = var47.bind(var5)(var52, var43);
            var42[1] = var43;
            var43 = 45;
            var43 = var51[var43];
            var45 = var45.bind(var5)(var43);
            var43 = {};
            var51 = var19.application;
            var43['application'] = var51;
            var43['accountScopes'] = var26;
            var43['requestedScopes'] = var32;
            var43['integrationType'] = var50;
            var43['errors'] = var57;
            if(var48) { _fun0001_ip = 230; continue _fun0001 }
case 231:
            var48 = var49;
case 230:
            var43['isTrustedName'] = var48;
            var43 = var47.bind(var5)(var45, var43);
            var42[2] = var43;
            var43 = null;
            if(!var17) { _fun0001_ip = 232; continue _fun0001 }
case 233:
            var48 = _closure1_slot19;
            var47 = _closure1_slot18;
            var45 = {};
            var52 = _closure1_slot17;
            var62 = _closure1_slot0;
            var61 = _closure1_slot3;
            var49 = 46;
            var49 = var61[var49];
            var49 = var62.bind(var5)(var49);
            var50 = var49.AuthorizeFormSeparator;
            var49 = {};
            var50 = var52.bind(var5)(var50, var49);
            var49 = new Array(2);
            var49[0] = var50;
            var51 = _closure1_slot1;
            var50 = 47;
            var50 = var61[var50];
            var51 = var51.bind(var5)(var50);
            var50 = {};
            var64 = 42;
            var61 = var61[var64];
            var61 = var62.bind(var5)(var61);
            var61 = var61.OAuth2Scopes;
            var61 = var61.BOT;
            var61 = var57[var61];
            if(!(var24 == var61)) { _fun0001_ip = 234; continue _fun0001 }
case 235:
            var63 = _closure1_slot0;
            var62 = _closure1_slot3;
            var62 = var62[var64];
            var62 = var63.bind(var5)(var62);
            var62 = var62.OAuth2Scopes;
            var62 = var62.APPLICATIONS_COMMANDS;
            var61 = var57[var62];
case 234:
            if(!(var24 == var61)) { _fun0001_ip = 236; continue _fun0001 }
case 237:
            var61 = new Array(0);
case 236:
            var61 = var61[var56];
            var50['error'] = var61;
            var50['selectedGuildId'] = var54;
            var50['onGuildChange'] = var60;
            if(!(var24 == var58)) { _fun0001_ip = 238; continue _fun0001 }
case 239:
            var58 = new Array(0);
case 238:
            var50['guilds'] = var58;
            var55 = var55 !== var54;
            if(!var55) { _fun0001_ip = 240; continue _fun0001 }
case 241:
            var58 = true;
            var55 = var58 === var59;
case 240:
            var50['disabled'] = var55;
            var50 = var52.bind(var5)(var51, var50);
            var49[1] = var50;
            var45['children'] = var49;
            var43 = var48.bind(var5)(var47, var45);
case 232:
            var42[3] = var43;
            var43 = null;
            if(!var16) { _fun0001_ip = 242; continue _fun0001 }
case 243:
            var48 = _closure1_slot19;
            var47 = _closure1_slot18;
            var45 = {};
            var52 = _closure1_slot17;
            var58 = _closure1_slot0;
            var59 = _closure1_slot3;
            var49 = 46;
            var49 = var59[var49];
            var49 = var58.bind(var5)(var49);
            var50 = var49.AuthorizeFormSeparator;
            var49 = {};
            var50 = var52.bind(var5)(var50, var49);
            var49 = new Array(2);
            var49[0] = var50;
            var51 = _closure1_slot1;
            var50 = 48;
            var50 = var59[var50];
            var51 = var51.bind(var5)(var50);
            var50 = {};
            var55 = 42;
            var55 = var59[var55];
            var55 = var58.bind(var5)(var55);
            var55 = var55.OAuth2Scopes;
            var55 = var55.WEBHOOK_INCOMING;
            var55 = var57[var55];
            if(!(var24 == var55)) { _fun0001_ip = 244; continue _fun0001 }
case 245:
            var55 = new Array(0);
case 244:
            var55 = var55[var56];
            var50['error'] = var55;
            var50['selectedChannelId'] = var39;
            var50['selectedGuildId'] = var54;
            var50['onChannelChange'] = var53;
            var50 = var52.bind(var5)(var51, var50);
            var49[1] = var50;
            var45['children'] = var49;
            var43 = var48.bind(var5)(var47, var45);
case 242:
            var42[4] = var43;
            var31['children'] = var42;
            var38 = var41.bind(var5)(var38, var31);
            var41 = var32.includes;
            var42 = _closure1_slot0;
            var43 = _closure1_slot3;
            var31 = 42;
            var31 = var43[var31];
            var31 = var42.bind(var5)(var31);
            var31 = var31.OAuth2Scopes;
            var31 = var31.BOT;
            var41 = var41.bind(var32)(var31);
            if(!var41) { _fun0001_ip = 246; continue _fun0001 }
case 247:
            var45 = _closure1_slot2;
            var31 = _closure1_slot3;
            var42 = 21;
            var42 = var31[var42];
            var43 = var45.bind(var5)(var42);
            var42 = var43.equals;
            var31 = var31[var46];
            var31 = var45.bind(var5)(var31);
            var31 = var31.NONE;
            var31 = var42.bind(var43)(var44, var31);
            var41 = !var31;
case 246:
            var31 = undefined;
            if(!var41) { _fun0001_ip = 248; continue _fun0001 }
case 249:
            var41 = _closure1_slot14;
            var41 = var41.AUTHORIZE_BOT_PERMISSIONS;
            _closure2_slot62 = var41;
            var31 = var41;
case 248:
            if(!var17) { _fun0001_ip = 250; continue _fun0001 }
case 251:
            var17 = var24 == var40;
case 250:
            if(var17) { _fun0001_ip = 252; continue _fun0001 }
case 253:
            if(!var16) { _fun0001_ip = 254; continue _fun0001 }
case 255:
            var16 = var24 == var39;
case 254:
            var17 = var16;
case 252:
            if(var17) { _fun0001_ip = 256; continue _fun0001 }
case 257:
            var17 = !var10;
case 256:
            var4 = true;
            var23 = var17;
            var14 = var38;
            var18 = var31;
            var15 = true;
            var1 = true;
            _fun0001_ip = 206; continue _fun0001;
case 210:
            var16 = {};
            var31 = _closure1_slot17;
            var17 = {};
            var17 = var31.bind(var5)(var8, var17);
            var16['body'] = var17;
            return var16;
case 202:
            if(!(var24 != var37)) { _fun0001_ip = 258; continue _fun0001 }
case 259:
            var31 = _closure1_slot17;
            var17 = _closure1_slot1;
            var38 = _closure1_slot3;
            var16 = 41;
            var16 = var38[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['application'] = var37;
            var16['onSelect'] = var36;
            var14 = var31.bind(var5)(var17, var16);
            var18 = undefined;
            var4 = false;
            var23 = false;
            var15 = false;
            var1 = false;
            _fun0001_ip = 206; continue _fun0001;
case 258:
            var16 = {};
            var31 = _closure1_slot17;
            var17 = {};
            var17 = var31.bind(var5)(var8, var17);
            var16['body'] = var17;
            return var16;
case 200:
            var31 = _closure1_slot17;
            var17 = _closure1_slot1;
            var36 = _closure1_slot3;
            var16 = 40;
            var16 = var36[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['clientId'] = var35;
            var16['platformType'] = var34;
            var16['platformName'] = var33;
            var14 = var31.bind(var5)(var17, var16);
            var4 = true;
            var18 = undefined;
            var23 = false;
            var15 = false;
            var1 = false;
case 206:
            var13 = undefined;
            if(!var15) { _fun0001_ip = 260; continue _fun0001 }
case 261:
            var15 = _closure1_slot14;
            var15 = var15.AUTHORIZE_BOT_PERMISSIONS;
            var13 = undefined;
            if(!(var18 !== var15)) { _fun0001_ip = 260; continue _fun0001 }
case 262:
            var15 = var24 != var19;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 260; continue _fun0001 }
case 263:
            var15 = var24 == var19;
            var31 = undefined;
            if(var15) { _fun0001_ip = 264; continue _fun0001 }
case 265:
            var15 = var19.application;
            var31 = var15.approximate_guild_count;
case 264:
            if(!(var24 == var31)) { _fun0001_ip = 266; continue _fun0001 }
case 267:
            var16 = var24 == var19;
            var15 = undefined;
            if(var16) { _fun0001_ip = 268; continue _fun0001 }
case 269:
            var16 = var19.bot;
            var17 = var24 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 268; continue _fun0001 }
case 270:
            var15 = var16.approximate_guild_count;
case 268:
            var31 = var15;
case 266:
            var17 = _closure1_slot17;
            var16 = _closure1_slot1;
            var33 = _closure1_slot3;
            var15 = 50;
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
            if(!var33) { _fun0001_ip = 271; continue _fun0001 }
case 272:
            var30 = var32;
case 271:
            var15['redirectUri'] = var30;
            var30 = null;
            if(!(var5 !== var31)) { _fun0001_ip = 273; continue _fun0001 }
case 274:
            var30 = var31;
case 273:
            var15['approximateGuildCount'] = var30;
            var15['isEmbeddedFlow'] = var28;
            var13 = var17.bind(var5)(var16, var15);
case 260:
            if(!var1) { _fun0001_ip = 275; continue _fun0001 }
case 276:
            var1 = var24 != var19;
case 275:
            if(!var1) { _fun0001_ip = 277; continue _fun0001 }
case 278:
            var1 = var24 != var27;
case 277:
            var15 = undefined;
            if(!var1) { _fun0001_ip = 279; continue _fun0001 }
case 280:
            var17 = _closure1_slot17;
            var16 = _closure1_slot1;
            var28 = _closure1_slot3;
            var1 = 51;
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
case 279:
            var1 = {};
            var1['header'] = var15;
            var1['body'] = var14;
            var16 = _closure1_slot17;
            var15 = _closure1_slot18;
            var14 = {};
            var17 = _closure1_slot14;
            var19 = var17.SELECT_INSTALL_TYPE;
            var17 = null;
            if(!(var20 !== var19)) { _fun0001_ip = 281; continue _fun0001 }
case 282:
            var19 = _closure1_slot14;
            var19 = var19.CONNECT_ACCOUNT;
            var17 = null;
            if(!(var20 !== var19)) { _fun0001_ip = 281; continue _fun0001 }
case 283:
            var20 = _closure1_slot17;
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var19 = 36;
            var19 = var27[var19];
            var19 = var26.bind(var5)(var19);
            var19 = var19.Button;
            if(!(var24 == var18)) { _fun0001_ip = 284; continue _fun0001 }
case 285:
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
            if(var23) { _fun0001_ip = 286; continue _fun0001 }
case 287:
            var24 = var27.y+/PE9;
            var24 = var28.bind(var31)(var24);
            _fun0001_ip = 288; continue _fun0001;
case 286:
            if(var10) { _fun0001_ip = 289; continue _fun0001 }
case 290:
            var26 = var27.N22i9F;
            var26 = var28.bind(var31)(var26);
            _fun0001_ip = 291; continue _fun0001;
case 289:
            var27 = var27.BwwiSM;
            var26 = var28.bind(var31)(var27);
case 291:
            var24 = var26;
case 288:
            var18['text'] = var24;
            var24 = function onPress() {
                var3 = _closure2_slot55;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18['onPress'] = var24;
            var24 = undefined;
            if(var10) { _fun0001_ip = 292; continue _fun0001 }
case 293:
            var28 = _closure1_slot17;
            var32 = _closure1_slot1;
            var33 = _closure1_slot3;
            var26 = var33[var25];
            var26 = var32.bind(var5)(var26);
            var27 = var26.View;
            var26 = {};
            var26['style'] = var29;
            var31 = 52;
            var31 = var33[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var33 = _closure1_slot8;
            var35 = var33.convert;
            var34 = var35.fromCodePoint;
            var33 = _closure1_slot13;
            var33 = var34.bind(var35)(var33);
            var31['name'] = var33;
            var31 = var28.bind(var5)(var32, var31);
            var26['children'] = var31;
            var24 = var28.bind(var5)(var27, var26);
case 292:
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
            _fun0001_ip = 294; continue _fun0001;
case 284:
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
            if(var23) { _fun0001_ip = 295; continue _fun0001 }
case 296:
            var24 = var27["3PatSz"];
            var24 = var30.bind(var31)(var24);
            _fun0001_ip = 297; continue _fun0001;
case 295:
            if(var10) { _fun0001_ip = 298; continue _fun0001 }
case 299:
            var26 = var27.N22i9F;
            var26 = var30.bind(var31)(var26);
            _fun0001_ip = 300; continue _fun0001;
case 298:
            var27 = var27.BwwiSM;
            var26 = var30.bind(var31)(var27);
case 300:
            var24 = var26;
case 297:
            var21['text'] = var24;
            var24 = undefined;
            if(var10) { _fun0001_ip = 301; continue _fun0001 }
case 302:
            var24 = undefined;
            if(!var23) { _fun0001_ip = 301; continue _fun0001 }
case 303:
            var27 = _closure1_slot17;
            var30 = _closure1_slot1;
            var31 = _closure1_slot3;
            var25 = var31[var25];
            var25 = var30.bind(var5)(var25);
            var26 = var25.View;
            var25 = {};
            var25['style'] = var29;
            var29 = 52;
            var29 = var31[var29];
            var30 = var30.bind(var5)(var29);
            var29 = {};
            var31 = _closure1_slot8;
            var33 = var31.convert;
            var32 = var33.fromCodePoint;
            var31 = _closure1_slot13;
            var31 = var32.bind(var33)(var31);
            var29['name'] = var31;
            var29 = var27.bind(var5)(var30, var29);
            var25['children'] = var29;
            var24 = var27.bind(var5)(var26, var25);
case 301:
            var21['icon'] = var24;
            var24 = 'end';
            var21['iconPosition'] = var24;
            var24 = function onPress() {
                var3 = _closure2_slot21;
                var2 = _closure2_slot62;
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
case 294:
            var17 = var20.bind(var5)(var19, var18);
case 281:
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
case 198:
            var1 = {};
            var7 = _closure1_slot17;
            var4 = {};
            var4 = var7.bind(var5)(var8, var4);
            var1['body'] = var4;
            return var1;
case 191:
            var1 = {};
            var4 = _closure1_slot17;
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
                var2 = _closure2_slot61;
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