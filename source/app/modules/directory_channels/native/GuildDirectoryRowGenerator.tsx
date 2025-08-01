// app/modules/directory_channels/native/GuildDirectoryRowGenerator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var5 = global;
    var9 = var5.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var9 = 0;
    var4 = var7[var9];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.DirectoryEntryCategories;
    var _closure1_slot2 = var4;
    var4 = {};
    var4['ENTRY'] = var9;
    var8 = 'ENTRY';
    var4[var9] = var8;
    var9 = 1;
    var4['HEADER'] = var9;
    var8 = 'HEADER';
    var4[var9] = var8;
    var9 = 2;
    var4['PLACEHOLDER'] = var9;
    var8 = 'PLACEHOLDER';
    var4[var9] = var8;
    var _closure1_slot3 = var4;
    var8 = var5.Array;
    var5 = 20;
    var9 = var8.bind(var1)(var5);
    var8 = var9.fill;
    var5 = {};
    var10 = var4.PLACEHOLDER;
    var5['type'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/directory_channels/native/GuildDirectoryRowGenerator.tsx';
    var5 = var6.bind(var7)(var5);
    var3['RowType'] = var4;
    var2 = function generateDirectoryRows(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var2 = arg1;
            if(!var2) { _fun0001_ip = 25; continue _fun0001 }
 11:
            var3 = var4.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 505; continue _fun0001 }
 25:
            var2 = var4.length;
            var6 = 0;
            if(!(var6 !== var2)) { _fun0001_ip = 499; continue _fun0001 }
 39:
            var3 = _closure1_slot2;
            var5 = var3.ALL;
            var3 = arg3;
            if(!(var3 === var5)) { _fun0001_ip = 447; continue _fun0001 }
 62:
            var8 = new Array(0);
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 1;
            var3 = var3[var9];
            var13 = undefined;
            var5 = var5.bind(var13)(var3);
            var3 = var5.rankByDateAdded;
            var11 = var3.bind(var5)(var4);
            var3 = global;
            var7 = var3.Set;
            var5 = var11.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.guildId;
                return var1;
            };
            var17 = var5.bind(var11)(var3);
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var18 = var5;
            var3 = new var18[var7](var17, var16);
            var3 = var3 instanceof Object ? var3 : var5;
            var _closure2_slot0 = var3;
            var3 = var11.length;
            var7 = var8;
            if(!(var3 > var6)) { _fun0001_ip = 274; continue _fun0001 }
 160:
            var5 = var8.push;
            var3 = {};
            var10 = _closure1_slot3;
            var10 = var10.HEADER;
            var3['type'] = var10;
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var10 = 2;
            var12 = var16[var10];
            var12 = var15.bind(var13)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var10 = var16[var10];
            var10 = var15.bind(var13)(var10);
            var10 = var10.t;
            var10 = var10.CbaapK;
            var10 = var12.bind(var14)(var10);
            var3['header'] = var10;
            var3 = var5.bind(var8)(var3);
            var5 = var8.concat;
            var10 = var11.map;
            var3 = function(arg1) {
                var1 = {};
                var2 = _closure1_slot3;
                var2 = var2.ENTRY;
                var1['type'] = var2;
                var2 = arg1;
                var1['entry'] = var2;
                return var1;
            };
            var3 = var10.bind(var11)(var3);
            var7 = var5.bind(var8)(var3);
 274:
            var5 = var4.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var8 = var5.bind(var4)(var3);
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var9];
            var5 = var5.bind(var13)(var3);
            var3 = var5.orderByTotalMemberCount;
            var9 = var3.bind(var5)(var8);
            var5 = var9.length;
            var3 = var7;
            if(!(var5 > var6)) { _fun0001_ip = 445; continue _fun0001 }
 331:
            var6 = var7.push;
            var5 = {};
            var8 = _closure1_slot3;
            var8 = var8.HEADER;
            var5['type'] = var8;
            var12 = _closure1_slot0;
            var14 = _closure1_slot1;
            var8 = 2;
            var10 = var14[var8];
            var10 = var12.bind(var13)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var14[var8];
            var8 = var12.bind(var13)(var8);
            var8 = var8.t;
            var8 = var8.wxbhER;
            var8 = var10.bind(var11)(var8);
            var5['header'] = var8;
            var5 = var6.bind(var7)(var5);
            var6 = var7.concat;
            var8 = var9.map;
            var5 = function(arg1) {
                var1 = {};
                var2 = _closure1_slot3;
                var2 = var2.ENTRY;
                var1['type'] = var2;
                var2 = arg1;
                var1['entry'] = var2;
                return var1;
            };
            var5 = var8.bind(var9)(var5);
            var3 = var6.bind(var7)(var5);
 445:
            return var3;
 447:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.rankGuildEntries;
            var3 = var2.bind(var3)(var4);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = {};
                var2 = _closure1_slot3;
                var2 = var2.ENTRY;
                var1['type'] = var2;
                var2 = arg1;
                var1['entry'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
 499:
            var1 = new Array(0);
            return var1;
 505:
            var1 = _closure1_slot4;
            return var1;
        }
    };
    var3['generateDirectoryRows'] = var2;
    return var1;
})();