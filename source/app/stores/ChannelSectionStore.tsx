// app/stores/ChannelSectionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function parseChannelId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot20;
            var5 = undefined;
            var2 = var2.bind(var5)(var6);
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            return var6;
case 8:
            var4 = _closure1_slot14;
            var2 = var4.getGuildId;
            var4 = var2.bind(var4)();
            var7 = var1 == var4;
            var2 = null;
            if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot21;
            var2 = var3.bind(var5)(var6, var4);
case 10:
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function toggleSection(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot29;
            var4 = false;
            var1 = false;
            if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            _closure1_slot29 = var4;
            var1 = true;
case 12:
            var6 = _closure1_slot32;
            var5 = _closure1_slot13;
            var4 = var5.getChannelId;
            var5 = var4.bind(var5)();
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = null;
            var5 = var5 != var4;
            if(!var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = _closure1_slot26;
            var5 = var4 in var6;
case 14:
            if(!var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = _closure1_slot26;
            var3 = delete var3[var4];
            var1 = true;
case 16:
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = var2;
            if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 18:
            var1 = !var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function handlePermissionsChange() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = _closure1_slot26;
            var3 = false;
            var7 = undefined;
            var5 = null;
            var4 = 16;
            var2 = undefined;
            var1 = false;
            for(var8 in var12)
case 21:
            {
                var17 = var3;
                var1 = var17;
case 22:
                var16 = var8;
                var14 = _closure1_slot26;
                var14 = var14[var16];
                var18 = var14.type;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var4];
                var15 = var19.bind(var7)(var15);
                var15 = var15.SidebarType;
                var15 = var15.VIEW_THREAD;
                if(!(var18 !== var15)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var18 = var14.type;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var4];
                var15 = var19.bind(var7)(var15);
                var15 = var15.SidebarType;
                var15 = var15.VIEW_CHANNEL;
                var3 = var17;
                if(var18 !== var15) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                var18 = _closure1_slot10;
                var15 = var18.getChannel;
                var14 = var14.channelId;
                var14 = var15.bind(var18)(var14);
                var15 = var5 != var14;
                if(!var15) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var20 = _closure1_slot12;
                var19 = var20.can;
                var18 = _closure1_slot22;
                var18 = var18.VIEW_CHANNEL;
                var15 = var19.bind(var20)(var18, var14);
case 25:
                var3 = var17;
                var2 = var14;
                if(var15) { _fun0004_ip = 21; continue _fun0004 }
case 27:
                var15 = _closure1_slot26;
                var15 = delete var15[var16];
                var3 = true;
                var2 = var14;
                _fun0004_ip = 21; continue _fun0004;
            }
case 28:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function setIsSearchSidebarOpen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot30;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var4 = _closure1_slot9;
            var3 = var4.hasSearchState;
            var1 = _closure1_slot30;
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot29;
            if(!(var3 !== var1)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            _closure1_slot29 = var1;
            var1 = undefined;
            return var1;
case 31:
            var1 = false;
            return var1;
case 29:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function setSelectedSearchContextId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot30;
            if(!(var2 !== var3)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            _closure1_slot30 = var2;
            var2 = _closure1_slot35;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 33:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var8 = true;
    var4['value'] = var8;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.FAVORITES;
    var _closure1_slot16 = var9;
    var9 = var4.SearchTypes;
    var _closure1_slot17 = var9;
    var9 = var4.ChannelSections;
    var _closure1_slot18 = var9;
    var4 = var4.ComponentActions;
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.isStaticChannelRoute;
    var _closure1_slot20 = var9;
    var4 = var4.buildGuildStaticChannelId;
    var _closure1_slot21 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot22 = var4;
    var4 = false;
    var _closure1_slot23 = var4;
    var _closure1_slot24 = var4;
    var _closure1_slot25 = var8;
    var8 = {};
    var _closure1_slot26 = var8;
    var8 = {};
    var _closure1_slot27 = var8;
    var _closure1_slot28 = var4;
    var _closure1_slot29 = var4;
    var4 = null;
    var _closure1_slot30 = var4;
    var4 = 21;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function ChannelSectionStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot31;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 35; continue _fun0007 }
case 11:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 36; continue _fun0007;
case 35:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 36:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var6 = this;
                var3 = null;
                if(!(var3 != var1)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                var2 = var1.isMembersOpen;
                var4 = var3 != var2;
                if(!var4) { _fun0008_ip = 8; continue _fun0008 }
case 39:
                var4 = var2;
case 8:
                _closure1_slot23 = var4;
                var5 = var1.isSummariesOpen;
                var4 = var3 != var5;
                if(!var4) { _fun0008_ip = 11; continue _fun0008 }
case 40:
                var4 = var5;
case 11:
                _closure1_slot24 = var4;
                var5 = var1.isProfileOpen;
                var4 = var3 == var5;
                if(var4) { _fun0008_ip = 41; continue _fun0008 }
case 17:
                var4 = var5;
case 41:
                _closure1_slot25 = var4;
                var4 = var1.sidebars;
                if(!(var3 == var4)) { _fun0008_ip = 18; continue _fun0008 }
case 42:
                var4 = {};
case 18:
                _closure1_slot26 = var4;
                var1 = var1.guildSidebars;
                if(!(var3 == var1)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                var1 = {};
case 43:
                _closure1_slot27 = var1;
case 37:
                var4 = var6.syncWith;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot35;
                var2 = var4.bind(var6)(var3, var2);
                var4 = var6.syncWith;
                var2 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot34;
                var2 = var4.bind(var6)(var3, var2);
                var5 = var6.waitFor;
                var11 = _closure1_slot9;
                var10 = _closure1_slot11;
                var9 = _closure1_slot10;
                var8 = _closure1_slot8;
                var12 = var6;
                var1 = var12[var5](var11, var10, var9, var8, var7);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot23;
            var1['isMembersOpen'] = var3;
            var3 = _closure1_slot24;
            var1['isSummariesOpen'] = var3;
            var3 = _closure1_slot25;
            var1['isProfileOpen'] = var3;
            var3 = _closure1_slot26;
            var1['sidebars'] = var3;
            var2 = _closure1_slot27;
            var1['guildSidebars'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSection';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure1_slot29;
                if(var2) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                var4 = _closure1_slot32;
                var3 = undefined;
                var2 = arg1;
                var4 = var4.bind(var3)(var2);
                var3 = null;
                if(!(var3 != var4)) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                var2 = _closure1_slot26;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0009_ip = 47; continue _fun0009 }
case 32:
                var2 = arg2;
                if(!var2) { _fun0009_ip = 48; continue _fun0009 }
case 40:
                var2 = _closure1_slot25;
                if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 48:
                var2 = _closure1_slot24;
                if(var2) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                var2 = _closure1_slot23;
                var3 = _closure1_slot18;
                if(var2) { _fun0009_ip = 19; continue _fun0009 }
case 51:
                var2 = var3.NONE;
                _fun0009_ip = 18; continue _fun0009;
case 19:
                var2 = var3.MEMBERS;
case 18:
                _fun0009_ip = 52; continue _fun0009;
case 49:
                var3 = _closure1_slot18;
                var2 = var3.SUMMARIES;
case 52:
                _fun0009_ip = 53; continue _fun0009;
case 44:
                var3 = _closure1_slot18;
                var2 = var3.PROFILE;
case 53:
                _fun0009_ip = 54; continue _fun0009;
case 47:
                var3 = _closure1_slot18;
                var2 = var3.SIDEBAR_CHAT;
case 54:
                return var2;
case 45:
                var1 = _closure1_slot18;
                var1 = var1.SEARCH;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSidebarState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = _closure1_slot32;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var4 = null;
                var4 = var4 == var3;
                if(var4) { _fun0010_ip = 55; continue _fun0010 }
case 9:
                var2 = _closure1_slot26;
                var1 = var2[var3];
case 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGuildSidebarState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0011_ip = 39; continue _fun0011 }
case 34:
                var2 = _closure1_slot27;
                var1 = var2[var3];
case 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCurrentSidebarChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot32;
                var7 = undefined;
                var1 = arg1;
                var4 = var2.bind(var7)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0012_ip = 56; continue _fun0012 }
case 9:
                var2 = _closure1_slot29;
                if(var2) { _fun0012_ip = 57; continue _fun0012 }
case 58:
                var2 = _closure1_slot26;
                var4 = var2[var4];
                var5 = var1 == var4;
                var2 = null;
                if(var5) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 16;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.SidebarType;
                var5 = var5.VIEW_THREAD;
                if(!(var6 !== var5)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.SidebarType;
                var5 = var5.VIEW_CHANNEL;
                if(!(var6 !== var5)) { _fun0012_ip = 61; continue _fun0012 }
case 63:
                var6 = var4.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var5.bind(var7)(var3);
                var3 = var3.SidebarType;
                var5 = var3.VIEW_MOD_REPORT;
                var3 = null;
                if(!(var6 === var5)) { _fun0012_ip = 64; continue _fun0012 }
case 61:
                var3 = var4.channelId;
case 64:
                var2 = var3;
case 59:
                return var2;
case 57:
                return var1;
case 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCurrentSidebarMessageId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = _closure1_slot32;
                var4 = undefined;
                var1 = arg1;
                var5 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0013_ip = 65; continue _fun0013 }
case 9:
                var2 = _closure1_slot29;
                if(var2) { _fun0013_ip = 66; continue _fun0013 }
case 58:
                var2 = _closure1_slot26;
                var5 = var2[var5];
                var6 = var1 == var5;
                var2 = null;
                if(var6) { _fun0013_ip = 67; continue _fun0013 }
case 60:
                var7 = var5.type;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 16;
                var6 = var6[var8];
                var6 = var9.bind(var4)(var6);
                var6 = var6.SidebarType;
                var6 = var6.VIEW_THREAD;
                if(!(var7 !== var6)) { _fun0013_ip = 61; continue _fun0013 }
case 62:
                var7 = var5.type;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var9.bind(var4)(var6);
                var6 = var6.SidebarType;
                var6 = var6.VIEW_CHANNEL;
                if(!(var7 !== var6)) { _fun0013_ip = 61; continue _fun0013 }
case 63:
                var7 = var5.type;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var4)(var3);
                var3 = var3.SidebarType;
                var6 = var3.VIEW_MOD_REPORT;
                var3 = null;
                if(!(var7 === var6)) { _fun0013_ip = 68; continue _fun0013 }
case 61:
                var5 = var5.details;
                var6 = var1 == var5;
                var4 = undefined;
                if(var6) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                var4 = var5.initialMessageId;
case 69:
                var3 = var4;
case 68:
                var2 = var3;
case 67:
                return var2;
case 66:
                return var1;
case 65:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var8);
    var4 = 'ChannelSectionStore';
    var9['displayName'] = var4;
    var4 = 'ChannelSectionStore2';
    var9['persistKey'] = var4;
    var4 = 22;
    var4 = var7[var4];
    var13 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleConnectionOpen() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = true;
            _closure1_slot28 = var2;
            var2 = _closure1_slot30;
            var3 = null;
            var2 = var3 != var2;
            if(!var2) { _fun0014_ip = 71; continue _fun0014 }
case 39:
            var7 = _closure1_slot30;
            var5 = var3 == var7;
            var4 = null;
            if(var5) { _fun0014_ip = 72; continue _fun0014 }
case 73:
            var5 = _closure1_slot17;
            var5 = var5.DMS;
            if(!(var7 !== var5)) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            var5 = _closure1_slot16;
            if(!(var7 !== var5)) { _fun0014_ip = 45; continue _fun0014 }
case 76:
            var6 = _closure1_slot11;
            var5 = var6.getGuild;
            var5 = var5.bind(var6)(var7);
            if(!(var3 == var5)) { _fun0014_ip = 47; continue _fun0014 }
case 16:
            var6 = _closure1_slot10;
            var5 = var6.getChannel;
            var5 = var5.bind(var6)(var7);
            var5 = var3 != var5;
            var3 = null;
            if(!var5) { _fun0014_ip = 53; continue _fun0014 }
case 44:
            var5 = _closure1_slot17;
            var3 = var5.CHANNEL;
case 53:
            _fun0014_ip = 54; continue _fun0014;
case 47:
            var5 = _closure1_slot17;
            var3 = var5.GUILD;
case 54:
            _fun0014_ip = 63; continue _fun0014;
case 45:
            var5 = _closure1_slot17;
            var3 = var5.FAVORITES;
case 63:
            _fun0014_ip = 77; continue _fun0014;
case 74:
            var5 = _closure1_slot17;
            var3 = var5.DMS;
case 77:
            var4 = var3;
case 72:
            var3 = _closure1_slot17;
            var3 = var3.CHANNEL;
            var2 = var4 === var3;
case 71:
            if(!var2) { _fun0014_ip = 78; continue _fun0014 }
case 79:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 19;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getIsSearchDesktopXDMExperimentEnabled;
            var3 = {};
            var6 = 'SearchStore_handleConnectionOpen';
            var3['location'] = var6;
            var2 = var4.bind(var5)(var3);
case 78:
            if(!var2) { _fun0014_ip = 80; continue _fun0014 }
case 81:
            var3 = _closure1_slot36;
            var1 = _closure1_slot17;
            var2 = var1.DMS;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 80:
            var1 = undefined;
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var5;
    var5 = function handleChannelToggleMembersSection() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = _closure1_slot29;
            if(!var1) { _fun0015_ip = 82; continue _fun0015 }
case 46:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var4 = var1.ComponentDispatch;
            var2 = var4.dispatch;
            var1 = _closure1_slot19;
            var1 = var1.SEARCH_RESULTS_CLOSE;
            var1 = var2.bind(var4)(var1);
case 82:
            var1 = _closure1_slot24;
            if(!var1) { _fun0015_ip = 83; continue _fun0015 }
case 14:
            var4 = _closure1_slot33;
            var2 = _closure1_slot24;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            _closure1_slot24 = var1;
case 83:
            var4 = _closure1_slot33;
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot23 = var2;
            return var1;
        }
    };
    var4['CHANNEL_TOGGLE_MEMBERS_SECTION'] = var5;
    var5 = function handleUserProfileSidebarToggleSection() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = _closure1_slot25;
            if(var1) { _fun0016_ip = 82; continue _fun0016 }
case 46:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var4 = var1.ComponentDispatch;
            var2 = var4.dispatch;
            var1 = _closure1_slot19;
            var1 = var1.SEARCH_RESULTS_CLOSE;
            var1 = var2.bind(var4)(var1);
case 82:
            var4 = _closure1_slot33;
            var2 = _closure1_slot25;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot25 = var2;
            return var1;
        }
    };
    var4['USER_PROFILE_SIDEBAR_TOGGLE_SECTION'] = var5;
    var5 = function handleChannelToggleSummariesSection() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = _closure1_slot23;
            if(!var1) { _fun0017_ip = 84; continue _fun0017 }
case 46:
            var4 = _closure1_slot33;
            var2 = _closure1_slot23;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            _closure1_slot23 = var1;
case 84:
            var4 = _closure1_slot33;
            var2 = _closure1_slot24;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot24 = var2;
            return var1;
        }
    };
    var4['CHANNEL_TOGGLE_SUMMARIES_SECTION'] = var5;
    var5 = function handleSidebarViewChannel(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var8 = var1.sidebarType;
            var7 = var1.baseChannelId;
            var5 = var1.channelId;
            var3 = var1.details;
            var1 = false;
            _closure1_slot29 = var1;
            var4 = _closure1_slot32;
            var9 = undefined;
            var4 = var4.bind(var9)(var7);
            var6 = null;
            if(!(var6 != var4)) { _fun0018_ip = 85; continue _fun0018 }
case 75:
            var6 = {};
            var6['type'] = var8;
            var6['channelId'] = var5;
            var6['details'] = var3;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var3 = var10[var3];
            var3 = var5.bind(var9)(var3);
            var3 = var3.SidebarType;
            var5 = var3.VIEW_MOD_REPORT;
            var3 = var6;
            if(!(var8 === var5)) { _fun0018_ip = 86; continue _fun0018 }
case 87:
            var5 = {};
            var12 = var5;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'baseChannelId';
            var5[var6] = var7;
            var3 = var5;
case 86:
            var2 = _closure1_slot26;
            var2[var4] = var3;
            var2 = true;
            return var2;
case 85:
            return var1;
        }
    };
    var4['SIDEBAR_VIEW_CHANNEL'] = var5;
    var5 = function handleSidebarViewGuild(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var7 = var1.sidebarType;
            var4 = var1.guildId;
            var6 = var1.baseChannelId;
            var5 = var1.details;
            var1 = false;
            _closure1_slot29 = var1;
            var3 = _closure1_slot32;
            var1 = undefined;
            var6 = var3.bind(var1)(var6);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0019_ip = 42; continue _fun0019 }
case 48:
            var3 = _closure1_slot27;
            var2 = {};
            var2['type'] = var7;
            var2['baseChannelId'] = var6;
            var2['guildId'] = var4;
            var2['details'] = var5;
            var3[var4] = var2;
            var1 = true;
case 42:
            return var1;
        }
    };
    var4['SIDEBAR_VIEW_GUILD'] = var5;
    var5 = function handleCreateThread(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var7 = var1.parentChannelId;
            var6 = var1.parentMessageId;
            var5 = var1.location;
            var1 = false;
            _closure1_slot29 = var1;
            var2 = _closure1_slot32;
            var1 = undefined;
            var4 = var2.bind(var1)(var7);
            var2 = null;
            if(!(var2 != var4)) { _fun0020_ip = 87; continue _fun0020 }
case 88:
            var3 = _closure1_slot26;
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 16;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.SidebarType;
            var8 = var8.CREATE_THREAD;
            var2['type'] = var8;
            var2['parentChannelId'] = var7;
            var2['parentMessageId'] = var6;
            var2['location'] = var5;
            var3[var4] = var2;
case 87:
            return var1;
        }
    };
    var4['SIDEBAR_CREATE_THREAD'] = var5;
    var5 = function handleCloseSidebar(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var4 = var1.baseChannelId;
            var3 = _closure1_slot32;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0021_ip = 89; continue _fun0021 }
case 84:
            var2 = _closure1_slot26;
            var2 = delete var2[var3];
case 89:
            return var1;
        }
    };
    var4['SIDEBAR_CLOSE'] = var5;
    var5 = function handleGuildCloseSidebar(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = _closure1_slot27;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0022_ip = 73; continue _fun0022 }
case 8:
            var2 = _closure1_slot27;
            var2 = delete var2[var3];
            var1 = true;
case 73:
            return var1;
        }
    };
    var4['SIDEBAR_CLOSE_GUILD'] = var5;
    var5 = function handleChannelDelete(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.id;
            var2 = _closure1_slot26;
            var3 = var3 in var2;
            var2 = _closure1_slot26;
            if(var3) { _fun0023_ip = 90; continue _fun0023 }
case 55:
            var12 = var2;
            var4 = false;
            var7 = 16;
            var6 = undefined;
            var5 = null;
            var3 = false;
            for(var9 in var12)
case 60:
            {
                var3 = var4;
case 17:
                var16 = var9;
                var15 = _closure1_slot26;
                var17 = var15[var16];
                var15 = var5 != var17;
                if(!var15) { _fun0023_ip = 91; continue _fun0023 }
case 92:
                var19 = var17.type;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var18 = var18[var7];
                var18 = var20.bind(var6)(var18);
                var18 = var18.SidebarType;
                var18 = var18.VIEW_CHANNEL;
                var15 = var19 === var18;
case 91:
                if(!var15) { _fun0023_ip = 93; continue _fun0023 }
case 94:
                var18 = var17.channelId;
                var17 = var1.id;
                var15 = var18 === var17;
case 93:
                if(!var15) { _fun0023_ip = 60; continue _fun0023 }
case 95:
                var15 = _closure1_slot26;
                var15 = delete var15[var16];
                var4 = true;
                _fun0023_ip = 60; continue _fun0023;
            }
case 96:
            return var3;
case 90:
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = true;
            return var1;
        }
    };
    var4['CHANNEL_DELETE'] = var5;
    var5 = function handleChannelSelect(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = var1.channelId;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var5 = var5.isMobile;
            if(!var5) { _fun0024_ip = 11; continue _fun0024 }
case 97:
            var5 = _closure1_slot23;
case 11:
            if(!var5) { _fun0024_ip = 98; continue _fun0024 }
case 29:
            var5 = false;
            _closure1_slot23 = var5;
            _closure1_slot24 = var5;
case 98:
            var5 = null;
            if(!(var5 == var3)) { _fun0024_ip = 99; continue _fun0024 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 19;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.getIsSearchDesktopXDMExperimentEnabled;
            var5 = {};
            var8 = 'ChannelSectionStore_handleChannelSelect';
            var5['location'] = var8;
            var8 = _closure1_slot28;
            var5['autoTrackExposure'] = var8;
            var6 = var6.bind(var7)(var5);
            var5 = _closure1_slot36;
            if(var6) { _fun0024_ip = 100; continue _fun0024 }
case 101:
            var4 = var5.bind(var1)(var4);
            _fun0024_ip = 102; continue _fun0024;
case 100:
            var4 = _closure1_slot17;
            var4 = var4.DMS;
            var4 = var5.bind(var1)(var4);
            _fun0024_ip = 102; continue _fun0024;
case 99:
            var2 = _closure1_slot36;
            var2 = var2.bind(var1)(var3);
case 102:
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var5;
    var5 = function handleThreadCreate(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channel;
            var4 = var5.ownerId;
            var2 = _closure1_slot15;
            var1 = var2.getCurrentUser;
            var7 = var1.bind(var2)();
            var2 = null;
            var8 = var2 == var7;
            var1 = undefined;
            var3 = undefined;
            if(var8) { _fun0025_ip = 40; continue _fun0025 }
case 103:
            var3 = var7.id;
case 40:
            if(!(var4 !== var3)) { _fun0025_ip = 104; continue _fun0025 }
case 48:
            var4 = _closure1_slot26;
            var3 = var5.parent_id;
            var3 = var4[var3];
            var2 = var2 != var3;
            if(!var2) { _fun0025_ip = 105; continue _fun0025 }
case 106:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var4 = var9[var4];
            var4 = var8.bind(var1)(var4);
            var4 = var4.SidebarType;
            var4 = var4.CREATE_THREAD;
            var2 = var7 === var4;
case 105:
            if(!var2) { _fun0025_ip = 107; continue _fun0025 }
case 108:
            var4 = var3.parentMessageId;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 18;
            var3 = var8[var3];
            var8 = var7.bind(var1)(var3);
            var7 = var8.castChannelIdAsMessageId;
            var3 = var5.id;
            var3 = var7.bind(var8)(var3);
            var2 = var4 === var3;
case 107:
            if(!var2) { _fun0025_ip = 109; continue _fun0025 }
case 110:
            var4 = _closure1_slot26;
            var3 = var5.parent_id;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.SidebarType;
            var6 = var6.VIEW_THREAD;
            var2['type'] = var6;
            var5 = var5.id;
            var2['channelId'] = var5;
            var4[var3] = var2;
case 109:
            return var1;
case 104:
            var1 = false;
            return var1;
        }
    };
    var4['THREAD_CREATE'] = var5;
    var5 = function handleThreadDelete(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = _closure1_slot26;
            var1 = var2.parent_id;
            var4 = var4[var1];
            var1 = null;
            if(!(var1 != var4)) { _fun0026_ip = 111; continue _fun0026 }
case 21:
            var6 = var4.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var5 = var5.SidebarType;
            var5 = var5.VIEW_THREAD;
            if(!(var6 === var5)) { _fun0026_ip = 111; continue _fun0026 }
case 4:
            var5 = var4.channelId;
            var4 = var2.id;
            if(!(var5 === var4)) { _fun0026_ip = 111; continue _fun0026 }
case 112:
            var3 = _closure1_slot26;
            var2 = var2.parent_id;
            var2 = delete var3[var2];
            return var1;
case 111:
            var1 = false;
            return var1;
        }
    };
    var4['THREAD_DELETE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/ChannelSectionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = 'message_requests';
    var3['MESSAGE_REQUESTS_BASE_CHANNEL_ID'] = var4;
    var2 = function isViewChannelSidebar(arg1) {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 16;
        var3 = var5[var1];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var3 = var3.SidebarType;
        var6 = var3.VIEW_CHANNEL;
        var3 = new Array(4);
        var3[0] = var6;
        var6 = var5[var1];
        var6 = var4.bind(var2)(var6);
        var6 = var6.SidebarType;
        var6 = var6.VIEW_THREAD;
        var3[1] = var6;
        var6 = var5[var1];
        var6 = var4.bind(var2)(var6);
        var6 = var6.SidebarType;
        var6 = var6.VIEW_MESSAGE_REQUEST;
        var3[2] = var6;
        var1 = var5[var1];
        var1 = var4.bind(var2)(var1);
        var1 = var1.SidebarType;
        var1 = var1.VIEW_MOD_REPORT;
        var3[3] = var1;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var1.type;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isViewChannelSidebar'] = var2;
    return var1;
})();