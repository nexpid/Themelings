// app/modules/age_assurance/AgeVerificationMethodsV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _fetchAgeVerificationMethodsV() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot3;
                    var5 = var5.AGE_VERIFICATION_METHODS_V2;
                    var2['url'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=73);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    var5 = var3.methods;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.method;
                            var1['method'] = var3;
                            var3 = var2.vendor;
                            var1['vendor'] = var3;
                            var3 = var2.title;
                            var1['title'] = var3;
                            var3 = var2.description;
                            var1['description'] = var3;
                            var3 = var2.provided_by;
                            var2 = null;
                            var4 = var2 != var3;
                            if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var2 = var3;
case 8:
                            var1['providedBy'] = var2;
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var8[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var5 = var7.bind(var1)(var4);
    var4 = var5.VerificationMethod;
    var6 = var5.VerificationVendorName;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot3 = var5;
    var5 = {};
    var9 = 3;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.AgeAssuranceMethod;
    var11 = var10.FACIAL_AGE_ESTIMATION;
    var10 = var4.FACIAL_AGE_ESTIMATION;
    var5[10] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.AgeAssuranceMethod;
    var10 = var10.ID_SELFIE_MATCH;
    var4 = var4.ID_VERIFICATION;
    var5[9] = var4;
    var4 = {};
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.AgeAssuranceVendor;
    var11 = var10.K_ID;
    var10 = var6.K_ID;
    var4[10] = var10;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.AgeAssuranceVendor;
    var11 = var10.INCODE;
    var10 = var6.INCODE;
    var4[10] = var10;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.AgeAssuranceVendor;
    var9 = var9.GOOGLE_WALLET;
    var6 = var6.GOOGLE_WALLET;
    var4[8] = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/age_assurance/AgeVerificationMethodsV2.tsx';
    var6 = var7.bind(var8)(var6);
    var3['V2_METHOD_TO_VERIFICATION_METHOD'] = var5;
    var3['V2_VENDOR_TO_VERIFICATION_VENDOR'] = var4;
    var2 = function fetchAgeVerificationMethodsV2() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAgeVerificationMethodsV2'] = var2;
    return var1;
})();