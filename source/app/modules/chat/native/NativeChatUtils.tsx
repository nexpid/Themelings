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
 0:
            var9 = arg1;
            var7 = arg2;
            var1 = arg3;
            var2 = null;
            if(!(var2 == var9)) { _fun0001_ip = 38; continue _fun0001 }
 15:
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = 'scrollTo';
            var3 = var5.bind(var4)(var3);
            _fun0001_ip = 243; continue _fun0001;
 38:
            if(!(var2 == var1)) { _fun0001_ip = 44; continue _fun0001 }
 42:
            var1 = {};
 44:
            var3 = var1.animated;
            var8 = undefined;
            var6 = var8 !== var3;
            if(!var6) { _fun0001_ip = 62; continue _fun0001 }
 59:
            var6 = var3;
 62:
            var3 = var1.highlight;
            var5 = var8 !== var3;
            if(!var5) { _fun0001_ip = 78; continue _fun0001 }
 75:
            var5 = var3;
 78:
            var4 = var1.position;
            if(!(var8 === var4)) { _fun0001_ip = 100; continue _fun0001 }
 87:
            var1 = _closure1_slot5;
            var4 = var1.TOP;
 100:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 2;
            var3 = var11[var3];
            var10 = var10.bind(var8)(var3);
            var3 = var10.isIOS;
            var3 = var3.bind(var10)();
            if(var3) { _fun0001_ip = 192; continue _fun0001 }
 136:
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
            _fun0001_ip = 243; continue _fun0001;
 192:
            var3 = _closure1_slot4;
            var3 = var3.bind(var8)(var9);
            if(!(var2 != var3)) { _fun0001_ip = 243; continue _fun0001 }
 205:
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
 243:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollTo'] = var9;
    var9 = function scrollToBottom(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var4 = arg2;
            var2 = null;
            if(!(var2 == var6)) { _fun0002_ip = 32; continue _fun0002 }
 12:
            var5 = _closure1_slot6;
            var3 = undefined;
            var1 = 'scrollToBottom';
            var1 = var5.bind(var3)(var1);
            _fun0002_ip = 145; continue _fun0002;
 32:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var7.bind(var5)(var3);
            var3 = var7.isIOS;
            var3 = var3.bind(var7)();
            if(var3) { _fun0002_ip = 110; continue _fun0002 }
 70:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var7 = var3.Commands;
            var3 = var7.scrollToBottom;
            var3 = var3.bind(var7)(var6, var4);
            _fun0002_ip = 145; continue _fun0002;
 110:
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var6);
            if(!(var2 != var3)) { _fun0002_ip = 145; continue _fun0002 }
 123:
            var1 = _closure1_slot3;
            var2 = var1.DCDChatManager;
            var1 = var2.scrollToBottom;
            var1 = var1.bind(var2)(var3, var4);
 145:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollToBottom'] = var9;
    var9 = function scrollToTop(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var2 = null;
            if(!(var2 == var5)) { _fun0003_ip = 29; continue _fun0003 }
 9:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'scrollToTop';
            var1 = var4.bind(var3)(var1);
            _fun0003_ip = 105; continue _fun0003;
 29:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0003_ip = 105; continue _fun0003 }
 67:
            var3 = _closure1_slot4;
            var4 = var3.bind(var4)(var5);
            if(!(var2 != var4)) { _fun0003_ip = 105; continue _fun0003 }
 80:
            var1 = _closure1_slot3;
            var3 = var1.DCDChatManager;
            var2 = var3.scrollToTop;
            var1 = arg2;
            var1 = var2.bind(var3)(var4, var1);
 105:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollToTop'] = var9;
    var9 = function scrollToRelativeOffset(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = null;
            if(!(var2 == var5)) { _fun0004_ip = 29; continue _fun0004 }
 9:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'scrollToRelativeOffset';
            var1 = var4.bind(var3)(var1);
            _fun0004_ip = 109; continue _fun0004;
 29:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0004_ip = 109; continue _fun0004 }
 67:
            var3 = _closure1_slot4;
            var5 = var3.bind(var4)(var5);
            if(!(var2 != var5)) { _fun0004_ip = 109; continue _fun0004 }
 80:
            var1 = _closure1_slot3;
            var4 = var1.DCDChatManager;
            var3 = var4.scrollToRelativeOffset;
            var2 = arg2;
            var1 = arg3;
            var1 = var3.bind(var4)(var5, var2, var1);
 109:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollToRelativeOffset'] = var9;
    var9 = function scrollIntoView(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var6 = arg2;
            var1 = arg3;
            var2 = null;
            if(!(var2 == var8)) { _fun0005_ip = 38; continue _fun0005 }
 15:
            var5 = _closure1_slot6;
            var4 = undefined;
            var3 = 'scrollIntoView';
            var3 = var5.bind(var4)(var3);
            _fun0005_ip = 215; continue _fun0005;
 38:
            if(!(var2 == var1)) { _fun0005_ip = 44; continue _fun0005 }
 42:
            var1 = {};
 44:
            var3 = var1.animated;
            var7 = undefined;
            var5 = var7 !== var3;
            if(!var5) { _fun0005_ip = 62; continue _fun0005 }
 59:
            var5 = var3;
 62:
            var1 = var1.highlight;
            var4 = var7 !== var1;
            if(!var4) { _fun0005_ip = 78; continue _fun0005 }
 75:
            var4 = var1;
 78:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 2;
            var3 = var10[var3];
            var9 = var9.bind(var7)(var3);
            var3 = var9.isIOS;
            var3 = var3.bind(var9)();
            if(var3) { _fun0005_ip = 167; continue _fun0005 }
 114:
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
            _fun0005_ip = 215; continue _fun0005;
 167:
            var3 = _closure1_slot4;
            var3 = var3.bind(var7)(var8);
            if(!(var2 != var3)) { _fun0005_ip = 215; continue _fun0005 }
 180:
            var1 = _closure1_slot3;
            var2 = var1.DCDChatManager;
            var1 = var2.scrollIntoView;
            var15 = var2;
            var14 = var3;
            var13 = var6;
            var12 = var5;
            var11 = var4;
            var1 = var15[var1](var14, var13, var12, var11, var10);
 215:
            var1 = undefined;
            return var1;
        }
    };
    var5['scrollIntoView'] = var9;
    var9 = function updateRows(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var11 = arg1;
            var10 = arg2;
            var1 = null;
            if(!(var1 == var11)) { _fun0006_ip = 35; continue _fun0006 }
 12:
            var4 = _closure1_slot6;
            var3 = undefined;
            var2 = 'updateRows';
            var2 = var4.bind(var3)(var2);
            _fun0006_ip = 287; continue _fun0006;
 35:
            var3 = _closure1_slot4;
            var12 = undefined;
            var9 = var3.bind(var12)(var11);
            if(!(var1 != var9)) { _fun0006_ip = 287; continue _fun0006 }
 56:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var4 = var4.bind(var12)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0006_ip = 111; continue _fun0006 }
 89:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var8 = var4.bind(var12)(var3);
            _fun0006_ip = 121; continue _fun0006;
 111:
            var3 = _closure1_slot3;
            var8 = var3.DCDChatManager;
 121:
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
            if(!var13) { _fun0006_ip = 196; continue _fun0006 }
 173:
            var14 = var3.JSON;
            var13 = var14.stringify;
            var3 = var10.scrollData;
            var4 = var13.bind(var14)(var3);
 196:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 5;
            var2 = var13[var2];
            var3 = var3.bind(var12)(var2);
            var2 = var3.getAndIncrementChangesetIdForChat;
            var3 = var2.bind(var3)(var11);
            var11 = var10.HACK_iOSForceAnimations;
            var2 = var1 != var11;
            if(!var2) { _fun0006_ip = 243; continue _fun0006 }
 240:
            var2 = var11;
 243:
            var10 = var10.forceReload;
            var1 = var1 != var10;
            if(!var1) { _fun0006_ip = 259; continue _fun0006 }
 256:
            var1 = var10;
 259:
            var22 = var8;
            var21 = var9;
            var20 = var6;
            var19 = var5;
            var18 = var4;
            var17 = var3;
            var16 = var2;
            var15 = var1;
            var1 = var22[var7](var21, var20, var19, var18, var17, var16, var15, var14);
 287:
            var1 = undefined;
            return var1;
        }
    };
    var5['updateRows'] = var9;
    var9 = function clearRows(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var6 = arg1;
            var2 = null;
            if(!(var2 == var6)) { _fun0007_ip = 32; continue _fun0007 }
 9:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'clearRows';
            var1 = var4.bind(var3)(var1);
            _fun0007_ip = 173; continue _fun0007;
 32:
            var3 = _closure1_slot4;
            var7 = undefined;
            var4 = var3.bind(var7)(var6);
            if(!(var2 == var4)) { _fun0007_ip = 65; continue _fun0007 }
 50:
            var3 = _closure1_slot6;
            var2 = 'clearRows';
            var2 = var3.bind(var7)(var2);
            _fun0007_ip = 173; continue _fun0007;
 65:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            if(var2) { _fun0007_ip = 120; continue _fun0007 }
 98:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var7)(var2);
            _fun0007_ip = 130; continue _fun0007;
 120:
            var2 = _closure1_slot3;
            var3 = var2.DCDChatManager;
 130:
            var2 = var3.clearRows;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var5 = var5.bind(var7)(var1);
            var1 = var5.getAndIncrementChangesetIdForChat;
            var1 = var1.bind(var5)(var6);
            var1 = var2.bind(var3)(var4, var1);
 173:
            var1 = undefined;
            return var1;
        }
    };
    var5['clearRows'] = var9;
    var9 = function fadeIn(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arg1;
            var2 = null;
            if(!(var2 == var5)) { _fun0008_ip = 29; continue _fun0008 }
 9:
            var4 = _closure1_slot6;
            var3 = undefined;
            var1 = 'fadeIn';
            var1 = var4.bind(var3)(var1);
            _fun0008_ip = 101; continue _fun0008;
 29:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0008_ip = 101; continue _fun0008 }
 67:
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5);
            if(!(var2 != var3)) { _fun0008_ip = 101; continue _fun0008 }
 80:
            var1 = _closure1_slot3;
            var2 = var1.DCDChatManager;
            var1 = var2.fadeIn;
            var1 = var1.bind(var2)(var3);
 101:
            var1 = undefined;
            return var1;
        }
    };
    var5['fadeIn'] = var9;
    var6 = function focus(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0009_ip = 100; continue _fun0009 }
 41:
            var3 = null;
            if(!(var3 == var5)) { _fun0009_ip = 62; continue _fun0009 }
 47:
            var6 = _closure1_slot6;
            var4 = 'focus';
            var4 = var6.bind(var1)(var4);
            _fun0009_ip = 100; continue _fun0009;
 62:
            var4 = _closure1_slot4;
            var5 = var4.bind(var1)(var5);
            if(!(var3 != var5)) { _fun0009_ip = 100; continue _fun0009 }
 75:
            var2 = _closure1_slot3;
            var4 = var2.DCDChatManager;
            var3 = var4.focus;
            var2 = arg2;
            var2 = var3.bind(var4)(var5, var2);
 100:
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