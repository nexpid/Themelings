// app/modules/age_assurance/hooks/useAgeVerificationMethods.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VERIFICATION_METHOD_TITLE_MAP;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/hooks/useAgeVerificationMethods.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAgeVerificationMethods(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var _closure2_slot0 = var2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 4;
            var2 = var8[var2];
            var3 = undefined;
            var9 = var7.bind(var3)(var2);
            var6 = var9.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = {};
                var2 = _closure1_slot4;
                var3 = var2.methods;
                var1['methods'] = var3;
                var2 = var2.loading;
                var1['loading'] = var2;
                return var1;
            };
            var2 = var6.bind(var9)(var5, var2);
            var6 = var2.methods;
            var _closure2_slot1 = var6;
            var2 = var2.loading;
            var5 = 5;
            var5 = var8[var5];
            var8 = var7.bind(var3)(var5);
            var7 = var8.useInitiateAgeVerification;
            var5 = arg1;
            var5 = var7.bind(var8)(var5);
            var5 = var5.initiateAgeVerification;
            var _closure2_slot2 = var5;
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var5 = new Array(1);
            var5[0] = var6;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 48; continue _fun0002 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getAgeVerificationMethods;
                    var1 = var1.bind(var2)();
 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4, var5);
            var4 = null;
            var4 = var4 == var6;
            if(var4) { _fun0001_ip = 190; continue _fun0001 }
 156:
            var5 = var6.map;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var1 = _closure1_slot5;
                    var2 = var1[var5];
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 145; continue _fun0003 }
 26:
                    var12 = var2.title;
                    var8 = var2.description;
                    var2 = {};
                    var2['id'] = var5;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var5 = 7;
                    var10 = var9[var5];
                    var6 = undefined;
                    var10 = var7.bind(var6)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var10 = var10.bind(var11)(var12);
                    var2['title'] = var10;
                    var5 = var9[var5];
                    var5 = var7.bind(var6)(var5);
                    var7 = var5.intl;
                    var5 = var7.string;
                    var5 = var5.bind(var7)(var8);
                    var2['description'] = var5;
                    var5 = _closure1_slot2;
                    var4 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 180; continue _fun0004 }
 10:
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var7 = 8;
                                var6 = var2[var7];
                                var3 = undefined;
                                var11 = var5.bind(var3)(var6);
                                var10 = var11.trackAgeVerificationModalClicked;
                                var6 = var2[var7];
                                var6 = var5.bind(var3)(var6);
                                var6 = var6.AgeVerificationModalVersion;
                                var14 = var6.EXPRESSIVE_PRIMARY;
                                var2 = var2[var7];
                                var2 = var5.bind(var3)(var2);
                                var2 = var2.AgeVerificationModalCta;
                                var13 = var2.METHOD_SELECT;
                                var12 = _closure3_slot0;
                                var15 = arg1;
                                var16 = var11;
                                var5 = var16[var10](var15, var14, var13, var12, var11);
                                var8 = _closure2_slot0;
                                var6 = null;
                                if(!(var6 != var8)) { _fun0004_ip = 121; continue _fun0004 }
 113:
                                var6 = _closure2_slot0;
                                var6 = var6.bind(var3)();
 121:
                                var5 = _closure2_slot2;
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var4 = var4[var7];
                                var4 = var6.bind(var3)(var4);
                                var4 = var4.AgeVerificationModalEntryPoint;
                                var4 = var4.EXPRESSIVE_GET_STARTED;
                                var2 = _closure3_slot0;
                                var2 = var5.bind(var3)(var4, var2);
                                SaveGenerator(address=168);
 166:
                                return var2;
 168:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0004_ip = 177; continue _fun0004 }
 174:
                                return var3;
 177:
                                return var2;
 180:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    var _closure3_slot1 = var4;
                    var3 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2['onClick'] = var3;
                    return var2;
 145:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var3 = var4.bind(var5)(var1);
 190:
            var1 = {};
            var1['ageVerificationMethods'] = var3;
            var1['loading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();