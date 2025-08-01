// app/modules/user_settings/FriendRequestDefaultEveryoneOff.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var8[var4];
    var1 = undefined;
    var10 = var7.bind(var1)(var5);
    var9 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-01_friend_requests_alerts', 'label': 'Friend Request Setting Defaults'};
    var6 = {'enabled': false, 'bucket': 0};
    var5['defaultConfig'] = var6;
    var6 = {'id': 1, 'label': 'warning'};
    var11 = {'enabled': true, 'bucket': 1};
    var6['config'] = var11;
    var11 = new Array(2);
    var11[0] = var6;
    var12 = {'id': 2, 'label': 'defaults'};
    var6 = 2;
    var13 = {'enabled': true, 'bucket': 2};
    var12['config'] = var13;
    var11[1] = var12;
    var5['treatments'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot2 = var5;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var9 = var10.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-01_friend_requests_alerts_new_users', 'label': 'Friend Request Setting Defaults'};
    var11 = {'enabled': false, 'bucket': 0};
    var4['defaultConfig'] = var11;
    var12 = {'id': 1, 'label': 'warning'};
    var11 = {'enabled': true, 'bucket': 1};
    var12['config'] = var11;
    var11 = new Array(2);
    var11[0] = var12;
    var12 = {'id': 2, 'label': 'defaults'};
    var13 = {'enabled': true, 'bucket': 2};
    var12['config'] = var13;
    var11[1] = var12;
    var4['treatments'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot3 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/FriendRequestDefaultEveryoneOff.tsx';
    var6 = var7.bind(var8)(var6);
    var3['FriendRequestDefaultEveryoneOff'] = var5;
    var3['FriendRequestDefaultEveryoneOffNewUsers'] = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var2;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.bucket;
            var3 = 2;
            var1 = var3 === var1;
            if(var1) { _fun0001_ip = 92; continue _fun0001 }
 53:
            var6 = _closure1_slot3;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var4['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            var2 = var2.bucket;
            var1 = var3 === var2;
 92:
            return var1;
        }
    };
    var3['isEligibleForFriendRequestDefaults'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var9 = false;
            var1['autoTrackExposure'] = var9;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.bucket;
            var3 = 1;
            var1 = var3 === var1;
            if(var1) { _fun0002_ip = 92; continue _fun0002 }
 53:
            var8 = _closure1_slot3;
            var7 = var8.getCurrentConfig;
            var6 = {};
            var6['location'] = var4;
            var5 = {};
            var5['autoTrackExposure'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var5 = var5.bucket;
            var1 = var3 === var5;
 92:
            if(var1) { _fun0002_ip = 125; continue _fun0002 }
 95:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2[var3];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isEligibleForSettingsDefaultsAggregate;
            var1 = var2.bind(var3)(var4);
 125:
            return var1;
        }
    };
    var3['isEligibleForFriendRequestAlerts'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var7 = _closure1_slot2;
            var5 = var7.useExperiment;
            var4 = {};
            var4['location'] = var2;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var5.bind(var7)(var4, var1);
            var1 = var1.bucket;
            var5 = _closure1_slot3;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var3 = var2.bucket;
            var2 = 2;
            var1 = var2 === var1;
            if(var1) { _fun0003_ip = 92; continue _fun0003 }
 88:
            var1 = var2 === var3;
 92:
            return var1;
        }
    };
    var3['useIsEligibleForFriendRequestDefaults'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var6;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.bucket;
            var7 = _closure1_slot3;
            var5 = var7.useExperiment;
            var4 = {};
            var4['location'] = var6;
            var3 = {};
            var3['autoTrackExposure'] = var8;
            var3 = var5.bind(var7)(var4, var3);
            var4 = var3.bucket;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = 1;
            var5 = var2[var3];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var2 = var5.useIsEligibleForSettingsDefaultsAggregate;
            var2 = var2.bind(var5)(var6);
            var1 = var3 === var1;
            if(var1) { _fun0004_ip = 122; continue _fun0004 }
 118:
            var1 = var3 === var4;
 122:
            if(var1) { _fun0004_ip = 128; continue _fun0004 }
 125:
            var1 = var2;
 128:
            return var1;
        }
    };
    var3['useIsEligibleForFriendRequestAlerts'] = var2;
    return var1;
})();