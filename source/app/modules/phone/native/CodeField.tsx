// app/modules/phone/native/CodeField.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function SingleCodeInput(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.loading;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = false;
case 2:
            var11 = var1.error;
            var14 = var1.count;
            if(!(var14 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = 6;
case 4:
            var16 = var1.codeType;
            if(!(var16 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot9;
            var16 = var2.NUMERIC;
case 6:
            var _closure2_slot0 = var16;
            var2 = var1.onCodeEntered;
            var _closure2_slot1 = var2;
            var13 = var1.disabled;
            var12 = var1.code;
            var _closure2_slot2 = var12;
            var1 = var1.setCode;
            var _closure2_slot3 = var1;
            var1 = _closure1_slot10;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.singleInputWrapper;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var19 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 9;
            var5 = var8[var5];
            var5 = var19.bind(var4)(var5);
            var6 = var5.TextInput;
            var5 = {};
            var5['errorMessage'] = var11;
            var5['value'] = var12;
            var11 = 'characters';
            var5['autoCapitalize'] = var11;
            var5['maxLength'] = var14;
            var20 = 10;
            var11 = var8[var20];
            var11 = var19.bind(var4)(var11);
            var18 = var11.intl;
            var11 = var18.string;
            var8 = var8[var20];
            var8 = var19.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.ysthAw;
            var8 = var11.bind(var18)(var8);
            var5['accessibilityLabel'] = var8;
            var8 = 'oneTimeCode';
            var5['textContentType'] = var8;
            var8 = _closure1_slot9;
            var11 = var8.NUMERIC;
            var8 = 'default';
            if(!(var16 === var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = 'number-pad';
case 8:
            var5['keyboardType'] = var8;
            var8 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot9;
                    var2 = var2.NUMERIC;
                    if(!(var3 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = /[^A-Z0-9]/g;
                    _fun0002_ip = 12; continue _fun0002;
case 10:
                    var4 = /\D/g;
case 12:
                    var3 = var5.replace;
                    var2 = '';
                    var3 = var3.bind(var5)(var4, var2);
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var5['onChange'] = var8;
            var5['isDisabled'] = var13;
            var8 = true;
            var5['isClearable'] = var8;
            var5['autoFocus'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.singleInputButton;
            var6['style'] = var10;
            var11 = _closure1_slot7;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 11;
            var9 = var16[var9];
            var9 = var19.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {'loading': null, 'variant': 'primary', 'size': 'lg'};
            var9['loading'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.13ofGh;
            var16 = var17.bind(var18)(var16);
            var9['text'] = var16;
            var15 = function onPress() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onPress'] = var15;
            var12 = var12.length;
            var12 = var12 !== var14;
            if(var12) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = var13;
case 13:
            var9['disabled'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function CodeFieldInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var27 = var1.title;
            var17 = var1.description;
            var25 = var1.error;
            var23 = var1.onCodeEntered;
            var26 = var1.loading;
            var4 = undefined;
            if(!(var26 === var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var26 = false;
case 15:
            var24 = var1.count;
            if(!(var24 === var4)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var24 = 6;
case 17:
            var22 = var1.codeType;
            if(!(var22 === var4)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = _closure1_slot9;
            var22 = var2.NUMERIC;
case 19:
            var12 = var1.actions;
            var9 = var1.footer;
            var7 = var1.backgroundStyle;
            var21 = var1.disabled;
            var1 = _closure1_slot10;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = '';
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var20 = var2[var1];
            var1 = 1;
            var19 = var2[var1];
            var3 = _closure1_slot8;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = var16.background;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = var16.backgroundFlex;
            var1['contentContainerStyle'] = var5;
            var5 = 'handled';
            var1['keyboardShouldPersistTaps'] = var5;
            var5 = false;
            var1['alwaysBounceVertical'] = var5;
            var8 = _closure1_slot8;
            var7 = _closure1_slot5;
            var5 = {};
            var10 = var16.container;
            var5['style'] = var10;
            var18 = _closure1_slot7;
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = 12;
            var11 = var10[var13];
            var11 = var14.bind(var4)(var11);
            var15 = var11.Text;
            var11 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var28 = var16.title;
            var11['style'] = var28;
            var11['children'] = var27;
            var15 = var18.bind(var4)(var15, var11);
            var11 = new Array(4);
            var11[0] = var15;
            var15 = _closure1_slot7;
            var13 = var10[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var18 = var16.subtitle;
            var13['style'] = var18;
            var13['children'] = var17;
            var13 = var15.bind(var4)(var14, var13);
            var11[1] = var13;
            var15 = _closure1_slot7;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var16.inputContainer;
            var13['style'] = var16;
            var18 = _closure1_slot7;
            var17 = _closure1_slot11;
            var16 = {};
            var16['loading'] = var26;
            var16['error'] = var25;
            var16['count'] = var24;
            var16['onCodeEntered'] = var23;
            var16['codeType'] = var22;
            var16['disabled'] = var21;
            var16['code'] = var20;
            var16['setCode'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var11[2] = var13;
            var11[3] = var12;
            var5['children'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var6 = 13;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var5 = var7[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot5 = var5;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var15 = var4.Fonts;
    var14 = 4;
    var4 = var7[var14];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {};
    var5 = 'numeric';
    var4['NUMERIC'] = var5;
    var5 = 'alphanumeric';
    var4['ALPHANUMERIC'] = var5;
    var _closure1_slot9 = var4;
    var5 = 5;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var8 = {};
    var5 = {};
    var5['flex'] = var12;
    var8['viewWrapper'] = var5;
    var11 = {};
    var5 = 6;
    var16 = var7[var5];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOBILE_SECONDARY;
    var11['backgroundColor'] = var16;
    var11['flex'] = var12;
    var8['background'] = var11;
    var11 = {'flex': 1, 'justifyContent': 'space-between'};
    var8['backgroundFlex'] = var11;
    var11 = {};
    var12 = 16;
    var11['padding'] = var12;
    var8['container'] = var11;
    var16 = 'center';
    var11 = {'height': 190, 'alignSelf': 'center', 'resizeMode': 'contain'};
    var8['image'] = var11;
    var11 = {};
    var11['textAlign'] = var16;
    var8['title'] = var11;
    var11 = {'marginTop': 8, 'lineHeight': 18, 'textAlign': 'center'};
    var8['subtitle'] = var11;
    var11 = {'color': null, 'textAlign': 'center', 'marginTop': 8};
    var12 = var7[var5];
    var12 = var13.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_400;
    var11['color'] = var12;
    var8['bodyError'] = var11;
    var12 = '100%';
    var11 = {'marginTop': 20, 'width': '100%', 'alignItems': 'center'};
    var8['inputContainer'] = var11;
    var11 = {'maxWidth': 336, 'width': '100%', 'flexDirection': 'row', 'justifyContent': 'space-around'};
    var8['codeContainer'] = var11;
    var11 = {};
    var11['width'] = var14;
    var8['spacer'] = var11;
    var11 = {'borderWidth': 1, 'borderRadius': 5, 'alignItems': 'center'};
    var17 = var7[var5];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_TERTIARY;
    var11['backgroundColor'] = var17;
    var17 = var7[var5];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_TERTIARY;
    var11['borderColor'] = var17;
    var8['inputWrapper'] = var11;
    var11 = {};
    var17 = var7[var5];
    var17 = var13.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.RED_400;
    var11['borderColor'] = var17;
    var8['inputWrapperError'] = var11;
    var11 = {};
    var11['textAlign'] = var16;
    var8['input'] = var11;
    var11 = {};
    var16 = 7;
    var16 = var7[var16];
    var16 = var13.bind(var1)(var16);
    var15 = var15.PRIMARY_MEDIUM;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var5 = var5.colors;
    var13 = var5.TEXT_NORMAL;
    var5 = 14;
    var19 = var16.bind(var1)(var15, var13, var5);
    var20 = var11;
    var13 = copyDataProperties(var20, var19);
    var13 = 'marginHorizontal';
    var11[var13] = var14;
    var8['actionSeparator'] = var11;
    var11 = {};
    var11['width'] = var12;
    var8['singleInputWrapper'] = var11;
    var11 = {};
    var12 = 42;
    var11['height'] = var12;
    var8['singleInput'] = var11;
    var11 = {'marginTop': 8, 'justifyContent': 'flex-end'};
    var8['singleInputButton'] = var11;
    var11 = {};
    var12 = 70;
    var11['paddingBottom'] = var12;
    var8['bottomSpace'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot10 = var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/phone/native/CodeField.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function CodeField(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot10;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = var6.disableKeyboardAvoidingView;
            var4 = _closure1_slot7;
            if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var7 = var7.viewWrapper;
            var1['style'] = var7;
            var9 = _closure1_slot7;
            var8 = _closure1_slot12;
            var7 = {};
            var12 = var7;
            var11 = var6;
            var10 = copyDataProperties(var12, var11);
            var7 = var9.bind(var5)(var8, var7);
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 23; continue _fun0004;
case 21:
            var3 = _closure1_slot12;
            var2 = {};
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var1 = var4.bind(var5)(var3, var2);
case 23:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['CodeType'] = var4;
    var2 = function CodeBlocks(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.hasError;
            var _closure2_slot0 = var3;
            var10 = var1.onCodeEntered;
            var _closure2_slot1 = var10;
            var7 = var1.count;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0005_ip = 24; continue _fun0005 }
case 4:
            var7 = 6;
case 24:
            var _closure2_slot2 = var7;
            var1 = var1.codeType;
            if(!(var1 === var4)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var3 = _closure1_slot9;
            var1 = var3.NUMERIC;
case 25:
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var3 = _closure1_slot10;
            var6 = var3.bind(var4)();
            _closure2_slot4 = var6;
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var8 = global;
            var3 = var8.Array;
            var12 = var3.bind(var4)(var7);
            var11 = var12.fill;
            var3 = '';
            var3 = var11.bind(var12)(var3);
            var9 = var5.bind(var9)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var11 = var5.bind(var4)(var9, var3);
            var3 = 0;
            var5 = var11[var3];
            _closure2_slot5 = var5;
            var9 = 1;
            var9 = var11[var9];
            _closure2_slot6 = var9;
            var11 = _closure1_slot4;
            var9 = var11.useRef;
            var8 = var8.Array;
            var13 = var8.bind(var4)(var7);
            var12 = var13.fill;
            var8 = null;
            var8 = var12.bind(var13)(var8);
            var8 = var9.bind(var11)(var8);
            _closure2_slot7 = var8;
            var9 = _closure1_slot4;
            var8 = var9.useRef;
            var8 = var8.bind(var9)(var10);
            _closure2_slot8 = var8;
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var8 = function() {
                var2 = _closure2_slot8;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot5;
                    var3 = function isCodeEntered(arg1) {
                        var3 = arg1;
                        var2 = var3.every;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var1 = var2.trim;
                            var2 = var1.bind(var2)();
                            var1 = '';
                            var1 = var1 !== var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    if(!var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var4 = _closure2_slot8;
                    var3 = var4.current;
                    var6 = _closure2_slot5;
                    var5 = var6.join;
                    var2 = '';
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 27:
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var5, var8);
            var5 = new Array(0);
            _closure2_slot9 = var5;
            var2 = function _loop(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var2 = _closure2_slot2;
                    var1 = 2;
                    var1 = var2 / var1;
                    if(!(var7 === var1)) { _fun0007_ip = 29; continue _fun0007 }
case 11:
                    var3 = _closure2_slot9;
                    var2 = var3.push;
                    var8 = _closure1_slot7;
                    var6 = _closure1_slot5;
                    var5 = {};
                    var1 = _closure2_slot4;
                    var1 = var1.spacer;
                    var5['style'] = var1;
                    var4 = undefined;
                    var1 = 'spacer';
                    var1 = var8.bind(var4)(var6, var5, var1);
                    var1 = var2.bind(var3)(var1);
case 29:
                    var4 = _closure2_slot9;
                    var3 = var4.push;
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot5;
                    var2 = {};
                    var1 = _closure2_slot4;
                    var8 = var1.inputWrapper;
                    var1 = new Array(2);
                    var1[0] = var8;
                    var9 = _closure2_slot0;
                    var8 = null;
                    if(!var9) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var9 = _closure2_slot4;
                    var8 = var9.inputWrapperError;
case 30:
                    var1[1] = var8;
                    var2['style'] = var1;
                    var10 = _closure1_slot7;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var8 = var8[var1];
                    var1 = undefined;
                    var8 = var9.bind(var1)(var8);
                    var9 = var8.TextInput;
                    var8 = {};
                    var14 = function ref(arg1) {
                        var1 = _closure2_slot7;
                        var3 = var1.current;
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var3[var2] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var8['ref'] = var14;
                    var15 = {};
                    var14 = 42;
                    var15['height'] = var14;
                    var16 = _closure2_slot2;
                    var14 = 252;
                    var14 = var14 / var16;
                    var15['width'] = var14;
                    var14 = new Array(2);
                    var14[0] = var15;
                    var15 = _closure2_slot4;
                    var15 = var15.input;
                    var14[1] = var15;
                    var8['style'] = var14;
                    var15 = _closure2_slot3;
                    var13 = _closure1_slot9;
                    var14 = var13.NUMERIC;
                    var13 = 'default';
                    if(!(var15 === var14)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var13 = 'phone-pad';
case 32:
                    var8['keyboardType'] = var13;
                    var13 = 0;
                    var13 = var13 === var7;
                    var8['autoFocus'] = var13;
                    var13 = _closure2_slot5;
                    var13 = var13[var7];
                    var8['value'] = var13;
                    var13 = function onKeyPress(arg1) {
                        var4 = _closure3_slot0;
                        var3 = function onKeyPress(arg1, arg2) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var3 = arg1;
                                var1 = arg2;
                                var1 = var1.nativeEvent;
                                var2 = var1.key;
                                var1 = 'Backspace';
                                if(!(var1 === var2)) { _fun0008_ip = 34; continue _fun0008 }
case 11:
                                var1 = _closure2_slot5;
                                var1 = var1[var3];
                                var7 = '';
                                if(!(var7 === var1)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                                var6 = _closure2_slot6;
                                var11 = _closure2_slot5;
                                var1 = 1;
                                var4 = var3 - var1;
                                var5 = new Array(0);
                                var10 = 0;
                                var12 = var5;
                                var8 = arraySpread(var12, var11, var10);
                                var5[var4] = var7;
                                var4 = undefined;
                                var4 = var6.bind(var4)(var5);
                                var2 = _closure2_slot7;
                                var2 = var2.current;
                                var1 = var3 - var1;
                                var2 = var2[var1];
                                var1 = null;
                                if(!(var1 != var2)) { _fun0008_ip = 35; continue _fun0008 }
case 37:
                                var1 = var2.focus;
                                var1 = var1.bind(var2)();
                                _fun0008_ip = 35; continue _fun0008;
case 34:
                                var1 = _closure2_slot7;
                                var2 = var1.current;
                                var1 = 1;
                                var1 = var3 + var1;
                                var2 = var2[var1];
                                var1 = null;
                                if(!(var1 != var2)) { _fun0008_ip = 35; continue _fun0008 }
case 38:
                                var1 = var2.focus;
                                var1 = var1.bind(var2)();
case 35:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var4, var2);
                        return var1;
                    };
                    var8['onKeyPress'] = var13;
                    var11 = function onChangeText(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = arg1;
                            var6 = _closure3_slot0;
                            var5 = 0;
                            var3 = var4[var5];
                            var2 = _closure2_slot5;
                            var2 = var2[var6];
                            var7 = var4;
                            if(!(var3 === var2)) { _fun0009_ip = 7; continue _fun0009 }
case 5:
                            var3 = var4.slice;
                            var2 = 1;
                            var7 = var3.bind(var4)(var2);
case 7:
                            var4 = var7.replace;
                            var2 = '-';
                            var3 = '';
                            var4 = var4.bind(var7)(var2, var3);
                            var2 = var4.trim;
                            var4 = var2.bind(var4)();
                            var2 = var4.toUpperCase;
                            var2 = var2.bind(var4)();
                            var4 = var2.split;
                            var7 = var4.bind(var2)(var3);
                            if(!(var3 === var2)) { _fun0009_ip = 37; continue _fun0009 }
case 39:
                            var7 = [''];
case 37:
                            var9 = _closure2_slot5;
                            var4 = new Array(0);
                            var10 = var4;
                            var8 = 0;
                            var2 = arraySpread(var10, var9, var8);
                            var3 = var4.splice;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var6 = 1;
                            var2[1] = var6;
                            var8 = 2;
                            var10 = var2;
                            var9 = var7;
                            var6 = arraySpread(var10, var9, var8);
                            var10 = var3;
                            var9 = var2;
                            var8 = var4;
                            var2 = apply(var10, var9, var8);
                            var3 = _closure2_slot6;
                            var2 = var4.slice;
                            var1 = _closure2_slot2;
                            var2 = var2.bind(var4)(var5, var1);
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var8['onChangeText'] = var11;
                    var11 = {};
                    var13 = _closure2_slot5;
                    var13 = var13[var7];
                    var13 = var13.length;
                    var11['start'] = var13;
                    var12 = _closure2_slot5;
                    var12 = var12[var7];
                    var12 = var12.length;
                    var11['end'] = var12;
                    var8['selection'] = var11;
                    var11 = 'characters';
                    var8['autoCapitalize'] = var11;
                    var11 = false;
                    var8['autoCorrect'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var2['children'] = var8;
                    var2 = var6.bind(var1)(var5, var2, var7);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var3 < var7;
            if(!var8) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var8 = var2.bind(var4)(var3);
            var3 = var3 + 1;
            if(var3 < var7) { _fun0005_ip = 41; continue _fun0005 }
case 40:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var6.codeContainer;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['CodeBlocks'] = var2;
    return var1;
})();