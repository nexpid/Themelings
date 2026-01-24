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
                var10 = arg1;
                var _closure3_slot0 = var10;
                var4 = _closure2_slot2;
                var3 = _closure2_slot4;
                var7 = undefined;
                var14 = var4.bind(var7)(var3, var10);
                var _closure3_slot1 = var14;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var6 = 2;
                var3 = var3[var6];
                var11 = var4.bind(var7)(var3);
                var9 = var11.useStateFromStoresArray;
                var3 = _closure2_slot0;
                var8 = new Array(1);
                var8[0] = var3;
                var4 = new Array(1);
                var4[0] = var14;
                var3 = function() {
                    var5 = _closure2_slot0;
                    var4 = var5.getEvaluationAndAssignment;
                    var3 = _closure2_slot4;
                    var2 = _closure3_slot1;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var4 = var9.bind(var11)(var8, var3, var4);
                var3 = _closure1_slot2;
                var4 = var3.bind(var7)(var4, var6);
                var3 = 0;
                var13 = var4[var3];
                var _closure3_slot2 = var13;
                var3 = 1;
                var6 = var4[var3];
                var3 = null;
                var8 = var3 == var6;
                var4 = undefined;
                if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var6.variantId;
case 2:
                var9 = var3 == var6;
                var8 = undefined;
                if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var8 = var6.trackedVariantId;
case 4:
                var12 = var4;
                if(!(var3 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var12 = var8;
case 6:
                var _closure3_slot3 = var12;
                var8 = var3 == var6;
                var11 = undefined;
                if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var11 = var6.revision;
case 8:
                var _closure3_slot4 = var11;
                var8 = var3 == var6;
                var9 = undefined;
                if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var9 = var6.isOverride;
case 10:
                var _closure3_slot5 = var9;
                var15 = var3 == var6;
                var8 = undefined;
                if(var15) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var8 = var6.exposureTrackingEnabled;
case 12:
                var _closure3_slot6 = var8;
                var6 = _closure1_slot3;
                var5 = new Array(7);
                var5[0] = var14;
                var5[1] = var13;
                var5[2] = var12;
                var5[3] = var11;
                var10 = var10.location;
                var5[4] = var10;
                var5[5] = var9;
                var5[6] = var8;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure3_slot2;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var3 = _closure3_slot3;
                        var2 = var4 != var3;
case 14:
                        if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var3 = _closure3_slot4;
                        var2 = var4 != var3;
case 16:
                        if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var4 = _closure3_slot5;
                        var3 = false;
                        var2 = var3 === var4;
case 18:
                        if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var4 = _closure3_slot6;
                        var3 = true;
                        var2 = var3 === var4;
case 20:
                        if(!var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                        var9 = _closure2_slot0;
                        var8 = var9.trackExperimentExposure;
                        var16 = _closure3_slot2;
                        var15 = _closure2_slot3;
                        var3 = _closure3_slot0;
                        var14 = var3.location;
                        var13 = _closure2_slot4;
                        var12 = _closure3_slot4;
                        var11 = _closure3_slot3;
                        var10 = _closure3_slot1;
                        var17 = var9;
                        var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
case 22:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                if(!(var3 != var4)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                var2 = _closure2_slot5;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                var2 = _closure2_slot6;
case 26:
                return var2;
case 24:
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
                var6 = _closure2_slot4;
                var7 = undefined;
                var12 = var3.bind(var7)(var6, var2);
                var5 = _closure2_slot0;
                var4 = var5.getEvaluationAndAssignment;
                var3 = _closure2_slot3;
                var5 = var4.bind(var5)(var6, var12, var3);
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4.bind(var7)(var5, var3);
                var3 = 0;
                var11 = var4[var3];
                var3 = 1;
                var5 = var4[var3];
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var4 = var5.variantId;
case 28:
                var8 = var3 == var5;
                var6 = undefined;
                if(var8) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var6 = var5.trackedVariantId;
case 30:
                var10 = var4;
                if(!(var3 != var6)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var10 = var6;
case 32:
                var6 = var3 == var5;
                var9 = undefined;
                if(var6) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var9 = var5.revision;
case 34:
                var6 = var3 == var5;
                var8 = undefined;
                if(var6) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var8 = var5.isOverride;
case 36:
                var6 = var3 == var5;
                var7 = undefined;
                if(var6) { _fun0003_ip = 7; continue _fun0003 }
case 38:
                var7 = var5.exposureTrackingEnabled;
case 7:
                var5 = var3 != var11;
                if(!var5) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var5 = var3 != var10;
case 39:
                if(!var5) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var5 = var3 != var9;
case 41:
                if(!var5) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var6 = false;
                var5 = var6 === var8;
case 43:
                if(!var5) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var6 = true;
                var5 = var6 === var7;
case 45:
                if(!var5) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var8 = _closure2_slot0;
                var7 = var8.trackExperimentExposure;
                var18 = _closure2_slot3;
                var17 = var2.location;
                var16 = _closure2_slot4;
                var20 = var8;
                var19 = var11;
                var15 = var9;
                var14 = var10;
                var13 = var12;
                var2 = var20[var7](var19, var18, var17, var16, var15, var14, var13, var12);
case 47:
                if(!(var3 != var4)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                var2 = _closure2_slot5;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                var2 = _closure2_slot6;
case 51:
                return var2;
case 49:
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