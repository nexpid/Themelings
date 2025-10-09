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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function parseChannelId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot18;
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
            var3 = _closure1_slot19;
            var2 = var3.bind(var5)(var6, var4);
case 10:
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function toggleSection(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot26;
            var4 = false;
            var1 = false;
            if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            _closure1_slot26 = var4;
            var1 = true;
case 12:
            var6 = _closure1_slot29;
            var5 = _closure1_slot13;
            var4 = var5.getChannelId;
            var5 = var4.bind(var5)();
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = null;
            var5 = var5 != var4;
            if(!var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = _closure1_slot24;
            var5 = var4 in var6;
case 14:
            if(!var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = _closure1_slot24;
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
    var _closure1_slot30 = var1;
    var1 = function handlePermissionsChange() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = _closure1_slot24;
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
                var14 = _closure1_slot24;
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
                var18 = _closure1_slot20;
                var18 = var18.VIEW_CHANNEL;
                var15 = var19.bind(var20)(var18, var14);
case 25:
                var3 = var17;
                var2 = var14;
                if(var15) { _fun0004_ip = 21; continue _fun0004 }
case 27:
                var15 = _closure1_slot24;
                var15 = delete var15[var16];
                var3 = true;
                var2 = var14;
                _fun0004_ip = 21; continue _fun0004;
            }
case 28:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function setIsSearchSidebarOpen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot27;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var5 = _closure1_slot9;
            var4 = var5.hasSearchState;
            var3 = _closure1_slot27;
            var1 = var4.bind(var5)(var3);
case 29:
            var3 = _closure1_slot26;
            if(!(var1 !== var3)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            _closure1_slot26 = var1;
            var1 = undefined;
            return var1;
case 31:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
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
    var9 = var4.ChannelSections;
    var _closure1_slot16 = var9;
    var4 = var4.ComponentActions;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.isStaticChannelRoute;
    var _closure1_slot18 = var9;
    var4 = var4.buildGuildStaticChannelId;
    var _closure1_slot19 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot20 = var4;
    var4 = false;
    var _closure1_slot21 = var4;
    var _closure1_slot22 = var4;
    var _closure1_slot23 = var8;
    var8 = {};
    var _closure1_slot24 = var8;
    var8 = {};
    var _closure1_slot25 = var8;
    var _closure1_slot26 = var4;
    var4 = null;
    var _closure1_slot27 = var4;
    var4 = 20;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function ChannelSectionStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot28;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 33; continue _fun0006 }
case 11:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 34; continue _fun0006;
case 33:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 34:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var6 = this;
                var3 = null;
                if(!(var3 != var1)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                var2 = var1.isMembersOpen;
                var4 = var3 != var2;
                if(!var4) { _fun0007_ip = 8; continue _fun0007 }
case 37:
                var4 = var2;
case 8:
                _closure1_slot21 = var4;
                var5 = var1.isSummariesOpen;
                var4 = var3 != var5;
                if(!var4) { _fun0007_ip = 11; continue _fun0007 }
case 38:
                var4 = var5;
case 11:
                _closure1_slot22 = var4;
                var5 = var1.isProfileOpen;
                var4 = var3 == var5;
                if(var4) { _fun0007_ip = 39; continue _fun0007 }
case 17:
                var4 = var5;
case 39:
                _closure1_slot23 = var4;
                var4 = var1.sidebars;
                if(!(var3 == var4)) { _fun0007_ip = 18; continue _fun0007 }
case 40:
                var4 = {};
case 18:
                _closure1_slot24 = var4;
                var1 = var1.guildSidebars;
                if(!(var3 == var1)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var1 = {};
case 41:
                _closure1_slot25 = var1;
case 35:
                var4 = var6.syncWith;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot32;
                var2 = var4.bind(var6)(var3, var2);
                var4 = var6.syncWith;
                var2 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot31;
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
            var3 = _closure1_slot21;
            var1['isMembersOpen'] = var3;
            var3 = _closure1_slot22;
            var1['isSummariesOpen'] = var3;
            var3 = _closure1_slot23;
            var1['isProfileOpen'] = var3;
            var3 = _closure1_slot24;
            var1['sidebars'] = var3;
            var2 = _closure1_slot25;
            var1['guildSidebars'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSection';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot26;
                if(var2) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                var4 = _closure1_slot29;
                var3 = undefined;
                var2 = arg1;
                var4 = var4.bind(var3)(var2);
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                var2 = _closure1_slot24;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0008_ip = 47; continue _fun0008 }
case 45:
                var2 = arg2;
                if(!var2) { _fun0008_ip = 48; continue _fun0008 }
case 38:
                var2 = _closure1_slot23;
                if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 48:
                var2 = _closure1_slot22;
                if(var2) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var2 = _closure1_slot21;
                var3 = _closure1_slot16;
                if(var2) { _fun0008_ip = 19; continue _fun0008 }
case 51:
                var2 = var3.NONE;
                _fun0008_ip = 18; continue _fun0008;
case 19:
                var2 = var3.MEMBERS;
case 18:
                _fun0008_ip = 52; continue _fun0008;
case 49:
                var3 = _closure1_slot16;
                var2 = var3.SUMMARIES;
case 52:
                _fun0008_ip = 53; continue _fun0008;
case 42:
                var3 = _closure1_slot16;
                var2 = var3.PROFILE;
case 53:
                _fun0008_ip = 54; continue _fun0008;
case 47:
                var3 = _closure1_slot16;
                var2 = var3.SIDEBAR_CHAT;
case 54:
                return var2;
case 43:
                var1 = _closure1_slot16;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure1_slot29;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var4 = null;
                var4 = var4 == var3;
                if(var4) { _fun0009_ip = 55; continue _fun0009 }
case 9:
                var2 = _closure1_slot24;
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0010_ip = 37; continue _fun0010 }
case 56:
                var2 = _closure1_slot25;
                var1 = var2[var3];
case 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCurrentSidebarChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot29;
                var7 = undefined;
                var1 = arg1;
                var4 = var2.bind(var7)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0011_ip = 57; continue _fun0011 }
case 9:
                var2 = _closure1_slot26;
                if(var2) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                var2 = _closure1_slot24;
                var4 = var2[var4];
                var5 = var1 == var4;
                var2 = null;
                if(var5) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 16;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.SidebarType;
                var5 = var5.VIEW_THREAD;
                if(!(var6 !== var5)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.SidebarType;
                var5 = var5.VIEW_CHANNEL;
                if(!(var6 !== var5)) { _fun0011_ip = 62; continue _fun0011 }
case 64:
                var6 = var4.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var5.bind(var7)(var3);
                var3 = var3.SidebarType;
                var5 = var3.VIEW_MOD_REPORT;
                var3 = null;
                if(!(var6 === var5)) { _fun0011_ip = 65; continue _fun0011 }
case 62:
                var3 = var4.channelId;
case 65:
                var2 = var3;
case 60:
                return var2;
case 58:
                return var1;
case 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCurrentSidebarMessageId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot29;
                var4 = undefined;
                var1 = arg1;
                var5 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0012_ip = 66; continue _fun0012 }
case 9:
                var2 = _closure1_slot26;
                if(var2) { _fun0012_ip = 67; continue _fun0012 }
case 59:
                var2 = _closure1_slot24;
                var5 = var2[var5];
                var6 = var1 == var5;
                var2 = null;
                if(var6) { _fun0012_ip = 68; continue _fun0012 }
case 61:
                var7 = var5.type;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 16;
                var6 = var6[var8];
                var6 = var9.bind(var4)(var6);
                var6 = var6.SidebarType;
                var6 = var6.VIEW_THREAD;
                if(!(var7 !== var6)) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                var7 = var5.type;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var9.bind(var4)(var6);
                var6 = var6.SidebarType;
                var6 = var6.VIEW_CHANNEL;
                if(!(var7 !== var6)) { _fun0012_ip = 62; continue _fun0012 }
case 64:
                var7 = var5.type;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var4)(var3);
                var3 = var3.SidebarType;
                var6 = var3.VIEW_MOD_REPORT;
                var3 = null;
                if(!(var7 === var6)) { _fun0012_ip = 69; continue _fun0012 }
case 62:
                var5 = var5.details;
                var6 = var1 == var5;
                var4 = undefined;
                if(var6) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                var4 = var5.initialMessageId;
case 70:
                var3 = var4;
case 69:
                var2 = var3;
case 68:
                return var2;
case 67:
                return var1;
case 66:
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
    var4 = 21;
    var4 = var7[var4];
    var13 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleSetSelectedSearchContext(arg1) {
        var1 = arg1;
        var2 = var1.searchContextId;
        _closure1_slot27 = var2;
        var2 = _closure1_slot32;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var4['SIDEBAR_SET_SELECTED_SEARCH_CONTEXT'] = var5;
    var5 = function handleChannelToggleMembersSection() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = _closure1_slot26;
            if(!var1) { _fun0013_ip = 72; continue _fun0013 }
case 44:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var4 = var1.ComponentDispatch;
            var2 = var4.dispatch;
            var1 = _closure1_slot17;
            var1 = var1.SEARCH_RESULTS_CLOSE;
            var1 = var2.bind(var4)(var1);
case 72:
            var1 = _closure1_slot22;
            if(!var1) { _fun0013_ip = 73; continue _fun0013 }
case 14:
            var4 = _closure1_slot30;
            var2 = _closure1_slot22;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            _closure1_slot22 = var1;
case 73:
            var4 = _closure1_slot30;
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot21 = var2;
            return var1;
        }
    };
    var4['CHANNEL_TOGGLE_MEMBERS_SECTION'] = var5;
    var5 = function handleUserProfileSidebarToggleSection() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = _closure1_slot23;
            if(var1) { _fun0014_ip = 72; continue _fun0014 }
case 44:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var4 = var1.ComponentDispatch;
            var2 = var4.dispatch;
            var1 = _closure1_slot17;
            var1 = var1.SEARCH_RESULTS_CLOSE;
            var1 = var2.bind(var4)(var1);
case 72:
            var4 = _closure1_slot30;
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot23 = var2;
            return var1;
        }
    };
    var4['USER_PROFILE_SIDEBAR_TOGGLE_SECTION'] = var5;
    var5 = function handleChannelToggleSummariesSection() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = _closure1_slot21;
            if(!var1) { _fun0015_ip = 74; continue _fun0015 }
case 44:
            var4 = _closure1_slot30;
            var2 = _closure1_slot21;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            _closure1_slot21 = var1;
case 74:
            var4 = _closure1_slot30;
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot22 = var2;
            return var1;
        }
    };
    var4['CHANNEL_TOGGLE_SUMMARIES_SECTION'] = var5;
    var5 = function handleSidebarViewChannel(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var8 = var1.sidebarType;
            var7 = var1.baseChannelId;
            var5 = var1.channelId;
            var3 = var1.details;
            var1 = false;
            _closure1_slot26 = var1;
            var4 = _closure1_slot29;
            var9 = undefined;
            var4 = var4.bind(var9)(var7);
            var6 = null;
            if(!(var6 != var4)) { _fun0016_ip = 75; continue _fun0016 }
case 76:
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
            if(!(var8 === var5)) { _fun0016_ip = 77; continue _fun0016 }
case 78:
            var5 = {};
            var12 = var5;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'baseChannelId';
            var5[var6] = var7;
            var3 = var5;
case 77:
            var2 = _closure1_slot24;
            var2[var4] = var3;
            var2 = true;
            return var2;
case 75:
            return var1;
        }
    };
    var4['SIDEBAR_VIEW_CHANNEL'] = var5;
    var5 = function handleSidebarViewGuild(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var7 = var1.sidebarType;
            var4 = var1.guildId;
            var6 = var1.baseChannelId;
            var5 = var1.details;
            var1 = false;
            _closure1_slot26 = var1;
            var3 = _closure1_slot29;
            var1 = undefined;
            var6 = var3.bind(var1)(var6);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0017_ip = 40; continue _fun0017 }
case 48:
            var3 = _closure1_slot25;
            var2 = {};
            var2['type'] = var7;
            var2['baseChannelId'] = var6;
            var2['guildId'] = var4;
            var2['details'] = var5;
            var3[var4] = var2;
            var1 = true;
case 40:
            return var1;
        }
    };
    var4['SIDEBAR_VIEW_GUILD'] = var5;
    var5 = function handleCreateThread(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var7 = var1.parentChannelId;
            var6 = var1.parentMessageId;
            var5 = var1.location;
            var1 = false;
            _closure1_slot26 = var1;
            var2 = _closure1_slot29;
            var1 = undefined;
            var4 = var2.bind(var1)(var7);
            var2 = null;
            if(!(var2 != var4)) { _fun0018_ip = 78; continue _fun0018 }
case 79:
            var3 = _closure1_slot24;
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
case 78:
            return var1;
        }
    };
    var4['SIDEBAR_CREATE_THREAD'] = var5;
    var5 = function handleCloseSidebar(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var4 = var1.baseChannelId;
            var3 = _closure1_slot29;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0019_ip = 29; continue _fun0019 }
case 74:
            var2 = _closure1_slot24;
            var2 = delete var2[var3];
case 29:
            return var1;
        }
    };
    var4['SIDEBAR_CLOSE'] = var5;
    var5 = function handleGuildCloseSidebar(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = _closure1_slot25;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0020_ip = 80; continue _fun0020 }
case 8:
            var2 = _closure1_slot25;
            var2 = delete var2[var3];
            var1 = true;
case 80:
            return var1;
        }
    };
    var4['SIDEBAR_CLOSE_GUILD'] = var5;
    var5 = function handleChannelDelete(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.id;
            var2 = _closure1_slot24;
            var3 = var3 in var2;
            var2 = _closure1_slot24;
            if(var3) { _fun0021_ip = 81; continue _fun0021 }
case 55:
            var12 = var2;
            var4 = false;
            var7 = 16;
            var6 = undefined;
            var5 = null;
            var3 = false;
            for(var9 in var12)
case 61:
            {
                var3 = var4;
case 17:
                var16 = var9;
                var15 = _closure1_slot24;
                var17 = var15[var16];
                var15 = var5 != var17;
                if(!var15) { _fun0021_ip = 82; continue _fun0021 }
case 83:
                var19 = var17.type;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var18 = var18[var7];
                var18 = var20.bind(var6)(var18);
                var18 = var18.SidebarType;
                var18 = var18.VIEW_CHANNEL;
                var15 = var19 === var18;
case 82:
                if(!var15) { _fun0021_ip = 84; continue _fun0021 }
case 85:
                var18 = var17.channelId;
                var17 = var1.id;
                var15 = var18 === var17;
case 84:
                if(!var15) { _fun0021_ip = 61; continue _fun0021 }
case 86:
                var15 = _closure1_slot24;
                var15 = delete var15[var16];
                var4 = true;
                _fun0021_ip = 61; continue _fun0021;
            }
case 87:
            return var3;
case 81:
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = true;
            return var1;
        }
    };
    var4['CHANNEL_DELETE'] = var5;
    var5 = function handleChannelSelect() {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.isMobile;
            if(!var2) { _fun0022_ip = 80; continue _fun0022 }
case 55:
            var2 = _closure1_slot21;
case 80:
            if(!var2) { _fun0022_ip = 11; continue _fun0022 }
case 88:
            var2 = false;
            _closure1_slot21 = var2;
            _closure1_slot22 = var2;
case 11:
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var5;
    var5 = function handleThreadCreate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
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
            if(var8) { _fun0023_ip = 38; continue _fun0023 }
case 89:
            var3 = var7.id;
case 38:
            if(!(var4 !== var3)) { _fun0023_ip = 90; continue _fun0023 }
case 48:
            var4 = _closure1_slot24;
            var3 = var5.parent_id;
            var3 = var4[var3];
            var2 = var2 != var3;
            if(!var2) { _fun0023_ip = 91; continue _fun0023 }
case 92:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var4 = var9[var4];
            var4 = var8.bind(var1)(var4);
            var4 = var4.SidebarType;
            var4 = var4.CREATE_THREAD;
            var2 = var7 === var4;
case 91:
            if(!var2) { _fun0023_ip = 93; continue _fun0023 }
case 94:
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
case 93:
            if(!var2) { _fun0023_ip = 95; continue _fun0023 }
case 96:
            var4 = _closure1_slot24;
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
case 95:
            return var1;
case 90:
            var1 = false;
            return var1;
        }
    };
    var4['THREAD_CREATE'] = var5;
    var5 = function handleThreadDelete(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = _closure1_slot24;
            var1 = var2.parent_id;
            var4 = var4[var1];
            var1 = null;
            if(!(var1 != var4)) { _fun0024_ip = 97; continue _fun0024 }
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
            if(!(var6 === var5)) { _fun0024_ip = 97; continue _fun0024 }
case 4:
            var5 = var4.channelId;
            var4 = var2.id;
            if(!(var5 === var4)) { _fun0024_ip = 97; continue _fun0024 }
case 98:
            var3 = _closure1_slot24;
            var2 = var2.parent_id;
            var2 = delete var3[var2];
            return var1;
case 97:
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
    var5 = 22;
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