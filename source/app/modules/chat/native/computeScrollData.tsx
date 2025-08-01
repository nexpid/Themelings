// app/modules/chat/native/computeScrollData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function findMessageRowIndex(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = var3.findIndex;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.message;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 38; continue _fun0002 }
 17:
                    var2 = var2.message;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
 38:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var2 = -1;
            if(!(var2 === var1)) { _fun0001_ip = 44; continue _fun0001 }
 40:
            var2 = undefined;
            return var2;
 44:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.RowType;
    var _closure1_slot3 = var8;
    var5 = var5.SeparatorType;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat/native/computeScrollData.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function computeScrollData(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var11 = var2.rows;
            var14 = var2.scrollToMessageId;
            var12 = var2.jumpTargetId;
            var17 = var2.jumpType;
            var1 = var2.shouldInitialScroll;
            var3 = var2.animated;
            var7 = var2.scrollPosition;
            var9 = var2.focusTargetId;
            if(!var1) { _fun0003_ip = 83; continue _fun0003 }
 54:
            var1 = null;
            if(!(var1 == var12)) { _fun0003_ip = 83; continue _fun0003 }
 60:
            var2 = function findUnreadSeperatorRowIndex(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = arg1;
                            var4 = var3.type;
                            var1 = _closure1_slot3;
                            var1 = var1.SEPARATOR;
                            var1 = var4 === var1;
                            if(!var1) { _fun0005_ip = 47; continue _fun0005 }
 28:
                            var3 = var3.id;
                            var2 = _closure1_slot4;
                            var2 = var2.UNREAD;
                            var1 = var3 === var2;
 47:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var2 = -1;
                    if(!(var2 === var1)) { _fun0004_ip = 37; continue _fun0004 }
 33:
                    var2 = undefined;
                    return var2;
 37:
                    return var1;
                }
            };
            var4 = undefined;
            var6 = var2.bind(var4)(var11);
            if(!(var1 == var6)) { _fun0003_ip = 357; continue _fun0003 }
 83:
            var5 = null;
            var2 = var5 != var14;
            var10 = undefined;
            var1 = undefined;
            if(!var2) { _fun0003_ip = 272; continue _fun0003 }
 99:
            var2 = _closure1_slot5;
            var15 = var2.bind(var10)(var11, var14);
            var2 = var5 != var15;
            var1 = undefined;
            if(!var2) { _fun0003_ip = 272; continue _fun0003 }
 124:
            var2 = {};
            var18 = _closure1_slot0;
            var16 = _closure1_slot1;
            var13 = 2;
            var16 = var16[var13];
            var16 = var18.bind(var10)(var16);
            var16 = var16.ChatScrollType;
            var16 = var16.SCROLL;
            var2['type'] = var16;
            var2['index'] = var15;
            var15 = _closure1_slot2;
            var15 = var15.useReducedMotion;
            var15 = !var15;
            if(!var15) { _fun0003_ip = 218; continue _fun0003 }
 182:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var16 = 3;
            var16 = var19[var16];
            var16 = var18.bind(var10)(var16);
            var16 = var16.JumpTypes;
            var16 = var16.INSTANT;
            var15 = var17 !== var16;
 218:
            var2['animate'] = var15;
            var12 = var14 === var12;
            var2['highlight'] = var12;
            if(!(var5 == var7)) { _fun0003_ip = 265; continue _fun0003 }
 236:
            var12 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var13];
            var8 = var12.bind(var10)(var8);
            var8 = var8.ChatScrollPosition;
            var7 = var8.TOP;
 265:
            var2['position'] = var7;
            var1 = var2;
 272:
            if(!(var5 == var1)) { _fun0003_ip = 355; continue _fun0003 }
 276:
            var7 = var5 != var9;
            var2 = undefined;
            if(!var7) { _fun0003_ip = 352; continue _fun0003 }
 285:
            var7 = _closure1_slot5;
            var7 = var7.bind(var10)(var11, var9);
            var5 = var5 != var7;
            var2 = undefined;
            if(!var5) { _fun0003_ip = 352; continue _fun0003 }
 307:
            var5 = {};
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 2;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.ChatScrollType;
            var8 = var8.FOCUS_ONLY;
            var5['type'] = var8;
            var5['index'] = var7;
            var2 = var5;
 352:
            var1 = var2;
 355:
            return var1;
 357:
            var1 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 2;
            var7 = var7[var5];
            var7 = var8.bind(var4)(var7);
            var7 = var7.ChatScrollType;
            var7 = var7.SCROLL;
            var1['type'] = var7;
            var1['index'] = var6;
            if(!var3) { _fun0003_ip = 418; continue _fun0003 }
 405:
            var6 = _closure1_slot2;
            var6 = var6.useReducedMotion;
            var3 = !var6;
 418:
            var1['animate'] = var3;
            var3 = false;
            var1['highlight'] = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ChatScrollPosition;
            var2 = var2.TOP;
            var1['position'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['findMessageRowIndex'] = var2;
    return var1;
})();