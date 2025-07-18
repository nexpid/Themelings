// app/modules/user_profile/UserProfileRoleUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/user_profile/UserProfileRoleUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function sortRolesByVerification(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.tags;
            var1 = null;
            var5 = var1 == var4;
            var2 = undefined;
            var3 = undefined;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
 22:
            var3 = var4.guild_connections;
 28:
            var5 = var2 !== var3;
            var3 = arg2;
            var3 = var3.tags;
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 56; continue _fun0001 }
 50:
            var1 = var3.guild_connections;
 56:
            var3 = var2 !== var1;
            if(!var5) { _fun0001_ip = 69; continue _fun0001 }
 63:
            var1 = 1;
            if(!var3) { _fun0001_ip = 88; continue _fun0001 }
 69:
            var2 = 0;
            if(var5) { _fun0001_ip = 85; continue _fun0001 }
 74:
            var2 = 0;
            if(!var3) { _fun0001_ip = 85; continue _fun0001 }
 79:
            var2 = -1;
 85:
            var1 = var2;
 88:
            return var1;
        }
    };
    var3['sortRolesByVerification'] = var2;
    return var1;
})();