// app/modules/activities/isActivityParticipantValidGuildMember.tsx
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
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/activities/isActivityParticipantValidGuildMember.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function isActivityParticipantValidGuildMember(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.member;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0001_ip = 34; continue _fun0001 }
 18:
            var3 = var2.member;
            var3 = var3.joined_at;
            var1 = var4 != var3;
 34:
            if(!var1) { _fun0001_ip = 61; continue _fun0001 }
 37:
            var2 = var2.member;
            var2 = var2.user;
            var3 = var2.username;
            var2 = '';
            var1 = var2 !== var3;
 61:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();