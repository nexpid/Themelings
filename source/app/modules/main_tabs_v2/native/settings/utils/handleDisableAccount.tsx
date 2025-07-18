// app/modules/main_tabs_v2/native/settings/utils/handleDisableAccount.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/utils/handleDisableAccount.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleDisableAccount() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 13; continue _fun0001 }
 11:
            var3 = false;
 13:
            var4 = function hasOwnedGuilds() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot4;
                    var1 = var4.getCurrentUser;
                    var4 = var1.bind(var4)();
                    var _closure3_slot0 = var4;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0002_ip = 63; continue _fun0002 }
 31:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuildsArray;
                    var4 = var3.bind(var4)();
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.ownerId;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 63:
                    return var1;
                }
            };
            var4 = var4.bind(var1)();
            if(var4) { _fun0001_ip = 87; continue _fun0001 }
 27:
            if(var3) { _fun0001_ip = 43; continue _fun0001 }
 30:
            var3 = function getDisableAlertProps() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 2;
                var1 = var8[var3];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var8[var3];
                var1 = var7.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.CIGa+/;
                var2 = var2.bind(var4)(var1);
                var1 = var2.toUpperCase;
                var2 = var1.bind(var2)();
                var1 = {};
                var4 = function onSubmit(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.disableAccount;
                    var2 = arg1;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['onSubmit'] = var4;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.jf5GGR;
                var4 = var4.bind(var5)(var3);
                var3 = var4.toUpperCase;
                var3 = var3.bind(var4)();
                var1['title'] = var3;
                var1['placeholder'] = var2;
                var2 = true;
                var1['closeOnSuccess'] = var2;
                return var1;
            };
            var3 = var3.bind(var1)();
            _fun0001_ip = 54; continue _fun0001;
 43:
            var2 = function getDeleteAlertProps() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 2;
                var1 = var8[var3];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var8[var3];
                var1 = var7.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.CIGa+/;
                var2 = var2.bind(var4)(var1);
                var1 = var2.toUpperCase;
                var2 = var1.bind(var2)();
                var1 = {};
                var4 = function onSubmit(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.disableAccount;
                    var2 = arg1;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['onSubmit'] = var4;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.8lQ2ra;
                var4 = var4.bind(var5)(var3);
                var3 = var4.toUpperCase;
                var3 = var3.bind(var4)();
                var1['title'] = var3;
                var1['placeholder'] = var2;
                var2 = true;
                var1['closeOnSuccess'] = var2;
                return var1;
            };
            var3 = var2.bind(var1)();
 54:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.bind(var1)(var3);
            _fun0001_ip = 230; continue _fun0001;
 87:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var5 = var4[var3];
            var5 = var8.bind(var1)(var5);
            var7 = var5.intl;
            var6 = var7.string;
            var5 = var4[var3];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.I5UrbW;
            var6 = var6.bind(var7)(var5);
            var5 = var4[var3];
            var5 = var8.bind(var1)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var4[var3];
            var3 = var8.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.UyVVam;
            var5 = var5.bind(var7)(var3);
            var3 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var2['title'] = var6;
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
 230:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();