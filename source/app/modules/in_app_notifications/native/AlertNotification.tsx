// app/modules/in_app_notifications/native/AlertNotification.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ImageSizes;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildIconSizes;
    var4 = var4.NORMAL;
    var9 = var7[var4];
    var4 = {'shape': null, 'x': null, 'y': 4294967290, 'width': 24, 'height': 24};
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.CutoutShape;
    var7 = var7.RoundedRect;
    var4['shape'] = var7;
    var7 = -6;
    var9 = var9 - var7;
    var7 = 24;
    var7 = var9 - var7;
    var4['x'] = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.radii;
    var7 = var7.sm;
    var4['cornerRadius'] = var7;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967290, 'width': 24, 'height': 24, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['warningBadge'] = var9;
    var9 = {'width': 16, 'height': 16};
    var4['warningIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/AlertNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AlertNotification(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.notification;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var4 = var1.key;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot10;
            var20 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var10 = var2.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var9.bind(var10)(var7, var1);
            var _closure2_slot1 = var19;
            var1 = 9;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGuildIncidentsState;
            var1 = var1.bind(var2)(var4);
            var4 = var1.incidentData;
            var1 = null;
            var6 = var1 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.raidDetectedAt;
case 2:
            if(!(var1 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var4 = var9[var2];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.evRhwg;
            var10 = var4.bind(var6)(var2);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var4 = var9[var2];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Mn3elp;
            var10 = var4.bind(var6)(var2);
case 6:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.useInAppNotificationRedesign;
            var2 = 'AlertNotification';
            var2 = var4.bind(var6)(var2);
            var2 = var2.redesignEnabled;
            _closure2_slot2 = var2;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var19;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = {};
                    var2 = 'simple';
                    var1['type'] = var2;
                    var3 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 == var3;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = _closure2_slot1;
                    var3 = var5.name;
case 9:
                    var5 = var2 != var3;
                    var2 = '';
                    if(!var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = var3;
case 11:
                    var1['text'] = var2;
                    _fun0002_ip = 13; continue _fun0002;
case 7:
                    var2 = {};
                    var3 = 'simple';
                    var2['type'] = var3;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 10;
                    var6 = var9[var5];
                    var3 = undefined;
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5["2IY4YN"];
                    var5 = var6.bind(var7)(var5);
                    var2['text'] = var5;
                    var6 = _closure2_slot1;
                    var5 = null;
                    var5 = var5 == var6;
                    if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = _closure2_slot1;
                    var3 = var4.name;
case 14:
                    var2['secondaryText'] = var3;
                    var1 = var2;
case 13:
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var3, var4);
            var3 = var1 == var19;
            var1 = null;
            if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = _closure1_slot6;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.Notification;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = {};
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 10;
            var9 = var12[var6];
            var9 = var13.bind(var5)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var6 = var12[var6];
            var6 = var13.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6["2IY4YN"];
            var6 = var9.bind(var11)(var6);
            var2['alertLabel'] = var6;
            var11 = _closure1_slot6;
            var9 = _closure1_slot1;
            var6 = 4;
            var6 = var12[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var19;
            var12 = false;
            var6['selected'] = var12;
            var6 = var11.bind(var5)(var9, var6);
            var2['icon'] = var6;
            var2['textChildren'] = var10;
            var2['header'] = var7;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var6 = {};
            var14 = _closure1_slot8;
            var13 = _closure1_slot7;
            var12 = {};
            var9 = _closure1_slot6;
            var21 = _closure1_slot1;
            var11 = _closure1_slot2;
            var15 = 5;
            var15 = var11[var15];
            var16 = var21.bind(var5)(var15);
            var15 = {};
            var18 = _closure1_slot9;
            var17 = new Array(1);
            var17[0] = var18;
            var15['cutouts'] = var17;
            var17 = 4;
            var17 = var11[var17];
            var18 = var21.bind(var5)(var17);
            var17 = {};
            var17['guild'] = var19;
            var19 = false;
            var17['selected'] = var19;
            var17 = var9.bind(var5)(var18, var17);
            var15['children'] = var17;
            var16 = var9.bind(var5)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var17 = _closure1_slot4;
            var16 = {};
            var18 = var20.warningBadge;
            var16['style'] = var18;
            var8 = _closure1_slot0;
            var18 = 13;
            var18 = var11[var18];
            var18 = var8.bind(var5)(var18);
            var19 = var18.WarningIcon;
            var18 = {};
            var20 = var20.warningIcon;
            var18['style'] = var20;
            var20 = 6;
            var20 = var11[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.colors;
            var20 = var20.ICON_FEEDBACK_WARNING;
            var18['color'] = var20;
            var18 = var9.bind(var5)(var19, var18);
            var16['children'] = var18;
            var16 = var9.bind(var5)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var6['icon'] = var12;
            var6['header'] = var7;
            var7 = 14;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.SystemMessageText;
            var7 = {};
            var7['text'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6['children'] = var7;
            var2 = var6;
case 20:
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();