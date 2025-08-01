// app/modules/activity_status/native/PresenceActivityStatus.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.Fragment;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/PresenceActivityStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PresenceActivityStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.activity;
            var14 = var1.iconStyle;
            var12 = var1.textStyle;
            var11 = var1.maxFontSizeMultiplier;
            var5 = var1.hideIcon;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var5 = false;
 41:
            var6 = var1.hideText;
            if(!(var6 === var4)) { _fun0001_ip = 53; continue _fun0001 }
 51:
            var6 = false;
 53:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var15 = var1.ActivitiesControllerIconMobileExperiment;
            var13 = var15.useExperiment;
            var3 = {};
            var10 = 'PresenceActivityStatus';
            var3['location'] = var10;
            var1 = {};
            var16 = true;
            var1['autoTrackExposure'] = var16;
            var1 = var13.bind(var15)(var3, var1);
            var1 = var1.enabled;
            var3 = 9;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = var9.useActivityStatusDescriptiveTextExperiment;
            var3 = {};
            var3['location'] = var10;
            var3 = var8.bind(var9)(var3);
            var8 = var3.descriptiveTextEnabled;
            if(!var5) { _fun0001_ip = 164; continue _fun0001 }
 158:
            if(var6) { _fun0001_ip = 636; continue _fun0001 }
 164:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 10;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.bind(var4)(var2, var8);
            var10 = var3.text;
            if(!(var1 === var4)) { _fun0001_ip = 201; continue _fun0001 }
 199:
            var1 = false;
 201:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 3;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 444; continue _fun0001 }
 232:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.PLAYING;
            if(!(var8 !== var3)) { _fun0001_ip = 416; continue _fun0001 }
 254:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.LISTENING;
            if(!(var8 !== var3)) { _fun0001_ip = 388; continue _fun0001 }
 273:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.WATCHING;
            if(!(var8 !== var3)) { _fun0001_ip = 360; continue _fun0001 }
 292:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.STREAMING;
            if(!(var8 !== var3)) { _fun0001_ip = 360; continue _fun0001 }
 311:
            var3 = var2.type;
            var2 = _closure1_slot3;
            var2 = var2.COMPETING;
            var15 = null;
            if(!(var3 === var2)) { _fun0001_ip = 358; continue _fun0001 }
 332:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.GameControllerIcon;
 358:
            _fun0001_ip = 386; continue _fun0001;
 360:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.TvIcon;
 386:
            _fun0001_ip = 414; continue _fun0001;
 388:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.MusicIcon;
 414:
            _fun0001_ip = 442; continue _fun0001;
 416:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.GameControllerIcon;
 442:
            _fun0001_ip = 496; continue _fun0001;
 444:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var1) { _fun0001_ip = 475; continue _fun0001 }
 455:
            var1 = 5;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AppsIcon;
            _fun0001_ip = 493; continue _fun0001;
 475:
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.GameControllerIcon;
 493:
            var15 = var1;
 496:
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = !var5;
            if(!var8) { _fun0001_ip = 518; continue _fun0001 }
 512:
            var5 = null;
            var8 = var5 != var15;
 518:
            if(!var8) { _fun0001_ip = 561; continue _fun0001 }
 521:
            var13 = _closure1_slot4;
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 11;
            var5 = var16[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['icon'] = var15;
            var5['style'] = var14;
            var8 = var13.bind(var4)(var9, var5);
 561:
            var5 = new Array(2);
            var5[0] = var8;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 620; continue _fun0001 }
 575:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 12;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['style'] = var12;
            var7['maxFontSizeMultiplier'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 620:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 636:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();