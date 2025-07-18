// app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityLayoutMode;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['activityContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,pipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:pipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelSecondaryPIPContent() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var16 = _closure1_slot3;
            var3 = var16.useContext;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 7;
            var1 = var18[var1];
            var5 = undefined;
            var1 = var17.bind(var5)(var1);
            var1 = var3.bind(var16)(var1);
            var13 = var1.windowDimensions;
            var _closure2_slot0 = var13;
            var9 = _closure1_slot0;
            var1 = 8;
            var1 = var18[var1];
            var3 = var9.bind(var5)(var1);
            var1 = var3.usePIPState;
            var15 = var1.bind(var3)();
            var _closure2_slot1 = var15;
            var1 = _closure1_slot9;
            var8 = var1.bind(var5)();
            var4 = 9;
            var1 = var18[var4];
            var7 = var9.bind(var5)(var1);
            var6 = var7.useStateFromStoresObject;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getConnectedActivityLocation;
                    var9 = var1.bind(var3)();
                    var1 = var3.getSelfEmbeddedActivityForLocation;
                    var5 = var1.bind(var3)(var9);
                    var4 = null;
                    var1 = var4 == var5;
                    var3 = undefined;
                    var6 = undefined;
                    if(var1) { _fun0002_ip = 46; continue _fun0002 }
 41:
                    var6 = var5.applicationId;
 46:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 10;
                    var7 = var10[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.getEmbeddedActivityLocationChannelId;
                    var7 = var7.bind(var8)(var9);
                    var1['connectedEmbeddedActivityChannelId'] = var7;
                    var1['connectedEmbeddedActivity'] = var5;
                    var4 = var4 == var6;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 113; continue _fun0002 }
 98:
                    var5 = _closure1_slot4;
                    var4 = var5.getPipOrientationLockStateForApp;
                    var3 = var4.bind(var5)(var6);
 113:
                    var1['pipOrientationLockState'] = var3;
                    var3 = _closure1_slot4;
                    var2 = var3.getActivityPanelMode;
                    var2 = var2.bind(var3)();
                    var1['panelMode'] = var2;
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var1);
            var7 = var3.connectedEmbeddedActivityChannelId;
            var _closure2_slot2 = var7;
            var1 = var3.connectedEmbeddedActivity;
            var14 = var3.pipOrientationLockState;
            var _closure2_slot3 = var14;
            var3 = var3.panelMode;
            var4 = var18[var4];
            var12 = var9.bind(var5)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(var12)(var6, var4);
            var19 = var15.width;
            var _closure2_slot4 = var19;
            var4 = var15.height;
            var _closure2_slot5 = var4;
            var12 = var16.useMemo;
            var6 = new Array(2);
            var6[0] = var19;
            var6[1] = var4;
            var4 = function() {
                var1 = {'width': null, 'height': null, 'position': 'absolute', 'left': '50%', 'marginLeft': null, 'top': '50%'};
                var3 = _closure2_slot4;
                var1['width'] = var3;
                var6 = _closure2_slot5;
                var1['height'] = var6;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 11;
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
            var6 = var12.bind(var16)(var4, var6);
            var4 = 12;
            var4 = var18[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.useAnimatedStyle;
            var2 = function u() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot1;
                    var6 = var5.width;
                    var1['pipWidth'] = var6;
                    var5 = var5.height;
                    var1['pipHeight'] = var5;
                    var5 = _closure2_slot3;
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
                    if(!var6) { _fun0003_ip = 142; continue _fun0003 }
 136:
                    var5 = '50%';
 142:
                    var1['left'] = var5;
                    if(!var4) { _fun0003_ip = 155; continue _fun0003 }
 149:
                    var3 = '50%';
 155:
                    var1['top'] = var3;
                    var3 = var2.marginLeft;
                    var1['marginLeft'] = var3;
                    var2 = var2.marginTop;
                    var1['marginTop'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var16 = 13;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var12['getActivityContainerPipStylesSpec'] = var16;
            var12['pipState'] = var15;
            var12['pipOrientationLockState'] = var14;
            var12['windowDimensions'] = var13;
            var2['__closure'] = var12;
            var12 = 10284606108243.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot10;
            var2['__initData'] = var12;
            var13 = var4.bind(var9)(var2);
            var4 = null;
            var2 = var4 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 550; continue _fun0001 }
 364:
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 14;
            var2 = var12[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.bind(var5)(var7);
            var1 = null;
            if(var2) { _fun0001_ip = 550; continue _fun0001 }
 397:
            var2 = _closure1_slot7;
            var2 = var2.PIP;
            var1 = null;
            if(!(var3 === var2)) { _fun0001_ip = 550; continue _fun0001 }
 416:
            var4 = _closure1_slot8;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 15;
            var2 = var12[var2];
            var3 = var9.bind(var5)(var2);
            var2 = {};
            var2['style'] = var6;
            var6 = 'none';
            var2['pointerEvents'] = var6;
            var6 = 16;
            var6 = var12[var6];
            var7 = var9.bind(var5)(var6);
            var6 = {};
            var14 = var8.activityContainer;
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var13;
            var6['style'] = var8;
            var8 = 17;
            var8 = var12[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['channel'] = var11;
            var10 = _closure1_slot6;
            var10 = var10.PIP;
            var8['layoutMode'] = var10;
            var8 = var4.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 550:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();