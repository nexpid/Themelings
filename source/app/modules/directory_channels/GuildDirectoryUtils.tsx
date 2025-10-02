// app/modules/directory_channels/GuildDirectoryUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var8;
    var5 = function orderByTotalMemberCount(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.orderBy;
        var3 = new Array(1);
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.approximateMemberCount;
            return var1;
        };
        var3[0] = var1;
        var2 = arg1;
        var1 = ['desc'];
        var1 = var4.bind(var5)(var2, var3, var1);
        return var1;
    };
    var _closure1_slot3 = var5;
    var4 = function orderByDateAdded(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.orderBy;
        var3 = new Array(1);
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.createdAt;
            return var1;
        };
        var3[0] = var1;
        var2 = arg1;
        var1 = ['desc'];
        var1 = var4.bind(var5)(var2, var3, var1);
        return var1;
    };
    var _closure1_slot4 = var4;
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
    var6 = var6.DirectoryEntryTypes;
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/directory_channels/GuildDirectoryUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function guildDirectoryEntryFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var3.type;
            var1 = _closure1_slot2;
            var1 = var1.GUILD;
            var4 = var4 === var1;
            var1 = 'Directory entries must be connected to a guild!';
            var1 = var5.bind(var2)(var4, var1);
            var1 = {};
            var4 = var3.directory_channel_id;
            var1['channelId'] = var4;
            var4 = var3.entity_id;
            var1['guildId'] = var4;
            var4 = var3.type;
            var1['type'] = var4;
            var4 = var3.author_id;
            var1['authorId'] = var4;
            var4 = var3.created_at;
            var1['createdAt'] = var4;
            var4 = var3.description;
            var1['description'] = var4;
            var4 = var3.primary_category_id;
            var1['primaryCategoryId'] = var4;
            var6 = var3.guild;
            var4 = null;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.name;
case 2:
            var1['name'] = var5;
            var6 = var3.guild;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6.icon;
case 4:
            var1['icon'] = var5;
            var6 = var3.guild;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.splash;
case 6:
            var1['splash'] = var5;
            var5 = global;
            var7 = var5.Set;
            var6 = var3.guild;
            var8 = var4 == var6;
            var5 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6.features;
case 8:
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var10 = var5;
            var5 = new var11[var7](var10, var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var1['features'] = var5;
            var6 = var3.guild;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var6.approximate_member_count;
case 10:
            var1['approximateMemberCount'] = var5;
            var6 = var3.guild;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var6.approximate_presence_count;
case 12:
            var1['approximatePresenceCount'] = var5;
            var3 = var3.guild;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var3.featurable_in_directory;
case 14:
            var1['featurableInDirectory'] = var2;
            return var1;
        }
    };
    var3['guildDirectoryEntryFromServer'] = var6;
    var6 = 5;
    var3['MAX_CATEGORY_SERVERS'] = var6;
    var3['orderByTotalMemberCount'] = var5;
    var3['orderByDateAdded'] = var4;
    var4 = function rankByDateAdded(arg1) {
        var4 = arg1;
        var3 = _closure1_slot4;
        var2 = var4.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.featurableInDirectory;
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.slice;
        var2 = 0;
        var1 = 5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['rankByDateAdded'] = var4;
    var2 = function rankGuildEntries(arg1) {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['rankGuildEntries'] = var2;
    return var1;
})();