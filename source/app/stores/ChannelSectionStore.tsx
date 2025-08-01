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
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function parseChannelId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 63; continue _fun0002 }
 9:
            var2 = _closure1_slot17;
            var5 = undefined;
            var2 = var2.bind(var5)(var6);
            if(var2) { _fun0002_ip = 28; continue _fun0002 }
 26:
            return var6;
 28:
            var4 = _closure1_slot13;
            var2 = var4.getGuildId;
            var4 = var2.bind(var4)();
            var7 = var1 == var4;
            var2 = null;
            if(var7) { _fun0002_ip = 61; continue _fun0002 }
 51:
            var3 = _closure1_slot18;
            var2 = var3.bind(var5)(var6, var4);
 61:
            return var2;
 63:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function toggleSection(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot23;
            var4 = false;
            var1 = false;
            if(!var5) { _fun0003_ip = 23; continue _fun0003 }
 17:
            _closure1_slot23 = var4;
            var1 = true;
 23:
            var6 = _closure1_slot27;
            var5 = _closure1_slot12;
            var4 = var5.getChannelId;
            var5 = var4.bind(var5)();
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = null;
            var5 = var5 != var4;
            if(!var5) { _fun0003_ip = 65; continue _fun0003 }
 57:
            var6 = _closure1_slot24;
            var5 = var4 in var6;
 65:
            if(!var5) { _fun0003_ip = 78; continue _fun0003 }
 68:
            var3 = _closure1_slot24;
            var3 = delete var3[var4];
            var1 = true;
 78:
            if(!var1) { _fun0003_ip = 87; continue _fun0003 }
 81:
            var1 = var2;
            if(var1) { _fun0003_ip = 90; continue _fun0003 }
 87:
            var1 = !var2;
 90:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function handlePermissionsChange() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var12 = _closure1_slot24;
            var3 = false;
            var7 = undefined;
            var5 = null;
            var4 = 15;
            var2 = undefined;
            var1 = false;
            for(var8 in var12)
 31:
            {
                var17 = var3;
                var1 = var17;
 49:
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
                if(!(var18 !== var15)) { _fun0004_ip = 139; continue _fun0004 }
 98:
                var18 = var14.type;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var4];
                var15 = var19.bind(var7)(var15);
                var15 = var15.SidebarType;
                var15 = var15.VIEW_CHANNEL;
                var3 = var17;
                if(var18 !== var15) { _fun0004_ip = 31; continue _fun0004 }
 139:
                var18 = _closure1_slot10;
                var15 = var18.getChannel;
                var14 = var14.channelId;
                var14 = var15.bind(var18)(var14);
                var15 = var5 != var14;
                if(!var15) { _fun0004_ip = 191; continue _fun0004 }
 165:
                var20 = _closure1_slot11;
                var19 = var20.can;
                var18 = _closure1_slot19;
                var18 = var18.VIEW_CHANNEL;
                var15 = var19.bind(var20)(var18, var14);
 191:
                var3 = var17;
                var2 = var14;
                if(var15) { _fun0004_ip = 31; continue _fun0004 }
 203:
                var15 = _closure1_slot24;
                var15 = delete var15[var16];
                var3 = true;
                var2 = var14;
                _fun0004_ip = 31; continue _fun0004;
            }
 221:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function syncIsSearchSidebarOpen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot9;
            var1 = var3.getCurrentSearchId;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 62; continue _fun0005 }
 25:
            var3 = _closure1_slot8;
            var1 = var3.hasSearchState;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot23;
            if(!(var3 !== var1)) { _fun0005_ip = 58; continue _fun0005 }
 50:
            _closure1_slot23 = var1;
            var1 = undefined;
            return var1;
 58:
            var1 = false;
            return var1;
 62:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
    var4 = var6.bind(var1)(var4);
    var9 = var4.ChannelSections;
    var _closure1_slot15 = var9;
    var4 = var4.ComponentActions;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.isStaticChannelRoute;
    var _closure1_slot17 = var9;
    var4 = var4.buildGuildStaticChannelId;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot19 = var4;
    var4 = false;
    var _closure1_slot20 = var4;
    var _closure1_slot21 = var4;
    var _closure1_slot22 = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var _closure1_slot24 = var4;
    var4 = {};
    var _closure1_slot25 = var4;
    var4 = 19;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function ChannelSectionStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var1 = arg1;
                var4 = this;
                var3 = null;
                if(!(var3 != var1)) { _fun0007_ip = 107; continue _fun0007 }
 12:
                var2 = var1.isMembersOpen;
                var5 = var3 != var2;
                if(!var5) { _fun0007_ip = 28; continue _fun0007 }
 25:
                var5 = var2;
 28:
                _closure1_slot20 = var5;
                var6 = var1.isSummariesOpen;
                var5 = var3 != var6;
                if(!var5) { _fun0007_ip = 51; continue _fun0007 }
 48:
                var5 = var6;
 51:
                _closure1_slot21 = var5;
                var6 = var1.isProfileOpen;
                var5 = var3 == var6;
                if(var5) { _fun0007_ip = 71; continue _fun0007 }
 68:
                var5 = var6;
 71:
                _closure1_slot22 = var5;
                var5 = var1.sidebars;
                if(!(var3 == var5)) { _fun0007_ip = 87; continue _fun0007 }
 85:
                var5 = {};
 87:
                _closure1_slot24 = var5;
                var1 = var1.guildSidebars;
                if(!(var3 == var1)) { _fun0007_ip = 103; continue _fun0007 }
 101:
                var1 = {};
 103:
                _closure1_slot25 = var1;
 107:
                var5 = var4.syncWith;
                var2 = _closure1_slot8;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot9;
                var3[1] = var2;
                var2 = _closure1_slot30;
                var2 = var5.bind(var4)(var3, var2);
                var5 = var4.syncWith;
                var2 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot29;
                var2 = var5.bind(var4)(var3, var2);
                var3 = var4.waitFor;
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var1 = var3.bind(var4)(var2, var1);
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
            var3 = _closure1_slot20;
            var1['isMembersOpen'] = var3;
            var3 = _closure1_slot21;
            var1['isSummariesOpen'] = var3;
            var3 = _closure1_slot22;
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
 0:
                var2 = _closure1_slot23;
                if(var2) { _fun0008_ip = 125; continue _fun0008 }
 10:
                var4 = _closure1_slot27;
                var3 = undefined;
                var2 = arg1;
                var4 = var4.bind(var3)(var2);
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 42; continue _fun0008 }
 30:
                var2 = _closure1_slot24;
                var2 = var2[var4];
                if(!(var3 == var2)) { _fun0008_ip = 113; continue _fun0008 }
 42:
                var2 = arg2;
                if(!var2) { _fun0008_ip = 55; continue _fun0008 }
 48:
                var2 = _closure1_slot22;
                if(var2) { _fun0008_ip = 101; continue _fun0008 }
 55:
                var2 = _closure1_slot21;
                if(var2) { _fun0008_ip = 89; continue _fun0008 }
 62:
                var2 = _closure1_slot20;
                var3 = _closure1_slot15;
                if(var2) { _fun0008_ip = 81; continue _fun0008 }
 73:
                var2 = var3.NONE;
                _fun0008_ip = 87; continue _fun0008;
 81:
                var2 = var3.MEMBERS;
 87:
                _fun0008_ip = 99; continue _fun0008;
 89:
                var3 = _closure1_slot15;
                var2 = var3.SUMMARIES;
 99:
                _fun0008_ip = 111; continue _fun0008;
 101:
                var3 = _closure1_slot15;
                var2 = var3.PROFILE;
 111:
                _fun0008_ip = 123; continue _fun0008;
 113:
                var3 = _closure1_slot15;
                var2 = var3.SIDEBAR_CHAT;
 123:
                return var2;
 125:
                var1 = _closure1_slot15;
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
 0:
                var4 = _closure1_slot27;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var4 = null;
                var4 = var4 == var3;
                if(var4) { _fun0009_ip = 34; continue _fun0009 }
 26:
                var2 = _closure1_slot24;
                var1 = var2[var3];
 34:
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
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0010_ip = 25; continue _fun0010 }
 14:
                var2 = _closure1_slot25;
                var1 = var2[var3];
 25:
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
 0:
                var2 = _closure1_slot27;
                var7 = undefined;
                var1 = arg1;
                var4 = var2.bind(var7)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0011_ip = 187; continue _fun0011 }
 26:
                var2 = _closure1_slot23;
                if(var2) { _fun0011_ip = 185; continue _fun0011 }
 36:
                var2 = _closure1_slot24;
                var4 = var2[var4];
                var5 = var1 == var4;
                var2 = null;
                if(var5) { _fun0011_ip = 183; continue _fun0011 }
 56:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 15;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.SidebarType;
                var5 = var5.VIEW_THREAD;
                if(!(var6 !== var5)) { _fun0011_ip = 175; continue _fun0011 }
 97:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var9.bind(var7)(var5);
                var5 = var5.SidebarType;
                var5 = var5.VIEW_CHANNEL;
                if(!(var6 !== var5)) { _fun0011_ip = 175; continue _fun0011 }
 135:
                var6 = var4.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var5.bind(var7)(var3);
                var3 = var3.SidebarType;
                var5 = var3.VIEW_MOD_REPORT;
                var3 = null;
                if(!(var6 === var5)) { _fun0011_ip = 180; continue _fun0011 }
 175:
                var3 = var4.channelId;
 180:
                var2 = var3;
 183:
                return var2;
 185:
                return var1;
 187:
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
 0:
                var2 = _closure1_slot27;
                var4 = undefined;
                var1 = arg1;
                var5 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0012_ip = 208; continue _fun0012 }
 26:
                var2 = _closure1_slot23;
                if(var2) { _fun0012_ip = 206; continue _fun0012 }
 36:
                var2 = _closure1_slot24;
                var5 = var2[var5];
                var6 = var1 == var5;
                var2 = null;
                if(var6) { _fun0012_ip = 204; continue _fun0012 }
 56:
                var7 = var5.type;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 15;
                var6 = var6[var8];
                var6 = var9.bind(var4)(var6);
                var6 = var6.SidebarType;
                var6 = var6.VIEW_THREAD;
                if(!(var7 !== var6)) { _fun0012_ip = 175; continue _fun0012 }
 97:
                var7 = var5.type;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var9.bind(var4)(var6);
                var6 = var6.SidebarType;
                var6 = var6.VIEW_CHANNEL;
                if(!(var7 !== var6)) { _fun0012_ip = 175; continue _fun0012 }
 135:
                var7 = var5.type;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var4)(var3);
                var3 = var3.SidebarType;
                var6 = var3.VIEW_MOD_REPORT;
                var3 = null;
                if(!(var7 === var6)) { _fun0012_ip = 201; continue _fun0012 }
 175:
                var5 = var5.details;
                var6 = var1 == var5;
                var4 = undefined;
                if(var6) { _fun0012_ip = 198; continue _fun0012 }
 190:
                var4 = var5.initialMessageId;
 198:
                var3 = var4;
 201:
                var2 = var3;
 204:
                return var2;
 206:
                return var1;
 208:
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
    var4 = 20;
    var4 = var7[var4];
    var13 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleChannelToggleMembersSection() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = _closure1_slot23;
            if(!var1) { _fun0013_ip = 58; continue _fun0013 }
 10:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var4 = var1.ComponentDispatch;
            var2 = var4.dispatch;
            var1 = _closure1_slot16;
            var1 = var1.SEARCH_RESULTS_CLOSE;
            var1 = var2.bind(var4)(var1);
 58:
            var1 = _closure1_slot21;
            if(!var1) { _fun0013_ip = 84; continue _fun0013 }
 65:
            var4 = _closure1_slot28;
            var2 = _closure1_slot21;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            _closure1_slot21 = var1;
 84:
            var4 = _closure1_slot28;
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot20 = var2;
            return var1;
        }
    };
    var4['CHANNEL_TOGGLE_MEMBERS_SECTION'] = var5;
    var5 = function handleUserProfileSidebarToggleSection() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = _closure1_slot22;
            if(var1) { _fun0014_ip = 58; continue _fun0014 }
 10:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var4 = var1.ComponentDispatch;
            var2 = var4.dispatch;
            var1 = _closure1_slot16;
            var1 = var1.SEARCH_RESULTS_CLOSE;
            var1 = var2.bind(var4)(var1);
 58:
            var4 = _closure1_slot28;
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot22 = var2;
            return var1;
        }
    };
    var4['USER_PROFILE_SIDEBAR_TOGGLE_SECTION'] = var5;
    var5 = function handleChannelToggleSummariesSection() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = _closure1_slot20;
            if(!var1) { _fun0015_ip = 29; continue _fun0015 }
 10:
            var4 = _closure1_slot28;
            var2 = _closure1_slot20;
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            _closure1_slot20 = var1;
 29:
            var4 = _closure1_slot28;
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            _closure1_slot21 = var2;
            return var1;
        }
    };
    var4['CHANNEL_TOGGLE_SUMMARIES_SECTION'] = var5;
    var5 = function handleSidebarViewChannel(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var8 = var1.sidebarType;
            var7 = var1.baseChannelId;
            var5 = var1.channelId;
            var3 = var1.details;
            var1 = false;
            _closure1_slot23 = var1;
            var4 = _closure1_slot27;
            var9 = undefined;
            var4 = var4.bind(var9)(var7);
            var6 = null;
            if(!(var6 != var4)) { _fun0016_ip = 142; continue _fun0016 }
 52:
            var6 = {};
            var6['type'] = var8;
            var6['channelId'] = var5;
            var6['details'] = var3;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var3 = var10[var3];
            var3 = var5.bind(var9)(var3);
            var3 = var3.SidebarType;
            var5 = var3.VIEW_MOD_REPORT;
            var3 = var6;
            if(!(var8 === var5)) { _fun0016_ip = 130; continue _fun0016 }
 106:
            var5 = {};
            var12 = var5;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'baseChannelId';
            var5[var6] = var7;
            var3 = var5;
 130:
            var2 = _closure1_slot24;
            var2[var4] = var3;
            var2 = true;
            return var2;
 142:
            return var1;
        }
    };
    var4['SIDEBAR_VIEW_CHANNEL'] = var5;
    var5 = function handleSidebarViewGuild(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var7 = var1.sidebarType;
            var4 = var1.guildId;
            var6 = var1.baseChannelId;
            var5 = var1.details;
            var1 = false;
            _closure1_slot23 = var1;
            var3 = _closure1_slot27;
            var1 = undefined;
            var6 = var3.bind(var1)(var6);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0017_ip = 85; continue _fun0017 }
 55:
            var3 = _closure1_slot25;
            var2 = {};
            var2['type'] = var7;
            var2['baseChannelId'] = var6;
            var2['guildId'] = var4;
            var2['details'] = var5;
            var3[var4] = var2;
            var1 = true;
 85:
            return var1;
        }
    };
    var4['SIDEBAR_VIEW_GUILD'] = var5;
    var5 = function handleCreateThread(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var7 = var1.parentChannelId;
            var6 = var1.parentMessageId;
            var5 = var1.location;
            var1 = false;
            _closure1_slot23 = var1;
            var2 = _closure1_slot27;
            var1 = undefined;
            var4 = var2.bind(var1)(var7);
            var2 = null;
            if(!(var2 != var4)) { _fun0018_ip = 106; continue _fun0018 }
 46:
            var3 = _closure1_slot24;
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 15;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.SidebarType;
            var8 = var8.CREATE_THREAD;
            var2['type'] = var8;
            var2['parentChannelId'] = var7;
            var2['parentMessageId'] = var6;
            var2['location'] = var5;
            var3[var4] = var2;
 106:
            return var1;
        }
    };
    var4['SIDEBAR_CREATE_THREAD'] = var5;
    var5 = function handleCloseSidebar(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var4 = var1.baseChannelId;
            var3 = _closure1_slot27;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0019_ip = 37; continue _fun0019 }
 29:
            var2 = _closure1_slot24;
            var2 = delete var2[var3];
 37:
            return var1;
        }
    };
    var4['SIDEBAR_CLOSE'] = var5;
    var5 = function handleGuildCloseSidebar(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = _closure1_slot25;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0020_ip = 38; continue _fun0020 }
 28:
            var2 = _closure1_slot25;
            var2 = delete var2[var3];
            var1 = true;
 38:
            return var1;
        }
    };
    var4['SIDEBAR_CLOSE_GUILD'] = var5;
    var5 = function handleChannelDelete(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.id;
            var2 = _closure1_slot24;
            var3 = var3 in var2;
            var2 = _closure1_slot24;
            if(var3) { _fun0021_ip = 158; continue _fun0021 }
 34:
            var12 = var2;
            var4 = false;
            var7 = 15;
            var6 = undefined;
            var5 = null;
            var3 = false;
            for(var9 in var12)
 56:
            {
                var3 = var4;
 68:
                var16 = var9;
                var15 = _closure1_slot24;
                var17 = var15[var16];
                var15 = var5 != var17;
                if(!var15) { _fun0021_ip = 124; continue _fun0021 }
 86:
                var19 = var17.type;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var18 = var18[var7];
                var18 = var20.bind(var6)(var18);
                var18 = var18.SidebarType;
                var18 = var18.VIEW_CHANNEL;
                var15 = var19 === var18;
 124:
                if(!var15) { _fun0021_ip = 141; continue _fun0021 }
 127:
                var18 = var17.channelId;
                var17 = var1.id;
                var15 = var18 === var17;
 141:
                if(!var15) { _fun0021_ip = 56; continue _fun0021 }
 144:
                var15 = _closure1_slot24;
                var15 = delete var15[var16];
                var4 = true;
                _fun0021_ip = 56; continue _fun0021;
            }
 156:
            return var3;
 158:
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = true;
            return var1;
        }
    };
    var4['CHANNEL_DELETE'] = var5;
    var5 = function handleChannelSelect() {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.isMobile;
            if(!var2) { _fun0022_ip = 38; continue _fun0022 }
 34:
            var2 = _closure1_slot20;
 38:
            if(!var2) { _fun0022_ip = 51; continue _fun0022 }
 41:
            var2 = false;
            _closure1_slot20 = var2;
            _closure1_slot21 = var2;
 51:
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var5;
    var5 = function handleThreadCreate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var5 = var1.channel;
            var4 = var5.ownerId;
            var2 = _closure1_slot14;
            var1 = var2.getCurrentUser;
            var7 = var1.bind(var2)();
            var2 = null;
            var8 = var2 == var7;
            var1 = undefined;
            var3 = undefined;
            if(var8) { _fun0023_ip = 48; continue _fun0023 }
 43:
            var3 = var7.id;
 48:
            if(!(var4 !== var3)) { _fun0023_ip = 232; continue _fun0023 }
 55:
            var4 = _closure1_slot24;
            var3 = var5.parent_id;
            var3 = var4[var3];
            var2 = var2 != var3;
            if(!var2) { _fun0023_ip = 117; continue _fun0023 }
 76:
            var7 = var3.type;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var4 = var9[var4];
            var4 = var8.bind(var1)(var4);
            var4 = var4.SidebarType;
            var4 = var4.CREATE_THREAD;
            var2 = var7 === var4;
 117:
            if(!var2) { _fun0023_ip = 166; continue _fun0023 }
 120:
            var4 = var3.parentMessageId;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 17;
            var3 = var8[var3];
            var8 = var7.bind(var1)(var3);
            var7 = var8.castChannelIdAsMessageId;
            var3 = var5.id;
            var3 = var7.bind(var8)(var3);
            var2 = var4 === var3;
 166:
            if(!var2) { _fun0023_ip = 230; continue _fun0023 }
 169:
            var4 = _closure1_slot24;
            var3 = var5.parent_id;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 15;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.SidebarType;
            var6 = var6.VIEW_THREAD;
            var2['type'] = var6;
            var5 = var5.id;
            var2['channelId'] = var5;
            var4[var3] = var2;
 230:
            return var1;
 232:
            var1 = false;
            return var1;
        }
    };
    var4['THREAD_CREATE'] = var5;
    var5 = function handleThreadDelete(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = _closure1_slot24;
            var1 = var2.parent_id;
            var4 = var4[var1];
            var1 = null;
            if(!(var1 != var4)) { _fun0024_ip = 104; continue _fun0024 }
 31:
            var6 = var4.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var5 = var5.SidebarType;
            var5 = var5.VIEW_THREAD;
            if(!(var6 === var5)) { _fun0024_ip = 104; continue _fun0024 }
 74:
            var5 = var4.channelId;
            var4 = var2.id;
            if(!(var5 === var4)) { _fun0024_ip = 104; continue _fun0024 }
 88:
            var3 = _closure1_slot24;
            var2 = var2.parent_id;
            var2 = delete var3[var2];
            return var1;
 104:
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
    var5 = 21;
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
        var1 = 15;
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