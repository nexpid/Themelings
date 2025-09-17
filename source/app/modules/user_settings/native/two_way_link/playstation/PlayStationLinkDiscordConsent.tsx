// app/modules/user_settings/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlayStationLinkModalScenes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PLAYSTATION_CLIENT_SCOPES;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PlayStationLinkDiscordConsent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.callbackCode;
            var10 = var2.callbackState;
            var12 = var2.platformType;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var6 = var2.bind(var3)();
            var _closure2_slot0 = var6;
            var5 = _closure1_slot2;
            var7 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.push;
                var1 = _closure1_slot3;
                var1 = var1.SUCCESS;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7 = var7.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function(arg1) {
                var4 = _closure2_slot0;
                var3 = var4.push;
                var1 = _closure1_slot3;
                var2 = var1.ERROR;
                var1 = {};
                var5 = arg1;
                var1['errorCode'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var6 = var3.bind(var5)(var1, var2);
            var1 = _closure1_slot4;
            var1 = var1.PLAYSTATION_STAGING;
            if(!(var12 !== var1)) { _fun0001_ip = 166; continue _fun0001 }
 132:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ConsoleOAuthApplications;
            var9 = var1.PLAYSTATION_APPLICATION_ID;
            _fun0001_ip = 198; continue _fun0001;
 166:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ConsoleOAuthApplications;
            var9 = var1.PLAYSTATION_STAGING_APPLICATION_ID;
 198:
            var1 = _closure1_slot4;
            var1 = var1.PLAYSTATION_STAGING;
            if(!(var12 !== var1)) { _fun0001_ip = 246; continue _fun0001 }
 212:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ConsoleAuthorizationRedirectURIs;
            var5 = var1.PLAYSTATION;
            _fun0001_ip = 278; continue _fun0001;
 246:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ConsoleAuthorizationRedirectURIs;
            var5 = var1.PLAYSTATION_STAGING;
 278:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 8;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TwoWayLinkDiscordConsent;
            var1 = {};
            var1['platformType'] = var12;
            var1['callbackCode'] = var11;
            var1['callbackState'] = var10;
            var1['clientId'] = var9;
            var8 = _closure1_slot5;
            var1['scopes'] = var8;
            var1['onNext'] = var7;
            var1['onError'] = var6;
            var1['redirectUri'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PlayStationLinkDiscordConsent'] = var2;
    return var1;
})();