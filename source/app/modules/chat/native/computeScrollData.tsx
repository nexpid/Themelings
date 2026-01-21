// app/modules/chat/native/computeScrollData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function findMessageRowIndex(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = var3.findIndex;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.message;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var2.message;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 2:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var2 = -1;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = undefined;
            return var2;
case 4:
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
case 0:
            var1 = arg1;
            var13 = var1.rows;
            var16 = var1.scrollToMessageId;
            var14 = var1.jumpTargetId;
            var19 = var1.jumpType;
            var2 = var1.shouldInitialScroll;
            var3 = var1.animated;
            var9 = var1.scrollPosition;
            var11 = var1.focusTargetId;
            var1 = var1.onComputedScrollToUnread;
            if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var2 = null;
            if(!(var2 == var14)) { _fun0003_ip = 6; continue _fun0003 }
case 8:
            var5 = function findUnreadSeperatorRowIndex(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = arg1;
                            var4 = var3.type;
                            var1 = _closure1_slot3;
                            var1 = var1.SEPARATOR;
                            var1 = var4 === var1;
                            if(!var1) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                            var3 = var3.id;
                            var2 = _closure1_slot4;
                            var2 = var2.UNREAD;
                            var1 = var3 === var2;
case 9:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var2 = -1;
                    if(!(var2 === var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = undefined;
                    return var2;
case 11:
                    return var1;
                }
            };
            var4 = undefined;
            var6 = var5.bind(var4)(var13);
            if(!(var2 == var6)) { _fun0003_ip = 13; continue _fun0003 }
case 6:
            var8 = null;
            var7 = var8 != var16;
            var12 = undefined;
            var5 = undefined;
            if(!var7) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var7 = _closure1_slot5;
            var17 = var7.bind(var12)(var13, var16);
            var7 = var8 != var17;
            var5 = undefined;
            if(!var7) { _fun0003_ip = 14; continue _fun0003 }
case 16:
            var7 = {};
            var20 = _closure1_slot0;
            var18 = _closure1_slot1;
            var15 = 2;
            var18 = var18[var15];
            var18 = var20.bind(var12)(var18);
            var18 = var18.ChatScrollType;
            var18 = var18.SCROLL;
            var7['type'] = var18;
            var7['index'] = var17;
            var17 = _closure1_slot2;
            var17 = var17.useReducedMotion;
            var17 = !var17;
            if(!var17) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var18 = 3;
            var18 = var21[var18];
            var18 = var20.bind(var12)(var18);
            var18 = var18.JumpTypes;
            var18 = var18.INSTANT;
            var17 = var19 !== var18;
case 17:
            var7['animate'] = var17;
            var14 = var16 === var14;
            var7['highlight'] = var14;
            if(!(var8 == var9)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var14 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var15];
            var10 = var14.bind(var12)(var10);
            var10 = var10.ChatScrollPosition;
            var9 = var10.TOP;
case 19:
            var7['position'] = var9;
            var5 = var7;
case 14:
            if(!(var8 == var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var9 = var8 != var11;
            var7 = undefined;
            if(!var9) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = _closure1_slot5;
            var9 = var9.bind(var12)(var13, var11);
            var8 = var8 != var9;
            var7 = undefined;
            if(!var8) { _fun0003_ip = 23; continue _fun0003 }
case 25:
            var8 = {};
            var11 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 2;
            var10 = var13[var10];
            var10 = var11.bind(var12)(var10);
            var10 = var10.ChatScrollType;
            var10 = var10.FOCUS_ONLY;
            var8['type'] = var10;
            var8['index'] = var9;
            var7 = var8;
case 23:
            var5 = var7;
case 21:
            return var5;
case 13:
            if(!(var2 != var1)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var1 = var1.bind(var4)();
case 26:
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
            if(!var3) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var6 = _closure1_slot2;
            var6 = var6.useReducedMotion;
            var3 = !var6;
case 28:
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