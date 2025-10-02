// app/modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isActivityParticipantCurrentUserCurrentSession(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arguments[1];
            var6 = undefined;
            if(!(var4 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
case 2:
            var1 = var4.getId;
            var2 = var1.bind(var4)();
            var1 = var4.getSessionId;
            var4 = var1.bind(var4)();
            var1 = var3.userId;
            var1 = var1 === var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.sessionId;
            var2 = null;
            var2 = var2 == var5;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var3.sessionId;
            var2 = var6 === var5;
case 6:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var3.sessionId;
            var2 = var3 === var4;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['isActivityParticipantCurrentUserCurrentSession'] = var2;
    return var1;
})();