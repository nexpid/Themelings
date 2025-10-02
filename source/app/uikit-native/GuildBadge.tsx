// app/uikit-native/GuildBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function GuildBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var7 = var6.guild;
            var4 = var6.monocolored;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = false;
case 2:
            var8 = var6.size;
            if(!(var8 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot9;
            var1 = var1.Sizes;
            var8 = var1.MEDIUM;
case 4:
            var3 = {'guild': 0, 'monocolored': 0, 'size': 0};
            var1 = null;
            var12 = var3;
            var11 = null;
            var2 = silentSetPrototypeOf(var12, var11);
            var12 = {};
            var11 = var6;
            var10 = var3;
            var6 = copyDataProperties(var12, var11, var10);
            var3 = _closure1_slot8;
            var7 = var3.bind(var5)(var7, var4);
            var3 = var1 == var7;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'size';
            var2[var6] = var8;
            var6 = 'source';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var12 = 0;
    var9 = var7[var12];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var9);
    var11 = 1;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var2 = var2.GuildFeatures;
    var _closure1_slot3 = var2;
    var10 = 2;
    var2 = var7[var10];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var9 = {};
    var9['PARTNERED'] = var12;
    var2 = 'PARTNERED';
    var9[var12] = var2;
    var9['VERIFIED'] = var11;
    var2 = 'VERIFIED';
    var9[var11] = var2;
    var9['PARTNERED_BLACK'] = var10;
    var2 = 'PARTNERED_BLACK';
    var9[var10] = var2;
    var11 = 3;
    var9['VERIFIED_BLACK'] = var11;
    var2 = 'VERIFIED_BLACK';
    var9[var11] = var2;
    var10 = 4;
    var9['NONE'] = var10;
    var2 = 'NONE';
    var9[var10] = var2;
    var _closure1_slot5 = var9;
    var2 = {};
    var12 = var9.VERIFIED;
    var11 = var7[var11];
    var11 = var8.bind(var1)(var11);
    var2[var12] = var11;
    var11 = var9.PARTNERED;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var2[var11] = var10;
    var11 = var9.VERIFIED_BLACK;
    var10 = 5;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var2[var11] = var10;
    var11 = var9.PARTNERED_BLACK;
    var10 = 6;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var2[var11] = var10;
    var10 = var9.NONE;
    var9 = null;
    var2[var10] = var9;
    var _closure1_slot6 = var2;
    var2 = function checkGuildForFeature(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 7;
            var4 = var6[var4];
            var6 = undefined;
            var7 = var7.bind(var6)(var4);
            var4 = var7.isGuildRecord;
            var4 = var4.bind(var7)(var3);
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = global;
            var9 = var4.Array;
            var8 = var9.isArray;
            var7 = var3.features;
            var7 = var8.bind(var9)(var7);
            if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = var4.Boolean;
            var8 = var3.features;
            var7 = var2 == var8;
            var2 = undefined;
            if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = var8.has;
            var2 = var7.bind(var8)(var5);
case 14:
            var2 = var4.bind(var6)(var2);
            _fun0002_ip = 16; continue _fun0002;
case 12:
            var6 = var3.features;
            var4 = var6.includes;
            var2 = var4.bind(var6)(var5);
case 16:
            _fun0002_ip = 17; continue _fun0002;
case 10:
            var4 = var3.features;
            var3 = var4.has;
            var2 = var3.bind(var4)(var5);
case 17:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var2 = function getGuildBadgeSource(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var3 = arg2;
            var2 = _closure1_slot5;
            var2 = var2.NONE;
            var5 = _closure1_slot7;
            var4 = _closure1_slot3;
            var4 = var4.VERIFIED;
            var6 = undefined;
            var4 = var5.bind(var6)(var7, var4);
            if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = _closure1_slot7;
            var4 = _closure1_slot3;
            var4 = var4.PARTNERED;
            var4 = var5.bind(var6)(var7, var4);
            if(!var4) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = _closure1_slot5;
            if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var4 = var5.PARTNERED;
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var4 = var5.PARTNERED_BLACK;
case 24:
            var2 = var4;
            _fun0003_ip = 20; continue _fun0003;
case 18:
            var4 = _closure1_slot5;
            if(var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var3 = var4.VERIFIED;
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var3 = var4.VERIFIED_BLACK;
case 27:
            var2 = var3;
case 20:
            var1 = _closure1_slot6;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Sizes;
    var4['Sizes'] = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/GuildBadge.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getGuildBadgeSource'] = var2;
    return var1;
})();