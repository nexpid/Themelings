// discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = metroImportDefault;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var4 = function isThrottled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot4;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot4;
            var3 = var2[var3];
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 > var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var5 = 0;
    var8 = var7[var5];
    var1 = undefined;
    var8 = var6.bind(var1)(var8);
    var10 = var8.analyticsTrackingStoreMaker;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticsActionHandlers;
    var5 = 1;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.ImpressionTypes;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ImpressionGroups;
    var11 = {};
    var _closure1_slot4 = var11;
    var11 = {};
    var _closure1_slot5 = var11;
    var11 = 5;
    var11 = var7[var11];
    var13 = var6.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = '../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var11 = 6;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.encodeProperties;
    var3['encodeProperties'] = var11;
    var3['analyticsTrackingStoreMaker'] = var10;
    var3['AnalyticsActionHandlers'] = var9;
    var3['ImpressionTypes'] = var8;
    var3['ImpressionGroups'] = var5;
    var5 = 7;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.ImpressionNames;
    var3['ImpressionNames'] = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NetworkActionNames;
    var3['NetworkActionNames'] = var5;
    var5 = 8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.getSuperProperties;
    var3['getSuperProperties'] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.getSuperPropertiesBase64;
    var3['getSuperPropertiesBase64'] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.extendSuperProperties;
    var3['extendSuperProperties'] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.getOS;
    var3['getOS'] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.getDevice;
    var3['getDevice'] = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.getCampaignParams;
    var3['getCampaignParams'] = var5;
    var3['isThrottled'] = var4;
    var2 = function(arg1) {
        var2 = arg1;
        var3 = var2.addBreadcrumb;
        var _closure2_slot0 = var3;
        var3 = var2.analyticEventConfigs;
        var _closure2_slot1 = var3;
        var5 = var2.dispatcher;
        var4 = var2.TRACK_ACTION_NAME;
        var6 = _closure1_slot1;
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var2 = var3.queueTrackingEventMaker;
        var2 = var2.bind(var3)(var5, var4);
        var _closure2_slot2 = var2;
        var1 = function track(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var4 = arguments[2];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = {};
case 4:
                var1 = _closure1_slot0;
                var1 = var1.isServerRendering;
                var8 = null;
                if(!(var8 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = _closure1_slot0;
                var2 = var1.isServerRendering;
                var1 = true;
                if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                var12 = var5;
                if(!(var8 == var12)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var12 = {};
case 9:
                var1 = _closure2_slot1;
                var1 = var1[var6];
                var11 = 'function';
                var10 = typeof var1;
                var7 = var1;
                if(!(var11 === var10)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var10 = var1.bind(var3)(var12);
                var11 = var8 != var10;
                var1 = null;
                if(!var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var1 = var10;
case 13:
                var7 = var1;
case 11:
                if(!(var8 != var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var1 = 'throttlePeriod';
                var1 = var1 in var7;
                if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var1 = 'throttlePercent';
                var1 = var1 in var7;
                if(var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var10 = _closure1_slot2;
                var11 = _closure1_slot3;
                var1 = 4;
                var1 = var11[var1];
                var11 = var10.bind(var3)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var10 = var1.concat;
                var1 = 'Unsupported analytics event config: ';
                var10 = var10.bind(var1)(var7);
                var1 = false;
                var1 = var11.bind(var3)(var1, var10);
                _fun0002_ip = 15; continue _fun0002;
case 19:
                var1 = global;
                var11 = var1.Math;
                var10 = var11.random;
                var11 = var10.bind(var11)();
                var10 = var7.throttlePercent;
                if(!(var11 > var10)) { _fun0002_ip = 15; continue _fun0002 }
case 21:
                var10 = var1.Promise;
                var1 = var10.resolve;
                var1 = var1.bind(var10)();
                return var1;
case 17:
                var11 = new Array(1);
                var11[0] = var6;
                var1 = var7.throttleKeys;
                var17 = var1.bind(var7)(var12);
                var16 = 1;
                var18 = var11;
                var1 = arraySpread(var18, var17, var16);
                var10 = var11.join;
                var1 = '_';
                var10 = var10.bind(var11)(var1);
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)(var10);
                if(var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var1 = var7.throttlePercent;
                var11 = 'number';
                var1 = typeof var1;
                if(!(var11 === var1)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var1 = global;
                var13 = var1.Math;
                var11 = var13.random;
                var13 = var11.bind(var13)();
                var11 = var7.throttlePercent;
                if(!(!(var13 > var11))) { _fun0002_ip = 26; continue _fun0002 }
case 24:
                var11 = var7.deduplicate;
                if(!var11) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var11 = _closure1_slot5;
                var13 = var11[var10];
                var14 = _closure1_slot2;
                var15 = _closure1_slot3;
                var11 = 3;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.bind(var3)(var13, var12);
                if(var11) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var11 = _closure1_slot5;
                var11[var10] = var12;
case 27:
                var9 = _closure1_slot4;
                var11 = global;
                var12 = var11.Date;
                var11 = var12.now;
                var11 = var11.bind(var12)();
                var7 = var7.throttlePeriod;
                var7 = var11 + var7;
                var9[var10] = var7;
case 15:
                var7 = _closure2_slot0;
                if(!(var8 != var7)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var7 = _closure2_slot0;
                var7 = var7.bind(var3)(var6);
case 31:
                var2 = _closure2_slot2;
                var2 = var2.bind(var3)(var6, var5, var4);
                return var2;
case 29:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var2 = var2.bind(var3)();
                return var2;
case 26:
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
case 22:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
case 8:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        return var1;
    };
    var3['trackMaker'] = var2;
    return var1;
})();