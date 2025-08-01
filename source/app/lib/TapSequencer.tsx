// app/lib/TapSequencer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.useState;
    var _closure1_slot3 = var5;
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var5 = {};
    var4 = 'short';
    var5['SHORT'] = var4;
    var4 = 'long';
    var5['LONG'] = var4;
    var _closure1_slot5 = var5;
    var4 = {'long': 1250, 'short': 500};
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = function TapSequencer(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot1;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = arg1;
            var3['tapSequenceHandlers'] = var4;
            var4 = null;
            var3['_state'] = var4;
            var4 = function() {
                var3 = _closure3_slot0;
                var2 = var3.handlePress;
                var1 = _closure1_slot5;
                var1 = var1.SHORT;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['handleShortPress'] = var4;
            var2 = function() {
                var3 = _closure3_slot0;
                var2 = var3.handlePress;
                var1 = _closure1_slot5;
                var1 = var1.LONG;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['handleLongPress'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setTapSequenceHandlers';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['tapSequenceHandlers'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'getState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var4 = _closure1_slot6;
                var2 = arg1;
                var5 = var4[var2];
                var4 = var1._state;
                var2 = null;
                var2 = var2 === var4;
                if(var2) { _fun0001_ip = 69; continue _fun0001 }
 49:
                var4 = var1._state;
                var4 = var4.timestamp;
                var4 = var4 + var5;
                var2 = var4 < var3;
 69:
                if(!var2) { _fun0001_ip = 96; continue _fun0001 }
 72:
                var2 = {};
                var4 = var1.tapSequenceHandlers;
                var2['handlers'] = var4;
                var2['timestamp'] = var3;
                var1['_state'] = var2;
 96:
                var1 = var1._state;
                var1 = var1.handlers;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'progressState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var2 = null;
                var1 = var2 == var3;
                if(var1) { _fun0002_ip = 44; continue _fun0002 }
 12:
                var1 = {};
                var1['handlers'] = var3;
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var1['timestamp'] = var3;
                var2 = var1;
 44:
                var1 = this;
                var1['_state'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'handlePress';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var2 = var4.getState;
                var8 = var2.bind(var4)(var1);
                var3 = var4.progressState;
                var7 = var8[var1];
                var2 = null;
                var6 = var2 == var7;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0003_ip = 52; continue _fun0003 }
 42:
                var6 = var7.call;
                var5 = var6.bind(var7)(var8);
 52:
                var6 = var2 != var5;
                var2 = undefined;
                if(!var6) { _fun0003_ip = 64; continue _fun0003 }
 61:
                var2 = var5;
 64:
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot7 = var4;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/TapSequencer.tsx';
    var6 = var7.bind(var8)(var6);
    var3['TapSequencerPressType'] = var5;
    var3['TapSequencer'] = var4;
    var2 = function useTapSequencer(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = undefined;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot7;
                var1 = _closure2_slot0;
                var4 = 'function';
                var1 = typeof var1;
                if(!(var4 !== var1)) { _fun0004_ip = 31; continue _fun0004 }
 25:
                var1 = _closure2_slot0;
                _fun0004_ip = 41; continue _fun0004;
 31:
                var4 = _closure2_slot0;
                var2 = undefined;
                var1 = var4.bind(var2)();
 41:
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var5 = var1;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6 = var5.bind(var4)(var1);
        var5 = _closure1_slot0;
        var1 = 1;
        var5 = var5.bind(var4)(var6, var1);
        var1 = 0;
        var1 = var5[var1];
        var _closure2_slot1 = var1;
        var3 = _closure1_slot4;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = var3.setTapSequenceHandlers;
                var1 = _closure2_slot0;
                var5 = 'function';
                var1 = typeof var1;
                if(!(var5 !== var1)) { _fun0005_ip = 36; continue _fun0005 }
 30:
                var1 = _closure2_slot0;
                _fun0005_ip = 46; continue _fun0005;
 36:
                var5 = _closure2_slot0;
                var4 = undefined;
                var1 = var5.bind(var4)();
 46:
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['useTapSequencer'] = var2;
    return var1;
})();