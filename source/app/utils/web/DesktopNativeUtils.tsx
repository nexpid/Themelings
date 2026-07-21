// app/utils/web/DesktopNativeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var11 = dependencyMap;
        var _closure1_slot0 = var10;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var11;
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
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3["@@iterator"];
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
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
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot26;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot26;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 25:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 8:
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
case 29:
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
                        _fun0003_ip = 30; continue _fun0003;
case 28:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
case 30:
                        return var1;
                    }
                };
                return var1;
case 6:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot25 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var6 = function sanitizeFilename(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
case 36: // try_start_0
                var2 = global;
                var4 = var2.decodeURIComponent;
                var3 = var1;
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.replace;
                var4 = _closure1_slot19;
                var3 = '$1';
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.replace;
                var4 = /(.+)@([a-zA-Z0-9]+)$/;
                var3 = '$1.$2';
                var5 = var5.bind(var6)(var4, var3);
                var4 = var5.replace;
                var3 = _closure1_slot18;
                var2 = '_';
                var2 = var4.bind(var5)(var3, var2);
case 37: // try_end0
                return var2;
case 38: // catch_target0
                CatchBlockStart(arg_register=1);
                var5 = var1;
                var4 = var5.replace;
                var3 = _closure1_slot20;
                var2 = '$1';
                var5 = var4.bind(var5)(var3, var2);
                var4 = var5.replace;
                var3 = /(.+)%40([a-zA-Z0-9]+)$/;
                var2 = '$1.$2';
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.replace;
                var2 = _closure1_slot18;
                var1 = '_';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot27 = var6;
        var5 = function getFileData() {
            var1 = undefined;
            var4 = _closure1_slot29;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot28 = var5;
        var1 = function _getFileData() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot4;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                        var2 = global;
                        var3 = var2.fetch;
                        var6 = var2.Request;
                        var2 = var6.prototype;
                        var4 = Object.create(var2, {constructor: {value: var6}});
                        var10 = arg1;
                        var9 = {'method': 'GET', 'mode': 'cors'};
                        var11 = var4;
                        var2 = new var11[var6](var10, var9, var8);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var7 = undefined;
                        var2 = var3.bind(var7)(var2);
                        SaveGenerator(address=72);
case 35:
                        return var2;
case 41:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 3;
                        var3 = var3[var6];
                        var8 = var5.bind(var7)(var3);
                        var5 = var2.status;
                        var3 = 200;
                        var5 = var3 === var5;
                        var3 = 'Data fetch unsuccessful';
                        var3 = var8.bind(var7)(var5, var3);
                        var3 = var2.arrayBuffer;
                        var3 = var3.bind(var2)();
                        SaveGenerator(address=139);
case 44:
                        return var3;
case 45:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var6];
                        var6 = var5.bind(var7)(var4);
                        var4 = null;
                        var5 = var4 != var3;
                        var4 = 'Data is null';
                        var4 = var6.bind(var7)(var5, var4);
                        return var3;
case 46:
                        return var3;
case 42:
                        return var2;
case 39:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot29 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot29 = var1;
        var4 = function getImageData(arg1) {
            var3 = _closure1_slot28;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var _closure1_slot30 = var4;
        var1 = function normalizeRunningGame(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var6 = arguments[1];
                var7 = undefined;
                if(!(var6 === var7)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var6 = _closure1_slot12;
case 48:
                var1 = {};
                var8 = var2.id;
                var3 = null;
                var9 = var3 != var8;
                var4 = '';
                var5 = var4;
                if(!var9) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var5 = var8;
case 50:
                var5 = var6[var5];
                var1['id'] = var5;
                var5 = global;
                var8 = var5.parseInt;
                var5 = var2.id;
                var9 = var3 != var5;
                var6 = var4;
                if(!var9) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var6 = var5;
case 52:
                var5 = 10;
                var5 = var8.bind(var7)(var6, var5);
                var1['nativeProcessObserverId'] = var5;
                var5 = var2.gameName;
                if(!(var3 == var5)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var5 = var2.name;
case 54:
                var1['name'] = var5;
                var5 = var2.origGameName;
                var1['origGameName'] = var5;
                var5 = var2.name;
                var6 = var3 != var5;
                if(!var6) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var4 = var5;
case 56:
                var1['processName'] = var4;
                var4 = var2.hidden;
                var1['hidden'] = var4;
                var4 = var2.elevated;
                var1['elevated'] = var4;
                var5 = var2.sandboxed;
                var4 = var3 != var5;
                if(!var4) { _fun0007_ip = 46; continue _fun0007 }
case 58:
                var4 = var5;
case 46:
                var1['sandboxed'] = var4;
                var4 = var2.lastFocused;
                var1['lastFocused'] = var4;
                var4 = var2.exePath;
                var1['exePath'] = var4;
                var4 = var2.exeName;
                var1['exeName'] = var4;
                var4 = var2.cmdLine;
                var1['cmdLine'] = var4;
                var4 = var2.distributor;
                var1['distributor'] = var4;
                var4 = var2.sku;
                var1['sku'] = var4;
                var4 = var2.pid;
                var1['pid'] = var4;
                var4 = var2.pidPath;
                if(!(var3 == var4)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var4 = new Array(0);
case 59:
                var1['pidPath'] = var4;
                var4 = var2.gameMetadata;
                var1['gameMetadata'] = var4;
                var5 = var2.windowHandle;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var4 = var5;
case 61:
                var1['windowHandle'] = var4;
                var4 = var2.fullscreenType;
                if(!(var3 == var4)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 4;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.RunningProcessFullscreenType;
                var4 = var5.UNKNOWN;
case 63:
                var1['fullscreenType'] = var4;
                var4 = var2.isLauncher;
                var3 = var3 != var4;
                if(!var3) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                var3 = var4;
case 65:
                var1['isLauncher'] = var3;
                var2 = var2.executableFingerprint;
                var1['executableFingerprint'] = var2;
                return var1;
            }
        };
        var _closure1_slot31 = var1;
        var1 = function backwardCompatSend(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isDesktop;
                var4 = var4.bind(var5)();
                if(!var4) { _fun0008_ip = 67; continue _fun0008 }
case 68: // try_start_0
                var4 = _closure1_slot24;
                var3 = var4.sendIPC;
                var2 = var3.bind(var4)(var2);
case 28: // try_end0
                _fun0008_ip = 67; continue _fun0008;
case 69: // catch_target0
                CatchBlockStart(arg_register=1);
case 67:
                return var1;
            }
        };
        var _closure1_slot32 = var1;
        var8 = global;
        var13 = var8.Object;
        var12 = var13.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var12.bind(var13)(var3, var1, var2);
        var14 = 0;
        var2 = var11[var14];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var13 = 1;
        var2 = var11[var13];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var12 = 2;
        var2 = var11[var12];
        var2 = var10.bind(var1)(var2);
        var2 = var2.NativeFeatures;
        var _closure1_slot5 = var2;
        var2 = var8.window;
        var15 = var2.DiscordNative;
        var _closure1_slot6 = var15;
        var16 = var8.Set;
        var2 = var16.prototype;
        var7 = Object.create(var2, {constructor: {value: var16}});
        var21 = ['jpg', 'jpeg', 'jfif', 'png'];
        var22 = var7;
        var2 = new var22[var16](var21, var20);
        var2 = var2 instanceof Object ? var2 : var7;
        var _closure1_slot7 = var2;
        var16 = var8.Set;
        var2 = var16.prototype;
        var7 = Object.create(var2, {constructor: {value: var16}});
        var21 = ['jpg', 'jpeg', 'jfif', 'png', 'webp', 'gif', 'tiff', 'bmp', 'avif'];
        var22 = var7;
        var2 = new var22[var16](var21, var20);
        var2 = var2 instanceof Object ? var2 : var7;
        var _closure1_slot8 = var2;
        var2 = null;
        var _closure1_slot9 = var2;
        var _closure1_slot10 = var2;
        var _closure1_slot11 = var2;
        var7 = {};
        var _closure1_slot12 = var7;
        var7 = false;
        var _closure1_slot13 = var7;
        var16 = {};
        var _closure1_slot14 = var16;
        if(!(var2 != var15)) { _fun0001_ip = 70; continue _fun0001 }
case 71:
        var17 = var15.app;
        var16 = var17.getVersion;
        var18 = var16.bind(var17)();
        var17 = var18.split;
        var16 = '.';
        var18 = var17.bind(var18)(var16);
        var17 = var18.map;
        var16 = function(arg1) {
            var1 = global;
            var3 = var1.parseInt;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var16 = var17.bind(var18)(var16);
        _closure1_slot9 = var16;
        var17 = var15.app;
        var16 = var17.getModuleVersions;
        var16 = var16.bind(var17)();
        _closure1_slot11 = var16;
        var16 = var15.app;
        var15 = var16.getBuildNumber;
        var15 = var15.bind(var16)();
        _closure1_slot10 = var15;
case 70:
        var16 = var8.Set;
        var8 = var16.prototype;
        var22 = Object.create(var8, {constructor: {value: var16}});
        var21 = ['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice'];
        var8 = new var22[var16](var21, var20);
        var _closure1_slot15 = var7;
        var _closure1_slot16 = var2;
        var2 = 'lastImageSaveDirectory';
        var _closure1_slot17 = var2;
        var2 = /[<>:"/\\|?*@]/g;
        var _closure1_slot18 = var2;
        var2 = /(\.[a-zA-Z0-9]+):[^.]*$/;
        var _closure1_slot19 = var2;
        var2 = /(\.[a-zA-Z0-9]+)%3A.+$/;
        var _closure1_slot20 = var2;
        var2 = /[^a-zA-Z0-9]/g;
        var _closure1_slot21 = var2;
        var2 = /\.[^.]*$/;
        var _closure1_slot22 = var2;
        var7 = {};
        var2 = 'saved';
        var7['SAVED'] = var2;
        var2 = 'canceled';
        var7['CANCELED'] = var2;
        var2 = 'errored';
        var7['ERRORED'] = var2;
        var _closure1_slot23 = var7;
        var2 = {};
        var2['Camera'] = var14;
        var8 = 'Camera';
        var2[var14] = var8;
        var2['Microphone'] = var13;
        var8 = 'Microphone';
        var2[var13] = var8;
        var2['Photo'] = var12;
        var8 = 'Photo';
        var2[var12] = var8;
        var12 = 3;
        var2['InputMonitoring'] = var12;
        var8 = 'InputMonitoring';
        var2[var12] = var8;
        var12 = 4;
        var2['ScreenRecording'] = var12;
        var8 = 'ScreenRecording';
        var2[var12] = var8;
        var8 = {};
        var12 = function requireModule(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot13;
                if(!var3) { _fun0009_ip = 50; continue _fun0009 }
case 72:
                var4 = _closure1_slot14;
                var3 = var4.hasOwnProperty;
                var3 = var3.bind(var4)(var2);
                if(!var3) { _fun0009_ip = 50; continue _fun0009 }
case 73:
                var3 = _closure1_slot14;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0009_ip = 74; continue _fun0009 }
case 50:
                var3 = _closure1_slot6;
                var4 = var3.nativeModules;
                var3 = var4.requireModule;
                var3 = var3.bind(var4)(var2);
                var4 = _closure1_slot13;
                if(!var4) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                var4 = _closure1_slot14;
                var4[var2] = var3;
case 75:
                return var3;
case 74:
                var1 = _closure1_slot14;
                var1 = var1[var2];
                return var1;
            }
        };
        var8['requireModule'] = var12;
        var12 = function ensureModule(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                var1 = global;
                var4 = var1.Promise;
                var3 = var4.reject;
                var6 = var1.Error;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var7 = 'not embedded';
                var8 = var5;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var3.bind(var4)(var1);
                _fun0010_ip = 79; continue _fun0010;
case 77:
                var2 = _closure1_slot6;
                var4 = var2.nativeModules;
                var3 = var4.ensureModule;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 79:
                return var1;
            }
        };
        var8['ensureModule'] = var12;
        var13 = function get canBootstrapNewUpdater() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = _closure1_slot6;
                var1 = var1.nativeModules;
                var1 = var1.canBootstrapNewUpdater;
                if(var1) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                var1 = false;
case 80:
                return var1;
            }
        };
        var12 = 'canBootstrapNewUpdater';
        Object.defineProperty(var8, var12, {get: var13, set: var1, enumerable: true});
        var12 = function getCrashReporterMetadata() {
            var1 = _closure1_slot6;
            var2 = var1.crashReporter;
            var1 = var2.getMetadata;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['getCrashReporterMetadata'] = var12;
        var12 = function getSetting(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 69; continue _fun0012 }
case 82:
                        var2 = _closure1_slot6;
                        var5 = var2.settings;
                        var4 = var5.get;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = var4.bind(var5)(var3, var2);
                        SaveGenerator(address=46);
case 83:
                        return var2;
case 2:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 4; continue _fun0012 }
case 84:
                        return var2;
case 4:
                        return var2;
case 69:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['getSetting'] = var12;
        var12 = function beforeUnload() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var6 = this;
                var1 = undefined;
                var2 = undefined;
case 82: // try_start_0
                var4 = var6.requireModule;
                var3 = 'discord_overlay2';
                var2 = var4.bind(var6)(var3);
case 81: // try_end0
                _fun0013_ip = 34; continue _fun0013;
case 80: // catch_target0
                CatchBlockStart(arg_register=2);
case 34:
                var4 = var2;
                var3 = var4;
                if(!var4) { _fun0013_ip = 2; continue _fun0013 }
case 85:
                var4 = var2;
                var3 = var4.reset;
case 2:
                if(!var3) { _fun0013_ip = 86; continue _fun0013 }
case 5:
                var4 = var2;
                var3 = var4.reset;
                var3 = var3.bind(var4)();
case 86:
                var5 = var2;
                var4 = var5;
                if(!var5) { _fun0013_ip = 87; continue _fun0013 }
case 88:
                var5 = var2;
                var4 = var5.disconnectAllProcesses;
case 87:
                var3 = var4;
                if(!var4) { _fun0013_ip = 37; continue _fun0013 }
case 9:
                var4 = var2;
                var3 = var4.destroyHostProcess;
case 37:
                if(!var3) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                var3 = var2;
                var2 = var3.disconnectAllProcesses;
                var2 = var2.bind(var3)();
                var2 = var3.destroyHostProcess;
                var2 = var2.bind(var3)();
case 89:
                var3 = _closure1_slot6;
                var4 = var3.powerMonitor;
                var3 = var4.removeAllListeners;
                var3 = var3.bind(var4)();
                var5 = global;
                var7 = var5.window;
                var7 = var7.location;
                var7 = var7.origin;
                var5 = var5.window;
                var5 = var5.GLOBAL_ENV;
                var5 = var5.MIGRATION_SOURCE_ORIGIN;
                var5 = var7 === var5;
                var4 = var5;
                if(!var5) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 6;
                var5 = var10[var5];
                var5 = var9.bind(var1)(var5);
                var8 = var5.Storage;
                var7 = var8.get;
                var5 = 7;
                var5 = var10[var5];
                var5 = var9.bind(var1)(var5);
                var5 = var5.DOMAIN_MIGRATION_SUCCESS_KEY;
                var7 = var7.bind(var8)(var5);
                var5 = true;
                var4 = var5 !== var7;
case 91:
                var3 = var4;
                if(!var4) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                var5 = var6.supportsFeature;
                var4 = _closure1_slot5;
                var4 = var4.USER_DATA_CACHE;
                var3 = var5.bind(var6)(var4);
case 93:
                if(!var3) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                var3 = _closure1_slot6;
                var4 = var3.userDataCache;
                var3 = var4.cacheUserData;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var5 = var2.Storage;
                var2 = var5.stringify;
                var2 = var2.bind(var5)();
                var2 = var3.bind(var4)(var2);
case 95:
                return var1;
            }
        };
        var8['beforeUnload'] = var12;
        var12 = function inputEventRegister(arg1, arg2, arg3, arg4) {
            var4 = arg2;
            var2 = this;
            var1 = var2.getDiscordUtils;
            var7 = var1.bind(var2)();
            var6 = var7.inputEventRegister;
            var1 = global;
            var3 = var1.parseInt;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var2 = '';
            var1 = arg1;
            var2 = var5.bind(var2)(var1);
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var3 = var6().value;
                    var2 = var1;
                    var8 = undefined;
                    var2 = var2 === var8;
                    var5 = undefined;
                    if(var2) { _fun0014_ip = 97; continue _fun0014 }
case 81:
                    var5 = var3;
case 97:
                    var4 = undefined;
                    if(var2) { _fun0014_ip = 98; continue _fun0014 }
case 99:
                    var7 = var6().value;
                    var3 = var1;
                    var3 = var3 === var8;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0014_ip = 98; continue _fun0014 }
case 100:
                    var4 = var7;
                    var2 = var3;
case 98:
                    var3 = undefined;
                    if(var2) { _fun0014_ip = 77; continue _fun0014 }
case 86:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var8;
                    var3 = undefined;
                    var2 = var6;
                    if(var6) { _fun0014_ip = 77; continue _fun0014 }
case 75:
                    var3 = var7;
                    var2 = var6;
case 77:
                    if(var2) { _fun0014_ip = 101; continue _fun0014 }
case 102:
                    var1.return();
case 101:
                    var2 = 'string';
                    var1 = typeof var3;
                    if(!(var2 !== var1)) { _fun0014_ip = 103; continue _fun0014 }
case 104:
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    _fun0014_ip = 44; continue _fun0014;
case 103:
                    var2 = new Array(3);
                    var2[0] = var5;
                    var2[1] = var4;
                    var2[2] = var3;
                    var1 = var2;
case 44:
                    return var1;
                }
            };
            var10 = var3.bind(var4)(var2);
            var9 = arg3;
            var8 = arg4;
            var12 = var7;
            var11 = var5;
            var2 = var12[var6](var11, var10, var9, var8, var7);
            return var1;
        };
        var8['inputEventRegister'] = var12;
        var12 = function inputEventUnregister(arg1) {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var4 = var1.bind(var2)();
            var3 = var4.inputEventUnregister;
            var1 = global;
            var5 = var1.parseInt;
            var1 = undefined;
            var2 = arg1;
            var2 = var5.bind(var1)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var8['inputEventUnregister'] = var12;
        var12 = function setOnInputEventCallback(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.isPlatformEmbedded;
                if(!var2) { _fun0015_ip = 105; continue _fun0015 }
case 85:
                var2 = var3.getDiscordUtils;
                var4 = var2.bind(var3)();
                var3 = var4.inputWatchAll;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 105:
                return var1;
            }
        };
        var8['setOnInputEventCallback'] = var12;
        var12 = function setFocused(arg1) {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var3 = var1.bind(var2)();
            var2 = var3.inputSetFocused;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['setFocused'] = var12;
        var12 = function setObservedGamesCallback(arg1, arg2, arg3, arg4) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var11 = this;
                var9 = arg1;
                var5 = arg2;
                var1 = arg3;
                var _closure2_slot0 = var1;
                var7 = arg4;
                var1 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = function normalizeCallback(arg1) {
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var4.map;
                    var1 = function(arg1) {
                        var4 = _closure1_slot31;
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
case 99: // try_start_0
                var10 = {};
                _closure1_slot12 = var10;
                var10 = 0;
                var _closure2_slot1 = var10;
                var10 = var11.getDiscordUtils;
                var4 = var10.bind(var11)();
                var11 = var9;
                var10 = var11.map;
                var9 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure2_slot1;
                        var3 = var3 + 1;
                        _closure2_slot1 = var3;
                        var4 = var2.id;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0017_ip = 83; continue _fun0017 }
case 34:
                        var4 = _closure1_slot12;
                        var1 = var2.id;
                        var4[var3] = var1;
case 83:
                        var1 = {};
                        var6 = var1;
                        var5 = var2;
                        var4 = copyDataProperties(var6, var5);
                        var4 = var2.cmdLine;
                        var2 = 'cmdline';
                        var1[1] = var4;
                        var2 = 'id';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var3 = var10.bind(var11)(var9);
                var6 = _closure1_slot12;
                var _closure2_slot2 = var6;
                var9 = var7;
                var6 = null;
                var9 = var6 != var9;
                var8 = var9;
                if(!var9) { _fun0016_ip = 79; continue _fun0016 }
case 90:
                var9 = var4;
                var9 = var9.setProcessObserverUserId;
                var8 = var6 != var9;
case 79:
                if(!var8) { _fun0016_ip = 106; continue _fun0016 }
case 107:
                var9 = var4;
                var8 = var9.setProcessObserverUserId;
                var7 = var8.bind(var9)(var7);
case 106:
                if(!var5) { _fun0016_ip = 108; continue _fun0016 }
case 109:
                var5 = var4;
                var5 = var5.setObservedGamesCallback2;
                if(!(var6 == var5)) { _fun0016_ip = 110; continue _fun0016 }
case 108:
                var8 = var4;
                var7 = var8.setObservedGamesCallback;
                var6 = var3;
                var5 = var2;
                var5 = var7.bind(var8)(var6, var5);
                _fun0016_ip = 111; continue _fun0016;
case 110:
                var5 = var4;
                var4 = var5.setObservedGamesCallback2;
                var2 = var4.bind(var5)(var3, var2);
case 111: // try_end0
                _fun0016_ip = 42; continue _fun0016;
case 112: // catch_target0
                CatchBlockStart(arg_register=1);
case 42:
                return var1;
            }
        };
        var8['setObservedGamesCallback'] = var12;
        var12 = function setProcessObserverCollectExecutableFingerprint(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var4 = var1.bind(var2)();
                var3 = var4.setProcessObserverCollectExecutableFingerprint;
                var1 = null;
                if(!(var1 != var3)) { _fun0018_ip = 113; continue _fun0018 }
case 114:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 113:
                var1 = undefined;
                return var1;
            }
        };
        var8['setProcessObserverCollectExecutableFingerprint'] = var12;
        var12 = function getExecutableFingerprintForProcess(arg1) {
            var2 = this;
            var _closure2_slot0 = var2;
            var2 = arg1;
            var _closure2_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var4 = _closure2_slot0;
                    var1 = var4.getDiscordUtils;
                    var7 = var1.bind(var4)();
                    var5 = null;
                    var8 = var5 == var7;
                    var1 = undefined;
                    var4 = undefined;
                    if(var8) { _fun0019_ip = 50; continue _fun0019 }
case 113:
                    var4 = var7.getExecutableFingerprintForProcess;
case 50:
                    if(!(var5 == var4)) { _fun0019_ip = 28; continue _fun0019 }
case 5:
                    var5 = var6.bind(var1)(var5);
                    _fun0019_ip = 88; continue _fun0019;
case 28:
                    var3 = _closure2_slot1;
                    var2 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var1 = arg1;
                            var3 = _closure3_slot0;
                            var5 = null;
                            var4 = var5 != var1;
                            var2 = null;
                            if(!var4) { _fun0020_ip = 78; continue _fun0020 }
case 115:
                            var4 = '';
                            var2 = null;
                            if(!(var4 !== var1)) { _fun0020_ip = 78; continue _fun0020 }
case 73:
                            var2 = var1;
case 78:
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var1)(var3, var2);
case 88:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var8['getExecutableFingerprintForProcess'] = var12;
        var12 = function setGameDetectionCallback(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = this;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var2 = var3.getDiscordUtils;
                var4 = var2.bind(var3)();
                var3 = var4.setGameDetectionCallback;
                var2 = null;
                if(!(var2 != var3)) { _fun0021_ip = 116; continue _fun0021 }
case 78:
                var2 = var3.call;
                var1 = function(arg1, arg2) {
                    var6 = arg1;
                    var5 = arg2;
                    var4 = _closure2_slot0;
                    var3 = var6.map;
                    var2 = function(arg1) {
                        var3 = _closure1_slot31;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = var5.map;
                    var1 = function(arg1) {
                        var3 = _closure1_slot31;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var2.bind(var5)(var1);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var4, var1);
case 116:
                var1 = undefined;
                return var1;
            }
        };
        var8['setGameDetectionCallback'] = var12;
        var12 = function setGameDetectionErrorCallback(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var4 = var1.bind(var2)();
                var3 = var4.setGameDetectionErrorCallback;
                var1 = null;
                if(!(var1 != var3)) { _fun0022_ip = 113; continue _fun0022 }
case 114:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 113:
                var1 = undefined;
                return var1;
            }
        };
        var8['setGameDetectionErrorCallback'] = var12;
        var12 = function setRobloxSubgameDetectionConfig(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var5 = var1.bind(var2)();
                var4 = var5.setRobloxSubgameDetectionConfig;
                var1 = null;
                if(!(var1 != var4)) { _fun0023_ip = 117; continue _fun0023 }
case 114:
                var3 = var4.call;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var5, var2, var1);
case 117:
                var1 = undefined;
                return var1;
            }
        };
        var8['setRobloxSubgameDetectionConfig'] = var12;
        var12 = function checkForRobloxSubgameUpdate() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var3 = var1.bind(var2)();
                var2 = var3.checkForRobloxSubgameUpdate;
                var1 = null;
                if(!(var1 != var2)) { _fun0024_ip = 118; continue _fun0024 }
case 114:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
case 118:
                var1 = undefined;
                return var1;
            }
        };
        var8['checkForRobloxSubgameUpdate'] = var12;
        var12 = function setCandidateGamesCallback(arg1) {
            var3 = this;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = var3.getDiscordUtils;
            var3 = var2.bind(var3)();
            var2 = var3.setCandidateGamesCallback;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure2_slot0;
                var2 = var4.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot31;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['setCandidateGamesCallback'] = var12;
        var12 = function clearCandidateGamesCallback() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var2 = var1.bind(var2)();
            var1 = var2.clearCandidateGamesCallback;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var8['clearCandidateGamesCallback'] = var12;
        var12 = function setGameCandidateOverrides(arg1) {
            var5 = arg1;
            var2 = this;
            var1 = var2.getDiscordUtils;
            var3 = var1.bind(var2)();
            var2 = var3.setGameCandidateOverrides;
            var4 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.id;
                var3 = 'gameId';
                var1[2] = var4;
                var3 = var2.name;
                var2 = 'gameName';
                var1[1] = var3;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['setGameCandidateOverrides'] = var12;
        var12 = function setObserverDebugCallback(arg1, arg2, arg3) {
            var3 = this;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = var3.getDiscordUtils;
            var5 = var2.bind(var3)();
            var4 = var5.setObserverDebugCallback;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var8['setObserverDebugCallback'] = var12;
        var12 = function clearObserverDebugCallback() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var6 = var1.bind(var2)();
            var5 = var6.setObserverDebugCallback;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.GameDetectionDebugLevel;
            var4 = var2.NONE;
            var3 = null;
            var2 = 0;
            var2 = var5.bind(var6)(var3, var4, var2);
            return var1;
        };
        var8['clearObserverDebugCallback'] = var12;
        var12 = function shouldDisplayNotifications() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var2 = var1.bind(var2)();
            var1 = var2.shouldDisplayNotifications;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['shouldDisplayNotifications'] = var12;
        var12 = function getVoiceEngine() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = this;
                var3 = var4.requireModule;
                var1 = 'discord_voice';
                var1 = var3.bind(var4)(var1);
                var _closure2_slot0 = var1;
                var4 = _closure1_slot15;
                if(var4) { _fun0025_ip = 119; continue _fun0025 }
case 120:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.setNativeLogFn;
                var2 = function(arg1, arg2, arg3) {
                    var4 = _closure2_slot0;
                    var3 = var4.consoleLog;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '[';
                    var5 = arg1;
                    var2 = '] ';
                    var1 = arg3;
                    var2 = var7.bind(var6)(var5, var2, var1);
                    var1 = arg2;
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
case 119:
                var2 = true;
                _closure1_slot15 = var2;
                return var1;
            }
        };
        var8['getVoiceEngine'] = var12;
        var12 = function getDiscordUtils() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = this;
                var1 = _closure1_slot15;
                if(var1) { _fun0026_ip = 97; continue _fun0026 }
case 72: // try_start_0
                var1 = var3.getVoiceEngine;
                var1 = var1.bind(var3)();
case 31: // try_end0
                _fun0026_ip = 97; continue _fun0026;
case 114: // catch_target0
                CatchBlockStart(arg_register=0);
case 97:
                var2 = var3.requireModule;
                var1 = 'discord_utils';
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var8['getDiscordUtils'] = var12;
        var12 = function isSystemDarkMode() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var4 = this;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.isWindows;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0027_ip = 38; continue _fun0027 }
case 121:
                var2 = var4.getDiscordUtils;
                var6 = var2.bind(var4)();
                var5 = var6.isSystemDarkMode;
                var2 = null;
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0027_ip = 122; continue _fun0027 }
case 119:
                var4 = var5.call;
                var3 = var4.bind(var5)(var6);
case 122:
                var2 = var2 == var3;
                if(var2) { _fun0027_ip = 123; continue _fun0027 }
case 124:
                var2 = var3;
case 123:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var8['isSystemDarkMode'] = var12;
        var12 = function getDiscordIsElevated() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var4 = this;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.isWindows;
                var3 = var1.bind(var3)();
                var5 = null;
                var1 = null;
                if(!var3) { _fun0028_ip = 125; continue _fun0028 }
case 50:
                var3 = var4.getDiscordUtils;
                var3 = var3.bind(var4)();
                var3 = var3.getDiscordIsElevated;
                var3 = var5 != var3;
                var1 = null;
                if(!var3) { _fun0028_ip = 125; continue _fun0028 }
case 35:
                var3 = _closure1_slot16;
                if(!(var5 === var3)) { _fun0028_ip = 126; continue _fun0028 }
case 43:
                var3 = var4.getDiscordUtils;
                var4 = var3.bind(var4)();
                var3 = var4.getDiscordIsElevated;
                var3 = var3.bind(var4)();
                _closure1_slot16 = var3;
case 126:
                var1 = _closure1_slot16;
case 125:
                return var1;
            }
        };
        var8['getDiscordIsElevated'] = var12;
        var12 = function getGameUtils() {
            var3 = this;
            var2 = var3.requireModule;
            var1 = 'discord_game_utils';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8['getGameUtils'] = var12;
        var12 = function getCloudSync() {
            var3 = this;
            var2 = var3.requireModule;
            var1 = 'discord_cloudsync';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8['getCloudSync'] = var12;
        var12 = function getDispatch() {
            var3 = this;
            var2 = var3.requireModule;
            var1 = 'discord_dispatch';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8['getDispatch'] = var12;
        var12 = function setBadge(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var6 = arg1;
                var5 = this;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 5;
                var3 = var1[var7];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getPlatformName;
                var4 = var3.bind(var4)();
                var3 = 'darwin';
                if(!(var3 !== var4)) { _fun0029_ip = 127; continue _fun0029 }
case 128:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getPlatformName;
                var4 = var3.bind(var4)();
                var3 = 'win32';
                if(!(var3 !== var4)) { _fun0029_ip = 129; continue _fun0029 }
case 124:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getPlatformName;
                var4 = var3.bind(var4)();
                var3 = 'linux';
                if(!(var3 === var4)) { _fun0029_ip = 130; continue _fun0029 }
case 131:
                var3 = _closure1_slot6;
                var7 = var3.app;
                var4 = var7.setBadgeCount;
                var3 = 0;
                var8 = var6 >= var3;
                if(!var8) { _fun0029_ip = 132; continue _fun0029 }
case 133:
                var3 = var6;
case 132:
                var3 = var4.bind(var7)(var3);
                _fun0029_ip = 130; continue _fun0029;
case 129:
                var4 = var5.sendIPC;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 10;
                var3 = var8[var3];
                var3 = var7.bind(var1)(var3);
                var3 = var3.IPCEvents;
                var3 = var3.APP_BADGE_SET;
                var3 = var4.bind(var5)(var3, var6);
                _fun0029_ip = 130; continue _fun0029;
case 127:
                var4 = '•';
                var3 = -1;
                if(!(var3 !== var6)) { _fun0029_ip = 134; continue _fun0029 }
case 135:
                var3 = 0;
                var3 = var6 > var3;
                var5 = '';
                var4 = var5;
                if(!var3) { _fun0029_ip = 134; continue _fun0029 }
case 136:
                var3 = global;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var4 = var3.bind(var5)(var6);
case 134:
                var2 = _closure1_slot6;
                var2 = var2.app;
                var3 = var2.dock;
                var2 = var3.setBadge;
                var2 = var2.bind(var3)(var4);
case 130:
                return var1;
            }
        };
        var8['setBadge'] = var12;
        var12 = function setSystemTrayIcon(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0030_ip = 122; continue _fun0030 }
case 85:
                var4 = var5.sendIPC;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.IPCEvents;
                var3 = var2.SYSTEM_TRAY_SET_ICON;
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
case 122:
                return var1;
            }
        };
        var8['setSystemTrayIcon'] = var12;
        var12 = function setThumbarButtons(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.isPlatformEmbedded;
                if(!var4) { _fun0031_ip = 11; continue _fun0031 }
case 85:
                var2 = _closure1_slot6;
                var5 = var2.thumbar;
                var6 = null;
                var2 = var6 == var5;
                if(var2) { _fun0031_ip = 137; continue _fun0031 }
case 69:
                var4 = var5.setThumbarButtons;
                var2 = var6 == var4;
case 137:
                if(var2) { _fun0031_ip = 11; continue _fun0031 }
case 88:
                var4 = var5.setThumbarButtons;
                var2 = var3.isSystemDarkMode;
                var3 = var2.bind(var3)();
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
case 11:
                return var1;
            }
        };
        var8['setThumbarButtons'] = var12;
        var12 = function bounceDock(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var4 = var4.isPlatformEmbedded;
                if(!var4) { _fun0032_ip = 86; continue _fun0032 }
case 120:
                var4 = _closure1_slot6;
                var4 = var4.app;
                var _closure2_slot0 = var4;
                var6 = var4.dock;
                var5 = null;
                if(!(var5 == var6)) { _fun0032_ip = 138; continue _fun0032 }
case 86:
                return var3;
case 138:
                var6 = var4.dock;
                var5 = var6.bounce;
                var4 = arg1;
                var4 = var5.bind(var6)(var4);
                var _closure2_slot1 = var4;
                var2 = _closure1_slot4;
                var1 = function* () {
                    var1 = function* anon_0_() {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0033_ip = 4; continue _fun0033 }
case 82:
                            var2 = _closure2_slot1;
                            SaveGenerator(address=18);
case 139:
                            return var2;
case 140:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0033_ip = 84; continue _fun0033 }
case 81:
                            var3 = _closure2_slot0;
                            var4 = var3.dock;
                            var3 = var4.cancelBounce;
                            var3 = var3.bind(var4)(var2);
                            var3 = undefined;
                            return var3;
case 84:
                            return var2;
case 4:
                            return var1;
                        }
                    };
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var8['bounceDock'] = var12;
        var12 = function setSystemTrayApplications(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var5 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0034_ip = 122; continue _fun0034 }
case 85:
                var4 = var5.sendIPC;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.IPCEvents;
                var3 = var2.SYSTEM_TRAY_SET_APPLICATIONS;
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
case 122:
                return var1;
            }
        };
        var8['setSystemTrayApplications'] = var12;
        var13 = function get architecture() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.isPlatformEmbedded;
                var1 = '';
                if(!var3) { _fun0035_ip = 128; continue _fun0035 }
case 141:
                var2 = _closure1_slot6;
                var2 = var2.process;
                var1 = var2.arch;
case 128:
                return var1;
            }
        };
        var12 = 'architecture';
        Object.defineProperty(var8, var12, {get: var13, set: var1, enumerable: true});
        var13 = function get releaseChannel() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.isPlatformEmbedded;
                var1 = '';
                if(!var3) { _fun0036_ip = 69; continue _fun0036 }
case 141:
                var2 = _closure1_slot6;
                var3 = var2.app;
                var2 = var3.getReleaseChannel;
                var1 = var2.bind(var3)();
case 69:
                return var1;
            }
        };
        var12 = 'releaseChannel';
        Object.defineProperty(var8, var12, {get: var13, set: var1, enumerable: true});
        var13 = function get version() {
            var1 = _closure1_slot9;
            return var1;
        };
        var12 = 'version';
        Object.defineProperty(var8, var12, {get: var13, set: var1, enumerable: true});
        var13 = function get buildNumber() {
            var1 = _closure1_slot10;
            return var1;
        };
        var12 = 'buildNumber';
        Object.defineProperty(var8, var12, {get: var13, set: var1, enumerable: true});
        var13 = function get moduleVersions() {
            var1 = _closure1_slot11;
            return var1;
        };
        var12 = 'moduleVersions';
        Object.defineProperty(var8, var12, {get: var13, set: var1, enumerable: true});
        var13 = function get parsedOSRelease() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0037_ip = 142; continue _fun0037 }
case 78:
                var1 = new Array(0);
                _fun0037_ip = 77; continue _fun0037;
case 142:
                var2 = _closure1_slot6;
                var2 = var2.os;
                var4 = var2.release;
                var3 = var4.split;
                var2 = '.';
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = global;
                    var4 = var1.parseInt;
                    var3 = undefined;
                    var2 = arg1;
                    var1 = 10;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 77:
                return var1;
            }
        };
        var12 = 'parsedOSRelease';
        Object.defineProperty(var8, var12, {get: var13, set: var1, enumerable: true});
        var12 = function copy(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0038_ip = 69; continue _fun0038 }
case 78:
                var2 = _closure1_slot6;
                var4 = var2.clipboard;
                var3 = var4.copy;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 69:
                return var1;
            }
        };
        var8['copy'] = var12;
        var12 = function copyImage(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0039_ip = 143; continue _fun0039 }
case 40:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var7 = var6[var2];
                        var3 = undefined;
                        var9 = var5.bind(var3)(var7);
                        var8 = _closure1_slot0;
                        var7 = 5;
                        var7 = var6[var7];
                        var7 = var8.bind(var3)(var7);
                        var8 = var7.isPlatformEmbedded;
                        var7 = 'Copy image method called outside native app';
                        var7 = var9.bind(var3)(var8, var7);
                        var2 = var6[var2];
                        var6 = var5.bind(var3)(var2);
                        var2 = _closure1_slot6;
                        var2 = var2.clipboard;
                        var2 = var2.copyImage;
                        var5 = 'function';
                        var2 = typeof var2;
                        var5 = var5 === var2;
                        var2 = 'Copy image not supported';
                        var2 = var6.bind(var3)(var5, var2);
                        var6 = _closure1_slot30;
                        var2 = _closure2_slot0;
                        var2 = var6.bind(var3)(var2);
                        SaveGenerator(address=137);
case 57:
                        return var2;
case 44:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0039_ip = 144; continue _fun0039 }
case 145:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 11;
                        var6 = var8[var6];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.decideFileExtension;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var8 = var8.bind(var9)(var7, var6);
                        var6 = null;
                        if(!(var6 != var8)) { _fun0039_ip = 146; continue _fun0039 }
case 147:
                        var7 = _closure1_slot7;
                        var6 = var7.has;
                        var6 = var6.bind(var7)(var8);
                        if(var6) { _fun0039_ip = 148; continue _fun0039 }
case 146:
                        var7 = _closure2_slot0;
                        _fun0039_ip = 149; continue _fun0039;
case 148:
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var6 = var5.concat;
                        var5 = 'image.';
                        var7 = var6.bind(var5)(var8);
case 149:
                        var4 = _closure1_slot6;
                        var6 = var4.clipboard;
                        var5 = var6.copyImage;
                        var4 = global;
                        var8 = var4.Buffer;
                        var4 = var8.from;
                        var4 = var4.bind(var8)(var2);
                        var4 = var5.bind(var6)(var4, var7);
                        return var3;
case 144:
                        return var2;
case 143:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['copyImage'] = var12;
        var12 = function copyImageBlob(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0040_ip = 150; continue _fun0040 }
case 82:
                        var4 = _closure2_slot0;
                        var2 = var4.arrayBuffer;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=28);
case 80:
                        return var2;
case 34:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0040_ip = 9; continue _fun0040 }
case 78:
                        var4 = _closure1_slot6;
                        var6 = var4.clipboard;
                        var5 = var6.copyImage;
                        var4 = global;
                        var7 = var4.Buffer;
                        var4 = var7.from;
                        var4 = var4.bind(var7)(var2);
                        var3 = _closure2_slot1;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = undefined;
                        return var3;
case 9:
                        return var2;
case 150:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['copyImageBlob'] = var12;
        var12 = function canSaveImage(arg1, arg2) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var6 = arg1;
                var1 = null;
                if(!(var1 != var6)) { _fun0041_ip = 151; continue _fun0041 }
case 152:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0041_ip = 151; continue _fun0041 }
case 117:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 11;
                var3 = var7[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.decideFileExtension;
                var3 = arg2;
                var4 = var4.bind(var5)(var6, var3);
                var1 = var1 == var4;
                if(var1) { _fun0041_ip = 153; continue _fun0041 }
case 154:
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 153:
                return var1;
case 151:
                var1 = false;
                return var1;
            }
        };
        var8['canSaveImage'] = var12;
        var12 = function saveImage(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0042_ip = 155; continue _fun0042 }
case 40:
                        var8 = undefined;
                        var4 = undefined;
                        var5 = undefined;
                        var6 = undefined;
                        var13 = undefined;
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 3;
                        var3 = var9[var3];
                        var11 = var7.bind(var8)(var3);
                        var10 = _closure1_slot0;
                        var3 = 5;
                        var3 = var9[var3];
                        var3 = var10.bind(var8)(var3);
                        var10 = var3.isPlatformEmbedded;
                        var3 = 'Save image method called outside native app';
                        var3 = var11.bind(var8)(var10, var3);
                        var3 = 12;
                        var3 = var9[var3];
                        var10 = var7.bind(var8)(var3);
                        var9 = var10.toURLSafe;
                        var7 = _closure2_slot0;
                        var9 = var9.bind(var10)(var7);
                        var7 = null;
                        if(!(var7 != var9)) { _fun0042_ip = 156; continue _fun0042 }
case 157:
                        var12 = var9.pathname;
                        var11 = var12.split;
                        var10 = '/';
                        var11 = var11.bind(var12)(var10);
                        var10 = var11.pop;
                        var10 = var10.bind(var11)();
                        var12 = var7 != var10;
                        var11 = 'unknown';
                        if(!var12) { _fun0042_ip = 158; continue _fun0042 }
case 159:
                        var11 = var10;
case 158:
                        var4 = var11;
                        var10 = _closure1_slot27;
                        var4 = var10.bind(var8)(var11);
                        var11 = var9.searchParams;
                        var10 = var11.get;
                        var9 = 'format';
                        var11 = var10.bind(var11)(var9);
                        if(!(var7 == var11)) { _fun0042_ip = 62; continue _fun0042 }
case 160:
                        var10 = var4;
                        var9 = var10.includes;
                        var15 = '.';
                        var9 = var9.bind(var10)(var15);
                        if(var9) { _fun0042_ip = 161; continue _fun0042 }
case 162:
                        var14 = var4;
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var9 = 11;
                        var9 = var12[var9];
                        var16 = var10.bind(var8)(var9);
                        var12 = var16.decideFileExtension;
                        var10 = _closure2_slot0;
                        var9 = _closure2_slot1;
                        var9 = var12.bind(var16)(var10, var9);
                        if(!(var7 == var9)) { _fun0042_ip = 12; continue _fun0042 }
case 163:
                        var9 = _closure2_slot2;
case 12:
                        var10 = var7 != var9;
                        var12 = 'png';
                        if(!var10) { _fun0042_ip = 164; continue _fun0042 }
case 96:
                        var12 = var9;
case 164:
                        var9 = global;
                        var9 = var9.HermesInternal;
                        var10 = var9.concat;
                        var9 = '';
                        var4 = var10.bind(var9)(var14, var15, var12);
                        _fun0042_ip = 161; continue _fun0042;
case 62:
                        var10 = var11.replace;
                        var9 = _closure1_slot21;
                        var14 = '';
                        var10 = var10.bind(var11)(var9, var14);
                        var9 = var10.toLowerCase;
                        var12 = var9.bind(var10)();
                        var10 = var12.length;
                        var9 = 0;
                        if(!(var10 > var9)) { _fun0042_ip = 161; continue _fun0042 }
case 165:
                        var11 = var4;
                        var10 = var11.replace;
                        var9 = _closure1_slot22;
                        var11 = var10.bind(var11)(var9, var14);
                        var9 = global;
                        var9 = var9.HermesInternal;
                        var10 = var9.concat;
                        var9 = '.';
                        var4 = var10.bind(var14)(var11, var9, var12);
case 161:
                        var9 = _closure1_slot30;
                        var3 = _closure2_slot0;
                        var3 = var9.bind(var8)(var3);
                        SaveGenerator(address=409);
case 166:
                        return var3;
case 167:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                        if(var9) { _fun0042_ip = 168; continue _fun0042 }
case 169:
                        var9 = global;
                        var10 = var9.Buffer;
                        var9 = var10.from;
                        var6 = var9.bind(var10)(var3);
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var9 = 6;
                        var10 = var10[var9];
                        var10 = var11.bind(var8)(var10);
                        var12 = var10.Storage;
                        var11 = var12.get;
                        var10 = _closure1_slot17;
                        var10 = var11.bind(var12)(var10);
                        var13 = var10;
                        var11 = 'string';
                        var10 = typeof var10;
                        if(!(var11 !== var10)) { _fun0042_ip = 170; continue _fun0042 }
case 171:
                        var13 = undefined;
case 170:
                        var10 = _closure1_slot6;
                        var10 = var10.fileManager;
                        var10 = var10.saveWithDialog2;
                        var11 = 'function';
                        var10 = typeof var10;
                        if(!(var11 !== var10)) { _fun0042_ip = 172; continue _fun0042 }
case 173: // try_start_0
                        var10 = _closure1_slot6;
                        var15 = var10.fileManager;
                        var14 = var15.saveWithDialog;
                        var12 = var6;
                        var11 = var4;
                        var10 = var13;
                        var16 = var7 != var10;
                        var10 = undefined;
                        if(!var16) { _fun0042_ip = 174; continue _fun0042 }
case 175:
                        var10 = var13;
case 174:
                        var10 = var14.bind(var15)(var12, var11, var10);
                        SaveGenerator(address=567);
case 176:
                        return var10;
case 177:
                        ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                        if(var11) { _fun0042_ip = 178; continue _fun0042 }
case 179:
                        var5 = var10;
case 180: // try_end0
                        _fun0042_ip = 181; continue _fun0042;
case 178:
                        return var10;
case 182: // catch_target0
                        CatchBlockStart(arg_register=9);
                        var10 = _closure1_slot23;
                        var10 = var10.ERRORED;
                        return var10;
case 172:
                        var10 = _closure1_slot6;
                        var12 = var10.fileManager;
                        var11 = var12.saveWithDialog2;
                        var10 = var6;
                        var6 = var4;
                        var4 = var13;
                        var14 = var7 != var4;
                        var4 = undefined;
                        if(!var14) { _fun0042_ip = 183; continue _fun0042 }
case 184:
                        var4 = var13;
case 183:
                        var4 = var11.bind(var12)(var10, var6, var4);
                        SaveGenerator(address=644);
case 185:
                        return var4;
case 186:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0042_ip = 187; continue _fun0042 }
case 188:
                        if(!(var7 != var4)) { _fun0042_ip = 189; continue _fun0042 }
case 190:
                        var6 = var4.canceledByUser;
                        if(var6) { _fun0042_ip = 191; continue _fun0042 }
case 192:
                        var5 = var4.directory;
case 181:
                        var6 = var5;
                        if(!(var7 != var6)) { _fun0042_ip = 193; continue _fun0042 }
case 194:
                        var7 = var5;
                        var6 = '';
                        if(!(var6 !== var7)) { _fun0042_ip = 193; continue _fun0042 }
case 195:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var9];
                        var6 = var7.bind(var8)(var6);
                        var8 = var6.Storage;
                        var7 = var8.set;
                        var6 = _closure1_slot17;
                        var5 = var7.bind(var8)(var6, var5);
                        var5 = _closure1_slot23;
                        var5 = var5.SAVED;
                        _fun0042_ip = 196; continue _fun0042;
case 193:
                        var6 = _closure1_slot23;
                        var5 = var6.ERRORED;
case 196:
                        return var5;
case 191:
                        var5 = _closure1_slot23;
                        var5 = var5.CANCELED;
                        return var5;
case 189:
                        var5 = _closure1_slot23;
                        var5 = var5.ERRORED;
                        return var5;
case 187:
                        return var4;
case 168:
                        return var3;
case 156:
                        var2 = _closure1_slot23;
                        var2 = var2.ERRORED;
                        return var2;
case 155:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['saveImage'] = var12;
        var12 = function saveFile(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0043_ip = 164; continue _fun0043 }
case 40:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 3;
                        var2 = var5[var2];
                        var8 = undefined;
                        var7 = var3.bind(var8)(var2);
                        var6 = _closure1_slot0;
                        var2 = 5;
                        var2 = var5[var2];
                        var2 = var6.bind(var8)(var2);
                        var6 = var2.isPlatformEmbedded;
                        var2 = 'Save file method called outside native app';
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = 12;
                        var2 = var5[var2];
                        var6 = var3.bind(var8)(var2);
                        var5 = var6.toURLSafe;
                        var2 = _closure2_slot0;
                        var5 = var5.bind(var6)(var2);
                        var2 = null;
                        if(!(var2 != var5)) { _fun0043_ip = 96; continue _fun0043 }
case 54:
                        var6 = _closure2_slot1;
                        if(!(var2 == var6)) { _fun0043_ip = 197; continue _fun0043 }
case 157:
                        var7 = var5.pathname;
                        var6 = var7.split;
                        var5 = '/';
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.pop;
                        var5 = var5.bind(var6)();
                        _fun0043_ip = 198; continue _fun0043;
case 197:
                        var5 = _closure2_slot1;
case 198:
                        var7 = var2 != var5;
                        var6 = 'unknown';
                        if(!var7) { _fun0043_ip = 129; continue _fun0043 }
case 14:
                        var6 = var5;
case 129:
                        var5 = _closure2_slot1;
                        var7 = var6;
                        if(!(var2 == var5)) { _fun0043_ip = 42; continue _fun0043 }
case 199:
                        var5 = _closure1_slot27;
                        var7 = var5.bind(var8)(var6);
case 42:
                        var5 = _closure1_slot28;
                        var3 = _closure2_slot0;
                        var3 = var5.bind(var8)(var3);
                        SaveGenerator(address=203);
case 200:
                        return var3;
case 201:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0043_ip = 93; continue _fun0043 }
case 146:
                        var5 = global;
                        var6 = var5.Buffer;
                        var5 = var6.from;
                        var6 = var5.bind(var6)(var3);
                        var4 = _closure1_slot6;
                        var5 = var4.fileManager;
                        var4 = var5.saveWithDialog;
                        var4 = var4.bind(var5)(var6, var7, var8);
                        SaveGenerator(address=254);
case 202:
                        return var4;
case 203:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0043_ip = 60; continue _fun0043 }
case 134:
                        var6 = var2 == var4;
                        var5 = null;
                        if(var6) { _fun0043_ip = 204; continue _fun0043 }
case 205:
                        var5 = var4;
case 204:
                        return var5;
case 60:
                        return var4;
case 93:
                        return var3;
case 96:
                        return var2;
case 164:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['saveFile'] = var12;
        var12 = function downloadMLModelFile(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0044_ip = 17; continue _fun0044 }
case 40:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 3;
                        var2 = var9[var4];
                        var8 = undefined;
                        var7 = var5.bind(var8)(var2);
                        var6 = _closure1_slot0;
                        var2 = 5;
                        var2 = var9[var2];
                        var2 = var6.bind(var8)(var2);
                        var6 = var2.isPlatformEmbedded;
                        var2 = 'Download ML model file method called outside native app';
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = 12;
                        var2 = var9[var2];
                        var10 = var5.bind(var8)(var2);
                        var7 = var10.toURLSafe;
                        var6 = _closure2_slot0;
                        var7 = var7.bind(var10)(var6);
                        var4 = var9[var4];
                        var5 = var5.bind(var8)(var4);
                        var4 = 'Could not download ML model, fileSrc was not a valid path';
                        var4 = var5.bind(var8)(var7, var4);
                        var3 = _closure1_slot6;
                        var5 = var3.fileManager;
                        var4 = var5.maybeDownloadMLModelFile;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot2;
                        var2 = var4.bind(var5)(var6, var3, var2);
                        SaveGenerator(address=157);
case 206:
                        return var2;
case 159:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0044_ip = 129; continue _fun0044 }
case 14:
                        return var2;
case 129:
                        return var2;
case 17:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['downloadMLModelFile'] = var12;
        var12 = function stopMLModelDownloads() {
            var1 = _closure1_slot6;
            var2 = var1.fileManager;
            var1 = var2.stopMLModelDownloads;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var8['stopMLModelDownloads'] = var12;
        var12 = function canCheckMLModelFilesExist() {
            var1 = _closure1_slot6;
            var1 = var1.fileManager;
            var1 = var1.checkMLModelFilesExist;
            var2 = 'function';
            var1 = typeof var1;
            var1 = var2 === var1;
            return var1;
        };
        var8['canCheckMLModelFilesExist'] = var12;
        var12 = function checkMLModelFilesExist(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0045_ip = 128; continue _fun0045 }
case 82:
                        var2 = _closure1_slot6;
                        var4 = var2.fileManager;
                        var3 = var4.checkMLModelFilesExist;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=42);
case 142:
                        return var2;
case 51:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0045_ip = 100; continue _fun0045 }
case 207:
                        return var2;
case 100:
                        return var2;
case 128:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['checkMLModelFilesExist'] = var12;
        var12 = function cleanupUnusedMLModelFiles(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0046_ip = 128; continue _fun0046 }
case 82:
                        var2 = _closure1_slot6;
                        var4 = var2.fileManager;
                        var3 = var4.cleanupUnusedMLModelFiles;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=42);
case 142:
                        return var2;
case 51:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0046_ip = 100; continue _fun0046 }
case 207:
                        return var2;
case 100:
                        return var2;
case 128:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['cleanupUnusedMLModelFiles'] = var12;
        var12 = function downloadClipsFile(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0047_ip = 17; continue _fun0047 }
case 40:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 3;
                        var2 = var9[var4];
                        var8 = undefined;
                        var7 = var5.bind(var8)(var2);
                        var6 = _closure1_slot0;
                        var2 = 5;
                        var2 = var9[var2];
                        var2 = var6.bind(var8)(var2);
                        var6 = var2.isPlatformEmbedded;
                        var2 = 'Download clips file method called outside native app';
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = 12;
                        var2 = var9[var2];
                        var10 = var5.bind(var8)(var2);
                        var7 = var10.toURLSafe;
                        var6 = _closure2_slot0;
                        var7 = var7.bind(var10)(var6);
                        var4 = var9[var4];
                        var5 = var5.bind(var8)(var4);
                        var4 = 'Could not download clips file, fileSrc was not a valid path';
                        var4 = var5.bind(var8)(var7, var4);
                        var3 = _closure1_slot6;
                        var5 = var3.fileManager;
                        var4 = var5.maybeDownloadClipsFile;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot2;
                        var2 = var4.bind(var5)(var6, var3, var2);
                        SaveGenerator(address=157);
case 206:
                        return var2;
case 159:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0047_ip = 129; continue _fun0047 }
case 14:
                        return var2;
case 129:
                        return var2;
case 17:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['downloadClipsFile'] = var12;
        var12 = function canCheckClipsFilesExist() {
            var1 = _closure1_slot6;
            var1 = var1.fileManager;
            var1 = var1.checkClipsFilesExist;
            var2 = 'function';
            var1 = typeof var1;
            var1 = var2 === var1;
            return var1;
        };
        var8['canCheckClipsFilesExist'] = var12;
        var12 = function checkClipsFilesExist(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0048_ip = 128; continue _fun0048 }
case 82:
                        var2 = _closure1_slot6;
                        var4 = var2.fileManager;
                        var3 = var4.checkClipsFilesExist;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=42);
case 142:
                        return var2;
case 51:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0048_ip = 100; continue _fun0048 }
case 207:
                        return var2;
case 100:
                        return var2;
case 128:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['checkClipsFilesExist'] = var12;
        var12 = function cleanupUnusedClipsFiles(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0049_ip = 128; continue _fun0049 }
case 82:
                        var2 = _closure1_slot6;
                        var4 = var2.fileManager;
                        var3 = var4.cleanupUnusedClipsFiles;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=42);
case 142:
                        return var2;
case 51:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0049_ip = 100; continue _fun0049 }
case 207:
                        return var2;
case 100:
                        return var2;
case 128:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['cleanupUnusedClipsFiles'] = var12;
        var12 = function getClipsDataDirSync() {
            var1 = _closure1_slot6;
            var2 = var1.fileManager;
            var1 = var2.getClipsDataDirSync;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['getClipsDataDirSync'] = var12;
        var12 = function getClipsSentryDirSync() {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.fileManager;
                var3 = var2.getClipsSentryDirSync;
                var2 = null;
                if(!(var2 == var3)) { _fun0050_ip = 208; continue _fun0050 }
case 114:
                var2 = undefined;
                return var2;
case 208:
                var1 = _closure1_slot6;
                var2 = var1.fileManager;
                var1 = var2.getClipsSentryDirSync;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var8['getClipsSentryDirSync'] = var12;
        var12 = function downloadOpenH264(arg1, arg2, arg3, arg4) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var2 = arg4;
            var _closure2_slot3 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0051_ip = 209; continue _fun0051 }
case 40:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 3;
                        var2 = var9[var4];
                        var8 = undefined;
                        var7 = var5.bind(var8)(var2);
                        var6 = _closure1_slot0;
                        var2 = 5;
                        var2 = var9[var2];
                        var2 = var6.bind(var8)(var2);
                        var6 = var2.isPlatformEmbedded;
                        var2 = 'Download OpenH264 file method called outside native app';
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = 12;
                        var2 = var9[var2];
                        var10 = var5.bind(var8)(var2);
                        var6 = var10.toURLSafe;
                        var7 = _closure2_slot0;
                        var6 = var6.bind(var10)(var7);
                        var4 = var9[var4];
                        var5 = var5.bind(var8)(var4);
                        var4 = 'Could not download OpenH264, fileSrc was not a valid path';
                        var4 = var5.bind(var8)(var6, var4);
                        var3 = _closure1_slot6;
                        var6 = var3.fileManager;
                        var5 = var6.maybeDownloadOpenH264;
                        var13 = _closure2_slot1;
                        var12 = _closure2_slot2;
                        var11 = _closure2_slot3;
                        var15 = var6;
                        var14 = var7;
                        var2 = var15[var5](var14, var13, var12, var11, var10);
                        SaveGenerator(address=164);
case 210:
                        return var2;
case 211:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0051_ip = 212; continue _fun0051 }
case 213:
                        return var2;
case 212:
                        return var2;
case 209:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['downloadOpenH264'] = var12;
        var12 = function cleanupUnusedOpenH264Files(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0052_ip = 128; continue _fun0052 }
case 82:
                        var2 = _closure1_slot6;
                        var4 = var2.fileManager;
                        var3 = var4.cleanupUnusedOpenH264Files;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=42);
case 142:
                        return var2;
case 51:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0052_ip = 100; continue _fun0052 }
case 207:
                        return var2;
case 100:
                        return var2;
case 128:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['cleanupUnusedOpenH264Files'] = var12;
        var12 = function getOpenH264LibraryPath() {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(var3) { _fun0053_ip = 120; continue _fun0053 }
case 78:
                return var1;
case 120:
                var3 = _closure1_slot6;
                var3 = var3.fileManager;
                var4 = var3.getOpenH264LibraryPathSync;
                var3 = null;
                var3 = var3 == var4;
                var1 = undefined;
                if(var3) { _fun0053_ip = 74; continue _fun0053 }
case 105:
                var2 = _closure1_slot6;
                var3 = var2.fileManager;
                var2 = var3.getOpenH264LibraryPathSync;
                var1 = var2.bind(var3)();
case 74:
                return var1;
            }
        };
        var8['getOpenH264LibraryPath'] = var12;
        var12 = function canCopyImage() {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var6 = arguments[0];
                var5 = undefined;
                if(!(var6 === var5)) { _fun0054_ip = 214; continue _fun0054 }
case 152:
                var6 = undefined;
case 214:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.isPlatformEmbedded;
                if(var2) { _fun0054_ip = 121; continue _fun0054 }
case 117:
                var2 = false;
                return var2;
case 121:
                var2 = _closure1_slot6;
                var2 = var2.clipboard;
                var2 = var2.copyImage;
                var3 = 'function';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0054_ip = 215; continue _fun0054 }
case 119:
                var2 = null;
                if(!(var2 != var6)) { _fun0054_ip = 44; continue _fun0054 }
case 87:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 11;
                var3 = var7[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.decideFileExtension;
                var3 = var3.bind(var4)(var6, var5);
                if(!(var2 != var3)) { _fun0054_ip = 44; continue _fun0054 }
case 157:
                var2 = _closure1_slot7;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0054_ip = 44; continue _fun0054 }
case 216:
                var1 = false;
                return var1;
case 44:
                var1 = true;
                return var1;
case 215:
                var1 = false;
                return var1;
            }
        };
        var8['canCopyImage'] = var12;
        var12 = function cut() {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0055_ip = 128; continue _fun0055 }
case 78:
                var2 = _closure1_slot6;
                var3 = var2.clipboard;
                var2 = var3.cut;
                var2 = var2.bind(var3)();
case 128:
                return var1;
            }
        };
        var8['cut'] = var12;
        var12 = function paste() {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0056_ip = 128; continue _fun0056 }
case 78:
                var2 = _closure1_slot6;
                var3 = var2.clipboard;
                var2 = var3.paste;
                var2 = var2.bind(var3)();
case 128:
                return var1;
            }
        };
        var8['paste'] = var12;
        var12 = function readClipboard() {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.isPlatformEmbedded;
                var1 = '';
                if(!var3) { _fun0057_ip = 69; continue _fun0057 }
case 141:
                var2 = _closure1_slot6;
                var3 = var2.clipboard;
                var2 = var3.read;
                var1 = var2.bind(var3)();
case 69:
                return var1;
            }
        };
        var8['readClipboard'] = var12;
        var12 = function clipboardHasMixedContent() {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.isPlatformEmbedded;
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0058_ip = 217; continue _fun0058 }
case 142:
                var2 = _closure1_slot6;
                var2 = var2.clipboard;
                var5 = var2.hasMixedContent;
                var2 = null;
                var5 = var2 == var5;
                var3 = undefined;
                if(var5) { _fun0058_ip = 77; continue _fun0058 }
case 30:
                var4 = _closure1_slot6;
                var5 = var4.clipboard;
                var4 = var5.hasMixedContent;
                var3 = var4.bind(var5)();
case 77:
                var2 = var2 != var3;
                if(!var2) { _fun0058_ip = 38; continue _fun0058 }
case 123:
                var2 = var3;
case 38:
                var1 = var2;
case 217:
                return var1;
            }
        };
        var8['clipboardHasMixedContent'] = var12;
        var12 = function on(arg1, arg2) {
            var1 = _closure1_slot6;
            var4 = var1.ipc;
            var3 = var4.on;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var8['on'] = var12;
        var12 = function onIPC(arg1, arg2) {
            var1 = _closure1_slot6;
            var4 = var1.ipc;
            var3 = var4.on;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var8['onIPC'] = var12;
        var12 = function invoke(arg1, arg2) {
            var5 = 1;
            var9 = var5;
            var8 = copyRestArgs(var9);
            var1 = _closure1_slot6;
            var3 = var1.ipc;
            var2 = var3.invoke;
            var1 = new Array(1);
            var6 = arg1;
            var1[0] = var6;
            var9 = var1;
            var7 = var5;
            var4 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var1;
            var7 = var3;
            var1 = apply(var9, var8, var7);
            return var1;
        };
        var8['invoke'] = var12;
        var12 = function invokeIPC(arg1, arg2) {
            var5 = 1;
            var9 = var5;
            var8 = copyRestArgs(var9);
            var1 = _closure1_slot6;
            var3 = var1.ipc;
            var2 = var3.invoke;
            var1 = new Array(1);
            var6 = arg1;
            var1[0] = var6;
            var9 = var1;
            var7 = var5;
            var4 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var1;
            var7 = var3;
            var1 = apply(var9, var8, var7);
            return var1;
        };
        var8['invokeIPC'] = var12;
        var12 = function send(arg1, arg2) {
            var5 = 1;
            var9 = var5;
            var8 = copyRestArgs(var9);
            var1 = _closure1_slot6;
            var3 = var1.ipc;
            var2 = var3.send;
            var1 = new Array(1);
            var6 = arg1;
            var1[0] = var6;
            var9 = var1;
            var7 = var5;
            var4 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var1;
            var7 = var3;
            var1 = apply(var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var8['send'] = var12;
        var12 = function sendIPC(arg1, arg2) {
            var5 = 1;
            var9 = var5;
            var8 = copyRestArgs(var9);
            var1 = _closure1_slot6;
            var3 = var1.ipc;
            var2 = var3.send;
            var1 = new Array(1);
            var6 = arg1;
            var1[0] = var6;
            var9 = var1;
            var7 = var5;
            var4 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var1;
            var7 = var3;
            var1 = apply(var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var8['sendIPC'] = var12;
        var12 = function isIPCReady() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0059_ip = 141; continue _fun0059 }
case 78:
                var1 = true;
                return var1;
case 141: // try_start_0
                var5 = _closure1_slot6;
                var4 = null;
                var5 = var4 == var5;
                var3 = undefined;
                if(var5) { _fun0059_ip = 105; continue _fun0059 }
case 218:
                var5 = _closure1_slot6;
                var3 = var5.ipc;
case 105:
                var3 = var4 != var3;
                var1 = var3;
                if(!var3) { _fun0059_ip = 217; continue _fun0059 }
case 76:
                var2 = _closure1_slot6;
                var2 = var2.ipc;
                var2 = var2.send;
                var3 = 'function';
                var2 = typeof var2;
                var1 = var3 === var2;
case 217: // try_end0
                return var1;
case 126: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = false;
                return var1;
            }
        };
        var8['isIPCReady'] = var12;
        var12 = function waitForIPCReady() {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var4 = arguments[0];
                var3 = arguments[1];
                var2 = undefined;
                if(!(var4 === var2)) { _fun0060_ip = 29; continue _fun0060 }
case 32:
                var4 = 5000;
case 29:
                var _closure2_slot0 = var4;
                if(!(var3 === var2)) { _fun0060_ip = 120; continue _fun0060 }
case 34:
                var4 = global;
                var3 = var4.window;
case 120:
                var _closure2_slot1 = var3;
                var3 = this;
                var _closure2_slot2 = var3;
                var3 = _closure1_slot4;
                var1 = function* () {
                    var1 = function* anon_0_() {
                        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0061_ip = 159; continue _fun0061 }
case 49:
                            var7 = global;
                            var3 = var7.Date;
                            var2 = var3.now;
                            var6 = var2.bind(var3)();
                            var3 = var7.Date;
                            var2 = var3.now;
                            var2 = var2.bind(var3)();
                            var3 = var2 - var6;
                            var2 = _closure2_slot0;
                            if(!(var3 < var2)) { _fun0061_ip = 108; continue _fun0061 }
case 219:
                            var3 = _closure2_slot2;
                            var2 = var3.isIPCReady;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0061_ip = 198; continue _fun0061 }
case 53:
                            var4 = var7.Promise;
                            var2 = var4.prototype;
                            var3 = Object.create(var2, {constructor: {value: var4}});
                            var9 = function(arg1) {
                                var3 = _closure2_slot1;
                                var2 = var3.requestAnimationFrame;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var10 = var3;
                            var2 = new var10[var4](var9, var8);
                            var2 = var2 instanceof Object ? var2 : var3;
                            SaveGenerator(address=111);
case 220:
                            return var2;
case 79:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0061_ip = 221; continue _fun0061 }
case 222:
                            var4 = var7.Date;
                            var3 = var4.now;
                            var3 = var3.bind(var4)();
                            var4 = var3 - var6;
                            var3 = _closure2_slot0;
                            if(var4 < var3) { _fun0061_ip = 219; continue _fun0061 }
case 108:
                            var3 = false;
                            return var3;
case 221:
                            return var2;
case 198:
                            var2 = true;
                            return var2;
case 159:
                            return var1;
                        }
                    };
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var8['waitForIPCReady'] = var12;
        var12 = function flashFrame(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.flashFrame;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['flashFrame'] = var12;
        var12 = function webAuthnRegister(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0062_ip = 123; continue _fun0062 }
case 82:
                        var2 = _closure1_slot6;
                        var5 = var2.nativeModules;
                        var4 = var5.ensureModule;
                        var2 = 'discord_webauthn';
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=41);
case 113:
                        return var2;
case 68:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0062_ip = 124; continue _fun0062 }
case 121:
                        var3 = _closure1_slot6;
                        var5 = var3.webAuthn;
                        var4 = var5.webAuthnRegister;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=79);
case 223:
                        return var3;
case 52:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0062_ip = 224; continue _fun0062 }
case 154:
                        return var3;
case 224:
                        return var3;
case 124:
                        return var2;
case 123:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['webAuthnRegister'] = var12;
        var12 = function webAuthnAuthenticate(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0063_ip = 123; continue _fun0063 }
case 82:
                        var2 = _closure1_slot6;
                        var5 = var2.nativeModules;
                        var4 = var5.ensureModule;
                        var2 = 'discord_webauthn';
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=41);
case 113:
                        return var2;
case 68:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0063_ip = 124; continue _fun0063 }
case 121:
                        var3 = _closure1_slot6;
                        var5 = var3.webAuthn;
                        var4 = var5.webAuthnAuthenticate;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=79);
case 223:
                        return var3;
case 52:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0063_ip = 224; continue _fun0063 }
case 154:
                        return var3;
case 224:
                        return var3;
case 124:
                        return var2;
case 123:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['webAuthnAuthenticate'] = var12;
        var12 = function minimize(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.minimize;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['minimize'] = var12;
        var12 = function restore(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.restore;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['restore'] = var12;
        var12 = function maximize(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.maximize;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['maximize'] = var12;
        var12 = function focus(arg1) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var5 = arguments[1];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0064_ip = 32; continue _fun0064 }
case 49:
                var5 = false;
case 32:
                var2 = var5;
                if(!var2) { _fun0064_ip = 218; continue _fun0064 }
case 29:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var6 = var6.bind(var1)(var3);
                var3 = var6.isWindows;
                var2 = var3.bind(var6)();
case 218:
                if(!var2) { _fun0064_ip = 225; continue _fun0064 }
case 28:
                var3 = var4.minimize;
                var2 = null;
                var2 = var3.bind(var4)(var2);
case 225:
                var2 = _closure1_slot6;
                var4 = var2.window;
                var3 = var4.focus;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            }
        };
        var8['focus'] = var12;
        var12 = function blur() {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0065_ip = 4; continue _fun0065 }
case 78:
                var3 = _closure1_slot6;
                var3 = var3.window;
                var4 = var3.blur;
                var3 = null;
                if(!(var3 == var4)) { _fun0065_ip = 226; continue _fun0065 }
case 4:
                var3 = global;
                var4 = var3.window;
                var3 = var4.blur;
                var3 = var3.bind(var4)();
                _fun0065_ip = 123; continue _fun0065;
case 226:
                var2 = _closure1_slot6;
                var3 = var2.window;
                var2 = var3.blur;
                var2 = var2.bind(var3)();
case 123:
                return var1;
            }
        };
        var8['blur'] = var12;
        var12 = function fullscreen(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.fullscreen;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['fullscreen'] = var12;
        var12 = function close(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.close;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['close'] = var12;
        var12 = function clearNavigationHistory() {
            var3 = _closure1_slot32;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.IPCEvents;
            var2 = var2.NAVIGATION_HISTORY_CLEAR;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8['clearNavigationHistory'] = var12;
        var12 = function setAlwaysOnTop(arg1, arg2) {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.window;
                var2 = var2.setAlwaysOnTop;
                var3 = 'function';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0066_ip = 28; continue _fun0066 }
case 208:
                var1 = _closure1_slot6;
                var4 = var1.window;
                var3 = var4.setAlwaysOnTop;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 28:
                var1 = undefined;
                return var1;
            }
        };
        var8['setAlwaysOnTop'] = var12;
        var12 = function isAlwaysOnTop(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0067_ip = 122; continue _fun0067 }
case 82:
                        var3 = _closure1_slot6;
                        var3 = var3.window;
                        var4 = var3.isAlwaysOnTop;
                        var5 = 'function';
                        var4 = typeof var4;
                        var3 = false;
                        if(!(var5 === var4)) { _fun0067_ip = 43; continue _fun0067 }
case 141:
                        var2 = _closure1_slot6;
                        var5 = var2.window;
                        var4 = var5.isAlwaysOnTop;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=69);
case 30:
                        return var2;
case 225:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        var3 = var2;
                        if(var4) { _fun0067_ip = 75; continue _fun0067 }
case 43:
                        return var3;
case 75:
                        return var2;
case 122:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['isAlwaysOnTop'] = var12;
        var12 = function showInactive(arg1) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var1 = _closure1_slot6;
                var5 = null;
                var4 = var5 == var1;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0068_ip = 83; continue _fun0068 }
case 29:
                var4 = _closure1_slot6;
                var4 = var4.window;
                var5 = var5 == var4;
                var3 = undefined;
                if(var5) { _fun0068_ip = 83; continue _fun0068 }
case 141:
                var3 = var4.showInactive;
case 83:
                var4 = 'function';
                var3 = typeof var3;
                if(!(var4 === var3)) { _fun0068_ip = 43; continue _fun0068 }
case 4:
                var2 = _closure1_slot6;
                var4 = var2.window;
                var3 = var4.showInactive;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 43:
                return var1;
            }
        };
        var8['showInactive'] = var12;
        var12 = function setMinimumSize(arg1, arg2) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var1 = _closure1_slot6;
                var4 = null;
                var2 = var4 == var1;
                var1 = undefined;
                var5 = undefined;
                if(var2) { _fun0069_ip = 120; continue _fun0069 }
case 29:
                var3 = _closure1_slot6;
                var3 = var3.window;
                var2 = var4 == var3;
                var5 = var3;
case 120:
                if(var2) { _fun0069_ip = 5; continue _fun0069 }
case 113:
                var3 = var5.setMinimumSize;
                var2 = var4 == var3;
case 5:
                if(var2) { _fun0069_ip = 35; continue _fun0069 }
case 84:
                var4 = var5.setMinimumSize;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
case 35:
                return var1;
            }
        };
        var8['setMinimumSize'] = var12;
        var12 = function setTrafficLightPosition(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var5 = this;
                var2 = arg1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 5;
                var4 = var1[var7];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.isPlatformEmbedded;
                if(!var4) { _fun0070_ip = 227; continue _fun0070 }
case 142:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var6 = var6.bind(var1)(var4);
                var4 = var6.getPlatformName;
                var6 = var4.bind(var6)();
                var4 = 'darwin';
                if(!(var4 === var6)) { _fun0070_ip = 227; continue _fun0070 }
case 223: // try_start_0
                var4 = var5.sendIPC;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 10;
                var3 = var7[var3];
                var3 = var6.bind(var1)(var3);
                var3 = var3.IPCEvents;
                var3 = var3.WINDOW_SET_TRAFFIC_LIGHT_POSITION;
                var2 = var4.bind(var5)(var3, var2);
case 89: // try_end0
                _fun0070_ip = 227; continue _fun0070;
case 228: // catch_target0
                CatchBlockStart(arg_register=1);
case 227:
                return var1;
            }
        };
        var8['setTrafficLightPosition'] = var12;
        var12 = function purgeMemory() {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0071_ip = 128; continue _fun0071 }
case 78:
                var2 = _closure1_slot6;
                var3 = var2.processUtils;
                var2 = var3.purgeMemory;
                var2 = var2.bind(var3)();
case 128:
                return var1;
            }
        };
        var8['purgeMemory'] = var12;
        var12 = function updateCrashReporter(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.crashReporter;
            var2 = var3.updateCrashReporter;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['updateCrashReporter'] = var12;
        var12 = function triggerJSException(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.crashReporter;
            var2 = var3.triggerJSException;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['triggerJSException'] = var12;
        var12 = function flushDNSCache() {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0072_ip = 128; continue _fun0072 }
case 78:
                var2 = _closure1_slot6;
                var3 = var2.processUtils;
                var2 = var3.flushDNSCache;
                var2 = var2.bind(var3)();
case 128:
                return var1;
            }
        };
        var8['flushDNSCache'] = var12;
        var12 = function supportsFeature(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.features;
            var2 = var3.supports;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8['supportsFeature'] = var12;
        var12 = function getEnableHardwareAcceleration() {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                var1 = !var1;
                if(var1) { _fun0073_ip = 98; continue _fun0073 }
case 85:
                var2 = _closure1_slot6;
                var3 = var2.gpuSettings;
                var2 = var3.getEnableHardwareAcceleration;
                var1 = var2.bind(var3)();
case 98:
                return var1;
            }
        };
        var8['getEnableHardwareAcceleration'] = var12;
        var12 = function setEnableHardwareAcceleration(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.gpuSettings;
            var2 = var3.setEnableHardwareAcceleration;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['setEnableHardwareAcceleration'] = var12;
        var12 = function setOpenH264Enabled(arg1) {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                var1 = _closure1_slot6;
                var4 = null;
                var2 = var4 == var1;
                var1 = undefined;
                var5 = undefined;
                if(var2) { _fun0074_ip = 85; continue _fun0074 }
case 29:
                var3 = _closure1_slot6;
                var3 = var3.settings;
                var2 = var4 == var3;
                var5 = var3;
case 85:
                if(var2) { _fun0074_ip = 5; continue _fun0074 }
case 142:
                var3 = var5.set;
                var2 = var4 == var3;
case 5:
                if(var2) { _fun0074_ip = 35; continue _fun0074 }
case 84:
                var4 = var5.set;
                var3 = 'openH264Enabled';
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
case 35:
                return var1;
            }
        };
        var8['setOpenH264Enabled'] = var12;
        var12 = function setChromiumSwitches(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.gpuSettings;
            var2 = var3.setChromiumSwitches;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var8['setChromiumSwitches'] = var12;
        var12 = function getOpenOnStart() {
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0075_ip = 227; continue _fun0075 }
case 82:
                        var2 = _closure1_slot6;
                        var2 = var2.app;
                        var2 = var2.getOpenOnStart;
                        var5 = null;
                        var3 = var5 == var2;
                        var2 = undefined;
                        if(var3) { _fun0075_ip = 98; continue _fun0075 }
case 85:
                        var3 = _closure1_slot6;
                        var6 = var3.app;
                        var3 = var6.getOpenOnStart;
                        var2 = var3.bind(var6)();
case 98:
                        SaveGenerator(address=61);
case 219:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0075_ip = 229; continue _fun0075 }
case 30:
                        var3 = var2;
                        if(!(var5 == var3)) { _fun0075_ip = 230; continue _fun0075 }
case 119:
                        var4 = _closure1_slot6;
                        var7 = var4.settings;
                        var6 = var7.get;
                        var5 = 'OPEN_ON_STARTUP';
                        var4 = true;
                        var4 = var6.bind(var7)(var5, var4);
                        SaveGenerator(address=107);
case 231:
                        return var4;
case 232:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        var3 = var4;
                        if(!var5) { _fun0075_ip = 230; continue _fun0075 }
case 157:
                        return var4;
case 230:
                        return var3;
case 229:
                        return var2;
case 227:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['getOpenOnStart'] = var12;
        var12 = function getGPUDriverVersions() {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isWindows;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0076_ip = 105; continue _fun0076 }
case 68:
                var1 = var3.getDiscordUtils;
                var1 = var1.bind(var3)();
                var2 = var1.getGPUDriverVersions;
                var1 = null;
                if(!(var1 == var2)) { _fun0076_ip = 126; continue _fun0076 }
case 105:
                var1 = global;
                var4 = var1.Promise;
                var2 = var4.resolve;
                var6 = var1.Object;
                var5 = var6.freeze;
                var1 = {};
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var4)(var1);
                _fun0076_ip = 229; continue _fun0076;
case 126:
                var2 = var3.getDiscordUtils;
                var3 = var2.bind(var3)();
                var2 = var3.getGPUDriverVersions;
                var1 = var2.bind(var3)();
case 229:
                return var1;
            }
        };
        var8['getGPUDriverVersions'] = var12;
        var12 = function setZoomFactor(arg1) {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0077_ip = 233; continue _fun0077 }
case 142:
                var2 = _closure1_slot6;
                var4 = var2.window;
                var3 = var4.setZoomFactor;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var1 = true;
case 233:
                return var1;
            }
        };
        var8['setZoomFactor'] = var12;
        var12 = function setBackgroundThrottling(arg1) {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot6;
                var2 = var2.window;
                var4 = var2.setBackgroundThrottling;
                var2 = null;
                if(!(var2 == var4)) { _fun0078_ip = 98; continue _fun0078 }
case 97:
                var2 = _closure1_slot6;
                var2 = var2.window;
                var4 = var2.webContents;
                var2 = var4.setBackgroundThrottling;
                var2 = var2.bind(var4)(var3);
                _fun0078_ip = 223; continue _fun0078;
case 98:
                var1 = _closure1_slot6;
                var2 = var1.window;
                var1 = var2.setBackgroundThrottling;
                var1 = var1.bind(var2)(var3);
case 223:
                var1 = undefined;
                return var1;
            }
        };
        var8['setBackgroundThrottling'] = var12;
        var12 = function setFocusable(arg1, arg2) {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.window;
                var2 = var2.setFocusable;
                var3 = 'function';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0079_ip = 28; continue _fun0079 }
case 208:
                var1 = _closure1_slot6;
                var4 = var1.window;
                var3 = var4.setFocusable;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 28:
                var1 = undefined;
                return var1;
            }
        };
        var8['setFocusable'] = var12;
        var12 = function pauseFrameEvictor() {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.app;
                var3 = var2.pauseFrameEvictor;
                var2 = null;
                if(!(var2 != var3)) { _fun0080_ip = 50; continue _fun0080 }
case 114:
                var1 = _closure1_slot6;
                var2 = var1.app;
                var1 = var2.pauseFrameEvictor;
                var1 = var1.bind(var2)();
case 50:
                var1 = undefined;
                return var1;
            }
        };
        var8['pauseFrameEvictor'] = var12;
        var12 = function unpauseFrameEvictor() {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.app;
                var3 = var2.unpauseFrameEvictor;
                var2 = null;
                if(!(var2 != var3)) { _fun0081_ip = 50; continue _fun0081 }
case 114:
                var1 = _closure1_slot6;
                var2 = var1.app;
                var1 = var2.unpauseFrameEvictor;
                var1 = var1.bind(var2)();
case 50:
                var1 = undefined;
                return var1;
            }
        };
        var8['unpauseFrameEvictor'] = var12;
        var12 = function getPreferredSystemLanguages() {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var1 = _closure1_slot6;
                var1 = var1.app;
                var3 = var1.getPreferredSystemLanguages;
                var1 = null;
                var3 = var1 == var3;
                var1 = undefined;
                if(var3) { _fun0082_ip = 116; continue _fun0082 }
case 3:
                var2 = _closure1_slot6;
                var3 = var2.app;
                var2 = var3.getPreferredSystemLanguages;
                var1 = var2.bind(var3)();
case 116:
                return var1;
            }
        };
        var8['getPreferredSystemLanguages'] = var12;
        var12 = function getPidFromDesktopSource(arg1) {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var7 = arg1;
                var2 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isDesktop;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0083_ip = 135; continue _fun0083 }
case 121:
                var3 = var2.getDiscordUtils;
                var3 = var3.bind(var2)();
                var3 = var3.getPidFromWindowHandle;
                var4 = null;
                if(!(var4 != var3)) { _fun0083_ip = 135; continue _fun0083 }
case 41:
                var3 = var4 == var7;
                var5 = undefined;
                if(var3) { _fun0083_ip = 37; continue _fun0083 }
case 75:
                var6 = var7.split;
                var3 = ':';
                var5 = var6.bind(var7)(var3);
case 37:
                var3 = var4 == var5;
                var7 = undefined;
                if(var3) { _fun0083_ip = 13; continue _fun0083 }
case 104:
                var3 = 0;
                var7 = var5[var3];
case 13:
                var3 = 'window';
                if(!(var3 !== var7)) { _fun0083_ip = 234; continue _fun0083 }
case 103:
                var6 = var7.startsWith;
                var3 = 'screen';
                var3 = var6.bind(var7)(var3);
                if(var3) { _fun0083_ip = 197; continue _fun0083 }
case 235:
                var6 = 'prepicked';
                var3 = null;
                if(!(var6 === var7)) { _fun0083_ip = 236; continue _fun0083 }
case 197:
                var3 = 1;
case 236:
                return var3;
case 234:
                var3 = var4 == var5;
                var1 = undefined;
                if(var3) { _fun0083_ip = 17; continue _fun0083 }
case 210:
                var3 = 1;
                var1 = var5[var3];
case 17:
                var5 = var4 != var1;
                var3 = '';
                if(!var5) { _fun0083_ip = 46; continue _fun0083 }
case 58:
                var3 = var1;
case 46:
                var1 = var2.getDiscordUtils;
                var2 = var1.bind(var2)();
                var1 = var2.getPidFromWindowHandle;
                var2 = var1.bind(var2)(var3);
                var3 = var4 == var2;
                var1 = null;
                if(var3) { _fun0083_ip = 237; continue _fun0083 }
case 238:
                var3 = 0;
                var1 = null;
                if(!(var3 !== var2)) { _fun0083_ip = 237; continue _fun0083 }
case 239:
                var1 = var2;
case 237:
                return var1;
case 135:
                var1 = null;
                return var1;
            }
        };
        var8['getPidFromDesktopSource'] = var12;
        var12 = function getDesktopSourceFromPid(arg1) {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var1 = var4.isWindows;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0084_ip = 234; continue _fun0084 }
case 83:
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var1 = var1.getWindowHandleFromPid;
                var5 = null;
                if(!(var5 != var1)) { _fun0084_ip = 234; continue _fun0084 }
case 240:
                if(!(var5 != var3)) { _fun0084_ip = 234; continue _fun0084 }
case 35:
                var1 = var2.getDiscordUtils;
                var2 = var1.bind(var2)();
                var1 = var2.getWindowHandleFromPid;
                var2 = var1.bind(var2)(var3);
                var3 = var5 == var2;
                var1 = null;
                if(var3) { _fun0084_ip = 236; continue _fun0084 }
case 217:
                var4 = var2.length;
                var3 = 0;
                var1 = null;
                if(!(var3 !== var4)) { _fun0084_ip = 236; continue _fun0084 }
case 241:
                var4 = ['window'];
                var4[1] = var2;
                var2 = '0';
                var4[2] = var2;
                var3 = var4.join;
                var2 = ':';
                var1 = var3.bind(var4)(var2);
case 236:
                return var1;
case 234:
                var1 = null;
                return var1;
            }
        };
        var8['getDesktopSourceFromPid'] = var12;
        var12 = function generateSessionFromPid(arg1) {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var3 = var1.bind(var2)();
            var2 = var3.generateSessionFromPid;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8['generateSessionFromPid'] = var12;
        var12 = function getAudioPid(arg1) {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.getDiscordUtils;
                var1 = var1.bind(var3)();
                var5 = var1.getAudioPid;
                var2 = null;
                var1 = var4;
                if(!(var2 != var5)) { _fun0085_ip = 219; continue _fun0085 }
case 73:
                var1 = var4;
                if(!(var2 != var1)) { _fun0085_ip = 219; continue _fun0085 }
case 141:
                var2 = var3.getDiscordUtils;
                var3 = var2.bind(var3)();
                var2 = var3.getAudioPid;
                var1 = var2.bind(var3)(var4);
case 219:
                return var1;
            }
        };
        var8['getAudioPid'] = var12;
        var12 = function setForegroundProcess(arg1) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var5 = this;
                var2 = arg1;
                var4 = undefined;
                var3 = undefined;
                var1 = var5.getDiscordUtils;
                var1 = var1.bind(var5)();
                var3 = var1.setForegroundProcess;
case 80: // try_start_0
                var6 = var3;
                var5 = null;
                var5 = var5 != var6;
                var1 = var5;
                if(!var5) { _fun0086_ip = 2; continue _fun0086 }
case 68:
                var1 = var3.bind(var4)(var2);
case 2: // try_end0
                return var1;
case 207: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = false;
                return var1;
            }
        };
        var8['setForegroundProcess'] = var12;
        var12 = function getDiscordMemoryUsage() {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryUsage;
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0087_ip = 78; continue _fun0087 }
case 34:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 78:
                return var1;
            }
        };
        var8['getDiscordMemoryUsage'] = var12;
        var12 = function getDiscordMemoryUsageElectronRenderer() {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryUsageElectronRenderer;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0088_ip = 120; continue _fun0088 }
case 99:
                var1 = var3.bind(var2)();
case 120:
                return var1;
            }
        };
        var8['getDiscordMemoryUsageElectronRenderer'] = var12;
        var12 = function getDiscordMemoryPrivateUsageElectronRenderer() {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryPrivUsageElectronRenderer;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0089_ip = 141; continue _fun0089 }
case 78:
                var1 = var3.bind(var2)();
case 141:
                return var1;
            }
        };
        var8['getDiscordMemoryPrivateUsageElectronRenderer'] = var12;
        var12 = function getDiscordMemoryUsageElectronProcessTypeDetails() {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryUsageElectronProcessTypeDetails;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0090_ip = 120; continue _fun0090 }
case 99:
                var1 = var3.bind(var2)();
case 120:
                return var1;
            }
        };
        var8['getDiscordMemoryUsageElectronProcessTypeDetails'] = var12;
        var12 = function enablePerfMemoryHooks(arg1) {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var4 = var1.enablePerfMemoryHooks;
                var1 = null;
                var2 = var1 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0091_ip = 142; continue _fun0091 }
case 99:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
case 142:
                return var1;
            }
        };
        var8['enablePerfMemoryHooks'] = var12;
        var12 = function disablePerfMemoryHooks() {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.disablePerfMemoryHooks;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0092_ip = 120; continue _fun0092 }
case 99:
                var1 = var3.bind(var2)();
case 120:
                return var1;
            }
        };
        var8['disablePerfMemoryHooks'] = var12;
        var12 = function getPerfAttributedMemory() {
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getPerfAttributedMemory;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0093_ip = 120; continue _fun0093 }
case 99:
                var1 = var3.bind(var2)();
case 120:
                return var1;
            }
        };
        var8['getPerfAttributedMemory'] = var12;
        var12 = function getPerfAttributedMemoryCallstacks(arg1) {
            _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var4 = var1.getPerfAttributedMemoryCallstacks;
                var1 = null;
                var2 = var1 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0094_ip = 142; continue _fun0094 }
case 99:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
case 142:
                return var1;
            }
        };
        var8['getPerfAttributedMemoryCallstacks'] = var12;
        var12 = function getPerfAttributedMemoryStats() {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getPerfAttributedMemoryStats;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0095_ip = 120; continue _fun0095 }
case 99:
                var1 = var3.bind(var2)();
case 120:
                return var1;
            }
        };
        var8['getPerfAttributedMemoryStats'] = var12;
        var12 = function startCPUProfiling(arg1) {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var4 = var1.startCPUProfiling;
                var1 = null;
                var2 = var1 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0096_ip = 142; continue _fun0096 }
case 99:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
case 142:
                return var1;
            }
        };
        var8['startCPUProfiling'] = var12;
        var12 = function stopCPUProfiling() {
            var2 = this;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0097_ip = 242; continue _fun0097 }
case 40:
                        var3 = _closure2_slot0;
                        var2 = var3.getDiscordUtils;
                        var2 = var2.bind(var3)();
                        var5 = var2.stopCPUProfiling;
                        var3 = null;
                        var6 = var3 == var5;
                        var4 = undefined;
                        var2 = undefined;
                        if(var6) { _fun0097_ip = 116; continue _fun0097 }
case 2:
                        var2 = var5.bind(var4)();
case 116:
                        SaveGenerator(address=54);
case 84:
                        return var2;
case 128:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0097_ip = 45; continue _fun0097 }
case 67:
                        if(!(var3 != var2)) { _fun0097_ip = 154; continue _fun0097 }
case 138:
                        var3 = global;
                        var4 = var3.JSON;
                        var3 = var4.parse;
                        var3 = var3.bind(var4)(var2);
                        _fun0097_ip = 235; continue _fun0097;
case 154:
                        var4 = global;
                        var6 = var4.Promise;
                        var5 = var6.reject;
                        var8 = var4.Error;
                        var4 = var8.prototype;
                        var7 = Object.create(var4, {constructor: {value: var8}});
                        var9 = 'Failed to stop CPU profiling';
                        var10 = var7;
                        var4 = new var10[var8](var9, var8);
                        var4 = var4 instanceof Object ? var4 : var7;
                        var3 = var5.bind(var6)(var4);
case 235:
                        return var3;
case 45:
                        return var2;
case 242:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['stopCPUProfiling'] = var12;
        var12 = function gzipAndBase64Encode(arg1) {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var5 = var1.gzipAndBase64Encode;
                var4 = null;
                var2 = var4 == var5;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0098_ip = 142; continue _fun0098 }
case 99:
                var2 = arg1;
                var1 = var5.bind(var3)(var2);
case 142:
                if(!(var4 == var1)) { _fun0098_ip = 86; continue _fun0098 }
case 83:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = var2.bind(var3)(var4);
case 86:
                return var1;
            }
        };
        var8['gzipAndBase64Encode'] = var12;
        var12 = function showOpenDialog(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.fileManager;
            var2 = var3.showOpenDialog;
            var1 = {};
            var4 = arg1;
            var1['properties'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8['showOpenDialog'] = var12;
        var12 = function flushStorageData() {
            _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.isPlatformEmbedded;
                var2 = global;
                var4 = var2.Promise;
                if(var1) { _fun0099_ip = 218; continue _fun0099 }
case 51:
                var1 = var4.resolve;
                var1 = var1.bind(var4)();
                _fun0099_ip = 87; continue _fun0099;
case 218:
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = function(arg1, arg2) {
                    _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                        var4 = arg1;
                        var _closure3_slot0 = var4;
                        var2 = arg2;
                        var _closure3_slot1 = var2;
                        var3 = _closure1_slot6;
                        var3 = var3.processUtils;
                        var5 = var3.flushStorageData;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0100_ip = 5; continue _fun0100 }
case 68:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        _fun0100_ip = 226; continue _fun0100;
case 5:
                        var2 = _closure1_slot6;
                        var3 = var2.processUtils;
                        var2 = var3.flushStorageData;
                        var1 = function(arg1) {
                            _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                                var5 = arg1;
                                var1 = null;
                                if(!(var1 == var5)) { _fun0101_ip = 81; continue _fun0101 }
case 152:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                _fun0101_ip = 225; continue _fun0101;
case 81:
                                var4 = _closure3_slot1;
                                var2 = global;
                                var2 = var2.Error;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {constructor: {value: var2}});
                                var7 = var3;
                                var6 = var5;
                                var2 = new var7[var2](var6, var5);
                                var3 = var2 instanceof Object ? var2 : var3;
                                var2 = undefined;
                                var1 = var4.bind(var2)(var3);
case 225:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 226:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var1 = var2 instanceof Object ? var2 : var3;
case 87:
                return var1;
            }
        };
        var8['flushStorageData'] = var12;
        var12 = function flushCookies() {
            _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.isPlatformEmbedded;
                var2 = global;
                var4 = var2.Promise;
                if(var1) { _fun0102_ip = 218; continue _fun0102 }
case 51:
                var1 = var4.resolve;
                var1 = var1.bind(var4)();
                _fun0102_ip = 87; continue _fun0102;
case 218:
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = function(arg1, arg2) {
                    _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
                        var4 = arg1;
                        var _closure3_slot0 = var4;
                        var2 = arg2;
                        var _closure3_slot1 = var2;
                        var3 = _closure1_slot6;
                        var3 = var3.processUtils;
                        var5 = var3.flushCookies;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0103_ip = 5; continue _fun0103 }
case 68:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        _fun0103_ip = 226; continue _fun0103;
case 5:
                        var2 = _closure1_slot6;
                        var3 = var2.processUtils;
                        var2 = var3.flushCookies;
                        var1 = function(arg1) {
                            _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
                                var5 = arg1;
                                var1 = null;
                                if(!(var1 == var5)) { _fun0104_ip = 81; continue _fun0104 }
case 152:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                _fun0104_ip = 225; continue _fun0104;
case 81:
                                var4 = _closure3_slot1;
                                var2 = global;
                                var2 = var2.Error;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {constructor: {value: var2}});
                                var7 = var3;
                                var6 = var5;
                                var2 = new var7[var2](var6, var5);
                                var3 = var2 instanceof Object ? var2 : var3;
                                var2 = undefined;
                                var1 = var4.bind(var2)(var3);
case 225:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 226:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var1 = var2 instanceof Object ? var2 : var3;
case 87:
                return var1;
            }
        };
        var8['flushCookies'] = var12;
        var12 = function setCrashInformation(arg1, arg2) {
            _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0105_ip = 43; continue _fun0105 }
case 78:
                var4 = _closure1_slot6;
                var5 = null;
                var6 = var5 == var4;
                var4 = undefined;
                if(var6) { _fun0105_ip = 119; continue _fun0105 }
case 5:
                var6 = _closure1_slot6;
                var6 = var6.processUtils;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0105_ip = 119; continue _fun0105 }
case 137:
                var4 = var6.setCrashInformation;
case 119:
                var3 = var5 != var4;
case 43:
                if(!var3) { _fun0105_ip = 220; continue _fun0105 }
case 75:
                var2 = _closure1_slot6;
                var5 = var2.processUtils;
                var4 = var5.setCrashInformation;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
case 220:
                return var1;
            }
        };
        var8['setCrashInformation'] = var12;
        var12 = function blockDisplaySleep() {
            _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.isPlatformEmbedded;
                var4 = null;
                var1 = null;
                if(!var3) { _fun0106_ip = 223; continue _fun0106 }
case 141:
                var3 = _closure1_slot6;
                var3 = var3.powerSaveBlocker;
                var3 = var4 != var3;
                var1 = null;
                if(!var3) { _fun0106_ip = 223; continue _fun0106 }
case 98:
                var2 = _closure1_slot6;
                var3 = var2.powerSaveBlocker;
                var2 = var3.blockDisplaySleep;
                var1 = var2.bind(var3)();
case 223:
                return var1;
            }
        };
        var8['blockDisplaySleep'] = var12;
        var12 = function unblockDisplaySleep(arg1) {
            _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0107_ip = 116; continue _fun0107 }
case 78:
                var4 = _closure1_slot6;
                var5 = var4.powerSaveBlocker;
                var4 = null;
                var3 = var4 != var5;
case 116:
                if(!var3) { _fun0107_ip = 223; continue _fun0107 }
case 218:
                var2 = _closure1_slot6;
                var4 = var2.powerSaveBlocker;
                var3 = var4.unblockDisplaySleep;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 223:
                return var1;
            }
        };
        var8['unblockDisplaySleep'] = var12;
        var12 = function cleanupDisplaySleep() {
            _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0108_ip = 116; continue _fun0108 }
case 78:
                var4 = _closure1_slot6;
                var5 = var4.powerSaveBlocker;
                var4 = null;
                var3 = var4 != var5;
case 116:
                if(!var3) { _fun0108_ip = 76; continue _fun0108 }
case 218:
                var2 = _closure1_slot6;
                var3 = var2.powerSaveBlocker;
                var2 = var3.cleanupDisplaySleep;
                var2 = var2.bind(var3)();
case 76:
                return var1;
            }
        };
        var8['cleanupDisplaySleep'] = var12;
        var12 = function relaunch() {
            _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0109_ip = 128; continue _fun0109 }
case 78:
                var2 = _closure1_slot6;
                var3 = var2.app;
                var2 = var3.relaunch;
                var2 = var2.bind(var3)();
case 128:
                return var1;
            }
        };
        var8['relaunch'] = var12;
        var12 = function makeChunkedRequest(arg1, arg2, arg3) {
            _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
                var8 = arg2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var1);
                var1 = var4.getAPIBaseURL;
                var11 = var1.bind(var4)();
                var1 = global;
                var4 = var1.HermesInternal;
                var10 = var4.concat;
                var9 = '';
                var4 = arg1;
                var4 = var10.bind(var9)(var11, var4);
                var _closure2_slot0 = var4;
                var4 = 5;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.isPlatformEmbedded;
                if(var4) { _fun0110_ip = 242; continue _fun0110 }
case 124:
                var6 = var1.Promise;
                var5 = var6.reject;
                var9 = var1.Error;
                var4 = var9.prototype;
                var7 = Object.create(var4, {constructor: {value: var9}});
                var13 = 'Not embedded!';
                var14 = var7;
                var4 = new var14[var9](var13, var12);
                var4 = var4 instanceof Object ? var4 : var7;
                var4 = var5.bind(var6)(var4);
                return var4;
case 242:
                var3 = _closure1_slot6;
                var4 = var3.http;
                var3 = null;
                if(!(var3 != var4)) { _fun0110_ip = 243; continue _fun0110 }
case 244:
                var3 = {'maxBps': 8000, 'chunkInterval': 50, 'contentType': 'application/json'};
                var6 = 'application/json';
                var12 = arg3;
                var13 = var3;
                var4 = copyDataProperties(var13, var12);
                var4 = var3.method;
                var _closure2_slot1 = var4;
                var4 = var3.maxBps;
                var5 = var3.token;
                var _closure2_slot2 = var5;
                var5 = var3.chunkInterval;
                var _closure2_slot3 = var5;
                var3 = var3.contentType;
                var _closure2_slot4 = var3;
                var7 = var8;
                if(!(var6 === var3)) { _fun0110_ip = 245; continue _fun0110 }
case 136:
                var6 = var1.JSON;
                var3 = var6.stringify;
                var7 = var3.bind(var6)(var8);
case 245:
                var3 = 1000;
                var3 = var5 / var3;
                var6 = var4 * var3;
                var5 = var1.Math;
                var4 = var5.ceil;
                var3 = var7.length;
                var3 = var3 / var6;
                var5 = var4.bind(var5)(var3);
                var3 = var1.Array;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var13 = var5;
                var3 = new var14[var3](var13, var12);
                var4 = var3 instanceof Object ? var3 : var4;
                var _closure2_slot5 = var4;
                var3 = 0;
                var8 = var3 < var5;
                if(!var8) { _fun0110_ip = 246; continue _fun0110 }
case 247:
                var10 = var3 * var6;
                var9 = var7.substring;
                var8 = var10 + var6;
                var8 = var9.bind(var7)(var10, var8);
                var4[var3] = var8;
                var3 = var3 + 1;
                if(var3 < var5) { _fun0110_ip = 247; continue _fun0110 }
case 246:
                var4 = var1.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var13 = function(arg1, arg2) {
                    _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
                        var2 = arg1;
                        var _closure3_slot0 = var2;
                        var2 = arg2;
                        var _closure3_slot1 = var2;
                        var3 = _closure1_slot6;
                        var4 = var3.http;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0111_ip = 248; continue _fun0111 }
case 118:
                        var2 = _closure1_slot6;
                        var6 = var2.http;
                        var5 = var6.makeChunkedRequest;
                        var12 = _closure2_slot0;
                        var11 = _closure2_slot5;
                        var2 = {};
                        var8 = _closure2_slot1;
                        var2['method'] = var8;
                        var8 = _closure2_slot3;
                        var2['chunkInterval'] = var8;
                        var8 = _closure2_slot4;
                        var2['contentType'] = var8;
                        var7 = _closure2_slot2;
                        var2['token'] = var7;
                        var9 = function(arg1, arg2) {
                            _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
                                var4 = arg1;
                                var2 = arg2;
                                var1 = null;
                                if(!(var1 == var4)) { _fun0112_ip = 123; continue _fun0112 }
case 49:
                                var3 = var2.status;
                                var1 = 400;
                                if(!(!(var3 >= var1))) { _fun0112_ip = 50; continue _fun0112 }
case 97:
                                var3 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = undefined;
                                _fun0112_ip = 249; continue _fun0112;
case 50:
                                var5 = _closure3_slot1;
                                var3 = global;
                                var6 = var3.Error;
                                var7 = var2.body;
                                var3 = var6.prototype;
                                var3 = Object.create(var3, {constructor: {value: var6}});
                                var8 = var3;
                                var2 = new var8[var6](var7, var6);
                                var3 = var2 instanceof Object ? var2 : var3;
                                var2 = undefined;
                                var1 = var5.bind(var2)(var3);
case 249:
                                _fun0112_ip = 54; continue _fun0112;
case 123:
                                var3 = _closure3_slot1;
                                var2 = undefined;
                                var1 = var3.bind(var2)(var4);
case 54:
                                return var1;
                            }
                        };
                        var13 = var6;
                        var10 = var2;
                        var1 = var13[var5](var12, var11, var10, var9, var8);
case 248:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = var3;
                var2 = new var14[var4](var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
case 243:
                var3 = var1.Promise;
                var2 = var3.reject;
                var5 = var1.Error;
                var1 = var5.prototype;
                var4 = Object.create(var1, {constructor: {value: var5}});
                var13 = 'HTTP module not available';
                var14 = var4;
                var1 = new var14[var5](var13, var12);
                var1 = var1 instanceof Object ? var1 : var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var8['makeChunkedRequest'] = var12;
        var12 = function submitLiveCrashReport(arg1) {
            _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
                var2 = this;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isWindows;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0113_ip = 250; continue _fun0113 }
case 68:
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var1 = var1.submitLiveCrashReport;
                var3 = null;
                if(!(var3 != var1)) { _fun0113_ip = 250; continue _fun0113 }
case 105:
                var1 = var2.getCrashReporterMetadata;
                var1 = var1.bind(var2)();
                var4 = _closure1_slot6;
                var6 = var4.app;
                var4 = var6.getReleaseChannel;
                var4 = var4.bind(var6)();
                var3 = var3 == var1;
                var5 = undefined;
                if(var3) { _fun0113_ip = 54; continue _fun0113 }
case 126:
                var5 = var1.sentry;
case 54:
                var1 = var2.getDiscordUtils;
                var3 = var1.bind(var2)();
                var2 = var3.submitLiveCrashReport;
                var1 = {};
                var8 = var1;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var7 = arg1;
                var8 = var1;
                var5 = copyDataProperties(var8, var7);
                var1 = var2.bind(var3)(var4, var1);
                return var1;
case 250:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var8['submitLiveCrashReport'] = var12;
        var12 = function crash(arg1) {
            _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var4 = var1.crash;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0114_ip = 142; continue _fun0114 }
case 34:
                var3 = undefined;
                var2 = arg1;
                var2 = var4.bind(var3)(var2);
                var1 = true;
case 142:
                return var1;
            }
        };
        var8['crash'] = var12;
        var12 = function setApplicationBackgroundColor(arg1) {
            var5 = this;
            var4 = var5.sendIPC;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.IPCEvents;
            var3 = var2.SETTINGS_UPDATE_BACKGROUND_COLOR;
            var2 = arg1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var8['setApplicationBackgroundColor'] = var12;
        var12 = function initializeExitHook() {
            _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.initializeExitHook;
                var1 = null;
                if(!(var1 != var2)) { _fun0115_ip = 73; continue _fun0115 }
case 114:
                var1 = undefined;
                var1 = var2.bind(var1)();
case 73:
                var1 = undefined;
                return var1;
            }
        };
        var8['initializeExitHook'] = var12;
        var12 = function initializeWERHandler() {
            _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.initializeWERHandler;
                var1 = null;
                if(!(var1 != var2)) { _fun0116_ip = 73; continue _fun0116 }
case 114:
                var1 = undefined;
                var1 = var2.bind(var1)();
case 73:
                var1 = undefined;
                return var1;
            }
        };
        var8['initializeWERHandler'] = var12;
        var12 = function pollQueueMetrics(arg1) {
            _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.pollQueueMetrics;
                var1 = null;
                if(!(var1 != var3)) { _fun0117_ip = 118; continue _fun0117 }
case 114:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
case 118:
                var1 = undefined;
                return var1;
            }
        };
        var8['pollQueueMetrics'] = var12;
        var12 = function asyncify(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var8['asyncify'] = var12;
        var12 = function IsGameDisplayModeUpdateSupported() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var1 = var1.bind(var2)();
            var2 = var1.gameDisplayModeUpdate;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var8['IsGameDisplayModeUpdateSupported'] = var12;
        var12 = function GameDisplayModeUpdate(arg1) {
            _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.gameDisplayModeUpdate;
                var2 = null;
                var1 = var2 != var3;
                if(!var1) { _fun0118_ip = 118; continue _fun0118 }
case 73:
                var1 = var2 != var4;
case 118:
                if(!var1) { _fun0118_ip = 50; continue _fun0118 }
case 141:
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 50:
                return var1;
            }
        };
        var8['GameDisplayModeUpdate'] = var12;
        var12 = function GameDisplayModeIsGameSupported(arg1) {
            _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.gameDisplayModeIsSupported;
                var2 = null;
                var1 = var2 != var3;
                if(!var1) { _fun0119_ip = 85; continue _fun0119 }
case 33:
                var1 = var2 != var4;
case 85:
                if(!var1) { _fun0119_ip = 121; continue _fun0119 }
case 142:
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 121:
                return var1;
            }
        };
        var8['GameDisplayModeIsGameSupported'] = var12;
        var12 = function GetWindowFullscreenTypeByPid(arg1, arg2, arg3) {
            _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var1 = arg3;
                var3 = this;
                var2 = var3.getDiscordUtils;
                var2 = var2.bind(var3)();
                var5 = var2.getWindowFullscreenTypeByPid;
                var2 = null;
                var4 = 0;
                var3 = null;
                if(!(var4 !== var7)) { _fun0120_ip = 240; continue _fun0120 }
case 142:
                var4 = var2 != var5;
                var3 = null;
                if(!var4) { _fun0120_ip = 240; continue _fun0120 }
case 5:
                var4 = var2 != var6;
                var3 = null;
                if(!var4) { _fun0120_ip = 240; continue _fun0120 }
case 69:
                var4 = undefined;
                var3 = var5.bind(var4)(var7, var6);
case 240:
                var4 = -1;
                if(!(var4 === var3)) { _fun0120_ip = 43; continue _fun0120 }
case 53:
                var3 = null;
case 43:
                if(!(var2 != var3)) { _fun0120_ip = 154; continue _fun0120 }
case 251:
                var1 = var3;
case 154:
                if(!(var2 == var1)) { _fun0120_ip = 252; continue _fun0120 }
case 150:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.RunningProcessFullscreenType;
                var1 = var2.UNKNOWN;
case 252:
                return var1;
            }
        };
        var8['GetWindowFullscreenTypeByPid'] = var12;
        var12 = function GetWindowFullscreenTypeExtraByPid(arg1, arg2) {
            _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
case 0:
                var4 = arg2;
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getWindowFullscreenTypeExtraByPid;
                var1 = null;
                if(!(var1 != var3)) { _fun0121_ip = 121; continue _fun0121 }
case 3:
                if(!(var1 != var4)) { _fun0121_ip = 121; continue _fun0121 }
case 78:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                _fun0121_ip = 11; continue _fun0121;
case 121:
                var2 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.QueryUserNotificationState;
                var3 = var3.QUNS_UNKNOWN;
                var2['quns'] = var3;
                var1 = var2;
case 11:
                return var1;
            }
        };
        var8['GetWindowFullscreenTypeExtraByPid'] = var12;
        var12 = function SetGPUBoostEnabledByPid(arg1, arg2) {
            _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var5 = var1.setGPUBoostEnabledByPid;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0122_ip = 83; continue _fun0122 }
case 3:
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var1 = var5.bind(var4)(var3, var2);
case 83:
                return var1;
            }
        };
        var8['SetGPUBoostEnabledByPid'] = var12;
        var12 = function SetSystemServicePerformanceMonitorEnabled(arg1, arg2) {
            _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var5 = var1.setSystemServicePerformanceMonitorEnabled;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0123_ip = 83; continue _fun0123 }
case 3:
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var1 = var5.bind(var4)(var3, var2);
case 83:
                return var1;
            }
        };
        var8['SetSystemServicePerformanceMonitorEnabled'] = var12;
        var12 = function GetSystemServicePerformanceMonitorSnapshot(arg1) {
            _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
case 0:
                var3 = this;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var2 = var3.getDiscordUtils;
                var2 = var2.bind(var3)();
                var3 = var2.getSystemServicePerformanceMonitorSnapshot;
                var _closure2_slot2 = var3;
                var2 = null;
                if(!(var2 != var3)) { _fun0124_ip = 236; continue _fun0124 }
case 142:
                var2 = global;
                var5 = var2.Promise;
                var3 = var5.prototype;
                var4 = Object.create(var3, {constructor: {value: var5}});
                var7 = function(arg1, arg2) {
                    var1 = arg2;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var4 = var1.setTimeout;
                    var1 = undefined;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var1 = global;
                        var4 = var1.Error;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {constructor: {value: var4}});
                        var5 = 'Timed out waiting for performance snapshot';
                        var6 = var2;
                        var1 = new var6[var4](var5, var4);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 1000;
                    var3 = var4.bind(var1)(var3, var2);
                    var _closure2_slot1 = var3;
                    return var1;
                };
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var5 = var3 instanceof Object ? var3 : var4;
                var6 = var2.Promise;
                var3 = var6.prototype;
                var4 = Object.create(var3, {constructor: {value: var6}});
                var7 = function(arg1, arg2) {
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = arg2;
                    var _closure3_slot1 = var1;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = function(arg1) {
                        _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
case 0:
                            var4 = arg1;
                            var1 = var4;
                            var3 = 'null';
                            if(!(var3 === var4)) { _fun0125_ip = 30; continue _fun0125 }
case 32:
                            var5 = _closure3_slot1;
                            var3 = global;
                            var6 = var3.Error;
                            var3 = var6.prototype;
                            var4 = Object.create(var3, {constructor: {value: var6}});
                            var8 = 'Performance snapshot not available';
                            var9 = var4;
                            var3 = new var9[var6](var8, var7);
                            var4 = var3 instanceof Object ? var3 : var4;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            _fun0125_ip = 253; continue _fun0125;
case 30: // try_start_0
                            var4 = _closure3_slot0;
                            var3 = global;
                            var5 = var3.JSON;
                            var3 = var5.parse;
                            var3 = var3.bind(var5)(var1);
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
case 217: // try_end0
                            _fun0125_ip = 253; continue _fun0125;
case 126: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var2 = var6;
                            var3 = _closure3_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var5 = var1.Error;
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0125_ip = 234; continue _fun0125 }
case 57:
                            var7 = var1.String;
                            var6 = var2;
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            _fun0125_ip = 15; continue _fun0125;
case 234:
                            var5 = var2.message;
case 15:
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = 'Invalid performance snapshot JSON: ';
                            var8 = var2.bind(var1)(var5);
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {constructor: {value: var4}});
                            var9 = var2;
                            var1 = new var9[var4](var8, var7);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 253:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var8 = var4;
                var3 = new var8[var6](var7, var6);
                var6 = var3 instanceof Object ? var3 : var4;
                var4 = var2.Promise;
                var3 = var4.race;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.finally;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
case 236:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 14;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.SystemServiceNotAvailableError;
                var4 = var1.prototype;
                var4 = Object.create(var4, {constructor: {value: var1}});
                var8 = var4;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var8['GetSystemServicePerformanceMonitorSnapshot'] = var12;
        var12 = function IsHardwareAcceleratedGPUSchedulingEnabled() {
            _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.isHardwareAcceleratedGPUSchedulingEnabled;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0126_ip = 120; continue _fun0126 }
case 3:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 120:
                return var1;
            }
        };
        var8['IsHardwareAcceleratedGPUSchedulingEnabled'] = var12;
        var12 = function AcquireGlobalLock(arg1) {
            _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.acquireGlobalLock;
                var1 = null;
                if(!(var1 == var3)) { _fun0127_ip = 73; continue _fun0127 }
case 97:
                var1 = undefined;
                return var1;
case 73:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var8['AcquireGlobalLock'] = var12;
        var12 = function SetServiceChannel(arg1) {
            _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.setServiceChannel;
                var1 = null;
                if(!(var1 != var3)) { _fun0128_ip = 85; continue _fun0128 }
case 97:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
case 85:
                var1 = undefined;
                return var1;
            }
        };
        var8['SetServiceChannel'] = var12;
        var12 = function IsSystemServiceInstalled() {
            _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.isSystemServiceInstalled;
                var1 = null;
                if(!(var1 == var2)) { _fun0129_ip = 73; continue _fun0129 }
case 97:
                var1 = undefined;
                return var1;
case 73:
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var8['IsSystemServiceInstalled'] = var12;
        var12 = function CanSystemServiceBeInstalled() {
            _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.canSystemServiceBeInstalled;
                var1 = null;
                if(!(var1 == var2)) { _fun0130_ip = 73; continue _fun0130 }
case 97:
                var1 = undefined;
                return var1;
case 73:
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var8['CanSystemServiceBeInstalled'] = var12;
        var12 = function InstallSystemService() {
            _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.installSystemService;
                var1 = null;
                if(!(var1 == var3)) { _fun0131_ip = 87; continue _fun0131 }
case 97:
                var1 = global;
                var4 = var1.Promise;
                var2 = var4.reject;
                var6 = var1.Error;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var7 = 'System service native not available';
                var8 = var5;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var2.bind(var4)(var1);
                _fun0131_ip = 9; continue _fun0131;
case 87:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var8['InstallSystemService'] = var12;
        var12 = function DoesSystemServiceHaveUpdate() {
            _fun0132: for(var _fun0132_ip = 0; ; ) switch(_fun0132_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.doesSystemServiceHaveUpdate;
                var1 = null;
                if(!(var1 == var3)) { _fun0132_ip = 87; continue _fun0132 }
case 97:
                var1 = global;
                var4 = var1.Promise;
                var2 = var4.reject;
                var6 = var1.Error;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var7 = 'System service native not available';
                var8 = var5;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var2.bind(var4)(var1);
                _fun0132_ip = 9; continue _fun0132;
case 87:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var8['DoesSystemServiceHaveUpdate'] = var12;
        var12 = function UpdateSystemService() {
            _fun0133: for(var _fun0133_ip = 0; ; ) switch(_fun0133_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.updateSystemService;
                var1 = null;
                if(!(var1 == var3)) { _fun0133_ip = 87; continue _fun0133 }
case 97:
                var1 = global;
                var4 = var1.Promise;
                var2 = var4.reject;
                var6 = var1.Error;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var7 = 'System service native not available';
                var8 = var5;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var2.bind(var4)(var1);
                _fun0133_ip = 9; continue _fun0133;
case 87:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var8['UpdateSystemService'] = var12;
        var12 = function UninstallSystemService() {
            _fun0134: for(var _fun0134_ip = 0; ; ) switch(_fun0134_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.uninstallSystemService;
                var1 = null;
                if(!(var1 == var3)) { _fun0134_ip = 87; continue _fun0134 }
case 97:
                var1 = global;
                var4 = var1.Promise;
                var2 = var4.reject;
                var6 = var1.Error;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var7 = 'System service native not available';
                var8 = var5;
                var1 = new var8[var6](var7, var6);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var2.bind(var4)(var1);
                _fun0134_ip = 9; continue _fun0134;
case 87:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var8['UninstallSystemService'] = var12;
        var12 = function InputEventServiceSetStatusCallback(arg1) {
            _fun0135: for(var _fun0135_ip = 0; ; ) switch(_fun0135_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.inputEventServiceSetStatusCallback;
                var1 = null;
                if(!(var1 != var3)) { _fun0135_ip = 85; continue _fun0135 }
case 97:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
case 85:
                var1 = undefined;
                return var1;
            }
        };
        var8['InputEventServiceSetStatusCallback'] = var12;
        var12 = function InputEventServiceSetAllowed(arg1) {
            _fun0136: for(var _fun0136_ip = 0; ; ) switch(_fun0136_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.inputEventServiceSetAllowed;
                var1 = null;
                if(!(var1 == var3)) { _fun0136_ip = 73; continue _fun0136 }
case 97:
                var1 = undefined;
                return var1;
case 73:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var8['InputEventServiceSetAllowed'] = var12;
        var12 = function ToolServiceSetStatusCallback(arg1) {
            _fun0137: for(var _fun0137_ip = 0; ; ) switch(_fun0137_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.toolServiceSetStatusCallback;
                var1 = null;
                if(!(var1 != var3)) { _fun0137_ip = 85; continue _fun0137 }
case 97:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
case 85:
                var1 = undefined;
                return var1;
            }
        };
        var8['ToolServiceSetStatusCallback'] = var12;
        var12 = function ToolServiceSetAllowed(arg1) {
            _fun0138: for(var _fun0138_ip = 0; ; ) switch(_fun0138_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.toolServiceSetAllowed;
                var1 = null;
                if(!(var1 == var3)) { _fun0138_ip = 73; continue _fun0138 }
case 97:
                var1 = undefined;
                return var1;
case 73:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var8['ToolServiceSetAllowed'] = var12;
        var12 = function isModuleVersionAtLeast(arg1, arg2) {
            _fun0139: for(var _fun0139_ip = 0; ; ) switch(_fun0139_ip) {
case 0:
                var1 = arg2;
                var4 = this;
                var3 = _closure1_slot9;
                var2 = null;
                if(!(var2 == var3)) { _fun0139_ip = 73; continue _fun0139 }
case 48:
                var5 = [0, 0, 0];
                _fun0139_ip = 118; continue _fun0139;
case 73:
                var5 = _closure1_slot9;
case 118:
                var3 = new Array(0);
                var8 = 0;
                var14 = var3;
                var13 = var5;
                var12 = 0;
                var5 = arraySpread(var14, var13, var12);
                var6 = var3.push;
                var11 = var4.moduleVersions;
                var5 = var2 == var11;
                var7 = undefined;
                var10 = undefined;
                if(var5) { _fun0139_ip = 122; continue _fun0139 }
case 223:
                var5 = arg1;
                var10 = var11[var5];
case 122:
                var11 = var2 != var10;
                var5 = 0;
                if(!var11) { _fun0139_ip = 11; continue _fun0139 }
case 101:
                var5 = var10;
case 11:
                var5 = var6.bind(var3)(var5);
                var4 = var4.releaseChannel;
                var6 = var1[var4];
                if(!(var2 == var6)) { _fun0139_ip = 89; continue _fun0139 }
case 248:
                var6 = var1.stable;
case 89:
                var2 = _closure1_slot25;
                var1 = var3.entries;
                var1 = var1.bind(var3)();
                var5 = var2.bind(var7)(var1);
                var2 = var5.bind(var7)();
                var1 = var2.done;
                var4 = 2;
                var3 = 1;
                if(var1) { _fun0139_ip = 254; continue _fun0139 }
case 15:
                var10 = var2.value;
                var1 = _closure1_slot3;
                var10 = var1.bind(var7)(var10, var4);
                var1 = var10[var8];
                var10 = var10[var3];
                var11 = var6[var1];
                if(!(!(var10 > var11))) { _fun0139_ip = 255; continue _fun0139 }
case 39:
                var1 = var6[var1];
                if(!(!(var10 < var1))) { _fun0139_ip = 256; continue _fun0139 }
case 257:
                var10 = var5.bind(var7)();
                var1 = var10.done;
                var2 = var10;
                if(var1) { _fun0139_ip = 254; continue _fun0139 }
case 127:
                _fun0139_ip = 15; continue _fun0139;
case 256:
                var1 = false;
                return var1;
case 255:
                var1 = true;
                return var1;
case 254:
                var1 = true;
                return var1;
            }
        };
        var8['isModuleVersionAtLeast'] = var12;
        var12 = function fetchRiotGamesLiveClientData(arg1) {
            _fun0140: for(var _fun0140_ip = 0; ; ) switch(_fun0140_ip) {
case 0:
                var5 = arguments[1];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0140_ip = 214; continue _fun0140 }
case 152:
                var5 = {};
case 214:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0140_ip = 11; continue _fun0140 }
case 117:
                var1 = global;
                var4 = var1.Promise;
                var3 = var4.reject;
                var7 = var1.Error;
                var1 = var7.prototype;
                var6 = Object.create(var1, {constructor: {value: var7}});
                var9 = 'Not embedded!';
                var10 = var6;
                var1 = new var10[var7](var9, var8);
                var1 = var1 instanceof Object ? var1 : var6;
                var1 = var3.bind(var4)(var1);
                _fun0140_ip = 20; continue _fun0140;
case 11:
                var3 = _closure1_slot6;
                var4 = var3.riotGames;
                var3 = null;
                if(!(var3 != var4)) { _fun0140_ip = 215; continue _fun0140 }
case 258:
                var2 = _closure1_slot6;
                var4 = var2.riotGames;
                var3 = var4.fetchLiveClientData;
                var2 = arg1;
                var2 = var3.bind(var4)(var2, var5);
                _fun0140_ip = 147; continue _fun0140;
case 215:
                var3 = global;
                var5 = var3.Promise;
                var4 = var5.reject;
                var7 = var3.Error;
                var3 = var7.prototype;
                var6 = Object.create(var3, {constructor: {value: var7}});
                var9 = 'Riot Games module not available';
                var10 = var6;
                var3 = new var10[var7](var9, var8);
                var3 = var3 instanceof Object ? var3 : var6;
                var2 = var4.bind(var5)(var3);
case 147:
                var1 = var2;
case 20:
                return var1;
            }
        };
        var8['fetchRiotGamesLiveClientData'] = var12;
        var12 = function appViewed() {
            _fun0141: for(var _fun0141_ip = 0; ; ) switch(_fun0141_ip) {
case 0:
                var4 = this;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.isDesktop;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0141_ip = 220; continue _fun0141 }
case 68:
                var3 = global;
                var6 = var3.performance;
                var5 = var6.mark;
                var3 = 'app_viewed';
                var3 = var5.bind(var6)(var3);
                var3 = var4.sendIPC;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.IPCEvents;
                var2 = var2.APP_VIEWED;
                var2 = var3.bind(var4)(var2);
case 220:
                return var1;
            }
        };
        var8['appViewed'] = var12;
        var12 = function appFirstRenderAfterReadyPayload(arg1) {
            _fun0142: for(var _fun0142_ip = 0; ; ) switch(_fun0142_ip) {
case 0:
                var5 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isDesktop;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0142_ip = 241; continue _fun0142 }
case 68:
                var3 = global;
                var6 = var3.performance;
                var4 = var6.mark;
                var3 = 'app_first_render_after_ready_payload';
                var3 = var4.bind(var6)(var3);
                var4 = var5.sendIPC;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.IPCEvents;
                var3 = var2.APP_FIRST_RENDER_AFTER_READY_PAYLOAD;
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
case 241:
                return var1;
            }
        };
        var8['appFirstRenderAfterReadyPayload'] = var12;
        var12 = function appLoaded() {
            var3 = _closure1_slot32;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.IPCEvents;
            var2 = var2.APP_LOADED;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8['appLoaded'] = var12;
        var12 = function indexLoadedAsync() {
            var3 = _closure1_slot32;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.IPCEvents;
            var2 = var2.APP_ASYNC_INDEX_TSX_LOADED;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8['indexLoadedAsync'] = var12;
        var12 = function setUseRequireModuleCache(arg1) {
            var1 = arg1;
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
        };
        var8['setUseRequireModuleCache'] = var12;
        var12 = function GetSystemGpuStats(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = this;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0143: for(var _fun0143_ip = 0; ; ) switch(_fun0143_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0143_ip = 129; continue _fun0143 }
case 40:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if(var2) { _fun0143_ip = 100; continue _fun0143 }
case 83:
                        var2 = new Array(0);
                        return var2;
case 100:
                        var5 = _closure2_slot1;
                        var2 = var5.ensureModule;
                        var7 = 'discord_media';
                        var2 = var2.bind(var5)(var7);
                        SaveGenerator(address=79);
case 223:
                        return var2;
case 52:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0143_ip = 14; continue _fun0143 }
case 154:
                        var6 = _closure2_slot1;
                        var5 = var6.requireModule;
                        var5 = var5.bind(var6)(var7);
                        var6 = null;
                        var7 = var6 == var5;
                        var4 = undefined;
                        if(var7) { _fun0143_ip = 222; continue _fun0143 }
case 79:
                        var4 = var5.getGpuStats;
case 222:
                        if(!(var6 != var4)) { _fun0143_ip = 133; continue _fun0143 }
case 89:
                        var4 = var5.getGpuStats;
                        var3 = _closure2_slot0;
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.catch;
                        var3 = function() {
                            var1 = new Array(0);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        _fun0143_ip = 158; continue _fun0143;
case 133:
                        var3 = new Array(0);
case 158:
                        return var3;
case 14:
                        return var2;
case 129:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var8['GetSystemGpuStats'] = var12;
        var _closure1_slot24 = var8;
        var9 = 15;
        var9 = var11[var9];
        var11 = var10.bind(var1)(var9);
        var10 = var11.fileFinishedImporting;
        var9 = 'utils/web/DesktopNativeUtils.tsx';
        var9 = var10.bind(var11)(var9);
        var3['default'] = var8;
        var3['SaveImageResult'] = var7;
        var3['sanitizeFilename'] = var6;
        var3['getFileData'] = var5;
        var3['getImageData'] = var4;
        var3['NativePermissionRequestType'] = var2;
        return var1;
    }
})();