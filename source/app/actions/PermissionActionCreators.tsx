// app/actions/PermissionActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var2 = native3;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var4;
    var2 = global;
    var7 = var2.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var2 = true;
    var5['value'] = var2;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var3, var2, var5);
    var2 = {};
    var5 = function clearVADWarning() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PERMISSION_CLEAR_VAD_WARNING';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearVADWarning'] = var5;
    var5 = function clearSuppressWarning() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var5 = false;
 11:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'PERMISSION_CLEAR_SUPPRESS_WARNING';
            var2['type'] = var6;
            var2['forever'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['clearSuppressWarning'] = var5;
    var5 = function clearPTTAdminWarning() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PERMISSION_CLEAR_PTT_ADMIN_WARNING';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearPTTAdminWarning'] = var5;
    var5 = function requestElevatedProcess(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PERMISSION_REQUEST_ELEVATED_PROCESS';
        var2['type'] = var5;
        var5 = arg1;
        var2['pid'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['requestElevatedProcess'] = var5;
    var5 = function clearElevatedProcess() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PERMISSION_CLEAR_ELEVATED_PROCESS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearElevatedProcess'] = var5;
    var1 = function continueNonelevatedProcess(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PERMISSION_CONTINUE_NONELEVATED_PROCESS';
        var2['type'] = var5;
        var5 = arg1;
        var2['pid'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['continueNonelevatedProcess'] = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/PermissionActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();