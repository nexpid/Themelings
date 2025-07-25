// app/modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
            var2 = arg1;
            var5 = null;
            var3 = var5 != var2;
            var7 = null;
            if(!var3) { _fun0001_ip = 35; continue _fun0001 }
 16:
            var3 = var2.require_application_authorization;
            var7 = null;
            if(!var3) { _fun0001_ip = 35; continue _fun0001 }
 29:
            var7 = var2.application_id;
 35:
            var _closure2_slot0 = var7;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 3;
            var2 = var12[var6];
            var11 = undefined;
            var13 = var10.bind(var11)(var2);
            var9 = var13.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getFetchState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var13)(var4, var3);
            var _closure2_slot1 = var9;
            var3 = var12[var6];
            var13 = var10.bind(var11)(var3);
            var4 = var13.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 75; continue _fun0002 }
 18:
                    var3 = _closure1_slot5;
                    var2 = var3.getApps;
                    var6 = var2.bind(var3)();
                    var3 = var4 == var6;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 63; continue _fun0002 }
 44:
                    var5 = var6.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.application;
                        var2 = var1.id;
                        var1 = _closure2_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var3);
 63:
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 75; continue _fun0002 }
 72:
                    var1 = var2;
 75:
                    return var1;
                }
            };
            var2 = var4.bind(var13)(var3, var2);
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getApplication;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 41; continue _fun0003 }
 31:
                    var4 = _closure2_slot2;
                    var1 = var4.parentId;
 41:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 37; continue _fun0004 }
 16:
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot6;
                    var2 = var2.NOT_FETCHED;
                    var1 = var3 === var2;
 37:
                    if(!var1) { _fun0004_ip = 75; continue _fun0004 }
 40:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetch;
                    var1 = var1.bind(var2)();
 75:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 24; continue _fun0005 }
 16:
                    var3 = _closure2_slot2;
                    var2 = var4 == var3;
 24:
                    if(!var2) { _fun0005_ip = 48; continue _fun0005 }
 27:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot6;
                    var3 = var3.FETCHED;
                    var2 = var4 === var3;
 48:
                    if(!var2) { _fun0005_ip = 102; continue _fun0005 }
 51:
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
 102:
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0006_ip = 30; continue _fun0006 }
 16:
                    var3 = _closure2_slot2;
                    var3 = var3.parentId;
                    var2 = var4 != var3;
 30:
                    if(!var2) { _fun0006_ip = 41; continue _fun0006 }
 33:
                    var3 = _closure2_slot3;
                    var2 = var4 == var3;
 41:
                    if(!var2) { _fun0006_ip = 65; continue _fun0006 }
 44:
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot6;
                    var3 = var3.FETCHED;
                    var2 = var4 === var3;
 65:
                    if(!var2) { _fun0006_ip = 125; continue _fun0006 }
 68:
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
 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var1, var6);
            var6 = var5 != var3;
            if(!var6) { _fun0001_ip = 333; continue _fun0001 }
 313:
            var1 = var3.parentId;
            var1 = var5 == var1;
            if(var1) { _fun0001_ip = 330; continue _fun0001 }
 326:
            var1 = var5 != var4;
 330:
            var6 = var1;
 333:
            var1 = {};
            var7 = var5 != var7;
            if(!var7) { _fun0001_ip = 372; continue _fun0001 }
 342:
            var8 = _closure1_slot6;
            var8 = var8.FETCHED;
            var8 = var9 !== var8;
            if(var8) { _fun0001_ip = 363; continue _fun0001 }
 359:
            var8 = var5 == var3;
 363:
            if(var8) { _fun0001_ip = 369; continue _fun0001 }
 366:
            var8 = !var6;
 369:
            var7 = var8;
 372:
            var1['showLinkedLobbyApplicationLoadingIndicator'] = var7;
            var7 = var5 == var2;
            var2 = null;
            if(!var7) { _fun0001_ip = 410; continue _fun0001 }
 386:
            var7 = var5 != var3;
            var2 = null;
            if(!var7) { _fun0001_ip = 410; continue _fun0001 }
 395:
            var2 = null;
            if(!var6) { _fun0001_ip = 410; continue _fun0001 }
 400:
            if(!(var5 != var4)) { _fun0001_ip = 407; continue _fun0001 }
 404:
            var3 = var4;
 407:
            var2 = var3;
 410:
            var1['requiredLinkedLobbyApplication'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();