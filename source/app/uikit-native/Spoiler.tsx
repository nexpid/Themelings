// app/uikit-native/Spoiler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot7 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.View;
    var _closure1_slot8 = var8;
    var7 = var7.StyleSheet;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var14 = var7.EMOJI_CHAT_SIZE;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var11 = var7.MUTED_OPACITY_CONTENT;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot10 = var7;
    var7 = 10;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var12 = 'transparent';
    var10['color'] = var12;
    var12 = 11;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.SPOILER_HIDDEN_BACKGROUND;
    var10['backgroundColor'] = var15;
    var7['spoiler'] = var10;
    var10 = {};
    var10['width'] = var14;
    var10['height'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.SPOILER_HIDDEN_BACKGROUND;
    var10['backgroundColor'] = var14;
    var7['placeholder'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.SPOILER_REVEALED_BACKGROUND;
    var10['backgroundColor'] = var12;
    var7['spoilerRevealed'] = var10;
    var10 = {};
    var10['opacity'] = var11;
    var7['muted'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var7 = function recursiveTextExtraction(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot7;
        var4 = var2.Children;
        var3 = var4.map;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var2 = _closure1_slot7;
                var1 = var2.isValidElement;
                var1 = var1.bind(var2)(var4);
                if(var1) { _fun0002_ip = 26; continue _fun0002 }
 24:
                return var4;
 26:
                var1 = var4.props;
                var3 = var1.style;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var8 = var3;
                if(!var1) { _fun0002_ip = 75; continue _fun0002 }
 60:
                var2 = _closure1_slot9;
                var1 = var2.flatten;
                var8 = var1.bind(var2)(var3);
 75:
                var3 = _closure1_slot7;
                var2 = var3.cloneElement;
                var1 = {};
                var9 = _closure1_slot12;
                var5 = var4.props;
                var6 = var5.children;
                var7 = _closure2_slot0;
                var5 = undefined;
                var6 = var9.bind(var5)(var6, var7);
                var1['children'] = var6;
                var6 = new Array(2);
                var6[0] = var8;
                var7 = var7.spoiler;
                var6[1] = var7;
                var1['style'] = var6;
                var1['onPress'] = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var7;
    var4 = var4.PureComponent;
    var2 = function(arg1) {
        var4 = function Spoiler(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 86; continue _fun0003 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 120; continue _fun0003;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = false;
                var3['revealed'] = var4;
                var1['state'] = var3;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.revealed;
                        if(var2) { _fun0004_ip = 36; continue _fun0004 }
 21:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var2 = var3.disableReveal;
 36:
                        if(var2) { _fun0004_ip = 75; continue _fun0004 }
 39:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = var3.state;
                        var4 = var4.revealed;
                        var4 = !var4;
                        var1['revealed'] = var4;
                        var1 = var2.bind(var3)(var1);
 75:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTap'] = var2;
                return var1;
            }
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
                var7 = this;
                var5 = _closure1_slot11;
                var3 = var7.context;
                var4 = undefined;
                var9 = var5.bind(var4)(var3);
                var _closure3_slot0 = var9;
                var3 = var7.state;
                var8 = var3.revealed;
                var _closure3_slot1 = var8;
                var5 = var7.props;
                var6 = var5.children;
                var3 = var5.spoilerStyle;
                var5 = var5.spoilerRevealedStyle;
                if(var8) { _fun0005_ip = 88; continue _fun0005 }
 68:
                var10 = var9.spoiler;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var3;
                _fun0005_ip = 109; continue _fun0005;
 88:
                var10 = var9.spoilerRevealed;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var5;
                var8 = var3;
 109:
                var3 = _closure1_slot7;
                var5 = var3.Children;
                var3 = var5.count;
                var5 = var3.bind(var5)(var6);
                var3 = 0;
                if(!(var3 !== var5)) { _fun0005_ip = 278; continue _fun0005 }
 138:
                var3 = _closure1_slot7;
                var5 = var3.Children;
                var3 = var5.map;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var7 = arg1;
                        var2 = _closure1_slot7;
                        var1 = var2.isValidElement;
                        var2 = var1.bind(var2)(var7);
                        var1 = var7;
                        if(!var2) { _fun0006_ip = 166; continue _fun0006 }
 30:
                        var2 = var7.type;
                        var3 = var2.displayName;
                        var2 = 'Image';
                        if(!(var2 !== var3)) { _fun0006_ip = 73; continue _fun0006 }
 48:
                        var4 = var7.props;
                        var3 = null;
                        var6 = var3 == var4;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 69; continue _fun0006 }
 64:
                        var2 = var4.source;
 69:
                        if(!(var3 != var2)) { _fun0006_ip = 117; continue _fun0006 }
 73:
                        var3 = _closure3_slot1;
                        if(var3) { _fun0006_ip = 117; continue _fun0006 }
 83:
                        var6 = _closure1_slot10;
                        var4 = _closure1_slot8;
                        var3 = {};
                        var2 = _closure3_slot0;
                        var2 = var2.placeholder;
                        var3['style'] = var2;
                        var2 = undefined;
                        var2 = var6.bind(var2)(var4, var3);
                        _fun0006_ip = 163; continue _fun0006;
 117:
                        var6 = var7.props;
                        var4 = null;
                        var3 = var7;
                        if(!(var4 != var6)) { _fun0006_ip = 160; continue _fun0006 }
 131:
                        var6 = _closure3_slot1;
                        var3 = var7;
                        if(var6) { _fun0006_ip = 160; continue _fun0006 }
 144:
                        var6 = _closure1_slot12;
                        var5 = _closure3_slot0;
                        var4 = undefined;
                        var3 = var6.bind(var4)(var7, var5);
 160:
                        var2 = var3;
 163:
                        var1 = var2;
 166:
                        return var1;
                    }
                };
                var5 = var3.bind(var5)(var6, var2);
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 12;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.LegacyText;
                var1 = {};
                var6 = 'button';
                var1['accessibilityRole'] = var6;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = var7.props;
                var8 = var8.muted;
                if(!var8) { _fun0005_ip = 232; continue _fun0005 }
 226:
                var8 = var9.muted;
 232:
                var6[1] = var8;
                var1['style'] = var6;
                var6 = var7.props;
                var8 = var6.disableReveal;
                var6 = undefined;
                if(var8) { _fun0005_ip = 262; continue _fun0005 }
 256:
                var6 = var7.handleTap;
 262:
                var1['onPress'] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
 278:
                var1 = null;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var2['contextType'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/Spoiler.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();