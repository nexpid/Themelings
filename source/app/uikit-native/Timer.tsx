// app/uikit-native/Timer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsxs;
    var _closure1_slot8 = var7;
    var4 = var4.PureComponent;
    var2 = function(arg1) {
        var4 = function Timer(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var6 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var3);
                var11 = new Array(1);
                var11[0] = var4;
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 75; continue _fun0002 }
 62:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 109; continue _fun0002;
 75:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 109:
                var1 = var3.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot0;
                        var4 = var2.state;
                        var3 = var4.seconds;
                        var2 = var4.minutes;
                        var8 = var4.hours;
                        var7 = 1;
                        var6 = var3 + var7;
                        var9 = 60;
                        var5 = var2;
                        var4 = var8;
                        if(!(var6 >= var9)) { _fun0003_ip = 75; continue _fun0003 }
 50:
                        var3 = var2 + var7;
                        var2 = var8;
                        if(!(var3 >= var9)) { _fun0003_ip = 67; continue _fun0003 }
 61:
                        var2 = var8 + var7;
                        var3 = 0;
 67:
                        var6 = 0;
                        var5 = var3;
                        var4 = var2;
 75:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var1['seconds'] = var6;
                        var1['minutes'] = var5;
                        var1['hours'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_incrementSecond'] = var3;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = var2.state;
                        var2 = var3.seconds;
                        var10 = var3.minutes;
                        var8 = var3.hours;
                        var9 = 1;
                        var4 = var2 - var9;
                        var6 = var10;
                        var5 = var8;
                        var7 = var4;
                        if(!(var7 < var9)) { _fun0004_ip = 105; continue _fun0004 }
 50:
                        if(!(!(var10 >= var9))) { _fun0004_ip = 86; continue _fun0004 }
 54:
                        var11 = var10 < var9;
                        if(!var11) { _fun0004_ip = 65; continue _fun0004 }
 61:
                        var11 = var8 >= var9;
 65:
                        var3 = var10;
                        var2 = var8;
                        if(!var11) { _fun0004_ip = 84; continue _fun0004 }
 74:
                        var2 = var8 - var9;
                        var4 = 59;
                        var3 = var4;
 84:
                        _fun0004_ip = 96; continue _fun0004;
 86:
                        var3 = var10 - var9;
                        var4 = 59;
                        var2 = var8;
 96:
                        var7 = var4;
                        var6 = var3;
                        var5 = var2;
 105:
                        var2 = 0;
                        if(!(!(var7 <= var2))) { _fun0004_ip = 145; continue _fun0004 }
 111:
                        var4 = _closure3_slot0;
                        var3 = var4.setState;
                        var2 = {};
                        var2['seconds'] = var7;
                        var2['minutes'] = var6;
                        var2['hours'] = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun0004_ip = 197; continue _fun0004;
 145:
                        var2 = global;
                        var4 = var2.clearInterval;
                        var1 = _closure3_slot0;
                        var3 = var1._timerId;
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var3 = null;
                        var1['_timerId'] = var3;
                        var1 = var1.props;
                        var1 = var1.onComplete;
                        if(!(var3 != var1)) { _fun0004_ip = 197; continue _fun0004 }
 193:
                        var1 = var1.bind(var2)();
 197:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_decrementSecond'] = var2;
                var6 = var4.seconds;
                var3 = var4.minutes;
                var2 = var4.hours;
                var11 = var4.timestamp;
                var5 = null;
                var8 = var6;
                var7 = var3;
                var4 = var2;
                if(!(var5 != var11)) { _fun0002_ip = 335; continue _fun0002 }
 183:
                var10 = 0;
                var8 = var6;
                var7 = var3;
                var4 = var2;
                if(!(var11 > var10)) { _fun0002_ip = 335; continue _fun0002 }
 201:
                var9 = global;
                var6 = var9.Math;
                var3 = var6.max;
                var12 = var9.Date;
                var2 = var12.now;
                var2 = var2.bind(var12)();
                var2 = var2 - var11;
                var3 = var3.bind(var6)(var10, var2);
                var2 = 1000;
                var3 = var3 / var2;
                var11 = var9.Math;
                var10 = var11.floor;
                var2 = 86400;
                var6 = var3 % var2;
                var3 = 3600;
                var2 = var6 / var3;
                var4 = var10.bind(var11)(var2);
                var12 = var9.Math;
                var10 = var12.floor;
                var11 = var6 % var3;
                var6 = 60;
                var3 = var11 / var6;
                var7 = var10.bind(var12)(var3);
                var10 = var9.Math;
                var9 = var10.floor;
                var6 = var11 % var6;
                var8 = var9.bind(var10)(var6);
 335:
                var2 = {};
                var9 = var5 != var8;
                var6 = 0;
                if(!var9) { _fun0002_ip = 349; continue _fun0002 }
 346:
                var6 = var8;
 349:
                var2['seconds'] = var6;
                var8 = var5 != var7;
                var6 = 0;
                if(!var8) { _fun0002_ip = 366; continue _fun0002 }
 363:
                var6 = var7;
 366:
                var2['minutes'] = var6;
                var5 = var5 != var4;
                var3 = 0;
                if(!var5) { _fun0002_ip = 383; continue _fun0002 }
 380:
                var3 = var4;
 383:
                var2['hours'] = var3;
                var1['state'] = var2;
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
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2.props;
                var1 = var1.countdown;
                var3 = global;
                var5 = var3.setInterval;
                if(var1) { _fun0005_ip = 53; continue _fun0005 }
 25:
                var4 = var2._incrementSecond;
                var3 = undefined;
                var1 = 1000;
                var1 = var5.bind(var3)(var4, var1);
                var2['_timerId'] = var1;
                _fun0005_ip = 79; continue _fun0005;
 53:
                var4 = var2._decrementSecond;
                var3 = undefined;
                var1 = 1000;
                var1 = var5.bind(var3)(var4, var1);
                var2['_timerId'] = var1;
 79:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var1 = global;
            var4 = var1.clearInterval;
            var2 = var3._timerId;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = null;
            var3['_timerId'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = this;
                var1 = var3.props;
                var5 = var1.style;
                var2 = var1.hideHours;
                var1 = var1.hideMinutes;
                var4 = var3.state;
                var3 = var4.seconds;
                var6 = var4.minutes;
                var9 = var4.hours;
                if(!var2) { _fun0006_ip = 61; continue _fun0006 }
 51:
                var8 = '';
                var2 = 0;
                if(!(var2 !== var9)) { _fun0006_ip = 146; continue _fun0006 }
 61:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var7 = undefined;
                var11 = var4.bind(var7)(var2);
                var10 = var11.padStart;
                var2 = global;
                var4 = var2.String;
                var9 = var4.bind(var7)(var9);
                var7 = 2;
                var4 = '0';
                var9 = var10.bind(var11)(var9, var7, var4);
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var4 = '';
                var2 = ':';
                var8 = var7.bind(var4)(var9, var2);
 146:
                if(!var1) { _fun0006_ip = 159; continue _fun0006 }
 149:
                var7 = '';
                var1 = 0;
                if(!(var1 !== var6)) { _fun0006_ip = 244; continue _fun0006 }
 159:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var4 = undefined;
                var10 = var2.bind(var4)(var1);
                var9 = var10.padStart;
                var1 = global;
                var2 = var1.String;
                var6 = var2.bind(var4)(var6);
                var4 = 2;
                var2 = '0';
                var6 = var9.bind(var10)(var6, var4, var2);
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = '';
                var1 = ':';
                var7 = var4.bind(var2)(var6, var1);
 244:
                var1 = var8.length;
                var2 = 0;
                if(!(!(var1 > var2))) { _fun0006_ip = 267; continue _fun0006 }
 255:
                var1 = var7.length;
                var6 = var3;
                if(!(var1 > var2)) { _fun0006_ip = 327; continue _fun0006 }
 267:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var1 = var2[var1];
                var2 = undefined;
                var9 = var4.bind(var2)(var1);
                var4 = var9.padStart;
                var1 = global;
                var1 = var1.String;
                var3 = var1.bind(var2)(var3);
                var2 = 2;
                var1 = '0';
                var6 = var4.bind(var9)(var3, var2, var1);
 327:
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.LegacyText;
                var1 = {};
                var1['style'] = var5;
                var5 = 'timer';
                var1['accessibilityRole'] = var5;
                var5 = new Array(3);
                var5[0] = var8;
                var5[1] = var7;
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {'hideMinutes': false, 'hideHours': false};
    var2['defaultProps'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/Timer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();