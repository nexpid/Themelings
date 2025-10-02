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
case 0:
            var1 = arg1;
            var2 = var1.activity;
            var14 = var1.iconStyle;
            var12 = var1.textStyle;
            var11 = var1.maxFontSizeMultiplier;
            var5 = var1.hideIcon;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var6 = var1.hideText;
            if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = false;
case 4:
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
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 10;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.bind(var4)(var2, var8);
            var10 = var3.text;
            if(!(var1 === var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = false;
case 9:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 3;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.PLAYING;
            if(!(var8 !== var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.LISTENING;
            if(!(var8 !== var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.WATCHING;
            if(!(var8 !== var3)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var8 = var2.type;
            var3 = _closure1_slot3;
            var3 = var3.STREAMING;
            if(!(var8 !== var3)) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var3 = var2.type;
            var2 = _closure1_slot3;
            var2 = var2.COMPETING;
            var15 = null;
            if(!(var3 === var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.GameControllerIcon;
case 20:
            _fun0001_ip = 22; continue _fun0001;
case 17:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.TvIcon;
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 15:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.MusicIcon;
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 13:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.GameControllerIcon;
case 24:
            _fun0001_ip = 25; continue _fun0001;
case 11:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = 5;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AppsIcon;
            _fun0001_ip = 28; continue _fun0001;
case 26:
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var1 = var2.GameControllerIcon;
case 28:
            var15 = var1;
case 25:
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = !var5;
            if(!var8) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var5 = null;
            var8 = var5 != var15;
case 29:
            if(!var8) { _fun0001_ip = 31; continue _fun0001 }
case 32:
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
case 31:
            var5 = new Array(2);
            var5[0] = var8;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
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
case 33:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 8:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();