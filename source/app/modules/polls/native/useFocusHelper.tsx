// app/modules/polls/native/useFocusHelper.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var4);
    var _closure1_slot2 = var6;
    var4 = 1;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var5[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = function FocusHelperState() {
        var3 = this;
        var4 = _closure1_slot3;
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        var2 = {};
        var3['refsByKey'] = var2;
        var2 = new Array(0);
        var3['keyOrder'] = var2;
        return var1;
    };
    var _closure1_slot7 = var4;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = function FocusHelperImpl() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var4 = _closure1_slot5;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['validState'] = var4;
            var4 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.validState;
                    var5 = var1.refsByKey;
                    var4 = var1.keyOrder;
                    var13 = var5;
                    var1 = undefined;
                    var9 = true;
                    var3 = null;
                    var8 = undefined;
                    var7 = undefined;
                    for(var10 in var13)
 46:
                    {
                        var7 = undefined;
 57:
                        var15 = var10;
                        var16 = var5[var15];
                        var17 = var3 == var16;
                        var6 = undefined;
                        if(var17) { _fun0001_ip = 103; continue _fun0001 }
 73:
                        var17 = var16.current;
                        var16 = var3 == var17;
                        var8 = var17;
                        var6 = undefined;
                        if(var16) { _fun0001_ip = 103; continue _fun0001 }
 90:
                        var16 = var17.isFocused;
                        var6 = var16.bind(var17)();
                        var8 = var17;
 103:
                        var7 = var15;
                        if(var9 !== var6) { _fun0001_ip = 46; continue _fun0001 }
                    }
 110:
                    if(!(var3 != var7)) { _fun0001_ip = 247; continue _fun0001 }
 117:
                    var6 = var4.indexOf;
                    var7 = var6.bind(var4)(var7);
                    var6 = -1;
                    if(!(var6 !== var7)) { _fun0001_ip = 219; continue _fun0001 }
 138:
                    var6 = var4.length;
                    var4 = 1;
                    var6 = var6 - var4;
                    if(!(!(var7 >= var6))) { _fun0001_ip = 219; continue _fun0001 }
 154:
                    var6 = _closure3_slot0;
                    var6 = var6.validState;
                    var6 = var6.keyOrder;
                    var4 = var7 + var4;
                    var4 = var6[var4];
                    var6 = var5[var4];
                    var4 = var3 == var6;
                    var5 = var6;
                    if(var4) { _fun0001_ip = 204; continue _fun0001 }
 192:
                    var6 = var6.current;
                    var4 = var3 == var6;
                    var5 = var6;
 204:
                    if(var4) { _fun0001_ip = 247; continue _fun0001 }
 207:
                    var4 = var5.focus;
                    var4 = var4.bind(var5)();
                    _fun0001_ip = 247; continue _fun0001;
 219:
                    var4 = _closure3_slot0;
                    var4 = var4.onAddAnswer;
                    if(!(var3 != var4)) { _fun0001_ip = 247; continue _fun0001 }
 233:
                    var3 = var4.call;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
 247:
                    return var1;
                }
            };
            var3['focusNext'] = var4;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.validState;
                    var2 = var1.refsByKey;
                    var1 = arg1;
                    var3 = var2[var1];
                    var4 = null;
                    var1 = var4 == var3;
                    var2 = var3;
                    if(var1) { _fun0002_ip = 50; continue _fun0002 }
 38:
                    var3 = var3.current;
                    var1 = var4 == var3;
                    var2 = var3;
 50:
                    if(var1) { _fun0002_ip = 63; continue _fun0002 }
 53:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['focus'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'restartState';
        var1['key'] = var2;
        var2 = function value() {
            var1 = _closure1_slot5;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = this;
            var1['pendingState'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'commitState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var1 = var2.pendingState;
                var3 = null;
                if(!(var3 != var1)) { _fun0003_ip = 21; continue _fun0003 }
 15:
                var2['validState'] = var1;
 21:
                var1 = undefined;
                var2['pendingState'] = var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'refWithKey';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var3 = var1.pendingState;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var8 = undefined;
                var7 = var5.bind(var8)(var1);
                var5 = null;
                var6 = var5 != var3;
                var1 = 'Called refWithKey without a valid state';
                var1 = var7.bind(var8)(var6, var1);
                var6 = var3.keyOrder;
                var1 = var6.push;
                var1 = var1.bind(var6)(var4);
                var1 = var3.refsByKey;
                var1 = var1[var4];
                if(!(var5 == var1)) { _fun0004_ip = 111; continue _fun0004 }
 85:
                var5 = _closure1_slot4;
                var2 = var5.createRef;
                var2 = var2.bind(var5)();
                var3 = var3.refsByKey;
                var3[var4] = var2;
                return var2;
 111:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot6 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/useFocusHelper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFocusHelper() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0005_ip = 13; continue _fun0005 }
 11:
            var1 = {};
 13:
            var1 = var1.onAddAnswer;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = function() {
                var1 = _closure1_slot6;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var3 = var2;
                var1 = new var3[var1](var2);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            _closure2_slot1 = var1;
            var4 = var1.restartState;
            var4 = var4.bind(var1)();
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var3['onAddAnswer'] = var2;
                var2 = _closure2_slot1;
                var1 = var2.commitState;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();