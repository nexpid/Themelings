// app/utils/web/DesktopNativeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var12 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var13 = dependencyMap;
        var _closure1_slot0 = var12;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var13;
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
                var2 = var3.@@iterator;
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
                var9 = _closure1_slot23;
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
                var7 = _closure1_slot23;
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
        var _closure1_slot22 = var1;
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
        var _closure1_slot23 = var1;
        var8 = function sanitizeFilename(arg1) {
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
                var4 = _closure1_slot16;
                var3 = '$1';
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.replace;
                var4 = /(.+)@([a-zA-Z0-9]+)$/;
                var3 = '$1.$2';
                var5 = var5.bind(var6)(var4, var3);
                var4 = var5.replace;
                var3 = _closure1_slot15;
                var2 = '_';
                var2 = var4.bind(var5)(var3, var2);
case 37: // try_end0
                return var2;
case 38: // catch_target0
                CatchBlockStart(arg_register=1);
                var5 = var1;
                var4 = var5.replace;
                var3 = _closure1_slot17;
                var2 = '$1';
                var5 = var4.bind(var5)(var3, var2);
                var4 = var5.replace;
                var3 = /(.+)%40([a-zA-Z0-9]+)$/;
                var2 = '$1.$2';
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.replace;
                var2 = _closure1_slot15;
                var1 = '_';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot24 = var8;
        var7 = function getFileData() {
            var1 = undefined;
            var4 = _closure1_slot26;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot25 = var7;
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
            _closure1_slot26 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot26 = var1;
        var6 = function getImageData(arg1) {
            var3 = _closure1_slot25;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var _closure1_slot27 = var6;
        var1 = function normalizeRunningGame(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var7 = _closure1_slot12;
                var8 = var3.id;
                var2 = null;
                var9 = var2 != var8;
                var4 = '';
                var6 = var4;
                if(!var9) { _fun0007_ip = 48; continue _fun0007 }
case 33:
                var6 = var8;
case 48:
                var6 = var7[var6];
                var1['id'] = var6;
                var6 = global;
                var9 = var6.parseInt;
                var6 = var3.id;
                var7 = var2 != var6;
                var8 = var4;
                if(!var7) { _fun0007_ip = 35; continue _fun0007 }
case 30:
                var8 = var6;
case 35:
                var7 = undefined;
                var6 = 10;
                var6 = var9.bind(var7)(var8, var6);
                var1['nativeProcessObserverId'] = var6;
                var6 = var3.gameName;
                if(!(var2 == var6)) { _fun0007_ip = 49; continue _fun0007 }
case 11:
                var6 = var3.name;
case 49:
                var1['name'] = var6;
                var6 = var3.origGameName;
                var1['origGameName'] = var6;
                var6 = var3.name;
                var8 = var2 != var6;
                if(!var8) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var4 = var6;
case 50:
                var1['processName'] = var4;
                var4 = var3.hidden;
                var1['hidden'] = var4;
                var4 = var3.elevated;
                var1['elevated'] = var4;
                var6 = var3.sandboxed;
                var4 = var2 != var6;
                if(!var4) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var4 = var6;
case 52:
                var1['sandboxed'] = var4;
                var4 = var3.lastFocused;
                var1['lastFocused'] = var4;
                var4 = var3.exePath;
                var1['exePath'] = var4;
                var4 = var3.exeName;
                var1['exeName'] = var4;
                var4 = var3.cmdLine;
                var1['cmdLine'] = var4;
                var4 = var3.distributor;
                var1['distributor'] = var4;
                var4 = var3.sku;
                var1['sku'] = var4;
                var4 = var3.pid;
                var1['pid'] = var4;
                var4 = var3.pidPath;
                if(!(var2 == var4)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var4 = new Array(0);
case 54:
                var1['pidPath'] = var4;
                var4 = var3.gameMetadata;
                var1['gameMetadata'] = var4;
                var6 = var3.windowHandle;
                var8 = var2 != var6;
                var4 = null;
                if(!var8) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var4 = var6;
case 56:
                var1['windowHandle'] = var4;
                var4 = var3.fullscreenType;
                if(!(var2 == var4)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 4;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.RunningProcessFullscreenType;
                var4 = var5.UNKNOWN;
case 58:
                var1['fullscreenType'] = var4;
                var3 = var3.isLauncher;
                var2 = var2 != var3;
                if(!var2) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                var2 = var3;
case 60:
                var1['isLauncher'] = var2;
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var2 = function decideFileExtension(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg2;
                var2 = null;
                if(!(var2 != var4)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                var3 = var4.startsWith;
                var1 = 'image/';
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0008_ip = 62; continue _fun0008 }
case 64:
                var3 = var4.split;
                var1 = '/';
                var3 = var3.bind(var4)(var1);
                var1 = 1;
                var4 = var3[var1];
                var3 = var2 == var4;
                var1 = undefined;
                if(var3) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                var3 = var4.toLowerCase;
                var1 = var3.bind(var4)();
case 65:
                var3 = 'jpeg';
                if(!(var3 !== var1)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                if(!(var2 == var1)) { _fun0008_ip = 69; continue _fun0008 }
case 62:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var6 = 5;
                var3 = var3[var6];
                var5 = undefined;
                var7 = var4.bind(var5)(var3);
                var4 = var7.toURLSafe;
                var3 = arg1;
                var3 = var4.bind(var7)(var3);
                if(!(var2 == var3)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                return var5;
case 70:
                var8 = var3.pathname;
                var4 = var2 == var8;
                var3 = undefined;
                if(var4) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                var7 = var8.split;
                var4 = '.';
                var7 = var7.bind(var8)(var4);
                var4 = var2 == var7;
                var3 = undefined;
                if(var4) { _fun0008_ip = 72; continue _fun0008 }
case 74:
                var4 = var7.pop;
                var7 = var4.bind(var7)();
                var4 = var2 == var7;
                var3 = undefined;
                if(var4) { _fun0008_ip = 72; continue _fun0008 }
case 39:
                var4 = var7.toLowerCase;
                var3 = var4.bind(var7)();
case 72:
                var4 = var2 != var3;
                var2 = undefined;
                if(!var4) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                var4 = var3.length;
                var4 = var4 <= var6;
                var2 = undefined;
                if(!var4) { _fun0008_ip = 75; continue _fun0008 }
case 77:
                var2 = var3;
case 75:
                return var2;
case 69:
                return var1;
case 67:
                var1 = 'jpg';
                return var1;
            }
        };
        var _closure1_slot29 = var2;
        var1 = function backwardCompatSend(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isDesktop;
                var4 = var4.bind(var5)();
                if(!var4) { _fun0009_ip = 78; continue _fun0009 }
case 79: // try_start_0
                var4 = _closure1_slot21;
                var3 = var4.send;
                var2 = var3.bind(var4)(var2);
case 28: // try_end0
                _fun0009_ip = 78; continue _fun0009;
case 80: // catch_target0
                CatchBlockStart(arg_register=1);
case 78:
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var4 = global;
        var14 = var4.Object;
        var10 = var14.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var14)(var3, var1, var5);
        var15 = 0;
        var5 = var13[var15];
        var1 = undefined;
        var5 = var9.bind(var1)(var5);
        var _closure1_slot3 = var5;
        var14 = 1;
        var5 = var13[var14];
        var5 = var9.bind(var1)(var5);
        var _closure1_slot4 = var5;
        var10 = 2;
        var5 = var13[var10];
        var5 = var12.bind(var1)(var5);
        var5 = var5.NativeFeatures;
        var _closure1_slot5 = var5;
        var5 = var4.window;
        var9 = var5.DiscordNative;
        var _closure1_slot6 = var9;
        var17 = var4.Set;
        var5 = var17.prototype;
        var16 = Object.create(var5, {constructor: {value: var17}});
        var21 = ['jpg', 'jpeg', 'png'];
        var22 = var16;
        var5 = new var22[var17](var21, var20);
        var5 = var5 instanceof Object ? var5 : var16;
        var _closure1_slot7 = var5;
        var17 = var4.Set;
        var5 = var17.prototype;
        var16 = Object.create(var5, {constructor: {value: var17}});
        var21 = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp', 'avif'];
        var22 = var16;
        var5 = new var22[var17](var21, var20);
        var5 = var5 instanceof Object ? var5 : var16;
        var _closure1_slot8 = var5;
        var16 = null;
        var _closure1_slot9 = var16;
        var _closure1_slot10 = var16;
        var _closure1_slot11 = var16;
        var5 = {};
        var _closure1_slot12 = var5;
        if(!(var16 != var9)) { _fun0001_ip = 81; continue _fun0001 }
case 82:
        var17 = var9.remoteApp;
        var5 = var17.getVersion;
        var18 = var5.bind(var17)();
        var17 = var18.split;
        var5 = '.';
        var18 = var17.bind(var18)(var5);
        var17 = var18.map;
        var5 = function(arg1) {
            var1 = global;
            var3 = var1.parseInt;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5 = var17.bind(var18)(var5);
        _closure1_slot9 = var5;
        var5 = var9.remoteApp;
        var5 = var5.getModuleVersions;
        var17 = var16 == var5;
        var5 = undefined;
        if(var17) { _fun0001_ip = 83; continue _fun0001 }
case 84:
        var18 = var9.remoteApp;
        var17 = var18.getModuleVersions;
        var5 = var17.bind(var18)();
case 83:
        _closure1_slot11 = var5;
        var5 = var9.remoteApp;
        var5 = var5.getBuildNumber;
        var16 = var16 == var5;
        var5 = undefined;
        if(var16) { _fun0001_ip = 85; continue _fun0001 }
case 86:
        var16 = var9.remoteApp;
        var9 = var16.getBuildNumber;
        var5 = var9.bind(var16)();
case 85:
        _closure1_slot10 = var5;
case 81:
        var9 = var4.Set;
        var4 = var9.prototype;
        var22 = Object.create(var4, {constructor: {value: var9}});
        var21 = ['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice'];
        var4 = new var22[var9](var21, var20);
        var4 = false;
        var _closure1_slot13 = var4;
        var4 = 'lastImageSaveDirectory';
        var _closure1_slot14 = var4;
        var4 = /[<>:"\/\\|?*@]/g;
        var _closure1_slot15 = var4;
        var4 = /(\.[a-zA-Z0-9]+):[^.]*$/;
        var _closure1_slot16 = var4;
        var4 = /(\.[a-zA-Z0-9]+)%3A.+$/;
        var _closure1_slot17 = var4;
        var4 = /[^a-zA-Z0-9]/g;
        var _closure1_slot18 = var4;
        var4 = /\.[^.]*$/;
        var _closure1_slot19 = var4;
        var9 = {};
        var4 = 'saved';
        var9['SAVED'] = var4;
        var4 = 'canceled';
        var9['CANCELED'] = var4;
        var4 = 'errored';
        var9['ERRORED'] = var4;
        var _closure1_slot20 = var9;
        var5 = {};
        var5['Camera'] = var15;
        var4 = 'Camera';
        var5[var15] = var4;
        var5['Microphone'] = var14;
        var4 = 'Microphone';
        var5[var14] = var4;
        var5['Photo'] = var10;
        var4 = 'Photo';
        var5[var10] = var4;
        var10 = 3;
        var5['InputMonitoring'] = var10;
        var4 = 'InputMonitoring';
        var5[var10] = var4;
        var10 = 4;
        var5['ScreenRecording'] = var10;
        var4 = 'ScreenRecording';
        var5[var10] = var4;
        var4 = {};
        var10 = 'VIDEO';
        var4['VIDEO'] = var10;
        var10 = 'MUTE';
        var4['MUTE'] = var10;
        var10 = 'DEAFEN';
        var4['DEAFEN'] = var10;
        var10 = 'DISCONNECT';
        var4['DISCONNECT'] = var10;
        var10 = {};
        var14 = function requireModule(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.nativeModules;
            var2 = var3.requireModule;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['requireModule'] = var14;
        var14 = function ensureModule(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0010_ip = 62; continue _fun0010 }
case 87:
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
                _fun0010_ip = 88; continue _fun0010;
case 62:
                var2 = _closure1_slot6;
                var4 = var2.nativeModules;
                var3 = var4.ensureModule;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 88:
                return var1;
            }
        };
        var10['ensureModule'] = var14;
        var15 = function get canBootstrapNewUpdater() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = _closure1_slot6;
                var1 = var1.nativeModules;
                var1 = var1.canBootstrapNewUpdater;
                if(var1) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                var1 = false;
case 89:
                return var1;
            }
        };
        var14 = 'canBootstrapNewUpdater';
        Object.defineProperty(var10, var14, {get: var15, set: var1, enumerable: true});
        var14 = function getCrashReporterMetadata() {
            var1 = _closure1_slot6;
            var2 = var1.crashReporter;
            var1 = var2.getMetadata;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['getCrashReporterMetadata'] = var14;
        var14 = function getSetting(arg1, arg2) {
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
                        if(var2) { _fun0012_ip = 80; continue _fun0012 }
case 91:
                        var2 = _closure1_slot6;
                        var5 = var2.settings;
                        var4 = var5.get;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = var4.bind(var5)(var3, var2);
                        SaveGenerator(address=46);
case 92:
                        return var2;
case 2:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 4; continue _fun0012 }
case 93:
                        return var2;
case 4:
                        return var2;
case 80:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['getSetting'] = var14;
        var14 = function beforeUnload() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var6 = this;
                var1 = undefined;
                var2 = undefined;
case 91: // try_start_0
                var4 = var6.requireModule;
                var3 = 'discord_overlay2';
                var2 = var4.bind(var6)(var3);
case 90: // try_end0
                _fun0013_ip = 34; continue _fun0013;
case 89: // catch_target0
                CatchBlockStart(arg_register=2);
case 34:
                var4 = var2;
                var3 = var4;
                if(!var4) { _fun0013_ip = 2; continue _fun0013 }
case 94:
                var4 = var2;
                var3 = var4.reset;
case 2:
                if(!var3) { _fun0013_ip = 95; continue _fun0013 }
case 5:
                var4 = var2;
                var3 = var4.reset;
                var3 = var3.bind(var4)();
case 95:
                var5 = var2;
                var4 = var5;
                if(!var5) { _fun0013_ip = 68; continue _fun0013 }
case 96:
                var5 = var2;
                var4 = var5.disconnectAllProcesses;
case 68:
                var3 = var4;
                if(!var4) { _fun0013_ip = 37; continue _fun0013 }
case 9:
                var4 = var2;
                var3 = var4.destroyHostProcess;
case 37:
                if(!var3) { _fun0013_ip = 97; continue _fun0013 }
case 98:
                var3 = var2;
                var2 = var3.disconnectAllProcesses;
                var2 = var2.bind(var3)();
                var2 = var3.destroyHostProcess;
                var2 = var2.bind(var3)();
case 97:
                var3 = _closure1_slot6;
                var4 = var3.remotePowerMonitor;
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
                if(!var5) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 7;
                var5 = var10[var5];
                var5 = var9.bind(var1)(var5);
                var8 = var5.Storage;
                var7 = var8.get;
                var5 = 8;
                var5 = var10[var5];
                var5 = var9.bind(var1)(var5);
                var5 = var5.DOMAIN_MIGRATION_SUCCESS_KEY;
                var7 = var7.bind(var8)(var5);
                var5 = true;
                var4 = var5 !== var7;
case 99:
                var3 = var4;
                if(!var4) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                var5 = var6.supportsFeature;
                var4 = _closure1_slot5;
                var4 = var4.USER_DATA_CACHE;
                var3 = var5.bind(var6)(var4);
case 101:
                if(!var3) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                var3 = _closure1_slot6;
                var4 = var3.userDataCache;
                var3 = var4.cacheUserData;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var5 = var2.Storage;
                var2 = var5.stringify;
                var2 = var2.bind(var5)();
                var2 = var3.bind(var4)(var2);
case 103:
                return var1;
            }
        };
        var10['beforeUnload'] = var14;
        var14 = function inputEventRegister(arg1, arg2, arg3, arg4) {
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
                    if(var2) { _fun0014_ip = 105; continue _fun0014 }
case 90:
                    var5 = var3;
case 105:
                    var4 = undefined;
                    if(var2) { _fun0014_ip = 106; continue _fun0014 }
case 107:
                    var7 = var6().value;
                    var3 = var1;
                    var3 = var3 === var8;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0014_ip = 106; continue _fun0014 }
case 108:
                    var4 = var7;
                    var2 = var3;
case 106:
                    var3 = undefined;
                    if(var2) { _fun0014_ip = 62; continue _fun0014 }
case 95:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var8;
                    var3 = undefined;
                    var2 = var6;
                    if(var6) { _fun0014_ip = 62; continue _fun0014 }
case 109:
                    var3 = var7;
                    var2 = var6;
case 62:
                    if(var2) { _fun0014_ip = 110; continue _fun0014 }
case 111:
                    var1.return();
case 110:
                    var2 = 'string';
                    var1 = typeof var3;
                    if(!(var2 !== var1)) { _fun0014_ip = 112; continue _fun0014 }
case 113:
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    _fun0014_ip = 44; continue _fun0014;
case 112:
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
        var10['inputEventRegister'] = var14;
        var14 = function inputEventUnregister(arg1) {
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
        var10['inputEventUnregister'] = var14;
        var14 = function setOnInputEventCallback(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.isPlatformEmbedded;
                if(!var2) { _fun0015_ip = 114; continue _fun0015 }
case 94:
                var2 = var3.getDiscordUtils;
                var4 = var2.bind(var3)();
                var3 = var4.inputWatchAll;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 114:
                return var1;
            }
        };
        var10['setOnInputEventCallback'] = var14;
        var14 = function setFocused(arg1) {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var3 = var1.bind(var2)();
            var2 = var3.inputSetFocused;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['setFocused'] = var14;
        var14 = function setObservedGamesCallback(arg1, arg2, arg3) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var7 = this;
                var3 = arg1;
                var4 = arg2;
                var1 = arg3;
                var _closure2_slot0 = var1;
                var1 = undefined;
                var5 = undefined;
case 115: // try_start_0
                var6 = {};
                _closure1_slot12 = var6;
                var6 = 0;
                var _closure2_slot1 = var6;
                var6 = var7.getDiscordUtils;
                var5 = var6.bind(var7)();
                if(!var4) { _fun0016_ip = 116; continue _fun0016 }
case 117:
                var4 = var5;
                var6 = var4.setObservedGamesCallback2;
                var4 = null;
                if(!(var4 == var6)) { _fun0016_ip = 118; continue _fun0016 }
case 116:
                var4 = var5;
                var4 = var4.setObservedGamesCallback;
                _fun0016_ip = 119; continue _fun0016;
case 118:
                var4 = var5.setObservedGamesCallback2;
case 119:
                var6 = var3;
                var5 = var6.map;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure2_slot1;
                        var3 = var3 + 1;
                        _closure2_slot1 = var3;
                        var4 = var2.id;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0017_ip = 92; continue _fun0017 }
case 34:
                        var4 = _closure1_slot12;
                        var1 = var2.id;
                        var4[var3] = var1;
case 92:
                        var1 = {};
                        var6 = var1;
                        var5 = var2;
                        var4 = copyDataProperties(var6, var5);
                        var4 = var2.cmdLine;
                        var2 = 'cmdline';
                        var1[var2] = var4;
                        var2 = 'id';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var2 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var4.map;
                    var1 = _closure1_slot28;
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var1)(var3, var2);
case 88: // try_end0
                _fun0016_ip = 120; continue _fun0016;
case 121: // catch_target0
                CatchBlockStart(arg_register=1);
case 120:
                return var1;
            }
        };
        var10['setObservedGamesCallback'] = var14;
        var14 = function setGameDetectionCallback(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = this;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var2 = var3.getDiscordUtils;
                var4 = var2.bind(var3)();
                var3 = var4.setGameDetectionCallback;
                var2 = null;
                if(!(var2 != var3)) { _fun0018_ip = 117; continue _fun0018 }
case 87:
                var2 = var3.call;
                var1 = function(arg1, arg2) {
                    var3 = arg1;
                    var5 = arg2;
                    var4 = _closure2_slot0;
                    var1 = var3.map;
                    var2 = _closure1_slot28;
                    var3 = var1.bind(var3)(var2);
                    var1 = var5.map;
                    var2 = var1.bind(var5)(var2);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var4, var1);
case 117:
                var1 = undefined;
                return var1;
            }
        };
        var10['setGameDetectionCallback'] = var14;
        var14 = function setGameDetectionErrorCallback(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var4 = var1.bind(var2)();
                var3 = var4.setGameDetectionErrorCallback;
                var1 = null;
                if(!(var1 != var3)) { _fun0019_ip = 122; continue _fun0019 }
case 123:
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
case 122:
                var1 = undefined;
                return var1;
            }
        };
        var10['setGameDetectionErrorCallback'] = var14;
        var14 = function setRobloxSubgameDetectionConfig(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var5 = var1.bind(var2)();
                var4 = var5.setRobloxSubgameDetectionConfig;
                var1 = null;
                if(!(var1 != var4)) { _fun0020_ip = 124; continue _fun0020 }
case 123:
                var3 = var4.call;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var5, var2, var1);
case 124:
                var1 = undefined;
                return var1;
            }
        };
        var10['setRobloxSubgameDetectionConfig'] = var14;
        var14 = function checkForRobloxSubgameUpdate() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var3 = var1.bind(var2)();
                var2 = var3.checkForRobloxSubgameUpdate;
                var1 = null;
                if(!(var1 != var2)) { _fun0021_ip = 125; continue _fun0021 }
case 123:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
case 125:
                var1 = undefined;
                return var1;
            }
        };
        var10['checkForRobloxSubgameUpdate'] = var14;
        var14 = function setCandidateGamesCallback(arg1) {
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
                var1 = _closure1_slot28;
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['setCandidateGamesCallback'] = var14;
        var14 = function clearCandidateGamesCallback() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var2 = var1.bind(var2)();
            var1 = var2.clearCandidateGamesCallback;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var10['clearCandidateGamesCallback'] = var14;
        var14 = function setGameCandidateOverrides(arg1) {
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
                var1[var3] = var4;
                var3 = var2.name;
                var2 = 'gameName';
                var1[var2] = var3;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['setGameCandidateOverrides'] = var14;
        var14 = function setObserverDebugCallback(arg1, arg2, arg3) {
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
        var10['setObserverDebugCallback'] = var14;
        var14 = function clearObserverDebugCallback() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var6 = var1.bind(var2)();
            var5 = var6.setObserverDebugCallback;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
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
        var10['clearObserverDebugCallback'] = var14;
        var14 = function shouldDisplayNotifications() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var2 = var1.bind(var2)();
            var1 = var2.shouldDisplayNotifications;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['shouldDisplayNotifications'] = var14;
        var14 = function getVoiceEngine() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var4 = this;
                var3 = var4.requireModule;
                var1 = 'discord_voice';
                var1 = var3.bind(var4)(var1);
                var _closure2_slot0 = var1;
                var4 = _closure1_slot13;
                if(var4) { _fun0022_ip = 126; continue _fun0022 }
case 48:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 10;
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
case 126:
                var2 = true;
                _closure1_slot13 = var2;
                return var1;
            }
        };
        var10['getVoiceEngine'] = var14;
        var14 = function getDiscordUtils() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = this;
                var1 = _closure1_slot13;
                if(var1) { _fun0023_ip = 105; continue _fun0023 }
case 127: // try_start_0
                var1 = var3.getVoiceEngine;
                var1 = var1.bind(var3)();
case 31: // try_end0
                _fun0023_ip = 105; continue _fun0023;
case 123: // catch_target0
                CatchBlockStart(arg_register=0);
case 105:
                var2 = var3.requireModule;
                var1 = 'discord_utils';
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var10['getDiscordUtils'] = var14;
        var14 = function isSystemDarkMode() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var4 = this;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.isWindows;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0024_ip = 38; continue _fun0024 }
case 128:
                var2 = var4.getDiscordUtils;
                var6 = var2.bind(var4)();
                var5 = var6.isSystemDarkMode;
                var2 = null;
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0024_ip = 129; continue _fun0024 }
case 126:
                var4 = var5.call;
                var3 = var4.bind(var5)(var6);
case 129:
                var2 = var2 == var3;
                if(var2) { _fun0024_ip = 130; continue _fun0024 }
case 131:
                var2 = var3;
case 130:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var10['isSystemDarkMode'] = var14;
        var14 = function getVoiceFilters() {
            var3 = this;
            var2 = var3.requireModule;
            var1 = 'discord_voice_filters';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['getVoiceFilters'] = var14;
        var14 = function getGameUtils() {
            var3 = this;
            var2 = var3.requireModule;
            var1 = 'discord_game_utils';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['getGameUtils'] = var14;
        var14 = function getCloudSync() {
            var3 = this;
            var2 = var3.requireModule;
            var1 = 'discord_cloudsync';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['getCloudSync'] = var14;
        var14 = function getDispatch() {
            var3 = this;
            var2 = var3.requireModule;
            var1 = 'discord_dispatch';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['getDispatch'] = var14;
        var14 = function setBadge(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var6 = arg1;
                var5 = this;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 6;
                var3 = var1[var7];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getPlatformName;
                var4 = var3.bind(var4)();
                var3 = 'darwin';
                if(!(var3 !== var4)) { _fun0025_ip = 42; continue _fun0025 }
case 132:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getPlatformName;
                var4 = var3.bind(var4)();
                var3 = 'win32';
                if(!(var3 !== var4)) { _fun0025_ip = 133; continue _fun0025 }
case 131:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getPlatformName;
                var4 = var3.bind(var4)();
                var3 = 'linux';
                if(!(var3 === var4)) { _fun0025_ip = 134; continue _fun0025 }
case 135:
                var3 = _closure1_slot6;
                var7 = var3.remoteApp;
                var4 = var7.setBadgeCount;
                var3 = 0;
                var8 = var6 >= var3;
                if(!var8) { _fun0025_ip = 136; continue _fun0025 }
case 137:
                var3 = var6;
case 136:
                var3 = var4.bind(var7)(var3);
                _fun0025_ip = 134; continue _fun0025;
case 133:
                var4 = var5.send;
                var3 = 'APP_BADGE_SET';
                var3 = var4.bind(var5)(var3, var6);
                _fun0025_ip = 134; continue _fun0025;
case 42:
                var4 = '•';
                var3 = -1;
                if(!(var3 !== var6)) { _fun0025_ip = 21; continue _fun0025 }
case 138:
                var3 = 0;
                var3 = var6 > var3;
                var5 = '';
                var4 = var5;
                if(!var3) { _fun0025_ip = 21; continue _fun0025 }
case 139:
                var3 = global;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var4 = var3.bind(var5)(var6);
case 21:
                var2 = _closure1_slot6;
                var2 = var2.remoteApp;
                var3 = var2.dock;
                var2 = var3.setBadge;
                var2 = var2.bind(var3)(var4);
case 134:
                return var1;
            }
        };
        var10['setBadge'] = var14;
        var14 = function setSystemTrayIcon(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.isPlatformEmbedded;
                if(!var2) { _fun0026_ip = 80; continue _fun0026 }
case 94:
                var4 = var5.send;
                var3 = 'SYSTEM_TRAY_SET_ICON';
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
case 80:
                return var1;
            }
        };
        var10['setSystemTrayIcon'] = var14;
        var14 = function setThumbarButtons(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.isPlatformEmbedded;
                if(!var4) { _fun0027_ip = 11; continue _fun0027 }
case 94:
                var2 = _closure1_slot6;
                var5 = var2.thumbar;
                var6 = null;
                var2 = var6 == var5;
                if(var2) { _fun0027_ip = 140; continue _fun0027 }
case 80:
                var4 = var5.setThumbarButtons;
                var2 = var6 == var4;
case 140:
                if(var2) { _fun0027_ip = 11; continue _fun0027 }
case 96:
                var4 = var5.setThumbarButtons;
                var2 = var3.isSystemDarkMode;
                var3 = var2.bind(var3)();
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
case 11:
                return var1;
            }
        };
        var10['setThumbarButtons'] = var14;
        var14 = function bounceDock(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var4 = var4.isPlatformEmbedded;
                if(!var4) { _fun0028_ip = 95; continue _fun0028 }
case 48:
                var4 = _closure1_slot6;
                var4 = var4.remoteApp;
                var _closure2_slot0 = var4;
                var6 = var4.dock;
                var5 = null;
                if(!(var5 == var6)) { _fun0028_ip = 141; continue _fun0028 }
case 95:
                return var3;
case 141:
                var6 = var4.dock;
                var5 = var6.bounce;
                var4 = arg1;
                var4 = var5.bind(var6)(var4);
                var _closure2_slot1 = var4;
                var2 = _closure1_slot4;
                var1 = function* () {
                    var1 = function* anon_0_() {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0029_ip = 4; continue _fun0029 }
case 91:
                            var2 = _closure2_slot1;
                            SaveGenerator(address=18);
case 142:
                            return var2;
case 143:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0029_ip = 93; continue _fun0029 }
case 90:
                            var3 = _closure2_slot0;
                            var4 = var3.dock;
                            var3 = var4.cancelBounce;
                            var3 = var3.bind(var4)(var2);
                            var3 = undefined;
                            return var3;
case 93:
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
        var10['bounceDock'] = var14;
        var14 = function setSystemTrayApplications(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.isPlatformEmbedded;
                if(!var2) { _fun0030_ip = 80; continue _fun0030 }
case 94:
                var4 = var5.send;
                var3 = 'SYSTEM_TRAY_SET_APPLICATIONS';
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
case 80:
                return var1;
            }
        };
        var10['setSystemTrayApplications'] = var14;
        var15 = function get architecture() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.isPlatformEmbedded;
                var1 = '';
                if(!var3) { _fun0031_ip = 132; continue _fun0031 }
case 144:
                var2 = _closure1_slot6;
                var2 = var2.process;
                var1 = var2.arch;
case 132:
                return var1;
            }
        };
        var14 = 'architecture';
        Object.defineProperty(var10, var14, {get: var15, set: var1, enumerable: true});
        var15 = function get releaseChannel() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.isPlatformEmbedded;
                if(var2) { _fun0032_ip = 145; continue _fun0032 }
case 87:
                var2 = '';
                return var2;
case 145:
                var1 = _closure1_slot6;
                var2 = var1.remoteApp;
                var1 = var2.getReleaseChannel;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0032_ip = 118; continue _fun0032 }
case 146:
                var1 = var2;
case 118:
                return var1;
            }
        };
        var14 = 'releaseChannel';
        Object.defineProperty(var10, var14, {get: var15, set: var1, enumerable: true});
        var15 = function get version() {
            var1 = _closure1_slot9;
            return var1;
        };
        var14 = 'version';
        Object.defineProperty(var10, var14, {get: var15, set: var1, enumerable: true});
        var15 = function get buildNumber() {
            var1 = _closure1_slot10;
            return var1;
        };
        var14 = 'buildNumber';
        Object.defineProperty(var10, var14, {get: var15, set: var1, enumerable: true});
        var15 = function get moduleVersions() {
            var1 = _closure1_slot11;
            return var1;
        };
        var14 = 'moduleVersions';
        Object.defineProperty(var10, var14, {get: var15, set: var1, enumerable: true});
        var15 = function get parsedOSRelease() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0033_ip = 145; continue _fun0033 }
case 87:
                var1 = new Array(0);
                _fun0033_ip = 62; continue _fun0033;
case 145:
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
case 62:
                return var1;
            }
        };
        var14 = 'parsedOSRelease';
        Object.defineProperty(var10, var14, {get: var15, set: var1, enumerable: true});
        var14 = function copy(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0034_ip = 80; continue _fun0034 }
case 87:
                var2 = _closure1_slot6;
                var4 = var2.clipboard;
                var3 = var4.copy;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 80:
                return var1;
            }
        };
        var10['copy'] = var14;
        var14 = function copyImage(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0035_ip = 147; continue _fun0035 }
case 40:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var7 = var6[var2];
                        var3 = undefined;
                        var9 = var5.bind(var3)(var7);
                        var8 = _closure1_slot0;
                        var7 = 6;
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
                        var6 = _closure1_slot27;
                        var2 = _closure2_slot0;
                        var2 = var6.bind(var3)(var2);
                        SaveGenerator(address=137);
case 148:
                        return var2;
case 44:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0035_ip = 102; continue _fun0035 }
case 149:
                        var8 = _closure1_slot29;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot1;
                        var8 = var8.bind(var3)(var7, var6);
                        var6 = null;
                        if(!(var6 != var8)) { _fun0035_ip = 150; continue _fun0035 }
case 151:
                        var7 = _closure1_slot7;
                        var6 = var7.has;
                        var6 = var6.bind(var7)(var8);
                        if(var6) { _fun0035_ip = 152; continue _fun0035 }
case 150:
                        var7 = _closure2_slot0;
                        _fun0035_ip = 153; continue _fun0035;
case 152:
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var6 = var5.concat;
                        var5 = 'image.';
                        var7 = var6.bind(var5)(var8);
case 153:
                        var4 = _closure1_slot6;
                        var6 = var4.clipboard;
                        var5 = var6.copyImage;
                        var4 = global;
                        var8 = var4.Buffer;
                        var4 = var8.from;
                        var4 = var4.bind(var8)(var2);
                        var4 = var5.bind(var6)(var4, var7);
                        return var3;
case 102:
                        return var2;
case 147:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['copyImage'] = var14;
        var14 = function copyImageBlob(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0036_ip = 154; continue _fun0036 }
case 91:
                        var4 = _closure2_slot0;
                        var2 = var4.arrayBuffer;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=28);
case 89:
                        return var2;
case 34:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0036_ip = 9; continue _fun0036 }
case 87:
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
case 154:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['copyImageBlob'] = var14;
        var14 = function canSaveImage(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var6 = arg1;
                var1 = null;
                if(!(var1 != var6)) { _fun0037_ip = 155; continue _fun0037 }
case 63:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0037_ip = 155; continue _fun0037 }
case 124:
                var4 = _closure1_slot29;
                var3 = arg2;
                var4 = var4.bind(var5)(var6, var3);
                var1 = var1 == var4;
                if(var1) { _fun0037_ip = 156; continue _fun0037 }
case 114:
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 156:
                return var1;
case 155:
                var1 = false;
                return var1;
            }
        };
        var10['canSaveImage'] = var14;
        var14 = function saveImage(arg1, arg2, arg3) {
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
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0038_ip = 157; continue _fun0038 }
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
                        var3 = 6;
                        var3 = var9[var3];
                        var3 = var10.bind(var8)(var3);
                        var10 = var3.isPlatformEmbedded;
                        var3 = 'Save image method called outside native app';
                        var3 = var11.bind(var8)(var10, var3);
                        var3 = 5;
                        var3 = var9[var3];
                        var10 = var7.bind(var8)(var3);
                        var9 = var10.toURLSafe;
                        var7 = _closure2_slot0;
                        var9 = var9.bind(var10)(var7);
                        var7 = null;
                        if(!(var7 != var9)) { _fun0038_ip = 158; continue _fun0038 }
case 159:
                        var12 = var9.pathname;
                        var11 = var12.split;
                        var10 = '/';
                        var11 = var11.bind(var12)(var10);
                        var10 = var11.pop;
                        var10 = var10.bind(var11)();
                        var12 = var7 != var10;
                        var11 = 'unknown';
                        if(!var12) { _fun0038_ip = 160; continue _fun0038 }
case 161:
                        var11 = var10;
case 160:
                        var4 = var11;
                        var10 = _closure1_slot24;
                        var4 = var10.bind(var8)(var11);
                        var11 = var9.searchParams;
                        var10 = var11.get;
                        var9 = 'format';
                        var11 = var10.bind(var11)(var9);
                        if(!(var7 == var11)) { _fun0038_ip = 162; continue _fun0038 }
case 163:
                        var10 = var4;
                        var9 = var10.includes;
                        var15 = '.';
                        var9 = var9.bind(var10)(var15);
                        if(var9) { _fun0038_ip = 164; continue _fun0038 }
case 165:
                        var14 = var4;
                        var12 = _closure1_slot29;
                        var10 = _closure2_slot0;
                        var9 = _closure2_slot1;
                        var9 = var12.bind(var8)(var10, var9);
                        if(!(var7 == var9)) { _fun0038_ip = 166; continue _fun0038 }
case 167:
                        var9 = _closure2_slot2;
case 166:
                        var10 = var7 != var9;
                        var12 = 'png';
                        if(!var10) { _fun0038_ip = 168; continue _fun0038 }
case 169:
                        var12 = var9;
case 168:
                        var9 = global;
                        var9 = var9.HermesInternal;
                        var10 = var9.concat;
                        var9 = '';
                        var4 = var10.bind(var9)(var14, var15, var12);
                        _fun0038_ip = 164; continue _fun0038;
case 162:
                        var10 = var11.replace;
                        var9 = _closure1_slot18;
                        var14 = '';
                        var10 = var10.bind(var11)(var9, var14);
                        var9 = var10.toLowerCase;
                        var12 = var9.bind(var10)();
                        var10 = var12.length;
                        var9 = 0;
                        if(!(var10 > var9)) { _fun0038_ip = 164; continue _fun0038 }
case 170:
                        var11 = var4;
                        var10 = var11.replace;
                        var9 = _closure1_slot19;
                        var11 = var10.bind(var11)(var9, var14);
                        var9 = global;
                        var9 = var9.HermesInternal;
                        var10 = var9.concat;
                        var9 = '.';
                        var4 = var10.bind(var14)(var11, var9, var12);
case 164:
                        var9 = _closure1_slot27;
                        var3 = _closure2_slot0;
                        var3 = var9.bind(var8)(var3);
                        SaveGenerator(address=387);
case 171:
                        return var3;
case 84:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                        if(var9) { _fun0038_ip = 172; continue _fun0038 }
case 173:
                        var9 = global;
                        var10 = var9.Buffer;
                        var9 = var10.from;
                        var6 = var9.bind(var10)(var3);
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var9 = 7;
                        var10 = var10[var9];
                        var10 = var11.bind(var8)(var10);
                        var12 = var10.Storage;
                        var11 = var12.get;
                        var10 = _closure1_slot14;
                        var10 = var11.bind(var12)(var10);
                        var13 = var10;
                        var11 = 'string';
                        var10 = typeof var10;
                        if(!(var11 !== var10)) { _fun0038_ip = 174; continue _fun0038 }
case 175:
                        var13 = undefined;
case 174:
                        var10 = _closure1_slot6;
                        var10 = var10.fileManager;
                        var10 = var10.saveWithDialog2;
                        var11 = 'function';
                        var10 = typeof var10;
                        if(!(var11 !== var10)) { _fun0038_ip = 176; continue _fun0038 }
case 177: // try_start_0
                        var10 = _closure1_slot6;
                        var15 = var10.fileManager;
                        var14 = var15.saveWithDialog;
                        var12 = var6;
                        var11 = var4;
                        var10 = var13;
                        var16 = var7 != var10;
                        var10 = undefined;
                        if(!var16) { _fun0038_ip = 178; continue _fun0038 }
case 179:
                        var10 = var13;
case 178:
                        var10 = var14.bind(var15)(var12, var11, var10);
                        SaveGenerator(address=545);
case 180:
                        return var10;
case 181:
                        ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                        if(var11) { _fun0038_ip = 182; continue _fun0038 }
case 183:
                        var5 = var10;
case 184: // try_end0
                        _fun0038_ip = 185; continue _fun0038;
case 182:
                        return var10;
case 186: // catch_target0
                        CatchBlockStart(arg_register=9);
                        var10 = _closure1_slot20;
                        var10 = var10.ERRORED;
                        return var10;
case 176:
                        var10 = _closure1_slot6;
                        var12 = var10.fileManager;
                        var11 = var12.saveWithDialog2;
                        var10 = var6;
                        var6 = var4;
                        var4 = var13;
                        var14 = var7 != var4;
                        var4 = undefined;
                        if(!var14) { _fun0038_ip = 187; continue _fun0038 }
case 188:
                        var4 = var13;
case 187:
                        var4 = var11.bind(var12)(var10, var6, var4);
                        SaveGenerator(address=622);
case 189:
                        return var4;
case 190:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0038_ip = 191; continue _fun0038 }
case 192:
                        if(!(var7 != var4)) { _fun0038_ip = 193; continue _fun0038 }
case 194:
                        var6 = var4.canceledByUser;
                        if(var6) { _fun0038_ip = 195; continue _fun0038 }
case 196:
                        var5 = var4.directory;
case 185:
                        var6 = var5;
                        if(!(var7 != var6)) { _fun0038_ip = 197; continue _fun0038 }
case 198:
                        var7 = var5;
                        var6 = '';
                        if(!(var6 !== var7)) { _fun0038_ip = 197; continue _fun0038 }
case 199:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var9];
                        var6 = var7.bind(var8)(var6);
                        var8 = var6.Storage;
                        var7 = var8.set;
                        var6 = _closure1_slot14;
                        var5 = var7.bind(var8)(var6, var5);
                        var5 = _closure1_slot20;
                        var5 = var5.SAVED;
                        _fun0038_ip = 200; continue _fun0038;
case 197:
                        var6 = _closure1_slot20;
                        var5 = var6.ERRORED;
case 200:
                        return var5;
case 195:
                        var5 = _closure1_slot20;
                        var5 = var5.CANCELED;
                        return var5;
case 193:
                        var5 = _closure1_slot20;
                        var5 = var5.ERRORED;
                        return var5;
case 191:
                        return var4;
case 172:
                        return var3;
case 158:
                        var2 = _closure1_slot20;
                        var2 = var2.ERRORED;
                        return var2;
case 157:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['saveImage'] = var14;
        var14 = function saveFile(arg1, arg2) {
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
                        if(var2) { _fun0039_ip = 201; continue _fun0039 }
case 40:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 3;
                        var2 = var5[var2];
                        var8 = undefined;
                        var7 = var3.bind(var8)(var2);
                        var6 = _closure1_slot0;
                        var2 = 6;
                        var2 = var5[var2];
                        var2 = var6.bind(var8)(var2);
                        var6 = var2.isPlatformEmbedded;
                        var2 = 'Save file method called outside native app';
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = 5;
                        var2 = var5[var2];
                        var6 = var3.bind(var8)(var2);
                        var5 = var6.toURLSafe;
                        var2 = _closure2_slot0;
                        var5 = var5.bind(var6)(var2);
                        var2 = null;
                        if(!(var2 != var5)) { _fun0039_ip = 104; continue _fun0039 }
case 202:
                        var6 = _closure2_slot1;
                        if(!(var2 == var6)) { _fun0039_ip = 203; continue _fun0039 }
case 159:
                        var7 = var5.pathname;
                        var6 = var7.split;
                        var5 = '/';
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.pop;
                        var5 = var5.bind(var6)();
                        _fun0039_ip = 204; continue _fun0039;
case 203:
                        var5 = _closure2_slot1;
case 204:
                        var7 = var2 != var5;
                        var6 = 'unknown';
                        if(!var7) { _fun0039_ip = 133; continue _fun0039 }
case 14:
                        var6 = var5;
case 133:
                        var5 = _closure2_slot1;
                        var7 = var6;
                        if(!(var2 == var5)) { _fun0039_ip = 42; continue _fun0039 }
case 205:
                        var5 = _closure1_slot24;
                        var7 = var5.bind(var8)(var6);
case 42:
                        var5 = _closure1_slot25;
                        var3 = _closure2_slot0;
                        var3 = var5.bind(var8)(var3);
                        SaveGenerator(address=203);
case 206:
                        return var3;
case 207:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0039_ip = 101; continue _fun0039 }
case 208:
                        var5 = global;
                        var6 = var5.Buffer;
                        var5 = var6.from;
                        var6 = var5.bind(var6)(var3);
                        var4 = _closure1_slot6;
                        var5 = var4.fileManager;
                        var4 = var5.saveWithDialog;
                        var4 = var4.bind(var5)(var6, var7, var8);
                        SaveGenerator(address=254);
case 209:
                        return var4;
case 210:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0039_ip = 211; continue _fun0039 }
case 147:
                        var6 = var2 == var4;
                        var5 = null;
                        if(var6) { _fun0039_ip = 54; continue _fun0039 }
case 212:
                        var5 = var4;
case 54:
                        return var5;
case 211:
                        return var4;
case 101:
                        return var3;
case 104:
                        return var2;
case 201:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['saveFile'] = var14;
        var14 = function downloadVoiceFilterFile(arg1, arg2, arg3) {
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
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0040_ip = 17; continue _fun0040 }
case 40:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 3;
                        var2 = var9[var4];
                        var8 = undefined;
                        var7 = var5.bind(var8)(var2);
                        var6 = _closure1_slot0;
                        var2 = 6;
                        var2 = var9[var2];
                        var2 = var6.bind(var8)(var2);
                        var6 = var2.isPlatformEmbedded;
                        var2 = 'Download voice filter file method called outside native app';
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = 5;
                        var2 = var9[var2];
                        var10 = var5.bind(var8)(var2);
                        var7 = var10.toURLSafe;
                        var6 = _closure2_slot0;
                        var7 = var7.bind(var10)(var6);
                        var4 = var9[var4];
                        var5 = var5.bind(var8)(var4);
                        var4 = 'Could not download voice filter, fileSrc was not a valid path';
                        var4 = var5.bind(var8)(var7, var4);
                        var3 = _closure1_slot6;
                        var5 = var3.fileManager;
                        var4 = var5.maybeDownloadVoiceFilterFile;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot2;
                        var2 = var4.bind(var5)(var6, var3, var2);
                        SaveGenerator(address=157);
case 213:
                        return var2;
case 161:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0040_ip = 133; continue _fun0040 }
case 14:
                        return var2;
case 133:
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
        var10['downloadVoiceFilterFile'] = var14;
        var14 = function stopVoiceFilterDownloads() {
            var1 = _closure1_slot6;
            var2 = var1.fileManager;
            var1 = var2.stopVoiceFilterDownloads;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var10['stopVoiceFilterDownloads'] = var14;
        var14 = function canCheckVoiceFilterFilesExist() {
            var1 = _closure1_slot6;
            var1 = var1.fileManager;
            var1 = var1.checkVoiceFilterFilesExist;
            var2 = 'function';
            var1 = typeof var1;
            var1 = var2 === var1;
            return var1;
        };
        var10['canCheckVoiceFilterFilesExist'] = var14;
        var14 = function checkVoiceFilterFilesExist(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0041_ip = 132; continue _fun0041 }
case 91:
                        var2 = _closure1_slot6;
                        var4 = var2.fileManager;
                        var3 = var4.checkVoiceFilterFilesExist;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=42);
case 145:
                        return var2;
case 214:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0041_ip = 108; continue _fun0041 }
case 215:
                        return var2;
case 108:
                        return var2;
case 132:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['checkVoiceFilterFilesExist'] = var14;
        var14 = function cleanupUnusedVoiceFilterFiles(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0042_ip = 132; continue _fun0042 }
case 91:
                        var2 = _closure1_slot6;
                        var4 = var2.fileManager;
                        var3 = var4.cleanupUnusedVoiceFilterFiles;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=42);
case 145:
                        return var2;
case 214:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0042_ip = 108; continue _fun0042 }
case 215:
                        return var2;
case 108:
                        return var2;
case 132:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['cleanupUnusedVoiceFilterFiles'] = var14;
        var14 = function canCopyImage() {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var5 = arguments[0];
                var4 = undefined;
                if(!(var5 === var4)) { _fun0043_ip = 216; continue _fun0043 }
case 63:
                var5 = undefined;
case 216:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.isPlatformEmbedded;
                if(var2) { _fun0043_ip = 128; continue _fun0043 }
case 124:
                var2 = false;
                return var2;
case 128:
                var2 = _closure1_slot6;
                var2 = var2.clipboard;
                var2 = var2.copyImage;
                var3 = 'function';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0043_ip = 217; continue _fun0043 }
case 126:
                var2 = null;
                if(!(var2 != var5)) { _fun0043_ip = 120; continue _fun0043 }
case 68:
                var3 = _closure1_slot29;
                var3 = var3.bind(var4)(var5, var4);
                if(!(var2 != var3)) { _fun0043_ip = 120; continue _fun0043 }
case 130:
                var2 = _closure1_slot7;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0043_ip = 120; continue _fun0043 }
case 88:
                var1 = false;
                return var1;
case 120:
                var1 = true;
                return var1;
case 217:
                var1 = false;
                return var1;
            }
        };
        var10['canCopyImage'] = var14;
        var14 = function cut() {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0044_ip = 132; continue _fun0044 }
case 87:
                var2 = _closure1_slot6;
                var3 = var2.clipboard;
                var2 = var3.cut;
                var2 = var2.bind(var3)();
case 132:
                return var1;
            }
        };
        var10['cut'] = var14;
        var14 = function paste() {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0045_ip = 132; continue _fun0045 }
case 87:
                var2 = _closure1_slot6;
                var3 = var2.clipboard;
                var2 = var3.paste;
                var2 = var2.bind(var3)();
case 132:
                return var1;
            }
        };
        var10['paste'] = var14;
        var14 = function readClipboard() {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.isPlatformEmbedded;
                var1 = '';
                if(!var3) { _fun0046_ip = 80; continue _fun0046 }
case 144:
                var2 = _closure1_slot6;
                var3 = var2.clipboard;
                var2 = var3.read;
                var1 = var2.bind(var3)();
case 80:
                return var1;
            }
        };
        var10['readClipboard'] = var14;
        var14 = function on(arg1, arg2) {
            var1 = _closure1_slot6;
            var4 = var1.ipc;
            var3 = var4.on;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var10['on'] = var14;
        var14 = function invoke(arg1, arg2) {
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
        var10['invoke'] = var14;
        var14 = function send(arg1, arg2) {
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
        var10['send'] = var14;
        var14 = function isIPCReady() {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0047_ip = 144; continue _fun0047 }
case 87:
                var1 = true;
                return var1;
case 144: // try_start_0
                var5 = _closure1_slot6;
                var4 = null;
                var5 = var4 == var5;
                var3 = undefined;
                if(var5) { _fun0047_ip = 114; continue _fun0047 }
case 218:
                var5 = _closure1_slot6;
                var3 = var5.ipc;
case 114:
                var3 = var4 != var3;
                var1 = var3;
                if(!var3) { _fun0047_ip = 219; continue _fun0047 }
case 146:
                var2 = _closure1_slot6;
                var2 = var2.ipc;
                var2 = var2.send;
                var3 = 'function';
                var2 = typeof var2;
                var1 = var3 === var2;
case 219: // try_end0
                return var1;
case 220: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = false;
                return var1;
            }
        };
        var10['isIPCReady'] = var14;
        var14 = function waitForIPCReady() {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var4 = arguments[0];
                var3 = arguments[1];
                var2 = undefined;
                if(!(var4 === var2)) { _fun0048_ip = 29; continue _fun0048 }
case 32:
                var4 = 5000;
case 29:
                var _closure2_slot0 = var4;
                if(!(var3 === var2)) { _fun0048_ip = 48; continue _fun0048 }
case 34:
                var4 = global;
                var3 = var4.window;
case 48:
                var _closure2_slot1 = var3;
                var3 = this;
                var _closure2_slot2 = var3;
                var3 = _closure1_slot4;
                var1 = function* () {
                    var1 = function* anon_0_() {
                        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0049_ip = 161; continue _fun0049 }
case 221:
                            var7 = global;
                            var3 = var7.Date;
                            var2 = var3.now;
                            var6 = var2.bind(var3)();
                            var3 = var7.Date;
                            var2 = var3.now;
                            var2 = var2.bind(var3)();
                            var3 = var2 - var6;
                            var2 = _closure2_slot0;
                            if(!(var3 < var2)) { _fun0049_ip = 222; continue _fun0049 }
case 66:
                            var3 = _closure2_slot2;
                            var2 = var3.isIPCReady;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0049_ip = 204; continue _fun0049 }
case 118:
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
case 223:
                            return var2;
case 88:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0049_ip = 224; continue _fun0049 }
case 225:
                            var4 = var7.Date;
                            var3 = var4.now;
                            var3 = var3.bind(var4)();
                            var4 = var3 - var6;
                            var3 = _closure2_slot0;
                            if(var4 < var3) { _fun0049_ip = 66; continue _fun0049 }
case 222:
                            var3 = false;
                            return var3;
case 224:
                            return var2;
case 204:
                            var2 = true;
                            return var2;
case 161:
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
        var10['waitForIPCReady'] = var14;
        var14 = function flashFrame(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.flashFrame;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['flashFrame'] = var14;
        var14 = function webAuthnRegister(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot6;
            var4 = var2.nativeModules;
            var3 = var4.ensureModule;
            var2 = 'discord_webauthn';
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function() {
                var1 = _closure1_slot6;
                var3 = var1.webAuthn;
                var2 = var3.webAuthnRegister;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['webAuthnRegister'] = var14;
        var14 = function webAuthnAuthenticate(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot6;
            var4 = var2.nativeModules;
            var3 = var4.ensureModule;
            var2 = 'discord_webauthn';
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function() {
                var1 = _closure1_slot6;
                var3 = var1.webAuthn;
                var2 = var3.webAuthnAuthenticate;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['webAuthnAuthenticate'] = var14;
        var14 = function minimize(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.minimize;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['minimize'] = var14;
        var14 = function restore(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.restore;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['restore'] = var14;
        var14 = function maximize(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.maximize;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['maximize'] = var14;
        var14 = function focus(arg1) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var5 = arguments[1];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0050_ip = 32; continue _fun0050 }
case 221:
                var5 = false;
case 32:
                var2 = var5;
                if(!var2) { _fun0050_ip = 218; continue _fun0050 }
case 29:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 6;
                var3 = var7[var3];
                var6 = var6.bind(var1)(var3);
                var3 = var6.isWindows;
                var2 = var3.bind(var6)();
case 218:
                if(!var2) { _fun0050_ip = 65; continue _fun0050 }
case 28:
                var3 = var4.minimize;
                var2 = null;
                var2 = var3.bind(var4)(var2);
case 65:
                var2 = _closure1_slot6;
                var4 = var2.window;
                var3 = var4.focus;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            }
        };
        var10['focus'] = var14;
        var14 = function blur() {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0051_ip = 4; continue _fun0051 }
case 87:
                var3 = _closure1_slot6;
                var3 = var3.window;
                var4 = var3.blur;
                var3 = null;
                if(!(var3 == var4)) { _fun0051_ip = 226; continue _fun0051 }
case 4:
                var3 = global;
                var4 = var3.window;
                var3 = var4.blur;
                var3 = var3.bind(var4)();
                _fun0051_ip = 130; continue _fun0051;
case 226:
                var2 = _closure1_slot6;
                var3 = var2.window;
                var2 = var3.blur;
                var2 = var2.bind(var3)();
case 130:
                return var1;
            }
        };
        var10['blur'] = var14;
        var14 = function fullscreen(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.fullscreen;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['fullscreen'] = var14;
        var14 = function close(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.window;
            var2 = var3.close;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['close'] = var14;
        var14 = function setAlwaysOnTop(arg1, arg2) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.window;
                var2 = var2.setAlwaysOnTop;
                var3 = 'function';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0052_ip = 28; continue _fun0052 }
case 64:
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
        var10['setAlwaysOnTop'] = var14;
        var14 = function isAlwaysOnTop(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0053_ip = 129; continue _fun0053 }
case 91:
                        var3 = _closure1_slot6;
                        var3 = var3.window;
                        var4 = var3.isAlwaysOnTop;
                        var5 = 'function';
                        var4 = typeof var4;
                        var3 = false;
                        if(!(var5 === var4)) { _fun0053_ip = 43; continue _fun0053 }
case 144:
                        var2 = _closure1_slot6;
                        var5 = var2.window;
                        var4 = var5.isAlwaysOnTop;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=69);
case 30:
                        return var2;
case 65:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        var3 = var2;
                        if(var4) { _fun0053_ip = 109; continue _fun0053 }
case 43:
                        return var3;
case 109:
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
        var10['isAlwaysOnTop'] = var14;
        var14 = function showInactive(arg1) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var1 = _closure1_slot6;
                var5 = null;
                var4 = var5 == var1;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0054_ip = 92; continue _fun0054 }
case 29:
                var4 = _closure1_slot6;
                var4 = var4.window;
                var5 = var5 == var4;
                var3 = undefined;
                if(var5) { _fun0054_ip = 92; continue _fun0054 }
case 144:
                var3 = var4.showInactive;
case 92:
                var4 = 'function';
                var3 = typeof var3;
                if(!(var4 === var3)) { _fun0054_ip = 43; continue _fun0054 }
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
        var10['showInactive'] = var14;
        var14 = function setMinimumSize(arg1, arg2) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var1 = _closure1_slot6;
                var4 = null;
                var2 = var4 == var1;
                var1 = undefined;
                var5 = undefined;
                if(var2) { _fun0055_ip = 48; continue _fun0055 }
case 29:
                var3 = _closure1_slot6;
                var3 = var3.window;
                var2 = var4 == var3;
                var5 = var3;
case 48:
                if(var2) { _fun0055_ip = 5; continue _fun0055 }
case 122:
                var3 = var5.setMinimumSize;
                var2 = var4 == var3;
case 5:
                if(var2) { _fun0055_ip = 35; continue _fun0055 }
case 93:
                var4 = var5.setMinimumSize;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
case 35:
                return var1;
            }
        };
        var10['setMinimumSize'] = var14;
        var14 = function setTrafficLightPosition(arg1) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var5 = this;
                var2 = arg1;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 6;
                var4 = var1[var6];
                var1 = undefined;
                var4 = var7.bind(var1)(var4);
                var4 = var4.isPlatformEmbedded;
                if(!var4) { _fun0056_ip = 220; continue _fun0056 }
case 145:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getPlatformName;
                var4 = var3.bind(var4)();
                var3 = 'darwin';
                if(!(var3 === var4)) { _fun0056_ip = 220; continue _fun0056 }
case 156: // try_start_0
                var4 = var5.send;
                var3 = var2;
                var2 = 'WINDOW_SET_TRAFFIC_LIGHT_POSITION';
                var2 = var4.bind(var5)(var2, var3);
case 98: // try_end0
                _fun0056_ip = 220; continue _fun0056;
case 219: // catch_target0
                CatchBlockStart(arg_register=1);
case 220:
                return var1;
            }
        };
        var10['setTrafficLightPosition'] = var14;
        var14 = function purgeMemory() {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0057_ip = 132; continue _fun0057 }
case 87:
                var2 = _closure1_slot6;
                var3 = var2.processUtils;
                var2 = var3.purgeMemory;
                var2 = var2.bind(var3)();
case 132:
                return var1;
            }
        };
        var10['purgeMemory'] = var14;
        var14 = function updateCrashReporter(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.crashReporter;
            var2 = var3.updateCrashReporter;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['updateCrashReporter'] = var14;
        var14 = function triggerJSException(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.crashReporter;
            var2 = var3.triggerJSException;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['triggerJSException'] = var14;
        var14 = function flushDNSCache() {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0058_ip = 132; continue _fun0058 }
case 87:
                var2 = _closure1_slot6;
                var3 = var2.processUtils;
                var2 = var3.flushDNSCache;
                var2 = var2.bind(var3)();
case 132:
                return var1;
            }
        };
        var10['flushDNSCache'] = var14;
        var14 = function supportsFeature(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.features;
            var2 = var3.supports;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['supportsFeature'] = var14;
        var14 = function getEnableHardwareAcceleration() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                var1 = !var1;
                if(var1) { _fun0059_ip = 106; continue _fun0059 }
case 94:
                var2 = _closure1_slot6;
                var3 = var2.gpuSettings;
                var2 = var3.getEnableHardwareAcceleration;
                var1 = var2.bind(var3)();
case 106:
                return var1;
            }
        };
        var10['getEnableHardwareAcceleration'] = var14;
        var14 = function setEnableHardwareAcceleration(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.gpuSettings;
            var2 = var3.setEnableHardwareAcceleration;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['setEnableHardwareAcceleration'] = var14;
        var14 = function setChromiumSwitches(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.gpuSettings;
            var2 = var3.setChromiumSwitches;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10['setChromiumSwitches'] = var14;
        var14 = function setSetting(arg1, arg2) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.gpuSettings;
                var3 = var2.setSetting;
                var2 = null;
                if(!(var2 != var3)) { _fun0060_ip = 218; continue _fun0060 }
case 123:
                var1 = _closure1_slot6;
                var4 = var1.gpuSettings;
                var3 = var4.setSetting;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 218:
                var1 = undefined;
                return var1;
            }
        };
        var10['setSetting'] = var14;
        var14 = function getOptionalUpdates() {
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0061_ip = 4; continue _fun0061 }
case 91:
                        var2 = _closure1_slot6;
                        var5 = var2.settings;
                        var4 = var5.get;
                        var3 = 'OPTIN_OPTIONAL_UPDATES';
                        var2 = false;
                        var2 = var4.bind(var5)(var3, var2);
                        SaveGenerator(address=43);
case 79:
                        return var2;
case 124:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0061_ip = 93; continue _fun0061 }
case 5:
                        return var2;
case 93:
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['getOptionalUpdates'] = var14;
        var14 = function setOptionalUpdates(arg1) {
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
                        if(var2) { _fun0062_ip = 95; continue _fun0062 }
case 91:
                        var2 = _closure1_slot6;
                        var5 = var2.settings;
                        var4 = var5.set;
                        var3 = _closure2_slot0;
                        var2 = 'OPTIN_OPTIONAL_UPDATES';
                        var2 = var4.bind(var5)(var2, var3);
                        SaveGenerator(address=48);
case 2:
                        return var2;
case 215:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0062_ip = 66; continue _fun0062 }
case 132:
                        var3 = undefined;
                        return var3;
case 66:
                        return var2;
case 95:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var10['setOptionalUpdates'] = var14;
        var14 = function getGPUDriverVersions() {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isWindows;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0063_ip = 114; continue _fun0063 }
case 79:
                var1 = var3.getDiscordUtils;
                var1 = var1.bind(var3)();
                var2 = var1.getGPUDriverVersions;
                var1 = null;
                if(!(var1 == var2)) { _fun0063_ip = 227; continue _fun0063 }
case 114:
                var1 = global;
                var4 = var1.Promise;
                var2 = var4.resolve;
                var6 = var1.Object;
                var5 = var6.freeze;
                var1 = {};
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var4)(var1);
                _fun0063_ip = 228; continue _fun0063;
case 227:
                var2 = var3.getDiscordUtils;
                var3 = var2.bind(var3)();
                var2 = var3.getGPUDriverVersions;
                var1 = var2.bind(var3)();
case 228:
                return var1;
            }
        };
        var10['getGPUDriverVersions'] = var14;
        var14 = function setZoomFactor(arg1) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0064_ip = 116; continue _fun0064 }
case 145:
                var2 = _closure1_slot6;
                var4 = var2.window;
                var3 = var4.setZoomFactor;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var1 = true;
case 116:
                return var1;
            }
        };
        var10['setZoomFactor'] = var14;
        var14 = function setBackgroundThrottling(arg1) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot6;
                var2 = var2.window;
                var4 = var2.setBackgroundThrottling;
                var2 = null;
                if(!(var2 == var4)) { _fun0065_ip = 106; continue _fun0065 }
case 105:
                var2 = _closure1_slot6;
                var2 = var2.window;
                var4 = var2.webContents;
                var2 = var4.setBackgroundThrottling;
                var2 = var2.bind(var4)(var3);
                _fun0065_ip = 156; continue _fun0065;
case 106:
                var1 = _closure1_slot6;
                var2 = var1.window;
                var1 = var2.setBackgroundThrottling;
                var1 = var1.bind(var2)(var3);
case 156:
                var1 = undefined;
                return var1;
            }
        };
        var10['setBackgroundThrottling'] = var14;
        var14 = function setFocusable(arg1, arg2) {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.window;
                var2 = var2.setFocusable;
                var3 = 'function';
                var2 = typeof var2;
                if(!(var3 === var2)) { _fun0066_ip = 28; continue _fun0066 }
case 64:
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
        var10['setFocusable'] = var14;
        var14 = function pauseFrameEvictor() {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.app;
                var3 = var2.pauseFrameEvictor;
                var2 = null;
                if(!(var2 != var3)) { _fun0067_ip = 229; continue _fun0067 }
case 123:
                var1 = _closure1_slot6;
                var2 = var1.app;
                var1 = var2.pauseFrameEvictor;
                var1 = var1.bind(var2)();
case 229:
                var1 = undefined;
                return var1;
            }
        };
        var10['pauseFrameEvictor'] = var14;
        var14 = function unpauseFrameEvictor() {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var2 = _closure1_slot6;
                var2 = var2.app;
                var3 = var2.unpauseFrameEvictor;
                var2 = null;
                if(!(var2 != var3)) { _fun0068_ip = 229; continue _fun0068 }
case 123:
                var1 = _closure1_slot6;
                var2 = var1.app;
                var1 = var2.unpauseFrameEvictor;
                var1 = var1.bind(var2)();
case 229:
                var1 = undefined;
                return var1;
            }
        };
        var10['unpauseFrameEvictor'] = var14;
        var14 = function getPidFromDesktopSource(arg1) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var7 = arg1;
                var2 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isDesktop;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0069_ip = 230; continue _fun0069 }
case 128:
                var3 = var2.getDiscordUtils;
                var3 = var3.bind(var2)();
                var3 = var3.getPidFromWindowHandle;
                var4 = null;
                if(!(var4 != var3)) { _fun0069_ip = 230; continue _fun0069 }
case 41:
                var3 = var4 == var7;
                var5 = undefined;
                if(var3) { _fun0069_ip = 37; continue _fun0069 }
case 109:
                var6 = var7.split;
                var3 = ':';
                var5 = var6.bind(var7)(var3);
case 37:
                var3 = var4 == var5;
                var7 = undefined;
                if(var3) { _fun0069_ip = 13; continue _fun0069 }
case 113:
                var3 = 0;
                var7 = var5[var3];
case 13:
                var3 = 'window';
                if(!(var3 !== var7)) { _fun0069_ip = 231; continue _fun0069 }
case 112:
                var6 = var7.startsWith;
                var3 = 'screen';
                var3 = var6.bind(var7)(var3);
                if(var3) { _fun0069_ip = 203; continue _fun0069 }
case 232:
                var6 = 'prepicked';
                var3 = null;
                if(!(var6 === var7)) { _fun0069_ip = 233; continue _fun0069 }
case 203:
                var3 = 1;
case 233:
                return var3;
case 231:
                var3 = var4 == var5;
                var1 = undefined;
                if(var3) { _fun0069_ip = 17; continue _fun0069 }
case 234:
                var3 = 1;
                var1 = var5[var3];
case 17:
                var5 = var4 != var1;
                var3 = '';
                if(!var5) { _fun0069_ip = 46; continue _fun0069 }
case 235:
                var3 = var1;
case 46:
                var1 = var2.getDiscordUtils;
                var2 = var1.bind(var2)();
                var1 = var2.getPidFromWindowHandle;
                var2 = var1.bind(var2)(var3);
                var3 = var4 == var2;
                var1 = null;
                if(var3) { _fun0069_ip = 236; continue _fun0069 }
case 237:
                var3 = 0;
                var1 = null;
                if(!(var3 !== var2)) { _fun0069_ip = 236; continue _fun0069 }
case 238:
                var1 = var2;
case 236:
                return var1;
case 230:
                var1 = null;
                return var1;
            }
        };
        var10['getPidFromDesktopSource'] = var14;
        var14 = function getDesktopSourceFromPid(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var1 = var4.isWindows;
                var1 = var1.bind(var4)();
                if(!var1) { _fun0070_ip = 231; continue _fun0070 }
case 92:
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var1 = var1.getWindowHandleFromPid;
                var5 = null;
                if(!(var5 != var1)) { _fun0070_ip = 231; continue _fun0070 }
case 239:
                if(!(var5 != var3)) { _fun0070_ip = 231; continue _fun0070 }
case 35:
                var1 = var2.getDiscordUtils;
                var2 = var1.bind(var2)();
                var1 = var2.getWindowHandleFromPid;
                var2 = var1.bind(var2)(var3);
                var3 = var5 == var2;
                var1 = null;
                if(var3) { _fun0070_ip = 233; continue _fun0070 }
case 219:
                var4 = var2.length;
                var3 = 0;
                var1 = null;
                if(!(var3 !== var4)) { _fun0070_ip = 233; continue _fun0070 }
case 121:
                var4 = ['window'];
                var4[1] = var2;
                var2 = '0';
                var4[2] = var2;
                var3 = var4.join;
                var2 = ':';
                var1 = var3.bind(var4)(var2);
case 233:
                return var1;
case 231:
                var1 = null;
                return var1;
            }
        };
        var10['getDesktopSourceFromPid'] = var14;
        var14 = function generateSessionFromPid(arg1) {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var3 = var1.bind(var2)();
            var2 = var3.generateSessionFromPid;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['generateSessionFromPid'] = var14;
        var14 = function getAudioPid(arg1) {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.getDiscordUtils;
                var1 = var1.bind(var3)();
                var5 = var1.getAudioPid;
                var2 = null;
                var1 = var4;
                if(!(var2 != var5)) { _fun0071_ip = 66; continue _fun0071 }
case 240:
                var1 = var4;
                if(!(var2 != var1)) { _fun0071_ip = 66; continue _fun0071 }
case 144:
                var2 = var3.getDiscordUtils;
                var3 = var2.bind(var3)();
                var2 = var3.getAudioPid;
                var1 = var2.bind(var3)(var4);
case 66:
                return var1;
            }
        };
        var10['getAudioPid'] = var14;
        var14 = function setForegroundProcess(arg1) {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var5 = this;
                var2 = arg1;
                var4 = undefined;
                var3 = undefined;
                var1 = var5.getDiscordUtils;
                var1 = var1.bind(var5)();
                var3 = var1.setForegroundProcess;
case 89: // try_start_0
                var6 = var3;
                var5 = null;
                var5 = var5 != var6;
                var1 = var5;
                if(!var5) { _fun0072_ip = 2; continue _fun0072 }
case 79:
                var1 = var3.bind(var4)(var2);
case 2: // try_end0
                return var1;
case 215: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = false;
                return var1;
            }
        };
        var10['setForegroundProcess'] = var14;
        var14 = function getDiscordMemoryUsage() {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryUsage;
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0073_ip = 87; continue _fun0073 }
case 34:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 87:
                return var1;
            }
        };
        var10['getDiscordMemoryUsage'] = var14;
        var14 = function getDiscordMemoryUsageElectronRenderer() {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryUsageElectronRenderer;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0074_ip = 48; continue _fun0074 }
case 107:
                var1 = var3.bind(var2)();
case 48:
                return var1;
            }
        };
        var10['getDiscordMemoryUsageElectronRenderer'] = var14;
        var14 = function getDiscordMemoryPrivateUsageElectronRenderer() {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryPrivUsageElectronRenderer;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0075_ip = 144; continue _fun0075 }
case 87:
                var1 = var3.bind(var2)();
case 144:
                return var1;
            }
        };
        var10['getDiscordMemoryPrivateUsageElectronRenderer'] = var14;
        var14 = function getDiscordMemoryUsageElectronProcessTypeDetails() {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getDiscordMemoryUsageElectronProcessTypeDetails;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0076_ip = 48; continue _fun0076 }
case 107:
                var1 = var3.bind(var2)();
case 48:
                return var1;
            }
        };
        var10['getDiscordMemoryUsageElectronProcessTypeDetails'] = var14;
        var14 = function enablePerfMemoryHooks(arg1) {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var4 = var1.enablePerfMemoryHooks;
                var1 = null;
                var2 = var1 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0077_ip = 145; continue _fun0077 }
case 107:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
case 145:
                return var1;
            }
        };
        var10['enablePerfMemoryHooks'] = var14;
        var14 = function disablePerfMemoryHooks() {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.disablePerfMemoryHooks;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0078_ip = 48; continue _fun0078 }
case 107:
                var1 = var3.bind(var2)();
case 48:
                return var1;
            }
        };
        var10['disablePerfMemoryHooks'] = var14;
        var14 = function getPerfAttributedMemory() {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getPerfAttributedMemory;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0079_ip = 48; continue _fun0079 }
case 107:
                var1 = var3.bind(var2)();
case 48:
                return var1;
            }
        };
        var10['getPerfAttributedMemory'] = var14;
        var14 = function getPerfAttributedMemoryCallstacks(arg1) {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var4 = var1.getPerfAttributedMemoryCallstacks;
                var1 = null;
                var2 = var1 == var4;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0080_ip = 145; continue _fun0080 }
case 107:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
case 145:
                return var1;
            }
        };
        var10['getPerfAttributedMemoryCallstacks'] = var14;
        var14 = function getPerfAttributedMemoryStats() {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getPerfAttributedMemoryStats;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var1 = undefined;
                if(var4) { _fun0081_ip = 48; continue _fun0081 }
case 107:
                var1 = var3.bind(var2)();
case 48:
                return var1;
            }
        };
        var10['getPerfAttributedMemoryStats'] = var14;
        var14 = function showOpenDialog(arg1) {
            var1 = _closure1_slot6;
            var3 = var1.fileManager;
            var2 = var3.showOpenDialog;
            var1 = {};
            var4 = arg1;
            var1['properties'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10['showOpenDialog'] = var14;
        var14 = function flushStorageData() {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.isPlatformEmbedded;
                var2 = global;
                var4 = var2.Promise;
                if(var1) { _fun0082_ip = 132; continue _fun0082 }
case 214:
                var1 = var4.resolve;
                var1 = var1.bind(var4)();
                _fun0082_ip = 109; continue _fun0082;
case 132:
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = function(arg1, arg2) {
                    _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                        var4 = arg1;
                        var _closure3_slot0 = var4;
                        var2 = arg2;
                        var _closure3_slot1 = var2;
                        var3 = _closure1_slot6;
                        var3 = var3.processUtils;
                        var5 = var3.flushStorageData;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0083_ip = 5; continue _fun0083 }
case 79:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        _fun0083_ip = 226; continue _fun0083;
case 5:
                        var2 = _closure1_slot6;
                        var3 = var2.processUtils;
                        var2 = var3.flushStorageData;
                        var1 = function(arg1) {
                            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                                var5 = arg1;
                                var1 = null;
                                if(!(var1 == var5)) { _fun0084_ip = 90; continue _fun0084 }
case 63:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                _fun0084_ip = 65; continue _fun0084;
case 90:
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
case 65:
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
case 109:
                return var1;
            }
        };
        var10['flushStorageData'] = var14;
        var14 = function flushCookies() {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.isPlatformEmbedded;
                var2 = global;
                var4 = var2.Promise;
                if(var1) { _fun0085_ip = 132; continue _fun0085 }
case 214:
                var1 = var4.resolve;
                var1 = var1.bind(var4)();
                _fun0085_ip = 109; continue _fun0085;
case 132:
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = function(arg1, arg2) {
                    _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                        var4 = arg1;
                        var _closure3_slot0 = var4;
                        var2 = arg2;
                        var _closure3_slot1 = var2;
                        var3 = _closure1_slot6;
                        var3 = var3.processUtils;
                        var5 = var3.flushCookies;
                        var3 = null;
                        if(!(var3 == var5)) { _fun0086_ip = 5; continue _fun0086 }
case 79:
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        _fun0086_ip = 226; continue _fun0086;
case 5:
                        var2 = _closure1_slot6;
                        var3 = var2.processUtils;
                        var2 = var3.flushCookies;
                        var1 = function(arg1) {
                            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                                var5 = arg1;
                                var1 = null;
                                if(!(var1 == var5)) { _fun0087_ip = 90; continue _fun0087 }
case 63:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                _fun0087_ip = 65; continue _fun0087;
case 90:
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
case 65:
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
case 109:
                return var1;
            }
        };
        var10['flushCookies'] = var14;
        var14 = function setCrashInformation(arg1, arg2) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0088_ip = 43; continue _fun0088 }
case 87:
                var4 = _closure1_slot6;
                var5 = null;
                var6 = var5 == var4;
                var4 = undefined;
                if(var6) { _fun0088_ip = 126; continue _fun0088 }
case 5:
                var6 = _closure1_slot6;
                var6 = var6.processUtils;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0088_ip = 126; continue _fun0088 }
case 140:
                var4 = var6.setCrashInformation;
case 126:
                var3 = var5 != var4;
case 43:
                if(!var3) { _fun0088_ip = 223; continue _fun0088 }
case 109:
                var2 = _closure1_slot6;
                var5 = var2.processUtils;
                var4 = var5.setCrashInformation;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
case 223:
                return var1;
            }
        };
        var10['setCrashInformation'] = var14;
        var14 = function blockDisplaySleep() {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.isPlatformEmbedded;
                var4 = null;
                var1 = null;
                if(!var3) { _fun0089_ip = 156; continue _fun0089 }
case 144:
                var3 = _closure1_slot6;
                var3 = var3.powerSaveBlocker;
                var3 = var4 != var3;
                var1 = null;
                if(!var3) { _fun0089_ip = 156; continue _fun0089 }
case 106:
                var2 = _closure1_slot6;
                var3 = var2.powerSaveBlocker;
                var2 = var3.blockDisplaySleep;
                var1 = var2.bind(var3)();
case 156:
                return var1;
            }
        };
        var10['blockDisplaySleep'] = var14;
        var14 = function unblockDisplaySleep(arg1) {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0090_ip = 117; continue _fun0090 }
case 87:
                var4 = _closure1_slot6;
                var5 = var4.powerSaveBlocker;
                var4 = null;
                var3 = var4 != var5;
case 117:
                if(!var3) { _fun0090_ip = 156; continue _fun0090 }
case 218:
                var2 = _closure1_slot6;
                var4 = var2.powerSaveBlocker;
                var3 = var4.unblockDisplaySleep;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
case 156:
                return var1;
            }
        };
        var10['unblockDisplaySleep'] = var14;
        var14 = function cleanupDisplaySleep() {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0091_ip = 117; continue _fun0091 }
case 87:
                var4 = _closure1_slot6;
                var5 = var4.powerSaveBlocker;
                var4 = null;
                var3 = var4 != var5;
case 117:
                if(!var3) { _fun0091_ip = 146; continue _fun0091 }
case 218:
                var2 = _closure1_slot6;
                var3 = var2.powerSaveBlocker;
                var2 = var3.cleanupDisplaySleep;
                var2 = var2.bind(var3)();
case 146:
                return var1;
            }
        };
        var10['cleanupDisplaySleep'] = var14;
        var14 = function relaunch() {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.isPlatformEmbedded;
                if(!var3) { _fun0092_ip = 28; continue _fun0092 }
case 87:
                var4 = _closure1_slot6;
                var4 = var4.remoteApp;
                var5 = var4.relaunch;
                var4 = null;
                var3 = var4 != var5;
case 28:
                if(!var3) { _fun0092_ip = 155; continue _fun0092 }
case 66:
                var2 = _closure1_slot6;
                var3 = var2.remoteApp;
                var2 = var3.relaunch;
                var2 = var2.bind(var3)();
case 155:
                return var1;
            }
        };
        var10['relaunch'] = var14;
        var14 = function makeChunkedRequest(arg1, arg2, arg3) {
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                var8 = arg2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 11;
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
                var4 = 6;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.isPlatformEmbedded;
                if(var4) { _fun0093_ip = 241; continue _fun0093 }
case 131:
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
case 241:
                var3 = _closure1_slot6;
                var4 = var3.http;
                var3 = null;
                if(!(var3 != var4)) { _fun0093_ip = 242; continue _fun0093 }
case 243:
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
                if(!(var6 === var3)) { _fun0093_ip = 169; continue _fun0093 }
case 244:
                var6 = var1.JSON;
                var3 = var6.stringify;
                var7 = var3.bind(var6)(var8);
case 169:
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
                if(!var8) { _fun0093_ip = 245; continue _fun0093 }
case 246:
                var10 = var3 * var6;
                var9 = var7.substring;
                var8 = var10 + var6;
                var8 = var9.bind(var7)(var10, var8);
                var4[var3] = var8;
                var3 = var3 + 1;
                if(var3 < var5) { _fun0093_ip = 246; continue _fun0093 }
case 245:
                var4 = var1.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var13 = function(arg1, arg2) {
                    _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                        var2 = arg1;
                        var _closure3_slot0 = var2;
                        var2 = arg2;
                        var _closure3_slot1 = var2;
                        var3 = _closure1_slot6;
                        var4 = var3.http;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0094_ip = 120; continue _fun0094 }
case 125:
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
                            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                                var4 = arg1;
                                var2 = arg2;
                                var1 = null;
                                if(!(var1 == var4)) { _fun0095_ip = 130; continue _fun0095 }
case 221:
                                var3 = var2.status;
                                var1 = 400;
                                if(!(!(var3 >= var1))) { _fun0095_ip = 229; continue _fun0095 }
case 105:
                                var3 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = undefined;
                                _fun0095_ip = 247; continue _fun0095;
case 229:
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
case 247:
                                _fun0095_ip = 202; continue _fun0095;
case 130:
                                var3 = _closure3_slot1;
                                var2 = undefined;
                                var1 = var3.bind(var2)(var4);
case 202:
                                return var1;
                            }
                        };
                        var13 = var6;
                        var10 = var2;
                        var1 = var13[var5](var12, var11, var10, var9, var8);
case 120:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = var3;
                var2 = new var14[var4](var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
case 242:
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
        var10['makeChunkedRequest'] = var14;
        var14 = function submitLiveCrashReport(arg1) {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                var2 = this;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isWindows;
                var1 = var1.bind(var3)();
                if(!var1) { _fun0096_ip = 248; continue _fun0096 }
case 79:
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var1 = var1.submitLiveCrashReport;
                var3 = null;
                if(!(var3 != var1)) { _fun0096_ip = 248; continue _fun0096 }
case 114:
                var1 = var2.getCrashReporterMetadata;
                var1 = var1.bind(var2)();
                var4 = _closure1_slot6;
                var6 = var4.app;
                var4 = var6.getReleaseChannel;
                var4 = var4.bind(var6)();
                var3 = var3 == var1;
                var5 = undefined;
                if(var3) { _fun0096_ip = 202; continue _fun0096 }
case 220:
                var5 = var1.sentry;
case 202:
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
case 248:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var10['submitLiveCrashReport'] = var14;
        var14 = function crash(arg1) {
            _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var4 = var1.crash;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0097_ip = 145; continue _fun0097 }
case 34:
                var3 = undefined;
                var2 = arg1;
                var2 = var4.bind(var3)(var2);
                var1 = true;
case 145:
                return var1;
            }
        };
        var10['crash'] = var14;
        var14 = function setApplicationBackgroundColor(arg1) {
            var1 = _closure1_slot6;
            var4 = var1.ipc;
            var3 = var4.send;
            var2 = 'SETTINGS_UPDATE_BACKGROUND_COLOR';
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var10['setApplicationBackgroundColor'] = var14;
        var14 = function initializeExitHook() {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.initializeExitHook;
                var1 = null;
                if(!(var1 != var2)) { _fun0098_ip = 240; continue _fun0098 }
case 123:
                var1 = undefined;
                var1 = var2.bind(var1)();
case 240:
                var1 = undefined;
                return var1;
            }
        };
        var10['initializeExitHook'] = var14;
        var14 = function initializeWERHandler() {
            _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.initializeWERHandler;
                var1 = null;
                if(!(var1 != var2)) { _fun0099_ip = 240; continue _fun0099 }
case 123:
                var1 = undefined;
                var1 = var2.bind(var1)();
case 240:
                var1 = undefined;
                return var1;
            }
        };
        var10['initializeWERHandler'] = var14;
        var14 = function asyncify(arg1) {
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
        var10['asyncify'] = var14;
        var14 = function IsGameDisplayModeUpdateSupported() {
            var2 = this;
            var1 = var2.getDiscordUtils;
            var1 = var1.bind(var2)();
            var2 = var1.gameDisplayModeUpdate;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var10['IsGameDisplayModeUpdateSupported'] = var14;
        var14 = function GameDisplayModeUpdate(arg1) {
            _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.gameDisplayModeUpdate;
                var2 = null;
                var1 = var2 != var3;
                if(!var1) { _fun0100_ip = 125; continue _fun0100 }
case 240:
                var1 = var2 != var4;
case 125:
                if(!var1) { _fun0100_ip = 229; continue _fun0100 }
case 144:
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 229:
                return var1;
            }
        };
        var10['GameDisplayModeUpdate'] = var14;
        var14 = function GameDisplayModeIsGameSupported(arg1) {
            _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.gameDisplayModeIsSupported;
                var2 = null;
                var1 = var2 != var3;
                if(!var1) { _fun0101_ip = 94; continue _fun0101 }
case 33:
                var1 = var2 != var4;
case 94:
                if(!var1) { _fun0101_ip = 128; continue _fun0101 }
case 145:
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 128:
                return var1;
            }
        };
        var10['GameDisplayModeIsGameSupported'] = var14;
        var14 = function GetWindowFullscreenTypeByPid(arg1, arg2, arg3) {
            _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
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
                if(!(var4 !== var7)) { _fun0102_ip = 239; continue _fun0102 }
case 145:
                var4 = var2 != var5;
                var3 = null;
                if(!var4) { _fun0102_ip = 239; continue _fun0102 }
case 5:
                var4 = var2 != var6;
                var3 = null;
                if(!var4) { _fun0102_ip = 239; continue _fun0102 }
case 80:
                var4 = undefined;
                var3 = var5.bind(var4)(var7, var6);
case 239:
                var4 = -1;
                if(!(var4 === var3)) { _fun0102_ip = 43; continue _fun0102 }
case 118:
                var3 = null;
case 43:
                if(!(var2 != var3)) { _fun0102_ip = 249; continue _fun0102 }
case 119:
                var1 = var3;
case 249:
                if(!(var2 == var1)) { _fun0102_ip = 250; continue _fun0102 }
case 154:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.RunningProcessFullscreenType;
                var1 = var2.UNKNOWN;
case 250:
                return var1;
            }
        };
        var10['GetWindowFullscreenTypeByPid'] = var14;
        var14 = function GetWindowFullscreenTypeExtraByPid(arg1, arg2) {
            _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
                var4 = arg2;
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.getWindowFullscreenTypeExtraByPid;
                var1 = null;
                if(!(var1 != var3)) { _fun0103_ip = 128; continue _fun0103 }
case 3:
                if(!(var1 != var4)) { _fun0103_ip = 128; continue _fun0103 }
case 87:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                _fun0103_ip = 11; continue _fun0103;
case 128:
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
        var10['GetWindowFullscreenTypeExtraByPid'] = var14;
        var14 = function SetGPUBoostEnabledByPid(arg1, arg2) {
            _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var5 = var1.setGPUBoostEnabledByPid;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0104_ip = 92; continue _fun0104 }
case 3:
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var1 = var5.bind(var4)(var3, var2);
case 92:
                return var1;
            }
        };
        var10['SetGPUBoostEnabledByPid'] = var14;
        var14 = function IsHardwareAcceleratedGPUSchedulingEnabled() {
            _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.isHardwareAcceleratedGPUSchedulingEnabled;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0105_ip = 48; continue _fun0105 }
case 3:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 48:
                return var1;
            }
        };
        var10['IsHardwareAcceleratedGPUSchedulingEnabled'] = var14;
        var14 = function AcquireGlobalLock(arg1) {
            _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.acquireGlobalLock;
                var1 = null;
                if(!(var1 == var3)) { _fun0106_ip = 240; continue _fun0106 }
case 105:
                var1 = undefined;
                return var1;
case 240:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var10['AcquireGlobalLock'] = var14;
        var14 = function SetServiceChannel(arg1) {
            _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.setServiceChannel;
                var1 = null;
                if(!(var1 != var3)) { _fun0107_ip = 94; continue _fun0107 }
case 105:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
case 94:
                var1 = undefined;
                return var1;
            }
        };
        var10['SetServiceChannel'] = var14;
        var14 = function IsSystemServiceInstalled() {
            _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.isSystemServiceInstalled;
                var1 = null;
                if(!(var1 == var2)) { _fun0108_ip = 240; continue _fun0108 }
case 105:
                var1 = undefined;
                return var1;
case 240:
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var10['IsSystemServiceInstalled'] = var14;
        var14 = function CanSystemServiceBeInstalled() {
            _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var2 = var1.canSystemServiceBeInstalled;
                var1 = null;
                if(!(var1 == var2)) { _fun0109_ip = 240; continue _fun0109 }
case 105:
                var1 = undefined;
                return var1;
case 240:
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var10['CanSystemServiceBeInstalled'] = var14;
        var14 = function InstallSystemService() {
            _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.installSystemService;
                var1 = null;
                if(!(var1 == var3)) { _fun0110_ip = 68; continue _fun0110 }
case 105:
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
                _fun0110_ip = 9; continue _fun0110;
case 68:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var10['InstallSystemService'] = var14;
        var14 = function DoesSystemServiceHaveUpdate() {
            _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.doesSystemServiceHaveUpdate;
                var1 = null;
                if(!(var1 == var3)) { _fun0111_ip = 68; continue _fun0111 }
case 105:
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
                _fun0111_ip = 9; continue _fun0111;
case 68:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var10['DoesSystemServiceHaveUpdate'] = var14;
        var14 = function UpdateSystemService() {
            _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.updateSystemService;
                var1 = null;
                if(!(var1 == var3)) { _fun0112_ip = 68; continue _fun0112 }
case 105:
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
                _fun0112_ip = 9; continue _fun0112;
case 68:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var10['UpdateSystemService'] = var14;
        var14 = function UninstallSystemService() {
            _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.uninstallSystemService;
                var1 = null;
                if(!(var1 == var3)) { _fun0113_ip = 68; continue _fun0113 }
case 105:
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
                _fun0113_ip = 9; continue _fun0113;
case 68:
                var2 = undefined;
                var1 = var3.bind(var2)();
case 9:
                return var1;
            }
        };
        var10['UninstallSystemService'] = var14;
        var14 = function InputEventServiceSetStatusCallback(arg1) {
            _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.inputEventServiceSetStatusCallback;
                var1 = null;
                if(!(var1 != var3)) { _fun0114_ip = 94; continue _fun0114 }
case 105:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
case 94:
                var1 = undefined;
                return var1;
            }
        };
        var10['InputEventServiceSetStatusCallback'] = var14;
        var14 = function InputEventServiceSetAllowed(arg1) {
            _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
                var2 = this;
                var1 = var2.getDiscordUtils;
                var1 = var1.bind(var2)();
                var3 = var1.inputEventServiceSetAllowed;
                var1 = null;
                if(!(var1 == var3)) { _fun0115_ip = 240; continue _fun0115 }
case 105:
                var1 = undefined;
                return var1;
case 240:
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var10['InputEventServiceSetAllowed'] = var14;
        var14 = function isModuleVersionAtLeast(arg1, arg2) {
            _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
                var1 = arg2;
                var4 = this;
                var3 = _closure1_slot9;
                var2 = null;
                if(!(var2 == var3)) { _fun0116_ip = 240; continue _fun0116 }
case 251:
                var5 = [0, 0, 0];
                _fun0116_ip = 125; continue _fun0116;
case 240:
                var5 = _closure1_slot9;
case 125:
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
                if(var5) { _fun0116_ip = 129; continue _fun0116 }
case 156:
                var5 = arg1;
                var10 = var11[var5];
case 129:
                var11 = var2 != var10;
                var5 = 0;
                if(!var11) { _fun0116_ip = 11; continue _fun0116 }
case 110:
                var5 = var10;
case 11:
                var5 = var6.bind(var3)(var5);
                var4 = var4.releaseChannel;
                var6 = var1[var4];
                if(!(var2 == var6)) { _fun0116_ip = 97; continue _fun0116 }
case 120:
                var6 = var1.stable;
case 97:
                var2 = _closure1_slot22;
                var1 = var3.entries;
                var1 = var1.bind(var3)();
                var5 = var2.bind(var7)(var1);
                var2 = var5.bind(var7)();
                var1 = var2.done;
                var4 = 2;
                var3 = 1;
                if(var1) { _fun0116_ip = 77; continue _fun0116 }
case 15:
                var10 = var2.value;
                var1 = _closure1_slot3;
                var10 = var1.bind(var7)(var10, var4);
                var1 = var10[var8];
                var10 = var10[var3];
                var11 = var6[var1];
                if(!(!(var10 > var11))) { _fun0116_ip = 252; continue _fun0116 }
case 39:
                var1 = var6[var1];
                if(!(!(var10 < var1))) { _fun0116_ip = 153; continue _fun0116 }
case 253:
                var10 = var5.bind(var7)();
                var1 = var10.done;
                var2 = var10;
                if(var1) { _fun0116_ip = 77; continue _fun0116 }
case 254:
                _fun0116_ip = 15; continue _fun0116;
case 153:
                var1 = false;
                return var1;
case 252:
                var1 = true;
                return var1;
case 77:
                var1 = true;
                return var1;
            }
        };
        var10['isModuleVersionAtLeast'] = var14;
        var14 = function fetchRiotGamesLiveClientData(arg1, arg2) {
            _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.isPlatformEmbedded;
                if(var1) { _fun0117_ip = 62; continue _fun0117 }
case 87:
                var1 = global;
                var4 = var1.Promise;
                var3 = var4.reject;
                var6 = var1.Error;
                var1 = var6.prototype;
                var5 = Object.create(var1, {constructor: {value: var6}});
                var9 = 'Not embedded!';
                var10 = var5;
                var1 = new var10[var6](var9, var8);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var3.bind(var4)(var1);
                _fun0117_ip = 39; continue _fun0117;
case 62:
                var3 = _closure1_slot6;
                var4 = var3.riotGames;
                var3 = null;
                if(!(var3 != var4)) { _fun0117_ip = 148; continue _fun0117 }
case 227:
                var2 = _closure1_slot6;
                var5 = var2.riotGames;
                var4 = var5.fetchLiveClientData;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
                _fun0117_ip = 42; continue _fun0117;
case 148:
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
case 42:
                var1 = var2;
case 39:
                return var1;
            }
        };
        var10['fetchRiotGamesLiveClientData'] = var14;
        var14 = function appViewed() {
            _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
                var4 = this;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isDesktop;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0118_ip = 80; continue _fun0118 }
case 79:
                var3 = var4.send;
                var2 = 'APP_VIEWED';
                var2 = var3.bind(var4)(var2);
case 80:
                return var1;
            }
        };
        var10['appViewed'] = var14;
        var14 = function appLoaded() {
            var3 = _closure1_slot30;
            var1 = undefined;
            var2 = 'APP_LOADED';
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var10['appLoaded'] = var14;
        var14 = function indexLoadedAsync() {
            var3 = _closure1_slot30;
            var1 = undefined;
            var2 = 'DISCORD_APP_ASYNC_INDEX_TSX_LOADED';
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var10['indexLoadedAsync'] = var14;
        var _closure1_slot21 = var10;
        var11 = 12;
        var11 = var13[var11];
        var13 = var12.bind(var1)(var11);
        var12 = var13.fileFinishedImporting;
        var11 = 'utils/web/DesktopNativeUtils.tsx';
        var11 = var12.bind(var13)(var11);
        var3['default'] = var10;
        var3['SaveImageResult'] = var9;
        var3['sanitizeFilename'] = var8;
        var3['getFileData'] = var7;
        var3['getImageData'] = var6;
        var3['NativePermissionRequestType'] = var5;
        var3['ThumbarButtonName'] = var4;
        var3['decideFileExtension'] = var2;
        return var1;
    }
})();