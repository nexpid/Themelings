// app/modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRequiredLinkedLobbyApplicationAuthorization(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = null;
            var3 = var5 != var2;
            var7 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.require_application_authorization;
            var7 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var7 = var2.application_id;
case 2:
            var _closure2_slot0 = var7;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 3;
            var2 = var12[var6];
            var11 = undefined;
            var9 = var10.bind(var11)(var2);
            var4 = var9.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.getFetchState;
                var2 = var2.bind(var4)();
                var1['authorizationsFetchState'] = var2;
                var3 = var4.getNewestTokenForApplication;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1['applicationOAuth2Token'] = var2;
                return var1;
            };
            var2 = var4.bind(var9)(var3, var2);
            var9 = var2.authorizationsFetchState;
            var _closure2_slot1 = var9;
            var2 = var2.applicationOAuth2Token;
            var3 = var12[var6];
            var15 = var10.bind(var11)(var3);
            var14 = var15.useStateFromStores;
            var4 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var4;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getApplication;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var14.bind(var15)(var13, var3);
            var _closure2_slot2 = var3;
            var6 = var12[var6];
            var12 = var10.bind(var11)(var6);
            var10 = var12.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getApplication;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure2_slot2;
                    var1 = var4.parentId;
case 5:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var4 = var10.bind(var12)(var6, var4);
            var _closure2_slot3 = var4;
            var10 = _closure1_slot3;
            var12 = new Array(2);
            var12[0] = var9;
            var12[1] = var7;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 3:
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot6;
                    var2 = var2.NOT_FETCHED;
                    var1 = var3 === var2;
case 7:
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetch;
                    var1 = var1.bind(var2)();
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6, var12);
            var12 = new Array(4);
            var12[0] = var7;
            var12[1] = var2;
            var12[2] = var9;
            var12[3] = var3;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 3:
                    var3 = _closure2_slot2;
                    var2 = var4 == var3;
case 10:
                    if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot6;
                    var3 = var3.FETCHED;
                    var2 = var4 === var3;
case 11:
                    if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchApplications;
                    var1 = _closure2_slot0;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6, var12);
            var6 = new Array(3);
            var6[0] = var3;
            var6[1] = var9;
            var6[2] = var4;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 15; continue _fun0005 }
case 3:
                    var3 = _closure2_slot2;
                    var3 = var3.parentId;
                    var2 = var4 != var3;
case 15:
                    if(!var2) { _fun0005_ip = 5; continue _fun0005 }
case 16:
                    var3 = _closure2_slot3;
                    var2 = var4 == var3;
case 5:
                    if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot6;
                    var3 = var3.FETCHED;
                    var2 = var4 === var3;
case 17:
                    if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchApplications;
                    var1 = _closure2_slot2;
                    var1 = var1.parentId;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var1, var6);
            var6 = var5 != var3;
            if(!var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = var3.parentId;
            var1 = var5 == var1;
            if(var1) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var1 = var5 != var4;
case 23:
            var6 = var1;
case 21:
            var1 = {};
            var7 = var5 != var7;
            if(!var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var8 = _closure1_slot6;
            var8 = var8.FETCHED;
            var8 = var9 !== var8;
            if(var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var8 = var5 == var3;
case 27:
            if(var8) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = !var6;
case 29:
            var7 = var8;
case 25:
            var1['showLinkedLobbyApplicationLoadingIndicator'] = var7;
            var7 = var5 == var2;
            var2 = null;
            if(!var7) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var7 = var5 != var3;
            var2 = null;
            if(!var7) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var2 = null;
            if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 34:
            if(!(var5 != var4)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = var4;
case 35:
            var2 = var3;
case 31:
            var1['requiredLinkedLobbyApplication'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();