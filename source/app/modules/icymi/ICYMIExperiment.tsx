// app/modules/icymi/ICYMIExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var10 = function useICYMIEnabled(arg1) {
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
            var1 = 4;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = _closure1_slot4;
            var7 = var4.bind(var5)(var1);
            var6 = _closure1_slot5;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var2;
            var1 = {};
            var1['autoTrackExposure'] = var8;
            var1['disable'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var5 = _closure1_slot9;
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
    var _closure1_slot10 = var10;
    var9 = function getICYMIEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = true;
case 6:
            var4 = _closure1_slot3;
            var3 = var4.get;
            var2 = _closure1_slot4;
            var5 = var3.bind(var4)(var2);
            var4 = _closure1_slot5;
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
    var _closure1_slot11 = var9;
    var5 = function getDestinationICYMIExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot11;
            var4 = var5.location;
            var3 = undefined;
            var1 = false;
            var1 = var6.bind(var3)(var4, var1);
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = _closure1_slot7;
            _fun0003_ip = 10; continue _fun0003;
case 8:
            var4 = _closure1_slot8;
            var3 = var4.getConfig;
            var2 = {};
            var5 = var5.location;
            var2['location'] = var5;
            var1 = var3.bind(var4)(var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var19 = true;
    var2['value'] = var19;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var15[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var15[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var15[var2];
    var2 = var14.bind(var1)(var2);
    var11 = var2.CommonTriggerPoints;
    var12 = 'hide_icymi_tab';
    var _closure1_slot4 = var12;
    var2 = 3;
    var6 = var15[var2];
    var8 = var14.bind(var1)(var6);
    var7 = var8.createExperiment;
    var6 = {'kind': 'user', 'id': '2024-07_icymi', 'label': 'In-case-you-missed-it tab'};
    var11 = var11.CONNECTION_OPEN_MOBILE;
    var6['commonTriggerPoint'] = var11;
    var11 = {};
    var18 = false;
    var11['enabled'] = var18;
    var6['defaultConfig'] = var11;
    var13 = {'id': 1, 'label': 'enables the new icymi tab'};
    var11 = {};
    var11['enabled'] = var19;
    var13['config'] = var11;
    var11 = new Array(1);
    var11[0] = var13;
    var6['treatments'] = var11;
    var11 = var7.bind(var8)(var6);
    var _closure1_slot5 = var11;
    var6 = var15[var2];
    var8 = var14.bind(var1)(var6);
    var7 = var8.createExperiment;
    var6 = {'kind': 'user', 'id': '2024-07_icymi_negative_items', 'label': 'icymi negative content (debugging only)'};
    var13 = {};
    var13['enabled'] = var18;
    var6['defaultConfig'] = var13;
    var16 = {'id': 1, 'label': 'allow negative items only'};
    var13 = {};
    var13['enabled'] = var19;
    var16['config'] = var13;
    var13 = new Array(1);
    var13[0] = var16;
    var6['treatments'] = var13;
    var8 = var7.bind(var8)(var6);
    var6 = var15[var2];
    var13 = var14.bind(var1)(var6);
    var7 = var13.createExperiment;
    var6 = {'kind': 'user', 'id': '2025-05_icymi_new_conversation_summaries', 'label': 'New conversation summary in ICYMI'};
    var16 = {};
    var16['contentGenerationEnabled'] = var18;
    var6['defaultConfig'] = var16;
    var17 = {'id': 1, 'label': 'New conversation summary types in ICYMI'};
    var16 = {};
    var16['contentGenerationEnabled'] = var19;
    var17['config'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var6['treatments'] = var16;
    var7 = var7.bind(var13)(var6);
    var _closure1_slot6 = var7;
    var17 = {'isNewHeaderAndInteractions': false, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'default'};
    var _closure1_slot7 = var17;
    var6 = 5;
    var6 = var15[var6];
    var16 = var14.bind(var1)(var6);
    var13 = var16.createApexExperiment;
    var6 = {'name': '2025-09-destination-icymi-ux-v2', 'kind': 'user'};
    var6['defaultConfig'] = var17;
    var17 = {};
    var20 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': false, 'isBottomSheetInteractions': false, 'uxVariation': 'destination_icymi_ia'};
    var17[1] = var20;
    var20 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': true, 'isBottomSheetInteractions': false, 'uxVariation': 'destination_icymi_ia_card'};
    var17[2] = var20;
    var20 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': false, 'isBottomSheetInteractions': true, 'uxVariation': 'destination_icymi_ia_bottom_sheet'};
    var17[3] = var20;
    var20 = {'isNewHeaderAndInteractions': true, 'isNewCardDesign': true, 'isBottomSheetInteractions': true, 'uxVariation': 'destination_icymi_ia_bottom_sheet_card'};
    var17[4] = var20;
    var6['variations'] = var17;
    var6 = var13.bind(var16)(var6);
    var _closure1_slot8 = var6;
    var2 = var15[var2];
    var16 = var14.bind(var1)(var2);
    var13 = var16.createExperiment;
    var2 = {'kind': 'user', 'id': '2025-10_icymi_desktop_client', 'label': 'ICYMI desktop client'};
    var17 = {};
    var17['icymiDesktopEnabled'] = var18;
    var2['defaultConfig'] = var17;
    var18 = {'id': 1, 'label': 'Enable ICYMI desktop client'};
    var17 = {};
    var17['icymiDesktopEnabled'] = var19;
    var18['config'] = var17;
    var17 = new Array(1);
    var17[0] = var18;
    var2['treatments'] = var17;
    var2 = var13.bind(var16)(var2);
    var _closure1_slot9 = var2;
    var13 = 6;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/icymi/ICYMIExperiment.tsx';
    var13 = var14.bind(var15)(var13);
    var3['ICYMI_LAB_FEATURE'] = var12;
    var3['ICYMIExperiment'] = var11;
    var3['useICYMIEnabled'] = var10;
    var3['getICYMIEnabled'] = var9;
    var3['ICYMINegativeExperiment'] = var8;
    var3['ICYMINewConversationSummaryExperiment'] = var7;
    var7 = function useICYMINewConversationSummaryExperiment(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var6 = false;
case 2:
            var4 = _closure1_slot10;
            var3 = false;
            var5 = var4.bind(var5)(var1, var3);
            var4 = _closure1_slot6;
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
    var3['useICYMINewConversationSummaryExperiment'] = var7;
    var7 = function getICYMINewConversationSummaryExperiment(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var6 = false;
case 2:
            var4 = _closure1_slot11;
            var3 = false;
            var5 = var4.bind(var5)(var1, var3);
            var4 = _closure1_slot6;
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
    var3['getICYMINewConversationSummaryExperiment'] = var7;
    var3['DestinationICYMIExperiment'] = var6;
    var3['getDestinationICYMIExperiment'] = var5;
    var4 = function useDestinationICYMIExperiment(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var5 = var2.location;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot12;
            var2 = {};
            var1 = _closure2_slot0;
            var1 = var1.location;
            var2['location'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDestinationICYMIExperiment'] = var4;
    var3['ICYMIDesktopExperiment'] = var2;
    return var1;
})();