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
    var1 = 7;
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
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 0;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.shouldSkipAccessibilityLabels;
        var2 = var2.bind(var3)();
        var _closure2_slot1 = var2;
        var3 = var4.flatMap;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var2 = var5.emoji;
                var9 = null;
                var4 = Object.create(var9);
                var3 = 0;
                var4['emoji'] = var3;
                var16 = {};
                var15 = var5;
                var14 = var4;
                var5 = copyDataProperties(var16, var15, var14);
                var6 = var5.count_details;
                var7 = var9 == var6;
                var4 = undefined;
                var1 = undefined;
                if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var6.vote;
case 2:
                if(!(var9 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = _closure2_slot0;
                if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = var2.animated;
case 6:
                var7 = var2.id;
                if(!(var9 != var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 2;
                var7 = var10[var7];
                var10 = var8.bind(var4)(var7);
                var8 = var10.getEmojiURL;
                var7 = {};
                var11 = var2.id;
                var7['id'] = var11;
                var7['animated'] = var6;
                var11 = 48;
                var7['size'] = var11;
                var8 = var8.bind(var10)(var7);
                _fun0001_ip = 10; continue _fun0001;
case 8:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 1;
                var7 = var11[var7];
                var11 = var10.bind(var4)(var7);
                var10 = var11.getURL;
                var7 = var2.name;
                var8 = var10.bind(var11)(var7);
case 10:
                var1 = _closure2_slot1;
                if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 3;
                var1 = var10[var1];
                var12 = var7.bind(var4)(var1);
                var11 = var12.getAccessibleEmojiDisplayName;
                var16 = var5.me;
                var15 = var5.count;
                var1 = var5.burst_count;
                var13 = var1 > var3;
                var17 = var12;
                var14 = var2;
                var7 = var17[var11](var16, var15, var14, var13, var12);
                _fun0001_ip = 13; continue _fun0001;
case 11:
                var10 = var2.name;
                var11 = var9 != var10;
                var1 = '';
                if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var1 = var10;
case 14:
                var7 = var1;
case 13:
                var1 = var2.id;
                var1 = var9 == var1;
                var9 = null;
                if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var11 = var2.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var10 = var1.concat;
                var1 = '';
                var9 = var10.bind(var1)(var11);
case 16:
                var1 = {};
                var16 = var1;
                var15 = var5;
                var5 = copyDataProperties(var16, var15);
                var5 = {};
                var16 = var5;
                var15 = var2;
                var2 = copyDataProperties(var16, var15);
                var2 = 'id';
                var5[var2] = var9;
                var2 = 'src';
                var5[var2] = var8;
                var2 = 'displayName';
                var5[var2] = var7;
                var2 = 'animated';
                var5[var2] = var6;
                var2 = 'emoji';
                var1[var2] = var5;
                var2 = global;
                var6 = var2.Array;
                var5 = var6.isArray;
                var2 = var1.burst_colors;
                var2 = var5.bind(var6)(var2);
                if(!var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var2 = var1.burst_colors;
                var2 = var2.length;
                if(!(var2 > var3)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var3 = var2.buildPlatformedThemedEmojiColorPalette;
                var2 = {};
                var5 = var1.burst_colors;
                var2['colors'] = var5;
                var5 = 5;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.isIOS;
                var5 = var5.bind(var6)();
                var2['shouldProcessMobileColors'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['themedBurstColors'] = var2;
case 18:
                return var1;
case 4:
                var1 = new Array(0);
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                if(!(var5 === var3)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 6;
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
case 21:
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