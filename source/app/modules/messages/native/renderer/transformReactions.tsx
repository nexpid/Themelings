// app/modules/messages/native/renderer/transformReactions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/transformReactions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformReactions(arg1) {
        var2 = arg1;
        var4 = var2.reactions;
        var2 = var2.animateEmoji;
        var _closure2_slot0 = var2;
        var3 = var4.flatMap;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var2 = var4.emoji;
                var7 = null;
                var3 = Object.create(var7);
                var11 = 0;
                var3['emoji'] = var11;
                var15 = {};
                var14 = var4;
                var13 = var3;
                var3 = copyDataProperties(var15, var14, var13);
                var4 = var3.count_details;
                var5 = var7 == var4;
                var8 = undefined;
                var1 = undefined;
                if(var5) { _fun0001_ip = 56; continue _fun0001 }
 50:
                var1 = var4.vote;
 56:
                if(!(var7 == var1)) { _fun0001_ip = 357; continue _fun0001 }
 63:
                var4 = _closure2_slot0;
                if(!var4) { _fun0001_ip = 79; continue _fun0001 }
 73:
                var4 = var2.animated;
 79:
                var1 = var2.id;
                if(!(var7 != var1)) { _fun0001_ip = 147; continue _fun0001 }
 88:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 1;
                var1 = var6[var1];
                var6 = var5.bind(var8)(var1);
                var5 = var6.getEmojiURL;
                var1 = {};
                var9 = var2.id;
                var1['id'] = var9;
                var1['animated'] = var4;
                var9 = 48;
                var1['size'] = var9;
                var6 = var5.bind(var6)(var1);
                _fun0001_ip = 183; continue _fun0001;
 147:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var9 = var5.bind(var8)(var1);
                var5 = var9.getURL;
                var1 = var2.name;
                var6 = var5.bind(var9)(var1);
 183:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 2;
                var1 = var9[var1];
                var10 = var5.bind(var8)(var1);
                var9 = var10.getAccessibleEmojiDisplayName;
                var15 = var3.me;
                var14 = var3.count;
                var1 = var3.burst_count;
                var12 = var1 > var11;
                var16 = var10;
                var13 = var2;
                var5 = var16[var9](var15, var14, var13, var12, var11);
                var1 = var2.id;
                if(!(var7 != var1)) { _fun0001_ip = 281; continue _fun0001 }
 252:
                var8 = var2.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var1 = '';
                var7 = var7.bind(var1)(var8);
                _fun0001_ip = 286; continue _fun0001;
 281:
                var7 = var2.id;
 286:
                var1 = {};
                var15 = var1;
                var14 = var3;
                var3 = copyDataProperties(var15, var14);
                var3 = {};
                var15 = var3;
                var14 = var2;
                var2 = copyDataProperties(var15, var14);
                var2 = 'id';
                var3[var2] = var7;
                var2 = 'src';
                var3[var2] = var6;
                var2 = 'displayName';
                var3[var2] = var5;
                var2 = 'animated';
                var3[var2] = var4;
                var2 = 'emoji';
                var1[var2] = var3;
                return var1;
 357:
                var1 = new Array(0);
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var4 = var6.burst_count;
                var5 = null;
                var3 = Object.create(var5);
                var1 = 0;
                var3['burst_count'] = var1;
                var11 = {};
                var10 = var6;
                var9 = var3;
                var2 = copyDataProperties(var11, var10, var9);
                var3 = var4;
                if(!(var5 === var3)) { _fun0002_ip = 119; continue _fun0002 }
 40:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 3;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.captureMessage;
                var8 = {};
                var8['burst_count'] = var4;
                var11 = var8;
                var10 = var2;
                var4 = copyDataProperties(var11, var10);
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var4 = 'Null burst_count while transforming reaction: ';
                var4 = var7.bind(var4)(var8);
                var4 = var5.bind(var6)(var4);
                var3 = 0;
 119:
                var1 = {};
                var11 = var1;
                var10 = var2;
                var2 = copyDataProperties(var11, var10);
                var2 = 'burst_count';
                var1[var2] = var3;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();