// app/components_native/common/LottieAnimationView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = ['source', 'style', 'collapsable'];
    var _closure1_slot2 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.PureComponent;
    var2 = function(arg1) {
        var4 = function LottieAnimationView(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot11;
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
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = null;
                var1['animation'] = var3;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['animation'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['setRef'] = var2;
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
        var1 = 'play';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var3 = var1.animation;
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 31; continue _fun0003 }
 15:
                var2 = var1.animation;
                var1 = var2.play;
                var1 = var1.bind(var2)();
 31:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = this;
                var3 = var1.animation;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 31; continue _fun0004 }
 15:
                var2 = var1.animation;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
 31:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'pause';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = this;
                var3 = var1.animation;
                var2 = null;
                if(!(var2 != var3)) { _fun0005_ip = 31; continue _fun0005 }
 15:
                var2 = var1.animation;
                var1 = var2.pause;
                var1 = var1.bind(var2)();
 31:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'resume';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = this;
                var3 = var1.animation;
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 31; continue _fun0006 }
 15:
                var2 = var1.animation;
                var1 = var2.resume;
                var1 = var1.bind(var2)();
 31:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var11 = this;
                var3 = var11.props;
                var8 = var3.source;
                var9 = var3.style;
                var6 = var3.collapsable;
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var4 = undefined;
                var7 = var2.bind(var4)(var3, var1);
                var3 = 'object';
                var2 = typeof var8;
                var1 = undefined;
                if(!(var3 === var2)) { _fun0007_ip = 85; continue _fun0007 }
 56:
                var2 = var8.uri;
                var1 = undefined;
                if(var2) { _fun0007_ip = 85; continue _fun0007 }
 66:
                var2 = global;
                var3 = var2.JSON;
                var2 = var3.stringify;
                var1 = var2.bind(var3)(var8);
 85:
                var10 = undefined;
                if(!(var10 !== var1)) { _fun0007_ip = 115; continue _fun0007 }
 91:
                var1 = {};
                var3 = var8.w;
                var2 = var8.h;
                var2 = var3 / var2;
                var1['aspectRatio'] = var2;
                var10 = var1;
 115:
                var3 = _closure1_slot10;
                var2 = _closure1_slot9;
                var1 = {};
                var12 = new Array(2);
                var12[0] = var10;
                var12[1] = var9;
                var1['style'] = var12;
                var1['collapsable'] = var6;
                var6 = _closure1_slot0;
                var12 = _closure1_slot1;
                var5 = 9;
                var5 = var12[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var11 = var11.setRef;
                var5['ref'] = var11;
                var5['source'] = var8;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5['style'] = var8;
                var15 = var5;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {'autoPlay': true, 'loop': true, 'collapsable': false};
    var2['defaultProps'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/LottieAnimationView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();