// app/modules/messages/native/renderer/transformReactions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var1 = 6;
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
                var3 = var4.emoji;
                var10 = null;
                var2 = Object.create(var10);
                var5 = 0;
                var2['emoji'] = var5;
                var17 = {};
                var16 = var4;
                var15 = var2;
                var6 = copyDataProperties(var17, var16, var15);
                var2 = var6.count_details;
                var7 = var10 == var2;
                var4 = undefined;
                var1 = undefined;
                if(var7) { _fun0001_ip = 54; continue _fun0001 }
 48:
                var1 = var2.vote;
 54:
                if(!(var10 == var1)) { _fun0001_ip = 474; continue _fun0001 }
 61:
                var7 = _closure2_slot0;
                if(!var7) { _fun0001_ip = 77; continue _fun0001 }
 71:
                var7 = var3.animated;
 77:
                var1 = var3.id;
                if(!(var10 != var1)) { _fun0001_ip = 145; continue _fun0001 }
 86:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 1;
                var1 = var8[var1];
                var8 = var2.bind(var4)(var1);
                var2 = var8.getEmojiURL;
                var1 = {};
                var9 = var3.id;
                var1['id'] = var9;
                var1['animated'] = var7;
                var9 = 48;
                var1['size'] = var9;
                var9 = var2.bind(var8)(var1);
                _fun0001_ip = 181; continue _fun0001;
 145:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var8 = var2.bind(var4)(var1);
                var2 = var8.getURL;
                var1 = var3.name;
                var9 = var2.bind(var8)(var1);
 181:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 2;
                var1 = var11[var1];
                var13 = var8.bind(var4)(var1);
                var12 = var13.getAccessibleEmojiDisplayName;
                var17 = var6.me;
                var16 = var6.count;
                var1 = var6.burst_count;
                var14 = var1 > var5;
                var18 = var13;
                var15 = var3;
                var8 = var18[var12](var17, var16, var15, var14, var13);
                var1 = var3.id;
                var1 = var10 == var1;
                var10 = null;
                if(var1) { _fun0001_ip = 283; continue _fun0001 }
 256:
                var12 = var3.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var11 = var1.concat;
                var1 = '';
                var10 = var11.bind(var1)(var12);
 283:
                var1 = {};
                var17 = var1;
                var16 = var6;
                var6 = copyDataProperties(var17, var16);
                var6 = {};
                var17 = var6;
                var16 = var3;
                var3 = copyDataProperties(var17, var16);
                var3 = 'id';
                var6[var3] = var10;
                var3 = 'src';
                var6[var3] = var9;
                var3 = 'displayName';
                var6[var3] = var8;
                var3 = 'animated';
                var6[var3] = var7;
                var3 = 'emoji';
                var1[var3] = var6;
                var3 = global;
                var7 = var3.Array;
                var6 = var7.isArray;
                var3 = var1.burst_colors;
                var3 = var6.bind(var7)(var3);
                if(!var3) { _fun0001_ip = 472; continue _fun0001 }
 379:
                var3 = var1.burst_colors;
                var3 = var3.length;
                if(!(var3 > var5)) { _fun0001_ip = 472; continue _fun0001 }
 394:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var3 = var2.buildPlatformedThemedEmojiColorPalette;
                var2 = {};
                var5 = var1.burst_colors;
                var2['colors'] = var5;
                var5 = 4;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.isIOS;
                var5 = var5.bind(var6)();
                var2['shouldProcessMobileColors'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['themedBurstColors'] = var2;
 472:
                return var1;
 474:
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
                var5 = 5;
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