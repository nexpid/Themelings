// app/modules/activity_status/native/VoiceActivityStatus.tsx
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
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var7 = var4.Fragment;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flexShrink'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/native/VoiceActivityStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceActivityStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var16 = var1.iconStyle;
            var14 = var1.textStyle;
            var13 = var1.maxFontSizeMultiplier;
            var6 = var1.hideIcon;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var7 = var1.hideText;
            if(!(var7 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = false;
case 4:
            var1 = _closure1_slot6;
            var15 = var1.bind(var5)();
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = null;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = !var6;
            if(!var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot3;
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 3;
            var6 = var17[var6];
            var10 = var10.bind(var5)(var6);
            var6 = {'channel': null, 'size': 'xxs', 'color': 'status-positive'};
            var6['channel'] = var9;
            var17 = var15.icon;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var6['style'] = var15;
            var8 = var11.bind(var5)(var10, var6);
case 9:
            var6 = new Array(2);
            var6[0] = var8;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var9.isDM;
            var8 = var8.bind(var9)();
            if(var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = var9.isGroupDM;
            var8 = var8.bind(var9)();
            if(var8) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var8 = var9.isGuildStageVoice;
            var8 = var8.bind(var9)();
            var11 = _closure1_slot3;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = 4;
            var9 = var19[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['style'] = var14;
            var9['maxFontSizeMultiplier'] = var13;
            var18 = _closure1_slot0;
            var15 = 5;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var15.msxteH;
            var8 = var16.bind(var17)(var8);
            var9['children'] = var8;
            var8 = var11.bind(var5)(var10, var9);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var15 = var15.QygGCA;
            var15 = var16.bind(var17)(var15);
            var9['children'] = var15;
            var8 = var11.bind(var5)(var10, var9);
case 18:
            _fun0001_ip = 19; continue _fun0001;
case 13:
            var11 = _closure1_slot3;
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 4;
            var9 = var16[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['style'] = var14;
            var9['maxFontSizeMultiplier'] = var13;
            var15 = _closure1_slot0;
            var12 = 5;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.9FaEzs;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 19:
            var7 = var8;
case 11:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();