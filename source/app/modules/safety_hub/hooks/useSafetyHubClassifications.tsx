// app/modules/safety_hub/hooks/useSafetyHubClassifications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var7;
    var4 = function useSafetyHubClassifications() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getClassifications;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 4;
            var2 = var5[var1];
            var3 = undefined;
            var7 = var4.bind(var3)(var2);
            var6 = var7.extractTimestamp;
            var2 = arg2;
            var2 = var2.id;
            var2 = var6.bind(var7)(var2);
            var1 = var5[var1];
            var4 = var4.bind(var3)(var1);
            var3 = var4.extractTimestamp;
            var1 = arg1;
            var1 = var1.id;
            var1 = var3.bind(var4)(var1);
            var1 = var2 - var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ViolationType;
    var _closure1_slot6 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_hub/hooks/useSafetyHubClassifications.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useSafetyHubClassifications'] = var4;
    var4 = function useSafetyHubClassification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 3;
            var3 = var9[var2];
            var12 = undefined;
            var6 = var8.bind(var12)(var3);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getClassification;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4, var3);
            var _closure2_slot1 = var4;
            var3 = var9[var2];
            var11 = var8.bind(var12)(var3);
            var6 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getClassificationRequestState;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var11)(var5, var3);
            var _closure2_slot2 = var6;
            var3 = var9[var2];
            var13 = var8.bind(var12)(var3);
            var11 = var13.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getIsDsaEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var11.bind(var13)(var5, var3);
            var2 = var9[var2];
            var13 = var8.bind(var12)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getIsAppealEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var11.bind(var13)(var3, var2);
            var2 = 5;
            var2 = var9[var2];
            var8 = var8.bind(var12)(var2);
            var2 = var8.isGuildClassification;
            var2 = var2.bind(var8)(var4);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot6;
            var2 = var2.USER;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var4.guild_metadata;
            var9 = null;
            var11 = var9 == var8;
            var9 = undefined;
            if(var11) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var9 = var8.member_type;
case 5:
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var8 = 6;
            var8 = var13[var8];
            var8 = var11.bind(var12)(var8);
            var8 = var8.MemberType;
            var8 = var8.OWNER;
            if(!(var9 !== var8)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = _closure1_slot6;
            var8 = var8.GUILD_MEMBER;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var9 = _closure1_slot6;
            var8 = var9.GUILD_OWNER;
case 9:
            var2 = var8;
case 4:
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var7 = new Array(3);
            var7[0] = var10;
            var7[1] = var4;
            var7[2] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var1 === var3;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 == var5;
case 10:
                    if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 7;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getSafetyHubDataForClassification;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var7);
            var1 = {};
            var1['classification'] = var4;
            var1['classificationRequestState'] = var6;
            var1['isDsaEligible'] = var5;
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = null;
            var3 = var5 != var4;
case 14:
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var4.appeal_status;
            var4 = null;
            var3 = var4 == var5;
case 16:
            var1['isAppealEligible'] = var3;
            var1['violationType'] = var2;
            return var1;
        }
    };
    var3['useSafetyHubClassification'] = var4;
    var4 = function useActiveSafetyHubClassifications() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var3 = var3.bind(var2)();
        var2 = global;
        var2 = var2.Date;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = global;
            var3 = var1.Date;
            var1 = arg1;
            var4 = var1.max_expiration_time;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = _closure2_slot0;
            var1 = var2 > var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useActiveSafetyHubClassifications'] = var4;
    var4 = function useExpiredSafetyHubClassifications() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var3 = var3.bind(var2)();
        var2 = global;
        var2 = var2.Date;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = global;
            var3 = var1.Date;
            var1 = arg1;
            var4 = var1.max_expiration_time;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = _closure2_slot0;
            var1 = var2 <= var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useExpiredSafetyHubClassifications'] = var4;
    var2 = function useSafetyHubAppealSignal() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getAppealSignal;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSafetyHubAppealSignal'] = var2;
    return var1;
})();