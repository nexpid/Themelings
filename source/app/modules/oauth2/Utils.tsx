// app/modules/oauth2/Utils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
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
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/Utils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getApplicationDetailsText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.getIsSocialLayerParentApplication;
            var4 = var2.bind(var4)(var5);
            var2 = var5.privacy_policy_url;
            var6 = null;
            if(!(var6 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.terms_of_service_url;
            if(!(var6 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = var5.privacy_policy_url;
            if(!(var6 == var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var5.terms_of_service_url;
            if(!(var6 == var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var2.3Ywek5;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var8 = var2.8LemYm;
case 11:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var7 = var2.intl;
            var6 = var7.formatToPlainString;
            var2 = {};
            var9 = var5.name;
            var2['application'] = var9;
            var2 = var6.bind(var7)(var8, var2);
            return var2;
case 7:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var2.q0T/Q0;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var8 = var2.nBLOp6;
case 14:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var7 = var2.intl;
            var6 = var7.format;
            var2 = {};
            var9 = var5.name;
            var2['application'] = var9;
            var9 = var5.terms_of_service_url;
            var2['termsOfServiceURL'] = var9;
            var2 = var6.bind(var7)(var8, var2);
            return var2;
case 5:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var2.TBvmMz;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var8 = var2.pYVSam;
case 17:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var7 = var2.intl;
            var6 = var7.format;
            var2 = {};
            var9 = var5.name;
            var2['application'] = var9;
            var9 = var5.privacy_policy_url;
            var2['privacyPolicyURL'] = var9;
            var2 = var6.bind(var7)(var8, var2);
            return var2;
case 4:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 1;
            var2 = var2[var6];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var2.rxlyKC;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var4 = var2.yVfotr;
case 20:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var2.bind(var3)(var1);
            var3 = var1.intl;
            var2 = var3.format;
            var1 = {};
            var6 = var5.name;
            var1['application'] = var6;
            var6 = var5.privacy_policy_url;
            var1['privacyPolicyURL'] = var6;
            var5 = var5.terms_of_service_url;
            var1['termsOfServiceURL'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getApplicationDetailsText'] = var2;
    return var1;
})();