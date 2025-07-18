// app/uikit-native/InputView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = ['numberOfLines', 'disableConstantNumberOfLines', 'inputTextColor', 'placeholder', 'placeholderTextColor', 'editable', 'large', 'accessibilityHint', 'maxLength', 'inActionSheet', 'trailingButton', 'clearButtonVisibility', 'disabled', 'style', 'inputTextStyle', 'onChangeText', 'onFocus', 'value'];
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var15 = 5;
    var2 = var7[var15];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var5 = var7[var2];
    var2 = native4;
    var5 = var2.bind(var1)(var5);
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.View;
    var _closure1_slot10 = var8;
    var8 = var2.Pressable;
    var _closure1_slot11 = var8;
    var8 = var2.TouchableWithoutFeedback;
    var _closure1_slot12 = var8;
    var2 = var2.Platform;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var14 = var2.Fonts;
    var _closure1_slot13 = var14;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot14 = var8;
    var2 = var2.jsxs;
    var _closure1_slot15 = var2;
    var11 = 10;
    var2 = var7[var11];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createLegacyClassComponentStyles;
    var2 = {};
    var10 = {};
    var13 = 0.5;
    var10['opacity'] = var13;
    var2['disabled'] = var10;
    var10 = {'minHeight': 16, 'alignItems': 'center', 'flexDirection': 'row', 'marginBottom': 5, 'flexWrap': 'wrap'};
    var2['topContainer'] = var10;
    var10 = {};
    var10['marginRight'] = var15;
    var2['inputViewTitle'] = var10;
    var10 = {};
    var10['fontSize'] = var11;
    var11 = 11;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var10['color'] = var13;
    var2['inputViewError'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var10['backgroundColor'] = var13;
    var2['inputBorder'] = var10;
    var10 = {'fontSize': 16, 'paddingBottom': 0, 'paddingTop': 0, 'textAlignVertical': 'top', 'flex': 1};
    var13 = 12;
    var16 = var7[var13];
    var16 = var6.bind(var1)(var16);
    var16 = var16.DARK_PRIMARY_100_LIGHT_PRIMARY_500;
    var10['color'] = var16;
    var2['inputView'] = var10;
    var10 = {'marginTop': 8, 'height': 2};
    var2['inputViewBorder'] = var10;
    var10 = {};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.TRANSPARENT;
    var10['backgroundColor'] = var16;
    var2['inputViewBorderActive'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
    var2['inputContainer'] = var10;
    var10 = {};
    var10['marginTop'] = var15;
    var2['bottomContainer'] = var10;
    var10 = {};
    var15 = 'flex-end';
    var10['alignSelf'] = var15;
    var14 = var14.CODE_BOLD;
    var10['fontFamily'] = var14;
    var13 = var7[var13];
    var13 = var6.bind(var1)(var13);
    var13 = var13.DARK_PRIMARY_400_LIGHT_PRIMARY_300;
    var10['color'] = var13;
    var2['charactersLength'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var10['tintColor'] = var13;
    var2['closeIcon'] = var10;
    var10 = {'position': 'absolute', 'right': 6};
    var2['clearButton'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var10['color'] = var11;
    var2['required'] = var10;
    var2 = var8.bind(var9)(var2);
    var _closure1_slot16 = var2;
    var2 = {};
    var8 = 'never';
    var2['NEVER'] = var8;
    var8 = 'with-content';
    var2['WITH_CONTENT'] = var8;
    var8 = 'always';
    var2['ALWAYS'] = var8;
    var _closure1_slot17 = var2;
    var5 = var5.PureComponent;
    var4 = function(arg1) {
        var5 = function InputView(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot5;
                var4 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var4);
                var4 = _closure1_slot7;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var3)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var4.bind(var3)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var5 = false;
                var4['active'] = var5;
                var5 = var1.props;
                var5 = var5.value;
                var4['value'] = var5;
                var5 = var1.props;
                var5 = var5.value;
                var4['valueProp'] = var5;
                var1['state'] = var4;
                var1['_ref'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.onFocus;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 30; continue _fun0003 }
 24:
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 30:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1['active'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = false;
                    var1['active'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleBlur'] = var3;
                var3 = function(arg1) {
                    var5 = arg1;
                    var _closure4_slot0 = var5;
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var2['value'] = var5;
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = _closure3_slot0;
                            var1 = var1.props;
                            var3 = var1.onChangeText;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0004_ip = 38; continue _fun0004 }
 24:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 38:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleChangeText'] = var3;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleChangeText;
                    var1 = '';
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleClear'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.onEnd;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 45; continue _fun0005 }
 24:
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var2 = var1.value;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleEndEditing'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.onNext;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0006_ip = 30; continue _fun0006 }
 24:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSubmitEditing'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.state;
                    var1 = var1.value;
                    return var1;
                };
                var1['getText'] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure3_slot0;
                        var4 = var1._ref;
                        var1 = null;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if(var3) { _fun0007_ip = 34; continue _fun0007 }
 24:
                        var3 = var4.isFocused;
                        var2 = var3.bind(var4)();
 34:
                        var1 = var1 != var2;
                        if(!var1) { _fun0007_ip = 44; continue _fun0007 }
 41:
                        var1 = var2;
 44:
                        return var1;
                    }
                };
                var1['isFocused'] = var3;
                var3 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = var1._ref;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0008_ip = 29; continue _fun0008 }
 19:
                        var1 = var2.focus;
                        var1 = var1.bind(var2)();
 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['focus'] = var3;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = var1._ref;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0009_ip = 29; continue _fun0009 }
 19:
                        var1 = var2.blur;
                        var1 = var1.bind(var2)();
 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['blur'] = var3;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1._ref;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0010_ip = 39; continue _fun0010 }
 19:
                        var2 = var3.setNativeProps;
                        var1 = {};
                        var4 = arg1;
                        var1['text'] = var4;
                        var1 = var2.bind(var3)(var1);
 39:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['setText'] = var3;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['_ref'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['setRef'] = var3;
                var3 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1._ref;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0011_ip = 33; continue _fun0011 }
 19:
                        var2 = var3.measure;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measure'] = var3;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1._ref;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0012_ip = 33; continue _fun0012 }
 19:
                        var2 = var3.measureInWindow;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureInWindow'] = var3;
                var2 = function(arg1, arg2, arg3) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var1 = _closure3_slot0;
                        var5 = var1._ref;
                        var1 = null;
                        if(!(var1 != var5)) { _fun0013_ip = 41; continue _fun0013 }
 19:
                        var4 = var5.measureLayout;
                        var3 = arg1;
                        var2 = arg2;
                        var1 = arg3;
                        var1 = var4.bind(var5)(var3, var2, var1);
 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureLayout'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot9;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot6;
        var6 = {};
        var2 = 'renderBorder';
        var6['key'] = var2;
        var2 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var6 = this;
                var3 = _closure1_slot16;
                var2 = var6.context;
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var2 = var6.props;
                var3 = var2.showBorder;
                var9 = var2.borderColor;
                var2 = null;
                if(var3) { _fun0014_ip = 46; continue _fun0014 }
 44:
                return var2;
 46:
                if(!(var2 == var9)) { _fun0014_ip = 61; continue _fun0014 }
 50:
                var2 = var7.inputBorder;
                var9 = var2.backgroundColor;
 61:
                var3 = _closure1_slot14;
                var2 = _closure1_slot10;
                var1 = {};
                var8 = var7.inputViewBorder;
                var5 = new Array(3);
                var5[0] = var8;
                var8 = {};
                var8['backgroundColor'] = var9;
                var5[1] = var8;
                var6 = var6.state;
                var6 = var6.active;
                if(!var6) { _fun0014_ip = 115; continue _fun0014 }
 109:
                var6 = var7.inputViewBorderActive;
 115:
                var5[2] = var6;
                var1['style'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(6);
        var2[0] = var6;
        var6 = {};
        var7 = 'renderTopContainer';
        var6['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = this;
                var3 = _closure1_slot16;
                var2 = var1.context;
                var4 = undefined;
                var11 = var3.bind(var4)(var2);
                var2 = var1.props;
                var1 = var2.showTopContainer;
                var16 = var2.error;
                var10 = var2.title;
                var12 = var2.errorStyles;
                var14 = var2.errorProps;
                var9 = var2.required;
                var13 = var2.helpText;
                var7 = null;
                var2 = var7 != var16;
                if(!var2) { _fun0015_ip = 84; continue _fun0015 }
 76:
                var3 = '';
                var2 = var3 !== var16;
 84:
                var6 = undefined;
                if(!var2) { _fun0015_ip = 195; continue _fun0015 }
 89:
                var5 = _closure1_slot15;
                var3 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 13;
                var2 = var15[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var19 = var2;
                var18 = var14;
                var14 = copyDataProperties(var19, var18);
                var15 = var11.inputViewError;
                var14 = new Array(2);
                var14[0] = var15;
                var14[1] = var12;
                var12 = 'style';
                var2[var12] = var14;
                var14 = ['('];
                var14[1] = var16;
                var12 = ')';
                var14[2] = var12;
                var12 = 'children';
                var2[var12] = var14;
                var6 = var5.bind(var4)(var3, var2);
 195:
                var2 = var7 != var10;
                if(!var2) { _fun0015_ip = 210; continue _fun0015 }
 202:
                var3 = '';
                var2 = var3 !== var10;
 210:
                var12 = undefined;
                if(!var2) { _fun0015_ip = 318; continue _fun0015 }
 215:
                var5 = _closure1_slot14;
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 14;
                var2 = var14[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var14 = 'heading-md/semibold';
                var2['variant'] = var14;
                var17 = 'header-secondary';
                var14 = var17;
                if(!(var7 !== var16)) { _fun0015_ip = 286; continue _fun0015 }
 269:
                var15 = '';
                var14 = var17;
                if(!(var15 !== var16)) { _fun0015_ip = 286; continue _fun0015 }
 280:
                var14 = 'text-danger';
 286:
                var2['color'] = var14;
                var15 = var11.inputViewTitle;
                var14 = new Array(1);
                var14[0] = var15;
                var2['style'] = var14;
                var2['children'] = var10;
                var12 = var5.bind(var4)(var3, var2);
 318:
                var2 = var7 != var13;
                if(!var2) { _fun0015_ip = 333; continue _fun0015 }
 325:
                var3 = '';
                var2 = var3 !== var13;
 333:
                var10 = undefined;
                if(!var2) { _fun0015_ip = 387; continue _fun0015 }
 338:
                var5 = _closure1_slot14;
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 14;
                var2 = var14[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var14 = 'text-xs/medium';
                var2['variant'] = var14;
                var2['children'] = var13;
                var10 = var5.bind(var4)(var3, var2);
 387:
                if(var1) { _fun0015_ip = 400; continue _fun0015 }
 390:
                if(!(var7 == var6)) { _fun0015_ip = 400; continue _fun0015 }
 394:
                if(!(var7 == var12)) { _fun0015_ip = 400; continue _fun0015 }
 398:
                return var4;
 400:
                var3 = _closure1_slot15;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var11.topContainer;
                var1['style'] = var5;
                var5 = new Array(4);
                var5[0] = var12;
                var5[1] = var10;
                var7 = var7 == var6;
                if(!var7) { _fun0015_ip = 442; continue _fun0015 }
 439:
                var7 = var9;
 442:
                if(!var7) { _fun0015_ip = 501; continue _fun0015 }
 445:
                var10 = _closure1_slot14;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 13;
                var8 = var12[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var11 = var11.required;
                var8['style'] = var11;
                var11 = '*';
                var8['children'] = var11;
                var7 = var10.bind(var4)(var9, var8);
 501:
                var5[2] = var7;
                var5[3] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'renderBottomContainer';
        var6['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var10 = this;
                var2 = _closure1_slot16;
                var1 = var10.context;
                var5 = undefined;
                var8 = var2.bind(var5)(var1);
                var1 = var10.props;
                var2 = var1.showCharactersRemaining;
                var9 = var1.maxLength;
                var3 = null;
                var1 = null;
                if(!var2) { _fun0016_ip = 247; continue _fun0016 }
 49:
                var2 = var3 != var9;
                var1 = null;
                if(!var2) { _fun0016_ip = 247; continue _fun0016 }
 61:
                var4 = _closure1_slot14;
                var3 = _closure1_slot10;
                var2 = {};
                var7 = var8.bottomContainer;
                var2['style'] = var7;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 13;
                var6 = var14[var6];
                var6 = var11.bind(var5)(var6);
                var7 = var6.LegacyText;
                var6 = {};
                var12 = true;
                var6['accessible'] = var12;
                var8 = var8.charactersLength;
                var6['style'] = var8;
                var8 = 15;
                var12 = var14[var8];
                var12 = var11.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.formatToPlainString;
                var8 = var14[var8];
                var8 = var11.bind(var5)(var8);
                var8 = var8.t;
                var11 = var8.fR1coa;
                var8 = {};
                var14 = var10.getText;
                var14 = var14.bind(var10)();
                var14 = var14.length;
                var14 = var9 - var14;
                var8['remainingCharacters'] = var14;
                var8 = var12.bind(var13)(var11, var8);
                var6['accessibilityLabel'] = var8;
                var8 = var10.getText;
                var8 = var8.bind(var10)();
                var8 = var8.length;
                var8 = var9 - var8;
                var6['children'] = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 247:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'renderTrailingButton';
        var6['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var11 = this;
                var2 = _closure1_slot16;
                var1 = var11.context;
                var6 = undefined;
                var12 = var2.bind(var6)(var1);
                var2 = var11.props;
                var1 = var2.trailingButton;
                var4 = var2.clearButtonVisibility;
                var8 = var2.clearButtonAccessibilityLabel;
                var9 = null;
                if(!(var9 == var1)) { _fun0017_ip = 284; continue _fun0017 }
 54:
                var2 = _closure1_slot17;
                var2 = var2.ALWAYS;
                if(!(var4 !== var2)) { _fun0017_ip = 116; continue _fun0017 }
 68:
                var2 = _closure1_slot17;
                var3 = var2.WITH_CONTENT;
                var2 = null;
                if(!(var4 === var3)) { _fun0017_ip = 281; continue _fun0017 }
 87:
                var3 = var11.state;
                var3 = var3.value;
                var4 = var3.length;
                var3 = 0;
                var3 = var4 > var3;
                var2 = null;
                if(!var3) { _fun0017_ip = 281; continue _fun0017 }
 116:
                var5 = _closure1_slot14;
                var4 = _closure1_slot11;
                var3 = {'hitSlop': 16, 'style': null, 'onPress': null, 'accessible': true, 'accessibilityRole': 'button'};
                var10 = 16;
                var12 = var12.clearButton;
                var3['style'] = var12;
                var11 = var11.handleClear;
                var3['onPress'] = var11;
                if(!(var9 == var8)) { _fun0017_ip = 224; continue _fun0017 }
 169:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 15;
                var11 = var14[var9];
                var11 = var13.bind(var6)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.VkKicX;
                var8 = var11.bind(var12)(var9);
 224:
                var3['accessibilityLabel'] = var8;
                var9 = _closure1_slot14;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var7 = var8.bind(var6)(var7);
                var8 = var7.CircleXIcon;
                var7 = {};
                var10 = 'sm';
                var7['size'] = var10;
                var7 = var9.bind(var6)(var8, var7);
                var3['children'] = var7;
                var2 = var5.bind(var6)(var4, var3);
 281:
                var1 = var2;
 284:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'renderTextView';
        var6['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var13 = this;
                var3 = _closure1_slot16;
                var2 = var13.context;
                var4 = undefined;
                var14 = var3.bind(var4)(var2);
                var2 = var13.state;
                var12 = var2.value;
                var18 = var13.props;
                var20 = var18.numberOfLines;
                var10 = var18.disableConstantNumberOfLines;
                var19 = var18.inputTextColor;
                var11 = var18.placeholder;
                var9 = var18.placeholderTextColor;
                var8 = var18.editable;
                var15 = var18.large;
                var3 = var18.accessibilityHint;
                var7 = var18.maxLength;
                var2 = var18.inActionSheet;
                var5 = var18.trailingButton;
                var5 = var18.clearButtonVisibility;
                var16 = var18.disabled;
                var5 = var18.style;
                var6 = var18.inputTextStyle;
                var5 = var18.onChangeText;
                var5 = var18.onFocus;
                var5 = var18.value;
                var17 = _closure1_slot4;
                var5 = _closure1_slot3;
                var5 = var17.bind(var4)(var18, var5);
                var17 = var14.inputView;
                var14 = new Array(5);
                var14[0] = var17;
                var17 = {};
                var18 = 21;
                if(var10) { _fun0018_ip = 203; continue _fun0018 }
 180:
                var10 = var18;
                if(!var15) { _fun0018_ip = 189; continue _fun0018 }
 186:
                var10 = 30;
 189:
                var10 = var10 * var20;
                var17['minHeight'] = var10;
                var10 = var17;
                _fun0018_ip = 221; continue _fun0018;
 203:
                if(!var15) { _fun0018_ip = 209; continue _fun0018 }
 206:
                var18 = 30;
 209:
                var18 = var18 * var20;
                var17['maxHeight'] = var18;
                var10 = var17;
 221:
                var14[1] = var10;
                var10 = null;
                if(!(var10 == var19)) { _fun0018_ip = 235; continue _fun0018 }
 231:
                var17 = {};
                _fun0018_ip = 244; continue _fun0018;
 235:
                var18 = {};
                var18['color'] = var19;
                var17 = var18;
 244:
                var14[2] = var17;
                if(var15) { _fun0018_ip = 255; continue _fun0018 }
 251:
                var15 = {};
                _fun0018_ip = 283; continue _fun0018;
 255:
                var17 = {};
                var18 = 25;
                var17['fontSize'] = var18;
                var18 = _closure1_slot13;
                var18 = var18.PRIMARY_SEMIBOLD;
                var17['fontFamily'] = var18;
                var15 = var17;
 283:
                var14[3] = var15;
                var14[4] = var6;
                if(!(var10 == var9)) { _fun0018_ip = 381; continue _fun0018 }
 295:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 17;
                var6 = var17[var6];
                var17 = var15.bind(var4)(var6);
                var15 = var17.isThemeDark;
                var6 = var13.context;
                var6 = var6.theme;
                var6 = var15.bind(var17)(var6);
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var15 = 11;
                var15 = var18[var15];
                var15 = var17.bind(var4)(var15);
                var15 = var15.unsafe_rawColors;
                if(var6) { _fun0018_ip = 372; continue _fun0018 }
 364:
                var6 = var15.PRIMARY_200;
                _fun0018_ip = 378; continue _fun0018;
 372:
                var6 = var15.PRIMARY_500;
 378:
                var9 = var6;
 381:
                var15 = var10 != var7;
                var6 = undefined;
                if(!var15) { _fun0018_ip = 455; continue _fun0018 }
 390:
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 15;
                var18 = var20[var15];
                var18 = var17.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.formatToPlainString;
                var15 = var20[var15];
                var15 = var17.bind(var4)(var15);
                var15 = var15.t;
                var17 = var15.+DFxLS;
                var15 = {};
                var15['maxLength'] = var7;
                var6 = var18.bind(var19)(var17, var15);
 455:
                var15 = new Array(2);
                var15[0] = var6;
                var15[1] = var3;
                var6 = var15.filter;
                var3 = global;
                var3 = var3.Boolean;
                var15 = var6.bind(var15)(var3);
                var6 = var15.join;
                var3 = ',';
                var6 = var6.bind(var15)(var3);
                if(var2) { _fun0018_ip = 530; continue _fun0018 }
 502:
                var3 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 13;
                var2 = var15[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.TextInput;
                _fun0018_ip = 550; continue _fun0018;
 530:
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 18;
                var2 = var17[var2];
                var3 = var15.bind(var4)(var2);
 550:
                var2 = _closure1_slot14;
                var1 = {};
                var15 = {};
                var15['disabled'] = var16;
                var1['accessibilityState'] = var15;
                var1['style'] = var14;
                var14 = var13.setRef;
                var1['ref'] = var14;
                var14 = var13.handleChangeText;
                var1['onChangeText'] = var14;
                var14 = var13.handleFocus;
                var1['onFocus'] = var14;
                var14 = var13.handleBlur;
                var1['onBlur'] = var14;
                var14 = var13.handleEndEditing;
                var1['onEndEditing'] = var14;
                var13 = var13.handleSubmitEditing;
                var1['onSubmitEditing'] = var13;
                var1['value'] = var12;
                var12 = 'never';
                var1['clearButtonMode'] = var12;
                var12 = var10 != var11;
                var10 = undefined;
                if(!var12) { _fun0018_ip = 663; continue _fun0018 }
 660:
                var10 = var11;
 663:
                var1['placeholder'] = var10;
                var1['placeholderTextColor'] = var9;
                var1['editable'] = var8;
                var1['maxLength'] = var7;
                var1['accessibilityHint'] = var6;
                var23 = var1;
                var22 = var5;
                var5 = copyDataProperties(var23, var22);
                var1 = var2.bind(var4)(var3, var1);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'render';
        var6['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var11 = this;
                var2 = _closure1_slot16;
                var1 = var11.context;
                var4 = undefined;
                var14 = var2.bind(var4)(var1);
                var1 = var11.props;
                var10 = var1.disabled;
                var12 = var1.style;
                var15 = var1.inputContainerStyle;
                var3 = _closure1_slot14;
                var2 = _closure1_slot12;
                var1 = {};
                var5 = false;
                var1['accessible'] = var5;
                var5 = var11.focus;
                var1['onPress'] = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot10;
                var5 = {};
                var8 = new Array(2);
                var8[0] = var12;
                var12 = var10;
                if(!var12) { _fun0019_ip = 99; continue _fun0019 }
 94:
                var12 = var14.disabled;
 99:
                var8[1] = var12;
                var5['style'] = var8;
                var8 = 'auto';
                if(!var10) { _fun0019_ip = 118; continue _fun0019 }
 114:
                var8 = 'none';
 118:
                var5['pointerEvents'] = var8;
                var8 = var11.renderTopContainer;
                var10 = var8.bind(var11)();
                var8 = new Array(5);
                var8[0] = var10;
                var13 = _closure1_slot15;
                var12 = _closure1_slot10;
                var10 = {};
                var16 = var14.inputContainer;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var10['style'] = var14;
                var14 = var11.renderTextView;
                var15 = var14.bind(var11)();
                var14 = new Array(2);
                var14[0] = var15;
                var15 = var11.renderTrailingButton;
                var15 = var15.bind(var11)();
                var14[1] = var15;
                var10['children'] = var14;
                var10 = var13.bind(var4)(var12, var10);
                var8[1] = var10;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 19;
                var10 = var10[var12];
                var13 = var13.bind(var4)(var10);
                var10 = var13.isAndroid;
                var10 = var10.bind(var13)();
                if(!var10) { _fun0019_ip = 267; continue _fun0019 }
 257:
                var13 = var11.renderBorder;
                var10 = var13.bind(var11)();
 267:
                var8[2] = var10;
                var10 = var11.renderBottomContainer;
                var10 = var10.bind(var11)();
                var8[3] = var10;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var10 = var10.bind(var4)(var9);
                var9 = var10.isAndroid;
                var9 = var9.bind(var10)();
                var9 = !var9;
                if(!var9) { _fun0019_ip = 329; continue _fun0019 }
 319:
                var10 = var11.renderBorder;
                var9 = var10.bind(var11)();
 329:
                var8[4] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'getDerivedStateFromProps';
        var6['key'] = var7;
        var1 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var2 = arg2;
                var1 = arg1;
                var3 = var1.value;
                var1 = var2.value;
                var2 = var2.valueProp;
                if(!(var3 !== var2)) { _fun0020_ip = 30; continue _fun0020 }
 26:
                if(!(var3 === var1)) { _fun0020_ip = 39; continue _fun0020 }
 30:
                var1 = {};
                var1['valueProp'] = var3;
                _fun0020_ip = 53; continue _fun0020;
 39:
                var2 = {};
                var2['value'] = var3;
                var2['valueProp'] = var3;
                var1 = var2;
 53:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 20;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeContext;
    var4['contextType'] = var5;
    var5 = {'showBorder': true, 'value': '', 'returnKeyType': 'next', 'disabled': false, 'autoFocus': false, 'multiline': false, 'numberOfLines': 1, 'showTopContainer': true, 'showCharactersRemaining': false, 'clearButtonVisibility': 'never', 'inActionSheet': false};
    var4['defaultProps'] = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/InputView.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ClearButtonVisibility'] = var2;
    return var1;
})();