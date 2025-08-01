// app/components_native/common/Alert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var _closure1_slot9 = var9;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot10 = var7;
    var16 = var4.StyleSheet;
    var4 = var4.ScrollView;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var15 = 8;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var8 = var10.createLegacyClassComponentStyles;
    var7 = {};
    var4 = {};
    var14 = 10;
    var12 = var6[var14];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var4['borderRadius'] = var12;
    var12 = 16;
    var4['padding'] = var12;
    var17 = var6[var14];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BG_BASE_PRIMARY;
    var4['backgroundColor'] = var17;
    var7['alert'] = var4;
    var4 = {};
    var4['marginBottom'] = var12;
    var17 = var6[var14];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.HEADER_PRIMARY;
    var4['color'] = var17;
    var7['titleText'] = var4;
    var4 = {};
    var16 = var16.hairlineWidth;
    var4['height'] = var16;
    var16 = var6[var14];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.DIVIDER_SUBTLE;
    var4['backgroundColor'] = var16;
    var7['divider'] = var4;
    var4 = {};
    var4['marginTop'] = var12;
    var12 = var6[var14];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_PRIMARY;
    var4['color'] = var12;
    var7['body'] = var4;
    var12 = {};
    var4 = 24;
    var12['marginTop'] = var4;
    var7['buttons'] = var12;
    var12 = {};
    var12['marginTop'] = var15;
    var7['cancelButton'] = var12;
    var12 = {'marginTop': 16, 'alignSelf': 'center'};
    var7['secondaryConfirm'] = var12;
    var12 = {};
    var14 = var6[var14];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var12['borderRadius'] = var14;
    var7['gradient'] = var12;
    var7 = var8.bind(var10)(var7);
    var _closure1_slot16 = var7;
    var8 = var9.PureComponent;
    var7 = function(arg1) {
        var4 = function Alert(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var6 = _closure1_slot9;
                var4 = var6.createRef;
                var4 = var4.bind(var6)();
                var1['alertRef'] = var4;
                var4 = {};
                var6 = false;
                var4['confirming'] = var6;
                var1['state'] = var4;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 11;
                var4 = var6[var4];
                var7 = var7.bind(var5)(var4);
                var4 = var7.getParser;
                var4 = var4.bind(var7)();
                var1['renderContent'] = var4;
                var4 = _closure1_slot0;
                var3 = 12;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.Timeout;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['timeout'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.confirming;
                        if(var2) { _fun0003_ip = 125; continue _fun0003 }
 21:
                        var4 = _closure3_slot0;
                        var1 = var4.props;
                        var3 = var1.onClose;
                        var2 = var1.onConfirm;
                        var1 = var1.autoCloseOnConfirm;
                        var6 = var4.setState;
                        var5 = {};
                        var7 = true;
                        var5['confirming'] = var7;
                        var5 = var6.bind(var4)(var5);
                        var7 = var4.timeout;
                        var6 = var7.start;
                        var5 = 500;
                        var4 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.setState;
                            var1 = {};
                            var4 = false;
                            var1['confirming'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var4 = var6.bind(var7)(var5, var4);
                        if(!var1) { _fun0003_ip = 113; continue _fun0003 }
 101:
                        var1 = null;
                        if(!(var1 != var3)) { _fun0003_ip = 113; continue _fun0003 }
 107:
                        var1 = undefined;
                        var1 = var3.bind(var1)();
 113:
                        var1 = null;
                        if(!(var1 != var2)) { _fun0003_ip = 125; continue _fun0003 }
 119:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 125:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConfirm'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.onClose;
                        var4 = var1.onCancel;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0004_ip = 36; continue _fun0004 }
 30:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
 36:
                        if(!(var1 != var2)) { _fun0004_ip = 46; continue _fun0004 }
 40:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 46:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCancel'] = var3;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var4 = var1.onClose;
                        var2 = var1.onConfirmSecondary;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0005_ip = 36; continue _fun0005 }
 30:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
 36:
                        if(!(var1 != var2)) { _fun0005_ip = 46; continue _fun0005 }
 40:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 46:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSecondaryConfirm'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setAccessibilityFocus;
            var2 = {};
            var5 = this;
            var5 = var5.alertRef;
            var2['ref'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.timeout;
            var1 = var2.stop;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = this;
                var1 = var3.props;
                var4 = var1.confirming;
                var1 = null;
                if(!(var1 != var4)) { _fun0006_ip = 54; continue _fun0006 }
 20:
                var2 = var3.timeout;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                var2 = var3.setState;
                var1 = {};
                var1['confirming'] = var4;
                var1 = var2.bind(var3)(var1);
 54:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderHeader';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var14 = this;
                var2 = _closure1_slot16;
                var1 = var14.context;
                var5 = undefined;
                var10 = var2.bind(var5)(var1);
                var1 = var14.props;
                var13 = var1.title;
                var3 = null;
                var2 = var3 == var13;
                var1 = null;
                if(var2) { _fun0007_ip = 217; continue _fun0007 }
 46:
                var2 = '';
                var1 = null;
                if(!(var2 !== var13)) { _fun0007_ip = 217; continue _fun0007 }
 59:
                var4 = _closure1_slot14;
                var3 = _closure1_slot10;
                var2 = {'accessibilityRole': 'alert', 'accessible': true};
                var9 = _closure1_slot13;
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var6 = 14;
                var6 = var11[var6];
                var6 = var8.bind(var5)(var6);
                var8 = var6.Text;
                var6 = {'accessibilityRole': 'header', 'variant': 'heading-md/extrabold', 'color': 'text-normal'};
                var11 = var10.titleText;
                var6['style'] = var11;
                var15 = 'string';
                var12 = typeof var13;
                var11 = var13;
                if(!(var15 === var12)) { _fun0007_ip = 159; continue _fun0007 }
 148:
                var12 = var14.renderContent;
                var11 = var12.bind(var14)(var13);
 159:
                var6['children'] = var11;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot13;
                var8 = _closure1_slot10;
                var7 = {};
                var10 = var10.divider;
                var7['style'] = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 217:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderBody';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var11 = this;
                var2 = _closure1_slot16;
                var1 = var11.context;
                var5 = undefined;
                var8 = var2.bind(var5)(var1);
                var1 = var11.props;
                var10 = var1.body;
                var1 = var1.children;
                var2 = null;
                if(!(var2 == var1)) { _fun0008_ip = 171; continue _fun0008 }
 46:
                var4 = _closure1_slot13;
                var3 = _closure1_slot11;
                var2 = {};
                var7 = {};
                var9 = var11.props;
                var9 = var9.contentHeight;
                var7['maxHeight'] = var9;
                var2['style'] = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = 14;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.Text;
                var6 = {'maxFontSizeMultiplier': 1, 'variant': 'text-md/normal'};
                var8 = var8.body;
                var6['style'] = var8;
                var12 = 'string';
                var9 = typeof var10;
                var8 = var10;
                if(!(var12 === var9)) { _fun0008_ip = 151; continue _fun0008 }
 140:
                var9 = var11.renderContent;
                var8 = var9.bind(var11)(var10);
 151:
                var6['children'] = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 171:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'renderButtons';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var18 = this;
                var2 = _closure1_slot16;
                var1 = var18.context;
                var5 = undefined;
                var9 = var2.bind(var5)(var1);
                var1 = var18.props;
                var7 = var1.cancelText;
                var17 = var1.confirmText;
                if(!(var5 === var17)) { _fun0009_ip = 98; continue _fun0009 }
 43:
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var2 = 15;
                var3 = var10[var2];
                var3 = var8.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var10[var2];
                var2 = var8.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.BddRzc;
                var17 = var3.bind(var4)(var2);
 98:
                var16 = var1.confirmColor;
                var20 = var1.secondaryConfirmText;
                var2 = var1.noDefaultButtons;
                var13 = var1.renderConfirmIcon;
                var12 = var1.renderConfirmRightIcon;
                var10 = var1.renderConfirmButton;
                var15 = var1.isConfirmButtonDisabled;
                var19 = var1.fillCancelText;
                var1 = var18.state;
                var14 = var1.confirming;
                var1 = null;
                if(var2) { _fun0009_ip = 658; continue _fun0009 }
 165:
                var2 = var1 != var7;
                var8 = undefined;
                if(!var2) { _fun0009_ip = 394; continue _fun0009 }
 177:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 16;
                var2 = var4[var2];
                var4 = var3.bind(var5)(var2);
                var3 = var4.isThemeDark;
                var2 = _closure1_slot12;
                var2 = var2.theme;
                var3 = var3.bind(var4)(var2);
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var22 = 17;
                var2 = var2[var22];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ButtonColors;
                if(var3) { _fun0009_ip = 254; continue _fun0009 }
 246:
                var11 = var2.GREY;
                _fun0009_ip = 260; continue _fun0009;
 254:
                var11 = var2.TRANSPARENT;
 260:
                var4 = _closure1_slot13;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var2 = var2[var22];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var23 = _closure1_slot1;
                var21 = _closure1_slot3;
                var21 = var21[var22];
                var21 = var23.bind(var5)(var21);
                var23 = var21.Looks;
                if(var19) { _fun0009_ip = 317; continue _fun0009 }
 309:
                var21 = var23.OUTLINED;
                _fun0009_ip = 323; continue _fun0009;
 317:
                var21 = var23.FILLED;
 323:
                var2['look'] = var21;
                if(!var19) { _fun0009_ip = 360; continue _fun0009 }
 331:
                var21 = _closure1_slot0;
                var19 = _closure1_slot3;
                var19 = var19[var22];
                var19 = var21.bind(var5)(var19);
                var19 = var19.ButtonColors;
                var11 = var19.LIGHTGREY;
 360:
                var2['color'] = var11;
                var11 = var18.handleCancel;
                var2['onPress'] = var11;
                var2['text'] = var7;
                var7 = var9.cancelButton;
                var2['style'] = var7;
                var8 = var4.bind(var5)(var3, var2);
 394:
                var2 = var1 != var20;
                var7 = undefined;
                if(!var2) { _fun0009_ip = 514; continue _fun0009 }
 403:
                var4 = _closure1_slot13;
                var19 = _closure1_slot0;
                var21 = _closure1_slot3;
                var2 = 18;
                var2 = var21[var2];
                var2 = var19.bind(var5)(var2);
                var3 = var2.PressableOpacity;
                var2 = {};
                var11 = 'button';
                var2['accessibilityRole'] = var11;
                var11 = var9.secondaryConfirm;
                var2['style'] = var11;
                var11 = var18.handleSecondaryConfirm;
                var2['onPress'] = var11;
                var11 = 14;
                var11 = var21[var11];
                var11 = var19.bind(var5)(var11);
                var19 = var11.Text;
                var11 = {'variant': 'text-sm/semibold', 'color': 'text-link'};
                var11['children'] = var20;
                var11 = var4.bind(var5)(var19, var11);
                var2['children'] = var11;
                var7 = var4.bind(var5)(var3, var2);
 514:
                var4 = _closure1_slot14;
                var3 = _closure1_slot10;
                var2 = {};
                var9 = var9.buttons;
                var2['style'] = var9;
                var11 = var1 == var10;
                var9 = undefined;
                if(var11) { _fun0009_ip = 547; continue _fun0009 }
 543:
                var9 = var10.bind(var5)();
 547:
                if(!(var1 == var9)) { _fun0009_ip = 630; continue _fun0009 }
 551:
                var11 = _closure1_slot13;
                var10 = _closure1_slot1;
                var19 = _closure1_slot3;
                var6 = 17;
                var6 = var19[var6];
                var10 = var10.bind(var5)(var6);
                var6 = {};
                var18 = var18.handleConfirm;
                var6['onPress'] = var18;
                var6['text'] = var17;
                var6['color'] = var16;
                var6['loading'] = var14;
                var14 = var1 != var15;
                if(!var14) { _fun0009_ip = 610; continue _fun0009 }
 607:
                var14 = var15;
 610:
                var6['disabled'] = var14;
                var6['renderIcon'] = var13;
                var6['renderRightIcon'] = var12;
                var9 = var11.bind(var5)(var10, var6);
 630:
                var6 = new Array(3);
                var6[0] = var9;
                var6[1] = var8;
                var6[2] = var7;
                var2['children'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var2;
 658:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'renderFooter';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var2 = var1.footer;
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0010_ip = 48; continue _fun0010 }
 23:
                var5 = _closure1_slot13;
                var4 = _closure1_slot10;
                var3 = {};
                var3['children'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var15 = this;
                var2 = _closure1_slot16;
                var1 = var15.context;
                var4 = undefined;
                var13 = var2.bind(var4)(var1);
                var1 = var15.props;
                var14 = var1.style;
                var11 = var1.width;
                var7 = var1.isLandscape;
                var16 = var1.onClose;
                var8 = _closure1_slot14;
                var2 = _closure1_slot15;
                var1 = {};
                var3 = _closure1_slot13;
                var10 = _closure1_slot1;
                var5 = _closure1_slot3;
                var9 = 19;
                var9 = var5[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var12 = true;
                var9['absolute'] = var12;
                var12 = var13.gradient;
                var9['componentStyles'] = var12;
                var10 = var3.bind(var4)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot10;
                var10 = {};
                var17 = var15.alertRef;
                var10['ref'] = var17;
                var10['onAccessibilityEscape'] = var16;
                var16 = var13.alert;
                var13 = new Array(3);
                var13[0] = var16;
                var13[1] = var14;
                var14 = {};
                var14['width'] = var11;
                var13[2] = var14;
                var10['style'] = var13;
                var13 = var15.renderHeader;
                var14 = var13.bind(var15)();
                var13 = new Array(4);
                var13[0] = var14;
                var14 = var15.renderBody;
                var14 = var14.bind(var15)();
                var13[1] = var14;
                var14 = var15.renderButtons;
                var14 = var14.bind(var15)();
                var13[2] = var14;
                var14 = var15.renderFooter;
                var14 = var14.bind(var15)();
                var13[3] = var14;
                var10['children'] = var13;
                var10 = var8.bind(var4)(var12, var10);
                var9[1] = var10;
                var1['children'] = var9;
                var9 = var8.bind(var4)(var2, var1);
                var2 = _closure1_slot0;
                var1 = 20;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var5 = var9;
                if(!var7) { _fun0011_ip = 319; continue _fun0011 }
 288:
                var8 = _closure1_slot13;
                var7 = _closure1_slot11;
                var6 = {};
                var10 = {};
                var10['maxHeight'] = var11;
                var6['style'] = var10;
                var6['children'] = var9;
                var5 = var8.bind(var4)(var7, var6);
 319:
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var7.bind(var1)(var8);
    var _closure1_slot17 = var10;
    var7 = 21;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ThemeContext;
    var10['contextType'] = var7;
    var8 = {};
    var7 = 17;
    var12 = var6[var7];
    var12 = var13.bind(var1)(var12);
    var12 = var12.Colors;
    var12 = var12.BRAND;
    var8['confirmColor'] = var12;
    var8['autoCloseOnConfirm'] = var11;
    var10['defaultProps'] = var8;
    var8 = var9.memo;
    var2 = function(arg1) {
        var3 = _closure1_slot1;
        var6 = _closure1_slot3;
        var2 = 22;
        var2 = var6[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var5 = _closure1_slot0;
        var3 = 23;
        var3 = var6[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useIsScreenLandscape;
        var5 = var3.bind(var5)();
        var3 = global;
        var8 = var3.Math;
        var7 = var8.min;
        var10 = var3.Math;
        var9 = var10.min;
        var6 = var2.width;
        var3 = var2.height;
        var6 = var9.bind(var10)(var6, var3);
        var3 = 0.9;
        var6 = var3 * var6;
        var3 = 500;
        var7 = var7.bind(var8)(var6, var3);
        var3 = var2.height;
        var2 = 0.7;
        var6 = var2 * var3;
        var3 = _closure1_slot13;
        var2 = _closure1_slot17;
        var1 = {};
        var1['width'] = var7;
        var1['contentHeight'] = var6;
        var1['isLandscape'] = var5;
        var11 = arg1;
        var12 = var1;
        var5 = copyDataProperties(var12, var11);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var8.bind(var9)(var2);
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ButtonColors;
    var2['Colors'] = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/Alert.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();