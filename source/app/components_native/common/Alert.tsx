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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getAlertButtonVariant(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = 10;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.ButtonColors;
            var3 = var3.GREEN;
            if(!(var3 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ButtonColors;
            var3 = var3.RED;
            if(!(var3 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ButtonColors;
            var3 = var3.GREY;
            if(!(var3 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ButtonColors;
            var3 = var3.LIGHTGREY;
            if(!(var3 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ButtonColors;
            var3 = var3.TRANSPARENT;
            if(!(var3 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 13:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ButtonColors;
            var1 = var1.WHITE;
            if(!(var1 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = 'primary';
            return var1;
case 14:
            var1 = 'primary-overlay';
            return var1;
case 10:
            var1 = 'secondary';
            return var1;
case 8:
            var1 = 'destructive';
            return var1;
case 6:
            var1 = 'active';
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var10 = true;
    var4['value'] = var10;
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
    var8 = var7.bind(var1)(var4);
    var _closure1_slot9 = var8;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var14 = 8;
    var4 = var6[var14];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createLegacyClassComponentStyles;
    var4 = {};
    var11 = {};
    var12 = 9;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11['borderRadius'] = var15;
    var15 = 16;
    var11['padding'] = var15;
    var17 = var6[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var17;
    var4['alert'] = var11;
    var11 = {};
    var11['marginBottom'] = var15;
    var17 = var6[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.MOBILE_TEXT_HEADING_PRIMARY;
    var11['color'] = var17;
    var4['titleText'] = var11;
    var11 = {};
    var16 = var16.hairlineWidth;
    var11['height'] = var16;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var11['backgroundColor'] = var16;
    var4['divider'] = var11;
    var11 = {};
    var11['marginTop'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_STRONG;
    var11['color'] = var15;
    var4['body'] = var11;
    var11 = {};
    var15 = 24;
    var11['marginTop'] = var15;
    var4['buttons'] = var11;
    var11 = {};
    var11['marginTop'] = var14;
    var4['cancelButton'] = var11;
    var11 = {'marginTop': 16, 'alignSelf': 'center'};
    var4['secondaryConfirm'] = var11;
    var11 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11['borderRadius'] = var12;
    var4['gradient'] = var11;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var7 = var8.PureComponent;
    var4 = function(arg1) {
        var4 = function Alert(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                var1 = _closure1_slot17;
                var1 = var1.bind(var5)();
                if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0003_ip = 18; continue _fun0003;
case 16:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 18:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var6 = _closure1_slot9;
                var4 = var6.createRef;
                var4 = var4.bind(var6)();
                var1['titleRef'] = var4;
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
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.Timeout;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['timeout'] = var7;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.Timeout;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['focusTimeout'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.confirming;
                        if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
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
                        if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var1 = null;
                        if(!(var1 != var3)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                        var1 = undefined;
                        var1 = var3.bind(var1)();
case 21:
                        var1 = null;
                        if(!(var1 != var2)) { _fun0004_ip = 19; continue _fun0004 }
case 24:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 19:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConfirm'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.onClose;
                        var4 = var1.onCancel;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
case 25:
                        if(!(var1 != var2)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCancel'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var4 = var1.onClose;
                        var2 = var1.onConfirmSecondary;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
case 25:
                        if(!(var1 != var2)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 27:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var2 = var2.titleRef;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0007_ip = 27; continue _fun0007 }
case 29:
                var2 = global;
                var3 = var2.setImmediate;
                var2 = undefined;
                var1 = function() {
                    var1 = _closure3_slot0;
                    var4 = var1.focusTimeout;
                    var3 = var4.start;
                    var2 = 300;
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.setAccessibilityFocus;
                        var2 = {};
                        var5 = _closure3_slot0;
                        var5 = var5.titleRef;
                        var2['ref'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
case 27:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var3 = var1.timeout;
            var2 = var3.stop;
            var2 = var2.bind(var3)();
            var2 = var1.focusTimeout;
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = this;
                var1 = var3.props;
                var4 = var1.confirming;
                var1 = null;
                if(!(var1 != var4)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var2 = var3.timeout;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                var2 = var3.setState;
                var1 = {};
                var1['confirming'] = var4;
                var1 = var2.bind(var3)(var1);
case 30:
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var14 = this;
                var2 = _closure1_slot15;
                var1 = var14.context;
                var5 = undefined;
                var10 = var2.bind(var5)(var1);
                var1 = var14.props;
                var13 = var1.title;
                var3 = null;
                var2 = var3 == var13;
                var1 = null;
                if(var2) { _fun0009_ip = 32; continue _fun0009 }
case 27:
                var2 = '';
                var1 = null;
                if(!(var2 !== var13)) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                var4 = _closure1_slot13;
                var3 = _closure1_slot10;
                var2 = {};
                var9 = _closure1_slot12;
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var6 = 14;
                var6 = var11[var6];
                var6 = var8.bind(var5)(var6);
                var8 = var6.Text;
                var6 = {'ref': null, 'accessible': true, 'accessibilityRole': 'header', 'variant': 'heading-md/extrabold', 'color': 'text-default'};
                var11 = var14.titleRef;
                var6['ref'] = var11;
                var11 = var10.titleText;
                var6['style'] = var11;
                var15 = 'string';
                var12 = typeof var13;
                var11 = var13;
                if(!(var15 === var12)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                var12 = var14.renderContent;
                var11 = var12.bind(var14)(var13);
case 34:
                var6['children'] = var11;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot12;
                var8 = _closure1_slot10;
                var7 = {};
                var10 = var10.divider;
                var7['style'] = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderBody';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var11 = this;
                var2 = _closure1_slot15;
                var1 = var11.context;
                var5 = undefined;
                var8 = var2.bind(var5)(var1);
                var1 = var11.props;
                var10 = var1.body;
                var1 = var1.children;
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 36; continue _fun0010 }
case 27:
                var4 = _closure1_slot12;
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
                if(!(var12 === var9)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                var9 = var11.renderContent;
                var8 = var9.bind(var11)(var10);
case 37:
                var6['children'] = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 36:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'renderButtons';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var18 = this;
                var2 = _closure1_slot15;
                var1 = var18.context;
                var5 = undefined;
                var9 = var2.bind(var5)(var1);
                var1 = var18.props;
                var11 = var1.cancelText;
                var17 = var1.confirmText;
                if(!(var5 === var17)) { _fun0011_ip = 39; continue _fun0011 }
case 40:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 15;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.BddRzS;
                var17 = var3.bind(var4)(var2);
case 39:
                var20 = var1.confirmColor;
                var21 = var1.secondaryConfirmText;
                var2 = var1.noDefaultButtons;
                var12 = var1.renderConfirmIcon;
                var14 = var1.renderConfirmRightIcon;
                var6 = var1.renderConfirmButton;
                var16 = var1.isConfirmButtonDisabled;
                var1 = var18.state;
                var15 = var1.confirming;
                var13 = null;
                var1 = null;
                if(var2) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                var2 = var13 != var11;
                var8 = undefined;
                if(!var2) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                var4 = _closure1_slot12;
                var3 = _closure1_slot10;
                var2 = {};
                var7 = var9.cancelButton;
                var2['style'] = var7;
                var10 = _closure1_slot0;
                var22 = _closure1_slot3;
                var7 = 16;
                var7 = var22[var7];
                var7 = var10.bind(var5)(var7);
                var10 = var7.Button;
                var7 = {};
                var22 = 'secondary';
                var7['variant'] = var22;
                var22 = var18.handleCancel;
                var7['onPress'] = var22;
                var7['text'] = var11;
                var7 = var4.bind(var5)(var10, var7);
                var2['children'] = var7;
                var8 = var4.bind(var5)(var3, var2);
case 43:
                var2 = var13 != var21;
                var7 = undefined;
                if(!var2) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                var4 = _closure1_slot12;
                var11 = _closure1_slot0;
                var22 = _closure1_slot3;
                var2 = 17;
                var2 = var22[var2];
                var2 = var11.bind(var5)(var2);
                var3 = var2.PressableOpacity;
                var2 = {};
                var10 = 'button';
                var2['accessibilityRole'] = var10;
                var10 = var9.secondaryConfirm;
                var2['style'] = var10;
                var10 = var18.handleSecondaryConfirm;
                var2['onPress'] = var10;
                var10 = 14;
                var10 = var22[var10];
                var10 = var11.bind(var5)(var10);
                var11 = var10.Text;
                var10 = {'variant': 'text-sm/semibold', 'color': 'text-link'};
                var10['children'] = var21;
                var10 = var4.bind(var5)(var11, var10);
                var2['children'] = var10;
                var7 = var4.bind(var5)(var3, var2);
case 45:
                var4 = _closure1_slot13;
                var3 = _closure1_slot10;
                var2 = {};
                var9 = var9.buttons;
                var2['style'] = var9;
                var10 = var13 == var6;
                var9 = undefined;
                if(var10) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                var9 = var6.bind(var5)();
case 47:
                if(!(var13 == var9)) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                var11 = _closure1_slot12;
                var10 = _closure1_slot0;
                var21 = _closure1_slot3;
                var6 = 16;
                var6 = var21[var6];
                var6 = var10.bind(var5)(var6);
                var10 = var6.Button;
                var6 = {};
                var19 = _closure1_slot18;
                var19 = var19.bind(var5)(var20);
                var6['variant'] = var19;
                var18 = var18.handleConfirm;
                var6['onPress'] = var18;
                var6['text'] = var17;
                var6['loading'] = var15;
                var15 = var13 != var16;
                if(!var15) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                var15 = var16;
case 51:
                var6['disabled'] = var15;
                var15 = var13 == var12;
                var16 = undefined;
                if(var15) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                var16 = var12.bind(var5)();
case 53:
                if(!(var13 == var16)) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                var17 = var13 == var14;
                var15 = undefined;
                if(var17) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                var15 = var14.bind(var5)();
case 57:
                var16 = var15;
case 55:
                var17 = var13 != var16;
                var15 = undefined;
                if(!var17) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                var15 = var16;
case 59:
                var6['icon'] = var15;
                var15 = var13 != var12;
                var12 = 'start';
                if(var15) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                var14 = var13 != var14;
                var13 = undefined;
                if(!var14) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                var13 = 'end';
case 63:
                var12 = var13;
case 61:
                var6['iconPosition'] = var12;
                var9 = var11.bind(var5)(var10, var6);
case 49:
                var6 = new Array(3);
                var6[0] = var9;
                var6[1] = var8;
                var6[2] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'renderFooter';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var2 = var1.footer;
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                var5 = _closure1_slot12;
                var4 = _closure1_slot10;
                var3 = {};
                var3['children'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 65:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var13 = this;
                var3 = _closure1_slot15;
                var1 = var13.context;
                var5 = undefined;
                var11 = var3.bind(var5)(var1);
                var1 = var13.props;
                var12 = var1.style;
                var8 = var1.width;
                var3 = var1.isLandscape;
                var14 = var1.onClose;
                var6 = _closure1_slot13;
                var4 = _closure1_slot14;
                var1 = {};
                var10 = _closure1_slot12;
                var9 = _closure1_slot1;
                var15 = _closure1_slot3;
                var7 = 18;
                var7 = var15[var7];
                var9 = var9.bind(var5)(var7);
                var7 = {};
                var15 = true;
                var7['absolute'] = var15;
                var15 = var11.gradient;
                var7['componentStyles'] = var15;
                var9 = var10.bind(var5)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot10;
                var9 = {};
                var9['onAccessibilityEscape'] = var14;
                var14 = var11.alert;
                var11 = new Array(3);
                var11[0] = var14;
                var11[1] = var12;
                var12 = {};
                var12['width'] = var8;
                var11[2] = var12;
                var9['style'] = var11;
                var11 = var13.renderHeader;
                var12 = var11.bind(var13)();
                var11 = new Array(4);
                var11[0] = var12;
                var12 = var13.renderBody;
                var12 = var12.bind(var13)();
                var11[1] = var12;
                var12 = var13.renderButtons;
                var12 = var12.bind(var13)();
                var11[2] = var12;
                var12 = var13.renderFooter;
                var12 = var12.bind(var13)();
                var11[3] = var12;
                var9['children'] = var11;
                var9 = var6.bind(var5)(var10, var9);
                var7[1] = var9;
                var1['children'] = var7;
                var6 = var6.bind(var5)(var4, var1);
                var1 = var6;
                if(!var3) { _fun0013_ip = 67; continue _fun0013 }
case 68:
                var4 = _closure1_slot12;
                var3 = _closure1_slot11;
                var2 = {};
                var7 = {};
                var7['maxHeight'] = var8;
                var2['style'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 67:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var7);
    var _closure1_slot16 = var9;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var9['contextType'] = var4;
    var7 = {};
    var4 = 10;
    var11 = var6[var4];
    var11 = var5.bind(var1)(var11);
    var11 = var11.ButtonColors;
    var11 = var11.BRAND;
    var7['confirmColor'] = var11;
    var7['autoCloseOnConfirm'] = var10;
    var9['defaultProps'] = var7;
    var7 = var8.memo;
    var2 = function(arg1) {
        var3 = _closure1_slot1;
        var6 = _closure1_slot3;
        var2 = 20;
        var2 = var6[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var5 = _closure1_slot0;
        var3 = 21;
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
        var3 = _closure1_slot12;
        var2 = _closure1_slot16;
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
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ButtonColors;
    var2['Colors'] = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/Alert.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();