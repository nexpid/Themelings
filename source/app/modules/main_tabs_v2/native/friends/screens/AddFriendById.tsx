// app/modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = function getDefaultTextState() {
        var1 = {};
        var2 = '';
        var1['validatedText'] = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 8;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.6p7Mho;
        var2 = var3.bind(var4)(var2);
        var1['hint'] = var2;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function ErrorMessage(arg1) {
        var1 = arg1;
        var5 = var1.errorMessage;
        var2 = _closure1_slot13;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-xs/medium', 'color': 'text-danger'};
        var8 = var7.inputAccessoryText;
        var6 = new Array(2);
        var6[0] = var8;
        var7 = var7.errorStateText;
        var6[1] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var16.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.Keyboard;
    var _closure1_slot6 = var8;
    var4 = var4.Platform;
    var9 = 3;
    var4 = var6[var9];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PLACEHOLDER_TAG;
    var _closure1_slot8 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.jsxs;
    var _closure1_slot11 = var8;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var8 = var13.createStyles;
    var4 = {};
    var14 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 16};
    var15 = 7;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_MOBILE_PRIMARY;
    var14['backgroundColor'] = var17;
    var4['container'] = var14;
    var14 = {};
    var17 = 'stretch';
    var14['alignSelf'] = var17;
    var4['textInputContainer'] = var14;
    var14 = {'alignSelf': 'stretch', 'height': 40, 'borderRadius': null, 'borderWidth': 1, 'padding': 8};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var14['borderRadius'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SECONDARY_ALT;
    var14['backgroundColor'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_TERTIARY;
    var14['borderColor'] = var17;
    var4['textInputWrapper'] = var14;
    var14 = {'flex': 1, 'alignSelf': 'stretch', 'fontSize': 16, 'lineHeight': 20, 'paddingTop': 0, 'paddingBottom': 2, 'paddingStart': 0, 'paddingEnd': 0};
    var4['textInput'] = var14;
    var14 = {};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_MUTED;
    var14['color'] = var17;
    var4['placeholderText'] = var14;
    var14 = {'position': 'absolute', 'top': 8, 'left': 8, 'bottom': 8, 'borderWidth': 0, 'textAlign': 'left'};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_MUTED;
    var14['color'] = var17;
    var4['inputTextHint'] = var14;
    var14 = {'fontSize': 12, 'lineHeight': 16, 'marginVertical': 8};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.HEADER_SECONDARY;
    var14['color'] = var17;
    var4['inputAccessoryText'] = var14;
    var14 = {};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var14['marginBottom'] = var17;
    var4['redesignInputAccessoryText'] = var14;
    var14 = {};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var14['marginTop'] = var17;
    var4['redesignFooterText'] = var14;
    var14 = {};
    var14['marginTop'] = var12;
    var4['inputHeaderText'] = var14;
    var14 = {};
    var14['flexGrow'] = var10;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_24;
    var14['minHeight'] = var17;
    var4['redesignGrow'] = var14;
    var14 = {'color': null, 'marginTop': 4, 'marginBottom': 16};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.RED_400;
    var14['color'] = var17;
    var4['errorStateText'] = var14;
    var14 = {'alignSelf': 'center', 'paddingTop': 50};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_ACTIVE;
    var14['color'] = var15;
    var4['activityIndicator'] = var14;
    var14 = {'marginTop': 8, 'flexGrow': 0};
    var4['submitButton'] = var14;
    var4 = var8.bind(var13)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var4['SUCCESS'] = var12;
    var8 = 'SUCCESS';
    var4[var12] = var8;
    var4['ERROR'] = var11;
    var8 = 'ERROR';
    var4[var11] = var8;
    var4['LOADING'] = var10;
    var8 = 'LOADING';
    var4[var10] = var8;
    var4['NONE'] = var9;
    var8 = 'NONE';
    var4[var9] = var8;
    var _closure1_slot14 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var16 = var2.textState;
            var20 = var2.onChangeText;
            var19 = var2.onSelectionChange;
            var18 = var2.onKeyPress;
            var17 = var2.onSubmitEditing;
            var8 = var2.onFocus;
            var6 = var2.username;
            var _closure2_slot0 = var6;
            var1 = var2.discriminator;
            var _closure2_slot1 = var1;
            var22 = var2.validationState;
            var14 = var2.autoFocus;
            var12 = var2.headerText;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 154; continue _fun0001 }
 84:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 8;
            var5 = var10[var3];
            var5 = var9.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.YegTFx;
            var5 = var5.bind(var7)(var3);
            var3 = var5.toUpperCase;
            var12 = var3.bind(var5)();
 154:
            var24 = var2.headerTextStyle;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot13;
            var13 = var2.bind(var4)();
            _closure2_slot2 = var13;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.copy;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var6 = null;
                    var9 = var6 != var7;
                    var7 = '';
                    var6 = var7;
                    if(!var9) { _fun0002_ip = 95; continue _fun0002 }
 58:
                    var9 = _closure2_slot1;
                    var6 = var7;
                    if(!(var6 !== var9)) { _fun0002_ip = 95; continue _fun0002 }
 69:
                    var10 = _closure2_slot1;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var3 = '#';
                    var6 = var9.bind(var3)(var10);
 95:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var3 = var3.concat;
                    var3 = var3.bind(var7)(var8, var6);
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.presentUsernameCopied;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot3 = var1;
            var2 = var22.status;
            var1 = _closure1_slot14;
            var1 = var1.ERROR;
            var10 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 247; continue _fun0001 }
 242:
            var10 = var22.message;
 247:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var13.textInputContainer;
            var1['style'] = var5;
            var11 = _closure1_slot10;
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var6 = 9;
            var5 = var21[var6];
            var5 = var25.bind(var4)(var5);
            var9 = var5.Text;
            var5 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var26 = var13.redesignInputAccessoryText;
            var23 = new Array(3);
            var23[0] = var26;
            var26 = var13.inputHeaderText;
            var23[1] = var26;
            var23[2] = var24;
            var5['style'] = var23;
            var5['children'] = var12;
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var12 = _closure1_slot10;
            var9 = 12;
            var9 = var21[var9];
            var9 = var25.bind(var4)(var9);
            var11 = var9.TextField;
            var9 = {};
            var23 = arg2;
            var9['ref'] = var23;
            var16 = var16.validatedText;
            var9['value'] = var16;
            var16 = 8;
            var23 = var21[var16];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var21[var16];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.qRaqen;
            var21 = var23.bind(var24)(var21);
            var9['accessibilityLabel'] = var21;
            var24 = var22.status;
            var21 = _closure1_slot14;
            var23 = var21.ERROR;
            var21 = undefined;
            if(!(var24 === var23)) { _fun0001_ip = 481; continue _fun0001 }
 475:
            var21 = var22.a11yMessage;
 481:
            var9['accessibilityHint'] = var21;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = var21[var16];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var16];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.qRaqen;
            var21 = var22.bind(var23)(var21);
            var9['placeholder'] = var21;
            var21 = var13.placeholderText;
            var21 = var21.color;
            var9['placeholderTextColor'] = var21;
            var9['onChange'] = var20;
            var9['onSelectionChange'] = var19;
            var9['onKeyPress'] = var18;
            var9['onSubmitEditing'] = var17;
            var17 = 'none';
            var9['autoCapitalize'] = var17;
            var17 = 'send';
            var9['returnKeyType'] = var17;
            var17 = 'twitter';
            var9['keyboardType'] = var17;
            var17 = false;
            var9['autoCorrect'] = var17;
            var17 = true;
            var9['blurOnSubmit'] = var17;
            var17 = 37;
            var9['maxLength'] = var17;
            var9['autoFocus'] = var14;
            var9['onFocus'] = var8;
            var8 = null;
            var17 = var8 != var10;
            var14 = undefined;
            if(!var17) { _fun0001_ip = 653; continue _fun0001 }
 649:
            var14 = 'error';
 653:
            var9['status'] = var14;
            var9 = var12.bind(var4)(var11, var9);
            var5[1] = var9;
            if(!(var8 == var10)) { _fun0001_ip = 799; continue _fun0001 }
 674:
            var9 = _closure1_slot10;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = var11[var6];
            var6 = var12.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var13 = var13.redesignFooterText;
            var6['style'] = var13;
            var13 = var11[var16];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var11[var16];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.x++KNz;
            var11 = {};
            var15 = function usernameHook(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'text-normal'};
                    var1 = _closure2_slot2;
                    var6 = var1.redesignFooterText;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var2['style'] = var1;
                    var1 = _closure2_slot3;
                    var2['onLongPress'] = var1;
                    var6 = _closure2_slot0;
                    var1 = new Array(2);
                    var1[0] = var6;
                    var9 = _closure2_slot1;
                    var8 = '';
                    var6 = undefined;
                    if(!(var8 !== var9)) { _fun0003_ip = 136; continue _fun0003 }
 110:
                    var9 = _closure2_slot1;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = '#';
                    var6 = var8.bind(var7)(var9);
 136:
                    var1[1] = var6;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var11['usernameHook'] = var15;
            var11 = var13.bind(var14)(var12, var11);
            var6['children'] = var11;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 820; continue _fun0001;
 799:
            var9 = _closure1_slot10;
            var8 = _closure1_slot17;
            var7 = {};
            var7['errorMessage'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 820:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var15 = var1.style;
            var23 = var1.onFocus;
            var19 = var1.autoFocusInput;
            var18 = var1.headerText;
            var17 = var1.headerTextStyle;
            var3 = var1.sourcePage;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot13;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var8 = _closure1_slot4;
            var1 = var8.useRef;
            var13 = 0;
            var1 = var1.bind(var8)(var13);
            var _closure2_slot1 = var1;
            var1 = var8.useRef;
            var20 = '';
            var1 = var1.bind(var8)(var20);
            var _closure2_slot2 = var1;
            var2 = var8.useState;
            var1 = function() {
                var2 = _closure1_slot16;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var8)(var1);
            var6 = _closure1_slot3;
            var5 = 2;
            var1 = var6.bind(var4)(var1, var5);
            var27 = var1[var13];
            var _closure2_slot3 = var27;
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot4 = var1;
            var7 = var8.useState;
            var1 = {};
            var10 = _closure1_slot14;
            var10 = var10.NONE;
            var1['status'] = var10;
            var1 = var7.bind(var8)(var1);
            var1 = var6.bind(var4)(var1, var5);
            var10 = var1[var13];
            var _closure2_slot5 = var10;
            var1 = var1[var2];
            var _closure2_slot6 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var11 = var6.bind(var4)(var1);
            var7 = var11.useStateFromStores;
            var1 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var7.bind(var11)(var6, var1);
            var11 = var8.useCallback;
            var7 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var4 = _closure2_slot4;
                    var1 = var5.length;
                    var7 = 0;
                    if(!(!(var1 <= var7))) { _fun0005_ip = 123; continue _fun0005 }
 21:
                    var3 = var5.split;
                    var1 = '#';
                    var9 = var3.bind(var5)(var1);
                    var8 = _closure1_slot3;
                    var6 = undefined;
                    var1 = 2;
                    var1 = var8.bind(var6)(var9, var1);
                    var9 = 1;
                    var8 = var1[var9];
                    var10 = null;
                    var6 = var10 != var8;
                    var1 = '';
                    if(!var6) { _fun0005_ip = 109; continue _fun0005 }
 73:
                    var6 = _closure1_slot8;
                    var3 = var6.slice;
                    var10 = var10 != var8;
                    var7 = 0;
                    if(!var10) { _fun0005_ip = 100; continue _fun0005 }
 91:
                    var8 = var8.length;
                    var7 = var8 + var9;
 100:
                    var3 = var3.bind(var6)(var7);
                    var1 = var5 + var3;
 109:
                    var3 = {};
                    var3['validatedText'] = var5;
                    var3['hint'] = var1;
                    _fun0005_ip = 136; continue _fun0005;
 123:
                    var5 = _closure1_slot16;
                    var1 = undefined;
                    var3 = var5.bind(var1)();
 136:
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot6;
                    var2 = {};
                    var4 = _closure1_slot14;
                    var4 = var4.NONE;
                    var2['status'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6 = new Array(0);
            var26 = var11.bind(var8)(var7, var6);
            var11 = function handleSubmitEditing() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot3;
                    var4 = var3.validatedText;
                    var3 = var4.trim;
                    var5 = var3.bind(var4)();
                    var _closure3_slot0 = var5;
                    var4 = var5.length;
                    var3 = 0;
                    if(!(!(var4 <= var3))) { _fun0006_ip = 318; continue _fun0006 }
 43:
                    var4 = var5.includes;
                    var3 = '#';
                    var3 = var4.bind(var5)(var3);
                    var3 = !var3;
                    if(!var3) { _fun0006_ip = 78; continue _fun0006 }
 63:
                    var6 = var5.startsWith;
                    var4 = '@';
                    var3 = var6.bind(var5)(var4);
 78:
                    var7 = var5;
                    if(!var3) { _fun0006_ip = 105; continue _fun0006 }
 84:
                    var4 = var5.substring;
                    var3 = 1;
                    var3 = var4.bind(var5)(var3);
                    _closure3_slot0 = var3;
                    var7 = var3;
 105:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.validateDiscordTag;
                    var4 = var4.bind(var6)(var7);
                    var6 = null;
                    var10 = var7;
                    if(!(var6 == var4)) { _fun0006_ip = 289; continue _fun0006 }
 153:
                    var7 = _closure2_slot6;
                    var6 = {};
                    var8 = _closure1_slot14;
                    var8 = var8.LOADING;
                    var6['status'] = var8;
                    var6 = var7.bind(var3)(var6);
                    var7 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 15;
                    var6 = var11[var9];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.sendRequest;
                    var6 = {};
                    var6['discordTag'] = var10;
                    var10 = {};
                    var12 = 'Search - Add Friend Search';
                    var10['location'] = var12;
                    var6['context'] = var10;
                    var10 = _closure1_slot0;
                    var9 = var11[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.RelationshipErrorUXConfig;
                    var9 = var9.SHOW_ONLY_IF_ACTION_NEEDED;
                    var6['errorUxConfig'] = var9;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.then;
                    var6 = function() {
                        var5 = _closure2_slot4;
                        var4 = _closure1_slot16;
                        var1 = undefined;
                        var4 = var4.bind(var1)();
                        var4 = var5.bind(var1)(var4);
                        var6 = _closure2_slot6;
                        var3 = {};
                        var4 = _closure1_slot14;
                        var4 = var4.SUCCESS;
                        var3['status'] = var4;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var7 = 8;
                        var8 = var5[var7];
                        var8 = var4.bind(var1)(var8);
                        var10 = var8.intl;
                        var9 = var10.format;
                        var7 = var5[var7];
                        var7 = var4.bind(var1)(var7);
                        var7 = var7.t;
                        var8 = var7.Rtl1Eh;
                        var7 = {};
                        var11 = _closure3_slot0;
                        var7['discordTag'] = var11;
                        var7 = var9.bind(var10)(var8, var7);
                        var3['message'] = var7;
                        var3 = var6.bind(var1)(var3);
                        var3 = 11;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.presentAddedFriendToast;
                        var3 = var3.bind(var4)();
                        var3 = _closure1_slot6;
                        var2 = var3.dismiss;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var10 = arg1;
                            var3 = _closure2_slot6;
                            var2 = {};
                            var1 = _closure1_slot14;
                            var1 = var1.ERROR;
                            var2['status'] = var1;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 14;
                            var4 = var1[var8];
                            var1 = undefined;
                            var13 = var6.bind(var1)(var4);
                            var12 = var13.humanizeAbortCode;
                            var9 = null;
                            var6 = var9 == var10;
                            var4 = undefined;
                            if(var6) { _fun0007_ip = 87; continue _fun0007 }
 68:
                            var6 = var10.body;
                            var7 = var9 == var6;
                            var4 = undefined;
                            if(var7) { _fun0007_ip = 87; continue _fun0007 }
 82:
                            var4 = var6.code;
 87:
                            var6 = var9 != var4;
                            var7 = -1;
                            var11 = var7;
                            if(!var6) { _fun0007_ip = 106; continue _fun0007 }
 103:
                            var11 = var4;
 106:
                            var6 = _closure3_slot0;
                            var6 = var12.bind(var13)(var11, var6);
                            var2['message'] = var6;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.humanizeAbortCodeForA11y;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0007_ip = 174; continue _fun0007 }
 155:
                            var10 = var10.body;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0007_ip = 174; continue _fun0007 }
 169:
                            var8 = var10.code;
 174:
                            var9 = var9 != var8;
                            if(!var9) { _fun0007_ip = 184; continue _fun0007 }
 181:
                            var7 = var8;
 184:
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var6)(var7, var4);
                            var2['a11yMessage'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var6, var2);
                    _fun0006_ip = 318; continue _fun0006;
 289:
                    var2 = _closure2_slot6;
                    var1 = {};
                    var5 = _closure1_slot14;
                    var5 = var5.ERROR;
                    var1['status'] = var5;
                    var1['message'] = var4;
                    var1 = var2.bind(var3)(var1);
 318:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.FRIEND_ADD_VIEWED;
                var2 = {};
                var6 = 'Id';
                var2['friend_add_type'] = var6;
                var6 = _closure2_slot0;
                var2['source_page'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = var7.bind(var8)(var3, var6);
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var10;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot5;
                    var4 = var2.status;
                    var3 = _closure1_slot14;
                    var3 = var3.ERROR;
                    var3 = var4 === var3;
                    if(!var3) { _fun0008_ip = 48; continue _fun0008 }
 32:
                    var4 = _closure2_slot5;
                    var5 = var4.a11yMessage;
                    var4 = null;
                    var3 = var4 != var5;
 48:
                    if(!var3) { _fun0008_ip = 100; continue _fun0008 }
 51:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot5;
                    var1 = var1.a11yMessage;
                    var1 = var2.bind(var3)(var1);
 100:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var6);
            var6 = var27.validatedText;
            var3 = var6.trim;
            var3 = var3.bind(var6)();
            var12 = var3.length;
            var22 = null;
            if(!(var22 != var1)) { _fun0004_ip = 363; continue _fun0004 }
 350:
            var3 = var1.hasUniqueUsername;
            var3 = var3.bind(var1)();
            if(var3) { _fun0004_ip = 406; continue _fun0004 }
 363:
            var3 = var22 == var1;
            var6 = undefined;
            if(var3) { _fun0004_ip = 377; continue _fun0004 }
 372:
            var6 = var1.username;
 377:
            var3 = new Array(2);
            var3[0] = var6;
            var7 = var22 == var1;
            var6 = undefined;
            if(var7) { _fun0004_ip = 400; continue _fun0004 }
 394:
            var6 = var1.discriminator;
 400:
            var3[1] = var6;
            _fun0004_ip = 435; continue _fun0004;
 406:
            var7 = var22 == var1;
            var6 = undefined;
            if(var7) { _fun0004_ip = 420; continue _fun0004 }
 415:
            var6 = var1.username;
 420:
            var1 = new Array(2);
            var1[0] = var6;
            var1[1] = var22;
            var3 = var1;
 435:
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var5);
            var24 = var1[var13];
            var21 = var1[var2];
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var5 = {};
            var16 = var14.container;
            var8 = new Array(2);
            var8[0] = var16;
            var8[1] = var15;
            var5['style'] = var8;
            var16 = _closure1_slot10;
            var15 = _closure1_slot15;
            var8 = {};
            var8['textState'] = var27;
            var8['onChangeText'] = var26;
            var26 = function onSelectionChange(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.selection;
                    var2 = var1.start;
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(!(var2 !== var3)) { _fun0009_ip = 45; continue _fun0009 }
 35:
                    var1 = _closure2_slot1;
                    var1['current'] = var2;
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var8['onSelectionChange'] = var26;
            var25 = function onKeyPress(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.key;
                var1 = _closure2_slot2;
                var1['current'] = var2;
                var1 = undefined;
                return var1;
            };
            var8['onKeyPress'] = var25;
            var8['onSubmitEditing'] = var11;
            var8['onFocus'] = var23;
            var25 = var22 != var24;
            var23 = var20;
            if(!var25) { _fun0004_ip = 561; continue _fun0004 }
 558:
            var23 = var24;
 561:
            var8['username'] = var23;
            var22 = var22 != var21;
            if(!var22) { _fun0004_ip = 575; continue _fun0004 }
 572:
            var20 = var21;
 575:
            var8['discriminator'] = var20;
            var8['validationState'] = var10;
            var8['autoFocus'] = var19;
            var8['headerText'] = var18;
            var8['headerTextStyle'] = var17;
            var17 = arg2;
            var8['ref'] = var17;
            var8 = var16.bind(var4)(var15, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot5;
            var6 = {};
            var14 = var14.redesignGrow;
            var6['style'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 18;
            var6 = var18[var6];
            var6 = var17.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var14 = 'lg';
            var6['size'] = var14;
            var14 = 8;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.PMsq/f;
            var14 = var15.bind(var16)(var14);
            var6['text'] = var14;
            var12 = var12 <= var13;
            var6['disabled'] = var12;
            var6['onPress'] = var11;
            var10 = var10.status;
            var9 = _closure1_slot14;
            var9 = var9.LOADING;
            var9 = var10 === var9;
            var6['loading'] = var9;
            var9 = false;
            var6['grow'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();