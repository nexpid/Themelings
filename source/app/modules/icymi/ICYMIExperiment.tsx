// app/modules/icymi/ICYMIExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var8 = function useICYMIEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arguments[1];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var5 = var3.bind(var4)(var2);
            var4 = _closure1_slot4;
            var3 = var4.useExperiment;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var _closure1_slot7 = var8;
    var7 = function getICYMIEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var6 = true;
case 2:
            var4 = _closure1_slot2;
            var3 = var4.get;
            var2 = _closure1_slot3;
            var5 = var3.bind(var4)(var2);
            var4 = _closure1_slot4;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var _closure1_slot8 = var7;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var16 = true;
    var4['value'] = var16;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var13[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var13[var4];
    var4 = var12.bind(var1)(var4);
    var11 = var4.CommonTriggerPoints;
    var10 = 'hide_icymi_tab';
    var _closure1_slot3 = var10;
    var4 = 2;
    var5 = var13[var4];
    var9 = var12.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2024-07_icymi', 'label': 'In-case-you-missed-it tab'};
    var11 = var11.CONNECTION_OPEN_MOBILE;
    var5['commonTriggerPoint'] = var11;
    var11 = {};
    var15 = false;
    var11['enabled'] = var15;
    var5['defaultConfig'] = var11;
    var14 = {'id': 1, 'label': 'enables the new icymi tab'};
    var11 = {};
    var11['enabled'] = var16;
    var14['config'] = var11;
    var11 = new Array(1);
    var11[0] = var14;
    var5['treatments'] = var11;
    var9 = var6.bind(var9)(var5);
    var _closure1_slot4 = var9;
    var5 = var13[var4];
    var11 = var12.bind(var1)(var5);
    var6 = var11.createExperiment;
    var5 = {'kind': 'user', 'id': '2024-07_icymi_negative_items', 'label': 'icymi negative content (debugging only)'};
    var14 = {};
    var14['enabled'] = var15;
    var5['defaultConfig'] = var14;
    var17 = {'id': 1, 'label': 'allow negative items only'};
    var14 = {};
    var14['enabled'] = var16;
    var17['config'] = var14;
    var14 = new Array(1);
    var14[0] = var17;
    var5['treatments'] = var14;
    var6 = var6.bind(var11)(var5);
    var4 = var13[var4];
    var11 = var12.bind(var1)(var4);
    var5 = var11.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-05_icymi_new_conversation_summaries', 'label': 'New conversation summary in ICYMI'};
    var14 = {};
    var14['contentGenerationEnabled'] = var15;
    var4['defaultConfig'] = var14;
    var15 = {'id': 1, 'label': 'New conversation summary types in ICYMI'};
    var14 = {};
    var14['contentGenerationEnabled'] = var16;
    var15['config'] = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var4['treatments'] = var14;
    var5 = var5.bind(var11)(var4);
    var _closure1_slot5 = var5;
    var4 = 4;
    var4 = var13[var4];
    var14 = var12.bind(var1)(var4);
    var11 = var14.createApexExperiment;
    var4 = {'name': '2025-09-destination-icymi-ux-v2', 'kind': 'user'};
    var15 = {'isNewHeaderAndInteractions': false, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'default'};
    var4['defaultConfig'] = var15;
    var15 = {};
    var16 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'destination_icymi_ia'};
    var15[1] = var16;
    var16 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': true, 'isBottomSheetInteractions': false, 'uxVariation': 'destination_icymi_ia_card'};
    var15[2] = var16;
    var16 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': false, 'isBottomSheetInteractions': true, 'uxVariation': 'destination_icymi_ia_bottom_sheet'};
    var15[3] = var16;
    var16 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': true, 'isBottomSheetInteractions': true, 'uxVariation': 'destination_icymi_ia_bottom_sheet_card'};
    var15[4] = var16;
    var4['variations'] = var15;
    var4 = var11.bind(var14)(var4);
    var _closure1_slot6 = var4;
    var11 = 5;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/icymi/ICYMIExperiment.tsx';
    var11 = var12.bind(var13)(var11);
    var3['ICYMI_LAB_FEATURE'] = var10;
    var3['ICYMIExperiment'] = var9;
    var3['useICYMIEnabled'] = var8;
    var3['getICYMIEnabled'] = var7;
    var3['ICYMINegativeExperiment'] = var6;
    var3['ICYMINewConversationSummaryExperiment'] = var5;
    var5 = function useICYMINewConversationSummaryExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var6 = false;
case 4:
            var4 = _closure1_slot7;
            var3 = false;
            var5 = var4.bind(var5)(var1, var3);
            var4 = _closure1_slot5;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var5 = !var5;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useICYMINewConversationSummaryExperiment'] = var5;
    var5 = function getICYMINewConversationSummaryExperiment(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var6 = false;
case 4:
            var4 = _closure1_slot8;
            var3 = false;
            var5 = var4.bind(var5)(var1, var3);
            var4 = _closure1_slot5;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var5 = !var5;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getICYMINewConversationSummaryExperiment'] = var5;
    var3['DestinationICYMIExperiment'] = var4;
    var2 = function useDestinationICYMIExperiment(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot7;
            var4 = var5.location;
            var3 = undefined;
            var2 = false;
            var2 = var6.bind(var3)(var4, var2);
            var4 = _closure1_slot6;
            var3 = var4.useConfig;
            var1 = {};
            var6 = var5.location;
            if(var2) { _fun0005_ip = 6; continue _fun0005 }
case 7:
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var5 = 'disabled_';
            var5 = var7.bind(var5)(var6);
            _fun0005_ip = 8; continue _fun0005;
case 6:
            var5 = var6;
case 8:
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 10:
            var1 = {'isNewHeaderAndInteractions': false, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'default'};
case 9:
            return var1;
        }
    };
    var3['useDestinationICYMIExperiment'] = var2;
    return var1;
})();