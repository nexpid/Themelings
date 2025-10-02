// app/modules/channel_text_area/compareChannelsByScoreAndPosition.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function getGuildChannelPosition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.parent_id;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var4 = var5.getChannel;
            var1 = var2.parent_id;
            var4 = var4.bind(var5)(var1);
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4.position;
case 4:
            var4 = var3 != var1;
            var3 = 0;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1;
case 6:
            var1 = 1;
            var5 = var3 + var1;
            var1 = var2.isGuildVocal;
            var1 = var1.bind(var2)();
            var4 = var2.position;
            var3 = 1000;
            var3 = var3 * var5;
            var4 = var3 + var4;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var4;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var3 = 500;
            var1 = var4 + var3;
case 10:
            return var1;
case 2:
            var3 = var2.type;
            var1 = _closure1_slot1;
            var1 = var1.GUILD_CATEGORY;
            if(!(var3 !== var1)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var2.position;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var3 = var2.position;
            var2 = 1;
            var3 = var3 + var2;
            var2 = 1000;
            var1 = var2 * var3;
case 13:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_text_area/compareChannelsByScoreAndPosition.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function compareChannelsByScoreAndPosition(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var4 = var1.score;
            var3 = var2.score;
            if(!(var4 === var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot2;
            var3 = var1.record;
            var9 = undefined;
            var4 = var5.bind(var9)(var3);
            var3 = var2.record;
            var3 = var5.bind(var9)(var3);
            if(!(var4 === var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = var1.sortable;
            var8 = null;
            if(!(var8 == var5)) { _fun0002_ip = 9; continue _fun0002 }
case 18:
            var10 = var1.comparator;
            var7 = var8 == var10;
            var6 = undefined;
            if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var7 = var10.toLocaleLowerCase;
            var6 = var7.bind(var10)();
case 19:
            var5 = var6;
case 9:
            var10 = var8 != var5;
            var7 = '';
            var6 = var7;
            if(!var10) { _fun0002_ip = 2; continue _fun0002 }
case 21:
            var6 = var5;
case 2:
            var5 = var1.sortable;
            if(!(var8 == var5)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var11 = var2.comparator;
            var10 = var8 == var11;
            var9 = undefined;
            if(var10) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var10 = var11.toLocaleLowerCase;
            var9 = var10.bind(var11)();
case 24:
            var5 = var9;
case 22:
            var8 = var8 != var5;
            if(!var8) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = var5;
case 26:
            var8 = var6 < var7;
            var5 = -1;
            if(var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var7 = var6 > var7;
            var6 = 0;
            if(!var7) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var6 = 1;
case 30:
            var5 = var6;
case 28:
            return var5;
case 16:
            var3 = var4 - var3;
            return var3;
case 14:
            var2 = var2.score;
            var1 = var1.score;
            var1 = var2 - var1;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();