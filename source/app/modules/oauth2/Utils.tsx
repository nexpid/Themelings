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
 0:
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
            if(!(var6 != var2)) { _fun0001_ip = 63; continue _fun0001 }
 50:
            var2 = var5.terms_of_service_url;
            if(!(var6 == var2)) { _fun0001_ip = 384; continue _fun0001 }
 63:
            var2 = var5.privacy_policy_url;
            if(!(var6 == var2)) { _fun0001_ip = 281; continue _fun0001 }
 76:
            var2 = var5.terms_of_service_url;
            if(!(var6 == var2)) { _fun0001_ip = 178; continue _fun0001 }
 86:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 124; continue _fun0001 }
 114:
            var8 = var2.3Ywek5;
            _fun0001_ip = 132; continue _fun0001;
 124:
            var8 = var2.8LemYm;
 132:
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
 178:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 216; continue _fun0001 }
 206:
            var8 = var2.q0T/Q0;
            _fun0001_ip = 224; continue _fun0001;
 216:
            var8 = var2.nBLOp6;
 224:
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
 281:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 1;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 319; continue _fun0001 }
 309:
            var8 = var2.TBvmMz;
            _fun0001_ip = 327; continue _fun0001;
 319:
            var8 = var2.pYVSam;
 327:
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
 384:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 1;
            var2 = var2[var6];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 422; continue _fun0001 }
 412:
            var4 = var2.rxlyKC;
            _fun0001_ip = 430; continue _fun0001;
 422:
            var4 = var2.yVfotr;
 430:
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