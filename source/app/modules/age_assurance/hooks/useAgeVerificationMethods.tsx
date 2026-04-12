// app/modules/age_assurance/hooks/useAgeVerificationMethods.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.VERIFICATION_METHOD_TITLE_MAP;
    var _closure1_slot7 = var7;
    var4 = var4.VerificationMethod;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/hooks/useAgeVerificationMethods.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAgeVerificationMethods(arg1) {
        var2 = arg1;
        var14 = var2.onClose;
        var7 = var2.onMethodClick;
        var _closure2_slot0 = var7;
        var13 = var2.classificationId;
        var8 = var2.onGoogleWalletSelect;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 5;
        var2 = var9[var2];
        var12 = undefined;
        var10 = var5.bind(var12)(var2);
        var6 = var10.useStateFromStoresObject;
        var2 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var1 = {};
            var2 = _closure1_slot6;
            var3 = var2.methods;
            var1['methods'] = var3;
            var2 = var2.loading;
            var1['loading'] = var2;
            return var1;
        };
        var2 = var6.bind(var10)(var4, var2);
        var11 = var2.methods;
        var _closure2_slot2 = var11;
        var2 = var2.loading;
        var4 = 6;
        var4 = var9[var4];
        var10 = var5.bind(var12)(var4);
        var6 = var10.useInitiateAgeVerification;
        var4 = {};
        var4['onComplete'] = var14;
        var14 = 7;
        var14 = var9[var14];
        var14 = var5.bind(var12)(var14);
        var14 = var14.AgeVerificationModalEntryPoint;
        var14 = var14.EXPRESSIVE_GET_STARTED;
        var4['entryPoint'] = var14;
        var14 = true;
        var4['shouldShowExpressiveModal'] = var14;
        var4['classificationId'] = var13;
        var4 = var6.bind(var10)(var4);
        var6 = var4.initiateAgeVerification;
        var _closure2_slot3 = var6;
        var4 = 8;
        var4 = var9[var4];
        var9 = var5.bind(var12)(var4);
        var5 = var9.useIsGoogleWalletEnabled;
        var4 = 'age_verification_methods';
        var10 = var5.bind(var9)(var4);
        var _closure2_slot4 = var10;
        var5 = _closure1_slot5;
        var9 = var5.useState;
        var4 = false;
        var9 = var9.bind(var5)(var4);
        var4 = _closure1_slot4;
        var3 = 2;
        var4 = var4.bind(var12)(var9, var3);
        var3 = 0;
        var9 = var4[var3];
        var _closure2_slot5 = var9;
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot6 = var3;
        var12 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var10;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot4;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.checkGoogleWalletAvailable;
                var3 = var1.bind(var2)();
                var2 = var3.then;
                var1 = function(arg1) {
                    var3 = arg1;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 10;
                    var2 = var8[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.increment;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = 11;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.MetricEvents;
                    var6 = var6.GOOGLE_WALLET_AVAILABILITY_CHECK;
                    var2['name'] = var6;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var7 = var6.concat;
                    var6 = 'available:';
                    var7 = var7.bind(var6)(var3);
                    var6 = new Array(1);
                    var6[0] = var7;
                    var2['tags'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var12.bind(var5)(var3, var4);
        var12 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var11;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = null;
                if(!(var1 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getAgeVerificationMethods;
                var1 = var1.bind(var2)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var12.bind(var5)(var3, var4);
        var4 = var5.useMemo;
        var3 = new Array(6);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var3[4] = var7;
        var3[5] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot2;
                var2 = null;
                var5 = var2 == var3;
                var7 = undefined;
                var3 = undefined;
                if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var8 = _closure2_slot2;
                var6 = var8.filter;
                var5 = function(arg1) {
                    var1 = _closure1_slot8;
                    var2 = var1.GOOGLE_WALLET;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var8 = var6.bind(var8)(var5);
                var6 = var8.map;
                var5 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = arg1;
                        var _closure4_slot0 = var5;
                        var1 = _closure1_slot7;
                        var2 = var1[var5];
                        var1 = null;
                        if(!(var1 != var2)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var12 = var2.title;
                        var8 = var2.description;
                        var2 = {};
                        var2['id'] = var5;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 13;
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
                        var5 = _closure1_slot3;
                        var4 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 3:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var2 = 7;
                                    var6 = var5[var2];
                                    var3 = undefined;
                                    var9 = var4.bind(var3)(var6);
                                    var8 = var9.trackAgeVerificationModalClicked;
                                    var6 = var5[var2];
                                    var6 = var4.bind(var3)(var6);
                                    var6 = var6.AgeVerificationModalVersion;
                                    var12 = var6.EXPRESSIVE_PRIMARY;
                                    var2 = var5[var2];
                                    var2 = var4.bind(var3)(var2);
                                    var2 = var2.AgeVerificationModalCta;
                                    var11 = var2.METHOD_SELECT;
                                    var10 = _closure4_slot0;
                                    var13 = arg1;
                                    var14 = var9;
                                    var4 = var14[var8](var13, var12, var11, var10, var9);
                                    var6 = _closure2_slot0;
                                    var5 = null;
                                    if(!(var5 != var6)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                                    var5 = _closure2_slot0;
                                    var5 = var5.bind(var3)();
case 11:
                                    var4 = _closure2_slot3;
                                    var2 = _closure4_slot0;
                                    var2 = var4.bind(var3)(var2);
                                    SaveGenerator(address=138);
case 13:
                                    return var2;
case 14:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                                    return var3;
case 15:
                                    return var2;
case 10:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        var _closure4_slot1 = var4;
                        var3 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot1;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var2['onClick'] = var3;
                        return var2;
case 8:
                        return var1;
                    }
                };
                var8 = var6.bind(var8)(var5);
                var6 = var8.filter;
                var5 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var3 = var6.bind(var8)(var5);
case 6:
                if(!(var2 == var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var3 = new Array(0);
case 17:
                var5 = _closure2_slot4;
                if(!var5) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var5 = _closure2_slot5;
                if(!var5) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                var4 = _closure2_slot1;
                if(!(var2 != var4)) { _fun0003_ip = 19; continue _fun0003 }
case 22:
                var6 = _closure1_slot7;
                var4 = _closure1_slot8;
                var4 = var4.GOOGLE_WALLET;
                var4 = var6[var4];
                if(!(var2 == var4)) { _fun0003_ip = 23; continue _fun0003 }
case 19:
                return var3;
case 23:
                var2 = {};
                var6 = _closure1_slot8;
                var6 = var6.GOOGLE_WALLET;
                var2['id'] = var6;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 13;
                var9 = var8[var5];
                var9 = var6.bind(var7)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4.title;
                var9 = var10.bind(var11)(var9);
                var2['title'] = var9;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4.description;
                var4 = var5.bind(var6)(var4);
                var2['description'] = var4;
                var1 = function onClick(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 10;
                        var3 = var8[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.increment;
                        var3 = {};
                        var4 = _closure1_slot0;
                        var7 = 11;
                        var7 = var8[var7];
                        var7 = var4.bind(var1)(var7);
                        var7 = var7.MetricEvents;
                        var7 = var7.GOOGLE_WALLET_METHOD_SELECTED;
                        var3['name'] = var7;
                        var3 = var5.bind(var6)(var3);
                        var3 = 7;
                        var5 = var8[var3];
                        var7 = var4.bind(var1)(var5);
                        var6 = var7.trackAgeVerificationModalClicked;
                        var5 = var8[var3];
                        var5 = var4.bind(var1)(var5);
                        var5 = var5.AgeVerificationModalVersion;
                        var11 = var5.EXPRESSIVE_PRIMARY;
                        var3 = var8[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.AgeVerificationModalCta;
                        var10 = var3.METHOD_SELECT;
                        var2 = _closure1_slot8;
                        var9 = var2.GOOGLE_WALLET;
                        var12 = arg1;
                        var13 = var7;
                        var2 = var13[var6](var12, var11, var10, var9, var8);
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var3 = _closure2_slot0;
                        var3 = var3.bind(var1)();
case 24:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var2['onClick'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var12 = 1;
                var14 = var1;
                var13 = var3;
                var2 = arraySpread(var14, var13, var12);
                return var1;
            }
        };
        var3 = var4.bind(var5)(var1, var3);
        var1 = {};
        var1['ageVerificationMethods'] = var3;
        var1['loading'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();