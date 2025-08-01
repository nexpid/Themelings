// app/modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getChannelIconData(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = var5.type;
            var1 = _closure1_slot7;
            var1 = var1.GUILD_CATEGORY;
            if(!(var3 !== var1)) { _fun0001_ip = 64; continue _fun0001 }
 25:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getChannelIconWithGuild;
            var1 = arg2;
            var1 = var3.bind(var4)(var5, var1);
            _fun0001_ip = 86; continue _fun0001;
 64:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 86:
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot7 = var8;
    var5 = var5.DEFAULT_ROLE_COLOR;
    var _closure1_slot8 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function transformSearchableSelectOptions(arg1, arg2) {
        var4 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var3 = var5.getGuild;
        var3 = var3.bind(var5)(var6);
        var _closure2_slot1 = var3;
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var2 = var4.type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 5;
                var1 = var1[var7];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.SelectOptionType;
                var1 = var1.USER;
                if(!(var1 !== var2)) { _fun0002_ip = 725; continue _fun0002 }
 52:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var5)(var1);
                var1 = var1.SelectOptionType;
                var1 = var1.ROLE;
                if(!(var1 !== var2)) { _fun0002_ip = 309; continue _fun0002 }
 88:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var5)(var1);
                var1 = var1.SelectOptionType;
                var1 = var1.CHANNEL;
                if(!(var1 !== var2)) { _fun0002_ip = 125; continue _fun0002 }
 121:
                var1 = null;
                return var1;
 125:
                var12 = _closure2_slot1;
                var6 = _closure1_slot3;
                var2 = var6.getChannel;
                var1 = var4.value;
                var11 = var2.bind(var6)(var1);
                var2 = null;
                var1 = var4;
                if(!(var2 != var11)) { _fun0002_ip = 307; continue _fun0002 }
 163:
                var2 = {};
                var16 = var2;
                var15 = var4;
                var6 = copyDataProperties(var16, var15);
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 7;
                var6 = var10[var6];
                var9 = var7.bind(var5)(var6);
                var8 = var9.ensureAvatarSource;
                var6 = _closure1_slot9;
                var6 = var6.bind(var5)(var11, var12);
                var6 = var8.bind(var9)(var6);
                var8 = var6.uri;
                var6 = 'iconSrc';
                var2[var6] = var8;
                var6 = 10;
                var6 = var10[var6];
                var8 = var7.bind(var5)(var6);
                var7 = var8.hex2int;
                var9 = _closure1_slot1;
                var6 = 11;
                var6 = var10[var6];
                var6 = var9.bind(var5)(var6);
                var6 = var6.unsafe_rawColors;
                var6 = var6.PRIMARY_330;
                var7 = var7.bind(var8)(var6);
                var6 = 4278190080.0;
                var7 = var6 | var7;
                var6 = 'iconColor';
                var2[var6] = var7;
                var1 = var2;
 307:
                return var1;
 309:
                var8 = _closure2_slot1;
                var10 = null;
                var1 = var10 != var8;
                var7 = null;
                if(!var1) { _fun0002_ip = 353; continue _fun0002 }
 327:
                var9 = _closure1_slot4;
                var6 = var9.getRole;
                var2 = var8.id;
                var1 = var4.value;
                var7 = var6.bind(var9)(var2, var1);
 353:
                var1 = var4;
                if(!(var10 != var7)) { _fun0002_ip = 723; continue _fun0002 }
 363:
                var1 = var4;
                if(!(var10 != var8)) { _fun0002_ip = 723; continue _fun0002 }
 373:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 8;
                var2 = var2[var9];
                var6 = var6.bind(var5)(var2);
                var2 = var6.canGuildUseRoleIcons;
                var6 = var2.bind(var6)(var8, var7);
                var2 = null;
                if(!var6) { _fun0002_ip = 438; continue _fun0002 }
 410:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var8 = var8.bind(var5)(var6);
                var6 = var8.getRoleIconData;
                var2 = var6.bind(var8)(var7);
 438:
                if(!(var10 != var2)) { _fun0002_ip = 468; continue _fun0002 }
 442:
                var8 = var2.customIconSrc;
                var6 = var2.unicodeEmoji;
                if(!(var10 == var6)) { _fun0002_ip = 649; continue _fun0002 }
 461:
                if(!(var10 == var8)) { _fun0002_ip = 623; continue _fun0002 }
 468:
                var2 = {};
                var16 = var2;
                var15 = var4;
                var9 = copyDataProperties(var16, var15);
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 7;
                var9 = var14[var9];
                var12 = var11.bind(var5)(var9);
                var11 = var12.ensureAvatarSource;
                var13 = _closure1_slot1;
                var9 = 9;
                var9 = var14[var9];
                var9 = var13.bind(var5)(var9);
                var9 = var11.bind(var12)(var9);
                var11 = var9.uri;
                var9 = 'iconSrc';
                var2[var9] = var11;
                var9 = var7.colorString;
                if(!(var10 == var9)) { _fun0002_ip = 558; continue _fun0002 }
 552:
                var9 = _closure1_slot8;
                _fun0002_ip = 595; continue _fun0002;
 558:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 10;
                var10 = var12[var10];
                var11 = var11.bind(var5)(var10);
                var10 = var11.hex2int;
                var7 = var7.colorString;
                var9 = var10.bind(var11)(var7);
 595:
                var7 = 4278190080.0;
                var9 = var7 | var9;
                var7 = 'iconColor';
                var2[var7] = var9;
                var1 = var2;
                _fun0002_ip = 723; continue _fun0002;
 623:
                var2 = {};
                var16 = var2;
                var15 = var4;
                var7 = copyDataProperties(var16, var15);
                var7 = 'iconSrc';
                var2[var7] = var8;
                var1 = var2;
                _fun0002_ip = 723; continue _fun0002;
 649:
                var2 = {};
                var16 = var2;
                var15 = var4;
                var7 = copyDataProperties(var16, var15);
                var7 = {};
                var8 = var6.id;
                var7['id'] = var8;
                var8 = var6.name;
                var7['name'] = var8;
                var8 = var6.animated;
                var7['animated'] = var8;
                var8 = var6.url;
                var7['src'] = var8;
                var6 = var6.surrogates;
                var7['surrogates'] = var6;
                var6 = 'iconEmoji';
                var2[var6] = var7;
                var1 = var2;
 723:
                return var1;
 725:
                var8 = _closure2_slot0;
                var6 = _closure1_slot6;
                var2 = var6.getUser;
                var1 = var4.value;
                var7 = var2.bind(var6)(var1);
                var2 = null;
                var1 = var4;
                if(!(var2 != var7)) { _fun0002_ip = 836; continue _fun0002 }
 761:
                var2 = {};
                var16 = var2;
                var15 = var4;
                var4 = copyDataProperties(var16, var15);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.ensureAvatarSource;
                var6 = var7.getAvatarSource;
                var3 = false;
                var3 = var6.bind(var7)(var8, var3);
                var3 = var4.bind(var5)(var3);
                var4 = var3.uri;
                var3 = 'iconSrc';
                var2[var3] = var4;
                var1 = var2;
 836:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.isNotNullish;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['transformSearchableSelectOptions'] = var4;
    var3['getChannelIconData'] = var2;
    return var1;
})();