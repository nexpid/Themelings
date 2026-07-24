// app/modules/autocompleter/native/useMentionAnchor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function isMentionAnchorValid(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var7 = arg3;
            var2 = arg4;
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 0;
            var1 = var7 >= var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var6.startsWith;
            var1 = var3.bind(var6)(var2, var7);
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.length;
            var3 = var7 + var3;
            var1 = var5 >= var3;
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var3 = var4.isUnbrokenRun;
            var2 = var2.length;
            var2 = var7 + var2;
            var1 = var3.bind(var4)(var6, var2, var5);
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function transition(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var4 = arg3;
            var3 = var4.enabled;
            var7 = var4.text;
            var10 = var4.selectionEnd;
            var6 = var4.prefix;
            if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = {};
            var4 = _closure1_slot5;
            var3['search'] = var4;
            var4 = null;
            var3['cleanupAnchor'] = var4;
            return var3;
case 10:
            var3 = var2.search;
            var4 = var2.cleanupAnchor;
            var5 = var3.kind;
            var8 = 'idle';
            if(!(var8 !== var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = 'active';
            if(!(var11 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var12 = 'pending';
            if(!(var12 !== var5)) { _fun0002_ip = 8; continue _fun0002 }
case 16:
            var5 = undefined;
            return var5;
case 8:
            var9 = var3.anchor;
            var5 = var3.seenText;
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = var7.startsWith;
            var8 = var8.bind(var7)(var6, var9);
            if(var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var8 = var7.length;
            if(!(!(var9 > var8))) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = null;
            if(!(var8 != var5)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            if(!(var5 !== var7)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var5 = {};
            var8 = _closure1_slot5;
            var5['search'] = var8;
            var5['cleanupAnchor'] = var4;
            var2 = var5;
case 25:
            _fun0002_ip = 27; continue _fun0002;
case 23:
            var5 = {};
            var8 = {};
            var8['kind'] = var12;
            var8['anchor'] = var9;
            var8['seenText'] = var7;
            var5['search'] = var8;
            var5['cleanupAnchor'] = var4;
            var2 = var5;
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 21:
            var5 = {};
            var8 = _closure1_slot5;
            var5['search'] = var8;
            var5['cleanupAnchor'] = var4;
            var2 = var5;
case 28:
            _fun0002_ip = 29; continue _fun0002;
case 19:
            var5 = {};
            var8 = {'kind': 'pending', 'anchor': null, 'seenText': null};
            var8['anchor'] = var9;
            var5['search'] = var8;
            var5['cleanupAnchor'] = var4;
            var2 = var5;
case 29:
            _fun0002_ip = 30; continue _fun0002;
case 17:
            var5 = {};
            var8 = {};
            var8['kind'] = var11;
            var8['anchor'] = var9;
            var5['search'] = var8;
            var5['cleanupAnchor'] = var4;
            var2 = var5;
case 30:
            return var2;
case 14:
            var2 = {};
            if(var1) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = _closure1_slot5;
            var2['search'] = var1;
            var1 = var7.includes;
            var5 = var1.bind(var7)(var6);
            var1 = null;
            if(!var5) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var1 = var3.anchor;
case 33:
            var2['cleanupAnchor'] = var1;
            var1 = var2;
            _fun0002_ip = 35; continue _fun0002;
case 31:
            var2['search'] = var3;
            var3 = null;
            var2['cleanupAnchor'] = var3;
            var1 = var2;
case 35:
            return var1;
case 12:
            var1 = var7.lastIndexOf;
            var2 = var1.bind(var7)(var6, var10);
            var3 = null;
            var1 = -1;
            var5 = null;
            if(!(var1 !== var2)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var11 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 3;
            var1 = var9[var1];
            var9 = undefined;
            var11 = var11.bind(var9)(var1);
            var1 = var11.isWhitespaceSeparatingBoundary;
            var11 = var1.bind(var11)(var7, var2);
            var1 = null;
            if(!var11) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var8 = _closure1_slot7;
            var17 = undefined;
            var16 = var7;
            var15 = var10;
            var14 = var2;
            var13 = var6;
            var8 = var17[var8](var16, var15, var14, var13, var12);
            var1 = null;
            if(!var8) { _fun0002_ip = 38; continue _fun0002 }
case 40:
            var1 = var2;
case 38:
            var5 = var1;
case 36:
            if(!(var3 == var5)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var1 = {};
            var2 = _closure1_slot5;
            var1['search'] = var2;
            var2 = var7.includes;
            var6 = var2.bind(var7)(var6);
            var2 = null;
            if(!var6) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var2 = var4;
case 43:
            var1['cleanupAnchor'] = var2;
            _fun0002_ip = 45; continue _fun0002;
case 41:
            var2 = {};
            var4 = {'kind': 'pending', 'anchor': null, 'seenText': null};
            var4['anchor'] = var5;
            var2['search'] = var4;
            var2['cleanupAnchor'] = var3;
            var1 = var2;
case 45:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WHITESPACE_RE;
    var _closure1_slot4 = var4;
    var7 = {};
    var4 = 'idle';
    var7['kind'] = var4;
    var _closure1_slot5 = var7;
    var4 = {};
    var4['search'] = var7;
    var7 = null;
    var4['cleanupAnchor'] = var7;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/native/useMentionAnchor.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMentionAnchor(arg1, arg2, arg3, arg4, arg5) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var15 = arg2;
            var1 = arg3;
            var6 = arg4;
            var8 = arg5;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var8;
            var7 = _closure1_slot3;
            var5 = var7.useState;
            var3 = _closure1_slot6;
            var7 = var5.bind(var7)(var3);
            var5 = _closure1_slot2;
            var11 = undefined;
            var3 = 2;
            var5 = var5.bind(var11)(var7, var3);
            var3 = 0;
            var13 = var5[var3];
            var3 = 1;
            var7 = var5[var3];
            var _closure2_slot4 = var7;
            var10 = var13.cleanupAnchor;
            var _closure2_slot5 = var10;
            var12 = var13.search;
            var16 = var12.kind;
            var14 = 'idle';
            var5 = null;
            if(!(var14 !== var16)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var5 = var12.anchor;
case 46:
            var14 = var6;
            if(!var14) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var12 = _closure1_slot7;
            var21 = undefined;
            var20 = var9;
            var19 = var15;
            var18 = var5;
            var17 = var8;
            var14 = var21[var12](var20, var19, var18, var17, var16);
case 48:
            var3 = null;
            if(!var14) { _fun0003_ip = 50; continue _fun0003 }
case 24:
            var3 = var5;
case 50:
            var12 = _closure1_slot8;
            var5 = {};
            var5['enabled'] = var6;
            var5['text'] = var9;
            var5['selectionEnd'] = var15;
            var5['prefix'] = var8;
            var5 = var12.bind(var11)(var13, var14, var5);
            var12 = function sameState(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = arg2;
                    var4 = var3.cleanupAnchor;
                    var1 = var2.cleanupAnchor;
                    var1 = var4 === var1;
                    if(!var1) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var7 = var3.search;
                    var6 = var2.search;
                    var3 = var7.kind;
                    var2 = var6.kind;
                    var2 = var3 === var2;
                    if(!var2) { _fun0004_ip = 53; continue _fun0004 }
case 10:
                    var4 = var7.kind;
                    var3 = 'idle';
                    var3 = var3 === var4;
                    if(var3) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var4 = var7.kind;
                    var8 = 'active';
                    if(!(var8 !== var4)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var5 = var6.kind;
                    var4 = 'pending';
                    var4 = var4 === var5;
                    if(!var4) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var9 = var7.anchor;
                    var5 = var6.anchor;
                    var4 = var9 === var5;
case 58:
                    if(!var4) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                    var9 = var7.seenText;
                    var5 = var6.seenText;
                    var4 = var9 === var5;
case 60:
                    _fun0004_ip = 62; continue _fun0004;
case 56:
                    var5 = var6.kind;
                    var5 = var8 === var5;
                    if(!var5) { _fun0004_ip = 63; continue _fun0004 }
case 48:
                    var7 = var7.anchor;
                    var6 = var6.anchor;
                    var5 = var7 === var6;
case 63:
                    var4 = var5;
case 62:
                    var3 = var4;
case 54:
                    var2 = var3;
case 53:
                    var1 = var2;
case 51:
                    return var1;
                }
            };
            var12 = var12.bind(var11)(var13, var5);
            if(var12) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var5 = var7.bind(var11)(var5);
case 64:
            var5 = _closure1_slot3;
            var7 = var5.useEffect;
            var4 = new Array(4);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var8;
            var4[3] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                    var1 = _closure2_slot0;
                    var5 = _closure2_slot5;
                    var3 = _closure2_slot3;
                    var4 = _closure2_slot1;
                    var2 = var1.startsWith;
                    var2 = var2.bind(var1)(var3, var5);
                    var7 = var5;
                    if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 68:
                    var2 = var1.indexOf;
                    var7 = var2.bind(var1)(var3);
case 9:
                    var2 = 0;
                    if(!(!(var7 < var2))) { _fun0005_ip = 66; continue _fun0005 }
case 69:
                    var2 = var1.slice;
                    var5 = var2.bind(var1)(var7);
                    var3 = var5.search;
                    var2 = _closure1_slot4;
                    var5 = var3.bind(var5)(var2);
                    var2 = -1;
                    if(!(var2 === var5)) { _fun0005_ip = 47; continue _fun0005 }
case 8:
                    var1 = var1.length;
                    var5 = var1 - var7;
case 47:
                    var3 = var4.current;
                    var2 = var3.replaceRange;
                    var1 = {};
                    var1['location'] = var7;
                    var1['length'] = var5;
                    var5 = '';
                    var1['text'] = var5;
                    var5 = var4.current;
                    var4 = var5.getApplicationCommandManager;
                    var7 = var4.bind(var5)();
                    var8 = var6 == var7;
                    var5 = undefined;
                    if(var8) { _fun0005_ip = 70; continue _fun0005 }
case 62:
                    var7 = var7.props;
                    var5 = var7.editId;
case 70:
                    var6 = var6 != var5;
                    var4 = undefined;
                    if(!var6) { _fun0005_ip = 71; continue _fun0005 }
case 72:
                    var4 = var5;
case 71:
                    var1['editId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var5)(var1, var4);
            var1 = {};
            var1['anchor'] = var3;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0006_ip = 6; continue _fun0006 }
case 73:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var4 = {'kind': 'pending', 'anchor': null, 'seenText': null};
                    var1 = arg1;
                    var4['anchor'] = var1;
                    var1 = null;
                    var2['search'] = var4;
                    var2['cleanupAnchor'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['beginSearch'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();