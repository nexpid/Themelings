// app/modules/experiments/ExperimentManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var4 = 0;
    var5 = var7[var4];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.registerExperiment;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ExperimentTypes;
    var _closure1_slot4 = var5;
    var4 = var4.ExposureTypes;
    var4 = {};
    var5 = 'legacy';
    var4['LEGACY'] = var5;
    var5 = 'apex';
    var4['APEX'] = var5;
    var _closure1_slot5 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/ExperimentManager.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function trackExposureToExperiment(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg3;
            var4 = _closure1_slot2;
            var3 = var4.trackExposure;
            var2 = {};
            var1 = arg1;
            var2['experimentId'] = var1;
            var1 = arg2;
            var2['descriptor'] = var1;
            var5 = null;
            var8 = var5 == var6;
            var1 = undefined;
            var7 = undefined;
            if(var8) { _fun0001_ip = 52; continue _fun0001 }
 47:
            var7 = var6.location;
 52:
            var2['location'] = var7;
            var8 = var5 == var6;
            var7 = undefined;
            if(var8) { _fun0001_ip = 71; continue _fun0001 }
 65:
            var7 = var6.analyticsLocations;
 71:
            var2['location_stack'] = var7;
            var8 = var5 == var6;
            var7 = undefined;
            if(var8) { _fun0001_ip = 91; continue _fun0001 }
 85:
            var7 = var6.fingerprint;
 91:
            var2['fingerprint'] = var7;
            var8 = var5 == var6;
            var7 = undefined;
            if(var8) { _fun0001_ip = 111; continue _fun0001 }
 105:
            var7 = var6.excluded;
 111:
            var2['excluded'] = var7;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 131; continue _fun0001 }
 125:
            var5 = var6.exposureType;
 131:
            var2['exposureType'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['trackExposureToExperiment'] = var5;
    var5 = function registerUserExperiment(arg1) {
        var1 = arg1;
        var2 = var1.id;
        var7 = var1.title;
        var6 = var1.description;
        var5 = var1.buckets;
        var1 = var1.commonTriggerPoint;
        var4 = _closure1_slot3;
        var3 = {};
        var3['experimentId'] = var2;
        var8 = _closure1_slot4;
        var8 = var8.USER;
        var3['experimentType'] = var8;
        var3['title'] = var7;
        var3['description'] = var6;
        var3['buckets'] = var5;
        var3['commonTriggerPoint'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = {};
        var1['id'] = var2;
        return var1;
    };
    var3['registerUserExperiment'] = var5;
    var5 = function registerGuildExperiment(arg1) {
        var1 = arg1;
        var2 = var1.id;
        var7 = var1.title;
        var6 = var1.description;
        var5 = var1.buckets;
        var1 = var1.commonTriggerPoint;
        var4 = _closure1_slot3;
        var3 = {};
        var3['experimentId'] = var2;
        var8 = _closure1_slot4;
        var8 = var8.GUILD;
        var3['experimentType'] = var8;
        var3['title'] = var7;
        var3['description'] = var6;
        var3['buckets'] = var5;
        var3['commonTriggerPoint'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = {};
        var1['id'] = var2;
        return var1;
    };
    var3['registerGuildExperiment'] = var5;
    var3['ExperimentSystem'] = var4;
    var2 = function overrideBucket(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var5 = arg3;
            var2 = _closure1_slot5;
            var2 = var2.LEGACY;
            if(!(var3 !== var2)) { _fun0002_ip = 159; continue _fun0002 }
 29:
            var2 = _closure1_slot5;
            var2 = var2.APEX;
            if(!(var3 === var2)) { _fun0002_ip = 223; continue _fun0002 }
 46:
            var2 = null;
            if(!(var2 != var5)) { _fun0002_ip = 108; continue _fun0002 }
 52:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var3);
            var3 = var6.dispatch;
            var2 = {};
            var7 = 'APEX_EXPERIMENT_OVERRIDE_CREATE';
            var2['type'] = var7;
            var2['experimentName'] = var4;
            var2['variantId'] = var5;
            var2 = var3.bind(var6)(var2);
            _fun0002_ip = 223; continue _fun0002;
 108:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var3);
            var3 = var6.dispatch;
            var2 = {};
            var7 = 'APEX_EXPERIMENT_OVERRIDE_DELETE';
            var2['type'] = var7;
            var2['experimentName'] = var4;
            var2 = var3.bind(var6)(var2);
            _fun0002_ip = 223; continue _fun0002;
 159:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'EXPERIMENT_OVERRIDE_BUCKET';
            var1['type'] = var6;
            var1['experimentId'] = var4;
            var4 = null;
            var6 = var4 != var5;
            if(!var6) { _fun0002_ip = 213; continue _fun0002 }
 210:
            var4 = var5;
 213:
            var1['experimentBucket'] = var4;
            var1 = var2.bind(var3)(var1);
 223:
            var1 = undefined;
            return var1;
        }
    };
    var3['overrideBucket'] = var2;
    return var1;
})();