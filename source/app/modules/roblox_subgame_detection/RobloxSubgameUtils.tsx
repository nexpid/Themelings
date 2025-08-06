// app/modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function hasSubgameInfoChanged(arg1, arg2) {
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
            var4 = 3;
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
    var _closure1_slot7 = var5;
    var2 = function isRobloxSubgame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = var3.distributor;
            var1 = _closure1_slot6;
            var1 = var1.ROBLOX;
            var1 = var4 === var1;
            if(!var1) { _fun0002_ip = 66; continue _fun0002 }
 29:
            var3 = var3.id;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ROBLOX_APPLICATION_ID;
            var1 = var3 !== var2;
 66:
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.isDetectionEnabled;
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ActivityTypes;
    var _closure1_slot4 = var9;
    var9 = var6.DistributorNames;
    var _closure1_slot5 = var9;
    var6 = var6.Distributors;
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/roblox_subgame_detection/RobloxSubgameUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function keyForRobloxGame(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var6 = var2.distributor;
            var1 = _closure1_slot6;
            var5 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var6 === var5)) { _fun0003_ip = 145; continue _fun0003 }
 30:
            var5 = var2.sku;
            var5 = var3 != var5;
            var1 = null;
            if(!var5) { _fun0003_ip = 145; continue _fun0003 }
 45:
            var6 = var2.sku;
            var5 = var2.gameMetadata;
            var7 = var3 == var5;
            var8 = undefined;
            var2 = undefined;
            if(var7) { _fun0003_ip = 104; continue _fun0003 }
 68:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 2;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.RobloxMetadataKeys;
            var4 = var4.PLACE_ID;
            var2 = var5[var4];
 104:
            var3 = var3 != var2;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0003_ip = 121; continue _fun0003 }
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
    var3['keyForRobloxGame'] = var6;
    var6 = function hasRunningGameChanged(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var3 = arg3;
            var2 = var8.distributor;
            var1 = _closure1_slot6;
            var1 = var1.ROBLOX;
            var1 = var2 === var1;
            if(!var1) { _fun0004_ip = 332; continue _fun0004 }
 35:
            var4 = null;
            var2 = var4 != var3;
            if(!var2) { _fun0004_ip = 58; continue _fun0004 }
 44:
            var5 = var8.id;
            var3 = var3.id;
            var2 = var5 !== var3;
 58:
            if(var2) { _fun0004_ip = 329; continue _fun0004 }
 64:
            var6 = _closure1_slot7;
            var9 = var8.distributor;
            var3 = _closure1_slot6;
            var3 = var3.ROBLOX;
            var5 = null;
            if(!(var9 === var3)) { _fun0004_ip = 318; continue _fun0004 }
 93:
            var3 = var8.gameMetadata;
            var3 = var4 == var3;
            var5 = null;
            if(var3) { _fun0004_ip = 318; continue _fun0004 }
 111:
            var3 = var8.sku;
            var3 = var4 == var3;
            var5 = null;
            if(var3) { _fun0004_ip = 318; continue _fun0004 }
 129:
            var3 = {};
            var12 = var8.gameMetadata;
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = 2;
            var9 = var9[var11];
            var10 = undefined;
            var9 = var13.bind(var10)(var9);
            var9 = var9.RobloxMetadataKeys;
            var9 = var9.PLACE_ID;
            var12 = var12[var9];
            var13 = var4 != var12;
            var9 = null;
            if(!var13) { _fun0004_ip = 187; continue _fun0004 }
 184:
            var9 = var12;
 187:
            var3['placeId'] = var9;
            var9 = var8.sku;
            var3['universeId'] = var9;
            var12 = var8.gameMetadata;
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var11];
            var9 = var13.bind(var10)(var9);
            var9 = var9.RobloxMetadataKeys;
            var9 = var9.JOB_ID;
            var12 = var12[var9];
            var13 = var4 != var12;
            var9 = null;
            if(!var13) { _fun0004_ip = 254; continue _fun0004 }
 251:
            var9 = var12;
 254:
            var3['jobId'] = var9;
            var8 = var8.gameMetadata;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var9.bind(var10)(var7);
            var7 = var7.RobloxMetadataKeys;
            var7 = var7.ROBLOX_USER_ID;
            var7 = var8[var7];
            var8 = var4 != var7;
            var4 = null;
            if(!var8) { _fun0004_ip = 310; continue _fun0004 }
 307:
            var4 = var7;
 310:
            var3['robloxUserId'] = var4;
            var5 = var3;
 318:
            var4 = undefined;
            var3 = arg2;
            var2 = var6.bind(var4)(var5, var3);
 329:
            var1 = var2;
 332:
            return var1;
        }
    };
    var3['hasRunningGameChanged'] = var6;
    var3['hasSubgameInfoChanged'] = var5;
    var5 = function updateRunningGameWithRobloxSubgameInfo(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var2 = arg2;
            var1 = {};
            var15 = var1;
            var14 = var7;
            var3 = copyDataProperties(var15, var14);
            var4 = var2.subgameInfo;
            var8 = var2.application;
            var2 = global;
            var6 = var2.Number;
            var10 = var7.gameMetadata;
            var11 = null;
            var9 = var11 == var10;
            var3 = undefined;
            var5 = undefined;
            if(var9) { _fun0005_ip = 97; continue _fun0005 }
 58:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 2;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.RobloxMetadataKeys;
            var9 = var9.ROBLOX_TIME_STARTED;
            var5 = var10[var9];
 97:
            var5 = var6.bind(var3)(var5);
            var6 = var2.isNaN;
            var6 = var6.bind(var3)(var5);
            if(var6) { _fun0005_ip = 122; continue _fun0005 }
 116:
            var9 = 0;
            var6 = var9 === var5;
 122:
            if(!var6) { _fun0005_ip = 152; continue _fun0005 }
 125:
            var6 = var7.start;
            if(!(var11 == var6)) { _fun0005_ip = 149; continue _fun0005 }
 134:
            var10 = var2.Date;
            var9 = var10.now;
            var6 = var9.bind(var10)();
 149:
            var5 = var6;
 152:
            if(!(var11 != var4)) { _fun0005_ip = 680; continue _fun0005 }
 159:
            var6 = {};
            if(!(var11 != var8)) { _fun0005_ip = 249; continue _fun0005 }
 165:
            var10 = _closure1_slot3;
            var9 = {};
            var13 = var7.exePath;
            var9['exePath'] = var13;
            var13 = var8.id;
            var9['name'] = var13;
            var9 = var10.bind(var3)(var9);
            if(!var9) { _fun0005_ip = 249; continue _fun0005 }
 202:
            var10 = _closure1_slot3;
            var9 = {};
            var13 = var7.exePath;
            var9['exePath'] = var13;
            var13 = _closure1_slot5;
            var12 = _closure1_slot6;
            var12 = var12.ROBLOX;
            var12 = var13[var12];
            var9['name'] = var12;
            var9 = var10.bind(var3)(var9);
            if(var9) { _fun0005_ip = 316; continue _fun0005 }
 249:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 2;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var10 = var10.ROBLOX_APPLICATION_ID;
            var1['id'] = var10;
            var10 = _closure1_slot5;
            var9 = _closure1_slot6;
            var9 = var9.ROBLOX;
            var9 = var10[var9];
            var1['name'] = var9;
            var1['start'] = var5;
            _fun0005_ip = 418; continue _fun0005;
 316:
            var9 = var8.id;
            var1['id'] = var9;
            var9 = var8.id;
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
 418:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 2;
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
            if(!var13) { _fun0005_ip = 484; continue _fun0005 }
 481:
            var9 = var12;
 484:
            var1['sku'] = var9;
            var9 = var4.placeId;
            if(!(var11 != var9)) { _fun0005_ip = 539; continue _fun0005 }
 500:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var10];
            var9 = var12.bind(var3)(var9);
            var9 = var9.RobloxMetadataKeys;
            var12 = var9.PLACE_ID;
            var9 = var4.placeId;
            var6[var12] = var9;
 539:
            var9 = var4.jobId;
            if(!(var11 != var9)) { _fun0005_ip = 588; continue _fun0005 }
 549:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var10];
            var9 = var12.bind(var3)(var9);
            var9 = var9.RobloxMetadataKeys;
            var12 = var9.JOB_ID;
            var9 = var4.jobId;
            var6[var12] = var9;
 588:
            var9 = var4.robloxUserId;
            if(!(var11 != var9)) { _fun0005_ip = 637; continue _fun0005 }
 598:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var3)(var8);
            var8 = var8.RobloxMetadataKeys;
            var8 = var8.ROBLOX_USER_ID;
            var4 = var4.robloxUserId;
            var6[var8] = var4;
 637:
            var8 = var2.Object;
            var4 = var8.keys;
            var4 = var4.bind(var8)(var6);
            var8 = var4.length;
            var4 = 0;
            var8 = var8 > var4;
            var4 = undefined;
            if(!var8) { _fun0005_ip = 672; continue _fun0005 }
 669:
            var4 = var6;
 672:
            var1['gameMetadata'] = var4;
            _fun0005_ip = 802; continue _fun0005;
 680:
            var6 = _closure1_slot8;
            var6 = var6.bind(var3)(var7);
            if(!var6) { _fun0005_ip = 751; continue _fun0005 }
 695:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.ROBLOX_APPLICATION_ID;
            var1['id'] = var6;
            var6 = _closure1_slot5;
            var4 = _closure1_slot6;
            var4 = var4.ROBLOX;
            var4 = var6[var4];
            var1['name'] = var4;
 751:
            var1['gameMetadata'] = var3;
            var1['sku'] = var3;
            var1['start'] = var5;
            var4 = var2.Math;
            var3 = var4.floor;
            var2 = 1000;
            var2 = var5 / var2;
            var2 = var3.bind(var4)(var2);
            var1['lastFocused'] = var2;
 802:
            return var1;
        }
    };
    var3['updateRunningGameWithRobloxSubgameInfo'] = var5;
    var5 = function convertMapToRobloxSubgameInfo(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 2;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var1 = var1.NativeRobloxSubgameKeys;
            var1 = var1.UNIVERSE_ID;
            var1 = var4[var1];
            var5 = null;
            var2 = var5 == var1;
            var1 = null;
            if(var2) { _fun0006_ip = 326; continue _fun0006 }
 58:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var8.bind(var6)(var2);
            var2 = var2.NativeRobloxSubgameKeys;
            var2 = var2.PLACE_ID;
            var2 = var4[var2];
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0006_ip = 326; continue _fun0006 }
 103:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var8.bind(var6)(var2);
            var2 = var2.NativeRobloxSubgameKeys;
            var2 = var2.JOB_ID;
            var2 = var4[var2];
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0006_ip = 326; continue _fun0006 }
 148:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var8.bind(var6)(var2);
            var2 = var2.NativeRobloxSubgameKeys;
            var2 = var2.USER_ID;
            var2 = var4[var2];
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0006_ip = 326; continue _fun0006 }
 193:
            var2 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = var3[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.NativeRobloxSubgameKeys;
            var8 = var8.UNIVERSE_ID;
            var8 = var4[var8];
            var2['universeId'] = var8;
            var8 = var3[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.NativeRobloxSubgameKeys;
            var8 = var8.PLACE_ID;
            var8 = var4[var8];
            var2['placeId'] = var8;
            var8 = var3[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.NativeRobloxSubgameKeys;
            var8 = var8.JOB_ID;
            var8 = var4[var8];
            var2['jobId'] = var8;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.NativeRobloxSubgameKeys;
            var3 = var3.USER_ID;
            var3 = var4[var3];
            var2['robloxUserId'] = var3;
            var1 = var2;
 326:
            return var1;
        }
    };
    var3['convertMapToRobloxSubgameInfo'] = var5;
    var5 = function getSubgameMetadata(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var6 = arg1;
            var4 = var6.distributor;
            var1 = _closure1_slot6;
            var2 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var4 === var2)) { _fun0007_ip = 166; continue _fun0007 }
 33:
            var2 = var6.gameMetadata;
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0007_ip = 166; continue _fun0007 }
 48:
            var4 = var6.gameMetadata;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 2;
            var2 = var2[var9];
            var8 = undefined;
            var2 = var7.bind(var8)(var2);
            var2 = var2.RobloxMetadataKeys;
            var2 = var2.PLACE_ID;
            var2 = var4[var2];
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0007_ip = 166; continue _fun0007 }
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
    var3['getSubgameMetadata'] = var5;
    var5 = function maybeAddAdditionalGameMetadata(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var4 = var3.distributor;
            var1 = _closure1_slot6;
            var1 = var1.ROBLOX;
            if(!(var4 === var1)) { _fun0008_ip = 257; continue _fun0008 }
 29:
            var1 = var3.gameMetadata;
            var4 = null;
            if(!(var4 != var1)) { _fun0008_ip = 257; continue _fun0008 }
 44:
            var7 = var3.gameMetadata;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 2;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var8.bind(var5)(var1);
            var1 = var1.RobloxMetadataKeys;
            var1 = var1.ROBLOX_TIME_STARTED;
            var1 = var7[var1];
            if(!(var4 != var1)) { _fun0008_ip = 257; continue _fun0008 }
 95:
            var7 = var3.id;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var8.bind(var5)(var1);
            var1 = var1.ROBLOX_APPLICATION_ID;
            if(!(var7 !== var1)) { _fun0008_ip = 257; continue _fun0008 }
 130:
            var1 = var3.gameName;
            if(!(var4 != var1)) { _fun0008_ip = 257; continue _fun0008 }
 140:
            var1 = {};
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 4;
            var8 = var2[var7];
            var8 = var4.bind(var5)(var8);
            var10 = var8.intl;
            var9 = var10.formatToPlainString;
            var7 = var2[var7];
            var7 = var4.bind(var5)(var7);
            var7 = var7.t;
            var8 = var7.G6BGd3;
            var7 = {};
            var11 = var3.gameName;
            var7['subgameName'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var1['name'] = var7;
            var3 = var3.gameMetadata;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.RobloxMetadataKeys;
            var2 = var2.ROBLOX_TIME_STARTED;
            var2 = var3[var2];
            var1['sync_id'] = var2;
            _fun0008_ip = 259; continue _fun0008;
 257:
            var1 = {};
 259:
            return var1;
        }
    };
    var3['maybeAddAdditionalGameMetadata'] = var5;
    var4 = function maybeTransformRobloxSubgameIntoRobloxActivity(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot4;
            var2 = var2.PLAYING;
            if(!(var3 === var2)) { _fun0009_ip = 220; continue _fun0009 }
 28:
            var2 = var1.metadata;
            var3 = null;
            var4 = var3 == var2;
            var5 = undefined;
            var3 = undefined;
            if(var4) { _fun0009_ip = 53; continue _fun0009 }
 47:
            var3 = var2.distributor;
 53:
            var2 = _closure1_slot6;
            var2 = var2.ROBLOX;
            if(!(var3 === var2)) { _fun0009_ip = 218; continue _fun0009 }
 70:
            var3 = var1.application_id;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 2;
            var2 = var2[var9];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ROBLOX_APPLICATION_ID;
            if(!(var3 !== var2)) { _fun0009_ip = 218; continue _fun0009 }
 106:
            var3 = global;
            var4 = var3.Number;
            var2 = var1.sync_id;
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var11 = var2;
            var10 = var1;
            var7 = copyDataProperties(var11, var10);
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var5)(var7);
            var7 = var7.ROBLOX_APPLICATION_ID;
            var2['application_id'] = var7;
            var7 = _closure1_slot5;
            var6 = _closure1_slot6;
            var6 = var6.ROBLOX;
            var6 = var7[var6];
            var2['name'] = var6;
            var3 = var3.isNaN;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0009_ip = 216; continue _fun0009 }
 204:
            var3 = {};
            var3['start'] = var4;
            var2['timestamps'] = var3;
 216:
            return var2;
 218:
            return var1;
 220:
            return var1;
        }
    };
    var3['maybeTransformRobloxSubgameIntoRobloxActivity'] = var4;
    var3['isRobloxSubgame'] = var2;
    return var1;
})();