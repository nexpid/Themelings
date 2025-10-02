// app/modules/chat/native/NativeChatUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var1 = function logMissingView(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.captureMessage;
        var2 = global;
        var2 = var2.HermesInternal;
        var7 = var2.concat;
        var6 = '';
        var5 = arg1;
        var2 = ' called with null view';
        var2 = var7.bind(var6)(var5, var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var10 = 0;
    var2 = var8[var10];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var4 = var2.NativeModules;
    var _closure1_slot3 = var4;
    var2 = var2.findNodeHandle;
    var _closure1_slot4 = var2;
    var4 = {};
    var4['TOP'] = var10;
    var2 = 'TOP';
    var4[var10] = var2;
    var9 = 1;
    var4['MIDDLE'] = var9;
    var2 = 'MIDDLE';
    var4[var9] = var2;
    var5 = 2;
    var4['BOTTOM'] = var5;
    var2 = 'BOTTOM';
    var4[var5] = var2;
    var5 = 3;
    var4['NONE'] = var5;
    var2 = 'NONE';
    var4[var5] = var2;
    var _closure1_slot5 = var4;
    var2 = {};
    var2['SCROLL'] = var10;
    var5 = 'SCROLL';
    var2[var10] = var5;
    var2['FOCUS_ONLY'] = var9;
    var5 = 'FOCUS_ONLY';
    var2[var9] = var5;
    var5 = {};
    var9 = function scrollTo(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var7 = arg2;
            var1 = arg3;
            var2 = null;
            if(!(var2 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = 'scrollTo';
            var3 = var5.bind(var4)(var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            if(!(var2 == var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = {};
case 5:
            var3 = var1.animated;
            var8 = undefined;
            var6 = var8 !== var3;
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var3;
case 7:
            var3 = var1.highlight;
            var5 = var8 !== var3;
            if(!var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var3;
case 9:
            var4 = var1.position;
            if(!(var8 === var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = _closure1_slot5;
            var4 = var1.TOP;
case 11:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 2;
            var3 = var11[var3];
            var10 = var10.bind(var8)(var3);
            var3 = var10.isIOS;
            var3 = var3.bind(var10)();
            if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 3;
            var3 = var11[var3];
            var3 = var10.bind(var8)(var3);
            var10 = var3.Commands;
            var3 = var10.scrollTo;
            var17 = var10;
            var16 = var9;
            var15 = var7;
            var14 = var6;
            var13 = var5;
            var12 = var4;
            var3 = var17[var3](var16, var15, var14, var13, var12, var11);
            _fun0001_ip = 4; continue _fun0001;
case 13:
            var3 = _closure1_slot4;
            var3 = var3.bind(var8)(var9);
            if(!(var2 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 15:
            var1 = _closure1_slot3;
            var2 = var1.DCDChatManager;
            var1 = var2.scrollTo;
            var17 = var2;
            var16 = var3;
            var15 = var7;
            var14 = var6;
            var13 = var5;
            var12 = var4;
            var1 = var17[var1](var16, var15, var14, var13, var12, var11);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollTo'] = var9;
    var9 = function scrollToBottom(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var2 = null;
            if(!(var2 == var6)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = _closure1_slot6;
            var3 = undefined;
            var1 = 'scrollToBottom';
            var1 = var5.bind(var3)(var1);
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var7.bind(var5)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var7 = var3.Commands;
            var3 = var7.scrollToBottom;
            var3 = var3.bind(var7)(var6, var4);
            _fun0002_ip = 18; continue _fun0002;
case 19:
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var6);
            if(!(var2 != var3)) { _fun0002_ip = 18; continue _fun0002 }
case 21:
            var1 = _closure1_slot3;
            var2 = var1.DCDChatManager;
            var1 = var2.scrollToBottom;
            var1 = var1.bind(var2)(var3, var4);
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollToBottom'] = var9;
    var9 = function scrollToTop(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var2 = null;
            if(!(var2 == var5)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'scrollToTop';
            var1 = var4.bind(var3)(var1);
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = _closure1_slot4;
            var4 = var3.bind(var4)(var5);
            if(!(var2 != var4)) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var1 = _closure1_slot3;
            var3 = var1.DCDChatManager;
            var2 = var3.scrollToTop;
            var1 = arg2;
            var1 = var2.bind(var3)(var4, var1);
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollToTop'] = var9;
    var9 = function scrollToRelativeOffset(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var2 = null;
            if(!(var2 == var5)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'scrollToRelativeOffset';
            var1 = var4.bind(var3)(var1);
            _fun0004_ip = 27; continue _fun0004;
case 22:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0004_ip = 27; continue _fun0004 }
case 25:
            var3 = _closure1_slot4;
            var5 = var3.bind(var4)(var5);
            if(!(var2 != var5)) { _fun0004_ip = 27; continue _fun0004 }
case 26:
            var1 = _closure1_slot3;
            var4 = var1.DCDChatManager;
            var3 = var4.scrollToRelativeOffset;
            var2 = arg2;
            var1 = arg3;
            var1 = var3.bind(var4)(var5, var2, var1);
case 27:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollToRelativeOffset'] = var9;
    var9 = function scrollIntoView(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg1;
            var6 = arg2;
            var1 = arg3;
            var2 = null;
            if(!(var2 == var8)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = 'scrollIntoView';
            var3 = var5.bind(var4)(var3);
            _fun0005_ip = 28; continue _fun0005;
case 2:
            if(!(var2 == var1)) { _fun0005_ip = 5; continue _fun0005 }
case 6:
            var1 = {};
case 5:
            var3 = var1.animated;
            var7 = undefined;
            var5 = var7 !== var3;
            if(!var5) { _fun0005_ip = 7; continue _fun0005 }
case 8:
            var5 = var3;
case 7:
            var1 = var1.highlight;
            var4 = var7 !== var1;
            if(!var4) { _fun0005_ip = 9; continue _fun0005 }
case 10:
            var4 = var1;
case 9:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 2;
            var3 = var10[var3];
            var9 = var9.bind(var7)(var3);
            var3 = var9.isIOS;
            var3 = var3.bind(var9)();
            if(var3) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 3;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var9 = var3.Commands;
            var3 = var9.scrollIntoView;
            var15 = var9;
            var14 = var8;
            var13 = var6;
            var12 = var5;
            var11 = var4;
            var3 = var15[var3](var14, var13, var12, var11, var10);
            _fun0005_ip = 28; continue _fun0005;
case 29:
            var3 = _closure1_slot4;
            var3 = var3.bind(var7)(var8);
            if(!(var2 != var3)) { _fun0005_ip = 28; continue _fun0005 }
case 31:
            var1 = _closure1_slot3;
            var2 = var1.DCDChatManager;
            var1 = var2.scrollIntoView;
            var15 = var2;
            var14 = var3;
            var13 = var6;
            var12 = var5;
            var11 = var4;
            var1 = var15[var1](var14, var13, var12, var11, var10);
case 28:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollIntoView'] = var9;
    var9 = function updateRows(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var1 = null;
            if(!(var1 == var11)) { _fun0006_ip = 32; continue _fun0006 }
case 17:
            var4 = _closure1_slot6;
            var3 = undefined;
            var2 = 'updateRows';
            var2 = var4.bind(var3)(var2);
            _fun0006_ip = 33; continue _fun0006;
case 32:
            var3 = _closure1_slot4;
            var12 = undefined;
            var9 = var3.bind(var12)(var11);
            if(!(var1 != var9)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var4 = var4.bind(var12)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var8 = var4.bind(var12)(var3);
            _fun0006_ip = 37; continue _fun0006;
case 35:
            var3 = _closure1_slot3;
            var8 = var3.DCDChatManager;
case 37:
            var7 = var8.updateRows;
            var3 = global;
            var6 = var3.JSON;
            var5 = var6.stringify;
            var4 = var10.rows;
            var6 = var5.bind(var6)(var4);
            var5 = var10.isLoadingAtTop;
            var4 = var10.scrollData;
            var13 = var1 != var4;
            var4 = null;
            if(!var13) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var14 = var3.JSON;
            var13 = var14.stringify;
            var3 = var10.scrollData;
            var4 = var13.bind(var14)(var3);
case 38:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 5;
            var2 = var13[var2];
            var3 = var3.bind(var12)(var2);
            var2 = var3.getAndIncrementChangesetIdForChat;
            var3 = var2.bind(var3)(var11);
            var11 = var10.HACK_iOSForceAnimations;
            var2 = var1 != var11;
            if(!var2) { _fun0006_ip = 4; continue _fun0006 }
case 40:
            var2 = var11;
case 4:
            var10 = var10.forceReload;
            var1 = var1 != var10;
            if(!var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var1 = var10;
case 41:
            var22 = var8;
            var21 = var9;
            var20 = var6;
            var19 = var5;
            var18 = var4;
            var17 = var3;
            var16 = var2;
            var15 = var1;
            var1 = var22[var7](var21, var20, var19, var18, var17, var16, var15, var14);
case 33:
            var1 = undefined;
            return var1;
        }
    };
    var5['updateRows'] = var9;
    var9 = function clearRows(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var2 = null;
            if(!(var2 == var6)) { _fun0007_ip = 16; continue _fun0007 }
case 23:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'clearRows';
            var1 = var4.bind(var3)(var1);
            _fun0007_ip = 39; continue _fun0007;
case 16:
            var3 = _closure1_slot4;
            var7 = undefined;
            var4 = var3.bind(var7)(var6);
            if(!(var2 == var4)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var3 = _closure1_slot6;
            var2 = 'clearRows';
            var2 = var3.bind(var7)(var2);
            _fun0007_ip = 39; continue _fun0007;
case 43:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            if(var2) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var7)(var2);
            _fun0007_ip = 47; continue _fun0007;
case 45:
            var2 = _closure1_slot3;
            var3 = var2.DCDChatManager;
case 47:
            var2 = var3.clearRows;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var5 = var5.bind(var7)(var1);
            var1 = var5.getAndIncrementChangesetIdForChat;
            var1 = var1.bind(var5)(var6);
            var1 = var2.bind(var3)(var4, var1);
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var5['clearRows'] = var9;
    var9 = function fadeIn(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var2 = null;
            if(!(var2 == var5)) { _fun0008_ip = 22; continue _fun0008 }
case 23:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'fadeIn';
            var1 = var4.bind(var3)(var1);
            _fun0008_ip = 48; continue _fun0008;
case 22:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0008_ip = 48; continue _fun0008 }
case 25:
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5);
            if(!(var2 != var3)) { _fun0008_ip = 48; continue _fun0008 }
case 26:
            var1 = _closure1_slot3;
            var2 = var1.DCDChatManager;
            var1 = var2.fadeIn;
            var1 = var1.bind(var2)(var3);
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var5['fadeIn'] = var9;
    var6 = function focus(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0009_ip = 11; continue _fun0009 }
case 49:
            var3 = null;
            if(!(var3 == var5)) { _fun0009_ip = 7; continue _fun0009 }
case 50:
            var6 = _closure1_slot6;
            var4 = 'focus';
            var4 = var6.bind(var1)(var4);
            _fun0009_ip = 11; continue _fun0009;
case 7:
            var4 = _closure1_slot4;
            var5 = var4.bind(var1)(var5);
            if(!(var3 != var5)) { _fun0009_ip = 11; continue _fun0009 }
case 10:
            var2 = _closure1_slot3;
            var4 = var2.DCDChatManager;
            var3 = var4.focus;
            var2 = arg2;
            var2 = var3.bind(var4)(var5, var2);
case 11:
            return var1;
        }
    };
    var5['focus'] = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/chat/native/NativeChatUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['ChatScrollPosition'] = var4;
    var3['ChatScrollType'] = var2;
    return var1;
})();