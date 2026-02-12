// app/modules/captcha/tooling/native/CaptchaTestModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var9 = global;
    var8 = var9.Object;
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
    var15 = 1;
    var4 = var6[var15];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var7 = var6[var4];
    var13 = var5.bind(var1)(var7);
    var10 = var13.createStyles;
    var7 = {};
    var14 = {'flex': 1, 'justifyContent': 'space-between'};
    var11 = 6;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var14['backgroundColor'] = var16;
    var7['container'] = var14;
    var14 = {};
    var14['height'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var14['backgroundColor'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var14['marginVertical'] = var15;
    var7['separator'] = var14;
    var14 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var14['marginBottom'] = var15;
    var7['footerContainer'] = var14;
    var14 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var14['paddingHorizontal'] = var15;
    var7['footerButton'] = var14;
    var14 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var14['margin'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var14['gap'] = var15;
    var7['content'] = var14;
    var7 = var10.bind(var13)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var10 = var6[var7];
    var10 = var5.bind(var1)(var10);
    var14 = var10.HCAPTCHA_DIFFICULTY_OPTIONS;
    var13 = var14.map;
    var10 = function(arg1) {
        var1 = arg1;
        var3 = var1.label;
        var2 = var1.value;
        var1 = {};
        var1['name'] = var3;
        var1['value'] = var2;
        return var1;
    };
    var10 = var13.bind(var14)(var10);
    var _closure1_slot10 = var10;
    var13 = var9.Set;
    var10 = 8;
    var9 = var6[var10];
    var9 = var5.bind(var1)(var9);
    var9 = var9.CaptchaDeciderType;
    var14 = var9.HCAPTCHA_RQDATA;
    var9 = new Array(2);
    var9[0] = var14;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.CaptchaDeciderType;
    var10 = var10.SMITE_RQDATA;
    var9[1] = var10;
    var10 = var13.prototype;
    var10 = Object.create(var10, {constructor: {value: var13}});
    var20 = var10;
    var19 = var9;
    var9 = new var20[var13](var19, var18);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot11 = var9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.CAPTCHA_DECIDER_TYPE_OPTIONS;
    var9 = var10.map;
    var7 = function(arg1) {
        var1 = arg1;
        var3 = var1.label;
        var2 = var1.value;
        var1 = {};
        var1['name'] = var3;
        var1['value'] = var2;
        return var1;
    };
    var10 = var9.bind(var10)(var7);
    var9 = var10.filter;
    var7 = function(arg1) {
        var1 = arg1;
        var3 = var1.value;
        var2 = _closure1_slot11;
        var1 = var2.has;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var7 = var9.bind(var10)(var7);
    var _closure1_slot12 = var7;
    var7 = {};
    var9 = 'TEST_CAPTCHA';
    var7['TEST_CAPTCHA'] = var9;
    var _closure1_slot13 = var7;
    var7 = 9;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var10 = var9.Text;
    var9 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary', 'children': 'Decider'};
    var9 = var8.bind(var1)(var10, var9);
    var _closure1_slot14 = var9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.Text;
    var7 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary', 'children': 'Difficulty'};
    var7 = var8.bind(var1)(var9, var7);
    var _closure1_slot15 = var7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var11;
    var4['headerStyle'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var7 = function CaptchaTestScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = null;
            if(!(var2 != var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = undefined;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot9;
            var14 = var1.bind(var5)();
            var8 = _closure1_slot5;
            var1 = var8.useState;
            var1 = var1.bind(var8)(var10);
            var7 = _closure1_slot4;
            var6 = 2;
            var1 = var7.bind(var5)(var1, var6);
            var4 = 0;
            var9 = var1[var4];
            _closure2_slot0 = var9;
            var3 = 1;
            var1 = var1[var3];
            _closure2_slot1 = var1;
            var1 = var8.useState;
            var1 = var1.bind(var8)(var10);
            var1 = var7.bind(var5)(var1, var6);
            var21 = var1[var4];
            _closure2_slot2 = var21;
            var1 = var1[var3];
            _closure2_slot3 = var1;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var2 = _closure2_slot0;
                            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7: // try_start_0
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var5 = undefined;
                            var7 = var4.bind(var5)(var2);
                            var6 = var7.testCaptcha;
                            var4 = _closure2_slot0;
                            var2 = {};
                            var10 = _closure2_slot2;
                            var8 = null;
                            var10 = var8 != var10;
                            var8 = undefined;
                            if(!var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var8 = _closure2_slot2;
case 8:
                            var2['difficulty'] = var8;
                            var2 = var6.bind(var7)(var4, var2);
                            SaveGenerator(address=96);
case 10:
                            return var2;
case 11:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 10;
                            var3 = var6[var3];
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.open;
                            var3 = {'key': 'captcha-test-modal-success', 'content': 'Captcha completed!'};
                            var3 = var4.bind(var5)(var3);
case 14: // try_end0
                            _fun0002_ip = 6; continue _fun0002;
case 12:
                            return var2;
case 15: // catch_target0
                            CatchBlockStart(arg_register=4);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.open;
                            var2 = {};
                            var6 = 'captcha-test-modal-error';
                            var2['key'] = var6;
                            var5 = var5.message;
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
case 6:
                            var2 = undefined;
                            return var2;
case 4:
                            return var1;
                        }
                    };
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
            var16 = var1.bind(var5)();
            var4 = _closure1_slot8;
            var3 = _closure1_slot6;
            var1 = {};
            var6 = var14.container;
            var1['style'] = var6;
            var6 = {};
            var7 = var14.content;
            var6['style'] = var7;
            var7 = {};
            var10 = _closure1_slot14;
            var8 = new Array(2);
            var8[0] = var10;
            var15 = _closure1_slot7;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var22 = 11;
            var10 = var12[var22];
            var13 = var13.bind(var5)(var10);
            var10 = {};
            var18 = true;
            var10['withSpacing'] = var18;
            var10['value'] = var9;
            var17 = _closure1_slot12;
            var10['options'] = var17;
            var17 = function onChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.value;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.CaptchaDeciderType;
                    var1 = var1.HCAPTCHA_RQDATA;
                    if(!(var3 !== var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var4 = _closure2_slot3;
                    var1 = null;
                    var1 = var4.bind(var2)(var1);
case 16:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onChange'] = var17;
            var10 = var15.bind(var5)(var13, var10);
            var8[1] = var10;
            var7['children'] = var8;
            var8 = var4.bind(var5)(var3, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot0;
            var8 = 8;
            var8 = var12[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.CaptchaDeciderType;
            var8 = var8.HCAPTCHA_RQDATA;
            var8 = var9 === var8;
            if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = _closure1_slot8;
            var10 = _closure1_slot6;
            var9 = {};
            var15 = _closure1_slot15;
            var13 = new Array(2);
            var13[0] = var15;
            var19 = _closure1_slot7;
            var17 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var22];
            var17 = var17.bind(var5)(var15);
            var15 = {};
            var15['withSpacing'] = var18;
            var15['value'] = var21;
            var21 = _closure1_slot10;
            var15['options'] = var21;
            var20 = function onChange(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.value;
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.CaptchaDeciderType;
                    var1 = var1.HCAPTCHA_RQDATA;
                    var1 = var5 === var1;
                    if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var2 = _closure2_slot3;
                    var1 = var2.bind(var3)(var4);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['onChange'] = var20;
            var15 = var19.bind(var5)(var17, var15);
            var13[1] = var15;
            var9['children'] = var13;
            var8 = var12.bind(var5)(var10, var9);
case 18:
            var7[1] = var8;
            var6['children'] = var7;
            var7 = var4.bind(var5)(var3, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var14.footerContainer;
            var7['style'] = var10;
            var13 = _closure1_slot7;
            var10 = {};
            var12 = var14.separator;
            var10['style'] = var12;
            var12 = var13.bind(var5)(var8, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 12;
            var11 = var17[var11];
            var11 = var15.bind(var5)(var11);
            var12 = var11.SafeAreaPaddingView;
            var11 = {};
            var11['bottom'] = var18;
            var14 = var14.footerButton;
            var11['style'] = var14;
            var14 = 13;
            var14 = var17[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.Button;
            var14 = {};
            var14['onPress'] = var16;
            var16 = 'Submit';
            var14['text'] = var16;
            var14 = var13.bind(var5)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            return var1;
case 2:
            var23 = "Cannot destructure 'undefined' or 'null'.";
            var24 = var2;
            var1 = throwTypeError(var24, var23);
            var1 = undefined;
            throw var1;
        }
    };
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot17 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/captcha/tooling/native/CaptchaTestModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CaptchaTestModal() {
        var2 = _closure1_slot16;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var _closure2_slot0 = var7;
        var6 = _closure1_slot5;
        var3 = var6.useMemo;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = function getScreens(arg1) {
                var1 = {};
                var2 = _closure1_slot13;
                var3 = var2.TEST_CAPTCHA;
                var2 = {};
                var6 = arg1;
                var6 = var6.headerStyle;
                var2['headerStyle'] = var6;
                var6 = 'Captcha Test Tool';
                var2['headerTitle'] = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 14;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.getHeaderCloseButton;
                var5 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var2['headerLeft'] = var5;
                var4 = function render() {
                    var1 = _closure1_slot17;
                    return var1;
                };
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 16;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var5 = _closure1_slot13;
        var5 = var5.TEST_CAPTCHA;
        var1['initialRouteName'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.13/7kX;
        var5 = var6.bind(var7)(var5);
        var1['headerBackTitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();