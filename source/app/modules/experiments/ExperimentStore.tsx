// app/modules/experiments/ExperimentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var7;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
 2: // try_start_0
                var2 = global;
                var3 = var2.Boolean;
                var3 = var3.prototype;
                var4 = var3.valueOf;
                var3 = var4.call;
                var8 = var2.Reflect;
                var7 = var8.construct;
                var6 = var2.Boolean;
                var5 = new Array(0);
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var2 = var7.bind(var8)(var6, var5, var2);
                var2 = var3.bind(var4)(var2);
                var2 = !var2;
                var _closure2_slot0 = var2;
 70: // try_end0
                _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot35 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot35 = var1;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 45:
                if(var2) { _fun0003_ip = 54; continue _fun0003 }
 48:
                var2 = var3.@@iterator;
 54:
                if(var2) { _fun0003_ip = 342; continue _fun0003 }
 60:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 322; continue _fun0003 }
 85:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 282; continue _fun0003 }
 95:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 269; continue _fun0003 }
 109:
                var7 = {};
                var9 = var7.toString;
                var7 = var9.call;
                var11 = var7.bind(var9)(var3);
                var10 = var11.slice;
                var9 = 8;
                var7 = -1;
                var9 = var10.bind(var11)(var9, var7);
                var7 = 'Object';
                var7 = var7 === var9;
                if(!var7) { _fun0003_ip = 162; continue _fun0003 }
 157:
                var7 = var3.constructor;
 162:
                var10 = var9;
                if(!var7) { _fun0003_ip = 178; continue _fun0003 }
 168:
                var7 = var3.constructor;
                var10 = var7.name;
 178:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 248; continue _fun0003 }
 186:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 248; continue _fun0003 }
 194:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 233; continue _fun0003 }
 204:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 246; continue _fun0003 }
 233:
                var9 = _closure1_slot37;
                var7 = var9.bind(var8)(var3, var8);
 246:
                _fun0003_ip = 264; continue _fun0003;
 248:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 264:
                var6 = var7;
                _fun0003_ip = 282; continue _fun0003;
 269:
                var7 = _closure1_slot37;
                var6 = var7.bind(var8)(var3, var8);
 282:
                var4 = var6;
                if(var4) { _fun0003_ip = 322; continue _fun0003 }
 288:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
 322:
                if(!var4) { _fun0003_ip = 329; continue _fun0003 }
 325:
                _closure2_slot0 = var4;
 329:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 56; continue _fun0004 }
 20:
                        var1 = {};
                        var2 = false;
                        var1['done'] = var2;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = parseFloat(var2);
                        var4 = var2 + 1;
                        _closure2_slot1 = var4;
                        var2 = var3[var2];
                        var1['value'] = var2;
                        _fun0004_ip = 67; continue _fun0004;
 56:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
 67:
                        return var1;
                    }
                };
                return var1;
 342:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot36 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 23; continue _fun0005 }
 14:
                var2 = var4.length;
                var1 = var3 > var2;
 23:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 33; continue _fun0005 }
 28:
                var2 = var4.length;
 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 70; continue _fun0005 }
 55:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 55; continue _fun0005 }
 70:
                return var1;
            }
        };
        var _closure1_slot37 = var1;
        var1 = function getHash(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var1 = _closure1_slot32;
                var1 = var1[var3];
                var5 = undefined;
                if(!(var5 !== var1)) { _fun0006_ip = 22; continue _fun0006 }
 20:
                return var1;
 22:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.v3;
                var1 = var1.bind(var4)(var3);
                var2 = _closure1_slot32;
                var2[var3] = var1;
                return var1;
            }
        };
        var _closure1_slot38 = var1;
        var1 = function isTriggerDebuggingEnabled(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                if(var1) { _fun0007_ip = 26; continue _fun0007 }
 6:
                var4 = _closure1_slot33;
                var3 = var4.includes;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 26:
                return var1;
            }
        };
        var _closure1_slot39 = var1;
        var1 = function userCanUseExperiments(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg1;
                var1 = var2.flags;
                var3 = null;
                var4 = var3 != var1;
                var5 = 0;
                if(!var4) { _fun0008_ip = 22; continue _fun0008 }
 19:
                var5 = var1;
 22:
                var4 = _closure1_slot15;
                var4 = var4.STAFF;
                var4 = var5 & var4;
                var1 = _closure1_slot15;
                var1 = var1.STAFF;
                var1 = var4 === var1;
                if(var1) { _fun0008_ip = 66; continue _fun0008 }
 56:
                var2 = var2.personal_connection_id;
                var1 = var3 != var2;
 66:
                return var1;
            }
        };
        var _closure1_slot40 = var1;
        var1 = function getTrackExposureExperimentKey(arg1, arg2, arg3, arg4) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg2;
                var6 = arg3;
                var3 = arg4;
                var9 = var1.type;
                var2 = global;
                var4 = var2.HermesInternal;
                var8 = var4.concat;
                var7 = '';
                var5 = '|';
                var4 = arg1;
                var4 = var8.bind(var7)(var9, var5, var4);
                var7 = var1.triggerDebuggingEnabled;
                if(!var7) { _fun0009_ip = 60; continue _fun0009 }
 54:
                var8 = undefined;
                var7 = var8 !== var6;
 60:
                if(!var7) { _fun0009_ip = 74; continue _fun0009 }
 63:
                var9 = var6.length;
                var8 = 0;
                var7 = var9 > var8;
 74:
                var10 = var1.type;
                var9 = _closure1_slot11;
                var9 = var9.USER;
                if(!(var10 !== var9)) { _fun0009_ip = 215; continue _fun0009 }
 96:
                var9 = var1.type;
                var8 = _closure1_slot11;
                var8 = var8.GUILD;
                if(!(var9 !== var8)) { _fun0009_ip = 143; continue _fun0009 }
 115:
                var8 = var2.Error;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var14 = var9;
                var8 = new var14[var8](var13);
                var8 = var8 instanceof Object ? var8 : var9;
                throw var8;
 143:
                var8 = var1.guildId;
                var1 = var2.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var5)(var8);
                var9 = var4 + var1;
                var1 = var9;
                if(!var7) { _fun0009_ip = 213; continue _fun0009 }
 174:
                var8 = var2.HermesInternal;
                var8 = var8.concat;
                var8 = var8.bind(var5)(var6);
                var10 = var9 + var8;
                var8 = var10;
                if(!var3) { _fun0009_ip = 210; continue _fun0009 }
 200:
                var9 = '|triggerDebugging';
                var8 = var10 + var9;
 210:
                var1 = var8;
 213:
                return var1;
 215:
                var1 = var4;
                if(!var7) { _fun0009_ip = 260; continue _fun0009 }
 221:
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var5)(var6);
                var4 = var4 + var2;
                var2 = var4;
                if(!var3) { _fun0009_ip = 257; continue _fun0009 }
 247:
                var3 = '|triggerDebugging';
                var2 = var4 + var3;
 257:
                var1 = var2;
 260:
                return var1;
            }
        };
        var _closure1_slot41 = var1;
        var1 = function getTrackExposureExperimentHash(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = arg1;
                var4 = var1.type;
                var3 = _closure1_slot11;
                var3 = var3.USER;
                if(!(var4 !== var3)) { _fun0010_ip = 135; continue _fun0010 }
 25:
                var4 = var1.type;
                var3 = _closure1_slot11;
                var3 = var3.GUILD;
                if(!(var4 !== var3)) { _fun0010_ip = 74; continue _fun0010 }
 44:
                var3 = global;
                var3 = var3.Error;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
 74:
                var5 = _closure1_slot38;
                var14 = var1.bucket;
                var12 = var1.revision;
                var10 = var1.guildId;
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var15 = '';
                var3 = '|';
                var13 = var3;
                var11 = var3;
                var4 = var15[var6](var14, var13, var12, var11, var10, var9);
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                return var3;
 135:
                var3 = _closure1_slot38;
                var6 = var1.bucket;
                var5 = var1.revision;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = '';
                var1 = '|';
                var2 = var4.bind(var2)(var6, var1, var5);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var _closure1_slot42 = var1;
        var1 = function _hasExperimentTrackedExposure(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot22;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0011_ip = 79; continue _fun0011 }
 23:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = var3.time;
                var4 = var5 - var4;
                var2 = _closure1_slot34;
                var4 = var4 > var2;
                var2 = !var4;
                if(var4) { _fun0011_ip = 76; continue _fun0011 }
 64:
                var4 = var3.hash;
                var3 = arg2;
                var2 = var4 === var3;
 76:
                var1 = var2;
 79:
                return var1;
            }
        };
        var _closure1_slot43 = var1;
        var1 = function trackExposure(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = arg1;
                var10 = var1.experimentId;
                var9 = var1.descriptor;
                var8 = var1.location;
                var14 = var1.location_stack;
                var11 = var1.context;
                var15 = var1.fingerprint;
                var13 = var1.excluded;
                var12 = var1.exposureType;
                var4 = var9.assignmentSource;
                var1 = 'override';
                if(!(var1 !== var4)) { _fun0012_ip = 1185; continue _fun0012 }
 66:
                var1 = 'ready_payload';
                if(!(var1 !== var4)) { _fun0012_ip = 121; continue _fun0012 }
 76:
                var2 = 'logged_out_api';
                var3 = true;
                if(!(var2 === var4)) { _fun0012_ip = 152; continue _fun0012 }
 88:
                var4 = var9.fingerprint;
                var5 = _closure1_slot9;
                var2 = var5.getFingerprint;
                var2 = var2.bind(var5)();
                var3 = false;
                if(!(var4 !== var2)) { _fun0012_ip = 152; continue _fun0012 }
 117:
                var3 = true;
                _fun0012_ip = 152; continue _fun0012;
 121:
                var2 = var9.sessionId;
                var4 = _closure1_slot9;
                var1 = var4.getSessionId;
                var1 = var1.bind(var4)();
                var3 = false;
                if(!(var2 !== var1)) { _fun0012_ip = 152; continue _fun0012 }
 150:
                var3 = true;
 152:
                var1 = var9.override;
                if(var1) { _fun0012_ip = 1181; continue _fun0012 }
 164:
                var1 = _closure1_slot12;
                var1 = var1.AUTO_FALLBACK;
                var6 = var12 === var1;
                if(!var6) { _fun0012_ip = 196; continue _fun0012 }
 184:
                var1 = var9.triggerDebuggingEnabled;
                var1 = !var1;
                var6 = !var1;
 196:
                var4 = _closure1_slot41;
                var1 = undefined;
                var25 = undefined;
                var24 = var10;
                var23 = var9;
                var22 = var8;
                var21 = var6;
                var5 = var25[var4](var24, var23, var22, var21, var20);
                var4 = _closure1_slot42;
                var4 = var4.bind(var1)(var9);
                var7 = var3;
                if(!var7) { _fun0012_ip = 253; continue _fun0012 }
 235:
                var17 = _closure1_slot23;
                var16 = var17.get;
                var16 = var16.bind(var17)(var5);
                var7 = var16 === var4;
 253:
                if(var7) { _fun0012_ip = 1177; continue _fun0012 }
 259:
                var7 = _closure1_slot43;
                var7 = var7.bind(var1)(var5, var4);
                if(var7) { _fun0012_ip = 1173; continue _fun0012 }
 275:
                var16 = var9.type;
                var7 = _closure1_slot11;
                var7 = var7.USER;
                if(!(var16 !== var7)) { _fun0012_ip = 687; continue _fun0012 }
 297:
                var16 = var9.type;
                var7 = _closure1_slot11;
                var7 = var7.GUILD;
                if(!(var16 === var7)) { _fun0012_ip = 1071; continue _fun0012 }
 319:
                var7 = _closure1_slot13;
                if(var6) { _fun0012_ip = 334; continue _fun0012 }
 326:
                var19 = var7.EXPERIMENT_GUILD_TRIGGERED;
                _fun0012_ip = 340; continue _fun0012;
 334:
                var19 = var7.EXPERIMENT_GUILD_TRIGGERED_FALLBACK;
 340:
                var7 = {};
                var7['name'] = var10;
                var16 = var9.revision;
                var7['revision'] = var16;
                var16 = var9.bucket;
                var7['bucket'] = var16;
                var16 = var9.guildId;
                var7['guild_id'] = var16;
                var7['location'] = var8;
                var7['location_stack'] = var14;
                var16 = var9.hashResult;
                var7['hash_result'] = var16;
                var7['excluded'] = var13;
                var7['exposure_type'] = var12;
                var16 = var9.assignmentSource;
                var7['assignment_source'] = var16;
                var16 = var9.sessionId;
                var7['assignment_session_id'] = var16;
                var16 = var9.loadedFromCache;
                var7['assignment_loaded_from_cache'] = var16;
                var16 = var9.holdoutName;
                var7['holdout_name'] = var16;
                var16 = var9.holdoutRevision;
                var7['holdout_revision'] = var16;
                var16 = var9.holdoutBucket;
                var7['holdout_bucket'] = var16;
                if(var3) { _fun0012_ip = 527; continue _fun0012 }
 476:
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 13;
                var16 = var18[var16];
                var18 = var17.bind(var1)(var16);
                var17 = var18.track;
                var16 = {};
                var20 = true;
                var16['flush'] = var20;
                var16['fingerprint'] = var15;
                var16 = var17.bind(var18)(var19, var7, var16);
                _fun0012_ip = 1071; continue _fun0012;
 527:
                var19 = {};
                var24 = var19;
                var23 = var7;
                var7 = copyDataProperties(var24, var23);
                var16 = var9.fingerprint;
                var7 = 'assignment_fingerprint';
                var19[var7] = var16;
                var16 = _closure1_slot9;
                var7 = var16.getSessionId;
                var16 = var7.bind(var16)();
                var7 = 'current_session_id';
                var19[var7] = var16;
                var16 = _closure1_slot9;
                var7 = var16.getFingerprint;
                var16 = var7.bind(var16)();
                var7 = 'current_fingerprint';
                var19[var7] = var16;
                var7 = _closure1_slot25;
                var16 = var7.source;
                var7 = 'current_source';
                var19[var7] = var16;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var7 = 13;
                var7 = var17[var7];
                var18 = var16.bind(var1)(var7);
                var17 = var18.track;
                var7 = _closure1_slot13;
                var16 = var7.EXPERIMENT_GUILD_TRIGGERED_IGNORED;
                var7 = {};
                var20 = false;
                var7['flush'] = var20;
                var7['fingerprint'] = var15;
                var7 = var17.bind(var18)(var16, var19, var7);
                _fun0012_ip = 1071; continue _fun0012;
 687:
                var7 = {};
                var7['name'] = var10;
                var16 = var9.revision;
                var7['revision'] = var16;
                var16 = var9.population;
                var7['population'] = var16;
                var16 = var9.bucket;
                var7['bucket'] = var16;
                var7['location'] = var8;
                var7['location_stack'] = var14;
                var14 = var9.hashResult;
                var7['hash_result'] = var14;
                var7['excluded'] = var13;
                var7['exposure_type'] = var12;
                var12 = var9.assignmentSource;
                var7['assignment_source'] = var12;
                var12 = var9.sessionId;
                var7['assignment_session_id'] = var12;
                var12 = var9.loadedFromCache;
                var7['assignment_loaded_from_cache'] = var12;
                var12 = var9.holdoutName;
                var7['holdout_name'] = var12;
                var12 = var9.holdoutRevision;
                var7['holdout_revision'] = var12;
                var12 = var9.holdoutBucket;
                var7['holdout_bucket'] = var12;
                var12 = null;
                if(!(var12 != var11)) { _fun0012_ip = 841; continue _fun0012 }
 828:
                var11 = var11.guildId;
                var7['context_guild_id'] = var11;
 841:
                var11 = _closure1_slot13;
                if(var6) { _fun0012_ip = 856; continue _fun0012 }
 848:
                var14 = var11.EXPERIMENT_USER_TRIGGERED;
                _fun0012_ip = 862; continue _fun0012;
 856:
                var14 = var11.EXPERIMENT_USER_TRIGGERED_FALLBACK;
 862:
                if(var3) { _fun0012_ip = 916; continue _fun0012 }
 865:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 13;
                var11 = var13[var11];
                var13 = var12.bind(var1)(var11);
                var12 = var13.track;
                var11 = {};
                var16 = true;
                var11['flush'] = var16;
                var11['fingerprint'] = var15;
                var11 = var12.bind(var13)(var14, var7, var11);
                _fun0012_ip = 1071; continue _fun0012;
 916:
                var14 = {};
                var24 = var14;
                var23 = var7;
                var7 = copyDataProperties(var24, var23);
                var11 = var9.fingerprint;
                var7 = 'assignment_fingerprint';
                var14[var7] = var11;
                var11 = _closure1_slot9;
                var7 = var11.getSessionId;
                var11 = var7.bind(var11)();
                var7 = 'current_session_id';
                var14[var7] = var11;
                var11 = _closure1_slot9;
                var7 = var11.getFingerprint;
                var11 = var7.bind(var11)();
                var7 = 'current_fingerprint';
                var14[var7] = var11;
                var7 = _closure1_slot25;
                var11 = var7.source;
                var7 = 'current_source';
                var14[var7] = var11;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 13;
                var7 = var12[var7];
                var13 = var11.bind(var1)(var7);
                var12 = var13.track;
                var7 = _closure1_slot13;
                var11 = var7.EXPERIMENT_USER_TRIGGERED_IGNORED;
                var7 = {};
                var16 = false;
                var7['flush'] = var16;
                var7['fingerprint'] = var15;
                var7 = var12.bind(var13)(var11, var14, var7);
 1071:
                if(var3) { _fun0012_ip = 1156; continue _fun0012 }
 1074:
                var7 = _closure1_slot22;
                var3 = _closure1_slot41;
                var25 = undefined;
                var24 = var10;
                var23 = var9;
                var22 = var8;
                var21 = var6;
                var6 = var25[var3](var24, var23, var22, var21, var20);
                var3 = {};
                var8 = global;
                var10 = var8.Date;
                var8 = var10.now;
                var8 = var8.bind(var10)();
                var3['time'] = var8;
                var8 = _closure1_slot42;
                var8 = var8.bind(var1)(var9);
                var3['hash'] = var8;
                var7[var6] = var3;
                var6 = _closure1_slot59;
                var3 = _closure1_slot22;
                var3 = var6.bind(var1)(var3);
                _fun0012_ip = 1171; continue _fun0012;
 1156:
                var3 = _closure1_slot23;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var4);
 1171:
                return var1;
 1173:
                var1 = false;
                return var1;
 1177:
                var1 = false;
                return var1;
 1181:
                var1 = false;
                return var1;
 1185:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot44 = var1;
        var1 = function _loadGuildFilter(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var4 = var5().value;
                var2 = var1;
                var6 = undefined;
                var3 = var2 === var6;
                var2 = undefined;
                if(var3) { _fun0013_ip = 27; continue _fun0013 }
 24:
                var2 = var4;
 27:
                var4 = undefined;
                if(var3) { _fun0013_ip = 57; continue _fun0013 }
 32:
                var7 = var5().value;
                var5 = var1;
                var5 = var5 === var6;
                var4 = undefined;
                var3 = var5;
                if(var5) { _fun0013_ip = 57; continue _fun0013 }
 51:
                var4 = var7;
                var3 = var5;
 57:
                if(var3) { _fun0013_ip = 63; continue _fun0013 }
 60:
                var1.return();
 63:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 14;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.GUILD_FILTERS;
                var5 = var1[var2];
                var1 = null;
                var5 = var1 != var5;
                if(!var5) { _fun0013_ip = 137; continue _fun0013 }
 105:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.GUILD_FILTERS;
                var2 = var3[var2];
                var1 = var2.bind(var3)(var4);
 137:
                return var1;
            }
        };
        var _closure1_slot45 = var1;
        var1 = function _loadOverrides(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg1;
                var1 = {};
                var2 = null;
                if(!(var2 != var3)) { _fun0014_ip = 115; continue _fun0014 }
 11:
                var2 = _closure1_slot36;
                var5 = undefined;
                var4 = var2.bind(var5)(var3);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0014_ip = 113; continue _fun0014 }
 37:
                var2 = var3.value;
                var9 = var2.b;
                var7 = _closure1_slot36;
                var2 = var2.k;
                var8 = var7.bind(var5)(var2);
                var7 = var8.bind(var5)();
                var2 = var7.done;
                if(var2) { _fun0014_ip = 98; continue _fun0014 }
 74:
                var2 = var7.value;
                var1[var2] = var9;
                var10 = var8.bind(var5)();
                var2 = var10.done;
                var7 = var10;
                if(!var2) { _fun0014_ip = 74; continue _fun0014 }
 98:
                var7 = var4.bind(var5)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0014_ip = 37; continue _fun0014 }
 113:
                return var1;
 115:
                return var1;
            }
        };
        var _closure1_slot46 = var1;
        var1 = function _loadPopulation(arg1) {
            var5 = _closure1_slot8;
            var4 = undefined;
            var2 = arg1;
            var1 = 2;
            var2 = var5.bind(var4)(var2, var1);
            var1 = 0;
            var6 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = {};
            var5 = var6.map;
            var4 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var4 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var3 = var2 === var7;
                    var2 = undefined;
                    if(var3) { _fun0015_ip = 27; continue _fun0015 }
 24:
                    var2 = var4;
 27:
                    var4 = undefined;
                    if(var3) { _fun0015_ip = 57; continue _fun0015 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var4 = undefined;
                    var3 = var5;
                    if(var5) { _fun0015_ip = 57; continue _fun0015 }
 51:
                    var4 = var6;
                    var3 = var5;
 57:
                    if(var3) { _fun0015_ip = 63; continue _fun0015 }
 60:
                    var1.return();
 63:
                    var1 = {};
                    var1['bucket'] = var2;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.s;
                        var2 = var1.e;
                        var1 = {};
                        var1['start'] = var3;
                        var1['end'] = var2;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1['positions'] = var2;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var1['buckets'] = var4;
            var4 = var2.map;
            var3 = _closure1_slot45;
            var3 = var4.bind(var2)(var3);
            var1['filters'] = var3;
            var1['rawFilterData'] = var2;
            return var1;
        };
        var _closure1_slot47 = var1;
        var1 = function handleLoadedExperiments(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = arg1;
                var4 = _closure1_slot31;
                var2 = !var4;
                if(var4) { _fun0016_ip = 29; continue _fun0016 }
 16:
                var5 = var1.type;
                var4 = 'CONNECTION_OPEN';
                var2 = var4 === var5;
 29:
                if(!var2) { _fun0016_ip = 48; continue _fun0016 }
 32:
                var6 = _closure1_slot40;
                var5 = var1.user;
                var4 = undefined;
                var2 = var6.bind(var4)(var5);
 48:
                if(!var2) { _fun0016_ip = 57; continue _fun0016 }
 51:
                var2 = true;
                _closure1_slot31 = var2;
 57:
                var4 = var1.type;
                var2 = 'EXPERIMENTS_FETCH_SUCCESS';
                var2 = var2 === var4;
                if(!var2) { _fun0016_ip = 77; continue _fun0016 }
 73:
                var2 = _closure1_slot21;
 77:
                if(!var2) { _fun0016_ip = 99; continue _fun0016 }
 80:
                var4 = _closure1_slot25;
                var5 = var4.source;
                var4 = 'ready_payload';
                var2 = var4 === var5;
 99:
                if(!var2) { _fun0016_ip = 208; continue _fun0016 }
 102:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var5.bind(var2)(var4);
                var5 = var6.track;
                var2 = _closure1_slot13;
                var4 = var2.EXPERIMENT_FETCH_IGNORED;
                var2 = {};
                var7 = var1.fingerprint;
                var2['fingerprint'] = var7;
                var7 = _closure1_slot25;
                var7 = var7.source;
                var2['current_snapshot_source'] = var7;
                var7 = _closure1_slot25;
                var7 = var7.sessionId;
                var2['current_snapshot_session_id'] = var7;
                var7 = _closure1_slot25;
                var7 = var7.fingerprint;
                var2['current_snapshot_fingerprint'] = var7;
                var2 = var5.bind(var6)(var4, var2);
 208:
                var2 = {};
                _closure1_slot26 = var2;
                var2 = {};
                _closure1_slot27 = var2;
                var2 = {};
                _closure1_slot28 = var2;
                var2 = var1.type;
                var5 = 'CONNECTION_OPEN';
                var4 = var5 === var2;
                if(var4) { _fun0016_ip = 254; continue _fun0016 }
 242:
                var6 = var1.fingerprint;
                var2 = null;
                var4 = var2 == var6;
 254:
                if(var4) { _fun0016_ip = 281; continue _fun0016 }
 257:
                var6 = var1.fingerprint;
                var7 = _closure1_slot9;
                var2 = var7.getFingerprint;
                var2 = var2.bind(var7)();
                var4 = var6 === var2;
 281:
                var8 = var1.experiments;
                var7 = var1.guildExperiments;
                var2 = var1.type;
                var6 = 'logged_out_api';
                if(!(var5 === var2)) { _fun0016_ip = 314; continue _fun0016 }
 308:
                var6 = 'ready_payload';
 314:
                var2 = 'sessionId';
                var2 = var2 in var1;
                if(var2) { _fun0016_ip = 357; continue _fun0016 }
 325:
                var5 = _closure1_slot9;
                var2 = var5.getSessionId;
                var5 = var2.bind(var5)();
                var2 = null;
                var9 = var2 != var5;
                var2 = '';
                if(!var9) { _fun0016_ip = 355; continue _fun0016 }
 352:
                var2 = var5;
 355:
                _fun0016_ip = 363; continue _fun0016;
 357:
                var2 = var1.sessionId;
 363:
                var5 = _closure1_slot9;
                var1 = var5.getFingerprint;
                var1 = var1.bind(var5)();
                if(!var4) { _fun0016_ip = 430; continue _fun0016 }
 380:
                var5 = _closure1_slot49;
                var4 = {};
                var4['rawUserExperiments'] = var8;
                var8 = null;
                if(!(var8 == var7)) { _fun0016_ip = 401; continue _fun0016 }
 397:
                var7 = new Array(0);
 401:
                var4['rawGuildExperiments'] = var7;
                var4['source'] = var6;
                var4['sessionId'] = var2;
                var4['fingerprint'] = var1;
                var2 = undefined;
                var1 = false;
                var1 = var5.bind(var2)(var4, var1);
 430:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var4 = var2.CTPDeltaVanillaExperiment;
                var2 = var4.trackExposure;
                var2 = var2.bind(var4)();
                var2 = true;
                _closure1_slot21 = var2;
                return var1;
            }
        };
        var _closure1_slot48 = var1;
        var1 = function processRawExperiments(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = arg1;
                var3 = arguments[1];
                var7 = var1.rawUserExperiments;
                var4 = var1.rawGuildExperiments;
                var9 = var1.source;
                var _closure2_slot0 = var9;
                var8 = var1.sessionId;
                var _closure2_slot1 = var8;
                var5 = var1.fingerprint;
                var _closure2_slot2 = var5;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0017_ip = 57; continue _fun0017 }
 55:
                var3 = false;
 57:
                var _closure2_slot3 = var3;
                var6 = {};
                var6['rawUserExperiments'] = var7;
                var3 = null;
                var10 = var4;
                if(!(var3 == var10)) { _fun0017_ip = 81; continue _fun0017 }
 77:
                var10 = new Array(0);
 81:
                var6['rawGuildExperiments'] = var10;
                var6['source'] = var9;
                var6['sessionId'] = var8;
                var6['fingerprint'] = var5;
                _closure1_slot25 = var6;
                var6 = var7.forEach;
                var5 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var9 = arg1;
                        var2 = var9[Symbol.iterator];
                        var9 = var2().next;
                        var5 = var9().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0018_ip = 27; continue _fun0018 }
 24:
                        var4 = var5;
 27:
                        var15 = undefined;
                        if(var3) { _fun0018_ip = 57; continue _fun0018 }
 32:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var15 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 57; continue _fun0018 }
 51:
                        var15 = var6;
                        var3 = var5;
 57:
                        var8 = undefined;
                        if(var3) { _fun0018_ip = 87; continue _fun0018 }
 62:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var8 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 87; continue _fun0018 }
 81:
                        var8 = var6;
                        var3 = var5;
 87:
                        var13 = undefined;
                        if(var3) { _fun0018_ip = 117; continue _fun0018 }
 92:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var13 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 117; continue _fun0018 }
 111:
                        var13 = var6;
                        var3 = var5;
 117:
                        var14 = undefined;
                        if(var3) { _fun0018_ip = 147; continue _fun0018 }
 122:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var14 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 147; continue _fun0018 }
 141:
                        var14 = var6;
                        var3 = var5;
 147:
                        var12 = undefined;
                        if(var3) { _fun0018_ip = 177; continue _fun0018 }
 152:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var12 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 177; continue _fun0018 }
 171:
                        var12 = var6;
                        var3 = var5;
 177:
                        var11 = undefined;
                        if(var3) { _fun0018_ip = 207; continue _fun0018 }
 182:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var11 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 207; continue _fun0018 }
 201:
                        var11 = var6;
                        var3 = var5;
 207:
                        var10 = undefined;
                        if(var3) { _fun0018_ip = 237; continue _fun0018 }
 212:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var10 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 237; continue _fun0018 }
 231:
                        var10 = var6;
                        var3 = var5;
 237:
                        var7 = undefined;
                        if(var3) { _fun0018_ip = 267; continue _fun0018 }
 242:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var7 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 267; continue _fun0018 }
 261:
                        var7 = var6;
                        var3 = var5;
 267:
                        var6 = undefined;
                        if(var3) { _fun0018_ip = 297; continue _fun0018 }
 272:
                        var16 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var6 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 297; continue _fun0018 }
 291:
                        var6 = var16;
                        var3 = var5;
 297:
                        var5 = undefined;
                        if(var3) { _fun0018_ip = 327; continue _fun0018 }
 302:
                        var16 = var9().value;
                        var9 = var2;
                        var9 = var9 === var1;
                        var5 = undefined;
                        var3 = var9;
                        if(var9) { _fun0018_ip = 327; continue _fun0018 }
 321:
                        var5 = var16;
                        var3 = var9;
 327:
                        if(var3) { _fun0018_ip = 333; continue _fun0018 }
 330:
                        var2.return();
 333:
                        var3 = _closure1_slot26;
                        var2 = {};
                        var16 = 'user';
                        var2['type'] = var16;
                        var2['revision'] = var15;
                        var2['population'] = var14;
                        var2['bucket'] = var8;
                        var8 = 0;
                        var8 = var8 === var13;
                        var2['override'] = var8;
                        var8 = null;
                        var13 = var8 != var12;
                        var8 = -1;
                        if(!var13) { _fun0018_ip = 394; continue _fun0018 }
 391:
                        var8 = var12;
 394:
                        var2['hashResult'] = var8;
                        var8 = 1;
                        var11 = var8 === var11;
                        var2['aaMode'] = var11;
                        var9 = _closure1_slot39;
                        var8 = var8 === var10;
                        var8 = var9.bind(var1)(var8, var4);
                        var2['triggerDebuggingEnabled'] = var8;
                        var9 = _closure2_slot0;
                        var2['assignmentSource'] = var9;
                        var9 = _closure2_slot1;
                        var2['sessionId'] = var9;
                        var9 = _closure2_slot3;
                        var2['loadedFromCache'] = var9;
                        var8 = _closure2_slot2;
                        var2['fingerprint'] = var8;
                        var2['holdoutName'] = var7;
                        var2['holdoutRevision'] = var6;
                        var2['holdoutBucket'] = var5;
                        var3[var4] = var2;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                if(!(var3 != var4)) { _fun0017_ip = 141; continue _fun0017 }
 126:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var6 = arg1;
                        var2 = var6[Symbol.iterator];
                        var6 = var2().next;
                        var5 = var6().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0019_ip = 27; continue _fun0019 }
 24:
                        var4 = var5;
 27:
                        var12 = undefined;
                        if(var3) { _fun0019_ip = 57; continue _fun0019 }
 32:
                        var7 = var6().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var12 = undefined;
                        var3 = var5;
                        if(var5) { _fun0019_ip = 57; continue _fun0019 }
 51:
                        var12 = var7;
                        var3 = var5;
 57:
                        var5 = undefined;
                        if(var3) { _fun0019_ip = 87; continue _fun0019 }
 62:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var5 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 87; continue _fun0019 }
 81:
                        var5 = var8;
                        var3 = var7;
 87:
                        var14 = undefined;
                        if(var3) { _fun0019_ip = 117; continue _fun0019 }
 92:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var14 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 117; continue _fun0019 }
 111:
                        var14 = var8;
                        var3 = var7;
 117:
                        var10 = undefined;
                        if(var3) { _fun0019_ip = 147; continue _fun0019 }
 122:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var10 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 147; continue _fun0019 }
 141:
                        var10 = var8;
                        var3 = var7;
 147:
                        var13 = undefined;
                        if(var3) { _fun0019_ip = 177; continue _fun0019 }
 152:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var13 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 177; continue _fun0019 }
 171:
                        var13 = var8;
                        var3 = var7;
 177:
                        var11 = undefined;
                        if(var3) { _fun0019_ip = 207; continue _fun0019 }
 182:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var11 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 207; continue _fun0019 }
 201:
                        var11 = var8;
                        var3 = var7;
 207:
                        var9 = undefined;
                        if(var3) { _fun0019_ip = 237; continue _fun0019 }
 212:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var9 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 237; continue _fun0019 }
 231:
                        var9 = var8;
                        var3 = var7;
 237:
                        var8 = undefined;
                        if(var3) { _fun0019_ip = 267; continue _fun0019 }
 242:
                        var15 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var8 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 267; continue _fun0019 }
 261:
                        var8 = var15;
                        var3 = var7;
 267:
                        var7 = undefined;
                        if(var3) { _fun0019_ip = 297; continue _fun0019 }
 272:
                        var15 = var6().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var7 = undefined;
                        var3 = var6;
                        if(var6) { _fun0019_ip = 297; continue _fun0019 }
 291:
                        var7 = var15;
                        var3 = var6;
 297:
                        if(var3) { _fun0019_ip = 303; continue _fun0019 }
 300:
                        var2.return();
 303:
                        var3 = _closure1_slot27;
                        var2 = {};
                        var2['hashKey'] = var12;
                        var2['revision'] = var5;
                        var12 = var14.map;
                        var5 = _closure1_slot47;
                        var5 = var12.bind(var14)(var5);
                        var2['populations'] = var5;
                        var5 = _closure1_slot46;
                        var5 = var5.bind(var1)(var10);
                        var2['overrides'] = var5;
                        var5 = null;
                        if(!(var5 == var13)) { _fun0019_ip = 365; continue _fun0019 }
 361:
                        var13 = new Array(0);
 365:
                        var12 = var13.map;
                        var10 = function(arg1) {
                            var3 = arg1;
                            var2 = var3.map;
                            var1 = _closure1_slot47;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var10 = var12.bind(var13)(var10);
                        var2['overridesFormatted'] = var10;
                        var12 = var5 != var11;
                        var10 = null;
                        if(!var12) { _fun0019_ip = 399; continue _fun0019 }
 396:
                        var10 = var11;
 399:
                        var2['holdoutName'] = var10;
                        var10 = var5 != var9;
                        var5 = null;
                        if(!var10) { _fun0019_ip = 416; continue _fun0019 }
 413:
                        var5 = var9;
 416:
                        var2['holdoutControlBucket'] = var5;
                        var5 = 1;
                        var8 = var5 === var8;
                        var2['aaMode'] = var8;
                        var6 = _closure1_slot39;
                        var5 = var5 === var7;
                        var5 = var6.bind(var1)(var5, var4);
                        var2['triggerDebuggingEnabled'] = var5;
                        var6 = _closure2_slot0;
                        var2['assignmentSource'] = var6;
                        var6 = _closure2_slot1;
                        var2['sessionId'] = var6;
                        var6 = _closure2_slot3;
                        var2['loadedFromCache'] = var6;
                        var5 = _closure2_slot2;
                        var2['fingerprint'] = var5;
                        var3[var4] = var2;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
 141:
                return var1;
            }
        };
        var _closure1_slot49 = var1;
        var1 = function computeGuildExperimentBucketFromPopulationsOrNull(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var14 = arg1;
                var1 = arg3;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot36;
                var13 = undefined;
                var1 = arg2;
                var12 = var4.bind(var13)(var1);
                var5 = var12.bind(var13)();
                var4 = var5.done;
                var1 = null;
                var9 = var5;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                if(var4) { _fun0020_ip = 258; continue _fun0020 }
 55:
                var4 = var9.value;
                var5 = var4.buckets;
                var17 = var4.filters;
                var16 = var1 != var17;
                var4 = true;
                var15 = var6;
                if(!var16) { _fun0020_ip = 173; continue _fun0020 }
 84:
                var16 = _closure1_slot36;
                var18 = var16.bind(var13)(var17);
                var19 = var18.bind(var13)();
                var16 = var19.done;
                var17 = var19;
                var4 = true;
                var8 = var17;
                var7 = var18;
                var15 = var6;
                if(var16) { _fun0020_ip = 173; continue _fun0020 }
 119:
                var19 = var17.value;
                if(!(var1 != var19)) { _fun0020_ip = 147; continue _fun0020 }
 128:
                var16 = var19.bind(var13)(var14);
                var4 = false;
                var8 = var17;
                var7 = var18;
                var15 = var19;
                if(!var16) { _fun0020_ip = 173; continue _fun0020 }
 147:
                var20 = var18.bind(var13)();
                var16 = var20.done;
                var17 = var20;
                var4 = true;
                var8 = var17;
                var7 = var18;
                var15 = var19;
                if(!var16) { _fun0020_ip = 119; continue _fun0020 }
 173:
                if(var4) { _fun0020_ip = 199; continue _fun0020 }
 176:
                var16 = var12.bind(var13)();
                var4 = var16.done;
                var9 = var16;
                var6 = var15;
                if(var4) { _fun0020_ip = 258; continue _fun0020 }
 194:
                _fun0020_ip = 55; continue _fun0020;
 199:
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.positions;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.start;
                            var3 = var1.end;
                            var1 = _closure2_slot0;
                            var1 = var1 >= var4;
                            if(!var1) { _fun0021_ip = 35; continue _fun0021 }
 27:
                            var2 = _closure2_slot0;
                            var1 = var2 < var3;
 35:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                if(!(var1 == var4)) { _fun0020_ip = 231; continue _fun0020 }
 219:
                var3 = _closure1_slot10;
                var3 = var3.CONTROL;
                _fun0020_ip = 237; continue _fun0020;
 231:
                var3 = var4.bucket;
 237:
                var2 = _closure1_slot10;
                var4 = var2.NOT_ELIGIBLE;
                var2 = null;
                if(!(var3 !== var4)) { _fun0020_ip = 256; continue _fun0020 }
 253:
                var2 = var3;
 256:
                return var2;
 258:
                return var1;
            }
        };
        var _closure1_slot50 = var1;
        var1 = function computeGuildExperimentDescriptor(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var7 = arg1;
                var14 = arg2;
                var1 = _closure1_slot38;
                var3 = undefined;
                var5 = var1.bind(var3)(var14);
                var4 = _closure1_slot27;
                var2 = global;
                var1 = var2.HermesInternal;
                var1 = var1.concat;
                var15 = '';
                var1 = var1.bind(var15)(var5);
                var11 = var4[var1];
                var1 = null;
                if(!(var1 != var11)) { _fun0022_ip = 718; continue _fun0022 }
 59:
                var6 = var11.revision;
                var10 = var11.aaMode;
                var4 = var11.overrides;
                var5 = var4[var7];
                var4 = var11.triggerDebuggingEnabled;
                if(!(var1 == var5)) { _fun0022_ip = 644; continue _fun0022 }
 94:
                var9 = _closure1_slot38;
                var12 = var11.hashKey;
                var13 = var14;
                if(!(var1 != var12)) { _fun0022_ip = 114; continue _fun0022 }
 111:
                var13 = var12;
 114:
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var2 = ':';
                var2 = var12.bind(var15)(var13, var2, var7);
                var9 = var9.bind(var3)(var2);
                var2 = 10000;
                var12 = var9 % var2;
                var9 = _closure1_slot36;
                var2 = var11.overridesFormatted;
                if(!(var1 == var2)) { _fun0022_ip = 169; continue _fun0022 }
 165:
                var2 = new Array(0);
 169:
                var15 = var9.bind(var3)(var2);
                var9 = var15.bind(var3)();
                var2 = var9.done;
                var13 = var9;
                if(var2) { _fun0022_ip = 317; continue _fun0022 }
 192:
                var9 = _closure1_slot50;
                var2 = var13.value;
                var9 = var9.bind(var3)(var7, var2, var12);
                if(!(var1 === var9)) { _fun0022_ip = 229; continue _fun0022 }
 212:
                var16 = var15.bind(var3)();
                var2 = var16.done;
                var13 = var16;
                if(var2) { _fun0022_ip = 317; continue _fun0022 }
 227:
                _fun0022_ip = 192; continue _fun0022;
 229:
                var2 = {};
                var13 = _closure1_slot11;
                var13 = var13.GUILD;
                var2['type'] = var13;
                var2['guildId'] = var7;
                var13 = var11.revision;
                var2['revision'] = var13;
                var2['bucket'] = var9;
                var9 = true;
                var2['override'] = var9;
                var2['hashResult'] = var12;
                var2['triggerDebuggingEnabled'] = var4;
                var9 = var11.assignmentSource;
                var2['assignmentSource'] = var9;
                var9 = var11.sessionId;
                var2['sessionId'] = var9;
                var9 = var11.loadedFromCache;
                var2['loadedFromCache'] = var9;
                return var2;
 317:
                var9 = _closure1_slot50;
                var2 = var11.populations;
                var13 = var9.bind(var3)(var7, var2, var12);
                if(!(var1 != var13)) { _fun0022_ip = 642; continue _fun0022 }
 341:
                var2 = var11.holdoutName;
                var2 = var1 != var2;
                var9 = null;
                if(!var2) { _fun0022_ip = 494; continue _fun0022 }
 359:
                var2 = var11.holdoutControlBucket;
                var2 = var1 != var2;
                var9 = null;
                if(!var2) { _fun0022_ip = 494; continue _fun0022 }
 374:
                var2 = var11.holdoutName;
                var9 = null;
                if(!(var2 !== var14)) { _fun0022_ip = 494; continue _fun0022 }
 386:
                var14 = _closure1_slot51;
                var2 = var11.holdoutName;
                var15 = var14.bind(var3)(var7, var2);
                var14 = var1 == var15;
                var2 = undefined;
                if(var14) { _fun0022_ip = 417; continue _fun0022 }
 411:
                var2 = var15.bucket;
 417:
                var9 = var15;
                if(!(var1 != var2)) { _fun0022_ip = 494; continue _fun0022 }
 424:
                var14 = var15.override;
                var2 = true;
                if(!(var2 !== var14)) { _fun0022_ip = 463; continue _fun0022 }
 436:
                var14 = _closure1_slot44;
                var2 = {};
                var16 = var11.holdoutName;
                var2['experimentId'] = var16;
                var2['descriptor'] = var15;
                var2 = var14.bind(var3)(var2);
 463:
                var2 = var1 == var15;
                var14 = undefined;
                if(var2) { _fun0022_ip = 478; continue _fun0022 }
 472:
                var14 = var15.bucket;
 478:
                var2 = var11.holdoutControlBucket;
                var9 = var15;
                if(!(var14 !== var2)) { _fun0022_ip = 640; continue _fun0022 }
 494:
                var2 = {};
                var14 = _closure1_slot11;
                var14 = var14.GUILD;
                var2['type'] = var14;
                var2['guildId'] = var7;
                var14 = var11.revision;
                var2['revision'] = var14;
                var2['bucket'] = var13;
                var2['hashResult'] = var12;
                var2['aaMode'] = var10;
                var2['triggerDebuggingEnabled'] = var4;
                var10 = var11.assignmentSource;
                var2['assignmentSource'] = var10;
                var10 = var11.sessionId;
                var2['sessionId'] = var10;
                var10 = var11.loadedFromCache;
                var2['loadedFromCache'] = var10;
                var12 = var1 != var9;
                var10 = null;
                if(!var12) { _fun0022_ip = 593; continue _fun0022 }
 587:
                var10 = var11.holdoutName;
 593:
                var2['holdoutName'] = var10;
                var11 = var1 == var9;
                var10 = undefined;
                if(var11) { _fun0022_ip = 613; continue _fun0022 }
 607:
                var10 = var9.revision;
 613:
                var2['holdoutRevision'] = var10;
                var10 = var1 == var9;
                var3 = undefined;
                if(var10) { _fun0022_ip = 633; continue _fun0022 }
 627:
                var3 = var9.bucket;
 633:
                var2['holdoutBucket'] = var3;
                return var2;
 640:
                return var1;
 642:
                return var1;
 644:
                var2 = _closure1_slot10;
                var3 = var2.NOT_ELIGIBLE;
                var2 = null;
                if(!(var5 !== var3)) { _fun0022_ip = 716; continue _fun0022 }
 660:
                var3 = {};
                var8 = _closure1_slot11;
                var8 = var8.GUILD;
                var3['type'] = var8;
                var3['guildId'] = var7;
                var3['revision'] = var6;
                var3['bucket'] = var5;
                var5 = true;
                var3['override'] = var5;
                var5 = -1;
                var3['hashResult'] = var5;
                var3['triggerDebuggingEnabled'] = var4;
                var2 = var3;
 716:
                return var2;
 718:
                return var1;
            }
        };
        var _closure1_slot51 = var1;
        var1 = function processGuildExperimentPopulationFromCache(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var15 = arg1;
                var1 = {};
                var13 = var15;
                var9 = undefined;
                var7 = null;
                var6 = undefined;
                var5 = undefined;
                for(var10 in var13)
 30:
                {
 42:
                    var2 = var10;
                    var21 = var15[var2];
                    var3 = {};
                    var22 = var3;
                    var4 = copyDataProperties(var22, var21);
                    var1[var2] = var3;
                    var4 = _closure1_slot36;
                    var3 = var1[var2];
                    var3 = var3.populations;
                    var16 = var4.bind(var9)(var3);
                    var4 = var16.bind(var9)();
                    var3 = var4.done;
                    if(var3) { _fun0023_ip = 139; continue _fun0023 }
 93:
                    var17 = var4.value;
                    var19 = var17.rawFilterData;
                    var18 = var19.map;
                    var3 = _closure1_slot45;
                    var3 = var18.bind(var19)(var3);
                    var17['filters'] = var3;
                    var17 = var16.bind(var9)();
                    var3 = var17.done;
                    var4 = var17;
                    if(!var3) { _fun0023_ip = 93; continue _fun0023 }
 139:
                    var3 = _closure1_slot36;
                    var2 = var1[var2];
                    var2 = var2.overridesFormatted;
                    if(!(var7 == var2)) { _fun0023_ip = 161; continue _fun0023 }
 157:
                    var2 = new Array(0);
 161:
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.bind(var9)();
                    var2 = var3.done;
                    if(var2) { _fun0023_ip = 30; continue _fun0023 }
 181:
                    var16 = _closure1_slot36;
                    var2 = var3.value;
                    var17 = var16.bind(var9)(var2);
                    var18 = var17.bind(var9)();
                    var2 = var18.done;
                    var16 = var18;
                    var6 = var16;
                    if(var2) { _fun0023_ip = 262; continue _fun0023 }
 213:
                    var18 = var16.value;
                    var20 = var18.rawFilterData;
                    var19 = var20.map;
                    var2 = _closure1_slot45;
                    var2 = var19.bind(var20)(var2);
                    var18['filters'] = var2;
                    var18 = var17.bind(var9)();
                    var2 = var18.done;
                    var16 = var18;
                    var6 = var16;
                    if(!var2) { _fun0023_ip = 213; continue _fun0023 }
 262:
                    var16 = var4.bind(var9)();
                    var2 = var16.done;
                    var5 = var17;
                    var3 = var16;
                    if(var2) { _fun0023_ip = 30; continue _fun0023 }
 283:
                    _fun0023_ip = 181; continue _fun0023;
                }
 285:
                return var1;
            }
        };
        var _closure1_slot52 = var1;
        var1 = function handleOverlayInitialize(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var2 = arg1;
                var1 = var2.serializedExperimentStore;
                var6 = var2.user;
                var4 = _closure1_slot31;
                var2 = !var4;
                if(var4) { _fun0024_ip = 40; continue _fun0024 }
 29:
                var5 = _closure1_slot40;
                var4 = undefined;
                var2 = var5.bind(var4)(var6);
 40:
                if(!var2) { _fun0024_ip = 49; continue _fun0024 }
 43:
                var2 = true;
                _closure1_slot31 = var2;
 49:
                var2 = var1.hasLoadedExperiments;
                _closure1_slot21 = var2;
                var2 = var1.trackedExposureExperiments;
                _closure1_slot22 = var2;
                var2 = var1.loadedUserExperiments;
                _closure1_slot26 = var2;
                var2 = var1.userExperimentOverrides;
                _closure1_slot29 = var2;
                var2 = var1.guildExperimentOverrides;
                _closure1_slot30 = var2;
                var2 = {};
                var7 = _closure1_slot25;
                var8 = var2;
                var4 = copyDataProperties(var8, var7);
                var5 = var1.assignmentSource;
                var4 = 'source';
                var2[var4] = var5;
                var5 = var1.assignmentSessionId;
                var4 = 'sessionId';
                var2[var4] = var5;
                var5 = var1.assignmentFingerprint;
                var4 = 'fingerprint';
                var2[var4] = var5;
                _closure1_slot25 = var2;
                var4 = _closure1_slot52;
                var2 = var1.loadedGuildExperiments;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                _closure1_slot27 = var2;
                var2 = {};
                _closure1_slot28 = var2;
                return var1;
            }
        };
        var _closure1_slot53 = var1;
        var1 = function handleFetchFailure() {
            var1 = true;
            _closure1_slot21 = var1;
            var1 = undefined;
            return var1;
        };
        var _closure1_slot54 = var1;
        var1 = function handleLogout(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var1 = arg1;
                var2 = var1.isSwitchingAccount;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 16;
                var4 = var1[var5];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var7 = var4.Storage;
                var6 = var7.remove;
                var4 = _closure1_slot16;
                var4 = var6.bind(var7)(var4);
                if(var2) { _fun0025_ip = 168; continue _fun0025 }
 58:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var4.bind(var1)(var6);
                var8 = var6.Storage;
                var7 = var8.remove;
                var6 = _closure1_slot17;
                var6 = var7.bind(var8)(var6);
                var6 = var2[var5];
                var6 = var4.bind(var1)(var6);
                var8 = var6.Storage;
                var7 = var8.remove;
                var6 = _closure1_slot18;
                var6 = var7.bind(var8)(var6);
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.remove;
                var2 = _closure1_slot19;
                var2 = var4.bind(var5)(var2);
                var2 = {};
                _closure1_slot29 = var2;
                var2 = {};
                _closure1_slot30 = var2;
 168:
                var2 = {};
                _closure1_slot26 = var2;
                var2 = {};
                var9 = _closure1_slot25;
                var10 = var2;
                var4 = copyDataProperties(var10, var9);
                var5 = new Array(0);
                var4 = 'rawUserExperiments';
                var2[var4] = var5;
                _closure1_slot25 = var2;
                var2 = {};
                _closure1_slot22 = var2;
                var2 = false;
                _closure1_slot21 = var2;
                return var1;
            }
        };
        var _closure1_slot55 = var1;
        var1 = function handleLogin() {
            var1 = false;
            _closure1_slot21 = var1;
            var1 = {};
            _closure1_slot22 = var1;
            var1 = {};
            _closure1_slot27 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.Storage;
            var3 = var4.remove;
            var2 = _closure1_slot16;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot56 = var1;
        var1 = function loadLocalOverrides() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 16;
                var3 = var1[var5];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = var3.Storage;
                var4 = var6.get;
                var3 = _closure1_slot17;
                var3 = var4.bind(var6)(var3);
                var10 = null;
                if(!(var10 == var3)) { _fun0026_ip = 53; continue _fun0026 }
 51:
                var3 = {};
 53:
                var9 = new Array(3);
                var9[0] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var6 = var3.Storage;
                var4 = var6.get;
                var3 = _closure1_slot18;
                var3 = var4.bind(var6)(var3);
                if(!(var10 == var3)) { _fun0026_ip = 104; continue _fun0026 }
 102:
                var3 = {};
 104:
                var9[1] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var3 = _closure1_slot19;
                var3 = var4.bind(var5)(var3);
                if(!(var10 == var3)) { _fun0026_ip = 151; continue _fun0026 }
 149:
                var3 = {};
 151:
                var9[2] = var3;
                var3 = {};
                _closure1_slot29 = var3;
                var3 = {};
                _closure1_slot30 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 17;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.isEmpty;
                var8 = 0;
                var3 = var9[var8];
                var3 = var4.bind(var5)(var3);
                var7 = !var3;
                var3 = var9.length;
                var3 = var8 < var3;
                var12 = true;
                var6 = undefined;
                var5 = undefined;
                var4 = var7;
                if(!var3) { _fun0026_ip = 473; continue _fun0026 }
 231:
                var20 = var9[var8];
                var18 = var20;
                var14 = var7;
                var13 = var6;
                var3 = var5;
                var11 = var14;
                var6 = var13;
                var5 = var3;
                for(var15 in var18)
 267:
                {
                    var23 = var14;
                    var6 = var13;
                    var5 = var3;
                    var11 = var23;
 291:
                    var22 = var15;
                    var21 = var20[var22];
                    if(!(var10 != var21)) { _fun0026_ip = 435; continue _fun0026 }
 305:
                    var25 = var21.type;
                    var24 = _closure1_slot11;
                    var24 = var24.USER;
                    if(!(var25 !== var24)) { _fun0026_ip = 343; continue _fun0026 }
 324:
                    var25 = var21.type;
                    var24 = _closure1_slot11;
                    var24 = var24.GUILD;
                    if(!(var25 === var24)) { _fun0026_ip = 435; continue _fun0026 }
 343:
                    var24 = var21.bucket;
                    if(!(var10 != var24)) { _fun0026_ip = 435; continue _fun0026 }
 353:
                    var24 = var21.override;
                    if(!(var12 === var24)) { _fun0026_ip = 435; continue _fun0026 }
 363:
                    var24 = var21.fromCookie;
                    if(var24) { _fun0026_ip = 435; continue _fun0026 }
 372:
                    var25 = var21.type;
                    var24 = _closure1_slot11;
                    var24 = var24.USER;
                    if(!(var25 !== var24)) { _fun0026_ip = 413; continue _fun0026 }
 391:
                    var24 = _closure1_slot30;
                    var24[var22] = var21;
                    var14 = var23;
                    var13 = var22;
                    var3 = var21;
                    _fun0026_ip = 267; continue _fun0026;
 413:
                    var24 = _closure1_slot29;
                    var24[var22] = var21;
                    var14 = var23;
                    var13 = var22;
                    var3 = var21;
                    _fun0026_ip = 267; continue _fun0026;
 435:
                    var23 = delete var20[var22];
                    var14 = true;
                    var13 = var22;
                    var3 = var21;
                    _fun0026_ip = 267; continue _fun0026;
                }
 452:
                var8 = var8 + 1;
                var3 = var9.length;
                var7 = var11;
                var4 = var7;
                if(var8 < var3) { _fun0026_ip = 231; continue _fun0026 }
 473:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 11;
                var3 = var6[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.getBuildOverrideExperiments;
                var11 = var3.bind(var5)();
                var9 = var11;
                var5 = false;
                var3 = false;
                for(var6 in var9)
 518:
                {
                    var3 = var5;
 530:
                    var15 = var6;
                    var14 = _closure1_slot29;
                    var13 = {'type': null, 'revision': 1, 'population': 0, 'override': true, 'fromCookie': true, 'assignmentSource': 'override'};
                    var16 = _closure1_slot11;
                    var16 = var16.USER;
                    var13['type'] = var16;
                    var16 = var11[var15];
                    var13['bucket'] = var16;
                    var14[var15] = var13;
                    var14 = _closure1_slot30;
                    var13 = {'type': null, 'revision': 1, 'override': true, 'fromCookie': true, 'assignmentSource': 'override'};
                    var16 = _closure1_slot11;
                    var16 = var16.GUILD;
                    var13['type'] = var16;
                    var16 = var11[var15];
                    var13['bucket'] = var16;
                    var14[var15] = var13;
                    var5 = true;
                    _fun0026_ip = 518; continue _fun0026;
                }
 627:
                if(var3) { _fun0026_ip = 633; continue _fun0026 }
 630:
                var3 = var4;
 633:
                if(!var3) { _fun0026_ip = 644; continue _fun0026 }
 636:
                var2 = _closure1_slot58;
                var2 = var2.bind(var1)();
 644:
                return var1;
            }
        };
        var _closure1_slot57 = var1;
        var1 = function saveExperimentOverrides() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot18;
                var1 = _closure1_slot29;
                var1 = var3.bind(var4)(var2, var1);
 50: // try_end0
                _fun0027_ip = 135; continue _fun0027;
 52: // catch_target0
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot20;
                var3 = var4.error;
                var2 = 'Error saving user experiment overrides, unsaved data will be lost';
                var2 = var3.bind(var4)(var2, var5);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot13;
                var2 = var1.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                var1 = {'module': 'discord_app', 'call': 'ExperimentStore.saveExperimentOverrides'};
                var1 = var3.bind(var4)(var2, var1);
 135: // try_start_1
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot19;
                var1 = _closure1_slot30;
                var1 = var3.bind(var4)(var2, var1);
 185: // try_end1
                _fun0027_ip = 270; continue _fun0027;
 187: // catch_target1
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot20;
                var3 = var4.error;
                var2 = 'Error saving guild experiment overrides, unsaved data will be lost';
                var2 = var3.bind(var4)(var2, var5);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot13;
                var2 = var1.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                var1 = {'module': 'discord_app', 'call': 'ExperimentStore.saveExperimentOverrides'};
                var1 = var3.bind(var4)(var2, var1);
 270:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot58 = var1;
        var1 = function saveTrackedExposureExperiments(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var5 = arg1;
 3: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot16;
                var1 = {};
                var6 = 1;
                var1['v'] = var6;
                var1['e'] = var5;
                var1 = var3.bind(var4)(var2, var1);
 62: // try_end0
                _fun0028_ip = 147; continue _fun0028;
 64: // catch_target0
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot20;
                var3 = var4.error;
                var2 = 'Error saving tracked exposure experiments, unsaved data will be lost';
                var2 = var3.bind(var4)(var2, var5);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot13;
                var2 = var1.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                var1 = {'module': 'discord_app', 'call': 'ExperimentStore.saveTrackedExposureExperiments'};
                var1 = var3.bind(var4)(var2, var1);
 147:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot59 = var1;
        var1 = function handleExperimentOverrideBucket(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var1 = arg1;
                var3 = var1.experimentId;
                var7 = var1.experimentBucket;
                var8 = var1.experimentType;
                var1 = var1.skipCleanup;
                var6 = null;
                if(!(var6 == var8)) { _fun0029_ip = 63; continue _fun0029 }
 35:
                var2 = _closure1_slot24;
                var4 = var2[var3];
                var5 = var6 == var4;
                var2 = undefined;
                if(var5) { _fun0029_ip = 60; continue _fun0029 }
 55:
                var2 = var4.type;
 60:
                var8 = var2;
 63:
                if(!(var6 != var8)) { _fun0029_ip = 366; continue _fun0029 }
 70:
                if(!(var6 != var7)) { _fun0029_ip = 188; continue _fun0029 }
 74:
                var2 = 'user';
                if(!(var2 !== var8)) { _fun0029_ip = 135; continue _fun0029 }
 82:
                var4 = {};
                var14 = _closure1_slot30;
                var15 = var4;
                var5 = copyDataProperties(var15, var14);
                var5 = {};
                var5['type'] = var8;
                var9 = 1;
                var5['revision'] = var9;
                var5['bucket'] = var7;
                var9 = true;
                var5['override'] = var9;
                var4[var3] = var5;
                _closure1_slot30 = var4;
                _fun0029_ip = 233; continue _fun0029;
 135:
                var4 = {};
                var14 = _closure1_slot29;
                var15 = var4;
                var5 = copyDataProperties(var15, var14);
                var5 = {'type': null, 'revision': 1, 'population': 0, 'bucket': null, 'override': true};
                var5['type'] = var8;
                var5['bucket'] = var7;
                var4[var3] = var5;
                _closure1_slot29 = var4;
                _fun0029_ip = 233; continue _fun0029;
 188:
                var2 = {};
                var14 = _closure1_slot29;
                var15 = var2;
                var5 = copyDataProperties(var15, var14);
                _closure1_slot29 = var2;
                var2 = delete var2[var3];
                var2 = {};
                var14 = _closure1_slot30;
                var15 = var2;
                var5 = copyDataProperties(var15, var14);
                _closure1_slot30 = var2;
                var2 = delete var2[var3];
 233:
                if(var1) { _fun0029_ip = 351; continue _fun0029 }
 236:
                var1 = _closure1_slot29;
                var4 = new Array(2);
                var4[0] = var1;
                var1 = _closure1_slot30;
                var4[1] = var1;
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = undefined;
                if(!var1) { _fun0029_ip = 351; continue _fun0029 }
 275:
                var1 = var4[var3];
                var10 = var1;
                var1 = var2;
                var2 = var1;
                for(var7 in var10)
 296:
                {
                    var2 = var1;
 308:
                    var12 = var7;
                    var13 = _closure1_slot24;
                    var13 = var13[var12];
                    var1 = var12;
                    if(var6 != var13) { _fun0029_ip = 296; continue _fun0029 }
 326:
                    var13 = _closure1_slot29;
                    var13 = delete var13[var12];
                    var1 = var12;
                    _fun0029_ip = 296; continue _fun0029;
                }
 339:
                var3 = var3 + 1;
                var1 = var4.length;
                if(var3 < var1) { _fun0029_ip = 275; continue _fun0029 }
 351:
                var2 = _closure1_slot58;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
 366:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot60 = var1;
        var1 = function handleGuildChange(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var1 = arg1;
                var11 = var1.guild;
                var9 = _closure1_slot28;
                var4 = ':';
                var1 = undefined;
                var3 = 1;
                var2 = 0;
                for(var5 in var9)
 34:
                {
 43:
                    var13 = var5;
                    var12 = var13.split;
                    var14 = var12.bind(var13)(var4);
                    var12 = _closure1_slot8;
                    var12 = var12.bind(var1)(var14, var3);
                    var14 = var12[var2];
                    var12 = var11.id;
                    if(var12 !== var14) { _fun0030_ip = 34; continue _fun0030 }
 79:
                    var12 = _closure1_slot28;
                    var12 = delete var12[var13];
                    _fun0030_ip = 34; continue _fun0030;
                }
 89:
                return var1;
            }
        };
        var _closure1_slot61 = var1;
        var4 = global;
        var9 = var4.Object;
        var8 = var9.defineProperty;
        var5 = {};
        var11 = true;
        var5['value'] = var11;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var5);
        var1 = 0;
        var5 = var7[var1];
        var1 = undefined;
        var5 = var10.bind(var1)(var5);
        var _closure1_slot3 = var5;
        var5 = 1;
        var8 = var7[var5];
        var8 = var10.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var8 = 2;
        var8 = var7[var8];
        var8 = var10.bind(var1)(var8);
        var _closure1_slot5 = var8;
        var8 = 3;
        var8 = var7[var8];
        var8 = var10.bind(var1)(var8);
        var _closure1_slot6 = var8;
        var8 = 4;
        var8 = var7[var8];
        var8 = var10.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var8 = 5;
        var8 = var7[var8];
        var8 = var10.bind(var1)(var8);
        var _closure1_slot8 = var8;
        var8 = 6;
        var8 = var7[var8];
        var8 = var10.bind(var1)(var8);
        var _closure1_slot9 = var8;
        var8 = 7;
        var8 = var7[var8];
        var9 = var10.bind(var1)(var8);
        var8 = 8;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var12 = var8.ExperimentBuckets;
        var _closure1_slot10 = var12;
        var12 = var8.ExperimentTypes;
        var _closure1_slot11 = var12;
        var12 = var8.ExposureTypes;
        var _closure1_slot12 = var12;
        var12 = var8.TriggerDebuggingAAExperiments;
        var8 = 9;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var13 = var8.AnalyticEvents;
        var _closure1_slot13 = var13;
        var13 = var8.EMPTY_STRING_SNOWFLAKE_ID;
        var _closure1_slot14 = var13;
        var8 = var8.UserFlags;
        var _closure1_slot15 = var8;
        var8 = 'scientist:triggered';
        var _closure1_slot16 = var8;
        var8 = 'exerimentOverrides';
        var _closure1_slot17 = var8;
        var8 = 'userExperimentOverrides';
        var _closure1_slot18 = var8;
        var8 = 'guildExperimentOverrides';
        var _closure1_slot19 = var8;
        var8 = 10;
        var8 = var7[var8];
        var10 = var10.bind(var1)(var8);
        var8 = var10.prototype;
        var13 = Object.create(var8, {constructor: {value: var10}});
        var8 = 'ExperimentStore';
        var17 = var13;
        var16 = var8;
        var10 = new var17[var10](var16, var15);
        var10 = var10 instanceof Object ? var10 : var13;
        var _closure1_slot20 = var10;
        var10 = false;
        var _closure1_slot21 = var10;
        var10 = {};
        var _closure1_slot22 = var10;
        var10 = var4.Map;
        var13 = var10.prototype;
        var13 = Object.create(var13, {constructor: {value: var10}});
        var17 = var13;
        var10 = new var17[var10](var16);
        var10 = var10 instanceof Object ? var10 : var13;
        var _closure1_slot23 = var10;
        var10 = {};
        var _closure1_slot24 = var10;
        var10 = {};
        var13 = new Array(0);
        var10['rawUserExperiments'] = var13;
        var13 = new Array(0);
        var10['rawGuildExperiments'] = var13;
        var _closure1_slot25 = var10;
        var10 = {};
        var _closure1_slot26 = var10;
        var10 = {};
        var _closure1_slot27 = var10;
        var10 = {};
        var _closure1_slot28 = var10;
        var10 = {};
        var _closure1_slot29 = var10;
        var10 = {};
        var _closure1_slot30 = var10;
        var10 = var4.window;
        var10 = var10.GLOBAL_ENV;
        var13 = var10.RELEASE_CHANNEL;
        var10 = 'staging';
        var10 = var10 === var13;
        if(var10) { _fun0001_ip = 731; continue _fun0001 }
 729:
        var10 = true;
 731:
        var _closure1_slot31 = var10;
        var10 = {};
        var _closure1_slot32 = var10;
        var11 = var12.map;
        var10 = function(arg1) {
            var3 = _closure1_slot38;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var10 = var11.bind(var12)(var10);
        var _closure1_slot33 = var10;
        var10 = 604800000;
        var _closure1_slot34 = var10;
        var10 = var4.Date;
        var4 = var10.now;
        var4 = var4.bind(var10)();
        var4 = function(arg1) {
            var4 = function ExperimentStore() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                    var5 = this;
                    var1 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var5, var3);
                    var1 = {};
                    var6 = _closure1_slot55;
                    var1['LOGOUT'] = var6;
                    var6 = _closure1_slot56;
                    var1['LOGIN_SUCCESS'] = var6;
                    var6 = _closure1_slot48;
                    var1['CONNECTION_OPEN'] = var6;
                    var1['EXPERIMENTS_FETCH_SUCCESS'] = var6;
                    var6 = _closure1_slot53;
                    var1['OVERLAY_INITIALIZE'] = var6;
                    var6 = _closure1_slot54;
                    var1['EXPERIMENTS_FETCH_FAILURE'] = var6;
                    var6 = _closure1_slot60;
                    var1['EXPERIMENT_OVERRIDE_BUCKET'] = var6;
                    var6 = _closure1_slot61;
                    var1['GUILD_CREATE'] = var6;
                    var1['GUILD_UPDATE'] = var6;
                    var10 = new Array(2);
                    var10[0] = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 18;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.DispatchBand;
                    var1 = var1.Early;
                    var10[1] = var1;
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot35;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0031_ip = 181; continue _fun0031 }
 168:
                    var1 = var9.apply;
                    var1 = var1.bind(var9)(var5, var10);
                    _fun0031_ip = 215; continue _fun0031;
 181:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var1 = var7.bind(var8)(var9, var10, var6);
 215:
                    var1 = var3.bind(var4)(var5, var1);
                    var2 = _closure1_slot44;
                    var1['trackExposure'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot7;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot4;
            var5 = {};
            var1 = 'initialize';
            var5['key'] = var1;
            var1 = function value() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                    var3 = this;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var6 = var4.Storage;
                    var5 = var6.get;
                    var4 = _closure1_slot16;
                    var4 = var5.bind(var6)(var4);
                    var5 = null;
                    if(!(var5 != var4)) { _fun0032_ip = 168; continue _fun0032 }
 54:
                    var6 = var4.v;
                    var5 = 1;
                    if(!(var5 === var6)) { _fun0032_ip = 168; continue _fun0032 }
 66:
                    var5 = var4.e;
                    var4 = global;
                    var6 = var4.Date;
                    var4 = var6.now;
                    var13 = var4.bind(var6)();
                    var11 = var5;
                    var4 = false;
                    var6 = false;
                    for(var8 in var11)
 103:
                    {
                        var6 = var4;
 115:
                        var14 = var8;
                        var15 = var5[var14];
                        var15 = var15.time;
                        var16 = var13 - var15;
                        var15 = _closure1_slot34;
                        if(!(var16 > var15)) { _fun0032_ip = 103; continue _fun0032 }
 140:
                        var14 = delete var5[var14];
                        var4 = true;
                        _fun0032_ip = 103; continue _fun0032;
                    }
 148:
                    var4 = var5;
                    if(!var6) { _fun0032_ip = 170; continue _fun0032 }
 154:
                    var6 = _closure1_slot59;
                    var6 = var6.bind(var1)(var5);
                    var4 = var5;
                    _fun0032_ip = 170; continue _fun0032;
 168:
                    var4 = {};
 170:
                    _closure1_slot22 = var4;
                    var4 = _closure1_slot57;
                    var4 = var4.bind(var1)();
                    var4 = var3.waitFor;
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var3)(var2);
                    var2 = var3.loadCache;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(20);
            var1[0] = var5;
            var5 = {};
            var7 = 'loadCache';
            var5['key'] = var7;
            var7 = function value() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                    var4 = this;
                    var3 = var4.readSnapshot;
                    var2 = _closure2_slot0;
                    var2 = var2.LATEST_SNAPSHOT_VERSION;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0033_ip = 171; continue _fun0033 }
 38:
                    var2 = 'loadedUserExperiments';
                    var4 = var2 in var3;
                    if(var4) { _fun0033_ip = 68; continue _fun0033 }
 52:
                    var6 = _closure1_slot49;
                    var5 = undefined;
                    var4 = true;
                    var4 = var6.bind(var5)(var3, var4);
                    _fun0033_ip = 171; continue _fun0033;
 68:
                    var4 = var3.loadedUserExperiments;
                    _closure1_slot26 = var4;
                    var5 = _closure1_slot52;
                    var4 = var3.loadedGuildExperiments;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    _closure1_slot27 = var3;
                    var3 = global;
                    var6 = var3.Object;
                    var5 = var6.values;
                    var4 = _closure1_slot26;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        var1 = true;
                        var2 = arg1;
                        var2['loadedFromCache'] = var1;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot27;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = true;
                        var2 = arg1;
                        var2['loadedFromCache'] = var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 171:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'takeSnapshot';
            var5['key'] = var7;
            var7 = function value() {
                var1 = {};
                var2 = _closure2_slot0;
                var2 = var2.LATEST_SNAPSHOT_VERSION;
                var1['version'] = var2;
                var2 = {};
                var4 = _closure1_slot25;
                var5 = var2;
                var3 = copyDataProperties(var5, var4);
                var1['data'] = var2;
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'hasLoadedExperiments';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot21;
                return var1;
            };
            var5['get'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'hasRegisteredExperiment';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot24;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'getUserExperimentDescriptor';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                    var5 = arg1;
                    var1 = _closure1_slot31;
                    if(!var1) { _fun0034_ip = 27; continue _fun0034 }
 13:
                    var1 = _closure1_slot29;
                    var1 = var1[var5];
                    var3 = null;
                    if(!(var3 == var1)) { _fun0034_ip = 70; continue _fun0034 }
 27:
                    var4 = _closure1_slot38;
                    var3 = undefined;
                    var5 = var4.bind(var3)(var5);
                    var3 = _closure1_slot26;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var2 = '';
                    var2 = var4.bind(var2)(var5);
                    var2 = var3[var2];
                    return var2;
 70:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'getGuildExperimentDescriptor';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                    var7 = arg1;
                    var6 = arg2;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0035_ip = 19; continue _fun0035 }
 12:
                    var6 = _closure1_slot14;
 19:
                    var1 = _closure1_slot30;
                    var1 = var1[var7];
                    var4 = _closure1_slot31;
                    if(!var4) { _fun0035_ip = 41; continue _fun0035 }
 37:
                    if(!(var3 == var1)) { _fun0035_ip = 112; continue _fun0035 }
 41:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = ':';
                    var3 = var5.bind(var4)(var6, var3, var7);
                    var4 = _closure1_slot28;
                    var4 = var3 in var4;
                    if(var4) { _fun0035_ip = 102; continue _fun0035 }
 80:
                    var5 = _closure1_slot51;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var6, var7);
                    var5 = _closure1_slot28;
                    var5[var3] = var4;
                    return var4;
 102:
                    var2 = _closure1_slot28;
                    var2 = var2[var3];
                    return var2;
 112:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'getUserExperimentBucket';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                    var3 = this;
                    var2 = var3.getUserExperimentDescriptor;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0036_ip = 38; continue _fun0036 }
 23:
                    var1 = _closure1_slot10;
                    var1 = var1.NOT_ELIGIBLE;
                    _fun0036_ip = 44; continue _fun0036;
 38:
                    var1 = var2.bucket;
 44:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'getGuildExperimentBucket';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                    var4 = this;
                    var3 = var4.getGuildExperimentDescriptor;
                    var2 = arg1;
                    var1 = arg2;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0037_ip = 42; continue _fun0037 }
 27:
                    var1 = _closure1_slot10;
                    var1 = var1.NOT_ELIGIBLE;
                    _fun0037_ip = 48; continue _fun0037;
 42:
                    var1 = var2.bucket;
 48:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'getAllUserExperimentDescriptors';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot26;
                return var1;
            };
            var5['value'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'getGuildExperiments';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot27;
                return var1;
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getLoadedUserExperiment';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot26;
                var4 = _closure1_slot38;
                var3 = undefined;
                var1 = arg1;
                var1 = var4.bind(var3)(var1);
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'getLoadedGuildExperiment';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot27;
                var4 = _closure1_slot38;
                var3 = undefined;
                var1 = arg1;
                var1 = var4.bind(var3)(var1);
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'getRecentExposures';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var2 = global;
                var3 = var2.HermesInternal;
                var7 = var3.concat;
                var12 = '';
                var11 = arg1;
                var4 = '|';
                var9 = arg2;
                var10 = var4;
                var8 = var4;
                var3 = var12[var7](var11, var10, var9, var8, var7);
                var _closure3_slot0 = var3;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = _closure1_slot22;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                        var2 = arg1;
                        var1 = var2[Symbol.iterator];
                        var2 = var1().next;
                        var4 = var2().value;
                        var2 = var1;
                        var3 = undefined;
                        var2 = var2 === var3;
                        if(var2) { _fun0038_ip = 25; continue _fun0038 }
 22:
                        var3 = var4;
 25:
                        if(var2) { _fun0038_ip = 31; continue _fun0038 }
 28:
                        var1.return();
 31:
                        var2 = var3.startsWith;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                        var7 = arg1;
                        var2 = var7[Symbol.iterator];
                        var7 = var2().next;
                        var9 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        var8 = var7().value;
                        var10 = var2;
                        var10 = var10 === var9;
                        var3 = var10;
                        if(var10) { _fun0039_ip = 32; continue _fun0039 }
 29:
                        var6 = var8;
 32:
                        var4 = var6;
                        var6 = undefined;
                        var8 = var3;
                        if(var8) { _fun0039_ip = 63; continue _fun0039 }
 43:
                        var7 = var7().value;
                        var8 = var2;
                        var8 = var8 === var9;
                        var3 = var8;
                        if(var8) { _fun0039_ip = 63; continue _fun0039 }
 60:
                        var6 = var7;
 63: // try_start_0
                        var5 = var6.time;
 69: // try_end0
                        var6 = var3;
                        if(var6) { _fun0039_ip = 78; continue _fun0039 }
 75:
                        var2.return();
 78:
                        var8 = var4;
                        var7 = var8.replace;
                        var6 = _closure3_slot0;
                        var4 = '';
                        var6 = var7.bind(var8)(var6, var4);
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var5;
                        return var4;
 117: // catch_target0
                        CatchBlockStart(arg_register=0);
                        _fun0039_ip = 123; continue _fun0039;
 121:
                        CatchBlockStart(arg_register=0);
 123:
                        if(var3) { _fun0039_ip = 129; continue _fun0039 }
 126:
                        var2.return();
 129:
                        throw var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'getRegisteredExperiments';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot24;
                return var1;
            };
            var5['value'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'getAllExperimentOverrideDescriptors';
            var5['key'] = var7;
            var7 = function value() {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                    var1 = _closure1_slot31;
                    var2 = {};
                    if(var1) { _fun0040_ip = 17; continue _fun0040 }
 12:
                    var1 = var2;
                    _fun0040_ip = 42; continue _fun0040;
 17:
                    var5 = _closure1_slot29;
                    var6 = var2;
                    var4 = copyDataProperties(var6, var5);
                    var5 = _closure1_slot30;
                    var6 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var1 = var2;
 42:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[15] = var5;
            var5 = {};
            var7 = 'getExperimentOverrideDescriptor';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure1_slot31;
                    var5 = null;
                    var1 = null;
                    if(!var2) { _fun0041_ip = 40; continue _fun0041 }
 17:
                    var2 = _closure1_slot29;
                    var2 = var2[var4];
                    if(!(var5 == var2)) { _fun0041_ip = 37; continue _fun0041 }
 29:
                    var3 = _closure1_slot30;
                    var2 = var3[var4];
 37:
                    var1 = var2;
 40:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'getAllExperimentAssignments';
            var5['key'] = var7;
            var7 = function value() {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                    var1 = {};
                    var9 = {};
                    var _closure3_slot0 = var9;
                    var7 = global;
                    var11 = var7.Object;
                    var10 = var11.keys;
                    var7 = _closure1_slot24;
                    var10 = var10.bind(var11)(var7);
                    var7 = var10.forEach;
                    var2 = function(arg1) {
                        var4 = arg1;
                        var3 = _closure3_slot0;
                        var5 = _closure1_slot38;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = '';
                        var2 = var2.bind(var1)(var4);
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var3[var2] = var4;
                        return var1;
                    };
                    var2 = var7.bind(var10)(var2);
                    var5 = _closure1_slot26;
                    var7 = null;
                    for(var2 in var5)
 64:
                    {
 73:
                        var12 = var2;
                        var11 = var9[var12];
                        if(var7 == var11) { _fun0042_ip = 64; continue _fun0042 }
 84:
                        var10 = _closure1_slot26;
                        var10 = var10[var12];
                        var10 = var10.bucket;
                        var1[var11] = var10;
                        _fun0042_ip = 64; continue _fun0042;
                    }
 104:
                    var5 = _closure1_slot28;
                    for(var2 in var5)
 116:
                    {
 125:
                        var10 = var2;
                        var9 = _closure1_slot28;
                        var9 = var9[var10];
                        if(var7 == var9) { _fun0042_ip = 116; continue _fun0042 }
 140:
                        var9 = var9.bucket;
                        var1[var10] = var9;
                        _fun0042_ip = 116; continue _fun0042;
                    }
 152:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'getSerializedState';
            var5['key'] = var7;
            var7 = function value() {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                    var3 = {};
                    var11 = _closure1_slot27;
                    var7 = global;
                    var5 = undefined;
                    for(var8 in var11)
 21:
                    {
 30:
                        var1 = var8;
                        var13 = var7.JSON;
                        var6 = var13.parse;
                        var15 = var7.JSON;
                        var14 = var15.stringify;
                        var4 = _closure1_slot27;
                        var4 = var4[var1];
                        var4 = var14.bind(var15)(var4);
                        var4 = var6.bind(var13)(var4);
                        var3[var1] = var4;
                        var4 = _closure1_slot36;
                        var1 = var3[var1];
                        var1 = var1.populations;
                        var6 = var4.bind(var5)(var1);
                        var4 = var6.bind(var5)();
                        var1 = var4.done;
                        if(var1) { _fun0043_ip = 21; continue _fun0043 }
 110:
                        var13 = var4.value;
                        var1 = new Array(0);
                        var13['filters'] = var1;
                        var13 = var6.bind(var5)();
                        var1 = var13.done;
                        var4 = var13;
                        if(var1) { _fun0043_ip = 21; continue _fun0043 }
 140:
                        _fun0043_ip = 110; continue _fun0043;
                    }
 142:
                    var1 = {};
                    var4 = _closure1_slot21;
                    var1['hasLoadedExperiments'] = var4;
                    var4 = _closure1_slot22;
                    var1['trackedExposureExperiments'] = var4;
                    var4 = _closure1_slot26;
                    var1['loadedUserExperiments'] = var4;
                    var1['loadedGuildExperiments'] = var3;
                    var3 = _closure1_slot29;
                    var1['userExperimentOverrides'] = var3;
                    var3 = _closure1_slot30;
                    var1['guildExperimentOverrides'] = var3;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getBuildOverrideExperiments;
                    var3 = var3.bind(var4)();
                    var1['cookieOverrides'] = var3;
                    var3 = _closure1_slot25;
                    var3 = var3.source;
                    var1['assignmentSource'] = var3;
                    var3 = _closure1_slot25;
                    var3 = var3.sessionId;
                    var1['assignmentSessionId'] = var3;
                    var2 = _closure1_slot25;
                    var2 = var2.fingerprint;
                    var1['assignmentFingerprint'] = var2;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[18] = var5;
            var5 = {};
            var7 = 'hasExperimentTrackedExposure';
            var5['key'] = var7;
            var6 = function value(arg1, arg2, arg3, arg4) {
                var5 = arg2;
                var4 = _closure1_slot43;
                var8 = _closure1_slot41;
                var3 = undefined;
                var12 = arg1;
                var10 = arg3;
                var9 = arg4;
                var13 = undefined;
                var11 = var5;
                var2 = var13[var8](var12, var11, var10, var9, var8);
                var1 = _closure1_slot42;
                var1 = var1.bind(var3)(var5);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var5['value'] = var6;
            var1[19] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var4 = var4.bind(var1)(var9);
        var4['displayName'] = var8;
        var4['LATEST_SNAPSHOT_VERSION'] = var5;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var17 = var5;
        var4 = new var17[var4](var16);
        var4 = var4 instanceof Object ? var4 : var5;
        var5 = 19;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/experiments/ExperimentStore.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var2 = function registerExperiment(arg1) {
            var1 = arg1;
            var3 = var1.experimentId;
            var8 = var1.experimentType;
            var7 = var1.title;
            var6 = var1.description;
            var5 = var1.buckets;
            var4 = var1.commonTriggerPoint;
            var2 = _closure1_slot24;
            var1 = {};
            var1['type'] = var8;
            var1['title'] = var7;
            var1['description'] = var6;
            var1['buckets'] = var5;
            var1['commonTriggerPoint'] = var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        };
        var3['registerExperiment'] = var2;
        return var1;
    }
})();