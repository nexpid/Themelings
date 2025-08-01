// app/modules/dismissible_content/DCFEventStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var10 = 0;
    var2 = var6[var10];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var9 = 1;
    var2 = var6[var9];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var8 = 2;
    var2 = var6[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var2['DC_SHOWN'] = var10;
    var4 = 'DC_SHOWN';
    var2[var10] = var4;
    var2['DC_SHOW_REQUEST'] = var9;
    var4 = 'DC_SHOW_REQUEST';
    var2[var9] = var4;
    var2['DC_DISMISSED'] = var8;
    var4 = 'DC_DISMISSED';
    var2[var8] = var4;
    var _closure1_slot5 = var2;
    var4 = new Array(0);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function DCFEventStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
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
                var6 = _closure1_slot3;
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
        var6 = _closure1_slot4;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot1;
        var5 = {};
        var6 = 'getDCFEvents';
        var5['key'] = var6;
        var1 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'DCFEventStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var13 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function LOGOUT() {
        var1 = new Array(0);
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var9;
    var9 = function DCF_EVENT_LOGGED(arg1) {
        var1 = arg1;
        var2 = var1.eventType;
        var1 = var1.dismissibleContent;
        var1 = undefined;
        return var1;
    };
    var4['DCF_EVENT_LOGGED'] = var9;
    var9 = function DCF_HANDLE_DC_DISMISSED(arg1) {
        var1 = arg1;
        var1 = var1.dismissibleContent;
        var1 = _closure1_slot5;
        var1 = var1.DC_DISMISSED;
        var1 = undefined;
        return var1;
    };
    var4['DCF_HANDLE_DC_DISMISSED'] = var9;
    var5 = function DCF_HANDLE_DC_SHOWN(arg1) {
        var1 = arg1;
        var1 = var1.dismissibleContent;
        var1 = _closure1_slot5;
        var1 = var1.DC_SHOWN;
        var1 = undefined;
        return var1;
    };
    var4['DCF_HANDLE_DC_SHOWN'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var8](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/dismissible_content/DCFEventStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DCFEventTypes'] = var2;
    return var1;
})();