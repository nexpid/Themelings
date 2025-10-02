// app/modules/guild_communication_disabled/CommunicationDisabledUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function isCommunicationDisabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var3 = var2.Date;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var7 = var4;
            var6 = var5;
            var3 = new var7[var3](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var1 = var3 > var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_communication_disabled/CommunicationDisabledUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isCommunicationDisabled'] = var4;
    var2 = function isMemberCommunicationDisabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = null;
            var5 = var1 == var4;
            var2 = undefined;
            var1 = undefined;
            if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var4.communicationDisabledUntil;
case 4:
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var3['isMemberCommunicationDisabled'] = var2;
    return var1;
})();