// app/components_native/common/CountDown.tsx
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
    var7 = var7.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.Component;
    var2 = function(arg1) {
        var4 = function CountDown() {
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
                var1 = _closure1_slot9;
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
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var1 = global;
            var5 = var1.setInterval;
            var1 = undefined;
            var4 = function() {
                var2 = _closure3_slot0;
                var1 = var2.forceUpdate;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = 1000;
            var2 = var5.bind(var1)(var4, var2);
            var3['_interval'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.clearRefreshInterval;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'clearRefreshInterval';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var3 = var1._interval;
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 36; continue _fun0003 }
 15:
                var2 = global;
                var3 = var2.clearInterval;
                var2 = var1._interval;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 36:
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var10 = this;
                var2 = var10.props;
                var5 = var2.postDeadlineText;
                var6 = var2.style;
                var8 = var2.deadline;
                var1 = var2.withUnits;
                var4 = var2.freezeAtRemainingSeconds;
                var2 = null;
                var3 = var2 != var1;
                if(!var3) { _fun0004_ip = 53; continue _fun0004 }
 50:
                var3 = var1;
 53:
                var1 = inf;
                if(!(var8 !== var1)) { _fun0004_ip = 857; continue _fun0004 }
 70:
                var1 = global;
                var12 = var1.Math;
                var11 = var12.max;
                var7 = var1.Number;
                var9 = undefined;
                var8 = var7.bind(var9)(var8);
                var13 = var1.Date;
                var7 = var13.now;
                var7 = var7.bind(var13)();
                var8 = var8 - var7;
                var7 = 0;
                var11 = var11.bind(var12)(var7, var8);
                var8 = 1000;
                var12 = var11 / var8;
                var8 = var2 != var4;
                if(!var8) { _fun0004_ip = 144; continue _fun0004 }
 140:
                var8 = var12 <= var4;
 144:
                if(!var8) { _fun0004_ip = 160; continue _fun0004 }
 147:
                var8 = var10.clearRefreshInterval;
                var8 = var8.bind(var10)();
                var12 = var4;
 160:
                if(!(var12 >= var7)) { _fun0004_ip = 171; continue _fun0004 }
 164:
                if(!(var2 == var5)) { _fun0004_ip = 917; continue _fun0004 }
 171:
                var11 = var1.Math;
                var10 = var11.floor;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 8;
                var8 = var14[var4];
                var8 = var13.bind(var9)(var8);
                var8 = var8.Seconds;
                var8 = var8.DAY;
                var8 = var12 / var8;
                var10 = var10.bind(var11)(var8);
                var8 = new Array(4);
                var8[0] = var10;
                var15 = var1.Math;
                var11 = var15.floor;
                var10 = var14[var4];
                var10 = var13.bind(var9)(var10);
                var10 = var10.Seconds;
                var10 = var10.DAY;
                var12 = var12 % var10;
                var10 = var14[var4];
                var10 = var13.bind(var9)(var10);
                var10 = var10.Seconds;
                var10 = var10.HOUR;
                var10 = var12 / var10;
                var10 = var11.bind(var15)(var10);
                var8[1] = var10;
                var15 = var1.Math;
                var11 = var15.floor;
                var10 = var14[var4];
                var10 = var13.bind(var9)(var10);
                var10 = var10.Seconds;
                var10 = var10.HOUR;
                var12 = var12 % var10;
                var10 = var14[var4];
                var10 = var13.bind(var9)(var10);
                var10 = var10.Seconds;
                var10 = var10.MINUTE;
                var10 = var12 / var10;
                var10 = var11.bind(var15)(var10);
                var8[2] = var10;
                var11 = var1.Math;
                var10 = var11.floor;
                var4 = var14[var4];
                var4 = var13.bind(var9)(var4);
                var4 = var4.Seconds;
                var4 = var4.MINUTE;
                var4 = var12 % var4;
                var4 = var10.bind(var11)(var4);
                var8[3] = var4;
                var4 = var8[var7];
                var14 = 0;
                if(!(var14 === var4)) { _fun0004_ip = 446; continue _fun0004 }
 433:
                var4 = var8.shift;
                var4 = var4.bind(var8)();
                var14 = 1;
 446:
                var7 = var8.map;
                var4 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = arg1;
                        var2 = 10;
                        var1 = var4;
                        if(!(var1 < var2)) { _fun0005_ip = 37; continue _fun0005 }
 13:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = '0';
                        var1 = var3.bind(var2)(var4);
 37:
                        return var1;
                    }
                };
                var7 = var7.bind(var8)(var4);
                var4 = var7.join;
                var13 = ':';
                var15 = var4.bind(var7)(var13);
                var5 = var15;
                if(!var3) { _fun0004_ip = 917; continue _fun0004 }
 486:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 7;
                var3 = var10[var2];
                var3 = var8.bind(var9)(var3);
                var7 = var3.intl;
                var4 = var7.string;
                var3 = var10[var2];
                var3 = var8.bind(var9)(var3);
                var3 = var3.t;
                var3 = var3.QJyuxc;
                var4 = var4.bind(var7)(var3);
                var3 = new Array(4);
                var3[0] = var4;
                var4 = var10[var2];
                var4 = var8.bind(var9)(var4);
                var11 = var4.intl;
                var7 = var11.string;
                var4 = var10[var2];
                var4 = var8.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.1LyF1t;
                var4 = var7.bind(var11)(var4);
                var3[1] = var4;
                var4 = var10[var2];
                var4 = var8.bind(var9)(var4);
                var11 = var4.intl;
                var7 = var11.string;
                var4 = var10[var2];
                var4 = var8.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.n7dksL;
                var4 = var7.bind(var11)(var4);
                var3[2] = var4;
                var4 = var10[var2];
                var4 = var8.bind(var9)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var2 = var10[var2];
                var2 = var8.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.6m/6nJ;
                var2 = var4.bind(var7)(var2);
                var3[3] = var2;
                var2 = var15.indexOf;
                var7 = var2.bind(var15)(var13);
                var12 = -1;
                var4 = var15;
                var2 = var14;
                if(!(var12 !== var7)) { _fun0004_ip = 830; continue _fun0004 }
 724:
                var7 = var3.length;
                var11 = '';
                var10 = ' ';
                var9 = var15;
                var8 = var14;
                var4 = var9;
                var2 = var8;
                if(!(var2 < var7)) { _fun0004_ip = 830; continue _fun0004 }
 753:
                var14 = var9.replace;
                var15 = var3[var8];
                var7 = var1.HermesInternal;
                var7 = var7.concat;
                var7 = var7.bind(var11)(var15, var10);
                var15 = var14.bind(var9)(var13, var7);
                var14 = var8 + 1;
                var7 = var15.indexOf;
                var7 = var7.bind(var15)(var13);
                var4 = var15;
                var2 = var14;
                if(!(var12 !== var7)) { _fun0004_ip = 830; continue _fun0004 }
 809:
                var7 = var3.length;
                var9 = var15;
                var8 = var14;
                var4 = var9;
                var2 = var8;
                if(var2 < var7) { _fun0004_ip = 753; continue _fun0004 }
 830:
                var3 = var3[var2];
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var5 = var2.bind(var1)(var4, var3);
                _fun0004_ip = 917; continue _fun0004;
 857:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var2 = var8[var1];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.PqEzn5;
                var5 = var2.bind(var3)(var1);
 917:
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'tabularNumbers': true, 'variant': 'text-md/semibold'};
                var1['style'] = var6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/CountDown.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();