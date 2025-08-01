// app/modules/phone/PhoneOrEmailUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = {};
    var1 = 'phone';
    var4['PHONE'] = var1;
    var1 = 'email';
    var4['EMAIL'] = var1;
    var _closure1_slot0 = var4;
    var1 = /^[-() \d]+$/;
    var _closure1_slot1 = var1;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/phone/PhoneOrEmailUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PhoneOrEmailSelectorForceMode'] = var4;
    var4 = function shouldShowCountryCodeSelector(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var1 = _closure1_slot0;
            var1 = var1.PHONE;
            if(!(var2 !== var1)) { _fun0001_ip = 77; continue _fun0001 }
 23:
            var1 = _closure1_slot0;
            var1 = var1.EMAIL;
            var1 = var2 !== var1;
            if(!var1) { _fun0001_ip = 75; continue _fun0001 }
 40:
            var5 = var4.length;
            var2 = 3;
            var5 = var5 < var2;
            var2 = !var5;
            if(var5) { _fun0001_ip = 72; continue _fun0001 }
 58:
            var5 = _closure1_slot1;
            var3 = var5.test;
            var2 = var3.bind(var5)(var4);
 72:
            var1 = var2;
 75:
            _fun0001_ip = 95; continue _fun0001;
 77:
            var3 = var4.startsWith;
            var2 = '+';
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
 95:
            return var1;
        }
    };
    var3['shouldShowCountryCodeSelector'] = var4;
    var2 = function getPhoneOrEmail(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = /^\+\d/;
            var2 = var3.test;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            if(var1) { _fun0002_ip = 45; continue _fun0002 }
 37:
            var1 = var2.EMAIL;
            _fun0002_ip = 51; continue _fun0002;
 45:
            var1 = var2.PHONE;
 51:
            return var1;
        }
    };
    var3['getPhoneOrEmail'] = var2;
    return var1;
})();