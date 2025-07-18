// app/uikit-native/GuildIconUploader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot8 = var8;
    var4 = var4.Image;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createLegacyClassComponentStyles;
    var8 = {};
    var4 = {'width': 82, 'height': 82, 'marginTop': 4};
    var8['container'] = var4;
    var4 = {};
    var12 = 10;
    var11 = var6[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY;
    var4['backgroundColor'] = var11;
    var8['guildPlaceholder'] = var4;
    var4 = {'width': 82, 'height': 82, 'borderRadius': 41};
    var8['guildIcon'] = var4;
    var4 = 20;
    var11 = {'position': 'absolute', 'top': 4294967288, 'right': 4294967288, 'width': 40, 'height': 40, 'borderRadius': 20, 'justifyContent': 'center', 'alignItems': 'center'};
    var8['iconWrapperBorder'] = var11;
    var11 = {'width': 32, 'height': 32, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var11['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_ACTIVE;
    var11['backgroundColor'] = var14;
    var8['filledIconWrapper'] = var11;
    var11 = {'position': 'absolute', 'top': 4294967292, 'right': 4294967292, 'width': 32, 'height': 32, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var11['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BRAND_500;
    var11['backgroundColor'] = var14;
    var8['emptyIconWrapper'] = var11;
    var11 = {'borderWidth': 2, 'borderStyle': 'dashed', 'justifyContent': 'center', 'alignItems': 'center'};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_NORMAL;
    var11['borderColor'] = var12;
    var8['emptyGuildIcon'] = var11;
    var11 = {'textAlign': 'center', 'lineHeight': 16, 'paddingTop': 4};
    var8['emptyGuildIconText'] = var11;
    var11 = {'height': 16, 'width': 16};
    var8['uploadIcon'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot13 = var8;
    var7 = var7.PureComponent;
    var2 = function(arg1) {
        var4 = function GuildIconUploader() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'renderIcon';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var4 = _closure1_slot13;
                var3 = var1.context;
                var5 = undefined;
                var8 = var4.bind(var5)(var3);
                var1 = var1.props;
                var7 = var1.icon;
                var1 = null;
                if(!(var1 == var7)) { _fun0003_ip = 322; continue _fun0003 }
 41:
                var4 = _closure1_slot12;
                var3 = _closure1_slot8;
                var1 = {};
                var9 = var8.guildIcon;
                var6 = new Array(2);
                var6[0] = var9;
                var9 = var8.emptyGuildIcon;
                var6[1] = var9;
                var1['style'] = var6;
                var10 = _closure1_slot11;
                var9 = _closure1_slot9;
                var6 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 11;
                var11 = var13[var11];
                var13 = var12.bind(var5)(var11);
                var12 = var13.isThemeDark;
                var11 = _closure1_slot10;
                var11 = var11.theme;
                var11 = var12.bind(var13)(var11);
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                if(var11) { _fun0003_ip = 154; continue _fun0003 }
 140:
                var11 = 13;
                var11 = var14[var11];
                var11 = var13.bind(var5)(var11);
                _fun0003_ip = 166; continue _fun0003;
 154:
                var12 = 12;
                var12 = var14[var12];
                var11 = var13.bind(var5)(var12);
 166:
                var6['source'] = var11;
                var9 = var10.bind(var5)(var9, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var11 = _closure1_slot11;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 14;
                var9 = var16[var9];
                var9 = var15.bind(var5)(var9);
                var10 = var9.Text;
                var9 = {'style': null, 'variant': 'text-xs/bold', 'color': 'header-secondary'};
                var12 = var8.emptyGuildIconText;
                var9['style'] = var12;
                var12 = 15;
                var13 = var16[var12];
                var13 = var15.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.3UB9aW;
                var13 = var13.bind(var14)(var12);
                var12 = var13.toUpperCase;
                var12 = var12.bind(var13)();
                var9['children'] = var12;
                var9 = var11.bind(var5)(var10, var9);
                var6[1] = var9;
                var1['children'] = var6;
                var1 = var4.bind(var5)(var3, var1);
                _fun0003_ip = 377; continue _fun0003;
 322:
                var4 = _closure1_slot11;
                var3 = _closure1_slot9;
                var2 = {};
                var9 = var8.guildIcon;
                var6 = new Array(2);
                var6[0] = var9;
                var8 = var8.guildPlaceholder;
                var6[1] = var8;
                var2['style'] = var6;
                var6 = {};
                var6['uri'] = var7;
                var2['source'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 377:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'renderUpload';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = this;
                var3 = _closure1_slot13;
                var2 = var1.context;
                var4 = undefined;
                var12 = var3.bind(var4)(var2);
                var1 = var1.props;
                var5 = var1.icon;
                var14 = var1.iconBackgroundColor;
                var3 = _closure1_slot11;
                var2 = _closure1_slot8;
                var1 = null;
                if(!(var1 == var5)) { _fun0004_ip = 113; continue _fun0004 }
 52:
                var1 = {};
                var5 = var12.emptyIconWrapper;
                var1['style'] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot9;
                var5 = {};
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 17;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var5['source'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                _fun0004_ip = 245; continue _fun0004;
 113:
                var5 = {};
                var7 = var12.iconWrapperBorder;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7['backgroundColor'] = var14;
                var6[1] = var7;
                var5['style'] = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot8;
                var6 = {};
                var9 = var12.filledIconWrapper;
                var6['style'] = var9;
                var10 = _closure1_slot9;
                var9 = {};
                var13 = var12.uploadIcon;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var13['tintColor'] = var14;
                var12[1] = var13;
                var9['style'] = var12;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 16;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var9['source'] = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5['children'] = var6;
                var1 = var5;
 245:
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var10 = this;
                var2 = _closure1_slot13;
                var1 = var10.context;
                var4 = undefined;
                var11 = var2.bind(var4)(var1);
                var1 = var10.props;
                var12 = var1.style;
                var5 = var1.onPress;
                var7 = var1.icon;
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 18;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1['accessibilityRole'] = var6;
                var6 = null;
                if(!(var6 == var7)) { _fun0005_ip = 145; continue _fun0005 }
 88:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 15;
                var7 = var14[var6];
                var7 = var13.bind(var4)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var6 = var14[var6];
                var6 = var13.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.MsUY/f;
                var6 = var7.bind(var9)(var6);
                _fun0005_ip = 202; continue _fun0005;
 145:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 15;
                var9 = var15[var7];
                var9 = var14.bind(var4)(var9);
                var13 = var9.intl;
                var9 = var13.string;
                var7 = var15[var7];
                var7 = var14.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.VATxfX;
                var6 = var9.bind(var13)(var7);
 202:
                var1['accessibilityLabel'] = var6;
                var1['onPress'] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot8;
                var5 = {};
                var13 = var11.container;
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var12;
                var5['style'] = var9;
                var9 = _closure1_slot11;
                var8 = {};
                var11 = var11.guildIcon;
                var8['style'] = var11;
                var11 = var10.renderIcon;
                var11 = var11.bind(var10)();
                var8['children'] = var11;
                var9 = var9.bind(var4)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var10.renderUpload;
                var9 = var9.bind(var10)();
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var7);
    var7 = 19;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ThemeContext;
    var2['contextType'] = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/GuildIconUploader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();