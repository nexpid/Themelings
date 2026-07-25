// app/modules/favorites/buildFavoritesSectionButtons.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _addChannelToFavorites() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var2 = var8[var5];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var2);
                    var6 = var7.open;
                    var2 = {};
                    var9 = 'FAVORITE_ADDED';
                    var2['key'] = var9;
                    var10 = _closure1_slot0;
                    var9 = 3;
                    var11 = var8[var9];
                    var11 = var10.bind(var3)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var9 = var8[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9["4tSWQg"];
                    var9 = var11.bind(var12)(var9);
                    var2['content'] = var9;
                    var9 = 4;
                    var9 = var8[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.StarIcon;
                    var2['IconComponent'] = var9;
                    var2 = var6.bind(var7)(var2);
                    var2 = global;
                    var7 = var2.Promise;
                    var6 = var7.all;
                    var9 = 6;
                    var2 = var8[var9];
                    var12 = var10.bind(var3)(var2);
                    var2 = 5;
                    var11 = var8[var2];
                    var2 = var8.paths;
                    var11 = var12.bind(var3)(var11, var2);
                    var2 = new Array(2);
                    var2[0] = var11;
                    var9 = var8[var9];
                    var10 = var10.bind(var3)(var9);
                    var9 = 7;
                    var9 = var8[var9];
                    var8 = var8.paths;
                    var8 = var10.bind(var3)(var9, var8);
                    var2[1] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=229);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot3;
                    var5 = var4.bind(var3)(var2, var5);
                    var4 = 0;
                    var8 = var5[var4];
                    var4 = 1;
                    var4 = var5[var4];
                    var4 = var4.getIsFavoritesGuildEnabled;
                    var4 = var4.bind(var3)();
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = var8.setFavoritesGuildVisibility;
                    var5 = true;
                    var4 = 'channel_context_menu';
                    var4 = var6.bind(var8)(var5, var4);
case 8:
                    var7 = var8.addFavoriteChannel;
                    var6 = arg1;
                    var5 = null;
                    var4 = 'channel_context_menu';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _removeChannelFromFavorites() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 6;
                    var4 = var2[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = 5;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=54);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = var2.removeFavoriteChannel;
                    var4 = arg1;
                    var4 = var5.bind(var2)(var4);
                    return var3;
case 14:
                    return var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/buildFavoritesSectionButtons.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function buildFavoritesSectionButtons(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var7 = var1.hasFavoritesAccess;
            var6 = var1.canFavoriteChannel;
            var5 = var1.isChannelInFavorites;
            var3 = var1.isFavoritesGuild;
            var1 = var1.channelId;
            var _closure2_slot0 = var1;
            var1 = null;
            if(!var7) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = null;
            if(!var6) { _fun0003_ip = 16; continue _fun0003 }
case 13:
            if(var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var2 = null;
            if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var9 = var8[var6];
            var6 = undefined;
            var9 = var7.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var11 = _closure1_slot1;
            var5 = 8;
            var5 = var8[var5];
            var5 = var11.bind(var6)(var5);
            var5 = var5.G9fGlP;
            var5 = var9.bind(var10)(var5);
            var3['label'] = var5;
            var5 = 9;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.StarOutlineIcon;
            var3['IconComponent'] = var5;
            var5 = function onPress() {
                var3 = _closure2_slot0;
                var2 = function addChannelToFavorites() {
                    var1 = undefined;
                    var4 = _closure1_slot5;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var3['onPress'] = var5;
            var2 = var3;
case 20:
            _fun0003_ip = 22; continue _fun0003;
case 18:
            var3 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var9 = var8[var6];
            var6 = undefined;
            var9 = var7.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var11 = _closure1_slot1;
            var5 = 8;
            var5 = var8[var5];
            var5 = var11.bind(var6)(var5);
            var5 = var5.TN4nAX;
            var5 = var9.bind(var10)(var5);
            var3['label'] = var5;
            var5 = 4;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.StarIcon;
            var3['IconComponent'] = var5;
            var5 = true;
            var3['isDestructive'] = var5;
            var4 = function onPress() {
                var3 = _closure2_slot0;
                var2 = function removeChannelFromFavorites() {
                    var1 = undefined;
                    var4 = _closure1_slot6;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var3['onPress'] = var4;
            var2 = var3;
case 22:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();