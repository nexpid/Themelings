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
        var2 = 7;
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
    var _closure1_slot16 = var1;
    var1 = function ErrorMessage(arg1) {
        var1 = arg1;
        var5 = var1.errorMessage;
        var2 = _closure1_slot12;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
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
    var4 = var4.Keyboard;
    var _closure1_slot6 = var4;
    var9 = 3;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PLACEHOLDER_TAG;
    var _closure1_slot7 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var18 = 4;
    var4 = var6[var18];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.jsxs;
    var _closure1_slot10 = var8;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var13 = var5.bind(var1)(var4);
    var8 = var13.createStyles;
    var4 = {};
    var14 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 16};
    var15 = 6;
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
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_MUTED;
    var14['color'] = var19;
    var4['placeholderText'] = var14;
    var14 = {'fontSize': 12, 'lineHeight': 16, 'marginVertical': 8};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_SUBTLE;
    var14['color'] = var19;
    var4['inputAccessoryText'] = var14;
    var14 = {};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var14['marginBottom'] = var19;
    var4['redesignInputAccessoryText'] = var14;
    var14 = {};
    var14['marginTop'] = var12;
    var4['inputHeaderText'] = var14;
    var14 = {};
    var14['flexGrow'] = var10;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_24;
    var14['minHeight'] = var19;
    var4['redesignGrow'] = var14;
    var14 = {};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.unsafe_rawColors;
    var19 = var19.RED_400;
    var14['color'] = var19;
    var14['marginVertical'] = var18;
    var4['errorStateText'] = var14;
    var14 = {};
    var14['alignSelf'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var14['marginTop'] = var17;
    var4['friendMessageContainer'] = var14;
    var14 = {};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_4;
    var14['marginBottom'] = var17;
    var4['messageLabel'] = var14;
    var14 = {};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var14['marginTop'] = var15;
    var4['messageFooterText'] = var14;
    var4 = var8.bind(var13)(var4);
    var _closure1_slot12 = var4;
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
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'DISCORD_TAG';
    var4['DISCORD_TAG'] = var8;
    var8 = 'MESSAGE';
    var4['MESSAGE'] = var8;
    var _closure1_slot14 = var4;
    var8 = var7.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.textState;
            var16 = var1.onChangeText;
            var15 = var1.onSelectionChange;
            var14 = var1.onKeyPress;
            var13 = var1.onSubmitEditing;
            var6 = var1.onFocus;
            var19 = var1.validationState;
            var12 = var1.autoFocus;
            var11 = var1.headerText;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var3 = var8[var2];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.YegTF2;
            var3 = var3.bind(var5)(var2);
            var2 = var3.toUpperCase;
            var11 = var2.bind(var3)();
case 2:
            var22 = var1.headerTextStyle;
            var1 = _closure1_slot12;
            var17 = var1.bind(var4)();
            var2 = var19.status;
            var1 = _closure1_slot13;
            var1 = var1.ERROR;
            var10 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var19.field;
            var1 = _closure1_slot14;
            var1 = var1.DISCORD_TAG;
            var10 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var10 = var19.message;
case 4:
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var17.textInputContainer;
            var1['style'] = var5;
            var9 = _closure1_slot9;
            var23 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 8;
            var5 = var18[var5];
            var5 = var23.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var24 = var17.redesignInputAccessoryText;
            var21 = new Array(3);
            var21[0] = var24;
            var24 = var17.inputHeaderText;
            var21[1] = var24;
            var21[2] = var22;
            var5['style'] = var21;
            var5['children'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var11 = _closure1_slot9;
            var8 = 9;
            var8 = var18[var8];
            var8 = var23.bind(var4)(var8);
            var9 = var8.TextField;
            var8 = {};
            var21 = arg2;
            var8['ref'] = var21;
            var20 = var20.validatedText;
            var8['value'] = var20;
            var22 = 7;
            var20 = var18[var22];
            var20 = var23.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var18[var22];
            var18 = var23.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.qRaqel;
            var18 = var20.bind(var21)(var18);
            var8['accessibilityLabel'] = var18;
            var21 = var19.status;
            var18 = _closure1_slot13;
            var20 = var18.ERROR;
            var18 = undefined;
            if(!(var21 === var20)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var18 = var19.a11yMessage;
case 7:
            var8['accessibilityHint'] = var18;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.qRaqel;
            var18 = var19.bind(var20)(var18);
            var8['placeholder'] = var18;
            var17 = var17.placeholderText;
            var17 = var17.color;
            var8['placeholderTextColor'] = var17;
            var8['onChange'] = var16;
            var8['onSelectionChange'] = var15;
            var8['onKeyPress'] = var14;
            var8['onSubmitEditing'] = var13;
            var13 = 'none';
            var8['autoCapitalize'] = var13;
            var13 = 'send';
            var8['returnKeyType'] = var13;
            var13 = 'twitter';
            var8['keyboardType'] = var13;
            var13 = false;
            var8['autoCorrect'] = var13;
            var13 = true;
            var8['blurOnSubmit'] = var13;
            var13 = 37;
            var8['maxLength'] = var13;
            var8['autoFocus'] = var12;
            var8['onFocus'] = var6;
            var6 = null;
            var13 = var6 != var10;
            var12 = undefined;
            if(!var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var12 = 'error';
case 9:
            var8['status'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = _closure1_slot9;
            var8 = _closure1_slot17;
            var7 = {};
            var7['errorMessage'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 11:
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var15 = var1.style;
            var19 = var1.onFocus;
            var18 = var1.autoFocusInput;
            var17 = var1.headerText;
            var27 = var1.headerTextStyle;
            var1 = var1.sourcePage;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot12;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var2 = var5.useRef;
            var13 = 0;
            var2 = var2.bind(var5)(var13);
            var _closure2_slot1 = var2;
            var2 = var5.useRef;
            var8 = '';
            var2 = var2.bind(var5)(var8);
            var _closure2_slot2 = var2;
            var3 = var5.useState;
            var2 = function() {
                var2 = _closure1_slot16;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var2 = var3.bind(var5)(var2);
            var7 = _closure1_slot3;
            var6 = 2;
            var2 = var7.bind(var4)(var2, var6);
            var22 = var2[var13];
            var _closure2_slot3 = var22;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var10 = var5.useState;
            var2 = {};
            var11 = _closure1_slot13;
            var11 = var11.NONE;
            var2['status'] = var11;
            var2 = var10.bind(var5)(var2);
            var2 = var7.bind(var4)(var2, var6);
            var10 = var2[var13];
            var _closure2_slot5 = var10;
            var2 = var2[var3];
            var _closure2_slot6 = var2;
            var2 = var5.useState;
            var2 = var2.bind(var5)(var8);
            var2 = var7.bind(var4)(var2, var6);
            var24 = var2[var13];
            var _closure2_slot7 = var24;
            var2 = var2[var3];
            var _closure2_slot8 = var2;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useConfig;
            var2 = {};
            var7 = 'AddFriendbyId';
            var2['location'] = var7;
            var2 = var3.bind(var6)(var2);
            var8 = var2.enabled;
            var6 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure2_slot4;
                    var1 = var5.length;
                    var7 = 0;
                    if(!(!(var1 <= var7))) { _fun0003_ip = 13; continue _fun0003 }
case 14:
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
                    if(!var6) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var6 = _closure1_slot7;
                    var3 = var6.slice;
                    var10 = var10 != var8;
                    var7 = 0;
                    if(!var10) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var8 = var8.length;
                    var7 = var8 + var9;
case 17:
                    var3 = var3.bind(var6)(var7);
                    var1 = var5 + var3;
case 15:
                    var3 = {};
                    var3['validatedText'] = var5;
                    var3['hint'] = var1;
                    _fun0003_ip = 19; continue _fun0003;
case 13:
                    var5 = _closure1_slot16;
                    var1 = undefined;
                    var3 = var5.bind(var1)();
case 19:
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var5 = var3.status;
                    var3 = _closure1_slot13;
                    var3 = var3.ERROR;
                    var3 = var5 === var3;
                    if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var5 = _closure2_slot5;
                    var6 = var5.field;
                    var5 = _closure1_slot14;
                    var5 = var5.DISCORD_TAG;
                    var3 = var6 === var5;
case 20:
                    if(!var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var4 = _closure1_slot13;
                    var4 = var4.NONE;
                    var2['status'] = var4;
                    var2 = var3.bind(var1)(var2);
case 22:
                    return var1;
                }
            };
            var21 = var6.bind(var5)(var2, var3);
            var6 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.replace;
                    var2 = /\n/g;
                    var1 = '';
                    var4 = var3.bind(var4)(var2, var1);
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var3 = _closure2_slot5;
                    var5 = var3.status;
                    var3 = _closure1_slot13;
                    var3 = var3.ERROR;
                    var3 = var5 === var3;
                    if(!var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = _closure2_slot5;
                    var6 = var5.field;
                    var5 = _closure1_slot14;
                    var5 = var5.MESSAGE;
                    var3 = var6 === var5;
case 24:
                    if(!var3) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var4 = _closure1_slot13;
                    var4 = var4.NONE;
                    var2['status'] = var4;
                    var2 = var3.bind(var1)(var2);
case 26:
                    return var1;
                }
            };
            var23 = var6.bind(var5)(var2, var3);
            var11 = function handleSubmitEditing() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    if(!(!(var3 <= var11))) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var4 = var5.includes;
                    var3 = '#';
                    var3 = var4.bind(var5)(var3);
                    var3 = !var3;
                    if(!var3) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var6 = var5.startsWith;
                    var4 = '@';
                    var3 = var6.bind(var5)(var4);
case 30:
                    var7 = var5;
                    if(!var3) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var4 = var5.substring;
                    var3 = 1;
                    var3 = var4.bind(var5)(var3);
                    _closure3_slot0 = var3;
                    var7 = var3;
case 32:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.validateDiscordTag;
                    var5 = var3.bind(var5)(var7);
                    var3 = null;
                    var12 = var7;
                    if(!(var3 == var5)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var7 = _closure2_slot6;
                    var3 = {};
                    var8 = _closure1_slot13;
                    var8 = var8.LOADING;
                    var3['status'] = var8;
                    var3 = var7.bind(var4)(var3);
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 12;
                    var3 = var13[var9];
                    var8 = var7.bind(var4)(var3);
                    var7 = var8.sendRequest;
                    var3 = {};
                    var3['discordTag'] = var12;
                    var12 = {};
                    var14 = 'Search - Add Friend Search';
                    var12['location'] = var14;
                    var3['context'] = var12;
                    var12 = _closure1_slot0;
                    var9 = var13[var9];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.RelationshipErrorUXConfig;
                    var9 = var9.SHOW_ONLY_IF_ACTION_NEEDED;
                    var3['errorUxConfig'] = var9;
                    var9 = var10.length;
                    var11 = var9 > var11;
                    var9 = undefined;
                    if(!var11) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var9 = var10;
case 36:
                    var3['note'] = var9;
                    var8 = var7.bind(var8)(var3);
                    var7 = var8.then;
                    var3 = function() {
                        var5 = _closure2_slot4;
                        var4 = _closure1_slot16;
                        var1 = undefined;
                        var4 = var4.bind(var1)();
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot8;
                        var4 = '';
                        var4 = var5.bind(var1)(var4);
                        var6 = _closure2_slot6;
                        var3 = {};
                        var4 = _closure1_slot13;
                        var4 = var4.SUCCESS;
                        var3['status'] = var4;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var7 = 7;
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
                        var3 = 13;
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
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var10 = arg1;
                            var9 = null;
                            var3 = var9 == var10;
                            var1 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                            var3 = var10.body;
                            var4 = var9 == var3;
                            var2 = undefined;
                            if(var4) { _fun0006_ip = 38; continue _fun0006 }
case 40:
                            var2 = var3.note;
case 38:
                            if(!(var9 == var2)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                            var3 = _closure2_slot6;
                            var2 = {};
                            var4 = _closure1_slot13;
                            var4 = var4.ERROR;
                            var2['status'] = var4;
                            var4 = _closure1_slot14;
                            var4 = var4.DISCORD_TAG;
                            var2['field'] = var4;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var8 = 11;
                            var4 = var4[var8];
                            var13 = var6.bind(var1)(var4);
                            var12 = var13.humanizeAbortCode;
                            var6 = var9 == var10;
                            var4 = undefined;
                            if(var6) { _fun0006_ip = 43; continue _fun0006 }
case 32:
                            var6 = var10.body;
                            var7 = var9 == var6;
                            var4 = undefined;
                            if(var7) { _fun0006_ip = 43; continue _fun0006 }
case 2:
                            var4 = var6.code;
case 43:
                            var6 = var9 != var4;
                            var7 = -1;
                            var11 = var7;
                            if(!var6) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                            var11 = var4;
case 44:
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
                            if(var11) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                            var10 = var10.body;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                            var8 = var10.code;
case 46:
                            var9 = var9 != var8;
                            if(!var9) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                            var7 = var8;
case 49:
                            var4 = _closure3_slot0;
                            var4 = var5.bind(var6)(var7, var4);
                            var2['a11yMessage'] = var4;
                            var2 = var3.bind(var1)(var2);
                            _fun0006_ip = 51; continue _fun0006;
case 41:
                            var3 = _closure2_slot6;
                            var2 = {};
                            var5 = _closure1_slot13;
                            var5 = var5.ERROR;
                            var2['status'] = var5;
                            var5 = _closure1_slot14;
                            var5 = var5.MESSAGE;
                            var2['field'] = var5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 7;
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
case 51:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var3, var2);
                    _fun0005_ip = 52; continue _fun0005;
case 34:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var7 = _closure1_slot13;
                    var7 = var7.ERROR;
                    var2['status'] = var7;
                    var6 = _closure1_slot14;
                    var6 = var6.DISCORD_TAG;
                    var2['field'] = var6;
                    var2['message'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0005_ip = 52; continue _fun0005;
case 28:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var4 = _closure1_slot13;
                    var4 = var4.ERROR;
                    var2['status'] = var4;
                    var4 = _closure1_slot14;
                    var4 = var4.DISCORD_TAG;
                    var2['field'] = var4;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var5 = var8[var4];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.t;
                    var4 = var4.mxnceg;
                    var4 = var5.bind(var6)(var4);
                    var2['message'] = var4;
                    var1 = var3.bind(var1)(var2);
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot8;
                var3 = var2.FRIEND_ADD_VIEWED;
                var2 = {};
                var6 = 'Id';
                var2['friend_add_type'] = var6;
                var6 = _closure2_slot0;
                var2['source_page'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var4 = var2.status;
                    var3 = _closure1_slot13;
                    var3 = var3.ERROR;
                    var3 = var4 === var3;
                    if(!var3) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var4 = _closure2_slot5;
                    var5 = var4.a11yMessage;
                    var4 = null;
                    var3 = var4 != var5;
case 53:
                    if(!var3) { _fun0007_ip = 17; continue _fun0007 }
case 55:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = _closure2_slot5;
                    var1 = var1.a11yMessage;
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var2 = var22.validatedText;
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            var12 = var1.length;
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var6 = _closure1_slot5;
            var5 = {};
            var16 = var14.container;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var15;
            var5['style'] = var7;
            var16 = _closure1_slot9;
            var15 = _closure1_slot15;
            var7 = {};
            var7['textState'] = var22;
            var7['onChangeText'] = var21;
            var21 = function onSelectionChange(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.selection;
                    var2 = var1.start;
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(!(var2 !== var3)) { _fun0008_ip = 56; continue _fun0008 }
case 38:
                    var1 = _closure2_slot1;
                    var1['current'] = var2;
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onSelectionChange'] = var21;
            var20 = function onKeyPress(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.key;
                var1 = _closure2_slot2;
                var1['current'] = var2;
                var1 = undefined;
                return var1;
            };
            var7['onKeyPress'] = var20;
            var7['onSubmitEditing'] = var11;
            var7['onFocus'] = var19;
            var7['validationState'] = var10;
            var7['autoFocus'] = var18;
            var7['headerText'] = var17;
            var7['headerTextStyle'] = var27;
            var17 = arg2;
            var7['ref'] = var17;
            var15 = var16.bind(var4)(var15, var7);
            var7 = new Array(2);
            var7[0] = var15;
            if(!var8) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var17 = _closure1_slot10;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var14.friendMessageContainer;
            var15['style'] = var18;
            var22 = _closure1_slot9;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 8;
            var18 = var25[var19];
            var18 = var21.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var28 = var14.messageLabel;
            var26 = new Array(3);
            var26[0] = var28;
            var28 = var14.inputHeaderText;
            var26[1] = var28;
            var26[2] = var27;
            var18['style'] = var26;
            var26 = 7;
            var27 = var25[var26];
            var27 = var21.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var25[var26];
            var27 = var21.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.Yi6Mpu;
            var27 = var28.bind(var29)(var27);
            var18['children'] = var27;
            var20 = var22.bind(var4)(var20, var18);
            var18 = new Array(3);
            var18[0] = var20;
            var22 = _closure1_slot9;
            var20 = 16;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.TextArea;
            var20 = {'returnKeyType': 'done', 'submitBehavior': 'submit', 'value': null, 'maxLength': 120};
            var20['value'] = var24;
            var20['onSubmitEditing'] = var11;
            var20['onChange'] = var23;
            var25 = var10.field;
            var23 = _closure1_slot14;
            var24 = var23.MESSAGE;
            var23 = undefined;
            if(!(var25 === var24)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var25 = var10.status;
            var24 = _closure1_slot13;
            var24 = var24.ERROR;
            var23 = undefined;
            if(!(var25 === var24)) { _fun0002_ip = 59; continue _fun0002 }
case 61:
            var23 = 'error';
case 59:
            var20['status'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var18[1] = var20;
            var21 = var10.status;
            var20 = _closure1_slot13;
            var20 = var20.ERROR;
            if(!(var21 === var20)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var21 = var10.field;
            var20 = _closure1_slot14;
            var20 = var20.MESSAGE;
            if(!(var21 !== var20)) { _fun0002_ip = 64; continue _fun0002 }
case 62:
            var21 = _closure1_slot9;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = var22[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var23 = var14.messageFooterText;
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
            _fun0002_ip = 65; continue _fun0002;
case 64:
            var22 = _closure1_slot9;
            var21 = _closure1_slot17;
            var20 = {};
            var23 = var10.message;
            var20['errorMessage'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 65:
            var18[2] = var19;
            var15['children'] = var18;
            var8 = var17.bind(var4)(var16, var15);
case 57:
            var7[1] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var14 = var14.redesignGrow;
            var6['style'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot9;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 17;
            var6 = var18[var6];
            var6 = var17.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var14 = 'lg';
            var6['size'] = var14;
            var14 = 7;
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
            var9 = _closure1_slot13;
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
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();