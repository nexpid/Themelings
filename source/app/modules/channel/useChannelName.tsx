// app/modules/channel/useChannelName.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var11 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function computeDefaultGroupDmNameFromUserIds(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
 0:
                    var4 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var3.getNickname;
                    var1 = var4.id;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 68; continue _fun0002 }
 32:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getName;
                    var1 = var2.bind(var3)(var4);
 68:
                    return var1;
                }
            };
            var4 = var2.bind(var3)(var1);
            var2 = var4.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0001_ip = 200; continue _fun0001 }
 98:
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
            _fun0001_ip = 216; continue _fun0001;
 200:
            var3 = var4.join;
            var2 = ', ';
            var1 = var3.bind(var4)(var2);
 216:
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
 0:
            var2 = arg1;
            var1 = arg2;
            var8 = arg3;
            var3 = arguments[3];
            var4 = arguments[4];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0003_ip = 23; continue _fun0003 }
 21:
            var3 = false;
 23:
            if(!(var4 === var7)) { _fun0003_ip = 29; continue _fun0003 }
 27:
            var4 = false;
 29:
            var9 = var2.type;
            var6 = _closure1_slot7;
            var6 = var6.DM;
            if(!(var6 !== var9)) { _fun0003_ip = 401; continue _fun0003 }
 54:
            var6 = _closure1_slot7;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var9)) { _fun0003_ip = 368; continue _fun0003 }
 71:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_ANNOUNCEMENT;
            if(!(var6 !== var9)) { _fun0003_ip = 331; continue _fun0003 }
 88:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_TEXT;
            if(!(var6 !== var9)) { _fun0003_ip = 331; continue _fun0003 }
 105:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_FORUM;
            if(!(var6 !== var9)) { _fun0003_ip = 331; continue _fun0003 }
 122:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_MEDIA;
            if(!(var6 !== var9)) { _fun0003_ip = 331; continue _fun0003 }
 139:
            var6 = _closure1_slot7;
            var6 = var6.PUBLIC_THREAD;
            if(!(var6 !== var9)) { _fun0003_ip = 230; continue _fun0003 }
 153:
            var6 = _closure1_slot7;
            var6 = var6.PRIVATE_THREAD;
            if(!(var6 !== var9)) { _fun0003_ip = 230; continue _fun0003 }
 167:
            var6 = _closure1_slot7;
            var6 = var6.ANNOUNCEMENT_THREAD;
            if(!(var6 !== var9)) { _fun0003_ip = 230; continue _fun0003 }
 181:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var9)) { _fun0003_ip = 230; continue _fun0003 }
 195:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var9)) { _fun0003_ip = 230; continue _fun0003 }
 209:
            var6 = _closure1_slot7;
            var6 = var6.GUILD_CATEGORY;
            if(!(var6 !== var9)) { _fun0003_ip = 230; continue _fun0003 }
 223:
            var6 = var2.name;
            return var6;
 230:
            if(var4) { _fun0003_ip = 286; continue _fun0003 }
 233:
            if(!var3) { _fun0003_ip = 249; continue _fun0003 }
 236:
            var4 = var2.isThread;
            var4 = var4.bind(var2)();
            if(var4) { _fun0003_ip = 256; continue _fun0003 }
 249:
            var4 = var2.name;
            _fun0003_ip = 284; continue _fun0003;
 256:
            var10 = var2.name;
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '"';
            var4 = var9.bind(var6)(var10, var6);
 284:
            _fun0003_ip = 329; continue _fun0003;
 286:
            var9 = _closure1_slot11;
            var6 = var2.name;
            var11 = var9.bind(var7)(var6);
            var6 = global;
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var9 = '#"';
            var6 = '"';
            var4 = var10.bind(var9)(var11, var6);
 329:
            return var4;
 331:
            var10 = var2.name;
            if(var3) { _fun0003_ip = 344; continue _fun0003 }
 339:
            var4 = var10;
            _fun0003_ip = 366; continue _fun0003;
 344:
            var6 = global;
            var6 = var6.HermesInternal;
            var9 = var6.concat;
            var6 = '#';
            var4 = var9.bind(var6)(var10);
 366:
            return var4;
 368:
            var6 = var2.name;
            var4 = '';
            if(!(var4 === var6)) { _fun0003_ip = 394; continue _fun0003 }
 381:
            var4 = _closure1_slot9;
            var4 = var4.bind(var7)(var2, var1, var8);
            _fun0003_ip = 399; continue _fun0003;
 394:
            var4 = var2.name;
 399:
            return var4;
 401:
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
            if(!(var4 != var1)) { _fun0003_ip = 611; continue _fun0003 }
 487:
            var2 = var1.isProvisional;
            if(!var2) { _fun0003_ip = 506; continue _fun0003 }
 496:
            var2 = var1.globalName;
            if(!(var4 == var2)) { _fun0003_ip = 603; continue _fun0003 }
 506:
            var6 = var8.getNickname;
            var2 = var1.id;
            var2 = var6.bind(var8)(var2);
            if(!(var4 == var2)) { _fun0003_ip = 557; continue _fun0003 }
 526:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.getName;
            var2 = var5.bind(var6)(var1);
 557:
            var4 = var4 != var2;
            var5 = '???';
            if(!var4) { _fun0003_ip = 573; continue _fun0003 }
 570:
            var5 = var2;
 573:
            var2 = var5;
            if(!var3) { _fun0003_ip = 601; continue _fun0003 }
 579:
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '@';
            var2 = var4.bind(var3)(var5);
 601:
            return var2;
 603:
            var1 = var1.globalName;
            return var1;
 611:
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
 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var2 = false;
 20:
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
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0005_ip = 45; continue _fun0005 }
 16:
                    var7 = _closure1_slot10;
                    var11 = _closure2_slot0;
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot5;
                    var8 = _closure2_slot1;
                    var12 = undefined;
                    var1 = var12[var7](var11, var10, var9, var8, var7);
 45:
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
 0:
                var1 = _closure2_slot0;
                var4 = null;
                var2 = var4 != var1;
                var1 = null;
                if(!var2) { _fun0006_ip = 65; continue _fun0006 }
 18:
                var5 = _closure2_slot0;
                var2 = var5.isMultiUserDM;
                var2 = var2.bind(var5)();
                var1 = null;
                if(!var2) { _fun0006_ip = 65; continue _fun0006 }
 37:
                var6 = _closure1_slot9;
                var5 = _closure2_slot0;
                var4 = _closure1_slot6;
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = var6.bind(var2)(var5, var4, var3);
 65:
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