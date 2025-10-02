// app/modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function hasSubgameInfoChanged(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var4 = null;
            var1 = var4 == var7;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4 != var6;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4 != var7;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var4 == var6;
case 6:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4 != var7;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4 != var6;
case 10:
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 4;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var4 = var5.isEqual;
            var4 = var4.bind(var5)(var7, var6);
            var3 = !var4;
case 12:
            var2 = var3;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = function isActivityRobloxSubgame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = var3.metadata;
            var2 = null;
            var2 = var2 == var1;
            var5 = undefined;
            var4 = undefined;
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 5:
            var4 = var1.distributor;
case 14:
            var1 = _closure1_slot7;
            var1 = var1.ROBLOX;
            var1 = var4 === var1;
            if(!var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var3.application_id;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ROBLOX_APPLICATION_ID;
            var1 = var3 !== var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function isRobloxSubgame(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = var3.distributor;
            var1 = _closure1_slot7;
            var1 = var1.ROBLOX;
            var1 = var4 === var1;
            if(!var1) { _fun0003_ip = 17; continue _fun0003 }
case 7:
            var3 = var3.id;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ROBLOX_APPLICATION_ID;
            var1 = var3 !== var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function _openRobloxURLWithRootPlaceId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.getRobloxSubgameURL;
                    var2 = arg1;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=50);
case 16:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
case 22:
                    return var3;
case 23:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    return var3;
case 24:
                    return var3;
case 20:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.isDetectionEnabled;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ActivityTypes;
    var _closure1_slot5 = var9;
    var9 = var6.DistributorNames;
    var _closure1_slot6 = var9;
    var6 = var6.Distributors;
    var _closure1_slot7 = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/roblox_subgame_detection/RobloxSubgameUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function keyForRobloxGame(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = var2.distributor;
            var1 = _closure1_slot7;
            var5 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var6 === var5)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var5 = var2.sku;
            var5 = var3 != var5;
            var1 = null;
            if(!var5) { _fun0005_ip = 26; continue _fun0005 }
case 28:
            var6 = var2.sku;
            var5 = var2.gameMetadata;
            var7 = var3 == var5;
            var8 = undefined;
            var2 = undefined;
            if(var7) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 3;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.RobloxMetadataKeys;
            var4 = var4.PLACE_ID;
            var2 = var5[var4];
case 29:
            var3 = var3 != var2;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var4 = var2;
case 31:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var5)(var6, var2, var4);
case 26:
            return var1;
        }
    };
    var3['keyForRobloxGame'] = var6;
    var6 = function hasRunningGameChanged(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var3 = arg3;
            var2 = var4.distributor;
            var1 = _closure1_slot7;
            var1 = var1.ROBLOX;
            var1 = var2 === var1;
            if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var7 = null;
            var2 = var7 != var3;
            if(!var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var5 = var4.id;
            var3 = var3.id;
            var2 = var5 !== var3;
case 35:
            if(var2) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var6 = _closure1_slot8;
            var9 = var4.distributor;
            var3 = _closure1_slot7;
            var3 = var3.ROBLOX;
            var5 = null;
            if(!(var9 === var3)) { _fun0006_ip = 39; continue _fun0006 }
case 12:
            var3 = var4.gameMetadata;
            var3 = var7 == var3;
            var5 = null;
            if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var3 = var4.sku;
            var3 = var7 == var3;
            var5 = null;
            if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 41:
            var3 = {};
            var9 = var4.gameMetadata;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 3;
            var10 = var10[var8];
            var8 = undefined;
            var8 = var11.bind(var8)(var10);
            var8 = var8.RobloxMetadataKeys;
            var8 = var8.PLACE_ID;
            var8 = var9[var8];
            var9 = var7 != var8;
            var7 = null;
            if(!var9) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var7 = var8;
case 42:
            var3['placeId'] = var7;
            var4 = var4.sku;
            var3['universeId'] = var4;
            var5 = var3;
case 39:
            var4 = undefined;
            var3 = arg2;
            var2 = var6.bind(var4)(var5, var3);
case 37:
            var1 = var2;
case 33:
            return var1;
        }
    };
    var3['hasRunningGameChanged'] = var6;
    var3['hasSubgameInfoChanged'] = var5;
    var5 = function updateRunningGameWithRobloxSubgameInfo(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
            if(var9) { _fun0007_ip = 20; continue _fun0007 }
case 35:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 3;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.RobloxMetadataKeys;
            var9 = var9.ROBLOX_TIME_STARTED;
            var5 = var10[var9];
case 20:
            var5 = var6.bind(var3)(var5);
            var6 = var2.isNaN;
            var6 = var6.bind(var3)(var5);
            if(var6) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var9 = 0;
            var6 = var9 === var5;
case 44:
            if(!var6) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var6 = var7.start;
            if(!(var11 == var6)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var10 = var2.Date;
            var9 = var10.now;
            var6 = var9.bind(var10)();
case 48:
            var5 = var6;
case 46:
            if(!(var11 != var4)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var6 = {};
            if(!(var11 != var8)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var7.exePath;
            var9['exePath'] = var13;
            var13 = var8.name;
            var9['name'] = var13;
            var13 = var8.id;
            var9['id'] = var13;
            var13 = _closure1_slot7;
            var13 = var13.ROBLOX;
            var9['distributor'] = var13;
            var9 = var10.bind(var3)(var9);
            if(!var9) { _fun0007_ip = 52; continue _fun0007 }
case 54:
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var7.exePath;
            var9['exePath'] = var13;
            var14 = _closure1_slot6;
            var13 = _closure1_slot7;
            var13 = var13.ROBLOX;
            var13 = var14[var13];
            var9['name'] = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 3;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.ROBLOX_APPLICATION_ID;
            var9['id'] = var13;
            var12 = _closure1_slot7;
            var12 = var12.ROBLOX;
            var9['distributor'] = var12;
            var9 = var10.bind(var3)(var9);
            if(var9) { _fun0007_ip = 55; continue _fun0007 }
case 52:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 3;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.ROBLOX_APPLICATION_ID;
            var1['id'] = var10;
            var10 = _closure1_slot6;
            var9 = _closure1_slot7;
            var9 = var9.ROBLOX;
            var9 = var10[var9];
            var1['name'] = var9;
            var1['start'] = var5;
            _fun0007_ip = 56; continue _fun0007;
case 55:
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
case 56:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 3;
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
            if(!var13) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var9 = var12;
case 57:
            var1['sku'] = var9;
            var9 = var4.placeId;
            if(!(var11 != var9)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var3)(var8);
            var8 = var8.RobloxMetadataKeys;
            var8 = var8.PLACE_ID;
            var4 = var4.placeId;
            var6[var8] = var4;
case 59:
            var8 = var2.Object;
            var4 = var8.keys;
            var4 = var4.bind(var8)(var6);
            var8 = var4.length;
            var4 = 0;
            var8 = var8 > var4;
            var4 = undefined;
            if(!var8) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var4 = var6;
case 61:
            var1['gameMetadata'] = var4;
            _fun0007_ip = 63; continue _fun0007;
case 50:
            var6 = _closure1_slot10;
            var6 = var6.bind(var3)(var7);
            if(!var6) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.ROBLOX_APPLICATION_ID;
            var1['id'] = var6;
            var6 = _closure1_slot6;
            var4 = _closure1_slot7;
            var4 = var4.ROBLOX;
            var4 = var6[var4];
            var1['name'] = var4;
case 64:
            var1['gameMetadata'] = var3;
            var1['sku'] = var3;
            var1['start'] = var5;
            var4 = var2.Math;
            var3 = var4.floor;
            var2 = 1000;
            var2 = var5 / var2;
            var2 = var3.bind(var4)(var2);
            var1['lastFocused'] = var2;
case 63:
            return var1;
        }
    };
    var3['updateRunningGameWithRobloxSubgameInfo'] = var5;
    var5 = function convertMapToRobloxSubgameInfo(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 3;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var1 = var1.NativeRobloxSubgameKeys;
            var1 = var1.UNIVERSE_ID;
            var1 = var4[var1];
            var5 = null;
            var2 = var5 == var1;
            var1 = null;
            if(var2) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var8.bind(var6)(var2);
            var2 = var2.NativeRobloxSubgameKeys;
            var2 = var2.PLACE_ID;
            var2 = var4[var2];
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0008_ip = 66; continue _fun0008 }
case 20:
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
case 66:
            return var1;
        }
    };
    var3['convertMapToRobloxSubgameInfo'] = var5;
    var5 = function getSubgameMetadata(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var4 = var6.distributor;
            var1 = _closure1_slot7;
            var2 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var4 === var2)) { _fun0009_ip = 68; continue _fun0009 }
case 6:
            var2 = var6.gameMetadata;
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0009_ip = 68; continue _fun0009 }
case 16:
            var4 = var6.gameMetadata;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 3;
            var2 = var2[var9];
            var8 = undefined;
            var2 = var7.bind(var8)(var2);
            var2 = var2.RobloxMetadataKeys;
            var2 = var2.PLACE_ID;
            var2 = var4[var2];
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0009_ip = 68; continue _fun0009 }
case 69:
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
case 68:
            return var1;
        }
    };
    var3['getSubgameMetadata'] = var5;
    var5 = function maybeAddAdditionalGameMetadata(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var4 = var3.distributor;
            var1 = _closure1_slot7;
            var1 = var1.ROBLOX;
            if(!(var4 === var1)) { _fun0010_ip = 70; continue _fun0010 }
case 7:
            var1 = var3.gameMetadata;
            var4 = null;
            if(!(var4 != var1)) { _fun0010_ip = 70; continue _fun0010 }
case 36:
            var7 = var3.gameMetadata;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var8.bind(var5)(var1);
            var1 = var1.RobloxMetadataKeys;
            var1 = var1.ROBLOX_TIME_STARTED;
            var1 = var7[var1];
            if(!(var4 != var1)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var7 = var3.id;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.ROBLOX_APPLICATION_ID;
            if(!(var7 !== var1)) { _fun0010_ip = 70; continue _fun0010 }
case 72:
            var1 = var3.gameName;
            if(!(var4 != var1)) { _fun0010_ip = 70; continue _fun0010 }
case 49:
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
            _fun0010_ip = 73; continue _fun0010;
case 70:
            var1 = {};
case 73:
            return var1;
        }
    };
    var3['maybeAddAdditionalGameMetadata'] = var5;
    var5 = function transformRobloxSubgameNames(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot9;
            var4 = undefined;
            var1 = var1.bind(var4)(var6);
            if(var1) { _fun0011_ip = 5; continue _fun0011 }
case 74:
            return var6;
case 5:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
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
            var7 = 6;
            var1 = var1[var7];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            if(var3) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var5 = var1.G6BGd3;
            _fun0011_ip = 31; continue _fun0011;
case 75:
            var5 = var1.HjVwGx;
case 31:
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
    var3['transformRobloxSubgameNames'] = var5;
    var5 = function maybeTransformRobloxSubgameIntoRobloxActivity(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot5;
            var2 = var2.PLAYING;
            if(!(var3 === var2)) { _fun0012_ip = 51; continue _fun0012 }
case 14:
            var2 = _closure1_slot9;
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            if(var2) { _fun0012_ip = 36; continue _fun0012 }
case 77:
            return var1;
case 36:
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
            var7 = 3;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.ROBLOX_APPLICATION_ID;
            var2['application_id'] = var7;
            var7 = _closure1_slot6;
            var6 = _closure1_slot7;
            var6 = var6.ROBLOX;
            var6 = var7[var6];
            var2['name'] = var6;
            var3 = var3.isNaN;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0012_ip = 78; continue _fun0012 }
case 26:
            var3 = {};
            var3['start'] = var4;
            var2['timestamps'] = var3;
case 78:
            return var2;
case 51:
            return var1;
        }
    };
    var3['maybeTransformRobloxSubgameIntoRobloxActivity'] = var5;
    var3['isRobloxSubgame'] = var4;
    var4 = function isRobloxSubgameApplication(arg1) {
        var1 = arg1;
        var3 = var1.thirdPartySkus;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.distributor;
            var1 = _closure1_slot7;
            var1 = var1.ROBLOX;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isRobloxSubgameApplication'] = var4;
    var4 = function openRobloxURLWithRootPlaceId() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['openRobloxURLWithRootPlaceId'] = var4;
    var2 = function maybeTransformRobloxSubgameToRoblox(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var5 = var4.distributor;
            var1 = _closure1_slot7;
            var2 = var1.ROBLOX;
            var1 = var4;
            if(!(var5 === var2)) { _fun0013_ip = 79; continue _fun0013 }
case 7:
            var5 = var4.id;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 3;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var8.bind(var6)(var2);
            var2 = var2.ROBLOX_APPLICATION_ID;
            var1 = var4;
            if(!(var5 !== var2)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
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
            var4 = _closure1_slot6;
            var3 = _closure1_slot7;
            var3 = var3.ROBLOX;
            var4 = var4[var3];
            var3 = 'name';
            var2[var3] = var4;
            var1 = var2;
case 79:
            return var1;
        }
    };
    var3['maybeTransformRobloxSubgameToRoblox'] = var2;
    return var1;
})();