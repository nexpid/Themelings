// app/modules/clips/ClipsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            _closure1_slot37 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot37 = var1;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot39;
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
            var7 = _closure1_slot39;
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
    var _closure1_slot38 = var1;
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
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function _migrateDefaultStorage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var3 = undefined;
                    var5 = undefined;
                    var2 = _closure1_slot35;
                    var2 = var2.clipsSettings;
                    var6 = var2.storageLocation;
                    var2 = _closure1_slot19;
                    if(!(var6 === var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 12;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var6 = null;
                    if(!(var6 != var2)) { _fun0005_ip = 41; continue _fun0005 }
case 43:
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.app;
                    if(!(var6 != var2)) { _fun0005_ip = 41; continue _fun0005 }
case 44: // try_start_0
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var8 = var2.app;
                    var6 = var8.getPath;
                    var2 = 'videos';
                    var2 = var6.bind(var8)(var2);
                    SaveGenerator(address=145);
case 45:
                    return var2;
case 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 13;
                    var6 = var9[var6];
                    var9 = var8.bind(var3)(var6);
                    var8 = var9.pathJoin;
                    var6 = _closure1_slot20;
                    var5 = var8.bind(var9)(var2, var6);
case 23: // try_end0
                    _fun0005_ip = 49; continue _fun0005;
case 47:
                    return var2;
case 50: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot15;
                    var6 = var8.error;
                    var2 = 'Failed to resolve videos path for default storage migration';
                    var2 = var6.bind(var8)(var2, var9);
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var7 = var2.app;
                    var6 = var7.getPath;
                    var2 = 'documents';
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=259);
case 51:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 53; continue _fun0005 }
case 28:
                    var5 = var2;
case 49:
                    var6 = _closure1_slot35;
                    var6 = var6.clipsSettings;
                    var6['storageLocation'] = var5;
                    var5 = _closure1_slot36;
                    var4 = var5.emitChange;
                    var4 = var4.bind(var5)();
case 41:
                    return var3;
case 53:
                    return var2;
case 39:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot40 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function trackSharedRemoteClipId(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var12 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var10 = undefined;
            var3 = var2.bind(var10)(var1);
            var2 = var3.getConfig;
            var1 = {};
            var4 = 'trackSharedRemoteClipId';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enableDistributedClips;
            if(var1) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var1 = false;
            return var1;
case 54:
            var2 = _closure1_slot10;
            var1 = var2.getId;
            var2 = var1.bind(var2)();
            var1 = arg3;
            if(!(var1 === var2)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var2 = _closure1_slot38;
            var1 = arg2;
            var9 = var2.bind(var10)(var1);
            var3 = var9.bind(var10)();
            var2 = var3.done;
            var4 = false;
            var7 = global;
            var6 = null;
            var5 = var3;
            var3 = undefined;
            var1 = false;
            if(var2) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var13 = var5.value;
            var2 = var13.clip_remote_id;
            if(!(var6 != var2)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var14 = _closure1_slot33;
            var2 = var14.get;
            var2 = var2.bind(var14)(var12);
            if(!(var6 == var2)) { _fun0006_ip = 62; continue _fun0006 }
case 19:
            var14 = var7.Set;
            var15 = var14.prototype;
            var15 = Object.create(var15, {constructor: {value: var14}});
            var19 = var15;
            var14 = new var19[var14](var18);
            var14 = var14 instanceof Object ? var14 : var15;
            var16 = _closure1_slot33;
            var15 = var16.set;
            var15 = var15.bind(var16)(var12, var14);
            var2 = var14;
case 62:
            var14 = var2.add;
            var13 = var13.clip_remote_id;
            var13 = var14.bind(var2)(var13);
            var3 = var2;
            var4 = true;
case 60:
            var14 = var9.bind(var10)();
            var2 = var14.done;
            var5 = var14;
            var1 = var4;
            if(!var2) { _fun0006_ip = 59; continue _fun0006 }
case 58:
            return var1;
case 56:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var5 = global;
    var10 = var5.Object;
    var4 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var10)(var3, var1, var2);
    var10 = 0;
    var2 = var8[var10];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.CLIPS_HARDWARE_CLASSIFICATION_VERSION;
    var _closure1_slot12 = var4;
    var4 = var2.ClipSaveTypes;
    var _closure1_slot13 = var4;
    var13 = var2.ClipsLengthSettings;
    var12 = var2.ClipsViewerConnectivitySettings;
    var4 = var2.ClipsUserEducationType;
    var _closure1_slot14 = var4;
    var4 = var2.ClipsLogger;
    var _closure1_slot15 = var4;
    var4 = var2.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS;
    var _closure1_slot16 = var4;
    var11 = var2.DEFAULT_MAX_AUTO_CLIPS;
    var2 = 10;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.UserFlags;
    var _closure1_slot17 = var4;
    var2 = var2.VoiceFlags;
    var _closure1_slot18 = var2;
    var2 = 11;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var15 = var2.ApplicationStreamFPS;
    var16 = var2.ApplicationStreamResolutions;
    var4 = 'default';
    var _closure1_slot19 = var4;
    var2 = 'Discord Clips';
    var _closure1_slot20 = var2;
    var14 = {};
    var _closure1_slot21 = var14;
    var14 = {};
    var _closure1_slot22 = var14;
    var14 = {};
    var _closure1_slot23 = var14;
    var14 = new Array(0);
    var _closure1_slot24 = var14;
    var _closure1_slot25 = var10;
    var10 = null;
    var _closure1_slot26 = var10;
    var _closure1_slot27 = var10;
    var _closure1_slot28 = var10;
    var14 = {};
    var _closure1_slot29 = var14;
    var14 = {};
    var _closure1_slot30 = var14;
    var _closure1_slot31 = var10;
    var10 = var5.Set;
    var14 = var10.prototype;
    var14 = Object.create(var14, {constructor: {value: var10}});
    var20 = var14;
    var10 = new var20[var10](var19);
    var10 = var10 instanceof Object ? var10 : var14;
    var _closure1_slot32 = var10;
    var5 = var5.Map;
    var10 = var5.prototype;
    var10 = Object.create(var10, {constructor: {value: var5}});
    var20 = var10;
    var5 = new var20[var5](var19);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot33 = var5;
    var10 = {'clipsEnabled': false, 'storageLocation': 'default', 'clipsQuality': null, 'clipsLength': null, 'remindersEnabled': true, 'decoupledClipsEnabled': false, 'viewerClipsEnabled': true};
    var5 = false;
    var14 = {};
    var16 = var16.RESOLUTION_1080;
    var14['resolution'] = var16;
    var15 = var15.FPS_30;
    var14['frameRate'] = var15;
    var10['clipsQuality'] = var14;
    var13 = var13.SECONDS_30;
    var10['clipsLength'] = var13;
    var12 = var12.ALL;
    var10['viewerConnectivity'] = var12;
    var10['maxAutoClips'] = var11;
    var11 = {'enableDistributedSignals': true, 'enableGameSignals': true};
    var10['clipSignals'] = var11;
    var10['debugTooltipsEnabled'] = var5;
    var10['enableAutoclipping'] = var1;
    var10['showPovClipsInGallery'] = var5;
    var _closure1_slot34 = var10;
    var5 = {'clipsSettings': null, 'hardwareClassification': null, 'hardwareClassificationForDecoupled': null, 'hardwareClassificationVersion': 0, 'newClipIds': null, 'hasClips': false, 'hasTakenDecoupledClip': false};
    var5['clipsSettings'] = var10;
    var10 = new Array(0);
    var5['newClipIds'] = var10;
    var10 = {'dismissedAt': null, 'numberOfGamesLaunchedSinceDismissal': 0, 'numberOfTimesDismissed': 0};
    var5['clipsEducationState'] = var10;
    var _closure1_slot35 = var5;
    var5 = 19;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.DeviceSettingsStore;
    var5 = function(arg1) {
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
                var1 = _closure1_slot37;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 65; continue _fun0007;
case 63:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 65:
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
                if(!(var1 != var2)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                _closure1_slot35 = var2;
case 66:
                var2 = function migrateDefaultStorage() {
                    var1 = undefined;
                    var4 = _closure1_slot40;
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
                var2 = _closure1_slot9;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(29);
        var1[0] = var5;
        var5 = {};
        var7 = 'getClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getClipById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot21;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getClipByRemoteId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure1_slot23;
                var2 = arg1;
                var2 = var3[var2];
                var3 = null;
                if(!(var3 == var2)) { _fun0009_ip = 68; continue _fun0009 }
case 33:
                var3 = undefined;
                return var3;
case 68:
                var1 = _closure1_slot21;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getClipCandidates';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getClipCandidateById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot22;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.clipsSettings;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getEnableAutoclipping';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = _closure1_slot35;
                var1 = var1.clipsSettings;
                var1 = var1.enableAutoclipping;
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                var5 = _closure1_slot11;
                var4 = var5.getCurrentUser;
                var4 = var4.bind(var5)();
                var2 = var2 != var4;
                if(!var2) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 17;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.hasFlag;
                var4 = var4.flags;
                var3 = _closure1_slot17;
                var3 = var3.STAFF;
                var2 = var5.bind(var6)(var4, var3);
case 71:
                var1 = var2;
case 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getLastClipsSession';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getCurrentClipsSession';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getHistoricalClipsSessionById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot29;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'devSetLastClipsSession';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            _closure1_slot27 = var1;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getClipsWarningShown';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot26;
            var1 = arg1;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getHardwareClassification';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.hardwareClassification;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getHardwareClassificationForDecoupled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.hardwareClassificationForDecoupled;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getHardwareClassificationVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.hardwareClassificationVersion;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getIsAtMaxSaveClipOperations';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot25;
            var1 = _closure1_slot16;
            var1 = var2 >= var1;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getLastClipsError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isClipsEnabledForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot30;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0011_ip = 73; continue _fun0011 }
case 70:
                var2 = var3.clipsEnabled;
case 73:
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                var1 = var2;
case 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isVoiceRecordingAllowedForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot30;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 73; continue _fun0012 }
case 70:
                var2 = var3.allowVoiceRecording;
case 73:
                var1 = var1 != var2;
                if(!var1) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                var1 = var2;
case 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'isViewerClippingAllowedForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = _closure1_slot30;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 73; continue _fun0013 }
case 70:
                var2 = var3.allowAnyViewerClips;
case 73:
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                var1 = var2;
case 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'hasClips';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.hasClips;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'hasTakenDecoupledClip';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.hasTakenDecoupledClip;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'canShowReminders';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.clipsSettings;
            var1 = var1.remindersEnabled;
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getNewClipIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            var1 = var1.newClipIds;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'isClipExporting';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot32;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getExportingClipIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'wasClipSharedInChannel';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure1_slot33;
                var2 = var3.get;
                var1 = arg2;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0014_ip = 42; continue _fun0014 }
case 73:
                var4 = var5.has;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 42:
                var1 = var1 != var2;
                if(!var1) { _fun0014_ip = 76; continue _fun0014 }
case 64:
                var1 = var2;
case 76:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[28] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var11 = var5.bind(var1)(var10);
    var5 = 'ClipsStore';
    var11['displayName'] = var5;
    var11['persistKey'] = var5;
    var5 = new Array(16);
    var10 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = null;
            if(!(var3 == var2)) { _fun0015_ip = 77; continue _fun0015 }
case 78:
            var2 = _closure1_slot34;
case 77:
            var1['clipsSettings'] = var2;
            var2 = 0;
            var1['newClipsCount'] = var2;
            return var1;
        }
    };
    var5[0] = var10;
    var10 = function(arg1) {
        var2 = arg1;
        var3 = {};
        var4 = _closure1_slot34;
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
        var1[1] = var3;
        return var1;
    };
    var5[1] = var10;
    var10 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.newClipIds;
            var2 = null;
            if(!(var2 == var3)) { _fun0016_ip = 73; continue _fun0016 }
case 79:
            var3 = new Array(0);
case 73:
            var2 = 'newClipIds';
            var1[1] = var3;
            return var1;
        }
    };
    var5[2] = var10;
    var10 = function(arg1) {
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
            if(!var6) { _fun0017_ip = 80; continue _fun0017 }
case 81:
            var5 = var4;
case 80:
            var4 = 'hardwareClassification';
            var1[3] = var5;
            var2 = var2.hardwareClassificationVersion;
            var4 = var3 != var2;
            var3 = 0;
            if(!var4) { _fun0017_ip = 82; continue _fun0017 }
case 83:
            var3 = var2;
case 82:
            var2 = 'hardwareClassificationVersion';
            var1[1] = var3;
            return var1;
        }
    };
    var5[3] = var10;
    var10 = function(arg1) {
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
            var1[1] = var3;
            return var1;
        }
    };
    var5[4] = var10;
    var10 = function(arg1) {
        var2 = arg1;
        var1 = {};
        var6 = var1;
        var5 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = {};
        var5 = var2.clipsSettings;
        var6 = var3;
        var2 = copyDataProperties(var6, var5);
        var2 = _closure1_slot34;
        var4 = var2.decoupledClipsEnabled;
        var2 = 'decoupledClipsEnabled';
        var3[1] = var4;
        var2 = 'clipsSettings';
        var1[1] = var3;
        return var1;
    };
    var5[5] = var10;
    var10 = function(arg1) {
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
            var1[1] = var3;
            return var1;
        }
    };
    var5[6] = var10;
    var10 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.default;
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0020_ip = 84; continue _fun0020 }
case 85:
            var1 = var3.getHardwareEncoding;
            var4 = var1.bind(var3)();
case 84:
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
            if(var5) { _fun0020_ip = 86; continue _fun0020 }
case 57:
            var5 = var2.clipsSettings;
            var6 = var5.clipsEnabled;
case 86:
            var5 = 'clipsEnabled';
            var3[4] = var6;
            var5 = !var4;
            var4 = !var5;
            if(var5) { _fun0020_ip = 87; continue _fun0020 }
case 88:
            var2 = var2.clipsSettings;
            var4 = var2.decoupledClipsEnabled;
case 87:
            var2 = 'decoupledClipsEnabled';
            var3[1] = var4;
            var2 = 'clipsSettings';
            var1[1] = var3;
            return var1;
        }
    };
    var5[7] = var10;
    var10 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.newClipIds;
            var2 = null;
            if(!(var2 == var3)) { _fun0021_ip = 73; continue _fun0021 }
case 79:
            var3 = new Array(0);
case 73:
            var2 = 'newClipIds';
            var1[1] = var3;
            var3 = undefined;
            var2 = 'newClipIDs';
            var1[1] = var3;
            return var1;
        }
    };
    var5[8] = var10;
    var10 = function(arg1) {
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
            if(!(var5 !== var4)) { _fun0022_ip = 89; continue _fun0022 }
case 90:
            var4 = var2.clipsSettings;
            var5 = var4.clipsQuality;
            var4 = null;
            if(!(var4 != var5)) { _fun0022_ip = 89; continue _fun0022 }
case 91:
            var2 = var2.clipsSettings;
            var4 = var2.clipsQuality;
            _fun0022_ip = 92; continue _fun0022;
case 89:
            var2 = _closure1_slot34;
            var4 = var2.clipsQuality;
case 92:
            var2 = 'clipsQuality';
            var3[1] = var4;
            var2 = 'clipsSettings';
            var1[1] = var3;
            return var1;
        }
    };
    var5[9] = var10;
    var10 = function(arg1) {
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
            if(!(var2 == var4)) { _fun0023_ip = 11; continue _fun0023 }
case 93:
            var2 = _closure1_slot34;
            var4 = var2.remindersEnabled;
case 11:
            var2 = 'remindersEnabled';
            var3[1] = var4;
            var2 = 'clipsSettings';
            var1[1] = var3;
            return var1;
        }
    };
    var5[10] = var10;
    var10 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = false;
        var2 = 'hasTakenDecoupledClip';
        var1[1] = var3;
        var3 = {'dismissedAt': null, 'numberOfGamesLaunchedSinceDismissal': 0, 'numberOfTimesDismissed': 0};
        var2 = 'clipsEducationState';
        var1[1] = var3;
        return var1;
    };
    var5[11] = var10;
    var10 = function(arg1) {
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
            if(!(var2 == var6)) { _fun0024_ip = 11; continue _fun0024 }
case 93:
            var5 = _closure1_slot34;
            var6 = var5.maxAutoClips;
case 11:
            var5 = 'maxAutoClips';
            var3[4] = var6;
            var4 = var4.clipsSettings;
            var4 = var4.clipSignals;
            if(!(var2 == var4)) { _fun0024_ip = 94; continue _fun0024 }
case 13:
            var2 = _closure1_slot34;
            var4 = var2.clipSignals;
case 94:
            var2 = 'clipSignals';
            var3[1] = var4;
            var2 = 'clipsSettings';
            var1[1] = var3;
            return var1;
        }
    };
    var5[12] = var10;
    var10 = function(arg1) {
        var2 = arg1;
        var1 = {};
        var5 = var1;
        var4 = var2;
        var3 = copyDataProperties(var5, var4);
        var3 = {};
        var4 = var2.clipsSettings;
        var5 = var3;
        var2 = copyDataProperties(var5, var4);
        var2 = 'clipsSettings';
        var1[1] = var3;
        return var1;
    };
    var5[13] = var10;
    var10 = function(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
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
            var4 = var2.enableAutoclipping;
            var2 = null;
            if(!(var2 == var4)) { _fun0025_ip = 11; continue _fun0025 }
case 93:
            var2 = _closure1_slot34;
            var4 = var2.enableAutoclipping;
case 11:
            var2 = 'enableAutoclipping';
            var3[1] = var4;
            var2 = 'clipsSettings';
            var1[1] = var3;
            return var1;
        }
    };
    var5[14] = var10;
    var10 = function(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
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
            var4 = var2.showPovClipsInGallery;
            var2 = null;
            if(!(var2 == var4)) { _fun0026_ip = 11; continue _fun0026 }
case 93:
            var2 = _closure1_slot34;
            var4 = var2.showPovClipsInGallery;
case 11:
            var2 = 'showPovClipsInGallery';
            var3[1] = var4;
            var2 = 'clipsSettings';
            var1[1] = var3;
            return var1;
        }
    };
    var5[15] = var10;
    var11['migrations'] = var5;
    var5 = 21;
    var5 = var8[var5];
    var19 = var9.bind(var1)(var5);
    var5 = {};
    var9 = function handleSettingsUpdate(arg1) {
        var1 = arg1;
        var3 = var1.settings;
        var2 = {};
        var6 = _closure1_slot35;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var4 = {};
        var5 = _closure1_slot35;
        var6 = var5.clipsSettings;
        var7 = var4;
        var5 = copyDataProperties(var7, var6);
        var7 = var4;
        var6 = var3;
        var3 = copyDataProperties(var7, var6);
        var3 = 'clipsSettings';
        var2[2] = var4;
        _closure1_slot35 = var2;
        var1 = undefined;
        return var1;
    };
    var5['CLIPS_SETTINGS_UPDATE'] = var9;
    var9 = function handleSaveClip(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var2 = var1.clip;
            var1 = global;
            var5 = var1.Math;
            var4 = var5.max;
            var3 = _closure1_slot25;
            var8 = 1;
            var3 = var3 - var8;
            var9 = 0;
            var3 = var4.bind(var5)(var3, var9);
            _closure1_slot25 = var3;
            var3 = var2.isCandidate;
            if(!var3) { _fun0027_ip = 15; continue _fun0027 }
case 95:
            var3 = new Array(1);
            var3[0] = var2;
            var12 = _closure1_slot24;
            var13 = var3;
            var11 = var8;
            var4 = arraySpread(var13, var12, var11);
            _closure1_slot24 = var3;
            var4 = _closure1_slot22;
            var3 = var2.id;
            var4[var3] = var2;
case 15:
            var3 = _closure1_slot28;
            var4 = null;
            if(!(var4 != var3)) { _fun0027_ip = 96; continue _fun0027 }
case 97:
            var3 = {};
            var12 = _closure1_slot28;
            var13 = var3;
            var5 = copyDataProperties(var13, var12);
            var5 = _closure1_slot28;
            var6 = var5.manualClipsSaved;
            var10 = var2.clipMethod;
            var7 = 'manual';
            var5 = 0;
            if(!(var7 === var10)) { _fun0027_ip = 98; continue _fun0027 }
case 99:
            var5 = var8;
case 98:
            var6 = var6 + var5;
            var5 = 'manualClipsSaved';
            var3[4] = var6;
            var5 = _closure1_slot28;
            var6 = var5.candidateClipsSaved;
            var7 = var2.isCandidate;
            var10 = var4 != var7;
            var5 = 0;
            if(!var10) { _fun0027_ip = 100; continue _fun0027 }
case 101:
            var5 = 0;
            if(!var7) { _fun0027_ip = 100; continue _fun0027 }
case 102:
            var5 = var8;
case 100:
            var6 = var6 + var5;
            var5 = 'candidateClipsSaved';
            var3[4] = var6;
            _closure1_slot28 = var3;
case 96:
            var3 = var2.isCandidate;
            if(var3) { _fun0027_ip = 103; continue _fun0027 }
case 104:
            var3 = {};
            var5 = var2.applicationName;
            var3['applicationName'] = var5;
            var5 = false;
            var3['ended'] = var5;
            var12 = _closure1_slot27;
            var13 = var3;
            var5 = copyDataProperties(var13, var12);
            var5 = _closure1_slot27;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0027_ip = 105; continue _fun0027 }
case 106:
            var6 = var5.newClipIds;
case 105:
            if(!(var4 == var6)) { _fun0027_ip = 14; continue _fun0027 }
case 107:
            var6 = new Array(0);
case 14:
            var5 = new Array(1);
            var13 = var5;
            var12 = var6;
            var11 = 0;
            var6 = arraySpread(var13, var12, var11);
            var7 = var2.id;
            var5[5] = var7;
            var6 = var6 + var8;
            var6 = 'newClipIds';
            var3[5] = var5;
            _closure1_slot27 = var3;
            var3 = {};
            var12 = _closure1_slot35;
            var13 = var3;
            var5 = copyDataProperties(var13, var12);
            var5 = _closure1_slot35;
            var7 = var5.newClipIds;
            if(!(var4 == var7)) { _fun0027_ip = 108; continue _fun0027 }
case 109:
            var7 = new Array(0);
case 108:
            var5 = new Array(1);
            var13 = var5;
            var12 = var7;
            var11 = 0;
            var7 = arraySpread(var13, var12, var11);
            var9 = var2.id;
            var5[6] = var9;
            var7 = var7 + var8;
            var3[5] = var5;
            _closure1_slot35 = var3;
            var5 = _closure1_slot21;
            var3 = var2.id;
            var5[var3] = var2;
            var3 = var2.remoteClipId;
            if(!(var4 != var3)) { _fun0027_ip = 110; continue _fun0027 }
case 111:
            var4 = _closure1_slot23;
            var3 = var2.remoteClipId;
            var2 = var2.id;
            var4[var3] = var2;
case 110:
            var2 = _closure1_slot35;
            var1 = true;
            var2['hasClips'] = var1;
case 103:
            var1 = undefined;
            return var1;
        }
    };
    var5['CLIPS_SAVE_CLIP'] = var9;
    var9 = function handlePromoteClipCandidate(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var6 = var1.clip;
            var _closure2_slot0 = var6;
            var5 = {};
            var1 = var6.applicationName;
            var5['applicationName'] = var1;
            var15 = _closure1_slot27;
            var16 = var5;
            var1 = copyDataProperties(var16, var15);
            var3 = true;
            var1 = 'ended';
            var5[0] = var3;
            var9 = _closure1_slot27;
            var7 = null;
            var10 = var7 == var9;
            var1 = undefined;
            var8 = undefined;
            if(var10) { _fun0028_ip = 112; continue _fun0028 }
case 3:
            var8 = var9.newClipIds;
case 112:
            if(!(var7 == var8)) { _fun0028_ip = 113; continue _fun0028 }
case 114:
            var8 = new Array(0);
case 113:
            var9 = new Array(1);
            var16 = var9;
            var15 = var8;
            var14 = 0;
            var8 = arraySpread(var16, var15, var14);
            var10 = var6.id;
            var9[7] = var10;
            var10 = 1;
            var8 = var8 + var10;
            var8 = 'newClipIds';
            var5[7] = var9;
            _closure1_slot27 = var5;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 15;
            var5 = var12[var5];
            var12 = var9.bind(var1)(var5);
            var5 = _closure1_slot28;
            var9 = var7 != var5;
            if(!var9) { _fun0028_ip = 115; continue _fun0028 }
case 116:
            var5 = _closure1_slot28;
            var13 = var5.id;
            var5 = var6.gameSessionId;
            var9 = var13 === var5;
case 115:
            var5 = 'Promoting clip candidates that do not match current autoclip session';
            var5 = var12.bind(var1)(var9, var5);
            var5 = {};
            var15 = _closure1_slot28;
            var16 = var5;
            var9 = copyDataProperties(var16, var15);
            var9 = _closure1_slot28;
            var9 = var9.candidateClipsPromoted;
            var12 = var9 + var10;
            var9 = 'candidateClipsPromoted';
            var5[8] = var12;
            _closure1_slot28 = var5;
            var5 = {};
            var15 = _closure1_slot35;
            var16 = var5;
            var9 = copyDataProperties(var16, var15);
            var9 = _closure1_slot35;
            var9 = var9.newClipIds;
            if(!(var7 == var9)) { _fun0028_ip = 117; continue _fun0028 }
case 52:
            var9 = new Array(0);
case 117:
            var7 = new Array(1);
            var16 = var7;
            var15 = var9;
            var14 = 0;
            var9 = arraySpread(var16, var15, var14);
            var11 = var6.id;
            var7[8] = var11;
            var9 = var9 + var10;
            var5[7] = var7;
            _closure1_slot35 = var5;
            var7 = _closure1_slot24;
            var5 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var5.bind(var7)(var4);
            _closure1_slot24 = var4;
            var5 = _closure1_slot22;
            var4 = var6.id;
            var4 = delete var5[var4];
            var5 = _closure1_slot21;
            var4 = var6.id;
            var5[var4] = var6;
            var2 = _closure1_slot35;
            var2['hasClips'] = var3;
            return var1;
        }
    };
    var5['CLIPS_PROMOTE_CLIP_CANDIDATE'] = var9;
    var9 = function handleSaveClipStart(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var4 = var1.clipType;
            var2 = _closure1_slot25;
            var1 = 1;
            var1 = var2 + var1;
            _closure1_slot25 = var1;
            var2 = _closure1_slot35;
            var1 = var2.hasTakenDecoupledClip;
            if(var1) { _fun0029_ip = 32; continue _fun0029 }
case 85:
            var3 = _closure1_slot13;
            var3 = var3.DECOUPLED;
            var1 = var4 === var3;
case 32:
            var2['hasTakenDecoupledClip'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var5['CLIPS_SAVE_CLIP_START'] = var9;
    var9 = function handleSaveClipError() {
        var1 = global;
        var5 = var1.Math;
        var4 = var5.max;
        var3 = _closure1_slot25;
        var1 = 1;
        var3 = var3 - var1;
        var1 = 0;
        var1 = var4.bind(var5)(var3, var1);
        _closure1_slot25 = var1;
        var1 = undefined;
        return var1;
    };
    var5['CLIPS_SAVE_CLIP_ERROR'] = var9;
    var9 = function handleSaveClipNoOp(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var4 = var1.reason;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.ClipsSaveNoOpReason;
            var2 = var2.BUFFER_WARMING_UP;
            if(!(var4 === var2)) { _fun0030_ip = 13; continue _fun0030 }
case 118:
            var2 = global;
            var6 = var2.Math;
            var5 = var6.max;
            var4 = _closure1_slot25;
            var2 = 1;
            var4 = var4 - var2;
            var2 = 0;
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot25 = var2;
case 13:
            return var1;
        }
    };
    var5['CLIPS_SAVE_CLIP_NO_OP'] = var9;
    var9 = function handleStreamStart(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var4 = var1.sourceName;
            var7 = var1.pid;
            var1 = _closure1_slot35;
            var1 = var1.clipsSettings;
            var1 = var1.clipsEnabled;
            if(var1) { _fun0031_ip = 74; continue _fun0031 }
case 119:
            var1 = false;
            return var1;
case 74:
            var1 = null;
            var3 = var4;
            if(!(var1 != var7)) { _fun0031_ip = 120; continue _fun0031 }
case 118:
            var6 = _closure1_slot9;
            var5 = var6.getGameForPID;
            var6 = var5.bind(var6)(var7);
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0031_ip = 121; continue _fun0031 }
case 4:
            var5 = var6.name;
case 121:
            if(!(var1 != var5)) { _fun0031_ip = 13; continue _fun0031 }
case 122:
            var4 = var5;
case 13:
            var3 = var4;
case 120:
            if(!(var1 != var3)) { _fun0031_ip = 123; continue _fun0031 }
case 124:
            var1 = '';
            if(!(var1 !== var3)) { _fun0031_ip = 123; continue _fun0031 }
case 125:
            var1 = {};
            var1['applicationName'] = var3;
            var3 = new Array(0);
            var1['newClipIds'] = var3;
            var3 = false;
            var1['ended'] = var3;
            _closure1_slot27 = var1;
            var1 = undefined;
            return var1;
case 123:
            var1 = false;
            return var1;
        }
    };
    var5['STREAM_START'] = var9;
    var9 = function handleStreamStop(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var6 = var1.streamKey;
            var1 = _closure1_slot27;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0032_ip = 126; continue _fun0032 }
case 70:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var5 = var5[var2];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var2 = var5.decodeStreamKey;
            var2 = var2.bind(var5)(var6);
            var5 = var2.ownerId;
            var6 = _closure1_slot10;
            var2 = var6.getId;
            var2 = var2.bind(var6)();
            var2 = var5 === var2;
            if(!var2) { _fun0032_ip = 127; continue _fun0032 }
case 89:
            var5 = _closure1_slot27;
            var5 = var5.newClipIds;
            var6 = var5.length;
            var5 = 0;
            var3 = null;
            if(!(var5 !== var6)) { _fun0032_ip = 128; continue _fun0032 }
case 129:
            var5 = {};
            var8 = _closure1_slot27;
            var9 = var5;
            var6 = copyDataProperties(var9, var8);
            var7 = true;
            var6 = 'ended';
            var5[5] = var7;
            var3 = var5;
case 128:
            _closure1_slot27 = var3;
            var2 = undefined;
case 127:
            var1 = var2;
case 126:
            return var1;
        }
    };
    var5['STREAM_STOP'] = var9;
    var9 = function handleClearLastClipsSession() {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var3 = _closure1_slot27;
            var1 = null;
            if(!(var1 != var3)) { _fun0033_ip = 130; continue _fun0033 }
case 131:
            _closure1_slot27 = var1;
            var1 = undefined;
            return var1;
case 130:
            var1 = false;
            return var1;
        }
    };
    var5['CLIPS_CLEAR_LAST_CLIPS_SESSION'] = var9;
    var9 = function handleClipsSessionStart(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var4 = var1.sessionId;
            var3 = var1.gameId;
            var5 = _closure1_slot28;
            var1 = null;
            if(!(var1 != var5)) { _fun0034_ip = 9; continue _fun0034 }
case 38:
            var6 = _closure1_slot29;
            var1 = _closure1_slot28;
            var5 = var1.id;
            var1 = _closure1_slot28;
            var6[var5] = var1;
case 9:
            var1 = {'id': null, 'gameId': null, 'manualClipsSaved': 0, 'candidateClipsSaved': 0, 'candidateClipsPromoted': 0};
            var1['id'] = var4;
            var1['gameId'] = var3;
            _closure1_slot28 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var5['CLIPS_SESSION_START'] = var9;
    var9 = function handleClipsSessionStop() {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var3 = _closure1_slot28;
            var1 = null;
            if(!(var1 != var3)) { _fun0035_ip = 85; continue _fun0035 }
case 131:
            var5 = _closure1_slot29;
            var3 = _closure1_slot28;
            var4 = var3.id;
            var3 = _closure1_slot28;
            var5[var4] = var3;
            _closure1_slot28 = var1;
            var1 = undefined;
            return var1;
case 85:
            var1 = false;
            return var1;
        }
    };
    var5['CLIPS_SESSION_STOP'] = var9;
    var9 = function clearNewClipIds() {
        var2 = _closure1_slot35;
        var1 = new Array(0);
        var2['newClipIds'] = var1;
        var1 = undefined;
        return var1;
    };
    var5['CLIPS_CLEAR_NEW_CLIP_IDS'] = var9;
    var9 = function removeSingleNewClipId(arg1) {
        var2 = arg1;
        var2 = var2.clipId;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot35;
        var4 = var2.newClipIds;
        var3 = var4.filter;
        var1 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var1 !== var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var2['newClipIds'] = var1;
        var1 = undefined;
        return var1;
    };
    var5['CLIPS_REMOVE_SINGLE_NEW_CLIP_ID'] = var9;
    var9 = function handleClipsDirectoryLoaded(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = {};
            _closure1_slot21 = var1;
            var1 = new Array(0);
            _closure1_slot24 = var1;
            var4 = _closure1_slot38;
            var1 = arg1;
            var3 = var1.clips;
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var4 = var6.bind(var1)();
            var3 = var4.done;
            var5 = null;
            if(var3) { _fun0036_ip = 48; continue _fun0036 }
case 64:
            var8 = var4.value;
            var3 = var8.isCandidate;
            if(var3) { _fun0036_ip = 132; continue _fun0036 }
case 133:
            var7 = _closure1_slot21;
            var3 = var8.id;
            var7[var3] = var8;
            var3 = var8.remoteClipId;
            if(!(var5 != var3)) { _fun0036_ip = 134; continue _fun0036 }
case 57:
            var9 = _closure1_slot23;
            var7 = var8.remoteClipId;
            var3 = var8.id;
            var9[var7] = var3;
            _fun0036_ip = 134; continue _fun0036;
case 132:
            var7 = _closure1_slot22;
            var3 = var8.id;
            var7[var3] = var8;
            var7 = _closure1_slot24;
            var3 = var7.push;
            var3 = var3.bind(var7)(var8);
case 134:
            var7 = var6.bind(var1)();
            var3 = var7.done;
            var4 = var7;
            if(!var3) { _fun0036_ip = 64; continue _fun0036 }
case 48:
            var3 = _closure1_slot35;
            var4 = global;
            var5 = var4.Object;
            var4 = var5.keys;
            var2 = _closure1_slot21;
            var2 = var4.bind(var5)(var2);
            var4 = var2.length;
            var2 = 0;
            var2 = var4 > var2;
            var3['hasClips'] = var2;
            return var1;
        }
    };
    var5['CLIPS_LOAD_DIRECTORY_SUCCESS'] = var9;
    var9 = function handleClipsDelete(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot21;
            var3 = var1.id;
            var3 = var5[var3];
            var6 = _closure1_slot24;
            var5 = var6.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var1 !== var2;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            _closure1_slot24 = var4;
            var5 = _closure1_slot22;
            var4 = var1.id;
            var4 = delete var5[var4];
            var4 = _closure1_slot21;
            var1 = var1.id;
            var1 = delete var4[var1];
            var5 = null;
            var6 = var5 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0037_ip = 124; continue _fun0037 }
case 135:
            var4 = var3.remoteClipId;
case 124:
            if(!(var5 != var4)) { _fun0037_ip = 136; continue _fun0037 }
case 69:
            var4 = _closure1_slot23;
            var3 = var3.remoteClipId;
            var3 = delete var4[var3];
case 136:
            var3 = _closure1_slot35;
            var4 = global;
            var5 = var4.Object;
            var4 = var5.keys;
            var2 = _closure1_slot21;
            var2 = var4.bind(var5)(var2);
            var4 = var2.length;
            var2 = 0;
            var2 = var4 > var2;
            var3['hasClips'] = var2;
            return var1;
        }
    };
    var5['CLIPS_DELETE_CLIP'] = var9;
    var9 = function handleClipMetadataUpdate(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var3 = var1.clip;
            var2 = var3.isCandidate;
            if(var2) { _fun0038_ip = 34; continue _fun0038 }
case 130:
            var4 = _closure1_slot21;
            var2 = var3.id;
            var4[var2] = var3;
            var4 = var3.remoteClipId;
            var2 = null;
            if(!(var2 != var4)) { _fun0038_ip = 114; continue _fun0038 }
case 6:
            var5 = _closure1_slot23;
            var4 = var3.remoteClipId;
            var2 = var3.id;
            var5[var4] = var2;
            _fun0038_ip = 114; continue _fun0038;
case 34:
            var2 = _closure1_slot22;
            var1 = var3.id;
            var2[var1] = var3;
case 114:
            var1 = undefined;
            return var1;
        }
    };
    var5['CLIPS_UPDATE_METADATA'] = var9;
    var9 = function handleRTCConnectionFlagsUpdate(arg1) {
        var6 = arg1;
        var4 = _closure1_slot30;
        var3 = var6.userId;
        var2 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var7 = 17;
        var10 = var9[var7];
        var1 = undefined;
        var13 = var8.bind(var1)(var10);
        var12 = var13.hasFlag;
        var11 = var6.flags;
        var5 = _closure1_slot18;
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
    var5['RTC_CONNECTION_FLAGS'] = var9;
    var9 = function handleShowCallWarning(arg1) {
        var1 = arg1;
        var2 = var1.channelId;
        _closure1_slot26 = var2;
        var1 = undefined;
        return var1;
    };
    var5['CLIPS_SHOW_CALL_WARNING'] = var9;
    var9 = function handleVoiceChannelSelect(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = _closure1_slot26;
            if(!(var3 !== var1)) { _fun0039_ip = 70; continue _fun0039 }
case 66:
            var1 = null;
            _closure1_slot26 = var1;
case 70:
            var1 = undefined;
            return var1;
        }
    };
    var5['VOICE_CHANNEL_SELECT'] = var9;
    var9 = function handleClassifyHardware(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var4 = var1.classification;
            var1 = _closure1_slot35;
            var6 = var1.hardwareClassification;
            var3 = _closure1_slot35;
            var1 = _closure1_slot12;
            var3['hardwareClassificationVersion'] = var1;
            var1 = _closure1_slot35;
            var1['hardwareClassification'] = var4;
            var1 = _closure1_slot35;
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
            if(!var3) { _fun0040_ip = 87; continue _fun0040 }
case 69:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var1)(var5);
            var5 = var5.ClipsHardwareClassification;
            var5 = var5.MEETS_AUTO_ENABLE;
            var3 = var6 !== var5;
case 87:
            if(!var3) { _fun0040_ip = 48; continue _fun0040 }
case 137:
            var3 = _closure1_slot35;
            var5 = var3.clipsSettings;
            var3 = true;
            var5['clipsEnabled'] = var3;
case 48:
            var3 = _closure1_slot35;
            var5 = var3.hardwareClassificationForDecoupled;
            var3 = _closure1_slot35;
            var3['hardwareClassificationForDecoupled'] = var4;
            var3 = _closure1_slot35;
            var4 = var3.hardwareClassificationForDecoupled;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var1)(var3);
            var3 = var3.ClipsHardwareClassification;
            var3 = var3.MEETS_AUTO_ENABLE;
            var3 = var4 === var3;
            if(!var3) { _fun0040_ip = 138; continue _fun0040 }
case 139:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.ClipsHardwareClassification;
            var4 = var4.MEETS_AUTO_ENABLE;
            var3 = var5 !== var4;
case 138:
            if(!var3) { _fun0040_ip = 106; continue _fun0040 }
case 140:
            var4 = _closure1_slot35;
            var4 = var4.clipsSettings;
            var3 = var4.clipsEnabled;
case 106:
            if(!var3) { _fun0040_ip = 141; continue _fun0040 }
case 142:
            var2 = _closure1_slot35;
            var3 = var2.clipsSettings;
            var2 = true;
            var3['decoupledClipsEnabled'] = var2;
case 141:
            return var1;
        }
    };
    var5['CLIPS_CLASSIFY_HARDWARE'] = var9;
    var9 = function handleClipsInit(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationName;
            var1 = null;
            _closure1_slot31 = var1;
            var1 = _closure1_slot35;
            var1 = var1.clipsSettings;
            var1 = var1.clipsEnabled;
            var3 = false;
            if(var1) { _fun0041_ip = 74; continue _fun0041 }
case 143:
            return var3;
case 74:
            var1 = {};
            var1['applicationName'] = var4;
            var4 = new Array(0);
            var1['newClipIds'] = var4;
            var1['ended'] = var3;
            _closure1_slot27 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var5['CLIPS_INIT'] = var9;
    var9 = function handleClipsInitFailure(arg1) {
        var1 = arg1;
        var2 = var1.errMsg;
        _closure1_slot31 = var2;
        var1 = undefined;
        return var1;
    };
    var5['CLIPS_INIT_FAILURE'] = var9;
    var9 = function handleDismissClipsEducation(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var3 = var1.educationType;
            var1 = _closure1_slot14;
            var1 = var1.Error;
            if(!(var1 !== var3)) { _fun0042_ip = 144; continue _fun0042 }
case 79:
            var1 = _closure1_slot14;
            var1 = var1.Disabled;
            if(!(var1 !== var3)) { _fun0042_ip = 8; continue _fun0042 }
case 74:
            var1 = _closure1_slot14;
            var1 = var1.Enabled;
            if(!(var1 === var3)) { _fun0042_ip = 45; continue _fun0042 }
case 8:
            var1 = _closure1_slot35;
            var3 = var1.clipsEducationState;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var3['dismissedAt'] = var1;
            var1 = _closure1_slot35;
            var3 = var1.clipsEducationState;
            var1 = 0;
            var3['numberOfGamesLaunchedSinceDismissal'] = var1;
            var1 = _closure1_slot35;
            var3 = var1.clipsEducationState;
            var4 = var3.numberOfTimesDismissed;
            var1 = 1;
            var1 = var4 + var1;
            var3['numberOfTimesDismissed'] = var1;
            _fun0042_ip = 45; continue _fun0042;
case 144:
            var1 = null;
            _closure1_slot31 = var1;
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var5['CLIPS_DISMISS_EDUCATION'] = var9;
    var9 = function handleRunningGamesChange(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var1 = var1.added;
            var2 = var1.length;
            var1 = 0;
            if(!(var2 > var1)) { _fun0043_ip = 84; continue _fun0043 }
case 33:
            var1 = _closure1_slot35;
            var2 = var1.clipsEducationState;
            var3 = var2.numberOfGamesLaunchedSinceDismissal;
            var1 = 1;
            var1 = var3 + var1;
            var2['numberOfGamesLaunchedSinceDismissal'] = var1;
case 84:
            var1 = undefined;
            return var1;
        }
    };
    var5['RUNNING_GAMES_CHANGE'] = var9;
    var9 = function handleSetExporting(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var3 = var1.clipIds;
            var1 = global;
            var1 = var1.Set;
            var2 = null;
            if(!(var2 == var3)) { _fun0044_ip = 145; continue _fun0044 }
case 70:
            var3 = new Array(0);
case 145:
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var4 = var3;
            var1 = new var5[var1](var4, var3);
            var2 = var1 instanceof Object ? var1 : var2;
            _closure1_slot32 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var5['CLIPS_SET_EXPORTING'] = var9;
    var9 = function handleMessageCreate(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot41;
            var4 = var2.channelId;
            var1 = var2.message;
            var3 = var1.attachments;
            var1 = null;
            if(!(var1 == var3)) { _fun0045_ip = 146; continue _fun0045 }
case 81:
            var3 = new Array(0);
case 146:
            var2 = var2.message;
            var6 = var2.author;
            var7 = var1 == var6;
            var2 = undefined;
            var1 = undefined;
            if(var7) { _fun0045_ip = 147; continue _fun0045 }
case 148:
            var1 = var6.id;
case 147:
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        }
    };
    var5['MESSAGE_CREATE'] = var9;
    var9 = function handleLoadMessagesSuccess(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var11 = arg1;
            var2 = _closure1_slot38;
            var1 = var11.messages;
            var9 = undefined;
            var8 = var2.bind(var9)(var1);
            var3 = var8.bind(var9)();
            var2 = var3.done;
            var5 = false;
            var7 = null;
            var6 = var3;
            var4 = undefined;
            var3 = undefined;
            var1 = false;
            if(var2) { _fun0046_ip = 137; continue _fun0046 }
case 93:
            var2 = var6.value;
            if(var5) { _fun0046_ip = 149; continue _fun0046 }
case 32:
            var16 = _closure1_slot41;
            var15 = var11.channelId;
            var12 = var2.attachments;
            var14 = var12;
            if(!(var7 == var12)) { _fun0046_ip = 150; continue _fun0046 }
case 151:
            var14 = new Array(0);
case 150:
            var2 = var2.author;
            var17 = var7 == var2;
            var13 = undefined;
            if(var17) { _fun0046_ip = 152; continue _fun0046 }
case 69:
            var13 = var2.id;
case 152:
            var5 = var16.bind(var9)(var15, var14, var13);
            var4 = var12;
            var3 = var2;
case 149:
            var13 = var8.bind(var9)();
            var2 = var13.done;
            var6 = var13;
            var1 = var5;
            if(!var2) { _fun0046_ip = 93; continue _fun0046 }
case 137:
            return var1;
        }
    };
    var5['LOAD_MESSAGES_SUCCESS'] = var9;
    var9 = function reset() {
        var3 = _closure1_slot33;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = null;
        _closure1_slot27 = var1;
        _closure1_slot26 = var1;
        var1 = {};
        _closure1_slot30 = var1;
        var1 = undefined;
        return var1;
    };
    var5['LOGOUT'] = var9;
    var9 = var11.prototype;
    var9 = Object.create(var9, {constructor: {value: var11}});
    var20 = var9;
    var18 = var5;
    var5 = new var20[var11](var19, var18, var17);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot36 = var5;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/clips/ClipsStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['DEFAULT_STORAGE_SENTINEL'] = var4;
    var3['DEFAULT_STORAGE_DIRECTORY'] = var2;
    return var1;
})();