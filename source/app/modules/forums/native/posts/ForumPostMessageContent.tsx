// app/modules/forums/native/posts/ForumPostMessageContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg4;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.TextStyleSheet;
            var2 = arg2;
            var2 = var3[var2];
            var3 = null;
            var6 = var3 == var2;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.lineHeight;
case 2:
            var2 = var3 != var1;
            var6 = 18;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1;
case 4:
            var1 = {};
            var2 = {};
            var7 = 'flex-start';
            var2['alignSelf'] = var7;
            var1['text'] = var2;
            var2 = {'flexWrap': 'wrap', 'flexDirection': 'row', 'alignSelf': 'flex-start', 'rowGap': 3, 'maxHeight': null, 'overflow': 'hidden'};
            if(!(var3 == var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = arg3;
            var3 = var6 * var3;
            var3 = var5 * var3;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = var4 * var5;
case 8:
            var2['maxHeight'] = var3;
            var1['container'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/ForumPostMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostMessageContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.messageContent;
            var14 = var1.message;
            var9 = var1.isMessageDeleted;
            var13 = var1.hasUnreads;
            var _closure2_slot0 = var13;
            var12 = var1.messageLoaded;
            var10 = var1.textStyle;
            var _closure2_slot1 = var10;
            var3 = var1.lineClamp;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = 2;
case 9:
            var _closure2_slot2 = var3;
            var8 = var1.senderModifier;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var6 = var6.bind(var5)(var1);
            var1 = {};
            var1['message'] = var14;
            var1['messageLoaded'] = var12;
            var1['messageContent'] = var11;
            var1['isMessageDeleted'] = var9;
            var1['senderModifier'] = var8;
            var1 = var6.bind(var5)(var1);
            var8 = var1.content;
            _closure2_slot3 = var8;
            var11 = var1.style;
            _closure2_slot4 = var11;
            var12 = var1.variant;
            _closure2_slot5 = var12;
            var14 = _closure1_slot4;
            var1 = var14.useState;
            var9 = var1.bind(var14)();
            var6 = _closure1_slot3;
            var1 = 2;
            var6 = var6.bind(var5)(var9, var1);
            var1 = 0;
            var16 = var6[var1];
            _closure2_slot6 = var16;
            var1 = 1;
            var1 = var6[var1];
            _closure2_slot7 = var1;
            var6 = _closure1_slot0;
            var1 = 7;
            var1 = var7[var1];
            var6 = var6.bind(var5)(var1);
            var1 = var6.useFontScale;
            var19 = var1.bind(var6)();
            var1 = _closure1_slot7;
            var22 = undefined;
            var21 = var3;
            var20 = var12;
            var18 = var16;
            var7 = var22[var1](var21, var20, var19, var18, var17);
            _closure2_slot8 = var7;
            var9 = var14.useMemo;
            var6 = new Array(1);
            var6[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var2 = 'string';
                    var1 = typeof var1;
                    var1 = var2 !== var1;
                    if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var4 = _closure2_slot3;
                    var2 = null;
                    var1 = var2 != var4;
case 11:
                    if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = global;
                    var5 = var2.Array;
                    var4 = var5.isArray;
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 2:
                    var5 = _closure1_slot4;
                    var4 = var5.isValidElement;
                    var3 = _closure2_slot3;
                    var2 = var4.bind(var5)(var3);
case 15:
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var1 = var9.bind(var14)(var1, var6);
            var15 = var14.useCallback;
            var9 = new Array(1);
            var9[0] = var16;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = arg1;
                    var3 = var3.nativeEvent;
                    var3 = var3.lines;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 11:
                    var4 = var3.length;
                    var2 = 0;
                    if(!(var4 > var2)) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                    var3 = var3[var2];
                    var3 = var3.height;
                    if(!(var3 > var2)) { _fun0004_ip = 16; continue _fun0004 }
case 19:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var15.bind(var14)(var6, var9);
            _closure2_slot9 = var15;
            var9 = var14.useMemo;
            var6 = new Array(9);
            var6[0] = var8;
            var6[1] = var12;
            var6[2] = var13;
            var6[3] = var11;
            var6[4] = var10;
            var6[5] = var7;
            var6[6] = var3;
            var6[7] = var16;
            var6[8] = var15;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.isArray;
                    var1 = _closure2_slot3;
                    var1 = var3.bind(var4)(var1);
                    var4 = _closure2_slot3;
                    if(var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var1 = var4;
                    _fun0005_ip = 22; continue _fun0005;
case 20:
                    var3 = var4.map;
                    var2 = function(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var8 = arg1;
                            var7 = arg2;
                            var2 = typeof var8;
                            var1 = 'string';
                            if(!(var1 !== var2)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                            var1 = 'number';
                            if(!(var1 !== var2)) { _fun0006_ip = 23; continue _fun0006 }
case 11:
                            var1 = 'boolean';
                            if(!(var1 !== var2)) { _fun0006_ip = 23; continue _fun0006 }
case 18:
                            var3 = _closure1_slot4;
                            var2 = var3.isValidElement;
                            var2 = var2.bind(var3)(var8);
                            if(!var2) { _fun0006_ip = 25; continue _fun0006 }
case 9:
                            var3 = var8.key;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0006_ip = 26; continue _fun0006 }
case 25:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = 'element-';
                            var5 = var3.bind(var2)(var7);
                            _fun0006_ip = 27; continue _fun0006;
case 26:
                            var6 = var8.key;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var3 = 'element-';
                            var2 = '-';
                            var5 = var4.bind(var3)(var6, var2, var7);
case 27:
                            var4 = _closure1_slot6;
                            var1 = _closure1_slot4;
                            var3 = var1.Fragment;
                            var2 = {};
                            var2['children'] = var8;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2, var5);
                            return var1;
case 23:
                            var5 = _closure1_slot6;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var4 = undefined;
                            var1 = var2.bind(var4)(var1);
                            var3 = var1.Text;
                            var2 = {};
                            var1 = _closure2_slot5;
                            var2['variant'] = var1;
                            var9 = _closure2_slot0;
                            var1 = 'text-muted';
                            if(!var9) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                            var1 = 'text-normal';
case 28:
                            var2['color'] = var1;
                            var9 = _closure2_slot4;
                            var1 = new Array(3);
                            var1[0] = var9;
                            var9 = _closure2_slot1;
                            var1[1] = var9;
                            var9 = _closure2_slot8;
                            var9 = var9.text;
                            var1[2] = var9;
                            var2['style'] = var1;
                            var1 = _closure2_slot2;
                            var2['lineClamp'] = var1;
                            var1 = 'tail';
                            var2['ellipsizeMode'] = var1;
                            var9 = _closure2_slot6;
                            var1 = null;
                            var9 = var1 == var9;
                            var1 = undefined;
                            if(!var9) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                            var1 = _closure2_slot9;
case 30:
                            var2['onTextLayout'] = var1;
                            var1 = global;
                            var6 = var1.String;
                            var6 = var6.bind(var4)(var8);
                            var2['children'] = var6;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var1 = 'text-';
                            var1 = var6.bind(var1)(var7);
                            var1 = var5.bind(var4)(var3, var2, var1);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 22:
                    return var1;
                }
            };
            var6 = var9.bind(var14)(var4, var6);
            var4 = _closure1_slot6;
            var9 = var3;
            if(var1) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 5;
            var1 = var14[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.Text;
            var1 = {};
            var1['variant'] = var12;
            var12 = 'text-muted';
            if(!var13) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var12 = 'text-normal';
case 34:
            var1['color'] = var12;
            var1['lineClamp'] = var9;
            var9 = 'tail';
            var1['ellipsizeMode'] = var9;
            var9 = new Array(3);
            var9[0] = var11;
            var9[1] = var10;
            var10 = var7.text;
            var9[2] = var10;
            var1['style'] = var9;
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 36; continue _fun0002;
case 32:
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();