// app/modules/channel/useChannelName.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function computeDefaultGroupDmNameFromUserIds(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var9 = arg2;
            var2 = arg3;
            var _closure2_slot0 = var2;
            var3 = var4.map;
            var2 = var9.getUser;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var8 = undefined;
            var2 = var5.bind(var8)(var2);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var3.getNickname;
                    var1 = var4.id;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getName;
                    var1 = var2.bind(var3)(var4);
case 2:
                    return var1;
                }
            };
            var4 = var2.bind(var3)(var1);
            var2 = var4.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 7;
            var3 = var10[var1];
            var3 = var2.bind(var8)(var3);
            var5 = var3.intl;
            var3 = var5.formatToPlainString;
            var1 = var10[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.9Uk8PD;
            var1 = {};
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var10[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.getName;
            var6 = var9.getCurrentUser;
            var6 = var6.bind(var9)();
            var6 = var7.bind(var8)(var6);
            var1['name'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = var4.join;
            var2 = ', ';
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot8 = var7;
    var6 = function computeDefaultGroupDmName(arg1, arg2, arg3) {
        var5 = _closure1_slot8;
        var1 = arg1;
        var4 = var1.recipients;
        var3 = undefined;
        var2 = arg2;
        var1 = arg3;
        var1 = var5.bind(var3)(var4, var2, var1);
        return var1;
    };
    var _closure1_slot9 = var6;
    var5 = function computeChannelName(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var8 = arg3;
            var3 = arguments[3];
            var4 = arguments[4];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var3 = false;
case 7:
            if(!(var4 === var7)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = false;
case 9:
            var9 = var2.type;
            var6 = _closure1_slot7;
            var6 = var6.DM;
            if(!(var6 !== var9)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var6 = _closure1_slot7;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var9)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var9)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_TEXT;
            if(!(var6 !== var9)) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_FORUM;
            if(!(var6 !== var9)) { _fun0003_ip = 15; continue _fun0003 }
case 18:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_MEDIA;
            if(!(var6 !== var9)) { _fun0003_ip = 15; continue _fun0003 }
case 19:
            var6 = _closure1_slot7;
            var6 = var6.PUBLIC_THREAD;
            if(!(var6 !== var9)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = _closure1_slot7;
            var6 = var6.PRIVATE_THREAD;
            if(!(var6 !== var9)) { _fun0003_ip = 20; continue _fun0003 }
case 22:
            var6 = _closure1_slot7;
            var6 = var6.ANNOUNCEMENT_THREAD;
            if(!(var6 !== var9)) { _fun0003_ip = 20; continue _fun0003 }
case 23:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var9)) { _fun0003_ip = 20; continue _fun0003 }
case 24:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var9)) { _fun0003_ip = 20; continue _fun0003 }
case 25:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_CATEGORY;
            if(!(var6 !== var9)) { _fun0003_ip = 20; continue _fun0003 }
case 26:
            var6 = var2.name;
            return var6;
case 20:
            if(var4) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            if(!var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var4 = var2.isThread;
            var4 = var4.bind(var2)();
            if(var4) { _fun0003_ip = 31; continue _fun0003 }
case 29:
            var4 = var2.name;
            _fun0003_ip = 32; continue _fun0003;
case 31:
            var10 = var2.name;
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '"';
            var4 = var9.bind(var6)(var10, var6);
case 32:
            _fun0003_ip = 33; continue _fun0003;
case 27:
            var9 = _closure1_slot11;
            var6 = var2.name;
            var11 = var9.bind(var7)(var6);
            var6 = global;
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var9 = '#"';
            var6 = '"';
            var4 = var10.bind(var9)(var11, var6);
case 33:
            return var4;
case 15:
            var10 = var2.name;
            if(var3) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var4 = var10;
            _fun0003_ip = 36; continue _fun0003;
case 34:
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '#';
            var4 = var9.bind(var6)(var10);
case 36:
            return var4;
case 13:
            var6 = var2.name;
            var4 = '';
            if(!(var4 === var6)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var4 = _closure1_slot9;
            var4 = var4.bind(var7)(var2, var1, var8);
            _fun0003_ip = 39; continue _fun0003;
case 37:
            var4 = var2.name;
case 39:
            return var4;
case 11:
            var4 = var2.recipients;
            var2 = var4.map;
            var1 = var1.getUser;
            var4 = var2.bind(var4)(var1);
            var2 = var4.filter;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.isNotNullish;
            var4 = var2.bind(var4)(var1);
            var2 = _closure1_slot3;
            var1 = 1;
            var2 = var2.bind(var7)(var4, var1);
            var1 = 0;
            var1 = var2[var1];
            var4 = null;
            if(!(var4 != var1)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var2 = var1.isProvisional;
            if(!var2) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var2 = var1.globalName;
            if(!(var4 == var2)) { _fun0003_ip = 44; continue _fun0003 }
case 42:
            var6 = var8.getNickname;
            var2 = var1.id;
            var2 = var6.bind(var8)(var2);
            if(!(var4 == var2)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.getName;
            var2 = var5.bind(var6)(var1);
case 45:
            var4 = var4 != var2;
            var5 = '???';
            if(!var4) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var5 = var2;
case 47:
            var2 = var5;
            if(!var3) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '@';
            var2 = var4.bind(var3)(var5);
case 49:
            return var2;
case 44:
            var1 = var1.globalName;
            return var1;
case 40:
            var1 = '???';
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function escapeChannelName(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = /\\/g;
        var1 = '\\\\';
        var4 = var3.bind(var4)(var2, var1);
        var3 = var4.replace;
        var2 = /"/g;
        var1 = '\\"';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.ChannelTypes;
    var _closure1_slot7 = var8;
    var8 = 9;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/channel/useChannelName.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function useChannelName(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var2 = false;
case 51:
            var _closure2_slot1 = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot6;
            var2 = new Array(3);
            var2[0] = var6;
            var6 = _closure1_slot4;
            var2[1] = var6;
            var5 = _closure1_slot5;
            var2[2] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var7 = _closure1_slot10;
                    var11 = _closure2_slot0;
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot5;
                    var8 = _closure2_slot1;
                    var12 = undefined;
                    var1 = var12[var7](var11, var10, var9, var8, var7);
case 53:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var8;
    var3['computeDefaultGroupDmNameFromUserIds'] = var7;
    var3['computeDefaultGroupDmName'] = var6;
    var6 = function useComputedGroupDmName(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot6;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot5;
        var2[1] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                var2 = var4 != var1;
                var1 = null;
                if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 52:
                var5 = _closure2_slot0;
                var2 = var5.isMultiUserDM;
                var2 = var2.bind(var5)();
                var1 = null;
                if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                var6 = _closure1_slot9;
                var5 = _closure2_slot0;
                var4 = _closure1_slot6;
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = var6.bind(var2)(var5, var4, var3);
case 55:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useComputedGroupDmName'] = var6;
    var3['computeChannelName'] = var5;
    var3['escapeChannelName'] = var4;
    var2 = function unescapeChannelName(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = /\\"/g;
        var1 = '"';
        var4 = var3.bind(var4)(var2, var1);
        var3 = var4.replace;
        var2 = /\\\\/g;
        var1 = '\\';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['unescapeChannelName'] = var2;
    return var1;
})();