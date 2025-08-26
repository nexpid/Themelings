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
    var7 = var4.DiscordConnectDeeplinks;
    var _closure1_slot17 = var7;
    var7 = var4.Endpoints;
    var _closure1_slot18 = var7;
    var4 = var4.WebBrowserType;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var7 = var4.Fragment;
    var _closure1_slot21 = var7;
    var4 = var4.jsxs;
    var _closure1_slot22 = var4;
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
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/useOAuth2AuthorizeForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOAuth2AuthorizeForm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.clientId;
            var _closure2_slot0 = var15;
            var44 = var2.responseType;
            var _closure2_slot1 = var44;
            var41 = var2.redirectUri;
            var _closure2_slot2 = var41;
            var39 = var2.codeChallenge;
            var _closure2_slot3 = var39;
            var38 = var2.codeChallengeMethod;
            var _closure2_slot4 = var38;
            var22 = var2.state;
            var _closure2_slot5 = var22;
            var49 = var2.nonce;
            var _closure2_slot6 = var49;
            var32 = var2.prompt;
            var _closure2_slot7 = var32;
            var16 = var2.scopes;
            var _closure2_slot8 = var16;
            var3 = var2.permissions;
            var _closure2_slot9 = var3;
            var24 = var2.guildId;
            var18 = var2.channelId;
            var14 = var2.integrationType;
            var _closure2_slot10 = var14;
            var59 = var2.disableGuildSelect;
            var5 = undefined;
            if(!(var59 === var5)) { _fun0001_ip = 138; continue _fun0001 }
 136:
            var59 = false;
 138:
            var45 = var2.isTrustedName;
            if(!(var45 === var5)) { _fun0001_ip = 150; continue _fun0001 }
 148:
            var45 = false;
 150:
            var28 = var2.isEmbeddedFlow;
            if(!(var28 === var5)) { _fun0001_ip = 162; continue _fun0001 }
 160:
            var28 = false;
 162:
            var4 = var2.withBackPressHandler;
            if(!(var4 === var5)) { _fun0001_ip = 174; continue _fun0001 }
 172:
            var4 = true;
 174:
            var48 = var2.callback;
            var _closure2_slot11 = var48;
            var54 = var2.callbackWithoutPost;
            var _closure2_slot12 = var54;
            var1 = var2.dismissOAuthModal;
            var _closure2_slot13 = var1;
            var60 = var2.disclosures;
            var _closure2_slot14 = var60;
            var17 = var2.wasDeepLink;
            if(!(var17 === var5)) { _fun0001_ip = 226; continue _fun0001 }
 224:
            var17 = false;
 226:
            var _closure2_slot15 = var17;
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
            var7 = _closure1_slot23;
            var55 = var7.bind(var5)();
            _closure2_slot16 = var55;
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
            var30 = var8.bind(var9)(var7);
            _closure2_slot17 = var30;
            var11 = _closure1_slot6;
            var7 = var11.useState;
            var23 = null;
            var7 = var7.bind(var11)(var23);
            var10 = _closure1_slot5;
            var12 = 2;
            var7 = var10.bind(var5)(var7, var12);
            var56 = 0;
            var19 = var7[var56];
            _closure2_slot18 = var19;
            var8 = 1;
            var7 = var7[var8];
            _closure2_slot19 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var23);
            var7 = var10.bind(var5)(var7, var12);
            var20 = var7[var56];
            _closure2_slot20 = var20;
            var7 = var7[var8];
            _closure2_slot21 = var7;
            var7 = var11.useState;
            var7 = var7.bind(var11)(var23);
            var7 = var10.bind(var5)(var7, var12);
            var9 = var7[var56];
            _closure2_slot22 = var9;
            var7 = var7[var8];
            _closure2_slot23 = var7;
            var7 = var11.useState;
            var13 = false;
            var7 = var7.bind(var11)(var13);
            var7 = var10.bind(var5)(var7, var12);
            var21 = var7[var56];
            var7 = var7[var8];
            _closure2_slot24 = var7;
            var7 = var23 == var19;
            var34 = undefined;
            if(var7) { _fun0001_ip = 637; continue _fun0001 }
 631:
            var34 = var19.guilds;
 637:
            _closure2_slot25 = var34;
            var11 = _closure1_slot6;
            var10 = var11.useState;
            var25 = var23 != var24;
            var7 = null;
            if(!var25) { _fun0001_ip = 662; continue _fun0001 }
 659:
            var7 = var24;
 662:
            var10 = var10.bind(var11)(var7);
            var7 = _closure1_slot5;
            var7 = var7.bind(var5)(var10, var12);
            var51 = var7[var56];
            _closure2_slot26 = var51;
            var58 = var7[var8];
            _closure2_slot27 = var58;
            var11 = _closure1_slot6;
            var10 = var11.useState;
            var24 = var23 != var18;
            var7 = null;
            if(!var24) { _fun0001_ip = 714; continue _fun0001 }
 711:
            var7 = var18;
 714:
            var7 = var10.bind(var11)(var7);
            var10 = _closure1_slot5;
            var7 = var10.bind(var5)(var7, var12);
            var35 = var7[var56];
            _closure2_slot28 = var35;
            var50 = var7[var8];
            _closure2_slot29 = var50;
            var11 = _closure1_slot6;
            var18 = var11.useState;
            var24 = _closure1_slot2;
            var7 = _closure1_slot3;
            var42 = 13;
            var7 = var7[var42];
            var7 = var24.bind(var5)(var7);
            var7 = var7.NONE;
            var7 = var18.bind(var11)(var7);
            var7 = var10.bind(var5)(var7, var12);
            var43 = var7[var56];
            _closure2_slot30 = var43;
            var7 = var7[var8];
            _closure2_slot31 = var7;
            var10 = var11.useState;
            var18 = var30.defaultOnMobile;
            var7 = var23 != var18;
            if(!var7) { _fun0001_ip = 828; continue _fun0001 }
 825:
            var7 = var18;
 828:
            var7 = var10.bind(var11)(var7);
            var10 = _closure1_slot5;
            var7 = var10.bind(var5)(var7, var12);
            var53 = var7[var56];
            _closure2_slot32 = var53;
            var52 = var7[var8];
            _closure2_slot33 = var52;
            var33 = _closure1_slot0;
            var31 = _closure1_slot3;
            var11 = 14;
            var7 = var31[var11];
            var25 = var33.bind(var5)(var7);
            var24 = var25.useStateFromStores;
            var7 = _closure1_slot12;
            var18 = new Array(1);
            var18[0] = var7;
            var7 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var26 = var24.bind(var25)(var18, var7);
            var29 = _closure1_slot6;
            var24 = var29.useMemo;
            var18 = new Array(2);
            var18[0] = var34;
            var18[1] = var51;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot25;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 39; continue _fun0002 }
 18:
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
 39:
                    return var1;
                }
            };
            var36 = var24.bind(var29)(var7, var18);
            _closure2_slot34 = var36;
            var7 = var29.useState;
            var7 = var7.bind(var29)(var23);
            var7 = var10.bind(var5)(var7, var12);
            var47 = var7[var56];
            _closure2_slot35 = var47;
            var7 = var7[var8];
            _closure2_slot36 = var7;
            var7 = var29.useState;
            var7 = var7.bind(var29)(var13);
            var7 = var10.bind(var5)(var7, var12);
            var10 = var7[var56];
            var7 = var7[var8];
            var11 = var31[var11];
            var25 = var33.bind(var5)(var11);
            var24 = var25.useStateFromStores;
            var11 = _closure1_slot10;
            var18 = new Array(1);
            var18[0] = var11;
            var11 = function() {
                var1 = _closure1_slot10;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var37 = var24.bind(var25)(var18, var11);
            _closure2_slot37 = var37;
            var24 = 15;
            var11 = var31[var24];
            var25 = var33.bind(var5)(var11);
            var18 = var25.useAnimatedStyle;
            var11 = function ee() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot37;
                    if(var1) { _fun0003_ip = 280; continue _fun0003 }
 13:
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
                    _fun0003_ip = 282; continue _fun0003;
 280:
                    var1 = {};
 282:
                    return var1;
                }
            };
            var27 = {};
            var27['shouldReduceMotion'] = var37;
            var37 = var31[var24];
            var37 = var33.bind(var5)(var37);
            var37 = var37.withSequence;
            var27['withSequence'] = var37;
            var37 = 16;
            var37 = var31[var37];
            var37 = var33.bind(var5)(var37);
            var37 = var37.withTiming;
            var27['withTiming'] = var37;
            var37 = var31[var24];
            var37 = var33.bind(var5)(var37);
            var37 = var37.Easing;
            var27['Easing'] = var37;
            var31 = var31[var24];
            var31 = var33.bind(var5)(var31);
            var31 = var31.withRepeat;
            var27['withRepeat'] = var31;
            var11['__closure'] = var27;
            var27 = 1476082137097.0;
            var11['__workletHash'] = var27;
            var27 = _closure1_slot24;
            var11['__initData'] = var27;
            var27 = var18.bind(var25)(var11);
            var25 = var29.useMemo;
            var18 = var23 == var16;
            var11 = undefined;
            if(var18) { _fun0001_ip = 1207; continue _fun0001 }
 1202:
            var11 = var16.length;
 1207:
            var18 = new Array(3);
            var18[0] = var11;
            var18[1] = var41;
            var18[2] = var14;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var1 = var3 == var1;
                    if(!var1) { _fun0004_ip = 56; continue _fun0004 }
 16:
                    var4 = _closure2_slot8;
                    var4 = var3 == var4;
                    var6 = undefined;
                    if(var4) { _fun0004_ip = 38; continue _fun0004 }
 29:
                    var4 = _closure2_slot8;
                    var6 = var4.length;
 38:
                    var7 = var3 != var6;
                    var5 = 0;
                    var4 = 0;
                    if(!var7) { _fun0004_ip = 52; continue _fun0004 }
 49:
                    var4 = var6;
 52:
                    var1 = var5 === var4;
 56:
                    if(!var1) { _fun0004_ip = 67; continue _fun0004 }
 59:
                    var2 = _closure2_slot2;
                    var1 = var3 == var2;
 67:
                    return var1;
                }
            };
            var18 = var25.bind(var29)(var11, var18);
            _closure2_slot38 = var18;
            var31 = _closure1_slot6;
            var11 = var31.useState;
            var25 = var11.bind(var31)(var23);
            var11 = _closure1_slot5;
            var11 = var11.bind(var5)(var25, var12);
            var33 = var11[var56];
            _closure2_slot39 = var33;
            var11 = var11[var8];
            _closure2_slot40 = var11;
            var29 = var31.useEffect;
            var25 = new Array(2);
            var25[0] = var15;
            var25[1] = var18;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot38;
                    if(!var2) { _fun0005_ip = 67; continue _fun0005 }
 10:
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
                        var4 = _closure1_slot11;
                        var2 = var4.createFromServer;
                        var1 = arg1;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var29.bind(var31)(var11, var25);
            var29 = var31.useMemo;
            var25 = var23 == var33;
            var11 = undefined;
            if(var25) { _fun0001_ip = 1326; continue _fun0001 }
 1320:
            var11 = var33.integrationTypesConfig;
 1326:
            var25 = new Array(2);
            var25[0] = var11;
            var25[1] = var47;
            var11 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot35;
                    var4 = null;
                    var2 = var4 == var1;
                    var1 = null;
                    if(var2) { _fun0006_ip = 76; continue _fun0006 }
 18:
                    var2 = _closure2_slot39;
                    var6 = var4 == var2;
                    var2 = undefined;
                    if(var6) { _fun0006_ip = 73; continue _fun0006 }
 31:
                    var6 = _closure2_slot39;
                    var6 = var6.integrationTypesConfig;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0006_ip = 73; continue _fun0006 }
 50:
                    var3 = _closure2_slot35;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 73; continue _fun0006 }
 67:
                    var2 = var3.oauth2InstallParams;
 73:
                    var1 = var2;
 76:
                    return var1;
                }
            };
            var11 = var29.bind(var31)(var11, var25);
            _closure2_slot41 = var11;
            var31 = _closure1_slot6;
            var29 = var31.useMemo;
            var25 = var23 == var11;
            var37 = undefined;
            if(var25) { _fun0001_ip = 1377; continue _fun0001 }
 1371:
            var37 = var11.scopes;
 1377:
            var25 = new Array(3);
            var25[0] = var37;
            var25[1] = var16;
            var25[2] = var18;
            var16 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot38;
                    if(var2) { _fun0007_ip = 18; continue _fun0007 }
 12:
                    var6 = _closure2_slot8;
                    _fun0007_ip = 46; continue _fun0007;
 18:
                    var4 = _closure2_slot41;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 43; continue _fun0007 }
 33:
                    var3 = _closure2_slot41;
                    var2 = var3.scopes;
 43:
                    var6 = var2;
 46:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filterScopes;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0007_ip = 87; continue _fun0007 }
 83:
                    var6 = new Array(0);
 87:
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
            var16 = var29.bind(var31)(var16, var25);
            var31 = var16.requestedScopes;
            _closure2_slot42 = var31;
            var25 = var16.accountScopes;
            var29 = _closure1_slot6;
            var16 = var29.useMemo;
            var40 = var23 == var11;
            var37 = undefined;
            if(var40) { _fun0001_ip = 1444; continue _fun0001 }
 1438:
            var37 = var11.permissions;
 1444:
            var11 = new Array(3);
            var11[0] = var37;
            var11[1] = var3;
            var11[2] = var18;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot38;
                    if(var1) { _fun0008_ip = 16; continue _fun0008 }
 10:
                    var1 = _closure2_slot9;
                    _fun0008_ip = 87; continue _fun0008;
 16:
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
                    if(var7) { _fun0008_ip = 70; continue _fun0008 }
 60:
                    var6 = _closure2_slot41;
                    var5 = var6.permissions;
 70:
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0008_ip = 82; continue _fun0008 }
 79:
                    var2 = var5;
 82:
                    var1 = var3.bind(var4)(var2);
 87:
                    var2 = null;
                    if(!(var2 == var1)) { _fun0008_ip = 124; continue _fun0008 }
 93:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.NONE;
 124:
                    return var1;
                }
            };
            var40 = var16.bind(var29)(var3, var11);
            _closure2_slot43 = var40;
            var16 = _closure1_slot6;
            var3 = var16.useState;
            var3 = var3.bind(var16)(var13);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var12);
            var46 = var3[var56];
            _closure2_slot44 = var46;
            var3 = var3[var8];
            _closure2_slot45 = var3;
            var37 = var16.useEffect;
            var29 = new Array(1);
            var29[0] = var15;
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
            var3 = var37.bind(var16)(var3, var29);
            var3 = var16.useState;
            var3 = var3.bind(var16)(var23);
            var3 = var11.bind(var5)(var3, var12);
            var29 = var3[var56];
            var16 = var3[var8];
            var37 = var22;
            if(!var46) { _fun0001_ip = 1715; continue _fun0001 }
 1572:
            var11 = _closure1_slot0;
            var57 = _closure1_slot3;
            var3 = 22;
            var3 = var57[var3];
            var11 = var11.bind(var5)(var3);
            var3 = var11.getAPIBaseURL;
            var11 = var3.bind(var11)(var13);
            var3 = '/v6';
            var11 = var11 + var3;
            var3 = _closure1_slot18;
            var3 = var3.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK;
            var11 = var11 + var3;
            _closure2_slot2 = var11;
            var3 = var23 == var22;
            if(!var3) { _fun0001_ip = 1642; continue _fun0001 }
 1638:
            var3 = var23 == var29;
 1642:
            if(!var3) { _fun0001_ip = 1680; continue _fun0001 }
 1645:
            var57 = _closure1_slot0;
            var61 = _closure1_slot3;
            var3 = 23;
            var3 = var61[var3];
            var57 = var57.bind(var5)(var3);
            var3 = var57.v4;
            var3 = var3.bind(var57)();
            var3 = var16.bind(var5)(var3);
 1680:
            var3 = var22;
            if(!(var23 != var29)) { _fun0001_ip = 1709; continue _fun0001 }
 1687:
            var16 = var22;
            if(!(var23 == var22)) { _fun0001_ip = 1702; continue _fun0001 }
 1694:
            var22 = 'SA';
            var16 = var22 + var29;
 1702:
            _closure2_slot5 = var16;
            var3 = var16;
 1709:
            var37 = var3;
            var41 = var11;
 1715:
            var16 = _closure1_slot6;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot46 = var3;
            var11 = var16.useState;
            var3 = var60;
            if(!(var23 == var3)) { _fun0001_ip = 1749; continue _fun0001 }
 1745:
            var3 = new Array(0);
 1749:
            var3 = var11.bind(var16)(var3);
            var11 = _closure1_slot5;
            var3 = var11.bind(var5)(var3, var12);
            var29 = var3[var56];
            _closure2_slot47 = var29;
            var57 = var3[var8];
            _closure2_slot48 = var57;
            var16 = _closure1_slot6;
            var22 = var16.useState;
            var3 = var23 != var60;
            var3 = var22.bind(var16)(var3);
            var3 = var11.bind(var5)(var3, var12);
            var22 = var3[var56];
            _closure2_slot49 = var22;
            var3 = var3[var8];
            _closure2_slot50 = var3;
            var12 = var16.useEffect;
            var11 = new Array(4);
            var11[0] = var15;
            var11[1] = var60;
            var11[2] = var57;
            var11[3] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot46;
                    var1 = var1.current;
                    if(var1) { _fun0009_ip = 42; continue _fun0009 }
 15:
                    var1 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0010_ip = 302; continue _fun0010 }
 10:
                                    var2 = undefined;
                                    var6 = undefined;
                                    var5 = _closure2_slot46;
                                    var4 = true;
                                    var5['current'] = var4;
 29: // try_start_0 // try_start_1
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var4 = 24;
                                    var4 = var7[var4];
                                    var7 = var5.bind(var2)(var4);
                                    var5 = var7.getDisclosures;
                                    var4 = _closure2_slot0;
                                    var4 = var5.bind(var7)(var4);
                                    SaveGenerator(address=71);
 69:
                                    return var4;
 71:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(var5) { _fun0010_ip = 115; continue _fun0010 }
 77:
                                    var7 = var4.disclosures;
                                    var5 = var4.allAcked;
                                    var8 = _closure2_slot50;
                                    var5 = !var5;
                                    var5 = var8.bind(var2)(var5);
                                    var5 = _closure2_slot48;
                                    var5 = var5.bind(var2)(var7);
 110: // try_end0
                                    _fun0010_ip = 271; continue _fun0010;
 115: // try_end1
                                    var7 = _closure2_slot46;
                                    var5 = false;
                                    var7['current'] = var5;
                                    return var4;
 130: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    var8 = var4.body;
                                    var6 = var8;
                                    var5 = _closure2_slot23;
                                    var4 = global;
                                    var7 = var4.Error;
                                    var9 = var8.message;
                                    var8 = null;
                                    if(!(var8 == var9)) { _fun0010_ip = 238; continue _fun0010 }
 163:
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
                                    _fun0010_ip = 243; continue _fun0010;
 238:
                                    var4 = var6.message;
 243:
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {constructor: {value: var7}});
                                    var16 = var6;
                                    var15 = var4;
                                    var4 = new var16[var7](var15, var14);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    var4 = var5.bind(var2)(var4);
 271: // try_end2
                                    var5 = _closure2_slot46;
                                    var4 = false;
                                    var5['current'] = var4;
                                    return var2;
 286: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register=1);
                                    var4 = _closure2_slot46;
                                    var3 = false;
                                    var4['current'] = var3;
                                    throw var2;
 302:
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
                    if(!(var3 == var4)) { _fun0009_ip = 42; continue _fun0009 }
 38:
                    var1 = var1.bind(var2)();
 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var16)(var3, var11);
            var12 = var16.useCallback;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0011_ip = 1119; continue _fun0011 }
 13:
                            var3 = var2.isAuthorized;
                            var15 = var2.deeplinkUri;
                            var11 = var2.overrideSuccessCallback;
                            var17 = var2.canceled;
                            var5 = undefined;
                            var10 = undefined;
                            var14 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=49);
 47:
                            return var5;
 49:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0011_ip = 1116; continue _fun0011 }
 58:
                            var8 = _closure2_slot12;
                            var6 = null;
                            if(!(var6 == var8)) { _fun0011_ip = 1072; continue _fun0011 }
 74:
                            var8 = _closure2_slot35;
                            if(!(var6 == var8)) { _fun0011_ip = 130; continue _fun0011 }
 82:
                            var9 = _closure2_slot23;
                            var8 = global;
                            var13 = var8.Error;
                            var8 = var13.prototype;
                            var12 = Object.create(var8, {constructor: {value: var13}});
                            var24 = 'No integration type was selected.';
                            var25 = var12;
                            var8 = new var25[var13](var24, var23);
                            var8 = var8 instanceof Object ? var8 : var12;
                            var8 = var9.bind(var5)(var8);
                            _fun0011_ip = 1054; continue _fun0011;
 130: // try_start_0 // try_start_2
                            var9 = _closure2_slot24;
                            var8 = true;
                            var8 = var9.bind(var5)(var8);
                            var18 = _closure1_slot0;
                            var16 = _closure1_slot3;
                            var8 = 25;
                            var8 = var16[var8];
                            var12 = var18.bind(var5)(var8);
                            var9 = var12.authorize;
                            var8 = {};
                            var19 = var3;
                            var8['authorize'] = var19;
                            var19 = _closure2_slot0;
                            var8['clientId'] = var19;
                            var19 = _closure2_slot42;
                            var8['scopes'] = var19;
                            var19 = _closure2_slot1;
                            var8['responseType'] = var19;
                            var19 = _closure2_slot2;
                            var8['redirectUri'] = var19;
                            var19 = _closure2_slot3;
                            var8['codeChallenge'] = var19;
                            var19 = _closure2_slot4;
                            var8['codeChallengeMethod'] = var19;
                            var19 = _closure2_slot5;
                            var8['state'] = var19;
                            var19 = _closure2_slot6;
                            var8['nonce'] = var19;
                            var20 = _closure1_slot2;
                            var19 = 20;
                            var19 = var16[var19];
                            var22 = var20.bind(var5)(var19);
                            var21 = var22.remove;
                            var20 = _closure2_slot43;
                            var19 = _closure2_slot30;
                            var19 = var21.bind(var22)(var20, var19);
                            var8['permissions'] = var19;
                            var19 = _closure2_slot35;
                            var20 = 26;
                            var16 = var16[var20];
                            var16 = var18.bind(var5)(var16);
                            var16 = var16.ApplicationIntegrationType;
                            var18 = var16.GUILD_INSTALL;
                            var16 = undefined;
                            if(!(var19 === var18)) { _fun0011_ip = 343; continue _fun0011 }
 326:
                            var18 = _closure2_slot26;
                            var18 = var6 != var18;
                            var16 = undefined;
                            if(!var18) { _fun0011_ip = 343; continue _fun0011 }
 339:
                            var16 = _closure2_slot26;
 343:
                            var8['guildId'] = var16;
                            var19 = _closure2_slot35;
                            var18 = _closure1_slot0;
                            var16 = _closure1_slot3;
                            var16 = var16[var20];
                            var16 = var18.bind(var5)(var16);
                            var16 = var16.ApplicationIntegrationType;
                            var18 = var16.GUILD_INSTALL;
                            var16 = undefined;
                            if(!(var19 === var18)) { _fun0011_ip = 403; continue _fun0011 }
 386:
                            var18 = _closure2_slot28;
                            var18 = var6 != var18;
                            var16 = undefined;
                            if(!var18) { _fun0011_ip = 403; continue _fun0011 }
 399:
                            var16 = _closure2_slot28;
 403:
                            var8['channelId'] = var16;
                            var16 = _closure2_slot35;
                            var8['integrationType'] = var16;
                            var16 = {};
                            var18 = _closure2_slot32;
                            var16['allowMobilePush'] = var18;
                            var8['dmSettings'] = var16;
                            var8 = var9.bind(var12)(var8);
                            SaveGenerator(address=441);
 439:
                            return var8;
 441:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(var9) { _fun0011_ip = 882; continue _fun0011 }
 450:
                            var10 = var8;
                            var9 = var3;
                            if(!var9) { _fun0011_ip = 538; continue _fun0011 }
 459:
                            var12 = _closure1_slot1;
                            var16 = _closure1_slot3;
                            var9 = 27;
                            var9 = var16[var9];
                            var12 = var12.bind(var5)(var9);
                            var9 = var12.fetch;
                            var9 = var9.bind(var12)();
                            var12 = _closure1_slot0;
                            var9 = 24;
                            var9 = var16[var9];
                            var18 = var12.bind(var5)(var9);
                            var16 = var18.ackDisclosures;
                            var12 = _closure2_slot0;
                            var9 = _closure2_slot47;
                            var9 = var16.bind(var18)(var12, var9);
                            SaveGenerator(address=529);
 527:
                            return var9;
 529:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0011_ip = 868; continue _fun0011 }
 538:
                            var12 = var11;
                            if(!(var6 == var12)) { _fun0011_ip = 853; continue _fun0011 }
 548:
                            var12 = _closure2_slot13;
                            if(!(var6 != var12)) { _fun0011_ip = 564; continue _fun0011 }
 556:
                            var12 = _closure2_slot13;
                            var12 = var12.bind(var5)();
 564:
                            var12 = global;
                            var18 = var12.Promise;
                            var12 = var18.prototype;
                            var16 = Object.create(var12, {constructor: {value: var18}});
                            var24 = function(arg1) {
                                var1 = global;
                                var4 = var1.setTimeout;
                                var3 = undefined;
                                var2 = arg1;
                                var1 = 100;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            };
                            var25 = var16;
                            var12 = new var25[var18](var24, var23);
                            var12 = var12 instanceof Object ? var12 : var16;
                            SaveGenerator(address=603);
 601:
                            return var12;
 603:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=15);
                            if(var16) { _fun0011_ip = 839; continue _fun0011 }
 612:
                            var16 = var10;
                            var16 = var16.location;
                            var14 = var16;
                            if(!(var6 != var16)) { _fun0011_ip = 654; continue _fun0011 }
 627:
                            var16 = var15;
                            if(!(var6 != var16)) { _fun0011_ip = 654; continue _fun0011 }
 634:
                            var18 = var14;
                            var16 = var18.startsWith;
                            var15 = var16.bind(var18)(var15);
                            if(var15) { _fun0011_ip = 795; continue _fun0011 }
 654:
                            var16 = var17;
                            var15 = _closure2_slot11;
                            if(var16) { _fun0011_ip = 751; continue _fun0011 }
 664:
                            if(!(var6 != var15)) { _fun0011_ip = 863; continue _fun0011 }
 671:
                            var18 = _closure2_slot11;
                            var16 = {};
                            var23 = var10;
                            var24 = var16;
                            var19 = copyDataProperties(var24, var23);
                            var19 = _closure2_slot18;
                            var19 = var6 == var19;
                            var20 = undefined;
                            if(var19) { _fun0011_ip = 709; continue _fun0011 }
 700:
                            var19 = _closure2_slot18;
                            var20 = var19.application;
 709:
                            var19 = 'application';
                            var16[var19] = var20;
                            var20 = _closure2_slot34;
                            var19 = 'guild';
                            var16[var19] = var20;
                            var20 = _closure2_slot15;
                            var19 = 'wasDeepLink';
                            var16[var19] = var20;
                            var16 = var18.bind(var5)(var16);
                            _fun0011_ip = 863; continue _fun0011;
 751:
                            if(!(var6 != var15)) { _fun0011_ip = 863; continue _fun0011 }
 755:
                            var16 = _closure2_slot11;
                            var15 = {'canceled': null, 'guild': null, 'application': null};
                            var15['canceled'] = var17;
                            var17 = _closure2_slot15;
                            var15['wasDeepLink'] = var17;
                            var15 = var16.bind(var5)(var15);
                            _fun0011_ip = 863; continue _fun0011;
 795:
                            var16 = _closure1_slot1;
                            var17 = _closure1_slot3;
                            var15 = 28;
                            var15 = var17[var15];
                            var16 = var16.bind(var5)(var15);
                            var15 = var16.openURL;
                            var13 = _closure1_slot19;
                            var13 = var13.SAFARI;
                            var13 = var15.bind(var16)(var14, var13);
                            _fun0011_ip = 863; continue _fun0011;
 839: // try_end0 // try_end2
                            var14 = _closure2_slot24;
                            var13 = false;
                            var13 = var14.bind(var5)(var13);
                            return var12;
 853: // try_start_1 // try_start_3
                            var10 = var10.location;
                            var10 = var11.bind(var5)(var10);
 863: // try_end1
                            _fun0011_ip = 1043; continue _fun0011;
 868: // try_end3
                            var11 = _closure2_slot24;
                            var10 = false;
                            var10 = var11.bind(var5)(var10);
                            return var9;
 882:
                            var10 = _closure2_slot24;
                            var9 = false;
                            var9 = var10.bind(var5)(var9);
                            return var8;
 896: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=7);
                            var8 = var8.body;
                            var7 = var8;
                            var9 = var6 == var8;
                            var8 = undefined;
                            if(var9) { _fun0011_ip = 923; continue _fun0011 }
 915:
                            var9 = var7;
                            var8 = var9.message;
 923:
                            if(!(var6 != var8)) { _fun0011_ip = 943; continue _fun0011 }
 927:
                            var8 = var7;
                            var9 = var8.message;
                            var8 = '';
                            if(!(var8 === var9)) { _fun0011_ip = 979; continue _fun0011 }
 943:
                            var9 = _closure2_slot23;
                            var8 = var7;
                            var8 = var9.bind(var5)(var8);
                            var9 = _closure2_slot21;
                            var8 = _closure1_slot14;
                            var8 = var8.AUTHORIZE_SCOPES;
                            var8 = var9.bind(var5)(var8);
                            _fun0011_ip = 1043; continue _fun0011;
 979:
                            var8 = _closure2_slot23;
                            var9 = global;
                            var10 = var9.Error;
                            var24 = var7.message;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {constructor: {value: var10}});
                            var25 = var9;
                            var7 = new var25[var10](var24, var23);
                            var7 = var7 instanceof Object ? var7 : var9;
                            var7 = var8.bind(var5)(var7);
                            var8 = _closure2_slot21;
                            var7 = _closure1_slot14;
                            var7 = var7.AUTHORIZE_SCOPES;
                            var7 = var8.bind(var5)(var7);
 1043: // try_end4
                            var8 = _closure2_slot24;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
 1054:
                            return var5;
 1057: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=6);
                            var9 = _closure2_slot24;
                            var8 = false;
                            var8 = var9.bind(var5)(var8);
                            throw var7;
 1072:
                            var8 = _closure2_slot24;
                            var7 = true;
                            var7 = var8.bind(var5)(var7);
                            var7 = _closure2_slot12;
                            var3 = var7.bind(var5)(var3);
                            var3 = _closure2_slot13;
                            var3 = var6 == var3;
                            if(var3) { _fun0011_ip = 1111; continue _fun0011 }
 1103:
                            var4 = _closure2_slot13;
                            var3 = var4.bind(var5)();
 1111:
                            var3 = undefined;
                            return var3;
 1116:
                            return var2;
 1119:
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
            var3[0] = var47;
            var3[1] = var54;
            var3[2] = var15;
            var3[3] = var31;
            var3[4] = var44;
            var3[5] = var41;
            var3[6] = var39;
            var3[7] = var38;
            var3[8] = var37;
            var3[9] = var49;
            var3[10] = var40;
            var3[11] = var43;
            var3[12] = var51;
            var3[13] = var35;
            var3[14] = var29;
            var3[15] = var1;
            var3[16] = var48;
            var3[17] = var17;
            var48 = var23 == var19;
            var17 = undefined;
            if(var48) { _fun0001_ip = 1960; continue _fun0001 }
 1955:
            var17 = var19.application;
 1960:
            var3[18] = var17;
            var3[19] = var36;
            var3[20] = var53;
            var11 = var12.bind(var16)(var11, var3);
            _closure2_slot52 = var11;
            var16 = _closure1_slot6;
            var17 = var16.useCallback;
            var12 = new Array(1);
            var12[0] = var11;
            var3 = function(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot52;
                    var2 = {};
                    var5 = _closure3_slot0;
                    var2['isAuthorized'] = var5;
                    var4 = _closure3_slot1;
                    var2['deeplinkUri'] = var4;
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
            var3 = var17.bind(var16)(var3, var12);
            _closure2_slot53 = var3;
            var17 = var16.useCallback;
            var12 = new Array(8);
            var12[0] = var15;
            var12[1] = var46;
            var12[2] = var44;
            var12[3] = var11;
            var12[4] = var3;
            var12[5] = var37;
            var12[6] = var1;
            var12[7] = var31;
            var3 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var5 = arg1;
                    var2 = arg2;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var2;
                    var4 = _closure2_slot44;
                    if(var4) { _fun0012_ip = 54; continue _fun0012 }
 26:
                    var4 = _closure2_slot52;
                    var3 = {};
                    var3['isAuthorized'] = var5;
                    var3['deeplinkUri'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0012_ip = 180; continue _fun0012;
 54:
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
 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var4 = var3().value;
                            var2 = var1;
                            var6 = undefined;
                            var2 = var2 === var6;
                            var10 = undefined;
                            if(var2) { _fun0013_ip = 27; continue _fun0013 }
 24:
                            var10 = var4;
 27:
                            var4 = undefined;
                            if(var2) { _fun0013_ip = 57; continue _fun0013 }
 32:
                            var5 = var3().value;
                            var3 = var1;
                            var3 = var3 === var6;
                            var4 = undefined;
                            var2 = var3;
                            if(var3) { _fun0013_ip = 57; continue _fun0013 }
 51:
                            var4 = var5;
                            var2 = var3;
 57:
                            if(var2) { _fun0013_ip = 63; continue _fun0013 }
 60:
                            var1.return();
 63:
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
 0:
                            var3 = arg1;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var5 = var3().value;
                            var2 = var1;
                            var7 = undefined;
                            var2 = var2 === var7;
                            var4 = undefined;
                            if(var2) { _fun0014_ip = 27; continue _fun0014 }
 24:
                            var4 = var5;
 27:
                            if(var2) { _fun0014_ip = 41; continue _fun0014 }
 30:
                            var3 = var3().value;
                            var3 = var1;
                            var2 = var3 === var7;
 41:
                            if(var2) { _fun0014_ip = 47; continue _fun0014 }
 44:
                            var1.return();
 47:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.all;
                            var1 = new Array(2);
                            var1[0] = var4;
                            var6 = _closure2_slot53;
                            var5 = _closure3_slot0;
                            var4 = _closure3_slot1;
                            var4 = var6.bind(var7)(var5, var4);
                            var1[1] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var6 = arg1;
                            var1 = var6[Symbol.iterator];
                            var6 = var1().next;
                            var4 = var6().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var5 = undefined;
                            if(var2) { _fun0015_ip = 27; continue _fun0015 }
 24:
                            var5 = var4;
 27:
                            var4 = undefined;
                            if(var2) { _fun0015_ip = 57; continue _fun0015 }
 32:
                            var7 = var6().value;
                            var6 = var1;
                            var6 = var6 === var3;
                            var4 = undefined;
                            var2 = var6;
                            if(var6) { _fun0015_ip = 57; continue _fun0015 }
 51:
                            var4 = var7;
                            var2 = var6;
 57:
                            if(var2) { _fun0015_ip = 63; continue _fun0015 }
 60:
                            var1.return();
 63:
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
 0:
                            var3 = _closure2_slot13;
                            var1 = null;
                            var4 = var1 == var3;
                            var3 = undefined;
                            var1 = undefined;
                            if(var4) { _fun0016_ip = 28; continue _fun0016 }
 20:
                            var2 = _closure2_slot13;
                            var1 = var2.bind(var3)();
 28:
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
 180:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var17.bind(var16)(var3, var12);
            _closure2_slot54 = var3;
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            _closure2_slot55 = var3;
            var17 = var16.useCallback;
            var12 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 571; continue _fun0017 }
 10:
                        var2 = undefined;
                        var10 = undefined;
                        var6 = undefined;
                        var3 = _closure2_slot55;
                        var3 = var3.current;
                        if(var3) { _fun0017_ip = 568; continue _fun0017 }
 34:
                        var3 = _closure2_slot55;
                        var9 = true;
                        var3['current'] = var9;
 46: // try_start_0 // try_start_1
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
                        var12 = _closure2_slot35;
                        var11 = null;
                        var12 = var11 != var12;
                        var11 = undefined;
                        if(!var12) { _fun0017_ip = 158; continue _fun0017 }
 154:
                        var11 = _closure2_slot35;
 158:
                        var3['integrationType'] = var11;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address=172);
 170:
                        return var3;
 172:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0017_ip = 382; continue _fun0017 }
 181:
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
                        if(!var11) { _fun0017_ip = 271; continue _fun0017 }
 262:
                        var11 = var10;
                        var8 = var11.authorized;
 271:
                        var7 = var8;
                        if(!var8) { _fun0017_ip = 284; continue _fun0017 }
 277:
                        var8 = _closure2_slot49;
                        var7 = !var8;
 284:
                        if(!var7) { _fun0017_ip = 303; continue _fun0017 }
 287:
                        var8 = _closure2_slot52;
                        var7 = {};
                        var7['isAuthorized'] = var9;
                        var7 = var8.bind(var2)(var7);
 303:
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
 377: // try_end0
                        _fun0017_ip = 538; continue _fun0017;
 382: // try_end1
                        var7 = _closure2_slot55;
                        var5 = false;
                        var7['current'] = var5;
                        return var3;
 397: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=2);
                        var8 = var3.body;
                        var6 = var8;
                        var5 = _closure2_slot23;
                        var3 = global;
                        var7 = var3.Error;
                        var9 = var8.message;
                        var8 = null;
                        if(!(var8 == var9)) { _fun0017_ip = 505; continue _fun0017 }
 430:
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
                        _fun0017_ip = 510; continue _fun0017;
 505:
                        var3 = var6.message;
 510:
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var18 = var6;
                        var17 = var3;
                        var3 = new var18[var7](var17, var16);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var3 = var5.bind(var2)(var3);
 538: // try_end2
                        var5 = _closure2_slot55;
                        var3 = false;
                        var5['current'] = var3;
                        _fun0017_ip = 568; continue _fun0017;
 552: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot55;
                        var4 = false;
                        var5['current'] = var4;
                        throw var3;
 568:
                        return var2;
 571:
                        return var1;
                    }
                };
                return var1;
            };
            var12 = var12.bind(var5)(var3);
            var3 = new Array(12);
            var3[0] = var15;
            var3[1] = var31;
            var3[2] = var44;
            var3[3] = var41;
            var3[4] = var39;
            var3[5] = var38;
            var3[6] = var37;
            var3[7] = var47;
            var3[8] = var32;
            var3[9] = var11;
            var3[10] = var22;
            var22 = var30.defaultOnMobile;
            var3[11] = var22;
            var12 = var17.bind(var16)(var12, var3);
            _closure2_slot56 = var12;
            var22 = var16.useMemo;
            var17 = new Array(2);
            var17[0] = var33;
            var17[1] = var18;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = _closure2_slot39;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0018_ip = 22; continue _fun0018 }
 15:
                    var1 = _closure2_slot38;
                    if(var1) { _fun0018_ip = 28; continue _fun0018 }
 22:
                    var1 = new Array(0);
                    _fun0018_ip = 93; continue _fun0018;
 28:
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var3 = _closure2_slot39;
                    var3 = var3.integrationTypesConfig;
                    if(!(var6 == var3)) { _fun0018_ip = 58; continue _fun0018 }
 56:
                    var3 = {};
 58:
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                            var4 = arg1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var1 = var4().value;
                            var1 = var2;
                            var6 = undefined;
                            var3 = var1 === var6;
                            var1 = undefined;
                            if(var3) { _fun0019_ip = 49; continue _fun0019 }
 24:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var6;
                            var1 = undefined;
                            var3 = var4;
                            if(var4) { _fun0019_ip = 49; continue _fun0019 }
 43:
                            var1 = var5;
                            var3 = var4;
 49:
                            if(var3) { _fun0019_ip = 55; continue _fun0019 }
 52:
                            var2.return();
 55:
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
 0:
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var6 = var5().value;
                            var2 = var1;
                            var3 = undefined;
                            var4 = var2 === var3;
                            var2 = undefined;
                            if(var4) { _fun0020_ip = 27; continue _fun0020 }
 24:
                            var2 = var6;
 27:
                            if(var4) { _fun0020_ip = 41; continue _fun0020 }
 30:
                            var5 = var5().value;
                            var5 = var1;
                            var4 = var5 === var3;
 41:
                            if(var4) { _fun0020_ip = 47; continue _fun0020 }
 44:
                            var1.return();
 47:
                            var1 = global;
                            var1 = var1.Number;
                            var1 = var1.bind(var3)(var2);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
 93:
                    return var1;
                }
            };
            var3 = var22.bind(var16)(var3, var17);
            _closure2_slot57 = var3;
            var17 = var16.useRef;
            var17 = var17.bind(var16)(var23);
            _closure2_slot58 = var17;
            var22 = var16.useEffect;
            var17 = new Array(6);
            var17[0] = var15;
            var17[1] = var47;
            var17[2] = var40;
            var17[3] = var31;
            var17[4] = var20;
            var15 = var30.defaultOnMobile;
            var17[5] = var15;
            var15 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var2 = _closure2_slot20;
                    var1 = _closure2_slot58;
                    var1 = var1.current;
                    if(!(var2 !== var1)) { _fun0021_ip = 155; continue _fun0021 }
 23:
                    var2 = _closure2_slot58;
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
                    var6 = _closure2_slot42;
                    var1['scopes'] = var6;
                    var7 = _closure2_slot43;
                    var6 = var7.toString;
                    var6 = var6.bind(var7)();
                    var1['permissions'] = var6;
                    var5 = _closure2_slot17;
                    var5 = var5.defaultOnMobile;
                    var1['mobile_push_notification_default_setting'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 155:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var22.bind(var16)(var15, var17);
            var17 = var16.useEffect;
            var15 = new Array(5);
            var15[0] = var3;
            var15[1] = var33;
            var15[2] = var18;
            var15[3] = var14;
            var15[4] = var20;
            var14 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var2 = _closure2_slot20;
                    var3 = null;
                    var2 = var3 != var2;
                    if(var2) { _fun0022_ip = 34; continue _fun0022 }
 16:
                    var4 = _closure2_slot38;
                    if(!var4) { _fun0022_ip = 31; continue _fun0022 }
 23:
                    var5 = _closure2_slot39;
                    var4 = var3 == var5;
 31:
                    var2 = var4;
 34:
                    if(var2) { _fun0022_ip = 255; continue _fun0022 }
 40:
                    var2 = _closure2_slot57;
                    var2 = var2.length;
                    var4 = 1;
                    if(!(!(var2 > var4))) { _fun0022_ip = 231; continue _fun0022 }
 59:
                    var2 = _closure2_slot57;
                    var2 = var2.length;
                    if(!(var4 !== var2)) { _fun0022_ip = 186; continue _fun0022 }
 72:
                    var2 = _closure2_slot10;
                    if(!(var3 == var2)) { _fun0022_ip = 147; continue _fun0022 }
 80:
                    var5 = _closure2_slot36;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 26;
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
                    _fun0022_ip = 255; continue _fun0022;
 147:
                    var3 = _closure2_slot36;
                    var2 = _closure2_slot10;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 255; continue _fun0022;
 186:
                    var3 = _closure2_slot36;
                    var4 = _closure2_slot57;
                    var2 = 0;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0022_ip = 255; continue _fun0022;
 231:
                    var3 = _closure2_slot21;
                    var1 = _closure1_slot14;
                    var2 = var1.SELECT_INSTALL_TYPE;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 255:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var17.bind(var16)(var14, var15);
            var15 = var16.useEffect;
            var14 = new Array(6);
            var14[0] = var12;
            var14[1] = var31;
            var14[2] = var40;
            var14[3] = var47;
            var14[4] = var19;
            var14[5] = var9;
            var12 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = _closure2_slot35;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0023_ip = 353; continue _fun0023 }
 16:
                    var2 = _closure2_slot18;
                    if(!(var5 == var2)) { _fun0023_ip = 353; continue _fun0023 }
 27:
                    var2 = _closure2_slot22;
                    if(!(var5 == var2)) { _fun0023_ip = 353; continue _fun0023 }
 38:
                    var6 = _closure2_slot35;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.ApplicationIntegrationType;
                    var4 = var4.USER_INSTALL;
                    if(!(var6 === var4)) { _fun0023_ip = 101; continue _fun0023 }
 83:
                    var4 = _closure2_slot27;
                    var4 = var4.bind(var3)(var5);
                    var4 = _closure2_slot29;
                    var4 = var4.bind(var3)(var5);
 101:
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
                    if(!(var5 !== var4)) { _fun0023_ip = 310; continue _fun0023 }
 140:
                    var4 = var7.length;
                    if(!(!(var4 > var5))) { _fun0023_ip = 245; continue _fun0023 }
 149:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 33;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.containsDisallowedPermission;
                    var2 = _closure2_slot43;
                    var2 = var4.bind(var6)(var2);
                    if(var2) { _fun0023_ip = 200; continue _fun0023 }
 187:
                    var2 = _closure2_slot56;
                    var2 = var2.bind(var3)();
                    _fun0023_ip = 353; continue _fun0023;
 200:
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
                    _fun0023_ip = 353; continue _fun0023;
 245:
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
                    _fun0023_ip = 353; continue _fun0023;
 310:
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
 353:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var15.bind(var16)(var12, var14);
            var12 = _closure1_slot14;
            var12 = var12.AUTHORIZE_SCOPES;
            if(!(var20 === var12)) { _fun0001_ip = 2374; continue _fun0001 }
 2365:
            var3 = var3.length;
            if(!(!(var3 > var8))) { _fun0001_ip = 2409; continue _fun0001 }
 2374:
            var3 = _closure1_slot14;
            var3 = var3.AUTHORIZE_BOT_PERMISSIONS;
            var12 = undefined;
            if(!(var20 === var3)) { _fun0001_ip = 2426; continue _fun0001 }
 2390:
            var3 = _closure1_slot14;
            var3 = var3.AUTHORIZE_SCOPES;
            _closure2_slot51 = var3;
            var12 = var3;
            _fun0001_ip = 2426; continue _fun0001;
 2409:
            var3 = _closure1_slot14;
            var3 = var3.SELECT_INSTALL_TYPE;
            _closure2_slot51 = var3;
            var12 = var3;
 2426:
            var14 = _closure1_slot6;
            var8 = var14.useCallback;
            var3 = var23 == var19;
            var15 = undefined;
            if(var3) { _fun0001_ip = 2455; continue _fun0001 }
 2444:
            var3 = var19.application;
            var15 = var3.deeplink_uri;
 2455:
            var3 = new Array(4);
            var3[0] = var15;
            var3[1] = var12;
            var3[2] = var1;
            var3[3] = var11;
            var1 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var2 = _closure2_slot51;
                    var5 = null;
                    if(!(var5 == var2)) { _fun0024_ip = 171; continue _fun0024 }
 16:
                    var6 = _closure2_slot52;
                    var2 = true;
                    var4 = undefined;
                    var3 = {'isAuthorized': false, 'canceled': true};
                    var3 = var6.bind(var4)(var3);
                    var3 = _closure2_slot18;
                    var3 = var5 == var3;
                    var11 = undefined;
                    if(var3) { _fun0024_ip = 71; continue _fun0024 }
 56:
                    var3 = _closure2_slot18;
                    var3 = var3.application;
                    var11 = var3.deeplink_uri;
 71:
                    if(!(var5 != var11)) { _fun0024_ip = 153; continue _fun0024 }
 75:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 28;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.openURL;
                    var6 = _closure1_slot17;
                    var10 = var6.AUTHORIZATION_CANCEL_FRAGMENT;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = '';
                    var6 = var9.bind(var6)(var11, var10);
                    var3 = _closure1_slot19;
                    var3 = var3.SAFARI;
                    var3 = var7.bind(var8)(var6, var3);
 153:
                    var3 = _closure2_slot13;
                    if(!(var5 != var3)) { _fun0024_ip = 169; continue _fun0024 }
 161:
                    var3 = _closure2_slot13;
                    var3 = var3.bind(var4)();
 169:
                    return var2;
 171:
                    var3 = _closure2_slot21;
                    var2 = _closure2_slot51;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = true;
                    return var1;
                }
            };
            var3 = var8.bind(var14)(var1, var3);
            _closure2_slot59 = var3;
            var8 = _closure1_slot1;
            var14 = _closure1_slot3;
            var1 = 34;
            var1 = var14[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.bind(var5)(var3, var4);
            var14 = _closure1_slot6;
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
            var32 = var8.bind(var14)(var4, var1);
            var8 = var14.useCallback;
            var4 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot31;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        var5 = arg1;
                        var1 = _closure3_slot0;
                        var6 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var3 = 20;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        if(var1) { _fun0025_ip = 55; continue _fun0025 }
 38:
                        var3 = var4.add;
                        var1 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var1);
                        _fun0025_ip = 71; continue _fun0025;
 55:
                        var3 = var4.remove;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var2);
 71:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var41 = var8.bind(var14)(var4, var1);
            var16 = global;
            var1 = var16.Error;
            var1 = var9 instanceof var1;
            if(var1) { _fun0001_ip = 5222; continue _fun0001 }
 2578:
            var8 = function Spinner() {
                var4 = _closure1_slot20;
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
            if(!(var23 !== var20)) { _fun0001_ip = 5202; continue _fun0001 }
 2590:
            var1 = _closure1_slot14;
            var1 = var1.SELECT_INSTALL_TYPE;
            if(!(var1 !== var20)) { _fun0001_ip = 4274; continue _fun0001 }
 2607:
            var1 = _closure1_slot14;
            var1 = var1.AUTHORIZE_SCOPES;
            if(!(var1 !== var20)) { _fun0001_ip = 2752; continue _fun0001 }
 2624:
            var1 = _closure1_slot14;
            var37 = var1.AUTHORIZE_BOT_PERMISSIONS;
            var14 = undefined;
            var18 = undefined;
            var4 = false;
            var22 = false;
            var15 = true;
            var1 = true;
            if(!(var37 === var20)) { _fun0001_ip = 4332; continue _fun0001 }
 2653:
            if(!(var23 != var19)) { _fun0001_ip = 2732; continue _fun0001 }
 2657:
            var39 = _closure1_slot20;
            var38 = _closure1_slot1;
            var44 = _closure1_slot3;
            var37 = 51;
            var37 = var44[var37];
            var38 = var38.bind(var5)(var37);
            var37 = {};
            var44 = var19.application;
            var37['application'] = var44;
            var37['permissions'] = var40;
            var37['deniedPermissions'] = var43;
            var37['onPermissionsChange'] = var41;
            var37['guild'] = var36;
            var14 = var39.bind(var5)(var38, var37);
            var18 = undefined;
            var4 = true;
            var22 = false;
            var15 = true;
            var1 = true;
            _fun0001_ip = 4332; continue _fun0001;
 2732:
            var17 = {};
            var38 = _closure1_slot20;
            var37 = {};
            var37 = var38.bind(var5)(var8, var37);
            var17['body'] = var37;
            return var17;
 2752:
            if(!(var23 != var19)) { _fun0001_ip = 4254; continue _fun0001 }
 2759:
            if(!(var23 != var26)) { _fun0001_ip = 4254; continue _fun0001 }
 2766:
            if(!(var23 != var47)) { _fun0001_ip = 4254; continue _fun0001 }
 2773:
            if(!(var23 != var9)) { _fun0001_ip = 2793; continue _fun0001 }
 2777:
            var16 = var16.Error;
            var16 = var9 instanceof var16;
            var57 = var9;
            if(!var16) { _fun0001_ip = 2795; continue _fun0001 }
 2793:
            var57 = {};
 2795:
            var16 = var23 == var34;
            var54 = undefined;
            if(var16) { _fun0001_ip = 2820; continue _fun0001 }
 2804:
            var17 = var34.sort;
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
            var54 = var17.bind(var34)(var16);
 2820:
            var17 = _closure1_slot0;
            var16 = _closure1_slot3;
            var38 = 26;
            var16 = var16[var38];
            var16 = var17.bind(var5)(var16);
            var16 = var16.ApplicationIntegrationType;
            var16 = var16.GUILD_INSTALL;
            var16 = var47 === var16;
            if(!var16) { _fun0001_ip = 2901; continue _fun0001 }
 2859:
            var34 = var31.includes;
            var37 = _closure1_slot0;
            var39 = _closure1_slot3;
            var17 = 40;
            var17 = var39[var17];
            var17 = var37.bind(var5)(var17);
            var17 = var17.OAuth2Scopes;
            var17 = var17.WEBHOOK_INCOMING;
            var16 = var34.bind(var31)(var17);
 2901:
            var17 = var16;
            if(var16) { _fun0001_ip = 3036; continue _fun0001 }
 2910:
            var37 = _closure1_slot0;
            var34 = _closure1_slot3;
            var34 = var34[var38];
            var34 = var37.bind(var5)(var34);
            var34 = var34.ApplicationIntegrationType;
            var34 = var34.GUILD_INSTALL;
            var34 = var47 === var34;
            if(!var34) { _fun0001_ip = 3033; continue _fun0001 }
 2946:
            var39 = var31.includes;
            var41 = _closure1_slot0;
            var37 = _closure1_slot3;
            var44 = 40;
            var37 = var37[var44];
            var37 = var41.bind(var5)(var37);
            var37 = var37.OAuth2Scopes;
            var37 = var37.BOT;
            var37 = var39.bind(var31)(var37);
            if(var37) { _fun0001_ip = 3030; continue _fun0001 }
 2991:
            var41 = var31.includes;
            var43 = _closure1_slot0;
            var39 = _closure1_slot3;
            var39 = var39[var44];
            var39 = var43.bind(var5)(var39);
            var39 = var39.OAuth2Scopes;
            var39 = var39.APPLICATIONS_COMMANDS;
            var37 = var41.bind(var31)(var39);
 3030:
            var34 = var37;
 3033:
            var17 = var34;
 3036:
            var37 = _closure1_slot0;
            var39 = _closure1_slot3;
            var34 = 41;
            var34 = var39[var34];
            var41 = var37.bind(var5)(var34);
            var39 = var41.hasFlag;
            var34 = var19.application;
            var34 = var34.flags;
            var43 = var23 != var34;
            var37 = 0;
            if(!var43) { _fun0001_ip = 3084; continue _fun0001 }
 3081:
            var37 = var34;
 3084:
            var34 = _closure1_slot16;
            var34 = var34.EMBEDDED;
            var41 = var39.bind(var41)(var37, var34);
            if(!var41) { _fun0001_ip = 3136; continue _fun0001 }
 3103:
            var37 = _closure1_slot0;
            var34 = _closure1_slot3;
            var34 = var34[var38];
            var34 = var37.bind(var5)(var34);
            var34 = var34.ApplicationIntegrationType;
            var34 = var34.USER_INSTALL;
            var41 = var47 === var34;
 3136:
            if(!var41) { _fun0001_ip = 3144; continue _fun0001 }
 3139:
            var41 = var30.enabled;
 3144:
            var34 = _closure1_slot0;
            var48 = _closure1_slot3;
            var30 = 42;
            var30 = var48[var30];
            var37 = var34.bind(var5)(var30);
            var34 = var37.getIsSocialLayerParentApplication;
            var30 = var19.application;
            var46 = var34.bind(var37)(var30);
            var37 = _closure1_slot22;
            var34 = _closure1_slot21;
            var30 = {};
            var44 = _closure1_slot20;
            var43 = _closure1_slot1;
            var38 = 43;
            var38 = var48[var38];
            var39 = var43.bind(var5)(var38);
            var38 = {};
            var49 = var19.application;
            var38['application'] = var49;
            var38['accountScopes'] = var25;
            var39 = var44.bind(var5)(var39, var38);
            var38 = new Array(5);
            var38[0] = var39;
            var39 = 44;
            var39 = var48[var39];
            var43 = var43.bind(var5)(var39);
            var39 = {};
            var48 = var19.application;
            var39['application'] = var48;
            var39['accountScopes'] = var25;
            var39['requestedScopes'] = var31;
            var39['integrationType'] = var47;
            var39['errors'] = var57;
            if(var45) { _fun0001_ip = 3289; continue _fun0001 }
 3286:
            var45 = var46;
 3289:
            var39['isTrustedName'] = var45;
            var39 = var44.bind(var5)(var43, var39);
            var38[1] = var39;
            var39 = null;
            if(!var17) { _fun0001_ip = 3531; continue _fun0001 }
 3312:
            var45 = _closure1_slot22;
            var44 = _closure1_slot21;
            var43 = {};
            var49 = _closure1_slot20;
            var61 = _closure1_slot0;
            var60 = _closure1_slot3;
            var46 = 45;
            var46 = var60[var46];
            var46 = var61.bind(var5)(var46);
            var47 = var46.AuthorizeFormSeparator;
            var46 = {};
            var47 = var49.bind(var5)(var47, var46);
            var46 = new Array(2);
            var46[0] = var47;
            var48 = _closure1_slot1;
            var47 = 46;
            var47 = var60[var47];
            var48 = var48.bind(var5)(var47);
            var47 = {};
            var63 = 40;
            var60 = var60[var63];
            var60 = var61.bind(var5)(var60);
            var60 = var60.OAuth2Scopes;
            var60 = var60.BOT;
            var60 = var57[var60];
            if(!(var23 == var60)) { _fun0001_ip = 3451; continue _fun0001 }
 3418:
            var62 = _closure1_slot0;
            var61 = _closure1_slot3;
            var61 = var61[var63];
            var61 = var62.bind(var5)(var61);
            var61 = var61.OAuth2Scopes;
            var61 = var61.APPLICATIONS_COMMANDS;
            var60 = var57[var61];
 3451:
            if(!(var23 == var60)) { _fun0001_ip = 3459; continue _fun0001 }
 3455:
            var60 = new Array(0);
 3459:
            var60 = var60[var56];
            var47['error'] = var60;
            var47['selectedGuildId'] = var51;
            var47['onGuildChange'] = var58;
            if(!(var23 == var54)) { _fun0001_ip = 3485; continue _fun0001 }
 3481:
            var54 = new Array(0);
 3485:
            var47['guilds'] = var54;
            var54 = '';
            var54 = var54 !== var51;
            if(!var54) { _fun0001_ip = 3507; continue _fun0001 }
 3501:
            var58 = true;
            var54 = var58 === var59;
 3507:
            var47['disabled'] = var54;
            var47 = var49.bind(var5)(var48, var47);
            var46[1] = var47;
            var43['children'] = var46;
            var39 = var45.bind(var5)(var44, var43);
 3531:
            var38[2] = var39;
            var39 = null;
            if(!var16) { _fun0001_ip = 3696; continue _fun0001 }
 3543:
            var45 = _closure1_slot22;
            var44 = _closure1_slot21;
            var43 = {};
            var49 = _closure1_slot20;
            var58 = _closure1_slot0;
            var59 = _closure1_slot3;
            var46 = 45;
            var46 = var59[var46];
            var46 = var58.bind(var5)(var46);
            var47 = var46.AuthorizeFormSeparator;
            var46 = {};
            var47 = var49.bind(var5)(var47, var46);
            var46 = new Array(2);
            var46[0] = var47;
            var48 = _closure1_slot1;
            var47 = 47;
            var47 = var59[var47];
            var48 = var48.bind(var5)(var47);
            var47 = {};
            var54 = 40;
            var54 = var59[var54];
            var54 = var58.bind(var5)(var54);
            var54 = var54.OAuth2Scopes;
            var54 = var54.WEBHOOK_INCOMING;
            var54 = var57[var54];
            if(!(var23 == var54)) { _fun0001_ip = 3653; continue _fun0001 }
 3649:
            var54 = new Array(0);
 3653:
            var54 = var54[var56];
            var47['error'] = var54;
            var47['selectedChannelId'] = var35;
            var47['selectedGuildId'] = var51;
            var47['onChannelChange'] = var50;
            var47 = var49.bind(var5)(var48, var47);
            var46[1] = var47;
            var43['children'] = var46;
            var39 = var45.bind(var5)(var44, var43);
 3696:
            var38[3] = var39;
            var39 = null;
            if(!var41) { _fun0001_ip = 4080; continue _fun0001 }
 3708:
            var44 = _closure1_slot22;
            var43 = _closure1_slot21;
            var41 = {};
            var51 = _closure1_slot20;
            var50 = _closure1_slot0;
            var54 = _closure1_slot3;
            var45 = 45;
            var45 = var54[var45];
            var45 = var50.bind(var5)(var45);
            var46 = var45.AuthorizeFormSeparator;
            var45 = {};
            var46 = var51.bind(var5)(var46, var45);
            var45 = new Array(2);
            var45[0] = var46;
            var46 = 48;
            var46 = var54[var46];
            var46 = var50.bind(var5)(var46);
            var47 = var46.PressableOpacity;
            var46 = {};
            var48 = var55.switchContainer;
            var46['style'] = var48;
            var48 = function onPress() {
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
            var46['onPress'] = var48;
            var49 = _closure1_slot7;
            var48 = {};
            var55 = var55.switchLabelContainer;
            var48['style'] = var55;
            var56 = 49;
            var55 = var54[var56];
            var55 = var50.bind(var5)(var55);
            var57 = var55.Text;
            var55 = {};
            var58 = 'text-md/semibold';
            var55['variant'] = var58;
            var58 = 37;
            var59 = var54[var58];
            var59 = var50.bind(var5)(var59);
            var61 = var59.intl;
            var60 = var61.string;
            var59 = var54[var58];
            var59 = var50.bind(var5)(var59);
            var59 = var59.t;
            var59 = var59.Pkw//v;
            var59 = var60.bind(var61)(var59);
            var55['children'] = var59;
            var57 = var51.bind(var5)(var57, var55);
            var55 = new Array(2);
            var55[0] = var57;
            var56 = var54[var56];
            var56 = var50.bind(var5)(var56);
            var57 = var56.Text;
            var56 = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
            var59 = var54[var58];
            var59 = var50.bind(var5)(var59);
            var60 = var59.intl;
            var59 = var60.string;
            var58 = var54[var58];
            var58 = var50.bind(var5)(var58);
            var58 = var58.t;
            var58 = var58.c1uXo6;
            var58 = var59.bind(var60)(var58);
            var56['children'] = var58;
            var56 = var51.bind(var5)(var57, var56);
            var55[1] = var56;
            var48['children'] = var55;
            var49 = var44.bind(var5)(var49, var48);
            var48 = new Array(2);
            var48[0] = var49;
            var49 = 50;
            var49 = var54[var49];
            var49 = var50.bind(var5)(var49);
            var50 = var49.FormSwitch;
            var49 = {};
            var49['value'] = var53;
            var49['onValueChange'] = var52;
            var49 = var51.bind(var5)(var50, var49);
            var48[1] = var49;
            var46['children'] = var48;
            var46 = var44.bind(var5)(var47, var46);
            var45[1] = var46;
            var41['children'] = var45;
            var39 = var44.bind(var5)(var43, var41);
 4080:
            var38[4] = var39;
            var30['children'] = var38;
            var34 = var37.bind(var5)(var34, var30);
            var37 = var31.includes;
            var38 = _closure1_slot0;
            var39 = _closure1_slot3;
            var30 = 40;
            var30 = var39[var30];
            var30 = var38.bind(var5)(var30);
            var30 = var30.OAuth2Scopes;
            var30 = var30.BOT;
            var37 = var37.bind(var31)(var30);
            if(!var37) { _fun0001_ip = 4189; continue _fun0001 }
 4139:
            var41 = _closure1_slot2;
            var30 = _closure1_slot3;
            var38 = 20;
            var38 = var30[var38];
            var39 = var41.bind(var5)(var38);
            var38 = var39.equals;
            var30 = var30[var42];
            var30 = var41.bind(var5)(var30);
            var30 = var30.NONE;
            var30 = var38.bind(var39)(var40, var30);
            var37 = !var30;
 4189:
            var30 = undefined;
            if(!var37) { _fun0001_ip = 4211; continue _fun0001 }
 4194:
            var37 = _closure1_slot14;
            var37 = var37.AUTHORIZE_BOT_PERMISSIONS;
            _closure2_slot60 = var37;
            var30 = var37;
 4211:
            if(!var17) { _fun0001_ip = 4218; continue _fun0001 }
 4214:
            var17 = var23 == var36;
 4218:
            if(var17) { _fun0001_ip = 4231; continue _fun0001 }
 4221:
            if(!var16) { _fun0001_ip = 4228; continue _fun0001 }
 4224:
            var16 = var23 == var35;
 4228:
            var17 = var16;
 4231:
            if(var17) { _fun0001_ip = 4237; continue _fun0001 }
 4234:
            var17 = !var10;
 4237:
            var4 = true;
            var22 = var17;
            var14 = var34;
            var18 = var30;
            var15 = true;
            var1 = true;
            _fun0001_ip = 4332; continue _fun0001;
 4254:
            var16 = {};
            var30 = _closure1_slot20;
            var17 = {};
            var17 = var30.bind(var5)(var8, var17);
            var16['body'] = var17;
            return var16;
 4274:
            if(!(var23 != var33)) { _fun0001_ip = 5182; continue _fun0001 }
 4281:
            var30 = _closure1_slot20;
            var17 = _closure1_slot1;
            var34 = _closure1_slot3;
            var16 = 39;
            var16 = var34[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['application'] = var33;
            var16['onSelect'] = var32;
            var14 = var30.bind(var5)(var17, var16);
            var18 = undefined;
            var4 = false;
            var22 = false;
            var15 = false;
            var1 = false;
 4332:
            var13 = undefined;
            if(!var15) { _fun0001_ip = 4496; continue _fun0001 }
 4340:
            var15 = _closure1_slot14;
            var15 = var15.AUTHORIZE_BOT_PERMISSIONS;
            var13 = undefined;
            if(!(var18 !== var15)) { _fun0001_ip = 4496; continue _fun0001 }
 4359:
            var15 = var23 != var19;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 4496; continue _fun0001 }
 4371:
            var15 = var23 == var19;
            var30 = undefined;
            if(var15) { _fun0001_ip = 4403; continue _fun0001 }
 4380:
            var15 = var19.bot;
            var16 = var23 == var15;
            var30 = undefined;
            if(var16) { _fun0001_ip = 4403; continue _fun0001 }
 4395:
            var30 = var15.approximate_guild_count;
 4403:
            var17 = _closure1_slot20;
            var16 = _closure1_slot1;
            var32 = _closure1_slot3;
            var15 = 52;
            var15 = var32[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var32 = var19.application;
            var15['application'] = var32;
            var15['scopes'] = var31;
            var15['disclosures'] = var29;
            var31 = var19.redirect_uri;
            var32 = var23 != var31;
            var29 = null;
            if(!var32) { _fun0001_ip = 4466; continue _fun0001 }
 4463:
            var29 = var31;
 4466:
            var15['redirectUri'] = var29;
            var29 = null;
            if(!(var5 !== var30)) { _fun0001_ip = 4480; continue _fun0001 }
 4477:
            var29 = var30;
 4480:
            var15['approximateGuildCount'] = var29;
            var15['isEmbeddedFlow'] = var28;
            var13 = var17.bind(var5)(var16, var15);
 4496:
            if(!var1) { _fun0001_ip = 4503; continue _fun0001 }
 4499:
            var1 = var23 != var19;
 4503:
            if(!var1) { _fun0001_ip = 4510; continue _fun0001 }
 4506:
            var1 = var23 != var26;
 4510:
            var15 = undefined;
            if(!var1) { _fun0001_ip = 4576; continue _fun0001 }
 4515:
            var17 = _closure1_slot20;
            var16 = _closure1_slot1;
            var28 = _closure1_slot3;
            var1 = 53;
            var1 = var28[var1];
            var16 = var16.bind(var5)(var1);
            var1 = {};
            var1['user'] = var26;
            var26 = var19.application;
            var1['application'] = var26;
            var1['accountScopes'] = var25;
            var19 = var19.bot;
            var1['bot'] = var19;
            var15 = var17.bind(var5)(var16, var1);
 4576:
            var1 = {};
            var1['header'] = var15;
            var1['body'] = var14;
            var16 = _closure1_slot20;
            var15 = _closure1_slot21;
            var14 = {};
            var17 = _closure1_slot14;
            var19 = var17.SELECT_INSTALL_TYPE;
            var17 = null;
            if(!(var20 !== var19)) { _fun0001_ip = 5128; continue _fun0001 }
 4615:
            var20 = _closure1_slot20;
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var19 = 36;
            var19 = var26[var19];
            var19 = var25.bind(var5)(var19);
            var19 = var19.Button;
            if(!(var23 == var18)) { _fun0001_ip = 4888; continue _fun0001 }
 4652:
            var18 = {};
            var23 = 'lg';
            var18['size'] = var23;
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var23 = 37;
            var28 = var26[var23];
            var28 = var25.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var26[var23];
            var23 = var25.bind(var5)(var23);
            var26 = var23.t;
            if(var22) { _fun0001_ip = 4722; continue _fun0001 }
 4709:
            var23 = var26.y+/PEx;
            var23 = var28.bind(var29)(var23);
            _fun0001_ip = 4752; continue _fun0001;
 4722:
            if(var10) { _fun0001_ip = 4738; continue _fun0001 }
 4725:
            var25 = var26.N22i9P;
            var25 = var28.bind(var29)(var25);
            _fun0001_ip = 4749; continue _fun0001;
 4738:
            var26 = var26.BwwiSE;
            var25 = var28.bind(var29)(var26);
 4749:
            var23 = var25;
 4752:
            var18['text'] = var23;
            var23 = function onPress() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var4 = _closure2_slot54;
                    var3 = _closure2_slot18;
                    var1 = null;
                    var5 = var1 == var3;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0026_ip = 39; continue _fun0026 }
 24:
                    var2 = _closure2_slot18;
                    var2 = var2.application;
                    var3 = var2.deeplink_uri;
 39:
                    var2 = true;
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                }
            };
            var18['onPress'] = var23;
            var23 = undefined;
            if(var10) { _fun0001_ip = 4861; continue _fun0001 }
 4770:
            var28 = _closure1_slot20;
            var30 = _closure1_slot1;
            var31 = _closure1_slot3;
            var25 = var31[var24];
            var25 = var30.bind(var5)(var25);
            var26 = var25.View;
            var25 = {};
            var25['style'] = var27;
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
            var29 = var28.bind(var5)(var30, var29);
            var25['children'] = var29;
            var23 = var28.bind(var5)(var26, var25);
 4861:
            var18['icon'] = var23;
            var23 = 'end';
            var18['iconPosition'] = var23;
            var18['disabled'] = var22;
            var18['loading'] = var21;
            _fun0001_ip = 5122; continue _fun0001;
 4888:
            var21 = {};
            var23 = 'lg';
            var21['size'] = var23;
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var23 = 37;
            var28 = var26[var23];
            var28 = var25.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var26[var23];
            var23 = var25.bind(var5)(var23);
            var26 = var23.t;
            if(var22) { _fun0001_ip = 4958; continue _fun0001 }
 4945:
            var23 = var26.3PatS0;
            var23 = var28.bind(var29)(var23);
            _fun0001_ip = 4988; continue _fun0001;
 4958:
            if(var10) { _fun0001_ip = 4974; continue _fun0001 }
 4961:
            var25 = var26.N22i9P;
            var25 = var28.bind(var29)(var25);
            _fun0001_ip = 4985; continue _fun0001;
 4974:
            var26 = var26.BwwiSE;
            var25 = var28.bind(var29)(var26);
 4985:
            var23 = var25;
 4988:
            var21['text'] = var23;
            var23 = undefined;
            if(var10) { _fun0001_ip = 5093; continue _fun0001 }
 4997:
            var23 = undefined;
            if(!var22) { _fun0001_ip = 5093; continue _fun0001 }
 5002:
            var26 = _closure1_slot20;
            var28 = _closure1_slot1;
            var29 = _closure1_slot3;
            var24 = var29[var24];
            var24 = var28.bind(var5)(var24);
            var25 = var24.View;
            var24 = {};
            var24['style'] = var27;
            var27 = 54;
            var27 = var29[var27];
            var28 = var28.bind(var5)(var27);
            var27 = {};
            var29 = _closure1_slot9;
            var31 = var29.convert;
            var30 = var31.fromCodePoint;
            var29 = _closure1_slot13;
            var29 = var30.bind(var31)(var29);
            var27['name'] = var29;
            var27 = var26.bind(var5)(var28, var27);
            var24['children'] = var27;
            var23 = var26.bind(var5)(var25, var24);
 5093:
            var21['icon'] = var23;
            var23 = 'end';
            var21['iconPosition'] = var23;
            var23 = function onPress() {
                var3 = _closure2_slot21;
                var2 = _closure2_slot60;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var21['onPress'] = var23;
            var21['disabled'] = var22;
            var18 = var21;
 5122:
            var17 = var20.bind(var5)(var19, var18);
 5128:
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
 5182:
            var1 = {};
            var7 = _closure1_slot20;
            var4 = {};
            var4 = var7.bind(var5)(var8, var4);
            var1['body'] = var4;
            return var1;
 5202:
            var1 = {};
            var7 = _closure1_slot20;
            var4 = {};
            var4 = var7.bind(var5)(var8, var4);
            var1['body'] = var4;
            return var1;
 5222:
            var1 = {};
            var4 = _closure1_slot20;
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
            var7 = var7.cpT0Cg;
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