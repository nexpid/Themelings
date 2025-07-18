// app/components_native/QRCode.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var13 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var9;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot8;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot7;
            var1 = _closure1_slot20;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot8;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
 72: // try_end0
            _fun0002_ip = 76; continue _fun0002;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = ['style', 'text', 'blur'];
    var _closure1_slot3 = var1;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var6 = var9[var5];
    var5 = native4;
    var10 = var5.bind(var1)(var6);
    var5 = 7;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var6 = var5.View;
    var _closure1_slot10 = var6;
    var6 = var5.Image;
    var _closure1_slot11 = var6;
    var5 = var5.StyleSheet;
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var6 = var5.jsx;
    var _closure1_slot13 = var6;
    var5 = var5.jsxs;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var9[var5];
    var7 = var8.bind(var1)(var5);
    var6 = var7.createLegacyClassComponentStyles;
    var5 = {};
    var11 = {'display': 'flex', 'alignSelf': 'flex-start'};
    var12 = 10;
    var14 = var9[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11['padding'] = var14;
    var12 = var9[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var11['borderRadius'] = var12;
    var5['qrCode'] = var11;
    var11 = {'display': 'flex', 'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center', 'position': 'relative'};
    var5['qrCodeContainer'] = var11;
    var11 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var5['qrCodeOverlay'] = var11;
    var11 = {'width': 40, 'height': 40};
    var5['size-40'] = var11;
    var11 = {'width': 60, 'height': 60};
    var5['size-60'] = var11;
    var5 = var6.bind(var7)(var5);
    var _closure1_slot15 = var5;
    var5 = {};
    var6 = 'SIZE_40';
    var5['SIZE_40'] = var6;
    var6 = 'SIZE_60';
    var5['SIZE_60'] = var6;
    var _closure1_slot16 = var5;
    var7 = var4.Object;
    var6 = var7.freeze;
    var4 = {};
    var12 = var5.SIZE_40;
    var11 = 'size-40';
    var4[var12] = var11;
    var12 = var5.SIZE_60;
    var11 = 'size-60';
    var4[var12] = var11;
    var4 = var6.bind(var7)(var4);
    var _closure1_slot17 = var4;
    var7 = var10.PureComponent;
    var6 = function(arg1) {
        var4 = function QRCode() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot5;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot19;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot9;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot6;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var3 = _closure1_slot15;
                var2 = var1.context;
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var1.props;
                var6 = var3.style;
                var11 = var3.text;
                var9 = var3.blur;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var10 = var2.bind(var4)(var3, var1);
                var3 = _closure1_slot13;
                var2 = _closure1_slot10;
                var1 = {};
                var7 = var5.qrCode;
                var5 = new Array(3);
                var5[0] = var7;
                var7 = {};
                var8 = var10.bgColor;
                var7['backgroundColor'] = var8;
                var5[1] = var7;
                var5[2] = var6;
                var1['style'] = var5;
                var6 = _closure1_slot14;
                var5 = {};
                var7 = {};
                var8 = 'relative';
                var7['position'] = var8;
                var8 = var10.size;
                var7['width'] = var8;
                var8 = var10.size;
                var7['height'] = var8;
                var5['style'] = var7;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 11;
                var7 = var13[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['value'] = var11;
                var11 = 'M';
                var7['level'] = var11;
                var15 = var7;
                var14 = var10;
                var10 = copyDataProperties(var15, var14);
                var8 = var3.bind(var4)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = null;
                if(!var9) { _fun0003_ip = 262; continue _fun0003 }
 207:
                var11 = _closure1_slot13;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 12;
                var9 = var13[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var12 = _closure1_slot12;
                var12 = var12.absoluteFill;
                var9['style'] = var12;
                var12 = 'dark';
                var9['blurTheme'] = var12;
                var8 = var11.bind(var4)(var10, var9);
 262:
                var7[1] = var8;
                var5['children'] = var7;
                var5 = var6.bind(var4)(var2, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var6.bind(var1)(var7);
    var _closure1_slot18 = var6;
    var7 = 13;
    var11 = var9[var7];
    var11 = var8.bind(var1)(var11);
    var11 = var11.ThemeContext;
    var6['contextType'] = var11;
    var11 = {'size': 128, 'bgColor': '#ffffff', 'fgColor': '#000000'};
    var6['defaultProps'] = var11;
    var10 = var10.PureComponent;
    var2 = function(arg1) {
        var4 = function QRCodeWithOverlay() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot5;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot19;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot9;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot6;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var11 = this;
                var2 = _closure1_slot15;
                var1 = var11.context;
                var4 = undefined;
                var14 = var2.bind(var4)(var1);
                var1 = var11.props;
                var2 = var1.overlaySize;
                var7 = var1.blur;
                var1 = _closure1_slot17;
                var6 = null;
                if(!(var6 == var2)) { _fun0004_ip = 59; continue _fun0004 }
 49:
                var3 = _closure1_slot16;
                var2 = var3.SIZE_40;
 59:
                var13 = var1[var2];
                var3 = _closure1_slot14;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var14.qrCodeContainer;
                var1['style'] = var5;
                var9 = _closure1_slot13;
                var8 = _closure1_slot18;
                var5 = {};
                var16 = var11.props;
                var17 = var5;
                var11 = copyDataProperties(var17, var16);
                var12 = false;
                var11 = 'blur';
                var5[var11] = var12;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var8 = {};
                var12 = var14.qrCodeOverlay;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot12;
                var12 = var12.absoluteFill;
                var11[1] = var12;
                var8['style'] = var11;
                var12 = _closure1_slot11;
                var11 = {};
                var13 = var14[var13];
                var11['style'] = var13;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 14;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var11['source'] = var13;
                var11 = var9.bind(var4)(var12, var11);
                var8['children'] = var11;
                var8 = var9.bind(var4)(var2, var8);
                var5[1] = var8;
                var6 = null;
                if(!var7) { _fun0004_ip = 273; continue _fun0004 }
 227:
                var9 = _closure1_slot13;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 15;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var10 = _closure1_slot12;
                var10 = var10.absoluteFill;
                var7['style'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 273:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var10);
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ThemeContext;
    var2['contextType'] = var7;
    var7 = {'size': 144, 'bgColor': '#ffffff', 'fgColor': '#000000'};
    var2['defaultProps'] = var7;
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'components_native/QRCode.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['QRCodeOverlaySizes'] = var5;
    var3['QR_CODE_OVERLAY_SIZE_MAP'] = var4;
    var3['QRCodeWithOverlay'] = var2;
    return var1;
})();