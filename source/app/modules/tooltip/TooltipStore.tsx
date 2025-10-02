// app/modules/tooltip/TooltipStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.StorageKeys;
    var _closure1_slot7 = var8;
    var8 = var2.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot8 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function TooltipStore(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot8;
                        var1 = var3.has;
                        var1 = var1.bind(var3)(var4);
                        if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = _closure1_slot9;
                        var2 = var3.has;
                        var2 = var2.bind(var3)(var4);
                        var1 = !var2;
case 9:
                        return var1;
                    }
                };
                var1['canShowTooltip'] = var3;
                var2 = function(arg1) {
                    var3 = _closure1_slot8;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['hasShownTooltip'] = var2;
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
        var6 = 'initialize';
        var5['key'] = var6;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var6 = var2.Storage;
                var5 = var6.get;
                var2 = _closure1_slot7;
                var4 = var2.ACKNOWLEDGED_TOOLTIPS_KEY;
                var2 = new Array(0);
                var6 = var5.bind(var6)(var4, var2);
                var2 = null;
                if(!(var2 == var6)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var6 = new Array(0);
case 11:
                var2 = global;
                var4 = var2.Set;
                var2 = new Array(0);
                var7 = 0;
                var9 = var2;
                var8 = var6;
                var5 = arraySpread(var9, var8, var7);
                var9 = var4;
                var8 = var2;
                var2 = apply(var9, var8);
                _closure1_slot9 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'TooltipStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function TOOLTIP_ACKNOWLEDGE(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot9;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var3 = var4.add;
            var1 = arg1;
            var1 = var1.tooltip;
            var1 = var3.bind(var4)(var1);
case 13:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.Storage;
            var4 = var5.set;
            var3 = _closure1_slot7;
            var3 = var3.ACKNOWLEDGED_TOOLTIPS_KEY;
            var6 = global;
            var6 = var6.Array;
            var2 = _closure1_slot9;
            var2 = var6.bind(var1)(var2);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['TOOLTIP_ACKNOWLEDGE'] = var9;
    var4 = function TOOLTIP_SHOW_ATTEMPT(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.tooltip;
            var2 = var1.ignoreMaxShownLimit;
            var5 = _closure1_slot8;
            var4 = var5.has;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0006_ip = 15; continue _fun0006 }
case 16:
            var5 = _closure1_slot9;
            var4 = var5.has;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0006_ip = 15; continue _fun0006 }
case 17:
            if(var2) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var4 = _closure1_slot8;
            var5 = var4.size;
            var4 = 1;
            var2 = var5 < var4;
case 18:
            if(!var2) { _fun0006_ip = 20; continue _fun0006 }
case 5:
            var2 = _closure1_slot8;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 20:
            var1 = undefined;
            return var1;
case 15:
            var1 = false;
            return var1;
        }
    };
    var2['TOOLTIP_SHOW_ATTEMPT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/tooltip/TooltipStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();