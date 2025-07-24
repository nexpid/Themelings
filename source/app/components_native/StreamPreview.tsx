// app/components_native/StreamPreview.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var14 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot18;
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
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot8 = var8;
    var13 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var8 = 9;
    var4 = var6[var8];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createLegacyClassComponentStyles;
    var9 = {};
    var4 = {};
    var18 = var13.absoluteFillObject;
    var19 = var4;
    var13 = copyDataProperties(var19, var18);
    var15 = 'center';
    var13 = 'alignItems';
    var4[var13] = var15;
    var13 = 'justifyContent';
    var4[var13] = var15;
    var15 = 20;
    var13 = 'paddingLeft';
    var4[var13] = var15;
    var13 = 'paddingRight';
    var4[var13] = var15;
    var9['wrapper'] = var4;
    var15 = {'textAlign': 'center', 'fontSize': 14, 'lineHeight': 18, 'marginTop': 16};
    var4 = 14;
    var13 = 10;
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_MUTED;
    var15['color'] = var16;
    var9['text'] = var15;
    var15 = {};
    var16 = '100%';
    var15['width'] = var16;
    var9['fallbackImage'] = var15;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot13 = var9;
    var10 = var7.PureComponent;
    var9 = function(arg1) {
        var4 = function DefaultFallback() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot3;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot17;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var3 = _closure1_slot13;
                var2 = var1.context;
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var1 = var1.props;
                var10 = var1.theme;
                var3 = _closure1_slot11;
                var2 = _closure1_slot9;
                var1 = {};
                var5 = var7.wrapper;
                var1['style'] = var5;
                var6 = _closure1_slot8;
                var5 = {};
                var9 = 'contain';
                var5['resizeMode'] = var9;
                var7 = var7.fallbackImage;
                var5['style'] = var7;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 11;
                var7 = var11[var7];
                var9 = var9.bind(var4)(var7);
                var7 = var9.isThemeDark;
                var7 = var7.bind(var9)(var10);
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                if(var7) { _fun0003_ip = 134; continue _fun0003 }
 120:
                var7 = 13;
                var7 = var10[var7];
                var7 = var9.bind(var4)(var7);
                _fun0003_ip = 146; continue _fun0003;
 134:
                var8 = 12;
                var8 = var10[var8];
                var7 = var9.bind(var4)(var8);
 146:
                var5['source'] = var7;
                var5 = var3.bind(var4)(var6, var5);
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
    var10 = var9.bind(var1)(var10);
    var _closure1_slot14 = var10;
    var9 = var6[var4];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ThemeContext;
    var10['contextType'] = var9;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createLegacyClassComponentStyles;
    var8 = {};
    var11 = {'flex': 1, 'width': '100%', 'height': null, 'aspectRatio': 1.7777777777777777};
    var11['height'] = var1;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_TERTIARY;
    var11['backgroundColor'] = var15;
    var8['touchable'] = var11;
    var11 = {};
    var11['flex'] = var12;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BLACK_500;
    var11['backgroundColor'] = var13;
    var8['imageContainer'] = var11;
    var11 = {};
    var11['flex'] = var12;
    var8['image'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot15 = var8;
    var8 = var7.PureComponent;
    var7 = function(arg1) {
        var4 = function StreamPreview(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot3;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot17;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var3 = {'isImageLoaded': false, 'isImageErrored': false};
            var1['state'] = var3;
            var3 = function() {
                var3 = _closure3_slot0;
                var2 = var3.setState;
                var1 = {'isImageLoaded': false, 'isImageErrored': false};
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['handleLoadStart'] = var3;
            var3 = function() {
                var3 = _closure3_slot0;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['isImageLoaded'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['handleLoad'] = var3;
            var2 = function() {
                var3 = _closure3_slot0;
                var2 = var3.setState;
                var1 = {};
                var4 = true;
                var1['isImageErrored'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['handleError'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var17 = this;
                var2 = _closure1_slot15;
                var1 = var17.context;
                var4 = undefined;
                var8 = var2.bind(var4)(var1);
                var1 = var17.props;
                var19 = var1.url;
                var12 = var1.ctaText;
                var14 = var1.isFetching;
                var3 = var1.renderFallback;
                var13 = var1.style;
                var6 = var1.children;
                var2 = var1.theme;
                var7 = var1.onPress;
                var11 = var1.disabled;
                var1 = var17.state;
                var9 = var1.isImageLoaded;
                var10 = var1.isImageErrored;
                var1 = null;
                if(!(var1 != var19)) { _fun0004_ip = 225; continue _fun0004 }
 102:
                if(var14) { _fun0004_ip = 225; continue _fun0004 }
 105:
                if(var10) { _fun0004_ip = 225; continue _fun0004 }
 108:
                var10 = undefined;
                if(var9) { _fun0004_ip = 133; continue _fun0004 }
 113:
                var15 = var1 == var3;
                var9 = undefined;
                if(var15) { _fun0004_ip = 130; continue _fun0004 }
 122:
                var15 = true;
                var9 = var3.bind(var4)(var15, var2);
 130:
                var10 = var9;
 133:
                var16 = _closure1_slot11;
                var15 = _closure1_slot8;
                var9 = {};
                var18 = 'contain';
                var9['resizeMode'] = var18;
                var18 = var8.image;
                var9['style'] = var18;
                var18 = {};
                var18['uri'] = var19;
                var19 = 'force-cache';
                var18['cache'] = var19;
                var9['source'] = var18;
                var18 = var17.handleLoadStart;
                var9['onLoadStart'] = var18;
                var18 = var17.handleLoad;
                var9['onLoad'] = var18;
                var17 = var17.handleError;
                var9['onError'] = var17;
                var9 = var16.bind(var4)(var15, var9);
                _fun0004_ip = 245; continue _fun0004;
 225:
                var15 = var1 == var3;
                var1 = undefined;
                if(var15) { _fun0004_ip = 240; continue _fun0004 }
 234:
                var1 = var3.bind(var4)(var14, var2);
 240:
                var10 = var1;
                var9 = undefined;
 245:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 16;
                var1 = var14[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.6};
                var1['accessibilityLabel'] = var12;
                var14 = var8.touchable;
                var12 = new Array(2);
                var12[0] = var14;
                var12[1] = var13;
                var1['style'] = var12;
                var1['disabled'] = var11;
                var1['onPress'] = var7;
                var7 = _closure1_slot9;
                var5 = {};
                var8 = var8.imageContainer;
                var5['style'] = var8;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5['children'] = var8;
                var7 = var3.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
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
    var7 = var7.bind(var1)(var8);
    var _closure1_slot16 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = {};
    var8 = function renderFallback(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = _closure1_slot14;
            var2 = {};
            var5 = arg2;
            var2['theme'] = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 15;
            var7 = var9[var5];
            var1 = undefined;
            var7 = var6.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var9[var5];
            var5 = var6.bind(var1)(var5);
            var6 = var5.t;
            var5 = arg1;
            if(var5) { _fun0005_ip = 88; continue _fun0005 }
 73:
            var5 = var6.uQZTBQ;
            var5 = var7.bind(var8)(var5);
            _fun0005_ip = 101; continue _fun0005;
 88:
            var6 = var6.NQ7H8f;
            var5 = var7.bind(var8)(var6);
 101:
            var2['caption'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var4['renderFallback'] = var8;
    var7['defaultProps'] = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/StreamPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedStreamPreview(arg1) {
        var5 = arg1;
        var1 = var5.stream;
        var8 = var1.guildId;
        var7 = var1.channelId;
        var3 = var1.ownerId;
        var9 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 17;
        var2 = var6[var2];
        var4 = undefined;
        var2 = var9.bind(var4)(var2);
        var2 = var2.bind(var4)(var8, var7, var3);
        var8 = var2.previewUrl;
        var7 = var2.isLoading;
        var3 = _closure1_slot0;
        var2 = 18;
        var2 = var6[var2];
        var9 = var3.bind(var4)(var2);
        var6 = var9.useStateFromStores;
        var2 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot10;
            var1 = var1.theme;
            return var1;
        };
        var6 = var6.bind(var9)(var3, var2);
        var3 = _closure1_slot11;
        var2 = _closure1_slot16;
        var1 = {};
        var12 = var1;
        var11 = var5;
        var5 = copyDataProperties(var12, var11);
        var5 = 'url';
        var1[var5] = var8;
        var5 = 'isFetching';
        var1[var5] = var7;
        var5 = 'theme';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();