// app/components_native/common/Carousel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot14;
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
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
 70: // try_end0
            _fun0002_ip = 74; continue _fun0002;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot7 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createLegacyClassComponentStyles;
    var4 = {};
    var10 = {};
    var11 = 'center';
    var10['alignItems'] = var11;
    var4['container'] = var10;
    var10 = {};
    var11 = 'row';
    var10['flexDirection'] = var11;
    var4['carouselContentWrapper'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-around', 'alignItems': 'center'};
    var4['pageIndicator'] = var10;
    var10 = {};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_PRIMARY;
    var10['color'] = var13;
    var4['activeIndicator'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_SECONDARY;
    var10['color'] = var11;
    var4['inactiveIndicator'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var8 = var7.Component;
    var4 = function(arg1) {
        var4 = function PageIndicator() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot2;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot13;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var5 = _closure1_slot11;
                var3 = var2.context;
                var4 = undefined;
                var6 = var5.bind(var4)(var3);
                var2 = var2.props;
                var10 = var2.count;
                var12 = var2.activeIndex;
                var9 = var2.indicatorSpace;
                var11 = var2.indicatorSize;
                var7 = var2.pageIndicatorStyle;
                var5 = new Array(0);
                var8 = 0;
                var13 = var8 < var10;
                var3 = '•';
                var2 = 10;
                if(!var13) { _fun0003_ip = 174; continue _fun0003 }
 76:
                var14 = var5.push;
                var16 = _closure1_slot9;
                var15 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var2];
                var13 = var15.bind(var4)(var13);
                var15 = var13.LegacyText;
                var13 = {};
                var18 = {};
                var18['fontSize'] = var11;
                var17 = new Array(2);
                var17[0] = var18;
                if(!(var8 !== var12)) { _fun0003_ip = 137; continue _fun0003 }
 129:
                var18 = var6.inactiveIndicator;
                _fun0003_ip = 143; continue _fun0003;
 137:
                var18 = var6.activeIndicator;
 143:
                var17[1] = var18;
                var13['style'] = var17;
                var13['children'] = var3;
                var13 = var16.bind(var4)(var15, var13, var8);
                var13 = var14.bind(var5)(var13);
                var8 = var8 + 1;
                if(var8 < var10) { _fun0003_ip = 76; continue _fun0003 }
 174:
                var3 = _closure1_slot9;
                var2 = _closure1_slot7;
                var1 = {};
                var8 = var6.pageIndicator;
                var6 = new Array(3);
                var6[0] = var8;
                var8 = {};
                var9 = var10 * var9;
                var8['width'] = var9;
                var6[1] = var8;
                var6[2] = var7;
                var1['style'] = var6;
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
    var9 = var4.bind(var1)(var8);
    var _closure1_slot12 = var9;
    var4 = 11;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ThemeContext;
    var9['contextType'] = var8;
    var8 = {'indicatorSpace': 10, 'indicatorSize': 20};
    var9['defaultProps'] = var8;
    var7 = var7.Component;
    var2 = function(arg1) {
        var4 = function Carousel(arg1) {
            var7 = this;
            var4 = 0;
            var11 = 0;
            var8 = copyRestArgs(var11);
            var3 = _closure1_slot2;
            var6 = _closure2_slot0;
            var5 = undefined;
            var3 = var3.bind(var5)(var7, var6);
            var3 = _closure1_slot13;
            var1 = new Array(0);
            var11 = var1;
            var10 = var8;
            var9 = 0;
            var8 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var5)(var7, var6, var1);
            var _closure3_slot0 = var1;
            var3 = {};
            var3['activeIndex'] = var4;
            var1['state'] = var3;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.round;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.contentOffset;
                    var6 = var1.x;
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var3 = var3.width;
                    var3 = var6 / var3;
                    var3 = var4.bind(var5)(var3);
                    var5 = var2.setState;
                    var4 = {};
                    var4['activeIndex'] = var3;
                    var4 = var5.bind(var2)(var4);
                    var2 = var2.props;
                    var4 = var2.onPageChange;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 113; continue _fun0004 }
 93:
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var1 = var2.onPageChange;
                    var1 = var1.bind(var2)(var3);
 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onAnimationEnd'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var10 = this;
                var2 = _closure1_slot11;
                var1 = var10.context;
                var4 = undefined;
                var11 = var2.bind(var4)(var1);
                var1 = var10.props;
                var7 = var1.pageIndicatorStyle;
                var1 = var10.props;
                var1 = var1.children;
                var13 = var1.length;
                var1 = var10.props;
                var2 = var1.pageIndictor;
                var1 = true;
                var1 = var1 === var2;
                if(!var1) { _fun0005_ip = 75; continue _fun0005 }
 68:
                var2 = 1;
                var1 = var13 > var2;
 75:
                var6 = undefined;
                if(!var1) { _fun0005_ip = 121; continue _fun0005 }
 80:
                var3 = _closure1_slot9;
                var2 = _closure1_slot12;
                var1 = {};
                var1['count'] = var13;
                var8 = var10.state;
                var8 = var8.activeIndex;
                var1['activeIndex'] = var8;
                var1['pageIndicatorStyle'] = var7;
                var6 = var3.bind(var4)(var2, var1);
 121:
                var1 = var10.props;
                var9 = var1.scrollViewProps;
                var1 = null;
                if(!(var1 == var9)) { _fun0005_ip = 140; continue _fun0005 }
 138:
                var9 = {};
 140:
                var3 = _closure1_slot10;
                var2 = _closure1_slot7;
                var1 = {};
                var8 = var11.container;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = var10.props;
                var8 = var8.style;
                var7[1] = var8;
                var1['style'] = var7;
                var8 = _closure1_slot9;
                var7 = _closure1_slot8;
                var5 = {'automaticallyAdjustContentInsets': false, 'horizontal': true, 'pagingEnabled': true, 'scrollEnabled': null, 'nestedScrollEnabled': true, 'showsHorizontalScrollIndicator': false};
                var12 = 1;
                var12 = var13 > var12;
                var5['scrollEnabled'] = var12;
                var12 = var10.onAnimationEnd;
                var5['onMomentumScrollEnd'] = var12;
                var15 = var5;
                var14 = var9;
                var9 = copyDataProperties(var15, var14);
                var9 = {};
                var11 = var11.carouselContentWrapper;
                var9['style'] = var11;
                var11 = function onStartShouldSetResponder() {
                    var1 = true;
                    return var1;
                };
                var9['onStartShouldSetResponder'] = var11;
                var10 = var10.props;
                var10 = var10.children;
                var9['children'] = var10;
                var10 = var8.bind(var4)(var2, var9);
                var9 = 'children';
                var5[var9] = var10;
                var7 = var8.bind(var4)(var7, var5);
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
    var2 = var2.bind(var1)(var7);
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var2['contextType'] = var4;
    var4 = {'pageIndictor': true, 'width': 375};
    var2['defaultProps'] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/Carousel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();