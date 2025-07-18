// app/modules/user_settings/native/account/UserSettingsConfirmPassword.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = native4;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot6 = var5;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot10 = var5;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 8;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOBILE_SECONDARY;
    var10['backgroundColor'] = var13;
    var4['background'] = var10;
    var13 = 16;
    var10 = {'paddingVertical': 12, 'paddingHorizontal': 16};
    var4['container'] = var10;
    var10 = {};
    var14 = 'center';
    var10['textAlign'] = var14;
    var4['title'] = var10;
    var10 = {'marginTop': 8, 'lineHeight': 18, 'textAlign': 'center'};
    var4['prompt'] = var10;
    var10 = {};
    var14 = 24;
    var10['marginTop'] = var14;
    var4['input'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var4['redesignInput'] = var10;
    var10 = {};
    var10['marginTop'] = var13;
    var4['button'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var10['color'] = var11;
    var4['hint'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var5 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.onSubmit;
            var _closure2_slot0 = var3;
            var3 = var1.onSuccess;
            var _closure2_slot1 = var3;
            var3 = var1.onError;
            var _closure2_slot2 = var3;
            var17 = var1.parentLoading;
            var5 = undefined;
            if(!(var17 === var5)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var17 = false;
 49:
            var8 = var1.style;
            var6 = var1.hideUnverifiedBanner;
            if(!(var6 === var5)) { _fun0001_ip = 66; continue _fun0001 }
 64:
            var6 = false;
 66:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var18 = function handleSubmit() {
                var1 = undefined;
                var4 = _closure2_slot6;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = function _handleSubmit() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 470; continue _fun0002 }
 10:
                            var5 = undefined;
                            var6 = undefined;
                            var7 = _closure2_slot3;
                            var4 = true;
                            var4 = var7.bind(var5)(var4);
 28: // try_start_0 // try_start_3
                            var7 = _closure2_slot0;
                            var4 = _closure2_slot4;
                            var4 = var7.bind(var5)(var4);
                            SaveGenerator(address=45);
 43:
                            return var4;
 45:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 252; continue _fun0002 }
 54:
                            var6 = var4;
                            var8 = null;
                            if(!(var8 != var4)) { _fun0002_ip = 214; continue _fun0002 }
 66:
                            var7 = var6;
                            var9 = var7.status;
                            var7 = 400;
                            if(!(var9 >= var7)) { _fun0002_ip = 102; continue _fun0002 }
 84:
                            var7 = var6;
                            var9 = var7.status;
                            var7 = 599;
                            if(!(!(var9 <= var7))) { _fun0002_ip = 115; continue _fun0002 }
 102:
                            var7 = _closure2_slot1;
                            var7 = var7.bind(var5)();
 110: // try_end0
                            _fun0002_ip = 441; continue _fun0002;
 115: // try_start_1
                            var7 = _closure2_slot5;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 12;
                            var9 = var11[var9];
                            var9 = var10.bind(var5)(var9);
                            var10 = var9.V6OrEarlierAPIError;
                            var12 = var6;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {constructor: {value: var10}});
                            var13 = var9;
                            var6 = new var13[var10](var12, var11);
                            var6 = var6 instanceof Object ? var6 : var9;
                            var6 = var7.bind(var5)(var6);
                            var7 = _closure2_slot2;
                            var7 = var8 == var7;
                            var6 = var7;
                            if(var7) { _fun0002_ip = 198; continue _fun0002 }
 190:
                            var7 = _closure2_slot2;
                            var6 = var7.bind(var5)();
 198: // try_end1 // try_end3
                            var9 = _closure2_slot3;
                            var7 = false;
                            var7 = var9.bind(var5)(var7);
                            var6 = undefined;
                            return var6;
 214: // try_start_2 // try_start_4
                            var7 = _closure2_slot2;
                            var7 = var8 == var7;
                            var6 = var7;
                            if(var7) { _fun0002_ip = 236; continue _fun0002 }
 228:
                            var7 = _closure2_slot2;
                            var6 = var7.bind(var5)();
 236: // try_end2 // try_end4
                            var8 = _closure2_slot3;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
                            var6 = undefined;
                            return var6;
 252:
                            var7 = _closure2_slot3;
                            var6 = false;
                            var6 = var7.bind(var5)(var6);
                            return var4;
 266: // try_start_5 // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=3);
                            var2 = var4;
                            var8 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 13;
                            var7 = var11[var7];
                            var8 = var8.bind(var5)(var7);
                            var7 = var8.captureException;
                            var7 = var7.bind(var8)(var4);
                            var7 = var4.message;
                            var10 = _closure1_slot0;
                            var4 = 14;
                            var8 = var11[var4];
                            var8 = var10.bind(var5)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var4 = var11[var4];
                            var4 = var10.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4.N2yb9f;
                            var4 = var8.bind(var9)(var4);
                            if(!(var7 !== var4)) { _fun0002_ip = 423; continue _fun0002 }
 365:
                            var4 = _closure2_slot5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 12;
                            var6 = var8[var6];
                            var6 = var7.bind(var5)(var6);
                            var7 = var6.V6OrEarlierAPIError;
                            var12 = var2;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {constructor: {value: var7}});
                            var13 = var6;
                            var2 = new var13[var7](var12, var11);
                            var2 = var2 instanceof Object ? var2 : var6;
                            var2 = var4.bind(var5)(var2);
 423:
                            var4 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0002_ip = 441; continue _fun0002 }
 433:
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var5)();
 441: // try_end5
                            var4 = _closure2_slot3;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
 455: // catch_target3 // catch_target4 // catch_target5
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot3;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 470:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot6 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot6 = var1;
            var1 = _closure1_slot12;
            var15 = var1.bind(var5)();
            var7 = _closure1_slot5;
            var4 = var7.useImperativeHandle;
            var3 = arg2;
            var1 = function() {
                var1 = {};
                return var1;
            };
            var1 = var4.bind(var7)(var3, var1);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var9 = var3.bind(var5)(var1);
            var4 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var9)(var3, var1);
            var4 = var7.useState;
            var3 = false;
            var3 = var4.bind(var7)(var3);
            var11 = _closure1_slot4;
            var10 = 2;
            var3 = var11.bind(var5)(var3, var10);
            var9 = 0;
            var16 = var3[var9];
            var4 = 1;
            var3 = var3[var4];
            _closure2_slot3 = var3;
            var12 = var7.useState;
            var3 = '';
            var3 = var12.bind(var7)(var3);
            var3 = var11.bind(var5)(var3, var10);
            var25 = var3[var9];
            _closure2_slot4 = var25;
            var24 = var3[var4];
            var3 = var7.useState;
            var13 = null;
            var3 = var3.bind(var7)(var13);
            var3 = var11.bind(var5)(var3, var10);
            var20 = var3[var9];
            var3 = var3[var4];
            _closure2_slot5 = var3;
            var4 = var7.useEffect;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackPaneViewed;
                var2 = {};
                var5 = _closure1_slot9;
                var5 = var5.ACCOUNT_CONFIRM_PASSWORD;
                var2['destinationPane'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var7)(var3, var2);
            var2 = var13 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 1074; continue _fun0001 }
 311:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {'style': null, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var9 = var15.background;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var7 = null;
            if(var6) { _fun0001_ip = 394; continue _fun0001 }
 362:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 15;
            var6 = var10[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var7 = var9.bind(var5)(var8, var6);
 394:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = var15.container;
            var7['style'] = var10;
            var21 = _closure1_slot10;
            var27 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 16;
            var10 = var19[var11];
            var10 = var27.bind(var5)(var10);
            var12 = var10.Text;
            var10 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var22 = var15.title;
            var10['style'] = var22;
            var23 = 14;
            var22 = var19[var23];
            var22 = var27.bind(var5)(var22);
            var28 = var22.intl;
            var26 = var28.string;
            var22 = var19[var23];
            var22 = var27.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.x+d9t7;
            var22 = var26.bind(var28)(var22);
            var10['children'] = var22;
            var12 = var21.bind(var5)(var12, var10);
            var10 = new Array(5);
            var10[0] = var12;
            var11 = var19[var11];
            var11 = var27.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var22 = var15.prompt;
            var11['style'] = var22;
            var22 = var19[var23];
            var22 = var27.bind(var5)(var22);
            var28 = var22.intl;
            var26 = var28.string;
            var22 = var19[var23];
            var22 = var27.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.vaZmAw;
            var22 = var26.bind(var28)(var22);
            var11['children'] = var22;
            var11 = var21.bind(var5)(var12, var11);
            var10[1] = var11;
            var12 = _closure1_slot1;
            var11 = 17;
            var11 = var19[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {'style': null, 'textStyle': null, 'label': null, 'textContentType': 'password', 'keyboardType': 'default', 'secureTextEntry': true};
            var22 = var15.input;
            var11['style'] = var22;
            var22 = var15.redesignInput;
            var11['textStyle'] = var22;
            var22 = var19[var23];
            var22 = var27.bind(var5)(var22);
            var26 = var22.intl;
            var22 = var26.string;
            var19 = var19[var23];
            var19 = var27.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.CIGa+/;
            var19 = var22.bind(var26)(var19);
            var11['label'] = var19;
            var19 = 'password';
            var22 = true;
            var11['value'] = var25;
            var11['onChangeText'] = var24;
            var11['onSubmitEditing'] = var18;
            var25 = var13 == var20;
            var24 = undefined;
            if(var25) { _fun0001_ip = 786; continue _fun0001 }
 775:
            var25 = var20.getFieldMessage;
            var24 = var25.bind(var20)(var19);
 786:
            var11['error'] = var24;
            var24 = 'done';
            var11['returnKeyType'] = var24;
            var24 = 'none';
            var11['autoCapitalize'] = var24;
            var11['autoFocus'] = var22;
            var11 = var21.bind(var5)(var12, var11);
            var10[2] = var11;
            var12 = var13 != var20;
            var11 = null;
            if(!var12) { _fun0001_ip = 903; continue _fun0001 }
 832:
            var12 = var20.getFieldMessage;
            var12 = var12.bind(var20)(var19);
            var12 = var13 == var12;
            var11 = null;
            if(!var12) { _fun0001_ip = 903; continue _fun0001 }
 852:
            var19 = _closure1_slot10;
            var13 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 18;
            var12 = var21[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var21 = var15.hint;
            var12['style'] = var21;
            var20 = var20.message;
            var12['children'] = var20;
            var11 = var19.bind(var5)(var13, var12);
 903:
            var10[3] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot6;
            var11 = {};
            var15 = var15.button;
            var11['style'] = var15;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 19;
            var14 = var19[var14];
            var14 = var22.bind(var5)(var14);
            var15 = var14.Button;
            var14 = {'variant': 'primary', 'size': 'lg'};
            var20 = var19[var23];
            var20 = var22.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.i4jeWV;
            var19 = var20.bind(var21)(var19);
            var14['text'] = var19;
            var14['onPress'] = var18;
            if(var16) { _fun0001_ip = 1025; continue _fun0001 }
 1022:
            var16 = var17;
 1025:
            var14['loading'] = var16;
            var14 = var13.bind(var5)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[4] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1074:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/account/UserSettingsConfirmPassword.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function UserSettingsConfirmPasswordWrapped() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 9;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.useSettingNavigationRoute;
        var5 = var2.bind(var3)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = var5.params;
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['UserSettingsConfirmPasswordWrapped'] = var2;
    return var1;
})();