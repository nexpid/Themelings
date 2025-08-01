// app/modules/rpc/native/server/NativeRPCHelpers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.TransportTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.RPCCloseCodes;
    var _closure1_slot5 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    var8 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 245; continue _fun0001 }
 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 3;
                    var3 = var3[var10];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.validateOriginAndUpdateSocket;
                    var3 = var3.bind(var4)(var9, var8);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0001_ip = 157; continue _fun0001 }
 62:
                    var11 = var9.transport;
                    var3 = _closure1_slot4;
                    var3 = var3.POST_MESSAGE;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var10];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.processSocketThrottlers;
                    var3 = var11 !== var3;
                    var3 = var4.bind(var5)(var6, var3);
                    SaveGenerator(address=115);
 113:
                    return var3;
 115:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 154; continue _fun0001 }
 121:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var10];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.validateSocketApplication;
                    var4 = var4.bind(var5)(var9, var6, var8);
                    return var4;
 154:
                    return var3;
 157:
                    var3 = global;
                    var4 = var3.Promise;
                    var3 = var4.reject;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var5 = var8[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.INVALID_CLIENTID;
                    var6['closeCode'] = var2;
                    var2 = var7.prototype;
                    var5 = Object.create(var2, {constructor: {value: var7}});
                    var13 = 'No Client ID Specified';
                    var15 = var5;
                    var14 = var6;
                    var2 = new var15[var7](var14, var13, var12);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 245:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/rpc/native/server/NativeRPCHelpers.tsx';
    var5 = var6.bind(var7)(var5);
    var3['validateSocketClient'] = var4;
    var4 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getDeprecatedVoiceSettingsWithShortcut;
        var1 = function() {
            var1 = new Array(0);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getDeprecatedVoiceSettings'] = var4;
    var2 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.getVoiceSettingsWithShortcut;
        var2 = arg1;
        var1 = function() {
            var1 = '';
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getVoiceSettings'] = var2;
    return var1;
})();