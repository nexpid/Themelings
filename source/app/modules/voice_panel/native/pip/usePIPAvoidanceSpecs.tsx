// app/modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PIP_WINDOW_OFFSET;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePIPAvoidanceSpecs(arg1) {
        var1 = arg1;
        var17 = var1.mode;
        var _closure2_slot0 = var17;
        var16 = var1.controlsSpecs;
        var _closure2_slot1 = var16;
        var14 = var1.safeArea;
        var _closure2_slot2 = var14;
        var13 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 3;
        var1 = var11[var3];
        var10 = undefined;
        var5 = var13.bind(var10)(var1);
        var4 = var5.useSharedValue;
        var1 = {'top': 0, 'bottom': 0};
        var1 = var4.bind(var5)(var1);
        var _closure2_slot3 = var1;
        var9 = _closure1_slot1;
        var4 = 4;
        var4 = var11[var4];
        var4 = var9.bind(var10)(var4);
        var15 = var4.bind(var10)();
        var _closure2_slot4 = var15;
        var4 = 5;
        var4 = var11[var4];
        var4 = var9.bind(var10)(var4);
        var12 = var4.bind(var10)();
        var _closure2_slot5 = var12;
        var4 = 6;
        var4 = var11[var4];
        var7 = var13.bind(var10)(var4);
        var5 = var7.useToken;
        var4 = 7;
        var4 = var11[var4];
        var4 = var9.bind(var10)(var4);
        var4 = var4.modules;
        var4 = var4.mobile;
        var4 = var4.VOICE_PANEL_GUTTER;
        var8 = var5.bind(var7)(var4);
        var _closure2_slot6 = var8;
        var3 = var11[var3];
        var5 = var13.bind(var10)(var3);
        var4 = var5.useAnimatedReaction;
        var3 = function p() {
            var1 = {};
            var4 = _closure2_slot0;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var1['mode'] = var3;
            var4 = _closure2_slot1;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var1['controlsSpecs'] = var3;
            var4 = _closure2_slot4;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var1['keyboardHeight'] = var3;
            var4 = _closure2_slot2;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var1['safeArea'] = var3;
            var3 = _closure2_slot5;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['screenName'] = var2;
            return var1;
        };
        var7 = {};
        var7['mode'] = var17;
        var7['controlsSpecs'] = var16;
        var7['keyboardHeight'] = var15;
        var7['safeArea'] = var14;
        var7['screenName'] = var12;
        var3['__closure'] = var7;
        var7 = 17017598468922.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot6;
        var3['__initData'] = var7;
        var2 = function u(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var6 = arg2;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.cheapWorkletShallowEqual;
                var2 = null;
                var7 = var2 != var6;
                var2 = undefined;
                if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var6;
case 2:
                var2 = var4.bind(var5)(var3, var2);
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var12 = var3.mode;
                var9 = var3.controlsSpecs;
                var2 = var3.keyboardHeight;
                var11 = var3.safeArea;
                var4 = var3.screenName;
                var3 = _closure1_slot3;
                var3 = var3.PIP;
                if(!(var12 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var5 = var3.bind(var1)(var4);
                _fun0001_ip = 8; continue _fun0001;
case 6:
                var3 = _closure1_slot3;
                var4 = var3.PANEL;
                var3 = 0;
                if(!(var12 === var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var6 = var9.mode;
                var4 = _closure1_slot4;
                var4 = var4.DRAWER;
                var3 = 0;
                if(!(var6 === var4)) { _fun0001_ip = 9; continue _fun0001 }
case 11:
                var6 = _closure1_slot5;
                var4 = 60;
                var3 = var4 + var6;
case 9:
                var5 = var3;
case 8:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = {};
                var3['screenBottomOffset'] = var5;
                var5 = var11.bottom;
                var3['safeAreaBottom'] = var5;
                var3['keyboardHeight'] = var2;
                var3 = var4.bind(var1)(var3);
                var3 = var3.bottomOffset;
                var10 = 0;
                var2 = var2 <= var10;
                if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var4 = _closure1_slot3;
                var4 = var4.PANEL;
                var2 = var12 === var4;
case 12:
                if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var5 = var9.mode;
                var4 = _closure1_slot4;
                var4 = var4.FLOATING_DEFAULT;
                var2 = var5 === var4;
case 14:
                var5 = var3;
                if(!var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var4 = var9.height;
                var2 = _closure1_slot5;
                var2 = var4 + var2;
                var5 = var3 + var2;
case 16:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var7 = var4.bind(var1)(var2);
                var3 = _closure2_slot6;
                var3 = var7.bind(var1)(var11, var3);
                var7 = var3.height;
                var3 = 12;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = _closure2_slot3;
                var2 = {};
                var6 = _closure1_slot3;
                var11 = var6.PANEL;
                var6 = 0;
                if(!(var12 === var11)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var9 = var9.mode;
                var8 = _closure1_slot4;
                var8 = var8.FLOATING_DEFAULT;
                var6 = 0;
                if(!(var9 === var8)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
                var6 = var7;
case 18:
                var2['top'] = var6;
                var2['bottom'] = var5;
                var2 = var4.bind(var1)(var3, var2);
case 4:
                return var1;
            }
        };
        var7 = {};
        var12 = 8;
        var12 = var11[var12];
        var12 = var13.bind(var10)(var12);
        var12 = var12.cheapWorkletShallowEqual;
        var7['cheapWorkletShallowEqual'] = var12;
        var12 = _closure1_slot3;
        var7['VoicePanelModes'] = var12;
        var12 = _closure1_slot4;
        var7['VoicePanelControlsModes'] = var12;
        var12 = 60;
        var7['DEFAULT_CHANNEL_INPUT_HEIGHT'] = var12;
        var12 = _closure1_slot5;
        var7['PIP_WINDOW_OFFSET'] = var12;
        var12 = 9;
        var12 = var11[var12];
        var12 = var9.bind(var10)(var12);
        var7['getPIPBottomOffsetForPIPMode'] = var12;
        var12 = 10;
        var12 = var11[var12];
        var12 = var9.bind(var10)(var12);
        var7['getAdjustedBottomOffsets'] = var12;
        var12 = 11;
        var12 = var11[var12];
        var12 = var9.bind(var10)(var12);
        var7['calculateVoicePanelHeaderSpecs'] = var12;
        var7['edgeGutter'] = var8;
        var8 = 12;
        var8 = var11[var8];
        var8 = var9.bind(var10)(var8);
        var7['updateSharedValueIfChanged'] = var8;
        var7['pipAvoidanceSpecs'] = var1;
        var2['__closure'] = var7;
        var7 = 13029906729161.0;
        var2['__workletHash'] = var7;
        var6 = _closure1_slot7;
        var2['__initData'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();