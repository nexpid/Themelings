// app/modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsPrimaryEntryPointDisabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.context;
            var10 = var3.application;
            var11 = var3.activityAction;
            var7 = undefined;
            var _closure2_slot0 = var7;
            var4 = var1.type;
            var3 = 'channel';
            var9 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 47; continue _fun0001 }
 42:
            var9 = var1.channel;
 47:
            _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 3;
            var5 = var3[var5];
            var8 = var4.bind(var7)(var5);
            var6 = var8.useStateFromStores;
            var12 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var12;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot5;
                var2 = var1.USE_EMBEDDED_ACTIVITIES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var6.bind(var8)(var5, var2);
            var13 = 4;
            var3 = var3[var13];
            var6 = var4.bind(var7)(var3);
            var4 = var6.useEmbeddedActivityLaunchability;
            var5 = null;
            var8 = var5 == var9;
            var3 = undefined;
            if(var8) { _fun0001_ip = 138; continue _fun0001 }
 133:
            var3 = var9.id;
 138:
            var3 = var4.bind(var6)(var3);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 5;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.ActivityAction;
            var12 = var4.LEAVE;
            var6 = false;
            if(!(var12 !== var11)) { _fun0001_ip = 420; continue _fun0001 }
 184:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var14.bind(var7)(var12);
            var12 = var12.ActivityAction;
            var12 = var12.START;
            if(!(var12 !== var11)) { _fun0001_ip = 317; continue _fun0001 }
 217:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var12 = var14.bind(var7)(var12);
            var12 = var12.ActivityAction;
            var12 = var12.JOIN;
            var6 = false;
            if(!(var12 === var11)) { _fun0001_ip = 420; continue _fun0001 }
 255:
            if(!(var5 != var9)) { _fun0001_ip = 272; continue _fun0001 }
 259:
            var12 = var9.isGuildVoice;
            var12 = var12.bind(var9)();
            if(var12) { _fun0001_ip = 312; continue _fun0001 }
 272:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 6;
            var12 = var15[var12];
            var14 = var14.bind(var7)(var12);
            var12 = var14.isActivitiesInTextEnabled;
            var12 = var12.bind(var14)(var9);
            var6 = false;
            if(var12) { _fun0001_ip = 420; continue _fun0001 }
 308:
            var6 = true;
            _fun0001_ip = 420; continue _fun0001;
 312:
            var6 = !var2;
            _fun0001_ip = 420; continue _fun0001;
 317:
            var2 = var5 == var9;
            var6 = false;
            if(var2) { _fun0001_ip = 420; continue _fun0001 }
 326:
            if(!(var5 != var9)) { _fun0001_ip = 343; continue _fun0001 }
 330:
            var2 = var9.isGuildVoice;
            var2 = var2.bind(var9)();
            if(var2) { _fun0001_ip = 383; continue _fun0001 }
 343:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var12 = var12.bind(var7)(var2);
            var2 = var12.isActivitiesInTextEnabled;
            var2 = var2.bind(var12)(var9);
            var6 = false;
            if(var2) { _fun0001_ip = 420; continue _fun0001 }
 379:
            var6 = true;
            _fun0001_ip = 420; continue _fun0001;
 383:
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var13];
            var2 = var12.bind(var7)(var2);
            var2 = var2.EmbeddedActivityLaunchability;
            var2 = var2.CAN_LAUNCH;
            var6 = false;
            if(!(var3 !== var2)) { _fun0001_ip = 420; continue _fun0001 }
 418:
            var6 = true;
 420:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var7)(var2);
            var2 = var2.ActivityAction;
            var8 = var2.LEAVE;
            var2 = undefined;
            var3 = var6;
            if(!(var11 !== var8)) { _fun0001_ip = 705; continue _fun0001 }
 461:
            var8 = _closure1_slot3;
            var8 = var10 instanceof var8;
            if(var8) { _fun0001_ip = 480; continue _fun0001 }
 472:
            var8 = var10.embedded_activity_config;
            _fun0001_ip = 486; continue _fun0001;
 480:
            var8 = var10.embeddedActivityConfig;
 486:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 7;
            var10 = var13[var10];
            var11 = var11.bind(var7)(var10);
            var12 = _closure1_slot0;
            var10 = 8;
            var10 = var13[var10];
            var12 = var12.bind(var7)(var10);
            var10 = var12.getOS;
            var10 = var10.bind(var12)();
            var11 = var11.bind(var7)(var10);
            if(!(var5 != var8)) { _fun0001_ip = 621; continue _fun0001 }
 541:
            var10 = var8.supported_platforms;
            var8 = var10.includes;
            var8 = var8.bind(var10)(var11);
            if(var8) { _fun0001_ip = 621; continue _fun0001 }
 560:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 9;
            var10 = var13[var8];
            var10 = var12.bind(var7)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var13[var8];
            var8 = var12.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.z2YTgI;
            var2 = var10.bind(var11)(var8);
            var3 = false;
            _fun0001_ip = 705; continue _fun0001;
 621:
            var4 = var5 != var9;
            if(!var4) { _fun0001_ip = 638; continue _fun0001 }
 628:
            var8 = var9.isThread;
            var4 = var8.bind(var9)();
 638:
            var2 = undefined;
            var3 = var6;
            if(!var4) { _fun0001_ip = 705; continue _fun0001 }
 646:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var6 = var10[var4];
            var6 = var9.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.ddSR3t;
            var2 = var6.bind(var8)(var4);
            var3 = true;
 705:
            var4 = var3;
            if(!var4) { _fun0001_ip = 715; continue _fun0001 }
 711:
            var4 = var5 == var2;
 715:
            if(!var4) { _fun0001_ip = 773; continue _fun0001 }
 718:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var4 = var8[var1];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.f41E1t;
            var2 = var4.bind(var5)(var1);
 773:
            var1 = {};
            var1['disabled'] = var3;
            var1['reason'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();