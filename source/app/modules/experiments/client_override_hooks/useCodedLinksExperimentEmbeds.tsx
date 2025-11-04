// app/modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function canSeeExperimentEmbeds() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[0];
            var2 = undefined;
            if(!(var4 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            var1 = new Array(1);
            var1[0] = var3;
            var4 = var1;
case 2:
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3.bind(var2)(var4, var1);
            var1 = 0;
            var5 = var3[var1];
            var1 = var5.getCurrentUser;
            var6 = var1.bind(var5)();
            var3 = null;
            var4 = var3 == var6;
            var1 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var6.isStaff;
            var1 = var4.bind(var6)();
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.getCurrentUser;
            var4 = var4.bind(var5)();
            var3 = var3 == var4;
            var2 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4.isStaffPersonal;
            var2 = var3.bind(var4)();
case 8:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function useCanSeeExperimentEmbeds() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot13;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = {};
    var _closure1_slot7 = var6;
    var6 = {};
    var _closure1_slot8 = var6;
    var6 = {};
    var _closure1_slot9 = var6;
    var6 = {};
    var _closure1_slot10 = var6;
    var6 = {};
    var _closure1_slot11 = var6;
    var6 = {};
    var9 = {};
    var6['legacyExperiments'] = var9;
    var9 = {};
    var6['legacyOverridesInfo'] = var9;
    var9 = {};
    var6['apexExperiments'] = var9;
    var9 = {};
    var6['apexOverridesInfo'] = var9;
    var _closure1_slot12 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx';
    var6 = var7.bind(var8)(var6);
    var3['canSeeExperimentEmbeds'] = var5;
    var3['useCanSeeExperimentEmbeds'] = var4;
    var2 = function useCodedLinksExperimentEmbeds() {
        var3 = _closure1_slot14;
        var11 = undefined;
        var10 = var3.bind(var11)();
        var _closure2_slot0 = var10;
        var5 = _closure1_slot0;
        var12 = _closure1_slot1;
        var4 = 5;
        var3 = var12[var4];
        var9 = var5.bind(var11)(var3);
        var8 = var9.useStateFromStoresObject;
        var3 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var3;
        var6 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = _closure1_slot7;
                _fun0002_ip = 12; continue _fun0002;
case 10:
                var3 = _closure1_slot5;
                var2 = var3.getRegisteredExperiments;
                var1 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var9 = var8.bind(var9)(var7, var6);
        var _closure2_slot1 = var9;
        var6 = var12[var4];
        var8 = var5.bind(var11)(var6);
        var7 = var8.useStateFromStoresObject;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = _closure1_slot8;
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var3 = _closure1_slot5;
                var2 = var3.getAllExperimentOverrideDescriptors;
                var1 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var8 = var7.bind(var8)(var6, var3);
        var _closure2_slot2 = var8;
        var3 = var12[var4];
        var14 = var5.bind(var11)(var3);
        var13 = var14.useStateFromStores;
        var3 = _closure1_slot6;
        var7 = new Array(1);
        var7[0] = var3;
        var6 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var1 = _closure1_slot9;
                _fun0004_ip = 12; continue _fun0004;
case 10:
                var3 = _closure1_slot6;
                var2 = var3.getExperimentsMetadata;
                var1 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var7 = var13.bind(var14)(var7, var6);
        var _closure2_slot3 = var7;
        var6 = var12[var4];
        var15 = var5.bind(var11)(var6);
        var14 = var15.useStateFromStores;
        var13 = new Array(1);
        var13[0] = var3;
        var6 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                var1 = _closure1_slot10;
                _fun0005_ip = 12; continue _fun0005;
case 10:
                var3 = _closure1_slot6;
                var2 = var3.getRegisteredExperiments;
                var1 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var6 = var14.bind(var15)(var13, var6);
        var _closure2_slot4 = var6;
        var4 = var12[var4];
        var11 = var5.bind(var11)(var4);
        var5 = var11.useStateFromStores;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0006_ip = 10; continue _fun0006 }
case 11:
                var1 = _closure1_slot11;
                _fun0006_ip = 12; continue _fun0006;
case 10:
                var3 = _closure1_slot6;
                var2 = var3.getClientOverrides;
                var1 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var5 = var5.bind(var11)(var4, var3);
        var _closure2_slot5 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0007_ip = 13; continue _fun0007 }
case 11:
                var1 = _closure1_slot12;
                _fun0007_ip = 14; continue _fun0007;
case 13:
                var2 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 6;
                var8 = var7[var4];
                var5 = undefined;
                var10 = var6.bind(var5)(var8);
                var9 = var10.parseRegisteredExperiments;
                var8 = _closure2_slot1;
                var8 = var9.bind(var10)(var8);
                var2['legacyExperiments'] = var8;
                var4 = var7[var4];
                var9 = var6.bind(var5)(var4);
                var8 = var9.getLegacyOverridesInfo;
                var4 = _closure2_slot2;
                var4 = var8.bind(var9)(var4);
                var2['legacyOverridesInfo'] = var4;
                var4 = 7;
                var8 = var7[var4];
                var11 = var6.bind(var5)(var8);
                var10 = var11.mergeApexExperiments;
                var9 = _closure2_slot3;
                var8 = _closure2_slot4;
                var8 = var10.bind(var11)(var9, var8);
                var2['apexExperiments'] = var8;
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.getApexExperimentOverridesInfo;
                var3 = _closure2_slot5;
                var3 = var4.bind(var5)(var3);
                var2['apexOverridesInfo'] = var3;
                var1 = var2;
case 14:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCodedLinksExperimentEmbeds'] = var2;
    return var1;
})();