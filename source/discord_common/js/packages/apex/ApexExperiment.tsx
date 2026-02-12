// discord_common/js/packages/apex/ApexExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/apex/ApexExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createApexExperimentCommon(arg1, arg2, arg3, arg4) {
        var3 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var4;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var1 = arg4;
        var _closure2_slot2 = var1;
        var1 = var3.name;
        var _closure2_slot3 = var1;
        var1 = var3.kind;
        var _closure2_slot4 = var1;
        var1 = var3.variations;
        var _closure2_slot5 = var1;
        var1 = var3.defaultConfig;
        var _closure2_slot6 = var1;
        var1 = var4.registerExperiment;
        var1 = var1.bind(var4)(var3);
        var1 = {};
        var1['definition'] = var3;
        var3 = function useConfig(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var11 = arg1;
                var _closure3_slot0 = var11;
                var4 = _closure2_slot2;
                var3 = _closure2_slot4;
                var8 = undefined;
                var15 = var4.bind(var8)(var3, var11);
                var _closure3_slot1 = var15;
                var3 = 'user';
                var3 = var4.bind(var8)(var3, var11);
                var _closure3_slot2 = var3;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 2;
                var4 = var4[var5];
                var10 = var7.bind(var8)(var4);
                var9 = var10.useStateFromStoresArray;
                var4 = _closure2_slot0;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = new Array(2);
                var4[0] = var15;
                var4[1] = var3;
                var3 = function() {
                    var6 = _closure2_slot0;
                    var5 = var6.getEvaluationAndAssignment;
                    var10 = _closure2_slot4;
                    var9 = _closure3_slot1;
                    var8 = _closure2_slot3;
                    var7 = _closure3_slot2;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var4 = var9.bind(var10)(var7, var3, var4);
                var3 = _closure1_slot2;
                var4 = var3.bind(var8)(var4, var5);
                var3 = 0;
                var14 = var4[var3];
                var _closure3_slot3 = var14;
                var3 = 1;
                var7 = var4[var3];
                var3 = null;
                var5 = var3 == var7;
                var4 = undefined;
                if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var7.variantId;
case 2:
                var9 = var3 == var7;
                var5 = undefined;
                if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var7.trackedVariantId;
case 4:
                var13 = var4;
                if(!(var3 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var13 = var5;
case 6:
                var _closure3_slot4 = var13;
                var5 = var3 == var7;
                var12 = undefined;
                if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var12 = var7.revision;
case 8:
                var _closure3_slot5 = var12;
                var5 = var3 == var7;
                var10 = undefined;
                if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var10 = var7.isOverride;
case 10:
                var _closure3_slot6 = var10;
                var5 = var3 == var7;
                var9 = undefined;
                if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var9 = var7.exposureTrackingEnabled;
case 12:
                var _closure3_slot7 = var9;
                var16 = var3 == var7;
                var5 = undefined;
                if(var16) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var5 = var7.useAsEligibility;
case 14:
                var _closure3_slot8 = var5;
                var7 = _closure1_slot3;
                var6 = new Array(8);
                var6[0] = var15;
                var6[1] = var14;
                var6[2] = var13;
                var6[3] = var12;
                var11 = var11.location;
                var6[4] = var11;
                var6[5] = var10;
                var6[6] = var9;
                var6[7] = var5;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure3_slot3;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var3 = _closure3_slot4;
                        var2 = var4 != var3;
case 16:
                        if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var3 = _closure3_slot5;
                        var2 = var4 != var3;
case 18:
                        if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var4 = _closure3_slot6;
                        var3 = false;
                        var2 = var3 === var4;
case 20:
                        if(!var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                        var4 = _closure3_slot7;
                        var3 = true;
                        var2 = var3 === var4;
case 22:
                        if(!var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var4 = _closure3_slot8;
                        var3 = true;
                        var2 = var3 !== var4;
case 24:
                        if(!var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                        var9 = _closure2_slot0;
                        var8 = var9.trackExperimentExposure;
                        var16 = _closure3_slot3;
                        var15 = _closure2_slot3;
                        var3 = _closure3_slot0;
                        var14 = var3.location;
                        var13 = _closure2_slot4;
                        var12 = _closure3_slot5;
                        var11 = _closure3_slot4;
                        var10 = _closure3_slot1;
                        var17 = var9;
                        var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
case 26:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var7.bind(var8)(var2, var6);
                if(!(var3 != var4)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                var2 = true;
                if(!(var2 !== var5)) { _fun0001_ip = 28; continue _fun0001 }
case 30:
                var2 = _closure2_slot5;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                var2 = _closure2_slot6;
case 31:
                return var2;
case 28:
                var1 = _closure2_slot6;
                return var1;
            }
        };
        var1['useConfig'] = var3;
        var2 = function getConfig(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot1;
                var4 = _closure2_slot4;
                var5 = undefined;
                var13 = var3.bind(var5)(var4, var2);
                var3 = 'guild';
                var8 = undefined;
                if(!(var3 === var4)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var6 = _closure2_slot1;
                var4 = {};
                var3 = var2.location;
                var4['location'] = var3;
                var3 = 'user';
                var8 = var6.bind(var5)(var3, var4);
case 33:
                var7 = _closure2_slot0;
                var6 = var7.getEvaluationAndAssignment;
                var20 = _closure2_slot4;
                var18 = _closure2_slot3;
                var21 = var7;
                var19 = var13;
                var17 = var8;
                var6 = var21[var6](var20, var19, var18, var17, var16);
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4.bind(var5)(var6, var3);
                var3 = 0;
                var12 = var4[var3];
                var3 = 1;
                var6 = var4[var3];
                var3 = null;
                var7 = var3 == var6;
                var4 = undefined;
                if(var7) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var4 = var6.variantId;
case 35:
                var8 = var3 == var6;
                var7 = undefined;
                if(var8) { _fun0003_ip = 3; continue _fun0003 }
case 37:
                var7 = var6.trackedVariantId;
case 3:
                var11 = var4;
                if(!(var3 != var7)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                var11 = var7;
case 38:
                var7 = var3 == var6;
                var10 = undefined;
                if(var7) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                var10 = var6.revision;
case 40:
                var7 = var3 == var6;
                var9 = undefined;
                if(var7) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                var9 = var6.isOverride;
case 42:
                var7 = var3 == var6;
                var8 = undefined;
                if(var7) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                var8 = var6.exposureTrackingEnabled;
case 44:
                var7 = var3 == var6;
                var5 = undefined;
                if(var7) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var5 = var6.useAsEligibility;
case 46:
                var6 = var3 != var12;
                if(!var6) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var6 = var3 != var11;
case 48:
                if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 50:
                var6 = var3 != var10;
case 12:
                if(!var6) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                var7 = false;
                var6 = var7 === var9;
case 51:
                if(!var6) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                var7 = true;
                var6 = var7 === var8;
case 53:
                if(!var6) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                var7 = true;
                var6 = var7 !== var5;
case 55:
                if(!var6) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var9 = _closure2_slot0;
                var8 = var9.trackExperimentExposure;
                var19 = _closure2_slot3;
                var18 = var2.location;
                var17 = _closure2_slot4;
                var21 = var9;
                var20 = var12;
                var16 = var10;
                var15 = var11;
                var14 = var13;
                var2 = var21[var8](var20, var19, var18, var17, var16, var15, var14, var13);
case 57:
                if(!(var3 != var4)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                var2 = true;
                if(!(var2 !== var5)) { _fun0003_ip = 59; continue _fun0003 }
case 61:
                var2 = _closure2_slot5;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var2 = _closure2_slot6;
case 62:
                return var2;
case 59:
                var1 = _closure2_slot6;
                return var1;
            }
        };
        var1['getConfig'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();