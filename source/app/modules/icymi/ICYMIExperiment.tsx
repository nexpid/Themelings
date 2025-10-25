// app/modules/icymi/ICYMIExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var9 = function useICYMIEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = arguments[1];
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = true;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = _closure1_slot3;
            var7 = var4.bind(var5)(var1);
            var6 = _closure1_slot4;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var2;
            var1 = {};
            var1['autoTrackExposure'] = var8;
            var1['disable'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var5 = _closure1_slot7;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var6 = var1.enabled;
            var6 = !var6;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = true;
case 4:
            var2['disable'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var1.enabled;
            return var1;
        }
    };
    var _closure1_slot8 = var9;
    var8 = function getICYMIEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = true;
case 6:
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
    var _closure1_slot9 = var8;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var18 = true;
    var2['value'] = var18;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var14[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var14[var2];
    var2 = var13.bind(var1)(var2);
    var10 = var2.CommonTriggerPoints;
    var11 = 'hide_icymi_tab';
    var _closure1_slot3 = var11;
    var2 = 2;
    var5 = var14[var2];
    var7 = var13.bind(var1)(var5);
    var6 = var7.createExperiment;
    var5 = {'kind': 'user', 'id': '2024-07_icymi', 'label': 'In-case-you-missed-it tab'};
    var10 = var10.CONNECTION_OPEN_MOBILE;
    var5['commonTriggerPoint'] = var10;
    var10 = {};
    var17 = false;
    var10['enabled'] = var17;
    var5['defaultConfig'] = var10;
    var12 = {'id': 1, 'label': 'enables the new icymi tab'};
    var10 = {};
    var10['enabled'] = var18;
    var12['config'] = var10;
    var10 = new Array(1);
    var10[0] = var12;
    var5['treatments'] = var10;
    var10 = var6.bind(var7)(var5);
    var _closure1_slot4 = var10;
    var5 = var14[var2];
    var7 = var13.bind(var1)(var5);
    var6 = var7.createExperiment;
    var5 = {'kind': 'user', 'id': '2024-07_icymi_negative_items', 'label': 'icymi negative content (debugging only)'};
    var12 = {};
    var12['enabled'] = var17;
    var5['defaultConfig'] = var12;
    var15 = {'id': 1, 'label': 'allow negative items only'};
    var12 = {};
    var12['enabled'] = var18;
    var15['config'] = var12;
    var12 = new Array(1);
    var12[0] = var15;
    var5['treatments'] = var12;
    var7 = var6.bind(var7)(var5);
    var5 = var14[var2];
    var12 = var13.bind(var1)(var5);
    var6 = var12.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-05_icymi_new_conversation_summaries', 'label': 'New conversation summary in ICYMI'};
    var15 = {};
    var15['contentGenerationEnabled'] = var17;
    var5['defaultConfig'] = var15;
    var16 = {'id': 1, 'label': 'New conversation summary types in ICYMI'};
    var15 = {};
    var15['contentGenerationEnabled'] = var18;
    var16['config'] = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var5['treatments'] = var15;
    var6 = var6.bind(var12)(var5);
    var _closure1_slot5 = var6;
    var5 = 4;
    var5 = var14[var5];
    var15 = var13.bind(var1)(var5);
    var12 = var15.createApexExperiment;
    var5 = {'name': '2025-09-destination-icymi-ux-v2', 'kind': 'user'};
    var16 = {'isNewHeaderAndInteractions': false, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'default'};
    var5['defaultConfig'] = var16;
    var16 = {};
    var19 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'destination_icymi_ia'};
    var16[1] = var19;
    var19 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': true, 'isBottomSheetInteractions': false, 'uxVariation': 'destination_icymi_ia_card'};
    var16[2] = var19;
    var19 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': false, 'isBottomSheetInteractions': true, 'uxVariation': 'destination_icymi_ia_bottom_sheet'};
    var16[3] = var19;
    var19 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': true, 'isBottomSheetInteractions': true, 'uxVariation': 'destination_icymi_ia_bottom_sheet_card'};
    var16[4] = var19;
    var5['variations'] = var16;
    var5 = var12.bind(var15)(var5);
    var _closure1_slot6 = var5;
    var2 = var14[var2];
    var15 = var13.bind(var1)(var2);
    var12 = var15.createExperiment;
    var2 = {'kind': 'user', 'id': '2025-10_icymi_desktop_client', 'label': 'ICYMI desktop client'};
    var16 = {};
    var16['icymiDesktopEnabled'] = var17;
    var2['defaultConfig'] = var16;
    var17 = {'id': 1, 'label': 'Enable ICYMI desktop client'};
    var16 = {};
    var16['icymiDesktopEnabled'] = var18;
    var17['config'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var2['treatments'] = var16;
    var2 = var12.bind(var15)(var2);
    var _closure1_slot7 = var2;
    var12 = 5;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/icymi/ICYMIExperiment.tsx';
    var12 = var13.bind(var14)(var12);
    var3['ICYMI_LAB_FEATURE'] = var11;
    var3['ICYMIExperiment'] = var10;
    var3['useICYMIEnabled'] = var9;
    var3['getICYMIEnabled'] = var8;
    var3['ICYMINegativeExperiment'] = var7;
    var3['ICYMINewConversationSummaryExperiment'] = var6;
    var6 = function useICYMINewConversationSummaryExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var6 = false;
case 2:
            var4 = _closure1_slot8;
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
    var3['useICYMINewConversationSummaryExperiment'] = var6;
    var6 = function getICYMINewConversationSummaryExperiment(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var6 = false;
case 2:
            var4 = _closure1_slot9;
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
    var3['getICYMINewConversationSummaryExperiment'] = var6;
    var3['DestinationICYMIExperiment'] = var5;
    var4 = function useDestinationICYMIExperiment(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot8;
            var4 = var5.location;
            var3 = undefined;
            var2 = false;
            var2 = var6.bind(var3)(var4, var2);
            var4 = _closure1_slot6;
            var3 = var4.useConfig;
            var1 = {};
            var6 = var5.location;
            if(var2) { _fun0005_ip = 8; continue _fun0005 }
case 9:
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var5 = 'disabled_';
            var5 = var7.bind(var5)(var6);
            _fun0005_ip = 10; continue _fun0005;
case 8:
            var5 = var6;
case 10:
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            if(var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
            var1 = {'isNewHeaderAndInteractions': false, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'default'};
case 11:
            return var1;
        }
    };
    var3['useDestinationICYMIExperiment'] = var4;
    var3['ICYMIDesktopExperiment'] = var2;
    return var1;
})();