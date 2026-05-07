// app/modules/ads/utils/AdDecisionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var4 = function resolveResponseTtl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 1000;
            var1 = var1 * var2;
            var3 = _closure1_slot0;
            if(!(var1 < var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var1 = _closure1_slot0;
case 6:
            return var1;
case 2:
            var1 = _closure1_slot0;
            return var1;
        }
    };
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var5);
    var1 = 0;
    var6 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var6);
    var5 = var5.Millis;
    var6 = var5.HOUR;
    var5 = 6;
    var5 = var5 * var6;
    var _closure1_slot0 = var5;
    var6 = 1;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/ads/utils/AdDecisionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['MAX_RESPONSE_TTL_MS'] = var5;
    var3['resolveResponseTtl'] = var4;
    var2 = function questAdDecisionFromAdDecision(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var3 = var1.fetchedAt;
            var4 = var1.requestId;
            var6 = var1.adCreativeId;
            var1 = {};
            var5 = null;
            var1['questId'] = var5;
            var1['adCreativeId'] = var6;
            var1['fetchedAt'] = var3;
            var7 = _closure1_slot1;
            var3 = var2.response_ttl_seconds;
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var1['ttlMillis'] = var3;
            var3 = {};
            var8 = var2.ad_identifiers;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = var8.ad_id;
case 7:
            var3['ad_id'] = var7;
            var8 = var2.ad_identifiers;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = var8.adset_id;
case 9:
            var3['adset_id'] = var7;
            var8 = var2.ad_identifiers;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var8.ad_set_id;
case 11:
            var3['ad_set_id'] = var7;
            var8 = var2.ad_identifiers;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var7 = var8.campaign_id;
case 13:
            var3['campaign_id'] = var7;
            var8 = var2.ad_identifiers;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var8.creative_id;
case 15:
            var3['creative_id'] = var7;
            var7 = var2.ad_identifiers;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = var7.creative_type;
case 17:
            var3['creative_type'] = var6;
            var3['decision_id'] = var4;
            var4 = var2.ad_identifiers;
            var4 = var5 != var4;
            var3['is_targeted'] = var4;
            var1['adDecisionData'] = var3;
            var3 = var2.ad_context;
            var1['adContext'] = var3;
            var3 = var2.metadata_sealed;
            var1['metadataSealed'] = var3;
            var2 = var2.traffic_metadata_sealed;
            var1['trafficMetadataSealed'] = var2;
            return var1;
        }
    };
    var3['questAdDecisionFromAdDecision'] = var2;
    return var1;
})();