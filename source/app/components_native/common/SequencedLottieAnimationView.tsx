// app/components_native/common/SequencedLottieAnimationView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = ['source', 'style'];
    var _closure1_slot2 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var7 = true;
    var4['value'] = var7;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.PureComponent;
    var2 = function(arg1) {
        var4 = function SequencedLottieAnimationView(arg1) {
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
                var1['animationRef'] = var3;
                var3 = var1.props;
                var3 = var3.nextScene;
                var1['currentScene'] = var3;
                var3 = false;
                var1['isUnmounted'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.onSceneComplete;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 41; continue _fun0003 }
 24:
                        var1 = _closure3_slot0;
                        var2 = var1.currentScene;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleComplete'] = var3;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2['animationRef'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleSetRef'] = var2;
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
            var3 = this;
            var1 = var3.props;
            var2 = var1.nextScene;
            var1 = var3.playScene;
            var1 = var1.bind(var3)(var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var1 = var3.props;
                var2 = var1.nextScene;
                var1 = var3.currentScene;
                if(!(var2 !== var1)) { _fun0004_ip = 35; continue _fun0004 }
 24:
                var1 = var3.playScene;
                var1 = var1.bind(var3)(var2);
 35:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'playScene';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.props;
                var5 = var3.sceneSegments;
                var3 = var5[var2];
                var4 = var1.currentScene;
                var6 = var5[var4];
                var5 = var1.animationRef;
                var4 = null;
                var4 = var4 == var5;
                if(var4) { _fun0005_ip = 97; continue _fun0005 }
 46:
                var5 = var1.currentScene;
                var5 = var2 !== var5;
                if(!var5) { _fun0005_ip = 75; continue _fun0005 }
 59:
                var8 = var3.BEG;
                var7 = var6.BEG;
                var5 = var8 === var7;
 75:
                if(!var5) { _fun0005_ip = 94; continue _fun0005 }
 78:
                var7 = var3.END;
                var6 = var6.END;
                var5 = var7 === var6;
 94:
                var4 = var5;
 97:
                if(var4) { _fun0005_ip = 130; continue _fun0005 }
 100:
                var6 = var1.animationRef;
                var5 = var6.play;
                var4 = var3.BEG;
                var3 = var3.END;
                var3 = var5.bind(var6)(var4, var3);
 130:
                var1['currentScene'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var7 = this;
                var3 = var7.props;
                var9 = var3.source;
                var10 = var3.style;
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var4 = undefined;
                var8 = var2.bind(var4)(var3, var1);
                var3 = 'object';
                var2 = typeof var9;
                var1 = undefined;
                if(!(var3 === var2)) { _fun0006_ip = 79; continue _fun0006 }
 50:
                var2 = var9.uri;
                var1 = undefined;
                if(var2) { _fun0006_ip = 79; continue _fun0006 }
 60:
                var2 = global;
                var3 = var2.JSON;
                var2 = var3.stringify;
                var1 = var2.bind(var3)(var9);
 79:
                var11 = undefined;
                if(!(var11 !== var1)) { _fun0006_ip = 109; continue _fun0006 }
 85:
                var1 = {};
                var3 = var9.w;
                var2 = var9.h;
                var2 = var3 / var2;
                var1['aspectRatio'] = var2;
                var11 = var1;
 109:
                var3 = _closure1_slot10;
                var2 = _closure1_slot9;
                var1 = {};
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var10;
                var1['style'] = var6;
                var6 = _closure1_slot0;
                var12 = _closure1_slot1;
                var5 = 9;
                var5 = var12[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5['source'] = var9;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var5['style'] = var9;
                var14 = var5;
                var13 = var8;
                var8 = copyDataProperties(var14, var13);
                var9 = var7.handleSetRef;
                var8 = 'ref';
                var5[var8] = var9;
                var8 = var7.handleComplete;
                var7 = 'onAnimationFinish';
                var5[var7] = var8;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {};
    var4['autoPlay'] = var7;
    var2['defaultProps'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/SequencedLottieAnimationView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();