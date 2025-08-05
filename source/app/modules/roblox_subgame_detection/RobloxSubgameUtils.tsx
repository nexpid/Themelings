// app/modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function hasSubgameInfoChanged(arg1, arg2) {
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
    var _closure1_slot7 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.isDetectionEnabled;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ActivityTypes;
    var _closure1_slot4 = var8;
    var8 = var5.DistributorNames;
    var _closure1_slot5 = var8;
    var5 = var5.Distributors;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/roblox_subgame_detection/RobloxSubgameUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function keyForRobloxGame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var6 = var2.distributor;
            var1 = _closure1_slot6;
            var5 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var6 === var5)) { _fun0002_ip = 145; continue _fun0002 }
 30:
            var5 = var2.sku;
            var5 = var3 != var5;
            var1 = null;
            if(!var5) { _fun0002_ip = 145; continue _fun0002 }
 45:
            var6 = var2.sku;
            var5 = var2.gameMetadata;
            var7 = var3 == var5;
            var8 = undefined;
            var2 = undefined;
            if(var7) { _fun0002_ip = 104; continue _fun0002 }
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
            if(!var3) { _fun0002_ip = 121; continue _fun0002 }
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
    var3['keyForRobloxGame'] = var5;
    var5 = function hasRunningGameChanged(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var8 = arg1;
            var3 = arg3;
            var2 = var8.distributor;
            var1 = _closure1_slot6;
            var1 = var1.ROBLOX;
            var1 = var2 === var1;
            if(!var1) { _fun0003_ip = 332; continue _fun0003 }
 35:
            var4 = null;
            var2 = var4 != var3;
            if(!var2) { _fun0003_ip = 58; continue _fun0003 }
 44:
            var5 = var8.id;
            var3 = var3.id;
            var2 = var5 !== var3;
 58:
            if(var2) { _fun0003_ip = 329; continue _fun0003 }
 64:
            var6 = _closure1_slot7;
            var9 = var8.distributor;
            var3 = _closure1_slot6;
            var3 = var3.ROBLOX;
            var5 = null;
            if(!(var9 === var3)) { _fun0003_ip = 318; continue _fun0003 }
 93:
            var3 = var8.gameMetadata;
            var3 = var4 == var3;
            var5 = null;
            if(var3) { _fun0003_ip = 318; continue _fun0003 }
 111:
            var3 = var8.sku;
            var3 = var4 == var3;
            var5 = null;
            if(var3) { _fun0003_ip = 318; continue _fun0003 }
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
            if(!var13) { _fun0003_ip = 187; continue _fun0003 }
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
            if(!var13) { _fun0003_ip = 254; continue _fun0003 }
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
            if(!var8) { _fun0003_ip = 310; continue _fun0003 }
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
    var3['hasRunningGameChanged'] = var5;
    var3['hasSubgameInfoChanged'] = var4;
    var4 = function updateRunningGameWithRobloxSubgameInfo(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var13 = arg1;
            var2 = arg2;
            var1 = {};
            var17 = var1;
            var16 = var13;
            var3 = copyDataProperties(var17, var16);
            var6 = var2.subgameInfo;
            var8 = var2.application;
            var4 = global;
            var5 = var4.Number;
            var9 = var13.gameMetadata;
            var10 = null;
            var7 = var10 == var9;
            var3 = undefined;
            var2 = undefined;
            if(var7) { _fun0004_ip = 97; continue _fun0004 }
 58:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 2;
            var7 = var12[var7];
            var7 = var11.bind(var3)(var7);
            var7 = var7.RobloxMetadataKeys;
            var7 = var7.ROBLOX_TIME_STARTED;
            var2 = var9[var7];
 97:
            var2 = var5.bind(var3)(var2);
            var5 = var4.isNaN;
            var5 = var5.bind(var3)(var2);
            if(var5) { _fun0004_ip = 122; continue _fun0004 }
 116:
            var7 = 0;
            var5 = var7 === var2;
 122:
            if(!var5) { _fun0004_ip = 152; continue _fun0004 }
 125:
            var5 = var13.start;
            if(!(var10 == var5)) { _fun0004_ip = 149; continue _fun0004 }
 134:
            var9 = var4.Date;
            var7 = var9.now;
            var5 = var7.bind(var9)();
 149:
            var2 = var5;
 152:
            if(!(var10 != var6)) { _fun0004_ip = 699; continue _fun0004 }
 159:
            var5 = {};
            var9 = var10 != var8;
            var7 = null;
            if(!var9) { _fun0004_ip = 245; continue _fun0004 }
 170:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 4;
            var12 = var15[var9];
            var12 = var11.bind(var3)(var12);
            var14 = var12.intl;
            var12 = var14.formatToPlainString;
            var9 = var15[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.t;
            var11 = var9.G6BGd3;
            var9 = {};
            var15 = var8.name;
            var9['subgameName'] = var15;
            var7 = var12.bind(var14)(var11, var9);
 245:
            if(!(var10 != var8)) { _fun0004_ip = 332; continue _fun0004 }
 249:
            if(!(var10 != var7)) { _fun0004_ip = 332; continue _fun0004 }
 253:
            var11 = _closure1_slot3;
            var9 = {};
            var14 = var13.exePath;
            var9['exePath'] = var14;
            var9['name'] = var7;
            var9 = var11.bind(var3)(var9);
            if(!var9) { _fun0004_ip = 332; continue _fun0004 }
 285:
            var11 = _closure1_slot3;
            var9 = {};
            var13 = var13.exePath;
            var9['exePath'] = var13;
            var13 = _closure1_slot5;
            var12 = _closure1_slot6;
            var12 = var12.ROBLOX;
            var12 = var13[var12];
            var9['name'] = var12;
            var9 = var11.bind(var3)(var9);
            if(var9) { _fun0004_ip = 399; continue _fun0004 }
 332:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 2;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.ROBLOX_APPLICATION_ID;
            var1['id'] = var11;
            var11 = _closure1_slot5;
            var9 = _closure1_slot6;
            var9 = var9.ROBLOX;
            var9 = var11[var9];
            var1['name'] = var9;
            var1['start'] = var2;
            _fun0004_ip = 437; continue _fun0004;
 399:
            var8 = var8.id;
            var1['id'] = var8;
            var1['name'] = var7;
            var8 = var4.Date;
            var7 = var8.now;
            var7 = var7.bind(var8)();
            var1['start'] = var7;
 437:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 2;
            var8 = var8[var9];
            var8 = var11.bind(var3)(var8);
            var8 = var8.RobloxMetadataKeys;
            var11 = var8.ROBLOX_TIME_STARTED;
            var8 = var2.toString;
            var8 = var8.bind(var2)();
            var5[var11] = var8;
            var11 = var6.universeId;
            var12 = var10 != var11;
            var8 = undefined;
            if(!var12) { _fun0004_ip = 503; continue _fun0004 }
 500:
            var8 = var11;
 503:
            var1['sku'] = var8;
            var8 = var6.placeId;
            if(!(var10 != var8)) { _fun0004_ip = 558; continue _fun0004 }
 519:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var9];
            var8 = var11.bind(var3)(var8);
            var8 = var8.RobloxMetadataKeys;
            var11 = var8.PLACE_ID;
            var8 = var6.placeId;
            var5[var11] = var8;
 558:
            var8 = var6.jobId;
            if(!(var10 != var8)) { _fun0004_ip = 607; continue _fun0004 }
 568:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var9];
            var8 = var11.bind(var3)(var8);
            var8 = var8.RobloxMetadataKeys;
            var11 = var8.JOB_ID;
            var8 = var6.jobId;
            var5[var11] = var8;
 607:
            var8 = var6.robloxUserId;
            if(!(var10 != var8)) { _fun0004_ip = 656; continue _fun0004 }
 617:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var3)(var7);
            var7 = var7.RobloxMetadataKeys;
            var7 = var7.ROBLOX_USER_ID;
            var6 = var6.robloxUserId;
            var5[var7] = var6;
 656:
            var6 = var4.Object;
            var4 = var6.keys;
            var4 = var4.bind(var6)(var5);
            var6 = var4.length;
            var4 = 0;
            var6 = var6 > var4;
            var4 = undefined;
            if(!var6) { _fun0004_ip = 691; continue _fun0004 }
 688:
            var4 = var5;
 691:
            var1['gameMetadata'] = var4;
            _fun0004_ip = 808; continue _fun0004;
 699:
            var6 = var1.id;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 2;
            var5 = var5[var7];
            var5 = var8.bind(var3)(var5);
            var5 = var5.ROBLOX_APPLICATION_ID;
            if(!(var6 !== var5)) { _fun0004_ip = 790; continue _fun0004 }
 737:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var3)(var5);
            var5 = var5.ROBLOX_APPLICATION_ID;
            var1['id'] = var5;
            var5 = _closure1_slot5;
            var4 = _closure1_slot6;
            var4 = var4.ROBLOX;
            var4 = var5[var4];
            var1['name'] = var4;
 790:
            var1['gameMetadata'] = var3;
            var1['sku'] = var3;
            var1['start'] = var2;
 808:
            return var1;
        }
    };
    var3['updateRunningGameWithRobloxSubgameInfo'] = var4;
    var4 = function convertMapToRobloxSubgameInfo(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            if(var2) { _fun0005_ip = 326; continue _fun0005 }
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
            if(var2) { _fun0005_ip = 326; continue _fun0005 }
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
            if(var2) { _fun0005_ip = 326; continue _fun0005 }
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
            if(var2) { _fun0005_ip = 326; continue _fun0005 }
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
    var3['convertMapToRobloxSubgameInfo'] = var4;
    var4 = function getSubgameMetadata(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var4 = var6.distributor;
            var1 = _closure1_slot6;
            var2 = var1.ROBLOX;
            var3 = null;
            var1 = null;
            if(!(var4 === var2)) { _fun0006_ip = 166; continue _fun0006 }
 33:
            var2 = var6.gameMetadata;
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0006_ip = 166; continue _fun0006 }
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
            if(!var2) { _fun0006_ip = 166; continue _fun0006 }
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
    var3['getSubgameMetadata'] = var4;
    var4 = function maybeAddAdditionalGameMetadata(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var4 = var3.distributor;
            var1 = _closure1_slot6;
            var1 = var1.ROBLOX;
            if(!(var4 === var1)) { _fun0007_ip = 172; continue _fun0007 }
 29:
            var1 = var3.gameMetadata;
            var4 = null;
            if(!(var4 != var1)) { _fun0007_ip = 172; continue _fun0007 }
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
            if(!(var4 != var1)) { _fun0007_ip = 172; continue _fun0007 }
 92:
            var4 = var3.id;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var7.bind(var5)(var1);
            var1 = var1.ROBLOX_APPLICATION_ID;
            if(!(var4 !== var1)) { _fun0007_ip = 172; continue _fun0007 }
 124:
            var1 = {};
            var3 = var3.gameMetadata;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.RobloxMetadataKeys;
            var2 = var2.ROBLOX_TIME_STARTED;
            var2 = var3[var2];
            var1['sync_id'] = var2;
            _fun0007_ip = 174; continue _fun0007;
 172:
            var1 = {};
 174:
            return var1;
        }
    };
    var3['maybeAddAdditionalGameMetadata'] = var4;
    var2 = function maybeTransformRobloxSubgameIntoRobloxActivity(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot4;
            var2 = var2.PLAYING;
            if(!(var3 === var2)) { _fun0008_ip = 220; continue _fun0008 }
 28:
            var2 = var1.metadata;
            var3 = null;
            var4 = var3 == var2;
            var5 = undefined;
            var3 = undefined;
            if(var4) { _fun0008_ip = 53; continue _fun0008 }
 47:
            var3 = var2.distributor;
 53:
            var2 = _closure1_slot6;
            var2 = var2.ROBLOX;
            if(!(var3 === var2)) { _fun0008_ip = 218; continue _fun0008 }
 70:
            var3 = var1.application_id;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 2;
            var2 = var2[var9];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ROBLOX_APPLICATION_ID;
            if(!(var3 !== var2)) { _fun0008_ip = 218; continue _fun0008 }
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
            if(var3) { _fun0008_ip = 216; continue _fun0008 }
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
    var3['maybeTransformRobloxSubgameIntoRobloxActivity'] = var2;
    return var1;
})();