// app/modules/channel_text_area/compareChannelsByScoreAndPosition.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = function getGuildChannelPosition(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.parent_id;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 120; continue _fun0001 }
 15:
            var5 = _closure1_slot0;
            var4 = var5.getChannel;
            var1 = var2.parent_id;
            var4 = var4.bind(var5)(var1);
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 52; continue _fun0001 }
 47:
            var1 = var4.position;
 52:
            var4 = var3 != var1;
            var3 = 0;
            if(!var4) { _fun0001_ip = 64; continue _fun0001 }
 61:
            var3 = var1;
 64:
            var1 = 1;
            var5 = var3 + var1;
            var1 = var2.isGuildVocal;
            var1 = var1.bind(var2)();
            var4 = var2.position;
            var3 = 1000;
            var3 = var3 * var5;
            var4 = var3 + var4;
            if(var1) { _fun0001_ip = 108; continue _fun0001 }
 103:
            var1 = var4;
            _fun0001_ip = 118; continue _fun0001;
 108:
            var3 = 500;
            var1 = var4 + var3;
 118:
            return var1;
 120:
            var3 = var2.type;
            var1 = _closure1_slot1;
            var1 = var1.GUILD_CATEGORY;
            if(!(var3 !== var1)) { _fun0001_ip = 149; continue _fun0001 }
 142:
            var1 = var2.position;
            _fun0001_ip = 171; continue _fun0001;
 149:
            var3 = var2.position;
            var2 = 1;
            var3 = var3 + var2;
            var2 = 1000;
            var1 = var2 * var3;
 171:
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
    var4 = native3;
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
 0:
            var1 = arg1;
            var2 = arg2;
            var4 = var1.score;
            var3 = var2.score;
            if(!(var4 === var3)) { _fun0002_ip = 204; continue _fun0002 }
 25:
            var5 = _closure1_slot2;
            var3 = var1.record;
            var9 = undefined;
            var4 = var5.bind(var9)(var3);
            var3 = var2.record;
            var3 = var5.bind(var9)(var3);
            if(!(var4 === var3)) { _fun0002_ip = 198; continue _fun0002 }
 63:
            var5 = var1.sortable;
            var8 = null;
            if(!(var8 == var5)) { _fun0002_ip = 103; continue _fun0002 }
 75:
            var10 = var1.comparator;
            var7 = var8 == var10;
            var6 = undefined;
            if(var7) { _fun0002_ip = 100; continue _fun0002 }
 90:
            var7 = var10.toLocaleLowerCase;
            var6 = var7.bind(var10)();
 100:
            var5 = var6;
 103:
            var10 = var8 != var5;
            var7 = '';
            var6 = var7;
            if(!var10) { _fun0002_ip = 120; continue _fun0002 }
 117:
            var6 = var5;
 120:
            var5 = var1.sortable;
            if(!(var8 == var5)) { _fun0002_ip = 158; continue _fun0002 }
 130:
            var11 = var2.comparator;
            var10 = var8 == var11;
            var9 = undefined;
            if(var10) { _fun0002_ip = 155; continue _fun0002 }
 145:
            var10 = var11.toLocaleLowerCase;
            var9 = var10.bind(var11)();
 155:
            var5 = var9;
 158:
            var8 = var8 != var5;
            if(!var8) { _fun0002_ip = 168; continue _fun0002 }
 165:
            var7 = var5;
 168:
            var8 = var6 < var7;
            var5 = -1;
            if(var8) { _fun0002_ip = 196; continue _fun0002 }
 181:
            var7 = var6 > var7;
            var6 = 0;
            if(!var7) { _fun0002_ip = 193; continue _fun0002 }
 190:
            var6 = 1;
 193:
            var5 = var6;
 196:
            return var5;
 198:
            var3 = var4 - var3;
            return var3;
 204:
            var2 = var2.score;
            var1 = var1.score;
            var1 = var2 - var1;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();