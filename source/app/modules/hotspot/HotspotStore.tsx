// app/modules/hotspot/HotspotStore.tsx
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
    var8 = var8.CONFERENCE_MODE_ENABLED;
    var _closure1_slot7 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function HotspotStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                if(!(var3 != var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = global;
                var6 = var2.Array;
                var5 = var6.isArray;
                var4 = var1.hiddenHotspots;
                var4 = var5.bind(var6)(var4);
                if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var5 = var2.Set;
                var7 = var1.hiddenHotspots;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var2 = new var8[var5](var7, var6);
                var4 = var2 instanceof Object ? var2 : var4;
                _closure1_slot8 = var4;
case 11:
                var2 = var1.hotspotOverrides;
                if(!(var3 != var2)) { _fun0003_ip = 9; continue _fun0003 }
case 13:
                var2 = var1.hotspotOverrides;
                _closure1_slot9 = var2;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasHotspot';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var1 = arguments[1];
                var7 = undefined;
                if(!(var1 === var7)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var1 = false;
case 14:
                var3 = !var1;
                if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var1 = _closure1_slot9;
                var3 = var1[var6];
case 16:
                var1 = _closure1_slot7;
                var1 = !var1;
                if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var2 = var8[var2];
                var2 = var5.bind(var7)(var2);
                var5 = var2.ProcessArgs;
                var2 = var5.isDisallowPopupsSet;
                var2 = var2.bind(var5)();
                var2 = !var2;
                if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var5 = _closure1_slot8;
                var4 = var5.has;
                var4 = var4.bind(var5)(var6);
                var3 = !var4;
case 22:
                var2 = var3;
case 20:
                var1 = var2;
case 18:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasHiddenHotspot';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getHotspotOverride';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot8;
            var1['hiddenHotspots'] = var3;
            var2 = _closure1_slot9;
            var1['hotspotOverrides'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'HotspotStore';
    var8['displayName'] = var2;
    var2 = 'hotspots';
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var9 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = null;
            if(!(var3 == var2)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var2 = new Array(0);
case 24:
            var1['hiddenHotspots'] = var2;
            var2 = {};
            var1['hotspotOverrides'] = var2;
            return var1;
        }
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var4 = var1.hiddenHotspots;
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var5 = var2;
        var1 = new var5[var1](var4, var3);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleHotspotHide(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.location;
            var4 = _closure1_slot8;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var2 = _closure1_slot8;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
case 26:
            var1 = false;
            return var1;
        }
    };
    var2['HOTSPOT_HIDE'] = var9;
    var9 = function handleSetHotspotOverride(arg1) {
        var1 = arg1;
        var3 = var1.location;
        var2 = var1.enabled;
        var1 = _closure1_slot9;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['HOTSPOT_OVERRIDE_SET'] = var9;
    var4 = function handleClearHotspotOverride(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.location;
            var3 = _closure1_slot9;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var1 = _closure1_slot9;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
case 28:
            var1 = false;
            return var1;
        }
    };
    var2['HOTSPOT_OVERRIDE_CLEAR'] = var4;
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
    var4 = 'modules/hotspot/HotspotStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();