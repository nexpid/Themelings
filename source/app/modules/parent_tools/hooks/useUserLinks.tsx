// app/modules/parent_tools/hooks/useUserLinks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useUserForLinkStatus(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 3;
        var7 = var6[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getLinkedUsers;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = var9.bind(var10)(var8, var7);
        var7 = global;
        var8 = var7.Object;
        var7 = var8.values;
        var9 = var7.bind(var8)(var9);
        var8 = var9.filter;
        var7 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var2.link_status;
                var2 = _closure2_slot0;
                var1 = var3 === var2;
case 2:
                return var1;
            }
        };
        var9 = var8.bind(var9)(var7);
        var8 = var9.sort;
        var7 = function(arg1, arg2) {
            var1 = global;
            var4 = var1.Date;
            var2 = arg1;
            var5 = var2.updated_at;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.getTime;
            var2 = var2.bind(var3)();
            var4 = var1.Date;
            var1 = arg2;
            var5 = var1.updated_at;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var1 = new var6[var4](var5, var4);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.getTime;
            var1 = var1.bind(var3)();
            var1 = var2 - var1;
            return var1;
        };
        var9 = var8.bind(var9)(var7);
        var8 = var9.map;
        var7 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var2 = var1.user_id;
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var1 = var2;
case 4:
                return var1;
            }
        };
        var9 = var8.bind(var9)(var7);
        var8 = var9.filter;
        var7 = function(arg1) {
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            return var1;
        };
        var7 = var8.bind(var9)(var7);
        var _closure2_slot1 = var7;
        var3 = var6[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure2_slot1;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot3;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.filter;
        var1 = function(arg1) {
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER;
    var _closure1_slot5 = var8;
    var8 = var5.FAMILY_CENTER_REQUEST_QR_CODE_URL;
    var _closure1_slot6 = var8;
    var8 = var5.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS;
    var _closure1_slot7 = var8;
    var8 = var5.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
    var _closure1_slot8 = var8;
    var8 = var5.PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER;
    var _closure1_slot9 = var8;
    var5 = var5.UserLinkStatus;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/hooks/useUserLinks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useUserForLinkStatus'] = var4;
    var4 = function() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getLinkedUsers;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var4.bind(var5)(var3, var2);
        var2 = global;
        var3 = var2.Object;
        var2 = var3.values;
        var3 = var2.bind(var3)(var4);
        var2 = var3.some;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                var3 = var2.link_status;
                var2 = _closure1_slot10;
                var2 = var2.ACTIVE;
                var1 = var3 === var2;
case 6:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useHasActiveLinks'] = var4;
    var4 = function useUserQRLinkUrl() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var4 = var7[var2];
            var5 = undefined;
            var10 = var6.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getLinkCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var9.bind(var10)(var8, var4);
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var6.bind(var7)(var2, var1);
            var7 = null;
            var6 = var7 == var4;
            var1 = null;
            if(var6) { _fun0004_ip = 7; continue _fun0004 }
case 8:
            var6 = var7 == var2;
            var1 = null;
            if(var6) { _fun0004_ip = 7; continue _fun0004 }
case 9:
            var3 = _closure1_slot6;
            var2 = var2.id;
            var1 = var3.bind(var5)(var2, var4);
case 7:
            return var1;
        }
    };
    var3['useUserQRLinkUrl'] = var4;
    var4 = function useHasMaxConnections() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = var1.bind(var5)();
            var4 = _closure1_slot11;
            var1 = _closure1_slot10;
            var1 = var1.ACTIVE;
            var1 = var4.bind(var5)(var1);
            if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 11:
            var2 = _closure1_slot8;
            _fun0005_ip = 12; continue _fun0005;
case 10:
            var2 = _closure1_slot7;
case 12:
            var1 = var1.length;
            var1 = var1 >= var2;
            return var1;
        }
    };
    var3['useHasMaxConnections'] = var4;
    var4 = function usePendingRequestCount() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var3 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var _closure2_slot0 = var3;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getLinkedUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var4, var1);
            var1 = null;
            var3 = var1 == var3;
            var1 = 0;
            if(var3) { _fun0006_ip = 13; continue _fun0006 }
case 14:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var4 = var3.bind(var4)(var5);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0007_ip = 6; continue _fun0007 }
case 3:
                    var4 = var2.link_status;
                    var3 = _closure1_slot10;
                    var3 = var3.PENDING;
                    var1 = var4 === var3;
case 6:
                    if(!var1) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var2.requestor_id;
                    var1 = var3 !== var2;
case 15:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = var2.length;
case 13:
            return var1;
        }
    };
    var3['usePendingRequestCount'] = var4;
    var4 = function useAcceptedRequestsCount() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var3 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getLinkedUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var4, var1);
            var1 = null;
            var3 = var1 == var3;
            var1 = 0;
            if(var3) { _fun0008_ip = 17; continue _fun0008 }
case 8:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var4 = var3.bind(var4)(var5);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0009_ip = 6; continue _fun0009 }
case 3:
                    var3 = var2.link_status;
                    var2 = _closure1_slot10;
                    var2 = var2.ACTIVE;
                    var1 = var3 === var2;
case 6:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = var2.length;
case 17:
            return var1;
        }
    };
    var3['useAcceptedRequestsCount'] = var4;
    var4 = function useActivityWindowTimeStamp(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var1 = var7.useSelectedTeenId;
            var1 = var1.bind(var7)();
            var _closure2_slot1 = var1;
            var1 = 3;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0011_ip = 6; continue _fun0011 }
case 18:
                    var3 = _closure1_slot4;
                    var2 = var3.getRangeStartTimestamp;
                    var1 = var2.bind(var3)();
case 6:
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var4, var1);
            var1 = null;
            var4 = var1 == var7;
            if(var4) { _fun0010_ip = 19; continue _fun0010 }
case 20:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var5 = var6.formatUserActivityTimestamp;
            var3 = global;
            var3 = var3.Date;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var11 = var4;
            var10 = var7;
            var3 = new var11[var3](var10, var9);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var4.getTime;
            var4 = var3.bind(var4)();
            var3 = function() {
                var1 = _closure2_slot0;
                return var1;
            };
            var2 = 7;
            var1 = var5.bind(var6)(var4, var3, var2);
case 19:
            return var1;
        }
    };
    var3['useActivityWindowTimeStamp'] = var4;
    var2 = function useLinkTimestampText(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var7 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getLinkTimestamp;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var3.bind(var5)(var2, var1);
            var1 = null;
            var2 = var1 != var7;
            if(!var2) { _fun0012_ip = 21; continue _fun0012 }
case 22:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var4 = var5.formatLinkTimestamp;
            var2 = global;
            var3 = var2.Date;
            var2 = var3.parse;
            var3 = var2.bind(var3)(var7);
            var2 = _closure1_slot10;
            var7 = var2.PENDING;
            var2 = arg2;
            if(!(var2 !== var7)) { _fun0012_ip = 23; continue _fun0012 }
case 24:
            var2 = _closure1_slot5;
            _fun0012_ip = 25; continue _fun0012;
case 23:
            var2 = _closure1_slot9;
case 25:
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['useLinkTimestampText'] = var2;
    return var1;
})();