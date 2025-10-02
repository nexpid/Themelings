// app/modules/remixing/experiments/RemixGAExpriment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var4);
    var8 = var9.createExperiment;
    var7 = {'kind': 'user', 'id': '2023-08_remix_ga', 'label': 'Remix General Available'};
    var4 = {'canSeeRemixBadge': false, 'canRemix': false, 'isNitroPerk': false};
    var7['defaultConfig'] = var4;
    var4 = {'id': 1, 'label': 'Remix for Nitro Subscribers'};
    var10 = {'canSeeRemixBadge': true, 'canRemix': true, 'isNitroPerk': true};
    var4['config'] = var10;
    var10 = new Array(3);
    var10[0] = var4;
    var11 = {'id': 3, 'label': 'Upsell Remix for Non-Nitro Users'};
    var4 = 3;
    var12 = {'canSeeRemixBadge': true, 'canRemix': false, 'isNitroPerk': true};
    var11['config'] = var12;
    var10[1] = var11;
    var11 = {'id': 5, 'label': 'Remix GA for everyone'};
    var12 = {'canSeeRemixBadge': true, 'canRemix': true, 'isNitroPerk': false};
    var11['config'] = var12;
    var10[2] = var11;
    var7['treatments'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/experiments/RemixGAExpriment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanRemix(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = {};
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var6['analyticsLocations'] = var1;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            var2 = new Array(1);
            var2[0] = var5;
            var1['analyticsLocations'] = var2;
            var6 = var1;
case 2:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var4 = var5.useIsRemixEnabled;
            var1 = {};
            var2 = 'canRemixHook';
            var1['location'] = var2;
            var1 = var4.bind(var5)(var1);
            var5 = _closure1_slot3;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var7 = true;
            var2['autoTrackExposure'] = var7;
            var2['trackExposureOptions'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var2 = var2.canRemix;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useCanRemix'] = var4;
    var4 = function canRemix() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.isRemixEnabled;
            var2 = {};
            var1 = 'canRemix';
            var2['location'] = var1;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot3;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var6 = true;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.canRemix;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['canRemix'] = var4;
    var4 = function canSeeRemixBadge() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.isRemixEnabled;
            var2 = {};
            var1 = 'canSeeRemixBadge';
            var2['location'] = var1;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot3;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var6 = true;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.canSeeRemixBadge;
            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['canSeeRemixBadge'] = var4;
    var4 = function useCanSeeRemixBadge() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.useIsRemixEnabled;
            var2 = {};
            var1 = 'canSeeRemixBadge';
            var2['location'] = var1;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot3;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var6 = true;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.canSeeRemixBadge;
            if(!var1) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['useCanSeeRemixBadge'] = var4;
    var4 = function useIsRemixANitroPerk() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.useIsRemixEnabled;
            var2 = {};
            var1 = 'isRemixANitroPerkHook';
            var2['location'] = var1;
            var2 = var4.bind(var5)(var2);
            var5 = _closure1_slot3;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var6 = true;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.isNitroPerk;
            if(!var1) { _fun0005_ip = 8; continue _fun0005 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['useIsRemixANitroPerk'] = var4;
    var2 = function useShouldUpsellRemix() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arguments[0];
            var9 = arguments[1];
            var4 = undefined;
            if(!(var8 === var4)) { _fun0006_ip = 10; continue _fun0006 }
case 11:
            var8 = {};
case 10:
            if(!(var9 === var4)) { _fun0006_ip = 12; continue _fun0006 }
case 13:
            var9 = true;
case 12:
            var7 = _closure1_slot3;
            var6 = var7.useExperiment;
            var3 = {};
            var5 = 'useShouldUpsellRemixHook';
            var3['location'] = var5;
            var2 = {};
            var2['autoTrackExposure'] = var9;
            var2['trackExposureOptions'] = var8;
            var2 = var6.bind(var7)(var3, var2);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.useIsRemixEnabled;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0006_ip = 14; continue _fun0006 }
case 15:
            var3 = var2.canRemix;
            var1 = !var3;
case 14:
            if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var1 = var2.isNitroPerk;
case 16:
            return var1;
        }
    };
    var3['useShouldUpsellRemix'] = var2;
    return var1;
})();