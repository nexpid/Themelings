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
                var1 = _closure1_slot7;
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
                var6 = _closure1_slot10;
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure1_slot13;
                var1 = {};
                var11 = var1;
                var10 = var2;
                var5 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var5 = _closure1_slot14;
                var4 = {};
                var11 = var4;
                var10 = var2;
                var8 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var5, var4);
case 8:
                _fun0002_ip = 9; continue _fun0002;
case 4:
                var6 = _closure1_slot10;
                var5 = _closure1_slot13;
                var4 = {};
                var11 = var4;
                var10 = var2;
                var8 = copyDataProperties(var11, var10);
                var1 = var6.bind(var7)(var5, var4);
case 9:
                _fun0002_ip = 10; continue _fun0002;
case 2:
                var5 = _closure1_slot10;
                var4 = _closure1_slot15;
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
        var _closure1_slot18 = var1;
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
        var2 = 3;
        var2 = var9[var2];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 4;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var2 = var2.MessageTypes;
        var _closure1_slot7 = var2;
        var2 = 5;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var5 = var2.RowType;
        var _closure1_slot8 = var5;
        var2 = var2.Changeset;
        var _closure1_slot9 = var2;
        var2 = 6;
        var2 = var9[var2];
        var2 = var8.bind(var1)(var2);
        var5 = var2.jsx;
        var _closure1_slot10 = var5;
        var2 = var2.jsxs;
        var _closure1_slot11 = var2;
        var10 = 7;
        var2 = var9[var10];
        var5 = var8.bind(var1)(var2);
        var2 = var5.isAndroid;
        var5 = var2.bind(var5)();
        var2 = 16;
        if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
        var2 = 0;
case 11:
        var _closure1_slot12 = var2;
        var2 = 8;
        var4 = var9[var2];
        var5 = var8.bind(var1)(var4);
        var4 = var5.isFabric;
        var4 = var4.bind(var5)();
        if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
        var4 = 'DCDMessageView';
        var5 = var11.bind(var1)(var4);
        _fun0001_ip = 15; continue _fun0001;
case 13:
        var4 = 9;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var5 = var4.default;
case 15:
        var _closure1_slot13 = var5;
        var4 = var9[var2];
        var12 = var8.bind(var1)(var4);
        var4 = var12.isFabric;
        var4 = var4.bind(var12)();
        if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var4 = 'DCDSystemMessageView';
        var4 = var11.bind(var1)(var4);
        _fun0001_ip = 18; continue _fun0001;
case 16:
        var12 = 10;
        var12 = var9[var12];
        var12 = var8.bind(var1)(var12);
        var4 = var12.default;
case 18:
        var _closure1_slot14 = var4;
        var2 = var9[var2];
        var12 = var8.bind(var1)(var2);
        var2 = var12.isFabric;
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
        var _closure1_slot15 = var2;
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
        var _closure1_slot16 = var7;
        var7 = 15;
        var7 = var9[var7];
        var11 = var8.bind(var1)(var7);
        var10 = var11.createStyles;
        var7 = function(arg1) {
            var1 = {};
            var2 = {'position': 'relative', 'overflow': 'hidden'};
            var1['container'] = var2;
            var2 = {};
            var3 = _closure1_slot12;
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
        var _closure1_slot17 = var7;
        var7 = 20;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'components_native/chat/ChatItem.tsx';
        var7 = var8.bind(var9)(var7);
        var6 = function _default(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = arg1;
                var8 = var6.rowGenerator;
                var _closure2_slot0 = var8;
                var20 = var6.message;
                var _closure2_slot1 = var20;
                var15 = var6.style;
                var9 = var6.horizontalOffset;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var9 = 8;
case 24:
                var3 = var6.maxHeight;
                var17 = var6.modifyRow;
                var _closure2_slot2 = var17;
                var12 = var6.pointerEvents;
                var2 = var6.onLayout;
                var _closure2_slot3 = var2;
                var5 = var6.messageSizeCacheRef;
                var _closure2_slot4 = var5;
                var11 = var6.backgroundColor;
                if(!(var11 === var4)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 16;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.colors;
                var11 = var6.BACKGROUND_BASE_LOWER;
case 26:
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var6 = _closure1_slot17;
                var10 = var6.bind(var4)(var9);
                var16 = _closure1_slot4;
                var6 = var16.useState;
                var9 = 0;
                var6 = var6.bind(var16)(var9);
                var19 = _closure1_slot3;
                var18 = 2;
                var13 = var19.bind(var4)(var6, var18);
                var6 = var13[var9];
                var14 = 1;
                var13 = var13[var14];
                _closure2_slot5 = var13;
                var13 = var16.useState;
                var13 = var13.bind(var16)(var4);
                var13 = var19.bind(var4)(var13, var18);
                var9 = var13[var9];
                _closure2_slot6 = var9;
                var13 = var13[var14];
                _closure2_slot7 = var13;
                var13 = _closure1_slot6;
                var18 = var13.roleStyle;
                _closure2_slot8 = var18;
                var14 = var16.useMemo;
                var13 = new Array(5);
                var13[0] = var9;
                var13[1] = var18;
                var13[2] = var20;
                var13[3] = var17;
                var13[4] = var8;
                var8 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = _closure2_slot0;
                        var3 = var5.setOptions;
                        var1 = {};
                        var4 = _closure2_slot6;
                        var1['constrainedWidth'] = var4;
                        var1 = var3.bind(var5)(var1);
                        var4 = var5.generate;
                        var3 = {};
                        var1 = _closure2_slot8;
                        var3['roleStyle'] = var1;
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
                        var5 = var4.bind(var5)(var3);
                        var4 = _closure2_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var5);
case 28:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.isFabric;
                        var2 = var1.bind(var2)();
                        var1 = var5;
                        if(!var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
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
case 30:
                        return var1;
                    }
                };
                var19 = var14.bind(var16)(var8, var13);
                var13 = var16.useCallback;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot7;
                        var1 = var3.nativeEvent;
                        var1 = var1.layout;
                        var4 = var1.width;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot3;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0005_ip = 32; continue _fun0005 }
case 24:
                        var2 = _closure2_slot3;
                        var2 = var2.bind(var1)(var3);
case 32:
                        return var1;
                    }
                };
                var13 = var13.bind(var16)(var2, var8);
                var14 = var16.useCallback;
                var8 = new Array(2);
                var8[0] = var5;
                var2 = var20.id;
                var8[1] = var2;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var3 = var1.height;
                        var1 = 0;
                        if(!(var3 > var1)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                        var4 = _closure2_slot4;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                        var2 = _closure2_slot4;
                        var4 = var2.current;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var2 = var4[var2];
                        if(!(var2 !== var3)) { _fun0006_ip = 35; continue _fun0006 }
case 37:
                        var2 = _closure2_slot4;
                        var4 = var2.current;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var4[var2] = var3;
case 35:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = var14.bind(var16)(var2, var8);
                var2 = _closure1_slot12;
                var2 = var6 - var2;
                var8 = null;
                var6 = var8 != var3;
                if(!var6) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                var6 = var2 >= var3;
case 38:
                var17 = var8 == var5;
                var16 = undefined;
                if(var17) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                var17 = var5.current;
                var5 = var8 == var17;
                var16 = undefined;
                if(var5) { _fun0003_ip = 40; continue _fun0003 }
case 42:
                var5 = var20.id;
                var16 = var17[var5];
case 40:
                if(!(var8 == var16)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                if(!var6) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var2 = var3;
case 45:
                var16 = var2;
case 43:
                var5 = _closure1_slot10;
                var3 = _closure1_slot16;
                var2 = {};
                var17 = var10.offset;
                var2['style'] = var17;
                var2['onLayout'] = var14;
                var18 = _closure1_slot10;
                var17 = _closure1_slot18;
                var14 = {};
                var14['message'] = var20;
                var14['row'] = var19;
                var19 = var10.itemRow;
                var14['style'] = var19;
                var14 = var18.bind(var4)(var17, var14);
                var2['children'] = var14;
                var5 = var5.bind(var4)(var3, var2);
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 17;
                var2 = var14[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useToken;
                var14 = var2.bind(var3)(var11);
                _closure2_slot9 = var14;
                var11 = _closure1_slot4;
                var3 = var11.useMemo;
                var2 = new Array(1);
                var2[0] = var14;
                var1 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var1 = _closure2_slot9;
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.alpha;
                    var1 = 0;
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.hex;
                    var3 = var1.bind(var3)();
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = _closure2_slot9;
                    var1[1] = var2;
                    return var1;
                };
                var11 = var3.bind(var11)(var1, var2);
                var3 = _closure1_slot11;
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
                if(!var8) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var8 = var5;
case 47:
                var5 = new Array(2);
                var5[0] = var8;
                if(!var6) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                var9 = _closure1_slot10;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 19;
                var7 = var12[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['colors'] = var11;
                var10 = var10.gradient;
                var7['style'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 49:
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