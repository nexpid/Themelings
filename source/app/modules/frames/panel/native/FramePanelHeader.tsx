// app/modules/frames/panel/native/FramePanelHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var8 = var7.memo;
    var4 = function FramePanelHeaderContentInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.landscape;
            var _closure2_slot0 = var8;
            var7 = var2.setMode;
            var _closure2_slot1 = var7;
            var16 = var2.pipState;
            var17 = var2.wrapperOffset;
            var13 = undefined;
            var _closure2_slot3 = var13;
            var _closure2_slot4 = var13;
            var _closure2_slot5 = var13;
            var _closure2_slot6 = var13;
            var _closure2_slot7 = var13;
            var _closure2_slot8 = var13;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var9 = var4.bind(var13)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var4 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getConnectedFrame;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var12 = var6.bind(var9)(var5, var4, var3);
            var _closure2_slot2 = var12;
            var15 = null;
            var3 = var15 == var12;
            var5 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var12.applicationId;
case 2:
            _closure2_slot3 = var5;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var4 = var4.bind(var13)(var3);
            var3 = new Array(1);
            var3[0] = var5;
            var9 = var4.bind(var13)(var3);
            var4 = _closure1_slot3;
            var3 = 1;
            var4 = var4.bind(var13)(var9, var3);
            var3 = 0;
            var14 = var4[var3];
            _closure2_slot4 = var14;
            var4 = _closure1_slot0;
            var3 = 7;
            var9 = var6[var3];
            var11 = var4.bind(var13)(var9);
            var10 = var11.useBaseActivityPanelHeaderContent;
            var9 = {};
            var9['landscape'] = var8;
            var9['setMode'] = var7;
            var9['wrapperOffset'] = var17;
            var9['pipState'] = var16;
            var10 = var10.bind(var11)(var9);
            var11 = var10.gesture;
            _closure2_slot5 = var11;
            var9 = var10.headerWrapperStyles;
            _closure2_slot6 = var9;
            var10 = var10.headerStyles;
            _closure2_slot7 = var10;
            var3 = var6[var3];
            var4 = var4.bind(var13)(var3);
            var3 = var4.useMinimizeAndQuestButtonContainerStyles;
            var6 = var3.bind(var4)();
            _closure2_slot8 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = var15 == var14;
            var16 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = var14.id;
case 4:
            var2 = new Array(10);
            var2[0] = var16;
            var15 = var15 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var14.name;
case 6:
            var2[1] = var13;
            var2[2] = var12;
            var2[3] = var11;
            var2[4] = var10;
            var2[5] = var9;
            var2[6] = var8;
            var2[7] = var7;
            var2[8] = var6;
            var2[9] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var15 = null;
                    var2 = var15 == var1;
                    var1 = null;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.BaseActivityPanelContent;
                    var2 = {};
                    var6 = _closure2_slot2;
                    var6 = var15 != var6;
                    var2['hasConnectedActivity'] = var6;
                    var6 = _closure2_slot5;
                    var2['gesture'] = var6;
                    var6 = _closure2_slot6;
                    var2['headerWrapperStyles'] = var6;
                    var6 = _closure2_slot7;
                    var2['headerStyles'] = var6;
                    var12 = _closure2_slot0;
                    var2['landscape'] = var12;
                    var8 = _closure1_slot5;
                    var6 = {};
                    var9 = _closure2_slot8;
                    var11 = var9.buttonContainer;
                    var9 = new Array(2);
                    var9[0] = var11;
                    var11 = undefined;
                    if(!var12) { _fun0002_ip = 10; continue _fun0002 }
case 3:
                    var12 = _closure2_slot8;
                    var11 = var12.buttonContainerLandscape;
case 10:
                    var9[1] = var11;
                    var6['style'] = var9;
                    var12 = _closure1_slot7;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 8;
                    var9 = var13[var9];
                    var11 = var11.bind(var4)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var13 = undefined;
                    if(var14) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var14 = _closure2_slot4;
                    var14 = var15 == var14;
                    var13 = undefined;
                    if(var14) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                    var14 = _closure2_slot4;
                    var13 = var14.name;
case 11:
                    var9['activityName'] = var13;
                    var13 = _closure2_slot1;
                    var9['setMode'] = var13;
                    var11 = var12.bind(var4)(var11, var9);
                    var9 = new Array(3);
                    var9[0] = var11;
                    var11 = _closure2_slot3;
                    var11 = var15 != var11;
                    if(!var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var14 = _closure1_slot7;
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var12 = 9;
                    var12 = var16[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = {};
                    var16 = _closure2_slot3;
                    var12['applicationId'] = var16;
                    var11 = var14.bind(var4)(var13, var12);
case 14:
                    var9[1] = var11;
                    var13 = _closure1_slot7;
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var11 = 10;
                    var11 = var14[var11];
                    var12 = var12.bind(var4)(var11);
                    var11 = {};
                    var14 = _closure2_slot4;
                    var15 = var15 == var14;
                    var14 = undefined;
                    if(var15) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var15 = _closure2_slot4;
                    var14 = var15.id;
case 16:
                    var11['applicationId'] = var14;
                    var11 = var13.bind(var4)(var12, var11);
                    var9[2] = var11;
                    var6['children'] = var9;
                    var8 = var5.bind(var4)(var8, var6);
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot7;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 11;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var11 = _closure2_slot2;
                    var7['frame'] = var11;
                    var10 = _closure2_slot1;
                    var7['setMode'] = var10;
                    var7 = var9.bind(var4)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 8:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function() {
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 7;
        var1 = var8[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = var3.useBaseActivityPanelHeader;
        var1 = {};
        var7 = _closure1_slot1;
        var6 = 12;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var1['context'] = var6;
        var1 = var2.bind(var3)(var1);
        var6 = var1.headerStyles;
        var10 = var1.wrapperDimensions;
        var9 = var1.setMode;
        var8 = var1.wrapperOffset;
        var7 = var1.pipState;
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var1['style'] = var6;
        var6 = _closure1_slot9;
        var5 = {};
        var10 = var10.isWindowLandscape;
        var5['landscape'] = var10;
        var5['setMode'] = var9;
        var5['wrapperOffset'] = var8;
        var5['pipState'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/panel/native/FramePanelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();