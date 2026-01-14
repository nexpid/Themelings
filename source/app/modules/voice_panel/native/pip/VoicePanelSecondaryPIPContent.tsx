// app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityLayoutMode;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FrameLayoutModes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['activityContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,activePipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}";
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelSecondaryPIPContent() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var18 = _closure1_slot3;
            var2 = var18.useContext;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var18)(var1);
            var11 = var1.windowDimensions;
            var _closure2_slot0 = var11;
            var6 = _closure1_slot0;
            var1 = 10;
            var1 = var8[var1];
            var2 = var6.bind(var5)(var1);
            var1 = var2.usePIPState;
            var15 = var1.bind(var2)();
            var _closure2_slot1 = var15;
            var1 = _closure1_slot11;
            var9 = var1.bind(var5)();
            var1 = 11;
            var2 = var8[var1];
            var10 = var6.bind(var5)(var2);
            var7 = var10.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getConnectedActivityLocation;
                    var9 = var1.bind(var3)();
                    var1 = var3.getSelfEmbeddedActivityForLocation;
                    var5 = var1.bind(var3)(var9);
                    var4 = null;
                    var1 = var4 == var5;
                    var3 = undefined;
                    var6 = undefined;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = var5.applicationId;
case 2:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 12;
                    var7 = var10[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.getEmbeddedActivityLocationChannelId;
                    var7 = var7.bind(var8)(var9);
                    var1['connectedEmbeddedActivityChannelId'] = var7;
                    var1['connectedEmbeddedActivity'] = var5;
                    var4 = var4 == var6;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot4;
                    var4 = var5.getPipOrientationLockStateForApp;
                    var3 = var4.bind(var5)(var6);
case 4:
                    var1['pipOrientationLockState'] = var3;
                    var3 = _closure1_slot4;
                    var2 = var3.getActivityPanelMode;
                    var2 = var2.bind(var3)();
                    var1['panelMode'] = var2;
                    return var1;
                }
            };
            var4 = var7.bind(var10)(var4, var2);
            var17 = var4.connectedEmbeddedActivityChannelId;
            var _closure2_slot2 = var17;
            var2 = var4.connectedEmbeddedActivity;
            var13 = var4.pipOrientationLockState;
            var16 = var4.panelMode;
            var4 = var8[var1];
            var14 = var6.bind(var5)(var4);
            var10 = var14.useStateFromStoresObject;
            var4 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getConnectedFrame;
                    var6 = var1.bind(var2)();
                    var4 = null;
                    var1 = var4 == var6;
                    var5 = undefined;
                    if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = var6.applicationId;
case 6:
                    var1 = {};
                    var1['connectedFrame'] = var6;
                    var7 = _closure1_slot5;
                    var6 = var7.getActivityPanelMode;
                    var6 = var6.bind(var7)();
                    var1['framePanelMode'] = var6;
                    var4 = var4 == var5;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot5;
                    var3 = var4.getPipOrientationLockStateForApp;
                    var2 = var3.bind(var4)(var5);
case 8:
                    var1['framePipOrientationLockState'] = var2;
                    return var1;
                }
            };
            var4 = var10.bind(var14)(var7, var4);
            var7 = var4.connectedFrame;
            var10 = var4.framePanelMode;
            var4 = var4.framePipOrientationLockState;
            var1 = var8[var1];
            var14 = var6.bind(var5)(var1);
            var8 = var14.useStateFromStores;
            var1 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var8.bind(var14)(var6, var1);
            var19 = var15.width;
            var _closure2_slot3 = var19;
            var1 = var15.height;
            var _closure2_slot4 = var1;
            var8 = var18.useMemo;
            var6 = new Array(2);
            var6[0] = var19;
            var6[1] = var1;
            var1 = function() {
                var1 = {'width': null, 'height': null, 'position': 'absolute', 'left': '50%', 'marginLeft': null, 'top': '50%'};
                var3 = _closure2_slot3;
                var1['width'] = var3;
                var6 = _closure2_slot4;
                var1['height'] = var6;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 13;
                var2 = var8[var4];
                var5 = undefined;
                var9 = var7.bind(var5)(var2);
                var2 = 2;
                var3 = var3 / var2;
                var9 = var9.bind(var5)(var3);
                var3 = -1;
                var9 = var3 * var9;
                var1['marginLeft'] = var9;
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var2 = var6 / var2;
                var2 = var4.bind(var5)(var2);
                var2 = var3 * var2;
                var1['marginTop'] = var2;
                return var1;
            };
            var6 = var8.bind(var18)(var1, var6);
            var1 = null;
            var2 = var1 != var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var8 = 14;
            var8 = var19[var8];
            var8 = var18.bind(var5)(var8);
            var8 = var8.bind(var5)(var17);
            var2 = !var8;
case 10:
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = _closure1_slot8;
            var8 = var8.PIP;
            var2 = var16 === var8;
case 12:
            var8 = var1 != var7;
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = _closure1_slot8;
            var7 = var7.PIP;
            var8 = var10 === var7;
case 14:
            if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var13 = var4;
case 16:
            var _closure2_slot5 = var13;
            var7 = _closure1_slot0;
            var18 = _closure1_slot2;
            var4 = 15;
            var4 = var18[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.useAnimatedStyle;
            var3 = function P() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot1;
                    var6 = var5.width;
                    var1['pipWidth'] = var6;
                    var5 = var5.height;
                    var1['pipHeight'] = var5;
                    var5 = _closure2_slot5;
                    var1['pipOrientationLockState'] = var5;
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var4 = var4.landscape;
                    var1['isLandscape'] = var4;
                    var2 = var2.bind(var3)(var1);
                    var5 = var2.width;
                    var3 = var2.height;
                    var4 = var2.shouldVerticallyCenter;
                    var1 = {};
                    var1['width'] = var5;
                    var1['height'] = var3;
                    var6 = var2.shouldHorizontallyCenter;
                    var3 = '0%';
                    var5 = var3;
                    if(!var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = '50%';
case 18:
                    var1['left'] = var5;
                    if(!var4) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var3 = '50%';
case 20:
                    var1['top'] = var3;
                    var3 = var2.marginLeft;
                    var1['marginLeft'] = var3;
                    var2 = var2.marginTop;
                    var1['marginTop'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var17 = _closure1_slot1;
            var16 = 16;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var10['getActivityContainerPipStylesSpec'] = var16;
            var10['pipState'] = var15;
            var10['activePipOrientationLockState'] = var13;
            var10['windowDimensions'] = var11;
            var3['__closure'] = var10;
            var10 = 12186082276755.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot12;
            var3['__initData'] = var10;
            var10 = var4.bind(var7)(var3);
            if(var2) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = null;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 22:
            var4 = _closure1_slot10;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 17;
            var2 = var11[var2];
            var3 = var7.bind(var5)(var2);
            var2 = {};
            var2['style'] = var6;
            var6 = 'none';
            var2['pointerEvents'] = var6;
            var6 = 18;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var11 = var9.activityContainer;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var8) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var8 = 20;
            var8 = var13[var8];
            var9 = var10.bind(var5)(var8);
            var8 = {};
            var8['channel'] = var14;
            var14 = _closure1_slot7;
            var14 = var14.PIP;
            var8['layoutMode'] = var14;
            var8 = var11.bind(var5)(var9, var8);
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var9 = 19;
            var9 = var13[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var12 = _closure1_slot9;
            var12 = var12.PIP;
            var9['layoutMode'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 27:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();