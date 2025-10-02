// app/stores/ChangeVanityURLModalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
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
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FormStates;
    var _closure1_slot5 = var2;
    var8 = {};
    var _closure1_slot8 = var8;
    var2 = var2.CLOSED;
    var _closure1_slot9 = var2;
    var2 = null;
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ChangeVanityURLModalStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot11;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'isOpen';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot9;
            var1 = _closure1_slot5;
            var1 = var1.CLOSED;
            var1 = var2 !== var1;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getProps';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var4 = _closure1_slot9;
            var3 = _closure1_slot5;
            var3 = var3.SUBMITTING;
            var3 = var4 === var3;
            var1['submitting'] = var3;
            var3 = _closure1_slot10;
            var1['errorDetails'] = var3;
            var3 = _closure1_slot8;
            var1['errors'] = var3;
            var3 = _closure1_slot6;
            var1['guildId'] = var3;
            var2 = _closure1_slot7;
            var1['code'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ChangeVanityURLModalStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleOpen(arg1) {
        var1 = arg1;
        var3 = _closure1_slot5;
        var3 = var3.OPEN;
        _closure1_slot9 = var3;
        var3 = var1.guildId;
        var _closure1_slot6 = var3;
        var1 = var1.code;
        var _closure1_slot7 = var1;
        var1 = null;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CHANGE_VANITY_URL_MODAL_OPEN'] = var9;
    var9 = function handleSubmit() {
        var1 = _closure1_slot5;
        var1 = var1.SUBMITTING;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CHANGE_VANITY_URL_MODAL_SUBMIT'] = var9;
    var9 = function handleSubmitFailure(arg1) {
        var1 = _closure1_slot5;
        var1 = var1.OPEN;
        _closure1_slot9 = var1;
        var1 = arg1;
        var1 = var1.error;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE'] = var9;
    var4 = function handleClose() {
        var1 = _closure1_slot5;
        var1 = var1.CLOSED;
        _closure1_slot9 = var1;
        var1 = null;
        _closure1_slot6 = var1;
        _closure1_slot7 = var1;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CHANGE_VANITY_URL_MODAL_CLOSE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ChangeVanityURLModalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();