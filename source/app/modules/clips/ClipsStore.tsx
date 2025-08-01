// app/modules/clips/ClipsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot32 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot34;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot34;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot33 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function _migrateDefaultStorage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 183; continue _fun0005 }
 10:
                    var2 = _closure1_slot30;
                    var2 = var2.clipsSettings;
                    var4 = var2.storageLocation;
                    var2 = _closure1_slot18;
                    if(!(var4 === var2)) { _fun0005_ip = 175; continue _fun0005 }
 40:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 13;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0005_ip = 175; continue _fun0005 }
 68:
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.remoteApp;
                    if(!(var4 != var2)) { _fun0005_ip = 175; continue _fun0005 }
 95:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.remoteApp;
                    var4 = var5.getPath;
                    var2 = 'documents';
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=139);
 137:
                    return var2;
 139:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 180; continue _fun0005 }
 145:
                    var4 = _closure1_slot30;
                    var4 = var4.clipsSettings;
                    var4['storageLocation'] = var2;
                    var4 = _closure1_slot31;
                    var3 = var4.emitChange;
                    var3 = var3.bind(var4)();
 175:
                    var3 = undefined;
                    return var3;
 180:
                    return var2;
 183:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot35 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var8 = 0;
    var2 = var6[var8];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var10 = var5.bind(var1)(var2);
    var2 = var10.CLIPS_HARDWARE_CLASSIFICATION_VERSION;
    var _closure1_slot13 = var2;
    var2 = var10.ClipSaveTypes;
    var _closure1_slot14 = var2;
    var9 = var10.ClipsLengthSettings;
    var2 = var10.ClipsViewerConnectivitySettings;
    var11 = var10.ClipsUserEducationType;
    var _closure1_slot15 = var11;
    var10 = var10.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS;
    var _closure1_slot16 = var10;
    var10 = 11;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.VoiceFlags;
    var _closure1_slot17 = var10;
    var10 = 12;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var11 = var10.ApplicationStreamFPS;
    var12 = var10.ApplicationStreamResolutions;
    var10 = 'default';
    var _closure1_slot18 = var10;
    var10 = new Array(0);
    var _closure1_slot19 = var10;
    var10 = new Array(0);
    var _closure1_slot20 = var10;
    var10 = new Array(0);
    var _closure1_slot21 = var10;
    var _closure1_slot22 = var8;
    var8 = null;
    var _closure1_slot23 = var8;
    var _closure1_slot24 = var8;
    var10 = {};
    var _closure1_slot25 = var10;
    var _closure1_slot26 = var8;
    var _closure1_slot27 = var8;
    var8 = {};
    var _closure1_slot28 = var8;
    var8 = {'clipsEnabled': false, 'storageLocation': 'default', 'clipsQuality': null, 'clipsLength': null, 'remindersEnabled': true, 'decoupledClipsEnabled': false, 'viewerClipsEnabled': true};
    var10 = {};
    var12 = var12.RESOLUTION_1080;
    var10['resolution'] = var12;
    var11 = var11.FPS_30;
    var10['frameRate'] = var11;
    var8['clipsQuality'] = var10;
    var9 = var9.SECONDS_30;
    var8['clipsLength'] = var9;
    var2 = var2.ALL;
    var8['viewerConnectivity'] = var2;
    var _closure1_slot29 = var8;
    var2 = {'clipsSettings': null, 'hardwareClassification': null, 'hardwareClassificationForDecoupled': null, 'hardwareClassificationVersion': 0, 'newClipIds': null, 'hasClips': false, 'hasTakenDecoupledClip': false};
    var2['clipsSettings'] = var8;
    var8 = new Array(0);
    var2['newClipIds'] = var8;
    var8 = {'dismissedAt': null, 'numberOfGamesLaunchedSinceDismissal': 0, 'numberOfTimesDismissed': 0};
    var2['clipsEducationState'] = var8;
    var _closure1_slot30 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.DeviceSettingsStore;
    var2 = function(arg1) {
        var4 = function ClipsStoreClass() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot32;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0007_ip = 19; continue _fun0007 }
 12:
                _closure1_slot30 = var2;
 19:
                var2 = function migrateDefaultStorage() {
                    var1 = undefined;
                    var4 = _closure1_slot35;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = var4.waitFor;
                var2 = _closure1_slot10;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(22);
        var1[0] = var5;
        var5 = {};
        var7 = 'getClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPendingClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            var1 = var1.clipsSettings;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLastClipsSession';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getClipsWarningShown';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot23;
            var1 = arg1;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getActiveAnimation';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getStreamClipAnimations';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = _closure1_slot28;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 24; continue _fun0008 }
 20:
                var1 = _closure1_slot19;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'hasAnyClipAnimations';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot28;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getHardwareClassification';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            var1 = var1.hardwareClassification;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getHardwareClassificationForDecoupled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            var1 = var1.hardwareClassificationForDecoupled;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getHardwareClassificationVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            var1 = var1.hardwareClassificationVersion;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getIsAtMaxSaveClipOperations';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot22;
            var1 = _closure1_slot16;
            var1 = var2 >= var1;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getLastClipsError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isClipsEnabledForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot25;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0009_ip = 31; continue _fun0009 }
 25:
                var2 = var3.clipsEnabled;
 31:
                var1 = var1 != var2;
                if(!var1) { _fun0009_ip = 41; continue _fun0009 }
 38:
                var1 = var2;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'isVoiceRecordingAllowedForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure1_slot25;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0010_ip = 31; continue _fun0010 }
 25:
                var2 = var3.allowVoiceRecording;
 31:
                var1 = var1 != var2;
                if(!var1) { _fun0010_ip = 41; continue _fun0010 }
 38:
                var1 = var2;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isViewerClippingAllowedForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = _closure1_slot25;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0011_ip = 31; continue _fun0011 }
 25:
                var2 = var3.allowAnyViewerClips;
 31:
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 41; continue _fun0011 }
 38:
                var1 = var2;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'isDecoupledGameClippingEnabled';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = _closure1_slot12;
                var1 = var3.getCurrentUser;
                var6 = var1.bind(var3)();
                var1 = null;
                var5 = var1 == var6;
                var4 = undefined;
                var3 = undefined;
                if(var5) { _fun0012_ip = 39; continue _fun0012 }
 29:
                var5 = var6.isStaff;
                var3 = var5.bind(var6)();
 39:
                var1 = var1 != var3;
                if(!var1) { _fun0012_ip = 49; continue _fun0012 }
 46:
                var1 = var3;
 49:
                if(!var1) { _fun0012_ip = 82; continue _fun0012 }
 52:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isWindows;
                var1 = var2.bind(var3)();
 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'hasClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            var1 = var1.hasClips;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'hasTakenDecoupledClip';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            var1 = var1.hasTakenDecoupledClip;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getNewClipIds';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot30;
            var1 = var1.newClipIds;
            return var1;
        };
        var5['value'] = var6;
        var1[21] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'ClipsStore';
    var9['displayName'] = var2;
    var9['persistKey'] = var2;
    var2 = new Array(12);
    var8 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var3 = null;
            if(!(var3 == var2)) { _fun0013_ip = 18; continue _fun0013 }
 11:
            var2 = _closure1_slot29;
 18:
            var1['clipsSettings'] = var2;
            var2 = 0;
            var1['newClipsCount'] = var2;
            return var1;
        }
    };
    var2[0] = var8;
    var8 = function(arg1) {
        var2 = arg1;
        var3 = {};
        var4 = _closure1_slot29;
        var5 = var3;
        var1 = copyDataProperties(var5, var4);
        var4 = var2.clipsSettings;
        var5 = var3;
        var1 = copyDataProperties(var5, var4);
        var1 = {};
        var5 = var1;
        var4 = var2;
        var2 = copyDataProperties(var5, var4);
        var2 = 'clipsSettings';
        var1[var2] = var3;
        return var1;
    };
    var2[1] = var8;
    var8 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.newClipIds;
            var2 = null;
            if(!(var2 == var3)) { _fun0014_ip = 31; continue _fun0014 }
 27:
            var3 = new Array(0);
 31:
            var2 = 'newClipIds';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[2] = var8;
    var8 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var8 = var1;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var4 = var2.hardwareClassification;
            var3 = null;
            var6 = var3 != var4;
            var5 = null;
            if(!var6) { _fun0015_ip = 35; continue _fun0015 }
 32:
            var5 = var4;
 35:
            var4 = 'hardwareClassification';
            var1[var4] = var5;
            var2 = var2.hardwareClassificationVersion;
            var4 = var3 != var2;
            var3 = 0;
            if(!var4) { _fun0015_ip = 62; continue _fun0015 }
 59:
            var3 = var2;
 62:
            var2 = 'hardwareClassificationVersion';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[3] = var8;
    var8 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var2 = var2.hasClips;
            var3 = null;
            var3 = var3 != var2;
            if(!var3) { _fun0016_ip = 33; continue _fun0016 }
 30:
            var3 = var2;
 33:
            var2 = 'hasClips';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[4] = var8;
    var8 = function(arg1) {
        var2 = arg1;
        var1 = {};
        var6 = var1;
        var5 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = {};
        var5 = var2.clipsSettings;
        var6 = var3;
        var2 = copyDataProperties(var6, var5);
        var2 = _closure1_slot29;
        var4 = var2.decoupledClipsEnabled;
        var2 = 'decoupledClipsEnabled';
        var3[var2] = var4;
        var2 = 'clipsSettings';
        var1[var2] = var3;
        return var1;
    };
    var2[5] = var8;
    var8 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var2 = var2.hardwareClassificationForDecoupled;
            var3 = null;
            var4 = var3 != var2;
            if(!var4) { _fun0017_ip = 33; continue _fun0017 }
 30:
            var3 = var2;
 33:
            var2 = 'hardwareClassificationForDecoupled';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[6] = var8;
    var8 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 19;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.default;
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0018_ip = 52; continue _fun0018 }
 42:
            var1 = var3.getHardwareEncoding;
            var4 = var1.bind(var3)();
 52:
            var1 = {};
            var8 = var1;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var3 = {};
            var7 = var2.clipsSettings;
            var8 = var3;
            var5 = copyDataProperties(var8, var7);
            var5 = !var4;
            var6 = !var5;
            if(var5) { _fun0018_ip = 100; continue _fun0018 }
 88:
            var5 = var2.clipsSettings;
            var6 = var5.clipsEnabled;
 100:
            var5 = 'clipsEnabled';
            var3[var5] = var6;
            var5 = !var4;
            var4 = !var5;
            if(var5) { _fun0018_ip = 130; continue _fun0018 }
 118:
            var2 = var2.clipsSettings;
            var4 = var2.decoupledClipsEnabled;
 130:
            var2 = 'decoupledClipsEnabled';
            var3[var2] = var4;
            var2 = 'clipsSettings';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[7] = var8;
    var8 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.newClipIds;
            var2 = null;
            if(!(var2 == var3)) { _fun0019_ip = 31; continue _fun0019 }
 27:
            var3 = new Array(0);
 31:
            var2 = 'newClipIds';
            var1[var2] = var3;
            var3 = undefined;
            var2 = 'newClipIDs';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[8] = var8;
    var8 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var7 = var1;
            var6 = var2;
            var3 = copyDataProperties(var7, var6);
            var3 = {};
            var6 = var2.clipsSettings;
            var7 = var3;
            var4 = copyDataProperties(var7, var6);
            var4 = var2.clipsSettings;
            var4 = var4.clipsQuality;
            var5 = 'number';
            var4 = typeof var4;
            if(!(var5 !== var4)) { _fun0020_ip = 85; continue _fun0020 }
 53:
            var4 = var2.clipsSettings;
            var5 = var4.clipsQuality;
            var4 = null;
            if(!(var4 != var5)) { _fun0020_ip = 85; continue _fun0020 }
 71:
            var2 = var2.clipsSettings;
            var4 = var2.clipsQuality;
            _fun0020_ip = 98; continue _fun0020;
 85:
            var2 = _closure1_slot29;
            var4 = var2.clipsQuality;
 98:
            var2 = 'clipsQuality';
            var3[var2] = var4;
            var2 = 'clipsSettings';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[9] = var8;
    var8 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var3 = {};
            var5 = var2.clipsSettings;
            var6 = var3;
            var4 = copyDataProperties(var6, var5);
            var2 = var2.clipsSettings;
            var4 = var2.remindersEnabled;
            var2 = null;
            if(!(var2 == var4)) { _fun0021_ip = 61; continue _fun0021 }
 48:
            var2 = _closure1_slot29;
            var4 = var2.remindersEnabled;
 61:
            var2 = 'remindersEnabled';
            var3[var2] = var4;
            var2 = 'clipsSettings';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[10] = var8;
    var8 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = false;
        var2 = 'hasTakenDecoupledClip';
        var1[var2] = var3;
        var3 = {'dismissedAt': null, 'numberOfGamesLaunchedSinceDismissal': 0, 'numberOfTimesDismissed': 0};
        var2 = 'clipsEducationState';
        var1[var2] = var3;
        return var1;
    };
    var2[11] = var8;
    var9['migrations'] = var2;
    var2 = 20;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleSettingsUpdate(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = {};
        var6 = _closure1_slot30;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var4 = {};
        var5 = _closure1_slot30;
        var6 = var5.clipsSettings;
        var7 = var4;
        var5 = copyDataProperties(var7, var6);
        var7 = var4;
        var6 = var3;
        var3 = copyDataProperties(var7, var6);
        var3 = 'clipsSettings';
        var2[var3] = var4;
        _closure1_slot30 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SETTINGS_UPDATE'] = var7;
    var7 = function handleSaveClip(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var4 = var1.clip;
            var _closure2_slot0 = var4;
            var1 = global;
            var7 = var1.Math;
            var6 = var7.max;
            var1 = _closure1_slot22;
            var5 = 1;
            var1 = var1 - var5;
            var10 = 0;
            var1 = var6.bind(var7)(var1, var10);
            _closure1_slot22 = var1;
            var6 = {};
            var1 = var4.applicationName;
            var6['applicationName'] = var1;
            var1 = false;
            var6['ended'] = var1;
            var13 = _closure1_slot24;
            var14 = var6;
            var1 = copyDataProperties(var14, var13);
            var9 = _closure1_slot24;
            var7 = null;
            var11 = var7 == var9;
            var1 = undefined;
            var8 = undefined;
            if(var11) { _fun0022_ip = 108; continue _fun0022 }
 102:
            var8 = var9.newClipIds;
 108:
            if(!(var7 == var8)) { _fun0022_ip = 116; continue _fun0022 }
 112:
            var8 = new Array(0);
 116:
            var9 = new Array(1);
            var14 = var9;
            var13 = var8;
            var12 = 0;
            var8 = arraySpread(var14, var13, var12);
            var11 = var4.id;
            var9[var8] = var11;
            var8 = var8 + var5;
            var8 = 'newClipIds';
            var6[var8] = var9;
            _closure1_slot24 = var6;
            var6 = {};
            var13 = _closure1_slot30;
            var14 = var6;
            var9 = copyDataProperties(var14, var13);
            var9 = _closure1_slot30;
            var9 = var9.newClipIds;
            if(!(var7 == var9)) { _fun0022_ip = 190; continue _fun0022 }
 186:
            var9 = new Array(0);
 190:
            var7 = new Array(1);
            var14 = var7;
            var13 = var9;
            var12 = 0;
            var9 = arraySpread(var14, var13, var12);
            var10 = var4.id;
            var7[var9] = var10;
            var9 = var9 + var5;
            var6[var8] = var7;
            _closure1_slot30 = var6;
            var7 = _closure1_slot21;
            var6 = var7.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 !== var1;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            _closure1_slot21 = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var13 = _closure1_slot20;
            var14 = var3;
            var12 = var5;
            var4 = arraySpread(var14, var13, var12);
            _closure1_slot20 = var3;
            var3 = _closure1_slot30;
            var2 = true;
            var3['hasClips'] = var2;
            return var1;
        }
    };
    var2['CLIPS_SAVE_CLIP'] = var7;
    var7 = function handleSaveClipPlaceholder(arg1) {
        var1 = arg1;
        var1 = var1.clip;
        var2 = new Array(1);
        var2[0] = var1;
        var6 = _closure1_slot21;
        var5 = 1;
        var7 = var2;
        var3 = arraySpread(var7, var6, var5);
        _closure1_slot21 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SAVE_CLIP_PLACEHOLDER'] = var7;
    var7 = function handleSaveClipPlaceholderError(arg1) {
        var2 = arg1;
        var2 = var2.clipId;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot21;
        var3 = var4.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR'] = var7;
    var7 = function handleSaveClipStart(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var8 = var1.clipType;
            var3 = var1.streamKey;
            var7 = var1.thumbnail;
            var1 = _closure1_slot22;
            var5 = 1;
            var1 = var1 + var5;
            _closure1_slot22 = var1;
            var4 = _closure1_slot30;
            var1 = var4.hasTakenDecoupledClip;
            if(var1) { _fun0023_ip = 68; continue _fun0023 }
 54:
            var6 = _closure1_slot14;
            var6 = var6.DECOUPLED;
            var1 = var8 === var6;
 68:
            var4['hasTakenDecoupledClip'] = var1;
            var1 = null;
            if(!(var1 != var3)) { _fun0023_ip = 177; continue _fun0023 }
 80:
            if(!(var1 != var7)) { _fun0023_ip = 177; continue _fun0023 }
 84:
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var8 = var4.bind(var6)();
            var6 = _closure1_slot27;
            var4 = var8;
            if(!(var1 != var6)) { _fun0023_ip = 116; continue _fun0023 }
 112:
            var4 = _closure1_slot27;
 116:
            _closure1_slot27 = var4;
            var2 = _closure1_slot28;
            var6 = var2[var3];
            if(!(var1 == var6)) { _fun0023_ip = 136; continue _fun0023 }
 132:
            var6 = new Array(0);
 136:
            var1 = new Array(1);
            var9 = 0;
            var11 = var1;
            var10 = var6;
            var4 = arraySpread(var11, var10, var9);
            var6 = {};
            var6['timestamp'] = var8;
            var6['thumbnail'] = var7;
            var1[var4] = var6;
            var4 = var4 + var5;
            var2[var3] = var1;
 177:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_SAVE_CLIP_START'] = var7;
    var7 = function handleSaveClipError() {
        var1 = global;
        var5 = var1.Math;
        var4 = var5.max;
        var3 = _closure1_slot22;
        var1 = 1;
        var3 = var3 - var1;
        var1 = 0;
        var1 = var4.bind(var5)(var3, var1);
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SAVE_CLIP_ERROR'] = var7;
    var7 = function handleStreamClipAnimationEnd(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var2 = arg1;
            var3 = var2.streamKey;
            var6 = var2.timestamp;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot27;
            if(!(var2 === var6)) { _fun0024_ip = 38; continue _fun0024 }
 32:
            var2 = null;
            _closure1_slot27 = var2;
 38:
            var2 = _closure1_slot28;
            var5 = null;
            if(!(var5 != var6)) { _fun0024_ip = 73; continue _fun0024 }
 48:
            var4 = _closure1_slot28;
            var5 = var4[var3];
            var4 = var5.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.timestamp;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            _fun0024_ip = 77; continue _fun0024;
 73:
            var1 = new Array(0);
 77:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_SAVE_ANIMATION_END'] = var7;
    var7 = function handleStreamStart(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var4 = var1.sourceName;
            var7 = var1.pid;
            var1 = _closure1_slot30;
            var1 = var1.clipsSettings;
            var1 = var1.clipsEnabled;
            if(var1) { _fun0025_ip = 41; continue _fun0025 }
 37:
            var1 = false;
            return var1;
 41:
            var1 = null;
            var3 = var4;
            if(!(var1 != var7)) { _fun0025_ip = 89; continue _fun0025 }
 50:
            var6 = _closure1_slot10;
            var5 = var6.getGameForPID;
            var6 = var5.bind(var6)(var7);
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0025_ip = 79; continue _fun0025 }
 74:
            var5 = var6.name;
 79:
            if(!(var1 != var5)) { _fun0025_ip = 86; continue _fun0025 }
 83:
            var4 = var5;
 86:
            var3 = var4;
 89:
            if(!(var1 != var3)) { _fun0025_ip = 132; continue _fun0025 }
 93:
            var1 = '';
            if(!(var1 !== var3)) { _fun0025_ip = 132; continue _fun0025 }
 101:
            var1 = {};
            var1['applicationName'] = var3;
            var3 = new Array(0);
            var1['newClipIds'] = var3;
            var3 = false;
            var1['ended'] = var3;
            _closure1_slot24 = var1;
            var1 = undefined;
            return var1;
 132:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_START'] = var7;
    var7 = function handleStreamStop(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var6 = var1.streamKey;
            var3 = null;
            _closure1_slot27 = var3;
            var2 = _closure1_slot28;
            var1 = new Array(0);
            var2[var6] = var1;
            var1 = _closure1_slot24;
            var1 = var3 != var1;
            if(!var1) { _fun0026_ip = 160; continue _fun0026 }
 41:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var5 = var5[var2];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var2 = var5.decodeStreamKey;
            var2 = var2.bind(var5)(var6);
            var5 = var2.ownerId;
            var6 = _closure1_slot11;
            var2 = var6.getId;
            var2 = var2.bind(var6)();
            var2 = var5 === var2;
            if(!var2) { _fun0026_ip = 157; continue _fun0026 }
 101:
            var5 = _closure1_slot24;
            var5 = var5.newClipIds;
            var6 = var5.length;
            var5 = 0;
            var3 = null;
            if(!(var5 !== var6)) { _fun0026_ip = 151; continue _fun0026 }
 124:
            var5 = {};
            var8 = _closure1_slot24;
            var9 = var5;
            var6 = copyDataProperties(var9, var8);
            var7 = true;
            var6 = 'ended';
            var5[var6] = var7;
            var3 = var5;
 151:
            _closure1_slot24 = var3;
            var2 = undefined;
 157:
            var1 = var2;
 160:
            return var1;
        }
    };
    var2['STREAM_STOP'] = var7;
    var7 = function handleClearClipsSession() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var3 = _closure1_slot24;
            var1 = null;
            if(!(var1 != var3)) { _fun0027_ip = 21; continue _fun0027 }
 13:
            _closure1_slot24 = var1;
            var1 = undefined;
            return var1;
 21:
            var1 = false;
            return var1;
        }
    };
    var2['CLIPS_CLEAR_CLIPS_SESSION'] = var7;
    var7 = function clearNewClipIds() {
        var2 = _closure1_slot30;
        var1 = new Array(0);
        var2['newClipIds'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_CLEAR_NEW_CLIP_IDS'] = var7;
    var7 = function handleClipsDirectoryLoaded(arg1) {
        var1 = arg1;
        var4 = _closure1_slot30;
        var3 = var1.clips;
        var5 = var3.length;
        var3 = 0;
        var3 = var5 > var3;
        var4['hasClips'] = var3;
        var1 = var1.clips;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_LOAD_DIRECTORY_SUCCESS'] = var7;
    var7 = function handleClipsDelete(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot20;
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.filepath;
                var1 = _closure2_slot0;
                var1 = var1.filepath;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            _closure1_slot20 = var2;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 === var3)) { _fun0028_ip = 58; continue _fun0028 }
 46:
            var2 = _closure1_slot30;
            var1 = false;
            var2['hasClips'] = var1;
 58:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_DELETE_CLIP'] = var7;
    var7 = function handleClipMetadataUpdate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var6 = var1.clip;
            var4 = _closure1_slot33;
            var2 = _closure1_slot20;
            var1 = var2.entries;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var10 = var4.bind(var1)(var2);
            var4 = var10.bind(var1)();
            var2 = var4.done;
            var9 = 2;
            var5 = 0;
            var8 = 1;
            var7 = var4;
            if(var2) { _fun0029_ip = 147; continue _fun0029 }
 60:
            var4 = var7.value;
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var4, var9);
            var4 = var2[var5];
            var2 = var2[var8];
            var11 = var2.id;
            var2 = var6.id;
            if(!(var11 !== var2)) { _fun0029_ip = 114; continue _fun0029 }
 97:
            var11 = var10.bind(var1)();
            var2 = var11.done;
            var7 = var11;
            if(var2) { _fun0029_ip = 147; continue _fun0029 }
 112:
            _fun0029_ip = 60; continue _fun0029;
 114:
            var2 = _closure1_slot20;
            var2[var4] = var6;
            var13 = _closure1_slot20;
            var2 = new Array(0);
            var14 = var2;
            var12 = 0;
            var4 = arraySpread(var14, var13, var12);
            _closure1_slot20 = var2;
            var2 = undefined;
            return var2;
 147:
            return var1;
        }
    };
    var2['CLIPS_UPDATE_METADATA'] = var7;
    var7 = function handleRTCConnectionFlagsUpdate(arg1) {
        var6 = arg1;
        var4 = _closure1_slot25;
        var3 = var6.userId;
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var7 = 16;
        var10 = var9[var7];
        var1 = undefined;
        var13 = var8.bind(var1)(var10);
        var12 = var13.hasFlag;
        var11 = var6.flags;
        var5 = _closure1_slot17;
        var10 = var5.CLIPS_ENABLED;
        var10 = var12.bind(var13)(var11, var10);
        var2['clipsEnabled'] = var10;
        var10 = var9[var7];
        var13 = var8.bind(var1)(var10);
        var12 = var13.hasFlag;
        var11 = var6.flags;
        var10 = var5.ALLOW_VOICE_RECORDING;
        var10 = var12.bind(var13)(var11, var10);
        var2['allowVoiceRecording'] = var10;
        var7 = var9[var7];
        var8 = var8.bind(var1)(var7);
        var7 = var8.hasFlag;
        var6 = var6.flags;
        var5 = var5.ALLOW_ANY_VIEWER_CLIPS;
        var5 = var7.bind(var8)(var6, var5);
        var2['allowAnyViewerClips'] = var5;
        var4[var3] = var2;
        return var1;
    };
    var2['RTC_CONNECTION_FLAGS'] = var7;
    var7 = function handleShowCallWarning(arg1) {
        var1 = arg1;
        var2 = var1.channelId;
        _closure1_slot23 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SHOW_CALL_WARNING'] = var7;
    var7 = function handleVoiceChannelSelect(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = _closure1_slot23;
            if(!(var3 !== var1)) { _fun0030_ip = 25; continue _fun0030 }
 19:
            var1 = null;
            _closure1_slot23 = var1;
 25:
            var1 = undefined;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var7;
    var7 = function handleClassifyHardware(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var1 = arg1;
            var4 = var1.classification;
            var1 = _closure1_slot30;
            var6 = var1.hardwareClassification;
            var3 = _closure1_slot30;
            var1 = _closure1_slot13;
            var3['hardwareClassificationVersion'] = var1;
            var1 = _closure1_slot30;
            var1['hardwareClassification'] = var4;
            var1 = _closure1_slot30;
            var5 = var1.hardwareClassification;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 14;
            var3 = var1[var7];
            var1 = undefined;
            var3 = var8.bind(var1)(var3);
            var3 = var3.ClipsHardwareClassification;
            var3 = var3.MEETS_AUTO_ENABLE;
            var3 = var5 === var3;
            if(!var3) { _fun0031_ip = 130; continue _fun0031 }
 97:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var1)(var5);
            var5 = var5.ClipsHardwareClassification;
            var5 = var5.MEETS_AUTO_ENABLE;
            var3 = var6 !== var5;
 130:
            if(!var3) { _fun0031_ip = 151; continue _fun0031 }
 133:
            var3 = _closure1_slot30;
            var5 = var3.clipsSettings;
            var3 = true;
            var5['clipsEnabled'] = var3;
 151:
            var3 = _closure1_slot30;
            var5 = var3.hardwareClassificationForDecoupled;
            var3 = _closure1_slot30;
            var3['hardwareClassificationForDecoupled'] = var4;
            var3 = _closure1_slot30;
            var4 = var3.hardwareClassificationForDecoupled;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var1)(var3);
            var3 = var3.ClipsHardwareClassification;
            var3 = var3.MEETS_AUTO_ENABLE;
            var3 = var4 === var3;
            if(!var3) { _fun0031_ip = 250; continue _fun0031 }
 217:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.ClipsHardwareClassification;
            var4 = var4.MEETS_AUTO_ENABLE;
            var3 = var5 !== var4;
 250:
            if(!var3) { _fun0031_ip = 269; continue _fun0031 }
 253:
            var4 = _closure1_slot30;
            var4 = var4.clipsSettings;
            var3 = var4.clipsEnabled;
 269:
            if(!var3) { _fun0031_ip = 290; continue _fun0031 }
 272:
            var2 = _closure1_slot30;
            var3 = var2.clipsSettings;
            var2 = true;
            var3['decoupledClipsEnabled'] = var2;
 290:
            return var1;
        }
    };
    var2['CLIPS_CLASSIFY_HARDWARE'] = var7;
    var7 = function handleClipsInit(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var1 = arg1;
            var4 = var1.applicationName;
            var1 = null;
            _closure1_slot26 = var1;
            var1 = _closure1_slot30;
            var1 = var1.clipsSettings;
            var1 = var1.clipsEnabled;
            var3 = false;
            if(var1) { _fun0032_ip = 41; continue _fun0032 }
 39:
            return var3;
 41:
            var1 = {};
            var1['applicationName'] = var4;
            var4 = new Array(0);
            var1['newClipIds'] = var4;
            var1['ended'] = var3;
            _closure1_slot24 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_INIT'] = var7;
    var7 = function handleClipsInitFailure(arg1) {
        var1 = arg1;
        var2 = var1.errMsg;
        _closure1_slot26 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_INIT_FAILURE'] = var7;
    var7 = function handleDismissClipsEducation(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var1 = arg1;
            var3 = var1.educationType;
            var1 = _closure1_slot15;
            var1 = var1.Error;
            if(!(var1 !== var3)) { _fun0033_ip = 137; continue _fun0033 }
 27:
            var1 = _closure1_slot15;
            var1 = var1.Disabled;
            if(!(var1 !== var3)) { _fun0033_ip = 55; continue _fun0033 }
 41:
            var1 = _closure1_slot15;
            var1 = var1.Enabled;
            if(!(var1 === var3)) { _fun0033_ip = 143; continue _fun0033 }
 55:
            var1 = _closure1_slot30;
            var3 = var1.clipsEducationState;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var3['dismissedAt'] = var1;
            var1 = _closure1_slot30;
            var3 = var1.clipsEducationState;
            var1 = 0;
            var3['numberOfGamesLaunchedSinceDismissal'] = var1;
            var1 = _closure1_slot30;
            var3 = var1.clipsEducationState;
            var4 = var3.numberOfTimesDismissed;
            var1 = 1;
            var1 = var4 + var1;
            var3['numberOfTimesDismissed'] = var1;
            _fun0033_ip = 143; continue _fun0033;
 137:
            var1 = null;
            _closure1_slot26 = var1;
 143:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_DISMISS_EDUCATION'] = var7;
    var7 = function handleRunningGamesChange(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var1 = arg1;
            var1 = var1.added;
            var2 = var1.length;
            var1 = 0;
            if(!(var2 > var1)) { _fun0034_ip = 52; continue _fun0034 }
 20:
            var1 = _closure1_slot30;
            var2 = var1.clipsEducationState;
            var3 = var2.numberOfGamesLaunchedSinceDismissal;
            var1 = 1;
            var1 = var3 + var1;
            var2['numberOfGamesLaunchedSinceDismissal'] = var1;
 52:
            var1 = undefined;
            return var1;
        }
    };
    var2['RUNNING_GAMES_CHANGE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var16 = var7;
    var14 = var2;
    var2 = new var16[var9](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot31 = var2;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/clips/ClipsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();