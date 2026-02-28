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
            var2 = var1.9Uk8PF;
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
            var3 = arg1;
            var2 = arg2;
            var8 = arg3;
            var4 = arguments[3];
            var7 = arguments[4];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var4 = false;
case 7:
            if(!(var7 === var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var7 = false;
case 9:
            var6 = var3.name;
            var1 = var3.isObfuscated;
            var9 = var1.bind(var3)();
            if(var9) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var10 = var3.type;
            var9 = _closure1_slot7;
            var9 = var9.DM;
            if(!(var9 !== var10)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var9 = _closure1_slot7;
            var9 = var9.GROUP_DM;
            if(!(var9 !== var10)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var9 = _closure1_slot7;
            var9 = var9.GUILD_ANNOUNCEMENT;
            if(!(var9 !== var10)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var9 = _closure1_slot7;
            var9 = var9.GUILD_TEXT;
            if(!(var9 !== var10)) { _fun0003_ip = 17; continue _fun0003 }
case 19:
            var9 = _closure1_slot7;
            var9 = var9.GUILD_FORUM;
            if(!(var9 !== var10)) { _fun0003_ip = 17; continue _fun0003 }
case 20:
            var9 = _closure1_slot7;
            var9 = var9.GUILD_MEDIA;
            if(!(var9 !== var10)) { _fun0003_ip = 17; continue _fun0003 }
case 21:
            var9 = _closure1_slot7;
            var9 = var9.PUBLIC_THREAD;
            if(!(var9 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var9 = _closure1_slot7;
            var9 = var9.PRIVATE_THREAD;
            if(!(var9 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
            var9 = _closure1_slot7;
            var9 = var9.ANNOUNCEMENT_THREAD;
            if(!(var9 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 25:
            var9 = _closure1_slot7;
            var9 = var9.GUILD_VOICE;
            if(!(var9 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 6:
            var9 = _closure1_slot7;
            var9 = var9.GUILD_STAGE_VOICE;
            if(!(var9 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 26:
            var9 = _closure1_slot7;
            var9 = var9.GUILD_CATEGORY;
            if(!(var9 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 27:
            return var6;
case 22:
            if(var7) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var7 = var6;
            if(!var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var9 = var3.isThread;
            var9 = var9.bind(var3)();
            var7 = var6;
            if(!var9) { _fun0003_ip = 30; continue _fun0003 }
case 32:
            var9 = global;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = '"';
            var7 = var10.bind(var9)(var6, var9);
case 30:
            _fun0003_ip = 33; continue _fun0003;
case 28:
            var9 = _closure1_slot11;
            var12 = var9.bind(var5)(var6);
            var9 = global;
            var9 = var9.HermesInternal;
            var11 = var9.concat;
            var10 = '#"';
            var9 = '"';
            var7 = var11.bind(var10)(var12, var9);
case 33:
            return var7;
case 17:
            var7 = var6;
            if(!var4) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var9 = global;
            var9 = var9.HermesInternal;
            var10 = var9.concat;
            var9 = '#';
            var7 = var10.bind(var9)(var6);
case 34:
            return var7;
case 15:
            var7 = '';
            if(!(var7 === var6)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = _closure1_slot9;
            var6 = var7.bind(var5)(var3, var2, var8);
case 36:
            return var6;
case 13:
            var6 = var3.recipients;
            var3 = var6.map;
            var2 = var2.getUser;
            var6 = var3.bind(var6)(var2);
            var3 = var6.filter;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.isNotNullish;
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot3;
            var2 = 1;
            var3 = var3.bind(var5)(var6, var2);
            var2 = 0;
            var2 = var3[var2];
            var6 = null;
            if(!(var6 != var2)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var3 = var2.isProvisional;
            if(!var3) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var3 = var2.globalName;
            if(!(var6 == var3)) { _fun0003_ip = 42; continue _fun0003 }
case 40:
            var7 = var8.getNickname;
            var3 = var2.id;
            var3 = var7.bind(var8)(var3);
            if(!(var6 == var3)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.getName;
            var3 = var7.bind(var8)(var2);
case 43:
            var6 = var6 != var3;
            var7 = '???';
            if(!var6) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var7 = var3;
case 45:
            var3 = var7;
            if(!var4) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = '@';
            var3 = var6.bind(var4)(var7);
case 47:
            return var3;
case 42:
            var2 = var2.globalName;
            return var2;
case 38:
            var2 = '???';
            return var2;
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1./YzI63;
            var1 = var2.bind(var3)(var1);
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
            if(!(var2 === var4)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var2 = false;
case 49:
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
                    if(var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var7 = _closure1_slot10;
                    var11 = _closure2_slot0;
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot5;
                    var8 = _closure2_slot1;
                    var12 = undefined;
                    var1 = var12[var7](var11, var10, var9, var8, var7);
case 51:
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
                if(!var2) { _fun0006_ip = 53; continue _fun0006 }
case 50:
                var5 = _closure2_slot0;
                var2 = var5.isMultiUserDM;
                var2 = var2.bind(var5)();
                var1 = null;
                if(!var2) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                var6 = _closure1_slot9;
                var5 = _closure2_slot0;
                var4 = _closure1_slot6;
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = var6.bind(var2)(var5, var4, var3);
case 53:
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