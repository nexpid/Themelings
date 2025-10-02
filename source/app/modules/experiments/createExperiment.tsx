// app/modules/experiments/createExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getExperimentDescriptor(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var2 = 'guild';
            var1 = arg1;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot7;
            var1 = var2.getUserExperimentDescriptor;
            var1 = var1.bind(var2)(var5);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot7;
            var3 = var4.getGuildExperimentDescriptor;
            var2 = arg3;
            var2 = var2.guildId;
            var1 = var3.bind(var4)(var5, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getConfig(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arg3;
            var1 = arg4;
            var3 = null;
            if(!(var3 != var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var1.aaMode;
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 5:
            var4 = var5.get;
            var1 = arg2;
            var4 = var4.bind(var5)(var1);
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var4.config;
case 8:
            if(!(var3 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 10:
            var1 = var2.defaultConfig;
case 4:
            _fun0002_ip = 11; continue _fun0002;
case 7:
            var1 = var2.defaultConfig;
case 11:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useState;
    var _closure1_slot4 = var8;
    var4 = var4.useEffect;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ExperimentBuckets;
    var _closure1_slot8 = var7;
    var4 = var4.ExposureTypes;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/createExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createExperiment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = function trackAutoExposure(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg1;
                    var4 = arguments[1];
                    var3 = arguments[3];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0004_ip = 12; continue _fun0004 }
case 6:
                    var4 = {};
case 12:
                    if(!(var3 === var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var3 = null;
case 13:
                    var6 = _closure1_slot9;
                    var2 = arguments[2];
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = var6.AUTO;
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var2 = var6.AUTO_FALLBACK;
case 17:
                    var4['exposureType'] = var2;
                    var2 = false;
                    var4['excluded'] = var2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)(var5, var4);
                    _fun0004_ip = 20; continue _fun0004;
case 18:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)(var5, var4, var3);
case 20:
                    return var1;
                }
            };
            var _closure2_slot3 = var1;
            var4 = function trackExposure(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var4 = arguments[1];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var2 = {};
                    var3 = false;
                    var2['excluded'] = var3;
                    var3 = _closure1_slot9;
                    var3 = var3.MANUAL;
                    var2['exposureType'] = var3;
                    var4 = var2;
case 21:
                    var7 = _closure1_slot10;
                    var3 = _closure2_slot0;
                    var6 = var3.kind;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var3 = var7.bind(var1)(var6, var3, var5);
                    var6 = null;
                    if(!(var6 != var3)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)(var5, var4, var3);
case 23:
                    return var1;
                }
            };
            var _closure2_slot4 = var4;
            var1 = function trackExposureWithDescriptor(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var11 = arg1;
                    var9 = arg2;
                    var5 = arg3;
                    var8 = null;
                    if(!(var8 != var5)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var1 = _closure1_slot9;
                    var6 = var1.MANUAL;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var7 = undefined;
                    var4 = var2.bind(var7)(var1);
                    var3 = var4.trackExposureToExperiment;
                    var1 = _closure2_slot2;
                    var2 = var1.id;
                    var1 = {};
                    var13 = var8 == var11;
                    var12 = undefined;
                    if(var13) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var12 = var11.location;
case 27:
                    var13 = var8 != var12;
                    var11 = 'unknown';
                    if(!var13) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var11 = var12;
case 29:
                    var1['location'] = var11;
                    var12 = var8 == var9;
                    var11 = undefined;
                    if(var12) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var11 = var9.analyticsLocations;
case 31:
                    if(!(var8 == var11)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var11 = new Array(0);
case 33:
                    var1['analyticsLocations'] = var11;
                    var12 = var8 == var9;
                    var11 = undefined;
                    if(var12) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var11 = var9.fingerprint;
case 35:
                    if(!(var8 == var11)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var12 = _closure1_slot6;
                    var10 = var12.getFingerprint;
                    var11 = var10.bind(var12)();
case 37:
                    var12 = var8 != var11;
                    var10 = undefined;
                    if(!var12) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var10 = var11;
case 39:
                    var1['fingerprint'] = var10;
                    var11 = var8 == var9;
                    var10 = undefined;
                    if(var11) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var10 = var9.excluded;
case 41:
                    if(var10) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var10 = false;
case 43:
                    var1['excluded'] = var10;
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var7 = var9.exposureType;
case 45:
                    if(!(var8 != var7)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var6 = var7;
case 47:
                    var1['exposureType'] = var6;
                    var1 = var3.bind(var4)(var2, var5, var1);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot5 = var1;
            var5 = function subscribe(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var12 = arg1;
                    var8 = arg2;
                    var2 = arguments[2];
                    var _closure3_slot0 = var12;
                    var _closure3_slot1 = var8;
                    var7 = undefined;
                    if(!(var2 === var7)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var2 = {};
case 49:
                    var _closure3_slot2 = var7;
                    var _closure3_slot3 = var7;
                    var _closure3_slot4 = var7;
                    var4 = function onStoreChange() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var8 = _closure1_slot10;
                            var1 = _closure2_slot0;
                            var6 = var1.kind;
                            var4 = var1.id;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var9 = var8.bind(var1)(var6, var4, var2);
                            var2 = null;
                            if(!(var2 != var9)) { _fun0008_ip = 4; continue _fun0008 }
case 9:
                            var4 = _closure3_slot2;
                            if(var4) { _fun0008_ip = 4; continue _fun0008 }
case 51:
                            var4 = var9.bucket;
                            _fun0008_ip = 52; continue _fun0008;
case 4:
                            var6 = _closure1_slot8;
                            var4 = var6.NOT_ELIGIBLE;
case 52:
                            var6 = var2 == var9;
                            var2 = -1;
                            if(var6) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var2 = var9.revision;
case 53:
                            var6 = _closure3_slot3;
                            var6 = var4 === var6;
                            if(!var6) { _fun0008_ip = 55; continue _fun0008 }
case 29:
                            var8 = _closure3_slot4;
                            var6 = var8 === var2;
case 55:
                            if(var6) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                            var6 = _closure3_slot1;
                            var8 = _closure1_slot11;
                            var13 = _closure2_slot0;
                            var11 = _closure2_slot1;
                            var14 = undefined;
                            var12 = var4;
                            var10 = var9;
                            var5 = var14[var8](var13, var12, var11, var10, var9);
                            var5 = var6.bind(var1)(var5, var4, var2);
                            _closure3_slot3 = var4;
                            _closure3_slot4 = var2;
case 56:
                            return var1;
                        }
                    };
                    var _closure3_slot5 = var4;
                    var3 = var2.disable;
                    var5 = null;
                    var6 = var5 != var3;
                    if(!var6) { _fun0007_ip = 11; continue _fun0007 }
case 7:
                    var6 = var2.disable;
case 11:
                    _closure3_slot2 = var6;
                    var11 = _closure1_slot10;
                    var9 = _closure2_slot0;
                    var10 = var9.kind;
                    var9 = var9.id;
                    var10 = var11.bind(var7)(var10, var9, var12);
                    if(!(var5 != var10)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    if(var6) { _fun0007_ip = 58; continue _fun0007 }
case 60:
                    var6 = var10.bucket;
                    _fun0007_ip = 61; continue _fun0007;
case 58:
                    var9 = _closure1_slot8;
                    var6 = var9.NOT_ELIGIBLE;
case 61:
                    _closure3_slot3 = var6;
                    var6 = var5 == var10;
                    var5 = -1;
                    if(var6) { _fun0007_ip = 38; continue _fun0007 }
case 62:
                    var5 = var10.revision;
case 38:
                    _closure3_slot4 = var5;
                    var9 = _closure1_slot11;
                    var16 = _closure2_slot0;
                    var15 = _closure3_slot3;
                    var14 = _closure2_slot1;
                    var17 = undefined;
                    var13 = var10;
                    var6 = var17[var9](var16, var15, var14, var13, var12);
                    var5 = _closure3_slot3;
                    var3 = _closure3_slot4;
                    var3 = var8.bind(var7)(var6, var5, var3);
                    var3 = _closure1_slot7;
                    var2 = var3.addReactChangeListener;
                    var2 = var2.bind(var3)(var4);
                    var1 = function() {
                        var3 = _closure1_slot7;
                        var2 = var3.removeReactChangeListener;
                        var1 = _closure3_slot5;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var _closure2_slot6 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var9 = undefined;
            var11 = var7.bind(var9)(var1);
            var10 = var11.validateOneExperiment;
            var8 = var3.id;
            var7 = var3.label;
            var1 = var3.commonTriggerPoint;
            var1 = var10.bind(var11)(var8, var7, var1);
            var1 = global;
            var1 = var1.Map;
            var7 = var1.prototype;
            var7 = Object.create(var7, {constructor: {value: var1}});
            var17 = var7;
            var1 = new var17[var1](var16);
            var10 = var1 instanceof Object ? var1 : var7;
            var _closure2_slot1 = var10;
            var11 = var10.set;
            var1 = _closure1_slot8;
            var8 = var1.NOT_ELIGIBLE;
            var7 = {};
            var12 = 'Not Eligible';
            var7['description'] = var12;
            var12 = var3.defaultConfig;
            var7['config'] = var12;
            var7 = var11.bind(var10)(var8, var7);
            var8 = var10.set;
            var7 = var1.CONTROL;
            var1 = {};
            var11 = 'Control Bucket';
            var1['description'] = var11;
            var11 = var3.defaultConfig;
            var1['config'] = var11;
            var1 = var8.bind(var10)(var7, var1);
            var8 = var3.treatments;
            var7 = var8.forEach;
            var1 = function(arg1) {
                var5 = arg1;
                var4 = _closure2_slot1;
                var3 = var4.set;
                var2 = var5.id;
                var1 = {};
                var10 = var5.id;
                var9 = var5.label;
                var6 = global;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var7 = 'Treatment ';
                var6 = ': ';
                var6 = var8.bind(var7)(var10, var6, var9);
                var1['description'] = var6;
                var5 = var5.config;
                var1['config'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var1 = var7.bind(var8)(var1);
            var7 = var3.kind;
            var8 = {};
            var1 = var3.id;
            var8['id'] = var1;
            var1 = var3.label;
            var8['title'] = var1;
            var1 = var3.commonTriggerPoint;
            var8['commonTriggerPoint'] = var1;
            var1 = var10.values;
            var15 = var1.bind(var10)();
            var13 = new Array(0);
            var16 = var13;
            var14 = 0;
            var1 = arraySpread(var16, var15, var14);
            var12 = var13.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.description;
                return var1;
            };
            var1 = var12.bind(var13)(var1);
            var8['description'] = var1;
            var1 = var10.keys;
            var15 = var1.bind(var10)();
            var1 = new Array(0);
            var16 = var1;
            var10 = arraySpread(var16, var15, var14);
            var8['buckets'] = var1;
            var1 = 'guild';
            if(!(var1 !== var7)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var7 = var7.bind(var9)(var1);
            var1 = var7.registerUserExperiment;
            var1 = var1.bind(var7)(var8);
            _fun0003_ip = 65; continue _fun0003;
case 63:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 5;
            var6 = var10[var6];
            var7 = var7.bind(var9)(var6);
            var6 = var7.registerGuildExperiment;
            var1 = var6.bind(var7)(var8);
case 65:
            var _closure2_slot2 = var1;
            var1 = {};
            var6 = function useExperiment(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var8 = arg1;
                    var1 = arguments[1];
                    var5 = undefined;
                    if(!(var1 === var5)) { _fun0009_ip = 66; continue _fun0009 }
case 3:
                    var3 = {};
                    var4 = true;
                    var3['autoTrackExposure'] = var4;
                    var1 = var3;
case 66:
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var5;
                    var _closure3_slot2 = var5;
                    var _closure3_slot3 = var5;
                    var _closure3_slot4 = var5;
                    var _closure3_slot5 = var5;
                    var _closure3_slot6 = var5;
                    var4 = var1.disable;
                    var3 = null;
                    var7 = var3 != var4;
                    if(!var7) { _fun0009_ip = 67; continue _fun0009 }
case 11:
                    var7 = var4;
case 67:
                    _closure3_slot0 = var7;
                    var6 = var1.autoTrackExposure;
                    var4 = false;
                    var12 = var4 !== var6;
                    _closure3_slot1 = var12;
                    var10 = _closure1_slot10;
                    var6 = _closure2_slot0;
                    var9 = var6.kind;
                    var6 = var6.id;
                    var6 = var10.bind(var5)(var9, var6, var8);
                    _closure3_slot2 = var6;
                    var9 = var1.trackExposureOptions;
                    var9 = var3 == var9;
                    var11 = undefined;
                    if(var9) { _fun0009_ip = 68; continue _fun0009 }
case 36:
                    var10 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 7;
                    var9 = var13[var9];
                    var9 = var10.bind(var5)(var9);
                    var1 = var1.trackExposureOptions;
                    if(!(var3 == var1)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var1 = {};
case 69:
                    var11 = var9.bind(var5)(var1);
case 68:
                    _closure3_slot3 = var11;
                    var9 = var3 == var6;
                    var1 = undefined;
                    if(var9) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var1 = var6.triggerDebuggingEnabled;
case 41:
                    var3 = var3 != var1;
                    if(!var3) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var3 = var1;
case 71:
                    _closure3_slot4 = var3;
                    var6 = _closure1_slot4;
                    var1 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = _closure3_slot2;
                            var4 = null;
                            if(!(var4 != var1)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                            var1 = _closure3_slot0;
                            if(var1) { _fun0010_ip = 73; continue _fun0010 }
case 75:
                            var1 = _closure3_slot2;
                            var2 = var1.bucket;
                            _fun0010_ip = 76; continue _fun0010;
case 73:
                            var1 = _closure1_slot8;
                            var2 = var1.NOT_ELIGIBLE;
case 76:
                            var8 = _closure1_slot11;
                            var12 = _closure2_slot0;
                            var10 = _closure2_slot1;
                            var9 = _closure3_slot2;
                            var13 = undefined;
                            var11 = var2;
                            var5 = var13[var8](var12, var11, var10, var9, var8);
                            var1 = new Array(3);
                            var1[0] = var5;
                            var1[1] = var2;
                            var2 = _closure3_slot2;
                            var4 = var4 == var2;
                            var2 = -1;
                            if(var4) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                            var3 = _closure3_slot2;
                            var2 = var3.revision;
case 77:
                            var1[2] = var2;
                            return var1;
                        }
                    };
                    var1 = var6.bind(var5)(var1);
                    var10 = _closure1_slot3;
                    var14 = 2;
                    var13 = var10.bind(var5)(var1, var14);
                    var1 = 0;
                    var9 = var13[var1];
                    var6 = 3;
                    var9 = var10.bind(var5)(var9, var6);
                    var1 = var9[var1];
                    var6 = 1;
                    var10 = var9[var6];
                    var9 = var9[var14];
                    var6 = var13[var6];
                    _closure3_slot5 = var6;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var6 = 7;
                    var6 = var14[var6];
                    var6 = var13.bind(var5)(var6);
                    var6 = var6.bind(var5)(var8);
                    _closure3_slot6 = var6;
                    var4 = _closure1_slot5;
                    var8 = new Array(7);
                    var8[0] = var7;
                    var8[1] = var12;
                    var8[2] = var6;
                    var8[3] = var11;
                    var8[4] = var10;
                    var8[5] = var9;
                    var8[6] = var3;
                    var3 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var2 = _closure3_slot0;
                            if(var2) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                            var4 = _closure3_slot1;
                            var3 = !var4;
                            if(var4) { _fun0011_ip = 49; continue _fun0011 }
case 75:
                            var4 = _closure3_slot4;
                            var3 = !var4;
case 49:
                            var2 = var3;
case 79:
                            if(var2) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                            var3 = _closure2_slot0;
                            var4 = var3.commonTriggerPoint;
                            var3 = null;
                            var2 = var3 != var4;
case 81:
                            if(var2) { _fun0011_ip = 83; continue _fun0011 }
case 10:
                            var5 = _closure2_slot3;
                            var4 = _closure3_slot6;
                            var3 = _closure3_slot3;
                            var6 = _closure3_slot1;
                            var2 = undefined;
                            var1 = false;
                            var1 = var1 === var6;
                            var1 = var5.bind(var2)(var4, var3, var1);
case 83:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3, var8);
                    var3 = new Array(2);
                    var3[0] = var7;
                    var3[1] = var6;
                    var2 = function() {
                        var5 = _closure2_slot6;
                        var4 = _closure3_slot6;
                        var3 = {};
                        var1 = _closure3_slot0;
                        var3['disable'] = var1;
                        var2 = undefined;
                        var1 = function(arg1, arg2, arg3) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = arg2;
                            var _closure5_slot1 = var1;
                            var1 = arg3;
                            var _closure5_slot2 = var1;
                            var3 = _closure3_slot5;
                            var1 = undefined;
                            var2 = function(arg1) {
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                    var1 = arg1;
                                    var2 = 0;
                                    var4 = var1[var2];
                                    var2 = _closure5_slot0;
                                    if(!(var4 === var2)) { _fun0012_ip = 17; continue _fun0012 }
case 75:
                                    var2 = 1;
                                    var4 = var1[var2];
                                    var2 = _closure5_slot1;
                                    if(!(var4 === var2)) { _fun0012_ip = 17; continue _fun0012 }
case 84:
                                    var2 = 2;
                                    var4 = var1[var2];
                                    var2 = _closure5_slot2;
                                    if(!(var4 !== var2)) { _fun0012_ip = 85; continue _fun0012 }
case 17:
                                    var4 = _closure5_slot0;
                                    var2 = new Array(3);
                                    var2[0] = var4;
                                    var4 = _closure5_slot1;
                                    var2[1] = var4;
                                    var3 = _closure5_slot2;
                                    var2[2] = var3;
                                    var1 = var2;
case 85:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = var5.bind(var2)(var4, var1, var3);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var1['useExperiment'] = var6;
            var1['subscribe'] = var5;
            var1['trackExposure'] = var4;
            var4 = function getCurrentConfig(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var8 = arg1;
                    var4 = arguments[1];
                    var6 = undefined;
                    if(!(var4 === var6)) { _fun0013_ip = 5; continue _fun0013 }
case 22:
                    var1 = {};
                    var2 = true;
                    var1['autoTrackExposure'] = var2;
                    var4 = var1;
case 5:
                    var7 = _closure1_slot10;
                    var3 = _closure2_slot0;
                    var5 = var3.kind;
                    var3 = var3.id;
                    var5 = var7.bind(var6)(var5, var3, var8);
                    var7 = null;
                    if(!(var7 != var5)) { _fun0013_ip = 37; continue _fun0013 }
case 4:
                    var3 = var4.disable;
                    if(var3) { _fun0013_ip = 37; continue _fun0013 }
case 19:
                    var3 = var4.autoTrackExposure;
                    var9 = false;
                    if(!(var9 === var3)) { _fun0013_ip = 86; continue _fun0013 }
case 28:
                    var3 = var5.triggerDebuggingEnabled;
                    if(!var3) { _fun0013_ip = 87; continue _fun0013 }
case 86:
                    var3 = _closure2_slot0;
                    var3 = var3.commonTriggerPoint;
                    if(!(var7 == var3)) { _fun0013_ip = 87; continue _fun0013 }
case 78:
                    var3 = var4.autoTrackExposure;
                    var7 = _closure2_slot3;
                    var12 = var4.trackExposureOptions;
                    var11 = var9 === var3;
                    var14 = undefined;
                    var13 = var8;
                    var10 = var5;
                    var3 = var14[var7](var13, var12, var11, var10, var9);
case 87:
                    var8 = _closure1_slot11;
                    var13 = _closure2_slot0;
                    var12 = var5.bucket;
                    var11 = _closure2_slot1;
                    var14 = undefined;
                    var10 = var5;
                    var3 = var14[var8](var13, var12, var11, var10, var9);
                    return var3;
case 37:
                    var4 = _closure1_slot11;
                    var13 = _closure2_slot0;
                    var2 = _closure1_slot8;
                    var12 = var2.NOT_ELIGIBLE;
                    var11 = _closure2_slot1;
                    var14 = undefined;
                    var10 = var5;
                    var1 = var14[var4](var13, var12, var11, var10, var9);
                    return var1;
                }
            };
            var1['getCurrentConfig'] = var4;
            var1['definition'] = var3;
            var2 = function isAAMode(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = _closure1_slot10;
                    var1 = _closure2_slot0;
                    var4 = var1.kind;
                    var3 = var1.id;
                    var2 = undefined;
                    var1 = arg1;
                    var2 = var5.bind(var2)(var4, var3, var1);
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0014_ip = 88; continue _fun0014 }
case 76:
                    var2 = var2.aaMode;
                    var1 = !var2;
case 88:
                    var1 = !var1;
                    return var1;
                }
            };
            var1['isAAMode'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();