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
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot35;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot35;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
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
                    _fun0003_ip = 34; continue _fun0003;
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
    var _closure1_slot34 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 39:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 39; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function _migrateDefaultStorage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var2 = _closure1_slot31;
                    var2 = var2.clipsSettings;
                    var4 = var2.storageLocation;
                    var2 = _closure1_slot17;
                    if(!(var4 === var2)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 12;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.remoteApp;
                    if(!(var4 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 15:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.remoteApp;
                    var4 = var5.getPath;
                    var2 = 'documents';
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=139);
case 45:
                    return var2;
case 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var4 = _closure1_slot31;
                    var4 = var4.clipsSettings;
                    var4['storageLocation'] = var2;
                    var4 = _closure1_slot32;
                    var3 = var4.emitChange;
                    var3 = var3.bind(var4)();
case 42:
                    var3 = undefined;
                    return var3;
case 47:
                    return var2;
case 40:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot36 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function parseAndTrackClipMetadata(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var10 = undefined;
            var6 = undefined;
            var1 = undefined;
            var2 = undefined;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 17;
            var7 = var7[var8];
            var9 = var9.bind(var10)(var7);
            var7 = var9.areAdvancedSignalsEnabled;
            var7 = var7.bind(var9)();
            if(var7) { _fun0006_ip = 8; continue _fun0006 }
case 49:
            var7 = false;
            return var7;
case 8:
            var9 = _closure1_slot11;
            var7 = var9.getId;
            var9 = var7.bind(var9)();
            var7 = arg3;
            if(!(var7 === var9)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var9 = var5;
            var7 = null;
            if(!(var7 != var9)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var11 = var5;
            var10 = var11.indexOf;
            var9 = '__CLIP_METADATA__';
            var10 = var10.bind(var11)(var9);
            var6 = var10;
            var9 = -1;
            if(!(var9 !== var10)) { _fun0006_ip = 54; continue _fun0006 }
case 55: // try_start_0
            var8 = var6 + var8;
            var6 = var5;
            var5 = var6.substring;
            var9 = var5.bind(var6)(var8);
            var5 = global;
            var8 = var5.JSON;
            var6 = var8.parse;
            var6 = var6.bind(var8)(var9);
            var1 = var6;
            var6 = var6.id;
            if(!(var7 != var6)) { _fun0006_ip = 56; continue _fun0006 }
case 42:
            var9 = _closure1_slot29;
            var8 = var9.get;
            var6 = var3;
            var6 = var8.bind(var9)(var6);
            var2 = var6;
            if(!(var7 == var6)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var14 = var6;
            var5 = new var14[var5](var13);
            var6 = var5 instanceof Object ? var5 : var6;
            var2 = var6;
            var5 = _closure1_slot29;
            var4 = var5.set;
            var3 = var4.bind(var5)(var3, var6);
case 57:
            var3 = var2;
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 59: // try_end0
            var1 = true;
            return var1;
case 56:
            var1 = false;
            return var1;
case 16: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
case 54:
            var1 = false;
            return var1;
case 52:
            var1 = false;
            return var1;
case 50:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var11 = 0;
    var2 = var6[var11];
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
    var2 = var5.bind(var1)(var2);
    var9 = var2.CLIPS_HARDWARE_CLASSIFICATION_VERSION;
    var _closure1_slot12 = var9;
    var9 = var2.ClipSaveTypes;
    var _closure1_slot13 = var9;
    var10 = var2.ClipsLengthSettings;
    var9 = var2.ClipsViewerConnectivitySettings;
    var12 = var2.ClipsUserEducationType;
    var _closure1_slot14 = var12;
    var12 = var2.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS;
    var _closure1_slot15 = var12;
    var2 = var2.DEFAULT_MAX_AUTO_CLIPS;
    var12 = 10;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.VoiceFlags;
    var _closure1_slot16 = var12;
    var12 = 11;
    var12 = var6[var12];
    var13 = var5.bind(var1)(var12);
    var12 = var13.ApplicationStreamFPS;
    var13 = var13.ApplicationStreamResolutions;
    var14 = 'default';
    var _closure1_slot17 = var14;
    var14 = new Array(0);
    var _closure1_slot18 = var14;
    var14 = new Array(0);
    var _closure1_slot19 = var14;
    var14 = new Array(0);
    var _closure1_slot20 = var14;
    var _closure1_slot21 = var11;
    var11 = null;
    var _closure1_slot22 = var11;
    var _closure1_slot23 = var11;
    var14 = {};
    var _closure1_slot24 = var14;
    var _closure1_slot25 = var11;
    var14 = new Array(0);
    var _closure1_slot26 = var14;
    var _closure1_slot27 = var11;
    var11 = {};
    var _closure1_slot28 = var11;
    var8 = var8.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var18 = var11;
    var8 = new var18[var8](var17);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot29 = var8;
    var8 = {'clipsEnabled': false, 'storageLocation': 'default', 'clipsQuality': null, 'clipsLength': null, 'remindersEnabled': true, 'decoupledClipsEnabled': false, 'viewerClipsEnabled': true};
    var11 = {};
    var13 = var13.RESOLUTION_1080;
    var11['resolution'] = var13;
    var12 = var12.FPS_30;
    var11['frameRate'] = var12;
    var8['clipsQuality'] = var11;
    var10 = var10.SECONDS_30;
    var8['clipsLength'] = var10;
    var9 = var9.ALL;
    var8['viewerConnectivity'] = var9;
    var8['maxAutoClips'] = var2;
    var2 = {'enableDistributedSignals': true, 'enablePhraseSignals': true, 'enableGameSignals': true};
    var8['clipSignals'] = var2;
    var2 = {'emotionClassifier': true, 'wakeWordDetector': false, 'yellDetector': true, 'whisperTranscription': true};
    var8['mlPipelinesEnabled'] = var2;
    var2 = ['clip that', 'clip it', 'clip clip'];
    var8['autoClipPhrases'] = var2;
    var _closure1_slot30 = var8;
    var2 = {'clipsSettings': null, 'hardwareClassification': null, 'hardwareClassificationForDecoupled': null, 'hardwareClassificationVersion': 0, 'newClipIds': null, 'hasClips': false, 'hasTakenDecoupledClip': false};
    var2['clipsSettings'] = var8;
    var8 = new Array(0);
    var2['newClipIds'] = var8;
    var8 = {'dismissedAt': null, 'numberOfGamesLaunchedSinceDismissal': 0, 'numberOfTimesDismissed': 0};
    var2['clipsEducationState'] = var8;
    var _closure1_slot31 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.DeviceSettingsStore;
    var2 = function(arg1) {
        var4 = function ClipsStoreClass() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot33;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 62; continue _fun0007;
case 60:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 62:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var2)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                _closure1_slot31 = var2;
case 63:
                var2 = function migrateDefaultStorage() {
                    var1 = undefined;
                    var4 = _closure1_slot36;
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
        var1 = new Array(25);
        var1[0] = var5;
        var5 = {};
        var7 = 'getClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPendingClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            var1 = var1.clipsSettings;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLastClipsSession';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getClipsWarningShown';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot22;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure1_slot28;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 65; continue _fun0009 }
case 33:
                var1 = _closure1_slot18;
case 65:
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
            var1 = _closure1_slot31;
            var1 = var1.hardwareClassification;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getHardwareClassificationForDecoupled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            var1 = var1.hardwareClassificationForDecoupled;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getHardwareClassificationVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            var1 = var1.hardwareClassificationVersion;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getIsAtMaxSaveClipOperations';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot21;
            var1 = _closure1_slot15;
            var1 = var2 >= var1;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getLastClipsError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'isClipsEnabledForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure1_slot24;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                var2 = var3.clipsEnabled;
case 66:
                var1 = var1 != var2;
                if(!var1) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                var1 = var2;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'isVoiceRecordingAllowedForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot24;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var2 = var3.allowVoiceRecording;
case 66:
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var1 = var2;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isViewerClippingAllowedForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot24;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                var2 = var3.allowAnyViewerClips;
case 66:
                var1 = var1 != var2;
                if(!var1) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                var1 = var2;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'hasClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            var1 = var1.hasClips;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'hasTakenDecoupledClip';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            var1 = var1.hasTakenDecoupledClip;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getNewClipIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            var1 = var1.newClipIds;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'isClipExporting';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot26;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getExportingClipIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getMatchingGroupClip';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var12 = arg1;
                var11 = arg2;
                var1 = null;
                if(!(var1 == var12)) { _fun0013_ip = 63; continue _fun0013 }
case 64:
                if(!(var1 != var11)) { _fun0013_ip = 70; continue _fun0013 }
case 63:
                var3 = _closure1_slot34;
                var2 = _closure1_slot19;
                var9 = undefined;
                var8 = var3.bind(var9)(var2);
                var3 = var8.bind(var9)();
                var2 = var3.done;
                var7 = 14;
                var6 = var3;
                var5 = undefined;
                var4 = undefined;
                if(var2) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                var2 = var6.value;
                if(!(var1 != var11)) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                var3 = var2.id;
                if(!(var3 !== var11)) { _fun0013_ip = 75; continue _fun0013 }
case 73:
                var13 = var4;
                if(!(var1 != var12)) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                var3 = var2.decision;
                var16 = var1 == var3;
                var15 = var3;
                var14 = undefined;
                if(var16) { _fun0013_ip = 45; continue _fun0013 }
case 78:
                var16 = var3.signal;
                var3 = var1 == var16;
                var15 = var16;
                var14 = undefined;
                if(var3) { _fun0013_ip = 45; continue _fun0013 }
case 79:
                var14 = var16.type;
                var15 = var16;
case 45:
                var16 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var16.bind(var9)(var3);
                var3 = var3.ClipSignalTypes;
                var3 = var3.DISTRIBUTED;
                var5 = var15;
                var13 = var4;
                if(!(var14 === var3)) { _fun0013_ip = 76; continue _fun0013 }
case 80:
                var16 = var2.decision;
                var17 = var1 == var16;
                var14 = var16;
                var3 = undefined;
                if(var17) { _fun0013_ip = 81; continue _fun0013 }
case 24:
                var17 = var16.signal;
                var16 = var1 == var17;
                var14 = var17;
                var3 = undefined;
                if(var16) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                var3 = var17.remoteTriggerClipId;
                var14 = var17;
case 81:
                var13 = var14;
                var5 = var15;
                if(!(var3 !== var12)) { _fun0013_ip = 83; continue _fun0013 }
case 76:
                var14 = var8.bind(var9)();
                var3 = var14.done;
                var4 = var13;
                var6 = var14;
                if(var3) { _fun0013_ip = 71; continue _fun0013 }
case 84:
                _fun0013_ip = 72; continue _fun0013;
case 83:
                return var2;
case 75:
                return var2;
case 71:
                return var1;
case 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'wasClipSharedInChannel';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure1_slot29;
                var2 = var3.get;
                var1 = arg2;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0014_ip = 85; continue _fun0014 }
case 66:
                var4 = var5.has;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 85:
                var1 = var1 != var2;
                if(!var1) { _fun0014_ip = 8; continue _fun0014 }
case 61:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[24] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'ClipsStore';
    var9['displayName'] = var2;
    var9['persistKey'] = var2;
    var2 = new Array(14);
    var8 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = null;
            if(!(var3 == var2)) { _fun0015_ip = 86; continue _fun0015 }
case 87:
            var2 = _closure1_slot30;
case 86:
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
        var4 = _closure1_slot30;
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.newClipIds;
            var2 = null;
            if(!(var2 == var3)) { _fun0016_ip = 66; continue _fun0016 }
case 88:
            var3 = new Array(0);
case 66:
            var2 = 'newClipIds';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[2] = var8;
    var8 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var8 = var1;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var4 = var2.hardwareClassification;
            var3 = null;
            var6 = var3 != var4;
            var5 = null;
            if(!var6) { _fun0017_ip = 89; continue _fun0017 }
case 90:
            var5 = var4;
case 89:
            var4 = 'hardwareClassification';
            var1[var4] = var5;
            var2 = var2.hardwareClassificationVersion;
            var4 = var3 != var2;
            var3 = 0;
            if(!var4) { _fun0017_ip = 72; continue _fun0017 }
case 91:
            var3 = var2;
case 72:
            var2 = 'hardwareClassificationVersion';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[3] = var8;
    var8 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var2 = var2.hasClips;
            var3 = null;
            var3 = var3 != var2;
            if(!var3) { _fun0018_ip = 37; continue _fun0018 }
case 7:
            var3 = var2;
case 37:
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
        var2 = _closure1_slot30;
        var4 = var2.decoupledClipsEnabled;
        var2 = 'decoupledClipsEnabled';
        var3[var2] = var4;
        var2 = 'clipsSettings';
        var1[var2] = var3;
        return var1;
    };
    var2[5] = var8;
    var8 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var2 = var2.hardwareClassificationForDecoupled;
            var3 = null;
            var4 = var3 != var2;
            if(!var4) { _fun0019_ip = 37; continue _fun0019 }
case 7:
            var3 = var2;
case 37:
            var2 = 'hardwareClassificationForDecoupled';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[6] = var8;
    var8 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
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
            if(var1) { _fun0020_ip = 92; continue _fun0020 }
case 93:
            var1 = var3.getHardwareEncoding;
            var4 = var1.bind(var3)();
case 92:
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
            if(var5) { _fun0020_ip = 94; continue _fun0020 }
case 95:
            var5 = var2.clipsSettings;
            var6 = var5.clipsEnabled;
case 94:
            var5 = 'clipsEnabled';
            var3[var5] = var6;
            var5 = !var4;
            var4 = !var5;
            if(var5) { _fun0020_ip = 96; continue _fun0020 }
case 97:
            var2 = var2.clipsSettings;
            var4 = var2.decoupledClipsEnabled;
case 96:
            var2 = 'decoupledClipsEnabled';
            var3[var2] = var4;
            var2 = 'clipsSettings';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[7] = var8;
    var8 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.newClipIds;
            var2 = null;
            if(!(var2 == var3)) { _fun0021_ip = 66; continue _fun0021 }
case 88:
            var3 = new Array(0);
case 66:
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
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
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
            if(!(var5 !== var4)) { _fun0022_ip = 13; continue _fun0022 }
case 98:
            var4 = var2.clipsSettings;
            var5 = var4.clipsQuality;
            var4 = null;
            if(!(var4 != var5)) { _fun0022_ip = 13; continue _fun0022 }
case 74:
            var2 = var2.clipsSettings;
            var4 = var2.clipsQuality;
            _fun0022_ip = 99; continue _fun0022;
case 13:
            var2 = _closure1_slot30;
            var4 = var2.clipsQuality;
case 99:
            var2 = 'clipsQuality';
            var3[var2] = var4;
            var2 = 'clipsSettings';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[9] = var8;
    var8 = function(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
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
            if(!(var2 == var4)) { _fun0023_ip = 100; continue _fun0023 }
case 9:
            var2 = _closure1_slot30;
            var4 = var2.remindersEnabled;
case 100:
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
    var8 = function(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var8 = var1;
            var7 = var4;
            var2 = copyDataProperties(var8, var7);
            var3 = {};
            var7 = var4.clipsSettings;
            var8 = var3;
            var2 = copyDataProperties(var8, var7);
            var2 = var4.clipsSettings;
            var6 = var2.maxAutoClips;
            var2 = null;
            if(!(var2 == var6)) { _fun0024_ip = 100; continue _fun0024 }
case 9:
            var5 = _closure1_slot30;
            var6 = var5.maxAutoClips;
case 100:
            var5 = 'maxAutoClips';
            var3[var5] = var6;
            var5 = var4.clipsSettings;
            var6 = var5.clipSignals;
            if(!(var2 == var6)) { _fun0024_ip = 101; continue _fun0024 }
case 102:
            var5 = _closure1_slot30;
            var6 = var5.clipSignals;
case 101:
            var5 = 'clipSignals';
            var3[var5] = var6;
            var5 = var4.clipsSettings;
            var6 = var5.mlPipelinesEnabled;
            if(!(var2 == var6)) { _fun0024_ip = 45; continue _fun0024 }
case 103:
            var5 = _closure1_slot30;
            var6 = var5.mlPipelinesEnabled;
case 45:
            var5 = 'mlPipelinesEnabled';
            var3[var5] = var6;
            var4 = var4.clipsSettings;
            var4 = var4.autoClipPhrases;
            if(!(var2 == var4)) { _fun0024_ip = 42; continue _fun0024 }
case 18:
            var2 = _closure1_slot30;
            var4 = var2.autoClipPhrases;
case 42:
            var2 = 'autoClipPhrases';
            var3[var2] = var4;
            var2 = 'clipsSettings';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[12] = var8;
    var8 = function(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
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
            var4 = var4.autoClipPhrases;
            var5 = var4.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0025_ip = 34; continue _fun0025 }
case 98:
            var2 = var2.clipsSettings;
            var4 = var2.autoClipPhrases;
            _fun0025_ip = 104; continue _fun0025;
case 34:
            var2 = _closure1_slot30;
            var4 = var2.autoClipPhrases;
case 104:
            var2 = 'autoClipPhrases';
            var3[var2] = var4;
            var2 = 'clipsSettings';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[13] = var8;
    var9['migrations'] = var2;
    var2 = 20;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleSettingsUpdate(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = {};
        var6 = _closure1_slot31;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var4 = {};
        var5 = _closure1_slot31;
        var6 = var5.clipsSettings;
        var7 = var4;
        var5 = copyDataProperties(var7, var6);
        var7 = var4;
        var6 = var3;
        var3 = copyDataProperties(var7, var6);
        var3 = 'clipsSettings';
        var2[var3] = var4;
        _closure1_slot31 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SETTINGS_UPDATE'] = var7;
    var7 = function handleSaveClip(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var4 = var1.clip;
            var _closure2_slot0 = var4;
            var1 = global;
            var7 = var1.Math;
            var6 = var7.max;
            var1 = _closure1_slot21;
            var5 = 1;
            var1 = var1 - var5;
            var10 = 0;
            var1 = var6.bind(var7)(var1, var10);
            _closure1_slot21 = var1;
            var6 = {};
            var1 = var4.applicationName;
            var6['applicationName'] = var1;
            var1 = false;
            var6['ended'] = var1;
            var13 = _closure1_slot23;
            var14 = var6;
            var1 = copyDataProperties(var14, var13);
            var9 = _closure1_slot23;
            var7 = null;
            var11 = var7 == var9;
            var1 = undefined;
            var8 = undefined;
            if(var11) { _fun0026_ip = 105; continue _fun0026 }
case 106:
            var8 = var9.newClipIds;
case 105:
            if(!(var7 == var8)) { _fun0026_ip = 107; continue _fun0026 }
case 108:
            var8 = new Array(0);
case 107:
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
            _closure1_slot23 = var6;
            var6 = {};
            var13 = _closure1_slot31;
            var14 = var6;
            var9 = copyDataProperties(var14, var13);
            var9 = _closure1_slot31;
            var9 = var9.newClipIds;
            if(!(var7 == var9)) { _fun0026_ip = 109; continue _fun0026 }
case 23:
            var9 = new Array(0);
case 109:
            var7 = new Array(1);
            var14 = var7;
            var13 = var9;
            var12 = 0;
            var9 = arraySpread(var14, var13, var12);
            var10 = var4.id;
            var7[var9] = var10;
            var9 = var9 + var5;
            var6[var8] = var7;
            _closure1_slot31 = var6;
            var7 = _closure1_slot20;
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
            _closure1_slot20 = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var13 = _closure1_slot19;
            var14 = var3;
            var12 = var5;
            var4 = arraySpread(var14, var13, var12);
            _closure1_slot19 = var3;
            var3 = _closure1_slot31;
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
        var6 = _closure1_slot20;
        var5 = 1;
        var7 = var2;
        var3 = arraySpread(var7, var6, var5);
        _closure1_slot20 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SAVE_CLIP_PLACEHOLDER'] = var7;
    var7 = function handleSaveClipPlaceholderError(arg1) {
        var2 = arg1;
        var2 = var2.clipId;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot20;
        var3 = var4.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR'] = var7;
    var7 = function handleSaveClipStart(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var8 = var1.clipType;
            var3 = var1.streamKey;
            var7 = var1.thumbnail;
            var1 = _closure1_slot21;
            var5 = 1;
            var1 = var1 + var5;
            _closure1_slot21 = var1;
            var4 = _closure1_slot31;
            var1 = var4.hasTakenDecoupledClip;
            if(var1) { _fun0027_ip = 44; continue _fun0027 }
case 8:
            var6 = _closure1_slot13;
            var6 = var6.DECOUPLED;
            var1 = var8 === var6;
case 44:
            var4['hasTakenDecoupledClip'] = var1;
            var1 = null;
            if(!(var1 != var3)) { _fun0027_ip = 110; continue _fun0027 }
case 104:
            if(!(var1 != var7)) { _fun0027_ip = 110; continue _fun0027 }
case 111:
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var8 = var4.bind(var6)();
            var6 = _closure1_slot27;
            var4 = var8;
            if(!(var1 != var6)) { _fun0027_ip = 107; continue _fun0027 }
case 108:
            var4 = _closure1_slot27;
case 107:
            _closure1_slot27 = var4;
            var2 = _closure1_slot28;
            var6 = var2[var3];
            if(!(var1 == var6)) { _fun0027_ip = 112; continue _fun0027 }
case 113:
            var6 = new Array(0);
case 112:
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
case 110:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_SAVE_CLIP_START'] = var7;
    var7 = function handleSaveClipError() {
        var1 = global;
        var5 = var1.Math;
        var4 = var5.max;
        var3 = _closure1_slot21;
        var1 = 1;
        var3 = var3 - var1;
        var1 = 0;
        var1 = var4.bind(var5)(var3, var1);
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SAVE_CLIP_ERROR'] = var7;
    var7 = function handleStreamClipAnimationEnd(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var3 = var2.streamKey;
            var6 = var2.timestamp;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot27;
            if(!(var2 === var6)) { _fun0028_ip = 69; continue _fun0028 }
case 90:
            var2 = null;
            _closure1_slot27 = var2;
case 69:
            var2 = _closure1_slot28;
            var5 = null;
            if(!(var5 != var6)) { _fun0028_ip = 114; continue _fun0028 }
case 9:
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
            _fun0028_ip = 115; continue _fun0028;
case 114:
            var1 = new Array(0);
case 115:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_SAVE_ANIMATION_END'] = var7;
    var7 = function handleStreamStart(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var4 = var1.sourceName;
            var7 = var1.pid;
            var1 = _closure1_slot31;
            var1 = var1.clipsSettings;
            var1 = var1.clipsEnabled;
            if(var1) { _fun0029_ip = 68; continue _fun0029 }
case 116:
            var1 = false;
            return var1;
case 68:
            var1 = null;
            var3 = var4;
            if(!(var1 != var7)) { _fun0029_ip = 117; continue _fun0029 }
case 49:
            var6 = _closure1_slot10;
            var5 = var6.getGameForPID;
            var6 = var5.bind(var6)(var7);
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0029_ip = 118; continue _fun0029 }
case 4:
            var5 = var6.name;
case 118:
            if(!(var1 != var5)) { _fun0029_ip = 102; continue _fun0029 }
case 73:
            var4 = var5;
case 102:
            var3 = var4;
case 117:
            if(!(var1 != var3)) { _fun0029_ip = 113; continue _fun0029 }
case 77:
            var1 = '';
            if(!(var1 !== var3)) { _fun0029_ip = 113; continue _fun0029 }
case 119:
            var1 = {};
            var1['applicationName'] = var3;
            var3 = new Array(0);
            var1['newClipIds'] = var3;
            var3 = false;
            var1['ended'] = var3;
            _closure1_slot23 = var1;
            var1 = undefined;
            return var1;
case 113:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_START'] = var7;
    var7 = function handleStreamStop(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var6 = var1.streamKey;
            var3 = null;
            _closure1_slot27 = var3;
            var2 = _closure1_slot28;
            var1 = new Array(0);
            var2[var6] = var1;
            var1 = _closure1_slot23;
            var1 = var3 != var1;
            if(!var1) { _fun0030_ip = 120; continue _fun0030 }
case 68:
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
            if(!var2) { _fun0030_ip = 19; continue _fun0030 }
case 119:
            var5 = _closure1_slot23;
            var5 = var5.newClipIds;
            var6 = var5.length;
            var5 = 0;
            var3 = null;
            if(!(var5 !== var6)) { _fun0030_ip = 121; continue _fun0030 }
case 103:
            var5 = {};
            var8 = _closure1_slot23;
            var9 = var5;
            var6 = copyDataProperties(var9, var8);
            var7 = true;
            var6 = 'ended';
            var5[var6] = var7;
            var3 = var5;
case 121:
            _closure1_slot23 = var3;
            var2 = undefined;
case 19:
            var1 = var2;
case 120:
            return var1;
        }
    };
    var2['STREAM_STOP'] = var7;
    var7 = function handleClearClipsSession() {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var3 = _closure1_slot23;
            var1 = null;
            if(!(var1 != var3)) { _fun0031_ip = 122; continue _fun0031 }
case 123:
            _closure1_slot23 = var1;
            var1 = undefined;
            return var1;
case 122:
            var1 = false;
            return var1;
        }
    };
    var2['CLIPS_CLEAR_CLIPS_SESSION'] = var7;
    var7 = function clearNewClipIds() {
        var2 = _closure1_slot31;
        var1 = new Array(0);
        var2['newClipIds'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_CLEAR_NEW_CLIP_IDS'] = var7;
    var7 = function handleClipsDirectoryLoaded(arg1) {
        var1 = arg1;
        var4 = _closure1_slot31;
        var3 = var1.clips;
        var5 = var3.length;
        var3 = 0;
        var3 = var5 > var3;
        var4['hasClips'] = var3;
        var1 = var1.clips;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_LOAD_DIRECTORY_SUCCESS'] = var7;
    var7 = function handleClipsDelete(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot19;
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
            _closure1_slot19 = var2;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 === var3)) { _fun0032_ip = 124; continue _fun0032 }
case 125:
            var2 = _closure1_slot31;
            var1 = false;
            var2['hasClips'] = var1;
case 124:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_DELETE_CLIP'] = var7;
    var7 = function handleClipMetadataUpdate(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var6 = var1.clip;
            var4 = _closure1_slot34;
            var2 = _closure1_slot19;
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
            if(var2) { _fun0033_ip = 126; continue _fun0033 }
case 11:
            var4 = var7.value;
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var4, var9);
            var4 = var2[var5];
            var2 = var2[var8];
            var11 = var2.id;
            var2 = var6.id;
            if(!(var11 !== var2)) { _fun0033_ip = 127; continue _fun0033 }
case 128:
            var11 = var10.bind(var1)();
            var2 = var11.done;
            var7 = var11;
            if(var2) { _fun0033_ip = 126; continue _fun0033 }
case 108:
            _fun0033_ip = 11; continue _fun0033;
case 127:
            var2 = _closure1_slot19;
            var2[var4] = var6;
            var13 = _closure1_slot19;
            var2 = new Array(0);
            var14 = var2;
            var12 = 0;
            var4 = arraySpread(var14, var13, var12);
            _closure1_slot19 = var2;
            var2 = undefined;
            return var2;
case 126:
            return var1;
        }
    };
    var2['CLIPS_UPDATE_METADATA'] = var7;
    var7 = function handleRTCConnectionFlagsUpdate(arg1) {
        var6 = arg1;
        var4 = _closure1_slot24;
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
        var5 = _closure1_slot16;
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
        _closure1_slot22 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_SHOW_CALL_WARNING'] = var7;
    var7 = function handleVoiceChannelSelect(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = _closure1_slot22;
            if(!(var3 !== var1)) { _fun0034_ip = 67; continue _fun0034 }
case 63:
            var1 = null;
            _closure1_slot22 = var1;
case 67:
            var1 = undefined;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var7;
    var7 = function handleClassifyHardware(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var4 = var1.classification;
            var1 = _closure1_slot31;
            var6 = var1.hardwareClassification;
            var3 = _closure1_slot31;
            var1 = _closure1_slot12;
            var3['hardwareClassificationVersion'] = var1;
            var1 = _closure1_slot31;
            var1['hardwareClassification'] = var4;
            var1 = _closure1_slot31;
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
            if(!var3) { _fun0035_ip = 96; continue _fun0035 }
case 128:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var1)(var5);
            var5 = var5.ClipsHardwareClassification;
            var5 = var5.MEETS_AUTO_ENABLE;
            var3 = var6 !== var5;
case 96:
            if(!var3) { _fun0035_ip = 121; continue _fun0035 }
case 129:
            var3 = _closure1_slot31;
            var5 = var3.clipsSettings;
            var3 = true;
            var5['clipsEnabled'] = var3;
case 121:
            var3 = _closure1_slot31;
            var5 = var3.hardwareClassificationForDecoupled;
            var3 = _closure1_slot31;
            var3['hardwareClassificationForDecoupled'] = var4;
            var3 = _closure1_slot31;
            var4 = var3.hardwareClassificationForDecoupled;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var1)(var3);
            var3 = var3.ClipsHardwareClassification;
            var3 = var3.MEETS_AUTO_ENABLE;
            var3 = var4 === var3;
            if(!var3) { _fun0035_ip = 130; continue _fun0035 }
case 131:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.ClipsHardwareClassification;
            var4 = var4.MEETS_AUTO_ENABLE;
            var3 = var5 !== var4;
case 130:
            if(!var3) { _fun0035_ip = 16; continue _fun0035 }
case 132:
            var4 = _closure1_slot31;
            var4 = var4.clipsSettings;
            var3 = var4.clipsEnabled;
case 16:
            if(!var3) { _fun0035_ip = 133; continue _fun0035 }
case 134:
            var2 = _closure1_slot31;
            var3 = var2.clipsSettings;
            var2 = true;
            var3['decoupledClipsEnabled'] = var2;
case 133:
            return var1;
        }
    };
    var2['CLIPS_CLASSIFY_HARDWARE'] = var7;
    var7 = function handleClipsInit(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationName;
            var1 = null;
            _closure1_slot25 = var1;
            var1 = _closure1_slot31;
            var1 = var1.clipsSettings;
            var1 = var1.clipsEnabled;
            var3 = false;
            if(var1) { _fun0036_ip = 68; continue _fun0036 }
case 135:
            return var3;
case 68:
            var1 = {};
            var1['applicationName'] = var4;
            var4 = new Array(0);
            var1['newClipIds'] = var4;
            var1['ended'] = var3;
            _closure1_slot23 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_INIT'] = var7;
    var7 = function handleClipsInitFailure(arg1) {
        var1 = arg1;
        var2 = var1.errMsg;
        _closure1_slot25 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CLIPS_INIT_FAILURE'] = var7;
    var7 = function handleDismissClipsEducation(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var3 = var1.educationType;
            var1 = _closure1_slot14;
            var1 = var1.Error;
            if(!(var1 !== var3)) { _fun0037_ip = 45; continue _fun0037 }
case 88:
            var1 = _closure1_slot14;
            var1 = var1.Disabled;
            if(!(var1 !== var3)) { _fun0037_ip = 39; continue _fun0037 }
case 68:
            var1 = _closure1_slot14;
            var1 = var1.Enabled;
            if(!(var1 === var3)) { _fun0037_ip = 136; continue _fun0037 }
case 39:
            var1 = _closure1_slot31;
            var3 = var1.clipsEducationState;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var3['dismissedAt'] = var1;
            var1 = _closure1_slot31;
            var3 = var1.clipsEducationState;
            var1 = 0;
            var3['numberOfGamesLaunchedSinceDismissal'] = var1;
            var1 = _closure1_slot31;
            var3 = var1.clipsEducationState;
            var4 = var3.numberOfTimesDismissed;
            var1 = 1;
            var1 = var4 + var1;
            var3['numberOfTimesDismissed'] = var1;
            _fun0037_ip = 136; continue _fun0037;
case 45:
            var1 = null;
            _closure1_slot25 = var1;
case 136:
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_DISMISS_EDUCATION'] = var7;
    var7 = function handleRunningGamesChange(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var1 = var1.added;
            var2 = var1.length;
            var1 = 0;
            if(!(var2 > var1)) { _fun0038_ip = 92; continue _fun0038 }
case 33:
            var1 = _closure1_slot31;
            var2 = var1.clipsEducationState;
            var3 = var2.numberOfGamesLaunchedSinceDismissal;
            var1 = 1;
            var1 = var3 + var1;
            var2['numberOfGamesLaunchedSinceDismissal'] = var1;
case 92:
            var1 = undefined;
            return var1;
        }
    };
    var2['RUNNING_GAMES_CHANGE'] = var7;
    var7 = function handleSetExporting(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var2 = var1.clipIds;
            var1 = null;
            if(!(var1 == var2)) { _fun0039_ip = 122; continue _fun0039 }
case 137:
            var2 = new Array(0);
case 122:
            _closure1_slot26 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['CLIPS_SET_EXPORTING'] = var7;
    var7 = function handleMessageCreate(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot37;
            var4 = var1.channelId;
            var2 = var1.message;
            var3 = var2.content;
            var1 = var1.message;
            var6 = var1.author;
            var1 = null;
            var7 = var1 == var6;
            var2 = undefined;
            var1 = undefined;
            if(var7) { _fun0040_ip = 8; continue _fun0040 }
case 138:
            var1 = var6.id;
case 8:
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var7;
    var7 = function handleLoadMessagesSuccess(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var10 = arg1;
            var2 = _closure1_slot34;
            var1 = var10.messages;
            var8 = undefined;
            var7 = var2.bind(var8)(var1);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var4 = false;
            var6 = null;
            var5 = var3;
            var3 = undefined;
            var1 = false;
            if(var2) { _fun0041_ip = 107; continue _fun0041 }
case 125:
            var2 = var5.value;
            if(var4) { _fun0041_ip = 99; continue _fun0041 }
case 8:
            var14 = _closure1_slot37;
            var13 = var10.channelId;
            var12 = var2.content;
            var2 = var2.author;
            var15 = var6 == var2;
            var11 = undefined;
            if(var15) { _fun0041_ip = 95; continue _fun0041 }
case 73:
            var11 = var2.id;
case 95:
            var4 = var14.bind(var8)(var13, var12, var11);
            var3 = var2;
case 99:
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var5 = var12;
            var1 = var4;
            if(!var2) { _fun0041_ip = 125; continue _fun0041 }
case 107:
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var18 = var7;
    var16 = var2;
    var2 = new var18[var9](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot32 = var2;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/clips/ClipsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();