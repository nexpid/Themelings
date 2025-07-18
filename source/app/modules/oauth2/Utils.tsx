// app/modules/oauth2/Utils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/Utils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getApplicationDetailsText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = var6.privacy_policy_url;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 28; continue _fun0001 }
 15:
            var1 = var6.terms_of_service_url;
            if(!(var2 == var1)) { _fun0001_ip = 298; continue _fun0001 }
 28:
            var1 = var6.privacy_policy_url;
            if(!(var2 == var1)) { _fun0001_ip = 212; continue _fun0001 }
 41:
            var1 = var6.terms_of_service_url;
            if(!(var2 == var1)) { _fun0001_ip = 126; continue _fun0001 }
 51:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 0;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.3Ywek5;
            var1 = {};
            var5 = var6.name;
            var1['application'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 210; continue _fun0001;
 126:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.q0T/Q0;
            var2 = {};
            var7 = var6.name;
            var2['application'] = var7;
            var7 = var6.terms_of_service_url;
            var2['termsOfServiceURL'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 210:
            _fun0001_ip = 296; continue _fun0001;
 212:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.TBvmMz;
            var2 = {};
            var7 = var6.name;
            var2['application'] = var7;
            var7 = var6.privacy_policy_url;
            var2['privacyPolicyURL'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 296:
            _fun0001_ip = 393; continue _fun0001;
 298:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.rxlyKC;
            var2 = {};
            var7 = var6.name;
            var2['application'] = var7;
            var7 = var6.privacy_policy_url;
            var2['privacyPolicyURL'] = var7;
            var6 = var6.terms_of_service_url;
            var2['termsOfServiceURL'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 393:
            return var1;
        }
    };
    var3['getApplicationDetailsText'] = var2;
    return var1;
})();