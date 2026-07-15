// app/modules/in_app_notifications/native/MessageNotificationDetachedContent.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Keyboard;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_ANIMATION_TIMING;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'bottom': 4, 'left': 0, 'right': 0};
    var4['expandFooterContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function MessageNotificationDetachedContentTsx1(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}]};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotificationDetachedContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MessageNotificationDetachedContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.notification;
            var2 = _closure1_slot9;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 5;
            var2 = var16[var2];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useInAppNotificationContext;
            var2 = var2.bind(var3)();
            var14 = var2.isExpanded;
            var6 = var2.expandedSV;
            var _closure2_slot0 = var6;
            var8 = var2.showReplyInput;
            var17 = var2.setActionTaken;
            var _closure2_slot1 = var17;
            var12 = var2.setExpanded;
            var _closure2_slot2 = var12;
            var9 = var2.setAutoDismissing;
            var _closure2_slot3 = var9;
            var18 = var2.confirmation;
            var2 = var2.setConfirmation;
            var _closure2_slot4 = var2;
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var3 = new Array(4);
            var3[0] = var17;
            var3[1] = var12;
            var3[2] = var9;
            var3[3] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var3 = _closure2_slot1;
                var1 = undefined;
                var5 = true;
                var3 = var3.bind(var1)(var5);
                var6 = _closure2_slot2;
                var3 = false;
                var3 = var6.bind(var1)(var3);
                var3 = _closure2_slot3;
                var3 = var3.bind(var1)(var5);
                var3 = _closure2_slot4;
                var2 = {'type': 'message', 'reaction': null};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 6;
                var5 = var8[var4];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var1)(var4);
                var4 = var4.t;
                var4 = var4.b/4dOF;
                var4 = var5.bind(var6)(var4);
                var2['message'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var5.bind(var7)(var2, var3);
            var7 = 7;
            var2 = var16[var7];
            var3 = var15.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function _() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 8;
                    var3 = var3[var8];
                    var7 = undefined;
                    var9 = var4.bind(var7)(var3);
                    var6 = var9.withTiming;
                    var5 = _closure2_slot0;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 0;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = 1;
case 2:
                    var3 = _closure1_slot5;
                    var3 = var6.bind(var9)(var5, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.withTiming;
                    var7 = _closure2_slot0;
                    var4 = var7.get;
                    var7 = var4.bind(var7)();
                    var4 = 0.8;
                    if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = 1;
case 4:
                    var2 = _closure1_slot5;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var9 = 8;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var9 = var9.withTiming;
            var5['withTiming'] = var9;
            var5['expandedSV'] = var6;
            var6 = _closure1_slot5;
            var5['DEFAULT_ANIMATION_TIMING'] = var6;
            var1['__closure'] = var5;
            var5 = 16391347485958.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot10;
            var1['__initData'] = var5;
            var15 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var9 = null;
            var5 = var9 != var18;
            var6 = null;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var17 = _closure1_slot6;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 9;
            var5 = var19[var5];
            var5 = var16.bind(var4)(var5);
            var16 = var5.ConfirmationToast;
            var5 = {};
            var19 = var18.message;
            var5['message'] = var19;
            var18 = var18.reaction;
            var5['reaction'] = var18;
            var6 = var17.bind(var4)(var16, var5);
case 6:
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = null;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var16 = var11.expandFooterContainer;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var15;
            var7['style'] = var11;
            var11 = _closure1_slot0;
            var10 = 10;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.MessageReplyInput;
            var10 = {};
            var10['notification'] = var13;
            var10['onMessageSent'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 8:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MessageNotificationDetachedContent'] = var2;
    return var1;
})();