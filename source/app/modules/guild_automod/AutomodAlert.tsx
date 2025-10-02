// app/modules/guild_automod/AutomodAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = {};
    var4 = 1;
    var2['SET_COMPLETED'] = var4;
    var1 = 'SET_COMPLETED';
    var2[var4] = var1;
    var4 = 2;
    var2['UNSET_COMPLETED'] = var4;
    var1 = 'UNSET_COMPLETED';
    var2[var4] = var1;
    var4 = 3;
    var2['DELETE_USER_MESSAGE'] = var4;
    var1 = 'DELETE_USER_MESSAGE';
    var2[var4] = var1;
    var4 = 4;
    var2['SUBMIT_FEEDBACK'] = var4;
    var1 = 'SUBMIT_FEEDBACK';
    var2[var4] = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/AutomodAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AutomodAlertActionType'] = var2;
    var2 = function parseAlertActionsExecution(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3;
            var5 = var1 == var3;
            var3 = null;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5: // try_start_0
            var5 = global;
            var6 = var5.JSON;
            var5 = var6.parse;
            var2 = var5.bind(var6)(var2);
case 6: // try_end0
            var3 = var2;
            _fun0001_ip = 4; continue _fun0001;
case 7: // catch_target0
            CatchBlockStart(arg_register=1);
            var3 = null;
case 4:
            var _closure2_slot0 = var3;
            var5 = var1 == var3;
            var2 = null;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var3.actions;
            var5 = var1 == var5;
            var2 = null;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var5 = global;
            var7 = var5.Object;
            var6 = var7.keys;
            var5 = var3.actions;
            var6 = var6.bind(var7)(var5);
            var5 = var6.forEach;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = _closure2_slot0;
                var1 = var1.actions;
                var1 = var1[var2];
                var1['actionType'] = var2;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var2 = var3;
case 8:
            return var2;
case 2:
            return var1;
        }
    };
    var3['parseAlertActionsExecution'] = var2;
    return var1;
})();