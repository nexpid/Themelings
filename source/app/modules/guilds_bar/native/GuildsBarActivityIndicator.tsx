// app/modules/guilds_bar/native/GuildsBarActivityIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var4 = function getMediaIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.audio;
            var3 = var2.video;
            var4 = var2.screenshare;
            var5 = var2.liveStage;
            var6 = var2.activeEvent;
            var2 = var2.activity;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = null;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 16;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.AppsIcon;
            var2['icon'] = var4;
            var4 = _closure1_slot1;
            var3 = 17;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2['source'] = var3;
            var1 = var2;
case 12:
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 14;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.VoiceNormalIcon;
            var2['icon'] = var4;
            var4 = _closure1_slot1;
            var3 = 15;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2['source'] = var3;
            var1 = var2;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 8:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 12;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.VideoIcon;
            var2['icon'] = var4;
            var4 = _closure1_slot1;
            var3 = 13;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2['source'] = var3;
            var1 = var2;
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 6:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.ScreenIcon;
            var2['icon'] = var4;
            var4 = _closure1_slot1;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2['source'] = var3;
            var1 = var2;
case 16:
            _fun0001_ip = 17; continue _fun0001;
case 4:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 8;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.StageIcon;
            var2['icon'] = var4;
            var4 = _closure1_slot1;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2['source'] = var3;
            var1 = var2;
case 17:
            _fun0001_ip = 18; continue _fun0001;
case 2:
            var2 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.CalendarIcon;
            var2['icon'] = var4;
            var4 = _closure1_slot1;
            var3 = 7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2['source'] = var3;
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var2 = function useActivityIndicatorState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 18;
            var3 = var5[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = arg1;
            var5 = var4.bind(var6)(var3);
            var _closure2_slot0 = var5;
            var3 = _closure1_slot7;
            var7 = var3.bind(var6)(var5);
            var _closure2_slot1 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var8 = null;
            var2 = var8 == var7;
            var9 = undefined;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = var7.icon;
case 19:
            var2 = new Array(3);
            var2[0] = var9;
            var8 = var8 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = var7.source;
case 21:
            var2[1] = var6;
            var5 = var5.isCurrentUserConnected;
            var2[2] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot1;
                    var3 = null;
                    var6 = var3 == var4;
                    var5 = undefined;
                    if(var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var6 = _closure2_slot1;
                    var5 = var6.icon;
case 23:
                    var1['IconComponent'] = var5;
                    var5 = _closure2_slot1;
                    var5 = var3 == var5;
                    var4 = undefined;
                    if(var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var5 = _closure2_slot1;
                    var4 = var5.source;
case 25:
                    var5 = var3 != var4;
                    var3 = null;
                    if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var3 = var4;
case 27:
                    var1['source'] = var3;
                    var2 = _closure2_slot0;
                    var2 = var2.isCurrentUserConnected;
                    var1['isCurrentUserConnected'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var7 = var9[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var10 = var5.bind(var1)(var7);
    var _closure1_slot3 = var10;
    var5 = 1;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var9[var5];
    var11 = var8.bind(var1)(var5);
    var7 = var11.createStyles;
    var5 = {};
    var12 = {'position': 'absolute', 'top': 4294967293, 'right': 4294967293, 'justifyContent': 'center', 'width': 22, 'height': 22, 'padding': 3};
    var13 = 3;
    var15 = var9[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var12['borderRadius'] = var15;
    var15 = var9[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var12['backgroundColor'] = var15;
    var5['activityWrapper'] = var12;
    var12 = {'justifyContent': 'center', 'width': 16, 'height': 16, 'padding': 2};
    var15 = var9[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var15 = var9[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_STRONG;
    var12['backgroundColor'] = var15;
    var5['activityIconWrapper'] = var12;
    var12 = {};
    var15 = var9[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_360;
    var12['backgroundColor'] = var15;
    var5['activityIconWrapperActive'] = var12;
    var12 = {'width': 12, 'height': 12};
    var13 = var9[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var12['borderRadius'] = var13;
    var5['activityIcon'] = var12;
    var5 = var7.bind(var11)(var5);
    var _closure1_slot5 = var5;
    var7 = var10.memo;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.IconComponent;
            var9 = var1.style;
            var13 = var1.source;
            var14 = var1.isCurrentUserConnected;
            var1 = _closure1_slot5;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 4;
            var1 = var7[var5];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var15 = var11.activityWrapper;
            var8 = new Array(2);
            var8[0] = var15;
            var8[1] = var9;
            var1['style'] = var8;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var7 = var11.activityIconWrapper;
            var8 = new Array(2);
            var8[0] = var7;
            var7 = null;
            var9 = null;
            if(!var14) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var9 = var11.activityIconWrapperActive;
case 29:
            var8[1] = var9;
            var5['style'] = var8;
            if(!(var7 == var10)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var9 = _closure1_slot4;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 5;
            var7 = var15[var7];
            var8 = var14.bind(var4)(var7);
            var7 = {};
            var7['source'] = var13;
            var13 = 3;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.WHITE;
            var7['color'] = var13;
            var13 = var11.activityIcon;
            var7['style'] = var13;
            var7 = var9.bind(var4)(var8, var7);
            _fun0004_ip = 33; continue _fun0004;
case 31:
            var9 = _closure1_slot4;
            var8 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 3;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var8['color'] = var12;
            var12 = 'xxs';
            var8['size'] = var12;
            var11 = var11.activityIcon;
            var8['style'] = var11;
            var7 = var9.bind(var4)(var10, var8);
case 33:
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var7.bind(var10)(var5);
    var _closure1_slot6 = var5;
    var7 = var10.memo;
    var6 = function GuildsBarGuildActivityIndicator(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var8 = var1.style;
            var1 = _closure1_slot8;
            var5 = undefined;
            var1 = var1.bind(var5)(var3);
            var9 = var1.IconComponent;
            var7 = var1.source;
            var6 = var1.isCurrentUserConnected;
            var1 = null;
            var3 = var1 != var7;
            if(!var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var4 = _closure1_slot4;
            var3 = _closure1_slot6;
            var2 = {};
            var2['IconComponent'] = var9;
            var2['style'] = var8;
            var2['source'] = var7;
            var2['isCurrentUserConnected'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 34:
            return var1;
        }
    };
    var6 = var7.bind(var10)(var6);
    var7 = 19;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guilds_bar/native/GuildsBarActivityIndicator.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['GuildsBarActivityIndicatorBase'] = var5;
    var3['getMediaIcon'] = var4;
    var3['useActivityIndicatorState'] = var2;
    return var1;
})();