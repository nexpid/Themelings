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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/PresenceActivityStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PresenceActivityStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.activity;
            var14 = var2.iconStyle;
            var12 = var2.textStyle;
            var11 = var2.maxFontSizeMultiplier;
            var5 = var2.hideIcon;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var6 = var2.hideText;
            if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = false;
case 4:
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var9 = var3.bind(var4)(var2);
            var2 = true;
            var2 = var9.bind(var4)(var1, var2);
            var10 = var2.text;
            var2 = 3;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var1);
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var1.type;
            var2 = _closure1_slot3;
            var2 = var2.PLAYING;
            if(!(var3 !== var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var1.type;
            var2 = _closure1_slot3;
            var2 = var2.LISTENING;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var1.type;
            var2 = _closure1_slot3;
            var2 = var2.WATCHING;
            if(!(var3 !== var2)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var1.type;
            var2 = _closure1_slot3;
            var2 = var2.STREAMING;
            if(!(var3 !== var2)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var2 = var1.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            var15 = null;
            if(!(var2 === var1)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var15 = var1.GameControllerIcon;
case 18:
            _fun0001_ip = 20; continue _fun0001;
case 15:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var15 = var1.TvIcon;
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 13:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var15 = var1.MusicIcon;
case 21:
            _fun0001_ip = 22; continue _fun0001;
case 11:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var15 = var1.GameControllerIcon;
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 9:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.AppsIcon;
            var15 = var1;
case 23:
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = !var5;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = null;
            var8 = var5 != var15;
case 24:
            if(!var8) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var13 = _closure1_slot4;
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 9;
            var5 = var16[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['icon'] = var15;
            var5['style'] = var14;
            var8 = var13.bind(var4)(var9, var5);
case 26:
            var5 = new Array(2);
            var5[0] = var8;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 10;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['style'] = var12;
            var7['maxFontSizeMultiplier'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 28:
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