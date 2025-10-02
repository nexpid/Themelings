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
case 0:
            var2 = arg1;
            var4 = arg2;
            var1 = _closure1_slot0;
            var1 = var1.PHONE;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot0;
            var1 = var1.EMAIL;
            var1 = var2 !== var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var4.length;
            var2 = 3;
            var5 = var5 < var2;
            var2 = !var5;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot1;
            var3 = var5.test;
            var2 = var3.bind(var5)(var4);
case 6:
            var1 = var2;
case 4:
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var3 = var4.startsWith;
            var2 = '+';
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 8:
            return var1;
        }
    };
    var3['shouldShowCountryCodeSelector'] = var4;
    var2 = function getPhoneOrEmail(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = /^\+\d/;
            var2 = var3.test;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var2.EMAIL;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var1 = var2.PHONE;
case 11:
            return var1;
        }
    };
    var3['getPhoneOrEmail'] = var2;
    return var1;
})();