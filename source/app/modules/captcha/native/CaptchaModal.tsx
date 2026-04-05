// app/modules/captcha/native/CaptchaModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Keyboard;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.doesRegistrationHaveIdentityType;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot7 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'alignItems': 'center', 'paddingVertical': 8};
            var3 = 8;
            var4 = arg1;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 32;
case 2:
            var2['paddingHorizontal'] = var3;
            var1['contentContainer'] = var2;
            var2 = {'paddingBottom': 12, 'paddingTop': 4};
            var1['description'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/captcha/native/CaptchaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CaptchaModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.onCaptchaVerify;
            var _closure2_slot0 = var2;
            var6 = var1.onReject;
            var _closure2_slot1 = var6;
            var2 = var1.close;
            var _closure2_slot2 = var2;
            var2 = var1.sitekey;
            var _closure2_slot3 = var2;
            var2 = var1.captchaService;
            var _closure2_slot4 = var2;
            var16 = var1.headerText;
            var18 = var1.bodyText;
            var2 = var1.rqdata;
            var _closure2_slot5 = var2;
            var2 = var1.rqtoken;
            var _closure2_slot6 = var2;
            var1 = var1.userflow;
            var _closure2_slot7 = var1;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 6;
            var1 = var14[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var1 = _closure1_slot11;
            var20 = var1.bind(var4)(var3);
            var1 = 7;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var _closure2_slot8 = var1;
            var5 = _closure1_slot3;
            var7 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var2 = var1.routes;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = null;
                    var2 = var2 == var1;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var5 = var1.name;
case 4:
                    var3 = 'Guild Join Captcha';
                    var2 = 'auth';
                    var1 = var3;
                    if(!(var2 === var5)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = _closure1_slot6;
                    var2 = var2.bind(var4)();
                    var1 = var3;
                    if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                    var1 = 'User Registration Captcha';
case 6:
                    return var1;
                }
            };
            var3 = var7.bind(var5)(var1, var3);
            var1 = 8;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onReject'] = var6;
            var1['analyticsType'] = var3;
            var1 = var2.bind(var4)(var1);
            var _closure2_slot9 = var1;
            var3 = var5.useEffect;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot9;
            var15 = _closure1_slot0;
            var1 = 9;
            var1 = var14[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'startHeight': 900, 'startExpanded': true};
            var13 = true;
            var7 = _closure1_slot10;
            var5 = 10;
            var5 = var14[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var8 = var20.contentContainer;
            var5['style'] = var8;
            var21 = 12;
            var5['spacing'] = var21;
            var8 = 11;
            var8 = var14[var8];
            var8 = var15.bind(var4)(var8);
            var10 = var8.DisguiseSpotIllustration;
            var8 = {};
            var11 = 0.5;
            var8['scale'] = var11;
            var10 = var3.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var14[var21];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'heading-xl/bold', 'accessibilityRole': 'header'};
            var19 = null;
            if(!(var19 == var16)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 13;
            var22 = var25[var17];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var17 = var25[var17];
            var17 = var24.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.FpoiHe;
            var16 = var22.bind(var23)(var17);
case 9:
            var14['children'] = var16;
            var15 = var3.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot9;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var21];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/medium', 'color': 'text-subtle'};
            var20 = var20.description;
            var15['style'] = var20;
            if(!(var19 == var18)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 13;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19["/CidxO"];
            var18 = var20.bind(var21)(var19);
case 11:
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var10['children'] = var14;
            var10 = var7.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot9;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 14;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var9['grow'] = var13;
            var12 = function onPress() {
                var4 = _closure2_slot9;
                var1 = undefined;
                var4 = var4.bind(var1)();
                var4 = _closure2_slot2;
                var4 = var4.bind(var1)();
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 15;
                var5 = var6[var5];
                var8 = var7.bind(var1)(var5);
                var7 = var8.emitCaptchaDistributionMetric;
                var5 = _closure2_slot7;
                var5 = var7.bind(var8)(var5);
                var5 = _closure1_slot1;
                var4 = 16;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.showCaptcha;
                var5 = _closure2_slot4;
                var4 = _closure2_slot3;
                var3 = _closure2_slot5;
                var5 = var6.bind(var7)(var5, var4, var3);
                var4 = var5.then;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var1 = var3.getState;
                        var1 = var1.bind(var3)();
                        var1 = var1.routes;
                        var4 = 0;
                        var1 = var1[var4];
                        var1 = var1.name;
                        var3 = 'auth';
                        var1 = var3 === var1;
                        if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var6 = _closure1_slot6;
                        var5 = undefined;
                        var1 = var6.bind(var5)();
case 13:
                        if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 17;
                        var5 = var5[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.trackRegTransition;
                        var1 = {};
                        var8 = _closure1_slot7;
                        var8 = var8.CAPTCHA;
                        var1['step'] = var8;
                        var7 = _closure1_slot8;
                        var7 = var7.SUBMITTED;
                        var1['actionType'] = var7;
                        var1 = var5.bind(var6)(var1);
case 15:
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot6;
                        var1 = undefined;
                        var5 = arg1;
                        var5 = var7.bind(var1)(var5, var6);
                        var5 = _closure2_slot8;
                        var2 = var5.getState;
                        var2 = var2.bind(var5)();
                        var2 = var2.routes;
                        var2 = var2[var4];
                        var2 = var2.name;
                        var2 = var3 === var2;
                        if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var3 = _closure1_slot6;
                        var2 = var3.bind(var1)();
case 17:
                        if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 17;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackRegTransition;
                        var2 = {};
                        var6 = _closure1_slot7;
                        var6 = var6.CAPTCHA;
                        var2['step'] = var6;
                        var5 = _closure1_slot8;
                        var5 = var5.SUCCESS;
                        var2['actionType'] = var5;
                        var2 = var3.bind(var4)(var2);
case 19:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var3 = _closure2_slot1;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
case 21:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9['onPress'] = var12;
            var12 = 13;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.cY+Oob;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();