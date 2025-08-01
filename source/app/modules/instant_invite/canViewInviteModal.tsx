// app/modules/instant_invite/canViewInviteModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/canViewInviteModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canViewInviteModal(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var5 = arg2;
            var1 = arg3;
            var4 = arg4;
            var3 = null;
            var7 = var5;
            if(!(var3 != var1)) { _fun0001_ip = 24; continue _fun0001 }
 21:
            var7 = var1;
 24:
            var1 = var3 != var7;
            if(!var1) { _fun0001_ip = 56; continue _fun0001 }
 31:
            var6 = var8.can;
            var2 = _closure1_slot0;
            var2 = var2.CREATE_INSTANT_INVITE;
            var1 = var6.bind(var8)(var2, var7);
 56:
            if(var1) { _fun0001_ip = 79; continue _fun0001 }
 59:
            var2 = var3 != var5;
            if(!var2) { _fun0001_ip = 76; continue _fun0001 }
 66:
            var5 = var5.vanityURLCode;
            var2 = var3 != var5;
 76:
            var1 = var2;
 79:
            if(var1) { _fun0001_ip = 101; continue _fun0001 }
 82:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 97; continue _fun0001 }
 91:
            var2 = var4.invite_code;
 97:
            var1 = var3 != var2;
 101:
            return var1;
        }
    };
    var3['canViewInviteModal'] = var2;
    return var1;
})();