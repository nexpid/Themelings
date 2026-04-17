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
        var2 = var2["6p7Mhh"];
        var2 = var3.bind(var4)(var2);
        var1['hint'] = var2;
        return var1;
    };
    var _closure1_slot17 = var1;
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
        var1 = {'variant': 'text-xs/medium', 'color': 'text-feedback-critical'};
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
    var _closure1_slot18 = var1;
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
    var4 = var4.Keyboard;
    var _closure1_slot6 = var4;
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
    var17 = var17.BACKGROUND_BASE_LOWER;
    var14['backgroundColor'] = var17;
    var4['container'] = var14;
    var14 = {};
    var17 = 'stretch';
    var14['alignSelf'] = var17;
    var4['textInputContainer'] = var14;
    var14 = {};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var14['color'] = var18;
    var4['placeholderText'] = var14;
    var14 = {'fontSize': 12, 'lineHeight': 16, 'marginVertical': 8};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_SUBTLE;
    var14['color'] = var18;
    var4['inputAccessoryText'] = var14;
    var14 = {};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var14['marginBottom'] = var18;
    var4['redesignInputAccessoryText'] = var14;
    var14 = {};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var14['marginTop'] = var18;
    var4['redesignFooterText'] = var14;
    var14 = {};
    var14['marginTop'] = var12;
    var4['inputHeaderText'] = var14;
    var14 = {};
    var14['flexGrow'] = var10;
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_24;
    var14['minHeight'] = var18;
    var4['redesignGrow'] = var14;
    var14 = {'color': null, 'marginTop': 4, 'marginBottom': 16};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var18 = var18.RED_400;
    var14['color'] = var18;
    var4['errorStateText'] = var14;
    var14 = {};
    var14['alignSelf'] = var17;
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var14['marginTop'] = var15;
    var4['friendMessageContainer'] = var14;
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
    var4 = {};
    var8 = 'DISCORD_TAG';
    var4['DISCORD_TAG'] = var8;
    var8 = 'MESSAGE';
    var4['MESSAGE'] = var8;
    var _closure1_slot15 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
            var3 = var3.YegTF2;
            var5 = var5.bind(var7)(var3);
            var3 = var5.toUpperCase;
            var12 = var3.bind(var5)();
case 2:
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
case 0:
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
                    if(!var9) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var9 = _closure2_slot1;
                    var6 = var7;
                    if(!(var6 !== var9)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var10 = _closure2_slot1;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var3 = '#';
                    var6 = var9.bind(var3)(var10);
case 4:
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
            if(!(var2 === var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var22.field;
            var1 = _closure1_slot15;
            var1 = var1.DISCORD_TAG;
            var10 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var10 = var22.message;
case 7:
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
            var21 = var21.qRaqel;
            var21 = var23.bind(var24)(var21);
            var9['accessibilityLabel'] = var21;
            var24 = var22.status;
            var21 = _closure1_slot14;
            var23 = var21.ERROR;
            var21 = undefined;
            if(!(var24 === var23)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var21 = var22.a11yMessage;
case 10:
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
            var21 = var21.qRaqel;
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
            if(!var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = 'error';
case 12:
            var9['status'] = var14;
            var9 = var12.bind(var4)(var11, var9);
            var5[1] = var9;
            if(!(var8 == var10)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
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
            var12 = var11.x++KN9;
            var11 = {};
            var15 = function usernameHook(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'text-default'};
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
                    if(!(var8 !== var9)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var9 = _closure2_slot1;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = '#';
                    var6 = var8.bind(var7)(var9);
case 16:
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
            _fun0001_ip = 18; continue _fun0001;
case 14:
            var9 = _closure1_slot10;
            var8 = _closure1_slot18;
            var7 = {};
            var7['errorMessage'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 18:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.style;
            var25 = var1.onFocus;
            var19 = var1.autoFocusInput;
            var18 = var1.headerText;
            var17 = var1.headerTextStyle;
            var3 = var1.sourcePage;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot13;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var12 = _closure1_slot4;
            var1 = var12.useRef;
            var13 = 0;
            var1 = var1.bind(var12)(var13);
            var _closure2_slot1 = var1;
            var1 = var12.useRef;
            var20 = '';
            var1 = var1.bind(var12)(var20);
            var _closure2_slot2 = var1;
            var2 = var12.useState;
            var1 = function() {
                var2 = _closure1_slot17;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var12)(var1);
            var6 = _closure1_slot3;
            var5 = 2;
            var1 = var6.bind(var4)(var1, var5);
            var29 = var1[var13];
            var _closure2_slot3 = var29;
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot4 = var1;
            var7 = var12.useState;
            var1 = {};
            var10 = _closure1_slot14;
            var10 = var10.NONE;
            var1['status'] = var10;
            var1 = var7.bind(var12)(var1);
            var1 = var6.bind(var4)(var1, var5);
            var10 = var1[var13];
            var _closure2_slot5 = var10;
            var1 = var1[var2];
            var _closure2_slot6 = var1;
            var1 = var12.useState;
            var1 = var1.bind(var12)(var20);
            var1 = var6.bind(var4)(var1, var5);
            var22 = var1[var13];
            var _closure2_slot7 = var22;
            var1 = var1[var2];
            var _closure2_slot8 = var1;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var11 = var6.bind(var4)(var1);
            var6 = var11.useConfig;
            var1 = {};
            var15 = 'AddFriendbyId';
            var1['location'] = var15;
            var1 = var6.bind(var11)(var1);
            var15 = var1.enabled;
            var6 = _closure1_slot0;
            var1 = 14;
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
            var11 = var12.useCallback;
            var7 = new Array(1);
            var7[0] = var10;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure2_slot4;
                    var1 = var5.length;
                    var7 = 0;
                    if(!(!(var1 <= var7))) { _fun0005_ip = 19; continue _fun0005 }
case 20:
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
                    if(!var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var6 = _closure1_slot8;
                    var3 = var6.slice;
                    var10 = var10 != var8;
                    var7 = 0;
                    if(!var10) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var8 = var8.length;
                    var7 = var8 + var9;
case 23:
                    var3 = var3.bind(var6)(var7);
                    var1 = var5 + var3;
case 21:
                    var3 = {};
                    var3['validatedText'] = var5;
                    var3['hint'] = var1;
                    _fun0005_ip = 16; continue _fun0005;
case 19:
                    var5 = _closure1_slot17;
                    var1 = undefined;
                    var3 = var5.bind(var1)();
case 16:
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var5 = var3.status;
                    var3 = _closure1_slot14;
                    var3 = var3.ERROR;
                    var3 = var5 === var3;
                    if(!var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var5 = _closure2_slot5;
                    var6 = var5.field;
                    var5 = _closure1_slot15;
                    var5 = var5.DISCORD_TAG;
                    var3 = var6 === var5;
case 25:
                    if(!var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var4 = _closure1_slot14;
                    var4 = var4.NONE;
                    var2['status'] = var4;
                    var2 = var3.bind(var1)(var2);
case 27:
                    return var1;
                }
            };
            var28 = var11.bind(var12)(var6, var7);
            var11 = var12.useCallback;
            var7 = new Array(1);
            var7[0] = var10;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot8;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var5 = var3.status;
                    var3 = _closure1_slot14;
                    var3 = var3.ERROR;
                    var3 = var5 === var3;
                    if(!var3) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var5 = _closure2_slot5;
                    var6 = var5.field;
                    var5 = _closure1_slot15;
                    var5 = var5.MESSAGE;
                    var3 = var6 === var5;
case 29:
                    if(!var3) { _fun0006_ip = 31; continue _fun0006 }
case 22:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var4 = _closure1_slot14;
                    var4 = var4.NONE;
                    var2['status'] = var4;
                    var2 = var3.bind(var1)(var2);
case 31:
                    return var1;
                }
            };
            var21 = var11.bind(var12)(var6, var7);
            var11 = function handleSubmitEditing() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var4 = var3.validatedText;
                    var3 = var4.trim;
                    var5 = var3.bind(var4)();
                    var _closure3_slot0 = var5;
                    var4 = _closure2_slot7;
                    var3 = var4.trim;
                    var10 = var3.bind(var4)();
                    var3 = var5.length;
                    var11 = 0;
                    if(!(!(var3 <= var11))) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var4 = var5.includes;
                    var3 = '#';
                    var3 = var4.bind(var5)(var3);
                    var3 = !var3;
                    if(!var3) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var6 = var5.startsWith;
                    var4 = '@';
                    var3 = var6.bind(var5)(var4);
case 34:
                    var7 = var5;
                    if(!var3) { _fun0007_ip = 36; continue _fun0007 }
case 31:
                    var4 = var5.substring;
                    var3 = 1;
                    var3 = var4.bind(var5)(var3);
                    _closure3_slot0 = var3;
                    var7 = var3;
case 36:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.validateDiscordTag;
                    var4 = var4.bind(var6)(var7);
                    var6 = null;
                    var12 = var7;
                    if(!(var6 == var4)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var7 = _closure2_slot6;
                    var6 = {};
                    var8 = _closure1_slot14;
                    var8 = var8.LOADING;
                    var6['status'] = var8;
                    var6 = var7.bind(var3)(var6);
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 16;
                    var6 = var13[var9];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.sendRequest;
                    var6 = {};
                    var6['discordTag'] = var12;
                    var12 = {};
                    var14 = 'Search - Add Friend Search';
                    var12['location'] = var14;
                    var6['context'] = var12;
                    var12 = _closure1_slot0;
                    var9 = var13[var9];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.RelationshipErrorUXConfig;
                    var9 = var9.SHOW_ONLY_IF_ACTION_NEEDED;
                    var6['errorUxConfig'] = var9;
                    var9 = var10.length;
                    var11 = var9 > var11;
                    var9 = undefined;
                    if(!var11) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var9 = var10;
case 39:
                    var6['note'] = var9;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.then;
                    var6 = function() {
                        var5 = _closure2_slot4;
                        var4 = _closure1_slot17;
                        var1 = undefined;
                        var4 = var4.bind(var1)();
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot8;
                        var4 = '';
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
                        var8 = var7.Rtl1Ep;
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
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var10 = arg1;
                            var9 = null;
                            var3 = var9 == var10;
                            var1 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                            var3 = var10.body;
                            var4 = var9 == var3;
                            var2 = undefined;
                            if(var4) { _fun0008_ip = 41; continue _fun0008 }
case 43:
                            var2 = var3.note;
case 41:
                            if(!(var9 == var2)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                            var3 = _closure2_slot6;
                            var2 = {};
                            var4 = _closure1_slot14;
                            var4 = var4.ERROR;
                            var2['status'] = var4;
                            var4 = _closure1_slot15;
                            var4 = var4.DISCORD_TAG;
                            var2['field'] = var4;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var8 = 15;
                            var4 = var4[var8];
                            var13 = var6.bind(var1)(var4);
                            var12 = var13.humanizeAbortCode;
                            var6 = var9 == var10;
                            var4 = undefined;
                            if(var6) { _fun0008_ip = 46; continue _fun0008 }
case 36:
                            var6 = var10.body;
                            var7 = var9 == var6;
                            var4 = undefined;
                            if(var7) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                            var4 = var6.code;
case 46:
                            var6 = var9 != var4;
                            var7 = -1;
                            var11 = var7;
                            if(!var6) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                            var11 = var4;
case 48:
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
                            if(var11) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                            var10 = var10.body;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0008_ip = 50; continue _fun0008 }
case 52:
                            var8 = var10.code;
case 50:
                            var9 = var9 != var8;
                            if(!var9) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var7 = var8;
case 53:
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var6)(var7, var4);
                            var2['a11yMessage'] = var4;
                            var2 = var3.bind(var1)(var2);
                            _fun0008_ip = 55; continue _fun0008;
case 44:
                            var3 = _closure2_slot6;
                            var2 = {};
                            var5 = _closure1_slot14;
                            var5 = var5.ERROR;
                            var2['status'] = var5;
                            var5 = _closure1_slot15;
                            var5 = var5.MESSAGE;
                            var2['field'] = var5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 8;
                            var5 = var8[var4];
                            var5 = var7.bind(var1)(var5);
                            var9 = var5.intl;
                            var6 = var9.string;
                            var5 = var8[var4];
                            var5 = var7.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.ckHwck;
                            var5 = var6.bind(var9)(var5);
                            var2['message'] = var5;
                            var5 = var8[var4];
                            var5 = var7.bind(var1)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var1)(var4);
                            var4 = var4.t;
                            var4 = var4.ckHwck;
                            var4 = var5.bind(var6)(var4);
                            var2['a11yMessage'] = var4;
                            var2 = var3.bind(var1)(var2);
case 55:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var6, var2);
                    _fun0007_ip = 32; continue _fun0007;
case 37:
                    var2 = _closure2_slot6;
                    var1 = {};
                    var6 = _closure1_slot14;
                    var6 = var6.ERROR;
                    var1['status'] = var6;
                    var5 = _closure1_slot15;
                    var5 = var5.DISCORD_TAG;
                    var1['field'] = var5;
                    var1['message'] = var4;
                    var1 = var2.bind(var3)(var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var12.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
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
            var3 = var7.bind(var12)(var3, var6);
            var7 = var12.useEffect;
            var6 = new Array(1);
            var6[0] = var10;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var4 = var2.status;
                    var3 = _closure1_slot14;
                    var3 = var3.ERROR;
                    var3 = var4 === var3;
                    if(!var3) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var4 = _closure2_slot5;
                    var5 = var4.a11yMessage;
                    var4 = null;
                    var3 = var4 != var5;
case 56:
                    if(!var3) { _fun0009_ip = 23; continue _fun0009 }
case 58:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot5;
                    var1 = var1.a11yMessage;
                    var1 = var2.bind(var3)(var1);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var12)(var3, var6);
            var6 = var29.validatedText;
            var3 = var6.trim;
            var3 = var3.bind(var6)();
            var12 = var3.length;
            var24 = null;
            if(!(var24 != var1)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var3 = var1.hasUniqueUsername;
            var3 = var3.bind(var1)();
            if(var3) { _fun0004_ip = 61; continue _fun0004 }
case 59:
            var3 = var24 == var1;
            var6 = undefined;
            if(var3) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var6 = var1.username;
case 62:
            var3 = new Array(2);
            var3[0] = var6;
            var7 = var24 == var1;
            var6 = undefined;
            if(var7) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var6 = var1.discriminator;
case 64:
            var3[1] = var6;
            _fun0004_ip = 66; continue _fun0004;
case 61:
            var7 = var24 == var1;
            var6 = undefined;
            if(var7) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var6 = var1.username;
case 67:
            var1 = new Array(2);
            var1[0] = var6;
            var1[1] = var24;
            var3 = var1;
case 66:
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var5);
            var26 = var1[var13];
            var23 = var1[var2];
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var6 = _closure1_slot5;
            var5 = {};
            var16 = var14.container;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var8;
            var5['style'] = var7;
            var16 = _closure1_slot10;
            var8 = _closure1_slot16;
            var7 = {};
            var7['textState'] = var29;
            var7['onChangeText'] = var28;
            var28 = function onSelectionChange(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.selection;
                    var2 = var1.start;
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(!(var2 !== var3)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var1 = _closure2_slot1;
                    var1['current'] = var2;
case 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onSelectionChange'] = var28;
            var27 = function onKeyPress(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.key;
                var1 = _closure2_slot2;
                var1['current'] = var2;
                var1 = undefined;
                return var1;
            };
            var7['onKeyPress'] = var27;
            var7['onSubmitEditing'] = var11;
            var7['onFocus'] = var25;
            var27 = var24 != var26;
            var25 = var20;
            if(!var27) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var25 = var26;
case 71:
            var7['username'] = var25;
            var24 = var24 != var23;
            if(!var24) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var20 = var23;
case 73:
            var7['discriminator'] = var20;
            var7['validationState'] = var10;
            var7['autoFocus'] = var19;
            var7['headerText'] = var18;
            var7['headerTextStyle'] = var17;
            var17 = arg2;
            var7['ref'] = var17;
            var8 = var16.bind(var4)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var12 > var13;
            if(!var8) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var8 = var15;
case 75:
            if(!var8) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var17 = _closure1_slot11;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var14.friendMessageContainer;
            var15['style'] = var18;
            var20 = _closure1_slot10;
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 19;
            var18 = var23[var18];
            var18 = var27.bind(var4)(var18);
            var19 = var18.TextArea;
            var18 = {};
            var26 = 8;
            var24 = var23[var26];
            var24 = var27.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var26];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.Yi6Mpu;
            var23 = var24.bind(var25)(var23);
            var18['label'] = var23;
            var18['value'] = var22;
            var22 = 120;
            var18['maxLength'] = var22;
            var18['onChange'] = var21;
            var23 = var10.field;
            var21 = _closure1_slot15;
            var22 = var21.MESSAGE;
            var21 = undefined;
            if(!(var23 === var22)) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var23 = var10.status;
            var22 = _closure1_slot14;
            var22 = var22.ERROR;
            var21 = undefined;
            if(!(var23 === var22)) { _fun0004_ip = 79; continue _fun0004 }
case 81:
            var21 = 'error';
case 79:
            var18['status'] = var21;
            var19 = var20.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var20 = var10.status;
            var19 = _closure1_slot14;
            var19 = var19.ERROR;
            if(!(var20 === var19)) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var20 = var10.field;
            var19 = _closure1_slot15;
            var19 = var19.MESSAGE;
            if(!(var20 !== var19)) { _fun0004_ip = 84; continue _fun0004 }
case 82:
            var21 = _closure1_slot10;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 9;
            var19 = var22[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var23 = var14.redesignFooterText;
            var19['style'] = var23;
            var23 = var22[var26];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var26];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.UtfQNw;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            _fun0004_ip = 85; continue _fun0004;
case 84:
            var22 = _closure1_slot10;
            var21 = _closure1_slot18;
            var20 = {};
            var23 = var10.message;
            var20['errorMessage'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 85:
            var18[1] = var19;
            var15['children'] = var18;
            var8 = var17.bind(var4)(var16, var15);
case 77:
            var7[1] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
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
            var6 = 20;
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
            var14 = var14.PMsq/b;
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
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();