// app/components_native/MFAConfirmModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.StyleSheet;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot8 = var7;
    var8 = var9.create;
    var7 = {};
    var10 = {'backgroundColor': 'transparent', 'justifyContent': 'center', 'alignItems': 'center'};
    var7['container'] = var10;
    var10 = {'paddingVertical': 5, 'paddingHorizontal': 0};
    var7['inputViewContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var4.PureComponent;
    var2 = function(arg1) {
        var4 = function MFAConfirmModal(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = '';
                var3['code'] = var4;
                var1['state'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.onClose;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0003_ip = 30; continue _fun0003 }
 24:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['close'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.handleEarlyClose;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 32; continue _fun0004 }
 26:
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 32:
                        var2 = _closure3_slot0;
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCancel'] = var3;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var1 = var3.isLoading;
                        var3 = var3.handleSubmit;
                        var2 = var2.state;
                        var2 = var2.code;
                        if(var1) { _fun0005_ip = 43; continue _fun0005 }
 37:
                        var4 = null;
                        var1 = var4 == var3;
 43:
                        if(var1) { _fun0005_ip = 53; continue _fun0005 }
 46:
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSubmit'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'renderContent';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = this;
                var _closure3_slot0 = var5;
                var1 = var5.props;
                var7 = var1.disallowBackupCodes;
                var1 = var5.state;
                var9 = var1.code;
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormInput;
                var1 = {};
                var10 = 'one-time-code';
                var1['autoComplete'] = var10;
                var1['value'] = var9;
                var8 = function onChange(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = arg1;
                    var1['code'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['onChange'] = var8;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 9;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                if(var7) { _fun0006_ip = 150; continue _fun0006 }
 137:
                var7 = var8.yO4lAA;
                var7 = var9.bind(var10)(var7);
                _fun0006_ip = 161; continue _fun0006;
 150:
                var8 = var8.tARzgo;
                var7 = var9.bind(var10)(var8);
 161:
                var1['placeholder'] = var7;
                var6 = _closure1_slot9;
                var6 = var6.inputViewContainer;
                var1['style'] = var6;
                var6 = 'done';
                var1['returnKeyType'] = var6;
                var6 = true;
                var1['autoFocus'] = var6;
                var1['showBorder'] = var6;
                var6 = var5.props;
                var6 = var6.error;
                var1['error'] = var6;
                var5 = var5.handleSubmit;
                var1['onNext'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var6 = this;
            var1 = var6.props;
            var12 = var1.title;
            var11 = var1.actionText;
            var1 = var6.state;
            var7 = var1.code;
            var4 = _closure1_slot8;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 10;
            var1 = var10[var8];
            var3 = undefined;
            var2 = var9.bind(var3)(var1);
            var1 = {};
            var1['title'] = var12;
            var1['confirmText'] = var11;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.Colors;
            var8 = var8.RED;
            var1['confirmColor'] = var8;
            var8 = var6.handleSubmit;
            var1['onConfirm'] = var8;
            var8 = var7.length;
            var7 = 0;
            var7 = var7 === var8;
            var1['isConfirmButtonDisabled'] = var7;
            var9 = _closure1_slot0;
            var5 = 9;
            var7 = var10[var5];
            var7 = var9.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.ETE/oK;
            var5 = var7.bind(var8)(var5);
            var1['cancelText'] = var5;
            var5 = var6.handleCancel;
            var1['onCancel'] = var5;
            var5 = var6.renderContent;
            var5 = var5.bind(var6)();
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {'isLoading': false, 'disallowBackupCodes': false};
    var2['defaultProps'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/MFAConfirmModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();