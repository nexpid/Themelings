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
    var4 = 54;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/useOAuth2AuthorizeForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOAuth2AuthorizeForm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var37 = var2.clientId;
            var _closure2_slot0 = var37;
            var51 = var2.responseType;
            var _closure2_slot1 = var51;
            var47 = var2.redirectUri;
            var _closure2_slot2 = var47;
            var45 = var2.codeChallenge;
            var _closure2_slot3 = var45;
            var43 = var2.codeChallengeMethod;
            var _closure2_slot4 = var43;
            var18 = var2.state;
            var _closure2_slot5 = var18;
            var57 = var2.nonce;
            var _closure2_slot6 = var57;
            var38 = var2.prompt;
            var _closure2_slot7 = var38;
            var16 = var2.scopes;
            var _closure2_slot8 = var16;
            var4 = var2.permissions;
            var _closure2_slot9 = var4;
            var22 = var2.guildId;
            var15 = var2.channelId;
            var17 = var2.integrationType;
            var _closure2_slot10 = var17;
            var61 = var2.disableGuildSelect;
            var6 = undefined;
            if(!(var61 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var61 = false;
case 2:
            var50 = var2.isTrustedName;
            if(!(var50 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var50 = false;
case 4:
            var31 = var2.isEmbeddedFlow;
            if(!(var31 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var31 = false;
case 6:
            var8 = var2.withBackPressHandler;
            if(!(var8 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = true;
case 8:
            var54 = var2.callback;
            var _closure2_slot11 = var54;
            var59 = var2.callbackWithoutPost;
            var _closure2_slot12 = var59;
            var1 = var2.dismissOAuthModal;
            var _closure2_slot13 = var1;
            var60 = var2.disclosures;
            var _closure2_slot14 = var60;
            var36 = var2.connectedAccountProvider;
            var _closure2_slot15 = var36;
            var27 = var2.wasDeepLink;
            if(!(var27 === var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var27 = false;
case 10:
            var _closure2_slot16 = var27;
            var _closure2_slot17 = var6;
            var _closure2_slot18 = var6;
            var _closure2_slot19 = var6;
            var _closure2_slot20 = var6;
            var _closure2_slot21 = var6;
            var _closure2_slot22 = var6;
            var _closure2_slot23 = var6;
            var _closure2_slot24 = var6;
            var _closure2_slot25 = var6;
            var _closure2_slot26 = var6;
            var _closure2_slot27 = var6;
            var _closure2_slot28 = var6;
            var _closure2_slot29 = var6;
            var _closure2_slot30 = var6;
            var _closure2_slot31 = var6;
            var _closure2_slot32 = var6;
            var _closure2_slot33 = var6;
            var _closure2_slot34 = var6;
            var _closure2_slot35 = var6;
            var _closure2_slot36 = var6;
            var _closure2_slot37 = var6;
            var _closure2_slot38 = var6;
            var _closure2_slot39 = var6;
            var _closure2_slot40 = var6;
            var _closure2_slot41 = var6;
            var _closure2_slot42 = var6;
            var _closure2_slot43 = var6;
            var _closure2_slot44 = var6;
            var _closure2_slot45 = var6;
            var _closure2_slot46 = var6;
            var _closure2_slot47 = var6;
            var _closure2_slot48 = var6;
            var _closure2_slot49 = var6;
            var _closure2_slot50 = var6;
            var _closure2_slot51 = var6;
            var _closure2_slot52 = var6;
            var _closure2_slot53 = var6;
            var _closure2_slot54 = var6;
            var _closure2_slot55 = var6;
            var _closure2_slot56 = var6;
            var _closure2_slot57 = var6;
            var _closure2_slot58 = var6;
            var _closure2_slot59 = var6;
            var _closure2_slot60 = var6;
            var _closure2_slot61 = var6;
            var _closure2_slot62 = var6;
            var _closure2_slot63 = var6;
            var9 = function Spinner() {
                var4 = _closure1_slot17;
                var3 = _closure1_slot7;
                var2 = {};
                var5 = _closure2_slot17;
                var5 = var5.loading;
                var2['style'] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 39;
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
            var2 = _closure1_slot20;
            var2 = var2.bind(var6)();
            _closure2_slot17 = var2;
            var12 = _closure1_slot6;
            var2 = var12.useState;
            var29 = null;
            var2 = var2.bind(var12)(var29);
            var11 = _closure1_slot5;
            var13 = 2;
            var2 = var11.bind(var6)(var2, var13);
            var58 = 0;
            var20 = var2[var58];
            _closure2_slot18 = var20;
            var14 = 1;
            var2 = var2[var14];
            _closure2_slot19 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var29);
            var2 = var11.bind(var6)(var2, var13);
            var21 = var2[var58];
            _closure2_slot20 = var21;
            var2 = var2[var14];
            _closure2_slot21 = var2;
            var2 = var12.useState;
            var2 = var2.bind(var12)(var29);
            var2 = var11.bind(var6)(var2, var13);
            var10 = var2[var58];
            _closure2_slot22 = var10;
            var2 = var2[var14];
            _closure2_slot23 = var2;
            var5 = var12.useState;
            var2 = false;
            var5 = var5.bind(var12)(var2);
            var5 = var11.bind(var6)(var5, var13);
            var26 = var5[var58];
            var5 = var5[var14];
            _closure2_slot24 = var5;
            var5 = var29 == var20;
            var19 = undefined;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var19 = var20.guilds;
case 12:
            _closure2_slot25 = var19;
            var12 = _closure1_slot6;
            var11 = var12.useState;
            var23 = var29 != var22;
            var5 = null;
            if(!var23) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var22;
case 14:
            var11 = var11.bind(var12)(var5);
            var5 = _closure1_slot5;
            var5 = var5.bind(var6)(var11, var13);
            var56 = var5[var58];
            _closure2_slot26 = var56;
            var62 = var5[var14];
            _closure2_slot27 = var62;
            var12 = _closure1_slot6;
            var11 = var12.useState;
            var22 = var29 != var15;
            var5 = null;
            if(!var22) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var15;
case 16:
            var5 = var11.bind(var12)(var5);
            var12 = _closure1_slot5;
            var5 = var12.bind(var6)(var5, var13);
            var41 = var5[var58];
            _closure2_slot28 = var41;
            var55 = var5[var14];
            _closure2_slot29 = var55;
            var22 = _closure1_slot6;
            var15 = var22.useState;
            var23 = _closure1_slot2;
            var11 = _closure1_slot3;
            var48 = 13;
            var5 = var11[var48];
            var5 = var23.bind(var6)(var5);
            var5 = var5.NONE;
            var5 = var15.bind(var22)(var5);
            var5 = var12.bind(var6)(var5, var13);
            var49 = var5[var58];
            _closure2_slot30 = var49;
            var5 = var5[var14];
            _closure2_slot31 = var5;
            var12 = _closure1_slot0;
            var5 = 14;
            var11 = var11[var5];
            var22 = var12.bind(var6)(var11);
            var15 = var22.useStateFromStores;
            var11 = _closure1_slot12;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var15.bind(var22)(var12, var11);
            var11 = var29 == var24;
            var28 = undefined;
            if(var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var28 = var24.nsfwAllowed;
case 18:
            _closure2_slot32 = var28;
            var22 = _closure1_slot6;
            var15 = var22.useMemo;
            var12 = new Array(2);
            var12[0] = var19;
            var12[1] = var56;
            var11 = function() {
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
            var42 = var15.bind(var22)(var11, var12);
            _closure2_slot33 = var42;
            var12 = _closure1_slot0;
            var11 = _closure1_slot3;
            var11 = var11[var5];
            var23 = var12.bind(var6)(var11);
            var22 = var23.useStateFromStores;
            var11 = _closure1_slot11;
            var15 = new Array(1);
            var15[0] = var11;
            var12 = new Array(1);
            var12[0] = var36;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot15;
                    var2 = null;
                    var3 = var2 == var1;
                    var1 = null;
                    if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 21:
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
                    if(!var4) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var2 = var3;
case 23:
                    var1 = var2;
case 22:
                    return var1;
                }
            };
            var25 = var22.bind(var23)(var15, var11, var12);
            var44 = var29 == var36;
            if(var44) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var44 = var29 != var25;
case 25:
            _closure2_slot34 = var44;
            var32 = _closure1_slot6;
            var11 = var32.useState;
            var11 = var11.bind(var32)(var29);
            var12 = _closure1_slot5;
            var11 = var12.bind(var6)(var11, var13);
            var52 = var11[var58];
            _closure2_slot35 = var52;
            var11 = var11[var14];
            _closure2_slot36 = var11;
            var11 = var32.useState;
            var11 = var11.bind(var32)(var2);
            var11 = var12.bind(var6)(var11, var13);
            var12 = var11[var58];
            _closure2_slot37 = var12;
            var11 = var11[var14];
            _closure2_slot38 = var11;
            var35 = _closure1_slot0;
            var34 = _closure1_slot3;
            var5 = var34[var5];
            var23 = var35.bind(var6)(var5);
            var22 = var23.useStateFromStores;
            var5 = _closure1_slot9;
            var15 = new Array(1);
            var15[0] = var5;
            var5 = function() {
                var1 = _closure1_slot9;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var39 = var22.bind(var23)(var15, var5);
            _closure2_slot39 = var39;
            var5 = 15;
            var5 = var34[var5];
            var15 = var35.bind(var6)(var5);
            var5 = var15.useIsScreenReaderEnabled;
            var15 = var5.bind(var15)();
            _closure2_slot40 = var15;
            var30 = 16;
            var5 = var34[var30];
            var23 = var35.bind(var6)(var5);
            var22 = var23.useAnimatedStyle;
            var5 = function X() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot39;
                    if(var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
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
                    _fun0004_ip = 29; continue _fun0004;
case 27:
                    var1 = {};
case 29:
                    return var1;
                }
            };
            var33 = {};
            var33['shouldReduceMotion'] = var39;
            var39 = var34[var30];
            var39 = var35.bind(var6)(var39);
            var39 = var39.withSequence;
            var33['withSequence'] = var39;
            var39 = 17;
            var39 = var34[var39];
            var39 = var35.bind(var6)(var39);
            var39 = var39.withTiming;
            var33['withTiming'] = var39;
            var39 = var34[var30];
            var39 = var35.bind(var6)(var39);
            var39 = var39.Easing;
            var33['Easing'] = var39;
            var34 = var34[var30];
            var34 = var35.bind(var6)(var34);
            var34 = var34.withRepeat;
            var33['withRepeat'] = var34;
            var5['__closure'] = var33;
            var33 = 1476082137097.0;
            var5['__workletHash'] = var33;
            var33 = _closure1_slot21;
            var5['__initData'] = var33;
            var34 = var22.bind(var23)(var5);
            var23 = var32.useMemo;
            var22 = var29 == var16;
            var5 = undefined;
            if(var22) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var5 = var16.length;
case 30:
            var22 = new Array(3);
            var22[0] = var5;
            var22[1] = var47;
            var22[2] = var17;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var1 = var3 == var1;
                    if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var4 = _closure2_slot8;
                    var4 = var3 == var4;
                    var6 = undefined;
                    if(var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var4 = _closure2_slot8;
                    var6 = var4.length;
case 34:
                    var7 = var3 != var6;
                    var5 = 0;
                    var4 = 0;
                    if(!var7) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var4 = var6;
case 36:
                    var1 = var5 === var4;
case 32:
                    if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 38:
                    var2 = _closure2_slot2;
                    var1 = var3 == var2;
case 23:
                    return var1;
                }
            };
            var23 = var23.bind(var32)(var5, var22);
            _closure2_slot41 = var23;
            var33 = _closure1_slot6;
            var5 = var33.useState;
            var22 = var5.bind(var33)(var29);
            var5 = _closure1_slot5;
            var5 = var5.bind(var6)(var22, var13);
            var39 = var5[var58];
            _closure2_slot42 = var39;
            var5 = var5[var14];
            _closure2_slot43 = var5;
            var32 = var33.useEffect;
            var22 = new Array(2);
            var22[0] = var37;
            var22[1] = var23;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot41;
                    if(!var2) { _fun0006_ip = 39; continue _fun0006 }
case 40:
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
                        var4 = _closure1_slot10;
                        var2 = var4.createFromServer;
                        var1 = arg1;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var32.bind(var33)(var5, var22);
            var32 = var33.useMemo;
            var22 = var29 == var39;
            var5 = undefined;
            if(var22) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var5 = var39.integrationTypesConfig;
case 41:
            var22 = new Array(2);
            var22[0] = var5;
            var22[1] = var52;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot35;
                    var4 = null;
                    var2 = var4 == var1;
                    var1 = null;
                    if(var2) { _fun0007_ip = 43; continue _fun0007 }
case 21:
                    var2 = _closure2_slot42;
                    var6 = var4 == var2;
                    var2 = undefined;
                    if(var6) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var6 = _closure2_slot42;
                    var6 = var6.integrationTypesConfig;
                    var7 = var4 == var6;
                    var2 = undefined;
                    if(var7) { _fun0007_ip = 44; continue _fun0007 }
case 46:
                    var3 = _closure2_slot35;
                    var3 = var6[var3];
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 44; continue _fun0007 }
case 23:
                    var2 = var3.oauth2InstallParams;
case 44:
                    var1 = var2;
case 43:
                    return var1;
                }
            };
            var5 = var32.bind(var33)(var5, var22);
            _closure2_slot44 = var5;
            var33 = _closure1_slot6;
            var32 = var33.useMemo;
            var22 = var29 == var5;
            var35 = undefined;
            if(var22) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var35 = var5.scopes;
case 47:
            var22 = new Array(3);
            var22[0] = var35;
            var22[1] = var16;
            var22[2] = var23;
            var16 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot41;
                    if(var2) { _fun0008_ip = 21; continue _fun0008 }
case 49:
                    var6 = _closure2_slot8;
                    _fun0008_ip = 50; continue _fun0008;
case 21:
                    var4 = _closure2_slot44;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(var4) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var3 = _closure2_slot44;
                    var2 = var3.scopes;
case 51:
                    var6 = var2;
case 50:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 19;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filterScopes;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var6 = new Array(0);
case 53:
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
            var16 = var32.bind(var33)(var16, var22);
            var35 = var16.requestedScopes;
            _closure2_slot45 = var35;
            var22 = var16.accountScopes;
            var32 = _closure1_slot6;
            var16 = var32.useMemo;
            var40 = var29 == var5;
            var33 = undefined;
            if(var40) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var33 = var5.permissions;
case 55:
            var5 = new Array(3);
            var5[0] = var33;
            var5[1] = var4;
            var5[2] = var23;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot41;
                    if(var1) { _fun0009_ip = 33; continue _fun0009 }
case 40:
                    var1 = _closure2_slot9;
                    _fun0009_ip = 53; continue _fun0009;
case 33:
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
                    if(var7) { _fun0009_ip = 22; continue _fun0009 }
case 57:
                    var6 = _closure2_slot44;
                    var5 = var6.permissions;
case 22:
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var2 = var5;
case 58:
                    var1 = var3.bind(var4)(var2);
case 53:
                    var2 = null;
                    if(!(var2 == var1)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.NONE;
case 60:
                    return var1;
                }
            };
            var46 = var16.bind(var32)(var4, var5);
            _closure2_slot46 = var46;
            var16 = _closure1_slot6;
            var4 = var16.useState;
            var4 = var4.bind(var16)(var2);
            var5 = _closure1_slot5;
            var4 = var5.bind(var6)(var4, var13);
            var53 = var4[var58];
            _closure2_slot47 = var53;
            var4 = var4[var14];
            _closure2_slot48 = var4;
            var33 = var16.useEffect;
            var32 = new Array(1);
            var32[0] = var37;
            var4 = function() {
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
            var4 = var33.bind(var16)(var4, var32);
            var4 = var16.useState;
            var4 = var4.bind(var16)(var29);
            var4 = var5.bind(var6)(var4, var13);
            var32 = var4[var58];
            var16 = var4[var14];
            var40 = var18;
            if(!var53) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var5 = _closure1_slot0;
            var33 = _closure1_slot3;
            var4 = 23;
            var4 = var33[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getAPIBaseURL;
            var5 = var4.bind(var5)(var2);
            var4 = '/v6';
            var5 = var5 + var4;
            var4 = _closure1_slot16;
            var4 = var4.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK;
            var5 = var5 + var4;
            _closure2_slot2 = var5;
            var4 = var29 == var18;
            if(!var4) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var4 = var29 == var32;
case 64:
            if(!var4) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var33 = _closure1_slot0;
            var63 = _closure1_slot3;
            var4 = 24;
            var4 = var63[var4];
            var33 = var33.bind(var6)(var4);
            var4 = var33.v4;
            var4 = var4.bind(var33)();
            var4 = var16.bind(var6)(var4);
case 66:
            var4 = var18;
            if(!(var29 != var32)) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var16 = var18;
            if(!(var29 == var18)) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var18 = 'SA';
            var16 = var18 + var32;
case 70:
            _closure2_slot5 = var16;
            var4 = var16;
case 68:
            var40 = var4;
            var47 = var5;
case 62:
            var16 = _closure1_slot6;
            var4 = var16.useRef;
            var4 = var4.bind(var16)(var2);
            _closure2_slot49 = var4;
            var5 = var16.useState;
            var4 = var60;
            if(!(var29 == var4)) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var4 = new Array(0);
case 72:
            var4 = var5.bind(var16)(var4);
            var5 = _closure1_slot5;
            var4 = var5.bind(var6)(var4, var13);
            var32 = var4[var58];
            _closure2_slot50 = var32;
            var18 = var4[var14];
            _closure2_slot51 = var18;
            var16 = _closure1_slot6;
            var33 = var16.useState;
            var4 = var29 != var60;
            var4 = var33.bind(var16)(var4);
            var4 = var5.bind(var6)(var4, var13);
            var33 = var4[var58];
            _closure2_slot52 = var33;
            var4 = var4[var14];
            _closure2_slot53 = var4;
            var13 = var16.useEffect;
            var5 = new Array(4);
            var5[0] = var37;
            var5[1] = var60;
            var5[2] = var18;
            var5[3] = var4;
            var4 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = function _doGetDisclosures() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot4;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0011_ip = 74; continue _fun0011 }
case 40:
                                    var2 = undefined;
                                    var6 = undefined;
                                    var5 = _closure2_slot49;
                                    var4 = true;
                                    var5['current'] = var4;
case 35: // try_start_0 // try_start_1
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var4 = 25;
                                    var4 = var7[var4];
                                    var7 = var5.bind(var2)(var4);
                                    var5 = var7.getDisclosures;
                                    var4 = _closure2_slot0;
                                    var4 = var5.bind(var7)(var4);
                                    SaveGenerator(address=71);
case 39:
                                    return var4;
case 75:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(var5) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                                    var7 = var4.disclosures;
                                    var5 = var4.allAcked;
                                    var8 = _closure2_slot53;
                                    var5 = !var5;
                                    var5 = var8.bind(var2)(var5);
                                    var5 = _closure2_slot51;
                                    var5 = var5.bind(var2)(var7);
case 78: // try_end0
                                    _fun0011_ip = 79; continue _fun0011;
case 76: // try_end1
                                    var7 = _closure2_slot49;
                                    var5 = false;
                                    var7['current'] = var5;
                                    return var4;
case 80: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    var8 = var4.body;
                                    var6 = var8;
                                    var5 = _closure2_slot23;
                                    var4 = global;
                                    var7 = var4.Error;
                                    var9 = var8.message;
                                    var8 = null;
                                    if(!(var8 == var9)) { _fun0011_ip = 81; continue _fun0011 }
case 82:
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
                                    _fun0011_ip = 83; continue _fun0011;
case 81:
                                    var4 = var6.message;
case 83:
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {constructor: {value: var7}});
                                    var16 = var6;
                                    var15 = var4;
                                    var4 = new var16[var7](var15, var14);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    var4 = var5.bind(var2)(var4);
case 79: // try_end2
                                    var5 = _closure2_slot49;
                                    var4 = false;
                                    var5['current'] = var4;
                                    return var2;
case 84: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register=1);
                                    var4 = _closure2_slot49;
                                    var3 = false;
                                    var4['current'] = var3;
                                    throw var2;
case 74:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot0 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot49;
                    var3 = var3.current;
                    if(var3) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                    var3 = _closure2_slot14;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0010_ip = 85; continue _fun0010 }
case 34:
                    var2 = function doGetDisclosures() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var13.bind(var16)(var4, var5);
            var4 = var29 == var20;
            var13 = undefined;
            if(var4) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var4 = var20.application;
            var13 = var4.content_classification;
case 87:
            if(!(var29 == var13)) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var5 = var29 == var39;
            var4 = undefined;
            if(var5) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var4 = var39.contentClassification;
case 91:
            var13 = var4;
case 89:
            var5 = _closure1_slot0;
            var16 = _closure1_slot3;
            var4 = 26;
            var4 = var16[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isContentClassificationRestricted;
            var5 = var4.bind(var5)(var13, var28);
            var18 = _closure1_slot6;
            var16 = var18.useCallback;
            var4 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0012_ip = 93; continue _fun0012 }
case 28:
                            var3 = var2.isAuthorized;
                            var11 = var2.overrideSuccessCallback;
                            var15 = var2.canceled;
                            var5 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=41);
case 94:
                            return var5;
case 95:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0012_ip = 96; continue _fun0012 }
case 46:
                            var8 = _closure2_slot12;
                            var6 = null;
                            if(!(var6 == var8)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                            var8 = _closure2_slot35;
                            if(!(var6 == var8)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
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
                            _fun0012_ip = 101; continue _fun0012;
case 99: // try_start_0 // try_start_2
                            var9 = _closure2_slot24;
                            var8 = true;
                            var8 = var9.bind(var5)(var8);
                            var16 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var8 = 27;
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
                            var18 = 28;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                            var16 = _closure2_slot26;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0012_ip = 102; continue _fun0012 }
case 104:
                            var14 = _closure2_slot26;
case 102:
                            var8['guildId'] = var14;
                            var17 = _closure2_slot35;
                            var16 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var14 = var14[var18];
                            var14 = var16.bind(var5)(var14);
                            var14 = var14.ApplicationIntegrationType;
                            var16 = var14.GUILD_INSTALL;
                            var14 = undefined;
                            if(!(var17 === var16)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                            var16 = _closure2_slot28;
                            var16 = var6 != var16;
                            var14 = undefined;
                            if(!var16) { _fun0012_ip = 105; continue _fun0012 }
case 107:
                            var14 = _closure2_slot28;
case 105:
                            var8['channelId'] = var14;
                            var14 = _closure2_slot35;
                            var8['integrationType'] = var14;
                            var14 = _closure2_slot15;
                            var8['connectedAccountProvider'] = var14;
                            var8 = var12.bind(var13)(var8);
                            SaveGenerator(address=426);
case 108:
                            return var8;
case 109:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                            if(var12) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                            var10 = var8;
                            var12 = var3;
                            if(!var12) { _fun0012_ip = 112; continue _fun0012 }
case 113:
                            var14 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var12 = 29;
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
                            SaveGenerator(address=514);
case 114:
                            return var9;
case 115:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0012_ip = 116; continue _fun0012 }
case 112:
                            var12 = var11;
                            if(!(var6 == var12)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                            var12 = _closure2_slot13;
                            if(!(var6 != var12)) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                            var12 = _closure2_slot13;
                            var12 = var12.bind(var5)();
case 119:
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
case 121:
                            return var12;
case 122:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                            if(var13) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                            var13 = _closure2_slot11;
                            if(!(var6 != var13)) { _fun0012_ip = 125; continue _fun0012 }
case 126:
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
                            if(var15) { _fun0012_ip = 127; continue _fun0012 }
case 128:
                            var15 = _closure2_slot18;
                            var16 = var15.application;
case 127:
                            var15 = 'application';
                            var13[14] = var16;
                            var16 = _closure2_slot33;
                            var15 = 'guild';
                            var13[14] = var16;
                            var16 = _closure2_slot16;
                            var15 = 'wasDeepLink';
                            var13[14] = var16;
                            var13 = var14.bind(var5)(var13);
                            _fun0012_ip = 125; continue _fun0012;
case 123: // try_end0 // try_end2
                            var14 = _closure2_slot24;
                            var13 = false;
                            var13 = var14.bind(var5)(var13);
                            return var12;
case 117: // try_start_1 // try_start_3
                            var10 = var10.location;
                            var10 = var11.bind(var5)(var10);
case 125: // try_end1
                            _fun0012_ip = 129; continue _fun0012;
case 116: // try_end3
                            var11 = _closure2_slot24;
                            var10 = false;
                            var10 = var11.bind(var5)(var10);
                            return var9;
case 110:
                            var10 = _closure2_slot24;
                            var9 = false;
                            var9 = var10.bind(var5)(var9);
                            return var8;
case 130: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=7);
                            var8 = var8.body;
                            var7 = var8;
                            var9 = var6 == var8;
                            var8 = undefined;
                            if(var9) { _fun0012_ip = 131; continue _fun0012 }
case 132:
                            var9 = var7;
                            var8 = var9.message;
case 131:
                            if(!(var6 != var8)) { _fun0012_ip = 133; continue _fun0012 }
case 134:
                            var8 = var7;
                            var9 = var8.message;
                            var8 = '';
                            if(!(var8 === var9)) { _fun0012_ip = 135; continue _fun0012 }
case 133:
                            var9 = _closure2_slot23;
                            var8 = var7;
                            var8 = var9.bind(var5)(var8);
                            var9 = _closure2_slot21;
                            var8 = _closure1_slot14;
                            var8 = var8.AUTHORIZE_SCOPES;
                            var8 = var9.bind(var5)(var8);
                            _fun0012_ip = 129; continue _fun0012;
case 135:
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
case 129: // try_end4
                            var8 = _closure2_slot24;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
case 101:
                            return var5;
case 136: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=6);
                            var9 = _closure2_slot24;
                            var8 = false;
                            var8 = var9.bind(var5)(var8);
                            throw var7;
case 97:
                            var8 = _closure2_slot24;
                            var7 = true;
                            var7 = var8.bind(var5)(var7);
                            var7 = _closure2_slot12;
                            var3 = var7.bind(var5)(var3);
                            var3 = _closure2_slot13;
                            var3 = var6 == var3;
                            if(var3) { _fun0012_ip = 137; continue _fun0012 }
case 138:
                            var4 = _closure2_slot13;
                            var3 = var4.bind(var5)();
case 137:
                            var3 = undefined;
                            return var3;
case 96:
                            return var2;
case 93:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function(arg1) {
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
            var13 = var4.bind(var6)();
            var4 = new Array(21);
            var4[0] = var52;
            var4[1] = var59;
            var4[2] = var37;
            var4[3] = var35;
            var4[4] = var51;
            var4[5] = var47;
            var4[6] = var45;
            var4[7] = var43;
            var4[8] = var40;
            var4[9] = var57;
            var4[10] = var46;
            var4[11] = var49;
            var4[12] = var56;
            var4[13] = var41;
            var4[14] = var32;
            var4[15] = var1;
            var4[16] = var54;
            var4[17] = var27;
            var54 = var29 == var20;
            var27 = undefined;
            if(var54) { _fun0001_ip = 139; continue _fun0001 }
case 140:
            var27 = var20.application;
case 139:
            var4[18] = var27;
            var4[19] = var42;
            var4[20] = var36;
            var13 = var16.bind(var18)(var13, var4);
            _closure2_slot54 = var13;
            var18 = _closure1_slot6;
            var27 = var18.useCallback;
            var16 = new Array(1);
            var16[0] = var13;
            var4 = function(arg1) {
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
            var4 = var27.bind(var18)(var4, var16);
            _closure2_slot55 = var4;
            var27 = var18.useCallback;
            var16 = new Array(8);
            var16[0] = var37;
            var16[1] = var53;
            var16[2] = var51;
            var16[3] = var13;
            var16[4] = var4;
            var16[5] = var40;
            var16[6] = var1;
            var16[7] = var35;
            var4 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot47;
                    if(var4) { _fun0013_ip = 20; continue _fun0013 }
case 141:
                    var4 = _closure2_slot54;
                    var3 = {};
                    var3['isAuthorized'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0013_ip = 142; continue _fun0013;
case 20:
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
                            if(var2) { _fun0014_ip = 143; continue _fun0014 }
case 144:
                            var10 = var4;
case 143:
                            var4 = undefined;
                            if(var2) { _fun0014_ip = 145; continue _fun0014 }
case 146:
                            var5 = var3().value;
                            var3 = var1;
                            var3 = var3 === var6;
                            var4 = undefined;
                            var2 = var3;
                            if(var3) { _fun0014_ip = 145; continue _fun0014 }
case 85:
                            var4 = var5;
                            var2 = var3;
case 145:
                            if(var2) { _fun0014_ip = 147; continue _fun0014 }
case 57:
                            var1.return();
case 147:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.all;
                            var1 = new Array(2);
                            var1[0] = var4;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var4 = 27;
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
                            if(var2) { _fun0015_ip = 143; continue _fun0015 }
case 144:
                            var4 = var5;
case 143:
                            if(var2) { _fun0015_ip = 95; continue _fun0015 }
case 148:
                            var3 = var3().value;
                            var3 = var1;
                            var2 = var3 === var6;
case 95:
                            if(var2) { _fun0015_ip = 149; continue _fun0015 }
case 150:
                            var1.return();
case 149:
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
                            if(var2) { _fun0016_ip = 143; continue _fun0016 }
case 144:
                            var5 = var4;
case 143:
                            var4 = undefined;
                            if(var2) { _fun0016_ip = 145; continue _fun0016 }
case 146:
                            var7 = var6().value;
                            var6 = var1;
                            var6 = var6 === var3;
                            var4 = undefined;
                            var2 = var6;
                            if(var6) { _fun0016_ip = 145; continue _fun0016 }
case 85:
                            var4 = var7;
                            var2 = var6;
case 145:
                            if(var2) { _fun0016_ip = 147; continue _fun0016 }
case 57:
                            var1.return();
case 147:
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
                            if(var4) { _fun0017_ip = 86; continue _fun0017 }
case 151:
                            var2 = _closure2_slot13;
                            var1 = var2.bind(var3)();
case 86:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 30;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 142:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var27.bind(var18)(var4, var16);
            _closure2_slot56 = var4;
            var4 = var18.useRef;
            var4 = var4.bind(var18)(var2);
            _closure2_slot57 = var4;
            var27 = var18.useCallback;
            var16 = _closure1_slot4;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 152; continue _fun0018 }
case 40:
                        var2 = undefined;
                        var10 = undefined;
                        var8 = undefined;
                        var6 = undefined;
                        var3 = _closure2_slot57;
                        var3 = var3.current;
                        if(var3) { _fun0018_ip = 153; continue _fun0018 }
case 154:
                        var3 = _closure2_slot57;
                        var9 = true;
                        var3['current'] = var9;
case 155: // try_start_0 // try_start_1
                        var7 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var3 = 27;
                        var3 = var11[var3];
                        var11 = var7.bind(var2)(var3);
                        var7 = var11.fetchAuthorization;
                        var3 = {};
                        var12 = _closure2_slot0;
                        var3['clientId'] = var12;
                        var12 = _closure2_slot45;
                        var3['scopes'] = var12;
                        var12 = _closure2_slot1;
                        var3['responseType'] = var12;
                        var12 = _closure2_slot2;
                        var3['redirectUri'] = var12;
                        var12 = _closure2_slot3;
                        var3['codeChallenge'] = var12;
                        var12 = _closure2_slot4;
                        var3['codeChallengeMethod'] = var12;
                        var12 = _closure2_slot5;
                        var3['state'] = var12;
                        var13 = _closure2_slot35;
                        var12 = null;
                        var13 = var12 != var13;
                        var12 = undefined;
                        if(!var13) { _fun0018_ip = 7; continue _fun0018 }
case 156:
                        var12 = _closure2_slot35;
case 7:
                        var3['integrationType'] = var12;
                        var12 = _closure2_slot15;
                        var3['connectedAccountProvider'] = var12;
                        var3 = var7.bind(var11)(var3);
                        SaveGenerator(address=183);
case 157:
                        return var3;
case 158:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0018_ip = 109; continue _fun0018 }
case 159:
                        var10 = var3;
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot3;
                        var7 = 31;
                        var7 = var16[var7];
                        var11 = var15.bind(var2)(var7);
                        var7 = var11.convertOAuth2Authorization;
                        var7 = var7.bind(var11)(var3);
                        var11 = _closure2_slot19;
                        var11 = var11.bind(var2)(var7);
                        var11 = 26;
                        var11 = var16[var11];
                        var13 = var15.bind(var2)(var11);
                        var12 = var13.isContentClassificationRestricted;
                        var7 = var7.application;
                        var11 = var7.content_classification;
                        var7 = _closure2_slot32;
                        var8 = var12.bind(var13)(var11, var7);
                        var14 = _closure2_slot7;
                        var13 = 32;
                        var13 = var16[var13];
                        var13 = var15.bind(var2)(var13);
                        var13 = var13.OAuth2Prompts;
                        var13 = var13.NONE;
                        var13 = var14 !== var13;
                        var12 = var13;
                        if(var13) { _fun0018_ip = 160; continue _fun0018 }
case 161:
                        var13 = var10;
                        var13 = var13.authorized;
                        var12 = !var13;
case 160:
                        var11 = var12;
                        if(var12) { _fun0018_ip = 162; continue _fun0018 }
case 163:
                        var11 = _closure2_slot52;
case 162:
                        var7 = var11;
                        if(var11) { _fun0018_ip = 164; continue _fun0018 }
case 165:
                        var7 = var8;
case 164:
                        if(var7) { _fun0018_ip = 166; continue _fun0018 }
case 167:
                        var8 = _closure2_slot54;
                        var7 = {};
                        var7['isAuthorized'] = var9;
                        var7 = var8.bind(var2)(var7);
case 166:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 33;
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
case 168: // try_end0
                        _fun0018_ip = 169; continue _fun0018;
case 109: // try_end1
                        var7 = _closure2_slot57;
                        var5 = false;
                        var7['current'] = var5;
                        return var3;
case 170: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=2);
                        var8 = var3.body;
                        var6 = var8;
                        var5 = _closure2_slot23;
                        var3 = global;
                        var7 = var3.Error;
                        var9 = var8.message;
                        var8 = null;
                        if(!(var8 == var9)) { _fun0018_ip = 119; continue _fun0018 }
case 171:
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
                        _fun0018_ip = 172; continue _fun0018;
case 119:
                        var3 = var6.message;
case 172:
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var20 = var6;
                        var19 = var3;
                        var3 = new var20[var7](var19, var18);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var3 = var5.bind(var2)(var3);
case 169: // try_end2
                        var5 = _closure2_slot57;
                        var3 = false;
                        var5['current'] = var3;
                        _fun0018_ip = 153; continue _fun0018;
case 124: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot57;
                        var4 = false;
                        var5['current'] = var4;
                        throw var3;
case 153:
                        return var2;
case 152:
                        return var1;
                    }
                };
                return var1;
            };
            var16 = var16.bind(var6)(var4);
            var4 = new Array(13);
            var4[0] = var37;
            var4[1] = var35;
            var4[2] = var51;
            var4[3] = var47;
            var4[4] = var45;
            var4[5] = var43;
            var4[6] = var40;
            var4[7] = var52;
            var4[8] = var36;
            var4[9] = var38;
            var4[10] = var13;
            var4[11] = var33;
            var4[12] = var28;
            var16 = var27.bind(var18)(var16, var4);
            _closure2_slot58 = var16;
            var28 = var18.useMemo;
            var27 = new Array(2);
            var27[0] = var39;
            var27[1] = var23;
            var4 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot42;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0019_ip = 173; continue _fun0019 }
case 174:
                    var1 = _closure2_slot41;
                    if(var1) { _fun0019_ip = 86; continue _fun0019 }
case 173:
                    var1 = new Array(0);
                    _fun0019_ip = 175; continue _fun0019;
case 86:
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var3 = _closure2_slot42;
                    var3 = var3.integrationTypesConfig;
                    if(!(var6 == var3)) { _fun0019_ip = 176; continue _fun0019 }
case 32:
                    var3 = {};
case 176:
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
                            if(var3) { _fun0020_ip = 37; continue _fun0020 }
case 144:
                            var5 = var4().value;
                            var4 = var2;
                            var4 = var4 === var6;
                            var1 = undefined;
                            var3 = var4;
                            if(var4) { _fun0020_ip = 37; continue _fun0020 }
case 51:
                            var1 = var5;
                            var3 = var4;
case 37:
                            if(var3) { _fun0020_ip = 177; continue _fun0020 }
case 36:
                            var2.return();
case 177:
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
                            if(var4) { _fun0021_ip = 143; continue _fun0021 }
case 144:
                            var2 = var6;
case 143:
                            if(var4) { _fun0021_ip = 95; continue _fun0021 }
case 148:
                            var5 = var5().value;
                            var5 = var1;
                            var4 = var5 === var3;
case 95:
                            if(var4) { _fun0021_ip = 149; continue _fun0021 }
case 150:
                            var1.return();
case 149:
                            var1 = global;
                            var1 = var1.Number;
                            var1 = var1.bind(var3)(var2);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 175:
                    return var1;
                }
            };
            var4 = var28.bind(var18)(var4, var27);
            _closure2_slot59 = var4;
            var27 = var18.useRef;
            var27 = var27.bind(var18)(var29);
            _closure2_slot60 = var27;
            var33 = var18.useEffect;
            var28 = new Array(5);
            var28[0] = var37;
            var28[1] = var52;
            var28[2] = var46;
            var28[3] = var35;
            var28[4] = var21;
            var27 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var1 = _closure2_slot60;
                    var1 = var1.current;
                    if(!(var2 !== var1)) { _fun0022_ip = 178; continue _fun0022 }
case 151:
                    var2 = _closure2_slot60;
                    var1 = _closure2_slot20;
                    var2['current'] = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 33;
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
                    var6 = _closure2_slot46;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var1['permissions'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 178:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var33.bind(var18)(var27, var28);
            var28 = var18.useEffect;
            var27 = new Array(7);
            var27[0] = var4;
            var27[1] = var39;
            var27[2] = var23;
            var27[3] = var17;
            var27[4] = var21;
            var27[5] = var36;
            var27[6] = var44;
            var23 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = _closure2_slot20;
                    var3 = null;
                    var2 = var3 != var2;
                    if(var2) { _fun0023_ip = 179; continue _fun0023 }
case 33:
                    var4 = _closure2_slot41;
                    if(!var4) { _fun0023_ip = 45; continue _fun0023 }
case 180:
                    var5 = _closure2_slot42;
                    var4 = var3 == var5;
case 45:
                    var2 = var4;
case 179:
                    if(var2) { _fun0023_ip = 181; continue _fun0023 }
case 182:
                    var2 = _closure2_slot15;
                    if(!(var3 != var2)) { _fun0023_ip = 183; continue _fun0023 }
case 155:
                    var2 = _closure2_slot34;
                    if(var2) { _fun0023_ip = 183; continue _fun0023 }
case 177:
                    var5 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var4 = var2.CONNECT_ACCOUNT;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    _fun0023_ip = 181; continue _fun0023;
case 183:
                    var2 = _closure2_slot59;
                    var2 = var2.length;
                    var4 = 1;
                    if(!(!(var2 > var4))) { _fun0023_ip = 184; continue _fun0023 }
case 185:
                    var2 = _closure2_slot59;
                    var2 = var2.length;
                    if(!(var4 !== var2)) { _fun0023_ip = 186; continue _fun0023 }
case 187:
                    var2 = _closure2_slot10;
                    if(!(var3 == var2)) { _fun0023_ip = 188; continue _fun0023 }
case 60:
                    var5 = _closure2_slot36;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 28;
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
                    _fun0023_ip = 181; continue _fun0023;
case 188:
                    var3 = _closure2_slot36;
                    var2 = _closure2_slot10;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.AUTHORIZE_SCOPES;
                    var2 = var3.bind(var4)(var2);
                    _fun0023_ip = 181; continue _fun0023;
case 186:
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
                    _fun0023_ip = 181; continue _fun0023;
case 184:
                    var3 = _closure2_slot21;
                    var1 = _closure1_slot14;
                    var2 = var1.SELECT_INSTALL_TYPE;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 181:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var28.bind(var18)(var23, var27);
            var27 = var18.useEffect;
            var23 = new Array(3);
            var23[0] = var21;
            var23[1] = var44;
            var23[2] = var17;
            var17 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = _closure2_slot20;
                    var3 = _closure1_slot14;
                    var3 = var3.CONNECT_ACCOUNT;
                    var3 = var4 === var3;
                    if(!var3) { _fun0024_ip = 45; continue _fun0024 }
case 143:
                    var3 = _closure2_slot34;
case 45:
                    if(!var3) { _fun0024_ip = 189; continue _fun0024 }
case 179:
                    var5 = _closure2_slot36;
                    var4 = _closure2_slot10;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0024_ip = 183; continue _fun0024 }
case 155:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 28;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var3 = var3.ApplicationIntegrationType;
                    var4 = var3.USER_INSTALL;
                    _fun0024_ip = 190; continue _fun0024;
case 183:
                    var4 = _closure2_slot10;
case 190:
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure2_slot21;
                    var1 = _closure1_slot14;
                    var1 = var1.AUTHORIZE_SCOPES;
                    var1 = var2.bind(var3)(var1);
case 189:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var27.bind(var18)(var17, var23);
            var23 = var18.useEffect;
            var17 = new Array(6);
            var17[0] = var16;
            var17[1] = var35;
            var17[2] = var46;
            var17[3] = var52;
            var17[4] = var20;
            var17[5] = var10;
            var16 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = _closure2_slot35;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0025_ip = 191; continue _fun0025 }
case 33:
                    var2 = _closure2_slot18;
                    if(!(var5 == var2)) { _fun0025_ip = 191; continue _fun0025 }
case 143:
                    var2 = _closure2_slot22;
                    if(!(var5 == var2)) { _fun0025_ip = 191; continue _fun0025 }
case 34:
                    var6 = _closure2_slot35;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 28;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.ApplicationIntegrationType;
                    var4 = var4.USER_INSTALL;
                    if(!(var6 === var4)) { _fun0025_ip = 192; continue _fun0025 }
case 54:
                    var4 = _closure2_slot27;
                    var4 = var4.bind(var3)(var5);
                    var4 = _closure2_slot29;
                    var4 = var4.bind(var3)(var5);
case 192:
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
                    if(!(var5 !== var4)) { _fun0025_ip = 161; continue _fun0025 }
case 193:
                    var4 = var7.length;
                    if(!(!(var4 > var5))) { _fun0025_ip = 194; continue _fun0025 }
case 195:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 34;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.containsDisallowedPermission;
                    var2 = _closure2_slot46;
                    var2 = var4.bind(var6)(var2);
                    if(var2) { _fun0025_ip = 196; continue _fun0025 }
case 197:
                    var2 = _closure2_slot58;
                    var2 = var2.bind(var3)();
                    _fun0025_ip = 191; continue _fun0025;
case 196:
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
                    _fun0025_ip = 191; continue _fun0025;
case 194:
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
                    _fun0025_ip = 191; continue _fun0025;
case 161:
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
case 191:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var23.bind(var18)(var16, var17);
            var17 = var18.useCallback;
            var16 = new Array(2);
            var16[0] = var15;
            var16[1] = var12;
            var15 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = _closure2_slot40;
                    if(!var2) { _fun0026_ip = 198; continue _fun0026 }
case 40:
                    var3 = _closure2_slot37;
                    var2 = !var3;
case 198:
                    if(!var2) { _fun0026_ip = 52; continue _fun0026 }
case 151:
                    var3 = _closure2_slot38;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var17.bind(var18)(var15, var16);
            var15 = _closure1_slot14;
            var15 = var15.AUTHORIZE_SCOPES;
            if(!(var21 === var15)) { _fun0001_ip = 199; continue _fun0001 }
case 200:
            var4 = var4.length;
            if(!(!(var4 > var14))) { _fun0001_ip = 201; continue _fun0001 }
case 199:
            var4 = _closure1_slot14;
            var4 = var4.AUTHORIZE_BOT_PERMISSIONS;
            var14 = undefined;
            if(!(var21 === var4)) { _fun0001_ip = 202; continue _fun0001 }
case 203:
            var4 = _closure1_slot14;
            var4 = var4.AUTHORIZE_SCOPES;
            _closure2_slot61 = var4;
            var14 = var4;
            _fun0001_ip = 202; continue _fun0001;
case 201:
            var4 = _closure1_slot14;
            var4 = var4.SELECT_INSTALL_TYPE;
            _closure2_slot61 = var4;
            var14 = var4;
case 202:
            var16 = _closure1_slot6;
            var15 = var16.useCallback;
            var4 = new Array(3);
            var4[0] = var14;
            var4[1] = var1;
            var4[2] = var13;
            var1 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot61;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0027_ip = 32; continue _fun0027 }
case 28:
                    var5 = _closure2_slot54;
                    var3 = undefined;
                    var2 = {'isAuthorized': false, 'canceled': true};
                    var2 = var5.bind(var3)(var2);
                    var2 = _closure2_slot13;
                    if(!(var4 != var2)) { _fun0027_ip = 75; continue _fun0027 }
case 50:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var3)();
                    _fun0027_ip = 75; continue _fun0027;
case 32:
                    var3 = _closure2_slot21;
                    var2 = _closure2_slot61;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 75:
                    var1 = true;
                    return var1;
                }
            };
            var4 = var15.bind(var16)(var1, var4);
            _closure2_slot62 = var4;
            var15 = _closure1_slot1;
            var17 = _closure1_slot3;
            var1 = 35;
            var1 = var17[var1];
            var1 = var15.bind(var6)(var1);
            var1 = var1.bind(var6)(var4, var8);
            var15 = var16.useCallback;
            var8 = function(arg1) {
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
            var38 = var15.bind(var16)(var8, var1);
            var15 = var16.useCallback;
            var8 = function(arg1, arg2) {
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
                        if(var1) { _fun0028_ip = 177; continue _fun0028 }
case 34:
                        var3 = var4.add;
                        var1 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var1);
                        _fun0028_ip = 75; continue _fun0028;
case 177:
                        var3 = var4.remove;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var5, var2);
case 75:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var47 = var15.bind(var16)(var8, var1);
            var15 = global;
            var1 = var15.Error;
            var1 = var10 instanceof var1;
            if(var1) { _fun0001_ip = 204; continue _fun0001 }
case 205:
            var1 = var29 != var36;
            var57 = '';
            var33 = var57;
            if(!var1) { _fun0001_ip = 206; continue _fun0001 }
case 207:
            var8 = _closure1_slot1;
            var16 = _closure1_slot3;
            var1 = 40;
            var1 = var16[var1];
            var8 = var8.bind(var6)(var1);
            var1 = var8.get;
            var8 = var1.bind(var8)(var36);
            var16 = var29 == var8;
            var1 = undefined;
            if(var16) { _fun0001_ip = 208; continue _fun0001 }
case 209:
            var1 = var8.name;
case 208:
            var8 = var29 != var1;
            var33 = var57;
            if(!var8) { _fun0001_ip = 206; continue _fun0001 }
case 210:
            var33 = var1;
case 206:
            if(!(var29 !== var21)) { _fun0001_ip = 211; continue _fun0001 }
case 212:
            var1 = _closure1_slot14;
            var1 = var1.CONNECT_ACCOUNT;
            if(!(var1 !== var21)) { _fun0001_ip = 213; continue _fun0001 }
case 214:
            var1 = _closure1_slot14;
            var1 = var1.SELECT_INSTALL_TYPE;
            if(!(var1 !== var21)) { _fun0001_ip = 215; continue _fun0001 }
case 216:
            var1 = _closure1_slot14;
            var1 = var1.AUTHORIZE_SCOPES;
            if(!(var1 !== var21)) { _fun0001_ip = 217; continue _fun0001 }
case 218:
            var1 = _closure1_slot14;
            var40 = var1.AUTHORIZE_BOT_PERMISSIONS;
            var16 = undefined;
            var23 = undefined;
            var8 = false;
            var28 = false;
            var17 = true;
            var1 = true;
            if(!(var40 === var21)) { _fun0001_ip = 219; continue _fun0001 }
case 220:
            if(!(var29 != var20)) { _fun0001_ip = 221; continue _fun0001 }
case 222:
            var45 = _closure1_slot17;
            var43 = _closure1_slot1;
            var51 = _closure1_slot3;
            var40 = 50;
            var40 = var51[var40];
            var43 = var43.bind(var6)(var40);
            var40 = {};
            var51 = var20.application;
            var40['application'] = var51;
            var40['permissions'] = var46;
            var40['deniedPermissions'] = var49;
            var40['onPermissionsChange'] = var47;
            var40['guild'] = var42;
            var16 = var45.bind(var6)(var43, var40);
            var23 = undefined;
            var8 = true;
            var28 = false;
            var17 = true;
            var1 = true;
            _fun0001_ip = 219; continue _fun0001;
case 221:
            var18 = {};
            var43 = _closure1_slot17;
            var40 = {};
            var40 = var43.bind(var6)(var9, var40);
            var18['body'] = var40;
            var18['obscured'] = var2;
            return var18;
case 217:
            if(!(var29 != var20)) { _fun0001_ip = 223; continue _fun0001 }
case 224:
            if(!(var29 != var24)) { _fun0001_ip = 223; continue _fun0001 }
case 225:
            if(!(var29 != var52)) { _fun0001_ip = 223; continue _fun0001 }
case 226:
            if(!(var29 != var10)) { _fun0001_ip = 227; continue _fun0001 }
case 228:
            var15 = var15.Error;
            var15 = var10 instanceof var15;
            var59 = var10;
            if(!var15) { _fun0001_ip = 229; continue _fun0001 }
case 227:
            var59 = {};
case 229:
            var15 = var29 == var19;
            var60 = undefined;
            if(var15) { _fun0001_ip = 230; continue _fun0001 }
case 231:
            var18 = var19.sort;
            var15 = function(arg1, arg2) {
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
            var60 = var18.bind(var19)(var15);
case 230:
            var18 = _closure1_slot0;
            var15 = _closure1_slot3;
            var43 = 28;
            var15 = var15[var43];
            var15 = var18.bind(var6)(var15);
            var15 = var15.ApplicationIntegrationType;
            var15 = var15.GUILD_INSTALL;
            var15 = var52 === var15;
            if(!var15) { _fun0001_ip = 232; continue _fun0001 }
case 233:
            var19 = var35.includes;
            var40 = _closure1_slot0;
            var45 = _closure1_slot3;
            var18 = 43;
            var18 = var45[var18];
            var18 = var40.bind(var6)(var18);
            var18 = var18.OAuth2Scopes;
            var18 = var18.WEBHOOK_INCOMING;
            var15 = var19.bind(var35)(var18);
case 232:
            var18 = var15;
            if(var15) { _fun0001_ip = 234; continue _fun0001 }
case 235:
            var40 = _closure1_slot0;
            var19 = _closure1_slot3;
            var19 = var19[var43];
            var19 = var40.bind(var6)(var19);
            var19 = var19.ApplicationIntegrationType;
            var19 = var19.GUILD_INSTALL;
            var19 = var52 === var19;
            if(!var19) { _fun0001_ip = 236; continue _fun0001 }
case 237:
            var43 = var35.includes;
            var45 = _closure1_slot0;
            var40 = _closure1_slot3;
            var49 = 43;
            var40 = var40[var49];
            var40 = var45.bind(var6)(var40);
            var40 = var40.OAuth2Scopes;
            var40 = var40.BOT;
            var40 = var43.bind(var35)(var40);
            if(var40) { _fun0001_ip = 238; continue _fun0001 }
case 239:
            var45 = var35.includes;
            var47 = _closure1_slot0;
            var43 = _closure1_slot3;
            var43 = var43[var49];
            var43 = var47.bind(var6)(var43);
            var43 = var43.OAuth2Scopes;
            var43 = var43.APPLICATIONS_COMMANDS;
            var40 = var45.bind(var35)(var43);
case 238:
            var19 = var40;
case 236:
            var18 = var19;
case 234:
            var40 = _closure1_slot0;
            var43 = _closure1_slot3;
            var19 = 44;
            var19 = var43[var19];
            var43 = var40.bind(var6)(var19);
            var40 = var43.getIsSocialLayerParentApplication;
            var19 = var20.application;
            var51 = var40.bind(var43)(var19);
            var43 = _closure1_slot19;
            var40 = _closure1_slot18;
            var19 = {};
            var47 = var29 != var25;
            var45 = null;
            if(!var47) { _fun0001_ip = 240; continue _fun0001 }
case 241:
            var45 = null;
            if(!var44) { _fun0001_ip = 240; continue _fun0001 }
case 242:
            var49 = _closure1_slot17;
            var47 = _closure1_slot0;
            var53 = _closure1_slot3;
            var44 = 41;
            var44 = var53[var44];
            var44 = var47.bind(var6)(var44);
            var47 = var44.ConnectedAccountCard;
            var44 = {};
            var53 = var25.type;
            var44['platformType'] = var53;
            var44['platformName'] = var33;
            var44['connectedAccount'] = var25;
            var53 = var20.application;
            var53 = var53.name;
            var44['applicationName'] = var53;
            var45 = var49.bind(var6)(var47, var44);
case 240:
            var44 = new Array(5);
            var44[0] = var45;
            var49 = _closure1_slot17;
            var47 = _closure1_slot1;
            var53 = _closure1_slot3;
            var45 = 45;
            var45 = var53[var45];
            var54 = var47.bind(var6)(var45);
            var45 = {};
            var63 = var20.application;
            var45['application'] = var63;
            var45['accountScopes'] = var22;
            var45 = var49.bind(var6)(var54, var45);
            var44[1] = var45;
            var45 = 46;
            var45 = var53[var45];
            var47 = var47.bind(var6)(var45);
            var45 = {};
            var53 = var20.application;
            var45['application'] = var53;
            var45['accountScopes'] = var22;
            var45['requestedScopes'] = var35;
            var45['integrationType'] = var52;
            var45['errors'] = var59;
            if(var50) { _fun0001_ip = 243; continue _fun0001 }
case 244:
            var50 = var51;
case 243:
            var45['isTrustedName'] = var50;
            var45 = var49.bind(var6)(var47, var45);
            var44[2] = var45;
            var45 = null;
            if(!var18) { _fun0001_ip = 245; continue _fun0001 }
case 246:
            var50 = _closure1_slot19;
            var49 = _closure1_slot18;
            var47 = {};
            var54 = _closure1_slot17;
            var64 = _closure1_slot0;
            var63 = _closure1_slot3;
            var51 = 47;
            var51 = var63[var51];
            var51 = var64.bind(var6)(var51);
            var52 = var51.AuthorizeFormSeparator;
            var51 = {};
            var52 = var54.bind(var6)(var52, var51);
            var51 = new Array(2);
            var51[0] = var52;
            var53 = _closure1_slot1;
            var52 = 48;
            var52 = var63[var52];
            var53 = var53.bind(var6)(var52);
            var52 = {};
            var66 = 43;
            var63 = var63[var66];
            var63 = var64.bind(var6)(var63);
            var63 = var63.OAuth2Scopes;
            var63 = var63.BOT;
            var63 = var59[var63];
            if(!(var29 == var63)) { _fun0001_ip = 247; continue _fun0001 }
case 248:
            var65 = _closure1_slot0;
            var64 = _closure1_slot3;
            var64 = var64[var66];
            var64 = var65.bind(var6)(var64);
            var64 = var64.OAuth2Scopes;
            var64 = var64.APPLICATIONS_COMMANDS;
            var63 = var59[var64];
case 247:
            if(!(var29 == var63)) { _fun0001_ip = 249; continue _fun0001 }
case 250:
            var63 = new Array(0);
case 249:
            var63 = var63[var58];
            var52['error'] = var63;
            var52['selectedGuildId'] = var56;
            var52['onGuildChange'] = var62;
            if(!(var29 == var60)) { _fun0001_ip = 251; continue _fun0001 }
case 252:
            var60 = new Array(0);
case 251:
            var52['guilds'] = var60;
            var57 = var57 !== var56;
            if(!var57) { _fun0001_ip = 253; continue _fun0001 }
case 254:
            var60 = true;
            var57 = var60 === var61;
case 253:
            var52['disabled'] = var57;
            var52 = var54.bind(var6)(var53, var52);
            var51[1] = var52;
            var47['children'] = var51;
            var45 = var50.bind(var6)(var49, var47);
case 245:
            var44[3] = var45;
            var45 = null;
            if(!var15) { _fun0001_ip = 255; continue _fun0001 }
case 256:
            var50 = _closure1_slot19;
            var49 = _closure1_slot18;
            var47 = {};
            var54 = _closure1_slot17;
            var60 = _closure1_slot0;
            var61 = _closure1_slot3;
            var51 = 47;
            var51 = var61[var51];
            var51 = var60.bind(var6)(var51);
            var52 = var51.AuthorizeFormSeparator;
            var51 = {};
            var52 = var54.bind(var6)(var52, var51);
            var51 = new Array(2);
            var51[0] = var52;
            var53 = _closure1_slot1;
            var52 = 49;
            var52 = var61[var52];
            var53 = var53.bind(var6)(var52);
            var52 = {};
            var57 = 43;
            var57 = var61[var57];
            var57 = var60.bind(var6)(var57);
            var57 = var57.OAuth2Scopes;
            var57 = var57.WEBHOOK_INCOMING;
            var57 = var59[var57];
            if(!(var29 == var57)) { _fun0001_ip = 257; continue _fun0001 }
case 258:
            var57 = new Array(0);
case 257:
            var57 = var57[var58];
            var52['error'] = var57;
            var52['selectedChannelId'] = var41;
            var52['selectedGuildId'] = var56;
            var52['onChannelChange'] = var55;
            var52 = var54.bind(var6)(var53, var52);
            var51[1] = var52;
            var47['children'] = var51;
            var45 = var50.bind(var6)(var49, var47);
case 255:
            var44[4] = var45;
            var19['children'] = var44;
            var40 = var43.bind(var6)(var40, var19);
            var43 = var35.includes;
            var44 = _closure1_slot0;
            var45 = _closure1_slot3;
            var19 = 43;
            var19 = var45[var19];
            var19 = var44.bind(var6)(var19);
            var19 = var19.OAuth2Scopes;
            var19 = var19.BOT;
            var43 = var43.bind(var35)(var19);
            if(!var43) { _fun0001_ip = 259; continue _fun0001 }
case 260:
            var47 = _closure1_slot2;
            var19 = _closure1_slot3;
            var44 = 21;
            var44 = var19[var44];
            var45 = var47.bind(var6)(var44);
            var44 = var45.equals;
            var19 = var19[var48];
            var19 = var47.bind(var6)(var19);
            var19 = var19.NONE;
            var19 = var44.bind(var45)(var46, var19);
            var43 = !var19;
case 259:
            var19 = undefined;
            if(!var43) { _fun0001_ip = 261; continue _fun0001 }
case 262:
            var43 = _closure1_slot14;
            var43 = var43.AUTHORIZE_BOT_PERMISSIONS;
            _closure2_slot63 = var43;
            var19 = var43;
case 261:
            if(!var18) { _fun0001_ip = 263; continue _fun0001 }
case 264:
            var18 = var29 == var42;
case 263:
            if(var18) { _fun0001_ip = 265; continue _fun0001 }
case 266:
            if(!var15) { _fun0001_ip = 267; continue _fun0001 }
case 268:
            var15 = var29 == var41;
case 267:
            var18 = var15;
case 265:
            if(var18) { _fun0001_ip = 269; continue _fun0001 }
case 270:
            var18 = !var12;
case 269:
            var8 = true;
            var28 = var18;
            var16 = var40;
            var23 = var19;
            var17 = true;
            var1 = true;
            _fun0001_ip = 219; continue _fun0001;
case 223:
            var15 = {};
            var19 = _closure1_slot17;
            var18 = {};
            var18 = var19.bind(var6)(var9, var18);
            var15['body'] = var18;
            var15['obscured'] = var2;
            return var15;
case 215:
            if(!(var29 != var39)) { _fun0001_ip = 271; continue _fun0001 }
case 272:
            var19 = _closure1_slot17;
            var18 = _closure1_slot1;
            var40 = _closure1_slot3;
            var15 = 42;
            var15 = var40[var15];
            var18 = var18.bind(var6)(var15);
            var15 = {};
            var15['application'] = var39;
            var15['onSelect'] = var38;
            var16 = var19.bind(var6)(var18, var15);
            var23 = undefined;
            var8 = false;
            var28 = false;
            var17 = false;
            var1 = false;
            _fun0001_ip = 219; continue _fun0001;
case 271:
            var15 = {};
            var19 = _closure1_slot17;
            var18 = {};
            var18 = var19.bind(var6)(var9, var18);
            var15['body'] = var18;
            var15['obscured'] = var2;
            return var15;
case 213:
            var19 = _closure1_slot17;
            var18 = _closure1_slot1;
            var38 = _closure1_slot3;
            var15 = 41;
            var15 = var38[var15];
            var18 = var18.bind(var6)(var15);
            var15 = {};
            var15['clientId'] = var37;
            var15['platformType'] = var36;
            var15['platformName'] = var33;
            var16 = var19.bind(var6)(var18, var15);
            var8 = true;
            var23 = undefined;
            var28 = false;
            var17 = false;
            var1 = false;
case 219:
            var15 = undefined;
            if(!var17) { _fun0001_ip = 273; continue _fun0001 }
case 274:
            var17 = _closure1_slot14;
            var17 = var17.AUTHORIZE_BOT_PERMISSIONS;
            var15 = undefined;
            if(!(var23 !== var17)) { _fun0001_ip = 273; continue _fun0001 }
case 275:
            var17 = var29 != var20;
            var15 = undefined;
            if(!var17) { _fun0001_ip = 273; continue _fun0001 }
case 276:
            var17 = var29 == var20;
            var33 = undefined;
            if(var17) { _fun0001_ip = 277; continue _fun0001 }
case 278:
            var17 = var20.application;
            var33 = var17.approximate_guild_count;
case 277:
            if(!(var29 == var33)) { _fun0001_ip = 279; continue _fun0001 }
case 280:
            var18 = var29 == var20;
            var17 = undefined;
            if(var18) { _fun0001_ip = 281; continue _fun0001 }
case 282:
            var18 = var20.bot;
            var19 = var29 == var18;
            var17 = undefined;
            if(var19) { _fun0001_ip = 281; continue _fun0001 }
case 283:
            var17 = var18.approximate_guild_count;
case 281:
            var33 = var17;
case 279:
            var19 = _closure1_slot17;
            var18 = _closure1_slot1;
            var36 = _closure1_slot3;
            var17 = 51;
            var17 = var36[var17];
            var18 = var18.bind(var6)(var17);
            var17 = {};
            var36 = var20.application;
            var17['application'] = var36;
            var17['scopes'] = var35;
            var17['disclosures'] = var32;
            var35 = var20.redirect_uri;
            var36 = var29 != var35;
            var32 = null;
            if(!var36) { _fun0001_ip = 284; continue _fun0001 }
case 285:
            var32 = var35;
case 284:
            var17['redirectUri'] = var32;
            var32 = null;
            if(!(var6 !== var33)) { _fun0001_ip = 286; continue _fun0001 }
case 287:
            var32 = var33;
case 286:
            var17['approximateGuildCount'] = var32;
            var17['isEmbeddedFlow'] = var31;
            var17['connectedAccount'] = var25;
            var15 = var19.bind(var6)(var18, var17);
case 273:
            if(!var1) { _fun0001_ip = 288; continue _fun0001 }
case 289:
            var1 = var29 != var20;
case 288:
            if(!var1) { _fun0001_ip = 290; continue _fun0001 }
case 291:
            var1 = var29 != var24;
case 290:
            var17 = undefined;
            if(!var1) { _fun0001_ip = 292; continue _fun0001 }
case 293:
            var19 = _closure1_slot17;
            var18 = _closure1_slot1;
            var25 = _closure1_slot3;
            var1 = 52;
            var1 = var25[var1];
            var18 = var18.bind(var6)(var1);
            var1 = {};
            var1['user'] = var24;
            var24 = var20.application;
            var1['application'] = var24;
            var1['accountScopes'] = var22;
            var20 = var20.bot;
            var1['bot'] = var20;
            var17 = var19.bind(var6)(var18, var1);
case 292:
            var25 = var28;
            if(!var28) { _fun0001_ip = 294; continue _fun0001 }
case 295:
            var25 = !var12;
case 294:
            var1 = {};
            var1['header'] = var17;
            var1['body'] = var16;
            var18 = _closure1_slot17;
            var17 = _closure1_slot18;
            var16 = {};
            var19 = _closure1_slot14;
            var20 = var19.SELECT_INSTALL_TYPE;
            var19 = null;
            if(!(var21 !== var20)) { _fun0001_ip = 296; continue _fun0001 }
case 297:
            var20 = _closure1_slot14;
            var20 = var20.CONNECT_ACCOUNT;
            var19 = null;
            if(!(var21 !== var20)) { _fun0001_ip = 296; continue _fun0001 }
case 298:
            var22 = _closure1_slot17;
            var21 = _closure1_slot7;
            var20 = {};
            var20['accessibilityElementsHidden'] = var25;
            var24 = 'auto';
            if(!var25) { _fun0001_ip = 299; continue _fun0001 }
case 300:
            var24 = 'no-hide-descendants';
case 299:
            var20['importantForAccessibility'] = var24;
            var25 = _closure1_slot17;
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var24 = 37;
            var24 = var32[var24];
            var24 = var31.bind(var6)(var24);
            var24 = var24.Button;
            if(!(var29 == var23)) { _fun0001_ip = 301; continue _fun0001 }
case 302:
            var23 = {};
            var29 = 'lg';
            var23['size'] = var29;
            var31 = _closure1_slot0;
            var29 = _closure1_slot3;
            var35 = 38;
            var32 = var29[var35];
            var32 = var31.bind(var6)(var32);
            var36 = var32.intl;
            var33 = var36.string;
            var29 = var29[var35];
            var29 = var31.bind(var6)(var29);
            var32 = var29.t;
            if(var28) { _fun0001_ip = 303; continue _fun0001 }
case 304:
            var29 = var32.y+/PE9;
            var29 = var33.bind(var36)(var29);
            _fun0001_ip = 305; continue _fun0001;
case 303:
            if(var12) { _fun0001_ip = 306; continue _fun0001 }
case 307:
            var31 = var32.N22i9F;
            var31 = var33.bind(var36)(var31);
            _fun0001_ip = 308; continue _fun0001;
case 306:
            var32 = var32.BwwiSM;
            var31 = var33.bind(var36)(var32);
case 308:
            var29 = var31;
case 305:
            var23['text'] = var29;
            var29 = function onPress() {
                var3 = _closure2_slot56;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var23['onPress'] = var29;
            var29 = undefined;
            if(var12) { _fun0001_ip = 309; continue _fun0001 }
case 310:
            var33 = _closure1_slot17;
            var37 = _closure1_slot1;
            var38 = _closure1_slot3;
            var31 = var38[var30];
            var31 = var37.bind(var6)(var31);
            var32 = var31.View;
            var31 = {};
            var31['style'] = var34;
            var36 = 53;
            var36 = var38[var36];
            var37 = var37.bind(var6)(var36);
            var36 = {};
            var38 = _closure1_slot8;
            var40 = var38.convert;
            var39 = var40.fromCodePoint;
            var38 = _closure1_slot13;
            var38 = var39.bind(var40)(var38);
            var36['name'] = var38;
            var36 = var33.bind(var6)(var37, var36);
            var31['children'] = var36;
            var29 = var33.bind(var6)(var32, var31);
case 309:
            var23['icon'] = var29;
            var29 = 'end';
            var23['iconPosition'] = var29;
            var29 = var28;
            if(var28) { _fun0001_ip = 311; continue _fun0001 }
case 312:
            var29 = var5;
case 311:
            var23['disabled'] = var29;
            var23['loading'] = var26;
            var29 = {};
            var26 = 'enable';
            var29['name'] = var26;
            var33 = _closure1_slot0;
            var26 = _closure1_slot3;
            var31 = var26[var35];
            var31 = var33.bind(var6)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var26 = var26[var35];
            var26 = var33.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.eIL75W;
            var26 = var31.bind(var32)(var26);
            var29['label'] = var26;
            var26 = new Array(1);
            var26[0] = var29;
            var23['accessibilityActions'] = var26;
            var23['onAccessibilityAction'] = var27;
            _fun0001_ip = 313; continue _fun0001;
case 301:
            var26 = {};
            var29 = 'lg';
            var26['size'] = var29;
            var31 = _closure1_slot0;
            var29 = _closure1_slot3;
            var33 = 38;
            var32 = var29[var33];
            var32 = var31.bind(var6)(var32);
            var36 = var32.intl;
            var35 = var36.string;
            var29 = var29[var33];
            var29 = var31.bind(var6)(var29);
            var32 = var29.t;
            if(var28) { _fun0001_ip = 314; continue _fun0001 }
case 315:
            var29 = var32["3PatSz"];
            var29 = var35.bind(var36)(var29);
            _fun0001_ip = 316; continue _fun0001;
case 314:
            if(var12) { _fun0001_ip = 317; continue _fun0001 }
case 318:
            var31 = var32.N22i9F;
            var31 = var35.bind(var36)(var31);
            _fun0001_ip = 319; continue _fun0001;
case 317:
            var32 = var32.BwwiSM;
            var31 = var35.bind(var36)(var32);
case 319:
            var29 = var31;
case 316:
            var26['text'] = var29;
            var29 = undefined;
            if(var12) { _fun0001_ip = 320; continue _fun0001 }
case 321:
            var29 = undefined;
            if(!var28) { _fun0001_ip = 320; continue _fun0001 }
case 322:
            var32 = _closure1_slot17;
            var35 = _closure1_slot1;
            var36 = _closure1_slot3;
            var30 = var36[var30];
            var30 = var35.bind(var6)(var30);
            var31 = var30.View;
            var30 = {};
            var30['style'] = var34;
            var34 = 53;
            var34 = var36[var34];
            var35 = var35.bind(var6)(var34);
            var34 = {};
            var36 = _closure1_slot8;
            var38 = var36.convert;
            var37 = var38.fromCodePoint;
            var36 = _closure1_slot13;
            var36 = var37.bind(var38)(var36);
            var34['name'] = var36;
            var34 = var32.bind(var6)(var35, var34);
            var30['children'] = var34;
            var29 = var32.bind(var6)(var31, var30);
case 320:
            var26['icon'] = var29;
            var29 = 'end';
            var26['iconPosition'] = var29;
            var29 = function onPress() {
                var3 = _closure2_slot21;
                var2 = _closure2_slot63;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var26['onPress'] = var29;
            if(var28) { _fun0001_ip = 323; continue _fun0001 }
case 324:
            var28 = var5;
case 323:
            var26['disabled'] = var28;
            var29 = {};
            var28 = 'enable';
            var29['name'] = var28;
            var32 = _closure1_slot0;
            var28 = _closure1_slot3;
            var30 = var28[var33];
            var30 = var32.bind(var6)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var28 = var28[var33];
            var28 = var32.bind(var6)(var28);
            var28 = var28.t;
            var28 = var28.eIL75W;
            var28 = var30.bind(var31)(var28);
            var29['label'] = var28;
            var28 = new Array(1);
            var28[0] = var29;
            var26['accessibilityActions'] = var28;
            var26['onAccessibilityAction'] = var27;
            var23 = var26;
case 313:
            var23 = var25.bind(var6)(var24, var23);
            var20['children'] = var23;
            var19 = var22.bind(var6)(var21, var20);
case 296:
            var16['children'] = var19;
            var16 = var18.bind(var6)(var17, var16);
            var1['footer'] = var16;
            var1['appDetails'] = var15;
            var1['backStep'] = var14;
            var1['sendAuthorize'] = var13;
            var1['goBackOrCancel'] = var4;
            var1['allContentSeen'] = var12;
            var1['setAllContentSeen'] = var11;
            var1['hasContentBackground'] = var8;
            var1['obscured'] = var5;
            return var1;
case 211:
            var1 = {};
            var8 = _closure1_slot17;
            var5 = {};
            var5 = var8.bind(var6)(var9, var5);
            var1['body'] = var5;
            var1['obscured'] = var2;
            return var1;
case 204:
            var1 = {};
            var5 = _closure1_slot17;
            var9 = _closure1_slot1;
            var12 = _closure1_slot3;
            var8 = 36;
            var8 = var12[var8];
            var9 = var9.bind(var6)(var8);
            var8 = {};
            var10 = var10.message;
            var8['error'] = var10;
            var10 = true;
            var8['hideFooter'] = var10;
            var8 = var5.bind(var6)(var9, var8);
            var1['body'] = var8;
            var1['goBackOrCancel'] = var4;
            var11 = _closure1_slot0;
            var3 = 37;
            var3 = var12[var3];
            var3 = var11.bind(var6)(var3);
            var4 = var3.Button;
            var3 = {};
            var8 = 'lg';
            var3['size'] = var8;
            var8 = 38;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.cpT0Cq;
            var8 = var9.bind(var10)(var8);
            var3['text'] = var8;
            var7 = function onPress() {
                var2 = _closure2_slot62;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var3['onPress'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var1['footer'] = var3;
            var1['obscured'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();