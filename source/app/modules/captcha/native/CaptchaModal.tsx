// app/modules/captcha/native/CaptchaModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.Keyboard;
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
    var4 = {};
    var9 = {'alignItems': 'center', 'padding': 8};
    var4['contentContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/captcha/native/CaptchaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CaptchaModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            var12 = var1.headerText;
            var15 = var1.bodyText;
            var2 = var1.rqdata;
            var _closure2_slot5 = var2;
            var2 = var1.rqtoken;
            var _closure2_slot6 = var2;
            var1 = var1.userflow;
            var _closure2_slot7 = var1;
            var1 = _closure1_slot11;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var19 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var1 = var19.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var _closure2_slot8 = var1;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                    if(var2) { _fun0002_ip = 47; continue _fun0002 }
 42:
                    var5 = var1.name;
 47:
                    var3 = 'Guild Join Captcha';
                    var2 = 'auth';
                    var1 = var3;
                    if(!(var2 === var5)) { _fun0002_ip = 87; continue _fun0002 }
 64:
                    var2 = _closure1_slot6;
                    var2 = var2.bind(var4)();
                    var1 = var3;
                    if(!var2) { _fun0002_ip = 87; continue _fun0002 }
 81:
                    var1 = 'User Registration Captcha';
 87:
                    return var1;
                }
            };
            var3 = var3.bind(var5)(var1, var2);
            var1 = 7;
            var1 = var10[var1];
            var2 = var19.bind(var4)(var1);
            var1 = {};
            var1['onReject'] = var6;
            var1['analyticsType'] = var3;
            var1 = var2.bind(var4)(var1);
            var _closure2_slot9 = var1;
            var3 = var5.useEffect;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot9;
            var11 = _closure1_slot0;
            var1 = 8;
            var1 = var10[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'startHeight': 900, 'startExpanded': true};
            var14 = true;
            var7 = _closure1_slot10;
            var5 = 9;
            var5 = var10[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var8 = var8.contentContainer;
            var5['style'] = var8;
            var16 = 12;
            var5['spacing'] = var16;
            var17 = _closure1_slot4;
            var8 = {};
            var18 = 10;
            var18 = var10[var18];
            var18 = var19.bind(var4)(var18);
            var8['source'] = var18;
            var17 = var3.bind(var4)(var17, var8);
            var8 = new Array(4);
            var8[0] = var17;
            var18 = 11;
            var10 = var10[var18];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'heading-xl/bold', 'accessibilityRole': 'header'};
            var17 = null;
            if(!(var17 == var12)) { _fun0001_ip = 433; continue _fun0001 }
 379:
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = var19[var16];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var16];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.FpoiHR;
            var12 = var20.bind(var21)(var19);
 433:
            var10['children'] = var12;
            var10 = var3.bind(var4)(var11, var10);
            var8[1] = var10;
            var12 = _closure1_slot9;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var18];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            if(!(var17 == var15)) { _fun0001_ip = 545; continue _fun0001 }
 491:
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var16];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var16];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17./CidxM;
            var15 = var18.bind(var19)(var17);
 545:
            var10['children'] = var15;
            var10 = var12.bind(var4)(var11, var10);
            var8[2] = var10;
            var11 = _closure1_slot9;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var9['grow'] = var14;
            var13 = function onPress() {
                var4 = _closure2_slot9;
                var1 = undefined;
                var4 = var4.bind(var1)();
                var4 = _closure2_slot2;
                var4 = var4.bind(var1)();
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 14;
                var5 = var6[var5];
                var8 = var7.bind(var1)(var5);
                var7 = var8.emitCaptchaDistributionMetric;
                var5 = _closure2_slot7;
                var5 = var7.bind(var8)(var5);
                var5 = _closure1_slot1;
                var4 = 15;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.showCaptcha;
                var5 = _closure2_slot4;
                var4 = _closure2_slot3;
                var3 = _closure2_slot5;
                var5 = var6.bind(var7)(var5, var4, var3);
                var4 = var5.then;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot8;
                        var1 = var3.getState;
                        var1 = var1.bind(var3)();
                        var1 = var1.routes;
                        var4 = 0;
                        var1 = var1[var4];
                        var1 = var1.name;
                        var3 = 'auth';
                        var1 = var3 === var1;
                        if(!var1) { _fun0003_ip = 58; continue _fun0003 }
 45:
                        var6 = _closure1_slot6;
                        var5 = undefined;
                        var1 = var6.bind(var5)();
 58:
                        if(!var1) { _fun0003_ip = 129; continue _fun0003 }
 61:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 16;
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
 129:
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
                        if(!var2) { _fun0003_ip = 195; continue _fun0003 }
 184:
                        var3 = _closure1_slot6;
                        var2 = var3.bind(var1)();
 195:
                        if(!var2) { _fun0003_ip = 264; continue _fun0003 }
 198:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 16;
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
 264:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 27; continue _fun0004 }
 13:
                        var3 = _closure2_slot1;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9['onPress'] = var13;
            var13 = var12[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.cY+Ooa;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
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