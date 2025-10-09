// app/modules/parent_tools/FamilyCenterStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var10 = function getDefaultSelectedTab() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var2 = var1.window;
            var4 = null;
            var3 = var4 == var2;
            var6 = undefined;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var2.location;
            var3 = var4 == var2;
            var6 = undefined;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var6 = var2.pathname;
case 6:
            var3 = _closure1_slot12;
            var3 = var3.FAMILY_CENTER_MY_FAMILY;
            if(!(var6 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var1.window;
            var6 = var4 == var1;
            var3 = undefined;
            if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var1.location;
            var4 = var4 == var1;
            var3 = undefined;
            if(var4) { _fun0002_ip = 11; continue _fun0002 }
case 13:
            var3 = var1.pathname;
case 11:
            var1 = _closure1_slot12;
            var1 = var1.FAMILY_CENTER_SETTINGS;
            if(!(var3 !== var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = _closure1_slot13;
            var1 = var1.ACTIVITY;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var3 = _closure1_slot13;
            var1 = var3.SETTINGS;
case 16:
            _fun0002_ip = 17; continue _fun0002;
case 9:
            var2 = _closure1_slot13;
            var1 = var2.REQUESTS;
case 17:
            return var1;
        }
    };
    var _closure1_slot34 = var10;
    var12 = function freshTeenActivityWithMap() {
        var2 = global;
        var1 = var2.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var10 = var3;
        var1 = new var10[var1](var9);
        var1 = var1 instanceof Object ? var1 : var3;
        var6 = var1.set;
        var4 = _closure1_slot14;
        var5 = var4.USER_ADD;
        var4 = var2.Map;
        var7 = var4.prototype;
        var7 = Object.create(var7, {constructor: {value: var4}});
        var10 = var7;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var7;
        var4 = var6.bind(var1)(var5, var4);
        var6 = var1.set;
        var4 = _closure1_slot14;
        var5 = var4.GUILD_ADD;
        var4 = var2.Map;
        var7 = var4.prototype;
        var7 = Object.create(var7, {constructor: {value: var4}});
        var10 = var7;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var7;
        var4 = var6.bind(var1)(var5, var4);
        var6 = var1.set;
        var4 = _closure1_slot14;
        var5 = var4.USER_INTERACTION;
        var4 = var2.Map;
        var7 = var4.prototype;
        var7 = Object.create(var7, {constructor: {value: var4}});
        var10 = var7;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var7;
        var4 = var6.bind(var1)(var5, var4);
        var6 = var1.set;
        var4 = _closure1_slot14;
        var5 = var4.GUILD_INTERACTION;
        var4 = var2.Map;
        var7 = var4.prototype;
        var7 = Object.create(var7, {constructor: {value: var4}});
        var10 = var7;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var7;
        var4 = var6.bind(var1)(var5, var4);
        var6 = var1.set;
        var4 = _closure1_slot14;
        var5 = var4.USER_CALLED;
        var4 = var2.Map;
        var7 = var4.prototype;
        var7 = Object.create(var7, {constructor: {value: var4}});
        var10 = var7;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var7;
        var4 = var6.bind(var1)(var5, var4);
        var6 = var1.set;
        var4 = _closure1_slot14;
        var5 = var4.TOTAL_VOICE_MINUTES;
        var4 = var2.Map;
        var7 = var4.prototype;
        var7 = Object.create(var7, {constructor: {value: var4}});
        var10 = var7;
        var4 = new var10[var4](var9);
        var4 = var4 instanceof Object ? var4 : var7;
        var4 = var6.bind(var1)(var5, var4);
        var4 = var1.set;
        var3 = _closure1_slot14;
        var3 = var3.PURCHASES;
        var2 = var2.Map;
        var5 = var2.prototype;
        var5 = Object.create(var5, {constructor: {value: var2}});
        var10 = var5;
        var2 = new var10[var2](var9);
        var2 = var2 instanceof Object ? var2 : var5;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot35 = var12;
    var11 = function freshTeenActivityTotals() {
        var1 = {};
        var3 = _closure1_slot14;
        var4 = var3.USER_ADD;
        var3 = 0;
        var1[var4] = var3;
        var4 = _closure1_slot14;
        var4 = var4.GUILD_ADD;
        var1[var4] = var3;
        var4 = _closure1_slot14;
        var4 = var4.USER_INTERACTION;
        var1[var4] = var3;
        var4 = _closure1_slot14;
        var4 = var4.GUILD_INTERACTION;
        var1[var4] = var3;
        var4 = _closure1_slot14;
        var4 = var4.USER_CALLED;
        var1[var4] = var3;
        var4 = _closure1_slot14;
        var4 = var4.TOTAL_VOICE_MINUTES;
        var1[var4] = var3;
        var2 = _closure1_slot14;
        var2 = var2.PURCHASES;
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot36 = var11;
    var1 = function processLinkedUsers() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = new Array(0);
case 18:
            var2 = var5.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = {};
            _fun0003_ip = 22; continue _fun0003;
case 20:
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                var3 = arg2;
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var2 = var3.user_id;
                var1[var2] = var3;
                return var1;
            };
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 22:
            _closure1_slot17 = var1;
            var2 = true;
            _closure1_slot18 = var2;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function processTeenActivityTotals(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = undefined;
            if(!(var1 !== var3)) { _fun0004_ip = 23; continue _fun0004 }
case 19:
            _closure1_slot20 = var3;
case 23:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function processTeenActions(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            if(var1) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var4 = _closure1_slot35;
            var1 = undefined;
            var1 = var4.bind(var1)();
            _fun0005_ip = 26; continue _fun0005;
case 24:
            var1 = _closure1_slot19;
case 26:
            var _closure2_slot0 = var1;
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var3 = var5.display_type;
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var4 = var1.bind(var2)(var3);
                    var1 = undefined;
                    var2 = var1 === var4;
                    if(var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var6 = var4.has;
                    var3 = var5.event_id;
                    var2 = var6.bind(var4)(var3);
case 27:
                    if(var2) { _fun0006_ip = 12; continue _fun0006 }
case 29:
                    var3 = var4.set;
                    var2 = var5.event_id;
                    var2 = var3.bind(var4)(var2, var5);
case 12:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot19 = var1;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function processGuilds(arg1) {
        var5 = arg1;
        var4 = var5.reduce;
        var3 = _closure1_slot32;
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg2;
                var1 = {};
                var8 = arg1;
                var9 = var1;
                var2 = copyDataProperties(var9, var8);
                var3 = var4.id;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 10;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.dangerouslyConstructGuildRecordFromUntypedObject;
                var8 = var5.bind(var6)(var4);
                var9 = var2;
                var5 = copyDataProperties(var9, var8);
                var4 = var4.approximate_member_count;
                var5 = null;
                var6 = var5 != var4;
                var5 = 0;
                if(!var6) { _fun0007_ip = 13; continue _fun0007 }
case 30:
                var5 = var4;
case 13:
                var4 = 'approximateMemberCount';
                var2[var4] = var5;
                var1[var3] = var2;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        _closure1_slot32 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function processInvoices(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = arg2;
                var2 = var4.invoice_items;
                var3 = null;
                if(!(var3 != var2)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var2 = var4.invoice_items;
                var2 = var2.length;
                var5 = 0;
                if(!(var2 > var5)) { _fun0008_ip = 31; continue _fun0008 }
case 28:
                var2 = var4.invoice_items;
                var2 = var2[var5];
                var6 = var2.sku_id;
                var5 = var2.subscription_plan_id;
                var2 = var3 == var6;
                if(!var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                var2 = var3 == var5;
case 33:
                if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 12:
                var3 = var4.id;
                var2 = {};
                var2['sku_id'] = var6;
                var2['subscription_plan_id'] = var5;
                var5 = var4.total;
                var2['total'] = var5;
                var4 = var4.currency;
                var2['currency'] = var4;
                var1[var3] = var2;
case 31:
                return var1;
            }
        };
        var1 = {};
        var2 = var3.bind(var4)(var2, var1);
        _closure1_slot31 = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function handleFetchStart() {
        var1 = true;
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function handleInitialLoad(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var9 = var1.linkedUsers;
            var3 = var1.familyCenterTeenActivity;
            var12 = var3.actions;
            var10 = var3.guilds;
            var11 = var3.totals;
            var7 = var3.teenId;
            var1 = var3.rangeStartId;
            var6 = var3.topUserActivities;
            var5 = var3.topGuildActivities;
            var4 = var3.totalSpendAmount;
            var2 = var3.totalSpendCurrency;
            var8 = var3.invoices;
            _closure1_slot15 = var7;
            _closure1_slot16 = var1;
            var7 = _closure1_slot39;
            var1 = undefined;
            var7 = var7.bind(var1)(var12);
            var7 = _closure1_slot38;
            var7 = var7.bind(var1)(var11);
            var7 = _closure1_slot40;
            var7 = var7.bind(var1)(var10);
            var7 = _closure1_slot37;
            var7 = var7.bind(var1)(var9);
            var7 = null;
            if(!(var7 != var8)) { _fun0009_ip = 17; continue _fun0009 }
case 35:
            var7 = _closure1_slot41;
            var7 = var7.bind(var1)(var8);
case 17:
            _closure1_slot27 = var6;
            _closure1_slot28 = var5;
            _closure1_slot29 = var4;
            _closure1_slot30 = var2;
            var2 = false;
            _closure1_slot24 = var2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var4 = var5.fromTimestamp;
            var2 = global;
            var6 = var2.Date;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var2 = var4.bind(var5)(var2);
            _closure1_slot25 = var2;
            var2 = true;
            _closure1_slot23 = var2;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function handleLinkedUserFetch(arg1) {
        var1 = arg1;
        var3 = var1.linkedUsers;
        var2 = _closure1_slot37;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function handleRequestLinkSuccess(arg1) {
        var1 = arg1;
        var3 = var1.linkedUsers;
        var2 = _closure1_slot37;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function handleTeenActivityFetch(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.familyCenterTeenActivity;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0010_ip = 36; continue _fun0010 }
case 32:
            var11 = var2.actions;
            var10 = var2.totals;
            var9 = var2.guilds;
            var12 = var2.teenId;
            var7 = var2.rangeStartId;
            var6 = var2.topUserActivities;
            var5 = var2.topGuildActivities;
            var4 = var2.totalSpendAmount;
            var3 = var2.totalSpendCurrency;
            var8 = var2.invoices;
            _closure1_slot15 = var12;
            _closure1_slot16 = var7;
            var7 = _closure1_slot39;
            var7 = var7.bind(var1)(var11);
            var7 = _closure1_slot38;
            var7 = var7.bind(var1)(var10);
            var7 = _closure1_slot40;
            var7 = var7.bind(var1)(var9);
            var7 = null;
            if(!(var7 != var8)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var7 = _closure1_slot41;
            var7 = var7.bind(var1)(var8);
case 37:
            _closure1_slot27 = var6;
            _closure1_slot28 = var5;
            var5 = false;
            _closure1_slot24 = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.fromTimestamp;
            var5 = global;
            var8 = var5.Date;
            var5 = var8.now;
            var5 = var5.bind(var8)();
            var5 = var6.bind(var7)(var5);
            _closure1_slot25 = var5;
            _closure1_slot29 = var4;
            _closure1_slot30 = var3;
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function handleTeenActivityMoreFetch(arg1) {
        var1 = arg1;
        var1 = var1.familyCenterTeenActivity;
        var6 = var1.actions;
        var3 = var1.guilds;
        var5 = _closure1_slot39;
        var1 = undefined;
        var4 = true;
        var4 = var5.bind(var1)(var6, var4);
        var2 = _closure1_slot40;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot47 = var1;
    var1 = function handleUserLinkStatusUpdate(arg1) {
        var1 = arg1;
        var3 = var1.linkedUsers;
        var2 = _closure1_slot37;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = function handleUserLinkRemove(arg1) {
        var1 = arg1;
        var3 = var1.linkedUsers;
        var2 = _closure1_slot37;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = function handleLinkCodeFetch(arg1) {
        var1 = arg1;
        var2 = var1.linkCode;
        _closure1_slot21 = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot50 = var1;
    var1 = function handleTabSelect(arg1) {
        var1 = arg1;
        var2 = var1.tab;
        _closure1_slot22 = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot51 = var1;
    var1 = function handleCurrentUserUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.user;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var2 = var3.linked_users;
            if(!(var1 !== var2)) { _fun0011_ip = 39; continue _fun0011 }
case 40:
            var6 = _closure1_slot10;
            var5 = var6.getUsers;
            var5 = var5.bind(var6)();
            _closure2_slot0 = var5;
            var6 = var3.linked_users;
            var5 = var6.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.user_id;
                var1 = _closure2_slot0;
                var2 = var1[var2];
                var1 = undefined;
                var1 = var1 === var2;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0011_ip = 14; continue _fun0011 }
case 41:
            var4 = var3.linked_users;
            var5 = var4.length;
            var4 = global;
            var7 = var4.Object;
            var6 = var7.keys;
            var4 = _closure1_slot17;
            var4 = var6.bind(var7)(var4);
            var4 = var4.length;
            if(!(!(var5 > var4))) { _fun0011_ip = 42; continue _fun0011 }
case 14:
            var4 = _closure1_slot37;
            var3 = var3.linked_users;
            var3 = var4.bind(var1)(var3);
            _fun0011_ip = 43; continue _fun0011;
case 42:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchLinkedUsers;
            var2 = var2.bind(var3)();
case 43:
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function handleConnectionOpen(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.linkedUsers;
            var1 = null;
            if(!(var1 != var3)) { _fun0012_ip = 44; continue _fun0012 }
case 45:
            var2 = _closure1_slot37;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = function handleSetLocationMetadata(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = var1.countryCode;
            var2 = null;
            if(!(var2 != var5)) { _fun0013_ip = 46; continue _fun0013 }
case 45:
            var4 = _closure1_slot9;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0013_ip = 47; continue _fun0013 }
case 48:
            var2 = var3;
case 47:
            _closure1_slot26 = var2;
case 46:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function reset() {
        var2 = null;
        _closure1_slot15 = var2;
        _closure1_slot16 = var2;
        var1 = {};
        _closure1_slot17 = var1;
        var4 = _closure1_slot35;
        var1 = undefined;
        var4 = var4.bind(var1)();
        _closure1_slot19 = var4;
        var4 = _closure1_slot36;
        var4 = var4.bind(var1)();
        _closure1_slot20 = var4;
        var4 = {};
        _closure1_slot32 = var4;
        var4 = false;
        _closure1_slot24 = var4;
        _closure1_slot25 = var2;
        var5 = _closure1_slot34;
        var5 = var5.bind(var1)();
        _closure1_slot22 = var5;
        _closure1_slot18 = var4;
        var4 = new Array(0);
        _closure1_slot27 = var4;
        var4 = new Array(0);
        _closure1_slot28 = var4;
        _closure1_slot29 = var2;
        _closure1_slot30 = var2;
        var2 = {};
        _closure1_slot31 = var2;
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.getCountryCodeByAlpha2;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var8 = 8;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.FAMILY_CENTER_REFETCH_COOLDOWN;
    var _closure1_slot11 = var9;
    var9 = var8.FAMILY_CENTER_SUB_ROUTES;
    var _closure1_slot12 = var9;
    var9 = var8.FamilyCenterSubPages;
    var _closure1_slot13 = var9;
    var8 = var8.TeenActionDisplayType;
    var _closure1_slot14 = var8;
    var8 = null;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var8;
    var9 = {};
    var _closure1_slot17 = var9;
    var9 = false;
    var _closure1_slot18 = var9;
    var12 = var12.bind(var1)();
    var _closure1_slot19 = var12;
    var11 = var11.bind(var1)();
    var _closure1_slot20 = var11;
    var _closure1_slot21 = var8;
    var10 = var10.bind(var1)();
    var _closure1_slot22 = var10;
    var _closure1_slot23 = var9;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var8;
    var _closure1_slot26 = var8;
    var9 = new Array(0);
    var _closure1_slot27 = var9;
    var9 = new Array(0);
    var _closure1_slot28 = var9;
    var _closure1_slot29 = var8;
    var _closure1_slot30 = var8;
    var8 = {};
    var _closure1_slot31 = var8;
    var8 = {};
    var _closure1_slot32 = var8;
    var2 = function(arg1) {
        var4 = function FamilyCenterStore() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = _closure1_slot53;
                var1['CONNECTION_OPEN'] = var7;
                var7 = _closure1_slot52;
                var1['CURRENT_USER_UPDATE'] = var7;
                var7 = function CACHE_LOADED_LAZY() {
                    var2 = _closure3_slot0;
                    var1 = var2.loadCache;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['CACHE_LOADED_LAZY'] = var7;
                var7 = _closure1_slot43;
                var1['FAMILY_CENTER_INITIAL_LOAD'] = var7;
                var7 = _closure1_slot42;
                var1['FAMILY_CENTER_FETCH_START'] = var7;
                var7 = _closure1_slot44;
                var1['FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot46;
                var1['FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot47;
                var1['FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot45;
                var1['FAMILY_CENTER_REQUEST_LINK_SUCCESS'] = var7;
                var7 = _closure1_slot48;
                var1['FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS'] = var7;
                var7 = _closure1_slot49;
                var1['FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS'] = var7;
                var7 = _closure1_slot50;
                var1['FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS'] = var7;
                var7 = _closure1_slot51;
                var1['FAMILY_CENTER_HANDLE_TAB_SELECT'] = var7;
                var7 = _closure1_slot54;
                var1['SET_LOCATION_METADATA'] = var7;
                var7 = _closure1_slot55;
                var1['LOGOUT'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot33;
                var1 = var1.bind(var4)();
                if(var1) { _fun0014_ip = 49; continue _fun0014 }
case 36:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0014_ip = 50; continue _fun0014;
case 49:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 50:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot10;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(23);
        var1[0] = var5;
        var5 = {};
        var7 = 'loadCache';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = this;
                var2 = var3.readSnapshot;
                var1 = _closure2_slot0;
                var1 = var1.LATEST_SNAPSHOT_VERSION;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0015_ip = 51; continue _fun0015 }
case 8:
                var5 = _closure1_slot37;
                var4 = var1.linkedUsers;
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var5 = _closure1_slot40;
                var4 = var1.guilds;
                var4 = var5.bind(var3)(var4);
                var4 = _closure1_slot39;
                var2 = var1.teenActivity;
                var2 = var4.bind(var3)(var2);
                var2 = var1.teenActivityTotals;
                var1 = function teenActivityTotalsFromSnapshot(arg1) {
                    var6 = arg1;
                    var5 = var6.reduce;
                    var2 = _closure1_slot36;
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var2 = function(arg1, arg2) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var3 = arg1;
                            var4 = arg2;
                            var2 = var4.split;
                            var1 = ':';
                            var5 = var2.bind(var4)(var1);
                            var4 = _closure1_slot8;
                            var7 = undefined;
                            var2 = 2;
                            var5 = var4.bind(var7)(var5, var2);
                            var2 = 0;
                            var4 = var5[var2];
                            var2 = 1;
                            var6 = var5[var2];
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 13;
                            var1 = var5[var1];
                            var2 = var2.bind(var7)(var1);
                            var1 = var2.displayTypeFromString;
                            var4 = var1.bind(var2)(var4);
                            var1 = var3;
                            if(!(var7 !== var4)) { _fun0016_ip = 52; continue _fun0016 }
case 53:
                            var2 = {};
                            var9 = var2;
                            var8 = var3;
                            var3 = copyDataProperties(var9, var8);
                            var3 = global;
                            var5 = var3.parseInt;
                            var3 = 10;
                            var3 = var5.bind(var7)(var6, var3);
                            var2[var4] = var3;
                            var1 = var2;
case 52:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var2, var4);
                    _closure1_slot20 = var2;
                    return var1;
                };
                var1 = var1.bind(var3)(var2);
case 51:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.LATEST_SNAPSHOT_VERSION;
            var1['version'] = var2;
            var2 = {};
            var4 = global;
            var8 = var4.Object;
            var7 = var8.values;
            var5 = _closure1_slot17;
            var5 = var7.bind(var8)(var5);
            var2['linkedUsers'] = var5;
            var8 = var4.Object;
            var7 = var8.entries;
            var5 = _closure1_slot20;
            var8 = var7.bind(var8)(var5);
            var7 = var8.map;
            var5 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var7 = undefined;
                    var2 = var2 === var7;
                    var5 = undefined;
                    if(var2) { _fun0017_ip = 54; continue _fun0017 }
case 21:
                    var5 = var4;
case 54:
                    var4 = undefined;
                    if(var2) { _fun0017_ip = 55; continue _fun0017 }
case 56:
                    var6 = var3().value;
                    var3 = var1;
                    var3 = var3 === var7;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0017_ip = 55; continue _fun0017 }
case 27:
                    var4 = var6;
                    var2 = var3;
case 55:
                    if(var2) { _fun0017_ip = 57; continue _fun0017 }
case 58:
                    var1.return();
case 57:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ':';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5);
            var2['teenActivityTotals'] = var5;
            var5 = new Array(0);
            var _closure3_slot0 = var5;
            var8 = _closure1_slot19;
            var7 = var8.forEach;
            var6 = function(arg1) {
                var6 = arg1;
                var3 = _closure3_slot0;
                var2 = var3.push;
                var1 = global;
                var5 = var1.Array;
                var4 = var5.from;
                var1 = var6.values;
                var1 = var1.bind(var6)();
                var8 = var4.bind(var5)(var1);
                var1 = new Array(0);
                var7 = 0;
                var9 = var1;
                var4 = arraySpread(var9, var8, var7);
                var9 = var2;
                var8 = var1;
                var7 = var3;
                var1 = apply(var9, var8, var7);
                var1 = undefined;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['teenActivity'] = var5;
            var5 = var4.Object;
            var4 = var5.values;
            var3 = _closure1_slot32;
            var3 = var4.bind(var5)(var3);
            var2['guilds'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSelectedTeenId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLinkedUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLinkTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = _closure1_slot17;
                var1 = arg1;
                var3 = var2[var1];
                var4 = null;
                var2 = var4 == var3;
                var1 = null;
                if(var2) { _fun0018_ip = 59; continue _fun0018 }
case 60:
                var2 = var3.updated_at;
                if(!(var4 == var2)) { _fun0018_ip = 47; continue _fun0018 }
case 28:
                var2 = var3.created_at;
case 47:
                var1 = var2;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getRangeStartTimestamp';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure1_slot16;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0019_ip = 61; continue _fun0019 }
case 23:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.extractTimestamp;
                var2 = _closure1_slot16;
                var1 = var3.bind(var4)(var2);
case 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getActionsForDisplayType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 == var5)) { _fun0020_ip = 56; continue _fun0020 }
case 24:
                var1 = new Array(0);
                _fun0020_ip = 62; continue _fun0020;
case 56:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getTotalForDisplayType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot20;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getLinkCode';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot32;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getSelectedTab';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getStartId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getIsInitialized';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getAreLinkedUsersProcessed';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getUserCountry';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getTopUserActivities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getTopGuildActivities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getTotalSpendAmount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getTotalSpendCurrency';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getPurchaseInfo';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot31;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'canRefetch';
        var5['key'] = var7;
        var6 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = _closure1_slot25;
                var1 = null;
                var1 = var1 === var3;
                if(var1) { _fun0021_ip = 63; continue _fun0021 }
case 23:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.age;
                var3 = _closure1_slot25;
                var3 = var4.bind(var5)(var3);
                var2 = _closure1_slot11;
                var1 = var3 > var2;
case 63:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[22] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var7);
    var7 = 'FamilyCenterStore';
    var2['displayName'] = var7;
    var2['LATEST_SNAPSHOT_VERSION'] = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var17 = var4;
    var2 = new var17[var2](var16);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/FamilyCenterStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();