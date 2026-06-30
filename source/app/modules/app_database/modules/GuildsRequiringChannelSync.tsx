// app/modules/app_database/modules/GuildsRequiringChannelSync.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
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
                    _fun0002_ip = 30; continue _fun0002;
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
    var _closure1_slot21 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.createChannelRecordFromServer;
    var _closure1_slot6 = var8;
    var4 = var4.ChannelRecordBase;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot14 = var8;
    var4 = var4.BasicPermissions;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var8 = 12;
    var8 = var6[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.combine;
    var8 = var4.VIEW_CHANNEL;
    var4 = var4.ADMINISTRATOR;
    var4 = var9.bind(var10)(var8, var4);
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var13 = 'GuildsRequiringChannelSync';
    var14 = var7;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'new_guild';
    var4['NewGuild'] = var7;
    var7 = 'ownership_change';
    var4['OwnershipChange'] = var7;
    var7 = 'role_permissions';
    var4['RolePermissions'] = var7;
    var7 = 'role_subscription_tags';
    var4['RoleSubscriptionTags'] = var7;
    var7 = 'member_roles';
    var4['MemberRoles'] = var7;
    var7 = 'channel_visible_parent_hidden';
    var4['ChannelVisibleParentHidden'] = var7;
    var7 = 'unknown';
    var4['Unknown'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'connection_open';
    var4['ConnectionOpen'] = var7;
    var7 = 'guild_create';
    var4['GuildCreate'] = var7;
    var7 = 'background_sync';
    var4['BackgroundSync'] = var7;
    var _closure1_slot20 = var4;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function GuildsRequiringChannelSync() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var5 = function BACKGROUND_SYNC(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleBackgroundSync;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['BACKGROUND_SYNC'] = var5;
            var5 = function CONNECTION_OPEN(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleConnectionOpen;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CONNECTION_OPEN'] = var5;
            var5 = function GUILD_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildCreate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_CREATE'] = var5;
            var5 = function CHANNEL_SYNC(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelSync;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_SYNC'] = var5;
            var4 = function UNMARK_RESYNC_GUILDS(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleUnmarkResyncGuilds;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['UNMARK_RESYNC_GUILDS'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getAll';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.guildsRequiringChannelSync;
                var2 = var1.bind(var2)();
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var1 = var2.getMany;
                var1 = var1.bind(var2)();
                _fun0004_ip = 38; continue _fun0004;
case 36:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = new Array(0);
                var1 = var3.bind(var4)(var2);
case 38:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(20);
        var2[0] = var1;
        var1 = {};
        var6 = 'handleConnectionOpen';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var7 = arg2;
                var6 = this;
                var1 = arg1;
                var3 = var1.guilds;
                var2 = _closure1_slot21;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 37:
                var9 = var3.value;
                var8 = var6.handleGuild;
                var2 = _closure1_slot20;
                var2 = var2.ConnectionOpen;
                var2 = var8.bind(var6)(var9, var7, var2);
                var8 = var4.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0005_ip = 37; continue _fun0005 }
case 39:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleGuildCreate';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = this;
                var1 = arg1;
                var4 = var1.guild;
                var2 = var4.unavailable;
                var1 = true;
                if(!(var1 !== var2)) { _fun0006_ip = 40; continue _fun0006 }
case 31:
                var3 = var5.handleGuild;
                var1 = _closure1_slot20;
                var2 = var1.GuildCreate;
                var1 = arg2;
                var1 = var3.bind(var5)(var4, var1, var2);
case 40:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'handleBackgroundSync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arg2;
                var5 = this;
                var1 = arg1;
                var3 = var1.guilds;
                var2 = _closure1_slot21;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0007_ip = 38; continue _fun0007 }
case 37:
                var7 = var3.value;
                var2 = var5.handleBackgroundSyncGuild;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'handleUnmarkResyncGuilds';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var8 = arg2;
                var6 = this;
                var1 = arg1;
                var7 = var1.guildIds;
                var3 = _closure1_slot21;
                var1 = undefined;
                var5 = var3.bind(var1)(var7);
                var4 = var5.bind(var1)();
                var3 = var4.done;
                if(var3) { _fun0008_ip = 41; continue _fun0008 }
case 37:
                var9 = var4.value;
                var3 = var6.unmarkGuildForResync;
                var3 = var3.bind(var6)(var9, var8);
                var9 = var5.bind(var1)();
                var3 = var9.done;
                var4 = var9;
                if(!var3) { _fun0008_ip = 37; continue _fun0008 }
case 41:
                var4 = _closure1_slot18;
                var3 = var4.verbose;
                var2 = global;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var6 = var5.bind(var6)(var7);
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'Unmarked guilds ';
                var2 = var5.bind(var2)(var6);
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'detectRoleVisibilityChanges';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var15 = arg1;
                var14 = arg2;
                var13 = arg3;
                var12 = arg4;
                var10 = var13;
                var6 = 12;
                var5 = undefined;
                var1 = null;
                var4 = 15;
                for(var7 in var10)
case 42:
                {
case 43:
                    var16 = var7;
                    var17 = var13[var16];
                    var18 = var14[var16];
                    var19 = var1 != var18;
                    if(!var19) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var20 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var4];
                    var20 = var20.bind(var5)(var3);
                    var3 = var20.isSubscriptionRole;
                    var19 = var3.bind(var20)(var18);
case 44:
                    if(!var19) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var20 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var4];
                    var20 = var20.bind(var5)(var3);
                    var3 = var20.isSubscriptionRoleAvailableForPurchase;
                    var19 = var3.bind(var20)(var18);
case 46:
                    var20 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var4];
                    var20 = var20.bind(var5)(var3);
                    var3 = var20.isSubscriptionRole;
                    var3 = var3.bind(var20)(var17);
                    if(!var3) { _fun0009_ip = 19; continue _fun0009 }
case 48:
                    var21 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var20 = var20[var4];
                    var21 = var21.bind(var5)(var20);
                    var20 = var21.isSubscriptionRoleAvailableForPurchase;
                    var3 = var20.bind(var21)(var17);
case 19:
                    if(var19) { _fun0009_ip = 22; continue _fun0009 }
case 49:
                    if(!var3) { _fun0009_ip = 22; continue _fun0009 }
case 50:
                    var3 = _closure1_slot19;
                    var3 = var3.RoleSubscriptionTags;
                    return var3;
case 22:
                    if(!(var16 !== var15)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                    var3 = var12.has;
                    var3 = var3.bind(var12)(var16);
                    if(!var3) { _fun0009_ip = 42; continue _fun0009 }
case 51:
                    if(!(var1 != var18)) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var16 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var19 = var3[var6];
                    var20 = var16.bind(var5)(var19);
                    var19 = var20.filter;
                    var18 = var18.permissions;
                    var21 = _closure1_slot17;
                    var18 = var19.bind(var20)(var18, var21);
                    var19 = var3[var6];
                    var20 = var16.bind(var5)(var19);
                    var19 = var20.filter;
                    var17 = var17.permissions;
                    var17 = var19.bind(var20)(var17, var21);
                    var3 = var3[var6];
                    var16 = var16.bind(var5)(var3);
                    var3 = var16.equals;
                    var3 = var3.bind(var16)(var18, var17);
                    if(var3) { _fun0009_ip = 42; continue _fun0009 }
case 55:
                    var3 = _closure1_slot19;
                    var3 = var3.RolePermissions;
                    return var3;
case 53:
                    var2 = _closure1_slot19;
                    var2 = var2.RolePermissions;
                    return var2;
                }
case 56:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'processMemberRoleIds';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var3 = arg2;
                var2 = var6.length;
                var1 = var3.length;
                if(!(var2 === var1)) { _fun0010_ip = 57; continue _fun0010 }
case 31:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var10 = var2;
                var1 = new var10[var1](var9);
                var2 = var1 instanceof Object ? var1 : var2;
                var4 = _closure1_slot21;
                var5 = undefined;
                var7 = var4.bind(var5)(var6);
                var6 = var7.bind(var5)();
                var4 = var6.done;
                if(var4) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                var8 = var6.value;
                var4 = var2.add;
                var4 = var4.bind(var2)(var8);
                var8 = var7.bind(var5)();
                var4 = var8.done;
                var6 = var8;
                if(!var4) { _fun0010_ip = 59; continue _fun0010 }
case 58:
                var1 = _closure1_slot21;
                var4 = var1.bind(var5)(var3);
                var3 = var4.bind(var5)();
                var1 = var3.done;
                if(var1) { _fun0010_ip = 19; continue _fun0010 }
case 46:
                var6 = var3.value;
                var1 = var2.has;
                var1 = var1.bind(var2)(var6);
                if(var1) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var1 = {'rolesAreDifferent': true, 'allRoleIds': null};
                return var1;
case 60:
                var1 = var2.add;
                var1 = var1.bind(var2)(var6);
                var6 = var4.bind(var5)();
                var1 = var6.done;
                var3 = var6;
                if(!var1) { _fun0010_ip = 46; continue _fun0010 }
case 19:
                var1 = {};
                var3 = false;
                var1['rolesAreDifferent'] = var3;
                var1['allRoleIds'] = var2;
                return var1;
case 57:
                var1 = {'rolesAreDifferent': true, 'allRoleIds': null};
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'userBecameGuildOwner';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg3;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                var2 = arg2;
                var2 = var2 === var4;
                if(!var2) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                var3 = arg1;
                var2 = var3 !== var4;
case 64:
                var1 = var2;
case 62:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'handleBackgroundSyncGuild';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var6 = arg2;
                var5 = this;
                var7 = _closure1_slot10;
                var4 = var7.getSelfMember;
                var3 = var2.id;
                var8 = var4.bind(var7)(var3);
                var12 = null;
                if(!(var12 == var8)) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                var7 = _closure1_slot10;
                var4 = var7.getCachedSelfMember;
                var3 = var2.id;
                var8 = var4.bind(var7)(var3);
case 66:
                if(!(var12 != var8)) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                var4 = var2.data_mode;
                var3 = 'partial';
                if(!(var3 !== var4)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                var4 = var2.data_mode;
                var3 = 'full';
                if(!(var3 === var4)) { _fun0012_ip = 68; continue _fun0012 }
case 11:
                var4 = var5.unmarkGuildForResync;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3, var6);
                _fun0012_ip = 68; continue _fun0012;
case 70:
                var3 = var5.backgroundSyncGuildHasObfuscatedChannels;
                var3 = var3.bind(var5)(var2);
                if(var3) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                var4 = var5.unmarkGuildForResync;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3, var6);
                _fun0012_ip = 68; continue _fun0012;
case 72:
                var3 = _closure1_slot19;
                var4 = var3.Unknown;
                var11 = {};
                var3 = var2.partial_updates;
                var3 = var3.roles;
                if(!(var12 != var3)) { _fun0012_ip = 74; continue _fun0012 }
case 19:
                var7 = _closure1_slot21;
                var3 = var2.partial_updates;
                var3 = var3.roles;
                var13 = undefined;
                var10 = var7.bind(var13)(var3);
                var7 = var10.bind(var13)();
                var3 = var7.done;
                var9 = 12;
                if(var3) { _fun0012_ip = 74; continue _fun0012 }
case 51:
                var15 = var7.value;
                var14 = var15.id;
                var3 = {};
                var16 = var15.id;
                var3['id'] = var16;
                var17 = _closure1_slot2;
                var16 = _closure1_slot3;
                var16 = var16[var9];
                var18 = var17.bind(var13)(var16);
                var17 = var18.deserialize;
                var16 = var15.permissions;
                var16 = var17.bind(var18)(var16);
                var3['permissions'] = var16;
                var15 = var15.tags;
                if(!(var12 == var15)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                var15 = {};
case 75:
                var3['tags'] = var15;
                var11[var14] = var3;
                var14 = var10.bind(var13)();
                var3 = var14.done;
                var7 = var14;
                if(!var3) { _fun0012_ip = 51; continue _fun0012 }
case 74:
                var3 = var2.properties;
                var13 = var5.userBecameGuildOwner;
                var10 = _closure1_slot12;
                var9 = var10.getGuild;
                var7 = var2.id;
                var7 = var9.bind(var10)(var7);
                var14 = var12 == var7;
                var10 = undefined;
                if(var14) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                var10 = var7.ownerId;
case 77:
                var14 = var12 == var3;
                var7 = undefined;
                if(var14) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                var7 = var3.owner_id;
case 79:
                var14 = _closure1_slot8;
                var3 = var14.getId;
                var3 = var3.bind(var14)();
                var7 = var13.bind(var5)(var10, var7, var3);
                if(var7) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                var13 = _closure1_slot11;
                var10 = var13.getUnsafeMutableRoles;
                var3 = var2.id;
                var10 = var10.bind(var13)(var3);
                var3 = global;
                var3 = var3.Set;
                var13 = var12 == var8;
                var9 = undefined;
                if(var13) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                var9 = var8.roles;
case 83:
                if(!(var12 == var9)) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                var9 = new Array(0);
case 85:
                var8 = var3.prototype;
                var8 = Object.create(var8, {constructor: {value: var3}});
                var23 = var8;
                var22 = var9;
                var3 = new var23[var3](var22, var21);
                var19 = var3 instanceof Object ? var3 : var8;
                var8 = var5.detectRoleVisibilityChanges;
                var22 = var2.id;
                var23 = var5;
                var21 = var10;
                var20 = var11;
                var9 = var23[var8](var22, var21, var20, var19, var18);
                var3 = var7;
                if(!(var12 != var9)) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                var3 = true;
                var4 = var9;
                _fun0012_ip = 87; continue _fun0012;
case 81:
                var8 = _closure1_slot19;
                var4 = var8.OwnershipChange;
                var3 = var7;
case 87:
                var7 = !var3;
                if(!var7) { _fun0012_ip = 89; continue _fun0012 }
case 90:
                var11 = var5.hasNewlyVisibleChannelWithHiddenParent;
                var10 = var2.id;
                var8 = var2.partial_updates;
                var9 = var8.channels;
                if(!(var12 == var9)) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                var9 = new Array(0);
case 91:
                var8 = var2.partial_updates;
                var8 = var8.deleted_channel_ids;
                if(!(var12 == var8)) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                var8 = new Array(0);
case 93:
                var7 = var11.bind(var5)(var10, var9, var8);
case 89:
                if(!var7) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                var7 = _closure1_slot19;
                var4 = var7.ChannelVisibleParentHidden;
                var3 = true;
case 95:
                if(!var3) { _fun0012_ip = 68; continue _fun0012 }
case 97:
                var3 = var5.markGuildForResync;
                var22 = var2.id;
                var1 = _closure1_slot20;
                var20 = var1.BackgroundSync;
                var23 = var5;
                var21 = var6;
                var19 = var4;
                var1 = var23[var3](var22, var21, var20, var19, var18);
case 68:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'handleGuild';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var5 = this;
                var2 = var1.channels;
                var2 = var2.op;
                var15 = 'full_sync';
                if(!(var15 === var2)) { _fun0013_ip = 98; continue _fun0013 }
case 62:
                var3 = var5.unmarkGuildForResync;
                var2 = var1.id;
                var2 = var3.bind(var5)(var2, var6);
                _fun0013_ip = 99; continue _fun0013;
case 98:
                var2 = _closure1_slot19;
                var2 = var2.Unknown;
                var8 = _closure1_slot8;
                var4 = var8.getId;
                var13 = var4.bind(var8)();
                var _closure3_slot0 = var13;
                var9 = _closure1_slot12;
                var8 = var9.getGuild;
                var4 = var1.id;
                var9 = var8.bind(var9)(var4);
                var8 = null;
                if(!(var8 == var9)) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                var4 = _closure1_slot19;
                var4 = var4.NewGuild;
                var10 = true;
                _fun0013_ip = 19; continue _fun0013;
case 100:
                var12 = var5.userBecameGuildOwner;
                var11 = var9.ownerId;
                var14 = var1.properties;
                var16 = var8 == var14;
                var9 = undefined;
                if(var16) { _fun0013_ip = 15; continue _fun0013 }
case 102:
                var9 = var14.owner_id;
case 15:
                var9 = var12.bind(var5)(var11, var9, var13);
                var10 = var9;
                var4 = var2;
                if(!var9) { _fun0013_ip = 19; continue _fun0013 }
case 103:
                var2 = _closure1_slot19;
                var4 = var2.OwnershipChange;
                var10 = var9;
case 19:
                var9 = var4;
                var14 = null;
                if(var10) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                var12 = _closure1_slot10;
                var11 = var12.getSelfMember;
                var2 = var1.id;
                var2 = var11.bind(var12)(var2);
                if(!(var8 == var2)) { _fun0013_ip = 106; continue _fun0013 }
case 107:
                var13 = _closure1_slot10;
                var12 = var13.getCachedSelfMember;
                var11 = var1.id;
                var2 = var12.bind(var13)(var11);
case 106:
                var12 = var1.members;
                var11 = var12.find;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var12 = var11.bind(var12)(var7);
                var11 = var5.processMemberRoleIds;
                if(!(var8 == var2)) { _fun0013_ip = 108; continue _fun0013 }
case 109:
                var7 = new Array(0);
                _fun0013_ip = 110; continue _fun0013;
case 108:
                var7 = var2.roles;
case 110:
                var13 = var8 == var12;
                var2 = undefined;
                if(var13) { _fun0013_ip = 111; continue _fun0013 }
case 75:
                var2 = var12.roles;
case 111:
                if(!(var8 == var2)) { _fun0013_ip = 112; continue _fun0013 }
case 113:
                var2 = new Array(0);
case 112:
                var2 = var11.bind(var5)(var7, var2);
                var7 = var2.rolesAreDifferent;
                var2 = var2.allRoleIds;
                if(!var7) { _fun0013_ip = 114; continue _fun0013 }
case 53:
                var11 = _closure1_slot19;
                var4 = var11.MemberRoles;
case 114:
                var11 = var8 != var2;
                var10 = var7;
                var9 = var4;
                var14 = null;
                if(!var11) { _fun0013_ip = 104; continue _fun0013 }
case 115:
                var10 = var7;
                var9 = var4;
                var14 = var2;
case 104:
                var4 = var9;
                var2 = var10;
                if(var2) { _fun0013_ip = 116; continue _fun0013 }
case 117:
                var2 = var10;
                var4 = var9;
                if(!(var8 != var14)) { _fun0013_ip = 116; continue _fun0013 }
case 118:
                var12 = _closure1_slot11;
                var11 = var12.getUnsafeMutableRoles;
                var7 = var1.id;
                var13 = var11.bind(var12)(var7);
                var12 = {};
                var11 = _closure1_slot21;
                var7 = var1.roles;
                var7 = var7.op;
                if(!(var15 !== var7)) { _fun0013_ip = 119; continue _fun0013 }
case 120:
                var7 = var1.roles;
                var7 = var7.writes;
                _fun0013_ip = 85; continue _fun0013;
case 119:
                var15 = var1.roles;
                var7 = var15.items;
case 85:
                var17 = undefined;
                var16 = var11.bind(var17)(var7);
                var11 = var16.bind(var17)();
                var7 = var11.done;
                var15 = 12;
                if(var7) { _fun0013_ip = 121; continue _fun0013 }
case 122:
                var19 = var11.value;
                var18 = var19.id;
                var7 = {};
                var20 = var19.id;
                var7['id'] = var20;
                var21 = _closure1_slot2;
                var20 = _closure1_slot3;
                var20 = var20[var15];
                var22 = var21.bind(var17)(var20);
                var21 = var22.deserialize;
                var20 = var19.permissions;
                var20 = var21.bind(var22)(var20);
                var7['permissions'] = var20;
                var19 = var19.tags;
                if(!(var8 == var19)) { _fun0013_ip = 123; continue _fun0013 }
case 124:
                var19 = {};
case 123:
                var7['tags'] = var19;
                var12[var18] = var7;
                var18 = var16.bind(var17)();
                var7 = var18.done;
                var11 = var18;
                if(!var7) { _fun0013_ip = 122; continue _fun0013 }
case 121:
                var11 = var5.detectRoleVisibilityChanges;
                var26 = var1.id;
                var27 = var5;
                var25 = var13;
                var24 = var12;
                var23 = var14;
                var7 = var27[var11](var26, var25, var24, var23, var22);
                var2 = var10;
                var4 = var9;
                if(!(var8 != var7)) { _fun0013_ip = 116; continue _fun0013 }
case 125:
                var2 = true;
                var4 = var7;
case 116:
                var7 = !var2;
                if(!var7) { _fun0013_ip = 126; continue _fun0013 }
case 127:
                var11 = var5.hasNewlyVisibleChannelWithHiddenParent;
                var10 = var1.id;
                var8 = var1.channels;
                var9 = var8.writes;
                var8 = var1.channels;
                var8 = var8.deletes;
                var7 = var11.bind(var5)(var10, var9, var8);
case 126:
                if(!var7) { _fun0013_ip = 128; continue _fun0013 }
case 129:
                var3 = _closure1_slot19;
                var4 = var3.ChannelVisibleParentHidden;
                var2 = true;
case 128:
                if(!var2) { _fun0013_ip = 99; continue _fun0013 }
case 130:
                var2 = var5.gatewayGuildHasObfuscatedChannels;
                var2 = var2.bind(var5)(var1);
                if(var2) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                var3 = var5.unmarkGuildForResync;
                var2 = var1.id;
                var2 = var3.bind(var5)(var2, var6);
                _fun0013_ip = 99; continue _fun0013;
case 131:
                var3 = var5.markGuildForResync;
                var26 = var1.id;
                var24 = arg3;
                var27 = var5;
                var25 = var6;
                var23 = var4;
                var1 = var27[var3](var26, var25, var24, var23, var22);
case 99:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'handleChannelSync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var3 = var1.guild_id;
                var1 = var1.integrity_check;
                if(var1) { _fun0014_ip = 133; continue _fun0014 }
case 29:
                var2 = var4.unmarkGuildForResync;
                var1 = arg2;
                var1 = var2.bind(var4)(var3, var1);
case 133:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'markGuildForResync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            var6 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 16;
            var3 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.v4;
            var5 = var3.bind(var5)();
            var3 = _closure1_slot1;
            var7 = 17;
            var7 = var4[var7];
            var9 = var3.bind(var1)(var7);
            var8 = var9.track;
            var2 = _closure1_slot14;
            var7 = var2.GUILD_CHANNEL_RESYNC_REQUESTED;
            var2 = {};
            var2['guild_id'] = var6;
            var2['request_id'] = var5;
            var10 = arg3;
            var2['trigger'] = var10;
            var10 = arg4;
            var2['change_type'] = var10;
            var2 = var8.bind(var9)(var7, var2);
            var2 = 14;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsRequiringChannelSyncTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.put;
            var2 = {};
            var2['id'] = var6;
            var2['requestId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'unmarkGuildForResync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsRequiringChannelSyncTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.delete;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'hasNewlyVisibleChannelWithHiddenParent';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arg1;
                var2 = arg2;
                var6 = arguments[2];
                var13 = undefined;
                if(!(var6 === var13)) { _fun0015_ip = 134; continue _fun0015 }
case 135:
                var6 = new Array(0);
case 134:
                var3 = var2.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0015_ip = 136; continue _fun0015 }
case 33:
                var3 = _closure1_slot9;
                var1 = var3.getMutableBasicGuildChannelsForGuild;
                var11 = var1.bind(var3)(var4);
                var1 = global;
                var3 = var1.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var24 = var5;
                var23 = var6;
                var3 = new var24[var3](var23, var22);
                var10 = var3 instanceof Object ? var3 : var5;
                var1 = var1.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var24 = var3;
                var1 = new var24[var1](var23);
                var9 = var1 instanceof Object ? var1 : var3;
                var1 = _closure1_slot21;
                var3 = var1.bind(var13)(var2);
                var2 = var3.bind(var13)();
                var1 = var2.done;
                if(var1) { _fun0015_ip = 137; continue _fun0015 }
case 138:
                var5 = var2.value;
                var1 = _closure1_slot7;
                var1 = var5 instanceof var1;
                var6 = var5;
                if(var1) { _fun0015_ip = 15; continue _fun0015 }
case 139:
                var1 = _closure1_slot6;
                var6 = var1.bind(var13)(var5, var4);
case 15:
                var5 = var9.set;
                var1 = var6.id;
                var1 = var5.bind(var9)(var1, var6);
                var5 = var3.bind(var13)();
                var1 = var5.done;
                var2 = var5;
                if(!var1) { _fun0015_ip = 138; continue _fun0015 }
case 137:
                var2 = _closure1_slot21;
                var1 = var9.values;
                var1 = var1.bind(var9)();
                var8 = var2.bind(var13)(var1);
                var2 = var8.bind(var13)();
                var1 = var2.done;
                var7 = null;
                var6 = var2;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if(var1) { _fun0015_ip = 140; continue _fun0015 }
case 141:
                var1 = var6.value;
                var14 = var1.isCategory;
                var16 = var14.bind(var1)();
                var15 = var3;
                var14 = var2;
                if(var16) { _fun0015_ip = 142; continue _fun0015 }
case 143:
                var16 = var1.id;
                var19 = var11[var16];
                var16 = var7 != var19;
                if(!var16) { _fun0015_ip = 144; continue _fun0015 }
case 145:
                var20 = _closure1_slot13;
                var18 = var20.canBasicChannel;
                var17 = _closure1_slot15;
                var17 = var17.VIEW_CHANNEL;
                var16 = var18.bind(var20)(var17, var19);
case 144:
                var17 = var1.isObfuscated;
                var17 = var17.bind(var1)();
                var18 = !var17;
                if(!var16) { _fun0015_ip = 146; continue _fun0015 }
case 55:
                if(!(var7 != var19)) { _fun0015_ip = 146; continue _fun0015 }
case 147:
                var17 = var19.parent_id;
                var16 = var1.parent_id;
                var5 = var19;
                var4 = var18;
                var15 = var3;
                var14 = var2;
                if(!(var17 !== var16)) { _fun0015_ip = 142; continue _fun0015 }
case 146:
                var5 = var19;
                var15 = var3;
                var14 = var2;
                var4 = var18;
                if(!var4) { _fun0015_ip = 142; continue _fun0015 }
case 148:
                var17 = var1.parent_id;
                var5 = var19;
                var4 = var18;
                var15 = var17;
                var14 = var2;
                if(!(var7 != var17)) { _fun0015_ip = 142; continue _fun0015 }
case 149:
                var1 = var10.has;
                var1 = var1.bind(var10)(var17);
                var5 = var19;
                var4 = var18;
                var15 = var17;
                var14 = var2;
                if(var1) { _fun0015_ip = 142; continue _fun0015 }
case 150:
                var1 = var9.get;
                var1 = var1.bind(var9)(var17);
                var5 = var19;
                var4 = var18;
                var15 = var17;
                var14 = var2;
                if(!(var7 == var1)) { _fun0015_ip = 142; continue _fun0015 }
case 119:
                var16 = var11[var17];
                if(!(var7 != var16)) { _fun0015_ip = 151; continue _fun0015 }
case 86:
                var21 = _closure1_slot13;
                var20 = var21.canBasicChannel;
                var1 = _closure1_slot15;
                var1 = var1.VIEW_CHANNEL;
                var1 = var20.bind(var21)(var1, var16);
                var5 = var19;
                var4 = var18;
                var15 = var17;
                var14 = var16;
                if(var1) { _fun0015_ip = 142; continue _fun0015 }
case 151:
                var1 = true;
                return var1;
case 142:
                var16 = var8.bind(var13)();
                var1 = var16.done;
                var3 = var15;
                var2 = var14;
                var6 = var16;
                if(!var1) { _fun0015_ip = 141; continue _fun0015 }
case 140:
                var1 = false;
                return var1;
case 136:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'gatewayGuildHasObfuscatedChannels';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.channels;
                var3 = var2.op;
                var2 = 'full_sync';
                if(!(var2 !== var3)) { _fun0016_ip = 36; continue _fun0016 }
case 152:
                var2 = var1.channels;
                var3 = var2.writes;
                var2 = var1.channels;
                var5 = var2.deletes;
                _fun0016_ip = 45; continue _fun0016;
case 36:
                var2 = var1.channels;
                var3 = var2.items;
                var5 = new Array(0);
case 45:
                var2 = var4.guildHasStoredObfuscatedChannels;
                var1 = var1.id;
                var1 = var2.bind(var4)(var1, var5);
                if(var1) { _fun0016_ip = 47; continue _fun0016 }
case 153:
                var2 = var4.anyChannelRecordsObfuscated;
                var1 = var2.bind(var4)(var3);
case 47:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'backgroundSyncGuildHasObfuscatedChannels';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var3 = var1.data_mode;
                var2 = 'partial';
                if(!(var2 !== var3)) { _fun0017_ip = 62; continue _fun0017 }
case 29:
                var3 = var1.channels;
                var5 = new Array(0);
                _fun0017_ip = 154; continue _fun0017;
case 62:
                var2 = var1.partial_updates;
                var6 = var2.channels;
                var7 = null;
                if(!(var7 == var6)) { _fun0017_ip = 98; continue _fun0017 }
case 155:
                var6 = new Array(0);
case 98:
                var2 = var1.partial_updates;
                var2 = var2.deleted_channel_ids;
                if(!(var7 == var2)) { _fun0017_ip = 156; continue _fun0017 }
case 35:
                var2 = new Array(0);
case 156:
                var5 = var2;
                var3 = var6;
case 154:
                var2 = var4.guildHasStoredObfuscatedChannels;
                var1 = var1.id;
                var1 = var2.bind(var4)(var1, var5);
                if(var1) { _fun0017_ip = 157; continue _fun0017 }
case 47:
                var2 = var4.anyChannelsObfuscated;
                var1 = var2.bind(var4)(var3);
case 157:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'guildHasStoredObfuscatedChannels';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = arguments[1];
                var3 = this;
                var4 = undefined;
                if(!(var2 === var4)) { _fun0018_ip = 158; continue _fun0018 }
case 32:
                var2 = new Array(0);
case 158:
                var _closure3_slot0 = var2;
                var5 = _closure1_slot9;
                var4 = var5.getMutableGuildChannelsForGuild;
                var2 = arg1;
                var5 = var4.bind(var5)(var2);
                var2 = global;
                var4 = var2.Object;
                var2 = var4.values;
                var4 = var2.bind(var4)(var5);
                var2 = var4.filter;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.indexOf;
                    var1 = arg1;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = -1;
                    var1 = var1 === var2;
                    return var1;
                };
                var2 = var2.bind(var4)(var1);
                var1 = var3.anyChannelRecordsObfuscated;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'anyChannelRecordsObfuscated';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var2 = var3.find;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.isObfuscated;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'anyChannelsObfuscated';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.hasFlag;
                    var2 = arg1;
                    var5 = var2.flags;
                    var2 = null;
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0019_ip = 36; continue _fun0019 }
case 155:
                    var2 = var5;
case 36:
                    var1 = _closure1_slot16;
                    var1 = var1.OBFUSCATED;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'resetInMemoryState';
        var1['key'] = var6;
        var5 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[19] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/GuildsRequiringChannelSync.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();