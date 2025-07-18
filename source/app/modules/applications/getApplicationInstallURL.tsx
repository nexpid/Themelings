// app/modules/applications/getApplicationInstallURL.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = var4.Routes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/getApplicationInstallURL.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getActivityLaunchURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.applicationId;
            var5 = var1.customId;
            var7 = var1.referrerId;
            var8 = var1.linkId;
            var1 = global;
            var4 = var1.URL;
            var3 = _closure1_slot0;
            var2 = var3.ACTIVITY_DETAILS;
            var3 = var2.bind(var3)(var6);
            var2 = var1.location;
            var10 = var2.protocol;
            var2 = var1.location;
            var9 = var2.host;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var2 = '';
            var1 = '//';
            var12 = var6.bind(var2)(var10, var1, var9);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var14 = var2;
            var13 = var3;
            var1 = new var14[var4](var13, var12, var11);
            var2 = var1 instanceof Object ? var1 : var2;
            var4 = var2.searchParams;
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 154; continue _fun0001 }
 139:
            var6 = var4.set;
            var3 = 'link_id';
            var3 = var6.bind(var4)(var3, var8);
 154:
            if(!(var1 != var7)) { _fun0001_ip = 173; continue _fun0001 }
 158:
            var6 = var4.set;
            var3 = 'referrer_id';
            var3 = var6.bind(var4)(var3, var7);
 173:
            if(!(var1 != var5)) { _fun0001_ip = 192; continue _fun0001 }
 177:
            var3 = var4.set;
            var1 = 'custom_id';
            var1 = var3.bind(var4)(var1, var5);
 192:
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getActivityLaunchURL'] = var4;
    var2 = function getApplicationInstallURL(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var8 = var2.id;
            var1 = var2.customInstallUrl;
            var5 = var2.installParams;
            var9 = var2.integrationTypesConfig;
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 267; continue _fun0002 }
 35:
            var2 = global;
            var4 = var2.URLSearchParams;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var16 = var6;
            var4 = new var16[var4](var15);
            var4 = var4 instanceof Object ? var4 : var6;
            var7 = var4.set;
            var6 = 'client_id';
            var6 = var7.bind(var4)(var6, var8);
            var6 = var3 != var9;
            if(!var6) { _fun0002_ip = 119; continue _fun0002 }
 85:
            var8 = var2.Object;
            var7 = var8.values;
            var9 = var7.bind(var8)(var9);
            var8 = var9.some;
            var7 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 20; continue _fun0003 }
 14:
                    var1 = var4.oauth2_install_params;
 20:
                    var1 = var3 != var1;
                    if(var1) { _fun0003_ip = 46; continue _fun0003 }
 27:
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 42; continue _fun0003 }
 36:
                    var2 = var4.oauth2InstallParams;
 42:
                    var1 = var3 != var2;
 46:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var7);
 119:
            if(!(var3 != var5)) { _fun0002_ip = 190; continue _fun0002 }
 123:
            if(var6) { _fun0002_ip = 190; continue _fun0002 }
 126:
            var8 = var5.permissions;
            var7 = var5.scopes;
            if(!(var3 != var8)) { _fun0002_ip = 157; continue _fun0002 }
 142:
            var6 = var4.set;
            var5 = 'permissions';
            var5 = var6.bind(var4)(var5, var8);
 157:
            if(!(var3 != var7)) { _fun0002_ip = 190; continue _fun0002 }
 161:
            var6 = var4.set;
            var5 = var7.join;
            var3 = ' ';
            var5 = var5.bind(var7)(var3);
            var3 = 'scope';
            var3 = var6.bind(var4)(var3, var5);
 190:
            var3 = var2.location;
            var15 = var3.protocol;
            var3 = var2.location;
            var13 = var3.host;
            var3 = _closure1_slot0;
            var12 = var3.OAUTH2_AUTHORIZE;
            var3 = var4.toString;
            var10 = var3.bind(var4)();
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var16 = '';
            var14 = '//';
            var11 = '?';
            var2 = var16[var5](var15, var14, var13, var12, var11, var10, var9);
            return var2;
 267:
            return var1;
        }
    };
    var3['getApplicationInstallURL'] = var2;
    return var1;
})();