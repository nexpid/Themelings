// app/modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function hasRunningGameChanged(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var3 = var6.distributor;
            var1 = _closure1_slot3;
            var1 = var1.ROBLOX;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 207; continue _fun0001 }
 32:
            var5 = _closure1_slot5;
            var7 = var6.distributor;
            var2 = _closure1_slot3;
            var2 = var2.ROBLOX;
            var3 = null;
            var4 = null;
            if(!(var7 === var2)) { _fun0001_ip = 196; continue _fun0001 }
 63:
            var2 = var6.gameMetadata;
            var2 = var3 == var2;
            var4 = null;
            if(var2) { _fun0001_ip = 196; continue _fun0001 }
 78:
            var2 = var6.sku;
            var2 = var3 == var2;
            var4 = null;
            if(var2) { _fun0001_ip = 196; continue _fun0001 }
 93:
            var2 = {};
            var7 = var6.gameMetadata;
            var8 = var7.placeId;
            var9 = var3 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 119; continue _fun0001 }
 116:
            var7 = var8;
 119:
            var2['placeId'] = var7;
            var7 = var6.sku;
            var2['universeId'] = var7;
            var7 = var6.gameMetadata;
            var8 = var7.jobId;
            var9 = var3 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 159; continue _fun0001 }
 156:
            var7 = var8;
 159:
            var2['jobId'] = var7;
            var6 = var6.gameMetadata;
            var6 = var6.robloxUserId;
            var7 = var3 != var6;
            var3 = null;
            if(!var7) { _fun0001_ip = 188; continue _fun0001 }
 185:
            var3 = var6;
 188:
            var2['robloxUserId'] = var3;
            var4 = var2;
 196:
            var3 = undefined;
            var2 = arg2;
            var1 = var5.bind(var3)(var4, var2);
 207:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function hasSubgameInfoChanged(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var4 = null;
            var1 = var4 == var7;
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
 15:
            var1 = var4 != var6;
 19:
            if(var1) { _fun0002_ip = 96; continue _fun0002 }
 22:
            var2 = var4 != var7;
            if(!var2) { _fun0002_ip = 33; continue _fun0002 }
 29:
            var2 = var4 == var6;
 33:
            if(var2) { _fun0002_ip = 93; continue _fun0002 }
 36:
            var3 = var4 != var7;
            if(!var3) { _fun0002_ip = 47; continue _fun0002 }
 43:
            var3 = var4 != var6;
 47:
            if(!var3) { _fun0002_ip = 90; continue _fun0002 }
 50:
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 2;
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
    var _closure1_slot5 = var4;
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
    var6 = var6.Distributors;
    var _closure1_slot3 = var6;
    var6 = 3;
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
            var1 = _closure1_slot3;
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
            var4 = 1;
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
    var3['hasRunningGameChanged'] = var5;
    var3['hasSubgameInfoChanged'] = var4;
    var4 = function updateRunningGameWithRobloxSubgameInfo(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = {};
            var9 = var1;
            var8 = var4;
            var2 = copyDataProperties(var9, var8);
            var5 = _closure1_slot4;
            var2 = undefined;
            var5 = var5.bind(var2)(var4, var3);
            if(var5) { _fun0004_ip = 38; continue _fun0004 }
 36:
            return var4;
 38:
            var6 = null;
            if(!(var6 != var3)) { _fun0004_ip = 184; continue _fun0004 }
 47:
            var5 = var3.universeId;
            var7 = var6 != var5;
            var4 = undefined;
            if(!var7) { _fun0004_ip = 65; continue _fun0004 }
 62:
            var4 = var5;
 65:
            var1['sku'] = var4;
            var4 = {};
            var5 = var3.placeId;
            if(!(var6 != var5)) { _fun0004_ip = 95; continue _fun0004 }
 83:
            var5 = var3.placeId;
            var4['placeId'] = var5;
 95:
            var5 = var3.jobId;
            if(!(var6 != var5)) { _fun0004_ip = 117; continue _fun0004 }
 105:
            var5 = var3.jobId;
            var4['jobId'] = var5;
 117:
            var5 = var3.robloxUserId;
            if(!(var6 != var5)) { _fun0004_ip = 139; continue _fun0004 }
 127:
            var3 = var3.robloxUserId;
            var4['robloxUserId'] = var3;
 139:
            var3 = global;
            var5 = var3.Object;
            var3 = var5.keys;
            var3 = var3.bind(var5)(var4);
            var5 = var3.length;
            var3 = 0;
            var5 = var5 > var3;
            var3 = undefined;
            if(!var5) { _fun0004_ip = 176; continue _fun0004 }
 173:
            var3 = var4;
 176:
            var1['gameMetadata'] = var3;
            _fun0004_ip = 196; continue _fun0004;
 184:
            var1['gameMetadata'] = var2;
            var1['sku'] = var2;
 196:
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
            var7 = 1;
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
    var2 = function getSubgameMetadata(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var4 = var6.distributor;
            var1 = _closure1_slot3;
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
            var9 = 1;
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
    var3['getSubgameMetadata'] = var2;
    return var1;
})();