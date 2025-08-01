// app/modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyHubAnalyticsActionSource;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 4;
            var2 = var5[var9];
            var8 = undefined;
            var10 = var4.bind(var8)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getAppealClassificationId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var10)(var6, var2);
            var _closure2_slot0 = var7;
            var2 = 5;
            var2 = var5[var2];
            var5 = var4.bind(var8)(var2);
            var4 = var5.useSafetyHubClassification;
            var6 = null;
            var2 = var7;
            if(!(var6 == var2)) { _fun0001_ip = 92; continue _fun0001 }
 88:
            var2 = _closure1_slot6;
 92:
            var6 = var4.bind(var5)(var2);
            var _closure2_slot1 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var10 = var5.bind(var8)(var2);
            var2 = var10.useSafetyHubAccountStanding;
            var2 = var2.bind(var10)();
            var _closure2_slot2 = var2;
            var4 = var4[var9];
            var9 = var5.bind(var8)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getIsDsaEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var8.bind(var9)(var5, var4);
            var _closure2_slot3 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var8 = var2.state;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot7;
                    var3 = var2.SAFETY_HUB_ACTION;
                    var2 = {};
                    var6 = arg1;
                    var2['action'] = var6;
                    var8 = _closure2_slot2;
                    var8 = var8.state;
                    var2['account_standing'] = var8;
                    var9 = _closure2_slot0;
                    var8 = null;
                    var9 = var8 != var9;
                    if(!var9) { _fun0002_ip = 107; continue _fun0002 }
 79:
                    var9 = global;
                    var10 = var9.Number;
                    var9 = _closure2_slot0;
                    var10 = var10.bind(var1)(var9);
                    var9 = new Array(1);
                    var9[0] = var10;
                    var8 = var9;
 107:
                    var2['classification_ids'] = var8;
                    var7 = _closure1_slot5;
                    var7 = var7.AppealIngestion;
                    var2['source'] = var7;
                    var7 = _closure2_slot3;
                    var2['is_dsa_eligible'] = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.violationType;
                    var2['violation_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useEmitAppealIngestionEvent'] = var2;
    return var1;
})();