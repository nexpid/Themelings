// app/modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function hasSubgameInfoChanged(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var4 = null;
            var1 = var4 == var7;
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
 15:
            var1 = var4 != var6;
 19:
            if(var1) { _fun0001_ip = 96; continue _fun0001 }
 22:
            var2 = var4 != var7;
            if(!var2) { _fun0001_ip = 33; continue _fun0001 }
 29:
            var2 = var4 == var6;
 33:
            if(var2) { _fun0001_ip = 93; continue _fun0001 }
 36:
            var3 = var4 != var7;
            if(!var3) { _fun0001_ip = 47; continue _fun0001 }
 43:
            var3 = var4 != var6;
 47:
            if(!var3) { _fun0001_ip = 90; continue _fun0001 }
 50:
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var4 = var5.isEqual;
            var4 = var4.bind(var5)(var7, var6);
            var3 = !var4;
 90:
            var2 = var3;
 93:
            var1 = var2;
 96:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var1 = function isActivityRobloxSubgame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = var3.metadata;
            var2 = null;
            var2 = var2 == var1;
            var5 = undefined;
            var4 = undefined;
            if(var2) { _fun0002_ip = 28; continue _fun0002 }
 22:
            var4 = var1.distributor;
 28:
            var1 = _closure1_slot8;
            var1 = var1.ROBLOX;
            var1 = var4 === var1;
            if(!var1) { _fun0002_ip = 84; continue _fun0002 }
 48:
            var3 = var3.application_id;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ROBLOX_APPLICATION_ID;
            var1 = var3 !== var2;
 84:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var5 = function isRobloxSubgame(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = var3.distributor;
            var1 = _closure1_slot8;
            var1 = var1.ROBLOX;
            var1 = var4 === var1;
            if(!var1) { _fun0003_ip = 66; continue _fun0003 }
 29:
            var3 = var3.id;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ROBLOX_APPLICATION_ID;
            var1 = var3 !== var2;
 66:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var1 = function _playOnRobloxUniverse() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 292; continue _fun0004 }
 13:
                    var6 = var7;
                    var4 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot5;
                    var3 = var5.getSupplementalData;
                    var5 = var3.bind(var5)(var7);
                    var9 = null;
                    var7 = var9 == var5;
                    var3 = undefined;
                    if(var7) { _fun0004_ip = 55; continue _fun0004 }
 49:
                    var3 = var5.rootPlaceId;
 55:
                    if(!(var9 == var3)) { _fun0004_ip = 267; continue _fun0004 }
 62: // try_start_0
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 8;
                    var5 = var10[var5];
                    var10 = var7.bind(var4)(var5);
                    var7 = var10.fetchRobloxSupplementalData;
                    var11 = var6;
                    var5 = new Array(1);
                    var5[0] = var11;
                    var5 = var7.bind(var10)(var5);
                    SaveGenerator(address=108);
 106:
                    return var5;
 108:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 240; continue _fun0004 }
 117:
                    var8 = var5;
                    var7 = var6;
                    var7 = var5[var7];
                    if(!(var9 != var7)) { _fun0004_ip = 151; continue _fun0004 }
 131:
                    var10 = var8;
                    var7 = var6;
                    var7 = var10[var7];
                    var7 = var7.rootPlaceId;
                    if(!(var9 == var7)) { _fun0004_ip = 205; continue _fun0004 }
 151: // try_end0
                    var7 = global;
                    var10 = var7.Promise;
                    var9 = var10.reject;
                    var12 = var7.Error;
                    var7 = var12.prototype;
                    var11 = Object.create(var7, {constructor: {value: var12}});
                    var13 = 'Failed to find root place id for activity';
                    var14 = var11;
                    var7 = new var14[var12](var13, var12);
                    var7 = var7 instanceof Object ? var7 : var11;
                    var7 = var9.bind(var10)(var7);
                    return var7;
 205: // try_start_1
                    var7 = _closure1_slot13;
                    var6 = var8[var6];
                    var6 = var6.rootPlaceId;
                    var6 = var7.bind(var4)(var6);
                    SaveGenerator(address=228);
 226:
                    return var6;
 228:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 237; continue _fun0004 }
 234: // try_end1
                    return var6;
 237:
                    return var6;
 240:
                    return var5;
 243: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=6);
                    var5 = global;
                    var6 = var5.Promise;
                    var5 = var6.reject;
                    var5 = var5.bind(var6)(var7);
                    return var5;
 267:
                    var2 = _closure1_slot13;
                    var2 = var2.bind(var4)(var3);
                    SaveGenerator(address=280);
 278:
                    return var2;
 280:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 289; continue _fun0004 }
 286:
                    return var2;
 289:
                    return var2;
 292:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var4 = function openRobloxURLWithRootPlaceId() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = function _openRobloxURLWithRootPlaceId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 100; continue _fun0005 }
 7:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.getRobloxSubgameURL;
                    var2 = arg1;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=50);
 48:
                    return var2;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 97; continue _fun0005 }
 56:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
 83:
                    return var3;
 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 94; continue _fun0005 }
 91:
                    return var3;
 94:
                    return var3;
 97:
                    return var2;
 100:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.isDetectionEnabled;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.ActivityTypes;
    var _closure1_slot6 = var10;
    var10 = var7.DistributorNames;
    var _closure1_slot7 = var10;
    var7 = var7.Distributors;
    var _closure1_slot8 = var7;
    var7 = 11;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/roblox_subgame_detection/RobloxSubgameUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function keyForRobloxGame(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var6 = var2.distributor;
            var1 = _closure1_slot8;
            var5 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var6 === var5)) { _fun0006_ip = 145; continue _fun0006 }
 30:
            var5 = var2.sku;
            var5 = var3 != var5;
            var1 = null;
            if(!var5) { _fun0006_ip = 145; continue _fun0006 }
 45:
            var6 = var2.sku;
            var5 = var2.gameMetadata;
            var7 = var3 == var5;
            var8 = undefined;
            var2 = undefined;
            if(var7) { _fun0006_ip = 104; continue _fun0006 }
 68:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.RobloxMetadataKeys;
            var4 = var4.PLACE_ID;
            var2 = var5[var4];
 104:
            var3 = var3 != var2;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0006_ip = 121; continue _fun0006 }
 118:
            var4 = var2;
 121:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var5)(var6, var2, var4);
 145:
            return var1;
        }
    };
    var3['keyForRobloxGame'] = var7;
    var7 = function hasRunningGameChanged(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var3 = arg3;
            var2 = var4.distributor;
            var1 = _closure1_slot8;
            var1 = var1.ROBLOX;
            var1 = var2 === var1;
            if(!var1) { _fun0007_ip = 211; continue _fun0007 }
 35:
            var7 = null;
            var2 = var7 != var3;
            if(!var2) { _fun0007_ip = 58; continue _fun0007 }
 44:
            var5 = var4.id;
            var3 = var3.id;
            var2 = var5 !== var3;
 58:
            if(var2) { _fun0007_ip = 208; continue _fun0007 }
 64:
            var6 = _closure1_slot9;
            var9 = var4.distributor;
            var3 = _closure1_slot8;
            var3 = var3.ROBLOX;
            var5 = null;
            if(!(var9 === var3)) { _fun0007_ip = 197; continue _fun0007 }
 90:
            var3 = var4.gameMetadata;
            var3 = var7 == var3;
            var5 = null;
            if(var3) { _fun0007_ip = 197; continue _fun0007 }
 105:
            var3 = var4.sku;
            var3 = var7 == var3;
            var5 = null;
            if(var3) { _fun0007_ip = 197; continue _fun0007 }
 120:
            var3 = {};
            var9 = var4.gameMetadata;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 4;
            var10 = var10[var8];
            var8 = undefined;
            var8 = var11.bind(var8)(var10);
            var8 = var8.RobloxMetadataKeys;
            var8 = var8.PLACE_ID;
            var8 = var9[var8];
            var9 = var7 != var8;
            var7 = null;
            if(!var9) { _fun0007_ip = 178; continue _fun0007 }
 175:
            var7 = var8;
 178:
            var3['placeId'] = var7;
            var4 = var4.sku;
            var3['universeId'] = var4;
            var5 = var3;
 197:
            var4 = undefined;
            var3 = arg2;
            var2 = var6.bind(var4)(var5, var3);
 208:
            var1 = var2;
 211:
            return var1;
        }
    };
    var3['hasRunningGameChanged'] = var7;
    var3['hasSubgameInfoChanged'] = var6;
    var6 = function updateRunningGameWithRobloxSubgameInfo(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var7 = arg1;
            var2 = arg2;
            var1 = {};
            var17 = var1;
            var16 = var7;
            var3 = copyDataProperties(var17, var16);
            var4 = var2.subgameInfo;
            var8 = var2.application;
            var2 = global;
            var6 = var2.Number;
            var10 = var7.gameMetadata;
            var11 = null;
            var9 = var11 == var10;
            var3 = undefined;
            var5 = undefined;
            if(var9) { _fun0008_ip = 97; continue _fun0008 }
 58:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 4;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.RobloxMetadataKeys;
            var9 = var9.ROBLOX_TIME_STARTED;
            var5 = var10[var9];
 97:
            var5 = var6.bind(var3)(var5);
            var6 = var2.isNaN;
            var6 = var6.bind(var3)(var5);
            if(var6) { _fun0008_ip = 122; continue _fun0008 }
 116:
            var9 = 0;
            var6 = var9 === var5;
 122:
            if(!var6) { _fun0008_ip = 152; continue _fun0008 }
 125:
            var6 = var7.start;
            if(!(var11 == var6)) { _fun0008_ip = 149; continue _fun0008 }
 134:
            var10 = var2.Date;
            var9 = var10.now;
            var6 = var9.bind(var10)();
 149:
            var5 = var6;
 152:
            if(!(var11 != var4)) { _fun0008_ip = 654; continue _fun0008 }
 159:
            var6 = {};
            if(!(var11 != var8)) { _fun0008_ip = 321; continue _fun0008 }
 168:
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var7.exePath;
            var9['exePath'] = var13;
            var13 = var8.name;
            var9['name'] = var13;
            var13 = var8.id;
            var9['id'] = var13;
            var13 = _closure1_slot8;
            var13 = var13.ROBLOX;
            var9['distributor'] = var13;
            var9 = var10.bind(var3)(var9);
            if(!var9) { _fun0008_ip = 321; continue _fun0008 }
 229:
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var7.exePath;
            var9['exePath'] = var13;
            var14 = _closure1_slot7;
            var13 = _closure1_slot8;
            var13 = var13.ROBLOX;
            var13 = var14[var13];
            var9['name'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 4;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.ROBLOX_APPLICATION_ID;
            var9['id'] = var13;
            var12 = _closure1_slot8;
            var12 = var12.ROBLOX;
            var9['distributor'] = var12;
            var9 = var10.bind(var3)(var9);
            if(var9) { _fun0008_ip = 388; continue _fun0008 }
 321:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 4;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.ROBLOX_APPLICATION_ID;
            var1['id'] = var10;
            var10 = _closure1_slot7;
            var9 = _closure1_slot8;
            var9 = var9.ROBLOX;
            var9 = var10[var9];
            var1['name'] = var9;
            var1['start'] = var5;
            _fun0008_ip = 490; continue _fun0008;
 388:
            var9 = var8.id;
            var1['id'] = var9;
            var9 = var8.name;
            var1['name'] = var9;
            var8 = var8.name;
            var1['gameName'] = var8;
            var9 = var2.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var1['start'] = var8;
            var10 = var2.Math;
            var9 = var10.floor;
            var12 = var2.Date;
            var8 = var12.now;
            var12 = var8.bind(var12)();
            var8 = 1000;
            var8 = var12 / var8;
            var8 = var9.bind(var10)(var8);
            var1['lastFocused'] = var8;
 490:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 4;
            var9 = var9[var10];
            var9 = var12.bind(var3)(var9);
            var9 = var9.RobloxMetadataKeys;
            var12 = var9.ROBLOX_TIME_STARTED;
            var9 = var5.toString;
            var9 = var9.bind(var5)();
            var6[var12] = var9;
            var12 = var4.universeId;
            var13 = var11 != var12;
            var9 = undefined;
            if(!var13) { _fun0008_ip = 556; continue _fun0008 }
 553:
            var9 = var12;
 556:
            var1['sku'] = var9;
            var9 = var4.placeId;
            if(!(var11 != var9)) { _fun0008_ip = 611; continue _fun0008 }
 572:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var3)(var8);
            var8 = var8.RobloxMetadataKeys;
            var8 = var8.PLACE_ID;
            var4 = var4.placeId;
            var6[var8] = var4;
 611:
            var8 = var2.Object;
            var4 = var8.keys;
            var4 = var4.bind(var8)(var6);
            var8 = var4.length;
            var4 = 0;
            var8 = var8 > var4;
            var4 = undefined;
            if(!var8) { _fun0008_ip = 646; continue _fun0008 }
 643:
            var4 = var6;
 646:
            var1['gameMetadata'] = var4;
            _fun0008_ip = 776; continue _fun0008;
 654:
            var6 = _closure1_slot11;
            var6 = var6.bind(var3)(var7);
            if(!var6) { _fun0008_ip = 725; continue _fun0008 }
 669:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.ROBLOX_APPLICATION_ID;
            var1['id'] = var6;
            var6 = _closure1_slot7;
            var4 = _closure1_slot8;
            var4 = var4.ROBLOX;
            var4 = var6[var4];
            var1['name'] = var4;
 725:
            var1['gameMetadata'] = var3;
            var1['sku'] = var3;
            var1['start'] = var5;
            var4 = var2.Math;
            var3 = var4.floor;
            var2 = 1000;
            var2 = var5 / var2;
            var2 = var3.bind(var4)(var2);
            var1['lastFocused'] = var2;
 776:
            return var1;
        }
    };
    var3['updateRunningGameWithRobloxSubgameInfo'] = var6;
    var6 = function convertMapToRobloxSubgameInfo(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 4;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var1 = var1.NativeRobloxSubgameKeys;
            var1 = var1.UNIVERSE_ID;
            var1 = var4[var1];
            var5 = null;
            var2 = var5 == var1;
            var1 = null;
            if(var2) { _fun0009_ip = 170; continue _fun0009 }
 55:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var8.bind(var6)(var2);
            var2 = var2.NativeRobloxSubgameKeys;
            var2 = var2.PLACE_ID;
            var2 = var4[var2];
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0009_ip = 170; continue _fun0009 }
 97:
            var2 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = var3[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.NativeRobloxSubgameKeys;
            var8 = var8.UNIVERSE_ID;
            var8 = var4[var8];
            var2['universeId'] = var8;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.NativeRobloxSubgameKeys;
            var3 = var3.PLACE_ID;
            var3 = var4[var3];
            var2['placeId'] = var3;
            var1 = var2;
 170:
            return var1;
        }
    };
    var3['convertMapToRobloxSubgameInfo'] = var6;
    var6 = function getSubgameMetadata(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var6 = arg1;
            var4 = var6.distributor;
            var1 = _closure1_slot8;
            var2 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var4 === var2)) { _fun0010_ip = 166; continue _fun0010 }
 33:
            var2 = var6.gameMetadata;
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0010_ip = 166; continue _fun0010 }
 48:
            var4 = var6.gameMetadata;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 4;
            var2 = var2[var9];
            var8 = undefined;
            var2 = var7.bind(var8)(var2);
            var2 = var2.RobloxMetadataKeys;
            var2 = var2.PLACE_ID;
            var2 = var4[var2];
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0010_ip = 166; continue _fun0010 }
 101:
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.stringify;
            var2 = {};
            var6 = var6.gameMetadata;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var7.bind(var8)(var5);
            var5 = var5.RobloxMetadataKeys;
            var5 = var5.PLACE_ID;
            var5 = var6[var5];
            var2['placeId'] = var5;
            var1 = var3.bind(var4)(var2);
 166:
            return var1;
        }
    };
    var3['getSubgameMetadata'] = var6;
    var6 = function maybeAddAdditionalGameMetadata(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var4 = var3.distributor;
            var1 = _closure1_slot8;
            var1 = var1.ROBLOX;
            if(!(var4 === var1)) { _fun0011_ip = 192; continue _fun0011 }
 29:
            var1 = var3.gameMetadata;
            var4 = null;
            if(!(var4 != var1)) { _fun0011_ip = 192; continue _fun0011 }
 44:
            var7 = var3.gameMetadata;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 4;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var8.bind(var5)(var1);
            var1 = var1.RobloxMetadataKeys;
            var1 = var1.ROBLOX_TIME_STARTED;
            var1 = var7[var1];
            if(!(var4 != var1)) { _fun0011_ip = 192; continue _fun0011 }
 92:
            var7 = var3.id;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.ROBLOX_APPLICATION_ID;
            if(!(var7 !== var1)) { _fun0011_ip = 192; continue _fun0011 }
 124:
            var1 = var3.gameName;
            if(!(var4 != var1)) { _fun0011_ip = 192; continue _fun0011 }
 134:
            var1 = {};
            var4 = var3.gameName;
            var1['name'] = var4;
            var3 = var3.gameMetadata;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.RobloxMetadataKeys;
            var2 = var2.ROBLOX_TIME_STARTED;
            var2 = var3[var2];
            var1['sync_id'] = var2;
            _fun0011_ip = 194; continue _fun0011;
 192:
            var1 = {};
 194:
            return var1;
        }
    };
    var3['maybeAddAdditionalGameMetadata'] = var6;
    var6 = function transformRobloxSubgameNames(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var6 = arg1;
            var1 = _closure1_slot10;
            var4 = undefined;
            var1 = var1.bind(var4)(var6);
            if(var1) { _fun0012_ip = 22; continue _fun0012 }
 20:
            return var6;
 22:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var5 = var1.ViewRobloxSubgamesInRichPresenceExperiment;
            var3 = var5.getConfig;
            var1 = {};
            var7 = 'transformRobloxSubgameNames';
            var1['location'] = var7;
            var1 = var3.bind(var5)(var1);
            var3 = var1.alternativeTitle;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var1 = var1[var7];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            if(var3) { _fun0012_ip = 113; continue _fun0012 }
 103:
            var5 = var1.G6BGd3;
            _fun0012_ip = 121; continue _fun0012;
 113:
            var5 = var1.HjVwGx;
 121:
            var1 = {};
            var9 = var1;
            var8 = var6;
            var3 = copyDataProperties(var9, var8);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var4)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var2 = {};
            var6 = var6.name;
            var2['subgameName'] = var6;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 'name';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['transformRobloxSubgameNames'] = var6;
    var6 = function maybeTransformRobloxSubgameIntoRobloxActivity(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot6;
            var2 = var2.PLAYING;
            if(!(var3 === var2)) { _fun0013_ip = 159; continue _fun0013 }
 28:
            var2 = _closure1_slot10;
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            if(var2) { _fun0013_ip = 44; continue _fun0013 }
 42:
            return var1;
 44:
            var3 = global;
            var4 = var3.Number;
            var2 = var1.sync_id;
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var11 = var2;
            var10 = var1;
            var7 = copyDataProperties(var11, var10);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 4;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.ROBLOX_APPLICATION_ID;
            var2['application_id'] = var7;
            var7 = _closure1_slot7;
            var6 = _closure1_slot8;
            var6 = var6.ROBLOX;
            var6 = var7[var6];
            var2['name'] = var6;
            var3 = var3.isNaN;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0013_ip = 157; continue _fun0013 }
 145:
            var3 = {};
            var3['start'] = var4;
            var2['timestamps'] = var3;
 157:
            return var2;
 159:
            return var1;
        }
    };
    var3['maybeTransformRobloxSubgameIntoRobloxActivity'] = var6;
    var3['isRobloxSubgame'] = var5;
    var5 = function isRobloxSubgameApplication(arg1) {
        var1 = arg1;
        var3 = var1.thirdPartySkus;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.distributor;
            var1 = _closure1_slot8;
            var1 = var1.ROBLOX;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isRobloxSubgameApplication'] = var5;
    var5 = function playOnRobloxUniverse() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['playOnRobloxUniverse'] = var5;
    var3['openRobloxURLWithRootPlaceId'] = var4;
    var2 = function maybeTransformRobloxSubgameToRoblox(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var5 = var4.distributor;
            var1 = _closure1_slot8;
            var2 = var1.ROBLOX;
            var1 = var4;
            if(!(var5 === var2)) { _fun0014_ip = 143; continue _fun0014 }
 29:
            var5 = var4.id;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 4;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var8.bind(var6)(var2);
            var2 = var2.ROBLOX_APPLICATION_ID;
            var1 = var4;
            if(!(var5 !== var2)) { _fun0014_ip = 143; continue _fun0014 }
 69:
            var2 = {};
            var10 = var2;
            var9 = var4;
            var4 = copyDataProperties(var10, var9);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var5 = var4.ROBLOX_APPLICATION_ID;
            var4 = 'id';
            var2[var4] = var5;
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var3 = var3.ROBLOX;
            var4 = var4[var3];
            var3 = 'name';
            var2[var3] = var4;
            var1 = var2;
 143:
            return var1;
        }
    };
    var3['maybeTransformRobloxSubgameToRoblox'] = var2;
    return var1;
})();