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
    var2 = function createApexExperimentCommon(arg1, arg2, arg3) {
        var3 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var4;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var1 = var3.name;
        var _closure2_slot2 = var1;
        var1 = var3.kind;
        var _closure2_slot3 = var1;
        var1 = var3.variations;
        var _closure2_slot4 = var1;
        var1 = var3.defaultConfig;
        var _closure2_slot5 = var1;
        var1 = var4.registerExperiment;
        var1 = var1.bind(var4)(var3);
        var1 = {};
        var1['definition'] = var3;
        var3 = function useConfig(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var9 = arg1;
                var _closure3_slot0 = var9;
                var4 = _closure2_slot1;
                var3 = _closure2_slot3;
                var7 = undefined;
                var13 = var4.bind(var7)(var3, var9);
                var _closure3_slot1 = var13;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var6 = 2;
                var3 = var3[var6];
                var11 = var4.bind(var7)(var3);
                var10 = var11.useStateFromStoresArray;
                var3 = _closure2_slot0;
                var8 = new Array(1);
                var8[0] = var3;
                var4 = new Array(1);
                var4[0] = var13;
                var3 = function() {
                    var5 = _closure2_slot0;
                    var4 = var5.getEvaluationAndAssignment;
                    var3 = _closure2_slot3;
                    var2 = _closure3_slot1;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var4 = var10.bind(var11)(var8, var3, var4);
                var3 = _closure1_slot2;
                var4 = var3.bind(var7)(var4, var6);
                var3 = 0;
                var12 = var4[var3];
                var _closure3_slot2 = var12;
                var3 = 1;
                var6 = var4[var3];
                var3 = null;
                var8 = var3 == var6;
                var4 = undefined;
                if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var6.variantId;
case 2:
                var10 = var3 == var6;
                var8 = undefined;
                if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var8 = var6.trackedVariantId;
case 4:
                var11 = var4;
                if(!(var3 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var11 = var8;
case 6:
                var _closure3_slot3 = var11;
                var8 = var3 == var6;
                var10 = undefined;
                if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var10 = var6.revision;
case 8:
                var _closure3_slot4 = var10;
                var14 = var3 == var6;
                var8 = undefined;
                if(var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var8 = var6.isOverride;
case 10:
                var _closure3_slot5 = var8;
                var6 = _closure1_slot3;
                var5 = new Array(6);
                var5[0] = var13;
                var5[1] = var12;
                var5[2] = var11;
                var5[3] = var10;
                var9 = var9.location;
                var5[4] = var9;
                var5[5] = var8;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure3_slot2;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var3 = _closure3_slot3;
                        var2 = var4 != var3;
case 12:
                        if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var3 = _closure3_slot4;
                        var2 = var4 != var3;
case 14:
                        if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var4 = _closure3_slot5;
                        var3 = false;
                        var2 = var3 === var4;
case 16:
                        if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var8 = _closure2_slot0;
                        var7 = var8.trackExperimentExposure;
                        var14 = _closure3_slot2;
                        var13 = _closure2_slot2;
                        var3 = _closure3_slot0;
                        var12 = var3.location;
                        var11 = _closure2_slot3;
                        var10 = _closure3_slot4;
                        var9 = _closure3_slot3;
                        var15 = var8;
                        var1 = var15[var7](var14, var13, var12, var11, var10, var9, var8);
case 18:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                if(!(var3 != var4)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var2 = _closure2_slot4;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var2 = _closure2_slot5;
case 22:
                return var2;
case 20:
                var1 = _closure2_slot5;
                return var1;
            }
        };
        var1['useConfig'] = var3;
        var2 = function getConfig(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot1;
                var8 = _closure2_slot3;
                var7 = undefined;
                var6 = var3.bind(var7)(var8, var2);
                var5 = _closure2_slot0;
                var4 = var5.getEvaluationAndAssignment;
                var3 = _closure2_slot2;
                var5 = var4.bind(var5)(var8, var6, var3);
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
                if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var4 = var5.variantId;
case 24:
                var8 = var3 == var5;
                var6 = undefined;
                if(var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var6 = var5.trackedVariantId;
case 26:
                var10 = var4;
                if(!(var3 != var6)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var10 = var6;
case 28:
                var6 = var3 == var5;
                var9 = undefined;
                if(var6) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var9 = var5.revision;
case 30:
                var6 = var3 == var5;
                var7 = undefined;
                if(var6) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var7 = var5.isOverride;
case 32:
                var5 = var3 != var11;
                if(!var5) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var5 = var3 != var10;
case 34:
                if(!var5) { _fun0003_ip = 6; continue _fun0003 }
case 36:
                var5 = var3 != var9;
case 6:
                if(!var5) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var6 = false;
                var5 = var6 === var7;
case 37:
                if(!var5) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var8 = _closure2_slot0;
                var7 = var8.trackExperimentExposure;
                var16 = _closure2_slot2;
                var15 = var2.location;
                var14 = _closure2_slot3;
                var18 = var8;
                var17 = var11;
                var13 = var9;
                var12 = var10;
                var2 = var18[var7](var17, var16, var15, var14, var13, var12, var11);
case 39:
                if(!(var3 != var4)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var2 = _closure2_slot4;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var2 = _closure2_slot5;
case 43:
                return var2;
case 41:
                var1 = _closure2_slot5;
                return var1;
            }
        };
        var1['getConfig'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();