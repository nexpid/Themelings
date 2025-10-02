// app/modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelModes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isActivityParticipant;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = function VoiceControlsNuxActionSheetImporter() {
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var2 = 7;
        var2 = var1[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 6;
        var2 = var1[var2];
        var1 = var1.paths;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 'function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}';
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelDismissibleContent() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = _closure1_slot4;
            var3 = var8.useContext;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 8;
            var2 = var13[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var3.bind(var8)(var2);
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var9 = var2.focused;
            var _closure2_slot1 = var9;
            var14 = var2.mode;
            var _closure2_slot2 = var14;
            var6 = var8.useState;
            var2 = false;
            var7 = var6.bind(var8)(var2);
            var6 = _closure1_slot3;
            var2 = 2;
            var7 = var6.bind(var4)(var7, var2);
            var2 = 0;
            var2 = var7[var2];
            var6 = 1;
            var6 = var7[var6];
            var _closure2_slot3 = var6;
            var7 = var8.useCallback;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg1;
                    var1 = null;
                    var3 = var1 != var6;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot7;
                    var5 = _closure1_slot5;
                    var2 = var5.getParticipant;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var5)(var1, var6);
                    var1 = undefined;
                    var3 = var4.bind(var1)(var2);
case 2:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var10 = var7.bind(var8)(var3, var6);
            var _closure2_slot4 = var10;
            var12 = _closure1_slot0;
            var11 = 9;
            var3 = var13[var11];
            var8 = var12.bind(var4)(var3);
            var7 = var8.useAnimatedReaction;
            var6 = function h() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var5 = var1.bind(var2)();
                    var1 = _closure1_slot6;
                    var4 = var1.PANEL;
                    var1 = undefined;
                    if(!(var5 === var4)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = null;
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = var3.id;
case 6:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var3 = {};
            var3['mode'] = var14;
            var14 = _closure1_slot6;
            var3['VoicePanelModes'] = var14;
            var3['focused'] = var9;
            var6['__closure'] = var3;
            var3 = 11330064461661.0;
            var6['__workletHash'] = var3;
            var3 = _closure1_slot10;
            var6['__initData'] = var3;
            var3 = function f(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot4;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = {};
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.runOnJS;
            var9['runOnJS'] = var11;
            var9['handleFocusChange'] = var10;
            var3['__closure'] = var9;
            var9 = 15579591345007.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot11;
            var3['__initData'] = var9;
            var3 = var7.bind(var8)(var6, var3);
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = new Array(0);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.ACTIVITIES_MOBILE_PIP_FAB_NUX;
            var2 = new Array(1);
            var2[0] = var3;
            var6 = var2;
case 12:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['contentTypes'] = var6;
            var5 = function children(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.visibleContent;
                    var7 = var1.markAsDismissed;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var2 = var1.ACTIVITIES_MOBILE_PIP_FAB_NUX;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var2['markAsDismissed'] = var7;
                    var6 = _closure1_slot9;
                    var2['importer'] = var6;
                    var6 = 'VoiceControlToggleNuxActionSheet';
                    var2['actionSheetKey'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 13:
                    return var1;
                }
            };
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();