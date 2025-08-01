// app/modules/app_dms/useAppDMEntryPointButtonState.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationFlags;
    var _closure1_slot6 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/useAppDMEntryPointButtonState.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useAppDMEntryPointButtonState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var18 = var2.context;
            var7 = var2.primaryEntryPointCommand;
            var _closure2_slot0 = var7;
            var17 = var2.application;
            var4 = var2.showAppLauncherPopup;
            var14 = undefined;
            if(!(var4 === var14)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var4 = false;
 41:
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var2 = false;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var14)(var5, var2);
            var12 = 0;
            var8 = var3[var12];
            var2 = 1;
            var3 = var3[var2];
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var9 = var5.bind(var14)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentEmbeddedActivity;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var6.bind(var9)(var5, var2);
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = 5;
            var2 = var2[var15];
            var2 = var6.bind(var14)(var2);
            var2 = var2.t;
            if(var4) { _fun0001_ip = 172; continue _fun0001 }
 164:
            var13 = var2.0hKkS0;
            _fun0001_ip = 178; continue _fun0001;
 172:
            var13 = var2.cpT0Cg;
 178:
            var6 = _closure1_slot4;
            var4 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 77; continue _fun0002 }
 13:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 5;
                    var3 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.3xjX0d;
                    var1 = var3.bind(var4)(var1);
                    _fun0002_ip = 122; continue _fun0002;
 77:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.formatPrimaryEntryPointCommandName;
                    var2 = _closure2_slot0;
                    var2 = var2.displayName;
                    var1 = var3.bind(var4)(var2);
 122:
                    return var1;
                }
            };
            var9 = var4.bind(var6)(var1, var2);
            var1 = var17.flags;
            var6 = var14 !== var1;
            if(!var6) { _fun0001_ip = 267; continue _fun0001 }
 220:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var7 = var2.bind(var14)(var1);
            var4 = var7.hasFlag;
            var2 = var17.flags;
            var1 = _closure1_slot6;
            var1 = var1.EMBEDDED;
            var6 = var4.bind(var7)(var2, var1);
 267:
            var11 = null;
            var7 = var11 != var5;
            if(!var7) { _fun0001_ip = 290; continue _fun0001 }
 276:
            var2 = var5.applicationId;
            var1 = var17.id;
            var7 = var2 === var1;
 290:
            if(!var7) { _fun0001_ip = 343; continue _fun0001 }
 293:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var4 = var2.bind(var14)(var1);
            var2 = var4.getEmbeddedActivityLocationChannelId;
            var1 = var5.location;
            var2 = var2.bind(var4)(var1);
            var1 = var18.channel;
            var1 = var1.id;
            var7 = var2 === var1;
 343:
            var4 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 9;
            var1 = var16[var1];
            var2 = var4.bind(var14)(var1);
            var1 = 10;
            var1 = var16[var1];
            var1 = var4.bind(var14)(var1);
            var1 = var1.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            var1 = var2.bind(var14)(var1);
            var2 = var1.analyticsLocations;
            var1 = var18.channel;
            var1 = var1.recipients;
            var1 = var11 != var1;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 427; continue _fun0001 }
 412:
            var1 = var18.channel;
            var1 = var1.recipients;
            var4 = var1[var12];
 427:
            var1 = {};
            var1['isExecutingLaunchInteraction'] = var8;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 11;
            var8 = var16[var8];
            var16 = var12.bind(var14)(var8);
            var12 = var16.useIsPrimaryAppCommandUsableInAppDM;
            var8 = {};
            var8['context'] = var18;
            var17 = var17.id;
            var8['applicationId'] = var17;
            var8['botUserId'] = var4;
            var8 = var12.bind(var16)(var8);
            if(!var8) { _fun0001_ip = 491; continue _fun0001 }
 488:
            if(var6) { _fun0001_ip = 525; continue _fun0001 }
 491:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var15];
            var8 = var12.bind(var14)(var8);
            var12 = var8.intl;
            var8 = var12.string;
            var8 = var8.bind(var12)(var13);
            _fun0001_ip = 641; continue _fun0001;
 525:
            if(var7) { _fun0001_ip = 586; continue _fun0001 }
 528:
            if(!(var11 == var9)) { _fun0001_ip = 584; continue _fun0001 }
 532:
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var15];
            var12 = var16.bind(var14)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var15];
            var11 = var16.bind(var14)(var11);
            var11 = var11.t;
            var11 = var11.zKX8Nj;
            var9 = var12.bind(var13)(var11);
 584:
            _fun0001_ip = 638; continue _fun0001;
 586:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var15];
            var11 = var13.bind(var14)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var15];
            var10 = var13.bind(var14)(var10);
            var10 = var10.t;
            var10 = var10.Hi1/aW;
            var9 = var11.bind(var12)(var10);
 638:
            var8 = var9;
 641:
            var1['buttonText'] = var8;
            var1['hasActiveMatchingEmbeddedActivity'] = var7;
            var1['isEmbeddedApp'] = var6;
            var1['currentEmbeddedActivity'] = var5;
            var1['channelRecipientUserId'] = var4;
            var1['setIsExecutingLaunchInteraction'] = var3;
            var1['analyticsLocations'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function useOnEntryPointCommandButtonPress(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var12 = var2.context;
            var _closure2_slot0 = var12;
            var11 = var2.application;
            var _closure2_slot1 = var11;
            var3 = var2.isEmbeddedApp;
            var13 = var2.hasActiveMatchingEmbeddedActivity;
            var _closure2_slot2 = var13;
            var10 = var2.currentEmbeddedActivity;
            var _closure2_slot3 = var10;
            var4 = var2.onOpenButtonPress;
            var14 = var2.channelRecipientUserId;
            var8 = var2.setIsExecutingLaunchInteraction;
            var _closure2_slot4 = var8;
            var9 = var2.analyticsLocations;
            var _closure2_slot5 = var9;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 11;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.useIsPrimaryAppCommandUsableInAppDM;
            var5 = {};
            var5['context'] = var12;
            var15 = var11.id;
            var5['applicationId'] = var15;
            var5['botUserId'] = var14;
            var5 = var6.bind(var7)(var5);
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var2 = new Array(6);
            var2[0] = var13;
            var12 = var12.channel;
            var12 = var12.id;
            var2[1] = var12;
            var11 = var11.id;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var2[5] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0004_ip = 23; continue _fun0004 }
 10:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0004_ip = 156; continue _fun0004 }
 23:
                    var2 = _closure2_slot4;
                    var3 = undefined;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var1 = var7[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var1['targetApplicationId'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.channel;
                    var6 = var6.id;
                    var1['channelId'] = var6;
                    var6 = _closure2_slot5;
                    var1['analyticsLocations'] = var6;
                    var6 = function onExecutedCallback() {
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onExecutedCallback'] = var6;
                    var6 = _closure1_slot0;
                    var5 = 14;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.CommandOrigin;
                    var5 = var5.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                    var1['commandOrigin'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 220; continue _fun0004;
 156:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var3 = var1.bind(var2)();
                    var2 = var3.leaveActivity;
                    var1 = {};
                    var4 = _closure2_slot3;
                    var5 = var4.location;
                    var1['location'] = var5;
                    var4 = var4.applicationId;
                    var1['applicationId'] = var4;
                    var1 = var2.bind(var3)(var1);
 220:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var1, var2);
            var1 = var4;
            if(!var5) { _fun0003_ip = 217; continue _fun0003 }
 208:
            var1 = var4;
            if(!var3) { _fun0003_ip = 217; continue _fun0003 }
 214:
            var1 = var2;
 217:
            return var1;
        }
    };
    var3['useOnEntryPointCommandButtonPress'] = var2;
    return var1;
})();