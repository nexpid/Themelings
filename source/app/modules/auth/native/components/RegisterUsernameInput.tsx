// app/modules/auth/native/components/RegisterUsernameInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = ['username'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setRegistrationErrors;
    var _closure1_slot7 = var7;
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '90%';
    var9['width'] = var10;
    var4['status'] = var9;
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['inputHint'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 6;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var10 = var8.FadeIn;
    var8 = var10.duration;
    var9 = 300;
    var8 = var8.bind(var10)(var9);
    var4['entering'] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var10 = var8.FadeOut;
    var8 = var10.duration;
    var8 = var8.bind(var10)(var9);
    var4['exiting'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var10 = var8.LinearTransition;
    var8 = var10.easing;
    var11 = var6[var7];
    var11 = var5.bind(var1)(var11);
    var12 = var11.Easing;
    var11 = var12.inOut;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Easing;
    var7 = var7.quad;
    var7 = var11.bind(var12)(var7);
    var8 = var8.bind(var10)(var7);
    var7 = var8.duration;
    var7 = var7.bind(var8)(var9);
    var4['layout'] = var7;
    var _closure1_slot14 = var4;
    var4 = function UsernameStatusMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.usernameStatus;
            var2 = var1.isUsernameFocused;
            var1 = _closure1_slot12;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var1 = null;
            var3 = var1 == var10;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var10.type;
case 2:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 7;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.NameValidationState;
            var3 = var3.ERROR;
            if(!(var4 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1 == var10;
            var4 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var10.type;
case 8:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.NameValidationState;
            var3 = var3.AVAILABLE;
            if(!(var4 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 6:
            var1 = null;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot9;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 11;
            var2 = var13[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var16 = _closure1_slot13;
            var17 = var2;
            var6 = copyDataProperties(var17, var16);
            var16 = _closure1_slot14;
            var17 = var2;
            var6 = copyDataProperties(var17, var16);
            var7 = var12.inputHint;
            var6 = 'style';
            var2[var6] = var7;
            var7 = 'text-xs/medium';
            var6 = 'variant';
            var2[var6] = var7;
            var7 = 'text-muted';
            var6 = 'color';
            var2[var6] = var7;
            var7 = true;
            var6 = 'animated';
            var2[var6] = var7;
            var6 = 12;
            var7 = var13[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var13[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.y7LSyc;
            var7 = var7.bind(var8)(var6);
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            _fun0001_ip = 13; continue _fun0001;
case 10:
            var4 = _closure1_slot9;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 11;
            var2 = var8[var6];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var16 = _closure1_slot13;
            var17 = var2;
            var9 = copyDataProperties(var17, var16);
            var16 = _closure1_slot14;
            var17 = var2;
            var9 = copyDataProperties(var17, var16);
            var13 = var12.status;
            var9 = 'style';
            var2[var9] = var13;
            var13 = 'text-xs/medium';
            var9 = 'variant';
            var2[var9] = var13;
            var13 = true;
            var9 = 'animated';
            var2[var9] = var13;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/medium', 'color': 'text-positive'};
            var8 = var10.message;
            var6['children'] = var8;
            var7 = var4.bind(var5)(var7, var6);
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 4:
            var4 = _closure1_slot10;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 8;
            var2 = var13[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.Stack;
            var2 = {'direction': 'horizontal', 'spacing': 4, 'align': 'flex-start'};
            var9 = _closure1_slot9;
            var6 = 9;
            var6 = var13[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.CircleErrorIcon;
            var6 = {};
            var14 = 'xs';
            var6['size'] = var14;
            var15 = _closure1_slot1;
            var14 = 10;
            var14 = var13[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.colors;
            var14 = var14.TEXT_DANGER;
            var6['color'] = var14;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 11;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/medium', 'color': 'text-danger'};
            var12 = var12.status;
            var7['style'] = var12;
            var16 = _closure1_slot13;
            var17 = var7;
            var12 = copyDataProperties(var17, var16);
            var16 = _closure1_slot14;
            var17 = var7;
            var11 = copyDataProperties(var17, var16);
            var12 = true;
            var11 = 'animated';
            var7[var11] = var12;
            var11 = var10.message;
            var10 = 'children';
            var7[var10] = var11;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/RegisterUsernameInput.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RegisterUsernameInput(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var17 = var3.username;
            var2 = var3.setUsername;
            var _closure2_slot0 = var2;
            var10 = var3.usernameStatus;
            var16 = var3.onSubmitEditing;
            var11 = var3.submitBehavior;
            var8 = var3.autoFocus;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var5 = _closure1_slot6;
            var3 = var5.useRef;
            var12 = null;
            var21 = var3.bind(var5)(var12);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var3['inputRef'] = var21;
            var7 = var12 != var8;
            if(!var7) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var8;
case 15:
            var3['enabled'] = var7;
            var3 = var5.bind(var4)(var3);
            var5 = _closure1_slot6;
            var3 = var5.useState;
            var13 = true;
            var8 = var3.bind(var5)(var13);
            var7 = _closure1_slot5;
            var3 = 2;
            var7 = var7.bind(var4)(var8, var3);
            var3 = 0;
            var9 = var7[var3];
            var3 = 1;
            var7 = var7[var3];
            _closure2_slot1 = var7;
            var8 = _closure1_slot8;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var14 = var8.bind(var4)(var3);
            _closure2_slot2 = var14;
            var8 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure2_slot2;
                    var4 = var3.username;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = _closure2_slot2;
                    var3 = var3.username;
                    var7 = _closure1_slot4;
                    var6 = _closure2_slot2;
                    var4 = _closure1_slot3;
                    var5 = undefined;
                    var4 = var7.bind(var5)(var6, var4);
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var5)(var4);
case 17:
                    var3 = _closure2_slot0;
                    var1 = var2.toLowerCase;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var18 = var8.bind(var5)(var2, var3);
            var8 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = var8.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var8 = _closure1_slot9;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 14;
            var5 = var20[var5];
            var5 = var19.bind(var4)(var5);
            var7 = var5.TextInput;
            var5 = {};
            var5['ref'] = var21;
            var21 = 12;
            var22 = var20[var21];
            var22 = var19.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var20[var21];
            var22 = var19.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.IEpCBQ;
            var22 = var23.bind(var24)(var22);
            var5['label'] = var22;
            var22 = var20[var21];
            var22 = var19.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var20[var21];
            var21 = var19.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.47dcUV;
            var21 = var22.bind(var23)(var21);
            var5['accessibilityHint'] = var21;
            var5['onChange'] = var18;
            var18 = false;
            var5['autoCorrect'] = var18;
            var18 = 15;
            var21 = var20[var18];
            var22 = var19.bind(var4)(var21);
            var21 = var22.isAndroid;
            var21 = var21.bind(var22)();
            var5['secureTextEntry'] = var21;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = var19.isAndroid;
            var19 = var18.bind(var19)();
            var18 = 'default';
            if(!var19) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var18 = 'visible-password';
case 19:
            var5['keyboardType'] = var18;
            var5['value'] = var17;
            var5['onSubmitEditing'] = var16;
            var16 = 'next';
            var5['returnKeyType'] = var16;
            var16 = 'username';
            var5['autoComplete'] = var16;
            var5['textContentType'] = var16;
            var16 = 'none';
            var5['autoCapitalize'] = var16;
            var5['onFocus'] = var15;
            var5['onBlur'] = var14;
            var5['isClearable'] = var13;
            var12 = var12 == var10;
            var14 = undefined;
            if(var12) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var14 = var10.type;
case 21:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 7;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.NameValidationState;
            var13 = var12.ERROR;
            var12 = undefined;
            if(!(var14 === var13)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var12 = 'error';
case 23:
            var5['status'] = var12;
            var5['submitBehavior'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot15;
            var6 = {};
            var6['usernameStatus'] = var10;
            var6['isUsernameFocused'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RegisterUsernameInput'] = var2;
    return var1;
})();