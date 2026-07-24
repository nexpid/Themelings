// app/components_native/chat/ChatItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = require;
        var4 = metroImportDefault;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var4;
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
                var1 = _closure1_slot7;
                var1 = var1.AUTO_MODERATION_ACTION;
                if(!(var5 !== var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
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
                var1 = 12;
                var1 = var6[var1];
                var1 = var5.bind(var7)(var1);
                var1 = var1.bind(var7)(var4);
                var6 = _closure1_slot10;
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure1_slot12;
                var1 = {};
                var11 = var1;
                var10 = var2;
                var5 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var5 = _closure1_slot13;
                var4 = {};
                var11 = var4;
                var10 = var2;
                var8 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var5, var4);
case 8:
                _fun0002_ip = 9; continue _fun0002;
case 4:
                var6 = _closure1_slot10;
                var5 = _closure1_slot12;
                var4 = {};
                var11 = var4;
                var10 = var2;
                var8 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var5, var4);
case 9:
                _fun0002_ip = 10; continue _fun0002;
case 2:
                var5 = _closure1_slot10;
                var4 = _closure1_slot14;
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
        var _closure1_slot16 = var1;
        var1 = global;
        var7 = var1.Object;
        var5 = var7.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var7)(var3, var1, var2);
        var1 = 0;
        var2 = var9[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 1;
        var5 = var9[var2];
        var2 = metroImportAll;
        var2 = var2.bind(var1)(var5);
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var7 = var2.requireNativeComponent;
        var2 = var2.View;
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var9[var2];
        var2 = var4.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 4;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var2 = var2.MessageTypes;
        var _closure1_slot7 = var2;
        var2 = 5;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var4 = var2.RowType;
        var _closure1_slot8 = var4;
        var2 = var2.Changeset;
        var _closure1_slot9 = var2;
        var2 = 6;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var4 = var2.jsx;
        var _closure1_slot10 = var4;
        var2 = var2.jsxs;
        var _closure1_slot11 = var2;
        var2 = 7;
        var4 = var9[var2];
        var5 = var8.bind(var1)(var4);
        var4 = var5.isFabric;
        var4 = var4.bind(var5)();
        if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
        var4 = 'DCDMessageView';
        var5 = var7.bind(var1)(var4);
        _fun0001_ip = 13; continue _fun0001;
case 11:
        var4 = 8;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var5 = var4.default;
case 13:
        var _closure1_slot12 = var5;
        var4 = var9[var2];
        var10 = var8.bind(var1)(var4);
        var4 = var10.isFabric;
        var4 = var4.bind(var10)();
        if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var4 = 'DCDSystemMessageView';
        var4 = var7.bind(var1)(var4);
        _fun0001_ip = 16; continue _fun0001;
case 14:
        var10 = 9;
        var10 = var9[var10];
        var10 = var8.bind(var1)(var10);
        var4 = var10.default;
case 16:
        var _closure1_slot13 = var4;
        var2 = var9[var2];
        var10 = var8.bind(var1)(var2);
        var2 = var10.isFabric;
        var2 = var2.bind(var10)();
        if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
        var2 = 'DCDAutoModerationSystemMessageView';
        var2 = var7.bind(var1)(var2);
        _fun0001_ip = 19; continue _fun0001;
case 17:
        var7 = 10;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var2 = var7.default;
case 19:
        var _closure1_slot14 = var2;
        var7 = 13;
        var7 = var9[var7];
        var11 = var8.bind(var1)(var7);
        var10 = var11.createStyles;
        var7 = function(arg1, arg2) {
            var1 = {};
            var2 = {'position': 'relative', 'overflow': 'hidden'};
            var1['container'] = var2;
            var2 = {};
            var3 = arg2;
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
        var _closure1_slot15 = var7;
        var7 = 20;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'components_native/chat/ChatItem.tsx';
        var7 = var8.bind(var9)(var7);
        var6 = function _default(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var7 = arg1;
                var5 = var7.rowGenerator;
                var _closure2_slot0 = var5;
                var22 = var7.message;
                var _closure2_slot1 = var22;
                var16 = var7.style;
                var10 = var7.horizontalOffset;
                var4 = undefined;
                if(!(var10 === var4)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var10 = 8;
case 20:
                var2 = var7.maxHeight;
                var14 = var7.modifyRow;
                var _closure2_slot2 = var14;
                var13 = var7.pointerEvents;
                var6 = var7.onLayout;
                var _closure2_slot3 = var6;
                var3 = var7.messageSizeCacheRef;
                var _closure2_slot4 = var3;
                var15 = var7.backgroundColor;
                if(!(var15 === var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 14;
                var8 = var11[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.colors;
                var15 = var8.BACKGROUND_BASE_LOWER;
case 22:
                var11 = var7.gradientStyles;
                var19 = var7.gradientColors;
                var _closure2_slot5 = var19;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var18 = _closure1_slot4;
                var8 = var18.useState;
                var9 = 0;
                var8 = var8.bind(var18)(var9);
                var21 = _closure1_slot3;
                var20 = 2;
                var8 = var21.bind(var4)(var8, var20);
                var17 = var8[var9];
                var12 = 1;
                var8 = var8[var12];
                _closure2_slot6 = var8;
                var8 = var18.useState;
                var8 = var8.bind(var18)(var4);
                var8 = var21.bind(var4)(var8, var20);
                var9 = var8[var9];
                _closure2_slot7 = var9;
                var8 = var8[var12];
                _closure2_slot8 = var8;
                var8 = _closure1_slot6;
                var20 = var8.roleStyle;
                _closure2_slot9 = var20;
                var12 = var18.useMemo;
                var8 = new Array(5);
                var8[0] = var9;
                var8[1] = var20;
                var8[2] = var22;
                var8[3] = var14;
                var8[4] = var5;
                var5 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = _closure2_slot0;
                        var3 = var5.setOptions;
                        var2 = {};
                        var4 = _closure2_slot7;
                        var2['constrainedWidth'] = var4;
                        var2 = var3.bind(var5)(var2);
                        var4 = var5.generate;
                        var3 = {};
                        var2 = _closure2_slot9;
                        var3['roleStyle'] = var2;
                        var6 = _closure1_slot8;
                        var6 = var6.MESSAGE;
                        var3['rowType'] = var6;
                        var6 = _closure1_slot9;
                        var6 = var6.NOOP;
                        var3['changeType'] = var6;
                        var6 = _closure2_slot1;
                        var3['message'] = var6;
                        var6 = true;
                        var3['isFirst'] = var6;
                        var3['canShowImages'] = var6;
                        var6 = false;
                        var3['canAddNewReactions'] = var6;
                        var6 = var4.bind(var5)(var3);
                        var4 = _closure2_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var3 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var6);
case 24:
                        var1 = {};
                        var1['rawRow'] = var6;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.isFabric;
                        var3 = var2.bind(var3)();
                        var2 = var6;
                        if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 26:
                        var3 = global;
                        var5 = var3.JSON;
                        var4 = var5.stringify;
                        var3 = {};
                        var7 = 0;
                        var3['index'] = var7;
                        var9 = var3;
                        var8 = var6;
                        var6 = copyDataProperties(var9, var8);
                        var2 = var4.bind(var5)(var3);
case 9:
                        var1['row'] = var2;
                        return var1;
                    }
                };
                var5 = var12.bind(var18)(var5, var8);
                var21 = var5.row;
                var5 = var5.rawRow;
                _closure2_slot10 = var5;
                var12 = var18.useMemo;
                var5 = var5.contextType;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 15;
                        var1 = var4[var1];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var1);
                        var1 = var3.isAndroid;
                        var3 = var1.bind(var3)();
                        var1 = 0;
                        if(var3) { _fun0005_ip = 23; continue _fun0005 }
case 27:
                        var3 = _closure2_slot10;
                        var4 = var3.contextType;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 16;
                        var3 = var3[var2];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.MessageContextType;
                        var3 = var3.SEARCH;
                        if(!(var4 === var3)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                        var2 = 12;
case 28:
                        var1 = var2;
case 23:
                        return var1;
                    }
                };
                var5 = var12.bind(var18)(var5, var8);
                var8 = _closure1_slot15;
                var10 = var8.bind(var4)(var10, var5);
                var12 = var18.useCallback;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot8;
                        var1 = var3.nativeEvent;
                        var1 = var1.layout;
                        var4 = var1.width;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot3;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0006_ip = 30; continue _fun0006 }
case 20:
                        var2 = _closure2_slot3;
                        var2 = var2.bind(var1)(var3);
case 30:
                        return var1;
                    }
                };
                var14 = var12.bind(var18)(var6, var8);
                var12 = var18.useCallback;
                var8 = new Array(2);
                var8[0] = var3;
                var6 = var22.id;
                var8[1] = var6;
                var6 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var3 = var1.height;
                        var1 = 0;
                        if(!(var3 > var1)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                        var4 = _closure2_slot4;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                        var2 = _closure2_slot4;
                        var4 = var2.current;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var2 = var4[var2];
                        if(!(var2 !== var3)) { _fun0007_ip = 33; continue _fun0007 }
case 35:
                        var2 = _closure2_slot4;
                        var4 = var2.current;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var4[var2] = var3;
case 33:
                        var2 = _closure2_slot6;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 31:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var12.bind(var18)(var6, var8);
                var8 = null;
                var6 = var8 != var2;
                if(!var6) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var5 = var17 - var5;
                var6 = var5 >= var2;
case 36:
                var5 = var8 == var3;
                var17 = undefined;
                if(var5) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                var5 = var3.current;
                var3 = var8 == var5;
                var17 = undefined;
                if(var3) { _fun0003_ip = 38; continue _fun0003 }
case 40:
                var3 = var22.id;
                var17 = var5[var3];
case 38:
                if(!var6) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var17 = var2;
case 41:
                var5 = _closure1_slot10;
                var3 = _closure1_slot5;
                var2 = {};
                var18 = var10.offset;
                var2['style'] = var18;
                var2['onLayout'] = var12;
                var20 = _closure1_slot10;
                var18 = _closure1_slot16;
                var12 = {};
                var12['message'] = var22;
                var12['row'] = var21;
                var21 = var10.itemRow;
                var12['style'] = var21;
                var12 = var20.bind(var4)(var18, var12);
                var2['children'] = var12;
                var5 = var5.bind(var4)(var3, var2);
                var12 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 17;
                var2 = var18[var2];
                var12 = var12.bind(var4)(var2);
                var2 = var12.useToken;
                var18 = var2.bind(var12)(var15);
                _closure2_slot11 = var18;
                var15 = _closure1_slot4;
                var12 = var15.useMemo;
                var2 = new Array(2);
                var2[0] = var19;
                var2[1] = var18;
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 18;
                        var1 = var4[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = _closure2_slot11;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.alpha;
                        var1 = 0;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.hex;
                        var3 = var1.bind(var3)();
                        var1 = new Array(2);
                        var1[0] = var3;
                        var3 = _closure2_slot11;
                        var1[1] = var3;
                        _fun0008_ip = 28; continue _fun0008;
case 43:
                        var1 = _closure2_slot5;
case 28:
                        return var1;
                    }
                };
                var12 = var12.bind(var15)(var1, var2);
                var2 = _closure1_slot11;
                var1 = {};
                var18 = var10.container;
                var15 = new Array(3);
                var15[0] = var18;
                var15[1] = var16;
                var16 = {};
                var16['height'] = var17;
                var15[2] = var16;
                var1['style'] = var15;
                var1['onLayout'] = var14;
                var1['pointerEvents'] = var13;
                var8 = var8 != var9;
                if(!var8) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var8 = var5;
case 45:
                var5 = new Array(2);
                var5[0] = var8;
                if(!var6) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var9 = _closure1_slot10;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 19;
                var7 = var13[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['colors'] = var12;
                var12 = var10.gradient;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var7['style'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 47:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var2.bind(var4)(var3, var1);
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