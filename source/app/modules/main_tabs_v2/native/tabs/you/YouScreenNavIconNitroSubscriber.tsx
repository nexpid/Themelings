// app/modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
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
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NitroHomeSectionId;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function SubscriberNitroIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.onPress;
            var _closure2_slot0 = var8;
            var3 = var1.showReferralNotificationDot;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 6;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.useIsEligibleSenderForReferralProgram;
            var5 = !var3;
            var5 = var6.bind(var7)(var5);
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5;
case 2:
            _closure2_slot1 = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 7;
            var5 = var7[var5];
            var12 = var6.bind(var4)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var5;
            var9 = new Array(1);
            var9[0] = var3;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getReferralsRemaining;
                var1 = {};
                var4 = _closure2_slot1;
                var4 = !var4;
                var1['bypassFetch'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10, var5, var9);
            var5 = 8;
            var5 = var7[var5];
            var9 = var6.bind(var4)(var5);
            var7 = var9.useSelectedTimeRecurringDismissibleContent;
            var5 = null;
            var6 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5 != var10;
            var6 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = 0;
            var3 = var10 > var3;
            var6 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 9;
            var3 = var10[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var6 = var3.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
case 4:
            var5 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS;
            var5['cooldownDurationMs'] = var3;
            var13 = true;
            var17 = var9;
            var16 = var6;
            var15 = var5;
            var14 = undefined;
            var6 = var17[var7](var16, var15, var14, var13, var12);
            var5 = _closure1_slot3;
            var3 = 2;
            var6 = var5.bind(var4)(var6, var3);
            var3 = 0;
            var5 = var6[var3];
            var3 = 1;
            var9 = var6[var3];
            _closure2_slot2 = var9;
            var3 = 9;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
            var5 = var5 === var3;
            _closure2_slot3 = var5;
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var3 = new Array(3);
            var3[0] = var5;
            var3[1] = var9;
            var3[2] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot8;
                    var3 = var2.TAKE_ACTION;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = _closure1_slot6;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.REFERRAL_PROGRAM;
                    var2['scrollToSectionId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 8:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var1 = 11;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = 12;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.NitroWheelIcon;
            var1['IconComponent'] = var7;
            var7 = 13;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Ipxkog;
            var7 = var8.bind(var9)(var7);
            var1['accessibilityLabel'] = var7;
            var1['onPress'] = var6;
            var1['showRedDot'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();