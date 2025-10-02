// app/modules/clips/ClipsExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var5 = var8[var4];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2022-11_clips_experiment', 'label': 'Clips Experiment'};
    var10 = {'enableClips': false, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': false};
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Clips without upsells'};
    var10 = {'enableClips': true, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': true};
    var11['config'] = var10;
    var10 = new Array(3);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Clips with upsells'};
    var12 = {'enableClips': true, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': true};
    var11['config'] = var12;
    var10[1] = var11;
    var11 = {'id': 99, 'label': 'Clips 4 da Developerz'};
    var12 = {'enableClips': true, 'ignorePlatformRestriction': true, 'showClipsHeaderEntrypoint': true};
    var11['config'] = var12;
    var10[2] = var11;
    var5['treatments'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot5 = var5;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2023-09_clips_nitro_early_access', 'label': 'Clips (Nitro EA)'};
    var10 = {'enableClips': false, 'enablePremiumEarlyAccessAnnouncementCoachmark': false, 'enablePremiumEarlyAccessGoLiveRoadblock': false};
    var4['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Clips Nitro EA Upsells Visible'};
    var10 = {'enableClips': false, 'enablePremiumEarlyAccessAnnouncementCoachmark': true, 'enablePremiumEarlyAccessGoLiveRoadblock': true};
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Clips Enabled (Nitro)'};
    var12 = {'enableClips': true, 'enablePremiumEarlyAccessAnnouncementCoachmark': true, 'enablePremiumEarlyAccessGoLiveRoadblock': false};
    var11['config'] = var12;
    var10[1] = var11;
    var4['treatments'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/clips/ClipsExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ClipsExperiment'] = var5;
    var3['ClipsPremiumEarlyAccessExperiment'] = var4;
    var4 = function areClipsEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = _closure1_slot2;
            var1 = var2.bind(var7)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
            return var1;
case 2:
            var6 = _closure1_slot6;
            var4 = var6.getCurrentConfig;
            var3 = {};
            var2 = 'areClipsEnabled';
            var3['location'] = var2;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.enableClips;
            var9 = _closure1_slot5;
            var6 = var9.getCurrentConfig;
            var4 = {};
            var4['location'] = var2;
            var3 = {};
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var9)(var4, var3);
            var4 = var3.enableClips;
            var6 = _closure1_slot3;
            var3 = var6.isDecoupledGameClippingEnabled;
            var3 = var3.bind(var6)();
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var5 = var9[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.getCurrentConfig;
            var5 = {};
            var5['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = var2.enableViewerClipping;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4;
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3;
case 6:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['areClipsEnabled'] = var4;
    var4 = function useEnableClips() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 4;
            var1 = var10[var1];
            var7 = undefined;
            var2 = var8.bind(var7)(var1);
            var1 = _closure1_slot2;
            var2 = var2.bind(var7)(var1);
            var11 = _closure1_slot6;
            var6 = var11.useExperiment;
            var5 = {};
            var3 = 'useEnableClips';
            var5['location'] = var3;
            var1 = {};
            var9 = false;
            var1['autoTrackExposure'] = var9;
            var1 = var6.bind(var11)(var5, var1);
            var5 = var1.enableClips;
            var12 = _closure1_slot5;
            var11 = var12.useExperiment;
            var6 = {};
            var6['location'] = var3;
            var1 = {};
            var1['autoTrackExposure'] = var9;
            var1 = var11.bind(var12)(var6, var1);
            var1 = var1.enableClips;
            var6 = _closure1_slot3;
            var4 = var6.isDecoupledGameClippingEnabled;
            var4 = var4.bind(var6)();
            var6 = 5;
            var6 = var10[var6];
            var8 = var8.bind(var7)(var6);
            var7 = var8.useExperiment;
            var6 = {};
            var6['location'] = var3;
            var3 = {};
            var3['autoTrackExposure'] = var9;
            var3 = var7.bind(var8)(var6, var3);
            var3 = var3.enableViewerClipping;
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var5;
case 10:
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var4;
case 12:
            if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var3;
case 14:
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['useEnableClips'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.autoTrackExposure;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot2;
            var1 = var3.bind(var4)(var1);
            var5 = _closure1_slot6;
            var4 = var5.useExperiment;
            var3 = {};
            var2 = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
            var3['location'] = var2;
            var2 = {};
            if(!var6) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var6 = var1;
case 18:
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var2 = var2.enablePremiumEarlyAccessGoLiveRoadblock;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = var2;
case 20:
            return var1;
        }
    };
    var3['useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = var1.autoTrackExposure;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot2;
            var1 = var3.bind(var4)(var1);
            var5 = _closure1_slot6;
            var4 = var5.useExperiment;
            var3 = {};
            var2 = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
            var3['location'] = var2;
            var2 = {};
            if(!var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var6 = var1;
case 18:
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var2 = var2.enablePremiumEarlyAccessAnnouncementCoachmark;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var1 = var2;
case 20:
            return var1;
        }
    };
    var3['useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark'] = var4;
    var2 = function isUserPremiumTypeForClipsEarlyAccess(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.isPremiumAtLeast;
        var2 = arg1;
        var2 = var2.premiumType;
        var1 = _closure1_slot4;
        var1 = var1.TIER_2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['isUserPremiumTypeForClipsEarlyAccess'] = var2;
    return var1;
})();