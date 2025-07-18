// app/modules/user_settings/DefaultDMSettingsExperiement.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var9[var4];
    var1 = undefined;
    var7 = var8.bind(var1)(var5);
    var6 = var7.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-02_dm_defaults_new_users', 'label': 'Default DM Settings - New Users'};
    var10 = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'DM Off by Default'};
    var10 = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Message Reqeust On by Default'};
    var12 = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    var11['config'] = var12;
    var10[1] = var11;
    var5['treatments'] = var10;
    var6 = var6.bind(var7)(var5);
    var _closure1_slot2 = var6;
    var4 = var9[var4];
    var7 = var8.bind(var1)(var4);
    var5 = var7.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-02_dm_defaults', 'label': 'Default DM Settings'};
    var10 = {'enabled': false, 'dmOffByDefault': false, 'messageRequestOnByDefault': false};
    var4['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'DM Off by Default'};
    var10 = {'enabled': true, 'dmOffByDefault': true, 'messageRequestOnByDefault': false};
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Message Reqeust On by Default'};
    var12 = {'enabled': true, 'dmOffByDefault': false, 'messageRequestOnByDefault': true};
    var11['config'] = var12;
    var10[1] = var11;
    var4['treatments'] = var10;
    var5 = var5.bind(var7)(var4);
    var _closure1_slot3 = var5;
    var4 = function isEligibleForMessageRequestOnByDefault(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = _closure1_slot3;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var5.bind(var6)(var3, var1);
            var7 = _closure1_slot2;
            var6 = var7.getCurrentConfig;
            var5 = {};
            var5['location'] = var4;
            var3 = {};
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            var1 = var1.messageRequestOnByDefault;
            if(var1) { _fun0001_ip = 81; continue _fun0001 }
 75:
            var1 = var3.messageRequestOnByDefault;
 81:
            if(var1) { _fun0001_ip = 117; continue _fun0001 }
 84:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isEligibleForSettingsDefaultsAggregate;
            var1 = var2.bind(var3)(var4);
 117:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_settings/DefaultDMSettingsExperiement.tsx';
    var7 = var8.bind(var9)(var7);
    var3['DMDefaultsNewUsers'] = var6;
    var3['DMDefaults'] = var5;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var7 = _closure1_slot3;
            var5 = var7.useExperiment;
            var4 = {};
            var4['location'] = var2;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var5.bind(var7)(var4, var1);
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var1.dmOffByDefault;
            if(var1) { _fun0002_ip = 81; continue _fun0002 }
 75:
            var1 = var2.dmOffByDefault;
 81:
            return var1;
        }
    };
    var3['useIsEligibleForDMDefaultOff'] = var5;
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var7 = _closure1_slot3;
            var5 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var2;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var5.bind(var7)(var4, var1);
            var5 = _closure1_slot2;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var1.dmOffByDefault;
            if(var1) { _fun0003_ip = 81; continue _fun0003 }
 75:
            var1 = var2.dmOffByDefault;
 81:
            return var1;
        }
    };
    var3['isEligibleForDMDefaultOff'] = var5;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot3;
            var4 = var6.useExperiment;
            var3 = {};
            var3['location'] = var5;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var6)(var3, var1);
            var7 = _closure1_slot2;
            var6 = var7.useExperiment;
            var4 = {};
            var4['location'] = var5;
            var3 = {};
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.useIsEligibleForSettingsDefaultsAggregate;
            var2 = var2.bind(var4)(var5);
            var1 = var1.messageRequestOnByDefault;
            if(var1) { _fun0004_ip = 114; continue _fun0004 }
 108:
            var1 = var3.messageRequestOnByDefault;
 114:
            if(var1) { _fun0004_ip = 120; continue _fun0004 }
 117:
            var1 = var2;
 120:
            return var1;
        }
    };
    var3['useIsEligibleForMessageRequestOnByDefault'] = var5;
    var3['isEligibleForMessageRequestOnByDefault'] = var4;
    var2 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.shouldShowTiggerPawtect;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0005_ip = 51; continue _fun0005 }
 38:
            var3 = _closure1_slot4;
            var2 = 'shouldAgeVerifyForDMDefaultOff';
            var1 = var3.bind(var4)(var2);
 51:
            return var1;
        }
    };
    var3['shouldAgeVerifyForDMDefaultOff'] = var2;
    return var1;
})();