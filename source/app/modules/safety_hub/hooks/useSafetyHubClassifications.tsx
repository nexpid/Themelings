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
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_hub/hooks/useSafetyHubClassifications.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useSafetyHubClassifications'] = var4;
    var4 = function useSafetyHubClassification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var14 = arg1;
            var _closure2_slot0 = var14;
            var11 = _closure1_slot0;
            var2 = _closure1_slot3;
            var3 = 3;
            var5 = var2[var3];
            var8 = undefined;
            var9 = var11.bind(var8)(var5);
            var7 = var9.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getClassification;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var9)(var6, var5);
            var _closure2_slot1 = var7;
            var5 = var2[var3];
            var10 = var11.bind(var8)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getClassificationRequestState;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var6, var5);
            var _closure2_slot2 = var10;
            var5 = var2[var3];
            var12 = var11.bind(var8)(var5);
            var9 = var12.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getIsDsaEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var9.bind(var12)(var6, var5);
            var3 = var2[var3];
            var12 = var11.bind(var8)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getIsAppealEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var12)(var5, var3);
            var5 = 5;
            var5 = var2[var5];
            var12 = var11.bind(var8)(var5);
            var9 = var12.useIsSafetyHubGuildViolationInAppAppealsEnabled;
            var5 = 'classification_detail';
            var5 = var9.bind(var12)(var5);
            var9 = 6;
            var2 = var2[var9];
            var11 = var11.bind(var8)(var2);
            var2 = var11.isGuildClassification;
            var2 = var2.bind(var11)(var7);
            if(var2) { _fun0001_ip = 256; continue _fun0001 }
 244:
            var2 = _closure1_slot6;
            var2 = var2.USER;
            _fun0001_ip = 340; continue _fun0001;
 256:
            var11 = var7.guild_metadata;
            var12 = null;
            var13 = var12 == var11;
            var12 = undefined;
            if(var13) { _fun0001_ip = 279; continue _fun0001 }
 273:
            var12 = var11.member_type;
 279:
            var13 = _closure1_slot0;
            var15 = _closure1_slot3;
            var11 = 7;
            var11 = var15[var11];
            var11 = var13.bind(var8)(var11);
            var11 = var11.MemberType;
            var11 = var11.OWNER;
            if(!(var12 !== var11)) { _fun0001_ip = 327; continue _fun0001 }
 315:
            var11 = _closure1_slot6;
            var11 = var11.GUILD_MEMBER;
            _fun0001_ip = 337; continue _fun0001;
 327:
            var12 = _closure1_slot6;
            var11 = var12.GUILD_OWNER;
 337:
            var2 = var11;
 340:
            var13 = _closure1_slot4;
            var12 = var13.useEffect;
            var11 = new Array(3);
            var11[0] = var14;
            var11[1] = var7;
            var11[2] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var1 === var3;
                    if(!var3) { _fun0002_ip = 26; continue _fun0002 }
 16:
                    var5 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 == var5;
 26:
                    if(!var3) { _fun0002_ip = 67; continue _fun0002 }
 29:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 8;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getSafetyHubDataForClassification;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
 67:
                    return var1;
                }
            };
            var1 = var12.bind(var13)(var1, var11);
            var1 = {};
            var1['classification'] = var7;
            var1['classificationRequestState'] = var10;
            var1['isDsaEligible'] = var6;
            if(!var3) { _fun0001_ip = 404; continue _fun0001 }
 398:
            var6 = null;
            var3 = var6 != var7;
 404:
            if(!var3) { _fun0001_ip = 419; continue _fun0001 }
 407:
            var10 = var7.appeal_status;
            var6 = null;
            var3 = var6 == var10;
 419:
            if(!var3) { _fun0001_ip = 462; continue _fun0001 }
 422:
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var9];
            var6 = var6.bind(var8)(var4);
            var4 = var6.isGuildClassification;
            var4 = var4.bind(var6)(var7);
            var4 = !var4;
            if(var4) { _fun0001_ip = 459; continue _fun0001 }
 456:
            var4 = var5;
 459:
            var3 = var4;
 462:
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