// app/components_native/chat/ChatItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var5;
        var _closure1_slot2 = var9;
        var1 = function DCDChatItem(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var4 = var3.message;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2['message'] = var1;
                var11 = {};
                var10 = var3;
                var9 = var2;
                var2 = copyDataProperties(var11, var10, var9);
                var5 = var4.type;
                var1 = _closure1_slot9;
                var1 = var1.AUTO_MODERATION_ACTION;
                if(!(var5 !== var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var7 = undefined;
                var1 = var5.bind(var7)(var1);
                var1 = var1.MessageTypesSets;
                var6 = var1.AUTOMOD_INCIDENT_ACTIONS;
                var5 = var6.has;
                var1 = var4.type;
                var1 = var5.bind(var6)(var1);
                if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 14;
                var1 = var6[var1];
                var1 = var5.bind(var7)(var1);
                var1 = var1.bind(var7)(var4);
                var6 = _closure1_slot12;
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure1_slot15;
                var1 = {};
                var11 = var1;
                var10 = var2;
                var5 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var5 = _closure1_slot16;
                var4 = {};
                var11 = var4;
                var10 = var2;
                var8 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var5, var4);
case 8:
                _fun0002_ip = 9; continue _fun0002;
case 4:
                var6 = _closure1_slot12;
                var5 = _closure1_slot15;
                var4 = {};
                var11 = var4;
                var10 = var2;
                var8 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var5, var4);
case 9:
                _fun0002_ip = 10; continue _fun0002;
case 2:
                var5 = _closure1_slot12;
                var4 = _closure1_slot17;
                var3 = {};
                var11 = var3;
                var10 = var2;
                var2 = copyDataProperties(var11, var10);
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 10:
                return var1;
            }
        };
        var _closure1_slot20 = var1;
        var1 = global;
        var7 = var1.Object;
        var4 = var7.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var7)(var3, var1, var2);
        var4 = 0;
        var2 = var9[var4];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 1;
        var7 = var9[var2];
        var2 = metroImportAll;
        var2 = var2.bind(var1)(var7);
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var11 = var2.requireNativeComponent;
        var7 = var2.View;
        var _closure1_slot5 = var7;
        var2 = var2.Image;
        var _closure1_slot6 = var2;
        var2 = 3;
        var2 = var9[var2];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var2 = 4;
        var2 = var9[var2];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 5;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var2 = var2.MessageTypes;
        var _closure1_slot9 = var2;
        var2 = 6;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var5 = var2.RowType;
        var _closure1_slot10 = var5;
        var2 = var2.Changeset;
        var _closure1_slot11 = var2;
        var2 = 7;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var5 = var2.jsx;
        var _closure1_slot12 = var5;
        var2 = var2.jsxs;
        var _closure1_slot13 = var2;
        var10 = 8;
        var2 = var9[var10];
        var5 = var8.bind(var1)(var2);
        var2 = var5.isAndroid;
        var5 = var2.bind(var5)();
        var2 = 16;
        if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
        var2 = 0;
case 11:
        var _closure1_slot14 = var2;
        var2 = var9[var10];
        var4 = var8.bind(var1)(var2);
        var2 = var4.isAndroid;
        var2 = var2.bind(var4)();
        if(var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
        var2 = 'DCDMessageView';
        var5 = var11.bind(var1)(var2);
        _fun0001_ip = 15; continue _fun0001;
case 13:
        var2 = 9;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var5 = var2.default;
case 15:
        var _closure1_slot15 = var5;
        var2 = var9[var10];
        var4 = var8.bind(var1)(var2);
        var2 = var4.isAndroid;
        var2 = var2.bind(var4)();
        if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var2 = 'DCDSystemMessageView';
        var4 = var11.bind(var1)(var2);
        _fun0001_ip = 18; continue _fun0001;
case 16:
        var2 = 10;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var4 = var2.default;
case 18:
        var _closure1_slot16 = var4;
        var2 = var9[var10];
        var12 = var8.bind(var1)(var2);
        var2 = var12.isAndroid;
        var2 = var2.bind(var12)();
        if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
        var2 = 'DCDAutoModerationSystemMessageView';
        var2 = var11.bind(var1)(var2);
        _fun0001_ip = 21; continue _fun0001;
case 19:
        var11 = 11;
        var11 = var9[var11];
        var11 = var8.bind(var1)(var11);
        var2 = var11.default;
case 21:
        var _closure1_slot17 = var2;
        var10 = var9[var10];
        var11 = var8.bind(var1)(var10);
        var10 = var11.isAndroid;
        var10 = var10.bind(var11)();
        if(!var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
        var10 = 12;
        var10 = var9[var10];
        var10 = var8.bind(var1)(var10);
        var7 = var10.default;
case 22:
        var _closure1_slot18 = var7;
        var7 = 15;
        var7 = var9[var7];
        var11 = var8.bind(var1)(var7);
        var10 = var11.createStyles;
        var7 = function(arg1) {
            var1 = {};
            var2 = {'position': 'relative', 'overflow': 'hidden'};
            var1['container'] = var2;
            var2 = {};
            var3 = _closure1_slot14;
            var3 = -var3;
            var2['marginTop'] = var3;
            var3 = arg1;
            var3 = -var3;
            var2['marginLeft'] = var3;
            var1['offset'] = var2;
            var2 = {'position': 'absolute', 'bottom': 0, 'height': 24, 'width': '100%'};
            var1['gradient'] = var2;
            var2 = {};
            var3 = 'transparent';
            var2['backgroundColor'] = var3;
            var1['itemRow'] = var2;
            return var1;
        };
        var7 = var10.bind(var11)(var7);
        var _closure1_slot19 = var7;
        var7 = 22;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'components_native/chat/ChatItem.tsx';
        var7 = var8.bind(var9)(var7);
        var6 = function _default(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var18 = var3.rowGenerator;
                var _closure2_slot0 = var18;
                var19 = var3.message;
                var _closure2_slot1 = var19;
                var15 = var3.style;
                var8 = var3.horizontalOffset;
                var4 = undefined;
                if(!(var8 === var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var8 = 8;
case 24:
                var2 = var3.maxHeight;
                var16 = var3.useDarkGradient;
                var _closure2_slot2 = var16;
                var20 = var3.modifyRow;
                var _closure2_slot3 = var20;
                var12 = var3.pointerEvents;
                var5 = var3.onLayout;
                var _closure2_slot4 = var5;
                var3 = var3.messageSizeCacheRef;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var6 = _closure1_slot19;
                var10 = var6.bind(var4)(var8);
                var14 = _closure1_slot4;
                var6 = var14.useState;
                var9 = 0;
                var6 = var6.bind(var14)(var9);
                var17 = _closure1_slot3;
                var13 = 2;
                var8 = var17.bind(var4)(var6, var13);
                var6 = var8[var9];
                var11 = 1;
                var8 = var8[var11];
                _closure2_slot6 = var8;
                var8 = var14.useState;
                var8 = var8.bind(var14)(var4);
                var8 = var17.bind(var4)(var8, var13);
                var9 = var8[var9];
                _closure2_slot7 = var9;
                var8 = var8[var11];
                _closure2_slot8 = var8;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 16;
                var8 = var17[var8];
                var22 = var13.bind(var4)(var8);
                var21 = var22.useStateFromStores;
                var8 = _closure1_slot8;
                var11 = new Array(1);
                var11[0] = var8;
                var8 = function() {
                    var1 = _closure1_slot8;
                    var1 = var1.theme;
                    return var1;
                };
                var8 = var21.bind(var22)(var11, var8);
                _closure2_slot9 = var8;
                var11 = 17;
                var11 = var17[var11];
                var13 = var13.bind(var4)(var11);
                var11 = var13.useShouldFilterKeywords;
                var11 = var11.bind(var13)();
                _closure2_slot10 = var11;
                var13 = _closure1_slot7;
                var21 = var13.roleStyle;
                _closure2_slot11 = var21;
                var17 = var14.useMemo;
                var13 = new Array(6);
                var13[0] = var9;
                var13[1] = var21;
                var13[2] = var19;
                var13[3] = var20;
                var13[4] = var18;
                var13[5] = var11;
                var11 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = _closure2_slot0;
                        var3 = var5.setOptions;
                        var1 = {};
                        var4 = _closure2_slot7;
                        var1['constrainedWidth'] = var4;
                        var4 = _closure2_slot10;
                        var1['shouldFilterKeywords'] = var4;
                        var1 = var3.bind(var5)(var1);
                        var4 = var5.generate;
                        var3 = {};
                        var1 = _closure2_slot11;
                        var3['roleStyle'] = var1;
                        var6 = _closure1_slot10;
                        var6 = var6.MESSAGE;
                        var3['rowType'] = var6;
                        var6 = _closure1_slot11;
                        var6 = var6.NOOP;
                        var3['changeType'] = var6;
                        var6 = _closure2_slot1;
                        var3['message'] = var6;
                        var6 = true;
                        var3['isFirst'] = var6;
                        var3['canShowImages'] = var6;
                        var6 = false;
                        var3['canAddNewReactions'] = var6;
                        var5 = var4.bind(var5)(var3);
                        var4 = _closure2_slot3;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var3 = _closure2_slot3;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var5);
case 26:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.isAndroid;
                        var2 = var1.bind(var2)();
                        var1 = var5;
                        if(!var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var2 = global;
                        var4 = var2.JSON;
                        var3 = var4.stringify;
                        var2 = {};
                        var6 = 0;
                        var2['index'] = var6;
                        var9 = var2;
                        var8 = var5;
                        var5 = copyDataProperties(var9, var8);
                        var1 = var3.bind(var4)(var2);
case 28:
                        return var1;
                    }
                };
                var18 = var17.bind(var14)(var11, var13);
                var13 = var14.useMemo;
                var11 = new Array(2);
                var11[0] = var16;
                var11[1] = var8;
                var8 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var1 = var3[var1];
                        var3 = undefined;
                        var6 = var2.bind(var3)(var1);
                        var2 = var6.isThemeDark;
                        var1 = _closure2_slot9;
                        var1 = var2.bind(var6)(var1);
                        var2 = _closure1_slot1;
                        if(var1) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                        var6 = _closure1_slot2;
                        var1 = 21;
                        var1 = var6[var1];
                        _fun0005_ip = 32; continue _fun0005;
case 30:
                        var4 = _closure2_slot2;
                        var6 = _closure1_slot2;
                        if(var4) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                        var4 = 20;
                        var4 = var6[var4];
                        _fun0005_ip = 35; continue _fun0005;
case 33:
                        var5 = 19;
                        var4 = var6[var5];
case 35:
                        var1 = var4;
case 32:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var11 = var13.bind(var14)(var8, var11);
                var13 = var14.useCallback;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot8;
                        var1 = var3.nativeEvent;
                        var1 = var1.layout;
                        var4 = var1.width;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot4;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                        var2 = _closure2_slot4;
                        var2 = var2.bind(var1)(var3);
case 36:
                        return var1;
                    }
                };
                var13 = var13.bind(var14)(var5, var8);
                var8 = var14.useCallback;
                var5 = new Array(2);
                var5[0] = var3;
                var16 = var19.id;
                var5[1] = var16;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var3 = var1.height;
                        var1 = 0;
                        if(!(var3 > var1)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                        var4 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                        var2 = _closure2_slot5;
                        var4 = var2.current;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var2 = var4[var2];
                        if(!(var2 !== var3)) { _fun0007_ip = 40; continue _fun0007 }
case 42:
                        var2 = _closure2_slot5;
                        var4 = var2.current;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var4[var2] = var3;
case 40:
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var8.bind(var14)(var1, var5);
                var1 = _closure1_slot14;
                var1 = var6 - var1;
                var8 = null;
                var6 = var8 != var2;
                if(!var6) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var6 = var1 >= var2;
case 43:
                var14 = var8 == var3;
                var16 = undefined;
                if(var14) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var14 = var3.current;
                var3 = var8 == var14;
                var16 = undefined;
                if(var3) { _fun0003_ip = 45; continue _fun0003 }
case 47:
                var3 = var19.id;
                var16 = var14[var3];
case 45:
                if(!(var8 == var16)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                if(!var6) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var1 = var2;
case 50:
                var16 = var1;
case 48:
                var3 = _closure1_slot12;
                var2 = _closure1_slot18;
                var1 = {};
                var14 = var10.offset;
                var1['style'] = var14;
                var1['onLayout'] = var5;
                var17 = _closure1_slot12;
                var14 = _closure1_slot20;
                var5 = {};
                var5['message'] = var19;
                var5['row'] = var18;
                var18 = var10.itemRow;
                var5['style'] = var18;
                var5 = var17.bind(var4)(var14, var5);
                var1['children'] = var5;
                var5 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var17 = var10.container;
                var14 = new Array(3);
                var14[0] = var17;
                var14[1] = var15;
                var15 = {};
                var15['height'] = var16;
                var14[2] = var15;
                var1['style'] = var14;
                var1['onLayout'] = var13;
                var1['pointerEvents'] = var12;
                var8 = var8 != var9;
                if(!var8) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var8 = var5;
case 52:
                var5 = new Array(2);
                var5[0] = var8;
                if(!var6) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var9 = _closure1_slot12;
                var8 = _closure1_slot6;
                var7 = {};
                var7['source'] = var11;
                var10 = var10.gradient;
                var7['style'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 54:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var6;
        var3['DCDMessageView'] = var5;
        var3['DCDSystemMessageView'] = var4;
        var3['DCDAutoModerationSystemMessageView'] = var2;
        return var1;
    }
})();