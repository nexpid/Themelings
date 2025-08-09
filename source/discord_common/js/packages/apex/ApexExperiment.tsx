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
 0:
                var9 = arg1;
                var _closure3_slot0 = var9;
                var4 = _closure2_slot1;
                var3 = _closure2_slot3;
                var7 = undefined;
                var12 = var4.bind(var7)(var3, var9);
                var _closure3_slot1 = var12;
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
                var4[0] = var12;
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
                var11 = var4[var3];
                var _closure3_slot2 = var11;
                var3 = 1;
                var6 = var4[var3];
                var3 = null;
                var8 = var3 == var6;
                var4 = undefined;
                if(var8) { _fun0001_ip = 137; continue _fun0001 }
 131:
                var4 = var6.variantId;
 137:
                var _closure3_slot3 = var4;
                var8 = var3 == var6;
                var10 = undefined;
                if(var8) { _fun0001_ip = 156; continue _fun0001 }
 150:
                var10 = var6.revision;
 156:
                var _closure3_slot4 = var10;
                var13 = var3 == var6;
                var8 = undefined;
                if(var13) { _fun0001_ip = 175; continue _fun0001 }
 169:
                var8 = var6.isOverride;
 175:
                var _closure3_slot5 = var8;
                var6 = _closure1_slot3;
                var5 = new Array(6);
                var5[0] = var12;
                var5[1] = var11;
                var5[2] = var4;
                var5[3] = var10;
                var9 = var9.location;
                var5[4] = var9;
                var5[5] = var8;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure3_slot2;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0002_ip = 24; continue _fun0002 }
 16:
                        var3 = _closure3_slot3;
                        var2 = var4 != var3;
 24:
                        if(!var2) { _fun0002_ip = 35; continue _fun0002 }
 27:
                        var3 = _closure3_slot4;
                        var2 = var4 != var3;
 35:
                        if(!var2) { _fun0002_ip = 48; continue _fun0002 }
 38:
                        var4 = _closure3_slot5;
                        var3 = false;
                        var2 = var3 === var4;
 48:
                        if(!var2) { _fun0002_ip = 100; continue _fun0002 }
 51:
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
 100:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                if(!(var3 != var4)) { _fun0001_ip = 249; continue _fun0001 }
 231:
                var2 = _closure2_slot4;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0001_ip = 247; continue _fun0001 }
 243:
                var2 = _closure2_slot5;
 247:
                return var2;
 249:
                var1 = _closure2_slot5;
                return var1;
            }
        };
        var1['useConfig'] = var3;
        var2 = function getConfig(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                var10 = var4[var3];
                var3 = 1;
                var5 = var4[var3];
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0003_ip = 89; continue _fun0003 }
 83:
                var4 = var5.variantId;
 89:
                var6 = var3 == var5;
                var9 = undefined;
                if(var6) { _fun0003_ip = 104; continue _fun0003 }
 98:
                var9 = var5.revision;
 104:
                var6 = var3 == var5;
                var7 = undefined;
                if(var6) { _fun0003_ip = 119; continue _fun0003 }
 113:
                var7 = var5.isOverride;
 119:
                var5 = var3 != var10;
                if(!var5) { _fun0003_ip = 130; continue _fun0003 }
 126:
                var5 = var3 != var4;
 130:
                if(!var5) { _fun0003_ip = 137; continue _fun0003 }
 133:
                var5 = var3 != var9;
 137:
                if(!var5) { _fun0003_ip = 146; continue _fun0003 }
 140:
                var6 = false;
                var5 = var6 === var7;
 146:
                if(!var5) { _fun0003_ip = 188; continue _fun0003 }
 149:
                var8 = _closure2_slot0;
                var7 = var8.trackExperimentExposure;
                var15 = _closure2_slot2;
                var14 = var2.location;
                var13 = _closure2_slot3;
                var17 = var8;
                var16 = var10;
                var12 = var9;
                var11 = var4;
                var2 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
 188:
                if(!(var3 != var4)) { _fun0003_ip = 210; continue _fun0003 }
 192:
                var2 = _closure2_slot4;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0003_ip = 208; continue _fun0003 }
 204:
                var2 = _closure2_slot5;
 208:
                return var2;
 210:
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