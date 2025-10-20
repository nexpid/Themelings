// app/modules/experiments/ExperimentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var7;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
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
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 6:
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = var3.@@iterator;
case 8:
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
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
                if(!var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var7 = var3.constructor;
case 18:
                var10 = var9;
                if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var7 = var3.constructor;
                var10 = var7.name;
case 20:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 25:
                var9 = _closure1_slot37;
                var7 = var9.bind(var8)(var3, var8);
case 27:
                _fun0003_ip = 28; continue _fun0003;
case 22:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 28:
                var6 = var7;
                _fun0003_ip = 14; continue _fun0003;
case 16:
                var7 = _closure1_slot37;
                var6 = var7.bind(var8)(var3, var8);
case 14:
                var4 = var6;
                if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 29:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 12:
                if(!var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                _closure2_slot0 = var4;
case 30:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 32; continue _fun0004 }
case 33:
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
                        _fun0004_ip = 34; continue _fun0004;
case 32:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
case 34:
                        return var1;
                    }
                };
                return var1;
case 10:
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
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var2 = var4.length;
                var1 = var3 > var2;
case 35:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var2 = var4.length;
case 37:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 3; continue _fun0005 }
case 8:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 8; continue _fun0005 }
case 3:
                return var1;
            }
        };
        var _closure1_slot37 = var1;
        var1 = function getHash(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot32;
                var1 = var1[var3];
                var5 = undefined;
                if(!(var5 !== var1)) { _fun0006_ip = 39; continue _fun0006 }
case 33:
                return var1;
case 39:
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
case 0:
                var1 = arg1;
                if(var1) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                var4 = _closure1_slot33;
                var3 = var4.includes;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
case 40:
                return var1;
            }
        };
        var _closure1_slot39 = var1;
        var1 = function userCanUseExperiments(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = var2.flags;
                var3 = null;
                var4 = var3 != var1;
                var5 = 0;
                if(!var4) { _fun0008_ip = 39; continue _fun0008 }
case 42:
                var5 = var1;
case 39:
                var4 = _closure1_slot15;
                var4 = var4.STAFF;
                var4 = var5 & var4;
                var1 = _closure1_slot15;
                var1 = var1.STAFF;
                var1 = var4 === var1;
                if(var1) { _fun0008_ip = 43; continue _fun0008 }
case 32:
                var2 = var2.personal_connection_id;
                var1 = var3 != var2;
case 43:
                return var1;
            }
        };
        var _closure1_slot40 = var1;
        var1 = function getTrackExposureExperimentKey(arg1, arg2, arg3, arg4) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
                if(!var7) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                var8 = undefined;
                var7 = var8 !== var6;
case 44:
                if(!var7) { _fun0009_ip = 4; continue _fun0009 }
case 46:
                var9 = var6.length;
                var8 = 0;
                var7 = var9 > var8;
case 4:
                var10 = var1.type;
                var9 = _closure1_slot11;
                var9 = var9.USER;
                if(!(var10 !== var9)) { _fun0009_ip = 47; continue _fun0009 }
case 15:
                var9 = var1.type;
                var8 = _closure1_slot11;
                var8 = var8.GUILD;
                if(!(var9 !== var8)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                var8 = var2.Error;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var14 = var9;
                var8 = new var14[var8](var13);
                var8 = var8 instanceof Object ? var8 : var9;
                throw var8;
case 48:
                var8 = var1.guildId;
                var1 = var2.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var5)(var8);
                var9 = var4 + var1;
                var1 = var9;
                if(!var7) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                var8 = var2.HermesInternal;
                var8 = var8.concat;
                var8 = var8.bind(var5)(var6);
                var10 = var9 + var8;
                var8 = var10;
                if(!var3) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                var9 = '|triggerDebugging';
                var8 = var10 + var9;
case 52:
                var1 = var8;
case 50:
                return var1;
case 47:
                var1 = var4;
                if(!var7) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var5)(var6);
                var4 = var4 + var2;
                var2 = var4;
                if(!var3) { _fun0009_ip = 56; continue _fun0009 }
case 27:
                var3 = '|triggerDebugging';
                var2 = var4 + var3;
case 56:
                var1 = var2;
case 54:
                return var1;
            }
        };
        var _closure1_slot41 = var1;
        var1 = function getTrackExposureExperimentHash(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var4 = var1.type;
                var3 = _closure1_slot11;
                var3 = var3.USER;
                if(!(var4 !== var3)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                var4 = var1.type;
                var3 = _closure1_slot11;
                var3 = var3.GUILD;
                if(!(var4 !== var3)) { _fun0010_ip = 4; continue _fun0010 }
case 59:
                var3 = global;
                var3 = var3.Error;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
case 4:
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
case 57:
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
case 0:
                var3 = _closure1_slot22;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0011_ip = 60; continue _fun0011 }
case 35:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = var3.time;
                var4 = var5 - var4;
                var2 = _closure1_slot34;
                var4 = var4 > var2;
                var2 = !var4;
                if(var4) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                var4 = var3.hash;
                var3 = arg2;
                var2 = var4 === var3;
case 61:
                var1 = var2;
case 60:
                return var1;
            }
        };
        var _closure1_slot43 = var1;
        var1 = function trackExposure(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
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
                if(!(var1 !== var4)) { _fun0012_ip = 63; continue _fun0012 }
case 43:
                var1 = 'ready_payload';
                if(!(var1 !== var4)) { _fun0012_ip = 64; continue _fun0012 }
case 61:
                var2 = 'logged_out_api';
                var3 = true;
                if(!(var2 === var4)) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                var4 = var9.fingerprint;
                var5 = _closure1_slot9;
                var2 = var5.getFingerprint;
                var2 = var2.bind(var5)();
                var3 = false;
                if(!(var4 !== var2)) { _fun0012_ip = 65; continue _fun0012 }
case 67:
                var3 = true;
                _fun0012_ip = 65; continue _fun0012;
case 64:
                var2 = var9.sessionId;
                var4 = _closure1_slot9;
                var1 = var4.getSessionId;
                var1 = var1.bind(var4)();
                var3 = false;
                if(!(var2 !== var1)) { _fun0012_ip = 65; continue _fun0012 }
case 68:
                var3 = true;
case 65:
                var1 = var9.override;
                if(var1) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                var1 = _closure1_slot12;
                var1 = var1.AUTO_FALLBACK;
                var6 = var12 === var1;
                if(!var6) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                var1 = var9.triggerDebuggingEnabled;
                var1 = !var1;
                var6 = !var1;
case 71:
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
                if(!var7) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                var17 = _closure1_slot23;
                var16 = var17.get;
                var16 = var16.bind(var17)(var5);
                var7 = var16 === var4;
case 73:
                if(var7) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                var7 = _closure1_slot43;
                var7 = var7.bind(var1)(var5, var4);
                if(var7) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                var16 = var9.type;
                var7 = _closure1_slot11;
                var7 = var7.USER;
                if(!(var16 !== var7)) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                var16 = var9.type;
                var7 = _closure1_slot11;
                var7 = var7.GUILD;
                if(!(var16 === var7)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                var7 = _closure1_slot13;
                if(var6) { _fun0012_ip = 83; continue _fun0012 }
case 31:
                var19 = var7.EXPERIMENT_GUILD_TRIGGERED;
                _fun0012_ip = 84; continue _fun0012;
case 83:
                var19 = var7.EXPERIMENT_GUILD_TRIGGERED_FALLBACK;
case 84:
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
                if(var3) { _fun0012_ip = 85; continue _fun0012 }
case 86:
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
                _fun0012_ip = 81; continue _fun0012;
case 85:
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
                _fun0012_ip = 81; continue _fun0012;
case 79:
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
                if(!(var12 != var11)) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                var11 = var11.guildId;
                var7['context_guild_id'] = var11;
case 87:
                var11 = _closure1_slot13;
                if(var6) { _fun0012_ip = 89; continue _fun0012 }
case 90:
                var14 = var11.EXPERIMENT_USER_TRIGGERED;
                _fun0012_ip = 91; continue _fun0012;
case 89:
                var14 = var11.EXPERIMENT_USER_TRIGGERED_FALLBACK;
case 91:
                if(var3) { _fun0012_ip = 92; continue _fun0012 }
case 93:
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
                _fun0012_ip = 81; continue _fun0012;
case 92:
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
case 81:
                if(var3) { _fun0012_ip = 94; continue _fun0012 }
case 95:
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
                _fun0012_ip = 96; continue _fun0012;
case 94:
                var3 = _closure1_slot23;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var4);
case 96:
                return var1;
case 77:
                var1 = false;
                return var1;
case 75:
                var1 = false;
                return var1;
case 69:
                var1 = false;
                return var1;
case 63:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot44 = var1;
        var1 = function _loadGuildFilter(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var4 = var5().value;
                var2 = var1;
                var6 = undefined;
                var3 = var2 === var6;
                var2 = undefined;
                if(var3) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                var2 = var4;
case 97:
                var4 = undefined;
                if(var3) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                var7 = var5().value;
                var5 = var1;
                var5 = var5 === var6;
                var4 = undefined;
                var3 = var5;
                if(var5) { _fun0013_ip = 99; continue _fun0013 }
case 101:
                var4 = var7;
                var3 = var5;
case 99:
                if(var3) { _fun0013_ip = 46; continue _fun0013 }
case 44:
                var1.return();
case 46:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 14;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.GUILD_FILTERS;
                var5 = var1[var2];
                var1 = null;
                var5 = var1 != var5;
                if(!var5) { _fun0013_ip = 102; continue _fun0013 }
case 103:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.GUILD_FILTERS;
                var2 = var3[var2];
                var1 = var2.bind(var3)(var4);
case 102:
                return var1;
            }
        };
        var _closure1_slot45 = var1;
        var1 = function _loadOverrides(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var2 = null;
                if(!(var2 != var3)) { _fun0014_ip = 49; continue _fun0014 }
case 104:
                var2 = _closure1_slot36;
                var5 = undefined;
                var4 = var2.bind(var5)(var3);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0014_ip = 105; continue _fun0014 }
case 106:
                var2 = var3.value;
                var9 = var2.b;
                var7 = _closure1_slot36;
                var2 = var2.k;
                var8 = var7.bind(var5)(var2);
                var7 = var8.bind(var5)();
                var2 = var7.done;
                if(var2) { _fun0014_ip = 107; continue _fun0014 }
case 4:
                var2 = var7.value;
                var1[var2] = var9;
                var10 = var8.bind(var5)();
                var2 = var10.done;
                var7 = var10;
                if(!var2) { _fun0014_ip = 4; continue _fun0014 }
case 107:
                var7 = var4.bind(var5)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0014_ip = 106; continue _fun0014 }
case 105:
                return var1;
case 49:
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
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var4 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var3 = var2 === var7;
                    var2 = undefined;
                    if(var3) { _fun0015_ip = 97; continue _fun0015 }
case 98:
                    var2 = var4;
case 97:
                    var4 = undefined;
                    if(var3) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var4 = undefined;
                    var3 = var5;
                    if(var5) { _fun0015_ip = 99; continue _fun0015 }
case 101:
                    var4 = var6;
                    var3 = var5;
case 99:
                    if(var3) { _fun0015_ip = 46; continue _fun0015 }
case 44:
                    var1.return();
case 46:
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
case 0:
                var1 = arg1;
                var4 = _closure1_slot31;
                var2 = !var4;
                if(var4) { _fun0016_ip = 108; continue _fun0016 }
case 109:
                var5 = var1.type;
                var4 = 'CONNECTION_OPEN';
                var2 = var4 === var5;
case 108:
                if(!var2) { _fun0016_ip = 110; continue _fun0016 }
case 100:
                var6 = _closure1_slot40;
                var5 = var1.user;
                var4 = undefined;
                var2 = var6.bind(var4)(var5);
case 110:
                if(!var2) { _fun0016_ip = 99; continue _fun0016 }
case 101:
                var2 = true;
                _closure1_slot31 = var2;
case 99:
                var4 = var1.type;
                var2 = 'EXPERIMENTS_FETCH_SUCCESS';
                var2 = var2 === var4;
                if(!var2) { _fun0016_ip = 111; continue _fun0016 }
case 112:
                var2 = _closure1_slot21;
case 111:
                if(!var2) { _fun0016_ip = 113; continue _fun0016 }
case 114:
                var4 = _closure1_slot25;
                var5 = var4.source;
                var4 = 'ready_payload';
                var2 = var4 === var5;
case 113:
                if(!var2) { _fun0016_ip = 115; continue _fun0016 }
case 116:
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
case 115:
                var2 = {};
                _closure1_slot26 = var2;
                var2 = {};
                _closure1_slot27 = var2;
                var2 = {};
                _closure1_slot28 = var2;
                var2 = var1.type;
                var5 = 'CONNECTION_OPEN';
                var4 = var5 === var2;
                if(var4) { _fun0016_ip = 117; continue _fun0016 }
case 118:
                var6 = var1.fingerprint;
                var2 = null;
                var4 = var2 == var6;
case 117:
                if(var4) { _fun0016_ip = 119; continue _fun0016 }
case 56:
                var6 = var1.fingerprint;
                var7 = _closure1_slot9;
                var2 = var7.getFingerprint;
                var2 = var2.bind(var7)();
                var4 = var6 === var2;
case 119:
                var8 = var1.experiments;
                var7 = var1.guildExperiments;
                var2 = var1.type;
                var6 = 'logged_out_api';
                if(!(var5 === var2)) { _fun0016_ip = 120; continue _fun0016 }
case 121:
                var6 = 'ready_payload';
case 120:
                var2 = 'sessionId';
                var2 = var2 in var1;
                if(var2) { _fun0016_ip = 122; continue _fun0016 }
case 123:
                var5 = _closure1_slot9;
                var2 = var5.getSessionId;
                var5 = var2.bind(var5)();
                var2 = null;
                var9 = var2 != var5;
                var2 = '';
                if(!var9) { _fun0016_ip = 124; continue _fun0016 }
case 125:
                var2 = var5;
case 124:
                _fun0016_ip = 126; continue _fun0016;
case 122:
                var2 = var1.sessionId;
case 126:
                var5 = _closure1_slot9;
                var1 = var5.getFingerprint;
                var1 = var1.bind(var5)();
                if(!var4) { _fun0016_ip = 127; continue _fun0016 }
case 128:
                var5 = _closure1_slot49;
                var4 = {};
                var4['rawUserExperiments'] = var8;
                var8 = null;
                if(!(var8 == var7)) { _fun0016_ip = 129; continue _fun0016 }
case 130:
                var7 = new Array(0);
case 129:
                var4['rawGuildExperiments'] = var7;
                var4['source'] = var6;
                var4['sessionId'] = var2;
                var4['fingerprint'] = var1;
                var2 = undefined;
                var1 = false;
                var1 = var5.bind(var2)(var4, var1);
case 127:
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
case 0:
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
                if(!(var3 === var1)) { _fun0017_ip = 99; continue _fun0017 }
case 8:
                var3 = false;
case 99:
                var _closure2_slot3 = var3;
                var6 = {};
                var6['rawUserExperiments'] = var7;
                var3 = null;
                var10 = var4;
                if(!(var3 == var10)) { _fun0017_ip = 131; continue _fun0017 }
case 111:
                var10 = new Array(0);
case 131:
                var6['rawGuildExperiments'] = var10;
                var6['source'] = var9;
                var6['sessionId'] = var8;
                var6['fingerprint'] = var5;
                _closure1_slot25 = var6;
                var6 = var7.forEach;
                var5 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var9 = arg1;
                        var2 = var9[Symbol.iterator];
                        var9 = var2().next;
                        var5 = var9().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0018_ip = 97; continue _fun0018 }
case 98:
                        var4 = var5;
case 97:
                        var15 = undefined;
                        if(var3) { _fun0018_ip = 99; continue _fun0018 }
case 100:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var15 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 99; continue _fun0018 }
case 101:
                        var15 = var6;
                        var3 = var5;
case 99:
                        var8 = undefined;
                        if(var3) { _fun0018_ip = 132; continue _fun0018 }
case 133:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var8 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 132; continue _fun0018 }
case 131:
                        var8 = var6;
                        var3 = var5;
case 132:
                        var13 = undefined;
                        if(var3) { _fun0018_ip = 67; continue _fun0018 }
case 134:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var13 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 67; continue _fun0018 }
case 135:
                        var13 = var6;
                        var3 = var5;
case 67:
                        var14 = undefined;
                        if(var3) { _fun0018_ip = 136; continue _fun0018 }
case 137:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var14 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 136; continue _fun0018 }
case 138:
                        var14 = var6;
                        var3 = var5;
case 136:
                        var12 = undefined;
                        if(var3) { _fun0018_ip = 139; continue _fun0018 }
case 65:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var12 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 139; continue _fun0018 }
case 140:
                        var12 = var6;
                        var3 = var5;
case 139:
                        var11 = undefined;
                        if(var3) { _fun0018_ip = 141; continue _fun0018 }
case 142:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var11 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 141; continue _fun0018 }
case 143:
                        var11 = var6;
                        var3 = var5;
case 141:
                        var10 = undefined;
                        if(var3) { _fun0018_ip = 144; continue _fun0018 }
case 145:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var10 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 144; continue _fun0018 }
case 146:
                        var10 = var6;
                        var3 = var5;
case 144:
                        var7 = undefined;
                        if(var3) { _fun0018_ip = 147; continue _fun0018 }
case 118:
                        var6 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var7 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 147; continue _fun0018 }
case 148:
                        var7 = var6;
                        var3 = var5;
case 147:
                        var6 = undefined;
                        if(var3) { _fun0018_ip = 80; continue _fun0018 }
case 149:
                        var16 = var9().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var6 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 80; continue _fun0018 }
case 150:
                        var6 = var16;
                        var3 = var5;
case 80:
                        var5 = undefined;
                        if(var3) { _fun0018_ip = 151; continue _fun0018 }
case 152:
                        var16 = var9().value;
                        var9 = var2;
                        var9 = var9 === var1;
                        var5 = undefined;
                        var3 = var9;
                        if(var9) { _fun0018_ip = 151; continue _fun0018 }
case 153:
                        var5 = var16;
                        var3 = var9;
case 151:
                        if(var3) { _fun0018_ip = 154; continue _fun0018 }
case 30:
                        var2.return();
case 154:
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
                        if(!var13) { _fun0018_ip = 155; continue _fun0018 }
case 156:
                        var8 = var12;
case 155:
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
                if(!(var3 != var4)) { _fun0017_ip = 138; continue _fun0017 }
case 157:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var6 = arg1;
                        var2 = var6[Symbol.iterator];
                        var6 = var2().next;
                        var5 = var6().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0019_ip = 97; continue _fun0019 }
case 98:
                        var4 = var5;
case 97:
                        var12 = undefined;
                        if(var3) { _fun0019_ip = 99; continue _fun0019 }
case 100:
                        var7 = var6().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var12 = undefined;
                        var3 = var5;
                        if(var5) { _fun0019_ip = 99; continue _fun0019 }
case 101:
                        var12 = var7;
                        var3 = var5;
case 99:
                        var5 = undefined;
                        if(var3) { _fun0019_ip = 132; continue _fun0019 }
case 133:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var5 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 132; continue _fun0019 }
case 131:
                        var5 = var8;
                        var3 = var7;
case 132:
                        var14 = undefined;
                        if(var3) { _fun0019_ip = 67; continue _fun0019 }
case 134:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var14 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 67; continue _fun0019 }
case 135:
                        var14 = var8;
                        var3 = var7;
case 67:
                        var10 = undefined;
                        if(var3) { _fun0019_ip = 136; continue _fun0019 }
case 137:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var10 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 136; continue _fun0019 }
case 138:
                        var10 = var8;
                        var3 = var7;
case 136:
                        var13 = undefined;
                        if(var3) { _fun0019_ip = 139; continue _fun0019 }
case 65:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var13 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 139; continue _fun0019 }
case 140:
                        var13 = var8;
                        var3 = var7;
case 139:
                        var11 = undefined;
                        if(var3) { _fun0019_ip = 141; continue _fun0019 }
case 142:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var11 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 141; continue _fun0019 }
case 143:
                        var11 = var8;
                        var3 = var7;
case 141:
                        var9 = undefined;
                        if(var3) { _fun0019_ip = 144; continue _fun0019 }
case 145:
                        var8 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var9 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 144; continue _fun0019 }
case 146:
                        var9 = var8;
                        var3 = var7;
case 144:
                        var8 = undefined;
                        if(var3) { _fun0019_ip = 147; continue _fun0019 }
case 118:
                        var15 = var6().value;
                        var7 = var2;
                        var7 = var7 === var1;
                        var8 = undefined;
                        var3 = var7;
                        if(var7) { _fun0019_ip = 147; continue _fun0019 }
case 148:
                        var8 = var15;
                        var3 = var7;
case 147:
                        var7 = undefined;
                        if(var3) { _fun0019_ip = 80; continue _fun0019 }
case 149:
                        var15 = var6().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var7 = undefined;
                        var3 = var6;
                        if(var6) { _fun0019_ip = 80; continue _fun0019 }
case 150:
                        var7 = var15;
                        var3 = var6;
case 80:
                        if(var3) { _fun0019_ip = 158; continue _fun0019 }
case 159:
                        var2.return();
case 158:
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
                        if(!(var5 == var13)) { _fun0019_ip = 160; continue _fun0019 }
case 161:
                        var13 = new Array(0);
case 160:
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
                        if(!var12) { _fun0019_ip = 162; continue _fun0019 }
case 163:
                        var10 = var11;
case 162:
                        var2['holdoutName'] = var10;
                        var10 = var5 != var9;
                        var5 = null;
                        if(!var10) { _fun0019_ip = 164; continue _fun0019 }
case 165:
                        var5 = var9;
case 164:
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
case 138:
                return var1;
            }
        };
        var _closure1_slot49 = var1;
        var1 = function computeGuildExperimentBucketFromPopulationsOrNull(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
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
                if(var4) { _fun0020_ip = 166; continue _fun0020 }
case 8:
                var4 = var9.value;
                var5 = var4.buckets;
                var17 = var4.filters;
                var16 = var1 != var17;
                var4 = true;
                var15 = var6;
                if(!var16) { _fun0020_ip = 167; continue _fun0020 }
case 168:
                var16 = _closure1_slot36;
                var18 = var16.bind(var13)(var17);
                var19 = var18.bind(var13)();
                var16 = var19.done;
                var17 = var19;
                var4 = true;
                var8 = var17;
                var7 = var18;
                var15 = var6;
                if(var16) { _fun0020_ip = 167; continue _fun0020 }
case 169:
                var19 = var17.value;
                if(!(var1 != var19)) { _fun0020_ip = 136; continue _fun0020 }
case 170:
                var16 = var19.bind(var13)(var14);
                var4 = false;
                var8 = var17;
                var7 = var18;
                var15 = var19;
                if(!var16) { _fun0020_ip = 167; continue _fun0020 }
case 136:
                var20 = var18.bind(var13)();
                var16 = var20.done;
                var17 = var20;
                var4 = true;
                var8 = var17;
                var7 = var18;
                var15 = var19;
                if(!var16) { _fun0020_ip = 169; continue _fun0020 }
case 167:
                if(var4) { _fun0020_ip = 171; continue _fun0020 }
case 172:
                var16 = var12.bind(var13)();
                var4 = var16.done;
                var9 = var16;
                var6 = var15;
                if(var4) { _fun0020_ip = 166; continue _fun0020 }
case 173:
                _fun0020_ip = 8; continue _fun0020;
case 171:
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.positions;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.start;
                            var3 = var1.end;
                            var1 = _closure2_slot0;
                            var1 = var1 >= var4;
                            if(!var1) { _fun0021_ip = 174; continue _fun0021 }
case 97:
                            var2 = _closure2_slot0;
                            var1 = var2 < var3;
case 174:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                if(!(var1 == var4)) { _fun0020_ip = 146; continue _fun0020 }
case 175:
                var3 = _closure1_slot10;
                var3 = var3.CONTROL;
                _fun0020_ip = 144; continue _fun0020;
case 146:
                var3 = var4.bucket;
case 144:
                var2 = _closure1_slot10;
                var4 = var2.NOT_ELIGIBLE;
                var2 = null;
                if(!(var3 !== var4)) { _fun0020_ip = 176; continue _fun0020 }
case 73:
                var2 = var3;
case 176:
                return var2;
case 166:
                return var1;
            }
        };
        var _closure1_slot50 = var1;
        var1 = function computeGuildExperimentDescriptor(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
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
                if(!(var1 != var11)) { _fun0022_ip = 177; continue _fun0022 }
case 178:
                var6 = var11.revision;
                var10 = var11.aaMode;
                var4 = var11.overrides;
                var5 = var4[var7];
                var4 = var11.triggerDebuggingEnabled;
                if(!(var1 == var5)) { _fun0022_ip = 179; continue _fun0022 }
case 180:
                var9 = _closure1_slot38;
                var12 = var11.hashKey;
                var13 = var14;
                if(!(var1 != var12)) { _fun0022_ip = 181; continue _fun0022 }
case 135:
                var13 = var12;
case 181:
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var2 = ':';
                var2 = var12.bind(var15)(var13, var2, var7);
                var9 = var9.bind(var3)(var2);
                var2 = 10000;
                var12 = var9 % var2;
                var9 = _closure1_slot36;
                var2 = var11.overridesFormatted;
                if(!(var1 == var2)) { _fun0022_ip = 21; continue _fun0022 }
case 182:
                var2 = new Array(0);
case 21:
                var15 = var9.bind(var3)(var2);
                var9 = var15.bind(var3)();
                var2 = var9.done;
                var13 = var9;
                if(var2) { _fun0022_ip = 183; continue _fun0022 }
case 184:
                var9 = _closure1_slot50;
                var2 = var13.value;
                var9 = var9.bind(var3)(var7, var2, var12);
                if(!(var1 === var9)) { _fun0022_ip = 185; continue _fun0022 }
case 145:
                var16 = var15.bind(var3)();
                var2 = var16.done;
                var13 = var16;
                if(var2) { _fun0022_ip = 183; continue _fun0022 }
case 186:
                _fun0022_ip = 184; continue _fun0022;
case 185:
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
case 183:
                var9 = _closure1_slot50;
                var2 = var11.populations;
                var13 = var9.bind(var3)(var7, var2, var12);
                if(!(var1 != var13)) { _fun0022_ip = 187; continue _fun0022 }
case 188:
                var2 = var11.holdoutName;
                var2 = var1 != var2;
                var9 = null;
                if(!var2) { _fun0022_ip = 189; continue _fun0022 }
case 190:
                var2 = var11.holdoutControlBucket;
                var2 = var1 != var2;
                var9 = null;
                if(!var2) { _fun0022_ip = 189; continue _fun0022 }
case 191:
                var2 = var11.holdoutName;
                var9 = null;
                if(!(var2 !== var14)) { _fun0022_ip = 189; continue _fun0022 }
case 192:
                var14 = _closure1_slot51;
                var2 = var11.holdoutName;
                var15 = var14.bind(var3)(var7, var2);
                var14 = var1 == var15;
                var2 = undefined;
                if(var14) { _fun0022_ip = 193; continue _fun0022 }
case 194:
                var2 = var15.bucket;
case 193:
                var9 = var15;
                if(!(var1 != var2)) { _fun0022_ip = 189; continue _fun0022 }
case 195:
                var14 = var15.override;
                var2 = true;
                if(!(var2 !== var14)) { _fun0022_ip = 196; continue _fun0022 }
case 197:
                var14 = _closure1_slot44;
                var2 = {};
                var16 = var11.holdoutName;
                var2['experimentId'] = var16;
                var2['descriptor'] = var15;
                var2 = var14.bind(var3)(var2);
case 196:
                var2 = var1 == var15;
                var14 = undefined;
                if(var2) { _fun0022_ip = 198; continue _fun0022 }
case 199:
                var14 = var15.bucket;
case 198:
                var2 = var11.holdoutControlBucket;
                var9 = var15;
                if(!(var14 !== var2)) { _fun0022_ip = 200; continue _fun0022 }
case 189:
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
                if(!var12) { _fun0022_ip = 201; continue _fun0022 }
case 202:
                var10 = var11.holdoutName;
case 201:
                var2['holdoutName'] = var10;
                var11 = var1 == var9;
                var10 = undefined;
                if(var11) { _fun0022_ip = 203; continue _fun0022 }
case 204:
                var10 = var9.revision;
case 203:
                var2['holdoutRevision'] = var10;
                var10 = var1 == var9;
                var3 = undefined;
                if(var10) { _fun0022_ip = 205; continue _fun0022 }
case 206:
                var3 = var9.bucket;
case 205:
                var2['holdoutBucket'] = var3;
                return var2;
case 200:
                return var1;
case 187:
                return var1;
case 179:
                var2 = _closure1_slot10;
                var3 = var2.NOT_ELIGIBLE;
                var2 = null;
                if(!(var5 !== var3)) { _fun0022_ip = 207; continue _fun0022 }
case 208:
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
case 207:
                return var2;
case 177:
                return var1;
            }
        };
        var _closure1_slot51 = var1;
        var1 = function processGuildExperimentPopulationFromCache(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var15 = arg1;
                var1 = {};
                var13 = var15;
                var9 = undefined;
                var7 = null;
                var6 = undefined;
                var5 = undefined;
                for(var10 in var13)
case 7:
                {
case 209:
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
                    if(var3) { _fun0023_ip = 210; continue _fun0023 }
case 211:
                    var17 = var4.value;
                    var19 = var17.rawFilterData;
                    var18 = var19.map;
                    var3 = _closure1_slot45;
                    var3 = var18.bind(var19)(var3);
                    var17['filters'] = var3;
                    var17 = var16.bind(var9)();
                    var3 = var17.done;
                    var4 = var17;
                    if(!var3) { _fun0023_ip = 211; continue _fun0023 }
case 210:
                    var3 = _closure1_slot36;
                    var2 = var1[var2];
                    var2 = var2.overridesFormatted;
                    if(!(var7 == var2)) { _fun0023_ip = 212; continue _fun0023 }
case 213:
                    var2 = new Array(0);
case 212:
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.bind(var9)();
                    var2 = var3.done;
                    if(var2) { _fun0023_ip = 7; continue _fun0023 }
case 214:
                    var16 = _closure1_slot36;
                    var2 = var3.value;
                    var17 = var16.bind(var9)(var2);
                    var18 = var17.bind(var9)();
                    var2 = var18.done;
                    var16 = var18;
                    var6 = var16;
                    if(var2) { _fun0023_ip = 215; continue _fun0023 }
case 50:
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
                    if(!var2) { _fun0023_ip = 50; continue _fun0023 }
case 215:
                    var16 = var4.bind(var9)();
                    var2 = var16.done;
                    var5 = var17;
                    var3 = var16;
                    if(var2) { _fun0023_ip = 7; continue _fun0023 }
case 14:
                    _fun0023_ip = 214; continue _fun0023;
                }
case 216:
                return var1;
            }
        };
        var _closure1_slot52 = var1;
        var1 = function handleOverlayInitialize(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = arg1;
                var1 = var2.serializedExperimentStore;
                var6 = var2.user;
                var4 = _closure1_slot31;
                var2 = !var4;
                if(var4) { _fun0024_ip = 217; continue _fun0024 }
case 108:
                var5 = _closure1_slot40;
                var4 = undefined;
                var2 = var5.bind(var4)(var6);
case 217:
                if(!var2) { _fun0024_ip = 9; continue _fun0024 }
case 218:
                var2 = true;
                _closure1_slot31 = var2;
case 9:
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
case 0:
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
                if(var2) { _fun0025_ip = 219; continue _fun0025 }
case 220:
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
case 219:
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
case 0:
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
                if(!(var10 == var3)) { _fun0026_ip = 221; continue _fun0026 }
case 101:
                var3 = {};
case 221:
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
                if(!(var10 == var3)) { _fun0026_ip = 222; continue _fun0026 }
case 116:
                var3 = {};
case 222:
                var9[1] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var3 = _closure1_slot19;
                var3 = var4.bind(var5)(var3);
                if(!(var10 == var3)) { _fun0026_ip = 223; continue _fun0026 }
case 224:
                var3 = {};
case 223:
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
                if(!var3) { _fun0026_ip = 225; continue _fun0026 }
case 146:
                var20 = var9[var8];
                var18 = var20;
                var14 = var7;
                var13 = var6;
                var3 = var5;
                var11 = var14;
                var6 = var13;
                var5 = var3;
                for(var15 in var18)
case 147:
                {
                    var23 = var14;
                    var6 = var13;
                    var5 = var3;
                    var11 = var23;
case 150:
                    var22 = var15;
                    var21 = var20[var22];
                    if(!(var10 != var21)) { _fun0026_ip = 226; continue _fun0026 }
case 227:
                    var25 = var21.type;
                    var24 = _closure1_slot11;
                    var24 = var24.USER;
                    if(!(var25 !== var24)) { _fun0026_ip = 10; continue _fun0026 }
case 228:
                    var25 = var21.type;
                    var24 = _closure1_slot11;
                    var24 = var24.GUILD;
                    if(!(var25 === var24)) { _fun0026_ip = 226; continue _fun0026 }
case 10:
                    var24 = var21.bucket;
                    if(!(var10 != var24)) { _fun0026_ip = 226; continue _fun0026 }
case 229:
                    var24 = var21.override;
                    if(!(var12 === var24)) { _fun0026_ip = 226; continue _fun0026 }
case 126:
                    var24 = var21.fromCookie;
                    if(var24) { _fun0026_ip = 226; continue _fun0026 }
case 230:
                    var25 = var21.type;
                    var24 = _closure1_slot11;
                    var24 = var24.USER;
                    if(!(var25 !== var24)) { _fun0026_ip = 165; continue _fun0026 }
case 156:
                    var24 = _closure1_slot30;
                    var24[var22] = var21;
                    var14 = var23;
                    var13 = var22;
                    var3 = var21;
                    _fun0026_ip = 147; continue _fun0026;
case 165:
                    var24 = _closure1_slot29;
                    var24[var22] = var21;
                    var14 = var23;
                    var13 = var22;
                    var3 = var21;
                    _fun0026_ip = 147; continue _fun0026;
case 226:
                    var23 = delete var20[var22];
                    var14 = true;
                    var13 = var22;
                    var3 = var21;
                    _fun0026_ip = 147; continue _fun0026;
                }
case 231:
                var8 = var8 + 1;
                var3 = var9.length;
                var7 = var11;
                var4 = var7;
                if(var8 < var3) { _fun0026_ip = 146; continue _fun0026 }
case 225:
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
case 232:
                {
                    var3 = var5;
case 233:
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
                    _fun0026_ip = 232; continue _fun0026;
                }
case 206:
                if(var3) { _fun0026_ip = 205; continue _fun0026 }
case 234:
                var3 = var4;
case 205:
                if(!var3) { _fun0026_ip = 179; continue _fun0026 }
case 235:
                var2 = _closure1_slot58;
                var2 = var2.bind(var1)();
case 179:
                return var1;
            }
        };
        var _closure1_slot57 = var1;
        var1 = function saveExperimentOverrides() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0: // try_start_0
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
case 236: // try_end0
                _fun0027_ip = 57; continue _fun0027;
case 237: // catch_target0
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
case 57: // try_start_1
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
case 238: // try_end1
                _fun0027_ip = 16; continue _fun0027;
case 23: // catch_target1
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
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot58 = var1;
        var1 = function saveTrackedExposureExperiments(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var5 = arg1;
case 239: // try_start_0
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
case 133: // try_end0
                _fun0028_ip = 136; continue _fun0028;
case 62: // catch_target0
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
case 136:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot59 = var1;
        var1 = function handleExperimentOverrideBucket(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var1 = arg1;
                var3 = var1.experimentId;
                var7 = var1.experimentBucket;
                var8 = var1.experimentType;
                var1 = var1.skipCleanup;
                var6 = null;
                if(!(var6 == var8)) { _fun0029_ip = 46; continue _fun0029 }
case 174:
                var2 = _closure1_slot24;
                var4 = var2[var3];
                var5 = var6 == var4;
                var2 = undefined;
                if(var5) { _fun0029_ip = 44; continue _fun0029 }
case 8:
                var2 = var4.type;
case 44:
                var8 = var2;
case 46:
                if(!(var6 != var8)) { _fun0029_ip = 240; continue _fun0029 }
case 3:
                if(!(var6 != var7)) { _fun0029_ip = 241; continue _fun0029 }
case 4:
                var2 = 'user';
                if(!(var2 !== var8)) { _fun0029_ip = 57; continue _fun0029 }
case 242:
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
                _fun0029_ip = 243; continue _fun0029;
case 57:
                var4 = {};
                var14 = _closure1_slot29;
                var15 = var4;
                var5 = copyDataProperties(var15, var14);
                var5 = {'type': null, 'revision': 1, 'population': 0, 'bucket': null, 'override': true};
                var5['type'] = var8;
                var5['bucket'] = var7;
                var4[var3] = var5;
                _closure1_slot29 = var4;
                _fun0029_ip = 243; continue _fun0029;
case 241:
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
case 243:
                if(var1) { _fun0029_ip = 244; continue _fun0029 }
case 245:
                var1 = _closure1_slot29;
                var4 = new Array(2);
                var4[0] = var1;
                var1 = _closure1_slot30;
                var4[1] = var1;
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = undefined;
                if(!var1) { _fun0029_ip = 244; continue _fun0029 }
case 78:
                var1 = var4[var3];
                var10 = var1;
                var1 = var2;
                var2 = var1;
                for(var7 in var10)
case 246:
                {
                    var2 = var1;
case 121:
                    var12 = var7;
                    var13 = _closure1_slot24;
                    var13 = var13[var12];
                    var1 = var12;
                    if(var6 != var13) { _fun0029_ip = 246; continue _fun0029 }
case 31:
                    var13 = _closure1_slot29;
                    var13 = delete var13[var12];
                    var1 = var12;
                    _fun0029_ip = 246; continue _fun0029;
                }
case 247:
                var3 = var3 + 1;
                var1 = var4.length;
                if(var3 < var1) { _fun0029_ip = 78; continue _fun0029 }
case 244:
                var2 = _closure1_slot58;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
case 240:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot60 = var1;
        var1 = function handleGuildChange(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var1 = arg1;
                var11 = var1.guild;
                var9 = _closure1_slot28;
                var4 = ':';
                var1 = undefined;
                var3 = 1;
                var2 = 0;
                for(var5 in var9)
case 248:
                {
case 218:
                    var13 = var5;
                    var12 = var13.split;
                    var14 = var12.bind(var13)(var4);
                    var12 = _closure1_slot8;
                    var12 = var12.bind(var1)(var14, var3);
                    var14 = var12[var2];
                    var12 = var11.id;
                    if(var12 !== var14) { _fun0030_ip = 248; continue _fun0030 }
case 60:
                    var12 = _closure1_slot28;
                    var12 = delete var12[var13];
                    _fun0030_ip = 248; continue _fun0030;
                }
case 249:
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
        if(var10) { _fun0001_ip = 250; continue _fun0001 }
case 251:
        var10 = true;
case 250:
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
case 0:
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
                    if(var1) { _fun0031_ip = 214; continue _fun0031 }
case 219:
                    var1 = var9.apply;
                    var1 = var1.bind(var9)(var5, var10);
                    _fun0031_ip = 47; continue _fun0031;
case 214:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var1 = var7.bind(var8)(var9, var10, var6);
case 47:
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
case 0:
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
                    if(!(var5 != var4)) { _fun0032_ip = 219; continue _fun0032 }
case 45:
                    var6 = var4.v;
                    var5 = 1;
                    if(!(var5 === var6)) { _fun0032_ip = 219; continue _fun0032 }
case 43:
                    var5 = var4.e;
                    var4 = global;
                    var6 = var4.Date;
                    var4 = var6.now;
                    var13 = var4.bind(var6)();
                    var11 = var5;
                    var4 = false;
                    var6 = false;
                    for(var8 in var11)
case 252:
                    {
                        var6 = var4;
case 49:
                        var14 = var8;
                        var15 = var5[var14];
                        var15 = var15.time;
                        var16 = var13 - var15;
                        var15 = _closure1_slot34;
                        if(!(var16 > var15)) { _fun0032_ip = 252; continue _fun0032 }
case 253:
                        var14 = delete var5[var14];
                        var4 = true;
                        _fun0032_ip = 252; continue _fun0032;
                    }
case 254:
                    var4 = var5;
                    if(!var6) { _fun0032_ip = 255; continue _fun0032 }
case 256:
                    var6 = _closure1_slot59;
                    var6 = var6.bind(var1)(var5);
                    var4 = var5;
                    _fun0032_ip = 255; continue _fun0032;
case 219:
                    var4 = {};
case 255:
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
case 0:
                    var4 = this;
                    var3 = var4.readSnapshot;
                    var2 = _closure2_slot0;
                    var2 = var2.LATEST_SNAPSHOT_VERSION;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0033_ip = 140; continue _fun0033 }
case 257:
                    var2 = 'loadedUserExperiments';
                    var4 = var2 in var3;
                    if(var4) { _fun0033_ip = 258; continue _fun0033 }
case 237:
                    var6 = _closure1_slot49;
                    var5 = undefined;
                    var4 = true;
                    var4 = var6.bind(var5)(var3, var4);
                    _fun0033_ip = 140; continue _fun0033;
case 258:
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
case 140:
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
case 0:
                    var5 = arg1;
                    var1 = _closure1_slot31;
                    if(!var1) { _fun0034_ip = 97; continue _fun0034 }
case 259:
                    var1 = _closure1_slot29;
                    var1 = var1[var5];
                    var3 = null;
                    if(!(var3 == var1)) { _fun0034_ip = 3; continue _fun0034 }
case 97:
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
case 3:
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
case 0:
                    var7 = arg1;
                    var6 = arg2;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0035_ip = 42; continue _fun0035 }
case 260:
                    var6 = _closure1_slot14;
case 42:
                    var1 = _closure1_slot30;
                    var1 = var1[var7];
                    var4 = _closure1_slot31;
                    if(!var4) { _fun0035_ip = 261; continue _fun0035 }
case 106:
                    if(!(var3 == var1)) { _fun0035_ip = 262; continue _fun0035 }
case 261:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = ':';
                    var3 = var5.bind(var4)(var6, var3, var7);
                    var4 = _closure1_slot28;
                    var4 = var3 in var4;
                    if(var4) { _fun0035_ip = 116; continue _fun0035 }
case 114:
                    var5 = _closure1_slot51;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var6, var7);
                    var5 = _closure1_slot28;
                    var5[var3] = var4;
                    return var4;
case 116:
                    var2 = _closure1_slot28;
                    var2 = var2[var3];
                    return var2;
case 262:
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
case 0:
                    var3 = this;
                    var2 = var3.getUserExperimentDescriptor;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0036_ip = 257; continue _fun0036 }
case 35:
                    var1 = _closure1_slot10;
                    var1 = var1.NOT_ELIGIBLE;
                    _fun0036_ip = 59; continue _fun0036;
case 257:
                    var1 = var2.bucket;
case 59:
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
case 0:
                    var4 = this;
                    var3 = var4.getGuildExperimentDescriptor;
                    var2 = arg1;
                    var1 = arg2;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0037_ip = 209; continue _fun0037 }
case 97:
                    var1 = _closure1_slot10;
                    var1 = var1.NOT_ELIGIBLE;
                    _fun0037_ip = 110; continue _fun0037;
case 209:
                    var1 = var2.bucket;
case 110:
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
case 0:
                        var2 = arg1;
                        var1 = var2[Symbol.iterator];
                        var2 = var1().next;
                        var4 = var2().value;
                        var2 = var1;
                        var3 = undefined;
                        var2 = var2 === var3;
                        if(var2) { _fun0038_ip = 58; continue _fun0038 }
case 39:
                        var3 = var4;
case 58:
                        if(var2) { _fun0038_ip = 263; continue _fun0038 }
case 38:
                        var1.return();
case 263:
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
case 0:
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
                        if(var10) { _fun0039_ip = 100; continue _fun0039 }
case 108:
                        var6 = var8;
case 100:
                        var4 = var6;
                        var6 = undefined;
                        var8 = var3;
                        if(var8) { _fun0039_ip = 46; continue _fun0039 }
case 218:
                        var7 = var7().value;
                        var8 = var2;
                        var8 = var8 === var9;
                        var3 = var8;
                        if(var8) { _fun0039_ip = 46; continue _fun0039 }
case 44:
                        var6 = var7;
case 46: // try_start_0
                        var5 = var6.time;
case 264: // try_end0
                        var6 = var3;
                        if(var6) { _fun0039_ip = 265; continue _fun0039 }
case 266:
                        var2.return();
case 265:
                        var8 = var4;
                        var7 = var8.replace;
                        var6 = _closure3_slot0;
                        var4 = '';
                        var6 = var7.bind(var8)(var6, var4);
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var5;
                        return var4;
case 67: // catch_target0
                        CatchBlockStart(arg_register=0);
                        _fun0039_ip = 267; continue _fun0039;
case 64:
                        CatchBlockStart(arg_register=0);
case 267:
                        if(var3) { _fun0039_ip = 268; continue _fun0039 }
case 157:
                        var2.return();
case 268:
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
case 0:
                    var1 = _closure1_slot31;
                    var2 = {};
                    if(var1) { _fun0040_ip = 269; continue _fun0040 }
case 260:
                    var1 = var2;
                    _fun0040_ip = 209; continue _fun0040;
case 269:
                    var5 = _closure1_slot29;
                    var6 = var2;
                    var4 = copyDataProperties(var6, var5);
                    var5 = _closure1_slot30;
                    var6 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var1 = var2;
case 209:
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
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot31;
                    var5 = null;
                    var1 = null;
                    if(!var2) { _fun0041_ip = 217; continue _fun0041 }
case 269:
                    var2 = _closure1_slot29;
                    var2 = var2[var4];
                    if(!(var5 == var2)) { _fun0041_ip = 106; continue _fun0041 }
case 108:
                    var3 = _closure1_slot30;
                    var2 = var3[var4];
case 106:
                    var1 = var2;
case 217:
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
case 0:
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
case 62:
                    {
case 112:
                        var12 = var2;
                        var11 = var9[var12];
                        if(var7 == var11) { _fun0042_ip = 62; continue _fun0042 }
case 168:
                        var10 = _closure1_slot26;
                        var10 = var10[var12];
                        var10 = var10.bucket;
                        var1[var11] = var10;
                        _fun0042_ip = 62; continue _fun0042;
                    }
case 222:
                    var5 = _closure1_slot28;
                    for(var2 in var5)
case 270:
                    {
case 271:
                        var10 = var2;
                        var9 = _closure1_slot28;
                        var9 = var9[var10];
                        if(var7 == var9) { _fun0042_ip = 270; continue _fun0042 }
case 253:
                        var9 = var9.bucket;
                        var1[var10] = var9;
                        _fun0042_ip = 270; continue _fun0042;
                    }
case 65:
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
case 0:
                    var3 = {};
                    var11 = _closure1_slot27;
                    var7 = global;
                    var5 = undefined;
                    for(var8 in var11)
case 272:
                    {
case 7:
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
                        if(var1) { _fun0043_ip = 272; continue _fun0043 }
case 17:
                        var13 = var4.value;
                        var1 = new Array(0);
                        var13['filters'] = var1;
                        var13 = var6.bind(var5)();
                        var1 = var13.done;
                        var4 = var13;
                        if(var1) { _fun0043_ip = 272; continue _fun0043 }
case 253:
                        _fun0043_ip = 17; continue _fun0043;
                    }
case 273:
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