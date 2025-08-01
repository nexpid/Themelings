// app/modules/user_profile/UserProfileAnalyticsContext.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var7 = var8.createContext;
    var4 = null;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileAnalyticsContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.value;
            var5 = var1.children;
            var3 = var1.openedAt;
            var _closure2_slot0 = var3;
            var3 = var1.fetchStartedAt;
            var _closure2_slot1 = var3;
            var3 = var1.fetchEndedAt;
            var _closure2_slot2 = var3;
            var9 = var1.isLoaded;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 59; continue _fun0001 }
 57:
            var9 = false;
 59:
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.analyticsLocations;
            var8 = _closure1_slot3;
            var7 = var8.useRef;
            var7 = var7.bind(var8)(var4);
            _closure2_slot4 = var7;
            var7 = {};
            var7['analyticsLocations'] = var3;
            var7['value'] = var6;
            _closure2_slot5 = var7;
            var3 = var8.useRef;
            var3 = var3.bind(var8)(var7);
            _closure2_slot6 = var3;
            var7 = var8.useEffect;
            var3 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot5;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var7.bind(var8)(var3);
            var7 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var11 = var1.bind(var2)();
                    var1 = _closure2_slot4;
                    var1 = var1.current;
                    var10 = null;
                    var1 = var10 == var1;
                    if(!var1) { _fun0002_ip = 46; continue _fun0002 }
 38:
                    var2 = _closure2_slot0;
                    var1 = var10 != var2;
 46:
                    if(!var1) { _fun0002_ip = 67; continue _fun0002 }
 49:
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var1 = var11 - var1;
                    var2['current'] = var1;
 67:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 305; continue _fun0002 }
 77:
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    var5 = var1.analyticsLocations;
                    var4 = var1.value;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var7 = var3[var1];
                    var9 = undefined;
                    var12 = var2.bind(var9)(var7);
                    var8 = var12.trackUserProfileAction;
                    var7 = {};
                    var13 = 'VIEW';
                    var7['action'] = var13;
                    var7['analyticsLocations'] = var5;
                    var15 = var7;
                    var14 = var4;
                    var13 = copyDataProperties(var15, var14);
                    var7 = var8.bind(var12)(var7);
                    var1 = var3[var1];
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.maybeTrackUserProfileUiViewed;
                    var1 = {};
                    var7 = 'USER_PROFILE';
                    var1['profileUi'] = var7;
                    var7 = _closure2_slot4;
                    var7 = var7.current;
                    var1['timeToInteractiveMs'] = var7;
                    var7 = _closure2_slot0;
                    var8 = var10 != var7;
                    var7 = undefined;
                    if(!var8) { _fun0002_ip = 219; continue _fun0002 }
 211:
                    var8 = _closure2_slot0;
                    var7 = var11 - var8;
 219:
                    var1['timeToLoadMs'] = var7;
                    var7 = _closure2_slot1;
                    var8 = var10 != var7;
                    var7 = undefined;
                    if(!var8) { _fun0002_ip = 262; continue _fun0002 }
 237:
                    var8 = _closure2_slot2;
                    var8 = var10 != var8;
                    var7 = undefined;
                    if(!var8) { _fun0002_ip = 262; continue _fun0002 }
 250:
                    var9 = _closure2_slot2;
                    var8 = _closure2_slot1;
                    var7 = var9 - var8;
 262:
                    var1['timeToFetchMs'] = var7;
                    var7 = _closure2_slot0;
                    var1['viewStartedAt'] = var7;
                    var6 = _closure2_slot1;
                    var1['fetchStartedAt'] = var6;
                    var1['analyticsLocations'] = var5;
                    var15 = var1;
                    var14 = var4;
                    var4 = copyDataProperties(var15, var14);
                    var1 = var2.bind(var3)(var1);
 305:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot4;
            var1 = _closure1_slot5;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UserProfileAnalyticsProvider'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var12 = var2.layout;
            var _closure2_slot0 = var12;
            var11 = var2.userId;
            var _closure2_slot1 = var11;
            var10 = var2.guildId;
            var _closure2_slot2 = var10;
            var9 = var2.channelId;
            var _closure2_slot3 = var9;
            var8 = var2.messageId;
            var _closure2_slot4 = var8;
            var7 = var2.roleId;
            var _closure2_slot5 = var7;
            var6 = var2.sourceSessionId;
            var _closure2_slot6 = var6;
            var5 = var2.showGuildProfile;
            var13 = undefined;
            if(!(var5 === var13)) { _fun0003_ip = 85; continue _fun0003 }
 83:
            var5 = true;
 85:
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var13;
            var14 = _closure1_slot3;
            var4 = var14.useContext;
            var3 = _closure1_slot5;
            var3 = var4.bind(var14)(var3);
            var4 = null;
            var4 = var4 == var3;
            var13 = undefined;
            if(var4) { _fun0003_ip = 132; continue _fun0003 }
 126:
            var13 = var3.sessionId;
 132:
            _closure2_slot8 = var13;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(9);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var2[5] = var8;
            var2[6] = var7;
            var2[7] = var6;
            var2[8] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.v4;
                    var2 = var2.bind(var3)();
                    var1['sessionId'] = var2;
                    var4 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0004_ip = 61; continue _fun0004 }
 55:
                    var3 = _closure2_slot8;
                    _fun0004_ip = 65; continue _fun0004;
 61:
                    var3 = _closure2_slot6;
 65:
                    var1['sourceSessionId'] = var3;
                    var3 = _closure2_slot0;
                    var1['layout'] = var3;
                    var3 = _closure2_slot1;
                    var1['userId'] = var3;
                    var3 = _closure2_slot2;
                    var1['guildId'] = var3;
                    var3 = _closure2_slot3;
                    var1['channelId'] = var3;
                    var3 = _closure2_slot4;
                    var1['messageId'] = var3;
                    var3 = _closure2_slot5;
                    var1['roleId'] = var3;
                    var2 = _closure2_slot7;
                    var1['showGuildProfile'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useCreateUserProfileAnalyticsContext'] = var4;
    var2 = function() {
        var5 = _closure1_slot3;
        var4 = var5.useContext;
        var3 = _closure1_slot5;
        var7 = var4.bind(var5)(var3);
        var _closure2_slot0 = var7;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var6 = var1.analyticsLocations;
        var _closure2_slot1 = var6;
        var1 = {};
        var1['context'] = var7;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 81; continue _fun0005 }
 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackUserProfileAction;
                var1 = {};
                var5 = _closure2_slot1;
                var1['analyticsLocations'] = var5;
                var6 = _closure2_slot0;
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var6 = arg1;
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var1 = var2.bind(var3)(var1);
 81:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['trackUserProfileAction'] = var2;
        return var1;
    };
    var3['useUserProfileAnalyticsContext'] = var2;
    return var1;
})();