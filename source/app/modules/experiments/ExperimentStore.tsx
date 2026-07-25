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
                _closure1_slot34 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot34 = var1;
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
                var2 = var3["@@iterator"];
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
                var9 = _closure1_slot36;
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
                var7 = _closure1_slot36;
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
        var _closure1_slot35 = var1;
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
        var _closure1_slot36 = var1;
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
        var _closure1_slot37 = var1;
        var1 = function userCanUseExperiments(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var1 = var2.flags;
                var3 = null;
                var4 = var3 != var1;
                var5 = 0;
                if(!var4) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var5 = var1;
case 39:
                var4 = _closure1_slot15;
                var4 = var4.STAFF;
                var4 = var5 & var4;
                var1 = _closure1_slot15;
                var1 = var1.STAFF;
                var1 = var4 === var1;
                if(var1) { _fun0007_ip = 41; continue _fun0007 }
case 32:
                var2 = var2.personal_connection_id;
                var1 = var3 != var2;
case 41:
                return var1;
            }
        };
        var _closure1_slot38 = var1;
        var1 = function getTrackExposureExperimentKey(arg1, arg2, arg3, arg4) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                if(!var7) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                var8 = undefined;
                var7 = var8 !== var6;
case 42:
                if(!var7) { _fun0008_ip = 4; continue _fun0008 }
case 44:
                var9 = var6.length;
                var8 = 0;
                var7 = var9 > var8;
case 4:
                var9 = var1.type;
                var10 = _closure1_slot11;
                var10 = var10.USER;
                if(!(var10 !== var9)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                var8 = _closure1_slot11;
                var8 = var8.GUILD;
                if(!(var8 !== var9)) { _fun0008_ip = 18; continue _fun0008 }
case 47:
                var10 = var2.Error;
                var8 = var2.HermesInternal;
                var9 = var8.concat;
                var8 = 'Unknown experiment type: ';
                var13 = var9.bind(var8)(var1);
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var14 = var9;
                var8 = new var14[var10](var13, var12);
                var8 = var8 instanceof Object ? var8 : var9;
                throw var8;
case 18:
                var8 = var1.guildId;
                var1 = var2.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var5)(var8);
                var9 = var4 + var1;
                var1 = var9;
                if(!var7) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                var8 = var2.HermesInternal;
                var8 = var8.concat;
                var8 = var8.bind(var5)(var6);
                var10 = var9 + var8;
                var8 = var10;
                if(!var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                var9 = '|triggerDebugging';
                var8 = var10 + var9;
case 50:
                var1 = var8;
case 48:
                return var1;
case 45:
                var1 = var4;
                if(!var7) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var5)(var6);
                var4 = var4 + var2;
                var2 = var4;
                if(!var3) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                var3 = '|triggerDebugging';
                var2 = var4 + var3;
case 54:
                var1 = var2;
case 52:
                return var1;
            }
        };
        var _closure1_slot39 = var1;
        var1 = function getTrackExposureExperimentHash(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var4 = var1.type;
                var3 = _closure1_slot11;
                var3 = var3.USER;
                if(!(var3 !== var4)) { _fun0009_ip = 56; continue _fun0009 }
case 38:
                var3 = _closure1_slot11;
                var3 = var3.GUILD;
                if(!(var3 !== var4)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                var3 = global;
                var5 = var3.Error;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = 'Unknown experiment type: ';
                var14 = var4.bind(var3)(var1);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var15 = var4;
                var3 = new var15[var5](var14, var13);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
case 57:
                var5 = _closure1_slot37;
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
case 56:
                var3 = _closure1_slot37;
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
        var _closure1_slot40 = var1;
        var1 = function _hasExperimentTrackedExposure(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot22;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0010_ip = 59; continue _fun0010 }
case 35:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = var3.time;
                var4 = var5 - var4;
                var2 = _closure1_slot33;
                var4 = var4 > var2;
                var2 = !var4;
                if(var4) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var4 = var3.hash;
                var3 = arg2;
                var2 = var4 === var3;
case 60:
                var1 = var2;
case 59:
                return var1;
            }
        };
        var _closure1_slot41 = var1;
        var1 = function trackExposure(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                if(!(var1 !== var4)) { _fun0011_ip = 62; continue _fun0011 }
case 41:
                var1 = 'ready_payload';
                if(!(var1 !== var4)) { _fun0011_ip = 63; continue _fun0011 }
case 60:
                var2 = 'logged_out_api';
                var3 = true;
                if(!(var2 === var4)) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                var4 = var9.fingerprint;
                var5 = _closure1_slot9;
                var2 = var5.getFingerprint;
                var2 = var2.bind(var5)();
                var3 = false;
                if(!(var4 !== var2)) { _fun0011_ip = 64; continue _fun0011 }
case 66:
                var3 = true;
                _fun0011_ip = 64; continue _fun0011;
case 63:
                var2 = var9.sessionId;
                var4 = _closure1_slot9;
                var1 = var4.getSessionId;
                var1 = var1.bind(var4)();
                var3 = false;
                if(!(var2 !== var1)) { _fun0011_ip = 64; continue _fun0011 }
case 67:
                var3 = true;
case 64:
                var1 = var9.override;
                if(var1) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var1 = _closure1_slot12;
                var1 = var1.AUTO_FALLBACK;
                var6 = var12 === var1;
                if(!var6) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                var1 = var9.triggerDebuggingEnabled;
                var1 = !var1;
                var6 = !var1;
case 70:
                var4 = _closure1_slot39;
                var1 = undefined;
                var25 = undefined;
                var24 = var10;
                var23 = var9;
                var22 = var8;
                var21 = var6;
                var5 = var25[var4](var24, var23, var22, var21, var20);
                var4 = _closure1_slot40;
                var4 = var4.bind(var1)(var9);
                var7 = var3;
                if(!var7) { _fun0011_ip = 72; continue _fun0011 }
case 45:
                var17 = _closure1_slot23;
                var16 = var17.get;
                var16 = var16.bind(var17)(var5);
                var7 = var16 === var4;
case 72:
                if(var7) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                var7 = _closure1_slot41;
                var7 = var7.bind(var1)(var5, var4);
                if(var7) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                var16 = var9.type;
                var7 = _closure1_slot11;
                var7 = var7.USER;
                if(!(var7 !== var16)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                var7 = _closure1_slot11;
                var7 = var7.GUILD;
                if(!(var7 === var16)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                var7 = _closure1_slot13;
                if(var6) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                var19 = var7.EXPERIMENT_GUILD_TRIGGERED;
                _fun0011_ip = 83; continue _fun0011;
case 81:
                var19 = var7.EXPERIMENT_GUILD_TRIGGERED_FALLBACK;
case 83:
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
                if(var3) { _fun0011_ip = 84; continue _fun0011 }
case 85:
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
                _fun0011_ip = 79; continue _fun0011;
case 84:
                var19 = {};
                var24 = var19;
                var23 = var7;
                var7 = copyDataProperties(var24, var23);
                var16 = var9.fingerprint;
                var7 = 'assignment_fingerprint';
                var19[6] = var16;
                var16 = _closure1_slot9;
                var7 = var16.getSessionId;
                var16 = var7.bind(var16)();
                var7 = 'current_session_id';
                var19[6] = var16;
                var16 = _closure1_slot9;
                var7 = var16.getFingerprint;
                var16 = var7.bind(var16)();
                var7 = 'current_fingerprint';
                var19[6] = var16;
                var7 = _closure1_slot25;
                var16 = var7.source;
                var7 = 'current_source';
                var19[6] = var16;
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
                _fun0011_ip = 79; continue _fun0011;
case 77:
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
                if(!(var12 != var11)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                var11 = var11.guildId;
                var7['context_guild_id'] = var11;
case 86:
                var11 = _closure1_slot13;
                if(var6) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                var14 = var11.EXPERIMENT_USER_TRIGGERED;
                _fun0011_ip = 90; continue _fun0011;
case 88:
                var14 = var11.EXPERIMENT_USER_TRIGGERED_FALLBACK;
case 90:
                if(var3) { _fun0011_ip = 91; continue _fun0011 }
case 92:
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
                _fun0011_ip = 79; continue _fun0011;
case 91:
                var14 = {};
                var24 = var14;
                var23 = var7;
                var7 = copyDataProperties(var24, var23);
                var11 = var9.fingerprint;
                var7 = 'assignment_fingerprint';
                var14[6] = var11;
                var11 = _closure1_slot9;
                var7 = var11.getSessionId;
                var11 = var7.bind(var11)();
                var7 = 'current_session_id';
                var14[6] = var11;
                var11 = _closure1_slot9;
                var7 = var11.getFingerprint;
                var11 = var7.bind(var11)();
                var7 = 'current_fingerprint';
                var14[6] = var11;
                var7 = _closure1_slot25;
                var11 = var7.source;
                var7 = 'current_source';
                var14[6] = var11;
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
case 79:
                if(var3) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                var7 = _closure1_slot22;
                var3 = _closure1_slot39;
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
                var8 = _closure1_slot40;
                var8 = var8.bind(var1)(var9);
                var3['hash'] = var8;
                var7[var6] = var3;
                var6 = _closure1_slot57;
                var3 = _closure1_slot22;
                var3 = var6.bind(var1)(var3);
                _fun0011_ip = 95; continue _fun0011;
case 93:
                var3 = _closure1_slot23;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var4);
case 95:
                return var1;
case 75:
                var1 = false;
                return var1;
case 73:
                var1 = false;
                return var1;
case 68:
                var1 = false;
                return var1;
case 62:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot42 = var1;
        var1 = function _loadGuildFilter(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var4 = var5().value;
                var2 = var1;
                var6 = undefined;
                var3 = var2 === var6;
                var2 = undefined;
                if(var3) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                var2 = var4;
case 96:
                var4 = undefined;
                if(var3) { _fun0012_ip = 98; continue _fun0012 }
case 99:
                var7 = var5().value;
                var5 = var1;
                var5 = var5 === var6;
                var4 = undefined;
                var3 = var5;
                if(var5) { _fun0012_ip = 98; continue _fun0012 }
case 100:
                var4 = var7;
                var3 = var5;
case 98:
                if(var3) { _fun0012_ip = 44; continue _fun0012 }
case 42:
                var1.return();
case 44:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 14;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.GUILD_FILTERS;
                var5 = var1[var2];
                var1 = null;
                var5 = var1 != var5;
                if(!var5) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.GUILD_FILTERS;
                var2 = var3[var2];
                var1 = var2.bind(var3)(var4);
case 101:
                return var1;
            }
        };
        var _closure1_slot43 = var1;
        var1 = function _loadOverrides(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var2 = null;
                if(!(var2 != var3)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                var2 = _closure1_slot35;
                var5 = undefined;
                var4 = var2.bind(var5)(var3);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0013_ip = 47; continue _fun0013 }
case 105:
                var2 = var3.value;
                var9 = var2.b;
                var7 = _closure1_slot35;
                var2 = var2.k;
                var8 = var7.bind(var5)(var2);
                var7 = var8.bind(var5)();
                var2 = var7.done;
                if(var2) { _fun0013_ip = 106; continue _fun0013 }
case 4:
                var2 = var7.value;
                var1[var2] = var9;
                var10 = var8.bind(var5)();
                var2 = var10.done;
                var7 = var10;
                if(!var2) { _fun0013_ip = 4; continue _fun0013 }
case 106:
                var7 = var4.bind(var5)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0013_ip = 105; continue _fun0013 }
case 47:
                return var1;
case 103:
                return var1;
            }
        };
        var _closure1_slot44 = var1;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var4 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var3 = var2 === var7;
                    var2 = undefined;
                    if(var3) { _fun0014_ip = 96; continue _fun0014 }
case 97:
                    var2 = var4;
case 96:
                    var4 = undefined;
                    if(var3) { _fun0014_ip = 98; continue _fun0014 }
case 99:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var4 = undefined;
                    var3 = var5;
                    if(var5) { _fun0014_ip = 98; continue _fun0014 }
case 100:
                    var4 = var6;
                    var3 = var5;
case 98:
                    if(var3) { _fun0014_ip = 44; continue _fun0014 }
case 42:
                    var1.return();
case 44:
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
            var3 = _closure1_slot43;
            var3 = var4.bind(var2)(var3);
            var1['filters'] = var3;
            var1['rawFilterData'] = var2;
            return var1;
        };
        var _closure1_slot45 = var1;
        var1 = function handleLoadedExperiments(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var4 = _closure1_slot31;
                var3 = !var4;
                if(var4) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                var5 = var1.type;
                var4 = 'CONNECTION_OPEN';
                var3 = var4 === var5;
case 107:
                if(!var3) { _fun0015_ip = 109; continue _fun0015 }
case 99:
                var6 = _closure1_slot38;
                var5 = var1.user;
                var4 = undefined;
                var3 = var6.bind(var4)(var5);
case 109:
                if(!var3) { _fun0015_ip = 98; continue _fun0015 }
case 100:
                var3 = true;
                _closure1_slot31 = var3;
case 98:
                var4 = var1.type;
                var3 = 'EXPERIMENTS_FETCH_SUCCESS';
                var3 = var3 === var4;
                if(!var3) { _fun0015_ip = 110; continue _fun0015 }
case 111:
                var3 = _closure1_slot21;
case 110:
                if(!var3) { _fun0015_ip = 46; continue _fun0015 }
case 112:
                var4 = _closure1_slot25;
                var5 = var4.source;
                var4 = 'ready_payload';
                var3 = var4 === var5;
case 46:
                if(!var3) { _fun0015_ip = 113; continue _fun0015 }
case 114:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.track;
                var3 = _closure1_slot13;
                var4 = var3.EXPERIMENT_FETCH_IGNORED;
                var3 = {};
                var7 = var1.fingerprint;
                var3['fingerprint'] = var7;
                var7 = _closure1_slot25;
                var7 = var7.source;
                var3['current_snapshot_source'] = var7;
                var7 = _closure1_slot25;
                var7 = var7.sessionId;
                var3['current_snapshot_session_id'] = var7;
                var7 = _closure1_slot25;
                var7 = var7.fingerprint;
                var3['current_snapshot_fingerprint'] = var7;
                var3 = var5.bind(var6)(var4, var3);
case 113:
                var3 = {};
                _closure1_slot26 = var3;
                var3 = {};
                _closure1_slot27 = var3;
                var3 = {};
                _closure1_slot28 = var3;
                var3 = var1.type;
                var5 = 'CONNECTION_OPEN';
                var4 = var5 === var3;
                if(var4) { _fun0015_ip = 115; continue _fun0015 }
case 116:
                var6 = var1.fingerprint;
                var3 = null;
                var4 = var3 == var6;
case 115:
                if(var4) { _fun0015_ip = 117; continue _fun0015 }
case 118:
                var6 = var1.fingerprint;
                var7 = _closure1_slot9;
                var3 = var7.getFingerprint;
                var3 = var3.bind(var7)();
                var4 = var6 === var3;
case 117:
                var8 = var1.experiments;
                var7 = var1.guildExperiments;
                var3 = var1.type;
                var6 = 'logged_out_api';
                if(!(var5 === var3)) { _fun0015_ip = 80; continue _fun0015 }
case 119:
                var6 = 'ready_payload';
case 80:
                var3 = 'sessionId';
                var3 = var3 in var1;
                if(var3) { _fun0015_ip = 120; continue _fun0015 }
case 121:
                var5 = _closure1_slot9;
                var3 = var5.getSessionId;
                var5 = var3.bind(var5)();
                var3 = null;
                var9 = var3 != var5;
                var3 = '';
                if(!var9) { _fun0015_ip = 122; continue _fun0015 }
case 123:
                var3 = var5;
case 122:
                _fun0015_ip = 124; continue _fun0015;
case 120:
                var3 = var1.sessionId;
case 124:
                var5 = _closure1_slot9;
                var1 = var5.getFingerprint;
                var1 = var1.bind(var5)();
                if(!var4) { _fun0015_ip = 125; continue _fun0015 }
case 126:
                var5 = _closure1_slot47;
                var4 = {};
                var4['rawUserExperiments'] = var8;
                var8 = null;
                if(!(var8 == var7)) { _fun0015_ip = 127; continue _fun0015 }
case 128:
                var7 = new Array(0);
case 127:
                var4['rawGuildExperiments'] = var7;
                var4['source'] = var6;
                var4['sessionId'] = var3;
                var4['fingerprint'] = var1;
                var3 = undefined;
                var1 = false;
                var1 = var5.bind(var3)(var4, var1);
case 125:
                var1 = true;
                _closure1_slot21 = var1;
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot46 = var1;
        var1 = function processRawExperiments(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                if(!(var3 === var1)) { _fun0016_ip = 98; continue _fun0016 }
case 8:
                var3 = false;
case 98:
                var _closure2_slot3 = var3;
                var6 = {};
                var6['rawUserExperiments'] = var7;
                var3 = null;
                var10 = var4;
                if(!(var3 == var10)) { _fun0016_ip = 129; continue _fun0016 }
case 110:
                var10 = new Array(0);
case 129:
                var6['rawGuildExperiments'] = var10;
                var6['source'] = var9;
                var6['sessionId'] = var8;
                var6['fingerprint'] = var5;
                _closure1_slot25 = var6;
                var6 = var7.forEach;
                var5 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var15 = arg1;
                        var2 = var15[Symbol.iterator];
                        var15 = var2().next;
                        var5 = var15().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0017_ip = 96; continue _fun0017 }
case 97:
                        var4 = var5;
case 96:
                        var14 = undefined;
                        if(var3) { _fun0017_ip = 98; continue _fun0017 }
case 99:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var14 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 98; continue _fun0017 }
case 100:
                        var14 = var6;
                        var3 = var5;
case 98:
                        var8 = undefined;
                        if(var3) { _fun0017_ip = 130; continue _fun0017 }
case 131:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var8 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 130; continue _fun0017 }
case 129:
                        var8 = var6;
                        var3 = var5;
case 130:
                        var12 = undefined;
                        if(var3) { _fun0017_ip = 66; continue _fun0017 }
case 132:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var12 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 66; continue _fun0017 }
case 133:
                        var12 = var6;
                        var3 = var5;
case 66:
                        var13 = undefined;
                        if(var3) { _fun0017_ip = 134; continue _fun0017 }
case 135:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var13 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 134; continue _fun0017 }
case 136:
                        var13 = var6;
                        var3 = var5;
case 134:
                        var11 = undefined;
                        if(var3) { _fun0017_ip = 137; continue _fun0017 }
case 64:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var11 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 137; continue _fun0017 }
case 138:
                        var11 = var6;
                        var3 = var5;
case 137:
                        var10 = undefined;
                        if(var3) { _fun0017_ip = 139; continue _fun0017 }
case 140:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var10 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 139; continue _fun0017 }
case 141:
                        var10 = var6;
                        var3 = var5;
case 139:
                        var9 = undefined;
                        if(var3) { _fun0017_ip = 142; continue _fun0017 }
case 143:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var9 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 142; continue _fun0017 }
case 144:
                        var9 = var6;
                        var3 = var5;
case 142:
                        var7 = undefined;
                        if(var3) { _fun0017_ip = 55; continue _fun0017 }
case 116:
                        var6 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var7 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 55; continue _fun0017 }
case 145:
                        var7 = var6;
                        var3 = var5;
case 55:
                        var6 = undefined;
                        if(var3) { _fun0017_ip = 78; continue _fun0017 }
case 146:
                        var16 = var15().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var6 = undefined;
                        var3 = var5;
                        if(var5) { _fun0017_ip = 78; continue _fun0017 }
case 147:
                        var6 = var16;
                        var3 = var5;
case 78:
                        var5 = undefined;
                        if(var3) { _fun0017_ip = 148; continue _fun0017 }
case 149:
                        var16 = var15().value;
                        var15 = var2;
                        var15 = var15 === var1;
                        var5 = undefined;
                        var3 = var15;
                        if(var15) { _fun0017_ip = 148; continue _fun0017 }
case 82:
                        var5 = var16;
                        var3 = var15;
case 148:
                        if(var3) { _fun0017_ip = 150; continue _fun0017 }
case 30:
                        var2.return();
case 150:
                        var3 = _closure1_slot26;
                        var2 = {};
                        var15 = 'user';
                        var2['type'] = var15;
                        var2['revision'] = var14;
                        var2['population'] = var13;
                        var2['bucket'] = var8;
                        var8 = 0;
                        var8 = var8 === var12;
                        var2['override'] = var8;
                        var8 = null;
                        var12 = var8 != var11;
                        var8 = -1;
                        if(!var12) { _fun0017_ip = 151; continue _fun0017 }
case 152:
                        var8 = var11;
case 151:
                        var2['hashResult'] = var8;
                        var8 = 1;
                        var10 = var8 === var10;
                        var2['aaMode'] = var10;
                        var8 = var8 === var9;
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
                if(!(var3 != var4)) { _fun0016_ip = 136; continue _fun0016 }
case 153:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var5 = arg1;
                        var2 = var5[Symbol.iterator];
                        var5 = var2().next;
                        var6 = var5().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0018_ip = 96; continue _fun0018 }
case 97:
                        var4 = var6;
case 96:
                        var13 = undefined;
                        if(var3) { _fun0018_ip = 98; continue _fun0018 }
case 99:
                        var7 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var13 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 98; continue _fun0018 }
case 100:
                        var13 = var7;
                        var3 = var6;
case 98:
                        var11 = undefined;
                        if(var3) { _fun0018_ip = 130; continue _fun0018 }
case 131:
                        var7 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var11 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 130; continue _fun0018 }
case 129:
                        var11 = var7;
                        var3 = var6;
case 130:
                        var14 = undefined;
                        if(var3) { _fun0018_ip = 66; continue _fun0018 }
case 132:
                        var7 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var14 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 66; continue _fun0018 }
case 133:
                        var14 = var7;
                        var3 = var6;
case 66:
                        var9 = undefined;
                        if(var3) { _fun0018_ip = 134; continue _fun0018 }
case 135:
                        var7 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var9 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 134; continue _fun0018 }
case 136:
                        var9 = var7;
                        var3 = var6;
case 134:
                        var12 = undefined;
                        if(var3) { _fun0018_ip = 137; continue _fun0018 }
case 64:
                        var7 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var12 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 137; continue _fun0018 }
case 138:
                        var12 = var7;
                        var3 = var6;
case 137:
                        var10 = undefined;
                        if(var3) { _fun0018_ip = 139; continue _fun0018 }
case 140:
                        var7 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var10 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 139; continue _fun0018 }
case 141:
                        var10 = var7;
                        var3 = var6;
case 139:
                        var8 = undefined;
                        if(var3) { _fun0018_ip = 142; continue _fun0018 }
case 143:
                        var7 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var8 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 142; continue _fun0018 }
case 144:
                        var8 = var7;
                        var3 = var6;
case 142:
                        var7 = undefined;
                        if(var3) { _fun0018_ip = 55; continue _fun0018 }
case 116:
                        var15 = var5().value;
                        var6 = var2;
                        var6 = var6 === var1;
                        var7 = undefined;
                        var3 = var6;
                        if(var6) { _fun0018_ip = 55; continue _fun0018 }
case 145:
                        var7 = var15;
                        var3 = var6;
case 55:
                        var6 = undefined;
                        if(var3) { _fun0018_ip = 78; continue _fun0018 }
case 146:
                        var15 = var5().value;
                        var5 = var2;
                        var5 = var5 === var1;
                        var6 = undefined;
                        var3 = var5;
                        if(var5) { _fun0018_ip = 78; continue _fun0018 }
case 147:
                        var6 = var15;
                        var3 = var5;
case 78:
                        if(var3) { _fun0018_ip = 154; continue _fun0018 }
case 155:
                        var2.return();
case 154:
                        var3 = _closure1_slot27;
                        var2 = {};
                        var2['hashKey'] = var13;
                        var2['revision'] = var11;
                        var13 = var14.map;
                        var11 = _closure1_slot45;
                        var11 = var13.bind(var14)(var11);
                        var2['populations'] = var11;
                        var5 = _closure1_slot44;
                        var5 = var5.bind(var1)(var9);
                        var2['overrides'] = var5;
                        var5 = null;
                        if(!(var5 == var12)) { _fun0018_ip = 156; continue _fun0018 }
case 157:
                        var12 = new Array(0);
case 156:
                        var11 = var12.map;
                        var9 = function(arg1) {
                            var3 = arg1;
                            var2 = var3.map;
                            var1 = _closure1_slot45;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var9 = var11.bind(var12)(var9);
                        var2['overridesFormatted'] = var9;
                        var11 = var5 != var10;
                        var9 = null;
                        if(!var11) { _fun0018_ip = 158; continue _fun0018 }
case 159:
                        var9 = var10;
case 158:
                        var2['holdoutName'] = var9;
                        var9 = var5 != var8;
                        var5 = null;
                        if(!var9) { _fun0018_ip = 160; continue _fun0018 }
case 161:
                        var5 = var8;
case 160:
                        var2['holdoutControlBucket'] = var5;
                        var5 = 1;
                        var7 = var5 === var7;
                        var2['aaMode'] = var7;
                        var5 = var5 === var6;
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
case 136:
                return var1;
            }
        };
        var _closure1_slot47 = var1;
        var1 = function computeGuildExperimentBucketFromPopulationsOrNull(arg1, arg2, arg3) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var14 = arg1;
                var1 = arg3;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot35;
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
                if(var4) { _fun0019_ip = 162; continue _fun0019 }
case 8:
                var4 = var9.value;
                var5 = var4.buckets;
                var17 = var4.filters;
                var16 = var1 != var17;
                var4 = true;
                var15 = var6;
                if(!var16) { _fun0019_ip = 163; continue _fun0019 }
case 164:
                var16 = _closure1_slot35;
                var18 = var16.bind(var13)(var17);
                var19 = var18.bind(var13)();
                var16 = var19.done;
                var17 = var19;
                var4 = true;
                var8 = var17;
                var7 = var18;
                var15 = var6;
                if(var16) { _fun0019_ip = 163; continue _fun0019 }
case 165:
                var19 = var17.value;
                if(!(var1 != var19)) { _fun0019_ip = 134; continue _fun0019 }
case 166:
                var16 = var19.bind(var13)(var14);
                var4 = false;
                var8 = var17;
                var7 = var18;
                var15 = var19;
                if(!var16) { _fun0019_ip = 163; continue _fun0019 }
case 134:
                var20 = var18.bind(var13)();
                var16 = var20.done;
                var17 = var20;
                var4 = true;
                var8 = var17;
                var7 = var18;
                var15 = var19;
                if(!var16) { _fun0019_ip = 165; continue _fun0019 }
case 163:
                if(var4) { _fun0019_ip = 167; continue _fun0019 }
case 168:
                var16 = var12.bind(var13)();
                var4 = var16.done;
                var9 = var16;
                var6 = var15;
                if(var4) { _fun0019_ip = 162; continue _fun0019 }
case 49:
                _fun0019_ip = 8; continue _fun0019;
case 167:
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.positions;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.start;
                            var3 = var1.end;
                            var1 = _closure2_slot0;
                            var1 = var1 >= var4;
                            if(!var1) { _fun0020_ip = 169; continue _fun0020 }
case 96:
                            var2 = _closure2_slot0;
                            var1 = var2 < var3;
case 169:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                if(!(var1 == var4)) { _fun0019_ip = 144; continue _fun0019 }
case 170:
                var3 = _closure1_slot10;
                var3 = var3.CONTROL;
                _fun0019_ip = 142; continue _fun0019;
case 144:
                var3 = var4.bucket;
case 142:
                var2 = _closure1_slot10;
                var4 = var2.NOT_ELIGIBLE;
                var2 = null;
                if(!(var3 !== var4)) { _fun0019_ip = 171; continue _fun0019 }
case 72:
                var2 = var3;
case 171:
                return var2;
case 162:
                return var1;
            }
        };
        var _closure1_slot48 = var1;
        var1 = function computeGuildExperimentDescriptor(arg1, arg2) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var7 = arg1;
                var14 = arg2;
                var1 = _closure1_slot37;
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
                if(!(var1 != var11)) { _fun0021_ip = 172; continue _fun0021 }
case 173:
                var6 = var11.revision;
                var10 = var11.aaMode;
                var4 = var11.overrides;
                var5 = var4[var7];
                var4 = var11.triggerDebuggingEnabled;
                if(!(var1 == var5)) { _fun0021_ip = 174; continue _fun0021 }
case 57:
                var9 = _closure1_slot37;
                var12 = var11.hashKey;
                var13 = var14;
                if(!(var1 != var12)) { _fun0021_ip = 175; continue _fun0021 }
case 133:
                var13 = var12;
case 175:
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var2 = ':';
                var2 = var12.bind(var15)(var13, var2, var7);
                var9 = var9.bind(var3)(var2);
                var2 = 10000;
                var12 = var9 % var2;
                var9 = _closure1_slot35;
                var2 = var11.overridesFormatted;
                if(!(var1 == var2)) { _fun0021_ip = 21; continue _fun0021 }
case 176:
                var2 = new Array(0);
case 21:
                var15 = var9.bind(var3)(var2);
                var9 = var15.bind(var3)();
                var2 = var9.done;
                var13 = var9;
                if(var2) { _fun0021_ip = 177; continue _fun0021 }
case 178:
                var9 = _closure1_slot48;
                var2 = var13.value;
                var9 = var9.bind(var3)(var7, var2, var12);
                if(!(var1 === var9)) { _fun0021_ip = 179; continue _fun0021 }
case 143:
                var16 = var15.bind(var3)();
                var2 = var16.done;
                var13 = var16;
                if(var2) { _fun0021_ip = 177; continue _fun0021 }
case 180:
                _fun0021_ip = 178; continue _fun0021;
case 179:
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
case 177:
                var9 = _closure1_slot48;
                var2 = var11.populations;
                var13 = var9.bind(var3)(var7, var2, var12);
                if(!(var1 != var13)) { _fun0021_ip = 181; continue _fun0021 }
case 182:
                var2 = var11.holdoutName;
                var2 = var1 != var2;
                var9 = null;
                if(!var2) { _fun0021_ip = 183; continue _fun0021 }
case 184:
                var2 = var11.holdoutControlBucket;
                var2 = var1 != var2;
                var9 = null;
                if(!var2) { _fun0021_ip = 183; continue _fun0021 }
case 185:
                var2 = var11.holdoutName;
                var9 = null;
                if(!(var2 !== var14)) { _fun0021_ip = 183; continue _fun0021 }
case 186:
                var14 = _closure1_slot49;
                var2 = var11.holdoutName;
                var15 = var14.bind(var3)(var7, var2);
                var14 = var1 == var15;
                var2 = undefined;
                if(var14) { _fun0021_ip = 187; continue _fun0021 }
case 188:
                var2 = var15.bucket;
case 187:
                var9 = var15;
                if(!(var1 != var2)) { _fun0021_ip = 183; continue _fun0021 }
case 189:
                var14 = var15.override;
                var2 = true;
                if(!(var2 !== var14)) { _fun0021_ip = 190; continue _fun0021 }
case 191:
                var14 = _closure1_slot42;
                var2 = {};
                var16 = var11.holdoutName;
                var2['experimentId'] = var16;
                var2['descriptor'] = var15;
                var2 = var14.bind(var3)(var2);
case 190:
                var2 = var1 == var15;
                var14 = undefined;
                if(var2) { _fun0021_ip = 192; continue _fun0021 }
case 193:
                var14 = var15.bucket;
case 192:
                var2 = var11.holdoutControlBucket;
                var9 = var15;
                if(!(var14 !== var2)) { _fun0021_ip = 194; continue _fun0021 }
case 183:
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
                if(!var12) { _fun0021_ip = 195; continue _fun0021 }
case 196:
                var10 = var11.holdoutName;
case 195:
                var2['holdoutName'] = var10;
                var11 = var1 == var9;
                var10 = undefined;
                if(var11) { _fun0021_ip = 197; continue _fun0021 }
case 198:
                var10 = var9.revision;
case 197:
                var2['holdoutRevision'] = var10;
                var10 = var1 == var9;
                var3 = undefined;
                if(var10) { _fun0021_ip = 199; continue _fun0021 }
case 200:
                var3 = var9.bucket;
case 199:
                var2['holdoutBucket'] = var3;
                return var2;
case 194:
                return var1;
case 181:
                return var1;
case 174:
                var2 = _closure1_slot10;
                var3 = var2.NOT_ELIGIBLE;
                var2 = null;
                if(!(var5 !== var3)) { _fun0021_ip = 201; continue _fun0021 }
case 202:
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
case 201:
                return var2;
case 172:
                return var1;
            }
        };
        var _closure1_slot49 = var1;
        var1 = function processGuildExperimentPopulationFromCache(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
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
case 58:
                    var2 = var10;
                    var21 = var15[var2];
                    var3 = {};
                    var22 = var3;
                    var4 = copyDataProperties(var22, var21);
                    var1[var2] = var3;
                    var4 = _closure1_slot35;
                    var3 = var1[var2];
                    var3 = var3.populations;
                    var16 = var4.bind(var9)(var3);
                    var4 = var16.bind(var9)();
                    var3 = var4.done;
                    if(var3) { _fun0022_ip = 203; continue _fun0022 }
case 204:
                    var17 = var4.value;
                    var19 = var17.rawFilterData;
                    var18 = var19.map;
                    var3 = _closure1_slot43;
                    var3 = var18.bind(var19)(var3);
                    var17['filters'] = var3;
                    var17 = var16.bind(var9)();
                    var3 = var17.done;
                    var4 = var17;
                    if(!var3) { _fun0022_ip = 204; continue _fun0022 }
case 203:
                    var3 = _closure1_slot35;
                    var2 = var1[var2];
                    var2 = var2.overridesFormatted;
                    if(!(var7 == var2)) { _fun0022_ip = 205; continue _fun0022 }
case 206:
                    var2 = new Array(0);
case 205:
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.bind(var9)();
                    var2 = var3.done;
                    if(var2) { _fun0022_ip = 7; continue _fun0022 }
case 207:
                    var16 = _closure1_slot35;
                    var2 = var3.value;
                    var17 = var16.bind(var9)(var2);
                    var18 = var17.bind(var9)();
                    var2 = var18.done;
                    var16 = var18;
                    var6 = var16;
                    if(var2) { _fun0022_ip = 208; continue _fun0022 }
case 209:
                    var18 = var16.value;
                    var20 = var18.rawFilterData;
                    var19 = var20.map;
                    var2 = _closure1_slot43;
                    var2 = var19.bind(var20)(var2);
                    var18['filters'] = var2;
                    var18 = var17.bind(var9)();
                    var2 = var18.done;
                    var16 = var18;
                    var6 = var16;
                    if(!var2) { _fun0022_ip = 209; continue _fun0022 }
case 208:
                    var16 = var4.bind(var9)();
                    var2 = var16.done;
                    var5 = var17;
                    var3 = var16;
                    if(var2) { _fun0022_ip = 7; continue _fun0022 }
case 14:
                    _fun0022_ip = 207; continue _fun0022;
                }
case 210:
                return var1;
            }
        };
        var _closure1_slot50 = var1;
        var1 = function handleOverlayInitialize(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var2 = arg1;
                var1 = var2.serializedExperimentStore;
                var6 = var2.user;
                var4 = _closure1_slot31;
                var2 = !var4;
                if(var4) { _fun0023_ip = 211; continue _fun0023 }
case 107:
                var5 = _closure1_slot38;
                var4 = undefined;
                var2 = var5.bind(var4)(var6);
case 211:
                if(!var2) { _fun0023_ip = 9; continue _fun0023 }
case 212:
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
                var2[3] = var5;
                var5 = var1.assignmentSessionId;
                var4 = 'sessionId';
                var2[3] = var5;
                var5 = var1.assignmentFingerprint;
                var4 = 'fingerprint';
                var2[3] = var5;
                _closure1_slot25 = var2;
                var4 = _closure1_slot50;
                var2 = var1.loadedGuildExperiments;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                _closure1_slot27 = var2;
                var2 = {};
                _closure1_slot28 = var2;
                return var1;
            }
        };
        var _closure1_slot51 = var1;
        var1 = function handleFetchFailure() {
            var1 = true;
            _closure1_slot21 = var1;
            var1 = undefined;
            return var1;
        };
        var _closure1_slot52 = var1;
        var1 = function handleLogout(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var1 = arg1;
                var2 = var1.isSwitchingAccount;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 15;
                var4 = var1[var5];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var7 = var4.Storage;
                var6 = var7.remove;
                var4 = _closure1_slot16;
                var4 = var6.bind(var7)(var4);
                if(var2) { _fun0024_ip = 213; continue _fun0024 }
case 214:
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
case 213:
                var2 = {};
                _closure1_slot26 = var2;
                var2 = {};
                var9 = _closure1_slot25;
                var10 = var2;
                var4 = copyDataProperties(var10, var9);
                var5 = new Array(0);
                var4 = 'rawUserExperiments';
                var2[3] = var5;
                _closure1_slot25 = var2;
                var2 = {};
                _closure1_slot22 = var2;
                var2 = false;
                _closure1_slot21 = var2;
                return var1;
            }
        };
        var _closure1_slot53 = var1;
        var1 = function handleLogin() {
            var1 = false;
            _closure1_slot21 = var1;
            var1 = {};
            _closure1_slot22 = var1;
            var1 = {};
            _closure1_slot27 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.Storage;
            var3 = var4.remove;
            var2 = _closure1_slot16;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot54 = var1;
        var1 = function loadLocalOverrides() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 15;
                var3 = var1[var5];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = var3.Storage;
                var4 = var6.get;
                var3 = _closure1_slot17;
                var3 = var4.bind(var6)(var3);
                var10 = null;
                if(!(var10 == var3)) { _fun0025_ip = 215; continue _fun0025 }
case 100:
                var3 = {};
case 215:
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
                if(!(var10 == var3)) { _fun0025_ip = 216; continue _fun0025 }
case 114:
                var3 = {};
case 216:
                var9[1] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var3 = _closure1_slot19;
                var3 = var4.bind(var5)(var3);
                if(!(var10 == var3)) { _fun0025_ip = 217; continue _fun0025 }
case 218:
                var3 = {};
case 217:
                var9[2] = var3;
                var3 = {};
                _closure1_slot29 = var3;
                var3 = {};
                _closure1_slot30 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 16;
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
                if(!var3) { _fun0025_ip = 219; continue _fun0025 }
case 144:
                var20 = var9[var8];
                var18 = var20;
                var14 = var7;
                var13 = var6;
                var3 = var5;
                var11 = var14;
                var6 = var13;
                var5 = var3;
                for(var15 in var18)
case 55:
                {
                    var23 = var14;
                    var6 = var13;
                    var5 = var3;
                    var11 = var23;
case 147:
                    var22 = var15;
                    var21 = var20[var22];
                    if(!(var10 != var21)) { _fun0025_ip = 220; continue _fun0025 }
case 149:
                    var24 = var21.bucket;
                    if(!(var10 != var24)) { _fun0025_ip = 220; continue _fun0025 }
case 221:
                    var24 = var21.override;
                    if(!(var12 === var24)) { _fun0025_ip = 220; continue _fun0025 }
case 222:
                    var24 = var21.fromCookie;
                    if(var24) { _fun0025_ip = 220; continue _fun0025 }
case 223:
                    var25 = var21.type;
                    var24 = _closure1_slot11;
                    var24 = var24.USER;
                    if(!(var24 !== var25)) { _fun0025_ip = 128; continue _fun0025 }
case 224:
                    var24 = _closure1_slot11;
                    var24 = var24.GUILD;
                    if(!(var24 !== var25)) { _fun0025_ip = 225; continue _fun0025 }
case 226:
                    var24 = delete var20[var22];
                    var14 = true;
                    var13 = var22;
                    var3 = var21;
                    _fun0025_ip = 55; continue _fun0025;
case 225:
                    var24 = _closure1_slot30;
                    var24[var22] = var21;
                    var14 = var23;
                    var13 = var22;
                    var3 = var21;
                    _fun0025_ip = 55; continue _fun0025;
case 128:
                    var24 = _closure1_slot29;
                    var24[var22] = var21;
                    var14 = var23;
                    var13 = var22;
                    var3 = var21;
                    _fun0025_ip = 55; continue _fun0025;
case 220:
                    var23 = delete var20[var22];
                    var14 = true;
                    var13 = var22;
                    var3 = var21;
                    _fun0025_ip = 55; continue _fun0025;
                }
case 191:
                var8 = var8 + 1;
                var3 = var9.length;
                var7 = var11;
                var4 = var7;
                if(var8 < var3) { _fun0025_ip = 144; continue _fun0025 }
case 219:
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
case 227:
                {
                    var3 = var5;
case 228:
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
                    _fun0025_ip = 227; continue _fun0025;
                }
case 229:
                if(var3) { _fun0025_ip = 230; continue _fun0025 }
case 231:
                var3 = var4;
case 230:
                if(!var3) { _fun0025_ip = 232; continue _fun0025 }
case 233:
                var2 = _closure1_slot56;
                var2 = var2.bind(var1)();
case 232:
                return var1;
            }
        };
        var _closure1_slot55 = var1;
        var1 = function saveExperimentOverrides() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot18;
                var1 = _closure1_slot29;
                var1 = var3.bind(var4)(var2, var1);
case 234: // try_end0
                _fun0026_ip = 235; continue _fun0026;
case 236: // catch_target0
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
case 235: // try_start_1
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot19;
                var1 = _closure1_slot30;
                var1 = var3.bind(var4)(var2, var1);
case 237: // try_end1
                _fun0026_ip = 16; continue _fun0026;
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
        var _closure1_slot56 = var1;
        var1 = function saveTrackedExposureExperiments(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
case 238: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
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
case 131: // try_end0
                _fun0027_ip = 134; continue _fun0027;
case 61: // catch_target0
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
case 134:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot57 = var1;
        var1 = function handleExperimentOverrideBucket(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var1 = arg1;
                var3 = var1.experimentId;
                var7 = var1.experimentBucket;
                var8 = var1.experimentType;
                var1 = var1.skipCleanup;
                var6 = null;
                if(!(var6 == var8)) { _fun0028_ip = 44; continue _fun0028 }
case 169:
                var2 = _closure1_slot24;
                var4 = var2[var3];
                var5 = var6 == var4;
                var2 = undefined;
                if(var5) { _fun0028_ip = 42; continue _fun0028 }
case 8:
                var2 = var4.type;
case 42:
                var8 = var2;
case 44:
                if(!(var6 != var8)) { _fun0028_ip = 239; continue _fun0028 }
case 3:
                if(!(var6 != var7)) { _fun0028_ip = 71; continue _fun0028 }
case 4:
                var2 = 'user';
                if(!(var2 !== var8)) { _fun0028_ip = 235; continue _fun0028 }
case 240:
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
                var4[2] = var5;
                _closure1_slot30 = var4;
                _fun0028_ip = 179; continue _fun0028;
case 235:
                var4 = {};
                var14 = _closure1_slot29;
                var15 = var4;
                var5 = copyDataProperties(var15, var14);
                var5 = {'type': null, 'revision': 1, 'population': 0, 'bucket': null, 'override': true};
                var5['type'] = var8;
                var5['bucket'] = var7;
                var4[2] = var5;
                _closure1_slot29 = var4;
                _fun0028_ip = 179; continue _fun0028;
case 71:
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
case 179:
                if(var1) { _fun0028_ip = 241; continue _fun0028 }
case 242:
                var1 = _closure1_slot29;
                var4 = new Array(2);
                var4[0] = var1;
                var1 = _closure1_slot30;
                var4[1] = var1;
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = undefined;
                if(!var1) { _fun0028_ip = 241; continue _fun0028 }
case 243:
                var1 = var4[var3];
                var10 = var1;
                var1 = var2;
                var2 = var1;
                for(var7 in var10)
case 244:
                {
                    var2 = var1;
case 245:
                    var12 = var7;
                    var13 = _closure1_slot24;
                    var13 = var13[var12];
                    var1 = var12;
                    if(var6 != var13) { _fun0028_ip = 244; continue _fun0028 }
case 222:
                    var13 = _closure1_slot29;
                    var13 = delete var13[var12];
                    var1 = var12;
                    _fun0028_ip = 244; continue _fun0028;
                }
case 83:
                var3 = var3 + 1;
                var1 = var4.length;
                if(var3 < var1) { _fun0028_ip = 243; continue _fun0028 }
case 241:
                var2 = _closure1_slot56;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
case 239:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot58 = var1;
        var1 = function handleGuildChange(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var1 = arg1;
                var11 = var1.guild;
                var9 = _closure1_slot28;
                var4 = ':';
                var1 = undefined;
                var3 = 1;
                var2 = 0;
                for(var5 in var9)
case 246:
                {
case 212:
                    var13 = var5;
                    var12 = var13.split;
                    var14 = var12.bind(var13)(var4);
                    var12 = _closure1_slot8;
                    var12 = var12.bind(var1)(var14, var3);
                    var14 = var12[var2];
                    var12 = var11.id;
                    if(var12 !== var14) { _fun0029_ip = 246; continue _fun0029 }
case 59:
                    var12 = _closure1_slot28;
                    var12 = delete var12[var13];
                    _fun0029_ip = 246; continue _fun0029;
                }
case 247:
                return var1;
            }
        };
        var _closure1_slot59 = var1;
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
        var8 = var8.ExposureTypes;
        var _closure1_slot12 = var8;
        var8 = 9;
        var8 = var7[var8];
        var8 = var6.bind(var1)(var8);
        var12 = var8.AnalyticEvents;
        var _closure1_slot13 = var12;
        var12 = var8.EMPTY_STRING_SNOWFLAKE_ID;
        var _closure1_slot14 = var12;
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
        var12 = Object.create(var8, {constructor: {value: var10}});
        var8 = 'ExperimentStore';
        var16 = var12;
        var15 = var8;
        var10 = new var16[var10](var15, var14);
        var10 = var10 instanceof Object ? var10 : var12;
        var _closure1_slot20 = var10;
        var10 = false;
        var _closure1_slot21 = var10;
        var10 = {};
        var _closure1_slot22 = var10;
        var10 = var4.Map;
        var12 = var10.prototype;
        var12 = Object.create(var12, {constructor: {value: var10}});
        var16 = var12;
        var10 = new var16[var10](var15);
        var10 = var10 instanceof Object ? var10 : var12;
        var _closure1_slot23 = var10;
        var10 = {};
        var _closure1_slot24 = var10;
        var10 = {};
        var12 = new Array(0);
        var10['rawUserExperiments'] = var12;
        var12 = new Array(0);
        var10['rawGuildExperiments'] = var12;
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
        var12 = var10.RELEASE_CHANNEL;
        var10 = 'staging';
        var10 = var10 === var12;
        if(var10) { _fun0001_ip = 248; continue _fun0001 }
case 249:
        var10 = true;
case 248:
        var _closure1_slot31 = var10;
        var10 = {};
        var _closure1_slot32 = var10;
        var10 = 604800000;
        var _closure1_slot33 = var10;
        var10 = var4.Date;
        var4 = var10.now;
        var4 = var4.bind(var10)();
        var4 = function(arg1) {
            var4 = function ExperimentStore() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var5 = this;
                    var1 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var5, var3);
                    var1 = {};
                    var6 = _closure1_slot53;
                    var1['LOGOUT'] = var6;
                    var6 = _closure1_slot54;
                    var1['LOGIN_SUCCESS'] = var6;
                    var6 = _closure1_slot46;
                    var1['CONNECTION_OPEN'] = var6;
                    var1['EXPERIMENTS_FETCH_SUCCESS'] = var6;
                    var6 = _closure1_slot51;
                    var1['OVERLAY_INITIALIZE'] = var6;
                    var6 = _closure1_slot52;
                    var1['EXPERIMENTS_FETCH_FAILURE'] = var6;
                    var6 = _closure1_slot58;
                    var1['EXPERIMENT_OVERRIDE_BUCKET'] = var6;
                    var6 = _closure1_slot59;
                    var1['GUILD_CREATE'] = var6;
                    var1['GUILD_UPDATE'] = var6;
                    var10 = new Array(2);
                    var10[0] = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.DispatchBand;
                    var1 = var1.Early;
                    var10[1] = var1;
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot34;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0030_ip = 250; continue _fun0030 }
case 251:
                    var1 = var9.apply;
                    var1 = var1.bind(var9)(var5, var10);
                    _fun0030_ip = 252; continue _fun0030;
case 250:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var1 = var7.bind(var8)(var9, var10, var6);
case 252:
                    var1 = var3.bind(var4)(var5, var1);
                    var2 = _closure1_slot42;
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
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = this;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var6 = var4.Storage;
                    var5 = var6.get;
                    var4 = _closure1_slot16;
                    var4 = var5.bind(var6)(var4);
                    var5 = null;
                    if(!(var5 != var4)) { _fun0031_ip = 213; continue _fun0031 }
case 43:
                    var6 = var4.v;
                    var5 = 1;
                    if(!(var5 === var6)) { _fun0031_ip = 213; continue _fun0031 }
case 41:
                    var5 = var4.e;
                    var4 = global;
                    var6 = var4.Date;
                    var4 = var6.now;
                    var13 = var4.bind(var6)();
                    var11 = var5;
                    var4 = false;
                    var6 = false;
                    for(var8 in var11)
case 253:
                    {
                        var6 = var4;
case 103:
                        var14 = var8;
                        var15 = var5[var14];
                        var15 = var15.time;
                        var16 = var13 - var15;
                        var15 = _closure1_slot33;
                        if(!(var16 > var15)) { _fun0031_ip = 253; continue _fun0031 }
case 254:
                        var14 = delete var5[var14];
                        var4 = true;
                        _fun0031_ip = 253; continue _fun0031;
                    }
case 255:
                    var4 = var5;
                    if(!var6) { _fun0031_ip = 251; continue _fun0031 }
case 256:
                    var6 = _closure1_slot57;
                    var6 = var6.bind(var1)(var5);
                    var4 = var5;
                    _fun0031_ip = 251; continue _fun0031;
case 213:
                    var4 = {};
case 251:
                    _closure1_slot22 = var4;
                    var4 = _closure1_slot55;
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
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var4 = this;
                    var3 = var4.readSnapshot;
                    var2 = _closure2_slot0;
                    var2 = var2.LATEST_SNAPSHOT_VERSION;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0032_ip = 138; continue _fun0032 }
case 257:
                    var2 = 'loadedUserExperiments';
                    var4 = var2 in var3;
                    if(var4) { _fun0032_ip = 258; continue _fun0032 }
case 236:
                    var6 = _closure1_slot47;
                    var5 = undefined;
                    var4 = true;
                    var4 = var6.bind(var5)(var3, var4);
                    _fun0032_ip = 138; continue _fun0032;
case 258:
                    var4 = var3.loadedUserExperiments;
                    _closure1_slot26 = var4;
                    var5 = _closure1_slot50;
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
case 138:
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
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure1_slot31;
                    if(!var1) { _fun0033_ip = 96; continue _fun0033 }
case 259:
                    var1 = _closure1_slot29;
                    var1 = var1[var5];
                    var3 = null;
                    if(!(var3 == var1)) { _fun0033_ip = 3; continue _fun0033 }
case 96:
                    var4 = _closure1_slot37;
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
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var7 = arg1;
                    var6 = arg2;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0034_ip = 40; continue _fun0034 }
case 260:
                    var6 = _closure1_slot14;
case 40:
                    var1 = _closure1_slot30;
                    var1 = var1[var7];
                    var4 = _closure1_slot31;
                    if(!var4) { _fun0034_ip = 261; continue _fun0034 }
case 105:
                    if(!(var3 == var1)) { _fun0034_ip = 262; continue _fun0034 }
case 261:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = ':';
                    var3 = var5.bind(var4)(var6, var3, var7);
                    var4 = _closure1_slot28;
                    var4 = var3 in var4;
                    if(var4) { _fun0034_ip = 114; continue _fun0034 }
case 112:
                    var5 = _closure1_slot49;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var6, var7);
                    var5 = _closure1_slot28;
                    var5[var3] = var4;
                    return var4;
case 114:
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
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var3 = this;
                    var2 = var3.getUserExperimentDescriptor;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0035_ip = 257; continue _fun0035 }
case 35:
                    var1 = _closure1_slot10;
                    var1 = var1.NOT_ELIGIBLE;
                    _fun0035_ip = 263; continue _fun0035;
case 257:
                    var1 = var2.bucket;
case 263:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'getGuildExperimentBucket';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var4 = this;
                    var3 = var4.getGuildExperimentDescriptor;
                    var2 = arg1;
                    var1 = arg2;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0036_ip = 58; continue _fun0036 }
case 96:
                    var1 = _closure1_slot10;
                    var1 = var1.NOT_ELIGIBLE;
                    _fun0036_ip = 109; continue _fun0036;
case 58:
                    var1 = var2.bucket;
case 109:
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
                var4 = _closure1_slot37;
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
                var4 = _closure1_slot37;
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
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2[Symbol.iterator];
                        var2 = var1().next;
                        var4 = var2().value;
                        var2 = var1;
                        var3 = undefined;
                        var2 = var2 === var3;
                        if(var2) { _fun0037_ip = 264; continue _fun0037 }
case 39:
                        var3 = var4;
case 264:
                        if(var2) { _fun0037_ip = 265; continue _fun0037 }
case 38:
                        var1.return();
case 265:
                        var2 = var3.startsWith;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
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
                        if(var10) { _fun0038_ip = 99; continue _fun0038 }
case 107:
                        var6 = var8;
case 99:
                        var4 = var6;
                        var6 = undefined;
                        var8 = var3;
                        if(var8) { _fun0038_ip = 44; continue _fun0038 }
case 212:
                        var7 = var7().value;
                        var8 = var2;
                        var8 = var8 === var9;
                        var3 = var8;
                        if(var8) { _fun0038_ip = 44; continue _fun0038 }
case 42:
                        var6 = var7;
case 44: // try_start_0
                        var5 = var6.time;
case 266: // try_end0
                        var6 = var3;
                        if(var6) { _fun0038_ip = 267; continue _fun0038 }
case 268:
                        var2.return();
case 267:
                        var8 = var4;
                        var7 = var8.replace;
                        var6 = _closure3_slot0;
                        var4 = '';
                        var6 = var7.bind(var8)(var6, var4);
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var5;
                        return var4;
case 66: // catch_target0
                        CatchBlockStart(arg_register=0);
                        _fun0038_ip = 269; continue _fun0038;
case 63:
                        CatchBlockStart(arg_register=0);
case 269:
                        if(var3) { _fun0038_ip = 270; continue _fun0038 }
case 153:
                        var2.return();
case 270:
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
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var1 = _closure1_slot31;
                    var2 = {};
                    if(var1) { _fun0039_ip = 271; continue _fun0039 }
case 260:
                    var1 = var2;
                    _fun0039_ip = 58; continue _fun0039;
case 271:
                    var5 = _closure1_slot29;
                    var6 = var2;
                    var4 = copyDataProperties(var6, var5);
                    var5 = _closure1_slot30;
                    var6 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var1 = var2;
case 58:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[15] = var5;
            var5 = {};
            var7 = 'getExperimentOverrideDescriptor';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot31;
                    var5 = null;
                    var1 = null;
                    if(!var2) { _fun0040_ip = 211; continue _fun0040 }
case 271:
                    var2 = _closure1_slot29;
                    var2 = var2[var4];
                    if(!(var5 == var2)) { _fun0040_ip = 105; continue _fun0040 }
case 107:
                    var3 = _closure1_slot30;
                    var2 = var3[var4];
case 105:
                    var1 = var2;
case 211:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'getAllExperimentAssignments';
            var5['key'] = var7;
            var7 = function value() {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
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
                        var5 = _closure1_slot37;
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
case 61:
                    {
case 111:
                        var12 = var2;
                        var11 = var9[var12];
                        if(var7 == var11) { _fun0041_ip = 61; continue _fun0041 }
case 164:
                        var10 = _closure1_slot26;
                        var10 = var10[var12];
                        var10 = var10.bucket;
                        var1[var11] = var10;
                        _fun0041_ip = 61; continue _fun0041;
                    }
case 216:
                    var5 = _closure1_slot28;
                    for(var2 in var5)
case 272:
                    {
case 273:
                        var10 = var2;
                        var9 = _closure1_slot28;
                        var9 = var9[var10];
                        if(var7 == var9) { _fun0041_ip = 272; continue _fun0041 }
case 254:
                        var9 = var9.bucket;
                        var1[var10] = var9;
                        _fun0041_ip = 272; continue _fun0041;
                    }
case 64:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'getSerializedState';
            var5['key'] = var7;
            var7 = function value() {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var3 = {};
                    var11 = _closure1_slot27;
                    var7 = global;
                    var5 = undefined;
                    for(var8 in var11)
case 274:
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
                        var4 = _closure1_slot35;
                        var1 = var3[var1];
                        var1 = var1.populations;
                        var6 = var4.bind(var5)(var1);
                        var4 = var6.bind(var5)();
                        var1 = var4.done;
                        if(var1) { _fun0042_ip = 274; continue _fun0042 }
case 17:
                        var13 = var4.value;
                        var1 = new Array(0);
                        var13['filters'] = var1;
                        var13 = var6.bind(var5)();
                        var1 = var13.done;
                        var4 = var13;
                        if(var1) { _fun0042_ip = 274; continue _fun0042 }
case 254:
                        _fun0042_ip = 17; continue _fun0042;
                    }
case 275:
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
                var4 = _closure1_slot41;
                var8 = _closure1_slot39;
                var3 = undefined;
                var12 = arg1;
                var10 = arg3;
                var9 = arg4;
                var13 = undefined;
                var11 = var5;
                var2 = var13[var8](var12, var11, var10, var9, var8);
                var1 = _closure1_slot40;
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
        var16 = var5;
        var4 = new var16[var4](var15);
        var4 = var4 instanceof Object ? var4 : var5;
        var5 = 18;
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