// app/components_native/common/UnreadBars.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var15 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.View;
    var _closure1_slot9 = var8;
    var8 = var7.Animated;
    var _closure1_slot10 = var8;
    var9 = var7.StyleSheet;
    var7 = var7.TouchableWithoutFeedback;
    var _closure1_slot11 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var15.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var11 = var7.Fonts;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot13 = var8;
    var7 = var7.jsxs;
    var _closure1_slot14 = var7;
    var8 = var9.create;
    var7 = {};
    var10 = {};
    var13 = 10;
    var13 = var6[var13];
    var17 = var15.bind(var1)(var13);
    var16 = var11.DISPLAY_SEMIBOLD;
    var11 = 11;
    var13 = var6[var11];
    var13 = var15.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var20 = var13.WHITE_500;
    var13 = {};
    var13['uppercase'] = var12;
    var12 = 12;
    var22 = undefined;
    var21 = var16;
    var19 = var12;
    var18 = var13;
    var20 = var22[var17](var21, var20, var19, var18, var17);
    var21 = var10;
    var13 = copyDataProperties(var21, var20);
    var7['unreadText'] = var10;
    var10 = {'margin': 8, 'height': 24, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var15.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10['borderRadius'] = var13;
    var13 = var6[var12];
    var17 = var5.bind(var1)(var13);
    var16 = var17.hexWithOpacity;
    var13 = var6[var11];
    var13 = var15.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_400;
    var14 = 0.9;
    var13 = var16.bind(var17)(var13, var14);
    var10['backgroundColor'] = var13;
    var7['unread'] = var10;
    var10 = {};
    var12 = var6[var12];
    var13 = var5.bind(var1)(var12);
    var12 = var13.hexWithOpacity;
    var11 = var6[var11];
    var11 = var15.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var11 = var12.bind(var13)(var11, var14);
    var10['backgroundColor'] = var11;
    var7['mention'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot15 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function UnreadBar(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var7 = this;
                var15 = 0;
                var1 = copyRestArgs(var15);
                var8 = _closure1_slot3;
                var4 = _closure2_slot0;
                var6 = undefined;
                var8 = var8.bind(var6)(var7, var4);
                var12 = new Array(0);
                var15 = var12;
                var14 = var1;
                var13 = 0;
                var1 = arraySpread(var15, var14, var13);
                var1 = _closure1_slot6;
                var11 = var1.bind(var6)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var7, var12);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot6;
                var8 = var8.bind(var6)(var7);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
 120:
                var1 = var4.bind(var6)(var7, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var6 = false;
                var4['active'] = var6;
                var1['state'] = var4;
                var3 = _closure1_slot10;
                var3 = var3.Value;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var16 = var4;
                var15 = 0;
                var3 = new var16[var3](var15, var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['animation'] = var3;
                var3 = function() {
                    var5 = _closure3_slot0;
                    var1 = var5.props;
                    var3 = var1.item;
                    var2 = var1.onPress;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 13;
                    var6 = var9[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var8 = _closure1_slot1;
                    var4 = 14;
                    var4 = var9[var4];
                    var4 = var8.bind(var1)(var4);
                    var4 = var4.IMPACT_LIGHT;
                    var4 = var6.bind(var7)(var4);
                    var4 = var5.hide;
                    var4 = var4.bind(var5)();
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var1['handlePress'] = var3;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['active'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handlePressIn'] = var3;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = false;
                    var1['active'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handlePressOut'] = var2;
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
        var1 = 'componentWillEnter';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var3 = this;
            var2 = var3.show;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillLeave';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.hide;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'show';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot10;
            var3 = var4.spring;
            var1 = this;
            var2 = var1.animation;
            var1 = {'toValue': 1, 'friction': 15, 'tension': 250, 'useNativeDriver': true};
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.start;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hide';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot10;
            var3 = var4.spring;
            var1 = this;
            var2 = var1.animation;
            var1 = {'toValue': 0, 'friction': 15, 'tension': 250, 'useNativeDriver': true};
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.start;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAnimatedStyle';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = this;
                var1 = var3.props;
                var8 = var1.bottom;
                var7 = var1.contentInset;
                var1 = var1.useReducedMotion;
                var2 = var3.state;
                var10 = var2.active;
                var4 = {};
                var2 = 'absolute';
                var4['position'] = var2;
                var5 = var7.left;
                var6 = null;
                var11 = var6 != var5;
                var2 = 0;
                if(!var11) { _fun0003_ip = 65; continue _fun0003 }
 62:
                var2 = var5;
 65:
                var4['left'] = var2;
                var5 = var7.right;
                var11 = var6 != var5;
                var2 = 0;
                if(!var11) { _fun0003_ip = 86; continue _fun0003 }
 83:
                var2 = var5;
 86:
                var4['right'] = var2;
                var5 = 'top';
                if(!var8) { _fun0003_ip = 101; continue _fun0003 }
 97:
                var5 = 'bottom';
 101:
                if(var8) { _fun0003_ip = 123; continue _fun0003 }
 104:
                var11 = var7.top;
                var12 = var6 != var11;
                var2 = 0;
                if(!var12) { _fun0003_ip = 121; continue _fun0003 }
 118:
                var2 = var11;
 121:
                _fun0003_ip = 143; continue _fun0003;
 123:
                var7 = var7.bottom;
                var11 = var6 != var7;
                var6 = 0;
                if(!var11) { _fun0003_ip = 140; continue _fun0003 }
 137:
                var6 = var7;
 140:
                var2 = var6;
 143:
                var4[var5] = var2;
                if(var1) { _fun0003_ip = 278; continue _fun0003 }
 154:
                var1 = {};
                var14 = var1;
                var13 = var4;
                var2 = copyDataProperties(var14, var13);
                var5 = var3.animation;
                var2 = 'opacity';
                var1[var2] = var5;
                var2 = {};
                var7 = var3.animation;
                var6 = var7.interpolate;
                var5 = {};
                var11 = [0, 1];
                var5['inputRange'] = var11;
                var11 = -72;
                if(!var8) { _fun0003_ip = 224; continue _fun0003 }
 221:
                var11 = 72;
 224:
                var8 = new Array(2);
                var8[0] = var11;
                var9 = 0;
                if(!var10) { _fun0003_ip = 240; continue _fun0003 }
 237:
                var9 = 1;
 240:
                var8[1] = var9;
                var5['outputRange'] = var8;
                var5 = var6.bind(var7)(var5);
                var2['translateY'] = var5;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = 'transform';
                var1[var2] = var5;
                _fun0003_ip = 308; continue _fun0003;
 278:
                var2 = {};
                var14 = var2;
                var13 = var4;
                var4 = copyDataProperties(var14, var13);
                var4 = var3.animation;
                var3 = 'opacity';
                var2[var3] = var4;
                var1 = var2;
 308:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var7 = this;
                var1 = var7.props;
                var16 = var1.compact;
                var1 = var1.item;
                var12 = var1.mention;
                var4 = _closure1_slot13;
                var3 = _closure1_slot11;
                var2 = {};
                var1 = 'button';
                var2['accessibilityRole'] = var1;
                var1 = var7.handlePress;
                var2['onPress'] = var1;
                var1 = var7.handlePressIn;
                var2['onPressIn'] = var1;
                var1 = var7.handlePressOut;
                var2['onPressOut'] = var1;
                var1 = _closure1_slot10;
                var6 = var1.View;
                var5 = {};
                var1 = var7.getAnimatedStyle;
                var1 = var1.bind(var7)();
                var5['style'] = var1;
                var8 = _closure1_slot9;
                var7 = {};
                var1 = _closure1_slot15;
                var1 = var1.unread;
                var9 = new Array(2);
                var9[0] = var1;
                var1 = undefined;
                var10 = undefined;
                if(!var12) { _fun0004_ip = 144; continue _fun0004 }
 134:
                var11 = _closure1_slot15;
                var10 = var11.mention;
 144:
                var9[1] = var10;
                var7['style'] = var9;
                var11 = _closure1_slot13;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 15;
                var9 = var14[var9];
                var9 = var10.bind(var1)(var9);
                var10 = var9.LegacyText;
                var9 = {};
                var14 = _closure1_slot15;
                var14 = var14.unreadText;
                var9['style'] = var14;
                var14 = 1.5;
                var9['maxFontSizeMultiplier'] = var14;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var13 = 16;
                var14 = var18[var13];
                var14 = var17.bind(var1)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var18[var13];
                var13 = var17.bind(var1)(var13);
                var13 = var13.t;
                if(var16) { _fun0004_ip = 293; continue _fun0004 }
 260:
                if(var12) { _fun0004_ip = 278; continue _fun0004 }
 263:
                var12 = var13.FCRiT0;
                var12 = var14.bind(var15)(var12);
                _fun0004_ip = 291; continue _fun0004;
 278:
                var16 = var13.8zH0LC;
                var12 = var14.bind(var15)(var16);
 291:
                _fun0004_ip = 304; continue _fun0004;
 293:
                var13 = var13.y2b7CA;
                var12 = var14.bind(var15)(var13);
 304:
                var9['children'] = var12;
                var9 = var11.bind(var1)(var10, var9);
                var7['children'] = var9;
                var7 = var4.bind(var1)(var8, var7);
                var5['children'] = var7;
                var5 = var4.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var4 = {};
    var8 = false;
    var4['bottom'] = var8;
    var7['defaultProps'] = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/UnreadBars.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UnreadBars(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = var2.scrollToLocation;
            var _closure2_slot0 = var3;
            var5 = var2.beforeItem;
            var13 = var2.afterItem;
            var14 = var2.compact;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0005_ip = 41; continue _fun0005 }
 39:
            var14 = false;
 41:
            var11 = var2.contentInset;
            if(!(var11 === var4)) { _fun0005_ip = 61; continue _fun0005 }
 51:
            var11 = {'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
 61:
            var12 = function handlePress(arg1) {
                var1 = arg1;
                var4 = var1.section;
                var1 = var1.row;
                var3 = _closure2_slot0;
                var2 = {};
                var2['section'] = var4;
                var2['item'] = var1;
                var1 = true;
                var2['animated'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var9 = var2.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var10 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                var1 = _closure1_slot12;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var7 = var7.bind(var9)(var3, var1);
            var3 = _closure1_slot14;
            var1 = 18;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TransitionGroup;
            var1 = {};
            var6 = _closure1_slot8;
            var6 = var6.Fragment;
            var1['component'] = var6;
            var6 = null;
            var10 = var6 != var5;
            var9 = null;
            if(!var10) { _fun0005_ip = 217; continue _fun0005 }
 171:
            var16 = _closure1_slot13;
            var15 = _closure1_slot16;
            var10 = {};
            var10['compact'] = var14;
            var10['item'] = var5;
            var10['onPress'] = var12;
            var10['contentInset'] = var11;
            var10['useReducedMotion'] = var7;
            var5 = 'BEFORE';
            var9 = var16.bind(var4)(var15, var10, var5);
 217:
            var5 = new Array(2);
            var5[0] = var9;
            var9 = var6 != var13;
            var6 = null;
            if(!var9) { _fun0005_ip = 286; continue _fun0005 }
 234:
            var10 = _closure1_slot13;
            var9 = _closure1_slot16;
            var8 = {};
            var8['compact'] = var14;
            var8['item'] = var13;
            var8['onPress'] = var12;
            var8['contentInset'] = var11;
            var11 = true;
            var8['bottom'] = var11;
            var8['useReducedMotion'] = var7;
            var7 = 'AFTER';
            var6 = var10.bind(var4)(var9, var8, var7);
 286:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();