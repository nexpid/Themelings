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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var8 = var7.memo;
    var4 = function FramePanelHeaderContentInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.landscape;
            var10 = var1.setMode;
            var9 = var1.pipState;
            var13 = var1.wrapperOffset;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getConnectedFrame;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var11 = var4.bind(var6)(var3, var2, var1);
            var1 = null;
            var2 = var1 == var11;
            var18 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = var11.applicationId;
case 2:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 6;
            var3 = var2[var3];
            var4 = var4.bind(var5)(var3);
            var3 = new Array(1);
            var3[0] = var18;
            var6 = var4.bind(var5)(var3);
            var4 = _closure1_slot3;
            var3 = 1;
            var4 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var17 = var4[var3];
            var3 = _closure1_slot0;
            var14 = 7;
            var4 = var2[var14];
            var8 = var3.bind(var5)(var4);
            var6 = var8.useBaseActivityPanelHeaderContent;
            var4 = {};
            var4['landscape'] = var12;
            var4['setMode'] = var10;
            var4['wrapperOffset'] = var13;
            var4['pipState'] = var9;
            var4 = var6.bind(var8)(var4);
            var13 = var4.gesture;
            var8 = var4.headerWrapperStyles;
            var6 = var4.headerStyles;
            var2 = var2[var14];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useMinimizeAndQuestButtonContainerStyles;
            var15 = var2.bind(var3)();
            if(!(var1 != var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var16 = var1 == var17;
            var9 = undefined;
            if(var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var17.id;
case 6:
            var2['applicationId'] = var9;
            var9 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BaseActivityPanelContent;
            var2 = {};
            var14 = var1 != var11;
            var2['hasConnectedActivity'] = var14;
            var2['gesture'] = var13;
            var2['headerWrapperStyles'] = var8;
            var2['headerStyles'] = var6;
            var2['landscape'] = var12;
            var8 = _closure1_slot4;
            var6 = {};
            var14 = var15.buttonContainer;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = undefined;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var15.buttonContainerLandscape;
case 8:
            var13[1] = var14;
            var6['style'] = var13;
            var15 = _closure1_slot6;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 9;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var16 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var19 = var1 == var17;
            var16 = undefined;
            if(var19) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var16 = var17.name;
case 10:
            var13['activityName'] = var16;
            var13['setMode'] = var10;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var14 = var1 != var18;
            if(!var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var17 = _closure1_slot6;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var15 = 10;
            var15 = var19[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var15['applicationId'] = var18;
            var14 = var17.bind(var5)(var16, var15);
case 13:
            var13[1] = var14;
            var14 = null;
            if(!var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = var9;
case 15:
            var13[2] = var14;
            var6['children'] = var13;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var8 = null;
            if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = var9;
case 17:
            var6[1] = var8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 11;
            var7 = var12[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['frame'] = var11;
            var7['setMode'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot8 = var4;
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
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var1['style'] = var6;
        var6 = _closure1_slot8;
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